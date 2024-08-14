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
    console.log("initialize")
    images.forEach(src => createFloatingLetter(src));
}

initialize();

// Fonction pour centrer les lettres au centre de la div avec une animation fluide
function centerLetters() {
    console.log("centerLetter")
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    document.querySelectorAll('.letter').forEach(img => {
        const imgRect = img.getBoundingClientRect();
        const imgWidth = imgRect.width;
        const imgHeight = imgRect.height;

        // Position actuelle de l'image dans la div
        const imgLeft = imgRect.left - containerRect.left;
        const imgTop = imgRect.top - containerRect.top;

        // Calcul du centre de l'image
        const imgCenterX = imgLeft + imgWidth / 2;
        const imgCenterY = imgTop + imgHeight / 2;

        // Calcul du déplacement nécessaire pour centrer l'image
        const translateX = centerX - imgCenterX;
        const translateY = centerY - imgCenterY;

        // Déplacement vers le centre
        img.style.transition = 'transform 1s ease'; // Transition lisse pour le centrage
        img.style.transform = `translate(${translateX}px, ${translateY}px)`;
        // img.style.left = `${centerX - imgWidth / 2}px`; // Alignement du centre de l'image avec le centre de la div
        // img.style.top = `${centerY - imgHeight / 2}px`;
    });
}

// Gestion des événements pour changement de couleur de fond et centrage des lettres
container.addEventListener('mouseenter', () => {
    container.style.backgroundColor = '#0000ff'; // Bleu lorsque la souris est sur la div
    // container.classList.add('center-letters'); // Applique la classe pour centrer les lettres
    centerLetters();
});

container.addEventListener('mouseleave', () => {
    container.style.backgroundColor = '#f0f0f0'; // Blanc lorsque la souris quitte la div
    // container.classList.remove('center-letters'); // Retire la classe pour reprendre le mouvement
    centerLetters();
});
