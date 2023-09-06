<script>
	import { onMount } from 'svelte';
	import { AppData, saveAppData } from '$lib/stores/AppData.js';
	import RollerDisplay from '$lib/components/RollerDisplay.svelte';

	const numBuckets = 20;
	const deckMin = 1;
	const deckMax = 999;
	const gameOverDelay = 1000;
	const gameOverAnimationTime = 750;
	const copyConfirmDelay = 1000;

	let deck;
	let rollResult;
	let bucketList = new Array(numBuckets).fill().map(() => { return {disabled: false, value: null} });
	let showGameOver = false;
	let dismissGameOver = false;
	let showCopyConfirm = false;
	let score = 0;
	let startTime = new Date();
	let stopTime;
	let elapsedTime;

	onMount(() => {
		rollResult = deckMax;
		setTimeout(() => reset(), 100);
	});

	function reset() {
		deck = [];
		for(let i = deckMin; i <= deckMax; i++) {
			deck.push(i);
		}
		bucketList = new Array(numBuckets).fill().map(() => { return {disabled: false, value: null} });

		dismissGameOver = true;
		setTimeout(() => { showGameOver = false; dismissGameOver = false; startTime = new Date(); }, gameOverAnimationTime);
		stopTime = {};

		drawRandom();
	}

	function drawRandom() {
		const min = 0;
		const max = deck.length;
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

	function checkWinLoss() {
		let state;
		if(bucketList.every(e => e.value !== null)) {
			state = 'win';
		} else if(bucketList.every(e => e.disabled === true)) {
			state = 'lose';
		} else {
			state = 'continue';
		}

		if(state !== "continue") {
			stopTime = new Date();
			elapsedTime = formatElapsedTime(stopTime - startTime);
			score = bucketList.filter(e => e.value !== null).length;
			let maxBucket = bucketList.reduce((prev, cur) => cur.value > prev.value ? cur : prev);
			let minBucket = bucketList.reduce((prev, cur) => cur.value < prev.value ? cur : prev);

			// update player statistics
			$AppData.playerStats.totalGames++;
			if(score > $AppData.playerStats.highestScore) $AppData.playerStats.highestScore = score;
			if(maxBucket > $AppData.playerStats.highestPlaced) $AppData.playerStats.highestPlaced = maxBucket;
			if(minBucket < $AppData.playerStats.lowestPlaced) $AppData.playerStats.lowestPlaced = minBucket;
			if(state === 'win') {
				$AppData.playerStats.wonGames++;
				if($AppData.playerStats.fastestWin === null || stopTime - startTime < $AppData.playerStats.fastestWin) $AppData.playerStats.fastestWin = stopTime - startTime;
				if($AppData.playerStats.slowestWin === null || stopTime - startTime > $AppData.playerStats.slowestWin) $AppData.playerStats.slowestWin = stopTime - startTime;
				if(bucketList[0].value > $AppData.playerStats.highestFirstBucket) $AppData.playerStats.highestFirstBucket = bucketList[0].value;
				if(bucketList[numBuckets-1] < $AppData.playerStats.lowestLastBucket) $AppData.playerStats.lowestLastBucket = bucketList[numBuckets-1].value;
			}
			saveAppData();

			// show gameover screen
			setTimeout(() => showGameOver = true, gameOverDelay);
		}
	}

	function formatElapsedTime(timeInMS) {
		let minutes = Math.floor(timeInMS / 60000);
		let seconds = ((timeInMS % 60000) / 1000).toFixed(0);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}

	function copyResultToClipboard() {
		const flavorText = `I placed ${score} tiles in ${elapsedTime} on PlaceIt!`;
		const boardState = convertBucketListToEmotes();
		const promo = "Play at https://placitgame.net"
		const result = `${flavorText}\n\n${boardState}\n\n${promo}`;
		navigator.clipboard.writeText(result);
		showCopyConfirm = true;
		setTimeout(() => showCopyConfirm = false, copyConfirmDelay);
	}

	function convertBucketListToEmotes() {
		const cols = 5;
		let result = '';
		for(const [i, bucket] of bucketList.entries()) {
			if(bucket.value === null) {
				result = result + '🟨';
			} else {
				result = result + '🟦';
			}
			if((i + 1) % cols === 0) result = result + '\n';
		}
		return result.trim();
	}
</script>

<div class="container">
	<div class="rollArea">
		<RollerDisplay value={rollResult} />
	</div>
	<div class="tableArea">
		{#each bucketList as bucket, i}
			<div class="bucket">
				<button class="bucketButton" type="button" on:click={() => selectBucket(i)} disabled={bucket.disabled}>
					{#if bucket.value}
						<span>{bucket.value}</span>
					{:else}
						<span class="unusedBucketText">{i+1}</span>
					{/if}
				</button>
				<div class="underline" class:disabled={bucket.disabled}></div>
			</div>
		{/each}
	</div>
</div>

<div class="gameOverOverlay" class:visible={showGameOver} class:dismissAnimation={dismissGameOver} style="--gameOverAnimationTime: {gameOverAnimationTime}ms">
	<span class="gameOverText" class:textVisible={showGameOver} class:dismissTextAnimation={dismissGameOver}>GAME OVER</span>
	<div class="statsArea">
		<p>You placed {score} out of {numBuckets} tiles in {elapsedTime}!</p>
	</div>
	<div class="buttonArea">
		<button class="playAgainButton" type="button" on:click={reset}>RETRY</button>
		<button class="shareButton" type="button" on:click={copyResultToClipboard}>SHARE</button>
	</div>
</div>

<div class="copyConfirm" class:copyVisible={showCopyConfirm} style="--copyConfirmDelay: {copyConfirmDelay}ms">
	<p>COPIED TO CLIPBOARD!</p>
</div>

<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		width: 100%;
	}
	.rollArea {
		margin-top: -40px;
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
		font-size: 3rem;
		height: 100%;
		width: 100%;
		&:hover {
			background: linear-gradient(0deg, rgba(163,190,140,0.10) 0%, rgba(163,190,140,0) 100%);
		}
		&:disabled {
			cursor: default;
			&:hover {
				background: linear-gradient(0deg, rgba(191,97,106,0.10) 0%, rgba(191,97,106,0) 100%);
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
		opacity: 0;
		position: absolute;
		top: 0;
		transition: opacity var(--gameOverAnimationTime);
		visibility: hidden;
		width: 100%;
		.gameOverText {
			font-family: "Arial Black";
			font-size: 6rem;
			font-weight: bold;
			position: relative;
			top: -55%;
			transition: top var(--gameOverAnimationTime);
			user-select: none;
			&.textVisible {
				top: 0%;
			}
			&.dismissTextAnimation {
				top: -55%;
			}
		}
		&.visible {
			opacity: 1;
			visibility: visible;
		}
		&.dismissAnimation {
			opacity: 0;
		}
		.statsArea {
			margin-bottom: 27px;
			p {
				font-size: 1.5rem;
				margin: 0;
				user-select: none;
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
	.copyConfirm {
		background-color: rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		position: absolute;
		left: 50%;
		opacity: 0;
		padding: 10px;
		text-align: center;
		top: 30px;
		transform: translate(-50%, 0);
		visibility: hidden;
		p {
			font-weight: bold;
			margin: 0;
		}
		&.copyVisible {
			animation-name: copyConfirm;
			animation-duration: var(--copyConfirmDelay);
			visibility: visible;
		}
	}
	@keyframes copyConfirm {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@media (max-width: 680px) {
		.rollArea {
			margin-top: 50px;
		}
	}
	@media (max-width: 540px) {
		.rollArea {
			margin-top: 275px;
		}
	}
	@media (max-width: 400px) {
		.rollArea {
			margin-top: 695px;
		}
	}
</style>
