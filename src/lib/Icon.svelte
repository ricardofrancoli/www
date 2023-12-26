<script lang="ts">
	export let src: string;
	export let viewBox: number = 128;
	export let renderRaw: boolean = false;
	export let useBackgroundColour: boolean = true;

	$: isSvg = !!src.endsWith('.svg');
	$: svgRoute = isSvg ? src.replace('.svg', '.svg?raw') : null;
</script>

{#if isSvg && svgRoute}
	{#await import(svgRoute)}
		<span
			class="loader"
			style="background: {useBackgroundColour ? 'var(--background-colour)' : 'var(--text-colour)'}"
		/>
	{:then value}
		{#if renderRaw}
			{@html value.default}
		{:else}
			<svg
				viewBox="0 0 {viewBox} {viewBox}"
				style="fill: {useBackgroundColour ? 'var(--background-colour)' : 'var(--text-colour)'}"
			>
				{@html value.default}
			</svg>
		{/if}
	{/await}
{/if}

<style lang="postcss">
	@import '../styles/variables.css';

	.loader {
		width: 100%;
		height: 100%;
		background: #fff;
		display: inline-block;
		border-radius: 50%;
		box-sizing: border-box;
		animation: animloader 1s ease-in infinite;
	}

	@keyframes animloader {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
