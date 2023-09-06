<script>
	import { AppData } from '$lib/stores/AppData.js';
	import { base } from '$app/paths';

	const defaultString = 'NONE';

	function formatElapsedTime(timeInMS) {
		let minutes = Math.floor(timeInMS / 60000);
		let seconds = ((timeInMS % 60000) / 1000).toFixed(0);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}
</script>

<div class="container">
	<div class="header">
		<a href="{base}/" class="backButton">BACK</a>
		<h1>STATS</h1>
	</div>
	<div class="statsArea">
		<div class="statCard">TOTAL GAMES PLAYED<span class="statValue">{$AppData.playerStats.totalGames}</span></div>
				<div class="statCard">TOTAL GAMES WON<span class="statValue">{$AppData.playerStats.wonGames}</span></div>
				<div class="statCard">MOST TILES PLACED<span class="statValue">{$AppData.playerStats.highestScore}</span></div>
				<div class="statCard">LARGEST NUMBER PLACED<span class="statValue">{$AppData.playerStats.highestPlaced === -1 ? defaultString : $AppData.playerStats.highestPlaced}</span></div>
				<div class="statCard">SMALLEST NUMBER PLACED<span class="statValue">{$AppData.playerStats.lowestPlaced === 1000 ? defaultString : $AppData.playerStats.lowestPlaced}</span></div>
				<div class="statCard">SHORTEST WIN<span class="statValue">{formatElapsedTime($AppData.playerStats.fastestWin)}</span></div>
				<div class="statCard">LONGEST WIN<span class="statValue">{formatElapsedTime($AppData.playerStats.slowestWin)}</span></div>
				<div class="statCard">LARGEST NUMBER ON FIRST TILE (WIN)<span class="statValue">{$AppData.playerStats.highestFirstBucket === -1 ? defaultString : $AppData.playerStats.highestFirstBucket}</span></div>
				<div class="statCard">SMALLEST NUMBER ON LAST TILE (WIN)<span class="statValue">{$AppData.playerStats.lowestLastBucket === 1000 ? defaultString : $AppData.playerStats.highestFirstBucket}</span></div>
	</div>
</div>

<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.header {
		align-items: center;
		display: flex;
		justify-content: center;
		position: relative;
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
			left: 0;
			outline: none;
			padding: 10px;
			position: absolute;
			text-decoration: none;
			user-select: none;
			transition: background-color 0.2s;
			&:hover {
				background-color: rgba(94, 129, 172, 0.10);
			}
		}
		h1 {
			color: var(--appLogoColor2);
			font-family:'Courier New', Courier, monospace;
			font-size: 3rem;
			font-weight: bold;
		}
	}
	.statsArea {
		background-color: var(--appBGColorAccent1);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		width: 50%;
		.statCard {
			background-color: var(--appBGColorAccent2);
			color: var(--appTextColor);
			font-size: 1.5rem;
			margin-bottom: 42px;
			padding: 5px 0px 5px 10px;
			position: relative;
			text-transform: uppercase;
			user-select: none;
			&:first-child {
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
			}
			&:last-child {
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				margin-bottom: 0;
			}
			.statValue {
				color: var(--appLogoColor2);
				float: right;
				font-weight: bold;
				padding-right: 10px;
			}
		}
	}
	@media (max-width: 1200px) {
		.header, .statsArea {
			width: 75%;
		}
	}
	@media (max-width: 800px) {
		.header, .statsArea {
			width: 95%;
		}
	}
</style>
