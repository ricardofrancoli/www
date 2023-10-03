<script lang="ts">
	import type { Project } from '../types/project';

	export let project: Project;
</script>

<div class="project-container">
	<div class="project">
		<h3>{project.title}</h3>
		<div class="project-screenshot-container">
			<img class="project-screenshot" src={project.screenshot} alt="" />
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
		margin-bottom: 20px; /* TODO: Change later, do this in Projects instead */

		h3,
		p {
			margin: 0;
		}

		@media (--md) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto 1fr auto;

			.project-screenshot-container {
				grid-row: 1/4;
			}

			p {
				min-height: 10rem;
			}
		}
	}

	.project-screenshot-container {
		width: 100%;
		display: flex;
		justify-content: center;

		.project-screenshot {
			object-fit: contain;
			max-width: 90%;
			max-height: 90%;
			width: auto;
			height: auto;

			@media (--md) {
				margin-top: auto;
			}
		}
	}

	@media (--md) {
		.project-container {
			height: 20rem;
		}
	}
</style>
