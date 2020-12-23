import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGzFSxHjTkvyQ_ugzAtbJFm_SVyK4S_ro",
  authDomain: "whatsapp-clone-f4b09.firebaseapp.com",
  projectId: "whatsapp-clone-f4b09",
  storageBucket: "whatsapp-clone-f4b09.appspot.com",
  messagingSenderId: "303919840629",
  appId: "1:303919840629:web:e0fb4cb2507bce9332a73c",
  measurementId: "G-KLH8NQ36NV"
};

//initialize the firebase database
const firebaseApp = firebase.initializeApp(firebaseConfig)
//initialize the firestore database
const db = firebaseApp.firestore();
//auth handler
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;