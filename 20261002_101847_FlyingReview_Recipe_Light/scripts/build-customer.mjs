import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {Presentation,PresentationFile,FileBlob} from '@oai/artifact-tool';
import {GlobalFonts} from '@napi-rs/canvas';

// Native editable Cell diagram, tables and a chart. No device control.
// Dependencies and validators belong to the Codex presentation runtime.
const project=process.env.REVIEW_PROJECT_ROOT||path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const task=process.env.REVIEW_PPT_WORKDIR;
const skill=process.env.PRESENTATIONS_SKILL_ROOT;
const fontFile=process.env.REVIEW_FONT_FILE;
if(!task||!skill||!fontFile)throw Error('Set REVIEW_PPT_WORKDIR, PRESENTATIONS_SKILL_ROOT and REVIEW_FONT_FILE (Noto Sans KR).');
const priv=path.join(task,'private'),out=path.join(task,'output');
await fs.mkdir(priv,{recursive:true});await fs.mkdir(out,{recursive:true});
GlobalFonts.registerFromPath(fontFile,'Noto Sans KR');
const utils=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const font=utils.resolvePresentationFont({fontFamily:'Noto Sans KR'});
const require=createRequire(import.meta.url),F=require(path.join(project,'src/engine.js'));
const p={...F.copyDefaults(),cellCols:8,cellPitchX:110},g=F.makeGeometry(p),defs=F.preset('four',p,g),r=F.evaluate(p,defs,g);
if(g.cells.some(c=>c.heads.length!==1))throw Error('Example must have exactly one Head per Cell.');
const edge=F.edge(r.nodes.find(n=>n.head===1),r.nodes.find(n=>n.head===2),r);
const a=r.nodes.find(n=>n.head===1),b=r.nodes.find(n=>n.head===2);
if(!r.plans[2]||!r.plans[4]||r.maxPerPass!==4)throw Error('Default conclusions changed. Re-author the deck.');
const round=(v,n=3)=>Number(v.toFixed(n));
const head=n=>'H'+String(n).padStart(2,'0');
const colors={ink:'#173449',teal:'#087F8C',muted:'#556C7B',line:'#BDD0DB',pale:'#EDF4F7',green:'#157957'};
const pres=Presentation.create({slideSize:{width:1280,height:720}});
function text(s,name,value,x,y,w,h,size=26,bold=false,c=colors.ink,align='left'){
  const q=s.shapes.add({geometry:'textbox',name,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
  q.text=value;q.text.style={typeface:font,fontSize:size,bold,color:c,autoFit:'none',alignment:align,insets:{left:0,right:0,top:0,bottom:0}};return q;
}
function table(s,name,values,x,y,w,h,widths,size=25){
  const t=s.tables.add({rows:values.length,columns:values[0].length,left:x,top:y,width:w,height:h,columnWidths:widths,values});t.name=name;
  t.borders.assign({fill:colors.line,width:1,style:'solid'});
  t.cells.block({row:0,column:0,rowCount:values.length,columnCount:values[0].length}).assign({textStyle:{typeface:font,fontSize:size,color:colors.ink},margins:{left:12,right:12,top:8,bottom:8},anchor:'center'});
  t.cells.block({row:0,column:0,rowCount:1,columnCount:values[0].length}).assign({fill:colors.ink,textStyle:{typeface:font,fontSize:size,bold:true,color:'#FFFFFF'}});
  for(let i=1;i<values.length;i++)t.cells.block({row:i,column:0,rowCount:1,columnCount:values[0].length}).fill=i%2?colors.pale:'#FFFFFF';
  return t;
}
const s1=pres.slides.add();s1.background.fill='#FFFFFF';
text(s1,'title-1','0선 방어 Flying Review 운영',56,36,1168,68,45,true);
text(s1,'motion-concept','기판은 Y로 통과하고, Camera는 고정된 Y에서 X만 이동해 Head당 1점 취득',56,122,1168,62,29,true,colors.teal);
text(s1,'diagram-caption','Cell당 Scanner 1개',56,201,446,40,26,true);

// Exact Cell identities, schematic spacing. This is an editable diagram,
// not a global-coordinate scale drawing or a replacement for the simulator.
const gx=84,gy=268,cw=46,ch=62,px=51,py=70;
for(let c=0;c<8;c++)text(s1,'column-'+c,head(c+1),gx+c*px,242,cw,24,17,false,colors.muted,'center');
for(let row=0;row<5;row++)text(s1,'row-'+row,String(row+1),52,gy+row*py+19,23,26,20,false,colors.muted,'center');
for(const cell of g.cells){
  const col=(cell.id-1)%8,row=Math.floor((cell.id-1)/8),nodes=r.nodes.filter(n=>n.cell===cell.id);
  s1.shapes.add({geometry:'rect',name:'Cell-'+cell.id,position:{left:gx+col*px,top:gy+row*py,width:cw,height:ch},fill:nodes.length?'#E1F1EB':'#F4F7F9',line:{fill:nodes.length?colors.green:colors.line,width:1}});
  nodes.forEach((n,j)=>{
    const x=gx+col*px+6,y=gy+row*py+(nodes.length===1?16:j===0?1:31);
    const q=s1.shapes.add({geometry:'ellipse',name:'Point-'+head(n.head)+'-Cell-'+cell.id,position:{left:x,top:y,width:30,height:30},fill:colors.green,line:{fill:colors.green,width:1}});
    q.text=String(n.head);q.text.style={typeface:font,fontSize:22,bold:true,color:'#FFFFFF',alignment:'center',verticalAlignment:'middle',autoFit:'none',insets:{left:0,right:0,top:0,bottom:0}};
  });
}
text(s1,'diagram-key','8열 × 5행, Cell당 담당 Head 1개\n설명용 배치 (test0929 원본은 45 Cell)',56,619,446,56,21,false,colors.muted);
text(s1,'coverage-title','이 배치에서 2점·4점 계산상 가능',535,201,689,40,29,true);
table(s1,'glass-order',[
  ['운영','Glass 1','Glass 2','Glass 3','Glass 4'],
  ['2점씩','1·2','3·4','5·6','7·8'],
  ['4점씩','1~4','5~8','없음','없음']
],535,249,689,191,[145,136,136,136,136],25);
text(s1,'two-point-result','2점/기판: 4 Glass로 8 Head 커버',535,466,689,47,32,true,colors.teal);
text(s1,'four-point-result','4점/기판: 2 Glass로 8 Head 커버',535,517,689,47,32,true,colors.teal);
text(s1,'fixed-operation','동일 Recipe에서는 Head별 대표점을 고정합니다.\n완료 점은 유지하고, 다음 사이클 시작 때 초기화합니다.',535,578,689,70,25);
text(s1,'baseline-conditions','기본 조건: Y 100 / X 200 mm/s, 가감속 Y 500 / X 1000 mm/s², 정착 50 ms, 선도착 20 ms, 23 FPS, 노출 10 µs',56,682,1168,29,18,false,colors.muted);
s1.speakerNotes.textFrame.setText('사용자 요청: 한 Cell에 Scanner 하나씩 관여하는 그림. 설명용 8열×5행=40Cell, CellPitchX110mm, Y200mm. 원본 test0929는9열×5행45Cell/PitchX100mm이며본예시로바꾼장비Recipe라는의미는아니다. Model1회전0의모든Shot소유권을계산해각Cell담당Head가정확히1개임을확인했다. 대표점은 H01=C1,H02=C10,H03=C19,H04=C28,H05=C5,H06=C14,H07=C23,H08=C32. 한Cell에다른Head점이중복되지않는다. 도식은Cell행열과Head를정확히표시하되거리축척과Cell내부위치는생략한다. 선택4점프리셋에서한Glass최대4점이며상한2/4의순차계획은각각4/2Glass이다. H01/H05,H02/H06,H03/H07,H04/H08이각각동일Y이므로8점전체는동시충돌로1Glass에취득할수없다. 8점운영은좌표변경후전조건재검증이필요하다. 녹색은계획취득이며영상PASS가아니다. 실제제공설정H01만ON/AutoInspectionOFF,원본소스commit6b19d7aaf0de81271468ab7dac0fa15493172f38. 동봉Customer_OneHeadCell_evidence.json의가정과좌표사용.');

const s2=pres.slides.add();s2.background.fill='#FFFFFF';
text(s2,'title-2','측정 가능 조건과 조건 변경 방법',56,36,1168,68,45,true);
text(s2,'condition-rule','다음 점 도착 간격이 X 이동·정착·촬영 준비시간보다 길면 취득 가능',56,122,1168,54,29,true,colors.teal);
text(s2,'example-title','H01·H02 구간의 시간 비교',56,190,594,31,24,true);
const chart=s2.charts.add('bar',{
  position:{left:56,top:231,width:594,height:181},categories:['다음 점 도착까지','X 준비에 필요한 시간'],
  series:[{name:'시간 (ms)',values:[round(edge.gap*1000,2),round(edge.need*1000,2)],fill:colors.teal,points:[{idx:0,fill:'#87A8B9'},{idx:1,fill:colors.teal}],valuesFormatCode:'0.00'}],
  barOptions:{direction:'bar',grouping:'clustered',gapWidth:70},hasLegend:false,
  xAxis:{visible:true,textStyle:{typeface:font,fontSize:21,fill:colors.ink},majorGridlines:null,line:{fill:'none',width:0}},
  yAxis:{visible:true,min:0,max:2400,majorUnit:600,numberFormatCode:'0" ms"',textStyle:{typeface:font,fontSize:19,fill:colors.muted},majorGridlines:{fill:'#DBE5EA',width:1}},
  dataLabels:{showValue:true,position:'outEnd',textStyle:{typeface:font,fontSize:23,bold:true,fill:colors.ink}}
});utils.applyPresentationChartFont(chart,{fontFamily:font});
text(s2,'arrival-formula',`도착 간격: ${round(edge.dy,1)} mm ÷ 100 mm/s = ${round(edge.gap,3)} s`,699,196,525,35,24,true);
text(s2,'prepare-formula',`X 이동 ${round(edge.move,5)} s (가감속 포함)\n+ 정착 0.05 s + 선도착 0.02 s\n+ 촬영 관련 0.00007 s = ${round(edge.need,5)} s`,699,245,525,98,24);
text(s2,'margin',`선도착 여유 ${round((edge.gap-edge.need)*1000,2)} ms`,699,365,525,47,33,true,colors.green);
text(s2,'same-y','H01·H05처럼 같은 Y의 점은 동시 도착합니다. 이 예시의 8점은 2 Glass로 분할합니다.',56,418,1168,31,22,false,colors.muted);
table(s2,'condition-changes',[
  ['핵심 확인','현재 계산 (제안 좌표)','맞지 않을 때의 변경'],
  ['X 선도착',`H01·02 필요 Y 간격 ≥${round(p.vy*edge.need,3)} mm`,'Y 간격 확대 또는 Glass 분할'],
  ['Camera·영상','최소주기 43.48 ms / Blur 1 µm','노출·조명·광학 조건 검증'],
  ['가공·전체 Tact','12.23 / 100.50 s (목표 30 / 150 s)','기타시간 60 s 가정을 실측 확인']
],56,463,1168,193,[213,472,483],23);
text(s2,'quality-disclosure','현재 Blur 1 µm (약 5.8 px)는 임시 허용값으로, 영상 품질 검증이 필요합니다.\n1 px 기준에서는 현재 조건이 불가합니다. 실제 고정 좌표와 검출 품질 확인 후 운영 개수를 확정합니다.',56,668,1168,50,20,false,colors.muted);
s2.speakerNotes.textFrame.setText(`설명용40Cell/Cell당1Head. H01(${a.x},${a.y}) 및 H02(${b.x},${b.y})mm. ΔX=${edge.dx}mm,ΔY=${edge.dy}mm. 도착간격ΔY/Y100=${edge.gap}s. X200mm/s,a=d1000mm/s²:가속0.2s/20mm+등속70/200=.35s+감속0.2s/20mm=0.75s. 필요준비0.75+.05정착+.02Guard+.00005지연+.00001노출+.00001양쪽Jitter=.82007s. 여유2−.82007=1.17993s. 필요Y간격100×.82007=82.007mm. 개별Camera최소주기1/23=.043478s. 가공구간12.232s/Tact100.504875s는명목기하와기타60s가정이다. StageStroke3960mm/Review1025mm는Limit와StopperGap을포함하지않는다. Blur100mm/s×10us=1um은objectpixel3.45/20=.1725um의약5.8px로임시허용이다. 1px허용시현재Camera최소노출10us와30/150초예산을모두충족하지못한다. 실제홀/전극검출품질과장비원점/거리/가감속/정착을검증해야한다. GlobalShutter위치Trigger,홀수거리1467/짝수1847mm설계가정. 해당점가공후Review이며Offset/APC자동보정없음.`);

const evidence={sourceCommit:'6b19d7aaf0de81271468ab7dac0fa15493172f38',basis:'ILLUSTRATIVE_40CELL_ONE_HEAD_PER_CELL',assumptions:p,points:r.nodes.map(n=>({head:n.head,cell:n.cell,x_mm:n.x,y_mm:n.y,reviewX_mm:n.reviewX})),glassGroups:{two:r.plans[2].groups.map(z=>z.nodes.map(n=>n.head)),four:r.plans[4].groups.map(z=>z.nodes.map(n=>n.head)),eight:r.plans[8].groups.map(z=>z.nodes.map(n=>n.head))},pair:{headA:1,headB:2,xDistance_mm:edge.dx,yDistance_mm:edge.dy,arrivalInterval_s:edge.gap,preparation_s:edge.need,margin_s:edge.gap-edge.need,requiredYGap_mm:p.vy*edge.need},processTime_s:r.processTime,tact_s:r.tact,scope:'Head별 고정 대표점 1개',quality:{blur_um:1,objectPixel_um:p.sensorPixelUm/p.magnification,blur_px:p.magnification/p.sensorPixelUm,onePixelExposureLimit_us:(p.sensorPixelUm/p.magnification)/p.vy*1000,actualVisionPassVerified:false}};
await fs.writeFile(path.join(out,'Customer_OneHeadCell_evidence.json'),JSON.stringify(evidence,null,2));
const draft=path.join(priv,'customer-draft.pptx');await(await PresentationFile.exportPptx(pres)).save(draft);
for(const [i,s] of [s1,s2].entries()){const png=await pres.export({slide:s,format:'png',scale:1.5});await fs.writeFile(path.join(priv,`draft-slide-${i+1}.png`),new Uint8Array(await png.arrayBuffer()));}
const final=path.join(out,'FlyingReview_Customer_OneHeadPerCell_2Slides.pptx');
const finalization=await utils.finalizePresentation({workspaceDir:task,candidatePath:draft,finalPath:final,pythonExecutable:process.env.CODEX_PRIMARY_RUNTIME_PYTHON,integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit','--require-native-table-slide','1','--require-native-table-slide','2'],explicitTotalSlideCount:2,requiredNativeTableOwnerSlides:[1,2],requiredNativeChartOwnerSlides:[2],materializeLiteralChartWorkbooks:true,fontPolicy:{basis:'design',families:[font]},verifyArtifactToolImport:true,receiptPath:path.join(priv,'validation.json')});
const imported=await PresentationFile.importPptx(await FileBlob.load(final));
const snapshot=await imported.inspect({kind:'slide',maxChars:10000});
const slides=snapshot.ndjson.split('\n').filter(Boolean).map(x=>JSON.parse(x)).filter(x=>x.kind==='slide');
for(const [i,s] of slides.entries()){const png=await imported.export({slide:imported.resolve(s.id),format:'png',scale:1.5});await fs.writeFile(path.join(out,`Customer_Slide_${i+1}.png`),new Uint8Array(await png.arrayBuffer()));}
console.log(JSON.stringify({final,slides:slides.length,layoutWarnings:finalization.presentationLayout.warnings}));
