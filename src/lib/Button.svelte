<script lang="ts">
	export let text: string;

	let button: HTMLButtonElement;
	let rippleSpan: HTMLSpanElement;

	function createRipple(event: MouseEvent) {
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		rippleSpan.style.width = rippleSpan.style.height = `${diameter}px`;
		rippleSpan.style.left = `${event.clientX - button.offsetLeft - radius}px`;

		button.appendChild(rippleSpan);
	}
</script>

<button bind:this={button} on:click={createRipple}>
	{text}
	<span bind:this={rippleSpan} />
</button>

<style lang="postcss">
	@import '../styles/variables.css';

	button {
		position: relative;
		overflow: hidden;
		display: inline-block;
		outline: none;
		cursor: pointer;
		line-height: 1;
		border-radius: 150px;
		transition-property: background-color, border-color, color, box-shadow, filter;
		transition-duration: 0.3s;
		border: 1px solid transparent;
		letter-spacing: 1px;
		min-width: 160px;
		white-space: normal;
		font-weight: 600;
		text-align: center;
		padding: 16px 14px 18px;
		color: var(--primary-colour);
		box-shadow: inset 0 0 0 2px var(--primary-colour);
		background-color: transparent;
		height: 48px;
	}

	@media (--mobile-only) {
		span {
			display: block;
			position: absolute;
			border-radius: 50%;
			background-color: var(--primary-colour);

			margin-top: -50px;
			margin-left: -50px;

			animation: ripple 1s;
			opacity: 0;
		}

		@keyframes ripple {
			from {
				opacity: 1;
				transform: scale(0);
			}

			to {
				opacity: 0;
				transform: scale(10);
			}
		}
	}

	@media (--md) {
		button {
			&:hover {
				color: var(--background-colour);
				background-color: var(--primary-colour);
			}
		}
	}
</style>
