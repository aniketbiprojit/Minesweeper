var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let b;function g(t){b=t}const p=[],m=[],y=[],$=[],v=Promise.resolve();let k=!1;function x(t){y.push(t)}let _=!1;const w=new Set;function A(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];g(e),E(e.$$)}for(g(null),p.length=0;m.length;)m.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];w.has(e)||(w.add(e),e())}y.length=0}while(p.length);for(;$.length;)$.pop()();k=!1,_=!1,w.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const L=new Set;function C(t,e){-1===t.$$.dirty[0]&&(p.push(t),k||(k=!0,v.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(s,l,c,a,f,u,d=[-1]){const h=b;g(s);const p=l.props||{},m=s.$$={fragment:null,ctx:null,props:u,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let y=!1;if(m.ctx=c?c(s,p,((t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&f(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),y&&C(s,t)),e})):[],m.update(),y=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();l.intro&&(($=s.$$.fragment)&&$.i&&(L.delete($),$.i(v))),function(t,n,s){const{fragment:l,on_mount:c,on_destroy:i,after_update:a}=t.$$;l&&l.m(n,s),x((()=>{const n=c.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(x)}(s,l.target,l.anchor),A()}var $,v;g(h)}function S(t,e,n){const o=t.slice();return o[3]=e[n],o[5]=n,o}function I(t,e,n){const o=t.slice();return o[3]=e[n],o[7]=n,o}function N(t){let e,n,o;return{c(){e=f("div"),e.innerHTML='<p class="svelte-lfsy38"></p> \n\t\t\t\t',h(e,"class","cell hidden svelte-lfsy38"),h(e,"data-x",t[5]),h(e,"data-y",t[7])},m(s,l){var i,a,f,u;c(s,e,l),n||(a="click",f=function(){r(t[2])&&t[2].apply(this,arguments)},(i=e).addEventListener(a,f,u),o=()=>i.removeEventListener(a,f,u),n=!0)},p(e,n){t=e},d(t){t&&i(e),n=!1,o()}}}function T(t){let e,n=Array(t[1]),o=[];for(let e=0;e<n.length;e+=1)o[e]=N(I(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=u("")},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);c(t,e,n)},p(t,r){if(6&r){let s;for(n=Array(t[1]),s=0;s<n.length;s+=1){const l=I(t,n,s);o[s]?o[s].p(l,r):(o[s]=N(l),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){a(o,t),t&&i(e)}}}function j(e){let n,o,r,s,u,b,g,p,m,y,$=Array(e[0]),v=[];for(let t=0;t<$.length;t+=1)v[t]=T(S(e,$,t));return{c(){n=f("main"),o=f("span"),r=d(),s=f("span"),u=d(),b=f("span"),g=d(),p=f("h1"),p.textContent="Minesweeper",m=d(),y=f("div");for(let t=0;t<v.length;t+=1)v[t].c();h(o,"class","hidden svelte-lfsy38"),h(s,"class","bomb svelte-lfsy38"),h(b,"class","blue svelte-lfsy38"),h(y,"class","grid svelte-lfsy38"),h(y,"id","grid")},m(t,e){c(t,n,e),l(n,o),l(n,r),l(n,s),l(n,u),l(n,b),l(n,g),l(n,p),l(n,m),l(n,y);for(let t=0;t<v.length;t+=1)v[t].m(y,null)},p(t,[e]){if(7&e){let n;for($=Array(t[0]),n=0;n<$.length;n+=1){const o=S(t,$,n);v[n]?v[n].p(o,e):(v[n]=T(o),v[n].c(),v[n].m(y,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=$.length}},i:t,o:t,d(t){t&&i(n),a(v,t)}}}function B(t,e,n){let{rows:o}=e,{cols:r}=e,{handleClick:s}=e;return t.$$set=t=>{"rows"in t&&n(0,o=t.rows),"cols"in t&&n(1,r=t.cols),"handleClick"in t&&n(2,s=t.handleClick)},[o,r,s]}const H=10,O=10,q=new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),M(this,t,B,j,s,{rows:0,cols:1,handleClick:2})}}({target:document.body,props:{rows:H,cols:O,handleClick:function(t){const e={block:t.target},n=parseInt(e.block.dataset.x),o=parseInt(e.block.dataset.y);J(n,o)}}}),P=document.getElementById("grid");P.style.height=Math.floor(400).toString()+"px",P.style.width=Math.floor(400).toString()+"px";const z=Array.from(Array(H),(()=>new Array(O)));class D{constructor(t){this.visible=!1,this.bomb=!1,this.neighbours=0,this.block=t,Math.random()<.1&&(this.bomb=!0,this.block.classList.add("bomb"))}reveal(){this.block.classList.remove("hidden"),this.bomb?this.setInner(""):this.setInner(this.neighbours.toString())}setInner(t){this.block.children[0].innerHTML=t}}const F=document.getElementsByClassName("cell");Array.from(F).forEach((t=>{if(t instanceof HTMLElement){const e=new D(t),n=e.block.dataset.x.toString(),o=e.block.dataset.y.toString();z[n][o]=e}}));for(let t=0;t<H;t++)for(let e=0;e<O;e++){const n=G(t,e);z[t][e].neighbours=n}function G(t,e){if(z[t][e].bomb)return-1;let n=0;for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const s=t+o,l=e+r;-1!==s&&-1!==l&&s!==H&&l!==O&&(z[s][l].bomb&&n++)}return n}function J(t,e){const n=z[t][e];if(n.bomb)return function(){for(let t=0;t<H;t++)for(let e=0;e<O;e++){const n=z[t][e];n.reveal(),n.visible=!0,n.block.classList.add("blue")}}();if(n.reveal(),n.block.classList.add("blue"),n.visible=!0,0===n.neighbours)for(let n=-1;n<=1;n++)for(let o=-1;o<=1;o++){const r=t+n,s=e+o;if(-1===r||-1===s||r===H||s===O)continue;const l=z[r][s];l.reveal(),l.block.classList.add("blue"),0===l.neighbours&&!0!==l.visible&&J(r,s)}}return q}();
//# sourceMappingURL=bundle.js.map
