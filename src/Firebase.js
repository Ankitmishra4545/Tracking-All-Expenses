
// import { initializeApp } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbfS8isNTFYgXYqS0sC3oQ_jbqEiXCpCQ",
    authDomain: "expense-tracker-a163d.firebaseapp.com",
    projectId: "expense-tracker-a163d",
    storageBucket: "expense-tracker-a163d.appspot.com",
    messagingSenderId: "60215897028",
    appId: "1:60215897028:web:bf9dfef48eb4f7d6195291",
};

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export default firebaseApp;
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };