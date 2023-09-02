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

<div>
	<h2>Rules</h2>
	<ol>
		<li>You must fill 20 buckets with numbers in ascending order</li>
		<li>The numbers are given to you randomly from the range 0-999 (no repeats)</li>
		<li>How many numbers can you place?</li>
	</ol>
	<button type="button" on:click={closeModal}>Dismiss</button>
</div>
