<script>
	import { getContext, onMount } from 'svelte';
	import Welcome from '$lib/modals/Welcome.svelte';
	import { AppData, saveAppData } from '$lib/stores/AppData.js';

	const { open } = getContext('simple-modal');

	const numBuckets = 20;
	const deckMin = 0;
	const deckMax = 999;

	let deck;
	let rollResult;
	let bucketList;
	reset();

	onMount(() => {
		open(Welcome, {});
	});

	function drawRandom() {
		const min = 0;
		const max = deck.length;
		const i = Math.floor(Math.random() * (max - min + 1)) + min;
		const result = deck[i];
		deck.splice(i, 1);
		return result;
	}

	function selectBucket(i) {
		bucketList[i].value = rollResult;
		bucketList[i].disabled = true;
		rollResult = drawRandom();
	}

	function reset() {
		deck = [];
		for(let i = deckMin; i <= deckMax; i++) {
			deck.push(i);
		}
		bucketList = new Array(numBuckets).fill().map(() => { return {disabled: false, value: null} });
		rollResult = drawRandom();
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
		grid-template-rows: repeat(5, 40px);
		grid-template-columns: repeat(4, 60px);
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
