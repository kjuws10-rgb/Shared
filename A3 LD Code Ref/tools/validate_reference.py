"""Validate A3 source-pinned reference coverage. Read-only toward original source."""
from pathlib import Path
from urllib.parse import unquote,urlsplit
import argparse,collections,hashlib,json,re,subprocess,xml.etree.ElementTree as ET

def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def text(p):
    b=p.read_bytes()
    for enc in ['utf-8-sig','utf-16','cp949']:
        try:return b.decode(enc)
        except UnicodeError:pass
    raise ValueError('unrecognized source encoding: '+str(p))

def validate(source,output):
    errors=[];counts=collections.Counter();seen_links=set();eol=' ⟦EOL⟧'
    def check(ok,message):
        counts['assertions']+=1
        if not ok:errors.append(message)
    head=subprocess.check_output(['git','-C',str(source),'rev-parse','HEAD'],text=True).strip()
    tracked=subprocess.check_output(['git','-C',str(source),'ls-files','-z']).decode().split('\0')[:-1]
    check(not subprocess.check_output(['git','-C',str(source),'status','--porcelain']), 'source is dirty')
    push=subprocess.check_output(['git','-C',str(source),'remote','get-url','--push','origin'],text=True).strip()
    check(push=='DISABLED','source push must be disabled')
    manifest=json.loads((output/'manifest.json').read_text(encoding='utf-8'));inventory=json.loads((output/'metadata/file-inventory.json').read_text(encoding='utf-8'))
    check(manifest['sourceCommit']==head,'manifest HEAD mismatch')
    check({p['path'] for p in inventory}==set(tracked),'tracked-file coverage mismatch')
    check(len(inventory)==len(tracked),'duplicate file inventory')
    sources={};hashes={};symbol_ids=[];expected_bad=collections.Counter();inherited_bad=[]
    for item in inventory:
        rel=item['path'];p=source/rel;hashes[rel]=sha(p)
        check(item['sha256']==hashes[rel],rel+' SHA mismatch')
        lines=[] if item['kind']=='binary_reference' else text(p).splitlines();sources[rel]=lines
        bad=sum(l.count('\ufffd') for l in lines)
        if bad:inherited_bad.append({'sourcePath':rel,'lines':[n for n,l in enumerate(lines,1) if '\ufffd' in l],'replacementCharacters':bad})
        for k in ['document','html','diagram']:
            check((output/item[k]).is_file(),rel+' missing '+k)
        if item['annotation']:
            raw=(output/item['annotation']).read_text(encoding='utf-8').splitlines();restored=[];numbers=[];explanations=0
            for line in raw:
                if line.startswith('// 해설 L'):explanations+=1
                m=re.match(r'^L(\d+) \| (.*) ⟦EOL⟧$',line)
                if m:numbers.append(int(m[1]));restored.append(m[2])
            check(numbers==list(range(1,len(lines)+1)),rel+' annotation line numbering mismatch')
            check(restored==lines,rel+' annotation source restoration mismatch')
            expected_bad[item['annotation']]+=bad
            check(explanations==sum(bool(l.strip()) for l in lines),rel+' annotation explanation coverage mismatch')
            counts['annotated_files']+=1;counts['annotated_source_lines']+=len(lines)
        model=output/'metadata/files'/Path(rel+'.json')
        if p.suffix.lower()=='.cs':
            data=json.loads(model.read_text(encoding='utf-8'))
            check(data['sha256']==hashes[rel],rel+' metadata SHA mismatch')
            for m in data['members']:
                symbol_ids.append(m['id']);check(1<=m['startLine']<=m['endLine']<=len(lines),rel+' member range invalid')
            counts['csharp_files']+=1;counts['types']+=len(data['types']);counts['members']+=len(data['members']);counts['calls']+=len(data['calls'])
    check(len(set(symbol_ids))==len(symbol_ids),'duplicate member IDs')
    index=json.loads((output/'metadata/symbol-index.json').read_text(encoding='utf-8'))
    check({s['id'] for s in index['symbols']}==set(symbol_ids),'symbol index missing/extra IDs')
    counts['symbol_ids']=len(symbol_ids)
    ragids=set();rag_covered={r:bytearray(len(ls)) for r,ls in sources.items()}
    for p in sorted((output/'offline-studio').glob('reference-*.jsonl')):
        for line in p.read_text(encoding='utf-8').splitlines():
            rec=json.loads(line);r=rec['source_path'];a,b=rec['source_start_line'],rec['source_end_line']
            bad=rec['text'].count('\ufffd');expected_bad[str(p.relative_to(output)).replace('\\','/')]+=bad
            expected_bad['offline-studio/'+('A3_LD_Generated_Output_Optional.md' if r.startswith('Data/') else 'A3_LD_Code_Ref_OfflineStudio.md')]+=bad
            check(rec['source_commit']==head and rec['source_sha256']==hashes[r],r+' RAG provenance mismatch')
            check(1<=a<=b<=max(1,len(sources[r])),r+' RAG range mismatch')
            check(rec['id'] not in ragids,'duplicate RAG ID: '+rec['id']);ragids.add(rec['id'])
            for n,value in re.findall(r'^L(\d+) \| (.*) ⟦EOL⟧$',rec['text'],re.M):
                n=int(n);check(a<=n<=b and value==sources[r][n-1],r+' RAG source line mismatch '+str(n));counts['rag_source_lines']+=1;rag_covered[r][n-1]=1
            counts['rag_records']+=1
    check(counts['rag_records']==manifest['coverage']['ragRecords'],'RAG coverage mismatch')
    for item in inventory:
        if item['annotation']:
            check(all(rag_covered[item['path']]),item['path']+' RAG original source coverage gap')
            counts['rag_unique_annotated_source_lines']+=sum(rag_covered[item['path']])
    source_url=re.compile(r'https://github\.com/kjuws10-rgb/A3Drilling/blob/([^/\s)"<>]+)/([^\s)"<>#]+)(?:#L(\d+)-L(\d+))?')
    files=list(output.rglob('*'));utf_errors=[]
    for p in files:
        if not p.is_file():continue
        check(p.stat().st_size<100_000_000,'Git large file threshold: '+str(p.relative_to(output)))
        if p.suffix not in ['.md','.html','.svg','.json','.jsonl','.txt','.py','.cs','.config','.csproj']:continue
        try:s=p.read_text(encoding='utf-8')
        except UnicodeError:errors.append('not UTF8: '+str(p.relative_to(output)));continue
        check(s.count('\ufffd')==expected_bad[str(p.relative_to(output)).replace('\\','/')],'introduced/untracked replacement character: '+str(p.relative_to(output)))
        if p.suffix=='.svg':
            try:ET.fromstring(s);counts['svg_files']+=1
            except ET.ParseError as e:errors.append(str(p.relative_to(output))+' invalid SVG '+str(e))
        if p.suffix not in ['.md','.html']:continue
        if p.suffix=='.md':
            # Links written inside source/code fences are evidence text, not documentation navigation.
            clean=[];fence=None
            for l in s.splitlines():
                match=re.match(r'^(`{3,})',l)
                if match:
                    if fence is None:fence=match[1]
                    elif len(match[1])>=len(fence):fence=None
                    continue
                if fence is None:clean.append(l)
            check(fence is None,str(p.relative_to(output))+' unclosed code fence')
            nav='\n'.join(clean);links=re.findall(r'!?\[[^\]]*\]\(([^)]+)\)',nav)
        else:
            nav=s;links=re.findall(r'(?:href|src)="([^"]+)"',s)
        for url in links:
            if url.startswith(('https:','http:','mailto:','#','data:')):continue
            rel=unquote(url.split('#')[0].split('?')[0]);target=(p.parent/rel).resolve()
            check(target.is_relative_to(output.resolve()),str(p.relative_to(output))+' escaping local link '+url)
            check(target.is_file(),str(p.relative_to(output))+' missing local link '+url);counts['local_links']+=1
        # Full combined RAG embeds manual text; those relative links were flattened to pinned online citations.
        for commit,rel,a,b in source_url.findall(nav):
            rel=unquote(rel);identity=(commit,rel,a,b)
            if identity in seen_links:continue
            seen_links.add(identity);check(commit==head,'source URL Commit mismatch '+commit)
            check(rel in sources,'source URL missing '+rel)
            if a:check(rel in sources and 1<=int(a)<=int(b)<=len(sources[rel]),'source URL range mismatch '+rel+':'+a+'-'+b)
    counts['unique_source_citations']=len(seen_links);counts['tracked_files']=len(tracked);counts['output_files']=sum(p.is_file() for p in files)
    counts['output_bytes']=sum(p.stat().st_size for p in files if p.is_file())
    check(not subprocess.check_output(['git','-C',str(source),'status','--porcelain']),'source dirty after validation')
    check(subprocess.check_output(['git','-C',str(source),'rev-parse','HEAD'],text=True).strip()==head,'source HEAD changed')
    for rel,value in hashes.items():check(sha(source/rel)==value,'source changed during validation: '+rel)
    source_unchanged=(not subprocess.check_output(['git','-C',str(source),'status','--porcelain']) and all(sha(source/r)==v for r,v in hashes.items()) and subprocess.check_output(['git','-C',str(source),'rev-parse','HEAD'],text=True).strip()==head)
    return {'schemaVersion':'a3-reference-validation/1','sourceCommit':head,'passed':not errors,'counts':dict(counts),'errors':errors,'sourceUnchanged':source_unchanged,'inheritedSourceEncodingFindings':inherited_bad,'equipmentBuild':'not run','equipmentExecution':'not run','scope':'Static provenance/coverage/navigation validation; not runtime behavior or model accuracy certification'}

if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('--source',type=Path,required=True);ap.add_argument('--output',type=Path,required=True);ap.add_argument('--report',type=Path,required=True);a=ap.parse_args()
    report=validate(a.source,a.output);a.report.parent.mkdir(parents=True,exist_ok=True);a.report.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({'passed':report['passed'],'counts':report['counts'],'errors':report['errors'][:30]},ensure_ascii=False));raise SystemExit(0 if report['passed'] else 1)
