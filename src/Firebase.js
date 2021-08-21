import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBY6pt8o5Nk7LMEXLqxWAhkCKxIXCpJ9ZI",
    authDomain: "clone-37e9a.firebaseapp.com",
    projectId: "clone-37e9a",
    storageBucket: "clone-37e9a.appspot.com",
    messagingSenderId: "994460123464",
    appId: "1:994460123464:web:808c9d671ba073460b337d"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  let provider=new firebase.auth.GoogleAuthProvider()
  export const firestore= firebase.firestore();
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
 export default firebase;
