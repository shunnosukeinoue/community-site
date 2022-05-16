// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe5PT203TsP8nwk9NOD6JIRBHGnG6ubLU",
  authDomain: "commnitysite-circle.firebaseapp.com",
  projectId: "commnitysite-circle",
  storageBucket: "commnitysite-circle.appspot.com",
  messagingSenderId: "836655156853",
  appId: "1:836655156853:web:0c06f4e5a2bfafb484b23c",
  measurementId: "G-ESB2YRSF9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;