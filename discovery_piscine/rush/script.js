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

const dialogueSpeaker = document.querySelector('#dialogue-speaker');
const dialogueLine = document.querySelector('#dialogue-line');

document.querySelectorAll('[data-dialogue]').forEach((route) => {
  const revealDialogue = () => {
    dialogueSpeaker.textContent = route.dataset.dialogueSpeaker;
    dialogueLine.textContent = route.dataset.dialogue;
  };

  route.addEventListener('mouseenter', revealDialogue);
  route.addEventListener('focus', revealDialogue);
});

const sections = document.querySelectorAll('[data-section]');
const navigationLinks = document.querySelectorAll('.site-nav a[href^="#"]');

if (sections.length && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navigationLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-35% 0px -55%' });

  sections.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

