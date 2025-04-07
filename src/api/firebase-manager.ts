// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = import.meta.env.API_KEY;
const authDomain = import.meta.env.AUTH_DOMAIN;
const projectId = import.meta.env.PROJECT_ID;
const storageBucket = import.meta.env.STORAGE_BUCKET;
const messagingSenderId = import.meta.env.MESSAGING_SENDER_ID;
const appId = import.meta.env.APP_ID;
const measurementId = import.meta.env.MEASUREMENT_ID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db
}
