<script>
	import { getContext } from "svelte";
	import { base } from '$app/paths';

	const { close } = getContext('simple-modal');

	function closeModal() {
		close();
	}
</script>

<div class="container">
	<h2>How to Play</h2>
	<video autoplay loop>
		<source src="{base}/rules_resources/rules.webm" type="video/webm" />
		<source src="{base}/rules_resources/rules.mp4" type="video/mp4" />
	</video>
	<button type="button" on:click={closeModal}>Close</button>
</div>

<style lang="scss">
	.container {
		color: var(--appLogoColor2);
	}
	h2 {
		margin: 0;
		margin-bottom: 20px;
		text-align: center;
	}
	video {
		height: auto;
		width: 100%;
	}
	button {
		margin: 0 auto;
		margin-top: 20px;
	}
</style>
