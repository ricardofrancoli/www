<script lang="ts">
	import github from '$lib/assets/socials/github.svg';
	import instagram from '$lib/assets/socials/instagram.svg';
	import linkedin from '$lib/assets/socials/linkedin.svg';
	import Button from '$lib/Button.svelte';
	import Icon from '$lib/Icon.svelte';

	const socialIcons = [github, instagram, linkedin] as const;
</script>

<section id="contact">
	<h2>Contact</h2>

	<div class="contact-container">
		<h3>Ready for a chat?</h3>
		<Button text="Get in touch" />

		<div class="social-icons">
			{#each socialIcons as socialIcon}
				<div class="social-icon">
					<Icon src={socialIcon} renderRaw={false} viewBox={24} useBackgroundColour={false} />
				</div>
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
