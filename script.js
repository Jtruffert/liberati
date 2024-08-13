const container = document.querySelector('.container');

// Fonction pour créer une image de lettre flottante avec un mouvement chaotique
function createFloatingLetter(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'letter';

    // Taille 5 fois plus grande : entre 750px et 1500px
    const size = Math.random() * 750 + 750;
    img.style.width = size + 'px';
    img.style.height = 'auto'; // Garde le ratio d'aspect correct

    // Position initiale aléatoire unique pour chaque lettre
    let x = Math.random() * (100 - (size / window.innerWidth * 100));
    let y = Math.random() * (100 - (size / window.innerHeight * 100));
    img.style.left = x + 'vw';
    img.style.top = y + 'vh';

    container.appendChild(img);

    // Vitesse horizontale aléatoire entre deux bornes
    const minSpeed = 0.005;
    const maxSpeed = 0.02;
    let speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;

    // Direction initiale aléatoire
    if (Math.random() < 0.5) {
        speed *= -1;
    }

    // Paramètres pour le mouvement vertical
    let time = Math.random() * 100; // Temps initial aléatoire pour éviter les chevauchements
    const freqY = Math.random() * 0.1 + 0.05; // Fréquence pour mouvement vertical
    const ampY = Math.random() * 5 + 5; // Amplitude pour mouvement vertical

    function animate() {
        // Déplacement horizontal
        x += speed;

        // Rebondir sur les bords horizontaux
        if (x > 100 - (size / window.innerWidth * 100)) {
            x = 100 - (size / window.innerWidth * 100); // Réinitialiser pour éviter de sortir du cadre
            speed *= -1; // Inverser la direction horizontale
        } else if (x < 0) {
            x = 0; // Réinitialiser pour éviter de sortir du cadre
            speed *= -1; // Inverser la direction horizontale
        }

        // Déplacement vertical basé sur une fonction sinusoïdale pour un mouvement fluide
        y += Math.sin(time * freqY) * 0.5; // Ajuster l'amplitude pour un mouvement vertical fluide
        time += 0.02; // Ajuster le temps pour un mouvement plus fluide

        // Assurer que les lettres restent dans le cadre verticalement
        if (y > 100 - (size / window.innerHeight * 100)) {
            y = 100 - (size / window.innerHeight * 100); // Limite le maximum de `y`
        } else if (y < 0) {
            y = 0; // Limite le minimum de `y`
        }

        img.style.left = x + 'vw';
        img.style.top = y + 'vh';

        requestAnimationFrame(animate);
    }

    animate();
}

// Définir les images avec les vraies lettres
const images = [
    "images/A.png",
    "images/B.png",
    "images/E.png",
    "images/I.png",
    "images/I2.png",
    "images/L.png",
    "images/R.png",
    "images/T.png",
    "images/W1.png",
    "images/W2.png",
    // Ajoutez ici les chemins de toutes vos images de lettres
];

// Assurez-vous que les lettres ne se chevauchent pas au démarrage
function initialize() {
    images.forEach(src => createFloatingLetter(src));
}

initialize();
