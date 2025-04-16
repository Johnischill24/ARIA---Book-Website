import { getAuth, signInAnonymously, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import app from "./firebaseConfig.js";

const auth = getAuth(app);

// Anonymous login function
export async function anonymousLogin() {
  try {
    const userCredential = await signInAnonymously(auth);
    console.log("Logged in anonymously:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Anonymous login error:", error);
    alert("Failed to log in anonymously. Please try again.");
    throw error;
  }
}

// Logout function
export async function logout() {
  try {
    await signOut(auth);
    console.log("Logged out successfully.");
  } catch (error) {
    console.error("Logout error:", error);
    alert("Failed to log out. Please try again.");
  }
}

// Listen for authentication state changes
export function setAuthStateListener(onLogin, onLogout) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is logged in:", user);
      onLogin(user);
    } else {
      console.log("User is logged out.");
      onLogout();
    }
  });
}

export { auth };