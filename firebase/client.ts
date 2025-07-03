// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAorFwsMZgtMk5OtjcFy569YcV-A-Q1InA",
  authDomain: "preptalk-46d8c.firebaseapp.com",
  projectId: "preptalk-46d8c",
  storageBucket: "preptalk-46d8c.firebasestorage.app",
  messagingSenderId: "561922454055",
  appId: "1:561922454055:web:befb9105bb7a7a23741402",
  measurementId: "G-89M62664HK",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)