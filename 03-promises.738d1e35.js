!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i=document.querySelector(".form");function u(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t("Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}console.log(i.delay.value),i.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.delay.value),o=Number(i.step.value),t=Number(i.amount.value),a=0;a<t;a+=1){u(a+1,n).then((function(e){return r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)})),n+=o}}))}();
//# sourceMappingURL=03-promises.738d1e35.js.map
