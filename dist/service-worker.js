if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let t={};const l=e=>i(e,o),f={module:{uri:o},exports:t,require:l};r[o]=Promise.all(s.map((e=>f[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fireex"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/fireex/css/app.b035d137.css",revision:null},{url:"/fireex/index.html",revision:"453177616cdb6fe5ba0761095f16a459"},{url:"/fireex/js/app.b9b25b2c.js",revision:null},{url:"/fireex/js/chunk-vendors.932b468d.js",revision:null},{url:"/fireex/manifest.json",revision:"c13a228f24276444a3e035b6f00d75e7"},{url:"/fireex/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
