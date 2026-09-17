// nunoi.js — menu, nav highlight, love letter toggle, year
const menuButton = document.querySelector('.menu-button');
const siteNavigation = document.querySelector('.site-nav');

if (menuButton && siteNavigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    siteNavigation.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    siteNavigation.classList.toggle('is-open', !isOpen);
  });

  siteNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

const sections = document.querySelectorAll('[data-section]');
const navigationLinks = document.querySelectorAll('.site-nav a[href^="#"]');

if (sections.length && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('text-white', active);
        if (active) link.style.color = '#74d5c5';
        else link.style.color = '';
      });
    });
  }, { rootMargin: '-35% 0px -55%' });

  sections.forEach((section) => sectionObserver.observe(section));
}

// Love letter open / close
document.querySelectorAll('[data-love-letter]').forEach((wrap) => {
  const toggle = wrap.querySelector('[data-letter-toggle]');
  const label = wrap.querySelector('[data-letter-label]');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const open = wrap.getAttribute('data-open') === 'true';
    wrap.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
    if (label) label.textContent = open ? 'Open the letter' : 'Seal it back';
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
