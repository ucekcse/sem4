const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (hamMenu.classList.contains('active')) {
        shownav();
        document.getElementById("taskmobile").style.display="none";
        document.getElementById("popup").style.display="none";
        document.getElementById("footer").style.display="none";
    

    } else {
        closenav();
        document.getElementById("taskmobile").style.display="flex";
        document.getElementById("popup").style.display="none";
        document.getElementById("footer").style.display="flex";
    }
});



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




function resetNavBarStyles() {
   
    const mobilenav = document.getElementById("mobilenavwhole");

    if (window.innerWidth < 900) {
        
         // Mobile view
         mobilenav.style.display = "none";
    } else {
// Desktop view

mobilenav.style.display = "none";
    }
}
var mobilenav=document.getElementById("mobilenavwhole");
function closenav(){
   
    mobilenav.style.display="none";
    document.getElementById("hilogo").style.display="flex";
    
    document.getElementById("taskcontainer").style.display="none";
    document.getElementById("taskmobile").style.display="flex";

    document.getElementById("footer").style.display="flex";
}
function shownav(){
   
    mobilenav.style.display="flex";
    document.getElementById("hilogo").style.display="none";
   ;
    document.getElementById("taskcontainer").style.display="none";
    document.getElementById("taskmobile").style.display="none";
    document.getElementById("footer").style.display="none";
  
}
// Add event listener to handle resizing
window.addEventListener("resize", resetNavBarStyles);

// Initial call to set correct styles on page load
resetNavBarStyles();

 
   
if (window.innerWidth > 1700) 
    {
        function showallsubcontentone(){
            document.getElementById("sidehidden").style.display="none";
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
            taskside.style.display="flex";
            taskmain.classList.add('taskcontentsmall');
            box1.classList.add('rowsmall');
            daysmall.style.left="20px";
            subsmall.style.top="2px"
            subsmall.style.right="3px";
            daysmall.style.bottom="2px";
        
          
            taskcontainer.style.justifyContent="space-between";
            
            document.getElementById("allsubside").style.display="none";
            document.getElementById("daysmall").style.fontSize="18px";
            document.getElementById("subsmall").style.fontSize="18px";
          
            
        
            
        }
        function showallsubcontenttwo(){
            document.getElementById("sidehidden").style.display="none";
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
            taskside.style.display="flex";
            taskmain.classList.add('taskcontentsmall');
            box1.classList.add('rowsmall');
            daysmall.style.left="20px";
            subsmall.style.top="2px"
            subsmall.style.right="3px";
            daysmall.style.bottom="2px";
        
          
            taskcontainer.style.justifyContent="space-between";
            
            document.getElementById("allsubside").style.display="none";
            document.getElementById("daysmall").style.fontSize="18px";
            document.getElementById("subsmall").style.fontSize="18px";
            document.getElementById("allsubpara").innerText="two";
         
        }
        function showallsubcontentthree(){
            document.getElementById("sidehidden").style.display="none";
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
            taskside.style.display="flex";
            taskmain.classList.add('taskcontentsmall');
            box1.classList.add('rowsmall');
            daysmall.style.left="20px";
            subsmall.style.top="2px"
            subsmall.style.right="3px";
            daysmall.style.bottom="2px";
        
          
            taskcontainer.style.justifyContent="space-between";
            
            document.getElementById("allsubside").style.display="none";
            document.getElementById("daysmall").style.fontSize="18px";
            document.getElementById("subsmall").style.fontSize="18px";
        
            document.getElementById("allsubpara").innerText="three";
         
        }
        function showallsubcontentfour(){
            document.getElementById("sidehidden").style.display="none";
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
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
            document.querySelectorAll(".allsubpara")[0].innerText="AIML lab";
            document.querySelectorAll(".allsubpara")[1].innerText="DBMS lab";
            document.querySelectorAll(".sidecontentpara")[0].innerText="Write full lab observation";
            document.querySelectorAll(".sidecontentpara")[1].innerText="Write 1st 4 program in observation";
            document.querySelectorAll(".sidecontentdate")[0].innerText="04.03.2025";
            document.querySelectorAll(".sidecontentdate")[1].innerText="03.03.2025";
            document.querySelectorAll(".downloada")[0].setAttribute("href","https://aliabdaal.com/studying/");
            document.querySelectorAll(".downloada")[1].setAttribute("href","https://aliabdaal.com/studying/")
        
        
            document.getElementById("allsubthree").style.display="none";
            document.getElementById("allsubfour").style.display="none";
            document.getElementById("allsubfive").style.display="none";
            document.getElementById("allsubsix").style.display="none";
         
        }
        function showallsubcontentfive(){
            document.getElementById("sidehidden").style.display="none";
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
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
            document.getElementById("allsubpara").innerText="five";
            document.querySelectorAll(".allsubpara")[0].innerText="DBMS";
            document.querySelectorAll(".allsubpara")[1].innerText="Algorithms";
            document.querySelectorAll(".sidecontentpara")[0].innerText="Write the notes on the thing which out man though today which is from the PDF send by her";
            document.querySelectorAll(".sidecontentpara")[1].innerText="Get the print out of the syllabus of AL and also colour print out of Big O notion pdf.";
            document.querySelectorAll(".sidecontentdate")[0].innerText="01.03.2025";
            document.querySelectorAll(".sidecontentdate")[1].innerText="03.03.2025";
            document.querySelectorAll(".downloada")[0].setAttribute("href","https://aliabdaal.com/studying/");
            document.querySelectorAll(".downloada")[1].setAttribute("href","https://aliabdaal.com/studying/")
        
        
            document.getElementById("allsubthree").style.display="none";
            document.getElementById("allsubfour").style.display="none";
            document.getElementById("allsubfive").style.display="none";
            document.getElementById("allsubsix").style.display="none";
           
         
        }
        function showallsubcontentsix(){
            document.getElementById("sidehidden").style.display="none";
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
            taskside.style.display="flex";
            taskmain.classList.add('taskcontentsmall');
            box1.classList.add('rowsmall');
            daysmall.style.left="20px";
            subsmall.style.top="2px"
            subsmall.style.right="3px";
            daysmall.style.bottom="2px";
        
          
            taskcontainer.style.justifyContent="space-between";
            
            document.getElementById("allsubside").style.display="none";
            document.getElementById("daysmall").style.fontSize="18px";
            document.getElementById("subsmall").style.fontSize="18px";
            document.getElementById("allsubpara").innerText="six";
            document.querySelectorAll(".downloada")[3].setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");
        
         
        }
        
      

        

        function shrinkrowfivethree(){
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
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
            document.querySelector(".sidecontentsubname").innerText="AIML lab";
            document.querySelector(".minorboxpara").innerText="Write full lab observation";
            document.querySelector(".sidecontentdaydate").innerText="THURSDAY ‎ ‎ ‎27.02.2025";
          
            document.querySelector(".minorboxdate").innerText="04.03.2025";
            document.querySelector(".downloadminor").setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");
        
            
        
        });
        daydetail.forEach(element => {
            element.style.fontSize = '18px'; // Or set a specific font size
        });
           document.getElementById("daysmall").style.fontSize="18px";
            document.getElementById("subsmall").style.fontSize="18px"
        }
        
        function shrinkrowfivefour(){
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
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
            document.querySelector(".sidecontentsubname").innerText="DBMS lab";
            document.querySelector(".minorboxpara").innerText="Write 1st 4 program in observation";
            document.querySelector(".sidecontentdaydate").innerText="THURSDAY ‎ ‎ ‎27.02.2025";
          
            document.querySelector(".minorboxdate").innerText="03.03.2025";
            document.querySelector(".downloadminor").setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");
          
        });
        daydetail.forEach(element => {
            element.style.fontSize = '18px'; // Or set a specific font size
        });
           document.getElementById("daysmall").style.fontSize="18px";
            document.getElementById("subsmall").style.fontSize="18px"
        }
        
        function shrinkrowsixfour(){
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
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
            document.querySelector(".sidecontentsubname").innerText="DBMS";
            document.querySelector(".minorboxpara").innerText="Write the notes on the thing which out man though today which is from the PDF send by her.";
            document.querySelector(".sidecontentdaydate").innerText="FRIDAY ‎ ‎ ‎28.02.2025";
          
            document.querySelector(".minorboxdate").innerText="01.03.2025";
            document.querySelector(".downloadminor").setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");
        });
        daydetail.forEach(element => {
            element.style.fontSize = '18px'; // Or set a specific font size
        });
           document.getElementById("daysmall").style.fontSize="18px";
            document.getElementById("subsmall").style.fontSize="18px"
        }
        
        function shrinkrowsixsix(){
            taskmain.style.width="910px";
            taskmain.style.height="500px";
            taskmain.style.marginLeft="18%";
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
            document.querySelector(".sidecontentsubname").innerText="Algorithms";
            document.querySelector(".minorboxpara").innerText=" Get the print out of the syllabus of AL and also colour print out of Big O notion pdf.";
            document.querySelector(".sidecontentdaydate").innerText="FRIDAY ‎ ‎ ‎28.02.2025";
          
            document.querySelector(".minorboxdate").innerText="03.03.2025";
            document.querySelector(".downloadminor").setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");
        });
        daydetail.forEach(element => {
            element.style.fontSize = '18px'; // Or set a specific font size
        });
           document.getElementById("daysmall").style.fontSize="18px";
            document.getElementById("subsmall").style.fontSize="18px"
        }
        
     }
else{


function shrinkrowfivethree(){
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
    document.querySelector(".sidecontentsubname").innerText="AIML lab";
    document.querySelector(".minorboxpara").innerText="Write full lab observation";
    document.querySelector(".sidecontentdaydate").innerText="THURSDAY ‎ ‎ ‎27.02.2025";
  
    document.querySelector(".minorboxdate").innerText="04.03.2025";
    document.querySelector(".downloadminor").setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");

    

});
daydetail.forEach(element => {
    element.style.fontSize = '18px'; // Or set a specific font size
});
   document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px"
}

function shrinkrowfivefour(){
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
    document.querySelector(".sidecontentsubname").innerText="DBMS lab";
    document.querySelector(".minorboxpara").innerText="Write 1st 4 program in observation";
    document.querySelector(".sidecontentdaydate").innerText="THURSDAY ‎ ‎ ‎27.02.2025";
  
    document.querySelector(".minorboxdate").innerText="03.03.2025";
    document.querySelector(".downloadminor").setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");
  
});
daydetail.forEach(element => {
    element.style.fontSize = '18px'; // Or set a specific font size
});
   document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px"
}

function shrinkrowsixfour(){
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
    document.querySelector(".sidecontentsubname").innerText="DBMS";
    document.querySelector(".minorboxpara").innerText="Write the notes on the thing which out man though today which is from the PDF send by her.";
    document.querySelector(".sidecontentdaydate").innerText="FRIDAY ‎ ‎ ‎28.02.2025";
  
    document.querySelector(".minorboxdate").innerText="01.03.2025";
    document.querySelector(".downloadminor").setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");
});
daydetail.forEach(element => {
    element.style.fontSize = '18px'; // Or set a specific font size
});
   document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px"
}

function shrinkrowsixsix(){
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
    document.querySelector(".sidecontentsubname").innerText="Algorithms";
    document.querySelector(".minorboxpara").innerText=" Get the print out of the syllabus of AL and also colour print out of Big O notion pdf.";
    document.querySelector(".sidecontentdaydate").innerText="FRIDAY ‎ ‎ ‎28.02.2025";
  
    document.querySelector(".minorboxdate").innerText="03.03.2025";
    document.querySelector(".downloadminor").setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");
});
daydetail.forEach(element => {
    element.style.fontSize = '18px'; // Or set a specific font size
});
   document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px"
}




function showallsubcontentone(){
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
    
    document.getElementById("allsubside").style.display="none";
    document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px";
  
    

    
}
function showallsubcontenttwo(){
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
    
    document.getElementById("allsubside").style.display="none";
    document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px";
    document.getElementById("allsubpara").innerText="two";
 
}
function showallsubcontentthree(){
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
    
    document.getElementById("allsubside").style.display="none";
    document.getElementById("daysmall").style.fontSize="18px";
    document.getElementById("subsmall").style.fontSize="18px";

    document.getElementById("allsubpara").innerText="three";
 
}
function showallsubcontentfour(){
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
    document.querySelectorAll(".allsubpara")[0].innerText="AIML lab";
    document.querySelectorAll(".allsubpara")[1].innerText="DBMS lab";
    document.querySelectorAll(".sidecontentpara")[0].innerText="Write full lab observation";
    document.querySelectorAll(".sidecontentpara")[1].innerText="Write 1st 4 program in observation";
    document.querySelectorAll(".sidecontentdate")[0].innerText="04.03.2025";
    document.querySelectorAll(".sidecontentdate")[1].innerText="03.03.2025";
    document.querySelectorAll(".downloada")[0].setAttribute("href","https://aliabdaal.com/studying/");
    document.querySelectorAll(".downloada")[1].setAttribute("href","https://aliabdaal.com/studying/")


    document.getElementById("allsubthree").style.display="none";
    document.getElementById("allsubfour").style.display="none";
    document.getElementById("allsubfive").style.display="none";
    document.getElementById("allsubsix").style.display="none";
 
}
function showallsubcontentfive(){
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
    document.getElementById("allsubpara").innerText="five";
    document.querySelectorAll(".allsubpara")[0].innerText="DBMS";
    document.querySelectorAll(".allsubpara")[1].innerText="Algorithms";
    document.querySelectorAll(".sidecontentpara")[0].innerText="Write the notes on the thing which out man though today which is from the PDF send by her";
    document.querySelectorAll(".sidecontentpara")[1].innerText="Get the print out of the syllabus of AL and also colour print out of Big O notion pdf.";
    document.querySelectorAll(".sidecontentdate")[0].innerText="01.03.2025";
    document.querySelectorAll(".sidecontentdate")[1].innerText="03.03.2025";
    document.querySelectorAll(".downloada")[0].setAttribute("href","https://aliabdaal.com/studying/");
    document.querySelectorAll(".downloada")[1].setAttribute("href","https://aliabdaal.com/studying/")


    document.getElementById("allsubthree").style.display="none";
    document.getElementById("allsubfour").style.display="none";
    document.getElementById("allsubfive").style.display="none";
    document.getElementById("allsubsix").style.display="none";
   
 
}
function showallsubcontentsix(){
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
    document.getElementById("allsubpara").innerText="six";
    document.querySelectorAll(".downloada")[3].setAttribute("href","https://imgk.timesnownews.com/story/1542697236-Kohli-roar-AP.jpg");

 
}


}







function expandone(){
    if(document.getElementById("allsubsidehide").style.display==="none"){

        document.getElementById("allsubsidehidetwo").style.display="none";
        document.getElementById("allsubsidehidethree").style.display="none";
        document.getElementById("allsubsidehidefour").style.display="none";
        document.getElementById("allsubsidehidefive").style.display="none";
        document.getElementById("allsubsidehidesix").style.display="none";
    document.getElementById("allsubsidehide").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
 
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
    document.getElementById("arrow").style.transform = "rotate(0deg)";
    document.getElementById("arrowtwo").style.transform = "rotate(-90deg)";
    document.getElementById("arrowthree").style.transform = "rotate(-90deg)";
    document.getElementById("arrowsix").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfour").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfive").style.transform = "rotate(-90deg)";

    document.getElementById("allsubtwo").style.borderBottom="5px solid #9F9FD6";}
    else{
        document.getElementById("allsubsidehide").style.display="none";
          document.getElementById("arrow").style.transform = "rotate(-90deg)"
      
    }

    

}
function expandtwo(){
    if(document.getElementById("allsubsidehidetwo").style.display==="none"){
    document.getElementById("allsubsidehide").style.display="none";
    document.getElementById("allsubsidehidethree").style.display="none";
    document.getElementById("allsubsidehidefour").style.display="none";
    document.getElementById("allsubsidehidefive").style.display="none";
    document.getElementById("allsubsidehidesix").style.display="none";
    document.getElementById("allsubsidehidetwo").style.display="flex";
    document.getElementById("allsubsidehidetwo").style.flexDirection = "column";
  
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
    document.getElementById("arrowtwo").style.transform = "rotate(0deg)";
    document.getElementById("arrow").style.transform = "rotate(-90deg)";
    document.getElementById("arrowthree").style.transform = "rotate(-90deg)";
    document.getElementById("arrowsix").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfour").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfive").style.transform = "rotate(-90deg)";

}
else{
    document.getElementById("allsubsidehidetwo").style.display="none";
    document.getElementById("arrowtwo").style.transform = "rotate(-90deg)";
}
}


function expandthree(){
    if(document.getElementById("allsubsidehidethree").style.display==="none"){
    document.getElementById("allsubsidehide").style.display="none";
    document.getElementById("allsubsidehidefour").style.display="none";
    document.getElementById("allsubsidehidefive").style.display="none";
    document.getElementById("allsubsidehidesix").style.display="none";
    document.getElementById("allsubsidehidethree").style.display="flex";
    document.getElementById("allsubsidehidetwo").style.flexDirection = "column";
  
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
    document.getElementById("arrowthree").style.transform = "rotate(0deg)";
    document.getElementById("arrow").style.transform = "rotate(-90deg)";
    document.getElementById("arrowtwo").style.transform = "rotate(-90deg)";
    document.getElementById("arrowsix").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfour").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfive").style.transform = "rotate(-90deg)";
}
else{
    document.getElementById("allsubsidehidethree").style.display="none";
    document.getElementById("arrowthree").style.transform = "rotate(-90deg)";
}
}


function expandfour(){
    if(document.getElementById("allsubsidehidefour").style.display==="none"){
    document.getElementById("allsubsidehide").style.display="none";
    document.getElementById("allsubsidehidetwo").style.display="none";
    document.getElementById("allsubsidehidefour").style.display="flex";
    document.getElementById("allsubsidehidefive").style.display="none";
    document.getElementById("allsubsidehidesix").style.display="none";
    document.getElementById("allsubsidehidethree").style.display="none";
   
    document.getElementById("allsubsidehidetwo").style.flexDirection = "column";
  
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
    document.getElementById("arrowfour").style.transform = "rotate(0deg)";
    document.getElementById("arrow").style.transform = "rotate(-90deg)";
    document.getElementById("arrowtwo").style.transform = "rotate(-90deg)";
    document.getElementById("arrowthree").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfive").style.transform = "rotate(-90deg)";
    document.getElementById("arrowsix").style.transform = "rotate(-90deg)";
}
else{
    document.getElementById("allsubsidehidefour").style.display="none";
    document.getElementById("arrowfour").style.transform = "rotate(-90deg)";
}
}

function expandfive(){
    if(document.getElementById("allsubsidehidefive").style.display==="none"){
    document.getElementById("allsubsidehide").style.display="none";
    document.getElementById("allsubsidehidetwo").style.display="none";
    document.getElementById("allsubsidehidefour").style.display="none";
    document.getElementById("allsubsidehidethree").style.display="none";
    document.getElementById("allsubsidehidesix").style.display="none";
    document.getElementById("allsubsidehidefive").style.display="flex";
    document.getElementById("allsubsidehidetwo").style.flexDirection = "column";
  
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
    document.getElementById("arrowfive").style.transform = "rotate(0deg)";
    document.getElementById("arrowsix").style.transform = "rotate(-90deg)";
    document.getElementById("arrow").style.transform = "rotate(-90deg)";
    document.getElementById("arrowtwo").style.transform = "rotate(-90deg)";
    document.getElementById("arrowthree").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfour").style.transform = "rotate(-90deg)";
}
else{
    document.getElementById("allsubsidehidefive").style.display="none";
    document.getElementById("arrowfive").style.transform = "rotate(-90deg)";
}
}

function expandsix(){
    if(document.getElementById("allsubsidehidesix").style.display==="none"){
    document.getElementById("allsubsidehide").style.display="none";
    document.getElementById("allsubsidehidetwo").style.display="none";
    document.getElementById("allsubsidehidefour").style.display="none";
    document.getElementById("allsubsidehidethree").style.display="none";
    document.getElementById("allsubsidehidefive").style.display="none";
    document.getElementById("allsubsidehidesix").style.display="flex";
    document.getElementById("allsubsidehidetwo").style.flexDirection = "column";
  
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
    document.getElementById("arrowsix").style.transform = "rotate(0deg)";
    document.getElementById("arrow").style.transform = "rotate(-90deg)";
    document.getElementById("arrowtwo").style.transform = "rotate(-90deg)";
    document.getElementById("arrowthree").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfour").style.transform = "rotate(-90deg)";
    document.getElementById("arrowfive").style.transform = "rotate(-90deg)";
}
else{
    document.getElementById("allsubsidehidesix").style.display="none";
    document.getElementById("arrowsix").style.transform = "rotate(-90deg)";
}
}


   
    
function expandonepop(){
    if( document.getElementById("allsubsidehidepopone").style.display==="none"){
        document.getElementById("arrowone").style.transform = "rotate(0deg)";

    document.getElementById("allsubsidehidepopone").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
   document.getElementById("allsubone").style.borderBottom="0px solid #9F9FD6";
  

    }
    else{
        document.getElementById("allsubsidehidepopone").style.display="none";
        document.getElementById("allsubone").style.borderBottom="0px solid #9F9FD6";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";

    }
  }
      
function expandtwopop(){
    if( document.getElementById("allsubsidehidepoptwo").style.display==="none"){
        document.getElementById("arrtwo").style.transform = "rotate(0deg)";

        document.getElementById("allsubone").style.borderBottom="0px solid #9F9FD6";
    document.getElementById("allsubsidehidepoptwo").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
   document.getElementById("allsubone").style.border="0px";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
    
    document.getElementById("allsubtwo").style.borderBottom="5px solid #9F9FD6";
    }
    else{
        document.getElementById("allsubsidehidepoptwo").style.display="none";
        document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
        document.getElementById("arrtwo").style.transform = "rotate(-90deg)";

    }
  }


  function expandthreepop(){
    if( document.getElementById("allsubsidehidepopthree").style.display==="none"){
        document.getElementById("arrthree").style.transform = "rotate(0deg)";

        document.getElementById("allsubone").style.borderBottom="0px solid #9F9FD6";
    document.getElementById("allsubsidehidepopthree").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
   document.getElementById("allsubone").style.border="0px";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
    
    document.getElementById("allsubtwo").style.borderBottom="5px solid #9F9FD6";
    }
    else{
        document.getElementById("allsubsidehidepopthree").style.display="none";
        document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";

    }
  }


  function expandfourpop(){
    if( document.getElementById("allsubsidehidepopfour").style.display==="none"){
        document.getElementById("arrfour").style.transform = "rotate(0deg)";

        document.getElementById("allsubone").style.borderBottom="0px solid #9F9FD6";
    document.getElementById("allsubsidehidepopfour").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
   document.getElementById("allsubone").style.border="0px";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
    
    document.getElementById("allsubtwo").style.borderBottom="5px solid #9F9FD6";
    }
    else{
        document.getElementById("allsubsidehidepopfour").style.display="none";
        document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
        document.getElementById("arrfour").style.transform = "rotate(-90deg)";

    }
  }


  function expandfivepop(){
    if( document.getElementById("allsubsidehidepopfive").style.display==="none"){
        document.getElementById("arrfive").style.transform = "rotate(0deg)";

        document.getElementById("allsubone").style.borderBottom="0px solid #9F9FD6";
    document.getElementById("allsubsidehidepopfive").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
   document.getElementById("allsubone").style.border="0px";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
    
    document.getElementById("allsubtwo").style.borderBottom="5px solid #9F9FD6";
    }
    else{
        document.getElementById("allsubsidehidepopfive").style.display="none";
        document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";

    }
  }


  function expandsixpop(){
    if( document.getElementById("allsubsidehidepopsix").style.display==="none"){
        document.getElementById("arrsix").style.transform = "rotate(0deg)";

        document.getElementById("allsubone").style.borderBottom="0px solid #9F9FD6";
    document.getElementById("allsubsidehidepopsix").style.display="flex";
    document.getElementById("allsubsidehide").style.flexDirection = "column";
   document.getElementById("allsubone").style.border="0px";
   document.getElementById("allsubsidehide").style.transition="0.4s all ease-in-out";
   document.getElementById("allsubsidehidetwo").style.display="none";
    
    document.getElementById("allsubtwo").style.borderBottom="5px solid #9F9FD6";
    }
    else{
        document.getElementById("allsubsidehidepopsix").style.display="none";
        document.getElementById("allsubone").style.borderBottom="5px solid #9F9FD6";
        document.getElementById("arrsix").style.transform = "rotate(-90deg)";

    }
  }













function popdown(){
    document.getElementById("popup").style.display="none";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
  }

  function mondaypopup(){
    document.getElementById("allsubone").style.display="none";
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
    document.getElementById("popup").style.height="950px";
    document.getElementById("taskdayinner").innerText="MONDAY";
     document.querySelector(".phonepopupone").style.display="none";
    document.querySelector(".phonepopuptwo").style.display="none";
    document.querySelector(".phonepopupthree").style.display="none";
    document.querySelector(".phonepopupfour").style.display="none";
    document.querySelector(".phonepopupfive").style.display="none";
    document.querySelector(".phonepopupsix").style.display="none";

    document.getElementById("phonedownloadone").setAttribute("href","https://chatgpt.com/");
  

    

  }
  function tuesdaypopup(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
    document.getElementById("popup").style.height="950px";
    document.getElementById("taskdayinner").innerText="TUESDAY";
    document.getElementById("phonedownloadone").setAttribute("href","https://github.com/");
    document.querySelector(".phonepopupone").style.display="none";
    document.querySelector(".phonepopuptwo").style.display="none";
    document.querySelector(".phonepopupthree").style.display="none";
    document.querySelector(".phonepopupfour").style.display="none";
    document.querySelector(".phonepopupfive").style.display="none";
    document.querySelector(".phonepopupsix").style.display="none";

  }

  function wednesdaypopup(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
    document.getElementById("popup").style.height="950px";
    document.getElementById("taskdayinner").innerText="WEDNESDAY";
    document.querySelector(".phonepopupone").style.display="none";
    document.querySelector(".phonepopuptwo").style.display="none";
    document.querySelector(".phonepopupthree").style.display="none";
    document.querySelector(".phonepopupfour").style.display="none";
    document.querySelector(".phonepopupfive").style.display="none";
    document.querySelector(".phonepopupsix").style.display="none";

  }

 
  function thursdaypopup(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
    document.getElementById("popup").style.height="950px";
    document.getElementById("taskdayinner").innerText="THURSDAY";
    document.querySelector(".phonepopupone").style.display="flex";
    document.querySelector(".phonepopuptwo").style.display="flex";
    document.querySelector(".allsubparaphoneone").innerText="AIML lab";
    document.querySelector(".allsubparaphonetwo").innerText="DBMS lab";
    document.querySelector(".sidecontentparaphoneone").innerText="Write full lab observation";
    document.querySelector(".sidecontentparaphonetwo").innerText="Write 1st 4 program in observation";
    document.querySelector(".sidecontentdatephoneone").innerText="04.03.2025";
    document.querySelector(".sidecontentdatephonetwo").innerText="03.03.2025";
    document.querySelector("#phonedownloadone").setAttribute("href","https://www.youtube.com/");
    document.querySelector("#phonedownloadtwo").setAttribute("href","https://www.youtube.com/")
    
    document.querySelector(".phonepopupthree").style.display="none";
    document.querySelector(".phonepopupfour").style.display="none";
    document.querySelector(".phonepopupfive").style.display="none";
    document.querySelector(".phonepopupsix").style.display="none";


  }

 
  function fridaypopup(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
    document.getElementById("popup").style.height="950px";
    document.getElementById("taskdayinner").innerText="FRIDAY";
    document.querySelector(".phonepopupone").style.display="flex";
    document.querySelector(".phonepopuptwo").style.display="flex";
    document.querySelector(".allsubparaphoneone").innerText="DBMS";
    document.querySelector(".allsubparaphonetwo").innerText="Algorithms";
    document.querySelector(".sidecontentparaphoneone").innerText="Write the notes on the thing which out man though today which is from the PDF send by her";
    document.querySelector(".sidecontentparaphonetwo").innerText="Get the print out of the syllabus of AL and also colour print out of Big O notion pdf.";
    document.querySelector(".sidecontentdatephoneone").innerText="01.03.2025";
    document.querySelector(".sidecontentdatephonetwo").innerText="03.03.2025";
    document.querySelector("#phonedownloadone").setAttribute("href","https://aliabdaal.com/studying/");
    document.querySelector("#phonedownloadtwo").setAttribute("href","https://aliabdaal.com/studying/")
    document.querySelector(".phonepopupthree").style.display="none";
    document.querySelector(".phonepopupfour").style.display="none";
    document.querySelector(".phonepopupfive").style.display="none";
    document.querySelector(".phonepopupsix").style.display="none";

    

  }

 
  function saturdaypopup(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
    document.getElementById("popup").style.height="950px";
    document.getElementById("taskdayinner").innerText="SATURDAY";
    document.querySelector(".phonepopupone").style.display="none";
    document.querySelector(".phonepopuptwo").style.display="none";
    document.querySelector(".phonepopupthree").style.display="none";
    document.querySelector(".phonepopupfour").style.display="none";
    document.querySelector(".phonepopupfive").style.display="none";
    document.querySelector(".phonepopupsix").style.display="none";

  }

 
  function sundaypopup(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup").style.transition="0.4s all ease-in-out";
    document.getElementById("popup").style.height="950px";
    document.getElementById("taskdayinner").innerText="SUNDAY";
    document.querySelector(".phonepopupone").style.display="none";
    document.querySelector(".phonepopuptwo").style.display="none";
    document.querySelector(".phonepopupthree").style.display="none";
    document.querySelector(".phonepopupfour").style.display="none";
    document.querySelector(".phonepopupfive").style.display="none";
    document.querySelector(".phonepopupsix").style.display="none";

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

 

