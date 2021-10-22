import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF-8vtnGUpe1XZ9Ms8tLeVchtcJ5T2ZRM",
    authDomain: "react-app-journal-2b6bb.firebaseapp.com",
    projectId: "react-app-journal-2b6bb",
    storageBucket: "react-app-journal-2b6bb.appspot.com",
    messagingSenderId: "842758939332",
    appId: "1:842758939332:web:a8dc0d691da9fcfa611f91"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const googleAuthProvider =new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }