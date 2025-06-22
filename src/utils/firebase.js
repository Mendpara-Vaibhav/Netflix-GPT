// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL9nXlRkvM6w075pS3c0xfAqE3GfzYIi0",
  authDomain: "netflixgpt-ca0fb.firebaseapp.com",
  projectId: "netflixgpt-ca0fb",
  storageBucket: "netflixgpt-ca0fb.firebasestorage.app",
  messagingSenderId: "72738437124",
  appId: "1:72738437124:web:04ba5b8a289ced5dae9d51",
  measurementId: "G-EHPRHPD6E5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
