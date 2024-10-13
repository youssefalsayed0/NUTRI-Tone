// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPmPxURs34fzuwMS82774Qo3rpCfkFXG8",
  authDomain: "nitri-tone.firebaseapp.com",
  projectId: "nitri-tone",
  storageBucket: "nitri-tone.appspot.com",
  messagingSenderId: "144104382252",
  appId: "1:144104382252:web:5f585a30a32c8b4d611689"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
