/* Render exact explanatory SVG, not a screenshot of the HTML page. */
const fs=require('node:fs'),path=require('node:path');
const F=require('../src/engine.js'),G=require('../src/formulas.js');
const dir=process.argv[2];if(!dir)throw new Error('Pass a temporary SVG output directory');fs.mkdirSync(dir,{recursive:true});
const p=F.copyDefaults(),g=F.makeGeometry(p),defs=F.autoSelect(p,g).definitions,r=F.evaluate(p,defs,g);
const colors={'formula-graph-bg':'#f3f7fa','formula-grid':'#627d8f','formula-accent':'#087e96','formula-fill':'#d2ebef','formula-amber':'#d99a24','formula-good':'#329d78'};
for(const [name,raw] of [['Formula_X_Motion',G.motionDiagram(G.compute(p,g,r,1,2).standardLong)],['Formula_Pair_Timing',G.pairDiagram(G.compute(p,g,r,6,7))]]){
  let svg=raw.match(/<svg[\s\S]*<\/svg>/)[0].replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ').replace(/var\(--([^)]+)\)/g,(_,key)=>colors[key]);
  svg=svg.replace(/(<svg[^>]+>)/,'$1<style>text{font-family:Sans;font-size:14px;fill:#163246}</style>');
  fs.writeFileSync(path.join(dir,name+'.svg'),svg);
}
console.log('Saved two exact formula diagrams:',dir);
