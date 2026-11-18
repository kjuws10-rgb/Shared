# Drilling.UI/Views/CReviewDataView.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 96e22cd027c84bf302b23f2949b98985d7f301bb |
| 원본 SHA256 | 450819ac7b205a5cd1839a31ca71e0d0fda98768978c6027855778a5faefcaef |
| 파일 분류 | code |
| 원본 크기/행 | 112,944 bytes / 1,523 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Views/CReviewDataView.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/1fbf51751eb9e1989885.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Views/CReviewDataView.xaml.cs |
| 이름 있는 요소 | ReviewDataRoot, ReviewResultsTree, ShotMapEditSelectionRectangle, ScatterEditSelectionRectangle, ReviewDataResultGrid, ReinspectionRunningPulse |
| 이벤트 개수 | 17 |
| Binding 표현 개수 | 209 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| ReviewDataRoot | L2–2 |
| ReviewResultsTree | L128–128 |
| ShotMapEditSelectionRectangle | L432–432 |
| ScatterEditSelectionRectangle | L542–542 |
| ReviewDataResultGrid | L596–596 |
| ReinspectionRunningPulse | L1052–1052 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| IsVisibleChanged | ReviewDataView_IsVisibleChanged | L7–7 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectedItemChanged | ReviewResultsTree_SelectedItemChanged | L138–138 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonDown | ReviewDataShotMap_MouseLeftButtonDown | L426–426 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | ReviewDataEditSurface_MouseMove | L427–427 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonUp | ReviewDataEditSurface_MouseLeftButtonUp | L428–428 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| LostMouseCapture | ReviewDataEditSurface_LostMouseCapture | L429–429 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonDown | ReviewDataScatterPlot_MouseLeftButtonDown | L535–535 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | ReviewDataEditSurface_MouseMove | L536–536 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonUp | ReviewDataEditSurface_MouseLeftButtonUp | L537–537 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| LostMouseCapture | ReviewDataEditSurface_LostMouseCapture | L538–538 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| LoadingRow | ReviewDataResultGrid_LoadingRow | L601–601 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | ReviewDataResultGrid_SelectionChanged | L602–602 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | ReviewDataReinspectionCheckBox_Changed | L635–635 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | ReviewDataResultEditCheckBox_Changed | L647–647 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | ReviewDataReinspectionGrid_SelectionChanged | L1035–1035 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | ReviewDataResultEditKeyInGrid_SelectionChanged | L1299–1299 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | ReviewDataResultEditCopyGrid_SelectionChanged | L1413–1413 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

| Binding 표현 | 원본 범위 |
| --- | --- |
| {Binding} | L10–10 |
| {Binding Children} | L12–12 |
| {Binding Name} | L13–13 |
| {Binding IsDirectory} | L27–27 |
| {Binding Name} | L36–36 |
| {Binding Detail} | L37–37 |
| {Binding DetailBrush} | L37–37 |
| {Binding IsExpanded, Mode=OneWay} | L42–42 |
| {Binding IsSelected, Mode=TwoWay} | L43–43 |
| {Binding IsReinspectionMode} | L80–80 |
| {Binding IsResultEditMode} | L84–84 |
| {Binding IsReinspectionMode} | L97–97 |
| {Binding IsResultEditMode} | L100–100 |
| {Binding RefreshCommand} | L125–125 |
| {Binding Nodes} | L130–130 |
| {Binding StatusText} | L148–148 |
| {Binding StatusText} | L148–148 |
| {Binding SelectedStatus} | L164–164 |
| {Binding SelectedStatusBrush} | L164–164 |
| {Binding SelectedDetails} | L167–167 |
| {Binding Name} | L181–181 |
| {Binding Value} | L182–182 |
| {Binding HasLoadedData} | L195–195 |
| {Binding IsReinspectionMode} | L206–206 |
| {Binding IsResultEditMode} | L210–210 |
| {Binding IsReinspectionMode} | L225–225 |
| {Binding IsResultEditMode} | L229–229 |
| {Binding IsReinspectionMode} | L242–242 |
| {Binding IsResultEditMode} | L245–245 |
| {Binding IsReinspectionMode} | L258–258 |
| {Binding IsResultEditMode} | L262–262 |
| {Binding GlassSummary} | L292–292 |
| {Binding ReviewLevel1Brush} | L294–294 |
| {Binding ReviewLevel2Brush} | L296–296 |
| {Binding ReviewLevel3Brush} | L298–298 |
| {Binding ReviewLevel4Brush} | L300–300 |
| {Binding GlassSurfaceWidth} | L308–308 |
| {Binding GlassSurfaceHeight} | L308–308 |
| {Binding GlassPreviewImage} | L309–309 |
| {Binding GlassSurfaceWidth} | L309–309 |
| {Binding GlassSurfaceHeight} | L309–309 |
| {Binding CellLabels} | L310–310 |
| {Binding GlassSurfaceWidth} | L310–310 |
| {Binding GlassSurfaceHeight} | L310–310 |
| {Binding Left} | L316–316 |
| {Binding Top} | L317–317 |
| {Binding CellNo} | L322–322 |
| {Binding Width} | L323–323 |
| {Binding Height} | L324–324 |
| {Binding IsIncluded} | L329–329 |
| {Binding CellNo} | L330–330 |
| {Binding DataContext.SelectCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L331–331 |
| {Binding IsIncluded} | L348–348 |
| {Binding IsSelected} | L353–353 |
| {Binding IsReinspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L368–368 |
| {Binding Camera} | L369–369 |
| {Binding SelectedCellTitle} | L391–391 |
| {Binding SelectedShotTitle} | L392–392 |
| {Binding ReviewLevel1Brush} | L396–396 |
| {Binding ReviewLevel2Brush} | L398–398 |
| {Binding ReviewLevel3Brush} | L400–400 |
| {Binding ReviewLevel4Brush} | L402–402 |
| {Binding ShotMapSurfaceWidth} | L422–422 |
| {Binding ShotMapSurfaceHeight} | L423–423 |
| {Binding ShotMapImage} | L430–430 |
| {Binding SelectedShotDetail} | L461–461 |
| {Binding SelectedShotTitle} | L475–475 |
| {Binding SelectedCellTitle} | L476–476 |
| {Binding ScatterPlotSummary} | L509–509 |
| {Binding ScatterPlotSummary} | L516–516 |
| {Binding ReviewLevel1Brush} | L518–518 |
| {Binding ReviewLevel2Brush} | L520–520 |
| {Binding ReviewLevel3Brush} | L522–522 |
| {Binding ReviewLevel4Brush} | L524–524 |
| {Binding ScatterPlotSurfaceWidth} | L531–531 |
| {Binding ScatterPlotSurfaceHeight} | L532–532 |
| {Binding ScatterPlotImage} | L540–540 |
| {Binding ScatterPlotMinimumText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L569–569 |
| {Binding ScatterPlotMaximumText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L576–576 |
| {Binding ScatterPlotGridUnitText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L583–583 |
| {Binding ApplyScatterPlotScaleCommand} | L592–592 |
| {Binding Rows} | L598–598 |
| {Binding SelectedRow, Mode=OneWay} | L599–599 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L623–623 |
| {Binding Data.IsReinspectionMode, Source={StaticResource ReviewDataBindingProxy}, Converter={StaticResource BooleanToVisibilityConverter}} | L629–629 |
| {Binding IsReinspectionSelected, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L634–634 |
| {Binding Data.IsResultEditMode, Source={StaticResource ReviewDataBindingProxy}, Converter={StaticResource BooleanToVisibilityConverter}} | L641–641 |
| {Binding IsResultEditSelected, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L646–646 |
| {Binding Head} | L651–651 |
| {Binding Cell} | L652–652 |
| {Binding ShotName} | L653–653 |
| {Binding Beam} | L654–654 |
| {Binding ResultXText} | L655–655 |
| {Binding LevelBrush} | L658–658 |
| {Binding ResultYText} | L664–664 |
| {Binding LevelBrush} | L667–667 |
| {Binding LevelText} | L673–673 |
| {Binding LevelBrush} | L676–676 |
| {Binding Judge} | L682–682 |
| {Binding JudgeBrush} | L685–685 |
| {Binding ReinspectionAvailabilityText} | L716–716 |
| {Binding ToggleReinspectionCommand} | L718–718 |
| {Binding IsReinspectionMode} | L722–722 |
| {Binding ToggleResultEditModeCommand} | L737–737 |
| {Binding IsResultEditMode} | L741–741 |
| {Binding IsReinspectionMode} | L757–757 |
| {Binding IsResultEditMode} | L760–760 |
| {Binding OffsetApplyCommand} | L779–779 |
| {Binding OffsetRollbackCommand} | L790–790 |
| {Binding OffsetInitCommand} | L800–800 |
| {Binding OffsetViewCommand} | L808–808 |
| {Binding IsReinspectionMode} | L816–816 |
| {Binding AddReinspectionShotCommand} | L834–834 |
| {Binding AddSelectedReinspectionShotsCommand} | L842–842 |
| {Binding AddNgReinspectionShotsCommand} | L852–852 |
| {Binding IsResultEditMode} | L862–862 |
| {Binding IsResultEditKeyInMode} | L863–863 |
| {Binding AddResultEditKeyInCommand} | L881–881 |
| {Binding AddSelectedResultEditKeyInCommand} | L889–889 |
| {Binding AddNgResultEditKeyInCommand} | L899–899 |
| {Binding IsResultEditMode} | L909–909 |
| {Binding IsResultEditCopyMode} | L910–910 |
| {Binding AddResultEditCopySourceCommand} | L930–930 |
| {Binding AddResultEditCopyTargetsCommand} | L938–938 |
| {Binding OffsetActionHint} | L942–942 |
| {Binding OffsetActionHint} | L947–947 |
| {Binding IsReinspectionMode} | L951–951 |
| {Binding IsResultEditMode} | L954–954 |
| {Binding IsReinspectionMode} | L971–971 |
| {Binding ReinspectionSummary} | L998–998 |
| {Binding DeleteReinspectionShotCommand} | L1016–1016 |
| {Binding ClearReinspectionShotsCommand} | L1027–1027 |
| {Binding ReinspectionShots} | L1031–1031 |
| {Binding SelectedReinspectionShot, Mode=OneWay} | L1032–1032 |
| {Binding IsRunning} | L1048–1048 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L1072–1072 |
| {Binding No} | L1076–1076 |
| {Binding Cell} | L1077–1077 |
| {Binding ShotName} | L1078–1078 |
| {Binding Head} | L1079–1079 |
| {Binding DataContext.CanEditReinspectionList, RelativeSource={RelativeSource AncestorType=DataGrid}} | L1087–1087 |
| {Binding DataContext.ReinspectionBeamOptions, RelativeSource={RelativeSource AncestorType=DataGrid}} | L1088–1088 |
| {Binding BeamNo, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1089–1089 |
| {Binding ResultXText} | L1093–1093 |
| {Binding ResultBrush} | L1096–1096 |
| {Binding ResultYText} | L1102–1102 |
| {Binding ResultBrush} | L1105–1105 |
| {Binding State} | L1111–1111 |
| {Binding StateBrush} | L1114–1114 |
| {Binding ReinspectionStatusText} | L1129–1129 |
| {Binding ReinspectionStatusText} | L1134–1134 |
| {Binding MoveToReinspectionShotCommand} | L1149–1149 |
| {Binding MoveAndInspectReinspectionShotCommand} | L1156–1156 |
| {Binding InspectAllReinspectionShotsCommand} | L1165–1165 |
| {Binding StopReinspectionCommand} | L1174–1174 |
| {Binding SaveReinspectionResultCommand} | L1188–1188 |
| {Binding IsResultEditMode} | L1197–1197 |
| {Binding SelectResultEditSubModeCommand} | L1219–1219 |
| {Binding IsResultEditKeyInMode} | L1223–1223 |
| {Binding SelectResultEditSubModeCommand} | L1238–1238 |
| {Binding IsResultEditCopyMode} | L1242–1242 |
| {Binding ResultEditSelectionSummary} | L1270–1270 |
| {Binding IsResultEditKeyInMode} | L1283–1283 |
| {Binding ResultEditKeyInItems} | L1295–1295 |
| {Binding SelectedResultEditKeyInItem, Mode=TwoWay} | L1296–1296 |
| {Binding No} | L1302–1302 |
| {Binding Identity} | L1303–1303 |
| {Binding OriginalXText} | L1304–1304 |
| {Binding OriginalYText} | L1305–1305 |
| {Binding OriginalJudge} | L1306–1306 |
| {Binding EditedXText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1310–1310 |
| {Binding EditedYText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1318–1318 |
| {Binding DataContext.ResultEditJudgeOptions, RelativeSource={RelativeSource AncestorType=DataGrid}} | L1326–1326 |
| {Binding EditedJudge, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1327–1327 |
| {Binding RemoveResultEditKeyInCommand} | L1347–1347 |
| {Binding ClearResultEditKeyInCommand} | L1356–1356 |
| {Binding IsResultEditCopyMode} | L1365–1365 |
| {Binding ResultEditCopySourceRows} | L1378–1378 |
| {Binding Identity} | L1382–1382 |
| {Binding OriginalXText} | L1383–1383 |
| {Binding OriginalYText} | L1384–1384 |
| {Binding OriginalJudge} | L1385–1385 |
| {Binding RemoveResultEditCopyTargetCommand} | L1398–1398 |
| {Binding ClearResultEditCopyTargetsCommand} | L1407–1407 |
| {Binding ResultEditCopyTargets} | L1410–1410 |
| {Binding SelectedResultEditCopyTarget, Mode=TwoWay} | L1411–1411 |
| {Binding No} | L1416–1416 |
| {Binding Identity} | L1417–1417 |
| {Binding OriginalXText} | L1418–1418 |
| {Binding OriginalYText} | L1419–1419 |
| {Binding OriginalJudge} | L1420–1420 |
| {Binding EditedXText} | L1421–1421 |
| {Binding EditedYText} | L1422–1422 |
| {Binding EditedJudge} | L1423–1423 |
| {Binding CopyResultEditXyCommand} | L1431–1431 |
| {Binding CopyResultEditJudgeCommand} | L1436–1436 |
| {Binding CopyResultEditAllCommand} | L1441–1441 |
| {Binding SaveResultEditCommand} | L1457–1457 |
| {Binding ResultEditStatusText} | L1466–1466 |
| {Binding ResultEditStatusText} | L1471–1471 |
| {Binding ShowDataPlaceholder} | L1482–1482 |
| {Binding CanLoadData} | L1494–1494 |
| {Binding LoadDataCommand} | L1496–1496 |
| {Binding DataLoadHint} | L1497–1497 |
| {Binding DataLoadHintBrush} | L1497–1497 |
| {Binding IsDataLoading} | L1506–1506 |
| {Binding LoadProgress, Mode=OneWay} | L1513–1513 |
| {Binding LoadProgressText} | L1515–1515 |
| {Binding LoadProgress, StringFormat={}{0:0}%} | L1516–1516 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CReviewDataView.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
