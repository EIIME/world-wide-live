// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd_a15C_8MdXUfavMSUkPfwOUIoOjbfdw",
    authDomain: "world-wide-live-719da.firebaseapp.com",
    projectId: "world-wide-live-719da",
    storageBucket: "world-wide-live-719da.appspot.com",
    messagingSenderId: "795582222632",
    appId: "1:795582222632:web:e5c2d3387387797aa4001d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {
    db,
    auth
}
