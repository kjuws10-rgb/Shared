const fs=require('node:fs'),path=require('node:path');
const root=__dirname;
let html=fs.readFileSync(path.join(root,'src/template.html'),'utf8');
for(const [tag,file] of [['STYLE','styles.css'],['ENGINE','engine.js'],['UI','ui.js']]) {
  const content=fs.readFileSync(path.join(root,'src',file),'utf8');
  html=html.replace('/*'+tag+'*/',()=>content);
}
if(/\/\*(STYLE|ENGINE|UI)\*\//.test(html))throw new Error('Unresolved template marker');
fs.writeFileSync(path.join(root,'FlyingReview_8Head_Simulator.html'),html);
console.log('Built standalone HTML:',Buffer.byteLength(html),'bytes');
const F=require('./src/engine.js'),parameters=F.copyDefaults(),g=F.makeGeometry(parameters),points=F.autoSelect(parameters,g).definitions,r=F.evaluate(parameters,points,g);
fs.writeFileSync(path.join(root,'Default_8Head_conditions.json'),JSON.stringify({schemaVersion:1,scope:'8_HEAD_FIXED_POINT',parameters,points,assumptions:'Nominal Model1 Rotation0; trapezoidal Stage/X; no hardware I/O'},null,2)+'\n');
fs.writeFileSync(path.join(root,'Baseline_calculation.json'),JSON.stringify({sourceCommit:'6b19d7aaf0de81271468ab7dac0fa15493172f38',scope:'8_HEAD_FIXED_POINT',maxPerPass:r.maxPerPass,glassCounts:Object.fromEntries([1,2,4,8].map(c=>[c,r.plans[c]?.count])),process_s:r.processTime,stageTravel_s:r.profile.total,tact_s:r.tact,points:r.nodes,edges:r.all.edges,inverse:F.inverse(r,points)},null,2)+'\n');
