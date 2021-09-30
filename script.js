const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const img=document.querySelector(".cross")

hamburgerButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    console.log(navbarLinks.classList.toggle('active'));
    if(navbarLinks.classList.toggle('active')){
    img.src="./images/icon-close.svg";}
    else{
    img.src="./images/icon-hamburger.svg";

    }
})