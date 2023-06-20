import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8hMCKbzUb32lcFOPSXzjVorVnEiulAPc",
  authDomain: "nutri-ne.firebaseapp.com",
  projectId: "nutri-ne",
  storageBucket: "nutri-ne.appspot.com",
  messagingSenderId: "1027200368824",
  appId: "1:1027200368824:web:0faa5182edfff445a2b44d",
  measurementId: "G-G5VY40K23Q"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const services = {
  db
}