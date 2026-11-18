# Drilling.UI/Menu/CBindingBase.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 96e22cd027c84bf302b23f2949b98985d7f301bb |
| 원본 SHA256 | 01795a251314993e883d1ac9e1d745defa2846dccf73dcf173b7ef0c4c1e3f43 |
| 파일 분류 | code |
| 원본 크기/행 | 145,477 bytes / 3,052 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/466a55fc69101a731615.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CBindingBase | ClassDeclaration | 4–3052 | CBindingBase |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| ActiveInspectionShotTextChanged | EventFieldDeclaration | L6–6 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ActiveInspectionShotTextChanged |
| IsActiveSelectionChanged | EventFieldDeclaration | L7–7 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsActiveSelectionChanged |
| BeamInspectionAssignmentSummaryChanged | EventFieldDeclaration | L8–8 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BeamInspectionAssignmentSummaryChanged |
| BeamInspectionShotAssignmentsChanged | EventFieldDeclaration | L9–9 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BeamInspectionShotAssignmentsChanged |
| CanBrowseRunShotsChanged | EventFieldDeclaration | L10–10 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanBrowseRunShotsChanged |
| CanClearLoadedRunReviewResultChanged | EventFieldDeclaration | L11–11 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanClearLoadedRunReviewResultChanged |
| CanCommitInspectionShotChanged | EventFieldDeclaration | L12–12 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanCommitInspectionShotChanged |
| CanDeleteInspectionShotChanged | EventFieldDeclaration | L13–13 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanDeleteInspectionShotChanged |
| CanEditActiveInspectionBeamsChanged | EventFieldDeclaration | L14–14 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanEditActiveInspectionBeamsChanged |
| CanLoadRunReviewResultChanged | EventFieldDeclaration | L15–15 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanLoadRunReviewResultChanged |
| CanStopOneShotChanged | EventFieldDeclaration | L16–16 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanStopOneShotChanged |
| InspectionListCommitTextChanged | EventFieldDeclaration | L17–17 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionListCommitTextChanged |
| IsReviewHeadCardsVisibleChanged | EventFieldDeclaration | L18–18 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsReviewHeadCardsVisibleChanged |
| IsRunStageStatusVisibleChanged | EventFieldDeclaration | L19–19 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunStageStatusVisibleChanged |
| IsShotInspectionOngoingChanged | EventFieldDeclaration | L20–20 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsShotInspectionOngoingChanged |
| IsSingleBeamSelectionModeChanged | EventFieldDeclaration | L21–21 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSingleBeamSelectionModeChanged |
| ReviewLevelLegendItemsChanged | EventFieldDeclaration | L22–22 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewLevelLegendItemsChanged |
| SelectedBeamInspectionAssignmentChanged | EventFieldDeclaration | L23–23 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedBeamInspectionAssignmentChanged |
| AbleBrushChanged | EventFieldDeclaration | L24–24 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AbleBrushChanged |
| AccentBrushChanged | EventFieldDeclaration | L25–25 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AccentBrushChanged |
| AccessChanged | EventFieldDeclaration | L26–26 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AccessChanged |
| ActionsChanged | EventFieldDeclaration | L27–27 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ActionsChanged |
| ActiveChanged | EventFieldDeclaration | L28–28 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ActiveChanged |
| AddressChanged | EventFieldDeclaration | L29–29 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AddressChanged |
| AfterBrushChanged | EventFieldDeclaration | L30–30 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AfterBrushChanged |
| AkMarginXItemChanged | EventFieldDeclaration | L31–31 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AkMarginXItemChanged |
| AkMarginYItemChanged | EventFieldDeclaration | L32–32 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AkMarginYItemChanged |
| AlarmChanged | EventFieldDeclaration | L33–33 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AlarmChanged |
| AlarmBrushChanged | EventFieldDeclaration | L34–34 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AlarmBrushChanged |
| AlarmDetailChanged | EventFieldDeclaration | L35–35 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AlarmDetailChanged |
| AlarmResetCommandChanged | EventFieldDeclaration | L36–36 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AlarmResetCommandChanged |
| AllInterfaceRowsChanged | EventFieldDeclaration | L37–37 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AllInterfaceRowsChanged |
| AllManagedItemsChanged | EventFieldDeclaration | L38–38 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AllManagedItemsChanged |
| AllParameterRowsChanged | EventFieldDeclaration | L39–39 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AllParameterRowsChanged |
| ApplyOneHoleReviewOffsetCommandChanged | EventFieldDeclaration | L40–40 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ApplyOneHoleReviewOffsetCommandChanged |
| ApplyPreviewRowsChanged | EventFieldDeclaration | L41–41 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ApplyPreviewRowsChanged |
| ApplyRowsChanged | EventFieldDeclaration | L42–42 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ApplyRowsChanged |
| Arg1Changed | EventFieldDeclaration | L43–43 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg1Changed |
| Arg2Changed | EventFieldDeclaration | L44–44 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg2Changed |
| Arg3Changed | EventFieldDeclaration | L45–45 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg3Changed |
| Arg4Changed | EventFieldDeclaration | L46–46 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg4Changed |
| Arg5Changed | EventFieldDeclaration | L47–47 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg5Changed |
| AttenuatorSettingItemsChanged | EventFieldDeclaration | L48–48 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AttenuatorSettingItemsChanged |
| AttenuatorStateBrushChanged | EventFieldDeclaration | L49–49 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AttenuatorStateBrushChanged |
| AttenuatorStatusItemsChanged | EventFieldDeclaration | L50–50 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AttenuatorStatusItemsChanged |
| AttenuatorTextChanged | EventFieldDeclaration | L51–51 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AttenuatorTextChanged |
| AutoConnectionChanged | EventFieldDeclaration | L52–52 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AutoConnectionChanged |
| AutoConnectionOptionsChanged | EventFieldDeclaration | L53–53 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AutoConnectionOptionsChanged |
| AutomationControllerStatusItemsChanged | EventFieldDeclaration | L54–54 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AutomationControllerStatusItemsChanged |
| AxisChanged | EventFieldDeclaration | L55–55 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AxisChanged |
| AxisIdChanged | EventFieldDeclaration | L56–56 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AxisIdChanged |
| AxisRowsChanged | EventFieldDeclaration | L57–57 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AxisRowsChanged |
| BackgroundBrushChanged | EventFieldDeclaration | L58–58 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackgroundBrushChanged |
| BackToCellPreviewCommandChanged | EventFieldDeclaration | L59–59 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToCellPreviewCommandChanged |
| BackToCoordinateGlassPreviewCommandChanged | EventFieldDeclaration | L60–60 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToCoordinateGlassPreviewCommandChanged |
| BackToOneHoleCellMapCommandChanged | EventFieldDeclaration | L61–61 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToOneHoleCellMapCommandChanged |
| BackToOneHoleHoleMapCommandChanged | EventFieldDeclaration | L62–62 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToOneHoleHoleMapCommandChanged |
| BackToRunGlassPreviewCommandChanged | EventFieldDeclaration | L63–63 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToRunGlassPreviewCommandChanged |
| BackToRunShotMapCommandChanged | EventFieldDeclaration | L64–64 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToRunShotMapCommandChanged |
| BackToSampleGlassPreviewCommandChanged | EventFieldDeclaration | L65–65 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToSampleGlassPreviewCommandChanged |
| BaseCenterXChanged | EventFieldDeclaration | L66–66 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BaseCenterXChanged |
| BaseCenterYChanged | EventFieldDeclaration | L67–67 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BaseCenterYChanged |
| BeamOptionsChanged | EventFieldDeclaration | L68–68 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BeamOptionsChanged |
| BeamSelectionSummaryChanged | EventFieldDeclaration | L69–69 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BeamSelectionSummaryChanged |
| BetDivergenceTextChanged | EventFieldDeclaration | L70–70 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BetDivergenceTextChanged |
| BetMagnificationTextChanged | EventFieldDeclaration | L71–71 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BetMagnificationTextChanged |
| BetStateBrushChanged | EventFieldDeclaration | L72–72 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BetStateBrushChanged |
| BetTableRowsChanged | EventFieldDeclaration | L73–73 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BetTableRowsChanged |
| BlockedItemsChanged | EventFieldDeclaration | L74–74 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BlockedItemsChanged |
| BorderBrushChanged | EventFieldDeclaration | L75–75 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BorderBrushChanged |
| BuzzerOffCommandChanged | EventFieldDeclaration | L76–76 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BuzzerOffCommandChanged |
| CalculatedOffsetRowsChanged | EventFieldDeclaration | L77–77 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CalculatedOffsetRowsChanged |
| CanApplyOneHoleReviewOffsetChanged | EventFieldDeclaration | L78–78 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanApplyOneHoleReviewOffsetChanged |
| CancelCommandChanged | EventFieldDeclaration | L79–79 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CancelCommandChanged |
| CandidateRowsChanged | EventFieldDeclaration | L80–80 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CandidateRowsChanged |
| CanOperateSelectedInterfaceChanged | EventFieldDeclaration | L81–81 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanOperateSelectedInterfaceChanged |
| CanReadChanged | EventFieldDeclaration | L82–82 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanReadChanged |
| CanLoadBeamInspectionResultChanged | EventFieldDeclaration | L83–83 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanLoadBeamInspectionResultChanged |
| CanClearLoadedBeamInspectionResultChanged | EventFieldDeclaration | L84–84 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanClearLoadedBeamInspectionResultChanged |
| CanSelectBeamChanged | EventFieldDeclaration | L85–85 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanSelectBeamChanged |
| CanSelectInspectionMethodChanged | EventFieldDeclaration | L86–86 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanSelectInspectionMethodChanged |
| CanWriteChanged | EventFieldDeclaration | L87–87 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanWriteChanged |
| CAppStartupChanged | EventFieldDeclaration | L88–88 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CAppStartupChanged |
| CategoryChanged | EventFieldDeclaration | L89–89 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CategoryChanged |
| CButtonCommandBehaviorChanged | EventFieldDeclaration | L90–90 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CButtonCommandBehaviorChanged |
| CellMapDesignHeightChanged | EventFieldDeclaration | L91–91 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellMapDesignHeightChanged |
| CellMapDesignWidthChanged | EventFieldDeclaration | L92–92 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellMapDesignWidthChanged |
| CellNoChanged | EventFieldDeclaration | L93–93 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellNoChanged |
| CellModelTypeCountItemChanged | EventFieldDeclaration | L94–94 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellModelTypeCountItemChanged |
| CellOverviewRowsChanged | EventFieldDeclaration | L95–95 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellOverviewRowsChanged |
| CellPreviewImageChanged | EventFieldDeclaration | L96–96 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellPreviewImageChanged |
| CellPreviewLabelsChanged | EventFieldDeclaration | L97–97 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellPreviewLabelsChanged |
| CellShotMapImageChanged | EventFieldDeclaration | L98–98 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellShotMapImageChanged |
| CenterMoveCommandChanged | EventFieldDeclaration | L99–99 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CenterMoveCommandChanged |
| CenterOnCommandChanged | EventFieldDeclaration | L100–100 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CenterOnCommandChanged |
| CenterXTextChanged | EventFieldDeclaration | L101–101 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CenterXTextChanged |
| CenterYTextChanged | EventFieldDeclaration | L102–102 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CenterYTextChanged |
| ChangeHistoryChanged | EventFieldDeclaration | L103–103 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ChangeHistoryChanged |
| ChangeLimitChanged | EventFieldDeclaration | L104–104 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ChangeLimitChanged |
| ChessItemChanged | EventFieldDeclaration | L105–105 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ChessItemChanged |
| CInterfaceStatusRowChanged | EventFieldDeclaration | L106–106 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CInterfaceStatusRowChanged |
| ColumnChanged | EventFieldDeclaration | L107–107 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ColumnChanged |
| CommandBlueChanged | EventFieldDeclaration | L108–108 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandBlueChanged |
| CommandBlueBorderChanged | EventFieldDeclaration | L109–109 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandBlueBorderChanged |
| CommandDarkChanged | EventFieldDeclaration | L110–110 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandDarkChanged |
| CommandDarkBorderChanged | EventFieldDeclaration | L111–111 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandDarkBorderChanged |
| CommandGreenChanged | EventFieldDeclaration | L112–112 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandGreenChanged |
| CommandGreenBorderChanged | EventFieldDeclaration | L113–113 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandGreenBorderChanged |
| CommandHistoryRowsChanged | EventFieldDeclaration | L114–114 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandHistoryRowsChanged |
| CommandLabelChanged | EventFieldDeclaration | L115–115 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandLabelChanged |
| CommandOpacityChanged | EventFieldDeclaration | L116–116 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandOpacityChanged |
| CommandPropertyChanged | EventFieldDeclaration | L117–117 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandPropertyChanged |
| CommandRedChanged | EventFieldDeclaration | L118–118 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandRedChanged |
| CommandRedBorderChanged | EventFieldDeclaration | L119–119 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandRedBorderChanged |
| CommandStateItemsChanged | EventFieldDeclaration | L120–120 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandStateItemsChanged |
| CommandStateRowsChanged | EventFieldDeclaration | L121–121 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandStateRowsChanged |
| ConnectInterfaceCommandChanged | EventFieldDeclaration | L122–122 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ConnectInterfaceCommandChanged |
| ContainerHeightPropertyChanged | EventFieldDeclaration | L123–123 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ContainerHeightPropertyChanged |
| ContainerWidthPropertyChanged | EventFieldDeclaration | L124–124 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ContainerWidthPropertyChanged |
| ControllerTaskTextChanged | EventFieldDeclaration | L125–125 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ControllerTaskTextChanged |
| CoordinateBasisDescriptionChanged | EventFieldDeclaration | L126–126 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateBasisDescriptionChanged |
| CoordinateBasisOptionsChanged | EventFieldDeclaration | L127–127 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateBasisOptionsChanged |
| CoordinateCellPreviewLabelsChanged | EventFieldDeclaration | L128–128 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateCellPreviewLabelsChanged |
| CoordinateGlassPreviewImageChanged | EventFieldDeclaration | L129–129 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateGlassPreviewImageChanged |
| CoordinateGlassPreviewSummaryChanged | EventFieldDeclaration | L130–130 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateGlassPreviewSummaryChanged |
| CoordinateIsCellDetailVisibleChanged | EventFieldDeclaration | L131–131 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateIsCellDetailVisibleChanged |
| CoordinateIsGlassPreviewVisibleChanged | EventFieldDeclaration | L132–132 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateIsGlassPreviewVisibleChanged |
| CoordinateSelectedBasisNameChanged | EventFieldDeclaration | L133–133 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateSelectedBasisNameChanged |
| CoordinateSelectedCellNameChanged | EventFieldDeclaration | L134–134 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateSelectedCellNameChanged |
| CoordinateSelectedRecipeNameChanged | EventFieldDeclaration | L135–135 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateSelectedRecipeNameChanged |
| CoordinateSelectedShotNameChanged | EventFieldDeclaration | L136–136 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateSelectedShotNameChanged |
| CoordinateShotMatrixRowsChanged | EventFieldDeclaration | L137–137 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateShotMatrixRowsChanged |
| CoordinateValueRowsChanged | EventFieldDeclaration | L138–138 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateValueRowsChanged |
| CorrectedCenterXChanged | EventFieldDeclaration | L139–139 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CorrectedCenterXChanged |
| CorrectedCenterYChanged | EventFieldDeclaration | L140–140 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CorrectedCenterYChanged |
| CorrectionChanged | EventFieldDeclaration | L141–141 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CorrectionChanged |
| CPreviewCoordinateBehaviorChanged | EventFieldDeclaration | L142–142 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CPreviewCoordinateBehaviorChanged |
| CreateCommandChanged | EventFieldDeclaration | L143–143 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CreateCommandChanged |
| CThemeManagerChanged | EventFieldDeclaration | L144–144 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CThemeManagerChanged |
| CurrentAlarmRowsChanged | EventFieldDeclaration | L145–145 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentAlarmRowsChanged |
| CurrentAlarmsChanged | EventFieldDeclaration | L146–146 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentAlarmsChanged |
| CurrentCellIndicatorTextChanged | EventFieldDeclaration | L147–147 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentCellIndicatorTextChanged |
| CurrentDateTextChanged | EventFieldDeclaration | L148–148 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentDateTextChanged |
| CurrentOffsetRowsChanged | EventFieldDeclaration | L149–149 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentOffsetRowsChanged |
| CurrentPositionChanged | EventFieldDeclaration | L150–150 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentPositionChanged |
| CurrentReviewOffsetRecipeNameChanged | EventFieldDeclaration | L151–151 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentReviewOffsetRecipeNameChanged |
| CurrentScreenChanged | EventFieldDeclaration | L152–152 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentScreenChanged |
| CurrentSettingStateChanged | EventFieldDeclaration | L153–153 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentSettingStateChanged |
| CurrentStepDetailsChanged | EventFieldDeclaration | L154–154 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentStepDetailsChanged |
| CurrentThemeChanged | EventFieldDeclaration | L155–155 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentThemeChanged |
| CurrentTimeTextChanged | EventFieldDeclaration | L156–156 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentTimeTextChanged |
| CurrentUserTextChanged | EventFieldDeclaration | L157–157 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentUserTextChanged |
| CurrentValueBrushChanged | EventFieldDeclaration | L158–158 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentValueBrushChanged |
| CycleItemsChanged | EventFieldDeclaration | L159–159 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CycleItemsChanged |
| DataTypeChanged | EventFieldDeclaration | L160–160 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DataTypeChanged |
| DefaultChanged | EventFieldDeclaration | L161–161 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DefaultChanged |
| DefaultValueChanged | EventFieldDeclaration | L162–162 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DefaultValueChanged |
| DeleteCommandChanged | EventFieldDeclaration | L163–163 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DeleteCommandChanged |
| DescriptionChanged | EventFieldDeclaration | L164–164 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DescriptionChanged |
| DesignHeightPropertyChanged | EventFieldDeclaration | L165–165 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DesignHeightPropertyChanged |
| DesignWidthPropertyChanged | EventFieldDeclaration | L166–166 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DesignWidthPropertyChanged |
| DetailChanged | EventFieldDeclaration | L167–167 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailChanged |
| DetailBrushChanged | EventFieldDeclaration | L168–168 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailBrushChanged |
| DetailItemsChanged | EventFieldDeclaration | L169–169 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailItemsChanged |
| DetailRowsChanged | EventFieldDeclaration | L170–170 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailRowsChanged |
| DetailTextChanged | EventFieldDeclaration | L171–171 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailTextChanged |
| DeviceChanged | EventFieldDeclaration | L172–172 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DeviceChanged |
| DeviceNoChanged | EventFieldDeclaration | L173–173 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DeviceNoChanged |
| DeviceTabsChanged | EventFieldDeclaration | L174–174 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DeviceTabsChanged |
| DioAddressChanged | EventFieldDeclaration | L175–175 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioAddressChanged |
| DioAxisNameChanged | EventFieldDeclaration | L176–176 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioAxisNameChanged |
| DioCurrentValueChanged | EventFieldDeclaration | L177–177 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioCurrentValueChanged |
| DioLastResultChanged | EventFieldDeclaration | L178–178 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioLastResultChanged |
| DioNoChanged | EventFieldDeclaration | L179–179 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioNoChanged |
| DioOffCommandChanged | EventFieldDeclaration | L180–180 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioOffCommandChanged |
| DioOnCommandChanged | EventFieldDeclaration | L181–181 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioOnCommandChanged |
| DioReadCommandChanged | EventFieldDeclaration | L182–182 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioReadCommandChanged |
| DirectionChanged | EventFieldDeclaration | L183–183 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DirectionChanged |
| DisconnectInterfaceCommandChanged | EventFieldDeclaration | L184–184 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DisconnectInterfaceCommandChanged |
| DisplayAxisChanged | EventFieldDeclaration | L185–185 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DisplayAxisChanged |
| DisplayLabelChanged | EventFieldDeclaration | L186–186 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DisplayLabelChanged |
| DisplayTextChanged | EventFieldDeclaration | L187–187 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DisplayTextChanged |
| DistortionKeyItemsChanged | EventFieldDeclaration | L188–188 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DistortionKeyItemsChanged |
| DivChanged | EventFieldDeclaration | L189–189 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DivChanged |
| ElapsedTimeTextChanged | EventFieldDeclaration | L190–190 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ElapsedTimeTextChanged |
| ElementHeightPropertyChanged | EventFieldDeclaration | L191–191 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ElementHeightPropertyChanged |
| ElementWidthPropertyChanged | EventFieldDeclaration | L192–192 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ElementWidthPropertyChanged |
| EmptyChanged | EventFieldDeclaration | L193–193 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EmptyChanged |
| EN_MENUChanged | EventFieldDeclaration | L194–194 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EN_MENUChanged |
| EN_UI_THEMEChanged | EventFieldDeclaration | L195–195 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EN_UI_THEMEChanged |
| EndpointChanged | EventFieldDeclaration | L196–196 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EndpointChanged |
| ErrorBrushChanged | EventFieldDeclaration | L197–197 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ErrorBrushChanged |
| ErrorXChanged | EventFieldDeclaration | L198–198 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ErrorXChanged |
| ErrorYChanged | EventFieldDeclaration | L199–199 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ErrorYChanged |
| EstimatedTimeTextChanged | EventFieldDeclaration | L200–200 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EstimatedTimeTextChanged |
| EvenHeadPreviewsChanged | EventFieldDeclaration | L201–201 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EvenHeadPreviewsChanged |
| ExecuteCommandChanged | EventFieldDeclaration | L202–202 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ExecuteCommandChanged |
| ExecuteOperationCommandChanged | EventFieldDeclaration | L203–203 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ExecuteOperationCommandChanged |
| ExtraChanged | EventFieldDeclaration | L204–204 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ExtraChanged |
| FileTextChanged | EventFieldDeclaration | L205–205 | System.EventHandler? Drilling.UI.Menu.CBindingBase.FileTextChanged |
| FirstXChanged | EventFieldDeclaration | L206–206 | System.EventHandler? Drilling.UI.Menu.CBindingBase.FirstXChanged |
| FirstYChanged | EventFieldDeclaration | L207–207 | System.EventHandler? Drilling.UI.Menu.CBindingBase.FirstYChanged |
| FooterStatusItemsChanged | EventFieldDeclaration | L208–208 | System.EventHandler? Drilling.UI.Menu.CBindingBase.FooterStatusItemsChanged |
| GlassFrameChanged | EventFieldDeclaration | L209–209 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GlassFrameChanged |
| GlassPreviewSummaryChanged | EventFieldDeclaration | L210–210 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GlassPreviewSummaryChanged |
| GlassSizeXItemChanged | EventFieldDeclaration | L211–211 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GlassSizeXItemChanged |
| GlassSizeYItemChanged | EventFieldDeclaration | L212–212 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GlassSizeYItemChanged |
| GridColLinesChanged | EventFieldDeclaration | L213–213 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GridColLinesChanged |
| GridRowLinesChanged | EventFieldDeclaration | L214–214 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GridRowLinesChanged |
| GroupChanged | EventFieldDeclaration | L215–215 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GroupChanged |
| GroupItemsChanged | EventFieldDeclaration | L216–216 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GroupItemsChanged |
| GroupTabsChanged | EventFieldDeclaration | L217–217 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GroupTabsChanged |
| HasCommandChanged | EventFieldDeclaration | L218–218 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HasCommandChanged |
| HasResultChanged | EventFieldDeclaration | L219–219 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HasResultChanged |
| HeadAssignmentAreasChanged | EventFieldDeclaration | L220–220 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadAssignmentAreasChanged |
| HeadCardsChanged | EventFieldDeclaration | L221–221 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadCardsChanged |
| HeadGroupsChanged | EventFieldDeclaration | L222–222 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadGroupsChanged |
| HeadDeviceSelectorTitleChanged | EventFieldDeclaration | L223–223 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadDeviceSelectorTitleChanged |
| HeaderStatusItemsChanged | EventFieldDeclaration | L224–224 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeaderStatusItemsChanged |
| HeadParametersChanged | EventFieldDeclaration | L225–225 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadParametersChanged |
| HeadParameterVisibilityChanged | EventFieldDeclaration | L226–226 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadParameterVisibilityChanged |
| HeadPreviewImageChanged | EventFieldDeclaration | L227–227 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadPreviewImageChanged |
| HeadPreviewLabelsChanged | EventFieldDeclaration | L228–228 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadPreviewLabelsChanged |
| HeadPreviewsChanged | EventFieldDeclaration | L229–229 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadPreviewsChanged |
| HeadPreviewSummaryTextChanged | EventFieldDeclaration | L230–230 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadPreviewSummaryTextChanged |
| HeadSelectRowsChanged | EventFieldDeclaration | L231–231 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadSelectRowsChanged |
| HeightChanged | EventFieldDeclaration | L232–232 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeightChanged |
| HistoryChanged | EventFieldDeclaration | L233–233 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HistoryChanged |
| HistoryPanelTitleChanged | EventFieldDeclaration | L234–234 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HistoryPanelTitleChanged |
| HistoryRowsChanged | EventFieldDeclaration | L235–235 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HistoryRowsChanged |
| HomeBrushChanged | EventFieldDeclaration | L236–236 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HomeBrushChanged |
| IconGeometryChanged | EventFieldDeclaration | L237–237 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IconGeometryChanged |
| IdChanged | EventFieldDeclaration | L238–238 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IdChanged |
| InspectionModeTextChanged | EventFieldDeclaration | L239–239 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionModeTextChanged |
| InspectionMethodItemsChanged | EventFieldDeclaration | L240–240 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionMethodItemsChanged |
| InspectionRuleTextChanged | EventFieldDeclaration | L241–241 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionRuleTextChanged |
| InspectionRuleVisibilityChanged | EventFieldDeclaration | L242–242 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionRuleVisibilityChanged |
| InspectionStatusItemsChanged | EventFieldDeclaration | L243–243 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionStatusItemsChanged |
| InspectionSummaryChanged | EventFieldDeclaration | L244–244 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionSummaryChanged |
| InterfaceRowsChanged | EventFieldDeclaration | L245–245 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InterfaceRowsChanged |
| InterfaceTypeChanged | EventFieldDeclaration | L246–246 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InterfaceTypeChanged |
| InterlockItemsChanged | EventFieldDeclaration | L247–247 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InterlockItemsChanged |
| IsAlarmLayoutChanged | EventFieldDeclaration | L248–248 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAlarmLayoutChanged |
| IsAttenuatorChanged | EventFieldDeclaration | L249–249 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAttenuatorChanged |
| IsBetChanged | EventFieldDeclaration | L250–250 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsBetChanged |
| IsBooleanChanged | EventFieldDeclaration | L251–251 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsBooleanChanged |
| IsCellCategoryChanged | EventFieldDeclaration | L252–252 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCellCategoryChanged |
| IsCellDetailVisibleChanged | EventFieldDeclaration | L253–253 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCellDetailVisibleChanged |
| IsCellPreviewVisibleChanged | EventFieldDeclaration | L254–254 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCellPreviewVisibleChanged |
| IsControlDeviceChanged | EventFieldDeclaration | L255–255 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsControlDeviceChanged |
| IsCoordinateViewerChanged | EventFieldDeclaration | L256–256 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCoordinateViewerChanged |
| IsLogViewerChanged | EventFieldDeclaration | L257–257 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLogViewerChanged |
| IsCorrectionLayoutChanged | EventFieldDeclaration | L258–258 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCorrectionLayoutChanged |
| IsAlignDistortionTabChanged | EventFieldDeclaration | L259–259 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAlignDistortionTabChanged |
| IsCorrectionCommandsVisibleChanged | EventFieldDeclaration | L260–260 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCorrectionCommandsVisibleChanged |
| IsOutputHistoryTabChanged | EventFieldDeclaration | L261–261 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOutputHistoryTabChanged |
| IsCurrentChanged | EventFieldDeclaration | L262–262 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCurrentChanged |
| IsDioControlBusyChanged | EventFieldDeclaration | L263–263 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioControlBusyChanged |
| IsDioControlEnabledChanged | EventFieldDeclaration | L264–264 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioControlEnabledChanged |
| IsDioOffChanged | EventFieldDeclaration | L265–265 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioOffChanged |
| IsDioOnChanged | EventFieldDeclaration | L266–266 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioOnChanged |
| IsDioTargetReadyChanged | EventFieldDeclaration | L267–267 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioTargetReadyChanged |
| IsEditableChanged | EventFieldDeclaration | L268–268 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsEditableChanged |
| IsEditedChanged | EventFieldDeclaration | L269–269 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsEditedChanged |
| IsEnabledChanged | EventFieldDeclaration | L270–270 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsEnabledChanged |
| IsGenericDeviceChanged | EventFieldDeclaration | L271–271 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsGenericDeviceChanged |
| IsGenericLayoutChanged | EventFieldDeclaration | L272–272 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsGenericLayoutChanged |
| IsHeadCategoryChanged | EventFieldDeclaration | L273–273 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsHeadCategoryChanged |
| IsInsideGlassChanged | EventFieldDeclaration | L274–274 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsInsideGlassChanged |
| IsInterfaceTabChanged | EventFieldDeclaration | L275–275 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsInterfaceTabChanged |
| IsLaserChanged | EventFieldDeclaration | L276–276 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLaserChanged |
| IsLaserCountModeChanged | EventFieldDeclaration | L277–277 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLaserCountModeChanged |
| IsLaserTimeModeChanged | EventFieldDeclaration | L278–278 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLaserTimeModeChanged |
| IsMainLayoutChanged | EventFieldDeclaration | L279–279 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMainLayoutChanged |
| IsManualLayoutChanged | EventFieldDeclaration | L280–280 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualLayoutChanged |
| IsManualShiftOffsetVisibleChanged | EventFieldDeclaration | L281–281 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualShiftOffsetVisibleChanged |
| IsMelsecChanged | EventFieldDeclaration | L282–282 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMelsecChanged |
| IsMelsecWriteLockVisibleChanged | EventFieldDeclaration | L283–283 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMelsecWriteLockVisibleChanged |
| IsMelsecWriteUnlockedChanged | EventFieldDeclaration | L284–284 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMelsecWriteUnlockedChanged |
| IsModifiedChanged | EventFieldDeclaration | L285–285 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsModifiedChanged |
| IsMonitorLayoutChanged | EventFieldDeclaration | L286–286 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMonitorLayoutChanged |
| IsMotorChanged | EventFieldDeclaration | L287–287 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMotorChanged |
| IsOneHoleBeamMapChanged | EventFieldDeclaration | L288–288 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleBeamMapChanged |
| IsOneHoleCellMapChanged | EventFieldDeclaration | L289–289 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleCellMapChanged |
| IsOneHoleDetailMapChanged | EventFieldDeclaration | L290–290 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleDetailMapChanged |
| IsOneHoleHoleMapChanged | EventFieldDeclaration | L291–291 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleHoleMapChanged |
| IsOneHoleTabChanged | EventFieldDeclaration | L292–292 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleTabChanged |
| IsOtherCorrectionTabChanged | EventFieldDeclaration | L293–293 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOtherCorrectionTabChanged |
| IsParameterTabChanged | EventFieldDeclaration | L294–294 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsParameterTabChanged |
| IsPicoMotorChanged | EventFieldDeclaration | L295–295 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsPicoMotorChanged |
| IsPmLayoutChanged | EventFieldDeclaration | L296–296 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsPmLayoutChanged |
| IsPowerMeterChanged | EventFieldDeclaration | L297–297 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsPowerMeterChanged |
| IsProductChanged | EventFieldDeclaration | L298–298 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsProductChanged |
| IsReadOnlyChanged | EventFieldDeclaration | L299–299 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsReadOnlyChanged |
| IsRecipeLayoutChanged | EventFieldDeclaration | L300–300 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRecipeLayoutChanged |
| IsReviewLayoutChanged | EventFieldDeclaration | L301–301 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsReviewLayoutChanged |
| IsAllShotReviewModeChanged | EventFieldDeclaration | L302–302 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAllShotReviewModeChanged |
| IsAllShotStyleReviewModeChanged | EventFieldDeclaration | L303–303 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAllShotStyleReviewModeChanged |
| IsRuleReviewModeChanged | EventFieldDeclaration | L304–304 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRuleReviewModeChanged |
| IsBeamInspectionModeChanged | EventFieldDeclaration | L305–305 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsBeamInspectionModeChanged |
| IsBeamSelectionVisibleChanged | EventFieldDeclaration | L306–306 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsBeamSelectionVisibleChanged |
| IsLastMeasurementVisibleChanged | EventFieldDeclaration | L307–307 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLastMeasurementVisibleChanged |
| IsRunBeamDetailVisibleChanged | EventFieldDeclaration | L308–308 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunBeamDetailVisibleChanged |
| IsRunCellDetailVisibleChanged | EventFieldDeclaration | L309–309 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunCellDetailVisibleChanged |
| IsRunGlassPreviewVisibleChanged | EventFieldDeclaration | L310–310 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunGlassPreviewVisibleChanged |
| IsRunReviewResultLoadingChanged | EventFieldDeclaration | L311–311 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunReviewResultLoadingChanged |
| IsRunShotMapVisibleChanged | EventFieldDeclaration | L312–312 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunShotMapVisibleChanged |
| IsZPositionMoveEnabledChanged | EventFieldDeclaration | L313–313 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsZPositionMoveEnabledChanged |
| IsRunTabChanged | EventFieldDeclaration | L314–314 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunTabChanged |
| IsEdgeSampleRuleUiChanged | EventFieldDeclaration | L315–315 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsEdgeSampleRuleUiChanged |
| IsFineFiveLineChanged | EventFieldDeclaration | L316–316 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineFiveLineChanged |
| IsFineOneLineChanged | EventFieldDeclaration | L317–317 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineOneLineChanged |
| IsFineSampleRuleUiChanged | EventFieldDeclaration | L318–318 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineSampleRuleUiChanged |
| IsFineSevenLineChanged | EventFieldDeclaration | L319–319 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineSevenLineChanged |
| IsFineThreeLineChanged | EventFieldDeclaration | L320–320 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineThreeLineChanged |
| IsRoughCenterChanged | EventFieldDeclaration | L321–321 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRoughCenterChanged |
| IsRoughFirstChanged | EventFieldDeclaration | L322–322 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRoughFirstChanged |
| IsRoughLastChanged | EventFieldDeclaration | L323–323 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRoughLastChanged |
| IsRoughSampleRuleUiChanged | EventFieldDeclaration | L324–324 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRoughSampleRuleUiChanged |
| IsSampleCellDetailVisibleChanged | EventFieldDeclaration | L325–325 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleCellDetailVisibleChanged |
| IsSampleGlassPreviewVisibleChanged | EventFieldDeclaration | L326–326 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleGlassPreviewVisibleChanged |
| IsSampleScopeHeadChanged | EventFieldDeclaration | L327–327 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleScopeHeadChanged |
| IsSampleScopeHeadCellChanged | EventFieldDeclaration | L328–328 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleScopeHeadCellChanged |
| IsSampleScopeVisibleChanged | EventFieldDeclaration | L329–329 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleScopeVisibleChanged |
| IsSampleSelectTabChanged | EventFieldDeclaration | L330–330 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleSelectTabChanged |
| IsSimpleSampleRuleUiChanged | EventFieldDeclaration | L331–331 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSimpleSampleRuleUiChanged |
| IsScannerStatusSelectedChanged | EventFieldDeclaration | L332–332 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsScannerStatusSelectedChanged |
| IsScannerWorkspaceChanged | EventFieldDeclaration | L333–333 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsScannerWorkspaceChanged |
| IsManualMofTabChanged | EventFieldDeclaration | L334–334 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualMofTabChanged |
| IsManualControllerTabChanged | EventFieldDeclaration | L335–335 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualControllerTabChanged |
| ManualControllerHeadsChanged | EventFieldDeclaration | L336–336 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ManualControllerHeadsChanged |
| IsManualMotionTabChanged | EventFieldDeclaration | L337–337 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualMotionTabChanged |
| IsManualScanTabChanged | EventFieldDeclaration | L338–338 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualScanTabChanged |
| IsManualPowerMeasureTabChanged | EventFieldDeclaration | L339–339 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualPowerMeasureTabChanged |
| IsManualStageReviewTabChanged | EventFieldDeclaration | L340–340 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualStageReviewTabChanged |
| IsSelectedChanged | EventFieldDeclaration | L341–341 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSelectedChanged |
| IsSettingLayoutChanged | EventFieldDeclaration | L342–342 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSettingLayoutChanged |
| IsSignChanged | EventFieldDeclaration | L343–343 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSignChanged |
| IsSimulationChanged | EventFieldDeclaration | L344–344 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSimulationChanged |
| IsStageVisionWorkspaceChanged | EventFieldDeclaration | L345–345 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsStageVisionWorkspaceChanged |
| IsVisionProtocolBusyChanged | EventFieldDeclaration | L346–346 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsVisionProtocolBusyChanged |
| IsVisionFlipOptionChanged | EventFieldDeclaration | L347–347 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsVisionFlipOptionChanged |
| ItemChanged | EventFieldDeclaration | L348–348 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ItemChanged |
| ItemTabsChanged | EventFieldDeclaration | L349–349 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ItemTabsChanged |
| JudgeBrushChanged | EventFieldDeclaration | L350–350 | System.EventHandler? Drilling.UI.Menu.CBindingBase.JudgeBrushChanged |
| KeyChanged | EventFieldDeclaration | L351–351 | System.EventHandler? Drilling.UI.Menu.CBindingBase.KeyChanged |
| LabelCanvasTopChanged | EventFieldDeclaration | L352–352 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LabelCanvasTopChanged |
| LaserControlRowsChanged | EventFieldDeclaration | L353–353 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserControlRowsChanged |
| LaserGateBrushChanged | EventFieldDeclaration | L354–354 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserGateBrushChanged |
| LaserGateTextChanged | EventFieldDeclaration | L355–355 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserGateTextChanged |
| LaserOffCommandChanged | EventFieldDeclaration | L356–356 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOffCommandChanged |
| LaserOnCommandChanged | EventFieldDeclaration | L357–357 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOnCommandChanged |
| LaserOnModeChanged | EventFieldDeclaration | L358–358 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOnModeChanged |
| LaserOnSegmentsTextChanged | EventFieldDeclaration | L359–359 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOnSegmentsTextChanged |
| LaserOnTimeMsecChanged | EventFieldDeclaration | L360–360 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOnTimeMsecChanged |
| LaserPowerBrushChanged | EventFieldDeclaration | L361–361 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserPowerBrushChanged |
| LaserPowerTextChanged | EventFieldDeclaration | L362–362 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserPowerTextChanged |
| LaserShotCountChanged | EventFieldDeclaration | L363–363 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserShotCountChanged |
| LaserShutterBrushChanged | EventFieldDeclaration | L364–364 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserShutterBrushChanged |
| LaserShutterTextChanged | EventFieldDeclaration | L365–365 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserShutterTextChanged |
| LaserStateBrushChanged | EventFieldDeclaration | L366–366 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserStateBrushChanged |
| LastChangedTextChanged | EventFieldDeclaration | L367–367 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LastChangedTextChanged |
| LengthChanged | EventFieldDeclaration | L368–368 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LengthChanged |
| LevelBrushChanged | EventFieldDeclaration | L369–369 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LevelBrushChanged |
| LifecycleItemsChanged | EventFieldDeclaration | L370–370 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LifecycleItemsChanged |
| LimitMinusBrushChanged | EventFieldDeclaration | L371–371 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LimitMinusBrushChanged |
| LimitPlusBrushChanged | EventFieldDeclaration | L372–372 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LimitPlusBrushChanged |
| LoadedReviewFileNameChanged | EventFieldDeclaration | L373–373 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LoadedReviewFileNameChanged |
| LoadedSettingNameChanged | EventFieldDeclaration | L374–374 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LoadedSettingNameChanged |
| LoadedSettingPathChanged | EventFieldDeclaration | L375–375 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LoadedSettingPathChanged |
| LockItemsChanged | EventFieldDeclaration | L376–376 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LockItemsChanged |
| MagChanged | EventFieldDeclaration | L377–377 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MagChanged |
| MainOperatingChanged | EventFieldDeclaration | L378–378 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MainOperatingChanged |
| ManagedItemsChanged | EventFieldDeclaration | L379–379 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ManagedItemsChanged |
| ManualChanged | EventFieldDeclaration | L380–380 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ManualChanged |
| ManualSettingsChanged | EventFieldDeclaration | L381–381 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ManualSettingsChanged |
| MatrixPointNameChanged | EventFieldDeclaration | L382–382 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MatrixPointNameChanged |
| MaxChanged | EventFieldDeclaration | L383–383 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MaxChanged |
| MaxCellNumberItemChanged | EventFieldDeclaration | L384–384 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MaxCellNumberItemChanged |
| MelsecGroupsChanged | EventFieldDeclaration | L385–385 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecGroupsChanged |
| MelsecReadRowsChanged | EventFieldDeclaration | L386–386 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecReadRowsChanged |
| MelsecRowsChanged | EventFieldDeclaration | L387–387 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecRowsChanged |
| MelsecWriteRowsChanged | EventFieldDeclaration | L388–388 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecWriteRowsChanged |
| MelsecWriteLockTextChanged | EventFieldDeclaration | L389–389 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecWriteLockTextChanged |
| MenuChanged | EventFieldDeclaration | L390–390 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MenuChanged |
| MenusChanged | EventFieldDeclaration | L391–391 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MenusChanged |
| MetricsChanged | EventFieldDeclaration | L392–392 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MetricsChanged |
| MinChanged | EventFieldDeclaration | L393–393 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MinChanged |
| ModesChanged | EventFieldDeclaration | L394–394 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModesChanged |
| ModelOptionsChanged | EventFieldDeclaration | L395–395 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModelOptionsChanged |
| ModelTypeChanged | EventFieldDeclaration | L396–396 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModelTypeChanged |
| ModifiedBrushChanged | EventFieldDeclaration | L397–397 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModifiedBrushChanged |
| ModifiedTextChanged | EventFieldDeclaration | L398–398 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModifiedTextChanged |
| ModifyCommandChanged | EventFieldDeclaration | L399–399 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModifyCommandChanged |
| MonitorChanged | EventFieldDeclaration | L400–400 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MonitorChanged |
| MoveCommandLabelChanged | EventFieldDeclaration | L401–401 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MoveCommandLabelChanged |
| MoveCountTextChanged | EventFieldDeclaration | L402–402 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MoveCountTextChanged |
| MoveStopCommandChanged | EventFieldDeclaration | L403–403 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MoveStopCommandChanged |
| MultiMoveAxisRowsChanged | EventFieldDeclaration | L404–404 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MultiMoveAxisRowsChanged |
| MutedChanged | EventFieldDeclaration | L405–405 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MutedChanged |
| NameChanged | EventFieldDeclaration | L406–406 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NameChanged |
| NavigateShotGroupCommandChanged | EventFieldDeclaration | L407–407 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NavigateShotGroupCommandChanged |
| NextChanged | EventFieldDeclaration | L408–408 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NextChanged |
| NextCellCommandChanged | EventFieldDeclaration | L409–409 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NextCellCommandChanged |
| NickNameChanged | EventFieldDeclaration | L410–410 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NickNameChanged |
| NoChanged | EventFieldDeclaration | L411–411 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NoChanged |
| NoOpChanged | EventFieldDeclaration | L412–412 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NoOpChanged |
| NumberChanged | EventFieldDeclaration | L413–413 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NumberChanged |
| OddHeadPreviewsChanged | EventFieldDeclaration | L414–414 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OddHeadPreviewsChanged |
| OfflineChanged | EventFieldDeclaration | L415–415 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OfflineChanged |
| OffsetCoordinateTextChanged | EventFieldDeclaration | L416–416 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OffsetCoordinateTextChanged |
| OffsetValueBrushChanged | EventFieldDeclaration | L417–417 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OffsetValueBrushChanged |
| OffsetXChanged | EventFieldDeclaration | L418–418 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OffsetXChanged |
| OffsetYChanged | EventFieldDeclaration | L419–419 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OffsetYChanged |
| OneHoleBeamRowsChanged | EventFieldDeclaration | L420–420 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleBeamRowsChanged |
| OneHoleCellHoleMatrixRowsChanged | EventFieldDeclaration | L421–421 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleCellHoleMatrixRowsChanged |
| OneHoleCellHoleRowsChanged | EventFieldDeclaration | L422–422 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleCellHoleRowsChanged |
| OneHoleCellPreviewLabelsChanged | EventFieldDeclaration | L423–423 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleCellPreviewLabelsChanged |
| OneHoleCurrentHoleMarkersChanged | EventFieldDeclaration | L424–424 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleCurrentHoleMarkersChanged |
| OneHoleGlassPreviewImageChanged | EventFieldDeclaration | L425–425 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleGlassPreviewImageChanged |
| OneHoleGlassPreviewSummaryChanged | EventFieldDeclaration | L426–426 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleGlassPreviewSummaryChanged |
| OneHoleWorkspaceSummaryChanged | EventFieldDeclaration | L427–427 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleWorkspaceSummaryChanged |
| OneHoleWorkspaceTitleChanged | EventFieldDeclaration | L428–428 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleWorkspaceTitleChanged |
| OnlineChanged | EventFieldDeclaration | L429–429 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OnlineChanged |
| OpenChanged | EventFieldDeclaration | L430–430 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpenChanged |
| OperationButtonsChanged | EventFieldDeclaration | L431–431 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OperationButtonsChanged |
| OperationFieldsChanged | EventFieldDeclaration | L432–432 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OperationFieldsChanged |
| OperationPanelTitleChanged | EventFieldDeclaration | L433–433 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OperationPanelTitleChanged |
| OpticAttenuatorVisibilityChanged | EventFieldDeclaration | L434–434 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticAttenuatorVisibilityChanged |
| OpticBetVisibilityChanged | EventFieldDeclaration | L435–435 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticBetVisibilityChanged |
| OpticHeadParametersChanged | EventFieldDeclaration | L436–436 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticHeadParametersChanged |
| OpticLaserVisibilityChanged | EventFieldDeclaration | L437–437 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticLaserVisibilityChanged |
| OpticParameterGroupsChanged | EventFieldDeclaration | L438–438 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticParameterGroupsChanged |
| OpticParameterVisibilityChanged | EventFieldDeclaration | L439–439 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticParameterVisibilityChanged |
| OpticStatusTabsChanged | EventFieldDeclaration | L440–440 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticStatusTabsChanged |
| OptionBorderBrushChanged | EventFieldDeclaration | L441–441 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionBorderBrushChanged |
| OptionBrushChanged | EventFieldDeclaration | L442–442 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionBrushChanged |
| OptionOpacityChanged | EventFieldDeclaration | L443–443 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionOpacityChanged |
| OptionTextChanged | EventFieldDeclaration | L444–444 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionTextChanged |
| OptionVisibilityChanged | EventFieldDeclaration | L445–445 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionVisibilityChanged |
| OriginalValueChanged | EventFieldDeclaration | L446–446 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OriginalValueChanged |
| ParameterChanged | EventFieldDeclaration | L447–447 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParameterChanged |
| ParameterPanelTitleChanged | EventFieldDeclaration | L448–448 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParameterPanelTitleChanged |
| ParameterRowsChanged | EventFieldDeclaration | L449–449 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParameterRowsChanged |
| ParametersChanged | EventFieldDeclaration | L450–450 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParametersChanged |
| ParameterTabsChanged | EventFieldDeclaration | L451–451 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParameterTabsChanged |
| PicoAllMotorCommandButtonsChanged | EventFieldDeclaration | L452–452 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoAllMotorCommandButtonsChanged |
| PicoAllMotorSelectButtonsChanged | EventFieldDeclaration | L453–453 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoAllMotorSelectButtonsChanged |
| PicoConnectionButtonsChanged | EventFieldDeclaration | L454–454 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoConnectionButtonsChanged |
| PicoErrorRowsChanged | EventFieldDeclaration | L455–455 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoErrorRowsChanged |
| PicoJogStartCommandChanged | EventFieldDeclaration | L456–456 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoJogStartCommandChanged |
| PicoJogStopCommandChanged | EventFieldDeclaration | L457–457 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoJogStopCommandChanged |
| PicoMotionJogButtonsChanged | EventFieldDeclaration | L458–458 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotionJogButtonsChanged |
| PicoMotionMoveButtonsChanged | EventFieldDeclaration | L459–459 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotionMoveButtonsChanged |
| PicoMotionRelButtonsChanged | EventFieldDeclaration | L460–460 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotionRelButtonsChanged |
| PicoMotionStopButtonsChanged | EventFieldDeclaration | L461–461 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotionStopButtonsChanged |
| PicoMotorSelectButtonsChanged | EventFieldDeclaration | L462–462 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotorSelectButtonsChanged |
| PixelCountXItemChanged | EventFieldDeclaration | L463–463 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PixelCountXItemChanged |
| PixelCountYItemChanged | EventFieldDeclaration | L464–464 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PixelCountYItemChanged |
| PixelSizeItemChanged | EventFieldDeclaration | L465–465 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PixelSizeItemChanged |
| PlacementStateChanged | EventFieldDeclaration | L466–466 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PlacementStateChanged |
| PlanSummaryChanged | EventFieldDeclaration | L467–467 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PlanSummaryChanged |
| PmChanged | EventFieldDeclaration | L468–468 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PmChanged |
| PointSelectRowsChanged | EventFieldDeclaration | L469–469 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PointSelectRowsChanged |
| PollMsChanged | EventFieldDeclaration | L470–470 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PollMsChanged |
| PositionMoveCommandChanged | EventFieldDeclaration | L471–471 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionMoveCommandChanged |
| PositionMoveItemsChanged | EventFieldDeclaration | L472–472 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionMoveItemsChanged |
| PositionRowsChanged | EventFieldDeclaration | L473–473 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionRowsChanged |
| PositionXPropertyChanged | EventFieldDeclaration | L474–474 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionXPropertyChanged |
| PositionYPropertyChanged | EventFieldDeclaration | L475–475 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionYPropertyChanged |
| PowerBrushChanged | EventFieldDeclaration | L476–476 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerBrushChanged |
| PowerMeterGraphLineChanged | EventFieldDeclaration | L477–477 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterGraphLineChanged |
| PowerMeterGraphMaxTextChanged | EventFieldDeclaration | L478–478 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterGraphMaxTextChanged |
| PowerMeterGraphMinTextChanged | EventFieldDeclaration | L479–479 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterGraphMinTextChanged |
| PowerMeterGraphTargetTextChanged | EventFieldDeclaration | L480–480 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterGraphTargetTextChanged |
| PowerMeterTargetLineYChanged | EventFieldDeclaration | L481–481 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterTargetLineYChanged |
| PowerMeterTuneMessageChanged | EventFieldDeclaration | L482–482 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterTuneMessageChanged |
| PowerMeterTuneRowsChanged | EventFieldDeclaration | L483–483 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterTuneRowsChanged |
| PowerMeterTuneStateChanged | EventFieldDeclaration | L484–484 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterTuneStateChanged |
| PreviousChanged | EventFieldDeclaration | L485–485 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PreviousChanged |
| PreviousCellCommandChanged | EventFieldDeclaration | L486–486 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PreviousCellCommandChanged |
| PrimaryTextChanged | EventFieldDeclaration | L487–487 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PrimaryTextChanged |
| ProcessPitchItemChanged | EventFieldDeclaration | L488–488 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessPitchItemChanged |
| ProcessResultBrushChanged | EventFieldDeclaration | L489–489 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessResultBrushChanged |
| ProcessResultValueChanged | EventFieldDeclaration | L490–490 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessResultValueChanged |
| ProcessSequenceItemsChanged | EventFieldDeclaration | L491–491 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessSequenceItemsChanged |
| ProcessStepChanged | EventFieldDeclaration | L492–492 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessStepChanged |
| ProcessSummaryItemsChanged | EventFieldDeclaration | L493–493 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessSummaryItemsChanged |
| ProductAlignItemsChanged | EventFieldDeclaration | L494–494 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductAlignItemsChanged |
| ProductDistortionItemsChanged | EventFieldDeclaration | L495–495 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductDistortionItemsChanged |
| ProductGlassItemsChanged | EventFieldDeclaration | L496–496 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductGlassItemsChanged |
| ProductHistoryRowsChanged | EventFieldDeclaration | L497–497 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductHistoryRowsChanged |
| ProductItemsChanged | EventFieldDeclaration | L498–498 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductItemsChanged |
| ProductProcessItemsChanged | EventFieldDeclaration | L499–499 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductProcessItemsChanged |
| ProductRecipeItemsChanged | EventFieldDeclaration | L500–500 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductRecipeItemsChanged |
| ProductReviewItemsChanged | EventFieldDeclaration | L501–501 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductReviewItemsChanged |
| ProductReviewRowsChanged | EventFieldDeclaration | L502–502 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductReviewRowsChanged |
| ProgressPercentChanged | EventFieldDeclaration | L503–503 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProgressPercentChanged |
| ProgressPercentTextChanged | EventFieldDeclaration | L504–504 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProgressPercentTextChanged |
| ProgressTextChanged | EventFieldDeclaration | L505–505 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProgressTextChanged |
| PwmDeviceRowsChanged | EventFieldDeclaration | L506–506 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PwmDeviceRowsChanged |
| PwmRunButtonsChanged | EventFieldDeclaration | L507–507 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PwmRunButtonsChanged |
| PwmSettingRowsChanged | EventFieldDeclaration | L508–508 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PwmSettingRowsChanged |
| QuickSelectCommandChanged | EventFieldDeclaration | L509–509 | System.EventHandler? Drilling.UI.Menu.CBindingBase.QuickSelectCommandChanged |
| RangeVisibilityChanged | EventFieldDeclaration | L510–510 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RangeVisibilityChanged |
| ReadValueChanged | EventFieldDeclaration | L511–511 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReadValueChanged |
| RecipeChanged | EventFieldDeclaration | L512–512 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeChanged |
| RecipeFilesChanged | EventFieldDeclaration | L513–513 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeFilesChanged |
| RecipeFilesPageTextChanged | EventFieldDeclaration | L514–514 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeFilesPageTextChanged |
| RecipeListChanged | EventFieldDeclaration | L515–515 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeListChanged |
| RecipeNameChanged | EventFieldDeclaration | L516–516 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeNameChanged |
| RecipePreviewImageChanged | EventFieldDeclaration | L517–517 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipePreviewImageChanged |
| RecoveryCommandsChanged | EventFieldDeclaration | L518–518 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecoveryCommandsChanged |
| ReloadCommandChanged | EventFieldDeclaration | L519–519 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReloadCommandChanged |
| RenameCommandChanged | EventFieldDeclaration | L520–520 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RenameCommandChanged |
| ResultBrushChanged | EventFieldDeclaration | L521–521 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultBrushChanged |
| ResultItemsChanged | EventFieldDeclaration | L522–522 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultItemsChanged |
| ResultMessageChanged | EventFieldDeclaration | L523–523 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultMessageChanged |
| ResultMatrixChanged | EventFieldDeclaration | L524–524 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultMatrixChanged |
| IsReviewResultDeferredChanged | EventFieldDeclaration | L525–525 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsReviewResultDeferredChanged |
| ResultPasswordChanged | EventFieldDeclaration | L526–526 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultPasswordChanged |
| ResultRowsChanged | EventFieldDeclaration | L527–527 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultRowsChanged |
| ResultValueChanged | EventFieldDeclaration | L528–528 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultValueChanged |
| RetryCommandChanged | EventFieldDeclaration | L529–529 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RetryCommandChanged |
| ReviewChanged | EventFieldDeclaration | L530–530 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewChanged |
| ReviewLoadStatusChanged | EventFieldDeclaration | L531–531 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewLoadStatusChanged |
| ReviewLoadStatusBrushChanged | EventFieldDeclaration | L532–532 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewLoadStatusBrushChanged |
| ReviewResultRowsChanged | EventFieldDeclaration | L533–533 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewResultRowsChanged |
| ReviewSetsChanged | EventFieldDeclaration | L534–534 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewSetsChanged |
| RotationChanged | EventFieldDeclaration | L535–535 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RotationChanged |
| RowChanged | EventFieldDeclaration | L536–536 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RowChanged |
| RowBrushChanged | EventFieldDeclaration | L537–537 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RowBrushChanged |
| RunBeamRowsChanged | EventFieldDeclaration | L538–538 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunBeamRowsChanged |
| InspectionBeamResultRowsChanged | EventFieldDeclaration | L539–539 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionBeamResultRowsChanged |
| RunCellShotMatrixRowsChanged | EventFieldDeclaration | L540–540 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunCellShotMatrixRowsChanged |
| RunCellShotRowsChanged | EventFieldDeclaration | L541–541 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunCellShotRowsChanged |
| RunCellPreviewLabelsChanged | EventFieldDeclaration | L542–542 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunCellPreviewLabelsChanged |
| InspectionHeadRowsChanged | EventFieldDeclaration | L543–543 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionHeadRowsChanged |
| IsOneShotReviewModeChanged | EventFieldDeclaration | L544–544 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneShotReviewModeChanged |
| IsOneLineReviewModeChanged | EventFieldDeclaration | L545–545 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneLineReviewModeChanged |
| IsShotSelectionModeChanged | EventFieldDeclaration | L546–546 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsShotSelectionModeChanged |
| IsRunCommandsVisibleChanged | EventFieldDeclaration | L547–547 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunCommandsVisibleChanged |
| OneShotSelectionChanged | EventFieldDeclaration | L548–548 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneShotSelectionChanged |
| OneShotStatusChanged | EventFieldDeclaration | L549–549 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneShotStatusChanged |
| OneShotResultTextChanged | EventFieldDeclaration | L550–550 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneShotResultTextChanged |
| SelectedOneShotMethodChanged | EventFieldDeclaration | L551–551 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedOneShotMethodChanged |
| InspectionShotSummaryChanged | EventFieldDeclaration | L552–552 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionShotSummaryChanged |
| InspectionProgressTextChanged | EventFieldDeclaration | L553–553 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionProgressTextChanged |
| IsInspectionExecutionViewVisibleChanged | EventFieldDeclaration | L554–554 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsInspectionExecutionViewVisibleChanged |
| IsInspectionSelectionControlsVisibleChanged | EventFieldDeclaration | L555–555 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsInspectionSelectionControlsVisibleChanged |
| RunCurrentHoleMarkersChanged | EventFieldDeclaration | L556–556 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunCurrentHoleMarkersChanged |
| RunGlassPreviewImageChanged | EventFieldDeclaration | L557–557 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunGlassPreviewImageChanged |
| RunGlassPreviewInspectionOverlayImageChanged | EventFieldDeclaration | L558–558 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunGlassPreviewInspectionOverlayImageChanged |
| RunGlassPreviewSummaryChanged | EventFieldDeclaration | L559–559 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunGlassPreviewSummaryChanged |
| RunResultLoadStatusChanged | EventFieldDeclaration | L560–560 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunResultLoadStatusChanged |
| RunWorkspaceSummaryChanged | EventFieldDeclaration | L561–561 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunWorkspaceSummaryChanged |
| RunWorkspaceTitleChanged | EventFieldDeclaration | L562–562 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunWorkspaceTitleChanged |
| SampleCorrectionTargetChanged | EventFieldDeclaration | L563–563 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCorrectionTargetChanged |
| SampleCorrectionTitleChanged | EventFieldDeclaration | L564–564 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCorrectionTitleChanged |
| SampleCellShotMatrixRowsChanged | EventFieldDeclaration | L565–565 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCellShotMatrixRowsChanged |
| SampleCellShotRowsChanged | EventFieldDeclaration | L566–566 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCellShotRowsChanged |
| SampleCellOptionsChanged | EventFieldDeclaration | L567–567 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCellOptionsChanged |
| SampleCellPreviewLabelsChanged | EventFieldDeclaration | L568–568 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCellPreviewLabelsChanged |
| SampleGlassPreviewImageChanged | EventFieldDeclaration | L569–569 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleGlassPreviewImageChanged |
| SampleGlassPreviewInspectionOverlayImageChanged | EventFieldDeclaration | L570–570 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleGlassPreviewInspectionOverlayImageChanged |
| SampleGlassPreviewSummaryChanged | EventFieldDeclaration | L571–571 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleGlassPreviewSummaryChanged |
| SampleHeadOptionsChanged | EventFieldDeclaration | L572–572 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleHeadOptionsChanged |
| SampleInspectionShotCountChanged | EventFieldDeclaration | L573–573 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleInspectionShotCountChanged |
| SampleMapColumnCountChanged | EventFieldDeclaration | L574–574 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleMapColumnCountChanged |
| SampleOffsetApplyCountChanged | EventFieldDeclaration | L575–575 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleOffsetApplyCountChanged |
| SamplePlanStatusChanged | EventFieldDeclaration | L576–576 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SamplePlanStatusChanged |
| SampleReferenceCellChanged | EventFieldDeclaration | L577–577 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceCellChanged |
| SampleReferenceHeadChanged | EventFieldDeclaration | L578–578 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceHeadChanged |
| SampleReferenceShotChanged | EventFieldDeclaration | L579–579 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceShotChanged |
| SampleRuleDescriptionChanged | EventFieldDeclaration | L580–580 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleRuleDescriptionChanged |
| SampleRuleNameChanged | EventFieldDeclaration | L581–581 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleRuleNameChanged |
| SampleRuleSelectionSummaryChanged | EventFieldDeclaration | L582–582 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleRuleSelectionSummaryChanged |
| SampleReferenceShotMarkersChanged | EventFieldDeclaration | L583–583 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceShotMarkersChanged |
| SampleReferenceThirdLabelChanged | EventFieldDeclaration | L584–584 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceThirdLabelChanged |
| SampleTargetSectionTitleChanged | EventFieldDeclaration | L585–585 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleTargetSectionTitleChanged |
| SampleWorkspaceSummaryChanged | EventFieldDeclaration | L586–586 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleWorkspaceSummaryChanged |
| SampleWorkspaceTitleChanged | EventFieldDeclaration | L587–587 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleWorkspaceTitleChanged |
| SaveCommandChanged | EventFieldDeclaration | L588–588 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SaveCommandChanged |
| ScaleChanged | EventFieldDeclaration | L589–589 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScaleChanged |
| ScannerAxesChanged | EventFieldDeclaration | L590–590 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScannerAxesChanged |
| ScannerStatusItemsChanged | EventFieldDeclaration | L591–591 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScannerStatusItemsChanged |
| ScannerStatusHeadTabsChanged | EventFieldDeclaration | L592–592 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScannerStatusHeadTabsChanged |
| ScannerStatusVisibilityChanged | EventFieldDeclaration | L593–593 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScannerStatusVisibilityChanged |
| ScriptStatusChanged | EventFieldDeclaration | L594–594 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScriptStatusChanged |
| ScriptStatusTextChanged | EventFieldDeclaration | L595–595 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScriptStatusTextChanged |
| ScriptTaskStatusItemsChanged | EventFieldDeclaration | L596–596 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScriptTaskStatusItemsChanged |
| SectionsChanged | EventFieldDeclaration | L597–597 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SectionsChanged |
| SelectCategoryCommandChanged | EventFieldDeclaration | L598–598 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCategoryCommandChanged |
| SelectCellCommandChanged | EventFieldDeclaration | L599–599 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCellCommandChanged |
| SelectCommandChanged | EventFieldDeclaration | L600–600 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCommandChanged |
| SelectCoordinateBasisCommandChanged | EventFieldDeclaration | L601–601 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCoordinateBasisCommandChanged |
| SelectCoordinateCellCommandChanged | EventFieldDeclaration | L602–602 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCoordinateCellCommandChanged |
| SelectCoordinateShotCommandChanged | EventFieldDeclaration | L603–603 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCoordinateShotCommandChanged |
| SelectedAxisIdChanged | EventFieldDeclaration | L604–604 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedAxisIdChanged |
| SelectedAxisRowChanged | EventFieldDeclaration | L605–605 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedAxisRowChanged |
| SelectedBeamChanged | EventFieldDeclaration | L606–606 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedBeamChanged |
| SelectedInspectionMethodChanged | EventFieldDeclaration | L607–607 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedInspectionMethodChanged |
| SelectedCellExcludedTargetTextChanged | EventFieldDeclaration | L608–608 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedCellExcludedTargetTextChanged |
| SelectedCellHasExcludedTargetsChanged | EventFieldDeclaration | L609–609 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedCellHasExcludedTargetsChanged |
| SelectedCellNavigationTextChanged | EventFieldDeclaration | L610–610 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedCellNavigationTextChanged |
| SelectedCellShotGroupTitleChanged | EventFieldDeclaration | L611–611 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedCellShotGroupTitleChanged |
| SelectedGroupChanged | EventFieldDeclaration | L612–612 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedGroupChanged |
| SelectedHeadChanged | EventFieldDeclaration | L613–613 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedHeadChanged |
| SelectedHeadDeviceNameChanged | EventFieldDeclaration | L614–614 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedHeadDeviceNameChanged |
| SelectedHeadItemsChanged | EventFieldDeclaration | L615–615 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedHeadItemsChanged |
| SelectedInterfaceRowChanged | EventFieldDeclaration | L616–616 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedInterfaceRowChanged |
| SelectedLaserNameChanged | EventFieldDeclaration | L617–617 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedLaserNameChanged |
| SelectedLaserNumberChanged | EventFieldDeclaration | L618–618 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedLaserNumberChanged |
| SelectedMenuChanged | EventFieldDeclaration | L619–619 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedMenuChanged |
| SelectedPointItemsChanged | EventFieldDeclaration | L620–620 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedPointItemsChanged |
| SelectedRecipeFileChanged | EventFieldDeclaration | L621–621 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedRecipeFileChanged |
| SelectedRunShotNameChanged | EventFieldDeclaration | L622–622 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedRunShotNameChanged |
| SelectedSampleRuleUiChanged | EventFieldDeclaration | L623–623 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedSampleRuleUiChanged |
| SelectedSampleCellChanged | EventFieldDeclaration | L624–624 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedSampleCellChanged |
| SelectedSampleHeadChanged | EventFieldDeclaration | L625–625 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedSampleHeadChanged |
| SelectedShotDetailImageChanged | EventFieldDeclaration | L626–626 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotDetailImageChanged |
| SelectedShotInspectionChanged | EventFieldDeclaration | L627–627 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotInspectionChanged |
| SelectedShotGroupChanged | EventFieldDeclaration | L628–628 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupChanged |
| SelectedShotGroupBeamTextChanged | EventFieldDeclaration | L629–629 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupBeamTextChanged |
| SelectedShotGroupCenterTextChanged | EventFieldDeclaration | L630–630 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupCenterTextChanged |
| SelectedShotGroupGridTextChanged | EventFieldDeclaration | L631–631 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupGridTextChanged |
| SelectedShotGroupIndicatorTextChanged | EventFieldDeclaration | L632–632 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupIndicatorTextChanged |
| SelectedShotGroupPitchTextChanged | EventFieldDeclaration | L633–633 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupPitchTextChanged |
| SelectedShotGroupPixelWindowTextChanged | EventFieldDeclaration | L634–634 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupPixelWindowTextChanged |
| SelectedShotGroupStateTextChanged | EventFieldDeclaration | L635–635 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupStateTextChanged |
| SelectedTabChanged | EventFieldDeclaration | L636–636 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedTabChanged |
| SelectedReviewTabIndexChanged | EventFieldDeclaration | L637–637 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedReviewTabIndexChanged |
| SelectedVisionProtocolCommandChanged | EventFieldDeclaration | L638–638 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedVisionProtocolCommandChanged |
| SelectGroupCommandChanged | EventFieldDeclaration | L639–639 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectGroupCommandChanged |
| SelectHeadCommandChanged | EventFieldDeclaration | L640–640 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectHeadCommandChanged |
| SelectHeadDeviceCommandChanged | EventFieldDeclaration | L641–641 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectHeadDeviceCommandChanged |
| SelectionSummaryItemsChanged | EventFieldDeclaration | L642–642 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectionSummaryItemsChanged |
| SelectManualWorkspaceCommandChanged | EventFieldDeclaration | L643–643 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectManualWorkspaceCommandChanged |
| SelectMelsecGroupCommandChanged | EventFieldDeclaration | L644–644 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectMelsecGroupCommandChanged |
| SelectModeCommandChanged | EventFieldDeclaration | L645–645 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectModeCommandChanged |
| SelectOneHoleCellCommandChanged | EventFieldDeclaration | L646–646 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectOneHoleCellCommandChanged |
| SelectOneHoleCommandChanged | EventFieldDeclaration | L647–647 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectOneHoleCommandChanged |
| SelectParameterTabCommandChanged | EventFieldDeclaration | L648–648 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectParameterTabCommandChanged |
| SelectPreviewCellCommandChanged | EventFieldDeclaration | L649–649 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectPreviewCellCommandChanged |
| SelectRunBeamCommandChanged | EventFieldDeclaration | L650–650 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectRunBeamCommandChanged |
| SelectRunCellCommandChanged | EventFieldDeclaration | L651–651 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectRunCellCommandChanged |
| SelectRunShotCommandChanged | EventFieldDeclaration | L652–652 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectRunShotCommandChanged |
| SelectSampleCellCommandChanged | EventFieldDeclaration | L653–653 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectSampleCellCommandChanged |
| SelectSettingCommandChanged | EventFieldDeclaration | L654–654 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectSettingCommandChanged |
| SelectShapeCommandChanged | EventFieldDeclaration | L655–655 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectShapeCommandChanged |
| SelectTabCommandChanged | EventFieldDeclaration | L656–656 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectTabCommandChanged |
| ServoBrushChanged | EventFieldDeclaration | L657–657 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ServoBrushChanged |
| SetSampleHoleSelectionCommandChanged | EventFieldDeclaration | L658–658 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SetSampleHoleSelectionCommandChanged |
| SettingChanged | EventFieldDeclaration | L659–659 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SettingChanged |
| SettingFilesChanged | EventFieldDeclaration | L660–660 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SettingFilesChanged |
| SettingFilesPageTextChanged | EventFieldDeclaration | L661–661 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SettingFilesPageTextChanged |
| SettingParametersChanged | EventFieldDeclaration | L662–662 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SettingParametersChanged |
| ShapeDirectionChanged | EventFieldDeclaration | L663–663 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeDirectionChanged |
| ShapeNameChanged | EventFieldDeclaration | L664–664 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeNameChanged |
| ShapeOffsetXChanged | EventFieldDeclaration | L665–665 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeOffsetXChanged |
| ShapeOffsetYChanged | EventFieldDeclaration | L666–666 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeOffsetYChanged |
| ShapeScanItemsChanged | EventFieldDeclaration | L667–667 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeScanItemsChanged |
| ShapeSizeChanged | EventFieldDeclaration | L668–668 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeSizeChanged |
| ShapeStartCommandChanged | EventFieldDeclaration | L669–669 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeStartCommandChanged |
| ShapeStopCommandChanged | EventFieldDeclaration | L670–670 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeStopCommandChanged |
| ShiftOffsetXChanged | EventFieldDeclaration | L671–671 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShiftOffsetXChanged |
| ShiftOffsetYChanged | EventFieldDeclaration | L672–672 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShiftOffsetYChanged |
| ShotCentersChanged | EventFieldDeclaration | L673–673 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotCentersChanged |
| ShotDetailDesignHeightChanged | EventFieldDeclaration | L674–674 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotDetailDesignHeightChanged |
| ShotDetailDesignWidthChanged | EventFieldDeclaration | L675–675 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotDetailDesignWidthChanged |
| CellShotNoChanged | EventFieldDeclaration | L676–676 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellShotNoChanged |
| ShotGroupPatternSummaryChanged | EventFieldDeclaration | L677–677 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotGroupPatternSummaryChanged |
| ShotGroupRowsChanged | EventFieldDeclaration | L678–678 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotGroupRowsChanged |
| ShotTextChanged | EventFieldDeclaration | L679–679 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotTextChanged |
| ShowCycleControlsChanged | EventFieldDeclaration | L680–680 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShowCycleControlsChanged |
| SimulChanged | EventFieldDeclaration | L681–681 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SimulChanged |
| SimulBrushChanged | EventFieldDeclaration | L682–682 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SimulBrushChanged |
| SourceGroupChanged | EventFieldDeclaration | L683–683 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SourceGroupChanged |
| SourceRowsChanged | EventFieldDeclaration | L684–684 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SourceRowsChanged |
| SplitBeamCountItemChanged | EventFieldDeclaration | L685–685 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SplitBeamCountItemChanged |
| SpotSizeChanged | EventFieldDeclaration | L686–686 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SpotSizeChanged |
| ST_MONITOR_MELSEC_ROWChanged | EventFieldDeclaration | L687–687 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ST_MONITOR_MELSEC_ROWChanged |
| ST_MONITOR_PARAMETER_ROWChanged | EventFieldDeclaration | L688–688 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ST_MONITOR_PARAMETER_ROWChanged |
| StageAxesChanged | EventFieldDeclaration | L689–689 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StageAxesChanged |
| StageHomeCommandChanged | EventFieldDeclaration | L690–690 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StageHomeCommandChanged |
| StageMoveCommandChanged | EventFieldDeclaration | L691–691 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StageMoveCommandChanged |
| StageStopCommandChanged | EventFieldDeclaration | L692–692 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StageStopCommandChanged |
| StartCommandChanged | EventFieldDeclaration | L693–693 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StartCommandChanged |
| StartTimeChanged | EventFieldDeclaration | L694–694 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StartTimeChanged |
| StateChanged | EventFieldDeclaration | L695–695 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StateChanged |
| StateBrushChanged | EventFieldDeclaration | L696–696 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StateBrushChanged |
| StateRowsChanged | EventFieldDeclaration | L697–697 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StateRowsChanged |
| StateTextChanged | EventFieldDeclaration | L698–698 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StateTextChanged |
| StatusBrushChanged | EventFieldDeclaration | L699–699 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StatusBrushChanged |
| StatusMessageChanged | EventFieldDeclaration | L700–700 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StatusMessageChanged |
| StatusPanelTitleChanged | EventFieldDeclaration | L701–701 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StatusPanelTitleChanged |
| StatusRowsChanged | EventFieldDeclaration | L702–702 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StatusRowsChanged |
| StopCommandChanged | EventFieldDeclaration | L703–703 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StopCommandChanged |
| SubtitleChanged | EventFieldDeclaration | L704–704 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SubtitleChanged |
| SummaryItemsChanged | EventFieldDeclaration | L705–705 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SummaryItemsChanged |
| SummaryRowsChanged | EventFieldDeclaration | L706–706 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SummaryRowsChanged |
| SystemSectionChanged | EventFieldDeclaration | L707–707 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SystemSectionChanged |
| TabItemsChanged | EventFieldDeclaration | L708–708 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TabItemsChanged |
| TabsChanged | EventFieldDeclaration | L709–709 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TabsChanged |
| TargetGxChanged | EventFieldDeclaration | L710–710 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetGxChanged |
| TargetGyChanged | EventFieldDeclaration | L711–711 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetGyChanged |
| TargetGzChanged | EventFieldDeclaration | L712–712 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetGzChanged |
| TargetItemsChanged | EventFieldDeclaration | L713–713 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetItemsChanged |
| TargetPositionChanged | EventFieldDeclaration | L714–714 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetPositionChanged |
| TextBrushChanged | EventFieldDeclaration | L715–715 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TextBrushChanged |
| ThemeModeTextChanged | EventFieldDeclaration | L716–716 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ThemeModeTextChanged |
| ThemeToggleTextChanged | EventFieldDeclaration | L717–717 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ThemeToggleTextChanged |
| TitleChanged | EventFieldDeclaration | L718–718 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TitleChanged |
| ToggleOperationModeCommandChanged | EventFieldDeclaration | L719–719 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ToggleOperationModeCommandChanged |
| ToggleMelsecWriteLockCommandChanged | EventFieldDeclaration | L720–720 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ToggleMelsecWriteLockCommandChanged |
| TogglePointCommandChanged | EventFieldDeclaration | L721–721 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TogglePointCommandChanged |
| TogglePreviewHeadCommandChanged | EventFieldDeclaration | L722–722 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TogglePreviewHeadCommandChanged |
| ToggleThemeCommandChanged | EventFieldDeclaration | L723–723 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ToggleThemeCommandChanged |
| TotalShotsTextChanged | EventFieldDeclaration | L724–724 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TotalShotsTextChanged |
| TrendChanged | EventFieldDeclaration | L725–725 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TrendChanged |
| TrendBarsChanged | EventFieldDeclaration | L726–726 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TrendBarsChanged |
| TrendPanelTitleChanged | EventFieldDeclaration | L727–727 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TrendPanelTitleChanged |
| TrendPointsChanged | EventFieldDeclaration | L728–728 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TrendPointsChanged |
| TypeChanged | EventFieldDeclaration | L729–729 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TypeChanged |
| TypeBrushChanged | EventFieldDeclaration | L730–730 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TypeBrushChanged |
| TypeOptionsChanged | EventFieldDeclaration | L731–731 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TypeOptionsChanged |
| UnitChanged | EventFieldDeclaration | L732–732 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UnitChanged |
| UseBrushChanged | EventFieldDeclaration | L733–733 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UseBrushChanged |
| UsesSelectionEditorChanged | EventFieldDeclaration | L734–734 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UsesSelectionEditorChanged |
| UseStretchScalePropertyChanged | EventFieldDeclaration | L735–735 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UseStretchScalePropertyChanged |
| UsesWriteSelectionChanged | EventFieldDeclaration | L736–736 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UsesWriteSelectionChanged |
| UseTextChanged | EventFieldDeclaration | L737–737 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UseTextChanged |
| ValueChanged | EventFieldDeclaration | L738–738 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ValueChanged |
| ValueBrushChanged | EventFieldDeclaration | L739–739 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ValueBrushChanged |
| ValueOptionsChanged | EventFieldDeclaration | L740–740 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ValueOptionsChanged |
| ValueStateChanged | EventFieldDeclaration | L741–741 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ValueStateChanged |
| VisionProtocolCommandDescriptionChanged | EventFieldDeclaration | L742–742 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolCommandDescriptionChanged |
| VisionProtocolEndpointChanged | EventFieldDeclaration | L743–743 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolEndpointChanged |
| VisionProtocolHasNoArgumentsChanged | EventFieldDeclaration | L744–744 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolHasNoArgumentsChanged |
| VisionProtocolInspectionTypeChanged | EventFieldDeclaration | L745–745 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolInspectionTypeChanged |
| VisionProtocolIsFlyingReadyChanged | EventFieldDeclaration | L746–746 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolIsFlyingReadyChanged |
| VisionProtocolKeepAliveChanged | EventFieldDeclaration | L747–747 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolKeepAliveChanged |
| VisionProtocolMarkRowCountTextChanged | EventFieldDeclaration | L748–748 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolMarkRowCountTextChanged |
| VisionProtocolRequestPreviewChanged | EventFieldDeclaration | L749–749 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolRequestPreviewChanged |
| VisionProtocolStatusChanged | EventFieldDeclaration | L750–750 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolStatusChanged |
| VisionProtocolUsesMarkRowsChanged | EventFieldDeclaration | L751–751 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolUsesMarkRowsChanged |
| ZPositionMoveCommandChanged | EventFieldDeclaration | L752–752 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ZPositionMoveCommandChanged |
| WaitChanged | EventFieldDeclaration | L753–753 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WaitChanged |
| WriteInputTypeChanged | EventFieldDeclaration | L754–754 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WriteInputTypeChanged |
| WriteMelsecCommandChanged | EventFieldDeclaration | L755–755 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WriteMelsecCommandChanged |
| WriteValueChanged | EventFieldDeclaration | L756–756 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WriteValueChanged |
| WriteValueOptionsChanged | EventFieldDeclaration | L757–757 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WriteValueOptionsChanged |
| XLabelChanged | EventFieldDeclaration | L758–758 | System.EventHandler? Drilling.UI.Menu.CBindingBase.XLabelChanged |
| YLabelChanged | EventFieldDeclaration | L759–759 | System.EventHandler? Drilling.UI.Menu.CBindingBase.YLabelChanged |
| SetProperty | MethodDeclaration | L760–770 | bool Drilling.UI.Menu.CBindingBase.SetProperty<T>(ref T, T, string?) |
| SetSequenceProperty | MethodDeclaration | L772–782 | bool Drilling.UI.Menu.CBindingBase.SetSequenceProperty<T>(ref System.Collections.Generic.IReadOnlyList<T>, System.Collections.Generic.IReadOnlyList<T>, string?) |
| OnPropertyChanged | MethodDeclaration | L784–3051 | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) |

## 멤버별 상세 계약·호출·처리 해설

### EventFieldDeclaration `ActiveInspectionShotTextChanged` · L6–6

[Drilling.UI/Menu/CBindingBase.cs:6–6](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L6-L6)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ActiveInspectionShotTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsActiveSelectionChanged` · L7–7

[Drilling.UI/Menu/CBindingBase.cs:7–7](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L7-L7)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsActiveSelectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BeamInspectionAssignmentSummaryChanged` · L8–8

[Drilling.UI/Menu/CBindingBase.cs:8–8](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L8-L8)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BeamInspectionAssignmentSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BeamInspectionShotAssignmentsChanged` · L9–9

[Drilling.UI/Menu/CBindingBase.cs:9–9](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L9-L9)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BeamInspectionShotAssignmentsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanBrowseRunShotsChanged` · L10–10

[Drilling.UI/Menu/CBindingBase.cs:10–10](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L10-L10)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanBrowseRunShotsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanClearLoadedRunReviewResultChanged` · L11–11

[Drilling.UI/Menu/CBindingBase.cs:11–11](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L11-L11)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanClearLoadedRunReviewResultChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanCommitInspectionShotChanged` · L12–12

[Drilling.UI/Menu/CBindingBase.cs:12–12](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L12-L12)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanCommitInspectionShotChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanDeleteInspectionShotChanged` · L13–13

[Drilling.UI/Menu/CBindingBase.cs:13–13](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L13-L13)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanDeleteInspectionShotChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanEditActiveInspectionBeamsChanged` · L14–14

[Drilling.UI/Menu/CBindingBase.cs:14–14](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L14-L14)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanEditActiveInspectionBeamsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanLoadRunReviewResultChanged` · L15–15

[Drilling.UI/Menu/CBindingBase.cs:15–15](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L15-L15)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanLoadRunReviewResultChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanStopOneShotChanged` · L16–16

[Drilling.UI/Menu/CBindingBase.cs:16–16](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L16-L16)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanStopOneShotChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionListCommitTextChanged` · L17–17

[Drilling.UI/Menu/CBindingBase.cs:17–17](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L17-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionListCommitTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsReviewHeadCardsVisibleChanged` · L18–18

[Drilling.UI/Menu/CBindingBase.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsReviewHeadCardsVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRunStageStatusVisibleChanged` · L19–19

[Drilling.UI/Menu/CBindingBase.cs:19–19](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L19-L19)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunStageStatusVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsShotInspectionOngoingChanged` · L20–20

[Drilling.UI/Menu/CBindingBase.cs:20–20](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L20-L20)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsShotInspectionOngoingChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSingleBeamSelectionModeChanged` · L21–21

[Drilling.UI/Menu/CBindingBase.cs:21–21](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L21-L21)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSingleBeamSelectionModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ReviewLevelLegendItemsChanged` · L22–22

[Drilling.UI/Menu/CBindingBase.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L22-L22)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewLevelLegendItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedBeamInspectionAssignmentChanged` · L23–23

[Drilling.UI/Menu/CBindingBase.cs:23–23](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L23-L23)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedBeamInspectionAssignmentChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AbleBrushChanged` · L24–24

[Drilling.UI/Menu/CBindingBase.cs:24–24](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L24-L24)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AbleBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AccentBrushChanged` · L25–25

[Drilling.UI/Menu/CBindingBase.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L25-L25)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AccentBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AccessChanged` · L26–26

[Drilling.UI/Menu/CBindingBase.cs:26–26](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L26-L26)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AccessChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ActionsChanged` · L27–27

[Drilling.UI/Menu/CBindingBase.cs:27–27](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L27-L27)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ActionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ActiveChanged` · L28–28

[Drilling.UI/Menu/CBindingBase.cs:28–28](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L28-L28)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ActiveChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AddressChanged` · L29–29

[Drilling.UI/Menu/CBindingBase.cs:29–29](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L29-L29)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AddressChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AfterBrushChanged` · L30–30

[Drilling.UI/Menu/CBindingBase.cs:30–30](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L30-L30)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AfterBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AkMarginXItemChanged` · L31–31

[Drilling.UI/Menu/CBindingBase.cs:31–31](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L31-L31)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AkMarginXItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AkMarginYItemChanged` · L32–32

[Drilling.UI/Menu/CBindingBase.cs:32–32](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L32-L32)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AkMarginYItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AlarmChanged` · L33–33

[Drilling.UI/Menu/CBindingBase.cs:33–33](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L33-L33)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AlarmChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AlarmBrushChanged` · L34–34

[Drilling.UI/Menu/CBindingBase.cs:34–34](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L34-L34)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AlarmBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AlarmDetailChanged` · L35–35

[Drilling.UI/Menu/CBindingBase.cs:35–35](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L35-L35)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AlarmDetailChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AlarmResetCommandChanged` · L36–36

[Drilling.UI/Menu/CBindingBase.cs:36–36](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L36-L36)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AlarmResetCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AllInterfaceRowsChanged` · L37–37

[Drilling.UI/Menu/CBindingBase.cs:37–37](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L37-L37)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AllInterfaceRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AllManagedItemsChanged` · L38–38

[Drilling.UI/Menu/CBindingBase.cs:38–38](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L38-L38)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AllManagedItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AllParameterRowsChanged` · L39–39

[Drilling.UI/Menu/CBindingBase.cs:39–39](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L39-L39)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AllParameterRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ApplyOneHoleReviewOffsetCommandChanged` · L40–40

[Drilling.UI/Menu/CBindingBase.cs:40–40](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L40-L40)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ApplyOneHoleReviewOffsetCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ApplyPreviewRowsChanged` · L41–41

[Drilling.UI/Menu/CBindingBase.cs:41–41](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L41-L41)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ApplyPreviewRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ApplyRowsChanged` · L42–42

[Drilling.UI/Menu/CBindingBase.cs:42–42](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L42-L42)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ApplyRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `Arg1Changed` · L43–43

[Drilling.UI/Menu/CBindingBase.cs:43–43](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L43-L43)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg1Changed |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `Arg2Changed` · L44–44

[Drilling.UI/Menu/CBindingBase.cs:44–44](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L44-L44)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg2Changed |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `Arg3Changed` · L45–45

[Drilling.UI/Menu/CBindingBase.cs:45–45](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L45-L45)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg3Changed |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `Arg4Changed` · L46–46

[Drilling.UI/Menu/CBindingBase.cs:46–46](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L46-L46)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg4Changed |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `Arg5Changed` · L47–47

[Drilling.UI/Menu/CBindingBase.cs:47–47](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L47-L47)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.Arg5Changed |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AttenuatorSettingItemsChanged` · L48–48

[Drilling.UI/Menu/CBindingBase.cs:48–48](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L48-L48)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AttenuatorSettingItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AttenuatorStateBrushChanged` · L49–49

[Drilling.UI/Menu/CBindingBase.cs:49–49](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L49-L49)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AttenuatorStateBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AttenuatorStatusItemsChanged` · L50–50

[Drilling.UI/Menu/CBindingBase.cs:50–50](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L50-L50)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AttenuatorStatusItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AttenuatorTextChanged` · L51–51

[Drilling.UI/Menu/CBindingBase.cs:51–51](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L51-L51)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AttenuatorTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AutoConnectionChanged` · L52–52

[Drilling.UI/Menu/CBindingBase.cs:52–52](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L52-L52)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AutoConnectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AutoConnectionOptionsChanged` · L53–53

[Drilling.UI/Menu/CBindingBase.cs:53–53](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L53-L53)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AutoConnectionOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AutomationControllerStatusItemsChanged` · L54–54

[Drilling.UI/Menu/CBindingBase.cs:54–54](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L54-L54)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AutomationControllerStatusItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AxisChanged` · L55–55

[Drilling.UI/Menu/CBindingBase.cs:55–55](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L55-L55)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AxisChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AxisIdChanged` · L56–56

[Drilling.UI/Menu/CBindingBase.cs:56–56](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L56-L56)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AxisIdChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `AxisRowsChanged` · L57–57

[Drilling.UI/Menu/CBindingBase.cs:57–57](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L57-L57)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.AxisRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BackgroundBrushChanged` · L58–58

[Drilling.UI/Menu/CBindingBase.cs:58–58](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L58-L58)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackgroundBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BackToCellPreviewCommandChanged` · L59–59

[Drilling.UI/Menu/CBindingBase.cs:59–59](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L59-L59)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToCellPreviewCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BackToCoordinateGlassPreviewCommandChanged` · L60–60

[Drilling.UI/Menu/CBindingBase.cs:60–60](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L60-L60)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToCoordinateGlassPreviewCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BackToOneHoleCellMapCommandChanged` · L61–61

[Drilling.UI/Menu/CBindingBase.cs:61–61](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L61-L61)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToOneHoleCellMapCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BackToOneHoleHoleMapCommandChanged` · L62–62

[Drilling.UI/Menu/CBindingBase.cs:62–62](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L62-L62)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToOneHoleHoleMapCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BackToRunGlassPreviewCommandChanged` · L63–63

[Drilling.UI/Menu/CBindingBase.cs:63–63](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L63-L63)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToRunGlassPreviewCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BackToRunShotMapCommandChanged` · L64–64

[Drilling.UI/Menu/CBindingBase.cs:64–64](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L64-L64)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToRunShotMapCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BackToSampleGlassPreviewCommandChanged` · L65–65

[Drilling.UI/Menu/CBindingBase.cs:65–65](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L65-L65)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BackToSampleGlassPreviewCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BaseCenterXChanged` · L66–66

[Drilling.UI/Menu/CBindingBase.cs:66–66](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L66-L66)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BaseCenterXChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BaseCenterYChanged` · L67–67

[Drilling.UI/Menu/CBindingBase.cs:67–67](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L67-L67)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BaseCenterYChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BeamOptionsChanged` · L68–68

[Drilling.UI/Menu/CBindingBase.cs:68–68](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L68-L68)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BeamOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BeamSelectionSummaryChanged` · L69–69

[Drilling.UI/Menu/CBindingBase.cs:69–69](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L69-L69)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BeamSelectionSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BetDivergenceTextChanged` · L70–70

[Drilling.UI/Menu/CBindingBase.cs:70–70](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L70-L70)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BetDivergenceTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BetMagnificationTextChanged` · L71–71

[Drilling.UI/Menu/CBindingBase.cs:71–71](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L71-L71)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BetMagnificationTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BetStateBrushChanged` · L72–72

[Drilling.UI/Menu/CBindingBase.cs:72–72](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L72-L72)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BetStateBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BetTableRowsChanged` · L73–73

[Drilling.UI/Menu/CBindingBase.cs:73–73](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L73-L73)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BetTableRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BlockedItemsChanged` · L74–74

[Drilling.UI/Menu/CBindingBase.cs:74–74](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L74-L74)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BlockedItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BorderBrushChanged` · L75–75

[Drilling.UI/Menu/CBindingBase.cs:75–75](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L75-L75)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BorderBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `BuzzerOffCommandChanged` · L76–76

[Drilling.UI/Menu/CBindingBase.cs:76–76](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L76-L76)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.BuzzerOffCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CalculatedOffsetRowsChanged` · L77–77

[Drilling.UI/Menu/CBindingBase.cs:77–77](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L77-L77)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CalculatedOffsetRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanApplyOneHoleReviewOffsetChanged` · L78–78

[Drilling.UI/Menu/CBindingBase.cs:78–78](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L78-L78)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanApplyOneHoleReviewOffsetChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CancelCommandChanged` · L79–79

[Drilling.UI/Menu/CBindingBase.cs:79–79](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L79-L79)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CancelCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CandidateRowsChanged` · L80–80

[Drilling.UI/Menu/CBindingBase.cs:80–80](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L80-L80)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CandidateRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanOperateSelectedInterfaceChanged` · L81–81

[Drilling.UI/Menu/CBindingBase.cs:81–81](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L81-L81)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanOperateSelectedInterfaceChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanReadChanged` · L82–82

[Drilling.UI/Menu/CBindingBase.cs:82–82](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L82-L82)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanReadChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanLoadBeamInspectionResultChanged` · L83–83

[Drilling.UI/Menu/CBindingBase.cs:83–83](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L83-L83)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanLoadBeamInspectionResultChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanClearLoadedBeamInspectionResultChanged` · L84–84

[Drilling.UI/Menu/CBindingBase.cs:84–84](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L84-L84)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanClearLoadedBeamInspectionResultChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanSelectBeamChanged` · L85–85

[Drilling.UI/Menu/CBindingBase.cs:85–85](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L85-L85)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanSelectBeamChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanSelectInspectionMethodChanged` · L86–86

[Drilling.UI/Menu/CBindingBase.cs:86–86](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L86-L86)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanSelectInspectionMethodChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CanWriteChanged` · L87–87

[Drilling.UI/Menu/CBindingBase.cs:87–87](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L87-L87)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CanWriteChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CAppStartupChanged` · L88–88

[Drilling.UI/Menu/CBindingBase.cs:88–88](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L88-L88)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CAppStartupChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CategoryChanged` · L89–89

[Drilling.UI/Menu/CBindingBase.cs:89–89](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L89-L89)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CategoryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CButtonCommandBehaviorChanged` · L90–90

[Drilling.UI/Menu/CBindingBase.cs:90–90](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L90-L90)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CButtonCommandBehaviorChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellMapDesignHeightChanged` · L91–91

[Drilling.UI/Menu/CBindingBase.cs:91–91](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L91-L91)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellMapDesignHeightChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellMapDesignWidthChanged` · L92–92

[Drilling.UI/Menu/CBindingBase.cs:92–92](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L92-L92)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellMapDesignWidthChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellNoChanged` · L93–93

[Drilling.UI/Menu/CBindingBase.cs:93–93](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L93-L93)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellNoChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellModelTypeCountItemChanged` · L94–94

[Drilling.UI/Menu/CBindingBase.cs:94–94](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L94-L94)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellModelTypeCountItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellOverviewRowsChanged` · L95–95

[Drilling.UI/Menu/CBindingBase.cs:95–95](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L95-L95)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellOverviewRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellPreviewImageChanged` · L96–96

[Drilling.UI/Menu/CBindingBase.cs:96–96](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L96-L96)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellPreviewImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellPreviewLabelsChanged` · L97–97

[Drilling.UI/Menu/CBindingBase.cs:97–97](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L97-L97)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellPreviewLabelsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellShotMapImageChanged` · L98–98

[Drilling.UI/Menu/CBindingBase.cs:98–98](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L98-L98)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellShotMapImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CenterMoveCommandChanged` · L99–99

[Drilling.UI/Menu/CBindingBase.cs:99–99](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L99-L99)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CenterMoveCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CenterOnCommandChanged` · L100–100

[Drilling.UI/Menu/CBindingBase.cs:100–100](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L100-L100)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CenterOnCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CenterXTextChanged` · L101–101

[Drilling.UI/Menu/CBindingBase.cs:101–101](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L101-L101)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CenterXTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CenterYTextChanged` · L102–102

[Drilling.UI/Menu/CBindingBase.cs:102–102](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L102-L102)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CenterYTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ChangeHistoryChanged` · L103–103

[Drilling.UI/Menu/CBindingBase.cs:103–103](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L103-L103)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ChangeHistoryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ChangeLimitChanged` · L104–104

[Drilling.UI/Menu/CBindingBase.cs:104–104](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L104-L104)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ChangeLimitChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ChessItemChanged` · L105–105

[Drilling.UI/Menu/CBindingBase.cs:105–105](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L105-L105)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ChessItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CInterfaceStatusRowChanged` · L106–106

[Drilling.UI/Menu/CBindingBase.cs:106–106](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L106-L106)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CInterfaceStatusRowChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ColumnChanged` · L107–107

[Drilling.UI/Menu/CBindingBase.cs:107–107](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L107-L107)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ColumnChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandBlueChanged` · L108–108

[Drilling.UI/Menu/CBindingBase.cs:108–108](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L108-L108)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandBlueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandBlueBorderChanged` · L109–109

[Drilling.UI/Menu/CBindingBase.cs:109–109](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L109-L109)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandBlueBorderChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandDarkChanged` · L110–110

[Drilling.UI/Menu/CBindingBase.cs:110–110](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L110-L110)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandDarkChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandDarkBorderChanged` · L111–111

[Drilling.UI/Menu/CBindingBase.cs:111–111](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L111-L111)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandDarkBorderChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandGreenChanged` · L112–112

[Drilling.UI/Menu/CBindingBase.cs:112–112](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L112-L112)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandGreenChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandGreenBorderChanged` · L113–113

[Drilling.UI/Menu/CBindingBase.cs:113–113](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L113-L113)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandGreenBorderChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandHistoryRowsChanged` · L114–114

[Drilling.UI/Menu/CBindingBase.cs:114–114](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L114-L114)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandHistoryRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandLabelChanged` · L115–115

[Drilling.UI/Menu/CBindingBase.cs:115–115](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L115-L115)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandLabelChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandOpacityChanged` · L116–116

[Drilling.UI/Menu/CBindingBase.cs:116–116](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L116-L116)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandOpacityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandPropertyChanged` · L117–117

[Drilling.UI/Menu/CBindingBase.cs:117–117](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L117-L117)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandRedChanged` · L118–118

[Drilling.UI/Menu/CBindingBase.cs:118–118](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L118-L118)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandRedChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandRedBorderChanged` · L119–119

[Drilling.UI/Menu/CBindingBase.cs:119–119](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L119-L119)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandRedBorderChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandStateItemsChanged` · L120–120

[Drilling.UI/Menu/CBindingBase.cs:120–120](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L120-L120)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandStateItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CommandStateRowsChanged` · L121–121

[Drilling.UI/Menu/CBindingBase.cs:121–121](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L121-L121)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CommandStateRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ConnectInterfaceCommandChanged` · L122–122

[Drilling.UI/Menu/CBindingBase.cs:122–122](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L122-L122)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ConnectInterfaceCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ContainerHeightPropertyChanged` · L123–123

[Drilling.UI/Menu/CBindingBase.cs:123–123](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L123-L123)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ContainerHeightPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ContainerWidthPropertyChanged` · L124–124

[Drilling.UI/Menu/CBindingBase.cs:124–124](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L124-L124)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ContainerWidthPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ControllerTaskTextChanged` · L125–125

[Drilling.UI/Menu/CBindingBase.cs:125–125](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L125-L125)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ControllerTaskTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateBasisDescriptionChanged` · L126–126

[Drilling.UI/Menu/CBindingBase.cs:126–126](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L126-L126)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateBasisDescriptionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateBasisOptionsChanged` · L127–127

[Drilling.UI/Menu/CBindingBase.cs:127–127](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L127-L127)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateBasisOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateCellPreviewLabelsChanged` · L128–128

[Drilling.UI/Menu/CBindingBase.cs:128–128](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L128-L128)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateCellPreviewLabelsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateGlassPreviewImageChanged` · L129–129

[Drilling.UI/Menu/CBindingBase.cs:129–129](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L129-L129)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateGlassPreviewImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateGlassPreviewSummaryChanged` · L130–130

[Drilling.UI/Menu/CBindingBase.cs:130–130](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L130-L130)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateGlassPreviewSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateIsCellDetailVisibleChanged` · L131–131

[Drilling.UI/Menu/CBindingBase.cs:131–131](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L131-L131)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateIsCellDetailVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateIsGlassPreviewVisibleChanged` · L132–132

[Drilling.UI/Menu/CBindingBase.cs:132–132](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L132-L132)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateIsGlassPreviewVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateSelectedBasisNameChanged` · L133–133

[Drilling.UI/Menu/CBindingBase.cs:133–133](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L133-L133)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateSelectedBasisNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateSelectedCellNameChanged` · L134–134

[Drilling.UI/Menu/CBindingBase.cs:134–134](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L134-L134)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateSelectedCellNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateSelectedRecipeNameChanged` · L135–135

[Drilling.UI/Menu/CBindingBase.cs:135–135](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L135-L135)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateSelectedRecipeNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateSelectedShotNameChanged` · L136–136

[Drilling.UI/Menu/CBindingBase.cs:136–136](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L136-L136)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateSelectedShotNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateShotMatrixRowsChanged` · L137–137

[Drilling.UI/Menu/CBindingBase.cs:137–137](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L137-L137)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateShotMatrixRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CoordinateValueRowsChanged` · L138–138

[Drilling.UI/Menu/CBindingBase.cs:138–138](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L138-L138)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CoordinateValueRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CorrectedCenterXChanged` · L139–139

[Drilling.UI/Menu/CBindingBase.cs:139–139](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L139-L139)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CorrectedCenterXChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CorrectedCenterYChanged` · L140–140

[Drilling.UI/Menu/CBindingBase.cs:140–140](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L140-L140)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CorrectedCenterYChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CorrectionChanged` · L141–141

[Drilling.UI/Menu/CBindingBase.cs:141–141](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L141-L141)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CorrectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CPreviewCoordinateBehaviorChanged` · L142–142

[Drilling.UI/Menu/CBindingBase.cs:142–142](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L142-L142)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CPreviewCoordinateBehaviorChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CreateCommandChanged` · L143–143

[Drilling.UI/Menu/CBindingBase.cs:143–143](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L143-L143)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CreateCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CThemeManagerChanged` · L144–144

[Drilling.UI/Menu/CBindingBase.cs:144–144](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L144-L144)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CThemeManagerChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentAlarmRowsChanged` · L145–145

[Drilling.UI/Menu/CBindingBase.cs:145–145](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L145-L145)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentAlarmRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentAlarmsChanged` · L146–146

[Drilling.UI/Menu/CBindingBase.cs:146–146](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L146-L146)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentAlarmsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentCellIndicatorTextChanged` · L147–147

[Drilling.UI/Menu/CBindingBase.cs:147–147](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L147-L147)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentCellIndicatorTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentDateTextChanged` · L148–148

[Drilling.UI/Menu/CBindingBase.cs:148–148](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L148-L148)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentDateTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentOffsetRowsChanged` · L149–149

[Drilling.UI/Menu/CBindingBase.cs:149–149](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L149-L149)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentOffsetRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentPositionChanged` · L150–150

[Drilling.UI/Menu/CBindingBase.cs:150–150](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L150-L150)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentPositionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentReviewOffsetRecipeNameChanged` · L151–151

[Drilling.UI/Menu/CBindingBase.cs:151–151](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L151-L151)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentReviewOffsetRecipeNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentScreenChanged` · L152–152

[Drilling.UI/Menu/CBindingBase.cs:152–152](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L152-L152)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentScreenChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentSettingStateChanged` · L153–153

[Drilling.UI/Menu/CBindingBase.cs:153–153](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L153-L153)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentSettingStateChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentStepDetailsChanged` · L154–154

[Drilling.UI/Menu/CBindingBase.cs:154–154](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L154-L154)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentStepDetailsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentThemeChanged` · L155–155

[Drilling.UI/Menu/CBindingBase.cs:155–155](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L155-L155)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentThemeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentTimeTextChanged` · L156–156

[Drilling.UI/Menu/CBindingBase.cs:156–156](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L156-L156)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentTimeTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentUserTextChanged` · L157–157

[Drilling.UI/Menu/CBindingBase.cs:157–157](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L157-L157)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentUserTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CurrentValueBrushChanged` · L158–158

[Drilling.UI/Menu/CBindingBase.cs:158–158](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L158-L158)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CurrentValueBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CycleItemsChanged` · L159–159

[Drilling.UI/Menu/CBindingBase.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L159-L159)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CycleItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DataTypeChanged` · L160–160

[Drilling.UI/Menu/CBindingBase.cs:160–160](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L160-L160)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DataTypeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DefaultChanged` · L161–161

[Drilling.UI/Menu/CBindingBase.cs:161–161](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L161-L161)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DefaultChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DefaultValueChanged` · L162–162

[Drilling.UI/Menu/CBindingBase.cs:162–162](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L162-L162)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DefaultValueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DeleteCommandChanged` · L163–163

[Drilling.UI/Menu/CBindingBase.cs:163–163](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L163-L163)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DeleteCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DescriptionChanged` · L164–164

[Drilling.UI/Menu/CBindingBase.cs:164–164](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L164-L164)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DescriptionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DesignHeightPropertyChanged` · L165–165

[Drilling.UI/Menu/CBindingBase.cs:165–165](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L165-L165)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DesignHeightPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DesignWidthPropertyChanged` · L166–166

[Drilling.UI/Menu/CBindingBase.cs:166–166](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L166-L166)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DesignWidthPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DetailChanged` · L167–167

[Drilling.UI/Menu/CBindingBase.cs:167–167](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L167-L167)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DetailBrushChanged` · L168–168

[Drilling.UI/Menu/CBindingBase.cs:168–168](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L168-L168)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DetailItemsChanged` · L169–169

[Drilling.UI/Menu/CBindingBase.cs:169–169](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L169-L169)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DetailRowsChanged` · L170–170

[Drilling.UI/Menu/CBindingBase.cs:170–170](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L170-L170)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DetailTextChanged` · L171–171

[Drilling.UI/Menu/CBindingBase.cs:171–171](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L171-L171)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DetailTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DeviceChanged` · L172–172

[Drilling.UI/Menu/CBindingBase.cs:172–172](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L172-L172)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DeviceChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DeviceNoChanged` · L173–173

[Drilling.UI/Menu/CBindingBase.cs:173–173](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L173-L173)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DeviceNoChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DeviceTabsChanged` · L174–174

[Drilling.UI/Menu/CBindingBase.cs:174–174](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L174-L174)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DeviceTabsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DioAddressChanged` · L175–175

[Drilling.UI/Menu/CBindingBase.cs:175–175](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L175-L175)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioAddressChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DioAxisNameChanged` · L176–176

[Drilling.UI/Menu/CBindingBase.cs:176–176](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L176-L176)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioAxisNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DioCurrentValueChanged` · L177–177

[Drilling.UI/Menu/CBindingBase.cs:177–177](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L177-L177)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioCurrentValueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DioLastResultChanged` · L178–178

[Drilling.UI/Menu/CBindingBase.cs:178–178](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L178-L178)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioLastResultChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DioNoChanged` · L179–179

[Drilling.UI/Menu/CBindingBase.cs:179–179](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L179-L179)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioNoChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DioOffCommandChanged` · L180–180

[Drilling.UI/Menu/CBindingBase.cs:180–180](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L180-L180)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioOffCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DioOnCommandChanged` · L181–181

[Drilling.UI/Menu/CBindingBase.cs:181–181](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L181-L181)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioOnCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DioReadCommandChanged` · L182–182

[Drilling.UI/Menu/CBindingBase.cs:182–182](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L182-L182)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DioReadCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DirectionChanged` · L183–183

[Drilling.UI/Menu/CBindingBase.cs:183–183](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L183-L183)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DirectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DisconnectInterfaceCommandChanged` · L184–184

[Drilling.UI/Menu/CBindingBase.cs:184–184](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L184-L184)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DisconnectInterfaceCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DisplayAxisChanged` · L185–185

[Drilling.UI/Menu/CBindingBase.cs:185–185](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L185-L185)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DisplayAxisChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DisplayLabelChanged` · L186–186

[Drilling.UI/Menu/CBindingBase.cs:186–186](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L186-L186)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DisplayLabelChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DisplayTextChanged` · L187–187

[Drilling.UI/Menu/CBindingBase.cs:187–187](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L187-L187)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DisplayTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DistortionKeyItemsChanged` · L188–188

[Drilling.UI/Menu/CBindingBase.cs:188–188](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L188-L188)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DistortionKeyItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `DivChanged` · L189–189

[Drilling.UI/Menu/CBindingBase.cs:189–189](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L189-L189)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.DivChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ElapsedTimeTextChanged` · L190–190

[Drilling.UI/Menu/CBindingBase.cs:190–190](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L190-L190)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ElapsedTimeTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ElementHeightPropertyChanged` · L191–191

[Drilling.UI/Menu/CBindingBase.cs:191–191](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L191-L191)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ElementHeightPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ElementWidthPropertyChanged` · L192–192

[Drilling.UI/Menu/CBindingBase.cs:192–192](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L192-L192)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ElementWidthPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `EmptyChanged` · L193–193

[Drilling.UI/Menu/CBindingBase.cs:193–193](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L193-L193)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EmptyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `EN_MENUChanged` · L194–194

[Drilling.UI/Menu/CBindingBase.cs:194–194](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L194-L194)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EN_MENUChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `EN_UI_THEMEChanged` · L195–195

[Drilling.UI/Menu/CBindingBase.cs:195–195](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L195-L195)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EN_UI_THEMEChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `EndpointChanged` · L196–196

[Drilling.UI/Menu/CBindingBase.cs:196–196](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L196-L196)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EndpointChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ErrorBrushChanged` · L197–197

[Drilling.UI/Menu/CBindingBase.cs:197–197](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L197-L197)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ErrorBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ErrorXChanged` · L198–198

[Drilling.UI/Menu/CBindingBase.cs:198–198](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L198-L198)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ErrorXChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ErrorYChanged` · L199–199

[Drilling.UI/Menu/CBindingBase.cs:199–199](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L199-L199)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ErrorYChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `EstimatedTimeTextChanged` · L200–200

[Drilling.UI/Menu/CBindingBase.cs:200–200](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L200-L200)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EstimatedTimeTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `EvenHeadPreviewsChanged` · L201–201

[Drilling.UI/Menu/CBindingBase.cs:201–201](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L201-L201)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.EvenHeadPreviewsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ExecuteCommandChanged` · L202–202

[Drilling.UI/Menu/CBindingBase.cs:202–202](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L202-L202)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ExecuteCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ExecuteOperationCommandChanged` · L203–203

[Drilling.UI/Menu/CBindingBase.cs:203–203](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L203-L203)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ExecuteOperationCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ExtraChanged` · L204–204

[Drilling.UI/Menu/CBindingBase.cs:204–204](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L204-L204)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ExtraChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `FileTextChanged` · L205–205

[Drilling.UI/Menu/CBindingBase.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L205-L205)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.FileTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `FirstXChanged` · L206–206

[Drilling.UI/Menu/CBindingBase.cs:206–206](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L206-L206)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.FirstXChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `FirstYChanged` · L207–207

[Drilling.UI/Menu/CBindingBase.cs:207–207](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L207-L207)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.FirstYChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `FooterStatusItemsChanged` · L208–208

[Drilling.UI/Menu/CBindingBase.cs:208–208](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L208-L208)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.FooterStatusItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GlassFrameChanged` · L209–209

[Drilling.UI/Menu/CBindingBase.cs:209–209](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L209-L209)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GlassFrameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GlassPreviewSummaryChanged` · L210–210

[Drilling.UI/Menu/CBindingBase.cs:210–210](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L210-L210)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GlassPreviewSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GlassSizeXItemChanged` · L211–211

[Drilling.UI/Menu/CBindingBase.cs:211–211](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L211-L211)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GlassSizeXItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GlassSizeYItemChanged` · L212–212

[Drilling.UI/Menu/CBindingBase.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L212-L212)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GlassSizeYItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GridColLinesChanged` · L213–213

[Drilling.UI/Menu/CBindingBase.cs:213–213](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L213-L213)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GridColLinesChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GridRowLinesChanged` · L214–214

[Drilling.UI/Menu/CBindingBase.cs:214–214](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L214-L214)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GridRowLinesChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GroupChanged` · L215–215

[Drilling.UI/Menu/CBindingBase.cs:215–215](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L215-L215)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GroupChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GroupItemsChanged` · L216–216

[Drilling.UI/Menu/CBindingBase.cs:216–216](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L216-L216)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GroupItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `GroupTabsChanged` · L217–217

[Drilling.UI/Menu/CBindingBase.cs:217–217](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L217-L217)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.GroupTabsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HasCommandChanged` · L218–218

[Drilling.UI/Menu/CBindingBase.cs:218–218](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L218-L218)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HasCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HasResultChanged` · L219–219

[Drilling.UI/Menu/CBindingBase.cs:219–219](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L219-L219)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HasResultChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadAssignmentAreasChanged` · L220–220

[Drilling.UI/Menu/CBindingBase.cs:220–220](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L220-L220)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadAssignmentAreasChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadCardsChanged` · L221–221

[Drilling.UI/Menu/CBindingBase.cs:221–221](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L221-L221)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadCardsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadGroupsChanged` · L222–222

[Drilling.UI/Menu/CBindingBase.cs:222–222](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L222-L222)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadGroupsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadDeviceSelectorTitleChanged` · L223–223

[Drilling.UI/Menu/CBindingBase.cs:223–223](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L223-L223)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadDeviceSelectorTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeaderStatusItemsChanged` · L224–224

[Drilling.UI/Menu/CBindingBase.cs:224–224](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L224-L224)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeaderStatusItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadParametersChanged` · L225–225

[Drilling.UI/Menu/CBindingBase.cs:225–225](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L225-L225)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadParametersChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadParameterVisibilityChanged` · L226–226

[Drilling.UI/Menu/CBindingBase.cs:226–226](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L226-L226)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadParameterVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadPreviewImageChanged` · L227–227

[Drilling.UI/Menu/CBindingBase.cs:227–227](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L227-L227)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadPreviewImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadPreviewLabelsChanged` · L228–228

[Drilling.UI/Menu/CBindingBase.cs:228–228](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L228-L228)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadPreviewLabelsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadPreviewsChanged` · L229–229

[Drilling.UI/Menu/CBindingBase.cs:229–229](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L229-L229)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadPreviewsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadPreviewSummaryTextChanged` · L230–230

[Drilling.UI/Menu/CBindingBase.cs:230–230](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L230-L230)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadPreviewSummaryTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeadSelectRowsChanged` · L231–231

[Drilling.UI/Menu/CBindingBase.cs:231–231](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L231-L231)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeadSelectRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HeightChanged` · L232–232

[Drilling.UI/Menu/CBindingBase.cs:232–232](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L232-L232)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HeightChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HistoryChanged` · L233–233

[Drilling.UI/Menu/CBindingBase.cs:233–233](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L233-L233)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HistoryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HistoryPanelTitleChanged` · L234–234

[Drilling.UI/Menu/CBindingBase.cs:234–234](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L234-L234)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HistoryPanelTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HistoryRowsChanged` · L235–235

[Drilling.UI/Menu/CBindingBase.cs:235–235](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L235-L235)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HistoryRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `HomeBrushChanged` · L236–236

[Drilling.UI/Menu/CBindingBase.cs:236–236](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L236-L236)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.HomeBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IconGeometryChanged` · L237–237

[Drilling.UI/Menu/CBindingBase.cs:237–237](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L237-L237)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IconGeometryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IdChanged` · L238–238

[Drilling.UI/Menu/CBindingBase.cs:238–238](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L238-L238)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IdChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionModeTextChanged` · L239–239

[Drilling.UI/Menu/CBindingBase.cs:239–239](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L239-L239)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionModeTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionMethodItemsChanged` · L240–240

[Drilling.UI/Menu/CBindingBase.cs:240–240](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L240-L240)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionMethodItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionRuleTextChanged` · L241–241

[Drilling.UI/Menu/CBindingBase.cs:241–241](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L241-L241)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionRuleTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionRuleVisibilityChanged` · L242–242

[Drilling.UI/Menu/CBindingBase.cs:242–242](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L242-L242)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionRuleVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionStatusItemsChanged` · L243–243

[Drilling.UI/Menu/CBindingBase.cs:243–243](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L243-L243)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionStatusItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionSummaryChanged` · L244–244

[Drilling.UI/Menu/CBindingBase.cs:244–244](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L244-L244)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InterfaceRowsChanged` · L245–245

[Drilling.UI/Menu/CBindingBase.cs:245–245](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L245-L245)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InterfaceRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InterfaceTypeChanged` · L246–246

[Drilling.UI/Menu/CBindingBase.cs:246–246](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L246-L246)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InterfaceTypeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InterlockItemsChanged` · L247–247

[Drilling.UI/Menu/CBindingBase.cs:247–247](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L247-L247)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InterlockItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsAlarmLayoutChanged` · L248–248

[Drilling.UI/Menu/CBindingBase.cs:248–248](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L248-L248)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAlarmLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsAttenuatorChanged` · L249–249

[Drilling.UI/Menu/CBindingBase.cs:249–249](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L249-L249)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAttenuatorChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsBetChanged` · L250–250

[Drilling.UI/Menu/CBindingBase.cs:250–250](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L250-L250)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsBetChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsBooleanChanged` · L251–251

[Drilling.UI/Menu/CBindingBase.cs:251–251](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L251-L251)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsBooleanChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsCellCategoryChanged` · L252–252

[Drilling.UI/Menu/CBindingBase.cs:252–252](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L252-L252)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCellCategoryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsCellDetailVisibleChanged` · L253–253

[Drilling.UI/Menu/CBindingBase.cs:253–253](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L253-L253)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCellDetailVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsCellPreviewVisibleChanged` · L254–254

[Drilling.UI/Menu/CBindingBase.cs:254–254](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L254-L254)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCellPreviewVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsControlDeviceChanged` · L255–255

[Drilling.UI/Menu/CBindingBase.cs:255–255](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L255-L255)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsControlDeviceChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsCoordinateViewerChanged` · L256–256

[Drilling.UI/Menu/CBindingBase.cs:256–256](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L256-L256)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCoordinateViewerChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsLogViewerChanged` · L257–257

[Drilling.UI/Menu/CBindingBase.cs:257–257](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L257-L257)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLogViewerChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsCorrectionLayoutChanged` · L258–258

[Drilling.UI/Menu/CBindingBase.cs:258–258](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L258-L258)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCorrectionLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsAlignDistortionTabChanged` · L259–259

[Drilling.UI/Menu/CBindingBase.cs:259–259](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L259-L259)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAlignDistortionTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsCorrectionCommandsVisibleChanged` · L260–260

[Drilling.UI/Menu/CBindingBase.cs:260–260](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L260-L260)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCorrectionCommandsVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOutputHistoryTabChanged` · L261–261

[Drilling.UI/Menu/CBindingBase.cs:261–261](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L261-L261)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOutputHistoryTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsCurrentChanged` · L262–262

[Drilling.UI/Menu/CBindingBase.cs:262–262](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L262-L262)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsCurrentChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsDioControlBusyChanged` · L263–263

[Drilling.UI/Menu/CBindingBase.cs:263–263](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L263-L263)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioControlBusyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsDioControlEnabledChanged` · L264–264

[Drilling.UI/Menu/CBindingBase.cs:264–264](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L264-L264)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioControlEnabledChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsDioOffChanged` · L265–265

[Drilling.UI/Menu/CBindingBase.cs:265–265](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L265-L265)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioOffChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsDioOnChanged` · L266–266

[Drilling.UI/Menu/CBindingBase.cs:266–266](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L266-L266)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioOnChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsDioTargetReadyChanged` · L267–267

[Drilling.UI/Menu/CBindingBase.cs:267–267](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L267-L267)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsDioTargetReadyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsEditableChanged` · L268–268

[Drilling.UI/Menu/CBindingBase.cs:268–268](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L268-L268)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsEditableChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsEditedChanged` · L269–269

[Drilling.UI/Menu/CBindingBase.cs:269–269](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L269-L269)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsEditedChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsEnabledChanged` · L270–270

[Drilling.UI/Menu/CBindingBase.cs:270–270](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L270-L270)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsEnabledChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsGenericDeviceChanged` · L271–271

[Drilling.UI/Menu/CBindingBase.cs:271–271](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L271-L271)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsGenericDeviceChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsGenericLayoutChanged` · L272–272

[Drilling.UI/Menu/CBindingBase.cs:272–272](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L272-L272)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsGenericLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsHeadCategoryChanged` · L273–273

[Drilling.UI/Menu/CBindingBase.cs:273–273](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L273-L273)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsHeadCategoryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsInsideGlassChanged` · L274–274

[Drilling.UI/Menu/CBindingBase.cs:274–274](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L274-L274)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsInsideGlassChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsInterfaceTabChanged` · L275–275

[Drilling.UI/Menu/CBindingBase.cs:275–275](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L275-L275)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsInterfaceTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsLaserChanged` · L276–276

[Drilling.UI/Menu/CBindingBase.cs:276–276](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L276-L276)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLaserChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsLaserCountModeChanged` · L277–277

[Drilling.UI/Menu/CBindingBase.cs:277–277](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L277-L277)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLaserCountModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsLaserTimeModeChanged` · L278–278

[Drilling.UI/Menu/CBindingBase.cs:278–278](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L278-L278)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLaserTimeModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsMainLayoutChanged` · L279–279

[Drilling.UI/Menu/CBindingBase.cs:279–279](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L279-L279)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMainLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsManualLayoutChanged` · L280–280

[Drilling.UI/Menu/CBindingBase.cs:280–280](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L280-L280)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsManualShiftOffsetVisibleChanged` · L281–281

[Drilling.UI/Menu/CBindingBase.cs:281–281](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L281-L281)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualShiftOffsetVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsMelsecChanged` · L282–282

[Drilling.UI/Menu/CBindingBase.cs:282–282](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L282-L282)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMelsecChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsMelsecWriteLockVisibleChanged` · L283–283

[Drilling.UI/Menu/CBindingBase.cs:283–283](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L283-L283)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMelsecWriteLockVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsMelsecWriteUnlockedChanged` · L284–284

[Drilling.UI/Menu/CBindingBase.cs:284–284](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L284-L284)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMelsecWriteUnlockedChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsModifiedChanged` · L285–285

[Drilling.UI/Menu/CBindingBase.cs:285–285](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L285-L285)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsModifiedChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsMonitorLayoutChanged` · L286–286

[Drilling.UI/Menu/CBindingBase.cs:286–286](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L286-L286)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMonitorLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsMotorChanged` · L287–287

[Drilling.UI/Menu/CBindingBase.cs:287–287](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L287-L287)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsMotorChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOneHoleBeamMapChanged` · L288–288

[Drilling.UI/Menu/CBindingBase.cs:288–288](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L288-L288)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleBeamMapChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOneHoleCellMapChanged` · L289–289

[Drilling.UI/Menu/CBindingBase.cs:289–289](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L289-L289)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleCellMapChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOneHoleDetailMapChanged` · L290–290

[Drilling.UI/Menu/CBindingBase.cs:290–290](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L290-L290)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleDetailMapChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOneHoleHoleMapChanged` · L291–291

[Drilling.UI/Menu/CBindingBase.cs:291–291](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L291-L291)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleHoleMapChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOneHoleTabChanged` · L292–292

[Drilling.UI/Menu/CBindingBase.cs:292–292](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L292-L292)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneHoleTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOtherCorrectionTabChanged` · L293–293

[Drilling.UI/Menu/CBindingBase.cs:293–293](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L293-L293)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOtherCorrectionTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsParameterTabChanged` · L294–294

[Drilling.UI/Menu/CBindingBase.cs:294–294](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L294-L294)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsParameterTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsPicoMotorChanged` · L295–295

[Drilling.UI/Menu/CBindingBase.cs:295–295](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L295-L295)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsPicoMotorChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsPmLayoutChanged` · L296–296

[Drilling.UI/Menu/CBindingBase.cs:296–296](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L296-L296)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsPmLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsPowerMeterChanged` · L297–297

[Drilling.UI/Menu/CBindingBase.cs:297–297](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L297-L297)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsPowerMeterChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsProductChanged` · L298–298

[Drilling.UI/Menu/CBindingBase.cs:298–298](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L298-L298)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsProductChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsReadOnlyChanged` · L299–299

[Drilling.UI/Menu/CBindingBase.cs:299–299](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L299-L299)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsReadOnlyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRecipeLayoutChanged` · L300–300

[Drilling.UI/Menu/CBindingBase.cs:300–300](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L300-L300)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRecipeLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsReviewLayoutChanged` · L301–301

[Drilling.UI/Menu/CBindingBase.cs:301–301](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L301-L301)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsReviewLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsAllShotReviewModeChanged` · L302–302

[Drilling.UI/Menu/CBindingBase.cs:302–302](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L302-L302)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAllShotReviewModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsAllShotStyleReviewModeChanged` · L303–303

[Drilling.UI/Menu/CBindingBase.cs:303–303](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L303-L303)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsAllShotStyleReviewModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRuleReviewModeChanged` · L304–304

[Drilling.UI/Menu/CBindingBase.cs:304–304](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L304-L304)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRuleReviewModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsBeamInspectionModeChanged` · L305–305

[Drilling.UI/Menu/CBindingBase.cs:305–305](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L305-L305)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsBeamInspectionModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsBeamSelectionVisibleChanged` · L306–306

[Drilling.UI/Menu/CBindingBase.cs:306–306](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L306-L306)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsBeamSelectionVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsLastMeasurementVisibleChanged` · L307–307

[Drilling.UI/Menu/CBindingBase.cs:307–307](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L307-L307)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsLastMeasurementVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRunBeamDetailVisibleChanged` · L308–308

[Drilling.UI/Menu/CBindingBase.cs:308–308](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L308-L308)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunBeamDetailVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRunCellDetailVisibleChanged` · L309–309

[Drilling.UI/Menu/CBindingBase.cs:309–309](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L309-L309)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunCellDetailVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRunGlassPreviewVisibleChanged` · L310–310

[Drilling.UI/Menu/CBindingBase.cs:310–310](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L310-L310)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunGlassPreviewVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRunReviewResultLoadingChanged` · L311–311

[Drilling.UI/Menu/CBindingBase.cs:311–311](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L311-L311)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunReviewResultLoadingChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRunShotMapVisibleChanged` · L312–312

[Drilling.UI/Menu/CBindingBase.cs:312–312](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L312-L312)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunShotMapVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsZPositionMoveEnabledChanged` · L313–313

[Drilling.UI/Menu/CBindingBase.cs:313–313](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L313-L313)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsZPositionMoveEnabledChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRunTabChanged` · L314–314

[Drilling.UI/Menu/CBindingBase.cs:314–314](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L314-L314)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsEdgeSampleRuleUiChanged` · L315–315

[Drilling.UI/Menu/CBindingBase.cs:315–315](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L315-L315)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsEdgeSampleRuleUiChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsFineFiveLineChanged` · L316–316

[Drilling.UI/Menu/CBindingBase.cs:316–316](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L316-L316)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineFiveLineChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsFineOneLineChanged` · L317–317

[Drilling.UI/Menu/CBindingBase.cs:317–317](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L317-L317)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineOneLineChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsFineSampleRuleUiChanged` · L318–318

[Drilling.UI/Menu/CBindingBase.cs:318–318](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L318-L318)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineSampleRuleUiChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsFineSevenLineChanged` · L319–319

[Drilling.UI/Menu/CBindingBase.cs:319–319](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L319-L319)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineSevenLineChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsFineThreeLineChanged` · L320–320

[Drilling.UI/Menu/CBindingBase.cs:320–320](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L320-L320)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsFineThreeLineChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRoughCenterChanged` · L321–321

[Drilling.UI/Menu/CBindingBase.cs:321–321](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L321-L321)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRoughCenterChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRoughFirstChanged` · L322–322

[Drilling.UI/Menu/CBindingBase.cs:322–322](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L322-L322)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRoughFirstChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRoughLastChanged` · L323–323

[Drilling.UI/Menu/CBindingBase.cs:323–323](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L323-L323)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRoughLastChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRoughSampleRuleUiChanged` · L324–324

[Drilling.UI/Menu/CBindingBase.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L324-L324)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRoughSampleRuleUiChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSampleCellDetailVisibleChanged` · L325–325

[Drilling.UI/Menu/CBindingBase.cs:325–325](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L325-L325)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleCellDetailVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSampleGlassPreviewVisibleChanged` · L326–326

[Drilling.UI/Menu/CBindingBase.cs:326–326](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L326-L326)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleGlassPreviewVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSampleScopeHeadChanged` · L327–327

[Drilling.UI/Menu/CBindingBase.cs:327–327](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L327-L327)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleScopeHeadChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSampleScopeHeadCellChanged` · L328–328

[Drilling.UI/Menu/CBindingBase.cs:328–328](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L328-L328)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleScopeHeadCellChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSampleScopeVisibleChanged` · L329–329

[Drilling.UI/Menu/CBindingBase.cs:329–329](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L329-L329)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleScopeVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSampleSelectTabChanged` · L330–330

[Drilling.UI/Menu/CBindingBase.cs:330–330](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L330-L330)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSampleSelectTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSimpleSampleRuleUiChanged` · L331–331

[Drilling.UI/Menu/CBindingBase.cs:331–331](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L331-L331)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSimpleSampleRuleUiChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsScannerStatusSelectedChanged` · L332–332

[Drilling.UI/Menu/CBindingBase.cs:332–332](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L332-L332)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsScannerStatusSelectedChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsScannerWorkspaceChanged` · L333–333

[Drilling.UI/Menu/CBindingBase.cs:333–333](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L333-L333)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsScannerWorkspaceChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsManualMofTabChanged` · L334–334

[Drilling.UI/Menu/CBindingBase.cs:334–334](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L334-L334)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualMofTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsManualControllerTabChanged` · L335–335

[Drilling.UI/Menu/CBindingBase.cs:335–335](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L335-L335)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualControllerTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ManualControllerHeadsChanged` · L336–336

[Drilling.UI/Menu/CBindingBase.cs:336–336](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L336-L336)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ManualControllerHeadsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsManualMotionTabChanged` · L337–337

[Drilling.UI/Menu/CBindingBase.cs:337–337](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L337-L337)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualMotionTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsManualScanTabChanged` · L338–338

[Drilling.UI/Menu/CBindingBase.cs:338–338](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L338-L338)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualScanTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsManualPowerMeasureTabChanged` · L339–339

[Drilling.UI/Menu/CBindingBase.cs:339–339](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L339-L339)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualPowerMeasureTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsManualStageReviewTabChanged` · L340–340

[Drilling.UI/Menu/CBindingBase.cs:340–340](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L340-L340)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsManualStageReviewTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSelectedChanged` · L341–341

[Drilling.UI/Menu/CBindingBase.cs:341–341](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L341-L341)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSelectedChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSettingLayoutChanged` · L342–342

[Drilling.UI/Menu/CBindingBase.cs:342–342](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L342-L342)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSettingLayoutChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSignChanged` · L343–343

[Drilling.UI/Menu/CBindingBase.cs:343–343](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L343-L343)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSignChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsSimulationChanged` · L344–344

[Drilling.UI/Menu/CBindingBase.cs:344–344](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L344-L344)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsSimulationChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsStageVisionWorkspaceChanged` · L345–345

[Drilling.UI/Menu/CBindingBase.cs:345–345](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L345-L345)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsStageVisionWorkspaceChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsVisionProtocolBusyChanged` · L346–346

[Drilling.UI/Menu/CBindingBase.cs:346–346](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L346-L346)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsVisionProtocolBusyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsVisionFlipOptionChanged` · L347–347

[Drilling.UI/Menu/CBindingBase.cs:347–347](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L347-L347)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsVisionFlipOptionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ItemChanged` · L348–348

[Drilling.UI/Menu/CBindingBase.cs:348–348](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L348-L348)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ItemTabsChanged` · L349–349

[Drilling.UI/Menu/CBindingBase.cs:349–349](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L349-L349)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ItemTabsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `JudgeBrushChanged` · L350–350

[Drilling.UI/Menu/CBindingBase.cs:350–350](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L350-L350)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.JudgeBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `KeyChanged` · L351–351

[Drilling.UI/Menu/CBindingBase.cs:351–351](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L351-L351)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.KeyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LabelCanvasTopChanged` · L352–352

[Drilling.UI/Menu/CBindingBase.cs:352–352](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L352-L352)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LabelCanvasTopChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserControlRowsChanged` · L353–353

[Drilling.UI/Menu/CBindingBase.cs:353–353](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L353-L353)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserControlRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserGateBrushChanged` · L354–354

[Drilling.UI/Menu/CBindingBase.cs:354–354](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L354-L354)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserGateBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserGateTextChanged` · L355–355

[Drilling.UI/Menu/CBindingBase.cs:355–355](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L355-L355)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserGateTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserOffCommandChanged` · L356–356

[Drilling.UI/Menu/CBindingBase.cs:356–356](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L356-L356)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOffCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserOnCommandChanged` · L357–357

[Drilling.UI/Menu/CBindingBase.cs:357–357](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L357-L357)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOnCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserOnModeChanged` · L358–358

[Drilling.UI/Menu/CBindingBase.cs:358–358](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L358-L358)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOnModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserOnSegmentsTextChanged` · L359–359

[Drilling.UI/Menu/CBindingBase.cs:359–359](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L359-L359)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOnSegmentsTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserOnTimeMsecChanged` · L360–360

[Drilling.UI/Menu/CBindingBase.cs:360–360](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L360-L360)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserOnTimeMsecChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserPowerBrushChanged` · L361–361

[Drilling.UI/Menu/CBindingBase.cs:361–361](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L361-L361)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserPowerBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserPowerTextChanged` · L362–362

[Drilling.UI/Menu/CBindingBase.cs:362–362](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L362-L362)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserPowerTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserShotCountChanged` · L363–363

[Drilling.UI/Menu/CBindingBase.cs:363–363](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L363-L363)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserShotCountChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserShutterBrushChanged` · L364–364

[Drilling.UI/Menu/CBindingBase.cs:364–364](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L364-L364)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserShutterBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserShutterTextChanged` · L365–365

[Drilling.UI/Menu/CBindingBase.cs:365–365](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L365-L365)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserShutterTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LaserStateBrushChanged` · L366–366

[Drilling.UI/Menu/CBindingBase.cs:366–366](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L366-L366)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LaserStateBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LastChangedTextChanged` · L367–367

[Drilling.UI/Menu/CBindingBase.cs:367–367](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L367-L367)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LastChangedTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LengthChanged` · L368–368

[Drilling.UI/Menu/CBindingBase.cs:368–368](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L368-L368)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LengthChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LevelBrushChanged` · L369–369

[Drilling.UI/Menu/CBindingBase.cs:369–369](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L369-L369)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LevelBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LifecycleItemsChanged` · L370–370

[Drilling.UI/Menu/CBindingBase.cs:370–370](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L370-L370)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LifecycleItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LimitMinusBrushChanged` · L371–371

[Drilling.UI/Menu/CBindingBase.cs:371–371](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L371-L371)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LimitMinusBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LimitPlusBrushChanged` · L372–372

[Drilling.UI/Menu/CBindingBase.cs:372–372](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L372-L372)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LimitPlusBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LoadedReviewFileNameChanged` · L373–373

[Drilling.UI/Menu/CBindingBase.cs:373–373](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L373-L373)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LoadedReviewFileNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LoadedSettingNameChanged` · L374–374

[Drilling.UI/Menu/CBindingBase.cs:374–374](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L374-L374)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LoadedSettingNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LoadedSettingPathChanged` · L375–375

[Drilling.UI/Menu/CBindingBase.cs:375–375](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L375-L375)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LoadedSettingPathChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `LockItemsChanged` · L376–376

[Drilling.UI/Menu/CBindingBase.cs:376–376](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L376-L376)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.LockItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MagChanged` · L377–377

[Drilling.UI/Menu/CBindingBase.cs:377–377](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L377-L377)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MagChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MainOperatingChanged` · L378–378

[Drilling.UI/Menu/CBindingBase.cs:378–378](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L378-L378)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MainOperatingChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ManagedItemsChanged` · L379–379

[Drilling.UI/Menu/CBindingBase.cs:379–379](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L379-L379)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ManagedItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ManualChanged` · L380–380

[Drilling.UI/Menu/CBindingBase.cs:380–380](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L380-L380)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ManualChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ManualSettingsChanged` · L381–381

[Drilling.UI/Menu/CBindingBase.cs:381–381](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L381-L381)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ManualSettingsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MatrixPointNameChanged` · L382–382

[Drilling.UI/Menu/CBindingBase.cs:382–382](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L382-L382)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MatrixPointNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MaxChanged` · L383–383

[Drilling.UI/Menu/CBindingBase.cs:383–383](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L383-L383)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MaxChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MaxCellNumberItemChanged` · L384–384

[Drilling.UI/Menu/CBindingBase.cs:384–384](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L384-L384)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MaxCellNumberItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MelsecGroupsChanged` · L385–385

[Drilling.UI/Menu/CBindingBase.cs:385–385](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L385-L385)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecGroupsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MelsecReadRowsChanged` · L386–386

[Drilling.UI/Menu/CBindingBase.cs:386–386](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L386-L386)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecReadRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MelsecRowsChanged` · L387–387

[Drilling.UI/Menu/CBindingBase.cs:387–387](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L387-L387)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MelsecWriteRowsChanged` · L388–388

[Drilling.UI/Menu/CBindingBase.cs:388–388](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L388-L388)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecWriteRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MelsecWriteLockTextChanged` · L389–389

[Drilling.UI/Menu/CBindingBase.cs:389–389](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L389-L389)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MelsecWriteLockTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MenuChanged` · L390–390

[Drilling.UI/Menu/CBindingBase.cs:390–390](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L390-L390)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MenuChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MenusChanged` · L391–391

[Drilling.UI/Menu/CBindingBase.cs:391–391](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L391-L391)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MenusChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MetricsChanged` · L392–392

[Drilling.UI/Menu/CBindingBase.cs:392–392](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L392-L392)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MetricsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MinChanged` · L393–393

[Drilling.UI/Menu/CBindingBase.cs:393–393](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L393-L393)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MinChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ModesChanged` · L394–394

[Drilling.UI/Menu/CBindingBase.cs:394–394](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L394-L394)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModesChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ModelOptionsChanged` · L395–395

[Drilling.UI/Menu/CBindingBase.cs:395–395](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L395-L395)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModelOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ModelTypeChanged` · L396–396

[Drilling.UI/Menu/CBindingBase.cs:396–396](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L396-L396)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModelTypeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ModifiedBrushChanged` · L397–397

[Drilling.UI/Menu/CBindingBase.cs:397–397](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L397-L397)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModifiedBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ModifiedTextChanged` · L398–398

[Drilling.UI/Menu/CBindingBase.cs:398–398](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L398-L398)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModifiedTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ModifyCommandChanged` · L399–399

[Drilling.UI/Menu/CBindingBase.cs:399–399](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L399-L399)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ModifyCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MonitorChanged` · L400–400

[Drilling.UI/Menu/CBindingBase.cs:400–400](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L400-L400)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MonitorChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MoveCommandLabelChanged` · L401–401

[Drilling.UI/Menu/CBindingBase.cs:401–401](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L401-L401)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MoveCommandLabelChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MoveCountTextChanged` · L402–402

[Drilling.UI/Menu/CBindingBase.cs:402–402](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L402-L402)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MoveCountTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MoveStopCommandChanged` · L403–403

[Drilling.UI/Menu/CBindingBase.cs:403–403](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L403-L403)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MoveStopCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MultiMoveAxisRowsChanged` · L404–404

[Drilling.UI/Menu/CBindingBase.cs:404–404](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L404-L404)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MultiMoveAxisRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MutedChanged` · L405–405

[Drilling.UI/Menu/CBindingBase.cs:405–405](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L405-L405)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.MutedChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `NameChanged` · L406–406

[Drilling.UI/Menu/CBindingBase.cs:406–406](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L406-L406)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `NavigateShotGroupCommandChanged` · L407–407

[Drilling.UI/Menu/CBindingBase.cs:407–407](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L407-L407)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NavigateShotGroupCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `NextChanged` · L408–408

[Drilling.UI/Menu/CBindingBase.cs:408–408](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L408-L408)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `NextCellCommandChanged` · L409–409

[Drilling.UI/Menu/CBindingBase.cs:409–409](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L409-L409)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NextCellCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `NickNameChanged` · L410–410

[Drilling.UI/Menu/CBindingBase.cs:410–410](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L410-L410)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NickNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `NoChanged` · L411–411

[Drilling.UI/Menu/CBindingBase.cs:411–411](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L411-L411)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NoChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `NoOpChanged` · L412–412

[Drilling.UI/Menu/CBindingBase.cs:412–412](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L412-L412)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NoOpChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `NumberChanged` · L413–413

[Drilling.UI/Menu/CBindingBase.cs:413–413](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L413-L413)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.NumberChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OddHeadPreviewsChanged` · L414–414

[Drilling.UI/Menu/CBindingBase.cs:414–414](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L414-L414)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OddHeadPreviewsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OfflineChanged` · L415–415

[Drilling.UI/Menu/CBindingBase.cs:415–415](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L415-L415)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OfflineChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OffsetCoordinateTextChanged` · L416–416

[Drilling.UI/Menu/CBindingBase.cs:416–416](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L416-L416)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OffsetCoordinateTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OffsetValueBrushChanged` · L417–417

[Drilling.UI/Menu/CBindingBase.cs:417–417](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L417-L417)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OffsetValueBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OffsetXChanged` · L418–418

[Drilling.UI/Menu/CBindingBase.cs:418–418](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L418-L418)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OffsetXChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OffsetYChanged` · L419–419

[Drilling.UI/Menu/CBindingBase.cs:419–419](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L419-L419)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OffsetYChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleBeamRowsChanged` · L420–420

[Drilling.UI/Menu/CBindingBase.cs:420–420](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L420-L420)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleBeamRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleCellHoleMatrixRowsChanged` · L421–421

[Drilling.UI/Menu/CBindingBase.cs:421–421](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L421-L421)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleCellHoleMatrixRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleCellHoleRowsChanged` · L422–422

[Drilling.UI/Menu/CBindingBase.cs:422–422](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L422-L422)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleCellHoleRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleCellPreviewLabelsChanged` · L423–423

[Drilling.UI/Menu/CBindingBase.cs:423–423](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L423-L423)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleCellPreviewLabelsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleCurrentHoleMarkersChanged` · L424–424

[Drilling.UI/Menu/CBindingBase.cs:424–424](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L424-L424)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleCurrentHoleMarkersChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleGlassPreviewImageChanged` · L425–425

[Drilling.UI/Menu/CBindingBase.cs:425–425](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L425-L425)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleGlassPreviewImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleGlassPreviewSummaryChanged` · L426–426

[Drilling.UI/Menu/CBindingBase.cs:426–426](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L426-L426)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleGlassPreviewSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleWorkspaceSummaryChanged` · L427–427

[Drilling.UI/Menu/CBindingBase.cs:427–427](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L427-L427)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleWorkspaceSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneHoleWorkspaceTitleChanged` · L428–428

[Drilling.UI/Menu/CBindingBase.cs:428–428](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L428-L428)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneHoleWorkspaceTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OnlineChanged` · L429–429

[Drilling.UI/Menu/CBindingBase.cs:429–429](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L429-L429)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OnlineChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OpenChanged` · L430–430

[Drilling.UI/Menu/CBindingBase.cs:430–430](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L430-L430)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpenChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OperationButtonsChanged` · L431–431

[Drilling.UI/Menu/CBindingBase.cs:431–431](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L431-L431)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OperationButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OperationFieldsChanged` · L432–432

[Drilling.UI/Menu/CBindingBase.cs:432–432](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L432-L432)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OperationFieldsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OperationPanelTitleChanged` · L433–433

[Drilling.UI/Menu/CBindingBase.cs:433–433](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L433-L433)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OperationPanelTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OpticAttenuatorVisibilityChanged` · L434–434

[Drilling.UI/Menu/CBindingBase.cs:434–434](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L434-L434)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticAttenuatorVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OpticBetVisibilityChanged` · L435–435

[Drilling.UI/Menu/CBindingBase.cs:435–435](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L435-L435)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticBetVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OpticHeadParametersChanged` · L436–436

[Drilling.UI/Menu/CBindingBase.cs:436–436](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L436-L436)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticHeadParametersChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OpticLaserVisibilityChanged` · L437–437

[Drilling.UI/Menu/CBindingBase.cs:437–437](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L437-L437)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticLaserVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OpticParameterGroupsChanged` · L438–438

[Drilling.UI/Menu/CBindingBase.cs:438–438](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L438-L438)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticParameterGroupsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OpticParameterVisibilityChanged` · L439–439

[Drilling.UI/Menu/CBindingBase.cs:439–439](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L439-L439)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticParameterVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OpticStatusTabsChanged` · L440–440

[Drilling.UI/Menu/CBindingBase.cs:440–440](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L440-L440)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OpticStatusTabsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OptionBorderBrushChanged` · L441–441

[Drilling.UI/Menu/CBindingBase.cs:441–441](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L441-L441)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionBorderBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OptionBrushChanged` · L442–442

[Drilling.UI/Menu/CBindingBase.cs:442–442](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L442-L442)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OptionOpacityChanged` · L443–443

[Drilling.UI/Menu/CBindingBase.cs:443–443](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L443-L443)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionOpacityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OptionTextChanged` · L444–444

[Drilling.UI/Menu/CBindingBase.cs:444–444](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L444-L444)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OptionVisibilityChanged` · L445–445

[Drilling.UI/Menu/CBindingBase.cs:445–445](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L445-L445)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OptionVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OriginalValueChanged` · L446–446

[Drilling.UI/Menu/CBindingBase.cs:446–446](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L446-L446)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OriginalValueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ParameterChanged` · L447–447

[Drilling.UI/Menu/CBindingBase.cs:447–447](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L447-L447)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParameterChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ParameterPanelTitleChanged` · L448–448

[Drilling.UI/Menu/CBindingBase.cs:448–448](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L448-L448)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParameterPanelTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ParameterRowsChanged` · L449–449

[Drilling.UI/Menu/CBindingBase.cs:449–449](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L449-L449)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParameterRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ParametersChanged` · L450–450

[Drilling.UI/Menu/CBindingBase.cs:450–450](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L450-L450)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParametersChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ParameterTabsChanged` · L451–451

[Drilling.UI/Menu/CBindingBase.cs:451–451](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L451-L451)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ParameterTabsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoAllMotorCommandButtonsChanged` · L452–452

[Drilling.UI/Menu/CBindingBase.cs:452–452](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L452-L452)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoAllMotorCommandButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoAllMotorSelectButtonsChanged` · L453–453

[Drilling.UI/Menu/CBindingBase.cs:453–453](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L453-L453)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoAllMotorSelectButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoConnectionButtonsChanged` · L454–454

[Drilling.UI/Menu/CBindingBase.cs:454–454](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L454-L454)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoConnectionButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoErrorRowsChanged` · L455–455

[Drilling.UI/Menu/CBindingBase.cs:455–455](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L455-L455)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoErrorRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoJogStartCommandChanged` · L456–456

[Drilling.UI/Menu/CBindingBase.cs:456–456](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L456-L456)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoJogStartCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoJogStopCommandChanged` · L457–457

[Drilling.UI/Menu/CBindingBase.cs:457–457](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L457-L457)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoJogStopCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoMotionJogButtonsChanged` · L458–458

[Drilling.UI/Menu/CBindingBase.cs:458–458](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L458-L458)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotionJogButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoMotionMoveButtonsChanged` · L459–459

[Drilling.UI/Menu/CBindingBase.cs:459–459](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L459-L459)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotionMoveButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoMotionRelButtonsChanged` · L460–460

[Drilling.UI/Menu/CBindingBase.cs:460–460](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L460-L460)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotionRelButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoMotionStopButtonsChanged` · L461–461

[Drilling.UI/Menu/CBindingBase.cs:461–461](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L461-L461)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotionStopButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PicoMotorSelectButtonsChanged` · L462–462

[Drilling.UI/Menu/CBindingBase.cs:462–462](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L462-L462)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PicoMotorSelectButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PixelCountXItemChanged` · L463–463

[Drilling.UI/Menu/CBindingBase.cs:463–463](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L463-L463)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PixelCountXItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PixelCountYItemChanged` · L464–464

[Drilling.UI/Menu/CBindingBase.cs:464–464](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L464-L464)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PixelCountYItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PixelSizeItemChanged` · L465–465

[Drilling.UI/Menu/CBindingBase.cs:465–465](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L465-L465)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PixelSizeItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PlacementStateChanged` · L466–466

[Drilling.UI/Menu/CBindingBase.cs:466–466](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L466-L466)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PlacementStateChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PlanSummaryChanged` · L467–467

[Drilling.UI/Menu/CBindingBase.cs:467–467](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L467-L467)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PlanSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PmChanged` · L468–468

[Drilling.UI/Menu/CBindingBase.cs:468–468](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L468-L468)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PmChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PointSelectRowsChanged` · L469–469

[Drilling.UI/Menu/CBindingBase.cs:469–469](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L469-L469)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PointSelectRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PollMsChanged` · L470–470

[Drilling.UI/Menu/CBindingBase.cs:470–470](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L470-L470)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PollMsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PositionMoveCommandChanged` · L471–471

[Drilling.UI/Menu/CBindingBase.cs:471–471](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L471-L471)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionMoveCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PositionMoveItemsChanged` · L472–472

[Drilling.UI/Menu/CBindingBase.cs:472–472](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L472-L472)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionMoveItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PositionRowsChanged` · L473–473

[Drilling.UI/Menu/CBindingBase.cs:473–473](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L473-L473)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PositionXPropertyChanged` · L474–474

[Drilling.UI/Menu/CBindingBase.cs:474–474](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L474-L474)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionXPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PositionYPropertyChanged` · L475–475

[Drilling.UI/Menu/CBindingBase.cs:475–475](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L475-L475)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PositionYPropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerBrushChanged` · L476–476

[Drilling.UI/Menu/CBindingBase.cs:476–476](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L476-L476)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerMeterGraphLineChanged` · L477–477

[Drilling.UI/Menu/CBindingBase.cs:477–477](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L477-L477)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterGraphLineChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerMeterGraphMaxTextChanged` · L478–478

[Drilling.UI/Menu/CBindingBase.cs:478–478](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L478-L478)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterGraphMaxTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerMeterGraphMinTextChanged` · L479–479

[Drilling.UI/Menu/CBindingBase.cs:479–479](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L479-L479)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterGraphMinTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerMeterGraphTargetTextChanged` · L480–480

[Drilling.UI/Menu/CBindingBase.cs:480–480](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L480-L480)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterGraphTargetTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerMeterTargetLineYChanged` · L481–481

[Drilling.UI/Menu/CBindingBase.cs:481–481](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L481-L481)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterTargetLineYChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerMeterTuneMessageChanged` · L482–482

[Drilling.UI/Menu/CBindingBase.cs:482–482](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L482-L482)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterTuneMessageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerMeterTuneRowsChanged` · L483–483

[Drilling.UI/Menu/CBindingBase.cs:483–483](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L483-L483)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterTuneRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PowerMeterTuneStateChanged` · L484–484

[Drilling.UI/Menu/CBindingBase.cs:484–484](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L484-L484)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PowerMeterTuneStateChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PreviousChanged` · L485–485

[Drilling.UI/Menu/CBindingBase.cs:485–485](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L485-L485)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PreviousChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PreviousCellCommandChanged` · L486–486

[Drilling.UI/Menu/CBindingBase.cs:486–486](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L486-L486)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PreviousCellCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PrimaryTextChanged` · L487–487

[Drilling.UI/Menu/CBindingBase.cs:487–487](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L487-L487)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PrimaryTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProcessPitchItemChanged` · L488–488

[Drilling.UI/Menu/CBindingBase.cs:488–488](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L488-L488)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessPitchItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProcessResultBrushChanged` · L489–489

[Drilling.UI/Menu/CBindingBase.cs:489–489](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L489-L489)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessResultBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProcessResultValueChanged` · L490–490

[Drilling.UI/Menu/CBindingBase.cs:490–490](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L490-L490)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessResultValueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProcessSequenceItemsChanged` · L491–491

[Drilling.UI/Menu/CBindingBase.cs:491–491](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L491-L491)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessSequenceItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProcessStepChanged` · L492–492

[Drilling.UI/Menu/CBindingBase.cs:492–492](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L492-L492)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessStepChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProcessSummaryItemsChanged` · L493–493

[Drilling.UI/Menu/CBindingBase.cs:493–493](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L493-L493)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProcessSummaryItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductAlignItemsChanged` · L494–494

[Drilling.UI/Menu/CBindingBase.cs:494–494](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L494-L494)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductAlignItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductDistortionItemsChanged` · L495–495

[Drilling.UI/Menu/CBindingBase.cs:495–495](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L495-L495)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductDistortionItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductGlassItemsChanged` · L496–496

[Drilling.UI/Menu/CBindingBase.cs:496–496](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L496-L496)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductGlassItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductHistoryRowsChanged` · L497–497

[Drilling.UI/Menu/CBindingBase.cs:497–497](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L497-L497)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductHistoryRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductItemsChanged` · L498–498

[Drilling.UI/Menu/CBindingBase.cs:498–498](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L498-L498)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductProcessItemsChanged` · L499–499

[Drilling.UI/Menu/CBindingBase.cs:499–499](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L499-L499)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductProcessItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductRecipeItemsChanged` · L500–500

[Drilling.UI/Menu/CBindingBase.cs:500–500](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L500-L500)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductRecipeItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductReviewItemsChanged` · L501–501

[Drilling.UI/Menu/CBindingBase.cs:501–501](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L501-L501)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductReviewItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProductReviewRowsChanged` · L502–502

[Drilling.UI/Menu/CBindingBase.cs:502–502](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L502-L502)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProductReviewRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProgressPercentChanged` · L503–503

[Drilling.UI/Menu/CBindingBase.cs:503–503](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L503-L503)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProgressPercentChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProgressPercentTextChanged` · L504–504

[Drilling.UI/Menu/CBindingBase.cs:504–504](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L504-L504)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProgressPercentTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ProgressTextChanged` · L505–505

[Drilling.UI/Menu/CBindingBase.cs:505–505](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L505-L505)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ProgressTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PwmDeviceRowsChanged` · L506–506

[Drilling.UI/Menu/CBindingBase.cs:506–506](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L506-L506)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PwmDeviceRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PwmRunButtonsChanged` · L507–507

[Drilling.UI/Menu/CBindingBase.cs:507–507](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L507-L507)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PwmRunButtonsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PwmSettingRowsChanged` · L508–508

[Drilling.UI/Menu/CBindingBase.cs:508–508](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L508-L508)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.PwmSettingRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `QuickSelectCommandChanged` · L509–509

[Drilling.UI/Menu/CBindingBase.cs:509–509](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L509-L509)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.QuickSelectCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RangeVisibilityChanged` · L510–510

[Drilling.UI/Menu/CBindingBase.cs:510–510](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L510-L510)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RangeVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ReadValueChanged` · L511–511

[Drilling.UI/Menu/CBindingBase.cs:511–511](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L511-L511)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReadValueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RecipeChanged` · L512–512

[Drilling.UI/Menu/CBindingBase.cs:512–512](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L512-L512)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RecipeFilesChanged` · L513–513

[Drilling.UI/Menu/CBindingBase.cs:513–513](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L513-L513)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeFilesChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RecipeFilesPageTextChanged` · L514–514

[Drilling.UI/Menu/CBindingBase.cs:514–514](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L514-L514)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeFilesPageTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RecipeListChanged` · L515–515

[Drilling.UI/Menu/CBindingBase.cs:515–515](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L515-L515)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeListChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RecipeNameChanged` · L516–516

[Drilling.UI/Menu/CBindingBase.cs:516–516](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L516-L516)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipeNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RecipePreviewImageChanged` · L517–517

[Drilling.UI/Menu/CBindingBase.cs:517–517](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L517-L517)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecipePreviewImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RecoveryCommandsChanged` · L518–518

[Drilling.UI/Menu/CBindingBase.cs:518–518](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L518-L518)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RecoveryCommandsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ReloadCommandChanged` · L519–519

[Drilling.UI/Menu/CBindingBase.cs:519–519](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L519-L519)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReloadCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RenameCommandChanged` · L520–520

[Drilling.UI/Menu/CBindingBase.cs:520–520](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L520-L520)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RenameCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ResultBrushChanged` · L521–521

[Drilling.UI/Menu/CBindingBase.cs:521–521](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L521-L521)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ResultItemsChanged` · L522–522

[Drilling.UI/Menu/CBindingBase.cs:522–522](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L522-L522)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ResultMessageChanged` · L523–523

[Drilling.UI/Menu/CBindingBase.cs:523–523](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L523-L523)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultMessageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ResultMatrixChanged` · L524–524

[Drilling.UI/Menu/CBindingBase.cs:524–524](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L524-L524)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultMatrixChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsReviewResultDeferredChanged` · L525–525

[Drilling.UI/Menu/CBindingBase.cs:525–525](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L525-L525)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsReviewResultDeferredChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ResultPasswordChanged` · L526–526

[Drilling.UI/Menu/CBindingBase.cs:526–526](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L526-L526)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultPasswordChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ResultRowsChanged` · L527–527

[Drilling.UI/Menu/CBindingBase.cs:527–527](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L527-L527)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ResultValueChanged` · L528–528

[Drilling.UI/Menu/CBindingBase.cs:528–528](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L528-L528)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ResultValueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RetryCommandChanged` · L529–529

[Drilling.UI/Menu/CBindingBase.cs:529–529](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L529-L529)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RetryCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ReviewChanged` · L530–530

[Drilling.UI/Menu/CBindingBase.cs:530–530](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L530-L530)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ReviewLoadStatusChanged` · L531–531

[Drilling.UI/Menu/CBindingBase.cs:531–531](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L531-L531)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewLoadStatusChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ReviewLoadStatusBrushChanged` · L532–532

[Drilling.UI/Menu/CBindingBase.cs:532–532](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L532-L532)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewLoadStatusBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ReviewResultRowsChanged` · L533–533

[Drilling.UI/Menu/CBindingBase.cs:533–533](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L533-L533)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewResultRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ReviewSetsChanged` · L534–534

[Drilling.UI/Menu/CBindingBase.cs:534–534](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L534-L534)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ReviewSetsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RotationChanged` · L535–535

[Drilling.UI/Menu/CBindingBase.cs:535–535](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L535-L535)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RotationChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RowChanged` · L536–536

[Drilling.UI/Menu/CBindingBase.cs:536–536](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L536-L536)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RowChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RowBrushChanged` · L537–537

[Drilling.UI/Menu/CBindingBase.cs:537–537](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L537-L537)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RowBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunBeamRowsChanged` · L538–538

[Drilling.UI/Menu/CBindingBase.cs:538–538](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L538-L538)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunBeamRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionBeamResultRowsChanged` · L539–539

[Drilling.UI/Menu/CBindingBase.cs:539–539](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L539-L539)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionBeamResultRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunCellShotMatrixRowsChanged` · L540–540

[Drilling.UI/Menu/CBindingBase.cs:540–540](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L540-L540)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunCellShotMatrixRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunCellShotRowsChanged` · L541–541

[Drilling.UI/Menu/CBindingBase.cs:541–541](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L541-L541)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunCellShotRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunCellPreviewLabelsChanged` · L542–542

[Drilling.UI/Menu/CBindingBase.cs:542–542](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L542-L542)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunCellPreviewLabelsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionHeadRowsChanged` · L543–543

[Drilling.UI/Menu/CBindingBase.cs:543–543](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L543-L543)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionHeadRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOneShotReviewModeChanged` · L544–544

[Drilling.UI/Menu/CBindingBase.cs:544–544](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L544-L544)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneShotReviewModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsOneLineReviewModeChanged` · L545–545

[Drilling.UI/Menu/CBindingBase.cs:545–545](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L545-L545)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsOneLineReviewModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsShotSelectionModeChanged` · L546–546

[Drilling.UI/Menu/CBindingBase.cs:546–546](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L546-L546)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsShotSelectionModeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsRunCommandsVisibleChanged` · L547–547

[Drilling.UI/Menu/CBindingBase.cs:547–547](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L547-L547)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsRunCommandsVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneShotSelectionChanged` · L548–548

[Drilling.UI/Menu/CBindingBase.cs:548–548](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L548-L548)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneShotSelectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneShotStatusChanged` · L549–549

[Drilling.UI/Menu/CBindingBase.cs:549–549](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L549-L549)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneShotStatusChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `OneShotResultTextChanged` · L550–550

[Drilling.UI/Menu/CBindingBase.cs:550–550](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L550-L550)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.OneShotResultTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedOneShotMethodChanged` · L551–551

[Drilling.UI/Menu/CBindingBase.cs:551–551](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L551-L551)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedOneShotMethodChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionShotSummaryChanged` · L552–552

[Drilling.UI/Menu/CBindingBase.cs:552–552](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L552-L552)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionShotSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `InspectionProgressTextChanged` · L553–553

[Drilling.UI/Menu/CBindingBase.cs:553–553](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L553-L553)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.InspectionProgressTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsInspectionExecutionViewVisibleChanged` · L554–554

[Drilling.UI/Menu/CBindingBase.cs:554–554](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L554-L554)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsInspectionExecutionViewVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `IsInspectionSelectionControlsVisibleChanged` · L555–555

[Drilling.UI/Menu/CBindingBase.cs:555–555](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L555-L555)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.IsInspectionSelectionControlsVisibleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunCurrentHoleMarkersChanged` · L556–556

[Drilling.UI/Menu/CBindingBase.cs:556–556](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L556-L556)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunCurrentHoleMarkersChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunGlassPreviewImageChanged` · L557–557

[Drilling.UI/Menu/CBindingBase.cs:557–557](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L557-L557)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunGlassPreviewImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunGlassPreviewInspectionOverlayImageChanged` · L558–558

[Drilling.UI/Menu/CBindingBase.cs:558–558](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L558-L558)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunGlassPreviewInspectionOverlayImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunGlassPreviewSummaryChanged` · L559–559

[Drilling.UI/Menu/CBindingBase.cs:559–559](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L559-L559)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunGlassPreviewSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunResultLoadStatusChanged` · L560–560

[Drilling.UI/Menu/CBindingBase.cs:560–560](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L560-L560)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunResultLoadStatusChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunWorkspaceSummaryChanged` · L561–561

[Drilling.UI/Menu/CBindingBase.cs:561–561](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L561-L561)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunWorkspaceSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `RunWorkspaceTitleChanged` · L562–562

[Drilling.UI/Menu/CBindingBase.cs:562–562](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L562-L562)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.RunWorkspaceTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleCorrectionTargetChanged` · L563–563

[Drilling.UI/Menu/CBindingBase.cs:563–563](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L563-L563)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCorrectionTargetChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleCorrectionTitleChanged` · L564–564

[Drilling.UI/Menu/CBindingBase.cs:564–564](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L564-L564)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCorrectionTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleCellShotMatrixRowsChanged` · L565–565

[Drilling.UI/Menu/CBindingBase.cs:565–565](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L565-L565)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCellShotMatrixRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleCellShotRowsChanged` · L566–566

[Drilling.UI/Menu/CBindingBase.cs:566–566](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L566-L566)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCellShotRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleCellOptionsChanged` · L567–567

[Drilling.UI/Menu/CBindingBase.cs:567–567](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L567-L567)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCellOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleCellPreviewLabelsChanged` · L568–568

[Drilling.UI/Menu/CBindingBase.cs:568–568](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L568-L568)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleCellPreviewLabelsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleGlassPreviewImageChanged` · L569–569

[Drilling.UI/Menu/CBindingBase.cs:569–569](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L569-L569)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleGlassPreviewImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleGlassPreviewInspectionOverlayImageChanged` · L570–570

[Drilling.UI/Menu/CBindingBase.cs:570–570](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L570-L570)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleGlassPreviewInspectionOverlayImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleGlassPreviewSummaryChanged` · L571–571

[Drilling.UI/Menu/CBindingBase.cs:571–571](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L571-L571)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleGlassPreviewSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleHeadOptionsChanged` · L572–572

[Drilling.UI/Menu/CBindingBase.cs:572–572](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L572-L572)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleHeadOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleInspectionShotCountChanged` · L573–573

[Drilling.UI/Menu/CBindingBase.cs:573–573](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L573-L573)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleInspectionShotCountChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleMapColumnCountChanged` · L574–574

[Drilling.UI/Menu/CBindingBase.cs:574–574](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L574-L574)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleMapColumnCountChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleOffsetApplyCountChanged` · L575–575

[Drilling.UI/Menu/CBindingBase.cs:575–575](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L575-L575)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleOffsetApplyCountChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SamplePlanStatusChanged` · L576–576

[Drilling.UI/Menu/CBindingBase.cs:576–576](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L576-L576)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SamplePlanStatusChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleReferenceCellChanged` · L577–577

[Drilling.UI/Menu/CBindingBase.cs:577–577](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L577-L577)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceCellChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleReferenceHeadChanged` · L578–578

[Drilling.UI/Menu/CBindingBase.cs:578–578](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L578-L578)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceHeadChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleReferenceShotChanged` · L579–579

[Drilling.UI/Menu/CBindingBase.cs:579–579](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L579-L579)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceShotChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleRuleDescriptionChanged` · L580–580

[Drilling.UI/Menu/CBindingBase.cs:580–580](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L580-L580)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleRuleDescriptionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleRuleNameChanged` · L581–581

[Drilling.UI/Menu/CBindingBase.cs:581–581](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L581-L581)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleRuleNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleRuleSelectionSummaryChanged` · L582–582

[Drilling.UI/Menu/CBindingBase.cs:582–582](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L582-L582)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleRuleSelectionSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleReferenceShotMarkersChanged` · L583–583

[Drilling.UI/Menu/CBindingBase.cs:583–583](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L583-L583)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceShotMarkersChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleReferenceThirdLabelChanged` · L584–584

[Drilling.UI/Menu/CBindingBase.cs:584–584](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L584-L584)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleReferenceThirdLabelChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleTargetSectionTitleChanged` · L585–585

[Drilling.UI/Menu/CBindingBase.cs:585–585](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L585-L585)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleTargetSectionTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleWorkspaceSummaryChanged` · L586–586

[Drilling.UI/Menu/CBindingBase.cs:586–586](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L586-L586)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleWorkspaceSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SampleWorkspaceTitleChanged` · L587–587

[Drilling.UI/Menu/CBindingBase.cs:587–587](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L587-L587)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SampleWorkspaceTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SaveCommandChanged` · L588–588

[Drilling.UI/Menu/CBindingBase.cs:588–588](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L588-L588)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SaveCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ScaleChanged` · L589–589

[Drilling.UI/Menu/CBindingBase.cs:589–589](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L589-L589)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScaleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ScannerAxesChanged` · L590–590

[Drilling.UI/Menu/CBindingBase.cs:590–590](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L590-L590)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScannerAxesChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ScannerStatusItemsChanged` · L591–591

[Drilling.UI/Menu/CBindingBase.cs:591–591](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L591-L591)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScannerStatusItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ScannerStatusHeadTabsChanged` · L592–592

[Drilling.UI/Menu/CBindingBase.cs:592–592](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L592-L592)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScannerStatusHeadTabsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ScannerStatusVisibilityChanged` · L593–593

[Drilling.UI/Menu/CBindingBase.cs:593–593](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L593-L593)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScannerStatusVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ScriptStatusChanged` · L594–594

[Drilling.UI/Menu/CBindingBase.cs:594–594](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L594-L594)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScriptStatusChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ScriptStatusTextChanged` · L595–595

[Drilling.UI/Menu/CBindingBase.cs:595–595](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L595-L595)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScriptStatusTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ScriptTaskStatusItemsChanged` · L596–596

[Drilling.UI/Menu/CBindingBase.cs:596–596](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L596-L596)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ScriptTaskStatusItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SectionsChanged` · L597–597

[Drilling.UI/Menu/CBindingBase.cs:597–597](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L597-L597)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SectionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectCategoryCommandChanged` · L598–598

[Drilling.UI/Menu/CBindingBase.cs:598–598](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L598-L598)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCategoryCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectCellCommandChanged` · L599–599

[Drilling.UI/Menu/CBindingBase.cs:599–599](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L599-L599)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCellCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectCommandChanged` · L600–600

[Drilling.UI/Menu/CBindingBase.cs:600–600](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L600-L600)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectCoordinateBasisCommandChanged` · L601–601

[Drilling.UI/Menu/CBindingBase.cs:601–601](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L601-L601)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCoordinateBasisCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectCoordinateCellCommandChanged` · L602–602

[Drilling.UI/Menu/CBindingBase.cs:602–602](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L602-L602)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCoordinateCellCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectCoordinateShotCommandChanged` · L603–603

[Drilling.UI/Menu/CBindingBase.cs:603–603](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L603-L603)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectCoordinateShotCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedAxisIdChanged` · L604–604

[Drilling.UI/Menu/CBindingBase.cs:604–604](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L604-L604)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedAxisIdChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedAxisRowChanged` · L605–605

[Drilling.UI/Menu/CBindingBase.cs:605–605](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L605-L605)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedAxisRowChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedBeamChanged` · L606–606

[Drilling.UI/Menu/CBindingBase.cs:606–606](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L606-L606)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedBeamChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedInspectionMethodChanged` · L607–607

[Drilling.UI/Menu/CBindingBase.cs:607–607](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L607-L607)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedInspectionMethodChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedCellExcludedTargetTextChanged` · L608–608

[Drilling.UI/Menu/CBindingBase.cs:608–608](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L608-L608)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedCellExcludedTargetTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedCellHasExcludedTargetsChanged` · L609–609

[Drilling.UI/Menu/CBindingBase.cs:609–609](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L609-L609)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedCellHasExcludedTargetsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedCellNavigationTextChanged` · L610–610

[Drilling.UI/Menu/CBindingBase.cs:610–610](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L610-L610)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedCellNavigationTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedCellShotGroupTitleChanged` · L611–611

[Drilling.UI/Menu/CBindingBase.cs:611–611](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L611-L611)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedCellShotGroupTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedGroupChanged` · L612–612

[Drilling.UI/Menu/CBindingBase.cs:612–612](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L612-L612)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedGroupChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedHeadChanged` · L613–613

[Drilling.UI/Menu/CBindingBase.cs:613–613](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L613-L613)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedHeadChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedHeadDeviceNameChanged` · L614–614

[Drilling.UI/Menu/CBindingBase.cs:614–614](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L614-L614)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedHeadDeviceNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedHeadItemsChanged` · L615–615

[Drilling.UI/Menu/CBindingBase.cs:615–615](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L615-L615)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedHeadItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedInterfaceRowChanged` · L616–616

[Drilling.UI/Menu/CBindingBase.cs:616–616](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L616-L616)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedInterfaceRowChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedLaserNameChanged` · L617–617

[Drilling.UI/Menu/CBindingBase.cs:617–617](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L617-L617)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedLaserNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedLaserNumberChanged` · L618–618

[Drilling.UI/Menu/CBindingBase.cs:618–618](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L618-L618)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedLaserNumberChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedMenuChanged` · L619–619

[Drilling.UI/Menu/CBindingBase.cs:619–619](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L619-L619)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedMenuChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedPointItemsChanged` · L620–620

[Drilling.UI/Menu/CBindingBase.cs:620–620](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L620-L620)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedPointItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedRecipeFileChanged` · L621–621

[Drilling.UI/Menu/CBindingBase.cs:621–621](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L621-L621)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedRecipeFileChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedRunShotNameChanged` · L622–622

[Drilling.UI/Menu/CBindingBase.cs:622–622](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L622-L622)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedRunShotNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedSampleRuleUiChanged` · L623–623

[Drilling.UI/Menu/CBindingBase.cs:623–623](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L623-L623)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedSampleRuleUiChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedSampleCellChanged` · L624–624

[Drilling.UI/Menu/CBindingBase.cs:624–624](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L624-L624)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedSampleCellChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedSampleHeadChanged` · L625–625

[Drilling.UI/Menu/CBindingBase.cs:625–625](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L625-L625)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedSampleHeadChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotDetailImageChanged` · L626–626

[Drilling.UI/Menu/CBindingBase.cs:626–626](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L626-L626)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotDetailImageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotInspectionChanged` · L627–627

[Drilling.UI/Menu/CBindingBase.cs:627–627](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L627-L627)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotInspectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotGroupChanged` · L628–628

[Drilling.UI/Menu/CBindingBase.cs:628–628](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L628-L628)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotGroupBeamTextChanged` · L629–629

[Drilling.UI/Menu/CBindingBase.cs:629–629](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L629-L629)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupBeamTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotGroupCenterTextChanged` · L630–630

[Drilling.UI/Menu/CBindingBase.cs:630–630](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L630-L630)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupCenterTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotGroupGridTextChanged` · L631–631

[Drilling.UI/Menu/CBindingBase.cs:631–631](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L631-L631)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupGridTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotGroupIndicatorTextChanged` · L632–632

[Drilling.UI/Menu/CBindingBase.cs:632–632](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L632-L632)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupIndicatorTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotGroupPitchTextChanged` · L633–633

[Drilling.UI/Menu/CBindingBase.cs:633–633](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L633-L633)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupPitchTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotGroupPixelWindowTextChanged` · L634–634

[Drilling.UI/Menu/CBindingBase.cs:634–634](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L634-L634)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupPixelWindowTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedShotGroupStateTextChanged` · L635–635

[Drilling.UI/Menu/CBindingBase.cs:635–635](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L635-L635)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedShotGroupStateTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedTabChanged` · L636–636

[Drilling.UI/Menu/CBindingBase.cs:636–636](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L636-L636)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedTabChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedReviewTabIndexChanged` · L637–637

[Drilling.UI/Menu/CBindingBase.cs:637–637](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L637-L637)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedReviewTabIndexChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectedVisionProtocolCommandChanged` · L638–638

[Drilling.UI/Menu/CBindingBase.cs:638–638](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L638-L638)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectedVisionProtocolCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectGroupCommandChanged` · L639–639

[Drilling.UI/Menu/CBindingBase.cs:639–639](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L639-L639)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectGroupCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectHeadCommandChanged` · L640–640

[Drilling.UI/Menu/CBindingBase.cs:640–640](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L640-L640)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectHeadCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectHeadDeviceCommandChanged` · L641–641

[Drilling.UI/Menu/CBindingBase.cs:641–641](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L641-L641)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectHeadDeviceCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectionSummaryItemsChanged` · L642–642

[Drilling.UI/Menu/CBindingBase.cs:642–642](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L642-L642)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectionSummaryItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectManualWorkspaceCommandChanged` · L643–643

[Drilling.UI/Menu/CBindingBase.cs:643–643](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L643-L643)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectManualWorkspaceCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectMelsecGroupCommandChanged` · L644–644

[Drilling.UI/Menu/CBindingBase.cs:644–644](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L644-L644)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectMelsecGroupCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectModeCommandChanged` · L645–645

[Drilling.UI/Menu/CBindingBase.cs:645–645](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L645-L645)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectModeCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectOneHoleCellCommandChanged` · L646–646

[Drilling.UI/Menu/CBindingBase.cs:646–646](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L646-L646)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectOneHoleCellCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectOneHoleCommandChanged` · L647–647

[Drilling.UI/Menu/CBindingBase.cs:647–647](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L647-L647)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectOneHoleCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectParameterTabCommandChanged` · L648–648

[Drilling.UI/Menu/CBindingBase.cs:648–648](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L648-L648)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectParameterTabCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectPreviewCellCommandChanged` · L649–649

[Drilling.UI/Menu/CBindingBase.cs:649–649](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L649-L649)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectPreviewCellCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectRunBeamCommandChanged` · L650–650

[Drilling.UI/Menu/CBindingBase.cs:650–650](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L650-L650)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectRunBeamCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectRunCellCommandChanged` · L651–651

[Drilling.UI/Menu/CBindingBase.cs:651–651](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L651-L651)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectRunCellCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectRunShotCommandChanged` · L652–652

[Drilling.UI/Menu/CBindingBase.cs:652–652](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L652-L652)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectRunShotCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectSampleCellCommandChanged` · L653–653

[Drilling.UI/Menu/CBindingBase.cs:653–653](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L653-L653)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectSampleCellCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectSettingCommandChanged` · L654–654

[Drilling.UI/Menu/CBindingBase.cs:654–654](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L654-L654)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectSettingCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectShapeCommandChanged` · L655–655

[Drilling.UI/Menu/CBindingBase.cs:655–655](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L655-L655)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectShapeCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SelectTabCommandChanged` · L656–656

[Drilling.UI/Menu/CBindingBase.cs:656–656](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L656-L656)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SelectTabCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ServoBrushChanged` · L657–657

[Drilling.UI/Menu/CBindingBase.cs:657–657](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L657-L657)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ServoBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SetSampleHoleSelectionCommandChanged` · L658–658

[Drilling.UI/Menu/CBindingBase.cs:658–658](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L658-L658)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SetSampleHoleSelectionCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SettingChanged` · L659–659

[Drilling.UI/Menu/CBindingBase.cs:659–659](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L659-L659)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SettingChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SettingFilesChanged` · L660–660

[Drilling.UI/Menu/CBindingBase.cs:660–660](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L660-L660)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SettingFilesChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SettingFilesPageTextChanged` · L661–661

[Drilling.UI/Menu/CBindingBase.cs:661–661](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L661-L661)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SettingFilesPageTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SettingParametersChanged` · L662–662

[Drilling.UI/Menu/CBindingBase.cs:662–662](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L662-L662)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SettingParametersChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShapeDirectionChanged` · L663–663

[Drilling.UI/Menu/CBindingBase.cs:663–663](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L663-L663)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeDirectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShapeNameChanged` · L664–664

[Drilling.UI/Menu/CBindingBase.cs:664–664](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L664-L664)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeNameChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShapeOffsetXChanged` · L665–665

[Drilling.UI/Menu/CBindingBase.cs:665–665](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L665-L665)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeOffsetXChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShapeOffsetYChanged` · L666–666

[Drilling.UI/Menu/CBindingBase.cs:666–666](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L666-L666)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeOffsetYChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShapeScanItemsChanged` · L667–667

[Drilling.UI/Menu/CBindingBase.cs:667–667](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L667-L667)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeScanItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShapeSizeChanged` · L668–668

[Drilling.UI/Menu/CBindingBase.cs:668–668](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L668-L668)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeSizeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShapeStartCommandChanged` · L669–669

[Drilling.UI/Menu/CBindingBase.cs:669–669](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L669-L669)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeStartCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShapeStopCommandChanged` · L670–670

[Drilling.UI/Menu/CBindingBase.cs:670–670](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L670-L670)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShapeStopCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShiftOffsetXChanged` · L671–671

[Drilling.UI/Menu/CBindingBase.cs:671–671](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L671-L671)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShiftOffsetXChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShiftOffsetYChanged` · L672–672

[Drilling.UI/Menu/CBindingBase.cs:672–672](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L672-L672)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShiftOffsetYChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShotCentersChanged` · L673–673

[Drilling.UI/Menu/CBindingBase.cs:673–673](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L673-L673)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotCentersChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShotDetailDesignHeightChanged` · L674–674

[Drilling.UI/Menu/CBindingBase.cs:674–674](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L674-L674)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotDetailDesignHeightChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShotDetailDesignWidthChanged` · L675–675

[Drilling.UI/Menu/CBindingBase.cs:675–675](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L675-L675)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotDetailDesignWidthChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `CellShotNoChanged` · L676–676

[Drilling.UI/Menu/CBindingBase.cs:676–676](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L676-L676)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.CellShotNoChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShotGroupPatternSummaryChanged` · L677–677

[Drilling.UI/Menu/CBindingBase.cs:677–677](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L677-L677)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotGroupPatternSummaryChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShotGroupRowsChanged` · L678–678

[Drilling.UI/Menu/CBindingBase.cs:678–678](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L678-L678)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotGroupRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShotTextChanged` · L679–679

[Drilling.UI/Menu/CBindingBase.cs:679–679](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L679-L679)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShotTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ShowCycleControlsChanged` · L680–680

[Drilling.UI/Menu/CBindingBase.cs:680–680](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L680-L680)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ShowCycleControlsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SimulChanged` · L681–681

[Drilling.UI/Menu/CBindingBase.cs:681–681](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L681-L681)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SimulChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SimulBrushChanged` · L682–682

[Drilling.UI/Menu/CBindingBase.cs:682–682](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L682-L682)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SimulBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SourceGroupChanged` · L683–683

[Drilling.UI/Menu/CBindingBase.cs:683–683](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L683-L683)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SourceGroupChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SourceRowsChanged` · L684–684

[Drilling.UI/Menu/CBindingBase.cs:684–684](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L684-L684)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SourceRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SplitBeamCountItemChanged` · L685–685

[Drilling.UI/Menu/CBindingBase.cs:685–685](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L685-L685)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SplitBeamCountItemChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SpotSizeChanged` · L686–686

[Drilling.UI/Menu/CBindingBase.cs:686–686](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L686-L686)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SpotSizeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ST_MONITOR_MELSEC_ROWChanged` · L687–687

[Drilling.UI/Menu/CBindingBase.cs:687–687](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L687-L687)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ST_MONITOR_MELSEC_ROWChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ST_MONITOR_PARAMETER_ROWChanged` · L688–688

[Drilling.UI/Menu/CBindingBase.cs:688–688](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L688-L688)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ST_MONITOR_PARAMETER_ROWChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StageAxesChanged` · L689–689

[Drilling.UI/Menu/CBindingBase.cs:689–689](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L689-L689)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StageAxesChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StageHomeCommandChanged` · L690–690

[Drilling.UI/Menu/CBindingBase.cs:690–690](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L690-L690)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StageHomeCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StageMoveCommandChanged` · L691–691

[Drilling.UI/Menu/CBindingBase.cs:691–691](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L691-L691)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StageMoveCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StageStopCommandChanged` · L692–692

[Drilling.UI/Menu/CBindingBase.cs:692–692](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L692-L692)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StageStopCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StartCommandChanged` · L693–693

[Drilling.UI/Menu/CBindingBase.cs:693–693](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L693-L693)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StartCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StartTimeChanged` · L694–694

[Drilling.UI/Menu/CBindingBase.cs:694–694](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L694-L694)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StartTimeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StateChanged` · L695–695

[Drilling.UI/Menu/CBindingBase.cs:695–695](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L695-L695)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StateChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StateBrushChanged` · L696–696

[Drilling.UI/Menu/CBindingBase.cs:696–696](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L696-L696)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StateBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StateRowsChanged` · L697–697

[Drilling.UI/Menu/CBindingBase.cs:697–697](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L697-L697)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StateRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StateTextChanged` · L698–698

[Drilling.UI/Menu/CBindingBase.cs:698–698](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L698-L698)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StateTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StatusBrushChanged` · L699–699

[Drilling.UI/Menu/CBindingBase.cs:699–699](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L699-L699)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StatusBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StatusMessageChanged` · L700–700

[Drilling.UI/Menu/CBindingBase.cs:700–700](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L700-L700)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StatusMessageChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StatusPanelTitleChanged` · L701–701

[Drilling.UI/Menu/CBindingBase.cs:701–701](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L701-L701)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StatusPanelTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StatusRowsChanged` · L702–702

[Drilling.UI/Menu/CBindingBase.cs:702–702](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L702-L702)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StatusRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `StopCommandChanged` · L703–703

[Drilling.UI/Menu/CBindingBase.cs:703–703](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L703-L703)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.StopCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SubtitleChanged` · L704–704

[Drilling.UI/Menu/CBindingBase.cs:704–704](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L704-L704)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SubtitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SummaryItemsChanged` · L705–705

[Drilling.UI/Menu/CBindingBase.cs:705–705](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L705-L705)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SummaryItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SummaryRowsChanged` · L706–706

[Drilling.UI/Menu/CBindingBase.cs:706–706](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L706-L706)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SummaryRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `SystemSectionChanged` · L707–707

[Drilling.UI/Menu/CBindingBase.cs:707–707](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L707-L707)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.SystemSectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TabItemsChanged` · L708–708

[Drilling.UI/Menu/CBindingBase.cs:708–708](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L708-L708)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TabItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TabsChanged` · L709–709

[Drilling.UI/Menu/CBindingBase.cs:709–709](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L709-L709)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TabsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TargetGxChanged` · L710–710

[Drilling.UI/Menu/CBindingBase.cs:710–710](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L710-L710)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetGxChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TargetGyChanged` · L711–711

[Drilling.UI/Menu/CBindingBase.cs:711–711](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L711-L711)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetGyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TargetGzChanged` · L712–712

[Drilling.UI/Menu/CBindingBase.cs:712–712](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L712-L712)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetGzChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TargetItemsChanged` · L713–713

[Drilling.UI/Menu/CBindingBase.cs:713–713](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L713-L713)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetItemsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TargetPositionChanged` · L714–714

[Drilling.UI/Menu/CBindingBase.cs:714–714](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L714-L714)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TargetPositionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TextBrushChanged` · L715–715

[Drilling.UI/Menu/CBindingBase.cs:715–715](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L715-L715)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TextBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ThemeModeTextChanged` · L716–716

[Drilling.UI/Menu/CBindingBase.cs:716–716](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L716-L716)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ThemeModeTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ThemeToggleTextChanged` · L717–717

[Drilling.UI/Menu/CBindingBase.cs:717–717](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L717-L717)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ThemeToggleTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TitleChanged` · L718–718

[Drilling.UI/Menu/CBindingBase.cs:718–718](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L718-L718)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ToggleOperationModeCommandChanged` · L719–719

[Drilling.UI/Menu/CBindingBase.cs:719–719](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L719-L719)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ToggleOperationModeCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ToggleMelsecWriteLockCommandChanged` · L720–720

[Drilling.UI/Menu/CBindingBase.cs:720–720](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L720-L720)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ToggleMelsecWriteLockCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TogglePointCommandChanged` · L721–721

[Drilling.UI/Menu/CBindingBase.cs:721–721](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L721-L721)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TogglePointCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TogglePreviewHeadCommandChanged` · L722–722

[Drilling.UI/Menu/CBindingBase.cs:722–722](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L722-L722)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TogglePreviewHeadCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ToggleThemeCommandChanged` · L723–723

[Drilling.UI/Menu/CBindingBase.cs:723–723](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L723-L723)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ToggleThemeCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TotalShotsTextChanged` · L724–724

[Drilling.UI/Menu/CBindingBase.cs:724–724](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L724-L724)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TotalShotsTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TrendChanged` · L725–725

[Drilling.UI/Menu/CBindingBase.cs:725–725](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L725-L725)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TrendChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TrendBarsChanged` · L726–726

[Drilling.UI/Menu/CBindingBase.cs:726–726](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L726-L726)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TrendBarsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TrendPanelTitleChanged` · L727–727

[Drilling.UI/Menu/CBindingBase.cs:727–727](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L727-L727)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TrendPanelTitleChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TrendPointsChanged` · L728–728

[Drilling.UI/Menu/CBindingBase.cs:728–728](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L728-L728)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TrendPointsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TypeChanged` · L729–729

[Drilling.UI/Menu/CBindingBase.cs:729–729](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L729-L729)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TypeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TypeBrushChanged` · L730–730

[Drilling.UI/Menu/CBindingBase.cs:730–730](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L730-L730)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TypeBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `TypeOptionsChanged` · L731–731

[Drilling.UI/Menu/CBindingBase.cs:731–731](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L731-L731)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.TypeOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `UnitChanged` · L732–732

[Drilling.UI/Menu/CBindingBase.cs:732–732](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L732-L732)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UnitChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `UseBrushChanged` · L733–733

[Drilling.UI/Menu/CBindingBase.cs:733–733](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L733-L733)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UseBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `UsesSelectionEditorChanged` · L734–734

[Drilling.UI/Menu/CBindingBase.cs:734–734](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L734-L734)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UsesSelectionEditorChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `UseStretchScalePropertyChanged` · L735–735

[Drilling.UI/Menu/CBindingBase.cs:735–735](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L735-L735)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UseStretchScalePropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `UsesWriteSelectionChanged` · L736–736

[Drilling.UI/Menu/CBindingBase.cs:736–736](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L736-L736)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UsesWriteSelectionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `UseTextChanged` · L737–737

[Drilling.UI/Menu/CBindingBase.cs:737–737](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L737-L737)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.UseTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ValueChanged` · L738–738

[Drilling.UI/Menu/CBindingBase.cs:738–738](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L738-L738)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ValueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ValueBrushChanged` · L739–739

[Drilling.UI/Menu/CBindingBase.cs:739–739](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L739-L739)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ValueBrushChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ValueOptionsChanged` · L740–740

[Drilling.UI/Menu/CBindingBase.cs:740–740](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L740-L740)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ValueOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ValueStateChanged` · L741–741

[Drilling.UI/Menu/CBindingBase.cs:741–741](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L741-L741)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ValueStateChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolCommandDescriptionChanged` · L742–742

[Drilling.UI/Menu/CBindingBase.cs:742–742](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L742-L742)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolCommandDescriptionChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolEndpointChanged` · L743–743

[Drilling.UI/Menu/CBindingBase.cs:743–743](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L743-L743)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolEndpointChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolHasNoArgumentsChanged` · L744–744

[Drilling.UI/Menu/CBindingBase.cs:744–744](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L744-L744)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolHasNoArgumentsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolInspectionTypeChanged` · L745–745

[Drilling.UI/Menu/CBindingBase.cs:745–745](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L745-L745)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolInspectionTypeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolIsFlyingReadyChanged` · L746–746

[Drilling.UI/Menu/CBindingBase.cs:746–746](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L746-L746)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolIsFlyingReadyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolKeepAliveChanged` · L747–747

[Drilling.UI/Menu/CBindingBase.cs:747–747](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L747-L747)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolKeepAliveChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolMarkRowCountTextChanged` · L748–748

[Drilling.UI/Menu/CBindingBase.cs:748–748](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L748-L748)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolMarkRowCountTextChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolRequestPreviewChanged` · L749–749

[Drilling.UI/Menu/CBindingBase.cs:749–749](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L749-L749)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolRequestPreviewChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolStatusChanged` · L750–750

[Drilling.UI/Menu/CBindingBase.cs:750–750](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L750-L750)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolStatusChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `VisionProtocolUsesMarkRowsChanged` · L751–751

[Drilling.UI/Menu/CBindingBase.cs:751–751](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L751-L751)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.VisionProtocolUsesMarkRowsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `ZPositionMoveCommandChanged` · L752–752

[Drilling.UI/Menu/CBindingBase.cs:752–752](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L752-L752)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.ZPositionMoveCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `WaitChanged` · L753–753

[Drilling.UI/Menu/CBindingBase.cs:753–753](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L753-L753)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WaitChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `WriteInputTypeChanged` · L754–754

[Drilling.UI/Menu/CBindingBase.cs:754–754](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L754-L754)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WriteInputTypeChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `WriteMelsecCommandChanged` · L755–755

[Drilling.UI/Menu/CBindingBase.cs:755–755](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L755-L755)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WriteMelsecCommandChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `WriteValueChanged` · L756–756

[Drilling.UI/Menu/CBindingBase.cs:756–756](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L756-L756)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WriteValueChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `WriteValueOptionsChanged` · L757–757

[Drilling.UI/Menu/CBindingBase.cs:757–757](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L757-L757)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.WriteValueOptionsChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `XLabelChanged` · L758–758

[Drilling.UI/Menu/CBindingBase.cs:758–758](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L758-L758)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.XLabelChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `YLabelChanged` · L759–759

[Drilling.UI/Menu/CBindingBase.cs:759–759](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L759-L759)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.Menu.CBindingBase.YLabelChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetProperty` · L760–770

[Drilling.UI/Menu/CBindingBase.cs:760–770](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L760-L770)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Menu.CBindingBase.SetProperty<T>(ref T, T, string?) |
| 접근/수식자 | Protected / protected |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| field | T | Ref | False /  |
| value | T | None | False /  |
| propertyName | string? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:293–293](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L293-L293) | SetProperty | False |
| [Drilling.UI/CRootView.cs:343–343](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L343-L343) | SetProperty | False |
| [Drilling.UI/CRootView.cs:356–356](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L356-L356) | SetProperty | False |
| [Drilling.UI/CRootView.cs:369–369](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L369-L369) | SetProperty | False |
| [Drilling.UI/CRootView.cs:382–382](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L382-L382) | SetProperty | False |
| [Drilling.UI/CRootView.cs:425–425](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L425-L425) | SetProperty | False |
| [Drilling.UI/CRootView.cs:438–438](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L438-L438) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuBase.cs:541–541](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuBase.cs#L541-L541) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:303–303](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L303-L303) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:316–316](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L316-L316) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:329–329](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L329-L329) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:475–475](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L475-L475) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:488–488](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L488-L488) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:501–501](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L501-L501) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:514–514](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L514-L514) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:527–527](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L527-L527) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:540–540](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L540-L540) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:553–553](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L553-L553) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:566–566](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L566-L566) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:579–579](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L579-L579) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:592–592](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L592-L592) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:605–605](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L605-L605) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:618–618](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L618-L618) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:631–631](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L631-L631) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:3437–3437](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L3437-L3437) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:3444–3444](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L3444-L3444) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:454–454](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L454-L454) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:467–467](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L467-L467) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:480–480](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L480-L480) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:501–501](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L501-L501) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:514–514](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L514-L514) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:527–527](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L527-L527) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:540–540](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L540-L540) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:553–553](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L553-L553) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:566–566](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L566-L566) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:579–579](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L579-L579) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:593–593](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L593-L593) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:627–627](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L627-L627) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:640–640](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L640-L640) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:644–644](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L644-L644) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:645–645](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L645-L645) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:682–682](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L682-L682) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:713–713](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L713-L713) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:729–729](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L729-L729) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:742–742](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L742-L742) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:755–755](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L755-L755) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:768–768](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L768-L768) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:801–801](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L801-L801) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:825–825](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L825-L825) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:838–838](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L838-L838) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:854–854](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L854-L854) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:880–880](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L880-L880) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:928–928](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L928-L928) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:960–960](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L960-L960) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:973–973](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L973-L973) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:986–986](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L986-L986) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:999–999](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L999-L999) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8316–8316](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8316-L8316) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8448–8448](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8448-L8448) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8461–8461](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8461-L8461) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8474–8474](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8474-L8474) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8487–8487](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8487-L8487) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8500–8500](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8500-L8500) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8513–8513](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8513-L8513) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8526–8526](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8526-L8526) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8561–8561](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8561-L8561) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:8621–8621](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L8621-L8621) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:6979–6979](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L6979-L6979) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:6983–6983](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L6983-L6983) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:6984–6984](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L6984-L6984) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:281–281](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L281-L281) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:299–299](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L299-L299) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:544–544](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L544-L544) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3800–3800](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3800-L3800) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3832–3832](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3832-L3832) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:4051–4051](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L4051-L4051) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:4145–4145](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L4145-L4145) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:184–184](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L184-L184) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1143–1143](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1143-L1143) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1265–1265](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1265-L1265) | SetProperty | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1636–1636](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1636-L1636) | SetProperty | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 762 | EqualityComparer<T>.Default.Equals | resolved | bool System.Collections.Generic.EqualityComparer<T>.Equals(T?, T?) |
| 768 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 762 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EqualityComparer<T>.Default.Equals(field, value) |
| 762 | if | 조건에 따라 분기합니다: if (EqualityComparer<T>.Default.Equals(field, value)) |
| 764 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 767 | assignment | 값을 대상에 대입합니다: field = value |
| 768 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(propertyName) |
| 769 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetProperty"]
 N0["L762 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetSequenceProperty` · L772–782

[Drilling.UI/Menu/CBindingBase.cs:772–782](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L772-L782)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Menu.CBindingBase.SetSequenceProperty<T>(ref System.Collections.Generic.IReadOnlyList<T>, System.Collections.Generic.IReadOnlyList<T>, string?) |
| 접근/수식자 | Protected / protected |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| field | System.Collections.Generic.IReadOnlyList<T> | Ref | False /  |
| value | System.Collections.Generic.IReadOnlyList<T> | None | False /  |
| propertyName | string? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:154–154](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L154-L154) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:173–173](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L173-L173) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:174–174](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L174-L174) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:175–175](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L175-L175) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:186–186](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L186-L186) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:199–199](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L199-L199) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L212-L212) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:225–225](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L225-L225) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:238–238](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L238-L238) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:251–251](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L251-L251) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:264–264](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L264-L264) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:277–277](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L277-L277) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:290–290](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L290-L290) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:357–357](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L357-L357) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:370–370](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L370-L370) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:383–383](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L383-L383) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:396–396](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L396-L396) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:409–409](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L409-L409) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:422–422](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L422-L422) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:656–656](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L656-L656) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:669–669](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L669-L669) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:695–695](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L695-L695) | SetSequenceProperty | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:268–268](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L268-L268) | SetSequenceProperty | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 774 | ReferenceEquals | resolved | bool object.ReferenceEquals(object?, object?) |
| 774 | field.SequenceEqual | resolved | bool System.Collections.Generic.IEnumerable<T>.SequenceEqual<T>(System.Collections.Generic.IEnumerable<T>) |
| 780 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 774 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(field, value) |
| 774 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: field.SequenceEqual(value) |
| 774 | if | 조건에 따라 분기합니다: if (ReferenceEquals(field, value) &#124;&#124; field.SequenceEqual(value)) |
| 776 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 779 | assignment | 값을 대상에 대입합니다: field = value |
| 780 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(propertyName) |
| 781 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetSequenceProperty"]
 N0["L774 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OnPropertyChanged` · L784–3051

[Drilling.UI/Menu/CBindingBase.cs:784–3051](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L784-L3051)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) |
| 접근/수식자 | Protected / protected |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.CBindingBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| propertyName | string? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:228–228](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L228-L228) | OnPropertyChanged | False |
| [Drilling.UI/CRootView.cs:275–275](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L275-L275) | OnPropertyChanged | False |
| [Drilling.UI/CRootView.cs:288–288](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L288-L288) | OnPropertyChanged | False |
| [Drilling.UI/CRootView.cs:577–577](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L577-L577) | OnPropertyChanged | False |
| [Drilling.UI/CRootView.cs:578–578](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L578-L578) | OnPropertyChanged | False |
| [Drilling.UI/CRootView.cs:639–639](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L639-L639) | OnPropertyChanged | False |
| [Drilling.UI/CRootView.cs:731–731](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L731-L731) | OnPropertyChanged | False |
| [Drilling.UI/CRootView.cs:746–746](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L746-L746) | OnPropertyChanged | False |
| [Drilling.UI/CRootView.cs:2724–2724](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2724-L2724) | OnPropertyChanged | False |
| [Drilling.UI/Menu/CBindingBase.cs:768–768](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L768-L768) | OnPropertyChanged | False |
| [Drilling.UI/Menu/CBindingBase.cs:780–780](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/CBindingBase.cs#L780-L780) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuAlarm.cs:114–114](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuAlarm.cs#L114-L114) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:258–258](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L258-L258) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1346–1346](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1346-L1346) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1347–1347](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1347-L1347) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1348–1348](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1348-L1348) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1349–1349](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1349-L1349) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1350–1350](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1350-L1350) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1351–1351](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1351-L1351) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1352–1352](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1352-L1352) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1353–1353](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1353-L1353) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1354–1354](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1354-L1354) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1355–1355](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1355-L1355) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1356–1356](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1356-L1356) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1789–1789](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1789-L1789) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1790–1790](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1790-L1790) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1791–1791](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1791-L1791) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1792–1792](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1792-L1792) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1793–1793](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1793-L1793) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1794–1794](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1794-L1794) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1795–1795](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1795-L1795) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1796–1796](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1796-L1796) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1797–1797](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1797-L1797) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1798–1798](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1798-L1798) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1799–1799](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1799-L1799) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1800–1800](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1800-L1800) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1801–1801](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1801-L1801) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1802–1802](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1802-L1802) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1803–1803](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1803-L1803) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1804–1804](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1804-L1804) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1805–1805](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1805-L1805) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1806–1806](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1806-L1806) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1807–1807](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1807-L1807) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1808–1808](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1808-L1808) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1809–1809](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1809-L1809) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1810–1810](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1810-L1810) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1811–1811](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1811-L1811) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1072–1072](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L1072-L1072) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1073–1073](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L1073-L1073) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:1074–1074](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L1074-L1074) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:3340–3340](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L3340-L3340) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:3341–3341](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L3341-L3341) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:3364–3364](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L3364-L3364) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:3365–3365](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L3365-L3365) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:3439–3439](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L3439-L3439) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:3440–3440](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L3440-L3440) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:595–595](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L595-L595) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:596–596](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L596-L596) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:697–697](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L697-L697) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:770–770](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L770-L770) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:771–771](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L771-L771) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:803–803](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L803-L803) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:840–840](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L840-L840) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:856–856](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L856-L856) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:930–930](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L930-L930) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1720–1720](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1720-L1720) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1905–1905](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1905-L1905) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2129–2129](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2129-L2129) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2130–2130](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2130-L2130) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2131–2131](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2131-L2131) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2132–2132](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2132-L2132) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2133–2133](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2133-L2133) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5533–5533](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L5533-L5533) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5534–5534](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L5534-L5534) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6201–6201](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6201-L6201) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6202–6202](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6202-L6202) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6203–6203](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6203-L6203) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6204–6204](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6204-L6204) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6205–6205](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6205-L6205) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6206–6206](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6206-L6206) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6229–6229](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6229-L6229) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6246–6246](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6246-L6246) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6388–6388](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6388-L6388) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6471–6471](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6471-L6471) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6472–6472](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6472-L6472) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6473–6473](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6473-L6473) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6474–6474](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6474-L6474) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6475–6475](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6475-L6475) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6508–6508](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6508-L6508) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:6509–6509](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6509-L6509) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:494–494](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L494-L494) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:495–495](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L495-L495) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:969–969](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L969-L969) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:970–970](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L970-L970) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:1880–1880](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L1880-L1880) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2873–2873](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2873-L2873) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2874–2874](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2874-L2874) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2875–2875](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2875-L2875) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:5306–5306](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L5306-L5306) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:5313–5313](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L5313-L5313) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:6987–6987](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L6987-L6987) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:6992–6992](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L6992-L6992) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:7165–7165](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L7165-L7165) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:7184–7184](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L7184-L7184) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:7203–7203](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L7203-L7203) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:7514–7514](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L7514-L7514) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:7515–7515](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L7515-L7515) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:7534–7534](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L7534-L7534) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:7535–7535](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L7535-L7535) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:7650–7650](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L7650-L7650) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:314–314](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L314-L314) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:599–599](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L599-L599) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:817–817](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L817-L817) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:818–818](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L818-L818) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:819–819](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L819-L819) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:932–932](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L932-L932) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:933–933](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L933-L933) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:939–939](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L939-L939) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:940–940](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L940-L940) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1370–1370](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1370-L1370) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1371–1371](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1371-L1371) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1372–1372](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1372-L1372) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1373–1373](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1373-L1373) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1374–1374](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1374-L1374) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1375–1375](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1375-L1375) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1376–1376](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1376-L1376) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1449–1449](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1449-L1449) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1450–1450](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1450-L1450) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1451–1451](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1451-L1451) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1452–1452](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1452-L1452) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1453–1453](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1453-L1453) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1588–1588](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1588-L1588) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1589–1589](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1589-L1589) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1590–1590](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1590-L1590) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1591–1591](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1591-L1591) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1592–1592](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1592-L1592) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1613–1613](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1613-L1613) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1614–1614](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1614-L1614) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1615–1615](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1615-L1615) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2081–2081](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2081-L2081) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2082–2082](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2082-L2082) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2083–2083](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2083-L2083) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2084–2084](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2084-L2084) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2085–2085](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2085-L2085) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2086–2086](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2086-L2086) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2087–2087](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2087-L2087) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2088–2088](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2088-L2088) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2089–2089](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2089-L2089) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2090–2090](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2090-L2090) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2091–2091](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2091-L2091) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2092–2092](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2092-L2092) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2093–2093](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2093-L2093) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2094–2094](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2094-L2094) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2095–2095](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2095-L2095) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2096–2096](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2096-L2096) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2097–2097](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2097-L2097) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2098–2098](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2098-L2098) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2099–2099](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2099-L2099) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2100–2100](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2100-L2100) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2101–2101](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2101-L2101) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2102–2102](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2102-L2102) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2103–2103](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2103-L2103) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2104–2104](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2104-L2104) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2105–2105](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2105-L2105) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2106–2106](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2106-L2106) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2107–2107](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2107-L2107) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2108–2108](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2108-L2108) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2109–2109](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2109-L2109) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2110–2110](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2110-L2110) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2727–2727](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2727-L2727) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2728–2728](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2728-L2728) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:2768–2768](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L2768-L2768) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3594–3601](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3594-L3601) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3834–3834](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3834-L3834) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3835–3835](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3835-L3835) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3836–3836](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3836-L3836) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3837–3837](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3837-L3837) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3838–3838](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3838-L3838) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3839–3839](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3839-L3839) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3840–3840](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3840-L3840) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3842–3842](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3842-L3842) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3843–3843](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3843-L3843) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3844–3844](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3844-L3844) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3845–3845](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3845-L3845) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:4057–4057](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L4057-L4057) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:4120–4120](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L4120-L4120) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:4121–4121](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L4121-L4121) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:4147–4147](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L4147-L4147) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:552–552](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L552-L552) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:795–795](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L795-L795) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:796–796](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L796-L796) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:797–797](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L797-L797) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:799–799](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L799-L799) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:800–800](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L800-L800) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:801–801](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L801-L801) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:802–802](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L802-L802) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:803–803](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L803-L803) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:804–804](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L804-L804) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:805–805](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L805-L805) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:806–806](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L806-L806) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:807–807](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L807-L807) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:808–808](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L808-L808) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:809–809](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L809-L809) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:810–810](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L810-L810) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:811–811](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L811-L811) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:913–913](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L913-L913) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:914–914](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L914-L914) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:915–915](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L915-L915) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:916–916](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L916-L916) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:917–917](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L917-L917) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:918–918](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L918-L918) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:919–919](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L919-L919) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:920–920](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L920-L920) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:921–921](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L921-L921) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:922–922](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L922-L922) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:923–923](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L923-L923) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:955–955](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L955-L955) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:956–956](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L956-L956) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:957–957](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L957-L957) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:958–958](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L958-L958) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:959–959](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L959-L959) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:960–960](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L960-L960) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:961–961](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L961-L961) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:962–962](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L962-L962) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:963–963](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L963-L963) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:964–964](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L964-L964) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:965–965](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L965-L965) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:966–966](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L966-L966) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:967–967](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L967-L967) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:968–968](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L968-L968) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:969–969](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L969-L969) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:970–970](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L970-L970) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:971–971](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L971-L971) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:972–972](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L972-L972) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:973–973](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L973-L973) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:974–974](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L974-L974) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:975–975](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L975-L975) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:976–976](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L976-L976) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:977–977](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L977-L977) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:978–978](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L978-L978) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:979–979](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L979-L979) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:980–980](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L980-L980) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1172–1172](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1172-L1172) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1173–1173](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1173-L1173) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1174–1174](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1174-L1174) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1175–1175](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1175-L1175) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1176–1176](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1176-L1176) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1177–1177](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1177-L1177) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1178–1178](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1178-L1178) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1179–1179](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1179-L1179) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1180–1180](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1180-L1180) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1181–1181](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1181-L1181) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1182–1182](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1182-L1182) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1183–1183](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1183-L1183) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1184–1184](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1184-L1184) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1185–1185](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1185-L1185) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1271–1271](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1271-L1271) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1298–1298](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1298-L1298) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1326–1326](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1326-L1326) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1327–1327](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1327-L1327) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1328–1328](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1328-L1328) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1338–1338](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1338-L1338) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1339–1339](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1339-L1339) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1349–1349](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1349-L1349) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1372–1372](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1372-L1372) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1373–1373](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1373-L1373) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1381–1381](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1381-L1381) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1476–1476](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1476-L1476) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1477–1477](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1477-L1477) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1478–1478](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1478-L1478) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1499–1499](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1499-L1499) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1500–1500](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1500-L1500) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1524–1524](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1524-L1524) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1525–1525](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1525-L1525) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1526–1526](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1526-L1526) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1617–1617](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1617-L1617) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1618–1618](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1618-L1618) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1619–1619](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1619-L1619) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1620–1620](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1620-L1620) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1621–1621](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1621-L1621) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1622–1622](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1622-L1622) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1623–1623](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1623-L1623) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1638–1638](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1638-L1638) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1639–1639](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1639-L1639) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1640–1640](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1640-L1640) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1641–1641](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1641-L1641) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1642–1642](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1642-L1642) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1643–1643](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1643-L1643) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1644–1644](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1644-L1644) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1670–1670](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1670-L1670) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1671–1671](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1671-L1671) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1672–1672](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1672-L1672) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1673–1673](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1673-L1673) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1674–1674](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1674-L1674) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1675–1675](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1675-L1675) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2631–2631](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2631-L2631) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2632–2632](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2632-L2632) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2633–2633](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2633-L2633) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2634–2634](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2634-L2634) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2635–2635](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2635-L2635) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2636–2636](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2636-L2636) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2637–2637](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2637-L2637) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2728–2728](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2728-L2728) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2729–2729](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2729-L2729) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2730–2730](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2730-L2730) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2731–2731](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2731-L2731) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2732–2732](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2732-L2732) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2733–2733](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2733-L2733) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2734–2734](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2734-L2734) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2735–2735](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2735-L2735) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2736–2736](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2736-L2736) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2737–2737](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2737-L2737) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2738–2738](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2738-L2738) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2739–2739](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2739-L2739) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2740–2740](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2740-L2740) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2741–2741](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2741-L2741) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2742–2742](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2742-L2742) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2743–2743](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2743-L2743) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2881–2881](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2881-L2881) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2882–2882](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2882-L2882) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2883–2883](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2883-L2883) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2884–2884](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2884-L2884) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2885–2885](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L2885-L2885) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3027–3027](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3027-L3027) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3028–3028](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3028-L3028) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3029–3029](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3029-L3029) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3030–3030](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3030-L3030) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3073–3073](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3073-L3073) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3096–3096](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3096-L3096) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3132–3132](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3132-L3132) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3165–3165](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3165-L3165) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3173–3173](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3173-L3173) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3194–3194](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3194-L3194) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3195–3195](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3195-L3195) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3196–3196](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3196-L3196) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3404–3404](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3404-L3404) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3459–3459](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3459-L3459) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3466–3466](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3466-L3466) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3467–3467](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3467-L3467) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3468–3468](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3468-L3468) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3469–3469](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3469-L3469) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3470–3470](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3470-L3470) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3471–3471](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3471-L3471) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3472–3472](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3472-L3472) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3473–3473](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3473-L3473) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3477–3477](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3477-L3477) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3687–3687](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3687-L3687) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3688–3688](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3688-L3688) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3704–3704](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3704-L3704) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3705–3705](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3705-L3705) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3820–3820](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3820-L3820) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3821–3821](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3821-L3821) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3862–3862](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3862-L3862) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3867–3867](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3867-L3867) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3868–3868](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3868-L3868) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3890–3890](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3890-L3890) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3891–3891](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3891-L3891) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3892–3892](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3892-L3892) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3893–3893](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3893-L3893) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3894–3894](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3894-L3894) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3895–3895](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3895-L3895) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3896–3896](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3896-L3896) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3897–3897](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3897-L3897) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4022–4022](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4022-L4022) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4078–4078](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4078-L4078) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4145–4145](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4145-L4145) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4146–4146](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4146-L4146) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4147–4147](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4147-L4147) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4148–4148](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4148-L4148) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4149–4149](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4149-L4149) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4150–4150](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4150-L4150) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4151–4151](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4151-L4151) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4152–4152](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4152-L4152) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4153–4153](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4153-L4153) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4154–4154](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4154-L4154) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4155–4155](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4155-L4155) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4158–4158](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4158-L4158) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4224–4224](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4224-L4224) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4255–4255](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4255-L4255) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4256–4256](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4256-L4256) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4257–4257](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4257-L4257) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4258–4258](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4258-L4258) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4259–4259](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4259-L4259) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4260–4260](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4260-L4260) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4261–4261](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4261-L4261) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4262–4262](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4262-L4262) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4263–4263](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4263-L4263) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4264–4264](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4264-L4264) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4265–4265](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4265-L4265) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4266–4266](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4266-L4266) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4267–4267](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4267-L4267) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4268–4268](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4268-L4268) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4269–4269](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4269-L4269) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4270–4270](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4270-L4270) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4271–4271](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4271-L4271) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4272–4272](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4272-L4272) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4273–4273](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4273-L4273) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4274–4274](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4274-L4274) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4275–4275](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4275-L4275) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4276–4276](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4276-L4276) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4277–4277](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4277-L4277) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4278–4278](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4278-L4278) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4279–4279](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4279-L4279) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4280–4280](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4280-L4280) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4281–4281](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4281-L4281) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4282–4282](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4282-L4282) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4283–4283](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4283-L4283) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4397–4397](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4397-L4397) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4419–4419](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4419-L4419) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4487–4487](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4487-L4487) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4512–4512](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4512-L4512) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4885–4885](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4885-L4885) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4886–4886](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4886-L4886) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5495–5495](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5495-L5495) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5496–5496](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5496-L5496) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5497–5497](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5497-L5497) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5498–5498](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5498-L5498) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5499–5499](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5499-L5499) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5500–5500](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5500-L5500) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5501–5501](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5501-L5501) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5502–5502](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5502-L5502) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5513–5513](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5513-L5513) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5514–5514](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5514-L5514) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5515–5515](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5515-L5515) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5523–5523](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5523-L5523) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5524–5524](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5524-L5524) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5649–5649](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5649-L5649) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5650–5650](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5650-L5650) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5651–5651](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5651-L5651) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5652–5652](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5652-L5652) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5653–5653](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5653-L5653) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5654–5654](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5654-L5654) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5655–5655](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5655-L5655) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:625–625](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L625-L625) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1149–1149](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1149-L1149) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1150–1150](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1150-L1150) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1151–1151](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1151-L1151) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1152–1152](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1152-L1152) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1267–1267](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1267-L1267) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1641–1641](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1641-L1641) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1642–1642](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1642-L1642) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1643–1643](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1643-L1643) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1644–1644](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1644-L1644) | OnPropertyChanged | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1645–1645](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1645-L1645) | OnPropertyChanged | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 789 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 792 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 795 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 798 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 801 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 804 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 807 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 810 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 813 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 816 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 819 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 822 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 825 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 828 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 831 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 834 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 837 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 840 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 843 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 846 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 849 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 852 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 855 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 858 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 861 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 864 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 867 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 870 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 873 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 876 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 879 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 882 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 885 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 888 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 891 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 894 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 897 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 900 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 903 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 906 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 909 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 912 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 915 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 918 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 921 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 924 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 927 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 930 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 933 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 936 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 939 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 942 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 945 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 948 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 951 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 954 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 957 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 960 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 963 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 966 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 969 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 972 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 975 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 978 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 981 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 984 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 987 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 990 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 993 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 996 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 999 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1002 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1005 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1008 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1011 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1014 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1017 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1020 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1023 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1026 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1029 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1032 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1035 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1038 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1041 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1044 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1047 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1050 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1053 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1056 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1059 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1062 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1065 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1068 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1071 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1074 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1077 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1080 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1083 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1086 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1089 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1092 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1095 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1098 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1101 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1104 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1107 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1110 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1113 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1116 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1119 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1122 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1125 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1128 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1131 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1134 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1137 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1140 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1143 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1146 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1149 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1152 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1155 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1158 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1161 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1164 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1167 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1170 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1173 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1176 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1179 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1182 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1185 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1188 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1191 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1194 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1197 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1200 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1203 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1206 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1209 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1212 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1215 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1218 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1221 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1224 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1227 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1230 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1233 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1236 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1239 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1242 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1245 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1248 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1251 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1254 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1257 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1260 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1263 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1266 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1269 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1272 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1275 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1278 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1281 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1284 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1287 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1290 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1293 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1296 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1299 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1302 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1305 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1308 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1311 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1314 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1317 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1320 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1323 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1326 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1329 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1332 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1335 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1338 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1341 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1344 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1347 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1350 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1353 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1356 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1359 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1362 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1365 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1368 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1371 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1374 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1377 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1380 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1383 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1386 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1389 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1392 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1395 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1398 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1401 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1404 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1407 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1410 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1413 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1416 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1419 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1422 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1425 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1428 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1431 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1434 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1437 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1440 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1443 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1446 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1449 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1452 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1455 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1458 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1461 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1464 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1467 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1470 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1473 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1476 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1479 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1482 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1485 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1488 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1491 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1494 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1497 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1500 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1503 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1506 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1509 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1512 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1515 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1518 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1521 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1524 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1527 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1530 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1533 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1536 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1539 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1542 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1545 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1548 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1551 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1554 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1557 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1560 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1563 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1566 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1569 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1572 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1575 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1578 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1581 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1584 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1587 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1590 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1593 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1596 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1599 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1602 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1605 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1608 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1611 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1614 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1617 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1620 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1623 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1626 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1629 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1632 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1635 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1638 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1641 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1644 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1647 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1650 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1653 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1656 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1659 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1662 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1665 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1668 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1671 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1674 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1677 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1680 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1683 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1686 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1689 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1692 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1695 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1698 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1701 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1704 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1707 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1710 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1713 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1716 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1719 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1722 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1725 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1728 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1731 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1734 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1737 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1740 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1743 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1746 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1749 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1752 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1755 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1758 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1761 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1764 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1767 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1770 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1773 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1776 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1779 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1782 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1785 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1788 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1791 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1794 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1797 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1800 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1803 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1806 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1809 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1812 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1815 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1818 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1821 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1824 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1827 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1830 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1833 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1836 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1839 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1842 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1845 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1848 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1851 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1854 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1857 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1860 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1863 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1866 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1869 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1872 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1875 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1878 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1881 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1884 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1887 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1890 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1893 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1896 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1899 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1902 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1905 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1908 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1911 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1914 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1917 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1920 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1923 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1926 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1929 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1932 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1935 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1938 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1941 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1944 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1947 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1950 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1953 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1956 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1959 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1962 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1965 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1968 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1971 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1974 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1977 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1980 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1983 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1986 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1989 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1992 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1995 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 1998 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2001 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2004 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2007 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2010 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2013 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2016 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2019 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2022 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2025 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2028 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2031 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2034 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2037 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2040 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2043 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2046 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2049 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2052 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2055 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2058 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2061 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2064 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2067 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2070 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2073 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2076 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2079 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2082 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2085 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2088 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2091 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2094 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2097 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2100 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2103 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2106 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2109 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2112 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2115 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2118 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2121 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2124 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2127 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2130 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2133 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2136 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2139 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2142 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2145 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2148 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2151 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2154 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2157 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2160 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2163 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2166 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2169 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2172 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2175 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2178 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2181 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2184 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2187 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2190 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2193 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2196 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2199 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2202 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2205 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2208 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2211 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2214 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2217 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2220 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2223 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2226 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2229 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2232 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2235 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2238 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2241 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2244 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2247 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2250 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2253 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2256 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2259 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2262 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2265 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2268 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2271 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2274 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2277 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2280 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2283 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2286 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2289 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2292 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2295 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2298 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2301 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2304 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2307 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2310 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2313 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2316 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2319 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2322 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2325 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2328 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2331 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2334 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2337 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2340 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2343 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2346 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2349 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2352 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2355 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2358 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2361 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2364 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2367 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2370 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2373 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2376 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2379 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2382 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2385 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2388 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2391 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2394 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2397 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2400 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2403 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2406 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2409 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2412 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2415 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2418 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2421 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2424 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2427 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2430 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2433 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2436 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2439 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2442 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2445 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2448 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2451 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2454 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2457 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2460 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2463 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2466 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2469 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2472 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2475 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2478 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2481 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2484 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2487 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2490 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2493 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2496 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2499 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2502 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2505 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2508 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2511 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2514 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2517 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2520 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2523 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2526 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2529 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2532 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2535 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2538 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2541 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2544 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2547 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2550 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2553 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2556 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2559 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2562 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2565 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2568 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2571 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2574 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2577 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2580 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2583 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2586 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2589 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2592 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2595 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2598 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2601 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2604 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2607 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2610 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2613 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2616 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2619 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2622 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2625 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2628 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2631 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2634 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2637 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2640 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2643 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2646 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2649 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2652 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2655 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2658 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2661 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2664 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2667 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2670 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2673 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2676 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2679 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2682 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2685 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2688 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2691 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2694 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2697 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2700 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2703 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2706 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2709 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2712 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2715 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2718 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2721 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2724 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2727 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2730 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2733 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2736 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2739 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2742 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2745 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2748 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2751 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2754 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2757 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2760 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2763 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2766 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2769 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2772 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2775 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2778 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2781 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2784 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2787 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2790 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2793 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2796 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2799 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2802 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2805 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2808 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2811 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2814 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2817 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2820 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2823 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2826 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2829 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2832 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2835 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2838 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2841 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2844 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2847 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2850 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2853 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2856 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2859 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2862 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2865 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2868 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2871 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2874 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2877 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2880 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2883 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2886 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2889 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2892 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2895 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2898 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2901 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2904 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2907 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2910 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2913 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2916 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2919 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2922 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2925 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2928 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2931 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2934 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2937 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2940 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2943 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2946 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2949 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2952 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2955 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2958 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2961 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2964 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2967 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2970 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2973 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2976 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2979 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2982 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2985 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2988 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2991 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2994 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 2997 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3000 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3003 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3006 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3009 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3012 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3015 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3018 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3021 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3024 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3027 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3030 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3033 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3036 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3039 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3042 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3045 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |
| 3048 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 786 | switch | 값에 따라 분기합니다: switch (propertyName) |
| 788 | case | 분기값/패턴의 구간입니다: case "ActiveInspectionShotText": |
| 789 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 790 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 791 | case | 분기값/패턴의 구간입니다: case "IsActiveSelection": |
| 792 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 793 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 794 | case | 분기값/패턴의 구간입니다: case "BeamInspectionAssignmentSummary": |
| 795 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 796 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 797 | case | 분기값/패턴의 구간입니다: case "BeamInspectionShotAssignments": |
| 798 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 799 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 800 | case | 분기값/패턴의 구간입니다: case "CanBrowseRunShots": |
| 801 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 802 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 803 | case | 분기값/패턴의 구간입니다: case "CanClearLoadedRunReviewResult": |
| 804 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 805 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 806 | case | 분기값/패턴의 구간입니다: case "CanCommitInspectionShot": |
| 807 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 808 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 809 | case | 분기값/패턴의 구간입니다: case "CanDeleteInspectionShot": |
| 810 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 811 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 812 | case | 분기값/패턴의 구간입니다: case "CanEditActiveInspectionBeams": |
| 813 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 814 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 815 | case | 분기값/패턴의 구간입니다: case "CanLoadRunReviewResult": |
| 816 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 817 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 818 | case | 분기값/패턴의 구간입니다: case "CanStopOneShot": |
| 819 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 820 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 821 | case | 분기값/패턴의 구간입니다: case "InspectionListCommitText": |
| 822 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 823 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 824 | case | 분기값/패턴의 구간입니다: case "IsReviewHeadCardsVisible": |
| 825 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 826 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 827 | case | 분기값/패턴의 구간입니다: case "IsRunStageStatusVisible": |
| 828 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 829 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 830 | case | 분기값/패턴의 구간입니다: case "IsShotInspectionOngoing": |
| 831 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 832 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 833 | case | 분기값/패턴의 구간입니다: case "IsSingleBeamSelectionMode": |
| 834 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 835 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 836 | case | 분기값/패턴의 구간입니다: case "ReviewLevelLegendItems": |
| 837 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 838 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 839 | case | 분기값/패턴의 구간입니다: case "SelectedBeamInspectionAssignment": |
| 840 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 841 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 842 | case | 분기값/패턴의 구간입니다: case "AbleBrush": |
| 843 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 844 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 845 | case | 분기값/패턴의 구간입니다: case "AccentBrush": |
| 846 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 847 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 848 | case | 분기값/패턴의 구간입니다: case "Access": |
| 849 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 850 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 851 | case | 분기값/패턴의 구간입니다: case "Actions": |
| 852 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 853 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 854 | case | 분기값/패턴의 구간입니다: case "Active": |
| 855 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 856 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 857 | case | 분기값/패턴의 구간입니다: case "Address": |
| 858 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 859 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 860 | case | 분기값/패턴의 구간입니다: case "AfterBrush": |
| 861 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 862 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 863 | case | 분기값/패턴의 구간입니다: case "AkMarginXItem": |
| 864 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 865 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 866 | case | 분기값/패턴의 구간입니다: case "AkMarginYItem": |
| 867 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 868 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 869 | case | 분기값/패턴의 구간입니다: case "Alarm": |
| 870 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 871 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 872 | case | 분기값/패턴의 구간입니다: case "AlarmBrush": |
| 873 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 874 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 875 | case | 분기값/패턴의 구간입니다: case "AlarmDetail": |
| 876 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 877 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 878 | case | 분기값/패턴의 구간입니다: case "AlarmResetCommand": |
| 879 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 880 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 881 | case | 분기값/패턴의 구간입니다: case "AllInterfaceRows": |
| 882 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 883 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 884 | case | 분기값/패턴의 구간입니다: case "AllManagedItems": |
| 885 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 886 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 887 | case | 분기값/패턴의 구간입니다: case "AllParameterRows": |
| 888 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 889 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 890 | case | 분기값/패턴의 구간입니다: case "ApplyOneHoleReviewOffsetCommand": |
| 891 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 892 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 893 | case | 분기값/패턴의 구간입니다: case "ApplyPreviewRows": |
| 894 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 895 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 896 | case | 분기값/패턴의 구간입니다: case "ApplyRows": |
| 897 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 898 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 899 | case | 분기값/패턴의 구간입니다: case "Arg1": |
| 900 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 901 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 902 | case | 분기값/패턴의 구간입니다: case "Arg2": |
| 903 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 904 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 905 | case | 분기값/패턴의 구간입니다: case "Arg3": |
| 906 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 907 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 908 | case | 분기값/패턴의 구간입니다: case "Arg4": |
| 909 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 910 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 911 | case | 분기값/패턴의 구간입니다: case "Arg5": |
| 912 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 913 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 914 | case | 분기값/패턴의 구간입니다: case "AttenuatorSettingItems": |
| 915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 916 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 917 | case | 분기값/패턴의 구간입니다: case "AttenuatorStateBrush": |
| 918 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 919 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 920 | case | 분기값/패턴의 구간입니다: case "AttenuatorStatusItems": |
| 921 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 922 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 923 | case | 분기값/패턴의 구간입니다: case "AttenuatorText": |
| 924 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 925 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 926 | case | 분기값/패턴의 구간입니다: case "AutoConnection": |
| 927 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 928 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 929 | case | 분기값/패턴의 구간입니다: case "AutoConnectionOptions": |
| 930 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 931 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 932 | case | 분기값/패턴의 구간입니다: case "AutomationControllerStatusItems": |
| 933 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 934 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 935 | case | 분기값/패턴의 구간입니다: case "Axis": |
| 936 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 937 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 938 | case | 분기값/패턴의 구간입니다: case "AxisId": |
| 939 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 940 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 941 | case | 분기값/패턴의 구간입니다: case "AxisRows": |
| 942 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 943 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 944 | case | 분기값/패턴의 구간입니다: case "BackgroundBrush": |
| 945 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 946 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 947 | case | 분기값/패턴의 구간입니다: case "BackToCellPreviewCommand": |
| 948 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 949 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 950 | case | 분기값/패턴의 구간입니다: case "BackToCoordinateGlassPreviewCommand": |
| 951 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 952 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 953 | case | 분기값/패턴의 구간입니다: case "BackToOneHoleCellMapCommand": |
| 954 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 955 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 956 | case | 분기값/패턴의 구간입니다: case "BackToOneHoleHoleMapCommand": |
| 957 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 958 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 959 | case | 분기값/패턴의 구간입니다: case "BackToRunGlassPreviewCommand": |
| 960 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 961 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 962 | case | 분기값/패턴의 구간입니다: case "BackToRunShotMapCommand": |
| 963 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 964 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 965 | case | 분기값/패턴의 구간입니다: case "BackToSampleGlassPreviewCommand": |
| 966 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 967 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 968 | case | 분기값/패턴의 구간입니다: case "BaseCenterX": |
| 969 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 970 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 971 | case | 분기값/패턴의 구간입니다: case "BaseCenterY": |
| 972 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 973 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 974 | case | 분기값/패턴의 구간입니다: case "BeamOptions": |
| 975 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 976 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 977 | case | 분기값/패턴의 구간입니다: case "BeamSelectionSummary": |
| 978 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 979 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 980 | case | 분기값/패턴의 구간입니다: case "BetDivergenceText": |
| 981 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 982 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 983 | case | 분기값/패턴의 구간입니다: case "BetMagnificationText": |
| 984 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 985 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 986 | case | 분기값/패턴의 구간입니다: case "BetStateBrush": |
| 987 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 988 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 989 | case | 분기값/패턴의 구간입니다: case "BetTableRows": |
| 990 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 991 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 992 | case | 분기값/패턴의 구간입니다: case "BlockedItems": |
| 993 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 994 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 995 | case | 분기값/패턴의 구간입니다: case "BorderBrush": |
| 996 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 997 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 998 | case | 분기값/패턴의 구간입니다: case "BuzzerOffCommand": |
| 999 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1000 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1001 | case | 분기값/패턴의 구간입니다: case "CalculatedOffsetRows": |
| 1002 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1003 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1004 | case | 분기값/패턴의 구간입니다: case "CanApplyOneHoleReviewOffset": |
| 1005 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1006 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1007 | case | 분기값/패턴의 구간입니다: case "CancelCommand": |
| 1008 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1009 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1010 | case | 분기값/패턴의 구간입니다: case "CandidateRows": |
| 1011 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1012 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1013 | case | 분기값/패턴의 구간입니다: case "CanOperateSelectedInterface": |
| 1014 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1015 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1016 | case | 분기값/패턴의 구간입니다: case "CanRead": |
| 1017 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1018 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1019 | case | 분기값/패턴의 구간입니다: case "CanLoadBeamInspectionResult": |
| 1020 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1021 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1022 | case | 분기값/패턴의 구간입니다: case "CanClearLoadedBeamInspectionResult": |
| 1023 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1024 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1025 | case | 분기값/패턴의 구간입니다: case "CanSelectBeam": |
| 1026 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1027 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1028 | case | 분기값/패턴의 구간입니다: case "CanSelectInspectionMethod": |
| 1029 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1030 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1031 | case | 분기값/패턴의 구간입니다: case "CanWrite": |
| 1032 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1033 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1034 | case | 분기값/패턴의 구간입니다: case "CAppStartup": |
| 1035 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1036 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1037 | case | 분기값/패턴의 구간입니다: case "Category": |
| 1038 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1039 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1040 | case | 분기값/패턴의 구간입니다: case "CButtonCommandBehavior": |
| 1041 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1042 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1043 | case | 분기값/패턴의 구간입니다: case "CellMapDesignHeight": |
| 1044 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1045 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1046 | case | 분기값/패턴의 구간입니다: case "CellMapDesignWidth": |
| 1047 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1048 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1049 | case | 분기값/패턴의 구간입니다: case "CellNo": |
| 1050 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1051 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1052 | case | 분기값/패턴의 구간입니다: case "CellModelTypeCountItem": |
| 1053 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1054 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1055 | case | 분기값/패턴의 구간입니다: case "CellOverviewRows": |
| 1056 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1057 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1058 | case | 분기값/패턴의 구간입니다: case "CellPreviewImage": |
| 1059 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1060 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1061 | case | 분기값/패턴의 구간입니다: case "CellPreviewLabels": |
| 1062 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1063 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1064 | case | 분기값/패턴의 구간입니다: case "CellShotMapImage": |
| 1065 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1066 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1067 | case | 분기값/패턴의 구간입니다: case "CenterMoveCommand": |
| 1068 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1069 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1070 | case | 분기값/패턴의 구간입니다: case "CenterOnCommand": |
| 1071 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1072 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1073 | case | 분기값/패턴의 구간입니다: case "CenterXText": |
| 1074 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1075 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1076 | case | 분기값/패턴의 구간입니다: case "CenterYText": |
| 1077 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1078 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1079 | case | 분기값/패턴의 구간입니다: case "ChangeHistory": |
| 1080 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1081 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1082 | case | 분기값/패턴의 구간입니다: case "ChangeLimit": |
| 1083 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1084 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1085 | case | 분기값/패턴의 구간입니다: case "ChessItem": |
| 1086 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1087 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1088 | case | 분기값/패턴의 구간입니다: case "CInterfaceStatusRow": |
| 1089 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1090 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1091 | case | 분기값/패턴의 구간입니다: case "Column": |
| 1092 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1093 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1094 | case | 분기값/패턴의 구간입니다: case "CommandBlue": |
| 1095 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1096 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1097 | case | 분기값/패턴의 구간입니다: case "CommandBlueBorder": |
| 1098 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1099 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1100 | case | 분기값/패턴의 구간입니다: case "CommandDark": |
| 1101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1102 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1103 | case | 분기값/패턴의 구간입니다: case "CommandDarkBorder": |
| 1104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1105 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1106 | case | 분기값/패턴의 구간입니다: case "CommandGreen": |
| 1107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1108 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1109 | case | 분기값/패턴의 구간입니다: case "CommandGreenBorder": |
| 1110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1111 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1112 | case | 분기값/패턴의 구간입니다: case "CommandHistoryRows": |
| 1113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1114 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1115 | case | 분기값/패턴의 구간입니다: case "CommandLabel": |
| 1116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1117 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1118 | case | 분기값/패턴의 구간입니다: case "CommandOpacity": |
| 1119 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1120 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1121 | case | 분기값/패턴의 구간입니다: case "CommandProperty": |
| 1122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1123 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1124 | case | 분기값/패턴의 구간입니다: case "CommandRed": |
| 1125 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1126 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1127 | case | 분기값/패턴의 구간입니다: case "CommandRedBorder": |
| 1128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1129 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1130 | case | 분기값/패턴의 구간입니다: case "CommandStateItems": |
| 1131 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1132 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1133 | case | 분기값/패턴의 구간입니다: case "CommandStateRows": |
| 1134 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1135 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1136 | case | 분기값/패턴의 구간입니다: case "ConnectInterfaceCommand": |
| 1137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1138 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1139 | case | 분기값/패턴의 구간입니다: case "ContainerHeightProperty": |
| 1140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1141 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1142 | case | 분기값/패턴의 구간입니다: case "ContainerWidthProperty": |
| 1143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1144 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1145 | case | 분기값/패턴의 구간입니다: case "ControllerTaskText": |
| 1146 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1147 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1148 | case | 분기값/패턴의 구간입니다: case "CoordinateBasisDescription": |
| 1149 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1150 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1151 | case | 분기값/패턴의 구간입니다: case "CoordinateBasisOptions": |
| 1152 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1153 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1154 | case | 분기값/패턴의 구간입니다: case "CoordinateCellPreviewLabels": |
| 1155 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1156 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1157 | case | 분기값/패턴의 구간입니다: case "CoordinateGlassPreviewImage": |
| 1158 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1159 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1160 | case | 분기값/패턴의 구간입니다: case "CoordinateGlassPreviewSummary": |
| 1161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1162 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1163 | case | 분기값/패턴의 구간입니다: case "CoordinateIsCellDetailVisible": |
| 1164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1165 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1166 | case | 분기값/패턴의 구간입니다: case "CoordinateIsGlassPreviewVisible": |
| 1167 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1168 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1169 | case | 분기값/패턴의 구간입니다: case "CoordinateSelectedBasisName": |
| 1170 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1171 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1172 | case | 분기값/패턴의 구간입니다: case "CoordinateSelectedCellName": |
| 1173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1174 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1175 | case | 분기값/패턴의 구간입니다: case "CoordinateSelectedRecipeName": |
| 1176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1177 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1178 | case | 분기값/패턴의 구간입니다: case "CoordinateSelectedShotName": |
| 1179 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1180 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1181 | case | 분기값/패턴의 구간입니다: case "CoordinateShotMatrixRows": |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1183 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1184 | case | 분기값/패턴의 구간입니다: case "CoordinateValueRows": |
| 1185 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1186 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1187 | case | 분기값/패턴의 구간입니다: case "CorrectedCenterX": |
| 1188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1189 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1190 | case | 분기값/패턴의 구간입니다: case "CorrectedCenterY": |
| 1191 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1192 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1193 | case | 분기값/패턴의 구간입니다: case "Correction": |
| 1194 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1195 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1196 | case | 분기값/패턴의 구간입니다: case "CPreviewCoordinateBehavior": |
| 1197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1198 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1199 | case | 분기값/패턴의 구간입니다: case "CreateCommand": |
| 1200 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1201 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1202 | case | 분기값/패턴의 구간입니다: case "CThemeManager": |
| 1203 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1204 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1205 | case | 분기값/패턴의 구간입니다: case "CurrentAlarmRows": |
| 1206 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1207 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1208 | case | 분기값/패턴의 구간입니다: case "CurrentAlarms": |
| 1209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1210 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1211 | case | 분기값/패턴의 구간입니다: case "CurrentCellIndicatorText": |
| 1212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1213 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1214 | case | 분기값/패턴의 구간입니다: case "CurrentDateText": |
| 1215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1216 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1217 | case | 분기값/패턴의 구간입니다: case "CurrentOffsetRows": |
| 1218 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1219 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1220 | case | 분기값/패턴의 구간입니다: case "CurrentPosition": |
| 1221 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1222 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1223 | case | 분기값/패턴의 구간입니다: case "CurrentReviewOffsetRecipeName": |
| 1224 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1225 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1226 | case | 분기값/패턴의 구간입니다: case "CurrentScreen": |
| 1227 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1228 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1229 | case | 분기값/패턴의 구간입니다: case "CurrentSettingState": |
| 1230 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1231 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1232 | case | 분기값/패턴의 구간입니다: case "CurrentStepDetails": |
| 1233 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1234 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1235 | case | 분기값/패턴의 구간입니다: case "CurrentTheme": |
| 1236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1237 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1238 | case | 분기값/패턴의 구간입니다: case "CurrentTimeText": |
| 1239 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1240 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1241 | case | 분기값/패턴의 구간입니다: case "CurrentUserText": |
| 1242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1243 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1244 | case | 분기값/패턴의 구간입니다: case "CurrentValueBrush": |
| 1245 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1246 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1247 | case | 분기값/패턴의 구간입니다: case "CycleItems": |
| 1248 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1249 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1250 | case | 분기값/패턴의 구간입니다: case "DataType": |
| 1251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1252 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1253 | case | 분기값/패턴의 구간입니다: case "Default": |
| 1254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1255 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1256 | case | 분기값/패턴의 구간입니다: case "DefaultValue": |
| 1257 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1258 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1259 | case | 분기값/패턴의 구간입니다: case "DeleteCommand": |
| 1260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1261 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1262 | case | 분기값/패턴의 구간입니다: case "Description": |
| 1263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1264 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1265 | case | 분기값/패턴의 구간입니다: case "DesignHeightProperty": |
| 1266 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1267 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1268 | case | 분기값/패턴의 구간입니다: case "DesignWidthProperty": |
| 1269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1270 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1271 | case | 분기값/패턴의 구간입니다: case "Detail": |
| 1272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1273 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1274 | case | 분기값/패턴의 구간입니다: case "DetailBrush": |
| 1275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1276 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1277 | case | 분기값/패턴의 구간입니다: case "DetailItems": |
| 1278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1279 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1280 | case | 분기값/패턴의 구간입니다: case "DetailRows": |
| 1281 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1282 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1283 | case | 분기값/패턴의 구간입니다: case "DetailText": |
| 1284 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1285 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1286 | case | 분기값/패턴의 구간입니다: case "Device": |
| 1287 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1288 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1289 | case | 분기값/패턴의 구간입니다: case "DeviceNo": |
| 1290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1291 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1292 | case | 분기값/패턴의 구간입니다: case "DeviceTabs": |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1294 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1295 | case | 분기값/패턴의 구간입니다: case "DioAddress": |
| 1296 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1297 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1298 | case | 분기값/패턴의 구간입니다: case "DioAxisName": |
| 1299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1300 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1301 | case | 분기값/패턴의 구간입니다: case "DioCurrentValue": |
| 1302 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1303 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1304 | case | 분기값/패턴의 구간입니다: case "DioLastResult": |
| 1305 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1306 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1307 | case | 분기값/패턴의 구간입니다: case "DioNo": |
| 1308 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1309 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1310 | case | 분기값/패턴의 구간입니다: case "DioOffCommand": |
| 1311 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1312 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1313 | case | 분기값/패턴의 구간입니다: case "DioOnCommand": |
| 1314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1315 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1316 | case | 분기값/패턴의 구간입니다: case "DioReadCommand": |
| 1317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1318 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1319 | case | 분기값/패턴의 구간입니다: case "Direction": |
| 1320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1321 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1322 | case | 분기값/패턴의 구간입니다: case "DisconnectInterfaceCommand": |
| 1323 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1324 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1325 | case | 분기값/패턴의 구간입니다: case "DisplayAxis": |
| 1326 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1327 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1328 | case | 분기값/패턴의 구간입니다: case "DisplayLabel": |
| 1329 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1330 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1331 | case | 분기값/패턴의 구간입니다: case "DisplayText": |
| 1332 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1333 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1334 | case | 분기값/패턴의 구간입니다: case "DistortionKeyItems": |
| 1335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1336 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1337 | case | 분기값/패턴의 구간입니다: case "Div": |
| 1338 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1339 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1340 | case | 분기값/패턴의 구간입니다: case "ElapsedTimeText": |
| 1341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1342 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1343 | case | 분기값/패턴의 구간입니다: case "ElementHeightProperty": |
| 1344 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1345 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1346 | case | 분기값/패턴의 구간입니다: case "ElementWidthProperty": |
| 1347 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1348 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1349 | case | 분기값/패턴의 구간입니다: case "Empty": |
| 1350 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1351 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1352 | case | 분기값/패턴의 구간입니다: case "EN_MENU": |
| 1353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1354 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1355 | case | 분기값/패턴의 구간입니다: case "EN_UI_THEME": |
| 1356 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1357 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1358 | case | 분기값/패턴의 구간입니다: case "Endpoint": |
| 1359 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1360 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1361 | case | 분기값/패턴의 구간입니다: case "ErrorBrush": |
| 1362 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1363 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1364 | case | 분기값/패턴의 구간입니다: case "ErrorX": |
| 1365 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1366 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1367 | case | 분기값/패턴의 구간입니다: case "ErrorY": |
| 1368 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1369 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1370 | case | 분기값/패턴의 구간입니다: case "EstimatedTimeText": |
| 1371 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1372 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1373 | case | 분기값/패턴의 구간입니다: case "EvenHeadPreviews": |
| 1374 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1375 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1376 | case | 분기값/패턴의 구간입니다: case "ExecuteCommand": |
| 1377 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1378 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1379 | case | 분기값/패턴의 구간입니다: case "ExecuteOperationCommand": |
| 1380 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1381 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1382 | case | 분기값/패턴의 구간입니다: case "Extra": |
| 1383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1384 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1385 | case | 분기값/패턴의 구간입니다: case "FileText": |
| 1386 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1387 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1388 | case | 분기값/패턴의 구간입니다: case "FirstX": |
| 1389 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1390 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1391 | case | 분기값/패턴의 구간입니다: case "FirstY": |
| 1392 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1393 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1394 | case | 분기값/패턴의 구간입니다: case "FooterStatusItems": |
| 1395 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1396 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1397 | case | 분기값/패턴의 구간입니다: case "GlassFrame": |
| 1398 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1399 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1400 | case | 분기값/패턴의 구간입니다: case "GlassPreviewSummary": |
| 1401 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1402 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1403 | case | 분기값/패턴의 구간입니다: case "GlassSizeXItem": |
| 1404 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1405 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1406 | case | 분기값/패턴의 구간입니다: case "GlassSizeYItem": |
| 1407 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1408 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1409 | case | 분기값/패턴의 구간입니다: case "GridColLines": |
| 1410 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1411 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1412 | case | 분기값/패턴의 구간입니다: case "GridRowLines": |
| 1413 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1414 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1415 | case | 분기값/패턴의 구간입니다: case "Group": |
| 1416 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1417 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1418 | case | 분기값/패턴의 구간입니다: case "GroupItems": |
| 1419 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1420 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1421 | case | 분기값/패턴의 구간입니다: case "GroupTabs": |
| 1422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1423 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1424 | case | 분기값/패턴의 구간입니다: case "HasCommand": |
| 1425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1426 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1427 | case | 분기값/패턴의 구간입니다: case "HasResult": |
| 1428 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1429 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1430 | case | 분기값/패턴의 구간입니다: case "HeadAssignmentAreas": |
| 1431 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1432 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1433 | case | 분기값/패턴의 구간입니다: case "HeadCards": |
| 1434 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1435 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1436 | case | 분기값/패턴의 구간입니다: case "HeadGroups": |
| 1437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1438 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1439 | case | 분기값/패턴의 구간입니다: case "HeadDeviceSelectorTitle": |
| 1440 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1441 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1442 | case | 분기값/패턴의 구간입니다: case "HeaderStatusItems": |
| 1443 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1444 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1445 | case | 분기값/패턴의 구간입니다: case "HeadParameters": |
| 1446 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1447 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1448 | case | 분기값/패턴의 구간입니다: case "HeadParameterVisibility": |
| 1449 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1450 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1451 | case | 분기값/패턴의 구간입니다: case "HeadPreviewImage": |
| 1452 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1453 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1454 | case | 분기값/패턴의 구간입니다: case "HeadPreviewLabels": |
| 1455 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1456 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1457 | case | 분기값/패턴의 구간입니다: case "HeadPreviews": |
| 1458 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1459 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1460 | case | 분기값/패턴의 구간입니다: case "HeadPreviewSummaryText": |
| 1461 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1462 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1463 | case | 분기값/패턴의 구간입니다: case "HeadSelectRows": |
| 1464 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1465 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1466 | case | 분기값/패턴의 구간입니다: case "Height": |
| 1467 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1468 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1469 | case | 분기값/패턴의 구간입니다: case "History": |
| 1470 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1471 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1472 | case | 분기값/패턴의 구간입니다: case "HistoryPanelTitle": |
| 1473 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1474 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1475 | case | 분기값/패턴의 구간입니다: case "HistoryRows": |
| 1476 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1477 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1478 | case | 분기값/패턴의 구간입니다: case "HomeBrush": |
| 1479 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1480 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1481 | case | 분기값/패턴의 구간입니다: case "IconGeometry": |
| 1482 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1483 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1484 | case | 분기값/패턴의 구간입니다: case "Id": |
| 1485 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1486 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1487 | case | 분기값/패턴의 구간입니다: case "InspectionModeText": |
| 1488 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1489 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1490 | case | 분기값/패턴의 구간입니다: case "InspectionMethodItems": |
| 1491 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1492 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1493 | case | 분기값/패턴의 구간입니다: case "InspectionRuleText": |
| 1494 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1495 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1496 | case | 분기값/패턴의 구간입니다: case "InspectionRuleVisibility": |
| 1497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1498 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1499 | case | 분기값/패턴의 구간입니다: case "InspectionStatusItems": |
| 1500 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1501 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1502 | case | 분기값/패턴의 구간입니다: case "InspectionSummary": |
| 1503 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1504 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1505 | case | 분기값/패턴의 구간입니다: case "InterfaceRows": |
| 1506 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1507 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1508 | case | 분기값/패턴의 구간입니다: case "InterfaceType": |
| 1509 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1510 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1511 | case | 분기값/패턴의 구간입니다: case "InterlockItems": |
| 1512 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1513 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1514 | case | 분기값/패턴의 구간입니다: case "IsAlarmLayout": |
| 1515 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1516 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1517 | case | 분기값/패턴의 구간입니다: case "IsAttenuator": |
| 1518 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1519 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1520 | case | 분기값/패턴의 구간입니다: case "IsBet": |
| 1521 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1522 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1523 | case | 분기값/패턴의 구간입니다: case "IsBoolean": |
| 1524 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1525 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1526 | case | 분기값/패턴의 구간입니다: case "IsCellCategory": |
| 1527 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1528 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1529 | case | 분기값/패턴의 구간입니다: case "IsCellDetailVisible": |
| 1530 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1531 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1532 | case | 분기값/패턴의 구간입니다: case "IsCellPreviewVisible": |
| 1533 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1534 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1535 | case | 분기값/패턴의 구간입니다: case "IsControlDevice": |
| 1536 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1537 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1538 | case | 분기값/패턴의 구간입니다: case "IsLogViewer": |
| 1539 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1540 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1541 | case | 분기값/패턴의 구간입니다: case "IsCoordinateViewer": |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1543 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1544 | case | 분기값/패턴의 구간입니다: case "IsCorrectionLayout": |
| 1545 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1546 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1547 | case | 분기값/패턴의 구간입니다: case "IsAlignDistortionTab": |
| 1548 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1549 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1550 | case | 분기값/패턴의 구간입니다: case "IsCorrectionCommandsVisible": |
| 1551 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1552 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1553 | case | 분기값/패턴의 구간입니다: case "IsOutputHistoryTab": |
| 1554 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1555 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1556 | case | 분기값/패턴의 구간입니다: case "IsCurrent": |
| 1557 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1558 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1559 | case | 분기값/패턴의 구간입니다: case "IsDioControlBusy": |
| 1560 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1561 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1562 | case | 분기값/패턴의 구간입니다: case "IsDioControlEnabled": |
| 1563 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1564 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1565 | case | 분기값/패턴의 구간입니다: case "IsDioOff": |
| 1566 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1567 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1568 | case | 분기값/패턴의 구간입니다: case "IsDioOn": |
| 1569 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1570 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1571 | case | 분기값/패턴의 구간입니다: case "IsDioTargetReady": |
| 1572 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1573 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1574 | case | 분기값/패턴의 구간입니다: case "IsEditable": |
| 1575 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1576 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1577 | case | 분기값/패턴의 구간입니다: case "IsEdited": |
| 1578 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1579 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1580 | case | 분기값/패턴의 구간입니다: case "IsEnabled": |
| 1581 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1582 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1583 | case | 분기값/패턴의 구간입니다: case "IsGenericDevice": |
| 1584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1585 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1586 | case | 분기값/패턴의 구간입니다: case "IsGenericLayout": |
| 1587 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1588 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1589 | case | 분기값/패턴의 구간입니다: case "IsHeadCategory": |
| 1590 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1591 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1592 | case | 분기값/패턴의 구간입니다: case "IsInsideGlass": |
| 1593 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1594 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1595 | case | 분기값/패턴의 구간입니다: case "IsInterfaceTab": |
| 1596 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1597 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1598 | case | 분기값/패턴의 구간입니다: case "IsLaser": |
| 1599 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1600 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1601 | case | 분기값/패턴의 구간입니다: case "IsLaserCountMode": |
| 1602 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1603 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1604 | case | 분기값/패턴의 구간입니다: case "IsLaserTimeMode": |
| 1605 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1606 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1607 | case | 분기값/패턴의 구간입니다: case "IsMainLayout": |
| 1608 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1609 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1610 | case | 분기값/패턴의 구간입니다: case "IsManualLayout": |
| 1611 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1612 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1613 | case | 분기값/패턴의 구간입니다: case "IsManualShiftOffsetVisible": |
| 1614 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1615 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1616 | case | 분기값/패턴의 구간입니다: case "IsMelsec": |
| 1617 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1618 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1619 | case | 분기값/패턴의 구간입니다: case "IsMelsecWriteLockVisible": |
| 1620 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1621 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1622 | case | 분기값/패턴의 구간입니다: case "IsMelsecWriteUnlocked": |
| 1623 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1624 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1625 | case | 분기값/패턴의 구간입니다: case "IsModified": |
| 1626 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1627 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1628 | case | 분기값/패턴의 구간입니다: case "IsMonitorLayout": |
| 1629 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1630 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1631 | case | 분기값/패턴의 구간입니다: case "IsMotor": |
| 1632 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1633 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1634 | case | 분기값/패턴의 구간입니다: case "IsOneHoleBeamMap": |
| 1635 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1636 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1637 | case | 분기값/패턴의 구간입니다: case "IsOneHoleCellMap": |
| 1638 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1639 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1640 | case | 분기값/패턴의 구간입니다: case "IsOneHoleDetailMap": |
| 1641 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1642 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1643 | case | 분기값/패턴의 구간입니다: case "IsOneHoleHoleMap": |
| 1644 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1645 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1646 | case | 분기값/패턴의 구간입니다: case "IsOneHoleTab": |
| 1647 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1648 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1649 | case | 분기값/패턴의 구간입니다: case "IsOtherCorrectionTab": |
| 1650 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1651 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1652 | case | 분기값/패턴의 구간입니다: case "IsParameterTab": |
| 1653 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1654 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1655 | case | 분기값/패턴의 구간입니다: case "IsPicoMotor": |
| 1656 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1657 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1658 | case | 분기값/패턴의 구간입니다: case "IsPmLayout": |
| 1659 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1660 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1661 | case | 분기값/패턴의 구간입니다: case "IsPowerMeter": |
| 1662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1663 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1664 | case | 분기값/패턴의 구간입니다: case "IsProduct": |
| 1665 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1666 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1667 | case | 분기값/패턴의 구간입니다: case "IsReadOnly": |
| 1668 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1669 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1670 | case | 분기값/패턴의 구간입니다: case "IsRecipeLayout": |
| 1671 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1672 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1673 | case | 분기값/패턴의 구간입니다: case "IsReviewLayout": |
| 1674 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1675 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1676 | case | 분기값/패턴의 구간입니다: case "IsAllShotReviewMode": |
| 1677 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1678 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1679 | case | 분기값/패턴의 구간입니다: case "IsAllShotStyleReviewMode": |
| 1680 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1681 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1682 | case | 분기값/패턴의 구간입니다: case "IsRuleReviewMode": |
| 1683 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1684 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1685 | case | 분기값/패턴의 구간입니다: case "IsBeamInspectionMode": |
| 1686 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1687 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1688 | case | 분기값/패턴의 구간입니다: case "IsBeamSelectionVisible": |
| 1689 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1690 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1691 | case | 분기값/패턴의 구간입니다: case "IsLastMeasurementVisible": |
| 1692 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1693 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1694 | case | 분기값/패턴의 구간입니다: case "IsRunBeamDetailVisible": |
| 1695 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1696 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1697 | case | 분기값/패턴의 구간입니다: case "IsRunCellDetailVisible": |
| 1698 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1699 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1700 | case | 분기값/패턴의 구간입니다: case "IsRunGlassPreviewVisible": |
| 1701 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1702 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1703 | case | 분기값/패턴의 구간입니다: case "IsRunReviewResultLoading": |
| 1704 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1705 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1706 | case | 분기값/패턴의 구간입니다: case "IsRunShotMapVisible": |
| 1707 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1708 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1709 | case | 분기값/패턴의 구간입니다: case "IsZPositionMoveEnabled": |
| 1710 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1711 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1712 | case | 분기값/패턴의 구간입니다: case "IsRunTab": |
| 1713 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1714 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1715 | case | 분기값/패턴의 구간입니다: case "IsEdgeSampleRuleUi": |
| 1716 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1717 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1718 | case | 분기값/패턴의 구간입니다: case "IsFineFiveLine": |
| 1719 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1720 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1721 | case | 분기값/패턴의 구간입니다: case "IsFineOneLine": |
| 1722 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1723 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1724 | case | 분기값/패턴의 구간입니다: case "IsFineSampleRuleUi": |
| 1725 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1726 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1727 | case | 분기값/패턴의 구간입니다: case "IsFineSevenLine": |
| 1728 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1729 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1730 | case | 분기값/패턴의 구간입니다: case "IsFineThreeLine": |
| 1731 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1732 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1733 | case | 분기값/패턴의 구간입니다: case "IsRoughCenter": |
| 1734 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1735 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1736 | case | 분기값/패턴의 구간입니다: case "IsRoughFirst": |
| 1737 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1738 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1739 | case | 분기값/패턴의 구간입니다: case "IsRoughLast": |
| 1740 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1741 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1742 | case | 분기값/패턴의 구간입니다: case "IsRoughSampleRuleUi": |
| 1743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1744 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1745 | case | 분기값/패턴의 구간입니다: case "IsSampleCellDetailVisible": |
| 1746 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1747 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1748 | case | 분기값/패턴의 구간입니다: case "IsSampleGlassPreviewVisible": |
| 1749 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1750 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1751 | case | 분기값/패턴의 구간입니다: case "IsSampleScopeHead": |
| 1752 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1753 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1754 | case | 분기값/패턴의 구간입니다: case "IsSampleScopeHeadCell": |
| 1755 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1756 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1757 | case | 분기값/패턴의 구간입니다: case "IsSampleScopeVisible": |
| 1758 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1759 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1760 | case | 분기값/패턴의 구간입니다: case "IsSampleSelectTab": |
| 1761 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1762 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1763 | case | 분기값/패턴의 구간입니다: case "IsSimpleSampleRuleUi": |
| 1764 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1765 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1766 | case | 분기값/패턴의 구간입니다: case "IsScannerStatusSelected": |
| 1767 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1768 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1769 | case | 분기값/패턴의 구간입니다: case "IsScannerWorkspace": |
| 1770 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1771 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1772 | case | 분기값/패턴의 구간입니다: case "IsManualMofTab": |
| 1773 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1774 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1775 | case | 분기값/패턴의 구간입니다: case "IsManualControllerTab": |
| 1776 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1777 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1778 | case | 분기값/패턴의 구간입니다: case "ManualControllerHeads": |
| 1779 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1780 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1781 | case | 분기값/패턴의 구간입니다: case "IsManualMotionTab": |
| 1782 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1783 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1784 | case | 분기값/패턴의 구간입니다: case "IsManualScanTab": |
| 1785 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1786 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1787 | case | 분기값/패턴의 구간입니다: case "IsManualPowerMeasureTab": |
| 1788 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1789 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1790 | case | 분기값/패턴의 구간입니다: case "IsManualStageReviewTab": |
| 1791 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1792 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1793 | case | 분기값/패턴의 구간입니다: case "IsSelected": |
| 1794 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1795 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1796 | case | 분기값/패턴의 구간입니다: case "IsSettingLayout": |
| 1797 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1798 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1799 | case | 분기값/패턴의 구간입니다: case "IsSign": |
| 1800 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1801 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1802 | case | 분기값/패턴의 구간입니다: case "IsSimulation": |
| 1803 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1804 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1805 | case | 분기값/패턴의 구간입니다: case "IsStageVisionWorkspace": |
| 1806 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1807 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1808 | case | 분기값/패턴의 구간입니다: case "IsVisionProtocolBusy": |
| 1809 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1810 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1811 | case | 분기값/패턴의 구간입니다: case "IsVisionFlipOption": |
| 1812 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1813 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1814 | case | 분기값/패턴의 구간입니다: case "Item": |
| 1815 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1816 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1817 | case | 분기값/패턴의 구간입니다: case "ItemTabs": |
| 1818 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1819 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1820 | case | 분기값/패턴의 구간입니다: case "JudgeBrush": |
| 1821 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1822 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1823 | case | 분기값/패턴의 구간입니다: case "Key": |
| 1824 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1825 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1826 | case | 분기값/패턴의 구간입니다: case "LabelCanvasTop": |
| 1827 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1828 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1829 | case | 분기값/패턴의 구간입니다: case "LaserControlRows": |
| 1830 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1831 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1832 | case | 분기값/패턴의 구간입니다: case "LaserGateBrush": |
| 1833 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1834 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1835 | case | 분기값/패턴의 구간입니다: case "LaserGateText": |
| 1836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1837 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1838 | case | 분기값/패턴의 구간입니다: case "LaserOffCommand": |
| 1839 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1840 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1841 | case | 분기값/패턴의 구간입니다: case "LaserOnCommand": |
| 1842 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1843 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1844 | case | 분기값/패턴의 구간입니다: case "LaserOnMode": |
| 1845 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1846 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1847 | case | 분기값/패턴의 구간입니다: case "LaserOnSegmentsText": |
| 1848 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1849 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1850 | case | 분기값/패턴의 구간입니다: case "LaserOnTimeMsec": |
| 1851 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1852 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1853 | case | 분기값/패턴의 구간입니다: case "LaserPowerBrush": |
| 1854 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1855 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1856 | case | 분기값/패턴의 구간입니다: case "LaserPowerText": |
| 1857 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1858 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1859 | case | 분기값/패턴의 구간입니다: case "LaserShotCount": |
| 1860 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1861 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1862 | case | 분기값/패턴의 구간입니다: case "LaserShutterBrush": |
| 1863 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1864 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1865 | case | 분기값/패턴의 구간입니다: case "LaserShutterText": |
| 1866 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1867 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1868 | case | 분기값/패턴의 구간입니다: case "LaserStateBrush": |
| 1869 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1870 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1871 | case | 분기값/패턴의 구간입니다: case "LastChangedText": |
| 1872 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1873 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1874 | case | 분기값/패턴의 구간입니다: case "Length": |
| 1875 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1876 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1877 | case | 분기값/패턴의 구간입니다: case "LevelBrush": |
| 1878 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1879 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1880 | case | 분기값/패턴의 구간입니다: case "LifecycleItems": |
| 1881 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1882 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1883 | case | 분기값/패턴의 구간입니다: case "LimitMinusBrush": |
| 1884 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1885 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1886 | case | 분기값/패턴의 구간입니다: case "LimitPlusBrush": |
| 1887 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1888 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1889 | case | 분기값/패턴의 구간입니다: case "LoadedReviewFileName": |
| 1890 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1891 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1892 | case | 분기값/패턴의 구간입니다: case "LoadedSettingName": |
| 1893 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1894 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1895 | case | 분기값/패턴의 구간입니다: case "LoadedSettingPath": |
| 1896 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1897 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1898 | case | 분기값/패턴의 구간입니다: case "LockItems": |
| 1899 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1900 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1901 | case | 분기값/패턴의 구간입니다: case "Mag": |
| 1902 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1903 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1904 | case | 분기값/패턴의 구간입니다: case "MainOperating": |
| 1905 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1906 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1907 | case | 분기값/패턴의 구간입니다: case "ManagedItems": |
| 1908 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1909 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1910 | case | 분기값/패턴의 구간입니다: case "Manual": |
| 1911 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1912 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1913 | case | 분기값/패턴의 구간입니다: case "ManualSettings": |
| 1914 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1915 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1916 | case | 분기값/패턴의 구간입니다: case "MatrixPointName": |
| 1917 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1918 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1919 | case | 분기값/패턴의 구간입니다: case "Max": |
| 1920 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1921 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1922 | case | 분기값/패턴의 구간입니다: case "MaxCellNumberItem": |
| 1923 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1924 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1925 | case | 분기값/패턴의 구간입니다: case "MelsecGroups": |
| 1926 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1927 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1928 | case | 분기값/패턴의 구간입니다: case "MelsecReadRows": |
| 1929 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1930 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1931 | case | 분기값/패턴의 구간입니다: case "MelsecRows": |
| 1932 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1933 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1934 | case | 분기값/패턴의 구간입니다: case "MelsecWriteRows": |
| 1935 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1936 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1937 | case | 분기값/패턴의 구간입니다: case "MelsecWriteLockText": |
| 1938 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1939 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1940 | case | 분기값/패턴의 구간입니다: case "Menu": |
| 1941 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1942 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1943 | case | 분기값/패턴의 구간입니다: case "Menus": |
| 1944 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1945 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1946 | case | 분기값/패턴의 구간입니다: case "Metrics": |
| 1947 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1948 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1949 | case | 분기값/패턴의 구간입니다: case "Min": |
| 1950 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1951 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1952 | case | 분기값/패턴의 구간입니다: case "Modes": |
| 1953 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1954 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1955 | case | 분기값/패턴의 구간입니다: case "ModelOptions": |
| 1956 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1957 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1958 | case | 분기값/패턴의 구간입니다: case "ModelType": |
| 1959 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1960 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1961 | case | 분기값/패턴의 구간입니다: case "ModifiedBrush": |
| 1962 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1963 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1964 | case | 분기값/패턴의 구간입니다: case "ModifiedText": |
| 1965 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1966 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1967 | case | 분기값/패턴의 구간입니다: case "ModifyCommand": |
| 1968 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1969 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1970 | case | 분기값/패턴의 구간입니다: case "Monitor": |
| 1971 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1972 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1973 | case | 분기값/패턴의 구간입니다: case "MoveCommandLabel": |
| 1974 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1975 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1976 | case | 분기값/패턴의 구간입니다: case "MoveCountText": |
| 1977 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1978 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1979 | case | 분기값/패턴의 구간입니다: case "MoveStopCommand": |
| 1980 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1981 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1982 | case | 분기값/패턴의 구간입니다: case "MultiMoveAxisRows": |
| 1983 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1984 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1985 | case | 분기값/패턴의 구간입니다: case "Muted": |
| 1986 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1987 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1988 | case | 분기값/패턴의 구간입니다: case "Name": |
| 1989 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1990 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1991 | case | 분기값/패턴의 구간입니다: case "NavigateShotGroupCommand": |
| 1992 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1993 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1994 | case | 분기값/패턴의 구간입니다: case "Next": |
| 1995 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1996 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 1997 | case | 분기값/패턴의 구간입니다: case "NextCellCommand": |
| 1998 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 1999 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2000 | case | 분기값/패턴의 구간입니다: case "NickName": |
| 2001 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2002 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2003 | case | 분기값/패턴의 구간입니다: case "No": |
| 2004 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2005 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2006 | case | 분기값/패턴의 구간입니다: case "NoOp": |
| 2007 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2008 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2009 | case | 분기값/패턴의 구간입니다: case "Number": |
| 2010 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2011 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2012 | case | 분기값/패턴의 구간입니다: case "OddHeadPreviews": |
| 2013 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2014 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2015 | case | 분기값/패턴의 구간입니다: case "Offline": |
| 2016 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2017 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2018 | case | 분기값/패턴의 구간입니다: case "OffsetCoordinateText": |
| 2019 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2020 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2021 | case | 분기값/패턴의 구간입니다: case "OffsetValueBrush": |
| 2022 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2023 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2024 | case | 분기값/패턴의 구간입니다: case "OffsetX": |
| 2025 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2026 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2027 | case | 분기값/패턴의 구간입니다: case "OffsetY": |
| 2028 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2029 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2030 | case | 분기값/패턴의 구간입니다: case "OneHoleBeamRows": |
| 2031 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2032 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2033 | case | 분기값/패턴의 구간입니다: case "OneHoleCellHoleMatrixRows": |
| 2034 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2035 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2036 | case | 분기값/패턴의 구간입니다: case "OneHoleCellHoleRows": |
| 2037 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2038 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2039 | case | 분기값/패턴의 구간입니다: case "OneHoleCellPreviewLabels": |
| 2040 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2041 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2042 | case | 분기값/패턴의 구간입니다: case "OneHoleCurrentHoleMarkers": |
| 2043 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2044 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2045 | case | 분기값/패턴의 구간입니다: case "OneHoleGlassPreviewImage": |
| 2046 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2047 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2048 | case | 분기값/패턴의 구간입니다: case "OneHoleGlassPreviewSummary": |
| 2049 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2050 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2051 | case | 분기값/패턴의 구간입니다: case "OneHoleWorkspaceSummary": |
| 2052 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2053 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2054 | case | 분기값/패턴의 구간입니다: case "OneHoleWorkspaceTitle": |
| 2055 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2056 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2057 | case | 분기값/패턴의 구간입니다: case "Online": |
| 2058 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2059 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2060 | case | 분기값/패턴의 구간입니다: case "Open": |
| 2061 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2062 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2063 | case | 분기값/패턴의 구간입니다: case "OperationButtons": |
| 2064 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2065 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2066 | case | 분기값/패턴의 구간입니다: case "OperationFields": |
| 2067 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2068 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2069 | case | 분기값/패턴의 구간입니다: case "OperationPanelTitle": |
| 2070 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2071 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2072 | case | 분기값/패턴의 구간입니다: case "OpticAttenuatorVisibility": |
| 2073 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2074 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2075 | case | 분기값/패턴의 구간입니다: case "OpticBetVisibility": |
| 2076 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2077 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2078 | case | 분기값/패턴의 구간입니다: case "OpticHeadParameters": |
| 2079 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2080 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2081 | case | 분기값/패턴의 구간입니다: case "OpticLaserVisibility": |
| 2082 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2083 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2084 | case | 분기값/패턴의 구간입니다: case "OpticParameterGroups": |
| 2085 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2086 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2087 | case | 분기값/패턴의 구간입니다: case "OpticParameterVisibility": |
| 2088 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2089 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2090 | case | 분기값/패턴의 구간입니다: case "OpticStatusTabs": |
| 2091 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2092 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2093 | case | 분기값/패턴의 구간입니다: case "OptionBorderBrush": |
| 2094 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2095 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2096 | case | 분기값/패턴의 구간입니다: case "OptionBrush": |
| 2097 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2098 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2099 | case | 분기값/패턴의 구간입니다: case "OptionOpacity": |
| 2100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2101 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2102 | case | 분기값/패턴의 구간입니다: case "OptionText": |
| 2103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2104 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2105 | case | 분기값/패턴의 구간입니다: case "OptionVisibility": |
| 2106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2107 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2108 | case | 분기값/패턴의 구간입니다: case "OriginalValue": |
| 2109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2110 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2111 | case | 분기값/패턴의 구간입니다: case "Parameter": |
| 2112 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2113 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2114 | case | 분기값/패턴의 구간입니다: case "ParameterPanelTitle": |
| 2115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2116 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2117 | case | 분기값/패턴의 구간입니다: case "ParameterRows": |
| 2118 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2119 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2120 | case | 분기값/패턴의 구간입니다: case "Parameters": |
| 2121 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2122 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2123 | case | 분기값/패턴의 구간입니다: case "ParameterTabs": |
| 2124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2125 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2126 | case | 분기값/패턴의 구간입니다: case "PicoAllMotorCommandButtons": |
| 2127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2128 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2129 | case | 분기값/패턴의 구간입니다: case "PicoAllMotorSelectButtons": |
| 2130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2131 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2132 | case | 분기값/패턴의 구간입니다: case "PicoConnectionButtons": |
| 2133 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2134 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2135 | case | 분기값/패턴의 구간입니다: case "PicoErrorRows": |
| 2136 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2137 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2138 | case | 분기값/패턴의 구간입니다: case "PicoJogStartCommand": |
| 2139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2140 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2141 | case | 분기값/패턴의 구간입니다: case "PicoJogStopCommand": |
| 2142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2143 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2144 | case | 분기값/패턴의 구간입니다: case "PicoMotionJogButtons": |
| 2145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2146 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2147 | case | 분기값/패턴의 구간입니다: case "PicoMotionMoveButtons": |
| 2148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2149 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2150 | case | 분기값/패턴의 구간입니다: case "PicoMotionRelButtons": |
| 2151 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2152 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2153 | case | 분기값/패턴의 구간입니다: case "PicoMotionStopButtons": |
| 2154 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2155 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2156 | case | 분기값/패턴의 구간입니다: case "PicoMotorSelectButtons": |
| 2157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2158 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2159 | case | 분기값/패턴의 구간입니다: case "PixelCountXItem": |
| 2160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2161 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2162 | case | 분기값/패턴의 구간입니다: case "PixelCountYItem": |
| 2163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2164 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2165 | case | 분기값/패턴의 구간입니다: case "PixelSizeItem": |
| 2166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2167 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2168 | case | 분기값/패턴의 구간입니다: case "PlacementState": |
| 2169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2170 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2171 | case | 분기값/패턴의 구간입니다: case "PlanSummary": |
| 2172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2173 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2174 | case | 분기값/패턴의 구간입니다: case "Pm": |
| 2175 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2176 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2177 | case | 분기값/패턴의 구간입니다: case "PointSelectRows": |
| 2178 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2179 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2180 | case | 분기값/패턴의 구간입니다: case "PollMs": |
| 2181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2182 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2183 | case | 분기값/패턴의 구간입니다: case "PositionMoveCommand": |
| 2184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2185 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2186 | case | 분기값/패턴의 구간입니다: case "PositionMoveItems": |
| 2187 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2188 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2189 | case | 분기값/패턴의 구간입니다: case "PositionRows": |
| 2190 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2191 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2192 | case | 분기값/패턴의 구간입니다: case "PositionXProperty": |
| 2193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2194 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2195 | case | 분기값/패턴의 구간입니다: case "PositionYProperty": |
| 2196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2197 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2198 | case | 분기값/패턴의 구간입니다: case "PowerBrush": |
| 2199 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2200 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2201 | case | 분기값/패턴의 구간입니다: case "PowerMeterGraphLine": |
| 2202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2203 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2204 | case | 분기값/패턴의 구간입니다: case "PowerMeterGraphMaxText": |
| 2205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2206 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2207 | case | 분기값/패턴의 구간입니다: case "PowerMeterGraphMinText": |
| 2208 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2209 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2210 | case | 분기값/패턴의 구간입니다: case "PowerMeterGraphTargetText": |
| 2211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2212 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2213 | case | 분기값/패턴의 구간입니다: case "PowerMeterTargetLineY": |
| 2214 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2215 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2216 | case | 분기값/패턴의 구간입니다: case "PowerMeterTuneMessage": |
| 2217 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2218 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2219 | case | 분기값/패턴의 구간입니다: case "PowerMeterTuneRows": |
| 2220 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2221 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2222 | case | 분기값/패턴의 구간입니다: case "PowerMeterTuneState": |
| 2223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2224 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2225 | case | 분기값/패턴의 구간입니다: case "Previous": |
| 2226 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2227 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2228 | case | 분기값/패턴의 구간입니다: case "PreviousCellCommand": |
| 2229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2230 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2231 | case | 분기값/패턴의 구간입니다: case "PrimaryText": |
| 2232 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2233 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2234 | case | 분기값/패턴의 구간입니다: case "ProcessPitchItem": |
| 2235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2236 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2237 | case | 분기값/패턴의 구간입니다: case "ProcessResultBrush": |
| 2238 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2239 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2240 | case | 분기값/패턴의 구간입니다: case "ProcessResultValue": |
| 2241 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2242 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2243 | case | 분기값/패턴의 구간입니다: case "ProcessSequenceItems": |
| 2244 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2245 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2246 | case | 분기값/패턴의 구간입니다: case "ProcessStep": |
| 2247 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2248 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2249 | case | 분기값/패턴의 구간입니다: case "ProcessSummaryItems": |
| 2250 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2251 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2252 | case | 분기값/패턴의 구간입니다: case "ProductAlignItems": |
| 2253 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2254 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2255 | case | 분기값/패턴의 구간입니다: case "ProductDistortionItems": |
| 2256 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2257 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2258 | case | 분기값/패턴의 구간입니다: case "ProductGlassItems": |
| 2259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2260 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2261 | case | 분기값/패턴의 구간입니다: case "ProductHistoryRows": |
| 2262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2263 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2264 | case | 분기값/패턴의 구간입니다: case "ProductItems": |
| 2265 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2266 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2267 | case | 분기값/패턴의 구간입니다: case "ProductProcessItems": |
| 2268 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2269 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2270 | case | 분기값/패턴의 구간입니다: case "ProductRecipeItems": |
| 2271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2272 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2273 | case | 분기값/패턴의 구간입니다: case "ProductReviewItems": |
| 2274 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2275 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2276 | case | 분기값/패턴의 구간입니다: case "ProductReviewRows": |
| 2277 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2278 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2279 | case | 분기값/패턴의 구간입니다: case "ProgressPercent": |
| 2280 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2281 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2282 | case | 분기값/패턴의 구간입니다: case "ProgressPercentText": |
| 2283 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2284 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2285 | case | 분기값/패턴의 구간입니다: case "ProgressText": |
| 2286 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2287 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2288 | case | 분기값/패턴의 구간입니다: case "PwmDeviceRows": |
| 2289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2290 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2291 | case | 분기값/패턴의 구간입니다: case "PwmRunButtons": |
| 2292 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2293 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2294 | case | 분기값/패턴의 구간입니다: case "PwmSettingRows": |
| 2295 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2296 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2297 | case | 분기값/패턴의 구간입니다: case "QuickSelectCommand": |
| 2298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2299 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2300 | case | 분기값/패턴의 구간입니다: case "RangeVisibility": |
| 2301 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2302 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2303 | case | 분기값/패턴의 구간입니다: case "ReadValue": |
| 2304 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2305 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2306 | case | 분기값/패턴의 구간입니다: case "Recipe": |
| 2307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2308 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2309 | case | 분기값/패턴의 구간입니다: case "RecipeFiles": |
| 2310 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2311 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2312 | case | 분기값/패턴의 구간입니다: case "RecipeFilesPageText": |
| 2313 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2314 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2315 | case | 분기값/패턴의 구간입니다: case "RecipeList": |
| 2316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2317 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2318 | case | 분기값/패턴의 구간입니다: case "RecipeName": |
| 2319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2320 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2321 | case | 분기값/패턴의 구간입니다: case "RecipePreviewImage": |
| 2322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2323 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2324 | case | 분기값/패턴의 구간입니다: case "RecoveryCommands": |
| 2325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2326 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2327 | case | 분기값/패턴의 구간입니다: case "ReloadCommand": |
| 2328 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2329 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2330 | case | 분기값/패턴의 구간입니다: case "RenameCommand": |
| 2331 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2332 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2333 | case | 분기값/패턴의 구간입니다: case "ResultBrush": |
| 2334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2335 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2336 | case | 분기값/패턴의 구간입니다: case "ResultItems": |
| 2337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2338 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2339 | case | 분기값/패턴의 구간입니다: case "ResultMessage": |
| 2340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2341 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2342 | case | 분기값/패턴의 구간입니다: case "ResultMatrix": |
| 2343 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2344 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2345 | case | 분기값/패턴의 구간입니다: case "IsReviewResultDeferred": |
| 2346 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2347 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2348 | case | 분기값/패턴의 구간입니다: case "ResultPassword": |
| 2349 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2350 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2351 | case | 분기값/패턴의 구간입니다: case "ResultRows": |
| 2352 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2353 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2354 | case | 분기값/패턴의 구간입니다: case "ResultValue": |
| 2355 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2356 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2357 | case | 분기값/패턴의 구간입니다: case "RetryCommand": |
| 2358 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2359 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2360 | case | 분기값/패턴의 구간입니다: case "Review": |
| 2361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2362 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2363 | case | 분기값/패턴의 구간입니다: case "ReviewLoadStatus": |
| 2364 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2365 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2366 | case | 분기값/패턴의 구간입니다: case "ReviewLoadStatusBrush": |
| 2367 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2368 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2369 | case | 분기값/패턴의 구간입니다: case "ReviewResultRows": |
| 2370 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2371 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2372 | case | 분기값/패턴의 구간입니다: case "ReviewSets": |
| 2373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2374 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2375 | case | 분기값/패턴의 구간입니다: case "Rotation": |
| 2376 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2377 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2378 | case | 분기값/패턴의 구간입니다: case "Row": |
| 2379 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2380 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2381 | case | 분기값/패턴의 구간입니다: case "RowBrush": |
| 2382 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2383 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2384 | case | 분기값/패턴의 구간입니다: case "RunBeamRows": |
| 2385 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2386 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2387 | case | 분기값/패턴의 구간입니다: case "InspectionBeamResultRows": |
| 2388 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2389 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2390 | case | 분기값/패턴의 구간입니다: case "RunCellShotMatrixRows": |
| 2391 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2392 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2393 | case | 분기값/패턴의 구간입니다: case "RunCellShotRows": |
| 2394 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2395 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2396 | case | 분기값/패턴의 구간입니다: case "RunCellPreviewLabels": |
| 2397 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2398 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2399 | case | 분기값/패턴의 구간입니다: case "IsOneShotReviewMode": |
| 2400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2401 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2402 | case | 분기값/패턴의 구간입니다: case "IsOneLineReviewMode": |
| 2403 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2404 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2405 | case | 분기값/패턴의 구간입니다: case "IsShotSelectionMode": |
| 2406 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2407 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2408 | case | 분기값/패턴의 구간입니다: case "IsRunCommandsVisible": |
| 2409 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2410 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2411 | case | 분기값/패턴의 구간입니다: case "OneShotSelection": |
| 2412 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2413 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2414 | case | 분기값/패턴의 구간입니다: case "OneShotStatus": |
| 2415 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2416 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2417 | case | 분기값/패턴의 구간입니다: case "OneShotResultText": |
| 2418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2419 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2420 | case | 분기값/패턴의 구간입니다: case "SelectedOneShotMethod": |
| 2421 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2422 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2423 | case | 분기값/패턴의 구간입니다: case "InspectionHeadRows": |
| 2424 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2425 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2426 | case | 분기값/패턴의 구간입니다: case "InspectionShotSummary": |
| 2427 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2428 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2429 | case | 분기값/패턴의 구간입니다: case "InspectionProgressText": |
| 2430 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2431 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2432 | case | 분기값/패턴의 구간입니다: case "IsInspectionExecutionViewVisible": |
| 2433 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2434 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2435 | case | 분기값/패턴의 구간입니다: case "IsInspectionSelectionControlsVisible": |
| 2436 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2437 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2438 | case | 분기값/패턴의 구간입니다: case "RunCurrentHoleMarkers": |
| 2439 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2440 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2441 | case | 분기값/패턴의 구간입니다: case "RunGlassPreviewImage": |
| 2442 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2443 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2444 | case | 분기값/패턴의 구간입니다: case "RunGlassPreviewInspectionOverlayImage": |
| 2445 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2446 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2447 | case | 분기값/패턴의 구간입니다: case "RunGlassPreviewSummary": |
| 2448 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2449 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2450 | case | 분기값/패턴의 구간입니다: case "RunResultLoadStatus": |
| 2451 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2452 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2453 | case | 분기값/패턴의 구간입니다: case "RunWorkspaceSummary": |
| 2454 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2455 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2456 | case | 분기값/패턴의 구간입니다: case "RunWorkspaceTitle": |
| 2457 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2458 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2459 | case | 분기값/패턴의 구간입니다: case "SampleCorrectionTarget": |
| 2460 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2461 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2462 | case | 분기값/패턴의 구간입니다: case "SampleCorrectionTitle": |
| 2463 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2464 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2465 | case | 분기값/패턴의 구간입니다: case "SampleCellShotMatrixRows": |
| 2466 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2467 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2468 | case | 분기값/패턴의 구간입니다: case "SampleCellShotRows": |
| 2469 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2470 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2471 | case | 분기값/패턴의 구간입니다: case "SampleCellOptions": |
| 2472 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2473 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2474 | case | 분기값/패턴의 구간입니다: case "SampleCellPreviewLabels": |
| 2475 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2476 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2477 | case | 분기값/패턴의 구간입니다: case "SampleGlassPreviewImage": |
| 2478 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2479 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2480 | case | 분기값/패턴의 구간입니다: case "SampleGlassPreviewInspectionOverlayImage": |
| 2481 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2482 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2483 | case | 분기값/패턴의 구간입니다: case "SampleGlassPreviewSummary": |
| 2484 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2485 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2486 | case | 분기값/패턴의 구간입니다: case "SampleHeadOptions": |
| 2487 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2488 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2489 | case | 분기값/패턴의 구간입니다: case "SampleInspectionShotCount": |
| 2490 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2491 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2492 | case | 분기값/패턴의 구간입니다: case "SampleMapColumnCount": |
| 2493 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2494 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2495 | case | 분기값/패턴의 구간입니다: case "SampleOffsetApplyCount": |
| 2496 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2497 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2498 | case | 분기값/패턴의 구간입니다: case "SamplePlanStatus": |
| 2499 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2500 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2501 | case | 분기값/패턴의 구간입니다: case "SampleReferenceCell": |
| 2502 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2503 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2504 | case | 분기값/패턴의 구간입니다: case "SampleReferenceHead": |
| 2505 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2506 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2507 | case | 분기값/패턴의 구간입니다: case "SampleReferenceShot": |
| 2508 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2509 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2510 | case | 분기값/패턴의 구간입니다: case "SampleRuleDescription": |
| 2511 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2512 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2513 | case | 분기값/패턴의 구간입니다: case "SampleRuleName": |
| 2514 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2515 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2516 | case | 분기값/패턴의 구간입니다: case "SampleRuleSelectionSummary": |
| 2517 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2518 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2519 | case | 분기값/패턴의 구간입니다: case "SampleReferenceShotMarkers": |
| 2520 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2521 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2522 | case | 분기값/패턴의 구간입니다: case "SampleReferenceThirdLabel": |
| 2523 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2524 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2525 | case | 분기값/패턴의 구간입니다: case "SampleTargetSectionTitle": |
| 2526 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2527 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2528 | case | 분기값/패턴의 구간입니다: case "SampleWorkspaceSummary": |
| 2529 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2530 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2531 | case | 분기값/패턴의 구간입니다: case "SampleWorkspaceTitle": |
| 2532 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2533 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2534 | case | 분기값/패턴의 구간입니다: case "SaveCommand": |
| 2535 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2536 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2537 | case | 분기값/패턴의 구간입니다: case "Scale": |
| 2538 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2539 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2540 | case | 분기값/패턴의 구간입니다: case "ScannerAxes": |
| 2541 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2542 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2543 | case | 분기값/패턴의 구간입니다: case "ScannerStatusItems": |
| 2544 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2545 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2546 | case | 분기값/패턴의 구간입니다: case "ScannerStatusHeadTabs": |
| 2547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2548 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2549 | case | 분기값/패턴의 구간입니다: case "ScannerStatusVisibility": |
| 2550 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2551 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2552 | case | 분기값/패턴의 구간입니다: case "ScriptStatus": |
| 2553 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2554 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2555 | case | 분기값/패턴의 구간입니다: case "ScriptStatusText": |
| 2556 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2557 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2558 | case | 분기값/패턴의 구간입니다: case "ScriptTaskStatusItems": |
| 2559 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2560 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2561 | case | 분기값/패턴의 구간입니다: case "Sections": |
| 2562 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2563 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2564 | case | 분기값/패턴의 구간입니다: case "SelectCategoryCommand": |
| 2565 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2566 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2567 | case | 분기값/패턴의 구간입니다: case "SelectCellCommand": |
| 2568 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2569 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2570 | case | 분기값/패턴의 구간입니다: case "SelectCommand": |
| 2571 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2572 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2573 | case | 분기값/패턴의 구간입니다: case "SelectCoordinateBasisCommand": |
| 2574 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2575 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2576 | case | 분기값/패턴의 구간입니다: case "SelectCoordinateCellCommand": |
| 2577 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2578 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2579 | case | 분기값/패턴의 구간입니다: case "SelectCoordinateShotCommand": |
| 2580 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2581 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2582 | case | 분기값/패턴의 구간입니다: case "SelectedAxisId": |
| 2583 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2584 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2585 | case | 분기값/패턴의 구간입니다: case "SelectedAxisRow": |
| 2586 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2587 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2588 | case | 분기값/패턴의 구간입니다: case "SelectedBeam": |
| 2589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2590 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2591 | case | 분기값/패턴의 구간입니다: case "SelectedInspectionMethod": |
| 2592 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2593 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2594 | case | 분기값/패턴의 구간입니다: case "SelectedCellExcludedTargetText": |
| 2595 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2596 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2597 | case | 분기값/패턴의 구간입니다: case "SelectedCellHasExcludedTargets": |
| 2598 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2599 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2600 | case | 분기값/패턴의 구간입니다: case "SelectedCellNavigationText": |
| 2601 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2602 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2603 | case | 분기값/패턴의 구간입니다: case "SelectedCellShotGroupTitle": |
| 2604 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2605 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2606 | case | 분기값/패턴의 구간입니다: case "SelectedGroup": |
| 2607 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2608 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2609 | case | 분기값/패턴의 구간입니다: case "SelectedHead": |
| 2610 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2611 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2612 | case | 분기값/패턴의 구간입니다: case "SelectedHeadDeviceName": |
| 2613 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2614 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2615 | case | 분기값/패턴의 구간입니다: case "SelectedHeadItems": |
| 2616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2617 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2618 | case | 분기값/패턴의 구간입니다: case "SelectedInterfaceRow": |
| 2619 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2620 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2621 | case | 분기값/패턴의 구간입니다: case "SelectedLaserName": |
| 2622 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2623 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2624 | case | 분기값/패턴의 구간입니다: case "SelectedLaserNumber": |
| 2625 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2626 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2627 | case | 분기값/패턴의 구간입니다: case "SelectedMenu": |
| 2628 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2629 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2630 | case | 분기값/패턴의 구간입니다: case "SelectedPointItems": |
| 2631 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2632 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2633 | case | 분기값/패턴의 구간입니다: case "SelectedRecipeFile": |
| 2634 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2635 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2636 | case | 분기값/패턴의 구간입니다: case "SelectedRunShotName": |
| 2637 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2638 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2639 | case | 분기값/패턴의 구간입니다: case "SelectedSampleRuleUi": |
| 2640 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2641 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2642 | case | 분기값/패턴의 구간입니다: case "SelectedSampleCell": |
| 2643 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2644 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2645 | case | 분기값/패턴의 구간입니다: case "SelectedSampleHead": |
| 2646 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2647 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2648 | case | 분기값/패턴의 구간입니다: case "SelectedShotDetailImage": |
| 2649 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2650 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2651 | case | 분기값/패턴의 구간입니다: case "SelectedShotInspection": |
| 2652 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2653 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2654 | case | 분기값/패턴의 구간입니다: case "SelectedShotGroup": |
| 2655 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2656 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2657 | case | 분기값/패턴의 구간입니다: case "SelectedShotGroupBeamText": |
| 2658 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2659 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2660 | case | 분기값/패턴의 구간입니다: case "SelectedShotGroupCenterText": |
| 2661 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2662 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2663 | case | 분기값/패턴의 구간입니다: case "SelectedShotGroupGridText": |
| 2664 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2665 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2666 | case | 분기값/패턴의 구간입니다: case "SelectedShotGroupIndicatorText": |
| 2667 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2668 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2669 | case | 분기값/패턴의 구간입니다: case "SelectedShotGroupPitchText": |
| 2670 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2671 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2672 | case | 분기값/패턴의 구간입니다: case "SelectedShotGroupPixelWindowText": |
| 2673 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2674 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2675 | case | 분기값/패턴의 구간입니다: case "SelectedShotGroupStateText": |
| 2676 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2677 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2678 | case | 분기값/패턴의 구간입니다: case "SelectedTab": |
| 2679 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2680 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2681 | case | 분기값/패턴의 구간입니다: case "SelectedReviewTabIndex": |
| 2682 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2683 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2684 | case | 분기값/패턴의 구간입니다: case "SelectedVisionProtocolCommand": |
| 2685 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2686 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2687 | case | 분기값/패턴의 구간입니다: case "SelectGroupCommand": |
| 2688 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2689 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2690 | case | 분기값/패턴의 구간입니다: case "SelectHeadCommand": |
| 2691 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2692 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2693 | case | 분기값/패턴의 구간입니다: case "SelectHeadDeviceCommand": |
| 2694 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2695 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2696 | case | 분기값/패턴의 구간입니다: case "SelectionSummaryItems": |
| 2697 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2698 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2699 | case | 분기값/패턴의 구간입니다: case "SelectManualWorkspaceCommand": |
| 2700 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2701 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2702 | case | 분기값/패턴의 구간입니다: case "SelectMelsecGroupCommand": |
| 2703 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2704 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2705 | case | 분기값/패턴의 구간입니다: case "SelectModeCommand": |
| 2706 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2707 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2708 | case | 분기값/패턴의 구간입니다: case "SelectOneHoleCellCommand": |
| 2709 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2710 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2711 | case | 분기값/패턴의 구간입니다: case "SelectOneHoleCommand": |
| 2712 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2713 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2714 | case | 분기값/패턴의 구간입니다: case "SelectParameterTabCommand": |
| 2715 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2716 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2717 | case | 분기값/패턴의 구간입니다: case "SelectPreviewCellCommand": |
| 2718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2719 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2720 | case | 분기값/패턴의 구간입니다: case "SelectRunBeamCommand": |
| 2721 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2722 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2723 | case | 분기값/패턴의 구간입니다: case "SelectRunCellCommand": |
| 2724 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2725 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2726 | case | 분기값/패턴의 구간입니다: case "SelectRunShotCommand": |
| 2727 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2728 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2729 | case | 분기값/패턴의 구간입니다: case "SelectSampleCellCommand": |
| 2730 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2731 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2732 | case | 분기값/패턴의 구간입니다: case "SelectSettingCommand": |
| 2733 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2734 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2735 | case | 분기값/패턴의 구간입니다: case "SelectShapeCommand": |
| 2736 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2737 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2738 | case | 분기값/패턴의 구간입니다: case "SelectTabCommand": |
| 2739 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2740 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2741 | case | 분기값/패턴의 구간입니다: case "ServoBrush": |
| 2742 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2743 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2744 | case | 분기값/패턴의 구간입니다: case "SetSampleHoleSelectionCommand": |
| 2745 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2746 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2747 | case | 분기값/패턴의 구간입니다: case "Setting": |
| 2748 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2749 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2750 | case | 분기값/패턴의 구간입니다: case "SettingFiles": |
| 2751 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2752 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2753 | case | 분기값/패턴의 구간입니다: case "SettingFilesPageText": |
| 2754 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2755 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2756 | case | 분기값/패턴의 구간입니다: case "SettingParameters": |
| 2757 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2758 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2759 | case | 분기값/패턴의 구간입니다: case "ShapeDirection": |
| 2760 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2761 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2762 | case | 분기값/패턴의 구간입니다: case "ShapeName": |
| 2763 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2764 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2765 | case | 분기값/패턴의 구간입니다: case "ShapeOffsetX": |
| 2766 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2767 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2768 | case | 분기값/패턴의 구간입니다: case "ShapeOffsetY": |
| 2769 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2770 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2771 | case | 분기값/패턴의 구간입니다: case "ShapeScanItems": |
| 2772 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2773 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2774 | case | 분기값/패턴의 구간입니다: case "ShapeSize": |
| 2775 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2776 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2777 | case | 분기값/패턴의 구간입니다: case "ShapeStartCommand": |
| 2778 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2779 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2780 | case | 분기값/패턴의 구간입니다: case "ShapeStopCommand": |
| 2781 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2782 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2783 | case | 분기값/패턴의 구간입니다: case "ShiftOffsetX": |
| 2784 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2785 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2786 | case | 분기값/패턴의 구간입니다: case "ShiftOffsetY": |
| 2787 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2788 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2789 | case | 분기값/패턴의 구간입니다: case "ShotCenters": |
| 2790 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2791 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2792 | case | 분기값/패턴의 구간입니다: case "ShotDetailDesignHeight": |
| 2793 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2794 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2795 | case | 분기값/패턴의 구간입니다: case "ShotDetailDesignWidth": |
| 2796 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2797 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2798 | case | 분기값/패턴의 구간입니다: case "CellShotNo": |
| 2799 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2800 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2801 | case | 분기값/패턴의 구간입니다: case "ShotGroupPatternSummary": |
| 2802 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2803 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2804 | case | 분기값/패턴의 구간입니다: case "ShotGroupRows": |
| 2805 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2806 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2807 | case | 분기값/패턴의 구간입니다: case "ShotText": |
| 2808 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2809 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2810 | case | 분기값/패턴의 구간입니다: case "ShowCycleControls": |
| 2811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2812 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2813 | case | 분기값/패턴의 구간입니다: case "Simul": |
| 2814 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2815 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2816 | case | 분기값/패턴의 구간입니다: case "SimulBrush": |
| 2817 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2818 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2819 | case | 분기값/패턴의 구간입니다: case "SourceGroup": |
| 2820 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2821 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2822 | case | 분기값/패턴의 구간입니다: case "SourceRows": |
| 2823 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2824 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2825 | case | 분기값/패턴의 구간입니다: case "SplitBeamCountItem": |
| 2826 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2827 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2828 | case | 분기값/패턴의 구간입니다: case "SpotSize": |
| 2829 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2830 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2831 | case | 분기값/패턴의 구간입니다: case "ST_MONITOR_MELSEC_ROW": |
| 2832 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2833 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2834 | case | 분기값/패턴의 구간입니다: case "ST_MONITOR_PARAMETER_ROW": |
| 2835 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2836 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2837 | case | 분기값/패턴의 구간입니다: case "StageAxes": |
| 2838 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2839 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2840 | case | 분기값/패턴의 구간입니다: case "StageHomeCommand": |
| 2841 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2842 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2843 | case | 분기값/패턴의 구간입니다: case "StageMoveCommand": |
| 2844 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2845 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2846 | case | 분기값/패턴의 구간입니다: case "StageStopCommand": |
| 2847 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2848 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2849 | case | 분기값/패턴의 구간입니다: case "StartCommand": |
| 2850 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2851 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2852 | case | 분기값/패턴의 구간입니다: case "StartTime": |
| 2853 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2854 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2855 | case | 분기값/패턴의 구간입니다: case "State": |
| 2856 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2857 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2858 | case | 분기값/패턴의 구간입니다: case "StateBrush": |
| 2859 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2860 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2861 | case | 분기값/패턴의 구간입니다: case "StateRows": |
| 2862 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2863 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2864 | case | 분기값/패턴의 구간입니다: case "StateText": |
| 2865 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2866 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2867 | case | 분기값/패턴의 구간입니다: case "StatusBrush": |
| 2868 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2869 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2870 | case | 분기값/패턴의 구간입니다: case "StatusMessage": |
| 2871 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2872 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2873 | case | 분기값/패턴의 구간입니다: case "StatusPanelTitle": |
| 2874 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2875 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2876 | case | 분기값/패턴의 구간입니다: case "StatusRows": |
| 2877 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2878 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2879 | case | 분기값/패턴의 구간입니다: case "StopCommand": |
| 2880 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2881 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2882 | case | 분기값/패턴의 구간입니다: case "Subtitle": |
| 2883 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2884 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2885 | case | 분기값/패턴의 구간입니다: case "SummaryItems": |
| 2886 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2887 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2888 | case | 분기값/패턴의 구간입니다: case "SummaryRows": |
| 2889 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2890 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2891 | case | 분기값/패턴의 구간입니다: case "SystemSection": |
| 2892 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2893 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2894 | case | 분기값/패턴의 구간입니다: case "TabItems": |
| 2895 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2896 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2897 | case | 분기값/패턴의 구간입니다: case "Tabs": |
| 2898 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2899 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2900 | case | 분기값/패턴의 구간입니다: case "TargetGx": |
| 2901 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2902 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2903 | case | 분기값/패턴의 구간입니다: case "TargetGy": |
| 2904 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2905 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2906 | case | 분기값/패턴의 구간입니다: case "TargetGz": |
| 2907 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2908 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2909 | case | 분기값/패턴의 구간입니다: case "TargetItems": |
| 2910 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2911 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2912 | case | 분기값/패턴의 구간입니다: case "TargetPosition": |
| 2913 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2914 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2915 | case | 분기값/패턴의 구간입니다: case "TextBrush": |
| 2916 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2917 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2918 | case | 분기값/패턴의 구간입니다: case "ThemeModeText": |
| 2919 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2920 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2921 | case | 분기값/패턴의 구간입니다: case "ThemeToggleText": |
| 2922 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2923 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2924 | case | 분기값/패턴의 구간입니다: case "Title": |
| 2925 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2926 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2927 | case | 분기값/패턴의 구간입니다: case "ToggleOperationModeCommand": |
| 2928 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2929 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2930 | case | 분기값/패턴의 구간입니다: case "ToggleMelsecWriteLockCommand": |
| 2931 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2932 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2933 | case | 분기값/패턴의 구간입니다: case "TogglePointCommand": |
| 2934 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2935 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2936 | case | 분기값/패턴의 구간입니다: case "TogglePreviewHeadCommand": |
| 2937 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2938 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2939 | case | 분기값/패턴의 구간입니다: case "ToggleThemeCommand": |
| 2940 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2941 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2942 | case | 분기값/패턴의 구간입니다: case "TotalShotsText": |
| 2943 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2944 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2945 | case | 분기값/패턴의 구간입니다: case "Trend": |
| 2946 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2947 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2948 | case | 분기값/패턴의 구간입니다: case "TrendBars": |
| 2949 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2950 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2951 | case | 분기값/패턴의 구간입니다: case "TrendPanelTitle": |
| 2952 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2953 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2954 | case | 분기값/패턴의 구간입니다: case "TrendPoints": |
| 2955 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2956 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2957 | case | 분기값/패턴의 구간입니다: case "Type": |
| 2958 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2959 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2960 | case | 분기값/패턴의 구간입니다: case "TypeBrush": |
| 2961 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2962 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2963 | case | 분기값/패턴의 구간입니다: case "TypeOptions": |
| 2964 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2965 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2966 | case | 분기값/패턴의 구간입니다: case "Unit": |
| 2967 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2968 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2969 | case | 분기값/패턴의 구간입니다: case "UseBrush": |
| 2970 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2971 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2972 | case | 분기값/패턴의 구간입니다: case "UsesSelectionEditor": |
| 2973 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2974 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2975 | case | 분기값/패턴의 구간입니다: case "UseStretchScaleProperty": |
| 2976 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2977 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2978 | case | 분기값/패턴의 구간입니다: case "UsesWriteSelection": |
| 2979 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2980 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2981 | case | 분기값/패턴의 구간입니다: case "UseText": |
| 2982 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2983 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2984 | case | 분기값/패턴의 구간입니다: case "Value": |
| 2985 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2986 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2987 | case | 분기값/패턴의 구간입니다: case "ValueBrush": |
| 2988 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2989 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2990 | case | 분기값/패턴의 구간입니다: case "ValueOptions": |
| 2991 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2992 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2993 | case | 분기값/패턴의 구간입니다: case "ValueState": |
| 2994 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2995 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2996 | case | 분기값/패턴의 구간입니다: case "VisionProtocolCommandDescription": |
| 2997 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 2998 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 2999 | case | 분기값/패턴의 구간입니다: case "VisionProtocolEndpoint": |
| 3000 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3001 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3002 | case | 분기값/패턴의 구간입니다: case "VisionProtocolHasNoArguments": |
| 3003 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3004 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3005 | case | 분기값/패턴의 구간입니다: case "VisionProtocolInspectionType": |
| 3006 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3007 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3008 | case | 분기값/패턴의 구간입니다: case "VisionProtocolIsFlyingReady": |
| 3009 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3010 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3011 | case | 분기값/패턴의 구간입니다: case "VisionProtocolKeepAlive": |
| 3012 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3013 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3014 | case | 분기값/패턴의 구간입니다: case "VisionProtocolMarkRowCountText": |
| 3015 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3016 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3017 | case | 분기값/패턴의 구간입니다: case "VisionProtocolRequestPreview": |
| 3018 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3019 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3020 | case | 분기값/패턴의 구간입니다: case "VisionProtocolStatus": |
| 3021 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3022 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3023 | case | 분기값/패턴의 구간입니다: case "VisionProtocolUsesMarkRows": |
| 3024 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3025 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3026 | case | 분기값/패턴의 구간입니다: case "ZPositionMoveCommand": |
| 3027 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3028 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3029 | case | 분기값/패턴의 구간입니다: case "Wait": |
| 3030 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3031 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3032 | case | 분기값/패턴의 구간입니다: case "WriteInputType": |
| 3033 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3034 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3035 | case | 분기값/패턴의 구간입니다: case "WriteMelsecCommand": |
| 3036 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3037 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3038 | case | 분기값/패턴의 구간입니다: case "WriteValue": |
| 3039 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3040 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3041 | case | 분기값/패턴의 구간입니다: case "WriteValueOptions": |
| 3042 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3043 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3044 | case | 분기값/패턴의 구간입니다: case "XLabel": |
| 3045 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3046 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 3047 | case | 분기값/패턴의 구간입니다: case "YLabel": |
| 3048 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |
| 3049 | break | 해당 반복/분기 구간을 종료합니다: break; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OnPropertyChanged"]
 N0["L786 switch"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Menu/CBindingBase.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
