import{b as q,m as B,A as U,s as j}from"../chunks/AppData.UMjKFfdY.js";import{s as J,a as M,e as d,c as W,i as b,d as h,b as z,o as F,f as G,g as H,h as K,j as P,k as p,l as Q,m as X,n as Y,t as Z,p as L,q as v}from"../chunks/scheduler.FZOJ7GWa.js";import{S as $,i as x,t as g,c as R,a as w,g as y,b as E,d as I,m as A,e as D}from"../chunks/index.Y9GCii0e.js";const ee="modulepreload",te=function(o,e){return new URL(o,e).href},S={},k=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=te(t,i),t in S)return;S[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let u=c.length-1;u>=0;u--){const m=c[u];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":ee,r||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),r)return new Promise((u,m)=>{a.addEventListener("load",u),a.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})};ne();function ne(){let o;window.localStorage.getItem("AppData")!==null?(o=JSON.parse(window.localStorage.getItem("AppData")),o=q(o)):o=B(),U.set(o),j()}const _e={};function ie(o){let e,n,i;var s=o[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=v(s,c(o)),o[12](e)),{c(){e&&E(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&A(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){y();const l=e;g(l.$$.fragment,1,0,()=>{D(l,1)}),R()}s?(e=v(s,c(t)),t[12](e),E(e.$$.fragment),w(e.$$.fragment,1),A(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[12](null),e&&D(e,t)}}}function se(o){let e,n,i;var s=o[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[re]},$$scope:{ctx:t}}}}return s&&(e=v(s,c(o)),o[11](e)),{c(){e&&E(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&A(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){y();const l=e;g(l.$$.fragment,1,0,()=>{D(l,1)}),R()}s?(e=v(s,c(t)),t[11](e),E(e.$$.fragment),w(e.$$.fragment,1),A(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[11](null),e&&D(e,t)}}}function re(o){let e,n,i;var s=o[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=v(s,c(o)),o[10](e)),{c(){e&&E(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,r){e&&A(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){y();const l=e;g(l.$$.fragment,1,0,()=>{D(l,1)}),R()}s?(e=v(s,c(t)),t[10](e),E(e.$$.fragment),w(e.$$.fragment,1),A(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),o[10](null),e&&D(e,t)}}}function O(o){let e,n=o[6]&&N(o);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(h),this.h()},h(){P(e,"id","svelte-announcer"),P(e,"aria-live","assertive"),P(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=N(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&h(e),n&&n.d()}}}function N(o){let e;return{c(){e=Q(o[7])},l(n){e=X(n,o[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&h(e)}}}function oe(o){let e,n,i,s,c;const t=[se,ie],r=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=r[e]=t[e](o);let _=o[5]&&O(o);return{c(){n.c(),i=M(),_&&_.c(),s=d()},l(a){n.l(a),i=W(a),_&&_.l(a),s=d()},m(a,u){r[e].m(a,u),b(a,i,u),_&&_.m(a,u),b(a,s,u),c=!0},p(a,[u]){let m=e;e=l(a),e===m?r[e].p(a,u):(y(),g(r[m],1,1,()=>{r[m]=null}),R(),n=r[e],n?n.p(a,u):(n=r[e]=t[e](a),n.c()),w(n,1),n.m(i.parentNode,i)),a[5]?_?_.p(a,u):(_=O(a),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(a){c||(w(n),c=!0)},o(a){g(n),c=!1},d(a){a&&(h(i),h(s)),r[e].d(a),_&&_.d(a)}}}function ae(o,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:_=null}=e;z(i.page.notify);let a=!1,u=!1,m=null;F(()=>{const f=i.page.subscribe(()=>{a&&(n(6,u=!0),Z().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,a=!0),f});function T(f){L[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function V(f){L[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){L[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return o.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,_=f.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(s)},[t,c,r,l,_,a,u,m,i,s,T,V,C]}class ue extends ${constructor(e){super(),x(this,e,ae,oe,J,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const me=[()=>k(()=>import("../nodes/0.-cdW9Bx0.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>k(()=>import("../nodes/1.Sr3zREbr.js"),__vite__mapDeps([7,1,2,8,5,9,10,11]),import.meta.url),()=>k(()=>import("../nodes/2.w-lH7r2o.js"),__vite__mapDeps([12,1,2,9,13]),import.meta.url),()=>k(()=>import("../nodes/3.ZxhAwB9_.js"),__vite__mapDeps([14,1,2,10,9,15,5,16,4,17]),import.meta.url),()=>k(()=>import("../nodes/4.3S5Ivf2N.js"),__vite__mapDeps([18,1,2,9,3,15,5,16,4,19,20]),import.meta.url),()=>k(()=>import("../nodes/5.l9WqlQzd.js"),__vite__mapDeps([21,1,2,15,5,16,9,19,22]),import.meta.url)],pe=[],de={"/":[2],"/about":[3],"/game":[4],"/stats":[5]},he={handleError:({error:o})=>{console.error(o)}};export{de as dictionary,he as hooks,_e as matchers,me as nodes,ue as root,pe as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.-cdW9Bx0.js","../chunks/scheduler.FZOJ7GWa.js","../chunks/index.Y9GCii0e.js","../chunks/index.eXGB0KTH.js","../chunks/Alert.ICEGsLkj.js","../chunks/index.RLdQtkhf.js","../assets/0.AJ7eeQCW.css","../nodes/1.Sr3zREbr.js","../chunks/singletons._whuN5fm.js","../chunks/paths.7fZqtb3F.js","../chunks/environment.9lcS_E0O.js","../assets/1.wnpJATbY.css","../nodes/2.w-lH7r2o.js","../assets/2.hk9MojMx.css","../nodes/3.ZxhAwB9_.js","../chunks/AppData.UMjKFfdY.js","../chunks/control.pJ1mnnAb.js","../assets/3.HwFiuqMf.css","../nodes/4.3S5Ivf2N.js","../chunks/formatTime.P0mepht4.js","../assets/4.OrEFjdt_.css","../nodes/5.l9WqlQzd.js","../assets/5.qCwAxy8n.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}