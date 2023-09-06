import{G as Ne,s as ae,e as ne,i as M,H as ue,d as y,f as T,g as N,h as I,j as S,k as $,N as Ae,l as H,m as F,C as V,D as w,a as K,c as Q,K as se,v as fe,n as he,J as Pe,o as Le,M as j}from"../chunks/scheduler.2a48a4a4.js";import{t as ie,a as oe,S as de,i as ve,g as Re,c as xe,b as Ie,d as Ce,m as Ve,e as Be}from"../chunks/index.c5a2a3c6.js";import{A as G,s as We}from"../chunks/AppData.c31825e0.js";function te(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Ge(i,l){ie(i,1,1,()=>{l.delete(i.key)})}function He(i,l,t,e,n,a,s,h,c,p,b,_){let m=i.length,d=a.length,k=m;const B={};for(;k--;)B[i[k].key]=k;const P=[],U=new Map,R=new Map,q=[];for(k=d;k--;){const r=_(n,a,k),g=t(r);let o=s.get(g);o?e&&q.push(()=>o.p(r,l)):(o=p(g,r),o.c()),U.set(g,P[k]=o),g in B&&R.set(g,Math.abs(k-B[g]))}const z=new Set,O=new Set;function v(r){oe(r,1),r.m(h,b),s.set(r.key,r),b=r.first,d--}for(;m&&d;){const r=P[d-1],g=i[m-1],o=r.key,u=g.key;r===g?(b=r.first,m--,d--):U.has(u)?!s.has(o)||z.has(o)?v(r):O.has(u)?m--:R.get(o)>R.get(u)?(O.add(o),v(r)):(z.add(u),m--):(c(g,s),m--)}for(;m--;){const r=i[m];U.has(r.key)||c(r,s)}for(;d;)v(P[d-1]);return Ne(q),P}function ge(i,l,t){const e=i.slice();return e[10]=l[t],e}function ye(i){let l,t=i[10]+"",e;return{c(){l=T("div"),e=H(t),this.h()},l(n){l=N(n,"DIV",{class:!0});var a=I(l);e=F(a,t),a.forEach(y),this.h()},h(){S(l,"class","digit svelte-tmlpoc"),V(l,"active",i[0]==="x"||i[10]===i[0])},m(n,a){M(n,l,a),w(l,e)},p(n,a){a&5&&V(l,"active",n[0]==="x"||n[10]===n[0])},d(n){n&&y(l)}}}function ke(i){let l,t=te(i[2]),e=[];for(let n=0;n<t.length;n+=1)e[n]=ye(ge(i,t,n));return{c(){l=T("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){l=N(n,"DIV",{class:!0,style:!0});var a=I(l);for(let s=0;s<e.length;s+=1)e[s].l(a);a.forEach(y),this.h()},h(){S(l,"class","container svelte-tmlpoc"),$(l,"--line-height",i[1]+"px"),$(l,"--offset",i[3](i[0])+"px")},m(n,a){M(n,l,a);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(l,null)},p(n,a){if(a&5){t=te(n[2]);let s;for(s=0;s<t.length;s+=1){const h=ge(n,t,s);e[s]?e[s].p(h,a):(e[s]=ye(h),e[s].c(),e[s].m(l,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=t.length}a&2&&$(l,"--line-height",n[1]+"px"),a&1&&$(l,"--offset",n[3](n[0])+"px")},d(n){n&&y(l),Ae(e,n)}}}function Fe(i){let l=i[1],t,e=ke(i);return{c(){e.c(),t=ne()},l(n){e.l(n),t=ne()},m(n,a){e.m(n,a),M(n,t,a)},p(n,[a]){a&2&&ae(l,l=n[1])?(e.d(1),e=ke(n),e.c(),e.m(t.parentNode,t)):e.p(n,a)},i:ue,o:ue,d(n){n&&y(t),e.d(n)}}}function Ue(i,l,t){let{number:e}=l,n=120;const a=["x",0,1,2,3,4,5,6,7,8,9];function s(d){return d==="x"?0:-(d+1)*n}const h=window.matchMedia("(min-width: 740px)"),c=window.matchMedia("(max-width: 740px)"),p=window.matchMedia("(max-width: 330px)");h.addEventListener("change",b),c.addEventListener("change",_),p.addEventListener("change",m);function b(d){d.matches&&t(1,n=120)}function _(d){d.matches&&t(1,n=100)}function m(d){d.matches&&t(1,n=75)}return i.$$set=d=>{"number"in d&&t(0,e=d.number)},[e,n,a,s]}class Ye extends de{constructor(l){super(),ve(this,l,Ue,Fe,ae,{number:0})}}function we(i,l,t){const e=i.slice();return e[2]=l[t],e[4]=t,e}function De(i,l){let t,e,n;return e=new Ye({props:{number:l[2]}}),{key:i,first:null,c(){t=ne(),Ie(e.$$.fragment),this.h()},l(a){t=ne(),Ce(e.$$.fragment,a),this.h()},h(){this.first=t},m(a,s){M(a,t,s),Ve(e,a,s),n=!0},p(a,s){l=a;const h={};s&1&&(h.number=l[2]),e.$set(h)},i(a){n||(oe(e.$$.fragment,a),n=!0)},o(a){ie(e.$$.fragment,a),n=!1},d(a){a&&y(t),Be(e,a)}}}function je(i){let l,t,e=[],n=new Map,a,s=te(i[0]);const h=c=>c[0].length-c[4];for(let c=0;c<s.length;c+=1){let p=we(i,s,c),b=h(p);n.set(b,e[c]=De(b,p))}return{c(){l=T("div"),t=T("div");for(let c=0;c<e.length;c+=1)e[c].c();this.h()},l(c){l=N(c,"DIV",{class:!0});var p=I(l);t=N(p,"DIV",{class:!0});var b=I(t);for(let _=0;_<e.length;_+=1)e[_].l(b);b.forEach(y),p.forEach(y),this.h()},h(){S(t,"class","digits svelte-157obfn"),S(l,"class","container svelte-157obfn")},m(c,p){M(c,l,p),w(l,t);for(let b=0;b<e.length;b+=1)e[b]&&e[b].m(t,null);a=!0},p(c,[p]){p&1&&(s=te(c[0]),Re(),e=He(e,p,h,1,c,s,n,t,Ge,De,null,we),xe())},i(c){if(!a){for(let p=0;p<s.length;p+=1)oe(e[p]);a=!0}},o(c){for(let p=0;p<e.length;p+=1)ie(e[p]);a=!1},d(c){c&&y(l);for(let p=0;p<e.length;p+=1)e[p].d()}}}function qe(i,l,t){let e,{value:n=0}=l;return i.$$set=a=>{"value"in a&&t(1,n=a.value)},i.$$.update=()=>{i.$$.dirty&2&&t(0,e=n.toString().padStart(3,"x").split("").map(a=>a==="x"?a:Number(a)))},[e,n]}class ze extends de{constructor(l){super(),ve(this,l,qe,je,ae,{value:1})}}function Se(i,l,t){const e=i.slice();return e[19]=l[t],e[21]=t,e}function Je(i){let l,t=i[21]+1+"",e;return{c(){l=T("span"),e=H(t),this.h()},l(n){l=N(n,"SPAN",{class:!0});var a=I(l);e=F(a,t),a.forEach(y),this.h()},h(){S(l,"class","unusedBucketText svelte-o6hcsb")},m(n,a){M(n,l,a),w(l,e)},p:ue,d(n){n&&y(l)}}}function Ke(i){let l,t=i[19].value+"",e;return{c(){l=T("span"),e=H(t)},l(n){l=N(n,"SPAN",{});var a=I(l);e=F(a,t),a.forEach(y)},m(n,a){M(n,l,a),w(l,e)},p(n,a){a&2&&t!==(t=n[19].value+"")&&he(e,t)},d(n){n&&y(l)}}}function Ee(i){let l,t,e,n,a,s,h,c;function p(d,k){return d[19].value?Ke:Je}let b=p(i),_=b(i);function m(){return i[10](i[21])}return{c(){l=T("div"),t=T("button"),_.c(),n=K(),a=T("div"),s=K(),this.h()},l(d){l=N(d,"DIV",{class:!0});var k=I(l);t=N(k,"BUTTON",{class:!0,type:!0});var B=I(t);_.l(B),B.forEach(y),n=Q(k),a=N(k,"DIV",{class:!0}),I(a).forEach(y),s=Q(k),k.forEach(y),this.h()},h(){S(t,"class","bucketButton svelte-o6hcsb"),S(t,"type","button"),t.disabled=e=i[19].disabled,S(a,"class","underline svelte-o6hcsb"),V(a,"disabled",i[19].disabled),S(l,"class","bucket svelte-o6hcsb")},m(d,k){M(d,l,k),w(l,t),_.m(t,null),w(l,n),w(l,a),w(l,s),h||(c=fe(t,"click",m),h=!0)},p(d,k){i=d,b===(b=p(i))&&_?_.p(i,k):(_.d(1),_=b(i),_&&(_.c(),_.m(t,null))),k&2&&e!==(e=i[19].disabled)&&(t.disabled=e),k&2&&V(a,"disabled",i[19].disabled)},d(d){d&&y(l),_.d(),h=!1,c()}}}function Qe(i){let l,t,e,n,a,s,h,c,p="GAME OVER",b,_,m,d,k,B,P,U,R,q,z,O,v,r="RETRY",g,o,u="SHARE",D,x,X,pe="COPIED TO CLIPBOARD!",L,re,me;e=new ze({props:{value:i[0]}});let Z=te(i[1]),A=[];for(let f=0;f<Z.length;f+=1)A[f]=Ee(Se(i,Z,f));return{c(){l=T("div"),t=T("div"),Ie(e.$$.fragment),n=K(),a=T("div");for(let f=0;f<A.length;f+=1)A[f].c();s=K(),h=T("div"),c=T("span"),c.textContent=p,b=K(),_=T("div"),m=T("p"),d=H("You placed "),k=H(i[5]),B=H(" out of "),P=H(ee),U=H(" tiles in "),R=H(i[6]),q=H("!"),z=K(),O=T("div"),v=T("button"),v.textContent=r,g=K(),o=T("button"),o.textContent=u,D=K(),x=T("div"),X=T("p"),X.textContent=pe,this.h()},l(f){l=N(f,"DIV",{class:!0});var E=I(l);t=N(E,"DIV",{class:!0});var W=I(t);Ce(e.$$.fragment,W),W.forEach(y),n=Q(E),a=N(E,"DIV",{class:!0});var C=I(a);for(let ce=0;ce<A.length;ce+=1)A[ce].l(C);C.forEach(y),E.forEach(y),s=Q(f),h=N(f,"DIV",{class:!0,style:!0});var Y=I(h);c=N(Y,"SPAN",{class:!0,"data-svelte-h":!0}),se(c)!=="svelte-1avriz"&&(c.textContent=p),b=Q(Y),_=N(Y,"DIV",{class:!0});var _e=I(_);m=N(_e,"P",{class:!0});var J=I(m);d=F(J,"You placed "),k=F(J,i[5]),B=F(J," out of "),P=F(J,ee),U=F(J," tiles in "),R=F(J,i[6]),q=F(J,"!"),J.forEach(y),_e.forEach(y),z=Q(Y),O=N(Y,"DIV",{class:!0});var le=I(O);v=N(le,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),se(v)!=="svelte-7t9phd"&&(v.textContent=r),g=Q(le),o=N(le,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),se(o)!=="svelte-149veyf"&&(o.textContent=u),le.forEach(y),Y.forEach(y),D=Q(f),x=N(f,"DIV",{class:!0,style:!0});var be=I(x);X=N(be,"P",{class:!0,"data-svelte-h":!0}),se(X)!=="svelte-k1nd5u"&&(X.textContent=pe),be.forEach(y),this.h()},h(){S(t,"class","rollArea svelte-o6hcsb"),S(a,"class","tableArea svelte-o6hcsb"),S(l,"class","container svelte-o6hcsb"),S(c,"class","gameOverText svelte-o6hcsb"),V(c,"textVisible",i[2]),V(c,"dismissTextAnimation",i[3]),S(m,"class","svelte-o6hcsb"),S(_,"class","statsArea svelte-o6hcsb"),S(v,"class","playAgainButton svelte-o6hcsb"),S(v,"type","button"),S(o,"class","shareButton svelte-o6hcsb"),S(o,"type","button"),S(O,"class","buttonArea svelte-o6hcsb"),S(h,"class","gameOverOverlay svelte-o6hcsb"),$(h,"--gameOverAnimationTime",Me+"ms"),V(h,"visible",i[2]),V(h,"dismissAnimation",i[3]),S(X,"class","svelte-o6hcsb"),S(x,"class","copyConfirm svelte-o6hcsb"),$(x,"--copyConfirmDelay",Oe+"ms"),V(x,"copyVisible",i[4])},m(f,E){M(f,l,E),w(l,t),Ve(e,t,null),w(l,n),w(l,a);for(let W=0;W<A.length;W+=1)A[W]&&A[W].m(a,null);M(f,s,E),M(f,h,E),w(h,c),w(h,b),w(h,_),w(_,m),w(m,d),w(m,k),w(m,B),w(m,P),w(m,U),w(m,R),w(m,q),w(h,z),w(h,O),w(O,v),w(O,g),w(O,o),M(f,D,E),M(f,x,E),w(x,X),L=!0,re||(me=[fe(v,"click",i[7]),fe(o,"click",i[9])],re=!0)},p(f,[E]){const W={};if(E&1&&(W.value=f[0]),e.$set(W),E&258){Z=te(f[1]);let C;for(C=0;C<Z.length;C+=1){const Y=Se(f,Z,C);A[C]?A[C].p(Y,E):(A[C]=Ee(Y),A[C].c(),A[C].m(a,null))}for(;C<A.length;C+=1)A[C].d(1);A.length=Z.length}(!L||E&4)&&V(c,"textVisible",f[2]),(!L||E&8)&&V(c,"dismissTextAnimation",f[3]),(!L||E&32)&&he(k,f[5]),(!L||E&64)&&he(R,f[6]),(!L||E&4)&&V(h,"visible",f[2]),(!L||E&8)&&V(h,"dismissAnimation",f[3]),(!L||E&16)&&V(x,"copyVisible",f[4])},i(f){L||(oe(e.$$.fragment,f),L=!0)},o(f){ie(e.$$.fragment,f),L=!1},d(f){f&&(y(l),y(s),y(h),y(D),y(x)),Be(e),Ae(A,f),re=!1,Ne(me)}}}const ee=20,Xe=1,Te=999,Ze=1e3,Me=750,Oe=1e3;function $e(i){let l=Math.floor(i/6e4),t=(i%6e4/1e3).toFixed(0);return`${l}:${t<10?"0":""}${t}`}function et(i,l,t){let e;Pe(i,G,v=>t(14,e=v));let n,a,s=new Array(ee).fill().map(()=>({disabled:!1,value:null})),h=!1,c=!1,p=!1,b=0,_=new Date,m,d;Le(()=>{t(0,a=Te),setTimeout(()=>k(),100)});function k(){n=[];for(let v=Xe;v<=Te;v++)n.push(v);t(1,s=new Array(ee).fill().map(()=>({disabled:!1,value:null}))),t(3,c=!0),setTimeout(()=>{t(2,h=!1),t(3,c=!1),_=new Date},Me),m={},B()}function B(){const r=n.length,g=Math.floor(Math.random()*(r-0+1))+0,o=n[g];n.splice(g,1),t(0,a=o),U()}function P(v){t(1,s[v].value=a,s),t(1,s[v].disabled=!0,s),B(),R()}function U(){if(s.every(o=>o.value===null))return;const v=s.filter(o=>o.value!==null).map(o=>o.value);let r=NaN;for(const o of v)o<a&&(isNaN(r)||o>r)&&(r=o);let g=NaN;for(const o of v)o>a&&(isNaN(g)||o<g)&&(g=o);if(isNaN(r)&&!isNaN(g)){let o=s.findIndex(u=>u.value===g);for(let u=0;u<o;u++)s[u].value||t(1,s[u].disabled=!1,s);for(let u=o+1;u<s.length;u++)s[u].value||t(1,s[u].disabled=!0,s)}else if(!isNaN(r)&&isNaN(g)){let o=s.findIndex(u=>u.value===r);for(let u=o;u<s.length;u++)s[u].value||t(1,s[u].disabled=!1,s);for(let u=0;u<o;u++)s[u].value||t(1,s[u].disabled=!0,s)}else{let o=s.findIndex(D=>D.value===r),u=s.findIndex(D=>D.value===g);for(let D=0;D<o;D++)s[D].value||t(1,s[D].disabled=!0,s);for(let D=o;D<u;D++)s[D].value||t(1,s[D].disabled=!1,s);for(let D=u;D<s.length;D++)s[D].value||t(1,s[D].disabled=!0,s)}}function R(){let v;if(s.every(r=>r.value!==null)?v="win":s.every(r=>r.disabled===!0)?v="lose":v="continue",v!=="continue"){m=new Date,t(6,d=$e(m-_)),t(5,b=s.filter(o=>o.value!==null).length);let r=s.reduce((o,u)=>u.value>o.value?u:o),g=s.reduce((o,u)=>u.value<o.value?u:o);j(G,e.playerStats.totalGames++,e),b>e.playerStats.highestScore&&j(G,e.playerStats.highestScore=b,e),r>e.playerStats.highestPlaced&&j(G,e.playerStats.highestPlaced=r,e),g<e.playerStats.lowestPlaced&&j(G,e.playerStats.lowestPlaced=g,e),v==="win"&&(j(G,e.playerStats.wonGames++,e),(e.playerStats.fastestWin===null||m-_<e.playerStats.fastestWin)&&j(G,e.playerStats.fastestWin=m-_,e),(e.playerStats.slowestWin===null||m-_>e.playerStats.slowestWin)&&j(G,e.playerStats.slowestWin=m-_,e),s[0].value>e.playerStats.highestFirstBucket&&j(G,e.playerStats.highestFirstBucket=s[0].value,e),s[ee-1]<e.playerStats.lowestLastBucket&&j(G,e.playerStats.lowestLastBucket=s[ee-1].value,e)),We(),setTimeout(()=>t(2,h=!0),Ze)}}function q(){const v=`I placed ${b} tiles in ${d} on PlaceIt!`,r=z(),o=`${v}

${r}

Play at https://placitgame.net`;navigator.clipboard.writeText(o),t(4,p=!0),setTimeout(()=>t(4,p=!1),Oe)}function z(){let r="";for(const[g,o]of s.entries())o.value===null?r=r+"🟨":r=r+"🟦",(g+1)%5===0&&(r=r+`
`);return r.trim()}return[a,s,h,c,p,b,d,k,P,q,v=>P(v)]}class nt extends de{constructor(l){super(),ve(this,l,et,Qe,ae,{})}}export{nt as component};
