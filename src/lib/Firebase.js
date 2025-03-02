// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "webchat21-43e97.firebaseapp.com",
  projectId: "webchat21-43e97",
  storageBucket: "webchat21-43e97.firebasestorage.app",
  messagingSenderId: "881246327831",
  appId: "1:881246327831:web:eafae8767ddca3df5db852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);