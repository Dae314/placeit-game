<script>
	// Originally from: https://svelte.dev/repl/1ed2971a5b594fde94a31bfdd11cfc18?version=3.42.6
	import RollerDigit from '$lib/components/RollerDigit.svelte';
	
	export let value = 0;
	
	$: digits = value.toString().padStart(3, 'x').split('').map(e => e === 'x' ? e : Number(e));
</script>

<div class="container">
	<div class="digits">
		{#each digits as digit, i (digits.length-i)}
			<RollerDigit number={digit}/>
		{/each}	
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		overflow: hidden;
	}
	.digits {
		align-items: center;
		display: inline-flex;
		justify-content: center;
		overflow: var(--overflow);
	}
</style>
