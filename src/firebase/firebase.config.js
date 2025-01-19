// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmgPCK37LDtjACZsFlr4tAi6esuDI2Cs8",
  authDomain: "shoes-ecoomerce.firebaseapp.com",
  projectId: "shoes-ecoomerce",
  storageBucket: "shoes-ecoomerce.firebasestorage.app",
  messagingSenderId: "264790727617",
  appId: "1:264790727617:web:a5b2827f361bc48f4c6d40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
