import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { FileBlob, PresentationFile } from '@oai/artifact-tool';
import { GlobalFonts } from '@napi-rs/canvas';

const workspaceDir=process.env.REVIEW_WORKSPACE;
if(!path.isAbsolute(workspaceDir??''))throw Error('Set REVIEW_WORKSPACE');
const skillDir='/root/.codex/skills/builtins/presentations';
const tmp=process.env.REVIEW_PPT_BUILD||path.join(workspaceDir,'.ppt-build-point-inputs');
const output=process.env.REVIEW_PPT_OUTPUT||path.join(workspaceDir,'final_point_inputs');
const source=path.join(workspaceDir,'references/timing_inputs_source.pptx');
if(process.env.REVIEW_FONT_FILE)GlobalFonts.registerFromPath(process.env.REVIEW_FONT_FILE,'Noto Sans KR');
await fs.mkdir(tmp,{recursive:true});await fs.mkdir(output,{recursive:true});
const p=await PresentationFile.importPptx(await FileBlob.load(source));
const before=await p.inspect({kind:'slide,textbox,table,notes',maxChars:60000});
const records=before.ndjson.trim().split('\n').map(x=>JSON.parse(x));
await fs.writeFile(path.join(tmp,'before.ndjson'),before.ndjson);
for(let i=0;i<p.slides.items.length;i++){
 const s=p.slides.getItem(i),preview=await s.export({format:'png',scale:1});
 await fs.writeFile(path.join(tmp,'before-'+(i+1)+'.png'),new Uint8Array(await preview.arrayBuffer()));
}
const replacements=new Map([
 ['Stroke2700mm · 노출10µs · 허용blur8px · Y Cell간격200mm\nX200mm/s·가감속150 / Y100mm/s·가감속150mm/s²','Stroke2700mm · 노출10µs · blur8px · Y Cell간격200mm\nX200·A/D150 / Y100·A/D150 · 정착50ms·선도착20ms'],
 ['같은 기판의 촬영은 유지하고, 다음 첫 촬영 위치 준비를 기판 사이 대기창에 배치','준비 = X 이동 + 입력 정착시간 + 입력 선도착 여유시간 (기본50ms·20ms)'],
 ['빨간 구간은 불가, 녹색 구간은 통과 범위입니다. 각 게이지 이동 시 전체 조건을 다시 계산합니다.','기본12개 + 스캐너별 셀 내 X·Y 16개를 게이지로 조절합니다.'],
 ['허용 blur 증가는 품질 기준 완화이므로 영상 검출성능 확인 후 적용합니다.','가용시간 = (Cell 간격 + 다음 셀 내 Y − 이전 셀 내 Y) / Y속도'],
 ['매 기판 Park0 복귀 없음 · 8개 Head마다 다른 Cell에서 1점 · H08 후 H01로 순환','H02 셀 내 Y11.475mm 선택: H01→H02 2.108초 / H02→H03 1.892초']
]);
const found=new Set();
for(const r of records){
 if(r.kind!=='textbox'||!r.text)continue;
 if(replacements.has(r.text)){p.resolve(r.id).text.replace(r.text,replacements.get(r.text));found.add(r.text);}
 else if(r.text.includes('2026-10-07'))p.resolve(r.id).text.replace('2026-10-07','2026-10-08');
}
if(found.size!==replacements.size)throw Error('Source text mismatch');
// Retain source notes and append the new input contract.
for(let i=0;i<p.slides.items.length;i++){
 const original=records.filter(r=>r.kind==='notes'&&r.slideIndex===i).map(r=>r.text||r.textPreview||'').join('\n');
 const timingNotes=original+'\n정착시간(settleMs)과 선도착 여유시간(guardMs)은 사용자 입력으로 변경. 기본50ms·20ms. ms/1000으로 초로 변환하여 같은 기판 X 준비, 기판 사이 선배치, 초기 XReady 예산에 동일 적용. 준비=max(노출+X이동+settleMs/1000+guardMs/1000+Trigger/Jitter, 카메라 주기). 두 입력은0 이상 허용. 게이지 통과 범위와 단일 파라미터 복구안에도 포함. PPT 수치는 기본값의 정적 예시이며, 실시간 결과는 시뮬레이터와 동기화된 수식 가이드에서 확인. 정착 또는 선도착 시간을 줄일 때는 실제 위치 안정시간과 제어지연 검증 필요. 허용blur 기준 완화 시 영상 검출성능 확인 필요.';
 p.slides.getItem(i).speakerNotes.textFrame.setText(timingNotes+'\n추가: 8개 Head의 Cell ID는1,11,21,31,5,15,25,35로 고정하고, 각 Cell 좌상단 기준 X·Y 위치16개를 별도 입력. test0929의 실제 B07 점 격자2.7mm로 선택. 입력 좌표의 Shot 열·행을 계산해 Head소유권·Mask를 확인하고 유효하지 않은 점은 불가 판정. X좌표차는 셀 원점+셀내X의 차이. 같은 기판 ΔY=Cell간격+다음셀내Y−이전셀내Y. 가용시간=ΔY/vY. 기본 모든 셀내Y0.675mm. H02셀내Y11.475mm로10.8mm 증가하면 H01→H02 2.108s, H02→H03 1.892s로 앞뒤 간격이 동시에 변경. +Y는 역방향 동작 중 나중에 도착하는 방향. 마지막점Y 증가 시 필요Stroke도 증가. 기본12입력+측정위치16입력=28개. 기존 슬라이드 표는 기본 측정위치의 정적 수치. HTML과 수식 가이드는28개 입력을 동일하게 전달하고 계산.');
}
const candidatePath=path.join(tmp,'candidate.pptx');
await(await PresentationFile.exportPptx(p)).save(candidatePath);
const {finalizePresentation}=await import(pathToFileURL(path.join(skillDir,'container_tools/artifact_tool_utils.mjs')).href);
const finalPath=path.join(output,'0선방어_검토자료.pptx');
const result=await finalizePresentation({workspaceDir,candidatePath,finalPath,pythonExecutable:process.env.CODEX_PRIMARY_RUNTIME_PYTHON,integrityValidatorPath:path.join(skillDir,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skillDir,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12191999,6858000','--validate-bullet-geometry','--validate-heading-fit','--require-native-table-slide','2','--require-native-table-slide','3'],explicitTotalSlideCount:3,requiredNativeTableOwnerSlides:[2,3],requiredNativeChartOwnerSlides:[],fontPolicy:{basis:'reference',families:['Noto Sans KR'],scriptFonts:{ea:'Noto Sans KR'},referencePath:source,referenceSha256:createHash('sha256').update(await fs.readFile(source)).digest('hex')},verifyArtifactToolImport:true,receiptPath:path.join(tmp,'validation.json')});
const final=await PresentationFile.importPptx(await FileBlob.load(finalPath));
for(let i=0;i<final.slides.items.length;i++){
 const s=final.slides.getItem(i),preview=await s.export({format:'png',scale:1.25});
 await fs.writeFile(path.join(tmp,'slide-'+(i+1)+'.png'),new Uint8Array(await preview.arrayBuffer()));
 await fs.writeFile(path.join(tmp,'slide-'+(i+1)+'.layout.json'),await(await s.export({format:'layout'})).text());
}
console.log(JSON.stringify({finalPath,slides:final.slides.items.length,validation:result}));
