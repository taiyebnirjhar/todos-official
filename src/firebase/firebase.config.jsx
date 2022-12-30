// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1d-jgDcm6jT67el3LPfiTnkXK59Yec7g",
  authDomain: "todos-official.firebaseapp.com",
  projectId: "todos-official",
  storageBucket: "todos-official.appspot.com",
  messagingSenderId: "174558182480",
  appId: "1:174558182480:web:1a7275d3a3f8841866a555",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
