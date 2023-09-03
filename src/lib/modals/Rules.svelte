<script>
	import { getContext } from "svelte";
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
