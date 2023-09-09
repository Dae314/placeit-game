import{s as B,f as i,a as g,g as h,h as S,K as f,c as C,d as y,j as l,i as P,C as n,u as j,G as A,L as U,I as V}from"../chunks/scheduler.407f67a1.js";import{S as D,i as R}from"../chunks/index.e89b7c83.js";import{b as $}from"../chunks/paths.379e7418.js";function N(x){let t,a,e="How to Play",v,o,T=`<source src="${$}/rules_resources/rules.webm" type="video/webm"/><source src="${$}/rules_resources/rules.mp4" type="video/mp4"/>`,d,r,L="Close",c,H;return{c(){t=i("div"),a=i("h2"),a.textContent=e,v=g(),o=i("video"),o.innerHTML=T,d=g(),r=i("button"),r.textContent=L,this.h()},l(p){t=h(p,"DIV",{class:!0});var s=S(t);a=h(s,"H2",{class:!0,"data-svelte-h":!0}),f(a)!=="svelte-192fuhr"&&(a.textContent=e),v=C(s),o=h(s,"VIDEO",{class:!0,"data-svelte-h":!0}),f(o)!=="svelte-62rrao"&&(o.innerHTML=T),d=C(s),r=h(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),f(r)!=="svelte-r6q9qk"&&(r.textContent=L),s.forEach(y),this.h()},h(){l(a,"class","svelte-11ghzgi"),o.autoplay=!0,o.loop=!0,l(o,"class","svelte-11ghzgi"),l(r,"type","button"),l(r,"class","svelte-11ghzgi"),l(t,"class","container svelte-11ghzgi")},m(p,s){P(p,t,s),n(t,a),n(t,v),n(t,o),n(t,d),n(t,r),c||(H=j(r,"click",x[0]),c=!0)},p:A,i:A,o:A,d(p){p&&y(t),c=!1,H()}}}function G(x){const{close:t}=U("simple-modal");function a(){t()}return[a]}class K extends D{constructor(t){super(),R(this,t,G,N,B,{})}}function Y(x){let t,a,e,v,o='<span class="logo1 svelte-l59t5g">Place</span><span class="logo2 svelte-l59t5g">It</span>',T,d,r="A game about numbers and places",L,c,H="PLAY",p,s,q="RULES",E,m,w="STATS",I,_,M="ABOUT",O,z;return{c(){t=i("meta"),a=g(),e=i("div"),v=i("h1"),v.innerHTML=o,T=g(),d=i("h2"),d.textContent=r,L=g(),c=i("a"),c.textContent=H,p=g(),s=i("button"),s.textContent=q,E=g(),m=i("a"),m.textContent=w,I=g(),_=i("a"),_.textContent=M,this.h()},l(b){const k=V("svelte-a870g3",document.head);t=h(k,"META",{name:!0,content:!0}),k.forEach(y),a=C(b),e=h(b,"DIV",{class:!0});var u=S(e);v=h(u,"H1",{class:!0,"data-svelte-h":!0}),f(v)!=="svelte-1qo6rwh"&&(v.innerHTML=o),T=C(u),d=h(u,"H2",{class:!0,"data-svelte-h":!0}),f(d)!=="svelte-i9mqnj"&&(d.textContent=r),L=C(u),c=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),f(c)!=="svelte-rjh6lr"&&(c.textContent=H),p=C(u),s=h(u,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),f(s)!=="svelte-8ejkn5"&&(s.textContent=q),E=C(u),m=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),f(m)!=="svelte-rqr30g"&&(m.textContent=w),I=C(u),_=h(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),f(_)!=="svelte-g8cnzi"&&(_.textContent=M),u.forEach(y),this.h()},h(){document.title="PlaceIt | A game about numbers and places",l(t,"name","description"),l(t,"content","Play PlaceIt"),l(v,"class","svelte-l59t5g"),l(d,"class","svelte-l59t5g"),l(c,"class","playLink svelte-l59t5g"),l(c,"href",$+"/game"),l(s,"type","button"),l(s,"class","howToButton svelte-l59t5g"),l(m,"class","statsLink svelte-l59t5g"),l(m,"href",$+"/stats"),l(_,"class","aboutLink svelte-l59t5g"),l(_,"href",$+"/about"),l(e,"class","container svelte-l59t5g")},m(b,k){n(document.head,t),P(b,a,k),P(b,e,k),n(e,v),n(e,T),n(e,d),n(e,L),n(e,c),n(e,p),n(e,s),n(e,E),n(e,m),n(e,I),n(e,_),O||(z=j(s,"click",x[0]),O=!0)},p:A,i:A,o:A,d(b){b&&(y(a),y(e)),y(t),O=!1,z()}}}function F(x){const{open:t}=U("simple-modal");function a(){t(K,{},{closeButton:!1,closeOnEsc:!0,closeOnOuterClick:!0})}return[a]}class X extends D{constructor(t){super(),R(this,t,F,Y,B,{})}}export{X as component};
