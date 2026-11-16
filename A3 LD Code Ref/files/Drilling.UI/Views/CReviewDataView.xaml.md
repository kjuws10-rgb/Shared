# Drilling.UI/Views/CReviewDataView.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | dfa5920e6301d9ec4b0eab1452ae59521aafc986 |
| 원본 SHA256 | 320d10f4b95659262e5925d522de580e4fa0e400d4d8630364daff1357910498 |
| 파일 분류 | code |
| 원본 크기/행 | 108,427 bytes / 1,478 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Views/CReviewDataView.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/1fbf51751eb9e1989885.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Views/CReviewDataView.xaml.cs |
| 이름 있는 요소 | ReviewDataRoot, ReviewResultsTree, ShotMapEditSelectionRectangle, ScatterEditSelectionRectangle, ReviewDataResultGrid, ReinspectionRunningPulse |
| 이벤트 개수 | 14 |
| Binding 표현 개수 | 193 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| ReviewDataRoot | L2–2 |
| ReviewResultsTree | L128–128 |
| ShotMapEditSelectionRectangle | L416–416 |
| ScatterEditSelectionRectangle | L522–522 |
| ReviewDataResultGrid | L576–576 |
| ReinspectionRunningPulse | L1007–1007 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| IsVisibleChanged | ReviewDataView_IsVisibleChanged | L7–7 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectedItemChanged | ReviewResultsTree_SelectedItemChanged | L138–138 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonDown | ReviewDataShotMap_MouseLeftButtonDown | L410–410 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | ReviewDataEditSurface_MouseMove | L411–411 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonUp | ReviewDataEditSurface_MouseLeftButtonUp | L412–412 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonDown | ReviewDataScatterPlot_MouseLeftButtonDown | L515–515 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | ReviewDataEditSurface_MouseMove | L516–516 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonUp | ReviewDataEditSurface_MouseLeftButtonUp | L517–517 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | ReviewDataResultGrid_SelectionChanged | L582–582 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | ReviewDataReinspectionCheckBox_Changed | L615–615 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | ReviewDataResultEditCheckBox_Changed | L627–627 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | ReviewDataReinspectionGrid_SelectionChanged | L990–990 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | ReviewDataResultEditKeyInGrid_SelectionChanged | L1254–1254 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | ReviewDataResultEditCopyGrid_SelectionChanged | L1368–1368 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

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
| {Binding GlassSurfaceWidth} | L302–302 |
| {Binding GlassSurfaceHeight} | L302–302 |
| {Binding GlassPreviewImage} | L303–303 |
| {Binding GlassSurfaceWidth} | L303–303 |
| {Binding GlassSurfaceHeight} | L303–303 |
| {Binding CellLabels} | L304–304 |
| {Binding GlassSurfaceWidth} | L304–304 |
| {Binding GlassSurfaceHeight} | L304–304 |
| {Binding Left} | L310–310 |
| {Binding Top} | L311–311 |
| {Binding CellNo} | L316–316 |
| {Binding Width} | L317–317 |
| {Binding Height} | L318–318 |
| {Binding IsIncluded} | L323–323 |
| {Binding CellNo} | L324–324 |
| {Binding DataContext.SelectCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L325–325 |
| {Binding IsIncluded} | L342–342 |
| {Binding IsSelected} | L347–347 |
| {Binding IsReinspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L362–362 |
| {Binding Camera} | L363–363 |
| {Binding SelectedCellTitle} | L385–385 |
| {Binding SelectedShotTitle} | L386–386 |
| {Binding ShotMapSurfaceWidth} | L406–406 |
| {Binding ShotMapSurfaceHeight} | L407–407 |
| {Binding ShotMapImage} | L414–414 |
| {Binding SelectedShotDetail} | L445–445 |
| {Binding SelectedShotTitle} | L459–459 |
| {Binding SelectedCellTitle} | L460–460 |
| {Binding ScatterPlotSummary} | L493–493 |
| {Binding ScatterPlotSummary} | L500–500 |
| {Binding ScatterPlotSurfaceWidth} | L511–511 |
| {Binding ScatterPlotSurfaceHeight} | L512–512 |
| {Binding ScatterPlotImage} | L520–520 |
| {Binding ScatterPlotMinimumText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L549–549 |
| {Binding ScatterPlotMaximumText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L556–556 |
| {Binding ScatterPlotGridUnitText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L563–563 |
| {Binding ApplyScatterPlotScaleCommand} | L572–572 |
| {Binding Rows} | L578–578 |
| {Binding SelectedRow, Mode=OneWay} | L579–579 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L603–603 |
| {Binding Data.IsReinspectionMode, Source={StaticResource ReviewDataBindingProxy}, Converter={StaticResource BooleanToVisibilityConverter}} | L609–609 |
| {Binding IsReinspectionSelected, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L614–614 |
| {Binding Data.IsResultEditMode, Source={StaticResource ReviewDataBindingProxy}, Converter={StaticResource BooleanToVisibilityConverter}} | L621–621 |
| {Binding IsResultEditSelected, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L626–626 |
| {Binding Head} | L631–631 |
| {Binding Cell} | L632–632 |
| {Binding ShotName} | L633–633 |
| {Binding Beam} | L634–634 |
| {Binding ResultXText} | L635–635 |
| {Binding ResultYText} | L636–636 |
| {Binding Judge} | L637–637 |
| {Binding JudgeBrush} | L640–640 |
| {Binding ReinspectionAvailabilityText} | L671–671 |
| {Binding ToggleReinspectionCommand} | L673–673 |
| {Binding IsReinspectionMode} | L677–677 |
| {Binding ToggleResultEditModeCommand} | L692–692 |
| {Binding IsResultEditMode} | L696–696 |
| {Binding IsReinspectionMode} | L712–712 |
| {Binding IsResultEditMode} | L715–715 |
| {Binding OffsetApplyCommand} | L734–734 |
| {Binding OffsetRollbackCommand} | L745–745 |
| {Binding OffsetInitCommand} | L755–755 |
| {Binding OffsetViewCommand} | L763–763 |
| {Binding IsReinspectionMode} | L771–771 |
| {Binding AddReinspectionShotCommand} | L789–789 |
| {Binding AddSelectedReinspectionShotsCommand} | L797–797 |
| {Binding AddNgReinspectionShotsCommand} | L807–807 |
| {Binding IsResultEditMode} | L817–817 |
| {Binding IsResultEditKeyInMode} | L818–818 |
| {Binding AddResultEditKeyInCommand} | L836–836 |
| {Binding AddSelectedResultEditKeyInCommand} | L844–844 |
| {Binding AddNgResultEditKeyInCommand} | L854–854 |
| {Binding IsResultEditMode} | L864–864 |
| {Binding IsResultEditCopyMode} | L865–865 |
| {Binding AddResultEditCopySourceCommand} | L885–885 |
| {Binding AddResultEditCopyTargetsCommand} | L893–893 |
| {Binding OffsetActionHint} | L897–897 |
| {Binding OffsetActionHint} | L902–902 |
| {Binding IsReinspectionMode} | L906–906 |
| {Binding IsResultEditMode} | L909–909 |
| {Binding IsReinspectionMode} | L926–926 |
| {Binding ReinspectionSummary} | L953–953 |
| {Binding DeleteReinspectionShotCommand} | L971–971 |
| {Binding ClearReinspectionShotsCommand} | L982–982 |
| {Binding ReinspectionShots} | L986–986 |
| {Binding SelectedReinspectionShot, Mode=OneWay} | L987–987 |
| {Binding IsRunning} | L1003–1003 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L1027–1027 |
| {Binding No} | L1031–1031 |
| {Binding Cell} | L1032–1032 |
| {Binding ShotName} | L1033–1033 |
| {Binding Head} | L1034–1034 |
| {Binding DataContext.CanEditReinspectionList, RelativeSource={RelativeSource AncestorType=DataGrid}} | L1042–1042 |
| {Binding DataContext.ReinspectionBeamOptions, RelativeSource={RelativeSource AncestorType=DataGrid}} | L1043–1043 |
| {Binding BeamNo, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1044–1044 |
| {Binding ResultXText} | L1048–1048 |
| {Binding ResultBrush} | L1051–1051 |
| {Binding ResultYText} | L1057–1057 |
| {Binding ResultBrush} | L1060–1060 |
| {Binding State} | L1066–1066 |
| {Binding StateBrush} | L1069–1069 |
| {Binding ReinspectionStatusText} | L1084–1084 |
| {Binding ReinspectionStatusText} | L1089–1089 |
| {Binding MoveToReinspectionShotCommand} | L1104–1104 |
| {Binding MoveAndInspectReinspectionShotCommand} | L1111–1111 |
| {Binding InspectAllReinspectionShotsCommand} | L1120–1120 |
| {Binding StopReinspectionCommand} | L1129–1129 |
| {Binding SaveReinspectionResultCommand} | L1143–1143 |
| {Binding IsResultEditMode} | L1152–1152 |
| {Binding SelectResultEditSubModeCommand} | L1174–1174 |
| {Binding IsResultEditKeyInMode} | L1178–1178 |
| {Binding SelectResultEditSubModeCommand} | L1193–1193 |
| {Binding IsResultEditCopyMode} | L1197–1197 |
| {Binding ResultEditSelectionSummary} | L1225–1225 |
| {Binding IsResultEditKeyInMode} | L1238–1238 |
| {Binding ResultEditKeyInItems} | L1250–1250 |
| {Binding SelectedResultEditKeyInItem, Mode=TwoWay} | L1251–1251 |
| {Binding No} | L1257–1257 |
| {Binding Identity} | L1258–1258 |
| {Binding OriginalXText} | L1259–1259 |
| {Binding OriginalYText} | L1260–1260 |
| {Binding OriginalJudge} | L1261–1261 |
| {Binding EditedXText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1265–1265 |
| {Binding EditedYText, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1273–1273 |
| {Binding DataContext.ResultEditJudgeOptions, RelativeSource={RelativeSource AncestorType=DataGrid}} | L1281–1281 |
| {Binding EditedJudge, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1282–1282 |
| {Binding RemoveResultEditKeyInCommand} | L1302–1302 |
| {Binding ClearResultEditKeyInCommand} | L1311–1311 |
| {Binding IsResultEditCopyMode} | L1320–1320 |
| {Binding ResultEditCopySourceRows} | L1333–1333 |
| {Binding Identity} | L1337–1337 |
| {Binding OriginalXText} | L1338–1338 |
| {Binding OriginalYText} | L1339–1339 |
| {Binding OriginalJudge} | L1340–1340 |
| {Binding RemoveResultEditCopyTargetCommand} | L1353–1353 |
| {Binding ClearResultEditCopyTargetsCommand} | L1362–1362 |
| {Binding ResultEditCopyTargets} | L1365–1365 |
| {Binding SelectedResultEditCopyTarget, Mode=TwoWay} | L1366–1366 |
| {Binding No} | L1371–1371 |
| {Binding Identity} | L1372–1372 |
| {Binding OriginalXText} | L1373–1373 |
| {Binding OriginalYText} | L1374–1374 |
| {Binding OriginalJudge} | L1375–1375 |
| {Binding EditedXText} | L1376–1376 |
| {Binding EditedYText} | L1377–1377 |
| {Binding EditedJudge} | L1378–1378 |
| {Binding CopyResultEditXyCommand} | L1386–1386 |
| {Binding CopyResultEditJudgeCommand} | L1391–1391 |
| {Binding CopyResultEditAllCommand} | L1396–1396 |
| {Binding SaveResultEditCommand} | L1412–1412 |
| {Binding ResultEditStatusText} | L1421–1421 |
| {Binding ResultEditStatusText} | L1426–1426 |
| {Binding ShowDataPlaceholder} | L1437–1437 |
| {Binding CanLoadData} | L1449–1449 |
| {Binding LoadDataCommand} | L1451–1451 |
| {Binding DataLoadHint} | L1452–1452 |
| {Binding DataLoadHintBrush} | L1452–1452 |
| {Binding IsDataLoading} | L1461–1461 |
| {Binding LoadProgress, Mode=OneWay} | L1468–1468 |
| {Binding LoadProgressText} | L1470–1470 |
| {Binding LoadProgress, StringFormat={}{0:0}%} | L1471–1471 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CReviewDataView.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
