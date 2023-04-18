// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR9MB3jyjYXpTFZ6AJ_MOrv4ONk2y-5d8",
  authDomain: "the-news-dragon-ab2de.firebaseapp.com",
  projectId: "the-news-dragon-ab2de",
  storageBucket: "the-news-dragon-ab2de.appspot.com",
  messagingSenderId: "755130834764",
  appId: "1:755130834764:web:f6c1fb57f64e56ff9b39e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;