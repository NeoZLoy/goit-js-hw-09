function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var i=l("7Y9D8");const r=document.querySelector(".form"),u=document.querySelector("button");r.addEventListener("submit",function(t){t.preventDefault(),u.disabled=!0;let{delay:o,step:n,amount:l}=t.currentTarget.elements;if(0==o.value||0==n.value||0==l.value)e(i).Notify.warning("Incorrect value! Inputed value must be > 0");else{n.value,l.value,setTimeout(()=>setTimeout(()=>{u.disabled=!1},timer));for(let t=0;t<l.value;t++)console.log(t),(function(e,t){return new Promise((o,n)=>{let l=Math.random()>.3;setTimeout(()=>{l?o({position:e,delay:t}):n({position:e,delay:t})},t)})})(t+1,Number(o.value)+n.value*t).then(({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)}).catch(({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)});r.reset()}});
//# sourceMappingURL=03-promises.8c0588de.js.map