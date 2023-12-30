<script lang="ts">
	import Section from '$lib/Section.svelte';
	import Stack from '$lib/Stack.svelte';
	import { getStackAssetPaths } from '../../utils';

	const svgAssetSrcs = getStackAssetPaths()
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
</script>

<Section id="about" title="about">
	<div class="text-container">
		<p>
			I've always been a bit of a tech whizz, but due to a sequence of choices post-high school I
			decided to study Media and Comms. Don't get me wrong, I really liked my studies. But since I
			dived into Web Development I decided I needed to switch.
		</p>
		<p>
			After a few hundreds of hours of online courses, scrolling through a huge number of
			documentation I'm not sure I still fully understand, countless tutorial videos, I was lucky
			enough to start a new path in this exciting field. And I'm not looking back.
		</p>
	</div>
	<h3>Stack</h3>
	<div class="stacks">
		{#each svgAssetSrcs as svgSrc}
			<Stack {svgSrc} />
		{/each}
	</div>
</Section>

<style lang="postcss">
	@import '../../styles/variables.css';

	.stacks {
		display: grid;
		gap: 0.75rem;
		justify-content: space-between;
		/* grid-template-columns: repeat(auto-fit, 25%); */
		grid-template-columns: repeat(2, min-content);
		/* grid-template-columns: repeat(2, minmax(5rem, 1fr)); */
	}

	@media (--2xs) {
		.stacks {
			gap: 1rem;
			grid-template-columns: repeat(3, min-content);
		}
	}

	@media (--xs) {
		.stacks {
			gap: 1.5rem;
			grid-template-columns: repeat(4, min-content);
		}
	}

	@media (--md) {
		.text-container {
			display: flex;
			gap: 3rem;
		}
	}

	@media (--xl) {
		.stacks {
			grid-template-columns: repeat(6, min-content);
		}
	}
</style>
