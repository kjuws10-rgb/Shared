# Commit 변경 요약

| Commit | 제목 | Commit 시각 |
| --- | --- | --- |
| 9a43c7097561d6d50cad4462923e16549e104bd2 | Ver 11.17.0 | 2026-11-17T15:53:44+09:00 |
| 96e22cd027c84bf302b23f2949b98985d7f301bb | A3_LD_11.17.0 Re Commint | 2026-11-17T16:24:36+09:00 |


| 그룹 | 경로 | 추가행 | 삭제행 |
| --- | --- | --- | --- |
| Config | 2 | 30 | 0 |
| Data | 55 | 11054 | 6 |
| Drilling.Common | 4 | 292 | 13 |
| Drilling.File | 2 | 37 | 3 |
| Drilling.UI | 20 | 4018 | 757 |


Data 55개 경로는 실행 중 생성된 Script/Default/Review/Product 관련 결과입니다. 그 값이나 실행 횟수를 코드 기능의 개발 완료율로 보지 않습니다. 운영 CSV는 실제 레코드를 복제하지 않고 스키마와 소비 코드를 문서화합니다.

## 중요한 변화

- Review 오차 크기의 상한 3개와 색상 4개를 Setting으로 편집합니다. 레벨은 화면 분류이며 OK/NG 판정을 바꾸지 않습니다.
- 선택 Shot마다 서로 다른 Beam 목록을 만들고 중복 Shot의 Beam을 합집합으로 정규화합니다. 측정/저장 경로는 기존 ReviewManager를 소비합니다.
- 결과 지도는 많은 버튼 대신 DrawingContext로 그립니다. 같은 화면이 가벼워지는 구현 변경과 현장 응답시간 합격은 별개입니다.
- Head별 DOE_EXIST가 Default 검사점 수를 1 또는 DOE 격자 수로 나눕니다. 일반 가공과 다른 Review의 Beam 선택은 바꾸지 않습니다.
- Default 로그에는 DOE_EXIST와 DEFAULT_INSPECTION_POINT_COUNT 열이 추가됩니다.
- Shift 미리보기는 전체 Shot Plan 재계산 대신 축 변환 벡터로 Head별 방향을 표시합니다. 실제 가공 좌표 엔진을 교체한 것이 아닙니다.

## 전체 diff 경로

| 경로 | 추가행 | 삭제행 |
| --- | --- | --- |
| Config/JHMI_SETTING.csv | 15 | 0 |
| Config/Setting/Setting.csv | 15 | 0 |
| Data/DefaultOffset/test0929/261115_170157_248_MEASURE_HEAD_c89348e3345e43b79e77ac5d0b4b4b24.csv | 17 | 0 |
| Data/DefaultOffset/test0929/261115_170211_205_MEASURE_HEAD_45901eeb334b4667a26f2ebf8814fda6.csv | 33 | 0 |
| Data/DefaultOffset/test0929/261115_170221_921_MEASURE_HEAD_45626480773944bda59a74bfe57ab7a7.csv | 49 | 0 |
| Data/DefaultOffset/test0929/261115_170234_316_MEASURE_HEAD_a386d961dade4138865cf472d1d35574.csv | 65 | 0 |
| Data/DefaultOffset/test0929/261115_170246_012_MEASURE_HEAD_90dc730f29104c728f7c9ed1ca890b9f.csv | 81 | 0 |
| Data/DefaultOffset/test0929/261115_170258_273_MEASURE_HEAD_4f67731a785b49d9b65e4e367ec45af7.csv | 97 | 0 |
| Data/DefaultOffset/test0929/261115_170311_096_MEASURE_HEAD_fd5647ac7a1d402eb332bdab095aea03.csv | 113 | 0 |
| Data/DefaultOffset/test0929/261115_170323_701_MEASURE_HEAD_e6bb9909285141d58e6df1e9c2397fdb.csv | 129 | 0 |
| Data/DefaultOffset/test0929/261115_170346_882_APPLY_REQUEST_ba8935d85c464550bebe1723e94c9090.csv | 129 | 0 |
| Data/DefaultOffset/test0929/261115_170347_751_APPLY_APPLIED_2ec3008b2c1a44c795a152ccb9ab4d87.csv | 129 | 0 |
| Data/DefaultOffset/test0929/261116_140917_186_MEASURE_HEAD_345ff61c031b4a1888dec2a2753a5a86.csv | 2 | 0 |
| Data/DefaultOffset/test0929/261116_141103_396_MEASURE_HEAD_04bfad117a614c4b8c07db17adf42d3f.csv | 18 | 0 |
| Data/Product/ActiveProduct.csv | 1230 | 6 |
| Data/Product/History/20261115/ProductHistory_20261115.csv | 7 | 0 |
| Data/Product/History/20261116/ProductHistory_20261116.csv | 9 | 0 |
| Data/Product/History/20261117/ProductHistory_20261117.csv | 7 | 0 |
| Data/Review/Auto/test0929/INTEGRATION_20261116_141455_284_20261116_141607_995.csv | 1221 | 0 |
| Data/Review/Auto/test0929/INTEGRATION_20261116_141455_284_20261116_141800_306.csv | 3571 | 0 |
| Data/Review/Manual/test0929/ALL_SHOT/INTEGRATION_20261116_141455_284_20261116_141524_726.csv | 2 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/DUMMY_20261109_151140827_20261117_112939_447.csv | 4 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/DUMMY_20261109_151140827_20261117_114727_705.csv | 4 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/DUMMY_20261109_151140827_20261117_120745_279.csv | 4 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/DUMMY_20261109_151140827_20261117_120802_604.csv | 4 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/DUMMY_20261109_151140827_20261117_120822_381.csv | 4 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/DUMMY_20261109_151140827_20261117_121001_319.csv | 4 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/DUMMY_20261109_151140827_20261117_121147_635.csv | 2 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/DUMMY_20261109_151140827_20261117_121203_802.csv | 2 | 0 |
| Data/Review/Manual/test0929/BEAM_INSPECTION/INTEGRATION_20261116_141455_284_20261116_141526_188.csv | 2 | 0 |
| Data/Review/Manual/test0929/FINE/-_20261116_161939_540.csv | 1221 | 0 |
| Data/Review/Manual/test0929/FINE/-_20261116_161957_625.csv | 1221 | 0 |
| Data/Review/Manual/test0929/FINE/INTEGRATION_20261116_141455_284_20261116_141527_343.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_LINE/DUMMY_20261109_151140827_20261115_164846_369.csv | 245 | 0 |
| Data/Review/Manual/test0929/ONE_LINE/DUMMY_20261109_151140827_20261115_165021_134.csv | 200 | 0 |
| Data/Review/Manual/test0929/ONE_LINE/DUMMY_20261109_151140827_20261116_160922_364.csv | 245 | 0 |
| Data/Review/Manual/test0929/ONE_LINE/DUMMY_20261109_151140827_20261116_170428_567.csv | 200 | 0 |
| Data/Review/Manual/test0929/ONE_LINE/DUMMY_20261109_151140827_20261117_100707_036.csv | 200 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261115_164752_838.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261116_132428_715.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261116_132452_013.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261117_100628_738.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/DUMMY_20261109_151140827_20261117_100639_251.csv | 2 | 0 |
| Data/Review/Manual/test0929/ONE_SHOT/INTEGRATION_20261116_141455_284_20261116_141525_391.csv | 2 | 0 |
| Data/Review/Manual/test0929/ROUGH/INTEGRATION_20261116_141455_284_20261116_141526_824.csv | 2 | 0 |
| Data/Review/ZeroDefence/test0929/INTEGRATION_20261116_141455_284/20261116_141800_495_FOLLOWUP.csv | 245 | 0 |
| Data/Review/ZeroDefence/test0929/INTEGRATION_20261116_141455_284/20261116_141800_495_ZERO_DEFENCE.csv | 2 | 0 |
| Data/Script/DefaultOffset/H01_DEFAULTOFFSET_20261115_170136_086.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H01_DEFAULTOFFSET_20261116_141011_117.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H02_DEFAULTOFFSET_20261115_170126_076.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H02_DEFAULTOFFSET_20261116_140744_474.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H03_DEFAULTOFFSET_20261115_170116_053.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H04_DEFAULTOFFSET_20261115_170105_721.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H05_DEFAULTOFFSET_20261115_170111_067.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H06_DEFAULTOFFSET_20261115_170120_630.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H07_DEFAULTOFFSET_20261115_170130_680.ascript | 32 | 0 |
| Data/Script/DefaultOffset/H08_DEFAULTOFFSET_20261115_170141_083.ascript | 32 | 0 |
| Drilling.Common/Correction/CDefaultOffsetCalibration.cs | 47 | 7 |
| Drilling.Common/Managers/CSettingManager.cs | 1 | 0 |
| Drilling.Common/Review/CReviewManager.cs | 69 | 6 |
| Drilling.Common/Review/CReviewResultLevelSettings.cs | 175 | 0 |
| Drilling.File/Correction/CAlignOffsetLogFile.cs | 2 | 2 |
| Drilling.File/JHMI/CSettingFile.cs | 35 | 1 |
| Drilling.UI/CRootView.cs | 8 | 16 |
| Drilling.UI/Drilling.UI.csproj | 1 | 1 |
| Drilling.UI/Menu/CBindingBase.cs | 92 | 0 |
| Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs | 1 | 0 |
| Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs | 162 | 51 |
| Drilling.UI/Menu/Menus/CMenuCorrection.cs | 95 | 66 |
| Drilling.UI/Menu/Menus/CMenuReview.cs | 1776 | 215 |
| Drilling.UI/Menu/Menus/CMenuSetting.cs | 30 | 0 |
| Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs | 2 | 2 |
| Drilling.UI/Popup/CColorPickerDialog.xaml | 125 | 0 |
| Drilling.UI/Popup/CColorPickerDialog.xaml.cs | 89 | 0 |
| Drilling.UI/Popup/CShiftOffsetDialog.xaml.cs | 43 | 42 |
| Drilling.UI/Views/CCorrectionView.xaml | 3 | 11 |
| Drilling.UI/Views/CCorrectionView.xaml.cs | 1 | 7 |
| Drilling.UI/Views/CDefaultOffsetView.xaml.cs | 5 | 5 |
| Drilling.UI/Views/CReviewDataView.xaml | 70 | 25 |
| Drilling.UI/Views/CReviewShotMapControl.cs | 364 | 0 |
| Drilling.UI/Views/CReviewView.xaml | 1077 | 316 |
| Drilling.UI/Views/CSettingView.xaml | 58 | 0 |
| Drilling.UI/Views/CSettingView.xaml.cs | 16 | 0 |
