/* Flying Review planning model. No hardware I/O. Nominal geometry follows the
 * previously analyzed test0929 source commit 6b19d7aaf0de. Units: mm and seconds. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FlyingReview = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const EPS = 1e-8;
  const defaults = {
    glassX:925, glassY:1500, cellCols:9, cellRows:5, cellPitchX:100, cellPitchY:200,
    akX:15.5, akY:15.5, pixelSize:.09, pixelsX:864, pixelsY:512, shotPitchPixels:30, split:4,
    referenceOffsetX:10, head1AKX:39.5, headPitchX:110, fieldX:110,
    holes:[[20,5,10,10],[0,0,.1,.1],[72.9,43.2,.1,.1]],
    distance:1467, evenExtra:380, direction:-1, reviewAKX:0, reviewAKY:0,
    vy:100, ay:500, dy:500, leadY:500, runoutY:100, autoStage:true,
    stageStart:2345.9875, stageEnd:-1584.5, stageLimits:false, stageMin:-2500, stageMax:3000,
    vx:200, ax:1000, dx:1000, parkX:0, xMin:0, xMax:925, preTime:2, settleMs:50, guardMs:20,
    fps:23, exposureUs:10, minExposureUs:10, readoutMs:0, overlapReadout:true,
    triggerDelayUs:50, jitterUs:5, compensate:true, encoderScale:16000, followErrorUm:0,
    maxBlurUm:1, sensorPixelUm:3.45, magnification:20, toleranceY:.03, toleranceX:.03, xSettleErrorUm:0,
    imageTail:1, otherTime:60, tact:150, processBudget:30, enforceTact:true,
    enforceProcess:true, cruiseOnly:true, processCruise:true, processClearanceMs:1,
    rowOneOnly:false, order:'head', cyclePolicy:'sequential'
  };
  const copyDefaults=()=>JSON.parse(JSON.stringify(defaults));
  function validate(p) {
    const errors=[];
    const positive=['glassX','glassY','cellPitchX','cellPitchY','pixelSize','shotPitchPixels','headPitchX','fieldX','vy','ay','dy','vx','ax','dx','fps','encoderScale','sensorPixelUm','magnification','tact','processBudget'];
    for (const k of positive) if (!Number.isFinite(p[k]) || p[k]<=0) errors.push(k+'는 양수여야 합니다.');
    for (const k of ['leadY','runoutY','preTime','settleMs','guardMs','minExposureUs','readoutMs','triggerDelayUs','jitterUs','followErrorUm','maxBlurUm','imageTail','otherTime','processClearanceMs','toleranceY','toleranceX','xSettleErrorUm'])
      if (!Number.isFinite(p[k]) || p[k]<0) errors.push(k+'는 0 이상이어야 합니다.');
    if (!Number.isFinite(p.exposureUs)||p.exposureUs<=0) errors.push('노출시간은 0보다 커야 합니다.');
    for(const k of ['akX','akY','referenceOffsetX','head1AKX','distance','evenExtra','reviewAKX','reviewAKY','parkX','xMin','xMax','stageStart','stageEnd','stageMin','stageMax'])
      if(!Number.isFinite(p[k])) errors.push(k+' 값이 유한하지 않습니다.');
    for (const k of ['cellCols','cellRows','pixelsX','pixelsY','shotPitchPixels']) if(!Number.isInteger(p[k])||p[k]<1) errors.push(k+'는 양의 정수여야 합니다.');
    if(p.cellCols*p.cellRows>150) errors.push('이 시뮬레이터는 최대 150 Cell을 지원합니다.');
    if (![1,4].includes(p.split)) errors.push('DOE 축당 분기는 1 또는 4입니다.');
    if(![-1,1].includes(p.direction)) errors.push('Stage 방향은 −1 또는 +1입니다.');
    if(!['arrival','head'].includes(p.order))errors.push('촬영 순서 값 오류');
    if(p.cyclePolicy!==undefined&&!['sequential','optimal'].includes(p.cyclePolicy))errors.push('Glass 그룹 정책 값 오류');
    if(p.xMax<=p.xMin) errors.push('Review X 최대는 최소보다 커야 합니다.');
    if(p.stageMax<=p.stageMin) errors.push('Stage stroke 최대는 최소보다 커야 합니다.');
    if(p.parkX<p.xMin-EPS||p.parkX>p.xMax+EPS) errors.push('X 초기 위치가 설정 Stroke 밖입니다.');
    if(!Array.isArray(p.holes)||p.holes.some(h=>h.length!==4||h.some(v=>!Number.isFinite(v))||h[2]<0||h[3]<0)) errors.push('Mask는 X,Y,Width,Height 4개 숫자여야 합니다.');
    const nc=Math.floor(p.pixelsX/p.shotPitchPixels),nr=Math.floor(p.pixelsY/p.shotPitchPixels);
    if(nc<1||nr<1||nc*nr>10000||nc*nr*p.cellCols*p.cellRows>1000000) errors.push('Shot 수 범위 오류: Cell당 1~10,000, 전체 1,000,000 이하입니다.');
    return errors;
  }
  function motion(distance, velocity, accel, decel=accel) {
    if(![distance,velocity,accel,decel].every(Number.isFinite)||distance<0||velocity<=0||accel<=0||decel<=0) throw new Error('Motion input invalid');
    const peak=Math.min(velocity,Math.sqrt(2*distance/(1/accel+1/decel)));
    const d1=peak*peak/(2*accel),d3=peak*peak/(2*decel),d2=Math.max(0,distance-d1-d3);
    const t1=peak/accel,t2=peak>0?d2/peak:0,t3=peak/decel,total=t1+t2+t3;
    function state(t) {
      if(t<0)return {s:0,v:0,phase:'시작 전'};
      if(t>=total)return {s:distance,v:0,phase:'정지'};
      if(t<t1-EPS)return {s:.5*accel*t*t,v:accel*t,phase:'가속'};
      if(t<t1+t2-EPS)return {s:d1+peak*(t-t1),v:peak,phase:'등속'};
      const u=total-t;return {s:distance-.5*decel*u*u,v:decel*u,phase:'감속'};
    }
    function timeAt(s) {
      if(s < -EPS || s > distance+EPS)return null;
      s=Math.max(0,Math.min(distance,s));
      if(s<=d1+EPS)return Math.sqrt(Math.max(0,2*s/accel));
      if(s<=d1+d2+EPS)return t1+(s-d1)/peak;
      return total-Math.sqrt(Math.max(0,2*(distance-s)/decel));
    }
    return {distance,peak,d1,d2,d3,t1,t2,t3,total,state,timeAt};
  }
  function stageProfile(start,end,p) {
    const distance=(end-start)*p.direction;
    if(distance<=EPS)throw new Error('Stage 시작/종점이 지정한 이동 방향과 맞지 않습니다.');
    const m=motion(distance,p.vy,p.ay,p.dy);
    return {...m,start,end,direction:p.direction,
      at:t=>{const s=m.state(t);return {...s,q:start+p.direction*s.s};},
      timeAtQ:q=>m.timeAt((q-start)*p.direction)};
  }
  function beamOffset(beam,p) {
    const pitch=p.pixelSize*p.shotPitchPixels/p.split;
    const z=beam-1,c=(p.split-1)/2;
    return {x:(z%p.split-c)*pitch,y:(Math.floor(z/p.split)-c)*pitch};
  }
  function masked(col,row,p) {
    // Exact union of the tiled DOE masking rectangles in the analyzed code.
    // The masking origin is col*pitch, whereas the Shot centre adds DOE half-span.
    const pitch=p.pixelSize*p.shotPitchPixels,h=pitch/2;
    const x=(col-1)*pitch,y=(row-1)*pitch;
    return p.holes.some(a=>x-h<=a[0]+a[2]+EPS&&x+h>=a[0]-EPS&&y-h<=a[1]+a[3]+EPS&&y+h>=a[1]-EPS);
  }
  function owner(centerX,p) {
    const ref=centerX+p.referenceOffsetX;
    let best=0,dist=Infinity;
    for(let h=1;h<=8;h++) {
      const center=p.akX+p.head1AKX+(h-1)*p.headPitchX,d=Math.abs(ref-center);
      if(d<=p.fieldX/2+EPS && d<dist-EPS){best=h;dist=d;}
    }
    return best;
  }
  function makeGeometry(p) {
    const errors=validate(p);if(errors.length)throw new Error(errors.join('\n'));
    const cols=Math.floor(p.pixelsX/p.shotPitchPixels),rows=Math.floor(p.pixelsY/p.shotPitchPixels);
    const pitch=p.pixelSize*p.shotPitchPixels,half=(p.split-1)/2*(pitch/p.split);
    const cells=[],byHead=Object.fromEntries(Array.from({length:8},(_,i)=>[i+1,[]]));
    let assigned=0,valid=0,unassigned=0,unassignedValid=0,maskedCount=0;
    const headRanges=Object.fromEntries(Array.from({length:8},(_,i)=>[i+1,{min:Infinity,max:-Infinity}]));
    for(let id=1;id<=p.cellCols*p.cellRows;id++) {
      const cx=((id-1)%p.cellCols)*p.cellPitchX,cy=Math.floor((id-1)/p.cellCols)*p.cellPitchY;
      const cell={id,x:p.akX+cx,y:p.akY+cy,offsetX:cx,offsetY:cy,width:p.pixelsX*p.pixelSize,height:p.pixelsY*p.pixelSize,heads:new Set()};
      cells.push(cell);
      for(let col=1;col<=cols;col++) {
        const x=cell.x+(col-1)*pitch+half,h=owner(x,p);
        if(h)cell.heads.add(h);
        for(let row=1;row<=rows;row++) {
          const y=cell.y+(row-1)*pitch+half,isMask=masked(col,row,p);
          if(isMask)maskedCount++;
          if(h)assigned++;else {unassigned++;if(!isMask)unassignedValid++;}
          if(h&&!isMask) {
            const rec={head:h,cell:id,col,row,shot:(row-1)*cols+col,centerX:x,centerY:y};
            byHead[h].push(rec);valid++;
            headRanges[h].min=Math.min(headRanges[h].min,y-p.akY);headRanges[h].max=Math.max(headRanges[h].max,y-p.akY);
          }
        }
      }
      cell.heads=[...cell.heads];
    }
    return {cells,byHead,headRanges,cols,rows,pitch,half,assigned,valid,unassigned,unassignedValid,maskedCount,theoretical:cols*rows*cells.length};
  }
  function makePoint(def,p,g) {
    const head=Number(def.head),cell=Number(def.cell),col=Number(def.col),row=Number(def.row),beam=Number(def.beam||7),errors=[];
    if(!Number.isInteger(head)||head<1||head>8)errors.push('Head 번호 오류');
    const c=g.cells[cell-1];
    if(!c)errors.push('Cell 번호 오류');
    if(!Number.isInteger(col)||col<1||col>g.cols||!Number.isInteger(row)||row<1||row>g.rows)errors.push('Shot 열/행 범위 오류');
    if(!Number.isInteger(beam)||beam<1||beam>p.split*p.split)errors.push('DOE Branch 번호 오류');
    if(errors.length)return {...def,head,errors,geometryValid:false};
    const b=beamOffset(beam,p),centerX=c.x+(col-1)*g.pitch+g.half,centerY=c.y+(row-1)*g.pitch+g.half;
    const x=centerX+b.x,y=centerY+b.y,h=owner(centerX,p);
    if(h!==head)errors.push(h?'선택 Shot은 H'+h+' 소유':'Head Field 미배정 Shot');
    if(masked(col,row,p))errors.push('Mask와 교차하여 Shot 전체 Laser Skip');
    if(x<0||x>p.glassX||y<0||y>p.glassY)errors.push('Glass 경계 밖의 가공점');
    if(p.rowOneOnly&&row!==1)errors.push('Cell 첫 Shot Row 제한 위반');
    const reviewX=p.reviewAKX+x-p.akX,targetQ=p.reviewAKY+p.direction*(y-p.akY);
    if(reviewX<p.xMin-EPS||reviewX>p.xMax+EPS)errors.push('Review X Stroke 밖');
    return {head,cell,col,row,beam,enabled:def.enabled!==false,shot:(row-1)*g.cols+col,
      centerX,centerY,x,y,beamX:b.x,beamY:b.y,reviewX,targetQ,owner:h,
      nativeKey:'CELL'+String(cell).padStart(3,'0')+'_SHOT'+String((row-1)*g.cols+col).padStart(4,'0'),
      errors,geometryValid:errors.length===0};
  }
  function qBounds(p,g) {
    const values=[];
    for(let h=1;h<=8;h++) {
      const r=g.headRanges[h];if(!Number.isFinite(r.min))continue;
      const d=p.distance+(h%2===0?p.evenExtra:0);
      values.push(p.reviewAKY-p.direction*d+p.direction*r.min,p.reviewAKY-p.direction*d+p.direction*r.max);
    }
    if(!values.length)throw new Error('유효 Head 가공점이 없습니다.');
    const first=p.direction<0?Math.max(...values):Math.min(...values),last=p.direction<0?Math.min(...values):Math.max(...values);
    const autoStart=first-p.direction*p.leadY;
    const autoEnd=p.reviewAKY+p.direction*(p.glassY-p.akY+p.runoutY);
    return {first,last,start:p.autoStage?autoStart:p.stageStart,end:p.autoStage?autoEnd:p.stageEnd,autoStart,autoEnd};
  }
  function buildState(p,definitions,g) {
    const bounds=qBounds(p,g),profile=stageProfile(bounds.start,bounds.end,p),globals=[];
    const firstLaser=profile.timeAtQ(bounds.first),lastLaser=profile.timeAtQ(bounds.last);
    const processTime=firstLaser===null||lastLaser===null?null:Math.abs(lastLaser-firstLaser);
    if(firstLaser===null||lastLaser===null)globals.push('Stage 경로가 전체 가공 구간을 커버하지 않습니다.');
    if(p.stageLimits&&(Math.min(bounds.start,bounds.end)<p.stageMin-EPS||Math.max(bounds.start,bounds.end)>p.stageMax+EPS))globals.push('Stage 이동 Stroke 초과');
    if(p.enforceProcess&&processTime!==null&&processTime>p.processBudget+EPS)globals.push('기하학적 가공 구간이 '+p.processBudget+'초 예산 초과');
    if(p.processCruise&&firstLaser!==null&&lastLaser!==null &&
      (Math.min(firstLaser,lastLaser)<profile.t1-EPS||Math.max(firstLaser,lastLaser)>profile.t1+profile.t2+EPS))globals.push('MOF 가공 구간에 가속/감속 포함');
    const exposure=p.exposureUs/1e6,delay=p.triggerDelayUs/1e6,jitter=p.jitterUs/1e6;
    const period=Math.max(1/p.fps,p.overlapReadout?Math.max(exposure,p.readoutMs/1000):exposure+p.readoutMs/1000);
    if(exposure+EPS<p.minExposureUs/1e6)globals.push('Camera 최소 노출시간보다 짧음');
    const latestExposure=Math.max(0,...definitions.filter(d=>d.enabled!==false).map(d=>{
      const point=makePoint(d,p,g),cross=Number.isFinite(point.targetQ)?profile.timeAtQ(point.targetQ):null;
      return cross===null?0:cross+(p.compensate?exposure/2:delay+exposure)+jitter;
    }));
    const readoutWait=Math.max(0,latestExposure+p.readoutMs/1000-profile.total);
    const tact=profile.total+readoutWait+p.imageTail+p.otherTime;
    if(p.enforceTact&&tact>p.tact+EPS)globals.push('한 Glass Full Tact 가정값이 '+p.tact+'초 초과');
    const base={p,g,bounds,profile,firstLaser,lastLaser,processTime,exposure,delay,jitter,period,readoutWait,tact,globals};
    const nodes=definitions.filter(d=>d.enabled!==false).map(def=>nodeFor(makePoint(def,p,g),base));
    const sorted=nodes.slice().sort((a,b)=>(a.cross??Infinity)-(b.cross??Infinity)||a.head-b.head);
    return {...base,nodes,sorted};
  }
  function exposureBlur(profile,start,end,jitter) {
    // The integral of a piecewise-linear speed is piecewise quadratic in the
    // exposure-time shift. Check every phase boundary and derivative zero.
    const cuts=[-jitter,jitter,0];
    for(const phase of [0,profile.t1,profile.t1+profile.t2,profile.total])for(const t of [start,end]) {
      const shift=phase-t;if(shift>=-jitter&&shift<=jitter)cuts.push(shift);
    }
    const xs=[...new Set(cuts)].sort((a,b)=>a-b),candidates=[...xs];
    const derivative=shift=>profile.at(end+shift).v-profile.at(start+shift).v;
    for(let i=1;i<xs.length;i++) {
      const a=xs[i-1],b=xs[i],fa=derivative(a),fb=derivative(b);
      if(fa*fb<0)candidates.push(a+(b-a)*(-fa)/(fb-fa));
    }
    return 1000*Math.max(...candidates.map(j=>Math.abs(profile.at(end+j).q-profile.at(start+j).q)));
  }
  function nodeFor(point,s) {
    const {p,profile,exposure,delay,jitter}=s,errors=[...point.errors,...s.globals];
    const cross=Number.isFinite(point.targetQ)?profile.timeAtQ(point.targetQ):null;
    if(cross===null){errors.push('Review 지점이 Stage 이동 경로 밖');return {...point,cross:null,errors,valid:false};}
    const cmd=p.compensate?cross-delay-exposure/2:cross;
    const expStart=cmd+delay,expEnd=expStart+exposure,mid=(expStart+expEnd)/2;
    const distance=p.distance+(point.head%2===0?p.evenExtra:0);
    const laserQ=p.reviewAKY-p.direction*distance+p.direction*(point.centerY-p.akY),laserTime=profile.timeAtQ(laserQ);
    if(distance+point.beamY<=0)errors.push('가공면이 Review보다 downstream: 가공 후 검사 불가');
    const earliestExposure=expStart-jitter,latestExposure=expEnd+jitter;
    if(laserTime===null||laserTime+p.processClearanceMs/1000>earliestExposure+EPS)errors.push('출사 후 대기 조건 미충족 또는 가공점 경로 밖 (Jitter 포함)');
    if(earliestExposure<0-EPS||latestExposure>profile.total+EPS)errors.push('노출이 Stage 구동시간 밖 (Jitter 포함)');
    if(p.cruiseOnly&&(earliestExposure<profile.t1-EPS||latestExposure>profile.t1+profile.t2+EPS))errors.push('Review 노출에 가속/감속 구간 포함 (Jitter 포함)');
    const blur=exposureBlur(profile,expStart,expEnd,jitter);
    const positionError=1000*Math.max(Math.abs(profile.at(mid-jitter).q-point.targetQ),Math.abs(profile.at(mid+jitter).q-point.targetQ))+
      500/p.encoderScale+p.followErrorUm;
    if(blur>p.maxBlurUm+1e-5)errors.push('Y Motion Blur 허용값 초과');
    if(positionError>p.toleranceY*1000+1e-5)errors.push('Trigger/Encoder/Follow 위치오차 예산 초과');
    if(p.xSettleErrorUm>p.toleranceX*1000+1e-5)errors.push('X 정착오차 예산 초과');
    const initialMove=motion(Math.abs(point.reviewX-p.parkX),p.vx,p.ax,p.dx);
    const initialSlack=cmd-jitter-p.guardMs/1000-(-p.preTime+initialMove.total+p.settleMs/1000);
    return {...point,cross,cmd,expStart,expEnd,mid,distance,laserQ,laserTime,
      speed:profile.at(mid).v,phase:profile.at(mid).phase,blur,blurPixels:blur/(p.sensorPixelUm/p.magnification),positionError,
      leadTime:laserTime===null?null:cross-laserTime,initialMove:initialMove.total,initialSlack,errors,valid:errors.length===0};
  }
  function edge(a,b,s) {
    if(![a.reviewX,b.reviewX,a.y,b.y,a.cmd,b.cmd,a.expEnd,a.cross,b.cross].every(Number.isFinite))
      return {a:a.head,b:b.head,valid:false,reasons:['좌표/경로 오류를 먼저 수정하세요.'],dx:NaN,dy:NaN,gap:NaN,xSlack:NaN,frameSlack:NaN};
    const distance=Math.abs(b.reviewX-a.reviewX),dy=Math.abs(b.y-a.y);
    const move=motion(distance,s.p.vx,s.p.ax,s.p.dx),settle=s.p.settleMs/1000,guard=s.p.guardMs/1000;
    const xAvailable=b.cmd-s.jitter-guard-a.expEnd-s.jitter-settle;
    const xSlack=xAvailable-move.total,frameSlack=b.cmd-a.cmd-2*s.jitter-s.period;
    const orderOK=s.p.order!=='head'||b.head>a.head;
    const reasons=[];
    if(xSlack<-EPS)reasons.push('Review X 선도착/정착 시간 부족');
    if(frameSlack<-EPS)reasons.push('Camera 재Trigger 주기 부족');
    if(!orderOK)reasons.push('Head 번호 순서와 Y 도착 순서 충돌');
    const need=move.total+settle+guard+s.delay+s.exposure+2*s.jitter;
    return {a:a.head,b:b.head,dx:distance,dy,distance:Math.hypot(distance,dy),gap:b.cross-a.cross,
      move:move.total,movePeak:move.peak,xAvailable,xSlack,frameSlack,need,
      minDeltaYCruise:s.profile.peak*Math.max(need,s.period+2*s.jitter),orderOK,valid:reasons.length===0,reasons};
  }
  function passFor(nodes,s) {
    const ordered=nodes.slice().sort((a,b)=>(a.cross??Infinity)-(b.cross??Infinity)||a.head-b.head);
    const edges=ordered.slice(1).map((b,i)=>edge(ordered[i],b,s));
    const last=ordered[ordered.length-1],returnTime=last&&Number.isFinite(last.reviewX)?motion(Math.abs(last.reviewX-s.p.parkX),s.p.vx,s.p.ax,s.p.dx).total+s.p.settleMs/1000:null;
    const resetSlack=returnTime===null?null:s.tact-s.p.preTime-last.expEnd-s.jitter-returnTime;
    const valid=ordered.length>0&&ordered.every(n=>n.valid)&&ordered[0].initialSlack>=-EPS&&edges.every(e=>e.valid)&&resetSlack>=-EPS;
    const slack=valid?Math.min(ordered[0].initialSlack,resetSlack,...edges.flatMap(e=>[e.xSlack,e.frameSlack])):-Infinity;
    return {nodes:ordered,edges,valid,slack,returnTime,resetSlack};
  }
  function popcount(m){let n=0;for(;m;m&=m-1)n++;return n;}
  function evaluate(p,definitions,g=makeGeometry(p)) {
    const errors=validate(p);if(errors.length)throw new Error(errors.join('\n'));
    const s=buildState(p,definitions,g),n=s.nodes.length;if(n<1)throw new Error('검사 대상 Head를 하나 이상 선택하세요.');
    if(n>8||new Set(s.nodes.map(p=>p.head)).size!==n)throw new Error('Head당 고정 포인트는 정확히 하나여야 합니다.');
    const full=(1<<n)-1,feasible=[],byMask=new Map();let best=null;
    for(let mask=1;mask<=full;mask++) {
      const pass=passFor(s.nodes.filter((_,i)=>mask&(1<<i)),s);byMask.set(mask,pass);
      if(pass.valid){feasible.push(mask);if(!best||popcount(mask)>popcount(best.mask)||popcount(mask)===popcount(best.mask)&&pass.slack>best.pass.slack)best={mask,pass};}
    }
    function partition(cap) {
      const memo=new Map([[0,{count:0,groups:[],slack:Infinity}]]);
      function solve(remaining) {
        if(memo.has(remaining))return memo.get(remaining);
        const first=remaining&-remaining;let answer=null;
        for(const mask of feasible) {
          if(!(mask&first)||(mask&remaining)!==mask||popcount(mask)>cap)continue;
          const rest=solve(remaining^mask);if(!rest)continue;
          const group=byMask.get(mask),candidate={count:rest.count+1,groups:[group,...rest.groups],slack:Math.min(group.slack,rest.slack)};
          if(!answer||candidate.count<answer.count||candidate.count===answer.count&&candidate.slack>answer.slack)answer=candidate;
        }
        memo.set(remaining,answer);return answer;
      }
      const result=solve(full);
      if(result)result.groups.sort((a,b)=>Math.min(...a.nodes.map(n=>n.head))-Math.min(...b.nodes.map(n=>n.head)));
      return result;
    }
    function sequentialPartition(cap) {
      const indices=s.nodes.map((n,i)=>({head:n.head,index:i})).sort((a,b)=>a.head-b.head),memo=new Map([[n,{count:0,groups:[],slack:Infinity}]]);
      function solve(start) {
        if(memo.has(start))return memo.get(start);
        let answer=null,mask=0;
        for(let k=1;k<=cap&&start+k<=n;k++) {
          mask|=1<<indices[start+k-1].index;const group=byMask.get(mask);if(!group.valid)continue;
          const rest=solve(start+k);if(!rest)continue;
          const candidate={count:rest.count+1,groups:[group,...rest.groups],slack:Math.min(group.slack,rest.slack)};
          if(!answer||candidate.count<answer.count||candidate.count===answer.count&&candidate.slack>answer.slack)answer=candidate;
        }
        memo.set(start,answer);return answer;
      }
      return solve(0);
    }
    const plansOptimal=Object.fromEntries([1,2,4,8].map(cap=>[cap,partition(cap)]));
    const plansSequential=Object.fromEntries([1,2,4,8].map(cap=>[cap,sequentialPartition(cap)]));
    const plans=p.cyclePolicy==='optimal'?plansOptimal:plansSequential;
    const all=byMask.get(full);
    return {...s,best,maxPerPass:best?popcount(best.mask):0,plans,plansOptimal,plansSequential,all,feasibleCount:feasible.length,requested:n,
      coverageComplete:!!plans[8],blocked:s.nodes.filter(n=>!n.valid),feasible,byMask};
  }
  function firstPoint(head,cellRow,p,g) {
    const candidates=g.byHead[head].filter(r=>Math.floor((r.cell-1)/p.cellCols)===cellRow&&(!p.rowOneOnly||r.row===1));
    const r=candidates.slice().sort((a,b)=>a.cell-b.cell||a.row-b.row||a.col-b.col)[0];
    return r?{head,cell:r.cell,col:r.col,row:r.row,beam:Math.min(7,p.split*p.split),enabled:true}:null;
  }
  function preset(kind,p,g) {
    return Array.from({length:8},(_,i)=>{
      const h=i+1,r=kind==='same'?0:kind==='four'?i%4:h%2===0?1:0;
      return firstPoint(h,Math.min(r,p.cellRows-1),p,g)||{head:h,cell:1,col:1,row:1,beam:Math.min(7,p.split*p.split),enabled:true};
    });
  }
  function candidatePool(head,p,g) {
    const wantedRows=p.rowOneOnly?[1]:[1,Math.max(1,Math.round(g.rows*.25)),Math.max(1,Math.round(g.rows*.5)),Math.max(1,Math.round(g.rows*.75)),g.rows];
    const buckets=new Map();
    for(const r of g.byHead[head]) {
      if(!wantedRows.includes(r.row))continue;
      const key=r.cell+':'+r.row;if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(r);
    }
    const pool=[];
    for(const list of buckets.values()) {
      const picks=[list[0],list[Math.floor((list.length-1)/2)],list[list.length-1]];
      for(const r of picks)if(!pool.some(x=>x.cell===r.cell&&x.col===r.col&&x.row===r.row))pool.push({head,cell:r.cell,col:r.col,row:r.row,beam:Math.min(7,p.split*p.split),enabled:true});
    }
    return pool;
  }
  function autoSelect(p,g=makeGeometry(p)) {
    const s=buildState(p,[],g),layers=[];
    for(let h=1;h<=8;h++)layers.push(candidatePool(h,p,g).map(d=>({def:d,node:nodeFor(makePoint(d,p,g),s)})).filter(c=>c.node.valid));
    let states=layers[0].filter(c=>c.node.initialSlack>=-EPS).map(c=>({...c,score:c.node.initialSlack,path:[c.def]}));
    for(let layer=1;layer<8;layer++) {
      const next=[];
      for(const c of layers[layer]) {
        let best=null;
        for(const prev of states) {
          if(c.node.cross<=prev.node.cross+EPS)continue;
          const e=edge(prev.node,c.node,s);if(!e.valid)continue;
          const score=Math.min(prev.score,e.xSlack,e.frameSlack);
          if(!best||score>best.score+EPS)best={...c,score,path:[...prev.path,c.def]};
        }
        if(best)next.push(best);
      }
      states=next;if(!states.length)break;
    }
    states.sort((a,b)=>b.score-a.score||a.node.cross-b.node.cross);
    return states.length&&states[0].path.length===8?{definitions:states[0].path,slack:states[0].score,candidates:layers.reduce((n,l)=>n+l.length,0)}:null;
  }
  function minVelocity(distance,time,accel,decel) {
    if(distance<EPS)return 0;
    const lower=Math.sqrt(2*distance*(1/accel+1/decel));
    if(time<lower-EPS)return null;
    let lo=1e-6,hi=Math.sqrt(2*distance/(1/accel+1/decel));
    for(let i=0;i<70;i++){const mid=(lo+hi)/2;if(motion(distance,mid,accel,decel).total<=time+EPS)hi=mid;else lo=mid;}
    return hi;
  }
  function accelScale(distance,time,p) {
    if(distance<EPS)return 1;
    if(time<=distance/p.vx+EPS)return null;
    let lo=1,hi=1;
    while(hi<1e6&&motion(distance,p.vx,p.ax*hi,p.dx*hi).total>time)hi*=2;
    if(hi>=1e6)return null;
    for(let i=0;i<60;i++){const mid=(lo+hi)/2;if(motion(distance,p.vx,p.ax*mid,p.dx*mid).total<=time)hi=mid;else lo=mid;}
    return hi;
  }
  function inverse(result,definitions) {
    const {p,g,all}=result;
    const messages=[],validPoints=all.nodes.every(n=>n.geometryValid&&n.cross!==null);
    if(!validPoints)return {messages:['미배정·마스킹·경로 밖 포인트를 먼저 수정하세요. 속도 변경만으로는 이 문제를 해결할 수 없습니다.'],rows:[],speedWindow:null};
    const rows=all.edges.map(e=>{
      const a=all.nodes.find(n=>n.head===e.a),b=all.nodes.find(n=>n.head===e.b);
      const vx=minVelocity(e.dx,e.xAvailable,p.ax,p.dx),scale=accelScale(e.dx,e.xAvailable,p);
      const minCenterTime=Math.max(a.expEnd+2*result.jitter+e.move+p.settleMs/1000+p.guardMs/1000+result.delay+result.exposure/2,a.cmd+result.period+2*result.jitter+result.delay+result.exposure/2);
      const targetY=minCenterTime<=result.profile.total?p.akY+p.direction*(result.profile.at(minCenterTime).q-p.reviewAKY):NaN;
      return {...e,vx,accelScale:scale,minFPS:e.gap>2*result.jitter+EPS?1/(e.gap-2*result.jitter):null,neededY:targetY,minDyExact:Math.max(0,targetY-a.y)};
    });
    let speedWindow=null;
    // Finite single-variable search, then refined transitions; never claim a
    // hardware-valid value or a globally optimal coordinate configuration.
    const speeds=[];for(let i=0;i<=180;i++)speeds.push(.5*Math.pow(4000,i/180));speeds.push(p.vy);speeds.sort((a,b)=>a-b);
    const feasible=v=>{
      try{const q={...p,vy:v},s=buildState(q,definitions,g);return passFor(s.nodes,s).valid;}catch(_){return false;}
    };
    const sampled=speeds.map(v=>({v,ok:feasible(v)})),bands=[];
    for(let i=0;i<sampled.length;i++)if(sampled[i].ok){const start=i;while(i+1<sampled.length&&sampled[i+1].ok)i++;bands.push([start,i]);}
    if(bands.length) {
      const chosen=bands.find(([a,b])=>p.vy>=sampled[a].v&&p.vy<=sampled[b].v)||bands.sort((a,b)=>(sampled[b[1]].v-sampled[b[0]].v)-(sampled[a[1]].v-sampled[a[0]].v))[0];
      const [first,last]=chosen;let min=sampled[first].v,max=sampled[last].v;
      if(first>0){let lo=sampled[first-1].v,hi=min;for(let j=0;j<45;j++){const mid=(lo+hi)/2;if(feasible(mid))hi=mid;else lo=mid;}min=hi;}
      if(last<sampled.length-1){let lo=max,hi=sampled[last+1].v;for(let j=0;j<45;j++){const mid=(lo+hi)/2;if(feasible(mid))lo=mid;else hi=mid;}max=lo;}
      speedWindow={min,max,bands:bands.length,sampledRange:[.5,2000],verifiedMax:feasible(max),note:'0.5~2000 mm/s 표본 탐색 + 경계 이분법. 연속 표본 구간 한 개를 표시하며, 현재 고정점·가감속·품질·30/150초 제약을 동시 적용합니다.'};
    }
    if(all.edges.some(e=>e.dy<EPS&&e.dx>EPS))messages.push('동일 글로벌 Y의 서로 다른 X는 같은 순간에 도착합니다. 유한한 X 속도/FPS 변경만으로 모두 찍을 수 없으므로 Y 좌표를 바꾸거나 Glass를 나누세요.');
    const requireVX=rows.some(r=>r.vx===null)?null:Math.max(0,...rows.map(r=>r.vx));
    if(requireVX===null)messages.push('일부 구간은 X 가감속 하한 또는 노출/정착/Guard 때문에 속도만 높여도 해결되지 않습니다. 아래 가감속 배율 또는 Y 간격을 함께 검토하세요.');
    const worstSpeed=Math.max(0,...all.nodes.map(n=>n.speed||0));
    const exposureLimit=worstSpeed>0?p.maxBlurUm*1000/worstSpeed:Infinity;
    if(exposureLimit+EPS<p.minExposureUs)messages.push('허용 블러를 만족하는 노출 상한이 Camera 최소노출보다 짧습니다. Stage 감속, 광학 조건 또는 Camera 사양 변경이 필요합니다.');
    if(!speedWindow&&!all.valid)messages.push('다른 파라미터 고정 시 탐색 범위에서 전체 요청 포인트를 동시에 만족하는 Y 속도를 찾지 못했습니다. 미성립 원인별로 조건을 함께 바꿔야 합니다.');
    return {messages,rows,speedWindow,requireVX,exposureLimit,requiredFPS:rows.some(r=>r.minFPS===null)?null:Math.max(0,...rows.map(r=>r.gap>2*result.jitter?1/(r.gap-2*result.jitter):Infinity)),
      requiredPreTime:all.nodes.length?Math.max(0,all.nodes[0].initialMove+p.settleMs/1000+p.guardMs/1000+result.jitter-all.nodes[0].cmd):0};
  }
  function nearestPoint(head,x,y,beam,p,g) {
    const b=beamOffset(beam,p);let best=null;
    for(const r of g.byHead[head]) {
      if(p.rowOneOnly&&r.row!==1)continue;
      const d=Math.hypot(r.centerX+b.x-x,r.centerY+b.y-y);
      if(!best||d<best.distance)best={distance:d,definition:{head,cell:r.cell,col:r.col,row:r.row,beam,enabled:true}};
    }
    return best;
  }
  function cameraPath(pass,p) {
    const segments=[];let previousX=p.parkX,from=-p.preTime;
    for(const n of pass.nodes) {
      const m=motion(Math.abs(n.reviewX-previousX),p.vx,p.ax,p.dx),sign=n.reviewX>=previousX?1:-1;
      segments.push({start:from,end:from+m.total,x0:previousX,x1:n.reviewX,m,head:n.head,sign});
      previousX=n.reviewX;from=n.expEnd+p.jitterUs/1e6;
    }
    if(pass.nodes.length){const m=motion(Math.abs(p.parkX-previousX),p.vx,p.ax,p.dx);segments.push({start:from,end:from+m.total,x0:previousX,x1:p.parkX,m,head:null,sign:p.parkX>=previousX?1:-1,returning:true});}
    function at(t) {
      let x=p.parkX,v=0,head=null;
      for(const seg of segments) {
        if(t<seg.start)break;
        head=seg.head;
        if(t<=seg.end){const r=seg.m.state(t-seg.start);return {x:seg.x0+seg.sign*r.s,v:seg.sign*r.v,head,phase:seg.returning?'X Park 복귀':'X 이동'};}
        x=seg.x1;
      }
      return {x,v,head,phase:'X 정착 / 대기'};
    }
    return {segments,at};
  }
  return {defaults,copyDefaults,validate,motion,stageProfile,beamOffset,masked,owner,makeGeometry,makePoint,qBounds,buildState,exposureBlur,nodeFor,edge,passFor,evaluate,preset,firstPoint,candidatePool,autoSelect,minVelocity,accelScale,inverse,nearestPoint,cameraPath,popcount};
});
