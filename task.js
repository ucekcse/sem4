var line = document.getElementById("navbar");
var text1 = document.getElementById("navtextone");
var text2= document.getElementById("navtexttwo");
var text3 = document.getElementById("navtextthree");
var text4 = document.getElementById("navtextfour");
var box1 = document.getElementById("contentbox1");
var daysmall = document.getElementById("daysmall");
var subsmall = document.getElementById("subsmall");
var datedetail =document.querySelectorAll(".date");
var daydetail =document.querySelectorAll(".daydetail");
var sidecontentshow = document.getElementById("sidehidden");
var change = document.getElementById("taskside");
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
line.style.left="340px";
text1.style.color="#d0d9e0d7";
text3.style.color="#8e98f7";
line.style.width="100px";

var taskmain=document.getElementById("taskmain");
var taskside=document.getElementById("taskside");
var taskcontainer=document.getElementById("taskcontainer");
function shrink(){
    taskmain.style.width="910px";
    taskmain.style.height="500px";
    taskmain.style.marginLeft="33px";
    taskside.style.display="flex";
  
    taskcontainer.style.justifyContent="space-between";
    taskmain.classList.add('taskcontentsmall');
    box1.classList.add('rowsmall');
    daysmall.style.left="20px";
    subsmall.style.top="2px"
    subsmall.style.right="3px";
    daysmall.style.bottom="2px";
   datedetail.forEach(element => {
    element.style.fontSize = '21px'; // Or set a specific font size
});
daydetail.forEach(element => {
    element.style.fontSize = '18px'; // Or set a specific font size
});

}

sidecontentshow.style.display="flex";
