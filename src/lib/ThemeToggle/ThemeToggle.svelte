<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeToggleIcon from './ThemeToggleIcon.svelte';

	type Theme = 'light' | 'dark';

	let currentTheme: Theme;

	const setTheme = (theme: Theme) => {
		sessionStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);

		currentTheme = theme;
	};

	const switchDarkMode = () => {
		const upcomingTheme = currentTheme === 'light' ? 'dark' : 'light';

		document.documentElement.setAttribute('data-theme', upcomingTheme);
		setTheme(upcomingTheme);

		currentTheme = upcomingTheme;
	};

	const isCorrectTheme = (theme: string): theme is Theme => {
		return ['light', 'dark'].includes(theme);
	};

	onMount(() => {
		const savedTheme = document.documentElement.getAttribute('data-theme');
		if (savedTheme && isCorrectTheme(savedTheme)) {
			currentTheme = savedTheme;
			return;
		}

		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const theme = prefersDark ? 'dark' : 'light';
		setTheme(theme);
	});
</script>

<ThemeToggleIcon on:click={switchDarkMode} />

<style lang="postcss">
</style>
