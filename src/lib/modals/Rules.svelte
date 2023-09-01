<script>
	import { getContext } from "svelte";
	const { close } = getContext('simple-modal');

	
</script>

<div>
	<h2>Rules go here</h2>
	<button type="button" on:click={() => close()}>Dismiss</button>
</div>
