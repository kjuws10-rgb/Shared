# Commit 변경 요약

원본 범위: `5aee8e58439c9b455cae7c9593c9be986c3e682e` → `dfa5920e6301d9ec4b0eab1452ae59521aafc986`, 커밋 제목 `Ver 11.13.0`.

| 그룹 | 경로 | 추가행 | 삭제행 |
| --- | --- | --- | --- |
| Config | 14 | 85055 | 42854 |
| Data | 31 | 172290 | 1 |
| Drilling.Common | 8 | 415 | 85 |
| Drilling.File | 4 | 123 | 19 |
| Drilling.UI | 33 | 6674 | 526 |

행 변화 대부분은 Recipe 좌표/결과·스크립트 산출물입니다. 이 규모를 새 기능 코드량으로 해석하지 않습니다. 운영·측정 CSV의 실제 행은 게시하지 않고 파일 분류·스키마·소비 코드만 설명합니다.

## 핵심 변경

- Review 메뉴의 소유·진입이 CORRECTION 중심으로 이동했습니다. 기존 Manager를 새로 복제한 것이 아닙니다.
- ONE LINE은 실행 가능한 같은 Glass Y 줄을 Cell 경계와 무관하게 모읍니다. 측정·저장과 OFFSET APPLY 지원은 별개입니다.
- KEY IN/COPY는 별도 `_EDIT_` Revision을 만들며 JUDGE도 편집할 수 있습니다. 새 측정으로 간주하면 안 됩니다.
- Default는 AK1/AK3 X 입력 평균과 전역 DOE 1×1/4×4를 지원합니다. Head별 혼합 DOE나 2D 회전 보정을 자동 증명하지 않습니다.
- Monitor 미리보기는 현재 선택 값의 좌표 설명입니다. 실행 중 Station 스냅샷/최종 Script와 시점이 다를 수 있습니다.
- 보호윈도우 Retry 0~3은 최초 요청 뒤 추가 요청 횟수입니다. 소진은 LIGHT 경고 후 AUTO를 계속하는 정책입니다.
- Alarm 원인 분석은 로컬 로그 규칙/시각 상관 분석입니다. LLM 호출이나 인과관계 확정 기능이 아닙니다.

## 추적한 변경 파일

| 경로 | 추가 | 삭제 |
| --- | --- | --- |
| Config/JHMI_ALARMLIST.csv | 1 | 0 |
| Config/JHMI_INTERFACE.csv | 1 | 1 |
| Config/JHMI_INTERFACE_현장.csv | 31 | 0 |
| Config/JHMI_MELSEC_MAP.csv | 2 | 2 |
| Config/JHMI_RCP.csv | 2 | 1 |
| Config/RECIPE/DRILL_A01.csv | 1 | 0 |
| Config/RECIPE/animotion.csv | 1 | 0 |
| Config/RECIPE/simple2.csv | 1 | 0 |
| Config/RECIPE/test0929.csv | 42847 | 42846 |
| Config/RECIPE/test0929_reviewoffset/20261110_172320_468_reviewoffset.csv | 20741 | 0 |
| Config/RECIPE/test0929_reviewoffset/20261112_121109_081_reviewoffset.csv | 21421 | 0 |
| Config/RECIPE/test0929_reviewoffset/_apply/2026/11/10/AppliedSources.csv | 1 | 0 |
| Config/RECIPE/wizardtest.csv | 1 | 0 |
| Config/Setting/Setting.csv | 4 | 4 |
| Data/DefaultOffset/test0929/261113_133427_814_MEASURE_HEAD_5a737135bf64425c8b43f9d5e330ff11.csv | 17 | 0 |
| Data/ManualMof/LastSuccessfulMof.json | 1 | 1 |
| Data/Review/Auto/test0929/DUMMY_20261104_134717756_20261104_135832_883_EDIT_20261113_150729_146.csv | 1221 | 0 |
| Data/Review/Auto/test0929/DUMMY_20261104_134717756_20261104_135832_883_EDIT_20261113_150813_023.csv | 1221 | 0 |
| Data/Review/Auto/test0929/DUMMY_20261109_151140827_20261111_103332_232.csv | 1221 | 0 |
| Data/Review/Auto/test0929/INTEGRATION_20261113_115803_063_20261113_115914_517.csv | 1221 | 0 |
| Data/Review/Auto/test0929/INTEGRATION_20261113_115803_063_20261113_120106_845.csv | 3571 | 0 |
| Data/Review/Manual/test0929/ALL_SHOT/INTEGRATION_20261113_115803_063_20261113_115831_894.csv | 2 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/INTEGRATION_20261113_115803_063_20261113_115833_106.csv | 2 | 0 |
| Data/Review/Manual/test0929/FINE/INTEGRATION_20261113_115803_063_20261113_115834_166.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261113_120751_820.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261113_122836_888.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261113_123442_683.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261113_123845_394.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261113_124705_573.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261113_125251_235.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/INTEGRATION_20261113_115803_063_20261113_115832_567.csv | 2 | 0 |
| Data/Review/Manual/test0929/ROUGH/INTEGRATION_20261113_115803_063_20261113_115833_625.csv | 2 | 0 |
| Data/Review/ZeroDefence/test0929/INTEGRATION_20261113_115803_063/20261113_120107_098_FOLLOWUP.csv | 245 | 0 |
| Data/Review/ZeroDefence/test0929/INTEGRATION_20261113_115803_063/20261113_120107_098_ZERO_DEFENCE.csv | 2 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS.txt | 1802 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_COORDINATES.csv | 20741 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_H01.ascript | 16255 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_H02.ascript | 16179 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_H03.ascript | 17395 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_H04.ascript | 17964 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_H05.ascript | 18385 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_H06.ascript | 18184 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_H07.ascript | 18635 | 0 |
| Data/Script/BufferedRun/20261111_113929_DUMMY_20261109_151140827/PROCESS_H08.ascript | 17964 | 0 |
| Data/Script/DefaultOffset/H03_DEFAULTOFFSET_20261113_133410_808.ascript | 44 | 0 |
| Drilling.Common/Correction/CDefaultOffsetCalibration.cs | 85 | 50 |
| Drilling.Common/Managers/CManager.cs | 9 | 1 |
| Drilling.Common/Managers/CRecipeManager.cs | 12 | 0 |
| Drilling.Common/Product/CProductManager.cs | 5 | 1 |
| Drilling.Common/Review/CAutoFineReviewCoordinator.cs | 5 | 3 |
| Drilling.Common/Review/CReviewManager.cs | 193 | 19 |
| Drilling.Common/Station/CStationManager.cs | 4 | 2 |
| Drilling.Common/Station/CStationProcess.cs | 102 | 9 |
| Drilling.File/Correction/CAlignOffsetLogFile.cs | 2 | 2 |
| Drilling.File/JHMI/CMelsecMapFile.cs | 2 | 1 |
| Drilling.File/ReviewResult/CReviewResultFile.Catalog.cs | 1 | 1 |
| Drilling.File/ReviewResult/CReviewResultFile.cs | 118 | 15 |
| Drilling.UI/CRootView.cs | 10 | 8 |
| Drilling.UI/Drilling.UI.csproj | 1 | 1 |
| Drilling.UI/Menu/CBindingBase.cs | 12 | 4 |
| Drilling.UI/Menu/Menus/CAlarmCauseAnalysis.cs | 1625 | 0 |
| Drilling.UI/Menu/Menus/CCoordinateOffsetPreviewDrawing.cs | 418 | 0 |
| Drilling.UI/Menu/Menus/CCoordinateShotMapPreviewDrawing.cs | 230 | 0 |
| Drilling.UI/Menu/Menus/CMenuAlarm.cs | 36 | 5 |
| Drilling.UI/Menu/Menus/CMenuBase.cs | 1 | 1 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs | 356 | 3 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs | 715 | 0 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Reinspection.cs | 9 | 5 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.cs | 74 | 2 |
| Drilling.UI/Menu/Menus/CMenuCorrection.cs | 159 | 54 |
| Drilling.UI/Menu/Menus/CMenuMain.cs | 12 | 0 |
| Drilling.UI/Menu/Menus/CMenuManual.cs | 3 | 28 |
| Drilling.UI/Menu/Menus/CMenuMonitor.cs | 571 | 44 |
| Drilling.UI/Menu/Menus/CMenuReview.cs | 244 | 32 |
| Drilling.UI/Popup/CAlarmCauseAnalysisDialog.xaml | 413 | 0 |
| Drilling.UI/Popup/CAlarmCauseAnalysisDialog.xaml.cs | 142 | 0 |
| Drilling.UI/Popup/CAlarmPopupDialog.xaml | 8 | 6 |
| Drilling.UI/Popup/CAlarmPopupDialog.xaml.cs | 25 | 0 |
| Drilling.UI/Views/CAlarmView.xaml | 7 | 2 |
| Drilling.UI/Views/CCorrectionView.xaml | 16 | 3 |
| Drilling.UI/Views/CCorrectionView.xaml.cs | 42 | 0 |
| Drilling.UI/Views/CDefaultOffsetView.xaml | 2 | 2 |
| Drilling.UI/Views/CDefaultOffsetView.xaml.cs | 63 | 14 |
| Drilling.UI/Views/CMainProtectWindowView.xaml | 8 | 2 |
| Drilling.UI/Views/CManualView.xaml | 1 | 19 |
| Drilling.UI/Views/CMonitorView.xaml | 541 | 169 |
| Drilling.UI/Views/CMonitorView.xaml.cs | 32 | 0 |
| Drilling.UI/Views/CReviewDataView.xaml | 642 | 99 |
| Drilling.UI/Views/CReviewDataView.xaml.cs | 202 | 1 |
| Drilling.UI/Views/CReviewView.xaml | 54 | 22 |
