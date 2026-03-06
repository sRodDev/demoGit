/* Bouton retour à l'accueil */

document.querySelector(".retour-accueil")?.addEventListener("click", () => {
  window.location.href = "index.html";
});

/* Thème clair ou sombre */

function choixTheme(theme){
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
}

function initialiserTheme(){
  const themeChoisi = localStorage.getItem("theme");
  let themeDefaut;
  if (themeChoisi !== null) {
    themeDefaut = themeChoisi;
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      themeDefaut = "dark";
    } else {
      themeDefaut = "light";
    }
  }

  // appliquer le thème
  choixTheme(themeDefaut);

  document.querySelectorAll('input[name="theme"]').forEach(radio => {
    radio.addEventListener("change", () => choixTheme(radio.value));
  });

}

document.addEventListener("DOMContentLoaded", initialiserTheme);
 
fetch("promo.json")
.then(response => response.json())
.then(data => {
    const liste = document.getElementById("liste-apprenants")
    data.apprenants.forEach(apprenant => {
        const li = document.createElement("li");

        li.textContent =
        apprenant.nom + " " +
        apprenant.prenom + " " +
        apprenant.ville;

        liste.appendChild(li);
    })
});