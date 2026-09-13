// यह script document load होने के बाद चलेगा
document.addEventListener('DOMContentLoaded', function() {
  // Title change करो
  document.title = 'MeraPDF - Professional PDF Tools';
  
  // Meta tags change करो
  var metaTags = document.getElementsByTagName('meta');
  for (var i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute('property') === 'og:title' || 
        metaTags[i].getAttribute('name') === 'twitter:title') {
      metaTags[i].setAttribute('content', 'MeraPDF - Professional PDF Tools');
    }
    if (metaTags[i].getAttribute('property') === 'og:site_name') {
      metaTags[i].setAttribute('content', 'MeraPDF');
    }
    if (metaTags[i].getAttribute('property') === 'og:description' || 
        metaTags[i].getAttribute('name') === 'twitter:description') {
      metaTags[i].setAttribute('content', 'Professional PDF Processing Tool');
    }
    if (metaTags[i].getAttribute('property') === 'og:image' || 
        metaTags[i].getAttribute('name') === 'twitter:image') {
      metaTags[i].setAttribute('content', '/og_images/merapdf.png');
    }
    if (metaTags[i].getAttribute('name') === 'description') {
      metaTags[i].setAttribute('content', 'Professional PDF Processing Tool - Merge, Split, Compress & More');
    }
  }
  
  // Custom CSS load करो
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/assets/custom-styles.css';
  document.head.appendChild(link);
  
  // Favicon update करो
  var favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = '/modern-logo/favicon.ico';
  } else {
    var newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.href = '/modern-logo/favicon.ico';
    document.head.appendChild(newFavicon);
  }
  
  console.log('MeraPDF Customizations Applied!');
});