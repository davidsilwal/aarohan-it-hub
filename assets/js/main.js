// Main JavaScript for Aarohan IT Hub
// Handles mobile navigation toggle

(function() {
  'use strict';

  // Mobile menu toggle
  var menuToggle = document.querySelector('.mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      var header = document.querySelector('.site-header');
      header.classList.toggle('nav-active');
      
      // Animate toggle icon
      var spans = this.querySelectorAll('span');
      this.classList.toggle('open');
      
      if (this.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Smooth scrolling for anchor links
  var anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active class to current nav item
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.site-nav a');
  
  navLinks.forEach(function(link) {
    var linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (linkPath === '/' && currentPath === '/')) {
      link.classList.add('active');
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    var header = document.querySelector('.site-header');
    var menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (header && menuToggle) {
      if (header.classList.contains('nav-active') && 
          !e.target.closest('.site-nav') && 
          !e.target.matches('.mobile-menu-toggle') &&
          !e.target.closest('.mobile-menu-toggle')) {
        header.classList.remove('nav-active');
        menuToggle.classList.remove('open');
        
        var spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  });

  // Add animation classes on scroll (Intersection Observer)
  if ('IntersectionObserver' in window) {
    var observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    var animateOnScrollObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Elements to animate
    var animateElements = document.querySelectorAll('.service-card, .project-card, .team-member');
    animateElements.forEach(function(el) {
      animateOnScrollObserver.observe(el);
    });
  }

})();
