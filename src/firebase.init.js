// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEIiZblU8xF05aOYH-5ZcnuoRmU1qGPk",
  authDomain: "ema-jhon-simple-b6b2a.firebaseapp.com",
  projectId: "ema-jhon-simple-b6b2a",
  storageBucket: "ema-jhon-simple-b6b2a.appspot.com",
  messagingSenderId: "912608671989",
  appId: "1:912608671989:web:8694c1f92aa92f65aa2dbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;