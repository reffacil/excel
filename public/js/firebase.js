// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCiBVONteA3LQFdiy83iWUNAD2gEwCGB2k",
authDomain: "excel-reffacil.firebaseapp.com",
projectId: "excel-reffacil",
storageBucket: "excel-reffacil.appspot.com",
messagingSenderId: "363460919737",
appId: "1:363460919737:web:ddef297b67917dfe23b668",
measurementId: "G-P34FBV686G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);