<script>
	import Modal from 'svelte-simple-modal';
	import '../app.css'
</script>

<Modal
	styleBg={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
	styleContent={{ background: 'var(--appBGColorModal)', borderRadius: '20px'}}
	styleWindow={{background: 'transparent'}}>
	<slot />
</Modal>
