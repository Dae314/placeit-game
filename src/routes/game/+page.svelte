<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { scale, fade, fly } from 'svelte/transition';
	import { AppData, saveAppData } from '$lib/stores/AppData.js';
	import { Alert } from '$lib/stores/Alert.js';
	import RollerDisplay from '$lib/components/RollerDisplay.svelte';
	import formatTime from '$lib/formatTime.js';

	const numBuckets = 20;
	const deckMin = 1;
	const deckMax = 999;
	const gameOverDelay = 1000;
	const gameOverAnimationTime = 750;
	const maxFPS = 10;

	let deck;
	let rollResult;
	let bucketList = new Array(numBuckets).fill().map(() => { return {disabled: false, value: null} });
	let showGameOver = false;
	let score = 0;
	let startTime;
	let stopTime;
	let finalTime;
	let lastFrameTime;
	let frame;
	let elapsedTime;

	onMount(() => {
		rollResult = deckMax;
		setTimeout(() => reset(), 100);
	});

	onDestroy(() => {
		if(browser) {
			window.cancelAnimationFrame(frame);
		}
	});

	function updateElapsedTime(timestamp) {
		if (timestamp < lastFrameTime + (1000 / maxFPS)) {
			frame = requestAnimationFrame(updateElapsedTime);
			return;
		}
		lastFrameTime = timestamp;
		elapsedTime = timestamp - startTime;
		frame = window.requestAnimationFrame(updateElapsedTime);
	}

	function reset() {
		deck = [];
		for(let i = deckMin; i <= deckMax; i++) {
			deck.push(i);
		}
		bucketList = new Array(numBuckets).fill().map(() => { return {disabled: false, value: null} });

		showGameOver = false;
		setTimeout(() => { startTime = window.performance.now(); lastFrameTime = startTime; frame = window.requestAnimationFrame(updateElapsedTime); }, gameOverAnimationTime);
		stopTime = {};

		drawRandom();
	}

	function drawRandom() {
		const min = 0;
		const max = deck.length - 1;
		const i = Math.floor(Math.random() * (max - min + 1)) + min;
		const result = deck[i];
		deck.splice(i, 1);
		rollResult = result;
		validate();
	}

	function selectBucket(i) {
		bucketList[i].value = rollResult;
		bucketList[i].disabled = true;
		drawRandom();
		checkWinLoss();
	}

	function validate() {
		if(bucketList.every(e => e.value === null)) return;

		const vals = bucketList.filter(e => e.value !== null).map(e => e.value);

		let leftMax = NaN;
		for(const val of vals) {
			if(val < rollResult && (isNaN(leftMax) || val > leftMax)) leftMax = val;
		}
		let rightMin = NaN;
		for(const val of vals) {
			if(val > rollResult && (isNaN(rightMin) || val < rightMin)) rightMin = val;
		}

		if(isNaN(leftMax) && !isNaN(rightMin)) {
			let leftIndex = bucketList.findIndex(e => e.value === rightMin);
			for(let i = 0; i < leftIndex; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = false;
			}
			for(let i = leftIndex + 1; i < bucketList.length; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = true;
			}
		} else if(!isNaN(leftMax) && isNaN(rightMin)) {
			let rightIndex = bucketList.findIndex(e => e.value === leftMax);
			for(let i = rightIndex; i < bucketList.length; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = false;
			}
			for(let i = 0; i < rightIndex; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = true;
			}
		} else {
			let leftIndex = bucketList.findIndex(e => e.value === leftMax);
			let rightIndex = bucketList.findIndex(e => e.value === rightMin);
			for(let i = 0; i < leftIndex; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = true;
			}
			for(let i = leftIndex; i < rightIndex; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = false;
			}
			for(let i = rightIndex; i < bucketList.length; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = true;
			}
		}
	}

	async function checkWinLoss() {
		let state;
		if(bucketList.every(e => e.value !== null)) {
			state = 'win';
		} else if(bucketList.every(e => e.disabled === true)) {
			state = 'lose';
		} else {
			state = 'continue';
		}

		if(state !== "continue") {
			stopTime = window.performance.now();
			cancelAnimationFrame(frame);
			const finalTimeMs = stopTime - startTime;
			finalTime = formatTime(finalTimeMs);
			score = bucketList.filter(e => e.value !== null).length;
			const minBucket = bucketList.find(e => e.value);
			const maxBucket = bucketList.toReversed().find(e => e.value);

			// update player statistics
			$AppData.playerStats.totalGames++;
			if(score > $AppData.playerStats.highestScore) {
				$AppData.playerStats.highestScore = score;
				$AppData.playerStats.highestScoreTime = finalTimeMs;
			} else if(score === $AppData.playerStats.highestScore) {
				if(finalTimeMs < $AppData.playerStats.highestScoreTime) $AppData.playerStats.highestScoreTime = finalTimeMs;
			}
			if(maxBucket.value > $AppData.playerStats.highestPlaced) $AppData.playerStats.highestPlaced = maxBucket.value;
			if(minBucket.value < $AppData.playerStats.lowestPlaced) $AppData.playerStats.lowestPlaced = minBucket.value;
			if(state === 'win') {
				$AppData.playerStats.wonGames++;
				if($AppData.playerStats.fastestWin === null || finalTimeMs < $AppData.playerStats.fastestWin) $AppData.playerStats.fastestWin = finalTimeMs;
				if($AppData.playerStats.slowestWin === null || finalTimeMs > $AppData.playerStats.slowestWin) $AppData.playerStats.slowestWin = finalTimeMs;
				if(bucketList[0].value > $AppData.playerStats.highestFirstBucket) $AppData.playerStats.highestFirstBucket = bucketList[0].value;
				if(bucketList[numBuckets-1] < $AppData.playerStats.lowestLastBucket) $AppData.playerStats.lowestLastBucket = bucketList[numBuckets-1].value;
			}
			await saveAppData();

			// show gameover screen
			setTimeout(() => showGameOver = true, gameOverDelay);
		}
	}

	function copyResultToClipboard() {
		const flavorText = `I placed ${score} out of ${numBuckets} tiles in ${finalTime} on PlaceIt!`;
		const boardState = convertBucketListToEmotes();
		const promo = "Can you place more? https://placeitgame.app"
		const result = `${flavorText}\n\n${boardState}\n\n${promo}`;
		navigator.clipboard.writeText(result);
		$Alert = { level: 'info', message: 'COPIED TO CLIPBOARD' };
	}

	function convertBucketListToEmotes(style = "text") {
		const cols = 5;
		let result = '';
		let linesep;
		let emptyBucket;
		let filledBucket;
		if(style === 'html') {
			emptyBucket = '&#x2B1B;';
			filledBucket = '&#x1F7E9;';
			linesep = '<br/>';
		} else {
			emptyBucket = '⬛';
			filledBucket = '🟩'
			linesep = '\n';
		}
		for(const [i, bucket] of bucketList.entries()) {
			if(bucket.value === null) {
				result = result + emptyBucket;
			} else {
				result = result + filledBucket;
			}
			if((i + 1) % cols === 0) result = result + linesep;
		}
		return result.trim();
	}
</script>

<svelte:head>
	<title>PlaceIt | Play</title>
	<meta name="description" content="Play PlaceIt a game about numbers and places.">
</svelte:head>

<div class="navigation">
	<a href="{base}/" class="backButton">BACK</a>
</div>
<div class="container">
	<div class="rollArea">
		<RollerDisplay value={rollResult} />
	</div>
	<div class="timeArea">
		<p class="timeLabel">Time:</p><p>{formatTime(elapsedTime)}</p>
		<p class="timeLabel">Previous Best:</p><p>{$AppData.playerStats.highestScore} out of {numBuckets} in {formatTime($AppData.playerStats.highestScoreTime)}</p>
	</div>
	<div class="tableArea">
		{#each bucketList as bucket, i}
			<div class="bucket">
				<button class="bucketButton" type="button" on:click={() => selectBucket(i)} disabled={bucket.disabled}>
					{#if bucket.value}
						<span in:scale={{ duration: 100 }}>{bucket.value}</span>
					{:else}
						<span class="unusedBucketText">{i+1}</span>
					{/if}
				</button>
				<div class="underline" class:disabled={bucket.disabled}></div>
			</div>
		{/each}
	</div>
</div>

{#if showGameOver}
	<div class="gameOverOverlay" transition:fade={{duration: gameOverAnimationTime}}>
		<span class="gameOverText" transition:fly={{duration: gameOverAnimationTime, y: '-250px'}}>GAME OVER</span>
		<div class="statsArea">
			<p>You placed {score} out of {numBuckets} tiles in {finalTime}!</p>
			<div class="boardDisplay">{@html convertBucketListToEmotes('html')}</div>
		</div>
		<div class="buttonArea">
			<button class="playAgainButton" type="button" on:click={reset}>RETRY</button>
			<button class="shareButton" type="button" on:click={copyResultToClipboard}>SHARE</button>
		</div>
	</div>
{/if}

<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		width: 100%;
	}
	.navigation {
		padding-left: 5px;
		position: absolute;
		width: 100%;
		.backButton {
			align-items: center;
			background-color: transparent;
			border: none;
			border-radius: 10px;
			color: var(--appLogoColor2);
			cursor: pointer;
			display: flex;
			font-family: 'Courier New', Courier, monospace;
			font-size: 1.5rem;
			font-weight: bold;
			justify-content: center;
			padding: 10px;
			position: relative;
			text-decoration: none;
			user-select: none;
			transition: background-color 0.2s;
			width: fit-content;
			&:hover {
				background-color: rgba(94, 129, 172, 0.10);
			}
		}
	}
	.timeArea {
		display: grid;
		grid-template-columns: 1fr 1fr;
		font-family: Arial, Helvetica, sans-serif;
		margin-bottom: 15px;
		p {
			margin: 0;
			text-align: left;
			user-select: none;
			&.timeLabel {
				text-align: right;
				font-weight: bold;
				margin-right: 5px;
			}
		}
	}
	.tableArea {
		display: grid;
		grid-auto-rows: 120px;
		grid-template-columns: repeat(auto-fill, 120px);
		grid-gap: 20px;
		justify-content: center;
		max-width: 700px;
		width: 100%;
	}
	.bucket {
		height: 100%;
		width: 100%;
	}
	.bucketButton {
		background-color: var(--appBGColorAccent1);
		border-radius: 20px 20px 0px 0px;
		font-size: 3rem;
		height: 100%;
		transition: all 0.2s;
		width: 100%;
		&:hover {
			background-color: #3b4e52;
			transform: scale(1.05);
			&+.underline {
				transform: scale(1.05);
			}
		}
		&:disabled {
			cursor: default;
			&:hover {
				background-color: #523b4e;
				transform: none;
				&+.underline {
					transform: none;
				}
			}
		}
	}
	.unusedBucketText {
		opacity: 0.05;
	}
	.underline {
		background-color: var(--appAccentColor);
		border-radius: 3px;
		height: 5px;
		transition: all 0.2s;
		width: 100%;
		&.disabled {
			background-color: var(--appLogoColor1);
		}
	}
	.gameOverOverlay {
		align-items: center;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		.gameOverText {
			font-family: Arial, Helvetica, sans-serif;
			font-weight: bold;
			font-size: 6rem;
			font-weight: bold;
			position: relative;
			user-select: none;
		}
		.statsArea {
			margin-bottom: 27px;
			p {
				font-size: 1.5rem;
				margin: 0;
				user-select: none;
			}
			.boardDisplay {
				align-items: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-top: 15px;
			}
		}
		.buttonArea {
			display: flex;
			button {
				background-color: rgba(94, 129, 172, 0.50);
				color: var(--appTextColor);
				font-family: Verdana;
				font-size: 1.2rem;
				&:hover {
					background-color: rgba(94, 129, 172, 0.75);
				}
				&:first-child {
					margin-right: 20px;
				}
			}
			.shareButton {
				background-color: rgba(163, 190, 140, 0.5);
				&:hover {
					background-color: rgba(163, 190, 140, 0.75);
				}
			}
		}
	}
	@media (max-width: 740px) {
		.container {
			justify-content: flex-start;
		}
		.tableArea {
			grid-auto-rows: 100px;
			grid-template-columns: repeat(auto-fill, 100px);
			grid-gap: 15px;
			max-width: 560px;
		}
		.bucketButton {
			font-size: 2.8rem;
		}
		.gameOverOverlay {
			.gameOverText {
				font-size: 5rem;
			}
		}
	}
	@media (max-width: 650px) {
		.tableArea {
			grid-auto-rows: 90px;
			grid-template-columns: repeat(auto-fill, 90px);
			grid-gap: 12px;
			max-width: 498px;
		}
		.bucketButton {
			font-size: 2.5rem;
		}
	}
	@media (max-width: 550px) {
		.tableArea {
			grid-auto-rows: 80px;
			grid-template-columns: repeat(auto-fill, 80px);
			grid-gap: 10px;
			max-width: 440px;
		}
		.bucketButton {
			font-size: 2.2rem;
		}
		.gameOverOverlay {
			.gameOverText {
				font-size: 4rem;
			}
			.statsArea {
				p {
					font-size: 1.2rem;
				}
			}
		}
	}
	@media (max-width: 480px) {
		.tableArea {
			grid-auto-rows: 80px;
			grid-template-columns: repeat(auto-fill, 80px);
			grid-gap: 10px;
			max-width: 350px;
		}
		.gameOverOverlay {
			.gameOverText {
				font-size: 3rem;
			}
			.statsArea {
				p {
					font-size: 1rem;
				}
			}
			.buttonArea {
				button {
					font-size: 1rem;
					padding: 8px;
				}
			}
		}
	}
	@media (max-width: 390px) {
		.navigation {
			.backButton {
				font-size: 1rem;
			}
		}
		.tableArea {
			grid-auto-rows: 70px;
			grid-template-columns: repeat(auto-fill, 70px);
			grid-gap: 8px;
			max-width: 304px;
		}
		.bucketButton {
			font-size: 2rem;
		}
	}
	@media (max-width: 330px) {
		.tableArea {
			grid-auto-rows: 60px;
			grid-template-columns: repeat(auto-fill, 60px);
			grid-gap: 8px;
			max-width: 264px;
		}
		.bucketButton {
			font-size: 1.5rem;
		}
		.gameOverOverlay {
			.gameOverText {
				font-size: 2rem;
			}
			.statsArea {
				p {
					font-size: 0.8rem;
				}
			}
			.buttonArea {
				button {
					border-radius: 5px;
					font-size: 0.8rem;
					padding: 6px;
				}
			}
		}
	}
	@media (max-width: 290px) {
		.tableArea {
			grid-auto-rows: 50px;
			grid-template-columns: repeat(auto-fill, 50px);
			grid-gap: 5px;
			max-width: 215px;
		}
	}
</style>
