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
 s+=text(17,183,'이번 리뷰 필요창',14)+rect(x(g.reviewStart),161,x(Math.min(g.reviewEnd,r.processTime))-x(g.reviewStart),28,'#00a1ab');
 if(g.reviewEnd>r.processTime)s+=rect(x(Math.max(g.reviewStart,r.processTime)),161,x(g.reviewEnd)-x(Math.max(g.reviewStart,r.processTime)),28,'#9cafc4');
 for(const n of g.nodes)s+=line(x(n.cross),155,x(n.cross),195,n.inCruise?'#10243a':'#bc3948',2,n.inCruise?'':'4 3')+text(x(n.cross),213,'H'+String(n.head).padStart(2,'0'),11,n.inCruise?'#10243a':'#bc3948','middle');
 s+=line(x(r.processTime),43,x(r.processTime),226,'#d98c22',2,'4 4')+text(x(r.processTime),246,'Stroke 종료 '+f(r.processTime)+'s',13,'#a66807','end');
 s+=text(17,275,'노란색=Y 가감속 · 회색=입력 Stroke 밖(미실행) · 점선/빨간 Head=등속 촬영 불가',11,'#5d6e80');
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
return {text,line,rect,timeline,machine,plotMax};
});
