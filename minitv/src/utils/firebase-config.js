import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC90ytqO4bNMZFQX0pRpyaOxNIPfS6IQUE",
  authDomain: "minitv-49495.firebaseapp.com",
  projectId: "minitv-49495",
  storageBucket: "minitv-49495.appspot.com",
  messagingSenderId: "409794506791",
  appId: "1:409794506791:web:134bba5a3facadb3871e02",
  measurementId: "G-K94LFGRP67"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);