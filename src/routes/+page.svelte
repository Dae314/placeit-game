<script>
	import { getContext } from 'svelte';
	import { base } from '$app/paths';
	import Rules from '$lib/modals/Rules.svelte';

	const { open } = getContext('simple-modal');

	function openHowTo() {
		open(Rules, {}, {closeButton: false, closeOnEsc: true, closeOnOuterClick: true});
	}
</script>

<svelte:head>
	<title>PlaceIt | A game about numbers and places</title>
	<meta name="description" content="Play PlaceIt a game about numbers and places.">
</svelte:head>

<div class="container">
	<h1><span class="logo1">Place</span><span class="logo2">It</span></h1>
	<h2>A game about numbers and places</h2>

	<a class="playLink" href="{base}/game">PLAY</a>
	<button type="button" class="howToButton" on:click={openHowTo}>RULES</button>
	<a class="statsLink" href="{base}/stats">STATS</a>
	<a class="aboutLink" href="{base}/about">ABOUT</a>
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
	.playLink, .statsLink, .aboutLink {
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
	.aboutLink {
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
		.statsLink, .aboutLink, button {
			font-size: 1.5rem;
		}
	}
	@media (max-width: 370px) {
		h1 {
			font-size: 4rem;
			margin-bottom: -10px;
		}
		h2 {
			font-size: 0.9rem;
		}
		.playLink {
			font-size: 2.5rem;
		}
		.statsLink, .aboutLink, button {
			font-size: 1rem;
		}
	}
	@media (max-width: 300px) {
		h1 {
			font-size: 3rem;
		}
		h2 {
			font-size: 0.7rem;
		}
		.playLink {
			font-size: 2rem;
		}
		.statsLink, .aboutLink, button {
			font-size: 0.7rem;
		}
	}
</style>
