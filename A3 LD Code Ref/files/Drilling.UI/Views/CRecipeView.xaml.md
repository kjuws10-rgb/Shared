# Drilling.UI/Views/CRecipeView.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 334b3599651b2e8e0181fd4459bafaf3cddafff3 |
| 원본 SHA256 | 12f20241df43233b1a70df521106cdf4be52f7ca2af3f8862b324330d282cc3c |
| 파일 분류 | code |
| 원본 크기/행 | 141,571 bytes / 1,788 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/334b3599651b2e8e0181fd4459bafaf3cddafff3/Drilling.UI/Views/CRecipeView.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/e3dcdfda2fb72af628bc.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Views/CRecipeView.xaml.cs |
| 이름 있는 요소 | ItemBorder, ToggleButton, Shell, PART_Popup, RecipeFilesPanel, RecipeEditorPanel, CellParameterPanel, CellShotMapViewport, CellShotMapZoomContent, CellShotMapScaleTransform, CellShotMapTranslateTransform, CellShotMapSurface, CellShotMapHoverTip, CellShotMapHoverTipTranslateTransform, CellShotMapHoverTipText, RecipePreviewViewport, RecipePreviewZoomContent, RecipePreviewScaleTransform, RecipePreviewTranslateTransform, RecipePreviewHoverTip, RecipePreviewHoverTipTranslateTransform, RecipePreviewHoverTipText, HistoryPanel, HistoryExpandButton, ChangeHistoryGrid |
| 이벤트 개수 | 33 |
| Binding 표현 개수 | 177 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| ItemBorder | L65–65 |
| ToggleButton | L87–87 |
| Shell | L88–88 |
| PART_Popup | L90–90 |
| RecipeFilesPanel | L232–232 |
| RecipeEditorPanel | L516–516 |
| CellParameterPanel | L664–664 |
| CellShotMapViewport | L1182–1182 |
| CellShotMapZoomContent | L1194–1194 |
| CellShotMapScaleTransform | L1198–1198 |
| CellShotMapTranslateTransform | L1201–1201 |
| CellShotMapSurface | L1205–1205 |
| CellShotMapHoverTip | L1219–1219 |
| CellShotMapHoverTipTranslateTransform | L1231–1231 |
| CellShotMapHoverTipText | L1233–1233 |
| RecipePreviewViewport | L1433–1433 |
| RecipePreviewZoomContent | L1448–1448 |
| RecipePreviewScaleTransform | L1452–1452 |
| RecipePreviewTranslateTransform | L1455–1455 |
| RecipePreviewHoverTip | L1505–1505 |
| RecipePreviewHoverTipTranslateTransform | L1517–1517 |
| RecipePreviewHoverTipText | L1519–1519 |
| HistoryPanel | L1735–1735 |
| HistoryExpandButton | L1749–1749 |
| ChangeHistoryGrid | L1754–1754 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| IsVisibleChanged | RecipeView_IsVisibleChanged | L10–10 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L728–728 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L740–740 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L752–752 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L824–824 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L836–836 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L855–855 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L928–928 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | ToggleCellPlacement_Click | L965–965 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenCellPlacementWizard_Click | L974–974 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenCellOverviewInput | L1054–1054 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenCellOverviewInput | L1055–1055 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenCellOverviewInput | L1056–1056 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseWheel | CellShotMap_PreviewMouseWheel | L1187–1187 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseRightButtonDown | CellShotMap_PreviewMouseRightButtonDown | L1188–1188 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | CellShotMapResize_Click | L1191–1191 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonDown | SelectShotGroupFromMap | L1210–1210 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | CellShotMapSurface_MouseMove | L1211–1211 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | CellShotMapSurface_MouseLeave | L1212–1212 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenShotGroupOffsetInput | L1381–1381 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenShotGroupOffsetInput | L1390–1390 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| LostMouseCapture | RecipePreview_LostMouseCapture | L1437–1437 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseWheel | RecipePreview_PreviewMouseWheel | L1438–1438 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseLeftButtonDown | RecipePreview_PreviewMouseLeftButtonDown | L1439–1439 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseRightButtonDown | RecipePreview_PreviewMouseRightButtonDown | L1440–1440 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseMove | RecipePreview_PreviewMouseMove | L1441–1441 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| PreviewMouseLeftButtonUp | RecipePreview_PreviewMouseLeftButtonUp | L1442–1442 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | RecipePreviewResize_Click | L1445–1445 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | CellPreviewLabel_MouseMove | L1473–1473 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | CellPreviewLabel_MouseLeave | L1474–1474 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L1594–1594 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OpenManagedItemInput | L1714–1714 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | ToggleHistory_Click | L1750–1750 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

| Binding 표현 | 원본 범위 |
| --- | --- |
| {Binding DataContext.CurrentScreen.Recipe.IsViewRecipeSelected, RelativeSource={RelativeSource AncestorType=UserControl}} | L24–24 |
| {Binding DataContext.CurrentScreen.Recipe.IsViewRecipeSelected, RelativeSource={RelativeSource AncestorType=UserControl}} | L75–75 |
| {Binding IsDropDownOpen, Mode=TwoWay, RelativeSource={RelativeSource TemplatedParent}} | L87–87 |
| {Binding SelectionBoxItem, RelativeSource={RelativeSource AncestorType=ComboBox}} | L88–88 |
| {Binding ActualWidth, ElementName=ToggleButton} | L90–90 |
| {Binding CurrentScreen.IsRecipeLayout, Converter={StaticResource BooleanToVisibilityConverter}} | L202–202 |
| {Binding CurrentScreen.Recipe.IsZeroDefenceCategory} | L223–223 |
| {Binding CurrentScreen.Recipe.RecipeFiles} | L278–278 |
| {Binding DataContext.CurrentScreen.Recipe.ViewCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L282–282 |
| {Binding FileName} | L283–283 |
| {Binding IsView} | L289–289 |
| {Binding IsSelect} | L292–292 |
| {Binding No} | L303–303 |
| {Binding IsView} | L311–311 |
| {Binding IsSelect} | L314–314 |
| {Binding FileName} | L325–325 |
| {Binding IsView} | L332–332 |
| {Binding IsSelect} | L335–335 |
| {Binding CurrentScreen.Recipe.PreviousRecipePageCommand} | L365–365 |
| {Binding CurrentScreen.Recipe.RecipeFilesPageText} | L367–367 |
| {Binding CurrentScreen.Recipe.NextRecipePageCommand} | L380–380 |
| {Binding CurrentScreen.Recipe.SelectCommand} | L389–389 |
| {Binding CurrentScreen.Recipe.CreateCommand} | L415–415 |
| {Binding CurrentScreen.Recipe.ModifyCommand} | L440–440 |
| {Binding CurrentScreen.Recipe.SaveCommand} | L467–467 |
| {Binding CurrentScreen.Recipe.DeleteCommand} | L490–490 |
| {Binding CurrentScreen.Recipe.IsCellCategory} | L527–527 |
| {Binding CurrentScreen.Recipe.IsCellCategory} | L539–539 |
| {Binding CurrentScreen.Recipe.ItemTabs} | L559–559 |
| {Binding DisplayName} | L567–567 |
| {Binding DataContext.CurrentScreen.Recipe.SelectCategoryCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L568–568 |
| {Binding Category} | L569–569 |
| {Binding IsSelected} | L576–576 |
| {Binding CurrentScreen.Recipe.GroupTabs} | L591–591 |
| {Binding CurrentScreen.Recipe.IsCellCategory} | L597–597 |
| {Binding CurrentScreen.Recipe.IsHeadCategory} | L600–600 |
| {Binding CurrentScreen.Recipe.IsZeroDefenceCategory} | L603–603 |
| {Binding Group} | L616–616 |
| {Binding DataContext.CurrentScreen.Recipe.SelectGroupCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L617–617 |
| {Binding Group} | L618–618 |
| {Binding IsSelected} | L628–628 |
| {Binding DataContext.CurrentScreen.Recipe.IsHeadCategory, RelativeSource={RelativeSource AncestorType=UserControl}} | L633–633 |
| {Binding CurrentScreen.Recipe.IsCellCategory, Converter={StaticResource BooleanToVisibilityConverter}} | L650–650 |
| {Binding DataContext.CurrentScreen.Recipe.IsCellPlacementExpanded, RelativeSource={RelativeSource AncestorType=UserControl}} | L677–677 |
| {Binding CurrentScreen.Recipe.GlassSizeXItem.Value} | L728–728 |
| {Binding CurrentScreen.Recipe.GlassSizeXItem} | L728–728 |
| {Binding CurrentScreen.Recipe.GlassSizeYItem.Value} | L740–740 |
| {Binding CurrentScreen.Recipe.GlassSizeYItem} | L740–740 |
| {Binding CurrentScreen.Recipe.MaxCellNumberItem.Value} | L752–752 |
| {Binding CurrentScreen.Recipe.MaxCellNumberItem} | L752–752 |
| {Binding CurrentScreen.Recipe.AkMarginXText} | L772–772 |
| {Binding CurrentScreen.Recipe.AkMarginYText} | L786–786 |
| {Binding CurrentScreen.Recipe.CellModelTypeCountItem.ValueOptions} | L800–800 |
| {Binding CurrentScreen.Recipe.CellModelTypeCountItem.Value, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L801–801 |
| {Binding CurrentScreen.Recipe.EscEdgeToGlassEdgeItem.Value} | L824–824 |
| {Binding CurrentScreen.Recipe.EscEdgeToGlassEdgeItem} | L824–824 |
| {Binding CurrentScreen.Recipe.GlassCenterToScannerCenterItem.Value} | L836–836 |
| {Binding CurrentScreen.Recipe.GlassCenterToScannerCenterItem} | L836–836 |
| {Binding CurrentScreen.Recipe.PixelSizeItem.Value} | L855–855 |
| {Binding CurrentScreen.Recipe.PixelSizeItem} | L855–855 |
| {Binding CurrentScreen.Recipe.SplitBeamCountItem.ValueOptions} | L875–875 |
| {Binding CurrentScreen.Recipe.SplitBeamCountItem.Value, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L876–876 |
| {Binding CurrentScreen.Recipe.ShotGroupPatternSummary} | L887–887 |
| {Binding CurrentScreen.Recipe.DistortionKeyItems} | L898–898 |
| {Binding DisplayText} | L921–921 |
| {Binding YItem.Value} | L926–926 |
| {Binding YItem} | L927–927 |
| {Binding YLabel} | L930–930 |
| {Binding CurrentScreen.Recipe.CurrentCellIndicatorText} | L958–958 |
| {Binding DataContext.CurrentScreen.Recipe.CellPlacementExpandButtonText, RelativeSource={RelativeSource AncestorType=UserControl}} | L964–964 |
| {Binding CurrentScreen.Recipe.CellOverviewRows} | L992–992 |
| {Binding IsCurrent} | L1028–1028 |
| {Binding CellNo} | L1039–1039 |
| {Binding DataContext.CurrentScreen.Recipe.SelectCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1040–1040 |
| {Binding CellNo} | L1041–1041 |
| {Binding FirstX} | L1054–1054 |
| {Binding FirstY} | L1055–1055 |
| {Binding Rotation} | L1056–1056 |
| {Binding ModelOptions} | L1060–1060 |
| {Binding ModelType, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1061–1061 |
| {Binding CurrentScreen.Recipe.IsCellDetailVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1081–1081 |
| {Binding CurrentScreen.Recipe.PreviousCellCommand} | L1095–1095 |
| {Binding CurrentScreen.Recipe.SelectedCellNavigationText} | L1110–1110 |
| {Binding CurrentScreen.Recipe.NextCellCommand} | L1118–1118 |
| {Binding CurrentScreen.Recipe.BackToCellPreviewCommand} | L1130–1130 |
| {Binding CurrentScreen.Recipe.SelectedCellShotGroupTitle} | L1137–1137 |
| {Binding CurrentScreen.Recipe.CellShotMapPanelHeight} | L1151–1151 |
| {Binding CurrentScreen.Recipe.CellShotMapGridRow} | L1163–1163 |
| {Binding CurrentScreen.Recipe.CellShotMapGridRowSpan} | L1164–1164 |
| {Binding CurrentScreen.Recipe.CellShotMapGridColumn} | L1165–1165 |
| {Binding CurrentScreen.Recipe.CellShotMapGridColumnSpan} | L1166–1166 |
| {Binding CurrentScreen.Recipe.CellShotMapSurfaceWidth} | L1206–1206 |
| {Binding CurrentScreen.Recipe.CellShotMapSurfaceHeight} | L1207–1207 |
| {Binding CurrentScreen.Recipe.CellShotMapImage} | L1213–1213 |
| {Binding CurrentScreen.Recipe.CellShotDetailGridRow} | L1253–1253 |
| {Binding CurrentScreen.Recipe.CellShotDetailGridRowSpan} | L1254–1254 |
| {Binding CurrentScreen.Recipe.CellShotDetailGridColumn} | L1255–1255 |
| {Binding CurrentScreen.Recipe.CellShotDetailGridColumnSpan} | L1256–1256 |
| {Binding CurrentScreen.Recipe.CellShotDetailVerticalGap} | L1259–1259 |
| {Binding CurrentScreen.Recipe.SelectedShotDetailGridRow} | L1268–1268 |
| {Binding CurrentScreen.Recipe.SelectedShotDetailGridColumn} | L1269–1269 |
| {Binding CurrentScreen.Recipe.SelectedShotDetailGridColumnSpan} | L1270–1270 |
| {Binding CurrentScreen.Recipe.SelectedShotDetailImage} | L1287–1287 |
| {Binding CurrentScreen.Recipe.ShotInformationGridRow} | L1308–1308 |
| {Binding CurrentScreen.Recipe.ShotInformationGridColumn} | L1309–1309 |
| {Binding CurrentScreen.Recipe.ShotInformationGridColumnSpan} | L1310–1310 |
| {Binding CurrentScreen.Recipe.SelectedShotGroupGridText} | L1339–1339 |
| {Binding CurrentScreen.Recipe.SelectedShotGroupCenterText} | L1341–1341 |
| {Binding CurrentScreen.Recipe.SelectedShotGroupStateText} | L1344–1344 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup.IsChessSkipped} | L1349–1349 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup.IsInsideGlass} | L1352–1352 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup.IsMasked} | L1355–1355 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup.MaskingStateText} | L1363–1363 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup.IsMasked} | L1368–1368 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup.OffsetX} | L1381–1381 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup} | L1381–1381 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup.OffsetY} | L1390–1390 |
| {Binding CurrentScreen.Recipe.SelectedShotGroup} | L1390–1390 |
| {Binding CurrentScreen.Recipe.IsCellPreviewVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L1403–1403 |
| {Binding CurrentScreen.Recipe.CellPreviewSummaryText} | L1418–1418 |
| {Binding CurrentScreen.Recipe.CellPreviewImage} | L1458–1458 |
| {Binding CurrentScreen.Recipe.CellPreviewLabels} | L1462–1462 |
| {Binding Width} | L1467–1467 |
| {Binding Height} | L1468–1468 |
| {Binding DataContext.CurrentScreen.Recipe.SelectPreviewCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1475–1475 |
| {Binding CellNo} | L1476–1476 |
| {Binding CurrentScreen.Recipe.IsHeadCategory, Converter={StaticResource BooleanToVisibilityConverter}} | L1531–1531 |
| {Binding CurrentScreen.Recipe.GroupTabs} | L1543–1543 |
| {Binding Group} | L1552–1552 |
| {Binding DataContext.CurrentScreen.Recipe.SelectGroupCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L1553–1553 |
| {Binding Group} | L1554–1554 |
| {Binding IsSelected} | L1565–1565 |
| {Binding CurrentScreen.Recipe.ManagedItems} | L1581–1581 |
| {Binding Group} | L1588–1588 |
| {Binding Item} | L1589–1589 |
| {Binding Value} | L1594–1594 |
| {Binding} | L1594–1594 |
| {Binding UsesSelectionEditor} | L1596–1596 |
| {Binding ValueOptions} | L1598–1598 |
| {Binding Value, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1598–1598 |
| {Binding UsesSelectionEditor} | L1601–1601 |
| {Binding Unit} | L1607–1607 |
| {Binding CurrentScreen.Recipe.HeadPreviewSummaryText} | L1628–1628 |
| {Binding CurrentScreen.Recipe.HeadPreviewImage} | L1649–1649 |
| {Binding CurrentScreen.Recipe.HeadPreviewLabels} | L1653–1653 |
| {Binding Width} | L1657–1657 |
| {Binding Height} | L1658–1658 |
| {Binding BackgroundBrush} | L1660–1660 |
| {Binding BorderBrush} | L1661–1661 |
| {Binding DisplayText} | L1665–1665 |
| {Binding TextBrush} | L1666–1666 |
| {Binding CurrentScreen.Recipe.ZeroDefence} | L1682–1682 |
| {Binding DataContext.CurrentScreen.Recipe.IsZeroDefenceCategory, RelativeSource={RelativeSource AncestorType=views:CRecipeView}, Converter={StaticResource BooleanToVisibilityConverter}} | L1683–1683 |
| {Binding CurrentScreen.Recipe.ManagedItems} | L1686–1686 |
| {Binding CurrentScreen.Recipe.IsCellCategory} | L1695–1695 |
| {Binding CurrentScreen.Recipe.IsHeadCategory} | L1698–1698 |
| {Binding CurrentScreen.Recipe.IsZeroDefenceCategory} | L1701–1701 |
| {Binding Group} | L1708–1708 |
| {Binding Item} | L1709–1709 |
| {Binding Value} | L1714–1714 |
| {Binding} | L1714–1714 |
| {Binding UsesSelectionEditor} | L1716–1716 |
| {Binding ValueOptions} | L1718–1718 |
| {Binding Value, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged} | L1718–1718 |
| {Binding UsesSelectionEditor} | L1721–1721 |
| {Binding Unit} | L1727–1727 |
| {Binding Description} | L1728–1728 |
| {Binding CurrentScreen.Recipe.ChangeHistory} | L1756–1756 |
| {Binding Time} | L1764–1764 |
| {Binding Action} | L1765–1765 |
| {Binding Recipe} | L1766–1766 |
| {Binding Tab} | L1767–1767 |
| {Binding Group} | L1768–1768 |
| {Binding Item} | L1769–1769 |
| {Binding Before} | L1770–1770 |
| {Binding After} | L1771–1771 |
| {Binding AfterBrush} | L1774–1774 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CRecipeView.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
