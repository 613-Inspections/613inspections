// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCtjyHZdLBeasmRN1hT8SVaBdnvOwf1EE",
  authDomain: "inspections-d902c.firebaseapp.com",
  projectId: "inspections-d902c",
  storageBucket: "inspections-d902c.appspot.com",
  messagingSenderId: "1026393260306",
  appId: "1:1026393260306:web:12a77a9767bb63bacef3cb",
  measurementId: "G-QKS7BBTKXR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
