const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click',() => {
    hamMenu.classList.toggle('active');
    if (hamMenu.classList.contains('active')) {
        shownav();
        document.getElementById("content").style.display="none";
        document.getElementById("footer").style.display="none";

    } else {
        closenav();
        document.getElementById("content").style.display="flex";
        document.getElementById("footer").style.display="flex";

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




function resetNavBarStyles() {
    const menubar = document.getElementById("menubar");
    const closeicon = document.getElementById("closeicon");
    const mobilenav = document.getElementById("mobilenavwhole");


}
var mobilenav=document.getElementById("mobilenavwhole");
function closenav(){

    mobilenav.style.opacity = "0";
    setTimeout(() => {
        mobilenav.style.display = "none";
    }, 500);
    document.getElementById("hilogo").style.display="flex";
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
// Add event listener to handle resizing



/*if (window.innerWidth < 1000) {
   
   
       

function bigboxone(){

    if(arrowdownone.style.display==="none"){
    boxone.style.height="398px";
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
   document.getElementById("boxone").style.borderBottom="4px dashed #69DFFA";
   document.getElementById("boxone").style.borderRight="4px dashed #69DFFA";
   document.getElementById("boxone").style.borderLeft="4px dashed #69DFFA";
 
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
   arrowdownone.style.display="flex";
   arrowdowntwo.style.display="none";
   arrowdownthree.style.display="none";
   document.getElementById("boxtwo").style.backgroundColor= "#ff005d";
   document.getElementById("boxthree").style.backgroundColor="#F0D30E";}
   else {
    document.getElementById("wingcontentsub").style.display = "none"; 
    document.getElementById("boxone").style.backgroundSize="cover";
   document.getElementById("unitrowoneone").style.display = "none";  
    document.getElementById("unitrowtwoone").style.display = "none";  
    document.getElementById("unitrowthreeone").style.display = "none";  
    document.getElementById("wingcontentsubone").style.display = "none"; 
    document.getElementById("coverone").style.display="flex"; 
    document.getElementById("boxone").style.border="0px"; 
    arrowdownone.style.display="none";
     boxone.style.height="60px"
     document.getElementById("boxone").style.backgroundColor="#00D0F6";

   }
  
 

}

function bigboxtwo(){
if(arrowdowntwo.style.display==="none"){
    boxtwo.style.height="398px";
   boxtwo.style.transition="0.4s all ease-in-out";  
   boxone.style.height="60px"
   boxone.style.transition="0.4s all ease-in-out";
   boxthree.style.height="60px"
   boxthree.style.transition="0.4 sall ease-in-out";  
   document.getElementById("boxtwo").style.backgroundColor="#FFD9E7";
   document.getElementById("boxtwo").style.border="0px"
   document.getElementById("boxtwo").style.borderBottom="4px dashed #FA005F";
   document.getElementById("boxtwo").style.borderRight="4px dashed #FA005F";
   document.getElementById("boxtwo").style.borderLeft="4px dashed #FA005F";
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
document.getElementById("boxone").style.backgroundColor="#00D0F6";
document.getElementById("boxthree").style.backgroundColor="#F0D30E";

arrowdownone.style.display="none";
arrowdowntwo.style.display="flex";
arrowdownthree.style.display="none";}
else{
    document.getElementById("cover").style.display="flex"; 
    boxtwo.style.height="60px"
    boxtwo.style.transition="0.4s all ease-in-out"; 
    document.getElementById("boxtwo").style.backgroundSize="cover";
    document.getElementById("unitrowone").style.display = "none";  
    document.getElementById("unitrowtwo").style.display = "none";  
    document.getElementById("unitrowthree").style.display = "none";  
    document.getElementById("wingcontentsub").style.display = "none"; 
   
    document.getElementById("boxtwo").style.border="0px";
    arrowdowntwo.style.display="none";
    document.getElementById("boxtwo").style.backgroundColor= "#ff005d";
}


}
function bigboxthree(){
    if(arrowdownthree.style.display==="none"){
    boxthree.style.height="398px";
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
   document.getElementById("boxthree").style.borderBottom="4px dashed #F3DC3F";
   document.getElementById("boxthree").style.borderRight="4px dashed #F3DC3F";
   document.getElementById("boxthree").style.borderLeft="4px dashed #F3DC3F";
   document.getElementById("boxthree").style.backgroundImage="none";
   document.getElementById("coverthree").style.display="none";
   document.getElementById("unitrowonethree").style.display = "flex";  
   document.getElementById("unitrowtwothree").style.display = "flex";  
   document.getElementById("unitrowthreethree").style.display = "flex";  
   document.getElementById("wingcontentsubthree").style.display = "none";
   document.getElementById("boxone").style.backgroundColor="#00D0F6";

   document.getElementById("boxtwo").style.backgroundColor= "#ff005d";
   arrowdownone.style.display="none";
   arrowdowntwo.style.display="none";
   arrowdownthree.style.display="flex";
   document.getElementById("boxone").style.backgroundSize="cover";
  document.getElementById("unitrowoneone").style.display = "none";  
   document.getElementById("unitrowtwoone").style.display = "none";  
   document.getElementById("unitrowthreeone").style.display = "none";  
   document.getElementById("wingcontentsubone").style.display = "none"; 
   document.getElementById("coverone").style.display="flex"; 
   document.getElementById("boxone").style.border="0px"; }
   else{

    document.getElementById("boxthree").style.backgroundSize="cover";
    document.getElementById("unitrowonethree").style.display = "none";  
    document.getElementById("unitrowtwothree").style.display = "none";  
    document.getElementById("unitrowthreethree").style.display = "none";  
    document.getElementById("wingcontentsubthree").style.display = "none"; 
    document.getElementById("coverthree").style.display="flex"; 
    document.getElementById("boxthree").style.border="0px";
 document.getElementById("boxthree").style.backgroundColor="#F0D30E";
 arrowdownthree.style.display="none";
 boxthree.style.height="60px"
 document.getElementById("boxthree").style.backgroundColor="#F0D30E";

   }
}


function bigboxoneopen(){
    document.getElementById("backgroundone").style.display="flex";
    document.getElementById("coveroneadcover").style.display="none";
     document.getElementById("backgroundtwo").style.display="none";
      document.getElementById("covertwoadcover").style.display="flex";
      document.getElementById("backgroundthree").style.display="none";
      document.getElementById("coverthreeadcover").style.display="flex";
      document.getElementById("parttwomobile").style.marginBottom="11vh";
      document.getElementById("backgroundone").style.height="400px";
  
      
  }
  function bigboxoneclose(){
      document.getElementById("backgroundone").style.display="none";
      document.getElementById("coveroneadcover").style.display="flex";
      document.getElementById("parttwomobile").style.marginBottom="50vh";
  
  }
  
  function bigboxtwoopen(){
      document.getElementById("backgroundtwo").style.display="flex";
      document.getElementById("covertwoadcover").style.display="none";
      document.getElementById("backgroundone").style.display="none";
      document.getElementById("coveroneadcover").style.display="flex";
      document.getElementById("backgroundthree").style.display="none";
      document.getElementById("coverthreeadcover").style.display="flex";
      document.getElementById("parttwomobile").style.marginBottom="11vh"
      document.getElementById("backgroundtwo").style.height="400px";
      document.getElementById("coverthreeadcover").style.display="flex";
  
  
    }
    function bigboxtwoclose(){
        document.getElementById("backgroundtwo").style.display="none";
        document.getElementById("covertwoadcover").style.display="flex";
        document.getElementById("parttwomobile").style.marginBottom="50vh";
    
    }
  
    
  function bigboxthreeopen(){
      document.getElementById("backgroundthree").style.display="flex";
      document.getElementById("coverthreeadcover").style.display="none";
      document.getElementById("backgroundtwo").style.display="none";
      document.getElementById("covertwoadcover").style.display="flex";
      document.getElementById("backgroundone").style.display="none";
      document.getElementById("coveroneadcover").style.display="flex";
      document.getElementById("parttwomobile").style.marginBottom="11vh"
       document.getElementById("backgroundthree").style.height="400px";
    }
    function bigboxthreeclose(){
        document.getElementById("backgroundthree").style.display="none";
        document.getElementById("coverthreeadcover").style.display="flex";
        document.getElementById("parttwomobile").style.marginBottom="50vh";
    
    }
    

    
    }*/

var boxone = document.getElementById("boxone");
var boxtwo = document.getElementById("boxtwo");
var boxthree = document.getElementById("boxthree");
var arrowdownone=document.getElementById("coveronead");
var arrowdowntwo=document.getElementById("covertwoad");
var arrowdownthree=document.getElementById("coverthreead");


 
    function bigboxone(){
        document.getElementById("boxone").style.width="780px";
        document.getElementById("boxone").style.transition="0.4s all ease-in-out";  
        document.getElementById("boxtwo").style.width="194px";
        document.getElementById("boxtwo").style.transition="0.4s all ease-in-out";
        document.getElementById("boxthree").style.width="194px";
        document.getElementById("boxthree").style.transition="0.4s all ease-in-out";  
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
        document.getElementById("boxtwo").style.width="780px";
       document.getElementById("boxtwo").style.transition="0.4s all ease-in-out";  
       document.getElementById("boxone").style.width="194px";
       document.getElementById("boxone").style.transition="0.4s all ease-in-out";
       document.getElementById("boxthree").style.width="194px"
       document.getElementById("boxthree").style.transition="0.4 sall ease-in-out";  
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
        document.getElementById("boxthree").style.width="780px";
        document.getElementById("boxthree").style.transition="0.4s all ease-in-out";
       document.getElementById("boxone").style.width="194px";
       document.getElementById("boxone").style.transition="0.4s all ease-in-out";  
       document.getElementById("boxtwo").style.width="194px";;
       document.getElementById("boxtwo").style.transition="0.4s all ease-in-out";
       document.getElementById("boxtwo").style.backgroundSize="cover";
       document.getElementById("cover").style.transform = "rotate(270deg)";
       document.getElementById("unitrowone").style.display = "none";  
       document.getElementById("unitrowtwo").style.display = "none";  
       document.getElementById("unitrowthree").style.display = "none";  
       document.getElementById("wingcontentsub").style.display = "none";
       document.getElementById("boxone").style.backgroundImage="url(class_bg.jpg)";
       document.getElementById("coverone").style.display="flex"; 
       document.getElementById("boxone").style.border="0px";
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

    function bigboxoneopen(){
        document.getElementById("backgroundone").style.display="flex";
        document.getElementById("coveroneadcover").style.display="none";
         document.getElementById("backgroundtwo").style.display="none";
          document.getElementById("covertwoadcover").style.display="flex";
          document.getElementById("backgroundthree").style.display="none";
          document.getElementById("coverthreeadcover").style.display="flex";
          document.getElementById("parttwomobile").style.marginBottom="11vh";
          document.getElementById("backgroundone").style.height="400px";
      
          
      }
      function bigboxoneclose(){
          document.getElementById("backgroundone").style.display="none";
          document.getElementById("coveroneadcover").style.display="flex";
          document.getElementById("parttwomobile").style.marginBottom="50vh";
      
      }
      
      function bigboxtwoopen(){
          document.getElementById("backgroundtwo").style.display="flex";
          document.getElementById("covertwoadcover").style.display="none";
          document.getElementById("backgroundone").style.display="none";
          document.getElementById("coveroneadcover").style.display="flex";
          document.getElementById("backgroundthree").style.display="none";
          document.getElementById("coverthreeadcover").style.display="flex";
          document.getElementById("parttwomobile").style.marginBottom="11vh"
          document.getElementById("backgroundtwo").style.height="400px";
          document.getElementById("coverthreeadcover").style.display="flex";
      
      
        }
        function bigboxtwoclose(){
            document.getElementById("backgroundtwo").style.display="none";
            document.getElementById("covertwoadcover").style.display="flex";
            document.getElementById("parttwomobile").style.marginBottom="50vh";
        
        }
      
        
      function bigboxthreeopen(){
          document.getElementById("backgroundthree").style.display="flex";
          document.getElementById("coverthreeadcover").style.display="none";
          document.getElementById("backgroundtwo").style.display="none";
          document.getElementById("covertwoadcover").style.display="flex";
          document.getElementById("backgroundone").style.display="none";
          document.getElementById("coveroneadcover").style.display="flex";
          document.getElementById("parttwomobile").style.marginBottom="11vh"
           document.getElementById("backgroundthree").style.height="400px";
        }
        function bigboxthreeclose(){
            document.getElementById("backgroundthree").style.display="none";
            document.getElementById("coverthreeadcover").style.display="flex";
            document.getElementById("parttwomobile").style.marginBottom="50vh";
        
        }
        
        

