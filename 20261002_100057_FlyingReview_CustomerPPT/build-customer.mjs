import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {Presentation,PresentationFile,FileBlob} from '@oai/artifact-tool';
import {GlobalFonts} from '@napi-rs/canvas';

// Native editable Cell diagram, tables and a chart. No device control.
// Dependencies and validators belong to the Codex presentation runtime.
const project=process.env.REVIEW_PROJECT_ROOT||path.dirname(fileURLToPath(import.meta.url));
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
const p=F.copyDefaults(),g=F.makeGeometry(p),defs=F.autoSelect(p,g).definitions,r=F.evaluate(p,defs,g);
const edge=r.all.edges.find(e=>e.a===6&&e.b===7);
if(!r.plans[2]||!r.plans[4]||!r.all.valid)throw Error('Default conclusions changed. Re-author the deck.');
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
text(s1,'diagram-caption','45 Cell과 대표점 8개 (예시)',56,201,446,40,26,true);

// Exact Cell identities, schematic spacing. This is an editable diagram,
// not a global-coordinate scale drawing or a replacement for the simulator.
const gx=84,gy=268,cw=42,ch=62,px=46,py=70;
for(let c=0;c<9;c++)text(s1,'column-'+c,String(c+1),gx+c*px,242,cw,24,20,false,colors.muted,'center');
for(let row=0;row<5;row++)text(s1,'row-'+row,String(row+1),52,gy+row*py+19,23,26,20,false,colors.muted,'center');
for(const cell of g.cells){
  const col=(cell.id-1)%9,row=Math.floor((cell.id-1)/9),nodes=r.nodes.filter(n=>n.cell===cell.id);
  s1.shapes.add({geometry:'rect',name:'Cell-'+cell.id,position:{left:gx+col*px,top:gy+row*py,width:cw,height:ch},fill:nodes.length?'#E1F1EB':'#F4F7F9',line:{fill:nodes.length?colors.green:colors.line,width:1}});
  nodes.forEach((n,j)=>{
    const x=gx+col*px+6,y=gy+row*py+(nodes.length===1?16:j===0?1:31);
    const q=s1.shapes.add({geometry:'ellipse',name:'Point-'+head(n.head)+'-Cell-'+cell.id,position:{left:x,top:y,width:30,height:30},fill:colors.green,line:{fill:colors.green,width:1}});
    q.text=String(n.head);q.text.style={typeface:font,fontSize:22,bold:true,color:'#FFFFFF',alignment:'center',verticalAlignment:'middle',autoFit:'none',insets:{left:0,right:0,top:0,bottom:0}};
  });
}
text(s1,'diagram-key','9열 × 5행 개념도, 축척 생략\n숫자 1~8은 Scanner Head 번호',56,619,446,56,21,false,colors.muted);
text(s1,'coverage-title','제안 좌표에서 2점·4점 계산상 가능',535,201,689,40,29,true);
table(s1,'glass-order',[
  ['운영','Glass 1','Glass 2','Glass 3','Glass 4'],
  ['2점씩','1·2','3·4','5·6','7·8'],
  ['4점씩','1~4','5~8','없음','없음']
],535,249,689,191,[145,136,136,136,136],25);
text(s1,'two-point-result','2점/기판: 4 Glass로 8 Head 커버',535,466,689,47,32,true,colors.teal);
text(s1,'four-point-result','4점/기판: 2 Glass로 8 Head 커버',535,517,689,47,32,true,colors.teal);
text(s1,'fixed-operation','동일 Recipe에서는 Head별 대표점을 고정합니다.\n완료 점은 유지하고, 다음 사이클 시작 때 초기화합니다.',535,578,689,70,25);
text(s1,'baseline-conditions','기본 조건: Y 100 / X 200 mm/s, 가감속 Y 500 / X 1000 mm/s², 정착 50 ms, 선도착 20 ms, 23 FPS, 노출 10 µs',56,682,1168,29,18,false,colors.muted);
s1.speakerNotes.textFrame.setText('대상: 원익아이피에스 A3 LD 0선 방어 검토. 기준은 제공 test0929 Recipe와 시뮬레이터의 기본 자동 제안 좌표이며 실제 고정0선좌표의 운전 보증은 아니다. 45개 Cell=9열×5행, Model1, 회전0. 이 개념도는 Cell의 행/열과 Head 대표점의 소속 Cell을 정확히 표시하되 거리 축척과 Cell 내부 위치를 생략한다. 대표 Cell: H01=C1, H02=C11, H03/H04=C22, H05/H06=C33, H07/H08=C44. 초록은 한 사이클 내 취득한 대표점을 뜻하며 Vision 합격색이 아니다. 2점운영에서4Glass,4점운영에서2Glass로8개Head대표점을1회커버한다. 모든Cell/가공홀전수를 의미하지 않는다. Glass3/4의없음은4점운영에서추가검사Glass가필요없다는뜻이다. 8점/기판도현재제안좌표의명목계산에서성립하나실측검증전최대성능으로보증하지않는다. 동봉 Calculation_evidence.json과 src/engine.js, 원본 소스 기준commit6b19d7aaf0de81271468ab7dac0fa15493172f38. 선행 source files: CCellPatternCalculator, CShotCoordinatePlanBuilder, CRecipeShotMaskingPlan, CReviewManager, CStationProcess. 실제 설정은H01만ON,AutoInspectionOFF이며본자료는8Head설계검토다.');

const s2=pres.slides.add();s2.background.fill='#FFFFFF';
text(s2,'title-2','측정 가능 조건과 조건 변경 방법',56,36,1168,68,45,true);
text(s2,'condition-rule','다음 점 도착 간격이 X 이동·정착·촬영 준비시간보다 길면 취득 가능',56,122,1168,54,29,true,colors.teal);
text(s2,'example-title','H06·H07 구간의 시간 비교',56,190,594,31,24,true);
const chart=s2.charts.add('bar',{
  position:{left:56,top:231,width:594,height:181},categories:['다음 점 도착까지','X 준비에 필요한 시간'],
  series:[{name:'시간 (ms)',values:[round(edge.gap*1000,2),round(edge.need*1000,2)],fill:colors.teal,points:[{idx:0,fill:'#87A8B9'},{idx:1,fill:colors.teal}],valuesFormatCode:'0.00'}],
  barOptions:{direction:'bar',grouping:'clustered',gapWidth:70},hasLegend:false,
  xAxis:{visible:true,textStyle:{typeface:font,fontSize:21,fill:colors.ink},majorGridlines:null,line:{fill:'none',width:0}},
  yAxis:{visible:true,min:0,max:1800,majorUnit:600,numberFormatCode:'0" ms"',textStyle:{typeface:font,fontSize:19,fill:colors.muted},majorGridlines:{fill:'#DBE5EA',width:1}},
  dataLabels:{showValue:true,position:'outEnd',textStyle:{typeface:font,fontSize:23,bold:true,fill:colors.ink}}
});utils.applyPresentationChartFont(chart,{fontFamily:font});
text(s2,'arrival-formula','도착 간격: 156.8 mm ÷ 100 mm/s = 1.568 s',699,196,525,35,24,true);
text(s2,'prepare-formula','X 이동 1.2945 s (가감속 포함)\n+ 정착 0.05 s + 선도착 0.02 s\n+ 촬영 관련 0.00007 s = 1.36457 s',699,245,525,98,24);
text(s2,'margin','선도착 여유 203.43 ms',699,365,525,47,33,true,colors.green);
text(s2,'same-y','같은 Y의 점은 동시에 도착합니다. 다른 Y점을 선택하거나 Glass를 나눠 검사합니다.',56,418,1168,31,22,false,colors.muted);
table(s2,'condition-changes',[
  ['핵심 확인','현재 계산 (제안 좌표)','맞지 않을 때의 변경'],
  ['X 선도착','H06·07 필요 Y 간격 ≥136.457 mm','Y 간격 확대 또는 Glass 분할'],
  ['Camera·영상','최소주기 43.48 ms / Blur 1 µm','노출·조명·광학 조건 검증'],
  ['가공·전체 Tact','12.23 / 100.50 s (목표 30 / 150 s)','기타시간 60 s 가정을 실측 확인']
],56,463,1168,193,[213,472,483],23);
text(s2,'quality-disclosure','현재 Blur 1 µm (약 5.8 px)는 임시 허용값으로, 영상 품질 검증이 필요합니다.\n1 px 기준에서는 현재 조건이 불가합니다. 실제 고정 좌표와 검출 품질 확인 후 운영 개수를 확정합니다.',56,668,1168,50,20,false,colors.muted);
s2.speakerNotes.textFrame.setText('계산 예시는 동일 제안 좌표의 H06=(541.15,659.375)와 H07=(760.05,816.175)mm이다. Review X 차218.9mm,Y차156.8mm. 등속Y100mm/s에서도착간격156.8/100=1.568s. X최대속도200mm/s,가감속각1000mm/s²이면가속0.2s동안20mm,감속0.2s동안20mm,등속178.9/200=.8945s. 총1.2945s=218.9/200+200/(2×1000)+200/(2×1000). X준비시간1.36457s는 이동1.2945+정착.05+Guard.02+Trigger지연.00005+노출.00001+양쪽Jitter.00001이다. 여유1.568−1.36457=.20343s. 이X거리조건에서필요Y간격=100×1.36457=136.457mm이며모든Head에공통인정수간격규칙은아니다. Camera최소주기1/23=.043478s는개별Frame제약이고X충돌을해결하지못한다. 가공12.232s는기하가공길이1223.2mm/100mm/s이며Laser/Scanner처리량은별도실기확인이다. 전체Tact100.504875s=Stage이동39.504875+영상Tail1+기타60. 목표30s/150s는상한이다. Stage이동3930.4875mm≤Stroke3960,Review범위0..1025은등록가정이다. 사용자도면StageStroke3960/Limit3980,ReviewStroke1025/Limit1033에서Limit와StopperGap은정상Stroke에더하지않는다. 실제절대축원점과기계시작종점은확인해야한다. 거리홀수1467mm/짝수1847mm는downstream설계가정이며REVIEW_TO_HEAD1_GAP_Y=0원본설정과동일한실측이아니다. Blur=100mm/s×10µs=1µm. Objectpixel=3.45µm/20=.1725µm,따라서Blur약5.797px. 1px허용이면노출≤1.725µs가필요하지만현재Camera최소10µs보다작다. 속도만낮출경우Y≤17.25mm/s이며30/150s시간예산과충돌하므로단순속도조정만으로해결을보장하지않는다. 조명/스트로브,광학,Camera촬영방식과검출성능을실제로검증해야한다. GlobalShutter및위치Trigger가정. 출사상태/보조전극진입의실제합불은모델범위밖이며0선결과로Offset/APC보정을하지않는다.');

const evidence={sourceCommit:'6b19d7aaf0de81271468ab7dac0fa15493172f38',basis:'DEFAULT_PROPOSED_COORDINATES',assumptions:p,points:r.nodes.map(n=>({head:n.head,cell:n.cell,x_mm:n.x,y_mm:n.y,reviewX_mm:n.reviewX})),glassGroups:{two:r.plans[2].groups.map(z=>z.nodes.map(n=>n.head)),four:r.plans[4].groups.map(z=>z.nodes.map(n=>n.head)),eight:r.plans[8].groups.map(z=>z.nodes.map(n=>n.head))},pair:{headA:6,headB:7,xDistance_mm:218.9,yDistance_mm:156.8,arrivalInterval_s:edge.gap,preparation_s:edge.need,margin_s:edge.gap-edge.need,requiredYGap_mm:p.vy*edge.need},processTime_s:r.processTime,tact_s:r.tact,scope:'Head별 고정 대표점 1개',quality:{blur_um:1,objectPixel_um:p.sensorPixelUm/p.magnification,blur_px:p.magnification/p.sensorPixelUm,onePixelExposureLimit_us:(p.sensorPixelUm/p.magnification)/p.vy*1000,actualVisionPassVerified:false}};
await fs.writeFile(path.join(out,'Calculation_evidence.json'),JSON.stringify(evidence,null,2));
const draft=path.join(priv,'customer-draft.pptx');await(await PresentationFile.exportPptx(pres)).save(draft);
for(const [i,s] of [s1,s2].entries()){const png=await pres.export({slide:s,format:'png',scale:1.5});await fs.writeFile(path.join(priv,`draft-slide-${i+1}.png`),new Uint8Array(await png.arrayBuffer()));}
const final=path.join(out,'FlyingReview_Customer_2Slides.pptx');
const finalization=await utils.finalizePresentation({workspaceDir:task,candidatePath:draft,finalPath:final,pythonExecutable:process.env.CODEX_PRIMARY_RUNTIME_PYTHON,integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit','--require-native-table-slide','1','--require-native-table-slide','2'],explicitTotalSlideCount:2,requiredNativeTableOwnerSlides:[1,2],requiredNativeChartOwnerSlides:[2],materializeLiteralChartWorkbooks:true,fontPolicy:{basis:'design',families:[font]},verifyArtifactToolImport:true,receiptPath:path.join(priv,'validation.json')});
const imported=await PresentationFile.importPptx(await FileBlob.load(final));
const snapshot=await imported.inspect({kind:'slide',maxChars:10000});
const slides=snapshot.ndjson.split('\n').filter(Boolean).map(x=>JSON.parse(x)).filter(x=>x.kind==='slide');
for(const [i,s] of slides.entries()){const png=await imported.export({slide:imported.resolve(s.id),format:'png',scale:1.5});await fs.writeFile(path.join(out,`Customer_Slide_${i+1}.png`),new Uint8Array(await png.arrayBuffer()));}
console.log(JSON.stringify({final,slides:slides.length,layoutWarnings:finalization.presentationLayout.warnings}));
