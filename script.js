// On attend que la page soit chargée
window.onload = function() {
    // On récupère le bouton
    const button = document.getElementById("myButton");

    // On ajoute un événement au clic
    button.addEventListener("click", function() {
        // Génère une couleur aléatoire
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        // Change la couleur de fond du body
        document.body.style.backgroundColor = randomColor;
    });
};