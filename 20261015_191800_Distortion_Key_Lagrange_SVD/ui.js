(function(){
'use strict';
const E=DistortionEngine,$=id=>document.getElementById(id),n=id=>Number($(id).value);
const layouts={uniform:[0,.25,.5,.75,1],uneven:[0,.18,.47,.82,1],cluster:[0,.05,.10,.15,1]};
const names={linear:'구간 선형',lagrange:'4차 라그랑주',smooth:'곡률 제약 + 라그랑주',small:'작은 곡률 공간 · 실험'};
const color={linear:'#788993',lagrange:'#176bc0',smooth:'#168263',small:'#bd700f',real:'#7956a5',raw:'#d7861d'};
let method='lagrange',attempt=0,manual=null,result;
const f=(v,d=2)=>Number.isFinite(v)?v.toFixed(d):'—';
const set=(id,value)=>$(id).textContent=value;
function svg(tag,attrs={},text){const e=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);if(text!==undefined)e.textContent=text;return e;}
function add(parent,tag,a,text){const e=svg(tag,a,text);parent.appendChild(e);return e;}
function path(parent,points,c,width=2,dash=''){if(points.some(p=>!p.every(Number.isFinite)))return;add(parent,'path',{d:points.map((p,i)=>(i?'L':'M')+p.map(v=>v.toFixed(3)).join(',')).join(' '),fill:'none',stroke:c,'stroke-width':width,'stroke-dasharray':dash});}
function options(){return {kind:$('shape').value,amp:n('amp'),noise:n('noise'),tol:n('tol'),maxRetry:n('retryMax'),attempt,weight:n('weight'),method,lambda:n('lambda'),anchor:$('anchor').checked,k:n('k'),limit:n('limit'),nodes:layouts[$('layout').value],manual};}
function outputs(){for(const id of ['amp','noise','tol','weight','lambda','retryMax','limit','k','probe'])set(id+'Out',n(id)+(id==='weight'?' %':['amp','noise','tol','limit'].includes(id)?' µm':id==='k'?' / 5':id==='retryMax'?' 회':''));}
function render(){
 outputs();result=E.run(options());const r=result;
 document.querySelectorAll('[data-method]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.method===method)));
 $('smallBtn').setAttribute('aria-pressed',String(method==='small'));
 for(const id of ['shape','amp','noise','layout'])$(id).disabled=!!manual;
 $('retryBtn').disabled=!r.canRetry||!!manual;
 set('attemptText',`현재 Attempt ${attempt+1} · Retry ${attempt}/${n('retryMax')}${manual?' · 직접 입력은 자동 Retry를 수행하지 않습니다.':''}`);
 set('judge',!r.valid?'측정 누락':r.chuck?'PASS':'NG');$('judge').className=r.chuck?'ok':'ng';
 set('errorRms',f(r.afterRms)+' µm');$('errorRms').className=r.afterRms!==null&&r.afterRms>r.beforeRms?'ng':'';
 set('permit',r.permit?'허용 · 모형':'차단');$('permit').className=r.permit?'ok':'ng';
 const status={MISSING:'9/10 · 필수 Key가 누락되어 판정 확정·보정 활성화를 차단합니다. 누락 값을 0으로 채우지 않습니다.',RETRY:'척킹 NG · 가공 금지. Retry 버튼은 재척킹 후 Fine Align과 10점 전체 재측정을 모사합니다.',HOLD:'척킹 NG · 최대 Retry 소진. Hold 상태이며 가공을 허용하지 않습니다.',COMP_LIMIT:'척킹 PASS · 후보 보정량이 한계를 넘어 가공을 차단합니다.',PASS:'척킹 PASS · 측정 완전성과 격자 보정 한계를 통과했습니다. 실제 설비의 버전·범위·통신 검사는 별도로 필요합니다.'};
 set('runStatus',`${status[r.status]} 원편차 최대 ${f(r.maxRaw)} µm / Tol ${n('tol')} µm · 후보 보정 최대 ${f(r.maxComp)} µm / 한계 ${n('limit')} µm.${!r.permit&&r.valid?' 아래 보정은 비교용 후보이며 활성화되지 않습니다.':''}`);
 $('runStatus').className='status'+(r.permit?'':' ng');
 $('invisibleNote').hidden=!!manual||$('shape').value!=='invisible';
 set('dataOrigin',manual?'입력한 Align 후 10점 편차':'가상 측정 · seed 고정');
 set('fitStats',`${names[method]} · Key 근사 RMS ${f(r.fitRms)} µm · ${manual?'직접 입력에는 내부 정답이 없어 보정 성능 RMS를 계산하지 않습니다.':`가상 격자(17×31)의 보정 전 RMS ${f(r.beforeRms)} → 후보 적용 후 ${f(r.afterRms)} µm · 잔류 최대 ${f(r.maxErr)} µm.`} 기하 분해 ${r.geometry.build}번 캐시 사용. 프로파일은 보정률 적용 전 변위장, 파란 점선은 선택 모델 × 보정률입니다.`);
 $('pointRows').replaceChildren();for(const p of r.points){const row=document.createElement('tr'),q=r.field(method,p.s,p.t);for(const value of [(p.side?'R':'L')+p.row+(p.row===0||p.row===4?' · Fine':' · Dist'),f(p.t,2),p.valid?p.delta.map(x=>f(x)).join(' / '):'—',q.map(x=>f(x)).join(' / '),p.valid?'유효':'누락']){const td=document.createElement('td');td.textContent=value;row.appendChild(td);}$('pointRows').appendChild(row);}
 board();profile();lab();
}
function board(){
 const r=result,b=$('board');b.replaceChildren();
 add(b,'rect',{x:150,y:30,width:400,height:270,fill:'#f5f9fc',stroke:'#b8ccd9'});
 for(let i=0;i<5;i++){const y=30+i*67.5;add(b,'line',{x1:150,y1:y,x2:550,y2:y,stroke:'#dfe8ef'});add(b,'text',{x:130,y:y+4,'text-anchor':'end','font-size':11,fill:'#586f80'},f(i/4,2));}
 for(let i=1;i<4;i++)add(b,'line',{x1:150+i*100,y1:30,x2:150+i*100,y2:300,stroke:'#dfe8ef'});
 add(b,'text',{x:350,y:325,'text-anchor':'middle','font-size':12,fill:'#586f80'},'X 비율 0 → 1 · Y 비율 위 0 → 아래 1');
 const vals=r.points.filter(p=>p.valid).flatMap(p=>p.delta.map(Math.abs));if(r.valid)vals.push(...r.grid.flatMap(p=>p.comp.map(Math.abs)));if(!manual)vals.push(...r.grid.flatMap(p=>p.real.map(Math.abs)));
 const scale=29/Math.max(1,...vals);
 function arrow(x,y,v,c){if(!v.every(Number.isFinite))return;const dx=v[0]*scale,dy=v[1]*scale,l=Math.hypot(dx,dy);if(l<.35){add(b,'circle',{cx:x,cy:y,r:1,fill:c});return;}add(b,'line',{x1:x,y1:y,x2:x+dx,y2:y+dy,stroke:c,'stroke-width':1.6});const a=Math.atan2(dy,dx),s=3.5;path(b,[[x+dx-s*Math.cos(a-.5),y+dy-s*Math.sin(a-.5)],[x+dx,y+dy],[x+dx-s*Math.cos(a+.5),y+dy-s*Math.sin(a+.5)]],c,1.6);}
 for(let j=1;j<6;j++)for(let i=1;i<8;i++){const s=i/8,t=j/6,x=150+s*400,y=30+t*270;if(!manual)arrow(x,y,r.fieldTruth(s,t),color.real);if(r.valid)arrow(x,y,r.field(method,s,t).map(x=>x*n('weight')/100),color.lagrange);}
 for(const p of r.points){const x=150+p.s*400,y=30+p.t*270;if(p.valid)arrow(x,y,p.delta,color.raw);const fine=p.row===0||p.row===4;if(!p.valid){path(b,[[x-5,y-5],[x+5,y+5]],'#b43e49');path(b,[[x-5,y+5],[x+5,y-5]],'#b43e49');}else if(fine)add(b,'rect',{x:x-4,y:y-4,width:8,height:8,fill:'white',stroke:color.raw,'stroke-width':2});else add(b,'circle',{cx:x,cy:y,r:4,fill:'white',stroke:color.raw,'stroke-width':2});add(b,'text',{x:x+(p.side?45:-45),y:y+4,'text-anchor':p.side?'start':'end','font-size':11,fill:'#465f72'},(p.side?'R':'L')+p.row+(fine?' Fine':''));}
 add(b,'text',{x:350,y:345,'text-anchor':'middle','font-size':11,fill:'#586f80'},`벡터 표시 배율 ${f(scale)} px/µm · 양의 X는 오른쪽, 양의 Y는 아래`);
}
function chartFrame(b,values,title){
 const max=Math.max(1,...values.filter(Number.isFinite).map(Math.abs))*1.15,x=t=>65+610*t,y=v=>121-85*v/max;
 for(let i=-2;i<=2;i++){const value=i*max/2,yy=y(value);add(b,'line',{x1:65,y1:yy,x2:675,y2:yy,stroke:i===0?'#bcccd8':'#e2eaf0'});add(b,'text',{x:57,y:yy+4,'text-anchor':'end','font-size':10,fill:'#586f80'},f(value,1));}
 for(let i=0;i<=4;i++){const xx=x(i/4);add(b,'line',{x1:xx,y1:36,x2:xx,y2:206,stroke:'#e2eaf0'});add(b,'text',{x:xx,y:222,'text-anchor':'middle','font-size':10,fill:'#586f80'},f(i/4,2));}
 add(b,'text',{x:65,y:19,'font-size':11,fill:'#586f80'},title);return {x,y};
}
function profile(){
 const r=result,b=$('profile');b.replaceChildren();const s=n('profileSide'),axis=n('profileAxis'),series={};
 for(const m of ['linear','lagrange','smooth',...(method==='small'?['small']:[])])series[m]=Array.from({length:101},(_,i)=>({t:i/100,v:r.field(m,s,i/100)[axis]}));
 const real=!manual?Array.from({length:101},(_,i)=>({t:i/100,v:r.fieldTruth(s,i/100)[axis]})):[];
 const measured=r.points.filter(p=>p.s===s&&p.valid),values=[...Object.values(series).flat().map(p=>p.v),...real.map(p=>p.v),...measured.map(p=>p.delta[axis])];
 const {x,y}=chartFrame(b,values,`${s===.5?'중앙 · 측정 Key 없음':s===0?'왼쪽':'오른쪽'} / ${axis===0?'X':'Y'} 편차 [µm] · 가로축 Y 비율`);
 if(real.length)path(b,real.map(p=>[x(p.t),y(p.v)]),color.real,2.2,'5 3');
 for(const [m,points] of Object.entries(series))path(b,points.map(p=>[x(p.t),y(p.v)]),color[m],method===m?2.8:1.3);
 if(r.valid)path(b,series[method].map(p=>[x(p.t),y(p.v*n('weight')/100)]),color.lagrange,1.5,'2 4');
 for(const p of measured)add(b,'circle',{cx:x(p.t),cy:y(p.delta[axis]),r:4,fill:color.raw,stroke:'white'});
 add(b,'text',{x:65,y:246,'font-size':10,fill:'#586f80'},`회색 선형 · 파랑 라그랑주 · 초록 곡률 제약${method==='small'?' · 주황 작은 공간':''}${manual?'':' · 보라 점선 가상 정답'}`);
 if(!r.valid)add(b,'text',{x:370,y:115,'text-anchor':'middle','font-size':16,fill:'#b43e49'},'필수 측정 누락 · 보정장을 생성하지 않음');
}
function lab(){
 const kind=$('matrix').value,index=n('mode'),magnitude=n('probe'),r=E.lab(result.geometry,kind,index,magnitude),b=$('modePlot');b.replaceChildren();
 const {x,y}=chartFrame(b,r.curve.map(p=>p.value),kind==='A'?'계수 방향이 만드는 다항식 값 · 가로축 Y 비율':'노드 방향이 만드는 보간 형상 · 가로축 Y 비율');
 path(b,r.curve.map(p=>[x(p.t),y(p.value)]),color.lagrange,2.5);
 if(kind!=='A')result.geometry.nodes.forEach((t,j)=>add(b,'circle',{cx:x(t),cy:y(r.v[j]*magnitude),r:4,fill:color.raw}));
 $('spectra').replaceChildren();r.s.forEach((sigma,i)=>{const row=document.createElement('div');row.className='spec'+(index===i?' active':'');const label=document.createElement('span');label.textContent='σ'+(i+1);const track=document.createElement('div');track.className='track';const bar=document.createElement('span');bar.style.width=(100*sigma/r.s[0])+'%';track.appendChild(bar);const value=document.createElement('span');value.textContent=sigma<1e-10?'≈ 0':sigma.toPrecision(4);row.append(label,track,value);$('spectra').appendChild(row);});
 set('modeStats',`‖입력‖ = ${f(r.normInput)}　 σ${index+1} = ${r.s[index].toExponential(3)}　 ‖행렬 × 입력‖ = ${r.normResponse.toExponential(3)}`);
 const zero=r.s[index]<1e-10;
 const opinion=kind==='A'?`관측 행렬 A: ${index===4?'가장 작은 σ 방향입니다. ':''}계수 변화가 5점 관측에 ${f(r.s[index],4)}배로 드러납니다. 역산하면 이 방향의 관측 잡음이 약 ${f(1/r.s[index],2)}배 증폭됩니다. 점 사이 형상의 안정성도 별도 확인해야 합니다.`:kind==='L'?`곡률 행렬 L: ${zero?'곡률 0에 가까운 선형 형상 공간입니다.':'이 방향의 곡률 크기를 표시합니다.'} 작은 σ 방향은 매끄러움에 유리하지만 측정 일치·실제 내부 변형·척킹 PASS를 보장하지 않습니다.`:`조건 행렬 C: ${zero?'두 끝점 변화가 0인 정확한 영공간 방향입니다. 끝점 조건을 유지하며 내부 모양을 바꿀 수 있습니다.':'이 방향으로 움직이면 끝점 조건이 변합니다.'} 이 공간 안에서 무엇을 최소화할지 목적함수가 더 필요합니다.`;
 set('modeOpinion',opinion);set('vectorValues',`v${index+1} = [${r.v.map(v=>f(v,5)).join(', ')}] · 벡터의 ±부호는 해석을 바꾸지 않습니다.`);
}
for(const id of ['amp','noise','tol','retryMax','weight','lambda','limit','k'])$(id).addEventListener('input',()=>{if(['amp','noise','retryMax'].includes(id))attempt=0;render();});
for(const id of ['anchor','layout'])$(id).addEventListener('change',()=>{attempt=0;render();});
$('shape').addEventListener('change',()=>{attempt=0;const shape=$('shape').value;$('amp').value=['retry','stubborn'].includes(shape)?55:shape==='invisible'?40:shape==='local'?35:22;$('noise').value=shape==='invisible'?0:1;render();});
document.querySelectorAll('[data-method]').forEach(b=>b.addEventListener('click',()=>{method=b.dataset.method;render();}));
$('smallBtn').addEventListener('click',()=>{method='small';render();});
$('retryBtn').addEventListener('click',()=>{if(result.canRetry&&!manual){attempt++;render();}});
$('resetAttempt').addEventListener('click',()=>{attempt=0;render();});
for(const id of ['profileSide','profileAxis'])$(id).addEventListener('change',profile);
for(const id of ['matrix','mode'])$(id).addEventListener('change',lab);
$('probe').addEventListener('input',()=>{outputs();lab();});
$('applyManual').addEventListener('click',()=>{try{const rows=$('manualData').value.trim().split(/\r?\n/).map(line=>line.trim().split(/[\s,]+/));if(rows.length!==10||rows.some(row=>row.length!==2||row.some(v=>v===''||!Number.isFinite(Number(v)))))throw Error('정확히 10줄에 숫자 X Y를 두 개씩 입력하세요.');manual=rows.map(row=>row.map(Number));attempt=0;set('manualError','');render();}catch(e){set('manualError',e.message);}});
$('useSynthetic').addEventListener('click',()=>{manual=null;attempt=0;set('manualError','');render();});
render();
})();
