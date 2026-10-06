'use strict';
const $=id=>document.getElementById(id),F=(n,k=3)=>Number.isFinite(n)?n.toFixed(k):'—';
let mode=2,glass=0,result=null,playing=false,raf=0,startWall=0,startPos=0;
const labels=[['exposureUs','노출시간 (µs)',2,10000000,.1],['blurPx','허용 이동 blur (pixel)',.01,10000,.1],['vx','X 이동속도 (mm/s)',.01,10000,1],['vy','Y 등속속도 (mm/s)',.01,10000,1],['ax','X 가속도 (mm/s²)',.01,1000000,100],['dx','X 감속도 (mm/s²)',.01,1000000,100],['ay','Y 가속도 (mm/s²)',.01,1000000,100],['dy','Y 감속도 (mm/s²)',.01,1000000,100]];
const inputMarkup=labels.map(([k,l,min,max,step])=>`<div class="field"><label for="${k}">${l}</label><input type="number" id="${k}" value="${FIXED.defaults[k]}" min="${min}" max="${max}" step="${step}" inputmode="decimal"></div>`).join('');$('inputs').innerHTML=inputMarkup;
function read(){return Object.fromEntries(labels.map(([k])=>[k,Number($(k).value)]));}
function stext(x,y,t,size=15,fill='#10243a',anchor='start'){return `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-family="Noto Sans CJK KR,Malgun Gothic,Arial,sans-serif">${t}</text>`;}
function line(x1,y1,x2,y2,color='#c6d4e1',width=2,dash=''){return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${dash?`stroke-dasharray="${dash}"`:''}></line>`;}
function rect(x,y,w,h,fill,rad=5){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rad}" fill="${fill}"></rect>`;}
function stop(){playing=false;cancelAnimationFrame(raf);$('play').textContent='재생';}
function update(){
 stop();result=ReviewCalc.calculate(FIXED,read());$('time').value=0;
 if(result.inputErrors.length){$('status').innerHTML=`<div class="status fail">입력값을 확인해 주세요. 모든 입력은 0보다 큰 숫자여야 합니다.</div>`;$('badge').className='pill bad';$('badge').textContent='입력 오류';$('kpis').innerHTML='';$('play').disabled=true;$('prev').disabled=true;$('next').disabled=true;for(const id of ['board','blur','timing','compare','pointRows','animText','timingText','blurText','pointRule','overlap','machine','overlapText','machineText'])$(id).innerHTML='';return;}
 glass=Math.min(glass,result.modes[mode].groups.length-1);render();
}
function render(){
 const r=result,m=r.modes[mode],g=m.groups[glass];$('mode2').classList.toggle('active',mode===2);$('mode4').classList.toggle('active',mode===4);
 $('glassNo').textContent=`${glass+1} / ${m.plannedGlasses} 기판`;$('prev').disabled=glass===0;$('next').disabled=glass===m.groups.length-1;
 $('badge').className='pill '+(m.feasible?'ok':'bad');$('badge').textContent=m.feasible?'계산상 가능':'현재 조건 불가';
 $('kpis').innerHTML=[['기구 중첩(기판 통과창)',`${F(r.physicalOverlap,3)} s`,`${F(Math.max(0,FIXED.glass.height-FIXED.distanceMm),1)} mm / Y${r.p.vy}`],['이번 기판 리뷰 잔여',`${F(g.reviewTail,3)} s`,'스캐너 주행창 종료 후 마지막 노출까지'],['예상 이동 blur',`${F(r.blurPx,2)} px`,`${F(r.blurUm,3)} µm / 허용 ${F(r.p.blurPx,2)} px`],['8개 헤드 순환',m.feasible?`${m.plannedGlasses} 기판`:'조건 수정 필요',`계획 ${m.plannedGlasses*2.5}분 / 150초·기판`]].map(([a,b,c])=>`<div class="kpi"><span>${a}</span><b>${b}</b><span>${c}</span></div>`).join('');
 const allErrors=[...new Set(m.groups.flatMap(g=>g.errors))];
 $('status').innerHTML=`<div class="status ${m.feasible?'':'fail'}"><b>${m.feasible?'Blur · X 선도착 · Y 등속 · Tact 조건 충족':'현재 조건 불가'}</b><p>${m.feasible?'가공주행 종료 시 리뷰가 남으면, 마지막 촬영까지 Y 등속 이동을 계속합니다.':allErrors.join(' / ')}</p><p class="small">정방향 ${F(r.forward.total,3)}초 + 역방향 ${F(r.profile.total,3)}초 + 기타 60초 + 영상여유 1초 = ${F(r.tactTime,3)}초 / 목표150초 · 가공주행 ${F(r.processTime,3)}초 / 목표30초</p></div>`;
 $('pointRows').innerHTML=g.nodes.map((n,i)=>`<tr><td>${i+1}</td><td><b>H${String(n.head).padStart(2,'0')}</b></td><td>Cell ${n.cell}</td><td>${F(n.reviewX,3)}</td><td>${F(n.targetQ,3)}</td><td>${F(n.cross,4)}</td><td>${n.duringMofProcess?'가공주행 중':'가공주행 후'}</td></tr>`).join('');
 $('pointRule').textContent=`${g.unique?'서로 다른 Cell 확인 완료':'동일 Cell 중복'} · 8개 전체도 다른 Cell입니다. 모든 노출은 측정할 해당 점의 출사 이후입니다.`;
 $('compare').innerHTML=[2,4].map(cap=>{const m=r.modes[cap];return `<div class="option"><div class="topbar"><h3>${cap}개 스캐너 / 기판</h3><span class="pill ${m.feasible?'ok':'bad'}">${m.feasible?'계산상 가능':'현재 불가'}</span></div><strong>${m.plannedGlasses} 기판 · ${m.plannedGlasses*2.5}분</strong><p>${m.groups.map((g,i)=>`${i+1}매 ${g.nodes.map(n=>'H'+String(n.head).padStart(2,'0')).join('→')} : 주행창 이후 리뷰 ${F(g.reviewTail,3)}초`).join('<br>')}</p><div class="small">최소 X 준비 여유 ${F(m.minSlack,3)}초${m.feasible?'':' · 장수는 계획값, 유효 완료는 산출 불가'}</div></div>`;}).join('');
 renderOverlap(g);
 renderBlur(r);renderTiming(g);$('play').disabled=!g.feasible;renderBoard();
}
function renderBlur(r){
 const b=r.blurPx,scale=16,shift=Math.min(130,b*scale),cy=114;let svg=stext(26,30,'노출 중에 Y가 이동한 길이 = 이동 blur',17);
 svg+=stext(125,65,'정지한 점',14,'#5d6e80','middle')+stext(395,65,`${F(b,2)} px 이동한 점`,14,'#5d6e80','middle');
 for(let x=58;x<=570;x+=scale)svg+=line(x,80,x,153,'#e0e9f1',1);svg+=line(55,98,575,98,'#e0e9f1',1)+line(55,114,575,114,'#e0e9f1',1)+line(55,130,575,130,'#e0e9f1',1)+line(55,146,575,146,'#e0e9f1',1);
 svg+=`<circle cx="125" cy="114" r="14" fill="#1269d3"></circle>`+`<ellipse cx="${355+shift/2}" cy="114" rx="${14+shift/2}" ry="14" fill="#1269d3" opacity=".75"></ellipse>`;
 svg+=line(355,165,355+Math.max(shift,2),165,'#bc3948',3)+stext(395,195,'1 px = 0.125 µm · 모양은 이해용 도식',12,'#5d6e80','middle');$('blur').innerHTML=svg;
 $('blurText').innerHTML=`<b>현재 ${F(b,2)} px · ${b<=r.p.blurPx+1e-8?'허용 이내':'허용 초과'}</b><br>현재 Y속도에서 노출 ≤ ${F(r.expMaxUs,3)} µs<br>현재 노출에서 Y속도 ≤ ${F(r.vyMax,3)} mm/s${r.expMaxUs<FIXED.minExposureUs?'<br><span class="error">필요 노출이 카메라 최소 2 µs보다 짧습니다. Y속도를 낮춰야 합니다.</span>':''}`;
}
function renderTiming(g){
 const edge=g.edges.reduce((a,b)=>!a||b.slack<a.slack?b:a,null);if(!edge)return;
 const max=Math.max(edge.gap,edge.need)*1.06,x=t=>45+t/max*520,y=98,mov=edge.move,exp=result.p.exposureUs/1e6;
 let svg=stext(24,30,`가장 여유가 작은 이동: H${edge.from} → H${edge.to}`,17)+stext(24,59,`ΔX ${F(edge.dx,1)} mm / ΔY ${F(edge.dy,1)} mm`,12,'#5d6e80');
 svg+=rect(45,y,Math.max(2,x(exp)-45),34,'#1269d3')+rect(x(exp),y,x(exp+mov)-x(exp),34,'#009fa9')+rect(x(exp+mov),y,x(edge.needX)-x(exp+mov),34,'#efb757');
 svg+=line(45,155,x(edge.gap),155,'#1269d3',4)+line(x(edge.gap),78,x(edge.gap),174,'#bc3948',2,'5 4')+stext(x(edge.gap),196,`다음 점 도착 ${F(edge.gap,3)} s`,12,'#bc3948','end');
 svg+=stext(45,86,'촬영 → X 이동 → 정착·여유',12,'#5d6e80')+stext(45,219,`필요 ${F(edge.need,5)} s · 여유 ${F(edge.slack,5)} s`,14,edge.valid?'#0f805b':'#bc3948');$('timing').innerHTML=svg;
 $('timingText').innerHTML=`<b>Y가 다음 점을 가져오는 시간 ≥ X 준비시간</b><br>${F(edge.gap,3)} s ${edge.valid?'≥':'<'} ${F(edge.need,5)} s → ${edge.valid?'선도착 가능':'X 준비시간 부족'}<br><span class="small">필요시간 = max(X 이동 + 정착 50ms + 여유 20ms + 노출·Trigger 여유, 카메라 재취득 주기 ${F(result.period*1000,3)}ms)</span>`;
}
function renderOverlap(g){
 const r=result,max=r.profile.total,x=t=>190+t/max*880;
 let s=rect(0,0,1120,320,'#f7fafc',10);
 for(let t=0;t<=max;t+=5)s+=line(x(t),43,x(t),251,'#e0e9f1',1)+stext(x(t),29,F(t,0)+'s',12,'#5d6e80','middle');
 const a=Math.max(r.processStart,r.reviewEnter),b=Math.min(r.processEnd,r.reviewExit);
 if(b>a)s+=rect(x(a),47,Math.max(3,x(b)-x(a)),93,'#ffe9b0',0);
 const bars=[['MOF 가공주행',r.processStart,r.processEnd,65,'#1269d3'],['Review 기판 통과',r.reviewEnter,r.reviewExit,108,'#00a1ab'],['레시피 유효 Shot',r.firstTime,r.lastTime,154,'#9cafc4'],['이번 리뷰 작업',g.reviewStart,g.reviewEnd,198,'#00a1ab']];
 for(const [name,a,b,y,color] of bars)s+=stext(17,y+19,name,14,'#10243a')+rect(x(a),y,Math.max(1,x(b)-x(a)),25,color,4);
 s+=line(x(r.processEnd),54,x(r.processEnd),268,'#d98c22',2,'4 4');
 for(const n of g.nodes)s+=line(x(n.cross),193,x(n.cross),229,'#10243a',2)+stext(x(n.cross),245,'H'+String(n.head).padStart(2,'0'),11,'#10243a','middle');
 if(g.reviewTail>0)s+=line(x(r.processEnd),266,x(g.reviewEnd),266,'#d98c22',4)+stext((x(r.processEnd)+x(g.reviewEnd))/2,286,'리뷰 잔여 '+F(g.reviewTail,3)+'s',13,'#a66807','middle');
 else s+=stext(x(g.reviewEnd),286,'리뷰가 가공주행 종료 전에 완료',13,'#0f805b','end');
 s+=stext(17,309,'유효 Shot 범위와 기판 통과창을 분리 계산 · 세로선은 각 Head의 실제 노출 위치',11,'#5d6e80');
 s+='<line id="timelineCursor" x1="190" y1="42" x2="190" y2="255" stroke="#bc3948" stroke-width="2"></line>';$('overlap').innerHTML=s;
 $('overlapText').innerHTML=`<b>${g.reviewFinishesByProcessEnd?'이번 리뷰는 가공주행 종료 전에 촬영을 마칩니다.':`가공주행 종료 후에도 리뷰 촬영 ${F(g.reviewTail,3)}초가 남습니다.`}</b><br>이번 리뷰작업과 가공주행의 겹침 ${F(g.overlap,3)}초 · 주행 중 촬영 ${g.shotsMeasuredDuringMof}/${g.nodes.length}점<br><span class="small">현재 test0929의 명목 마지막 Shot은 ${F(r.lastTime,3)}초, 첫 리뷰는 ${F(g.reviewStart,3)}초입니다. 이 레시피의 실제 Shot창과 리뷰작업 중첩은 ${F(g.shotOverlap,3)}초이며, 마지막 Shot 이후 리뷰 잔여는 ${F(g.shotTail,3)}초입니다.</span>`;
}
function renderCursor(rev){const el=$('timelineCursor');if(el){const x=190+Math.max(0,Math.min(result.profile.total,rev))/result.profile.total*880;el.setAttribute('x1',x);el.setAttribute('x2',x);}}
function renderMachine(a,t){
 const scale=.16,x=z=>370+z*scale,D=FIXED.distanceMm,L=FIXED.glass.height,leading=D+FIXED.glass.akY-a.q,trailing=leading-L;
 let s=rect(0,0,1120,255,'#f7fafc',10)+stext(20,27,'정방향(+StageY) ← 가공대기 / 역방향(-StageY) → Scanner → Review',15);
 s+=rect(x(0)-41,51,82,42,'#1269d3',7)+stext(x(0),78,'Scanner',14,'white','middle');
 s+=rect(x(D)-46,51,92,42,'#00a1ab',7)+stext(x(D),78,'Review',14,'white','middle');
 s+=line(x(0),111,x(D),111,'#d98c22',2)+stext((x(0)+x(D))/2,104,'고정거리 1467 mm',13,'#a66807','middle');
 s+=line(22,187,1080,187,'#bdcbd9',3)+rect(x(trailing),145,L*scale,39,'#d7eaff',4)+stext((x(trailing)+x(leading))/2,171,'기판1500 mm',14,'#1269d3','middle');
 s+=line(x(0),95,x(0),205,'#1269d3',2,'4 4')+line(x(D),95,x(D),205,'#00a1ab',2,'4 4');
 const arrowX=(x(trailing)+x(leading))/2;s+=stext(arrowX,216,a.rev<0?'← 정방향 이동':'역방향 MOF 이동 →',14,a.rev<0?'#5d6e80':'#1269d3','middle');
 s+=stext(20,243,`${a.processActive?'MOF 주행창 ON':'MOF 주행창 OFF'} · ${a.reviewActive?'리뷰작업 ON':'리뷰 대기/완료'} · 전체 경과 ${F(t,3)}s`,13,'#10243a');
 $('machine').innerHTML=s;$('machineText').textContent=`${a.travelPhase} / StageY ${F(a.q,3)}mm / 속도 ${F(a.velocity,1)}mm/s. 정방향에서 노출하지 않고 역방향 등속에서만 측정합니다.`;
}
function timeWindow(){return {a:0,b:result.forward.total+result.profile.total};}
function animState(t){
 const g=result.modes[mode].groups[glass],ns=g.nodes,rev=t-result.reverseStart;let x=ns[0].reviewX,phase='X 선도착 · 대기';
 for(let i=1;i<ns.length;i++){const prev=ns[i-1],n=ns[i],start=prev.expEnd+FIXED.jitterS,m=ReviewCalc.motion(Math.abs(n.reviewX-prev.reviewX),result.p.vx,result.p.ax,result.p.dx);
  if(rev<start)break;if(rev<start+m.total){const st=m.at(rev-start);x=prev.reviewX+Math.sign(n.reviewX-prev.reviewX)*st.s;phase='X 이동';break;}
  x=n.reviewX;phase=rev<start+m.total+FIXED.settleS?'X 정착':'X 선도착 · 대기';
 }
 let q,travelPhase,velocity;
 if(rev<0){const st=result.forward.at(t);q=FIXED.bounds.end+st.s;velocity=st.v;travelPhase='정방향 투입 · 가공대기 이동';}
 else{const st=result.profile.at(rev);q=FIXED.bounds.start-st.s;velocity=-st.v;travelPhase='역방향 MOF · '+st.phase;}
 const y=FIXED.glass.akY-q,done=g.feasible?ns.filter(n=>rev>=n.expEnd).length:0,processActive=rev>=result.processStart&&rev<=result.processEnd,reviewActive=rev>=g.reviewStart&&rev<=g.reviewEnd;
 return {x,y,q,phase,done,rev,velocity,travelPhase,processActive,reviewActive};
}
function renderBoard(){
 if(!result||result.inputErrors.length)return;const g=result.modes[mode].groups[glass],w=timeWindow(),t=w.a+(w.b-w.a)*Number($('time').value)/1000,a=animState(t),xx=x=>40+x,yy=y=>85+y;
 let s=rect(30,67,945,900,'#eef3f7',10)+stext(40,28,'기판 내 가공 영역 확대 · X →',17)+stext(40,52,'Cell 번호는 좌→우, 위→아래로 증가합니다.',13,'#5d6e80');
 for(let row=0;row<5;row++)for(let col=0;col<9;col++){const id=row*9+col+1,x=FIXED.glass.akX+col*100,y=FIXED.glass.akY+row*200,sel=g.nodes.some(n=>n.cell===id);s+=`<rect x="${xx(x)}" y="${yy(y)}" width="77.76" height="46.08" rx="4" fill="${sel?'#d7eaff':'white'}" stroke="${sel?'#1269d3':'#cfdae4'}" stroke-width="${sel?2:1}"></rect>`+stext(xx(x)+38,yy(y)+29,'C'+id,13,sel?'#1269d3':'#708395','middle');}
 const path=g.nodes.map((n,i)=>(i?'L':'M')+xx(n.x)+' '+yy(n.y)).join(' ');s+=`<path d="${path}" fill="none" stroke="#1269d3" stroke-width="2" stroke-dasharray="7 6"></path>`;
 for(const n of FIXED.points){const active=g.nodes.some(q=>q.head===n.head),done=active&&g.feasible&&a.rev>=n.expEnd,fill=active?(done?'#0f805b':'#1269d3'):'#bdcbd9';s+=`<circle cx="${xx(n.x)}" cy="${yy(n.y)}" r="7" fill="${fill}"></circle>`+stext(xx(n.x)+9,yy(n.y)-10,'H'+String(n.head).padStart(2,'0'),14,fill);}
 const camY=Math.max(72,Math.min(967,yy(a.y))),camX=xx(FIXED.glass.akX+a.x);s+=line(35,camY,970,camY,'#00a1ab',2,'5 5')+`<circle cx="${camX}" cy="${camY}" r="16" fill="white" stroke="#00a1ab" stroke-width="3"></circle>`+line(camX-23,camY,camX+23,camY,'#00a1ab',2)+line(camX,camY-23,camX,camY+23,'#00a1ab',2);
 s+=stext(45,996,'기판 전체 925 × 1500 mm · Cell 77.76 × 46.08 mm · Pitch X100 / Y200 mm',13,'#5d6e80');$('board').innerHTML=s;
 $('timeLabel').textContent=F(t,2)+' s';$('animText').textContent=`${a.travelPhase} · ${a.phase} · 모의 촬영 ${a.done}/${g.nodes.length}점`;renderMachine(a,t);renderCursor(a.rev);
}
function animate(now){if(!playing)return;const pos=Math.min(1000,startPos+(now-startWall)/8000*1000);$('time').value=pos;renderBoard();if(pos>=1000){stop();return;}raf=requestAnimationFrame(animate);}
labels.forEach(([k])=>$(k).addEventListener('input',update));
for(const cap of [2,4])$('mode'+cap).onclick=()=>{mode=cap;glass=0;update();};
$('reset').onclick=()=>{labels.forEach(([k])=>$(k).value=FIXED.defaults[k]);glass=0;update();};
$('prev').onclick=()=>{stop();glass--; $('time').value=0;render();};$('next').onclick=()=>{stop();glass++;$('time').value=0;render();};
$('time').oninput=()=>{stop();renderBoard();};$('play').onclick=()=>{if(playing){stop();return;}if(Number($('time').value)>=1000)$('time').value=0;playing=true;startPos=Number($('time').value);startWall=performance.now();$('play').textContent='일시정지';raf=requestAnimationFrame(animate);};
$('fixed').innerHTML=`<div class="scroller"><table><tr><th>카메라·렌즈</th><td>Basler a2a2600-20gcBAS: 2.5µm pixel, 2600×2128 기본영상, Global Shutter·Color, 18.5fps, 최소노출2µs.<br>Mitutoyo378-810-3 SL20x: NA0.28, WD30.5mm, 분해능약1µm @550nm. 200mm 튜브렌즈·1x Relay 포함 총배율20x 가정 → 0.125µm/px, FOV0.325×0.266mm.</td></tr><tr><th>기구·이동 기준</th><td>사용자 설명의 Scanner→Review 간격1467mm를 공통 기준으로 적용합니다. 기판Y1500mm.<br>투입/복귀 StageY ${F(FIXED.bounds.end,1)} → 정방향 가공대기 ${F(FIXED.bounds.start,1)} → 역방향 복귀. 가공 전 선행500mm, 리뷰 통과 후 여유100mm. Stage Stroke3960mm.<br>정방향에도 입력 Y속도·가감속을 적용하는 설계 가정입니다. 기타60초는 계산한 왕복Y이동을 제외한 시간으로 가정합니다.</td></tr><tr><th>서로 다른 Cell의 점</th><td>test0929 9×5, Cell77.76×46.08mm / Pitch100×200mm / 유효Shot·Mask·소유Head 검증 / BranchB07.<br>실제 유효Shot Y=${F(FIXED.shotSpanY.firstGlobalY,4)}~${F(FIXED.shotSpanY.lastGlobalY,4)}mm, 범위${F(FIXED.shotSpanY.span,1)}mm. 기판 전체1500mm의 통과창과 다릅니다. 8개Head 활성 가정.</td></tr><tr><th>고정 시간·조건</th><td>X정착50ms / Guard20ms / Trigger지연50µs / Jitter±5µs / Encoder16000cts/mm. 해당 점 출사 완료 여유1ms / 노출 중심 시각 선행 보정.<br>Review X Stroke1025mm / Park0 / 선행준비2초 / 영상처리 여유1초 / 계획Tact150초 / MOF 스캐너통과 목표30초.</td></tr></table></div><p class="notes">사다리꼴 명목 모델입니다. ProcessDone은 실제 가공 스크립트 완료 신호이며, 여기의 마지막Shot 통과시각은 그 신호를 대신하는 확정값이 아닙니다. 가공주행창, Shot범위, 리뷰작업범위를 따로 표시합니다. 실제Frame·Vision 결과가 모두 확인되어야 검사 완료입니다. Align·왜곡·Scanner/Laser 처리·Follow Error·밝기·SNR은 미계산입니다.</p>`;
$('sources').innerHTML=`사양 확인 2026-10-06 · <a href="https://docs.baslerweb.com/a2a2600-20gcbas" target="_blank" rel="noopener">Basler 카메라 사양</a> · <a href="https://docs.baslerweb.com/exposure-time" target="_blank" rel="noopener">최소 노출</a> · <a href="https://www.mitutoyo.com/webfoo/wp-content/uploads/E4191-378_010611.pdf" target="_blank" rel="noopener">Mitutoyo 카탈로그 p20·29</a> · 기하 소스 ${FIXED.sourceCommit.slice(0,12)}`;
window.getReviewState=()=>({result,mode,glass});update();
