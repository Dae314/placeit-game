import{s as O,f as p,a as y,g as f,h as w,K as x,c as g,d as j,j as a,i as E,D as l,v as z,H as b,J as R,L as M,M as P,G as V}from"../chunks/scheduler.2a48a4a4.js";import{S as U,i as I}from"../chunks/index.c5a2a3c6.js";import{b as B}from"../chunks/paths.33c3c0b0.js";import{A as T,s as N,m as G}from"../chunks/AppData.c31825e0.js";function J(i){let t,s,o="How to Play",r,e,v="Close",h,c;return{c(){t=p("div"),s=p("h2"),s.textContent=o,r=y(),e=p("button"),e.textContent=v,this.h()},l(m){t=f(m,"DIV",{class:!0});var u=w(t);s=f(u,"H2",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-192fuhr"&&(s.textContent=o),r=g(u),e=f(u,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),x(e)!=="svelte-r6q9qk"&&(e.textContent=v),u.forEach(j),this.h()},h(){a(s,"class","svelte-o0q7t3"),a(e,"type","button"),a(e,"class","svelte-o0q7t3"),a(t,"class","container svelte-o0q7t3")},m(m,u){E(m,t,u),l(t,s),l(t,r),l(t,e),h||(c=z(e,"click",i[0]),h=!0)},p:b,i:b,o:b,d(m){m&&j(t),h=!1,c()}}}function K(i,t,s){let o;R(i,T,v=>s(1,o=v));const{close:r}=M("simple-modal");function e(){P(T,o.appSettings.showRules=!1,o),N(),r()}return[e]}class Y extends U{constructor(t){super(),I(this,t,K,J,O,{})}}function F(i){let t,s,o='<span class="logo1 svelte-1ezyejf">Place</span><span class="logo2 svelte-1ezyejf">It</span>',r,e,v="A game about numbers and places",h,c,m="PLAY",u,d,H="RULES",q,C,L="STATS",D,_,$="CLEAR DATA",k,S;return{c(){t=p("div"),s=p("h1"),s.innerHTML=o,r=y(),e=p("h2"),e.textContent=v,h=y(),c=p("a"),c.textContent=m,u=y(),d=p("button"),d.textContent=H,q=y(),C=p("a"),C.textContent=L,D=y(),_=p("button"),_.textContent=$,this.h()},l(A){t=f(A,"DIV",{class:!0});var n=w(t);s=f(n,"H1",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-1qo6rwh"&&(s.innerHTML=o),r=g(n),e=f(n,"H2",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-i9mqnj"&&(e.textContent=v),h=g(n),c=f(n,"A",{class:!0,href:!0,"data-svelte-h":!0}),x(c)!=="svelte-rjh6lr"&&(c.textContent=m),u=g(n),d=f(n,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),x(d)!=="svelte-8ejkn5"&&(d.textContent=H),q=g(n),C=f(n,"A",{class:!0,href:!0,"data-svelte-h":!0}),x(C)!=="svelte-rqr30g"&&(C.textContent=L),D=g(n),_=f(n,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),x(_)!=="svelte-geqdf6"&&(_.textContent=$),n.forEach(j),this.h()},h(){a(s,"class","svelte-1ezyejf"),a(e,"class","svelte-1ezyejf"),a(c,"class","playLink svelte-1ezyejf"),a(c,"href",B+"/game"),a(d,"type","button"),a(d,"class","howToButton svelte-1ezyejf"),a(C,"class","statsLink svelte-1ezyejf"),a(C,"href",B+"/stats"),a(_,"type","button"),a(_,"class","clearStatsButton svelte-1ezyejf"),a(t,"class","container svelte-1ezyejf")},m(A,n){E(A,t,n),l(t,s),l(t,r),l(t,e),l(t,h),l(t,c),l(t,u),l(t,d),l(t,q),l(t,C),l(t,D),l(t,_),k||(S=[z(d,"click",i[0]),z(_,"click",i[1])],k=!0)},p:b,i:b,o:b,d(A){A&&j(t),k=!1,V(S)}}}function Q(i,t,s){let o;R(i,T,h=>s(2,o=h));const{open:r}=M("simple-modal");function e(){r(Y,{},{closeButton:!1,closeOnEsc:!0,closeOnOuterClick:!0})}function v(){P(T,o=G(),o),N()}return[e,v]}class et extends U{constructor(t){super(),I(this,t,Q,F,O,{})}}export{et as component};
