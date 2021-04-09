import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAdwpJAgxEi_J929tb4Gsrw9ZoEjmpUgRM",
  authDomain: "barter-system-cf826.firebaseapp.com",
  projectId: "barter-system-cf826",
  storageBucket: "barter-system-cf826.appspot.com",
  messagingSenderId: "48269510335",
  appId: "1:48269510335:web:6597587a7eae2da5c7680a"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
