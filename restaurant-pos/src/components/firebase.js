import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClvGKVsFKylzRH4Agj1S9h5mjAJ2eYDnQ",
  authDomain: "tododaily-16c8a.firebaseapp.com",
  projectId: "tododaily-16c8a",
  databaseURL: "https://tododaily-16c8a-default-rtdb.firebaseio.com",
  storageBucket: "tododaily-16c8a.appspot.com",
  messagingSenderId: "235162023344",
  appId: "1:235162023344:web:d811f937c80b0bf5215275",
  measurementId: "G-ZZ02EECN39",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

// const functions = require("firebase-functions");
// exports.helloWorld = functions.https.onRequest((res, rep) => {
//   res.send("hello world");
// });
