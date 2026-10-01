const assert=require('node:assert/strict');
const F=require('../src/engine.js');
let count=0;
function test(name,fn){fn();count++;console.log('PASS',name);}
const near=(a,b,tol=1e-7)=>assert.ok(Math.abs(a-b)<=tol,`${a} vs ${b}`);
const p=F.copyDefaults(),g=F.makeGeometry(p),auto=F.autoSelect(p,g),defs=auto.definitions;
test('Model1: 45 cells, 28×17 Shot; code-derived masking and ownership',()=>{
  assert.equal(g.cells.length,45);assert.equal(g.cols,28);assert.equal(g.rows,17);
  assert.equal(g.theoretical,21420);assert.equal(g.assigned,20740);assert.equal(g.valid,19530);assert.equal(g.unassignedValid,675);
  near(g.cells[44].x,815.5);near(g.cells[44].y,815.5);near(g.cells[0].width,77.76);near(g.cells[0].height,46.08);
});
test('X trapezoid: 110 mm at 200 mm/s, a=d=1000 -> .75 s',()=>{const m=F.motion(110,200,1000);near(m.total,.75);near(m.peak,200);near(m.d1,20);near(m.d3,20);});
test('short asymmetric triangle and distance-time inverse',()=>{
  const m=F.motion(10,200,500,1000);near(m.total,Math.sqrt(2*10*(1/500+1/1000)));
  for(let i=0;i<=100;i++){const s=10*i/100;near(m.state(m.timeAt(s)).s,s);}
  assert.equal(m.timeAt(-1),null);assert.equal(m.timeAt(11),null);near(F.motion(0,200,1000).total,0);
});
test('point is actual DOE B07, not laser centre, and head ownership checked',()=>{
  const n=F.makePoint(defs[0],p,g);near(n.beamX,.3375);near(n.beamY,-.3375);near(n.x,n.centerX+.3375);near(n.y,n.centerY-.3375);
  assert.equal(n.owner,1);assert.equal(n.geometryValid,true);
  assert.equal(F.makePoint({...defs[0],head:8},p,g).geometryValid,false);
  assert.equal(F.makePoint({head:1,cell:1,col:1,row:1,beam:7},p,g).geometryValid,false);
});
test('same material Y: one point per Glass regardless of high FPS',()=>{
  const q={...p,fps:100000,vx:100000,ax:10000000,dx:10000000};const r=F.evaluate(q,F.preset('same',q,g),g);
  assert.equal(r.maxPerPass,1);assert.equal(r.plans[8].count,8);assert.equal(r.all.valid,false);
});
for(const [kind,max,glasses] of [['same',1,8],['two',2,4],['four',4,2]])test(kind+' preset capacity and exact full cover',()=>{
  const r=F.evaluate(p,F.preset(kind,p,g),g);assert.equal(r.maxPerPass,max);assert.equal(r.plans[8].count,glasses);
  const hs=r.plans[8].groups.flatMap(pass=>pass.nodes.map(n=>n.head)).sort((a,b)=>a-b);assert.deepEqual(hs,[1,2,3,4,5,6,7,8]);
  for(const pass of r.plans[8].groups)assert.equal(pass.valid,true);
});
const r=F.evaluate(p,defs,g);
test('8-head auto proposal verifies all 255 subsets, 2/4/8 caps -> 4/2/1 Glass',()=>{
  assert.equal(r.maxPerPass,8);assert.equal(r.byMask.size,255);assert.equal(r.plans[2].count,4);assert.equal(r.plans[4].count,2);assert.equal(r.plans[8].count,1);
  assert.ok(r.all.slack>.20);assert.deepEqual(r.all.nodes.map(n=>n.head),[1,2,3,4,5,6,7,8]);
});
test('Stage full pass, 30-second geometry and 150-second model Tact',()=>{
  near(r.bounds.start,2345.9875);near(r.bounds.end,-1584.5);near(r.profile.total,39.504875);near(r.processTime,12.232);near(r.tact,100.504875);assert.equal(r.globals.length,0);
});
test('laser-before-review and fixed-head distance use correct branch offset',()=>{
  for(const n of r.nodes){assert.ok(n.expStart>n.laserTime);near(n.leadTime,(n.distance+n.beamY)/p.vy);near(n.cross-n.mid,0);near(n.blur,1,1e-5);near(n.blurPixels,1/(3.45/20),1e-4);}
});
test('nominal X path reaches target before guarded trigger, returns park',()=>{
  const path=F.cameraPath(r.all,p);for(const n of r.all.nodes)near(path.at(n.cmd-p.guardMs/1000).x,n.reviewX);
  near(path.at(r.tact-p.preTime).x,p.parkX);assert.ok(r.all.resetSlack>0);
});
test('FPS bottleneck respected, readout non-overlap changes effective period',()=>{
  const q={...p,fps:.2};const a=F.evaluate(q,defs,g);assert.ok(a.maxPerPass<8);assert.equal(a.all.valid,false);
  const b=F.evaluate({...p,readoutMs:100,overlapReadout:false},defs,g);near(b.period,.10001);
});
test('blur violation invalidates points, never claims coverage',()=>{
  const q={...p,maxBlurUm:.1725};const a=F.evaluate(q,defs,g);assert.equal(a.maxPerPass,0);assert.equal(a.plans[8],null);assert.ok(a.nodes.every(n=>n.errors.some(e=>e.includes('Blur'))));
  assert.equal(F.inverse(a,defs).speedWindow,null); // slowing enough breaks full-pass Tact/30 s constraints
});
test('positive Y uses transformed equipment coordinates, same material order/capacity',()=>{
  const q={...p,direction:1};const a=F.evaluate(q,defs,g);assert.equal(a.maxPerPass,8);near(a.profile.total,r.profile.total);
  for(let i=0;i<8;i++){near(a.nodes[i].cross,r.nodes[i].cross);near(a.nodes[i].targetQ,-r.nodes[i].targetQ);}
});
test('invalid Cell/Shot/Branch outputs invalid records without crashing subsets',()=>{
  for(const bad of [{cell:0},{col:99},{row:99},{beam:99}]){
    const ds=defs.map((d,i)=>i===0?{...d,...bad}:d);const a=F.evaluate(p,ds,g);assert.equal(a.coverageComplete,false);assert.equal(a.blocked[0].head,1);assert.equal(F.inverse(a,ds).rows.length,0);
  }
});
test('manual Stage path / stroke / downstream validity constraints',()=>{
  const a=F.evaluate({...p,stageLimits:true,stageMin:-100,stageMax:100},defs,g);assert.equal(a.maxPerPass,0);
  const q={...p,autoStage:false,stageStart:r.bounds.start,stageEnd:0};assert.equal(F.evaluate(q,defs,g).coverageComplete,false);
  assert.equal(F.evaluate({...p,distance:-10,evenExtra:0,processCruise:false},defs,g).coverageComplete,false);
});
test('initial X preparation and repeated Glass park reset constraints',()=>{
  const q={...p,vx:1,preTime:0};const a=F.evaluate(q,defs,g);assert.ok(a.nodes.some(n=>n.initialSlack<0));assert.equal(a.coverageComplete,false);
  const b=F.evaluate({...p,preTime:1000},defs,g);assert.equal(b.maxPerPass,0);assert.ok(b.all.resetSlack<0);
});
test('inverse: feasible speed interval and minimum X thresholds are forward-verified',()=>{
  const inv=F.inverse(r,defs);assert.ok(inv.speedWindow);assert.ok(inv.speedWindow.min<p.vy);assert.ok(inv.speedWindow.max>=p.vy-1e-5);
  for(const v of [inv.speedWindow.min,(inv.speedWindow.min+inv.speedWindow.max)/2,inv.speedWindow.max])assert.equal(F.evaluate({...p,vy:v},defs,g).all.valid,true);
  for(const e of inv.rows){if(e.vx>0)assert.ok(F.motion(e.dx,e.vx,p.ax,p.dx).total<=e.xAvailable+1e-6);}
  near(F.minVelocity(110,.75,1000,1000),200,1e-4);assert.equal(F.minVelocity(110,.1,1000,1000),null);
});
test('Head-number restriction rejects chronological reverse order, arrival mode allows it',()=>{
  const ds=defs.map(d=>({...d}));[ds[0].cell,ds[1].cell]=[ds[0].cell+p.cellCols,ds[1].cell-p.cellCols];
  const a=F.evaluate({...p,order:'head'},ds,g);assert.equal(a.all.valid,false);assert.ok(a.all.edges.some(e=>!e.orderOK));
});
test('validation, duplicate head, empty selection, and nearest valid point',()=>{
  assert.throws(()=>F.evaluate({...p,vy:0},defs));assert.throws(()=>F.evaluate(p,defs.map(d=>({...d,enabled:false})),g));
  assert.throws(()=>F.evaluate(p,[defs[0],defs[0]],g));assert.ok(F.validate({...p,cellCols:200}).length);
  const n=F.nearestPoint(5,550,600,7,p,g);assert.ok(n);assert.equal(F.makePoint(n.definition,p,g).geometryValid,true);
});
test('X error budget rejects nominal timing-valid plans when over tolerance',()=>{
  const a=F.evaluate({...p,xSettleErrorUm:31},defs,g);assert.equal(a.maxPerPass,0);assert.ok(a.nodes.every(n=>n.errors.some(e=>e.includes('X 정착오차'))));
});
test('minimum exposure and uncompensated trigger latency are independently tested',()=>{
  assert.equal(F.evaluate({...p,exposureUs:1},defs,g).maxPerPass,0);
  const a=F.evaluate({...p,triggerDelayUs:1000,compensate:false},defs,g);assert.equal(a.maxPerPass,0);assert.ok(a.nodes.some(n=>n.errors.some(e=>e.includes('위치오차'))));
});
test('overlapped readout still limits period; unfinished final readout adds Tact wait',()=>{
  const a=F.evaluate({...p,readoutMs:100,overlapReadout:true},defs,g);near(a.period,.1);
  const b=F.evaluate({...p,readoutMs:20000,overlapReadout:true},defs,g);near(b.period,20);assert.ok(b.readoutWait>0);
  near(b.tact,Math.max(b.profile.total,Math.max(...b.nodes.map(n=>n.expEnd))+20)+p.imageTail+p.otherTime);
});
console.log(`${count} model regression tests passed.`);
