// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa-2th1d1eF5xSXJvCbUqh-FWm-xkz-b0",
  authDomain: "hackutd-c87e3.firebaseapp.com",
  projectId: "hackutd-c87e3",
  storageBucket: "hackutd-c87e3.appspot.com",
  messagingSenderId: "593775232669",
  appId: "1:593775232669:web:593566094861fec9717674",
  measurementId: "G-084E362TT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);