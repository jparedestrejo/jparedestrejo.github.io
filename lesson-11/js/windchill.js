const tem = parseFloat(document.querySelector("#temp").textContent);
const spe = parseInt(document.querySelector("#speed").textContent);
let wsfactor;
if(tem<50 && spe>3)
wcfactor=parseFloat((35.74+0.6215*tem)-35.75*Math.pow(spe,0.16)+0.4275*tem*Math.pow(spe,0.16));
else 
wcfactor = "N/A";
let res = document.querySelector("#output");
res.innerHTML = Math.round(wcfactor)+" &#176;F";
