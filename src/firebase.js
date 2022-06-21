import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7Nt_C8TvooHP-L5wNPCPUrWdvs2g2N70",
    authDomain: "clone-a53a5.firebaseapp.com",
    projectId: "clone-a53a5",
    storageBucket: "clone-a53a5.appspot.com",
    messagingSenderId: "918275033434",
    appId: "1:918275033434:web:ee1a57c4c00c366f6d0b63",
    measurementId: "G-VZW7YWW7DP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };