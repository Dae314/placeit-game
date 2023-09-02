<script>
	import Modal from 'svelte-simple-modal';
	import '../app.css'
</script>

<Modal
	styleBg={{ backdropFilter: 'blur(5px)' }}>
	<slot />
</Modal>
