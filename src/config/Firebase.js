// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "clothingsite-de67e.firebaseapp.com",
    projectId: "clothingsite-de67e",
    storageBucket: "clothingsite-de67e.appspot.com",
    messagingSenderId: "820651835186",
    appId: "1:820651835186:web:8c2fb5e36c84c04c2ea12b",
    measurementId: "G-C6MYBNSKKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);