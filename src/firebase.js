 import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDa1zDGjoUPt-fMYcTMqoRl3HbxiQA6KYU",
  authDomain: "waffle-ac911.firebaseapp.com",
  projectId: "waffle-ac911",
  storageBucket: "waffle-ac911.appspot.com",
  messagingSenderId: "638148239394",
  appId: "1:638148239394:web:0c352525c1d3d6b53eaa7b",
  measurementId: "G-1BZX9V7SP0"
};
  
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;