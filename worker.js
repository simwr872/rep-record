self.addEventListener("install",(function(e){e.waitUntil(caches.open("cache").then((function(e){return console.log("Opened cache"),e.addAll(["./","./32.png","./256.png","./bundle.js","./icons.woff2","./style.css"])})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request,{ignoreVary:!0}).then((function(n){return n?(e.waitUntil(caches.open("cache").then((function(n){return n.add(e.request)}))),n):(console.log("Not cached",e.request),fetch(e.request))})))}));