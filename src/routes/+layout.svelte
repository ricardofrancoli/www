<script>
	import '@fontsource-variable/sora';
	import '../styles/variables.css';

	import ThemeToggle from '$lib/ThemeToggle/ThemeToggle.svelte';
</script>

<ThemeToggle />
<slot />

<style lang="postcss">
	:root {
		font-family: 'Sora Variable', sans-serif;
		background-color: var(--background-colour);
	}
</style>
