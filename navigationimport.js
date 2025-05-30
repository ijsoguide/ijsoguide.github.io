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
if (!(document.head.innerHTML.includes("https://kit.fontawesome.com/04bf603a0f.js"))){
  const link2 = document.createElement('script');
  link2.src = "https://kit.fontawesome.com/04bf603a0f.js";
  link2.crossOrigin = "anonymous";
  
  document.head.appendChild(link2);
}
