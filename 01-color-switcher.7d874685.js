const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;function c(t,e){t.disabled=!0,e.disabled=!1}t.addEventListener("click",(function(){o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;n.style.backgroundColor=t}),1e3),c(t,e)})),e.addEventListener("click",(function(){clearInterval(o),c(e,t)}));
//# sourceMappingURL=01-color-switcher.7d874685.js.map
