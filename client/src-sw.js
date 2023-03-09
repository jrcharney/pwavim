// TODO: Why is this not a .jsx file?
// TODO: Why do we need offlineFallback from workbox-recipes if we aren't using it?
import { offlineFallback, warmStrategyCache } from "workbox-recipes";
import { CacheFirst } from "workbox-strategies";
import { registerRoute } from "workbox-routing";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching/precacheAndRoute.mjs";

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 2592000,  // 30 * 24 * 60 * 60 = 2592000 (Do it this way because math operations take time to process)
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// TODO: Why isn't pageCache used here?
registerRoute(
  ({ request }) => ['style','script','worker'].includes(request.destination),
  new CacheFirst({
    cacheName: 'asset-cache',
    plugins: [
      // Note: Cache responses with CacheableResponsePlugin will be stored for up to 30 days.
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 2592000,
      }),
    ]
  })
);
