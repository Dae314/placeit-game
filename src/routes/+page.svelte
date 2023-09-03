<script>
	import { getContext } from 'svelte';
	import { base } from '$app/paths';
	import Rules from '$lib/modals/Rules.svelte';

	const { open } = getContext('simple-modal');

	function openHowTo() {
		open(Rules, {}, {closeButton: false, closeOnEsc: true, closeOnOuterClick: true});
	}
</script>

<div class="container">
	<h1><span class="logo1">Place</span><span class="logo2">It</span></h1>
	<h2>A game about numbers and places</h2>

	<a href="{base}/game">Play</a>
	<button type="button" class="howToButton" on:click={openHowTo}>Rules</button>
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
	h1 {
		font-family: 'Courier New', Courier, monospace;
		font-size: 8rem;
		margin: 0;
		margin-bottom: -30px;
		.logo1 {
			color: var(--appLogoColor1);
		}
		.logo2 {
			color: var(--appLogoColor2);
		}
	}
	h2 {
		color: var(--appLogoColor2);
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.5rem;
		margin: 0;
		margin-bottom: 25px;
		user-select: none;
	}
	a {
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
	button {
		align-items: center;
		background-color: transparent;
		border: none;
		border-radius: 10px;
		color: var(--appLogoColor2);
		cursor: pointer;
		display: flex;
		font-family: 'Courier New', Courier, monospace;
		font-size: 2rem;
		font-weight: bold;
		justify-content: center;
		outline: none;
		padding: 5px;
		text-decoration: none;
		user-select: none;
		transition: all 0.2s;
		&:hover {
			background-color: rgba(94, 129, 172, 0.10);
		}
	}
</style>
