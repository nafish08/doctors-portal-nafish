// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVR2JaXtgSXsC0rV96muWkM4SBIWfqglg",
    authDomain: "doctors-portal-850df.firebaseapp.com",
    projectId: "doctors-portal-850df",
    storageBucket: "doctors-portal-850df.appspot.com",
    messagingSenderId: "952550754348",
    appId: "1:952550754348:web:501cc1851707a0f4e9e989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;