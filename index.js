const hamburgerBtn = document.querySelector(".hamburger--collapse");
const navLinks = document.querySelector(".navbar__links");
const header = document.querySelector(".header");
const services = document.querySelector(".body_services");

hamburgerBtn.addEventListener("click", (e) => {
  hamburgerBtn.classList.toggle("isactive");
  navLinks.classList.toggle("isactive");
  header.classList.toggle("isactive");
  services.classList.toggle("isactive");
});
