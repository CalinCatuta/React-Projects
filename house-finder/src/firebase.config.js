import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
initializeApp(firebaseConfig);
export const db = getFirestore();
