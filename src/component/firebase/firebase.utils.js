import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCSQ7bhpdumyq4byusawqtV_w-roF8R5I8',
  authDomain: 'taxint-cbf74.firebaseapp.com',
  databaseURL: 'https://taxint-cbf74.firebaseio.com',
  projectId: 'taxint-cbf74',
  storageBucket: 'taxint-cbf74.appspot.com',
  messagingSenderId: '447958489647',
  appId: '1:447958489647:web:77cf5617c71407ea96c4da',
  measurementId: 'G-FK1TEKXZDB',
};
// Initialize Firebase
firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
// export default firebase;
