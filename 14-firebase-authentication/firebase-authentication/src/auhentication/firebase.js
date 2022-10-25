// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLV0EVeNEOyFFzotzmpP_DL7GOsihU9Vs",
  authDomain: "dts2022-fbabe.firebaseapp.com",
  projectId: "dts2022-fbabe",
  storageBucket: "dts2022-fbabe.appspot.com",
  messagingSenderId: "48537766947",
  appId: "1:48537766947:web:09fac1f5bfad1b51b1f596",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth
const auth = getAuth(app);

// Fungsi untuk melakukan regisrasi dengan email dan password
const registrasiEmailDanPassword = async (email, kataSandi) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      kataSandi
    );

    // Aturan firebase authentication
    // Setealah seorang user selesai registrasi
    // Maka secar auto dia akan langsung login (Sign In)

    console.log("User yang sudah ter register ", userCredential.user);
  } catch (err) {
    console.log("CODE", err.code);
    console.log("MESSAGE", err.message);
  }
};

const signInDenganEmailDanPassword = async (email, kataSandi) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      kataSandi
    );

    console.log("User yang login ", userCredential.user);
  } catch (err) {
    console.log("CODE", err.code);
    console.log("MESSAGE", err.message);
  }
};

const keluarDariAplikasiKita = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registrasiEmailDanPassword,
  signInDenganEmailDanPassword,
  keluarDariAplikasiKita,
};
