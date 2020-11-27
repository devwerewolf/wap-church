import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		firebaseConfig: {
			apiKey: "AIzaSyAYF5PBSGE_8xSEYzRitJlKlVoVp1hWUSI",
			authDomain: "wap-church.firebaseapp.com",
			databaseURL: "https://wap-church.firebaseio.com",
			projectId: "wap-church",
			storageBucket: "wap-church.appspot.com",
			messagingSenderId: "1054830624475",
			appId: "1:1054830624475:web:78c57468d90248fcd216fe",
			measurementId: "G-SE9HZ7NFJH"
		}
	}
});

export default app;