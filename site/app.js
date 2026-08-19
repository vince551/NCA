const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

$('#year').textContent = new Date().getFullYear();

const menuToggle = $('#menuToggle');
const nav = $('#mainNav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
$$('#mainNav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

$$('.assembly-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.assembly-tab').forEach(t => t.classList.remove('active'));
    $$('[data-content]').forEach(panel => panel.classList.add('hidden'));
    tab.classList.add('active');
    $(`#${tab.dataset.panel}`).classList.remove('hidden');
  });
});

const modal = $('#modal');
const modalTitle = $('#modalTitle');
const modalText = $('#modalText');
function openModal(title, text) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modal.classList.remove('hidden');
}
function closeModal() { modal.classList.add('hidden'); }
$$('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
$('#directoryButton').addEventListener('click', () => openModal('Leadership directory', 'The public directory is ready for verified Assembly records. Connect an authenticated backend before publishing names, roles or contact details.'));
$('#speakButton').addEventListener('click', () => openModal('Safe conversation', 'This public demo does not transmit sensitive reports. A production version should connect this area to a verified safeguarding and reporting workflow with strict access controls.'));

const search = $('#resourceSearch');
const resources = $$('.resource');
const filters = $$('.filter');
let activeFilter = 'all';
function filterResources() {
  const query = search.value.trim().toLowerCase();
  resources.forEach(card => {
    const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
    const textMatch = !query || card.textContent.toLowerCase().includes(query);
    card.hidden = !(categoryMatch && textMatch);
  });
}
search.addEventListener('input', filterResources);
filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(f => f.classList.remove('active'));
  filter.classList.add('active');
  activeFilter = filter.dataset.filter;
  filterResources();
}));

async function loadLogo() {
  const parts = ['aa','ab','ac','ad','ae','af'];
  try {
    const chunks = await Promise.all(parts.map(part => fetch(`./assets/logo/chunk_${part}.txt`).then(r => r.text())));
    const src = `data:image/webp;base64,${chunks.join('')}`;
    ['brandLogo','heroLogo','leadLogo','footerLogo'].forEach(id => { const img = document.getElementById(id); if (img) img.src = src; });
  } catch {
    // Placeholder remains visible if logo assets cannot be loaded.
  }
}
loadLogo();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
});
window.addEventListener('appinstalled', () => { deferredPrompt = null; });
