const hamburgerBtn = document.querySelector(".hamburger--collapse");
const navLinks = document.querySelector(".navbar__links");

hamburgerBtn.addEventListener("click", (e) => {
  hamburgerBtn.classList.toggle("isactive");
  navLinks.classList.toggle("isactive");
});
