# 가공·Review 영향 분석

## 전체 구조와 이번 변경의 위치

프로그램은 WPF 화면(`Drilling.UI`), 공통 계산·시퀀스(`Drilling.Common`), CSV/JSON 입출력(`Drilling.File`)의3개 프로젝트입니다. Recipe → Cell/Shot 설계 → Head/Beam 좌표 → Masking → MOF 준비/실행 → Vision 측정 → ReviewResult → Correction Offset → 다음 가공으로 이어집니다. 이번 변경은 뒤쪽의 **결과 재검사·보정 저장**과 앞뒤를 잇는 **Shift 조건 기록**에 집중됩니다.

| 경계 | 현재 호출 흐름 | 영향 |
| --- | --- | --- |
| Recipe → 가공 | CRecipeManager/PrepareProcess → CShotCoordinatePlanBuilder | 저장 Align/Default와 공통 보정율이 가공 좌표에 영향 |
| 수동 MOF → 수동 Review | 성공 완료 기록 → Shift 선택창 → CreatePlan/ApplyShiftOffset | 이동 목표가 수동 MOF Shift를 따라감 |
| AUTO DoReady → AUTO Review | DoReady에서 Shift 0 → AutoFine 입력도 Shift 0 | Shift 유지 AUTO 요구는 미반영 |
| ReviewData → 재검사 | 결과 LOAD → Shot 목록 → ExecuteOneShot → Revision 저장 | 결과 화면에서 선택 재측정 가능 |
| ReviewResult → 보정 | Apply 미리보기 → SaveNewFromSource → Offset/AppliedSources | 당일 경로 기반 중복 차단/확인 |
| Offset → 다음 가공 | 최신 파일 재확인/DoReady 준비 | 이미 준비한 작업과 새 Offset의 적용 시점 확인 필요 |

## 수동 Shift가 움직이는 방향

새 Plan 생성과 기존 Plan의 Shift 교체를 비교했습니다. `ApplyShiftOffset`은 **새 Shift−기존 Shift**만 더하므로 같은 값 선택을 반복해도 그 값만큼 계속 누적하지 않습니다. X 변화는 ΔShiftX, Y 변화는 StageScanDirectionY×ΔShiftY입니다. Cell 회전은 Beam offset에 적용되므로 Shift 자체를 두 번 회전시키는 계산은 아닙니다.

근거: [CReviewManager.cs:211](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L211-L235), [CReviewManager.cs:647](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L647-L695), [CReviewManager.cs:954](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L954-L974).

AUTO 가공의0고정: [CStationProcess.cs:3986](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3986-L3998). 따라서 “모든 가공/리뷰에서 Shift가 유지된다”로 일반화하지 않습니다.

## 재검사의 실제 동작

재검사 목록의 Cell/Shot/Beam으로 현재 Recipe 기반 Plan을 만들고, **로드한 결과 파일에 기록된 Shift**를 전달합니다. 단순 이동은 측정값을 갱신하지 않고, 측정은 MarkFindSingle 경로를 사용합니다. 신규 일괄 Shot 재검사는 연속 Flying Line 검사와 다릅니다. [CMenuCorrection.ReviewData.Reinspection.cs:515](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Reinspection.cs#L515-L582).

이후 결과 저장과 보정 적용은 별도 동작입니다. 이동/측정만으로 다음 가공의 Offset이 자동 변경된다고 안내하면 안 됩니다. 사용자 요구인 ‘정상 기준 Shot 한 개의 보정값을 선택 영역에 그대로 복사’와 ‘임의 Line을 Flying으로 검사’가 구현됐다고 볼 근거도 없습니다.

## Masking·Sampling·Head/Beam

핵심 `CShotCoordinatePlanBuilder`, `CReviewRulePlanBuilder`는 이번 diff에서 변경되지 않았습니다. 설계 좌표 기반의 HIAA/Round/Chess 제외 판정과 Sampling Rule 구조를 유지합니다. **촬영 대상 제외**와 **Stage의 Masking 구간 물리 우회**는 별개이며, Shift 선택창이 추가됐다는 사실로 물리 회피가 구현됐다고 볼 수 없습니다.

가공 준비의 Head 배정 시작점: [CShotCoordinatePlanBuilder.cs:11](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L11-L55). Sampling 분기: [CReviewRulePlanBuilder.cs:5](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L5-L22). 원빔은 DOE가 없어 실제 Zero Order 한 점이 출사되는 경우입니다. 이번 변경에 Head별 DOE/원빔 혼합 생산 모드가 추가된 것은 아닙니다.

## 상세 교차 검토

아래의 전용 검토를 함께 읽으면 UI에서 값이 어디로 전달되는지와 저장 실패/중복/복원의 경계를 추적할 수 있습니다.

- [Recipe·좌표·Masking·Shift 상세 검토](07_Recipe좌표상세검토.md): 변경 Recipe 값, Head/Beam, 수동 Shift와 AUTO0 정책, 실제 좌표 산식과 표시 경계를 설명합니다.

- [결과·보정·복원 상세 검토](08_결과보정상세검토.md): BASE 일부 재검사 후 재누적, 비정상 오차0치환, 날짜/경로 중복 방어, 보상 복구와 Product/Run 연결을 추적합니다.

- [UI·재검사 상세 검토](09_UI재검사상세검토.md): 실제 명령·상태·저장/로드와 비동기 전환 경합, 현재 Recipe로 재계산하는 조건을 구분합니다.
