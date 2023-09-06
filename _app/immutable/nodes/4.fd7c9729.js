import{s as Yt,f as e,a as h,l as S,g as s,h as r,K as u,c as f,m as _,d as n,j as a,i as Qt,D as t,n as m,H as Jt,J as Xt}from"../chunks/scheduler.2a48a4a4.js";import{S as Zt,i as te}from"../chunks/index.c5a2a3c6.js";import{A as ee}from"../chunks/AppData.c31825e0.js";import{b as se}from"../chunks/paths.8860bf9d.js";function ae(v){let p,d,K=`<a href="${se}/" class="backButton svelte-1xanv6m">BACK</a> <h1 class="svelte-1xanv6m">STATS</h1>`,z,l,E,A,It="TOTAL GAMES PLAYED",W,J=v[0].playerStats.totalGames+"",lt,ht,x,N,Bt="TOTAL GAMES WON",F,Y=v[0].playerStats.wonGames+"",nt,St,P,D,wt="MOST TILES PLACED",R,Q=v[0].playerStats.highestScore+"",rt,ft,y,g,Mt="LARGEST NUMBER PLACED",b,X=(v[0].playerStats.highestPlaced===-1?C:v[0].playerStats.highestPlaced)+"",vt,_t,T,L,kt="SMALLEST NUMBER PLACED",$,Z=(v[0].playerStats.lowestPlaced===1e3?C:v[0].playerStats.lowestPlaced)+"",ot,mt,V,I,Gt="SHORTEST WIN",H,tt=ut(v[0].playerStats.fastestWin)+"",ct,Ct,B,w,Ot="LONGEST WIN",U,et=ut(v[0].playerStats.slowestWin)+"",it,Et,M,k,Wt="LARGEST NUMBER ON FIRST TILE (WIN)",q,st=(v[0].playerStats.highestFirstBucket===-1?C:v[0].playerStats.highestFirstBucket)+"",pt,At,G,O,Ft="SMALLEST NUMBER ON LAST TILE (WIN)",j,at=(v[0].playerStats.lowestLastBucket===1e3?C:v[0].playerStats.highestFirstBucket)+"",dt;return{c(){p=e("div"),d=e("div"),d.innerHTML=K,z=h(),l=e("div"),E=e("div"),A=e("span"),A.textContent=It,W=e("span"),lt=S(J),ht=h(),x=e("div"),N=e("span"),N.textContent=Bt,F=e("span"),nt=S(Y),St=h(),P=e("div"),D=e("span"),D.textContent=wt,R=e("span"),rt=S(Q),ft=h(),y=e("div"),g=e("span"),g.textContent=Mt,b=e("span"),vt=S(X),_t=h(),T=e("div"),L=e("span"),L.textContent=kt,$=e("span"),ot=S(Z),mt=h(),V=e("div"),I=e("span"),I.textContent=Gt,H=e("span"),ct=S(tt),Ct=h(),B=e("div"),w=e("span"),w.textContent=Ot,U=e("span"),it=S(et),Et=h(),M=e("div"),k=e("span"),k.textContent=Wt,q=e("span"),pt=S(st),At=h(),G=e("div"),O=e("span"),O.textContent=Ft,j=e("span"),dt=S(at),this.h()},l(o){p=s(o,"DIV",{class:!0});var i=r(p);d=s(i,"DIV",{class:!0,"data-svelte-h":!0}),u(d)!=="svelte-bnqdop"&&(d.innerHTML=K),z=f(i),l=s(i,"DIV",{class:!0});var c=r(l);E=s(c,"DIV",{class:!0});var xt=r(E);A=s(xt,"SPAN",{class:!0,"data-svelte-h":!0}),u(A)!=="svelte-161znvo"&&(A.textContent=It),W=s(xt,"SPAN",{class:!0});var Rt=r(W);lt=_(Rt,J),Rt.forEach(n),xt.forEach(n),ht=f(c),x=s(c,"DIV",{class:!0});var Nt=r(x);N=s(Nt,"SPAN",{class:!0,"data-svelte-h":!0}),u(N)!=="svelte-wy2o59"&&(N.textContent=Bt),F=s(Nt,"SPAN",{class:!0});var bt=r(F);nt=_(bt,Y),bt.forEach(n),Nt.forEach(n),St=f(c),P=s(c,"DIV",{class:!0});var Pt=r(P);D=s(Pt,"SPAN",{class:!0,"data-svelte-h":!0}),u(D)!=="svelte-1yk390v"&&(D.textContent=wt),R=s(Pt,"SPAN",{class:!0});var $t=r(R);rt=_($t,Q),$t.forEach(n),Pt.forEach(n),ft=f(c),y=s(c,"DIV",{class:!0});var Dt=r(y);g=s(Dt,"SPAN",{class:!0,"data-svelte-h":!0}),u(g)!=="svelte-x01yvu"&&(g.textContent=Mt),b=s(Dt,"SPAN",{class:!0});var Ht=r(b);vt=_(Ht,X),Ht.forEach(n),Dt.forEach(n),_t=f(c),T=s(c,"DIV",{class:!0});var yt=r(T);L=s(yt,"SPAN",{class:!0,"data-svelte-h":!0}),u(L)!=="svelte-1yg17mx"&&(L.textContent=kt),$=s(yt,"SPAN",{class:!0});var Ut=r($);ot=_(Ut,Z),Ut.forEach(n),yt.forEach(n),mt=f(c),V=s(c,"DIV",{class:!0});var gt=r(V);I=s(gt,"SPAN",{class:!0,"data-svelte-h":!0}),u(I)!=="svelte-x8299o"&&(I.textContent=Gt),H=s(gt,"SPAN",{class:!0});var qt=r(H);ct=_(qt,tt),qt.forEach(n),gt.forEach(n),Ct=f(c),B=s(c,"DIV",{class:!0});var Tt=r(B);w=s(Tt,"SPAN",{class:!0,"data-svelte-h":!0}),u(w)!=="svelte-1ind4gg"&&(w.textContent=Ot),U=s(Tt,"SPAN",{class:!0});var jt=r(U);it=_(jt,et),jt.forEach(n),Tt.forEach(n),Et=f(c),M=s(c,"DIV",{class:!0});var Lt=r(M);k=s(Lt,"SPAN",{class:!0,"data-svelte-h":!0}),u(k)!=="svelte-1sd6g3b"&&(k.textContent=Wt),q=s(Lt,"SPAN",{class:!0});var Kt=r(q);pt=_(Kt,st),Kt.forEach(n),Lt.forEach(n),At=f(c),G=s(c,"DIV",{class:!0});var Vt=r(G);O=s(Vt,"SPAN",{class:!0,"data-svelte-h":!0}),u(O)!=="svelte-1vqwtji"&&(O.textContent=Ft),j=s(Vt,"SPAN",{class:!0});var zt=r(j);dt=_(zt,at),zt.forEach(n),Vt.forEach(n),c.forEach(n),i.forEach(n),this.h()},h(){a(d,"class","header svelte-1xanv6m"),a(A,"class","statDesc"),a(W,"class","statValue svelte-1xanv6m"),a(E,"class","statCard svelte-1xanv6m"),a(N,"class","statDesc"),a(F,"class","statValue svelte-1xanv6m"),a(x,"class","statCard svelte-1xanv6m"),a(D,"class","statDesc"),a(R,"class","statValue svelte-1xanv6m"),a(P,"class","statCard svelte-1xanv6m"),a(g,"class","statDesc"),a(b,"class","statValue svelte-1xanv6m"),a(y,"class","statCard svelte-1xanv6m"),a(L,"class","statDesc"),a($,"class","statValue svelte-1xanv6m"),a(T,"class","statCard svelte-1xanv6m"),a(I,"class","statDesc"),a(H,"class","statValue svelte-1xanv6m"),a(V,"class","statCard svelte-1xanv6m"),a(w,"class","statDesc"),a(U,"class","statValue svelte-1xanv6m"),a(B,"class","statCard svelte-1xanv6m"),a(k,"class","statDesc"),a(q,"class","statValue svelte-1xanv6m"),a(M,"class","statCard svelte-1xanv6m"),a(O,"class","statDesc"),a(j,"class","statValue svelte-1xanv6m"),a(G,"class","statCard svelte-1xanv6m"),a(l,"class","statsArea svelte-1xanv6m"),a(p,"class","container svelte-1xanv6m")},m(o,i){Qt(o,p,i),t(p,d),t(p,z),t(p,l),t(l,E),t(E,A),t(E,W),t(W,lt),t(l,ht),t(l,x),t(x,N),t(x,F),t(F,nt),t(l,St),t(l,P),t(P,D),t(P,R),t(R,rt),t(l,ft),t(l,y),t(y,g),t(y,b),t(b,vt),t(l,_t),t(l,T),t(T,L),t(T,$),t($,ot),t(l,mt),t(l,V),t(V,I),t(V,H),t(H,ct),t(l,Ct),t(l,B),t(B,w),t(B,U),t(U,it),t(l,Et),t(l,M),t(M,k),t(M,q),t(q,pt),t(l,At),t(l,G),t(G,O),t(G,j),t(j,dt)},p(o,[i]){i&1&&J!==(J=o[0].playerStats.totalGames+"")&&m(lt,J),i&1&&Y!==(Y=o[0].playerStats.wonGames+"")&&m(nt,Y),i&1&&Q!==(Q=o[0].playerStats.highestScore+"")&&m(rt,Q),i&1&&X!==(X=(o[0].playerStats.highestPlaced===-1?C:o[0].playerStats.highestPlaced)+"")&&m(vt,X),i&1&&Z!==(Z=(o[0].playerStats.lowestPlaced===1e3?C:o[0].playerStats.lowestPlaced)+"")&&m(ot,Z),i&1&&tt!==(tt=ut(o[0].playerStats.fastestWin)+"")&&m(ct,tt),i&1&&et!==(et=ut(o[0].playerStats.slowestWin)+"")&&m(it,et),i&1&&st!==(st=(o[0].playerStats.highestFirstBucket===-1?C:o[0].playerStats.highestFirstBucket)+"")&&m(pt,st),i&1&&at!==(at=(o[0].playerStats.lowestLastBucket===1e3?C:o[0].playerStats.highestFirstBucket)+"")&&m(dt,at)},i:Jt,o:Jt,d(o){o&&n(p)}}}const C="NONE";function ut(v){let p=Math.floor(v/6e4),d=(v%6e4/1e3).toFixed(0);return`${p}:${d<10?"0":""}${d}`}function le(v,p,d){let K;return Xt(v,ee,z=>d(0,K=z)),[K]}class ce extends Zt{constructor(p){super(),te(this,p,le,ae,Yt,{})}}export{ce as component};