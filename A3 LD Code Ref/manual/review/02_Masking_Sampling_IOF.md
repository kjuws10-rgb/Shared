# Masking·Sampling·IOF: 검사점 제외와 실제 이동을 구별하기

![오프라인 흐름 그림](diagrams/review-02.svg)


원본: `kjuws10-rgb/A3Drilling` · `master` · `96e22cd027c84bf302b23f2949b98985d7f301bb`

현재 재검토: **11.17.0 / 2026-11-18**, 비교 기준 11.13.0(`dfa5920e6301d9ec4b0eab1452ae59521aafc986`). 아래 변경 항목과 기존 잔건을 구분합니다. 파일·함수·호출 경계의 정적 확인이며 장비 실행 시험 결과가 아닙니다.

이 장의 **코드 확인**은 해당 Commit의 실제 함수 본문을 정적으로 추적한 사실입니다. **해설**은 그 구조를 이해하기 위한 설명이며, **검증 과제**는 앞으로 실행할 시험입니다. 실장비의 부호·광학 상태·통신 타이밍·정밀도가 검증되었다는 뜻은 아닙니다. 예시 숫자는 설명용 가상값입니다.

## 1. 서로 다른 세 가지 문제

**Masking 판정**은 어느 설계 Shot이 사용 금지 영역과 겹치는지 정하는 문제입니다. **Sampling**은 사용 가능한 Shot 중 어느 줄·점을 검사할지 고르는 문제입니다. **IOF 준비**는 선택된 순서의 위치를 Stage에 넘겨 Trigger 동작을 준비하는 문제입니다. 세 기능의 입력과 출력이 다르므로 “Masking 반영됨”이라는 한 문장만으로 실제 경로가 마스크를 물리적으로 지나지 않는다고 판단하면 안 됩니다. [CShotCoordinatePlanBuilder.cs:853–910](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L853-L910) [CReviewRulePlanBuilder.cs:361–401](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L361-L401) [CStageReviewSequences.cs:742–805](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStageReviewSequences.cs#L742-L805)

```mermaid
flowchart TD
 D[설계 Shot과 DOE footprint] --> M[Masking과 CHESS 평가]
 M --> U[검사 사용 가능 Shot]
 U --> S[Cell별 검사 줄 Sampling]
 S --> O[순서 고정 Trigger buffer]
 O --> B[Stage IOF 위치 배열]
 B --> H[요청과 완료 handshake]
 H --> V[Vision count와 결과 검증]
```

## 2. Masking이 참조하는 기준 좌표

`CRecipeShotMaskingPlan.Build`는 모델별 Pixel 크기, ProcessPitch, 분기 수, Masking hole, edge 조건을 준비합니다. 코드 상수는 모델 최대 5종, hole 최대 3개입니다. 그룹 피치와 Beam 피치는 `groupPitch = pixelSize × ProcessPitch`, `beamPitch = groupPitch / splitBeamCount`로 계산합니다. 이 수치는 실제 광학 측정 피치가 아니라 Recipe에서 구성한 footprint입니다. [CShotCoordinatePlanBuilder.cs:788–850](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L788-L850)

`EvaluateShot`의 핵심은 **설계 좌표 기준 불변성**입니다. Recipe/Default/FirstBeam/Align/Review/Shift의 보정값이나 Head flip을 바꿨다고 동일 Shot의 Masking 결과가 달라지면 안 된다는 주석이 있습니다. local 중심은 `GroupColumn × GroupPitch`, `GroupRow × GroupPitch`입니다. 각 Beam을 작은 사각 footprint로 만들고 hole과의 교차 또는 edge 이탈을 검사합니다. [CShotCoordinatePlanBuilder.cs:853–910](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L853-L910)

| 입력 | 실제 사용 목적 | 혼동하면 안 되는 것 |
|---|---|---|
| `SPLITED_BEAM_COUNT` | 가로·세로 Beam 격자 루프 수 | 전체 Beam 총 개수와 혼동 금지. 4라면 루프는 4×4. |
| `MODELn_MASKING_HOLE_NUMBER` 및 위치·크기 | hole 사각형 목록 | 카메라가 실시간 검출한 결함 맵이 아니다. |
| edge offset | 유효 가공 가장자리 범위 | Stage travel soft limit가 아니다. |
| `CHESS` / `CHESS_TYPE` | 그룹 row/column의 주기적인 사용 여부 | Masking hole과는 별도 제외 이유다. |
| `BeamNumbers` | 마스크와 겹친 Beam 번호 목록 | 이번 Review에서 고른 Beam11 하나만의 결과가 아니다. |

필드의 계산 근거는 모델 구성과 Beam 루프, CHESS 판정입니다. [CShotCoordinatePlanBuilder.cs:813–850](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L813-L850) [CShotCoordinatePlanBuilder.cs:881–947](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L881-L947)

## 3. 한 Beam이라도 겹치면 Shot 사용은 어떻게 되는가

`ST_RECIPE_SHOT_MASKING_RESULT.IsMasked`는 `BeamNumbers.Count > 0`이고, `ShouldSkipLaser`는 `IsMasked || IsChessSkipped`입니다. AUTO Review 계획은 이 값이 참인 Shot을 사용하지 않습니다. 따라서 현재 이 경로의 Review 제외 기준은 “검사 Beam11의 중심만 hole 밖이면 허용”이 아니라 **Shot footprint 평가 결과 전체**입니다. [CShotCoordinatePlanBuilder.cs:767–785](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L767-L785) [CAutoFineReviewCoordinator.cs:226–246](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L226-L246)

**검토 포인트:** HIAA/Round라는 현장 용어 자체가 임의 원형 path solver를 뜻하지 않습니다. 현재 검토한 evaluator는 모델 hole 사각형과 edge 구성을 이용합니다. 현장에 필요한 곡선 경계가 해당 Recipe 표현으로 충분한지, 실제 Masking 도형이 어떤 키로 전달되는지는 별도 설계 확인이 필요합니다. 원·곡선 장애물을 정확히 따라 피해가는 알고리즘이 구현되었다고 확대 설명하지 않습니다. [CShotCoordinatePlanBuilder.cs:928–974](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L928-L974)

잘못된 hole 크기나 유한하지 않은 값은 `BuildModel`에서 건너뛰는 분기가 있습니다. 데이터 오입력으로 의도한 마스크가 사라지는 상황을 잡으려면 UI 또는 Recipe 검증에서 별도 오류 표시가 필요한지 검토해야 합니다. “무시됨”은 “안전하게 전부 차단됨”과 다릅니다. [CShotCoordinatePlanBuilder.cs:928–947](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L928-L947)

## 4. FINE 줄 선택의 실제 단위

`BuildFineFromCellSource`는 Head가 배정된 점이 있는 Cell별 범위를 만듭니다. 줄 수는 해당 범위의 row 수와 최대 7줄 사이에서 제한됩니다. 한 줄이면 중앙, 여러 줄이면 최소·최대 Y 사이에 균등한 목표 Y를 잡고, 가까운 row 및 인접 row 후보를 확인합니다. 선택한 row에서 Head가 있고 좌표가 유한한 점을 모은 뒤 ShotKey 중복을 제거합니다. [CReviewRulePlanBuilder.cs:361–401](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L361-L401)

**해설:** 이는 row Sampling입니다. “첫 줄이 막혔으면 다음 유효 row로 바꾸는가”, “마스크를 모두 피하면서 세 줄의 높이 간격을 최적화하는가”, “선택 Beam만 유효한 점을 허용하는가”는 서로 다른 요구입니다. 이 함수 하나를 보고 세 요구가 모두 충족되었다고 판단할 수 없습니다. AUTO 계획은 나중에 `Use` 점과 선택 키를 결합하고 실제 line을 만듭니다. [CAutoFineReviewCoordinator.cs:246–283](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L246-L283)

## 5. IOF에 보내는 위치는 Vision의 1001 식별자와 다르다

`CStageReviewSequences.PrepareIof`의 입력은 **순서가 있는 `ST_STAGE_IOF_POINT` 목록**입니다. 빈 배열, 비유한 X/Y, 일반 IOF 500점 초과를 거부합니다. zero-line은 점 수가 2 또는 4여야 합니다. Review X 전용 motion owner가 IOF buffer를 쓰는 것도 금지합니다. [CStageReviewSequences.cs:742–761](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStageReviewSequences.cs#L742-L761)

| 준비 단계 | 코드가 하는 일 | 왜 필요한가 |
|---|---|---|
| 사전 상태 확인 | 이전 Start/ACK가 0인지, Stage가 정지인지 확인 | 직전 요청 완료 비트가 남은 상태를 새 요청의 응답으로 오인하지 않기 위해. |
| 설정·개수 기록 | 일반/zero-line 설정과 별도 count key 기록 | 같은 배열을 다른 의미로 읽지 않게 한다. |
| 배열 구성 | 일반은 `points.Select(p => p.X)`, zero-line은 `p.Y` | **zero-line을 `[Y…][X…]`로 묶는 옛 방식이 아니다.** |
| Route 검증 | `IOF_POS_ARRAY_1`의 Double 타입과 용량 확인 | WORD 정수 배열로 잘못 쓰거나 용량을 넘지 않게 한다. |
| readback | 기록 값과 읽은 값의 오차가 `0.000051`보다 크면 실패 | 쓰기 함수 호출 성공과 실제 데이터 확인을 구분한다. |
| Start 요청 | 동결한 계획을 소유 상태로 보관하고 요청·완료 wait | 그 시도의 순서와 데이터가 끝까지 같은지 보장한다. |

표의 논리 이름과 검증 수치는 소스의 현재 구현 기준입니다. 실제 현장 주소는 해당 버전의 MELSEC map과 장비 사양을 같이 확인해야 합니다. 소스 주석에는 요청 `W8238`, 완료 `WC13C`, ACK `W823A`가 나오지만 주소 고정 사실을 모든 설비에 일반화하지 않습니다. [CStageReviewSequences.cs:753–805](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStageReviewSequences.cs#L753-L805)

## 6. 재시도 때 배열과 결과를 맞추는 방법

Fine flying은 시도마다 새 `triggerBuffer`를 만듭니다. 해당 배열로 IOF를 준비하고, 같은 순서로 `FLYING_READY`를 전송한 뒤 끝점으로 이동합니다. `FLYING_MOVE_DONE`의 count mismatch가 발생하면 허용된 조건에서 순서를 뒤집어 재시도합니다. 이때 실패 시도의 `1003`을 요청하지 않는 분기가 있습니다. [CReviewManager.cs:2824–2875](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2824-L2875)

수신 결과 개수는 그 시도의 frozen buffer 개수와 일치해야 합니다. 측정 결과를 현재 화면 정렬이나 Recipe 전체 목록에 순서대로 붙이면 재시도 후 다른 Shot에 오차를 넣을 수 있습니다. 저장 전에는 coordinator가 식별자 집합을 다시 검증합니다. [CReviewManager.cs:2878–2909](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2878-L2909) [CAutoFineReviewCoordinator.cs:171–198](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L171-L198)

## 7. 원하는 개선사항을 검증 가능한 요구로 바꾸기

| 요구 | 현재 확인한 근거 | 추가로 확인할 기준 |
|---|---|---|
| Masking 영역에서는 Trigger 미발생 | 사용 점 제외·IOF buffer 경로 존재 | 실제 최종 buffer에 제외 Shot이 없는지 확인. |
| Stage 경로 자체도 Masking 구간 회피 | 점 선택과 직선 이동만으로는 입증 불가 | 시작점~끝점 선분·전환 구간·Trigger window를 함께 기록. |
| 첫/중앙/마지막 줄이 막히면 유효 줄 대체 | row 선택과 Use 필터를 조합해 확인해야 함 | 줄별 예정/선택/제외 점 수와 대체 이유를 표시. |
| 모든 대상이 마스크인 Cell | 빈 line 또는 전체 검사점 부족 가능 | 조용히 성공하지 않고 명확한 불가 사유를 내야 함. |
| Trigger count 누락 | 1002 NCK 분기 있음 | 허용 재시도 횟수와 전체 보정 미적용을 확인. |

## 8. 권장 시험표 — 아직 실행하지 않은 검증 과제

1. 단일 Shot의 첫 Beam footprint만 hole에 걸리게 만든 가상 Recipe로 `BeamNumbers`, `ShouldSkipLaser`, 최종 `Use`를 순서대로 확인합니다. Beam11이 멀쩡해도 Shot 제외가 되는 현재 정책을 확인하는 시험입니다.
2. 보정값을 크게 바꾸되 설계 패턴은 유지합니다. Masking 결과는 같아야 하고 Scanner 최종 좌표만 바뀌어야 합니다.
3. 첫 줄 전체를 가리고 중앙·끝줄은 남긴 뒤 요청 줄 수와 실제 선택 줄 수, 검사점 수를 기록합니다. 요구한 세 줄이 유지되지 않는다면 자동 대체 정책을 별도로 정의합니다.
4. 500점과 501점, zero-line 2/4/3점, readback 오차 경계값을 시험합니다. 실장비 없이 mock route로 먼저 검증할 수 있습니다.
5. 정방향 첫 시도 count mismatch 후 역방향 재시도를 만들고, 각 ShotKey가 정확히 자기 결과를 받는지 확인합니다.
6. Stage의 실제 이동 경로를 검증할 때는 Trigger off만 보고 통과시키지 말고 encoder 경로와 유효 Trigger 위치를 함께 비교합니다.

마지막 6번은 물리 동작 평가가 필요한 항목이며, 이 문서에서 안전성이나 현장 통과를 판정하지 않았습니다.

## 9. 새 ONE LINE과 기존 FINE Sampling의 경계

ONE LINE은 사용자가 Shot 하나를 골라 **Glass 설계 Y가 같은 실행 가능한 줄**을 선택하는 기능입니다. FINE은 Cell별로 여러 row를 샘플링하고 같은 열의 보정값을 계산하기 위한 기능입니다. 화면에서 둘 다 줄처럼 보여도 선택 기준과 결과 소비자가 다릅니다. CreateIofLines의 줄 허용차는 0.001 mm이며 줄의 시작 기준 Y와 비교해 묶습니다. 인접 두 점만의 차이가 작은지를 계속 이어 붙이는 방식으로 해석하면 안 됩니다. [CReviewManager.cs:27–33](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L27-L33) [CReviewManager.cs:211–246](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L211-L246) [CReviewManager.cs:2185–2203](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2185-L2203)

| 확인할 상황 | ONE LINE의 코드 경계 | 검증할 관찰값 |
|---|---|---|
| 기준 Shot이 Masking/CHESS 제외 | Use/Head와 화면 제외 사유 검사를 통과해야 선택 | 선택 거부·키 집합 비어 있음 |
| 줄 중간이 Masking | 남아 있는 Use 점으로 줄 구성 | 제외 Shot이 결과와 trigger 개수에 들어가지 않음 |
| 같은 Y에 Cell 2개 | Cell별 필터가 없어 같은 Glass 줄에 함께 포함 가능 | Cell별 count 합과 전체 line count |
| Mask 영역 위를 Stage가 지나감 | 검사점 제외와 이동선분은 다른 문제 | 실제 시작/끝·가감속·Trigger window를 별도 검증 |
| ONE LINE을 FINE 결과로 취급 | ResultType=ONE_LINE이며 OffsetApply는 지원하지 않음 | ONE_LINE 저장/트리와 OFFSET APPLY 차단을 각각 확인 |

설계 Masking 판정 함수와 FINE row 선택 함수의 본문은 이전 기준에서 바뀌지 않았습니다. 수동 ONE LINE의 기존 IOF 줄 묶음 재사용은 11.13.0에도 있던 기능이며 이번에도 유지합니다. 따라서 “Masking 형상을 피해 Stage 경로까지 자동 우회”하거나 “가려진 줄을 항상 원하는 개수로 대체”하는 새 기능이 추가되었다고 결론낼 근거는 없습니다. [CMenuReview.cs:1297–1331](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1297-L1331) [CMenuCorrection.ReviewData.Offset.cs:274–283](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L274-L283)

## 10. 11.17.0 교차 확인: 기하학 줄 선택과 마스크 제거 순서

이번 두 Commit에서 RulePlanBuilder·StageReviewSequences·ShotCoordinatePlanBuilder의 마스크/IOF 엔진은 바뀌지 않았습니다. ShotMap의 빨간 X는 제외 상태를 더 명확하게 그리는 **표시 변경**입니다. 물리 경로 우회 완료를 뜻하지 않습니다. [CReviewShotMapControl.cs:262–302](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Views/CReviewShotMapControl.cs#L262-L302)

Fine은 기하학 범위에서 첫/중간/마지막 등에 가까운 row를 먼저 고릅니다. 이웃 row 탐색은 목표 Y에 가까운 기하학 row를 찾는 것이며 “마스크 없는 다음 줄” 조건이 없습니다. AUTO는 그 뒤 선택 키와 Use를 결합하여 제외점을 뺍니다. 한 선택 row가 전부 마스크라면 다른 유효 row로 자동 대체한다고 설명할 근거가 없고, 열에 남는 anchor 수도0~3개로 달라질 수 있습니다. [CReviewRulePlanBuilder.cs:361–420](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L361-L420) [CAutoFineReviewCoordinator.cs:246–283](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L246-L283)

| 조건 | 확인 결과 | 해석 |
|---|---|---|
| 첫 row 전부 Masking | 실제 row·트리거수 | 다음 row 대체를 임의 기대값으로 두지 않음 |
| 같은 X열 첫 점만 제외 | 남은 anchor Y범위 | 유효 양 끝 밖은 외삽 가능 |
| 마스크 중간 긴 구간 | IOF 선분·가감속·count | 점 제외와 물리 회피 각각 확인 |
| 같은 Y의 두 Cell | ONE LINE 최종 키 | Glass line과 Cell 경계 구분 |
| DOE OFF Head | footprint·검사 Beam | Default 전용 flag는 일반 마스크를 바꾸지 않음 |

위 시험은 후속 과제이며 실제 측정·운영 CSV 레코드를 문서에 복제하지 않습니다.
