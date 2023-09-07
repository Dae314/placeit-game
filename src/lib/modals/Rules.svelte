<script>
	import { getContext } from "svelte";
	import { base } from '$app/paths';
	import { AppData, saveAppData } from '$lib/stores/AppData.js';

	const { close } = getContext('simple-modal');

	function closeModal() {
		$AppData.appSettings.showRules = false;
		saveAppData();
		close();
	}
</script>

<div class="container">
	<h2>How to Play</h2>
	<ol>
		<li>
			<img src="{base}/rules_images/roll-it.webp" alt="Roll It">
		</li>
		<li>
			<img src="{base}/rules_images/click-it.webp" alt="Click It">
		</li>
		<li>
			<img src="{base}/rules_images/place-it.webp" alt="Place It">
		</li>
		<li>
			<img src="{base}/rules_images/roll-again.webp" alt="Roll Again">
		</li>
	</ol>
	<button type="button" on:click={closeModal}>Close</button>
</div>

<style lang="scss">
	.container {
		color: var(--appLogoColor2);
	}
	h2 {
		margin: 0;
		text-align: center;
	}
	button {
		margin: 0 auto;
	}
</style>
