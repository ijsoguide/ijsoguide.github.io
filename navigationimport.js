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
