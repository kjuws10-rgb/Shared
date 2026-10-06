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
 if(result.inputErrors.length){$('status').innerHTML=`<div class="status fail">입력값을 확인해 주세요. 모든 입력은 0보다 큰 숫자여야 합니다.</div>`;$('badge').className='pill bad';$('badge').textContent='입력 오류';$('kpis').innerHTML='';$('play').disabled=true;$('prev').disabled=true;$('next').disabled=true;for(const id of ['board','blur','timing','compare','pointRows','animText','timingText','blurText','pointRule'])$(id).innerHTML='';return;}
 glass=Math.min(glass,result.modes[mode].groups.length-1);render();
}
function render(){
 const r=result,m=r.modes[mode],g=m.groups[glass];$('mode2').classList.toggle('active',mode===2);$('mode4').classList.toggle('active',mode===4);
 $('glassNo').textContent=`${glass+1} / ${m.plannedGlasses} 기판`;$('prev').disabled=glass===0;$('next').disabled=glass===m.groups.length-1;
 $('badge').className='pill '+(m.feasible?'ok':'bad');$('badge').textContent=m.feasible?'계산상 가능':'현재 조건 불가';
 $('kpis').innerHTML=[['예상 이동 blur',`${F(r.blurPx,2)} px`,`${F(r.blurUm,3)} µm / 허용 ${F(r.p.blurPx,2)} px`],['X 선도착 최소 여유',`${F(m.minSlack,3)} s`,'전체 기판의 가장 짧은 여유'],['8개 헤드 확인',m.feasible?`${m.plannedGlasses} 기판`:'조건 수정 필요',`계획 ${m.plannedGlasses} 기판 × ${mode}점`],['계획 사이클',m.feasible?`${m.cycleS/60} min`:'—','150초/기판 기준']].map(([a,b,c])=>`<div class="kpi"><span>${a}</span><b>${b}</b><span>${c}</span></div>`).join('');
 const allErrors=[...new Set(m.groups.flatMap(g=>g.errors))];
 $('status').innerHTML=`<div class="status ${m.feasible?'':'fail'}"><b>${m.feasible?'Blur · X 선도착 · 카메라 주기 · Y 등속 조건 충족':'조건을 바꾸면 자동으로 다시 계산합니다.'}</b><p>${m.feasible?`실제 검사 가능 여부는 밝기·정착오차·Trigger 보정과 Frame 수신을 장비에서 확인합니다.`:allErrors.join(' / ')}</p><p class="small">기하학적 가공 ${F(r.processTime,3)}초 / 목표 30초 · Y 이동+고정 기타시간 ${F(r.tactTime,3)}초 / 목표 150초</p></div>`;
 $('pointRows').innerHTML=g.nodes.map((n,i)=>`<tr><td>${i+1}</td><td><b>H${String(n.head).padStart(2,'0')}</b></td><td>Cell ${n.cell}</td><td>${F(n.reviewX,3)}</td><td>${F(n.targetQ,3)}</td><td>${F(n.cross,4)}</td></tr>`).join('');
 $('pointRule').textContent=`${g.unique?'서로 다른 Cell 확인 완료':'동일 Cell 중복'} · 고정점 8개 전체도 서로 다른 Cell입니다. 좌표는 기존 test0929 가공점 기준, Stage 시작 이후 시각입니다.`;
 $('compare').innerHTML=[2,4].map(cap=>{const m=r.modes[cap];return `<div class="option"><div class="topbar"><h3>${cap}개 스캐너 / 기판</h3><span class="pill ${m.feasible?'ok':'bad'}">${m.feasible?'계산상 가능':'현재 불가'}</span></div><strong>${m.plannedGlasses} 기판 · ${m.plannedGlasses*2.5}분</strong><p>${m.groups.map((g,i)=>`${i+1}매: ${g.nodes.map(n=>'H'+String(n.head).padStart(2,'0')).join(' → ')}`).join('<br>')}</p><div class="small">최소 시간 여유 ${F(m.minSlack,3)}초${m.feasible?'':' · 위 장수는 계획값이며 유효 완료 장수는 산출 불가'}</div></div>`;}).join('');
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
function timeWindow(){const g=result.modes[mode].groups[glass];return {a:g.nodes[0].cross-.8,b:g.nodes[g.nodes.length-1].cross+.4};}
function animState(t){
 const g=result.modes[mode].groups[glass],ns=g.nodes;let x=ns[0].reviewX,phase='X 선도착 · 대기';
 for(let i=1;i<ns.length;i++){const prev=ns[i-1],n=ns[i],start=prev.expEnd+FIXED.jitterS,m=ReviewCalc.motion(Math.abs(n.reviewX-prev.reviewX),result.p.vx,result.p.ax,result.p.dx);
  if(t<start)break;if(t<start+m.total){const st=m.at(t-start);x=prev.reviewX+Math.sign(n.reviewX-prev.reviewX)*st.s;phase='X 이동';break;}
  x=n.reviewX;phase=t<start+m.total+FIXED.settleS?'X 정착':'X 선도착 · 대기';
 }
 const st=result.profile.at(t),q=FIXED.bounds.start-st.s,y=FIXED.glass.akY-q,done=g.feasible?ns.filter(n=>t>=n.expEnd).length:0;return {x,y,q,phase,done};
}
function renderBoard(){
 if(!result||result.inputErrors.length)return;const g=result.modes[mode].groups[glass],w=timeWindow(),t=w.a+(w.b-w.a)*Number($('time').value)/1000,a=animState(t),xx=x=>40+x,yy=y=>85+y;
 let s=rect(30,67,945,900,'#eef3f7',10)+stext(40,28,'기판 내 가공 영역 확대 · X →',17)+stext(40,52,'Cell 번호는 좌→우, 위→아래로 증가합니다.',13,'#5d6e80');
 for(let row=0;row<5;row++)for(let col=0;col<9;col++){const id=row*9+col+1,x=FIXED.glass.akX+col*100,y=FIXED.glass.akY+row*200,sel=g.nodes.some(n=>n.cell===id);s+=`<rect x="${xx(x)}" y="${yy(y)}" width="77.76" height="46.08" rx="4" fill="${sel?'#d7eaff':'white'}" stroke="${sel?'#1269d3':'#cfdae4'}" stroke-width="${sel?2:1}"></rect>`+stext(xx(x)+38,yy(y)+29,'C'+id,13,sel?'#1269d3':'#708395','middle');}
 const path=g.nodes.map((n,i)=>(i?'L':'M')+xx(n.x)+' '+yy(n.y)).join(' ');s+=`<path d="${path}" fill="none" stroke="#1269d3" stroke-width="2" stroke-dasharray="7 6"></path>`;
 for(const n of FIXED.points){const active=g.nodes.some(q=>q.head===n.head),done=active&&g.feasible&&t>=n.expEnd,fill=active?(done?'#0f805b':'#1269d3'):'#bdcbd9';s+=`<circle cx="${xx(n.x)}" cy="${yy(n.y)}" r="7" fill="${fill}"></circle>`+stext(xx(n.x)+9,yy(n.y)-10,'H'+String(n.head).padStart(2,'0'),14,fill);}
 const camY=Math.max(72,Math.min(967,yy(a.y))),camX=xx(FIXED.glass.akX+a.x);s+=line(35,camY,970,camY,'#00a1ab',2,'5 5')+`<circle cx="${camX}" cy="${camY}" r="16" fill="white" stroke="#00a1ab" stroke-width="3"></circle>`+line(camX-23,camY,camX+23,camY,'#00a1ab',2)+line(camX,camY-23,camX,camY+23,'#00a1ab',2);
 s+=stext(45,996,'기판 전체 925 × 1500 mm · Cell 77.76 × 46.08 mm · Pitch X100 / Y200 mm',13,'#5d6e80');$('board').innerHTML=s;
 $('timeLabel').textContent=F(t,2)+' s';$('animText').textContent=`${a.phase} · Stage Y ${F(a.q,3)} mm · 모의 촬영 ${a.done}/${g.nodes.length}점`;
}
function animate(now){if(!playing)return;const pos=Math.min(1000,startPos+(now-startWall)/8000*1000);$('time').value=pos;renderBoard();if(pos>=1000){stop();return;}raf=requestAnimationFrame(animate);}
labels.forEach(([k])=>$(k).addEventListener('input',update));
for(const cap of [2,4])$('mode'+cap).onclick=()=>{mode=cap;glass=0;update();};
$('reset').onclick=()=>{labels.forEach(([k])=>$(k).value=FIXED.defaults[k]);glass=0;update();};
$('prev').onclick=()=>{stop();glass--; $('time').value=0;render();};$('next').onclick=()=>{stop();glass++;$('time').value=0;render();};
$('time').oninput=()=>{stop();renderBoard();};$('play').onclick=()=>{if(playing){stop();return;}if(Number($('time').value)>=1000)$('time').value=0;playing=true;startPos=Number($('time').value);startWall=performance.now();$('play').textContent='일시정지';raf=requestAnimationFrame(animate);};
$('fixed').innerHTML=`<div class="scroller"><table><tr><th>카메라·광학</th><td>2600×2128 기본 영상 / 2.5 µm pixel / Color·Global Shutter / 18.5 fps / 최소 노출 2 µs<br>총배율 20x 가정: 0.125 µm/px, FOV 0.325×0.266 mm · 튜브렌즈 200 mm·1x Relay 기준</td></tr><tr><th>렌즈</th><td>378-810-3 SL20x · NA 0.28 / WD 30.5 mm / 분해능 약 1.0 µm(λ550nm)<br>픽셀 환산값은 측정 정확도가 아닙니다. Visible 조명 기준입니다.</td></tr><tr><th>기판·점 선정</th><td>test0929 / 925×1500 mm / 9×5 Cell / Cell 77.76×46.08 mm / Shot Pitch 2.7 mm / DOE 4×4<br>유효 Shot·Head 소유권·Mask를 기존 엔진으로 검증 / Branch B07 / 8개 Head 모두 활성 가정</td></tr><tr><th>운동·운전 기준</th><td>Stage 시작 ${F(FIXED.bounds.start,4)} → 끝 ${F(FIXED.bounds.end,4)} mm / Stroke 3960 mm<br>Review X Stroke 1025 mm, Park 0 mm, 선행준비 2초 / 정착 50ms / Guard 20ms<br>Trigger 지연 50µs·Jitter ±5µs / Encoder 16000 counts/mm / 노출 중심 시각으로 지연 보정</td></tr><tr><th>기존 설계 가정</th><td>Review–Scanner 홀수 1467 mm / 짝수 +380 mm(1847 mm): 기존 자료의 명목 배치값<br>기타시간 60초 + 영상처리 여유 1초 / 계획 Tact 150초 / 가공 첫~마지막 통과 목표 30초<br>사다리꼴 속도 모델입니다. 실제 S-Curve·정착·영상처리시간은 장비 검증이 필요합니다.</td></tr></table></div><p class="notes">설계 검토 범위: 명목 좌표·시간·이동 blur. Align/왜곡/실제 Follow Error, 밝기·SNR·검출 성공률, 실제 Scanner/Laser 처리시간은 계산에 포함하지 않습니다. 최종 검사 결과는 실제 Frame과 Vision 측정 결과로 판정합니다. 0선 방어에서는 자동 Offset 적용을 수행하지 않습니다.</p>`;
$('sources').innerHTML=`사양 확인 2026-10-06 · <a href="https://docs.baslerweb.com/a2a2600-20gcbas" target="_blank" rel="noopener">Basler 카메라 사양</a> · <a href="https://docs.baslerweb.com/exposure-time" target="_blank" rel="noopener">최소 노출</a> · <a href="https://www.mitutoyo.com/webfoo/wp-content/uploads/E4191-378_010611.pdf" target="_blank" rel="noopener">Mitutoyo 카탈로그 p20·29</a> · 기하 소스 ${FIXED.sourceCommit.slice(0,12)}`;
window.getReviewState=()=>({result,mode,glass});update();
