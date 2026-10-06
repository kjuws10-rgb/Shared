# 0선방어 Flying Review v5 — 전문가 PPID Recipe와 밝은 테마

[FlyingReview_8Head_Simulator.html](FlyingReview_8Head_Simulator.html)을 내려받아 브라우저에서 엽니다. 외부 라이브러리·네트워크·장비 연결 없이 실행하는 단일 HTML입니다.

## 이번 변경

- 기본 운전 입력은 Y속도·X속도·노출·품질 기준으로 유지했습니다. Cell 배치와 Recipe 작성은 **전문가 · Recipe/Mask** 탭 및 왼쪽 전문가 편집 버튼에 추가했습니다.
- PPID 3열 CSV 가져오기·붙여넣기·예제·내보내기를 제공합니다. 원본 CSV의 미계산 Laser/Head/Review 항목을 보존합니다.
- 개별 Cell Offset X/Y, Model1~5, 회전각을 편집합니다. 격자 자동 작성과 전체 Cell 배치 미리보기를 제공합니다.
- 모델별 Pixel 크기, 활성 Hole0~3, Hole X/Y/W/H, 사각형 Edge, CHESS1~5를 실제 유효 Shot 판정·가까운 점 스냅·자동 배치·시간 계산에 반영합니다.
- 편집 초안은 적용 전까지 활성 계획과 누적 기록을 유지합니다. 적용은 검증 후 수행하며, 기존8점은 보존하고 새 기하로 재검증합니다. 유효하지 않은 점은 오류를 표시합니다.
- 화면 전체와 SVG 기판·좌표 지도·Cell 확대도·그래프를 밝은 테마로 갱신했습니다. 회전 Cell의 확대도에는 고정 Global Y Camera 면을 올바른 로컬 방향으로 표시합니다.
- Glass 전환·되감기에서도 측정된 점을 사이클 누적으로 유지합니다. 새 사이클·처음·새 조건/Recipe/계획 적용 시 초기화합니다.

## 파일

| 파일 | 용도 |
|---|---|
| [FlyingReview_8Head_Simulator.html](FlyingReview_8Head_Simulator.html) | 독립 실행 시뮬레이터 |
| [Recipe_Masking_Guide.html](Recipe_Masking_Guide.html) | PPID·Cell·회전·Hole/Edge/CHESS의 쉬운 설명 |
| [FlyingReview_Formula_Guide.html](FlyingReview_Formula_Guide.html) | 운동·노출·블러·역산·장수 계산 14개 단원 |
| [test0929_ppid.csv](test0929_ppid.csv) | 분석 기준 원본 Recipe 예제,5모델/45Cell |
| [Default_8Head_conditions.json](Default_8Head_conditions.json) | 기본 활성 조건과8점 저장 |
| [Example_OneHeadPerCell_conditions.json](Example_OneHeadPerCell_conditions.json) | PPT의40Cell/Cell당1Head/4점 예시 재현 |
| [FlyingReview_Customer_OneHeadPerCell_2Slides.pptx](FlyingReview_Customer_OneHeadPerCell_2Slides.pptx) | 고객 설명 PPT2장, 편집 가능한 Cell 도식·표·차트 |
| [Customer_OneHeadCell_evidence.json](Customer_OneHeadCell_evidence.json) | PPT 예시 좌표와 계산 근거 |
| [Preview_Recipe_Masking.png](Preview_Recipe_Masking.png) | 실제 전문가 SVG 계산 미리보기 |
| [Preview_4Glass_Sequential.gif](Preview_4Glass_Sequential.gif) | 밝은 테마의4Glass 순환·누적 동작 도식 |
| [Preview_4Glass_Sequential.png](Preview_4Glass_Sequential.png) / [Preview_Cell_Detail.png](Preview_Cell_Detail.png) | 정지 미리보기 |
| src / tests / scripts / build.cjs | 편집 소스·회귀 시험·재생성 코드 |

## 전문가 Recipe 사용

1. 전문가 Recipe/Mask를 열고 「test0929 PPID 예제」 또는 CSV를 불러옵니다.
2. Cell을 클릭해 모델을 선택하고 모델별 Mask를 확인합니다. 모델 정의·Cell 목록을 펼쳐 수정합니다.
3. 전체 기하 오류가 없으면 「Recipe 검증·적용」을 누릅니다. 기존8점의 Cell·Shot·Branch는 유지합니다.
4. 새 모델의 Shot 범위를 벗어나거나 Mask로 제외된 점은 좌표 설정에서 수정합니다. 자동 배치는 명시적으로 버튼을 누를 때만 수행합니다.
5. 상단 조건 JSON 저장은 활성 운전 조건 전체를 저장합니다. 전문가 PPID 저장은 편집 초안을 저장합니다.

Cell X/Y는 Global값 자체가 아니라 **AK 기준의 첫 Pixel Offset**입니다. Global은 AK Margin+Cell Offset+회전한 로컬 좌표입니다. 모델별 실제 크기는 Pixel수×PIXEL_SIZE이며 Shot수는 floor(Pixel수/PITCH)입니다. Shot 중심과 Branch 오프셋을 모두 회전합니다.

Mask 판정은 회전 전 로컬에서 진행합니다. 활성 Hole만 사용하며, 어떤 DOE 분기라도 접촉하면 Shot 전체를 제외합니다. ROUND 필드는 원형 Radius가 아니라 사각형 Edge 제외량입니다. 8개 Edge 값이 전부≤0.001mm이면 비활성입니다. CHESS는 (열−행)%CHESS=0을 유지합니다. 자세한 수식·숫자 예제는 Recipe 설명서에 있습니다.

## 고객 PPT — Cell마다 Scanner 하나

이번 PPT의 그림은 **8열×5행=40Cell / X Pitch110mm**인 설명용 예시입니다. 실제 원본 test0929의9열×5행=45Cell/Pitch100mm와 구분합니다. 모든 Shot의 Head 소유권을 검사하여 각 Cell의 담당 Head가 정확히 하나임을 확인했습니다. 원본 기하를 임의로 바꾼 실제 장비 Recipe라는 의미가 아닙니다.

| 예시 조건 | 결과 |
|---|---|
| Y100 / X200mm/s, Y가감속500 / X가감속1000mm/s² | 사다리꼴 명목 계산 |
| H01·H02 ΔX110mm / ΔY200mm | 도착2s / X이동0.75s |
| 정착50ms + Guard20ms + 지연·노출·Jitter70µs | 준비0.82007s / 여유1.17993s |
| 예시 대표점8개 / 최대4점/기판 | 2점운전4Glass,4점운전2Glass |
| 같은Y인 H01·H05 등 | 8점을1Glass에서 전부 취득 불가, 분할 필요 |

PPT와 같은 결과는 **Example_OneHeadPerCell_conditions.json**을 상단 조건 불러오기로 열면 확인합니다. 본 시뮬레이터의 기본45Cell 자동 제안은 별도 좌표로 최대8점/기판이 명목상 성립합니다. **점수 결론은 레시피와 지정 좌표에 따라 바뀝니다.**

## 적용 범위

- Model1~5·Cell 회전·Hole/Edge/CHESS는 반영합니다. Default/Recipe Offset, Align/APC·왜곡, 실제 Scanner/Laser 서비스시간 및 영상 합/불은 미적용입니다.
- 미계산 PPID 값은 CSV에 보존합니다. `PROCESS,STAGE_SPEED`도 원본값을 보존하며 시뮬레이션 Y속도는 기본 운전 입력으로 별도 관리합니다. 기하 CSV는 장비 가공용 승인 파일을 뜻하지 않습니다.
- 최대150Cell, 모델당최대10,000Shot, 전체500,000Shot로 입력을 제한합니다. CSV는1MB 이하, Cell 외곽이 회전 후 Glass 밖이면 적용을 막습니다.
- 1467/1847mm downstream거리, 가감속·정착·원점 및 기타60s는 설계 가정입니다. Stage Stroke3960/Review1025mm를 사용하며 Limit/Stopper를 더하지 않습니다.
- Camera23FPS/10µs와 Blur1µm는 비교용 조건입니다. Blur1µm는 약5.8 object pixel이며 실제 검출 품질을 보증하지 않습니다. 1pixel 기준에서는 현 조건이 불가합니다.
- 취득 계획완료는 실제 Frame ACK 또는 Vision PASS가 아닙니다. Camera Y는 고정이고 기판 Y가 지나갑니다.

## 검증과 재생성

수치30 + 수식18 + 운영10 + 기존DOM33 + PPID/Model/Mask15 + 전문가DOM12 = **118개 검증**. PPID 왕복·미계산필드보존, 활성 Hole수·Edge접촉·CHESS, 회전 Shot/Branch, 모델별 Shot한도, Mask전부제외, 초안과활성분리·원자적적용·누적초기화를 포함합니다. PPT2장은 표·차트 편집성, 패키지·슬라이드 경계 검증 후 최종파일을 렌더링해 확인했습니다.

실행환경의 브라우저 권한 제한으로 실제 Chrome 픽셀/모바일 조작 검증은 완료하지 못했습니다. DOM·수치·SVG도식과 PPT 렌더 검증이며 실제 장비/영상 검증은 별도입니다.

```sh
node build.cjs
node tests/engine.test.cjs
node tests/formulas.test.cjs
node tests/operator.test.cjs
node tests/recipe.test.cjs
NODE_PATH=/path/to/linkedom/node_modules node tests/dom.test.cjs
NODE_PATH=/path/to/linkedom/node_modules node tests/recipe-dom.test.cjs
```

DOM/미리보기 의존성은 linkedom0.18.12입니다. GIF/PNG는 실제HTML이 만든 SVG의 계산 상태이며, 브라우저/장비 녹화가 아닙니다. 외부 파일을 수정하지 않습니다. PPT 작성은 `@oai/artifact-tool` 런타임과 Presentations finalizer, Noto Sans KR를 사용합니다. 재생성 시 builder의 환경변수를 설정하고 Korean fontconfig를 사용하세요.

소스 기준: `kjuws10-rgb/A3_LD_Process_SW_IPS` commit `6b19d7aaf0de81271468ab7dac0fa15493172f38`. `CCellPatternCalculator`, `CRecipeShotMaskingPlan`, `CRecipeModelPixelCountReader`, `CReviewManager`의 명목 규칙을 반영합니다. 최신 소스 자동 동기화 도구는 아닙니다. 기존 Shared 작업 폴더는 보존했습니다.

