<script lang="ts">
	import '@fontsource-variable/sora';
	import { clickOutside } from '../utils/clickOutside';
	import Ellipses from '$lib/Ellipses.svelte';
	import Hamburger from '$lib/Hamburger.svelte';
	import ThemeToggle from '$lib/ThemeToggle/ThemeToggle.svelte';

	let isHamburgerActive = false;
	let mainWrapper: HTMLElement;
	let scrollY: number;

	const toggleHamburger = (from: 'hamburger' | 'clickOutside') => {
		if (from === 'clickOutside' && !isHamburgerActive) {
			return;
		}

		isHamburgerActive = !isHamburgerActive;

		if (isHamburgerActive) {
			mainWrapper.style.position = 'fixed';
			mainWrapper.style.top = `-${scrollY}px`;
		} else {
			scrollY = (parseInt(mainWrapper.style.top) || 0) * -1;

			mainWrapper.style.position = '';
			mainWrapper.style.top = '';
		}
	};
</script>

<svelte:window bind:scrollY />

<div class="ellipses-container">
	<Ellipses />
</div>

<nav class="nav">
	<div class="theme-toggle" class:blurred={isHamburgerActive}>
		<ThemeToggle />
	</div>
	<div
		class="mobile-nav"
		use:clickOutside
		on:clickOutsideDispatch={() => toggleHamburger('clickOutside')}
	>
		<Hamburger isActive={isHamburgerActive} on:click={() => toggleHamburger('hamburger')} />
		<div class="nav-links nav-links-mobile" class:visible={isHamburgerActive}>
			<a href="#about" on:click={() => (isHamburgerActive = false)}>about</a>
			<a href="#projects" on:click={() => (isHamburgerActive = false)}>projects</a>
			<a href="#contact" on:click={() => (isHamburgerActive = false)}>contact</a>
		</div>
	</div>
	<div class="nav-links nav-links-desktop" class:visible={isHamburgerActive}>
		<a href="#about">about</a>
		<a href="#projects">projects</a>
		<a href="#contact">contact</a>
	</div>
</nav>
<div class="content" class:blurred={isHamburgerActive} bind:this={mainWrapper}>
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

	:global(body) {
		margin: 0;
	}

	.ellipses-container {
		position: absolute;
		left: 0;
	}

	.nav {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: var(--nav-height);
		z-index: 1000;

		.nav-links {
			display: flex;
			gap: 3rem;
		}

		@media (--mobile-only) {
			.nav-links-desktop {
				display: none;
			}

			.nav-links-mobile {
				position: fixed;
				top: 7rem;
				right: 5vw;
				flex-direction: column;
				align-items: flex-end;
				visibility: hidden;
				opacity: 0;
				font-size: 3rem;
				transition-property: display;
				transition: opacity 0.15s var(--cubic-bezier-ease-in-quicker),
					visibility 0.15s 0s var(--cubic-bezier-ease-in-quicker);

				&.visible {
					visibility: visible;
					opacity: 1;
				}
			}
		}

		@media not (--mobile-only) {
			.nav-links-mobile {
				display: none;
			}

			.nav-links-desktop {
				margin: 0 auto;
			}

			.theme-toggle {
				position: absolute;
				order: 1;
				right: 0;
			}
		}

		& a {
			color: inherit;
			text-decoration: inherit;
			text-transform: uppercase;
		}
	}

	.theme-toggle,
	.content {
		transition-property: filter;
		transition: filter 0.15s var(--cubic-bezier-ease-in);

		&.blurred {
			width: 90vw;
			margin-top: var(--nav-height);
			filter: blur(30px);
			left: 50%;
			right: 50%;
			transform: translate(-50%);
			user-select: none;
			pointer-events: none;
		}

		@media not (--mobile-only) {
			&.blurred {
				filter: initial;
			}
		}
	}
</style>
