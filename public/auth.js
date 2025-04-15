// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js";

// Your Firebase configuration
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
const auth = getAuth(app);

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("status").innerText = `Welcome, ${user.email}!`;
    })
    .catch((error) => {
      document.getElementById("status").innerText = `Error: ${error.message}`;
    });
}
