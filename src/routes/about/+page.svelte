<script>
	import { version } from '$app/environment';
	import { base } from '$app/paths';
	import { AppData, makeCleanAppData, saveAppData } from '$lib/stores/AppData.js';

	function clearData() {
		$AppData = makeCleanAppData();
		saveAppData();
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
	<main class="container">
		<p>Something about this app</p>
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
		justify-content: center;
		position: relative;
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
