// ? Handle Navbar Menu In Mobile Screens
const navBtn = document.querySelector('.toggle-btn')
const nav = document.querySelector('.navbar')
const links = document.querySelectorAll('.navbar li a');
window.addEventListener('click', () => {
    nav.classList.toggle('open')
})

// ? Handle Links Click (coloring Links)
links.forEach((a) => {
    a.addEventListener('click', e => {
        links.forEach(a=>a.classList.remove('text-primary','bold'))
        e.target.classList.add('text-primary','bold')
    });
})

// ? Setting Current Year
document.getElementById('year').innerHTML = new Date().getFullYear()



// ? Initialize Animation Library
// AOS.init()
