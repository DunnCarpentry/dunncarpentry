// Nav: add 'scrolled' class after hero
const header = document.getElementById('top') ? document.querySelector('.site-header') : null;
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Contact form — client-side feedback only (no backend wired up)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.background = '#4caf82';
    form.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.background = '';
    }, 4000);
  });
}
