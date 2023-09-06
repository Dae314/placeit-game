<script>
	import Modal from 'svelte-simple-modal';
	import { scale, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import '../app.css';

	export let data;
</script>


{#key data.pathname}
	<div class="appContainer"
		in:scale={{ duration: 150, delay: 200 }}
		out:fade={{ ease: cubicOut, duration: 150 }}>
		<Modal
			styleBg={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
			styleContent={{ background: 'var(--appBGColorModal)', borderRadius: '20px'}}
			styleWindow={{background: 'transparent'}}>
			<slot />
		</Modal>
	</div>
{/key}

<style lange="scss">
	.appContainer {
		height: 100%;
	}
</style>
