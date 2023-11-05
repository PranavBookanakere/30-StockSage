// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGg-HctOKlLJ_HtKDXeX2jRrdoZhmVdv0",
  authDomain: "stocksage-19b7c.firebaseapp.com",
  projectId: "stocksage-19b7c",
  storageBucket: "stocksage-19b7c.appspot.com",
  messagingSenderId: "91745945206",
  appId: "1:91745945206:web:6b8ffd9e687b2c39570157",
  measurementId: "G-C134RTVP43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);