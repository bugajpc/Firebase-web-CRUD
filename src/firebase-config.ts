import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export interface Post {
  id: string,
  title: string,
  content: string
}

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "database-a695e.firebaseapp.com",
  projectId: "database-a695e",
  storageBucket: "database-a695e.firebasestorage.app",
  messagingSenderId: "541258160132",
  appId: "1:541258160132:web:cf10294013b34bc5c07d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);