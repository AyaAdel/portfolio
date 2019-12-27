// select Items
const menuBtn = document.querySelector(".menu-btn"),
  menu = document.querySelector(".menu"),
  menuBranding = document.querySelector(".menu-branding"),
  menuNav = document.querySelector(".menu-nav"),
  navItem = document.querySelectorAll(".nav-item"),
  scrollTop = document.querySelector(".scroll-top a"),
  body = document.querySelector("body");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    body.classList.add("overflow");
    scrollTop.classList.add("visibility");
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    body.classList.remove("overflow");
    scrollTop.classList.remove("visibility");
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

window.addEventListener("scroll", toggleScrollTop);

function toggleScrollTop() {
  if (window.pageYOffset >= 100) {
    scrollTop.style.opacity = 1;
  } else {
    scrollTop.style.opacity = 0;
  }
}
