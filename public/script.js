'use strict';
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const menuItem = document.querySelectorAll('.mobile-menu-item');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    
})

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        console.log("clicked menu item")
        mobileMenu.classList.toggle('is-active');
        hamburger.classList.toggle('is-active');
})
});


console.log("screen height: "+window.screen.height);
console.log("screen width: "+window.screen.width);