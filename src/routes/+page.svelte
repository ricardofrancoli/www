<script lang="ts">
	import heart from '$lib/assets/heart.svg?raw';
	import star from '$lib/assets/star.svg?raw';
	import ArrowDown from '$lib/ArrowDown.svelte';

	import About from './about/+page.svelte';
	import Contact from './contact/+page.svelte';
	import Projects from './projects/+page.svelte';
</script>

<div class="outer-container">
	<header class="header-container">
		<h1 class="main-header">Hi <span class="hi-hand">👋</span> I'm Ricardo.</h1>
		<h1 class="secondary-header">A <span class="web-dev-role">web developer</span>.</h1>
	</header>
</div>
<div class="scroll-down-container">
	<ArrowDown />
</div>

<main class="main-content">
	<About />
	<Projects />
	<Contact />
</main>

<footer>
	<div class="signed ricky">
		<span>Made with</span>
		<div class="love">
			{@html heart}
		</div>
		<span>by Ricardo</span>
	</div>
	<div class="signed tor">
		<span>Designed with</span>
		<div class="star">
			{@html star}
		</div>
		<span>by Tor</span>
	</div>
</footer>

<style lang="postcss">
	@import '../styles/variables.postcss';

	.outer-container {
		position: relative;
		z-index: 100;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.scroll-down-container {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.header-container {
		width: max-content;
		height: calc(100vh - var(--nav-height) - var(--scroll-down-height));
		margin: 0 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		.web-dev-role {
			color: var(--primary-colour);
		}
	}

	h1 {
		margin: 0;
		line-height: 95%;
		font-size: var(--h1-0);
		font-weight: 600;
	}

	.main-content {
		display: flex;
		flex-direction: column;
		gap: 7.5rem;
	}

	footer {
		display: flex;
		flex-direction: column;
		margin-top: 5rem;
		margin-bottom: 1rem;

		.signed {
			display: flex;
			justify-content: center;
			gap: 0.25rem;
			font-size: 0.75rem;

			&.ricky {
				color: var(--primary-colour);
			}
			&.tor {
				color: var(--secondary-colour);
			}
		}

		.love,
		.star {
			width: 0.75rem;
			color: var(--tertiary-colour);
		}

		.star {
			width: 0.8rem;
			stroke: var(--tertiary-colour);
		}
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-8deg);
		}
		60% {
			transform: rotate(14deg);
		}
		80% {
			transform: rotate(-8deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.hi-hand {
		animation: wave-animation 0.75s 1;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	@media (--xs) {
		h1 {
			font-size: var(--h1-1);
		}
	}

	@media (--md) {
		h1 {
			line-height: 90%;
			font-size: var(--h1-2);
		}
	}

	@media (--lg) {
		h1 {
			font-size: var(--h1-3);
		}
	}
</style>
