(function(root){
'use strict';
const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0), norm=a=>Math.sqrt(dot(a,a));
const eye=n=>Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>+(i===j)));
const mv=(A,x)=>A.map(r=>dot(r,x));
const tr=A=>A[0].map((_,j)=>A.map(r=>r[j]));
const cache=new Map();let builds=0;
// One-sided Jacobi SVD: directly orthogonalize columns, without A^T A.
function svd(A){
 const m=A.length,n=A[0].length,B=A.map(r=>r.slice()),V=eye(n);
 for(let sweep=0;sweep<160;sweep++){
  let changed=false;
  for(let p=0;p<n-1;p++)for(let q=p+1;q<n;q++){
   let aa=0,bb=0,ab=0;
   for(let i=0;i<m;i++){aa+=B[i][p]**2;bb+=B[i][q]**2;ab+=B[i][p]*B[i][q];}
   if(Math.abs(ab)<=2e-15*Math.sqrt(aa*bb)||Math.abs(ab)<1e-30)continue;
   const tau=(bb-aa)/(2*ab),t=(tau>=0?1:-1)/(Math.abs(tau)+Math.hypot(1,tau));
   const c=1/Math.hypot(1,t),s=c*t;
   for(let i=0;i<m;i++){const a=B[i][p],b=B[i][q];B[i][p]=c*a-s*b;B[i][q]=s*a+c*b;}
   for(let i=0;i<n;i++){const a=V[i][p],b=V[i][q];V[i][p]=c*a-s*b;V[i][q]=s*a+c*b;}
   changed=true;
  }
  if(!changed)break;
 }
 const sig=Array.from({length:n},(_,j)=>Math.hypot(...B.map(r=>r[j])));
 const order=Array.from({length:n},(_,i)=>i).sort((a,b)=>sig[b]-sig[a]);
 const U=B.map(r=>order.map(j=>sig[j]>1e-14?r[j]/sig[j]:0));
 // Complete left null columns for the small square matrices used here.
 for(let k=0;k<n;k++)if(sig[order[k]]<=1e-14){
  let best=null,bestNorm=0;
  for(let a=0;a<m;a++){const q=Array.from({length:m},(_,i)=>+(i===a));for(let pass=0;pass<2;pass++)for(let j=0;j<k;j++){const c=dot(q,U.map(row=>row[j]));for(let i=0;i<m;i++)q[i]-=c*U[i][j];}const z=norm(q);if(z>bestNorm){best=q;bestNorm=z;}}
  if(bestNorm>1e-12)for(let i=0;i<m;i++)U[i][k]=best[i]/bestNorm;
 }
 return {s:order.map(j=>sig[j]),V:V.map(r=>order.map(j=>r[j])),U};
}
function geometry(nodes){
 if(nodes.length!==5||nodes.some((t,i)=>!Number.isFinite(t)||(i&&t-nodes[i-1]<1e-5))||Math.abs(nodes[0])>1e-12||Math.abs(nodes[4]-1)>1e-12)throw Error('Y 위치는 0 < t1 < t2 < t3 < 1, 간격 > 0.00001 조건이어야 합니다.');
 const key=nodes.join(',');if(cache.has(key))return cache.get(key);
 const weights=nodes.map((x,j)=>1/nodes.reduce((p,y,k)=>j===k?p:p*(x-y),1));
 const L=Array.from({length:3},(_,r)=>{let row=Array(5).fill(0),j=r+1,a=nodes[j]-nodes[j-1],b=nodes[j+1]-nodes[j];row[j-1]=2/(a*(a+b));row[j]=-2/(a*b);row[j+1]=2/(b*(a+b));return row;});
 const lsvd=svd([...L,[0,0,0,0,0],[0,0,0,0,0]]),scale=lsvd.s[0];
 const Ln=L.map(r=>r.map(x=>x/scale));
 const B=Ln.map(r=>r.slice(1,4));
 const C=[[1,0,0,0,0],[0,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
 const A=nodes.map(t=>[1,2*t-1,(2*t-1)**2,(2*t-1)**3,(2*t-1)**4]);
 const g={nodes:nodes.slice(),weights,L,Ln,Lsvd:lsvd,Bsvd:svd(B),C,Csvd:svd(C),A,Asvd:svd(A),build:++builds};cache.set(key,g);return g;
}
function lagrange(g,data,t){
 if(t<0||t>1||data.length!==5||data.some(x=>!Number.isFinite(x)))return NaN;
 let num=0,den=0;
 for(let j=0;j<5;j++){if(Math.abs(t-g.nodes[j])<1e-12)return data[j];const w=g.weights[j]/(t-g.nodes[j]);num+=w*data[j];den+=w;}
 return num/den;
}
function linear(g,d,t){if(t<0||t>1||d.some(x=>!Number.isFinite(x)))return NaN;let j=0;while(j<3&&t>g.nodes[j+1])j++;const z=(t-g.nodes[j])/(g.nodes[j+1]-g.nodes[j]);return (1-z)*d[j]+z*d[j+1];}
// Min ||c-d||² + lambda² ||Ln c||², optionally c0=d0,c4=d4.
function smooth(g,d,lambda,anchor){
 if(lambda===0)return d.slice();
 if(anchor){
  const z=d.slice(),r=mv(g.Ln,d),{U,V,s}=g.Bsvd;
  for(let k=0;k<3;k++){
   const coeff=-lambda*lambda*s[k]/(1+lambda*lambda*s[k]*s[k])*dot(U.map(row=>row[k]),r);
   for(let j=0;j<3;j++)z[j+1]+=V[j][k]*coeff;
  }
  return z;
 }
 const {s,V}=g.Lsvd,out=Array(5).fill(0),scale=s[0];
 for(let k=0;k<5;k++){const c=dot(V.map(row=>row[k]),d)/(1+lambda*lambda*(s[k]/scale)**2);for(let j=0;j<5;j++)out[j]+=V[j][k]*c;}
 return out;
}
function smallSpace(g,d,k){
 const out=Array(5).fill(0),V=g.Lsvd.V;
 for(let a=5-k;a<5;a++){const c=dot(V.map(r=>r[a]),d);for(let j=0;j<5;j++)out[j]+=V[j][a]*c;}
 return out;
}
function fit(g,data,method,lambda,anchor,k){
 const c=method==='smooth'?smooth(g,data,lambda,anchor):method==='small'?smallSpace(g,data,k):data.slice();
 return {c,evaluate:t=>method==='linear'?linear(g,c,t):lagrange(g,c,t)};
}
function truth(kind,amp,s,t){
 if(kind==='invisible')return [amp*Math.sin(Math.PI*s)*Math.sin(Math.PI*t),.35*amp*Math.sin(Math.PI*s)*Math.sin(2*Math.PI*t)];
 if(kind==='local')return [amp*(.3+.7*s)*Math.exp(-(((t-.47)/.09)**2))*Math.sin(Math.PI*t),.2*amp*Math.sin(2*Math.PI*t)];
 if(kind==='twist')return [amp*(2*s-1)*Math.sin(Math.PI*t),.4*amp*(2*s-1)*Math.sin(2*Math.PI*t)];
 return [amp*((.65+.35*s)*Math.sin(Math.PI*t)+.22*(2*s-1)*Math.sin(2*Math.PI*t)),.35*amp*Math.cos(Math.PI*s)*Math.sin(Math.PI*t)];
}
function random(seed){let x=seed>>>0;return ()=>{x=(1664525*x+1013904223)>>>0;return (x+.5)/4294967296;};}
function normal(r){return Math.sqrt(-2*Math.log(r()))*Math.cos(2*Math.PI*r());}
function rigid(points){
 const fine=points.filter(p=>p.row===0||p.row===4),n=fine.length;
 const b=[0,0],m=[0,0];for(const p of fine)for(let a=0;a<2;a++){b[a]+=p.base[a]/n;m[a]+=p.measured[a]/n;}
 let cs=0,sn=0;for(const p of fine){let x=p.base[0]-b[0],y=p.base[1]-b[1],u=p.measured[0]-m[0],v=p.measured[1]-m[1];cs+=x*u+y*v;sn+=x*v-y*u;}
 const a=Math.atan2(sn,cs),c=Math.cos(a),s=Math.sin(a),t=[m[0]-c*b[0]+s*b[1],m[1]-s*b[0]-c*b[1]];
 return {angle:a,t,back:q=>{const u=q[0]-t[0],v=q[1]-t[1];return [c*u+s*v,-s*u+c*v];}};
}
function run(options={}){
 const o={kind:'smooth',amp:22,noise:1,tol:30,maxRetry:2,attempt:0,weight:100,method:'lagrange',lambda:1,anchor:true,k:3,limit:80,nodes:[0,.25,.5,.75,1],...options};
 const g=geometry(o.nodes),r=random(20261015+o.attempt*101),factor=['retry','stubborn'].includes(o.kind)?(o.kind==='retry'?.5**o.attempt:1):1,amplitude=o.amp*factor;
 const angle=.00013,ca=Math.cos(angle),sa=Math.sin(angle),tx=17,ty=-11;
 const points=[];
 for(let side=0;side<2;side++)for(let j=0;j<5;j++){
  const t=o.nodes[j],b=[(side-.5)*1000000,(t-.5)*1800000],d=truth(o.kind,amplitude,side,t),q=[b[0]+d[0],b[1]+d[1]];
  const m=[ca*q[0]-sa*q[1]+tx+o.noise*normal(r),sa*q[0]+ca*q[1]+ty+o.noise*normal(r)];
  points.push({side,row:j,s:side,t,base:b,measured:m,valid:!(o.kind==='missing'&&side===1&&j===2)});
 }
 const pose=rigid(points);
 function fieldTruth(s,t){const b=[(s-.5)*1000000,(t-.5)*1800000],d=truth(o.kind,amplitude,s,t),q=[b[0]+d[0],b[1]+d[1]],m=[ca*q[0]-sa*q[1]+tx,sa*q[0]+ca*q[1]+ty],z=pose.back(m);return [z[0]-b[0],z[1]-b[1]];}
 for(const p of points){const q=pose.back(p.measured);p.delta=[q[0]-p.base[0],q[1]-p.base[1]];}
 if(o.manual){if(o.manual.length!==10||o.manual.some(r=>!Array.isArray(r)||r.length!==2||r.some(v=>!Number.isFinite(v))))throw Error('10점 × X/Y의 유한한 편차를 입력하세요.');points.forEach((p,i)=>{p.delta=o.manual[i].slice();p.valid=true;});}
 const valid=points.every(p=>p.valid),dist=points.filter(p=>p.row>0&&p.row<4),maxRaw=Math.max(...dist.flatMap(p=>p.delta.map(Math.abs))),chuck=valid&&maxRaw<=o.tol;
 const fits={};for(const method of ['linear','lagrange','smooth','small'])fits[method]=[0,1].map(side=>[0,1].map(axis=>fit(g,points.filter(p=>p.side===side).map(p=>p.delta[axis]),method,o.lambda,o.anchor,o.k)));
 function field(method,s,t){if(!valid||s<0||s>1||t<0||t>1)return [NaN,NaN];return [0,1].map(axis=>(1-s)*fits[method][0][axis].evaluate(t)+s*fits[method][1][axis].evaluate(t));}
 const grid=[];let sumBefore=0,sumAfter=0,sumFit=0,maxComp=0,maxErr=0,count=0;
 for(let j=0;j<31;j++)for(let i=0;i<17;i++){
  const s=i/16,t=j/30,real=fieldTruth(s,t),guess=field(o.method,s,t),comp=guess.map(x=>x*o.weight/100),err=real.map((x,a)=>x-comp[a]);
  grid.push({s,t,real,guess,comp,err});sumBefore+=dot(real,real);
  if(valid){sumAfter+=dot(err,err);maxComp=Math.max(maxComp,...comp.map(Math.abs));maxErr=Math.max(maxErr,Math.hypot(...err));}count++;
 }
 for(const p of points){const q=field(o.method,p.s,p.t);if(valid)sumFit+=q.reduce((n,v,a)=>n+(v-p.delta[a])**2,0);}
 const compOK=valid&&Number.isFinite(maxComp)&&maxComp<=o.limit;
 const permit=chuck&&compOK;
 const canRetry=valid&&!chuck&&o.attempt<o.maxRetry;
 const status=!valid?'MISSING':!chuck?(canRetry?'RETRY':'HOLD'):!compOK?'COMP_LIMIT':'PASS';
 return {options:o,geometry:g,points,pose:{angle:pose.angle,t:pose.t},valid,chuck,maxRaw,permit,compOK,canRetry,status,attempt:o.attempt,maxComp:valid?maxComp:null,fitRms:valid?Math.sqrt(sumFit/10):null,beforeRms:o.manual?null:Math.sqrt(sumBefore/count),afterRms:valid&&!o.manual?Math.sqrt(sumAfter/count):null,maxErr:valid&&!o.manual?maxErr:null,grid,fits,field,fieldTruth,builds};
}
function lab(g,kind,index,magnitude){
 const decomp=kind==='A'?g.Asvd:kind==='L'?g.Lsvd:g.Csvd,A=kind==='A'?g.A:kind==='L'?[...g.L,[0,0,0,0,0],[0,0,0,0,0]]:g.C;
 const v=decomp.V.map(row=>row[index]),c=v.map(x=>x*magnitude),response=mv(A,c);
 const curve=Array.from({length:101},(_,i)=>{const t=i/100;return {t,value:kind==='A'?c.reduce((s,a,j)=>s+a*(2*t-1)**j,0):lagrange(g,c,t)};});
 return {s:decomp.s,v,response,normInput:norm(c),normResponse:norm(response),curve,matrix:A};
}
const api={dot,norm,mv,tr,svd,geometry,lagrange,linear,smooth,smallSpace,fit,truth,rigid,run,lab};
if(typeof module!=='undefined'&&module.exports)module.exports=api;root.DistortionEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
