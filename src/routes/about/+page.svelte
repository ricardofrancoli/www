<script lang="ts">
	import css from '$lib/assets/stacks/css.svg?raw';
	import docker from '$lib/assets/stacks/docker.svg?raw';
	import express from '$lib/assets/stacks/express.svg?raw';
	import jest from '$lib/assets/stacks/jest.svg?raw';
	import mongodb from '$lib/assets/stacks/mongodb.svg?raw';
	import mysql from '$lib/assets/stacks/mysql.svg?raw';
	import nodejs from '$lib/assets/stacks/nodejs.svg?raw';
	import python from '$lib/assets/stacks/python.svg?raw';
	import react from '$lib/assets/stacks/react.svg?raw';
	import svelte from '$lib/assets/stacks/svelte.svg?raw';
	import typescript from '$lib/assets/stacks/typescript.svg?raw';
	import vue from '$lib/assets/stacks/vue.svg?raw';
	import Section from '$lib/Section.svelte';
	import Stack from '$lib/Stack.svelte';

	const svgAssets = [
		{ src: typescript, stackName: 'typescript' },
		{ src: vue, stackName: 'vue' },
		{ src: react, stackName: 'react' },
		{ src: svelte, stackName: 'svelte' },
		{ src: css, stackName: 'css' },
		{ src: nodejs, stackName: 'nodejs' },
		{ src: express, stackName: 'express' },
		{ src: docker, stackName: 'docker' },
		{ src: mysql, stackName: 'mysql' },
		{ src: mongodb, stackName: 'mongodb' },
		{ src: jest, stackName: 'jest' },
		{ src: python, stackName: 'python' }
	];
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
		{#each svgAssets as svgAsset}
			<Stack svgSrc={svgAsset.src} stackName={svgAsset.stackName} />
		{/each}
	</div>
</Section>

<style lang="postcss">
	@import '../../styles/variables.css';

	.stacks {
		display: grid;
		gap: 0.75rem;
		justify-content: space-between;
		grid-template-columns: repeat(2, min-content);
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
