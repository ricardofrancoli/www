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
		<!-- TODO: add spinner -->
		<div>loading...</div>
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
