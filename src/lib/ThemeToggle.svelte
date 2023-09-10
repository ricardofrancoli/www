<script lang="ts">
	import { browser } from '$app/environment';

	const getIsDarkMode = () => {
		if (import.meta.env.SSR) {
			return false;
		}

		const sessionData = window.sessionStorage.getItem('theme');

		if (sessionData) {
			return sessionData === 'dark';
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	};

	export let isDarkMode = getIsDarkMode();

	export const setDocumentClassList = () => {
		isDarkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};

	const switchDarkMode = () => {
		isDarkMode = !isDarkMode;

		setDocumentClassList();

		sessionStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	};

	if (browser) {
		setDocumentClassList();
	}
</script>

<svelte:head>
	<script>
		const darkMode = sessionStorage.theme === 'dark';

		if (darkMode) {
			document.documentElement.classList.add('dark');
		}
	</script>
</svelte:head>

<div>
	<input type="checkbox" id="theme-toggle" checked={isDarkMode} on:click={switchDarkMode} />
	<label for="theme-toggle" />
</div>

<style lang="postcss">
</style>
