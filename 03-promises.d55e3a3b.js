var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("iQIUW");const i=document.querySelector(".form");function l(e,n){const o=Math.random()>.3;return new Promise(((t,r)=>{setTimeout((()=>{o?t(`Fulfilled promise ${e} in ${n}ms`):r(`Rejected promise ${e} in ${n}ms`)}),n)}))}console.log(i.delay.value),i.addEventListener("submit",(function(e){e.preventDefault();let n=Number(i.delay.value);const o=Number(i.step.value),t=Number(i.amount.value);for(let e=0;e<t;e+=1){l(e+1,n).then((e=>r.Notify.success(e))).catch((e=>r.Notify.failure(e))),n+=o}}));
//# sourceMappingURL=03-promises.d55e3a3b.js.map