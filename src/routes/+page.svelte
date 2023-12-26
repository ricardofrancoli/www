<script lang="ts">
	import heart from '$lib/assets/heart.svg';
	import Icon from '$lib/Icon.svelte';

	import About from './about/+page.svelte';
	import Contact from './contact/+page.svelte';
	import Projects from './projects/+page.svelte';
</script>

<div class="outer-container">
	<div class="header-container">
		<h1 class="main-header">Hi <span>👋</span> I'm Ricardo.</h1>
		<h1 class="secondary-header">A <span class="web-dev-role">web developer</span>.</h1>
	</div>
</div>

<main class="main-content">
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<span>Made with</span>
	<div class="love">
		<Icon src={heart} viewBox={24} useBackgroundColour={false} />
	</div>
	<span>by Ricardo</span>
</footer>

<style lang="postcss">
	@import '../styles/variables.css';

	.outer-container {
		width: 100%;
		display: flex;
	}

	.header-container {
		width: fit-content;
		height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: center;

		h1 {
			margin: 0;
			line-height: 95%;
			font-weight: 600;
		}

		.web-dev-role {
			color: var(--primary-colour);
		}
	}

	.main-content {
		display: flex;
		flex-direction: column;
		gap: 7.5rem;
	}

	footer {
		display: flex;
		justify-content: center;
		gap: 0.25rem;
		margin-top: 5rem;
		font-size: 0.75rem;
		color: var(--primary-colour);

		.love {
			width: 0.75rem;
			color: var(--tertiary-colour);
		}
	}

	@media (--md) {
		.outer-container {
			justify-content: center;
		}

		.header-container {
			height: 100vh;
		}

		h1 {
			line-height: 90%;
			font-size: 3rem;
		}
	}

	@media (--lg) {
		h1 {
			font-size: 5rem;
		}
	}
</style>
