// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdpEkzGRoGCav7uFH8gIfTslluDy1lW_Y",
  authDomain: "vertex-32ce6.firebaseapp.com",
  projectId: "vertex-32ce6",
  storageBucket: "vertex-32ce6.appspot.com",
  messagingSenderId: "346629064942",
  appId: "1:346629064942:web:e66adf2da6414066b4cbff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
