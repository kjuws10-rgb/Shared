# Drilling.UI/Views/CReviewView.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4 |
| 원본 SHA256 | f2f28f9ff41dc24eb14f67373d7029c379fc870f4d4a932317d7b0d729174537 |
| 파일 분류 | code |
| 원본 크기/행 | 160,823 bytes / 2,188 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CReviewView.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/9762c03574040d10af3e.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Views/CReviewView.xaml.cs |
| 이름 있는 요소 | ButtonChrome, ButtonContent, ItemBorder, ToggleButton, Shell, PART_Popup, ReviewCurrentShotBlink, RunWorkspace, StandardInspectionRunWorkspace, OpenReviewCorrectionButton, ShotHeaderOngoingBlink, ReviewHeadCards, RunGlassPreviewViewport, RunGlassPreviewHoverTip, RunGlassPreviewHoverTipTranslateTransform, RunGlassPreviewHoverTipText, SelectedShotStatusBlink, ReviewBeamSelectionPanel, BeamInspectionSelectionPanel, BeamResultOngoingBlink, BeamInspectionRunCommands, BeamInspectionStartButton, BeamInspectionStopButton, BeamInspectionLoadCommands, OneShotActionPanel, OneShotSelectionText, OneShotMethodCombo, OneShotMoveButton, OneShotInspectionButton, OneShotMoveInspectionButton, OneShotStopButton, AllShotRunCommands, AllShotStartButton, AllShotStopButton, RoughInspectionRunWorkspace, FineInspectionRunWorkspace, InspectionResultWorkspace, ReviewResultsPanel, OneShotResultText, ReviewResultGrid |
| 이벤트 개수 | 6 |
| Binding 표현 개수 | 257 |

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
| RunWorkspace | L614–614 |
| StandardInspectionRunWorkspace | L617–617 |
| OpenReviewCorrectionButton | L698–698 |
| ShotHeaderOngoingBlink | L817–817 |
| ReviewHeadCards | L856–856 |
| RunGlassPreviewViewport | L918–918 |
| RunGlassPreviewHoverTip | L959–959 |
| RunGlassPreviewHoverTipTranslateTransform | L971–971 |
| RunGlassPreviewHoverTipText | L973–973 |
| SelectedShotStatusBlink | L1216–1216 |
| ReviewBeamSelectionPanel | L1469–1469 |
| BeamInspectionSelectionPanel | L1655–1655 |
| BeamResultOngoingBlink | L1814–1814 |
| BeamInspectionRunCommands | L1911–1911 |
| BeamInspectionStartButton | L1915–1915 |
| BeamInspectionStopButton | L1918–1918 |
| BeamInspectionLoadCommands | L1922–1922 |
| OneShotActionPanel | L2015–2015 |
| OneShotSelectionText | L2018–2018 |
| OneShotMethodCombo | L2021–2021 |
| OneShotMoveButton | L2026–2026 |
| OneShotInspectionButton | L2028–2028 |
| OneShotMoveInspectionButton | L2031–2031 |
| OneShotStopButton | L2033–2033 |
| AllShotRunCommands | L2078–2078 |
| AllShotStartButton | L2085–2085 |
| AllShotStopButton | L2088–2088 |
| RoughInspectionRunWorkspace | L2135–2135 |
| FineInspectionRunWorkspace | L2139–2139 |
| InspectionResultWorkspace | L2144–2144 |
| ReviewResultsPanel | L2150–2150 |
| OneShotResultText | L2163–2163 |
| ReviewResultGrid | L2167–2167 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| IsVisibleChanged | ReviewView_IsVisibleChanged | L10–10 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SizeChanged | ReviewPreview_SizeChanged | L918–918 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | RunCellPreviewLabel_MouseMove | L945–945 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | RunCellPreviewLabel_MouseLeave | L946–946 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseLeftButtonDown | CellPreviewLabel_PreviewMouseLeftButtonDown | L947–947 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| AutoGeneratingColumn | ReviewResultDataGrid_AutoGeneratingColumn | L2172–2172 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

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
| {Binding CurrentScreen.Review.SelectModeCommand} | L563–563 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L565–565 |
| {Binding CurrentScreen.Review.SelectModeCommand} | L579–579 |
| {Binding CurrentScreen.Review.IsRoughInspectionMode} | L581–581 |
| {Binding CurrentScreen.Review.SelectModeCommand} | L586–586 |
| {Binding CurrentScreen.Review.IsFineInspectionMode} | L588–588 |
| {Binding CurrentScreen.Review.SelectWorkspaceCommand} | L599–599 |
| {Binding CurrentScreen.Review.IsInspectionRunWorkspace} | L601–601 |
| {Binding CurrentScreen.Review.SelectWorkspaceCommand} | L607–607 |
| {Binding CurrentScreen.Review.IsInspectionResultWorkspace} | L609–609 |
| {Binding CurrentScreen.Review.IsInspectionRunWorkspace, Converter={StaticResource BooleanToVisibilityConverter}} | L616–616 |
| {Binding CurrentScreen.Review.IsStandardInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L618–618 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L626–626 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L638–638 |
| {Binding CurrentScreen.Review.Modes} | L665–665 |
| {Binding SelectCommand} | L673–673 |
| {Binding Name} | L674–674 |
| {Binding IsSelected} | L678–678 |
| {Binding DisplayName} | L687–687 |
| {Binding RelativeSource={RelativeSource AncestorType=Button}, Path=Foreground} | L688–688 |
| {Binding CurrentScreen.Review.OpenCorrectionReviewCommand} | L700–700 |
| {Binding CurrentScreen.Review.TargetItems} | L720–720 |
| {Binding Name} | L728–728 |
| {Binding Value} | L733–733 |
| {Binding Value} | L739–739 |
| {Binding CurrentScreen.Review.RunWorkspaceTitle} | L786–786 |
| {Binding CurrentScreen.Review.RunGlassPreviewSummary} | L789–789 |
| {Binding CurrentScreen.Review.IsShotInspectionOngoing} | L815–815 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L845–845 |
| {Binding CurrentScreen.Review.InspectionHeadRows} | L859–859 |
| {Binding CurrentScreen.Review.IsReviewHeadCardsVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L861–861 |
| {Binding Summary} | L870–870 |
| {Binding HasSelectedShots} | L876–876 |
| {Binding Name} | L882–882 |
| {Binding HasSelectedShots} | L888–888 |
| {Binding CurrentScreen.Review.IsRunGlassPreviewVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L900–900 |
| {Binding CurrentScreen.Review.IsRunStageStatusVisible} | L912–912 |
| {Binding CurrentScreen.Review.RunGlassPreviewImage} | L919–919 |
| {Binding CurrentScreen.Review.RunCellPreviewLabels} | L923–923 |
| {Binding CanvasCenterX} | L928–928 |
| {Binding CanvasCenterY} | L929–929 |
| {Binding RelativeSource={RelativeSource AncestorType=ItemsControl}, Path=ActualWidth} | L930–930 |
| {Binding RelativeSource={RelativeSource AncestorType=ItemsControl}, Path=ActualHeight} | L931–931 |
| {Binding DesignWidth} | L932–932 |
| {Binding DesignHeight} | L933–933 |
| {Binding Height} | L935–935 |
| {Binding CellNo} | L940–940 |
| {Binding Height} | L942–942 |
| {Binding DataContext.CurrentScreen.Review.SelectRunCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L943–943 |
| {Binding CellNo} | L944–944 |
| {Binding CurrentScreen.Review.RunGlassPreviewInspectionOverlayImage} | L952–952 |
| {Binding CurrentScreen.Review.Camera} | L958–958 |
| {Binding CurrentScreen.Review.IsRunStageStatusVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L990–990 |
| {Binding CurrentScreen.Review.Camera.StageY} | L1001–1001 |
| {Binding CurrentScreen.Review.Camera.StageYSpeed} | L1005–1005 |
| {Binding CurrentScreen.Review.Camera.ReviewX} | L1009–1009 |
| {Binding CurrentScreen.Review.Camera.ReviewXSpeed} | L1013–1013 |
| {Binding CurrentScreen.Review.Camera.Mode} | L1016–1016 |
| {Binding CurrentScreen.Review.IsRunCellDetailVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1027–1027 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1035–1035 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1047–1047 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1070–1070 |
| {Binding CurrentScreen.Review.IsRunShotMapVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1083–1083 |
| {Binding CurrentScreen.Review.RunCellShotMatrixRows} | L1085–1085 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1086–1086 |
| {Binding CurrentScreen.Review.ReviewLevelLegendItems} | L1108–1108 |
| {Binding ColorBrush} | L1128–1128 |
| {Binding Name} | L1131–1131 |
| {Binding RangeText} | L1136–1136 |
| {Binding RangeText} | L1137–1137 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1161–1161 |
| {Binding CurrentScreen.Review.SelectedShotInspection.Caption} | L1189–1189 |
| {Binding CurrentScreen.Review.SelectedShotInspection.ShotText} | L1196–1196 |
| {Binding CurrentScreen.Review.SelectedShotInspection.ShotText} | L1197–1197 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusText} | L1205–1205 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusBrush} | L1206–1206 |
| {Binding CurrentScreen.Review.SelectedShotInspection.IsInspecting} | L1214–1214 |
| {Binding CurrentScreen.Review.SelectedShotInspection.PositionXText} | L1265–1265 |
| {Binding CurrentScreen.Review.SelectedShotInspection.PositionYText} | L1266–1266 |
| {Binding CurrentScreen.Review.SelectedShotInspection.ResultXText} | L1267–1267 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusBrush} | L1267–1267 |
| {Binding CurrentScreen.Review.SelectedShotInspection.ResultYText} | L1268–1268 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusBrush} | L1268–1268 |
| {Binding CurrentScreen.Review.SelectedShotInspection.JudgeText} | L1270–1270 |
| {Binding CurrentScreen.Review.SelectedShotInspection.StatusBrush} | L1270–1270 |
| {Binding CurrentScreen.Review.SelectedShotInspection.LevelText} | L1271–1271 |
| {Binding CurrentScreen.Review.SelectedShotInspection.LevelBrush} | L1271–1271 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1282–1282 |
| {Binding CurrentScreen.Review.BeamSelectionSummary} | L1294–1294 |
| {Binding CurrentScreen.Review.ActiveInspectionShotText} | L1300–1300 |
| {Binding CurrentScreen.Review.ActiveInspectionShotText} | L1306–1306 |
| {Binding CurrentScreen.Review.RunBeamRows} | L1337–1337 |
| {Binding Beams} | L1341–1341 |
| {Binding SelectCommand} | L1345–1345 |
| {Binding BeamNo} | L1346–1346 |
| {Binding BackgroundBrush} | L1350–1350 |
| {Binding IsSelected, Mode=OneWay} | L1371–1371 |
| {Binding BeamNo} | L1376–1376 |
| {Binding TextBrush} | L1377–1377 |
| {Binding TargetX} | L1380–1380 |
| {Binding TextBrush} | L1381–1381 |
| {Binding TargetY} | L1384–1384 |
| {Binding TextBrush} | L1385–1385 |
| {Binding CurrentScreen.Review.SelectAllInspectionBeamsCommand} | L1401–1401 |
| {Binding CurrentScreen.Review.ClearInspectionBeamsCommand} | L1405–1405 |
| {Binding CurrentScreen.Review.InspectionListCommitText} | L1408–1408 |
| {Binding CurrentScreen.Review.AddInspectionShotCommand} | L1409–1409 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1433–1433 |
| {Binding CurrentScreen.Review.IsAllShotReviewMode} | L1447–1447 |
| {Binding CurrentScreen.Review.IsOneLineReviewMode} | L1451–1451 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1455–1455 |
| {Binding CurrentScreen.Review.IsOneShotReviewMode} | L1459–1459 |
| {Binding CurrentScreen.Review.IsSingleBeamSelectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1472–1472 |
| {Binding CurrentScreen.Review.BeamSelectionSummary} | L1485–1485 |
| {Binding CurrentScreen.Review.IsInspectionExecutionViewVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1491–1491 |
| {Binding CurrentScreen.Review.PreviousInspectionShotCommand} | L1498–1498 |
| {Binding CurrentScreen.Review.InspectionShotSummary} | L1499–1499 |
| {Binding CurrentScreen.Review.NextInspectionShotCommand} | L1502–1502 |
| {Binding CurrentScreen.Review.InspectionProgressText} | L1504–1504 |
| {Binding CurrentScreen.Review.InspectionProgressText} | L1506–1506 |
| {Binding CurrentScreen.Review.BeamOptions} | L1512–1512 |
| {Binding CurrentScreen.Review.SelectedBeam, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1513–1513 |
| {Binding CurrentScreen.Review.CanSelectBeam} | L1514–1514 |
| {Binding CurrentScreen.Review.IsSingleBeamSelectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1516–1516 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1522–1522 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode} | L1526–1526 |
| {Binding ActualWidth, RelativeSource={RelativeSource Self}} | L1527–1527 |
| {Binding CurrentScreen.Review.RunBeamRows} | L1532–1532 |
| {Binding CurrentScreen.Review.CanSelectBeam} | L1535–1535 |
| {Binding Beams} | L1543–1543 |
| {Binding SelectCommand} | L1553–1553 |
| {Binding BeamNo} | L1554–1554 |
| {Binding BackgroundBrush} | L1559–1559 |
| {Binding BorderBrush} | L1560–1560 |
| {Binding DataContext.CurrentScreen.Review.IsBeamInspectionMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L1567–1567 |
| {Binding DataContext.CurrentScreen.Review.IsOneShotReviewMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L1570–1570 |
| {Binding BeamName} | L1588–1588 |
| {Binding TextBrush} | L1589–1589 |
| {Binding DataContext.CurrentScreen.Review.IsBeamInspectionMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L1597–1597 |
| {Binding DataContext.CurrentScreen.Review.IsOneShotReviewMode, RelativeSource={RelativeSource AncestorType=UserControl}} | L1600–1600 |
| {Binding DataContext.CurrentScreen.Review.IsOneShotReviewMode, RelativeSource={RelativeSource AncestorType=UserControl}, Converter={StaticResource BooleanToVisibilityConverter}} | L1609–1609 |
| {Binding TextBrush} | L1610–1610 |
| {Binding TargetX, Mode=OneWay} | L1611–1611 |
| {Binding TextBrush} | L1613–1613 |
| {Binding TargetY, Mode=OneWay} | L1614–1614 |
| {Binding DataContext.CurrentScreen.Review.IsInspectionExecutionViewVisible, RelativeSource={RelativeSource AncestorType=UserControl}, Converter={StaticResource BooleanToVisibilityConverter}} | L1617–1617 |
| {Binding InspectionStatus} | L1618–1618 |
| {Binding TextBrush} | L1618–1618 |
| {Binding InspectionResultText} | L1620–1620 |
| {Binding TextBrush} | L1620–1620 |
| {Binding CurrentScreen.Review.CanSelectBeam} | L1635–1635 |
| {Binding CurrentScreen.Review.IsInspectionSelectionControlsVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1636–1636 |
| {Binding CurrentScreen.Review.SelectAllInspectionBeamsCommand} | L1638–1638 |
| {Binding CurrentScreen.Review.ClearInspectionBeamsCommand} | L1645–1645 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1657–1657 |
| {Binding CurrentScreen.Review.BeamInspectionAssignmentSummary} | L1679–1679 |
| {Binding CurrentScreen.Review.BeamInspectionShotAssignments} | L1688–1688 |
| {Binding CurrentScreen.Review.SelectedBeamInspectionAssignment, Mode=TwoWay} | L1689–1689 |
| {Binding IndexText} | L1704–1704 |
| {Binding CellText} | L1705–1705 |
| {Binding HeadText} | L1706–1706 |
| {Binding ShotName} | L1707–1707 |
| {Binding BeamText} | L1711–1711 |
| {Binding BeamText} | L1712–1712 |
| {Binding State} | L1721–1721 |
| {Binding StateBrush} | L1722–1722 |
| {Binding CurrentScreen.Review.DeleteInspectionShotCommand} | L1734–1734 |
| {Binding CurrentScreen.Review.ClearInspectionShotsCommand} | L1741–1741 |
| {Binding CurrentScreen.Review.InspectionShotSummary} | L1766–1766 |
| {Binding CurrentScreen.Review.InspectionShotSummary} | L1770–1770 |
| {Binding CurrentScreen.Review.InspectionProgressText} | L1776–1776 |
| {Binding CurrentScreen.Review.InspectionProgressText} | L1781–1781 |
| {Binding CurrentScreen.Review.InspectionBeamResultRows} | L1783–1783 |
| {Binding Beams} | L1793–1793 |
| {Binding BackgroundBrush} | L1808–1808 |
| {Binding BorderBrush} | L1809–1809 |
| {Binding IsCurrent} | L1812–1812 |
| {Binding BeamName} | L1836–1836 |
| {Binding TextBrush} | L1837–1837 |
| {Binding InspectionStatus} | L1840–1840 |
| {Binding StateBrush} | L1842–1842 |
| {Binding InspectionResultText} | L1847–1847 |
| {Binding TextBrush} | L1848–1848 |
| {Binding InspectionStatus} | L1860–1860 |
| {Binding InspectionStatus} | L1875–1875 |
| {Binding CurrentScreen.Review.IsBeamInspectionMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1913–1913 |
| {Binding CurrentScreen.Review.StartCommand} | L1915–1915 |
| {Binding CurrentScreen.Review.StopCommand} | L1918–1918 |
| {Binding CurrentScreen.Review.LoadLastBeamInspectionResultCommand} | L1929–1929 |
| {Binding CurrentScreen.Review.CanLoadBeamInspectionResult} | L1930–1930 |
| {Binding CurrentScreen.Review.ClearLoadedBeamInspectionResultCommand} | L1938–1938 |
| {Binding CurrentScreen.Review.CanClearLoadedBeamInspectionResult} | L1939–1939 |
| {Binding CurrentScreen.Review.IsAllShotStyleReviewMode, Converter={StaticResource BooleanToVisibilityConverter}} | L1952–1952 |
| {Binding CurrentScreen.Review.SelectedInspectionMethod} | L1963–1963 |
| {Binding CurrentScreen.Review.InspectionMethodItems} | L1970–1970 |
| {Binding CurrentScreen.Review.CanSelectInspectionMethod} | L1971–1971 |
| {Binding SelectCommand} | L1981–1981 |
| {Binding Name} | L1982–1982 |
| {Binding BackgroundBrush} | L1986–1986 |
| {Binding BorderBrush} | L1987–1987 |
| {Binding DisplayName} | L2002–2002 |
| {Binding TextBrush} | L2003–2003 |
| {Binding CurrentScreen.Review.IsOneShotReviewMode, Converter={StaticResource BooleanToVisibilityConverter}} | L2016–2016 |
| {Binding CurrentScreen.Review.OneShotSelection} | L2018–2018 |
| {Binding CurrentScreen.Review.OneShotMethods} | L2021–2021 |
| {Binding CurrentScreen.Review.SelectedOneShotMethod, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L2022–2022 |
| {Binding CurrentScreen.Review.CanSelectBeam} | L2023–2023 |
| {Binding CurrentScreen.Review.OneShotActionCommand} | L2026–2026 |
| {Binding CurrentScreen.Review.OneShotActionCommand} | L2028–2028 |
| {Binding CurrentScreen.Review.OneShotActionCommand} | L2031–2031 |
| {Binding CurrentScreen.Review.StopCommand} | L2033–2033 |
| {Binding CurrentScreen.Review.CanStopOneShot} | L2034–2034 |
| {Binding CurrentScreen.Review.LoadLastRunReviewResultCommand} | L2044–2044 |
| {Binding CurrentScreen.Review.ClearLoadedRunReviewResultCommand} | L2052–2052 |
| {Binding CurrentScreen.Review.IsRunReviewResultLoading, Converter={StaticResource BooleanToVisibilityConverter}} | L2060–2060 |
| {Binding CurrentScreen.Review.RunResultLoadStatus} | L2069–2069 |
| {Binding CurrentScreen.Review.RunResultLoadStatus} | L2070–2070 |
| {Binding CurrentScreen.Review.IsAllShotStyleReviewMode, Converter={StaticResource BooleanToVisibilityConverter}} | L2082–2082 |
| {Binding CurrentScreen.Review.StartCommand} | L2085–2085 |
| {Binding CurrentScreen.Review.StopCommand} | L2088–2088 |
| {Binding CurrentScreen.Review.LoadLastRunReviewResultCommand} | L2099–2099 |
| {Binding CurrentScreen.Review.ClearLoadedRunReviewResultCommand} | L2107–2107 |
| {Binding CurrentScreen.Review.IsRunReviewResultLoading, Converter={StaticResource BooleanToVisibilityConverter}} | L2115–2115 |
| {Binding CurrentScreen.Review.RunResultLoadStatus} | L2124–2124 |
| {Binding CurrentScreen.Review.RunResultLoadStatus} | L2125–2125 |
| {Binding CurrentScreen.Correction.Rough} | L2136–2136 |
| {Binding DataContext.CurrentScreen.Review.IsRoughInspectionMode, RelativeSource={RelativeSource AncestorType=views:CReviewView}, Converter={StaticResource BooleanToVisibilityConverter}} | L2137–2137 |
| {Binding CurrentScreen.Correction.Fine} | L2140–2140 |
| {Binding DataContext.CurrentScreen.Review.IsFineInspectionMode, RelativeSource={RelativeSource AncestorType=views:CReviewView}, Converter={StaticResource BooleanToVisibilityConverter}} | L2141–2141 |
| {Binding CurrentScreen.Correction.InspectionReviewData} | L2147–2147 |
| {Binding DataContext.CurrentScreen.Review.IsInspectionResultWorkspace, RelativeSource={RelativeSource AncestorType=views:CReviewView}, Converter={StaticResource BooleanToVisibilityConverter}} | L2148–2148 |
| {Binding CurrentScreen.Review.IsReviewResultDeferred, Converter={StaticResource BooleanToVisibilityConverter}} | L2162–2162 |
| {Binding CurrentScreen.Review.OneShotResultText} | L2163–2163 |
| {Binding CurrentScreen.Review.IsOneShotReviewMode, Converter={StaticResource BooleanToVisibilityConverter}} | L2165–2165 |
| {Binding CurrentScreen.Review.ResultMatrix} | L2170–2170 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CReviewView.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
