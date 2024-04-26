// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtfxmoQNOsiK2w9NsdeIeakcgM0Lub_dQ",
    authDomain: "ecommerce-tecnopol.firebaseapp.com",
    projectId: "ecommerce-tecnopol",
    storageBucket: "ecommerce-tecnopol.appspot.com",
    messagingSenderId: "299324616903",
    appId: "1:299324616903:web:978800ff647362a2af4ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);