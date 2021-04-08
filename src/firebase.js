import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9yRQ7zzhlFzp7F0fbmQQFF5GvOVfQxOE",
  authDomain: "fir-219de.firebaseapp.com",
  projectId: "fir-219de",
  storageBucket: "fir-219de.appspot.com",
  messagingSenderId: "707637421341",
  appId: "1:707637421341:web:df519d44e3b7a5aa272df4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

export { db, auth };
