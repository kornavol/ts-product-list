// Name your cache and set the paths that you want to cache
const CACHE = 'image-cache';
const urlsToCache = [
    '/',
    '/ts-product-list',
];

// Install a service worker
self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and return requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});

// Update a service worker
self.addEventListener('activate', event => {
    const cacheWhitelist = ['wms-pwa'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
workbox.setConfig({ debug: false });
workbox.precaching.precacheAndRoute([])

workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/, //What image file types do you care about caching
    new workbox.strategies.CacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 20,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ],
    })
);