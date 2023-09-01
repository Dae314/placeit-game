<script>
	import { getContext } from "svelte";
	const { close } = getContext('simple-modal');

	
</script>

<div>
	<h2>Image goes here</h2>
	<button type="button" on:click={() => close()}>Begin</button>
</div>
