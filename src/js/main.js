//Code here
function init() {
console.log("------->Script running!");
const d = document;

//Detect User Agent(Microsoft Internet Explorer and Redirect)
checkBrowser = function() {
  //Detect Modern Browser
    // !! --> Converts to boolean Value
    // check(Regular Expression) The userAgent String for the String "Trident" oder "MSIE"
    // is IE --> Trident TRUE || MSIE TRUE
    let isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

    if(isIE){
      window.location.href = "http://outdatedbrowser.com/de";
    }
    else{
     console.log("You are using a nice Browser");
    }

}
checkBrowser();


//Navigation
let menuButton = d.querySelector(".nav-icon");
let nav = d.querySelector(".m-main-nav");
let navItem = d.querySelectorAll(".nav-item-a");

toggleNavigation = function () {
  menuButton.addEventListener('click', function(){
    if(nav.style.right === "-100vw") {
      nav.style.right = "0";
    } else {
      nav.style.right = "-100vw";
    }
  })
}
toggleNavigation();

closeMenu = function () {
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', function(){
      // CLicked Navigaiton Point
      console.log("clicked" + navItem[i]);
      nav.style.right = "-100vw";
    })
  }
}
closeMenu();


//Dropdown Boxes
//Selectors
let dropDownButtons = d.getElementsByClassName("training-drop-down-box");
let dropDownContents = d.getElementsByClassName("drop-down-content");

for(let i = 0; i < dropDownButtons.length; i++) {
  dropDownButtons[i].addEventListener('click', function () {

    let currentContentBox = dropDownContents[i];
    //Display Content Function
    displayContent = function () {
      if(currentContentBox.style.visibility === "visible") {
        currentContentBox.style.visibility = "hidden";
        currentContentBox.style.height = "0px";

      } else {
        currentContentBox.style.visibility = "visible";
        currentContentBox.style.height = "auto";
      }
    }
    displayContent();

  })
}


}
//Script gets executed after page is loaded
window.onload = init;
