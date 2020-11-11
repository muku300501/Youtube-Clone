import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTOocl-69bbsVpwZ-banthmuXGQHGE0JQ",
  authDomain: "clone-by-mukund-chamariya.firebaseapp.com",
  databaseURL: "https://clone-by-mukund-chamariya.firebaseio.com",
  projectId: "clone-by-mukund-chamariya",
  storageBucket: "clone-by-mukund-chamariya.appspot.com",
  messagingSenderId: "243104942132",
  appId: "1:243104942132:web:95688f3cc08de1cfa32261",
  measurementId: "G-VBNJMTR43S",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
