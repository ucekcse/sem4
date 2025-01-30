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
    document.getElementById("content").style.display="flex";
    document.getElementById("footer").style.display="flex";
}
function shownav(){
   
    mobilenav.style.display="flex";
    document.getElementById("hilogo").style.display="none";
    document.getElementById("menubar").style.display="none";
    document.getElementById("closeicon").style.display="flex";
    document.getElementById("content").style.display="none";
    document.getElementById("footer").style.display="none";
}
// Add event listener to handle resizing
window.addEventListener("resize", resetNavBarStyles);

// Initial call to set correct styles on page load
resetNavBarStyles();

var boxone = document.getElementById("boxone");
var boxtwo = document.getElementById("boxtwo");
var boxthree = document.getElementById("boxthree");


function bigboxone(){
    boxone.style.width="780px";
   boxone.style.transition="0.4s all ease-in-out";  
   boxtwo.style.width="194px";
   boxtwo.style.transition="0.4s all ease-in-out";
   boxthree.style.width="194px";
   boxthree.style.transition="0.4s all ease-in-out";  
   document.getElementById("boxtwo").style.backgroundSize="cover";
   document.getElementById("cover").style.transform = "rotate(270deg)";
   document.getElementById("unitrowone").style.display = "none";  
   document.getElementById("unitrowtwo").style.display = "none";  
   document.getElementById("unitrowthree").style.display = "none";  
   document.getElementById("wingcontentsub").style.display = "none"; 
   document.getElementById("boxtwo").style.backgroundImage="url(sd_mat_bg_test.jpg)";
   document.getElementById("cover").style.display="flex"; 
   document.getElementById("boxtwo").style.border="0px";
   document.getElementById("boxone").style.backgroundColor="#DEF8FE";
   document.getElementById("boxone").style.border ="4px dashed #5ADCF9";
   document.getElementById("boxone").style.backgroundImage="none";
   document.getElementById("coverone").style.display="none";
   document.getElementById("unitrowoneone").style.display = "flex";  
   document.getElementById("unitrowtwoone").style.display = "flex";  
   document.getElementById("unitrowthreeone").style.display = "flex";  
   document.getElementById("wingcontentsubone").style.display = "flex"; 
   document.getElementById("boxthree").style.backgroundSize="cover";
   document.getElementById("coverthree").style.transform = "rotate(270deg)";
   document.getElementById("unitrowonethree").style.display = "none";  
   document.getElementById("unitrowtwothree").style.display = "none";  
   document.getElementById("unitrowthreethree").style.display = "none";  
   document.getElementById("wingcontentsubthree").style.display = "none"; 
   document.getElementById("boxthree").style.backgroundImage="url(pyq_bg_test.jpg)";
   document.getElementById("coverthree").style.display="flex"; 
   document.getElementById("boxthree").style.border="0px";
   document.getElementById("cover").style.fontSize="36px";
   document.getElementById("coverthree").style.fontSize="36px";

}
function bigboxtwo(){
    boxtwo.style.width="780px";
   boxtwo.style.transition="0.4s all ease-in-out";  
   boxone.style.width="194px";
   boxone.style.transition="0.4s all ease-in-out";
   boxthree.style.width="194px"
   boxthree.style.transition="0.4 sall ease-in-out";  
   document.getElementById("boxtwo").style.backgroundColor="#FFD9E7";
   document.getElementById("boxtwo").style.border = "4px dashed #FA005F";
   document.getElementById("boxtwo").style.backgroundImage="none";
   document.getElementById("cover").style.display="none";
   document.getElementById("unitrowone").style.display = "flex";  
   document.getElementById("unitrowtwo").style.display = "flex";  
   document.getElementById("unitrowthree").style.display = "flex";  
   document.getElementById("wingcontentsub").style.display = "flex"; 
   document.getElementById("boxone").style.backgroundSize="cover";
   document.getElementById("coverone").style.transform = "rotate(270deg)";
   document.getElementById("unitrowoneone").style.display = "none";  
   document.getElementById("unitrowtwoone").style.display = "none";  
   document.getElementById("unitrowthreeone").style.display = "none";  
   document.getElementById("wingcontentsubone").style.display = "none"; 
   document.getElementById("boxone").style.backgroundImage="url(class_bg.jpg)";
   document.getElementById("coverone").style.display="flex"; 
   document.getElementById("boxone").style.border="0px"; 
   document.getElementById("boxthree").style.backgroundSize="cover";
   document.getElementById("coverthree").style.transform = "rotate(270deg)";
   document.getElementById("unitrowonethree").style.display = "none";  
   document.getElementById("unitrowtwothree").style.display = "none";  
   document.getElementById("unitrowthreethree").style.display = "none";  
   document.getElementById("wingcontentsubthree").style.display = "none"; 
   document.getElementById("boxthree").style.backgroundImage="url(pyq_bg_test.jpg)";
   document.getElementById("coverthree").style.display="flex"; 
   document.getElementById("boxthree").style.border="0px";
   document.getElementById("coverone").style.fontSize="36px";
   document.getElementById("coverthree").style.fontSize="36px";


}
function bigboxthree(){
    boxthree.style.width="780px";
   boxthree.style.transition="0.4s all ease-in-out";
   boxone.style.width="194px";
   boxone.style.transition="0.4s all ease-in-out";  
   boxtwo.style.width="194px";;
   boxtwo.style.transition="0.4s all ease-in-out";
   document.getElementById("boxtwo").style.backgroundSize="cover";
   document.getElementById("cover").style.transform = "rotate(270deg)";
   document.getElementById("unitrowone").style.display = "none";  
   document.getElementById("unitrowtwo").style.display = "none";  
   document.getElementById("unitrowthree").style.display = "none";  
   document.getElementById("wingcontentsub").style.display = "none";
   document.getElementById("boxtwo").style.backgroundImage="url(sd_mat_bg_test.jpg)";
   document.getElementById("cover").style.display="flex"; 
   document.getElementById("boxtwo").style.border="0px";
   document.getElementById("boxone").style.backgroundSize="cover";
   document.getElementById("coverone").style.transform = "rotate(270deg)";
   document.getElementById("unitrowoneone").style.display = "none";  
   document.getElementById("unitrowtwoone").style.display = "none";  
   document.getElementById("unitrowthreeone").style.display = "none";  
   document.getElementById("wingcontentsubone").style.display = "none"; 
   document.getElementById("boxthree").style.backgroundImage="url(pyq_bg_test.jpg)";
   document.getElementById("coverthree").style.display="flex"; 
   document.getElementById("boxthree").style.border="0px"; 
   document.getElementById("boxthree").style.backgroundColor="#FDF8DB";
   document.getElementById("boxthree").style.border ="4px dashed #F3DC3F";
   document.getElementById("boxthree").style.backgroundImage="none";
   document.getElementById("coverthree").style.display="none";
   document.getElementById("unitrowonethree").style.display = "flex";  
   document.getElementById("unitrowtwothree").style.display = "flex";  
   document.getElementById("unitrowthreethree").style.display = "flex";  
   document.getElementById("wingcontentsubthree").style.display = "flex";
   document.getElementById("cover").style.fontSize="36px";
   document.getElementById("coverone").style.fontSize="36px";

}

var arrowdown=document.getElementById("coveronead");

console.log("Current Width:", window.innerWidth);

if (window.innerWidth < 1000) {
   
   
       

function bigboxone(){
    boxone.style.height="300px";
   boxone.style.transition="0.4s all ease-in-out";  
   boxtwo.style.height="60px"
   boxtwo.style.transition="0.4s all ease-in-out";
   boxthree.style.height="60px"
   boxthree.style.transition="0.4s all ease-in-out";  
  
   document.getElementById("boxtwo").style.backgroundSize="cover";
   document.getElementById("unitrowone").style.display = "none";  
   document.getElementById("unitrowtwo").style.display = "none";  
   document.getElementById("unitrowthree").style.display = "none";  
   document.getElementById("wingcontentsub").style.display = "none"; 
   document.getElementById("cover").style.display="flex"; 
   document.getElementById("boxtwo").style.border="0px";
   document.getElementById("boxone").style.backgroundColor="#DEF8FE";
   document.getElementById("boxone").style.border ="4px dashed #5ADCF9";
   document.getElementById("boxone").style.backgroundImage="none";
   document.getElementById("coverone").style.display="none";
   document.getElementById("unitrowoneone").style.display = "flex";  
   document.getElementById("unitrowtwoone").style.display = "flex";  
   document.getElementById("unitrowthreeone").style.display = "flex";  
   document.getElementById("wingcontentsubone").style.display = "none"; 
   document.getElementById("boxthree").style.backgroundSize="cover";
   document.getElementById("unitrowonethree").style.display = "none";  
   document.getElementById("unitrowtwothree").style.display = "none";  
   document.getElementById("unitrowthreethree").style.display = "none";  
   document.getElementById("wingcontentsubthree").style.display = "none"; 
   document.getElementById("coverthree").style.display="flex"; 
   document.getElementById("boxthree").style.border="0px";
   arrowdown.style.display="flex";
 

}
function bigboxtwo(){
    boxtwo.style.height="300px";
   boxtwo.style.transition="0.4s all ease-in-out";  
   boxone.style.height="60px"
   boxone.style.transition="0.4s all ease-in-out";
   boxthree.style.height="60px"
   boxthree.style.transition="0.4 sall ease-in-out";  
   document.getElementById("boxtwo").style.backgroundColor="#FFD9E7";
   document.getElementById("boxtwo").style.border = "4px dashed #FA005F";
   document.getElementById("boxtwo").style.backgroundImage="none";
   document.getElementById("cover").style.display="none";
   document.getElementById("unitrowone").style.display = "flex";  
   document.getElementById("unitrowtwo").style.display = "flex";  
   document.getElementById("unitrowthree").style.display = "flex";  
   document.getElementById("wingcontentsub").style.display = "none"; 
   document.getElementById("boxone").style.backgroundSize="cover";
  document.getElementById("unitrowoneone").style.display = "none";  
   document.getElementById("unitrowtwoone").style.display = "none";  
   document.getElementById("unitrowthreeone").style.display = "none";  
   document.getElementById("wingcontentsubone").style.display = "none"; 
   document.getElementById("coverone").style.display="flex"; 
   document.getElementById("boxone").style.border="0px"; 
   document.getElementById("boxthree").style.backgroundSize="cover";
   document.getElementById("unitrowonethree").style.display = "none";  
   document.getElementById("unitrowtwothree").style.display = "none";  
   document.getElementById("unitrowthreethree").style.display = "none";  
   document.getElementById("wingcontentsubthree").style.display = "none"; 
   document.getElementById("coverthree").style.display="flex"; 
   document.getElementById("boxthree").style.border="0px";



}
function bigboxthree(){
    boxthree.style.height="300px";
   boxthree.style.transition="0.4s all ease-in-out";
   boxone.style.height="60px"
   boxone.style.transition="0.4s all ease-in-out";  
   boxtwo.style.height="60px";
   boxtwo.style.transition="0.4s all ease-in-out";
   document.getElementById("boxtwo").style.backgroundSize="cover";
   document.getElementById("unitrowone").style.display = "none";  
   document.getElementById("unitrowtwo").style.display = "none";  
   document.getElementById("unitrowthree").style.display = "none";  
   document.getElementById("wingcontentsub").style.display = "none";
   document.getElementById("cover").style.display="flex"; 
   document.getElementById("boxtwo").style.border="0px";
   document.getElementById("boxone").style.backgroundSize="cover";
   document.getElementById("unitrowoneone").style.display = "none";  
   document.getElementById("unitrowtwoone").style.display = "none";  
   document.getElementById("unitrowthreeone").style.display = "none";  
   document.getElementById("wingcontentsubone").style.display = "none"; 
   document.getElementById("coverthree").style.display="flex"; 
   document.getElementById("boxthree").style.border="0px"; 
   document.getElementById("boxthree").style.backgroundColor="#FDF8DB";
   document.getElementById("boxthree").style.border ="4px dashed #F3DC3F";
   document.getElementById("boxthree").style.backgroundImage="none";
   document.getElementById("coverthree").style.display="none";
   document.getElementById("unitrowonethree").style.display = "flex";  
   document.getElementById("unitrowtwothree").style.display = "flex";  
   document.getElementById("unitrowthreethree").style.display = "flex";  
   document.getElementById("wingcontentsubthree").style.display = "none";
   
}
    
    
    }
 else {
    function bigboxone(){
        boxone.style.width="780px";
       boxone.style.transition="0.4s all ease-in-out";  
       boxtwo.style.width="194px";
       boxtwo.style.transition="0.4s all ease-in-out";
       boxthree.style.width="194px";
       boxthree.style.transition="0.4s all ease-in-out";  
       document.getElementById("boxtwo").style.backgroundSize="cover";
       document.getElementById("cover").style.transform = "rotate(270deg)";
       document.getElementById("unitrowone").style.display = "none";  
       document.getElementById("unitrowtwo").style.display = "none";  
       document.getElementById("unitrowthree").style.display = "none";  
       document.getElementById("wingcontentsub").style.display = "none"; 
       document.getElementById("boxtwo").style.backgroundImage="url(sd_mat_bg_test.jpg)";
       document.getElementById("cover").style.display="flex"; 
       document.getElementById("boxtwo").style.border="0px";
       document.getElementById("boxone").style.backgroundColor="#DEF8FE";
       document.getElementById("boxone").style.border ="4px dashed #5ADCF9";
       document.getElementById("boxone").style.backgroundImage="none";
       document.getElementById("coverone").style.display="none";
       document.getElementById("unitrowoneone").style.display = "flex";  
       document.getElementById("unitrowtwoone").style.display = "flex";  
       document.getElementById("unitrowthreeone").style.display = "flex";  
       document.getElementById("wingcontentsubone").style.display = "flex"; 
       document.getElementById("boxthree").style.backgroundSize="cover";
       document.getElementById("coverthree").style.transform = "rotate(270deg)";
       document.getElementById("unitrowonethree").style.display = "none";  
       document.getElementById("unitrowtwothree").style.display = "none";  
       document.getElementById("unitrowthreethree").style.display = "none";  
       document.getElementById("wingcontentsubthree").style.display = "none"; 
       document.getElementById("boxthree").style.backgroundImage="url(pyq_bg_test.jpg)";
       document.getElementById("coverthree").style.display="flex"; 
       document.getElementById("boxthree").style.border="0px";
       document.getElementById("cover").style.fontSize="36px";
       document.getElementById("coverthree").style.fontSize="36px";
    
    }
    function bigboxtwo(){
        boxtwo.style.width="780px";
       boxtwo.style.transition="0.4s all ease-in-out";  
       boxone.style.width="194px";
       boxone.style.transition="0.4s all ease-in-out";
       boxthree.style.width="194px"
       boxthree.style.transition="0.4 sall ease-in-out";  
       document.getElementById("boxtwo").style.backgroundColor="#FFD9E7";
       document.getElementById("boxtwo").style.border = "4px dashed #FA005F";
       document.getElementById("boxtwo").style.backgroundImage="none";
       document.getElementById("cover").style.display="none";
       document.getElementById("unitrowone").style.display = "flex";  
       document.getElementById("unitrowtwo").style.display = "flex";  
       document.getElementById("unitrowthree").style.display = "flex";  
       document.getElementById("wingcontentsub").style.display = "flex"; 
       document.getElementById("boxone").style.backgroundSize="cover";
       document.getElementById("coverone").style.transform = "rotate(270deg)";
       document.getElementById("unitrowoneone").style.display = "none";  
       document.getElementById("unitrowtwoone").style.display = "none";  
       document.getElementById("unitrowthreeone").style.display = "none";  
       document.getElementById("wingcontentsubone").style.display = "none"; 
       document.getElementById("boxone").style.backgroundImage="url(class_bg.jpg)";
       document.getElementById("coverone").style.display="flex"; 
       document.getElementById("boxone").style.border="0px"; 
       document.getElementById("boxthree").style.backgroundSize="cover";
       document.getElementById("coverthree").style.transform = "rotate(270deg)";
       document.getElementById("unitrowonethree").style.display = "none";  
       document.getElementById("unitrowtwothree").style.display = "none";  
       document.getElementById("unitrowthreethree").style.display = "none";  
       document.getElementById("wingcontentsubthree").style.display = "none"; 
       document.getElementById("boxthree").style.backgroundImage="url(pyq_bg_test.jpg)";
       document.getElementById("coverthree").style.display="flex"; 
       document.getElementById("boxthree").style.border="0px";
       document.getElementById("coverone").style.fontSize="36px";
       document.getElementById("coverthree").style.fontSize="36px";
    
    
    }
    function bigboxthree(){
        boxthree.style.width="780px";
       boxthree.style.transition="0.4s all ease-in-out";
       boxone.style.width="194px";
       boxone.style.transition="0.4s all ease-in-out";  
       boxtwo.style.width="194px";;
       boxtwo.style.transition="0.4s all ease-in-out";
       document.getElementById("boxtwo").style.backgroundSize="cover";
       document.getElementById("cover").style.transform = "rotate(270deg)";
       document.getElementById("unitrowone").style.display = "none";  
       document.getElementById("unitrowtwo").style.display = "none";  
       document.getElementById("unitrowthree").style.display = "none";  
       document.getElementById("wingcontentsub").style.display = "none";
       document.getElementById("boxtwo").style.backgroundImage="url(sd_mat_bg_test.jpg)";
       document.getElementById("cover").style.display="flex"; 
       document.getElementById("boxtwo").style.border="0px";
       document.getElementById("boxone").style.backgroundSize="cover";
       document.getElementById("coverone").style.transform = "rotate(270deg)";
       document.getElementById("unitrowoneone").style.display = "none";  
       document.getElementById("unitrowtwoone").style.display = "none";  
       document.getElementById("unitrowthreeone").style.display = "none";  
       document.getElementById("wingcontentsubone").style.display = "none"; 
       document.getElementById("boxthree").style.backgroundImage="url(pyq_bg_test.jpg)";
       document.getElementById("coverthree").style.display="flex"; 
       document.getElementById("boxthree").style.border="0px"; 
       document.getElementById("boxthree").style.backgroundColor="#FDF8DB";
       document.getElementById("boxthree").style.border ="4px dashed #F3DC3F";
       document.getElementById("boxthree").style.backgroundImage="none";
       document.getElementById("coverthree").style.display="none";
       document.getElementById("unitrowonethree").style.display = "flex";  
       document.getElementById("unitrowtwothree").style.display = "flex";  
       document.getElementById("unitrowthreethree").style.display = "flex";  
       document.getElementById("wingcontentsubthree").style.display = "flex";
       document.getElementById("cover").style.fontSize="36px";
       document.getElementById("coverone").style.fontSize="36px";
    
    }
        
}
