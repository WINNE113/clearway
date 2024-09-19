// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRE5nI_Bp8MhufBLTnWJ5A-jrjQqGKaWU",
  authDomain: "clearway-4c9f1.firebaseapp.com",
  projectId: "clearway-4c9f1",
  storageBucket: "clearway-4c9f1.appspot.com",
  messagingSenderId: "1046984413939",
  appId: "1:1046984413939:web:2f54bd8cfe8855a4b29d86",
  measurementId: "G-VF260MYC9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider }