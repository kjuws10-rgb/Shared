import fs from 'node:fs/promises';
import path from 'node:path';
import {createRequire} from 'node:module';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {Presentation,PresentationFile} from '@oai/artifact-tool';
import {GlobalFonts} from '@napi-rs/canvas';

// Keep draft, validation receipt and finalized output separate. Each run uses
// a fresh workspace so a previous final deck can never be overwritten.
const project=process.env.REVIEW_PROJECT_ROOT||path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const task=process.env.REVIEW_PPT_WORKDIR;
const skill=process.env.PRESENTATIONS_SKILL_ROOT;
const fontFile=process.env.REVIEW_FONT_FILE;
if(!task||!skill||!fontFile)throw new Error('Set REVIEW_PPT_WORKDIR (new directory), PRESENTATIONS_SKILL_ROOT, REVIEW_FONT_FILE (Noto Sans KR).');
await fs.mkdir(task,{recursive:false});
GlobalFonts.registerFromPath(fontFile,'Noto Sans KR');
const {FontLibrary}=await import('@oai/artifact-tool/node_modules/skia-canvas').catch(()=>({}));
if(FontLibrary)FontLibrary.use('Noto Sans KR',[fontFile]);
const utils=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const font=utils.resolvePresentationFont({fontFamily:'Noto Sans KR'});
const require=createRequire(import.meta.url),F=require(path.join(project,'src/engine.js'));
const p=F.copyDefaults(),g=F.makeGeometry(p),defs=F.autoSelect(p,g).definitions,r=F.evaluate(p,defs,g),e=r.all.edges.find(q=>q.a===6&&q.b===7);
const pres=Presentation.create({slideSize:{width:1280,height:720}});
const color={ink:'#153248',teal:'#087D88',grey:'#506777',light:'#ECF3F7',green:'#19735D'};
function text(slide,name,value,x,y,w,h,size=26,bold=false,c=color.ink){
  const s=slide.shapes.add({geometry:'textbox',name,position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
  s.text=value;s.text.style={typeface:font,fontSize:size,bold,color:c,autoFit:'none'};return s;
}
function table(slide,name,values,x,y,w,h,widths){
  const t=slide.tables.add({rows:values.length,columns:values[0].length,left:x,top:y,width:w,height:h,columnWidths:widths,values});
  t.name=name;t.borders.assign({fill:'#C4D5DF',width:1,style:'solid'});
  t.cells.block({row:0,column:0,rowCount:values.length,columnCount:values[0].length}).assign({textStyle:{typeface:font,fontSize:24,color:color.ink},margins:{left:13,right:13,top:10,bottom:10},anchor:'center'});
  t.cells.block({row:0,column:0,rowCount:1,columnCount:values[0].length}).assign({fill:color.ink,textStyle:{typeface:font,fontSize:24,bold:true,color:'#FFFFFF'}});
  for(let i=1;i<values.length;i++)t.cells.block({row:i,column:0,rowCount:1,columnCount:values[0].length}).fill=i%2?color.light:'#FFFFFF';
  return t;
}
const s1=pres.slides.add();s1.background.fill='#FFFFFF';
text(s1,'title-1','0선 방어 리뷰: 기판당 2점·4점 순환 검사',56,36,1168,68,43,true);
text(s1,'claim-1','기본 제안 좌표와 속도에서 2점·4점/기판 모두 계산상 가능',56,124,1168,56,31,true,color.teal);
table(s1,'coverage-options',[
  ['기판당 검사','8 Head 1회 커버','Glass별 검사 Head'],
  ['2점','4 Glass','H01·02 / H03·04 / H05·06 / H07·08'],
  ['4점','2 Glass','H01~04 / H05~08'],
  ['8점','1 Glass','H01~08 (제안 좌표의 명목 계산)']
],56,205,1168,270,[210,260,698]);
text(s1,'operation-1','Head마다 고정점 하나를 선택하고, 같은 Recipe에서 반복 사용',56,510,1168,44,27,true);
text(s1,'meaning-1','한 사이클은 H01~H08 대표점 8개의 1회 커버입니다.\n검사한 점은 Glass가 바뀌어도 표시하고 다음 사이클 시작 때 초기화합니다.',56,557,1168,77,25);
text(s1,'qualification-1','표는 자동 제안 좌표 기준입니다. 실제 고정 0선 좌표의 시간 여유·영상 품질 검증 후 운영 개수를 확정합니다.',56,660,1168,36,19,false,color.grey);
s1.speakerNotes.textFrame.setText('계산 근거: 제공 test0929 Recipe, A3_LD_Process_SW_IPS commit 6b19d7aaf0de81271468ab7dac0fa15493172f38, 동봉 v4 Baseline_calculation.json. 이 표는 동일한 기본 자동 제안 8좌표에서 Glass 상한만2/4/8로 변경한 결과다. 8점 계산상 성립을 실기 확정으로 제시하지 않는다. Head당 한 고정 Branch를 리뷰하며 모든 Cell/홀 전수를 뜻하지 않는다. 원본 장비 설정은 H01만 ON/AutoInspection OFF이고 시뮬레이터는8 Head 설계 검토다. 실제 고객사 고정0선 좌표가 제안 좌표와 다르면 재계산해야 한다.');

const s2=pres.slides.add();s2.background.fill='#FFFFFF';
text(s2,'title-2','두 점 사이의 시간 여유와 촬영 조건',56,36,1168,68,43,true);
text(s2,'principle-2','다음 점이 오기 전에 Camera X 이동·정착을 끝내면 촬영 가능',56,119,1168,56,30,true,color.teal);
// Chart data and embedded workbook share the displayed decimal precision.
const ms=Number((e.gap*1000).toFixed(2)),need=Number((e.need*1000).toFixed(2));
const chart=s2.charts.add('bar',{
  position:{left:56,top:200,width:655,height:225},categories:['다음 점 도착까지','X 준비에 필요한 시간'],
  series:[{name:'시간 (ms)',values:[ms,need],fill:color.teal,points:[{idx:0,fill:'#8AA8B8'},{idx:1,fill:color.teal}],valuesFormatCode:'0.0'}],
  barOptions:{direction:'bar',grouping:'clustered',gapWidth:90},hasLegend:false,
  xAxis:{visible:true,textStyle:{typeface:font,fontSize:21,fill:color.ink},majorGridlines:null,line:{fill:'none',width:0}},
  yAxis:{visible:true,min:0,max:1800,majorUnit:600,numberFormatCode:'0" ms"',textStyle:{typeface:font,fontSize:19,fill:color.grey},majorGridlines:{fill:'#DCE6EC',width:1}},
  dataLabels:{showValue:true,position:'outEnd',textStyle:{typeface:font,fontSize:22,bold:true,fill:color.ink}}
});utils.applyPresentationChartFont(chart,{fontFamily:font});
text(s2,'pair-example','H06·H07 연속 검사 예시\nY 간격156.8mm ÷ 100mm/s = 1.568초\nX 이동218.9mm: 가감속 포함1.2945초\nCamera 최소주기43.48ms < 도착간격',755,205,469,127,24);
text(s2,'slack-finding','X 선도착 여유 203.43ms',755,355,469,50,31,true,color.green);
text(s2,'same-y','같은 Y의 점은 동시에 도착합니다.\n다른 Y점을 고르거나 Glass를 나눕니다.',755,413,469,70,23);
table(s2,'conditions',[
  ['설정 조건','가감속·촬영·시간 조건'],
  ['Stage Y 100 / Review X 200 mm/s','Y 가감속500 / X 가감속1000 mm/s²'],
  ['Camera 23 FPS / 노출10µs','정착50ms / 선도착20ms / Tact 약100.50초']
],56,475,1168,164,[495,673]);
text(s2,'quality-caveat','영상 품질 별도 검증: 노출 중 이동1µm는 20배 광학에서 약5.8px입니다.\n1px 기준을 적용하면 현재 조건은 불가입니다. 실제 고정 좌표와 검출 품질 확인 후 운영 개수를 확정합니다.',56,651,1168,57,21,false,color.grey);
s2.speakerNotes.textFrame.setText('계산 근거: 동일 제안 좌표 H06=(541.15,659.375) / H07=(760.05,816.175), Camera Review X 차218.9mm. Y100mm/s 등속 도착간격1.568s. X200mm/s,A=B1000mm/s² 사다리꼴 이동1.2945s. 필요시간1.36457s=X1.2945+정착.05+Guard.02+Trigger지연.00005+노출.00001+Jitter양쪽.00001. 여유.20343s. Camera Frame최소1/23=.043478s이므로 이 구간은X가 지배한다. 자동좌표4점상한의 두번째Glass에H06/H07이 포함된다. 기하 가공12.232s≤30s,Stage이동39.504875s+영상Tail1+기타60=100.504875s≤150s. 도면: 사용자첨부0aa24176785e5bac5c46056a06c940c5.png / 1cd49938d45adc5db126f2f9081fa501.png의 StageStroke3960mm,ReviewStroke1025mm. Limit3980/1033 및StopperGap은정상Stroke에더하지 않는다. 절대좌표원점은등록가정이다. Sony23FPS/최소노출10µs,Sensor3.45µm/20배=Object.1725µm/px. 100×10µs=1µm=5.797px이며 임시1µm 허용값이 검출 품질을 보증하지 않는다. GlobalShutter/위치Trigger 및명목가감속가정. Laser/Scanner 처리량과Servo정착은실기확인대상이다.');

await fs.mkdir(path.join(task,'private'),{recursive:true});
const draft=path.join(task,'private/customer-draft.pptx');await(await PresentationFile.exportPptx(pres)).save(draft);
for(let i=0;i<2;i++){const slide=[s1,s2][i],png=await pres.export({slide,format:'png',scale:1.5});await fs.writeFile(path.join(task,'private',`slide-${i+1}.png`),new Uint8Array(await png.arrayBuffer()));const l=await slide.export({format:'layout'});await fs.writeFile(path.join(task,'private',`slide-${i+1}.layout.json`),await l.text());}
const final=path.join(task,'output/FlyingReview_Customer_2Slides.pptx');await fs.mkdir(path.dirname(final),{recursive:true});
const result=await utils.finalizePresentation({workspaceDir:task,candidatePath:draft,finalPath:final,pythonExecutable:process.env.CODEX_PRIMARY_RUNTIME_PYTHON,integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit','--require-native-table-slide','1','--require-native-table-slide','2'],explicitTotalSlideCount:2,requiredNativeTableOwnerSlides:[1,2],requiredNativeChartOwnerSlides:[2],materializeLiteralChartWorkbooks:true,fontPolicy:{basis:'design',families:[font]},verifyArtifactToolImport:true,receiptPath:path.join(task,'private/validation.json')});
console.log(JSON.stringify({final,slideCount:2,layoutWarnings:result.presentationLayout.warnings}));
