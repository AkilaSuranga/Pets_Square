// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdsYM5PIpDHghGGhmpkVtQqn4Rqo4NM7M",
  authDomain: "pets-square.firebaseapp.com",
  projectId: "pets-square",
  storageBucket: "pets-square.appspot.com",
  messagingSenderId: "998299401066",
  appId: "1:998299401066:web:836089ccffd9892c550313",
  measurementId: "G-V8JWF6M42Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
