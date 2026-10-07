import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const workspaceDir=process.env.REVIEW_WORKSPACE;
if (!path.isAbsolute(workspaceDir??'')) throw Error('Set REVIEW_WORKSPACE to the project path');
const SKILL_DIR='/root/.codex/skills/builtins/presentations';
const RUNTIME_PYTHON=process.env.CODEX_PRIMARY_RUNTIME_PYTHON;
const {finalizePresentation,resolvePresentationFont}=await import(pathToFileURL(path.join(SKILL_DIR,'container_tools/artifact_tool_utils.mjs')).href);
const c=JSON.parse(await fs.readFile(path.join(workspaceDir,'src/fixed.json'),'utf8'));
const {defaultResult:r}=JSON.parse(await fs.readFile(path.join(workspaceDir,'out/Calculation_evidence.json'),'utf8'));
const font=resolvePresentationFont({fontFamily:'Noto Sans KR'});
const N='#10243A',B='#1269D3',T='#009FA9',G='#0F805B',M='#5D6E80',L='#F3F6FA';
const f=(x,n=3)=>x.toFixed(n),head=h=>'H'+String(h).padStart(2,'0');
const p=Presentation.create({slideSize:{width:12191999/9525,height:720}});
const tmp=path.join(workspaceDir,'.ppt-build');
const outputDir=process.env.REVIEW_PPT_OUTPUT||path.join(workspaceDir,'final_cell_pitch');
await fs.mkdir(outputDir,{recursive:true});
function box(s,x,y,w,h,fill=L){return s.shapes.add({geometry:'rect',position:{left:x,top:y,width:w,height:h},fill,line:{fill:'none',width:0}});}
function text(s,x,y,w,h,value,size=24,color=N,bold=false,align='left'){
 const z=s.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 z.text=value;z.text.style={typeface:font,fontSize:size,bold,color,alignment:align,verticalAlignment:'top',autoFit:'none',wrap:'square',insets:{left:0,right:0,top:0,bottom:0}};return z;
}
function base(n,title,sub){const s=p.slides.add();s.background.fill=L;box(s,0,0,1279.9999,106,N);text(s,43,15,1190,51,title,36,'#FFFFFF',true);text(s,44,70,1190,26,sub,15,'#CFE2F4');text(s,43,679,1150,22,'A3 Laser Driller · 2026-10-07 · 명목 이동 계산 / XReady·실제 ReviewDone 확인',13,M);text(s,1197,676,40,26,n+'/3',16,M,false,'right');return s;}
function table(s,x,y,w,h,values,widths,size=21){
 const q=s.tables.add({rows:values.length,columns:values[0].length,left:x,top:y,width:w,height:h,values,columnWidths:widths});
 q.borders.assign({fill:'#DCE5ED',width:1,style:'solid'});
 for(let i=0;i<values.length;i++)for(let j=0;j<values[0].length;j++){const cell=q.getCell(i,j);cell.fill=i===0?N:i%2===0?'#EEF7F8':'#FFFFFF';cell.text.style={typeface:font,fontSize:i===0?size-2:size,bold:i===0,color:i===0?'#FFFFFF':N,alignment:'left',verticalAlignment:'middle',autoFit:'none',insets:{left:12,right:8,top:8,bottom:8}};}
 return q;
}

// 1. Two independent deadlines. Native shapes are editable evidence diagrams.
let s=base(1,'기판 사이 3분에 X를 선배치하면, 추가 대기 0초','기판당2개 측정 · H01·H02 리뷰 후 H03 준비 · 180초는 사용 가능한 대기창의 하한');
box(s,44,129,1192,73,N);text(s,60,139,1160,53,'Stroke2700mm · 노출10µs · 허용blur8px · Y Cell간격200mm\nX200mm/s·가감속150 / Y100mm/s·가감속150mm/s²',22,'#FFFFFF',true,'center');
const e=r.modes[2].groups[0].edges[0],t=r.modes[2].prepositions[0];
for(const z of [{x:44,title:'기판 내 촬영: H01 → H02',main:'Y '+f(r.p.cellPitchY,1)+' ÷ '+f(r.p.vy,1)+' = '+f(e.constantSpeedGap)+'초',need:'X·취득 준비 '+f(e.need)+'초',last:'촬영 간 여유 '+f(e.slack)+'초',fill:'#EAF3FF',color:B},{x:652,title:'기판 사이 준비: H02 → H03',main:'사용 가능한 대기창 180초',need:'X 선배치 '+f(t.need)+'초',last:'남는 시간 '+f(t.slack)+'초',fill:'#DEF4F1',color:G}]){
 box(s,z.x,225,584,230,z.fill);text(s,z.x+22,242,541,32,z.title,24,z.color,true);text(s,z.x+22,287,541,41,z.main,30,N,true);text(s,z.x+22,340,541,35,z.need,26);text(s,z.x+22,394,541,37,z.last,28,z.color,true);
}
const steps=[['현재 기판','H01·H02 측정'],['리뷰 완료 후','H03 선정점으로 이동'],['XReady 확보','위치·정지·정착 확인'],['다음 기판','H03·H04 측정']];
for(let i=0;i<4;i++){const x=44+i*304;box(s,x,487,280,99,i===1||i===2?'#DEF4F1':'#FFFFFF');text(s,x+14,500,252,29,steps[i][0],20,M);text(s,x+14,541,252,32,steps[i][1],23,N,true);if(i<3)text(s,x+282,525,22,30,'→',23,M);}
text(s,44,608,1192,44,'선배치 추가 대기 = max(0, 선배치 준비시간 − 180초) = 0초',27,G,true,'center');
s.speakerNotes.textFrame.setText('입력 파라미터 Y Cell-to-Cell 간격='+r.p.cellPitchY+'mm. 등속 구간의 같은 기판 촬영 간 가용시간은 Y Cell간격/Y속도='+r.p.cellPitchY+'/'+r.p.vy+'='+e.constantSpeedGap+'s로 계산하며 고정2초가 아님. 사용자 최신 조건: 현재 기판 0선방어 이후 다음 기판 투입 전 3분 이상의 여유. 180초를 ReviewDone 및 X 이동 허가 이후 사용 가능한 창의 하한으로 반영. 이는 기판 시작 간격 또는 장비 Tact가 아님. 준비='+t.move+'+settle0.05+guard0.02='+t.need+'s. 기판 내 준비는 노출·trigger/jitter·camera period도 포함하여 '+e.need+'s. X 선정점 H2='+t.fromX+', H3='+t.toX+'. 초기 H1 XReady는 기동 1회 별도 확보. XReady 조건은 위치 일치·속도0·정착 완료. ReviewDone은 실제 Frame·Vision 완료 확인. 전체 장비 Tact 단축 초 수를 산출한 것이 아니라 선배치로 증가하는 추가 대기가 0초인 명목 설계 계산. 상자 폭은 시간 비례가 아님.');

// 2. Every transfer, including the long return at the end of the cycle.
s=base(2,'2개 측정: 네 기판으로 8개 스캐너를 순환합니다','같은 기판의 촬영은 유지하고, 다음 첫 촬영 위치 준비를 기판 사이 대기창에 배치');
const rows=[['이번 기판','측정 순서','기판 사이 선배치','ΔX(mm)','준비(s)','180초 여유(s)'],...r.modes[2].prepositions.map((z,i)=>[(i+1)+'매',r.modes[2].groups[i].nodes.map(n=>head(n.head)).join(' → '),head(z.from)+' → '+head(z.to)+(z.wrap?' (복귀)':''),f(z.dx,1),f(z.need),f(z.slack)])];
table(s,44,145,1192,285,rows,[112,239,291,148,171,231],23);
box(s,44,457,1192,91,'#DEF4F1');text(s,64,472,1152,35,'가장 긴 H08→H01 복귀도 '+f(r.modes[2].maxPrepositionS)+'초',29,G,true);text(s,64,517,1152,26,'180초 안에 준비 완료 · 남는 시간 '+f(r.modes[2].minIdleSlackS)+'초 · 선배치 추가 대기 0초',22,N);
text(s,44,568,1192,38,'다음 위치 = 스캐너 중심이 아니라, 다음 촬영 선정점의 실제 X좌표',24,N,true);
text(s,44,613,1192,36,'매 기판 Park0 복귀 없음 · 8개 Head마다 다른 Cell에서 1점 · H08 후 H01로 순환',21,M);
s.speakerNotes.textFrame.setText('고정 유효점 X: H1=4.05,H2=104.05,H3=204.05,H4=306.75,H5=414.85,H6=525.65,H7=636.45,H8=747.25 mm. Head fieldWidth110mm와 이동거리 구분; 이동거리=선정점 X차 절대값. Cell IDs=[1,11,21,31,5,15,25,35], 모두 unique, 기존 레시피 Head 소유권·Mask 검증됨. 각 선배치='+JSON.stringify(r.modes[2].prepositions)+'. 총20x 전제는200mm tube lens+1x relay. 선배치 준비는 이동+settle50ms+guard20ms. X정지-정지 사다리꼴/삼각형 운동으로 가감속 포함. 초기Park0→H1=0.3986335s는 초기 기동1회 별도이며180초 순환에 반복 포함하지 않음. 사용자의3분 여유를180초 하한으로 계산. 실제 통신·처리·interlock대기는 측정된 사용 가능창에 포함되지 않는다는 전제.');

// 3. Keep active-board physics and compare the operating modes without inventing a Tact.
s=base(3,'선배치가 해결하는 것은 다음 기판 준비입니다','현재 기판의 30초·Stroke·blur·촬영 간 X 이동 조건은 계속 확인합니다');
const comparison=[['운용','기판 내 X 이동','8개 Head 확인','다음 첫 위치 준비'],['2개 / 기판','촬영 사이 1회','4기판 순환','H02→03, H04→05, H06→07, H08→01'],['4개 / 기판','촬영 사이 3회','2기판 순환','H04→05, H08→01']];
table(s,44,143,1192,175,comparison,[162,220,193,617],21);
box(s,44,339,1192,94,'#FFFFFF');text(s,64,353,1152,32,'현재 기준: 역방향 '+f(r.processTime)+'초 · 이동 blur '+f(r.blurPx,2)+'px',27,N,true);text(s,64,396,1152,28,'Y Cell간격 '+f(r.p.cellPitchY,1)+'mm → 촬영 간 '+f(r.p.cellPitchY/r.p.vy)+'초 · X 최소 여유 '+f(r.modes[2].minSlack)+'초',21,M);
box(s,44,454,1192,87,'#DEF4F1');text(s,64,467,1152,32,'현재 리뷰 완료·X 이동 허가 → 선배치 → XReady → 다음 기판 시작',26,G,true);text(s,64,509,1152,27,'다음 기판이 들어올 때 첫 위치 준비 완료 · 실제 Frame·Vision 결과로 ReviewDone 확인',20,N);
text(s,44,562,1192,42,'기판 내 촬영 마감이 부족하면, 기판 사이 3분으로 보완할 수 없습니다.',25,N,true);
text(s,44,608,1192,36,'180초는 기판 시작 간격이 아닙니다. 반송·투입을 포함한 전체 장비 Tact는 별도입니다.',21,M);
s.speakerNotes.textFrame.setText('동작 model은 역방향 StageY stroke2700mm, V100mm/s A=D150mm/s², total27.6666667s. 입력 Y Cell-to-Cell 간격200mm이므로 같은 기판 촬영 간 가용시간=200/100=2s. 간격 변경 시 선정점 Y좌표·도착시간·최소Stroke·X 준비 여유를 함께 재계산. 등속0.6666667~27s,2633.3333mm. Scanner 기판1500mm통과5.333333~20.333333s; Review 기판진입20.003333s; 물리동시통과0.33s. 이번 기판 선택 2점별 review end H2=22.165088s,H4=26.165088s,H6=22.165088s,H8=26.165088s. 각 선정점 가공 완료 후 촬영, 전체가공완료를 기다리지 않음. 실제LaserON은 recipe/service 신호로 판정. 4점 첫/마지막20.165083~26.165083s, Y감속27s, 최소Stroke2616.509333mm,max30Stroke2933.333333mm. blur8px=1um 허용경계. Basler sensor2.5um/pixel,total20x→.125um/px, 기본18.5fps,min exposure2us. 실제Frame/Vision처리시간, S-curve/following error, 영상 검출성능 미모델링. 공식사양 기확인2026-10-06: https://docs.baslerweb.com/a2a2600-20gcbas ; https://docs.baslerweb.com/exposure-time ; https://www.mitutoyo.com/webfoo/wp-content/uploads/E4191-378_010611.pdf p20,p29. 각기판 기동전 XReady가 전제이고 대기창 내 X 선배치가 신규 대기를 만들지 않는다는 계산이며 전체Tact를보증하지 않음.');

const candidatePath=path.join(tmp,'candidate_cell_pitch.pptx');
await (await PresentationFile.exportPptx(p)).save(candidatePath);
const finalPath=path.join(outputDir,'0선방어_검토자료.pptx');
const result=await finalizePresentation({workspaceDir,candidatePath,finalPath,pythonExecutable:RUNTIME_PYTHON,integrityValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12191999,6858000','--validate-bullet-geometry','--validate-heading-fit','--require-native-table-slide','2','--require-native-table-slide','3'],explicitTotalSlideCount:3,requiredNativeTableOwnerSlides:[2,3],requiredNativeChartOwnerSlides:[],fontPolicy:{basis:'design',families:[font],scriptFonts:{ea:font}},verifyArtifactToolImport:true,receiptPath:path.join(tmp,'validation_cell_pitch_v2.json')});
for(let i=0;i<3;i++){const slide=p.slides.getItem(i),blob=await slide.export({format:'png',scale:1});await fs.writeFile(path.join(tmp,'slide'+(i+1)+'.png'),new Uint8Array(await blob.arrayBuffer()));await fs.writeFile(path.join(tmp,'slide'+(i+1)+'.layout.json'),await (await slide.export({format:'layout'})).text());}
console.log(JSON.stringify({finalPath,slides:3,validation:result}));
