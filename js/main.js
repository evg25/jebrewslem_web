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
    }
    
    // ===================================================================
    // Initialize on DOM Ready
    // ===================================================================
    
    function init() {
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
