<script>
	import { getContext } from 'svelte';
	import { base } from '$app/paths';
	import Rules from '$lib/modals/Rules.svelte';
	import { AppData, makeCleanAppData, saveAppData } from '$lib/stores/AppData.js';

	const { open } = getContext('simple-modal');

	function openHowTo() {
		open(Rules, {}, {closeButton: false, closeOnEsc: true, closeOnOuterClick: true});
	}

	function clearData() {
		$AppData = makeCleanAppData();
		saveAppData();
	}
</script>

<div class="container">
	<h1><span class="logo1">Place</span><span class="logo2">It</span></h1>
	<h2>A game about numbers and places</h2>

	<a class="playLink" href="{base}/game">PLAY</a>
	<button type="button" class="howToButton" on:click={openHowTo}>RULES</button>
	<a class="statsLink" href="{base}/stats">STATS</a>
	<button type="button" class="clearStatsButton" on:click={clearData}>CLEAR DATA</button>
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
	.playLink, .statsLink {
		align-items: center;
		border-radius: 10px;
		color: var(--appAccentColor);
		cursor: pointer;
		display: flex;
		font-family: 'Courier New', Courier, monospace;
		font-size: 3.5rem;
		font-weight: bold;
		justify-content: center;
		padding: 5px;
		text-decoration: none;
		user-select: none;
		transition: background-color 0.2s;
		&:hover {
			background-color: rgba(94, 129, 172, 0.10);
		}
	}
	.statsLink {
		color: var(--appLogoColor1);
		font-size: 2rem;
		padding: 5px;
	}
	button {
		font-size: 2rem;
		padding: 5px;
	}
	@media (max-width: 680px) {
		h1 {
			font-size: 5rem;
			margin-bottom: -20px;
		}
		h2 {
			font-size: 1.1rem;
		}
		.playLink {
			font-size: 3rem;
		}
		.statsLink, button {
			font-size: 1.5rem;
		}
	}
</style>
