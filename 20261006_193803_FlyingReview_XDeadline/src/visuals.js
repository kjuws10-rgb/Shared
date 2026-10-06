(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ReviewVisual=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';const f=(n,k=3)=>Number.isFinite(n)?n.toFixed(k):'—';
function text(x,y,t,size=14,fill='#10243a',anchor='start'){return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-family="Noto Sans CJK KR,Malgun Gothic,Arial,sans-serif">${t}</text>`;}
function line(x1,y1,x2,y2,color='#c6d4e1',width=2,dash=''){return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${dash?`stroke-dasharray="${dash}"`:''}></line>`;}
function rect(x,y,w,h,fill,rad=5){return `<rect x="${x}" y="${y}" width="${Math.max(0,w)}" height="${h}" rx="${rad}" fill="${fill}"></rect>`;}
function plotMax(c,r,g){return Math.max(c.processBudgetS,r.processTime,g.reviewEnd)*1.04;}
function timeline(c,r,g){
 const max=plotMax(c,r,g),x=t=>190+t/max*875;let s=rect(0,0,1120,285,'#f7fafc',10),step=Math.max(5,Math.ceil(max/7/5)*5);
 for(let t=0;t<=max;t+=step)s+=line(x(t),42,x(t),220,'#e0e9f1',1)+text(x(t),27,f(t,0)+'s',12,'#5d6e80','middle');
 if(r.processTime<max)s+=rect(x(r.processTime),42,x(max)-x(r.processTime),178,'#e8edf2',0);
 s+=text(17,79,'Y 가감속·등속',14)+rect(x(0),58,x(r.cruiseStart)-x(0),28,'#efb757')+rect(x(r.cruiseStart),58,x(r.cruiseEnd)-x(r.cruiseStart),28,'#1269d3')+rect(x(r.cruiseEnd),58,x(r.processTime)-x(r.cruiseEnd),28,'#efb757');
 s+=text(17,131,'역방향 가공 Stroke',14)+rect(x(0),109,x(r.processTime)-x(0),28,'#1269d3');
 s+=text(17,183,'리뷰 후보 도착창(Y)',14)+rect(x(g.reviewStart),161,x(Math.min(g.reviewEnd,r.processTime))-x(g.reviewStart),28,'#00a1ab');
 if(g.reviewEnd>r.processTime)s+=rect(x(Math.max(g.reviewStart,r.processTime)),161,x(g.reviewEnd)-x(Math.max(g.reviewStart,r.processTime)),28,'#9cafc4');
 for(const n of g.nodes){const route=g.edges.find(e=>e.to===n.head),ok=n.inCruise&&(!route||route.valid);s+=line(x(n.cross),155,x(n.cross),195,ok?'#10243a':'#bc3948',2,ok?'':'4 3')+text(x(n.cross),213,'H'+String(n.head).padStart(2,'0'),11,ok?'#10243a':'#bc3948','middle');}
 s+=line(x(r.processTime),43,x(r.processTime),226,'#d98c22',2,'4 4')+text(x(r.processTime),246,'Stroke 종료 '+f(r.processTime)+'s',13,'#a66807','end');
 s+=text(17,275,'노란색=Y 가감속 · 회색=입력 Stroke 밖(미실행) · 빨간 Head=Y 범위 또는 X·취득 간격 불충족',11,'#5d6e80');
 s+='<line id="timelineCursor" x1="190" y1="42" x2="190" y2="221" stroke="#bc3948" stroke-width="2"></line>';return s;
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
 let s=rect(0,0,1120,420,'#f7fafc',10)+text(22,30,'H'+String(e.from).padStart(2,'0')+' → H'+String(e.to).padStart(2,'0')+' : 전체30초보다, 이 두 촬영 사이 마감이 중요합니다',19);
 s+=text(22,58,'이전 노출 시작=0초 · ΔX '+f(e.dx,1)+'mm / ΔY '+f(e.dy,1)+'mm · 등속 Y'+f(r.p.vy,1)+'mm/s',13,'#5d6e80');
 s+=text(22,108,'다음 점 도착',14)+rect(x(0),88,x(e.gap)-x(0),29,'#1269d3')+text(x(e.gap)+8,108,f(e.gap)+'s',14,'#1269d3');
 s+=text(22,165,'X 준비 필요',14)+rect(x(lead),144,x(lead+move.t1)-x(lead),34,'#009fa9')+rect(x(lead+move.t1),144,x(lead+move.t1+move.t2)-x(lead+move.t1),34,'#44bbc3')+rect(x(lead+move.t1+move.t2),144,x(lead+move.total)-x(lead+move.t1+move.t2),34,'#008892')+rect(x(lead+move.total),144,x(e.needX)-x(lead+move.total),34,'#efb757');
 s+=text(x(move.total/2),166,'이동 '+f(e.move)+'s',14,'white','middle')+text(x(e.needX),201,'정착·여유 포함 '+f(e.needX)+'s',13,'#9a6305','end');
 s+=text(22,239,'카메라 재취득',14)+rect(x(0),220,x(e.needCamera)-x(0),25,'#9cafc4')+text(x(e.needCamera)+9,239,f(e.needCamera)+'s',13,'#5d6e80');
 s+=line(x(e.gap),77,x(e.gap),271,'#bc3948',2,'5 4');
 if(e.valid)s+=line(x(e.need),279,x(e.gap),279,'#0f805b',5)+text((x(e.need)+x(e.gap))/2,305,'여유 '+f(e.slack)+'s',15,'#0f805b','middle');else s+=line(x(e.gap),279,x(e.need),279,'#bc3948',5)+text((x(e.gap)+x(e.need))/2,305,'부족 '+f(-e.slack)+'s',15,'#bc3948','middle');
 s+=line(x(Math.min(clock,max)),76,x(Math.min(clock,max)),253,'#10243a',2);
 s+=rect(20,326,1080,76,e.valid?'#e2f4ec':'#ffe9ec',8)+text(37,354,'관찰시각 '+f(clock)+'s : '+phase+' · X 목표까지 '+f(Math.max(0,e.dx-st.s),3)+'mm · X속도 '+f(st.v,1)+'mm/s',16);
 s+=text(37,384,clock<e.gap?'다음 점은 아직 도착 전입니다.':clock<e.need?'다음 점 도착 마감은 지났지만 준비 예산이 아직 끝나지 않았습니다.':e.valid?'다음 점 도착 전에 준비 예산을 확보합니다.':'준비 예산 종료 때 목표점은 Y '+f(Math.max(0,e.need-e.gap)*r.p.vy,3)+'mm 더 이동합니다.',14,color);
 return s;
}
function selectionComparison(d){const max=Math.max(d.e.need,d.e.gap,d.ae.gap,d.ae.need)*1.12,x=t=>195+t/max*865;
 let s=rect(0,0,1120,225,'#f7fafc',10)+text(22,28,'측정점 재선정 비교 · X 이동은 같고, 다음 점 도착 마감만 늦춥니다',17);
 for(const [label,e,y] of [['현재 선정점',d.e,65],['재선정 예시',d.ae,145]]){const col=e.valid?'#0f805b':'#bc3948';s+=text(22,y+21,label,14)+rect(x(0),y,x(e.need)-x(0),28,'#009fa9')+line(x(e.gap),y-8,x(e.gap),y+39,col,3)+text(x(e.need)-5,y+20,'준비 '+f(e.need)+'s',13,'white','end')+text(x(e.gap),y+57,'다음 점 '+f(e.gap)+'s · '+(e.valid?'여유 '+f(e.slack*1000,1)+'ms':'부족 '+f(-e.slack*1000,1)+'ms'),13,col,'end');}
 return s;
}
return {text,line,rect,timeline,machine,plotMax,transition,selectionComparison};
});
