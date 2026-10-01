(function () {
  'use strict';
  const F=window.FlyingReview, $=id=>document.getElementById(id);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const f=(x,n=3)=>Number.isFinite(x)?x.toLocaleString('en-US',{minimumFractionDigits:n,maximumFractionDigits:n}):'—';
  const head=h=>'H'+String(h).padStart(2,'0');
  const colors=['#4ed7e8','#7c9aff','#ae91fa','#e4a5ea','#f6bd5c','#ea9470','#67dfa9','#8ecee8'];
  let p=F.copyDefaults(),g=F.makeGeometry(p),defs=F.autoSelect(p,g)?.definitions||F.preset('four',p,g);
  let result=null,plan=null,paths=[],clock=-p.preTime,playing=false,lastFrame=0,shownGlass=-1,noticeExtra='',inv=null;
  const field=(key,label,step=1)=>({key,label,step});
  const check=(key,label)=>({key,label,type:'check'});
  const choice=(key,label,options)=>({key,label,type:'select',options});
  const groups=[
    ['Stage Y · 기판 이동',true,[field('vy','속도 (mm/s)',.1),field('ay','가속도 (mm/s²)',10),field('dy','감속도 (mm/s²)',10),choice('direction','축 이동 방향',[[-1,'−Y'],[1,'+Y']]),field('leadY','가공 전 선행길이 (mm)',1),field('runoutY','기판 후단 여유 (mm)',1),check('autoStage','시작/종점 자동 산출'),field('stageStart','시작 StageQ (mm)',.001),field('stageEnd','종점 StageQ (mm)',.001),check('stageLimits','Stage Stroke 제한 검사'),field('stageMin','Stroke 최소 (mm)',1),field('stageMax','Stroke 최대 (mm)',1),check('processCruise','MOF 가공은 등속 구간만'),check('cruiseOnly','Review 노출은 등속만')]],
    ['Review X · 선도착',true,[field('vx','속도 (mm/s)',1),field('ax','가속도 (mm/s²)',10),field('dx','감속도 (mm/s²)',10),field('parkX','Park X (mm)',.1),field('xMin','Stroke 최소 (mm)',1),field('xMax','Stroke 최대 (mm)',1),field('preTime','첫 X 준비시간 (s)',.1),field('settleMs','X 정착시간 (ms)',1),field('guardMs','Trigger 선도착 (ms)',1),field('toleranceX','X 위치허용 (mm)',.001),field('xSettleErrorUm','X 정착오차 예산 (µm)',.1),choice('order','촬영 순서',[['arrival','Y 도착 순서'],['head','H01 → H08 순서']])]],
    ['Camera · 촬영 / 품질',true,[field('fps','Camera FPS (Hz)',.1),field('exposureUs','노출시간 (µs)',.1),field('minExposureUs','Camera 최소노출 (µs)',.1),field('readoutMs','Readout (ms)',.1),check('overlapReadout','Readout 중 다음 노출 가능'),field('triggerDelayUs','Trigger 지연 (µs)',1),field('jitterUs','Trigger Jitter ± (µs)',.1),check('compensate','지연+노출 중심 보상'),field('encoderScale','Stage count/mm',1),field('followErrorUm','추종오차 예산 (µm)',.1),field('toleranceY','Y 위치허용 (mm)',.001),field('maxBlurUm','Blur 허용 (µm)',.01),field('sensorPixelUm','Sensor pixel (µm)',.01),field('magnification','광학 배율 (×)',.1)]],
    ['Scanner · ATM 거리 / 좌표',false,[field('distance','홀수 Head → Review (mm)',1),field('evenExtra','짝수 Head 추가거리 (mm)',1),field('headPitchX','Head 간 X Pitch (mm)',.1),field('fieldX','Head Field 폭 (mm)',.1),field('head1AKX','H01 AK 기준 X (mm)',.1),field('referenceOffsetX','소유권 X 기준차 (mm)',.1),field('reviewAKX','Review AK 축 X (mm)',.1),field('reviewAKY','Review AK 축 Y (mm)',.1),field('processClearanceMs','가공 후 최소대기 (ms)',.1)]],
    ['Glass · Cell 자동 배치',false,[field('glassX','Glass X (mm)',1),field('glassY','Glass Y (mm)',1),field('cellCols','Cell 열 개수',1),field('cellRows','Cell 행 개수',1),field('cellPitchX','Cell Pitch X (mm)',1),field('cellPitchY','Cell Pitch Y (mm)',1),field('akX','AK Margin X (mm)',.1),field('akY','AK Margin Y (mm)',.1),field('pixelSize','Pixel pitch (mm)',.001),field('pixelsX','Model1 pixel X',1),field('pixelsY','Model1 pixel Y',1),field('shotPitchPixels','Shot pitch (pixel)',1),choice('split','DOE 축당 분기',[[4,'4 × 4'],[1,'1 × 1']]),check('rowOneOnly','Cell 첫 Shot Row만 허용'),{key:'holes',label:'Model1 Mask: X,Y,W,H (mm) / 한 줄씩',type:'mask'}]],
    ['Tact · 공정 예산',false,[field('processBudget','가공 구간 예산 (s)',.1),field('tact','기획 Tact (s)',1),field('imageTail','영상처리 Tail (s)',.1),field('otherTime','물류·Align·복귀 등 (s)',1),check('enforceProcess','가공 예산을 필수 조건으로'),check('enforceTact','기획 Tact를 필수 조건으로')]]
  ];
  function renderParams() {
    $('parameter-groups').innerHTML=groups.map(([name,open,fields])=>`<details class="param-group" ${open?'open':''}><summary>${name}</summary><div class="param-fields">${fields.map(d=>{
      if(d.type==='check')return `<label class="check-label"><input data-param="${d.key}" type="checkbox" ${p[d.key]?'checked':''}>${d.label}</label>`;
      if(d.type==='mask')return `<label class="wide">${d.label}<textarea data-param="holes" spellcheck="false">${esc(p.holes.map(h=>h.join(', ')).join('\n'))}</textarea></label>`;
      const input=d.type==='select'?`<select data-param="${d.key}">${d.options.map(([v,l])=>`<option value="${v}" ${String(p[d.key])===String(v)?'selected':''}>${l}</option>`).join('')}</select>`:`<input data-param="${d.key}" type="number" step="${d.step}" value="${p[d.key]}">`;
      return `<label>${d.label}${input}</label>`;
    }).join('')}</div></details>`).join('');
    $('parameter-groups').querySelectorAll('[data-param]').forEach(el=>el.addEventListener('change',()=>{
      const k=el.dataset.param;
      if(el.type==='checkbox')p[k]=el.checked;
      else if(k==='holes')p.holes=el.value.trim()?el.value.trim().split('\n').map(line=>line.split(/[\s,]+/).filter(Boolean).map(Number)):[];
      else p[k]=k==='order'?el.value:Number(el.value);
      recalc(true);
    }));
    updateStageFields();
  }
  function updateStageFields() {
    for(const k of ['stageStart','stageEnd']){const el=document.querySelector(`[data-param="${k}"]`);if(el)el.disabled=p.autoStage;}
  }
  function stop() {playing=false;$('play').textContent='재생';lastFrame=0;}
  function fail(error) {
    stop();$('error-box').hidden=false;$('error-box').textContent=error.message;
    $('play').disabled=true;$('max-count').textContent='입력 오류';$('cycle-count').textContent='—';$('tact-number').textContent='—';
    result=null;plan=null;paths=[];$('machine-scene').innerHTML='<p class="bad">입력을 수정하면 화면이 다시 계산됩니다.</p>';$('global-map').innerHTML='';
    for(const id of ['point-table','comparison-table','node-table','edge-table','motion-chart','cycle-program','inverse-results'])$(id).innerHTML='';
    $('phase-label').textContent='입력 오류';
  }
  function recalc(geometryChanged=false) {
    stop();$('error-box').hidden=true;
    try {
      if(geometryChanged)g=F.makeGeometry(p);
      result=F.evaluate(p,defs,g);inv=null;
      $('inverse-results').innerHTML='<p class="subtle">현재 조건이 변경되었습니다. 역산 버튼을 눌러 다시 계산하세요.</p>';
      clock=-p.preTime;shownGlass=-1;choosePlan();renderPoints();renderTiming();renderNotice();
      $('max-count').textContent=result.maxPerPass+' / '+result.requested+'점';
      $('tact-number').textContent=f(result.tact,2)+' s';
      $('tact-detail').textContent='이동 '+f(result.profile.total,2)+' + 미완료 Readout '+f(result.readoutWait,2)+' + Tail '+f(p.imageTail,1)+' + 기타 '+f(p.otherTime,1)+' s';
      updateStageFields();
      if(p.autoStage)for(const [k,v] of [['stageStart',result.bounds.start],['stageEnd',result.bounds.end]])document.querySelector(`[data-param="${k}"]`).value=f(v,4).replace(/,/g,'');
      renderScenes();renderFrame();
    } catch(error){fail(error);}
  }
  function renderNotice() {
    const problems=[...result.globals];
    for(const n of result.blocked)problems.push(head(n.head)+': '+n.errors.filter(e=>!result.globals.includes(e)).join(' / '));
    for(const n of result.nodes.filter(n=>n.valid&&n.initialSlack<0))problems.push(head(n.head)+': 최초 Park에서 X 선도착 시간 부족');
    for(const n of result.nodes.filter(n=>n.valid&&F.passFor([n],result).resetSlack<0))problems.push(head(n.head)+': 다음 Glass X 준비 전 Park 복귀시간 부족');
    const extra=noticeExtra?' '+noticeExtra:'';
    $('notice').className='notice'+(!result.coverageComplete?' warn':'');
    $('notice').textContent=problems.length?'미성립: '+problems.join(' · ')+extra:`선택 ${result.requested}점 중 한 Glass 최대 ${result.maxPerPass}점. ${result.all.valid?'모든 요청점의 단일 Pass가 성립합니다.':'원하는 점을 보존하고 Glass를 나눈 추천 계획을 사용합니다.'} 설계 가정 기준이며 장비 동작 보증은 아닙니다.`+extra;
  }
  function choosePlan() {
    if(!result)return;
    plan=result.plans[Number($('plan-cap').value)];
    paths=plan?plan.groups.map(pass=>F.cameraPath(pass,p)):[];
    $('play').disabled=!plan;
    $('cycle-count').textContent=plan?plan.count+' Glass':'커버 불가';
    $('cycle-duration').textContent=plan?`${result.requested} Head 고정점 1회 · ${f(plan.count*result.tact,1)}초 (모델)`:'좌표/동작/품질 조건을 수정하세요.';
    $('cycle-program').innerHTML=plan?`<p>한 사이클 · ${plan.count} Glass / Head당 1회. 각 Glass의 촬영 순서는 글로벌 Y 도착 순서입니다.</p>${plan.groups.map((pass,i)=>`<div class="program-row" data-glass="${i}"><strong>Glass ${i+1}</strong><span>${pass.nodes.map(n=>`${head(n.head)} · C${n.cell}`).join(' → ')}</span><span>최소 여유 ${f(pass.slack*1000,1)} ms</span></div>`).join('')}`:'<p class="bad">추천 운전 계획이 없습니다. 실패 조건을 숨기고 촬영 완료를 표시하지 않습니다.</p>';
    $('cycle-program').querySelectorAll('[data-glass]').forEach(el=>el.addEventListener('click',()=>{stop();clock=Number(el.dataset.glass)*result.tact;renderFrame();}));
  }
  function current() {
    if(!result||!plan)return {index:0,local:Math.max(0,clock),pass:{nodes:[],edges:[]},path:{at:()=>({x:p.parkX,v:0,phase:'대기'})}};
    const index=Math.max(0,Math.min(plan.count-1,Math.floor(Math.max(0,clock)/result.tact)));
    return {index,local:clock-index*result.tact,pass:plan.groups[index],path:paths[index]};
  }
  function table(headers,rows) {return `<table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table>`;}
  function renderPoints() {
    const rows=defs.map(d=>{
      const n=result.nodes.find(n=>n.head===d.head)||F.makePoint(d,p,g);
      const cells=[...new Set(g.byHead[d.head].map(r=>r.cell))];if(!cells.includes(Number(d.cell)))cells.unshift(Number(d.cell));
      return `<tr class="${n.geometryValid?'':'fail'}" data-head="${d.head}"><td><label style="color:${colors[d.head-1]}"><input data-point="enabled" type="checkbox" ${d.enabled!==false?'checked':''}> ${head(d.head)}</label></td><td><select data-point="cell" aria-label="${head(d.head)} Cell">${cells.map(c=>`<option value="${c}" ${Number(d.cell)===c?'selected':''}>C${c}</option>`).join('')}</select></td><td><input data-point="col" type="number" aria-label="${head(d.head)} Shot column" min="1" max="${g.cols}" step="1" value="${d.col}"></td><td><input data-point="row" type="number" aria-label="${head(d.head)} Shot row" min="1" max="${g.rows}" step="1" value="${d.row}"></td><td><select data-point="beam" aria-label="${head(d.head)} DOE branch">${Array.from({length:p.split*p.split},(_,i)=>`<option value="${i+1}" ${Number(d.beam)===i+1?'selected':''}>B${String(i+1).padStart(2,'0')}</option>`).join('')}</select></td><td data-field="global">${f(n.x,4)}, ${f(n.y,4)}</td><td>${f(n.reviewX,4)}</td><td>${f(n.targetQ,4)}</td><td class="${n.geometryValid?'good':'bad'}">${n.geometryValid?`${n.nativeKey} · 유효`:esc(n.errors.join(' / '))}</td></tr>`;
    });
    $('point-table').innerHTML=table(['Head','Cell','Shot 열','Shot 행','Branch','Global X, Y (mm)','Review X (mm)','Stage Q (mm)','기하 검증 / ID'],rows);
    $('point-table').querySelectorAll('[data-point]').forEach(el=>el.addEventListener('change',()=>{
      const h=Number(el.closest('tr').dataset.head),d=defs.find(d=>d.head===h),k=el.dataset.point;
      d[k]=k==='enabled'?el.checked:Number(el.value);
      if(k==='cell') {
        const options=g.byHead[h].filter(r=>r.cell===d.cell&&(!p.rowOneOnly||r.row===1));
        const r=options.find(r=>r.col===d.col&&r.row===d.row)||options.sort((a,b)=>a.row-b.row||a.col-b.col)[0];
        if(r){d.col=r.col;d.row=r.row;}
      }
      noticeExtra='';recalc();
    }));
    $('geometry-summary').textContent=`${g.cells.length} Cell · Model1 ${f(p.pixelsX*p.pixelSize,2)} × ${f(p.pixelsY*p.pixelSize,2)} mm · ${g.cols} × ${g.rows} Shot/Cell · 이론 ${f(g.theoretical,0)} / Head 배정·Mask 제외 ${f(g.valid,0)} Shot. Field 미배정 유효 Shot ${f(g.unassignedValid,0)}개가 있으므로 실제 전수 가공 Recipe는 별도 검증이 필요합니다. 이 페이지의 검사 대상은 고정 ${result.requested}점뿐입니다.`;
  }
  function renderTiming() {
    $('comparison-table').innerHTML=table(['Glass당 상한','한 Glass 실제 최대','1회 커버 Glass','그룹별 Head (촬영 순서)','사이클 모델 시간'],[1,2,4,8].map(cap=>{
      const q=result.plans[cap];return `<tr class="${q?'pass':'fail'}"><td>${cap}점</td><td>${Math.min(cap,result.maxPerPass)}점</td><td>${q?q.count:'불가'}</td><td>${q?q.groups.map((pass,i)=>'G'+(i+1)+': '+pass.nodes.map(n=>head(n.head)).join(' → ')).join('<br>'):'한 점 단위도 불가한 Head가 있습니다.'}</td><td>${q?f(q.count*result.tact,2)+' s':'—'}</td></tr>`;
    }));
    $('node-table').innerHTML=table(['순서 / Head','Cell / Shot','Laser (s)','Review 중심 (s)','Trigger 명령 (s)','가공→Review (s)','Y속도 (mm/s)','Blur µm / px','위치오차 (µm)','검증'],result.all.nodes.map((n,i)=>`<tr class="${n.valid?'pass':'fail'}"><td>${i+1} · ${head(n.head)}</td><td>C${n.cell} / ${n.shot??'—'} / B${n.beam}</td><td>${f(n.laserTime,6)}</td><td>${f(n.cross,6)}</td><td>${f(n.cmd,6)}</td><td>${f(n.leadTime,4)}</td><td>${f(n.speed,2)}</td><td>${f(n.blur,3)} / ${f(n.blurPixels,2)}</td><td>${f(n.positionError,3)}</td><td class="${n.valid?'good':'bad'}">${n.valid?'좌표·Camera 조건 유효':esc(n.errors.join(' / '))}</td></tr>`));
    $('edge-table').innerHTML=table(['Point → Point','ΔX / ΔY (mm)','2D 거리 (mm)','Y 도착 간격 (ms)','X 이동 (ms)','X 가용 (ms)','X 여유 (ms)','Frame 여유 (ms)','필요 ΔY·등속 (mm)','검증'],result.all.edges.map(e=>`<tr class="${e.valid?'pass':'fail'}"><td>${head(e.a)} → ${head(e.b)}</td><td>${f(e.dx,3)} / ${f(e.dy,3)}</td><td>${f(e.distance,3)}</td><td>${f(e.gap*1000,2)}</td><td>${f(e.move*1000,2)}</td><td>${f(e.xAvailable*1000,2)}</td><td>${f(e.xSlack*1000,2)}</td><td>${f(e.frameSlack*1000,2)}</td><td>${f(e.minDeltaYCruise,3)}</td><td class="${e.valid?'good':'bad'}">${e.valid?'성립':esc(e.reasons.join(' / '))}</td></tr>`));
    $('motion-summary').textContent=`Stage Q ${f(result.bounds.start,4)} → ${f(result.bounds.end,4)} mm. 총 이동 ${f(result.profile.distance,3)} mm / 가속 ${f(result.profile.t1,3)} s / 등속 ${f(result.profile.t2,3)} s / 감속 ${f(result.profile.t3,3)} s. 기하학적 메인 가공 구간 ${f(result.processTime,3)} s (예산 ${p.processBudget} s). Camera 재Trigger 최소 ${f(result.period*1000,3)} ms. 전체 8점 계획의 X Park 복귀시간 ${f(result.all.returnTime,3)} s, 다음 Glass 준비까지 여유 ${f(result.all.resetSlack,3)} s. 누락된 서비스시간은 기타시간 입력과 실측으로 검증하세요.`;
  }
  function renderScenes() {
    const sx=.66,sy=Math.min(.31,600/Math.max(p.glassY,Math.abs(p.distance),Math.abs(p.distance+p.evenExtra))),x0=95,camY=p.direction<0?740:150;
    const W=Math.max(1000,x0+p.glassX*sx+180),H=900;
    const hp=Array.from({length:8},(_,i)=>{
      const h=i+1,D=p.distance+(h%2===0?p.evenExtra:0),y=camY+p.direction*D*sy,x=p.akX+p.head1AKX+i*p.headPitchX-p.referenceOffsetX;
      return `<g class="fixed-head" data-head="${h}"><rect class="scan-field" x="${x0+(x-p.fieldX/2)*sx}" y="${y-14}" width="${p.fieldX*sx}" height="28" rx="5" fill="${colors[i]}" stroke="${colors[i]}"/><text class="head-label" x="${x0+x*sx}" y="${y-23}" text-anchor="middle">${head(h)}</text><line x1="${x0+(x-p.fieldX/2)*sx}" x2="${x0+(x+p.fieldX/2)*sx}" y1="${y}" y2="${y}" stroke="${colors[i]}" opacity=".55"/><circle class="laser-flash" cx="${x0+x*sx}" cy="${y}" r="8" fill="${colors[i]}" opacity="0"/></g>`;
    }).join('');
    const cellSVG=g.cells.map(c=>{
      const y=Math.min(p.direction*c.y,p.direction*(c.y+c.height))*sy;
      return `<g class="moving-cell" data-cell="${c.id}"><rect x="${x0+c.x*sx}" y="${y}" width="${c.width*sx}" height="${c.height*sy}" rx="2" fill="#142d3c" stroke="#497086" stroke-width=".65"/><text class="cell-label" x="${x0+(c.x+c.width/2)*sx}" y="${p.direction*(c.y+c.height/2)*sy+3}" text-anchor="middle">C${c.id}</text></g>`;
    }).join('');
    const pointSVG=result.nodes.filter(n=>Number.isFinite(n.x)).map(n=>`<g class="moving-point" data-head="${n.head}"><circle cx="${x0+n.x*sx}" cy="${p.direction*n.y*sy}" r="5" fill="#4ed7e8" stroke="${colors[n.head-1]}" stroke-width="2"/><text class="point-label" x="${x0+n.x*sx+8}" y="${p.direction*n.y*sy-4}">H${n.head}</text></g>`).join('');
    $('machine-scene').innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="machine-title"><title id="machine-title">전체 Cell과 검사점이 있는 Glass가 Y 방향으로 통과하고 Review Camera는 X축으로 이동합니다.</title><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1b3242" stroke-width=".6"/></pattern><clipPath id="machine-clip"><rect x="1" y="50" width="${W-2}" height="${H-72}"/></clipPath></defs><rect width="${W}" height="${H}" rx="8" fill="#09151f"/><rect x="1" y="50" width="${W-2}" height="${H-72}" fill="url(#grid)"/><text class="annotation" x="24" y="27">장비 고정 좌표 / Head &amp; ATM Box 고정 / 이동 궤적은 명목값</text><g clip-path="url(#machine-clip)"><rect x="${x0-20}" y="50" width="${p.glassX*sx+40}" height="${H-90}" fill="#101f2d" opacity=".4"/><g id="moving-glass"><rect x="${x0}" y="${p.direction<0?-p.glassY*sy:0}" width="${p.glassX*sx}" height="${p.glassY*sy}" rx="6" fill="#153342" fill-opacity=".72" stroke="#4ed7e8" stroke-width="2"/><text id="sheet-id" x="${x0+12}" y="${p.direction<0?-p.glassY*sy+18:18}" fill="#4ed7e8" font-size="14" font-weight="700">GLASS 1</text>${cellSVG}${pointSVG}</g>${hp}<rect x="${x0-20}" y="${camY-43}" width="${p.glassX*sx+40}" height="86" rx="8" fill="#18343f" fill-opacity=".45" stroke="#4ed7e8"/><line x1="${x0-15}" x2="${x0+p.glassX*sx+15}" y1="${camY}" y2="${camY}" stroke="#4ed7e8" stroke-dasharray="7 5"/><text x="${x0+8}" y="${camY-27}" fill="#91e9f1" font-size="12">ATM BOX · Review X rail · Camera Y 고정</text><g id="review-camera"><rect x="-15" y="${camY-20}" width="30" height="40" rx="6" fill="#4ed7e8" stroke="#d9feff" stroke-width="1.5"/><circle cy="${camY}" r="8" fill="#0b2533"/><circle id="capture-flash" cy="${camY}" r="22" fill="none" stroke="#67dfa9" stroke-width="3" opacity="0"/></g><path d="M${W-58},400 v70 m-7,-9 l7,9 l7,-9" stroke="#91adbe" fill="none" stroke-width="2"/><text class="annotation" x="${W-58}" y="490" text-anchor="middle">기판 진행</text><text class="annotation" x="${W-58}" y="509" text-anchor="middle">${p.direction<0?'축 −Y':'축 +Y'}</text></g><text id="machine-live" class="annotation" x="24" y="${H-10}">—</text></svg>`;
    $('machine-scene').dataset.x0=x0;$('machine-scene').dataset.sx=sx;$('machine-scene').dataset.sy=sy;$('machine-scene').dataset.cy=camY;
    const mapW=p.glassX+190,mapH=p.glassY+160;
    const mapCells=g.cells.map(c=>`<g class="map-cell" data-cell="${c.id}"><rect x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}" rx="3" fill="#163143" stroke="#63859a" stroke-width="1.1"/>${p.holes.map(a=>`<rect x="${c.x+a[0]}" y="${c.y+a[1]}" width="${a[2]}" height="${a[3]}" fill="#ff7f79" opacity=".25"/>`).join('')}<text class="cell-label" x="${c.x+c.width/2}" y="${c.y+c.height/2+4}" text-anchor="middle" style="font-size:19px">C${c.id}</text></g>`).join('');
    const mapPoints=result.nodes.filter(n=>Number.isFinite(n.x)).map(n=>`<g class="map-point" data-head="${n.head}"><circle cx="${n.x}" cy="${n.y}" r="10" fill="#4ed7e8" stroke="${colors[n.head-1]}" stroke-width="3"/><text class="point-label" x="${n.x+14}" y="${n.y+(n.row>g.rows/2?24:-10)}" style="font-size:19px">H${n.head}</text><title>${head(n.head)} / C${n.cell} / Global ${f(n.x,4)},${f(n.y,4)}</title></g>`).join('');
    const stripe=Array.from({length:8},(_,i)=>{const x=p.akX+p.head1AKX+i*p.headPitchX-p.referenceOffsetX-p.fieldX/2;return `<rect x="${Math.max(0,x)}" y="0" width="${Math.max(0,Math.min(p.glassX,x+p.fieldX)-Math.max(0,x))}" height="${p.glassY}" fill="${colors[i]}" opacity=".035"/>`;}).join('');
    $('global-map').innerHTML=`<svg viewBox="-55 -80 ${mapW} ${mapH}" role="img" aria-labelledby="map-title"><title id="map-title">${g.cells.length} Cell 전체 기판 글로벌 좌표와 고정 ${result.requested}점</title><rect x="-55" y="-80" width="${mapW}" height="${mapH}" rx="10" fill="#09151f"/><text class="annotation" x="0" y="-43" style="font-size:21px">Glass ${p.glassX} × ${p.glassY} mm · ${p.cellCols}열 × ${p.cellRows}행</text><rect class="selectable" x="0" y="0" width="${p.glassX}" height="${p.glassY}" fill="#0e202d" stroke="#4ed7e8" stroke-width="2"/>${stripe}${mapCells}<g id="material-window"><line x1="0" x2="${p.glassX}" y1="0" y2="0" stroke="#4ed7e8" stroke-width="2" stroke-dasharray="12 9"/><text x="5" y="-14" font-size="18" fill="#4ed7e8">현재 Review 통과</text></g>${mapPoints}<text x="${p.glassX+16}" y="${p.glassY/2}" style="font-size:20px" fill="#a1b7c5" transform="rotate(90 ${p.glassX+16} ${p.glassY/2})">+Y · 기판 글로벌 / 축 좌표와 구분</text><text class="annotation" x="0" y="${p.glassY+43}" style="font-size:20px">마스킹(옅은 적색) / 클릭하여 선택 Head의 점 지정</text></svg>`;
    $('global-map').querySelector('svg').addEventListener('click',event=>{
      if(!result)return;
      const svg=event.currentTarget,pt=svg.createSVGPoint();pt.x=event.clientX;pt.y=event.clientY;
      const q=pt.matrixTransform(svg.getScreenCTM().inverse());
      if(q.x>=0&&q.y>=0&&q.x<=p.glassX&&q.y<=p.glassY)snap(Number($('map-head').value),q.x,q.y,'snap-result');
    });
    renderChart();
    const title=document.querySelector('#global-map').previousElementSibling?.querySelector('h2');if(title)title.textContent=`기판 글로벌 좌표 · ${g.cells.length} Cell`;
  }
  function renderChart() {
    const c=current(),pass=c.pass,path=c.path,t0=-p.preTime,t1=result.profile.total+.2,W=1100,H=255,left=65,right=22;
    const tx=t=>left+(t-t0)/(t1-t0)*(W-left-right),vy=v=>92-v/Math.max(1,result.profile.peak)*57;
    const yx=x=>205-(x-p.xMin)/(p.xMax-p.xMin)*64;
    const times=Array.from({length:321},(_,i)=>t0+(t1-t0)*i/320);
    const py=times.map(t=>`${f(tx(t),2).replace(/,/g,'')},${f(vy(result.profile.at(t).v),2).replace(/,/g,'')}`).join(' ');
    const extra=path.segments?path.segments.flatMap(s=>[s.start,s.end]):[];
    const xp=[...times,...extra,...pass.nodes.flatMap(n=>[n.cmd,n.expEnd])].filter(t=>t>=t0&&t<=t1).sort((a,b)=>a-b);
    const px=xp.map(t=>`${tx(t)},${yx(path.at(t).x)}`).join(' ');
    const ticks=Array.from({length:7},(_,i)=>t0+(t1-t0)*i/6);
    $('motion-chart').innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Stage Y 속도와 Review X 위치의 같은 시간축 그래프"><rect width="${W}" height="${H}" rx="6" fill="#0a151f"/>${ticks.map(t=>`<line x1="${tx(t)}" x2="${tx(t)}" y1="26" y2="211" stroke="#213b4b"/><text x="${tx(t)}" y="235" text-anchor="middle" fill="#9eb5c4" font-size="11">${f(t,1)}</text>`).join('')}<text x="12" y="21" font-size="12" fill="#67dfa9">Stage |VY| (mm/s)</text><text x="12" y="123" font-size="12" fill="#4ed7e8">Review X (mm)</text><text x="1046" y="253" font-size="11" fill="#9eb5c4">시간 (s)</text><text x="6" y="39" fill="#9eb5c4" font-size="10">${f(result.profile.peak,0)}</text><text x="30" y="94" fill="#9eb5c4" font-size="10">0</text><text x="6" y="144" fill="#9eb5c4" font-size="10">${f(p.xMax,0)}</text><text x="6" y="207" fill="#9eb5c4" font-size="10">${f(p.xMin,0)}</text><polyline points="${py}" fill="none" stroke="#67dfa9" stroke-width="2"/><polyline points="${px}" fill="none" stroke="#4ed7e8" stroke-width="2"/>${pass.nodes.map(n=>`<line x1="${tx(n.cross)}" x2="${tx(n.cross)}" y1="30" y2="213" stroke="${colors[n.head-1]}" stroke-dasharray="3 4" opacity=".55"/><circle cx="${tx(n.cross)}" cy="${yx(n.reviewX)}" r="4" fill="${colors[n.head-1]}"/><text x="${tx(n.cross)}" y="${n.head%2?110:126}" fill="${colors[n.head-1]}" font-size="10" text-anchor="middle">H${n.head}</text>`).join('')}<line id="chart-cursor" x1="${tx(c.local)}" x2="${tx(c.local)}" y1="26" y2="214" stroke="#edf7fb" stroke-width="1.5"/></svg>`;
    $('motion-chart').dataset.t0=t0;$('motion-chart').dataset.t1=t1;
    $('event-strip').innerHTML=pass.nodes.map(n=>`<span>${head(n.head)} @ ${f(n.cross,3)} s / C${n.cell}</span>`).join('');
  }
  function renderFrame() {
    if(!result)return;
    const c=current(),s=result.profile.at(c.local),preparingNext=plan&&c.local>=result.tact-p.preTime&&(c.index<plan.count-1||$('loop').checked);
    const cam=preparingNext?paths[(c.index+1)%plan.count].at(c.local-result.tact):c.path.at(c.local),targetHeads=new Set(c.pass.nodes.map(n=>n.head));
    if(plan&&c.index!==shownGlass){shownGlass=c.index;renderChart();}
    const live=c.local<=result.profile.total,phase=c.local<0?'X 사전 준비':!live?'물류·Align·Stage 복귀'+(preparingNext?' · 다음 Glass X 준비':' (시간만 반영)'):s.phase+(c.local>=result.firstLaser&&c.local<=result.lastLaser?' · MOF 가공':'');
    $('glass-label').textContent=plan?`Glass ${c.index+1} / ${plan.count}`:'운전 불가';
    $('group-label').textContent=c.pass.nodes.length?c.pass.nodes.map(n=>head(n.head)).join(' → '):'성립한 검사 그룹 없음';
    $('phase-label').textContent=phase;$('time-label').textContent=`Glass ${f(c.local,3)} s / Cycle ${f(Math.max(0,clock),2)} s`;
    $('progress').value=plan?Math.max(0,Math.min(1000,(clock+p.preTime)/(plan.count*result.tact+p.preTime)*1000)):0;
    const scene=$('machine-scene'),sx=Number(scene.dataset.sx),sy=Number(scene.dataset.sy),x0=Number(scene.dataset.x0),cy=Number(scene.dataset.cy);
    const board=$('moving-glass');if(board){board.setAttribute('transform',`translate(0 ${cy-(s.q-p.reviewAKY)*sy-p.direction*p.akY*sy})`);board.setAttribute('opacity',live?1:0);}
    if($('sheet-id'))$('sheet-id').textContent=`GLASS ${c.index+1} · ${g.cells.length} CELLS`;
    if($('review-camera'))$('review-camera').setAttribute('transform',`translate(${x0+(cam.x-p.reviewAKX+p.akX)*sx} 0)`);
    let captured=0,laserCount=0;
    for(const n of result.nodes) {
      const shot=Number.isFinite(n.laserTime)&&c.local>=n.laserTime;
      const assigned=targetHeads.has(n.head),done=assigned&&c.local>=n.expEnd&&n.valid;
      if(shot)laserCount++;if(done)captured++;
      const color=!n.geometryValid?'#ff7f79':done?'#67dfa9':shot?'#f6bd5c':assigned?'#4ed7e8':'#556b79';
      for(const selector of [`.moving-point[data-head="${n.head}"] circle`,`.map-point[data-head="${n.head}"] circle`]){
        const el=document.querySelector(selector);if(el){el.setAttribute('fill',color);el.setAttribute('opacity',assigned?1:.60);}
      }
      const laser=document.querySelector(`.fixed-head[data-head="${n.head}"] .laser-flash`);if(laser)laser.setAttribute('opacity',live&&Math.abs(c.local-n.laserTime)<.2?.95:0);
    }
    for(const cell of g.cells) {
      const completed=result.nodes.some(n=>n.cell===cell.id&&targetHeads.has(n.head)&&c.local>=n.expEnd&&n.valid);
      for(const selector of [`.moving-cell[data-cell="${cell.id}"] rect`,`.map-cell[data-cell="${cell.id}"]>rect`]){
        const el=document.querySelector(selector);if(el){el.setAttribute('fill',completed?'#124b3e':'#163143');el.setAttribute('stroke',completed?'#67dfa9':'#52768c');}
      }
    }
    const flashing=c.pass.nodes.some(n=>c.local>=n.cross&&c.local-n.cross<.2);
    if($('capture-flash'))$('capture-flash').setAttribute('opacity',flashing?1:0);
    if($('machine-live'))$('machine-live').textContent=`StageQ ${f(s.q,3)} mm · |VY| ${f(s.v,2)} mm/s · ReviewX ${f(cam.x,3)} mm · ${cam.phase}`;
    const materialY=p.akY+p.direction*(s.q-p.reviewAKY),window=$('material-window');
    if(window){window.setAttribute('transform',`translate(0 ${materialY})`);window.setAttribute('display',live&&materialY>=0&&materialY<=p.glassY?'inline':'none');window.querySelector('text').textContent='Review 통과 Y '+f(materialY,2)+' mm';}
    $('live-status').innerHTML=`<div>Stage Y 절대 위치<strong>${f(s.q,3)} mm</strong></div><div>Review X 위치 / 상태<strong>${f(cam.x,3)} mm · ${cam.phase}</strong></div><div>선택 가공점 완료<strong>${laserCount} / ${result.requested}</strong></div><div>이번 Glass 촬영 완료<strong>${captured} / ${c.pass.nodes.length}</strong></div>`;
    const cursor=$('chart-cursor');if(cursor){const t0=Number($('motion-chart').dataset.t0),t1=Number($('motion-chart').dataset.t1),x=65+(c.local-t0)/(t1-t0)*1013;cursor.setAttribute('x1',x);cursor.setAttribute('x2',x);cursor.setAttribute('opacity',live?1:0);}
    $('cycle-program').querySelectorAll('[data-glass]').forEach(el=>el.classList.toggle('active',Number(el.dataset.glass)===c.index));
    $('prev-glass').disabled=!plan||c.index===0;$('next-glass').disabled=!plan||c.index===plan.count-1;
  }
  function tick(now) {
    if(playing&&plan&&result){
      if(lastFrame)clock+=Math.min(.1,(now-lastFrame)/1000)*Number($('play-rate').value);
      lastFrame=now;const end=plan.count*result.tact;
      if(clock>=end){if($('loop').checked){clock=0;shownGlass=-1;}else {clock=end;stop();}}
      renderFrame();
    }
    requestAnimationFrame(tick);
  }
  function snap(h,x,y,where) {
    if(!result||![x,y].every(Number.isFinite))return;
    const old=defs.find(d=>d.head===h),beam=Math.min(old.beam,p.split*p.split),nearest=F.nearestPoint(h,x,y,beam,p,g);
    if(!nearest){$(where).textContent='해당 Head의 유효 가공점이 없습니다.';return;}
    defs=defs.map(d=>d.head===h?nearest.definition:d);noticeExtra='';recalc();
    const n=result.nodes.find(n=>n.head===h);
    $(where).textContent=`${head(h)} / C${n.cell} → (${f(n.x,4)}, ${f(n.y,4)}) mm · 목표와 거리 ${f(nearest.distance,4)} mm`;
    $('desired-x').value=n.x;$('desired-y').value=n.y;$('coordinate-head').value=h;$('map-head').value=h;
  }
  function calculateInverse() {
    if(!result)return;
    $('calculate-inverse').disabled=true;
    try {
      inv=F.inverse(result,defs);
      const card=(label,value,note,key='',v=null)=>`<div><span>${label}</span><strong>${value}</strong><small>${note}</small>${key&&Number.isFinite(v)?`<button data-suggest="${key}" data-value="${v}">입력에 적용 후 재검증</button>`:''}</div>`;
      const sw=inv.speedWindow;
      $('inverse-results').innerHTML=`${inv.messages.map(m=>`<div class="notice warn">${esc(m)}</div>`).join('')}<div class="inverse-cards">${card('Stage Y · 전체 포인트 동시 성립 구간',sw?f(sw.min,2)+' ~ '+f(sw.max,2)+' mm/s':'구간 없음',sw?esc(sw.note):'다른 조건 고정. 0.5~2000 mm/s 표본 탐색에서 해를 찾지 못한 것이며, 모든 설계의 불가능을 의미하지 않습니다.',sw?'vy':'',sw?Math.max(sw.min,Math.min(p.vy,sw.max))*.999999+sw.min*.000001:null)}${card('Review X · 인접 구간 최소속도',inv.requireVX===null?'속도만으로 불가':f(inv.requireVX,2)+' mm/s','현재 X 가감속 고정. 최초 Park 이동·반복 Park 복귀 등은 적용 후 별도 재검증합니다.','vx',inv.requireVX>0?Math.max(p.vx,inv.requireVX*1.001):null)}${card('Camera · 인접 구간 최소 FPS',inv.requiredFPS===null?'동시 도착 충돌':f(inv.requiredFPS,2)+' Hz','노출·Readout 및 X 이동을 바꾸지 않습니다. FPS만으로 X 충돌은 해결되지 않습니다.','fps',inv.requiredFPS>0?Math.max(p.fps,inv.requiredFPS*1.001):null)}${card('Blur 조건 · 노출 상한',f(inv.exposureLimit,3)+' µs',`현재 Stage 최대 노출속도 기준. Camera 최소노출 ${p.minExposureUs} µs.`,inv.exposureLimit>=p.minExposureUs?'exposureUs':'',inv.exposureLimit>=p.minExposureUs?Math.min(p.exposureUs,inv.exposureLimit):null)}${card('최초 X 선행 준비시간 하한',f(inv.requiredPreTime,3)+' s','기하학적 첫 Review 시점에서 역산. 최초 위치·정착·Guard 포함.','preTime',Math.max(p.preTime,inv.requiredPreTime+.01))}${card('좌표 유지 / Glass 분할',plan?plan.count+' Glass':'점 선택 수정 필요','가감속·품질 제약을 유지하면서 현재 고정점을 순환 검사하는 대안입니다.')}</div><h3 style="margin-top:24px">인접 Point 간 역산</h3><p class="subtle">Y 제안은 연속 좌표의 필요 간격입니다. 실제 Cell의 유효 Shot/Branch로 스냅한 뒤 다시 검증해야 합니다. Head 번호 순서 제한도 유지합니다.</p><div class="table-wrap">${table(['구간','현재 ΔY (mm)','필요 ΔY (mm)','다음점 Y 하한 (mm)','X 최소속도 (mm/s)','가감속 동시 배율','FPS 하한','현재 상태'],inv.rows.map(r=>`<tr class="${r.valid?'pass':'fail'}"><td>${head(r.a)} → ${head(r.b)}</td><td>${f(r.dy,3)}</td><td>${f(r.minDyExact,3)}</td><td>${f(r.neededY,4)}</td><td>${r.vx===null?'가감속 하한':'≥ '+f(r.vx,2)}</td><td>${r.accelScale===null?'현재 Vx로 불가':'≥ '+f(r.accelScale,2)+' ×'}</td><td>${r.minFPS===null?'동시 도착':f(r.minFPS,2)}</td><td>${r.valid?'성립':esc(r.reasons.join(' / '))}</td></tr>`))}</div>`;
      $('inverse-results').querySelectorAll('[data-suggest]').forEach(el=>el.addEventListener('click',()=>{p[el.dataset.suggest]=Number(el.dataset.value);noticeExtra='역산 제안은 입력에 적용했으며 모든 조건을 다시 검증했습니다.';renderParams();recalc();}));
    }catch(error){$('inverse-results').textContent='역산 오류: '+error.message;}
    $('calculate-inverse').disabled=false;
  }
  function download(name,text,type) {
    const blob=new Blob([text],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  document.querySelectorAll('[data-preset]').forEach(el=>el.addEventListener('click',()=>{
    if(!result)return;defs=F.preset(el.dataset.preset,p,g);noticeExtra='예시 포인트를 설정했습니다. 입력 조건 변경 시 실제 성립 개수는 달라집니다.';recalc();
  }));
  $('auto-points').addEventListener('click',()=>{
    if(!result)return;
    const found=F.autoSelect(p,g);
    if(found){defs=found.definitions;noticeExtra=`후보 ${found.candidates}개에서 H01→H08 단일 Pass 배치를 찾았습니다. 최소 구간 여유 ${f(found.slack*1000,1)} ms. 전체 좌표 탐색의 전역 최적해는 아닙니다.`;recalc();}
    else {noticeExtra='현재 후보 탐색에서 8점 단일 Pass 배치를 찾지 못했습니다. 기존 포인트를 유지합니다. Row1 제한·Y 속도·블러·시간 예산을 확인하세요.';renderNotice();}
  });
  $('reset-params').addEventListener('click',()=>{p=F.copyDefaults();g=F.makeGeometry(p);defs=F.autoSelect(p,g)?.definitions||F.preset('four',p,g);noticeExtra='';renderParams();recalc();});
  $('plan-cap').addEventListener('change',()=>{if(!result)return;stop();clock=-p.preTime;shownGlass=-1;choosePlan();renderChart();renderFrame();});
  $('play').addEventListener('click',()=>{if(!plan)return;if(playing)stop();else {if(clock>=plan.count*result.tact)clock=-p.preTime;playing=true;lastFrame=0;$('play').textContent='일시정지';}});
  $('restart').addEventListener('click',()=>{stop();clock=-p.preTime;shownGlass=-1;renderFrame();});
  for(const [id,delta] of [['prev-glass',-1],['next-glass',1]])$(id).addEventListener('click',()=>{if(!plan)return;stop();clock=Math.max(0,Math.min(plan.count-1,current().index+delta))*result.tact;renderFrame();});
  $('progress').addEventListener('input',()=>{if(!plan)return;stop();clock=-p.preTime+Number($('progress').value)/1000*(plan.count*result.tact+p.preTime);renderFrame();});
  document.querySelectorAll('[data-tab]').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('[data-tab]').forEach(e=>e.classList.toggle('active',e===el));
    document.querySelectorAll('.tab-panel').forEach(e=>e.hidden=e.id!=='panel-'+el.dataset.tab);
    if(el.dataset.tab==='inverse'&&result&&!inv)calculateInverse();
  }));
  for(const id of ['map-head','coordinate-head'])$(id).innerHTML=Array.from({length:8},(_,i)=>`<option value="${i+1}">${head(i+1)}</option>`).join('');
  $('snap-coordinate').addEventListener('click',()=>snap(Number($('coordinate-head').value),Number($('desired-x').value),Number($('desired-y').value),'coordinate-snap'));
  $('calculate-inverse').addEventListener('click',calculateInverse);
  $('save-config').addEventListener('click',()=>download('FlyingReview_8Head_conditions.json',JSON.stringify({schemaVersion:1,scope:'8_HEAD_FIXED_POINT',parameters:p,points:defs,assumptions:'Nominal Model1 Rotation0; trapezoidal Stage/X; no hardware I/O'},null,2),'application/json'));
  $('load-config').addEventListener('change',async event=>{
    const input=event.target,file=input.files[0];if(!file)return;
    try {
      if(file.size>1e6)throw new Error('JSON 파일은 1 MB 이하여야 합니다.');
      const data=JSON.parse(await file.text());if(data.schemaVersion!==1||data.scope!=='8_HEAD_FIXED_POINT')throw new Error('시뮬레이터 조건 JSON 형식이 아닙니다.');
      const next=F.copyDefaults();for(const k of Object.keys(next))if(Object.prototype.hasOwnProperty.call(data.parameters||{},k))next[k]=data.parameters[k];
      for(const k of Object.keys(next))if(typeof F.defaults[k]==='boolean'&&typeof next[k]!=='boolean')throw new Error(k+'는 true/false 값이어야 합니다.');
      if(!['arrival','head'].includes(next.order))throw new Error('촬영 순서 값 오류');
      const errors=F.validate(next);if(errors.length)throw new Error(errors.join('\n'));
      if(!Array.isArray(data.points)||data.points.length!==8||new Set(data.points.map(d=>d.head)).size!==8)throw new Error('H01~H08 고정점이 하나씩 있어야 합니다.');
      const points=data.points.map(d=>{
        if(![d.head,d.cell,d.col,d.row,d.beam].every(Number.isInteger)||d.head<1||d.head>8)throw new Error('포인트 숫자 형식 오류');
        return {head:d.head,cell:d.cell,col:d.col,row:d.row,beam:d.beam,enabled:d.enabled!==false};
      }).sort((a,b)=>a.head-b.head);
      const geo=F.makeGeometry(next);F.evaluate(next,points,geo);
      p=next;g=geo;defs=points;noticeExtra='조건 JSON을 불러와 다시 검증했습니다.';renderParams();recalc();
    }catch(error){$('error-box').hidden=false;$('error-box').textContent='조건 불러오기 실패 (기존 조건 유지): '+error.message;}
    input.value='';
  });
  $('csv-export').addEventListener('click',()=>{
    if(!result)return;
    const rows=[['Glass','Sequence','Head','Cell','Shot','Branch','GlobalX_mm','GlobalY_mm','ReviewX_mm','StageQ_mm','Laser_s','Trigger_s','ExposureStart_s','ExposureEnd_s','Blur_um','PositionError_um','Status']];
    const groups=plan?plan.groups:[result.all];groups.forEach((pass,i)=>pass.nodes.forEach((n,j)=>rows.push([i+1,j+1,n.head,n.cell,n.shot,n.beam,n.x,n.y,n.reviewX,n.targetQ,n.laserTime,n.cmd,n.expStart,n.expEnd,n.blur,n.positionError,plan?'PLANNED_VALID':'NOT_EXECUTABLE'])));
    download('FlyingReview_schedule.csv','\uFEFF'+rows.map(row=>row.map(v=>v??'').join(',')).join('\r\n'),'text/csv;charset=utf-8');
  });
  $('expand-view').addEventListener('click',()=>{
    const panel=$('machine-scene').closest('.visual-panel'),open=!panel.classList.contains('expanded');panel.classList.toggle('expanded',open);$('expand-view').textContent=open?'화면 접기':'화면 확대';document.body.style.overflow=open?'hidden':'';
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.querySelector('.expanded'))$('expand-view').click();});
  // Read-only diagnostic interface for reproducible tests; no hardware calls.
  window.FlyingReviewApp={getState:()=>({parameters:JSON.parse(JSON.stringify(p)),points:JSON.parse(JSON.stringify(defs)),maxPerPass:result?.maxPerPass,planCount:plan?.count,clock,playing,currentGlass:current().index+1}),seek:t=>{stop();clock=t;renderFrame();}};
  renderParams();recalc();requestAnimationFrame(tick);
})();
