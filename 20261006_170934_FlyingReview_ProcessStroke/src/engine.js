(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ReviewCalc=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';const EPS=1e-8;
function motion(d,v,a,b){
 if(![d,v,a,b].every(Number.isFinite)||d<0||v<=0||a<=0||b<=0)throw Error('속도·가감속은 0보다 커야 합니다.');
 const peak=Math.min(v,Math.sqrt(2*d/(1/a+1/b))),d1=peak*peak/(2*a),d3=peak*peak/(2*b),d2=Math.max(0,d-d1-d3),t1=peak/a,t2=peak?d2/peak:0,t3=peak/b,total=t1+t2+t3;
 function timeAt(s){if(s<-EPS||s>d+EPS)return null;s=Math.max(0,Math.min(d,s));if(s<=d1)return Math.sqrt(2*s/a);if(s<=d1+d2)return t1+(s-d1)/peak;return total-Math.sqrt(2*(d-s)/b);}
 function at(t){if(t<=0)return {s:0,v:0,phase:'가속'};if(t>=total)return {s:d,v:0,phase:'정지'};if(t<t1)return {s:.5*a*t*t,v:a*t,phase:'가속'};if(t<t1+t2)return {s:d1+peak*(t-t1),v:peak,phase:'등속'};const u=total-t;return {s:d-.5*b*u*u,v:b*u,phase:'감속'};}
 return {d,peak,d1,d2,d3,t1,t2,t3,total,timeAt,at};
}
function maxStrokeForTime(t,v,a,b){const z=1/a+1/b;return t>=v*z?v*t-.5*v*v*z:t*t/(2*z);}
function intervalOverlap(a,b,c,d){return Math.max(0,Math.min(b,d)-Math.max(a,c));}
function windowRelation(a,b,c,d){return {overlap:intervalOverlap(a,b,c,d),tail:Math.max(0,d-b),lead:Math.max(0,b-d),finishesByProcessEnd:d<=b+EPS};}
function calculate(c,p){
 const inputErrors=[];for(const k of Object.keys(c.defaults))if(!Number.isFinite(p[k])||p[k]<=0)inputErrors.push(k+' 값은 0보다 큰 숫자여야 합니다.');
 if(inputErrors.length)return {inputErrors};
 const profile=motion(p.strokeMm,p.vy,p.ay,p.dy),q0=c.bounds.start,qEnd=q0-p.strokeMm,exp=p.exposureUs/1e6;
 const dA=p.vy*p.vy/(2*p.ay),dD=p.vy*p.vy/(2*p.dy),tA=p.vy/p.ay;
 // Required crossing time if the requested constant speed is maintained.
 // Crossing outside the supplied stroke is a requirement, never a simulated capture.
 function requiredCross(s){return s<dA?Math.sqrt(Math.max(0,2*s/p.ay)):tA+(s-dA)/p.vy;}
 const period=Math.max(1/c.fps,exp),blurUm=p.vy*exp*1000,blurPx=blurUm/c.objectPixelUm,expMaxUs=p.blurPx*c.objectPixelUm*1000/p.vy,vyMax=p.blurPx*c.objectPixelUm*1000/p.exposureUs;
 const processStart=0,processEnd=profile.total,processTime=profile.total,cruiseStart=profile.t1,cruiseEnd=profile.t1+profile.t2;
 const firstS=q0-c.bounds.first,lastS=q0-c.bounds.last,firstTime=requiredCross(firstS),lastTime=requiredCross(lastS),shotTime=lastTime-firstTime;
 const scannerEnter=requiredCross(q0-c.bounds.scannerEnter),scannerExit=requiredCross(q0-c.bounds.scannerExit),reviewEnter=requiredCross(q0-c.bounds.reviewEnter),reviewExit=requiredCross(q0-c.bounds.reviewExit);
 const physicalOverlap=intervalOverlap(scannerEnter,scannerExit,reviewEnter,reviewExit),globalErrors=[];
 if(p.exposureUs<c.minExposureUs-EPS||p.exposureUs>c.maxExposureUs+EPS)globalErrors.push('카메라 노출 범위 2~10,000,000 µs를 벗어납니다.');
 if(blurPx>p.blurPx+EPS)globalErrors.push('이동 blur가 허용 픽셀을 초과합니다.');
 if(processTime>c.processBudgetS+EPS)globalErrors.push('가감속 포함 역방향 가공시간이 30초를 초과합니다.');
 if(p.strokeMm>c.stageStroke+EPS)globalErrors.push('입력 Stroke가 설계 Stage Stroke를 초과합니다.');
 if(profile.peak<p.vy-EPS)globalErrors.push('입력 Stroke에서 Y 등속속도에 도달하지 못합니다.');
 if(firstS<dA-EPS||lastS+p.vy*c.pointShotServiceS>p.strokeMm-dD+EPS)globalErrors.push('레시피 가공점이 Y 등속 구간 또는 입력 Stroke 밖에 있습니다.');
 const nodes=c.points.map(pt=>{
  const s=q0-pt.targetQ,cross=requiredCross(s),actualCross=profile.timeAt(s),cmd=cross-c.delayS-exp/2,expStart=cross-exp/2,expEnd=cross+exp/2,errors=[];
  const laserQ=c.distanceMm-(pt.centerY-c.glass.akY),laserTime=requiredCross(q0-laserQ);
  const requiredStrokeMm=s+p.vy*(exp/2+c.jitterS)+dD;
  const inCruise=profile.peak>=p.vy-EPS&&expStart-c.jitterS>=cruiseStart-EPS&&expEnd+c.jitterS<=cruiseEnd+EPS&&s<=p.strokeMm+EPS;
  if(s>p.strokeMm+EPS)errors.push('측정점이 입력 Stroke 밖');else if(!inCruise)errors.push('노출에 Y 가속·감속이 포함됨');
  if(laserTime+c.pointShotServiceS>expStart-c.jitterS+EPS)errors.push('해당 측정점의 출사 완료 전 촬영');
  if(pt.reviewX<0||pt.reviewX>c.reviewStroke)errors.push('Review X Stroke 밖');
  const initialMove=motion(Math.abs(pt.reviewX-c.parkX),p.vx,p.ax,p.dx),initialSlack=cmd-c.jitterS-c.guardS-(-c.preTimeS+initialMove.total+c.settleS);
  if(initialSlack<-EPS)errors.push('첫 점 X 선도착 시간 부족');
  return {...pt,s,cross,actualCross,cmd,expStart,expEnd,laserTime,distance:c.distanceMm,initialMove,initialSlack,requiredStrokeMm,inCruise,inStroke:s<=p.strokeMm+EPS,errors,duringActualShotWindow:expStart>=firstTime-EPS&&expEnd<=lastTime+EPS};
 });
 function group(ns){
  const unique=new Set(ns.map(n=>n.cell)).size===ns.length,edges=[];
  for(let i=1;i<ns.length;i++){
   const a=ns[i-1],b=ns[i],d=Math.abs(b.reviewX-a.reviewX),m=motion(d,p.vx,p.ax,p.dx),gap=b.cross-a.cross;
   const needX=exp+m.total+c.settleS+c.guardS+c.delayS+2*c.jitterS,needCamera=period+2*c.jitterS,need=Math.max(needX,needCamera),slack=gap-need;
   edges.push({from:a.head,to:b.head,dx:d,dy:Math.abs(b.targetQ-a.targetQ),gap,move:m.total,needX,needCamera,need,slack,valid:slack>=-EPS});
  }
  const errors=[...globalErrors,...ns.flatMap(n=>n.errors.map(e=>'H'+n.head+': '+e))];
  if(!unique)errors.push('동일 Cell 중복');if(edges.some(e=>!e.valid))errors.push('다음 점까지 X 이동 또는 카메라 재취득 시간 부족');
  const reviewStart=ns[0].expStart,reviewEnd=ns[ns.length-1].expEnd,relation=windowRelation(0,processEnd,reviewStart,reviewEnd),requiredStrokeMm=Math.max(...ns.map(n=>n.requiredStrokeMm));
  const reviewFits=ns.every(n=>n.inCruise),feasible=errors.length===0;
  return {nodes:ns,edges,unique,errors,feasible,minSlack:Math.min(...edges.map(e=>e.slack)),reviewStart,reviewEnd,overlap:relation.overlap,reviewTail:relation.tail,reviewLead:relation.lead,reviewFits,reviewFinishesByProcessEnd:relation.finishesByProcessEnd,requiredStrokeMm,extraStrokeMm:Math.max(0,requiredStrokeMm-p.strokeMm),capturableCount:ns.filter(n=>n.inCruise).length,actualShotOverlap:intervalOverlap(firstTime,lastTime,reviewStart,reviewEnd)};
 }
 const modes={};for(const cap of [2,4]){const groups=[];for(let i=0;i<8;i+=cap)groups.push(group(nodes.slice(i,i+cap)));const feasible=groups.every(g=>g.feasible);modes[cap]={cap,groups,plannedGlasses:8/cap,feasible,validGlasses:feasible?8/cap:null,processingCycleS:feasible?8/cap*processTime:null,minSlack:Math.min(...groups.map(g=>g.minSlack)),requiredStrokeMm:Math.max(...groups.map(g=>g.requiredStrokeMm))};}
 return {inputErrors:[],p,profile,q0,qEnd,nodes,modes,blurUm,blurPx,expMaxUs,vyMax,firstTime,lastTime,shotTime,scannerEnter,scannerExit,reviewEnter,reviewExit,physicalOverlap,processStart,processEnd,processTime,period,globalErrors,cruiseStart,cruiseEnd,dA,dD,maxStroke30:maxStrokeForTime(c.processBudgetS,p.vy,p.ay,p.dy),processTimePass:processTime<=c.processBudgetS+EPS};
}
return {motion,maxStrokeForTime,calculate,intervalOverlap,windowRelation};
});
