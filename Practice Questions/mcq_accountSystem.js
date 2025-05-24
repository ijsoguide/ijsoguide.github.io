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

let uid;

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      uid = user.uid;
      console.log(uid)
      //window.location.href = "settings.html"
      // ...
      window.addEventListener('testCompleted', (e)=>{
        const { score, testTitle, time, subject} = e.detail;
        console.log('transfered data: ')
        console.log(score);
        console.log(testTitle)
        console.log(time)
        let docTitle = "test_" + time;
        setDoc(doc(db, "userData", uid, "testHistory", docTitle), {
            finishTime: time,
            percent: score,
            title: testTitle,
            subject: subject
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
        })

        /*setDoc(doc(db, "userData", uid, "testHistory", ), {
            tests: 1
        })*/
      }, {once: true})
    } else {
      // User is signed out
      // ...
      window.location.href = "../../../Register/sign-in.html?redirect=" + window.location.href
    }
  });