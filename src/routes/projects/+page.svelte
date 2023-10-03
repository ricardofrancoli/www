<script lang="ts">
	import Project from '$lib/Project.svelte';
	import type { Project as ProjectType } from '../../types/project';

	const projects: ProjectType[] = [
		{
			title: 'Route Cost Calculator',
			description:
				'As the name suggests, this app will calculate the cost of a given route with distance and petrol costs parameters. You can choose either manual mode or something a bit more advanced by searching an origin and destination. Made using React and some simple CSS.',
			links: {
				github: 'https://github.com/ricardofrancoli/route-cost-calculator',
				live: 'https://route-cost-calculator-ricardofrancoli.vercel.app/'
			},
			screenshot: '/static/images/route-cost-calculator.webp'
		},
		{
			title: 'World Clock',
			description:
				'A little app that was quite a lot of fun to make. It’s a simple but (I think) cool world clock I made using mainly two open source APIs. It introduced me to the hellish world of dates in JavaScript.',
			links: {
				github: 'https://github.com/ricardofrancoli/world-clock',
				live: 'https://world-clock.vercel.app/'
			},
			screenshot: '/static/images/world-clock.webp'
		},
		{
			title: 'Quiz App',
			description:
				'A little quiz app that gives you different points and results depending on your answers, hence the “Net” in the title. I made it using React and in order to learn to use a UI component library – I chose MaterialUI and it was so much fun really!',
			links: {
				github: 'https://github.com/ricardofrancoli/choice-net',
				live: 'https://choice-net-git-main-ricardofrancoli.vercel.app/'
			},
			screenshot: '/static/images/choice-net.webp'
		}
	];
</script>

<section id="projects">
	<h2>Projects</h2>
	<div class="projects-container">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</section>

<style lang="postcss">
	@import '../../styles/variables.css';

	.projects-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		@media (--lg) {
			gap: 2rem;
		}
	}
</style>
