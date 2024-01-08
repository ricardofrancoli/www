const savedTheme = sessionStorage.getItem('theme');

if (savedTheme) {
	document.documentElement.setAttribute('data-theme', savedTheme);
} else {
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const theme = prefersDark ? 'dark' : 'light';

	document.documentElement.setAttribute('data-theme', theme);
	sessionStorage.setItem('theme', theme);
}
