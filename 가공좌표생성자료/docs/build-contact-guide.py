"""Build the final report's illustrated contact guide from the fixed camera-hole recipe.

Usage: python docs/build-contact-guide.py YYYYMMDD_HHMMSS
Geometry engine and controller output are intentionally not modified.
"""
import html
import json
import math
from pathlib import Path
import re
import shutil
import sys

ROOT = Path(__file__).resolve().parents[2]
STAMP = sys.argv[1]
if not re.fullmatch(r"\d{8}_\d{6}", STAMP):
    raise ValueError("KST folder name must be YYYYMMDD_HHMMSS")
OUT = ROOT / STAMP
OUT.mkdir(exist_ok=True)
QA = ROOT.parent / "contact_guide_qa"
QA.mkdir(exist_ok=True)
BASE = ROOT / "20260915_093246/Cell모델별_Masking_최종보고서.html"
RECIPE_NAME = "Cell중앙_카메라홀1개_R2p5_레시피.json"
recipe = json.loads((ROOT / "20260915_082716" / RECIPE_NAME).read_text())
model = recipe["masking"]["models"][0]
HALF = recipe["pixelSizeMmPerPx"] * recipe["commandPitchPx"] / 4 * 1.5
assert abs(HALF - .3375) < 1e-12
assert model["MASKING_HOLE1_X"] == 4.65 and model["MASKING_HOLE1_Y"] == 9.6
assert model["CELL_UP_ROUND_RADIUS"] == model["CELL_DOWN_ROUND_RADIUS"] == 2.5

GREEN, RED, BLUE, INK = "#07813e", "#ce342a", "#2563a6", "#173044"
figures = {}

def svg(name, w, h, title, body):
    markup = f'<svg class="cg-svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="cg-{name}-title" xmlns="http://www.w3.org/2000/svg"><title id="cg-{name}-title">{html.escape(title)}</title><rect width="{w}" height="{h}" fill="#ffffff"/>{body}</svg>'
    figures[name] = markup
    (QA / (name + ".svg")).write_text(markup)
    return markup

def txt(x, y, value, size=15, anchor="start", color=INK):
    return f'<text x="{x:.3f}" y="{y:.3f}" font-size="{size}" text-anchor="{anchor}" style="fill:{color}">{html.escape(value)}</text>'

def line(x1, y1, x2, y2, color=INK, width=1.2, dash=""):
    return f'<line x1="{x1:.3f}" y1="{y1:.3f}" x2="{x2:.3f}" y2="{y2:.3f}" stroke="{color}" stroke-width="{width}"' + (f' stroke-dasharray="{dash}"' if dash else '') + '/>'

def rect(x, y, w, h, fill, stroke="none", sw=1):
    return f'<rect x="{x:.3f}" y="{y:.3f}" width="{w:.3f}" height="{h:.3f}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'

def dot(x, y, color, r=4):
    return f'<circle cx="{x:.3f}" cy="{y:.3f}" r="{r}" fill="{color}"/>'

def dimension(x1, x2, y, label):
    return line(x1, y, x2, y) + line(x1, y-5, x1, y+5) + line(x2, y-5, x2, y+5) + txt((x1+x2)/2, y+23, label, 16, "middle")

body = rect(65, 43, 210, 210, "#eaf6ef", GREEN, 2)
for i in range(4):
    for j in range(4):
        body += dot(65+70*i, 43+70*j, BLUE, 5)
body += line(164, 148, 176, 148, INK, 2) + line(170, 142, 170, 154, INK, 2)
body += line(177,148,302,148,INK,1,"4 3") + txt(304,144,"P: 샷 중심",16)
body += txt(304,168,"(빔 16개의 중앙)",13)
body += dimension(170,275,271,"0.3375 mm") + dimension(65,275,309,"0.675 mm = 3 × 0.225")
body += txt(170,24,"가로 4개 · 세로 4개",17,"middle")
body += txt(170,370,"점: 빔 위치  /  초록 테두리: 판정 외곽",14,"middle")
footprint = svg("footprint",450,390,"DOE 16개 빔 위치와 0.675 mm 판정 사각형",body)

s=13.5
X=lambda x:80+(x+.45)*s
Y=lambda y:55+(y+.45)*s
body=f'<rect x="{X(-.45)}" y="{Y(-.45)}" width="{12.6*s}" height="{22.5*s}" rx="{2.5*s}" fill="#eaf6ef" stroke="{BLUE}" stroke-width="2"/>'
body+=rect(X(4.65),Y(9.6),2.4*s,2.4*s,"#fbdeda",RED,1.8)
body+=line(X(0)-5,Y(0),X(0)+5,Y(0),INK,2)+line(X(0),Y(0)-5,X(0),Y(0)+5,INK,2)
body+=line(35,33,X(0),Y(0),INK)+txt(20,24,"A = (0, 0)",17)
body+=line(X(0),Y(0),X(0)+65,Y(0),INK)+txt(X(0)+68,Y(0)+5,"+X",14)
body+=line(X(0),Y(0),X(0),Y(0)+75,INK)+txt(X(0)-32,Y(0)+88,"+Y",14)
body+=line(X(7.05),Y(10.8),290,Y(10.8),RED)+txt(293,Y(10.8)-5,"Hole",15,color=RED)
body+=txt(164,Y(19.6),"Cell 허용 내부",16,"middle",GREEN)
body+=txt(180,389,"X 오른쪽 / Y 아래쪽 · 거리 단위 mm",14,"middle")
overview=svg("cell-origin",360,410,"각 Cell의 첫 샷 중심 A와 중앙 Hole 및 라운드 외곽",body)

def contact_picture(kind, px, title, status):
    py=10.8
    xmin,xmax=(3.9,4.95) if kind=="hole" else (-.85,.45)
    ymin,ymax=10.23,11.37
    scale=min(288/(xmax-xmin),245/(ymax-ymin))
    x0=36+(288-(xmax-xmin)*scale)/2
    F=lambda x:x0+(x-xmin)*scale
    G=lambda y:31+(y-ymin)*scale
    boundary=4.65 if kind=="hole" else -.45
    x1,x2=F(xmin),F(xmax)
    b=rect(x1,G(ymin),x2-x1,(ymax-ymin)*scale,"#f4faf6")
    if kind=="hole":
        b+=rect(F(boundary),G(ymin),F(xmax)-F(boundary),(ymax-ymin)*scale,"#fbdeda")
        b+=txt(F(boundary)+8,62,"Hole",14,color=RED)
    else:
        b+=rect(F(xmin),G(ymin),F(boundary)-F(xmin),(ymax-ymin)*scale,"#fbdeda")
        b+=txt(F(xmin)+7,62,"밖",15,color=RED)
        b+=txt(F(xmax)-12,62,"Cell 안",15,"end",GREEN)
    b+=line(F(boundary),G(ymin),F(boundary),G(ymax),RED if kind=="hole" else BLUE,2)
    col=GREEN if status=="ON" else RED
    b+=rect(F(px-HALF),G(py-HALF),2*HALF*scale,2*HALF*scale,"#e0f2e7" if status=="ON" else "#f9bcb4",col,2)
    b+=dot(F(px),G(py),col)+txt(F(px),G(py)-12,"P",16,"middle",col)
    b+=line(x1,291,x2,291,INK)
    for x,label in [(px,f"{px:g}"),(boundary,f"{boundary:g}")]:
        b+=line(F(x),287,F(x),296,INK)+txt(F(x),316,label,13,"middle")
    b+=txt(326,285,"+X",13,"end")
    return svg(f"{kind}-{status.lower()}-{str(px).replace('.','p').replace('-','m')}",360,335,title,b)

hole_specs=[(4.3,"① 아직 떨어져 있음","ON","오른쪽 끝 4.6375 mm<br>Hole까지 <b>0.0125 mm 여유</b>"),(4.3125,"② 정확히 닿음","OFF","오른쪽 끝 4.6500 mm<br>Hole 경계와 <b>같음</b>"),(4.4,"③ 조금 걸침","OFF","오른쪽 끝 4.7375 mm<br>Hole 안으로 <b>0.0875 mm 겹침</b>")]
hole_cards="".join(f'<figure><figcaption><b>{title}</b> · <span class="cg-{gate.lower()}">{gate}</span></figcaption>{contact_picture("hole",x,title,gate)}<p>중심 P = ({x:g}, 10.8) mm<br>{desc}</p></figure>' for x,title,gate,desc in hole_specs)
edge_specs=[(0,"① 사각형 전체가 안쪽","ON","왼쪽 끝 −0.3375 mm<br>Edge까지 <b>0.1125 mm 여유</b>"),(-.1125,"② Edge에 정확히 닿음","OFF","왼쪽 끝 −0.4500 mm<br>Edge 경계와 <b>같음</b>"),(-.2,"③ 일부가 Cell 밖","OFF","왼쪽 끝 −0.5375 mm<br>Cell 밖으로 <b>0.0875 mm 이탈</b>")]
edge_cards="".join(f'<figure><figcaption><b>{title}</b> · <span class="cg-{gate.lower()}">{gate}</span></figcaption>{contact_picture("edge",x,title,gate)}<p>중심 P = ({x:g}, 10.8) mm<br>{desc}</p></figure>' for x,title,gate,desc in edge_specs)

sc=92
F=lambda x:40+(x+.6)*sc
G=lambda y:36+(y+.6)*sc
l,t,cx,cy,r=-.45,-.45,2.05,2.05,2.5
body=rect(F(-.6),G(-.6),3.6*sc,3.6*sc,"#fce8e5")
body+=f'<path d="M {F(cx)} {G(t)} A {r*sc} {r*sc} 0 0 0 {F(l)} {G(cy)} L {F(l)} {G(3)} L {F(3)} {G(3)} L {F(3)} {G(t)} Z" fill="#eaf6ef" stroke="{BLUE}" stroke-width="2"/>'
body+=line(F(cx),G(t),F(cx),G(3),BLUE,1,"5 4")+line(F(l),G(cy),F(3),G(cy),BLUE,1,"5 4")
px,py=.8875,.3875;qx,qy=.55,.05
body+=rect(F(px-HALF),G(py-HALF),2*HALF*sc,2*HALF*sc,"#f9bcb4",RED,2)
body+=dot(F(px),G(py),INK)+txt(F(px)+9,G(py)-9,"P",15)
body+=line(F(qx),G(qy),F(cx),G(cy),RED,2)
body+=line(F(qx),G(qy),F(cx),G(qy),INK,1,"3 3")+line(F(cx),G(qy),F(cx),G(cy),INK,1,"3 3")
body+=txt((F(qx)+F(cx))/2,G(qy)-8,"1.5 mm",14,"middle")
body+=txt(F(cx)+8,(G(qy)+G(cy))/2,"2.0 mm",14)
body+=dot(F(qx),G(qy),RED)+txt(F(qx)-12,G(qy)+18,"Q",16,"end",RED)
body+=dot(F(cx),G(cy),BLUE)+txt(F(cx)-8,G(cy)+22,"C (2.05, 2.05)",14,"end",BLUE)
body+=txt(F(.6),G(1.65),"거리 2.5 = 반지름",15,"middle",RED)
body+=txt(F(1.2),G(2.8),"Cell 허용 내부",16,"middle",GREEN)
body+=txt(240,399,"Q가 원호에 닿음 → 샷 전체 OFF",17,"middle",RED)
round_picture=svg("round-tangent",480,420,"원호 중심 C에서 판정 사각형 꼭짓점 Q까지 거리 2.5 mm인 접촉 사례",body)

css='''
.cg-guide h3{font-size:21px;margin:32px 0 12px}.cg-guide h4{font-size:17px;margin:20px 0 8px}
.cg-guide .cg-lead{font-size:19px;line-height:1.7}.cg-two{display:grid;grid-template-columns:minmax(280px,.9fr) minmax(300px,1.1fr);gap:24px;align-items:start}
.cg-cases{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.cg-guide figure{margin:12px 0;background:#fff;min-width:0}.cg-guide figcaption{font-size:15px;line-height:1.6;margin-bottom:10px}.cg-guide figure p{font-size:14px;line-height:1.8;padding:0 4px}.cg-guide .cg-svg{display:block;width:100%;height:auto}.cg-svg text{font-family:'Noto Sans KR','Malgun Gothic',sans-serif}
.cg-guide .cg-on{color:#07813e;font-weight:700}.cg-guide .cg-off{color:#ce342a;font-weight:700}.cg-guide .cg-box{padding:15px 18px;background:#f3f7f9;border-left:4px solid #2563a6;margin:16px 0}.cg-guide .cg-danger{border-color:#ce342a;background:#fff4f2}.cg-guide .cg-math{padding:16px 18px;background:#edf4f8;border-radius:8px;white-space:pre-wrap;font-size:15px;line-height:1.9;overflow-wrap:anywhere}.cg-guide .cg-small{font-size:14px;color:#526879}.cg-guide .cg-step{font-size:13px;letter-spacing:.08em;color:#2563a6;font-weight:700;margin-top:30px}.cg-guide .cg-code{display:block;background:#122c3d;color:#f1f6f9;padding:18px;white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.9;font-size:14px}.cg-guide .cg-checks{padding-left:24px}.cg-guide .cg-checks li{margin:7px 0}.cg-guide table{margin:12px 0}.cg-guide td,.cg-guide th{overflow-wrap:anywhere}.cg-guide .cg-case-title{font-size:17px}
@media(max-width:980px){.cg-cases{grid-template-columns:1fr}.cg-cases figure{max-width:480px;width:100%;margin:12px auto}.cg-two{grid-template-columns:1fr}.cg-two figure{max-width:480px;margin:auto}}@media(max-width:600px){.cg-guide h3{font-size:20px}.cg-guide .cg-math{font-size:14px;padding:12px}.cg-guide td,.cg-guide th{padding:8px 6px}.cg-guide table{font-size:13px}.cg-guide .cg-lead{font-size:17px}}@media print{.cg-guide{break-inside:auto}.cg-guide figure,.cg-guide table,.cg-guide .cg-math{break-inside:avoid}.cg-guide h3{break-after:avoid}}
'''

guide=f'''<section id="contact-guide" class="cg-guide">
<h2>그림으로 이해하는 Hole·Edge·Round 접촉 판정</h2>
<p class="cg-lead"><b>“가공 중심점이 들어갔는가?”가 아니라, “그 중심에 놓인 가공 사각형이 조금이라도 닿았는가?”를 봅니다.</b> 닿으면 그 샷 전체를 <span class="cg-off">OFF</span>로 설정하고, 좌표 자체는 그대로 지나갑니다.</p>
<div class="cg-box">읽는 순서: ① A 기준 좌표 → ② 샷의 사각형 만들기 → ③ Hole과 겹침 검사 → ④ 직선 Edge 검사 → ⑤ Round 원호 검사 → ⑥ 같은 좌표에 Gate 기록</div>
<p>설명에는 <a href="./{RECIPE_NAME}">중앙 카메라 홀 1개·R 2.5 mm 레시피</a>를 사용합니다. 기존 45 Cell 배치를 유지하며, 각 Cell은 자신의 A와 모델 1의 형상으로 따로 판정합니다. 치수는 시뮬레이션용 예제입니다.</p>

<p class="cg-step">STEP 1 · 모든 비교는 같은 Cell 좌표계에서</p>
<h3>1. 첫 가공 중심 A를 (0, 0)으로 둡니다</h3>
<div class="cg-two"><figure>{overview}<figcaption>각 Cell의 A가 원점입니다. Hole과 Edge 모두 같은 원점을 사용합니다.</figcaption></figure><div>
<p>A는 Align key로부터 위치가 확인된 <b>첫 DOE 샷 중심</b>입니다. A가 라운드 밖에 있어 Off여도 원점을 다른 샷으로 옮기지 않습니다.</p>
<table><thead><tr><th>예제 형상</th><th>A 기준 값 (mm)</th></tr></thead><tbody><tr><td>Cell 왼쪽 / 오른쪽</td><td>−0.45 / 12.15</td></tr><tr><td>Cell 위쪽 / 아래쪽</td><td>−0.45 / 22.05</td></tr><tr><td>Cell 전체 폭 / 높이</td><td>12.6 / 22.5</td></tr><tr><td>Hole 좌상단 X / Y</td><td>4.65 / 9.60</td></tr><tr><td>Hole 전체 폭 / 높이</td><td>2.40 / 2.40</td></tr><tr><td>상단 / 하단 라운드 반지름</td><td>2.50 / 2.50</td></tr></tbody></table>
<p>예를 들어 첫 샷의 전역 위치 A가 (25.8375, 0.3375) mm이고 회전이 0°라면, 전역 위치 (30.3375, 11.1375) mm의 샷은 A 기준으로 <b>(4.5, 10.8) mm</b>입니다.</p>
<div class="cg-math">Cell 내부 X = 가공 전역 X − A의 전역 X
Cell 내부 Y = 가공 전역 Y − A의 전역 Y
예: (30.3375 − 25.8375, 11.1375 − 0.3375) = (4.5, 10.8) mm</div>
<p class="cg-small">Cell이 회전되어 있으면 차이 벡터를 Cell 회전각만큼 역회전합니다. Scanner GY와 Stage GX를 Hole의 X/Y와 바로 비교하지 않습니다. 입력한 A 기준 Hole·Edge 거리에 C26을 또 더하지 않습니다.</p></div></div>

<p class="cg-step">STEP 2 · 점을 16개 빔 전체의 외곽으로 넓히기</p>
<h3>2. 중심 P에서 좌우·상하로 0.3375 mm를 펼칩니다</h3>
<div class="cg-two"><figure>{footprint}<figcaption>점은 빔의 위치입니다. 점의 표시 크기는 실제 빔 직경을 뜻하지 않습니다. 사각형은 빔 사이 빈 공간까지 포함한 보수적인 판정 외곽입니다.</figcaption></figure><div>
<div class="cg-math">샷 중심 간격 = 0.09 mm/px × 10 px = 0.9 mm
DOE 내부 빔 간격 = 0.9 ÷ 4 = 0.225 mm
가로 4개 빔의 첫 빔~마지막 빔 거리 = 3칸 × 0.225 = 0.675 mm
사각형 반폭 = 0.675 ÷ 2 = 0.3375 mm</div>
<p>“4개 빔” 사이에는 <b>간격이 3칸</b> 있습니다. 따라서 0.9 mm는 다음 샷 중심까지 이동하는 거리이고, 0.675 mm는 이 샷의 명목 판정 사각형 한 변입니다.</p>
<table><thead><tr><th>판정 사각형의 끝</th><th>계산식 (mm)</th></tr></thead><tbody><tr><td>왼쪽 끝</td><td>중심 X − 반폭</td></tr><tr><td>오른쪽 끝</td><td>중심 X + 반폭</td></tr><tr><td>위쪽 끝</td><td>중심 Y − 반폭</td></tr><tr><td>아래쪽 끝</td><td>중심 Y + 반폭</td></tr></tbody></table>
<div class="cg-box">중심 P = (4.4, 10.8) mm라면<br>X 범위는 <b>[4.0625, 4.7375]</b> mm<br>Y 범위는 <b>[10.4625, 11.1375]</b> mm입니다.</div></div></div>

<p class="cg-step">STEP 3 · Hole은 금지박스와 사각형의 겹침 검사</p>
<h3>3. Hole과 X·Y 두 방향 모두 겹치거나 닿으면 Off입니다</h3>
<p><code>MODEL1_MASKING_HOLE1_X/Y</code>는 Hole의 중심이 아니라 <b>금지박스의 좌상단</b>입니다. <code>SIZE_X/Y</code>는 반폭이 아니라 전체 폭·높이입니다. 실제 Hole이 원형이어도 현재 코드는 입력한 Box 전체를 금지합니다.</p>
<div class="cg-math">Hole X 범위 = [4.65, 4.65 + 2.40] = [4.65, 7.05] mm
Hole Y 범위 = [9.60, 9.60 + 2.40] = [9.60, 12.00] mm</div>
<div class="cg-cases">{hole_cards}</div>
<p class="cg-small">세 그림은 Hole의 왼쪽 경계 부근을 같은 축척으로 확대한 것입니다. 모두 Y = 10.8 mm이므로 Y 방향은 이미 Hole과 겹칩니다. 아래 시험 중심은 경계 설명용이며, 기본 0.9 mm 격자의 실제 출력 좌표만을 표시한 것은 아닙니다.</p>
<h4>걸치는 예제 P = (4.4, 10.8) mm를 직접 계산하면</h4>
<div class="cg-math">① 샷의 오른쪽 끝 = 4.4 + 0.3375 = 4.7375 mm
② Hole의 왼쪽 경계 = 4.65 mm
③ 겹친 길이 = 4.7375 − 4.65 = 0.0875 mm
④ Y 범위 [10.4625, 11.1375]도 Hole [9.60, 12.00] 안에 있음
⑤ X·Y가 모두 겹침 → 샷 전체 LASER OFF</div>
<div class="cg-box cg-danger"><b>중심 X = 4.4는 Hole의 시작 4.65보다 왼쪽에 있지만 Off입니다.</b> 중심점이 아니라 오른쪽으로 펼쳐진 사각형의 끝이 Hole에 걸렸기 때문입니다.</div>
<h4>프로그램은 다음 네 조건을 동시에 확인합니다</h4>
<table><thead><tr><th>축</th><th>서로 닿거나 겹치는 조건</th></tr></thead><tbody><tr><td>X</td><td>샷 오른쪽 ≥ Hole 왼쪽 <b>그리고</b> 샷 왼쪽 ≤ Hole 오른쪽</td></tr><tr><td>Y</td><td>샷 아래쪽 ≥ Hole 위쪽 <b>그리고</b> 샷 위쪽 ≤ Hole 아래쪽</td></tr><tr><td>최종 Hole 접촉</td><td><b>X 조건 AND Y 조건</b></td></tr></tbody></table>
<p><b>두 축 중 하나라도 떨어져 있으면 그 Hole과는 접촉하지 않습니다.</b> 예를 들어 P = (5.85, 9.10) mm는 X가 Hole 안에 있어도, 샷 아래쪽이 9.4375 mm &lt; Hole 위쪽 9.60 mm이므로 Hole 접촉이 아닙니다. 단, 다른 Hole·Edge·Round는 계속 검사합니다.</p>
<p>변끼리 닿는 경우뿐 아니라 <b>꼭짓점 하나만 닿는 경우도 Off</b>입니다. P = (4.3125, 9.2625) mm이면 샷 오른쪽 = 4.65 mm, 샷 아래쪽 = 9.60 mm로 Hole 좌상단에 정확히 닿습니다. 어느 한 사각형이 다른 사각형 안에 완전히 들어간 경우도 위 네 조건으로 검출합니다.</p>

<p class="cg-step">STEP 4 · 직선 Edge는 사각형 전체의 내부 포함 검사</p>
<h3>4. Cell 밖으로 나가지 않았더라도 경계에 닿으면 Off입니다</h3>
<p>Hole은 “금지영역과 겹치는가?”를 묻고, Edge는 “허용영역 안에 <b>완전히</b> 들어왔는가?”를 묻습니다. 먼저 라운드를 제외한 직선 외곽 네 변을 검사합니다.</p>
<div class="cg-cases">{edge_cards}</div>
<p class="cg-small">Y = 10.8 mm인 Cell 왼쪽 중간 부분을 확대했습니다. 이 위치에서는 Round의 영향을 제외하고 직선 Edge만 확인할 수 있습니다.</p>
<table><thead><tr><th>방향</th><th>통과하려면 모두 만족</th><th>해당 방향의 여유 (mm)</th></tr></thead><tbody><tr><td>왼쪽</td><td>샷 왼쪽 &gt; Cell 왼쪽</td><td>샷 왼쪽 − Cell 왼쪽</td></tr><tr><td>오른쪽</td><td>샷 오른쪽 &lt; Cell 오른쪽</td><td>Cell 오른쪽 − 샷 오른쪽</td></tr><tr><td>위쪽</td><td>샷 위쪽 &gt; Cell 위쪽</td><td>샷 위쪽 − Cell 위쪽</td></tr><tr><td>아래쪽</td><td>샷 아래쪽 &lt; Cell 아래쪽</td><td>Cell 아래쪽 − 샷 아래쪽</td></tr></tbody></table>
<div class="cg-math">P = (0, 10.8) mm일 때
샷 왼쪽 = 0 − 0.3375 = −0.3375 mm
왼쪽 여유 = −0.3375 − (−0.45) = +0.1125 mm → 직선 Edge 통과

왼쪽 Edge 접촉 경계의 중심 X = Cell 왼쪽 + 반폭
                              = −0.45 + 0.3375 = −0.1125 mm
중심 X가 이 값과 같거나 더 작으면 왼쪽 Edge 접촉/이탈</div>
<div class="cg-box">여유가 <b>양수</b>이면 떨어져 있고, <b>0</b>이면 닿고, <b>음수</b>이면 밖으로 나간 것입니다. 네 방향 중 하나라도 0 이하이면 Off입니다. 직선 네 변을 통과했더라도 다음 Round 검사를 통과해야 합니다.</div>

<p class="cg-step">STEP 5 · 둥근 모서리는 꼭짓점과 원호 사이의 거리 검사</p>
<h3>5. Round는 “잘려 나간 모서리”에 걸렸는지 확인합니다</h3>
<p>라운드는 직사각형 모서리를 원호로 잘라낸 형상입니다. <b>원호의 안쪽 Cell 영역</b>은 가공할 수 있고, <b>잘려 나간 바깥 영역과 원호 경계</b>는 Off입니다. 둥근 모서리 부근이라는 이유만으로 전부 Off가 되지는 않습니다.</p>
<div class="cg-two"><figure>{round_picture}<figcaption>분홍색은 Cell 밖, 연녹색은 허용 내부입니다. 빨간 샷의 중심 P는 내부에 있지만 꼭짓점 Q가 원호에 닿아 Off입니다.</figcaption></figure><div>
<h4>먼저 원호 중심 C를 구합니다</h4>
<div class="cg-math">상좌 Edge 모서리 = (−0.45, −0.45) mm
상단 라운드 반지름 = 2.50 mm
상좌 원호 중심 C = (−0.45 + 2.50, −0.45 + 2.50)
                 = (2.05, 2.05) mm</div>
<h4>샷의 네 꼭짓점을 검사합니다</h4>
<p>그림의 중심 P = (0.8875, 0.3875) mm에서 상좌 꼭짓점 Q를 구하면 다음과 같습니다.</p>
<div class="cg-math">Q = (중심 X − 반폭, 중심 Y − 반폭)
  = (0.8875 − 0.3375, 0.3875 − 0.3375)
  = (0.55, 0.05) mm

가로 차이 = 2.05 − 0.55 = 1.50 mm
세로 차이 = 2.05 − 0.05 = 2.00 mm
거리 = √(1.50² + 2.00²) = √6.25 = 2.50 mm
거리 = 반지름 → 원호에 닿음 → LASER OFF</div></div></div>
<p>이 거리 계산은 직각삼각형의 빗변 길이를 구하는 것과 같습니다. <b>원호 중심에서 더 멀어질수록 Cell 모서리 바깥으로 나갑니다.</b></p>
<table><thead><tr><th>시험 중심 P (mm)</th><th>상좌 꼭짓점 Q (mm)</th><th>C~Q 거리 (mm)</th><th>결과</th></tr></thead><tbody><tr><td>(0.9, 0.9)</td><td>(0.5625, 0.5625)</td><td>약 2.103643 &lt; 2.5</td><td><span class="cg-on">허용 내부</span></td></tr><tr><td>(0.8875, 0.3875)</td><td>(0.55, 0.05)</td><td>2.5 = 2.5</td><td><span class="cg-off">접촉 Off</span></td></tr><tr><td>(0.8, 0.3)</td><td>(0.4625, −0.0375)</td><td>약 2.622558 &gt; 2.5</td><td><span class="cg-off">이탈 Off</span></td></tr></tbody></table>
<p class="cg-small">이 세 예제의 판정 사각형은 직선 외곽 안에 있습니다. 결과 차이는 상좌 Round에서 발생합니다. 실제 코드는 예제의 Q만 보는 것이 아니라 <b>네 꼭짓점 모두</b>를 검사합니다.</p>
<h4>원호 검사는 해당 모서리 구역에서만 합니다</h4>
<p>상좌는 점의 X &lt; 2.05 <b>그리고</b> Y &lt; 2.05인 구역입니다. 여기에 들어오는 사각형 꼭짓점에 대해 C~Q 거리를 반지름과 비교합니다. Cell 중앙의 점을 상좌 원호 중심과 무조건 비교하지 않습니다.</p>
<table><thead><tr><th>모서리</th><th>원호 중심 계산</th><th>예제 원호 중심 (mm)</th></tr></thead><tbody><tr><td>상좌</td><td>(왼쪽 + 상단 R, 위쪽 + 상단 R)</td><td>(2.05, 2.05)</td></tr><tr><td>상우 · 좌우 반전</td><td>(오른쪽 − 상단 R, 위쪽 + 상단 R)</td><td>(9.65, 2.05)</td></tr><tr><td>하좌 · 상하 반전</td><td>(왼쪽 + 하단 R, 아래쪽 − 하단 R)</td><td>(2.05, 19.55)</td></tr><tr><td>하우 · 상하·좌우 반전</td><td>(오른쪽 − 하단 R, 아래쪽 − 하단 R)</td><td>(9.65, 19.55)</td></tr></tbody></table>
<p>반전하는 것은 <b>모서리에서 원호가 안쪽으로 향하는 방향</b>입니다. 입력한 모든 X/Y의 부호를 A 기준으로 뒤집는 것이 아닙니다. 현재 지원하는 볼록한 라운드 사각형에서는 네 꼭짓점이 모두 허용 내부에 있으면 그 사각형 전체도 내부에 있습니다.</p>

<p class="cg-step">STEP 6 · 판정 결과만 Gate에 반영</p>
<h3>6. 하나라도 걸리면 Off, 좌표는 삭제하지 않습니다</h3>
<div class="cg-math">접촉 Off = 직선 Edge 접촉/이탈
          OR 네 Round 중 하나의 접촉/이탈
          OR 활성 Hole 중 하나와 접촉

최종 Gate = 접촉 Off이면 OFF
            접촉이 없으면 기존 Gate 유지</div>
<pre class="cg-code">각 Head의 기존 좌표 순서대로 반복:
    이 좌표가 속한 Cell과 MODEL_TYPE 확인
    해당 Cell의 A를 기준으로 내부 X/Y 계산
    중심에서 반폭을 펼쳐 판정 사각형 생성
    직선 Edge, Round, 활성 Hole 접촉 여부 계산
    접촉이면 Gate = OFF, 아니면 Gate = 기존 Gate
    같은 Head · 같은 순번 · 같은 좌표에 Gate를 기록</pre>
<p>예를 들어 Hole에 걸친 좌표를 목록에서 빼면 안 됩니다. <b>같은 MOF 경로로 통과하면서 레이저만 끄는 것</b>이 이 판정의 역할입니다. 기존 반복 레코드가 Off라면 형상 접촉이 없어도 계속 Off입니다.</p>
<table><thead><tr><th>중앙 Hole 예제 검증</th><th>결과</th></tr></thead><tbody><tr><td>Cell당 고유 중심</td><td>350개 = On 326개 + 접촉 Off 24개</td></tr><tr><td>전체 Raw 좌표</td><td>16,742개 유지</td></tr><tr><td>최종 Gate</td><td>On 14,670개 / Off 2,072개</td></tr><tr><td>Masking 전후 좌표·Head·순서 차이</td><td>0개</td></tr></tbody></table>
<p class="cg-small">예제의 반복 레코드 992개는 기존 Gate를 Off로 설정했습니다. 전체 Off 2,072개는 고유 중심의 접촉 Off 1,080개와 반복 Off 992개를 합한 값입니다. 이는 이 중앙 Hole 레시피의 결과이며 다른 모델 예제의 개수와 구분합니다.</p>

<h3>7. 빔 크기·위치 여유와 회전이 있으면 어떻게 되나요?</h3>
<p>앞의 예제는 빔 반경과 위치 여유가 미입력인 <b>명목 DOE 외곽 판정</b>입니다. 실제 빔의 크기와 위치 오차까지 막으려면 사각형을 더 크게 잡습니다.</p>
<div class="cg-math">DOE가 Cell 축과 나란할 때:
판정 반폭 = 0.3375 + 빔 반경 + 위치 여유

계산 예: 빔 반경 0.010 mm, 위치 여유 0.020 mm
판정 반폭 = 0.3375 + 0.010 + 0.020 = 0.3675 mm
판정 사각형 한 변 = 2 × 0.3675 = 0.7350 mm</div>
<p>반폭이 커지면 Hole·Edge에 더 일찍 닿으므로 Off 영역이 늘어납니다. 위 0.010/0.020 mm는 설명용 수치이며, 첨부 레시피에는 임의의 실측값으로 넣지 않았습니다.</p>
<div class="cg-math">Cell 축에서 본 DOE 상대 회전각 = DOE 회전각 − Cell 회전각
회전된 명목 외접 사각형 반폭
  = 0.3375 × (|cos(상대 회전각)| + |sin(상대 회전각)|)
최종 판정 반폭 = 회전된 명목 반폭 + 빔 반경 + 위치 여유
예: 상대각 45°이고 여유가 없으면 한 변 ≈ 0.954594 mm</div>
<p>회전된 16개 빔 전체를 감싸는, Cell X/Y축과 나란한 사각형으로 검사합니다. 이때도 빔 사이 빈 공간까지 포함하므로 실제 빔 점별 판정보다 보수적일 수 있습니다.</p>
<div class="cg-box cg-danger"><b>숫자 비교용 허용오차와 실제 위치 여유는 다릅니다.</b> 코드의 10⁻⁹ mm는 부동소수점 연산 때문에 “정확한 접촉”이 누락되지 않도록 하는 비교값입니다. 장비의 실제 오차 여유를 대신하지 않습니다. 직선/박스 비교에서는 등호 부근까지 Off, 원호는 거리 ≥ 반지름 − 10⁻⁹ mm이면 Off로 처리합니다.</div>
<ul class="cg-checks"><li>Hole 개수 0: Hole 검사만 생략하고 Cell Edge·Round 검사는 유지합니다.</li><li>Round 반지름 0: 그쪽 원호 검사는 생략하고 직선 Edge는 검사합니다.</li><li>실제 Masking 입력이 잘못되면 좌표를 임의로 통과시키지 않고 입력 오류를 표시합니다.</li><li>Cell Masking은 110 mm 스캔필드 검증과 별개입니다. 장비 Gate 지연·MOF 타이밍·실측 빔 크기는 별도 검증이 필요합니다.</li></ul>
<p class="cg-small">이 해설의 수치 예제는 프로그램의 <code>envelope</code>, <code>touchesHole</code>, <code>edgeContactReasons</code>와 대조했습니다. 계산 엔진과 기존 좌표 생성 규칙은 변경하지 않았습니다.</p>
</section>'''

source=BASE.read_text()
assert '<section id="contact-guide"' not in source
source=source.replace('</style>',css+'\n</style>',1)
source=source.replace('<nav>','<nav><a href="#contact-guide">그림으로 배우는 접촉 계산</a>',1)
source=source.replace('<section id="example">',guide+'\n<section id="example">',1)
source=source.replace('<title>Cell 모델별 Masking 최종보고서</title>','<title>Cell 모델별 Masking 최종보고서 · Hole·Edge 접촉 계산 해설</title>')
source=re.sub(r'작성일 \d{8}_\d{6}',f'작성일 {STAMP}',source)
(OUT/'Cell모델별_Masking_최종보고서.html').write_text(source)
shutil.copyfile(ROOT/'20260915_093246/Cell모델별_Masking_시뮬레이션.html',OUT/'Cell모델별_Masking_시뮬레이션.html')
shutil.copyfile(ROOT/'20260915_082716'/RECIPE_NAME,OUT/RECIPE_NAME)
canonical=source.replace('./Cell모델별_Masking_시뮬레이션.html','./실행프로그램.html').replace('./'+RECIPE_NAME,'../'+STAMP+'/'+RECIPE_NAME)
(ROOT/'가공좌표생성자료/가공좌표생성_최종분석보고서.html').write_text(canonical)
legacy=source.replace('./Cell모델별_Masking_시뮬레이션.html','../'+STAMP+'/Cell모델별_Masking_시뮬레이션.html').replace('./'+RECIPE_NAME,'../'+STAMP+'/'+RECIPE_NAME)
(ROOT/'A3_LD/가공좌표생성방법_분석보고서.html').write_text(legacy)
(QA/'guide-section.html').write_text(guide)
(QA/'figures.json').write_text(json.dumps(list(figures)))
print(json.dumps({'folder':str(OUT),'figures':len(figures),'reportBytes':len(source.encode()),'engineChanged':False},ensure_ascii=False))
