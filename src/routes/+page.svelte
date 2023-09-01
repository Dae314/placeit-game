<script>
	import { base } from '$app/paths';
</script>

<div class="container">
	<h1>PlaceIt</h1>

	<a href="{base}/game">Begin</a>
</div>

<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	a {
		align-items: center;
		background-color: var(--appColorPrimary);
		border-radius: 5px;
		color: var(--appTextColor);
		cursor: pointer;
		display: flex;
		font-weight: bold;
		height: 50px;
		justify-content: center;
		text-decoration: none;
		width: 150px;
	}
</style>
