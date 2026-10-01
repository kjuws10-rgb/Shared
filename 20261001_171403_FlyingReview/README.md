# 0선방어 · 8 Head Flying Review 시뮬레이터

`FlyingReview_8Head_Simulator.html`을 다운로드한 뒤 Chrome/Edge 등 브라우저에서 엽니다. 설치·서버·인터넷이 필요 없는 단일 HTML입니다. GitHub 파일 화면은 실행 화면이 아니므로 Raw/Download로 받아서 열어야 합니다.

## 범위

한 Head마다 고정 가공점 하나, H01~H08 총 8점의 순환 검사입니다. 기판 하나가 Y 방향으로 MOF 가공 후 ATM Review Camera를 통과합니다. Camera는 X축만 움직이며 Y축 Flying Vision은 기판 이동과 위치 Trigger로 구현하는 명목 설계 모델입니다.

기존 [test0929 분석 보고서](../A3_ZeroDefense_test0929_20260930/report.html)의 **70개 Cell–Head 대표점 / 35 Glass 전수 대표 커버**와는 다른 목표입니다. 이번 범위는 전체 Cell의 검사가 아닌 **지정한 8개 Head 고정점의 1회 커버**입니다. 기존 보고서 및 장비 코드는 수정하지 않았습니다.

## 화면과 사용법

1. 첫 화면은 기본 조건에서 8점 단일 Pass가 성립하는 자동 배치입니다. `재생`을 누르면 기판 전체·45 Cell·고정점이 Y로 함께 이동하고 ATM Camera만 X로 이동합니다.
2. `Glass당 상한`을 2점 또는 4점으로 변경하면 해당 상한을 만족하는 최소 Glass 그룹이 계산됩니다. `다음 Glass`, 시간 슬라이더, 배속·반복·화면 확대를 지원합니다.
3. `같은 Y`, `2점/Pass`, `4점/Pass` 예시 버튼으로 배치의 영향을 비교합니다. 버튼 이름은 예시이고 입력 조건 변경 후 성립 개수는 달라질 수 있습니다.
4. `8점 좌표 설정`에서 Head별 Cell, Shot 열/행, DOE Branch를 지정합니다. 글로벌 X/Y를 입력하거나 지도에서 클릭하면 선택 Head의 가장 가까운 유효 가공점으로 스냅하고 변경 거리도 표시합니다.
5. 좌측 입력에서 Stage Y/X 속도·가감속, 정착·선도착 시간, FPS·노출·Readout·Trigger 지연·Jitter, Encoder·블러·허용오차, Field·거리·Stroke, 30/150초 예산을 변경합니다.
6. `역산·조건 제안`에서 전체 요청점을 한 Glass에서 찍기 위한 Y속도 구간, X 최소속도, 가감속 배율, FPS, 노출 상한, Y 간격을 확인합니다. 제안 적용 버튼은 실제 장비를 변경하지 않고 시뮬레이터 입력만 변경한 뒤 전 조건을 재검증합니다.
7. 조건 JSON 저장/불러오기와 추천 촬영 스케줄 CSV 내보내기를 지원합니다. `Default_8Head_conditions.json`은 초기 조건 복원용입니다.

기판 지도는 항상 전체 Cell을 보여줍니다. 장비 화면에서는 실제 통과 개념에 맞게 입출구의 기판 일부가 화면 밖으로 이동합니다. 장비 화면 X/Y 축척은 다릅니다. 촬영 링은 관찰용으로 표시 시간을 늘렸으며 실제 노출시간은 아닙니다. Cell 녹색은 선택점 촬영 완료이지 Cell 전수 검사 완료가 아닙니다.

## 기본 계산 결과

Stage 100 mm/s, a/d 500 mm/s². Review X 200 mm/s, a/d 1000 mm/s². X 정착 50 ms, Guard 20 ms. Camera 23 FPS, 노출 10 µs, 지연 50 µs, Jitter ±5 µs, 지연·노출 중심 보상 ON. 임시 Blur 허용 1 µm, Pixel 3.45 µm / 20×. 가감속·정착·Camera 최소노출·기타시간 등은 장비 확정 사양이 아닌 입력 가정입니다.

| 포인트 배치 | 한 Glass 최대 | 8점 1회 커버 |
| --- | ---: | ---: |
| 모두 같은 Y | 1점 | 8 Glass |
| 2개 Y 그룹 예시 | 2점 | 4 Glass |
| 4개 Y 그룹 예시 | 4점 | 2 Glass |
| 8 Head 자동 후보 배치 | 8점 | 1 Glass |

자동 배치의 고정점은 다음과 같습니다. DOE B07을 사용합니다.

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

기하학적 메인 가공 구간 12.232 s, 기판 전체 통과 Stage 구동 39.504875 s. 영상처리 Tail 1 s + 기타 물류·Align·복귀 60 s 가정으로 1 Glass Tact는 100.504875 s입니다. 이 자동 배치를 그대로 쓰고 Glass당 상한만 2/4/8로 바꾸면 4/2/1 Glass입니다. 가장 작은 X/Frame 시간 여유는 약 203.435 ms입니다.

같은 Y의 다른 X는 같은 순간에 Camera Y를 지나갑니다. FPS만 높이는 것으로 해결할 수 없습니다. 필요하면 Y 위치를 바꾸거나 Glass를 나눕니다. Scanner의 홀짝 Y차 380 mm는 가공→Review 지연에 쓰며, 촬영점 사이의 ΔY를 대신하지 않습니다.

중요: 100 mm/s × 10 µs = 1 µm 이동 블러이며, 3.45 µm / 20× 광학계의 약 **5.80 object pixels**입니다. 임시 1 µm 허용 기준에서 8점이 성립한다는 것이 1 px 품질을 보증하지 않습니다. 1 px=0.1725 µm 기준을 넣으면 현재 기본 조건은 불가로 판정합니다.

## 좌표·속도 계산

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
- 요청점의 최대 255개 부분집합을 완전 탐색하고, 2/4/8점 상한별 최소 Glass 분할을 동적 계획으로 구합니다. 자동 **좌표 배치**는 일부 Cell/Row/Column 후보 탐색이므로 좌표의 전역 최적해는 아닙니다.
- 역산 Y속도는 0.5~2000 mm/s 표본 탐색 및 경계 이분법으로 찾은 연속 표본 구간입니다. 실제 장비 허용속도를 보증하거나 모든 해를 증명하지 않습니다. Y 간격 제안은 연속 좌표이므로 실제 Shot로 다시 스냅해야 합니다.

## 운영·알람 권고 / 한계

물류 좌표 생성 → IPS의 Glass/Recipe/Point ID 및 예상 Trigger 목록 검증 → Stage/Camera Ready → 위치 Trigger → Frame ID·개수 대조 → Vision 합/불 → 기록 및 배출 판단. 2점 배정에 3회 Trigger, Frame 누락·중복, 좌표 생성 실패는 INVALID 알람으로 기록하고 Hold합니다. 품질 NG와 INVALID는 구별하며 0선 결과로 Offset/APC 보정은 하지 않습니다.

이미 가공한 점의 downstream Review이므로 촬영 전에 끝난 현재 Glass의 가공을 예방하지 못합니다. 이상 발생 시 배출 Hold와 후속 Glass 차단을 적용하는 운영 설계가 필요합니다. HTML은 실제 장비 연결, 신호, Laser 출사, 영상 합/불 판정 또는 알람 출력이 없는 검토용입니다.

거리 홀수 1467 / 짝수 1847 mm는 Camera가 downstream이라는 설계 가정입니다. 제공된 원본 `REVIEW_TO_HEAD1_GAP_Y=0` 설정과 동일하다고 보지 않습니다. 실제 거리·부호를 확인해야 합니다. 원본은 H01만 ON, Auto Inspection OFF이나 이 모델은 8 Head 설계 검토입니다.

S-curve jerk, 실제 Servo 정착, Camera 유효 Ready/ExposureEnd, Laser/Scanner 서비스시간, 처리 Queue·결과 통신, 시야/ROI/검출 정확도는 보증하지 않습니다. 다른 Cell Model·Rotation·왜곡 보정은 범위 밖입니다. Stage 복귀·물류는 입력한 기타시간으로만 반영하며 실제 복귀 궤적을 그리지 않습니다.

## 검증·재빌드

```sh
node build.cjs
node tests/engine.test.cjs
# 임시 디렉터리에 linkedom@0.18.12 설치 후:
NODE_PATH=/absolute/path/to/temporary/node_modules node tests/dom.test.cjs
```

수치 회귀시험 24개와 DOM 동작 회귀시험 17개 통과. DOM 시험은 45개 Cell 및 8점 생성, 기판 이동·Camera Y고정/X이동, Glass 전환, 2/4/8 상한·좌표 설정·역산·입력 오류 복구·JSON/CSV·재생/슬라이더 등을 검증합니다.

이 실행 환경에서는 Chrome가 `socket() failed: Operation not permitted`로 실행되지 않아 **실제 브라우저 픽셀 렌더링·레이아웃·클릭 hit-test·모바일 기기 QA를 완료하지 못했습니다**. DOM에서 생성한 SVG를 별도 렌더링해 도식 좌표를 확인했습니다. 실제 장비 적용 전 실측과 Browser/UI 확인이 필요합니다.

소스 분석 기준: `A3_LD_Process_SW_IPS` commit `6b19d7aaf0de81271468ab7dac0fa15493172f38`, 제공 test0929 조건. 관련 클래스: `CCellPatternCalculator`, `CShotCoordinatePlanBuilder`, `CRecipeShotMaskingPlan`, `CReviewManager`, `CStationProcess`. 최신 소스를 자동 동기화하는 도구는 아닙니다. 기존 프로젝트의 소스 전체, 민감한 접속 정보 또는 장비 설정은 이 공유 폴더에 포함하지 않았습니다.
