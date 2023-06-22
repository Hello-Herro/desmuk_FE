const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav-links');
const toTop = document.getElementById('toTop');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    // console.log("test");
});


window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

