const mobileMenu = document.querySelector('.mobile-menu');
const main = document.querySelector('main');
console.log(mobileMenu);
document.querySelector('#burger').addEventListener('click', event => {
    event.preventDefault();
    console.log(mobileMenu.style.display);
    console.log(event);
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        main.style.marginTop = '10rem';
    } else if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        main.style.marginTop = '3rem';
    } else {
        mobileMenu.style.display = "none";
        main.style.marginTop = '3rem';
    }
})