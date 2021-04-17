import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBM8o18nsi-abxjBJS7XFpZmOS6aAjgPiM",
  authDomain: "discord-clone-837ff.firebaseapp.com",
  projectId: "discord-clone-837ff",
  storageBucket: "discord-clone-837ff.appspot.com",
  messagingSenderId: "975141855020",
  appId: "1:975141855020:web:020410c65a8cc81b199689",
  measurementId: "G-2FYZ86LG4B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
