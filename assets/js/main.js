/**
 * Aarohan IT Hub - Main JavaScript
 * Production-ready, accessible, dependency-free vanilla JS
 */

(function () {
  'use strict';

  // 1. Accessible Mobile Navigation Toggle
  var mobileToggle = document.getElementById('mobile-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var siteHeader = document.getElementById('site-header');
  var bar1 = document.getElementById('bar-1');
  var bar2 = document.getElementById('bar-2');
  var bar3 = document.getElementById('bar-3');

  function setMobileNav(open) {
    if (!mobileNav || !mobileToggle) return;
    if (open) {
      mobileNav.classList.remove('hidden');
      mobileToggle.setAttribute('aria-expanded', 'true');
      if (bar1 && bar2 && bar3) {
        bar1.style.transform = 'translateY(4px) rotate(45deg)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'translateY(-4px) rotate(-45deg)';
      }
    } else {
      mobileNav.classList.add('hidden');
      mobileToggle.setAttribute('aria-expanded', 'false');
      if (bar1 && bar2 && bar3) {
        bar1.style.transform = 'none';
        bar2.style.opacity = '1';
        bar3.style.transform = 'none';
      }
    }
  }

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isCurrentlyHidden = mobileNav.classList.contains('hidden');
      setMobileNav(isCurrentlyHidden);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mobileNav.classList.contains('hidden')) {
        setMobileNav(false);
        mobileToggle.focus();
      }
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!mobileNav.classList.contains('hidden')) {
        if (!siteHeader.contains(e.target)) {
          setMobileNav(false);
        }
      }
    });

    // Close when any link inside mobile menu is clicked
    var mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setMobileNav(false);
      });
    });
  }

  // 2. Sticky Header Elevation on Scroll
  function updateHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 15) {
      siteHeader.classList.add('shadow-xs', 'bg-white/95');
      siteHeader.classList.remove('bg-white/85');
    } else {
      siteHeader.classList.remove('shadow-xs', 'bg-white/95');
      siteHeader.classList.add('bg-white/85');
    }
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  // 3. Interactive Copy-to-Clipboard for Email
  var copyButtons = document.querySelectorAll('.copy-email-btn');
  copyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var email = this.getAttribute('data-email');
      if (!email) return;

      var textSpan = this.querySelector('.btn-text');
      var originalText = textSpan ? textSpan.textContent : 'Copy';

      function onSuccess() {
        if (textSpan) textSpan.textContent = 'Copied!';
        btn.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-300');
        setTimeout(function () {
          if (textSpan) textSpan.textContent = originalText;
          btn.classList.remove('bg-emerald-50', 'text-emerald-700', 'border-emerald-300');
        }, 2200);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(onSuccess).catch(function () {
          fallbackCopyText(email, onSuccess);
        });
      } else {
        fallbackCopyText(email, onSuccess);
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
