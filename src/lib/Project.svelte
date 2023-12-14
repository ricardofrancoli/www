<script lang="ts">
	import Screen from './Screen.svelte';

	import type { Project } from '../types/project';

	export let project: Project;

	let borderBoxSize: ResizeObserverEntry['borderBoxSize'];
	let screenshotWidth: number = 0;

	$: screenshotWidth = borderBoxSize && borderBoxSize[borderBoxSize.length - 1]?.inlineSize;
	$: minScreenshotHeight = screenshotWidth / 2.25;
</script>

<div class="project-container">
	<div id={project.id} class="project">
		<h3>{project.title}</h3>
		<div
			class="project-screenshot-container"
			style={minScreenshotHeight ? `min-height: ${minScreenshotHeight}px` : ''}
		>
			<div bind:borderBoxSize class="screen">
				<Screen width={screenshotWidth} screenshotHrefs={project.screenshotHrefs} />
			</div>
		</div>
		<p>{project.description}</p>
		<div class="project-links">
			{#if project.links.live}
				<a href={project.links.live}>See live</a>
			{/if}
			<a href={project.links.github}>Github</a>
		</div>
	</div>
</div>

<style lang="postcss">
	@import '../styles/variables.css';

	.project {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h3,
		p {
			margin: 0;
		}

		.project-screenshot-container {
			width: 100%;
			display: flex;
			background-color: var(--primary-colour);
			border-radius: 20px;

			.screen {
				position: relative;
				width: 100%;
				overflow: hidden;
			}
		}

		@media (--md) {
			min-height: 340px;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'title screenshot'
				'description screenshot'
				'links screenshot';
			grid-template-rows: min-content auto min-content;
			column-gap: 4rem;

			h3 {
				grid-area: title;
			}

			.project-screenshot-container {
				grid-area: screenshot;
			}

			p {
				grid-area: description;
				min-height: 10rem;
			}

			.project-links {
				grid-area: links;
			}
		}

		@media (--lg) {
			min-height: 250px;
		}
	}

	@media (--md) {
		.project-container {
			height: 100%;
		}

		.project-container:nth-child(even) .project {
			grid-template-areas:
				'screenshot title'
				'screenshot description'
				'screenshot links';
		}
	}
</style>
