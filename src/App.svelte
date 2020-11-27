<script lang="ts">
	import firebase from "firebase/app";
	import "firebase/firestore";
	
	export let firebaseConfig;
	
	let name = "Twitch";
	
	firebase.initializeApp(firebaseConfig);
</script>

<main>
	<h1>Hello {name}!</h1>
</main>

<h1>Does this work?</h1>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		
		h1 {
			color: #ff3e00;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>