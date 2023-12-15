import{s as z,f as i,a as C,g as h,h as B,K as m,c as x,d as y,j as l,i as O,C as n,u as S,G as A,L as U,I as N}from"../chunks/scheduler.FZOJ7GWa.js";import{S as D,i as V}from"../chunks/index.Y9GCii0e.js";import{b as w}from"../chunks/paths.7fZqtb3F.js";function R(_){let t,a,e="How to Play",d,o,T=`<source src="${w}/rules_resources/rules.webm" type="video/webm"/><source src="${w}/rules_resources/rules.mp4" type="video/mp4"/>`,v,r,L="Close",c,H;return{c(){t=i("div"),a=i("h2"),a.textContent=e,d=C(),o=i("video"),o.innerHTML=T,v=C(),r=i("button"),r.textContent=L,this.h()},l(f){t=h(f,"DIV",{class:!0});var s=B(t);a=h(s,"H2",{class:!0,"data-svelte-h":!0}),m(a)!=="svelte-192fuhr"&&(a.textContent=e),d=x(s),o=h(s,"VIDEO",{class:!0,"data-svelte-h":!0}),m(o)!=="svelte-ib4dea"&&(o.innerHTML=T),v=x(s),r=h(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),m(r)!=="svelte-r6q9qk"&&(r.textContent=L),s.forEach(y),this.h()},h(){l(a,"class","svelte-11ghzgi"),o.autoplay=!0,o.loop=!0,o.playsInline=!0,l(o,"class","svelte-11ghzgi"),l(r,"type","button"),l(r,"class","svelte-11ghzgi"),l(t,"class","container svelte-11ghzgi")},m(f,s){O(f,t,s),n(t,a),n(t,d),n(t,o),n(t,v),n(t,r),c||(H=S(r,"click",_[0]),c=!0)},p:A,i:A,o:A,d(f){f&&y(t),c=!1,H()}}}function G(_){const{close:t}=U("simple-modal");function a(){t()}return[a]}class K extends D{constructor(t){super(),V(this,t,G,R,z,{})}}function Y(_){let t,a,e,d,o='<span class="logo1 svelte-l59t5g">Place</span><span class="logo2 svelte-l59t5g">It</span>',T,v,r="A game about numbers and places",L,c,H="PLAY",f,s,P="RULES",I,p,q="STATS",$,g,M="ABOUT",E,j;return{c(){t=i("meta"),a=C(),e=i("div"),d=i("h1"),d.innerHTML=o,T=C(),v=i("h2"),v.textContent=r,L=C(),c=i("a"),c.textContent=H,f=C(),s=i("button"),s.textContent=P,I=C(),p=i("a"),p.textContent=q,$=C(),g=i("a"),g.textContent=M,this.h()},l(b){const k=N("svelte-jlwwuy",document.head);t=h(k,"META",{name:!0,content:!0}),k.forEach(y),a=x(b),e=h(b,"DIV",{class:!0});var u=B(e);d=h(u,"H1",{class:!0,"data-svelte-h":!0}),m(d)!=="svelte-1qo6rwh"&&(d.innerHTML=o),T=x(u),v=h(u,"H2",{class:!0,"data-svelte-h":!0}),m(v)!=="svelte-i9mqnj"&&(v.textContent=r),L=x(u),c=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),m(c)!=="svelte-rjh6lr"&&(c.textContent=H),f=x(u),s=h(u,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),m(s)!=="svelte-8ejkn5"&&(s.textContent=P),I=x(u),p=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),m(p)!=="svelte-rqr30g"&&(p.textContent=q),$=x(u),g=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),m(g)!=="svelte-g8cnzi"&&(g.textContent=M),u.forEach(y),this.h()},h(){document.title="PlaceIt | A game about numbers and places",l(t,"name","description"),l(t,"content","Play PlaceIt a game about numbers and places."),l(d,"class","svelte-l59t5g"),l(v,"class","svelte-l59t5g"),l(c,"class","playLink svelte-l59t5g"),l(c,"href",w+"/game"),l(s,"type","button"),l(s,"class","howToButton svelte-l59t5g"),l(p,"class","statsLink svelte-l59t5g"),l(p,"href",w+"/stats"),l(g,"class","aboutLink svelte-l59t5g"),l(g,"href",w+"/about"),l(e,"class","container svelte-l59t5g")},m(b,k){n(document.head,t),O(b,a,k),O(b,e,k),n(e,d),n(e,T),n(e,v),n(e,L),n(e,c),n(e,f),n(e,s),n(e,I),n(e,p),n(e,$),n(e,g),E||(j=S(s,"click",_[0]),E=!0)},p:A,i:A,o:A,d(b){b&&(y(a),y(e)),y(t),E=!1,j()}}}function F(_){const{open:t}=U("simple-modal");function a(){t(K,{},{closeButton:!1,closeOnEsc:!0,closeOnOuterClick:!0})}return[a]}class X extends D{constructor(t){super(),V(this,t,F,Y,z,{})}}export{X as component};