# 가공과 Review 영향 분석

## A. 새 Align 보정이 실제 가공으로 가는 경로

1. Correction 화면이 선택 Recipe를 불러와 AK/DK 배치와 Base를 표시합니다.
2. Load는 선택한 AK/DK의 MELSEC 값을 한 번 읽습니다. 연결/맵을 먼저 검사하고 읽기 후 변경 여부를 재검사합니다. 시뮬레이션은 Base에 ±1mm 범위 샘플을 더합니다.
3. `CAlignDistortionPanel.InterpolationKeys`가 **Base−LastLoad**를 만듭니다. 이 새 Align 경로는 일반 Review의 측정−목표 오차와 의미가 다릅니다.
4. `CAlignInterpolation`은 같은 Y의 좌우 키를 X방향 선형으로 연결하고 Y는 인접 행 구간선형(Bilinear) 또는 전 행 Lagrange로 계산합니다. 단순히 행 번호로 나누지 않습니다.
5. 비교 기능은 DK 세트를 하나씩 빼고 검증해 RMS/최대오차를 비교합니다. RMS5% 이상 개선·최대오차 비증가를 모두 만족할 때만 추천합니다. DK 한 세트 등 판단 근거가 부족하면 보류합니다.
6. Apply는 전체 Shot을 계산하고 Recipe/입력 Signature/설정 Tolerance가 중간에 달라지지 않았는지 확인합니다. 범위 밖 Shot이 있으면 전체 취소합니다. 어느 축이든 Tolerance 초과면 Shot 전체를 제외하고 그 Shot의 기존 X/Y를 유지하는 선택을 제공합니다.
7. CAlignShotOffsetData.Apply→CRecipeManager.SaveRecipe→CJhmiRecipeFile이 생성 키를 저장합니다. 파일을 다시 읽어 캐시/이력을 갱신합니다.
8. 가공용 RuntimeParameters는 Recipe 값과 장비 설정을 결합하고, 일반 Review Offset은 별도 최신 파일에서 병합합니다.
9. CShotCoordinatePlanBuilder가 Model/Cell/Shot을 만들고 Head를 배정한 뒤 AlignOffset을 Stage 방향/XY Flip/X Flip/Y Flip에 맞게 변환합니다.
10. 최종 Scanner 좌표에 Recipe/Default/FirstBeam/Review/Align 성분을 더하고 Shift를 반영합니다. Script CSV에도 Align 성분이 추가됩니다.

근거: [CAlignLastLoadService.cs:59–101](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.UI/Menu/Menus/CAlignLastLoadService.cs#L59-L101) · [CAlignLastLoadService.cs:41–63](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.UI/Menu/Menus/CAlignLastLoadService.cs#L41-L63) · [CAlignDistortionPanel.Algorithm.cs:44–79](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.UI/Menu/Menus/CAlignDistortionPanel.Algorithm.cs#L44-L79) · [CAlignInterpolation.cs:71–108](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Correction/CAlignInterpolation.cs#L71-L108) · [CAlignAlgorithmComparison.cs:14–60](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Correction/CAlignAlgorithmComparison.cs#L14-L60) · [CMenuCorrection.AlignOffset.cs:11–116](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.UI/Menu/Menus/CMenuCorrection.AlignOffset.cs#L11-L116) · [CStationProcess.cs:1995–2055](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Station/CStationProcess.cs#L1995-L2055) · [CShotCoordinatePlanBuilder.cs:127–149](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L127-L149).

**주의:** Recipe의 AlignOffset은 설계계이지만 PROCESS_COORDINATES.csv의 AlignOffsetX/Y에는 변환된 AlignScannerOffset을 출력합니다. 같은 열 이름을 같은 좌표계로 취급하면 안 됩니다. 새 보정은 일반 ReviewOffset과 별도 값입니다. 단순 합산하므로 두 값이 같은 편차를 보정하는지, 서로 다른 기준의 잔여량인지 운영 계약이 필요합니다. 근거: [CAutomation1ScriptFile.cs:131–148](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.File/Script/CAutomation1ScriptFile.cs#L131-L148).

## B. Model와 Head 및 Masking

Model 픽셀/Beam/Pitch/Chess/라운드/Mask 계산기와 Head 선택의 기본 규칙은 이번 Commit에서 바뀌지 않았습니다. 새 CAlignShotOffsetData는 기존 설계 Shot 생성기를 공유하므로 UI 임의 표와 실제 가공 대상이 완전히 다른 기준으로 생기는 것을 줄입니다.

다만 Head 배정·Mask 판단은 기본 설계 위치를 기준으로 하고 Align 보정은 뒤에 가산됩니다. 큰 보정 후 Scanner Field·Mask/Glass 경계와 실제 기판 변형의 대응을 어떤 좌표계에서 재검사할지는 별도로 검증해야 합니다. 단순히 설계 Mask를 이동량만큼 고정 이동시키면 된다고 확정하지 않습니다.

근거: [CRecipeModelPixelCountReader.cs:3–43](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Recipe/CRecipeModelPixelCountReader.cs#L3-L43) · [CCellPatternCalculator.cs:3–48](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Recipe/CCellPatternCalculator.cs#L3-L48) · [CRecipeShotMaskingPlan.cs:3–43](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Recipe/CRecipeShotMaskingPlan.cs#L3-L43) · [CShotCoordinatePlanBuilder.cs:349–389](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L349-L389) · [CShotCoordinatePlanBuilder.cs:127–149](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L127-L149).

## C. Fine 선정이 바뀐 부분과 안 바뀐 부분

이전에는 Glass 전체 가공 Y범위에서 공통 1/3/5/7라인을 고르고 가까운 Cell로 대응했습니다. 최신은 각 Cell의 가공 Y범위 안에서 라인을 독립 선정합니다. 따라서 같은 Fine1 설정에서도 Cell 수만큼 측정 라인이 늘고 실제 대상 수와 예상 시간도 달라집니다. 한 라인 안의 X포인트 수와 Y라인 수는 다른 개념입니다.

그러나 결과 투영 `ProjectFineResultRows`의 키는 여전히 HeadNo+DesignX입니다. CellNo가 없습니다. N10은 두 Cell 모두 계획되는 정상 변경을 확인했고 N09는 Cell1의10µm와 Cell2의30µm가 섞여 Cell1 끝점에15µm가 되는 불일치를 재현했습니다. **계획만 Cell별로 바뀐 것이 결과 계산도 Cell별이 됐다는 뜻은 아닙니다.**

후보 부족 시 Clamp, 최근접 중복 시 개수 축소도 남아 있습니다. 요청/계획/실측 개수를 나눠 검수해야 합니다. 근거: [CReviewRulePlanBuilder.cs:375–408](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L375-L408) · [CReviewRulePlanBuilder.cs:490–527](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L490-L527) · [CReviewManager.cs:1743–1778](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewManager.cs#L1743-L1778).

## D. Beam 진단은 일반 Review와 별도 경로입니다

UI Shot 선택/Beam 선택→BuildBeamInspectionTargets→각 Shot의 회전·Beam Pitch·Stage방향을 반영한 목표 생성→StartBeamInspection→공통 측정 함수→SaveBeamInspection 순서입니다. 여러 Shot×선택 Beam이 검사 목록이고 Mask/Chess 제외 또는 Head 미배정 Shot은 거부합니다.

실제 Stage/Review 이동이 연결되지 않은 것을 인지해 Beam 진단은 비시뮬레이션에서 명시적으로 차단합니다. 중단해도 이미 측정한 결과는 저장하고 미검사 상태를 남깁니다. 최근 결과 Load는 표시 데이터이며 현재 Recipe의 실행 대상/목표로 덮어쓰지 않습니다.

Beam 번호 검증은 현재 분할 개수1 또는4만 허용하고 결과 CSV는 Beam16개 고정입니다. 3×3/5×5 DOE로 바꿀 때 단순 파라미터 변경만으로 검사·파일 형식이 자동 확장되는 구조는 아닙니다. 근거: [CReviewManager.BeamInspection.cs:21–71](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewManager.BeamInspection.cs#L21-L71) · [CReviewManager.BeamInspection.cs:61–73](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewManager.BeamInspection.cs#L61-L73) · [CReviewManager.cs:532–573](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewManager.cs#L532-L573) · [CReviewManager.cs:1940–1958](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewManager.cs#L1940-L1958) · [CReviewResultFile.BeamInspection.cs:9–75](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.File/ReviewResult/CReviewResultFile.BeamInspection.cs#L9-L75) · [CMenuReview.BeamInspection.Results.cs:25–65](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.UI/Menu/Menus/CMenuReview.BeamInspection.Results.cs#L25-L65).

## E. 일반 Review와 Product는 기존 경로를 유지합니다

일반 P2P/IOF, Vision UID/오류/길이 검사, ReviewResult, ReviewOffset, Product 진행/결과 record는 이번 변경의 핵심 수정 대상이 아닙니다. 새 파일/화면이 이 계약을 자동 대체하지 않습니다. 일반 Review 이동 메서드는 여전히 명령 문자열을 만든 뒤 실제 전송하지 않고, Auto의 RunReviewStep은 예약 로그만 남깁니다. 자동 파워 단계도 예약 성격의 로그입니다.

Product Recipe Snapshot에는 새 키가 포함될 수 있지만 새 Beam 결과 파일에 Product Run/Offset Revision 승인 고리가 추가된 것은 아닙니다. 일반 Review 결과를 NG/Limit/Revision으로 최종 승인하는 방어는 별도 보완이 필요합니다. 이는 주로 기존 미완료이며 신규 기능 완료로 오해하지 않도록 함께 기록했습니다.

근거: [CReviewManager.cs:1992–2040](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewManager.cs#L1992-L2040) · [CStationProcess.cs:1636–1649](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Station/CStationProcess.cs#L1636-L1649) · [CProductManager.cs:42–86](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Product/CProductManager.cs#L42-L86) · [CReviewResultFile.cs:21–50](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.File/ReviewResult/CReviewResultFile.cs#L21-L50) · [CReviewOffsetFile.cs:5–55](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L5-L55) · [CMenuCorrection.cs:1146–1179](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1146-L1179) · [CVisionComm.cs:226–241](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Interface/Vision/CVisionComm.cs#L226-L241).

## F. 공유 상태와 수동 기능

Automation 상태 서비스가 축/Task/CPU를 공통으로 수집하고 UI/알람/로그는 캐시를 소비합니다. 5초 초과는 STALE, 최근10초 요청이 없는 구독은 정리합니다. 축 명령 ACK 후 이전 캐시가 완료 신호로 쓰이지 않게 세대와 수집 시각을 확인하는 서비스가 추가됐습니다. Auto START의 중요한 안전 판단은 신선한 직접 조회를 유지하고 화면 감시는 공유 캐시를 사용합니다.

알람은 화면 선택과 독립된 감시 작업자를 사용합니다. PowerMeasure는 센서 공유 Head를 순차 처리하고 센서 간에는 병렬로 처리할 수 있습니다. 현재 수동 PowerMeasure UI는 Simulation Session을 사용하며, 실센서/출사 완료로 판정하지 않습니다. PowerTable은 최종 측정 W를 저장하고 시뮬레이션 결과는 별도 경로로 보존합니다.

Script의 레이저 펄스폭은 출력률 값 대신 계산한 주기로 설정하도록 바뀌었고, 수동 Laser Delay는 기존 1/2값 대신 입력값을 직접 전달하며 0도 출력해 이전 값을 지웁니다. 이 분석은 명령 생성 코드 변경 확인이며 실제 전기적 듀티/광출력/컨트롤러 지연 단위 검증은 아닙니다.

근거: [CAutomationStatusSnapshotService.cs:21–84](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L21-L84) · [CAutomationPositioningService.cs:34–67](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Automation/CAutomationPositioningService.cs#L34-L67) · [CAlarmManager.Monitoring.cs:24–58](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Alarm/CAlarmManager.Monitoring.cs#L24-L58) · [CPowerMeasureService.cs:79–111](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Interface/CPowerMeasureService.cs#L79-L111) · [CManualPowerMeasurePanel.cs:149–171](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.UI/Menu/Menus/CManualPowerMeasurePanel.cs#L149-L171) · [CPowerTableFile.Measurement.cs:13–45](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.File/PowerTable/CPowerTableFile.Measurement.cs#L13-L45) · [CAutomation1ScriptFile.cs:381–394](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.File/Script/CAutomation1ScriptFile.cs#L381-L394) · [CAutomation1ScriptFile.cs:1452–1461](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.File/Script/CAutomation1ScriptFile.cs#L1452-L1461).
