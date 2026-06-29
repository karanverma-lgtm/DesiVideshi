import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9XtiPm5MkEnjJHGP4iPMc68Iw2WW_CzE",
  authDomain: "desi-videshi-eda86.firebaseapp.com",
  projectId: "desi-videshi-eda86",
  storageBucket: "desi-videshi-eda86.firebasestorage.app",
  messagingSenderId: "516354011994",
  appId: "1:516354011994:web:9a52c1688ea980525cb963",
  measurementId: "G-7GZX1B3TLY",
};

// Initialize Firebase (prevent re-initialization in dev hot reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { app, db };
