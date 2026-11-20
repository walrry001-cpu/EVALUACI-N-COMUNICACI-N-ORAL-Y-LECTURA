// Service worker mínimo (v10): permite instalar la app, borra copias guardadas antiguas y siempre pide los archivos frescos.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{try{for(const k of await caches.keys())await caches.delete(k);}catch(_){}await self.clients.claim();})()));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>fetch(e.request))));
