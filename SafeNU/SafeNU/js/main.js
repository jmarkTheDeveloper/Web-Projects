document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = navLinks.style.display === 'flex';
            
            if (isExpanded) {
                navLinks.style.display = 'none';
                menuBtn.classList.remove('active');
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#34408d';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '4px solid #f6c915';
                navLinks.style.backdropFilter = 'none';
                menuBtn.classList.add('active');
            }
        });
    }

    // Scroll Animations using Intersection Observer
    const animatedElements = document.querySelectorAll('.fade-in-up, .feature-card, .contact-section, .guide-card');
    
    // Initially hide elements that don't have fade-in-up class but we want to animate
    animatedElements.forEach(el => {
        if (!el.classList.contains('fade-in-up')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if (el.classList.contains('fade-in-up')) {
                    // Already handled by CSS animation if it has the class, 
                    // but we can ensure it plays when in view
                    el.style.animationPlayState = 'running';
                } else {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        // Pause CSS animations until in view
        if (el.classList.contains('fade-in-up')) {
            el.style.animationPlayState = 'paused';
        }
        observer.observe(el);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Hero Search Functionality
    const searchForm = document.getElementById('heroSearchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('heroSearchInput');
            const query = input.value.toLowerCase().trim();
            
            if (!query) return;

            if (query.includes('hospital') || query.includes('medical') || query.includes('doctor')) {
                window.location.href = 'contacts.html#hospital';
            } else if (query.includes('fire') || query.includes('burn')) {
                window.location.href = 'contacts.html#fire';
            } else if (query.includes('police') || query.includes('crime') || query.includes('robbery') || query.includes('emergency')) {
                window.location.href = 'contacts.html#police';
            } else if (query.includes('earthquake') || query.includes('flood') || query.includes('guide') || query.includes('survival')) {
                window.location.href = 'guidelines.html';
            } else {
                window.location.href = 'contacts.html';
            }
        });
    }

    // Accordion Logic for Contacts Page
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const content = btn.nextElementSibling;
            
            // Close all other accordions
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });

            // Toggle current accordion
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Check for hash in URL to open specific accordion on page load
    if (window.location.hash) {
        setTimeout(() => {
            const targetId = window.location.hash.substring(1);
            const targetAccordion = document.getElementById(targetId);
            if (targetAccordion) {
                const btn = targetAccordion.querySelector('.accordion-btn');
                if (btn) btn.click();
                targetAccordion.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 500);
    }
});
