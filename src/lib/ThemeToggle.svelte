<script lang="ts">
	let darkMode = true;

	const switchDarkMode = () => {
		darkMode = !darkMode;

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');

		console.log('document', document.documentElement.classList);
	};
</script>

<div>
	<input type="checkbox" id="theme-toggle" checked={darkMode} on:click={switchDarkMode} />
	<label for="theme-toggle" />
</div>

<style lang="postcss">
</style>
