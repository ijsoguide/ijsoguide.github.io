// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore,  doc, setDoc , getDoc , getDocs, collection, query, deleteDoc} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"

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
const db = getFirestore(app);

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
                window.location.href = "settings.html"
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

