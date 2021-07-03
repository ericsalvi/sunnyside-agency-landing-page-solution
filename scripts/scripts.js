const header = document.querySelector('header');
const menuWrapper = document.querySelector('.menu-wrapper');
const menuIcon = document.querySelector('.hamburger-menu');

menuWrapper.addEventListener('click', ()=>{
    header.classList.toggle('opened');
    menuIcon.classList.toggle('animate');
})