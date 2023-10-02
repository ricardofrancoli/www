<script lang="ts">
	import Project from '$lib/Project.svelte';
	import type { Project as ProjectType } from '../../types/project';

	const projects: ProjectType[] = [
		{ title: 'test', description: 'testing', links: { github: 'hi' }, screenshot: 'hi' }
	];
</script>

<h2>Projects</h2>
{#each projects as project}
	<Project {project} />
{/each}

<style lang="postcss"></style>
