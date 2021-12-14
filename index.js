"use strict"
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let div = document.getElementsByClassName('carousel-item');
console.log(div);
let l = 0;
let mob_view = window.matchMedia("(max-width: 768px)");
console.log(mob_view.matches);
	
next.onclick = () => {
    
    let style_left = 310;
    if (window.innerWidth <= 767) style_left = 270;
    let lmax = 2480 / style_left;
    l++;
    for (let i of div) {
        if (l <= 11) i.style.left = (-1)*l*style_left +"px";
        else l=11;
    }

}
previous.onclick = () => {
    let style_left = 310;
    if (window.innerWidth <= 767) style_left = 270;
    let lmax = 2480 / style_left;
    l--;
    for (let i of div) {
        if (l>=0) i.style.left = (-1)*l*style_left +"px";
        else l=0;
    }

}
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const openFAQ = (event) => {
    let buttonNode = (event.path)[1];
    if ((event.path)[1].tagName === 'LI') buttonNode = (event.path)[0];
    let liNode = buttonNode.parentNode;
    let detailNode = buttonNode.nextElementSibling;
    let icon = buttonNode.firstChild;
    if (detailNode.getAttribute('hidden') == 'true') {
        detailNode.setAttribute('hidden', false);
        icon.style.transform = 'rotate(90deg)';
    }
    else {
        detailNode.setAttribute("hidden", true);
        icon.style.transform = 'rotate(0deg)';
    }
}