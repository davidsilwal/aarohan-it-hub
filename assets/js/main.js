/**
 * Aarohan IT Hub - Main JavaScript
 * Lightweight, accessible, dependency-free vanilla JS
 */

(function () {
  'use strict';

  // 1. Mobile Menu Toggle
  var mobileToggle = document.getElementById('mobile-toggle');
  var navMenu = document.getElementById('nav-menu');
  var siteHeader = document.getElementById('site-header');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = navMenu.classList.toggle('is-open');
      mobileToggle.classList.toggle('is-open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        mobileToggle.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }
    });

    // Close mobile menu on click outside
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('is-open')) {
        if (!siteHeader.contains(e.target)) {
          navMenu.classList.remove('is-open');
          mobileToggle.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Close mobile menu when clicking any nav link
    var navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          mobileToggle.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // 2. Header shadow on scroll
  function updateHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  // 3. Copy Email to Clipboard
  var copyButtons = document.querySelectorAll('.copy-email-btn');
  copyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var email = this.getAttribute('data-email');
      if (!email) return;

      var textSpan = this.querySelector('.btn-text') || this;
      var originalText = textSpan.textContent;

      function onCopySuccess() {
        textSpan.textContent = 'Copied to Clipboard!';
        btn.classList.add('btn-copied');
        setTimeout(function () {
          textSpan.textContent = originalText;
          btn.classList.remove('btn-copied');
        }, 2200);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(onCopySuccess).catch(function () {
          fallbackCopyText(email, onCopySuccess);
        });
      } else {
        fallbackCopyText(email, onCopySuccess);
      }
    });
  });

  function fallbackCopyText(text, callback) {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (callback) callback();
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  }

})();
