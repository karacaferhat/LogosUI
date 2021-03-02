var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/styles/style.css',
    '/scripts/bootstrap.js',
    '/scripts/function.js',
    '/scripts/index.js',
    '/scripts/jquery.fancybox.min.js',
    '/scripts/lesson.js',
    '/scripts/main.js',
    '/scripts/player.js',
    '/scripts/popper.js',
    '/scripts/scrollAnimation.js',
    '/scripts/slick.js',
    '/styles/bootstrap.min.css',
    '/styles/fa_css_all.css'

];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});