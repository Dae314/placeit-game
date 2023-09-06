<script>
	// Originally from: https://svelte.dev/repl/1ed2971a5b594fde94a31bfdd11cfc18?version=3.42.6
	export let number;
	export let lineHeight = 120;
	const digits = ['x', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function calculateOffset(n) {
		if(n === 'x') return 0;
		return -(n + 1) * lineHeight;
	}
</script>

<div class="container" style="--line-height: {lineHeight}px; --offset: {calculateOffset(number)}px">
	{#each digits as i}
		<div class="digit" class:active={number === 'x' || i === number}>{i}</div>
	{/each}
</div>

<style>
	.digit {
		font-family: "Arial Black";
		opacity: 0.2;
		transition: opacity 0.3s ease-in;
		user-select: none;
		&:first-child {
			opacity: 0;
		}
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
