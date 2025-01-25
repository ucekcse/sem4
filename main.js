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
/*const mediaQuery = window.matchMedia('(max-width:600px)')
if (mediaQuery.matches) {
  document.getElementById("ghost").style.display="flex";
  document.getElementById("cont").style.borderBottomRightRadius="0px"
 
}*/