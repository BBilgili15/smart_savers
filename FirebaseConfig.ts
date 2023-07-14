// require('dotenv').config();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import apikey from "./apikey";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: apikey,
    authDomain:"smartsavers-c0852.firebaseapp.com",
    projectId:"smartsavers-c0852",
    storageBucket:"smartsavers-c0852.appspot.com",
    messagingSenderId:"419255432251",
    appId:"1:419255432251:web:877bcd3c3305c480d5581e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const db = getDatabase();

