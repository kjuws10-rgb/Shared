# Commit 변경 요약

| Commit | 제목 | Commit 시각 |
| --- | --- | --- |
| 8c07af269fc0470de943cd3dd48d51be568fb0fb | A3_LD_11.18.0 | 2026-11-19T15:44:41+09:00 |
| 28764c91d521777b8ee068dd7aaf2d3902ce9fe2 | Ver 11.19.0 | 2026-11-20T08:17:18+09:00 |

| 그룹 | 경로 | 추가행 | 삭제행 |
| --- | --- | --- | --- |
| Config | 12 | 64275 | 16 |
| DEBUG_COMMENT_RULES.txt | 1 | 283 | 0 |
| Data | 26 | 91095 | 1232 |
| Drilling.Common | 17 | 329 | 121 |
| Drilling.File | 5 | 108 | 20 |
| Drilling.UI | 28 | 2307 | 581 |

## 주요 변경

- AK_MARGIN_X/Y를 Recipe 정의·값에서 공통 Option/ALIGN Setting으로 이동했습니다. 새 읽기 함수는 누락·음수·NaN·무한대를 거부합니다.
- 좌표 빌더, Review, Default, 미리보기, Zero Defence, Script와 Distortion이 같은 Setting 값을 소비하도록 연결했습니다. Distortion은 준비 시 값을 동결합니다.
- Review 화면의 RUN/RESULT와 검사·보정 대상을 정리하고 ONE_LINE의 직접 보정과 EDITED/RETAINED 결과의 파일 적용 후보를 보강했습니다.
- Source Result 중복 확인을 당일 이력에서 Recipe의 전체 날짜 이력으로 넓혔고, Fine 원측정 저장의 중간 소수3자리 반올림을 줄였습니다.
- AUTO INIT은 Task·PC 핸드셰이크·Action 상태를 정리하는 경로입니다. Stage Home이나 모든 설비 신호 초기화가 아닙니다.
- PM 진입/해제·사유/이력·수명 표시가 추가/보강됐습니다. 추적 Git의 Log 구현 부재와 실제 장비 동작은 별도 확인 대상입니다.
- @흐름/@통신/@좌표 등의 디버깅 주석과 DEBUG_COMMENT_RULES.txt가 추가됐습니다. 주석의 보장 문구 자체를 실행 증거로 사용하지 않습니다.

운영 CSV의 새 행은 실제 값으로 복제하지 않습니다. 실행 이력이 늘었다는 사실을 기능 완성도나 실기 합격 근거로 해석하지 않습니다.

## 전체 diff 경로

| 경로 | 추가행 | 삭제행 |
| --- | --- | --- |
| Config/JHMI_RCP.csv | 3 | 5 |
| Config/JHMI_SETTING.csv | 3 | 0 |
| Config/RECIPE/DRILL_A01.csv | 0 | 2 |
| Config/RECIPE/animotion.csv | 0 | 2 |
| Config/RECIPE/simple2.csv | 0 | 2 |
| Config/RECIPE/test0929.csv | 1 | 3 |
| Config/RECIPE/test0929_reviewoffset/20261118_075556_342_reviewoffset.csv | 21421 | 0 |
| Config/RECIPE/test0929_reviewoffset/20261118_075616_547_reviewoffset.csv | 21421 | 0 |
| Config/RECIPE/test0929_reviewoffset/20261118_080920_594_reviewoffset.csv | 21421 | 0 |
| Config/RECIPE/test0929_reviewoffset/_apply/2026/11/18/AppliedSources.csv | 2 | 0 |
| Config/RECIPE/wizardtest.csv | 0 | 2 |
| Config/Setting/Setting.csv | 3 | 0 |
| DEBUG_COMMENT_RULES.txt | 283 | 0 |
| Data/Product/ActiveProduct.csv | 8 | 1232 |
| Data/Product/History/20261118/ProductHistory_20261118.csv | 3 | 0 |
| Data/Review/Auto/test0929/CODEX_REVIEW_1118_113623_20261118_115445_872.csv | 1221 | 0 |
| Data/Review/Auto/test0929/CODEX_REVIEW_1118_113623_20261118_115639_385.csv | 3571 | 0 |
| Data/Review/Auto/test0929/CODEX_REVIEW_1118_113623_20261118_115936_895.csv | 5786 | 0 |
| Data/Review/Auto/test0929/CODEX_REVIEW_1119_103658_20261119_105517_728.csv | 1221 | 0 |
| Data/Review/Auto/test0929/CODEX_REVIEW_1119_103658_20261119_105713_171.csv | 3571 | 0 |
| Data/Review/Auto/test0929/CODEX_REVIEW_1119_103658_20261119_110012_057.csv | 5786 | 0 |
| Data/Review/Auto/test0929/DUMMY_20261118_112525615_20261119_123052_292.csv | 1221 | 0 |
| Data/Review/Manual/test0929/ALL_SHOT/CODEX_REVIEW_1118_113623_20261118_114620_012.csv | 19526 | 0 |
| Data/Review/Manual/test0929/ALL_SHOT/CODEX_REVIEW_1119_103658_20261119_104650_110.csv | 19526 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/CODEX_REVIEW_1118_113623_20261118_114655_831.csv | 2 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/CODEX_REVIEW_1119_103658_20261119_104724_225.csv | 2 | 0 |
| Data/Review/Manual/test0929/FINE/-_20261118_080106_904.csv | 3571 | 0 |
| Data/Review/Manual/test0929/FINE/CODEX_REVIEW_1118_113623_20261118_114802_454.csv | 1221 | 0 |
| Data/Review/Manual/test0929/FINE/CODEX_REVIEW_1118_113623_20261118_114955_072.csv | 3571 | 0 |
| Data/Review/Manual/test0929/FINE/CODEX_REVIEW_1118_113623_20261118_115355_890.csv | 8001 | 0 |
| Data/Review/Manual/test0929/FINE/CODEX_REVIEW_1119_103658_20261119_104831_536.csv | 1221 | 0 |
| Data/Review/Manual/test0929/FINE/CODEX_REVIEW_1119_103658_20261119_105024_337.csv | 3571 | 0 |
| Data/Review/Manual/test0929/FINE/CODEX_REVIEW_1119_103658_20261119_105427_921.csv | 8001 | 0 |
| Data/Review/Manual/test0929/ONE_LINE/CODEX_REVIEW_1118_113623_20261118_114638_600.csv | 236 | 0 |
| Data/Review/Manual/test0929/ONE_LINE/CODEX_REVIEW_1119_103658_20261119_104707_121.csv | 236 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/CODEX_REVIEW_1118_113623_20261118_114630_634.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/CODEX_REVIEW_1119_103658_20261119_104700_323.csv | 2 | 0 |
| Data/Review/Manual/test0929/ROUGH/CODEX_REVIEW_1118_113623_20261118_114717_304.csv | 9 | 0 |
| Data/Review/Manual/test0929/ROUGH/CODEX_REVIEW_1119_103658_20261119_104744_585.csv | 9 | 0 |
| Drilling.Common/Alarm/CAlarmManager.cs | 3 | 1 |
| Drilling.Common/Automation/CAutomationManager.cs | 34 | 19 |
| Drilling.Common/Correction/CAlignInterpolation.cs | 25 | 7 |
| Drilling.Common/Correction/CDefaultOffsetCalibration.cs | 3 | 5 |
| Drilling.Common/Interface/CInterfaceManager.cs | 3 | 0 |
| Drilling.Common/Interface/Melsec/CMelsec.cs | 8 | 11 |
| Drilling.Common/Interface/Vision/CVisionComm.cs | 5 | 0 |
| Drilling.Common/Managers/CAlignKeyMarginSettings.cs | 53 | 0 |
| Drilling.Common/Managers/CRecipeManager.cs | 6 | 4 |
| Drilling.Common/Managers/CSettingManager.cs | 7 | 0 |
| Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs | 44 | 21 |
| Drilling.Common/Review/CAutoFineReviewCoordinator.cs | 8 | 6 |
| Drilling.Common/Review/CReviewManager.cs | 38 | 17 |
| Drilling.Common/Review/CZeroDefenceRecipePlan.cs | 5 | 3 |
| Drilling.Common/Station/CStageReviewSequences.cs | 17 | 22 |
| Drilling.Common/Station/CStationManager.cs | 1 | 0 |
| Drilling.Common/Station/CStationProcess.cs | 69 | 5 |
| Drilling.File/JHMI/CJhmiRecipeFile.cs | 7 | 4 |
| Drilling.File/JHMI/CSettingFile.cs | 11 | 1 |
| Drilling.File/ReviewOffset/CReviewOffsetFile.cs | 79 | 11 |
| Drilling.File/ReviewResult/CReviewResultFile.cs | 6 | 1 |
| Drilling.File/Script/CAutomation1ScriptFile.cs | 5 | 3 |
| Drilling.UI/CRootView.cs | 422 | 28 |
| Drilling.UI/CRootView.xaml | 2 | 1 |
| Drilling.UI/Drilling.UI.csproj | 1 | 1 |
| Drilling.UI/Menu/CBindingBase.cs | 32 | 8 |
| Drilling.UI/Menu/Menus/CHeadAssignmentPreviewBuilder.cs | 3 | 3 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs | 6 | 6 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs | 21 | 9 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs | 19 | 4 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.cs | 194 | 5 |
| Drilling.UI/Menu/Menus/CMenuCorrection.cs | 193 | 68 |
| Drilling.UI/Menu/Menus/CMenuMain.cs | 116 | 11 |
| Drilling.UI/Menu/Menus/CMenuManual.cs | 8 | 0 |
| Drilling.UI/Menu/Menus/CMenuPm.cs | 162 | 24 |
| Drilling.UI/Menu/Menus/CMenuRecipe.cs | 55 | 38 |
| Drilling.UI/Menu/Menus/CMenuReview.cs | 344 | 62 |
| Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs | 18 | 2 |
| Drilling.UI/Popup/CAutoReviewMonitorDialog.xaml | 37 | 0 |
| Drilling.UI/Popup/CRecipeNameDialog.xaml | 1 | 0 |
| Drilling.UI/Popup/CZeroLineResultsDialog.xaml | 37 | 0 |
| Drilling.UI/Views/CCorrectionView.xaml | 3 | 12 |
| Drilling.UI/Views/CCorrectionView.xaml.cs | 1 | 1 |
| Drilling.UI/Views/CMainSequenceStatusView.xaml | 8 | 0 |
| Drilling.UI/Views/CPmView.xaml | 421 | 245 |
| Drilling.UI/Views/CPmView.xaml.cs | 30 | 1 |
| Drilling.UI/Views/CRecipeView.xaml | 17 | 8 |
| Drilling.UI/Views/CReviewDataView.xaml | 49 | 8 |
| Drilling.UI/Views/CReviewDataView.xaml.cs | 17 | 0 |
| Drilling.UI/Views/CReviewView.xaml | 90 | 36 |
