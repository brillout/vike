import"./modulepreload-polyfill.b7f2da20.js";import{H as C,t as I,f as T}from"./Hammer.db496505.js";const L=11;D();function V(){return{colorPicker:document.getElementById("colorPicker"),handleDiameterPicker:document.getElementById("handleDiameterPicker"),handleLengthPicker:document.getElementById("handleLengthPicker"),zdogView:document.getElementById("zdogView"),faviconSize:document.getElementById("faviconSize"),autoSpinning:document.getElementById("autoSpinning"),resetBtn:document.querySelector("button"),hideBackLightningBolt:document.getElementById("hideBackLightningBolt"),rotateX:document.getElementById("rotate-x"),rotateY:document.getElementById("rotate-y"),rotateZ:document.getElementById("rotate-z"),rotate2D:document.getElementById("rotate2D"),translateX:document.getElementById("translate-x"),translateY:document.getElementById("translate-y"),translateZ:document.getElementById("translate-z")}}function D(){const e=V(),t=new C(document.querySelector("#logo"));t.dragRotate=!0,P(e.zdogView),M(e.colorPicker,t),z(t,e.handleDiameterPicker,"handleDiameter"),z(t,e.handleLengthPicker,"handleLength"),A(e.faviconSize),$(e.autoSpinning),F(e.resetBtn),N(e.hideBackLightningBolt,t),H(t,e),_(e.rotate2D),O(t),t.init()}function H(e,{rotateX:t,rotateY:n,rotateZ:i,translateX:l,translateY:c,translateZ:r}){[{elem:t,type:"rotate",axis:"x"},{elem:n,type:"rotate",axis:"y"},{elem:i,type:"rotate",axis:"z"}].forEach(({elem:s,axis:a,type:d})=>{const o=()=>e.perspective[d],u=b({elem:s,labelText:`<code>${a}</code> (${d})`,getValue(){return I(o())[a]},setValue(g){o()[a]=T(g)},hammer:e});d==="rotate"&&(v||(v=[]),v.push(g=>{const B=g[a];u(B)}))})}function _(e){const t=document.getElementById("logo"),n=l=>`rotate(${l}deg)`,i=l=>parseInt(l.split("(")[1].split("deg)")[0],10);b({elem:e,labelText:"<code>degree</code> (2D rotation)",defaultValue:L,getValue(){const l=t.style.transform;return i(l)},setValue(l){const c=n(l);t.style.transform=c},step:1})}function z(e,t,n){b({elem:t,labelText:`<code>${n}</code>`,getValue(){return e[n]},setValue(i){e[n]=i},hammer:e})}function b({elem:e,labelText:t,getValue:n,setValue:i,defaultValue:l,step:c=.1,hammer:r}){const s=e.id;{const p=S(y(s));p?i(p):l&&i(l)}e.innerHTML="";const a=document.createElement("div");e.appendChild(a);const d=document.createElement("label");a.appendChild(d);const o=document.createElement("input");o.setAttribute("type","number"),o.setAttribute("step",c.toString()),o.style.width="40px",o.style.padding="4px",d.appendChild(o);const u=document.createElement("span");u.innerHTML=" "+t,a.appendChild(u);const g=n();return o.value=String(g),o.oninput=p=>{const m=p.target.value,w=S(m);i(w),r==null||r.reset(),h(s,m)},p=>{const m=String(p);o.value=m,h(s,m)}}function P(e){E({elem:e,labelText:"Icon view",onToggle(t){document.body.classList[t?"remove":"add"]("zdogView")}})}function A(e){E({elem:e,labelText:"Favicon size",onToggle(t){document.body.classList[t?"add":"remove"]("faviconSize")}})}function $(e){E({elem:e,labelText:"Auto spinning",onToggle(t){f=t}})}function N(e,t){E({elem:e,labelText:"Hide back lightning bolt",onToggle(n){t.hideBackLightningBolt=n},applyValue(){t.reset()}})}function E({elem:e,labelText:t,onToggle:n,applyValue:i}){e.innerHTML="";const l=document.createElement("label");e.appendChild(l);const c=document.createElement("input");c.setAttribute("type","checkbox"),l.appendChild(c),l.appendChild(document.createTextNode(t));const{id:r}=e;q(r);const s=()=>{var o,u;return(u=JSON.parse((o=y(r))!=null?o:'"{}"').isChecked)!=null?u:!1},a=()=>{let o=s();o=!o,h(r,JSON.stringify({isChecked:o}))},d=o=>{const u=s();n(u),c.checked=u,o||i==null||i(u)};c.oninput=o=>{o.preventDefault(),a(),d()},d(!0)}function F(e){e.onclick=()=>{f=!1,J(),window.navigation.reload()}}function M(e,t){e.innerHTML="",U(t.colors).forEach(n=>{{const a=y(n);a&&(t.colors[n]=a)}const i=document.createElement("div");e.appendChild(i);const l=document.createElement("label");i.appendChild(l);const c=document.createElement("input");c.setAttribute("type","color"),l.appendChild(c);const r=document.createElement("span");i.appendChild(r);const s=()=>{const a=t.colors[n];c.value=a,r.innerHTML=` ${a} <code>${n}</code>`};s(),c.oninput=a=>{const d=a.target.value;t.colors[n]=d,s(),t.reset(),h(n,d)}})}var f,v;function O(e){const t=document.getElementById("logo");t.onmouseleave=()=>{f=!0},t.onmouseenter=()=>{f=!1},k(e)}function k(e){requestAnimationFrame(()=>{f&&(e.perspective.rotate.y+=.015,e.updatePerspective()),e.update(),R(e),k(e)})}var x;function R(e){if(!e.illo)return;const{x:t,y:n,z:i}=I(e.illo.rotate),l=JSON.stringify({x:t,y:n,z:i},null,2),c=x!==l;if(x=l,!c)return;const r={x:t,y:n,z:i};v.forEach(s=>s(r))}function q(e){if(!e)throw new Error("Assertion failed.")}function y(e){var t;return(t=window.localStorage[`__vike_logo__input_${e}`])!=null?t:null}function h(e,t){window.localStorage[`__vike_logo__input_${e}`]=t}function J(){window.localStorage.clear()}function S(e){return e===null?null:parseFloat(e)}function U(e){return Object.keys(e)}
