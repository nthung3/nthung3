// Service Worker for caching and offline support (Static Site Version)

const CACHE_NAME = 'portfolio-cache-v1';
const RUNTIME_CACHE = 'runtime-cache';

// Assets to cache on install - expanded for static site
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/blog/',
  '/about/',
  '/projects/',
  '/images/placeholder.webp',
  '/images/profile.webp',
  '/images/author.webp',
  '/fonts/',
];

// Install event - precache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
    }).then((cachesToDelete) => {
      return Promise.all(cachesToDelete.map((cacheToDelete) => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and browser extensions
  if (
    event.request.method !== 'GET' ||
    event.request.url.startsWith('chrome-extension') ||
    event.request.url.includes('extension') ||
    // Skip analytics and other non-essential third-party requests
    event.request.url.includes('analytics') ||
    event.request.url.includes('google-analytics')
  ) {
    return;
  }

  // For HTML pages, use network-first strategy
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the latest version of the page
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, serve from cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            
            // For static sites with pretty URLs, try adding .html
            const url = new URL(event.request.url);
            if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
              // Try with trailing slash first (for directory index)
              const withSlash = new URL(event.request.url);
              withSlash.pathname += '/';
              
              return caches.match(withSlash).then(slashResponse => {
                if (slashResponse) return slashResponse;
                
                // Next try with .html extension
                const withHtml = new URL(event.request.url);
                withHtml.pathname += '.html';
                
                return caches.match(withHtml).then(htmlResponse => {
                  return htmlResponse || caches.match('/');
                });
              });
            }
            
            return caches.match('/');
          });
        })
    );
    return;
  }

  // For images, use cache-first strategy
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request).then((response) => {
          // Cache the image for future use
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        }).catch(() => {
          // If image fails, return placeholder
          return caches.match('/images/placeholder.webp');
        });
      })
    );
    return;
  }

  // For other assets, use stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          // Update cache with the new response
          const responseClone = networkResponse.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch((error) => {
          console.error('Fetch failed:', error);
          // No network response, no recovery action
        });

      // Return the cached response immediately, then update cache in the background
      return cachedResponse || fetchPromise;
    })
  );
});

// Listen for skipWaiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
