const fs=require('node:fs'),path=require('node:path');
const root=__dirname;
let html=fs.readFileSync(path.join(root,'src/template.html'),'utf8');
const css=['styles.css','formulas.css','operator.css','light.css'].map(file=>fs.readFileSync(path.join(root,'src',file),'utf8')).join('\n');
html=html.replace('/*STYLE*/',()=>css);
html=html.replace('/*SAMPLE*/',()=> 'window.FlyingReviewSampleCSV='+JSON.stringify(fs.readFileSync(path.join(root,'test0929_ppid.csv'),'utf8')).replace(/</g,'\\u003c')+';');
for(const [tag,file] of [['RECIPE','recipe.js'],['ENGINE','engine.js'],['FORMULAS','formulas.js'],['OPERATOR','operator.js'],['RECIPE_UI','recipe-ui.js'],['UI','ui.js']]) {
  const content=fs.readFileSync(path.join(root,'src',file),'utf8');
  html=html.replace('/*'+tag+'*/',()=>content);
}
if(/\/\*(STYLE|ENGINE|FORMULAS|OPERATOR|UI|RECIPE|RECIPE_UI|SAMPLE)\*\//.test(html))throw new Error('Unresolved template marker');
fs.writeFileSync(path.join(root,'FlyingReview_8Head_Simulator.html'),html);
console.log('Built standalone HTML:',Buffer.byteLength(html),'bytes');
const F=require('./src/engine.js'),parameters=F.copyDefaults(),g=F.makeGeometry(parameters),points=F.autoSelect(parameters,g).definitions,r=F.evaluate(parameters,points,g);
fs.writeFileSync(path.join(root,'Default_8Head_conditions.json'),JSON.stringify({schemaVersion:1,scope:'8_HEAD_FIXED_POINT',parameters,points,assumptions:'Nominal Model1-5 and Cell rotation; zero offsets; trapezoidal Stage/X; no hardware I/O'},null,2)+'\n');
fs.writeFileSync(path.join(root,'Baseline_calculation.json'),JSON.stringify({version:5,sourceCommit:'6b19d7aaf0de81271468ab7dac0fa15493172f38',scope:'8_HEAD_FIXED_POINT',cyclePolicy:parameters.cyclePolicy,order:parameters.order,designStroke:{stage_mm:parameters.stageStroke,review_mm:parameters.reviewStroke,stageTravel_mm:r.profile.distance,stageMargin_mm:parameters.stageStroke-r.profile.distance,reviewMin_mm:parameters.xMin,reviewMax_mm:parameters.xMax,absoluteDatumVerified:false},maxPerPass:r.maxPerPass,glassCounts:Object.fromEntries([1,2,4,8].map(c=>[c,r.plans[c]?.count])),glassGroups:Object.fromEntries([1,2,4,8].map(c=>[c,r.plans[c]?.groups.map(pass=>pass.nodes.map(n=>n.head))])),process_s:r.processTime,stageTravel_s:r.profile.total,tact_s:r.tact,points:r.nodes,edges:r.all.edges,inverse:F.inverse(r,points)},null,2)+'\n');
const G=require('./src/formulas.js'),O=require('./src/operator.js'),data=G.compute(parameters,g,r,1,2),manual=O.enrichGuide(G.document(data,css),parameters);
fs.writeFileSync(path.join(root,'FlyingReview_Formula_Guide.html'),manual);
console.log('Built standalone explanation:',Buffer.byteLength(manual),'bytes / 14 chapters');
