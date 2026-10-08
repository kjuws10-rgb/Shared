// Derive selectable B07 measurement points from the supplied recipe.
const fs=require('fs'),C=require('./src/fixed.json'),S=require('./references/prior_engine');
const p={...JSON.parse(fs.readFileSync('references/prior_conditions.json')).parameters,rowOneOnly:false},g=S.makeGeometry(p);
C.pointGrid={pitchMm:g.pitch,minXmm:g.half+S.beamOffset(7,p).x,minYmm:g.half+S.beamOffset(7,p).y,cols:g.cols,rows:g.rows,beam:7,source:'test0929 Head ownership and Mask; B07'};
for(const n of C.points){
 const cell=g.cells[n.cell-1];n.cellOriginX=cell.x;n.cellOriginY=cell.y;
 n.validShots=[];
 for(let col=1;col<=cell.cols;col++)for(let row=1;row<=cell.rows;row++)if(S.makePoint({...n,col,row},p,g).geometryValid)n.validShots.push([col,row]);
 for(const [axis,min,index] of [['X',C.pointGrid.minXmm,n.col],['Y',C.pointGrid.minYmm,n.row]]){
  const k='point'+axis+n.head,value=Number((min+(index-1)*g.pitch).toFixed(6));
  C.defaults[k]=value;C.inquiryCase[k]=value;
 }
}
C.pointPlanVersion='individual-cell-B07-grid-v3';
fs.writeFileSync('src/fixed.json',JSON.stringify(C,null,2)+'\n');
console.log(JSON.stringify({grid:C.pointGrid,validShots:C.points.map(n=>({head:n.head,count:n.validShots.length}))}));
