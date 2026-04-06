const CACHE_NAME = 'tryout-osn-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install: precache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first with stale-while-revalidate update
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        const networkFetch = fetch(event.request)
          .then(response => {
            // Cache valid responses (not opaque cross-origin errors)
            if (response && response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => null); // Network failure — silence error

        // Return cached version immediately; update cache in background
        return cached || networkFetch;
      })
    )
  );
});
