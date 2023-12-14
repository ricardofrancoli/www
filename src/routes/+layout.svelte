<script>
	import '@fontsource-variable/sora';

	import ThemeToggle from '$lib/ThemeToggle/ThemeToggle.svelte';
</script>

<ThemeToggle />
<nav class="nav">
	<a href="#about">about</a>
	<a href="#projects">projects</a>
	<a href="#contact">contact</a>
</nav>
<slot />

<style lang="postcss">
	@import '../styles/variables.css';

	:root {
		font-family: 'Sora Variable', sans-serif;
		background-color: var(--background-colour);
		color: var(--text-colour);
		margin: 0 5vw 0 5vw;

		@media (--md) {
			margin: 0 10vw 0 10vw;
		}

		@media (--lg) {
			margin: 0 20vw 0 20vw;
		}
	}

	.nav {
		& a {
			color: inherit;
			text-decoration: inherit;
			text-transform: uppercase;
		}
	}

	@media (--md) {
		.nav {
			display: flex;
			width: 100vw;
			justify-content: center;
			gap: 3rem;
		}
	}
</style>
