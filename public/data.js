import { ref, set, remove, get, push, getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { auth } from "./auth.js";
import { database } from "./firebaseConfig.js";

// Save book to Firebase
export async function saveBook(bookData) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const bookRef = ref(database, `users/${user.uid}/library/${bookData.key}`);
  await set(bookRef, bookData);
  console.log("Book saved to library:", bookData);
}

// Remove book from Firebase
export async function removeBook(bookKey) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const bookRef = ref(database, `users/${user.uid}/library/${bookKey}`);
  await remove(bookRef);
  console.log("Book removed from library:", bookKey);
}

// Save a comment for a book
export async function saveComment(bookKey, commentText) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const commentRef = ref(database, `books/${bookKey}/comments`);
  const newCommentRef = push(commentRef); // Generate a unique key for the comment
  const commentData = {
    userId: user.uid,
    text: commentText,
    timestamp: new Date().toISOString(),
  };

  await set(newCommentRef, commentData);
  console.log("Comment saved:", commentData);
}

// Get comments for a specific book
export async function getComments(bookKey) {
  const commentRef = ref(database, `books/${bookKey}/comments`);
  const snapshot = await get(commentRef);

  if (snapshot.exists()) {
    const comments = snapshot.val();
    console.log("Comments retrieved:", comments);
    return Object.values(comments); // Convert the object to an array
  } else {
    console.log("No comments found for this book.");
    return [];
  }
}