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