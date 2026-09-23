// override-head.js - Dynamic Title & Metadata Update for MeraPDF

(function() {
  'use strict';

  // Configuration
  const config = {
    appTitle: 'MeraPDF - Professional PDF Tools',
    appName: 'MeraPDF',
    description: 'Professional PDF tools for document processing',
    ogTitle: 'MeraPDF - Professional PDF Tools',
    ogDescription: 'Professional PDF tools for document processing',
    twitterTitle: 'MeraPDF - Professional PDF Tools',
    twitterDescription: 'Professional PDF tools for document processing'
  };

  // Function to update page title and metadata
  function updateBranding() {
    // Update document title
    document.title = config.appTitle;
    console.log('✅ Title updated: ' + config.appTitle);

    // Update meta description
    updateMetaTag('description', config.description);
    updateMetaTag('og:title', config.ogTitle);
    updateMetaTag('og:description', config.ogDescription);
    updateMetaTag('twitter:title', config.twitterTitle);
    updateMetaTag('twitter:description', config.twitterDescription);

    // Update navbar branding if it exists
    updateNavbarBranding();

    // Apply custom styles
    applyCustomStyles();

    console.log('✅ MeraPDF Customizations Applied!');
  }

  // Update meta tag by name
  function updateMetaTag(name, content) {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.querySelector(`meta[property="${name}"]`);
    }
    if (element) {
      element.setAttribute('content', content);
      console.log(`✅ Updated meta tag: ${name}`);
    } else {
      // Create if doesn't exist
      element = document.createElement('meta');
      if (name.includes('og:') || name.includes('twitter:')) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      element.setAttribute('content', content);
      document.head.appendChild(element);
      console.log(`✅ Created meta tag: ${name}`);
    }
  }

  // Update navbar branding
  function updateNavbarBranding() {
    // Target common navbar text elements
    const selectors = [
      '[class*="navbar"]',
      '[class*="header"]',
      '[class*="brand"]',
      'a[href="/"]',
      '.app-title',
      '[data-testid*="navbar"]'
    ];

    selectors.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el.textContent.includes('Mera PDF') || el.textContent.includes('Stirling')) {
            const oldText = el.textContent;
            el.textContent = el.textContent
              .replace(/Stirling PDF/gi, config.appName)
              .replace(/Mera PDF/gi, config.appName);
            if (oldText !== el.textContent) {
              console.log(`✅ Updated text: ${oldText} → ${el.textContent}`);
            }
          }
        });
      } catch (e) {
        // Selector might not match, continue
      }
    });
  }

  // Apply custom CSS
  function applyCustomStyles() {
    const customCSS = `
      /* MeraPDF Custom Branding */
      :root {
        --merapdf-primary: #FF6B6B;
        --merapdf-secondary: #4ECDC4;
        --merapdf-dark: #2C3E50;
      }
      
      /* Update primary colors if needed */
      [class*="primary"], 
      [class*="button"],
      [class*="brand"] {
        /* Colors will be controlled by custom-styles.css */
      }
    `;

    // Check if custom styles already loaded
    let styleId = 'merapdf-custom-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = customCSS;
      document.head.appendChild(style);
      console.log('✅ Custom CSS applied');
    }
  }

  // Run on document ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateBranding);
  } else {
    updateBranding();
  }

  // Also run after a short delay to catch React hydration
  setTimeout(updateBranding, 1000);

  // Observe for React app updates (in case app re-renders)
  if (window.MutationObserver) {
    try {
      const observer = new MutationObserver(function(mutations) {
        // Re-check title on significant DOM changes
        if (document.title !== config.appTitle) {
          updateBranding();
        }
      });

      observer.observe(document.head, {
        childList: true,
        subtree: true,
        characterData: true
      });
    } catch (e) {
      console.warn('Could not set up mutation observer');
    }
  }

  console.log('🚀 MeraPDF branding script loaded and active');
})();