import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseKey from './firebasekey.json';

// Initialize Firebase
const config = firebaseKey;

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });

// database
// 	.collection('events')
// 	.get()
// 	.then((collection) =>
// 		collection.docs.forEach((document) => console.log(document.data()))
// 	);

export { auth, database };
