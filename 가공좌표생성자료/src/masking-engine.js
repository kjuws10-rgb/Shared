(function (root, factory) {
  const base = typeof module === 'object' && module.exports ? require('./coordinate-engine') : root.CoordinateEngine;
  const api = factory(base);
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.MaskingEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (base) {
  'use strict';
  const EPS = 1e-9;
  const CORNERS = Object.freeze([
    Object.freeze({id:'UP_LEFT',label:'상좌',sx:1,sy:1,radius:'CELL_UP_ROUND_RADIUS'}),
    Object.freeze({id:'UP_RIGHT',label:'상우',sx:-1,sy:1,radius:'CELL_UP_ROUND_RADIUS'}),
    Object.freeze({id:'DOWN_LEFT',label:'하좌',sx:1,sy:-1,radius:'CELL_DOWN_ROUND_RADIUS'}),
    Object.freeze({id:'DOWN_RIGHT',label:'하우',sx:-1,sy:-1,radius:'CELL_DOWN_ROUND_RADIUS'}),
  ]);
  const PARAMETER_DEFINITIONS = [{key:'MASKING_HOLE_NUMBER',label:'마스킹 Hole 개수',unit:'개',group:'hole-count'}];
  for (let i=1;i<=5;i++) for (const axis of ['X','Y']) PARAMETER_DEFINITIONS.push({key:`MASKING_HOLE${i}_${axis}`,label:`Hole ${i} 중심 ${axis}거리`,unit:'mm',group:'hole',hole:i});
  for (let i=1;i<=5;i++) for (const axis of ['X','Y']) PARAMETER_DEFINITIONS.push({key:`MASKING_HOLE${i}_SIZE_${axis}`,label:`Hole ${i} ${axis==='X'?'전체 폭':'전체 높이'}`,unit:'mm',group:'hole',hole:i});
  PARAMETER_DEFINITIONS.push({key:'CELL_UP_ROUND_RADIUS',label:'상단 좌·우 라운드 반지름',unit:'mm',group:'edge'},{key:'CELL_DOWN_ROUND_RADIUS',label:'하단 좌·우 라운드 반지름',unit:'mm',group:'edge'});
  for (const c of CORNERS) for (const axis of ['X','Y']) PARAMETER_DEFINITIONS.push({key:`CELL_${c.id}_ROUND_${axis}`,label:`${c.label} Edge 기준점 ${axis}거리`,unit:'mm',group:'edge'});
  PARAMETER_DEFINITIONS.forEach(Object.freeze);Object.freeze(PARAMETER_DEFINITIONS);
  const DEFAULT_MASKING = Object.freeze({enabled:false,MASKING_HOLE_NUMBER:0,beamRadiusMm:null,positionMarginMm:null,doeRotationDeg:0});
  const LASER_POLICIES = Object.freeze({centerGate:'ON',repeatGate:'UNRESOLVED'});
  const label = key => PARAMETER_DEFINITIONS.find(p=>p.key===key)?.label || key;
  function finite(value,key) {
    if(value===null || value===undefined || typeof value==='boolean' || String(value).trim()==='') throw new Error(`${label(key)} 값을 입력하세요.`);
    const n=Number(value);
    if(!Number.isFinite(n)) throw new Error(`${label(key)} 값은 유한한 숫자여야 합니다.`);
    return n;
  }
  function nonnegative(value,key) {
    const n=finite(value,key);if(n<0) throw new Error(`${label(key)} 값은 0 이상이어야 합니다.`);return n;
  }
  function enabled(value) {return value===true || value===1 || value==='true';}
  function normalizeMasking(input={}) {
    const source={...DEFAULT_MASKING,...input};
    const result={enabled:enabled(source.enabled),parameters:{},holes:[],shape:null,beamRadiusMm:0,positionMarginMm:0,doeRotationDeg:0,scope:'NOMINAL_DOE_ENVELOPE'};
    if(!result.enabled) return result;
    const count=finite(source.MASKING_HOLE_NUMBER,'MASKING_HOLE_NUMBER');
    if(!Number.isInteger(count)||count<0||count>5) throw new Error('마스킹 Hole 개수는 정수 0~5여야 합니다.');
    result.parameters.MASKING_HOLE_NUMBER=count;
    for(const p of PARAMETER_DEFINITIONS.filter(p=>p.group==='edge')) result.parameters[p.key]=finite(source[p.key],p.key);
    for(const radius of ['CELL_UP_ROUND_RADIUS','CELL_DOWN_ROUND_RADIUS']) nonnegative(result.parameters[radius],radius);
    for(let i=1;i<=count;i++) {
      for(const suffix of ['X','Y','SIZE_X','SIZE_Y']) {
        const key=`MASKING_HOLE${i}_${suffix}`;result.parameters[key]=finite(source[key],key);
      }
      const h={number:i,x:result.parameters[`MASKING_HOLE${i}_X`],y:result.parameters[`MASKING_HOLE${i}_Y`],width:result.parameters[`MASKING_HOLE${i}_SIZE_X`],height:result.parameters[`MASKING_HOLE${i}_SIZE_Y`]};
      if(h.width<=0||h.height<=0) throw new Error(`Hole ${i}의 전체 폭과 높이는 0보다 커야 합니다.`);
      result.holes.push(h);
    }
    const r=result.parameters;
    const matching=[['CELL_UP_LEFT_ROUND_X','CELL_DOWN_LEFT_ROUND_X'],['CELL_UP_RIGHT_ROUND_X','CELL_DOWN_RIGHT_ROUND_X'],['CELL_UP_LEFT_ROUND_Y','CELL_UP_RIGHT_ROUND_Y'],['CELL_DOWN_LEFT_ROUND_Y','CELL_DOWN_RIGHT_ROUND_Y']];
    for(const [a,b] of matching) if(Math.abs(r[a]-r[b])>EPS) throw new Error(`${label(a)}와 ${label(b)}는 동일한 직선 Edge에 놓여야 합니다.`);
    const s={left:r.CELL_UP_LEFT_ROUND_X,right:r.CELL_UP_RIGHT_ROUND_X,top:r.CELL_UP_LEFT_ROUND_Y,bottom:r.CELL_DOWN_LEFT_ROUND_Y,up:r.CELL_UP_ROUND_RADIUS,down:r.CELL_DOWN_ROUND_RADIUS};
    const width=s.right-s.left,height=s.bottom-s.top;
    if(width<=0||height<=0) throw new Error('오른쪽 Edge는 왼쪽보다, 아래 Edge는 위쪽보다 큰 좌표여야 합니다.');
    if(2*s.up>width+EPS||2*s.down>width+EPS||s.up+s.down>height+EPS) throw new Error('라운드 반지름이 기판 폭 또는 높이를 초과합니다.');
    s.corners=CORNERS.map(c=>({id:c.id,label:c.label,sx:c.sx,sy:c.sy,radius:r[c.radius],anchorX:r[`CELL_${c.id}_ROUND_X`],anchorY:r[`CELL_${c.id}_ROUND_Y`],centerX:r[`CELL_${c.id}_ROUND_X`]+c.sx*r[c.radius],centerY:r[`CELL_${c.id}_ROUND_Y`]+c.sy*r[c.radius]}));
    result.shape=s;
    const hasBeam=source.beamRadiusMm!==null&&source.beamRadiusMm!==undefined&&String(source.beamRadiusMm).trim()!=='';
    const hasMargin=source.positionMarginMm!==null&&source.positionMarginMm!==undefined&&String(source.positionMarginMm).trim()!=='';
    if(hasBeam!==hasMargin) throw new Error('Masking의 빔 반경과 위치 여유는 둘 다 입력하거나 둘 다 비우세요.');
    if(hasBeam) {
      result.beamRadiusMm=nonnegative(source.beamRadiusMm,'Masking 빔 반경');
      result.positionMarginMm=nonnegative(source.positionMarginMm,'Masking 위치 여유');
      result.scope='DOE_ENVELOPE_WITH_ENTERED_MARGIN';
    }
    result.doeRotationDeg=finite(source.doeRotationDeg,'DOE 회전각');
    return result;
  }
  // Top-left template coordinates u,v point inward from the unrounded Edge corner.
  function mirrorLocal(corner,u,v) {return {x:corner.anchorX+corner.sx*u,y:corner.anchorY+corner.sy*v};}
  function pointStrictlyInside(x,y,s) {
    if(x<=s.left+EPS||x>=s.right-EPS||y<=s.top+EPS||y>=s.bottom-EPS) return false;
    for(const c of s.corners) {
      const localX=(x-c.anchorX)*c.sx,localY=(y-c.anchorY)*c.sy;
      if(localX<c.radius && localY<c.radius && Math.hypot(localX-c.radius,localY-c.radius)>=c.radius-EPS) return false;
    }
    return true;
  }
  function envelope(x,y,half) {return {left:x-half,right:x+half,top:y-half,bottom:y+half};}
  function touchesEdge(b,s) {
    return ![[b.left,b.top],[b.right,b.top],[b.left,b.bottom],[b.right,b.bottom]].every(([x,y])=>pointStrictlyInside(x,y,s));
  }
  function touchesHole(b,h) {
    const nearX=Math.max(b.left,Math.min(h.x,b.right)),nearY=Math.max(b.top,Math.min(h.y,b.bottom));
    return ((nearX-h.x)/(h.width/2))**2+((nearY-h.y)/(h.height/2))**2<=1+EPS;
  }
  function validateGate(value,key) {
    if(!['ON','OFF','UNRESOLVED'].includes(value)) throw new Error(`${key}은 ON, OFF 또는 UNRESOLVED여야 합니다.`);return value;
  }
  function applyMasking(result,input={},policyInput={}) {
    const mask=normalizeMasking(input),policy={...LASER_POLICIES,...policyInput},recipe=result.recipe;
    validateGate(policy.centerGate,'가공 중심 발진');validateGate(policy.repeatGate,'Lane 반복 발진');
    const originX=base.round(result.derived.xReferenceDistanceMm+recipe.sharedOriginOffsetMm),originY=recipe.sharedOriginOffsetMm;
    const spacing=result.derived.commandSpacingMm/recipe.doeBranchCountPerAxis;
    const nominalHalf=spacing*(recipe.doeBranchCountPerAxis-1)/2;
    const angle=mask.doeRotationDeg*Math.PI/180;
    const half=base.round(nominalHalf*(Math.abs(Math.cos(angle))+Math.abs(Math.sin(angle)))+mask.beamRadiusMm+mask.positionMarginMm);
    function classify(p) {
      const maskXmm=base.round(p.globalXmm-originX),maskYmm=base.round(p.globalYmm-originY);
      const footprint=envelope(maskXmm,maskYmm,half),reasons=[];
      if(mask.enabled) {
        if(touchesEdge(footprint,mask.shape)) reasons.push('EDGE');
        for(const h of mask.holes) if(touchesHole(footprint,h)) reasons.push(`HOLE_${h.number}`);
      }
      return {maskOriginXmm:originX,maskOriginYmm:originY,maskXmm,maskYmm,maskFootprintHalfMm:half,maskScope:mask.scope,maskingEnabled:mask.enabled,maskHit:reasons.length>0,maskReason:reasons.join('|'),maskLaserGate:reasons.length?'OFF':'ALLOW'};
    }
    const geometryByCenter=new Map();
    const key=p=>`${p.headNumber}:${p.cellId}:${p.commandGridIndexX}:${p.commandGridIndexY}`;
    const centers=result.uniqueCenters.map(p=>{
      const classification=classify(p);geometryByCenter.set(key(p),classification);
      return {...p,...classification,baseLaserGate:policy.centerGate,laserGate:classification.maskHit?'OFF':policy.centerGate};
    });
    const records=result.records.map(p=>{
      const classification=geometryByCenter.get(key(p))||classify(p);
      const provided=policy.baseGates?.[`${p.headNumber}:${p.sequenceNo}`];
      const knownBase=p.baseLaserGate??(['ON','OFF'].includes(p.laserGate)?p.laserGate:null);
      const baseLaserGate=provided!==undefined?validateGate(provided,'레코드 발진'):knownBase!==null?validateGate(knownBase,'기존 레코드 발진'):p.isRepeatedLaneStart?policy.repeatGate:policy.centerGate;
      return {...p,...classification,baseLaserGate,laserGate:classification.maskHit?'OFF':baseLaserGate};
    });
    const centerRecords=new Map(records.filter(p=>!p.isRepeatedLaneStart).map(p=>[key(p),p]));
    for(const center of centers) {
      const record=centerRecords.get(key(center));
      if(record){center.baseLaserGate=record.baseLaserGate;center.laserGate=record.laserGate;}
    }
    const count=(field,value)=>records.filter(r=>r[field]===value).length;
    const summary={enabled:mask.enabled,rawCount:records.length,maskedRawCount:count('maskHit',true),maskedUniqueCount:centers.filter(p=>p.maskHit).length,onCount:count('laserGate','ON'),offCount:count('laserGate','OFF'),unresolvedCount:count('laserGate','UNRESOLVED'),originXmm:originX,originYmm:originY,nominalHalfMm:base.round(nominalHalf),footprintHalfMm:half,scope:mask.scope,coordinateChangeCount:0};
    if(records.some((p,i)=>p.headNumber!==result.records[i].headNumber||p.sequenceNo!==result.records[i].sequenceNo||p.localGYmm!==result.records[i].localGYmm||p.gxStageMm!==result.records[i].gxStageMm)) throw new Error('Masking 적용 중 좌표 불변 조건을 위반했습니다.');
    return {...result,recipe:{...recipe,masking:{...input},laserPolicy:{...policy}},records,uniqueCenters:centers,masking:{...mask,summary,policy},summary:{...result.summary,masking:summary}};
  }
  function generateCoordinates(input={}) {
    const coordinateInput={...input};
    if(input.autoDoeCenterOffset!==false) {
      const pixel=Number(input.pixelSizeMmPerPx??base.BASELINE_RECIPE.pixelSizeMmPerPx),pitch=Number(input.commandPitchPx??base.BASELINE_RECIPE.commandPitchPx),n=Number(input.doeBranchCountPerAxis??base.BASELINE_RECIPE.doeBranchCountPerAxis);
      coordinateInput.sharedOriginOffsetMm=base.round(pixel*pitch/n*(n-1)/2);
    }
    return applyMasking(base.generateCoordinates(coordinateInput),input.masking||{},input.laserPolicy||{});
  }
  const EXTRA_COLUMNS=Object.freeze([
    ['BaseLaserGate','baseLaserGate'],['MaskingEnabled','maskingEnabled'],['MaskXmm','maskXmm'],['MaskYmm','maskYmm'],['MaskOriginXmm','maskOriginXmm'],['MaskOriginYmm','maskOriginYmm'],['MaskFootprintHalfMm','maskFootprintHalfMm'],['MaskFootprintScope','maskScope'],['MaskHit','maskHit'],['MaskReason','maskReason'],['MaskLaserGate','maskLaserGate']
  ]);
  function exportRowsToCsv(records) {
    const rows=base.exportRowsToCsv(records).split('\r\n');
    return rows.map((line,i)=>line+','+(i===0?EXTRA_COLUMNS.map(([name])=>name).join(','):EXTRA_COLUMNS.map(([,key])=>String(records[i-1][key]??'')).join(','))).join('\r\n');
  }
  function exportCommandPlan(records) {
    if(records.some(r=>!['ON','OFF'].includes(r.laserGate))) throw new Error('발진 미정 레코드가 있습니다. 기존 Script에 맞는 Lane 반복 발진 정책을 선택하세요.');
    const header=['# A3 LD coordinate / laser gate command table (mm)','# Controller-independent data, not native scanner code.','# Each POINT keeps the original position and exposure slot; OFF suppresses exposure.'];
    return header.concat(records.map(r=>`POINT ${r.headId} SEQ=${r.sequenceNo} GY=${r.localGYmm.toFixed(4)} GX_STAGE=${r.gxStageMm.toFixed(4)} LASER=${r.laserGate}`)).join('\r\n');
  }
  function makeExampleMasking() {
    const p={...DEFAULT_MASKING,enabled:true,MASKING_HOLE_NUMBER:1,MASKING_HOLE1_X:100,MASKING_HOLE1_Y:10,MASKING_HOLE1_SIZE_X:4,MASKING_HOLE1_SIZE_Y:4,CELL_UP_ROUND_RADIUS:4,CELL_DOWN_ROUND_RADIUS:3};
    for(const c of CORNERS) {p[`CELL_${c.id}_ROUND_X`]=c.sx===1?-1:813;p[`CELL_${c.id}_ROUND_Y`]=c.sy===1?-1:823;}
    return p;
  }
  return Object.freeze({...base,CORNERS,PARAMETER_DEFINITIONS,DEFAULT_MASKING,LASER_POLICIES,normalizeMasking,mirrorLocal,pointStrictlyInside,envelope,touchesEdge,touchesHole,applyMasking,generateCoordinates,exportRowsToCsv,exportCommandPlan,makeExampleMasking});
});
