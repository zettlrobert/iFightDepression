//Code here
function init() {
console.log("------->Script running!");
const d = document;

//Detect User Agent(Microsoft Internet Explorer and Redirect)
checkBrowser = function() {
  //Detect Modern Browser
    //@return "Netscape" for IE11, Firefox, Chrome and Safari
  let userBrowser = navigator.appName;


  if(userBrowser != "Netscape") {
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
      self.location = "http://outdatedbrowser.com/en"
    }
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
let dropDownButtons = d.getElementsByClassName("drop-down");
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
