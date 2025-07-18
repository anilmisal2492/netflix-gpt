// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgw-qcwj5BpG_DV359FszeSLQn1bKJDII",
  authDomain: "netflixgpt-ed17d.firebaseapp.com",
  projectId: "netflixgpt-ed17d",
  storageBucket: "netflixgpt-ed17d.firebasestorage.app",
  messagingSenderId: "877410097232",
  appId: "1:877410097232:web:44993ff0483c4e5b9c9955",
  measurementId: "G-DBCKLSGHR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Now you can use Firebase Authentication
