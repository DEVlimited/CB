// Splash Screen Animation
document.addEventListener('DOMContentLoaded', function () {
    const splashScreen = document.getElementById('splashScreen');
    const splashFull = document.getElementById('splashFull');
    const splashCutout = document.getElementById('splashCutout');
    const body = document.body;

    // Check if splash has been shown in this session
    const splashShown = sessionStorage.getItem('splashShown');

    if (!splashShown) {
        // Add class to prevent scrolling
        body.classList.add('splash-active');

        // Ensure images are loaded before starting animation
        let imagesLoaded = 0;
        const totalImages = 2;

        function imageLoaded() {
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                startAnimation();
            }
        }

        function startAnimation() {
            // Animation sequence
            setTimeout(() => {
                // Fade out full image and show cutout
                splashFull.classList.add('fade-out');
                splashCutout.classList.add('show');
            }, 2000);

            setTimeout(() => {
                // Make cutout skate away
                splashCutout.classList.add('skate-away');
            }, 3200);

            setTimeout(() => {
                // Fade out splash screen
                splashScreen.classList.add('fade-out');
            }, 5400);

            setTimeout(() => {
                // Remove splash screen and allow scrolling
                splashScreen.style.display = 'none';
                body.classList.remove('splash-active');
                // Mark splash as shown for this session
                sessionStorage.setItem('splashShown', 'true');
            }, 5900);
        }

        // Check if images are already loaded
        if (splashFull.complete) imageLoaded();
        else splashFull.addEventListener('load', imageLoaded);

        if (splashCutout.complete) imageLoaded();
        else splashCutout.addEventListener('load', imageLoaded);

        // Fallback in case images fail to load
        setTimeout(() => {
            if (imagesLoaded < totalImages) {
                splashScreen.style.display = 'none';
                body.classList.remove('splash-active');
            }
        }, 5000);
    } else {
        // If already shown, hide splash immediately
        splashScreen.style.display = 'none';
    }
});

// Initialize Photo Carousel
document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    
    // Array of carousel images - add new image filenames here
    const carouselImages = [
        'cbInvert.jpeg',  
        'cbProModel.jpeg',
        'cbYoung.jpeg',
        'cbHorse.jpeg',
        'concreteWaveCover.jpeg'
    ];
    
    // Create carousel items
    function createCarouselItems() {
        // Create two sets of images for seamless loop
        for (let i = 0; i < 2; i++) {
            carouselImages.forEach((image, index) => {
                const item = document.createElement('div');
                item.className = 'carousel-item';
                
                const img = document.createElement('img');
                img.src = `media/carousel/${image}`;
                img.alt = `CB Skateboarding ${index + 1}`;
                img.loading = 'lazy';
                
                item.appendChild(img);
                carouselTrack.appendChild(item);
            });
        }
    }
    
    createCarouselItems();
    
    // Optional: Pause animation on hover for entire section
    const carouselSection = document.querySelector('.photo-carousel-section');
    if (carouselSection) {
        carouselSection.addEventListener('mouseenter', () => {
            carouselTrack.style.animationPlayState = 'paused';
        });
        
        carouselSection.addEventListener('mouseleave', () => {
            carouselTrack.style.animationPlayState = 'running';
        });
    }
});


// Smooth scrolling for navigation links
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

// Add scroll effect to header
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

// Application form handler
function showApplicationForm() {
    alert('Application form coming soon! For now, email cb@cbcoaching.com with:\n\n1. Your skating experience\n2. Your goals\n3. Why you\'re ready for elite coaching\n4. Links to your skating videos');
}

// Video player enhancement
const video = document.querySelector('.video-container video');
if (video) {
    // Add click to play/pause
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Add loading class while video loads
    video.addEventListener('loadstart', function () {
        video.parentElement.classList.add('loading');
    });

    video.addEventListener('canplay', function () {
        video.parentElement.classList.remove('loading');
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});
// Video player enhancement with iOS fallback
document.querySelectorAll('.video-container video').forEach(video => {
    // Ensure iOS compatibility
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    
    // Add click to play/pause
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Add loading class while video loads
    video.addEventListener('loadstart', function () {
        video.parentElement.classList.add('loading');
    });

    video.addEventListener('canplay', function () {
        video.parentElement.classList.remove('loading');
    });
    
    // Handle iOS video errors
    let errorCount = 0;
    video.addEventListener('error', function(e) {
        errorCount++;
        console.error('Video error:', e, 'Attempt:', errorCount);
        
        // If video fails on iOS, show a message
        if (errorCount >= 2) {
            const container = video.parentElement;
            container.innerHTML = `
                <div style="
                    background: #f8f9fa;
                    padding: 40px;
                    text-align: center;
                    border-radius: 10px;
                    min-height: 300px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                ">
                    <div style="font-size: 3em; margin-bottom: 20px;">🎬</div>
                    <h3 style="color: #2c3e44; margin-bottom: 10px;">Video Demo Coming Soon</h3>
                    <p style="color: #666; max-width: 300px;">
                        Check back shortly for CB's exclusive training preview
                    </p>
                </div>
            `;
        }
    });
    
    // iOS-specific video initialization
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
        // Try to preload the first frame
        video.load();
        
        // Sometimes iOS needs a user interaction first
        document.addEventListener('touchstart', function videoInit() {
            video.load();
            document.removeEventListener('touchstart', videoInit);
        }, { once: true });
    }
});

// Make showApplicationForm globally available
window.showApplicationForm = showApplicationForm;