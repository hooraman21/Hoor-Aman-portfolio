document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth scrolling animation logic for anchor tags
    const scrollLinks = document.querySelectorAll('.nav-links a, .btn[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = 80; // Offsets the layout height of your sticky navigation bar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});