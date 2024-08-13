const container = document.querySelector('.container');

// Fonction pour créer une image de lettre flottante avec un mouvement chaotique
function createFloatingLetter(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'letter';

    // Taille 5 fois plus grande : entre 750px et 1500px
    const size = 1000;
    img.style.width = size + 'px';
    img.style.height = 'auto'; // Garde le ratio d'aspect correct

    // Position initiale aléatoire unique pour chaque lettre
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    let x = Math.random() * (containerWidth - size);
    let y = Math.random() * (containerHeight - size);
    img.style.left = x + 'px';
    img.style.top = y + 'px';

    container.appendChild(img);

    // Vitesse horizontale et verticale aléatoires entre deux bornes
    const minSpeed = 0.5; // Valeurs ajustées pour test
    const maxSpeed = 2;
    let speedX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    let speedY = Math.random() * (maxSpeed - minSpeed) + minSpeed;

    // Direction initiale aléatoire pour les deux axes
    if (Math.random() < 0.5) speedX *= -1;
    if (Math.random() < 0.5) speedY *= -1;

    // Fonction d'animation pour le mouvement chaotique
    function animate() {
        // Déplacement horizontal
        x += speedX;
        // Rebondir sur les bords horizontaux
        if (x > containerWidth - size || x < 0) speedX *= -1;
        // Déplacement vertical
        y += speedY;
        // Rebondir sur les bords verticaux
        if (y > containerHeight - size || y < 0) speedY *= -1;

        img.style.left = x + 'px';
        img.style.top = y + 'px';

        requestAnimationFrame(animate);
    }

    animate();
}

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

// Assurez-vous que les lettres ne se chevauchent pas au démarrage
function initialize() {
    images.forEach(src => createFloatingLetter(src));
}

initialize();

// Gestion des événements pour changement de couleur de fond
container.addEventListener('mouseover', () => {
    container.style.backgroundColor = '#0000ff'; // Bleu lorsque la souris est sur la div
});

container.addEventListener('mouseout', () => {
    container.style.backgroundColor = '#f0f0f0'; // Blanc lorsque la souris quitte la div
});
