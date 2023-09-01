<script>
	import { getContext, onMount } from 'svelte';
	import Welcome from '$lib/modals/Welcome.svelte';
	import { AppData, saveAppData } from '$lib/stores/AppData.js';

	const { open } = getContext('simple-modal');

	const numBuckets = 20;
	const rollMin = 0;
	const rollMax = 999;
	const bucketList = new Array(numBuckets).fill(null);

	let rollResult;

	onMount(() => {
		open(Welcome, {});
		rollResult = roll(rollMin, rollMax);
	});

	function roll(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function selectBucket(i) {
		bucketList[i] = rollResult;
		rollResult = roll(rollMin, rollMax);
	}
</script>

<div class="container">
	<div class="rollArea">
		<span class="rollResult">{rollResult}</span>
	</div>
	<div class="tableArea">
		{#each bucketList as bucket, i}
			<div class="bucket">
				<button class="bucketButton" type="button" on:click={() => selectBucket(i)}>
					{#if bucket}
						<span>{bucket}</span>
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
