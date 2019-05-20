import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyDtG5LirbVtImf3EwCj4aUg2FJxyPTj2w4",
    authDomain: "merapi-id.firebaseapp.com",
    databaseURL: "https://merapi-id.firebaseio.com",
    projectId: "merapi-id",
    storageBucket: "merapi-id.appspot.com",
    messagingSenderId: "387830791855",
    appId: "1:387830791855:web:6adb3438d8b66b4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true});

  expor default firebase;
