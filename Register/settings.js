// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
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
        
        getDoc(doc(db, "users", uid))
        .then((data)=> {
            if(data.exists()){
                let d = data.data()
                console.log(d)
                document.getElementById('data').innerHTML = d.name + " " + d.surname + " " + d.country + " " + d.grade + " " + d.email + " " + d.password; 
            }
        })
        .catch(error => {
            console.log("Error getting document:", error);
        });

        /*getDoc(doc(db, "userData", uid))
        .then((data)=> {
            if(data.exists()){
                document.getElementById('additionalData').innerHTML = data.data().tests;
            }
        })
        .catch(error => {
            console.log("Error getting document:", error);
        });*/

        getDocs(collection(db, "userData", uid, "testHistory"))
        .then((querySnapshot1)=> {
            querySnapshot1.forEach((doc) => {
                //tests.push(doc.data().title);
                let finishTime = new Date(doc.data().finishTime);
                let p = document.createElement('p');
                p.innerHTML = "<b>" + doc.data().title + "</b>" + ": " + doc.data().percent + "% - " + finishTime;
                document.getElementById('testHistory').appendChild(p);
            });
            /*tests.forEach((e)=>{
                

                b2.addEventListener('click', ()=>{
                    if (elementCounter.courts > 1){
                        deleteDoc(doc(db, uid, 'defaultCentre','courts', e))
                        .then(() => {
                            console.log("Document deleted successfully!");
                            elementCounter.courts--;
                            loadCourts();
                            
                        })
                        .catch((error) => {
                            console.error("Error deleting document: ", error);
                        });
                    }
                    else alert('There has to be at least one court!');
                    
                })
            })*/
        })
        .catch(error => {
            console.log("Error getting document:", error);
        });
        // ...
    } else {
        // User is signed out
        // ...
        window.location.href = "sign-in.html"
        console.log('signed out')
    }
  });

  document.getElementById('signoutButton').addEventListener('click', (e)=>{
    e.preventDefault();
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
      
})
