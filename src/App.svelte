<script>
	// Firebase
	import firebase from "firebase/app";
	import "firebase/firestore";
	
	// 3rd-party components
	import { FirebaseApp } from "sveltefire";
	
	// 1st-party components
	import Route from "./components/Route.svelte";
	
	// Props
	export let firebaseConfig;
	
	// On start
	firebase.initializeApp(firebaseConfig);
</script>

<FirebaseApp {firebase}>
	<!-- Header -->
	<Route />
	<!-- Footer -->
</FirebaseApp>