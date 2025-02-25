self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("pwa-cache").then((cache) => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icon-192.png",
                "icon-512.png"
            ]);
        })
    );
    console.log("✅ Service Worker 安裝完成");
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

