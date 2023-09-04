<script>
	import { getContext } from 'svelte';
	import { AppData } from '$lib/stores/AppData.js';
	import { base } from '$app/paths';

	const { close } = getContext('simple-modal');

	export let bucketList;
	export let score;
	export let state;
	export let resetCallback;

	const average = $AppData.playerStats.scoreHistory.reduce((x,y) => x+y)/$AppData.playerStats.scoreHistory.length;

	function reset() {
		resetCallback();
		close();
	}
</script>

<div class="container">
	{#if state === "win"}
		<h1>You win!</h1>
	{:else if state === "lose"}
		<h1>You lose!</h1>
	{:else}
		<h1>You stink!</h1>
	{/if}
	<p>Score: {score}</p>
	<p>Average Score: {average}</p>
	<button type="button" on:click={reset}>Play Again</button>
</div>

<style lang="scss">
	button {
		align-items: center;
		border-radius: 10px;
		color: var(--appAccentColor);
		cursor: pointer;
		display: flex;
		font-family: 'Courier New', Courier, monospace;
		font-size: 3.5rem;
		font-weight: bold;
		justify-content: center;
		padding: 10px;
		text-decoration: none;
		user-select: none;
		transition: all 0.2s;
		&:hover {
			background-color: rgba(94, 129, 172, 0.10);
		}
	}
</style>
