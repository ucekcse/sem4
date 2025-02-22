const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (hamMenu.classList.contains('active')) {
        shownav();
        document.getElementById("mobile-view").style.display="none";
        document.getElementById("popup").style.display="none";
        document.getElementById("footer").style.display="none";
    } else {
        closenav();
        document.getElementById("mobile-view").style.display="flex";
        document.getElementById("popup").style.display="none";
        document.getElementById("footer").style.display="flex";
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


;
 mobilenav.style.display = "none";
} else {
;
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
;
}
function shownav(){

    mobilenav.style.display = "flex";
    setTimeout(() => {
        mobilenav.style.opacity = "1";
    }, 10);
    mobilenav.style.display="flex";
    mobilenav.style.transition="0.5s";
    document.getElementById("hilogo").style.display="none";
  
}

window.addEventListener("resize", resetNavBarStyles);
resetNavBarStyles();



function expandonepop(){
    if( document.getElementById("allsubsidehidepopone").style.display==="none"){
        document.getElementById("arrowone").style.transform = "rotate(0deg)";

    document.getElementById("allsubsidehidepopone").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
   document.getElementById("allsubone").style.borderBottom="0px solid #9F9FD6";

    document.getElementById("allsubtwo").style.borderBottom="5px solid #9F9FD6";
    }
    else{
        document.getElementById("allsubsidehidepopone").style.display="none";
        document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";

    }
  }
  function popdown(){
    document.getElementById("popup").style.display="none";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
  }

  function mondaypopup(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
    document.getElementById("popup").style.height="800px";
    document.getElementById("taskdayinner").innerText="MONDAY";

    

  }