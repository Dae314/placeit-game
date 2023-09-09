import{F as Ce,s as de,e as ne,i as G,G as te,d as b,o as Pe,f as D,g as I,h as P,j as E,k as ce,N as Me,l as R,m as F,B as fe,C as _,a as J,I as We,c as Q,K as le,n as se,J as be,z as Ge,u as ve,O as qe,P as Ue,E as pe,M as K}from"../chunks/scheduler.407f67a1.js";import{t as ae,a as $,S as me,i as _e,g as Le,c as Ve,b as Oe,d as Re,m as Fe,e as He,f as ue,h as Ye}from"../chunks/index.e89b7c83.js";import{b as Ke}from"../chunks/paths.379e7418.js";import{a as ye,f as we,s as ze}from"../chunks/index.1030b2d1.js";import{A as z,s as Je}from"../chunks/AppData.725ebf90.js";import{A as Se}from"../chunks/Alert.39c2dfbf.js";import{f as oe}from"../chunks/formatTime.5f24a19a.js";function ie(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Qe(n,l){ae(n,1,1,()=>{l.delete(n.key)})}function Xe(n,l,t,s,e,a,o,i,p,r,c,w){let T=n.length,y=a.length,k=T;const O={};for(;k--;)O[n[k].key]=k;const B=[],q=new Map,M=new Map,H=[];for(k=y;k--;){const S=w(e,a,k),A=t(S);let u=o.get(A);u?s&&H.push(()=>u.p(S,l)):(u=r(A,S),u.c()),q.set(A,B[k]=u),A in O&&M.set(A,Math.abs(k-O[A]))}const L=new Set,V=new Set;function Y(S){$(S,1),S.m(i,c),o.set(S.key,S),c=S.first,y--}for(;T&&y;){const S=B[y-1],A=n[T-1],u=S.key,v=A.key;S===A?(c=S.first,T--,y--):q.has(v)?!o.has(u)||L.has(u)?Y(S):V.has(v)?T--:M.get(u)>M.get(v)?(V.add(u),Y(S)):(L.add(v),T--):(p(A,o),T--)}for(;T--;){const S=n[T];q.has(S.key)||p(S,o)}for(;y;)Y(B[y-1]);return Ce(H),B}function xe(n,l,t){const s=n.slice();return s[7]=l[t],s}function Te(n){let l,t=n[7]+"",s;return{c(){l=D("div"),s=R(t),this.h()},l(e){l=I(e,"DIV",{class:!0});var a=P(l);s=F(a,t),a.forEach(b),this.h()},h(){E(l,"class","digit svelte-tmlpoc"),fe(l,"active",n[0]==="x"||n[7]===n[0])},m(e,a){G(e,l,a),_(l,s)},p(e,a){a&5&&fe(l,"active",e[0]==="x"||e[7]===e[0])},d(e){e&&b(l)}}}function Ee(n){let l,t=ie(n[2]),s=[];for(let e=0;e<t.length;e+=1)s[e]=Te(xe(n,t,e));return{c(){l=D("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){l=I(e,"DIV",{class:!0,style:!0});var a=P(l);for(let o=0;o<s.length;o+=1)s[o].l(a);a.forEach(b),this.h()},h(){E(l,"class","container svelte-tmlpoc"),ce(l,"--line-height",n[1]+"px"),ce(l,"--offset",n[3](n[0])+"px")},m(e,a){G(e,l,a);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(l,null)},p(e,a){if(a&5){t=ie(e[2]);let o;for(o=0;o<t.length;o+=1){const i=xe(e,t,o);s[o]?s[o].p(i,a):(s[o]=Te(i),s[o].c(),s[o].m(l,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}a&2&&ce(l,"--line-height",e[1]+"px"),a&1&&ce(l,"--offset",e[3](e[0])+"px")},d(e){e&&b(l),Me(s,e)}}}function Ze(n){let l=n[1],t,s=Ee(n);return{c(){s.c(),t=ne()},l(e){s.l(e),t=ne()},m(e,a){s.m(e,a),G(e,t,a)},p(e,[a]){a&2&&de(l,l=e[1])?(s.d(1),s=Ee(e),s.c(),s.m(t.parentNode,t)):s.p(e,a)},i:te,o:te,d(e){e&&b(t),s.d(e)}}}function $e(n,l,t){let{number:s}=l,e=120;const a=["x",0,1,2,3,4,5,6,7,8,9];function o(c){return c==="x"?0:-(c+1)*e}Pe(async()=>{const c=window.matchMedia("(min-width: 740px)"),w=window.matchMedia("(max-width: 740px)"),T=window.matchMedia("(max-width: 330px)");c.addEventListener("change",i),w.addEventListener("change",p),T.addEventListener("change",r)});function i(c){c.matches&&t(1,e=120)}function p(c){c.matches&&t(1,e=100)}function r(c){c.matches&&t(1,e=75)}return n.$$set=c=>{"number"in c&&t(0,s=c.number)},[s,e,a,o]}class et extends me{constructor(l){super(),_e(this,l,$e,Ze,de,{number:0})}}function Ae(n,l,t){const s=n.slice();return s[2]=l[t],s[4]=t,s}function De(n,l){let t,s,e;return s=new et({props:{number:l[2]}}),{key:n,first:null,c(){t=ne(),Oe(s.$$.fragment),this.h()},l(a){t=ne(),Re(s.$$.fragment,a),this.h()},h(){this.first=t},m(a,o){G(a,t,o),Fe(s,a,o),e=!0},p(a,o){l=a;const i={};o&1&&(i.number=l[2]),s.$set(i)},i(a){e||($(s.$$.fragment,a),e=!0)},o(a){ae(s.$$.fragment,a),e=!1},d(a){a&&b(t),He(s,a)}}}function tt(n){let l,t,s=[],e=new Map,a,o=ie(n[0]);const i=p=>p[0].length-p[4];for(let p=0;p<o.length;p+=1){let r=Ae(n,o,p),c=i(r);e.set(c,s[p]=De(c,r))}return{c(){l=D("div"),t=D("div");for(let p=0;p<s.length;p+=1)s[p].c();this.h()},l(p){l=I(p,"DIV",{class:!0});var r=P(l);t=I(r,"DIV",{class:!0});var c=P(t);for(let w=0;w<s.length;w+=1)s[w].l(c);c.forEach(b),r.forEach(b),this.h()},h(){E(t,"class","digits svelte-157obfn"),E(l,"class","container svelte-157obfn")},m(p,r){G(p,l,r),_(l,t);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(t,null);a=!0},p(p,[r]){r&1&&(o=ie(p[0]),Le(),s=Xe(s,r,i,1,p,o,e,t,Qe,De,null,Ae),Ve())},i(p){if(!a){for(let r=0;r<o.length;r+=1)$(s[r]);a=!0}},o(p){for(let r=0;r<s.length;r+=1)ae(s[r]);a=!1},d(p){p&&b(l);for(let r=0;r<s.length;r+=1)s[r].d()}}}function lt(n,l,t){let s,{value:e=0}=l;return n.$$set=a=>{"value"in a&&t(1,e=a.value)},n.$$.update=()=>{n.$$.dirty&2&&t(0,s=e.toString().padStart(3,"x").split("").map(a=>a==="x"?a:Number(a)))},[s,e]}class st extends me{constructor(l){super(),_e(this,l,lt,tt,de,{value:1})}}function Ie(n,l,t){const s=n.slice();return s[22]=l[t],s[24]=t,s}function at(n){let l,t=n[24]+1+"",s;return{c(){l=D("span"),s=R(t),this.h()},l(e){l=I(e,"SPAN",{class:!0});var a=P(l);s=F(a,t),a.forEach(b),this.h()},h(){E(l,"class","unusedBucketText svelte-o8jsxk")},m(e,a){G(e,l,a),_(l,s)},p:te,i:te,o:te,d(e){e&&b(l)}}}function nt(n){let l,t=n[22].value+"",s,e;return{c(){l=D("span"),s=R(t)},l(a){l=I(a,"SPAN",{});var o=P(l);s=F(o,t),o.forEach(b)},m(a,o){G(a,l,o),_(l,s)},p(a,o){o&2&&t!==(t=a[22].value+"")&&se(s,t)},i(a){a&&(e||pe(()=>{e=Ye(l,ze,{duration:100}),e.start()}))},o:te,d(a){a&&b(l)}}}function Ne(n){let l,t,s,e,a,o,i,p;function r(y,k){return y[22].value?nt:at}let c=r(n),w=c(n);function T(){return n[11](n[24])}return{c(){l=D("div"),t=D("button"),w.c(),e=J(),a=D("div"),o=J(),this.h()},l(y){l=I(y,"DIV",{class:!0});var k=P(l);t=I(k,"BUTTON",{class:!0,type:!0});var O=P(t);w.l(O),O.forEach(b),e=Q(k),a=I(k,"DIV",{class:!0}),P(a).forEach(b),o=Q(k),k.forEach(b),this.h()},h(){E(t,"class","bucketButton svelte-o8jsxk"),E(t,"type","button"),t.disabled=s=n[22].disabled,E(a,"class","underline svelte-o8jsxk"),fe(a,"disabled",n[22].disabled),E(l,"class","bucket svelte-o8jsxk")},m(y,k){G(y,l,k),_(l,t),w.m(t,null),_(l,e),_(l,a),_(l,o),i||(p=ve(t,"click",T),i=!0)},p(y,k){n=y,c===(c=r(n))&&w?w.p(n,k):(w.d(1),w=c(n),w&&(w.c(),$(w,1),w.m(t,null))),k&2&&s!==(s=n[22].disabled)&&(t.disabled=s),k&2&&fe(a,"disabled",n[22].disabled)},d(y){y&&b(l),w.d(),i=!1,p()}}}function Be(n){let l,t,s="GAME OVER",e,a,o,i,p,r,c,w,T,y,k,O,B,q,M=n[10]("html")+"",H,L,V,Y="RETRY",S,A,u="SHARE",v,g,m,f;return{c(){l=D("div"),t=D("span"),t.textContent=s,a=J(),o=D("div"),i=D("p"),p=R("You placed "),r=R(n[3]),c=R(" out of "),w=R(Z),T=R(" tiles in "),y=R(n[4]),k=R("!"),O=J(),B=D("div"),q=new qe(!1),H=J(),L=D("div"),V=D("button"),V.textContent=Y,S=J(),A=D("button"),A.textContent=u,this.h()},l(d){l=I(d,"DIV",{class:!0});var C=P(l);t=I(C,"SPAN",{class:!0,"data-svelte-h":!0}),le(t)!=="svelte-1ey1o1x"&&(t.textContent=s),a=Q(C),o=I(C,"DIV",{class:!0});var N=P(o);i=I(N,"P",{class:!0});var x=P(i);p=F(x,"You placed "),r=F(x,n[3]),c=F(x," out of "),w=F(x,Z),T=F(x," tiles in "),y=F(x,n[4]),k=F(x,"!"),x.forEach(b),O=Q(N),B=I(N,"DIV",{class:!0});var h=P(B);q=Ue(h,!1),h.forEach(b),N.forEach(b),H=Q(C),L=I(C,"DIV",{class:!0});var j=P(L);V=I(j,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),le(V)!=="svelte-7t9phd"&&(V.textContent=Y),S=Q(j),A=I(j,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),le(A)!=="svelte-149veyf"&&(A.textContent=u),j.forEach(b),C.forEach(b),this.h()},h(){E(t,"class","gameOverText svelte-o8jsxk"),E(i,"class","svelte-o8jsxk"),q.a=null,E(B,"class","boardDisplay svelte-o8jsxk"),E(o,"class","statsArea svelte-o8jsxk"),E(V,"class","playAgainButton svelte-o8jsxk"),E(V,"type","button"),E(A,"class","shareButton svelte-o8jsxk"),E(A,"type","button"),E(L,"class","buttonArea svelte-o8jsxk"),E(l,"class","gameOverOverlay svelte-o8jsxk")},m(d,C){G(d,l,C),_(l,t),_(l,a),_(l,o),_(o,i),_(i,p),_(i,r),_(i,c),_(i,w),_(i,T),_(i,y),_(i,k),_(o,O),_(o,B),q.m(M,B),_(l,H),_(l,L),_(L,V),_(L,S),_(L,A),g=!0,m||(f=[ve(V,"click",n[7]),ve(A,"click",n[9])],m=!0)},p(d,C){n=d,(!g||C&8)&&se(r,n[3]),(!g||C&16)&&se(y,n[4])},i(d){g||(d&&pe(()=>{g&&(e||(e=ue(t,ye,{duration:re,y:"-250px"},!0)),e.run(1))}),d&&pe(()=>{g&&(v||(v=ue(l,we,{duration:re},!0)),v.run(1))}),g=!0)},o(d){d&&(e||(e=ue(t,ye,{duration:re,y:"-250px"},!1)),e.run(0)),d&&(v||(v=ue(l,we,{duration:re},!1)),v.run(0)),g=!1},d(d){d&&b(l),d&&e&&e.end(),d&&v&&v.end(),m=!1,Ce(f)}}}function it(n){let l,t,s=`<a href="${Ke}/" class="backButton svelte-o8jsxk">BACK</a>`,e,a,o,i,p,r,c,w="Time:",T,y=oe(n[5])+"",k,O,B,q="Previous Best:",M,H=n[6].playerStats.highestScore+"",L,V,Y,S,A=oe(n[6].playerStats.highestScoreTime)+"",u,v,g,m,f,d;i=new st({props:{value:n[0]}});let C=ie(n[1]),N=[];for(let h=0;h<C.length;h+=1)N[h]=Ne(Ie(n,C,h));let x=n[2]&&Be(n);return{c(){l=J(),t=D("div"),t.innerHTML=s,e=J(),a=D("div"),o=D("div"),Oe(i.$$.fragment),p=J(),r=D("div"),c=D("p"),c.textContent=w,T=D("p"),k=R(y),O=J(),B=D("p"),B.textContent=q,M=D("p"),L=R(H),V=R(" out of "),Y=R(Z),S=R(" in "),u=R(A),v=J(),g=D("div");for(let h=0;h<N.length;h+=1)N[h].c();m=J(),x&&x.c(),f=ne(),this.h()},l(h){We("svelte-1x4o49k",document.head).forEach(b),l=Q(h),t=I(h,"DIV",{class:!0,"data-svelte-h":!0}),le(t)!=="svelte-196lbky"&&(t.innerHTML=s),e=Q(h),a=I(h,"DIV",{class:!0});var U=P(a);o=I(U,"DIV",{class:!0});var W=P(o);Re(i.$$.fragment,W),W.forEach(b),p=Q(U),r=I(U,"DIV",{class:!0});var X=P(r);c=I(X,"P",{class:!0,"data-svelte-h":!0}),le(c)!=="svelte-16vailj"&&(c.textContent=w),T=I(X,"P",{class:!0});var ge=P(T);k=F(ge,y),ge.forEach(b),O=Q(X),B=I(X,"P",{class:!0,"data-svelte-h":!0}),le(B)!=="svelte-e36n45"&&(B.textContent=q),M=I(X,"P",{class:!0});var ee=P(M);L=F(ee,H),V=F(ee," out of "),Y=F(ee,Z),S=F(ee," in "),u=F(ee,A),ee.forEach(b),X.forEach(b),v=Q(U),g=I(U,"DIV",{class:!0});var ke=P(g);for(let he=0;he<N.length;he+=1)N[he].l(ke);ke.forEach(b),U.forEach(b),m=Q(h),x&&x.l(h),f=ne(),this.h()},h(){document.title="PlaceIt | Play",E(t,"class","navigation svelte-o8jsxk"),E(o,"class","rollArea"),E(c,"class","timeLabel svelte-o8jsxk"),E(T,"class","svelte-o8jsxk"),E(B,"class","timeLabel svelte-o8jsxk"),E(M,"class","svelte-o8jsxk"),E(r,"class","timeArea svelte-o8jsxk"),E(g,"class","tableArea svelte-o8jsxk"),E(a,"class","container svelte-o8jsxk")},m(h,j){G(h,l,j),G(h,t,j),G(h,e,j),G(h,a,j),_(a,o),Fe(i,o,null),_(a,p),_(a,r),_(r,c),_(r,T),_(T,k),_(r,O),_(r,B),_(r,M),_(M,L),_(M,V),_(M,Y),_(M,S),_(M,u),_(a,v),_(a,g);for(let U=0;U<N.length;U+=1)N[U]&&N[U].m(g,null);G(h,m,j),x&&x.m(h,j),G(h,f,j),d=!0},p(h,[j]){const U={};if(j&1&&(U.value=h[0]),i.$set(U),(!d||j&32)&&y!==(y=oe(h[5])+"")&&se(k,y),(!d||j&64)&&H!==(H=h[6].playerStats.highestScore+"")&&se(L,H),(!d||j&64)&&A!==(A=oe(h[6].playerStats.highestScoreTime)+"")&&se(u,A),j&258){C=ie(h[1]);let W;for(W=0;W<C.length;W+=1){const X=Ie(h,C,W);N[W]?N[W].p(X,j):(N[W]=Ne(X),N[W].c(),N[W].m(g,null))}for(;W<N.length;W+=1)N[W].d(1);N.length=C.length}h[2]?x?(x.p(h,j),j&4&&$(x,1)):(x=Be(h),x.c(),$(x,1),x.m(f.parentNode,f)):x&&(Le(),ae(x,1,1,()=>{x=null}),Ve())},i(h){d||($(i.$$.fragment,h),$(x),d=!0)},o(h){ae(i.$$.fragment,h),ae(x),d=!1},d(h){h&&(b(l),b(t),b(e),b(a),b(m),b(f)),He(i),Me(N,h),x&&x.d(h)}}}const Z=20,ot=1,je=999,rt=1e3,re=750,ct=10;function ut(n,l,t){let s,e;be(n,Se,u=>t(17,s=u)),be(n,z,u=>t(6,e=u));let a,o,i=new Array(Z).fill().map(()=>({disabled:!1,value:null})),p=!1,r=0,c,w,T,y,k,O;Pe(()=>{t(0,o=je),setTimeout(()=>q(),100)}),Ge(()=>{window.cancelAnimationFrame(k)});function B(u){if(u<y+1e3/ct){k=requestAnimationFrame(B);return}y=u,t(5,O=u-c),k=window.requestAnimationFrame(B)}function q(){a=[];for(let u=ot;u<=je;u++)a.push(u);t(1,i=new Array(Z).fill().map(()=>({disabled:!1,value:null}))),t(2,p=!1),setTimeout(()=>{c=window.performance.now(),y=c,k=window.requestAnimationFrame(B)},re),w={},M()}function M(){const v=a.length-1,g=Math.floor(Math.random()*(v-0+1))+0,m=a[g];a.splice(g,1),t(0,o=m),L()}function H(u){t(1,i[u].value=o,i),t(1,i[u].disabled=!0,i),M(),V()}function L(){if(i.every(m=>m.value===null))return;const u=i.filter(m=>m.value!==null).map(m=>m.value);let v=NaN;for(const m of u)m<o&&(isNaN(v)||m>v)&&(v=m);let g=NaN;for(const m of u)m>o&&(isNaN(g)||m<g)&&(g=m);if(isNaN(v)&&!isNaN(g)){let m=i.findIndex(f=>f.value===g);for(let f=0;f<m;f++)i[f].value||t(1,i[f].disabled=!1,i);for(let f=m+1;f<i.length;f++)i[f].value||t(1,i[f].disabled=!0,i)}else if(!isNaN(v)&&isNaN(g)){let m=i.findIndex(f=>f.value===v);for(let f=m;f<i.length;f++)i[f].value||t(1,i[f].disabled=!1,i);for(let f=0;f<m;f++)i[f].value||t(1,i[f].disabled=!0,i)}else{let m=i.findIndex(d=>d.value===v),f=i.findIndex(d=>d.value===g);for(let d=0;d<m;d++)i[d].value||t(1,i[d].disabled=!0,i);for(let d=m;d<f;d++)i[d].value||t(1,i[d].disabled=!1,i);for(let d=f;d<i.length;d++)i[d].value||t(1,i[d].disabled=!0,i)}}async function V(){let u;if(i.every(v=>v.value!==null)?u="win":i.every(v=>v.disabled===!0)?u="lose":u="continue",u!=="continue"){w=window.performance.now(),cancelAnimationFrame(k);const v=w-c;t(4,T=oe(v)),t(3,r=i.filter(f=>f.value!==null).length);const g=i.find(f=>f.value),m=i.toReversed().find(f=>f.value);K(z,e.playerStats.totalGames++,e),r>e.playerStats.highestScore?(K(z,e.playerStats.highestScore=r,e),K(z,e.playerStats.highestScoreTime=v,e)):r===e.playerStats.highestScore&&v<e.playerStats.highestScoreTime&&K(z,e.playerStats.highestScoreTime=v,e),m.value>e.playerStats.highestPlaced&&K(z,e.playerStats.highestPlaced=m.value,e),g.value<e.playerStats.lowestPlaced&&K(z,e.playerStats.lowestPlaced=g.value,e),u==="win"&&(K(z,e.playerStats.wonGames++,e),(e.playerStats.fastestWin===null||v<e.playerStats.fastestWin)&&K(z,e.playerStats.fastestWin=v,e),(e.playerStats.slowestWin===null||v>e.playerStats.slowestWin)&&K(z,e.playerStats.slowestWin=v,e),i[0].value>e.playerStats.highestFirstBucket&&K(z,e.playerStats.highestFirstBucket=i[0].value,e),i[Z-1]<e.playerStats.lowestLastBucket&&K(z,e.playerStats.lowestLastBucket=i[Z-1].value,e)),await Je(),setTimeout(()=>t(2,p=!0),rt)}}function Y(){const u=`I placed ${r} out of ${Z} tiles in ${T} on PlaceIt!`,v=S(),m=`${u}

${v}

Can you place more? https://placeitgame.app`;navigator.clipboard.writeText(m),K(Se,s={level:"info",message:"COPIED TO CLIPBOARD"},s)}function S(u="text"){let g="",m,f,d;u==="html"?(f="&#x2B1B;",d="&#x1F7E9;",m="<br/>"):(f="⬛",d="🟩",m=`
`);for(const[C,N]of i.entries())N.value===null?g=g+f:g=g+d,(C+1)%5===0&&(g=g+m);return g.trim()}return[o,i,p,r,T,O,e,q,H,Y,S,u=>H(u)]}class gt extends me{constructor(l){super(),_e(this,l,ut,it,de,{})}}export{gt as component};