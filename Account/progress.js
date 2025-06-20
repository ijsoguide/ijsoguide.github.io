import {app} from '/centralAuthenticationSystem.js';
import {auth} from '/centralAuthenticationSystem.js';
import {db} from '/centralAuthenticationSystem.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore,  doc, setDoc , getDoc , getDocs, collection, query, deleteDoc} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"

let uid;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        uid = user.uid;
        console.log(uid)

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
