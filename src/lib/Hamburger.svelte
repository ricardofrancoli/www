<script lang="ts">
	export let isActive: boolean;
</script>

<div class="hamburger-container">
	<button class="hamburger hamburger--spring {isActive ? 'is-active' : ''}" type="button" on:click>
		<span class="hamburger-box">
			<span class="hamburger-inner" />
		</span>
	</button>
</div>

<style lang="postcss">
	@import '../styles/variables.postcss';

	.hamburger-container {
		position: fixed;
		top: 0.75rem;
		right: 5vw;
		border-radius: 100%;
		border: 1px solid var(--text-colour);
		background-color: var(--background-colour);
		height: 55px;
		width: 55px;
		display: flex;
		justify-content: center;
	}

	.hamburger {
		display: inline-block;
		cursor: pointer;
		transition-property: opacity, filter;
		transition-duration: 0.15s;
		transition-timing-function: linear;
		font: inherit;
		color: var(--primary-colour);
		text-transform: none;
		background-color: transparent;
		border: 0;
		margin: 0;
		padding: 0;
		overflow: visible;
	}

	.hamburger.is-active .hamburger-inner,
	.hamburger.is-active .hamburger-inner::before,
	.hamburger.is-active .hamburger-inner::after {
		background-color: var(--primary-colour);
	}

	.hamburger-box {
		width: 40px;
		height: 24px;
		display: inline-block;
		position: relative;
	}

	.hamburger-inner {
		display: block;
		top: 50%;
		margin-top: -2px;
	}
	.hamburger-inner,
	.hamburger-inner::before,
	.hamburger-inner::after {
		width: 40px;
		height: 4px;
		background-color: var(--primary-colour);
		border-radius: 4px;
		position: absolute;
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}
	.hamburger-inner::before,
	.hamburger-inner::after {
		content: '';
		display: block;
	}
	.hamburger-inner::before {
		top: -10px;
	}
	.hamburger-inner::after {
		bottom: -10px;
	}

	.hamburger--spring .hamburger-inner {
		top: 4px;
		transition: background-color 0s 0.13s linear;
	}
	.hamburger--spring .hamburger-inner::before {
		top: 10px;
		transition: top 0.1s 0.2s var(--cubic-bezier-ease-out),
			transform 0.13s var(--cubic-bezier-ease-in);
	}
	.hamburger--spring .hamburger-inner::after {
		top: 20px;
		transition: top 0.2s 0.2s var(--cubic-bezier-ease-out),
			transform 0.13s var(--cubic-bezier-ease-in);
	}

	.hamburger--spring.is-active .hamburger-inner {
		transition-delay: 0.22s;
		background-color: transparent;
	}
	.hamburger--spring.is-active .hamburger-inner::before {
		top: 0;
		transition: top 0.1s 0.15s var(--cubic-bezier-ease-in-quicker),
			transform 0.13s 0.22s var(--cubic-bezier-quick);
		transform: translate3d(0, 10px, 0) rotate(45deg);
	}
	.hamburger--spring.is-active .hamburger-inner::after {
		top: 0;
		transition: top 0.2s var(--cubic-bezier-ease-in-quicker),
			transform 0.13s 0.22s var(--cubic-bezier-quick);
		transform: translate3d(0, 10px, 0) rotate(-45deg);
	}

	@media not (--mobile-only) {
		.hamburger-container {
			display: none;
		}
	}
</style>
