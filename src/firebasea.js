// import firebase from "firebase"

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCEXC7Fwp9wRNalbVRQm2Am0KPLtVecaVI",
//     authDomain: "clone-33fd5.firebaseapp.com",
//     projectId: "clone-33fd5",
//     storageBucket: "clone-33fd5.appspot.com",
//     messagingSenderId: "554490203471",
//     appId: "1:554490203471:web:b6c6daa0d8ef0a3de2493a",
//     measurementId: "G-E49Q6MJEP7"
// });

// const auth = firebase.auth();

// export {auth };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEXC7Fwp9wRNalbVRQm2Am0KPLtVecaVI",
    authDomain: "clone-33fd5.firebaseapp.com",
    projectId: "clone-33fd5",
    storageBucket: "clone-33fd5.appspot.com",
    messagingSenderId: "554490203471",
    appId: "1:554490203471:web:b6c6daa0d8ef0a3de2493a",
    measurementId: "G-E49Q6MJEP7"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth};