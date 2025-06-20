import {app} from '/centralAuthenticationSystem.js';
import {auth} from '/centralAuthenticationSystem.js';
import {db} from '/centralAuthenticationSystem.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore,  doc, setDoc , getDoc , getDocs, collection, query, deleteDoc} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"

let nameField = document.getElementById('firstName');
let surnameField = document.getElementById('lastName');
let countryField = document.getElementById('country');
let emailField = document.getElementById('email');
let passwordField = document.getElementById('password');
let gradeField = document.getElementById('grade');

let uid;

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      uid = user.uid;
      console.log(uid)
      let userName;
      getDoc(doc(db, "users", uid))
      .then((data)=> {
          if(data.exists()){
              userName = data.data().name;
              document.getElementById('alreadyLoggedInMessage').innerHTML = "It seems like you are already signed in as " + userName + ". You can see your account settings " + "<a href=" + "./settings.html" + ">here</a>";
          }
      })
      .catch(error => {
          console.log("Error getting document:", error);
      });
      //window.location.href = "settings.html"
      // ...
    } else {
      // User is signed out
      // ...
      console.log('signed out')
    }
  });

document.getElementById('signupButton').addEventListener('click', (e)=>{
    e.preventDefault();
    let name = nameField.value;
    let surname = surnameField.value;
    let country = countryField.value;
    let email = emailField.value;
    let password = passwordField.value;
    let grade = gradeField.value;
    console.log(email)
    console.log(password)
    //if (signUpDetailsValid(name, surname, email, password, grade, country)){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log('success?')
            console.log(user)
            
            const docRef = doc(db, "users", uid);
            const data = {
                name: name,
                surname: surname,
                country: country,
                grade: grade,
                email: email,
                password: password,
            }
            setDoc(docRef, data)
            .then(()=>{
              setDoc(doc(db, "userData", uid), {
                tests: 0
              }).then(()=>{
                let redirect = window.location.href.split('redirect=')[1];
                console.log(redirect)
                if (redirect != null){
                  window.location.href = redirect;
                } else{
                  window.location.href = "settings.html"
                }
                
              })
            })
            

            console.log('database data written')
            // ...
        })
        
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
        });
    //}
})

function signUpDetailsValid(name, surname, email, password, grade, country){
    return true;
}

