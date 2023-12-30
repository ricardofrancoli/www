<script lang="ts">
	import Ellipse from './Ellipse.svelte';

	const ellipses = [
		{
			position: 'top-left',
			colour: 'secondary'
		},
		{
			position: 'top-right',
			colour: 'tertiary'
		},
		{
			position: 'bottom-left',
			colour: 'primary'
		},
		{
			position: 'bottom-right',
			colour: 'secondary'
		}
	] as const;
</script>

<div class="ellipses">
	{#each ellipses as ellipse, i}
		<div class={`ellipse ${ellipse.position}`}>
			<Ellipse colour={ellipse.colour} id={i} />
		</div>
	{/each}
</div>

<style lang="postcss">
	@import '../styles/variables.css';

	@keyframes move-top-left {
		0%,
		100% {
			transform: translate(-50vw, -50vh);
		}
		25% {
			transform: translate(-48vw, -48vh);
		}
		50% {
			transform: translate(-52vw, -52vh);
		}
		75% {
			transform: translate(-50vw, -48vh);
		}
	}

	@keyframes move-top-right {
		0%,
		100% {
			transform: translate(-50vw, -50vh);
		}
		25% {
			transform: translate(-52vw, -48vh);
		}
		50% {
			transform: translate(-48vw, -52vh);
		}
		75% {
			transform: translate(-53vw, -50vh);
		}
	}

	@keyframes move-bottom-left {
		0%,
		100% {
			transform: translate(-50vw, -50vh);
		}
		25% {
			transform: translate(-48vw, -52vh);
		}
		50% {
			transform: translate(-52vw, -48vh);
		}
		75% {
			transform: translate(-50vw, -53vh);
		}
	}

	@keyframes move-bottom-right {
		0%,
		100% {
			transform: translate(-50vw, -50vh);
		}
		25% {
			transform: translate(-53vw, -52vh);
		}
		50% {
			transform: translate(-47vw, -48vh);
		}
		75% {
			transform: translate(-52vw, -53vh);
		}
	}

	.ellipses {
		z-index: 1;
		position: relative;
		overflow: hidden;
		width: 100vw;
		height: 100vh;
	}

	.ellipse {
		width: min-content;
		height: min-content;
		position: absolute;
		transform: translate(-50%, -50%);

		&.top-left {
			top: -20%;
			left: -80%;
			animation: move-top-left 20s infinite ease-in-out;
		}
		&.top-right {
			top: -30%;
			left: 60%;
			animation: move-top-right 20s infinite ease-in-out;
		}
		&.bottom-left {
			top: 60%;
			left: -140%;
			animation: move-bottom-left 20s infinite ease-in-out;
		}
		&.bottom-right {
			top: 50%;
			left: 120%;
			animation: move-bottom-right 20s infinite ease-in-out;
		}

		@media (--2xs) {
			&.top-left {
				top: -5%;
				left: -50%;
			}
			&.top-right {
				top: -10%;
				left: 60%;
			}
			&.bottom-left {
				top: 60%;
				left: -80%;
			}
			&.bottom-right {
				top: 55%;
				left: 120%;
			}
		}

		@media (--xs) {
			&.top-left {
				top: -5%;
				left: -30%;
			}
			&.top-right {
				top: -15%;
				left: 60%;
			}
			&.bottom-left {
				top: 65%;
				left: -60%;
			}
			&.bottom-right {
				top: 45%;
				left: 120%;
			}
		}

		@media (--sm) {
			&.top-left {
				top: 5%;
				left: -5%;
			}
			&.top-right {
				top: -5%;
				left: 80%;
			}
			&.bottom-left {
				top: 70%;
				left: -20%;
			}
			&.bottom-right {
				top: 60%;
				left: 120%;
			}
		}

		@media (--md) {
			&.top-left {
				top: 5%;
				left: 5%;
			}
			&.top-right {
				top: -5%;
				left: 80%;
			}
			&.bottom-left {
				top: 80%;
				left: -5%;
			}
			&.bottom-right {
				top: 60%;
				left: 120%;
			}
		}

		@media (--lg) {
			&.top-left {
				top: 10%;
				left: 25%;
			}
			&.top-right {
				top: -7.5%;
				left: 90%;
			}
			&.bottom-left {
				top: 90%;
				left: 10%;
			}
			&.bottom-right {
				top: 60%;
				left: 125%;
			}
		}

		@media (--xl) {
			&.top-left {
				top: 15%;
				left: 30%;
			}
			&.top-right {
				top: 2.5%;
				left: 100%;
			}
			&.bottom-left {
				top: 95%;
				left: 15%;
			}
			&.bottom-right {
				top: 65%;
				left: 130%;
			}
		}
	}
</style>
