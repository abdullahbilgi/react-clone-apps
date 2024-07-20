// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl8leZ2f_u8ceELRQx6xB87hqAkT0JN4w",
  authDomain: "netflix-clone-f8b01.firebaseapp.com",
  projectId: "netflix-clone-f8b01",
  storageBucket: "netflix-clone-f8b01.appspot.com",
  messagingSenderId: "995302233760",
  appId: "1:995302233760:web:c5677170ee3bb047d25bc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = response.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Welcome " + email.split("@")[0]);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    signOut(auth);
    toast.info("Logged Out ");
  } catch (error) {
    console.error(error);
    alert(error);
  }
};

export { auth, db, login, logout, signup };
