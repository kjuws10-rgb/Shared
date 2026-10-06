'use strict';
const $=id=>document.getElementById(id),F=(n,k=3)=>Number.isFinite(n)?n.toFixed(k):'—';
const stext=ReviewVisual.text,line=ReviewVisual.line,rect=ReviewVisual.rect;
const incoming=ReviewSync.fromQuery(FIXED,typeof location!=='undefined'?location.search:''),initial=incoming||ReviewSync.state(FIXED,FIXED.inquiryCase,4,0);
let mode=initial.mode,glass=initial.glass,result=null,playing=false,raf=0,startWall=0,startPos=0,diagnostic=null;
const link=ReviewSync.connection(()=>{});
const labels=[['strokeMm','역방향 가공 Stroke (mm)',.01,FIXED.stageStroke,.1],['exposureUs','노출시간 (µs)',2,10000000,.1],['blurPx','허용 이동 blur (pixel)',.01,10000,.1],['vx','X 이동속도 (mm/s)',.01,10000,1],['ax','X 가속도 (mm/s²)',.01,1000000,100],['dx','X 감속도 (mm/s²)',.01,1000000,100],['vy','역방향 Y 등속속도 (mm/s)',.01,10000,1],['ay','Y 가속도 (mm/s²)',.01,1000000,100],['dy','Y 감속도 (mm/s²)',.01,1000000,100]];
$('inputs').innerHTML=labels.map(([k,l,min,max,step])=>`<div class="field"><label for="${k}">${l}</label><input type="number" id="${k}" value="${initial.params[k]}" min="${min}" max="${max}" step="${step}" inputmode="decimal"></div>`).join('');
function read(){return Object.fromEntries(labels.map(([k])=>[k,Number($(k).value)]));}
function snapshot(){return ReviewSync.state(FIXED,read(),mode,glass);}
function sync(){const s=snapshot(),q=ReviewSync.query(s);$('guideLink').href='FlyingReview_Formula_Guide.html'+q;link.publish(s);}
function stop(){playing=false;cancelAnimationFrame(raf);$('play').textContent='재생';}
function update(){stop();result=ReviewCalc.calculate(FIXED,read());$('time').value=0;sync();
 if(result.inputErrors.length){$('status').innerHTML='<div class="status fail">모든 입력에 0보다 큰 숫자를 넣어주세요.</div>';$('badge').className='pill bad';$('badge').textContent='입력 오류';for(const id of ['play','prev','next','downloadGuide','diagTime','diagDeadline','diagReady'])$(id).disabled=true;$('guideLink').setAttribute('aria-disabled','true');for(const id of ['board','blur','timing','compare','pointRows','animText','timingText','blurText','pointRule','overlap','machine','overlapText','machineText','checks','diagnosis','diagnosisText','transitionRows','fieldView','pointPlan'])$(id).innerHTML='';return;}
 $('guideLink').removeAttribute('aria-disabled');$('downloadGuide').disabled=false;for(const id of ['diagTime','diagDeadline','diagReady'])$(id).disabled=false;glass=Math.min(glass,result.modes[mode].groups.length-1);render();}
function render(){
 const r=result,m=r.modes[mode],g=m.groups[glass];$('mode2').classList.toggle('active',mode===2);$('mode4').classList.toggle('active',mode===4);$('glassNo').textContent=`${glass+1} / ${m.plannedGlasses} 기판`;$('prev').disabled=glass===0;$('next').disabled=glass===m.groups.length-1;
 $('badge').className='pill '+(m.feasible?'ok':'bad');$('badge').textContent=m.feasible?'계산상 가능':'현재 조건 불가';
 diagnostic=ReviewExplain.analyze(FIXED,r,mode,glass,ReviewCalc);const e=diagnostic.e;
 $('status').innerHTML=`<div class="status ${m.feasible?'':'fail'}"><b>${diagnostic.headline}</b><p class="small">가속 ${F(r.profile.t1)}초 + 등속 ${F(r.profile.t2)}초 + 감속 ${F(r.profile.t3)}초 = ${F(r.processTime)}초. 정방향·반송·기타 시간은 포함하지 않습니다. 등속거리 ${F(r.profile.d2,1)}mm는 기판1500mm와 별개로 확인합니다.</p></div>`;
 $('checks').innerHTML=ReviewExplain.checkHtml(diagnostic);$('diagnosisText').innerHTML=ReviewExplain.detailHtml(FIXED,r,diagnostic);$('transitionRows').innerHTML=ReviewExplain.rowsHtml(r,mode);$('fieldView').innerHTML=ReviewVisual.fieldView(FIXED,r);$('pointPlan').innerHTML=ReviewExplain.planHtml(FIXED,r);observe(e.gap);
 $('pointRows').innerHTML=g.nodes.map((n,i)=>`<tr><td>${i+1}</td><td>H${String(n.head).padStart(2,'0')}</td><td>Cell ${n.cell}</td><td>${F(n.reviewX)}</td><td>${F(n.targetQ)}</td><td>${F(n.cross,4)}</td><td>${n.inCruise?(g.edges.find(e=>e.to===n.head&&!e.valid)?'Y 후보 범위 ✓ · X/취득 부족':'Y 후보 범위 ✓'):n.inStroke?'가감속 구간':'Stroke 밖'}</td></tr>`).join('');$('pointRule').textContent=`${g.unique?'서로 다른 Cell 확인 완료':'동일 Cell 중복'} · 필요 시각은 등속 유지 기준. 후보점 수는 X 준비와 촬영 완료를 보장하지 않습니다.`;
 $('compare').innerHTML=[2,4].map(cap=>{const m=r.modes[cap];return `<div class="option"><div class="topbar"><h3>${cap}개 스캐너 / 기판</h3><span class="pill ${m.feasible?'ok':'bad'}">${m.feasible?'계산상 가능':'현재 불가'}</span></div><strong>${m.plannedGlasses} 기판</strong><p>${m.groups.map((g,i)=>`${i+1}매 ${g.nodes.map(n=>'H'+String(n.head).padStart(2,'0')).join('→')} · Y 후보 ${g.yCandidateCount}/${cap}점`).join('<br>')}</p><div class="small">가공시간 합계 ${m.feasible?F(m.processingCycleS,3)+'초':'조건 불충족'} · 전체 장비 Tact가 아닙니다.<br>전체 순환에 필요한 최소 Stroke ${F(m.requiredStrokeMm,3)}mm</div></div>`;}).join('');
 $('overlap').innerHTML=ReviewVisual.timeline(FIXED,r,g);$('overlapText').innerHTML=`<b>기판 가공통과 ${F(r.scannerEnter)}~${F(r.scannerExit)}초 · 리뷰 첫/마지막 후보 ${F(g.reviewStart)}~${F(g.reviewEnd)}초</b><br>기판이 Scanner·Review를 동시에 통과하는 구간 ${F(r.physicalOverlap)}초 · 등속이면 (1500−1467)÷${F(r.p.vy,1)}<br>${g.reviewFits?`이번 ${g.nodes.length}점 모두 Y 등속 범위 · 최소 Stroke ${F(g.requiredStrokeMm,3)}mm ≤ 입력 ${F(r.p.strokeMm,1)}mm`:`요구 ${g.nodes.length}점 중 ${g.yCandidateCount}점만 등속 구간 · 최소 Stroke ${F(g.requiredStrokeMm,3)}mm`}<br><span class="small">중첩은 기판의 두 장치 통과에 대한 위치 관계입니다. 전체 통과창의Laser ON을 뜻하지 않습니다. 리뷰 후보 도착과 실제Frame·Vision 완료는 구분합니다.</span>`;
 renderBlur(r);renderTiming(g);$('play').disabled=!g.feasible;renderBoard();sync();
}
function observe(t){if(!diagnostic||!result||result.inputErrors.length)return;const e=diagnostic.e,max=Math.max(e.gap,e.need)*1.15;$('diagTime').value=Math.min(1000,t/max*1000);$('diagLabel').textContent=F(t)+' s';$('diagnosis').innerHTML=ReviewVisual.transition(FIXED,result,e,ReviewCalc,t);}
$('diagTime').oninput=()=>observe(Number($('diagTime').value)/1000*Math.max(diagnostic.e.gap,diagnostic.e.need)*1.15);$('diagDeadline').onclick=()=>observe(diagnostic.e.gap);$('diagReady').onclick=()=>observe(diagnostic.e.need);
function preset(p){labels.forEach(([k])=>$(k).value=p[k]);mode=4;glass=0;update();}

function timeWindow(){return {a:0,b:result.profile.total};}
function animState(t){const g=result.modes[mode].groups[glass],ns=g.nodes;let x=ns[0].reviewX,phase='X 선도착 · 대기';
 for(let i=1;i<ns.length;i++){const prev=ns[i-1],n=ns[i],start=prev.expEnd+FIXED.jitterS,m=ReviewCalc.motion(Math.abs(n.reviewX-prev.reviewX),result.p.vx,result.p.ax,result.p.dx);if(t<start)break;if(t<start+m.total){const st=m.at(t-start);x=prev.reviewX+Math.sign(n.reviewX-prev.reviewX)*st.s;phase='X 이동';break;}x=n.reviewX;phase=t<start+m.total+FIXED.settleS?'X 정착':'X 선도착 · 대기';}
 const st=result.profile.at(t),q=result.q0-st.s,y=FIXED.glass.akY-q,done=g.feasible?ns.filter(n=>n.inCruise&&t>=n.expEnd).length:0;return {x,y,q,phase,done,rev:t,velocity:-st.v,travelPhase:'역방향 '+st.phase};}
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
function renderBoard(){
 if(!result||result.inputErrors.length)return;const g=result.modes[mode].groups[glass],w=timeWindow(),t=w.a+(w.b-w.a)*Number($('time').value)/1000,a=animState(t),xx=x=>40+x,yy=y=>85+y;
 let s=rect(30,67,945,900,'#eef3f7',10)+stext(40,28,'기판 내 가공 영역 확대 · X →',17)+stext(40,52,'Cell 번호는 좌→우, 위→아래로 증가합니다.',13,'#5d6e80');
 for(let row=0;row<5;row++)for(let col=0;col<9;col++){const id=row*9+col+1,x=FIXED.glass.akX+col*100,y=FIXED.glass.akY+row*200,sel=g.nodes.some(n=>n.cell===id);s+=`<rect x="${xx(x)}" y="${yy(y)}" width="77.76" height="46.08" rx="4" fill="${sel?'#d7eaff':'white'}" stroke="${sel?'#1269d3':'#cfdae4'}" stroke-width="${sel?2:1}"></rect>`+stext(xx(x)+38,yy(y)+29,'C'+id,13,sel?'#1269d3':'#708395','middle');}
 const path=g.nodes.map((n,i)=>(i?'L':'M')+xx(n.x)+' '+yy(n.y)).join(' ');s+=`<path d="${path}" fill="none" stroke="#1269d3" stroke-width="2" stroke-dasharray="7 6"></path>`;
 for(const n of result.nodes){const active=g.nodes.some(q=>q.head===n.head),done=active&&g.feasible&&a.rev>=n.expEnd,fill=active?(done?'#0f805b':'#1269d3'):'#bdcbd9';s+=`<circle cx="${xx(n.x)}" cy="${yy(n.y)}" r="7" fill="${fill}"></circle>`+stext(xx(n.x)+9,yy(n.y)-10,'H'+String(n.head).padStart(2,'0'),14,fill);}
 const camY=Math.max(72,Math.min(967,yy(a.y))),camX=xx(FIXED.glass.akX+a.x);s+=line(35,camY,970,camY,'#00a1ab',2,'5 5')+`<circle cx="${camX}" cy="${camY}" r="16" fill="white" stroke="#00a1ab" stroke-width="3"></circle>`+line(camX-23,camY,camX+23,camY,'#00a1ab',2)+line(camX,camY-23,camX,camY+23,'#00a1ab',2);
 s+=stext(45,996,'기판 전체 925 × 1500 mm · Cell 77.76 × 46.08 mm · Pitch X100 / Y200 mm',13,'#5d6e80');$('board').innerHTML=s;
 $('timeLabel').textContent=F(t,2)+' s';$('animText').textContent=`${a.travelPhase} · ${a.phase} · 명목 노출 ${a.done}/${g.nodes.length}점`;renderMachine(a,t);renderCursor(a.rev);
}
function renderMachine(a,t){$('machine').innerHTML=ReviewVisual.machine(FIXED,result,t,result.modes[mode].groups[glass]);$('machineText').textContent=`StageY ${F(result.q0,3)} → ${F(result.qEnd,3)}mm · 입력 Stroke ${F(result.p.strokeMm,1)}mm. 재생은 이 역방향 구간에서만 종료합니다.`;}
function renderCursor(t){const el=$('timelineCursor');if(el){const g=result.modes[mode].groups[glass],x=190+t/ReviewVisual.plotMax(FIXED,result,g)*875;el.setAttribute('x1',x);el.setAttribute('x2',x);}}
function animate(now){if(!playing)return;const pos=Math.min(1000,startPos+(now-startWall)/8000*1000);$('time').value=pos;renderBoard();if(pos>=1000){stop();return;}raf=requestAnimationFrame(animate);}
labels.forEach(([k])=>$(k).addEventListener('input',update));for(const cap of [2,4])$('mode'+cap).onclick=()=>{mode=cap;glass=0;update();};$('reset').onclick=()=>{labels.forEach(([k])=>$(k).value=FIXED.defaults[k]);mode=4;glass=0;update();};$('prev').onclick=()=>{stop();glass--;$('time').value=0;render();};$('next').onclick=()=>{stop();glass++;$('time').value=0;render();};$('time').oninput=()=>{stop();renderBoard();};$('play').onclick=()=>{if(playing){stop();return;}if(Number($('time').value)>=1000)$('time').value=0;playing=true;startPos=Number($('time').value);startWall=performance.now();$('play').textContent='일시정지';raf=requestAnimationFrame(animate);};
$('guideLink').addEventListener('click',e=>{if(result.inputErrors.length)e.preventDefault();else sync();});
function guideHtml(){return GUIDE_TEMPLATE.replace('const SAVED_REVIEW_STATE=null;','const SAVED_REVIEW_STATE='+JSON.stringify(snapshot()).replace(/</g,'\\u003c')+';');}
$('downloadGuide').onclick=()=>{if(result.inputErrors.length)return;const blob=new Blob([guideHtml()],{type:'text/html;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='FlyingReview_Formula_Guide.html';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('fixed').innerHTML=`<p>Scanner–Review1467mm / Scanner가공폭110mm·모델Head중심Pitch110mm / 기판925×1500mm / Cell9×5, Pitch100×200mm / Branch B07 유효 가공점, 8개 Head의 Cell 모두 다름.</p><p>Stroke 시작: 가공대기 StageY ${F(FIXED.bounds.start,1)}mm(Scanner 기판 진입 전500mm). 입력 Stroke 끝에서 정지하는 사다리꼴/삼각형 모델입니다. 실제 Process 완료신호의 서비스 지연은 미계산입니다.</p><p>현재 기준Stroke2700mm,Y100·가감속150입니다. 실제 Stroke를 입력해 사용합니다. 가감속은 가공구간 내부에 포함되며, 실제 출사·리뷰는 등속에서만 수행합니다.</p><p>Basler ${FIXED.camera}:2.5µm pixel, 2600×2128, Color·Global Shutter, 기본18.5fps, 최소노출2µs. 렌즈378-810-3 SL20x:NA0.28, WD30.5mm, 분해능약1µm. 200mm 튜브렌즈·1x Relay 총20x → 0.125µm/px.</p><p>정착50ms / Guard20ms / 지연50µs / Jitter±5µs / 해당점출사여유1ms / Encoder16000cts/mm / X Stroke1025mm, Park0, 선행준비2초는 고정 설계값입니다.</p><p>기존 test0929 유효 Shot창은 ${F(FIXED.shotSpanY.span,1)}mm이며 전체 Process Stroke와 다릅니다. Process 동작창과 리뷰가 겹친다고 전체 창의 Laser ON을 뜻하지 않습니다. Frame·Vision 결과 확인 후 ReviewDone 판정, 가공 결과 부적합·미수신은 완료로 처리하지 않습니다.</p><p>실제 S-Curve·Follow Error·조명·SNR·검출성능·Scanner/Laser 서비스시간은 미계산. 자동 Offset 적용은 포함하지 않습니다.</p>`;
$('sources').innerHTML=`사양 확인2026-10-06 · <a href="https://docs.baslerweb.com/a2a2600-20gcbas">Basler</a> · <a href="https://docs.baslerweb.com/exposure-time">노출시간</a> · <a href="https://www.mitutoyo.com/webfoo/wp-content/uploads/E4191-378_010611.pdf">Mitutoyo p20·29</a> · 기하 소스 ${FIXED.sourceCommit.slice(0,12)}`;
window.getReviewState=()=>({result,mode,glass,snapshot:snapshot()});window.getCurrentGuideHtml=guideHtml;update();
