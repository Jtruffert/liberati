const container = document.querySelector('.container');

// Liste des images
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
];

// Initialisation du système
function initialize() {
    console.log("initialize");
    images.forEach(src => createFloatingLetter(src));
    animateLetters(); // Démarre l'animation après l'initialisation
}

// Crée une image de lettre flottante avec position initiale
function createFloatingLetter(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'letter';

    // Définir la taille de l'image
    const size = 1000;
    img.style.width = size + 'px';
    img.style.height = 'auto';
    img.style.position = 'absolute';

    // Position initiale aléatoire
    positionLetterRandomly(img, size);

    // Ajouter l'image au conteneur
    container.appendChild(img);

    // Enregistre la position initiale pour l'animation
    saveInitialPosition(img);
}

// Positionne l'image de manière aléatoire dans le conteneur
function positionLetterRandomly(img, size) {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const x = Math.random() * (containerWidth - size);
    const y = Math.random() * (containerHeight - size);
    
    img.style.left = x + 'px';
    img.style.top = y + 'px';
}

// Enregistre la position initiale de l'image
function saveInitialPosition(img) {
    img.dataset.originalTop = parseFloat(img.style.top);
}

// Anime les lettres de manière sinusoïdale
function animateLetters() {
    const letters = document.querySelectorAll('.letter');
    let startTime = null;

    function step(time) {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;

        letters.forEach((img, index) => {
            updateLetterPosition(img, elapsed, index);
        });

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

// Met à jour la position d'une lettre pour créer un mouvement sinusoïdal
function updateLetterPosition(img, elapsed, index) {
    const amplitude = 50; // Amplitude du mouvement en pixels
    const speed = 0.002;  // Vitesse du mouvement
    const originalTop = parseFloat(img.dataset.originalTop);

    // Calcule la nouvelle position en y en utilisant une fonction sinusoïdale
    const newY = originalTop + amplitude * Math.sin(speed * elapsed + index);

    img.style.top = newY + 'px';
}

// Démarrage de l'initialisation
initialize();

// // Gestion des événements pour changement de couleur de fond et centrage des lettres
// container.addEventListener('mouseenter', () => {
//     container.style.backgroundColor = '#0000ff'; // Bleu lorsque la souris est sur la div
//     // Réinitialisation de la transformation pour chaque lettre
//     document.querySelectorAll('.letter').forEach(img => {
//         img.style.transition = 'none'; // Désactive la transition temporairement
//         img.style.transform = ''; // Supprime la transformation en cours
//         img.offsetHeight; // Force un reflow pour garantir la réinitialisation
//         img.style.transition = 'transform 1s ease'; // Réactive la transition
//     });
//     centerLetters();
// });


// container.addEventListener('mouseleave', () => {
//     container.style.backgroundColor = '#f0f0f0'; // Blanc lorsque la souris quitte la div
//     // Réinitialisation de la transformation pour chaque lettre
//     document.querySelectorAll('.letter').forEach(img => {
//         img.style.transform = ''; // Supprime la transformation
//         img.offsetHeight; // Forcer un reflow pour garantir que la réinitialisation est prise en compte
//     });
// });


// function startSinusoidalAnimation() {
//     // Si une animation est déjà en cours, ne rien faire
//     if (animationInterval) return;

//     const amplitude = 20; // Amplitude du mouvement
//     const frequency = 0.05; // Fréquence du mouvement

//     // Démarre l'animation à intervalle régulier
//     animationInterval = setInterval(() => {
//         document.querySelectorAll('.letter').forEach((img, index) => {
//             const now = Date.now();
//             const offsetX = amplitude * Math.sin(frequency * now + index);
//             const offsetY = amplitude * Math.cos(frequency * now + index);
//             img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
//         });
//     }, 1000 / 60); // 60 FPS
// }

// startSinusoidalAnimation();