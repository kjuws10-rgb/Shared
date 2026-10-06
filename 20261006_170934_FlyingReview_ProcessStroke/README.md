# 0선방어 Flying Review — 역방향 가공 Stroke·30초 검토

검토 범위를 **가공대기 위치에서 출발하여 입력 Stroke 끝에서 정지하는 역방향 구간**으로 좁혔습니다. 사용자가 선택한 Stroke 정의에 따라 Y 가속·등속·감속을 모두30초 판정에 포함합니다. 정방향·반송·기타60초 및 전체150초 Tact 판정을 제거했습니다.

- `FlyingReview_8Head_Simulator.html`: 입력9개(기존8개+역방향Stroke), 2/4점 선택, 현재기판, 역방향 재생.
- `FlyingReview_Formula_Guide.html`: 시뮬레이터와 같은 입력을 같은 계산 엔진으로 계산하여 수식·결과·도식에 반영.
- `0선방어_검토자료.pptx`: 위 내용을 편집 가능한3장으로 요약. PPT는 기본 예시 수치이며 HTML처럼 자동 갱신되지 않습니다.

두 HTML은 외부 라이브러리 없이 실행됩니다. 같은 폴더에 저장하고 시뮬레이터 상단의 **현재 입력으로 쉬운 수식 가이드 보기**를 누르면 입력9개·2/4모드·기판번호를 주소에 담아 전달합니다. 같은 출처에서 열린 가이드는 BroadcastChannel/storage event로 변경도 반영합니다. 파일로 직접 여는 `file://` 환경은 브라우저에 따라 채널·저장소가 제한될 수 있습니다. 주소 전달은 별도로 작동하며, **현재 조건 가이드 저장** 버튼은 입력을HTML 내부에 포함하므로 단독 파일로 열어도 같은 결과를 재현합니다. 저장된 가이드는 내보낸 시점의 조건을 유지합니다. 가이드→시뮬레이터 링크도 현재 조건을 전달합니다.

| 기본 예시: Y100 / X200mm/s, Y가감속500 / X가감속1000mm/s² | 결과 |
|---|---|
| 입력 Stroke | 2980mm(30초에서 역산한 예시, 실제 확정값 아님) |
| 가속+등속+감속 | 0.200+29.600+0.200=30.000초 |
| Stroke3000mm | 30.200초로30초 초과 |
| Stroke2600mm | 26.200초, 2/4점 모두 충족 |
| 등속 구간 | 0.200~29.800초 |
| 4점 마지막 노출 종료 | 25.931751초 |
| 8개 대표점 순환에 필요한 최소 Stroke | 2593.175600mm(노출±Jitter 뒤 감속거리 포함) |
| 30초 허용 최대 Stroke | 2980mm |
| 노출2µs / 허용blur2px | 1.6px=0.2µm |
| 최소 X준비 여유 H03→H04 | 0.729938초 |
| 2점 / 4점 모드 | 4기판 / 2기판 |
| 기본 가공시간 합계(전체 장비Tact 아님) | 120초 / 60초 |

S≥v²/(2a)+v²/(2b)일 때 T=S/v+v/(2a)+v/(2b). 짧은 Stroke는 삼각형 운동으로 T=√(2S(1/a+1/b))를 사용하며 설정속도에 도달하지 못하므로 등속 가공 불가입니다. 30초 허용 최대Stroke 역산은 두 운동형태를 모두 처리합니다.

**촬영 경계:** 마지막점이 단순히 Stroke 안에 있다는 것만으로 가능 판정하지 않습니다. 노출±Jitter 전체가 등속이어야 합니다. 예를 들어2590mm에서는 H04가 이동거리 안에 있지만 감속 중이므로 불가입니다. 2500mm에서는4점 중3점만 등속 구간에 들어오며 요구수량4점을 축소하지 않습니다. 미도달점의 필요 시각은 등속을 유지한다면 필요한 명목 시각이고, 해당점은 모의촬영 완료로 처리하지 않습니다. 재생은 입력 Stroke 끝에서 종료합니다.

고정 위치: 시작 StageY1982.5mm(Scanner 기판 진입 전500mm), 종료=1982.5−입력Stroke. 역방향 -StageY, Scanner→Review공통1467mm. Stage설계Stroke3960mm, ReviewX Stroke1025mm. 위치·Stroke의 실제 장비값과 다른 경우 수정이 필요합니다. 기본2980mm를 실제장비Stroke로 간주하지 않습니다.

대표점 H01C01/H02C11/H03C21/H04C32/H05C05/H06C15/H07C25/H08C36은 모두 다른 Cell입니다. 기존 test0929 엔진의 유효Shot·Mask·Head소유권을 확인한 BranchB07이며 고정8점의1회 순환을 계산합니다. 실제Process전체 종료를 기다리지 않고 해당점 가공 후 리뷰합니다. 기존test0929의 유효Shot 좌표범위843.2mm와 입력Process Stroke는 별개입니다. Process검토창과리뷰작업의 중첩을 전체창의Laser ON중첩으로 해석하지 않습니다. 실제ProcessDone은Scanner/Laser완료신호, ReviewDone은실제Frame·Vision결과로 독립판정합니다. 이 모델에는 완료신호 서비스지연이 포함되지 않습니다.

광학: Basler a2a2600-20gcBAS 기본2600×2128, 2.5µm pixel, Color·Global Shutter, 기본18.5fps, 최소노출2µs. Mitutoyo378-810-3 SL20x NA0.28, WD30.5mm, 분해능약1µm@550nm. 총20x는200mm튜브렌즈+1xRelay 전제, 물체면0.125µm/px는sampling 간격. blur=vY×노출µs/125. X는노출중정지합니다.

고정설계시간: X정착50ms, Guard20ms, Trigger지연50µs, Jitter±5µs, 해당점출사여유1ms, X Park0/선행준비2초. 실제S-Curve·FollowError·밝기·SNR·영상검출・Scanner/Laser/Frame/Vision처리시간은별도검증입니다. 0선방어자동Offset적용은포함하지않습니다.

검증: 수치23개와HTML DOM11개 통과. Stroke3000/2980경계, 최소Stroke경계, 미도달/감속중촬영금지, 삼각형운동, Camera blur/X준비, 실제Head소유권, 9개입력·모드·기판의URL전달, 열린가이드갱신, 단독가이드snapshot, 복귀링크, 입력오류처리를 확인했습니다. 실제SVG와PPT3장을렌더링해배치·한글·경계를확인했습니다. 전체브라우저픽셀·모바일터치검증은실행환경의Chromium socket제한으로미완료이며, DOM시험의live연결은동일출처채널을모의한시험입니다. 실제장비촬영성공은검증하지않았습니다.

재생성: `node build.js`, `python make_ppt.py`. 검증: `node tests/engine.test.js`, `node tests/dom.test.js`(linkedom0.18.12·sharp 필요). `tests/browser.test.js`는Chromium 실행허용환경에서추가확인용입니다. 원본기하검증소스는references폴더에있으며 과거의직렬Tact결과를현재모델에사용하지않습니다.

공식사양(확인2026-10-06): [Basler](https://docs.baslerweb.com/a2a2600-20gcbas), [노출표](https://docs.baslerweb.com/exposure-time), [Mitutoyo p20·29](https://www.mitutoyo.com/webfoo/wp-content/uploads/E4191-378_010611.pdf). 기하소스: Shared/20261002_101847_FlyingReview_Recipe_Light 및 A3 SW commit6b19d7aaf0de81271468ab7dac0fa15493172f38.
