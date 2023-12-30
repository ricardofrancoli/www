<script lang="ts">
	import github from '$lib/assets/socials/github.svg?raw';
	import instagram from '$lib/assets/socials/instagram.svg?raw';
	import linkedin from '$lib/assets/socials/linkedin.svg?raw';
	import Button from '$lib/Button.svelte';
	import Section from '$lib/Section.svelte';

	const socialIcons = [
		{ href: 'https://github.com/ricardofrancoli', svg: github },
		{ href: 'https://www.instagram.com/ricardofrancoli/', svg: instagram },
		{ href: 'https://www.linkedin.com/in/ricardofrancoli/', svg: linkedin }
	] as const;
</script>

<Section id="contact" title="contact">
	<div class="contact-container">
		<h3>Ready for a chat?</h3>
		<Button text="Get in touch" href="mailto:francoli@gmail.com" />

		<div class="social-icons">
			{#each socialIcons as socialIcon}
				<a class="social-icon" href={socialIcon.href} target="_blank">
					{@html socialIcon.svg}
				</a>
			{/each}
		</div>
	</div>
</Section>

<style lang="postcss">
	.contact-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		max-width: 50%;
		margin: auto;

		h3 {
			width: fit-content;
			margin: 0;
		}
	}

	.social-icons {
		display: flex;
		justify-content: center;
		gap: 1rem;

		.social-icon {
			height: 2rem;
			width: 2rem;
			fill: var(--text-colour);
		}
	}
</style>
