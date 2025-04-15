/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle user login
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in:", error.message);
        throw error;
    }
};

// Function to handle user registration
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User registered:", userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error("Error registering user:", error.message);
        throw error;
    }
};

// Function to handle user logout
export const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("User logged out");
    } catch (error) {
        console.error("Error logging out:", error.message);
        throw error;
    }
};
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register Function
async function register(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful! You can now login.");
    console.log("Registered:", userCredential.user);
  } catch (error) {
    alert(error.message);
    console.error("Registration error:", error);
  }
}

// Login Function
async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    console.log("Logged in:", userCredential.user);
  } catch (error) {
    alert(error.message);
    console.error("Login error:", error);
  }
}

// Logout Function
async function logout() {
  try {
    await signOut(auth);
    alert("Logged out!");
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error);
    alert(error.message);
  }
}

// Auth State Listener
function setAuthListeners(onLogin, onLogout) {
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