# Drilling.UI/Views/CCorrectionView.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 96e22cd027c84bf302b23f2949b98985d7f301bb |
| 원본 SHA256 | 3265891a261a9bd0a59175212987714d773b6feb52d5807f16084dbb42f95118 |
| 파일 분류 | code |
| 원본 크기/행 | 59,499 bytes / 911 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Views/CCorrectionView.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/59eec96a730843d69ae5.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Views/CCorrectionView.xaml.cs |
| 이름 있는 요소 | DefaultWorkspace, CorrectionReviewTabControl, OutputViewerPreviewViewport, OutputViewerPreviewHoverTip, OutputViewerPreviewHoverTipTranslateTransform, OutputViewerPreviewHoverTipText, OutputViewerCellShotMapSurface, OutputOffsetKinds, OutputOffsetGrid |
| 이벤트 개수 | 5 |
| Binding 표현 개수 | 108 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| DefaultWorkspace | L217–217 |
| CorrectionReviewTabControl | L228–228 |
| OutputViewerPreviewViewport | L539–539 |
| OutputViewerPreviewHoverTip | L595–595 |
| OutputViewerPreviewHoverTipTranslateTransform | L607–607 |
| OutputViewerPreviewHoverTipText | L609–609 |
| OutputViewerCellShotMapSurface | L664–664 |
| OutputOffsetKinds | L707–707 |
| OutputOffsetGrid | L775–775 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| SelectionChanged | CorrectionReviewTabControl_SelectionChanged | L229–229 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | OutputViewerCellPreviewLabel_MouseMove | L558–558 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | OutputViewerCellPreviewLabel_MouseLeave | L559–559 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonDown | SelectOutputViewerShotFromMap | L669–669 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | OutputOffsetGrid_SelectionChanged | L793–793 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

| Binding 표현 | 원본 범위 |
| --- | --- |
| {Binding RelativeSource={RelativeSource Self}, Path=Tag} | L29–29 |
| {Binding Name} | L47–47 |
| {Binding XState} | L53–53 |
| {Binding XFlip} | L53–53 |
| {Binding YState} | L55–55 |
| {Binding YFlip} | L55–55 |
| {Binding XyState} | L57–57 |
| {Binding XyFlip} | L57–57 |
| {Binding IsSelected} | L115–115 |
| {Binding CurrentScreen.IsCorrectionLayout, Converter={StaticResource BooleanToVisibilityConverter}} | L132–132 |
| {Binding CurrentScreen.Correction.Title} | L143–143 |
| {Binding CurrentScreen.Correction.Subtitle} | L147–147 |
| {Binding CurrentScreen.Correction.IsCorrectionCommandsVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L154–154 |
| {Binding CurrentScreen.Correction.ExecuteCommand} | L157–157 |
| {Binding CurrentScreen.Correction.ExecuteCommand} | L164–164 |
| {Binding CurrentScreen.Correction.ExecuteCommand} | L171–171 |
| {Binding CurrentScreen.Correction.ExecuteCommand} | L178–178 |
| {Binding CurrentScreen.Correction.Tabs} | L189–189 |
| {Binding Name} | L198–198 |
| {Binding DataContext.CurrentScreen.Correction.SelectTabCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L199–199 |
| {Binding Name} | L200–200 |
| {Binding IsSelected} | L204–204 |
| {Binding CurrentScreen.Correction.IsDefaultTab, Converter={StaticResource BooleanToVisibilityConverter}} | L218–218 |
| {Binding CurrentScreen.Correction.DefaultOffset} | L219–219 |
| {Binding CurrentScreen.Correction.IsAlignDistortionTab, Converter={StaticResource BooleanToVisibilityConverter}} | L223–223 |
| {Binding CurrentScreen.Correction.AlignDistortion} | L225–225 |
| {Binding CurrentScreen.Correction.SelectedReviewTabIndex, Mode=TwoWay} | L230–230 |
| {Binding CurrentScreen.Correction.IsReviewCorrectionTab, Converter={StaticResource BooleanToVisibilityConverter}} | L232–232 |
| {Binding CurrentScreen.Correction.Simple} | L263–263 |
| {Binding CurrentScreen.Correction.Rough} | L266–266 |
| {Binding CurrentScreen.Correction.Fine} | L269–269 |
| {Binding CurrentScreen.Correction.ReviewData} | L272–272 |
| {Binding CurrentScreen.Correction.SummaryItems} | L277–277 |
| {Binding CurrentScreen.Correction.IsOtherCorrectionTab, Converter={StaticResource BooleanToVisibilityConverter}} | L278–278 |
| {Binding Name} | L295–295 |
| {Binding Value} | L298–298 |
| {Binding ValueBrush} | L299–299 |
| {Binding CurrentScreen.Correction.IsOtherCorrectionTab, Converter={StaticResource BooleanToVisibilityConverter}} | L311–311 |
| {Binding CurrentScreen.Correction.SourceRows} | L326–326 |
| {Binding Type} | L335–335 |
| {Binding Name} | L336–336 |
| {Binding Value} | L337–337 |
| {Binding State} | L338–338 |
| {Binding StateBrush} | L341–341 |
| {Binding Source} | L346–346 |
| {Binding CurrentScreen.Correction.CandidateRows} | L360–360 |
| {Binding Item} | L369–369 |
| {Binding Target} | L370–370 |
| {Binding Value} | L371–371 |
| {Binding ValueBrush} | L374–374 |
| {Binding Unit} | L379–379 |
| {Binding State} | L380–380 |
| {Binding StateBrush} | L383–383 |
| {Binding CurrentScreen.Correction.DetailItems} | L412–412 |
| {Binding Name} | L420–420 |
| {Binding Value} | L423–423 |
| {Binding CurrentScreen.Correction.ApplyRows} | L441–441 |
| {Binding Item} | L450–450 |
| {Binding Target} | L451–451 |
| {Binding Value} | L452–452 |
| {Binding ValueBrush} | L455–455 |
| {Binding Unit} | L460–460 |
| {Binding State} | L461–461 |
| {Binding CurrentScreen.Correction.IsOutputHistoryTab, Converter={StaticResource BooleanToVisibilityConverter}} | L471–471 |
| {Binding CurrentScreen.Correction.OutputViewerSummary} | L499–499 |
| {Binding CurrentScreen.Correction.OutputViewerHeadCards} | L508–508 |
| {Binding Background} | L519–519 |
| {Binding BorderBrush} | L520–520 |
| {Binding Name} | L523–523 |
| {Binding Foreground} | L524–524 |
| {Binding CurrentScreen.Correction.OutputViewerGlassPreviewImage} | L540–540 |
| {Binding CurrentScreen.Correction.OutputViewerCellPreviewLabels} | L544–544 |
| {Binding CellNo} | L549–549 |
| {Binding Width} | L550–550 |
| {Binding Height} | L551–551 |
| {Binding DataContext.CurrentScreen.Correction.SelectOutputViewerCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L552–552 |
| {Binding CellNo} | L553–553 |
| {Binding IsSelected} | L582–582 |
| {Binding CurrentScreen.Correction.OutputViewerSelectedShotName} | L637–637 |
| {Binding CurrentScreen.Correction.OutputViewerCellShotMapSurfaceWidth} | L665–665 |
| {Binding CurrentScreen.Correction.OutputViewerCellShotMapSurfaceHeight} | L666–666 |
| {Binding CurrentScreen.Correction.OutputViewerCellShotMapImage} | L670–670 |
| {Binding CurrentScreen.Correction.OutputViewerHasNoCellSelection, Converter={StaticResource BooleanToVisibilityConverter}} | L676–676 |
| {Binding CurrentScreen.Correction.OutputOffsets.Kinds} | L708–708 |
| {Binding Name} | L715–715 |
| {Binding Key} | L716–716 |
| {Binding DataContext.CurrentScreen.Correction.OutputOffsets.SelectKindCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L718–718 |
| {Binding CurrentScreen.Correction.OutputOffsets.Description} | L723–723 |
| {Binding CurrentScreen.Correction.OutputViewerSelectedCellName} | L741–741 |
| {Binding CurrentScreen.Correction.OutputViewerSelectedShotName} | L747–747 |
| {Binding CurrentScreen.Correction.OutputViewerSelectedShotDetail} | L755–755 |
| {Binding CurrentScreen.Correction.OutputViewerHasNoCellSelection, Converter={StaticResource BooleanToVisibilityConverter}} | L763–763 |
| {Binding CurrentScreen.Correction.OutputViewerIsCellDetailVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L776–776 |
| {Binding CurrentScreen.Correction.OutputOffsets.ShotItems} | L777–777 |
| {Binding CurrentScreen.Correction.OutputOffsets.SelectedShotItem, Mode=OneWay} | L778–778 |
| {Binding CoordinateDetail} | L800–800 |
| {Binding IsSelected} | L802–802 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L821–821 |
| {Binding ShotName} | L834–834 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L835–835 |
| {Binding Head} | L846–846 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L847–847 |
| {Binding DesignOffsetX} | L858–858 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L859–859 |
| {Binding DesignOffsetY} | L870–870 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L871–871 |
| {Binding ScannerOffsetGx} | L882–882 |
| {Binding ScannerOffsetGy} | L894–894 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CCorrectionView.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
