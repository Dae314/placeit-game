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

<div class="container">
	<header>
		<div class="navSection">
			<a class="backButton" href="{base}/">BACK</a>
		</div>
		<div class="versionSection">
			<p class="version">Version: {version}</p>
		</div>
	</header>
	<main>
		<h1><span class="logo1">Place</span><span class="logo2">It</span></h1>
		<p>A game about numbers and places made by Wyatt Rice and Casey Chock using SvelteKit.</p>
	</main>
	<footer>
		<button type="button" class="clearStatsButton" on:click={clearData}>CLEAR DATA</button>
	</footer>
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
	header, footer, main {
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
				outline: none;
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
		.versionSection {
			display: flex;
			justify-content: flex-end;
			width: 50%;
			.version {
				margin: 0;
			}
		}
		
	}
	main {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		h1 {
			font-family: 'Courier New', Courier, monospace;
			font-size: 3rem;
			margin: 0;
			margin-bottom: 10px;
			.logo1 {
				color: var(--appLogoColor1);
			}
			.logo2 {
				color: var(--appLogoColor2);
			}
		}
	}
	footer {
		bottom: 0;
		display: flex;
		position: absolute;
		justify-content: flex-end;
		.clearStatsButton {
			font-size: 1.5rem;
		}
	}
	@media (max-width: 740px) {
		.container {
			align-items: flex-start;
		}
		header, footer, main {
			width: 100%;
		}
	}
</style>
