import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl5Hif89eHbAupVyfi_tGH8spF5KXjv5w",
    authDomain: "week7-zixun.firebaseapp.com",
    projectId: "week7-zixun",
    storageBucket: "week7-zixun.appspot.com",
    messagingSenderId: "991354288703",
    appId: "1:991354288703:web:a50e687179aebb232bd68a"
  };
  
// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db
