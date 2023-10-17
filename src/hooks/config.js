import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDn5celrcDLXr7CF1pknUfSMTLv3y5Lvpo",
  authDomain: "mau-ecommerce.firebaseapp.com",
  projectId: "mau-ecommerce",
  storageBucket: "mau-ecommerce.appspot.com",
  messagingSenderId: "786859069834",
  appId: "1:786859069834:web:a78701281f5a96f977b873",
  measurementId: "G-Z4ZWB2RYQ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
