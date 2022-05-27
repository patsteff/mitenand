'use strict';
const mobileMenu = document.querySelector('.mobile-menu');
// console.log(mobileMenu.style.display);
const main = document.querySelector('main');
document.querySelector('#burger').addEventListener('click', event => {
    // event.preventDefault();
    console.log(document.querySelector('.mobile-menu').style.display);
    console.log(event);
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        main.style.marginTop = '10rem';
    } else if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        main.style.marginTop = '3rem';
    } else if (mobileMenu.style.display === "") {
        mobileMenu.style.display = "flex";
        main.style.marginTop = '10rem';
    }
})