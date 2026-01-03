// Service Worker for PWA
self.addEventListener('install', event => {
    console.log('FORGE Habit Tracker installed');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('FORGE Habit Tracker activated');
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Just pass through - we'll cache later
    event.respondWith(fetch(event.request));
});
