var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var i=t("iQIUW");function r(e,n){return new Promise(((o,t)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}function l({position:e,delay:n}){i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)}function s({position:e,delay:n}){i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const n=new FormData(e.currentTarget),o={};for(const[e,t]of n.entries())o[e]=Number(t);let{amount:t,step:i,delay:a}=o;for(let e=1;e<=t;e+=1)a+=i,r(e,a).then(l).catch(s)}));
//# sourceMappingURL=03-promises.9ba24441.js.map
