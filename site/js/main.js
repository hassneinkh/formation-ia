// =========================================================
// Formation IA — script principal
// ---------------------------------------------------------
// Ce fichier est chargé sur toutes les pages.
// Pour l'instant, il ne fait qu'une chose : mettre en évidence
// la page actuelle dans le menu.
// Pendant la Phase 1 (JavaScript), c'est TOI qui ajouteras ici
// le suivi de progression et le journal.
// =========================================================

// 1. On récupère le nom du fichier de la page actuelle.
//    Exemple : ".../site/parcours.html" donne "parcours.html".
const pageActuelle = window.location.pathname.split("/").pop() || "index.html";

// 2. On récupère tous les liens du menu.
const liensMenu = document.querySelectorAll(".nav a");

// 3. Pour chaque lien, si son adresse finit par le nom de la page actuelle,
//    on lui ajoute la classe "actif" (le style est défini dans style.css).
liensMenu.forEach(function (lien) {
  const cible = lien.getAttribute("href").split("/").pop();
  if (cible === pageActuelle) {
    lien.classList.add("actif");
  }
});
