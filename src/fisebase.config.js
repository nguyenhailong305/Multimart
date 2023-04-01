// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDC17N-ky3R0Q8RPrI3-xBpkO1GkuhhtfQ",
  authDomain: "maltimart-c5137.firebaseapp.com",
  projectId: "maltimart-c5137",
  storageBucket: "maltimart-c5137.appspot.com",
  messagingSenderId: "975233334766",
  appId: "1:975233334766:web:e070b4fe03f2955adaa2ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app ;