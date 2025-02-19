const menuHamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLink");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const btnRetour = document.getElementById("btnRetour");

btnRetour.addEventListener("click", () => {
  // Rediriger vers la page précédente
  window.history.back();
});
