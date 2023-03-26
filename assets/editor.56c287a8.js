import"./modulepreload-polyfill.b7f2da20.js";import{H as z,j as k}from"./Hammer.b32cbff6.js";S();function w(){return{colorPicker:document.getElementById("colorPicker"),handleDiameterPicker:document.getElementById("handleDiameterPicker"),handleLengthPicker:document.getElementById("handleLengthPicker"),rotationInfo:document.getElementById("rotationInfo"),zdogView:document.getElementById("zdogView"),faviconSize:document.getElementById("faviconSize"),autoSpinning:document.getElementById("autoSpinning"),reset:document.querySelector("button"),hideBackLightningBolt:document.getElementById("hideBackLightningBolt")}}function S(){const e=w(),t=new z(document.querySelector("#logo"));t.dragRotate=!0,H(t),L(e.zdogView),B(e.colorPicker,t),b(t,e.handleDiameterPicker,"handleDiameter"),b(t,e.handleLengthPicker,"handleLength"),T(e.faviconSize),I(e.autoSpinning),x(e.reset),C(e.hideBackLightningBolt,t),h(t,e.rotationInfo),t.init()}function x(e){e.onclick=()=>{A(),S()}}function B(e,t){e.innerHTML="",M(t.colors).forEach(n=>{{const o=g(n);o&&(t.colors[n]=o)}const l=document.createElement("div");e.appendChild(l);const c=document.createElement("label");l.appendChild(c);const i=document.createElement("input");i.setAttribute("type","color"),c.appendChild(i);const a=document.createElement("span");l.appendChild(a);const r=()=>{const o=t.colors[n];i.value=o,a.innerHTML=` ${o} <code>${n}</code>`};r(),i.oninput=o=>{const d=o.target.value;t.colors[n]=d,r(),t.reset(),f(n,d)}})}function b(e,t,n){{const o=y(g(n));o&&(e[n]=o)}t.innerHTML="";const l=document.createElement("div");t.appendChild(l);const c=document.createElement("label");l.appendChild(c);const i=document.createElement("input");i.setAttribute("type","number"),i.setAttribute("step","0.1"),i.style.width="40px",i.style.padding="4px",c.appendChild(i);const a=document.createElement("span");a.innerHTML=` <code>${n}</code>`,l.appendChild(a);const r=()=>{const o=e[n];i.value=String(o)};r(),i.oninput=o=>{const d=o.target.value;e[n]=y(d),r(),e.reset(),f(n,d)}}function L(e){p({elem:e,labelText:"Zdog original view",onToggle:t=>{document.body.classList[t?"add":"remove"]("zdogView")}})}function T(e){p({elem:e,labelText:"favicon size",onToggle:t=>{document.body.classList[t?"add":"remove"]("faviconSize")}})}function I(e){p({elem:e,labelText:"Auto spinning",onToggle:t=>{m=t}})}function C(e,t){p({elem:e,labelText:"Hide back lightning bolt",onToggle:n=>{t.hideBackLightningBolt=n},onChange:()=>{t.reset()}})}function p({elem:e,labelText:t,onToggle:n,onChange:l}){e.innerHTML="";const c=document.createElement("label");e.appendChild(c);const i=document.createElement("input");i.setAttribute("type","checkbox"),c.appendChild(i),c.appendChild(document.createTextNode(t));const{id:a}=e;V(a);const r=()=>{var s,u;return(u=JSON.parse((s=g(a))!=null?s:'"{}"').isChecked)!=null?u:!1},o=()=>{let s=r();s=!s,f(a,JSON.stringify({isChecked:s}))},d=s=>{const u=r();n(u),i.checked=u,s||l==null||l(u)};i.oninput=s=>{s.preventDefault(),o(),d()},d(!0)}var m;function h(e,t){e.onDragStart=()=>{m=!1},e.onDragEnd=()=>{E(e)},m&&(e.perspective.rotate.y+=.03,e.updatePerspective(),E(e)),_(e,t),requestAnimationFrame(()=>{e.update(),h(e,t)})}function E(e){if(!e.illo)return;const t={rotate:e.illo.rotate,translate:e.illo.translate};f("perspective",JSON.stringify(t))}function H(e){const t=g("perspective");if(t){const n=JSON.parse(t);e.perspective=n}}var v;function _(e,t){if(!t||!e.illo)return;let{x:n,y:l,z:c}=e.illo.rotate;const i=o=>(o=o*16/k.exports.TAU,o=Math.floor(o*100)/100,o);n=i(n),l=i(l),c=i(c);const a=JSON.stringify({x:n,y:l,z:c},null,2);if(v===a)return;v=a;const r=v.split(`
`).join("<br/>").split(" ").join("&nbsp;");t.innerHTML!==r&&(t.innerHTML=r)}function V(e){if(!e)throw new Error("Assertion failed.")}function g(e){var t;return(t=window.localStorage[`__vike_logo__input_${e}`])!=null?t:null}function f(e,t){window.localStorage[`__vike_logo__input_${e}`]=t}function A(){window.localStorage.clear()}function y(e){return e===null?null:parseFloat(e)}function M(e){return Object.keys(e)}
