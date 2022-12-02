// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBN_dG2je-Nb81B3YyS7p2m-088tcIFxE",
  authDomain: "node-jwt-recap.firebaseapp.com",
  projectId: "node-jwt-recap",
  storageBucket: "node-jwt-recap.appspot.com",
  messagingSenderId: "651410249459",
  appId: "1:651410249459:web:c8372ca2d84af71880c986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;