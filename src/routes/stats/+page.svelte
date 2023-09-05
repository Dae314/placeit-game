<script>
	import { AppData } from '$lib/stores/AppData.js';

	function formatElapsedTime(timeInMS) {
		let minutes = Math.floor(timeInMS / 60000);
		let seconds = ((timeInMS % 60000) / 1000).toFixed(0);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	}
</script>

<!--
	Number of games won
	Number of games played
	Most buckets filled
	Highest number placed
	Lowest number placed
	Shortest game won
	Longest game won
	Largest number placed in the first bucket for a win
	Smallest number placed in the last bucket for a win
-->

<div class="container">
	<h1>STATS</h1>
	<div class="statsArea">
		<div class="statCard">TOTAL GAMES PLAYED<span class="statValue">{$AppData.playerStats.totalGames}</span></div>
				<div class="statCard">TOTAL GAMES WON<span class="statValue">{$AppData.playerStats.wonGames}</span></div>
				<div class="statCard">MOST TILES PLACED<span class="statValue">{$AppData.playerStats.highestScore}</span></div>
				<div class="statCard">LARGEST NUMBER PLACED<span class="statValue">{$AppData.playerStats.highestPlaced}</span></div>
				<div class="statCard">SMALLEST NUMBER PLACED<span class="statValue">{$AppData.playerStats.lowestPlaced}</span></div>
				<div class="statCard">SHORTEST WIN<span class="statValue">{formatElapsedTime($AppData.playerStats.fastestWin)}</span></div>
				<div class="statCard">LONGEST WIN<span class="statValue">{formatElapsedTime($AppData.playerStats.slowestWin)}</span></div>
				<div class="statCard">LARGEST NUMBER ON FIRST TILE (WIN)<span class="statValue">{$AppData.playerStats.highestFirstBucket}</span></div>
				<div class="statCard">SMALLEST NUMBER ON LAST TILE (WIN)<span class="statValue">{$AppData.playerStats.lowestLastBucket}</span></div>
	</div>
</div>

<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	h1 {
		color: var(--appLogoColor2);
		font-family:'Courier New', Courier, monospace;
		font-size: 3rem;
		font-weight: bold;
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
				padding-right: 10px;
				position: absolute;
				right: 0;
			}
		}
	}
	@media (max-width: 1200px) {
		.statsArea {
			width: 75%;
		}
	}
	@media (max-width: 800px) {
		.statsArea {
			width: 95%;
		}
	}
</style>
