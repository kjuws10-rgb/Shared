/* Explanation and engine must agree. No browser rendering claims. */
const assert=require('node:assert/strict'),fs=require('node:fs');
const F=require('../src/engine.js'),G=require('../src/formulas.js');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const near=(a,b,tol=1e-7)=>assert.ok(Math.abs(a-b)<=tol,`${a} vs ${b}`);
const p=F.copyDefaults(),g=F.makeGeometry(p),defs=F.autoSelect(p,g).definitions,r=F.evaluate(p,defs,g);
const data=(a,b,q=p,ds=defs)=>G.compute(q,g,F.evaluate(q,ds,g),a,b);
test('Cell/Shot/Branch global coordinate values agree with source-derived engine',()=>{
  const d=data(1,2);near(g.pitch,2.7);near(d.a.centerX,89.4125);near(d.a.x,89.75);near(d.a.y,16.175);near(d.a.reviewX,74.25);
  const b=data(3,4);near(b.cell.offsetX,300);near(b.cell.offsetY,400);near(b.a.x,319.55);
});
test('H01→H02: 100 mm X / 200 mm Y / 2 s, .7 s movement',()=>{
  const d=data(1,2);near(d.edge.dx,100);near(d.edge.dy,200);near(d.edge.gap,2);near(d.move.total,.7);near(d.edge.xSlack,1.22993);near(d.edge.minDeltaYCruise,77.007);
});
test('H03→H04 is triangular, not Scanner 110 mm / X speed',()=>{
  const d=data(3,4);near(d.edge.dx,2.7);near(d.edge.dy,43.2);near(d.edge.gap,.432);near(d.move.peak,51.96152422706621);near(d.move.t2,0);near(d.move.total,.10392304845413264);near(d.edge.xSlack,.2580069515458638);
});
test('H06→H07: minimum default X slack includes two jitter allowances',()=>{
  const d=data(6,7);near(d.edge.dx,218.9);near(d.edge.dy,156.8);near(d.edge.gap,1.568);near(d.move.total,1.2945);near(d.edge.xSlack,.20343);near(Math.min(...d.rows.map(e=>e.xSlack)),.20343);
});
test('fixed education examples retain .75 and .103923 seconds when inputs change',()=>{
  const d=data(1,2,{...p,vx:250});near(d.standardLong.total,.75);near(d.standardShort.total,.10392304845413264);near(d.requiredReach,62.5);assert.ok(d.move.total<.7);
});
test('profile inversion, distances and complete Stage time are exact',()=>{
  const d=data(1,2);near(d.targetDistance,2346.6625);near(d.a.cross,23.566625);near(r.profile.total,39.504875);near(r.profile.d1,10);near(r.profile.d2,3910.4875);near(r.profile.d3,10);
});
test('150 s and 30 s bounds differ; 1 pixel speed fails both full-pass budgets',()=>{
  const d=data(1,2);near(d.availableStageTime,89);near(d.minStageV,44.20669622451881);near(d.minProcessV,40.77333333333333);near(d.onePixelSpeed,17.25);
  assert.ok(d.onePixelSpeed<d.minProcessV&&d.onePixelSpeed<d.minStageV);assert.equal(F.evaluate({...p,vy:d.onePixelSpeed},defs,g).coverageComplete,false);
});
test('optical pixel, exposure and blur conversions distinguish µm from px',()=>{
  const d=data(1,2);near(d.objectPixel,.1725);near(d.onePixelExposureUs,1.725);near(d.a.blur,1,1e-5);near(d.a.blurPixels,5.797101449275362,1e-4);near(d.blurSpeedMax,100);
  const q=data(1,2,{...p,exposureUs:20});near(q.a.blur,2,1e-5);near(q.blurSpeedMax,50);
});
test('trigger timing and initial/edge deadlines are based on earliest command',()=>{
  const d=data(1,2);near(d.a.cmd,d.a.cross-r.delay-r.exposure/2);near(d.a.mid,d.a.cross);near(d.a.positionError,.53125,1e-5);
  near(d.a.initialSlack,d.a.cmd-r.jitter-p.guardMs/1000-(-p.preTime+d.park.total+p.settleMs/1000));
  near(d.edge.xAvailable,d.b.cmd-r.jitter-p.guardMs/1000-d.a.expEnd-r.jitter-p.settleMs/1000);
});
test('minimum X speed forward-verifies, impossible time does not claim a speed',()=>{
  const d=data(6,7);assert.ok(d.xMinVelocity<200);near(F.motion(d.edge.dx,d.xMinVelocity,p.ax,p.dx).total,d.edge.xAvailable,1e-6);
  const q=data(6,7,{...p,vy:500,maxBlurUm:100});assert.equal(q.xMinVelocity,null);assert.ok(G.render(q).includes('속도만으로 해 없음'));
});
test('FPS and overlapping/nonoverlapping readout use the engine period',()=>{
  near(r.period,1/23);near(data(3,4).minFPS,1/(.432-.00001));
  const a=data(3,4,{...p,readoutMs:100});near(a.r.period,.1);
  const b=data(3,4,{...p,readoutMs:100,overlapReadout:false});near(b.r.period,.10001);assert.ok(G.render(b).includes('0.10001000'));
});
test('direction changes equipment Q, not relative exposure schedule',()=>{
  const d=data(1,2,{...p,direction:1});near(d.a.targetQ,.675);near(d.a.cross,r.nodes[0].cross);near(d.targetDistance,2346.6625);
});
test('invalid points, single enabled point and quality failures render explanatory text',()=>{
  for(const bad of [{cell:0},{col:999},{row:999},{beam:999}]){
    const d=data(1,2,p,defs.map((x,i)=>i===0?{...x,...bad}:x)),h=G.render(d);assert.ok(h.includes('기하 검증 실패'));assert.ok(!/NaN|Infinity|undefined/.test(h));
  }
  const one=data(1,2,p,defs.map((x,i)=>({...x,enabled:i===0})));assert.equal(one.b,null);assert.ok(G.render(one).includes('검사점이 하나'));
  assert.ok(G.render(data(1,2,{...p,maxBlurUm:.1725})).includes('품질 조건 탈락'));
});
test('reverse pair and simultaneous Y never imply an executable chronological pair',()=>{
  const rev=data(2,1);assert.ok(!rev.edge.valid);assert.ok(G.pairDiagram(rev).includes('같은 시각'));
  const same=data(1,2,p,F.preset('same',p,g));assert.ok(!same.edge.valid);assert.equal(same.r.maxPerPass,1);assert.ok(G.render(same).includes('8 Glass'));
});
test('complete cover uses actual feasible groups, not only ceil',()=>{
  for(const [kind,max,count] of [['same',1,8],['two',2,4],['four',4,2]]){const d=data(1,2,p,F.preset(kind,p,g));assert.equal(d.r.maxPerPass,max);assert.equal(d.r.plans[8].count,count);assert.ok(G.render(d).includes(count+' Glass'));}
  assert.deepEqual(r.plans[2].groups.map(x=>x.nodes.map(n=>n.head)),[[1,2],[3,4],[5,6],[7,8]]);
});
test('14 chapter ids, accessible diagrams and scroll wrappers are present',()=>{
  const h=G.render(data(1,2));assert.equal((h.match(/class="formula-chapter"/g)||[]).length,14);
  for(let i=1;i<=14;i++)assert.ok(h.includes(`id="formula-${String(i).padStart(2,'0')}"`));
  assert.equal((h.match(/role="img"/g)||[]).length,3);assert.equal((h.match(/class="formula-diagram-wrap"/g)||[]).length,3);
});
test('infeasible X timeline stays within SVG bounds and shows next crossing before stop',()=>{
  const svg=G.pairDiagram(data(6,7,{...p,vx:1}));
  for(const m of svg.matchAll(/<rect x="([^"]+)"[^>]*width="([^"]+)"/g))assert.ok(Number(m[1])+Number(m[2])<=700+1e-6);
  const circles=[...svg.matchAll(/<circle cx="([^"]+)"/g)].map(m=>Number(m[1]));assert.ok(circles[1]<700);
});
test('generated static manual is a standalone snapshot, not an executable control page',()=>{
  const d=data(6,7),html=G.document(d,'body{color:black}');assert.ok(html.startsWith('<!DOCTYPE html>'));assert.ok(html.includes('H06 → H07'));assert.ok(html.includes('&quot;parameters&quot;'));
  assert.ok(!/<script|<iframe|<link[^>]+stylesheet/.test(html));assert.ok(html.includes('2점 배정인데 3회'));assert.ok(html.includes('1 px'));
  const built=fs.readFileSync(require('node:path').join(__dirname,'../FlyingReview_Formula_Guide.html'),'utf8');assert.ok(built.includes('203.430'));assert.ok(built.includes('1.725000'));assert.ok(built.includes('44.206696'));
});
console.log(`${count} formula regression tests passed.`);
