<script>
	import { AppData } from '$lib/stores/AppData.js';
	import { getContext } from "svelte";

	export let bucketList = [];
	export let score = 0;
	export let state = '';
	export let resetCallback = () => {};
	
	const { close } = getContext('simple-modal');
	const average = $AppData.playerStats.scoreHistory.reduce((x,y) => x+y)/$AppData.playerStats.scoreHistory.length

	function retry() {
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
	<button type="button" on:click={retry}>Retry</button>
</div>

<style lang="scss">

</style>
