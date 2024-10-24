// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-container button');

    if (searchInput && searchButton) {
        const handleSearch = () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm) {
                // You can implement your search logic here
                console.log('Searching for:', searchTerm);
                // Example: window.location.href = `/search-results?q=${encodeURIComponent(searchTerm)}`;
            }
        };

        searchButton.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // Dropdown accessibility
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const content = dropdown.querySelector('.dropdown-content');

        if (link && content) {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                }
            });
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Code syntax highlighting initialization (if using Prism.js)
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Intersection Observer for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.reference-card, .featured-card').forEach(card => {
        observer.observe(card);
    });

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('An error occurred:', e.error);
        // You can implement your error handling logic here
    });
});

// Responsive handling
function handleResponsive() {
    const width = window.innerWidth;
    const mainNav = document.querySelector('.main-nav');
    
    if (width > 768) {
        mainNav.classList.remove('active');
        mainNav.style.display = 'block';
    } else {
        mainNav.style.display = mainNav.classList.contains(' active') ? 'block' : 'none';
    }
}

window.addEventListener('resize', handleResponsive);
handleResponsive();