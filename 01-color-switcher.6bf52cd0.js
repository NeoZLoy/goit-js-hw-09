const t=document.querySelector("body");function e(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const d=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");let o=null;a.disabled=!0,d.addEventListener("click",t=>{o=setInterval(e,1e3),d.disabled=!0,a.disabled=!1}),a.addEventListener("click",t=>{clearInterval(o),d.disabled=!1,a.disabled=!0});
//# sourceMappingURL=01-color-switcher.6bf52cd0.js.map
