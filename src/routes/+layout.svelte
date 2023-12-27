<script>
	import '@fontsource-variable/sora';

	import Hamburger from '$lib/Hamburger.svelte';
	import ThemeToggle from '$lib/ThemeToggle/ThemeToggle.svelte';

	let isHamburgerActive = false;

	$: visibility = isHamburgerActive ? 'visible' : 'hidden';
	$: opacity = isHamburgerActive ? 1 : 0;
</script>

<nav class="nav">
	<div class="theme-toggle" class:blurred={isHamburgerActive}>
		<ThemeToggle />
	</div>
	<Hamburger bind:isActive={isHamburgerActive} />
	<div class="nav-links" style:opacity style:visibility>
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
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			gap: 3rem;
			transition-property: display;
			transition: opacity 0.15s var(--cubic-bezier-ease-in-quicker),
				visibility 0.15s 0s var(--cubic-bezier-ease-in-quicker);
		}

		& a {
			color: inherit;
			text-decoration: inherit;
			text-transform: uppercase;
			font-size: 3rem;
		}
	}

	.content,
	.theme-toggle {
		transition-property: filter;
		transition: filter 0.15s var(--cubic-bezier-ease-in);

		&.blurred {
			filter: blur(30px);
		}
	}

	@media (--md) {
		.nav {
			justify-content: center;
			gap: 3rem;
		}
	}
</style>
