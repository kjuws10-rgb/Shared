const fs=require('fs');const path=require('path');
fs.mkdirSync('out',{recursive:true});
const css=fs.readFileSync('src/style.css','utf8'),engine=fs.readFileSync('src/engine.js','utf8'),ui=fs.readFileSync('src/ui.js','utf8'),c=JSON.parse(fs.readFileSync('src/fixed.json'));
for(const [template,name] of [['simulator.html','FlyingReview_8Head_Simulator.html'],['guide.html','FlyingReview_Formula_Guide.html']]){
 let t=fs.readFileSync(path.join('src',template),'utf8');for(const [a,b] of Object.entries({'__CSS__':css,'__ENGINE__':engine,'__UI__':ui,'__CONFIG__':JSON.stringify(c)}))t=t.replace(a,b);fs.writeFileSync(path.join('out',name),t);
}
const r=require('./src/engine').calculate(c,c.defaults);fs.writeFileSync('out/Calculation_evidence.json',JSON.stringify({fixed:c,defaultResult:r},null,2));
console.log(JSON.stringify({blurPx:r.blurPx,processTime:r.processTime,tactTime:r.tactTime,modes:[2,4].map(cap=>({cap,valid:r.modes[cap].feasible,glasses:r.modes[cap].plannedGlasses,minSlack:r.modes[cap].minSlack}))}));
