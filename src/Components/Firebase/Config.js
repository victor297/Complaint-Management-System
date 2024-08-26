import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { getAuth } from "firebase/auth";
const firebaseConfig = {
   apiKey: "AIzaSyDHyHnKHRFGrJ-gTy45vDATmOpg_9RjteI",
  authDomain: "compliant-7a165.firebaseapp.com",
  projectId: "compliant-7a165",
  storageBucket: "compliant-7a165.appspot.com",
  messagingSenderId: "769768032732",
  appId: "1:769768032732:web:8ec97ca6268bd680e2e719",
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(); 
const firestoreDb = getFirestore(firebaseApp)

export { firebaseApp, auth, firestoreDb };
