<script>
	import { page } from '$app/stores';
</script>

<div class="container">
	<h1>{$page.status} {$page.error.message}</h1>
</div>

<style lang="scss">
	.container {
		align-items: center;
		display: flex;
		height: 100%;
		justify-content: center;
		width: 100%;
	}
</style>
