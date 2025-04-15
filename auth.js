// Import Firebase modules (add at top of auth.js)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import firebaseConfig from './firebaseConfig.js';

// Initialize Firebase (remove the duplicate initialization)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register Function
export async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful! You can now login.");
    console.log("Registered:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    alert(error.message);
    console.error("Registration error:", error);
    throw error;
  }
}

// Login Function
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    console.log("Logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    alert(error.message);
    console.error("Login error:", error);
    throw error;
  }
}

// Logout Function
export async function logout() {
  try {
    await signOut(auth);
    alert("Logged out!");
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error);
    alert(error.message);
    throw error;
  }
}

// Auth State Listener
export function setAuthListeners(onLogin, onLogout) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      onLogin(user);
    } else {
      onLogout();
    }
  });
}

// Export everything
export { auth, register, login, logout, setAuthListeners };