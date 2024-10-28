// Load Workbox from the CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

// Check if Workbox loaded successfully
if (workbox) {
  console.log('Workbox loaded');

  // Define versioned cache name
  const APP_NAME = 'Navarrete_Science';
  const APP_VER = '0.1.5'; // Update this to bust old cache
  const CACHE_NAME = `${APP_NAME}-${APP_VER}`;

  // Enable service worker diagnostics (set to true for debugging)
  const APP_DIAG = false;

  // Helper function to normalize URLs by removing '_rsc' parameter
  const normalizeUrl = (url) => {
    const cleanUrl = new URL(url);
    cleanUrl.searchParams.delete('_rsc'); // Remove _rsc query parameter
    return cleanUrl.href;
  };

  // Install event
  self.addEventListener('install', event => {
    if (APP_DIAG) { console.log('Service Worker: Installed'); }
    event.waitUntil(self.skipWaiting()); // Activate immediately
  });

  // Activation event with cache cleanup
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName.startsWith(APP_NAME + '-'))
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
      })
    );
    event.waitUntil(self.clients.claim()); // Take control of all clients
    if (APP_DIAG) { console.log('Service Worker: Activated'); }
  });

  // Cache images with CacheFirst strategy
  workbox.routing.registerRoute(
    ({ request, url }) => {
      const normalizedUrl = normalizeUrl(url.href);
      // Match images with normalized URLs
      if (request.destination === 'image' && normalizedUrl.match(/\.(?:png|jpg|jpeg|gif|webp)$/)) {
        if (APP_DIAG) { console.log(`Caching image: ${normalizedUrl}`); }
        return true;
      }
      return false;
    },
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 60, // Limit number of images cached
          maxAgeSeconds: 30 * 24 * 60 * 60 // Cache for 30 days
        })
      ],
      matchOptions: {
        ignoreSearch: true // Ignore all query parameters for image matching
      }
    })
  );

  // Cache homepage with StaleWhileRevalidate strategy
  workbox.routing.registerRoute(
    ({ url }) => normalizeUrl(url.href) === '/',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'start-url',
      plugins: [{
        cacheWillUpdate: async ({ response }) => {
          if (response && response.type === 'opaqueredirect') {
            return new Response(response.body, {
              status: 200,
              statusText: 'OK',
              headers: response.headers
            });
          }
          return response;
        }
      }]
    })
  );

  // Use NetworkFirst strategy for other dynamic requests (e.g., API calls)
  workbox.routing.registerRoute(
    ({ url }) => {
      const normalizedUrl = normalizeUrl(url.href);
      return normalizedUrl.match(/\.(?:js|css|html|json)$/); // Match JS, CSS, HTML, JSON
    },
    new workbox.strategies.NetworkFirst({
      cacheName: 'dynamic-resources',
      networkTimeoutSeconds: 3 // Fallback to cache if network takes too long
    })
  );

} else {
  console.log('Workbox failed to load');
}
