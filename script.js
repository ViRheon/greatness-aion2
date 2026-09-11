const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');

toggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '18px 22px 22px';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
    nav.style.gap = '16px';
    nav.style.background = 'rgba(2,13,27,.98)';
    nav.style.borderBottom = '1px solid rgba(120,188,240,.14)';
  } else {
    nav.removeAttribute('style');
  }
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (header.classList.contains('menu-open')) {
      toggle.click();
    }
  });
});

const langBtn = document.querySelector('.lang-btn');
langBtn?.addEventListener('click', () => {
  const expanded = langBtn.getAttribute('aria-expanded') === 'true';
  langBtn.setAttribute('aria-expanded', String(!expanded));
});
