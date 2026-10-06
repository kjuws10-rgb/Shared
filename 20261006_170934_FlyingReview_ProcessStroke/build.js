const fs=require('fs'),path=require('path');fs.mkdirSync('out',{recursive:true});
const c=JSON.parse(fs.readFileSync('src/fixed.json')),read=f=>fs.readFileSync('src/'+f,'utf8');
const replacements={'__CSS__':read('style.css'),'__CONFIG__':JSON.stringify(c),'__ENGINE__':read('engine.js'),'__SYNC__':read('sync.js'),'__VISUALS__':read('visuals.js')};
function compile(t,extra={}){for(const [key,value] of Object.entries({...replacements,...extra}))t=t.replace(key,()=>value);return t;}
const guide=compile(read('guide.html'),{'__SNAPSHOT__':'null','__GUIDE_UI__':read('guide_ui.js')});fs.writeFileSync('out/FlyingReview_Formula_Guide.html',guide);
const simulator=compile(read('simulator.html'),{'__GUIDE_TEMPLATE__':JSON.stringify(guide).replace(/</g,'\\u003c'),'__UI__':read('ui.js')});fs.writeFileSync('out/FlyingReview_8Head_Simulator.html',simulator);
const r=require('./src/engine').calculate(c,c.defaults);fs.writeFileSync('out/Calculation_evidence.json',JSON.stringify({fixed:c,defaultResult:r},null,2));
console.log(JSON.stringify({strokeMm:c.defaults.strokeMm,processTime:r.processTime,blurPx:r.blurPx,maxStroke30:r.maxStroke30,modes:[2,4].map(cap=>({cap,valid:r.modes[cap].feasible,glasses:r.modes[cap].plannedGlasses,minStroke:r.modes[cap].requiredStrokeMm,minSlack:r.modes[cap].minSlack}))}));
