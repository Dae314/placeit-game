import{s as z,f as i,a as g,g as h,h as B,K as f,c as C,d as y,j as l,i as O,C as n,u as S,G as A,L as U,I as V}from"../chunks/scheduler.407f67a1.js";import{S as D,i as R}from"../chunks/index.e89b7c83.js";import{b as w}from"../chunks/paths.e392fc65.js";function N(x){let t,a,e="How to Play",d,o,T=`<source src="${w}/rules_resources/rules.webm" type="video/webm"/><source src="${w}/rules_resources/rules.mp4" type="video/mp4"/>`,v,r,L="Close",c,H;return{c(){t=i("div"),a=i("h2"),a.textContent=e,d=g(),o=i("video"),o.innerHTML=T,v=g(),r=i("button"),r.textContent=L,this.h()},l(p){t=h(p,"DIV",{class:!0});var s=B(t);a=h(s,"H2",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-192fuhr"&&(a.textContent=e),d=C(s),o=h(s,"VIDEO",{class:!0,"data-svelte-h":!0}),f(o)!=="svelte-ib4dea"&&(o.innerHTML=T),v=C(s),r=h(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),f(r)!=="svelte-r6q9qk"&&(r.textContent=L),s.forEach(y),this.h()},h(){l(a,"class","svelte-11ghzgi"),o.autoplay=!0,o.loop=!0,o.playsInline=!0,l(o,"class","svelte-11ghzgi"),l(r,"type","button"),l(r,"class","svelte-11ghzgi"),l(t,"class","container svelte-11ghzgi")},m(p,s){O(p,t,s),n(t,a),n(t,d),n(t,o),n(t,v),n(t,r),c||(H=S(r,"click",x[0]),c=!0)},p:A,i:A,o:A,d(p){p&&y(t),c=!1,H()}}}function G(x){const{close:t}=U("simple-modal");function a(){t()}return[a]}class K extends D{constructor(t){super(),R(this,t,G,N,z,{})}}function Y(x){let t,a,e,d,o='<span class="logo1 svelte-l59t5g">Place</span><span class="logo2 svelte-l59t5g">It</span>',T,v,r="A game about numbers and places",L,c,H="PLAY",p,s,P="RULES",I,m,q="STATS",$,_,M="ABOUT",E,j;return{c(){t=i("meta"),a=g(),e=i("div"),d=i("h1"),d.innerHTML=o,T=g(),v=i("h2"),v.textContent=r,L=g(),c=i("a"),c.textContent=H,p=g(),s=i("button"),s.textContent=P,I=g(),m=i("a"),m.textContent=q,$=g(),_=i("a"),_.textContent=M,this.h()},l(b){const k=V("svelte-jlwwuy",document.head);t=h(k,"META",{name:!0,content:!0}),k.forEach(y),a=C(b),e=h(b,"DIV",{class:!0});var u=B(e);d=h(u,"H1",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-1qo6rwh"&&(d.innerHTML=o),T=C(u),v=h(u,"H2",{class:!0,"data-svelte-h":!0}),f(v)!=="svelte-i9mqnj"&&(v.textContent=r),L=C(u),c=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),f(c)!=="svelte-rjh6lr"&&(c.textContent=H),p=C(u),s=h(u,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),f(s)!=="svelte-8ejkn5"&&(s.textContent=P),I=C(u),m=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),f(m)!=="svelte-rqr30g"&&(m.textContent=q),$=C(u),_=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),f(_)!=="svelte-g8cnzi"&&(_.textContent=M),u.forEach(y),this.h()},h(){document.title="PlaceIt | A game about numbers and places",l(t,"name","description"),l(t,"content","Play PlaceIt a game about numbers and places."),l(d,"class","svelte-l59t5g"),l(v,"class","svelte-l59t5g"),l(c,"class","playLink svelte-l59t5g"),l(c,"href",w+"/game"),l(s,"type","button"),l(s,"class","howToButton svelte-l59t5g"),l(m,"class","statsLink svelte-l59t5g"),l(m,"href",w+"/stats"),l(_,"class","aboutLink svelte-l59t5g"),l(_,"href",w+"/about"),l(e,"class","container svelte-l59t5g")},m(b,k){n(document.head,t),O(b,a,k),O(b,e,k),n(e,d),n(e,T),n(e,v),n(e,L),n(e,c),n(e,p),n(e,s),n(e,I),n(e,m),n(e,$),n(e,_),E||(j=S(s,"click",x[0]),E=!0)},p:A,i:A,o:A,d(b){b&&(y(a),y(e)),y(t),E=!1,j()}}}function F(x){const{open:t}=U("simple-modal");function a(){t(K,{},{closeButton:!1,closeOnEsc:!0,closeOnOuterClick:!0})}return[a]}class X extends D{constructor(t){super(),R(this,t,F,Y,z,{})}}export{X as component};
