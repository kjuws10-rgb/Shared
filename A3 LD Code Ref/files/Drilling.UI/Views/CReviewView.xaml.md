# Drilling.UI/Views/CReviewView.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 96e22cd027c84bf302b23f2949b98985d7f301bb |
| 원본 SHA256 | e523762220e84ac7bb60f8fd50d54721fbcc27d603b9314200297550f128c567 |
| 파일 분류 | code |
| 원본 크기/행 | 157,060 bytes / 2,134 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Views/CReviewView.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/9762c03574040d10af3e.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Views/CReviewView.xaml.cs |
| 이름 있는 요소 | ButtonChrome, ButtonContent, ItemBorder, ToggleButton, Shell, PART_Popup, ReviewCurrentShotBlink, OpenReviewCorrectionButton, ShotHeaderOngoingBlink, ReviewHeadCards, RunGlassPreviewViewport, RunGlassPreviewHoverTip, RunGlassPreviewHoverTipTranslateTransform, RunGlassPreviewHoverTipText, SelectedShotStatusBlink, ReviewBeamSelectionPanel, BeamInspectionSelectionPanel, BeamResultOngoingBlink, BeamInspectionRunCommands, BeamInspectionStartButton, BeamInspectionStopButton, BeamInspectionLoadCommands, OneShotActionPanel, OneShotSelectionText, OneShotMethodCombo, OneShotMoveButton, OneShotInspectionButton, OneShotMoveInspectionButton, OneShotStopButton, AllShotRunCommands, AllShotStartButton, AllShotStopButton, ReviewResultsPanel, OneShotResultText, ReviewResultGrid |
| 이벤트 개수 | 6 |
| Binding 표현 개수 | 242 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| ButtonChrome | L162–162 |
| ButtonContent | L167–167 |
| ItemBorder | L280–280 |
| ToggleButton | L320–320 |
| Shell | L326–326 |
| PART_Popup | L365–365 |
| ReviewCurrentShotBlink | L426–426 |
| OpenReviewCorrectionButton | L659–659 |
| ShotHeaderOngoingBlink | L778–778 |
| ReviewHeadCards | L817–817 |
| RunGlassPreviewViewport | L879–879 |
| RunGlassPreviewHoverTip | L920–920 |
| RunGlassPreviewHoverTipTranslateTransform | L932–932 |
| RunGlassPreviewHoverTipText | L934–934 |
| SelectedShotStatusBlink | L1177–1177 |
| ReviewBeamSelectionPanel | L1430–1430 |
| BeamInspectionSelectionPanel | L1616–1616 |
| BeamResultOngoingBlink | L1775–1775 |
| BeamInspectionRunCommands | L1872–1872 |
| BeamInspectionStartButton | L1876–1876 |
| BeamInspectionStopButton | L1879–1879 |
| BeamInspectionLoadCommands | L1883–1883 |
| OneShotActionPanel | L1976–1976 |
| OneShotSelectionText | L1979–1979 |
| OneShotMethodCombo | L1982–1982 |
| OneShotMoveButton | L1987–1987 |
| OneShotInspectionButton | L1989–1989 |
| OneShotMoveInspectionButton | L1992–1992 |
| OneShotStopButton | L1994–1994 |
| AllShotRunCommands | L2039–2039 |
| AllShotStartButton | L2046–2046 |
| AllShotStopButton | L2049–2049 |
| ReviewResultsPanel | L2096–2096 |
| OneShotResultText | L2109–2109 |
| ReviewResultGrid | L2113–2113 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| IsVisibleChanged | ReviewView_IsVisibleChanged | L10–10 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SizeChanged | ReviewPreview_SizeChanged | L879–879 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | RunCellPreviewLabel_MouseMove | L906–906 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | RunCellPreviewLabel_MouseLeave | L907–907 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseLeftButtonDown | CellPreviewLabel_PreviewMouseLeftButtonDown | L908–908 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| AutoGeneratingColumn | ReviewResultDataGrid_AutoGeneratingColumn | L2118–2118 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

| Binding 표현 | 원본 범위 |
| --- | --- |
| {Binding RelativeSource={RelativeSource Self}, Path=Tag} | L114–114 |
| {Binding HasSelectedShots} | L222–222 |
| {Binding IsSelected} | L228–228 |
| {Binding IsDropDownOpen, RelativeSource={RelativeSource TemplatedParent}, Mode=TwoWay} | L323–323 |
| {Binding SelectionBoxItem, RelativeSource={RelativeSource AncestorType=ComboBox}} | L337–337 |
| {Binding SelectionBoxItemTemplate, RelativeSource={RelativeSource AncestorType=ComboBox}} | L338–338 |
| {Binding SelectionBoxItemStringFormat, RelativeSource={RelativeSource AncestorType=ComboBox}} | L339–339 |
| {Binding ActualWidth, ElementName=ToggleButton} | L374–374 |
| {Binding BackgroundBrush} | L394–394 |
| {Binding BorderBrush} | L395–395 |
| {Binding IsCurrent} | L423–423 |
| {Binding IsSelected} | L441–441 |
| {Binding DataContext.CurrentScreen.Review.IsShotSelectionMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L442–442 |
| {Binding Use} | L477–477 |
| {Binding IsExcluded} | L495–495 |
| {Binding ExclusionReason} | L501–501 |
| {Binding CurrentScreen.Review.SelectModeCommand} | L547–547 |
| {Binding CurrentScreen.Review.IsAllShotReviewMode} | L549–549 |
| {Binding CurrentScreen.Review.SelectModeCommand} | L552–552 |
| {Binding CurrentScreen.Review.IsOneShotReviewMode} | L554–554 |
| {Binding CurrentScreen.Review.SelectModeCommand} | L557–557 |
| {Binding CurrentScreen.Review.IsOneLineReviewMode} | L559–559 |
| {Binding CurrentScreen.Review.SelectModeCommand} | L572–572 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L574–574 |
| {Binding CurrentScreen.Review.IsRunTab, Converter={StaticResource BooleanToVisibilityConverter}} | L579–579 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L587–587 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L599–599 |
| {Binding CurrentScreen.Review.Modes} | L626–626 |
| {Binding SelectCommand} | L634–634 |
| {Binding Name} | L635–635 |
| {Binding IsSelected} | L639–639 |
| {Binding DisplayName} | L648–648 |
| {Binding RelativeSource={RelativeSource AncestorType=Button}, Path=Foreground} | L649–649 |
| {Binding CurrentScreen.Review.OpenCorrectionReviewCommand} | L661–661 |
| {Binding CurrentScreen.Review.TargetItems} | L681–681 |
| {Binding Name} | L689–689 |
| {Binding Value} | L694–694 |
| {Binding Value} | L700–700 |
| {Binding CurrentScreen.Review.RunWorkspaceTitle} | L747–747 |
| {Binding CurrentScreen.Review.RunGlassPreviewSummary} | L750–750 |
| {Binding CurrentScreen.Review.IsShotInspectionOngoing} | L776–776 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L806–806 |
| {Binding CurrentScreen.Review.InspectionHeadRows} | L820–820 |
| {Binding CurrentScreen.Review.IsReviewHeadCardsVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L822–822 |
| {Binding Summary} | L831–831 |
| {Binding HasSelectedShots} | L837–837 |
| {Binding Name} | L843–843 |
| {Binding HasSelectedShots} | L849–849 |
| {Binding CurrentScreen.Review.IsRunGlassPreviewVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L861–861 |
| {Binding CurrentScreen.Review.IsRunStageStatusVisible} | L873–873 |
| {Binding CurrentScreen.Review.RunGlassPreviewImage} | L880–880 |
| {Binding CurrentScreen.Review.RunCellPreviewLabels} | L884–884 |
| {Binding CanvasCenterX} | L889–889 |
| {Binding CanvasCenterY} | L890–890 |
| {Binding RelativeSource={RelativeSource AncestorType=ItemsControl}, Path=ActualWidth} | L891–891 |
| {Binding RelativeSource={RelativeSource AncestorType=ItemsControl}, Path=ActualHeight} | L892–892 |
| {Binding DesignWidth} | L893–893 |
| {Binding DesignHeight} | L894–894 |
| {Binding Height} | L896–896 |
| {Binding CellNo} | L901–901 |
| {Binding Height} | L903–903 |
| {Binding DataContext.CurrentScreen.Review.SelectRunCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L904–904 |
| {Binding CellNo} | L905–905 |
| {Binding CurrentScreen.Review.RunGlassPreviewInspectionOverlayImage} | L913–913 |
| {Binding CurrentScreen.Review.Camera} | L919–919 |
| {Binding CurrentScreen.Review.IsRunStageStatusVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L951–951 |
| {Binding CurrentScreen.Review.Camera.StageY} | L962–962 |
| {Binding CurrentScreen.Review.Camera.StageYSpeed} | L966–966 |
| {Binding CurrentScreen.Review.Camera.ReviewX} | L970–970 |
| {Binding CurrentScreen.Review.Camera.ReviewXSpeed} | L974–974 |
| {Binding CurrentScreen.Review.Camera.Mode} | L977–977 |
| {Binding CurrentScreen.Review.IsRunCellDetailVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L988–988 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L996–996 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1008–1008 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1031–1031 |
| {Binding CurrentScreen.Review.IsRunShotMapVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1044–1044 |
| {Binding CurrentScreen.Review.RunCellShotMatrixRows} | L1046–1046 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1047–1047 |
| {Binding CurrentScreen.Review.ReviewLevelLegendItems} | L1069–1069 |
| {Binding ColorBrush} | L1089–1089 |
| {Binding Name} | L1092–1092 |
| {Binding RangeText} | L1097–1097 |
| {Binding RangeText} | L1098–1098 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1122–1122 |
| {Binding CurrentScreen.Review.SelectedShotInspection.Caption} | L1150–1150 |
| {Binding CurrentScreen.Review.SelectedShotInspection.ShotText} | L1157–1157 |
| {Binding CurrentScreen.Review.SelectedShotInspection.ShotText} | L1158–1158 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusText} | L1166–1166 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusBrush} | L1167–1167 |
| {Binding CurrentScreen.Review.SelectedShotInspection.IsInspecting} | L1175–1175 |
| {Binding CurrentScreen.Review.SelectedShotInspection.PositionXText} | L1226–1226 |
| {Binding CurrentScreen.Review.SelectedShotInspection.PositionYText} | L1227–1227 |
| {Binding CurrentScreen.Review.SelectedShotInspection.ResultXText} | L1228–1228 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusBrush} | L1228–1228 |
| {Binding CurrentScreen.Review.SelectedShotInspection.ResultYText} | L1229–1229 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusBrush} | L1229–1229 |
| {Binding CurrentScreen.Review.SelectedShotInspection.JudgeText} | L1231–1231 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusBrush} | L1231–1231 |
| {Binding CurrentScreen.Review.SelectedShotInspection.LevelText} | L1232–1232 |
| {Binding CurrentScreen.Review.SelectedShotInspection.LevelBrush} | L1232–1232 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1243–1243 |
| {Binding CurrentScreen.Review.BeamSelectionSummary} | L1255–1255 |
| {Binding CurrentScreen.Review.ActiveInspectionShotText} | L1261–1261 |
| {Binding CurrentScreen.Review.ActiveInspectionShotText} | L1267–1267 |
| {Binding CurrentScreen.Review.RunBeamRows} | L1298–1298 |
| {Binding Beams} | L1302–1302 |
| {Binding SelectCommand} | L1306–1306 |
| {Binding BeamNo} | L1307–1307 |
| {Binding BackgroundBrush} | L1311–1311 |
| {Binding IsSelected, Mode=OneWay} | L1332–1332 |
| {Binding BeamNo} | L1337–1337 |
| {Binding TextBrush} | L1338–1338 |
| {Binding TargetX} | L1341–1341 |
| {Binding TextBrush} | L1342–1342 |
| {Binding TargetY} | L1345–1345 |
| {Binding TextBrush} | L1346–1346 |
| {Binding CurrentScreen.Review.SelectAllInspectionBeamsCommand} | L1362–1362 |
| {Binding CurrentScreen.Review.ClearInspectionBeamsCommand} | L1366–1366 |
| {Binding CurrentScreen.Review.InspectionListCommitText} | L1369–1369 |
| {Binding CurrentScreen.Review.AddInspectionShotCommand} | L1370–1370 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1394–1394 |
| {Binding CurrentScreen.Review.IsAllShotReviewMode} | L1408–1408 |
| {Binding CurrentScreen.Review.IsOneLineReviewMode} | L1412–1412 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1416–1416 |
| {Binding CurrentScreen.Review.IsOneShotReviewMode} | L1420–1420 |
| {Binding CurrentScreen.Review.IsSingleBeamSelectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1433–1433 |
| {Binding CurrentScreen.Review.BeamSelectionSummary} | L1446–1446 |
| {Binding CurrentScreen.Review.IsInspectionExecutionViewVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1452–1452 |
| {Binding CurrentScreen.Review.PreviousInspectionShotCommand} | L1459–1459 |
| {Binding CurrentScreen.Review.InspectionShotSummary} | L1460–1460 |
| {Binding CurrentScreen.Review.NextInspectionShotCommand} | L1463–1463 |
| {Binding CurrentScreen.Review.InspectionProgressText} | L1465–1465 |
| {Binding CurrentScreen.Review.InspectionProgressText} | L1467–1467 |
| {Binding CurrentScreen.Review.BeamOptions} | L1473–1473 |
| {Binding CurrentScreen.Review.SelectedBeam, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1474–1474 |
| {Binding CurrentScreen.Review.CanSelectBeam} | L1475–1475 |
| {Binding CurrentScreen.Review.IsSingleBeamSelectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1477–1477 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1483–1483 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1487–1487 |
| {Binding ActualWidth, RelativeSource={RelativeSource Self}} | L1488–1488 |
| {Binding CurrentScreen.Review.RunBeamRows} | L1493–1493 |
| {Binding CurrentScreen.Review.CanSelectBeam} | L1496–1496 |
| {Binding Beams} | L1504–1504 |
| {Binding SelectCommand} | L1514–1514 |
| {Binding BeamNo} | L1515–1515 |
| {Binding BackgroundBrush} | L1520–1520 |
| {Binding BorderBrush} | L1521–1521 |
| {Binding DataContext.CurrentScreen.Review.IsBeamInspectionMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L1528–1528 |
| {Binding DataContext.CurrentScreen.Review.IsOneShotReviewMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L1531–1531 |
| {Binding BeamName} | L1549–1549 |
| {Binding TextBrush} | L1550–1550 |
| {Binding DataContext.CurrentScreen.Review.IsBeamInspectionMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L1558–1558 |
| {Binding DataContext.CurrentScreen.Review.IsOneShotReviewMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L1561–1561 |
| {Binding DataContext.CurrentScreen.Review.IsOneShotReviewMode, RelativeSource={RelativeSource AncestorType=UserControl}, Converter={StaticResource BooleanToVisibilityConverter}} | L1570–1570 |
| {Binding TextBrush} | L1571–1571 |
| {Binding TargetX, Mode=OneWay} | L1572–1572 |
| {Binding TextBrush} | L1574–1574 |
| {Binding TargetY, Mode=OneWay} | L1575–1575 |
| {Binding DataContext.CurrentScreen.Review.IsInspectionExecutionViewVisible, RelativeSource={RelativeSource AncestorType=UserControl}, Converter={StaticResource BooleanToVisibilityConverter}} | L1578–1578 |
| {Binding InspectionStatus} | L1579–1579 |
| {Binding TextBrush} | L1579–1579 |
| {Binding InspectionResultText} | L1581–1581 |
| {Binding TextBrush} | L1581–1581 |
| {Binding CurrentScreen.Review.CanSelectBeam} | L1596–1596 |
| {Binding CurrentScreen.Review.IsInspectionSelectionControlsVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1597–1597 |
| {Binding CurrentScreen.Review.SelectAllInspectionBeamsCommand} | L1599–1599 |
| {Binding CurrentScreen.Review.ClearInspectionBeamsCommand} | L1606–1606 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1618–1618 |
| {Binding CurrentScreen.Review.BeamInspectionAssignmentSummary} | L1640–1640 |
| {Binding CurrentScreen.Review.BeamInspectionShotAssignments} | L1649–1649 |
| {Binding CurrentScreen.Review.SelectedBeamInspectionAssignment, Mode=TwoWay} | L1650–1650 |
| {Binding IndexText} | L1665–1665 |
| {Binding CellText} | L1666–1666 |
| {Binding HeadText} | L1667–1667 |
| {Binding ShotName} | L1668–1668 |
| {Binding BeamText} | L1672–1672 |
| {Binding BeamText} | L1673–1673 |
| {Binding State} | L1682–1682 |
| {Binding StateBrush} | L1683–1683 |
| {Binding CurrentScreen.Review.DeleteInspectionShotCommand} | L1695–1695 |
| {Binding CurrentScreen.Review.ClearInspectionShotsCommand} | L1702–1702 |
| {Binding CurrentScreen.Review.InspectionShotSummary} | L1727–1727 |
| {Binding CurrentScreen.Review.InspectionShotSummary} | L1731–1731 |
| {Binding CurrentScreen.Review.InspectionProgressText} | L1737–1737 |
| {Binding CurrentScreen.Review.InspectionProgressText} | L1742–1742 |
| {Binding CurrentScreen.Review.InspectionBeamResultRows} | L1744–1744 |
| {Binding Beams} | L1754–1754 |
| {Binding BackgroundBrush} | L1769–1769 |
| {Binding BorderBrush} | L1770–1770 |
| {Binding IsCurrent} | L1773–1773 |
| {Binding BeamName} | L1797–1797 |
| {Binding TextBrush} | L1798–1798 |
| {Binding InspectionStatus} | L1801–1801 |
| {Binding StateBrush} | L1803–1803 |
| {Binding InspectionResultText} | L1808–1808 |
| {Binding TextBrush} | L1809–1809 |
| {Binding InspectionStatus} | L1821–1821 |
| {Binding InspectionStatus} | L1836–1836 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1874–1874 |
| {Binding CurrentScreen.Review.StartCommand} | L1876–1876 |
| {Binding CurrentScreen.Review.StopCommand} | L1879–1879 |
| {Binding CurrentScreen.Review.LoadLastBeamInspectionResultCommand} | L1890–1890 |
| {Binding CurrentScreen.Review.CanLoadBeamInspectionResult} | L1891–1891 |
| {Binding CurrentScreen.Review.ClearLoadedBeamInspectionResultCommand} | L1899–1899 |
| {Binding CurrentScreen.Review.CanClearLoadedBeamInspectionResult} | L1900–1900 |
| {Binding CurrentScreen.Review.IsAllShotStyleReviewMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1913–1913 |
| {Binding CurrentScreen.Review.SelectedInspectionMethod} | L1924–1924 |
| {Binding CurrentScreen.Review.InspectionMethodItems} | L1931–1931 |
| {Binding CurrentScreen.Review.CanSelectInspectionMethod} | L1932–1932 |
| {Binding SelectCommand} | L1942–1942 |
| {Binding Name} | L1943–1943 |
| {Binding BackgroundBrush} | L1947–1947 |
| {Binding BorderBrush} | L1948–1948 |
| {Binding DisplayName} | L1963–1963 |
| {Binding TextBrush} | L1964–1964 |
| {Binding CurrentScreen.Review.IsOneShotReviewMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1977–1977 |
| {Binding CurrentScreen.Review.OneShotSelection} | L1979–1979 |
| {Binding CurrentScreen.Review.OneShotMethods} | L1982–1982 |
| {Binding CurrentScreen.Review.SelectedOneShotMethod, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1983–1983 |
| {Binding CurrentScreen.Review.CanSelectBeam} | L1984–1984 |
| {Binding CurrentScreen.Review.OneShotActionCommand} | L1987–1987 |
| {Binding CurrentScreen.Review.OneShotActionCommand} | L1989–1989 |
| {Binding CurrentScreen.Review.OneShotActionCommand} | L1992–1992 |
| {Binding CurrentScreen.Review.StopCommand} | L1994–1994 |
| {Binding CurrentScreen.Review.CanStopOneShot} | L1995–1995 |
| {Binding CurrentScreen.Review.LoadLastRunReviewResultCommand} | L2005–2005 |
| {Binding CurrentScreen.Review.ClearLoadedRunReviewResultCommand} | L2013–2013 |
| {Binding CurrentScreen.Review.IsRunReviewResultLoading, Converter={StaticResource BooleanToVisibilityConverter}} | L2021–2021 |
| {Binding CurrentScreen.Review.RunResultLoadStatus} | L2030–2030 |
| {Binding CurrentScreen.Review.RunResultLoadStatus} | L2031–2031 |
| {Binding CurrentScreen.Review.IsAllShotStyleReviewMode, Converter={StaticResource BooleanToVisibilityConverter}} | L2043–2043 |
| {Binding CurrentScreen.Review.StartCommand} | L2046–2046 |
| {Binding CurrentScreen.Review.StopCommand} | L2049–2049 |
| {Binding CurrentScreen.Review.LoadLastRunReviewResultCommand} | L2060–2060 |
| {Binding CurrentScreen.Review.ClearLoadedRunReviewResultCommand} | L2068–2068 |
| {Binding CurrentScreen.Review.IsRunReviewResultLoading, Converter={StaticResource BooleanToVisibilityConverter}} | L2076–2076 |
| {Binding CurrentScreen.Review.RunResultLoadStatus} | L2085–2085 |
| {Binding CurrentScreen.Review.RunResultLoadStatus} | L2086–2086 |
| {Binding CurrentScreen.Review.IsReviewResultDeferred, Converter={StaticResource BooleanToVisibilityConverter}} | L2108–2108 |
| {Binding CurrentScreen.Review.OneShotResultText} | L2109–2109 |
| {Binding CurrentScreen.Review.IsOneShotReviewMode, Converter={StaticResource BooleanToVisibilityConverter}} | L2111–2111 |
| {Binding CurrentScreen.Review.ResultMatrix} | L2116–2116 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CReviewView.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
