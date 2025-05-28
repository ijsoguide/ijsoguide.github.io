fetch('/navigation.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('nav').innerHTML = data;
});

if (!(document.head.innerHTML.includes("mobilenavigation.css"))){
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = "/mobilenavigation.css";
    
    document.head.appendChild(link1);
}

if (!(document.head.innerHTML.includes("mobilenavigation.js"))){
    const link2 = document.createElement('script');
    link2.src = "/mobilenavigation.js"
    link2.defer = true;

    document.head.appendChild(link2)
}