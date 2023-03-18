// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMCKdsnzd5rwpIHLK-tUGI4PFx7r-h1H8",
  authDomain: "chat-44dd9.firebaseapp.com",
  projectId: "chat-44dd9",
  databaseURL: "https://chat-44dd9-default-rtdb.firebaseio.com/",
  storageBucket: "chat-44dd9.appspot.com",
  messagingSenderId: "892084567045",
  appId: "1:892084567045:web:94080c06f59f2d31f2f06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth} ;