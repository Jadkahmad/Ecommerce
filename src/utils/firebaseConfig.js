import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjjAOf4Uaz_iRkiH1ESDzHDM9GlEuRkGE",
  authDomain: "e-commerce-app-392e6.firebaseapp.com",
  projectId: "e-commerce-app-392e6",
  storageBucket: "e-commerce-app-392e6.appspot.com",
  messagingSenderId: "529597597962",
  appId: "1:529597597962:web:38e3564a11fcf6cdffd2f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);