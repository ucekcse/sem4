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

text1.style.color="#d0d9e0d7";
text3.style.color="#8e98f7";
line.style.width="100px";
line.style.left="340px";

var taskmain=document.getElementById("taskmain");
var taskside=document.getElementById("taskside");
var taskcontainer=document.getElementById("taskcontainer");
function shrink(){
    taskmain.style.width="910px";
    taskmain.style.height="500px";
    taskmain.style.marginLeft="33px";
    taskside.style.display="flex";
    document.getElementById("sidehidden").style.display="flex";
  
    taskcontainer.style.justifyContent="space-between";
    taskmain.classList.add('taskcontentsmall');
    box1.classList.add('rowsmall');
    daysmall.style.left="20px";
    subsmall.style.top="2px"
    subsmall.style.right="3px";
    daysmall.style.bottom="2px";
   datedetail.forEach(element => {
    element.style.fontSize = '21px'; // Or set a specific font size
    document.getElementById("allsubside").style.display="none";
});
daydetail.forEach(element => {
    element.style.fontSize = '18px'; // Or set a specific font size
});
   document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px"
}



function resetNavBarStyles() {
    const menubar = document.getElementById("menubar");
    const closeicon = document.getElementById("closeicon");
    const mobilenav = document.getElementById("mobilenavwhole");

    if (window.innerWidth < 900) {
        
         // Mobile view
       menubar.style.display="flex"
         closeicon.style.display = "none";
         mobilenav.style.display = "none";
    } else {
// Desktop view
menubar.style.display="none";
closeicon.style.display = "none";
mobilenav.style.display = "none";
    }
}
var mobilenav=document.getElementById("mobilenavwhole");
function closenav(){
   
    mobilenav.style.display="none";
    document.getElementById("hilogo").style.display="flex";
    document.getElementById("menubar").style.display="flex";
    document.getElementById("closeicon").style.display="none";
    document.getElementById("taskcontainer").style.display="flex";
    document.getElementById("footer").style.display="flex";
}
function shownav(){
   
    mobilenav.style.display="flex";
    document.getElementById("hilogo").style.display="none";
    document.getElementById("menubar").style.display="none";
    document.getElementById("closeicon").style.display="flex";
    document.getElementById("taskcontainer").style.display="none";
    document.getElementById("footer").style.display="none";
}
// Add event listener to handle resizing
window.addEventListener("resize", resetNavBarStyles);

// Initial call to set correct styles on page load
resetNavBarStyles();


function expandone(){
    document.getElementById("allsubsidehide").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
   document.getElementById("allsubone").style.border="0px";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
    document.getElementById("arrow").style.transform = "rotate(0deg)";
    document.getElementById("arrowtwo").style.transform = "rotate(-90deg)";
    document.getElementById("allsubtwo").style.borderBottom="5px solid #9F9FD6";

    

}
function expandtwo(){
    document.getElementById("allsubsidehide").style.display="none";
    document.getElementById("allsubsidehidetwo").style.display="flex";
    document.getElementById("allsubsidehidetwo").style.flexDirection = "column";
   document.getElementById("allsubtwo").style.border="0px";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
    document.getElementById("arrowtwo").style.transform = "rotate(0deg)";
    document.getElementById("arrow").style.transform = "rotate(-90deg)";
}

function showallsubcontent(){
    document.getElementById("sidehidden").style.display="none";
    taskmain.style.width="910px";
    taskmain.style.height="500px";
    taskmain.style.marginLeft="33px";
    taskside.style.display="flex";
    taskmain.classList.add('taskcontentsmall');
    box1.classList.add('rowsmall');
    daysmall.style.left="20px";
    subsmall.style.top="2px"
    subsmall.style.right="3px";
    daysmall.style.bottom="2px";

  
    taskcontainer.style.justifyContent="space-between";
    
    document.getElementById("allsubside").style.display="flex";
    document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px";
    
    
}