!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;function a(t,e){t.disabled=!0,e.disabled=!1}t.addEventListener("click",(function(){o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.backgroundColor=t}),1e3),a(t,e)})),e.addEventListener("click",(function(){clearInterval(o),a(e,t)}))}();
//# sourceMappingURL=01-color-switcher.13f957d4.js.map
