// Boards Page JavaScript

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to collection when hero button is clicked
    const heroButton = document.querySelector('.boards-hero .btn-primary');
    if (heroButton) {
        heroButton.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    // Add hover effect to info cards
    const infoCardShowcase = document.querySelector('.info-card-showcase');
    if (infoCardShowcase) {
        let isHovered = false;

        infoCardShowcase.addEventListener('mouseenter', function () {
            isHovered = true;
        });

        infoCardShowcase.addEventListener('mouseleave', function () {
            isHovered = false;
        });
    }

    // Lazy load board images with placeholder
    const boardImages = document.querySelectorAll('.board-img');
    boardImages.forEach(img => {
        // Add placeholder background while loading
        img.style.backgroundColor = '#f0f0f0';

        // If image fails to load, show placeholder
        img.addEventListener('error', function () {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'board-placeholder';
            placeholder.innerHTML = `
                <div style="
                    width: 200px;
                    height: 250px;
                    background: linear-gradient(135deg, var(--pastel-green) 0%, var(--pastel-blue) 100%);
                    border-radius: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-align: center;
                    padding: 2rem;
                ">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🛹</div>
                    <p style="font-weight: bold;">CB × HST</p>
                    <p style="font-size: 0.875rem; opacity: 0.9;">Signature Board</p>
                </div>
            `;
            this.parentNode.appendChild(placeholder);
        });
    });

    // Add placeholder for HST logo if it fails to load
    const hstLogo = document.querySelector('.hst-logo');
    if (hstLogo) {
        hstLogo.addEventListener('error', function () {
            this.style.display = 'none';
            const textLogo = document.createElement('span');
            textLogo.style.fontWeight = 'bold';
            textLogo.style.fontSize = '1.25rem';
            textLogo.style.color = 'var(--dark-grey)';
            textLogo.textContent = 'HST';
            this.parentNode.appendChild(textLogo);
        });
    }

    // Add loading animation to external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Show subtle loading indication
            const originalText = this.textContent;
            if (this.classList.contains('btn')) {
                this.textContent = 'Opening HST...';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 1000);
            }
        });
    });

    // Animate board cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe board cards
    const boardCards = document.querySelectorAll('.board-card');
    boardCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Header scroll effect (consistent with main site)
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 68, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--dark-grey)';
        header.style.backdropFilter = 'none';
    }
});