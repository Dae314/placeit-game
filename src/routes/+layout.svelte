<script>
	import Modal from 'svelte-simple-modal';
	import { scale, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { Alert } from '$lib/stores/Alert.js';
	import { PUBLIC_PROD_URI, PUBLIC_PROD_DOMAIN } from '$env/static/public';
	import '../app.css';

	$: showNotification($Alert);

	export let data;

	const alertTransitionDuration = 200;
	const alertVisibleDuration = 1000;
	let showAlert = false;
	let alertLevel = '';
	let alertMessage = '';

	function showNotification(alert) {
		if(!alert.level || !alert.message) return;
		alertLevel = alert.level;
		alertMessage = alert.message;
		showAlert = true;
		setTimeout(() => {
			showAlert = false;
			alertLevel = '';
			alertMessage = '';
			alert.level = '';
			alert.message = '';
		}, alertVisibleDuration);
	}
</script>

<svelte:head>
	<!-- Facebook Meta Tags -->
	<meta property="og:title" content="PlaceIt" />
	<meta property="og:type" content="website">
	<meta property="og:description" content="A game about numbers and places" />
	<meta property="og:image" content="{PUBLIC_PROD_URI}/og_resources/banner.jpg" />
	<meta property="og:url" content="{PUBLIC_PROD_URI}" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content="{PUBLIC_PROD_DOMAIN}">
	<meta property="twitter:url" content="{PUBLIC_PROD_URI}">
	<meta name="twitter:title" content="PlaceIt">
	<meta name="twitter:description" content="A game about numbers and places">
	<meta name="twitter:image" content="{PUBLIC_PROD_URI}/og_resources/banner.jpg">
</svelte:head>


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
		{#if showAlert}
			<div class="alertPopup {alertLevel}" transition:fade={{duration: alertTransitionDuration}}>
				<p>{alertMessage}</p>
			</div>
		{/if}
	</div>
{/key}

<style lang="scss">
	.appContainer {
		height: 100%;
		position: relative;
	}
	.alertPopup {
		background-color: rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		position: absolute;
		left: 50%;
		padding: 10px;
		text-align: center;
		top: 30px;
		transform: translate(-50%, 0);
		p {
			font-weight: bold;
			margin: 0;
		}
	}
</style>
