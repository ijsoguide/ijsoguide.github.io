// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged , signInWithEmailAndPassword ,signOut} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnD5jNRG11OTwOvLdvY1uygp3y-FvMlGE",
  authDomain: "ijso-guide.firebaseapp.com",
  projectId: "ijso-guide",
  storageBucket: "ijso-guide.firebasestorage.app",
  messagingSenderId: "595459458285",
  appId: "1:595459458285:web:c13433c81acb943acf38e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let passwordField = document.getElementById('password');
let emailField = document.getElementById('email');

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid)
      window.location.href = "settings.html"
      document.getElementById('signoutButton').style.display = "block";
      // ...
    } else {
      // User is signed out
      // ...
      console.log('signed out')
    }
  });

document.getElementById('signinButton').addEventListener('click', (e)=>{
    e.preventDefault();
    let email = emailField.value;
    let password = passwordField.value;
    console.log(email)
    console.log(password)
    //if (signInDetailsValid(email, password)){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .then(()=>{
          let redirect = window.location.href.split('redirect=')[1];
          console.log(redirect)
          if (redirect != null){
            window.location.href = redirect;
          } /*else{
            window.location.href = "settings.html"
          }*/
          
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            if (errorCode == "auth/invalid-credential"){
                alert('Incorrect username or password. Please try again.')
            }
        });

    //}
})

function signInDetailsValid(email, password){
    return true;
}

