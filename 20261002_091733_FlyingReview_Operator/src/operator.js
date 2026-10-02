/* Operator explanations and cycle coverage. No hardware signals or quality PASS. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./engine.js'));else root.FlyingReviewOperator=factory(root.FlyingReview);})(typeof globalThis!=='undefined'?globalThis:this,function(F){
  'use strict';
  const primary=['vy','vx','exposureUs'];
  const expert=['ay','dy','ax','dx','settleMs','guardMs','fps','readoutMs','overlapReadout','triggerDelayUs','jitterUs','followErrorUm','xSettleErrorUm','maxBlurUm','preTime','imageTail','otherTime','distance','evenExtra','reviewAKX','reviewAKY','parkX','xMin','xMax','rowOneOnly'];
  const fixedExplanation='Recipe 기하와 Head 배정, DOE/Mask, −Y 진행, 자동 Stage 경로, 등속 가공/Review, 지연 보상, Encoder16000, Tact150/가공30은 현재 기준으로 고정합니다. Recipe/장비 변경은 조건 JSON으로 가져오며, 전문가 설정은 실측값을 반영할 때 사용합니다.';
  const head=h=>'H'+String(h).padStart(2,'0'),fmt=(v,n=3)=>Number.isFinite(v)?v.toLocaleString('en-US',{minimumFractionDigits:n,maximumFractionDigits:n}):'계산 불가';
  function coverage(plan,clock,jitter,previous=[]){
    const map=new Map(previous.map(x=>[x.head,x]));
    if(plan)plan.groups.forEach((pass,i)=>{if(pass.valid)pass.nodes.forEach(n=>{const t=i*plan.tact+n.expEnd+jitter;if(n.valid&&Number.isFinite(t)&&clock>=t)map.set(n.head,{head:n.head,glass:i+1,time:t});});});
    return [...map.values()].sort((a,b)=>a.head-b.head);
  }
  function analyze(p,g,r,defs,cap){
    const plan=r.plans[cap],sizes=plan?plan.groups.map(x=>x.nodes.length):[],lo=Math.min(...sizes),hi=Math.max(...sizes),sizeText=sizes.length?(lo===hi?String(hi):lo+'~'+hi):'0';
    const geometryBad=r.nodes.filter(n=>!n.geometryValid),blurBad=r.nodes.filter(n=>n.blur>p.maxBlurUm+1e-5),pointBad=r.nodes.filter(n=>!n.valid);
    const travel=Math.max(p.parkX,...r.nodes.map(n=>n.reviewX).filter(Number.isFinite))-Math.min(p.parkX,...r.nodes.map(n=>n.reviewX).filter(Number.isFinite));
    const checks=[
      {label:'Cell·Head·Mask 좌표',ok:!geometryBad.length,detail:geometryBad.length?geometryBad.map(n=>head(n.head)+': '+n.errors.join(' / ')).join(' · '):r.requested+'개 요청점의 Head 소유권·Mask 확인'},
      {label:'Stage 이동거리',ok:r.profile.distance<=p.stageStroke+1e-8,detail:fmt(r.profile.distance,3)+' / '+fmt(p.stageStroke,0)+' mm (거리 검증, 절대 원점은 실측)'},
      {label:'Review X 이동범위',ok:travel<=p.reviewStroke+1e-8&&r.nodes.every(n=>!Number.isFinite(n.reviewX)||(n.reviewX>=p.xMin&&n.reviewX<=p.xMax)),detail:fmt(travel,3)+' / '+fmt(p.reviewStroke,0)+' mm · 축 구간 '+fmt(p.xMin,1)+'~'+fmt(p.xMax,1)},
      {label:'가공30초·Tact150초',ok:!r.globals.some(x=>/예산 초과|Tact|가공 구간에|전체 가공 구간/.test(x)),detail:'기하 가공 '+fmt(r.processTime,3)+' s / Tact '+fmt(r.tact,3)+' s'},
      {label:'Camera·노출·Blur',ok:!pointBad.some(n=>n.errors.some(x=>/Blur|위치오차|정착오차|노출|출사/.test(x)))&&p.fps<=p.cameraMaxFps,detail:'Frame 최소 '+fmt(r.period*1000,3)+' ms · 최대 Blur '+fmt(Math.max(...r.nodes.map(n=>n.blur).filter(Number.isFinite)),3)+' µm / 허용 '+fmt(p.maxBlurUm,4)+' µm'},
      {label:'선택한 Glass 계획',ok:!!plan,detail:plan?sizeText+'점/Glass, '+plan.count+' Glass로 '+r.requested+' Head 커버':'개별점·구간·초기/복귀 조건 미성립'}
    ];
    const actions=[],advice=[];
    const trial=(key,value,label)=>{
      if(!Number.isFinite(value)||value<=0)return false;
      const q={...p,[key]:value};if(key==='fps'&&value>p.cameraMaxFps)return false;
      const s=F.evaluate(q,defs,g),target=s.plans[cap];
      if(!target||target.count>Math.ceil(s.requested/cap))return false;
      actions.push({key,value,label,verified:true,result:`재검증: ${target.count} Glass / Tact ${fmt(s.tact,2)} s`});return true;
    };
    if(geometryBad.length)advice.push('좌표 오류는 속도 변경으로 해결되지 않습니다. 해당 Head의 담당 Cell·유효 Shot/Branch를 다시 지정하세요. 자동 배치는 모든 요청 좌표를 바꾸므로 버튼을 누를 때만 적용합니다.');
    if(r.profile.distance>p.stageStroke){
      const excess=r.profile.distance-p.stageStroke,room=Math.max(0,p.leadY-r.profile.d1);
      advice.push(`Stage Stroke가 ${fmt(excess,3)} mm 부족합니다. 속도를 낮추어도 필요한 이동거리 자체는 줄지 않습니다. 선행길이·후단 여유 또는 실제 거리/경로를 설계 검토하세요. 선행길이의 기하 여유는 약 ${fmt(room,3)} mm이지만 거리만 줄여 제안값을 자동 적용하지 않습니다.`);
    }
    if(blurBad.length){
      const speed=Math.max(...r.nodes.map(n=>n.speed).filter(Number.isFinite)),limit=p.maxBlurUm*1000/speed;
      advice.push(`Blur 조건 미성립: 현재 속도에서 노출 상한은 약 ${fmt(limit,3)} µs입니다. Camera 최소노출은 ${fmt(p.minExposureUs,3)} µs입니다.`);
      if(limit>=p.minExposureUs-1e-6)trial('exposureUs',Math.max(p.minExposureUs,Math.min(p.exposureUs,limit)),'노출을 '+fmt(Math.max(p.minExposureUs,limit),3)+' µs로 조정');
      else advice.push(`최소노출 때문에 노출 단축만으로 해결할 수 없습니다. 현재 노출에서 Y속도 상한은 ${fmt(p.maxBlurUm/(r.exposure*1000),3)} mm/s이며, 감속 시 30/150초도 다시 검사해야 합니다. Camera/조명·유효 노출 또는 광학·품질 요구를 검토하세요. 허용 Blur를 자동으로 완화하지 않습니다.`);
    }
    if(r.globals.some(x=>/예산 초과|Tact/.test(x))){
      const budget=p.tact-p.imageTail-p.otherTime-r.readoutWait;let loV=.01,hiV=2000;
      if(budget>0&&F.motion(r.profile.distance,hiV,p.ay,p.dy).total<=budget){for(let i=0;i<55;i++){const v=(loV+hiV)/2;if(F.motion(r.profile.distance,v,p.ay,p.dy).total<=budget)hiV=v;else loV=v;}const need=Math.max(hiV,Math.abs(r.bounds.last-r.bounds.first)/p.processBudget)*1.001;
        advice.push('시간 예산을 맞추는 Y속도 후보는 '+fmt(need,3)+' mm/s 이상입니다. 빨라지면 X 여유와 Blur가 불리해집니다.');trial('vy',need,'Stage Y를 '+fmt(need,3)+' mm/s로 조정');}
      else advice.push('현재 기타시간·가감속에서 Tact 예산을 맞추기 어렵습니다. 물류 시간과 실제 Motion 프로파일을 확인하세요.');
    }
    const badEdges=r.all.edges.filter(e=>!e.valid),same=badEdges.filter(e=>Number.isFinite(e.gap)&&e.gap<=2*r.jitter);
    if(same.length)advice.push('같은 Y의 두 점은 동시에 도착합니다. X 속도·FPS를 높여도 단일 Camera로 동시에 찍을 수 없습니다. 다른 유효 Y점으로 변경하거나 Glass를 나누세요.');
    if(badEdges.length&&!same.length&&badEdges.every(e=>[e.dx,e.dy,e.gap,e.xAvailable].every(Number.isFinite))){
      const worst=badEdges.slice().sort((a,b)=>a.xSlack-b.xSlack)[0];
      advice.push(`${head(worst.a)}~${head(worst.b)}: 현재 ΔY ${fmt(worst.dy,3)} mm / 등속 필요 ΔY ${fmt(worst.minDeltaYCruise,3)} mm. 실제 가공 가능한 다른 Y점을 지정하면 재검증합니다.`);
      const vs=r.all.edges.map(e=>F.minVelocity(e.dx,e.xAvailable,p.ax,p.dx));
      if(vs.every(x=>x!==null)){const v=Math.max(p.vx,...vs)*1.001;trial('vx',v,'Review X를 '+fmt(v,2)+' mm/s로 조정');}
      else advice.push('고정 X 가감속의 최소 이동시간도 부족한 구간이 있어 속도만 높이는 방법으로는 해결되지 않습니다. Y 간격·Glass 분할 또는 실측 기반 가감속/정착을 검토하세요.');
      const fps=r.all.edges.map(e=>e.gap>2*r.jitter?1/(e.gap-2*r.jitter):Infinity),need=Math.max(...fps)*1.001;
      if(need<=p.cameraMaxFps)trial('fps',Math.max(p.fps,need),'Camera FPS를 '+fmt(Math.max(p.fps,need),2)+'로 조정');
      else advice.push('필요 Frame 주기는 현재 Camera FPS 사양을 넘어섭니다. 같은 좌표를 유지하려면 Glass를 더 나누거나 Camera 사양 변경을 검토하세요.');
    }
    if(plan&&plan.count>Math.ceil(r.requested/cap))advice.unshift(`상한${cap}점으로 설정했지만 현재 좌표에서는 실제 ${sizeText}점씩 ${plan.count} Glass가 필요합니다. 현재 분할은 유효하며, ${cap}점씩 찍으려면 좌표/동작 조건을 바꿔야 합니다.`);
    if(plan&&!badEdges.length&&!r.globals.length&&!pointBad.length)advice.push('현재 좌표는 2·4·8점 상한을 선택해 순환 검사할 수 있습니다. 선택 상한에 따라 Glass 장수가 바뀝니다. 필요 개수는 운영 방침에 맞춰 선택하세요.');
    if(pointBad.length&&!geometryBad.length&&!blurBad.length)advice.push('개별점의 위치오차·노출 구간·Camera 사양/가공 후 대기 조건을 확인하세요. Glass를 나누어도 개별점의 품질·Stroke 오류는 해결되지 않습니다.');
    const finite=r.all.edges.filter(e=>Number.isFinite(e.xSlack)),tight=finite.slice().sort((a,b)=>a.xSlack-b.xSlack)[0];
    return {checks,actions,advice,plan:!!plan,sizeText,glassCount:plan?.count,tight,title:plan?`실제 ${sizeText}점 / Glass · ${plan.count} Glass로 ${r.requested} Head 커버`:'현재 조건에서 검사 계획이 성립하지 않습니다',status:!plan?'blocked':plan.count>Math.ceil(r.requested/cap)?'split':'ready',qualityNote:`취득 계획 기준입니다. Blur ${fmt(p.maxBlurUm,4)} µm 허용은 ${fmt(p.maxBlurUm/(p.sensorPixelUm/p.magnification),2)} object px에 해당합니다. 실제 홀/전극 판정 품질은 별도 확인합니다.`};
  }
  function enrichGuide(html,p){
    const section=`<section><h2>간소화 설정과 사이클 누적 표시</h2><p>기본 입력은 Stage Y속도, Review X속도, 노출시간, 품질 기준입니다. Recipe 기하·Head 소유권·Mask/DOE 및 현재 동작 규칙은 고정 표시합니다. 가감속·정착·Trigger·거리/축 원점 등 실측이 필요한 항목만 전문가 설정에서 바꿉니다. 새로운 Recipe/장비 사양은 검증한 조건 JSON으로 가져옵니다.</p><p>조건 안내는 좌표, Stage Stroke, Review X 범위, 30/150초, Camera/Blur와 실제 Glass 계획을 각각 검사합니다. 불가 원인에 따라 필요한 노출·속도·Y간격을 보여주며, 숫자 적용 버튼은 선택한 Glass 상한의 최소 이론 장수까지 전 조건을 다시 검증한 경우에만 표시합니다. Camera 사양을 넘는 FPS 또는 최소노출 미만 값, 품질허용 완화는 자동 적용하지 않습니다.</p><p>Stage 설계 Stroke ${p.stageStroke} mm / Review ${p.reviewStroke} mm를 사용합니다. 첨부 도면의 Limit3980/1033 mm와 Stopper Gap을 가용 Stroke에 더하지 않습니다. Stage 이동거리 검증과 절대 시작/종점의 현장 원점 등록은 별도입니다. Review 기본 구간0~1025 mm는 등록 가정이며 실제 원점을 확인해야 합니다.</p><p>H01~H08 한 사이클에서 취득한 점은 Glass가 바뀌어도 지도·이동 기판·Cell 색과 Head 추적에 녹색으로 누적합니다. 이전 Glass 기록을 새 기판에 표시하는 것은 사이클 오버레이입니다. 새 기판에서 해당 점을 이미 다시 촬영했다는 뜻이 아닙니다. 「이번 Glass 완료」와 「사이클 누적」 개수를 분리하여 보여줍니다.</p><p>슬라이더를 과거 시각으로 되돌려도 이미 표시한 누적은 유지합니다. 마지막 Glass의 사이클 끝까지 녹색을 유지하고, 반복 재생으로 새 사이클에 진입하거나 「처음」을 누르면 초기화합니다. 조건/좌표/상한/정책 변경은 다른 계획이므로 누적을 초기화합니다. 실제 Frame/PASS 신호는 연결되어 있지 않습니다.</p></section>`;
    return html.replace('v3 · 2026.10.02','v4 · 2026.10.02').replace('<section><h2>사용 순서와 화면 해석</h2>',section+'<section><h2>사용 순서와 화면 해석</h2>');
  }
  return {primary,expert,fixedExplanation,coverage,analyze,enrichGuide};
});
