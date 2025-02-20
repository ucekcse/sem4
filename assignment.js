const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (hamMenu.classList.contains('active')) {
        shownav();
    } else {
        closenav();
    }
});

function openPopup(assignment) {
    let title = document.getElementById("popup-title");
    let desc = document.getElementById("popup-desc");
    let deadline = document.getElementById("popup-deadline");


    if (assignment === "oop") {
        title.innerText = "OOP’s";
        desc.innerText = "Detailed explanation about Object-Oriented Programming assignment.";
        deadline.innerText = "23.09.2005";
    } else if (assignment === "DPCO") {
        title.innerText = "DPCO";
        desc.innerText = "Detailed explanation about Digital Principle computer organization assignment.";
        deadline.innerText = "16.10.2024";
    }else if (assignment === "DM") {
        title.innerText = "DISCRETE MATHEMATICS";
        desc.innerText = "Detailed explanation about discrete mathematics assignment.";
        deadline.innerText = "16.10.2024";
    }else if (assignment === "DS") {
        title.innerText = "DATA STRUCTURES";
        desc.innerText = "Detailed explanation about DATA STRUCTURES assignment.";
        deadline.innerText = "16.10.2024";
    }else if(assignment === "FDS") {
        title.innerText = "FOUNDATION OF DATA SCIENCE";
        desc.innerText = "Detailed explanation about FOUNDATION OF DATA SCIENCE assignment.";
        deadline.innerText = "16.10.2024";
    }else if(assignment === "DSI") {
        title.innerText = "FOUNDATION OF DATA SCIENCE";
        desc.innerText = "Detailed explanation about FOUNDATION OF DATA SCIENCE assignment.";
        deadline.innerText = "16.10.2024";
    }else if(assignment === "DSI") {
        title.innerText = "FOUNDATION OF DATA SCIENCE";
        desc.innerText = "Detailed explanation about FOUNDATION OF DATA SCIENCE assignment.";
        deadline.innerText = "16.10.2024";
    }


    document.getElementById("popup").style.bottom = "0";
    const popup = document.getElementById("popup");
    popup.classList.remove("hide");
    popup.classList.add("show");
}

function closePopup() {
    document.getElementById("popup").style.bottom = "-100%";
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    popup.classList.add("hide");
}
var line = document.getElementById("navbar");
var text1 = document.getElementById("navtextone");
var text2= document.getElementById("navtexttwo");
var text3 = document.getElementById("navtextthree");
var text4 = document.getElementById("navtextfour");
var line = document.getElementById("navbar");
line.style.width="190px"
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

text2.style.color="#d0d9e0d7";
text3.style.color="#d0d9e0d7";
}

line.style.width="190px";
text2.style.color="#8e98f7";
text1.style.color="#d0d9e0d7";
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

function resetNavBarStyles() {
const menubar = document.getElementById("menubar");
const closeicon = document.getElementById("closeicon");
const mobilenav = document.getElementById("mobilenavwhole");

if (window.innerWidth < 900) {

menubar.style.display="flex"
 closeicon.style.display = "none";
 mobilenav.style.display = "none";
} else {
menubar.style.display="none";
closeicon.style.display = "none";
mobilenav.style.display = "none";
}
}

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