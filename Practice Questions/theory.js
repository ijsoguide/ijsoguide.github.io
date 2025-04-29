let list = document.getElementById('navbarList')
let hamburger = document.getElementById("menuToggle")

hamburger.addEventListener('click', ()=>{
    list.classList.toggle('show')
})