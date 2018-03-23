const CACHE_ID = 'CC_V1';
const FILES = ['/static/media/logo.5d5d9eef.svg', '/static/media/kugel_mit_schale_3.bccb5a5d.png'];
const REPLACE = '/static/media/kugel_mit_schale_3.bccb5a5d.png';

// Convenience function for notifications
const notify = async (title, data = {}) => {
    if (self.registration && self.Notification.permission === "granted") {
        const notification = Object.assign({}, {
            icon: "img/icon192.png",
            badge: "img/icon48-mono.png",
        }, data);
        return self.registration.showNotification(title, notification);
    }
}


const handleInstallation = async (evt) => {
    console.log(`Installing ${CACHE_ID}`);
    const cache = await caches.open(CACHE_ID);
    var mydata = [
        "static/js/bundle.js",
         "static/css/main.29266132.css",
        "static/css/main.29266132.css.map",
        "static/js/main.62b8369b.js",
        "static/js/main.62b8369b.js.map",
        "static/media/kugel_mit_schale_3.bccb5a5d.png",
       "static/media/logo.5d5d9eef.svg"
    ];

    console.log('values=', mydata);
    const installationResult = await cache.addAll(mydata);

    // const installationResult = await cache.addAll(FILES);
    // Is there already a service worker (= a previous version) running?
    // Then this is an upgrade
    if (self.registration.active) {
        notify(`New version ${CACHE_ID} available`, {
            body: "Close all instances of the app to apply the update",
            tag: "installed",
        });
    }
    return installationResult;
}

self.addEventListener("install", (evt) => evt.waitUntil(handleInstallation(evt)) );


const handleActivation = async () => {
    console.log(`Activating ${CACHE_ID}`);
    self.clients.claim(); // to enable notifications when requesting new rates from the start
    const cacheKeys = await self.caches.keys();
    const toDelete = cacheKeys.filter( (key) => key !== CACHE_ID );
    return Promise.all(toDelete.map( (key) => self.caches.delete(key) ));
};

self.addEventListener("activate", (evt) => evt.waitUntil(handleActivation()) );

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return responsenp
                if (response) {
                    console.log('match in cache', response);
                    return response;
                }

                // IMPORTANT: Clone the request. A request is a stream and
                // can only be consumed once. Since we are consuming this
                // once by cache and once by the browser for fetch, we need
                // to clone the response.
                var fetchRequest = event.request.clone();
                console.log('fetch ', fetchRequest.url);

                return fetch(fetchRequest).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        let responseToCache = response.clone();

                        caches.open(CACHE_ID)
                            .then(function(cache) {
                                const url = event.request.url;
                                if (url.includes('png') || url.includes('svg'))  {
                                    console.log('put into cache', responseToCache);
                                    cache.put(event.request, responseToCache);
                                }
                            })
                            .catch(reason => {
                                console.log(reason);
                            });

                        return response;
                    }
                );
            })
    );
});
