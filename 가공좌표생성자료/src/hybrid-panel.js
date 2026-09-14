(function(root){
'use strict';
root.createMaskingPanel=function(engine,callbacks){
 const get=id=>document.getElementById(id),inputs=new Map(),colors=['#55d5db','#bc9cff','#fac36a','#73d89e','#f49aad'];
 let currentEntryMode='firstPixel';
 let current=0,models=engine.defaultHybrid().models,last=null,baseGates=null;
 for(const p of engine.PARAMETER_DEFINITIONS){
  const l=document.createElement('label'),title=document.createElement('span'),code=document.createElement('small'),n=document.createElement('input');l.className='field';title.textContent=`${p.label} (${p.unit})`;code.className='parameter-key';n.type='number';n.step=p.group==='hole-count'?'1':'0.0001';n.dataset.maskParam=p.key;n.id=`mask-${p.key}`;n.placeholder='미입력';l.append(title,code,n);inputs.set(p.key,{node:n,code});get(p.group==='edge'?'mask-edge-inputs':p.group==='hole-count'?'mask-count-input':'mask-hole-inputs').append(l);
 }
 function gridRecipe(){const r={...engine.BASELINE_RECIPE};for(const k of ['cellColumnCount','cellRowCount','cellPitchXmm','cellPitchYmm','pixelSizeMmPerPx','commandPitchPx','doeBranchCountPerAxis'])r[k]=Number(document.querySelector(`[data-recipe-field="${k}"]`).value);return r;}
 function setCells(cs){get('cell-model-rows').replaceChildren();const defaults=engine.defaultCellConfigurations(engine.BASELINE_RECIPE);for(let i=0;i<50;i++){
  const canonical=cs[i]||defaults[i],c=currentEntryMode==='shotCenter'?convertEntry(canonical,true):canonical,tr=document.createElement('tr'),id=document.createElement('th');tr.dataset.cell=String(i+1);id.textContent=`Cell ${i+1}`;tr.append(id);
  for(const k of ['alignToFirstPixelXmm','modelType','alignToFirstPixelYmm','rotationDeg']){const td=document.createElement('td'),n=document.createElement(k==='modelType'?'select':'input');n.dataset.cellField=k;n.setAttribute('aria-label',`Cell ${i+1} ${k}`);if(k==='modelType')for(let m=1;m<=5;m++)n.append(new Option(`M${m}`,String(m)));else{n.type='number';n.step=k==='rotationDeg'?'0.01':'0.0001';}n.value=c[k];td.append(n);tr.append(td);}get('cell-model-rows').append(tr);
 }}
 function rawCells(){return [...get('cell-model-rows').rows].map(tr=>Object.fromEntries([...tr.querySelectorAll('[data-cell-field]')].map(n=>[n.dataset.cellField,n.value])));}
 function convertEntry(c,toCenter){if(c.alignToFirstPixelXmm===''||c.alignToFirstPixelYmm==='')return c;return engine.convertCellOriginEntry(c,gridRecipe(),toCenter);}
 function cells(){return rawCells().map(c=>currentEntryMode==='shotCenter'?convertEntry(c,false):c);}
 function originHelp(){get('originEntryHelp').textContent=currentEntryMode==='shotCenter'?'표의 X/Y는 Align key에서 확인된 A까지의 거리입니다. 내부 저장 시 첫 픽셀 거리로 환산하므로 A에 C26이 다시 더해지지 않습니다.':'표의 X/Y는 Align key에서 첫 픽셀까지의 거리입니다. 회전된 C26을 한 번 더해 A를 계산합니다.';}
 get('cellOriginEntryMode').addEventListener('change',()=>{const canonical=cells();currentEntryMode=get('cellOriginEntryMode').value;setCells(canonical);originHelp();dirty();});
 function saveEditor(){const m={};for(const [k,{node}]of inputs)m[k]=node.value;models[current]=m;}
 function updateEnabled(){const on=get('mask-enabled').checked,count=Number(inputs.get('MASKING_HOLE_NUMBER').node.value);for(const p of engine.PARAMETER_DEFINITIONS){const n=inputs.get(p.key).node;n.disabled=!on||(p.group==='hole'&&p.hole>count);n.parentElement.hidden=p.group==='hole'&&p.hole>count;}for(const id of ['mask-beam-radius','mask-position-margin','mask-doe-rotation'])get(id).disabled=!on;}
 function showEditor(){for(const [k,{node,code}]of inputs){node.value=models[current]?.[k]??(k==='MASKING_HOLE_NUMBER'?0:'');code.textContent=`MODEL${current+1}_${k}`;}updateEnabled();}
 function apply(input={},policy={},cs,entryMode='firstPixel'){currentEntryMode=entryMode==='shotCenter'?'shotCenter':'firstPixel';get('cellOriginEntryMode').value=currentEntryMode;originHelp();const h={...engine.defaultHybrid(),...input};models=Array.from({length:5},(_,i)=>({...h.models[i]}));current=0;get('model-editor').value='1';get('model-count').value=h.CELL_MODEL_TYPE_COUNT;get('mask-enabled').checked=[true,1,'true'].includes(h.enabled);get('mask-beam-radius').value=h.beamRadiusMm??'';get('mask-position-margin').value=h.positionMarginMm??'';get('mask-doe-rotation').value=h.doeRotationDeg??0;get('base-center-gate').value=policy.centerGate??'ON';get('base-repeat-gate').value=policy.repeatGate??'UNRESOLVED';baseGates=policy.baseGates?{...policy.baseGates}:null;setCells(cs?.length?cs:engine.defaultCellConfigurations(gridRecipe()));showEditor();}
 function read(){saveEditor();return{masking:{enabled:get('mask-enabled').checked,CELL_MODEL_TYPE_COUNT:get('model-count').value,models,beamRadiusMm:get('mask-beam-radius').value,positionMarginMm:get('mask-position-margin').value,doeRotationDeg:get('mask-doe-rotation').value},cellConfigurations:cells(),cellOriginEntryMode:currentEntryMode,laserPolicy:{centerGate:get('base-center-gate').value,repeatGate:get('base-repeat-gate').value,...(baseGates?{baseGates}:{})}};}
 function dirty(){updateEnabled();last=null;get('exportPlanButton').disabled=true;callbacks.onDirty();}
 get('model-editor').addEventListener('change',()=>{saveEditor();current=Number(get('model-editor').value)-1;showEditor();});
 for(const ev of ['input','change'])get('maskingInputs').addEventListener(ev,e=>{if(e.target.id!=='model-editor')dirty();});
 for(const ev of ['input','change'])get('cellConfigurations').addEventListener(ev,dirty);
 get('laserPolicyInputs').addEventListener('change',dirty);
 get('loadMaskExample').addEventListener('click',()=>{const cs=engine.defaultCellConfigurations(gridRecipe());cs.forEach((v,i)=>v.modelType=i%5+1);apply(engine.makeExampleMasking(),{centerGate:'ON',repeatGate:'OFF'},cs);dirty();callbacks.onGenerate();});
 get('loadDiagramExample').addEventListener('click',()=>{apply(engine.makeDiagramMasking(gridRecipe()),{centerGate:'ON',repeatGate:'OFF'},engine.defaultCellConfigurations(gridRecipe()));dirty();callbacks.onGenerate();get('maskViewCell').value='1';if(last)draw(last);});
 get('clearMaskInputs').addEventListener('click',()=>{apply(engine.defaultHybrid(),{},cells());dirty();});
 get('resetCellGrid').addEventListener('click',()=>{setCells(engine.defaultCellConfigurations(gridRecipe()));dirty();});
 get('exportPpidParameters').addEventListener('click',()=>{try{callbacks.download('PPID_Cell모델_입력값.json',JSON.stringify(engine.exportFlatParameters({...gridRecipe(),...read()}),null,2),'application/json;charset=utf-8');}catch(e){callbacks.onError(e);}});
 get('maskViewCell').addEventListener('change',()=>{if(last)draw(last);});
 get('exportPlanButton').addEventListener('click',()=>{if(last)try{callbacks.download('A3_LD_가공명령표.txt',engine.exportCommandPlan(last.records),'text/plain;charset=utf-8');}catch(e){callbacks.onError(e);}});
 function mofRecord(result){const head=Number(get('mofHead').value)||1,records=result.records.filter(p=>p.headNumber===head);const i=Math.max(0,Math.min(records.length-1,Number(get('mofSequence').value)-1));return records[i];}
 function updateMof(result,follow){const head=Number(get('mofHead').value)||1,rs=result.records.filter(p=>p.headNumber===head);get('mofSequence').max=String(Math.max(rs.length,1));const p=mofRecord(result);if(!p)return;get('mofSequence').value=String(p.sequenceNo);const status=get('mofCurrent'),style=engine.gatePresentation(p.laserGate);status.textContent=`${p.headId} · 순번 ${p.sequenceNo} / ${rs.length} · Cell ${p.cellId} / M${p.cellModelType} · ${style.action} · GY ${p.localGYmm.toFixed(4)} / GX ${p.gxStageMm.toFixed(4)} mm · ${p.maskReason||'형상 접촉 없음'}`;status.style.color=style.color;status.dataset.gate=p.laserGate;status.dataset.sequence=String(p.sequenceNo);status.dataset.cell=String(p.cellId);get('mofPrev').disabled=p.sequenceNo<=1;get('mofNext').disabled=p.sequenceNo>=rs.length;if(follow)get('maskViewCell').value=String(p.cellId);}
 get('mofHead').addEventListener('change',()=>{if(last){get('mofSequence').value='1';updateMof(last,true);draw(last);}});
 get('mofSequence').addEventListener('input',()=>{if(last){updateMof(last,true);draw(last);}});
 for(const [id,delta]of [['mofPrev',-1],['mofNext',1]])get(id).addEventListener('click',()=>{if(last){get('mofSequence').value=String(Number(get('mofSequence').value)+delta);updateMof(last,true);draw(last);}});
 function render(result){last=result;const s=result.masking.summary;const previousHead=get('mofHead').value;get('mofHead').replaceChildren();for(const h of result.summary.headSummaries.filter(h=>h.rawRecordCount>0))get('mofHead').append(new Option(h.headId,String(h.headNumber)));get('mofHead').value=[...get('mofHead').options].some(o=>o.value===previousHead)?previousHead:get('mofHead').options[0].value;
  get('maskSummary').textContent=`Cell 모델 ${result.masking.count}종 · Masking ${s.enabled?'사용':'미사용'} · 좌표 ${s.rawCount.toLocaleString()}개 · Masking으로 바뀐 좌표 ${s.coordinateChangeCount}개`;
  get('maskGateCounts').textContent=`On ${s.onCount.toLocaleString()} / Off ${s.offCount.toLocaleString()} / 미정 ${s.unresolvedCount.toLocaleString()}`;
  get('maskHitCounts').textContent=`접촉 Off: Raw ${s.maskedRawCount.toLocaleString()}개 · 고유 중심 ${s.maskedUniqueCount.toLocaleString()}개`;
  get('maskOrigin').textContent='모든 모델 거리의 기준은 각 Cell의 A=(0, 0)입니다. A가 빨간색 Off여도 원점과 좌표 순서는 유지합니다.';
  get('maskScope').textContent=`가공 사각형: DOE 명목 외곽 ${2*s.nominalHalfMm} × ${2*s.nominalHalfMm} mm (회전·여유 적용 전). 중심 간격 ${result.derived.commandSpacingMm} mm. 접촉한 샷 전체를 Off로 판정합니다.`;
  get('exportPlanButton').disabled=s.unresolvedCount>0;get('planStatus').textContent=s.unresolvedCount?'반복 레코드의 기존 Gate 정책을 지정하면 명령표를 저장할 수 있습니다.':'좌표·Gate 명령표 저장 가능 (장비 고유 Script 문법은 별도 연동)';
  const tb=get('model-summary');tb.replaceChildren();for(const m of s.perModel){const tr=document.createElement('tr');for(const v of [`M${m.modelType}`,m.cellCount,m.rawCount,m.maskedRawCount,m.onCount,m.offCount]){const td=document.createElement('td');td.textContent=v.toLocaleString();tr.append(td);}tr.style.borderLeft=`3px solid ${colors[m.modelType-1]}`;tb.append(tr);}
  const select=get('maskViewCell'),prev=select.value;select.replaceChildren(new Option('전체 Cell 배치','all'));for(let i=1;i<=result.derived.cellCount;i++)select.append(new Option(`Cell ${i} · M${result.masking.configs[i-1].modelType}`,String(i)));select.value=[...select.options].some(o=>o.value===prev)?prev:'all';[...get('cell-model-rows').rows].forEach((tr,i)=>tr.classList.toggle('unused-cell',i>=result.derived.cellCount));updateMof(result,false);draw(result);
 }
 function draw(result){
  const canvas=get('maskCanvas'),ctx=canvas.getContext('2d');if(!ctx)return;const w=Math.max(320,canvas.getBoundingClientRect().width||800),h=520,dpr=root.devicePixelRatio||1;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#0a151f';ctx.fillRect(0,0,w,h);
  const selected=get('maskViewCell').value,cell=selected==='all'?null:Number(selected),ps=cell?result.uniqueCenters.filter(p=>p.cellId===cell):result.uniqueCenters,frames=new Map();for(const p of ps)if(!frames.has(p.cellId))frames.set(p.cellId,p);
  const map=(p,x,y)=>{if(cell)return{x,y};const a=p.cellRotationDeg*Math.PI/180;return{x:p.maskOriginXmm+Math.cos(a)*x-Math.sin(a)*y,y:p.maskOriginYmm+Math.sin(a)*x+Math.cos(a)*y};};
  const loc=ps.map(p=>cell?{x:p.maskXmm,y:p.maskYmm}:{x:p.globalXmm,y:p.globalYmm});for(const p of frames.values()){const s=result.masking.models[p.cellModelType-1].shape;if(s)for(const x of [s.left,s.right])for(const y of [s.top,s.bottom])loc.push(map(p,x,y));}
  const pad=cell?2:25,minX=Math.min(...loc.map(p=>p.x))-pad,maxX=Math.max(...loc.map(p=>p.x))+pad,minY=Math.min(...loc.map(p=>p.y))-pad,maxY=Math.max(...loc.map(p=>p.y))+pad;
  const scale=Math.min((w-70)/(maxX-minX),(h-65)/(maxY-minY)),ox=35+(w-70-(maxX-minX)*scale)/2,oy=25+(h-65-(maxY-minY)*scale)/2,screen=q=>({x:ox+(q.x-minX)*scale,y:oy+(q.y-minY)*scale});
  for(const p of frames.values()){
   const model=result.masking.models[p.cellModelType-1],s=model.shape,o=screen(map(p,0,0));ctx.save();ctx.translate(o.x,o.y);ctx.rotate(cell?0:p.cellRotationDeg*Math.PI/180);ctx.scale(scale,scale);ctx.lineWidth=1.5/scale;ctx.strokeStyle=colors[p.cellModelType-1];
   if(s){ctx.beginPath();ctx.moveTo(s.left+s.up,s.top);ctx.lineTo(s.right-s.up,s.top);ctx.arcTo(s.right,s.top,s.right,s.top+s.up,s.up);ctx.lineTo(s.right,s.bottom-s.down);ctx.arcTo(s.right,s.bottom,s.right-s.down,s.bottom,s.down);ctx.lineTo(s.left+s.down,s.bottom);ctx.arcTo(s.left,s.bottom,s.left,s.bottom-s.down,s.down);ctx.lineTo(s.left,s.top+s.up);ctx.arcTo(s.left,s.top,s.left+s.up,s.top,s.up);ctx.closePath();ctx.fillStyle=colors[p.cellModelType-1]+'13';ctx.fill();ctx.stroke();for(const hole of model.holes){ctx.fillStyle='#ff7f7940';ctx.fillRect(hole.x,hole.y,hole.width,hole.height);ctx.strokeStyle='#ff7f79';ctx.strokeRect(hole.x,hole.y,hole.width,hole.height);}}
   ctx.restore();ctx.fillStyle=colors[p.cellModelType-1];ctx.font='11px sans-serif';ctx.fillText(`C${p.cellId} M${p.cellModelType}`,cell?25:o.x-8,cell?24:o.y-6);if(cell){ctx.strokeStyle='#fff';ctx.beginPath();ctx.moveTo(o.x-6,o.y);ctx.lineTo(o.x+6,o.y);ctx.moveTo(o.x,o.y-6);ctx.lineTo(o.x,o.y+6);ctx.stroke();ctx.fillStyle='#fff';ctx.fillText('A (0, 0)',o.x+8,o.y-10);}
  }
  for(const p of ps){const q=screen(cell?{x:p.maskXmm,y:p.maskYmm}:{x:p.globalXmm,y:p.globalYmm});ctx.fillStyle=engine.gatePresentation(p.laserGate).color;if(cell){const half=p.maskFootprintHalfMm*scale;ctx.globalAlpha=.3;ctx.fillRect(q.x-half,q.y-half,2*half,2*half);ctx.globalAlpha=1;ctx.strokeStyle=ctx.fillStyle;ctx.lineWidth=.7;ctx.strokeRect(q.x-half,q.y-half,2*half,2*half);}ctx.fillRect(q.x-1,q.y-1,2,2);}
  const cursor=mofRecord(result);if(cursor&&(!cell||cursor.cellId===cell)){const q=screen(cell?{x:cursor.maskXmm,y:cursor.maskYmm}:{x:cursor.globalXmm,y:cursor.globalYmm});ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(q.x,q.y,7,0,Math.PI*2);ctx.stroke();}
  ctx.fillStyle='#b9c9d2';ctx.font='12px sans-serif';ctx.fillText(`${cell?'Cell 내부':'전체 배치'} X → / Y ↓ (mm)`,25,h-12);
 }
 setCells(engine.defaultCellConfigurations());showEditor();originHelp();
 return{read,apply,render,draw,reset:()=>apply(engine.defaultHybrid())};
};
})(window);
