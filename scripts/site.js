/* Shared navigation and contact behaviour for both languages. */
(() => {
  document.documentElement.classList.add('js');
  const french = document.documentElement.lang === 'fr';
  const nav = document.getElementById('nav-links');
  const toggle = document.getElementById('burger-toggle');
  const mobile = window.matchMedia('(max-width: 1050px)');
  const closeMenu = () => {
    nav?.classList.remove('show');
    toggle?.setAttribute('aria-expanded', 'false');
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('show', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav?.classList.contains('show')) {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) closeMenu();
  });
  nav?.addEventListener('click', (event) => {
    if (mobile.matches && event.target.closest('a')) closeMenu();
  });
  mobile.addEventListener('change', closeMenu);

  const currentFile = location.pathname.split('/').pop() || 'index.html';
  nav?.querySelectorAll('a').forEach((link) => {
    if (link.getAttribute('href') === currentFile) link.setAttribute('aria-current', 'page');
  });
  document.getElementById('lang-select')?.addEventListener('change', (event) => {
    const base = currentFile.replace(/-fr\.html$/, '.html');
    const target = event.target.value === 'fr' ? base.replace(/\.html$/, '-fr.html') : base;
    location.assign(target + location.hash);
  });

  const form = document.getElementById('contact-form');
  if (!form) return;
  const copy = french ? {
    sending: 'Envoi en cours…', send: 'Envoyer',
    error: 'Votre message n’a pas pu être envoyé. Vos informations sont conservées : réessayez ou appelez le bureau au +44 1852 300295.',
    thanks: 'thank-you-fr.html'
  } : {
    sending: 'Sending…', send: 'Send Message',
    error: 'Your message could not be sent. Your details have been kept: please try again or call the office on +44 1852 300295.',
    thanks: 'thank-you.html'
  };
  const feedback = document.getElementById('form-feedback');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button.disabled) return;
    button.disabled = true;
    button.textContent = copy.sending;
    form.setAttribute('aria-busy', 'true');
    feedback.textContent = copy.sending;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', headers: { Accept: 'application/json' },
        body: new FormData(form), signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission failed');
      location.assign(copy.thanks);
    } catch {
      feedback.textContent = copy.error;
      feedback.focus();
      button.disabled = false;
      button.textContent = copy.send;
    } finally {
      clearTimeout(timeout);
      form.removeAttribute('aria-busy');
    }
  });
})();
