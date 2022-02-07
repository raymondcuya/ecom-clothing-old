import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCUC8EngK0BbhGzphpvB0rhuHF_ZEpIi3E',
  authDomain: 'ecom-db-1a197.firebaseapp.com',
  projectId: 'ecom-db-1a197',
  storageBucket: 'ecom-db-1a197.appspot.com',
  messagingSenderId: '952918330771',
  appId: '1:952918330771:web:a5c69e38d988ca5a40ec66',
  measurementId: 'G-1CZ5BMTPCW',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
