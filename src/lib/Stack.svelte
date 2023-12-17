<script lang="ts">
	import Icon from './Icon.svelte';

	export let svgSrc: string;
	$: stackName = svgSrc.replace('.svg', '').split('/').pop();

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
			<Icon src={svgSrc} />
		</div>
	</div>
	<p class="stack-name">
		{stackName}
	</p>
</div>

<style lang="postcss">
	@import '../styles/variables.css';

	.stack {
		width: 7rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.stack-icon-container {
		width: 100%;
		height: 7rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: var(--border-radius);
		background-color: var(--primary-colour);

		.stack-icon {
			width: 75%;
			height: 75%;
		}
	}

	.stack-name {
		margin: auto;
	}
</style>
