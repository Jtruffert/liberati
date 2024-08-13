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

    // Vitesse de déplacement (5 fois plus lente)
    const speed = 0.01; // Réduit la vitesse

    // Paramètres pour le mouvement chaotique
    let time = Math.random() * 100; // Temps initial aléatoire pour éviter les chevauchements
    const freqX = Math.random() * 0.5 + 0.1; // Fréquence pour mouvement horizontal
    const freqY = Math.random() * 0.5 + 0.1; // Fréquence pour mouvement vertical
    const ampX = Math.random() * 5 + 5; // Amplitude pour mouvement horizontal
    const ampY = Math.random() * 5 + 5; // Amplitude pour mouvement vertical

    function animate() {
        // Déplacement horizontal et vertical basé sur plusieurs sinusoïdes
        x += speed;
        y += Math.sin(time * freqY) * ampY;

        // Rebondir sur les bords horizontaux
        if (x > 100 - (size / window.innerWidth * 100) || x < 0) {
            // Inverser la direction horizontale
            speed *= -1;
        }

        // Ajuster la position basée sur une combinaison de sinusoïdes
        img.style.left = x + 'vw';
        img.style.top = y + 'vh';

        // Incrémenter le temps pour le mouvement chaotique
        time += 0.05;

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
