const menuIcon = document.querySelector("#menu-icon");
const menuMobile = document.querySelector(".menu-mobile");
const close = document.querySelector("#close");
menuIcon.addEventListener("click", function () {
  menuMobile.style.display = "block";
});
close.addEventListener("click", function () {
  menuMobile.style.display = "none";
});
