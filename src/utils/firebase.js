// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-97b1d.firebaseapp.com",
  projectId: "blog-97b1d",
  storageBucket: "blog-97b1d.appspot.com",
  messagingSenderId: "764868870990",
  appId: "1:764868870990:web:f6b1baea720873b27bd41f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);