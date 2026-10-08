# 0선방어 Flying Review — 스캐너별 셀 내부 측정위치

두 HTML을 같은 폴더에 두고 시뮬레이터를 엽니다. 기본 조건은 기존 문의 조건이며 2개/4개 모드 모두 계산상 통과합니다.

## 이번 변경

- 기존12개 입력에 **H01~H08 각각 셀 내 X·Y 16개 입력**을 추가했습니다. 숫자와 게이지가 연동됩니다.
- 좌표 원점은 각 Cell의 좌상단입니다. +Y는 역방향 진행 중 나중에 도착하는 방향입니다.
- Cell ID는 `1,11,21,31,5,15,25,35`로 고정하여 서로 다른 Cell 조건을 유지합니다.
- test0929의 **B07 실제 가공점 2.7 mm 격자**를 선택합니다. Head 소유권·Mask에 맞지 않는 점과 격자 밖 숫자는 불가로 표시합니다.
- 각 Head의 Cell 그림에서 선택점과 유효 가공점 위치를 확인합니다.
- 위치를 바꾸면 X 이동거리, 촬영 간 ΔY, 준비 여유, 최소 Stroke, 선배치 시간, 통과 안내, 수식 가이드를 함께 갱신합니다.
- 녹색은 다른 입력을 고정한 통과 범위입니다. 불가 시 검증한 통과 조정안을 제공하며, 추가 조정안은 펼쳐 볼 수 있습니다.

## 위치를 반영한 계산

```
실제 X = Cell 원점 X + 셀 내 X
X 이동거리 = |다음 실제 X − 이전 실제 X|
ΔY = Y Cell-to-Cell 간격 + 다음 셀 내 Y − 이전 셀 내 Y
촬영 간 가용시간 = ΔY / Y 등속속도
필요 준비 = max(노출 + X 이동 + 정착 + 선도착 여유 + Trigger/Jitter, 카메라 주기)
여유 = 가용시간 − 필요 준비
```

Y Cell간격200 mm·Y100 mm/s에서 H02 셀 내 Y를0.675→11.475 mm로 옮기면 H01→H02는2.108초, H02→H03는1.892초입니다. 앞 구간이 늘어난 만큼 뒤 구간은 줄어듭니다. 마지막점 Y가 증가하면 필요Stroke도 증가합니다.

기본 조건에서 H01 셀 내 Y43.875 mm는 가용시간1.568초가 준비1.703063초보다 짧아 불가입니다. H01 Y27.675 mm로 줄이거나 H02 Y16.875 mm로 늘리면 다른 입력을 유지한 채 통과합니다. 엔진으로 다시 계산한 조정안만 표시합니다.

## 기본값

| 항목 | 값 |
|---|---:|
| 역방향 Stroke | 2700 mm |
| 노출 / 허용 blur | 10 µs / 8 px |
| X 속도 / 가속 / 감속 | 200 mm/s / 150 / 150 mm/s² |
| Y 속도 / 가속 / 감속 | 100 mm/s / 150 / 150 mm/s² |
| Y Cell-to-Cell 간격 | 200 mm |
| X 정착 / 선도착 여유 | 50 ms / 20 ms |
| 셀 내 X, H01~H08 | 4.05, 4.05, 4.05, 6.75, 14.85, 25.65, 36.45, 47.25 mm |
| 셀 내 Y, H01~H08 | 모두0.675 mm |

기본 가공시간27.666667초≤30초, blur8 px=1 µm, 기판1500 mm Scanner통과는 등속 안입니다. 전체순환 최소Stroke2616.509333 mm, 30초 최대Stroke2933.333333 mm, 기판 내 최소 X 여유0.211016초입니다.

기판당2개는 H01·H02, H03·H04, H05·H06, H07·H08 네 기판으로 순환합니다. ReviewDone·X 이동 허가 후 다음 첫 선정점으로 선배치합니다. 180초 창에서 가장 긴 H08→H01 복귀5.119333초도 준비되며 기본 추가 대기는0초입니다. 기판당4개는 H01~04, H05~08 두 기판입니다. 기판 사이 여유가 같은 기판의 촬영 마감 부족을 보완하지는 않습니다.

## 가이드·자료·고정값

가이드 링크·자동연동·현재 조건 가이드 저장·돌아가기 링크 모두28개 입력과 모드·기판 번호를 유지합니다. 기존10개/12개 입력 URL은 새 항목에만 기본값을 추가합니다. 새28개 상태에서 누락된 값은 오류입니다.

3장 PPT는 기본 위치의 정적 수치와 새 입력 수식을 설명합니다. 실제 변경 조건은 HTML에서 확인합니다. Scanner–Review1467 mm의 가공·리뷰 중첩, Stroke 밖 촬영 제한,30초 제한을 유지합니다.

Basler a2a2600-20gcBAS + Mitutoyo378-810-3 M Plan Apo SL20x. 센서2.5 µm/총20x=0.125 µm/px, 총20x는200 mm 튜브렌즈+1x Relay 전제입니다. 기본18.5 fps, 최소노출2 µs, 노출 중 X 정지. Scanner폭110 mm·Head중심Pitch110 mm, 기판925×1500 mm, Cell77.76×46.08 mm입니다.

정착·선도착 여유는 입력이며0 ms도 허용합니다. Trigger50 µs·Jitter±5 µs는 고정입니다. 정착·여유를 줄일 때 실측 위치 안정·제어지연을 확인합니다. 실제 S-Curve·Follow Error·영상 검출성능·Frame/Vision 처리시간·반송 포함 전체 장비 Tact는 미계산입니다. ProcessDone과 ReviewDone은 실제 신호로 독립 판정합니다.

기존 사양 확인2026-10-06: [Basler](https://docs.baslerweb.com/a2a2600-20gcbas), [노출](https://docs.baslerweb.com/exposure-time), [Mitutoyo p20·29](https://www.mitutoyo.com/webfoo/wp-content/uploads/E4191-378_010611.pdf). 기하 소스6b19d7aaf0de / test0929.

## 재현

`node prepare_point_grid.js`는 제공된 레시피에서 B07 유효점 격자를 생성합니다. `node build.js`로 HTML·계산 JSON을 작성합니다. `node tests/engine.test.js`, `NODE_PATH=<linkedom·sharp 경로> node tests/dom.test.js`로 공학53개·DOM28개 검증을 실행합니다. 실제 브라우저 픽셀·터치 검증은 수행하지 못했으며 DOM 동작과 SVG 렌더링을 확인했습니다.

PPT는 공급 runtime의 `@oai/artifact-tool`과 `update_timing_ppt.mjs`를 사용합니다. `references/timing_inputs_source.pptx`의3장 구조를 가져와 관련 문구만 수정합니다. private build 폴더에서 runtime node_modules 링크를 제공하고 `REVIEW_WORKSPACE`·`REVIEW_PPT_OUTPUT`·runtime 경로를 설정합니다. `REVIEW_FONT_FILE`에 공식 Noto Sans KR TTF를 지정하면 해당 폰트로 렌더링합니다.
