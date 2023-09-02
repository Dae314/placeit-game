<script>
	import { getContext, onMount, tick } from 'svelte';
	import Rules from '$lib/modals/Rules.svelte';
	import GameOver from '$lib/modals/GameOver.svelte';
	import { AppData, saveAppData } from '$lib/stores/AppData.js';

	const { open } = getContext('simple-modal');

	const numBuckets = 20;
	const deckMin = 0;
	const deckMax = 999;
	const maxHistory = 20;

	let deck;
	let rollResult;
	let bucketList;
	reset();

	onMount(async () => {
		await tick();
		if($AppData.appSettings.showRules) open(Rules, {}, {closeButton: false, closeOnEsc: false, closeOnOuterClick: false});
	});

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

	function reset() {
		deck = [];
		for(let i = deckMin; i <= deckMax; i++) {
			deck.push(i);
		}
		bucketList = new Array(numBuckets).fill().map(() => { return {disabled: false, value: null} });
		drawRandom();
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
			const score = bucketList.filter(e => e.value !== null).length;

			$AppData.playerStats.scoreHistory = [...$AppData.playerStats.scoreHistory, score];
			if($AppData.playerStats.scoreHistory.length >= maxHistory) {
				$AppData.playerStats.scoreHistory = $AppData.playerStats.scoreHistory.slice(1, $AppData.playerStats.scoreHistory.length);
			}
			saveAppData();

			open(GameOver, { bucketList, state, score, resetCallback: reset }, {closeButton: false, closeOnEsc: false, closeOnOuterClick: false});
		}
	}
</script>

<div class="container">
	<div class="rollArea">
		<span class="rollResult">{rollResult}</span>
	</div>
	<div class="tableArea">
		{#each bucketList as bucket, i}
			<div class="bucket">
				<button class="bucketButton" type="button" on:click={() => selectBucket(i)} disabled={bucket.disabled}>
					{#if bucket.value}
						<span>{bucket.value}</span>
					{:else}
						<span>?</span>
					{/if}
				</button>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}
	.rollResult {
		font-size: 5rem;
		font-weight: bold;
		text-align: center;
	}
	.tableArea {
		display: grid;
		grid-template-rows: repeat(4, 40px);
		grid-template-columns: repeat(5, 60px);
		grid-gap: 5px;
		justify-content: center;
		width: 100%;
	}
	.bucket {
		border-bottom: 2px solid var(--appColorPrimary);
		height: 100%;
		width: 100%;
	}
	.bucketButton {
		height: 100%;
		width: 100%;
	}
</style>
