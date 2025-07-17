// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVJwlOz82pNI2JkcVi1eB9XIYJQNrT2fc",
  authDomain: "netflix-gpt-a80b6.firebaseapp.com",
  projectId: "netflix-gpt-a80b6",
  storageBucket: "netflix-gpt-a80b6.firebasestorage.app",
  messagingSenderId: "488595088815",
  appId: "1:488595088815:web:9ef25af8f1f84448da3b5a",
  measurementId: "G-8CTCEK5YRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Now you can use Firebase Authentication
