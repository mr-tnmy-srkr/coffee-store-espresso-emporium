// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeoN5sHm9kTQQTBSK2NeW_UfGeIlAIaMM",
  authDomain: "coffee-store-espresso-emporium.firebaseapp.com",
  projectId: "coffee-store-espresso-emporium",
  storageBucket: "coffee-store-espresso-emporium.appspot.com",
  messagingSenderId: "861188890716",
  appId: "1:861188890716:web:e6c6f05d29e98b67f94699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;