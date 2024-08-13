
const container = document.querySelector('.container');

// Fonction pour créer une image de lettre flottante
function createFloatingLetter(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'letter';

    // Taille aléatoire entre 150px et 300px
    img.style.width = Math.random() * 150 + 150 + 'px'; 
    img.style.left = Math.random() * 100 + 'vw';
    img.style.top = Math.random() * 100 + 'vh';
    img.style.animationDuration = Math.random() * 20 + 15 + 's'; // Durée d'animation aléatoire entre 15s et 35s

    container.appendChild(img);

    let directionX = Math.random() * 0.5 + 0.1; // Vitesse horizontale
    let directionY = Math.random() * 0.5 + 0.1; // Vitesse verticale

    function animate() {
        let x = parseFloat(img.style.left);
        let y = parseFloat(img.style.top);

        // Mise à jour des positions
        x += directionX;
        y += directionY;

        // Rebondir sur les bords
        if (x > 100 || x < 0) directionX *= -1;
        if (y > 100 || y < 0) directionY *= -1;

        img.style.left = x + 'vw';
        img.style.top = y + 'vh';

        requestAnimationFrame(animate);
    }

    animate();
}

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

images.forEach(src => createFloatingLetter(src));


