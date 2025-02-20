const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (hamMenu.classList.contains('active')) {
        shownav();
    } else {
        closenav();
    }
});




var line = document.getElementById("navbar");
var text1 = document.getElementById("navtextone");
var text2= document.getElementById("navtexttwo");
var text3 = document.getElementById("navtextthree");
var text4 = document.getElementById("navtextfour");
function homeline(){
    line.style.width="100px";
    line.style.left="0px";
    text1.style.color="#8e98f7";
     text2.style.color="#d0d9e0d7";
    text3.style.color="#d0d9e0d7"; 
    text4.style.color="#d0d9e0d7";
}
 
function assignline(){
    var line = document.getElementById("navbar");
    line.style.width="190px";
    line.style.left="125px";
    text2.style.color="#8e98f7";
    text1.style.color="#d0d9e0d7";
    text3.style.color="#d0d9e0d7";
    text4.style.color="#d0d9e0d7";
}

function taskline(){
    var line = document.getElementById("navbar");
    line.style.width="100px";
    line.style.left="340px";
    text3.style.color="#8e98f7";
    text1.style.color="#d0d9e0d7";
    text2.style.color="#d0d9e0d7";
    text4.style.color="#d0d9e0d7";
}

function aboutline(){
    var line = document.getElementById("navbar");
    line.style.width="100px";
    line.style.left="470px";
    text4.style.color="#8e98f7";
    text1.style.color="#d0d9e0d7";
    text2.style.color="#d0d9e0d7";
    text3.style.color="#d0d9e0d7";
}

line.style.width="100px";
line.style.left="0px";

var mobilenav=document.getElementById("mobilenavwhole");

function closenav(){

    mobilenav.style.opacity = "0";
    setTimeout(() => {
        mobilenav.style.display = "none";
    }, 500);
    document.getElementById("hilogo").style.display="flex";
    document.getElementById("menubar").style.display="flex";
    document.getElementById("closeicon").style.display="none";
    document.getElementById("mobile-view").style.display="grid";
    document.getElementById("footer").style.display="flex";
}
function shownav(){

    mobilenav.style.display = "flex";
    setTimeout(() => {
        mobilenav.style.opacity = "1";
    }, 10);
    mobilenav.style.display="flex";
    mobilenav.style.transition="0.5s";
    document.getElementById("hilogo").style.display="none";
    document.getElementById("menubar").style.display="none";
    document.getElementById("closeicon").style.display="flex";
    document.getElementById("mobile-view").style.display="none";
    document.getElementById("footer").style.display="none";
}

window.addEventListener("resize", resetNavBarStyles);
resetNavBarStyles();