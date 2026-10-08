(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ReviewVisual=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';const f=(n,k=3)=>Number.isFinite(n)?n.toFixed(k):'—';
function text(x,y,t,size=14,fill='#10243a',anchor='start'){return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-family="Noto Sans CJK KR,Malgun Gothic,Arial,sans-serif">${t}</text>`;}
function line(x1,y1,x2,y2,color='#c6d4e1',width=2,dash=''){return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${dash?`stroke-dasharray="${dash}"`:''}></line>`;}
function rect(x,y,w,h,fill,rad=5){return `<rect x="${x}" y="${y}" width="${Math.max(0,w)}" height="${h}" rx="${rad}" fill="${fill}"></rect>`;}
function plotMax(c,r,g){return Math.max(c.processBudgetS,r.processTime,g.reviewEnd)*1.04;}
function timeline(c,r,g){
 const max=plotMax(c,r,g),x=t=>190+t/max*875;let s=rect(0,0,1120,350,'#f7fafc',10),step=Math.max(5,Math.ceil(max/7/5)*5);
 for(let t=0;t<=max;t+=step)s+=line(x(t),42,x(t),244,'#e0e9f1',1)+text(x(t),27,f(t,0)+'s',12,'#5d6e80','middle');
 if(r.processTime<max)s+=rect(x(r.processTime),42,x(max)-x(r.processTime),202,'#e8edf2',0);
 if(r.physicalOverlap>0)s+=rect(x(r.overlapStart),100,Math.max(3,x(r.overlapEnd)-x(r.overlapStart)),139,'#ffe4ae',0);
 s+=text(17,78,'Y 가속·등속·감속',14)+rect(x(0),58,x(r.cruiseStart)-x(0),28,'#efb757')+rect(x(r.cruiseStart),58,x(r.cruiseEnd)-x(r.cruiseStart),28,'#1269d3')+rect(x(r.cruiseEnd),58,x(r.processTime)-x(r.cruiseEnd),28,'#efb757');
 s+=text(17,138,'기판 Scanner 통과',14);if(r.scannerWindow.start!==null)s+=rect(x(r.scannerWindow.start),118,x(r.scannerWindow.end)-x(r.scannerWindow.start),28,'#1269d3');
 s+=text(17,198,'리뷰점 도착창(Y)',14)+rect(x(g.reviewStart),178,x(Math.min(g.reviewEnd,r.processTime))-x(g.reviewStart),28,'#00a1ab');
 if(g.reviewEnd>r.processTime)s+=rect(x(Math.max(g.reviewStart,r.processTime)),178,x(g.reviewEnd)-x(Math.max(g.reviewStart,r.processTime)),28,'#9cafc4');
 for(const n of g.nodes){const route=g.edges.find(e=>e.to===n.head),ok=n.inCruise&&(!route||route.valid);s+=line(x(n.cross),171,x(n.cross),213,ok?'#10243a':'#bc3948',2,ok?'':'4 3')+text(x(n.cross),232,'H'+String(n.head).padStart(2,'0'),11,ok?'#10243a':'#bc3948','middle');}
 s+=line(x(r.processTime),43,x(r.processTime),248,'#d98c22',2,'4 4')+text(x(r.processTime),267,'Stroke 종료 '+f(r.processTime)+'s',13,'#a66807','end');
 s+=text(17,298,'기판 Scanner·Review 동시통과 '+f(r.physicalOverlap)+'s · 해당 점 가공 후 리뷰, 전체 가공완료를 기다리지 않습니다',14,'#10243a');
 s+=text(17,333,'주황띠=기판의 두 장치 통과 중첩(실제Laser ON과 별도) · 회색=Stroke 밖 · 빨간 Head=Y/X/취득 간격 불충족',11,'#5d6e80');
 s+='<line id="timelineCursor" x1="190" y1="42" x2="190" y2="241" stroke="#bc3948" stroke-width="2"></line>';return s;
}
function fieldView(c,r){const a=r.nodes.find(n=>n.head===3),b=r.nodes.find(n=>n.head===4),center=c.scanner.firstShotCenterAKX+2*c.scanner.headPitchMm,w=c.scanner.fieldWidthMm,low=center-w/2-15,x=u=>92+(u-low)/(2*w+30)*922;
 let s=rect(0,0,1120,255,'#f7fafc',10)+text(22,29,'H03·H04: 각 스캐너 가공폭 '+f(w,0)+'mm / 리뷰 이동은 선정점의 X좌표 차이',18);
 s+=text(22,56,'X 투영 도식 · 기존 좌표변환의 Shot 소유구간 · 선정점은 서로 다른 Cell',12,'#5d6e80');
 for(const [h,ce,col] of [[3,center,'#d7eaff'],[4,center+c.scanner.headPitchMm,'#def4f1']])s+=rect(x(ce-w/2),75,x(ce+w/2)-x(ce-w/2),65,col,5)+text(x(ce),102,'H'+String(h).padStart(2,'0')+' · '+f(w,0)+'mm',16,'#10243a','middle')+text(x(ce),126,'소유구간 '+f(ce-w/2,1)+'~'+f(ce+w/2,1)+'mm',12,'#5d6e80','middle');
 for(const n of [a,b])s+=line(x(n.reviewX),141,x(n.reviewX),178,'#0f805b',2)+`<circle cx="${x(n.reviewX)}" cy="153" r="6" fill="#0f805b"></circle>`+text(x(n.reviewX),203,'H'+String(n.head).padStart(2,'0')+' / C'+n.cell+' / X'+f(n.reviewX,2),13,'#0f805b','middle');
 s+=line(x(a.reviewX),225,x(b.reviewX),225,'#0f805b',4)+text((x(a.reviewX)+x(b.reviewX))/2,245,'실제 이동 '+f(Math.abs(b.reviewX-a.reviewX),1)+'mm',16,'#0f805b','middle');return s;
}
function cellPoint(c,n){const sc=2.1,x=u=>20+u*sc,y=u=>15+u*sc,cl=n.pointValid?'#0f805b':'#bc3948';let s=rect(20,15,c.glass.cellWidth*sc,c.glass.cellHeight*sc,'#edf3f8',3);
 for(const [col,row] of n.validShots){const u=c.pointGrid.minXmm+(col-1)*c.pointGrid.pitchMm,v=c.pointGrid.minYmm+(row-1)*c.pointGrid.pitchMm;s+=`<circle cx="${x(u)}" cy="${y(v)}" r=".9" fill="#96b4c7"></circle>`;}
 s+=`<circle cx="${x(n.localX)}" cy="${y(n.localY)}" r="4" fill="${cl}"></circle>`+text(20,130,'X '+f(n.localX,3)+' / Y '+f(n.localY,3)+'mm',11,cl);return s;
}
function machine(c,r,t,g){
 const a=r.profile.at(t),q=r.q0-a.s,scale=.16,x=z=>370+z*scale,D=c.distanceMm,L=c.glass.height,leading=D+c.glass.akY-q,trailing=leading-L;
 let s=rect(0,0,1120,240,'#f7fafc',10)+text(20,27,'가공대기 위치에서 역방향(-StageY)으로만 이동 →',15);
 s+=rect(x(0)-41,48,82,42,'#1269d3',7)+text(x(0),76,'Scanner',14,'white','middle');s+=rect(x(D)-46,48,92,42,'#00a1ab',7)+text(x(D),76,'Review',14,'white','middle');
 s+=line(x(0),105,x(D),105,'#d98c22',2)+text((x(0)+x(D))/2,99,'고정거리1467 mm',13,'#a66807','middle');
 s+=line(22,178,1080,178,'#bdcbd9',3)+rect(x(trailing),138,L*scale,37,'#d7eaff',4)+text((x(trailing)+x(leading))/2,163,'기판1500 mm →',14,'#1269d3','middle');
 s+=line(x(0),93,x(0),193,'#1269d3',2,'4 4')+line(x(D),93,x(D),193,'#00a1ab',2,'4 4');
 s+=text(20,224,`${f(t)} / ${f(r.processTime)}s · ${a.phase} · 진행거리 ${f(a.s,1)} / ${f(r.p.strokeMm,1)}mm · 속도 ${f(a.v,1)}mm/s`,14);return s;
}
function transition(c,r,e,E,t=null){
 const max=Math.max(e.gap,e.need)*1.15,x=u=>192+u/max*875,move=E.motion(e.dx,r.p.vx,r.p.ax,r.p.dx),lead=r.p.exposureUs/1e6+c.jitterS,clock=t===null?e.gap:t,st=move.at(Math.max(0,clock-lead)),ready=clock>=e.needX,phase=clock<lead?'이전 노출 여유':clock<lead+move.total?'X '+st.phase:ready?'X 준비 완료':'정착·Trigger 여유',color=e.valid?'#0f805b':'#bc3948';
 let s=rect(0,0,1120,420,'#f7fafc',10)+text(22,30,'H'+String(e.from).padStart(2,'0')+' → H'+String(e.to).padStart(2,'0')+' : 선정점 좌표차로, 다음 촬영까지 준비시간을 확인합니다',19);
 s+=text(22,58,'이전 노출 시작=0초 · ΔX '+f(e.dx,1)+'mm / ΔY '+f(e.dy,1)+'mm · 등속 Y'+f(r.p.vy,1)+'mm/s',13,'#5d6e80');
 s+=text(22,108,'다음 점 도착',14)+rect(x(0),88,x(e.gap)-x(0),29,'#1269d3')+text(x(e.gap)+8,108,f(e.gap)+'s',14,'#1269d3');
 s+=text(22,165,'X 준비 필요',14)+rect(x(lead),144,x(lead+move.t1)-x(lead),34,'#009fa9')+rect(x(lead+move.t1),144,x(lead+move.t1+move.t2)-x(lead+move.t1),34,'#44bbc3')+rect(x(lead+move.t1+move.t2),144,x(lead+move.total)-x(lead+move.t1+move.t2),34,'#008892')+rect(x(lead+move.total),144,x(e.needX)-x(lead+move.total),34,'#efb757');
 s+=text(x(move.total/2),166,'이동 '+f(e.move)+'s',14,'white','middle')+text(x(e.needX),201,'정착·여유 포함 '+f(e.needX)+'s',13,'#9a6305','end');
 s+=text(22,239,'카메라 재취득',14)+rect(x(0),220,x(e.needCamera)-x(0),25,'#9cafc4')+text(x(e.needCamera)+9,239,f(e.needCamera)+'s',13,'#5d6e80');
 s+=line(x(e.gap),77,x(e.gap),271,color,2,'5 4');
 if(e.valid)s+=line(x(e.need),279,x(e.gap),279,'#0f805b',5)+text((x(e.need)+x(e.gap))/2,305,'여유 '+f(e.slack)+'s',15,'#0f805b','middle');else s+=line(x(e.gap),279,x(e.need),279,'#bc3948',5)+text((x(e.gap)+x(e.need))/2,305,'부족 '+f(-e.slack)+'s',15,'#bc3948','middle');
 s+=line(x(Math.min(clock,max)),76,x(Math.min(clock,max)),253,'#10243a',2);
 s+=rect(20,326,1080,76,e.valid?'#e2f4ec':'#ffe9ec',8)+text(37,354,'관찰시각 '+f(clock)+'s : '+phase+' · X 목표까지 '+f(Math.max(0,e.dx-st.s),3)+'mm · X속도 '+f(st.v,1)+'mm/s',16);
 s+=text(37,384,clock<e.gap?'다음 점은 아직 도착 전입니다.':clock<e.need?'다음 점 도착 마감은 지났지만 준비 예산이 아직 끝나지 않았습니다.':e.valid?'다음 점 도착 전에 준비 예산을 확보합니다.':'준비 예산 종료 때 목표점은 Y '+f(Math.max(0,e.need-e.gap)*r.p.vy,3)+'mm 더 이동합니다.',14,color);
 return s;
}
function schedule(c,r,mode,glass){
 const m=r.modes[mode],g=m.groups[glass],t=m.prepositions[glass],next=m.groups[t.toGlass-1],heads=ns=>ns.map(n=>'H'+String(n.head).padStart(2,'0')).join(' → '),color=t.valid?'#0f805b':'#bc3948';
 let s=rect(0,0,1120,285,'#f7fafc',10)+text(22,30,'현재 기판의 촬영을 마친 뒤, 다음 기판의 첫 선정점으로 X를 미리 이동합니다',18);
 const boxes=[{x:20,w:245,fill:'#eaf3ff',title:'이번 기판 '+(glass+1)+'매',main:heads(g.nodes),note:'기판 내 촬영은 30초·등속 조건'},{x:295,w:240,fill:'#def4f1',title:'다음 기판 준비',main:'H'+String(t.from).padStart(2,'0')+' → H'+String(t.to).padStart(2,'0')+'  /  '+f(t.need)+'초',note:'X 이동 + 정착'+f(r.p.settleMs,0)+'ms + 선도착'+f(r.p.guardMs,0)+'ms'},{x:565,w:240,fill:t.valid?'#e2f4ec':'#ffe9ec',title:t.valid?'XReady · 대기':'선배치 시간 부족',main:t.valid?'남는 시간 '+f(t.slack)+'초':'부족 '+f(-t.slack)+'초',note:'목표점 X '+f(t.toX,2)+'mm에서 정지'},{x:835,w:265,fill:'#eaf3ff',title:'다음 기판 '+t.toGlass+'매'+(t.wrap?' (순환)':''),main:heads(next.nodes),note:'첫 촬영 위치가 이미 준비된 상태'}];
 for(const b of boxes)s+=rect(b.x,61,b.w,107,b.fill,8)+text(b.x+13,86,b.title,14,'#5d6e80')+text(b.x+13,121,b.main,17,b.x===565?color:'#10243a')+text(b.x+13,149,b.note,11,'#5d6e80');
 for(const x of [280,550,820])s+=text(x,120,'→',23,'#5d6e80','middle');
 s+=rect(20,189,515,69,'#eaf3ff',8)+text(34,212,'기판 내 촬영 마감',14,'#1269d3')+text(34,241,'ΔY '+f(g.edges[0].dy,1)+'mm ÷ '+f(r.p.vy,1)+'mm/s = '+f(g.edges[0].constantSpeedGap)+'초 · X 준비 '+f(g.edges[0].need)+'초',16);
 s+=rect(565,189,535,69,'#def4f1',8)+text(579,212,'기판 사이 준비 마감',14,color)+text(579,241,'사용 가능 '+f(t.window,0)+'초 · 선배치 '+f(t.need)+'초',16);
 s+=text(20,278,'서로 다른 두 시간창입니다 · 상자 폭은 시간에 비례하지 않습니다 · 180초는 ReviewDone·이동 허가 후 사용 가능한 대기창의 하한',11,'#5d6e80');return s;
}
return {text,line,rect,timeline,machine,plotMax,transition,fieldView,cellPoint,schedule};
});
