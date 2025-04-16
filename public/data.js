// data.js
import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { auth } from "./auth.js";

const db = getDatabase();

export async function saveBook(bookData) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");
  
  const bookRef = ref(db, `users/${user.uid}/library/${bookData.key}`);
  await set(bookRef, bookData);
}

export async function removeBook(bookKey) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");
  
  const bookRef = ref(db, `users/${user.uid}/library/${bookKey}`);
  await remove(bookRef);
}

export function getUserLibrary(callback) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");
  
  const libraryRef = ref(db, `users/${user.uid}/library`);
  return onValue(libraryRef, (snapshot) => {
    callback(snapshot.val() || {});
  });
}