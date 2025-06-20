import {app} from '/centralAuthenticationSystem.js';
import {auth} from '/centralAuthenticationSystem.js';
import {db} from '/centralAuthenticationSystem.js';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore,  doc, setDoc , getDoc , getDocs, collection, query, deleteDoc} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"


let uid;

/* Account system initialization */


fetch('/navigation.html')
  .then(response => response.text())
  .then(data => {
      if(!document.body.innerHTML.includes("<nav>")){
          let n = document.createElement('nav')
          //document.querySelector('nav').innerHTML = data;
          n.innerHTML = data;
          document.body.insertBefore(n, document.body.firstChild)
      }
      


    let menuToggle = document.getElementById('menuToggle')
    menuToggle.addEventListener('click', ()=>{
      document.getElementById('menu').classList.toggle('active')
      if (menuToggle.classList.contains('fa-bars')){
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-xmark')
      } else{
        menuToggle.classList.add('fa-bars');
        menuToggle.classList.remove('fa-xmark')
      }
    }) 

    const menuItems = document.querySelectorAll('#menu li');

    // Loop through the list and add an event listener to each
    menuItems.forEach((item)=>{
      item.addEventListener('click', ()=>{
        menuToggle.click();
      })
    });
  })
  .then(() => {
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
                //document.getElementById('alreadyLoggedInMessage').innerHTML = "It seems like you are already signed in as " + userName + ". You can see your account settings " + "<a href=" + "./settings.html" + ">here</a>";
                document.getElementById('navigationAccountSystemLink').innerHTML = "Account";
                document.getElementById('navigationAccountSystemLink').href = "/Account/settings.html";
              }
          })
          .catch(error => {
              console.log("Error getting document:", error);
          });
        } else {
          console.log('signed out')
        }
      });
  });

if (!(document.head.innerHTML.includes("mobilenavigation.css"))){
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = "/mobilenavigation.css";
    
    document.head.appendChild(link1);
}

/*Connecting the navbar font*/
if (!(document.head.innerHTML.includes("https://fonts.googleapis.com"))){
  const link3 = document.createElement('link');
  link3.rel = 'preconnect';
  link3.href = "https://fonts.googleapis.com";
  
  document.head.appendChild(link3);
}
if (!(document.head.innerHTML.includes("https://fonts.gstatic.com"))){
  const link4 = document.createElement('link');
  link4.rel = 'preconnect';
  link4.href = "https://fonts.gstatic.com";
  link4.crossOrigin = true;
  
  document.head.appendChild(link4);
}
if (!(document.head.innerHTML.includes("https://fonts.googleapis.com/css2?family=Montserrat&display=swap"))){
  const link5 = document.createElement('link');
  link5.rel = 'stylesheet';
  link5.href = "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";
  
  document.head.appendChild(link5);
}


//Connecting font awesome
if (!(document.head.innerHTML.includes("https://kit.fontawesome.com/04bf603a0f.js"))){
  const link2 = document.createElement('script');
  link2.src = "https://kit.fontawesome.com/04bf603a0f.js";
  link2.crossOrigin = "anonymous";
  
  document.head.appendChild(link2);
}


//Connecting account system script
/*if (!(document.head.innerHTML.includes("accountSystem.js"))){
  const link6 = document.createElement('script');
  link6.src = "/accountSystem.js";
  link6.type = "module";
  
  document.head.appendChild(link6);
}*/
