# Drilling.UI/Views/CCorrectionView.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4 |
| 원본 SHA256 | d83d8ae20a08304d97cafeba8399cc5d7ddc23e40c5173ef770547085808daed |
| 파일 분류 | code |
| 원본 크기/행 | 58,949 bytes / 902 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CCorrectionView.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/59eec96a730843d69ae5.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Views/CCorrectionView.xaml.cs |
| 이름 있는 요소 | DefaultWorkspace, CorrectionReviewTabControl, OutputViewerPreviewViewport, OutputViewerPreviewHoverTip, OutputViewerPreviewHoverTipTranslateTransform, OutputViewerPreviewHoverTipText, OutputViewerCellShotMapSurface, OutputOffsetKinds, OutputOffsetGrid |
| 이벤트 개수 | 5 |
| Binding 표현 개수 | 105 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| DefaultWorkspace | L217–217 |
| CorrectionReviewTabControl | L228–228 |
| OutputViewerPreviewViewport | L530–530 |
| OutputViewerPreviewHoverTip | L586–586 |
| OutputViewerPreviewHoverTipTranslateTransform | L598–598 |
| OutputViewerPreviewHoverTipText | L600–600 |
| OutputViewerCellShotMapSurface | L655–655 |
| OutputOffsetKinds | L698–698 |
| OutputOffsetGrid | L766–766 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| SelectionChanged | CorrectionReviewTabControl_SelectionChanged | L229–229 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseMove | OutputViewerCellPreviewLabel_MouseMove | L549–549 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeave | OutputViewerCellPreviewLabel_MouseLeave | L550–550 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseLeftButtonDown | SelectOutputViewerShotFromMap | L660–660 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | OutputOffsetGrid_SelectionChanged | L784–784 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

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
| {Binding CurrentScreen.Correction.Simple} | L260–260 |
| {Binding CurrentScreen.Correction.SummaryItems} | L268–268 |
| {Binding CurrentScreen.Correction.IsOtherCorrectionTab, Converter={StaticResource BooleanToVisibilityConverter}} | L269–269 |
| {Binding Name} | L286–286 |
| {Binding Value} | L289–289 |
| {Binding ValueBrush} | L290–290 |
| {Binding CurrentScreen.Correction.IsOtherCorrectionTab, Converter={StaticResource BooleanToVisibilityConverter}} | L302–302 |
| {Binding CurrentScreen.Correction.SourceRows} | L317–317 |
| {Binding Type} | L326–326 |
| {Binding Name} | L327–327 |
| {Binding Value} | L328–328 |
| {Binding State} | L329–329 |
| {Binding StateBrush} | L332–332 |
| {Binding Source} | L337–337 |
| {Binding CurrentScreen.Correction.CandidateRows} | L351–351 |
| {Binding Item} | L360–360 |
| {Binding Target} | L361–361 |
| {Binding Value} | L362–362 |
| {Binding ValueBrush} | L365–365 |
| {Binding Unit} | L370–370 |
| {Binding State} | L371–371 |
| {Binding StateBrush} | L374–374 |
| {Binding CurrentScreen.Correction.DetailItems} | L403–403 |
| {Binding Name} | L411–411 |
| {Binding Value} | L414–414 |
| {Binding CurrentScreen.Correction.ApplyRows} | L432–432 |
| {Binding Item} | L441–441 |
| {Binding Target} | L442–442 |
| {Binding Value} | L443–443 |
| {Binding ValueBrush} | L446–446 |
| {Binding Unit} | L451–451 |
| {Binding State} | L452–452 |
| {Binding CurrentScreen.Correction.IsOutputHistoryTab, Converter={StaticResource BooleanToVisibilityConverter}} | L462–462 |
| {Binding CurrentScreen.Correction.OutputViewerSummary} | L490–490 |
| {Binding CurrentScreen.Correction.OutputViewerHeadCards} | L499–499 |
| {Binding Background} | L510–510 |
| {Binding BorderBrush} | L511–511 |
| {Binding Name} | L514–514 |
| {Binding Foreground} | L515–515 |
| {Binding CurrentScreen.Correction.OutputViewerGlassPreviewImage} | L531–531 |
| {Binding CurrentScreen.Correction.OutputViewerCellPreviewLabels} | L535–535 |
| {Binding CellNo} | L540–540 |
| {Binding Width} | L541–541 |
| {Binding Height} | L542–542 |
| {Binding DataContext.CurrentScreen.Correction.SelectOutputViewerCellCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L543–543 |
| {Binding CellNo} | L544–544 |
| {Binding IsSelected} | L573–573 |
| {Binding CurrentScreen.Correction.OutputViewerSelectedShotName} | L628–628 |
| {Binding CurrentScreen.Correction.OutputViewerCellShotMapSurfaceWidth} | L656–656 |
| {Binding CurrentScreen.Correction.OutputViewerCellShotMapSurfaceHeight} | L657–657 |
| {Binding CurrentScreen.Correction.OutputViewerCellShotMapImage} | L661–661 |
| {Binding CurrentScreen.Correction.OutputViewerHasNoCellSelection, Converter={StaticResource BooleanToVisibilityConverter}} | L667–667 |
| {Binding CurrentScreen.Correction.OutputOffsets.Kinds} | L699–699 |
| {Binding Name} | L706–706 |
| {Binding Key} | L707–707 |
| {Binding DataContext.CurrentScreen.Correction.OutputOffsets.SelectKindCommand, RelativeSource={RelativeSource AncestorType=UserControl}} | L709–709 |
| {Binding CurrentScreen.Correction.OutputOffsets.Description} | L714–714 |
| {Binding CurrentScreen.Correction.OutputViewerSelectedCellName} | L732–732 |
| {Binding CurrentScreen.Correction.OutputViewerSelectedShotName} | L738–738 |
| {Binding CurrentScreen.Correction.OutputViewerSelectedShotDetail} | L746–746 |
| {Binding CurrentScreen.Correction.OutputViewerHasNoCellSelection, Converter={StaticResource BooleanToVisibilityConverter}} | L754–754 |
| {Binding CurrentScreen.Correction.OutputViewerIsCellDetailVisible, Converter={StaticResource BooleanToVisibilityConverter}} | L767–767 |
| {Binding CurrentScreen.Correction.OutputOffsets.ShotItems} | L768–768 |
| {Binding CurrentScreen.Correction.OutputOffsets.SelectedShotItem, Mode=OneWay} | L769–769 |
| {Binding CoordinateDetail} | L791–791 |
| {Binding IsSelected} | L793–793 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L812–812 |
| {Binding ShotName} | L825–825 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L826–826 |
| {Binding Head} | L837–837 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L838–838 |
| {Binding DesignOffsetX} | L849–849 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L850–850 |
| {Binding DesignOffsetY} | L861–861 |
| {Binding RelativeSource={RelativeSource AncestorType=DataGridRow}, Path=Foreground} | L862–862 |
| {Binding ScannerOffsetGx} | L873–873 |
| {Binding ScannerOffsetGy} | L885–885 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CCorrectionView.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
