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
        if (!container.classList.contains('center-letters')) {
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
        }

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

// Fonction pour centrer les lettres au centre de la div avec une animation fluide
function centerLetters() {
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
        img.style.left = `${centerX - imgWidth / 2}px`; // Alignement du centre de l'image avec le centre de la div
        img.style.top = `${centerY - imgHeight / 2}px`;
    });
}

// Gestion des événements pour changement de couleur de fond et centrage des lettres
container.addEventListener('mouseover', () => {
    container.style.backgroundColor = '#0000ff'; // Bleu lorsque la souris est sur la div
    container.classList.add('center-letters'); // Applique la classe pour centrer les lettres
    centerLetters();
});

container.addEventListener('mouseout', () => {
    container.style.backgroundColor = '#f0f0f0'; // Blanc lorsque la souris quitte la div
    container.classList.remove('center-letters'); // Retire la classe pour reprendre le mouvement

    // Redémarre le mouvement chaotique des lettres
    document.querySelectorAll('.letter').forEach(img => {
        // Recalculer la position initiale aléatoire pour chaque lettre
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const size = parseInt(img.style.width);

        let x = Math.random() * (containerWidth - size);
        let y = Math.random() * (containerHeight - size);
        
        img.style.left = x + 'px';
        img.style.top = y + 'px';

        // Réinitialiser les vitesses et directions pour le mouvement chaotique
        let speedX = Math.random() * (2 - 0.5) + 0.5;
        let speedY = Math.random() * (2 - 0.5) + 0.5;
        if (Math.random() < 0.5) speedX *= -1;
        if (Math.random() < 0.5) speedY *= -1;

        // Reprendre l'animation chaotique
        function animate() {
            x += speedX;
            y += speedY;

            if (x > containerWidth - size || x < 0) speedX *= -1;
            if (y > containerHeight - size || y < 0) speedY *= -1;

            img.style.left = x + 'px';
            img.style.top = y + 'px';

            requestAnimationFrame(animate);
        }

        animate();
    });
});
