# Review 계획과 좌표계: 설계 Shot이 카메라 측정점이 되는 과정

> 최신 원본 기준: **2026-11-25 · master Ver11.23.0 · `0219666f9053b907d96d7e0aa7d0c6c1be3a73d4`**. 이전 버전의 변경 설명은 연혁으로 보존하며, 이번 Stage Glass Data·Product 필드 변경은 [Stage Glass 상세장](../architecture/10-stage-glass-data-and-product-fields.md)에서 다룹니다.

![오프라인 흐름 그림](diagrams/review-01.svg)


원본: `kjuws10-rgb/A3Drilling` · `master` · `0219666f9053b907d96d7e0aa7d0c6c1be3a73d4`

이전 정적 검토 기록: **11.19.0 / 2026-11-20**, 비교 기준 11.17.0(`96e22cd027c84bf302b23f2949b98985d7f301bb`). 11.18/11.19 두 Commit의 변경과 이전부터 남아 있는 경계를 함께 확인했습니다. 아래 변경 항목과 기존 잔건을 구분합니다. 파일·함수·호출 경계의 정적 확인이며 장비 실행 시험 결과가 아닙니다.

이 장의 **코드 확인**은 해당 Commit의 실제 함수 본문을 정적으로 추적한 사실입니다. **해설**은 그 구조를 이해하기 위한 설명이며, **검증 과제**는 앞으로 실행할 시험입니다. 실장비의 부호·광학 상태·통신 타이밍·정밀도가 검증되었다는 뜻은 아닙니다. 예시 숫자는 설명용 가상값입니다.

## 1. 처음 읽는 사람을 위한 핵심

Review 좌표는 한 함수가 Recipe의 X/Y를 그대로 Vision에 보내는 구조가 아닙니다. 먼저 **어느 Cell의 어느 Shot을 어느 Head가 가공하는지** 정하고, 해당 Shot에서 선택한 Beam의 위치를 더해 **카메라 X와 Stage Y 목표 위치**를 만듭니다. 이 목표 위치는 Stage 이동과 IOF 준비에 쓰입니다. Vision에는 별도의 식별자 요청을 보내며, Vision이 반환한 픽셀 차이를 mm 오차로 바꿉니다. 이 구분을 지켜야 CSV를 통신 패킷으로 오해하지 않습니다. [CReviewManager.cs:153–196](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L153-L196) [CReviewManager.cs:2124–2154](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L2124-L2154)

```mermaid
flowchart LR
 R[Recipe와 Setting] --> P[가공 Shot과 Head 배정]
 P --> M[Masking과 CHESS 판정]
 M --> S[Review 검사점 선택]
 S --> C[선택 Beam의 카메라 X와 Stage Y 계산]
 C --> T[Stage 이동과 IOF 준비]
 S --> V[Vision 식별자 요청]
 V --> E[픽셀 차이를 mm 오차로 환산]
 E --> F[판정과 결과 저장]
```

그림의 경로는 실제 호출 책임을 묶어 표현한 것입니다. Stage와 Vision은 서로 다른 수신자이며, 그림은 물리적 동시 실행 순서를 보장하는 타이밍 차트가 아닙니다.

## 2. 먼저 열어야 할 코드

| 진입점 | 입력 / 출력 | 읽어야 하는 이유 |
|---|---|---|
| `CreatePlanCore` | Recipe, Beam, 선택 방식, Shift → `ST_REVIEW_PLAN` | 일반 Review 계획의 공통 생성 경계. [CReviewManager.cs:501–555](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L501-L555) |
| `BuildShotPoints` | Cell별 설계 패턴, Head 배정 → Point 목록 | 설계 위치·Head·선택 상태·제외 사유가 한 점에 결합된다. [CReviewManager.cs:680–777](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L680-L777) |
| `CreateShotBeamPositionCalculator` | Recipe, 명시적 Setting AK Margin, Stage 방향, Shift → 계산 delegate | AUTO 등에서 각 Shot의 Beam 위치를 나중에 계산한다. [CReviewManager.cs:153–196](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L153-L196) |
| `CalculateReviewTarget` | AK 상대 Shot, 카메라 AK, Beam local offset, Cell 회전, Stage 방향 → 목표 | 실제 좌표식을 확인할 곳. [CReviewManager.cs:1001–1021](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L1001-L1021) |
| `CAutoFineReviewCoordinator.BuildPlan` | 동결한 자동검사 입력 → Fine line 계획 | AUTO는 별도 조건과 제외 규칙을 갖는다. [CAutoFineReviewCoordinator.cs:203–290](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L203-L290) |

## 3. 좌표 이름을 분리해서 읽기

| 데이터 | 이 장에서의 뜻 | 주의할 점 |
|---|---|---|
| `DesignX/DesignY` | 설계 패턴에서 생성한 Shot 중심 | 카메라 실제 측정값이 아니다. |
| `BeamOffsetGx/Gy`, 선택 Beam local offset | 한 Shot 내 선택 Beam의 설계 위치 차이 | Cell 회전 후 카메라/Stage 목표로 옮긴다. |
| `ReviewTargetX` | Review 카메라 축의 목표 X | Scanner Gx와 같은 이름의 좌표로 취급하면 안 된다. |
| `ReviewTargetY` / `StageY` | Review 측정에 필요한 Stage Y 목표 | Stage 방향 부호가 적용된다. |
| `ErrorX/ErrorY` | 측정 결과에서 얻은 오차 | raw Vision 축과 flip 변환 후 축을 섞지 않는다. |
| `HeadNo, CellNo, ShotNo, BeamNo, ShotKey` | 점의 소속과 식별자 | 위치가 비슷해도 다른 식별자는 다른 검사점이다. |

표의 구성은 `BuildShotPoints`의 Point 생성 필드와 목표 계산기를 기준으로 합니다. 특히 `ST_REVIEW_BEAM_POSITION(beamNo, target.Y, target.X)`라는 생성자 호출은 인수 순서가 직관적 X/Y 순서와 다릅니다. 이후 사용처가 읽는 **이름 붙은 속성**까지 확인해야 합니다. [CReviewManager.cs:177–196](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L177-L196) [CReviewManager.cs:742–777](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L742-L777) [CAutoFineReviewCoordinator.cs:271–280](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L271-L280)

## 4. 목표 위치 계산을 한 단계씩 풀어보기

`CreateShotBeamPositionCalculator`는 Recipe에서 Pixel 크기와 Review 카메라 AK 기준 위치를 읽고, AK margin은 호출자가 전달한 `ST_ALIGN_KEY_MARGINS`를 사용합니다. 이 Margin은 Setting에서 읽은 값이며 Recipe의 옛 Margin을 fallback으로 읽지 않습니다. Cell별 패턴 계산 결과는 `ConcurrentDictionary`에 보관하므로 같은 Cell을 반복 계산할 때 layout을 매번 새로 만들지 않습니다. Cell의 `CELLn_ROTATION`은 Beam local offset을 회전시키는 데 쓰입니다. [CReviewManager.cs:153–187](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L153-L187)

코드의 순서를 수식으로 옮기면 다음과 같습니다. 이 수식의 부호는 소스 그대로이며, 장비별 축 방향을 임의로 추정한 것이 아닙니다. [CReviewManager.cs:182–196](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L182-L196) [CReviewManager.cs:1001–1021](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L1001-L1021)

```text
shotAK_X = DesignX − AK_MARGIN_X + shiftOffsetX
shotAK_Y = DesignY − AK_MARGIN_Y + shiftOffsetY
(beamX, beamY) = RotateLocalOffset(localBeamX, localBeamY, CellRotation)

ReviewX = REVIEW_CAMERA_ALIGN_KEY_POS_X + shotAK_X + beamX
StageY  = REVIEW_CAMERA_ALIGN_KEY_POS_Y
          + StageScanDirectionY × (shotAK_Y + beamY)
```

**해설:** AK margin은 설계 원점과 Align Key 기준의 차이를 옮기는 역할입니다. Stage 방향은 Y 이동의 부호를 바꾸는 별도 값입니다. Cell 회전은 Beam의 상대 위치를 회전시킵니다. 이 셋은 서로 다른 변환이므로 “Y가 반대로 보인다”는 이유만으로 Vision Flip이나 Head Flip을 추가하면 이중 반전이 생길 수 있습니다. 실제 Vision Flip 순서는 별도 함수에 명시되어 있습니다. [CReviewManager.cs:1011–1021](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L1011-L1021) [CReviewManager.cs:3687–3715](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L3687-L3715)

### 설명용 계산 예시

가상 입력이 `Design=(60,50) mm`, `AK margin=(55,45) mm`, `cameraAK=(100,200) mm`, 회전 후 Beam offset `(0.2,−0.1) mm`, Shift `(0,0)`, Stage 방향 `−1`이면 Review 목표는 `(105.2,195.1)`입니다. 이는 위 수식을 손으로 확인하기 위한 예시이며 현재 Recipe나 설비의 실측값이 아닙니다. 이 결과가 Scanner 명령 `(Gx,Gy)`와 같다는 결론은 내릴 수 없습니다.

## 5. Head 배정과 제외 상태가 좌표보다 먼저 필요한 이유

일반 계획은 runtime parameters로 만든 가공 Shot 계획에서 `(CellNo, CellShotNo)`별 Head를 가져옵니다. Review 화면이 독자적으로 Head 번호를 임의 할당하는 구조로 설명하면 안 됩니다. Masking/CHESS 제외는 `ShouldSkipLaser`로 결정되며 해당 Point에 제외 사유도 남길 수 있습니다. [CReviewManager.cs:501–573](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L501-L573)

`BuildShotPoints`는 Head가 있고 제외되지 않은 점만 `Use`로 만들 수 있습니다. 좌표가 계산되어 화면에 존재한다는 사실과 이번 검사에서 사용한다는 사실은 다릅니다. 제외된 Shot이 맵에 보여도 자동 보정 대상에 포함된다는 뜻은 아닙니다. [CReviewManager.cs:742–777](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L742-L777) [CMenuCorrection.ReviewData.Offset.cs:273–278](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L273-L278)

## 6. AUTO FINE에서 별도로 동결하는 내용

AUTO 계획은 매 실행마다 입력을 잡아 Recipe와 Setting을 합친 뒤, 사용할 dictionary를 동결합니다. 일반 AUTO Fine은 Setting이 Recipe의 같은 키를 덮고, ZeroLine Follow-up은 이미 동결된 키를 보존하는 분기가 있습니다. `SHIFT_OFFSET_X/Y`는 이 경로에서 명시적으로 `0.000000`으로 설정됩니다. 가공 AUTO 요청 준비 쪽도 Manual MOF Shift를 0으로 만듭니다. 따라서 **현재 코드에서 AUTO가 수동 Shift를 그대로 계승한다는 설명은 맞지 않습니다.** [CAutoFineReviewCoordinator.cs:210–228](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L210-L228) [CStationProcess.cs:4039–4050](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L4039-L4050)

AUTO는 Beam11을 기준으로 선택하고, 선택된 line의 점마다 계산기를 호출해 `ReviewX/StageY`를 채웁니다. 줄마다 진행 방향을 번갈아 바꾸는 정렬이 있습니다. 이는 점 순서의 snake 정렬이지, 임의의 Masking 형상을 우회하는 2차원 경로 탐색을 의미하지 않습니다. [CAutoFineReviewCoordinator.cs:238–280](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L238-L280)

## 7. 실행과 저장 경계에서 다시 하는 검증

1. 계획 생성 때 Beam 범위, 유효 layout, 유한한 목표좌표를 확인합니다. NaN/Infinity가 이동 명령까지 내려가지 않게 하는 경계입니다. [CReviewManager.cs:153–196](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L153-L196)
2. Fine 실행은 중복 실행을 막는 sequence lock을 잡고 Stage motion 소유권을 엽니다. 실제 Vision 상태인데 외부 simulationMeasurement를 주는 것은 거부합니다. [CReviewManager.cs:2713–2762](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L2713-L2762)
3. AUTO 결과 저장 전에는 Recipe ID, 검사점 개수, `(ShotKey, Head, Cell, Shot, Beam)`의 집합을 다시 확인합니다. 재시도로 순서가 뒤집힐 수 있으므로 배열 위치만 비교하지 않습니다. [CAutoFineReviewCoordinator.cs:171–198](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L171-L198)
4. 정상 검사로 끝나지 않았거나 결과 파일 저장 오류가 있으면 자동 보정 저장으로 진행하지 않습니다. 화면에 숫자가 보이는 것만으로 보정이 완료된 것이 아닙니다. [CAutoFineReviewCoordinator.cs:43–76](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L43-L76)

## 8. 코드에 주석을 달 때 설명해야 할 부분

| 코드 구간 | 필요한 주석의 내용 |
|---|---|
| 목표 계산 인수 | “설계 절대좌표를 AK 상대거리로 옮긴 다음 선택 Beam local offset을 더한다.” |
| tuple/record 인수 | “이 반환 타입은 StageY와 ReviewX의 인수 순서가 X/Y 직관과 다르므로 사용 속성으로 확인한다.” |
| AUTO Shift 0 | “사용자 수동 MOF Shift와 AUTO 요청을 분리하는 현재 정책이다. 요구 변경 시 가공과 Review 양쪽을 함께 변경해야 한다.” |
| Identity 검증 | “역방향 재시도에서도 점 소속을 보존하기 위해 순서 대신 식별자를 비교한다.” |

이 표는 **문서 주석 제안**입니다. 원본 소스에 주석을 추가하거나 코드를 변경하지 않았습니다.

## 9. 검증 과제

| 시험 입력 | 관찰할 값 | 기대 기준 / 실패 신호 |
|---|---|---|
| Cell 회전 0°/90°/180° | local Beam offset과 최종 목표 | 같은 Shot 중심에 대해 Beam 상대위치만 회전하며 수식과 일치. |
| Stage 방향 ±1 | ReviewX, StageY | X는 동일하고 Y 상대거리의 부호가 소스 수식대로 바뀐다. |
| 수동 Shift 1 mm 후 일반 계획 / AUTO 계획 | Plan metadata와 실제 목표 | 일반 계획의 명시적 인수와 AUTO 0 동결 정책을 구분한다. |
| Head 미배정 Shot | HeadNo, Use, 제외 사유 | 좌표 존재와 검사 사용 여부가 구분된다. |
| 결과 두 점의 순서만 교환 | Identity 검증 | 동일 집합은 허용할 수 있으나 누락·중복·다른 Beam 치환은 거부한다. |
| 목표 NaN/Infinity | 예외와 Stage 요청 발생 여부 | 이동 전 거부되어야 한다. |

위 시험은 제안이며 이 문서 작성 과정에서 장비 이동이나 Vision 측정을 실행하지 않았습니다.

## 10. 검사 화면 이력과 현재 Shot별 Beam 작업표

11.17.0까지 다섯 상위 탭을 사용했으나 현재 CORRECTION → REVIEW는 **SIMPLE(index0) / INSPECTION(index1)**입니다. INSPECTION 안에서 ALL SHOT·ONE SHOT·ONE LINE·BEAM INSP·ROUGH·FINE과 RUN/RESULT를 고릅니다. 동일한 CMenuReview와 별도 InspectionReviewData를 연결하며 Build는 선택 패널을 준비합니다. 검사·보정 실행 중에는 workspace/mode 전환을 잠급니다. [CCorrectionView.xaml:228–265](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CCorrectionView.xaml#L228-L265) [CMenuCorrection.cs:553–592](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L553-L592) [CCorrectionView.xaml.cs:18–47](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CCorrectionView.xaml.cs#L18-L47)

이력: 11.13.0에서는 여덟 검사·보정 탭이 나란히 있었고 완료 후 결과 이동을 물었습니다. 11.17.0은 다섯 탭과 최근 결과 LOAD/CLEAR를 사용했습니다. 현재는 저장 결과를 INSPECTION RESULT로 자동 LOAD합니다. 이전의 “8번째 탭(index7)” 또는 “REVIEW DATA index4” 안내는 현재 화면에 적용하지 않습니다. [CMenuCorrection.cs:508–517](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L508-L517) [CMenuReview.cs:2606–2677](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuReview.cs#L2606-L2677)

| 조작 / 자료 | 현재 코드 동작 | 반드시 구별할 점 |
|---|---|---|
| ONE LINE | 기준 Shot과 같은 설계 Y의 실행 가능한 줄 선택 | 다른 Cell도 포함될 수 있음 |
| BEAM INSP Shot 선택 | 활성 Shot과 Beam 편집 후보 선택 | 클릭 후보와 ADD/UPDATE 작업표는 다름 |
| ADD / UPDATE | ShotKey별 Beam 집합 복사본 등록 | 다른 Shot에도 같은 Beam을 강제하지 않음 |
| START | 각 Shot Beam 등록 검증 후 배열 동결 | Task수는 각 Shot Beam수의 합 |
| Manager 입력 | ST_BEAM_INSPECTION_ASSIGNMENT | 동일 Shot 중복 입력은 Beam 합집합 정규화 |
| Beam 좌표 | 계획 Shift와 Stage 방향으로 계산 | 이동 목표와 Vision 식별자는 별도 |

[CMenuReview.cs:3162–3193](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuReview.cs#L3162-L3193) [CMenuReview.cs:3345–3365](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuReview.cs#L3345-L3365) [CMenuReview.cs:3062–3079](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuReview.cs#L3062-L3079) [CReviewManager.cs:1381–1426](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L1381-L1426)

새 overload는 미배정 Head·MASKING/CHESS 제외 Shot을 거부하고 전역 SPLITED_BEAM_COUNT로 Beam 번호를 검증합니다. Hxx_DOE_EXIST는 이 검사 빌더에서 사용하지 않습니다. DOE OFF Head의 검사 Beam과 FirstBeam 평가 방식은 별도로 맞춰야 합니다. [CReviewManager.cs:1392–1422](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L1392-L1422) [CDefaultOffsetCalibration.cs:29–59](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Correction/CDefaultOffsetCalibration.cs#L29-L59)

```mermaid
flowchart LR
 A[INSPECTION 모드 선택] --> B[Shot별 Beam 편집]
 B --> C[ADD 또는 UPDATE 작업표]
 C --> D[Shot별 Beam 집합 동결]
 D --> E[Manager 검증과 좌표 계산]
 E --> F[측정 결과와 등급 표시]
 F --> G[별도 Offset 적용]
```

ONE LINE은 수동 줄 검사 기능이며 AUTO Fine의 Beam11·Shift0 정책을 바꾸지 않습니다. 현재 ONE_LINE 결과는 DIRECT_LINE으로 검사한 동일 Shot의 OK 오차만 보정할 수 있습니다. FINE 열보간과 다른 적용 방식입니다. [CMenuCorrection.ReviewData.Offset.cs:284–293](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L284-L293) [CMenuCorrection.ReviewData.Offset.cs:529–536](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L529-L536)

## 11. ShotMap의 선택·그리기·배율 경계

새 CReviewShotMapControl은 여러 Button 대신 하나의 FrameworkElement.OnRender에서 18 DIP(장치 독립 화면단위) 사각형을 그립니다. 행/열×19 DIP 크기를 반환하고 좌표를 나눠 Shot을 찾습니다. 좌클릭은 SelectCommand, 우클릭은 ShowBeamPositionsCommand입니다. 우클릭은 **Beam 위치 표시**이며 이동/측정/보정 context menu가 아닙니다. Ctrl 복수클릭·드래그 선택·Ctrl 휠·Alt 방향키 이동을 이 새 컨트롤에서 구현한 근거는 없습니다. HTML 시안과 실제 WPF 기능을 구분합니다. [CReviewShotMapControl.cs:119–187](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CReviewShotMapControl.cs#L119-L187) [CReviewShotMapControl.cs:319–332](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CReviewShotMapControl.cs#L319-L332)

같은 계획 참조·Cell·모드·LOAD 여부·등급 설정이면 Shot 행을 재사용하고 runtime 결과만 갱신합니다. 그러나 OnRender는 현재 Cell의 모든 점을 순회하고 깜박임도 전체 행에서 Current를 찾습니다. 화면 밖 점 생략 가상화나 실제 FPS 향상 수치를 입증한 것은 아닙니다. [CMenuReview.cs:5205–5281](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuReview.cs#L5205-L5281) [CReviewShotMapControl.cs:127–139](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CReviewShotMapControl.cs#L127-L139) [CReviewShotMapControl.cs:238–250](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CReviewShotMapControl.cs#L238-L250)

검증 과제: 가상 Shot A에 Beam1/11, B에 Beam4를 등록해 Task=3인지 확인합니다. 후보 변경만 한 경우와 UPDATE한 경우, 검사 중 열람 클릭, LOAD 중 START 차단, 1만 Shot Cell 탭 전환·메모리·render 시간을 나눠 시험합니다.

## 15. Setting의 AK Margin이 좌표계 전체에 들어오는 경로

이번 변경은 **AK_MARGIN_X/Y의 출처**를 Recipe에서 Setting > Common > ALIGN으로 옮긴 것입니다. 카메라가 AK를 보는 축 위치인 `REVIEW_CAMERA_ALIGN_KEY_POS_X/Y`는 여전히 Recipe에서 읽습니다. 이름에 Align이 포함되었다고 두 항목을 같은 것으로 설명하면 안 됩니다. [CAlignKeyMarginSettings.cs:6–51](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CAlignKeyMarginSettings.cs#L6-L51) [CReviewManager.cs:152–196](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L152-L196)

```mermaid
flowchart LR
 S[Setting Common ALIGN의 AK Margin] --> V[0 이상 유한 mm 검증]
 R[Recipe의 패턴과 카메라 AK 위치] --> P[CreatePlanCore]
 V --> P
 V --> Q[Shot Beam 계산기에 명시적 전달]
 P --> H[실제 가공 Head 배정과 제외점]
 Q --> T[카메라 X와 Stage Y 목표]
 H --> T
 T --> I[Stage IOF와 Vision 식별자 요청]
```

`CreatePlanCore`는 가공과 같은 Recipe+Option/Motor 합성 맵으로 Head를 배정하고, `settingManager.GetAlignKeyMargins()`를 `BuildShotPoints`에 넘깁니다. AUTO Fine은 합성한 맵에서 Margin을 읽어 동결합니다. Beam Inspection·0선계획·Fine/Rough 미리보기·최근 결과 재구성도 새 인수를 전달합니다. Margin이 누락되거나 음수/NaN이면 예전 Recipe 수치로 조용히 대체하지 않고 오류입니다. [CReviewManager.cs:506–545](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L506-L545) [CReviewManager.cs:576–598](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L576-L598) [CAutoFineReviewCoordinator.cs:203–237](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L203-L237)

**운영 확인:** 같은 Recipe라도 공통 Setting Margin을 바꾸면 설계 패턴과 Review 목표가 다시 계산됩니다. 결과/Offset 파일은 당시 Setting 전체의 hash를 보관하지 않으므로, 과거 파일을 LOAD할 때 Recipe ID만 같은지보다 당시 좌표기준도 같은지 대조해야 합니다. 단순 Margin 입력 검증을 과거 보정의 자동 재기준화 검증으로 해석하지 않습니다. 설계 Shot도 같은 Margin을 더해 다시 만들고 Review에서 Design−Margin을 빼는 일관된 경로에서는 두 값이 상쇄될 수 있습니다. Margin 변경이 모든 실제 Review 목표를 반드시 평행이동시킨다는 뜻은 아닙니다. [CMenuReview.cs:2732–2822](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuReview.cs#L2732-L2822)
