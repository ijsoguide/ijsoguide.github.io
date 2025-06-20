import {app} from '/centralAuthenticationSystem.js';
import {auth} from '/centralAuthenticationSystem.js';
import {db} from '/centralAuthenticationSystem.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged , signInWithEmailAndPassword ,signOut} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";


let passwordField = document.getElementById('password');
let emailField = document.getElementById('email');

if (window.location.href.split('redirect=')[1]) document.getElementById('signUpRedirectionLink').href = "/Account/sign-up.html?redirect=" + window.location.href.split('redirect=')[1];

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

