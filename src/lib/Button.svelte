<script lang="ts">
	export let text: string;
	export let href: string | null = null;

	let button: HTMLAnchorElement;
	let rippleSpan: HTMLSpanElement;

	function createRipple(event: MouseEvent) {
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		rippleSpan.style.width = rippleSpan.style.height = `${diameter}px`;
		rippleSpan.style.left = `${event.clientX - button.offsetLeft - radius}px`;

		button.appendChild(rippleSpan);
	}
</script>

<a class="button" {href} bind:this={button} on:click={createRipple}>
	<p>{text}</p>
	<span bind:this={rippleSpan} />
</a>

<style lang="postcss">
	@import '../styles/variables.css';

	.button {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		min-width: 160px;
		height: 50px;
		cursor: pointer;
		border-radius: 150px;
		color: var(--primary-colour);
		box-shadow: inset 0 0 0 2px var(--primary-colour);
		font-size: 0.75rem;
		letter-spacing: 1px;
		text-decoration: none;
		font-weight: 700;
		text-align: center;
		transition-property: background-color, color;
		transition-duration: 0.3s;
	}

	p {
		margin: 0;
		width: 100%;
	}

	span {
		display: none;
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

	@media not (--mobile-only) {
		.button {
			&:hover {
				color: var(--background-colour);
				background-color: var(--primary-colour);
			}
		}
	}
</style>
