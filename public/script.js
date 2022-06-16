'use strict';
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');
const menuitem = document.querySelectorAll(".menuitem");

const main = document.querySelector('main');
document.querySelector('#burger').addEventListener('click', event => {
    // event.preventDefault();
    console.log(document.querySelector('.mobile-menu').style.display);
    console.log(event);
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        nav.style.height = "13rem";
        main.style.marginTop = '10rem';
    } else if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        nav.style.height = "4rem";
        main.style.marginTop = '3rem';
    } else if (mobileMenu.style.display === "") {
        mobileMenu.style.display = "flex";
        nav.style.height = "13rem";
        main.style.marginTop = '10rem';
    }
})

menuitem.forEach(a => {
    a.addEventListener('click', () => {
        console.log("clicked menu item")
        mobileMenu.style.display = "none";
    }
)}
);


console.log("screen height: "+window.screen.height);
console.log("screen width: "+window.screen.width);