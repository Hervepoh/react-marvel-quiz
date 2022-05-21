//TODO: read firebase doc on https://firebase.google.com/docs/auth/web/start?hl=fr&authuser=0
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged  } from "firebase/auth";

// Your web app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrLO62HXMdKqArjvP9ZZFyGPkah2znB0w",
  authDomain: "marvel-quiz-rv.firebaseapp.com",
  projectId: "marvel-quiz-rv",
  storageBucket: "marvel-quiz-rv.appspot.com",
  messagingSenderId: "399876726701",
  appId: "1:399876726701:web:5626c7b01de26c53400b24"
};


// Firebase class
class Firebase {
    
    constructor(){
      // Initialize Firebase Authentication and get a reference to the service
      this.app = initializeApp(firebaseConfig);
      this.auth =  getAuth(this.app);   
    }
    
    //inscription (sign up)
    signupUser = (email,password) => createUserWithEmailAndPassword(this.auth,email, password);
 

    //login with email and password
    loginUser = (email,password) => signInWithEmailAndPassword(this.auth,email, password);

  
    //Check Authentification State 
    onAuthStateChanged = (user) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }

    //Log out
    signOut = () => signOut(this.auth)
    
      
}



export default Firebase;