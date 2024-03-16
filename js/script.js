





let res = setInterval(() => {
     document.querySelector('h2').textContent = new Date().toLocaleTimeString();
     document.querySelector('h3').textContent = new Date().toLocaleDateString();
}, 1000)



if (res >= 1 && res < 6) {
    document.body.style.backgroundImage = "url('https://picsum.photos/200/300')";
} else if (res > 6 && res < 12) {
    document.body.style.backgroundImage = "url('https://picsum.photos/200/300')";
} 



