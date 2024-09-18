let myMedia = window.matchMedia("screen and (max-width: 440px)");

function ukuran(myMedia) {
  let imgDesktop = document.getElementById("imageHeroDesktop");
  if (myMedia.matches) {
    imgDesktop.src = "./images/image-hero-mobile.png";
    // imgDesktop.style.height = "20%"
  } else {
    imgDesktop.src = "./images/image-hero-desktop.png";
  }
}

myMedia.addEventListener("change",ukuran);

function contentDropdown() {
  let dropdown = document.getElementById("dropdown");
  let arrowDw = document.getElementById("arrowDw");

  dropdown.style.display = "block";
  arrowDw.src = "./images/icon-arrow-up.svg";
}

function closeDropdown() {
  let dropdown = document.getElementById("dropdown");
  let arrowDw = document.getElementById("arrowDw");

  dropdown.style.display = "none";
  arrowDw.src = "./images/icon-arrow-down.svg";
}

function contentDropdown2() {
  let dropdown2 = document.getElementById("dropdown2");
  let arrowDw2 = document.getElementById("arrowDw2");

  dropdown2.style.display = "block";
  arrowDw2.src = "./images/icon-arrow-up.svg";
}

function closeDropdown2() {
  let dropdown2 = document.getElementById("dropdown2");
  let arrowDw2 = document.getElementById("arrowDw2");

  dropdown2.style.display = "none";
  arrowDw2.src = "./images/icon-arrow-down.svg";
}
function openSide() {
  let sidebar = document.getElementById("sidebar");

  sidebar.style.marginLeft = "26%";
}
function closeSide() {
  let sidebar = document.getElementById("sidebar");

  sidebar.style.marginLeft = "100%";
}
function contentDropdown3() {
  let dropdown = document.getElementById("dropdown");
  let arrowDw = document.getElementById("arrowDw");

  dropdown.style.display = "block";
  arrowDw.src = "./images/icon-arrow-up.svg";
}
