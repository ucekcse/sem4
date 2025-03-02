const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (hamMenu.classList.contains('active')) {
        shownav();
        document.getElementById("mobile-view").style.display = "none";
        document.getElementById("popup").style.display = "none";
        document.getElementById("footer").style.display = "none";
    } else {
        closenav();
        document.getElementById("mobile-view").style.display = "flex";
        document.getElementById("popup").style.display = "none";
        document.getElementById("footer").style.display = "flex";
    }
});



var line = document.getElementById("navbar");
var text1 = document.getElementById("navtextone");
var text2 = document.getElementById("navtexttwo");
var text3 = document.getElementById("navtextthree");
var text4 = document.getElementById("navtextfour");
var line = document.getElementById("navbar");
line.style.width = "190px";

function homeline() {
    line.style.width = "100px";
    line.style.left = "0px";
    text1.style.color = "#8e98f7";
    text2.style.color = "#d0d9e0d7";
    text3.style.color = "#d0d9e0d7";
    text4.style.color = "#d0d9e0d7";
}

function assignline() {
    var line = document.getElementById("navbar");
    line.style.width = "190px";
    line.style.left = "125px";
    text2.style.color = "#8e98f7";
    text1.style.color = "#d0d9e0d7";
    text3.style.color = "#d0d9e0d7";
    text4.style.color = "#d0d9e0d7";
}

function taskline() {
    var line = document.getElementById("navbar");
    line.style.width = "100px";
    line.style.left = "340px";
    text3.style.color = "#8e98f7";
    text1.style.color = "#d0d9e0d7";
    text2.style.color = "#d0d9e0d7";
    text4.style.color = "#d0d9e0d7";
}

function aboutline() {
    var line = document.getElementById("navbar");
    line.style.width = "100px";
    line.style.left = "470px";
    text4.style.color = "#8e98f7";
    text2.style.color = "#d0d9e0d7";
    text3.style.color = "#d0d9e0d7";
}

line.style.width = "190px";
text2.style.color = "#8e98f7";
text1.style.color = "#d0d9e0d7";

function resetNavBarStyles() {
    const mobilenav = document.getElementById("mobilenavwhole");
    if (window.innerWidth < 900) {
        mobilenav.style.display = "none";
    } else {
        mobilenav.style.display = "none";
    }
}

var mobilenav = document.getElementById("mobilenavwhole");

function closenav() {
    mobilenav.style.opacity = "0";
    setTimeout(() => {
        mobilenav.style.display = "none";
    }, 500);
    document.getElementById("hilogo").style.display = "flex";
}

function shownav() {
    mobilenav.style.display = "flex";
    setTimeout(() => {
        mobilenav.style.opacity = "1";
    }, 10);
    mobilenav.style.transition = "0.5s";
    document.getElementById("hilogo").style.display = "none";
}

window.addEventListener("resize", resetNavBarStyles);
resetNavBarStyles();

function expandonepop() {
    if (document.getElementById("allsubsidehidepopone") && document.getElementById("allsubsidehidepopone").style.display === "none") {
        document.getElementById("arrowone").style.transform = "rotate(0deg)";
        document.getElementById("allsubsidehidepopone").style.display = "flex";
        document.getElementById("allsubsidehide").style.flexDirection = "column";
        document.getElementById("allsubsidehide").style.transition = "0.4s all ease-in-out";
        document.getElementById("allsubsidehidetwo").style.display = "none";
        document.getElementById("allsubone").style.borderBottom = "0px solid #9F9FD6";
        document.getElementById("allsubtwo").style.borderBottom = "5px solid #9F9FD6";
    } else if (document.getElementById("allsubsidehidepopone")) {
        document.getElementById("allsubsidehidepopone").style.display = "none";
        document.getElementById("allsubone").style.borderBottom = "5px solid #9F9FD6";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";
    }
}


function togglePopup() {
    const popup = document.getElementById("popup");
    const arrow = document.getElementById("sliderarrow");
    if (popup.classList.contains("show")) {
        popup.classList.remove("show");
        popup.classList.add("hide");
        arrow.style.transform = "translate(-50%, -50%) rotate(-180deg)";
        setTimeout(() => {
            popup.style.display = "none";
        }, 600); 
    } else {
        popup.style.display = "flex";
        popup.classList.remove("hide");
        popup.classList.add("show");
        arrow.style.transform = "translate(-50%, -50%) rotate(0deg)"; 
    }
}

function mondaypopup() {
    const popup = document.getElementById("popup"); 
    popup.style.display = "flex";
    popup.classList.remove("hide");
    popup.classList.add("show");
    document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)"; 
   // document.querySelector(".sidecontentsubname").innerText="TOC"; 
   // document.querySelector(".sidecontentdaydate").innerText="MONDAY ‎ ‎ ‎28.02.2025";
   // document.querySelector(".sidecontentpara").innerText="Nothing to do"; 
   // document.querySelector(".sidecontentdate").innerText="--"; 
   // document.querySelector(".sidecontentdownload").setAttribute("href","https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg") 
   document.querySelector(".sidecontentdaydate").innerText="Nothing to do";
   document.querySelector(".sidecontentsubname").style.display="none";
   document.querySelector(".sidecontentwork").style.display="none";
   document.querySelector(".sidecontentpara").style.display="none";
   document.querySelector(".sidecontentdeadline").style.display="none"; 
   document.querySelector(".sidecontentdate").style.display="none";
   document.querySelector(".sidecontentsource").style.display="none";
   document.querySelector(".sidecontentdownload").style.display="none";



}

function tuesdaypopup() {
    const popup = document.getElementById("popup"); 
    popup.style.display = "flex";
    popup.classList.remove("hide");
    popup.classList.add("show");
    document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)"; 
   // document.querySelector(".sidecontentsubname").innerText="AIML"; 
    //document.querySelector(".sidecontentdaydate").innerText="TUESDAY ‎ ‎ ‎28.02.2025";
    //document.querySelector(".sidecontentpara").innerText="Nothing to do"; 
    //document.querySelector(".sidecontentdate").innerText="--"; 
    //document.querySelector(".assignmentdownload").setAttribute("href","https://ucekcse.github.io/sem4/task.html");
    document.querySelector(".sidecontentdaydate").innerText="Nothing to do";
   document.querySelector(".sidecontentsubname").style.display="none";
   document.querySelector(".sidecontentwork").style.display="none";
   document.querySelector(".sidecontentpara").style.display="none";
   document.querySelector(".sidecontentdeadline").style.display="none"; 
   document.querySelector(".sidecontentdate").style.display="none";
   document.querySelector(".sidecontentsource").style.display="none";
   document.querySelector(".sidecontentdownload").style.display="none"; 

}

function wednesdaypopup() {
    const popup = document.getElementById("popup"); 
    popup.style.display = "flex";
    popup.classList.remove("hide");
    popup.classList.add("show");
    document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)"; 
   // document.querySelector(".sidecontentsubname").innerText="AIML"; 
    //document.querySelector(".sidecontentdaydate").innerText="TUESDAY ‎ ‎ ‎28.02.2025";
    //document.querySelector(".sidecontentpara").innerText="Nothing to do"; 
    //document.querySelector(".sidecontentdate").innerText="--"; 
    //document.querySelector(".assignmentdownload").setAttribute("href","https://ucekcse.github.io/sem4/task.html");
    document.querySelector(".sidecontentdaydate").innerText="Nothing to do";
   document.querySelector(".sidecontentsubname").style.display="none";
   document.querySelector(".sidecontentwork").style.display="none";
   document.querySelector(".sidecontentpara").style.display="none";
   document.querySelector(".sidecontentdeadline").style.display="none"; 
   document.querySelector(".sidecontentdate").style.display="none";
   document.querySelector(".sidecontentsource").style.display="none";
   document.querySelector(".sidecontentdownload").style.display="none"; 

}

function thursdaypopup() {
    const popup = document.getElementById("popup"); 
    popup.style.display = "flex";
    popup.classList.remove("hide");
    popup.classList.add("show");
    document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)"; 
   // document.querySelector(".sidecontentsubname").innerText="AIML"; 
    //document.querySelector(".sidecontentdaydate").innerText="TUESDAY ‎ ‎ ‎28.02.2025";
    //document.querySelector(".sidecontentpara").innerText="Nothing to do"; 
    //document.querySelector(".sidecontentdate").innerText="--"; 
    //document.querySelector(".assignmentdownload").setAttribute("href","https://ucekcse.github.io/sem4/task.html");
    document.querySelector(".sidecontentdaydate").innerText="Nothing to do";
   document.querySelector(".sidecontentsubname").style.display="none";
   document.querySelector(".sidecontentwork").style.display="none";
   document.querySelector(".sidecontentpara").style.display="none";
   document.querySelector(".sidecontentdeadline").style.display="none"; 
   document.querySelector(".sidecontentdate").style.display="none";
   document.querySelector(".sidecontentsource").style.display="none";
   document.querySelector(".sidecontentdownload").style.display="none"; 

}
function fridaypopup() {
    const popup = document.getElementById("popup"); 
    popup.style.display = "flex";
    popup.classList.remove("hide");
    popup.classList.add("show");
    document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)"; 
   // document.querySelector(".sidecontentsubname").innerText="aa"; 
    //document.querySelector(".sidecontentdaydate").innerText="TUESDAY ‎ ‎ ‎28.02.2025";
    //document.querySelector(".sidecontentpara").innerText="Nothing to do"; 
   // document.querySelector(".sidecontentdate").innerText="--"; 
   // document.querySelector(".assignmentdownload").setAttribute("href","https://ucekcse.github.io/sem4/task.html");
   document.querySelector(".sidecontentdaydate").innerText="Nothing to do";
   document.querySelector(".sidecontentsubname").style.display="none";
   document.querySelector(".sidecontentwork").style.display="none";
   document.querySelector(".sidecontentpara").style.display="none";
   document.querySelector(".sidecontentdeadline").style.display="none"; 
   document.querySelector(".sidecontentdate").style.display="none";
   document.querySelector(".sidecontentsource").style.display="none";
   document.querySelector(".sidecontentdownload").style.display="none";

}
function saturdaypopup() {
    const popup = document.getElementById("popup"); 
    popup.style.display = "flex";
    popup.classList.remove("hide");
    popup.classList.add("show");
    document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)"; 
  // document.querySelector(".sidecontentsubname").innerText="EVS"; 
    //document.querySelector(".sidecontentdaydate").innerText="TUESDAY ‎ ‎ ‎28.02.2025";
//document.querySelector(".sidecontentpara").innerText="Nothing to do"; 
   // document.querySelector(".sidecontentdate").innerText="22/22/2222"; 
   // document.querySelector(".assignmentdownload").setAttribute("") ;
   document.querySelector(".sidecontentdaydate").innerText="Nothing to do";
   document.querySelector(".sidecontentsubname").style.display="none";
   document.querySelector(".sidecontentwork").style.display="none";
   document.querySelector(".sidecontentpara").style.display="none";
   document.querySelector(".sidecontentdeadline").style.display="none"; 
   document.querySelector(".sidecontentdate").style.display="none";
   document.querySelector(".sidecontentsource").style.display="none";
   document.querySelector(".sidecontentdownload").style.display="none";


}