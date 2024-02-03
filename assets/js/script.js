const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("close-button");

openMenu.addEventListener("click", () => {
  navbar.classList.add("nav-show");
});

closeMenu.addEventListener("click", () => {
  navbar.classList.remove("nav-show");
});
