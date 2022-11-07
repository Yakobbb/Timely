import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb25N0NLybIs741BaFmwP_SGFi-qZUriU",
  authDomain: "timely-backend-abbbb.firebaseapp.com",
  projectId: "timely-backend-abbbb",
  storageBucket: "timely-backend-abbbb.appspot.com",
  messagingSenderId: "405132346088",
  appId: "1:405132346088:web:ff1a3a8f3564c8a52fff5d",
  measurementId: "G-TTH3TZQY3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Auth
const auth = getAuth(app);