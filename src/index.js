import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHDodEbavomEr3cztdf_sO2MDFjDA6p0g",
  authDomain: "gilberny-newblog.firebaseapp.com",
  projectId: "gilberny-newblog",
  storageBucket: "gilberny-newblog.firebasestorage.app",
  messagingSenderId: "788256712040",
  appId: "1:788256712040:web:03df7661f45e6ddfb862dd",
  measurementId: "G-F0LS6PCG9P"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
);



