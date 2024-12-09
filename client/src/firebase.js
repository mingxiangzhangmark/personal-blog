// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mark-s-blog.firebaseapp.com",
  projectId: "mark-s-blog",
  storageBucket: "mark-s-blog.firebasestorage.app",
  messagingSenderId: "220690828621",
  appId: "1:220690828621:web:60169ec3ac926fb5983b04",
  measurementId: "G-FPV5ZNP1K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }