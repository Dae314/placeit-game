import{w as p}from"./index.a2ffb617.js";import{H as f}from"./control.f5b05b5f.js";import{O as i}from"./scheduler.2a48a4a4.js";function c(e,a){return new f(e,a)}new TextEncoder;let r;function u(e){return Object.prototype.toString.call(e)==="[object Object]"}function n(e,a){if(!u(a))throw c(500,"Object must be a plain Javascript object.");const s=JSON.parse(JSON.stringify(a));for(const t of e)(t.reset||!(t.name in s))&&(s[t.name]=t.default);for(let t in s)e.some(o=>o.name===t)||delete data[t];return s}function l(e){const a=[{name:"playerStats",default:{},reset:!1},{name:"appSettings",default:{},reset:!1}],s=[{name:"totalGames",default:0,reset:!1},{name:"wonGames",default:0,reset:!1},{name:"highestScore",default:0,reset:!1},{name:"highestPlaced",default:-1,reset:!1},{name:"lowestPlaced",default:1e3,reset:!1},{name:"fastestWin",default:null,reset:!1},{name:"slowestWin",default:null,reset:!1},{name:"highestFirstBucket",default:-1,reset:!1},{name:"lowestLastBucket",default:1e3,reset:!1}],t=[];return e=n(a,e),e.playerStats=n(s,e.playerStats),e.appSettings=n(t,e.appSettings),e}async function b(){window.localStorage.setItem("AppData",JSON.stringify(i(d)))}function m(){return l({})}if(window.localStorage.getItem("appData")!==null){let e=JSON.parse(window.localStorage.getItem("AppData"));e=l(e)}else r=m();const d=p(r);export{d as A,m,b as s};