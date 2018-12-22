//Code here
function init() {
console.log("------->Script running!");
const d = document;

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

}
//Script gets executed after page is loaded
window.onload = init;
