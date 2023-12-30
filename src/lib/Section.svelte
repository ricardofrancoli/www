<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<section {id}>
	<h2>{title}</h2>
	<slot />
</section>

<style lang="postcss">
	@import '../styles/variables.css';

	h2 {
		font-size: var(--h2-0);
		width: max-content;
		margin: 0;
		margin-bottom: 2rem;
		transform: rotate(-4deg);
		transform-origin: center left;

		background-image: linear-gradient(90deg, var(--primary-colour) 0%, var(--primary-colour) 100%);
		background-repeat: no-repeat;
		background-size: 100% 0.2em;
		background-position: 0 88%;
	}

	@media (--xs) {
		h2 {
			font-size: var(--h2-1);
		}
	}

	@media (--md) {
		h2 {
			font-size: var(--h2-2);
		}
	}

	@media (--lg) {
		h2 {
			font-size: var(--h2-3);
		}
	}
</style>
