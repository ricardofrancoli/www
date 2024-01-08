<div class="scroll-down">
	<svg
		width="48px"
		height="48px"
		stroke-width="1"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			class="arrow"
			d="M12 8V16M12 16L15.5 12.5M12 16L8.5 12.5"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			class="circle"
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</div>

<style lang="postcss">
	@import '../styles/variables.postcss';

	@keyframes up-down-animation {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.scroll-down {
		height: var(--scroll-down-height);
		animation: up-down-animation 2.5s infinite;

		.arrow {
			stroke: var(--primary-colour);
		}

		.circle {
			stroke: var(--text-colour);
		}
	}
</style>
