//document.getElementById('mainContent').style.display = "none";

var loader = document.getElementById("preload")
window.addEventListener("load", function(){
    loader.style.display = "none";
    document.getElementById('mainContent').style.display = "block";
})
