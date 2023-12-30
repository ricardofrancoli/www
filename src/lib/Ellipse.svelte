<script lang="ts">
	export let colour: 'primary' | 'secondary' | 'tertiary';
	$: cssColourVar = `var(--${colour}-colour)`;

	export let id: number;
</script>

<svg width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
	<circle opacity="0.7" cx="320" cy="320" r="320" fill={`url(#radialGradient-${id})`} />
	<defs>
		<radialGradient
			id={`radialGradient-${id}`}
			cx="0"
			cy="0"
			r="1"
			gradientUnits="userSpaceOnUse"
			gradientTransform="translate(320 320) scale(320)"
		>
			<stop stop-color={cssColourVar} stop-opacity="0.5" />
			<stop offset="1" stop-color={cssColourVar} stop-opacity="0" />
		</radialGradient>
	</defs>
</svg>
