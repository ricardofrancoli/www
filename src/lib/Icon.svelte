<script lang="ts">
	export let src: string;
	export let renderRaw: boolean = false;

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
			<svg viewBox="0 0 128 128" fill="var(--background-colour)">
				{@html value.default}
			</svg>
		{/if}
	{/await}
{/if}
