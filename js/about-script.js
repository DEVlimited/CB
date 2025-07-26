// About Page JavaScript

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for timeline animations
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Animate stats on scroll
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const statNumber = entry.target.querySelector('.stat-number');
                const finalValue = statNumber.textContent;

                // Animate numbers
                if (finalValue.includes('+')) {
                    const num = parseInt(finalValue);
                    animateValue(statNumber, 0, num, 2000, '+');
                } else if (finalValue.match(/\d+/)) {
                    const num = parseInt(finalValue.match(/\d+/)[0]);
                    const suffix = finalValue.replace(/\d+/, '');
                    animateValue(statNumber, 0, num, 2000, suffix);
                }
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Number animation function
    function animateValue(element, start, end, duration, suffix = '') {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }

    // Parallax effect for hero section
    const hero = document.querySelector('.about-hero');
    const portrait = document.querySelector('.portrait-frame');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        if (hero && scrolled < hero.offsetHeight) {
            if (portrait) {
                portrait.style.transform = `translateY(${rate * 0.3}px)`;
            }
        }
    });

    // Add fade-in animation to sections
    const fadeElements = document.querySelectorAll('.cb-story, .coaching-philosophy, .passion-section');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(element);
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

// Image loading fallback
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.portrait-image, .coaching-image');

    images.forEach(img => {
        img.addEventListener('error', function () {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && (placeholder.classList.contains('portrait-placeholder') || placeholder.classList.contains('image-placeholder'))) {
                placeholder.style.display = 'flex';
            }
        });

        // If src is empty or not set, show placeholder
        if (!img.src || img.src === window.location.href) {
            img.style.display = 'none';
            const placeholder = img.nextElementSibling;
            if (placeholder && (placeholder.classList.contains('portrait-placeholder') || placeholder.classList.contains('image-placeholder'))) {
                placeholder.style.display = 'flex';
            }
        }
    });
});