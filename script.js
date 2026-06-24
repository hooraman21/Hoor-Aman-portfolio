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
        // Fallback: If data-value attribute doesn't exist, read the text content directly
        if (!element.dataset.value) {
            element.dataset.value = element.innerText.trim();
        }

        // Target the closest parent card (.skill-category or .project-card), otherwise default to the element itself
        const parentCard = element.closest('.skill-category, .project-card');
        const target = parentCard ? parentCard : element;

        target.addEventListener('mouseenter', () => {
            let iteration = 0;
            const originalValue = element.dataset.value;
            
            // Safety check: skip if the element string is somehow empty
            if (!originalValue) return;

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
                
                // Control decoding acceleration speed (increase denominator for slower text)
                iteration += 1 / 3;
            }, 30);
        });
    });
});