import"./modulepreload-polyfill.b7f2da20.js";import{H as w,j as k}from"./Hammer.b32cbff6.js";B();function x(){return{colorPicker:document.getElementById("colorPicker"),handleDiameterPicker:document.getElementById("handleDiameterPicker"),handleLengthPicker:document.getElementById("handleLengthPicker"),rotationInfo:document.getElementById("rotationInfo"),zdogView:document.getElementById("zdogView"),faviconSize:document.getElementById("faviconSize"),autoSpinning:document.getElementById("autoSpinning"),resetBtn:document.querySelector("button"),hideBackLightningBolt:document.getElementById("hideBackLightningBolt")}}function B(){const e=x(),t=new w(document.querySelector("#logo"));t.dragRotate=!0,A(t),I(e.zdogView),L(e.colorPicker,t),h(t,e.handleDiameterPicker,"handleDiameter"),h(t,e.handleLengthPicker,"handleLength"),H(e.faviconSize),_(e.autoSpinning),T(e.resetBtn),P(e.hideBackLightningBolt,t),y(t,e.rotationInfo),t.init()}function T(e){e.onclick=()=>{p=!1,N(),window.navigation.reload()}}function L(e,t){e.innerHTML="",D(t.colors).forEach(o=>{{const n=f(o);n&&(t.colors[o]=n)}const i=document.createElement("div");e.appendChild(i);const s=document.createElement("label");i.appendChild(s);const l=document.createElement("input");l.setAttribute("type","color"),s.appendChild(l);const c=document.createElement("span");i.appendChild(c);const d=()=>{const n=t.colors[o];l.value=n,c.innerHTML=` ${n} <code>${o}</code>`};d(),l.oninput=n=>{const u=n.target.value;t.colors[o]=u,d(),t.reset(),v(o,u)}})}function h(e,t,o){C({elem:t,labelText:`<code>${o}</code>`,getValue(){return e[o]},setValue(i){e[o]=i},hammer:e})}function C({elem:e,labelText:t,getValue:o,setValue:i,hammer:s}){const l=e.id;{const r=S(f(l));r&&i(r)}e.innerHTML="";const c=document.createElement("div");e.appendChild(c);const d=document.createElement("label");c.appendChild(d);const n=document.createElement("input");n.setAttribute("type","number"),n.setAttribute("step","0.1"),n.style.width="40px",n.style.padding="4px",d.appendChild(n);const u=document.createElement("span");u.innerHTML=t,c.appendChild(u);const a=()=>{const r=o();n.value=String(r)};a(),n.oninput=r=>{const m=r.target.value,z=S(m);i(z),a(),s.reset(),v(l,m)}}function I(e){g({elem:e,labelText:"Icon view",onToggle(t){document.body.classList[t?"remove":"add"]("zdogView")}})}function H(e){g({elem:e,labelText:"Favicon size",onToggle(t){document.body.classList[t?"add":"remove"]("faviconSize")}})}function _(e){g({elem:e,labelText:"Auto spinning",onToggle(t){p=t}})}function P(e,t){g({elem:e,labelText:"Hide back lightning bolt",onToggle(o){t.hideBackLightningBolt=o},applyValue(){t.reset()}})}function g({elem:e,labelText:t,onToggle:o,applyValue:i}){e.innerHTML="";const s=document.createElement("label");e.appendChild(s);const l=document.createElement("input");l.setAttribute("type","checkbox"),s.appendChild(l),s.appendChild(document.createTextNode(t));const{id:c}=e;M(c);const d=()=>{var a,r;return(r=JSON.parse((a=f(c))!=null?a:'"{}"').isChecked)!=null?r:!1},n=()=>{let a=d();a=!a,v(c,JSON.stringify({isChecked:a}))},u=a=>{const r=d();o(r),l.checked=r,a||i==null||i(r)};l.oninput=a=>{a.preventDefault(),n(),u()},u(!0)}var p;function y(e,t){e.onDragStart=()=>{p=!1},e.onDragEnd=()=>{E(e)},p&&(e.perspective.rotate.y+=.03,e.updatePerspective(),E(e)),V(e,t),requestAnimationFrame(()=>{e.update(),y(e,t)})}function E(e){if(!e.illo)return;const t={rotate:e.illo.rotate,translate:e.illo.translate};e.perspective=t,v("perspective",JSON.stringify(t))}function A(e){const t=f("perspective");if(t){const o=JSON.parse(t);e.perspective=o}}var b;function V(e,t){if(!t||!e.illo)return;let{x:o,y:i,z:s}=e.illo.rotate;const l=n=>(n=n*16/k.exports.TAU,n=Math.floor(n*100)/100,n);o=l(o),i=l(i),s=l(s);const c=JSON.stringify({x:o,y:i,z:s},null,2);if(b===c)return;b=c;const d=b.split(`
`).join("<br/>").split(" ").join("&nbsp;");t.innerHTML!==d&&(t.innerHTML=d)}function M(e){if(!e)throw new Error("Assertion failed.")}function f(e){var t;return(t=window.localStorage[`__vike_logo__input_${e}`])!=null?t:null}function v(e,t){window.localStorage[`__vike_logo__input_${e}`]=t}function N(){window.localStorage.clear()}function S(e){return e===null?null:parseFloat(e)}function D(e){return Object.keys(e)}
