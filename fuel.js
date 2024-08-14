    // // Vitesse horizontale et verticale aléatoires entre deux bornes
    // const minSpeed = 0.5; // Valeurs ajustées pour test
    // const maxSpeed = 2;
    // let speedX = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    // let speedY = Math.random() * (maxSpeed - minSpeed) + minSpeed;

    // // Direction initiale aléatoire pour les deux axes
    // if (Math.random() < 0.5) speedX *= -1;
    // if (Math.random() < 0.5) speedY *= -1;

    // // Fonction d'animation pour le mouvement chaotique
    // function animate() {
    //     if (!container.classList.contains('center-letters')) {
    //         // Déplacement horizontal
    //         x += speedX;
    //         // Rebondir sur les bords horizontaux
    //         if (x > containerWidth - size || x < 0) speedX *= -1;
    //         // Déplacement vertical
    //         y += speedY;
    //         // Rebondir sur les bords verticaux
    //         if (y > containerHeight - size || y < 0) speedY *= -1;

    //         img.style.left = x + 'px';
    //         img.style.top = y + 'px';
    //     }

    //     requestAnimationFrame(animate);
    // }

    // animate();


        // // Redémarre le mouvement chaotique des lettres
        // document.querySelectorAll('.letter').forEach(img => {
        //     // Recalculer la position initiale aléatoire pour chaque lettre
        //     const containerWidth = container.offsetWidth;
        //     const containerHeight = container.offsetHeight;
        //     const size = parseInt(img.style.width);
    
        //     let x = Math.random() * (containerWidth - size);
        //     let y = Math.random() * (containerHeight - size);
            
        //     img.style.left = x + 'px';
        //     img.style.top = y + 'px';
    
        //     // Réinitialiser les vitesses et directions pour le mouvement chaotique
        //     let speedX = Math.random() * (2 - 0.5) + 0.5;
        //     let speedY = Math.random() * (2 - 0.5) + 0.5;
        //     if (Math.random() < 0.5) speedX *= -1;
        //     if (Math.random() < 0.5) speedY *= -1;
    
        //     // Reprendre l'animation chaotique
        //     function animate() {
        //         x += speedX;
        //         y += speedY;
    
        //         if (x > containerWidth - size || x < 0) speedX *= -1;
        //         if (y > containerHeight - size || y < 0) speedY *= -1;
    
        //         img.style.left = x + 'px';
        //         img.style.top = y + 'px';
    
        //         requestAnimationFrame(animate);
        //     }
    
        //     animate();
        // });