'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e64c9d1ca93ad58f7589bf75e35141c4",
".git/config": "c5bd9e17b5a309ad24ab14c6ba77a5e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1455756edc9d9142c54d4e20109fffc5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8cac1677dfa703e8369a8a82857f3d36",
".git/logs/refs/heads/main": "c74e71900d5e815f67b127931eb61862",
".git/logs/refs/remotes/origin/main": "de13106cd3e3f28633e46f12a14044ab",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "b25962c5a15065b0011aadc1e51c2093",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "6e52dd0d00b1b7a37d90e50848791b2f",
".git/objects/06/a53cff23c3e4dca26b5d69e554f0908fd24b9b": "0e9e96e1641ad83f02b46dbdf38ea475",
".git/objects/0c/2d73ce748be3b12a4258506610c79dc0392dcd": "f82297c0fa0965e05025bdae83892b03",
".git/objects/15/da54fef017735894c2d627ae213ac7d1c2d078": "0aa3fba1ddd6c083423d27bb53df3895",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/23/03e6268b65c7ed127b093623f705a0efbb5da7": "0bd393802713e7571d0832c435197aff",
".git/objects/23/35217360d9a92c1d20eed147e6e94d6157c2c9": "baf2fdc99a1962f0edb52200e1184427",
".git/objects/23/c0501201bb429df4e8ae089fb78768917e2705": "719ed6a37b849aef43b417a32409221e",
".git/objects/24/491c9be66aab0d1d7591b8f9bd1f1cdf55ef00": "40c351c87363e048699dd9113965038d",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "847cef55692aa6311c4c2f26d42b36b5",
".git/objects/2c/8d02b0b2641d1ef53c345c80d4e8bf517cbdf3": "1e43a8e2098e31e1058720045663ee25",
".git/objects/32/56cbffe870123ad7ff77bb8bb3f9750367e179": "0768792e897c2ed05ab453c478a90cf0",
".git/objects/35/9d664ab82d17894f41e1b307d71e4d3945c915": "4c4276f6b850b7149ce8fc1cc9161028",
".git/objects/3c/bc4ebf61da38bfaa777ebcd2384cc42df2d160": "0c776769f4d03e3c5aee2dfb79ec1757",
".git/objects/43/542e37cf919712099429327bbd5a394b273246": "cbb94ca90dc6352da0d04a5ff639fc41",
".git/objects/49/83db7ec89c2597a1ad11fbcf93ea06d337bae9": "b9e16dea1468306219b73cb8eb350a9b",
".git/objects/5b/a7612951e74d9e731384fbdf360e5178ee1049": "20741dd5b74f9f4acf4c0a3905ce0e6f",
".git/objects/5c/95f3c8623b02773529d6b19a468de1cc06b413": "efc0d5a24b5d409ef09d79ccc6cc97f3",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "bfd14d13850066655518c7b7f8c8a70b",
".git/objects/5f/42a11ce37d39d0ce2aca9a8f75e1d978a8c0c0": "fa6dbade5a6f9df0a88f08116018a96a",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "bbebac4a2c902f61cd432f1208897318",
".git/objects/63/74d3b445b74aa3d27c8aa4efef06906a73acce": "3a138c4a233ecc625be2fe979273fe7c",
".git/objects/6b/bb851fc32778c637ae2339587d01f87685dcbc": "386c69f4a440516d8bb7b0d7bf5139ed",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "bcafa311bebf5634eaebc9a830559b6e",
".git/objects/70/cf11914bbd0a9735a6abfaacc61a83d0fe9407": "a3ec7b74af52ae6e80ccd4366bc691dd",
".git/objects/71/8e85ec3a5e09507ad23501cf9f639ca546ae96": "099b68186027305b53ff439c345811ad",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "ebf7d1a0954090a5cf6bdc36cbf3289e",
".git/objects/7a/90f3ffdd46fc5f9e518232ccf061a8398f7a49": "1f91442b0866e0642a080cb04fa9a882",
".git/objects/7c/36880c877f33d0fe5c4fb1f65d017f797781a1": "a349fbc6c9c3eceae4235f0479d2d765",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8c/20816a5fa369fd0776071f1bd19f395661c789": "5aaf032f5915217ff45aa2f45017d3e6",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "8003b3408ffe6fc347eaa3ce30414536",
".git/objects/8c/98a517d396c2fa7e3bd52019601810696d106f": "ee5dd0c24e22c2b8cd4f67a573e366fc",
".git/objects/8d/88bdbdefb3fcbe06ee444414769880f75eaca0": "2bb531879d61a9d3ea459f14b03f2b2f",
".git/objects/8f/365141c76aff78102491eaa2954ad06a6e50b6": "342bef97b4437d71ac419416e2f15604",
".git/objects/95/64d2c990412a4035fde7cbdbc9ae699ed73f31": "f8b626441cdfce081eb07be4d3019814",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "bf78de9a46b3f184061cc620c3ed1316",
".git/objects/99/b3b197a93f56dc5ecf0b97d1404155493847cf": "5aa6586f74c0ad66b66afc80ee60aa13",
".git/objects/9a/74a0086be9db6838bd76705aeae12fb5a454e2": "cc15444c5256d9b32ef4548acea0ef16",
".git/objects/9d/4e6bf0b80c912a909d3fe9971003123b932899": "0cf29e565aa7a82073be089eeca280dc",
".git/objects/a4/90966be36e6f7e6d88c6e72352d5091349ca0e": "0c9121f36f19d723e367bb10b255d901",
".git/objects/a6/baafdcf421320356c93d044a8b64352bb731c8": "93906a8ed7a69840b5beff635cb737ad",
".git/objects/a8/9c187f290ec6bca4bbc34bd0af0bce80ba38f5": "98c80089a2641f83a79c33c20f2c9146",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "7f7a35d97b21f578a6e3dfc95f936101",
".git/objects/b0/fceb0b982262007698d66d5c4a303c735bdc3e": "336e2dd57679d6843d291540a3be1450",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "2c236ea17ad6b309081e0a5251137b84",
".git/objects/b5/a57e709045a3028f12a2a024ebc524edd54c72": "8457d6607b9a2d386ffe8a698cad7f4e",
".git/objects/b6/a8a98e977c305cd7f00fddb467727de787268d": "d8aed0a4ee0c4cd1dd05c0c4b6e6303f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/bb/015c10f5c8d89b8f11ba7a4ca94bae31a5e4e0": "a69a06377ad3165497a0e7fb015e826e",
".git/objects/bc/aaa2cfa437866b6eb396e8e5731f32b47ce29a": "2caf7ac81120400a2a49273e7c6a2663",
".git/objects/be/0a3fc5270e6e53a9e53e8ff0b0bee443e618ba": "505031ab1981bc9affe89f0c87e24baa",
".git/objects/c3/1fd0b25f5c8111443b008bdb344a4b8495b4f9": "b55ea93359ba40e3bce61e33bd9a93c6",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "31782b0e3547365a9cae9df3a3668159",
".git/objects/c4/ebad28239876de1b986a2427376b077c1a0220": "8a065db31c750da314a8727d5a9af9d4",
".git/objects/c5/d53917a46bf3d0c6b4bd451a5114046649f4c9": "293a963d291c6a0c96ce17eff5e26530",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "708ec387c1c405170e46ecb742b4d308",
".git/objects/c8/cc01aa23a35c4cb4f5479d1814b2d4f220fc6a": "77d70bfadc375adc8c8e7c29cb2eb05c",
".git/objects/c9/8b626726b427489b4f28be7091a9cfc21c89be": "2e280c94a5773fbcad665aa126fd9ec6",
".git/objects/ca/02bed61a71f714b862513fb1ee2b4be370ceb5": "aa87a8d263593cb41967cea94cb155f8",
".git/objects/cc/09c7f5fcf313453eca24f8ceec4f8fbfc1d225": "c48fcc39c0a6e218be3bac5de40eed15",
".git/objects/d2/3c6d94bff31e7e6096f8a0dd1e26ca70180632": "c575d955fb7227c73924e4143defb4ed",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/fb59421685e1368ab6b8d182d27e0c28ddaa8f": "7ec4d3f89a485f0d2281a48c89075f77",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/da/1d43ab11c3faac2dd55dfe69788b1696bac23b": "02ed3edbad14260d73e11bade0a79449",
".git/objects/e8/1f2f8975ba1b59dabf8a07019faa7e80a0df35": "1312acac3256f741d85667245cc919cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "2950f778d5dda0c267b890b72f9e64de",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/cf285c06c47db0e0fc0f8267a65ccb1fb977f8": "b7a91f3330cb7885e5392f79613893bc",
".git/objects/fe/d283a499284b6a8ff73ed3365af2eb1ee010a9": "74bf45b3f4e4fd92523a70defb3eb0cb",
".git/refs/heads/main": "6d808df012bd0331fb53c96520958ca1",
".git/refs/remotes/origin/main": "6d808df012bd0331fb53c96520958ca1",
"assets/AssetManifest.bin": "fd3208e499f74c8d470d4737d78733c8",
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
"flutter_bootstrap.js": "0cf85b69340d43a839d52171be0c7f3e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8fb9b5d10545cf6320897860cce2148",
"/": "e8fb9b5d10545cf6320897860cce2148",
"main.dart.js": "7b2d05540a8376c80fe2ffec2b9e74b7",
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
