import"./modulepreload-polyfill.b7f2da20.js";import{H as k,t as x,f as C}from"./Hammer.b1599f3a.js";T();function I(){return{colorPicker:document.getElementById("colorPicker"),handleDiameterPicker:document.getElementById("handleDiameterPicker"),handleLengthPicker:document.getElementById("handleLengthPicker"),zdogView:document.getElementById("zdogView"),faviconSize:document.getElementById("faviconSize"),autoSpinning:document.getElementById("autoSpinning"),resetBtn:document.querySelector("button"),hideBackLightningBolt:document.getElementById("hideBackLightningBolt"),rotateX:document.getElementById("rotate-x"),rotateY:document.getElementById("rotate-y"),rotateZ:document.getElementById("rotate-z"),translateX:document.getElementById("translate-x"),translateY:document.getElementById("translate-y"),translateZ:document.getElementById("translate-z")}}function T(){const e=I(),t=new k(document.querySelector("#logo"));t.dragRotate=!0,V(e.zdogView),$(e.colorPicker,t),E(t,e.handleDiameterPicker,"handleDiameter"),E(t,e.handleLengthPicker,"handleLength"),H(e.faviconSize),_(e.autoSpinning),A(e.resetBtn),P(e.hideBackLightningBolt,t),L(t,e),S(t),t.init()}function L(e,{rotateX:t,rotateY:o,rotateZ:i,translateX:r,translateY:l,translateZ:c}){[{elem:t,type:"rotate",axis:"x"},{elem:o,type:"rotate",axis:"y"},{elem:i,type:"rotate",axis:"z"}].forEach(({elem:d,axis:n,type:s})=>{const a=()=>e.perspective[s],g=B({elem:d,labelText:`<code>${n}</code> (${s})`,getValue(){return x(a())[n]},setValue(u){a()[n]=C(u)},hammer:e});s==="rotate"&&(m||(m=[]),m.push(u=>{const p=u[n];g(p)}))})}function E(e,t,o){B({elem:t,labelText:`<code>${o}</code>`,getValue(){return e[o]},setValue(i){e[o]=i},hammer:e})}function B({elem:e,labelText:t,getValue:o,setValue:i,hammer:r}){const l=e.id;{const u=z(b(l));u&&i(u)}e.innerHTML="";const c=document.createElement("div");e.appendChild(c);const d=document.createElement("label");c.appendChild(d);const n=document.createElement("input");n.setAttribute("type","number"),n.setAttribute("step","0.1"),n.style.width="40px",n.style.padding="4px",d.appendChild(n);const s=document.createElement("span");s.innerHTML=" "+t,c.appendChild(s);const a=o();return n.value=String(a),n.oninput=u=>{const p=u.target.value,w=z(p);i(w),r.reset(),v(l,p)},u=>{const p=String(u);n.value=p,v(l,p)}}function V(e){h({elem:e,labelText:"Icon view",onToggle(t){document.body.classList[t?"remove":"add"]("zdogView")}})}function H(e){h({elem:e,labelText:"Favicon size",onToggle(t){document.body.classList[t?"add":"remove"]("faviconSize")}})}function _(e){h({elem:e,labelText:"Auto spinning",onToggle(t){f=t}})}function P(e,t){h({elem:e,labelText:"Hide back lightning bolt",onToggle(o){t.hideBackLightningBolt=o},applyValue(){t.reset()}})}function h({elem:e,labelText:t,onToggle:o,applyValue:i}){e.innerHTML="";const r=document.createElement("label");e.appendChild(r);const l=document.createElement("input");l.setAttribute("type","checkbox"),r.appendChild(l),r.appendChild(document.createTextNode(t));const{id:c}=e;N(c);const d=()=>{var a,g;return(g=JSON.parse((a=b(c))!=null?a:'"{}"').isChecked)!=null?g:!1},n=()=>{let a=d();a=!a,v(c,JSON.stringify({isChecked:a}))},s=a=>{const g=d();o(g),l.checked=g,a||i==null||i(g)};l.oninput=a=>{a.preventDefault(),n(),s()},s(!0)}function A(e){e.onclick=()=>{f=!1,F(),window.navigation.reload()}}function $(e,t){e.innerHTML="",M(t.colors).forEach(o=>{{const n=b(o);n&&(t.colors[o]=n)}const i=document.createElement("div");e.appendChild(i);const r=document.createElement("label");i.appendChild(r);const l=document.createElement("input");l.setAttribute("type","color"),r.appendChild(l);const c=document.createElement("span");i.appendChild(c);const d=()=>{const n=t.colors[o];l.value=n,c.innerHTML=` ${n} <code>${o}</code>`};d(),l.oninput=n=>{const s=n.target.value;t.colors[o]=s,d(),t.reset(),v(o,s)}})}var f,m;function S(e){e.onDragStart=()=>{f=!1},requestAnimationFrame(()=>{f&&(e.perspective.rotate.y+=.03,e.updatePerspective()),e.update(),D(e),S(e)})}var y;function D(e){if(!e.illo)return;const{x:t,y:o,z:i}=x(e.illo.rotate),r=JSON.stringify({x:t,y:o,z:i},null,2),l=y!==r;if(y=r,!l)return;const c={x:t,y:o,z:i};m.forEach(d=>d(c))}function N(e){if(!e)throw new Error("Assertion failed.")}function b(e){var t;return(t=window.localStorage[`__vike_logo__input_${e}`])!=null?t:null}function v(e,t){window.localStorage[`__vike_logo__input_${e}`]=t}function F(){window.localStorage.clear()}function z(e){return e===null?null:parseFloat(e)}function M(e){return Object.keys(e)}
