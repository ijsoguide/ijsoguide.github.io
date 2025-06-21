
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

        let historyTitles = [];
        let testNo = 0;
        let totalTests = 150;
        getDocs(collection(db, "userData", uid, "testHistory"))
        .then((querySnapshot1)=> {
            querySnapshot1.forEach((doc) => {
                //tests.push(doc.data().title);
                let finishTime = new Date(doc.data().finishTime);
                /*let p = document.createElement('p');
                p.innerHTML = "<b>" + doc.data().title + "</b>" + ": " + doc.data().percent + "% - " + finishTime;
                console.log(doc.data().subject)
                document.getElementById('testHistory').appendChild(p);*/
                if (!historyTitles.includes(doc.data().title)){
                    testNo++;
                    historyTitles.push(doc.data().title);
                }


                /*
                <li>
          <span class="topic-title">Vectors</span>
          <div class="progress-container">
            <div class="progress-bar" style="width: 100%;"></div>
            <span class="progress-text">100%</span>
          </div>
        </li>
        */
                // Building progress bar
                let li = document.createElement('li');
                let span = document.createElement('span');
                span.classList.add('topic-title');
                span.innerHTML = doc.data().title + ", " + finishTime.toLocaleDateString();
                li.appendChild(span);
                let progressContainer = document.createElement('div');
                progressContainer.classList.add('progress-container');
                let progressBar = document.createElement('div');
                progressBar.classList.add('progress-bar');
                progressBar.style.width = doc.data().percent + "%";
                let progressText = document.createElement('span');
                progressText.classList.add('progress-text');
                progressText.innerHTML = Math.round(doc.data().percent) + "%";
                progressContainer.appendChild(progressBar);
                progressContainer.appendChild(progressText);
                li.appendChild(progressContainer);
                if(doc.data().subject == "physics") document.getElementById('testHistoryListPhysics').appendChild(li);
                else if (doc.data().subject == "chemistry") document.getElementById('testHistoryListChemistry').appendChild(li);
                else if(doc.data().subject == "biology") document.getElementById('testHistoryListBiology').appendChild(li);
            });
            document.getElementById('overallProgressBar').style.width = testNo/totalTests * 100 + "%";
            document.getElementById('overallProgressText').innerHTML = Math.round(testNo/totalTests * 100) + "%";
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
