const filesToCache = [
    '/',
    '/css/materialize.min.css',
    '/js/materialize.min.js',
    '/index.html'
]

self.addEventListener('install', e => {
    console.log(`[service worker] installed...`)
    e.waitUntil(
        caches.open('pages-cache-v1')
            .then(cache => cache.addAll(filesToCache))
    )
})

self.addEventListener('activate', _ => {
    console.log(`[service worker] activating...`)
    return self.clients.claim()
})