// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc, getDoc, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1j27Nq4nM-T9-GfcOrkRgIdX3zxTtF2U",
  authDomain: "adopt-app-90655.firebaseapp.com",
  projectId: "adopt-app-90655",
  storageBucket: "adopt-app-90655.appspot.com",
  messagingSenderId: "854728212289",
  appId: "1:854728212289:web:4655cfd92e7db157572bc0",
  measurementId: "G-HCGTNJWSX9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
      // ...
    });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const docRef = doc(db, "users", userAuth.uid);
  const docSnap = await getDoc(docRef);
  console.log("docSnap: ", docSnap);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      const docRef = await setDoc(doc(db, "users", uid), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return docRef;
};
