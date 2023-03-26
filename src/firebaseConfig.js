
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSytjq636y-mJL15FerUtQ3xRq4u8aGUY",
  authDomain: "leather-and-steel.firebaseapp.com",
  projectId: "leather-and-steel",
  storageBucket: "leather-and-steel.appspot.com",
  messagingSenderId: "311577305079",
  appId: "1:311577305079:web:0a4dacca41b787084798f2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)