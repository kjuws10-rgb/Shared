"""Build repository-native, source-pinned A3 reference documents. Never writes to source.

The syntax/partial semantic model is supplied by SymbolExtractor. Human-reviewed
chapters are separate inputs. No LLM, equipment, vendor SDK or network is invoked.
"""
from __future__ import annotations
import argparse, collections, csv, hashlib, html, io, json, re, shutil, subprocess
from pathlib import Path
from urllib.parse import quote,unquote
from datetime import datetime, timezone

VERSION = '1.0.0'
REPO = 'https://github.com/kjuws10-rgb/A3Drilling'
CODE_EXT = {'.cs','.xaml','.ascript','.scan','.csproj','.sln','.config','.xml','.json'}
TEXT_EXT = CODE_EXT | {'.md','.txt','.gitignore','.gitattributes','.editorconfig','.props','.targets','.csv','.bak'}
EOL = ' ⟦EOL⟧'
STRUCTURAL = '구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다.'
CSS = '''body{margin:0;background:#f2f5fa;color:#213149;font:16px/1.65 system-ui,Segoe UI,sans-serif}header{background:#142d40;color:white;padding:24px}header a{color:#9ee5eb}main{max-width:1280px;margin:auto;padding:24px}a{color:#145c9a}h1{font-size:30px}h2{margin-top:38px;border-bottom:2px solid #d6e2ed;padding-bottom:8px}h3{margin-top:28px}table{width:100%;border-collapse:collapse;background:white;font-size:14px;margin:18px 0}th,td{border:1px solid #d7e2ec;padding:9px;text-align:left;vertical-align:top;overflow-wrap:anywhere}th{background:#eaf1f7}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#102638;color:#dcf3ef;padding:20px;border-radius:8px;font:13px/1.6 Consolas,monospace}code{background:#e6edf5;padding:2px 5px;border-radius:4px}pre code{background:none;padding:0}.note{border-left:4px solid #1d8a98;background:#e5f4f5;padding:14px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}.card{background:white;border:1px solid #d7e2ec;border-radius:10px;padding:18px}input,select{padding:12px;border:1px solid #b9cadb;border-radius:6px;font:inherit;max-width:95%}img{max-width:100%;background:white}details{background:white;border:1px solid #d7e2ec;border-radius:8px;margin:10px 0;padding:12px}summary{cursor:pointer;font-weight:bold}.small{font-size:13px;color:#617183}button{padding:10px 16px;border:0;background:#195f86;color:white;border-radius:6px;cursor:pointer}@media(max-width:650px){main{padding:12px}table{font-size:12px}th,td{padding:6px}h1{font-size:24px}}@media print{header,input,button{display:none}main{max-width:none}body{background:white}pre{color:black;background:#f2f4f7}}'''

def H(s): return html.escape(str(s), quote=True)
def J(x): return json.dumps(x, ensure_ascii=False, separators=(',',':'))
def key(s): return hashlib.sha256(s.encode()).hexdigest()[:20]
def read_text(p):
    b=p.read_bytes()
    for enc in ['utf-8-sig','utf-16','cp949']:
        try: return b.decode(enc),enc
        except (UnicodeError,LookupError): pass
    return b.decode('utf-8',errors='replace'),'unresolved'
def digest(p):
    h=hashlib.sha256()
    with p.open('rb') as f:
        for b in iter(lambda:f.read(1024*1024),b''):h.update(b)
    return h.hexdigest()
def put(p,s): p.parent.mkdir(parents=True,exist_ok=True);p.write_text(s,encoding='utf-8',newline='\n')
def normalize_document_whitespace(root):
    # Raw original source lines end in EOL markers, so this never removes original trailing spaces.
    changed=0
    for p in root.rglob('*'):
        if p.is_file() and p.suffix in {'.md','.html','.txt','.svg','.json','.jsonl'}:
            before=p.read_text(encoding='utf-8');after='\n'.join(line.rstrip(' \t') for line in before.splitlines()).rstrip('\n')+'\n'
            if before!=after:put(p,after);changed+=1
    return changed
def table(headers, rows):
    def cell(x):
        s=str(x).replace('|','&#124;').replace('\r','').replace('\n','<br>')
        return re.sub(r'\]\((?!https?://)([^)]+)\)',r']&#40;\1)',s)
    return '| '+' | '.join(map(cell,headers))+' |\n| '+' | '.join('---' for _ in headers)+' |\n'+''.join('| '+' | '.join(cell(x) for x in r)+' |\n' for r in rows)+'\n'
def inline(s):
    s=H(s)
    s=re.sub(r'!\[([^\]]*)\]\(([^)]+)\)',lambda m:f'<img alt="{m[1]}" src="{m[2]}">',s)
    s=re.sub(r'\[([^\]]+)\]\(([^)]+)\)',lambda m:f'<a href="{m[2]}">{m[1]}</a>',s)
    s=re.sub(r'`([^`]+)`',r'<code>\1</code>',s)
    s=re.sub(r'\*\*([^*]+)\*\*',r'<b>\1</b>',s)
    return s.replace('&lt;br&gt;','<br>').replace('&amp;#124;','|').replace('&amp;#40;','(')
def markdown(s):
    out=[];lines=s.splitlines();i=0
    while i<len(lines):
        line=lines[i]
        if line.startswith('```'):
            fence=re.match(r'`+',line)[0];lang=line[len(fence):];i+=1;body=[]
            while i<len(lines) and not lines[i].startswith(fence):body.append(lines[i]);i+=1
            out.append('<pre data-language="'+H(lang)+'"><code>'+H('\n'.join(body))+'</code></pre>')
        elif line.startswith('#'):
            m=re.match(r'^(#{1,6})\s+(.+)$',line)
            if m:
                location=re.search(r'· L(\d+)–',m[2]);anchor=' id="L'+location[1]+'"' if location else ''
                out.append(f'<h{len(m[1])}{anchor}>{inline(m[2])}</h{len(m[1])}>')
        elif line.startswith('|') and i+1<len(lines) and re.match(r'^\|\s*:?-',lines[i+1]):
            rows=[]
            while i<len(lines) and lines[i].startswith('|'):rows.append(lines[i]);i+=1
            header=[x.strip() for x in rows[0].strip('|').split('|')]
            out.append('<table><thead><tr>'+''.join('<th>'+inline(x)+'</th>' for x in header)+'</tr></thead><tbody>')
            for row in rows[2:]:out.append('<tr>'+''.join('<td>'+inline(x.strip())+'</td>' for x in row.strip('|').split('|'))+'</tr>')
            out.append('</tbody></table>');continue
        elif re.match(r'^\s*[-*]\s+',line):out.append('<p>• '+inline(re.sub(r'^\s*[-*]\s+','',line))+'</p>')
        elif line.startswith('!['):out.append('<p>'+inline(line)+'</p>')
        elif line.strip():out.append('<p>'+inline(line)+'</p>')
        i+=1
    return '\n'.join(out)
def page(title,body,home='../index.html'):
    return '<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+H(title)+'</title><style>'+CSS+'</style><header><b>A3 LD Code Ref</b> · <a href="'+H(home)+'">전체 목차</a> <button onclick="print()">인쇄</button></header><main>'+body+'</main></html>'
def src_url(commit,path,a=None,b=None):
    u=REPO+'/blob/'+commit+'/'+quote(path,safe='/')
    return u+(f'#L{a}-L{b or a}' if a else '')
def module(path):
    ps=path.split('/')
    if ps[0].startswith('Drilling.'):
        return '/'.join(ps[:2]) if len(ps)>2 else ps[0]
    return ps[0]
def purpose(path):
    if '/Review/' in path:return '리뷰 계획·측정·결과 해석 계층입니다. 물리 이동 좌표와 Vision 식별 패킷, 측정 저장의 역할을 별도로 확인합니다.'
    if '/Station/' in path:return '설비·가공·Stage 시퀀스와 단계 상태를 연결하는 계층입니다. 실제 호출 순서는 본문·상태 조건과 수동 해설장을 함께 확인합니다.'
    if '/Correction/' in path:return '보정 계산·설정·원본/적용값의 관계를 다루는 계층입니다. 값의 좌표계와 단위는 호출부의 근거를 따릅니다.'
    if '/Interface/' in path:return '외부 통신과 장치 인터페이스를 연결합니다. 요청 생성·전송·수신·장치 실행을 같은 의미로 합치지 않습니다.'
    if '/Motion/' in path:return '모션 인터페이스·제어 명령을 정의하거나 전달합니다. 문서 생성 과정에서는 축이나 장비를 움직이지 않았습니다.'
    if path.startswith('Drilling.UI/'):
        return 'WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.'
    if path.startswith('Drilling.File/'):
        return '정의·설정·레시피·결과·스크립트의 파일 입출력과 데이터 형식을 담당합니다. 저장 필드를 통신 송신 필드로 단정하지 않습니다.'
    if path.endswith('.ascript'):return 'Automation1 실행 프로그램입니다. 정적으로 명령을 읽었으며 스크립트 실행이나 장비 검증을 수행하지 않았습니다.'
    if path.endswith('.scan'):return '수동 패턴 조건 파일입니다. 실제 파싱·가공 호출과 값의 해석을 함께 확인합니다.'
    if path.startswith('Config/JHMI_'):return '화면/장비의 데이터 항목 정의입니다. 키·형식·표시와 실제 소비 코드의 연결을 확인합니다.'
    if path.startswith('Data/'):return '실행 중 생성·저장된 참고 산출물입니다. 코드·정의·실측/이력 데이터를 구분합니다.'
    return '프로그램의 시작·구성·공유 타입 또는 빌드 연결에 사용됩니다. 아래 실제 선언·참조와 원본 근거를 확인합니다.'

OP_KO={'IfStatement':'조건에 따라 분기합니다','ForStatement':'반복 범위를 순회합니다','ForEachStatement':'컬렉션 요소를 순회합니다','WhileStatement':'조건이 유지되는 동안 반복합니다','DoStatement':'본문 실행 후 반복 조건을 확인합니다','SwitchStatement':'값에 따라 분기합니다','SwitchExpression':'값별 결과식을 선택합니다','TryStatement':'예외 처리 범위를 시작합니다','CatchClause':'해당 범위의 예외를 처리합니다','FinallyClause':'정리 구간입니다','ReturnStatement':'호출자에게 결과 또는 제어를 반환합니다','ThrowStatement':'예외를 전달합니다','AwaitExpression':'비동기 완료를 기다립니다','LockStatement':'임계 구역에 진입합니다','InvocationExpression':'다른 함수/델리게이트를 호출합니다','ObjectCreationExpression':'객체를 생성합니다','SimpleAssignmentExpression':'오른쪽 값을 왼쪽 대상에 대입합니다','AddAssignmentExpression':'값을 더하거나 구독을 등록합니다','UsingStatement':'자원 사용 범위를 구성합니다','VariableDeclarator':'지역/멤버 값을 선언합니다'}
OP_KO.update({'if':'조건에 따라 분기합니다','else':'앞 조건이 거짓인 경로입니다','for':'초기화·조건·증감이 있는 반복입니다','foreach':'컬렉션 요소를 순회합니다','while':'조건을 먼저 확인하며 반복합니다','do':'본문 실행 후 반복 조건을 확인합니다','switch':'값에 따라 분기합니다','switch-expression':'값별 결과식을 선택합니다','case':'분기값/패턴의 구간입니다','try':'예외 처리 범위입니다','catch':'지정 예외를 처리합니다','finally':'종료 정리 구간입니다','return':'호출자에게 값 또는 제어를 반환합니다','throw':'예외를 발생/전달합니다','await':'비동기 완료를 기다립니다','lock':'공유 상태의 임계 구역에 진입합니다','assignment':'값을 대상에 대입합니다','compound-assignment-or-event-subscription':'복합 대입 또는 이벤트 구독/해지 표현입니다','using':'자원 사용과 정리 범위를 지정합니다','using-declaration':'정리할 자원을 선언합니다','local-declaration':'지역 변수를 선언합니다','variable-initializer':'변수의 초기값을 지정합니다','yield':'열거값/종료를 전달합니다','break':'해당 반복/분기 구간을 종료합니다','continue':'다음 반복으로 진행합니다','goto':'지정된 레이블로 제어를 옮깁니다','conditional-expression':'조건에 따라 결과식을 선택합니다','checked':'오버플로 검사 문맥입니다','unsafe':'포인터 등 unsafe 구문 범위입니다','call':'함수·델리게이트 또는 객체 생성자를 호출합니다'})
def op_note(op):
    k=op.get('kind','');desc=OP_KO.get(k)
    if not desc:
        desc='대입/값 갱신입니다' if 'Assignment' in k else '실제 구문 연산입니다'
    text=str(op.get('text') or op.get('detail') or '').replace('\n',' ')
    return f'{desc}: {text[:230]}' if text else desc+' ('+k+')'
def line_note(line,n,ops,member,kind):
    t=line.strip()
    if not t:return '빈 행: 코드 구역을 구분합니다.'
    if t.startswith(('//','/*','*','<!--')):return '원본 작성자의 주석/설명입니다. 새 해설과 원본 주석을 구분합니다.'
    at=ops.get(n,[])
    if at:return ' / '.join(dict.fromkeys(op_note(o) for o in at))[:540]
    if kind=='.xaml':
        if t.startswith('</'):return 'XAML 요소 범위를 닫습니다.'
        if 'Binding' in line:return '바인딩 표현입니다. DataContext/속성 변경 알림과 연결을 확인합니다: '+t[:180]
        if re.search(r'\b(Click|SelectionChanged|Loaded|Checked|TextChanged)=',line):return '이벤트 연결 선언입니다. 동일 화면의 코드 비하인드 핸들러를 확인합니다: '+t[:180]
        return 'XAML UI 구조·속성·리소스 선언입니다: '+t[:180]
    if kind=='.ascript':
        cmd=re.split(r'[\s(]',t)[0]
        return f'AeroScript 명령/제어식 `{cmd}`. 단위·축·인코더·레이저 영향은 호출/설정 근거와 함께 확인합니다.'
    if kind=='.scan':return '수동 패턴 설정 행입니다. 키/값의 해석은 CManualScanFile 소비 경로를 확인합니다.'
    if t.startswith('using '):return '네임스페이스 또는 자원 사용 선언입니다: '+t[:160]
    if t.startswith('namespace '):return '타입 이름의 논리적 범위를 선언합니다: '+t[:160]
    if t.startswith('#'):return '전처리/영역 지시문입니다. 활성 빌드 조건을 확인합니다: '+t[:160]
    if t in ['{','}','};']:return '구문 블록 경계입니다'+(' · 소속 '+member.get('name','') if member else '')+'.'
    if member and n<=member.get('identifierEndLine',member.get('startLine',0))+2:return '선언·서명/매개변수·접근 조건입니다 · '+str(member.get('signature') or member.get('name',''))[:210]
    if re.search(r'\b(class|struct|record|interface|enum)\b',t):return '타입의 구조/상속 선언입니다: '+t[:200]
    return '위 선언/연산에 이어지는 원문입니다'+(' · 소속 '+str(member.get('name','')) if member else '')+'. 문맥은 아래 원문 줄과 해당 멤버 해설을 함께 읽습니다.'

def svg_graph(title,center,left,right,caption):
    left=left[:8];right=right[:8];height=max(330,145+max(len(left),len(right),1)*76);mid=height/2
    out=[f'<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="{height}" viewBox="0 0 1100 {height}" role="img" aria-label="{H(title)}"><defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="#397187"/></marker></defs><rect width="1100" height="{height}" fill="#f5f8fc"/><text x="24" y="30" font-family="Segoe UI,sans-serif" font-size="20" fill="#17364b">{H(title)}</text>']
    def box(x,y,w,label,color='#e7f1f6'):
        out.append(f'<rect x="{x}" y="{y}" width="{w}" height="55" rx="9" fill="{color}" stroke="#8ba8ba"/>')
        label=str(label);chunks=[label[i:i+36] for i in range(0,min(len(label),72),36)] or ['']
        for j,c in enumerate(chunks):out.append(f'<text x="{x+10}" y="{y+22+j*17}" font-family="Segoe UI,sans-serif" font-size="12" fill="#17364b">{H(c)}</text>')
    box(388,mid-28,324,center,'#cdebe8')
    for vals,x in [(left,20),(right,752)]:
        for i,l in enumerate(vals):
            y=80+i*76;box(x,y,328,l)
            a,b=(348,388) if x==20 else (712,752);ay=y+27 if x==20 else mid;by=mid if x==20 else y+27
            out.append(f'<path d="M{a} {ay}C{(a+b)/2} {ay},{(a+b)/2} {by},{b} {by}" fill="none" stroke="#397187" marker-end="url(#a)"/>')
    out.append(f'<text x="24" y="{height-16}" font-family="Segoe UI,sans-serif" font-size="12" fill="#526a7c">{H(caption[:150])}</text></svg>');return ''.join(out)

class Builder:
    def __init__(self,source,out,model,manual):
        self.source=source.resolve();self.out=out.resolve();self.manual=manual
        if self.out==self.source or self.source in self.out.parents:raise ValueError('output must be outside source')
        self.commit=subprocess.check_output(['git','-C',str(source),'rev-parse','HEAD'],text=True).strip()
        self.tracked=subprocess.check_output(['git','-C',str(source),'ls-files','-z']).decode().split('\0')[:-1]
        self.model=json.loads(model.read_text(encoding='utf-8-sig'));assert self.model['sourceCommit']==self.commit
        for rel in self.tracked:
            p=self.source/rel
            if p.is_symlink() or not p.resolve().is_relative_to(self.source):raise ValueError('unsafe tracked path: '+rel)
            if any(parent.is_symlink() for parent in p.parents if parent.is_relative_to(self.source)):raise ValueError('linked source parent: '+rel)
        self.cs={f['path'].replace('\\','/'):f for f in self.model['files']};self.members={};self.member_file={};self.type_file={}
        self.calls_by_member=collections.defaultdict(list);self.ops_by_member=collections.defaultdict(list)
        self.incoming=collections.defaultdict(list);self.file_in=collections.Counter();self.file_out=collections.Counter();self.catalog=[];self.rag=[];self.coverage=[]
        for path,f in self.cs.items():
            for m in f.get('members',[]):
                if m['id'] in self.members:raise ValueError('duplicate member ID: '+m['id'])
                self.members[m['id']]=m;self.member_file[m['id']]=path
            for t in f.get('types',[]):self.type_file[t['id']]=path
            for c in f.get('calls',[]):self.calls_by_member[(path,c.get('callerMemberId'))].append(c)
            for o in f.get('operations',[]):self.ops_by_member[(path,o.get('memberId'))].append(o)
        for path,f in self.cs.items():
            for c in f.get('calls',[]):
                target=c.get('targetSymbolId');tp=c.get('targetSourcePath')
                if target:self.incoming[target].append((path,c))
                if tp and tp!=path and c.get('resolution')=='resolved':self.file_out[(path,tp)]+=1;self.file_in[(tp,path)]+=1
    def reference(self,path,a,b):return f'[{path}:{a}–{b}]({src_url(self.commit,path,a,b)})'
    def section_member(self,path,m,f,lines):
        mid=key(m['id']);a=m['startLine'];b=m['endLine'];calls=self.calls_by_member[(path,m['id'])];ops=self.ops_by_member[(path,m['id'])]
        heading=f'### {m.get("kind", "Member")} `{m.get("name", "")}` · L{a}–{b}\n\n'
        s=heading+self.reference(path,a,b)+'\n\n'+table(['항목','실제 추출 값'],[['서명',m.get('signature','')],['접근/수식자',str(m.get('accessibility',''))+' / '+', '.join(m.get('modifiers',[]))],['반환/값 타입',m.get('returnType') or '타입 정보 없음'],['소속 타입',m.get('containingTypeId') or '(최상위)']])
        if m.get('xmlDoc'):s+='원본 XML 주석:\n\n````xml\n'+m['xmlDoc']+'\n````\n\n'
        pars=m.get('parameters',[])
        if pars:s+='입력 계약:\n\n'+table(['이름','타입','전달','선택/기본값'],[[p.get('name'),p.get('type'),p.get('refKind'),str(p.get('optional'))+' / '+str(p.get('defaultValue') or '')] for p in pars])
        caller=self.incoming.get(m['id'],[])
        if caller:s+='정적 호출자로 확인된 위치:\n\n'+table(['호출 파일/행','호출 표현식','런타임 분기 가능'],[[self.reference(p,c['startLine'],c['endLine']),c.get('expression') or c.get('text'),c.get('runtimeDispatchPotential')] for p,c in caller])
        else:s+='현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.\n\n'
        if calls:s+='호출하는 대상과 해석 범위:\n\n'+table(['원본 행','표현식','분석 상태','대상/소스 위치'],[[str(c['startLine']),c.get('expression') or c.get('text'),str(c.get('resolution'))+(' · 동적 구현 선택 가능' if c.get('runtimeDispatchPotential') else ''),str(c.get('targetSignature') or c.get('targetSymbolId') or c.get('candidateReason') or '미해결')+((' · '+str(c.get('targetSourcePath'))+':'+str(c.get('targetSourceLine'))) if c.get('targetSourcePath') else '')] for c in calls])
        if ops:s+='본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):\n\n'+table(['원본 행','종류','주석 해설'],[[str(o['startLine']),o.get('kind'),op_note(o)] for o in sorted(ops,key=lambda x:(x['startLine'],x.get('endLine',0)))])
        controls=[o for o in ops if o.get('kind') in {'if','else','for','foreach','while','do','switch','switch-expression','try','catch','finally','lock','using'}]
        if controls:
            s+='제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):\n\n```mermaid\nflowchart TD\n M["'+m.get('name','member').replace('"',"'")+'"]\n'
            for i,o in enumerate(controls):
                parents=[(j,p) for j,p in enumerate(controls) if j!=i and p['startLine']<=o['startLine'] and p['endLine']>=o['endLine'] and (p['startLine'],p['endLine'])!=(o['startLine'],o['endLine'])];parent=min(parents,key=lambda x:x[1]['endLine']-x[1]['startLine'])[0] if parents else None
                s+=f' N{i}["L{o["startLine"]} {o.get("kind", "")}"]\n '+('M' if parent is None else f'N{parent}')+f' -->|포함| N{i}\n'
            s+='```\n\n'
        s+='변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.\n\n'
        return s
    def add_rag(self,path,sha,a,b,title,text,kind='syntax_reference'):
        self.rag.append({'id':key(path+'\0'+str(a)+'\0'+str(b)+'\0'+title),'source_repository':REPO+'.git','source_branch':'master','source_commit':self.commit,'source_path':path,'source_sha256':sha,'source_start_line':a,'source_end_line':b,'evidence_kind':kind,'title':title,'text':text})
    def annotated(self,path,lines,f):
        ops=collections.defaultdict(list);starts={};active=[]
        if f:
            for o in f.get('operations',[]):ops[o['startLine']].append(o)
            for m in f.get('members',[]):starts.setdefault(m['startLine'],[]).append(m)
        result=[f'A3 LD Code Ref · 문서용 전체 주석 해설본\n원본: {path}\nCommit: {self.commit}\n각 L 행은 원본 행이며 // 해설은 구문 기반 보조 설명입니다. 행 끝의 {EOL.strip()} 표시는 원문에 없는 경계표시로, 이를 제거하면 끝 공백까지 원문 행을 복원할 수 있습니다. 이 사본을 빌드·장비 실행에 사용하지 마세요.\n']
        for n,line in enumerate(lines,1):
            active=[m for m in active if m['endLine']>=n];active+=starts.get(n,[]);m=min(active,key=lambda x:x['endLine']-x['startLine']) if active else None
            if line.strip():result.append(f'// 해설 L{n}: '+line_note(line,n,ops,m,Path(path).suffix.lower()))
            result.append(f'L{n:06d} | '+line+EOL)
        target=self.out/'annotated'/Path(path+'.annotated.txt');put(target,'\n'.join(result)+'\n');return target
    def build_file(self,path):
        original=self.source/path;size=original.stat().st_size;sha=digest(original);ext=original.suffix.lower();f=self.cs.get(path);fid=key(path);binary=ext not in TEXT_EXT and original.name not in {'.gitignore','.gitattributes','.editorconfig'};data_csv=ext in ['.csv','.bak']
        if binary:kind='binary_reference';lines=[];encoding=None
        else:
            text,encoding=read_text(original);lines=text.splitlines();kind='code' if ext in CODE_EXT else 'data_schema' if data_csv else 'build_or_reference'
        if f:assert f['sha256']==sha
        docpath='files/'+path+'.md';pagepath='pages/'+fid+'.html';svgpath='diagrams/files/'+fid+'.svg'
        inbound=[(x,n) for (p,x),n in self.file_in.items() if p==path];outbound=[(x,n) for (p,x),n in self.file_out.items() if p==path]
        left=[str(n)+' · '+p for p,n in sorted(inbound,key=lambda x:-x[1])];right=[str(n)+' · '+p for p,n in sorted(outbound,key=lambda x:-x[1])]
        if not left:left=['정적 호출자 미해결/진입점 별도 확인']
        if not right:right=[str(len(f.get('types',[])))+' 타입 · '+str(len(f.get('members',[])))+' 멤버' if f else ('SDK 참조 · 본문 분석 없음' if binary else '정의/데이터 소비 코드 별도 확인')]
        put(self.out/svgpath,svg_graph(path,original.name,left,right,'부분 컴파일에서 소스로 연결된 파일만 표시. 그림은 최대 양쪽 8개; 전체 관계는 tables/JSON에 보존.'))
        s='# '+path+'\n\n'+table(['항목','내용'],[['원본 저장소',REPO+'.git'],['원본 Commit',self.commit],['원본 SHA256',sha],['파일 분류',kind],['원본 크기/행',f'{size:,} bytes / {len(lines):,} physical lines'],['인코딩',encoding or 'binary'],['검토 범위',STRUCTURAL],['원본 링크',f'[고정 Commit 원본]({src_url(self.commit,path)})']])
        s+='## 파일의 역할과 읽는 순서\n\n'+purpose(path)+'\n\n'
        diagramrel=Path('..')/Path('../'*len(Path(path).parts[0:-1]))/svgpath
        s+='![파일 관계도]('+str(diagramrel).replace('\\','/')+')\n\n'
        if binary:s+='## 바이너리 참조 범위\n\nSDK DLL은 파일명·Git 경로·크기·해시만 기록합니다. 본문을 텍스트 색인·실행·역컴파일하지 않았고 API 계약은 호출하는 C# 래퍼나 공급사 문서에서 확인해야 합니다. DLL이 있다는 사실과 드라이버 연결·동작 성공은 별개입니다.\n\n'
        elif f:
            s+='## 네임스페이스·타입·상속\n\n'+table(['타입','구분','원본 범위','선언/상속'],[[t.get('name'),t.get('kind'),str(t.get('startLine'))+'–'+str(t.get('endLine')),t.get('declaration') or str(t.get('baseSyntax') or '')] for t in f.get('types',[])])
            s+='## 멤버 빠른 목록\n\n'+table(['이름','종류','범위','서명'],[[m.get('name'),m.get('kind'),f'L{m["startLine"]}–{m["endLine"]}',m.get('signature')] for m in f.get('members',[])])
            s+='## 멤버별 상세 계약·호출·처리 해설\n\n'
            covered=set()
            for m in f.get('members',[]):
                sect=self.section_member(path,m,f,lines);s+=sect
                a,b=m['startLine'],m['endLine'];signature=str(m.get('signature') or m.get('name'));params=', '.join(str(p.get('type'))+' '+str(p.get('name')) for p in m.get('parameters',[]));membercalls=self.calls_by_member[(path,m['id'])]
                for start in range(a,b+1,36):
                    end=min(b,start+35);raw='\n'.join(f'L{i} | {lines[i-1]}'+EOL for i in range(start,end+1) if i<=len(lines));calltext='; '.join('L'+str(c['startLine'])+' '+str(c.get('targetSignature') or c.get('expression') or '')+' ['+str(c.get('resolution'))+']' for c in membercalls if start<=c['startLine']<=end)
                    covered.update(range(start,end+1))
                    self.add_rag(path,sha,start,end,m.get('name','member'),f'종류: {m.get("kind")}\n서명: {signature}\n입력: {params}\n반환: {m.get("returnType")}\n호출: {calltext[:1800]}\n증거: 구문/부분컴파일 바인딩. 아래 원문이 최우선이며 런타임 단정 금지.\n\n```csharp\n{raw}\n```')
            missing=[i for i in range(1,len(lines)+1) if i not in covered]
            while missing:
                start=missing[0];chunk=[]
                while missing and missing[0]<=start+35:
                    chunk.append(missing.pop(0))
                end=chunk[-1];raw='\n'.join(f'L{i} | {lines[i-1]}'+EOL for i in range(start,end+1))
                self.add_rag(path,sha,start,end,Path(path).name+' · 타입/선언/비활성 원문',raw,'source_structure')
            disabled=f.get('disabledRegions',[])
            if disabled:s+='## 비활성 전처리 범위\n\n현재 분석 조건에서 비활성인 영역입니다. 원문 주석본에는 해당 텍스트도 보존했습니다.\n\n'+table(['시작','끝','구분'],[[d.get('startLine'),d.get('endLine'),d.get('kind') or 'disabled'] for d in disabled])
            s+='## 구문·바인딩 한계\n\n전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.\n\n'
            put(self.out/'metadata/files'/Path(path+'.json'),J(f)+'\n')
        elif ext=='.xaml':
            names=re.findall(r'\b(?:x:Name|Name)="([^"]+)"',text);events=re.findall(r'\b(Click|Loaded|Unloaded|SelectionChanged|Checked|Unchecked|TextChanged|MouseDown|MouseMove|MouseUp|KeyDown|PreviewKeyDown)="([^"]+)"',text);bindings=re.findall(r'\{Binding\s+([^}\r\n]+)',text)
            s+='## 화면 구성과 코드 비하인드 연결\n\n'+table(['항목','추출 값'],[['코드 비하인드 후보',path+'.cs'],['이름 있는 요소',', '.join(names)],['이벤트 개수',len(events)],['Binding 표현 개수',len(bindings)]])
            s+=table(['이벤트','핸들러 이름','해석'],[[a,b,'코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요'] for a,b in events]);s+=table(['Binding 표현'],[[x] for x in bindings]);self.add_rag(path,sha,1,max(1,len(lines)),Path(path).name,purpose(path)+'\n이벤트: '+str(events)+'\nBinding: '+str(bindings),'xaml_structure')
            for start in range(1,len(lines)+1,36):
                end=min(len(lines),start+35);raw='\n'.join(f'L{i} | {lines[i-1]}'+EOL for i in range(start,end+1));self.add_rag(path,sha,start,end,Path(path).name+' · XAML 원문',raw,'xaml_source')
        elif ext in ['.ascript','.scan']:
            commands=collections.Counter(re.split(r'[\s(]',x.strip())[0] for x in lines if x.strip() and not x.strip().startswith(('//',"'",'#')))
            s+='## 명령·패턴 구성\n\n'+table(['명령/행 첫 토큰','등장 수'],commands.most_common())+'원본 전체 행은 아래 주석 해설본에서 확인합니다. 생성된 가공 스크립트와 원본 생성기 코드는 다른 역할입니다. 이 문서만으로 속도/단위/축/레이저 안전 조건을 확정하지 않습니다.\n\n'
            for start in range(1,len(lines)+1,48):
                end=min(len(lines),start+47);raw='\n'.join(f'L{i} | {lines[i-1]}'+EOL for i in range(start,end+1));self.add_rag(path,sha,start,end,Path(path).name,raw,'script_source')
        elif data_csv:
            try: rows=list(csv.reader(io.StringIO(text)))
            except csv.Error:rows=[]
            first=rows[0] if rows else []
            known_header=bool(first) and any(v.strip().upper() in {'NAME','TYPE','VALUE','TAB','TIME','TIMESTAMP','DATE','POINT_ID','SHOT_NO','HEAD_NO','CELL_NO','DESIGN_X','ID','KEY','POSITION','ITEM','CATEGORY'} for v in first)
            header=[v if known_header and re.fullmatch(r'[\w .()/\-]+',v or '') and len(v)<100 else '[데이터 값 미복제/소비 파서로 형식 확인]' for v in first]
            s+='## 저장/설정 스키마 참고\n\n실행 이력·측정 레코드는 문서에 전체 복제하지 않습니다. 행 수와 구조, 소비 코드 연결을 검토하기 위한 참고입니다. 첫 행이 실제 헤더인지는 해당 CSV 파서와 대조해야 합니다.\n\n'+table(['항목','값'],[['레코드 수',len(rows)],['첫 행 필드 개수',len(first)],['첫 행 컬럼 후보',' / '.join(header)]])
            if path.startswith('Config/JHMI_') and rows:
                s+='정의 항목 목록(인증 관련 값은 포함하지 않음):\n\n'+table(['CSV 행','정의 키/형식'],[[i,' / '.join(str(v) for v in row[:4])] for i,row in enumerate(rows[1:],2) if not any(re.search(r'(?i)password|credential|secret|api.?key',v) for v in row)])
            self.add_rag(path,sha,1,max(1,len(lines)),Path(path).name,purpose(path)+'\nCSV 행수 '+str(len(rows))+' / 컬럼 후보 '+str(header)+'\n실측/이력 값은 미복제. 소비 파서로 확정 필요.','schema_inventory')
        else:
            s+='## 설정/빌드 연결\n\n'+purpose(path)+'\n\n'
            for start in range(1,len(lines)+1,36):
                end=min(len(lines),start+35);raw='\n'.join(f'L{i} | {lines[i-1]}'+EOL for i in range(start,end+1));self.add_rag(path,sha,start,end,Path(path).name,raw,'configuration_source')
        if not binary and not data_csv:
            ann=self.annotated(path,lines,f);annrel=Path('..')/Path('../'*len(Path(path).parts[0:-1]))/ann.relative_to(self.out)
            s+='## 원문 전체 주석 해설본\n\n[원본 모든 행과 행별 해설 보기]('+str(annrel).replace('\\','/')+')\n\n원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.\n\n'
        s+='## 수정·재검증 체크\n\n- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.\n- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.\n- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.\n- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.\n'
        put(self.out/docpath,s)
        depth=len(Path(path).parts)-1
        body=markdown(s.replace(str(diagramrel).replace('\\','/'),'../'+svgpath))
        if not binary and not data_csv:body=body.replace(str(annrel).replace('\\','/'),'../annotated/'+quote(path+'.annotated.txt',safe='/'))
        body='<p><a href="../'+quote(docpath,safe='/')+'">Markdown 원문</a> · <a href="'+src_url(self.commit,path)+'">Git 원본</a></p>'+body
        put(self.out/pagepath,page(path,body))
        item={'id':fid,'path':path,'module':module(path),'kind':kind,'sha256':sha,'bytes':size,'lines':len(lines),'types':len(f.get('types',[])) if f else 0,'members':len(f.get('members',[])) if f else 0,'calls':len(f.get('calls',[])) if f else 0,'document':docpath,'html':pagepath,'diagram':svgpath,'annotation':('annotated/'+path+'.annotated.txt') if not binary and not data_csv else None,'coverage':'structural_full_source' if kind=='code' else 'schema_only' if data_csv else 'binary_metadata_only' if binary else 'reference_source'}
        item['search']=purpose(path)+' '+(' '.join(m.get('name','') for m in f.get('members',[])) if f else '')+' '+('리뷰 측정 검사 좌표 Review Vision' if 'review' in path.lower() else '비전 통신 Vision' if 'vision' in path.lower() else '레시피 Recipe' if 'recipe' in path.lower() else '보정 오프셋 Offset' if 'offset' in path.lower() or 'correction' in path.lower() else '')
        self.catalog.append(item);self.coverage.append(item)
        return len(s)
    def run(self):
        self.out.mkdir(parents=True,exist_ok=True);total=0
        for i,path in enumerate(self.tracked,1):
            total+=self.build_file(path)
            if i%25==0:print(f'Generated {i}/{len(self.tracked)} file references',flush=True)
        self.export_root(total)
        normalize_document_whitespace(self.out)
    def export_root(self,total):
        put(self.out/'metadata/file-inventory.json',J(self.catalog)+'\n')
        flat={'schemaVersion':'a3-symbol-index/1','sourceCommit':self.commit,'symbols':[{'id':m['id'],'name':m.get('name'),'kind':m.get('kind'),'sourcePath':self.member_file[mid],'startLine':m['startLine'],'endLine':m['endLine'],'signature':m.get('signature')} for mid,m in self.members.items()]}
        put(self.out/'metadata/symbol-index.json',J(flat)+'\n')
        edges=[{'from':p,'to':t,'callSites':n,'basis':'resolved source symbol in partial compilation; not runtime proof'} for (p,t),n in self.file_out.items()]
        put(self.out/'metadata/dependencies.json',J({'sourceCommit':self.commit,'edges':edges})+'\n')
        put(self.out/'diagrams/architecture.svg',svg_graph('A3 LD 전체 코드 계층','CApp / CRootView / CManager',['WPF 화면 · 사용자 입력','JHMI 정의 · Recipe CSV','Setting · Product'],['Station · Sequence','Review · Correction','Interface · Motion','File · Script / Result'],'계층 안내 그림. 정확한 호출과 데이터는 각 파일 및 별도 정적 추적 해설장 참조.'))
        catalog='# 전체 파일 목차\n\n'+f'기준 Commit `{self.commit}` · Git 추적 {len(self.tracked)}개를 빠짐없이 분류했습니다.\n\n'+table(['파일','분류','줄','타입/멤버','문서'],[[p['path'],p['kind'],p['lines'],str(p['types'])+'/'+str(p['members']),f'[상세]({quote(p["document"],safe="/")})'] for p in self.catalog])
        put(self.out/'FILE_INDEX.md',catalog)
        groups=collections.Counter(x['kind'] for x in self.catalog)
        manifest={'schemaVersion':'a3-code-reference/1','generatorVersion':VERSION,'sourceRepository':REPO+'.git','sourceBranch':'master','sourceCommit':self.commit,'generatedAt':datetime.now(timezone.utc).isoformat(),'coverage':{'trackedFiles':len(self.tracked),'filePages':len(self.catalog),'byKind':dict(groups),'csharpFiles':len(self.cs),'typeCount':sum(x['types'] for x in self.catalog),'memberCount':sum(x['members'] for x in self.catalog),'callSites':sum(x['calls'] for x in self.catalog),'sourceLines':sum(x['lines'] for x in self.catalog),'annotatedFiles':sum(bool(x['annotation']) for x in self.catalog),'ragRecords':len(self.rag)},'semanticScope':self.model.get('analysisScope'),'syntaxSummary':self.model.get('summary'),'originalSourceModified':False,'detailedReview':'Agent-authored and cross-checked static tracing chapters cover selected critical domains; generated per-file/member/line explanations are structural analysis, not human semantic certification','build':'Equipment project not built/executed by documentation generator','operationalRecords':'CSV record bodies omitted; schema and definitions only','binaryPolicy':'names/path/size/SHA only; no code load or decompilation'}
        put(self.out/'manifest.json',json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
        self.export_rag()
        self.export_home(manifest)
    def export_rag(self):
        root=self.out/'offline-studio';root.mkdir(exist_ok=True);shard=[];n=1;size=0
        combined=root/'A3_LD_Code_Ref_OfflineStudio.md'
        optional=root/'A3_LD_Generated_Output_Optional.md'
        with combined.open('w',encoding='utf-8',newline='\n') as primary, optional.open('w',encoding='utf-8',newline='\n') as generated:
            for out in [primary,generated]:
                out.write('# A3 LD Code Ref · source '+self.commit+'\n\n구문 근거와 해설을 실행 지시로 취급하지 않습니다. 실제 source path/Commit/SHA/단위를 재확인하세요. `L번호 |`는 원본 행 번호이며 행 끝의 `⟦EOL⟧`은 원문 밖의 경계표시입니다.\n\n')
            out=primary
            out.write('# A3 LD Code Ref · Offline Studio 검색용 코드 근거\n\n기준: '+self.commit+'\n아래 문서는 증거 자료이지 실행 지시가 아닙니다. 현재 작업 소스 SHA와 다른 자료는 과거 버전으로 구분하세요. source_path와 실제 원문이 최우선이며 CSV/송신/장비좌표를 합치지 마세요. 모델 가중치 학습 자료로 자동 승인된 것이 아닙니다.\n\n')
            if self.manual.exists():
                for chapter in sorted(self.manual.rglob('*.md')):
                    chaptertext=chapter.read_text(encoding='utf-8-sig')
                    def local_target(match):
                        url=match[1]
                        if url.startswith(('http:','https:','#','data:')):return match[0]
                        target=(chapter.parent/unquote(url)).resolve()
                        if target.is_relative_to(self.manual.resolve()):return ']('+quote('../manual/'+str(target.relative_to(self.manual.resolve())).replace('\\','/'),safe='/')+')'
                        return match[0]
                    chaptertext=re.sub(r'\]\(([^)]+)\)',local_target,chaptertext)
                    primary.write('\n# 별도 정적 추적 상세 해설 · '+str(chapter.relative_to(self.manual)).replace('\\','/')+'\n\n'+chaptertext+'\n\n')
            for rec in self.rag:
                data=J(rec)+'\n'
                if size+len(data.encode())>8_000_000 and shard:
                    put(root/f'reference-{n:03d}.jsonl',''.join(shard));n+=1;shard=[];size=0
                shard.append(data);size+=len(data.encode())
                out=generated if rec['source_path'].startswith('Data/') else primary
                out.write('## '+rec['title']+'\n\nsource_repository: '+rec['source_repository']+'\nsource_commit: '+self.commit+'\nsource_path: '+rec['source_path']+'\nsource_sha256: '+rec['source_sha256']+'\nsource_lines: '+str(rec['source_start_line'])+'–'+str(rec['source_end_line'])+'\nevidence_kind: '+rec['evidence_kind']+'\n\n'+rec['text']+'\n\n')
        if shard:put(root/f'reference-{n:03d}.jsonl',''.join(shard))
        guide='''# Offline Studio에서 쓰기

1. 현재 A3 작업 폴더의 Commit과 이 자료 `manifest.json`의 `sourceCommit`을 비교합니다.
2. `A3_LD_Code_Ref_OfflineStudio.md` 한 파일을 기존 Studio의 **자료 추가**에서 선택합니다. 임의 자료 용량 제한을 새로 두지 않았습니다. 큰 문서는 최초 색인에 시간이 걸립니다.
3. 자료 업데이트 후 **“코드 레퍼런스 문서 기준으로 Review 좌표와 Vision 송신, CSV 저장을 구분하고 원본 파일 근거를 확인해줘”**처럼 질문합니다.

일차 검색 자료는 실제 소스·설정·수동 상세 해설입니다. 수십만 줄의 생성 스크립트가 코드 설명 검색을 압도하지 않도록 `A3_LD_Generated_Output_Optional.md`는 선택 자료로 분리했습니다. 실제 생성 명령을 분석할 때만 추가하세요. 자료를 삭제하거나 분량을 생략한 것이 아닙니다.

현재 0.5.1은 일반 코드 질문에서 소스를 먼저 검색하고, 문서라고 명시한 질문은 첨부 자료를 검색합니다. 자료를 추가한 것만으로 모든 코드 질문의 검색 정책이나 모델 가중치가 바뀌지는 않습니다. 이 초안은 Studio 프로그램을 수정하거나 기존 검증 역할지도를 자동 교체하지 않습니다.

각 자료에는 source path/Commit/SHA/원본 줄 범위/분석 근거 수준이 있습니다. 답변의 경로와 줄은 실제 작업 파일을 다시 읽어 검증해야 합니다. 코드 변경·새 Commit 뒤에는 갱신된 문서로 교체하고, 옛 자료를 현재 사실처럼 섞지 않습니다. `.jsonl`은 별도 RAG/검색 도구를 위한 구조화 데이터이며 현재 Studio가 직접 지원한다고 주장하지 않습니다.

바이너리는 본문을 제공하지 않습니다. 실행 이력 CSV는 실제 레코드 대신 스키마만 수록합니다. 자동 구문 해설을 장비 검증이나 사람의 전체 의미 검토로 확장하지 않습니다.
'''
        put(root/'README.md',guide)
    def export_home(self,manifest):
        manual_links=[]
        if self.manual.exists():
            for asset in self.manual.rglob('*'):
                if asset.is_file() and asset.suffix in ['.svg','.json']:
                    rel=asset.relative_to(self.manual);target=self.out/'manual'/rel;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(asset,target)
                    if asset.suffix=='.svg':
                        target=self.out/'manual-html'/rel;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(asset,target)
            for p in sorted(self.manual.rglob('*.md')):
                rel=p.relative_to(self.manual);target=self.out/'manual'/rel;put(target,p.read_text(encoding='utf-8-sig'));manual_links.append(('manual/'+str(rel).replace('\\','/'),p.read_text(encoding='utf-8-sig').splitlines()[0].lstrip('# ')))
                body=markdown(p.read_text(encoding='utf-8-sig'))
                body=re.sub(r'href="([^"#]+\.md)(#[^"]*)?"',lambda m:'href="'+m[1]+'.html'+(m[2] or '')+'"',body)
                prefix='../'*len(rel.parts)
                def offline_link(match):
                    original=unquote(match[2]);start=match[3] or ''
                    if original not in self.tracked:return match[0]
                    return match[0]+' <a class="small" href="'+prefix+'pages/'+key(original)+'.html">[오프라인 파일 해설]</a>'
                body=re.sub(r'(<a href="https://github\.com/kjuws10-rgb/A3Drilling/blob/'+self.commit+r'/([^"#]+)(?:#L(\d+)-L\d+)?">.*?</a>)',offline_link,body)
                put(self.out/'manual-html'/Path(str(rel)+'.html'),page(p.stem,body, '../'*len(rel.parts)+'index.html'))
        c=manifest['coverage'];readme=f'''# A3 LD Code Ref

현재 A3Drilling 전체 코드의 파일·타입·멤버·호출·데이터 흐름을 찾아 읽는 코드 레퍼런스 초안입니다.

- [오프라인 HTML 목차](index.html) · [전체 파일 목차](FILE_INDEX.md)
- [전체 구조 그림](diagrams/architecture.svg) · [Offline Studio 첨부 방법](offline-studio/README.md)
- [원본 저장소]({REPO}) · 기준 master Commit `{self.commit}`

|범위|수량|
|---|---:|
|Git 추적 파일/개별 문서|{c['trackedFiles']} / {c['filePages']}|
|C#|{c['csharpFiles']}|
|타입/멤버|{c['typeCount']} / {c['memberCount']}|
|호출 구문|{c['callSites']}|
|전체 행 주석 해설본|{c['annotatedFiles']}파일|
|RAG 근거 레코드|{c['ragRecords']}|

## 읽는 순서

1. 아래 상세 해설장으로 시작·설정·가공·리뷰·통신·보정의 연결을 봅니다.
2. 전체 파일 목차에서 실제 원본 경로를 선택합니다. 파일별 그림, 타입·멤버, 입력·반환, 호출자·호출 대상, 분기·예외·취소 구문을 확인합니다.
3. `annotated/`의 문서용 전체 주석 해설본을 읽습니다. 모든 원본 행을 보존하며 원본 저장소는 변경하지 않습니다.
4. 줄/Commit/SHA를 실제 작업 폴더와 비교합니다. 다른 버전의 자료는 과거 근거로 취급합니다.

## 상세 해설장

'''+''.join(f'- [{title}]({quote(path,safe="/")})\n' for path,title in manual_links)+'''
## 근거 수준과 범위

파일/멤버/행별 문서는 Roslyn 구문 및 부분 의미 분석으로 생성했습니다. 별도 정적 추적 상세 해설장은 `manual/`에 따로 있습니다. 모든 줄에 설명이 있다는 것과 모든 줄의 물리 의미를 사람이 확정했다는 것은 다릅니다. 바인딩 `resolved`는 이 부분 컴파일의 연결이며 런타임 동적 구현을 보증하지 않습니다. `candidate/unresolved`, 비활성 전처리, WPF/SDK/설정 경계는 확인 대상으로 남깁니다.

DLL은 메타데이터만 기록하며 실행/역컴파일하지 않습니다. 측정·이력 CSV의 실제 레코드를 복제하지 않고 구조와 정의를 설명합니다. 장비 빌드/스크립트 실행/축 이동·가공은 수행하지 않았습니다. 기존 빌드 오류를 이 문서의 구문 분석 진단과 혼동하지 않습니다.

## 갱신

예약 분석은 A3Drilling/master 변경을 확인하고 구조 분석과 이 폴더의 파일 문서·호출 관계·그림·주석 해설·검색 자료를 함께 갱신합니다. 원본은 별도 읽기 전용 clone이며 Shared의 이 폴더와 해당 변경 분석 폴더만 게시합니다. 소스 Commit이 동일하고 문서도 최신이면 날짜만 바꿔 커밋하지 않습니다. 자세한 재생성 절차는 [도구 안내](tools/README.md)를 확인하세요.
'''
        put(self.out/'README.md',readme)
        cards=''.join('<div class="card"><a href="'+H('manual-html/'+p.removeprefix('manual/')+'.html')+'"><b>'+H(t)+'</b></a></div>' for p,t in manual_links)
        data=J(self.catalog).replace('</','<\\/')
        body='<h1>A3 LD Code Ref</h1><p>master · '+H(self.commit)+'</p><div class="note">원본은 보존합니다. 구문 해설 · 직접 추적한 상세 해설 · 실행 검증을 구분합니다.</div><p>'+str(c['filePages'])+' 파일 · '+str(c['memberCount'])+' 멤버 · '+str(c['callSites'])+' 호출 구문</p><img src="diagrams/architecture.svg" alt="전체 코드 계층"><h2>먼저 읽는 상세 해설</h2><div class="grid">'+cards+'</div><h2>파일 찾기</h2><input id="q" placeholder="예: Review, Vision, Masking, CReviewManager"><select id="kind"><option value="">모든 파일</option>'+''.join('<option>'+H(k)+'</option>' for k in sorted({p['kind'] for p in self.catalog}))+'</select><p id="count"></p><table><thead><tr><th>원본 파일</th><th>종류</th><th>줄</th><th>멤버</th></tr></thead><tbody id="rows"></tbody></table><p><a href="offline-studio/README.md">Offline Studio 첨부 안내</a> · <a href="README.md">Markdown 안내</a> · <a href="manifest.json">기준/범위 manifest</a></p>'
        script='''<script>const files='''+data+''';const q=document.getElementById('q'),k=document.getElementById('kind');function render(){const words=q.value.toLowerCase().split(/\\s+/).filter(Boolean);const list=files.filter(f=>(!k.value||f.kind===k.value)&&words.every(w=>(f.path+' '+f.module+' '+f.kind+' '+f.search).toLowerCase().includes(w)));const rows=document.getElementById('rows');rows.replaceChildren();for(const f of list){const tr=document.createElement('tr');for(const v of [f.path,f.kind,String(f.lines),String(f.members)]){const td=document.createElement('td');if(v===f.path){const a=document.createElement('a');a.href=f.html;a.textContent=v;td.append(a)}else td.textContent=v;tr.append(td)}rows.append(tr)}document.getElementById('count').textContent=list.length+' / '+files.length+' 파일';}q.oninput=k.onchange=render;render();</script>'''
        body=body.replace('<h2>파일 찾기</h2>','<h2 id="file-search">파일 찾기</h2>')
        body=body.replace('<img src="diagrams/architecture.svg"','<p><a href="#file-search">파일·함수 검색 바로가기 ↓</a> · <a href="offline-studio/README.md">Offline Studio 첨부 안내</a></p><img src="diagrams/architecture.svg"')
        put(self.out/'index.html',page('A3 LD Code Ref',body+script,'index.html'))

def main():
    a=argparse.ArgumentParser();a.add_argument('--source',type=Path,required=True);a.add_argument('--model',type=Path,required=True);a.add_argument('--output',type=Path,required=True);a.add_argument('--manual',type=Path,required=True);args=a.parse_args();Builder(args.source,args.output,args.model,args.manual).run()
if __name__=='__main__':main()
