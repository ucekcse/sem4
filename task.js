const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    if (hamMenu.classList.contains('active')) {
        shownav();
        document.getElementById("taskmobile").style.display = "none";
        document.getElementById("popup").style.display = "none";
        document.getElementById("footer").style.display = "none";
    } else {
        closenav();
        document.getElementById("taskmobile").style.display = "flex";
        document.getElementById("popup").style.display = "none";
        document.getElementById("footer").style.display = "flex";
    }
});

var line = document.getElementById("navbar");
var text1 = document.getElementById("navtextone");
var text2 = document.getElementById("navtexttwo");
var text3 = document.getElementById("navtextthree");
var text4 = document.getElementById("navtextfour");
var box1 = document.getElementById("contentbox1");
var daysmall = document.getElementById("daysmall");
var subsmall = document.getElementById("subsmall");
var datedetail = document.querySelectorAll(".date");
var daydetail = document.querySelectorAll(".daydetail");
var taskmain = document.getElementById("taskmain");
var taskside = document.getElementById("taskside");

function homeline() {
    line.style.width = "100px";
    line.style.left = "0px";
    text1.style.color = "#8e98f7";
    text2.style.color = "#d0d9e0d7";
    text3.style.color = "#d0d9e0d7";
    text4.style.color = "#d0d9e0d7";
}

function assignline() {
    line.style.width = "190px";
    line.style.left = "125px";
    text2.style.color = "#8e98f7";
    text1.style.color = "#d0d9e0d7";
    text3.style.color = "#d0d9e0d7";
    text4.style.color = "#d0d9e0d7";
}

function taskline() {
    line.style.width = "100px";
    line.style.left = "340px";
    text3.style.color = "#8e98f7";
    text1.style.color = "#d0d9e0d7";
    text2.style.color = "#d0d9e0d7";
    text4.style.color = "#d0d9e0d7";
}

function aboutline() {
    line.style.width = "100px";
    line.style.left = "470px";
    text4.style.color = "#8e98f7";
    text1.style.color = "#d0d9e0d7";
    text2.style.color = "#d0d9e0d7";
    text3.style.color = "#d0d9e0d7";
}

text1.style.color = "#d0d9e0d7";
text3.style.color = "#8e98f7";
line.style.width = "100px";
line.style.left = "340px";

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
    document.getElementById("taskmobile").style.display = "flex";
    document.getElementById("footer").style.display = "flex";
}

function shownav() {
    mobilenav.style.display = "flex";
    setTimeout(() => {
        mobilenav.style.opacity = "1";
    }, 10);
    document.getElementById("hilogo").style.display = "none";
}

window.addEventListener("resize", resetNavBarStyles);
resetNavBarStyles();

function resetPopupContent() {
    document.querySelector(".allsubparaphoneone").innerText = "";
    document.querySelector(".allsubparaphonetwo").innerText = "";
    document.querySelector(".sidecontentparaphoneone").innerText = "";
    document.querySelector(".sidecontentparaphonetwo").innerText = "";
    document.querySelector(".sidecontentdatephoneone").innerText = "";
    document.querySelector(".sidecontentdatephonetwo").innerText = "";
    document.querySelector("#phonedownloadone").setAttribute("href", "");
    document.querySelector("#phonedownloadtwo").setAttribute("href", "");
    document.querySelector(".phonepopupone").style.display = "none";
    document.querySelector(".phonepopuptwo").style.display = "none";
    document.querySelector(".phonepopupthree").style.display = "none";
    document.querySelector(".phonepopupfour").style.display = "none";
    document.querySelector(".phonepopupfive").style.display = "none";
    document.querySelector(".phonepopupsix").style.display = "none";
    document.getElementById("allsubsidehidepopone").style.display = "none";
    document.getElementById("allsubsidehidepoptwo").style.display = "none";
    document.getElementById("allsubsidehidepopthree").style.display = "none";
    document.getElementById("allsubsidehidepopfour").style.display = "none";
    document.getElementById("allsubsidehidepopfive").style.display = "none";
    document.getElementById("allsubsidehidepopsix").style.display = "none";
document.getElementById("arrtwo").style.transform = "rotate(-90deg)";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";
        document.getElementById("arrsix").style.transform = "rotate(-90deg)";
        document.getElementById("arrfour").style.transform = "rotate(-90deg)";
        document.getElementById("arrfive").style.transform = "rotate(-90deg)";
}

function updateSidebar(subject, task, dayDate, deadline, downloadLink) {
    if (window.innerWidth > 630) {
        taskmain.style.width = "910px";
        taskmain.style.height = "500px";
        taskmain.style.marginLeft = "33px";
        taskside.style.display = "flex";
        document.getElementById("sidehidden").style.display = "flex";
        taskmain.classList.add('taskcontentsmall');
        box1.classList.add('rowsmall');
        daysmall.style.left = "20px";
        subsmall.style.top = "2px";
        subsmall.style.right = "3px";
        daysmall.style.bottom = "2px";
        datedetail.forEach(element => element.style.fontSize = '21px');
        daydetail.forEach(element => element.style.fontSize = '18px');
        document.getElementById("daysmall").style.fontSize = "18px";
        document.getElementById("subsmall").style.fontSize = "18px";
        document.getElementById("allsubside").style.display = "none";
        document.getElementById("taskmain").style.marginRight = "30%";
        document.querySelector(".sidecontentsubname").innerText = subject;
        document.querySelector(".minorboxpara").innerText = task;
        document.querySelector(".sidecontentdaydate").innerText = dayDate;
        document.querySelector(".minorboxdate").innerText = deadline;
        document.querySelector(".downloadminor").setAttribute("href", downloadLink);
    }
}

function shrinkrowthreetwo() {
    updateSidebar("TOC","Finish today's Homework", "TUESDAY 04.03.2025", "06.03.2025", "https://drive.google.com/file/d/12ww4ni_drQUgopMLHdgoy24gr4joFBmh/view?usp=drive_link");
}

function shrinkrowthreefive() {
    updateSidebar("IOS lab","Write experiments till 4A,4B", "TUESDAY 04.03.2025", "05.03.2025", "https://drive.google.com/file/d/1-pGfrSVHRHqth14F7ZRKOpnJlFJSUiZa/view?usp=drive_link");
}




function expandonepop() {
    if (document.getElementById("allsubsidehidepopone").style.display === "none") {
        document.getElementById("allsubsidehidepopone").style.display = "flex";
        document.getElementById("allsubsidehidepoptwo").style.display = "none";
        document.getElementById("allsubsidehidepopthree").style.display = "none";
        document.getElementById("allsubsidehidepopfour").style.display = "none";
        document.getElementById("allsubsidehidepopfive").style.display = "none";
        document.getElementById("allsubsidehidepopsix").style.display = "none";
        document.getElementById("arrowone").style.transform = "rotate(0deg)";
        document.getElementById("arrtwo").style.transform = "rotate(-90deg)";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";
        document.getElementById("arrsix").style.transform = "rotate(-90deg)";
        document.getElementById("arrfour").style.transform = "rotate(-90deg)";
        document.getElementById("arrfive").style.transform = "rotate(-90deg)";
    } else {
        document.getElementById("allsubsidehidepopone").style.display = "none";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";
    }
}

function expandtwopop() {
    if (document.getElementById("allsubsidehidepoptwo").style.display === "none") {
        document.getElementById("allsubsidehidepopone").style.display = "none";
        document.getElementById("allsubsidehidepoptwo").style.display = "flex";
        document.getElementById("allsubsidehidepopthree").style.display = "none";
        document.getElementById("allsubsidehidepopfour").style.display = "none";
        document.getElementById("allsubsidehidepopfive").style.display = "none";
        document.getElementById("allsubsidehidepopsix").style.display = "none";
        document.getElementById("arrtwo").style.transform = "rotate(0deg)";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";
        document.getElementById("arrsix").style.transform = "rotate(-90deg)";
        document.getElementById("arrfour").style.transform = "rotate(-90deg)";
        document.getElementById("arrfive").style.transform = "rotate(-90deg)";
    } else {
        document.getElementById("allsubsidehidepoptwo").style.display = "none";
        document.getElementById("arrtwo").style.transform = "rotate(-90deg)";
    }
}

function expandthreepop() {
    if (document.getElementById("allsubsidehidepopthree").style.display === "none") {
        document.getElementById("allsubsidehidepopone").style.display = "none";
        document.getElementById("allsubsidehidepoptwo").style.display = "none";
        document.getElementById("allsubsidehidepopthree").style.display = "flex";
        document.getElementById("allsubsidehidepopfour").style.display = "none";
        document.getElementById("allsubsidehidepopfive").style.display = "none";
        document.getElementById("allsubsidehidepopsix").style.display = "none";
        document.getElementById("arrthree").style.transform = "rotate(0deg)";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";
        document.getElementById("arrtwo").style.transform = "rotate(-90deg)";
        document.getElementById("arrsix").style.transform = "rotate(-90deg)";
        document.getElementById("arrfour").style.transform = "rotate(-90deg)";
        document.getElementById("arrfive").style.transform = "rotate(-90deg)";
    } else {
        document.getElementById("allsubsidehidepopthree").style.display = "none";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";
    }
}

function expandfourpop() {
    if (document.getElementById("allsubsidehidepopfour").style.display === "none") {
        document.getElementById("allsubsidehidepopone").style.display = "none";
        document.getElementById("allsubsidehidepoptwo").style.display = "none";
        document.getElementById("allsubsidehidepopthree").style.display = "none";
        document.getElementById("allsubsidehidepopfour").style.display = "flex";
        document.getElementById("allsubsidehidepopfive").style.display = "none";
        document.getElementById("allsubsidehidepopsix").style.display = "none";
        document.getElementById("arrfour").style.transform = "rotate(0deg)";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";
        document.getElementById("arrtwo").style.transform = "rotate(-90deg)";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";
        document.getElementById("arrsix").style.transform = "rotate(-90deg)";
        document.getElementById("arrfive").style.transform = "rotate(-90deg)";
    } else {
        document.getElementById("allsubsidehidepopfour").style.display = "none";
        document.getElementById("arrfour").style.transform = "rotate(-90deg)";
    }
}

function expandfivepop() {
    if (document.getElementById("allsubsidehidepopfive").style.display === "none") {
        document.getElementById("allsubsidehidepopone").style.display = "none";
        document.getElementById("allsubsidehidepoptwo").style.display = "none";
        document.getElementById("allsubsidehidepopthree").style.display = "none";
        document.getElementById("allsubsidehidepopfour").style.display = "none";
        document.getElementById("allsubsidehidepopfive").style.display = "flex";
        document.getElementById("allsubsidehidepopsix").style.display = "none";
        document.getElementById("arrfive").style.transform = "rotate(0deg)";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";
        document.getElementById("arrtwo").style.transform = "rotate(-90deg)";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";
        document.getElementById("arrfour").style.transform = "rotate(-90deg)";
        document.getElementById("arrsix").style.transform = "rotate(-90deg)";
    } else {
        document.getElementById("allsubsidehidepopfive").style.display = "none";
        document.getElementById("arrfive").style.transform = "rotate(-90deg)";
    }
}

function expandsixpop() {
    if (document.getElementById("allsubsidehidepopsix").style.display === "none") {
        document.getElementById("allsubsidehidepopone").style.display = "none";
        document.getElementById("allsubsidehidepoptwo").style.display = "none";
        document.getElementById("allsubsidehidepopthree").style.display = "none";
        document.getElementById("allsubsidehidepopfour").style.display = "none";
        document.getElementById("allsubsidehidepopfive").style.display = "none";
        document.getElementById("allsubsidehidepopsix").style.display = "flex";
        document.getElementById("arrsix").style.transform = "rotate(0deg)";
        document.getElementById("arrowone").style.transform = "rotate(-90deg)";
        document.getElementById("arrtwo").style.transform = "rotate(-90deg)";
        document.getElementById("arrthree").style.transform = "rotate(-90deg)";
        document.getElementById("arrfour").style.transform = "rotate(-90deg)";
        document.getElementById("arrfive").style.transform = "rotate(-90deg)";
    } else {
        document.getElementById("allsubsidehidepopsix").style.display = "none";
        document.getElementById("arrsix").style.transform = "rotate(-90deg)";
    }
}

function mondaypopup() {
    if (window.innerWidth <= 630) {
        resetPopupContent();
        document.getElementById("popup").style.display = "flex";
        document.getElementById("taskdayinner").innerText = "‎";
        document.getElementById("taskdateinner").innerText = "Nothing To Do";
        const popup = document.getElementById("popup");
        popup.classList.remove("hide");
        popup.classList.add("show");
        document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)";
    }
}

function tuesdaypopup() {
    if (window.innerWidth <= 630) {
        resetPopupContent();
        document.getElementById("popup").style.display = "flex";
        document.getElementById("taskdayinner").innerText = "TUESDAY";
        document.getElementById("taskdateinner").innerText = "04.03.2025";
        document.querySelector(".phonepopupone").style.display = "flex";
        document.querySelector(".phonepopuptwo").style.display = "flex";
        document.querySelector(".allsubparaphoneone").innerText = "TOC";
        document.querySelector(".allsubparaphonetwo").innerText = "IOS lab";
        document.querySelector(".sidecontentparaphoneone").innerText = "Finish today's Homework";
        document.querySelector(".sidecontentparaphonetwo").innerText = "Write experiments till 4A,4B";
        document.querySelector(".sidecontentdatephoneone").innerText = "06.03.2025";
        document.querySelector(".sidecontentdatephonetwo").innerText = "05.03.2025";
        document.querySelector("#phonedownloadone").setAttribute("href", "https://drive.google.com/file/d/12ww4ni_drQUgopMLHdgoy24gr4joFBmh/view?usp=drive_link");
        document.querySelector("#phonedownloadtwo").setAttribute("href", "https://drive.google.com/file/d/1-pGfrSVHRHqth14F7ZRKOpnJlFJSUiZa/view");
        const popup = document.getElementById("popup");
        popup.classList.remove("hide");
        popup.classList.add("show");
        document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)";
    }
}

function wednesdaypopup() {
    if (window.innerWidth <= 630) {
        resetPopupContent();
        document.getElementById("popup").style.display = "flex";
        document.getElementById("taskdayinner").innerText = "‎";
        document.getElementById("taskdateinner").innerText = "Nothing To Do";
        const popup = document.getElementById("popup");
        popup.classList.remove("hide");
        popup.classList.add("show");
        document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)";
    }
}

function thursdaypopup() {
    if (window.innerWidth <= 630) {
        resetPopupContent();
        document.getElementById("popup").style.display = "flex";
        document.getElementById("taskdayinner").innerText = "‎";
        document.getElementById("taskdateinner").innerText = "Nothing To Do";
       
        const popup = document.getElementById("popup");
        popup.classList.remove("hide");
        popup.classList.add("show");
        document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)";
    }
}

function fridaypopup() {
    if (window.innerWidth <= 630) {
        resetPopupContent();
        document.getElementById("popup").style.display = "flex";
        document.getElementById("taskdayinner").innerText = "‎";
        document.getElementById("taskdateinner").innerText = "Nothing To Do";
        const popup = document.getElementById("popup");
        popup.classList.remove("hide");
        popup.classList.add("show");
        document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)";
    }
}

function saturdaypopup() {
    if (window.innerWidth <= 630) {
        resetPopupContent();
        document.getElementById("popup").style.display = "flex";
        document.getElementById("taskdayinner").innerText = "‎";
        document.getElementById("taskdateinner").innerText = "Nothing To Do";
        
        const popup = document.getElementById("popup");
        popup.classList.remove("hide");
        popup.classList.add("show");
        document.getElementById("sliderarrow").style.transform = "translate(-50%, -50%) rotate(0deg)";
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
            resetPopupContent();
        }, 600);
    } else {
        popup.style.display = "flex";
        popup.classList.remove("hide");
        popup.classList.add("show");
        arrow.style.transform = "translate(-50%, -50%) rotate(0deg)";
    }
}