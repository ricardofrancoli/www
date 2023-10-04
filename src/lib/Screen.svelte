<script lang="ts">
	export let width = 700;
	export let imageHref: string;
</script>

<div class="screenshot">
	<svg {width} viewBox="0 0 3960 2262" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect y="2138.5" width="3960" height="61.5054" fill="#BEBEBE" />
		<rect x="1698.5" y="2114.84" width="548.818" height="66.2365" rx="25" fill="#575757" />
		<path
			d="M383.228 60C383.228 26.8629 410.091 0 443.228 0H3516.77C3549.9 0 3576.77 26.8629 3576.77 60V2138.5H383.228V60Z"
			fill="black"
		/>
		<image href={imageHref} x="439.998" y="75.6983" width="3070.54" height="1949.25" />
		<path
			d="M310.634 2261.5C192.072 2261.5 61.6526 2241.82 0 2200H1982.37V2261.5C1468.6 2259.04 422.083 2261.5 310.634 2261.5Z"
			fill="#A2A2A2"
		/>
		<path
			d="M3649.37 2261.5C3767.93 2261.5 3898.35 2241.82 3960 2200H1977.63V2261.5C2491.4 2259.04 3537.92 2261.5 3649.37 2261.5Z"
			fill="#A2A2A2"
		/>
	</svg>
</div>

<style lang="postcss">
	.screenshot {
		display: flex;
		align-items: flex-end;

		svg {
			width: 100%;
		}
	}
</style>
