'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const base=require('../src/coordinate-engine'),mask=require('../src/masking-engine');
const csv=fs.readFileSync(path.join(__dirname,'../../20260830_105429/가공좌표_스캔필드110mm_검증_16742건.csv'),'utf8');
const tuple=r=>[r.headNumber,r.sequenceNo,r.excelRow,r.localGYmm,r.gxStageMm,r.expectedRole,r.cellId,r.commandGridIndexX,r.commandGridIndexY];
function board(up=2,down=3) {
  return {...mask.makeExampleMasking(),MASKING_HOLE_NUMBER:0,CELL_UP_ROUND_RADIUS:up,CELL_DOWN_ROUND_RADIUS:down,CELL_UP_LEFT_ROUND_X:0,CELL_UP_LEFT_ROUND_Y:0,CELL_UP_RIGHT_ROUND_X:10,CELL_UP_RIGHT_ROUND_Y:0,CELL_DOWN_LEFT_ROUND_X:0,CELL_DOWN_LEFT_ROUND_Y:10,CELL_DOWN_RIGHT_ROUND_X:10,CELL_DOWN_RIGHT_ROUND_Y:10};
}
test('31개 파라미터를 빠짐없이 명명하고 활성 형상만 검사한다',()=>{
  assert.equal(mask.PARAMETER_DEFINITIONS.length,31);assert.equal(new Set(mask.PARAMETER_DEFINITIONS.map(p=>p.key)).size,31);
  assert.equal(mask.normalizeMasking({enabled:false,MASKING_HOLE_NUMBER:'bad'}).enabled,false);
  assert.equal(mask.normalizeMasking({...board(),MASKING_HOLE1_SIZE_X:'bad'}).holes.length,0);
});
test('Masking 유무와 관계없이 기존 16,742개 값·순번·역할을 모두 보존한다',()=>{
  const original=base.generateCoordinates(),off=mask.generateCoordinates(),on=mask.generateCoordinates({masking:mask.makeExampleMasking()});
  assert.deepEqual(off.records.map(tuple),original.records.map(tuple));assert.deepEqual(on.records.map(tuple),original.records.map(tuple));
  assert.equal(on.summary.repeatedLaneStartCount,992);assert.equal(on.masking.summary.coordinateChangeCount,0);
  assert.equal(mask.compareGroundTruth(on.records,csv).passed,true);assert.equal(mask.compareGroundTruth(off.records,csv).passed,true);
});
test('첫 샷이 Off여도 원점과 다른 Cell·Head의 상대거리 유지',()=>{
  const result=mask.generateCoordinates({masking:mask.makeExampleMasking()});
  const first=result.records[0];assert.equal(first.laserGate,'OFF');assert.equal(first.maskXmm,0);assert.equal(first.maskYmm,0);
  const second=result.records.find(r=>r.cellId===2&&r.commandGridIndexX===0&&r.commandGridIndexY===0);assert.equal(second.maskXmm,100);
  const fourth=result.records.find(r=>r.headNumber===4);assert.equal(fourth.maskOriginXmm,25.8375);assert.equal(fourth.maskXmm,304.5);
});
test('상좌·상우·하좌·하우 반전은 같은 국소 형상을 지정 Edge 기준점에 놓는다',()=>{
  const shape=mask.normalizeMasking(board()).shape;
  const positions=shape.corners.map(c=>mask.mirrorLocal(c,.5,1));
  assert.deepEqual(positions,[{x:.5,y:1},{x:9.5,y:1},{x:.5,y:9},{x:9.5,y:9}]);
  assert.deepEqual(shape.corners.map(c=>[c.centerX,c.centerY]),[[2,2],[8,2],[3,7],[7,7]]);
});
test('네 원호에 정확히 닿으면 Off, 안쪽은 통과, 바깥쪽은 Off',()=>{
  const s=mask.normalizeMasking(board()).shape;
  for(const c of s.corners) {
    const v=c.radius-c.radius/Math.sqrt(2),on=mask.mirrorLocal(c,v,v),inside=mask.mirrorLocal(c,v+.001,v+.001),outside=mask.mirrorLocal(c,v-.001,v-.001);
    assert.equal(mask.pointStrictlyInside(on.x,on.y,s),false,c.id);
    assert.equal(mask.pointStrictlyInside(inside.x,inside.y,s),true,c.id);
    assert.equal(mask.pointStrictlyInside(outside.x,outside.y,s),false,c.id);
  }
});
test('직선 Edge와 접촉·부분 이탈하면 Off; 반지름 0은 직각 외곽',()=>{
  const s=mask.normalizeMasking(board(0,0)).shape;
  assert.equal(mask.touchesEdge({left:0,top:1,right:1,bottom:2},s),true);
  assert.equal(mask.touchesEdge({left:-.01,top:1,right:1,bottom:2},s),true);
  assert.equal(mask.touchesEdge({left:.001,top:.001,right:1,bottom:2},s),false);
});
test('상·하 반지름은 독립이며 상단 변경은 하단 원호를 바꾸지 않는다',()=>{
  const a=mask.normalizeMasking(board(1,3)).shape,b=mask.normalizeMasking(board(2,3)).shape;
  assert.deepEqual(a.corners.slice(2),b.corners.slice(2));
});
test('Hole 접촉·부분 겹침·샷 내부의 작은 Hole을 검출한다',()=>{
  const h={x:0,y:0,width:2,height:1};
  assert.equal(mask.touchesHole({left:1,top:0,right:2,bottom:1},h),true);
  assert.equal(mask.touchesHole({left:1.001,top:0,right:2,bottom:1},h),false);
  assert.equal(mask.touchesHole({left:.99,top:0,right:2,bottom:1},h),true);
  assert.equal(mask.touchesHole({left:-2,top:-2,right:2,bottom:2},h),true);
  assert.equal(mask.touchesHole(mask.envelope(1.1,0,.3375),h),true);
});
test('5번째 Hole까지 검사하고 비활성 Hole은 무시한다',()=>{
  const input={...mask.makeExampleMasking(),MASKING_HOLE_NUMBER:5};
  for(let i=1;i<=5;i++)Object.assign(input,{[`MASKING_HOLE${i}_X`]:i===5?100:50,[`MASKING_HOLE${i}_Y`]:i===5?10:50,[`MASKING_HOLE${i}_SIZE_X`]:2,[`MASKING_HOLE${i}_SIZE_Y`]:2});
  const active=mask.generateCoordinates({masking:input}),inactive=mask.generateCoordinates({masking:{...input,MASKING_HOLE_NUMBER:4}});
  assert(active.records.some(r=>r.maskReason.includes('HOLE_5')));assert(!inactive.records.some(r=>r.maskReason.includes('HOLE_5')));
});
test('Hole 개수 0이어도 라운드 Edge는 적용된다',()=>{
  const result=mask.generateCoordinates({masking:{...mask.makeExampleMasking(),MASKING_HOLE_NUMBER:0}});
  assert.equal(result.records[0].maskReason,'EDGE');assert.equal(result.masking.holes.length,0);
});
test('기존 Off는 유지하고 미정은 접촉 때만 확실한 Off가 된다',()=>{
  const input={masking:mask.makeExampleMasking(),laserPolicy:{centerGate:'OFF',repeatGate:'OFF'}};
  const result=mask.generateCoordinates(input);assert(result.records.every(r=>r.laserGate==='OFF'));
  const unresolved=mask.generateCoordinates({masking:mask.makeExampleMasking()});
  assert(unresolved.records.some(r=>r.baseLaserGate==='UNRESOLVED'&&r.maskHit&&r.laserGate==='OFF'));
  assert(unresolved.records.some(r=>r.baseLaserGate==='UNRESOLVED'&&!r.maskHit&&r.laserGate==='UNRESOLVED'));
  const original=base.generateCoordinates();original.records[2].laserGate='OFF';
  assert.equal(mask.applyMasking(original).records[2].laserGate,'OFF');
  original.records[3].laserGate='ON';
  assert.equal(mask.applyMasking(original,{}, {centerGate:'OFF'}).records[3].laserGate,'ON');
  const off=mask.generateCoordinates({masking:mask.makeExampleMasking()});
  assert.equal(mask.applyMasking(off,{enabled:false}).records[0].laserGate,'ON');
  const individual=mask.generateCoordinates({laserPolicy:{baseGates:{'1:1':'OFF'}}});
  assert.equal(individual.uniqueCenters[0].laserGate,'OFF');
});
test('Masking은 같은 좌표의 반복 레코드에 동일한 기하 판정을 적용한다',()=>{
  const result=mask.generateCoordinates({masking:mask.makeExampleMasking()});
  for(let i=0;i<result.records.length-1;i++)if(result.records[i].isRepeatedLaneStart) {
    assert.equal(result.records[i].maskReason,result.records[i+1].maskReason);
    assert.equal(result.records[i].maskXmm,result.records[i+1].maskXmm);
  }
});
test('잘못된 개수·활성 크기·반지름·비일관 Edge는 오류로 처리한다',()=>{
  for(const value of [-1,6,1.5,''])assert.throws(()=>mask.normalizeMasking({...board(),MASKING_HOLE_NUMBER:value}));
  assert.throws(()=>mask.normalizeMasking({...mask.makeExampleMasking(),MASKING_HOLE1_SIZE_X:0}));
  assert.throws(()=>mask.normalizeMasking({...board(),CELL_UP_ROUND_RADIUS:-1}));
  assert.throws(()=>mask.normalizeMasking({...board(),CELL_UP_ROUND_RADIUS:6}));
  assert.throws(()=>mask.normalizeMasking({...board(),CELL_DOWN_RIGHT_ROUND_X:9}));
  assert.throws(()=>mask.normalizeMasking({...board(),CELL_UP_LEFT_ROUND_Y:''}));
  assert.throws(()=>mask.normalizeMasking({...board(),beamRadiusMm:.01,positionMarginMm:null}));
});
test('DOE 회전 및 입력 반경·여유는 외곽을 넓히며 좌표는 그대로 유지한다',()=>{
  const a=mask.generateCoordinates({masking:mask.makeExampleMasking()}),b=mask.generateCoordinates({masking:{...mask.makeExampleMasking(),doeRotationDeg:45,beamRadiusMm:.01,positionMarginMm:.02}});
  assert(Math.abs(b.masking.summary.footprintHalfMm-(.3375*Math.SQRT2+.03))<1e-9);
  assert(b.masking.summary.maskedRawCount>=a.masking.summary.maskedRawCount);
  assert.deepEqual(a.records.map(tuple),b.records.map(tuple));
});
test('공정 보정은 고정 형상에 대한 실제 조사 위치 변화로 판정한다',()=>{
  const result=mask.generateCoordinates({globalCorrectionXmm:.1,globalCorrectionYmm:.2,masking:mask.makeExampleMasking()});
  assert.equal(result.records[0].maskOriginXmm,25.8375);assert.equal(result.records[0].maskXmm,.1);assert.equal(result.records[0].maskYmm,.2);
});
test('C26 자동식은 피치·DOE 분기 수를 반영하며 Masking에 종속되지 않는다',()=>{
  const result=mask.generateCoordinates({commandPitchPx:12});assert.equal(result.recipe.sharedOriginOffsetMm,.405);
  const n2=mask.generateCoordinates({doeBranchCountPerAxis:2});assert.equal(n2.recipe.sharedOriginOffsetMm,.225);
});
test('CSV는 16,742개를 유지하고 발진·Masking 원인을 출력한다',()=>{
  const r=mask.generateCoordinates({masking:mask.makeExampleMasking(),laserPolicy:{repeatGate:'OFF'}}),lines=mask.exportRowsToCsv(r.records).split('\r\n');
  assert.equal(lines.length,16743);assert.match(lines[0],/BaseLaserGate,MaskingEnabled,MaskXmm/);assert.match(lines[1],/EDGE/);
  const parsed=lines[0].split(','),first=lines[1].split(',');assert.equal(first[parsed.indexOf('GYmm')],'-29.1625');assert.equal(first[parsed.indexOf('LaserGate')],'OFF');
});
test('명령표도 좌표·순서는 같고 발진 미정 레코드는 확정 출력하지 않는다',()=>{
  assert.throws(()=>mask.exportCommandPlan(mask.generateCoordinates().records),/미정/);
  const a=mask.generateCoordinates({laserPolicy:{repeatGate:'OFF'}}),b=mask.generateCoordinates({masking:mask.makeExampleMasking(),laserPolicy:{repeatGate:'OFF'}});
  const withoutGate=txt=>txt.split('\r\n').filter(l=>l.startsWith('POINT ')).map(l=>l.replace(/ LASER=\w+$/,''));
  const before=mask.exportCommandPlan(a.records),after=mask.exportCommandPlan(b.records);
  assert.deepEqual(withoutGate(before),withoutGate(after));assert.equal(withoutGate(after).length,16742);
});
