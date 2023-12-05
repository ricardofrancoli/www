<script lang="ts">
	import Screen from './Screen.svelte';

	import type { Project } from '../types/project';

	export let project: Project;

	let laptopWidth: number = 0;
	$: height = laptopWidth / 2.25;
</script>

<div class="project-container">
	<div class="project">
		<h3>{project.title}</h3>
		<div class="project-screenshot-container" style={height ? `min-height: ${height}px` : ''}>
			<div bind:clientWidth={laptopWidth} class="screen">
				<Screen width={laptopWidth} screenshotHrefs={project.screenshotHrefs} />
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

	.project {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		h3,
		p {
			margin: 0;
		}

		@media (--md) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'title screenshot'
				'description screenshot'
				'links screenshot';

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
