# 0선방어 Flying Review — Basler / Mitutoyo 20x SL

`FlyingReview_8Head_Simulator.html`을 브라우저에서 엽니다. 두 HTML은 외부 라이브러리 없이 각각 실행됩니다. 같은 폴더에 두면 서로 이동할 수 있습니다. `0선방어_검토자료.pptx`는 편집 가능한 도식·텍스트로 구성한 3장 자료입니다.

입력: 노출시간, 허용 이동 blur(pixel), X·Y 속도, X·Y 가속도·감속도 8개. 측정 모드는 기판당 2개 또는 4개 스캐너이며 헤드당 1점입니다. 나머지는 HTML의 접힌 고정값 설명과 `Calculation_evidence.json`에 기록했습니다.

| 기본 계산 조건 | 결과 |
|---|---|
| Y100 / X200 mm/s, Y가감속500 / X가감속1000 mm/s² | 사다리꼴 운동 모델 |
| 노출2µs / 허용blur2px | 이동blur1.6px=0.2µm |
| H03→H04: ΔX200mm / ΔY200mm | X이동1.2초 / 도착간격2초 / 준비1.270062초 / 여유0.729938초 |
| 2개/기판 | 4기판 / 계획150초×4=10분 |
| 4개/기판 | 2기판 / 계획150초×2=5분 |
| 1pixel 제한 / 최소노출2µs | Y≤62.5mm/s |
| 전체 Stage 이동 / 첫~마지막 가공점 통과 | 39.504875초 / 12.232초 |
| Stage 이동+기타60초+영상여유1초 | 계산Tact100.504875초 / 목표150초 |

대표점은 H01C01, H02C11, H03C21, H04C32, H05C05, H06C15, H07C25, H08C36입니다. 전체8개의 Cell 번호가 모두 다릅니다. 기존 test0929 엔진의 유효 Shot·Mask·Head 소유권 검증을 통과한 Branch B07을 사용합니다. 동일한 고정8점을 2개/4개 단위로 순환합니다. 시간 조건이 맞지 않으면 요구점수를 줄이지 않고 불가로 표시합니다. 장수는 고정 대표점8개의1회 확인이며 전수검사 장수가 아닙니다.

카메라: 2.5µm pixel, 2600×2128 기본영상, Color·Global Shutter, 기본18.5fps, 최소노출2µs. 렌즈: 378-810-3 SL20x, NA0.28, WD30.5mm, 분해능약1µm @550nm. 200mm 튜브렌즈·1x Relay를 포함한 총배율20x를 가정합니다. 물체면0.125µm/px는 sampling 간격이며 측정 정확도가 아닙니다.

기존 설계 가정: 정착50ms, Guard20ms, 지연50µs, Jitter±5µs, 기타60초, 영상여유1초, Review–Scanner 홀수1467mm / 짝수1847mm(추가380mm), Stage Stroke3960mm / Review X1025mm. 실제 장비 확정 사양으로 표시하지 않습니다. X는 노출 중 정지하고 Y는 등속입니다. Trigger 지연과 노출 절반을 선행 보정합니다. 모든8Head 활성, 가공 후 측정 전제입니다. 0선방어 자동 Offset 적용은 수행하지 않습니다.

검증: 수치16개와 HTML DOM 동작9개(입력8개, 2/4모드, 기판 순환, 모의촬영 애니메이션, blur/노출/시간 위반, 빈값 복구, 가이드 수치) 통과. 실제 HTML의 SVG를 렌더링해 확인했습니다. PPT를 PDF로 렌더링해3장과 배치·한글·슬라이드 경계를 확인했습니다. HTML 전체의 브라우저 픽셀·모바일 터치 검증은 실행환경의 Chromium socket 제한으로 완료하지 못했습니다. 실제장비·영상PASS·Follow Error·SNR·Scanner/Laser처리시간 검증은 별도입니다.

재생성: `node build.js`, `python make_ppt.py`. 수치검증: `node tests/engine.test.js`. DOM검증은 linkedom0.18.12·sharp가 필요합니다. `references`는 재현을 위한 기존 Shared 엔진·조건입니다. `tests/browser.test.js`는 브라우저 실행이 허용되는 환경에서 추가 확인할 수 있습니다.

공식 사양(확인2026-10-06): [Basler 카메라](https://docs.baslerweb.com/a2a2600-20gcbas), [Basler ExposureTime 표](https://docs.baslerweb.com/exposure-time), [Mitutoyo 카탈로그 p20·29](https://www.mitutoyo.com/webfoo/wp-content/uploads/E4191-378_010611.pdf). 기하 기준: Shared/20261002_101847_FlyingReview_Recipe_Light 및 A3 SW commit6b19d7aaf0de81271468ab7dac0fa15493172f38.
