document.addEventListener('DOMContentLoaded', () => {
    // ── MOBILE NAVBAR INTERACTION ──
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when links are targeted for smooth scrolling
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ── HARDWARE MATRIX / CYBER DECODER EFFECT ──
    const letters = "01#%?!$&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const glitchElements = document.querySelectorAll('.glitch-text');

    glitchElements.forEach(element => {
        // Trigger effect whenever the parent skill card gets hovered
        const parentCard = element.closest('.skill-category');
        const target = parentCard ? parentCard : element;

        target.addEventListener('mouseenter', () => {
            let iteration = 0;
            const originalValue = element.dataset.value;
            clearInterval(element.interval);

            element.interval = setInterval(() => {
                element.innerText = originalValue
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalValue[index];
                        }
                        // Keep spaces clean but randomize characters
                        if (letter === " ") return " ";
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iteration >= originalValue.length) {
                    clearInterval(element.interval);
                }
                
                // Control decoding acceleration speed
                iteration += 1 / 3;
            }, 30);
        });
    });
});