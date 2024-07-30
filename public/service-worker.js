const CACHE_NAME = 'pwa-cache-v1';

const urlsToCache = [
  "/",
  "static/js/bundle.js",
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  'https://5a9dd5a1a65e7d0014436b95.mockapi.io/note'
]

self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          return cache.addAll(urlsToCache);
        })
    );
  });

  self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
    );
  });

  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });