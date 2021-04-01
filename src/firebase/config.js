import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_0Ij4e5WoVRVgvjNo9FB3rgKMSnJSEYc",
  authDomain: "photo-gallery-ee6d4.firebaseapp.com",
  databaseURL: "https://photo-gallery-ee6d4-default-rtdb.firebaseio.com",
  projectId: "photo-gallery-ee6d4",
  storageBucket: "photo-gallery-ee6d4.appspot.com",
  messagingSenderId: "661633347643",
  appId: "1:661633347643:web:f4c5b443ad6c393b296c1e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{ projectStorage, projectFirestore, timestamp };