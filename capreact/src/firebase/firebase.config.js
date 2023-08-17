import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Using firestore as db
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5dsHW-qXjyWZnV3dAv_5ba4R6DEsegu4",
  authDomain: "cap1-da4a1.firebaseapp.com",
  projectId: "cap1-da4a1",
  storageBucket: "cap1-da4a1.appspot.com",
  messagingSenderId: "500892811958",
  appId: "1:500892811958:web:7a7dd364d89d75a3179c17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Using firestore as db
export const db = getFirestore(app);
export const auth = getAuth(app);