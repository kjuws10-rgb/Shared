"""Validate A3 source-pinned reference coverage. Read-only toward original source."""
from pathlib import Path
import html
from urllib.parse import unquote,urlsplit
import argparse,collections,hashlib,json,re,subprocess,xml.etree.ElementTree as ET

VERSION='1.1.3'

# Independent validation snapshot: do not import the generator event whitelist.
# A missing new event is also surfaced from code-behind EventArgs method signatures.
VALIDATION_WPF_EVENTS = frozenset('Activated AutoGeneratingColumn Checked Click Closed Closing ContentRendered ContextMenuClosing ContextMenuOpening DataContextChanged Deactivated DragEnter DragLeave DragOver Drop DropDownClosed DropDownOpened Expanded GotFocus GotKeyboardFocus Indeterminate Initialized IsEnabledChanged IsVisibleChanged KeyDown KeyUp LayoutUpdated Loaded LoadingRow LostFocus LostKeyboardFocus LostMouseCapture MouseDoubleClick MouseDown MouseEnter MouseLeave MouseLeftButtonDown MouseLeftButtonUp MouseMove MouseRightButtonDown MouseRightButtonUp MouseUp MouseWheel PasswordChanged PreviewDragEnter PreviewDragLeave PreviewDragOver PreviewDrop PreviewKeyDown PreviewKeyUp PreviewMouseDoubleClick PreviewMouseDown PreviewMouseLeftButtonDown PreviewMouseLeftButtonUp PreviewMouseMove PreviewMouseRightButtonDown PreviewMouseRightButtonUp PreviewMouseUp PreviewMouseWheel PreviewTextInput PreviewTouchDown PreviewTouchMove PreviewTouchUp RequestBringIntoView ScrollChanged SelectedItemChanged SelectionChanged SizeChanged SourceInitialized SourceUpdated TargetUpdated TextChanged ToolTipClosing ToolTipOpening TouchDown TouchMove TouchUp Unchecked Unloaded ValueChanged'.split())
NON_EVENT_ATTRIBUTES = frozenset('Name Class Title Text Content Header Tag ToolTip Command CommandParameter DataContext TargetType Key Value Property Source Path ElementName Mode StringFormat'.split())

def expected_xaml_events(xml, codebehind_members=()):
    handler_names=set()
    for member in codebehind_members:
        parameters=member.get('parameters',[])
        if member.get('kind')=='MethodDeclaration' and len(parameters)==2 and re.search(r'EventArgs(?:<.*>)?\??$',str(parameters[1].get('type') or '')):
            handler_names.add(member.get('name'))
    expected=collections.Counter();candidates=[]
    for node in xml.iter():
        event_setter=node.tag.split('}')[-1]=='EventSetter'
        for name,value in node.attrib.items():
            local=name.split('}')[-1];event=local.split('.')[-1]
            if not re.fullmatch(r'[A-Za-z_]\w*',value) or (event_setter and local in {'Event','Handler'}):continue
            known=event in VALIDATION_WPF_EVENTS
            handler_shaped=value in handler_names and event not in NON_EVENT_ATTRIBUTES
            if known or handler_shaped:
                expected[(local,value)]+=1
                if handler_shaped and not known:candidates.append({'event':local,'handler':value,'basis':'matching code-behind EventArgs method; static candidate, not runtime binding proof'})
        if event_setter and 'Event' in node.attrib and 'Handler' in node.attrib:
            expected[(node.attrib['Event'],node.attrib['Handler'])]+=1
    return expected,candidates


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
    sources={};hashes={};symbol_ids=[];expected_bad=collections.Counter();inherited_bad=[];xaml_paths=[];cs_paths=[]
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
            cs_paths.append(rel)
            data=json.loads(model.read_text(encoding='utf-8'))
            check(data['sha256']==hashes[rel],rel+' metadata SHA mismatch')
            check(item['types']==len(data['types']) and item['members']==len(data['members']) and item['calls']==len(data['calls']),rel+' inventory/model count mismatch')
            declarations=[]
            for t in data['types']:
                check(1<=t['startLine']<=t['endLine']<=len(lines),rel+' type range invalid')
                declarations.append((t['id'],t['kind'],t['startLine'],t['endLine']))
            check(len(declarations)==len(set(declarations)),rel+' duplicate type source declaration')
            for m in data['members']:
                symbol_ids.append(m['id']);check(1<=m['startLine']<=m['endLine']<=len(lines),rel+' member range invalid')
            for collection in ['calls','operations']:
                for entry in data[collection]:check(1<=entry['startLine']<=entry['endLine']<=len(lines),rel+' '+collection+' range invalid')
            counts['csharp_files']+=1;counts['types']+=len(data['types']);counts['members']+=len(data['members']);counts['calls']+=len(data['calls'])
        if p.suffix.lower()=='.xaml':
            xaml_paths.append(rel);data=json.loads((output/'metadata/xaml'/Path(rel+'.json')).read_text(encoding='utf-8'))
            check(data['sha256']==hashes[rel] and data['sourceCommit']==head and data['sourcePath']==rel,rel+' XAML provenance mismatch')
            try:
                xml=ET.fromstring('\n'.join(lines));expected_names=collections.Counter(value for node in xml.iter() for name,value in node.attrib.items() if name in ['Name','{http://schemas.microsoft.com/winfx/2006/xaml}Name'])
                check(expected_names==collections.Counter(entry['name'] for entry in data['namedElements']),rel+' XAML named-element coverage mismatch')
                behind=output/'metadata/files'/Path(rel+'.cs.json')
                behind_members=json.loads(behind.read_text(encoding='utf-8')).get('members',[]) if behind.is_file() else []
                expected_events,candidates=expected_xaml_events(xml,behind_members)
                check(expected_events==collections.Counter((entry['event'],entry['handler']) for entry in data['events']),rel+' XAML event declaration coverage mismatch (independent XML/handler oracle)')
                counts['xaml_handler_candidates']+=len(candidates)
                expected_bindings=collections.Counter(value for node in xml.iter() for value in node.attrib.values() if re.search(r'\{(?:Binding|MultiBinding|PriorityBinding)\b',value))
                check(expected_bindings==collections.Counter(entry['expression'] for entry in data['bindings']),rel+' XAML Binding expression coverage mismatch')
            except ET.ParseError as e:errors.append(rel+' invalid XAML XML '+str(e))
            for collection in ['namedElements','events','bindings','codeBehindClasses']:
                for entry in data[collection]:
                    a,b=entry['startLine'],entry['endLine'];check(1<=a<=b<=len(lines),rel+' XAML '+collection+' range invalid')
                    value=entry.get('name') or entry.get('handler') or entry.get('expression')
                    check(value.replace('\r\n','\n').replace('\r','\n') in html.unescape('\n'.join(lines[a-1:b])),rel+' XAML '+collection+' source evidence mismatch')
                counts['xaml_'+collection]+=len(data[collection])
            counts['xaml_files']+=1
        if p.suffix.lower() in ['.csv','.bak']:
            check(item['kind']=='data_schema' and item['coverage']=='schema_only' and not item['annotation'],rel+' operational CSV must remain schema-only')
            private_ips=set(re.findall(r'(?<![\w.])(?:10\.(?:\d{1,3}\.){2}\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})(?![\w.])','\n'.join(lines)))
            for document in ['document','html']:
                body=(output/item[document]).read_text(encoding='utf-8')
                check(not any(value in body for value in private_ips),rel+' private endpoint copied to schema document')
            counts['schema_only_files']+=1
    check(len(set(symbol_ids))==len(symbol_ids),'duplicate member IDs')
    check(set(cs_paths)=={rel for rel in tracked if Path(rel).suffix.lower()=='.cs'},'C# tracked-file/model coverage mismatch')
    check({str(p.relative_to(output/'metadata/files')).replace('\\','/')[:-5] for p in (output/'metadata/files').rglob('*.cs.json')}==set(cs_paths),'missing/stale C# metadata files')
    check({str(p.relative_to(output/'metadata/xaml')).replace('\\','/')[:-5] for p in (output/'metadata/xaml').rglob('*.xaml.json')}==set(xaml_paths),'missing/stale XAML metadata files')
    for key,count in [('csharpFiles',counts['csharp_files']),('typeCount',counts['types']),('memberCount',counts['members']),('callSites',counts['calls']),('annotatedFiles',counts['annotated_files'])]:check(manifest['coverage'][key]==count,'manifest '+key+' mismatch')
    for category in ['files','namedElements','events','bindings']:
        check(manifest.get('xamlCoverage',{}).get(category,0)==counts['xaml_'+category],'manifest XAML '+category+' mismatch')
    index=json.loads((output/'metadata/symbol-index.json').read_text(encoding='utf-8'))
    check({s['id'] for s in index['symbols']}==set(symbol_ids),'symbol index missing/extra IDs')
    counts['symbol_ids']=len(symbol_ids)
    ragids=set();rag_covered={r:bytearray(len(ls)) for r,ls in sources.items()};rag_routes={'primary':collections.Counter(),'optional':collections.Counter()}
    for p in sorted((output/'offline-studio').glob('reference-*.jsonl')):
        for line in p.read_text(encoding='utf-8').splitlines():
            rec=json.loads(line);r=rec['source_path'];a,b=rec['source_start_line'],rec['source_end_line']
            rag_routes['optional' if r.startswith('Data/') else 'primary'][r]+=1
            bad=rec['text'].count('\ufffd');expected_bad[str(p.relative_to(output)).replace('\\','/')]+=bad
            expected_bad['offline-studio/'+('A3_LD_Generated_Output_Optional.md' if r.startswith('Data/') else 'A3_LD_Code_Ref_OfflineStudio.md')]+=bad
            check(rec['source_commit']==head and rec['source_sha256']==hashes[r],r+' RAG provenance mismatch')
            check(1<=a<=b<=max(1,len(sources[r])),r+' RAG range mismatch')
            check(rec['id'] not in ragids,'duplicate RAG ID: '+rec['id']);ragids.add(rec['id'])
            if Path(r).suffix.lower() in ['.csv','.bak']:
                check(rec['evidence_kind']=='schema_inventory' and not re.search(r'^L\d+ \| ',rec['text'],re.M),r+' operational CSV raw records in RAG')
            for n,value in re.findall(r'^L(\d+) \| (.*) ⟦EOL⟧$',rec['text'],re.M):
                n=int(n);check(a<=n<=b and value==sources[r][n-1],r+' RAG source line mismatch '+str(n));counts['rag_source_lines']+=1;rag_covered[r][n-1]=1
            counts['rag_records']+=1
    check(counts['rag_records']==manifest['coverage']['ragRecords'],'RAG coverage mismatch')
    for route,filename in [('primary','A3_LD_Code_Ref_OfflineStudio.md'),('optional','A3_LD_Generated_Output_Optional.md')]:
        body=(output/'offline-studio'/filename).read_text(encoding='utf-8')
        actual=collections.Counter(re.findall(r'^source_path: (.+)$',body,re.M))
        check(actual==rag_routes[route],route+' combined RAG source routing/count mismatch')
        counts['rag_'+route+'_records']=sum(actual.values())
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
                match=re.match(r'^ {0,3}(`{3,}|~{3,})(.*)$',l)
                if match:
                    if fence is None:fence=match[1]
                    elif match[1][0]==fence[0] and len(match[1])>=len(fence) and not match[2].strip():fence=None
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
    return {'schemaVersion':'a3-reference-validation/1','validatorVersion':VERSION,'sourceCommit':head,'passed':not errors,'counts':dict(counts),'errors':errors,'sourceUnchanged':source_unchanged,'inheritedSourceEncodingFindings':inherited_bad,'equipmentBuild':'not run','equipmentExecution':'not run','scope':'Static provenance/coverage/navigation validation; not runtime behavior or model accuracy certification'}

if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('--source',type=Path,required=True);ap.add_argument('--output',type=Path,required=True);ap.add_argument('--report',type=Path,required=True);a=ap.parse_args()
    report=validate(a.source,a.output);a.report.parent.mkdir(parents=True,exist_ok=True);a.report.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({'passed':report['passed'],'counts':report['counts'],'errors':report['errors'][:30]},ensure_ascii=False));raise SystemExit(0 if report['passed'] else 1)
