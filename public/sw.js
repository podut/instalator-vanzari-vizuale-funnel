const CACHE_NAME = 'instalator-pro-v1';
const urlsToCache = [
  '/',
  '/butelie si centrala.jpeg',
  '/assets/css/index-C5YlPB7e.css',
  '/assets/js/Index-C0wi7gu6.js',
  '/assets/js/vendor-S6w1S69P.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});
