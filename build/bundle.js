var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function a(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let g;function p(t){g=t}const b=[],m=[],$=[],y=[],k=Promise.resolve();let v=!1;function x(t){$.push(t)}let _=!1;const w=new Set;function A(){if(!_){_=!0;do{for(let t=0;t<b.length;t+=1){const n=b[t];p(n),E(n.$$)}for(p(null),b.length=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];w.has(n)||(w.add(n),n())}$.length=0}while(b.length);for(;y.length;)y.pop()();v=!1,_=!1,w.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const L=new Set;function C(t,n){-1===t.$$.dirty[0]&&(b.push(t),v||(v=!0,k.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(l,s,c,a,u,f,d=[-1]){const h=g;p(l);const b=s.props||{},m=l.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let $=!1;if(m.ctx=c?c(l,b,((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),$&&C(l,t)),n})):[],m.update(),$=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();s.intro&&((y=l.$$.fragment)&&y.i&&(L.delete(y),y.i(k))),function(t,e,l){const{fragment:s,on_mount:c,on_destroy:i,after_update:a}=t.$$;s&&s.m(e,l),x((()=>{const e=c.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(x)}(l,s.target,s.anchor),A()}var y,k;p(h)}function S(t,n,e){const o=t.slice();return o[3]=n[e],o[5]=e,o}function I(t,n,e){const o=t.slice();return o[3]=n[e],o[7]=e,o}function N(t){let n,e,o;return{c(){n=u("div"),n.innerHTML='<p class="svelte-1l4xcno"></p> \n\t\t\t\t',h(n,"class","cell hidden svelte-1l4xcno"),h(n,"data-x",t[5]),h(n,"data-y",t[7])},m(l,s){var i,a,u,f;c(l,n,s),e||(a="click",u=function(){r(t[2])&&t[2].apply(this,arguments)},(i=n).addEventListener(a,u,f),o=()=>i.removeEventListener(a,u,f),e=!0)},p(n,e){t=n},d(t){t&&i(n),e=!1,o()}}}function T(t){let n,e=Array(t[1]),o=[];for(let n=0;n<e.length;n+=1)o[n]=N(I(t,e,n));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=f("")},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);c(t,n,e)},p(t,r){if(6&r){let l;for(e=Array(t[1]),l=0;l<e.length;l+=1){const s=I(t,e,l);o[l]?o[l].p(s,r):(o[l]=N(s),o[l].c(),o[l].m(n.parentNode,n))}for(;l<o.length;l+=1)o[l].d(1);o.length=e.length}},d(t){a(o,t),t&&i(n)}}}function j(n){let e,o,r,l,f,g,p,b,m=Array(n[0]),$=[];for(let t=0;t<m.length;t+=1)$[t]=T(S(n,m,t));return{c(){e=u("main"),o=u("span"),r=d(),l=u("span"),f=d(),g=u("span"),p=d(),b=u("div");for(let t=0;t<$.length;t+=1)$[t].c();h(o,"class","hidden svelte-1l4xcno"),h(l,"class","bomb svelte-1l4xcno"),h(g,"class","blue svelte-1l4xcno"),h(b,"class","grid svelte-1l4xcno"),h(b,"id","grid")},m(t,n){c(t,e,n),s(e,o),s(e,r),s(e,l),s(e,f),s(e,g),s(e,p),s(e,b);for(let t=0;t<$.length;t+=1)$[t].m(b,null)},p(t,[n]){if(7&n){let e;for(m=Array(t[0]),e=0;e<m.length;e+=1){const o=S(t,m,e);$[e]?$[e].p(o,n):($[e]=T(o),$[e].c(),$[e].m(b,null))}for(;e<$.length;e+=1)$[e].d(1);$.length=m.length}},i:t,o:t,d(t){t&&i(e),a($,t)}}}function B(t,n,e){let{rows:o}=n,{cols:r}=n,{handleClick:l}=n;return t.$$set=t=>{"rows"in t&&e(0,o=t.rows),"cols"in t&&e(1,r=t.cols),"handleClick"in t&&e(2,l=t.handleClick)},[o,r,l]}const H=10,O=10,q=new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),M(this,t,B,j,l,{rows:0,cols:1,handleClick:2})}}({target:document.body,props:{rows:H,cols:O,handleClick:function(t){const n={block:t.target},e=parseInt(n.block.dataset.x),o=parseInt(n.block.dataset.y);J(e,o)}}}),P=document.getElementById("grid");P.style.height=Math.floor(400).toString()+"px",P.style.width=Math.floor(400).toString()+"px";const z=Array.from(Array(H),(()=>new Array(O)));class D{constructor(t){this.visible=!1,this.bomb=!1,this.neighbours=0,this.block=t,Math.random()<.1&&(this.bomb=!0,this.block.classList.add("bomb"))}reveal(){this.block.classList.remove("hidden"),this.bomb?this.setInner(""):this.setInner(this.neighbours.toString())}setInner(t){this.block.children[0].innerHTML=t}}const F=document.getElementsByClassName("cell");Array.from(F).forEach((t=>{if(t instanceof HTMLElement){const n=new D(t),e=n.block.dataset.x.toString(),o=n.block.dataset.y.toString();z[e][o]=n}}));for(let t=0;t<H;t++)for(let n=0;n<O;n++){const e=G(t,n);z[t][n].neighbours=e}function G(t,n){if(console.log(t,n,0),z[t][n].bomb)return-1;let e=0;for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const l=t+o,s=n+r;console.log(l,s),-1!==l&&-1!==s&&l!==H&&s!==O&&(z[l][s].bomb&&e++)}return e}function J(t,n){const e=z[t][n];if(e.reveal(),e.block.classList.add("blue"),e.visible=!0,0===e.neighbours)for(let e=-1;e<=1;e++)for(let o=-1;o<=1;o++){const r=t+e,l=n+o;if(-1===r||-1===l||r===H||l===O)continue;const s=z[r][l];s.reveal(),s.block.classList.add("blue"),0===s.neighbours&&!0!==s.visible&&J(r,l)}}return q}();
//# sourceMappingURL=bundle.js.map
