const hamburgerBtn = document.querySelector(".hamburger--collapse");
const navLinks = document.querySelector(".navbar__links");
console.log(hamburgerBtn);

hamburgerBtn.addEventListener("click", (e) => {
  console.log(e);
  hamburgerBtn.classList.toggle("isactive");
  navLinks.classList.toggle("isactive");
});
