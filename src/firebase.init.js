// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVrFckMjC03mhL7p8h9KngZvyAuLRmI7s",
  authDomain: "auth-moha-milon-22159.firebaseapp.com",
  projectId: "auth-moha-milon-22159",
  storageBucket: "auth-moha-milon-22159.firebasestorage.app",
  messagingSenderId: "217830213094",
  appId: "1:217830213094:web:7802c09d12a8900416c227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);