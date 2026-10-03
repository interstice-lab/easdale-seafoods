/* Existing photos and MP4s open on demand; navigation works independently. */
(() => {
  const french = document.documentElement.lang === 'fr';
  if (typeof GLightbox === 'function') {
    const lightbox = GLightbox({
      selector: '.glightbox', touchNavigation: true, loop: true,
      closeButton: true, zoomable: true, preload: false,
      openEffect: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : 'zoom',
      closeEffect: 'fade',
      plyr: {
        js: 'vendor/plyr/plyr.min.js', css: 'vendor/plyr/plyr.css',
        config: { iconUrl: 'vendor/plyr/plyr.svg', blankVideo: '', ratio: '16:9' }
      }
    });
    lightbox.on('open', () => {
      for (const [selector, label] of Object.entries(french ? {
        '.gclose': 'Fermer', '.gprev': 'Précédent', '.gnext': 'Suivant'
      } : { '.gclose': 'Close', '.gprev': 'Previous', '.gnext': 'Next' })) {
        document.querySelector(selector)?.setAttribute('aria-label', label);
      }
    });
  }
  const button = document.querySelector('.youtube-launch');
  button?.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/bXlrFH7NC4c?autoplay=1&rel=0&playsinline=1';
    frame.title = french ? 'Vue aérienne de l’île d’Easdale' : 'Aerial tour of Easdale Island';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    button.replaceWith(frame);
    frame.focus();
  });
})();
