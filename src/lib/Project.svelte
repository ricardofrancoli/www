<script lang="ts">
	import type { Project } from '../types/project';

	export let project: Project;
</script>

<div class="project">
	<div class="project-details">
		<h3>{project.title}</h3>
		<p>{project.description}</p>
		{#if project.links.live}
			<a href={project.links.live}>See live</a>
		{/if}
		<a href={project.links.github}>Github</a>
	</div>
	<div class="project-screenshot-container">
		<img class="project-screenshot" src={project.screenshot} alt="" />
	</div>
</div>

<style lang="postcss">
	.project {
		display: flex;
		gap: 2rem;
		height: 12.5rem;
		margin-bottom: 20px;
	}

	.project-details {
		width: 50%;

		& h3 {
			margin: 0;
		}
	}

	.project-screenshot-container {
		width: 50%;

		& .project-screenshot {
			object-fit: contain;
			max-width: 90%;
			max-height: 90%;
			width: auto;
			height: auto;
		}
	}
</style>
