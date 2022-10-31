// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
export { auth }

const analytics = getAnalytics(app);