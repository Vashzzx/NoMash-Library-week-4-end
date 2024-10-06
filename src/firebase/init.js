import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrMO-bA4gPCaqGjMNExh7J8_d9LKGZ8SE",
  authDomain: "week7--zixun.firebaseapp.com",
  projectId: "week7--zixun",
  storageBucket: "week7--zixun.appspot.com",
  messagingSenderId: "956670605119",
  appId: "1:956670605119:web:500ec9b66d814426e1858a"
};
// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db
