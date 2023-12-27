// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
// import {
//     getAuth,
//     signOut,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword 
// } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
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
// const auth = getAuth();

// let formularioDeRegistro = document.getElementById("formularioDeRegistro");
// formularioDeRegistro.addEventListener("submit", function(event){
//     event.preventDefault();
//     let email = formularioDeRegistro['email'].value;
//     let password = formularioDeRegistro['password'].value;
//     createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
//         const user = userCredential.user;
//         console.log("Usuario Registrado:", user);
//         sessionStorage.setItem('uid', user.uid);
//         sessionStorage.setItem('accessToken', user.accessToken);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Ha ocurrio un error al registrar al usuario.");
//         console.error("Código de error:", errorCode);
//         console.error("Mensaje de error:", errorMessage);
//     });
// });

// let formularioDeInicioDeSesion = document.getElementById("formularioDeInicioDeSesion");
// formularioDeInicioDeSesion.addEventListener("submit", function(event){
//     event.preventDefault();
//     let email = formularioDeInicioDeSesion['email'].value;
//     let password = formularioDeInicioDeSesion['password'].value;
//     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
//         const user = userCredential.user;
//         console.log("Inicio de Sesión Exitoso.")
//         console.log("Datos de Usuario:", user)
//         sessionStorage.setItem('uid', user.uid);
//         sessionStorage.setItem('accessToken', user.accessToken);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Ha ocurrio un error al iniciar sesión.");
//         console.error("Código de error:", errorCode);
//         console.error("Mensaje de error:", errorMessage);
//     });
// });

// let btnCerrarSesion = document.getElementById("botonCerrarSesion");
// btnCerrarSesion.addEventListener("click", function(event){
//     sessionStorage.removeItem('uid');
//     sessionStorage.removeItem('accessToken');
//     signOut(auth).then(() => {
//         console.log("Ha cerrado sesión correctamente.")
//     }).catch((error) => {
//         console.error("No ha podido cerrar sesión");
//         console.error("Mensaje de error:", error);
//     });
// })


// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// import {
//     getAuth,
//     signOut,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword 
// } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// new DotEnv("./.env")
//     .then(env => { const firebaseConfig = {
//         apiKey:env.FIREBASE_APIKEY,
//         authDomain:env.FIREBASE_AUTHDOMAIN,
//         projectId:env.FIREBASE_PROJECTID,
//         storageBucket:env.FIREBASE_STORAGEBUCKET,
//         messagingSenderId:env.FIREBASE_MESSAGINGSENDERID,
//         appId:env.FIREBASE_APPID,
//         measurementId:env.FIREBASE_MEASUREMENTID
//     };
    
//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);
//     const auth = getAuth();
// });

// let formularioDeRegistro = document.getElementById("formularioDeRegistro");
// formularioDeRegistro.addEventListener("submit", function(event){
//     event.preventDefault();
//     let email = formularioDeRegistro['email'].value;
//     let password = formularioDeRegistro['password'].value;
//     createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
//         const user = userCredential.user;
//         console.log("Usuario Registrado:", user);
//         sessionStorage.setItem('uid', user.uid);
//         sessionStorage.setItem('accessToken', user.accessToken);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Ha ocurrio un error al registrar al usuario.");
//         console.error("Código de error:", errorCode);
//         console.error("Mensaje de error:", errorMessage);
//     });
// });

// let formularioDeInicioDeSesion = document.getElementById("formularioDeInicioDeSesion");
// formularioDeInicioDeSesion.addEventListener("submit", function(event){
//     event.preventDefault();
//     let email = formularioDeInicioDeSesion['email'].value;
//     let password = formularioDeInicioDeSesion['password'].value;
//     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
//         const user = userCredential.user;
//         console.log("Inicio de Sesión Exitoso.")
//         console.log("Datos de Usuario:", user)
//         sessionStorage.setItem('uid', user.uid);
//         sessionStorage.setItem('accessToken', user.accessToken);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Ha ocurrio un error al iniciar sesión.");
//         console.error("Código de error:", errorCode);
//         console.error("Mensaje de error:", errorMessage);
//     });
// });

// let btnCerrarSesion = document.getElementById("botonCerrarSesion");
// btnCerrarSesion.addEventListener("click", function(event){
//     sessionStorage.removeItem('uid');
//     sessionStorage.removeItem('accessToken');
//     signOut(auth).then(() => {
//         console.log("Ha cerrado sesión correctamente.")
//     }).catch((error) => {
//         console.error("No ha podido cerrar sesión");
//         console.error("Mensaje de error:", error);
//     });
// });