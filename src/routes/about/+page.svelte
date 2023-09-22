<section id="about">
	<h2>About</h2>
	<div class="text-container">
		<p>
			I've always been a bit of a tech whizz, but due to a sequence of choices post-high school I
			decided to study Media and Comms. Don't get me wrong, I really liked my studies. But since I
			dived into Web Development I decided I needed to switch.
		</p>
		<p>
			After a few hundreds of hours of online courses, scrolling through a huge number of
			documentation I'm not sure I still fully understand, countless tutorial videos, I was lucky
			enough to start a new path in this exciting field. And I'm not looking back.
		</p>
	</div>
	<h3>Stack</h3>
	<ul>
		<li>Typescript</li>
		<li>Node.js</li>
		<li>React</li>
		<li>Vue.js</li>
		<!-- TODO: add more -->
		<!-- NOTE: idea: make it so they're small icons you can move around -->
	</ul>
</section>

<style lang="postcss">
	@import '../../styles/variables.css';

	#about {
		background-color: var(--background-colour); /* TODO: make lighter */
	}

	@media (--md) {
		.text-container {
			display: flex;
			gap: 3rem;
		}
	}
</style>
