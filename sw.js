const CACHE_NAME = 'sala-prove-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Lasciamo passare le richieste di rete per avere i dati Supabase sempre aggiornati in tempo reale
  event.respondWith(fetch(event.request));
});
