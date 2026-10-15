'use strict';
const E=require('./engine.js'),assert=require('node:assert/strict');let checks=0;
const check=(condition,message)=>{assert.ok(condition,message);checks++;};
const close=(a,b,t=1e-8)=>Math.abs(a-b)<=t*Math.max(1,Math.abs(a),Math.abs(b));
const layouts=[[0,.25,.5,.75,1],[0,.18,.47,.82,1],[0,.05,.1,.15,1]];
for(let i=0;i<12;i++){const z=[0,1];for(let j=1;j<=3;j++)z.push((j+.18*Math.sin(i*7+j))/4);layouts.push(z.sort((a,b)=>a-b));}
const fixtures=[];
for(const nodes of layouts){
 const g=E.geometry(nodes),d=nodes.map((t,j)=>5*Math.sin(t*5)+j*.7),poly=t=>2-3*t+4*t*t-2*t**3+.7*t**4;
 for(let i=0;i<=100;i++)check(close(E.lagrange(g,nodes.map(poly),i/100),poly(i/100),1e-10),'degree four reproduction');
 nodes.forEach((t,i)=>check(E.lagrange(g,d,t)===d[i],'exact node value'));
 check(Number.isNaN(E.lagrange(g,d,-.01))&&Number.isNaN(E.linear(g,d,1.01)),'extrapolation rejected');
 check(E.geometry(nodes)===g,'geometry cached');
 for(const lambda of [0,.2,1,10])for(const anchor of [false,true]){
  const c=E.smooth(g,d,lambda,anchor);if(anchor)check(c[0]===d[0]&&c[4]===d[4],'anchors exact');
  fixtures.push({nodes,d,lambda,anchor,c,L:g.L,A:g.A,sL:g.Lsvd.s,vL:g.Lsvd.V,uL:g.Lsvd.U,sA:g.Asvd.s,vA:g.Asvd.V,uA:g.Asvd.U});
 }
 const nullMode=E.lab(g,'C',4,10);check(E.norm(nullMode.response)<1e-12,'exact constraint nullspace');
 const straight=E.smallSpace(g,d,2);check(E.norm(E.mv(g.L,straight))<1e-8,'two smallest curvature modes linear');
}
const reference=E.run({kind:'smooth',noise:5});
for(const method of ['linear','lagrange','smooth','small'])for(const lambda of [0,1,10])for(const weight of [0,50,100]){
 const r=E.run({kind:'smooth',noise:5,method,lambda,weight});check(r.maxRaw===reference.maxRaw&&r.chuck===reference.chuck,'judge independent of compensation');
}
const miss=E.run({kind:'missing'});check(miss.status==='MISSING'&&!miss.permit&&!miss.canRetry&&miss.afterRms===null,'missing blocks');check(miss.field('lagrange',.5,.5).every(Number.isNaN),'missing no field');
const retry0=E.run({kind:'retry',amp:55}),retry1=E.run({kind:'retry',amp:55,attempt:1});check(retry0.status==='RETRY'&&retry1.status==='PASS','retry improves new batch');check(retry0.points[2].delta[0]!==retry1.points[2].delta[0],'retry new measurements');
check(E.run({kind:'stubborn',amp:55,attempt:2,maxRetry:2}).status==='HOLD','retry exhaustion');
const invisible=E.run({kind:'invisible',amp:40,noise:0});check(invisible.chuck&&invisible.maxRaw<1e-8&&invisible.afterRms>20,'invisible internal deformation');
check(E.run({limit:5}).status==='COMP_LIMIT','compensation limit blocks');
check(E.run({manual:Array.from({length:10},()=>[0,0])}).afterRms===null,'manual unknown truth');
assert.throws(()=>E.run({manual:[[NaN,0]]}));checks++;
assert.throws(()=>E.geometry([0,.5,.5,.7,1]));checks++;
const zero=E.run({amp:0,noise:0});check(zero.maxRaw<1e-8&&zero.afterRms<1e-8,'zero deformation pose removal');
check(E.run({weight:0}).afterRms===E.run({weight:0}).beforeRms,'zero correction identity');
const scenarios=[];for(const kind of ['smooth','twist','local','invisible'])for(const noise of [0,5])for(const method of ['linear','lagrange','smooth','small']){const r=E.run({kind,noise,method,amp:30,lambda:3});scenarios.push({kind,noise,method,lambda:3,beforeRms:r.beforeRms,afterRms:r.afterRms,maxRaw:r.maxRaw,chuck:r.chuck,permit:r.permit});}
process.stdout.write(JSON.stringify({checks,fixtures,scenarios}));
