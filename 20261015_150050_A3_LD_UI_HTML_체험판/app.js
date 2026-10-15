(() => {
'use strict';
const P=window.PROTOTYPE;
if(!P){document.getElementById('fatal').hidden=false;document.getElementById('fatal').textContent='데이터 파일을 읽지 못했습니다. ZIP 전체를 압축 해제하고 index.html과 prototype-data.js, assets 폴더를 함께 유지하세요.';return;}
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId=Object.fromEntries(P.pages.map(d=>[d.id,d]));
const key='A3LD_UI_LOCAL_DEMO_V1';
const initial=()=>({heads:[1,3,7],focusHead:1,recipe:'test0929',cell:1,shot:1,beam:6,values:{},savedValues:{},history:[],logs:[],layers:{설계:true,가공:true,Review:true},melsecLocked:true,melsecDraft:'0',moveMode:'절대 ABS',demoFlags:{}});
let state;try{state={...initial(),...JSON.parse(localStorage.getItem(key)||'null')};}catch{state=initial();}
if(!Array.isArray(state.heads))state.heads=[1,3,7];
let current='A01',modalId=null,modalReturnFocus=null,headDraft=[...state.heads],helpMode=false,showMarks=false,pinned=false,hoverTimer,toastTimer,progressTimer,renderEpoch=0,activeTour=null,tourIndex=0,lastDetail=null;
const navHistory=['A01'];let navPos=0;const workVisited={};
const nativeHelp=new Map();let nativeSeq=0;
const pad=n=>String(n).padStart(2,'0'),headsText=()=>state.heads.length?state.heads.map(n=>'H'+pad(n)).join(' · '):'선택 없음';
function persist(){try{localStorage.setItem(key,JSON.stringify(state));}catch{}}
function log(s){state.logs.unshift(new Date().toLocaleTimeString('ko-KR')+'  '+s);state.logs=state.logs.slice(0,80);persist();renderLog();}
function renderLog(){$('log-rows').replaceChildren(...state.logs.slice(0,12).map(s=>{const e=document.createElement('div');e.textContent=s;return e;}));}
function toast(s){$('toast').textContent=s;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,3300);}
function context(){
 const pending=Object.keys(state.values).filter(k=>state.values[k]!==state.savedValues[k]).length;
 $('live-context').textContent=`체험 상태 · Recipe ${state.recipe} / 선택 ${headsText()} / 확인 Head H${pad(state.focusHead)} / Cell C${pad(state.cell)} · Shot ${pad(state.shot)} · Beam B${pad(state.beam)} / 미저장 초안 ${pending}개 · 장비 전송 없음 / PNG 표의 숫자는 정적 예시`;
 const d=byId[current];
 let html=`<span class="dynamic-line" style="left:35.72%;top:${86/d.height*100}%;width:17.1%;height:${32/d.height*100}%">Recipe ${esc(state.recipe)} · 체험 선택</span><button class="dynamic-line" style="left:54.16%;top:${86/d.height*100}%;width:15.1%;height:${32/d.height*100}%;border:0;min-height:0" data-native="heads">${esc(headsText())}</button>`;
 if(d.menu!=='Auto'&&d.menu!=='안내')html+=`<span class="dynamic-line side" style="left:1.1%;top:${614/d.height*100}%;width:11.5%">Recipe ${esc(state.recipe)}</span><span class="dynamic-line side" style="left:1.1%;top:${641/d.height*100}%;width:11.5%">${esc(headsText())}</span><span class="dynamic-line side" style="left:1.1%;top:${668/d.height*100}%;width:11.5%">Cell C${pad(state.cell)} · 유지</span><span class="dynamic-line context" style="left:15.9%;top:${276/d.height*100}%;width:66.5%">작업 대상 ${esc(state.recipe)} / ${esc(headsText())} / C${pad(state.cell)} · 초안·결과 유지</span>`;
 $('dynamic-context').innerHTML=d.menu==='안내'?'':html;
 $('dynamic-context').querySelectorAll('[data-native]').forEach(el=>{el.onclick=()=>openHeads();attachNativeHelp(el,'Head 복수 선택','현재 선택한 Head 집합은 다음 작업에서도 유지됩니다. H01·H03·H07처럼 떨어진 Head를 함께 고르고 전체 선택·해제할 수 있습니다. 상태 확인 Head와 실제 작업 대상 집합은 다릅니다.');});
 $('back').disabled=navPos===0;$('forward').disabled=navPos===navHistory.length-1;
}
function vKey(d,h){return d.workspace[0]+'|'+h.label;}
function selectable(h){
 const base=h.value.replace(/▾/g,'').trim();let opts=[base];
 if(/Head/.test(h.label))opts=['H01','H02','H03','H04','H05','H06','H07','H08'];
 else if(/DOE|분기.*개수/.test(h.label)&&/×|x/.test(base))opts=['3×3','4×4','5×5'];
 else if(/Cell/.test(h.label))opts=Array.from({length:45},(_,i)=>'C'+pad(i+1));
 else if(/Beam/.test(h.label))opts=Array.from({length:25},(_,i)=>'B'+pad(i+1));
 else if(/모드|방식|유형|범위|기준|형상/.test(h.label))opts=[base,...base.split(/\s*\/\s*/).filter(v=>v.length<35)];
 else if(/ONLINE|LOCAL/.test(base))opts=['ONLINE','LOCAL'];
 return [...new Set([base,...opts])];
}
function buttonEl(h,d,modal=false){
 const e=document.createElement('button');e.type='button';e.className='hotspot'+(h.action?.type==='head'?' is-head':'');e.dataset.hid=h.id;e.dataset.kind=h.kind;e.setAttribute('aria-label',h.label+(h.value?' · '+h.value:''));e.textContent=h.label;
 position(e,h.box,d,modal);
 if(h.action?.type==='head'){e.classList.toggle('selected',headDraft.includes(h.head));e.setAttribute('aria-pressed',String(headDraft.includes(h.head)));e.innerHTML=`H${pad(h.head)} ${headDraft.includes(h.head)?'☑':'☐'}<small>C${h.head<=4?0:1} · Task ${(h.head-1)%4+1}</small>`;}
 e.addEventListener('click',()=>{if(helpMode||!h.action){showHelp(h,e,true);return;}hideHelp();if(h.blocked){inlineNote('현재 조작 제한 · '+h.label,h.blocked+' · 현재 시안에서는 조건 미확인 상태를 보여줍니다. 실제 안전 상태나 승인 응답 없이 시연 진행으로 바꾸지 않습니다. 관련 조건을 확인하는 UI를 먼저 봅니다.',d.menu==='Auto'?['D03','A04']:['D13']);return;}act(h.action,h,d);});attachHelp(e,h);return e;
}
function position(el,b,d,modal){let [x,y,w,h]=b;if(modal){x-=408;y-=450;el.style.left=x/1340*100+'%';el.style.top=y/640*100+'%';el.style.width=w/1340*100+'%';el.style.height=h/640*100+'%';}else{el.style.left=x/1920*100+'%';el.style.top=y/d.height*100+'%';el.style.width=w/1920*100+'%';el.style.height=h/d.height*100+'%';}}
function fieldEl(h,d,modal){
 const wrapper=document.createElement('div');wrapper.className='field-wrapper';position(wrapper,h.box,d,modal);wrapper.dataset.hid=h.id;
 const inp=document.createElement(h.control==='select'?'select':'input');inp.setAttribute('aria-label',h.label);const k=vKey(d,h),base=h.value.replace(/▾/g,'').trim();
 if(h.control==='select'){for(const opt of selectable(h)){const e=document.createElement('option');e.value=opt;e.textContent=opt;inp.append(e);}inp.value=state.values[k]??base;}
 else if(h.control==='check'){inp.type='checkbox';inp.checked=state.values[k]===undefined?/☑/.test(base):!!state.values[k];}
 else{inp.type='text';inp.value=state.values[k]??base;inp.autocomplete='off';inp.spellcheck=false;}
 inp.dataset.key=k;inp.dataset.base=base;
 const dirty=state.values[k]!==undefined&&state.values[k]!==state.savedValues[k];wrapper.classList.toggle('changed',dirty);
 const label=document.createElement('label');label.textContent=h.label;wrapper.append(label,inp);
 const b=document.createElement('button');b.className='field-help';b.textContent='?';b.type='button';b.setAttribute('aria-label',h.label+' 설명');b.onclick=()=>showHelp(h,b,true);wrapper.append(b);
 inp.oninput=()=>{state.values[k]=inp.type==='checkbox'?inp.checked:inp.value;wrapper.classList.add('changed');context();persist();};
 inp.onchange=()=>{log(`초안 변경: ${h.label} (체험값만 저장)`);if(/Head/.test(h.label)&&/^H\d{2}$/.test(inp.value)){state.focusHead=Number(inp.value.slice(1));context();}if(/Cell/.test(h.label)&&/^C\d{2}$/.test(inp.value)){state.cell=Number(inp.value.slice(1));context();}};
 attachHelp(inp,h);attachHelp(wrapper,h);attachHelp(b,h);
 return wrapper;
}
function renderHotspots(d,container,modal=false){
 const fragment=document.createDocumentFragment();for(const h of d.hotspots){if(modal&&(h.box[0]<408||h.box[1]<450||h.box[0]+h.box[2]>1749||h.box[1]+h.box[3]>1091))continue;fragment.append(h.action?.type==='edit'&&h.control?fieldEl(h,d,modal):buttonEl(h,d,modal));}container.replaceChildren(fragment);
 if(d.id==='D01'){
  const table=document.createElement('section');table.className='head-live-table';position(table,[1108,632,592,276],d,modal);table.innerHTML='<table><thead><tr><th>Head</th><th>Controller / Task</th><th>체험 선택</th></tr></thead><tbody>'+headDraft.map(n=>`<tr><td>H${pad(n)}</td><td>${n<=4?0:1} / ${(n-1)%4+1}</td><td>선택 초안</td></tr>`).join('')+'</tbody></table><p>선택 '+headDraft.length+'개 · 적용 전 초안 / 미사용 판정은 실제 장비 연동 사항</p>';container.append(table);table.querySelectorAll('th,td,p').forEach(e=>attachNativeHelp(e,e.textContent,'지금 선택한 Head 집합을 실시간 표시합니다. 전체 선택·해제로 바꿀 수 있으며 선택 적용을 눌러야 공통 작업 대상에 반영합니다. 취소하면 적용 전 집합을 유지합니다. 실제 Head 사용 가능 여부는 장비 인터락과 별도입니다.'));
 }
}
function goto(id,{record=true,workspace=false}={}){
 const d=byId[id];if(!d)return toast('연결할 상태가 없습니다.');
 if(d.layout==='dialog'){openModal(id);return;}
 closeModal(false);hideHelp();const prev=byId[current];current=id;renderEpoch++;
 if(record){navHistory.splice(navPos+1);navHistory.push(id);navPos=navHistory.length-1;}
 if(d.menu!=='Auto'&&d.menu!=='안내'){const k=d.menu+'|'+d.workspace[0];workVisited[k]=[...new Set([...(workVisited[k]||[]),id])];}
 $('scene').value=id;$('screen-image').src='assets/'+id+'.png';$('screen-image').alt=`${id} ${d.title} · UI 설계 예시 · 실제 프로그램 캡처 아님`;
 $('scene-wrap').style.aspectRatio=`1920 / ${d.height}`;renderHotspots(d,$('hotspots'));renderSummaries();renderNative(d);context();
 if(activeTour)$('tour-text').textContent=`${tourIndex+1} / ${activeTour.steps.length} · ${d.title}`;
 document.title=`${id} ${d.title} · A3 LD UI 체험판`;try{history.replaceState(null,'','#'+id);}catch{}
 if(workspace)toast('같은 작업공간의 다음 영역을 펼쳤습니다. 대상·입력값은 유지됩니다.');
 if(prev?.menu!==d.menu)$('canvas-scroll').scrollLeft=0;
}
function renderSummaries(){
 const d=byId[current];$('workspace-summaries').replaceChildren();if(d.menu==='Auto'||d.menu==='안내')return;
 const k=d.menu+'|'+d.workspace[0],ids=(workVisited[k]||[]).filter(id=>id!==current);
 for(const id of ids){const b=document.createElement('button');b.className='summary-chip';b.innerHTML=`✓ ${esc(byId[id].title)} <small>접힘 · 체험값 유지 · 펼치기</small>`;b.onclick=()=>goto(id,{workspace:true});$('workspace-summaries').append(b);attachNativeHelp(b,'완료 영역 요약 · 펼치기','방문한 작업 영역을 접어놓고 다음 작업을 진행합니다. 체크 표시는 체험판에서 방문한 영역의 요약이며 실장비 가공 완료 판정이 아닙니다. 다시 펼쳐도 해당 영역의 입력 초안과 공통 대상은 유지합니다.');}
}
function openModal(id){
 const d=byId[id];if(byId[current].menu==='Auto'){inlineNote(d.title,'Auto에서는 확인 내용도 같은 대시보드 아래 펼칩니다. 탭·별도 팝업은 열지 않습니다.');return;}
 hideHelp();modalReturnFocus=document.activeElement;modalId=id;if(id==='D01')headDraft=[...state.heads];$('modal-image').src='assets/'+id+'.png';$('modal').setAttribute('aria-label',d.title);renderHotspots(d,$('modal-hotspots'),true);$('modal-backdrop').hidden=false;
 requestAnimationFrame(()=>$('modal-hotspots').querySelector('button,input,select')?.focus({preventScroll:true}));
}
function closeModal(focus=true){modalId=null;$('modal-backdrop').hidden=true;$('modal-hotspots').replaceChildren();hideHelp();if(focus&&modalReturnFocus?.isConnected)modalReturnFocus.focus({preventScroll:true});modalReturnFocus=null;}
function openHeads(){if(byId[current].menu==='Auto'){headDraft=[...state.heads];inlineHeadPicker();}else openModal('D01');}
function act(a,h,d){
 if(current==='M05'&&d?.id?.startsWith('R')&&['route','workspace'].includes(a.type)&&a.target?.startsWith('R')){if(['R09','R10','R11','R12'].includes(a.target))renderCorrection(true);else renderEmbedded(a.target);return;}
 if(a.type==='route'){goto(a.target);return;}
 if(a.type==='workspace'){goto(a.target,{workspace:true});return;}
 if(a.type==='guide'){goto('00');return;}
 if(a.type==='heads'){openHeads();return;}
 if(a.type==='head'){headDraft=headDraft.includes(a.head)?headDraft.filter(n=>n!==a.head):[...headDraft,a.head].sort((a,b)=>a-b);if(modalId)renderHotspots(byId[modalId],$('modal-hotspots'),true);else inlineHeadPicker();return;}
 if(a.type==='headInspect'){state.focusHead=a.head;persist();context();inlineNote(`H${pad(a.head)} · Task / 축 / 파워 상태`,`Controller ${a.head<=4?0:1} · Task ${(a.head-1)%4+1} / Task IDLE / Laser 12.0 W / PowerMeter 예시 12010 mW. Task 상태, 실제 안전 준비와 가상축 여부를 서로 다르게 읽습니다.`,['A04','A08']);return;}
 if(a.type==='cellSelect'){state.cell=a.cell;state.shot=1;persist();context();renderCoordinate(true);return;}
 if(a.type==='beam'){state.beam=a.beam;persist();context();inlineNote(`선택 Beam B${pad(a.beam)}`,'1 Point는 DOE 전체 분기빔을 포함하는 하나의 Shot입니다. 선택 Beam은 해당 Shot의 어느 빔을 확인할지 지정하는 체험 상태입니다. 3×3·4×4·5×5의 실측 번호·방향 매핑은 공정 사양으로 확인해야 합니다.');return;}
 if(a.type==='layer'){state.layers[a.name]=!state.layers[a.name];persist();renderCoordinate(true);return;}
 if(a.type==='recipeSelect'){state.recipe=String(a.name).match(/test\w+/)?.[0]||'test0929';persist();context();inlineNote('Recipe 미리보기 선택','현재 목록의 Recipe를 확인 대상으로 선택했습니다. 운전 Recipe 적용과 DOE Z 장치 이동 완료는 별도입니다. 이 체험은 실제 레시피 파일을 읽거나 장치를 움직이지 않습니다.',['R02','R04','D05']);return;}
 if(a.type==='moveMode'){state.moveMode=a.name;persist();inlineNote('이동 방식 · '+a.name,'절대 ABS는 원점 기준 목표 위치, 상대 REL은 현재 위치 기준 이동 거리입니다. 현재 선택을 체험값으로 유지하며 실제 좌표를 계산하거나 축에 전송하지 않습니다.');return;}
 if(a.type==='inspect'){if(/MOF 보정|Offset 후보|원본과 후보|추천값|원본과|보정/.test(a.name)){renderCorrection(true);return;}if(/Cell|Shot|좌표|Point|Beam/.test(a.name)){renderCoordinate(true);return;}if(/신호|Handshake|Interface|요청 원문|승인/.test(a.name)){renderSignals(true);return;}if(/변경 비교|현재 옵션과/.test(a.name)){renderDrafts(true);return;}if(/삭제|신규|매칭 행|Head 조건 복사|TEG 파일|Model 선택/.test(a.name)){inlineEditor(a.name);return;}inlineNote(a.name,h?.help?.sections?.map(([t,s])=>t+': '+s).join('\n\n')||'선택 대상과 원본·현재값을 같은 작업공간에서 확인하는 인라인 보조 영역입니다. 실제 장비·파일에는 변경하지 않습니다.');return;}
 if(a.type==='demo')demo(a,h,d);
}
function demo(a,h,d){
 const n=a.name;
 if(n==='close'){closeModal();return;}
 if(n==='headsAll'||n==='headsNone'){headDraft=n==='headsAll'?[1,2,3,4,5,6,7,8]:[];if(modalId)renderHotspots(byId[modalId],$('modal-hotspots'),true);else inlineHeadPicker();return;}
 if(n==='headsApply'){state.heads=[...headDraft];if(state.heads.length&&!state.heads.includes(state.focusHead))state.focusHead=state.heads[0];persist();context();closeModal();renderNative(byId[current]);log('Head 선택 적용: '+headsText());return;}
 if(n==='stop'){clearInterval(progressTimer);progressTimer=null;log('체험 정지 요청 · 실제 정지 명령 아님');inlineNote('체험 진행 중단','현재 시연 진행 표시를 중단했습니다. Cycle Stop·즉시 정지·Laser Off의 실제 장비 범위는 다릅니다. 브라우저 버튼은 실제 장치 또는 안전 회로를 정지시키지 않습니다.');return;}
 if(n==='export'){exportCsv();return;}
 if(n==='save'){state.savedValues={...state.values};persist();log('브라우저 체험 초안 저장 · 실제 파일 저장/운전 적용 없음');closeModal();goto(current,{record:false});toast('체험값을 이 브라우저에 저장했습니다.');return;}
 if(n==='discard'){const w=byId[current].workspace[0]+'|';for(const k of Object.keys(state.values))if(k.startsWith(w)){if(state.savedValues[k]===undefined)delete state.values[k];else state.values[k]=state.savedValues[k];}persist();closeModal();goto(current,{record:false});toast('이 작업공간의 미저장 초안만 되돌렸습니다.');return;}
 if(n==='angle'||n==='shift'){inlineNote(h?.label||'입력 후보 변경','이 버튼은 위치·Shift 후보를 변경하는 조작입니다. 입력란은 편집할 수 있지만 실제 공정 좌표·장치 각도 계산은 이 시안 범위에 포함하지 않았습니다. 변경 후보와 적용 대상을 구분해 확인합니다.');return;}
 if(['apply','recipeApply','correction','defaultOffset','window','reset','watchdog','home','fault','mofOff','copy'].includes(n)){
  closeModal();confirmDemo(n,h?.label||n);return;
 }
 if(n==='precheck'||n==='validate'){closeModal();inlineNote('유효성·준비 조건 확인 예시','Recipe 유효성 승인, 장치 Ready, 파워 보정 유효 상태는 각각 별도로 확인합니다. 이 체험판은 RMS/PLC 응답을 수신하지 않으므로 실제 승인 또는 안전 OK를 생성하지 않습니다. 승인 대기·차단 사유와 대상 버전을 함께 확인하는 UI입니다.',['A07','D03']);return;}
 if(n==='capture'){inlineNote('현재값 취득 체험','화면에 있는 기존 예시값을 참조하는 단계입니다. 실제 Vision·MELSEC·축 위치를 읽지 않습니다. 기준자료의 출처·수신 시각·대상 Recipe와 단위를 확인하는 구성을 보여줍니다.');return;}
 if(n==='candidate'){state.demoFlags.candidate=true;persist();renderCorrection(true);toast('계산하지 않은 예시 보정 후보를 비교합니다.');return;}
 if(n==='connect'||n==='disconnect'){inlineNote('통신 '+(n==='connect'?'연결':'해제')+' 체험','이 HTML은 connect-src none으로 외부 통신을 차단했습니다. 실제 IP/포트·PLC·Vision·레이저로 접속하지 않습니다. 연결 여부, 응답 수신, Heartbeat, 데이터 유효 상태를 각각 구분하는 화면만 확인합니다.');return;}
 if(['refresh','load','filter','monitor','ack'].includes(n)){log((h?.label||n)+' · 예시 화면 조회/체험');toast('설계 예시를 확인했습니다. 실제 장치 조회는 하지 않았습니다.');if(n==='load')renderDrafts(true);return;}
 if(a.target)goto(a.target);
 runDemo(n,h?.label||n);
}
function nativeCard(id,title,subtitle=''){
 let card=$(id);if(card)card.remove();card=document.createElement('section');card.className='native-card';card.id=id;card.innerHTML=`<h2>${esc(title)}</h2>${subtitle?`<p class="subtle">${esc(subtitle)}</p>`:''}`;$('native-details').append(card);lastDetail=id;return card;
}
function linkButtons(card,ids){const row=document.createElement('div');row.className='native-actions';for(const id of ids){if(!byId[id])continue;const b=document.createElement('button');b.textContent=byId[id].title;b.onclick=()=>current==='M05'&&id.startsWith('R')?renderEmbedded(id):goto(id,{workspace:byId[id].workspace[0]===byId[current].workspace[0]});row.append(b);attachNativeHelp(b,byId[id].title,`관련 ${id} 영역으로 이어집니다. MOF의 Review는 현재 작업공간 안에서 펼쳐집니다. 대상과 초안은 유지하며 실제 장비 조작은 하지 않습니다.`);}card.append(row);}
function renderEmbedded(id){
 const d=byId[id];if(!d)return;const card=nativeCard('mof-review-inline',d.title+' · MOF 안에서 이어하기','메인 메뉴를 바꾸지 않고 검사 설정·실행·결과를 같은 대상에 연결합니다. 도식과 값은 PNG 정적 예시이며 입력은 체험 초안입니다.');
 const crop=document.createElement('div');crop.className='embedded-crop';const surface=document.createElement('div');surface.className='embedded-surface';const img=document.createElement('img');img.src='assets/'+id+'.png';img.alt=d.title+' UI 예시 / 패널 영역';const hits=document.createElement('div');hits.className='embedded-hotspots';surface.append(img,hits);crop.append(surface);card.append(crop);renderHotspots(d,hits);for(const e of [...hits.children]){const h=d.hotspots.find(h=>h.id===e.dataset.hid);if(h&&(h.box[0]<288||h.box[1]<350||h.box[1]+h.box[3]>1072))e.remove();}
 const row=document.createElement('div');row.className='native-actions';[['검사 조건 펼치기','R05'],['PtoP 펼치기','R07'],['결과 펼치기','R08']].forEach(([label,id])=>{const b=document.createElement('button');b.textContent=label;b.onclick=()=>renderEmbedded(id);row.append(b);attachNativeHelp(b,label,'MOF의 Recipe·Head·입력·Cell을 유지하고 같은 작업공간에서 검사 영역을 바꿉니다. 반복 메뉴 이동 없이 관련 조건과 결과를 확인합니다.');});const b=document.createElement('button');b.textContent='현재·후보 보정 비교';b.onclick=()=>renderCorrection(true);row.append(b);attachNativeHelp(b,b.textContent,'검사 결과를 확인한 후 원본·현재·후보·적용 범위를 같은 공간에서 비교합니다. 공정 좌표 계산과 실제 적용은 하지 않습니다.');card.append(row);addClose(card);markDetail(card);
}
function inlineNote(title,body,ids=[]){const card=nativeCard('inline-inspector',title,'같은 작업공간의 인라인 상세 · UI 설명 / 예시');for(const para of body.split('\n\n')){const p=document.createElement('p');p.textContent=para;card.append(p);}linkButtons(card,ids);addClose(card);markDetail(card);}
function addClose(card){const b=document.createElement('button');b.textContent='이 상세 접기';b.onclick=()=>{card.remove();lastDetail=null;};const row=document.createElement('div');row.className='native-actions';row.append(b);card.append(row);attachNativeHelp(b,'인라인 상세 접기','대표 화면을 바꾸거나 대상·입력을 초기화하지 않고 보조 확인 영역만 접습니다. 다시 클릭하면 현재 선택 문맥으로 펼칩니다.');}
function markDetail(card){$('jump-detail').disabled=false;card.setAttribute('tabindex','-1');toast('화면 아래 상세를 펼쳤습니다. ‘펼친 상세로 ↓’를 누르면 이동합니다.');}
function inlineHeadPicker(){const card=nativeCard('head-picker','Head 복수 선택 · Auto 인라인','상태 확인 Head와 가공 대상 집합을 구분합니다. 적용 전에는 선택 초안입니다.');const grid=document.createElement('div');grid.className='head-grid';for(let n=1;n<=8;n++){const b=document.createElement('button');b.textContent='H'+pad(n);b.setAttribute('aria-pressed',String(headDraft.includes(n)));b.onclick=()=>act({type:'head',head:n});grid.append(b);attachNativeHelp(b,'Head H'+pad(n),`Controller ${n<=4?0:1}, Task ${(n-1)%4+1}에 속하는 Head 예시입니다. 다른 Head와 함께 선택할 수 있습니다. 선택해도 안전·연결·파워 조건이 자동 충족되지는 않습니다.`);}card.append(grid);const row=document.createElement('div');row.className='native-actions';[['전체 선택','headsAll'],['전체 해제','headsNone'],['선택 적용','headsApply']].forEach(([label,name])=>{const b=document.createElement('button');b.textContent=label;b.onclick=()=>demo({name},{label},byId[current]);row.append(b);attachNativeHelp(b,label,'Head 선택 초안만 바꾸거나 적용하며 실제 장비에 명령하지 않습니다. 빈 선택도 허용하지만 작업 시작에는 유효한 대상이 필요합니다.');});card.append(row);addClose(card);markDetail(card);}
function renderCoordinate(explicit=false){
 const card=nativeCard('coordinate-detail',`Glass → Cell C${pad(state.cell)} → Shot 상세`,'기존 Git UI의 BACK TO GLASS·셀/샷 확대와 CHESS/MASKING 범례를 살린 구성 · 좌표 계산 없음');
 const legend=document.createElement('div');legend.className='legend';legend.innerHTML='<span>선택·확인 대상</span><span class="mask">MASKING: 가공 제외</span><span class="chess">CHESS: 패턴 구분</span>';card.append(legend);legend.querySelectorAll('span').forEach(e=>attachNativeHelp(e,e.textContent,'도식의 색·패턴은 어떤 영역인지 설명합니다. 회색 Masking 영역은 제외 상태 예시이며 실제 마스킹 계산 결과가 아닙니다.'));
 const controls=document.createElement('div');controls.className='native-actions';const back=document.createElement('button');back.textContent='BACK TO GLASS · 전체 배치';back.onclick=()=>{inlineNote('Glass 전체 배치 보기','상단 이미지의 45개 Cell 배치가 전체 Glass 예시입니다. 원하는 Cell을 누르면 해당 Cell의 Shot 상세를 같은 공간에서 확인할 수 있습니다. Cell 선택값은 유지됩니다.');card.remove();};controls.append(back);attachNativeHelp(back,'BACK TO GLASS','기존 프로그램의 확대 복귀 기능을 보존했습니다. 작업 대상을 잃지 않고 전체 Glass 배치로 돌아가 다음 Cell을 확인합니다.');
 for(const layer of ['설계','가공','Review']){const label=document.createElement('label'),box=document.createElement('input');box.type='checkbox';box.checked=state.layers[layer];box.onchange=()=>{state.layers[layer]=box.checked;persist();renderCoordinate();};label.append(box,document.createTextNode(layer+' 좌표 레이어'));controls.append(label);attachNativeHelp(box,layer+' 좌표 레이어','같은 위치에서 좌표 종류를 비교하기 위한 표시 선택입니다. 실제 좌표계 변환이나 보정 계산을 수행하지 않습니다.');}card.append(controls);
 const grid=document.createElement('div');grid.className='shot-grid';for(let i=1;i<=32;i++){const b=document.createElement('button');b.className=(i===state.shot?'selected ':'')+(i%11===0?'masked':i%2===0?'chess':'');b.innerHTML=`Shot ${pad(i)}<small>${i%11===0?'MASKING 제외 예시':'H'+pad(state.focusHead)+' / Beam 확인'}</small>`;b.onclick=()=>{state.shot=i;persist();context();renderCoordinate();};grid.append(b);attachNativeHelp(b,`Cell C${pad(state.cell)} · Shot ${pad(i)}`,`Shot은 분기빔 한 묶음의 가공 위치를 나타냅니다. 현재 도식은 대상 탐색을 위한 예시이며 레시피로부터 계산한 32개 샷이 아닙니다. ${i%11===0?'회색은 Masking 제외 예시로 가공 대상으로 해석하지 않습니다.':'선택하면 하단에 같은 대상의 설계·가공·Review 정보를 함께 표시합니다.'}`);}card.append(grid);
 const table=document.createElement('table');table.innerHTML='<thead><tr><th>좌표 출처</th><th>대상</th><th>X / Y</th><th>단위·적용 기준</th></tr></thead><tbody>'+Object.entries(state.layers).filter(([,v])=>v).map(([layer])=>`<tr><td>${esc(layer)}</td><td>H${pad(state.focusHead)} / C${pad(state.cell)} / Shot ${pad(state.shot)}</td><td>예시값 상세 참조 · 미계산</td><td>mm · ${layer==='설계'?'Recipe 기준':layer==='가공'?'Offset·Flip 반영 대상':'선택 Beam·Stage/Review 기준'}</td></tr>`).join('')+'</tbody>';card.append(table);table.querySelectorAll('th,td').forEach(e=>attachNativeHelp(e,e.textContent,'설계·가공·Review 좌표는 같은 숫자·축 기준이 아닐 수 있습니다. 출처·단위·Flip·Offset·기준 버전과 Head/Cell/Shot/Beam 연결을 확인해야 합니다. 이 체험판은 실제 좌표를 계산하지 않습니다.'));
 linkButtons(card,['R16','R05']);if(explicit){addClose(card);markDetail(card);}
}
function renderCorrection(explicit=false){
 const card=nativeCard('correction-detail','보정 원본 · 현재 · 후보 · 적용 예상 동시 비교','Git의 Correction Source / Candidate / Apply Preview / Current Offset를 같은 공간으로 연결 · 아래 숫자는 고정 예시');
 const grid=document.createElement('div');grid.className='compare-grid';const data=[['원본 Review 결과','Source','+10.0 / −5.0 μm','유효 예시 1점 / 실패 점은 보정 제외'],['현재 적용 자료','Current','0.000 / 0.000 mm','현재 체험 기준 / Rev.03'],['변경 후보','Candidate','+0.010 / −0.005 mm','미적용 예시 · 실제 계산 없음'],['적용 예상','Apply Preview','대상 확인 필요','선택 Head·Cell 범위 확인 후 체험 적용']];
 for(const [title,en,value,note] of data){const block=document.createElement('div');block.className='compare-block'+(en==='Candidate'?' candidate':'');block.innerHTML=`<b>${esc(title)}</b><small> ${en}</small><p class="value">${esc(value)}</p><p>${esc(note)}</p>`;grid.append(block);attachNativeHelp(block,title,`보정의 ${en} 자료를 나머지 자료와 동시에 확인합니다. ${note}. 현재값과 후보값은 다르며 저장과 운전 적용, 장치 응답 완료를 하나로 간주하지 않습니다.`);}card.append(grid);
 const flip=document.createElement('p');flip.className='warning';flip.textContent='Flip 상태도 함께 확인 · VISION X OFF / Y OFF / XY OFF · SCANNER Head별 확인 / 실제 적용은 하지 않음';card.append(flip);attachNativeHelp(flip,'VISION · SCANNER Flip 상태','축 교환 XY와 X/Y 부호 반전은 변환 순서에 영향을 줍니다. 기존 코드의 Flip 상태 확인 장점을 살려 보정 후보 옆에 배치했습니다. 단순 Offset 입력과 혼동하지 않습니다.');
 const t=document.createElement('table');t.innerHTML='<thead><tr><th>Head</th><th>Cell / Shot</th><th>Error X / Y μm</th><th>Judge / 처리</th></tr></thead><tbody><tr><td>H'+pad(state.focusHead)+'</td><td>C'+pad(state.cell)+' / '+pad(state.shot)+'</td><td>+10.0 / −5.0</td><td>유효 예시 · 후보 확인</td></tr><tr><td>H07</td><td>C02 / 02</td><td>측정 실패 · 값 없음</td><td>보정 제외 · 재측정 확인</td></tr></tbody>';card.append(t);t.querySelectorAll('td,th').forEach(e=>attachNativeHelp(e,e.textContent,'실패·미측정·누락·Tolerance 초과를 정상 0으로 넣지 않습니다. Head/Cell/Shot의 유효 결과와 단위, 대상 버전을 대조하고 적용 대상 수를 명시합니다. 실제 보정량 계산은 하지 않습니다.'));
 const row=document.createElement('div');row.className='native-actions';[['유효성 설명','validate'],['후보 적용 체험','correction'],['현재·후보 초안 비교','drafts']].forEach(([label,name])=>{const b=document.createElement('button');b.textContent=label;b.onclick=()=>name==='drafts'?renderDrafts(true):demo({name},{label},byId[current]);row.append(b);attachNativeHelp(b,label,'유효 데이터·적용 범위·현재/후보 비교를 먼저 확인한 뒤 적용 여부를 선택하는 UI입니다. 이 버튼은 실제 보정 파일·좌표·장치 값을 변경하지 않습니다.');});card.append(row);if(explicit){addClose(card);markDetail(card);}
}
function renderSignals(explicit=false){
 const card=nativeCard('signal-detail','Stage ↔ Process · 실제 순서 기준 신호 매트릭스','기존 IF Viewer의 Scenario / Signal Matrix / Command·Data Detail 장점 반영 · 논리 신호 예시, 실제 주소 아님');
 const scenarios=['DoReady','Process','Review','ProcessMove','IOF','TopPowerMeter'];const row=document.createElement('div');row.className='signal-buttons';for(const s of scenarios){const b=document.createElement('button');b.textContent=s;b.onclick=()=>selectSignal(s);row.append(b);attachNativeHelp(b,s+' Scenario',`${s} 단계에서 Stage와 Process의 요청·응답·완료 상태를 나란히 비교합니다. 현재 예시는 통신 없이 문맥을 보여주며 논리 명칭을 실제 MELSEC 주소로 사용하지 않습니다.`);}card.append(row);
 const grid=document.createElement('div');grid.className='native-grid';for(const side of ['STAGE SIGNAL','PROCESS SIGNAL']){const section=document.createElement('div');section.innerHTML=`<h3>${side}</h3><table><thead><tr><th>Step</th><th>신호명</th><th>상태</th></tr></thead><tbody>${[['01','REQUEST','수신 예시'],['02','검사 승인','대기'],['03','적용 완료','미진행'],['04','END / CLEAR','미진행']].map(([step,name,status])=>`<tr><td>${step}</td><td><button data-signal="${side} · ${name}">${name}</button></td><td>${status}</td></tr>`).join('')}</tbody></table>`;grid.append(section);}card.append(grid);
 const detail=document.createElement('div');detail.id='signal-selection';detail.className='warning';detail.textContent='신호를 눌러 요청 ACK / Recipe 유효성 승인 / 적용 완료 / 장치 완료를 구분해서 보세요.';card.append(detail);
 card.querySelectorAll('[data-signal]').forEach(b=>{b.onclick=()=>selectSignal(b.dataset.signal);attachNativeHelp(b,b.dataset.signal,'선택한 논리 신호의 역할과 상대측 응답, 다음 조건을 아래 동일 영역에서 확인합니다. 단순 요청 수신 ACK는 레시피 유효성 승인과 다릅니다.');});
 if(byId[current].id==='N03')renderMelsec(card);
 if(explicit){addClose(card);markDetail(card);}
}
function selectSignal(name){const target=$('signal-selection');if(!target)return;const msg=/REQUEST/.test(name)?'요청 수신과 대상 Recipe·Model·버전을 확인합니다. ACK는 수신 응답이며 아직 장비 적용 완료가 아닙니다.':/승인/.test(name)?'Recipe 유효성 검사 결과와 허용 응답을 확인한 후 잡체인지 적용 단계로 진입합니다. 실제 CIM 메시지/비트 이름은 현장 사양으로 확정합니다.':/완료/.test(name)?'가공 SW 적용 완료와 PLC 핀 이동·Vision 파라미터 변경 완료는 서로 다른 시점입니다. 모두 완료됐는지 별도로 확인합니다.':/END/.test(name)?'상대 응답과 요청 해제, 종료 확인 및 Timeout 사유를 확인합니다. 강제로 완료를 만든 것으로 표시하지 않습니다.':'Scenario의 Stage/Process 요청·Ready·완료를 단계 순서대로 확인합니다.';target.textContent=`${name} · ${msg} (논리 예시 / 장비 응답 아님)`;}
function renderMelsec(card){const wrap=document.createElement('section');wrap.innerHTML=`<h3>READ / WRITE 분리 · 쓰기 잠금</h3><p>READ: 샘플 Word = 0 / WRITE: 실제 PLC에는 전송하지 않는 브라우저 값</p><div class="native-actions"><button id="melsec-lock">${state.melsecLocked?'WRITE 잠김 · 체험 잠금 해제':'WRITE 체험 입력 가능 · 잠그기'}</button><input id="melsec-draft" aria-label="MELSEC 로컬 예시 Write Value" value="${esc(state.melsecDraft)}" ${state.melsecLocked?'disabled':''}><button id="melsec-write" ${state.melsecLocked?'disabled':''}>로컬 예시 WRITE</button></div><p class="warning">실제 주소 지정·네트워크 연결·PLC 쓰기 기능은 없습니다. 잠금 해제도 UI 체험만 의미합니다.</p>`;card.append(wrap);$('melsec-lock').onclick=()=>{state.melsecLocked=!state.melsecLocked;persist();renderSignals();};$('melsec-draft').oninput=e=>{state.melsecDraft=e.target.value;persist();};$('melsec-write').onclick=()=>log('MELSEC 로컬 예시 값 변경 · PLC 전송 없음');for(const e of wrap.querySelectorAll('button,input'))attachNativeHelp(e,e.textContent||'로컬 Write Value','기존 화면의 READ/WRITE 분리와 쓰기 잠금 UI를 보존했습니다. 실제 설비 메모리 쓰기를 하지 않으며 입력한 값은 브라우저 체험 상태로만 저장합니다.');}
function renderDrafts(explicit=false){const card=nativeCard('draft-detail','입력 초안 · 저장값 비교','미리보기 선택 / 저장 / 운전 적용을 구분합니다. 실제 파일 경로나 파라미터를 변경하지 않습니다.');const values=Object.entries(state.values);const t=document.createElement('table');t.innerHTML='<thead><tr><th>작업공간 / 항목</th><th>저장된 체험값</th><th>현재 초안</th><th>상태</th></tr></thead><tbody>'+(values.length?values.map(([k,v])=>`<tr><td>${esc(k)}</td><td>${esc(state.savedValues[k]??'초기 시안값')}</td><td>${esc(v)}</td><td>${v!==state.savedValues[k]?'미저장 초안':'체험 저장됨'}</td></tr>`).join(''):'<tr><td colspan="4">변경한 초안이 없습니다. 이미지의 입력칸을 수정해 보세요.</td></tr>')+'</tbody>';card.append(t);t.querySelectorAll('td,th').forEach(e=>attachNativeHelp(e,e.textContent,'같은 작업공간의 입력은 펼침/접기 후에도 유지됩니다. 브라우저 저장은 실제 Recipe 저장이나 장치 적용이 아닙니다. 입력값의 유효 범위와 관리 분류는 실제 사양으로 확인합니다.'));if(explicit){addClose(card);markDetail(card);}}
function renderManualSource(){const card=nativeCard('source-condition','기존 수동 조건 파일 · 단위 표시 유지','Git Manual Setting (SCAN SETTING/*.scan)의 파일 이름·경로·Parameter/Value/Unit 구성 반영');card.innerHTML+='<p>Loaded Setting: demo_manual.scan · Path: SCAN SETTING/ (원본 UI 표시 구조만 참조 / 실제 파일 읽기 없음)</p><p>파일 불러오기·저장과 가공 대상 Head·실제 출사 명령은 구분합니다. 입력 조건과 단위를 같은 공간에서 비교합니다.</p>';const b=document.createElement('button');b.textContent='초안·단위 비교 펼치기';b.onclick=()=>renderDrafts(true);card.append(b);attachNativeHelp(b,'수동 조건 초안 비교','파일 이름과 단위를 확인하면서 수동 입력 조건을 비교합니다. 실제 .scan 파일을 만들거나 읽지 않고 브라우저 값만 유지합니다.');}
function renderNative(d){
 $('native-details').replaceChildren();nativeHelp.clear();lastDetail=null;$('jump-detail').disabled=true;
 if(d.id==='A05'||d.id==='N03')renderSignals();
 if(['R09','R10','R11','R12','S06'].includes(d.id))renderCorrection();
 if(['R16','R17','M09','R05','R07','R08'].includes(d.id))renderCoordinate();
 if(['M03','M04'].includes(d.id))renderManualSource();
 if(d.id==='M05'){const c=nativeCard('mof-connected','MOF 연속 작업 · 같은 대상에서 확인과 보정을 이어가기','기존 Head/Task·배치 미리보기를 살리고 Recipe→Align→가공→Review→보정을 한 흐름으로 묶음');linkButtons(c,['M06','D14','R07']);const b=document.createElement('button');b.textContent='현재 / 후보 보정 비교를 이 공간에 펼치기';b.onclick=()=>renderCorrection(true);c.append(b);attachNativeHelp(b,'MOF 보정 비교 인라인','MOF 작업 대상과 입력을 유지한 채 원본 측정·현재 Offset·후보·적용 예상 범위를 동시에 확인합니다.');}
 if(d.id==='N08'){const c=nativeCard('pm-lock','PM LOCK · 운전 잠금 표시','기존 PM 화면의 잠금 상태를 사용자에게 명확히 보여주는 장점 반영');c.innerHTML+='<p class="warning">PM LOCK 예시 · 실제 권한·인증은 구현하지 않았습니다. 비밀번호를 입력하지 마세요. 부품 수명·Window 상태와 파워 보정 이력을 함께 확인합니다.</p>';linkButtons(c,['S10','S09']);}
}
function inlineEditor(name){const card=nativeCard('inline-editor',name+' · 초안 편집','편집 UI만 체험합니다. 실제 파일 생성·삭제·레시피 본문 변경은 하지 않습니다.');card.innerHTML+='<label>대상 이름<input id="editor-name" value="demo_recipe" aria-label="편집 대상 이름"></label><label>설명<input id="editor-note" placeholder="체험 설명만 입력" aria-label="편집 설명"></label>';const b=document.createElement('button');b.textContent='초안 확인';b.onclick=()=>{log(name+' 초안 확인 · 실제 파일 변경 없음');toast('입력 초안의 UI 흐름만 확인했습니다.');};card.append(b);for(const e of card.querySelectorAll('input,button'))attachNativeHelp(e,e.getAttribute('aria-label')||e.textContent,'이름·범위·현재 사용 여부를 먼저 확인하는 단계입니다. 실제 파일을 생성하거나 삭제하지 않습니다. 운영 명칭이나 민감한 내용을 입력하지 마세요.');addClose(card);markDetail(card);}
function confirmDemo(name,label){const card=nativeCard('confirm-detail',label+' · 대상과 영향 확인','비 Auto에서도 연계 작업의 문맥은 유지합니다. 이 확인은 브라우저 시연만 실행합니다.');const notes={home:'ATT Home/초기 위치 후에는 파워 보정 유효성을 다시 확인해야 합니다. Home 완료와 파워 보정 완료는 다릅니다.',reset:'Controller·축 Fault Clear·Review TCP 초기화의 범위를 구분합니다. 원인 해소 없이 Ready를 만들어서는 안 됩니다.',watchdog:'Review TCP 수신/요청 상태를 정리하는 개념이며 Stage·Scanner 축 Reset이 아닙니다.',recipeApply:'Recipe 유효성 승인 후 가공 SW 자료 적용→각 Section 요청→핀/DOE Z/Vision 완료 확인을 구분합니다. 실제 핀 완료를 기다리지 않고 기판 수신 가능으로 표시하지 않습니다.',correction:'유효한 측정값과 대상 버전·Head/Cell 범위를 확인합니다. 실패 데이터나 과도한 보정 후보는 적용 대상이 아닙니다.',defaultOffset:'Head 기본 Offset 후보와 현재값을 비교하고 실제 운영 기준·적용 범위를 확인해야 합니다.',window:'모델 변경마다 Window를 교체하지 않습니다. 오염 카운트·파워 저하·ATT 교체 기준에 따라 확인하며 이후 파워 재측정/보정을 확인합니다.'};const p=document.createElement('p');p.className='warning';p.textContent=notes[name]||'대상과 초안, 현재 작업 영향 범위를 확인합니다. 실제 장치나 파일에는 변경하지 않습니다.';card.append(p);const row=document.createElement('div');row.className='native-actions';const ok=document.createElement('button');ok.textContent='확인 후 UI 시연';ok.onclick=()=>{if(name==='home')state.demoFlags.powerValid=false;if(name==='recipeApply')state.demoFlags.recipeApplied=true;persist();runDemo(name,label);};const no=document.createElement('button');no.textContent='취소 · 현재 작업 유지';no.onclick=()=>card.remove();row.append(ok,no);card.append(row);for(const e of [ok,no])attachNativeHelp(e,e.textContent,p.textContent+' 브라우저 시연 이외의 변경은 없습니다.');markDetail(card);}
function runDemo(name,label){
 clearInterval(progressTimer);const card=nativeCard('running-demo',label+' · UI 시연','실제 장비 신호를 받지 않습니다. 아래 상태 변화는 설계 설명용입니다.');
 const steps=name==='reset'?['대상 확인','모니터링 정리 예시','연결 재확인 예시','Ready 재확인 안내']:name==='align'?['Align 요청 조건 확인','Stage 위치 준비 예시','10 Point 자료 대기 예시','완료 응답 구분 설명']:name==='power'||name==='powerMeasure'?['대상·Stage·안전 조건 확인','램핑·샘플 대기 예시','측정 회차 표시 예시','후속 보정 유효성 안내']:['대상·Recipe 버전 확인','요청과 응답 구분','현재 단계 표시','결과 확인 UI'];
 card.innerHTML+=`<div class="demo-progress"><i id="progress-fill" style="width:0"></i></div><p id="progress-text">대상: ${esc(headsText())} / ${esc(state.recipe)} · 시연 준비</p><ol>${steps.map((s,i)=>`<li id="demo-step-${i}">${esc(s)} · 대기</li>`).join('')}</ol>`;
 const stop=document.createElement('button');stop.textContent='시연 정지';stop.onclick=()=>demo({name:'stop'},{label:'시연 정지'},byId[current]);card.append(stop);attachNativeHelp(stop,'시연 정지','진행 표시 타이머만 멈춥니다. 실제 장비 정지 기능이 아닙니다.');
 let i=0;const epoch=renderEpoch;log(label+' UI 시연 시작');progressTimer=setInterval(()=>{if(epoch!==renderEpoch||!$('progress-fill')){clearInterval(progressTimer);progressTimer=null;return;}$('progress-fill').style.width=(i+1)/steps.length*100+'%';$('progress-text').textContent=steps[i]+' · UI 예시';$('demo-step-'+i).textContent=steps[i]+' · 표시 확인';i++;if(i===steps.length){clearInterval(progressTimer);progressTimer=null;$('progress-text').textContent='UI 시연 종료 · 실제 완료/안전 OK/측정 결과를 생성한 것이 아닙니다.';log(label+' UI 시연 종료');}},650);markDetail(card);
}
function attachHelp(el,h){
 el.addEventListener('pointerenter',()=>{if(pinned)return;clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>showHelp(h,el,false),400);});
 el.addEventListener('pointerleave',()=>{clearTimeout(hoverTimer);if(!pinned)setTimeout(()=>{if(!$('bubble').matches(':hover'))hideHelp();},160);});
 el.addEventListener('focus',()=>{if(!pinned&&!el.matches('input,select')&&el.matches(':focus-visible'))showHelp(h,el,false);});
}
function attachNativeHelp(el,label,body){const d=byId[current],base=d.hotspots.find(h=>h.label.includes(label)||label.includes(h.label))||d.hotspots.find(h=>h.kind==='panel');const help={...(base?.help||{}),title:label,screen:`${d.id} ${d.title} · Git UI 반영 인라인`,kind:'연계 작업 항목',unit:base?.help?.unit||'화면의 표기 단위 확인',sections:[['무엇을 위한 항목인가',body],['어떻게 확인·조작하는가','현재 Recipe·Head·Cell·Shot 문맥을 유지하며 같은 영역에서 결과를 확인합니다. 실제 장비 조작 대신 화면 시연만 진행합니다.'],['다른 항목과의 관계','자료 선택·편집 초안·저장·운전 적용·장치 완료를 구분합니다. 현재값과 변경 후보를 비교하고 단위·버전·대상 범위를 함께 확인합니다.'],['주의할 점','이 UI는 코드 화면 구성을 참고한 제안이며 실제 프로그램 실행 캡처나 실장비 기능 검증 자료가 아닙니다. 숫자는 예시이고 실제 계산·통신·장치 적용을 하지 않습니다.']],requirements:base?.help?.requirements||[],reviewNotes:base?.help?.reviewNotes||[]};const h={id:'native-'+(++nativeSeq),label,help,kind:'native'};nativeHelp.set(h.id,h);el.dataset.nativeHelp=h.id;attachHelp(el,h);el.addEventListener('click',e=>{if(helpMode){e.preventDefault();e.stopImmediatePropagation();showHelp(h,el,true);}},{capture:true});}
function showHelp(h,anchor,pin){
 clearTimeout(hoverTimer);if(!h?.help)return;pinned=pin;const b=$('bubble'),v=h.help;const rect=anchor?.getBoundingClientRect();
 b.innerHTML=`<div class="bubble-tools"><button id="bubble-pin" aria-label="설명 고정">${pin?'고정됨':'고정'}</button><button id="bubble-close" aria-label="설명 닫기">×</button></div><h3>${esc(v.title)}</h3><small>${esc(v.screen)} · ${esc(v.kind)}</small><span class="bubble-unit">${esc(v.unit||'UI 체험')}</span>${(v.sections||[]).map(([title,body])=>`<section class="bubble-section"><strong>${esc(title)}</strong><p>${esc(body)}</p></section>`).join('')}${v.requirements?.length?`<section class="bubble-section"><strong>관련 체크리스트 · 이 화면 기준</strong>${v.requirements.map(r=>`<div class="req-item">#${r.id} ${esc(r.text)}</div>`).join('')}</section>`:''}${v.reviewNotes?.length?`<section class="bubble-section"><strong>고객 리뷰 연결</strong>${v.reviewNotes.slice(0,3).map(r=>`<div class="req-item">${r.id}. ${esc(r.text)}</div>`).join('')}</section>`:''}`;
 b.hidden=false;b.dataset.pinned=String(pin);b.style.left='14px';b.style.top='14px';const width=b.offsetWidth,height=Math.min(b.scrollHeight,innerHeight*.75),ax=rect?.left||innerWidth/2,ay=rect?.bottom||160;
 let x=ax+10;if(x+width>innerWidth-12)x=Math.max(12,(rect?.right||innerWidth)-width-12);let y=ay+12;if(y+height>innerHeight-12)y=Math.max(12,(rect?.top||innerHeight)-height-12);b.style.left=x+'px';b.style.top=y+'px';b.scrollTop=0;
 $('bubble-close').onclick=hideHelp;$('bubble-pin').onclick=()=>{pinned=!pinned;b.dataset.pinned=String(pinned);$('bubble-pin').textContent=pinned?'고정됨':'고정';};
}
function hideHelp(){clearTimeout(hoverTimer);pinned=false;$('bubble').hidden=true;}
function exportCsv(){const d=byId[current],rows=[['UI DEMO ONLY · 실제 측정 결과 아님'],['화면',d.id,d.title],['Recipe',state.recipe],['Head',headsText()],['Cell',state.cell],...d.panels.filter(p=>p.type==='table').flatMap(p=>[[p.title],p.cols,...p.rows])];const csv='\uFEFF'+rows.map(r=>r.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(',')).join('\r\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=d.id+'_UI예시.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),500);log('예시 CSV 내보내기 · 실측 자료 아님');}
const searchIndex=P.pages.flatMap(d=>d.hotspots.map(h=>({d,h,text:[d.id,d.menu,d.title,h.label,h.panelTitle,h.value,...(h.help.sections||[]).map(s=>s[1])].join(' ').toLowerCase()})));
function search(){const q=$('search-input').value.trim().toLowerCase(),num=q.match(/^#?(\d{1,3})$/)?.[1];const matches=searchIndex.filter(({d,text})=>num?d.req.includes(Number(num)):q?text.includes(q):false);const unique=[],seen=new Set();for(const r of matches){const k=r.d.id+'|'+r.h.label;if(!seen.has(k)){seen.add(k);unique.push(r);}}$('search-count').textContent=q?`${unique.length}개 설명 위치 · 앞 100개 표시 / 번호 검색 예: #148`:'항목명 또는 #체크리스트 번호를 입력하세요.';$('search-results').replaceChildren(...unique.slice(0,100).map(({d,h})=>{const b=document.createElement('button');b.innerHTML=`${esc(h.label)}<small>${d.id} ${esc(d.title)} · ${esc(h.panelTitle||d.menu)}</small>`;b.onclick=()=>{$('search-drawer').hidden=true;goto(d.layout==='dialog'?current:d.id);if(d.layout==='dialog')openModal(d.id);setTimeout(()=>{const e=document.querySelector(`[data-hid="${h.id}"]`);e?.scrollIntoView({block:'center'});showHelp(h,e,true);},60);};return b;}));}
function bind(){
 for(const d of P.pages){const op=document.createElement('option');op.value=d.id;op.textContent=d.id+' · '+d.menu+' / '+d.title;$('scene').append(op);}
 $('scene').onchange=e=>{const id=e.target.value,d=byId[id];if(d?.layout==='dialog'&&byId[current].menu==='Auto')goto(P.defaults[d.menu]);goto(id);};
 $('back').onclick=()=>{if(navPos>0)goto(navHistory[--navPos],{record:false});};$('forward').onclick=()=>{if(navPos<navHistory.length-1)goto(navHistory[++navPos],{record:false});};
 $('guide').onclick=()=>goto('00');$('help-mode').onclick=()=>{helpMode=!helpMode;document.body.classList.toggle('explain-mode',helpMode);$('help-mode').setAttribute('aria-pressed',String(helpMode));$('help-mode').textContent='설명 모드 '+(helpMode?'ON':'OFF');$('mode-label').textContent=helpMode?'설명 모드 · 클릭하면 조작 없이 말풍선 고정':'조작 모드 · 항목 위에 머물면 설명';hideHelp();};
 $('marks').onclick=()=>{showMarks=!showMarks;document.body.classList.toggle('show-marks',showMarks);$('marks').setAttribute('aria-pressed',String(showMarks));};
 $('zoom').onchange=e=>{$('scene-wrap').style.width=e.target.value==='fit'?'100%':e.target.value+'px';};
 $('search-open').onclick=()=>{$('search-drawer').hidden=false;$('search-input').focus();search();};$('search-close').onclick=()=>$('search-drawer').hidden=true;$('search-input').oninput=search;
 $('jump-detail').onclick=()=>{if(lastDetail&&$(lastDetail))$(lastDetail).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});};
 $('reset-demo').onclick=()=>{inlineNote('체험값 초기화 확인','이 체험판에 입력한 브라우저 초안·선택·체험 로그만 초기 상태로 되돌립니다. 실제 파일·Recipe·설정에는 영향이 없습니다.');const card=$('inline-inspector'),b=document.createElement('button');b.textContent='체험값만 초기화';b.onclick=()=>{clearInterval(progressTimer);state=initial();persist();headDraft=[...state.heads];for(const k of Object.keys(workVisited))delete workVisited[k];goto('A01');renderLog();toast('체험값을 초기화했습니다.');};card.append(b);attachNativeHelp(b,'체험 초기화 확정','이 HTML 체험판의 로컬 임시 자료만 초기화합니다. 사용자 원본 파일이나 실제 장비 상태는 바뀌지 않습니다.');};
 for(const t of P.tours){const op=document.createElement('option');op.value=t.id;op.textContent=t.name;$('tour-select').append(op);}
 $('tour-select').onchange=e=>{activeTour=P.tours.find(t=>t.id===e.target.value)||null;tourIndex=0;if(activeTour)goto(activeTour.steps[0]);else $('tour-text').textContent='자유 탐색';};
 const tourMove=delta=>{if(!activeTour)return toast('체험 순서를 먼저 선택하세요.');tourIndex=Math.max(0,Math.min(activeTour.steps.length-1,tourIndex+delta));goto(activeTour.steps[tourIndex]);};$('tour-prev').onclick=()=>tourMove(-1);$('tour-next').onclick=()=>tourMove(1);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){hideHelp();if(modalId)closeModal();$('search-drawer').hidden=true;}if(e.key==='Tab'&&modalId){const els=[...$('modal').querySelectorAll('button,input,select')].filter(e=>!e.disabled);if(els.length){const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}});
 $('bubble').addEventListener('pointerleave',()=>{if(!pinned)hideHelp();});
 $('screen-image').onerror=()=>{toast('이미지를 읽지 못했습니다. assets 폴더가 함께 있는지 확인하세요.');};
}
bind();const initialId=byId[location.hash.slice(1)]?location.hash.slice(1):'A01';if(byId[initialId].layout==='dialog')goto(P.defaults[byId[initialId].menu],{record:false});goto(initialId,{record:false});navHistory[0]=current;renderLog();
})();
