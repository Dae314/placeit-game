<script>
	import { getContext, onMount } from 'svelte';
	import Welcome from '$lib/modals/Welcome.svelte';
	import { AppData, saveAppData } from '$lib/stores/AppData.js';

	const { open } = getContext('simple-modal');

	onMount(() => {
		open(Welcome, {});
		saveAppData();
	});
</script>

<div class="container">
	<div class="rollArea">
		<span>100</span>
	</div>
	<div class="tableArea">
		<span>Table goes here</span>
	</div>
</div>

<style lang="scss">

</style>
