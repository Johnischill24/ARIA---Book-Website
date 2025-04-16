import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIP2XEJ7Yu4bVvqO_D1JlsJGNAytTnkvM",
  authDomain: "aria-51e5e.firebaseapp.com",
  projectId: "aria-51e5e",
  storageBucket: "aria-51e5e.firebasestorage.app",
  messagingSenderId: "603730679149",
  appId: "1:603730679149:web:c3d5266bfc4c2a7de8b664",
  measurementId: "G-WP5V2QDYZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };