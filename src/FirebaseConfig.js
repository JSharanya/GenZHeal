// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmtStl8KHrBrW_5ZPRR1ZMbLbf9Ma_QU4",
  authDomain: "genzheal-fa257.firebaseapp.com",
  projectId: "genzheal-fa257",
  storageBucket: "genzheal-fa257.appspot.com",
  messagingSenderId: "748122434262",
  appId: "1:748122434262:web:e1c6fd842c316be42e3777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export{app}