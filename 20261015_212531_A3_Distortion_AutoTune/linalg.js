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
const api={svd,dot,norm,mv,tr}; if(typeof module!=="undefined"&&module.exports)module.exports=api;root.SVDCore=api;})(typeof globalThis!=="undefined"?globalThis:this);