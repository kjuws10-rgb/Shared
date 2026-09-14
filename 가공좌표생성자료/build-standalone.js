#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=__dirname;
const destination=path.resolve(process.argv[2]||path.join(root,'dist','Cell모델별_Masking_시뮬레이션.html'));
let html=fs.readFileSync(path.join(root,'실행프로그램.html'),'utf8');
html=html.replace('<link rel="stylesheet" href="./styles.css" />','<style>\n'+fs.readFileSync(path.join(root,'styles.css'),'utf8')+'\n</style>');
for(const file of ['coordinate-engine.js','masking-engine.js','hybrid-panel.js','app.js']) {
  const script=fs.readFileSync(path.join(root,'src',file),'utf8').replaceAll('</script','<\\/script');
  html=html.replace(`<script src="./src/${file}"></script>`,`<script>\n${script}\n</script>`);
}
const fixturePath=path.join(root,'..','20260830_105429','가공좌표_스캔필드110mm_검증_16742건.csv');
const fixture=fs.readFileSync(fixturePath,'utf8').replace(/^\uFEFF/,'').trim().split(/\r?\n/);
const columns=['Head','SequenceNo','ExcelRow','ActualGYMm','ActualGXMm','ExpectedRole','ConsecutiveDuplicate','CellId','CellCol','CellRow','CommandGridIndexX','CommandGridIndexY','LaneNo','UniqueSequence','DesignPixelXpx','DesignPixelYpx'];
const headers=fixture[0].split(','),indices=columns.map(c=>headers.indexOf(c));
if(indices.some(i=>i<0))throw new Error('기준 CSV의 필수 열을 찾지 못했습니다.');
const source=columns.join(',')+'\n'+fixture.slice(1).map(line=>{const cells=line.split(',');return indices.map(i=>cells[i]).join(',');}).join('\n')+'\n';
html=html.replace('<script>\n(function coordinateEngineModule','<script>window.A3_GROUND_TRUTH_CSV='+JSON.stringify(source).replaceAll('</','<\\/')+';</script>\n<script>\n(function coordinateEngineModule');
html=html.replace('저장소 기준 CSV 자동 대조','내장 기준 CSV 자동 대조').replaceAll('./가공좌표생성_최종분석보고서.html','./Cell모델별_Masking_최종보고서.html');
html=html.replaceAll('../20260830_105429/가공좌표_스캔필드110mm_검증_16742건.csv','https://github.com/kjuws10-rgb/Shared/blob/main/20260830_105429/가공좌표_스캔필드110mm_검증_16742건.csv');
fs.mkdirSync(path.dirname(destination),{recursive:true});fs.writeFileSync(destination,html,'utf8');
fs.writeFileSync(path.join(path.dirname(destination),'Cell모델별_Masking_최종보고서.html'),fs.readFileSync(path.join(root,'가공좌표생성_최종분석보고서.html'),'utf8').replaceAll('./실행프로그램.html','./Cell모델별_Masking_시뮬레이션.html'));
console.log(`단일 HTML 프로그램과 보고서 저장: ${path.dirname(destination)}`);
