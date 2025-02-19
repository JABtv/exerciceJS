let display = document.getElementById("display");

const boutons = document.querySelectorAll("button");

function c() {
  boutons.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      const valeur = bouton.value;

      if (valeur === "C") {
        display.value = "";
      } else if (valeur === "=") {
        // Calculer le résultat
        try {
          ecran.value = eval(ecran.value);
        } catch (error) {
          ecran.value = "Erreur";
        }
      } else {
        // Ajouter la valeur du bouton à l'écran
        ecran.value += valeur;
      }
    });
  });
}
