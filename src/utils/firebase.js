import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBeWbyylc5AzLeWEaHVCyl_u173Vsr6b5w",
  authDomain: "netflix-gpt-6e042.firebaseapp.com",
  projectId: "netflix-gpt-6e042",
  storageBucket: "netflix-gpt-6e042.firebasestorage.app",
  messagingSenderId: "915135465272",
  appId: "1:915135465272:web:8849258d7d29e5e33aa3cd",
  measurementId: "G-WCRK9R9PH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication
export const auth = getAuth(app);
