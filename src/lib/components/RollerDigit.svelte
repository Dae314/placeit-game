<script>
	// Originally from: https://svelte.dev/repl/1ed2971a5b594fde94a31bfdd11cfc18?version=3.42.6
	export let number;
	export let lineHeight = 120;
</script>

<div class="container" style="--line-height: {lineHeight}px; --offset: {-number * lineHeight}px">
	{#each Array(10) as _, i}
		<div class="digit" class:active={i==number}>{i}</div>
	{/each}
</div>

<style>
	.digit {
		font-family: "Arial Black";
		opacity: 0.2;
		transition: opacity 0.3s ease-in;
		user-select: none;
	}
	.active {
		opacity: 1
	}
	.container {
		display: inline-flex;
		flex-direction: column;
		text-align: center;
		
		line-height: var(--line-height);
		height: var(--line-height);
		font-size: var(--line-height);
		transform: translate(0, var(--offset));
		
		/* https://easings.net/#easeInOutCirc */
		transition: transform 0.5s cubic-bezier(0.85, 0, 0.15, 1);
	}
</style>
