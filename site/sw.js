const CACHE = 'nca-v3';
const BASE = new URL('./', self.location.href).pathname;
const CORE = [
  BASE,
  `${BASE}index.html`,
  `${BASE}styles.css`,
  `${BASE}assembly.css`,
  `${BASE}app.js`,
  `${BASE}manifest.webmanifest`,
  `${BASE}assets/logo-placeholder.svg`,
  ...['aa', 'ab', 'ac', 'ad', 'ae', 'af'].map(part => `${BASE}assets/logo/chunk_${part}.txt`)
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match(`${BASE}index.html`))));
});
