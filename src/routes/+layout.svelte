<script>
	import '@fontsource-variable/sora';

	import Hamburger from '$lib/Hamburger.svelte';
	import ThemeToggle from '$lib/ThemeToggle/ThemeToggle.svelte';

	let isHamburgerActive = false;
	$: display = isHamburgerActive ? 'flex' : 'none';
</script>

<nav class="nav">
	<ThemeToggle />
	<Hamburger bind:isActive={isHamburgerActive} />
	<div class="nav-links" style:display>
		<a href="#about" on:click={() => (isHamburgerActive = false)}>about</a>
		<a href="#projects" on:click={() => (isHamburgerActive = false)}>projects</a>
		<a href="#contact" on:click={() => (isHamburgerActive = false)}>contact</a>
	</div>
</nav>
<div class="content" class:blurred={isHamburgerActive}>
	<slot />
</div>

<style lang="postcss">
	@import '../styles/variables.css';

	:root,
	:global(input, textarea, button) {
		font-family: 'Sora Variable', sans-serif;
	}

	:root {
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
		position: relative;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 4rem;
		z-index: 1000;

		.nav-links {
			position: fixed;

			right: 50%;
			transform: translate(50%, 50%);
			flex-direction: column;
			gap: 3rem;
		}

		& a {
			color: inherit;
			text-decoration: inherit;
			text-transform: uppercase;
			font-size: 3rem;
		}
	}

	.blurred {
		filter: blur(10px);
	}

	@media (--md) {
		.nav {
			justify-content: center;
			gap: 3rem;
		}
	}
</style>
