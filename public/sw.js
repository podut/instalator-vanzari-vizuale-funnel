const CACHE_NAME = 'instalator-pro-v2';
const urlsToCache = [
  '/',
  '/butelie si centrala.jpeg',
  '/Video prezentare.mp4',
  '/assets/css/index-TfnigM9w.css',
  '/assets/js/index-IjgR9UEH.js',
  '/assets/js/vendor-od_bVfk7.js',
  '/assets/js/ui-CsWNa97Q.js',
  '/assets/js/router-CGoMKjKo.js',
  '/assets/js/maps-0l0mR7ji.js'
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
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request for fetching
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response for caching
          const responseToCache = response.clone();

          // Cache static assets with longer TTL
          if (event.request.url.includes('/assets/') || 
              event.request.url.match(/\.(jpg|jpeg|png|gif|svg|css|js|woff|woff2|mp4)$/)) {
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
          }

          return response;
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
