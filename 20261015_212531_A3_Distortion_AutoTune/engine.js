(function(root){
'use strict';
const LA=typeof module!=='undefined'&&module.exports?require('./linalg.js'):root.SVDCore;
const {svd,dot,norm,mv}=LA,clone=x=>JSON.parse(JSON.stringify(x)),cache=new Map();
const finitePair=p=>Array.isArray(p)&&p.length===2&&p.every(v=>Number.isFinite(v)&&Math.abs(v)<1e7);
function presets(){return ['A','B'].map((name,k)=>{const width=k?1500:1100,height=k?1850:1300,xy=k?[[.32,.35],[.63,.34],[.35,.51],[.60,.52],[.33,.67],[.65,.68]]:[[.39,.32],[.61,.33],[.38,.5],[.62,.5],[.40,.68],[.60,.67]];
 const columns=k?[.36,.64]:[.40,.60];xy.forEach((p,i)=>p[0]=columns[i%2]);
 const keys=[[columns[0],.07],[columns[1],.07],[columns[1],.93],[columns[0],.93]].map((p,i)=>({id:'A'+(i+1),kind:'align',camera:'C'+(i+1),x:p[0]*width,y:p[1]*height,reference:[512+i*1.7,510-i*.8],scanPose:'ALIGN-'+(i+1)}));
 xy.forEach((p,i)=>keys.push({id:'D'+(i+1),kind:'distortion',camera:i%2?'C2':'C1',x:p[0]*width,y:p[1]*height,reference:[510+(i%2)*3+(i/2|0)*.8,513-(i/2|0)*1.1],scanPose:'Y-SCAN-'+(i/2+1|0)}));
 return {modelId:'MODEL-'+name,version:1,width,height,imagingVersion:'OPTICS-DEMO-1',baselineApproved:true,provenance:'가상 기준',keys};});}
function validateRecipe(r){
 if(!r||typeof r.modelId!=='string'||!r.modelId.trim()||r.modelId.length>60)throw Error('Model ID를 1~60자로 입력하세요.');
 if(!Number.isInteger(r.version)||r.version<1)throw Error('레시피 버전을 확인하세요.');
 if(![r.width,r.height].every(v=>Number.isFinite(v)&&v>0&&v<1e6))throw Error('기판 가로·세로 설계치를 확인하세요.');
 if(typeof r.imagingVersion!=='string'||!r.imagingVersion.trim())throw Error('촬영 조건 버전을 입력하세요.');
 if(!Array.isArray(r.keys)||![6,8,10].includes(r.keys.length))throw Error('Align 4개와 Distortion 2·4·6개의 설계 정보가 필요합니다.');
 const ids=new Set();for(const p of r.keys){if(typeof p.id!=='string'||!p.id||ids.has(p.id))throw Error('Key ID가 없거나 중복됩니다.');ids.add(p.id);if(!['align','distortion'].includes(p.kind)||!['C1','C2','C3','C4'].includes(p.camera)||!finitePair([p.x,p.y])||p.x<0||p.x>r.width||p.y<0||p.y>r.height||!finitePair(p.reference)||typeof p.scanPose!=='string'||!p.scanPose.trim())throw Error('Key 위치·카메라·기준 pixel·촬영 위치 ID를 확인하세요.');}
 const fine=r.keys.filter(p=>p.kind==='align'),dist=r.keys.filter(p=>p.kind==='distortion');if(fine.length!==4||new Set(fine.map(p=>p.camera)).size!==4||![2,4,6].includes(dist.length))throw Error('Align은 카메라별 1개씩 4개, Distortion은 2·4·6개여야 합니다.');
 const cameras=[...new Set(dist.map(p=>p.camera))];if(cameras.length!==2)throw Error('Distortion은 Align 카메라 중 정확히 2개를 사용합니다.');
 for(const c of cameras){const p=dist.filter(p=>p.camera===c).sort((a,b)=>a.y-b.y);if(p.length!==dist.length/2||p.some((q,i)=>i&&q.y-p[i-1].y<r.height*1e-5))throw Error('Distortion은 두 카메라에 같은 수로 나누고, 카메라별 Y 위치를 다르게 배치하세요.');}
 for(let i=0;i<r.keys.length;i++)for(let j=0;j<i;j++)if(Math.hypot((r.keys[i].x-r.keys[j].x)/r.width,(r.keys[i].y-r.keys[j].y)/r.height)<1e-6)throw Error('설계 Key 위치가 중복됩니다.');return r;
}
function recipeKey(r){validateRecipe(r);return JSON.stringify([r.modelId,r.version,r.width,r.height,r.imagingVersion,r.baselineApproved,r.keys.map(p=>[p.id,p.kind,p.camera,p.x,p.y,p.reference,p.scanPose])]);}
function activeKeys(r,count){const fine=r.keys.filter(p=>p.kind==='align'),dist=r.keys.filter(p=>p.kind==='distortion');if(![2,4,6].includes(count)||count>dist.length)throw Error('레시피에 존재하는 2·4·6개 Key 구성만 선택할 수 있습니다.');const cams=[...new Set(dist.map(p=>p.camera))].sort(),selected=[];for(const c of cams){const p=dist.filter(p=>p.camera===c).sort((a,b)=>a.y-b.y);selected.push(...(count/2===p.length?p:count===4?[p[0],p.at(-1)]:[p[Math.floor((p.length-1)/2)]]));}return [...fine,...selected];}
function geometry(nodes){
 const key=nodes.join(',');if(cache.has(key))return cache.get(key);if(nodes.length<1||nodes.length>3||nodes.some((t,i)=>!Number.isFinite(t)||(i&&t-nodes[i-1]<1e-6)))throw Error('카메라별 Y 위치가 잘못되었습니다.');
 const weights=nodes.map((x,j)=>1/nodes.reduce((v,y,k)=>j===k?v:v*(x-y),1));let L=Array.from({length:nodes.length},()=>Array(nodes.length).fill(0));
 if(nodes.length===3){const a=nodes[1]-nodes[0],b=nodes[2]-nodes[1];L[0]=[2/(a*(a+b)),-2/(a*b),2/(b*(a+b))];}
 const dec=svd(L),scale=dec.s[0]||1;L=L.map(row=>row.map(x=>x/scale));const g={nodes:nodes.slice(),weights,L,svd:svd(L)};cache.set(key,g);return g;
}
function lagrange(g,d,t){const ns=g.nodes;if(d.length!==ns.length||!d.every(Number.isFinite)||!Number.isFinite(t)||t<ns[0]-1e-10||t>ns.at(-1)+1e-10)return NaN;let num=0,den=0;for(let j=0;j<ns.length;j++){if(Math.abs(t-ns[j])<1e-10)return d[j];const z=g.weights[j]/(t-ns[j]);num+=z*d[j];den+=z;}return num/den;}
function regularize(g,d,lambda){if(!lambda||d.length<3)return d.slice();const {V,s}=g.svd,c=Array(d.length).fill(0);for(let k=0;k<d.length;k++){const z=dot(V.map(row=>row[k]),d)/(1+lambda*lambda*s[k]*s[k]);for(let j=0;j<c.length;j++)c[j]+=V[j][k]*z;}return c;}
function groups(r,count){const keys=activeKeys(r,count).filter(p=>p.kind==='distortion'),cams=[...new Set(keys.map(p=>p.camera))].sort();return cams.map(camera=>{const ks=keys.filter(p=>p.camera===camera).sort((a,b)=>a.y-b.y);return {camera,keys:ks,geometry:geometry(ks.map(p=>p.y/r.height))};});}
function context(r,count,measurement){return recipeKey(r)+'|'+count+'|'+measurement.imagingVersion+'|'+(measurement.source||'manual');}
function analyze(r,count,measurement){
 validateRecipe(r);const active=activeKeys(r,count),base={eligible:false,status:'측정 대기',rows:[],groups:groups(r,count),context:context(r,count,measurement),sequence:measurement.sequence,glassId:measurement.glassId};
 if(typeof measurement.glassId!=='string'||!measurement.glassId.trim())return {...base,status:'Glass ID 확인 필요'};
 if(!Number.isInteger(measurement.sequence)||measurement.sequence<1)return {...base,status:'측정 순서 정보 오류'};
 if(measurement.modelId!==r.modelId||measurement.recipeVersion!==r.version||measurement.count!==count)return {...base,status:'레시피 불일치'};
 if(measurement.imagingVersion!==r.imagingVersion)return {...base,status:'촬영 조건 변경'};
 if(!r.baselineApproved)return {...base,status:'기준 pixel 등록 대기'};
 if(!measurement.alignCompleted||measurement.phase!=='after-align')return {...base,status:'Align 완료 확인 대기'};
 if(!Number.isInteger(measurement.attempt)||measurement.attempt<0)return {...base,status:'Attempt 정보 오류'};
 if(!Array.isArray(measurement.points)||measurement.points.length!==active.length||new Set(measurement.points.map(p=>p.id)).size!==active.length)return {...base,status:'필수 Key 누락·중복'};
 const rows=[];for(const key of active){const p=measurement.points.find(p=>p.id===key.id);if(!p||p.camera!==key.camera||p.scanPose!==key.scanPose||p.glassId!==measurement.glassId||p.attempt!==measurement.attempt||p.phase!==(key.kind==='align'?'align-input':'after-align')||!finitePair(p.pixel)||p.valid===false)return {...base,status:'Key·촬영 위치·기판·Attempt 확인 필요'};if(p.repeat!==null&&p.repeat!==undefined&&!finitePair(p.repeat))return {...base,status:'검증 pixel 오류'};rows.push({key,pixel:p.pixel.slice(),repeat:p.repeat?.slice()||null,delta:p.pixel.map((x,a)=>x-key.reference[a]),validation:p.repeat?.map((x,a)=>x-key.reference[a])||null});}
 const dist=rows.filter(p=>p.key.kind==='distortion'),maxRaw=Math.max(...dist.flatMap(p=>p.delta.map(Math.abs))),chuck=maxRaw<=8; // DEMO-only engineering criterion, never tuned.
 return {...base,rows,eligible:chuck,status:chuck?'척킹 관측 정상':'척킹 재확인',maxRaw,chuck,hasValidation:dist.every(p=>p.validation),complete:true};
}
const policies={gentle:{gain:.55,lambda:2.2,label:'안정 우선'},follow:{gain:1,lambda:.15,label:'형상 추종'}};
function field(r,count,analysis,method,param){
 if(!analysis.complete||!analysis.chuck)return null;
 return analysis.groups.map(g=>{const p=param[g.camera]||param,rows=g.keys.map(k=>analysis.rows.find(p=>p.key.id===k.id)),c=[0,1].map(a=>method==='svd'?regularize(g.geometry,rows.map(p=>p.delta[a]),p.lambda):rows.map(p=>p.delta[a]));return {...g,rows,c,evaluate:t=>c.map(d=>p.gain*lagrange(g.geometry,d,t))};});
}
function validationLoss(record,method,param,camera=null){
 if(!record.analysis.eligible||!record.analysis.hasValidation)return null;let sum=0,n=0;for(const group of record.analysis.groups){if(camera&&group.camera!==camera)continue;const p=param[group.camera]||param,rows=group.keys.map(k=>record.analysis.rows.find(p=>p.key.id===k.id));for(let a=0;a<2;a++){const d=rows.map(p=>p.delta[a]),c=method==='svd'?regularize(group.geometry,d,p.lambda):d;for(let j=0;j<d.length;j++){sum+=(p.gain*c[j]-rows[j].validation[a])**2;n++;}}}return sum/n;
}
function tuneOne(history,analysis,method,camera){
 const unique=new Map();for(const p of history.filter(p=>p.index<analysis.sequence&&p.glassId!==analysis.glassId&&p.analysis.context===analysis.context&&p.analysis.eligible&&p.analysis.hasValidation).sort((a,b)=>a.index-b.index))unique.set(p.glassId,p);
 const hasCurvature=analysis.groups.find(g=>g.camera===camera).geometry.nodes.length===3,past=[...unique.values()].sort((a,b)=>a.index-b.index),previous=[...past].reverse().find(p=>p.auto?.[method]?.byCamera?.[camera])?.auto[method].byCamera[camera],fallback={...policies.gentle,lambda:method==='svd'&&hasCurvature?policies.gentle.lambda:0},incumbent=previous?.param||fallback;
 const base={param:incumbent,state:'데이터 모으는 중',direction:'보수적으로 시작',used:past.map(p=>p.glassId),train:[],validation:[],promoted:false,evidence:'같은 기판의 별도 재촬영 pixel로 후보를 검증합니다.'};
 if(!analysis.eligible)return {...base,state:'원측정 확인 대기',direction:'설정 유지'};
 if(!analysis.hasValidation)return {...base,state:'검증 촬영 대기',direction:'설정 유지',evidence:'단일 촬영값의 자기 적합만으로 Auto Tune 개선을 승인하지 않습니다.'};
 if(past.length<12)return base;
 if(previous&&past.length%6!==0)return {...base,state:'현재 설정 유지',direction:previous.direction||'설정 유지'};
 const window=past.slice(-36),split=Math.floor(window.length*2/3),train=window.slice(0,split),hold=window.slice(split),lambdas=method==='svd'&&hasCurvature?[0,.25,.7,1.4,3.5]:[0],candidates=[];
 for(const lambda of lambdas)for(const gain of [.45,.7,1])candidates.push({lambda,gain});
 const mean=(xs)=>xs.reduce((s,x)=>s+x,0)/xs.length,score=(set,p)=>mean(set.map(r=>validationLoss(r,method,p,camera)));
 const candidate=candidates.sort((a,b)=>score(train,a)-score(train,b))[0],delta=hold.map(r=>validationLoss(r,method,incumbent,camera)-validationLoss(r,method,candidate,camera)),benefit=mean(delta),se=delta.length>1?Math.sqrt(delta.reduce((s,x)=>s+(x-benefit)**2,0)/(delta.length-1)/delta.length):Infinity;
 const promoted=benefit>Math.max(.02*score(hold,incumbent),1.96*se,1e-6),param=promoted?candidate:incumbent;
 const direction=param.gain<incumbent.gain||param.lambda>incumbent.lambda?'흔들림 억제 쪽':param.gain>incumbent.gain||param.lambda<incumbent.lambda?'형상 추종 쪽':'현재 균형 유지';
 return {...base,param,state:promoted?'후속 기판 검증 통과':'현재 설정 유지',direction,train:train.map(p=>p.glassId),validation:hold.map(p=>p.glassId),promoted,candidate,benefit,se,evidence:'이전 기판에서 후보 선정 → 뒤의 과거 기판에서 비교 → 현재 기판에 적용. 실가공 검증은 별도입니다.'};
}
function tune(history,analysis,method){const byCamera=Object.fromEntries(analysis.groups.map(g=>[g.camera,tuneOne(history,analysis,method,g.camera)])),all=Object.values(byCamera);return {byCamera,param:Object.fromEntries(Object.entries(byCamera).map(([c,t])=>[c,t.param])),state:all.some(t=>t.promoted)?'후속 기판 검증 통과':all[0].state,direction:Object.entries(byCamera).map(([c,t])=>c+' '+t.direction).join(' · '),used:all[0].used,train:all[0].train,validation:all[0].validation,promoted:all.some(t=>t.promoted),evidence:all[0].evidence};}
function rng(seed){let x=seed>>>0;return ()=>{x=(1664525*x+1013904223)>>>0;return (x+.5)/4294967296;};}
function gaussian(random){return Math.sqrt(-2*Math.log(random()))*Math.cos(2*Math.PI*random());}
function synthetic(r,count,index,scenario='steady',glassId){
 const random=rng(301015+index*691+(r.modelId==='MODEL-B'?1000:0)),noise=scenario==='noise'?(index<15?.15:index<45?1.35:.65):.45;
 const phase=scenario==='drift'&&index>30?1:0,amplitude=2.4+.5*Math.sin(index*.43),curvature=scenario==='local'?2.8:.8;
 const gs=groups(r,count);const truth=(camera,t)=>{const g=gs.find(p=>p.camera===camera),sign=camera===gs[0].camera?1:-1,range=g.geometry.nodes.length>1?g.geometry.nodes.at(-1)-g.geometry.nodes[0]:.35,center=(g.geometry.nodes[0]+g.geometry.nodes.at(-1))/2,u=(t-center)/Math.max(.2,range);
 let dx=sign*amplitude*(1+.45*u)+curvature*Math.cos(u*3)+phase*2.4*(t-.5),dy=.35*amplitude*Math.sin(u*2+sign*.4);if(scenario==='blind'){let z=1;for(const y of g.geometry.nodes)z*=((t-y)/.2)**2;dx+=10*Math.min(1,z)*Math.exp(-(((t-center)/.3)**2));}if(scenario==='retry')dx*=3.5;return [dx,dy];};
 const active=activeKeys(r,count),points=active.map(key=>{const real=key.kind==='distortion'?truth(key.camera,key.y/r.height):[.8*Math.sin(index),-.6*Math.cos(index)],pixel=real.map((v,a)=>key.reference[a]+v+noise*gaussian(random)),repeat=real.map((v,a)=>key.reference[a]+v+noise*gaussian(random));return {id:key.id,camera:key.camera,scanPose:key.scanPose,glassId,attempt:0,phase:key.kind==='align'?'align-input':'after-align',pixel,repeat,valid:!(scenario==='missing'&&key===active.at(-1))};});
 const measurement={glassId,modelId:r.modelId,recipeVersion:r.version,count,sequence:index,source:'synthetic',imagingVersion:scenario==='optics'&&index>24?r.imagingVersion+'-CHANGED':r.imagingVersion,alignCompleted:true,phase:'after-align',attempt:0,points};
 return {measurement,truth,noise};
}
function metrics(r,count,record,method,param){const curves=field(r,count,record.analysis,method,param);if(!curves||!record.truth)return null;let before=0,after=0,n=0;const camera=[];for(const g of curves){let b=0,a=0,k=0;const lo=g.geometry.nodes[0],hi=g.geometry.nodes.at(-1);for(let j=0;j<=40;j++){const t=lo+(hi-lo)*j/40,real=record.truth(g.camera,t),comp=g.evaluate(t);b+=dot(real,real);a+=real.reduce((s,x,i)=>s+(x-comp[i])**2,0);k++;}before+=b;after+=a;n+=k;camera.push({camera:g.camera,before:Math.sqrt(b/k),after:Math.sqrt(a/k)});}return {before:Math.sqrt(before/n),after:Math.sqrt(after/n),camera};}
function makeRecord(r,count,index,scenario,glassId,history=[]){const s=synthetic(r,count,index,scenario,glassId),analysis=analyze(r,count,s.measurement),record={glassId,index,scenario,measurement:s.measurement,analysis,truth:s.truth,auto:{}};for(const method of ['lagrange','svd'])record.auto[method]=tune(history,analysis,method);record.stats={};for(const method of ['lagrange','svd'])for(const criterion of ['gentle','follow','auto']){const param=criterion==='auto'?record.auto[method].param:policies[criterion];record.stats[method+'-'+criterion]=metrics(r,count,record,method,param);}return record;}
const api={presets,validateRecipe,recipeKey,activeKeys,geometry,lagrange,regularize,groups,analyze,field,validationLoss,tune,synthetic,makeRecord,metrics,policies,clone};if(typeof module!=='undefined'&&module.exports)module.exports=api;root.AutoTuneEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
