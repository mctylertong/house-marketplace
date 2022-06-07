import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCD0zf_RO3dcwjbEgBGeu0ZQKvEWGR_UcM",
  authDomain: "house-marketplace-76ff3.firebaseapp.com",
  projectId: "house-marketplace-76ff3",
  storageBucket: "house-marketplace-76ff3.appspot.com",
  messagingSenderId: "364334076696",
  appId: "1:364334076696:web:a73d7dd8c2a6d3170e446d"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore()