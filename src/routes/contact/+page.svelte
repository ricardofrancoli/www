<script lang="ts">
	import Github from '$lib/assets/socials/github.svg';
	import Instagram from '$lib/assets/socials/instagram.svg';
	import Linkedin from '$lib/assets/socials/linkedin.svg';
	import Button from '$lib/Button.svelte';
	import Icon from '$lib/Icon.svelte';

	const socialIcons = [
		{ href: 'https://github.com/ricardofrancoli', svg: Github },
		{ href: 'https://www.instagram.com/ricardofrancoli/', svg: Instagram },
		{ href: 'https://www.linkedin.com/in/ricardofrancoli/', svg: Linkedin }
	] as const;
</script>

<section id="contact">
	<h2>Contact</h2>

	<div class="contact-container">
		<h3>Ready for a chat?</h3>
		<Button text="Get in touch" href="mailto:francoli@gmail.com" />

		<div class="social-icons">
			{#each socialIcons as socialIcon}
				<a class="social-icon" href={socialIcon.href} target="_blank">
					<Icon src={socialIcon.svg} renderRaw={false} viewBox={24} useBackgroundColour={false} />
				</a>
			{/each}
		</div>
	</div>
</section>

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
		}
	}
</style>
