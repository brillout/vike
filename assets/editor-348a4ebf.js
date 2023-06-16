import"./modulepreload-polyfill-3cfb730f.js";import{H as L,t as w,f as z}from"./Hammer-56c2c988.js";const V=11;H();function D(){return{colorPicker:document.getElementById("colorPicker"),handleDiameterPicker:document.getElementById("handleDiameterPicker"),handleLengthPicker:document.getElementById("handleLengthPicker"),zdogView:document.getElementById("zdogView"),faviconSize:document.getElementById("faviconSize"),autoSpinning:document.getElementById("autoSpinning"),resetBtn:document.querySelector("button"),hideBackLightningBolt:document.getElementById("hideBackLightningBolt"),rotateX:document.getElementById("rotate-x"),rotateY:document.getElementById("rotate-y"),rotateZ:document.getElementById("rotate-z"),rotate2D:document.getElementById("rotate2D"),translateX:document.getElementById("translate-x"),translateY:document.getElementById("translate-y"),translateZ:document.getElementById("translate-z")}}function H(){const e=D(),t=new L(document.querySelector("#logo"));t.dragRotate=!0,A(e.zdogView),O(e.colorPicker,t),S(t,e.handleDiameterPicker,"handleDiameter"),S(t,e.handleLengthPicker,"handleLength"),$(e.faviconSize),M(e.autoSpinning),F(e.resetBtn),N(e.hideBackLightningBolt,t),_(t,e),P(e.rotate2D),R(t),t.init()}function _(e,{rotateX:t,rotateY:n,rotateZ:i,translateX:o,translateY:c,translateZ:r}){[{elem:t,type:"rotate",axis:"x"},{elem:n,type:"rotate",axis:"y"},{elem:i,type:"rotate",axis:"z"}].forEach(({elem:s,axis:a,type:d})=>{const l=()=>e.perspective[d],u=b({elem:s,labelText:`<code>${a}</code> (${d})`,getValue(){return w(l())[a]},setValue(g){l()[a]=z(g)},hammer:e});d==="rotate"&&(f||(f=[]),f.push(g=>{const I=g[a];u(I)}))})}function P(e){const t=document.getElementById("logo"),n=o=>`rotate(${o}deg)`,i=o=>parseInt(o.split("(")[1].split("deg)")[0],10);b({elem:e,labelText:"<code>degree</code> (2D rotation)",defaultValue:V,getValue(){const o=t.style.transform;return i(o)},setValue(o){const c=n(o);t.style.transform=c},step:1})}function S(e,t,n){b({elem:t,labelText:`<code>${n}</code>`,getValue(){return e[n]},setValue(i){e[n]=i},hammer:e})}function b({elem:e,labelText:t,getValue:n,setValue:i,defaultValue:o,step:c=.1,hammer:r}){const s=e.id;{const p=k(B(s));p?i(p):o&&i(o)}e.innerHTML="";const a=document.createElement("div");e.appendChild(a);const d=document.createElement("label");a.appendChild(d);const l=document.createElement("input");l.setAttribute("type","number"),l.setAttribute("step",c.toString()),l.style.width="40px",l.style.padding="4px",d.appendChild(l);const u=document.createElement("span");u.innerHTML=" "+t,a.appendChild(u);const g=n();return l.value=String(g),l.oninput=p=>{const m=p.target.value,T=k(m);i(T),r==null||r.reset(),v(s,m)},p=>{const m=String(p);l.value=m,v(s,m)}}function A(e){E({elem:e,labelText:"Icon view",onToggle(t){document.body.classList[t?"remove":"add"]("zdogView")}})}function $(e){E({elem:e,labelText:"Favicon size",onToggle(t){document.body.classList[t?"add":"remove"]("faviconSize")}})}function M(e){E({elem:e,labelText:"Auto spinning",onToggle(t){y=t}})}function N(e,t){E({elem:e,labelText:"Hide back lightning bolt",onToggle(n){t.hideBackLightningBolt=n},applyValue(){t.reset()}})}function E({elem:e,labelText:t,onToggle:n,applyValue:i}){e.innerHTML="";const o=document.createElement("label");e.appendChild(o);const c=document.createElement("input");c.setAttribute("type","checkbox"),o.appendChild(c),o.appendChild(document.createTextNode(t));const{id:r}=e;J(r);const s=()=>JSON.parse(B(r)??'"{}"').isChecked??!1,a=()=>{let l=s();l=!l,v(r,JSON.stringify({isChecked:l}))},d=l=>{const u=s();n(u),c.checked=u,l||i==null||i(u)};c.oninput=l=>{l.preventDefault(),a(),d()},d(!0)}function F(e){e.onclick=()=>{y=!1,U(),window.navigation.reload()}}function O(e,t){e.innerHTML="",X(t.colors).forEach(n=>{{const a=B(n);a&&(t.colors[n]=a)}const i=document.createElement("div");e.appendChild(i);const o=document.createElement("label");i.appendChild(o);const c=document.createElement("input");c.setAttribute("type","color"),o.appendChild(c);const r=document.createElement("span");i.appendChild(r);const s=()=>{const a=t.colors[n];c.value=a,r.innerHTML=` ${a} <code>${n}</code>`};s(),c.oninput=a=>{const d=a.target.value;t.colors[n]=d,s(),t.reset(),v(n,d)}})}var y,h,f;function R(e){const t=document.getElementById("logo");t.onmouseleave=()=>{h=!1},t.onmouseenter=()=>{h=!0},x(e)}function x(e){requestAnimationFrame(()=>{y&&!h&&(e.perspective.rotate.y+=.015,e.updatePerspective()),e.update(),q(e),x(e)})}var C;function q(e){if(!e.illo)return;const{x:t,y:n,z:i}=w(e.illo.rotate),o=JSON.stringify({x:t,y:n,z:i},null,2),c=C!==o;if(C=o,!c)return;const r={x:t,y:n,z:i};f.forEach(s=>s(r))}function J(e){if(!e)throw new Error("Assertion failed.")}function B(e){return window.localStorage[`__vike_logo__input_${e}`]??null}function v(e,t){window.localStorage[`__vike_logo__input_${e}`]=t}function U(){window.localStorage.clear()}function k(e){return e===null?null:parseFloat(e)}function X(e){return Object.keys(e)}
