// Media Gallery JavaScript

// Video data with placeholder YouTube IDs
const videoData = {
    'vice-interview': {
        type: 'placeholder',
        title: 'VICE Interview - The One with My Niece',
        description: 'Coming soon - An intimate conversation about skateboarding and family.'
    },
    'hof-induction': {
        type: 'youtube',
        videoId: 'PLACEHOLDER_ID_1',
        title: 'Skateboarding Hall of Fame Induction'
    },
    'thrasher-story': {
        type: 'youtube',
        videoId: 'PLACEHOLDER_ID_2',
        title: 'First Woman on Thrasher Cover'
    },
    'xgames-gold': {
        type: 'youtube',
        videoId: 'PLACEHOLDER_ID_3',
        title: 'X Games Gold Medal Run'
    },
    'technique-breakdown': {
        type: 'youtube',
        videoId: 'PLACEHOLDER_ID_4',
        title: 'Vert Technique Masterclass'
    },
    'documentary': {
        type: 'youtube',
        videoId: 'PLACEHOLDER_ID_5',
        title: 'Pioneers: Women in Skateboarding'
    },
    'podcast': {
        type: 'youtube',
        videoId: 'PLACEHOLDER_ID_6',
        title: 'The Nine Club Podcast'
    },
    'recent-comp': {
        type: 'youtube',
        videoId: 'PLACEHOLDER_ID_7',
        title: 'Masters Competition Highlights'
    }
};

// Filter functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const videoCards = document.querySelectorAll('.video-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Filter videos
            const filter = this.getAttribute('data-filter');
            filterVideos(filter);
        });
    });

    function filterVideos(filter) {
        videoCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                // Reset animation with stagger
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = `fadeInUp 0.6s ${index * 0.1}s forwards`;
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    }
});

// Video modal functionality
function openVideoModal(videoKey) {
    const modal = document.getElementById('videoModal');
    const modalContainer = document.getElementById('modalVideoContainer');
    const video = videoData[videoKey];

    if (!video) return;

    // Clear previous content
    modalContainer.innerHTML = '';

    if (video.type === 'placeholder') {
        // Show placeholder for Vice interview
        modalContainer.innerHTML = `
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #a8c5d5 0%, #a8d5ba 100%);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
                border-radius: 10px;
            ">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🎬</div>
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">${video.title}</h2>
                <p style="font-size: 1.25rem; text-align: center; max-width: 600px;">
                    ${video.description}
                </p>
                <p style="margin-top: 2rem; opacity: 0.8;">Check back soon for this exclusive content!</p>
            </div>
        `;
    } else if (video.type === 'youtube') {
        // Embed YouTube video
        modalContainer.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
        `;
    }

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Close on background click
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', escapeHandler);
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalContainer = document.getElementById('modalVideoContainer');

    modal.classList.remove('show');
    document.body.style.overflow = '';

    // Clear video to stop playback
    setTimeout(() => {
        modalContainer.innerHTML = '';
    }, 300);

    // Remove escape key listener
    document.removeEventListener('keydown', escapeHandler);
}

function escapeHandler(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
}

// Lazy load YouTube thumbnails
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.video-thumbnail img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Replace PLACEHOLDER with actual YouTube video IDs when available
                // img.src will already be set in HTML, this is just for future implementation
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Add smooth scroll behavior for any anchor links
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