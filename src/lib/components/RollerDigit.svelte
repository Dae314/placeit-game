<script>
	// Originally from: https://svelte.dev/repl/1ed2971a5b594fde94a31bfdd11cfc18?version=3.42.6
	import { onMount } from "svelte";

	export let number;
	const widthDesktopHeight = 120;
	const width740Height = 100;
	const width330Height = 75;
	let lineHeight = width330Height;
	const digits = ['x', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function calculateOffset(n) {
		if(n === 'x') return 0;
		return -(n + 1) * lineHeight;
	}

	onMount(async () => {
		const widthDesktopListener = window.matchMedia("(min-width: 740px)");
		const width740Listener = window.matchMedia("(max-width: 740px)");
		const width330Listener = window.matchMedia("(max-width: 330px)");
		widthDesktopListener.addEventListener('change', widthDesktopHandler);
		width740Listener.addEventListener('change', width740Handler);
		width330Listener.addEventListener('change', width330Handler);
		if(width330Listener.matches) {
			lineHeight = width330Height;
		} else if(width740Listener.matches) {
			lineHeight = width740Height;
		} else {
			lineHeight = widthDesktopHeight;
		}
	});

	function widthDesktopHandler(e) {
		if(e.matches) {
			lineHeight = 120;
		}
	}
	function width740Handler(e) {
		if(e.matches) {
			lineHeight = 100;
		}
	}
	function width330Handler(e) {
		if(e.matches) {
			lineHeight = 75;
		}
	}
</script>

{#key lineHeight}
	<div class="container" style="--line-height: {lineHeight}px; --offset: {calculateOffset(number)}px">
		{#each digits as i}
			<div class="digit" class:active={number === 'x' || i === number}>{i}</div>
		{/each}
	</div>
{/key}

<style>
	.digit {
		font-family: Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif;
		font-weight: bold;
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
