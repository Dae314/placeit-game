function o(e){if(!Number.isInteger(Math.floor(e)))return"0:00";let t=Math.floor(e/6e4),r=(e%6e4/1e3).toFixed(0);return`${t}:${r<10?"0":""}${r}`}export{o as f};
