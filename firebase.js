// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSNzdH5qfKprt0NwKdpD_nkTNvzlNDlbI",
    authDomain: "hackathon-preparation.firebaseapp.com",
    projectId: "hackathon-preparation",
    storageBucket: "hackathon-preparation.appspot.com",
    messagingSenderId: "308051018279",
    appId: "1:308051018279:web:3496ea9caa4011cfe38402",
    measurementId: "G-TRJMLDTFCE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
