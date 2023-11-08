// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8bujAYa4Xu5z_zAR6EMmpxVsxF1KDSfA",
  authDomain: "house-marketplace-71b16.firebaseapp.com",
  projectId: "house-marketplace-71b16",
  storageBucket: "house-marketplace-71b16.appspot.com",
  messagingSenderId: "241504131643",
  appId: "1:241504131643:web:b43aaee3ba86e029b01a1e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
