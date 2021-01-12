import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDud3LkTR60Of7KtD68IhMY6Svz328yIZE",
  authDomain: "challenge-35833.firebaseapp.com",
  databaseURL: "https://challenge-35833.firebaseio.com",
  projectId: "challenge-35833",
  storageBucket: "challenge-35833.appspot.com",
  messagingSenderId: "680524084528",
  appId: "1:680524084528:web:53eaa113a49597850904f5",
  measurementId: "G-T6SPGR14T8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
