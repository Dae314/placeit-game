<script>
	import { getContext, onMount, tick } from 'svelte';
	import Rules from '$lib/modals/Rules.svelte';
	import { AppData, saveAppData } from '$lib/stores/AppData.js';

	const { open } = getContext('simple-modal');

	const numBuckets = 20;
	const deckMin = 0;
	const deckMax = 999;

	let deck;
	let rollResult;
	let bucketList;
	reset();

	onMount(async () => {
		await tick();
		if($AppData.appSettings.showRules) open(Rules, {});
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
		const minVal = Math.min(...vals);
		const maxVal = Math.max(...vals);

		if(rollResult < minVal) {
			const minIdx = bucketList.findIndex(e => e.value === minVal);
			// set buckets under minIdx to active
			for(let i = 0; i < minIdx; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = false;
			}
			// set buckets over minIdx to disabled
			for(let i = minIdx+1; i < bucketList.length; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = true;
			}
		} else if(rollResult > maxVal) {
			const maxIdx = bucketList.findIndex(e => e.value === maxVal);
			// set buckets under maxIdx to disabled
			for(let i = 0; i < maxIdx; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = true;
			}
			// set buckets over maxIdx to active
			for(let i = maxIdx+1; i < bucketList.length; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = false;
			}
		} else {
			// rollResult must be between minVal and maxVal
			let insertIdx = 0;
			while(vals[insertIdx] < rollResult) {
				insertIdx++;
			}
			// vals[insertIdx-1] < rollResult && vals[insertIdx] > rollResult
			const insertMin = bucketList.findIndex(e => e.value === vals[insertIdx-1]);
			const insertMax = bucketList.findIndex(e => e.value === vals[insertIdx]);
			// set buckets below insertMin to disabled
			for(let i = 0; i < insertMin; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = true;
			}
			// set buckets between insertMin and insertMax to active
			for(let i = insertMin+1; i < insertMax; i++) {
				if(!bucketList[i].value) bucketList[i].disabled = false;
			}
			// set buckets above insertMax to disabled
			for(let i = insertMax+1; i < bucketList.length; i++) {
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
		if(bucketList.every(e => e.value !== null)) {
			console.log('you win');
		} else if(bucketList.every(e => e.disabled === true)) {
			console.log('you lose');
		}
		// if not a win or loss, continue
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
