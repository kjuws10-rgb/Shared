const assert=require('node:assert/strict'),F=require('../src/engine.js'),O=require('../src/operator.js');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const p=F.copyDefaults(),g=F.makeGeometry(p),defs=F.autoSelect(p,g).definitions,r=F.evaluate(p,defs,g),near=(a,b)=>assert.ok(Math.abs(a-b)<1e-6);
test('default drawing Stroke and Camera specification are applied',()=>{
  assert.equal(p.stageStroke,3960);assert.equal(p.reviewStroke,1025);assert.equal(p.xMax,1025);assert.equal(p.cameraMaxFps,23);
  const a=O.analyze(p,g,r,defs,4);assert.equal(a.status,'ready');assert.equal(a.sizeText,'4');assert.equal(a.glassCount,2);assert.ok(a.checks.every(c=>c.ok));
  near(p.stageStroke-r.profile.distance,29.5125);
});
test('mechanical Limit or stopper gap cannot extend operational travel',()=>{
  const q={...p,leadY:530},s=F.evaluate(q,defs,g);assert.equal(s.maxPerPass,0);assert.ok(s.globals.some(x=>x.includes('3960')));
  const a=O.analyze(q,g,s,defs,4);assert.ok(a.advice.some(x=>x.includes('速')||x.includes('속도')));assert.equal(a.actions.length,0);
  assert.equal(F.evaluate({...p,xMax:1033},defs,g).maxPerPass,0);
});
test('FPS above registered specification cannot be marked feasible',()=>{
  const q={...p,fps:24},s=F.evaluate(q,defs,g);assert.equal(s.maxPerPass,0);assert.ok(s.globals.some(x=>x.includes('FPS')));
  const a=O.analyze(q,g,s,defs,4);assert.equal(a.status,'blocked');
});
test('same Y produces one point per Glass and actionable coordinate/splitting advice',()=>{
  const ds=F.preset('same',p,g),s=F.evaluate(p,ds,g),a=O.analyze(p,g,s,ds,4);
  assert.equal(a.status,'split');assert.equal(a.sizeText,'1');assert.equal(a.glassCount,8);assert.ok(a.advice.some(x=>x.includes('동시에 도착')));assert.equal(a.actions.length,0);
});
test('strict one-pixel quality cannot be silently relaxed or given impossible exposure',()=>{
  const q={...p,maxBlurUm:.1725},s=F.evaluate(q,defs,g),a=O.analyze(q,g,s,defs,4);
  assert.equal(a.status,'blocked');assert.ok(a.advice.some(x=>x.includes('1.725')));assert.ok(a.advice.some(x=>x.includes('17.250')));
  assert.ok(!a.actions.some(x=>x.key==='maxBlurUm'||x.key==='exposureUs'));
});
test('an exposure repair appears only after full forward validation',()=>{
  const q={...p,exposureUs:20},s=F.evaluate(q,defs,g),a=O.analyze(q,g,s,defs,4),action=a.actions.find(x=>x.key==='exposureUs');assert.ok(action);near(action.value,10);
  const fixed=F.evaluate({...q,exposureUs:action.value},defs,g);assert.equal(fixed.plans[4].count,2);
});
test('slow Y gets a time-budget repair that rechecks Blur and X timing',()=>{
  const q={...p,vy:20},s=F.evaluate(q,defs,g),a=O.analyze(q,g,s,defs,4),action=a.actions.find(x=>x.key==='vy');assert.ok(action);
  assert.equal(F.evaluate({...q,vy:action.value},defs,g).plans[4].count,2);
});
test('bad geometry produces coordinate diagnosis without motion exceptions',()=>{
  for(const bad of [{cell:0},{col:999},{row:999},{beam:99}]){const ds=defs.map((d,i)=>i===0?{...d,...bad}:d),a=O.analyze(p,g,F.evaluate(p,ds,g),ds,4);assert.equal(a.status,'blocked');assert.ok(a.advice.some(x=>x.includes('좌표 오류')));}
});
test('coverage carries across Glass, remains on rewind, resets only with a new ledger',()=>{
  const plan={groups:r.plans[2].groups,tact:r.tact};let records=[];
  records=O.coverage(plan,27,r.jitter,records);assert.deepEqual(records.map(x=>x.head),[1,2]);
  records=O.coverage(plan,r.tact+31,r.jitter,records);assert.deepEqual(records.map(x=>x.head),[1,2,3,4]);
  records=O.coverage(plan,0,r.jitter,records);assert.equal(records.length,4);
  records=O.coverage(plan,plan.groups.length*r.tact,r.jitter,records);assert.equal(records.length,8);assert.equal(records[7].glass,4);
  assert.equal(O.coverage(plan,0,r.jitter,[]).length,0);
});
test('blocked plans never invent acquired points',()=>{
  assert.equal(O.coverage(null,1e9,r.jitter,[]).length,0);
  const bad=F.evaluate({...p,maxBlurUm:.1},defs,g);assert.equal(O.coverage({groups:[bad.all],tact:bad.tact},1e9,bad.jitter,[]).length,0);
});
console.log(`${count} operator regression tests passed.`);
