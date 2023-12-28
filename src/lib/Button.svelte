<script lang="ts">
	export let text: string;
	export let href: string | null = null;
	export let openInNewTab: boolean = false;
	export let isPrimary: boolean = true;

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

<a
	class="button {isPrimary ? 'primary' : 'secondary'}"
	{href}
	bind:this={button}
	on:click={createRipple}
	target={openInNewTab ? '_blank' : '_self'}
>
	<p>{text}</p>
	<span class={isPrimary ? 'primary' : 'secondary'} bind:this={rippleSpan} />
	{#if !isPrimary}
		<svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
			><path
				d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/></svg
		>
	{/if}
</a>

<style lang="postcss">
	@import '../styles/variables.css';

	:root {
		--transition-duration: 0.3s;
	}

	.button {
		position: relative;
		overflow: hidden;
		display: flex;
		min-width: 160px;
		height: 50px;
		cursor: pointer;
		font-size: 0.75rem;
		letter-spacing: 1px;
		text-decoration: none;
		font-weight: 700;
		text-align: center;
		transition-property: background-color, color;
		transition-duration: var(--transition-duration);

		& > p {
			margin: 0;
		}

		&.primary {
			align-items: center;
			border-radius: 150px;
			box-shadow: inset 0 0 0 2px var(--primary-colour);
			color: var(--primary-colour);

			& > p {
				width: 100%;
			}
		}

		&.secondary {
			overflow: visible;
			align-items: flex-end;
			justify-content: left;
			color: var(--text-colour);
			gap: 0.5rem;

			& > p {
				width: max-content;
			}
		}
	}

	span {
		display: none;
	}

	svg {
		margin-bottom: -1px;

		path {
			stroke: var(--secondary-colour);
		}
	}

	@media (--mobile-only) {
		span {
			display: block;
			position: absolute;
			border-radius: 50%;

			margin-top: -50px;
			margin-left: -50px;

			animation: ripple 1s;
			opacity: 0;

			&.primary {
				background-color: var(--primary-colour);
			}
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
				&.primary {
					color: var(--background-colour);
					background-color: var(--primary-colour);
				}

				&.secondary {
					svg {
						transition-property: margin-bottom;
						transition-duration: var(--transition-duration);
						transition-timing-function: var(--cubic-bezier-quick);
						margin-bottom: 0px;
					}
				}
			}
		}
	}
</style>
