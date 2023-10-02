<script lang="ts">
	import type { Project } from '../types/project';

	export let project: Project;
</script>

<h3>{project.title}</h3>
<p>{project.description}</p>
<a href={project.links.live}>See live</a>
<a href={project.links.github}>Github</a>
{project.screenshot}
