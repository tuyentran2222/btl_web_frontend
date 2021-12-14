let previous = document.getElementById('previous');
let next = document.getElementById('next');
let div = document.getElementsByClassName('carousel-item');
console.log(div);
let l = 0;
let mob_view = window.matchMedia("(max-width: 768px)");
console.log(mob_view.matches);
let screen_width =window.innerWidth;

next.onclick = () => {
    let screen_width =window.innerWidth;
    console.log(screen_width)
    console.log(l);
    l++;
    for (let i of div) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-610px";}
        if (l==2) {i.style.left = "-1230px";}
        if (l==3) {i.style.left = "-1850px";}
        if (l==4) {i.style.left = "-2480px";}
        // if (l==5) {i.style.left = "-3100px";}
        if (l>4) l=4;
    }

}
previous.onclick = () => {
    l--;
    for (let i of div) {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-610px";}
        if (l==2) {i.style.left = "-1230px";}
        if (l==3) {i.style.left = "-1850px";}
        if (l==4) {i.style.left = "-2480px";}
        // if (l==5) {i.style.left = "-3100px";}
        if (l<0) l=0;
    }

}
