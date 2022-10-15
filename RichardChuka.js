window.addEventListener('DOMContentLoaded', event => {

let btnn = document.querySelector(".btnn");
let cancelBtn = document.querySelector(".cancel-btn");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents="none";
    navbar.classList.add("active");
}

cancelBtn.onclick = function() {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents="auto";
    navbar.classList.add("active");
}

let Val;
let nav = document.querySelector("navbar");
window.onscroll = function() {
    if(document.documentElement.scrolltop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}

});

