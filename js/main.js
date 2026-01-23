/**
 * ===================================================================
 * JEBREWSALEM Brand Website - JavaScript Interactions
 * 
 * Features:
 * - Sticky navigation with scroll effects
 * - Smooth scrolling to anchor sections
 * - Scroll-triggered fade-in animations
 * - Mobile navigation toggle
 * - Active navigation link highlighting
 * ===================================================================
 */

(function() {
    'use strict';

    // ===================================================================
    // DOM Elements
    // ===================================================================
    
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Gallery & Lightbox elements
    let galleryItems = [];
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImageIndex = 0;
    
    // ===================================================================
    // Sticky Navigation - Add shadow on scroll
    // ===================================================================
    
    function handleNavScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    
    // ===================================================================
    // Smooth Scrolling to Sections
    // ===================================================================
    
    function smoothScroll(event) {
        // Check if the link is an anchor link
        const href = this.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            event.preventDefault();
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed nav
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileNav();
                }
                
                // Update active state
                updateActiveNavLink(targetId);
            }
        }
    }
    
    // ===================================================================
    // Mobile Navigation Toggle
    // ===================================================================
    
    function toggleMobileNav() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // ===================================================================
    // Active Navigation Link Highlighting
    // ===================================================================
    
    function updateActiveNavLink(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // ===================================================================
    // Scroll-based Active Section Detection
    // ===================================================================
    
    function handleSectionHighlight() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + nav.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                updateActiveNavLink(sectionId);
            }
        });
    }
    
    // ===================================================================
    // Fade-in Animations on Scroll
    // ===================================================================
    
    function checkFadeIn() {
        const triggerBottom = window.innerHeight * 0.85;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    }
    
    // ===================================================================
    // Gallery Generation
    // ===================================================================
    
    function renderGallery() {
        const galleryGrid = document.querySelector('.gallery-grid');
        if (!galleryGrid) return;
        
        galleryGrid.innerHTML = '';
        
        galleryData.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item fade-in';
            galleryItem.setAttribute('data-index', index);
            galleryItem.setAttribute('data-title', item.title);
            galleryItem.setAttribute('data-description', item.description);
            
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="gallery-image">
                <div class="gallery-overlay">
                    <span class="gallery-title">${item.title}</span>
                </div>
            `;
            
            galleryItem.addEventListener('click', function() {
                openLightbox(parseInt(this.getAttribute('data-index')));
            });
            
            galleryGrid.appendChild(galleryItem);
        });
        
        // Update galleryItems array after rendering
        galleryItems = document.querySelectorAll('.gallery-item');
        
        // Force fade-in animation for gallery items
        setTimeout(() => {
            galleryItems.forEach(item => {
                item.classList.add('visible');
            });
        }, 100);
    }

    // ===================================================================
    // Gallery & Lightbox
    // ===================================================================
    
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateLightboxImage() {
        // Get current gallery data
        const currentData = galleryData[currentImageIndex];
        
        // Update image
        lightboxImage.innerHTML = `<img src="${currentData.image}" alt="${currentData.title}" class="lightbox-img">`;
        
        // Update caption
        const lightboxTitle = document.getElementById('lightboxTitle');
        const lightboxDescription = document.getElementById('lightboxDescription');
        
        if (lightboxTitle) {
            lightboxTitle.textContent = currentData.title;
        }
        
        if (lightboxDescription) {
            lightboxDescription.textContent = currentData.description;
        }
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
        updateLightboxImage();
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryData.length;
        updateLightboxImage();
    }
    
    // ===================================================================
    // Throttle Function for Performance
    // ===================================================================
    
    function throttle(func, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = Date.now();
            if (now - lastCall >= delay) {
                lastCall = now;
                func.apply(this, args);
            }
        };
    }
    
    // ===================================================================
    // Combined Scroll Handler
    // ===================================================================
    
    const handleScroll = throttle(function() {
        handleNavScroll();
        checkFadeIn();
        handleSectionHighlight();
    }, 100);
    
    // ===================================================================
    // Event Listeners
    // ===================================================================
    
    function initEventListeners() {
        // Scroll events
        window.addEventListener('scroll', handleScroll);
        
        // Navigation link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });
        
        // Mobile menu toggle
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileNav);
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                toggleMobileNav();
            }
        });
        
        // Close mobile menu on window resize (if going from mobile to desktop)
        window.addEventListener('resize', throttle(function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                toggleMobileNav();
            }
        }, 250));
        
        // Gallery item clicks
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                openLightbox(index);
            });
        });
        
        // Lightbox controls
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }
        
        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', showPrevImage);
        }
        
        if (lightboxNext) {
            lightboxNext.addEventListener('click', showNextImage);
        }
        
        // Close lightbox on background click
        if (lightbox) {
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
        }
        
        // Keyboard navigation for lightbox
        document.addEventListener('keydown', function(e) {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    showPrevImage();
                } else if (e.key === 'ArrowRight') {
                    showNextImage();
                }
            }
        });
    }
    
    // ===================================================================
    // Initialize on DOM Ready
    // ===================================================================
    
    function init() {
        // Render gallery first
        renderGallery();
        console.log('🚀 JEBREWSALEM init started');
        
                // Render gallery first
        renderGallery();
                // Initial checks
        handleNavScroll();
        checkFadeIn();
        handleSectionHighlight();
        
        // Set up event listeners
        initEventListeners();
        
        // Mark first nav link as active by default
        if (navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
        
        console.log('JEBREWSALEM website initialized');
    }
    
    // ===================================================================
    // Page Load Handler
    // ===================================================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM is already loaded
        init();
    }
    
    // ===================================================================
    // Optional: Preload Images or Assets
    // ===================================================================
    
    function preloadAssets() {
        // Add any image preloading logic here if needed
        // Example:
        // const images = ['assets/image1.jpg', 'assets/image2.jpg'];
        // images.forEach(src => {
        //     const img = new Image();
        //     img.src = src;
        // });
    }
    
    // Call preload if needed
    // preloadAssets();
    
})();
