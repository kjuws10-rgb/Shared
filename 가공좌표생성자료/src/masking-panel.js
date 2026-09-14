(function (root) {
  'use strict';
  root.createMaskingPanel=function(engine,callbacks) {
    const get=id=>document.getElementById(id);
    const inputs=new Map();
    let lastResult=null;
    let baseGates=null;
    const field=(p)=>{
      const label=document.createElement('label');label.className='field';
      const title=document.createElement('span');title.textContent=`${p.label} (${p.unit})`;
      const code=document.createElement('small');code.className='parameter-key';code.textContent=p.key;
      const input=document.createElement('input');input.type='number';input.step=p.group==='hole-count'?'1':'0.0001';input.dataset.maskParam=p.key;input.id=`mask-${p.key}`;input.placeholder='미입력';
      label.append(title,code,input);inputs.set(p.key,input);return label;
    };
    const definition=key=>engine.PARAMETER_DEFINITIONS.find(p=>p.key===key);
    get('mask-count-input').append(field(definition('MASKING_HOLE_NUMBER')));
    for(const p of engine.PARAMETER_DEFINITIONS.filter(p=>p.group==='edge'))get('mask-edge-inputs').append(field(p));
    for(let i=1;i<=5;i++) {
      const group=document.createElement('div');group.className='mask-hole-group';group.id=`mask-hole-group-${i}`;
      const h=document.createElement('h4');h.textContent=`Hole ${i} · 중심 거리 / 전체 크기`;group.append(h);
      const grid=document.createElement('div');grid.className='input-grid';
      for(const suffix of ['X','Y','SIZE_X','SIZE_Y'])grid.append(field(definition(`MASKING_HOLE${i}_${suffix}`)));
      group.append(grid);get('mask-hole-inputs').append(group);
    }
    function updateEnabled() {
      const on=get('mask-enabled').checked,count=Number(inputs.get('MASKING_HOLE_NUMBER').value);
      for(const p of engine.PARAMETER_DEFINITIONS)inputs.get(p.key).disabled=!on||(p.group==='hole'&&p.hole>count);
      for(let i=1;i<=5;i++)get(`mask-hole-group-${i}`).hidden=i>count;
      for(const id of ['mask-beam-radius','mask-position-margin','mask-doe-rotation'])get(id).disabled=!on;
    }
    function apply(input={},policy={}) {
      get('mask-enabled').checked=input.enabled===true||input.enabled===1||input.enabled==='true';
      baseGates=policy.baseGates?{...policy.baseGates}:null;
      for(const [key,node] of inputs)node.value=input[key]??(key==='MASKING_HOLE_NUMBER'?0:'');
      get('mask-beam-radius').value=input.beamRadiusMm??'';
      get('mask-position-margin').value=input.positionMarginMm??'';
      get('mask-doe-rotation').value=input.doeRotationDeg??0;
      get('base-center-gate').value=policy.centerGate??'ON';get('base-repeat-gate').value=policy.repeatGate??'UNRESOLVED';
      updateEnabled();
    }
    function read() {
      const masking={enabled:get('mask-enabled').checked};
      for(const [key,node] of inputs)masking[key]=node.value;
      masking.beamRadiusMm=get('mask-beam-radius').value;masking.positionMarginMm=get('mask-position-margin').value;masking.doeRotationDeg=get('mask-doe-rotation').value;
      return {masking,laserPolicy:{centerGate:get('base-center-gate').value,repeatGate:get('base-repeat-gate').value,...(baseGates?{baseGates}:{})}};
    }
    function dirty() {updateEnabled();lastResult=null;get('exportPlanButton').disabled=true;callbacks.onDirty();}
    get('maskingInputs').addEventListener('input',dirty);
    get('maskingInputs').addEventListener('change',dirty);
    get('laserPolicyInputs').addEventListener('change',dirty);
    get('loadMaskExample').addEventListener('click',()=>{apply(engine.makeExampleMasking());dirty();callbacks.onGenerate();});
    get('clearMaskInputs').addEventListener('click',()=>{apply(engine.DEFAULT_MASKING);dirty();});
    get('maskViewCell').addEventListener('change',()=>{if(lastResult)draw(lastResult);});
    get('exportPlanButton').addEventListener('click',()=>{
      if(!lastResult)return;
      try{callbacks.download('A3_LD_가공명령표.txt',engine.exportCommandPlan(lastResult.records),'text/plain;charset=utf-8');}catch(error){callbacks.onError(error);}
    });
    function render(result) {
      lastResult=result;const s=result.masking.summary;
      get('maskSummary').textContent=`Masking ${s.enabled?'사용':'미사용'} · 좌표 ${s.rawCount.toLocaleString('ko-KR')}개 유지 · 좌표 변경 ${s.coordinateChangeCount}개`;
      get('maskGateCounts').textContent=`발진 조건 On ${s.onCount.toLocaleString('ko-KR')} / Off ${s.offCount.toLocaleString('ko-KR')} / 미정 ${s.unresolvedCount.toLocaleString('ko-KR')}`;
      get('maskHitCounts').textContent=`Masking 접촉: Raw ${s.maskedRawCount.toLocaleString('ko-KR')}개 · 공간 고유 중심 ${s.maskedUniqueCount.toLocaleString('ko-KR')}개`;
      get('maskScope').textContent=s.enabled?(s.scope==='NOMINAL_DOE_ENVELOPE'?'명목 DOE 판정 · 빔 크기·위치 오차 미반영':'입력 빔 반경·위치 여유 반영'):'Masking 미사용 · 기존 발진 정책 유지';
      get('maskOrigin').textContent=`고정 원점: 첫 Cell 첫 명목 가공 중심 (${s.originXmm.toFixed(4)}, ${s.originYmm.toFixed(4)}) mm · 판정 반폭 ${s.footprintHalfMm.toFixed(4)} mm`;
      get('exportPlanButton').disabled=s.unresolvedCount>0;
      get('planStatus').textContent=s.unresolvedCount>0?'반복 레코드의 기존 발진 정책을 지정하면 명령표를 저장할 수 있습니다.':'좌표 및 On/Off 명령표를 저장할 수 있습니다.';
      const select=get('maskViewCell'),previous=select.value;
      select.replaceChildren(new Option('전체 기판','all'));
      for(let i=1;i<=result.derived.cellCount;i++)select.append(new Option(`Cell ${i} 확대`,String(i)));
      select.value=[...select.options].some(o=>o.value===previous)?previous:'all';
      draw(result);
    }
    function draw(result) {
      const canvas=get('maskCanvas'),ctx=canvas.getContext('2d');if(!ctx)return;
      const width=Math.max(320,canvas.getBoundingClientRect().width||800),height=460,dpr=root.devicePixelRatio||1;
      canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);canvas.style.height=height+'px';ctx.setTransform(dpr,0,0,dpr,0,0);
      ctx.fillStyle='#0a151f';ctx.fillRect(0,0,width,height);
      const selection=get('maskViewCell').value,cell=selection==='all'?null:Number(selection);
      const points=cell?result.uniqueCenters.filter(p=>p.cellId===cell):result.uniqueCenters;
      const s=result.masking.shape;
      let minX=Math.min(...points.map(p=>p.maskXmm)),maxX=Math.max(...points.map(p=>p.maskXmm)),minY=Math.min(...points.map(p=>p.maskYmm)),maxY=Math.max(...points.map(p=>p.maskYmm));
      if(!cell&&s){minX=Math.min(minX,s.left);maxX=Math.max(maxX,s.right);minY=Math.min(minY,s.top);maxY=Math.max(maxY,s.bottom);}
      const pad=cell?1.8:Math.max((maxX-minX)*.035,3);minX-=pad;maxX+=pad;minY-=pad;maxY+=pad;
      const scale=Math.min((width-90)/(maxX-minX),(height-65)/(maxY-minY));
      const ox=48+(width-90-(maxX-minX)*scale)/2,oy=25+(height-65-(maxY-minY)*scale)/2;
      const x=v=>ox+(v-minX)*scale,y=v=>oy+(v-minY)*scale;
      ctx.save();ctx.beginPath();ctx.rect(40,18,width-65,height-45);ctx.clip();
      if(s) {
        ctx.beginPath();ctx.moveTo(x(s.left+s.up),y(s.top));ctx.lineTo(x(s.right-s.up),y(s.top));
        if(s.up)ctx.arc(x(s.right-s.up),y(s.top+s.up),s.up*scale,-Math.PI/2,0);else ctx.lineTo(x(s.right),y(s.top));
        ctx.lineTo(x(s.right),y(s.bottom-s.down));if(s.down)ctx.arc(x(s.right-s.down),y(s.bottom-s.down),s.down*scale,0,Math.PI/2);else ctx.lineTo(x(s.right),y(s.bottom));
        ctx.lineTo(x(s.left+s.down),y(s.bottom));if(s.down)ctx.arc(x(s.left+s.down),y(s.bottom-s.down),s.down*scale,Math.PI/2,Math.PI);else ctx.lineTo(x(s.left),y(s.bottom));
        ctx.lineTo(x(s.left),y(s.top+s.up));if(s.up)ctx.arc(x(s.left+s.up),y(s.top+s.up),s.up*scale,Math.PI,Math.PI*1.5);else ctx.lineTo(x(s.left),y(s.top));
        ctx.closePath();ctx.fillStyle='rgba(78,215,232,.035)';ctx.fill();ctx.strokeStyle='#4ed7e8';ctx.lineWidth=2;ctx.stroke();
        ctx.font='11px "Noto Sans KR", sans-serif';ctx.fillStyle='#4ed7e8';
        for(const c of s.corners){ctx.fillRect(x(c.anchorX)-2,y(c.anchorY)-2,4,4);ctx.fillText(c.label,x(c.anchorX)+4,y(c.anchorY)-4);}
        for(const h of result.masking.holes){ctx.beginPath();ctx.ellipse(x(h.x),y(h.y),h.width*scale/2,h.height*scale/2,0,0,Math.PI*2);ctx.fillStyle='rgba(255,127,121,.25)';ctx.fill();ctx.strokeStyle='#ff7f79';ctx.stroke();}
      }
      for(const p of points) {
        const h=p.maskFootprintHalfMm*scale;
        ctx.fillStyle=p.maskHit?'#ff7f79':p.laserGate==='ON'?'#67dfa9':p.laserGate==='OFF'?'#91a7b5':'#f6bd5c';
        ctx.strokeStyle=ctx.fillStyle;
        if(cell){ctx.globalAlpha=.3;ctx.fillRect(x(p.maskXmm)-h,y(p.maskYmm)-h,2*h,2*h);ctx.globalAlpha=1;ctx.lineWidth=1;ctx.strokeRect(x(p.maskXmm)-h,y(p.maskYmm)-h,2*h,2*h);ctx.fillRect(x(p.maskXmm)-1.4,y(p.maskYmm)-1.4,2.8,2.8);}
        else ctx.fillRect(x(p.maskXmm)-.8,y(p.maskYmm)-.8,1.6,1.6);
      }
      ctx.strokeStyle='#fff';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(x(0)-6,y(0));ctx.lineTo(x(0)+6,y(0));ctx.moveTo(x(0),y(0)-6);ctx.lineTo(x(0),y(0)+6);ctx.stroke();ctx.restore();
      ctx.fillStyle='#b9c9d2';ctx.font='12px sans-serif';ctx.fillText(`X → ${minX.toFixed(2)} … ${maxX.toFixed(2)} mm`,45,height-8);ctx.fillText(`Y ↓ ${minY.toFixed(2)} … ${maxY.toFixed(2)} mm`,width/2,height-8);
    }
    apply(engine.DEFAULT_MASKING);
    return {read,apply,render,draw,reset:()=>apply(engine.DEFAULT_MASKING)};
  };
})(window);
