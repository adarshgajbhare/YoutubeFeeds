// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1F3ct8HYCSr4wBlLM-_6ow_hVMqNw4I4",
  authDomain: "feed-8aeca.firebaseapp.com",
  projectId: "feed-8aeca",
  storageBucket: "feed-8aeca.appspot.com",
  messagingSenderId: "1001794915344",
  appId: "1:1001794915344:web:d10fd81eae6cd1c584ce95",
  measurementId: "G-L1KH2X9MPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();