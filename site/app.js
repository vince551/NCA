const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

$('#year').textContent = new Date().getFullYear();

const menuToggle = $('#menuToggle');
const nav = $('#mainNav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
$$('#mainNav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}));

// Assembly tabs
$$('.assembly-tab').forEach(tab => tab.addEventListener('click', () => {
  $$('.assembly-tab').forEach(t => {
    t.classList.toggle('active', t === tab);
    t.setAttribute('aria-selected', String(t === tab));
  });
  $$('[data-content]').forEach(panel => panel.classList.add('hidden'));
  $(`#${tab.dataset.panel}`)?.classList.remove('hidden');
}));

// Accessible modal
const modal = $('#modal');
const modalTitle = $('#modalTitle');
const modalText = $('#modalText');
let lastFocused = null;
function openModal(title, text) {
  lastFocused = document.activeElement;
  modalTitle.textContent = title;
  modalText.textContent = text;
  modal.classList.remove('hidden');
  $('.modal-close', modal)?.focus();
}
function closeModal() {
  modal.classList.add('hidden');
  lastFocused?.focus?.();
}
$$('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

$('#directoryButton')?.addEventListener('click', () => openModal('Leadership directory', 'The public directory is ready for verified Assembly records. Connect an authenticated backend before publishing names, roles or contact details.'));
$('#countyButton')?.addEventListener('click', () => openModal('County directory', 'The 47-county directory is a platform module ready to connect to verified county Assembly records.'));
$('#speakButton')?.addEventListener('click', () => openModal('Safe conversation', 'This public demo does not transmit sensitive reports. A production version should connect this area to a verified safeguarding and reporting workflow with strict access controls.'));
$$('[data-business]').forEach(button => button.addEventListener('click', () => openModal(button.dataset.business, 'This Assembly business module is ready for verified records, publication status, search and public outcomes once the backend is connected.')));

// Resource search and filters
const search = $('#resourceSearch');
const resources = $$('.resource');
const filters = $$('.filter');
let activeFilter = 'all';
function filterResources() {
  const query = search?.value.trim().toLowerCase() || '';
  resources.forEach(card => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const textMatch = !query || card.textContent.toLowerCase().includes(query);
    card.hidden = !(categoryMatch && textMatch);
  });
}
search?.addEventListener('input', filterResources);
filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(f => f.classList.remove('active'));
  filter.classList.add('active');
  activeFilter = filter.dataset.filter;
  filterResources();
}));

// PWA install experience
let deferredPrompt;
function showInstallButton() {
  if ($('#installApp')) return;
  const button = document.createElement('button');
  button.id = 'installApp';
  button.className = 'install-app';
  button.type = 'button';
  button.textContent = 'Install NCA App';
  button.addEventListener('click', async () => {
    if (!deferredPrompt) {
      openModal('Install NCA', 'Use your browser menu and choose “Add to Home screen” or “Install app” when available.');
      return;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    button.remove();
  });
  document.body.appendChild(button);
}
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton();
});
window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  $('#installApp')?.remove();
});

// Reveal content as it enters the viewport
const revealTargets = $$('.section-head, .assembly-card, .business-card, .rights-grid article, .event, .resource, .leadership-card, .speak-card, .assembly-layout, .county-grid, .assembly-notice');
if ('IntersectionObserver' in window) {
  revealTargets.forEach(element => element.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.08 });
  revealTargets.forEach(element => observer.observe(element));
} else revealTargets.forEach(element => element.classList.add('revealed'));

// Current section navigation
const navLinks = $$('#mainNav a[href^="#"]');
const sections = navLinks.map(link => $(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${visible.target.id}`));
  }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, .25, .6] });
  sections.forEach(section => navObserver.observe(section));
}

// Reconstruct the supplied emblem from repository-safe chunks. The SVG fallback remains visible if loading fails.
async function loadLogo() {
  const parts = ['aa', 'ab', 'ac', 'ad', 'ae', 'af'];
  try {
    const chunks = await Promise.all(parts.map(part => fetch(`./assets/logo/chunk_${part}.txt`, { cache: 'force-cache' }).then(response => {
      if (!response.ok) throw new Error('Logo chunk unavailable');
      return response.text();
    })));
    const src = `data:image/webp;base64,${chunks.join('')}`;
    ['brandLogo', 'heroLogo', 'leadLogo', 'footerLogo'].forEach(id => {
      const image = document.getElementById(id);
      if (image) image.src = src;
    });
  } catch {
    // The visible SVG fallback stays in place.
  }
}
loadLogo();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(() => {}));
}
