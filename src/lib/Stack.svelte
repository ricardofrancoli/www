<script lang="ts">
	export let svgSrc: string;
	export let stackName: string;

	const colours = [
		'--primary-colour',
		'--secondary-colour',
		'--tertiary-colour',
		'--accent-colour'
	];
	const randomColourVariable = colours[Math.floor(Math.random() * colours.length)];
</script>

<div class="stack">
	<div class="stack-icon-container" style="background-color: var({randomColourVariable});">
		<div class="stack-icon">
			{@html svgSrc}
		</div>
	</div>
	<p class="stack-name">
		{stackName}
	</p>
</div>

<style lang="postcss">
	@import '../styles/variables.postcss';

	.stack {
		width: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.stack-icon-container {
		width: 100%;
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: var(--border-radius);
		background-color: var(--primary-colour);

		.stack-icon {
			width: 75%;
			height: 75%;
			fill: var(--background-colour);
		}
	}

	.stack-name {
		margin: auto;
	}

	@media (--md) {
		.stack {
			width: 6.5rem;
		}

		.stack-icon-container {
			height: 6.5rem;
		}
	}
</style>
