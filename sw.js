const CACHE='mon-budget-v18';
const FILES=['./','./index.html','./app.js','./manifest.json','./logo.png','./README.txt'];
self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    for(const key of await caches.keys()) if(key!==CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  const isAppFile=url.pathname.endsWith('/index.html')||url.pathname.endsWith('/app.js')||url.pathname.endsWith('/manifest.json')||url.pathname.endsWith('/sw.js')||url.pathname.endsWith('/logo.png')||url.pathname.endsWith('/');
  if(!isAppFile) return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    try{
      const response=await fetch(event.request,{cache:'no-cache'});
      if(response&&response.ok) await cache.put(event.request,response.clone());
      return response;
    }catch(error){
      const cached=await cache.match(event.request);
      if(cached) return cached;
      if(event.request.mode==='navigate') return (await cache.match('./index.html'))||Response.error();
      return Response.error();
    }
  })());
});
