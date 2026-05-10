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

    // Cookie consent storage key and GA4 measurement ID
    var CONSENT_KEY = 'jebrewsalem_cookie_consent';
    var GA4_ID = 'G-9KEPM05RS2';

    // ===================================================================
    // GA4 Analytics Helpers
    // trackEvent() is a safe no-op when GA4 has not been loaded.
    // GA4 is loaded dynamically only after the user accepts analytics.
    // ===================================================================

    function trackEvent(eventName, params) {
        if (typeof gtag === 'function') {
            gtag('event', eventName, params || {});
        }
    }

    function initOutboundTracking() {
        document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href]');
            if (!link) return;
            var href = link.getAttribute('href');
            if (href && /^https?:\/\//i.test(href) && href.indexOf('jebrewsalem.cz') === -1) {
                trackEvent('click', { event_category: 'outbound', link_url: href });
            }
        });
    }

    // ===================================================================
    // Cookie Consent & GA4 Loader
    // GA4 is injected dynamically only after the user accepts analytics.
    // Consent is persisted in localStorage under CONSENT_KEY.
    // ===================================================================

    function loadGA4() {
        if (typeof window.gtag === 'function') {
            console.log('[consent] GA4 already loaded, skipping');
            return;
        }
        console.log('[consent] Loading GA4:', GA4_ID);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', GA4_ID);
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
        script.onload = function() { console.log('[consent] GA4 script loaded'); };
        document.head.appendChild(script);
    }

    function showCookieBanner() {
        console.log('[consent] Showing cookie banner, lang:', currentLang);
        var t = (translations[currentLang] && translations[currentLang].consent) || {};
        var banner = document.createElement('div');
        banner.id = 'cookieConsentBanner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', t.ariaLabel || 'Cookie consent');
        // Inline critical layout styles as fallback in case CSS is not yet cached
        banner.style.cssText = 'position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%);width:calc(100% - 3rem);max-width:860px;z-index:9999;background:#1e120c;border:2px solid #F2B705;border-radius:6px;box-shadow:0 8px 32px rgba(26,18,12,0.55);';
        banner.innerHTML =
            '<div class="cookie-banner__inner">' +
                '<div class="cookie-banner__copy">' +
                    '<p class="cookie-banner__title">' +
                        (t.title || 'Cookie preferences') +
                    '</p>' +
                    '<p class="cookie-banner__text">' +
                        (t.text || 'We use essential and optional analytics cookies.') +
                        ' <a href="/ochrana-osobnich-udaju" class="cookie-banner__link">' +
                            (t.policyLink || 'Privacy Policy') +
                        '</a>' +
                    '</p>' +
                '</div>' +
                '<div class="cookie-banner__actions">' +
                    '<button id="cookieReject" class="cookie-banner__btn cookie-banner__btn--secondary">' +
                        (t.reject || 'Reject optional cookies') +
                    '</button>' +
                    '<button id="cookieAccept" class="cookie-banner__btn cookie-banner__btn--primary">' +
                        (t.accept || 'Accept cookies') +
                    '</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(banner);
        var rect = banner.getBoundingClientRect();
        console.log('[consent] banner rect:', rect.width, 'x', rect.height, '| bottom:', rect.bottom);

        document.getElementById('cookieAccept').addEventListener('click', function() {
            console.log('[consent] User accepted analytics');
            localStorage.setItem(CONSENT_KEY, 'accepted_analytics');
            banner.remove();
            loadGA4();
        });
        document.getElementById('cookieReject').addEventListener('click', function() {
            console.log('[consent] User rejected analytics');
            localStorage.setItem(CONSENT_KEY, 'rejected_analytics');
            banner.remove();
        });
    }

    function initCookieConsent() {
        var stored = localStorage.getItem(CONSENT_KEY);
        console.log('[consent] stored consent:', stored);
        if (stored === 'accepted_analytics') {
            loadGA4();
            return;
        }
        if (stored === 'rejected_analytics') {
            console.log('[consent] Analytics rejected, GA4 not loaded');
            return;
        }
        showCookieBanner();
    }

    // ===================================================================
    // Internationalization (i18n)
    // ===================================================================
    
    let currentLang = localStorage.getItem('lang') || 'en';
    
    function translatePage() {
        const lang = translations[currentLang];
        if (!lang) return;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = lang;
            
            keys.forEach(k => {
                value = value?.[k];
            });
            
            if (value) {
                element.textContent = value;
            }
        });
        
        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
        
        // Update HTML dir attribute for RTL languages
        document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';
    }
    
    function switchLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        translatePage();
    }

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
        // Language switcher
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                switchLanguage(this.getAttribute('data-lang'));
            });
        });
        
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
    // Order & Event Request Form
    // ===================================================================

    function initOrderForm() {
        const form = document.getElementById('orderForm');
        if (!form) return;

        const typeInputs = form.querySelectorAll('input[name="requestType"]');
        const typeError = document.getElementById('typeError');

        // "Order Now" button in Merch → scroll to form with T-shirt pre-selected
        var orderTshirtBtn = document.getElementById('orderTshirtBtn');
        if (orderTshirtBtn) {
            orderTshirtBtn.addEventListener('click', function(e) {
                e.preventDefault();
                var radio = form.querySelector('input[name="requestType"][value="tshirt"]');
                if (radio) {
                    radio.checked = true;
                    radio.dispatchEvent(new Event('change'));
                }
                var target = document.getElementById('orders');
                if (target) {
                    var top = target.getBoundingClientRect().top + window.pageYOffset - (nav ? nav.offsetHeight : 0);
                    window.scrollTo({ top: top, behavior: 'smooth' });
                }
            });
        }

        // Show/hide type-specific fields on radio change
        typeInputs.forEach(function(input) {
            input.addEventListener('change', function() {
                ['tshirt', 'keg', 'tap'].forEach(function(type) {
                    const block = document.getElementById('fields-' + type);
                    if (block) block.hidden = (type !== input.value);
                });
                if (typeError) typeError.hidden = true;
            });
        });

        // Submit handler
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const successMsg = document.getElementById('orderSuccess');
            const errorMsg = document.getElementById('orderError');

            // Hide previous messages
            if (successMsg) successMsg.hidden = true;
            if (errorMsg) errorMsg.hidden = true;

            if (!validateOrderForm(form)) {
                if (errorMsg) errorMsg.hidden = false;
                // Scroll to first error
                const firstError = form.querySelector('.input-error, .field-error:not([hidden])');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }

            // Build WhatsApp message from form data
            var type = (form.querySelector('input[name="requestType"]:checked') || {}).value || '';
            var typeLabels = { tshirt: 'T-shirt', keg: '30 L keg', tap: 'Beer + tap equipment' };
            var lines = [];
            lines.push('*New request: ' + (typeLabels[type] || type) + '*');

            if (type === 'tshirt') {
                var gender = form.querySelector('#tshirtGender');
                var size   = form.querySelector('#tshirtSize');
                var qty    = form.querySelector('#tshirtQty');
                if (gender && gender.value) lines.push('Gender/fit: ' + gender.options[gender.selectedIndex].text);
                if (size   && size.value)   lines.push('Size: ' + size.value);
                if (qty    && qty.value)    lines.push('Qty: ' + qty.value);
            } else if (type === 'keg') {
                var kegQty  = form.querySelector('#kegQty');
                var kegDate = form.querySelector('#kegDate');
                var kegDel  = form.querySelector('#kegDelivery');
                lines.push('Beer: Brevnov Ale - 2024 / 30 L');
                if (kegQty  && kegQty.value)  lines.push('Kegs: ' + kegQty.value);
                if (kegDate && kegDate.value) lines.push('Date: ' + kegDate.value);
                if (kegDel  && kegDel.value)  lines.push('Delivery: ' + kegDel.options[kegDel.selectedIndex].text);
            } else if (type === 'tap') {
                var tapDate     = form.querySelector('#tapDate');
                var tapLocation = form.querySelector('#tapLocation');
                var tapPeople   = form.querySelector('#tapPeople');
                var tapKegs     = form.querySelector('#tapKegs');
                var tapSetup    = form.querySelector('#tapSetup');
                if (tapDate     && tapDate.value)     lines.push('Event date: ' + tapDate.value);
                if (tapLocation && tapLocation.value) lines.push('Location: ' + tapLocation.value);
                if (tapPeople   && tapPeople.value)   lines.push('People: ~' + tapPeople.value);
                if (tapKegs     && tapKegs.value)     lines.push('Kegs needed: ' + tapKegs.value);
                if (tapSetup    && tapSetup.value)    lines.push('Setup: ' + tapSetup.options[tapSetup.selectedIndex].text);
            }

            var name    = form.querySelector('#orderName');
            var email   = form.querySelector('#orderEmail');
            var phone   = form.querySelector('#orderPhone');
            var comment = form.querySelector('#orderComment');
            if (name    && name.value)    lines.push('Name: ' + name.value);
            if (email   && email.value)   lines.push('Email: ' + email.value);
            if (phone   && phone.value)   lines.push('Phone: ' + phone.value);
            if (comment && comment.value) lines.push('Comment: ' + comment.value);

            var waUrl = 'https://wa.me/420775431677?text=' + encodeURIComponent(lines.join('\n'));
            window.open(waUrl, '_blank', 'noopener,noreferrer');

            // GA4: track lead form submission
            trackEvent('generate_lead', {
                event_category: 'form',
                form_type: typeSelected ? typeSelected.value : 'unknown'
            });

            if (successMsg) successMsg.hidden = false;
            form.reset();
            // Reset type-specific blocks, card highlights, and age checkboxes
            ['tshirt', 'keg', 'tap'].forEach(function(type) {
                const block = document.getElementById('fields-' + type);
                if (block) block.hidden = true;
            });
            var kegAge = document.getElementById('kegAgeConfirm');
            var tapAge = document.getElementById('tapAgeConfirm');
            if (kegAge) kegAge.checked = false;
            if (tapAge) tapAge.checked = false;
        });
    }

    function validateOrderForm(form) {
        var valid = true;

        // Clear previous errors
        form.querySelectorAll('.field-error:not(#typeError)').forEach(function(el) { el.remove(); });
        form.querySelectorAll('.input-error').forEach(function(el) { el.classList.remove('input-error'); });

        var lang = translations[currentLang];
        var errs = lang && lang.orders && lang.orders.errors ? lang.orders.errors : {};

        // Validate request type selected
        var typeSelected = form.querySelector('input[name="requestType"]:checked');
        var typeError = document.getElementById('typeError');
        if (!typeSelected) {
            if (typeError) {
                typeError.hidden = false;
                typeError.textContent = errs.type || 'Please select a request type.';
            }
            valid = false;
        } else if (typeError) {
            typeError.hidden = true;
        }

        // Validate age confirmation for keg/tap types
        var type = (form.querySelector('input[name="requestType"]:checked') || {}).value || '';
        if (type === 'keg' || type === 'tap') {
            var ageId = type === 'keg' ? 'kegAgeConfirm' : 'tapAgeConfirm';
            var ageField = document.getElementById(ageId);
            if (ageField && !ageField.checked) {
                addFieldError(ageField, errs.required || 'This field is required.');
                valid = false;
            }
        }

        // Validate common required fields
        ['orderName', 'orderEmail', 'orderPhone', 'orderConsent'].forEach(function(id) {
            if (!field.value.trim()) {
                addFieldError(field, errs.required || 'This field is required.');
                valid = false;
                return;
            }
            if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())) {
                addFieldError(field, errs.email || 'Please enter a valid email address.');
                valid = false;
            }
        });

        // Validate visible number fields (positive integers only)
        form.querySelectorAll('input[type="number"]').forEach(function(field) {
            if (isFieldVisible(field) && field.value !== '') {
                var val = Number(field.value);
                if (!Number.isInteger(val) || val < 1) {
                    addFieldError(field, errs.number || 'Please enter a positive number.');
                    valid = false;
                }
            }
        });

        // Validate date fields (DD.MM.YYYY format)
        form.querySelectorAll('input[placeholder="DD.MM.YYYY"]').forEach(function(field) {
            if (isFieldVisible(field) && field.value.trim() !== '') {
                if (!/^\d{2}\.\d{2}\.\d{4}$/.test(field.value.trim())) {
                    addFieldError(field, errs.date || 'Please use DD.MM.YYYY format.');
                    valid = false;
                }
            }
        });

        return valid;
    }

    function isFieldVisible(field) {
        var parent = field.closest('.type-fields');
        return !parent || !parent.hidden;
    }

    function addFieldError(field, message) {
        field.classList.add('input-error');
        var span = document.createElement('span');
        span.className = 'field-error';
        span.setAttribute('role', 'alert');
        span.textContent = message;
        field.parentNode.appendChild(span);
    }

    // ===================================================================
    // Initialize on DOM Ready
    // ===================================================================
    
    function init() {
        // Apply saved language
        translatePage();
        
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

        // Initialize order form
        initOrderForm();

        // GA4: track outbound link clicks
        initOutboundTracking();

        // Cookie consent: check stored preference or show banner
        initCookieConsent();

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
