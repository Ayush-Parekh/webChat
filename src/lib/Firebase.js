// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "webchat-b62d1.firebaseapp.com",
  projectId: "webchat-b62d1",
  storageBucket: "webchat-b62d1.firebasestorage.app",
  messagingSenderId: "37395581004",
  appId: "1:37395581004:web:1677d918c82b64f9458ce9",
  measurementId: "G-PKPVPLVC19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()
export const db=getFirestore()