# 0선방어 · 8 Head Flying Review 시뮬레이터 v4

`FlyingReview_8Head_Simulator.html`을 다운로드한 뒤 Chrome/Edge 등 브라우저에서 엽니다. 설치·서버·인터넷이 필요 없는 단일 HTML입니다. GitHub 파일 화면은 실행 화면이 아니므로 Raw/Download로 받아서 열어야 합니다.

## 이번 버전의 보완

- **핵심 입력으로 간소화**: 기본 화면은 Stage Y속도, Review X속도, 노출시간 및 품질 기준 4항목입니다. Glass당2/4/8 상한과8 Head 좌표는 화면에서 선택합니다. Recipe/Head/Mask/DOE, −Y·자동 경로·등속 조건, Encoder16000 및30/150초 예산은 현재 기준값으로 고정 표시합니다. 가감속·정착·거리·축 원점 등 실측값은 접힌 전문가 설정으로 분리했습니다. 다른 Recipe/장비 사양은 조건 JSON으로 가져옵니다.
- **맞는 조건과 변경 안내**: 좌표, Stage Stroke, Review X범위,30/150초,Camera/Blur,실제 Glass 계획을 각각 표시합니다. 미성립 유형별로 Y점 변경, Glass 분할, 노출·Stage/X속도 변경을 안내합니다. 숫자 적용 버튼은 선택한 상한에서 전체 고정점 커버·품질·복귀·시간까지 정방향 검증한 경우에만 표시합니다. 허용 Blur를 자동 완화하지 않으며 Camera 최소노출·등록 FPS 사양을 넘는 제안은 적용하지 않습니다.
- **사이클 누적 표시**: Glass가 바뀌어도 이미 취득한 Head 점과 Cell·추적 행의 녹색을 유지합니다. 이전 시각으로 이동해도 누적은 유지합니다. 전체 사이클을 마친 뒤 새 반복 사이클 시작, 「처음」, 또는 조건/좌표/그룹 변경 시 초기화합니다. 이번 Glass 완료 개수와 사이클 누적 개수를 분리합니다. 새 기판에 과거 마크를 표시하는 것은 순환 누적 오버레이입니다.
- **도면 Stroke 반영**: Stage3960mm,Review1025mm. Limit3980/1033mm·Stopper Gap은 정상 Stroke에 더하지 않습니다. 기본 Stage 이동3930.4875mm는29.5125mm의 거리 여유가 있습니다. Review 요구 이동범위747.25mm(0~1025 등록 가정)는1025mm 안에 듭니다. 절대 시작·종점/원점 등록은 현장 확인 대상입니다. Camera 사양 기본23FPS보다 높은 입력은 불가로 판정합니다.
- **고객사 설명 2장**: [FlyingReview_Customer_2Slides.pptx](FlyingReview_Customer_2Slides.pptx). 2점이면 4 Glass, 4점이면 2 Glass로 운영하며, 가장 빠듯한 H06/H07 구간의 시간 여유 203.43ms를 설명합니다. 기본 제안 좌표의 8점 명목 성립과 영상 품질 실증은 구분합니다. 표와 시간 비교 차트는 편집 가능한 PowerPoint 객체입니다. [1장 미리보기](Customer_Slide_1.png) / [2장 미리보기](Customer_Slide_2.png).

## 수식과 통과 화면

- **쉬운 수식 설명 14장**: 단위 → 좌표 → Y 도착시간 → X 가감속 → Trigger/FPS → Blur → 최초·복귀 → 30/150초 → 역산 → Glass 장수. 기호·단위·계산 이유·숫자 대입·판정을 설명하며 입력과 Head 선택에 연동합니다. 110 mm/200 mm/s를 단순히 0.55초로 보는 오류와, 짧은 2.7 mm 이동의 삼각형 가감속을 별도 예제로 설명합니다.
- **별도 설명 자료**: [FlyingReview_Formula_Guide.html](FlyingReview_Formula_Guide.html)은 기본 조건의 독립 실행 읽기용 설명서입니다. 운영 Flow, 실패 처리, 실측 가정과 재현 입력 스냅샷을 포함합니다. 시뮬레이터의 「현재 조건 설명서 저장」은 변경한 입력과 비교 Head가 반영된 HTML을 저장합니다. 목차로 이동하거나 브라우저 인쇄를 사용할 수 있습니다.
- **Jitter 여유 보완**: 이전 촬영의 최악 ExposureEnd(+J)와 다음 가장 이른 Trigger(−J)를 각각 확보합니다. 최초 Park 준비 마감에도 다음 −J를 적용하고 수식·역산·Shot 단계 이동을 동일하게 맞췄습니다. 기본 그룹은 그대로이며 최소 X 여유는 203.430 ms입니다.

전체 기판 재생·Cell 상세·Head 순차 그룹을 유지하며 GIF/PNG도 v4의 사이클 누적 상태로 다시 생성했습니다. 미리보기는 동작 도식이며 실제 Camera 노출을 녹화한 것이 아닙니다.

- **전체 기판 통과**: 45 Cell과 검사점이 Stage 시작부터 종료까지 화면 안에서 함께 Y 이동합니다. 화면 좌표계를 고정하므로 Camera Y는 변하지 않으며 X만 이동합니다. 기존 ATM 근접 보기와 화면 확대도 유지했습니다.
- **Head 순차 운영 기본값**: 2점 상한은 H01·H02 → H03·H04 → H05·H06 → H07·H08, 4점 상한은 H01~H04 → H05~H08입니다. 고정점의 타이밍이 성립하지 않으면 순서를 유지하면서 그룹을 더 나눕니다. 비인접 Head까지 묶는 최적 분할은 사용자가 선택할 때만 적용합니다.
- **촬영 시점 이동**: X 선도착 / Trigger 명령 / Jitter를 포함한 최악 노출 종료를 선택한 뒤 이전·다음 촬영이나 Head 버튼으로 이동합니다. Glass 경계를 넘어 같은 계획 ID를 추적합니다.
- **Cell / Shot / DOE 확대**: Cell 전체 Shot 중심, Mask Skip, 선택 Shot, DOE 4×4의 실제 B07 좌표, 현재 Review 통과 면을 보여줍니다. 다음 검사점을 자동으로 따라가거나 원하는 Head를 고정할 수 있습니다.
- **계획 상태 표시**: 이번 Glass Head, 가공 전·완료, X 선도착, Trigger, 취득 계획완료와 다른 Glass 예정 상태를 표시합니다. 계획용 Glass/Point/Frame ID이며 실제 장비 ACK·영상 PASS를 흉내내지 않습니다.
- **물류 대기 생략**: 화면 재생만 짧게 합니다. Stage 복귀는 여전히 모델 범위 밖이며 계산 Tact·Glass 수는 변하지 않습니다.
- **수치 검증 보완**: 노출의 Stage 경계·등속 구간·가공 후 대기와 최후 Readout에 Jitter를 반영합니다. 삼각형/사다리꼴 가감속 프로파일의 노출 블러는 Jitter 구간 안의 극값까지 검사합니다.

[4 Glass 순차 통과 미리보기](Preview_4Glass_Sequential.gif) · [정지 화면](Preview_4Glass_Sequential.png) · [Cell/DOE 확대도](Preview_Cell_Detail.png)

미리보기는 HTML이 생성한 실제 SVG 도식의 계산 상태를 렌더링한 것입니다. 배속 및 촬영 강조를 적용하고 물류 복귀는 생략했습니다. 실제 브라우저 녹화·장비 영상·Vision 합/불 결과가 아닙니다. [이전 v1](../20261001_171403_FlyingReview/)은 보존했습니다.

## 범위

한 Head마다 고정 가공점 하나, H01~H08 총 8점의 순환 검사입니다. 기판 하나가 Y 방향으로 MOF 가공 후 ATM Review Camera를 통과합니다. Camera는 X축만 움직이며 Y축 Flying Vision은 기판 이동과 위치 Trigger로 구현하는 명목 설계 모델입니다.

기존 [test0929 분석 보고서](../A3_ZeroDefense_test0929_20260930/report.html)의 **70개 Cell–Head 대표점 / 35 Glass 전수 대표 커버**와는 다른 목표입니다. 이번 범위는 전체 Cell의 검사가 아닌 **지정한 8개 Head 고정점의 1회 커버**입니다. 기존 보고서 및 장비 코드는 수정하지 않았습니다.

## 화면과 사용법

1. 첫 화면은 기본 조건에서 8점 단일 Pass가 성립하는 자동 배치입니다. `재생`을 누르면 기판 전체·45 Cell·고정점이 Y로 함께 이동하고 ATM Camera만 X로 이동합니다.
2. `Glass당 상한`을 2점 또는 4점으로 변경하면 선택한 Glass 그룹 정책 안에서 최소 Glass 분할이 계산됩니다. 기본 `Head 순차 그룹`은 Head를 건너뛰지 않고 묶습니다. `Glass 수·여유 최적 분할`은 비인접 Head를 묶을 수 있습니다. 촬영 순서 기본값도 `H01 → H08` 제한이며, 좌측에서 `Y 도착 순서`로 변경할 수 있습니다. `다음 Glass`, 시간 슬라이더, 배속·반복·화면 확대를 지원합니다.
3. `같은 Y`, `2점/Pass`, `4점/Pass` 예시 버튼으로 배치의 영향을 비교합니다. 버튼 이름은 예시이고 입력 조건 변경 후 성립 개수는 달라질 수 있습니다.
4. `8점 좌표 설정`에서 Head별 Cell, Shot 열/행, DOE Branch를 지정합니다. 글로벌 X/Y를 입력하거나 지도에서 클릭하면 선택 Head의 가장 가까운 유효 가공점으로 스냅하고 변경 거리도 표시합니다.
5. 기본 입력에서 Stage Y/X 속도·노출·품질 기준을 선택합니다. 「조건이 맞지 않을 때 변경 방법」에서 원인과 검증한 제안을 확인합니다. 전문가 설정은 실측 가감속·정착·Camera 주기·지연·거리/원점을 반영할 때 사용합니다. 설계 Stroke·Recipe·시간 예산은 읽기용으로 고정 표시합니다.
6. `역산·조건 제안`에서 전체 요청점을 한 Glass에서 찍기 위한 Y속도 구간, X 최소속도, 가감속 배율, FPS, 노출 상한, Y 간격을 확인합니다. 제안 적용 버튼은 실제 장비를 변경하지 않고 시뮬레이터 입력만 변경한 뒤 전 조건을 재검증합니다.
7. 조건 JSON 저장/불러오기와 추천 촬영 스케줄 CSV 내보내기를 지원합니다. `Default_8Head_conditions.json`은 초기 조건 복원용입니다.

기판 지도와 기본 전체 통과 보기는 항상 전체 Cell을 보여줍니다. `ATM 근접` 보기에서는 입출구의 기판 일부가 화면 밖으로 이동합니다. 장비 화면 X/Y 축척은 다릅니다. 촬영 링은 관찰용으로 표시 시간을 늘렸으며 실제 노출시간은 아닙니다. Cell 녹색은 선택점의 취득 계획완료이지 Cell 전수 검사 완료 또는 영상 PASS가 아닙니다. 새 Glass는 이번 Glass의 완료 개수만0부터 시작하며 이전 Head의 녹색은 사이클 누적으로 유지합니다. 이전 시각을 조회해도 누적은 유지하고 새 사이클/새 계획에서 초기화합니다.

## 기본 계산 결과

Stage 100 mm/s, a/d 500 mm/s². Review X 200 mm/s, a/d 1000 mm/s². X 정착 50 ms, Guard 20 ms. Camera 23 FPS, 노출 10 µs, 지연 50 µs, Jitter ±5 µs, 지연·노출 중심 보상 ON. 임시 Blur 허용 1 µm, Pixel 3.45 µm / 20×. 가감속·정착·Camera 최소노출·기타시간 등은 장비 확정 사양이 아닌 입력 가정입니다.

| 포인트 배치 | 한 Glass 물리 최대 | 8점 1회 커버 |
| --- | ---: | ---: |
| 모두 같은 Y | 1점 | 8 Glass |
| 2개 Y 그룹 예시 | 2점 | 4 Glass |
| 4개 Y 그룹 예시 | 4점 | 2 Glass |
| 8 Head 자동 후보 배치 | 8점 | 1 Glass |

기본값의 Head 순차 운영 결과입니다. 자동 배치의 고정점은 다음과 같습니다. DOE B07을 사용합니다.

| Head | Cell | Shot 열/행 | Global X (mm) | Global Y (mm) |
| --- | ---: | --- | ---: | ---: |
| H01 | 1 | 28 / 1 | 89.7500 | 16.1750 |
| H02 | 11 | 28 / 1 | 189.7500 | 216.1750 |
| H03 | 22 | 2 / 1 | 319.5500 | 416.1750 |
| H04 | 22 | 3 / 17 | 322.2500 | 459.3750 |
| H05 | 33 | 9 / 1 | 538.4500 | 616.1750 |
| H06 | 33 | 10 / 17 | 541.1500 | 659.3750 |
| H07 | 44 | 17 / 1 | 760.0500 | 816.1750 |
| H08 | 44 | 18 / 17 | 762.7500 | 859.3750 |

표의 좌표는 명목 계산 후보이며, 실기 적용은 거리·좌표·타이밍 실측 및 승인 후 진행해야 합니다.

기하학적 메인 가공 구간 12.232 s, 기판 전체 통과 Stage 구동 39.504875 s. 영상처리 Tail 1 s + 기타 물류·Align·복귀 60 s 가정으로 1 Glass Tact는 100.504875 s입니다. 이 자동 배치를 그대로 쓰고 Glass당 상한만 2/4/8로 바꾸면 4/2/1 Glass입니다. 8점 단일 Pass의 가장 작은 X/Frame 시간 여유는 약 203.430 ms입니다.

| 기본 자동 좌표 · 상한 | Glass별 검사 순서 | 사이클 모델 시간 |
| --- | --- | ---: |
| 2점 | G1: H01→H02 / G2: H03→H04 / G3: H05→H06 / G4: H07→H08 | 402.0195 s |
| 4점 | G1: H01→H02→H03→H04 / G2: H05→H06→H07→H08 | 201.00975 s |
| 8점 | G1: H01→H02→H03→H04→H05→H06→H07→H08 | 100.504875 s |

`한 Glass 물리 최대`는 모든 부분집합에서 구한 상한입니다. Head 순차 정책의 실제 그룹 또는 사용자가 설정한 상한이 그 점수를 항상 달성한다는 의미는 아닙니다. 입력 조건·고정점이 변경되면 모든 표를 다시 계산합니다. Cell 첫 Shot Row 제한은 별도 옵션이며 기본 8점 후보에는 Row17도 포함됩니다.

같은 Y의 다른 X는 같은 순간에 Camera Y를 지나갑니다. FPS만 높이는 것으로 해결할 수 없습니다. 필요하면 Y 위치를 바꾸거나 Glass를 나눕니다. Scanner의 홀짝 Y차 380 mm는 가공→Review 지연에 쓰며, 촬영점 사이의 ΔY를 대신하지 않습니다.

중요: 100 mm/s × 10 µs = 1 µm 이동 블러이며, 3.45 µm / 20× 광학계의 약 **5.80 object pixels**입니다. 임시 1 µm 허용 기준에서 8점이 성립한다는 것이 1 px 품질을 보증하지 않습니다. 1 px=0.1725 µm 기준을 넣으면 현재 기본 조건은 불가로 판정합니다.

## 좌표·속도 계산

자세한 유도와 숫자 대입은 별도 설명 HTML 및 시뮬레이터 「수식·상세 설명」 탭을 참고하세요. 비교 Head 선택은 계산 설명만 바꾸고 실제 검사점·Glass 배정은 바꾸지 않습니다. 기본 H01→H02는 ΔX100 / ΔY200 mm, Y 간격2초, X 가감속 이동0.7초입니다. H03→H04는 ΔX2.7 / ΔY43.2 mm, 간격0.432초, X 이동0.103923초입니다. H06→H07은 ΔX218.9 / ΔY156.8 mm, 간격1.568초, X 이동1.2945초 및 정착·Guard·Trigger/노출·양쪽 Jitter 반영 후 X 여유0.20343초입니다.

30초 기하 가공 구간의 등속 속도 하한은 1223.2/30=40.773333 mm/s입니다. 전체 Stage 이동 가감속과 기타61초를 포함해 Tact150초를 맞추는 Stage 시간 하한은 약44.206696 mm/s입니다. 이는 현재 Readout 대기를 고정한 설명용 경계이며 전 조건 역산과 다릅니다. 최소노출10 µs에서 1 px(0.1725 µm)의 Y속도 상한17.25 mm/s와 겹치지 않으므로 Stage만 감속하여 모든 조건을 맞출 수 없습니다.

- Model1/Rotation0. Global = AK Margin + Cell offset + Shot centre + DOE Branch offset.
- Global X/Y와 Review X/Stage Q는 다른 좌표계로 표와 화면에 분리하여 표시합니다. `ReviewX=ReviewAKX+GlobalX−AKMarginX`, `Q=ReviewAKY+direction×(GlobalY−AKMarginY)`.
- `CShotCoordinatePlanBuilder`의 소유권 기준차 10 mm(ESC edge 5 + scanner-centre 5), AK 15.5 mm, H01 AK X 39.5 mm, Head Pitch/Field 110 mm를 적용합니다. 해당 Shot의 **중심**으로 Head를 배정하고 Branch의 실제 글로벌 가공점을 선택합니다. 로컬 Scanner Flip을 글로벌 점에 다시 적용하지 않습니다.
- 동일 거리의 Head 소유권 경계가 생기는 사용자 변경 조건에서는 이 명목 모델이 낮은 Head 번호를 우선합니다. 원본의 누적 배정 개수 기반 동률 해소를 재현하지 않으므로, 그런 조건은 원본 Planner에서 별도 확인해야 합니다. 기본 test0929 점에서는 동률이 없습니다.
- Shot pitch 0.09×30=2.7 mm, DOE 4×4 branch pitch 0.675 mm. Model1 28×17 Shot/Cell. `CHESS=1`, 모서리 Round=0, Default Offset=0인 기존 소스의 명목 조건입니다.
- Mask 교차로 Skip되는 Shot은 선택 불가합니다. Camera 대상 8점과 전체 Shot 통계를 구별합니다. 전체 Recipe에는 유효 미배정 Shot 675개가 있으므로 실제 전수 가공 Recipe는 별도 검증이 필요합니다.
- Stage와 Review X는 비대칭 가감속 사다리꼴/삼각형 운동을 사용합니다. `Vpeak=min(Vcmd,sqrt(2L/(1/a+1/d)))`.
- 다음 Trigger 전에 X 도착·정착·Guard를 확보해야 하며, 이전 최악 ExposureEnd 이후에 X 이동을 시작합니다. FPS·노출·Readout 주기와 Jitter도 별도로 검사합니다. 다음 Glass의 사전 준비 전에 X Park 복귀도 필요합니다.
- Readout/노출 중첩 시 최소 Frame 주기는 `max(1/FPS, Exposure, Readout)`, 비중첩 시 `max(1/FPS, Exposure+Readout)`입니다. Stage 구동 이후 남은 마지막 Readout은 Tact에 대기로 추가합니다. 모든 Glass는 최후 요청점 기준의 동일한 보수적 Tact를 사용합니다.
- 위치 Trigger 지연과 노출 중심을 보상하고, 실제 Stage 프로파일에서 노출 중 블러·Jitter/Encoder/Follow 오차를 계산합니다. X 정착오차는 사용자가 입력한 실측 예산값과 허용값을 비교합니다.
- 요청점의 최대 255개 부분집합을 완전 탐색하고, 2/4/8점 상한별 최소 Glass 분할을 동적 계획으로 구합니다. Head 순차 정책은 Head 번호로 정렬한 요청점의 연속 구간만 그룹으로 허용합니다. 최적 분할 정책은 비인접 Head도 허용합니다. 둘 다 한 Glass 안의 실제 시간 도착 순서로 촬영하며 `H01→H08` 제한이 ON이면 역순인 그룹은 탈락합니다. 자동 **좌표 배치**는 일부 Cell/Row/Column 후보 탐색이므로 좌표의 전역 최적해는 아닙니다.
- 역산 Y속도는 0.5~2000 mm/s 표본 탐색 및 경계 이분법으로 찾은 연속 표본 구간입니다. 실제 장비 허용속도를 보증하거나 모든 해를 증명하지 않습니다. Y 간격 제안은 연속 좌표이므로 실제 Shot로 다시 스냅해야 합니다.

## 운영·알람 권고 / 한계

물류 좌표 생성 → IPS의 Glass/Recipe/Point ID 및 예상 Trigger 목록 검증 → Stage/Camera Ready → 위치 Trigger → Frame ID·개수 대조 → Vision 합/불 → 기록 및 배출 판단. 2점 배정에 3회 Trigger, Frame 누락·중복, 좌표 생성 실패는 INVALID 알람으로 기록하고 Hold합니다. 품질 NG와 INVALID는 구별하며 0선 결과로 Offset/APC 보정은 하지 않습니다.

이미 가공한 점의 downstream Review이므로 촬영 전에 끝난 현재 Glass의 가공을 예방하지 못합니다. 이상 발생 시 배출 Hold와 후속 Glass 차단을 적용하는 운영 설계가 필요합니다. HTML은 실제 장비 연결, 신호, Laser 출사, 영상 합/불 판정 또는 알람 출력이 없는 검토용입니다.

거리 홀수 1467 / 짝수 1847 mm는 Camera가 downstream이라는 설계 가정입니다. 제공된 원본 `REVIEW_TO_HEAD1_GAP_Y=0` 설정과 동일하다고 보지 않습니다. 실제 거리·부호를 확인해야 합니다. 원본은 H01만 ON, Auto Inspection OFF이나 이 모델은 8 Head 설계 검토입니다.

S-curve jerk, 실제 Servo 정착, Camera 유효 Ready/ExposureEnd, Laser/Scanner 서비스시간, 처리 Queue·결과 통신, 시야/ROI/검출 정확도는 보증하지 않습니다. **Global Shutter + 위치 Trigger**를 가정하며 Rolling Shutter의 행별 왜곡·스트로브 동기화는 모델링하지 않습니다. 다른 Cell Model·Rotation·왜곡 보정은 범위 밖입니다. Stage 복귀·물류는 입력한 기타시간으로만 반영하며 실제 복귀 궤적을 그리지 않습니다.

## 검증·재빌드

```sh
node build.cjs
node tests/engine.test.cjs
node tests/formulas.test.cjs
node tests/operator.test.cjs
# 임시 디렉터리에 linkedom@0.18.12 설치 후:
NODE_PATH=/absolute/path/to/temporary/node_modules node tests/dom.test.cjs
```

수치 **30개**, 수식 **18개**, 운영 안내 **10개**, DOM **33개**, 총91개 시험 통과. 운영 안내 시험은 Stroke·Camera 사양 제한, 같은Y/Blur/시간/좌표 실패 유형, 숫자 제안의 전 조건 검증과 누적 기록 유지/초기화를 확인합니다. DOM은 기본 입력 간소화, 실제 Head 마크·Cell 색의 Glass간 유지, 되감기·마지막 사이클 유지/반복 초기화, 원인별 안내와 적용 버튼을 추가 검증합니다. 기존 기하·255개 조합·운동 역산·양쪽 Jitter·광학 오차, 양방향 Stage 81시점·전체 기판 포함·Camera Y고정/X이동·2/4/8 분할·JSON/CSV·수식 연동 시험도 유지합니다.

수식 도식 PNG 재생성: `node scripts/make-formula-preview.cjs <임시 svg-dir>` → 생성 SVG를 Inkscape로 PNG 렌더링. `Formula_X_Motion.png`, `Formula_Pair_Timing.png`는 설명서에 포함된 실제 SVG를 렌더링한 별도 도식입니다. HTML 페이지 전체의 브라우저 스크린샷은 아닙니다.

PPT 제작 소스는 `scripts/build-customer.mjs`입니다. Codex의 `@oai/artifact-tool`, `@napi-rs/canvas`와 Presentations 스킬의 검증 도구가 있는 환경에서 실행합니다. `REVIEW_PPT_WORKDIR`는 존재하지 않는 새 작업 폴더, `PRESENTATIONS_SKILL_ROOT`는 스킬 절대경로, `REVIEW_FONT_FILE`은 Noto Sans KR 폰트 경로로 지정합니다. `RUNTIME_NODE`, `RUNTIME_NODE_MODULES`, `RUNTIME_BIN_DIR`, `RUNTIME_PYTHON`과 `CODEX_PRIMARY_RUNTIME_PYTHON`도 해당 런타임 경로를 지정해야 합니다. 스크립트는 새 작업 폴더 안에 초안과 최종 PPT를 따로 생성하므로 동봉 PPT를 덮어쓰지 않습니다. 최종 PPT에는 표 2개와 시간 비교 차트 1개 및 편집용 차트 데이터가 포함됩니다. Noto Sans KR 설치 시 동봉 미리보기와 같은 한글 글꼴로 표시됩니다.

미리보기 재생성: `NODE_PATH=<linkedom 설치 경로>/node_modules node scripts/make-preview.cjs <임시 frames-dir>` → 생성 SVG를 Inkscape로 같은 이름의 PNG로 렌더링 → `python3 scripts/assemble-preview.py <임시 frames-dir> <이 폴더>`. Pillow와 한글 폰트가 필요합니다. 이 과정은 사용자 첨부 이미지를 읽거나 수정하지 않습니다.

이 실행 환경에서는 Chrome가 `socket() failed: Operation not permitted`로 실행되지 않아 **실제 브라우저 픽셀 렌더링·레이아웃·클릭 hit-test·모바일 기기 QA를 완료하지 못했습니다**. DOM에서 생성한 SVG를 별도 렌더링해 도식 좌표를 확인했습니다. 실제 장비 적용 전 실측과 Browser/UI 확인이 필요합니다.

소스 분석 기준: `A3_LD_Process_SW_IPS` commit `6b19d7aaf0de81271468ab7dac0fa15493172f38`, 제공 test0929 조건. 관련 클래스: `CCellPatternCalculator`, `CShotCoordinatePlanBuilder`, `CRecipeShotMaskingPlan`, `CReviewManager`, `CStationProcess`. 최신 소스를 자동 동기화하는 도구는 아닙니다. 기존 프로젝트의 소스 전체, 민감한 접속 정보 또는 장비 설정은 이 공유 폴더에 포함하지 않았습니다.
