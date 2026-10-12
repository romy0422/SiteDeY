
(async function () {
  try {
    const response = await fetch("./collections.json", {
      cache: "no-store"
    });

    if (!response.ok) {
      console.info("Aucun catalogue publié pour le moment.");
      return;
    }

    const catalogue = await response.json();

    if (!Array.isArray(catalogue)) {
      console.warn("Le catalogue doit être une liste de collections.");
      return;
    }

    // Le catalogue est chargé.
    // Il reste à le relier à l'affichage du site.
    window.catalogueIllumine = catalogue;

    console.info(
      "Catalogue chargé :",
      catalogue.length,
      "collections"
    );
  } catch (erreur) {
    console.warn("Impossible de charger le catalogue :", erreur);
  }
})();
