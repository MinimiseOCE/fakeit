import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC1-AFb1xByzO4N4HKt5MIdMjs1BrKivno",
    authDomain: "fakeit-d9bac.firebaseapp.com",
    projectId: "fakeit-d9bac",
    storageBucket: "fakeit-d9bac.appspot.com",
    messagingSenderId: "642696077907",
    appId: "1:642696077907:web:8ab7a5f3e681a686bc5ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const auth = getAuth(app)
export const db = getFirestore(app)