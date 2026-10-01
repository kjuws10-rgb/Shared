/* Exact SVG state capture from the standalone simulator DOM, not a browser
 * screenshot or hardware recording. No source images are modified.
 * NODE_PATH must expose linkedom@0.18.12. Usage: node scripts/make-preview.cjs <frames-dir>
 * Rasterize frame_*.svg with Inkscape; assemble with assemble-preview.py. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {parseHTML}=require('linkedom');
const root=path.resolve(__dirname,'..'),out=process.argv[2];if(!out)throw new Error('Specify a temporary frames directory.');
fs.mkdirSync(out,{recursive:true});
const html=fs.readFileSync(path.join(root,'FlyingReview_8Head_Simulator.html'),'utf8'),{window:w,document}=parseHTML(html);
Object.defineProperty(w.HTMLSelectElement.prototype,'value',{configurable:true,get(){return this.querySelector('option[selected]')?.value||this.querySelector('option')?.value||'';},set(v){this.querySelectorAll('option').forEach(o=>o.toggleAttribute('selected',String(o.value)===String(v)));}});
Object.defineProperty(w.HTMLInputElement.prototype,'checked',{configurable:true,get(){return this.hasAttribute('checked');},set(v){this.toggleAttribute('checked',!!v);}});
const ctx=vm.createContext({document,console,Blob,URL:{createObjectURL:()=>'',revokeObjectURL(){}},setTimeout:()=>0,requestAnimationFrame:()=>{}});ctx.window=ctx;
for(const script of document.querySelectorAll('script'))vm.runInContext(script.textContent,ctx);
const $=id=>document.getElementById(id),fmt=(v,n=2)=>Number(v).toFixed(n),esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
$('plan-cap').value='2';$('plan-cap').dispatchEvent(new w.Event('change'));$('follow-shot').checked=true;
function extract(id,x,y,width,height){
  const svg=$(id).querySelector('svg').cloneNode(true);
  for(const [k,v] of Object.entries({x,y,width,height}))svg.setAttribute(k,v);
  svg.querySelectorAll('text').forEach(el=>{if(el.hasAttribute('font-size'))el.style.fontSize=el.getAttribute('font-size')+'px';if(el.hasAttribute('fill'))el.style.fill=el.getAttribute('fill');});
  return svg.outerHTML.replace(/clippath/g,'clipPath');
}
const css='text{font-family:Sans;font-size:11px;fill:#a1b7c5}.annotation{font-size:11px;fill:#a1b7c5}.head-label{font-size:12px;fill:#eef7fb}.cell-label{font-size:10px;fill:#c1d5e0}.point-label{font-size:10px;fill:#eef7fb;font-weight:bold}.scan-field{fill-opacity:.10;stroke-width:1}';
const initial=ctx.FlyingReviewApp.getState(),schedule=ctx.FlyingReviewApp.getSchedule(),frames=[];
let number=0;
for(const pass of schedule){
  const times=[];for(let t=0;t<initial.stageDuration;t+=2)times.push({t,hold:false});times.push({t:initial.stageDuration,hold:false});
  for(const n of pass.nodes)times.push({t:n.trigger-.02,hold:false},{t:n.cross+.04,hold:true},{t:n.cross+.24,hold:false});
  times.sort((a,b)=>a.t-b.t);
  for(let i=0;i<times.length;i++){
    const {t,hold}=times[i];ctx.FlyingReviewApp.seek((pass.glass-1)*initial.tact+t);
    const file='frame_'+String(number++).padStart(4,'0')+'.svg';
    const track=Array.from(document.querySelectorAll('[data-track-head]')).map((el,j)=>`<text x="${j%2?1175:902}" y="${883+Math.floor(j/2)*35}" style="font-size:15px;fill:${el.classList.contains('is-complete')?'#67dfa9':el.classList.contains('is-current')?'#4ed7e8':'#718995'}">H${String(j+1).padStart(2,'0')} · ${esc(el.querySelector('.track-state').textContent)}</text>`).join('');
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1080" viewBox="0 0 1440 1080"><style>${css}</style><rect width="1440" height="1080" fill="#071018"/><text x="24" y="38" style="font-size:26px;fill:#eef7fb;font-weight:bold">0선방어 · Glass 1매씩 통과 / 8 Head 순차 리뷰</text><text x="24" y="72" style="font-size:20px;fill:#4ed7e8">Glass ${pass.glass} / ${schedule.length} · 이번 검사 ${pass.nodes.map(n=>'H'+String(n.head).padStart(2,'0')).join(' → ')} · 통과 시각 ${fmt(t,3)} s</text><text x="24" y="97" style="font-size:15px;fill:#a1b7c5">Stage Y 100 mm/s · Review X 200 mm/s · FPS23 / 10 µs · 전체 45 Cell 이동 / Camera Y 고정</text>${extract('machine-scene',18,118,830,930)}${extract('global-map',888,118,514,741)}${track}<text x="898" y="1050" style="font-size:14px;fill:#a1b7c5">계산 궤적 미리보기 · 배속/촬영 강조 · 물류 복귀 생략</text><text x="898" y="1072" style="font-size:13px;fill:#a1b7c5">실제 브라우저 녹화·장비 영상·Vision PASS가 아님</text></svg>`;
    fs.writeFileSync(path.join(out,file),svg);
    const dt=i+1<times.length?times[i+1].t-t:.5;
    frames.push({file,glass:pass.glass,localTime:t,delay:hold?450:Math.max(40,Math.min(220,Math.round(dt*100)))});
  }
}
ctx.FlyingReviewApp.seek(schedule[1].nodes[0].cross+.04+initial.tact);
fs.writeFileSync(path.join(out,'cell_detail.svg'),`<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="650" viewBox="0 0 1100 650"><style>${css}</style><rect width="1100" height="650" fill="#071018"/>${extract('cell-detail',0,0,1100,620)}</svg>`);
fs.writeFileSync(path.join(out,'frames.json'),JSON.stringify(frames,null,2));
console.log(JSON.stringify({frames:frames.length,directory:out,glasses:schedule.length,groups:schedule.map(g=>g.nodes.map(n=>n.head))}));
