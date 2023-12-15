import{G as x,T as X,d as L,U as Y,F as k,D as j,E as O,V as Z,Q as D,W as B,h as q,X as H,Y as J,Z as K,_ as tt,$ as G,a0 as et,a1 as nt,a2 as it,a3 as st,a4 as rt}from"./scheduler.FZOJ7GWa.js";const Q=typeof window<"u";let F=Q?()=>window.performance.now():()=>Date.now(),I=Q?t=>requestAnimationFrame(t):x;const E=new Set;function T(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&I(T)}function N(t){let e;return E.size===0&&I(T),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}const P=new Map;let R=0;function at(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ot(t,e){const n={stylesheet:Y(e),rules:{}};return P.set(t,n),n}function z(t,e,n,r,u,a,l,i=0){const c=16.666/r;let s=`{
`;for(let $=0;$<=1;$+=c){const g=e+(n-e)*a($);s+=$*100+`%{${l(g,1-g)}}
`}const _=s+`100% {${l(n,1-n)}}
}`,f=`__svelte_${at(_)}_${i}`,m=X(t),{stylesheet:h,rules:o}=P.get(m)||ot(m,t);o[f]||(o[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const d=t.style.animation||"";return t.style.animation=`${d?`${d}, `:""}${f} ${r}ms linear ${u}ms 1 both`,R+=1,f}function A(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),u=n.length-r.length;u&&(t.style.animation=r.join(", "),R-=u,R||ft())}function ft(){I(()=>{R||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&L(e)}),P.clear())})}let S;function U(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function w(t,e,n){t.dispatchEvent(Z(`${e?"intro":"outro"}${n}`))}const M=new Set;let p;function ht(){p={r:0,c:[],p}}function mt(){p.r||k(p.c),p=p.p}function ut(t,e){t&&t.i&&(M.delete(t),t.i(e))}function gt(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),p.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const V={duration:0};function pt(t,e,n){const r={direction:"in"};let u=e(t,n,r),a=!1,l,i,c=0;function s(){l&&A(t,l)}function _(){const{delay:m=0,duration:h=300,easing:o=D,tick:d=x,css:$}=u||V;$&&(l=z(t,0,1,h,m,o,$,c++)),d(0,1);const g=F()+m,y=g+h;i&&i.abort(),a=!0,O(()=>w(t,!0,"start")),i=N(v=>{if(a){if(v>=y)return d(1,0),w(t,!0,"end"),s(),a=!1;if(v>=g){const b=o((v-g)/h);d(b,1-b)}}return a})}let f=!1;return{start(){f||(f=!0,A(t),j(u)?(u=u(r),U().then(_)):_())},invalidate(){f=!1},end(){a&&(s(),a=!1)}}}function yt(t,e,n){const r={direction:"out"};let u=e(t,n,r),a=!0,l;const i=p;i.r+=1;let c;function s(){const{delay:_=0,duration:f=300,easing:m=D,tick:h=x,css:o}=u||V;o&&(l=z(t,1,0,f,_,m,o));const d=F()+_,$=d+f;O(()=>w(t,!1,"start")),"inert"in t&&(c=t.inert,t.inert=!0),N(g=>{if(a){if(g>=$)return h(0,1),w(t,!1,"end"),--i.r||k(i.c),!1;if(g>=d){const y=m((g-d)/f);h(1-y,y)}}return a})}return j(u)?U().then(()=>{u=u(r),s()}):s(),{end(_){_&&"inert"in t&&(t.inert=c),_&&u.tick&&u.tick(1,0),a&&(l&&A(t,l),a=!1)}}}function vt(t,e,n,r){let a=e(t,n,{direction:"both"}),l=r?0:1,i=null,c=null,s=null,_;function f(){s&&A(t,s)}function m(o,d){const $=o.b-l;return d*=Math.abs($),{a:l,b:o.b,d:$,duration:d,start:o.start,end:o.start+d,group:o.group}}function h(o){const{delay:d=0,duration:$=300,easing:g=D,tick:y=x,css:v}=a||V,b={start:F()+d,b:o};o||(b.group=p,p.r+=1),"inert"in t&&(o?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),i||c?c=b:(v&&(f(),s=z(t,l,o,$,d,g,v)),o&&y(0,1),i=m(b,$),O(()=>w(t,o,"start")),N(C=>{if(c&&C>c.start&&(i=m(c,$),c=null,w(t,i.b,"start"),v&&(f(),s=z(t,l,i.b,i.duration,0,g,a.css))),i){if(C>=i.end)y(l=i.b,1-l),w(t,i.b,"end"),c||(i.b?f():--i.group.r||k(i.group.c)),i=null;else if(C>=i.start){const W=C-i.start;l=i.a+i.d*g(W/i.duration),y(l,1-l)}}return!!(i||c)}))}return{run(o){j(a)?U().then(()=>{a=a({direction:o?"in":"out"}),h(o)}):h(o)},end(){f(),i=c=null}}}function wt(t){t&&t.c()}function xt(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),O(()=>{const a=t.$$.on_mount.map(et).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...a):k(a),t.$$.on_mount=[]}),u.forEach(O)}function ct(t,e){const n=t.$$;n.fragment!==null&&(K(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(nt.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function bt(t,e,n,r,u,a,l=null,i=[-1]){const c=tt;G(t);const s=t.$$={fragment:null,ctx:[],props:a,update:x,not_equal:u,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:B(),dirty:i,skip_bound:!1,root:e.target||c.$$.root};l&&l(s.root);let _=!1;if(s.ctx=n?n(t,e.props||{},(f,m,...h)=>{const o=h.length?h[0]:m;return s.ctx&&u(s.ctx[f],s.ctx[f]=o)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](o),_&&_t(t,f)),m}):[],s.update(),_=!0,k(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){st();const f=q(e.target);s.fragment&&s.fragment.l(f),f.forEach(L)}else s.fragment&&s.fragment.c();e.intro&&ut(t.$$.fragment),lt(t,e.target,e.anchor),rt(),H()}G(c)}class Et{$$=void 0;$$set=void 0;$destroy(){ct(this,1),this.$destroy=x}$on(e,n){if(!j(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const u=r.indexOf(n);u!==-1&&r.splice(u,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);export{Et as S,ut as a,wt as b,mt as c,xt as d,ct as e,vt as f,ht as g,pt as h,bt as i,yt as j,lt as m,gt as t};