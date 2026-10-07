# 0선방어 Flying Review — 기판 사이 X 선배치

현재 기판의 리뷰 후 다음 기판 투입까지 **3분 이상 여유**가 있다는 조건을 반영했습니다. 기판 사이에 다음 첫 선정점 X로 이동하고 정지·정착을 완료합니다. 매 기판마다 Park0으로 돌아가지 않습니다.

## 기본 운영: 기판당 2개 측정

| 기판 | 이번 기판 리뷰 | 리뷰 후 다음 첫 위치 준비 | 실제 ΔX(mm) | 이동+정착·여유(s) | 180초의 남는 시간(s) |
|---|---|---|---:|---:|---:|
|1매|H01→H02|H02→H03|100.0|1.703|178.297|
|2매|H03→H04|H04→H05|108.1|1.768|178.232|
|3매|H05→H06|H06→H07|110.8|1.789|178.211|
|4매|H07→H08|H08→H01 순환복귀|743.2|5.119|174.881|

**선배치 때문에 추가되는 대기 = max(0, 준비시간−180초) = 0초.** 가장 긴 복귀도 대기창에 들어갑니다. 180초는 ReviewDone·X 이동 허가 이후 다음 기판 투입까지 사용 가능한 창의 하한이며, 기판 시작 간격이나 장비 Tact가 아닙니다. 기판당4개 모드는 H01~04→H05 준비, H05~08→H01 복귀로 같은 정책을 사용합니다. 8개 Head 확인에 필요한 기판수는 각각4매/2매입니다.

## 현재 기판의 조건은 별도

- 입력10개: Stroke2700mm, 노출10µs, 허용blur8px, Y Cell-to-Cell 간격200mm, X속도200mm/s·가속150·감속150mm/s², Y등속100mm/s·가속150·감속150mm/s².
- 역방향 가감속 포함27.666667초≤30초. 기판1500mm Scanner통과는 등속 범위 안입니다.
- 이동blur8px=1µm로 허용 경계. 센서2.5µm/총20x=0.125µm/px. 노출 중 X는 정지합니다.
- 같은 기판의 촬영 간 가용시간은 `Y Cell 간격 ÷ Y 등속속도`. 기본200mm÷100mm/s=2초이며, 입력 변경 시 선정점 Y좌표·도착시간·최소Stroke·X 준비 여유를 함께 재계산합니다. 기본2/4모드 최소 X·취득 여유0.211016초.
- 마지막4점 노출26.165088초<Y감속27초. 전체순환 최소Stroke2616.509333mm,30초 최대Stroke2933.333333mm.
- 기판 Scanner·Review 동시통과20.003333~20.333333초. 이 위치 중첩은 실제LaserON과 별도이며, 해당 선정점 가공 후 리뷰합니다.

기판 사이 여유로 같은 기판의 촬영 마감 부족을 보완하지 않습니다. ProcessDone과 ReviewDone은 실제 신호로 독립 판정합니다. 다음 기판 전 목표점 위치·X속도0·정착 완료로 XReady를 확보하며, 초기Park0→H01 준비0.398634초는 기동1회 별도로 확보합니다.

## 고정점과 광학

Scanner→Review1467mm, 가공폭110mm, 모델Head중심Pitch110mm. 실제 이동거리는 두 선정점 X차입니다. 유효 BranchB07, Head소유권·Mask 검증, Cell1,11,21,31,5,15,25,35 모두 다름. 선정점 X는4.05,104.05,204.05,306.75,414.85,525.65,636.45,747.25mm입니다.

Basler a2a2600-20gcBAS(2.5µm,2600×2128,GlobalShutter,기본18.5fps,최소노출2µs), Mitutoyo378-810-3 M Plan Apo SL20x. 총20x는200mm튜브렌즈+1xRelay 전제. 정착50ms,Guard20ms,Trigger지연50µs,Jitter±5µs 고정. 선배치 예산은 이동+정착+Guard이며, 노출·Camera주기는 기판 내 조건으로 별도 확인합니다.

공식사양 기확인2026-10-06: [Basler](https://docs.baslerweb.com/a2a2600-20gcbas), [노출](https://docs.baslerweb.com/exposure-time), [Mitutoyo p20·29](https://www.mitutoyo.com/webfoo/wp-content/uploads/E4191-378_010611.pdf). 기하 소스6b19d7aaf0de / 기존레시피test0929.

## 산출물과 사용

- `FlyingReview_8Head_Simulator.html`: 2개모드 기본, 입력10개, Y Cell 간격 기반 촬영 간 가용시간, 기판별 선배치 흐름·예산·순환복귀, 기판 내 상세는 접기.
- `FlyingReview_Formula_Guide.html`: 현재 입력10개·모드·기판번호를 URL/같은출처 채널로 전달, Y Cell 간격과 선배치 수식도 동일 엔진 결과. 시뮬레이터의 ‘현재 조건 가이드 저장’은 조건을 파일에 내장합니다.
- `0선방어_검토자료.pptx`: 3장, 편집 가능한 도식·표. 기존 navy/gray 색과 Noto Sans KR 폰트를 적용하고 한글 script font를 명시했습니다.
- `FlyingReview_X_Timing_Diagnosis.png`: 현재 기판→선배치→XReady→다음 기판 흐름.
- `Calculation_evidence.json`, `Validation.json`: 전체 계산·검증 근거.

HTML두 파일을 같은 폴더에 두고 열면 링크가 연결됩니다. 다른 출처/브라우저 탭에서 자동연동이 막히면 현재조건 URL 또는 저장한 가이드 파일을 사용합니다. 실제S-Curve·FollowError·정착 실측·영상 검출성능·Frame/Vision처리시간·반송 포함 장비 Tact는 미계산입니다.

## 재현

`node build.js`, `node tests/engine.test.js`. DOM검증은 `linkedom`과`sharp`를 NODE_PATH에서 제공하고 `node tests/dom.test.js`. 35개 공학검증,16개 DOM검증 통과. 실제HTML의SVG도 렌더링 확인. Chromium socket제약 때문에 브라우저 픽셀·터치 검증은 완료하지 못했습니다.

PPT는 공급 runtime의`@oai/artifact-tool`로`make_ppt.mjs`를 실행합니다. `.ppt-build`에 runtime node_modules 링크와 builder복사, REVIEW_WORKSPACE를 절대경로로 설정합니다. `REVIEW_PPT_OUTPUT`은 매번 새 출력폴더로 지정해야 finalizer가 기존 결과를 덮어쓰지 않습니다. 3장·표2개·폰트·구조·기하검증 통과 후 최종파일 각슬라이드를 렌더링해 확인했습니다. 실제 PowerPoint 장치에서는 별도 확인이 필요합니다.
