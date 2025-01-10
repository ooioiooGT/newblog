// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHDodEbavomEr3cztdf_sO2MDFjDA6p0g",
  authDomain: "gilberny-newblog.firebaseapp.com",
  projectId: "gilberny-newblog",
  storageBucket: "gilberny-newblog.firebasestorage.app",
  messagingSenderId: "788256712040",
  appId: "1:788256712040:web:03df7661f45e6ddfb862dd",
  measurementId: "G-F0LS6PCG9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);