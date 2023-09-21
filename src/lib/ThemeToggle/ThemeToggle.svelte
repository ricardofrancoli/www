<script lang="ts">
	import { browser } from '$app/environment';
	import ThemeToggleIcon from './ThemeToggleIcon.svelte';

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
			? document.documentElement.classList.replace('light', 'dark')
			: document.documentElement.classList.replace('dark', 'light');
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
		(() => {
			const isDarkMode = sessionStorage.theme === 'dark';

			if (isDarkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.add('light');
			}
		})();
	</script>
</svelte:head>

<ThemeToggleIcon bind:isDarkMode on:switchDarkMode={switchDarkMode} />

<style lang="postcss">
</style>
