// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYS8eNk0ma5IpHSvVJj0p2AOvZikXC1TQ",
  authDomain: "subscription-platform-31844.firebaseapp.com",
  databaseURL: "http://localhost:3000/",
  projectId: "subscription-platform-31844",
  storageBucket: "subscription-platform-31844.appspot.com",
  messagingSenderId: "844840370367",
  appId: "1:844840370367:web:30532bc523bfe895d7060a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
