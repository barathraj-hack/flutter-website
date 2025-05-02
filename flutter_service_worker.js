'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fd3208e499f74c8d470d4737d78733c8",
"assets/AssetManifest.bin.json": "3aeca6cbb155abdd0ae85868af36e087",
"assets/AssetManifest.json": "cca44dff1c1ec029f3c3f93c592c1a3b",
"assets/FontManifest.json": "4fb15aa4f8d54928480644fdce53de45",
"assets/fonts/MaterialIcons-Regular.otf": "130b80f6f8e8be90eca3618243cc9e16",
"assets/lib/images/12345.png": "79daa29f03cdd52094cec29c0c49635c",
"assets/lib/images/Instagram.png": "34b5b72477fa541f3a06b017e80252e4",
"assets/lib/images/Instagramicon.svg": "1c90d5cd5deecff1a1c21de577d30d33",
"assets/lib/images/instaicon.png": "7af73f0fb4163d1cfef2a01810c0b2dc",
"assets/lib/images/pri.jpg": "0af666fd7b6dcaa2b177749eaed6f401",
"assets/lib/images/pricepal.jpg": "5bc0118512d28b2eaa8177585998b37d",
"assets/lib/images/schoolgirl.png": "1e60e2f57ba30a419089ccb66de4165f",
"assets/lib/images/senior.jpg": "7f3678ac1edf32c3a4c76cf58e0973d3",
"assets/lib/images/skv.png": "e588841cd7a3b3e57dacfb9c64f620c0",
"assets/lib/images/skv1.png": "3cf6c21bb280a741a4913149f066e9bc",
"assets/lib/images/skv2.png": "0e35d7ddf057f6b2435a81e6dd689fea",
"assets/lib/images/skv3.png": "5ad6e368e2ffcb77695de30179e569da",
"assets/lib/images/skvchamp.png": "e4816defe488aaa7a04cc23f4c05f2ab",
"assets/lib/images/skvevent.png": "96e685c8e96a6f80754c76fea6d12759",
"assets/lib/images/skvhouse.png": "306fa374eff8b0086dd5ae516df7490c",
"assets/lib/images/skvlogo.png": "548d69010f82119ae1d5536dfa54953a",
"assets/lib/images/skvmaingate.png": "b12e71fedbbf403504de536a1b84d30b",
"assets/lib/images/skvnews.jpg": "3c8d3eed675ad13429830729cc73c944",
"assets/lib/images/skvstudent.png": "f2854c38f89a7c240d8bc13d530782b4",
"assets/lib/images/skvtechers.png": "5ec83141b873be88bcdd7a790fb18e20",
"assets/lib/images/tgk.png": "fdce968cb02c116551bb1cd9320eaddc",
"assets/lib/images/tgk1.JPG": "99b3754f7fd05b9885005fa4da28a3a1",
"assets/lib/images/ttggkk.png": "f99f6f48feaf05c22acefeecbe46f6b6",
"assets/lib/svg/Instagram.svg": "90ab4ca074aa758db4823fdee8267a16",
"assets/NOTICES": "2e3fa45448108e374733582a7467063a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6391d535e33a7465d90d6f00c75fc402",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "792ee302d63353c1af448245dd255015",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9cf19123c00aa1702637eb770ea14873",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8fb9b5d10545cf6320897860cce2148",
"/": "e8fb9b5d10545cf6320897860cce2148",
"main.dart.js": "fdd47811594f77ad6339b4ebf1bb5e17",
"manifest.json": "0104c84fda34d812d39c2c2d36e181df",
"version.json": "80a365daeda4ecdba9532bbfb6ea2162"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
