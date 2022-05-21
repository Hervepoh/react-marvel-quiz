
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut } from "firebase/auth";

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyDrLO62HXMdKqArjvP9ZZFyGPkah2znB0w",
  authDomain: "marvel-quiz-rv.firebaseapp.com",
  projectId: "marvel-quiz-rv",
  storageBucket: "marvel-quiz-rv.appspot.com",
  messagingSenderId: "399876726701",
  appId: "1:399876726701:web:5626c7b01de26c53400b24"
};


class Firebase {
    
    constructor(){
      // Initialize Firebase
      this.app = initializeApp(firebaseConfig);  
      this.auth = getAuth();  
    }
    
    //inscription
    signupUser = (email,password) =>{
      createUserWithEmailAndPassword(this.auth,email, password);
    }

    //connexion
    loginUser = (email,password) =>{
      signInWithEmailAndPassword(this.auth,email, password)
      .then((userCredential) => {
        // Signed in
        // eslint-disable-next-line
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // eslint-disable-next-line
        var errorCode = error.code;
        // eslint-disable-next-line
        var errorMessage = error.message;
      });
    }
  
    //Déconnexion
    signOut = () => {
      signOut(this.auth)
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
}



export default Firebase;