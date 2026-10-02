/* DOM-only checks. These do not claim browser rendering, layout, or device QA.
 * Dependency: npm install --prefix <temporary-directory> linkedom@0.18.12
 * Run: NODE_PATH=<temporary-directory>/node_modules node tests/dom.test.cjs
 * Optional: REVIEW_QA_DIR=<absolute-dir> saves machine/global/chart SVG snapshots. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {parseHTML}=require('linkedom');
const html=fs.readFileSync(path.join(__dirname,'../FlyingReview_8Head_Simulator.html'),'utf8');
const {window:w,document}=parseHTML(html);
// Linkedom has no browser form-control state implementation. Supply only the
// standard value/checked semantics needed by these deterministic DOM tests.
Object.defineProperty(w.HTMLSelectElement.prototype,'value',{configurable:true,get(){return this.querySelector('option[selected]')?.value||this.querySelector('option')?.value||'';},set(v){this.querySelectorAll('option').forEach(o=>o.toggleAttribute('selected',String(o.value)===String(v)));}});
Object.defineProperty(w.HTMLInputElement.prototype,'checked',{configurable:true,get(){return this.hasAttribute('checked');},set(v){this.toggleAttribute('checked',!!v);}});
let queued=[],downloads=[],now=0;
const context=vm.createContext({document,console,Blob,URL:{createObjectURL:blob=>{downloads.push(blob);return 'blob:test';},revokeObjectURL(){}},setTimeout:()=>0,requestAnimationFrame:fn=>queued.push(fn)});
context.window=context;
for(const script of document.querySelectorAll('script'))vm.runInContext(script.textContent,context,{filename:'bundled-simulator.js'});
const $=id=>document.getElementById(id),change=el=>el.dispatchEvent(new w.Event('change',{bubbles:true})),click=el=>el.dispatchEvent(new w.Event('click',{bubbles:true}));
let tests=0;const test=(name,fn)=>{fn();tests++;console.log('PASS',name);};
const state=()=>context.FlyingReviewApp.getState();
const value=(k,v)=>{const el=document.querySelector(`[data-param="${k}"]`);if(el){el.value=v;change(el);}else context.FlyingReviewApp.simulateParameters({[k]:v});};
const frame=delta=>{now+=delta;const call=queued.shift();call(now);};
function snapshot(name) {
  if(!process.env.REVIEW_QA_DIR)return;
  fs.mkdirSync(process.env.REVIEW_QA_DIR,{recursive:true});
  for(const [id,suffix] of [['machine-scene','machine'],['global-map','global'],['motion-chart','timeline'],['cell-detail','cell']]){
    const clone=$(id).querySelector('svg').cloneNode(true);
    clone.querySelectorAll('text').forEach(el=>{if(el.hasAttribute('font-size'))el.style.fontSize=el.getAttribute('font-size')+'px';if(el.hasAttribute('fill'))el.style.fill=el.getAttribute('fill');});
    let svg=clone.outerHTML;
    svg=svg.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ').replace(/clippath/g,'clipPath');
    const css='<style>text{font-family:Sans;font-size:11px;fill:#a1b7c5}.annotation{font-size:11px;fill:#a1b7c5}.head-label{font-size:12px;fill:#eef7fb}.cell-label{font-size:10px;fill:#c1d5e0}.point-label{font-size:10px;fill:#eef7fb;font-weight:bold}.scan-field{fill-opacity:.10;stroke-width:1}</style>';
    svg=svg.replace(/(<svg[^>]*>)/,'$1'+css);
    fs.writeFileSync(path.join(process.env.REVIEW_QA_DIR,name+'_'+suffix+'.svg'),svg);
  }
}
test('standalone bundle initialized, 45 moving and 45 global cells, 8 points',()=>{
  assert.ok(context.FlyingReviewApp);assert.equal(state().maxPerPass,8);assert.equal(state().planCount,1);
  assert.equal(document.querySelectorAll('.moving-cell').length,45);assert.equal(document.querySelectorAll('.map-cell').length,45);
  assert.equal(document.querySelectorAll('.moving-point').length,8);assert.equal($('error-box').hidden,true);
});
test('board group moves; Camera Y does not; X follows computed path',()=>{
  context.FlyingReviewApp.seek(26);const y0=$('moving-glass').getAttribute('transform'),x0=$('review-camera').getAttribute('transform'),cy=$('review-camera').querySelector('circle').getAttribute('cy');
  context.FlyingReviewApp.seek(28);assert.notEqual($('moving-glass').getAttribute('transform'),y0);assert.notEqual($('review-camera').getAttribute('transform'),x0);assert.equal($('review-camera').querySelector('circle').getAttribute('cy'),cy);
  assert.ok($('live-status').textContent.includes('4 / 8'));snapshot('auto8_at_28s');
});
test('2-point example selects minimum four Glass and updates grouping',()=>{
  click(document.querySelector('[data-preset="two"]'));assert.equal(state().maxPerPass,2);assert.equal(state().planCount,4);
  const old=$('group-label').textContent;click($('next-glass'));assert.equal(state().currentGlass,2);assert.notEqual($('group-label').textContent,old);
  assert.equal($('sheet-id').textContent,'GLASS 2 · 45 CELLS');context.FlyingReviewApp.seek(state().clock+26);snapshot('two_Glass2_at_26s');
});
test('same Y and 4-point examples report 1/4 maximum and 8/2 Glass',()=>{
  click(document.querySelector('[data-preset="same"]'));assert.equal(state().maxPerPass,1);assert.equal(state().planCount,8);
  click(document.querySelector('[data-preset="four"]'));assert.equal(state().maxPerPass,4);assert.equal(state().planCount,2);
});
test('plan cap switches independent of point definitions',()=>{
  click($('auto-points'));const ds=JSON.stringify(state().points);
  for(const [cap,num] of [['2',4],['4',2],['8',1]]){$('plan-cap').value=cap;change($('plan-cap'));assert.equal(state().planCount,num);assert.equal(JSON.stringify(state().points),ds);}
});
test('manual Cell/column/row change and validity updates; bad point does not crash',()=>{
  let el=document.querySelector('[data-head="1"] [data-point="col"]');el.value=999;change(el);
  assert.equal(state().planCount,undefined);assert.equal($('play').disabled,true);assert.ok($('point-table').textContent.includes('범위 오류'));assert.equal($('error-box').hidden,true);
  click($('reset-params'));assert.equal(state().maxPerPass,8);
});
test('desired global point snaps to actual valid Head point',()=>{
  $('coordinate-head').value=5;$('desired-x').value=550;$('desired-y').value=600;click($('snap-coordinate'));
  assert.ok($('coordinate-snap').textContent.includes('H05'));assert.ok($('coordinate-snap').textContent.includes('거리'));assert.equal(state().points.find(d=>d.head===5).enabled,true);
});
test('blur restriction blocks execution and simulation never marks captured',()=>{
  click($('reset-params'));value('maxBlurUm',.1725);assert.equal(state().maxPerPass,0);assert.equal(state().planCount,undefined);assert.equal($('play').disabled,true);
  context.FlyingReviewApp.seek(32);assert.ok($('live-status').textContent.includes('0 / 0'));assert.ok($('notice').textContent.includes('Blur'));
});
test('input errors do not leave stale feasible state and recover on valid input',()=>{
  value('vy',0);assert.equal($('error-box').hidden,false);assert.equal(state().maxPerPass,undefined);
  change($('plan-cap'));assert.equal(state().maxPerPass,undefined);
  value('vy',100);assert.equal($('error-box').hidden,true);click($('reset-params'));assert.equal(state().maxPerPass,8);
});
test('inverse tab computes suggestions, explicit application recalculates',()=>{
  click(document.querySelector('[data-tab="inverse"]'));assert.equal($('panel-inverse').hidden,false);assert.ok($('inverse-results').textContent.includes('44.21'));
  const button=$('inverse-results').querySelector('[data-suggest="fps"]');assert.ok(button);click(button);assert.equal(state().maxPerPass,8);
  value('cameraMaxFps',.1);click($('calculate-inverse'));
  assert.equal($('inverse-results').querySelector('[data-suggest="fps"]'),null);
  assert.ok($('inverse-results').textContent.includes('Camera 사양 변경 또는 Glass 분할'));
  click($('reset-params'));
});
test('play / pause changes time and board; scrub pauses; no timer-driven hardware',()=>{
  click(document.querySelector('[data-tab="animation"]'));click($('play'));assert.equal(state().playing,true);frame(16);frame(100);assert.ok(state().clock>-2);
  $('progress').value=300;$('progress').dispatchEvent(new w.Event('input'));assert.equal(state().playing,false);assert.ok(state().clock>0);click($('restart'));assert.equal(state().clock,-2);
});
test('positive Stage direction preserves counting and changes sheet orientation',()=>{
  value('direction',1);assert.equal(state().maxPerPass,8);assert.equal($('error-box').hidden,true);
  const cy=$('review-camera').querySelector('circle').getAttribute('cy');context.FlyingReviewApp.seek(28);assert.equal($('review-camera').querySelector('circle').getAttribute('cy'),cy);
  $('scene-view').value='atm';change($('scene-view'));assert.equal(Number($('machine-scene').dataset.cy),150);$('scene-view').value='full';change($('scene-view'));value('direction',-1);
});
test('geometry controls change all Cell drawings and counts',()=>{
  value('cellRows',4);assert.equal(document.querySelectorAll('.moving-cell').length,36);assert.equal(document.querySelectorAll('.map-cell').length,36);click($('reset-params'));
});
test('expanded view opens and closes through Escape',()=>{
  click($('expand-view'));assert.ok(document.querySelector('.expanded'));const event=new w.Event('keydown');event.key='Escape';document.dispatchEvent(event);assert.equal(document.querySelector('.expanded'),null);
});
test('full-pass viewport contains entire Glass at every Stage sample, both directions',()=>{
  for(const direction of [-1,1]){
    value('direction',direction);
    const h=Number($('machine-scene').dataset.height),sy=Number($('machine-scene').dataset.sy),cy=$('review-camera').querySelector('circle').getAttribute('cy');
    for(let i=0;i<=80;i++){
      context.FlyingReviewApp.seek(state().stageDuration*i/80);
      const translate=Number($('moving-glass').getAttribute('transform').match(/translate\(0 ([^)]+)\)/)[1]);
      const y0=translate+(direction<0?-state().parameters.glassY*sy:0),y1=y0+state().parameters.glassY*sy;
      assert.ok(y0>=50&&y1<=h-22,`Glass clipped: ${y0}..${y1} / ${h}`);assert.equal($('review-camera').querySelector('circle').getAttribute('cy'),cy);
    }
    assert.equal(Number(document.querySelector('.stage-direction-arrow').dataset.screenSign),-direction);
  }value('direction',-1);
});
test('shot stepping selects Head, supports ready/trigger/end, and crosses Glass boundary',()=>{
  click($('reset-params'));$('plan-cap').value='2';change($('plan-cap'));
  const schedule=state().planCount;assert.equal(schedule,4);const groups=context.FlyingReviewApp.getSchedule();
  assert.deepEqual(Array.from(groups.flatMap(g=>g.nodes.map(n=>n.head))),[1,2,3,4,5,6,7,8]);
  $('step-phase').value='ready';change($('step-phase'));click($('next-shot'));
  assert.ok(Math.abs(state().clock-(groups[0].nodes[0].trigger-.020005))<1e-8);assert.equal($('detail-head').value,'1');assert.equal($('follow-shot').checked,false);
  assert.ok(document.querySelector('[data-track-head="1"]').textContent.includes('선도착'));
  $('step-phase').value='trigger';change($('step-phase'));click(document.querySelector('[data-event-head="1"]'));
  assert.ok(Math.abs(state().clock-groups[0].nodes[0].trigger)<1e-8);
  $('step-phase').value='end';change($('step-phase'));click(document.querySelector('[data-track-head="1"]'));
  assert.ok(document.querySelector('[data-track-head="1"]').textContent.includes('취득 계획완료'));
  click($('next-shot'));assert.equal($('detail-head').value,'2');click($('next-shot'));assert.equal(state().currentGlass,2);assert.equal($('detail-head').value,'3');
  assert.ok(document.querySelector('[data-track-head="1"]').textContent.includes('이전 Glass'));
  click($('prev-shot'));assert.equal(state().currentGlass,1);assert.equal($('detail-head').value,'2');
  $('plan-cap').value='8';change($('plan-cap'));click($('reset-params'));
});
test('sequential and optimal group policies revalidate without changing requested points',()=>{
  $('plan-cap').value='2';change($('plan-cap'));const ds=JSON.stringify(state().points);
  assert.deepEqual(Array.from(context.FlyingReviewApp.getSchedule()[0].nodes.map(n=>n.head)),[1,2]);
  $('cycle-policy').value='optimal';change($('cycle-policy'));assert.equal(state().parameters.cyclePolicy,'optimal');assert.equal(state().planCount,4);assert.equal(JSON.stringify(state().points),ds);
  assert.deepEqual(Array.from(context.FlyingReviewApp.getSchedule()[0].nodes.map(n=>n.head)),[1,5]);
  $('cycle-policy').value='sequential';change($('cycle-policy'));assert.deepEqual(Array.from(context.FlyingReviewApp.getSchedule()[0].nodes.map(n=>n.head)),[1,2]);
  $('plan-cap').value='8';change($('plan-cap'));
});
test('Cell detail renders exact 16 branches and follows next scheduled point',()=>{
  click($('review-start'));assert.equal($('follow-shot').checked,true);assert.equal($('detail-head').value,'1');
  assert.equal(document.querySelectorAll('.doe-branch').length,16);assert.ok($('detail-label').textContent.includes('B07'));
  const groups=context.FlyingReviewApp.getSchedule();context.FlyingReviewApp.seek(groups[0].nodes[2].cross-.001);assert.equal($('detail-head').value,'3');assert.equal($('cell-detail').dataset.cell,'22');
  assert.equal($('detail-review-plane').getAttribute('display'),'inline');snapshot('auto8_H03_before_capture');
  $('detail-head').value=8;change($('detail-head'));assert.equal($('follow-shot').checked,false);assert.equal($('cell-detail').dataset.cell,'44');
});
test('idle skip changes playback only, keeps computed Tact and no false new Glass capture',()=>{
  $('plan-cap').value='2';change($('plan-cap'));const tact=state().tact;
  context.FlyingReviewApp.seek(state().stageDuration+1.1);$('skip-idle').checked=true;click($('play'));frame(16);assert.equal(state().currentGlass,2);assert.equal(state().tact,tact);assert.equal(state().localTime,0);assert.ok($('live-status').textContent.includes('0 / 2'));click($('play'));
  $('skip-idle').checked=false;context.FlyingReviewApp.seek(state().stageDuration+1.1);click($('play'));frame(16);assert.equal(state().currentGlass,1);click($('play'));
  $('skip-idle').checked=true;$('plan-cap').value='8';change($('plan-cap'));click($('restart'));
});
test('diagnostic seek clamps cycle bounds and rejects non-finite time',()=>{
  context.FlyingReviewApp.seek(Infinity);assert.equal(state().clock,-2);context.FlyingReviewApp.seek(-999);assert.equal(state().clock,-2);
  context.FlyingReviewApp.seek(99999);assert.equal(state().clock,state().planCount*state().tact);click($('restart'));
});
test('JSON and CSV exports, no external script, iframe or fetch calls',()=>{
  click($('save-config'));click($('csv-export'));assert.equal(downloads.length,2);assert.equal(downloads[0].type,'application/json');assert.equal(downloads[1].type,'text/csv;charset=utf-8');
  assert.equal(document.querySelectorAll('script[src],iframe,link[rel=stylesheet]').length,0);
  assert.ok(!/\b(fetch|XMLHttpRequest|WebSocket)\s*\(/.test(html));
});
test('live formula guide has fourteen chapters with engine-linked pair values',()=>{
  assert.equal($('formula-guide').querySelectorAll('.formula-chapter').length,14);
  $('formula-head-a').value='3';change($('formula-head-a'));$('formula-head-b').value='4';change($('formula-head-b'));
  assert.ok($('formula-07').textContent.includes('0.103923'));assert.ok($('formula-09').textContent.includes('258.007'));
  const before=JSON.stringify(state().points),beforeSchedule=JSON.stringify(context.FlyingReviewApp.getSchedule());
  $('formula-head-a').value='6';change($('formula-head-a'));$('formula-head-b').value='7';change($('formula-head-b'));
  assert.ok($('formula-09').textContent.includes('203.430'));assert.equal(JSON.stringify(state().points),before);assert.equal(JSON.stringify(context.FlyingReviewApp.getSchedule()),beforeSchedule);
});
test('formula substitutions change with X and exposure inputs, including quality failure',()=>{
  value('vx',250);assert.ok($('formula-07').textContent.includes('250.000'));
  value('exposureUs',20);assert.equal(state().maxPerPass,0);assert.ok($('formula-10').textContent.includes('2.000000'));assert.ok($('formula-10').textContent.includes('초과'));
  value('exposureUs',10);assert.equal(state().maxPerPass,8);
});
test('bad point or numeric input leaves explanatory diagnostics, then safely recovers',()=>{
  const input=document.querySelector('#point-table [data-head="1"] [data-point="col"]');
  assert.ok(input);input.value=999;change(input);$('formula-head-a').value='1';change($('formula-head-a'));
  assert.ok($('formula-02').textContent.includes('수정'));assert.ok(!$('formula-guide').textContent.includes('NaN'));
  value('vy',0);assert.equal($('guide-export').disabled,true);assert.equal($('formula-guide').querySelectorAll('.formula-chapter').length,0);
  click($('reset-params'));assert.equal($('guide-export').disabled,false);assert.equal($('formula-guide').querySelectorAll('.formula-chapter').length,14);
});
test('standalone manual download captures the current pair and values',()=>{
  value('vx',250);$('formula-head-a').value='6';change($('formula-head-a'));$('formula-head-b').value='7';change($('formula-head-b'));
  click($('guide-export'));assert.equal(downloads.length,3);assert.equal(downloads[2].type,'text/html;charset=utf-8');
});
test('basic screen exposes only three numeric inputs and quality preset; fixed fields are read-only',()=>{
  assert.equal($('basic-parameters').querySelectorAll('[data-param]').length,3);assert.ok($('quality-preset'));
  assert.equal($('advanced-settings').hasAttribute('open'),false);assert.equal(document.querySelector('[data-param="encoderScale"]'),null);assert.equal(document.querySelector('[data-param="stageStroke"]'),null);
  assert.ok($('fixed-settings').textContent.includes('3960'));assert.ok($('fixed-settings').textContent.includes('1025'));
});
test('cycle ledger retains green points and Cell colors across Glass and rewind',()=>{
  click($('reset-params'));$('plan-cap').value='2';change($('plan-cap'));const schedule=context.FlyingReviewApp.getSchedule();
  context.FlyingReviewApp.seek(schedule[0].nodes[1].exposureEnd+.001);assert.equal(state().covered.length,2);
  const circle=()=>document.querySelector('.map-point[data-head="1"] circle');assert.equal(circle().getAttribute('fill'),'#67dfa9');
  click($('next-glass'));assert.equal(state().currentGlass,2);assert.equal(state().covered.length,2);assert.equal(circle().getAttribute('fill'),'#67dfa9');
  assert.equal(document.querySelector('.moving-point[data-head="1"] circle').getAttribute('data-cycle-complete'),'true');assert.equal(document.querySelector('.map-cell[data-cell="1"]>rect').getAttribute('fill'),'#124b3e');
  context.FlyingReviewApp.seek(state().tact+schedule[1].nodes[1].exposureEnd+.001);assert.equal(state().covered.length,4);
  context.FlyingReviewApp.seek(0);assert.equal(state().covered.length,4);assert.ok($('screen-explanation').textContent.includes('이전 시각 조회'));
  context.FlyingReviewApp.seek(4*state().tact);assert.equal(state().covered.length,8);assert.equal(document.querySelectorAll('.coverage-head.complete').length,8);
  click($('restart'));assert.equal(state().covered.length,0);assert.notEqual(circle().getAttribute('fill'),'#67dfa9');
});
test('new repeated cycle resets coverage while end-of-cycle pause retains all marks',()=>{
  context.FlyingReviewApp.seek(state().planCount*state().tact);assert.equal(state().covered.length,8);const cycle=state().cycleNumber;
  $('loop').checked=true;click($('play'));assert.equal(state().covered.length,0);assert.equal(state().cycleNumber,cycle+1);frame(16);
  context.FlyingReviewApp.seek(state().planCount*state().tact-.001);click($('play'));frame(16);
  assert.equal(state().covered.length,0);assert.equal(state().clock,0);assert.ok(state().cycleNumber>cycle+1);frame(100);assert.equal(state().covered.length,0);click($('play'));$('loop').checked=false;
});
test('same Y and one-pixel quality explain different failure types without silent relaxation',()=>{
  click(document.querySelector('[data-preset="same"]'));assert.ok($('decision-summary').textContent.includes('실제 1점'));assert.ok($('change-advice').textContent.includes('동시에 도착'));assert.ok($('change-advice').textContent.includes('Glass'));
  click($('reset-params'));$('quality-preset').value='pixel';change($('quality-preset'));assert.equal(state().maxPerPass,0);assert.ok($('change-advice').textContent.includes('1.725'));assert.ok($('change-advice').textContent.includes('최소노출'));
  assert.equal($('change-advice').querySelector('[data-repair="maxBlurUm"]'),null);assert.ok(Math.abs(state().parameters.maxBlurUm-.1725)<1e-12);assert.equal(state().covered.length,0);
});
test('verified repair updates numeric condition, restarts ledger and recovers full planned cover',()=>{
  click($('reset-params'));value('exposureUs',20);assert.equal(state().maxPerPass,0);const action=$('change-advice').querySelector('[data-repair="exposureUs"]');assert.ok(action);click(action);
  assert.equal(state().parameters.exposureUs,10);assert.equal(state().maxPerPass,8);assert.equal(state().covered.length,0);assert.ok($('decision-summary').textContent.includes('Glass'));
  $('plan-cap').value='8';change($('plan-cap'));
});
(async()=>{
  const load=async data=>{
    Object.defineProperty($('load-config'),'files',{configurable:true,value:[{size:10000,text:async()=>JSON.stringify(data)}]});
    change($('load-config'));await new Promise(resolve=>setImmediate(resolve));
  };
  const guide=await downloads[2].text(),manual=parseHTML(guide).document;
  test('exported manual is standalone, readable and contains the selected snapshot',()=>{
    assert.equal(manual.querySelectorAll('.formula-guide .formula-chapter').length,14);
    assert.equal(manual.querySelectorAll('script,iframe,link[rel=stylesheet]').length,0);
    assert.ok(manual.body.textContent.includes('250.000'));assert.ok(manual.body.textContent.includes('H06 → H07'));
    const stored=JSON.parse(manual.querySelector('.manual-snapshot').textContent);assert.equal(stored.parameters.vx,250);assert.deepEqual(stored.explanationPair,[6,7]);
  });
  const config=JSON.parse(await downloads[0].text());config.parameters.vx=250;
  await load(config);test('condition JSON import revalidates all points and parameters',()=>{assert.equal(state().parameters.vx,250);assert.equal(state().maxPerPass,8);assert.equal($('error-box').hidden,true);});
  const before=JSON.stringify(state().points);await load({...config,scope:'wrong'});
  test('invalid JSON schema keeps existing conditions and reports failure',()=>{assert.equal(state().parameters.vx,250);assert.equal(JSON.stringify(state().points),before);assert.ok($('error-box').textContent.includes('기존 조건 유지'));});
  console.log(`${tests} DOM regression tests passed. Browser layout/device/hardware behavior not tested.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
