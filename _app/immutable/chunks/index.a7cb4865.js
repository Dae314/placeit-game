import{N as y}from"./scheduler.9657a15e.js";function m(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:s=400,easing:n=y}={}){const c=+getComputedStyle(o).opacity;return{delay:t,duration:s,easing:n,css:r=>`opacity: ${r*c}`}}function g(o,{delay:t=0,duration:s=400,easing:n=m,start:c=0,opacity:r=0}={}){const a=getComputedStyle(o),e=+a.opacity,f=a.transform==="none"?"":a.transform,p=1-c,u=e*(1-r);return{delay:t,duration:s,easing:n,css:(d,i)=>`
			transform: ${f} scale(${1-p*i});
			opacity: ${e-u*i}
		`}}export{m as c,$ as f,g as s};
