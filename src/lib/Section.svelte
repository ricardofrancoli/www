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
		font-size: 4rem;
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
</style>
