// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlwhCBFDHfMUhCkxU4GxJIojTESBfX0RI",
  authDomain: "house-marketplace-app-8c52d.firebaseapp.com",
  projectId: "house-marketplace-app-8c52d",
  storageBucket: "house-marketplace-app-8c52d.appspot.com",
  messagingSenderId: "941541211013",
  appId: "1:941541211013:web:e03bd9c97e573716f4e2ec",
};

// Initialize Firebase
export const db = getFirestore();
