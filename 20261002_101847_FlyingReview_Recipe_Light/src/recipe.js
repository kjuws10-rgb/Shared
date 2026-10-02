/* PPID geometry adapter. Preserves non-modelled CSV rows; no equipment I/O. */
(function(root,factory){const a=factory();if(typeof module==='object'&&module.exports)module.exports=a;else root.FlyingRecipe=a;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const clone=x=>JSON.parse(JSON.stringify(x));
  const cornerNames=['UP_LEFT','UP_RIGHT','DOWN_LEFT','DOWN_RIGHT'];
  const geometryKeys={glassX:'GLASS_SIZE_X',glassY:'GLASS_SIZE_Y',akX:'AK_MARGIN_X',akY:'AK_MARGIN_Y',pixelSize:'PIXEL_SIZE',shotPitchPixels:'PITCH',split:'SPLITED_BEAM_COUNT',chess:'CHESS'};
  const zeros=()=>[[0,0],[0,0],[0,0],[0,0]];
  function models(p){return p.models?clone(p.models):[{id:1,pixelsX:p.pixelsX,pixelsY:p.pixelsY,holeCount:p.holes.length,holes:clone(p.holes),corners:zeros()}];}
  function cells(p){return p.cellLayout?clone(p.cellLayout):Array.from({length:p.cellCols*p.cellRows},(_,i)=>({id:i+1,x:i%p.cellCols*p.cellPitchX,y:Math.floor(i/p.cellCols)*p.cellPitchY,model:1,rotation:0}));}
  function fromParameters(p){return {...Object.fromEntries(Object.keys(geometryKeys).map(k=>[k,k==='chess'?(p.chess||1):p[k]])),name:p.recipeMeta?.name||'test0929',id:p.recipeMeta?.id||'test0929',ppid:p.recipeMeta?.ppid||'DRILL_A01',models:models(p),cells:cells(p),rows:clone(p.ppidRows||[])};}
  function defaultDraft(p){const d=fromParameters(p);if(!p.models){for(let id=2;id<=5;id++){const i=id-2;d.models.push({id,pixelsX:144,pixelsY:256,holeCount:id===5?0:id===4?1:3,holes:[1.8,4.8,7.8].map(x=>[x,5.6+2*i,1.8+.3*i,2.2]),corners:Array.from({length:4},()=>[.45+.15*i,.45+.15*i])});}}return d;}
  function rotate(x,y,degrees){const t=degrees*Math.PI/180,c=Math.cos(t),s=Math.sin(t);return {x:x*c-y*s,y:x*s+y*c};}
  function corners(cell,model,d){return [[0,0],[model.pixelsX*d.pixelSize,0],[model.pixelsX*d.pixelSize,model.pixelsY*d.pixelSize],[0,model.pixelsY*d.pixelSize]].map(([x,y])=>{const q=rotate(x,y,cell.rotation);return {x:d.akX+cell.x+q.x,y:d.akY+cell.y+q.y};});}
  function validate(d){
    const errors=[],warnings=[];
    for(const k of ['glassX','glassY','pixelSize','shotPitchPixels'])if(!Number.isFinite(d[k])||d[k]<=0)errors.push(k+'는 양수여야 합니다.');
    for(const k of ['akX','akY'])if(!Number.isFinite(d[k]))errors.push(k+' 숫자 오류');
    if(!Number.isInteger(d.shotPitchPixels))errors.push('PITCH는 양의 정수입니다.');
    if(![1,4].includes(d.split))errors.push('DOE는 축당 1 또는 4입니다.');
    if(!Number.isInteger(d.chess)||d.chess<1||d.chess>5)errors.push('CHESS는 1~5입니다.');
    for(const k of ['name','id','ppid'])if(typeof d[k]!=='string'||!d[k].trim()||d[k].length>160)errors.push(k+'는 1~160자 이름입니다.');
    if(!Array.isArray(d.models)||d.models.length<1||d.models.length>5)errors.push('모델은 1~5개입니다.');
    (d.models||[]).forEach((m,i)=>{
      if(m.id!==i+1)errors.push('모델 ID는 1부터 연속이어야 합니다.');
      for(const k of ['pixelsX','pixelsY'])if(!Number.isInteger(m[k])||m[k]<1)errors.push('Model'+m.id+' '+k+' 양의 정수 오류');
      if(!Number.isInteger(m.holeCount)||m.holeCount<0||m.holeCount>3)errors.push('Model'+m.id+' 활성 Hole 개수는 0~3입니다.');
      if(!Array.isArray(m.holes)||m.holes.length<m.holeCount||m.holes.length>3||m.holes.some(h=>!Array.isArray(h)||h.length!==4||h.some(x=>!Number.isFinite(x))||h[2]<0||h[3]<0))errors.push('Model'+m.id+' Hole X/Y/W/H 오류');
      if(!Array.isArray(m.corners)||m.corners.length!==4||m.corners.some(c=>!Array.isArray(c)||c.length!==2||c.some(x=>!Number.isFinite(x))))errors.push('Model'+m.id+' Edge X/Y 오류');
    });
    if(!Array.isArray(d.cells)||d.cells.length<1||d.cells.length>150)errors.push('Cell은 1~150개입니다.');
    let shots=0;
    (d.cells||[]).forEach((c,i)=>{
      if(c.id!==i+1)errors.push('Cell ID는 1부터 연속이어야 합니다.');
      if(![c.x,c.y,c.rotation].every(Number.isFinite))errors.push('C'+c.id+' 좌표/회전각 숫자 오류');
      const m=d.models?.find(m=>m.id===c.model);
      if(!m){errors.push('C'+c.id+' Model 번호 오류');return;}
      const nc=Math.floor(m.pixelsX/d.shotPitchPixels),nr=Math.floor(m.pixelsY/d.shotPitchPixels);shots+=nc*nr;
      if(nc<1||nr<1||nc*nr>10000)errors.push('C'+c.id+' Shot은 1~10,000개 범위입니다.');
      if(corners(c,m,d).some(q=>!Number.isFinite(q.x)||!Number.isFinite(q.y)||q.x< -1e-8||q.y< -1e-8||q.x>d.glassX+1e-8||q.y>d.glassY+1e-8))errors.push('C'+c.id+' 회전 후 Cell 외곽이 Glass 밖입니다.');
    });
    if(shots>500000)errors.push('전체 Shot 그룹은 원본 한도 500,000개 이하입니다.');
    if((d.rows||[]).some(r=>r[0]==='CELL'&&/RECIPE_OFFSET_[XY]$/.test(r[1])&&Number(r[2])!==0))warnings.push('Cell RECIPE_OFFSET은 보존하지만 좌표 계산에는 적용하지 않습니다. Align/APC/왜곡·Scanner 서비스시간도 별도 검증입니다.');
    if((d.rows||[]).some(r=>r[0]==='HEAD'&&/DEFAULT_OFFSET_[XY]$/.test(r[1])&&Number(r[2])!==0))warnings.push('Head DEFAULT_OFFSET은 보존하지만 명목 기하 계산에는 적용하지 않습니다.');
    return {errors:[...new Set(errors)],warnings,shots};
  }
  function toParameters(d,p){const v=validate(d);if(v.errors.length)throw new Error(v.errors.join('\n'));return {...clone(p),...Object.fromEntries(Object.keys(geometryKeys).map(k=>[k,d[k]])),pixelsX:d.models[0].pixelsX,pixelsY:d.models[0].pixelsY,holes:clone(d.models[0].holes.slice(0,d.models[0].holeCount)),models:clone(d.models),cellLayout:clone(d.cells),recipeMeta:{name:d.name.trim(),id:d.id.trim(),ppid:d.ppid.trim()},ppidRows:clone(d.rows||[])};}
  function csvRows(text){
    text=String(text).replace(/^\uFEFF/,'');if(text.length>1000000)throw new Error('PPID CSV는 1 MB 이하입니다.');
    const rows=[];let row=[],s='',quoted=false;
    for(let i=0;i<=text.length;i++){const c=text[i];if(quoted){if(c==='"'&&text[i+1]==='"'){s+='"';i++;}else if(c==='"')quoted=false;else if(c===undefined)throw new Error('CSV 따옴표가 닫히지 않았습니다.');else s+=c;}
      else if(c==='"'&&s==='')quoted=true;else if(c===','){row.push(s);s='';}else if(c==='\n'||c===undefined){row.push(s.replace(/\r$/,''));if(row.some(x=>x.trim()))rows.push(row.map(x=>x.trim()));row=[];s='';}else s+=c;}
    return rows;
  }
  function parse(text,p){
    const rows=csvRows(text);if(!rows.length||rows.some(r=>r.length!==3))throw new Error('PPID는 SECTION,NAME,VALUE 3열 CSV입니다. 조건 JSON은 상단의 조건 불러오기를 사용하세요.');
    const map=new Map();for(const r of rows){const key=r[0]+'|'+r[1];if(map.has(key))throw new Error('중복 PPID 항목: '+key);map.set(key,r[2]);}
    const read=(section,key,fallback)=>map.has(section+'|'+key)?map.get(section+'|'+key):fallback;
    const num=(section,key,fallback)=>{const s=read(section,key,fallback);if(s===undefined||s===''||!Number.isFinite(Number(s)))throw new Error('숫자 누락/오류: '+section+'|'+key);return Number(s);};
    const d=fromParameters(p);d.rows=rows;d.name=read('COMMON','RECIPE_NAME',read('DEFAULT','RECIPE_NAME',d.name));d.id=read('DEFAULT','RECIPE_ID',d.name);d.ppid=read('COMMON','ONLINE_PPID_NAME',d.ppid);
    for(const [k,key] of Object.entries(geometryKeys))d[k]=num('PROCESS',key,k==='chess'?1:undefined);
    const mc=num('PROCESS','CELL_MODEL_TYPE_COUNT'),cc=num('COMMON','MAX_CELL_NUMBER');if(!Number.isInteger(mc)||mc<1||mc>5||!Number.isInteger(cc)||cc<1||cc>150)throw new Error('Model 1~5개 / Cell 1~150개 범위 오류');
    d.models=Array.from({length:mc},(_,i)=>{const id=i+1,pre='MODEL'+id+'_';return {id,pixelsX:num('PROCESS',pre+'NUM_OF_PIXEL_X'),pixelsY:num('PROCESS',pre+'NUM_OF_PIXEL_Y'),holeCount:num('PROCESS',pre+'MASKING_HOLE_NUMBER',0),holes:Array.from({length:3},(_,j)=>['X','Y','SIZE_X','SIZE_Y'].map(a=>num('PROCESS',pre+'MASKING_HOLE'+(j+1)+'_'+a,0))),corners:cornerNames.map(a=>['X','Y'].map(b=>num('PROCESS',pre+'CELL_'+a+'_ROUND_'+b,0)))};});
    d.cells=Array.from({length:cc},(_,i)=>{const id=i+1,pre='CELL'+id+'_';return {id,x:num('CELL',pre+'ALIGN_TO_1ST_PIXEL_X'),y:num('CELL',pre+'ALIGN_TO_1ST_PIXEL_Y'),model:num('CELL',pre+'MODEL_TYPE'),rotation:num('CELL',pre+'ROTATION',0)};});
    const v=validate(d);if(v.errors.length)throw new Error(v.errors.join('\n'));return d;
  }
  function exportCSV(d){
    const v=validate(d);if(v.errors.length)throw new Error(v.errors.join('\n'));
    const changes=new Map(),set=(a,b,c)=>changes.set(a+'|'+b,[a,b,String(c)]);
    set('DEFAULT','RECIPE_NAME',d.name);set('DEFAULT','RECIPE_ID',d.id);set('COMMON','RECIPE_NAME',d.name);set('COMMON','ONLINE_PPID_NAME',d.ppid);set('COMMON','MAX_CELL_NUMBER',d.cells.length);set('PROCESS','CELL_MODEL_TYPE_COUNT',d.models.length);
    for(const [k,key] of Object.entries(geometryKeys))set('PROCESS',key,d[k]);
    for(const m of d.models){const pre='MODEL'+m.id+'_';set('PROCESS',pre+'NUM_OF_PIXEL_X',m.pixelsX);set('PROCESS',pre+'NUM_OF_PIXEL_Y',m.pixelsY);set('PROCESS',pre+'MASKING_HOLE_NUMBER',m.holeCount);for(let j=0;j<3;j++)['X','Y','SIZE_X','SIZE_Y'].forEach((a,k)=>set('PROCESS',pre+'MASKING_HOLE'+(j+1)+'_'+a,(m.holes[j]||[0,0,0,0])[k]));cornerNames.forEach((a,j)=>['X','Y'].forEach((b,k)=>set('PROCESS',pre+'CELL_'+a+'_ROUND_'+b,m.corners[j][k])));}
    for(const c of d.cells){const pre='CELL'+c.id+'_';for(const [key,k] of [['ALIGN_TO_1ST_PIXEL_X','x'],['ALIGN_TO_1ST_PIXEL_Y','y'],['MODEL_TYPE','model'],['ROTATION','rotation']])set('CELL',pre+key,c[k]);}
    const rows=[];for(const r of d.rows||[]){const key=r[0]+'|'+r[1],c=changes.get(key);if(c){rows.push(c);changes.delete(key);}else{const cm=r[1].match(/^CELL(\d+)_/),mm=r[1].match(/^MODEL(\d+)_/);if((r[0]==='CELL'&&cm&&Number(cm[1])>d.cells.length)||(r[0]==='PROCESS'&&mm&&Number(mm[1])>d.models.length))continue;rows.push(r);}}
    rows.push(...changes.values());const quote=x=>/[",\r\n]/.test(x)?'"'+x.replace(/"/g,'""')+'"':x;return '\uFEFF'+rows.map(r=>r.map(quote).join(',')).join('\r\n')+'\r\n';
  }
  return {clone,cornerNames,geometryKeys,models,cells,rotate,corners,fromParameters,defaultDraft,validate,toParameters,csvRows,parse,exportCSV};
});
