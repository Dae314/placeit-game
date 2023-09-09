<script>
	import { version } from '$app/environment';
	import { base } from '$app/paths';
	import { AppData, makeCleanAppData, saveAppData } from '$lib/stores/AppData.js';
	import { Alert } from '$lib/stores/Alert.js';

	async function clearData() {
		$AppData = makeCleanAppData();
		await saveAppData();
		$Alert = { level: 'info', message: 'SUCCESSFULLY CLEARED DATA' };
	}
</script>

<svelte:head>
	<title>PlaceIt | About the app</title>
	<meta name="description" content="Learn about who made PlaceIt and how it was created.">
</svelte:head>

<div class="container">
	<header>
		<div class="navSection">
			<a class="backButton" href="{base}/">BACK</a>
		</div>
	</header>
	<main>
		<h1><span class="logo1">Place</span><span class="logo2">It</span></h1>
		<p class="version">Version: {version}</p>
		<div class="aboutText">
			<p>A fun little game about numbers and places made purely for learning and achievement!</p>
			<div class="credits">
				<div class="credit">
					<h2>Designed by</h2>
					<p>Wyatt Rice</p>
				</div>
				<div class="credit">
					<h2>Developed by</h2>
					<p>Casey Chock</p>
				</div>
			</div>
			<p>Technology used: <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer noopener">SvelteKit</a></p>
			<p><a href="https://github.com/Dae314/placeit-game" target="_blank" rel="noreferrer noopener">https://github.com/Dae314/placeit-game</a></p>
			<p>This project is open source and licensed under the MIT License.</p>
			<p>This app runs entirely in your browser and does not rely on any analytics. All data is stored locally on your device!</p>
		</div>
		<button type="button" class="clearStatsButton" on:click={clearData}>CLEAR DATA</button>
	</main>
</div>

<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		position: relative;
		width: 100%;
	}
	header, main {
		width: 75%;
	}
	header {
		display: flex;
		.navSection {
			display: flex;
			justify-content: flex-start;
			width: 50%;
			.backButton {
				align-items: center;
				background-color: transparent;
				border: none;
				border-radius: 10px;
				color: var(--appLogoColor2);
				cursor: pointer;
				display: flex;
				font-family: 'Courier New', Courier, monospace;
				font-size: 1.5rem;
				font-weight: bold;
				justify-content: center;
				padding: 10px;
				position: relative;
				text-decoration: none;
				user-select: none;
				transition: background-color 0.2s;
				width: fit-content;
				&:hover {
					background-color: rgba(94, 129, 172, 0.10);
				}
			}
		}
	}
	main {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		h1 {
			font-family: 'Courier New', Courier, monospace;
			font-size: 3rem;
			margin: 0;
			.logo1 {
				color: var(--appLogoColor1);
			}
			.logo2 {
				color: var(--appLogoColor2);
			}
		}
		h2 {
			margin: 5px 0px;
		}
		.version {
			color: var(--appLogoColor2);
			font-size: 0.9rem;
			margin: -10px 0 10px 0;
		}
		.aboutText {
			margin: 10px 0px;
			text-align: center;
			p {
				margin: 0;
				margin-bottom: 10px;
			}
			a {
				color: var(--appColorPrimary);
				&:visited {
					color: var(--appColorPriAccent);
				}
			}
		}
		.credits {
			display: flex;
			justify-content: center;
			margin-bottom: 10px;
			.credit {
				margin: 0px 20px;
			}
		}
		.clearStatsButton {
			font-size: 1.5rem;
		}
	}
	@media (max-width: 740px) {
		.container {
			align-items: flex-start;
		}
		header, main {
			width: 98%;
		}
	}
	@media (max-width: 319px) {
		main {
			font-size: 0.8rem;
			h2 {
				font-size: 1.2rem;
			}
		}
	}
</style>
