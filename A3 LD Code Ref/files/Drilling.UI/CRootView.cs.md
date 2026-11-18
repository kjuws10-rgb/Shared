# Drilling.UI/CRootView.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 96e22cd027c84bf302b23f2949b98985d7f301bb |
| 원본 SHA256 | 29134b161e9492cd7db3577c724a977eea1cb76e76b54394362220952ba37609 |
| 파일 분류 | code |
| 원본 크기/행 | 125,794 bytes / 2,962 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../diagrams/files/eb695d5c31a6def33d31.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CRootView | ClassDeclaration | 23–2938 | CRootView: CBindingBase |
| EN_AUTO_CYCLE_STATE | EnumDeclaration | 240–246 | EN_AUTO_CYCLE_STATE |
| CAlarmNavigationTracker | ClassDeclaration | 2941–2951 | CAlarmNavigationTracker |
| ST_SYSTEM_STATUS_SOURCE | RecordDeclaration | 2953–2959 | ST_SYSTEM_STATUS_SOURCE |
| ST_SYSTEM_STATUS_SNAPSHOT | RecordDeclaration | 2960–2960 | ST_SYSTEM_STATUS_SNAPSHOT |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| SoftwareVersion | PropertyDeclaration | L25–25 | string Drilling.UI.CRootView.SoftwareVersion |
| _alarmDispatcher | FieldDeclaration | L28–28 | Dispatcher Drilling.UI.CRootView._alarmDispatcher |
| _alarmNavigation | FieldDeclaration | L29–29 | Drilling.UI.CAlarmNavigationTracker Drilling.UI.CRootView._alarmNavigation |
| _heavyOccurrences | FieldDeclaration | L30–30 | System.Collections.Generic.HashSet<(int Code, System.DateTimeOffset Time)> Drilling.UI.CRootView._heavyOccurrences |
| _alarmRefreshQueued | FieldDeclaration | L31–31 | int Drilling.UI.CRootView._alarmRefreshQueued |
| _isAlarmNavigation | FieldDeclaration | L32–32 | bool Drilling.UI.CRootView._isAlarmNavigation |
| _isHeaderAlarmResetRunning | FieldDeclaration | L33–33 | bool Drilling.UI.CRootView._isHeaderAlarmResetRunning |
| _heavyRecoveryBlocked | FieldDeclaration | L34–34 | bool Drilling.UI.CRootView._heavyRecoveryBlocked |
| _heavyAlarmRecoveryTask | FieldDeclaration | L35–35 | System.Threading.Tasks.Task? Drilling.UI.CRootView._heavyAlarmRecoveryTask |
| _alarmRecoveryStatus | FieldDeclaration | L36–36 | string Drilling.UI.CRootView._alarmRecoveryStatus |
| _alarmPopup | FieldDeclaration | L37–37 | Drilling.UI.Popup.CAlarmPopupDialog? Drilling.UI.CRootView._alarmPopup |
| _headerAlarmResetCommand | FieldDeclaration | L38–38 | Drilling.UI.Menu.CButtonCommand? Drilling.UI.CRootView._headerAlarmResetCommand |
| MainLiveStatusRefreshInterval | FieldDeclaration | L39–39 | System.TimeSpan Drilling.UI.CRootView.MainLiveStatusRefreshInterval |
| MainLiveStatusTimeout | FieldDeclaration | L40–40 | System.TimeSpan Drilling.UI.CRootView.MainLiveStatusTimeout |
| MonitorDefaultRefreshInterval | FieldDeclaration | L41–41 | System.TimeSpan Drilling.UI.CRootView.MonitorDefaultRefreshInterval |
| MonitorShellStatusRefreshInterval | FieldDeclaration | L42–42 | System.TimeSpan Drilling.UI.CRootView.MonitorShellStatusRefreshInterval |
| ErrorReportInterval | FieldDeclaration | L43–43 | System.TimeSpan Drilling.UI.CRootView.ErrorReportInterval |
| SelectRecipeSettingKey | FieldDeclaration | L44–44 | string Drilling.UI.CRootView.SelectRecipeSettingKey |
| DefaultRecipeId | FieldDeclaration | L45–45 | string Drilling.UI.CRootView.DefaultRecipeId |
| ShiftOffsetXKey | FieldDeclaration | L46–46 | string Drilling.UI.CRootView.ShiftOffsetXKey |
| ShiftOffsetYKey | FieldDeclaration | L47–47 | string Drilling.UI.CRootView.ShiftOffsetYKey |
| OperatorMenus | FieldDeclaration | L48–48 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.EN_MENU> Drilling.UI.CRootView.OperatorMenus |
| AutoModeMenus | FieldDeclaration | L49–55 | System.Collections.Generic.IReadOnlySet<Drilling.UI.Menu.Menus.EN_MENU> Drilling.UI.CRootView.AutoModeMenus |
| HeaderModules | FieldDeclaration | L56–66 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_EQP_MODULE> Drilling.UI.CRootView.HeaderModules |
| _stationManager | FieldDeclaration | L67–67 | Drilling.Common.Station.CStationManager Drilling.UI.CRootView._stationManager |
| _manager | FieldDeclaration | L68–68 | Drilling.Common.Managers.CManager Drilling.UI.CRootView._manager |
| _interfaceManager | FieldDeclaration | L69–69 | Drilling.Common.Interface.CInterfaceManager Drilling.UI.CRootView._interfaceManager |
| _motionManager | FieldDeclaration | L70–70 | Drilling.Common.Motion.CMotionManager Drilling.UI.CRootView._motionManager |
| _alarmManager | FieldDeclaration | L71–71 | Drilling.Common.Alarm.CAlarmManager Drilling.UI.CRootView._alarmManager |
| _interLockManager | FieldDeclaration | L72–72 | Drilling.Common.InterLock.CInterLockManager Drilling.UI.CRootView._interLockManager |
| _recipeManager | FieldDeclaration | L73–73 | Drilling.Common.Managers.CRecipeManager Drilling.UI.CRootView._recipeManager |
| _productManager | FieldDeclaration | L74–74 | Drilling.Common.Product.CProductManager Drilling.UI.CRootView._productManager |
| _reviewManager | FieldDeclaration | L75–75 | Drilling.Common.Review.CReviewManager Drilling.UI.CRootView._reviewManager |
| _menus | FieldDeclaration | L76–76 | System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase> Drilling.UI.CRootView._menus |
| _selectedHeaderModuleIndexes | FieldDeclaration | L77–77 | System.Collections.Generic.Dictionary<Drilling.Common.Interface.EN_EQP_MODULE, int> Drilling.UI.CRootView._selectedHeaderModuleIndexes |
| _processPreparationGate | FieldDeclaration | L78–78 | System.Threading.SemaphoreSlim Drilling.UI.CRootView._processPreparationGate |
| _initialProcessModelCts | FieldDeclaration | L79–79 | System.Threading.CancellationTokenSource Drilling.UI.CRootView._initialProcessModelCts |
| _initialProcessModelTask | FieldDeclaration | L80–80 | System.Threading.Tasks.Task Drilling.UI.CRootView._initialProcessModelTask |
| _selectedMenu | FieldDeclaration | L81–81 | Drilling.UI.Menu.Menus.CMenuItem Drilling.UI.CRootView._selectedMenu |
| _currentScreen | FieldDeclaration | L82–82 | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView._currentScreen |
| _systemStatus | FieldDeclaration | L83–83 | Drilling.Common.Managers.ST_SYSTEM_STATUS Drilling.UI.CRootView._systemStatus |
| _interfaceCommStatuses | FieldDeclaration | L84–84 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.UI.CRootView._interfaceCommStatuses |
| _statusMessage | FieldDeclaration | L85–85 | string Drilling.UI.CRootView._statusMessage |
| _currentDateText | FieldDeclaration | L86–86 | string Drilling.UI.CRootView._currentDateText |
| _currentTimeText | FieldDeclaration | L87–87 | string Drilling.UI.CRootView._currentTimeText |
| _selectedHeadNo | FieldDeclaration | L88–88 | int Drilling.UI.CRootView._selectedHeadNo |
| _selectedManualSettingName | FieldDeclaration | L89–89 | string Drilling.UI.CRootView._selectedManualSettingName |
| _selectedRecipeId | FieldDeclaration | L90–90 | string Drilling.UI.CRootView._selectedRecipeId |
| _viewRecipeId | FieldDeclaration | L91–91 | string Drilling.UI.CRootView._viewRecipeId |
| _selectedRecipeCategory | FieldDeclaration | L92–92 | string Drilling.UI.CRootView._selectedRecipeCategory |
| _selectedSettingTab | FieldDeclaration | L93–93 | string Drilling.UI.CRootView._selectedSettingTab |
| _selectedSettingGroup | FieldDeclaration | L94–94 | string Drilling.UI.CRootView._selectedSettingGroup |
| _selectedMonitorTab | FieldDeclaration | L95–95 | string Drilling.UI.CRootView._selectedMonitorTab |
| _shiftOffsetX | FieldDeclaration | L96–96 | string Drilling.UI.CRootView._shiftOffsetX |
| _shiftOffsetY | FieldDeclaration | L97–97 | string Drilling.UI.CRootView._shiftOffsetY |
| _operationMode | FieldDeclaration | L98–98 | Drilling.Common.Managers.EN_SYSTEM_MODE Drilling.UI.CRootView._operationMode |
| _autoCycleState | FieldDeclaration | L99–99 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE Drilling.UI.CRootView._autoCycleState |
| _autoCycleCts | FieldDeclaration | L100–100 | System.Threading.CancellationTokenSource? Drilling.UI.CRootView._autoCycleCts |
| _autoCycleCompletion | FieldDeclaration | L101–101 | System.Threading.Tasks.TaskCompletionSource<bool>? Drilling.UI.CRootView._autoCycleCompletion |
| _currentTheme | FieldDeclaration | L102–102 | Drilling.UI.EN_UI_THEME Drilling.UI.CRootView._currentTheme |
| _statusRefreshRunning | FieldDeclaration | L103–103 | bool Drilling.UI.CRootView._statusRefreshRunning |
| _screenRefreshRunning | FieldDeclaration | L104–104 | int Drilling.UI.CRootView._screenRefreshRunning |
| _screenRefreshPending | FieldDeclaration | L105–105 | bool Drilling.UI.CRootView._screenRefreshPending |
| _monitorLiveRefreshRunning | FieldDeclaration | L106–106 | bool Drilling.UI.CRootView._monitorLiveRefreshRunning |
| _manualScannerStatusRefreshRunning | FieldDeclaration | L107–107 | bool Drilling.UI.CRootView._manualScannerStatusRefreshRunning |
| _mainLiveRefreshRunning | FieldDeclaration | L108–108 | bool Drilling.UI.CRootView._mainLiveRefreshRunning |
| _mainLiveStatusErrorActive | FieldDeclaration | L109–109 | bool Drilling.UI.CRootView._mainLiveStatusErrorActive |
| _mainLiveStatusRefreshCts | FieldDeclaration | L110–110 | System.Threading.CancellationTokenSource? Drilling.UI.CRootView._mainLiveStatusRefreshCts |
| _lastMonitorScreenRefreshTimestamp | FieldDeclaration | L111–111 | long Drilling.UI.CRootView._lastMonitorScreenRefreshTimestamp |
| _lastMonitorShellStatusRefreshTimestamp | FieldDeclaration | L112–112 | long Drilling.UI.CRootView._lastMonitorShellStatusRefreshTimestamp |
| _lastMainLiveStatusRefreshTimestamp | FieldDeclaration | L113–113 | long Drilling.UI.CRootView._lastMainLiveStatusRefreshTimestamp |
| _lastMainLiveStatusErrorReportTimestamp | FieldDeclaration | L114–114 | long Drilling.UI.CRootView._lastMainLiveStatusErrorReportTimestamp |
| _lastClockTickErrorReportTimestamp | FieldDeclaration | L115–115 | long Drilling.UI.CRootView._lastClockTickErrorReportTimestamp |
| _lastMainLiveStatusError | FieldDeclaration | L116–116 | string Drilling.UI.CRootView._lastMainLiveStatusError |
| _lastClockTickError | FieldDeclaration | L117–117 | string Drilling.UI.CRootView._lastClockTickError |
| _pmLockStatus | FieldDeclaration | L118–118 | Drilling.Common.Managers.ST_PM_LOCK_STATUS Drilling.UI.CRootView._pmLockStatus |
| AutoCycleStopTimeout | FieldDeclaration | L119–119 | System.TimeSpan Drilling.UI.CRootView.AutoCycleStopTimeout |
| _protectWindowNotice | FieldDeclaration | L120–120 | Drilling.UI.Popup.CProtectWindowRequestNotice? Drilling.UI.CRootView._protectWindowNotice |
| _autoFineReview | FieldDeclaration | L121–121 | Drilling.Common.Review.CAutoFineReviewCoordinator? Drilling.UI.CRootView._autoFineReview |
| _autoDistortion | FieldDeclaration | L122–122 | Drilling.Common.Correction.CAlignDistortionCycle? Drilling.UI.CRootView._autoDistortion |
| _stageSimulationDialog | FieldDeclaration | L123–123 | Drilling.UI.Popup.CMelsecStageSimulationDialog? Drilling.UI.CRootView._stageSimulationDialog |
| MelsecSimulatorVisibilityChanged | EventFieldDeclaration | L124–124 | System.EventHandler? Drilling.UI.CRootView.MelsecSimulatorVisibilityChanged |
| _lastSimulatorVisibility | FieldDeclaration | L125–125 | Visibility? Drilling.UI.CRootView._lastSimulatorVisibility |
| .ctor | ConstructorDeclaration | L128–236 | Drilling.UI.CRootView.CRootView(Drilling.Common.Managers.CManager, Drilling.Common.Station.CStationManager, Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Motion.CMotionManager, Drilling.Common.Alarm.CAlarmManager, Drilling.Common.InterLock.CInterLockManager, Drilling.Common.Managers.CManualScanFileBase, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Managers.CSettingManager, Drilling.Common.Product.CProductManager, Drilling.Common.Review.CReviewManager, Drilling.Common.Station.CAutomationScriptFileBase) |
| BuildCMenuItem | LocalFunctionStatement | L160–163 | Drilling.UI.Menu.Menus.CMenuItem BuildCMenuItem(Drilling.UI.Menu.Menus.EN_MENU) |
| StartCallback | LocalFunctionStatement | L173–176 | void StartCallback(object?) |
| CanExecuteStartCommand | LocalFunctionStatement | L178–181 | bool CanExecuteStartCommand(object?) |
| StopCallback | LocalFunctionStatement | L184–187 | void StopCallback(object?) |
| CanExecuteStopCommand | LocalFunctionStatement | L189–192 | bool CanExecuteStopCommand(object?) |
| SelectHeadCallback | LocalFunctionStatement | L195–198 | void SelectHeadCallback(object?) |
| CanExecuteSelectHeadCommand | LocalFunctionStatement | L200–203 | bool CanExecuteSelectHeadCommand(object?) |
| ToggleThemeCallback | LocalFunctionStatement | L206–209 | void ToggleThemeCallback(object?) |
| ToggleOperationModeCallback | LocalFunctionStatement | L213–216 | void ToggleOperationModeCallback(object?) |
| CanExecuteToggleOperationModeCommand | LocalFunctionStatement | L218–221 | bool CanExecuteToggleOperationModeCommand(object?) |
| Ready | EnumMemberDeclaration | L242–242 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE.Ready |
| Preparing | EnumMemberDeclaration | L243–243 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE.Preparing |
| Running | EnumMemberDeclaration | L244–244 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE.Running |
| Stopping | EnumMemberDeclaration | L245–245 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE.Stopping |
| StopAutomationStatusAcquisition | MethodDeclaration | L248–255 | void Drilling.UI.CRootView.StopAutomationStatusAcquisition() |
| Menus | PropertyDeclaration | L257–257 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.CMenuItem> Drilling.UI.CRootView.Menus |
| get_Menus | GetAccessorDeclaration | L257–257 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.CMenuItem> Drilling.UI.CRootView.Menus.get |
| HeaderStatusItems | PropertyDeclaration | L258–258 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderStatusItems |
| get_HeaderStatusItems | GetAccessorDeclaration | L258–258 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderStatusItems.get |
| HeaderContextStatusItems | PropertyDeclaration | L259–259 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderContextStatusItems |
| get_HeaderContextStatusItems | GetAccessorDeclaration | L259–259 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderContextStatusItems.get |
| HeaderCommunicationStatusItems | PropertyDeclaration | L260–260 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderCommunicationStatusItems |
| get_HeaderCommunicationStatusItems | GetAccessorDeclaration | L260–260 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderCommunicationStatusItems.get |
| FooterStatusItems | PropertyDeclaration | L261–261 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.FooterStatusItems |
| get_FooterStatusItems | GetAccessorDeclaration | L261–261 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.FooterStatusItems.get |
| SelectedMenu | PropertyDeclaration | L263–332 | Drilling.UI.Menu.Menus.CMenuItem Drilling.UI.CRootView.SelectedMenu |
| get_SelectedMenu | GetAccessorDeclaration | L265–268 | Drilling.UI.Menu.Menus.CMenuItem Drilling.UI.CRootView.SelectedMenu.get |
| set_SelectedMenu | SetAccessorDeclaration | L270–331 | void Drilling.UI.CRootView.SelectedMenu.set |
| CurrentScreen | PropertyDeclaration | L334–345 | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CurrentScreen |
| get_CurrentScreen | GetAccessorDeclaration | L336–339 | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CurrentScreen.get |
| set_CurrentScreen | SetAccessorDeclaration | L341–344 | void Drilling.UI.CRootView.CurrentScreen.set |
| StatusMessage | PropertyDeclaration | L347–358 | string Drilling.UI.CRootView.StatusMessage |
| get_StatusMessage | GetAccessorDeclaration | L349–352 | string Drilling.UI.CRootView.StatusMessage.get |
| set_StatusMessage | SetAccessorDeclaration | L354–357 | void Drilling.UI.CRootView.StatusMessage.set |
| CurrentDateText | PropertyDeclaration | L360–371 | string Drilling.UI.CRootView.CurrentDateText |
| get_CurrentDateText | GetAccessorDeclaration | L362–365 | string Drilling.UI.CRootView.CurrentDateText.get |
| set_CurrentDateText | SetAccessorDeclaration | L367–370 | void Drilling.UI.CRootView.CurrentDateText.set |
| CurrentTimeText | PropertyDeclaration | L373–384 | string Drilling.UI.CRootView.CurrentTimeText |
| get_CurrentTimeText | GetAccessorDeclaration | L375–378 | string Drilling.UI.CRootView.CurrentTimeText.get |
| set_CurrentTimeText | SetAccessorDeclaration | L380–383 | void Drilling.UI.CRootView.CurrentTimeText.set |
| CurrentUserText | PropertyDeclaration | L386–392 | string Drilling.UI.CRootView.CurrentUserText |
| get_CurrentUserText | GetAccessorDeclaration | L388–391 | string Drilling.UI.CRootView.CurrentUserText.get |
| ThemeToggleText | PropertyDeclaration | L394–400 | string Drilling.UI.CRootView.ThemeToggleText |
| get_ThemeToggleText | GetAccessorDeclaration | L396–399 | string Drilling.UI.CRootView.ThemeToggleText.get |
| ThemeModeText | PropertyDeclaration | L402–408 | string Drilling.UI.CRootView.ThemeModeText |
| get_ThemeModeText | GetAccessorDeclaration | L404–407 | string Drilling.UI.CRootView.ThemeModeText.get |
| StartCommand | PropertyDeclaration | L410–410 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.StartCommand |
| get_StartCommand | GetAccessorDeclaration | L410–410 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.StartCommand.get |
| StopCommand | PropertyDeclaration | L411–411 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.StopCommand |
| get_StopCommand | GetAccessorDeclaration | L411–411 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.StopCommand.get |
| SelectHeadCommand | PropertyDeclaration | L412–412 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.SelectHeadCommand |
| get_SelectHeadCommand | GetAccessorDeclaration | L412–412 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.SelectHeadCommand.get |
| ToggleThemeCommand | PropertyDeclaration | L413–413 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.ToggleThemeCommand |
| get_ToggleThemeCommand | GetAccessorDeclaration | L413–413 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.ToggleThemeCommand.get |
| ToggleOperationModeCommand | PropertyDeclaration | L414–414 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.ToggleOperationModeCommand |
| get_ToggleOperationModeCommand | GetAccessorDeclaration | L414–414 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.ToggleOperationModeCommand.get |
| ShiftOffsetX | PropertyDeclaration | L416–427 | string Drilling.UI.CRootView.ShiftOffsetX |
| get_ShiftOffsetX | GetAccessorDeclaration | L418–421 | string Drilling.UI.CRootView.ShiftOffsetX.get |
| set_ShiftOffsetX | SetAccessorDeclaration | L423–426 | void Drilling.UI.CRootView.ShiftOffsetX.set |
| ShiftOffsetY | PropertyDeclaration | L429–440 | string Drilling.UI.CRootView.ShiftOffsetY |
| get_ShiftOffsetY | GetAccessorDeclaration | L431–434 | string Drilling.UI.CRootView.ShiftOffsetY.get |
| set_ShiftOffsetY | SetAccessorDeclaration | L436–439 | void Drilling.UI.CRootView.ShiftOffsetY.set |
| IsManualShiftOffsetVisible | PropertyDeclaration | L442–448 | bool Drilling.UI.CRootView.IsManualShiftOffsetVisible |
| get_IsManualShiftOffsetVisible | GetAccessorDeclaration | L444–447 | bool Drilling.UI.CRootView.IsManualShiftOffsetVisible.get |
| CanSelectHead | PropertyDeclaration | L450–456 | bool Drilling.UI.CRootView.CanSelectHead |
| get_CanSelectHead | GetAccessorDeclaration | L452–455 | bool Drilling.UI.CRootView.CanSelectHead.get |
| IsSimulationEnvironment | PropertyDeclaration | L458–464 | bool Drilling.UI.CRootView.IsSimulationEnvironment |
| get_IsSimulationEnvironment | GetAccessorDeclaration | L460–463 | bool Drilling.UI.CRootView.IsSimulationEnvironment.get |
| CanStartAutoCycle | MethodDeclaration | L466–469 | bool Drilling.UI.CRootView.CanStartAutoCycle() |
| CanStopAutoCycle | MethodDeclaration | L471–474 | bool Drilling.UI.CRootView.CanStopAutoCycle() |
| IsManualStartEligible | MethodDeclaration | L476–479 | bool Drilling.UI.CRootView.IsManualStartEligible() |
| RefreshCurrentScreen | MethodDeclaration | L481–540 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() |
| ResetMenuStateOnOpen | MethodDeclaration | L542–553 | void Drilling.UI.CRootView.ResetMenuStateOnOpen(Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.EN_MENU) |
| ResetSelectedManualHead | MethodDeclaration | L555–572 | void Drilling.UI.CRootView.ResetSelectedManualHead() |
| ToggleTheme | MethodDeclaration | L574–582 | System.Threading.Tasks.Task Drilling.UI.CRootView.ToggleTheme() |
| ToggleOperationMode | MethodDeclaration | L584–643 | System.Threading.Tasks.Task Drilling.UI.CRootView.ToggleOperationMode(System.Func<string, string, bool>?, System.Action<string, string>?) |
| CheckAutoModeInterlocks | MethodDeclaration | L645–671 | System.Threading.Tasks.Task<bool> Drilling.UI.CRootView.CheckAutoModeInterlocks(System.Action<string, string>) |
| CheckStageMotionOwnership | MethodDeclaration | L673–682 | bool Drilling.UI.CRootView.CheckStageMotionOwnership(System.Action<string, string>, string) |
| CanAccessMenu | MethodDeclaration | L684–692 | bool Drilling.UI.CRootView.CanAccessMenu(Drilling.UI.Menu.Menus.EN_MENU) |
| IsReviewNavigationLocked | MethodDeclaration | L694–708 | bool Drilling.UI.CRootView.IsReviewNavigationLocked(Drilling.UI.Menu.Menus.EN_MENU) |
| ApplyMenuAccessForOperationMode | MethodDeclaration | L710–716 | void Drilling.UI.CRootView.ApplyMenuAccessForOperationMode() |
| RefreshOperationModeAccess | MethodDeclaration | L718–734 | void Drilling.UI.CRootView.RefreshOperationModeAccess() |
| MatchesItem | LocalFunctionStatement | L720–723 | bool MatchesItem(Drilling.UI.Menu.Menus.CMenuItem) |
| RefreshShellStatusItems | MethodDeclaration | L736–747 | void Drilling.UI.CRootView.RefreshShellStatusItems() |
| RefreshSystemStatus | MethodDeclaration | L749–769 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshSystemStatus() |
| WaitForInitialProcessModelPreparation | MethodDeclaration | L771–785 | System.Threading.Tasks.Task Drilling.UI.CRootView.WaitForInitialProcessModelPreparation(System.Threading.CancellationToken) |
| RefreshMonitorLiveData | MethodDeclaration | L787–817 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshMonitorLiveData() |
| RefreshMainLiveStatus | MethodDeclaration | L819–871 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshMainLiveStatus() |
| RefreshManualScannerStatus | MethodDeclaration | L873–899 | void Drilling.UI.CRootView.RefreshManualScannerStatus() |
| CancelMainLiveStatusRefresh | MethodDeclaration | L901–911 | void Drilling.UI.CRootView.CancelMainLiveStatusRefresh() |
| StopMainScannerStatusPolling | MethodDeclaration | L913–921 | void Drilling.UI.CRootView.StopMainScannerStatusPolling() |
| QueueMainScannerStatusPollingStop | MethodDeclaration | L923–938 | void Drilling.UI.CRootView.QueueMainScannerStatusPollingStop() |
| StopPolling | LocalFunctionStatement | L925–935 | void StopPolling() |
| StopManualScannerStatusPolling | MethodDeclaration | L940–948 | void Drilling.UI.CRootView.StopManualScannerStatusPolling() |
| QueueManualScannerStatusPollingStop | MethodDeclaration | L950–965 | void Drilling.UI.CRootView.QueueManualScannerStatusPollingStop() |
| StopPolling | LocalFunctionStatement | L952–962 | void StopPolling() |
| IsMainLiveStatusTargetCurrent | MethodDeclaration | L967–970 | bool Drilling.UI.CRootView.IsMainLiveStatusTargetCurrent(Drilling.UI.Menu.Menus.CScreenViewModel, Drilling.UI.Menu.Menus.CMenuMain?) |
| ReportMainLiveStatusError | MethodDeclaration | L972–987 | void Drilling.UI.CRootView.ReportMainLiveStatusError(System.Exception) |
| ReportStaleMainLiveStatusError | MethodDeclaration | L989–998 | void Drilling.UI.CRootView.ReportStaleMainLiveStatusError(System.Exception) |
| ReportMainLiveStatusRestored | MethodDeclaration | L1000–1011 | void Drilling.UI.CRootView.ReportMainLiveStatusRestored() |
| ReportClockTickError | MethodDeclaration | L1013–1027 | void Drilling.UI.CRootView.ReportClockTickError(System.Exception) |
| QueueStationStateLog | MethodDeclaration | L1029–1045 | void Drilling.UI.CRootView.QueueStationStateLog(string, string, string) |
| WriteStationStateLog | LocalFunctionStatement | L1032–1042 | void WriteStationStateLog() |
| HasElapsed | MethodDeclaration | L1047–1057 | bool Drilling.UI.CRootView.HasElapsed(long, long, System.TimeSpan) |
| RefreshShellCommunicationStatus | MethodDeclaration | L1059–1072 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshShellCommunicationStatus(System.Threading.CancellationToken) |
| GetSystemStatusSnapshot | MethodDeclaration | L1074–1090 | System.Threading.Tasks.Task<Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT> Drilling.UI.CRootView.GetSystemStatusSnapshot(System.Threading.CancellationToken) |
| ReadSystemStatusSource | LocalFunctionStatement | L1079–1084 | Drilling.UI.ST_SYSTEM_STATUS_SOURCE ReadSystemStatusSource() |
| ApplySystemStatusSnapshot | MethodDeclaration | L1092–1102 | void Drilling.UI.CRootView.ApplySystemStatusSnapshot(Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT, bool) |
| GetPMLockStatus | MethodDeclaration | L1104–1107 | Drilling.Common.Managers.ST_PM_LOCK_STATUS Drilling.UI.CRootView.GetPMLockStatus() |
| EnterPMLock | MethodDeclaration | L1109–1117 | void Drilling.UI.CRootView.EnterPMLock() |
| Replace | MethodDeclaration | L1119–1132 | void Drilling.UI.CRootView.Replace<T>(System.Collections.ObjectModel.ObservableCollection<T>, System.Collections.Generic.IEnumerable<T>) |
| CreateHeaderStatusItems | MethodDeclaration | L1134–1151 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateHeaderStatusItems() |
| SelectItem | LocalFunctionStatement | L1143–1146 | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM SelectItem(Drilling.Common.Interface.EN_EQP_MODULE) |
| IsHeaderContextStatusItem | MethodDeclaration | L1153–1156 | bool Drilling.UI.CRootView.IsHeaderContextStatusItem(Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM) |
| CreateFooterStatusItems | MethodDeclaration | L1158–1229 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateFooterStatusItems(Drilling.UI.Menu.Menus.EN_MENU) |
| IsIsEdited | LocalFunctionStatement | L1171–1174 | bool IsIsEdited(Drilling.UI.Menu.Menus.ST_RECIPE_PARAMETER_EDITOR_ITEM) |
| IsIsModified | LocalFunctionStatement | L1186–1189 | bool IsIsModified(Drilling.UI.Menu.Menus.ST_SYSTEM_PARAMETER_ROW) |
| InitializeProcessModel | MethodDeclaration | L1231–1247 | System.Threading.Tasks.Task Drilling.UI.CRootView.InitializeProcessModel(System.Threading.CancellationToken) |
| PrepareInitialProcess | MethodDeclaration | L1249–1283 | System.Threading.Tasks.Task Drilling.UI.CRootView.PrepareInitialProcess(bool, System.Threading.CancellationToken) |
| FindSelectedRecipe | MethodDeclaration | L1285–1312 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.UI.CRootView.FindSelectedRecipe(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>) |
| MatchesItem | LocalFunctionStatement | L1292–1295 | bool MatchesItem(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| MatchesItem2 | LocalFunctionStatement | L1306–1309 | bool MatchesItem2(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| CreateProcessParameters | MethodDeclaration | L1314–1344 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.CRootView.CreateProcessParameters(Drilling.Common.Managers.ST_RECIPE_DEFINITION?, string, string, double, double) |
| HasRecipeParameterKey | LocalFunctionStatement | L1316–1319 | bool HasRecipeParameterKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| SelectKey | LocalFunctionStatement | L1321–1324 | string SelectKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| SelectRecipeParameterGroupKey | LocalFunctionStatement | L1326–1329 | string SelectRecipeParameterGroupKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| SelectValue | LocalFunctionStatement | L1331–1334 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| ReadShiftOffset | MethodDeclaration | L1346–1349 | (double X, double Y) Drilling.UI.CRootView.ReadShiftOffset() |
| OpenShiftOffsetDialog | MethodDeclaration | L1351–1384 | System.Threading.Tasks.Task Drilling.UI.CRootView.OpenShiftOffsetDialog(Window?) |
| BuildRows | LocalFunctionStatement | L1358–1361 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW> BuildRows(double, double) |
| ValidateApply | LocalFunctionStatement | L1363–1366 | string? ValidateApply(double, double) |
| CreateShiftOffsetPreviewParameters | MethodDeclaration | L1386–1418 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.CRootView.CreateShiftOffsetPreviewParameters(Drilling.Common.Managers.ST_RECIPE_DEFINITION?) |
| BuildShiftOffsetHeadRows | MethodDeclaration | L1420–1437 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW> Drilling.UI.CRootView.BuildShiftOffsetHeadRows(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) |
| CreateShiftOffsetParameters | MethodDeclaration | L1439–1446 | System.Collections.Generic.Dictionary<string, string> Drilling.UI.CRootView.CreateShiftOffsetParameters(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) |
| ValidateShiftOffsetApply | MethodDeclaration | L1448–1498 | string? Drilling.UI.CRootView.ValidateShiftOffsetApply(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) |
| AddShiftOffsetIssue | MethodDeclaration | L1500–1506 | void Drilling.UI.CRootView.AddShiftOffsetIssue(System.Collections.Generic.ICollection<string>, string) |
| IsOutsideRange | MethodDeclaration | L1508–1511 | bool Drilling.UI.CRootView.IsOutsideRange(double, double, double, double) |
| FormatShiftOffsetShot | MethodDeclaration | L1513–1516 | string Drilling.UI.CRootView.FormatShiftOffsetShot(Drilling.Common.Recipe.ST_HEAD_SHOT_POINT) |
| ReadShiftOffsetHeadCenterX | MethodDeclaration | L1518–1526 | double Drilling.UI.CRootView.ReadShiftOffsetHeadCenterX(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) |
| ReadShiftOffsetHeadScanFieldHalfWidth | MethodDeclaration | L1528–1537 | double Drilling.UI.CRootView.ReadShiftOffsetHeadScanFieldHalfWidth(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) |
| ReadShiftOffsetScannerReferenceOffsetX | MethodDeclaration | L1539–1544 | double Drilling.UI.CRootView.ReadShiftOffsetScannerReferenceOffsetX(System.Collections.Generic.IReadOnlyDictionary<string, string>) |
| ReadShiftOffsetPreviewInt | MethodDeclaration | L1546–1557 | int Drilling.UI.CRootView.ReadShiftOffsetPreviewInt(System.Collections.Generic.IReadOnlyDictionary<string, string>, int, params string[]) |
| ReadShiftOffsetPreviewDouble | MethodDeclaration | L1559–1570 | double Drilling.UI.CRootView.ReadShiftOffsetPreviewDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, params string[]) |
| FormatShiftOffsetPreviewValue | MethodDeclaration | L1572–1575 | string Drilling.UI.CRootView.FormatShiftOffsetPreviewValue(double) |
| ReadShiftOffsetValue | MethodDeclaration | L1577–1580 | double Drilling.UI.CRootView.ReadShiftOffsetValue(string) |
| NormalizeShiftOffsetText | MethodDeclaration | L1582–1590 | string Drilling.UI.CRootView.NormalizeShiftOffsetText(string?) |
| StartCycle | MethodDeclaration | L1592–1693 | System.Threading.Tasks.Task Drilling.UI.CRootView.StartCycle() |
| StopCycle | MethodDeclaration | L1695–1760 | System.Threading.Tasks.Task Drilling.UI.CRootView.StopCycle() |
| CompleteStopAfterTimeout | MethodDeclaration | L1762–1791 | System.Threading.Tasks.Task Drilling.UI.CRootView.CompleteStopAfterTimeout(System.Threading.Tasks.TaskCompletionSource<bool>?) |
| WaitForStationCycleFinished | MethodDeclaration | L1793–1804 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> Drilling.UI.CRootView.WaitForStationCycleFinished(System.TimeSpan) |
| WaitForStationCycleFinished | MethodDeclaration | L1806–1819 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> Drilling.UI.CRootView.WaitForStationCycleFinished(System.Threading.CancellationToken) |
| IsStationCycleFinished | MethodDeclaration | L1821–1834 | bool Drilling.UI.CRootView.IsStationCycleFinished(Drilling.Common.Station.ST_STATION_STATUS?) |
| SetAutoCycleState | MethodDeclaration | L1836–1846 | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) |
| NotifyOperationCommandStates | MethodDeclaration | L1848–1853 | void Drilling.UI.CRootView.NotifyOperationCommandStates() |
| SelectHead | MethodDeclaration | L1855–1881 | System.Threading.Tasks.Task Drilling.UI.CRootView.SelectHead(object?) |
| CanSelectHeadParameter | MethodDeclaration | L1883–1893 | bool Drilling.UI.CRootView.CanSelectHeadParameter(object?) |
| IsHeadEnabled | MethodDeclaration | L1895–1911 | bool Drilling.UI.CRootView.IsHeadEnabled(int) |
| StartClock | MethodDeclaration | L1913–1967 | void Drilling.UI.CRootView.StartClock() |
| CreateMenus | MethodDeclaration | L1969–2263 | System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase> Drilling.UI.CRootView.CreateMenus(Drilling.Common.Station.CStationManager, Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Motion.CMotionManager, Drilling.Common.Alarm.CAlarmManager, Drilling.Common.InterLock.CInterLockManager, Drilling.Common.Managers.CManualScanFileBase, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Managers.CSettingManager, Drilling.Common.Product.CProductManager, Drilling.Common.Review.CReviewManager, Drilling.Common.Station.CAutomationScriptFileBase) |
| SelectSelectedRecipeId | LocalFunctionStatement | L1983–1986 | string SelectSelectedRecipeId() |
| SetMainStatusMessage | LocalFunctionStatement | L1988–1991 | void SetMainStatusMessage(string) |
| SelectSelectedHeadNo | LocalFunctionStatement | L1993–1996 | int SelectSelectedHeadNo() |
| SelectSelectedManualSettingName | LocalFunctionStatement | L1998–2001 | string SelectSelectedManualSettingName() |
| SetSelectedManualSettingName | LocalFunctionStatement | L2003–2006 | void SetSelectedManualSettingName(string) |
| SetManualStatusMessage | LocalFunctionStatement | L2008–2011 | void SetManualStatusMessage(string) |
| SelectSelectedRecipeId2 | LocalFunctionStatement | L2013–2016 | string SelectSelectedRecipeId2() |
| SetSelectedRecipeId | LocalFunctionStatement | L2018–2021 | void SetSelectedRecipeId(string) |
| SelectViewRecipeId | LocalFunctionStatement | L2023–2026 | string SelectViewRecipeId() |
| SetViewRecipeId | LocalFunctionStatement | L2028–2031 | void SetViewRecipeId(string) |
| SelectRecipe | LocalFunctionStatement | L2033–2036 | Drilling.UI.Menu.Menus.CMenuRecipe? SelectRecipe() |
| SelectSelectedRecipeCategory | LocalFunctionStatement | L2038–2041 | string SelectSelectedRecipeCategory() |
| SetSelectedRecipeCategory | LocalFunctionStatement | L2043–2046 | void SetSelectedRecipeCategory(string) |
| SetRecipeStatusMessage | LocalFunctionStatement | L2048–2051 | void SetRecipeStatusMessage(string) |
| ShowRecipeLoadingScreen | LocalFunctionStatement | L2053–2056 | void ShowRecipeLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) |
| SelectSelectedSettingTab | LocalFunctionStatement | L2058–2061 | string SelectSelectedSettingTab() |
| SetSelectedSettingTab | LocalFunctionStatement | L2063–2066 | void SetSelectedSettingTab(string) |
| SelectSelectedSettingGroup | LocalFunctionStatement | L2068–2071 | string SelectSelectedSettingGroup() |
| SetSelectedSettingGroup | LocalFunctionStatement | L2073–2076 | void SetSelectedSettingGroup(string) |
| SelectSetting | LocalFunctionStatement | L2078–2081 | Drilling.UI.Menu.Menus.CMenuSetting? SelectSetting() |
| SetSettingStatusMessage | LocalFunctionStatement | L2083–2086 | void SetSettingStatusMessage(string) |
| ShowSettingLoadingScreen | LocalFunctionStatement | L2088–2091 | void ShowSettingLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) |
| SetAlarmStatusMessage | LocalFunctionStatement | L2093–2096 | void SetAlarmStatusMessage(string) |
| SelectSelectedRecipeId3 | LocalFunctionStatement | L2098–2101 | string SelectSelectedRecipeId3() |
| SelectSelectedMonitorTab | LocalFunctionStatement | L2103–2106 | string SelectSelectedMonitorTab() |
| SetSelectedMonitorTab | LocalFunctionStatement | L2108–2111 | void SetSelectedMonitorTab(string) |
| SetMonitorStatusMessage | LocalFunctionStatement | L2113–2116 | void SetMonitorStatusMessage(string) |
| CanExecuteMonitorWriteCommand | LocalFunctionStatement | L2118–2121 | bool CanExecuteMonitorWriteCommand() |
| SelectSelectedRecipeId4 | LocalFunctionStatement | L2123–2126 | string SelectSelectedRecipeId4() |
| SetReviewStatusMessage | LocalFunctionStatement | L2128–2131 | void SetReviewStatusMessage(string) |
| RefreshMenuAccessAfterReview | LocalFunctionStatement | L2133–2136 | void RefreshMenuAccessAfterReview() |
| SelectSelectedRecipeId5 | LocalFunctionStatement | L2138–2141 | string SelectSelectedRecipeId5() |
| SetCorrectionStatusMessage | LocalFunctionStatement | L2143–2146 | void SetCorrectionStatusMessage(string) |
| IsCorrectionMenuItem | LocalFunctionStatement | L2162–2165 | bool IsCorrectionMenuItem(Drilling.UI.Menu.Menus.CMenuItem) |
| OpenCorrectionReview | LocalFunctionStatement | L2167–2172 | void OpenCorrectionReview() |
| SelectMenu | LocalFunctionStatement | L2251–2254 | Drilling.UI.Menu.Menus.EN_MENU SelectMenu(Drilling.UI.Menu.Menus.CMenuBase) |
| CreateLoadingScreen | MethodDeclaration | L2265–2268 | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CreateLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) |
| GetHeaderRecipeId | MethodDeclaration | L2270–2273 | string Drilling.UI.CRootView.GetHeaderRecipeId(Drilling.Common.Managers.ST_SYSTEM_STATUS) |
| SyncSelectedManualSettingFromScreen | MethodDeclaration | L2275–2282 | void Drilling.UI.CRootView.SyncSelectedManualSettingFromScreen() |
| SyncSelectedSettingSelectionFromScreen | MethodDeclaration | L2284–2293 | void Drilling.UI.CRootView.SyncSelectedSettingSelectionFromScreen() |
| GetSelectedRecipeFileText | MethodDeclaration | L2295–2303 | string Drilling.UI.CRootView.GetSelectedRecipeFileText() |
| NormalizeRecipeId | MethodDeclaration | L2305–2308 | string Drilling.UI.CRootView.NormalizeRecipeId(string) |
| CreateMonitorFooterStatusItems | MethodDeclaration | L2310–2325 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateMonitorFooterStatusItems() |
| NormalizeMonitorTab | MethodDeclaration | L2327–2340 | string Drilling.UI.CRootView.NormalizeMonitorTab(string) |
| CreateFallbackST_SYSTEM_STATUS | MethodDeclaration | L2342–2359 | Drilling.Common.Managers.ST_SYSTEM_STATUS Drilling.UI.CRootView.CreateFallbackST_SYSTEM_STATUS() |
| NormalizeCommunicationStatuses | MethodDeclaration | L2361–2374 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> Drilling.UI.CRootView.NormalizeCommunicationStatuses(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>) |
| SelectItem | LocalFunctionStatement | L2363–2371 | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS SelectItem(Drilling.Common.Interface.EN_EQP_MODULE) |
| MatchesItem | LocalFunctionStatement | L2365–2368 | bool MatchesItem(Drilling.Common.Interface.ST_DEVICE_COMM_STATUS) |
| ModuleHeader | MethodDeclaration | L2376–2418 | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM Drilling.UI.CRootView.ModuleHeader(Drilling.Common.Managers.ST_SYSTEM_STATUS, Drilling.Common.Interface.EN_EQP_MODULE) |
| SelectPreviousModuleStatusCallback | LocalFunctionStatement | L2393–2396 | void SelectPreviousModuleStatusCallback(object?) |
| SelectNextModuleStatusCallback | LocalFunctionStatement | L2398–2401 | void SelectNextModuleStatusCallback(object?) |
| ShowModuleStatusPopupCallback | LocalFunctionStatement | L2403–2406 | void ShowModuleStatusPopupCallback(object?) |
| GetModuleCommunicationStatuses | MethodDeclaration | L2420–2438 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.UI.CRootView.GetModuleCommunicationStatuses(Drilling.Common.Interface.EN_EQP_MODULE) |
| ShouldIncludeItem | LocalFunctionStatement | L2422–2425 | bool ShouldIncludeItem(Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS) |
| SelectNumber | LocalFunctionStatement | L2427–2430 | int SelectNumber(Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS) |
| SelectNickName | LocalFunctionStatement | L2432–2435 | string SelectNickName(Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS) |
| GetSelectedModuleIndex | MethodDeclaration | L2440–2455 | int Drilling.UI.CRootView.GetSelectedModuleIndex(Drilling.Common.Interface.EN_EQP_MODULE, int) |
| SelectPreviousModuleStatus | MethodDeclaration | L2457–2460 | void Drilling.UI.CRootView.SelectPreviousModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE) |
| SelectNextModuleStatus | MethodDeclaration | L2462–2465 | void Drilling.UI.CRootView.SelectNextModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE) |
| SelectModuleStatus | MethodDeclaration | L2467–2478 | void Drilling.UI.CRootView.SelectModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE, int) |
| ShowModuleStatusPopup | MethodDeclaration | L2480–2496 | void Drilling.UI.CRootView.ShowModuleStatusPopup(Drilling.Common.Interface.EN_EQP_MODULE) |
| ModuleDisplayName | MethodDeclaration | L2498–2513 | string Drilling.UI.CRootView.ModuleDisplayName(Drilling.Common.Interface.EN_EQP_MODULE) |
| ConnectionStateValue | MethodDeclaration | L2515–2523 | string Drilling.UI.CRootView.ConnectionStateValue(Drilling.Common.Interface.EN_COMM_STATE) |
| OperationModeValue | MethodDeclaration | L2525–2533 | string Drilling.UI.CRootView.OperationModeValue(Drilling.Common.Managers.EN_SYSTEM_MODE) |
| OperationModeHeaderValue | MethodDeclaration | L2535–2539 | string Drilling.UI.CRootView.OperationModeHeaderValue(Drilling.Common.Managers.EN_SYSTEM_MODE, bool) |
| OperationModeState | MethodDeclaration | L2541–2544 | string Drilling.UI.CRootView.OperationModeState(bool) |
| AlarmStateValue | MethodDeclaration | L2546–2549 | string Drilling.UI.CRootView.AlarmStateValue(Drilling.Common.Alarm.EN_ALARM_STATE) |
| GetMenuDisplayName | MethodDeclaration | L2551–2566 | string Drilling.UI.CRootView.GetMenuDisplayName(Drilling.UI.Menu.Menus.EN_MENU) |
| EnsureHeavyAlarmRecovery | MethodDeclaration | L2570–2570 | System.Threading.Tasks.Task Drilling.UI.CRootView.EnsureHeavyAlarmRecovery() |
| HeaderAlarmResetCommand | PropertyDeclaration | L2571–2571 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.HeaderAlarmResetCommand |
| CheckHeavyAlarmForOperation | MethodDeclaration | L2573–2580 | bool Drilling.UI.CRootView.CheckHeavyAlarmForOperation(string) |
| ShowAlarmPopup | MethodDeclaration | L2582–2601 | void Drilling.UI.CRootView.ShowAlarmPopup() |
| ConfirmHeaderAlarmReset | MethodDeclaration | L2603–2625 | System.Threading.Tasks.Task Drilling.UI.CRootView.ConfirmHeaderAlarmReset() |
| SetAlarmRecoveryStatus | MethodDeclaration | L2627–2631 | void Drilling.UI.CRootView.SetAlarmRecoveryStatus(string) |
| RecoverHeavyAlarm | MethodDeclaration | L2633–2728 | System.Threading.Tasks.Task Drilling.UI.CRootView.RecoverHeavyAlarm() |
| Stop | LocalFunctionStatement | L2645–2655 | System.Threading.Tasks.Task Stop(System.Func<System.Threading.Tasks.Task>) |
| OnCurrentAlarmsChanged | MethodDeclaration | L2730–2757 | void Drilling.UI.CRootView.OnCurrentAlarmsChanged() |
| StartProtectWindowRequestNotice | MethodDeclaration | L2761–2766 | void Drilling.UI.CRootView.StartProtectWindowRequestNotice(Window) |
| CreateAutoPowerActions | MethodDeclaration | L2770–2782 | Drilling.Common.Station.ST_STAGE_TPM_ACTIONS Drilling.UI.CRootView.CreateAutoPowerActions() |
| _autoReviewZeroLineRunId | FieldDeclaration | L2784–2784 | System.Guid? Drilling.UI.CRootView._autoReviewZeroLineRunId |
| CreateAutoReviewActions | MethodDeclaration | L2785–2826 | Drilling.Common.Station.ST_STAGE_REVIEW_ACTIONS Drilling.UI.CRootView.CreateAutoReviewActions() |
| RaiseDuplicateSourceAlarm | LocalFunctionStatement | L2787–2795 | void RaiseDuplicateSourceAlarm(Drilling.Common.Review.CReviewOffsetDuplicateSourceException) |
| CreateStageReviewInput | MethodDeclaration | L2828–2864 | System.Threading.Tasks.Task<Drilling.Common.Review.ST_AUTO_REVIEW_INPUT> Drilling.UI.CRootView.CreateStageReviewInput(System.Threading.CancellationToken) |
| CreateAutoDistortionActions | MethodDeclaration | L2866–2874 | Drilling.Common.Station.ST_STAGE_DISTORTION_ACTIONS Drilling.UI.CRootView.CreateAutoDistortionActions() |
| CreateStageProcessRequest | MethodDeclaration | L2877–2883 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> Drilling.UI.CRootView.CreateStageProcessRequest(System.Threading.CancellationToken) |
| CreateStageProcessRequestCore | MethodDeclaration | L2886–2900 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> Drilling.UI.CRootView.CreateStageProcessRequestCore(System.Threading.CancellationToken) |
| OpenMelsecStageSimulationCommand | PropertyDeclaration | L2904–2904 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.OpenMelsecStageSimulationCommand |
| get_OpenMelsecStageSimulationCommand | GetAccessorDeclaration | L2904–2904 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.OpenMelsecStageSimulationCommand.get |
| RefreshMelsecSimulatorVisibility | MethodDeclaration | L2906–2913 | void Drilling.UI.CRootView.RefreshMelsecSimulatorVisibility() |
| MelsecSimulatorVisibility | PropertyDeclaration | L2915–2915 | Visibility Drilling.UI.CRootView.MelsecSimulatorVisibility |
| OpenMelsecStageSimulation | MethodDeclaration | L2917–2936 | void Drilling.UI.CRootView.OpenMelsecStageSimulation() |
| _handledOccurrence | FieldDeclaration | L2943–2943 | long Drilling.UI.CAlarmNavigationTracker._handledOccurrence |
| ShouldNavigate | MethodDeclaration | L2944–2950 | bool Drilling.UI.CAlarmNavigationTracker.ShouldNavigate(Drilling.Common.Alarm.ST_CURRENT_ALARM_SNAPSHOT) |

## 멤버별 상세 계약·호출·처리 해설

### PropertyDeclaration `SoftwareVersion` · L25–25

[Drilling.UI/CRootView.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L25-L25)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.SoftwareVersion |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 25 | typeof(CRootView).Assembly.GetName | resolved · 동적 구현 선택 가능 | System.Reflection.AssemblyName System.Reflection.Assembly.GetName() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: typeof(CRootView).Assembly.GetName() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_alarmDispatcher` · L28–28

[Drilling.UI/CRootView.cs:28–28](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L28-L28)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Dispatcher Drilling.UI.CRootView._alarmDispatcher |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Dispatcher |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 28 | variable-initializer | 변수의 초기값을 지정합니다: _alarmDispatcher = Dispatcher.CurrentDispatcher |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_alarmNavigation` · L29–29

[Drilling.UI/CRootView.cs:29–29](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L29-L29)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.CAlarmNavigationTracker Drilling.UI.CRootView._alarmNavigation |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.UI.CAlarmNavigationTracker |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 29 | new | resolved | Drilling.UI.CAlarmNavigationTracker.CAlarmNavigationTracker() · Drilling.UI/CRootView.cs:2941 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 29 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 29 | variable-initializer | 변수의 초기값을 지정합니다: _alarmNavigation = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_heavyOccurrences` · L30–30

[Drilling.UI/CRootView.cs:30–30](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L30-L30)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.HashSet<(int Code, System.DateTimeOffset Time)> Drilling.UI.CRootView._heavyOccurrences |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.HashSet<(int Code, System.DateTimeOffset Time)> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 30 | variable-initializer | 변수의 초기값을 지정합니다: _heavyOccurrences = [] |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_alarmRefreshQueued` · L31–31

[Drilling.UI/CRootView.cs:31–31](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L31-L31)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.CRootView._alarmRefreshQueued |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_isAlarmNavigation` · L32–32

[Drilling.UI/CRootView.cs:32–32](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L32-L32)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._isAlarmNavigation |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 32 | variable-initializer | 변수의 초기값을 지정합니다: _isAlarmNavigation = false |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_isHeaderAlarmResetRunning` · L33–33

[Drilling.UI/CRootView.cs:33–33](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L33-L33)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._isHeaderAlarmResetRunning |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_heavyRecoveryBlocked` · L34–34

[Drilling.UI/CRootView.cs:34–34](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L34-L34)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._heavyRecoveryBlocked |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_heavyAlarmRecoveryTask` · L35–35

[Drilling.UI/CRootView.cs:35–35](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L35-L35)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task? Drilling.UI.CRootView._heavyAlarmRecoveryTask |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_alarmRecoveryStatus` · L36–36

[Drilling.UI/CRootView.cs:36–36](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L36-L36)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._alarmRecoveryStatus |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 36 | variable-initializer | 변수의 초기값을 지정합니다: _alarmRecoveryStatus = "" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_alarmPopup` · L37–37

[Drilling.UI/CRootView.cs:37–37](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L37-L37)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Popup.CAlarmPopupDialog? Drilling.UI.CRootView._alarmPopup |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Popup.CAlarmPopupDialog? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_headerAlarmResetCommand` · L38–38

[Drilling.UI/CRootView.cs:38–38](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L38-L38)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand? Drilling.UI.CRootView._headerAlarmResetCommand |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MainLiveStatusRefreshInterval` · L39–39

[Drilling.UI/CRootView.cs:39–39](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L39-L39)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.TimeSpan Drilling.UI.CRootView.MainLiveStatusRefreshInterval |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.TimeSpan |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 39 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 39 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(1) |
| 39 | variable-initializer | 변수의 초기값을 지정합니다: MainLiveStatusRefreshInterval = TimeSpan.FromSeconds(1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MainLiveStatusTimeout` · L40–40

[Drilling.UI/CRootView.cs:40–40](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L40-L40)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.TimeSpan Drilling.UI.CRootView.MainLiveStatusTimeout |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.TimeSpan |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 40 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 40 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(5) |
| 40 | variable-initializer | 변수의 초기값을 지정합니다: MainLiveStatusTimeout = TimeSpan.FromSeconds(5) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MonitorDefaultRefreshInterval` · L41–41

[Drilling.UI/CRootView.cs:41–41](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L41-L41)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.TimeSpan Drilling.UI.CRootView.MonitorDefaultRefreshInterval |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.TimeSpan |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 41 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 41 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(2) |
| 41 | variable-initializer | 변수의 초기값을 지정합니다: MonitorDefaultRefreshInterval = TimeSpan.FromSeconds(2) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MonitorShellStatusRefreshInterval` · L42–42

[Drilling.UI/CRootView.cs:42–42](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L42-L42)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.TimeSpan Drilling.UI.CRootView.MonitorShellStatusRefreshInterval |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.TimeSpan |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 42 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 42 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(5) |
| 42 | variable-initializer | 변수의 초기값을 지정합니다: MonitorShellStatusRefreshInterval = TimeSpan.FromSeconds(5) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `ErrorReportInterval` · L43–43

[Drilling.UI/CRootView.cs:43–43](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L43-L43)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.TimeSpan Drilling.UI.CRootView.ErrorReportInterval |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.TimeSpan |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 43 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 43 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(10) |
| 43 | variable-initializer | 변수의 초기값을 지정합니다: ErrorReportInterval = TimeSpan.FromSeconds(10) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `SelectRecipeSettingKey` · L44–44

[Drilling.UI/CRootView.cs:44–44](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L44-L44)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.SelectRecipeSettingKey |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 44 | variable-initializer | 변수의 초기값을 지정합니다: SelectRecipeSettingKey = "SELECT_RECIPE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DefaultRecipeId` · L45–45

[Drilling.UI/CRootView.cs:45–45](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L45-L45)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.DefaultRecipeId |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 45 | variable-initializer | 변수의 초기값을 지정합니다: DefaultRecipeId = "DRILL_A01" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `ShiftOffsetXKey` · L46–46

[Drilling.UI/CRootView.cs:46–46](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L46-L46)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ShiftOffsetXKey |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 46 | variable-initializer | 변수의 초기값을 지정합니다: ShiftOffsetXKey = "SHIFT_OFFSET_X" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `ShiftOffsetYKey` · L47–47

[Drilling.UI/CRootView.cs:47–47](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L47-L47)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ShiftOffsetYKey |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 47 | variable-initializer | 변수의 초기값을 지정합니다: ShiftOffsetYKey = "SHIFT_OFFSET_Y" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `OperatorMenus` · L48–48

[Drilling.UI/CRootView.cs:48–48](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L48-L48)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.EN_MENU> Drilling.UI.CRootView.OperatorMenus |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.EN_MENU> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 48 | variable-initializer | 변수의 초기값을 지정합니다: OperatorMenus = [EN_MENU.Main, EN_MENU.Manual, EN_MENU.Recipe, EN_MENU.Setting, EN_MENU.Correction, EN_MENU.Alarm, EN_MENU.Monitor, EN_MENU.Pm] |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `AutoModeMenus` · L49–55

[Drilling.UI/CRootView.cs:49–55](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L49-L55)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlySet<Drilling.UI.Menu.Menus.EN_MENU> Drilling.UI.CRootView.AutoModeMenus |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Collections.Generic.IReadOnlySet<Drilling.UI.Menu.Menus.EN_MENU> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 49 | new HashSet<EN_MENU> | resolved | System.Collections.Generic.HashSet<Drilling.UI.Menu.Menus.EN_MENU>.HashSet() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 49 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<EN_MENU> { EN_MENU.Main, EN_MENU.Alarm, EN_MENU.Monitor, EN_MENU.Pm } |
| 49 | variable-initializer | 변수의 초기값을 지정합니다: AutoModeMenus = new HashSet<EN_MENU> { EN_MENU.Main, EN_MENU.Alarm, EN_MENU.Monitor, EN_MENU.Pm } |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `HeaderModules` · L56–66

[Drilling.UI/CRootView.cs:56–66](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L56-L66)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_EQP_MODULE> Drilling.UI.CRootView.HeaderModules |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.EN_EQP_MODULE> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 56 | variable-initializer | 변수의 초기값을 지정합니다: HeaderModules = [ EN_EQP_MODULE.Automation1, EN_EQP_MODULE.Vision, EN_EQP_MODULE.TalonLaser, EN_EQP_MODULE.Attenuator, EN_EQP_MODULE.Bet, EN_EQP_MODULE.PowerMeter, EN_EQP_MODULE.Motion, EN_EQP_MODULE.PicoMotor, EN_EQP_MODULE.Melse |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_stationManager` · L67–67

[Drilling.UI/CRootView.cs:67–67](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L67-L67)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Station.CStationManager Drilling.UI.CRootView._stationManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Station.CStationManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_manager` · L68–68

[Drilling.UI/CRootView.cs:68–68](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L68-L68)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.CManager Drilling.UI.CRootView._manager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Managers.CManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_interfaceManager` · L69–69

[Drilling.UI/CRootView.cs:69–69](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L69-L69)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.CInterfaceManager Drilling.UI.CRootView._interfaceManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Interface.CInterfaceManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_motionManager` · L70–70

[Drilling.UI/CRootView.cs:70–70](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L70-L70)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Motion.CMotionManager Drilling.UI.CRootView._motionManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Motion.CMotionManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_alarmManager` · L71–71

[Drilling.UI/CRootView.cs:71–71](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L71-L71)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Alarm.CAlarmManager Drilling.UI.CRootView._alarmManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Alarm.CAlarmManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_interLockManager` · L72–72

[Drilling.UI/CRootView.cs:72–72](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L72-L72)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.InterLock.CInterLockManager Drilling.UI.CRootView._interLockManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.InterLock.CInterLockManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_recipeManager` · L73–73

[Drilling.UI/CRootView.cs:73–73](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L73-L73)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.CRecipeManager Drilling.UI.CRootView._recipeManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Managers.CRecipeManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_productManager` · L74–74

[Drilling.UI/CRootView.cs:74–74](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L74-L74)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Product.CProductManager Drilling.UI.CRootView._productManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Product.CProductManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_reviewManager` · L75–75

[Drilling.UI/CRootView.cs:75–75](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L75-L75)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.CReviewManager Drilling.UI.CRootView._reviewManager |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Review.CReviewManager |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_menus` · L76–76

[Drilling.UI/CRootView.cs:76–76](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L76-L76)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase> Drilling.UI.CRootView._menus |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedHeaderModuleIndexes` · L77–77

[Drilling.UI/CRootView.cs:77–77](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L77-L77)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<Drilling.Common.Interface.EN_EQP_MODULE, int> Drilling.UI.CRootView._selectedHeaderModuleIndexes |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<Drilling.Common.Interface.EN_EQP_MODULE, int> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 77 | new | resolved | System.Collections.Generic.Dictionary<Drilling.Common.Interface.EN_EQP_MODULE, int>.Dictionary() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 77 | variable-initializer | 변수의 초기값을 지정합니다: _selectedHeaderModuleIndexes = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_processPreparationGate` · L78–78

[Drilling.UI/CRootView.cs:78–78](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L78-L78)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.SemaphoreSlim Drilling.UI.CRootView._processPreparationGate |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.SemaphoreSlim |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 78 | new | resolved | System.Threading.SemaphoreSlim.SemaphoreSlim(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 78 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(1, 1) |
| 78 | variable-initializer | 변수의 초기값을 지정합니다: _processPreparationGate = new(1, 1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_initialProcessModelCts` · L79–79

[Drilling.UI/CRootView.cs:79–79](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L79-L79)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.CancellationTokenSource Drilling.UI.CRootView._initialProcessModelCts |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.CancellationTokenSource |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 79 | new | resolved | System.Threading.CancellationTokenSource.CancellationTokenSource() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 79 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 79 | variable-initializer | 변수의 초기값을 지정합니다: _initialProcessModelCts = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_initialProcessModelTask` · L80–80

[Drilling.UI/CRootView.cs:80–80](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L80-L80)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView._initialProcessModelTask |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedMenu` · L81–81

[Drilling.UI/CRootView.cs:81–81](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L81-L81)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CMenuItem Drilling.UI.CRootView._selectedMenu |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CMenuItem |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_currentScreen` · L82–82

[Drilling.UI/CRootView.cs:82–82](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L82-L82)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView._currentScreen |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CScreenViewModel |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_systemStatus` · L83–83

[Drilling.UI/CRootView.cs:83–83](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L83-L83)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_SYSTEM_STATUS Drilling.UI.CRootView._systemStatus |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Managers.ST_SYSTEM_STATUS |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 83 | CreateFallbackST_SYSTEM_STATUS | resolved | Drilling.Common.Managers.ST_SYSTEM_STATUS Drilling.UI.CRootView.CreateFallbackST_SYSTEM_STATUS() · Drilling.UI/CRootView.cs:2342 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 83 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateFallbackST_SYSTEM_STATUS() |
| 83 | variable-initializer | 변수의 초기값을 지정합니다: _systemStatus = CreateFallbackST_SYSTEM_STATUS() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_interfaceCommStatuses` · L84–84

[Drilling.UI/CRootView.cs:84–84](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L84-L84)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.UI.CRootView._interfaceCommStatuses |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 84 | variable-initializer | 변수의 초기값을 지정합니다: _interfaceCommStatuses = [] |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_statusMessage` · L85–85

[Drilling.UI/CRootView.cs:85–85](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L85-L85)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._statusMessage |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 85 | variable-initializer | 변수의 초기값을 지정합니다: _statusMessage = "Simulation mode ready." |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_currentDateText` · L86–86

[Drilling.UI/CRootView.cs:86–86](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L86-L86)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._currentDateText |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 86 | DateTime.Now.ToString | resolved | string System.DateTime.ToString(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 86 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DateTime.Now.ToString("yyyy-MM-dd") |
| 86 | variable-initializer | 변수의 초기값을 지정합니다: _currentDateText = DateTime.Now.ToString("yyyy-MM-dd") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_currentTimeText` · L87–87

[Drilling.UI/CRootView.cs:87–87](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L87-L87)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._currentTimeText |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 87 | DateTime.Now.ToString | resolved | string System.DateTime.ToString(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 87 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DateTime.Now.ToString("HH:mm:ss") |
| 87 | variable-initializer | 변수의 초기값을 지정합니다: _currentTimeText = DateTime.Now.ToString("HH:mm:ss") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedHeadNo` · L88–88

[Drilling.UI/CRootView.cs:88–88](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L88-L88)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.CRootView._selectedHeadNo |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 88 | variable-initializer | 변수의 초기값을 지정합니다: _selectedHeadNo = 1 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedManualSettingName` · L89–89

[Drilling.UI/CRootView.cs:89–89](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L89-L89)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._selectedManualSettingName |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 89 | variable-initializer | 변수의 초기값을 지정합니다: _selectedManualSettingName = "CIRCLE_TEST.scan" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedRecipeId` · L90–90

[Drilling.UI/CRootView.cs:90–90](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L90-L90)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._selectedRecipeId |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 90 | variable-initializer | 변수의 초기값을 지정합니다: _selectedRecipeId = "" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_viewRecipeId` · L91–91

[Drilling.UI/CRootView.cs:91–91](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L91-L91)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._viewRecipeId |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 91 | variable-initializer | 변수의 초기값을 지정합니다: _viewRecipeId = "" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedRecipeCategory` · L92–92

[Drilling.UI/CRootView.cs:92–92](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L92-L92)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._selectedRecipeCategory |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 92 | variable-initializer | 변수의 초기값을 지정합니다: _selectedRecipeCategory = "ALL" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedSettingTab` · L93–93

[Drilling.UI/CRootView.cs:93–93](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L93-L93)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._selectedSettingTab |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 93 | variable-initializer | 변수의 초기값을 지정합니다: _selectedSettingTab = "OPTION" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedSettingGroup` · L94–94

[Drilling.UI/CRootView.cs:94–94](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L94-L94)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._selectedSettingGroup |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 94 | variable-initializer | 변수의 초기값을 지정합니다: _selectedSettingGroup = "ALL" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_selectedMonitorTab` · L95–95

[Drilling.UI/CRootView.cs:95–95](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L95-L95)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._selectedMonitorTab |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 95 | variable-initializer | 변수의 초기값을 지정합니다: _selectedMonitorTab = "PRODUCT" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_shiftOffsetX` · L96–96

[Drilling.UI/CRootView.cs:96–96](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L96-L96)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._shiftOffsetX |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 96 | variable-initializer | 변수의 초기값을 지정합니다: _shiftOffsetX = "0" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_shiftOffsetY` · L97–97

[Drilling.UI/CRootView.cs:97–97](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L97-L97)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._shiftOffsetY |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 97 | variable-initializer | 변수의 초기값을 지정합니다: _shiftOffsetY = "0" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_operationMode` · L98–98

[Drilling.UI/CRootView.cs:98–98](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L98-L98)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_SYSTEM_MODE Drilling.UI.CRootView._operationMode |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Managers.EN_SYSTEM_MODE |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 98 | variable-initializer | 변수의 초기값을 지정합니다: _operationMode = EN_SYSTEM_MODE.Manual |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_autoCycleState` · L99–99

[Drilling.UI/CRootView.cs:99–99](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L99-L99)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE Drilling.UI.CRootView._autoCycleState |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 99 | variable-initializer | 변수의 초기값을 지정합니다: _autoCycleState = EN_AUTO_CYCLE_STATE.Ready |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_autoCycleCts` · L100–100

[Drilling.UI/CRootView.cs:100–100](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L100-L100)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.CancellationTokenSource? Drilling.UI.CRootView._autoCycleCts |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.CancellationTokenSource? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_autoCycleCompletion` · L101–101

[Drilling.UI/CRootView.cs:101–101](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L101-L101)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.TaskCompletionSource<bool>? Drilling.UI.CRootView._autoCycleCompletion |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.TaskCompletionSource<bool>? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_currentTheme` · L102–102

[Drilling.UI/CRootView.cs:102–102](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L102-L102)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.EN_UI_THEME Drilling.UI.CRootView._currentTheme |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.EN_UI_THEME |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 102 | variable-initializer | 변수의 초기값을 지정합니다: _currentTheme = EN_UI_THEME.Light |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_statusRefreshRunning` · L103–103

[Drilling.UI/CRootView.cs:103–103](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L103-L103)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._statusRefreshRunning |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_screenRefreshRunning` · L104–104

[Drilling.UI/CRootView.cs:104–104](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L104-L104)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.CRootView._screenRefreshRunning |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_screenRefreshPending` · L105–105

[Drilling.UI/CRootView.cs:105–105](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L105-L105)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._screenRefreshPending |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_monitorLiveRefreshRunning` · L106–106

[Drilling.UI/CRootView.cs:106–106](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L106-L106)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._monitorLiveRefreshRunning |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_manualScannerStatusRefreshRunning` · L107–107

[Drilling.UI/CRootView.cs:107–107](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L107-L107)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._manualScannerStatusRefreshRunning |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_mainLiveRefreshRunning` · L108–108

[Drilling.UI/CRootView.cs:108–108](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L108-L108)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._mainLiveRefreshRunning |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_mainLiveStatusErrorActive` · L109–109

[Drilling.UI/CRootView.cs:109–109](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L109-L109)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView._mainLiveStatusErrorActive |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_mainLiveStatusRefreshCts` · L110–110

[Drilling.UI/CRootView.cs:110–110](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L110-L110)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.CancellationTokenSource? Drilling.UI.CRootView._mainLiveStatusRefreshCts |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.CancellationTokenSource? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastMonitorScreenRefreshTimestamp` · L111–111

[Drilling.UI/CRootView.cs:111–111](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L111-L111)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.UI.CRootView._lastMonitorScreenRefreshTimestamp |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastMonitorShellStatusRefreshTimestamp` · L112–112

[Drilling.UI/CRootView.cs:112–112](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L112-L112)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.UI.CRootView._lastMonitorShellStatusRefreshTimestamp |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastMainLiveStatusRefreshTimestamp` · L113–113

[Drilling.UI/CRootView.cs:113–113](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L113-L113)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.UI.CRootView._lastMainLiveStatusRefreshTimestamp |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastMainLiveStatusErrorReportTimestamp` · L114–114

[Drilling.UI/CRootView.cs:114–114](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L114-L114)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.UI.CRootView._lastMainLiveStatusErrorReportTimestamp |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastClockTickErrorReportTimestamp` · L115–115

[Drilling.UI/CRootView.cs:115–115](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L115-L115)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.UI.CRootView._lastClockTickErrorReportTimestamp |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastMainLiveStatusError` · L116–116

[Drilling.UI/CRootView.cs:116–116](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L116-L116)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._lastMainLiveStatusError |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 116 | variable-initializer | 변수의 초기값을 지정합니다: _lastMainLiveStatusError = "" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastClockTickError` · L117–117

[Drilling.UI/CRootView.cs:117–117](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L117-L117)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView._lastClockTickError |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 117 | variable-initializer | 변수의 초기값을 지정합니다: _lastClockTickError = "" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_pmLockStatus` · L118–118

[Drilling.UI/CRootView.cs:118–118](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L118-L118)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_PM_LOCK_STATUS Drilling.UI.CRootView._pmLockStatus |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Managers.ST_PM_LOCK_STATUS |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 118 | new | resolved | Drilling.Common.Managers.ST_PM_LOCK_STATUS.ST_PM_LOCK_STATUS(bool, System.DateTimeOffset?) · Drilling.Common/Managers/CManager.cs:762 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 118 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(false, null) |
| 118 | variable-initializer | 변수의 초기값을 지정합니다: _pmLockStatus = new(false, null) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `AutoCycleStopTimeout` · L119–119

[Drilling.UI/CRootView.cs:119–119](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L119-L119)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.TimeSpan Drilling.UI.CRootView.AutoCycleStopTimeout |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.TimeSpan |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 119 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 119 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(10) |
| 119 | variable-initializer | 변수의 초기값을 지정합니다: AutoCycleStopTimeout = TimeSpan.FromSeconds(10) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_protectWindowNotice` · L120–120

[Drilling.UI/CRootView.cs:120–120](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L120-L120)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Popup.CProtectWindowRequestNotice? Drilling.UI.CRootView._protectWindowNotice |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Popup.CProtectWindowRequestNotice? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_autoFineReview` · L121–121

[Drilling.UI/CRootView.cs:121–121](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L121-L121)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.CAutoFineReviewCoordinator? Drilling.UI.CRootView._autoFineReview |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Review.CAutoFineReviewCoordinator? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_autoDistortion` · L122–122

[Drilling.UI/CRootView.cs:122–122](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L122-L122)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.CAlignDistortionCycle? Drilling.UI.CRootView._autoDistortion |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Correction.CAlignDistortionCycle? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_stageSimulationDialog` · L123–123

[Drilling.UI/CRootView.cs:123–123](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L123-L123)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Popup.CMelsecStageSimulationDialog? Drilling.UI.CRootView._stageSimulationDialog |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Popup.CMelsecStageSimulationDialog? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `MelsecSimulatorVisibilityChanged` · L124–124

[Drilling.UI/CRootView.cs:124–124](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L124-L124)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.EventHandler? Drilling.UI.CRootView.MelsecSimulatorVisibilityChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.EventHandler? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastSimulatorVisibility` · L125–125

[Drilling.UI/CRootView.cs:125–125](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L125-L125)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Visibility? Drilling.UI.CRootView._lastSimulatorVisibility |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Visibility? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L128–236

[Drilling.UI/CRootView.cs:128–236](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L128-L236)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.CRootView.CRootView(Drilling.Common.Managers.CManager, Drilling.Common.Station.CStationManager, Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Motion.CMotionManager, Drilling.Common.Alarm.CAlarmManager, Drilling.Common.InterLock.CInterLockManager, Drilling.Common.Managers.CManualScanFileBase, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Managers.CSettingManager, Drilling.Common.Product.CProductManager, Drilling.Common.Review.CReviewManager, Drilling.Common.Station.CAutomationScriptFileBase) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| manager | Drilling.Common.Managers.CManager | None | False /  |
| stationManager | Drilling.Common.Station.CStationManager | None | False /  |
| interfaceManager | Drilling.Common.Interface.CInterfaceManager | None | False /  |
| motionManager | Drilling.Common.Motion.CMotionManager | None | False /  |
| alarmManager | Drilling.Common.Alarm.CAlarmManager | None | False /  |
| interLockManager | Drilling.Common.InterLock.CInterLockManager | None | False /  |
| manualScanFile | Drilling.Common.Managers.CManualScanFileBase | None | False /  |
| recipeManager | Drilling.Common.Managers.CRecipeManager | None | False /  |
| settingManager | Drilling.Common.Managers.CSettingManager | None | False /  |
| productManager | Drilling.Common.Product.CProductManager | None | False /  |
| reviewManager | Drilling.Common.Review.CReviewManager | None | False /  |
| automationScriptFile | Drilling.Common.Station.CAutomationScriptFileBase | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CAppStartup.cs:53–66](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CAppStartup.cs#L53-L66) | new CRootView | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 152 | NormalizeRecipeId | resolved | string Drilling.UI.CRootView.NormalizeRecipeId(string) · Drilling.UI/CRootView.cs:2305 |
| 152 | settingManager.GetValue | resolved | string Drilling.Common.Managers.CSettingManager.GetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:59 |
| 153 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 159 | CThemeManager.Apply | resolved | void Drilling.UI.CThemeManager.Apply(Drilling.UI.EN_UI_THEME) · Drilling.UI/CThemeManager.cs:10 |
| 165 | new ObservableCollection<CMenuItem> | resolved | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.CMenuItem>.ObservableCollection(System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuItem>) |
| 165 | OperatorMenus.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuItem> System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.EN_MENU>.Select<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuItem>(System.Func<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuItem>) |
| 167 | ApplyMenuAccessForOperationMode | resolved | void Drilling.UI.CRootView.ApplyMenuAccessForOperationMode() · Drilling.UI/CRootView.cs:710 |
| 168 | new ObservableCollection<ST_HEADER_STATUS_ITEM> | resolved | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.ObservableCollection() |
| 169 | new ObservableCollection<ST_HEADER_STATUS_ITEM> | resolved | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.ObservableCollection() |
| 170 | new ObservableCollection<ST_HEADER_STATUS_ITEM> | resolved | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.ObservableCollection() |
| 171 | new ObservableCollection<ST_HEADER_STATUS_ITEM> | resolved | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.ObservableCollection() |
| 172 | CreateLoadingScreen | resolved | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CreateLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) · Drilling.UI/CRootView.cs:2265 |
| 183 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 194 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 205 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 211 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 212 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 212 | OpenMelsecStageSimulation | resolved | void Drilling.UI.CRootView.OpenMelsecStageSimulation() · Drilling.UI/CRootView.cs:2917 |
| 223 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 228 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 228 | nameof | unresolved | None |
| 229 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |
| 230 | CreateMenus | resolved | System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase> Drilling.UI.CRootView.CreateMenus(Drilling.Common.Station.CStationManager, Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Motion.CMotionManager, Drilling.Common.Alarm.CAlarmManager, Drilling.Common.InterLock.CInterLockManager, Drilling.Common.Managers.CManualScanFileBase, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Managers.CSettingManager, Drilling.Common.Product.CProductManager, Drilling.Common.Review.CReviewManager, Drilling.Common.Station.CAutomationScriptFileBase) · Drilling.UI/CRootView.cs:1969 |
| 231 | _menus[_selectedMenu.Menu].OnActivated | resolved · 동적 구현 선택 가능 | void Drilling.UI.Menu.Menus.CMenuBase.OnActivated() · Drilling.UI/Menu/Menus/CMenuBase.cs:20 |
| 233 | OnCurrentAlarmsChanged | resolved | void Drilling.UI.CRootView.OnCurrentAlarmsChanged() · Drilling.UI/CRootView.cs:2730 |
| 234 | StartClock | resolved | void Drilling.UI.CRootView.StartClock() · Drilling.UI/CRootView.cs:1913 |
| 235 | InitializeProcessModel | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.InitializeProcessModel(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1231 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 143 | assignment | 값을 대상에 대입합니다: _manager = manager |
| 144 | assignment | 값을 대상에 대입합니다: _stationManager = stationManager |
| 145 | assignment | 값을 대상에 대입합니다: _interfaceManager = interfaceManager |
| 146 | assignment | 값을 대상에 대입합니다: _motionManager = motionManager |
| 147 | assignment | 값을 대상에 대입합니다: _alarmManager = alarmManager |
| 148 | assignment | 값을 대상에 대입합니다: _interLockManager = interLockManager |
| 149 | assignment | 값을 대상에 대입합니다: _recipeManager = recipeManager |
| 150 | assignment | 값을 대상에 대입합니다: _productManager = productManager |
| 151 | assignment | 값을 대상에 대입합니다: _reviewManager = reviewManager |
| 152 | assignment | 값을 대상에 대입합니다: _selectedRecipeId = NormalizeRecipeId(settingManager.GetValue(EN_SETTING_TAB.Option, SelectRecipeSettingKey, DefaultRecipeId)) |
| 152 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeRecipeId(settingManager.GetValue(EN_SETTING_TAB.Option, SelectRecipeSettingKey, DefaultRecipeId)) |
| 152 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settingManager.GetValue(EN_SETTING_TAB.Option, SelectRecipeSettingKey, DefaultRecipeId) |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) |
| 153 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(_selectedRecipeId)) |
| 155 | assignment | 값을 대상에 대입합니다: _selectedRecipeId = DefaultRecipeId |
| 158 | assignment | 값을 대상에 대입합니다: _viewRecipeId = _selectedRecipeId |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CThemeManager.Apply(_currentTheme) |
| 165 | assignment | 값을 대상에 대입합니다: Menus = new ObservableCollection<CMenuItem>(OperatorMenus.Select(BuildCMenuItem)) |
| 165 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ObservableCollection<CMenuItem>(OperatorMenus.Select(BuildCMenuItem)) |
| 165 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OperatorMenus.Select(BuildCMenuItem) |
| 166 | assignment | 값을 대상에 대입합니다: _selectedMenu = Menus[0] |
| 167 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ApplyMenuAccessForOperationMode() |
| 168 | assignment | 값을 대상에 대입합니다: HeaderStatusItems = new ObservableCollection<ST_HEADER_STATUS_ITEM>() |
| 168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ObservableCollection<ST_HEADER_STATUS_ITEM>() |
| 169 | assignment | 값을 대상에 대입합니다: HeaderContextStatusItems = new ObservableCollection<ST_HEADER_STATUS_ITEM>() |
| 169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ObservableCollection<ST_HEADER_STATUS_ITEM>() |
| 170 | assignment | 값을 대상에 대입합니다: HeaderCommunicationStatusItems = new ObservableCollection<ST_HEADER_STATUS_ITEM>() |
| 170 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ObservableCollection<ST_HEADER_STATUS_ITEM>() |
| 171 | assignment | 값을 대상에 대입합니다: FooterStatusItems = new ObservableCollection<ST_HEADER_STATUS_ITEM>() |
| 171 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ObservableCollection<ST_HEADER_STATUS_ITEM>() |
| 172 | assignment | 값을 대상에 대입합니다: _currentScreen = CreateLoadingScreen(EN_MENU.Main, "MAIN") |
| 172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateLoadingScreen(EN_MENU.Main, "MAIN") |
| 183 | assignment | 값을 대상에 대입합니다: StartCommand = new CButtonCommand(StartCallback, CanExecuteStartCommand) |
| 183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(StartCallback, CanExecuteStartCommand) |
| 194 | assignment | 값을 대상에 대입합니다: StopCommand = new CButtonCommand(StopCallback, CanExecuteStopCommand) |
| 194 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(StopCallback, CanExecuteStopCommand) |
| 205 | assignment | 값을 대상에 대입합니다: SelectHeadCommand = new CButtonCommand(SelectHeadCallback, CanExecuteSelectHeadCommand) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(SelectHeadCallback, CanExecuteSelectHeadCommand) |
| 211 | assignment | 값을 대상에 대입합니다: ToggleThemeCommand = new CButtonCommand(ToggleThemeCallback) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(ToggleThemeCallback) |
| 212 | assignment | 값을 대상에 대입합니다: OpenMelsecStageSimulationCommand = new CButtonCommand(_ => OpenMelsecStageSimulation()) |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(_ => OpenMelsecStageSimulation()) |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OpenMelsecStageSimulation() |
| 223 | assignment | 값을 대상에 대입합니다: ToggleOperationModeCommand = new CButtonCommand(ToggleOperationModeCallback, CanExecuteToggleOperationModeCommand) |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(ToggleOperationModeCallback, CanExecuteToggleOperationModeCommand) |
| 224 | assignment | 값을 대상에 대입합니다: _systemStatus = _systemStatus with { OperationMode = _operationMode } |
| 226 | assignment | 값을 대상에 대입합니다: OperationMode = _operationMode |
| 228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(IsManualShiftOffsetVisible)) |
| 228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(IsManualShiftOffsetVisible) |
| 229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 230 | assignment | 값을 대상에 대입합니다: _menus = CreateMenus(stationManager, interfaceManager, motionManager, alarmManager, interLockManager, manualScanFile, recipeManager, settingManager, productManager, reviewManager, automationScriptFile) |
| 230 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMenus(stationManager, interfaceManager, motionManager, alarmManager, interLockManager, manualScanFile, recipeManager, settingManager, productManager, reviewManager, automationScriptFile) |
| 231 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus[_selectedMenu.Menu].OnActivated() |
| 232 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: _alarmManager.CurrentChanged += OnCurrentAlarmsChanged |
| 233 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnCurrentAlarmsChanged() |
| 234 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StartClock() |
| 235 | assignment | 값을 대상에 대입합니다: _initialProcessModelTask = InitializeProcessModel(_initialProcessModelCts.Token) |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: InitializeProcessModel(_initialProcessModelCts.Token) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M[".ctor"]
 N0["L153 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `BuildCMenuItem` · L160–163

[Drilling.UI/CRootView.cs:160–163](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L160-L163)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CMenuItem BuildCMenuItem(Drilling.UI.Menu.Menus.EN_MENU) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CMenuItem |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 162 | new CMenuItem | resolved | Drilling.UI.Menu.Menus.CMenuItem.CMenuItem(Drilling.UI.Menu.Menus.EN_MENU, string) · Drilling.UI/Menu/Menus/CMenuBase.cs:526 |
| 162 | GetMenuDisplayName | resolved | string Drilling.UI.CRootView.GetMenuDisplayName(Drilling.UI.Menu.Menus.EN_MENU) · Drilling.UI/CRootView.cs:2551 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 162 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuItem(menu, GetMenuDisplayName(menu)) |
| 162 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetMenuDisplayName(menu) |
| 162 | return | 호출자에게 값 또는 제어를 반환합니다: return new CMenuItem(menu, GetMenuDisplayName(menu)); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `StartCallback` · L173–176

[Drilling.UI/CRootView.cs:173–176](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L173-L176)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void StartCallback(object?) |
| 접근/수식자 | Private / async |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 175 | StartCycle | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.StartCycle() · Drilling.UI/CRootView.cs:1592 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 175 | await | 비동기 완료를 기다립니다: await StartCycle() |
| 175 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StartCycle() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `CanExecuteStartCommand` · L178–181

[Drilling.UI/CRootView.cs:178–181](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L178-L181)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool CanExecuteStartCommand(object?) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 180 | CanStartAutoCycle | resolved | bool Drilling.UI.CRootView.CanStartAutoCycle() · Drilling.UI/CRootView.cs:466 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 180 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CanStartAutoCycle() |
| 180 | return | 호출자에게 값 또는 제어를 반환합니다: return SelectedMenu.Menu == EN_MENU.Main && CanStartAutoCycle(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `StopCallback` · L184–187

[Drilling.UI/CRootView.cs:184–187](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L184-L187)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void StopCallback(object?) |
| 접근/수식자 | Private / async |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 186 | StopCycle | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.StopCycle() · Drilling.UI/CRootView.cs:1695 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 186 | await | 비동기 완료를 기다립니다: await StopCycle() |
| 186 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopCycle() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `CanExecuteStopCommand` · L189–192

[Drilling.UI/CRootView.cs:189–192](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L189-L192)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool CanExecuteStopCommand(object?) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 191 | CanStopAutoCycle | resolved | bool Drilling.UI.CRootView.CanStopAutoCycle() · Drilling.UI/CRootView.cs:471 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 191 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CanStopAutoCycle() |
| 191 | return | 호출자에게 값 또는 제어를 반환합니다: return SelectedMenu.Menu == EN_MENU.Main && CanStopAutoCycle(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectHeadCallback` · L195–198

[Drilling.UI/CRootView.cs:195–198](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L195-L198)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SelectHeadCallback(object?) |
| 접근/수식자 | Private / async |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 197 | SelectHead | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.SelectHead(object?) · Drilling.UI/CRootView.cs:1855 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 197 | await | 비동기 완료를 기다립니다: await SelectHead(parameter) |
| 197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SelectHead(parameter) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `CanExecuteSelectHeadCommand` · L200–203

[Drilling.UI/CRootView.cs:200–203](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L200-L203)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool CanExecuteSelectHeadCommand(object?) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 202 | CanSelectHeadParameter | resolved | bool Drilling.UI.CRootView.CanSelectHeadParameter(object?) · Drilling.UI/CRootView.cs:1883 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CanSelectHeadParameter(parameter) |
| 202 | return | 호출자에게 값 또는 제어를 반환합니다: return CanSelectHead && (parameter is null &#124;&#124; CanSelectHeadParameter(parameter)); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ToggleThemeCallback` · L206–209

[Drilling.UI/CRootView.cs:206–209](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L206-L209)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void ToggleThemeCallback(object?) |
| 접근/수식자 | Private / async |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 208 | ToggleTheme | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.ToggleTheme() · Drilling.UI/CRootView.cs:574 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 208 | await | 비동기 완료를 기다립니다: await ToggleTheme() |
| 208 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ToggleTheme() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ToggleOperationModeCallback` · L213–216

[Drilling.UI/CRootView.cs:213–216](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L213-L216)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void ToggleOperationModeCallback(object?) |
| 접근/수식자 | Private / async |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 215 | ToggleOperationMode | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.ToggleOperationMode(System.Func<string, string, bool>?, System.Action<string, string>?) · Drilling.UI/CRootView.cs:584 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 215 | await | 비동기 완료를 기다립니다: await ToggleOperationMode() |
| 215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ToggleOperationMode() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `CanExecuteToggleOperationModeCommand` · L218–221

[Drilling.UI/CRootView.cs:218–221](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L218-L221)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool CanExecuteToggleOperationModeCommand(object?) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 220 | return | 호출자에게 값 또는 제어를 반환합니다: return _autoCycleState == EN_AUTO_CYCLE_STATE.Ready; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Ready` · L242–242

[Drilling.UI/CRootView.cs:242–242](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L242-L242)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE.Ready |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |
| 소속 타입 | NamedType:Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Preparing` · L243–243

[Drilling.UI/CRootView.cs:243–243](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L243-L243)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE.Preparing |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |
| 소속 타입 | NamedType:Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Running` · L244–244

[Drilling.UI/CRootView.cs:244–244](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L244-L244)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE.Running |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |
| 소속 타입 | NamedType:Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Stopping` · L245–245

[Drilling.UI/CRootView.cs:245–245](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L245-L245)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE.Stopping |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |
| 소속 타입 | NamedType:Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StopAutomationStatusAcquisition` · L248–255

[Drilling.UI/CRootView.cs:248–255](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L248-L255)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.StopAutomationStatusAcquisition() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CApp.xaml.cs:49–49](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CApp.xaml.cs#L49-L49) | .StopAutomationStatusAcquisition | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 250 | .Dispose | resolved | void Drilling.UI.Popup.CProtectWindowRequestNotice.Dispose() · Drilling.UI/Popup/CProtectWindowRequestDialog.xaml.cs:110 |
| 251 | .Close | unresolved | None |
| 252 | .Close | unresolved | None |
| 254 | _manager.StopBackgroundMonitoring().GetAwaiter().GetResult | resolved | void System.Runtime.CompilerServices.TaskAwaiter.GetResult() |
| 254 | _manager.StopBackgroundMonitoring().GetAwaiter | resolved | System.Runtime.CompilerServices.TaskAwaiter System.Threading.Tasks.Task.GetAwaiter() |
| 254 | _manager.StopBackgroundMonitoring | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CManager.StopBackgroundMonitoring() · Drilling.Common/Managers/CManager.cs:278 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 250 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Dispose() |
| 251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Close() |
| 252 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Close() |
| 253 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: _alarmManager.CurrentChanged -= OnCurrentAlarmsChanged |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.StopBackgroundMonitoring().GetAwaiter().GetResult() |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.StopBackgroundMonitoring().GetAwaiter() |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.StopBackgroundMonitoring() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Menus` · L257–257

[Drilling.UI/CRootView.cs:257–257](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L257-L257)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.CMenuItem> Drilling.UI.CRootView.Menus |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.CMenuItem> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Menus` · L257–257

[Drilling.UI/CRootView.cs:257–257](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L257-L257)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.CMenuItem> Drilling.UI.CRootView.Menus.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.CMenuItem> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `HeaderStatusItems` · L258–258

[Drilling.UI/CRootView.cs:258–258](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L258-L258)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderStatusItems |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_HeaderStatusItems` · L258–258

[Drilling.UI/CRootView.cs:258–258](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L258-L258)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderStatusItems.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `HeaderContextStatusItems` · L259–259

[Drilling.UI/CRootView.cs:259–259](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L259-L259)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderContextStatusItems |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_HeaderContextStatusItems` · L259–259

[Drilling.UI/CRootView.cs:259–259](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L259-L259)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderContextStatusItems.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `HeaderCommunicationStatusItems` · L260–260

[Drilling.UI/CRootView.cs:260–260](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L260-L260)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderCommunicationStatusItems |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_HeaderCommunicationStatusItems` · L260–260

[Drilling.UI/CRootView.cs:260–260](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L260-L260)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.HeaderCommunicationStatusItems.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `FooterStatusItems` · L261–261

[Drilling.UI/CRootView.cs:261–261](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L261-L261)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.FooterStatusItems |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_FooterStatusItems` · L261–261

[Drilling.UI/CRootView.cs:261–261](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L261-L261)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.FooterStatusItems.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `SelectedMenu` · L263–332

[Drilling.UI/CRootView.cs:263–332](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L263-L332)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CMenuItem Drilling.UI.CRootView.SelectedMenu |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CMenuItem |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_SelectedMenu` · L265–268

[Drilling.UI/CRootView.cs:265–268](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L265-L268)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CMenuItem Drilling.UI.CRootView.SelectedMenu.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CMenuItem |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 267 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedMenu; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_SelectedMenu` · L270–331

[Drilling.UI/CRootView.cs:270–331](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L270-L331)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.SelectedMenu.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Drilling.UI.Menu.Menus.CMenuItem | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 272 | IsReviewNavigationLocked | resolved | bool Drilling.UI.CRootView.IsReviewNavigationLocked(Drilling.UI.Menu.Menus.EN_MENU) · Drilling.UI/CRootView.cs:694 |
| 275 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 275 | nameof | unresolved | None |
| 276 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 280 | CanAccessMenu | resolved | bool Drilling.UI.CRootView.CanAccessMenu(Drilling.UI.Menu.Menus.EN_MENU) · Drilling.UI/CRootView.cs:684 |
| 285 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 288 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 288 | nameof | unresolved | None |
| 293 | SetProperty | resolved | bool Drilling.UI.Menu.CBindingBase.SetProperty<Drilling.UI.Menu.Menus.CMenuItem>(ref Drilling.UI.Menu.Menus.CMenuItem, Drilling.UI.Menu.Menus.CMenuItem, string?) · Drilling.UI/Menu/CBindingBase.cs:760 |
| 298 | CUiLogService.WriteClick | resolved | void Drilling.UI.CUiLogService.WriteClick(string, string, string, string) · Drilling.UI/CUiLogService.cs:33 |
| 301 | CancelMainLiveStatusRefresh | resolved | void Drilling.UI.CRootView.CancelMainLiveStatusRefresh() · Drilling.UI/CRootView.cs:901 |
| 302 | QueueMainScannerStatusPollingStop | resolved | void Drilling.UI.CRootView.QueueMainScannerStatusPollingStop() · Drilling.UI/CRootView.cs:923 |
| 307 | QueueManualScannerStatusPollingStop | resolved | void Drilling.UI.CRootView.QueueManualScannerStatusPollingStop() · Drilling.UI/CRootView.cs:950 |
| 310 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 312 | previousMenuViewModel.OnDeactivated | resolved · 동적 구현 선택 가능 | void Drilling.UI.Menu.Menus.CMenuBase.OnDeactivated() · Drilling.UI/Menu/Menus/CMenuBase.cs:24 |
| 315 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 317 | selectedMenuViewModel.OnActivated | resolved · 동적 구현 선택 가능 | void Drilling.UI.Menu.Menus.CMenuBase.OnActivated() · Drilling.UI/Menu/Menus/CMenuBase.cs:20 |
| 320 | ResetMenuStateOnOpen | resolved | void Drilling.UI.CRootView.ResetMenuStateOnOpen(Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.EN_MENU) · Drilling.UI/CRootView.cs:542 |
| 321 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 323 | monitor.SetPollingActive | resolved | void Drilling.UI.Menu.Menus.CMenuMonitor.SetPollingActive(bool) · Drilling.UI/Menu/Menus/CMenuMonitor.cs:720 |
| 326 | StartCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 327 | StopCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 328 | SelectHeadCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 329 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |
| 330 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsReviewNavigationLocked(value.Menu) |
| 272 | if | 조건에 따라 분기합니다: if (!_isAlarmNavigation && value is not null && IsReviewNavigationLocked(value.Menu)) |
| 274 | assignment | 값을 대상에 대입합니다: StatusMessage = "Review is running. Stop the current Review before changing the menu." |
| 275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(SelectedMenu)) |
| 275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(SelectedMenu) |
| 276 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("검사 진행 중", "검사를 중지한 후 이동해 주세요.") |
| 277 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 280 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CanAccessMenu(value.Menu) |
| 280 | if | 조건에 따라 분기합니다: if (value is null &#124;&#124; !CanAccessMenu(value.Menu)) |
| 282 | if | 조건에 따라 분기합니다: if (value is not null) |
| 284 | assignment | 값을 대상에 대입합니다: StatusMessage = $"{value.Name} menu is available in MANUAL mode only." |
| 285 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("메뉴 진입 불가", "Manual Mode에서만 진입 가능합니다.") |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(SelectedMenu)) |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(SelectedMenu) |
| 289 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 292 | local-declaration | 지역 변수를 선언합니다: var previousMenu = _selectedMenu.Menu; |
| 292 | variable-initializer | 변수의 초기값을 지정합니다: previousMenu = _selectedMenu.Menu |
| 293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetProperty(ref _selectedMenu, value) |
| 293 | if | 조건에 따라 분기합니다: if (!SetProperty(ref _selectedMenu, value)) |
| 295 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CUiLogService.WriteClick("CRootView", "MENU_SELECT", value.Name, $"{previousMenu} -> {value.Menu}") |
| 299 | if | 조건에 따라 분기합니다: if (previousMenu == EN_MENU.Main && value.Menu != EN_MENU.Main) |
| 301 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CancelMainLiveStatusRefresh() |
| 302 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueMainScannerStatusPollingStop() |
| 305 | if | 조건에 따라 분기합니다: if (previousMenu == EN_MENU.Manual && value.Menu != EN_MENU.Manual) |
| 307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueManualScannerStatusPollingStop() |
| 310 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(previousMenu, out var previousMenuViewModel) |
| 310 | if | 조건에 따라 분기합니다: if (_menus.TryGetValue(previousMenu, out var previousMenuViewModel)) |
| 312 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: previousMenuViewModel.OnDeactivated() |
| 315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(value.Menu, out var selectedMenuViewModel) |
| 315 | if | 조건에 따라 분기합니다: if (_menus.TryGetValue(value.Menu, out var selectedMenuViewModel)) |
| 317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selectedMenuViewModel.OnActivated() |
| 320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResetMenuStateOnOpen(previousMenu, value.Menu) |
| 321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(EN_MENU.Monitor, out var monitorMenu) |
| 321 | if | 조건에 따라 분기합니다: if (_menus.TryGetValue(EN_MENU.Monitor, out var monitorMenu) && monitorMenu is CMenuMonitor monitor) |
| 323 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: monitor.SetPollingActive(value.Menu == EN_MENU.Monitor) |
| 326 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StartCommand.NotifyCanExecuteChanged() |
| 327 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopCommand.NotifyCanExecuteChanged() |
| 328 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SelectHeadCommand.NotifyCanExecuteChanged() |
| 329 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 330 | assignment | 값을 대상에 대입합니다: _ = RefreshCurrentScreen() |
| 330 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["set_SelectedMenu"]
 N0["L272 if"]
 M -->|포함| N0
 N1["L280 if"]
 M -->|포함| N1
 N2["L282 if"]
 N1 -->|포함| N2
 N3["L293 if"]
 M -->|포함| N3
 N4["L299 if"]
 M -->|포함| N4
 N5["L305 if"]
 M -->|포함| N5
 N6["L310 if"]
 M -->|포함| N6
 N7["L315 if"]
 M -->|포함| N7
 N8["L321 if"]
 M -->|포함| N8
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CurrentScreen` · L334–345

[Drilling.UI/CRootView.cs:334–345](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L334-L345)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CurrentScreen |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CScreenViewModel |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CurrentScreen` · L336–339

[Drilling.UI/CRootView.cs:336–339](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L336-L339)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CurrentScreen.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CScreenViewModel |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 338 | return | 호출자에게 값 또는 제어를 반환합니다: return _currentScreen; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_CurrentScreen` · L341–344

[Drilling.UI/CRootView.cs:341–344](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L341-L344)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.CurrentScreen.set |
| 접근/수식자 | Private / private, set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Drilling.UI.Menu.Menus.CScreenViewModel | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 343 | SetProperty | resolved | bool Drilling.UI.Menu.CBindingBase.SetProperty<Drilling.UI.Menu.Menus.CScreenViewModel>(ref Drilling.UI.Menu.Menus.CScreenViewModel, Drilling.UI.Menu.Menus.CScreenViewModel, string?) · Drilling.UI/Menu/CBindingBase.cs:760 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 343 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetProperty(ref _currentScreen, value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `StatusMessage` · L347–358

[Drilling.UI/CRootView.cs:347–358](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L347-L358)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.StatusMessage |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_StatusMessage` · L349–352

[Drilling.UI/CRootView.cs:349–352](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L349-L352)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.StatusMessage.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 351 | return | 호출자에게 값 또는 제어를 반환합니다: return _statusMessage; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_StatusMessage` · L354–357

[Drilling.UI/CRootView.cs:354–357](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L354-L357)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.StatusMessage.set |
| 접근/수식자 | Private / private, set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 356 | SetProperty | resolved | bool Drilling.UI.Menu.CBindingBase.SetProperty<string>(ref string, string, string?) · Drilling.UI/Menu/CBindingBase.cs:760 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 356 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetProperty(ref _statusMessage, value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CurrentDateText` · L360–371

[Drilling.UI/CRootView.cs:360–371](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L360-L371)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.CurrentDateText |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CurrentDateText` · L362–365

[Drilling.UI/CRootView.cs:362–365](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L362-L365)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.CurrentDateText.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 364 | return | 호출자에게 값 또는 제어를 반환합니다: return _currentDateText; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_CurrentDateText` · L367–370

[Drilling.UI/CRootView.cs:367–370](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L367-L370)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.CurrentDateText.set |
| 접근/수식자 | Private / private, set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 369 | SetProperty | resolved | bool Drilling.UI.Menu.CBindingBase.SetProperty<string>(ref string, string, string?) · Drilling.UI/Menu/CBindingBase.cs:760 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 369 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetProperty(ref _currentDateText, value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CurrentTimeText` · L373–384

[Drilling.UI/CRootView.cs:373–384](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L373-L384)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.CurrentTimeText |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CurrentTimeText` · L375–378

[Drilling.UI/CRootView.cs:375–378](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L375-L378)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.CurrentTimeText.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 377 | return | 호출자에게 값 또는 제어를 반환합니다: return _currentTimeText; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_CurrentTimeText` · L380–383

[Drilling.UI/CRootView.cs:380–383](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L380-L383)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.CurrentTimeText.set |
| 접근/수식자 | Private / private, set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 382 | SetProperty | resolved | bool Drilling.UI.Menu.CBindingBase.SetProperty<string>(ref string, string, string?) · Drilling.UI/Menu/CBindingBase.cs:760 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 382 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetProperty(ref _currentTimeText, value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CurrentUserText` · L386–392

[Drilling.UI/CRootView.cs:386–392](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L386-L392)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.CurrentUserText |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CurrentUserText` · L388–391

[Drilling.UI/CRootView.cs:388–391](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L388-L391)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.CurrentUserText.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 390 | conditional-expression | 조건에 따라 결과식을 선택합니다: _interfaceManager.IsSimulation && _motionManager.IsSimulation ? "Engineer / Simulation" : "Engineer / Live" |
| 390 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.IsSimulation && _motionManager.IsSimulation ? "Engineer / Simulation" : "Engineer / Live"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ThemeToggleText` · L394–400

[Drilling.UI/CRootView.cs:394–400](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L394-L400)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ThemeToggleText |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ThemeToggleText` · L396–399

[Drilling.UI/CRootView.cs:396–399](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L396-L399)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ThemeToggleText.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 398 | conditional-expression | 조건에 따라 결과식을 선택합니다: _currentTheme == EN_UI_THEME.Light ? "LIGHT MODE" : "DARK MODE" |
| 398 | return | 호출자에게 값 또는 제어를 반환합니다: return _currentTheme == EN_UI_THEME.Light ? "LIGHT MODE" : "DARK MODE"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ThemeModeText` · L402–408

[Drilling.UI/CRootView.cs:402–408](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L402-L408)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ThemeModeText |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ThemeModeText` · L404–407

[Drilling.UI/CRootView.cs:404–407](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L404-L407)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ThemeModeText.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 406 | conditional-expression | 조건에 따라 결과식을 선택합니다: _currentTheme == EN_UI_THEME.Light ? "Light Theme" : "Dark Theme" |
| 406 | return | 호출자에게 값 또는 제어를 반환합니다: return _currentTheme == EN_UI_THEME.Light ? "Light Theme" : "Dark Theme"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `StartCommand` · L410–410

[Drilling.UI/CRootView.cs:410–410](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L410-L410)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.StartCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_StartCommand` · L410–410

[Drilling.UI/CRootView.cs:410–410](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L410-L410)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.StartCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `StopCommand` · L411–411

[Drilling.UI/CRootView.cs:411–411](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L411-L411)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.StopCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_StopCommand` · L411–411

[Drilling.UI/CRootView.cs:411–411](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L411-L411)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.StopCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `SelectHeadCommand` · L412–412

[Drilling.UI/CRootView.cs:412–412](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L412-L412)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.SelectHeadCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_SelectHeadCommand` · L412–412

[Drilling.UI/CRootView.cs:412–412](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L412-L412)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.SelectHeadCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ToggleThemeCommand` · L413–413

[Drilling.UI/CRootView.cs:413–413](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L413-L413)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.ToggleThemeCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ToggleThemeCommand` · L413–413

[Drilling.UI/CRootView.cs:413–413](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L413-L413)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.ToggleThemeCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ToggleOperationModeCommand` · L414–414

[Drilling.UI/CRootView.cs:414–414](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L414-L414)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.ToggleOperationModeCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ToggleOperationModeCommand` · L414–414

[Drilling.UI/CRootView.cs:414–414](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L414-L414)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.ToggleOperationModeCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ShiftOffsetX` · L416–427

[Drilling.UI/CRootView.cs:416–427](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L416-L427)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ShiftOffsetX |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ShiftOffsetX` · L418–421

[Drilling.UI/CRootView.cs:418–421](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L418-L421)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ShiftOffsetX.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 420 | return | 호출자에게 값 또는 제어를 반환합니다: return _shiftOffsetX; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_ShiftOffsetX` · L423–426

[Drilling.UI/CRootView.cs:423–426](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L423-L426)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ShiftOffsetX.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 425 | SetProperty | resolved | bool Drilling.UI.Menu.CBindingBase.SetProperty<string>(ref string, string, string?) · Drilling.UI/Menu/CBindingBase.cs:760 |
| 425 | NormalizeShiftOffsetText | resolved | string Drilling.UI.CRootView.NormalizeShiftOffsetText(string?) · Drilling.UI/CRootView.cs:1582 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetProperty(ref _shiftOffsetX, NormalizeShiftOffsetText(value)) |
| 425 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeShiftOffsetText(value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ShiftOffsetY` · L429–440

[Drilling.UI/CRootView.cs:429–440](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L429-L440)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ShiftOffsetY |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ShiftOffsetY` · L431–434

[Drilling.UI/CRootView.cs:431–434](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L431-L434)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ShiftOffsetY.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 433 | return | 호출자에게 값 또는 제어를 반환합니다: return _shiftOffsetY; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_ShiftOffsetY` · L436–439

[Drilling.UI/CRootView.cs:436–439](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L436-L439)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ShiftOffsetY.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 438 | SetProperty | resolved | bool Drilling.UI.Menu.CBindingBase.SetProperty<string>(ref string, string, string?) · Drilling.UI/Menu/CBindingBase.cs:760 |
| 438 | NormalizeShiftOffsetText | resolved | string Drilling.UI.CRootView.NormalizeShiftOffsetText(string?) · Drilling.UI/CRootView.cs:1582 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 438 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetProperty(ref _shiftOffsetY, NormalizeShiftOffsetText(value)) |
| 438 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeShiftOffsetText(value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsManualShiftOffsetVisible` · L442–448

[Drilling.UI/CRootView.cs:442–448](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L442-L448)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsManualShiftOffsetVisible |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsManualShiftOffsetVisible` · L444–447

[Drilling.UI/CRootView.cs:444–447](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L444-L447)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsManualShiftOffsetVisible.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 446 | return | 호출자에게 값 또는 제어를 반환합니다: return _operationMode == EN_SYSTEM_MODE.Manual; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CanSelectHead` · L450–456

[Drilling.UI/CRootView.cs:450–456](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L450-L456)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.CanSelectHead |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CanSelectHead` · L452–455

[Drilling.UI/CRootView.cs:452–455](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L452-L455)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.CanSelectHead.get |
| 접근/수식자 | Private / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 454 | return | 호출자에게 값 또는 제어를 반환합니다: return SelectedMenu.Menu is EN_MENU.Main or EN_MENU.Manual; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsSimulationEnvironment` · L458–464

[Drilling.UI/CRootView.cs:458–464](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L458-L464)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsSimulationEnvironment |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsSimulationEnvironment` · L460–463

[Drilling.UI/CRootView.cs:460–463](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L460-L463)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsSimulationEnvironment.get |
| 접근/수식자 | Private / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 462 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceManager.IsSimulation && _motionManager.IsSimulation; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CanStartAutoCycle` · L466–469

[Drilling.UI/CRootView.cs:466–469](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L466-L469)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.CanStartAutoCycle() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:180–180](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L180-L180) | CanStartAutoCycle | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 468 | IsManualStartEligible | resolved | bool Drilling.UI.CRootView.IsManualStartEligible() · Drilling.UI/CRootView.cs:476 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 468 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsManualStartEligible() |
| 468 | return | 호출자에게 값 또는 제어를 반환합니다: return _autoCycleState == EN_AUTO_CYCLE_STATE.Ready && IsManualStartEligible(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CanStopAutoCycle` · L471–474

[Drilling.UI/CRootView.cs:471–474](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L471-L474)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.CanStopAutoCycle() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:191–191](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L191-L191) | CanStopAutoCycle | False |
| [Drilling.UI/CRootView.cs:1705–1705](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1705-L1705) | CanStopAutoCycle | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 473 | return | 호출자에게 값 또는 제어를 반환합니다: return _autoCycleState is EN_AUTO_CYCLE_STATE.Preparing or EN_AUTO_CYCLE_STATE.Running &#124;&#124; (_operationMode == EN_SYSTEM_MODE.Auto && (_stationManager.StageRequests.IsRunning &#124;&#124; _stationManager.StageRequests.NeedsCleanup)); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsManualStartEligible` · L476–479

[Drilling.UI/CRootView.cs:476–479](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L476-L479)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsManualStartEligible() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:468–468](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L468-L468) | IsManualStartEligible | False |
| [Drilling.UI/CRootView.cs:1271–1271](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1271-L1271) | IsManualStartEligible | False |
| [Drilling.UI/CRootView.cs:1599–1599](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1599-L1599) | IsManualStartEligible | False |
| [Drilling.UI/CRootView.cs:1614–1614](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1614-L1614) | IsManualStartEligible | False |
| [Drilling.UI/CRootView.cs:1630–1630](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1630-L1630) | IsManualStartEligible | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 478 | return | 호출자에게 값 또는 제어를 반환합니다: return _operationMode == EN_SYSTEM_MODE.Manual; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshCurrentScreen` · L481–540

[Drilling.UI/CRootView.cs:481–540](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L481-L540)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:330–330](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L330-L330) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:537–537](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L537-L537) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:580–580](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L580-L580) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:642–642](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L642-L642) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:1276–1276](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1276-L1276) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:1662–1662](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1662-L1662) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:1701–1701](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1701-L1701) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:1750–1750](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1750-L1750) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:1784–1784](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1784-L1784) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:1873–1873](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1873-L1873) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:1880–1880](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1880-L1880) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:2135–2135](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2135-L2135) | RefreshCurrentScreen | False |
| [Drilling.UI/CRootView.cs:2755–2755](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2755-L2755) | RefreshCurrentScreen | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 483 | Interlocked.Exchange | resolved | int System.Threading.Interlocked.Exchange(ref int, int) |
| 496 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 500 | CreateLoadingScreen | resolved | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CreateLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) · Drilling.UI/CRootView.cs:2265 |
| 506 | menu.Build | resolved | System.Threading.Tasks.Task<Drilling.UI.Menu.Menus.CScreenViewModel> Drilling.UI.Menu.Menus.CMenuBase.Build(System.Threading.CancellationToken) · Drilling.UI/Menu/Menus/CMenuBase.cs:19 |
| 516 | SyncSelectedManualSettingFromScreen | resolved | void Drilling.UI.CRootView.SyncSelectedManualSettingFromScreen() · Drilling.UI/CRootView.cs:2275 |
| 521 | SyncSelectedSettingSelectionFromScreen | resolved | void Drilling.UI.CRootView.SyncSelectedSettingSelectionFromScreen() · Drilling.UI/CRootView.cs:2284 |
| 524 | ApplySystemStatusSnapshot | resolved | void Drilling.UI.CRootView.ApplySystemStatusSnapshot(Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT, bool) · Drilling.UI/CRootView.cs:1092 |
| 524 | GetSystemStatusSnapshot | resolved | System.Threading.Tasks.Task<Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT> Drilling.UI.CRootView.GetSystemStatusSnapshot(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1074 |
| 534 | Interlocked.Exchange | resolved | int System.Threading.Interlocked.Exchange(ref int, int) |
| 537 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 483 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Exchange(ref _screenRefreshRunning, 1) |
| 483 | if | 조건에 따라 분기합니다: if (Interlocked.Exchange(ref _screenRefreshRunning, 1) != 0) |
| 485 | assignment | 값을 대상에 대입합니다: _screenRefreshPending = true |
| 486 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 489 | local-declaration | 지역 변수를 선언합니다: var targetMenu = SelectedMenu; |
| 489 | variable-initializer | 변수의 초기값을 지정합니다: targetMenu = SelectedMenu |
| 490 | try | 예외 처리 범위입니다: try |
| 492 | do | 본문 실행 후 반복 조건을 확인합니다: do ... while (_screenRefreshPending) |
| 494 | assignment | 값을 대상에 대입합니다: targetMenu = SelectedMenu |
| 495 | assignment | 값을 대상에 대입합니다: _screenRefreshPending = false |
| 496 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(targetMenu.Menu, out var menu) |
| 496 | if | 조건에 따라 분기합니다: if (!_menus.TryGetValue(targetMenu.Menu, out var menu)) |
| 498 | if | 조건에 따라 분기합니다: if (SelectedMenu.Menu == targetMenu.Menu) |
| 500 | assignment | 값을 대상에 대입합니다: CurrentScreen = CreateLoadingScreen(targetMenu.Menu, targetMenu.Name) |
| 500 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateLoadingScreen(targetMenu.Menu, targetMenu.Name) |
| 503 | continue | 다음 반복으로 진행합니다: continue; |
| 506 | await | 비동기 완료를 기다립니다: await menu.Build() |
| 506 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menu.Build() |
| 506 | local-declaration | 지역 변수를 선언합니다: var screen = await menu.Build(); |
| 506 | variable-initializer | 변수의 초기값을 지정합니다: screen = await menu.Build() |
| 507 | if | 조건에 따라 분기합니다: if (SelectedMenu.Menu != targetMenu.Menu) |
| 509 | assignment | 값을 대상에 대입합니다: _screenRefreshPending = true |
| 510 | continue | 다음 반복으로 진행합니다: continue; |
| 513 | assignment | 값을 대상에 대입합니다: CurrentScreen = screen |
| 514 | if | 조건에 따라 분기합니다: if (targetMenu.Menu == EN_MENU.Manual) |
| 516 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SyncSelectedManualSettingFromScreen() |
| 519 | if | 조건에 따라 분기합니다: if (targetMenu.Menu == EN_MENU.Setting) |
| 521 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SyncSelectedSettingSelectionFromScreen() |
| 524 | await | 비동기 완료를 기다립니다: await GetSystemStatusSnapshot() |
| 524 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ApplySystemStatusSnapshot(await GetSystemStatusSnapshot(), refreshOperationModeAccess: false) |
| 524 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSystemStatusSnapshot() |
| 525 | if | 조건에 따라 분기합니다: if (targetMenu.Menu == EN_MENU.Pm) |
| 527 | assignment | 값을 대상에 대입합니다: StatusMessage = "PM lock entered. Operation commands are blocked." |
| 532 | finally | 종료 정리 구간입니다: finally |
| 534 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Exchange(ref _screenRefreshRunning, 0) |
| 535 | if | 조건에 따라 분기합니다: if (_screenRefreshPending) |
| 537 | assignment | 값을 대상에 대입합니다: _ = RefreshCurrentScreen() |
| 537 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshCurrentScreen"]
 N0["L483 if"]
 M -->|포함| N0
 N1["L490 try"]
 M -->|포함| N1
 N2["L492 do"]
 N1 -->|포함| N2
 N3["L496 if"]
 N2 -->|포함| N3
 N4["L498 if"]
 N3 -->|포함| N4
 N5["L507 if"]
 N2 -->|포함| N5
 N6["L514 if"]
 N2 -->|포함| N6
 N7["L519 if"]
 N2 -->|포함| N7
 N8["L525 if"]
 N2 -->|포함| N8
 N9["L532 finally"]
 N1 -->|포함| N9
 N10["L535 if"]
 N9 -->|포함| N10
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResetMenuStateOnOpen` · L542–553

[Drilling.UI/CRootView.cs:542–553](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L542-L553)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ResetMenuStateOnOpen(Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.EN_MENU) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| previousMenu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |
| selectedMenu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:320–320](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L320-L320) | ResetMenuStateOnOpen | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 546 | ResetSelectedManualHead | resolved | void Drilling.UI.CRootView.ResetSelectedManualHead() · Drilling.UI/CRootView.cs:555 |
| 550 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 552 | .ResetForMenuOpen | resolved | void Drilling.UI.Menu.Menus.CMenuReview.ResetForMenuOpen() · Drilling.UI/Menu/Menus/CMenuReview.cs:451 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 544 | if | 조건에 따라 분기합니다: if (selectedMenu == EN_MENU.Manual && previousMenu != EN_MENU.Manual) |
| 546 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResetSelectedManualHead() |
| 549 | if | 조건에 따라 분기합니다: if (selectedMenu == EN_MENU.Correction && previousMenu != EN_MENU.Correction && _menus.TryGetValue(EN_MENU.Correction, out var correction) && correction is CMenuCorrection correctionMenu) |
| 550 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(EN_MENU.Correction, out var correction) |
| 552 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .ResetForMenuOpen() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ResetMenuStateOnOpen"]
 N0["L544 if"]
 M -->|포함| N0
 N1["L549 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResetSelectedManualHead` · L555–572

[Drilling.UI/CRootView.cs:555–572](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L555-L572)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ResetSelectedManualHead() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:546–546](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L546-L546) | ResetSelectedManualHead | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 559 | _manager.Setting().LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 559 | _manager.Setting | resolved | Drilling.Common.Managers.CSettingManager Drilling.Common.Managers.CManager.Setting() · Drilling.Common/Managers/CManager.cs:340 |
| 560 | CScannerStatusSnapshotReader.BuildEnabledHeadNumbers | resolved | System.Collections.Generic.IReadOnlyList<int> Drilling.UI.Menu.Menus.CScannerStatusSnapshotReader.BuildEnabledHeadNumbers(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>, int) · Drilling.UI/Menu/Menus/CScannerStatusSnapshotReader.cs:126 |
| 571 | Math.Clamp | resolved | int System.Math.Clamp(int, int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 557 | try | 예외 처리 범위입니다: try |
| 559 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting().LoadSection(EN_SETTING_TAB.Option, CancellationToken.None) |
| 559 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting() |
| 559 | local-declaration | 지역 변수를 선언합니다: var settings = _manager.Setting().LoadSection(EN_SETTING_TAB.Option, CancellationToken.None); |
| 559 | variable-initializer | 변수의 초기값을 지정합니다: settings = _manager.Setting().LoadSection(EN_SETTING_TAB.Option, CancellationToken.None) |
| 560 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CScannerStatusSnapshotReader.BuildEnabledHeadNumbers(settings, 8) |
| 560 | local-declaration | 지역 변수를 선언합니다: var enabledHeadNos = CScannerStatusSnapshotReader.BuildEnabledHeadNumbers(settings, 8); |
| 560 | variable-initializer | 변수의 초기값을 지정합니다: enabledHeadNos = CScannerStatusSnapshotReader.BuildEnabledHeadNumbers(settings, 8) |
| 561 | if | 조건에 따라 분기합니다: if (enabledHeadNos.Count > 0) |
| 563 | assignment | 값을 대상에 대입합니다: _selectedHeadNo = enabledHeadNos[0] |
| 564 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 567 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (exception is InvalidDataException or IOException) |
| 571 | assignment | 값을 대상에 대입합니다: _selectedHeadNo = Math.Clamp(_selectedHeadNo, 1, 8) |
| 571 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(_selectedHeadNo, 1, 8) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ResetSelectedManualHead"]
 N0["L557 try"]
 M -->|포함| N0
 N1["L561 if"]
 N0 -->|포함| N1
 N2["L567 catch"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ToggleTheme` · L574–582

[Drilling.UI/CRootView.cs:574–582](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L574-L582)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.ToggleTheme() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:208–208](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L208-L208) | ToggleTheme | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 576 | CThemeManager.Toggle | resolved | Drilling.UI.EN_UI_THEME Drilling.UI.CThemeManager.Toggle() · Drilling.UI/CThemeManager.cs:33 |
| 577 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 577 | nameof | unresolved | None |
| 578 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 578 | nameof | unresolved | None |
| 579 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |
| 580 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 576 | assignment | 값을 대상에 대입합니다: _currentTheme = CThemeManager.Toggle() |
| 576 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CThemeManager.Toggle() |
| 577 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(ThemeToggleText)) |
| 577 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(ThemeToggleText) |
| 578 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(ThemeModeText)) |
| 578 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(ThemeModeText) |
| 579 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 580 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 580 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |
| 581 | assignment | 값을 대상에 대입합니다: StatusMessage = $"{ThemeModeText} applied." |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ToggleOperationMode` · L584–643

[Drilling.UI/CRootView.cs:584–643](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L584-L643)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.ToggleOperationMode(System.Func<string, string, bool>?, System.Action<string, string>?) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| confirm | System.Func<string, string, bool>? | None | True / null |
| warn | System.Action<string, string>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:215–215](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L215-L215) | ToggleOperationMode | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 586 | CRecipeConfirmDialog.ShowConfirmation | resolved | bool Drilling.UI.Popup.CRecipeConfirmDialog.ShowConfirmation(string, string, string, bool) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:11 |
| 587 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 596 | CheckAutoModeInterlocks | resolved | System.Threading.Tasks.Task<bool> Drilling.UI.CRootView.CheckAutoModeInterlocks(System.Action<string, string>) · Drilling.UI/CRootView.cs:645 |
| 598 | OperationModeValue | resolved | string Drilling.UI.CRootView.OperationModeValue(Drilling.Common.Managers.EN_SYSTEM_MODE) · Drilling.UI/CRootView.cs:2525 |
| 599 | confirm | resolved · 동적 구현 선택 가능 | bool System.Func<string, string, bool>.Invoke(string, string) |
| 605 | CheckAutoModeInterlocks | resolved | System.Threading.Tasks.Task<bool> Drilling.UI.CRootView.CheckAutoModeInterlocks(System.Action<string, string>) · Drilling.UI/CRootView.cs:645 |
| 613 | WaitForInitialProcessModelPreparation | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.WaitForInitialProcessModelPreparation(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:771 |
| 614 | CheckAutoModeInterlocks | resolved | System.Threading.Tasks.Task<bool> Drilling.UI.CRootView.CheckAutoModeInterlocks(System.Action<string, string>) · Drilling.UI/CRootView.cs:645 |
| 616 | _stationManager.StartStageRequests | resolved | void Drilling.Common.Station.CStationManager.StartStageRequests(System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST>>, Drilling.Common.Station.ST_STAGE_REVIEW_ACTIONS?, Drilling.Common.Station.ST_STAGE_TPM_ACTIONS?, Drilling.Common.Station.ST_STAGE_DISTORTION_ACTIONS?) · Drilling.Common/Station/CStationManager.cs:30 |
| 616 | CreateAutoReviewActions | resolved | Drilling.Common.Station.ST_STAGE_REVIEW_ACTIONS Drilling.UI.CRootView.CreateAutoReviewActions() · Drilling.UI/CRootView.cs:2785 |
| 616 | CreateAutoPowerActions | resolved | Drilling.Common.Station.ST_STAGE_TPM_ACTIONS Drilling.UI.CRootView.CreateAutoPowerActions() · Drilling.UI/CRootView.cs:2770 |
| 616 | CreateAutoDistortionActions | resolved | Drilling.Common.Station.ST_STAGE_DISTORTION_ACTIONS Drilling.UI.CRootView.CreateAutoDistortionActions() · Drilling.UI/CRootView.cs:2866 |
| 618 | _stationManager.StageRequests.StopAsync | resolved | System.Threading.Tasks.Task<bool> Drilling.Common.Station.CStageRequestSequence.StopAsync() · Drilling.Common/Station/CStationProcess.cs:5067 |
| 621 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string, string>.Invoke(string, string) |
| 628 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string, string>.Invoke(string, string) |
| 633 | RefreshOperationModeAccess | resolved | void Drilling.UI.CRootView.RefreshOperationModeAccess() · Drilling.UI/CRootView.cs:718 |
| 634 | StopCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 639 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 639 | nameof | unresolved | None |
| 640 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |
| 642 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 586 | assignment | 값을 대상에 대입합니다: confirm ??= (title, message) => CRecipeConfirmDialog.ShowConfirmation(title, message) |
| 586 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowConfirmation(title, message) |
| 587 | assignment | 값을 대상에 대입합니다: warn ??= (title, message) => CRecipeConfirmDialog.ShowWarning(title, message) |
| 587 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning(title, message) |
| 588 | if | 조건에 따라 분기합니다: if (_autoCycleState != EN_AUTO_CYCLE_STATE.Ready) |
| 590 | assignment | 값을 대상에 대입합니다: StatusMessage = "MODE cannot be changed while process is preparing, running, or stopping." |
| 591 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 594 | local-declaration | 지역 변수를 선언합니다: var previousMode = _operationMode; |
| 594 | variable-initializer | 변수의 초기값을 지정합니다: previousMode = _operationMode |
| 595 | conditional-expression | 조건에 따라 결과식을 선택합니다: previousMode == EN_SYSTEM_MODE.Auto ? EN_SYSTEM_MODE.Manual : EN_SYSTEM_MODE.Auto |
| 595 | local-declaration | 지역 변수를 선언합니다: var nextMode = previousMode == EN_SYSTEM_MODE.Auto ? EN_SYSTEM_MODE.Manual : EN_SYSTEM_MODE.Auto; |
| 595 | variable-initializer | 변수의 초기값을 지정합니다: nextMode = previousMode == EN_SYSTEM_MODE.Auto ? EN_SYSTEM_MODE.Manual : EN_SYSTEM_MODE.Auto |
| 596 | await | 비동기 완료를 기다립니다: await CheckAutoModeInterlocks(warn) |
| 596 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckAutoModeInterlocks(warn) |
| 596 | if | 조건에 따라 분기합니다: if (nextMode == EN_SYSTEM_MODE.Auto && !await CheckAutoModeInterlocks(warn)) |
| 597 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 598 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OperationModeValue(nextMode) |
| 598 | local-declaration | 지역 변수를 선언합니다: var nextModeText = OperationModeValue(nextMode); |
| 598 | variable-initializer | 변수의 초기값을 지정합니다: nextModeText = OperationModeValue(nextMode) |
| 599 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: confirm("MODE 변경", $"{nextModeText} Mode로 전환하시겠습니까?") |
| 599 | if | 조건에 따라 분기합니다: if (!confirm("MODE 변경", $"{nextModeText} Mode로 전환하시겠습니까?")) |
| 601 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 605 | await | 비동기 완료를 기다립니다: await CheckAutoModeInterlocks(warn) |
| 605 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckAutoModeInterlocks(warn) |
| 605 | if | 조건에 따라 분기합니다: if (nextMode == EN_SYSTEM_MODE.Auto && !await CheckAutoModeInterlocks(warn)) |
| 606 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 607 | if | 조건에 따라 분기합니다: if (_autoCycleState != EN_AUTO_CYCLE_STATE.Ready &#124;&#124; _operationMode != previousMode) |
| 608 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 609 | try | 예외 처리 범위입니다: try |
| 611 | if | 조건에 따라 분기합니다: if (nextMode == EN_SYSTEM_MODE.Auto) |
| 613 | await | 비동기 완료를 기다립니다: await WaitForInitialProcessModelPreparation(CancellationToken.None) |
| 613 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForInitialProcessModelPreparation(CancellationToken.None) |
| 614 | await | 비동기 완료를 기다립니다: await CheckAutoModeInterlocks(warn) |
| 614 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckAutoModeInterlocks(warn) |
| 614 | if | 조건에 따라 분기합니다: if (!await CheckAutoModeInterlocks(warn)) |
| 615 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.StartStageRequests(CreateStageProcessRequest, CreateAutoReviewActions(), CreateAutoPowerActions(), CreateAutoDistortionActions()) |
| 616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateAutoReviewActions() |
| 616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateAutoPowerActions() |
| 616 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateAutoDistortionActions() |
| 618 | await | 비동기 완료를 기다립니다: await _stationManager.StageRequests.StopAsync() |
| 618 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.StageRequests.StopAsync() |
| 618 | else | 앞 조건이 거짓인 경로입니다: else |
| 618 | if | 조건에 따라 분기합니다: if (!await _stationManager.StageRequests.StopAsync()) |
| 620 | assignment | 값을 대상에 대입합니다: StatusMessage = "Previous Stage operation is still stopping. MODE change is blocked." |
| 621 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn("MODE 변경 불가", "Stage 동작의 정지 확인을 기다리고 있습니다.") |
| 622 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 625 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 627 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Stage sequence mode change failed: {exception.Message}" |
| 628 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn("MODE 변경 불가", "Stage 시퀀스를 준비할 수 없습니다.") |
| 629 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 632 | assignment | 값을 대상에 대입합니다: _operationMode = nextMode |
| 633 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshOperationModeAccess() |
| 634 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopCommand.NotifyCanExecuteChanged() |
| 635 | assignment | 값을 대상에 대입합니다: _systemStatus = _systemStatus with { OperationMode = _operationMode } |
| 637 | assignment | 값을 대상에 대입합니다: OperationMode = _operationMode |
| 639 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(IsManualShiftOffsetVisible)) |
| 639 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(IsManualShiftOffsetVisible) |
| 640 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 641 | assignment | 값을 대상에 대입합니다: StatusMessage = _operationMode == EN_SYSTEM_MODE.Auto ? "AUTO mode selected. Waiting for Stage PC request." : "MANUAL mode selected. Main START is enabled." |
| 641 | conditional-expression | 조건에 따라 결과식을 선택합니다: _operationMode == EN_SYSTEM_MODE.Auto ? "AUTO mode selected. Waiting for Stage PC request." : "MANUAL mode selected. Main START is enabled." |
| 642 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 642 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ToggleOperationMode"]
 N0["L588 if"]
 M -->|포함| N0
 N1["L596 if"]
 M -->|포함| N1
 N2["L599 if"]
 M -->|포함| N2
 N3["L605 if"]
 M -->|포함| N3
 N4["L607 if"]
 M -->|포함| N4
 N5["L609 try"]
 M -->|포함| N5
 N6["L611 if"]
 N5 -->|포함| N6
 N7["L614 if"]
 N6 -->|포함| N7
 N8["L618 else"]
 N6 -->|포함| N8
 N9["L618 if"]
 N6 -->|포함| N9
 N10["L625 catch"]
 N5 -->|포함| N10
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CheckAutoModeInterlocks` · L645–671

[Drilling.UI/CRootView.cs:645–671](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L645-L671)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<bool> Drilling.UI.CRootView.CheckAutoModeInterlocks(System.Action<string, string>) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<bool> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| warn | System.Action<string, string> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:596–596](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L596-L596) | CheckAutoModeInterlocks | False |
| [Drilling.UI/CRootView.cs:605–605](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L605-L605) | CheckAutoModeInterlocks | False |
| [Drilling.UI/CRootView.cs:614–614](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L614-L614) | CheckAutoModeInterlocks | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 647 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 649 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string, string>.Invoke(string, string) |
| 652 | CheckHeavyAlarmForOperation | resolved | bool Drilling.UI.CRootView.CheckHeavyAlarmForOperation(string) · Drilling.UI/CRootView.cs:2573 |
| 654 | CheckStageMotionOwnership | resolved | bool Drilling.UI.CRootView.CheckStageMotionOwnership(System.Action<string, string>, string) · Drilling.UI/CRootView.cs:673 |
| 658 | ((CMenuMain)_menus[EN_MENU.Main]).GetAutoModeBlockers | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.InterLock.ST_INTERLOCK_ITEM>> Drilling.UI.Menu.Menus.CMenuMain.GetAutoModeBlockers(System.Threading.CancellationToken) · Drilling.UI/Menu/Menus/CMenuMain.cs:773 |
| 661 | CheckStageMotionOwnership | resolved | bool Drilling.UI.CRootView.CheckStageMotionOwnership(System.Action<string, string>, string) · Drilling.UI/CRootView.cs:673 |
| 669 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string, string>.Invoke(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 647 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(EN_MENU.Correction, out var correction) |
| 647 | if | 조건에 따라 분기합니다: if (_menus.TryGetValue(EN_MENU.Correction, out var correction) && correction is CMenuCorrection { DefaultBlocksAuto: true }) |
| 649 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn("AUTO 전환 불가", "Default 보정 동작을 종료하고 새 가공 검증을 완료하거나 이전값을 복원해 주세요.") |
| 650 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 652 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckHeavyAlarmForOperation("AUTO") |
| 652 | if | 조건에 따라 분기합니다: if (!CheckHeavyAlarmForOperation("AUTO")) |
| 653 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 654 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckStageMotionOwnership(warn, "AUTO") |
| 654 | if | 조건에 따라 분기합니다: if (!CheckStageMotionOwnership(warn, "AUTO")) |
| 655 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 656 | try | 예외 처리 범위입니다: try |
| 658 | await | 비동기 완료를 기다립니다: await ((CMenuMain)_menus[EN_MENU.Main]).GetAutoModeBlockers() |
| 658 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ((CMenuMain)_menus[EN_MENU.Main]).GetAutoModeBlockers() |
| 658 | local-declaration | 지역 변수를 선언합니다: var blockers = await ((CMenuMain)_menus[EN_MENU.Main]).GetAutoModeBlockers(); |
| 658 | variable-initializer | 변수의 초기값을 지정합니다: blockers = await ((CMenuMain)_menus[EN_MENU.Main]).GetAutoModeBlockers() |
| 659 | if | 조건에 따라 분기합니다: if (blockers.Count == 0) |
| 661 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckStageMotionOwnership(warn, "AUTO") |
| 661 | return | 호출자에게 값 또는 제어를 반환합니다: return CheckStageMotionOwnership(warn, "AUTO"); |
| 663 | catch | 지정 예외를 처리합니다: catch (Exception) |
| 668 | assignment | 값을 대상에 대입합니다: StatusMessage = "AUTO mode change blocked by Interlock/Safety." |
| 669 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn("AUTO 전환 불가", "AUTO 모드로 전환할 수 없습니다.\nInterlock/Safety를 확인해 주세요.") |
| 670 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CheckAutoModeInterlocks"]
 N0["L647 if"]
 M -->|포함| N0
 N1["L652 if"]
 M -->|포함| N1
 N2["L654 if"]
 M -->|포함| N2
 N3["L656 try"]
 M -->|포함| N3
 N4["L659 if"]
 N3 -->|포함| N4
 N5["L663 catch"]
 N3 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CheckStageMotionOwnership` · L673–682

[Drilling.UI/CRootView.cs:673–682](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L673-L682)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.CheckStageMotionOwnership(System.Action<string, string>, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| warn | System.Action<string, string> | None | False /  |
| operation | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:654–654](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L654-L654) | CheckStageMotionOwnership | False |
| [Drilling.UI/CRootView.cs:661–661](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L661-L661) | CheckStageMotionOwnership | False |
| [Drilling.UI/CRootView.cs:1596–1596](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1596-L1596) | CheckStageMotionOwnership | False |
| [Drilling.UI/CRootView.cs:1605–1605](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1605-L1605) | CheckStageMotionOwnership | False |
| [Drilling.UI/CRootView.cs:1635–1635](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1635-L1635) | CheckStageMotionOwnership | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 675 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 680 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string, string>.Invoke(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 675 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(EN_MENU.Manual, out var menu) |
| 675 | local-declaration | 지역 변수를 선언합니다: var manualMovePending = _menus.TryGetValue(EN_MENU.Manual, out var menu) && menu is CMenuManual manual && manual.IsManualStageMovePending; |
| 675 | variable-initializer | 변수의 초기값을 지정합니다: manualMovePending = _menus.TryGetValue(EN_MENU.Manual, out var menu) && menu is CMenuManual manual && manual.IsManualStageMovePending |
| 677 | if | 조건에 따라 분기합니다: if (!manualMovePending && !_interfaceManager.StageReviewSequences.IsActive) |
| 678 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 679 | assignment | 값을 대상에 대입합니다: StatusMessage = $"{operation} blocked while Stage/Review motion or cleanup is active." |
| 680 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn(operation == "AUTO" ? "AUTO 전환 불가" : "공정 시작 불가", "Stage/Review 수동 이동 또는 공통 시퀀스 정리가 진행 중입니다.\n이동 완료 또는 STOP 후 신호 정리와 소유권 해제를 확인해 주세요.") |
| 680 | conditional-expression | 조건에 따라 결과식을 선택합니다: operation == "AUTO" ? "AUTO 전환 불가" : "공정 시작 불가" |
| 681 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CheckStageMotionOwnership"]
 N0["L677 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CanAccessMenu` · L684–692

[Drilling.UI/CRootView.cs:684–692](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L684-L692)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.CanAccessMenu(Drilling.UI.Menu.Menus.EN_MENU) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:280–280](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L280-L280) | CanAccessMenu | False |
| [Drilling.UI/CRootView.cs:714–714](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L714-L714) | CanAccessMenu | False |
| [Drilling.UI/CRootView.cs:725–725](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L725-L725) | CanAccessMenu | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 691 | AutoModeMenus.Contains | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlySet<Drilling.UI.Menu.Menus.EN_MENU>.Contains(Drilling.UI.Menu.Menus.EN_MENU) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 686 | if | 조건에 따라 분기합니다: if (_autoCycleState != EN_AUTO_CYCLE_STATE.Ready) |
| 688 | return | 호출자에게 값 또는 제어를 반환합니다: return menu is EN_MENU.Main or EN_MENU.Alarm; |
| 691 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AutoModeMenus.Contains(menu) |
| 691 | return | 호출자에게 값 또는 제어를 반환합니다: return _operationMode != EN_SYSTEM_MODE.Auto &#124;&#124; AutoModeMenus.Contains(menu); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CanAccessMenu"]
 N0["L686 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsReviewNavigationLocked` · L694–708

[Drilling.UI/CRootView.cs:694–708](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L694-L708)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsReviewNavigationLocked(Drilling.UI.Menu.Menus.EN_MENU) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| targetMenu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:272–272](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L272-L272) | IsReviewNavigationLocked | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 704 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 698 | if | 조건에 따라 분기합니다: if (_operationMode != EN_SYSTEM_MODE.Manual &#124;&#124; targetMenu == _selectedMenu.Menu) |
| 699 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 702 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedMenu.Menu switch { EN_MENU.Correction => _menus.TryGetValue(EN_MENU.Correction, out var correction) && correction is CMenuCorrection { BlocksMenuNavigation: true }, _ => false }; |
| 702 | switch-expression | 값별 결과식을 선택합니다: _selectedMenu.Menu switch { EN_MENU.Correction => _menus.TryGetValue(EN_MENU.Correction, out var correction) && correction is CMenuCorrection { BlocksMenuNavigation: true }, _ => false } |
| 704 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(EN_MENU.Correction, out var correction) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsReviewNavigationLocked"]
 N0["L698 if"]
 M -->|포함| N0
 N1["L702 switch-expression"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ApplyMenuAccessForOperationMode` · L710–716

[Drilling.UI/CRootView.cs:710–716](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L710-L716)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ApplyMenuAccessForOperationMode() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:167–167](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L167-L167) | ApplyMenuAccessForOperationMode | False |
| [Drilling.UI/CRootView.cs:730–730](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L730-L730) | ApplyMenuAccessForOperationMode | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 714 | CanAccessMenu | resolved | bool Drilling.UI.CRootView.CanAccessMenu(Drilling.UI.Menu.Menus.EN_MENU) · Drilling.UI/CRootView.cs:684 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 712 | foreach | 컬렉션 요소를 순회합니다: foreach (var menu in Menus) |
| 714 | assignment | 값을 대상에 대입합니다: menu.IsEnabled = CanAccessMenu(menu.Menu) |
| 714 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CanAccessMenu(menu.Menu) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ApplyMenuAccessForOperationMode"]
 N0["L712 foreach"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshOperationModeAccess` · L718–734

[Drilling.UI/CRootView.cs:718–734](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L718-L734)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.RefreshOperationModeAccess() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:633–633](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L633-L633) | RefreshOperationModeAccess | False |
| [Drilling.UI/CRootView.cs:1069–1069](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1069-L1069) | RefreshOperationModeAccess | False |
| [Drilling.UI/CRootView.cs:1098–1098](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1098-L1098) | RefreshOperationModeAccess | False |
| [Drilling.UI/CRootView.cs:1844–1844](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1844-L1844) | RefreshOperationModeAccess | False |
| [Drilling.UI/CRootView.cs:2723–2723](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2723-L2723) | RefreshOperationModeAccess | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 725 | CanAccessMenu | resolved | bool Drilling.UI.CRootView.CanAccessMenu(Drilling.UI.Menu.Menus.EN_MENU) · Drilling.UI/CRootView.cs:684 |
| 727 | Menus.First | resolved | Drilling.UI.Menu.Menus.CMenuItem System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuItem>.First<Drilling.UI.Menu.Menus.CMenuItem>(System.Func<Drilling.UI.Menu.Menus.CMenuItem, bool>) |
| 730 | ApplyMenuAccessForOperationMode | resolved | void Drilling.UI.CRootView.ApplyMenuAccessForOperationMode() · Drilling.UI/CRootView.cs:710 |
| 731 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 731 | nameof | unresolved | None |
| 732 | StartCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 733 | ToggleOperationModeCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 725 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CanAccessMenu(SelectedMenu.Menu) |
| 725 | if | 조건에 따라 분기합니다: if (!CanAccessMenu(SelectedMenu.Menu)) |
| 727 | assignment | 값을 대상에 대입합니다: SelectedMenu = Menus.First(MatchesItem) |
| 727 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Menus.First(MatchesItem) |
| 730 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ApplyMenuAccessForOperationMode() |
| 731 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(IsManualShiftOffsetVisible)) |
| 731 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(IsManualShiftOffsetVisible) |
| 732 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StartCommand.NotifyCanExecuteChanged() |
| 733 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ToggleOperationModeCommand.NotifyCanExecuteChanged() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshOperationModeAccess"]
 N0["L725 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L720–723

[Drilling.UI/CRootView.cs:720–723](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L720-L723)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(Drilling.UI.Menu.Menus.CMenuItem) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.CMenuItem | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 722 | return | 호출자에게 값 또는 제어를 반환합니다: return menu.Menu == EN_MENU.Main; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshShellStatusItems` · L736–747

[Drilling.UI/CRootView.cs:736–747](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L736-L747)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.RefreshShellStatusItems() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:229–229](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L229-L229) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:329–329](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L329-L329) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:579–579](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L579-L579) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:640–640](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L640-L640) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:1070–1070](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1070-L1070) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:1101–1101](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1101-L1101) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:1872–1872](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1872-L1872) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:1879–1879](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1879-L1879) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:2477–2477](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2477-L2477) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:2725–2725](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2725-L2725) | RefreshShellStatusItems | False |
| [Drilling.UI/CRootView.cs:2742–2742](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2742-L2742) | RefreshShellStatusItems | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 738 | RefreshMelsecSimulatorVisibility | resolved | void Drilling.UI.CRootView.RefreshMelsecSimulatorVisibility() · Drilling.UI/CRootView.cs:2906 |
| 740 | .Close | unresolved | None |
| 741 | CreateHeaderStatusItems | resolved | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateHeaderStatusItems() · Drilling.UI/CRootView.cs:1134 |
| 742 | Replace | resolved | void Drilling.UI.CRootView.Replace<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>(System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>, System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>) · Drilling.UI/CRootView.cs:1119 |
| 743 | Replace | resolved | void Drilling.UI.CRootView.Replace<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>(System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>, System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>) · Drilling.UI/CRootView.cs:1119 |
| 743 | headerStatusItems.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.Where<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>(System.Func<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM, bool>) |
| 744 | Replace | resolved | void Drilling.UI.CRootView.Replace<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>(System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>, System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>) · Drilling.UI/CRootView.cs:1119 |
| 744 | headerStatusItems.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.Where<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>(System.Func<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM, bool>) |
| 744 | IsHeaderContextStatusItem | resolved | bool Drilling.UI.CRootView.IsHeaderContextStatusItem(Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM) · Drilling.UI/CRootView.cs:1153 |
| 745 | Replace | resolved | void Drilling.UI.CRootView.Replace<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>(System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>, System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>) · Drilling.UI/CRootView.cs:1119 |
| 745 | CreateFooterStatusItems | resolved | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateFooterStatusItems(Drilling.UI.Menu.Menus.EN_MENU) · Drilling.UI/CRootView.cs:1158 |
| 746 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 746 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 738 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshMelsecSimulatorVisibility() |
| 739 | if | 조건에 따라 분기합니다: if (MelsecSimulatorVisibility != Visibility.Visible) |
| 740 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Close() |
| 741 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateHeaderStatusItems() |
| 741 | local-declaration | 지역 변수를 선언합니다: var headerStatusItems = CreateHeaderStatusItems(); |
| 741 | variable-initializer | 변수의 초기값을 지정합니다: headerStatusItems = CreateHeaderStatusItems() |
| 742 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Replace(HeaderStatusItems, headerStatusItems) |
| 743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Replace(HeaderContextStatusItems, headerStatusItems.Where(IsHeaderContextStatusItem)) |
| 743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: headerStatusItems.Where(IsHeaderContextStatusItem) |
| 744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Replace(HeaderCommunicationStatusItems, headerStatusItems.Where(item => !IsHeaderContextStatusItem(item))) |
| 744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: headerStatusItems.Where(item => !IsHeaderContextStatusItem(item)) |
| 744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsHeaderContextStatusItem(item) |
| 745 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Replace(FooterStatusItems, CreateFooterStatusItems(SelectedMenu.Menu)) |
| 745 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateFooterStatusItems(SelectedMenu.Menu) |
| 746 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(CurrentUserText)) |
| 746 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(CurrentUserText) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshShellStatusItems"]
 N0["L739 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshSystemStatus` · L749–769

[Drilling.UI/CRootView.cs:749–769](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L749-L769)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshSystemStatus() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1947–1947](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1947-L1947) | RefreshSystemStatus | False |
| [Drilling.UI/CRootView.cs:1955–1955](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1955-L1955) | RefreshSystemStatus | False |
| [Drilling.UI/CRootView.cs:1959–1959](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1959-L1959) | RefreshSystemStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 759 | ApplySystemStatusSnapshot | resolved | void Drilling.UI.CRootView.ApplySystemStatusSnapshot(Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT, bool) · Drilling.UI/CRootView.cs:1092 |
| 759 | GetSystemStatusSnapshot | resolved | System.Threading.Tasks.Task<Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT> Drilling.UI.CRootView.GetSystemStatusSnapshot(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1074 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 751 | if | 조건에 따라 분기합니다: if (_statusRefreshRunning) |
| 753 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 756 | assignment | 값을 대상에 대입합니다: _statusRefreshRunning = true |
| 757 | try | 예외 처리 범위입니다: try |
| 759 | await | 비동기 완료를 기다립니다: await GetSystemStatusSnapshot() |
| 759 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ApplySystemStatusSnapshot(await GetSystemStatusSnapshot()) |
| 759 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSystemStatusSnapshot() |
| 761 | catch | 지정 예외를 처리합니다: catch  |
| 765 | finally | 종료 정리 구간입니다: finally |
| 767 | assignment | 값을 대상에 대입합니다: _statusRefreshRunning = false |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshSystemStatus"]
 N0["L751 if"]
 M -->|포함| N0
 N1["L757 try"]
 M -->|포함| N1
 N2["L761 catch"]
 N1 -->|포함| N2
 N3["L765 finally"]
 N1 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WaitForInitialProcessModelPreparation` · L771–785

[Drilling.UI/CRootView.cs:771–785](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L771-L785)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.WaitForInitialProcessModelPreparation(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:613–613](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L613-L613) | WaitForInitialProcessModelPreparation | False |
| [Drilling.UI/CRootView.cs:1628–1628](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1628-L1628) | WaitForInitialProcessModelPreparation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 775 | _initialProcessModelTask.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.WaitAsync(System.Threading.CancellationToken) |
| 783 | Debug.WriteLine | resolved | void System.Diagnostics.Debug.WriteLine(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 773 | try | 예외 처리 범위입니다: try |
| 775 | await | 비동기 완료를 기다립니다: await _initialProcessModelTask.WaitAsync(cancellationToken) |
| 775 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _initialProcessModelTask.WaitAsync(cancellationToken) |
| 777 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested) |
| 779 | throw | 예외를 발생/전달합니다: throw; |
| 781 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 783 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Debug.WriteLine("Initial process model preparation did not complete before Start. A fresh preparation will be attempted. " + exception) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WaitForInitialProcessModelPreparation"]
 N0["L773 try"]
 M -->|포함| N0
 N1["L777 catch"]
 N0 -->|포함| N1
 N2["L781 catch"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshMonitorLiveData` · L787–817

[Drilling.UI/CRootView.cs:787–817](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L787-L817)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshMonitorLiveData() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1940–1940](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1940-L1940) | RefreshMonitorLiveData | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 797 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 799 | monitor.RefreshLiveData | resolved | System.Threading.Tasks.Task Drilling.UI.Menu.Menus.CMenuMonitor.RefreshLiveData(System.Threading.CancellationToken) · Drilling.UI/Menu/Menus/CMenuMonitor.cs:872 |
| 802 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 803 | HasElapsed | resolved | bool Drilling.UI.CRootView.HasElapsed(long, long, System.TimeSpan) · Drilling.UI/CRootView.cs:1047 |
| 806 | RefreshShellCommunicationStatus | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshShellCommunicationStatus(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1059 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 789 | if | 조건에 따라 분기합니다: if (_monitorLiveRefreshRunning) |
| 791 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 794 | assignment | 값을 대상에 대입합니다: _monitorLiveRefreshRunning = true |
| 795 | try | 예외 처리 범위입니다: try |
| 797 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(EN_MENU.Monitor, out var menu) |
| 797 | if | 조건에 따라 분기합니다: if (_menus.TryGetValue(EN_MENU.Monitor, out var menu) && menu is CMenuMonitor monitor) |
| 799 | await | 비동기 완료를 기다립니다: await monitor.RefreshLiveData() |
| 799 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: monitor.RefreshLiveData() |
| 802 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 802 | local-declaration | 지역 변수를 선언합니다: var nowTimestamp = Stopwatch.GetTimestamp(); |
| 802 | variable-initializer | 변수의 초기값을 지정합니다: nowTimestamp = Stopwatch.GetTimestamp() |
| 803 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: HasElapsed(_lastMonitorShellStatusRefreshTimestamp, nowTimestamp, MonitorShellStatusRefreshInterval) |
| 803 | if | 조건에 따라 분기합니다: if (HasElapsed(_lastMonitorShellStatusRefreshTimestamp, nowTimestamp, MonitorShellStatusRefreshInterval)) |
| 805 | assignment | 값을 대상에 대입합니다: _lastMonitorShellStatusRefreshTimestamp = nowTimestamp |
| 806 | await | 비동기 완료를 기다립니다: await RefreshShellCommunicationStatus() |
| 806 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellCommunicationStatus() |
| 809 | catch | 지정 예외를 처리합니다: catch  |
| 813 | finally | 종료 정리 구간입니다: finally |
| 815 | assignment | 값을 대상에 대입합니다: _monitorLiveRefreshRunning = false |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshMonitorLiveData"]
 N0["L789 if"]
 M -->|포함| N0
 N1["L795 try"]
 M -->|포함| N1
 N2["L797 if"]
 N1 -->|포함| N2
 N3["L803 if"]
 N1 -->|포함| N3
 N4["L809 catch"]
 N1 -->|포함| N4
 N5["L813 finally"]
 N1 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshMainLiveStatus` · L819–871

[Drilling.UI/CRootView.cs:819–871](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L819-L871)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshMainLiveStatus() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1954–1954](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1954-L1954) | RefreshMainLiveStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 837 | new CancellationTokenSource | resolved | System.Threading.CancellationTokenSource.CancellationTokenSource(System.TimeSpan) |
| 839 | startedMainOperating.RefreshLiveStatus | resolved | System.Threading.Tasks.Task Drilling.UI.Menu.Menus.CMenuMain.RefreshLiveStatus(System.Threading.CancellationToken) · Drilling.UI/Menu/Menus/CMenuMain.cs:783 |
| 840 | IsMainLiveStatusTargetCurrent | resolved | bool Drilling.UI.CRootView.IsMainLiveStatusTargetCurrent(Drilling.UI.Menu.Menus.CScreenViewModel, Drilling.UI.Menu.Menus.CMenuMain?) · Drilling.UI/CRootView.cs:967 |
| 842 | ReportMainLiveStatusRestored | resolved | void Drilling.UI.CRootView.ReportMainLiveStatusRestored() · Drilling.UI/CRootView.cs:1000 |
| 845 | IsMainLiveStatusTargetCurrent | resolved | bool Drilling.UI.CRootView.IsMainLiveStatusTargetCurrent(Drilling.UI.Menu.Menus.CScreenViewModel, Drilling.UI.Menu.Menus.CMenuMain?) · Drilling.UI/CRootView.cs:967 |
| 849 | IsMainLiveStatusTargetCurrent | resolved | bool Drilling.UI.CRootView.IsMainLiveStatusTargetCurrent(Drilling.UI.Menu.Menus.CScreenViewModel, Drilling.UI.Menu.Menus.CMenuMain?) · Drilling.UI/CRootView.cs:967 |
| 851 | ReportMainLiveStatusError | resolved | void Drilling.UI.CRootView.ReportMainLiveStatusError(System.Exception) · Drilling.UI/CRootView.cs:972 |
| 855 | ReportStaleMainLiveStatusError | resolved | void Drilling.UI.CRootView.ReportStaleMainLiveStatusError(System.Exception) · Drilling.UI/CRootView.cs:989 |
| 861 | ReferenceEquals | resolved | bool object.ReferenceEquals(object?, object?) |
| 866 | refreshCts.Dispose | resolved | void System.Threading.CancellationTokenSource.Dispose() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 821 | if | 조건에 따라 분기합니다: if (_mainLiveRefreshRunning) |
| 823 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 826 | local-declaration | 지역 변수를 선언합니다: var startedScreen = CurrentScreen; |
| 826 | variable-initializer | 변수의 초기값을 지정합니다: startedScreen = CurrentScreen |
| 827 | local-declaration | 지역 변수를 선언합니다: var startedMainOperating = startedScreen.MainOperating; |
| 827 | variable-initializer | 변수의 초기값을 지정합니다: startedMainOperating = startedScreen.MainOperating |
| 828 | if | 조건에 따라 분기합니다: if (SelectedMenu.Menu != EN_MENU.Main &#124;&#124; startedMainOperating is null) |
| 830 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 833 | assignment | 값을 대상에 대입합니다: _mainLiveRefreshRunning = true |
| 834 | local-declaration | 지역 변수를 선언합니다: CancellationTokenSource? refreshCts = null; |
| 834 | variable-initializer | 변수의 초기값을 지정합니다: refreshCts = null |
| 835 | try | 예외 처리 범위입니다: try |
| 837 | assignment | 값을 대상에 대입합니다: refreshCts = new CancellationTokenSource(MainLiveStatusTimeout) |
| 837 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CancellationTokenSource(MainLiveStatusTimeout) |
| 838 | assignment | 값을 대상에 대입합니다: _mainLiveStatusRefreshCts = refreshCts |
| 839 | await | 비동기 완료를 기다립니다: await startedMainOperating.RefreshLiveStatus(refreshCts.Token) |
| 839 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: startedMainOperating.RefreshLiveStatus(refreshCts.Token) |
| 840 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsMainLiveStatusTargetCurrent(startedScreen, startedMainOperating) |
| 840 | if | 조건에 따라 분기합니다: if (IsMainLiveStatusTargetCurrent(startedScreen, startedMainOperating)) |
| 842 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReportMainLiveStatusRestored() |
| 845 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsMainLiveStatusTargetCurrent(startedScreen, startedMainOperating) |
| 845 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException) when (!IsMainLiveStatusTargetCurrent(startedScreen, startedMainOperating)) |
| 849 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsMainLiveStatusTargetCurrent(startedScreen, startedMainOperating) |
| 849 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (IsMainLiveStatusTargetCurrent(startedScreen, startedMainOperating)) |
| 851 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReportMainLiveStatusError(exception) |
| 853 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 855 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReportStaleMainLiveStatusError(exception) |
| 857 | finally | 종료 정리 구간입니다: finally |
| 859 | if | 조건에 따라 분기합니다: if (refreshCts is not null) |
| 861 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(_mainLiveStatusRefreshCts, refreshCts) |
| 861 | if | 조건에 따라 분기합니다: if (ReferenceEquals(_mainLiveStatusRefreshCts, refreshCts)) |
| 863 | assignment | 값을 대상에 대입합니다: _mainLiveStatusRefreshCts = null |
| 866 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: refreshCts.Dispose() |
| 869 | assignment | 값을 대상에 대입합니다: _mainLiveRefreshRunning = false |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshMainLiveStatus"]
 N0["L821 if"]
 M -->|포함| N0
 N1["L828 if"]
 M -->|포함| N1
 N2["L835 try"]
 M -->|포함| N2
 N3["L840 if"]
 N2 -->|포함| N3
 N4["L845 catch"]
 N2 -->|포함| N4
 N5["L849 catch"]
 N2 -->|포함| N5
 N6["L853 catch"]
 N2 -->|포함| N6
 N7["L857 finally"]
 N2 -->|포함| N7
 N8["L859 if"]
 N7 -->|포함| N8
 N9["L861 if"]
 N8 -->|포함| N9
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshManualScannerStatus` · L873–899

[Drilling.UI/CRootView.cs:873–899](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L873-L899)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.RefreshManualScannerStatus() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1946–1946](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1946-L1946) | RefreshManualScannerStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 889 | manualMenu.RefreshScannerStatusSnapshot | resolved | void Drilling.UI.Menu.Menus.CMenuManual.RefreshScannerStatusSnapshot() · Drilling.UI/Menu/Menus/CMenuManual.cs:2086 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 875 | if | 조건에 따라 분기합니다: if (_manualScannerStatusRefreshRunning) |
| 877 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 880 | local-declaration | 지역 변수를 선언합니다: var manualMenu = CurrentScreen.Manual; |
| 880 | variable-initializer | 변수의 초기값을 지정합니다: manualMenu = CurrentScreen.Manual |
| 881 | if | 조건에 따라 분기합니다: if (SelectedMenu.Menu != EN_MENU.Manual &#124;&#124; manualMenu is null) |
| 883 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 886 | assignment | 값을 대상에 대입합니다: _manualScannerStatusRefreshRunning = true |
| 887 | try | 예외 처리 범위입니다: try |
| 889 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: manualMenu.RefreshScannerStatusSnapshot() |
| 891 | catch | 지정 예외를 처리합니다: catch  |
| 895 | finally | 종료 정리 구간입니다: finally |
| 897 | assignment | 값을 대상에 대입합니다: _manualScannerStatusRefreshRunning = false |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshManualScannerStatus"]
 N0["L875 if"]
 M -->|포함| N0
 N1["L881 if"]
 M -->|포함| N1
 N2["L887 try"]
 M -->|포함| N2
 N3["L891 catch"]
 N2 -->|포함| N3
 N4["L895 finally"]
 N2 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CancelMainLiveStatusRefresh` · L901–911

[Drilling.UI/CRootView.cs:901–911](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L901-L911)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.CancelMainLiveStatusRefresh() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:301–301](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L301-L301) | CancelMainLiveStatusRefresh | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 905 | .Cancel | resolved | void System.Threading.CancellationTokenSource.Cancel() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 903 | try | 예외 처리 범위입니다: try |
| 905 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Cancel() |
| 907 | catch | 지정 예외를 처리합니다: catch (ObjectDisposedException) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CancelMainLiveStatusRefresh"]
 N0["L903 try"]
 M -->|포함| N0
 N1["L907 catch"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StopMainScannerStatusPolling` · L913–921

[Drilling.UI/CRootView.cs:913–921](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L913-L921)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.StopMainScannerStatusPolling() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:929–929](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L929-L929) | StopMainScannerStatusPolling | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 915 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 920 | mainMenu.StopScannerStatusPolling | resolved | void Drilling.UI.Menu.Menus.CMenuMain.StopScannerStatusPolling() · Drilling.UI/Menu/Menus/CMenuMain.cs:1077 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(EN_MENU.Main, out var menu) |
| 915 | if | 조건에 따라 분기합니다: if (!_menus.TryGetValue(EN_MENU.Main, out var menu) &#124;&#124; menu is not CMenuMain mainMenu) |
| 917 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 920 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: mainMenu.StopScannerStatusPolling() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopMainScannerStatusPolling"]
 N0["L915 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `QueueMainScannerStatusPollingStop` · L923–938

[Drilling.UI/CRootView.cs:923–938](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L923-L938)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.QueueMainScannerStatusPollingStop() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:302–302](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L302-L302) | QueueMainScannerStatusPollingStop | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 937 | Task.Run | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Run(System.Action) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 937 | assignment | 값을 대상에 대입합니다: _ = Task.Run(StopPolling) |
| 937 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(StopPolling) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `StopPolling` · L925–935

[Drilling.UI/CRootView.cs:925–935](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L925-L935)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void StopPolling() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 929 | StopMainScannerStatusPolling | resolved | void Drilling.UI.CRootView.StopMainScannerStatusPolling() · Drilling.UI/CRootView.cs:913 |
| 933 | Debug.WriteLine | resolved | void System.Diagnostics.Debug.WriteLine(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 927 | try | 예외 처리 범위입니다: try |
| 929 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopMainScannerStatusPolling() |
| 931 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 933 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Debug.WriteLine($"Main scanner polling stop failed. {exception}") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopPolling"]
 N0["L927 try"]
 M -->|포함| N0
 N1["L931 catch"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StopManualScannerStatusPolling` · L940–948

[Drilling.UI/CRootView.cs:940–948](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L940-L948)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.StopManualScannerStatusPolling() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:956–956](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L956-L956) | StopManualScannerStatusPolling | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 942 | _menus.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase>.TryGetValue(Drilling.UI.Menu.Menus.EN_MENU, out Drilling.UI.Menu.Menus.CMenuBase) |
| 947 | manualMenu.StopScannerStatusPolling | resolved | void Drilling.UI.Menu.Menus.CMenuManual.StopScannerStatusPolling() · Drilling.UI/Menu/Menus/CMenuManual.cs:436 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 942 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.TryGetValue(EN_MENU.Manual, out var menu) |
| 942 | if | 조건에 따라 분기합니다: if (!_menus.TryGetValue(EN_MENU.Manual, out var menu) &#124;&#124; menu is not CMenuManual manualMenu) |
| 944 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 947 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: manualMenu.StopScannerStatusPolling() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopManualScannerStatusPolling"]
 N0["L942 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `QueueManualScannerStatusPollingStop` · L950–965

[Drilling.UI/CRootView.cs:950–965](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L950-L965)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.QueueManualScannerStatusPollingStop() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:307–307](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L307-L307) | QueueManualScannerStatusPollingStop | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 964 | Task.Run | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Run(System.Action) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 964 | assignment | 값을 대상에 대입합니다: _ = Task.Run(StopPolling) |
| 964 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(StopPolling) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `StopPolling` · L952–962

[Drilling.UI/CRootView.cs:952–962](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L952-L962)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void StopPolling() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 956 | StopManualScannerStatusPolling | resolved | void Drilling.UI.CRootView.StopManualScannerStatusPolling() · Drilling.UI/CRootView.cs:940 |
| 960 | Debug.WriteLine | resolved | void System.Diagnostics.Debug.WriteLine(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 954 | try | 예외 처리 범위입니다: try |
| 956 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopManualScannerStatusPolling() |
| 958 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 960 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Debug.WriteLine($"Manual scanner polling stop failed. {exception}") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopPolling"]
 N0["L954 try"]
 M -->|포함| N0
 N1["L958 catch"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsMainLiveStatusTargetCurrent` · L967–970

[Drilling.UI/CRootView.cs:967–970](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L967-L970)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsMainLiveStatusTargetCurrent(Drilling.UI.Menu.Menus.CScreenViewModel, Drilling.UI.Menu.Menus.CMenuMain?) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| startedScreen | Drilling.UI.Menu.Menus.CScreenViewModel | None | False /  |
| startedMainOperating | Drilling.UI.Menu.Menus.CMenuMain? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:840–840](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L840-L840) | IsMainLiveStatusTargetCurrent | False |
| [Drilling.UI/CRootView.cs:845–845](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L845-L845) | IsMainLiveStatusTargetCurrent | False |
| [Drilling.UI/CRootView.cs:849–849](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L849-L849) | IsMainLiveStatusTargetCurrent | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 969 | ReferenceEquals | resolved | bool object.ReferenceEquals(object?, object?) |
| 969 | ReferenceEquals | resolved | bool object.ReferenceEquals(object?, object?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 969 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(CurrentScreen, startedScreen) |
| 969 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(CurrentScreen.MainOperating, startedMainOperating) |
| 969 | return | 호출자에게 값 또는 제어를 반환합니다: return SelectedMenu.Menu == EN_MENU.Main && ReferenceEquals(CurrentScreen, startedScreen) && ReferenceEquals(CurrentScreen.MainOperating, startedMainOperating); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReportMainLiveStatusError` · L972–987

[Drilling.UI/CRootView.cs:972–987](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L972-L987)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ReportMainLiveStatusError(System.Exception) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| exception | System.Exception | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:851–851](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L851-L851) | ReportMainLiveStatusError | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 974 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 975 | exception.GetType | resolved | System.Type System.Exception.GetType() |
| 976 | detail.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 976 | HasElapsed | resolved | bool Drilling.UI.CRootView.HasElapsed(long, long, System.TimeSpan) · Drilling.UI/CRootView.cs:1047 |
| 986 | QueueStationStateLog | resolved | void Drilling.UI.CRootView.QueueStationStateLog(string, string, string) · Drilling.UI/CRootView.cs:1029 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 974 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 974 | local-declaration | 지역 변수를 선언합니다: var nowTimestamp = Stopwatch.GetTimestamp(); |
| 974 | variable-initializer | 변수의 초기값을 지정합니다: nowTimestamp = Stopwatch.GetTimestamp() |
| 975 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: exception.GetType() |
| 975 | local-declaration | 지역 변수를 선언합니다: var detail = $"{exception.GetType().Name}: {exception.Message}"; |
| 975 | variable-initializer | 변수의 초기값을 지정합니다: detail = $"{exception.GetType().Name}: {exception.Message}" |
| 976 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: detail.Equals(_lastMainLiveStatusError, StringComparison.Ordinal) |
| 976 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: HasElapsed(_lastMainLiveStatusErrorReportTimestamp, nowTimestamp, ErrorReportInterval) |
| 976 | local-declaration | 지역 변수를 선언합니다: var shouldLog = !detail.Equals(_lastMainLiveStatusError, StringComparison.Ordinal) &#124;&#124; HasElapsed(_lastMainLiveStatusErrorReportTimestamp, nowTimestamp, ErrorReportInterval); |
| 976 | variable-initializer | 변수의 초기값을 지정합니다: shouldLog = !detail.Equals(_lastMainLiveStatusError, StringComparison.Ordinal) &#124;&#124; HasElapsed(_lastMainLiveStatusErrorReportTimestamp, nowTimestamp, ErrorReportInterval) |
| 977 | assignment | 값을 대상에 대입합니다: _mainLiveStatusErrorActive = true |
| 978 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Main live status refresh failed. {detail}" |
| 979 | if | 조건에 따라 분기합니다: if (!shouldLog) |
| 981 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 984 | assignment | 값을 대상에 대입합니다: _lastMainLiveStatusError = detail |
| 985 | assignment | 값을 대상에 대입합니다: _lastMainLiveStatusErrorReportTimestamp = nowTimestamp |
| 986 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueStationStateLog("MAIN_LIVE_STATUS", "ERROR", detail) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReportMainLiveStatusError"]
 N0["L979 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReportStaleMainLiveStatusError` · L989–998

[Drilling.UI/CRootView.cs:989–998](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L989-L998)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ReportStaleMainLiveStatusError(System.Exception) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| exception | System.Exception | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:855–855](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L855-L855) | ReportStaleMainLiveStatusError | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 996 | exception.GetType | resolved | System.Type System.Exception.GetType() |
| 997 | QueueStationStateLog | resolved | void Drilling.UI.CRootView.QueueStationStateLog(string, string, string) · Drilling.UI/CRootView.cs:1029 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 991 | if | 조건에 따라 분기합니다: if (exception is OperationCanceledException) |
| 993 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 996 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: exception.GetType() |
| 996 | local-declaration | 지역 변수를 선언합니다: var detail = $"{exception.GetType().Name}: {exception.Message}"; |
| 996 | variable-initializer | 변수의 초기값을 지정합니다: detail = $"{exception.GetType().Name}: {exception.Message}" |
| 997 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueStationStateLog("MAIN_LIVE_STATUS", "STALE_ERROR", $"Stale Main live status failure ignored for UI. {detail}") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReportStaleMainLiveStatusError"]
 N0["L991 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReportMainLiveStatusRestored` · L1000–1011

[Drilling.UI/CRootView.cs:1000–1011](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1000-L1011)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ReportMainLiveStatusRestored() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:842–842](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L842-L842) | ReportMainLiveStatusRestored | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1010 | QueueStationStateLog | resolved | void Drilling.UI.CRootView.QueueStationStateLog(string, string, string) · Drilling.UI/CRootView.cs:1029 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1002 | if | 조건에 따라 분기합니다: if (!_mainLiveStatusErrorActive) |
| 1004 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1007 | assignment | 값을 대상에 대입합니다: _mainLiveStatusErrorActive = false |
| 1008 | assignment | 값을 대상에 대입합니다: _lastMainLiveStatusError = "" |
| 1009 | assignment | 값을 대상에 대입합니다: StatusMessage = "Main live status refresh restored." |
| 1010 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueStationStateLog("MAIN_LIVE_STATUS", "INFO", "Main live status refresh restored.") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReportMainLiveStatusRestored"]
 N0["L1002 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReportClockTickError` · L1013–1027

[Drilling.UI/CRootView.cs:1013–1027](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1013-L1027)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ReportClockTickError(System.Exception) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| exception | System.Exception | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1963–1963](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1963-L1963) | ReportClockTickError | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1015 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 1016 | exception.GetType | resolved | System.Type System.Exception.GetType() |
| 1017 | detail.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1017 | HasElapsed | resolved | bool Drilling.UI.CRootView.HasElapsed(long, long, System.TimeSpan) · Drilling.UI/CRootView.cs:1047 |
| 1026 | QueueStationStateLog | resolved | void Drilling.UI.CRootView.QueueStationStateLog(string, string, string) · Drilling.UI/CRootView.cs:1029 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1015 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 1015 | local-declaration | 지역 변수를 선언합니다: var nowTimestamp = Stopwatch.GetTimestamp(); |
| 1015 | variable-initializer | 변수의 초기값을 지정합니다: nowTimestamp = Stopwatch.GetTimestamp() |
| 1016 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: exception.GetType() |
| 1016 | local-declaration | 지역 변수를 선언합니다: var detail = $"{exception.GetType().Name}: {exception.Message}"; |
| 1016 | variable-initializer | 변수의 초기값을 지정합니다: detail = $"{exception.GetType().Name}: {exception.Message}" |
| 1017 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: detail.Equals(_lastClockTickError, StringComparison.Ordinal) |
| 1017 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: HasElapsed(_lastClockTickErrorReportTimestamp, nowTimestamp, ErrorReportInterval) |
| 1017 | local-declaration | 지역 변수를 선언합니다: var shouldLog = !detail.Equals(_lastClockTickError, StringComparison.Ordinal) &#124;&#124; HasElapsed(_lastClockTickErrorReportTimestamp, nowTimestamp, ErrorReportInterval); |
| 1017 | variable-initializer | 변수의 초기값을 지정합니다: shouldLog = !detail.Equals(_lastClockTickError, StringComparison.Ordinal) &#124;&#124; HasElapsed(_lastClockTickErrorReportTimestamp, nowTimestamp, ErrorReportInterval) |
| 1018 | assignment | 값을 대상에 대입합니다: StatusMessage = $"UI timer refresh failed. {detail}" |
| 1019 | if | 조건에 따라 분기합니다: if (!shouldLog) |
| 1021 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1024 | assignment | 값을 대상에 대입합니다: _lastClockTickError = detail |
| 1025 | assignment | 값을 대상에 대입합니다: _lastClockTickErrorReportTimestamp = nowTimestamp |
| 1026 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: QueueStationStateLog("UI_CLOCK", "ERROR", detail) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReportClockTickError"]
 N0["L1019 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `QueueStationStateLog` · L1029–1045

[Drilling.UI/CRootView.cs:1029–1045](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1029-L1045)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.QueueStationStateLog(string, string, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| stateName | string | None | False /  |
| action | string | None | False /  |
| detail | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:986–986](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L986-L986) | QueueStationStateLog | False |
| [Drilling.UI/CRootView.cs:997–997](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L997-L997) | QueueStationStateLog | False |
| [Drilling.UI/CRootView.cs:1010–1010](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1010-L1010) | QueueStationStateLog | False |
| [Drilling.UI/CRootView.cs:1026–1026](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1026-L1026) | QueueStationStateLog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1031 | _manager.Log | resolved | CLogManager Drilling.Common.Managers.CManager.Log() · Drilling.Common/Managers/CManager.cs:388 |
| 1044 | Task.Run | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Run(System.Action) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1031 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log() |
| 1031 | local-declaration | 지역 변수를 선언합니다: var logManager = _manager.Log(); |
| 1031 | variable-initializer | 변수의 초기값을 지정합니다: logManager = _manager.Log() |
| 1044 | assignment | 값을 대상에 대입합니다: _ = Task.Run(WriteStationStateLog) |
| 1044 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(WriteStationStateLog) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `WriteStationStateLog` · L1032–1042

[Drilling.UI/CRootView.cs:1032–1042](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1032-L1042)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void WriteStationStateLog() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1036 | logManager.WriteStationState | unresolved | None |
| 1040 | Debug.WriteLine | resolved | void System.Diagnostics.Debug.WriteLine(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1034 | try | 예외 처리 범위입니다: try |
| 1036 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: logManager.WriteStationState("UI", stateName, action, detail) |
| 1038 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 1040 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Debug.WriteLine($"Station state log failed. {exception}") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WriteStationStateLog"]
 N0["L1034 try"]
 M -->|포함| N0
 N1["L1038 catch"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `HasElapsed` · L1047–1057

[Drilling.UI/CRootView.cs:1047–1057](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1047-L1057)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.HasElapsed(long, long, System.TimeSpan) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| lastTimestamp | long | None | False /  |
| currentTimestamp | long | None | False /  |
| interval | System.TimeSpan | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:803–803](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L803-L803) | HasElapsed | False |
| [Drilling.UI/CRootView.cs:976–976](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L976-L976) | HasElapsed | False |
| [Drilling.UI/CRootView.cs:1017–1017](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1017-L1017) | HasElapsed | False |
| [Drilling.UI/CRootView.cs:1934–1934](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1934-L1934) | HasElapsed | False |
| [Drilling.UI/CRootView.cs:1936–1936](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1936-L1936) | HasElapsed | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1049 | if | 조건에 따라 분기합니다: if (lastTimestamp <= 0) |
| 1051 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 1054 | local-declaration | 지역 변수를 선언합니다: var elapsedTicks = currentTimestamp - lastTimestamp; |
| 1054 | variable-initializer | 변수의 초기값을 지정합니다: elapsedTicks = currentTimestamp - lastTimestamp |
| 1055 | local-declaration | 지역 변수를 선언합니다: var requiredTicks = interval.TotalSeconds * Stopwatch.Frequency; |
| 1055 | variable-initializer | 변수의 초기값을 지정합니다: requiredTicks = interval.TotalSeconds * Stopwatch.Frequency |
| 1056 | return | 호출자에게 값 또는 제어를 반환합니다: return elapsedTicks >= requiredTicks; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["HasElapsed"]
 N0["L1049 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshShellCommunicationStatus` · L1059–1072

[Drilling.UI/CRootView.cs:1059–1072](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1059-L1072)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshShellCommunicationStatus(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:806–806](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L806-L806) | RefreshShellCommunicationStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1061 | _interfaceManager.GetCommunicationStatus | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> Drilling.Common.Interface.CInterfaceManager.GetCommunicationStatus(System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:502 |
| 1062 | _interfaceManager.GetInterfaceCommunicationList | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.Common.Interface.CInterfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE?) · Drilling.Common/Interface/CInterfaceManager.cs:472 |
| 1065 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1067 | NormalizeCommunicationStatuses | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> Drilling.UI.CRootView.NormalizeCommunicationStatuses(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>) · Drilling.UI/CRootView.cs:2361 |
| 1069 | RefreshOperationModeAccess | resolved | void Drilling.UI.CRootView.RefreshOperationModeAccess() · Drilling.UI/CRootView.cs:718 |
| 1070 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1061 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetCommunicationStatus(cancellationToken) |
| 1061 | local-declaration | 지역 변수를 선언합니다: var modules = _interfaceManager.GetCommunicationStatus(cancellationToken); |
| 1061 | variable-initializer | 변수의 초기값을 지정합니다: modules = _interfaceManager.GetCommunicationStatus(cancellationToken) |
| 1062 | assignment | 값을 대상에 대입합니다: _interfaceCommStatuses = _interfaceManager.GetInterfaceCommunicationList() |
| 1062 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceCommunicationList() |
| 1063 | assignment | 값을 대상에 대입합니다: _systemStatus = _systemStatus with { CurrentRecipeId = string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId, OperationMode = _operationMode, Modules = NormalizeCommunicationStatuses(modules) } |
| 1065 | assignment | 값을 대상에 대입합니다: CurrentRecipeId = string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId |
| 1065 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) |
| 1065 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId |
| 1066 | assignment | 값을 대상에 대입합니다: OperationMode = _operationMode |
| 1067 | assignment | 값을 대상에 대입합니다: Modules = NormalizeCommunicationStatuses(modules) |
| 1067 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeCommunicationStatuses(modules) |
| 1069 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshOperationModeAccess() |
| 1070 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 1071 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.CompletedTask; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetSystemStatusSnapshot` · L1074–1090

[Drilling.UI/CRootView.cs:1074–1090](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1074-L1090)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT> Drilling.UI.CRootView.GetSystemStatusSnapshot(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:524–524](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L524-L524) | GetSystemStatusSnapshot | False |
| [Drilling.UI/CRootView.cs:759–759](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L759-L759) | GetSystemStatusSnapshot | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1076 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1086 | Task.Run | resolved | System.Threading.Tasks.Task<Drilling.UI.ST_SYSTEM_STATUS_SOURCE> System.Threading.Tasks.Task.Run<Drilling.UI.ST_SYSTEM_STATUS_SOURCE>(System.Func<Drilling.UI.ST_SYSTEM_STATUS_SOURCE>, System.Threading.CancellationToken) |
| 1088 | new ST_SYSTEM_STATUS | resolved | Drilling.Common.Managers.ST_SYSTEM_STATUS.ST_SYSTEM_STATUS(string, Drilling.Common.Managers.EN_SYSTEM_MODE, Drilling.Common.Alarm.EN_ALARM_STATE, Drilling.Common.Managers.EN_PM_LOCK_STATE, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>) · Drilling.Common/Managers/CManager.cs:746 |
| 1089 | new ST_SYSTEM_STATUS_SNAPSHOT | resolved | Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT.ST_SYSTEM_STATUS_SNAPSHOT(Drilling.Common.Managers.ST_SYSTEM_STATUS, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>) · Drilling.UI/CRootView.cs:2960 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1076 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) |
| 1076 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId |
| 1076 | local-declaration | 지역 변수를 선언합니다: var currentRecipeId = string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId; |
| 1076 | variable-initializer | 변수의 초기값을 지정합니다: currentRecipeId = string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId |
| 1077 | local-declaration | 지역 변수를 선언합니다: var operationMode = _operationMode; |
| 1077 | variable-initializer | 변수의 초기값을 지정합니다: operationMode = _operationMode |
| 1078 | conditional-expression | 조건에 따라 결과식을 선택합니다: _pmLockStatus.IsLocked ? EN_PM_LOCK_STATE.Locked : EN_PM_LOCK_STATE.Released |
| 1078 | local-declaration | 지역 변수를 선언합니다: var pmLockState = _pmLockStatus.IsLocked ? EN_PM_LOCK_STATE.Locked : EN_PM_LOCK_STATE.Released; |
| 1078 | variable-initializer | 변수의 초기값을 지정합니다: pmLockState = _pmLockStatus.IsLocked ? EN_PM_LOCK_STATE.Locked : EN_PM_LOCK_STATE.Released |
| 1086 | await | 비동기 완료를 기다립니다: await Task.Run(ReadSystemStatusSource, cancellationToken) |
| 1086 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(ReadSystemStatusSource, cancellationToken) |
| 1086 | local-declaration | 지역 변수를 선언합니다: var source = await Task.Run(ReadSystemStatusSource, cancellationToken); |
| 1086 | variable-initializer | 변수의 초기값을 지정합니다: source = await Task.Run(ReadSystemStatusSource, cancellationToken) |
| 1087 | local-declaration | 지역 변수를 선언합니다: var alarms = _alarmManager.CurAlarm; |
| 1087 | variable-initializer | 변수의 초기값을 지정합니다: alarms = _alarmManager.CurAlarm |
| 1088 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_SYSTEM_STATUS(source.CurrentRecipeId, source.OperationMode, alarms.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear, source.PmLockState, source.Modules) |
| 1088 | conditional-expression | 조건에 따라 결과식을 선택합니다: alarms.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear |
| 1088 | local-declaration | 지역 변수를 선언합니다: var status = new ST_SYSTEM_STATUS(source.CurrentRecipeId, source.OperationMode, alarms.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear, source.PmLockState, source.Modules); |
| 1088 | variable-initializer | 변수의 초기값을 지정합니다: status = new ST_SYSTEM_STATUS(source.CurrentRecipeId, source.OperationMode, alarms.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear, source.PmLockState, source.Modules) |
| 1089 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_SYSTEM_STATUS_SNAPSHOT(status, source.InterfaceCommunicationStatuses) |
| 1089 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_SYSTEM_STATUS_SNAPSHOT(status, source.InterfaceCommunicationStatuses); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ReadSystemStatusSource` · L1079–1084

[Drilling.UI/CRootView.cs:1079–1084](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1079-L1084)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.ST_SYSTEM_STATUS_SOURCE ReadSystemStatusSource() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.UI.ST_SYSTEM_STATUS_SOURCE |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1081 | _interfaceManager.GetCommunicationStatus | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> Drilling.Common.Interface.CInterfaceManager.GetCommunicationStatus(System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:502 |
| 1082 | _interfaceManager.GetInterfaceCommunicationList | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.Common.Interface.CInterfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE?) · Drilling.Common/Interface/CInterfaceManager.cs:472 |
| 1083 | new ST_SYSTEM_STATUS_SOURCE | resolved | Drilling.UI.ST_SYSTEM_STATUS_SOURCE.ST_SYSTEM_STATUS_SOURCE(string, Drilling.Common.Managers.EN_SYSTEM_MODE, Drilling.Common.Managers.EN_PM_LOCK_STATE, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>) · Drilling.UI/CRootView.cs:2953 |
| 1083 | NormalizeCommunicationStatuses | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> Drilling.UI.CRootView.NormalizeCommunicationStatuses(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>) · Drilling.UI/CRootView.cs:2361 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1081 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetCommunicationStatus(cancellationToken) |
| 1081 | local-declaration | 지역 변수를 선언합니다: var modules = _interfaceManager.GetCommunicationStatus(cancellationToken); |
| 1081 | variable-initializer | 변수의 초기값을 지정합니다: modules = _interfaceManager.GetCommunicationStatus(cancellationToken) |
| 1082 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceCommunicationList() |
| 1082 | local-declaration | 지역 변수를 선언합니다: var interfaceCommStatuses = _interfaceManager.GetInterfaceCommunicationList(); |
| 1082 | variable-initializer | 변수의 초기값을 지정합니다: interfaceCommStatuses = _interfaceManager.GetInterfaceCommunicationList() |
| 1083 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_SYSTEM_STATUS_SOURCE(currentRecipeId, operationMode, pmLockState, NormalizeCommunicationStatuses(modules), interfaceCommStatuses) |
| 1083 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeCommunicationStatuses(modules) |
| 1083 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_SYSTEM_STATUS_SOURCE(currentRecipeId, operationMode, pmLockState, NormalizeCommunicationStatuses(modules), interfaceCommStatuses); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ApplySystemStatusSnapshot` · L1092–1102

[Drilling.UI/CRootView.cs:1092–1102](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1092-L1102)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ApplySystemStatusSnapshot(Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT, bool) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| snapshot | Drilling.UI.ST_SYSTEM_STATUS_SNAPSHOT | None | False /  |
| refreshOperationModeAccess | bool | None | True / true |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:524–524](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L524-L524) | ApplySystemStatusSnapshot | False |
| [Drilling.UI/CRootView.cs:759–759](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L759-L759) | ApplySystemStatusSnapshot | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1098 | RefreshOperationModeAccess | resolved | void Drilling.UI.CRootView.RefreshOperationModeAccess() · Drilling.UI/CRootView.cs:718 |
| 1101 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1094 | assignment | 값을 대상에 대입합니다: _systemStatus = snapshot.Status |
| 1095 | assignment | 값을 대상에 대입합니다: _interfaceCommStatuses = snapshot.InterfaceCommunicationStatuses |
| 1096 | if | 조건에 따라 분기합니다: if (refreshOperationModeAccess) |
| 1098 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshOperationModeAccess() |
| 1101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ApplySystemStatusSnapshot"]
 N0["L1096 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetPMLockStatus` · L1104–1107

[Drilling.UI/CRootView.cs:1104–1107](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1104-L1107)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_PM_LOCK_STATUS Drilling.UI.CRootView.GetPMLockStatus() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Managers.ST_PM_LOCK_STATUS |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1106 | return | 호출자에게 값 또는 제어를 반환합니다: return _pmLockStatus; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EnterPMLock` · L1109–1117

[Drilling.UI/CRootView.cs:1109–1117](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1109-L1117)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.EnterPMLock() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1116 | new ST_PM_LOCK_STATUS | resolved | Drilling.Common.Managers.ST_PM_LOCK_STATUS.ST_PM_LOCK_STATUS(bool, System.DateTimeOffset?) · Drilling.Common/Managers/CManager.cs:762 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1111 | if | 조건에 따라 분기합니다: if (_pmLockStatus.IsLocked) |
| 1113 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1116 | assignment | 값을 대상에 대입합니다: _pmLockStatus = new ST_PM_LOCK_STATUS(true, DateTimeOffset.Now) |
| 1116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_PM_LOCK_STATUS(true, DateTimeOffset.Now) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EnterPMLock"]
 N0["L1111 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Replace` · L1119–1132

[Drilling.UI/CRootView.cs:1119–1132](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1119-L1132)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.Replace<T>(System.Collections.ObjectModel.ObservableCollection<T>, System.Collections.Generic.IEnumerable<T>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| target | System.Collections.ObjectModel.ObservableCollection<T> | None | False /  |
| items | System.Collections.Generic.IEnumerable<T> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:742–742](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L742-L742) | Replace | False |
| [Drilling.UI/CRootView.cs:743–743](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L743-L743) | Replace | False |
| [Drilling.UI/CRootView.cs:744–744](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L744-L744) | Replace | False |
| [Drilling.UI/CRootView.cs:745–745](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L745-L745) | Replace | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1121 | items.ToArray | resolved | T[] System.Collections.Generic.IEnumerable<T>.ToArray<T>() |
| 1122 | target.SequenceEqual | resolved | bool System.Collections.Generic.IEnumerable<T>.SequenceEqual<T>(System.Collections.Generic.IEnumerable<T>) |
| 1127 | target.Clear | resolved | void System.Collections.ObjectModel.Collection<T>.Clear() |
| 1130 | target.Add | resolved | void System.Collections.ObjectModel.Collection<T>.Add(T) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1121 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: items.ToArray() |
| 1121 | local-declaration | 지역 변수를 선언합니다: var replacement = items as IReadOnlyList<T> ?? items.ToArray(); |
| 1121 | variable-initializer | 변수의 초기값을 지정합니다: replacement = items as IReadOnlyList<T> ?? items.ToArray() |
| 1122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: target.SequenceEqual(replacement) |
| 1122 | if | 조건에 따라 분기합니다: if (target.SequenceEqual(replacement)) |
| 1124 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: target.Clear() |
| 1128 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in replacement) |
| 1130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: target.Add(item) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Replace"]
 N0["L1122 if"]
 M -->|포함| N0
 N1["L1128 foreach"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateHeaderStatusItems` · L1134–1151

[Drilling.UI/CRootView.cs:1134–1151](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1134-L1151)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateHeaderStatusItems() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:741–741](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L741-L741) | CreateHeaderStatusItems | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1137 | AlarmStateValue | resolved | string Drilling.UI.CRootView.AlarmStateValue(Drilling.Common.Alarm.EN_ALARM_STATE) · Drilling.UI/CRootView.cs:2546 |
| 1138 | new List<ST_HEADER_STATUS_ITEM> | resolved | System.Collections.Generic.List<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.List() |
| 1140 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1140 | OperationModeHeaderValue | resolved | string Drilling.UI.CRootView.OperationModeHeaderValue(Drilling.Common.Managers.EN_SYSTEM_MODE, bool) · Drilling.UI/CRootView.cs:2535 |
| 1140 | OperationModeState | resolved | string Drilling.UI.CRootView.OperationModeState(bool) · Drilling.UI/CRootView.cs:2541 |
| 1141 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1141 | GetHeaderRecipeId | resolved | string Drilling.UI.CRootView.GetHeaderRecipeId(Drilling.Common.Managers.ST_SYSTEM_STATUS) · Drilling.UI/CRootView.cs:2270 |
| 1148 | items.AddRange | resolved | void System.Collections.Generic.List<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.AddRange(System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>) |
| 1148 | HeaderModules.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.EN_EQP_MODULE>.Select<Drilling.Common.Interface.EN_EQP_MODULE, Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>(System.Func<Drilling.Common.Interface.EN_EQP_MODULE, Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>) |
| 1149 | items.Add | resolved | void System.Collections.Generic.List<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM>.Add(Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM) |
| 1149 | new ST_HEADER_STATUS_ITEM | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1136 | local-declaration | 지역 변수를 선언합니다: var status = _systemStatus; |
| 1136 | variable-initializer | 변수의 초기값을 지정합니다: status = _systemStatus |
| 1137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AlarmStateValue(_alarmManager.CurAlarm.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear) |
| 1137 | conditional-expression | 조건에 따라 결과식을 선택합니다: _alarmManager.CurAlarm.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear |
| 1137 | local-declaration | 지역 변수를 선언합니다: var alarmState = AlarmStateValue(_alarmManager.CurAlarm.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear); |
| 1137 | variable-initializer | 변수의 초기값을 지정합니다: alarmState = AlarmStateValue(_alarmManager.CurAlarm.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear) |
| 1138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_HEADER_STATUS_ITEM> { new("MODE", OperationModeHeaderValue(status.OperationMode, IsSimulationEnvironment), OperationModeState(IsSimulationEnvironment), OpenCommand: ToggleOperationModeCommand), new("RECIPE", … |
| 1138 | local-declaration | 지역 변수를 선언합니다: var items = new List<ST_HEADER_STATUS_ITEM> { new("MODE", OperationModeHeaderValue(status.OperationMode, IsSimulationEnvironment), OperationModeState(IsSimulationEnvironment), OpenCommand: ToggleOperationModeCommand), new("RECIPE" |
| 1138 | variable-initializer | 변수의 초기값을 지정합니다: items = new List<ST_HEADER_STATUS_ITEM> { new("MODE", OperationModeHeaderValue(status.OperationMode, IsSimulationEnvironment), OperationModeState(IsSimulationEnvironment), OpenCommand: ToggleOperationModeCommand), new("RECIPE", Ge |
| 1140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("MODE", OperationModeHeaderValue(status.OperationMode, IsSimulationEnvironment), OperationModeState(IsSimulationEnvironment), OpenCommand: ToggleOperationModeCommand) |
| 1140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OperationModeHeaderValue(status.OperationMode, IsSimulationEnvironment) |
| 1140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OperationModeState(IsSimulationEnvironment) |
| 1141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("RECIPE", GetHeaderRecipeId(status), "RECIPE") |
| 1141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetHeaderRecipeId(status) |
| 1148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: items.AddRange(HeaderModules.Select(SelectItem)) |
| 1148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: HeaderModules.Select(SelectItem) |
| 1149 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: items.Add(new ST_HEADER_STATUS_ITEM("ALARM", alarmState, alarmState, OpenCommand: HeaderAlarmResetCommand)) |
| 1149 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_HEADER_STATUS_ITEM("ALARM", alarmState, alarmState, OpenCommand: HeaderAlarmResetCommand) |
| 1150 | return | 호출자에게 값 또는 제어를 반환합니다: return items; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectItem` · L1143–1146

[Drilling.UI/CRootView.cs:1143–1146](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1143-L1146)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM SelectItem(Drilling.Common.Interface.EN_EQP_MODULE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1145 | ModuleHeader | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM Drilling.UI.CRootView.ModuleHeader(Drilling.Common.Managers.ST_SYSTEM_STATUS, Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2376 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ModuleHeader(status, module) |
| 1145 | return | 호출자에게 값 또는 제어를 반환합니다: return ModuleHeader(status, module); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsHeaderContextStatusItem` · L1153–1156

[Drilling.UI/CRootView.cs:1153–1156](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1153-L1156)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsHeaderContextStatusItem(Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:744–744](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L744-L744) | IsHeaderContextStatusItem | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1155 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1155 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1155 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals("MODE", StringComparison.OrdinalIgnoreCase) |
| 1155 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals("RECIPE", StringComparison.OrdinalIgnoreCase) |
| 1155 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Name.Equals("MODE", StringComparison.OrdinalIgnoreCase) &#124;&#124; item.Name.Equals("RECIPE", StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateFooterStatusItems` · L1158–1229

[Drilling.UI/CRootView.cs:1158–1229](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1158-L1229)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateFooterStatusItems(Drilling.UI.Menu.Menus.EN_MENU) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:745–745](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L745-L745) | CreateFooterStatusItems | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1163 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1164 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1165 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1166 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1167 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1178 | .AllManagedItems.Any | resolved | bool System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_RECIPE_PARAMETER_EDITOR_ITEM>.Any<Drilling.UI.Menu.Menus.ST_RECIPE_PARAMETER_EDITOR_ITEM>(System.Func<Drilling.UI.Menu.Menus.ST_RECIPE_PARAMETER_EDITOR_ITEM, bool>) |
| 1180 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1181 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1181 | GetSelectedRecipeFileText | resolved | string Drilling.UI.CRootView.GetSelectedRecipeFileText() · Drilling.UI/CRootView.cs:2295 |
| 1182 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1193 | .AllParameterRows.Count | resolved | int System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_SYSTEM_PARAMETER_ROW>.Count<Drilling.UI.Menu.Menus.ST_SYSTEM_PARAMETER_ROW>(System.Func<Drilling.UI.Menu.Menus.ST_SYSTEM_PARAMETER_ROW, bool>) |
| 1195 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1196 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1197 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1203 | AlarmStateValue | resolved | string Drilling.UI.CRootView.AlarmStateValue(Drilling.Common.Alarm.EN_ALARM_STATE) · Drilling.UI/CRootView.cs:2546 |
| 1204 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1204 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1204 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1209 | CreateMonitorFooterStatusItems | resolved | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateMonitorFooterStatusItems() · Drilling.UI/CRootView.cs:2310 |
| 1214 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1214 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1214 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1219 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1219 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1219 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1225 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1225 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1228 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1228 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1228 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 1228 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1160 | if | 조건에 따라 분기합니다: if (menu == EN_MENU.Manual) |
| 1162 | return | 호출자에게 값 또는 제어를 반환합니다: return[ new("STATE", "Manual Setting Loaded", "SIM"), new("HEAD", $"H{_selectedHeadNo:00} Selected", "SIM"), new("SCRIPT", "Script Created", "ONLINE"), new("TASK", "Task Running", "WAIT"), new("SIM", "Simulation PASS", "ONLINE") ] |
| 1163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("STATE", "Manual Setting Loaded", "SIM") |
| 1164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("HEAD", $"H{_selectedHeadNo:00} Selected", "SIM") |
| 1165 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCRIPT", "Script Created", "ONLINE") |
| 1166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("TASK", "Task Running", "WAIT") |
| 1167 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 1176 | if | 조건에 따라 분기합니다: if (menu == EN_MENU.Recipe) |
| 1178 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .AllManagedItems.Any(IsIsEdited) |
| 1178 | local-declaration | 지역 변수를 선언합니다: var hasRecipeChanges = CurrentScreen.Recipe?.AllManagedItems.Any(IsIsEdited) == true; |
| 1178 | variable-initializer | 변수의 초기값을 지정합니다: hasRecipeChanges = CurrentScreen.Recipe?.AllManagedItems.Any(IsIsEdited) == true |
| 1179 | return | 호출자에게 값 또는 제어를 반환합니다: return[ new("STATE", hasRecipeChanges ? "Recipe Modified" : "Recipe Loaded", hasRecipeChanges ? "WAIT" : "ONLINE"), new("RECIPE", GetSelectedRecipeFileText(), "SIM"), new("SIM", "Simulation PASS", "ONLINE") ]; |
| 1180 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("STATE", hasRecipeChanges ? "Recipe Modified" : "Recipe Loaded", hasRecipeChanges ? "WAIT" : "ONLINE") |
| 1180 | conditional-expression | 조건에 따라 결과식을 선택합니다: hasRecipeChanges ? "Recipe Modified" : "Recipe Loaded" |
| 1180 | conditional-expression | 조건에 따라 결과식을 선택합니다: hasRecipeChanges ? "WAIT" : "ONLINE" |
| 1181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("RECIPE", GetSelectedRecipeFileText(), "SIM") |
| 1181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSelectedRecipeFileText() |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 1191 | if | 조건에 따라 분기합니다: if (menu == EN_MENU.Setting) |
| 1193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .AllParameterRows.Count(IsIsModified) |
| 1193 | local-declaration | 지역 변수를 선언합니다: var modifiedCount = CurrentScreen.Setting?.AllParameterRows.Count(IsIsModified) ?? 0; |
| 1193 | variable-initializer | 변수의 초기값을 지정합니다: modifiedCount = CurrentScreen.Setting?.AllParameterRows.Count(IsIsModified) ?? 0 |
| 1194 | return | 호출자에게 값 또는 제어를 반환합니다: return[ new("STATE", modifiedCount > 0 ? "SETTING Modified" : "SETTING Loaded", modifiedCount > 0 ? "WAIT" : "ONLINE"), new("GROUP", $"{_selectedSettingTab} / {_selectedSettingGroup}", "SIM"), new("SIM", "Simulation PASS", "ONLINE |
| 1195 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("STATE", modifiedCount > 0 ? "SETTING Modified" : "SETTING Loaded", modifiedCount > 0 ? "WAIT" : "ONLINE") |
| 1195 | conditional-expression | 조건에 따라 결과식을 선택합니다: modifiedCount > 0 ? "SETTING Modified" : "SETTING Loaded" |
| 1195 | conditional-expression | 조건에 따라 결과식을 선택합니다: modifiedCount > 0 ? "WAIT" : "ONLINE" |
| 1196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("GROUP", $"{_selectedSettingTab} / {_selectedSettingGroup}", "SIM") |
| 1197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 1201 | if | 조건에 따라 분기합니다: if (menu == EN_MENU.Alarm) |
| 1203 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AlarmStateValue(_systemStatus.AlarmState) |
| 1203 | local-declaration | 지역 변수를 선언합니다: var alarmState = AlarmStateValue(_systemStatus.AlarmState); |
| 1203 | variable-initializer | 변수의 초기값을 지정합니다: alarmState = AlarmStateValue(_systemStatus.AlarmState) |
| 1204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("STATE", $"Alarm {alarmState}", alarmState) |
| 1204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("BUZZER", "Buzzer OFF", "SIM") |
| 1204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 1204 | return | 호출자에게 값 또는 제어를 반환합니다: return[new("STATE", $"Alarm {alarmState}", alarmState), new("BUZZER", "Buzzer OFF", "SIM"), new("SIM", "Simulation PASS", "ONLINE")]; |
| 1207 | if | 조건에 따라 분기합니다: if (menu == EN_MENU.Monitor) |
| 1209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateMonitorFooterStatusItems() |
| 1209 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateMonitorFooterStatusItems(); |
| 1212 | if | 조건에 따라 분기합니다: if (menu == EN_MENU.Review) |
| 1214 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "REVIEW / INSPECTION", "SIM") |
| 1214 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("POINT", "Review Standby", "WAIT") |
| 1214 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 1214 | return | 호출자에게 값 또는 제어를 반환합니다: return[new("SCREEN", "REVIEW / INSPECTION", "SIM"), new("POINT", "Review Standby", "WAIT"), new("SIM", "Simulation PASS", "ONLINE")]; |
| 1217 | if | 조건에 따라 분기합니다: if (menu == EN_MENU.Correction) |
| 1219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "CORRECTION / OFFSET", "SIM") |
| 1219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("TABLE", "Correction Standby", "WAIT") |
| 1219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 1219 | return | 호출자에게 값 또는 제어를 반환합니다: return[new("SCREEN", "CORRECTION / OFFSET", "SIM"), new("TABLE", "Correction Standby", "WAIT"), new("SIM", "Simulation PASS", "ONLINE")]; |
| 1222 | if | 조건에 따라 분기합니다: if (menu == EN_MENU.Pm) |
| 1224 | local-declaration | 지역 변수를 선언합니다: var isLocked = _systemStatus.PMLockState == EN_PM_LOCK_STATE.Locked; |
| 1224 | variable-initializer | 변수의 초기값을 지정합니다: isLocked = _systemStatus.PMLockState == EN_PM_LOCK_STATE.Locked |
| 1225 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("PM", isLocked ? "PM Lock Active" : "PM Lock Ready", isLocked ? "WARN" : "ONLINE") |
| 1225 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("OPERATION", isLocked ? "Operation Disabled" : "Operation Enabled", isLocked ? "OCCUR" : "ONLINE") |
| 1225 | conditional-expression | 조건에 따라 결과식을 선택합니다: isLocked ? "PM Lock Active" : "PM Lock Ready" |
| 1225 | conditional-expression | 조건에 따라 결과식을 선택합니다: isLocked ? "WARN" : "ONLINE" |
| 1225 | conditional-expression | 조건에 따라 결과식을 선택합니다: isLocked ? "Operation Disabled" : "Operation Enabled" |
| 1225 | conditional-expression | 조건에 따라 결과식을 선택합니다: isLocked ? "OCCUR" : "ONLINE" |
| 1225 | return | 호출자에게 값 또는 제어를 반환합니다: return[new("PM", isLocked ? "PM Lock Active" : "PM Lock Ready", isLocked ? "WARN" : "ONLINE"), new("OPERATION", isLocked ? "Operation Disabled" : "Operation Enabled", isLocked ? "OCCUR" : "ONLINE")]; |
| 1228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCRIPT", "Script Created", "ONLINE") |
| 1228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("TASK", "Task Running", "SIM") |
| 1228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 1228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("MODE", "Auto Mode", "READY") |
| 1228 | return | 호출자에게 값 또는 제어를 반환합니다: return[new("SCRIPT", "Script Created", "ONLINE"), new("TASK", "Task Running", "SIM"), new("SIM", "Simulation PASS", "ONLINE"), new("MODE", "Auto Mode", "READY")]; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateFooterStatusItems"]
 N0["L1160 if"]
 M -->|포함| N0
 N1["L1176 if"]
 M -->|포함| N1
 N2["L1191 if"]
 M -->|포함| N2
 N3["L1201 if"]
 M -->|포함| N3
 N4["L1207 if"]
 M -->|포함| N4
 N5["L1212 if"]
 M -->|포함| N5
 N6["L1217 if"]
 M -->|포함| N6
 N7["L1222 if"]
 M -->|포함| N7
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `IsIsEdited` · L1171–1174

[Drilling.UI/CRootView.cs:1171–1174](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1171-L1174)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool IsIsEdited(Drilling.UI.Menu.Menus.ST_RECIPE_PARAMETER_EDITOR_ITEM) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.UI.Menu.Menus.ST_RECIPE_PARAMETER_EDITOR_ITEM | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1173 | return | 호출자에게 값 또는 제어를 반환합니다: return item.IsEdited; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `IsIsModified` · L1186–1189

[Drilling.UI/CRootView.cs:1186–1189](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1186-L1189)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool IsIsModified(Drilling.UI.Menu.Menus.ST_SYSTEM_PARAMETER_ROW) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.UI.Menu.Menus.ST_SYSTEM_PARAMETER_ROW | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1188 | return | 호출자에게 값 또는 제어를 반환합니다: return item.IsModified; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `InitializeProcessModel` · L1231–1247

[Drilling.UI/CRootView.cs:1231–1247](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1231-L1247)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.InitializeProcessModel(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:235–235](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L235-L235) | InitializeProcessModel | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1235 | PrepareInitialProcess | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.PrepareInitialProcess(bool, System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1249 |
| 1245 | .Dispatcher.BeginInvoke | unresolved | None |
| 1245 | new Action | unresolved | None |
| 1245 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1233 | try | 예외 처리 범위입니다: try |
| 1235 | await | 비동기 완료를 기다립니다: await PrepareInitialProcess(cancellationToken: cancellationToken) |
| 1235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareInitialProcess(cancellationToken: cancellationToken) |
| 1237 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException) when (cancellationToken.IsCancellationRequested) |
| 1239 | assignment | 값을 대상에 대입합니다: StatusMessage = "Initial process model preparation was canceled." |
| 1241 | catch | 지정 예외를 처리합니다: catch (Exception ex) |
| 1243 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Initial process model preparation failed: {ex.Message}" |
| 1244 | if | 조건에 따라 분기합니다: if (ex is CReviewOffsetValidationException) |
| 1245 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Dispatcher.BeginInvoke(new Action(() => CRecipeConfirmDialog.ShowWarning("Review Offset 확인", ex.Message))) |
| 1245 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Action(() => CRecipeConfirmDialog.ShowWarning("Review Offset 확인", ex.Message)) |
| 1245 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("Review Offset 확인", ex.Message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["InitializeProcessModel"]
 N0["L1233 try"]
 M -->|포함| N0
 N1["L1237 catch"]
 N0 -->|포함| N1
 N2["L1241 catch"]
 N0 -->|포함| N2
 N3["L1244 if"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `PrepareInitialProcess` · L1249–1283

[Drilling.UI/CRootView.cs:1249–1283](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1249-L1283)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.PrepareInitialProcess(bool, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| applyShiftOffset | bool | None | True / false |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1235–1235](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1235-L1235) | PrepareInitialProcess | False |
| [Drilling.UI/CRootView.cs:1629–1629](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1629-L1629) | PrepareInitialProcess | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1251 | _processPreparationGate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync(System.Threading.CancellationToken) |
| 1254 | _recipeManager.LoadRecipes | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeManager.LoadRecipes(System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:40 |
| 1255 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1256 | FindSelectedRecipe | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.UI.CRootView.FindSelectedRecipe(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>) · Drilling.UI/CRootView.cs:1285 |
| 1257 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1259 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1265 | Guid.NewGuid | resolved | System.Guid System.Guid.NewGuid() |
| 1269 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1270 | .Trim | resolved | string string.Trim() |
| 1271 | IsManualStartEligible | resolved | bool Drilling.UI.CRootView.IsManualStartEligible() · Drilling.UI/CRootView.cs:476 |
| 1271 | ReadShiftOffset | resolved | (double X, double Y) Drilling.UI.CRootView.ReadShiftOffset() · Drilling.UI/CRootView.cs:1346 |
| 1272 | CreateProcessParameters | resolved | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.CRootView.CreateProcessParameters(Drilling.Common.Managers.ST_RECIPE_DEFINITION?, string, string, double, double) · Drilling.UI/CRootView.cs:1314 |
| 1273 | _stationManager.PrepareProcess | resolved | Drilling.Common.Station.ST_STATION_PROCESS_STATUS Drilling.Common.Station.CStationManager.PrepareProcess(string, string, string, string, System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:90 |
| 1274 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1276 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |
| 1277 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1281 | _processPreparationGate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1251 | await | 비동기 완료를 기다립니다: await _processPreparationGate.WaitAsync(cancellationToken) |
| 1251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _processPreparationGate.WaitAsync(cancellationToken) |
| 1252 | try | 예외 처리 범위입니다: try |
| 1254 | await | 비동기 완료를 기다립니다: await _recipeManager.LoadRecipes(cancellationToken) |
| 1254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.LoadRecipes(cancellationToken) |
| 1254 | local-declaration | 지역 변수를 선언합니다: var recipes = await _recipeManager.LoadRecipes(cancellationToken); |
| 1254 | variable-initializer | 변수의 초기값을 지정합니다: recipes = await _recipeManager.LoadRecipes(cancellationToken) |
| 1255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1256 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FindSelectedRecipe(recipes) |
| 1256 | local-declaration | 지역 변수를 선언합니다: var selectedRecipe = FindSelectedRecipe(recipes); |
| 1256 | variable-initializer | 변수의 초기값을 지정합니다: selectedRecipe = FindSelectedRecipe(recipes) |
| 1257 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) |
| 1257 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId |
| 1257 | local-declaration | 지역 변수를 선언합니다: var recipeId = selectedRecipe?.Id ?? (string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId); |
| 1257 | variable-initializer | 변수의 초기값을 지정합니다: recipeId = selectedRecipe?.Id ?? (string.IsNullOrWhiteSpace(_selectedRecipeId) ? DefaultRecipeId : _selectedRecipeId) |
| 1258 | assignment | 값을 대상에 대입합니다: _selectedRecipeId = recipeId |
| 1259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(_viewRecipeId) |
| 1259 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(_viewRecipeId)) |
| 1261 | assignment | 값을 대상에 대입합니다: _viewRecipeId = recipeId |
| 1264 | local-declaration | 지역 변수를 선언합니다: var preparedAt = DateTime.Now; |
| 1264 | variable-initializer | 변수의 초기값을 지정합니다: preparedAt = DateTime.Now |
| 1265 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid() |
| 1265 | local-declaration | 지역 변수를 선언합니다: var processId = $"SCAN-{preparedAt:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}"; |
| 1265 | variable-initializer | 변수의 초기값을 지정합니다: processId = $"SCAN-{preparedAt:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}" |
| 1266 | local-declaration | 지역 변수를 선언합니다: var activeProduct = _productManager.Current; |
| 1266 | variable-initializer | 변수의 초기값을 지정합니다: activeProduct = _productManager.Current |
| 1267 | conditional-expression | 조건에 따라 결과식을 선택합니다: activeProduct?.State == EN_PRODUCT_STATE.Completed ? null : activeProduct |
| 1267 | local-declaration | 지역 변수를 선언합니다: var reusableProduct = activeProduct?.State == EN_PRODUCT_STATE.Completed ? null : activeProduct; |
| 1267 | variable-initializer | 변수의 초기값을 지정합니다: reusableProduct = activeProduct?.State == EN_PRODUCT_STATE.Completed ? null : activeProduct |
| 1268 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsSimulationEnvironment ? "SIM" : "DUMMY" |
| 1268 | local-declaration | 지역 변수를 선언합니다: var fallbackGlassId = $"{(IsSimulationEnvironment ? "SIM" : "DUMMY")}_{preparedAt:yyyyMMdd_HHmmssfff}"; |
| 1268 | variable-initializer | 변수의 초기값을 지정합니다: fallbackGlassId = $"{(IsSimulationEnvironment ? "SIM" : "DUMMY")}_{preparedAt:yyyyMMdd_HHmmssfff}" |
| 1269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(reusableProduct?.GlassId) |
| 1269 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(reusableProduct?.GlassId) ? fallbackGlassId : reusableProduct.GlassId |
| 1269 | local-declaration | 지역 변수를 선언합니다: var glassId = string.IsNullOrWhiteSpace(reusableProduct?.GlassId) ? fallbackGlassId : reusableProduct.GlassId; |
| 1269 | variable-initializer | 변수의 초기값을 지정합니다: glassId = string.IsNullOrWhiteSpace(reusableProduct?.GlassId) ? fallbackGlassId : reusableProduct.GlassId |
| 1270 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Trim() |
| 1270 | local-declaration | 지역 변수를 선언합니다: var lotId = reusableProduct?.LotId?.Trim() ?? string.Empty; |
| 1270 | variable-initializer | 변수의 초기값을 지정합니다: lotId = reusableProduct?.LotId?.Trim() ?? string.Empty |
| 1271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsManualStartEligible() |
| 1271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffset() |
| 1271 | conditional-expression | 조건에 따라 결과식을 선택합니다: applyShiftOffset && IsManualStartEligible() ? ReadShiftOffset() : (X: 0.0, Y: 0.0) |
| 1271 | local-declaration | 지역 변수를 선언합니다: var shiftOffset = applyShiftOffset && IsManualStartEligible() ? ReadShiftOffset() : (X: 0.0, Y: 0.0); |
| 1271 | variable-initializer | 변수의 초기값을 지정합니다: shiftOffset = applyShiftOffset && IsManualStartEligible() ? ReadShiftOffset() : (X: 0.0, Y: 0.0) |
| 1272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateProcessParameters(selectedRecipe, glassId, lotId, shiftOffset.X, shiftOffset.Y) |
| 1272 | local-declaration | 지역 변수를 선언합니다: var parameters = CreateProcessParameters(selectedRecipe, glassId, lotId, shiftOffset.X, shiftOffset.Y); |
| 1272 | variable-initializer | 변수의 초기값을 지정합니다: parameters = CreateProcessParameters(selectedRecipe, glassId, lotId, shiftOffset.X, shiftOffset.Y) |
| 1273 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.PrepareProcess(processId, recipeId, glassId, lotId, parameters, cancellationToken) |
| 1274 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1275 | assignment | 값을 대상에 대입합니다: StatusMessage = selectedRecipe is null ? "Process model prepared with fallback data." : $"Process model prepared from {recipeId}.csv." |
| 1275 | conditional-expression | 조건에 따라 결과식을 선택합니다: selectedRecipe is null ? "Process model prepared with fallback data." : $"Process model prepared from {recipeId}.csv." |
| 1276 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 1276 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |
| 1277 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1279 | finally | 종료 정리 구간입니다: finally |
| 1281 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _processPreparationGate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["PrepareInitialProcess"]
 N0["L1252 try"]
 M -->|포함| N0
 N1["L1259 if"]
 N0 -->|포함| N1
 N2["L1279 finally"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FindSelectedRecipe` · L1285–1312

[Drilling.UI/CRootView.cs:1285–1312](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1285-L1312)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.UI.CRootView.FindSelectedRecipe(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipes | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1256–1256](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1256-L1256) | FindSelectedRecipe | False |
| [Drilling.UI/CRootView.cs:1356–1356](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1356-L1356) | FindSelectedRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1297 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1299 | recipes.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION, bool>) |
| 1311 | recipes.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION, bool>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1287 | if | 조건에 따라 분기합니다: if (recipes.Count == 0) |
| 1289 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 1297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) |
| 1297 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(_selectedRecipeId)) |
| 1299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.FirstOrDefault(MatchesItem) |
| 1299 | local-declaration | 지역 변수를 선언합니다: var selectedRecipe = recipes.FirstOrDefault(MatchesItem); |
| 1299 | variable-initializer | 변수의 초기값을 지정합니다: selectedRecipe = recipes.FirstOrDefault(MatchesItem) |
| 1300 | if | 조건에 따라 분기합니다: if (selectedRecipe is not null) |
| 1302 | return | 호출자에게 값 또는 제어를 반환합니다: return selectedRecipe; |
| 1311 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.FirstOrDefault(MatchesItem2) |
| 1311 | return | 호출자에게 값 또는 제어를 반환합니다: return recipes.FirstOrDefault(MatchesItem2) ?? recipes[0]; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FindSelectedRecipe"]
 N0["L1287 if"]
 M -->|포함| N0
 N1["L1297 if"]
 M -->|포함| N1
 N2["L1300 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L1292–1295

[Drilling.UI/CRootView.cs:1292–1295](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1292-L1295)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1294 | recipe.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1294 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Id.Equals(_selectedRecipeId, StringComparison.OrdinalIgnoreCase) |
| 1294 | return | 호출자에게 값 또는 제어를 반환합니다: return recipe.Id.Equals(_selectedRecipeId, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem2` · L1306–1309

[Drilling.UI/CRootView.cs:1306–1309](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1306-L1309)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem2(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1308 | recipe.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1308 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Id.Equals(DefaultRecipeId, StringComparison.OrdinalIgnoreCase) |
| 1308 | return | 호출자에게 값 또는 제어를 반환합니다: return recipe.Id.Equals(DefaultRecipeId, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateProcessParameters` · L1314–1344

[Drilling.UI/CRootView.cs:1314–1344](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1314-L1344)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.CRootView.CreateProcessParameters(Drilling.Common.Managers.ST_RECIPE_DEFINITION?, string, string, double, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, string> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION? | None | False /  |
| glassId | string | None | False /  |
| lotId | string | None | False /  |
| shiftOffsetX | double | None | False /  |
| shiftOffsetY | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1272–1272](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1272-L1272) | CreateProcessParameters | False |
| [Drilling.UI/CRootView.cs:2882–2882](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2882-L2882) | CreateProcessParameters | False |
| [Drilling.UI/CRootView.cs:2897–2897](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2897-L2897) | CreateProcessParameters | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1336 | .Parameters.Where(HasRecipeParameterKey).GroupBy(SelectKey, StringComparer.OrdinalIgnoreCase).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string, string>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1336 | .Parameters.Where(HasRecipeParameterKey).GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.GroupBy<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1336 | .Parameters.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Where<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 1336 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 1339 | shiftOffsetX.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 1340 | shiftOffsetY.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 1341 | parameters.TryAdd | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryAdd(string, string) |
| 1342 | parameters.TryAdd | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryAdd(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Parameters.Where(HasRecipeParameterKey).GroupBy(SelectKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectRecipeParameterGroupKey, SelectValue, StringComparer.OrdinalIgnoreCase) |
| 1336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Parameters.Where(HasRecipeParameterKey).GroupBy(SelectKey, StringComparer.OrdinalIgnoreCase) |
| 1336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Parameters.Where(HasRecipeParameterKey) |
| 1336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 1336 | local-declaration | 지역 변수를 선언합니다: var parameters = recipe?.Parameters.Where(HasRecipeParameterKey).GroupBy(SelectKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectRecipeParameterGroupKey, SelectValue, StringComparer.OrdinalIgnoreCase) ?? new Dictionary<str |
| 1336 | variable-initializer | 변수의 초기값을 지정합니다: parameters = recipe?.Parameters.Where(HasRecipeParameterKey).GroupBy(SelectKey, StringComparer.OrdinalIgnoreCase).ToDictionary(SelectRecipeParameterGroupKey, SelectValue, StringComparer.OrdinalIgnoreCase) ?? new Dictionary<string, |
| 1337 | assignment | 값을 대상에 대입합니다: parameters["GlassId"] = glassId |
| 1338 | assignment | 값을 대상에 대입합니다: parameters["LotId"] = lotId |
| 1339 | assignment | 값을 대상에 대입합니다: parameters[ShiftOffsetXKey] = shiftOffsetX.ToString("0.000000", CultureInfo.InvariantCulture) |
| 1339 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shiftOffsetX.ToString("0.000000", CultureInfo.InvariantCulture) |
| 1340 | assignment | 값을 대상에 대입합니다: parameters[ShiftOffsetYKey] = shiftOffsetY.ToString("0.000000", CultureInfo.InvariantCulture) |
| 1340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shiftOffsetY.ToString("0.000000", CultureInfo.InvariantCulture) |
| 1341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.TryAdd("DIAMETER", "0.350") |
| 1342 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.TryAdd("HEAD_COUNT", "8") |
| 1343 | return | 호출자에게 값 또는 제어를 반환합니다: return parameters; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `HasRecipeParameterKey` · L1316–1319

[Drilling.UI/CRootView.cs:1316–1319](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1316-L1319)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool HasRecipeParameterKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1318 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(parameter.Key) |
| 1318 | return | 호출자에게 값 또는 제어를 반환합니다: return !string.IsNullOrWhiteSpace(parameter.Key); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectKey` · L1321–1324

[Drilling.UI/CRootView.cs:1321–1324](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1321-L1324)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectKey(Drilling.Common.Managers.ST_RECIPE_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1323 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectRecipeParameterGroupKey` · L1326–1329

[Drilling.UI/CRootView.cs:1326–1329](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1326-L1329)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectRecipeParameterGroupKey(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1328 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Key; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectValue` · L1331–1334

[Drilling.UI/CRootView.cs:1331–1334](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1331-L1334)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectValue(System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1333 | group.Last | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Last<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1333 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 1333 | return | 호출자에게 값 또는 제어를 반환합니다: return group.Last().Value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadShiftOffset` · L1346–1349

[Drilling.UI/CRootView.cs:1346–1349](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1346-L1349)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | (double X, double Y) Drilling.UI.CRootView.ReadShiftOffset() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | (double X, double Y) |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1271–1271](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1271-L1271) | ReadShiftOffset | False |
| [Drilling.UI/CRootView.cs:1599–1599](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1599-L1599) | ReadShiftOffset | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1348 | ReadShiftOffsetValue | resolved | double Drilling.UI.CRootView.ReadShiftOffsetValue(string) · Drilling.UI/CRootView.cs:1577 |
| 1348 | ReadShiftOffsetValue | resolved | double Drilling.UI.CRootView.ReadShiftOffsetValue(string) · Drilling.UI/CRootView.cs:1577 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1348 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetValue(ShiftOffsetX) |
| 1348 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetValue(ShiftOffsetY) |
| 1348 | return | 호출자에게 값 또는 제어를 반환합니다: return (ReadShiftOffsetValue(ShiftOffsetX), ReadShiftOffsetValue(ShiftOffsetY)); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OpenShiftOffsetDialog` · L1351–1384

[Drilling.UI/CRootView.cs:1351–1384](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1351-L1384)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.OpenShiftOffsetDialog(Window?) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| owner | Window? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1355 | _recipeManager.LoadRecipes | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeManager.LoadRecipes(System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:40 |
| 1356 | FindSelectedRecipe | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.UI.CRootView.FindSelectedRecipe(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>) · Drilling.UI/CRootView.cs:1285 |
| 1357 | CreateShiftOffsetPreviewParameters | resolved | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.CRootView.CreateShiftOffsetPreviewParameters(Drilling.Common.Managers.ST_RECIPE_DEFINITION?) · Drilling.UI/CRootView.cs:1386 |
| 1368 | new CShiftOffsetDialog | resolved | Drilling.UI.Popup.CShiftOffsetDialog.CShiftOffsetDialog(string, string, System.Func<double, double, System.Collections.Generic.IReadOnlyList<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW>>, System.Func<double, double, string?>) · Drilling.UI/Popup/CShiftOffsetDialog.xaml.cs:14 |
| 1372 | dialog.ShowDialog | unresolved | None |
| 1382 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1353 | try | 예외 처리 범위입니다: try |
| 1355 | await | 비동기 완료를 기다립니다: await _recipeManager.LoadRecipes() |
| 1355 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.LoadRecipes() |
| 1355 | local-declaration | 지역 변수를 선언합니다: var recipes = await _recipeManager.LoadRecipes(); |
| 1355 | variable-initializer | 변수의 초기값을 지정합니다: recipes = await _recipeManager.LoadRecipes() |
| 1356 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FindSelectedRecipe(recipes) |
| 1356 | local-declaration | 지역 변수를 선언합니다: var selectedRecipe = FindSelectedRecipe(recipes); |
| 1356 | variable-initializer | 변수의 초기값을 지정합니다: selectedRecipe = FindSelectedRecipe(recipes) |
| 1357 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateShiftOffsetPreviewParameters(selectedRecipe) |
| 1357 | local-declaration | 지역 변수를 선언합니다: var baseParameters = CreateShiftOffsetPreviewParameters(selectedRecipe); |
| 1357 | variable-initializer | 변수의 초기값을 지정합니다: baseParameters = CreateShiftOffsetPreviewParameters(selectedRecipe) |
| 1368 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CShiftOffsetDialog(ShiftOffsetX, ShiftOffsetY, BuildRows, ValidateApply) { Owner = owner } |
| 1368 | local-declaration | 지역 변수를 선언합니다: var dialog = new CShiftOffsetDialog(ShiftOffsetX, ShiftOffsetY, BuildRows, ValidateApply) { Owner = owner }; |
| 1368 | variable-initializer | 변수의 초기값을 지정합니다: dialog = new CShiftOffsetDialog(ShiftOffsetX, ShiftOffsetY, BuildRows, ValidateApply) { Owner = owner } |
| 1370 | assignment | 값을 대상에 대입합니다: Owner = owner |
| 1372 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dialog.ShowDialog() |
| 1372 | if | 조건에 따라 분기합니다: if (dialog.ShowDialog() != true) |
| 1374 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1377 | assignment | 값을 대상에 대입합니다: ShiftOffsetX = dialog.ResultShiftOffsetX |
| 1378 | assignment | 값을 대상에 대입합니다: ShiftOffsetY = dialog.ResultShiftOffsetY |
| 1380 | catch | 지정 예외를 처리합니다: catch (Exception ex) |
| 1382 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("Shift Offset 설정 실패", ex.Message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OpenShiftOffsetDialog"]
 N0["L1353 try"]
 M -->|포함| N0
 N1["L1372 if"]
 N0 -->|포함| N1
 N2["L1380 catch"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `BuildRows` · L1358–1361

[Drilling.UI/CRootView.cs:1358–1361](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1358-L1361)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW> BuildRows(double, double) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| shiftOffsetX | double | None | False /  |
| shiftOffsetY | double | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1360 | BuildShiftOffsetHeadRows | resolved | System.Collections.Generic.IReadOnlyList<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW> Drilling.UI.CRootView.BuildShiftOffsetHeadRows(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) · Drilling.UI/CRootView.cs:1420 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1360 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BuildShiftOffsetHeadRows(baseParameters, shiftOffsetX, shiftOffsetY) |
| 1360 | return | 호출자에게 값 또는 제어를 반환합니다: return BuildShiftOffsetHeadRows(baseParameters, shiftOffsetX, shiftOffsetY); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ValidateApply` · L1363–1366

[Drilling.UI/CRootView.cs:1363–1366](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1363-L1366)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string? ValidateApply(double, double) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| shiftOffsetX | double | None | False /  |
| shiftOffsetY | double | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1365 | ValidateShiftOffsetApply | resolved | string? Drilling.UI.CRootView.ValidateShiftOffsetApply(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) · Drilling.UI/CRootView.cs:1448 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1365 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateShiftOffsetApply(baseParameters, shiftOffsetX, shiftOffsetY) |
| 1365 | return | 호출자에게 값 또는 제어를 반환합니다: return ValidateShiftOffsetApply(baseParameters, shiftOffsetX, shiftOffsetY); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateShiftOffsetPreviewParameters` · L1386–1418

[Drilling.UI/CRootView.cs:1386–1418](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1386-L1418)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.CRootView.CreateShiftOffsetPreviewParameters(Drilling.Common.Managers.ST_RECIPE_DEFINITION?) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, string> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1357–1357](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1357-L1357) | CreateShiftOffsetPreviewParameters | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1388 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 1393 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1400 | _manager.Setting().LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 1400 | _manager.Setting | resolved | Drilling.Common.Managers.CSettingManager Drilling.Common.Managers.CManager.Setting() · Drilling.Common/Managers/CManager.cs:340 |
| 1402 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1408 | _manager.Setting().LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 1408 | _manager.Setting | resolved | Drilling.Common.Managers.CSettingManager Drilling.Common.Managers.CManager.Setting() · Drilling.Common/Managers/CManager.cs:340 |
| 1410 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1416 | parameters.TryAdd | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryAdd(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1388 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 1388 | local-declaration | 지역 변수를 선언합니다: var parameters = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase); |
| 1388 | variable-initializer | 변수의 초기값을 지정합니다: parameters = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 1389 | if | 조건에 따라 분기합니다: if (recipe is not null) |
| 1391 | foreach | 컬렉션 요소를 순회합니다: foreach (var parameter in recipe.Parameters) |
| 1393 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(parameter.Key) |
| 1393 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(parameter.Key)) |
| 1395 | assignment | 값을 대상에 대입합니다: parameters[parameter.Key] = parameter.Value |
| 1400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting().LoadSection(EN_SETTING_TAB.Option) |
| 1400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting() |
| 1400 | foreach | 컬렉션 요소를 순회합니다: foreach (var setting in _manager.Setting().LoadSection(EN_SETTING_TAB.Option)) |
| 1402 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(setting.Key) |
| 1402 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(setting.Key)) |
| 1404 | assignment | 값을 대상에 대입합니다: parameters[setting.Key] = setting.Value |
| 1408 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting().LoadSection(EN_SETTING_TAB.Motor) |
| 1408 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting() |
| 1408 | foreach | 컬렉션 요소를 순회합니다: foreach (var setting in _manager.Setting().LoadSection(EN_SETTING_TAB.Motor)) |
| 1410 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(setting.Key) |
| 1410 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(setting.Key)) |
| 1412 | assignment | 값을 대상에 대입합니다: parameters[setting.Key] = setting.Value |
| 1416 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.TryAdd("HEAD_COUNT", "8") |
| 1417 | return | 호출자에게 값 또는 제어를 반환합니다: return parameters; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateShiftOffsetPreviewParameters"]
 N0["L1389 if"]
 M -->|포함| N0
 N1["L1391 foreach"]
 N0 -->|포함| N1
 N2["L1393 if"]
 N1 -->|포함| N2
 N3["L1400 foreach"]
 M -->|포함| N3
 N4["L1402 if"]
 N3 -->|포함| N4
 N5["L1408 foreach"]
 M -->|포함| N5
 N6["L1410 if"]
 N5 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `BuildShiftOffsetHeadRows` · L1420–1437

[Drilling.UI/CRootView.cs:1420–1437](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1420-L1437)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW> Drilling.UI.CRootView.BuildShiftOffsetHeadRows(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| shiftOffsetX | double | None | False /  |
| shiftOffsetY | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1360–1360](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1360-L1360) | BuildShiftOffsetHeadRows | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1422 | Math.Clamp | resolved | int System.Math.Clamp(int, int, int) |
| 1422 | ReadShiftOffsetPreviewInt | resolved | int Drilling.UI.CRootView.ReadShiftOffsetPreviewInt(System.Collections.Generic.IReadOnlyDictionary<string, string>, int, params string[]) · Drilling.UI/CRootView.cs:1546 |
| 1423 | new List<ST_SHIFT_OFFSET_HEAD_ROW> | resolved | System.Collections.Generic.List<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW>.List(int) |
| 1428 | CScannerAxisTransform.DesignOffsetToScanner | resolved | (double X, double Y) Drilling.Common.Recipe.CScannerAxisTransform.DesignOffsetToScanner(System.Collections.Generic.IReadOnlyDictionary<string, string>, int, double, double) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:1260 |
| 1429 | rows.Add | resolved | void System.Collections.Generic.List<Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW>.Add(Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW) |
| 1429 | new ST_SHIFT_OFFSET_HEAD_ROW | resolved | Drilling.UI.Popup.ST_SHIFT_OFFSET_HEAD_ROW.ST_SHIFT_OFFSET_HEAD_ROW(int, string, string, string) · Drilling.UI/Popup/CShiftOffsetDialog.xaml.cs:289 |
| 1432 | FormatShiftOffsetPreviewValue | resolved | string Drilling.UI.CRootView.FormatShiftOffsetPreviewValue(double) · Drilling.UI/CRootView.cs:1572 |
| 1433 | FormatShiftOffsetPreviewValue | resolved | string Drilling.UI.CRootView.FormatShiftOffsetPreviewValue(double) · Drilling.UI/CRootView.cs:1572 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(ReadShiftOffsetPreviewInt(parameters, 8, "HEAD_COUNT"), 1, 8) |
| 1422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetPreviewInt(parameters, 8, "HEAD_COUNT") |
| 1422 | local-declaration | 지역 변수를 선언합니다: var headCount = Math.Clamp(ReadShiftOffsetPreviewInt(parameters, 8, "HEAD_COUNT"), 1, 8); |
| 1422 | variable-initializer | 변수의 초기값을 지정합니다: headCount = Math.Clamp(ReadShiftOffsetPreviewInt(parameters, 8, "HEAD_COUNT"), 1, 8) |
| 1423 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_SHIFT_OFFSET_HEAD_ROW>(headCount) |
| 1423 | local-declaration | 지역 변수를 선언합니다: var rows = new List<ST_SHIFT_OFFSET_HEAD_ROW>(headCount); |
| 1423 | variable-initializer | 변수의 초기값을 지정합니다: rows = new List<ST_SHIFT_OFFSET_HEAD_ROW>(headCount) |
| 1424 | variable-initializer | 변수의 초기값을 지정합니다: headNo = 1 |
| 1424 | for | 초기화·조건·증감이 있는 반복입니다: for (var headNo = 1; headNo <= headCount; headNo++) |
| 1428 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CScannerAxisTransform.DesignOffsetToScanner(parameters, headNo, shiftOffsetX, shiftOffsetY) |
| 1428 | local-declaration | 지역 변수를 선언합니다: var scannerShift = CScannerAxisTransform.DesignOffsetToScanner(parameters, headNo, shiftOffsetX, shiftOffsetY); |
| 1428 | variable-initializer | 변수의 초기값을 지정합니다: scannerShift = CScannerAxisTransform.DesignOffsetToScanner(parameters, headNo, shiftOffsetX, shiftOffsetY) |
| 1429 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Add(new ST_SHIFT_OFFSET_HEAD_ROW( headNo, $"H{headNo:00}", FormatShiftOffsetPreviewValue(scannerShift.X), FormatShiftOffsetPreviewValue(scannerShift.Y))) |
| 1429 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_SHIFT_OFFSET_HEAD_ROW( headNo, $"H{headNo:00}", FormatShiftOffsetPreviewValue(scannerShift.X), FormatShiftOffsetPreviewValue(scannerShift.Y)) |
| 1432 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatShiftOffsetPreviewValue(scannerShift.X) |
| 1433 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatShiftOffsetPreviewValue(scannerShift.Y) |
| 1436 | return | 호출자에게 값 또는 제어를 반환합니다: return rows; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["BuildShiftOffsetHeadRows"]
 N0["L1424 for"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateShiftOffsetParameters` · L1439–1446

[Drilling.UI/CRootView.cs:1439–1446](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1439-L1446)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, string> Drilling.UI.CRootView.CreateShiftOffsetParameters(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, string> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| source | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| shiftOffsetX | double | None | False /  |
| shiftOffsetY | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1451–1451](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1451-L1451) | CreateShiftOffsetParameters | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1441 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1443 | shiftOffsetX.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 1444 | shiftOffsetY.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1441 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(source, StringComparer.OrdinalIgnoreCase) { [ShiftOffsetXKey] = shiftOffsetX.ToString("0.000000", CultureInfo.InvariantCulture), [ShiftOffsetYKey] = shiftOffsetY.ToString("0.000000", Cultur… |
| 1441 | return | 호출자에게 값 또는 제어를 반환합니다: return new Dictionary<string, string>(source, StringComparer.OrdinalIgnoreCase) { [ShiftOffsetXKey] = shiftOffsetX.ToString("0.000000", CultureInfo.InvariantCulture), [ShiftOffsetYKey] = shiftOffsetY.ToString("0.000000", CultureIn |
| 1443 | assignment | 값을 대상에 대입합니다: [ShiftOffsetXKey] = shiftOffsetX.ToString("0.000000", CultureInfo.InvariantCulture) |
| 1443 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shiftOffsetX.ToString("0.000000", CultureInfo.InvariantCulture) |
| 1444 | assignment | 값을 대상에 대입합니다: [ShiftOffsetYKey] = shiftOffsetY.ToString("0.000000", CultureInfo.InvariantCulture) |
| 1444 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shiftOffsetY.ToString("0.000000", CultureInfo.InvariantCulture) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateShiftOffsetApply` · L1448–1498

[Drilling.UI/CRootView.cs:1448–1498](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1448-L1498)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string? Drilling.UI.CRootView.ValidateShiftOffsetApply(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| baseParameters | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| shiftOffsetX | double | None | False /  |
| shiftOffsetY | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1365–1365](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1365-L1365) | ValidateShiftOffsetApply | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1451 | CreateShiftOffsetParameters | resolved | System.Collections.Generic.Dictionary<string, string> Drilling.UI.CRootView.CreateShiftOffsetParameters(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, double) · Drilling.UI/CRootView.cs:1439 |
| 1452 | CShotCoordinatePlanBuilder.Build | resolved | Drilling.Common.Recipe.ST_SHOT_COORDINATE_PLAN Drilling.Common.Recipe.CShotCoordinatePlanBuilder.Build(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:11 |
| 1453 | CRecipeShotMaskingPlan.Build | resolved | Drilling.Common.Recipe.CRecipeShotMaskingPlan Drilling.Common.Recipe.CRecipeShotMaskingPlan.Build(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:813 |
| 1456 | ReadShiftOffsetScannerReferenceOffsetX | resolved | double Drilling.UI.CRootView.ReadShiftOffsetScannerReferenceOffsetX(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.UI/CRootView.cs:1539 |
| 1457 | new List<string> | resolved | System.Collections.Generic.List<string>.List() |
| 1461 | maskingPlan.EvaluateShot | resolved | Drilling.Common.Recipe.ST_RECIPE_SHOT_MASKING_RESULT Drilling.Common.Recipe.CRecipeShotMaskingPlan.EvaluateShot(Drilling.Common.Recipe.ST_HEAD_SHOT_POINT) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:853 |
| 1468 | IsOutsideRange | resolved | bool Drilling.UI.CRootView.IsOutsideRange(double, double, double, double) · Drilling.UI/CRootView.cs:1508 |
| 1468 | IsOutsideRange | resolved | bool Drilling.UI.CRootView.IsOutsideRange(double, double, double, double) · Drilling.UI/CRootView.cs:1508 |
| 1471 | AddShiftOffsetIssue | resolved | void Drilling.UI.CRootView.AddShiftOffsetIssue(System.Collections.Generic.ICollection<string>, string) · Drilling.UI/CRootView.cs:1500 |
| 1471 | FormatShiftOffsetShot | resolved | string Drilling.UI.CRootView.FormatShiftOffsetShot(Drilling.Common.Recipe.ST_HEAD_SHOT_POINT) · Drilling.UI/CRootView.cs:1513 |
| 1471 | FormatShiftOffsetPreviewValue | resolved | string Drilling.UI.CRootView.FormatShiftOffsetPreviewValue(double) · Drilling.UI/CRootView.cs:1572 |
| 1471 | FormatShiftOffsetPreviewValue | resolved | string Drilling.UI.CRootView.FormatShiftOffsetPreviewValue(double) · Drilling.UI/CRootView.cs:1572 |
| 1475 | ReadShiftOffsetHeadCenterX | resolved | double Drilling.UI.CRootView.ReadShiftOffsetHeadCenterX(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) · Drilling.UI/CRootView.cs:1518 |
| 1476 | ReadShiftOffsetHeadScanFieldHalfWidth | resolved | double Drilling.UI.CRootView.ReadShiftOffsetHeadScanFieldHalfWidth(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) · Drilling.UI/CRootView.cs:1528 |
| 1478 | IsOutsideRange | resolved | bool Drilling.UI.CRootView.IsOutsideRange(double, double, double, double) · Drilling.UI/CRootView.cs:1508 |
| 1481 | AddShiftOffsetIssue | resolved | void Drilling.UI.CRootView.AddShiftOffsetIssue(System.Collections.Generic.ICollection<string>, string) · Drilling.UI/CRootView.cs:1500 |
| 1481 | FormatShiftOffsetShot | resolved | string Drilling.UI.CRootView.FormatShiftOffsetShot(Drilling.Common.Recipe.ST_HEAD_SHOT_POINT) · Drilling.UI/CRootView.cs:1513 |
| 1481 | FormatShiftOffsetPreviewValue | resolved | string Drilling.UI.CRootView.FormatShiftOffsetPreviewValue(double) · Drilling.UI/CRootView.cs:1572 |
| 1491 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1450 | local-declaration | 지역 변수를 선언합니다: const double tolerance = 0.000001; |
| 1450 | variable-initializer | 변수의 초기값을 지정합니다: tolerance = 0.000001 |
| 1451 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateShiftOffsetParameters(baseParameters, shiftOffsetX, shiftOffsetY) |
| 1451 | local-declaration | 지역 변수를 선언합니다: var parameters = CreateShiftOffsetParameters(baseParameters, shiftOffsetX, shiftOffsetY); |
| 1451 | variable-initializer | 변수의 초기값을 지정합니다: parameters = CreateShiftOffsetParameters(baseParameters, shiftOffsetX, shiftOffsetY) |
| 1452 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CShotCoordinatePlanBuilder.Build(parameters) |
| 1452 | local-declaration | 지역 변수를 선언합니다: var coordinatePlan = CShotCoordinatePlanBuilder.Build(parameters); |
| 1452 | variable-initializer | 변수의 초기값을 지정합니다: coordinatePlan = CShotCoordinatePlanBuilder.Build(parameters) |
| 1453 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeShotMaskingPlan.Build(parameters) |
| 1453 | local-declaration | 지역 변수를 선언합니다: var maskingPlan = CRecipeShotMaskingPlan.Build(parameters); |
| 1453 | variable-initializer | 변수의 초기값을 지정합니다: maskingPlan = CRecipeShotMaskingPlan.Build(parameters) |
| 1454 | local-declaration | 지역 변수를 선언합니다: var glassSizeX = coordinatePlan.GlassSizeX; |
| 1454 | variable-initializer | 변수의 초기값을 지정합니다: glassSizeX = coordinatePlan.GlassSizeX |
| 1455 | local-declaration | 지역 변수를 선언합니다: var glassSizeY = coordinatePlan.GlassSizeY; |
| 1455 | variable-initializer | 변수의 초기값을 지정합니다: glassSizeY = coordinatePlan.GlassSizeY |
| 1456 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetScannerReferenceOffsetX(parameters) |
| 1456 | local-declaration | 지역 변수를 선언합니다: var scannerReferenceOffsetX = ReadShiftOffsetScannerReferenceOffsetX(parameters); |
| 1456 | variable-initializer | 변수의 초기값을 지정합니다: scannerReferenceOffsetX = ReadShiftOffsetScannerReferenceOffsetX(parameters) |
| 1457 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<string>() |
| 1457 | local-declaration | 지역 변수를 선언합니다: var issues = new List<string>(); |
| 1457 | variable-initializer | 변수의 초기값을 지정합니다: issues = new List<string>() |
| 1458 | local-declaration | 지역 변수를 선언합니다: var totalIssueCount = 0; |
| 1458 | variable-initializer | 변수의 초기값을 지정합니다: totalIssueCount = 0 |
| 1459 | foreach | 컬렉션 요소를 순회합니다: foreach (var shot in coordinatePlan.Shots) |
| 1461 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: maskingPlan.EvaluateShot(shot) |
| 1461 | if | 조건에 따라 분기합니다: if (maskingPlan.EvaluateShot(shot).ShouldSkipLaser) |
| 1463 | continue | 다음 반복으로 진행합니다: continue; |
| 1466 | local-declaration | 지역 변수를 선언합니다: var shiftedGlassX = shot.DesignX + shiftOffsetX; |
| 1466 | variable-initializer | 변수의 초기값을 지정합니다: shiftedGlassX = shot.DesignX + shiftOffsetX |
| 1467 | local-declaration | 지역 변수를 선언합니다: var shiftedGlassY = shot.DesignY - shiftOffsetY; |
| 1467 | variable-initializer | 변수의 초기값을 지정합니다: shiftedGlassY = shot.DesignY - shiftOffsetY |
| 1468 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsOutsideRange(shiftedGlassX, 0.0, glassSizeX, tolerance) |
| 1468 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsOutsideRange(shiftedGlassY, 0.0, glassSizeY, tolerance) |
| 1468 | if | 조건에 따라 분기합니다: if (IsOutsideRange(shiftedGlassX, 0.0, glassSizeX, tolerance) &#124;&#124; IsOutsideRange(shiftedGlassY, 0.0, glassSizeY, tolerance)) |
| 1471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddShiftOffsetIssue(issues, $"{FormatShiftOffsetShot(shot)}: Glass 영역 밖 X {FormatShiftOffsetPreviewValue(shiftedGlassX)} / Y {FormatShiftOffsetPreviewValue(shiftedGlassY)}") |
| 1471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatShiftOffsetShot(shot) |
| 1471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatShiftOffsetPreviewValue(shiftedGlassX) |
| 1471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatShiftOffsetPreviewValue(shiftedGlassY) |
| 1472 | continue | 다음 반복으로 진행합니다: continue; |
| 1475 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetHeadCenterX(parameters, shot.HeadNo) |
| 1475 | local-declaration | 지역 변수를 선언합니다: var headCenterX = ReadShiftOffsetHeadCenterX(parameters, shot.HeadNo); |
| 1475 | variable-initializer | 변수의 초기값을 지정합니다: headCenterX = ReadShiftOffsetHeadCenterX(parameters, shot.HeadNo) |
| 1476 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetHeadScanFieldHalfWidth(parameters, shot.HeadNo) |
| 1476 | local-declaration | 지역 변수를 선언합니다: var halfScanFieldX = ReadShiftOffsetHeadScanFieldHalfWidth(parameters, shot.HeadNo); |
| 1476 | variable-initializer | 변수의 초기값을 지정합니다: halfScanFieldX = ReadShiftOffsetHeadScanFieldHalfWidth(parameters, shot.HeadNo) |
| 1477 | local-declaration | 지역 변수를 선언합니다: var shiftedReferenceX = shiftedGlassX + scannerReferenceOffsetX; |
| 1477 | variable-initializer | 변수의 초기값을 지정합니다: shiftedReferenceX = shiftedGlassX + scannerReferenceOffsetX |
| 1478 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsOutsideRange(shiftedReferenceX, headCenterX - halfScanFieldX, headCenterX + halfScanFieldX, tolerance) |
| 1478 | if | 조건에 따라 분기합니다: if (IsOutsideRange(shiftedReferenceX, headCenterX - halfScanFieldX, headCenterX + halfScanFieldX, tolerance)) |
| 1481 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddShiftOffsetIssue(issues, $"{FormatShiftOffsetShot(shot)}: H{shot.HeadNo:00} Scan Field X 초과 ({FormatShiftOffsetPreviewValue(shiftedReferenceX)})") |
| 1481 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatShiftOffsetShot(shot) |
| 1481 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FormatShiftOffsetPreviewValue(shiftedReferenceX) |
| 1485 | if | 조건에 따라 분기합니다: if (totalIssueCount == 0) |
| 1487 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 1490 | local-declaration | 지역 변수를 선언합니다: var hiddenCount = totalIssueCount - issues.Count; |
| 1490 | variable-initializer | 변수의 초기값을 지정합니다: hiddenCount = totalIssueCount - issues.Count |
| 1491 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join("\n", issues) |
| 1491 | local-declaration | 지역 변수를 선언합니다: var message = "Shift Offset 적용 시 일부 Laser ON 샷이 가공 가능 영역을 벗어납니다.\n" + "값을 적용하지 않았습니다.\n\n" + string.Join("\n", issues); |
| 1491 | variable-initializer | 변수의 초기값을 지정합니다: message = "Shift Offset 적용 시 일부 Laser ON 샷이 가공 가능 영역을 벗어납니다.\n" + "값을 적용하지 않았습니다.\n\n" + string.Join("\n", issues) |
| 1492 | if | 조건에 따라 분기합니다: if (hiddenCount > 0) |
| 1494 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: message += $"\n... 외 {hiddenCount:N0}건" |
| 1497 | return | 호출자에게 값 또는 제어를 반환합니다: return message; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateShiftOffsetApply"]
 N0["L1459 foreach"]
 M -->|포함| N0
 N1["L1461 if"]
 N0 -->|포함| N1
 N2["L1468 if"]
 N0 -->|포함| N2
 N3["L1478 if"]
 N0 -->|포함| N3
 N4["L1485 if"]
 M -->|포함| N4
 N5["L1492 if"]
 M -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `AddShiftOffsetIssue` · L1500–1506

[Drilling.UI/CRootView.cs:1500–1506](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1500-L1506)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.AddShiftOffsetIssue(System.Collections.Generic.ICollection<string>, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| issues | System.Collections.Generic.ICollection<string> | None | False /  |
| issue | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1471–1471](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1471-L1471) | AddShiftOffsetIssue | False |
| [Drilling.UI/CRootView.cs:1481–1481](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1481-L1481) | AddShiftOffsetIssue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1504 | issues.Add | resolved · 동적 구현 선택 가능 | void System.Collections.Generic.ICollection<string>.Add(string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1502 | if | 조건에 따라 분기합니다: if (issues.Count < 8) |
| 1504 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: issues.Add(issue) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["AddShiftOffsetIssue"]
 N0["L1502 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsOutsideRange` · L1508–1511

[Drilling.UI/CRootView.cs:1508–1511](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1508-L1511)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsOutsideRange(double, double, double, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | double | None | False /  |
| minimum | double | None | False /  |
| maximum | double | None | False /  |
| tolerance | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1468–1468](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1468-L1468) | IsOutsideRange | False |
| [Drilling.UI/CRootView.cs:1468–1468](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1468-L1468) | IsOutsideRange | False |
| [Drilling.UI/CRootView.cs:1478–1478](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1478-L1478) | IsOutsideRange | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1510 | return | 호출자에게 값 또는 제어를 반환합니다: return value < minimum - tolerance &#124;&#124; value > maximum + tolerance; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatShiftOffsetShot` · L1513–1516

[Drilling.UI/CRootView.cs:1513–1516](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1513-L1516)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.FormatShiftOffsetShot(Drilling.Common.Recipe.ST_HEAD_SHOT_POINT) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| shot | Drilling.Common.Recipe.ST_HEAD_SHOT_POINT | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1471–1471](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1471-L1471) | FormatShiftOffsetShot | False |
| [Drilling.UI/CRootView.cs:1481–1481](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1481-L1481) | FormatShiftOffsetShot | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1515 | return | 호출자에게 값 또는 제어를 반환합니다: return $"H{shot.HeadNo:00} CELL{shot.CellNo} {shot.ShotKey}"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadShiftOffsetHeadCenterX` · L1518–1526

[Drilling.UI/CRootView.cs:1518–1526](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1518-L1526)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.CRootView.ReadShiftOffsetHeadCenterX(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| headNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1475–1475](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1475-L1475) | ReadShiftOffsetHeadCenterX | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1522 | ReadShiftOffsetPreviewDouble | resolved | double Drilling.UI.CRootView.ReadShiftOffsetPreviewDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, params string[]) · Drilling.UI/CRootView.cs:1559 |
| 1523 | ReadShiftOffsetPreviewDouble | resolved | double Drilling.UI.CRootView.ReadShiftOffsetPreviewDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, params string[]) · Drilling.UI/CRootView.cs:1559 |
| 1524 | ReadShiftOffsetPreviewDouble | resolved | double Drilling.UI.CRootView.ReadShiftOffsetPreviewDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, params string[]) · Drilling.UI/CRootView.cs:1559 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1520 | local-declaration | 지역 변수를 선언합니다: const double fallbackHead1PositionX = -5.0; |
| 1520 | variable-initializer | 변수의 초기값을 지정합니다: fallbackHead1PositionX = -5.0 |
| 1521 | local-declaration | 지역 변수를 선언합니다: const double fallbackHeadGapX = 200.0; |
| 1521 | variable-initializer | 변수의 초기값을 지정합니다: fallbackHeadGapX = 200.0 |
| 1522 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetPreviewDouble(parameters, fallbackHead1PositionX, "H01_AK_POSITION_X") |
| 1522 | local-declaration | 지역 변수를 선언합니다: var head1PositionX = ReadShiftOffsetPreviewDouble(parameters, fallbackHead1PositionX, "H01_AK_POSITION_X"); |
| 1522 | variable-initializer | 변수의 초기값을 지정합니다: head1PositionX = ReadShiftOffsetPreviewDouble(parameters, fallbackHead1PositionX, "H01_AK_POSITION_X") |
| 1523 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetPreviewDouble(parameters, fallbackHeadGapX, "HeadGapX") |
| 1523 | local-declaration | 지역 변수를 선언합니다: var headGapX = ReadShiftOffsetPreviewDouble(parameters, fallbackHeadGapX, "HeadGapX"); |
| 1523 | variable-initializer | 변수의 초기값을 지정합니다: headGapX = ReadShiftOffsetPreviewDouble(parameters, fallbackHeadGapX, "HeadGapX") |
| 1524 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetPreviewDouble(parameters, 0.0, "AK_MARGIN_X") |
| 1524 | local-declaration | 지역 변수를 선언합니다: var akMarginX = ReadShiftOffsetPreviewDouble(parameters, 0.0, "AK_MARGIN_X"); |
| 1524 | variable-initializer | 변수의 초기값을 지정합니다: akMarginX = ReadShiftOffsetPreviewDouble(parameters, 0.0, "AK_MARGIN_X") |
| 1525 | return | 호출자에게 값 또는 제어를 반환합니다: return akMarginX + head1PositionX + ((headNo - 1) * headGapX); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadShiftOffsetHeadScanFieldHalfWidth` · L1528–1537

[Drilling.UI/CRootView.cs:1528–1537](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1528-L1537)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.CRootView.ReadShiftOffsetHeadScanFieldHalfWidth(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| headNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1476–1476](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1476-L1476) | ReadShiftOffsetHeadScanFieldHalfWidth | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1530 | Math.Abs | resolved | double System.Math.Abs(double) |
| 1530 | ReadShiftOffsetPreviewDouble | resolved | double Drilling.UI.CRootView.ReadShiftOffsetPreviewDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, params string[]) · Drilling.UI/CRootView.cs:1559 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1530 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(ReadShiftOffsetPreviewDouble(parameters, 110.0, $"H{headNo:00}_SCAN_FIELD_WIDTH_X", $"H{headNo:00}_HEAD_FIELD_WIDTH_X")) |
| 1530 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetPreviewDouble(parameters, 110.0, $"H{headNo:00}_SCAN_FIELD_WIDTH_X", $"H{headNo:00}_HEAD_FIELD_WIDTH_X") |
| 1530 | local-declaration | 지역 변수를 선언합니다: var width = Math.Abs(ReadShiftOffsetPreviewDouble(parameters, 110.0, $"H{headNo:00}_SCAN_FIELD_WIDTH_X", $"H{headNo:00}_HEAD_FIELD_WIDTH_X")); |
| 1530 | variable-initializer | 변수의 초기값을 지정합니다: width = Math.Abs(ReadShiftOffsetPreviewDouble(parameters, 110.0, $"H{headNo:00}_SCAN_FIELD_WIDTH_X", $"H{headNo:00}_HEAD_FIELD_WIDTH_X")) |
| 1531 | if | 조건에 따라 분기합니다: if (width <= 0.000001) |
| 1533 | assignment | 값을 대상에 대입합니다: width = 110.0 |
| 1536 | return | 호출자에게 값 또는 제어를 반환합니다: return width / 2.0; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadShiftOffsetHeadScanFieldHalfWidth"]
 N0["L1531 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadShiftOffsetScannerReferenceOffsetX` · L1539–1544

[Drilling.UI/CRootView.cs:1539–1544](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1539-L1544)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.CRootView.ReadShiftOffsetScannerReferenceOffsetX(System.Collections.Generic.IReadOnlyDictionary<string, string>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1456–1456](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1456-L1456) | ReadShiftOffsetScannerReferenceOffsetX | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1541 | ReadShiftOffsetPreviewDouble | resolved | double Drilling.UI.CRootView.ReadShiftOffsetPreviewDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, params string[]) · Drilling.UI/CRootView.cs:1559 |
| 1542 | ReadShiftOffsetPreviewDouble | resolved | double Drilling.UI.CRootView.ReadShiftOffsetPreviewDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, params string[]) · Drilling.UI/CRootView.cs:1559 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1541 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetPreviewDouble(parameters, 0.0, "ESC_EDGE_TO_GLASS_EDGE", "ESC_EDGE_TO_GLASS_EDGE_X") |
| 1541 | local-declaration | 지역 변수를 선언합니다: var escEdgeToGlassEdge = ReadShiftOffsetPreviewDouble(parameters, 0.0, "ESC_EDGE_TO_GLASS_EDGE", "ESC_EDGE_TO_GLASS_EDGE_X"); |
| 1541 | variable-initializer | 변수의 초기값을 지정합니다: escEdgeToGlassEdge = ReadShiftOffsetPreviewDouble(parameters, 0.0, "ESC_EDGE_TO_GLASS_EDGE", "ESC_EDGE_TO_GLASS_EDGE_X") |
| 1542 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffsetPreviewDouble(parameters, 0.0, "GLASS_CENTER_TO_SCANNER_CENTER", "GLASS_CENTER_TO_SCANNER_CENTER_X") |
| 1542 | local-declaration | 지역 변수를 선언합니다: var glassCenterToScannerCenter = ReadShiftOffsetPreviewDouble(parameters, 0.0, "GLASS_CENTER_TO_SCANNER_CENTER", "GLASS_CENTER_TO_SCANNER_CENTER_X"); |
| 1542 | variable-initializer | 변수의 초기값을 지정합니다: glassCenterToScannerCenter = ReadShiftOffsetPreviewDouble(parameters, 0.0, "GLASS_CENTER_TO_SCANNER_CENTER", "GLASS_CENTER_TO_SCANNER_CENTER_X") |
| 1543 | return | 호출자에게 값 또는 제어를 반환합니다: return escEdgeToGlassEdge + glassCenterToScannerCenter; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadShiftOffsetPreviewInt` · L1546–1557

[Drilling.UI/CRootView.cs:1546–1557](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1546-L1557)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.CRootView.ReadShiftOffsetPreviewInt(System.Collections.Generic.IReadOnlyDictionary<string, string>, int, params string[]) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| defaultValue | int | None | False /  |
| keys | string[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1422–1422](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1422-L1422) | ReadShiftOffsetPreviewInt | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1550 | parameters.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 1550 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1548 | foreach | 컬렉션 요소를 순회합니다: foreach (var key in keys) |
| 1550 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.TryGetValue(key, out var value) |
| 1550 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed) |
| 1550 | if | 조건에 따라 분기합니다: if (parameters.TryGetValue(key, out var value) && int.TryParse(value, NumberStyles.Integer, CultureInfo.InvariantCulture, out var parsed)) |
| 1552 | return | 호출자에게 값 또는 제어를 반환합니다: return parsed; |
| 1556 | return | 호출자에게 값 또는 제어를 반환합니다: return defaultValue; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadShiftOffsetPreviewInt"]
 N0["L1548 foreach"]
 M -->|포함| N0
 N1["L1550 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadShiftOffsetPreviewDouble` · L1559–1570

[Drilling.UI/CRootView.cs:1559–1570](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1559-L1570)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.CRootView.ReadShiftOffsetPreviewDouble(System.Collections.Generic.IReadOnlyDictionary<string, string>, double, params string[]) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| defaultValue | double | None | False /  |
| keys | string[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1522–1522](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1522-L1522) | ReadShiftOffsetPreviewDouble | False |
| [Drilling.UI/CRootView.cs:1523–1523](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1523-L1523) | ReadShiftOffsetPreviewDouble | False |
| [Drilling.UI/CRootView.cs:1524–1524](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1524-L1524) | ReadShiftOffsetPreviewDouble | False |
| [Drilling.UI/CRootView.cs:1530–1530](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1530-L1530) | ReadShiftOffsetPreviewDouble | False |
| [Drilling.UI/CRootView.cs:1541–1541](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1541-L1541) | ReadShiftOffsetPreviewDouble | False |
| [Drilling.UI/CRootView.cs:1542–1542](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1542-L1542) | ReadShiftOffsetPreviewDouble | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1563 | parameters.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 1563 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1561 | foreach | 컬렉션 요소를 순회합니다: foreach (var key in keys) |
| 1563 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.TryGetValue(key, out var value) |
| 1563 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) |
| 1563 | if | 조건에 따라 분기합니다: if (parameters.TryGetValue(key, out var value) && double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed)) |
| 1565 | return | 호출자에게 값 또는 제어를 반환합니다: return parsed; |
| 1569 | return | 호출자에게 값 또는 제어를 반환합니다: return defaultValue; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadShiftOffsetPreviewDouble"]
 N0["L1561 foreach"]
 M -->|포함| N0
 N1["L1563 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FormatShiftOffsetPreviewValue` · L1572–1575

[Drilling.UI/CRootView.cs:1572–1575](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1572-L1575)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.FormatShiftOffsetPreviewValue(double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1432–1432](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1432-L1432) | FormatShiftOffsetPreviewValue | False |
| [Drilling.UI/CRootView.cs:1433–1433](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1433-L1433) | FormatShiftOffsetPreviewValue | False |
| [Drilling.UI/CRootView.cs:1471–1471](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1471-L1471) | FormatShiftOffsetPreviewValue | False |
| [Drilling.UI/CRootView.cs:1471–1471](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1471-L1471) | FormatShiftOffsetPreviewValue | False |
| [Drilling.UI/CRootView.cs:1481–1481](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1481-L1481) | FormatShiftOffsetPreviewValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1574 | value.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1574 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToString("0.###", CultureInfo.InvariantCulture) |
| 1574 | return | 호출자에게 값 또는 제어를 반환합니다: return value.ToString("0.###", CultureInfo.InvariantCulture); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadShiftOffsetValue` · L1577–1580

[Drilling.UI/CRootView.cs:1577–1580](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1577-L1580)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.CRootView.ReadShiftOffsetValue(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1348–1348](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1348-L1348) | ReadShiftOffsetValue | False |
| [Drilling.UI/CRootView.cs:1348–1348](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1348-L1348) | ReadShiftOffsetValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1579 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1579 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) |
| 1579 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) ? parsed : 0.0 |
| 1579 | return | 호출자에게 값 또는 제어를 반환합니다: return double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) ? parsed : 0.0; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `NormalizeShiftOffsetText` · L1582–1590

[Drilling.UI/CRootView.cs:1582–1590](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1582-L1590)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.NormalizeShiftOffsetText(string?) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:425–425](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L425-L425) | NormalizeShiftOffsetText | False |
| [Drilling.UI/CRootView.cs:438–438](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L438-L438) | NormalizeShiftOffsetText | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1584 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1589 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 1589 | value.Trim | resolved | string string.Trim() |
| 1589 | parsed.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 1589 | value.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1584 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(value) |
| 1584 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(value)) |
| 1586 | return | 호출자에게 값 또는 제어를 반환합니다: return "0"; |
| 1589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(value.Trim(), NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) |
| 1589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Trim() |
| 1589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parsed.ToString("0.###", CultureInfo.InvariantCulture) |
| 1589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Trim() |
| 1589 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(value.Trim(), NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) ? parsed.ToString("0.###", CultureInfo.InvariantCulture) : value.Trim() |
| 1589 | return | 호출자에게 값 또는 제어를 반환합니다: return double.TryParse(value.Trim(), NumberStyles.Float, CultureInfo.InvariantCulture, out var parsed) ? parsed.ToString("0.###", CultureInfo.InvariantCulture) : value.Trim(); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["NormalizeShiftOffsetText"]
 N0["L1584 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StartCycle` · L1592–1693

[Drilling.UI/CRootView.cs:1592–1693](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1592-L1693)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.StartCycle() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:175–175](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L175-L175) | StartCycle | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1594 | CheckHeavyAlarmForOperation | resolved | bool Drilling.UI.CRootView.CheckHeavyAlarmForOperation(string) · Drilling.UI/CRootView.cs:2573 |
| 1596 | CheckStageMotionOwnership | resolved | bool Drilling.UI.CRootView.CheckStageMotionOwnership(System.Action<string, string>, string) · Drilling.UI/CRootView.cs:673 |
| 1596 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 1598 | GetSelectedRecipeFileText | resolved | string Drilling.UI.CRootView.GetSelectedRecipeFileText() · Drilling.UI/CRootView.cs:2295 |
| 1599 | IsManualStartEligible | resolved | bool Drilling.UI.CRootView.IsManualStartEligible() · Drilling.UI/CRootView.cs:476 |
| 1599 | ReadShiftOffset | resolved | (double X, double Y) Drilling.UI.CRootView.ReadShiftOffset() · Drilling.UI/CRootView.cs:1346 |
| 1600 | confirmShiftOffset.X.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 1600 | confirmShiftOffset.Y.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 1601 | CRecipeConfirmDialog.ShowConfirmation | resolved | bool Drilling.UI.Popup.CRecipeConfirmDialog.ShowConfirmation(string, string, string, bool) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:11 |
| 1605 | CheckStageMotionOwnership | resolved | bool Drilling.UI.CRootView.CheckStageMotionOwnership(System.Action<string, string>, string) · Drilling.UI/CRootView.cs:673 |
| 1605 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 1614 | IsManualStartEligible | resolved | bool Drilling.UI.CRootView.IsManualStartEligible() · Drilling.UI/CRootView.cs:476 |
| 1617 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 1621 | new CancellationTokenSource | resolved | System.Threading.CancellationTokenSource.CancellationTokenSource() |
| 1622 | new TaskCompletionSource<bool> | resolved | System.Threading.Tasks.TaskCompletionSource<bool>.TaskCompletionSource(System.Threading.Tasks.TaskCreationOptions) |
| 1625 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1628 | WaitForInitialProcessModelPreparation | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.WaitForInitialProcessModelPreparation(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:771 |
| 1629 | PrepareInitialProcess | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.PrepareInitialProcess(bool, System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1249 |
| 1630 | IsManualStartEligible | resolved | bool Drilling.UI.CRootView.IsManualStartEligible() · Drilling.UI/CRootView.cs:476 |
| 1635 | CheckStageMotionOwnership | resolved | bool Drilling.UI.CRootView.CheckStageMotionOwnership(System.Action<string, string>, string) · Drilling.UI/CRootView.cs:673 |
| 1635 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 1638 | cycleCts.Token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1639 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1640 | _stationManager.Start | resolved | Drilling.Common.Station.ST_STATION_PROCESS_STATUS Drilling.Common.Station.CStationManager.Start(System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:97 |
| 1641 | WaitForStationCycleFinished | resolved | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> Drilling.UI.CRootView.WaitForStationCycleFinished(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1806 |
| 1642 | cycleCts.Token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1646 | finalStatus.LastMessage.Contains | resolved | bool string.Contains(string, System.StringComparison) |
| 1648 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 1661 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1662 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |
| 1671 | ex.Message.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 1672 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 1676 | ReferenceEquals | resolved | bool object.ReferenceEquals(object?, object?) |
| 1681 | cycleCts.Dispose | resolved | void System.Threading.CancellationTokenSource.Dispose() |
| 1684 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1687 | cycleCompletion.TrySetResult | resolved | bool System.Threading.Tasks.TaskCompletionSource<bool>.TrySetResult(bool) |
| 1688 | ReferenceEquals | resolved | bool object.ReferenceEquals(object?, object?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1594 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckHeavyAlarmForOperation("START") |
| 1594 | if | 조건에 따라 분기합니다: if (!CheckHeavyAlarmForOperation("START")) |
| 1595 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1596 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckStageMotionOwnership((title, message) => CRecipeConfirmDialog.ShowWarning(title, message), "START") |
| 1596 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning(title, message) |
| 1596 | if | 조건에 따라 분기합니다: if (!CheckStageMotionOwnership((title, message) => CRecipeConfirmDialog.ShowWarning(title, message), "START")) |
| 1597 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1598 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSelectedRecipeFileText() |
| 1598 | local-declaration | 지역 변수를 선언합니다: var recipeFileText = GetSelectedRecipeFileText(); |
| 1598 | variable-initializer | 변수의 초기값을 지정합니다: recipeFileText = GetSelectedRecipeFileText() |
| 1599 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsManualStartEligible() |
| 1599 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadShiftOffset() |
| 1599 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsManualStartEligible() ? ReadShiftOffset() : (X: 0.0, Y: 0.0) |
| 1599 | local-declaration | 지역 변수를 선언합니다: var confirmShiftOffset = IsManualStartEligible() ? ReadShiftOffset() : (X: 0.0, Y: 0.0); |
| 1599 | variable-initializer | 변수의 초기값을 지정합니다: confirmShiftOffset = IsManualStartEligible() ? ReadShiftOffset() : (X: 0.0, Y: 0.0) |
| 1600 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: confirmShiftOffset.X.ToString("0.###", CultureInfo.InvariantCulture) |
| 1600 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: confirmShiftOffset.Y.ToString("0.###", CultureInfo.InvariantCulture) |
| 1600 | local-declaration | 지역 변수를 선언합니다: var confirmMessage = $"현재 레시피 : {recipeFileText}\n" + $"Shift Offset X : {confirmShiftOffset.X.ToString("0.###", CultureInfo.InvariantCulture)} mm\n" + $"Shift Offset Y : {confirmShiftOffset.Y.ToString("0.###", CultureInfo.Invaria |
| 1600 | variable-initializer | 변수의 초기값을 지정합니다: confirmMessage = $"현재 레시피 : {recipeFileText}\n" + $"Shift Offset X : {confirmShiftOffset.X.ToString("0.###", CultureInfo.InvariantCulture)} mm\n" + $"Shift Offset Y : {confirmShiftOffset.Y.ToString("0.###", CultureInfo.InvariantCu |
| 1601 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowConfirmation("공정 시작", confirmMessage) |
| 1601 | if | 조건에 따라 분기합니다: if (!CRecipeConfirmDialog.ShowConfirmation("공정 시작", confirmMessage)) |
| 1603 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1605 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckStageMotionOwnership((title, message) => CRecipeConfirmDialog.ShowWarning(title, message), "START") |
| 1605 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning(title, message) |
| 1605 | if | 조건에 따라 분기합니다: if (!CheckStageMotionOwnership((title, message) => CRecipeConfirmDialog.ShowWarning(title, message), "START")) |
| 1606 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1608 | if | 조건에 따라 분기합니다: if (_autoCycleState != EN_AUTO_CYCLE_STATE.Ready) |
| 1610 | assignment | 값을 대상에 대입합니다: StatusMessage = "Semi Auto Run is already running or stopping." |
| 1611 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1614 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsManualStartEligible() |
| 1614 | if | 조건에 따라 분기합니다: if (!IsManualStartEligible()) |
| 1616 | assignment | 값을 대상에 대입합니다: StatusMessage = "Main START is available in MANUAL mode only." |
| 1617 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("공정 시작 불가", "MAIN START는 MANUAL 모드에서만 사용할 수 있습니다.\nAUTO 모드는 Stage PC 요청을 대기합니다.") |
| 1618 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1621 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CancellationTokenSource() |
| 1621 | local-declaration | 지역 변수를 선언합니다: var cycleCts = new CancellationTokenSource(); |
| 1621 | variable-initializer | 변수의 초기값을 지정합니다: cycleCts = new CancellationTokenSource() |
| 1622 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously) |
| 1622 | local-declaration | 지역 변수를 선언합니다: var cycleCompletion = new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously); |
| 1622 | variable-initializer | 변수의 초기값을 지정합니다: cycleCompletion = new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously) |
| 1623 | assignment | 값을 대상에 대입합니다: _autoCycleCts = cycleCts |
| 1624 | assignment | 값을 대상에 대입합니다: _autoCycleCompletion = cycleCompletion |
| 1625 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Preparing) |
| 1626 | try | 예외 처리 범위입니다: try |
| 1628 | await | 비동기 완료를 기다립니다: await WaitForInitialProcessModelPreparation(cycleCts.Token) |
| 1628 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForInitialProcessModelPreparation(cycleCts.Token) |
| 1629 | await | 비동기 완료를 기다립니다: await PrepareInitialProcess(applyShiftOffset: true, cancellationToken: cycleCts.Token) |
| 1629 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PrepareInitialProcess(applyShiftOffset: true, cancellationToken: cycleCts.Token) |
| 1630 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsManualStartEligible() |
| 1630 | if | 조건에 따라 분기합니다: if (!IsManualStartEligible()) |
| 1632 | assignment | 값을 대상에 대입합니다: StatusMessage = "Main START was canceled because AUTO mode was selected." |
| 1633 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1635 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CheckStageMotionOwnership((title, message) => CRecipeConfirmDialog.ShowWarning(title, message), "START") |
| 1635 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning(title, message) |
| 1635 | if | 조건에 따라 분기합니다: if (!CheckStageMotionOwnership((title, message) => CRecipeConfirmDialog.ShowWarning(title, message), "START")) |
| 1636 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1638 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cycleCts.Token.ThrowIfCancellationRequested() |
| 1639 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Running) |
| 1640 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.Start(cycleCts.Token) |
| 1641 | await | 비동기 완료를 기다립니다: await WaitForStationCycleFinished(cycleCts.Token) |
| 1641 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForStationCycleFinished(cycleCts.Token) |
| 1641 | local-declaration | 지역 변수를 선언합니다: var finalStatus = await WaitForStationCycleFinished(cycleCts.Token); |
| 1641 | variable-initializer | 변수의 초기값을 지정합니다: finalStatus = await WaitForStationCycleFinished(cycleCts.Token) |
| 1642 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cycleCts.Token.ThrowIfCancellationRequested() |
| 1643 | if | 조건에 따라 분기합니다: if (finalStatus.State == EN_STATION_STATE.Alarm &#124;&#124; finalStatus.SequenceState == EN_STATION_SEQUENCE.Error) |
| 1645 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Semi Auto Run failed: {finalStatus.LastMessage}" |
| 1646 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: finalStatus.LastMessage.Contains("Glass 정보를 생성하지 못해", StringComparison.Ordinal) |
| 1646 | if | 조건에 따라 분기합니다: if (finalStatus.LastMessage.Contains("Glass 정보를 생성하지 못해", StringComparison.Ordinal)) |
| 1648 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("공정 시작 불가", finalStatus.LastMessage) |
| 1651 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1654 | if | 조건에 따라 분기합니다: if (finalStatus.State == EN_STATION_STATE.Stopped &#124;&#124; finalStatus.SequenceState == EN_STATION_SEQUENCE.Stop) |
| 1656 | assignment | 값을 대상에 대입합니다: StatusMessage = "Semi Auto Run stopped." |
| 1657 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1660 | assignment | 값을 대상에 대입합니다: StatusMessage = IsSimulationEnvironment ? "Cycle completed in simulation mode." : "Cycle completed." |
| 1660 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsSimulationEnvironment ? "Cycle completed in simulation mode." : "Cycle completed." |
| 1661 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Ready) |
| 1662 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 1662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |
| 1664 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException) when (cycleCts.IsCancellationRequested) |
| 1666 | assignment | 값을 대상에 대입합니다: StatusMessage = "Semi Auto Run was canceled by Stop." |
| 1668 | catch | 지정 예외를 처리합니다: catch (Exception ex) |
| 1670 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Semi Auto Run failed: {ex.Message}" |
| 1671 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ex.Message.StartsWith("공정 시작에 실패했습니다.", StringComparison.Ordinal) |
| 1671 | conditional-expression | 조건에 따라 결과식을 선택합니다: ex.Message.StartsWith("공정 시작에 실패했습니다.", StringComparison.Ordinal) ? ex.Message : $"공정 시작에 실패했습니다.\n{ex.Message}" |
| 1671 | local-declaration | 지역 변수를 선언합니다: var message = ex.Message.StartsWith("공정 시작에 실패했습니다.", StringComparison.Ordinal) ? ex.Message : $"공정 시작에 실패했습니다.\n{ex.Message}"; |
| 1671 | variable-initializer | 변수의 초기값을 지정합니다: message = ex.Message.StartsWith("공정 시작에 실패했습니다.", StringComparison.Ordinal) ? ex.Message : $"공정 시작에 실패했습니다.\n{ex.Message}" |
| 1672 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("공정 시작 오류", message) |
| 1674 | finally | 종료 정리 구간입니다: finally |
| 1676 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(_autoCycleCts, cycleCts) |
| 1676 | if | 조건에 따라 분기합니다: if (ReferenceEquals(_autoCycleCts, cycleCts)) |
| 1678 | assignment | 값을 대상에 대입합니다: _autoCycleCts = null |
| 1681 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cycleCts.Dispose() |
| 1682 | if | 조건에 따라 분기합니다: if (_autoCycleState is not EN_AUTO_CYCLE_STATE.Stopping) |
| 1684 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Ready) |
| 1687 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cycleCompletion.TrySetResult(true) |
| 1688 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(_autoCycleCompletion, cycleCompletion) |
| 1688 | if | 조건에 따라 분기합니다: if (ReferenceEquals(_autoCycleCompletion, cycleCompletion)) |
| 1690 | assignment | 값을 대상에 대입합니다: _autoCycleCompletion = null |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StartCycle"]
 N0["L1594 if"]
 M -->|포함| N0
 N1["L1596 if"]
 M -->|포함| N1
 N2["L1601 if"]
 M -->|포함| N2
 N3["L1605 if"]
 M -->|포함| N3
 N4["L1608 if"]
 M -->|포함| N4
 N5["L1614 if"]
 M -->|포함| N5
 N6["L1626 try"]
 M -->|포함| N6
 N7["L1630 if"]
 N6 -->|포함| N7
 N8["L1635 if"]
 N6 -->|포함| N8
 N9["L1643 if"]
 N6 -->|포함| N9
 N10["L1646 if"]
 N9 -->|포함| N10
 N11["L1654 if"]
 N6 -->|포함| N11
 N12["L1664 catch"]
 N6 -->|포함| N12
 N13["L1668 catch"]
 N6 -->|포함| N13
 N14["L1674 finally"]
 N6 -->|포함| N14
 N15["L1676 if"]
 N14 -->|포함| N15
 N16["L1682 if"]
 N14 -->|포함| N16
 N17["L1688 if"]
 N14 -->|포함| N17
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StopCycle` · L1695–1760

[Drilling.UI/CRootView.cs:1695–1760](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1695-L1760)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.StopCycle() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:186–186](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L186-L186) | StopCycle | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1699 | _stationManager.StageRequests.StopAsync | resolved | System.Threading.Tasks.Task<bool> Drilling.Common.Station.CStageRequestSequence.StopAsync() · Drilling.Common/Station/CStationProcess.cs:5067 |
| 1700 | StopCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 1701 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |
| 1705 | CanStopAutoCycle | resolved | bool Drilling.UI.CRootView.CanStopAutoCycle() · Drilling.UI/CRootView.cs:471 |
| 1710 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1717 | _stationManager.Stop | resolved | Drilling.Common.Station.ST_STATION_PROCESS_STATUS Drilling.Common.Station.CStationManager.Stop(System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:104 |
| 1721 | .Cancel | resolved | void System.Threading.CancellationTokenSource.Cancel() |
| 1724 | WaitForStationCycleFinished | resolved | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> Drilling.UI.CRootView.WaitForStationCycleFinished(System.TimeSpan) · Drilling.UI/CRootView.cs:1793 |
| 1727 | cycleCompletion.Task.WaitAsync | resolved | System.Threading.Tasks.Task<bool> System.Threading.Tasks.Task<bool>.WaitAsync(System.TimeSpan) |
| 1731 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1736 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1737 | CompleteStopAfterTimeout | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.CompleteStopAfterTimeout(System.Threading.Tasks.TaskCompletionSource<bool>?) · Drilling.UI/CRootView.cs:1762 |
| 1741 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1743 | MessageBox.Show | unresolved | None |
| 1750 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1697 | if | 조건에 따라 분기합니다: if (_operationMode == EN_SYSTEM_MODE.Auto && (_stationManager.StageRequests.IsRunning &#124;&#124; _stationManager.StageRequests.NeedsCleanup)) |
| 1699 | assignment | 값을 대상에 대입합니다: StatusMessage = await _stationManager.StageRequests.StopAsync() ? "Stage sequence stopped. Switch MANUAL → AUTO to resume request monitoring." : "Stage operation is still stopping. Restart remains blocked." |
| 1699 | await | 비동기 완료를 기다립니다: await _stationManager.StageRequests.StopAsync() |
| 1699 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.StageRequests.StopAsync() |
| 1699 | conditional-expression | 조건에 따라 결과식을 선택합니다: await _stationManager.StageRequests.StopAsync() ? "Stage sequence stopped. Switch MANUAL → AUTO to resume request monitoring." : "Stage operation is still stopping. Restart remains blocked." |
| 1700 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopCommand.NotifyCanExecuteChanged() |
| 1701 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 1701 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |
| 1702 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1705 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CanStopAutoCycle() |
| 1705 | if | 조건에 따라 분기합니다: if (!CanStopAutoCycle()) |
| 1707 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1710 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Stopping) |
| 1711 | local-declaration | 지역 변수를 선언합니다: var cycleCts = _autoCycleCts; |
| 1711 | variable-initializer | 변수의 초기값을 지정합니다: cycleCts = _autoCycleCts |
| 1712 | local-declaration | 지역 변수를 선언합니다: var cycleCompletion = _autoCycleCompletion; |
| 1712 | variable-initializer | 변수의 초기값을 지정합니다: cycleCompletion = _autoCycleCompletion |
| 1713 | try | 예외 처리 범위입니다: try |
| 1715 | try | 예외 처리 범위입니다: try |
| 1717 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.Stop() |
| 1719 | finally | 종료 정리 구간입니다: finally |
| 1721 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Cancel() |
| 1724 | await | 비동기 완료를 기다립니다: await WaitForStationCycleFinished(AutoCycleStopTimeout) |
| 1724 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForStationCycleFinished(AutoCycleStopTimeout) |
| 1725 | if | 조건에 따라 분기합니다: if (cycleCompletion is not null) |
| 1727 | await | 비동기 완료를 기다립니다: await cycleCompletion.Task.WaitAsync(AutoCycleStopTimeout) |
| 1727 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cycleCompletion.Task.WaitAsync(AutoCycleStopTimeout) |
| 1730 | assignment | 값을 대상에 대입합니다: StatusMessage = "Cycle stopped." |
| 1731 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Ready) |
| 1733 | catch | 지정 예외를 처리합니다: catch (TimeoutException) |
| 1735 | assignment | 값을 대상에 대입합니다: StatusMessage = "Stop confirmation timed out. Start has been re-enabled. Verify station status before restarting." |
| 1736 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Ready) |
| 1737 | assignment | 값을 대상에 대입합니다: _ = CompleteStopAfterTimeout(cycleCompletion) |
| 1737 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CompleteStopAfterTimeout(cycleCompletion) |
| 1739 | catch | 지정 예외를 처리합니다: catch (Exception ex) |
| 1741 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Ready) |
| 1742 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Cycle stop failed: {ex.Message}" |
| 1743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: MessageBox.Show(Application.Current?.MainWindow, $"정지 명령에 실패했습니다. Start는 다시 활성화됩니다. 재시작 전 장비 상태를 확인하세요.\n{ex.Message}", "정지 오류", MessageBoxButton.OK, MessageBoxImage.Error) |
| 1746 | if | 조건에 따라 분기합니다: if (_autoCycleState == EN_AUTO_CYCLE_STATE.Ready) |
| 1748 | try | 예외 처리 범위입니다: try |
| 1750 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 1750 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |
| 1752 | catch | 지정 예외를 처리합니다: catch (Exception ex) |
| 1754 | if | 조건에 따라 분기합니다: if (_autoCycleState == EN_AUTO_CYCLE_STATE.Ready) |
| 1756 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Cycle state updated, but screen refresh failed: {ex.Message}" |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StopCycle"]
 N0["L1697 if"]
 M -->|포함| N0
 N1["L1705 if"]
 M -->|포함| N1
 N2["L1713 try"]
 M -->|포함| N2
 N3["L1715 try"]
 N2 -->|포함| N3
 N4["L1719 finally"]
 N3 -->|포함| N4
 N5["L1725 if"]
 N2 -->|포함| N5
 N6["L1733 catch"]
 N2 -->|포함| N6
 N7["L1739 catch"]
 N2 -->|포함| N7
 N8["L1746 if"]
 M -->|포함| N8
 N9["L1748 try"]
 N8 -->|포함| N9
 N10["L1752 catch"]
 N9 -->|포함| N10
 N11["L1754 if"]
 N10 -->|포함| N11
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CompleteStopAfterTimeout` · L1762–1791

[Drilling.UI/CRootView.cs:1762–1791](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1762-L1791)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.CompleteStopAfterTimeout(System.Threading.Tasks.TaskCompletionSource<bool>?) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cycleCompletion | System.Threading.Tasks.TaskCompletionSource<bool>? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1737–1737](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1737-L1737) | CompleteStopAfterTimeout | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1766 | WaitForStationCycleFinished | resolved | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> Drilling.UI.CRootView.WaitForStationCycleFinished(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1806 |
| 1773 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1777 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 1784 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1764 | try | 예외 처리 범위입니다: try |
| 1766 | await | 비동기 완료를 기다립니다: await WaitForStationCycleFinished(CancellationToken.None) |
| 1766 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForStationCycleFinished(CancellationToken.None) |
| 1767 | if | 조건에 따라 분기합니다: if (cycleCompletion is not null) |
| 1769 | await | 비동기 완료를 기다립니다: await cycleCompletion.Task |
| 1772 | assignment | 값을 대상에 대입합니다: StatusMessage = "Cycle stop and termination confirmed." |
| 1773 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Ready) |
| 1775 | catch | 지정 예외를 처리합니다: catch (Exception ex) |
| 1777 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Ready) |
| 1778 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Stop confirmation failed: {ex.Message}" |
| 1780 | finally | 종료 정리 구간입니다: finally |
| 1782 | try | 예외 처리 범위입니다: try |
| 1784 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 1784 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |
| 1786 | catch | 지정 예외를 처리합니다: catch (Exception ex) |
| 1788 | assignment | 값을 대상에 대입합니다: StatusMessage = $"Stop confirmation completed, but screen refresh failed: {ex.Message}" |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CompleteStopAfterTimeout"]
 N0["L1764 try"]
 M -->|포함| N0
 N1["L1767 if"]
 N0 -->|포함| N1
 N2["L1775 catch"]
 N0 -->|포함| N2
 N3["L1780 finally"]
 N0 -->|포함| N3
 N4["L1782 try"]
 N3 -->|포함| N4
 N5["L1786 catch"]
 N4 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WaitForStationCycleFinished` · L1793–1804

[Drilling.UI/CRootView.cs:1793–1804](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1793-L1804)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> Drilling.UI.CRootView.WaitForStationCycleFinished(System.TimeSpan) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| timeout | System.TimeSpan | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1724–1724](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1724-L1724) | WaitForStationCycleFinished | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1795 | new CancellationTokenSource | resolved | System.Threading.CancellationTokenSource.CancellationTokenSource(System.TimeSpan) |
| 1798 | WaitForStationCycleFinished | resolved | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> Drilling.UI.CRootView.WaitForStationCycleFinished(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:1806 |
| 1802 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1795 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CancellationTokenSource(timeout) |
| 1795 | using-declaration | 정리할 자원을 선언합니다: using var timeoutCts = new CancellationTokenSource(timeout); |
| 1795 | variable-initializer | 변수의 초기값을 지정합니다: timeoutCts = new CancellationTokenSource(timeout) |
| 1796 | try | 예외 처리 범위입니다: try |
| 1798 | await | 비동기 완료를 기다립니다: await WaitForStationCycleFinished(timeoutCts.Token) |
| 1798 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WaitForStationCycleFinished(timeoutCts.Token) |
| 1798 | return | 호출자에게 값 또는 제어를 반환합니다: return await WaitForStationCycleFinished(timeoutCts.Token); |
| 1800 | catch | 지정 예외를 처리합니다: catch (OperationCanceledException) when (timeoutCts.IsCancellationRequested) |
| 1802 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException("Station sequence did not reach a terminal state within the timeout.") |
| 1802 | throw | 예외를 발생/전달합니다: throw new TimeoutException("Station sequence did not reach a terminal state within the timeout."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WaitForStationCycleFinished"]
 N0["L1796 try"]
 M -->|포함| N0
 N1["L1800 catch"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WaitForStationCycleFinished` · L1806–1819

[Drilling.UI/CRootView.cs:1806–1819](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1806-L1819)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> Drilling.UI.CRootView.WaitForStationCycleFinished(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STATION_STATUS> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1641–1641](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1641-L1641) | WaitForStationCycleFinished | False |
| [Drilling.UI/CRootView.cs:1766–1766](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1766-L1766) | WaitForStationCycleFinished | False |
| [Drilling.UI/CRootView.cs:1798–1798](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1798-L1798) | WaitForStationCycleFinished | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1810 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 1811 | _stationManager.GetStationStatus(CancellationToken.None).FirstOrDefault | resolved | Drilling.Common.Station.ST_STATION_STATUS? System.Collections.Generic.IEnumerable<Drilling.Common.Station.ST_STATION_STATUS>.FirstOrDefault<Drilling.Common.Station.ST_STATION_STATUS>() |
| 1811 | _stationManager.GetStationStatus | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Station.ST_STATION_STATUS> Drilling.Common.Station.CStationManager.GetStationStatus(System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:79 |
| 1812 | IsStationCycleFinished | resolved | bool Drilling.UI.CRootView.IsStationCycleFinished(Drilling.Common.Station.ST_STATION_STATUS?) · Drilling.UI/CRootView.cs:1821 |
| 1817 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int, System.Threading.CancellationToken) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1808 | while | 조건을 먼저 확인하며 반복합니다: while (true) |
| 1810 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 1811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.GetStationStatus(CancellationToken.None).FirstOrDefault() |
| 1811 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.GetStationStatus(CancellationToken.None) |
| 1811 | local-declaration | 지역 변수를 선언합니다: var status = _stationManager.GetStationStatus(CancellationToken.None).FirstOrDefault(); |
| 1811 | variable-initializer | 변수의 초기값을 지정합니다: status = _stationManager.GetStationStatus(CancellationToken.None).FirstOrDefault() |
| 1812 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsStationCycleFinished(status) |
| 1812 | if | 조건에 따라 분기합니다: if (IsStationCycleFinished(status)) |
| 1814 | return | 호출자에게 값 또는 제어를 반환합니다: return status!; |
| 1817 | await | 비동기 완료를 기다립니다: await Task.Delay(200, cancellationToken) |
| 1817 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(200, cancellationToken) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WaitForStationCycleFinished"]
 N0["L1808 while"]
 M -->|포함| N0
 N1["L1812 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsStationCycleFinished` · L1821–1834

[Drilling.UI/CRootView.cs:1821–1834](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1821-L1834)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsStationCycleFinished(Drilling.Common.Station.ST_STATION_STATUS?) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| status | Drilling.Common.Station.ST_STATION_STATUS? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1812–1812](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1812-L1812) | IsStationCycleFinished | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1823 | if | 조건에 따라 분기합니다: if (status is null) |
| 1825 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1828 | if | 조건에 따라 분기합니다: if (status.SequenceState == EN_STATION_SEQUENCE.Ready) |
| 1830 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 1833 | return | 호출자에게 값 또는 제어를 반환합니다: return status.State is EN_STATION_STATE.Complete or EN_STATION_STATE.Stopped or EN_STATION_STATE.Alarm; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsStationCycleFinished"]
 N0["L1823 if"]
 M -->|포함| N0
 N1["L1828 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetAutoCycleState` · L1836–1846

[Drilling.UI/CRootView.cs:1836–1846](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1836-L1846)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| state | Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1625–1625](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1625-L1625) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1639–1639](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1639-L1639) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1661–1661](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1661-L1661) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1684–1684](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1684-L1684) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1710–1710](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1710-L1710) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1731–1731](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1731-L1731) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1736–1736](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1736-L1736) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1741–1741](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1741-L1741) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1773–1773](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1773-L1773) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:1777–1777](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1777-L1777) | SetAutoCycleState | False |
| [Drilling.UI/CRootView.cs:2722–2722](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2722-L2722) | SetAutoCycleState | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1844 | RefreshOperationModeAccess | resolved | void Drilling.UI.CRootView.RefreshOperationModeAccess() · Drilling.UI/CRootView.cs:718 |
| 1845 | NotifyOperationCommandStates | resolved | void Drilling.UI.CRootView.NotifyOperationCommandStates() · Drilling.UI/CRootView.cs:1848 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1838 | if | 조건에 따라 분기합니다: if (_autoCycleState == state) |
| 1840 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1843 | assignment | 값을 대상에 대입합니다: _autoCycleState = state |
| 1844 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshOperationModeAccess() |
| 1845 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NotifyOperationCommandStates() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetAutoCycleState"]
 N0["L1838 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `NotifyOperationCommandStates` · L1848–1853

[Drilling.UI/CRootView.cs:1848–1853](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1848-L1853)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.NotifyOperationCommandStates() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1845–1845](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1845-L1845) | NotifyOperationCommandStates | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1850 | StartCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 1851 | StopCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 1852 | ToggleOperationModeCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1850 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StartCommand.NotifyCanExecuteChanged() |
| 1851 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopCommand.NotifyCanExecuteChanged() |
| 1852 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ToggleOperationModeCommand.NotifyCanExecuteChanged() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SelectHead` · L1855–1881

[Drilling.UI/CRootView.cs:1855–1881](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1855-L1881)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.SelectHead(object?) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | object? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:197–197](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L197-L197) | SelectHead | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1860 | int.TryParse | resolved | bool int.TryParse(string?, out int) |
| 1869 | IsHeadEnabled | resolved | bool Drilling.UI.CRootView.IsHeadEnabled(int) · Drilling.UI/CRootView.cs:1895 |
| 1872 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |
| 1873 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |
| 1879 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |
| 1880 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1857 | local-declaration | 지역 변수를 선언합니다: var headNo = parameter switch { int value => value, string text when int.TryParse(text, out var parsed) => parsed, ST_HEAD_PREVIEW head => head.HeadNo, _ => _selectedHeadNo }; |
| 1857 | switch-expression | 값별 결과식을 선택합니다: parameter switch { int value => value, string text when int.TryParse(text, out var parsed) => parsed, ST_HEAD_PREVIEW head => head.HeadNo, _ => _selectedHeadNo } |
| 1857 | variable-initializer | 변수의 초기값을 지정합니다: headNo = parameter switch { int value => value, string text when int.TryParse(text, out var parsed) => parsed, ST_HEAD_PREVIEW head => head.HeadNo, _ => _selectedHeadNo } |
| 1860 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(text, out var parsed) |
| 1864 | if | 조건에 따라 분기합니다: if (headNo <= 0) |
| 1866 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1869 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsHeadEnabled(headNo) |
| 1869 | if | 조건에 따라 분기합니다: if (!IsHeadEnabled(headNo)) |
| 1871 | assignment | 값을 대상에 대입합니다: StatusMessage = $"HEAD {headNo:00} is disabled by H{headNo:00}_USE." |
| 1872 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 1873 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 1873 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |
| 1874 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1877 | assignment | 값을 대상에 대입합니다: _selectedHeadNo = headNo |
| 1878 | assignment | 값을 대상에 대입합니다: StatusMessage = $"HEAD {headNo:00} selected. Preview updated." |
| 1879 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 1880 | await | 비동기 완료를 기다립니다: await RefreshCurrentScreen() |
| 1880 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SelectHead"]
 N0["L1857 switch-expression"]
 M -->|포함| N0
 N1["L1864 if"]
 M -->|포함| N1
 N2["L1869 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CanSelectHeadParameter` · L1883–1893

[Drilling.UI/CRootView.cs:1883–1893](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1883-L1893)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.CanSelectHeadParameter(object?) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | object? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:202–202](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L202-L202) | CanSelectHeadParameter | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1888 | int.TryParse | resolved | bool int.TryParse(string?, out int) |
| 1892 | IsHeadEnabled | resolved | bool Drilling.UI.CRootView.IsHeadEnabled(int) · Drilling.UI/CRootView.cs:1895 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1885 | local-declaration | 지역 변수를 선언합니다: var headNo = parameter switch { int value => value, string text when int.TryParse(text, out var parsed) => parsed, ST_HEAD_PREVIEW head => head.HeadNo, _ => _selectedHeadNo }; |
| 1885 | switch-expression | 값별 결과식을 선택합니다: parameter switch { int value => value, string text when int.TryParse(text, out var parsed) => parsed, ST_HEAD_PREVIEW head => head.HeadNo, _ => _selectedHeadNo } |
| 1885 | variable-initializer | 변수의 초기값을 지정합니다: headNo = parameter switch { int value => value, string text when int.TryParse(text, out var parsed) => parsed, ST_HEAD_PREVIEW head => head.HeadNo, _ => _selectedHeadNo } |
| 1888 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(text, out var parsed) |
| 1892 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsHeadEnabled(headNo) |
| 1892 | return | 호출자에게 값 또는 제어를 반환합니다: return headNo > 0 && IsHeadEnabled(headNo); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CanSelectHeadParameter"]
 N0["L1885 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsHeadEnabled` · L1895–1911

[Drilling.UI/CRootView.cs:1895–1911](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1895-L1911)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.IsHeadEnabled(int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| headNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1869–1869](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1869-L1869) | IsHeadEnabled | False |
| [Drilling.UI/CRootView.cs:1892–1892](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1892-L1892) | IsHeadEnabled | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1904 | _manager.Setting().LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 1904 | _manager.Setting | resolved | Drilling.Common.Managers.CSettingManager Drilling.Common.Managers.CManager.Setting() · Drilling.Common/Managers/CManager.cs:340 |
| 1905 | CScannerStatusSnapshotReader.IsHeadEnabled | resolved | bool Drilling.UI.Menu.Menus.CScannerStatusSnapshotReader.IsHeadEnabled(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>, int) · Drilling.UI/Menu/Menus/CScannerStatusSnapshotReader.cs:129 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1897 | if | 조건에 따라 분기합니다: if (headNo is < 1 or > 8) |
| 1899 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1902 | try | 예외 처리 범위입니다: try |
| 1904 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting().LoadSection(EN_SETTING_TAB.Option, CancellationToken.None) |
| 1904 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting() |
| 1904 | local-declaration | 지역 변수를 선언합니다: var settings = _manager.Setting().LoadSection(EN_SETTING_TAB.Option, CancellationToken.None); |
| 1904 | variable-initializer | 변수의 초기값을 지정합니다: settings = _manager.Setting().LoadSection(EN_SETTING_TAB.Option, CancellationToken.None) |
| 1905 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CScannerStatusSnapshotReader.IsHeadEnabled(settings, headNo) |
| 1905 | return | 호출자에게 값 또는 제어를 반환합니다: return CScannerStatusSnapshotReader.IsHeadEnabled(settings, headNo); |
| 1907 | catch | 지정 예외를 처리합니다: catch (Exception exception) when (exception is InvalidDataException or IOException) |
| 1909 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["IsHeadEnabled"]
 N0["L1897 if"]
 M -->|포함| N0
 N1["L1902 try"]
 M -->|포함| N1
 N2["L1907 catch"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StartClock` · L1913–1967

[Drilling.UI/CRootView.cs:1913–1967](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1913-L1967)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.StartClock() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:234–234](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L234-L234) | StartClock | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1915 | new DispatcherTimer | unresolved | None |
| 1917 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |
| 1923 | DateTime.Now.ToString | resolved | string System.DateTime.ToString(string?) |
| 1924 | DateTime.Now.ToString | resolved | string System.DateTime.ToString(string?) |
| 1929 | StopCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 1932 | Stopwatch.GetTimestamp | resolved | long System.Diagnostics.Stopwatch.GetTimestamp() |
| 1934 | HasElapsed | resolved | bool Drilling.UI.CRootView.HasElapsed(long, long, System.TimeSpan) · Drilling.UI/CRootView.cs:1047 |
| 1936 | HasElapsed | resolved | bool Drilling.UI.CRootView.HasElapsed(long, long, System.TimeSpan) · Drilling.UI/CRootView.cs:1047 |
| 1940 | RefreshMonitorLiveData | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshMonitorLiveData() · Drilling.UI/CRootView.cs:787 |
| 1946 | RefreshManualScannerStatus | resolved | void Drilling.UI.CRootView.RefreshManualScannerStatus() · Drilling.UI/CRootView.cs:873 |
| 1947 | RefreshSystemStatus | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshSystemStatus() · Drilling.UI/CRootView.cs:749 |
| 1954 | RefreshMainLiveStatus | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshMainLiveStatus() · Drilling.UI/CRootView.cs:819 |
| 1955 | RefreshSystemStatus | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshSystemStatus() · Drilling.UI/CRootView.cs:749 |
| 1959 | RefreshSystemStatus | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshSystemStatus() · Drilling.UI/CRootView.cs:749 |
| 1963 | ReportClockTickError | resolved | void Drilling.UI.CRootView.ReportClockTickError(System.Exception) · Drilling.UI/CRootView.cs:1013 |
| 1966 | timer.Start | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DispatcherTimer { Interval = TimeSpan.FromSeconds(1) } |
| 1915 | local-declaration | 지역 변수를 선언합니다: var timer = new DispatcherTimer { Interval = TimeSpan.FromSeconds(1) }; |
| 1915 | variable-initializer | 변수의 초기값을 지정합니다: timer = new DispatcherTimer { Interval = TimeSpan.FromSeconds(1) } |
| 1917 | assignment | 값을 대상에 대입합니다: Interval = TimeSpan.FromSeconds(1) |
| 1917 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(1) |
| 1919 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: timer.Tick += async (_, _) => { try { CurrentDateText = DateTime.Now.ToString("yyyy-MM-dd"); CurrentTimeText = DateTime.Now.ToString("HH:mm:ss"); if (_operationMode == EN_SYSTEM_MODE.Auto) { var stage = _stationManager.StageReques |
| 1921 | try | 예외 처리 범위입니다: try |
| 1923 | assignment | 값을 대상에 대입합니다: CurrentDateText = DateTime.Now.ToString("yyyy-MM-dd") |
| 1923 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DateTime.Now.ToString("yyyy-MM-dd") |
| 1924 | assignment | 값을 대상에 대입합니다: CurrentTimeText = DateTime.Now.ToString("HH:mm:ss") |
| 1924 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DateTime.Now.ToString("HH:mm:ss") |
| 1925 | if | 조건에 따라 분기합니다: if (_operationMode == EN_SYSTEM_MODE.Auto) |
| 1927 | local-declaration | 지역 변수를 선언합니다: var stage = _stationManager.StageRequests.Status; |
| 1927 | variable-initializer | 변수의 초기값을 지정합니다: stage = _stationManager.StageRequests.Status |
| 1928 | assignment | 값을 대상에 대입합니다: StatusMessage = $"AUTO / {stage.State}: {stage.Detail}" |
| 1929 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopCommand.NotifyCanExecuteChanged() |
| 1932 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stopwatch.GetTimestamp() |
| 1932 | local-declaration | 지역 변수를 선언합니다: var nowTimestamp = Stopwatch.GetTimestamp(); |
| 1932 | variable-initializer | 변수의 초기값을 지정합니다: nowTimestamp = Stopwatch.GetTimestamp() |
| 1933 | local-declaration | 지역 변수를 선언합니다: var monitorRefreshInterval = MonitorDefaultRefreshInterval; |
| 1933 | variable-initializer | 변수의 초기값을 지정합니다: monitorRefreshInterval = MonitorDefaultRefreshInterval |
| 1934 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: HasElapsed(_lastMonitorScreenRefreshTimestamp, nowTimestamp, monitorRefreshInterval) |
| 1934 | local-declaration | 지역 변수를 선언합니다: var shouldRefreshMonitorScreen = SelectedMenu.Menu == EN_MENU.Monitor && HasElapsed(_lastMonitorScreenRefreshTimestamp, nowTimestamp, monitorRefreshInterval); |
| 1934 | variable-initializer | 변수의 초기값을 지정합니다: shouldRefreshMonitorScreen = SelectedMenu.Menu == EN_MENU.Monitor && HasElapsed(_lastMonitorScreenRefreshTimestamp, nowTimestamp, monitorRefreshInterval) |
| 1935 | local-declaration | 지역 변수를 선언합니다: var shouldRefreshManualScannerStatus = SelectedMenu.Menu == EN_MENU.Manual && CurrentScreen.Manual is not null; |
| 1935 | variable-initializer | 변수의 초기값을 지정합니다: shouldRefreshManualScannerStatus = SelectedMenu.Menu == EN_MENU.Manual && CurrentScreen.Manual is not null |
| 1936 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: HasElapsed(_lastMainLiveStatusRefreshTimestamp, nowTimestamp, MainLiveStatusRefreshInterval) |
| 1936 | local-declaration | 지역 변수를 선언합니다: var shouldRefreshMainLiveStatus = SelectedMenu.Menu == EN_MENU.Main && HasElapsed(_lastMainLiveStatusRefreshTimestamp, nowTimestamp, MainLiveStatusRefreshInterval); |
| 1936 | variable-initializer | 변수의 초기값을 지정합니다: shouldRefreshMainLiveStatus = SelectedMenu.Menu == EN_MENU.Main && HasElapsed(_lastMainLiveStatusRefreshTimestamp, nowTimestamp, MainLiveStatusRefreshInterval) |
| 1937 | if | 조건에 따라 분기합니다: if (shouldRefreshMonitorScreen) |
| 1939 | assignment | 값을 대상에 대입합니다: _lastMonitorScreenRefreshTimestamp = nowTimestamp |
| 1940 | await | 비동기 완료를 기다립니다: await RefreshMonitorLiveData() |
| 1940 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshMonitorLiveData() |
| 1941 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1944 | if | 조건에 따라 분기합니다: if (shouldRefreshManualScannerStatus) |
| 1946 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshManualScannerStatus() |
| 1947 | await | 비동기 완료를 기다립니다: await RefreshSystemStatus() |
| 1947 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshSystemStatus() |
| 1948 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1951 | if | 조건에 따라 분기합니다: if (shouldRefreshMainLiveStatus) |
| 1953 | assignment | 값을 대상에 대입합니다: _lastMainLiveStatusRefreshTimestamp = nowTimestamp |
| 1954 | await | 비동기 완료를 기다립니다: await RefreshMainLiveStatus() |
| 1954 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshMainLiveStatus() |
| 1955 | await | 비동기 완료를 기다립니다: await RefreshSystemStatus() |
| 1955 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshSystemStatus() |
| 1956 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1959 | await | 비동기 완료를 기다립니다: await RefreshSystemStatus() |
| 1959 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshSystemStatus() |
| 1961 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 1963 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReportClockTickError(exception) |
| 1966 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: timer.Start() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["StartClock"]
 N0["L1921 try"]
 M -->|포함| N0
 N1["L1925 if"]
 N0 -->|포함| N1
 N2["L1937 if"]
 N0 -->|포함| N2
 N3["L1944 if"]
 N0 -->|포함| N3
 N4["L1951 if"]
 N0 -->|포함| N4
 N5["L1961 catch"]
 N0 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateMenus` · L1969–2263

[Drilling.UI/CRootView.cs:1969–2263](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1969-L2263)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase> Drilling.UI.CRootView.CreateMenus(Drilling.Common.Station.CStationManager, Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Motion.CMotionManager, Drilling.Common.Alarm.CAlarmManager, Drilling.Common.InterLock.CInterLockManager, Drilling.Common.Managers.CManualScanFileBase, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Managers.CSettingManager, Drilling.Common.Product.CProductManager, Drilling.Common.Review.CReviewManager, Drilling.Common.Station.CAutomationScriptFileBase) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| stationManager | Drilling.Common.Station.CStationManager | None | False /  |
| interfaceManager | Drilling.Common.Interface.CInterfaceManager | None | False /  |
| motionManager | Drilling.Common.Motion.CMotionManager | None | False /  |
| alarmManager | Drilling.Common.Alarm.CAlarmManager | None | False /  |
| interLockManager | Drilling.Common.InterLock.CInterLockManager | None | False /  |
| manualScanFile | Drilling.Common.Managers.CManualScanFileBase | None | False /  |
| recipeManager | Drilling.Common.Managers.CRecipeManager | None | False /  |
| settingManager | Drilling.Common.Managers.CSettingManager | None | False /  |
| productManager | Drilling.Common.Product.CProductManager | None | False /  |
| reviewManager | Drilling.Common.Review.CReviewManager | None | False /  |
| automationScriptFile | Drilling.Common.Station.CAutomationScriptFileBase | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:230–230](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L230-L230) | CreateMenus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2148 | new CMenuCorrection | resolved | Drilling.UI.Menu.Menus.CMenuCorrection.CMenuCorrection(Drilling.Common.Review.CReviewResultFileBase, Drilling.Common.Review.CReviewOffsetFileBase, Drilling.Common.Review.CReviewManager, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Managers.CSettingManager, System.Func<string>, System.Action<string>, System.Func<System.Threading.Tasks.Task>, Drilling.Common.Interface.CInterfaceManager?, Drilling.Common.Correction.CAlignOffsetLogFileBase?, Drilling.Common.Managers.CManager?, Drilling.Common.Station.CAutomationScriptFileBase?) · Drilling.UI/Menu/Menus/CMenuCorrection.cs:113 |
| 2149 | _manager.ReviewResultFile | resolved | Drilling.Common.Review.CReviewResultFileBase Drilling.Common.Managers.CManager.ReviewResultFile() · Drilling.Common/Managers/CManager.cs:433 |
| 2150 | _manager.ReviewOffsetFile | resolved | Drilling.Common.Review.CReviewOffsetFileBase Drilling.Common.Managers.CManager.ReviewOffsetFile() · Drilling.Common/Managers/CManager.cs:438 |
| 2158 | new Drilling.File.Correction.CAlignOffsetLogFile | resolved | Drilling.File.Correction.CAlignOffsetLogFile.CAlignOffsetLogFile(string) · Drilling.File/Correction/CAlignOffsetLogFile.cs:40 |
| 2160 | new Drilling.File.Script.CAutomation1ScriptFile | resolved | Drilling.File.Script.CAutomation1ScriptFile.CAutomation1ScriptFile(string?) · Drilling.File/Script/CAutomation1ScriptFile.cs:27 |
| 2160 | Path.Combine | resolved | string System.IO.Path.Combine(string, string, string, string) |
| 2160 | Directory.GetParent | resolved | System.IO.DirectoryInfo? System.IO.Directory.GetParent(string) |
| 2160 | Path.GetFullPath | resolved | string System.IO.Path.GetFullPath(string) |
| 2174 | new CMenuReview | resolved | Drilling.UI.Menu.Menus.CMenuReview.CMenuReview(Drilling.Common.Review.CReviewManager, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Station.CStationManager, Drilling.Common.Product.CProductManager, System.Func<string>, System.Action<string>, System.Action, System.Action, Drilling.Common.Interface.CInterfaceManager?, Drilling.Common.Managers.CSettingManager?, System.Action?) · Drilling.UI/Menu/Menus/CMenuReview.cs:172 |
| 2188 | new CMenuMain | resolved | Drilling.UI.Menu.Menus.CMenuMain.CMenuMain(Drilling.Common.Station.CStationManager, Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Automation.CAutomationManager, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Managers.CSettingManager, Drilling.Common.Review.CReviewManager, System.Func<string>, System.Action<string>, System.Func<System.Threading.Tasks.Task>, Drilling.Common.Interface.CPowerMeasureService?) · Drilling.UI/Menu/Menus/CMenuMain.cs:25 |
| 2188 | _manager.Automation | resolved | Drilling.Common.Automation.CAutomationManager Drilling.Common.Managers.CManager.Automation() · Drilling.Common/Managers/CManager.cs:360 |
| 2189 | new CMenuManual | resolved | Drilling.UI.Menu.Menus.CMenuManual.CMenuManual(Drilling.Common.Managers.CManager, Drilling.Common.Managers.CManualScanFileBase, Drilling.Common.Station.CAutomationScriptFileBase, System.Func<int>, System.Func<string>, System.Func<string>, System.Action<string>, Drilling.UI.Menu.CButtonCommand, System.Action<string>, System.Action, System.Func<System.Threading.Tasks.Task>, System.Func<(double X, double Y)>?) · Drilling.UI/Menu/Menus/CMenuManual.cs:164 |
| 2203 | new CMenuRecipe | resolved | Drilling.UI.Menu.Menus.CMenuRecipe.CMenuRecipe(Drilling.Common.Managers.CRecipeManager, Drilling.Common.Managers.CSettingManager, System.Func<string>, System.Action<string>, System.Func<string>, System.Action<string>, System.Func<string>, System.Action<string>, System.Func<Drilling.UI.Menu.Menus.CMenuRecipe?>, System.Action<string>, System.Action<Drilling.UI.Menu.Menus.EN_MENU, string>, System.Action, System.Func<System.Threading.Tasks.Task>) · Drilling.UI/Menu/Menus/CMenuRecipe.cs:67 |
| 2218 | new CMenuSetting | resolved | Drilling.UI.Menu.Menus.CMenuSetting.CMenuSetting(Drilling.Common.Managers.CSettingManager, System.Func<string>, System.Action<string>, System.Func<string>, System.Action<string>, System.Func<Drilling.UI.Menu.Menus.CMenuSetting?>, System.Action<string>, System.Action<Drilling.UI.Menu.Menus.EN_MENU, string>, System.Action, System.Func<System.Threading.Tasks.Task>) · Drilling.UI/Menu/Menus/CMenuSetting.cs:30 |
| 2230 | new CMenuAlarm | candidate | OverloadResolutionFailure |
| 2230 | _manager.Log | resolved | CLogManager Drilling.Common.Managers.CManager.Log() · Drilling.Common/Managers/CManager.cs:388 |
| 2231 | new CMenuMonitor | candidate | OverloadResolutionFailure |
| 2238 | _manager.ReviewOffsetFile | resolved | Drilling.Common.Review.CReviewOffsetFileBase Drilling.Common.Managers.CManager.ReviewOffsetFile() · Drilling.Common/Managers/CManager.cs:438 |
| 2246 | _manager.Log | resolved | CLogManager Drilling.Common.Managers.CManager.Log() · Drilling.Common/Managers/CManager.cs:388 |
| 2249 | new CMenuPm | resolved | Drilling.UI.Menu.Menus.CMenuPm.CMenuPm(System.Func<Drilling.Common.Managers.ST_PM_LOCK_STATUS>, System.Action) · Drilling.UI/Menu/Menus/CMenuPm.cs:9 |
| 2256 | correctionMenu.ConfigureReview | resolved | void Drilling.UI.Menu.Menus.CMenuCorrection.ConfigureReview(Drilling.UI.Menu.Menus.CMenuReview) · Drilling.UI/Menu/Menus/CMenuCorrection.cs:389 |
| 2260 | menus.OfType<CMenuMain>().Single | resolved | Drilling.UI.Menu.Menus.CMenuMain System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuMain>.Single<Drilling.UI.Menu.Menus.CMenuMain>() |
| 2260 | menus.OfType<CMenuMain> | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuMain> System.Collections.IEnumerable.OfType<Drilling.UI.Menu.Menus.CMenuMain>() |
| 2261 | menus.OfType<CMenuManual>().Single().ConfigureAutomationStatusReader | resolved | void Drilling.UI.Menu.Menus.CMenuManual.ConfigureAutomationStatusReader(System.Func<Drilling.Common.Station.ST_STATION_PROCESS_STATUS, System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_AUTOMATION_CONTROLLER_STATUS_ITEM>>) · Drilling.UI/Menu/Menus/CMenuManual.cs:1885 |
| 2261 | menus.OfType<CMenuManual>().Single | resolved | Drilling.UI.Menu.Menus.CMenuManual System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuManual>.Single<Drilling.UI.Menu.Menus.CMenuManual>() |
| 2261 | menus.OfType<CMenuManual> | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuManual> System.Collections.IEnumerable.OfType<Drilling.UI.Menu.Menus.CMenuManual>() |
| 2262 | menus.ToDictionary | resolved | System.Collections.Generic.Dictionary<Drilling.UI.Menu.Menus.EN_MENU, Drilling.UI.Menu.Menus.CMenuBase> System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuBase>.ToDictionary<Drilling.UI.Menu.Menus.CMenuBase, Drilling.UI.Menu.Menus.EN_MENU>(System.Func<Drilling.UI.Menu.Menus.CMenuBase, Drilling.UI.Menu.Menus.EN_MENU>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuCorrection( _manager.ReviewResultFile(), _manager.ReviewOffsetFile(), reviewManager, recipeManager, settingManager, SelectSelectedRecipeId5, SetCorrectionStatusMessage, RefreshCurrentScreen, interfaceManager, ne… |
| 2148 | local-declaration | 지역 변수를 선언합니다: var correctionMenu = new CMenuCorrection( _manager.ReviewResultFile(), _manager.ReviewOffsetFile(), reviewManager, recipeManager, settingManager, SelectSelectedRecipeId5, SetCorrectionStatusMessage, RefreshCurrentScreen, interface |
| 2148 | variable-initializer | 변수의 초기값을 지정합니다: correctionMenu = new CMenuCorrection( _manager.ReviewResultFile(), _manager.ReviewOffsetFile(), reviewManager, recipeManager, settingManager, SelectSelectedRecipeId5, SetCorrectionStatusMessage, RefreshCurrentScreen, interfaceMana |
| 2149 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.ReviewResultFile() |
| 2150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.ReviewOffsetFile() |
| 2158 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Drilling.File.Correction.CAlignOffsetLogFile(_manager.ConfigRoot) |
| 2160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Drilling.File.Script.CAutomation1ScriptFile(Path.Combine(Directory.GetParent(Path.GetFullPath(_manager.ConfigRoot))!.FullName, "Data", "Script", "DefaultOffset")) |
| 2160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.Combine(Directory.GetParent(Path.GetFullPath(_manager.ConfigRoot))!.FullName, "Data", "Script", "DefaultOffset") |
| 2160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Directory.GetParent(Path.GetFullPath(_manager.ConfigRoot)) |
| 2160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFullPath(_manager.ConfigRoot) |
| 2174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuReview( reviewManager, recipeManager, stationManager, productManager, SelectSelectedRecipeId4, SetReviewStatusMessage, RefreshMenuAccessAfterReview, ApplyMenuAccessForOperationMode, interfaceManager, settingMana… |
| 2174 | local-declaration | 지역 변수를 선언합니다: var reviewMenu = new CMenuReview( reviewManager, recipeManager, stationManager, productManager, SelectSelectedRecipeId4, SetReviewStatusMessage, RefreshMenuAccessAfterReview, ApplyMenuAccessForOperationMode, interfaceManager, sett |
| 2174 | variable-initializer | 변수의 초기값을 지정합니다: reviewMenu = new CMenuReview( reviewManager, recipeManager, stationManager, productManager, SelectSelectedRecipeId4, SetReviewStatusMessage, RefreshMenuAccessAfterReview, ApplyMenuAccessForOperationMode, interfaceManager, settingM |
| 2187 | local-declaration | 지역 변수를 선언합니다: CMenuBase[] menus = [ new CMenuMain(stationManager, interfaceManager, _manager.Automation(), recipeManager, settingManager, reviewManager, SelectSelectedRecipeId, SetMainStatusMessage, RefreshCurrentScreen, _manager.PowerMeasure), |
| 2187 | variable-initializer | 변수의 초기값을 지정합니다: menus = [ new CMenuMain(stationManager, interfaceManager, _manager.Automation(), recipeManager, settingManager, reviewManager, SelectSelectedRecipeId, SetMainStatusMessage, RefreshCurrentScreen, _manager.PowerMeasure), new CMenuMa |
| 2188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuMain(stationManager, interfaceManager, _manager.Automation(), recipeManager, settingManager, reviewManager, SelectSelectedRecipeId, SetMainStatusMessage, RefreshCurrentScreen, _manager.PowerMeasure) |
| 2188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Automation() |
| 2189 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuManual( _manager, manualScanFile, automationScriptFile, SelectSelectedHeadNo, SelectSelectedRecipeId2, SelectSelectedManualSettingName, SetSelectedManualSettingName, SelectHeadCommand, SetManualStatusMessage, Re… |
| 2203 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuRecipe( recipeManager, settingManager, SelectSelectedRecipeId2, SetSelectedRecipeId, SelectViewRecipeId, SetViewRecipeId, SelectSelectedRecipeCategory, SetSelectedRecipeCategory, SelectRecipe, SetRecipeStatusMes… |
| 2218 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuSetting( settingManager, SelectSelectedSettingTab, SetSelectedSettingTab, SelectSelectedSettingGroup, SetSelectedSettingGroup, SelectSetting, SetSettingStatusMessage, ShowSettingLoadingScreen, RefreshShellStatus… |
| 2230 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuAlarm(alarmManager, stationManager, SetAlarmStatusMessage, RefreshShellStatusItems, RefreshCurrentScreen, _manager.Log().LogDirectory) |
| 2230 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log() |
| 2231 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuMonitor( interfaceManager, motionManager, interLockManager, productManager, recipeManager, settingManager, _manager.ReviewOffsetFile(), SelectSelectedRecipeId3, SelectSelectedMonitorTab, SetSelectedMonitorTab, S… |
| 2238 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.ReviewOffsetFile() |
| 2246 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log() |
| 2249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMenuPm(GetPMLockStatus, EnterPMLock) |
| 2256 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: correctionMenu.ConfigureReview(reviewMenu) |
| 2257 | foreach | 컬렉션 요소를 순회합니다: foreach (var menu in menus) |
| 2258 | assignment | 값을 대상에 대입합니다: menu.OperationAllowed = CheckHeavyAlarmForOperation |
| 2259 | assignment | 값을 대상에 대입합니다: reviewMenu.OperationAllowed = CheckHeavyAlarmForOperation |
| 2260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menus.OfType<CMenuMain>().Single() |
| 2260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menus.OfType<CMenuMain>() |
| 2260 | local-declaration | 지역 변수를 선언합니다: var mainStatus = menus.OfType<CMenuMain>().Single(); |
| 2260 | variable-initializer | 변수의 초기값을 지정합니다: mainStatus = menus.OfType<CMenuMain>().Single() |
| 2261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menus.OfType<CMenuManual>().Single().ConfigureAutomationStatusReader(mainStatus.ReadAutomationControllerStatusSnapshot) |
| 2261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menus.OfType<CMenuManual>().Single() |
| 2261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menus.OfType<CMenuManual>() |
| 2262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menus.ToDictionary(SelectMenu) |
| 2262 | return | 호출자에게 값 또는 제어를 반환합니다: return menus.ToDictionary(SelectMenu); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateMenus"]
 N0["L2257 foreach"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedRecipeId` · L1983–1986

[Drilling.UI/CRootView.cs:1983–1986](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1983-L1986)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedRecipeId() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1985 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedRecipeId; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetMainStatusMessage` · L1988–1991

[Drilling.UI/CRootView.cs:1988–1991](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1988-L1991)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetMainStatusMessage(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1990 | assignment | 값을 대상에 대입합니다: StatusMessage = message |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedHeadNo` · L1993–1996

[Drilling.UI/CRootView.cs:1993–1996](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1993-L1996)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int SelectSelectedHeadNo() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1995 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedHeadNo; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedManualSettingName` · L1998–2001

[Drilling.UI/CRootView.cs:1998–2001](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1998-L2001)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedManualSettingName() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2000 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedManualSettingName; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetSelectedManualSettingName` · L2003–2006

[Drilling.UI/CRootView.cs:2003–2006](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2003-L2006)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetSelectedManualSettingName(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2005 | assignment | 값을 대상에 대입합니다: _selectedManualSettingName = value |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetManualStatusMessage` · L2008–2011

[Drilling.UI/CRootView.cs:2008–2011](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2008-L2011)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetManualStatusMessage(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2010 | assignment | 값을 대상에 대입합니다: StatusMessage = message |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedRecipeId2` · L2013–2016

[Drilling.UI/CRootView.cs:2013–2016](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2013-L2016)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedRecipeId2() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2015 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedRecipeId; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetSelectedRecipeId` · L2018–2021

[Drilling.UI/CRootView.cs:2018–2021](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2018-L2021)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetSelectedRecipeId(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2020 | NormalizeRecipeId | resolved | string Drilling.UI.CRootView.NormalizeRecipeId(string) · Drilling.UI/CRootView.cs:2305 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2020 | assignment | 값을 대상에 대입합니다: _selectedRecipeId = NormalizeRecipeId(value) |
| 2020 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeRecipeId(value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectViewRecipeId` · L2023–2026

[Drilling.UI/CRootView.cs:2023–2026](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2023-L2026)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectViewRecipeId() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2025 | return | 호출자에게 값 또는 제어를 반환합니다: return _viewRecipeId; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetViewRecipeId` · L2028–2031

[Drilling.UI/CRootView.cs:2028–2031](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2028-L2031)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetViewRecipeId(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2030 | NormalizeRecipeId | resolved | string Drilling.UI.CRootView.NormalizeRecipeId(string) · Drilling.UI/CRootView.cs:2305 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2030 | assignment | 값을 대상에 대입합니다: _viewRecipeId = NormalizeRecipeId(value) |
| 2030 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeRecipeId(value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectRecipe` · L2033–2036

[Drilling.UI/CRootView.cs:2033–2036](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2033-L2036)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CMenuRecipe? SelectRecipe() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CMenuRecipe? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2035 | return | 호출자에게 값 또는 제어를 반환합니다: return CurrentScreen.Recipe; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedRecipeCategory` · L2038–2041

[Drilling.UI/CRootView.cs:2038–2041](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2038-L2041)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedRecipeCategory() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2040 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedRecipeCategory; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetSelectedRecipeCategory` · L2043–2046

[Drilling.UI/CRootView.cs:2043–2046](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2043-L2046)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetSelectedRecipeCategory(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2045 | assignment | 값을 대상에 대입합니다: _selectedRecipeCategory = value |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetRecipeStatusMessage` · L2048–2051

[Drilling.UI/CRootView.cs:2048–2051](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2048-L2051)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetRecipeStatusMessage(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2050 | assignment | 값을 대상에 대입합니다: StatusMessage = message |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShowRecipeLoadingScreen` · L2053–2056

[Drilling.UI/CRootView.cs:2053–2056](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2053-L2056)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void ShowRecipeLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |
| title | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2055 | CreateLoadingScreen | resolved | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CreateLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) · Drilling.UI/CRootView.cs:2265 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2055 | assignment | 값을 대상에 대입합니다: CurrentScreen = CreateLoadingScreen(menu, title) |
| 2055 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateLoadingScreen(menu, title) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedSettingTab` · L2058–2061

[Drilling.UI/CRootView.cs:2058–2061](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2058-L2061)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedSettingTab() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2060 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedSettingTab; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetSelectedSettingTab` · L2063–2066

[Drilling.UI/CRootView.cs:2063–2066](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2063-L2066)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetSelectedSettingTab(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2065 | assignment | 값을 대상에 대입합니다: _selectedSettingTab = value |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedSettingGroup` · L2068–2071

[Drilling.UI/CRootView.cs:2068–2071](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2068-L2071)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedSettingGroup() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2070 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedSettingGroup; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetSelectedSettingGroup` · L2073–2076

[Drilling.UI/CRootView.cs:2073–2076](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2073-L2076)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetSelectedSettingGroup(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2075 | assignment | 값을 대상에 대입합니다: _selectedSettingGroup = value |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSetting` · L2078–2081

[Drilling.UI/CRootView.cs:2078–2081](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2078-L2081)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CMenuSetting? SelectSetting() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CMenuSetting? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2080 | return | 호출자에게 값 또는 제어를 반환합니다: return CurrentScreen.Setting; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetSettingStatusMessage` · L2083–2086

[Drilling.UI/CRootView.cs:2083–2086](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2083-L2086)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetSettingStatusMessage(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2085 | assignment | 값을 대상에 대입합니다: StatusMessage = message |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShowSettingLoadingScreen` · L2088–2091

[Drilling.UI/CRootView.cs:2088–2091](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2088-L2091)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void ShowSettingLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |
| title | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2090 | CreateLoadingScreen | resolved | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CreateLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) · Drilling.UI/CRootView.cs:2265 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2090 | assignment | 값을 대상에 대입합니다: CurrentScreen = CreateLoadingScreen(menu, title) |
| 2090 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateLoadingScreen(menu, title) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetAlarmStatusMessage` · L2093–2096

[Drilling.UI/CRootView.cs:2093–2096](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2093-L2096)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetAlarmStatusMessage(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2095 | assignment | 값을 대상에 대입합니다: StatusMessage = message |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedRecipeId3` · L2098–2101

[Drilling.UI/CRootView.cs:2098–2101](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2098-L2101)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedRecipeId3() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2100 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedRecipeId; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedMonitorTab` · L2103–2106

[Drilling.UI/CRootView.cs:2103–2106](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2103-L2106)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedMonitorTab() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2105 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedMonitorTab; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetSelectedMonitorTab` · L2108–2111

[Drilling.UI/CRootView.cs:2108–2111](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2108-L2111)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetSelectedMonitorTab(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2110 | NormalizeMonitorTab | resolved | string Drilling.UI.CRootView.NormalizeMonitorTab(string) · Drilling.UI/CRootView.cs:2327 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2110 | assignment | 값을 대상에 대입합니다: _selectedMonitorTab = NormalizeMonitorTab(value) |
| 2110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: NormalizeMonitorTab(value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetMonitorStatusMessage` · L2113–2116

[Drilling.UI/CRootView.cs:2113–2116](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2113-L2116)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetMonitorStatusMessage(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2115 | assignment | 값을 대상에 대입합니다: StatusMessage = message |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `CanExecuteMonitorWriteCommand` · L2118–2121

[Drilling.UI/CRootView.cs:2118–2121](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2118-L2121)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool CanExecuteMonitorWriteCommand() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2120 | return | 호출자에게 값 또는 제어를 반환합니다: return _operationMode == EN_SYSTEM_MODE.Manual; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedRecipeId4` · L2123–2126

[Drilling.UI/CRootView.cs:2123–2126](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2123-L2126)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedRecipeId4() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2125 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedRecipeId; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetReviewStatusMessage` · L2128–2131

[Drilling.UI/CRootView.cs:2128–2131](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2128-L2131)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetReviewStatusMessage(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2130 | assignment | 값을 대상에 대입합니다: StatusMessage = message |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `RefreshMenuAccessAfterReview` · L2133–2136

[Drilling.UI/CRootView.cs:2133–2136](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2133-L2136)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void RefreshMenuAccessAfterReview() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2135 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2135 | assignment | 값을 대상에 대입합니다: _ = RefreshCurrentScreen() |
| 2135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectSelectedRecipeId5` · L2138–2141

[Drilling.UI/CRootView.cs:2138–2141](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2138-L2141)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectSelectedRecipeId5() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2140 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedRecipeId; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SetCorrectionStatusMessage` · L2143–2146

[Drilling.UI/CRootView.cs:2143–2146](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2143-L2146)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SetCorrectionStatusMessage(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2145 | assignment | 값을 대상에 대입합니다: StatusMessage = message |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `IsCorrectionMenuItem` · L2162–2165

[Drilling.UI/CRootView.cs:2162–2165](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2162-L2165)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool IsCorrectionMenuItem(Drilling.UI.Menu.Menus.CMenuItem) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.CMenuItem | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2164 | return | 호출자에게 값 또는 제어를 반환합니다: return menu.Menu == EN_MENU.Correction; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `OpenCorrectionReview` · L2167–2172

[Drilling.UI/CRootView.cs:2167–2172](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2167-L2172)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void OpenCorrectionReview() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2169 | Menus.First | resolved | Drilling.UI.Menu.Menus.CMenuItem System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuItem>.First<Drilling.UI.Menu.Menus.CMenuItem>(System.Func<Drilling.UI.Menu.Menus.CMenuItem, bool>) |
| 2171 | correctionMenu.SelectTabCommand.Execute | resolved | void Drilling.UI.Menu.CButtonCommand.Execute(object?) · Drilling.UI/Menu/CButtonCommand.cs:19 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2169 | assignment | 값을 대상에 대입합니다: SelectedMenu = Menus.First(IsCorrectionMenuItem) |
| 2169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Menus.First(IsCorrectionMenuItem) |
| 2170 | if | 조건에 따라 분기합니다: if (SelectedMenu.Menu == EN_MENU.Correction) |
| 2171 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: correctionMenu.SelectTabCommand.Execute("REVIEW") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OpenCorrectionReview"]
 N0["L2170 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectMenu` · L2251–2254

[Drilling.UI/CRootView.cs:2251–2254](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2251-L2254)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.EN_MENU SelectMenu(Drilling.UI.Menu.Menus.CMenuBase) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.UI.Menu.Menus.EN_MENU |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.CMenuBase | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2253 | return | 호출자에게 값 또는 제어를 반환합니다: return menu.Menu; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateLoadingScreen` · L2265–2268

[Drilling.UI/CRootView.cs:2265–2268](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2265-L2268)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.CScreenViewModel Drilling.UI.CRootView.CreateLoadingScreen(Drilling.UI.Menu.Menus.EN_MENU, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.UI.Menu.Menus.CScreenViewModel |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |
| title | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:172–172](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L172-L172) | CreateLoadingScreen | False |
| [Drilling.UI/CRootView.cs:500–500](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L500-L500) | CreateLoadingScreen | False |
| [Drilling.UI/CRootView.cs:2055–2055](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2055-L2055) | CreateLoadingScreen | False |
| [Drilling.UI/CRootView.cs:2090–2090](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2090-L2090) | CreateLoadingScreen | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2267 | new CScreenViewModel | resolved | Drilling.UI.Menu.Menus.CScreenViewModel.CScreenViewModel(Drilling.UI.Menu.Menus.EN_MENU, string, string, System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_DISPLAY_ITEM>, System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_SCREEN_SECTION>, bool, Drilling.UI.Menu.Menus.CMenuMain?, Drilling.UI.Menu.Menus.CMenuManual?, Drilling.UI.Menu.Menus.CMenuRecipe?, Drilling.UI.Menu.Menus.CMenuSetting?, Drilling.UI.Menu.Menus.CMenuAlarm?, Drilling.UI.Menu.Menus.CMenuMonitor?, Drilling.UI.Menu.Menus.CMenuReview?, Drilling.UI.Menu.Menus.CMenuCorrection?, Drilling.UI.Menu.Menus.CMenuPm?) · Drilling.UI/Menu/Menus/CMenuBase.cs:411 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2267 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CScreenViewModel(menu, title, "Loading screen state.", [], []) |
| 2267 | return | 호출자에게 값 또는 제어를 반환합니다: return new CScreenViewModel(menu, title, "Loading screen state.", [], []); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetHeaderRecipeId` · L2270–2273

[Drilling.UI/CRootView.cs:2270–2273](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2270-L2273)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.GetHeaderRecipeId(Drilling.Common.Managers.ST_SYSTEM_STATUS) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| status | Drilling.Common.Managers.ST_SYSTEM_STATUS | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1141–1141](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1141-L1141) | GetHeaderRecipeId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2272 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) |
| 2272 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) ? status.CurrentRecipeId : _selectedRecipeId |
| 2272 | return | 호출자에게 값 또는 제어를 반환합니다: return string.IsNullOrWhiteSpace(_selectedRecipeId) ? status.CurrentRecipeId : _selectedRecipeId; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SyncSelectedManualSettingFromScreen` · L2275–2282

[Drilling.UI/CRootView.cs:2275–2282](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2275-L2282)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.SyncSelectedManualSettingFromScreen() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:516–516](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L516-L516) | SyncSelectedManualSettingFromScreen | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2277 | .Trim | resolved | string string.Trim() |
| 2278 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2277 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Trim() |
| 2277 | local-declaration | 지역 변수를 선언합니다: var settingName = CurrentScreen.Manual?.LoadedSettingName?.Trim() ?? ""; |
| 2277 | variable-initializer | 변수의 초기값을 지정합니다: settingName = CurrentScreen.Manual?.LoadedSettingName?.Trim() ?? "" |
| 2278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(settingName) |
| 2278 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(settingName)) |
| 2280 | assignment | 값을 대상에 대입합니다: _selectedManualSettingName = settingName |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SyncSelectedManualSettingFromScreen"]
 N0["L2278 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SyncSelectedSettingSelectionFromScreen` · L2284–2293

[Drilling.UI/CRootView.cs:2284–2293](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2284-L2293)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.SyncSelectedSettingSelectionFromScreen() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:521–521](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L521-L521) | SyncSelectedSettingSelectionFromScreen | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2286 | if | 조건에 따라 분기합니다: if (CurrentScreen.Setting is null) |
| 2288 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2291 | assignment | 값을 대상에 대입합니다: _selectedSettingTab = CurrentScreen.Setting.SelectedTab |
| 2292 | assignment | 값을 대상에 대입합니다: _selectedSettingGroup = CurrentScreen.Setting.SelectedGroup |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SyncSelectedSettingSelectionFromScreen"]
 N0["L2286 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetSelectedRecipeFileText` · L2295–2303

[Drilling.UI/CRootView.cs:2295–2303](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2295-L2303)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.GetSelectedRecipeFileText() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1181–1181](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1181-L1181) | GetSelectedRecipeFileText | False |
| [Drilling.UI/CRootView.cs:1598–1598](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1598-L1598) | GetSelectedRecipeFileText | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2302 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2297 | if | 조건에 따라 분기합니다: if (CurrentScreen.Recipe is not null) |
| 2299 | return | 호출자에게 값 또는 제어를 반환합니다: return CurrentScreen.Recipe.RecipeSelectionSummaryText; |
| 2302 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) |
| 2302 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(_selectedRecipeId) ? "-" : $"{_selectedRecipeId}.csv" |
| 2302 | return | 호출자에게 값 또는 제어를 반환합니다: return string.IsNullOrWhiteSpace(_selectedRecipeId) ? "-" : $"{_selectedRecipeId}.csv"; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetSelectedRecipeFileText"]
 N0["L2297 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `NormalizeRecipeId` · L2305–2308

[Drilling.UI/CRootView.cs:2305–2308](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2305-L2308)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.NormalizeRecipeId(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:152–152](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L152-L152) | NormalizeRecipeId | False |
| [Drilling.UI/CRootView.cs:2020–2020](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2020-L2020) | NormalizeRecipeId | False |
| [Drilling.UI/CRootView.cs:2030–2030](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2030-L2030) | NormalizeRecipeId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2307 | Path.GetFileNameWithoutExtension | resolved | string? System.IO.Path.GetFileNameWithoutExtension(string?) |
| 2307 | (value ?? "").Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Path.GetFileNameWithoutExtension((value ?? "").Trim()) |
| 2307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (value ?? "").Trim() |
| 2307 | return | 호출자에게 값 또는 제어를 반환합니다: return Path.GetFileNameWithoutExtension((value ?? "").Trim()); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateMonitorFooterStatusItems` · L2310–2325

[Drilling.UI/CRootView.cs:2310–2325](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2310-L2325)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> Drilling.UI.CRootView.CreateMonitorFooterStatusItems() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1209–1209](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1209-L1209) | CreateMonitorFooterStatusItems | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2314 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2314 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2314 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2315 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2315 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2315 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2316 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2316 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2316 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2317 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2317 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2317 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2318 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2318 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2318 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2319 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2319 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2319 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2320 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2320 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2320 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2321 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2321 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2321 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2322 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2322 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2322 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2323 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2323 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2323 | new | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2312 | return | 호출자에게 값 또는 제어를 반환합니다: return _selectedMonitorTab switch { "XPS" => [new("SCREEN", "MONITOR / SCANNER TILT", "SIM"), new("AXIS", "Selected Axis GX", "SIM"), new("SIM", "Simulation PASS", "ONLINE")], "LASER" => [new("SCREEN", "MONITOR / LASER/POWERMETER" |
| 2312 | switch-expression | 값별 결과식을 선택합니다: _selectedMonitorTab switch { "XPS" => [new("SCREEN", "MONITOR / SCANNER TILT", "SIM"), new("AXIS", "Selected Axis GX", "SIM"), new("SIM", "Simulation PASS", "ONLINE")], "LASER" => [new("SCREEN", "MONITOR / LASER/POWERMETER", "SIM" |
| 2314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / SCANNER TILT", "SIM") |
| 2314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("AXIS", "Selected Axis GX", "SIM") |
| 2314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / LASER/POWERMETER", "SIM") |
| 2315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("LASER", "Laser SAFE", "ONLINE") |
| 2315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / ATTENUATOR", "SIM") |
| 2316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("POSITION", "Position 55.000", "WARN") |
| 2316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / BET", "SIM") |
| 2317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("BET", "MAG 1.000 / DIV 1.000", "ONLINE") |
| 2317 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / POWERMETER", "SIM") |
| 2318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("POWER", "Power Meter", "ONLINE") |
| 2318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / DOE TILT", "SIM") |
| 2319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("MOTOR", "PicoMotor", "ONLINE") |
| 2319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / PRODUCT", "SIM") |
| 2320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("PRODUCT", "Product Tracking", "ONLINE") |
| 2320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / MELSEC", "SIM") |
| 2321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("PLC", "Read / Write Map", "WARN") |
| 2321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", "MONITOR / COORDINATE VIEWER", "SIM") |
| 2322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("VIEWER", "Coordinate Viewer", "SIM") |
| 2322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |
| 2323 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SCREEN", $"MONITOR / {_selectedMonitorTab}", "SIM") |
| 2323 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("CONTROL", "Status Monitor", "WARN") |
| 2323 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("SIM", "Simulation PASS", "ONLINE") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateMonitorFooterStatusItems"]
 N0["L2312 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `NormalizeMonitorTab` · L2327–2340

[Drilling.UI/CRootView.cs:2327–2340](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2327-L2340)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.NormalizeMonitorTab(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| tab | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2110–2110](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2110-L2110) | NormalizeMonitorTab | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2329 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 2329 | tab.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 2329 | tab.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2329 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(tab) |
| 2329 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: tab.Trim().ToUpperInvariant() |
| 2329 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: tab.Trim() |
| 2329 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(tab) ? "PRODUCT" : tab.Trim().ToUpperInvariant() |
| 2329 | local-declaration | 지역 변수를 선언합니다: var normalized = string.IsNullOrWhiteSpace(tab) ? "PRODUCT" : tab.Trim().ToUpperInvariant(); |
| 2329 | variable-initializer | 변수의 초기값을 지정합니다: normalized = string.IsNullOrWhiteSpace(tab) ? "PRODUCT" : tab.Trim().ToUpperInvariant() |
| 2330 | return | 호출자에게 값 또는 제어를 반환합니다: return normalized switch { "ATT" => "ATTENUATOR", "MOTOR" or "XPS" or "SCANNERTILT" or "SCANNER TILT" or "SCANNER_TILT" => "XPS", "POWER" or "POWERMETER" or "POWER_METER" or "POWER METER" or "LASER/POWERMETER" => "LASER", "PICO" o |
| 2330 | switch-expression | 값별 결과식을 선택합니다: normalized switch { "ATT" => "ATTENUATOR", "MOTOR" or "XPS" or "SCANNERTILT" or "SCANNER TILT" or "SCANNER_TILT" => "XPS", "POWER" or "POWERMETER" or "POWER_METER" or "POWER METER" or "LASER/POWERMETER" => "LASER", "PICO" or "PICO |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["NormalizeMonitorTab"]
 N0["L2330 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateFallbackST_SYSTEM_STATUS` · L2342–2359

[Drilling.UI/CRootView.cs:2342–2359](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2342-L2359)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_SYSTEM_STATUS Drilling.UI.CRootView.CreateFallbackST_SYSTEM_STATUS() |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Managers.ST_SYSTEM_STATUS |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:83–83](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L83-L83) | CreateFallbackST_SYSTEM_STATUS | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2344 | new ST_SYSTEM_STATUS | resolved | Drilling.Common.Managers.ST_SYSTEM_STATUS.ST_SYSTEM_STATUS(string, Drilling.Common.Managers.EN_SYSTEM_MODE, Drilling.Common.Alarm.EN_ALARM_STATE, Drilling.Common.Managers.EN_PM_LOCK_STATE, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>) · Drilling.Common/Managers/CManager.cs:746 |
| 2350 | new | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS.ST_DEVICE_COMM_STATUS(Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.EN_COMM_STATE) · Drilling.Common/Interface/CInterfaceManager.cs:2888 |
| 2351 | new | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS.ST_DEVICE_COMM_STATUS(Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.EN_COMM_STATE) · Drilling.Common/Interface/CInterfaceManager.cs:2888 |
| 2352 | new | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS.ST_DEVICE_COMM_STATUS(Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.EN_COMM_STATE) · Drilling.Common/Interface/CInterfaceManager.cs:2888 |
| 2353 | new | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS.ST_DEVICE_COMM_STATUS(Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.EN_COMM_STATE) · Drilling.Common/Interface/CInterfaceManager.cs:2888 |
| 2354 | new | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS.ST_DEVICE_COMM_STATUS(Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.EN_COMM_STATE) · Drilling.Common/Interface/CInterfaceManager.cs:2888 |
| 2355 | new | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS.ST_DEVICE_COMM_STATUS(Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.EN_COMM_STATE) · Drilling.Common/Interface/CInterfaceManager.cs:2888 |
| 2356 | new | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS.ST_DEVICE_COMM_STATUS(Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.EN_COMM_STATE) · Drilling.Common/Interface/CInterfaceManager.cs:2888 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2344 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_SYSTEM_STATUS( "DRILL_A01", EN_SYSTEM_MODE.Auto, EN_ALARM_STATE.Clear, EN_PM_LOCK_STATE.Released, [ new(EN_EQP_MODULE.WonikCtrl, EN_COMM_STATE.Simulation), new(EN_EQP_MODULE.Vision, EN_COMM_STATE.Simulation), new(… |
| 2344 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_SYSTEM_STATUS( "DRILL_A01", EN_SYSTEM_MODE.Auto, EN_ALARM_STATE.Clear, EN_PM_LOCK_STATE.Released, [ new(EN_EQP_MODULE.WonikCtrl, EN_COMM_STATE.Simulation), new(EN_EQP_MODULE.Vision, EN_COMM_STATE.Simulation), new(EN_ |
| 2350 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(EN_EQP_MODULE.WonikCtrl, EN_COMM_STATE.Simulation) |
| 2351 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(EN_EQP_MODULE.Vision, EN_COMM_STATE.Simulation) |
| 2352 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(EN_EQP_MODULE.Automation1, EN_COMM_STATE.Simulation) |
| 2353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(EN_EQP_MODULE.Motion, EN_COMM_STATE.Simulation) |
| 2354 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(EN_EQP_MODULE.TalonLaser, EN_COMM_STATE.Simulation) |
| 2355 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(EN_EQP_MODULE.Attenuator, EN_COMM_STATE.Simulation) |
| 2356 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(EN_EQP_MODULE.Bet, EN_COMM_STATE.Simulation) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `NormalizeCommunicationStatuses` · L2361–2374

[Drilling.UI/CRootView.cs:2361–2374](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2361-L2374)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> Drilling.UI.CRootView.NormalizeCommunicationStatuses(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| modules | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1067–1067](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1067-L1067) | NormalizeCommunicationStatuses | False |
| [Drilling.UI/CRootView.cs:1083–1083](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1083-L1083) | NormalizeCommunicationStatuses | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2373 | Enum.GetValues<EN_EQP_MODULE>().Select(SelectItem).ToArray | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS[] System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>.ToArray<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>() |
| 2373 | Enum.GetValues<EN_EQP_MODULE>().Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.EN_EQP_MODULE>.Select<Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>(System.Func<Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>) |
| 2373 | Enum.GetValues<EN_EQP_MODULE> | resolved | Drilling.Common.Interface.EN_EQP_MODULE[] System.Enum.GetValues<Drilling.Common.Interface.EN_EQP_MODULE>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enum.GetValues<EN_EQP_MODULE>().Select(SelectItem).ToArray() |
| 2373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enum.GetValues<EN_EQP_MODULE>().Select(SelectItem) |
| 2373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enum.GetValues<EN_EQP_MODULE>() |
| 2373 | return | 호출자에게 값 또는 제어를 반환합니다: return Enum.GetValues<EN_EQP_MODULE>().Select(SelectItem).ToArray(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectItem` · L2363–2371

[Drilling.UI/CRootView.cs:2363–2371](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2363-L2371)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS SelectItem(Drilling.Common.Interface.EN_EQP_MODULE) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2370 | modules.FirstOrDefault | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS? System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>.FirstOrDefault<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS>(System.Func<Drilling.Common.Interface.ST_DEVICE_COMM_STATUS, bool>) |
| 2370 | new ST_DEVICE_COMM_STATUS | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS.ST_DEVICE_COMM_STATUS(Drilling.Common.Interface.EN_EQP_MODULE, Drilling.Common.Interface.EN_COMM_STATE) · Drilling.Common/Interface/CInterfaceManager.cs:2888 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2370 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: modules.FirstOrDefault(MatchesItem) |
| 2370 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_DEVICE_COMM_STATUS(module, EN_COMM_STATE.Offline) |
| 2370 | return | 호출자에게 값 또는 제어를 반환합니다: return modules.FirstOrDefault(MatchesItem) ?? new ST_DEVICE_COMM_STATUS(module, EN_COMM_STATE.Offline); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L2365–2368

[Drilling.UI/CRootView.cs:2365–2368](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2365-L2368)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(Drilling.Common.Interface.ST_DEVICE_COMM_STATUS) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| status | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2367 | return | 호출자에게 값 또는 제어를 반환합니다: return status.Module == module; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ModuleHeader` · L2376–2418

[Drilling.UI/CRootView.cs:2376–2418](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2376-L2418)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM Drilling.UI.CRootView.ModuleHeader(Drilling.Common.Managers.ST_SYSTEM_STATUS, Drilling.Common.Interface.EN_EQP_MODULE) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| status | Drilling.Common.Managers.ST_SYSTEM_STATUS | None | False /  |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1145–1145](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1145-L1145) | ModuleHeader | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2378 | GetModuleCommunicationStatuses | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.UI.CRootView.GetModuleCommunicationStatuses(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2420 |
| 2381 | status.GetModule | resolved | Drilling.Common.Interface.ST_DEVICE_COMM_STATUS Drilling.Common.Managers.ST_SYSTEM_STATUS.GetModule(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.Common/Managers/CManager.cs:748 |
| 2382 | ConnectionStateValue | resolved | string Drilling.UI.CRootView.ConnectionStateValue(Drilling.Common.Interface.EN_COMM_STATE) · Drilling.UI/CRootView.cs:2515 |
| 2383 | new ST_HEADER_STATUS_ITEM | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2383 | ModuleDisplayName | resolved | string Drilling.UI.CRootView.ModuleDisplayName(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2498 |
| 2386 | GetSelectedModuleIndex | resolved | int Drilling.UI.CRootView.GetSelectedModuleIndex(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.UI/CRootView.cs:2440 |
| 2389 | ConnectionStateValue | resolved | string Drilling.UI.CRootView.ConnectionStateValue(Drilling.Common.Interface.EN_COMM_STATE) · Drilling.UI/CRootView.cs:2515 |
| 2408 | new ST_HEADER_STATUS_ITEM | resolved | Drilling.UI.Menu.Menus.ST_HEADER_STATUS_ITEM.ST_HEADER_STATUS_ITEM(string, string, string, bool, string, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?, Drilling.UI.Menu.CButtonCommand?) · Drilling.UI/Menu/Menus/CMenuBase.cs:338 |
| 2409 | ModuleDisplayName | resolved | string Drilling.UI.CRootView.ModuleDisplayName(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2498 |
| 2414 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 2415 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 2416 | new CButtonCommand | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2378 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetModuleCommunicationStatuses(module) |
| 2378 | local-declaration | 지역 변수를 선언합니다: var moduleStatuses = GetModuleCommunicationStatuses(module); |
| 2378 | variable-initializer | 변수의 초기값을 지정합니다: moduleStatuses = GetModuleCommunicationStatuses(module) |
| 2379 | if | 조건에 따라 분기합니다: if (moduleStatuses.Count == 0) |
| 2381 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: status.GetModule(module) |
| 2381 | local-declaration | 지역 변수를 선언합니다: var fallbackConnection = status.GetModule(module).ConnectionState; |
| 2381 | variable-initializer | 변수의 초기값을 지정합니다: fallbackConnection = status.GetModule(module).ConnectionState |
| 2382 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ConnectionStateValue(fallbackConnection) |
| 2382 | local-declaration | 지역 변수를 선언합니다: var fallbackValue = ConnectionStateValue(fallbackConnection); |
| 2382 | variable-initializer | 변수의 초기값을 지정합니다: fallbackValue = ConnectionStateValue(fallbackConnection) |
| 2383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_HEADER_STATUS_ITEM(ModuleDisplayName(module), fallbackValue, fallbackValue) |
| 2383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ModuleDisplayName(module) |
| 2383 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_HEADER_STATUS_ITEM(ModuleDisplayName(module), fallbackValue, fallbackValue); |
| 2386 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSelectedModuleIndex(module, moduleStatuses.Count) |
| 2386 | local-declaration | 지역 변수를 선언합니다: var selectedIndex = GetSelectedModuleIndex(module, moduleStatuses.Count); |
| 2386 | variable-initializer | 변수의 초기값을 지정합니다: selectedIndex = GetSelectedModuleIndex(module, moduleStatuses.Count) |
| 2387 | local-declaration | 지역 변수를 선언합니다: var selectedStatus = moduleStatuses[selectedIndex]; |
| 2387 | variable-initializer | 변수의 초기값을 지정합니다: selectedStatus = moduleStatuses[selectedIndex] |
| 2388 | local-declaration | 지역 변수를 선언합니다: var connection = selectedStatus.ConnectionState; |
| 2388 | variable-initializer | 변수의 초기값을 지정합니다: connection = selectedStatus.ConnectionState |
| 2389 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ConnectionStateValue(connection) |
| 2389 | local-declaration | 지역 변수를 선언합니다: var value = ConnectionStateValue(connection); |
| 2389 | variable-initializer | 변수의 초기값을 지정합니다: value = ConnectionStateValue(connection) |
| 2390 | local-declaration | 지역 변수를 선언합니다: var displayNumber = selectedStatus.Number + 1; |
| 2390 | variable-initializer | 변수의 초기값을 지정합니다: displayNumber = selectedStatus.Number + 1 |
| 2391 | conditional-expression | 조건에 따라 결과식을 선택합니다: moduleStatuses.Count > 1 ? $"{displayNumber}: {selectedStatus.ConnectionText}" : selectedStatus.ConnectionText |
| 2391 | local-declaration | 지역 변수를 선언합니다: var displayValue = moduleStatuses.Count > 1 ? $"{displayNumber}: {selectedStatus.ConnectionText}" : selectedStatus.ConnectionText; |
| 2391 | variable-initializer | 변수의 초기값을 지정합니다: displayValue = moduleStatuses.Count > 1 ? $"{displayNumber}: {selectedStatus.ConnectionText}" : selectedStatus.ConnectionText |
| 2392 | conditional-expression | 조건에 따라 결과식을 선택합니다: moduleStatuses.Count > 1 ? $"{displayNumber}/{moduleStatuses.Count}" : "" |
| 2392 | local-declaration | 지역 변수를 선언합니다: var pageText = moduleStatuses.Count > 1 ? $"{displayNumber}/{moduleStatuses.Count}" : ""; |
| 2392 | variable-initializer | 변수의 초기값을 지정합니다: pageText = moduleStatuses.Count > 1 ? $"{displayNumber}/{moduleStatuses.Count}" : "" |
| 2408 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_HEADER_STATUS_ITEM( ModuleDisplayName(module), displayValue, value, moduleStatuses.Count > 1, pageText, new CButtonCommand(SelectPreviousModuleStatusCallback), new CButtonCommand(SelectNextModuleStatusCallback), n… |
| 2408 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_HEADER_STATUS_ITEM( ModuleDisplayName(module), displayValue, value, moduleStatuses.Count > 1, pageText, new CButtonCommand(SelectPreviousModuleStatusCallback), new CButtonCommand(SelectNextModuleStatusCallback), new  |
| 2409 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ModuleDisplayName(module) |
| 2414 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(SelectPreviousModuleStatusCallback) |
| 2415 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(SelectNextModuleStatusCallback) |
| 2416 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CButtonCommand(ShowModuleStatusPopupCallback) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ModuleHeader"]
 N0["L2379 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectPreviousModuleStatusCallback` · L2393–2396

[Drilling.UI/CRootView.cs:2393–2396](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2393-L2396)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SelectPreviousModuleStatusCallback(object?) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2395 | SelectPreviousModuleStatus | resolved | void Drilling.UI.CRootView.SelectPreviousModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2457 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2395 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SelectPreviousModuleStatus(module) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectNextModuleStatusCallback` · L2398–2401

[Drilling.UI/CRootView.cs:2398–2401](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2398-L2401)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void SelectNextModuleStatusCallback(object?) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2400 | SelectNextModuleStatus | resolved | void Drilling.UI.CRootView.SelectNextModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2462 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SelectNextModuleStatus(module) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShowModuleStatusPopupCallback` · L2403–2406

[Drilling.UI/CRootView.cs:2403–2406](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2403-L2406)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void ShowModuleStatusPopupCallback(object?) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| arg0 | object? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2405 | ShowModuleStatusPopup | resolved | void Drilling.UI.CRootView.ShowModuleStatusPopup(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2480 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2405 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ShowModuleStatusPopup(module) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetModuleCommunicationStatuses` · L2420–2438

[Drilling.UI/CRootView.cs:2420–2438](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2420-L2438)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.UI.CRootView.GetModuleCommunicationStatuses(Drilling.Common.Interface.EN_EQP_MODULE) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2378–2378](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2378-L2378) | GetModuleCommunicationStatuses | False |
| [Drilling.UI/CRootView.cs:2469–2469](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2469-L2469) | GetModuleCommunicationStatuses | False |
| [Drilling.UI/CRootView.cs:2482–2482](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2482-L2482) | GetModuleCommunicationStatuses | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2437 | _interfaceCommStatuses.Where(ShouldIncludeItem).OrderBy(SelectNumber).ThenBy(SelectNickName, StringComparer.OrdinalIgnoreCase).ToArray | resolved | Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS[] System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.ToArray<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>() |
| 2437 | _interfaceCommStatuses.Where(ShouldIncludeItem).OrderBy(SelectNumber).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.ThenBy<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, string>(System.Func<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, string>, System.Collections.Generic.IComparer<string>?) |
| 2437 | _interfaceCommStatuses.Where(ShouldIncludeItem).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.OrderBy<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, int>(System.Func<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, int>) |
| 2437 | _interfaceCommStatuses.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.Where<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>(System.Func<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, bool>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceCommStatuses.Where(ShouldIncludeItem).OrderBy(SelectNumber).ThenBy(SelectNickName, StringComparer.OrdinalIgnoreCase).ToArray() |
| 2437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceCommStatuses.Where(ShouldIncludeItem).OrderBy(SelectNumber).ThenBy(SelectNickName, StringComparer.OrdinalIgnoreCase) |
| 2437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceCommStatuses.Where(ShouldIncludeItem).OrderBy(SelectNumber) |
| 2437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceCommStatuses.Where(ShouldIncludeItem) |
| 2437 | return | 호출자에게 값 또는 제어를 반환합니다: return _interfaceCommStatuses.Where(ShouldIncludeItem).OrderBy(SelectNumber).ThenBy(SelectNickName, StringComparer.OrdinalIgnoreCase).ToArray(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `ShouldIncludeItem` · L2422–2425

[Drilling.UI/CRootView.cs:2422–2425](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2422-L2425)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool ShouldIncludeItem(Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| status | Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2424 | return | 호출자에게 값 또는 제어를 반환합니다: return status.Module == module; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectNumber` · L2427–2430

[Drilling.UI/CRootView.cs:2427–2430](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2427-L2430)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int SelectNumber(Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| status | Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2429 | return | 호출자에게 값 또는 제어를 반환합니다: return status.Number; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectNickName` · L2432–2435

[Drilling.UI/CRootView.cs:2432–2435](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2432-L2435)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string SelectNickName(Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| status | Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2434 | return | 호출자에게 값 또는 제어를 반환합니다: return status.NickName; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetSelectedModuleIndex` · L2440–2455

[Drilling.UI/CRootView.cs:2440–2455](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2440-L2455)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.CRootView.GetSelectedModuleIndex(Drilling.Common.Interface.EN_EQP_MODULE, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |
| count | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2386–2386](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2386-L2386) | GetSelectedModuleIndex | False |
| [Drilling.UI/CRootView.cs:2475–2475](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2475-L2475) | GetSelectedModuleIndex | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2447 | _selectedHeaderModuleIndexes.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<Drilling.Common.Interface.EN_EQP_MODULE, int>.TryGetValue(Drilling.Common.Interface.EN_EQP_MODULE, out int) |
| 2452 | Math.Clamp | resolved | int System.Math.Clamp(int, int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2442 | if | 조건에 따라 분기합니다: if (count <= 0) |
| 2444 | return | 호출자에게 값 또는 제어를 반환합니다: return 0; |
| 2447 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _selectedHeaderModuleIndexes.TryGetValue(module, out var selectedIndex) |
| 2447 | if | 조건에 따라 분기합니다: if (!_selectedHeaderModuleIndexes.TryGetValue(module, out var selectedIndex)) |
| 2449 | assignment | 값을 대상에 대입합니다: selectedIndex = 0 |
| 2452 | assignment | 값을 대상에 대입합니다: selectedIndex = Math.Clamp(selectedIndex, 0, count - 1) |
| 2452 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(selectedIndex, 0, count - 1) |
| 2453 | assignment | 값을 대상에 대입합니다: _selectedHeaderModuleIndexes[module] = selectedIndex |
| 2454 | return | 호출자에게 값 또는 제어를 반환합니다: return selectedIndex; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetSelectedModuleIndex"]
 N0["L2442 if"]
 M -->|포함| N0
 N1["L2447 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SelectPreviousModuleStatus` · L2457–2460

[Drilling.UI/CRootView.cs:2457–2460](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2457-L2460)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.SelectPreviousModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2395–2395](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2395-L2395) | SelectPreviousModuleStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2459 | SelectModuleStatus | resolved | void Drilling.UI.CRootView.SelectModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.UI/CRootView.cs:2467 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2459 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SelectModuleStatus(module, -1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SelectNextModuleStatus` · L2462–2465

[Drilling.UI/CRootView.cs:2462–2465](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2462-L2465)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.SelectNextModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2400–2400](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2400-L2400) | SelectNextModuleStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2464 | SelectModuleStatus | resolved | void Drilling.UI.CRootView.SelectModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.UI/CRootView.cs:2467 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2464 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SelectModuleStatus(module, 1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SelectModuleStatus` · L2467–2478

[Drilling.UI/CRootView.cs:2467–2478](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2467-L2478)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.SelectModuleStatus(Drilling.Common.Interface.EN_EQP_MODULE, int) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |
| offset | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2459–2459](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2459-L2459) | SelectModuleStatus | False |
| [Drilling.UI/CRootView.cs:2464–2464](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2464-L2464) | SelectModuleStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2469 | GetModuleCommunicationStatuses | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.UI.CRootView.GetModuleCommunicationStatuses(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2420 |
| 2475 | GetSelectedModuleIndex | resolved | int Drilling.UI.CRootView.GetSelectedModuleIndex(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.UI/CRootView.cs:2440 |
| 2477 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2469 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetModuleCommunicationStatuses(module) |
| 2469 | local-declaration | 지역 변수를 선언합니다: var moduleStatuses = GetModuleCommunicationStatuses(module); |
| 2469 | variable-initializer | 변수의 초기값을 지정합니다: moduleStatuses = GetModuleCommunicationStatuses(module) |
| 2470 | if | 조건에 따라 분기합니다: if (moduleStatuses.Count <= 1) |
| 2472 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2475 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetSelectedModuleIndex(module, moduleStatuses.Count) |
| 2475 | local-declaration | 지역 변수를 선언합니다: var selectedIndex = GetSelectedModuleIndex(module, moduleStatuses.Count); |
| 2475 | variable-initializer | 변수의 초기값을 지정합니다: selectedIndex = GetSelectedModuleIndex(module, moduleStatuses.Count) |
| 2476 | assignment | 값을 대상에 대입합니다: _selectedHeaderModuleIndexes[module] = (selectedIndex + offset + moduleStatuses.Count) % moduleStatuses.Count |
| 2477 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SelectModuleStatus"]
 N0["L2470 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ShowModuleStatusPopup` · L2480–2496

[Drilling.UI/CRootView.cs:2480–2496](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2480-L2496)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ShowModuleStatusPopup(Drilling.Common.Interface.EN_EQP_MODULE) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2405–2405](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2405-L2405) | ShowModuleStatusPopup | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2482 | GetModuleCommunicationStatuses | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.UI.CRootView.GetModuleCommunicationStatuses(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2420 |
| 2488 | new CInterfaceStatusDialog | resolved | Drilling.UI.Popup.CInterfaceStatusDialog.CInterfaceStatusDialog(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>) · Drilling.UI/Popup/CInterfaceStatusDialog.xaml.cs:9 |
| 2488 | ModuleDisplayName | resolved | string Drilling.UI.CRootView.ModuleDisplayName(Drilling.Common.Interface.EN_EQP_MODULE) · Drilling.UI/CRootView.cs:2498 |
| 2489 | Application.Current.Windows.OfType<Window>().FirstOrDefault | unresolved | None |
| 2489 | Application.Current.Windows.OfType<Window> | unresolved | None |
| 2490 | ReferenceEquals | candidate | OverloadResolutionFailure |
| 2495 | dialog.ShowDialog | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2482 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetModuleCommunicationStatuses(module) |
| 2482 | local-declaration | 지역 변수를 선언합니다: var moduleStatuses = GetModuleCommunicationStatuses(module); |
| 2482 | variable-initializer | 변수의 초기값을 지정합니다: moduleStatuses = GetModuleCommunicationStatuses(module) |
| 2483 | if | 조건에 따라 분기합니다: if (moduleStatuses.Count == 0) |
| 2485 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2488 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CInterfaceStatusDialog(ModuleDisplayName(module), moduleStatuses) |
| 2488 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ModuleDisplayName(module) |
| 2488 | local-declaration | 지역 변수를 선언합니다: var dialog = new CInterfaceStatusDialog(ModuleDisplayName(module), moduleStatuses); |
| 2488 | variable-initializer | 변수의 초기값을 지정합니다: dialog = new CInterfaceStatusDialog(ModuleDisplayName(module), moduleStatuses) |
| 2489 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Application.Current.Windows.OfType<Window>().FirstOrDefault(window => window.IsActive) |
| 2489 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Application.Current.Windows.OfType<Window>() |
| 2489 | local-declaration | 지역 변수를 선언합니다: var owner = Application.Current.Windows.OfType<Window>().FirstOrDefault(window => window.IsActive) ?? Application.Current.MainWindow; |
| 2489 | variable-initializer | 변수의 초기값을 지정합니다: owner = Application.Current.Windows.OfType<Window>().FirstOrDefault(window => window.IsActive) ?? Application.Current.MainWindow |
| 2490 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReferenceEquals(owner, dialog) |
| 2490 | if | 조건에 따라 분기합니다: if (owner is not null && !ReferenceEquals(owner, dialog)) |
| 2492 | assignment | 값을 대상에 대입합니다: dialog.Owner = owner |
| 2495 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dialog.ShowDialog() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ShowModuleStatusPopup"]
 N0["L2483 if"]
 M -->|포함| N0
 N1["L2490 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ModuleDisplayName` · L2498–2513

[Drilling.UI/CRootView.cs:2498–2513](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2498-L2513)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ModuleDisplayName(Drilling.Common.Interface.EN_EQP_MODULE) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2383–2383](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2383-L2383) | ModuleDisplayName | False |
| [Drilling.UI/CRootView.cs:2409–2409](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2409-L2409) | ModuleDisplayName | False |
| [Drilling.UI/CRootView.cs:2488–2488](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2488-L2488) | ModuleDisplayName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2512 | module.ToString().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 2512 | module.ToString | resolved · 동적 구현 선택 가능 | string System.Enum.ToString() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2500 | return | 호출자에게 값 또는 제어를 반환합니다: return module switch { EN_EQP_MODULE.WonikCtrl => "WONIK CTRL", EN_EQP_MODULE.Vision => "VISION", EN_EQP_MODULE.Automation1 => "AUTOMATION", EN_EQP_MODULE.Motion => "SCANNER TILT", EN_EQP_MODULE.TalonLaser => "LASER", EN_EQP_MODUL |
| 2500 | switch-expression | 값별 결과식을 선택합니다: module switch { EN_EQP_MODULE.WonikCtrl => "WONIK CTRL", EN_EQP_MODULE.Vision => "VISION", EN_EQP_MODULE.Automation1 => "AUTOMATION", EN_EQP_MODULE.Motion => "SCANNER TILT", EN_EQP_MODULE.TalonLaser => "LASER", EN_EQP_MODULE.Atten |
| 2512 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: module.ToString().ToUpperInvariant() |
| 2512 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: module.ToString() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ModuleDisplayName"]
 N0["L2500 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ConnectionStateValue` · L2515–2523

[Drilling.UI/CRootView.cs:2515–2523](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2515-L2523)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.ConnectionStateValue(Drilling.Common.Interface.EN_COMM_STATE) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| state | Drilling.Common.Interface.EN_COMM_STATE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2382–2382](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2382-L2382) | ConnectionStateValue | False |
| [Drilling.UI/CRootView.cs:2389–2389](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2389-L2389) | ConnectionStateValue | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2517 | return | 호출자에게 값 또는 제어를 반환합니다: return state switch { EN_COMM_STATE.Online => "ONLINE", EN_COMM_STATE.Offline => "OFFLINE", _ => "SIMULATION" }; |
| 2517 | switch-expression | 값별 결과식을 선택합니다: state switch { EN_COMM_STATE.Online => "ONLINE", EN_COMM_STATE.Offline => "OFFLINE", _ => "SIMULATION" } |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ConnectionStateValue"]
 N0["L2517 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OperationModeValue` · L2525–2533

[Drilling.UI/CRootView.cs:2525–2533](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2525-L2533)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.OperationModeValue(Drilling.Common.Managers.EN_SYSTEM_MODE) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| mode | Drilling.Common.Managers.EN_SYSTEM_MODE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:598–598](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L598-L598) | OperationModeValue | False |
| [Drilling.UI/CRootView.cs:2537–2537](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2537-L2537) | OperationModeValue | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2527 | return | 호출자에게 값 또는 제어를 반환합니다: return mode switch { EN_SYSTEM_MODE.Auto => "Auto", EN_SYSTEM_MODE.Manual => "Manual", _ => "Simulation" }; |
| 2527 | switch-expression | 값별 결과식을 선택합니다: mode switch { EN_SYSTEM_MODE.Auto => "Auto", EN_SYSTEM_MODE.Manual => "Manual", _ => "Simulation" } |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OperationModeValue"]
 N0["L2527 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OperationModeHeaderValue` · L2535–2539

[Drilling.UI/CRootView.cs:2535–2539](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2535-L2539)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.OperationModeHeaderValue(Drilling.Common.Managers.EN_SYSTEM_MODE, bool) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| mode | Drilling.Common.Managers.EN_SYSTEM_MODE | None | False /  |
| isSimulationEnvironment | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1140–1140](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1140-L1140) | OperationModeHeaderValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2537 | OperationModeValue | resolved | string Drilling.UI.CRootView.OperationModeValue(Drilling.Common.Managers.EN_SYSTEM_MODE) · Drilling.UI/CRootView.cs:2525 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2537 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OperationModeValue(mode) |
| 2537 | local-declaration | 지역 변수를 선언합니다: var modeText = OperationModeValue(mode); |
| 2537 | variable-initializer | 변수의 초기값을 지정합니다: modeText = OperationModeValue(mode) |
| 2538 | conditional-expression | 조건에 따라 결과식을 선택합니다: isSimulationEnvironment ? $"{modeText}\n(Simulation)" : modeText |
| 2538 | return | 호출자에게 값 또는 제어를 반환합니다: return isSimulationEnvironment ? $"{modeText}\n(Simulation)" : modeText; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OperationModeState` · L2541–2544

[Drilling.UI/CRootView.cs:2541–2544](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2541-L2544)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.OperationModeState(bool) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| isSimulationEnvironment | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1140–1140](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1140-L1140) | OperationModeState | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2543 | conditional-expression | 조건에 따라 결과식을 선택합니다: isSimulationEnvironment ? "SIMULATION" : "ONLINE" |
| 2543 | return | 호출자에게 값 또는 제어를 반환합니다: return isSimulationEnvironment ? "SIMULATION" : "ONLINE"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `AlarmStateValue` · L2546–2549

[Drilling.UI/CRootView.cs:2546–2549](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2546-L2549)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.AlarmStateValue(Drilling.Common.Alarm.EN_ALARM_STATE) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| state | Drilling.Common.Alarm.EN_ALARM_STATE | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:1137–1137](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1137-L1137) | AlarmStateValue | False |
| [Drilling.UI/CRootView.cs:1203–1203](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1203-L1203) | AlarmStateValue | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2548 | conditional-expression | 조건에 따라 결과식을 선택합니다: state == EN_ALARM_STATE.Occur ? "OCCUR" : "CLEAR" |
| 2548 | return | 호출자에게 값 또는 제어를 반환합니다: return state == EN_ALARM_STATE.Occur ? "OCCUR" : "CLEAR"; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetMenuDisplayName` · L2551–2566

[Drilling.UI/CRootView.cs:2551–2566](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2551-L2566)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.CRootView.GetMenuDisplayName(Drilling.UI.Menu.Menus.EN_MENU) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| menu | Drilling.UI.Menu.Menus.EN_MENU | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:162–162](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L162-L162) | GetMenuDisplayName | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2565 | menu.ToString | resolved · 동적 구현 선택 가능 | string System.Enum.ToString() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2553 | return | 호출자에게 값 또는 제어를 반환합니다: return menu switch { EN_MENU.Main => "MAIN", EN_MENU.Manual => "MANUAL", EN_MENU.Recipe => "RECIPE", EN_MENU.Setting => "SETTING", EN_MENU.Alarm => "ALARM", EN_MENU.Monitor => "MONITOR", EN_MENU.Review => "REVIEW", EN_MENU.Correct |
| 2553 | switch-expression | 값별 결과식을 선택합니다: menu switch { EN_MENU.Main => "MAIN", EN_MENU.Manual => "MANUAL", EN_MENU.Recipe => "RECIPE", EN_MENU.Setting => "SETTING", EN_MENU.Alarm => "ALARM", EN_MENU.Monitor => "MONITOR", EN_MENU.Review => "REVIEW", EN_MENU.Correction =>  |
| 2565 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menu.ToString() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetMenuDisplayName"]
 N0["L2553 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EnsureHeavyAlarmRecovery` · L2570–2570

[Drilling.UI/CRootView.cs:2570–2570](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2570-L2570)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.EnsureHeavyAlarmRecovery() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2615–2615](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2615-L2615) | EnsureHeavyAlarmRecovery | False |
| [Drilling.UI/CRootView.cs:2753–2753](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2753-L2753) | EnsureHeavyAlarmRecovery | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2570 | RecoverHeavyAlarm | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RecoverHeavyAlarm() · Drilling.UI/CRootView.cs:2633 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2570 | assignment | 값을 대상에 대입합니다: _heavyAlarmRecoveryTask = RecoverHeavyAlarm() |
| 2570 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RecoverHeavyAlarm() |
| 2570 | conditional-expression | 조건에 따라 결과식을 선택합니다: _heavyAlarmRecoveryTask is { IsCompleted: false } running ? running : _heavyAlarmRecoveryTask = RecoverHeavyAlarm() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `HeaderAlarmResetCommand` · L2571–2571

[Drilling.UI/CRootView.cs:2571–2571](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2571-L2571)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.HeaderAlarmResetCommand |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2571 | new | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 2571 | ShowAlarmPopup | resolved | void Drilling.UI.CRootView.ShowAlarmPopup() · Drilling.UI/CRootView.cs:2582 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2571 | assignment | 값을 대상에 대입합니다: _headerAlarmResetCommand ??= new(_ => ShowAlarmPopup()) |
| 2571 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_ => ShowAlarmPopup()) |
| 2571 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ShowAlarmPopup() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CheckHeavyAlarmForOperation` · L2573–2580

[Drilling.UI/CRootView.cs:2573–2580](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2573-L2580)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CRootView.CheckHeavyAlarmForOperation(string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| operation | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:652–652](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L652-L652) | CheckHeavyAlarmForOperation | False |
| [Drilling.UI/CRootView.cs:1594–1594](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1594-L1594) | CheckHeavyAlarmForOperation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2575 | _alarmManager.CurAlarm.Any | resolved | bool System.Collections.Generic.IEnumerable<Drilling.Common.Alarm.ST_ALARM_DATA>.Any<Drilling.Common.Alarm.ST_ALARM_DATA>(System.Func<Drilling.Common.Alarm.ST_ALARM_DATA, bool>) |
| 2578 | ShowAlarmPopup | resolved | void Drilling.UI.CRootView.ShowAlarmPopup() · Drilling.UI/CRootView.cs:2582 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2575 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _alarmManager.CurAlarm.Any(row => row.Severity == EN_ALARM_LEVEL.Critical) |
| 2575 | if | 조건에 따라 분기합니다: if (!_heavyRecoveryBlocked && !_alarmManager.CurAlarm.Any(row => row.Severity == EN_ALARM_LEVEL.Critical)) |
| 2576 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |
| 2577 | assignment | 값을 대상에 대입합니다: StatusMessage = $"HEAVY 알람으로 {operation} 동작이 차단되었습니다." |
| 2578 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ShowAlarmPopup() |
| 2579 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CheckHeavyAlarmForOperation"]
 N0["L2575 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ShowAlarmPopup` · L2582–2601

[Drilling.UI/CRootView.cs:2582–2601](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2582-L2601)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.ShowAlarmPopup() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2571–2571](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2571-L2571) | ShowAlarmPopup | False |
| [Drilling.UI/CRootView.cs:2578–2578](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2578-L2578) | ShowAlarmPopup | False |
| [Drilling.UI/CRootView.cs:2751–2751](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2751-L2751) | ShowAlarmPopup | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2586 | open.Panel.Refresh | resolved | void Drilling.UI.Popup.CAlarmPopupPanel.Refresh() · Drilling.UI/Popup/CAlarmPopupDialog.xaml.cs:91 |
| 2589 | open.Activate | unresolved | None |
| 2593 | new CAlarmPopupPanel | resolved | Drilling.UI.Popup.CAlarmPopupPanel.CAlarmPopupPanel(Drilling.Common.Alarm.CAlarmManager, System.Func<System.Threading.Tasks.Task>) · Drilling.UI/Popup/CAlarmPopupDialog.xaml.cs:51 |
| 2594 | panel.SetRecoveryStatus | resolved | void Drilling.UI.Popup.CAlarmPopupPanel.SetRecoveryStatus(string) · Drilling.UI/Popup/CAlarmPopupDialog.xaml.cs:83 |
| 2595 | new CAlarmPopupDialog | resolved | Drilling.UI.Popup.CAlarmPopupDialog.CAlarmPopupDialog(Drilling.UI.Popup.CAlarmPopupPanel) · Drilling.UI/Popup/CAlarmPopupDialog.xaml.cs:14 |
| 2600 | window.Show | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2584 | if | 조건에 따라 분기합니다: if (_alarmPopup is { } open) |
| 2586 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: open.Panel.Refresh() |
| 2587 | if | 조건에 따라 분기합니다: if (open.WindowState == WindowState.Minimized) |
| 2588 | assignment | 값을 대상에 대입합니다: open.WindowState = WindowState.Normal |
| 2589 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: open.Activate() |
| 2590 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2593 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CAlarmPopupPanel(_alarmManager, ConfirmHeaderAlarmReset) |
| 2593 | local-declaration | 지역 변수를 선언합니다: var panel = new CAlarmPopupPanel(_alarmManager, ConfirmHeaderAlarmReset); |
| 2593 | variable-initializer | 변수의 초기값을 지정합니다: panel = new CAlarmPopupPanel(_alarmManager, ConfirmHeaderAlarmReset) |
| 2594 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: panel.SetRecoveryStatus(_alarmRecoveryStatus) |
| 2595 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CAlarmPopupDialog(panel) |
| 2595 | local-declaration | 지역 변수를 선언합니다: var window = new CAlarmPopupDialog(panel); |
| 2595 | variable-initializer | 변수의 초기값을 지정합니다: window = new CAlarmPopupDialog(panel) |
| 2596 | if | 조건에 따라 분기합니다: if (Application.Current?.MainWindow is { IsVisible: true } owner) |
| 2597 | assignment | 값을 대상에 대입합니다: window.Owner = owner |
| 2598 | assignment | 값을 대상에 대입합니다: _alarmPopup = window |
| 2599 | assignment | 값을 대상에 대입합니다: _alarmPopup = null |
| 2599 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: window.Closed += (_, _) => _alarmPopup = null |
| 2600 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: window.Show() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ShowAlarmPopup"]
 N0["L2584 if"]
 M -->|포함| N0
 N1["L2587 if"]
 N0 -->|포함| N1
 N2["L2596 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ConfirmHeaderAlarmReset` · L2603–2625

[Drilling.UI/CRootView.cs:2603–2625](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2603-L2625)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.ConfirmHeaderAlarmReset() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2610 | CRecipeConfirmDialog.ShowConfirmation | resolved | bool Drilling.UI.Popup.CRecipeConfirmDialog.ShowConfirmation(string, string, string, bool) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:11 |
| 2615 | EnsureHeavyAlarmRecovery | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.EnsureHeavyAlarmRecovery() · Drilling.UI/CRootView.cs:2570 |
| 2618 | ((CMenuAlarm)_menus[EN_MENU.Alarm]).ResetAlarmAsync | resolved | System.Threading.Tasks.Task Drilling.UI.Menu.Menus.CMenuAlarm.ResetAlarmAsync() · Drilling.UI/Menu/Menus/CMenuAlarm.cs:119 |
| 2619 | .Panel.Refresh | resolved | void Drilling.UI.Popup.CAlarmPopupPanel.Refresh() · Drilling.UI/Popup/CAlarmPopupDialog.xaml.cs:91 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2605 | if | 조건에 따라 분기합니다: if (_isHeaderAlarmResetRunning) |
| 2606 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2607 | assignment | 값을 대상에 대입합니다: _isHeaderAlarmResetRunning = true |
| 2608 | try | 예외 처리 범위입니다: try |
| 2610 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowConfirmation("ALARM RESET", "현재 발생한 알람을 RESET하시겠습니까?", "RESET", useDangerStyle: true) |
| 2610 | if | 조건에 따라 분기합니다: if (!CRecipeConfirmDialog.ShowConfirmation("ALARM RESET", "현재 발생한 알람을 RESET하시겠습니까?", "RESET", useDangerStyle: true)) |
| 2611 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2612 | if | 조건에 따라 분기합니다: if (_heavyAlarmRecoveryTask is { IsCompleted: false } pending) |
| 2613 | await | 비동기 완료를 기다립니다: await pending |
| 2614 | if | 조건에 따라 분기합니다: if (_heavyRecoveryBlocked) |
| 2615 | await | 비동기 완료를 기다립니다: await EnsureHeavyAlarmRecovery() |
| 2615 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureHeavyAlarmRecovery() |
| 2616 | if | 조건에 따라 분기합니다: if (_heavyRecoveryBlocked) |
| 2617 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2618 | await | 비동기 완료를 기다립니다: await ((CMenuAlarm)_menus[EN_MENU.Alarm]).ResetAlarmAsync() |
| 2618 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ((CMenuAlarm)_menus[EN_MENU.Alarm]).ResetAlarmAsync() |
| 2619 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Panel.Refresh() |
| 2621 | finally | 종료 정리 구간입니다: finally |
| 2623 | assignment | 값을 대상에 대입합니다: _isHeaderAlarmResetRunning = false |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ConfirmHeaderAlarmReset"]
 N0["L2605 if"]
 M -->|포함| N0
 N1["L2608 try"]
 M -->|포함| N1
 N2["L2610 if"]
 N1 -->|포함| N2
 N3["L2612 if"]
 N1 -->|포함| N3
 N4["L2614 if"]
 N1 -->|포함| N4
 N5["L2616 if"]
 N1 -->|포함| N5
 N6["L2621 finally"]
 N1 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetAlarmRecoveryStatus` · L2627–2631

[Drilling.UI/CRootView.cs:2627–2631](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2627-L2631)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.SetAlarmRecoveryStatus(string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| text | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2640–2640](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2640-L2640) | SetAlarmRecoveryStatus | False |
| [Drilling.UI/CRootView.cs:2701–2701](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2701-L2701) | SetAlarmRecoveryStatus | False |
| [Drilling.UI/CRootView.cs:2705–2705](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2705-L2705) | SetAlarmRecoveryStatus | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2630 | .Panel.SetRecoveryStatus | resolved | void Drilling.UI.Popup.CAlarmPopupPanel.SetRecoveryStatus(string) · Drilling.UI/Popup/CAlarmPopupDialog.xaml.cs:83 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2629 | assignment | 값을 대상에 대입합니다: _alarmRecoveryStatus = text |
| 2630 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Panel.SetRecoveryStatus(text) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RecoverHeavyAlarm` · L2633–2728

[Drilling.UI/CRootView.cs:2633–2728](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2633-L2728)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.UI.CRootView.RecoverHeavyAlarm() |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2570–2570](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2570-L2570) | RecoverHeavyAlarm | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2640 | SetAlarmRecoveryStatus | resolved | void Drilling.UI.CRootView.SetAlarmRecoveryStatus(string) · Drilling.UI/CRootView.cs:2627 |
| 2643 | .Cancel | resolved | void System.Threading.CancellationTokenSource.Cancel() |
| 2644 | new List<Exception> | resolved | System.Collections.Generic.List<System.Exception>.List() |
| 2658 | _menus.Values.Select(async menu => await menu.StopForHeavyAlarm()).ToArray | resolved | System.Threading.Tasks.Task[] System.Collections.Generic.IEnumerable<System.Threading.Tasks.Task>.ToArray<System.Threading.Tasks.Task>() |
| 2658 | _menus.Values.Select | resolved | System.Collections.Generic.IEnumerable<System.Threading.Tasks.Task> System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.CMenuBase>.Select<Drilling.UI.Menu.Menus.CMenuBase, System.Threading.Tasks.Task>(System.Func<Drilling.UI.Menu.Menus.CMenuBase, System.Threading.Tasks.Task>) |
| 2658 | menu.StopForHeavyAlarm | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task Drilling.UI.Menu.Menus.CMenuBase.StopForHeavyAlarm() · Drilling.UI/Menu/Menus/CMenuBase.cs:16 |
| 2659 | Stop | resolved | System.Threading.Tasks.Task Stop(System.Func<System.Threading.Tasks.Task>) · Drilling.UI/CRootView.cs:2645 |
| 2661 | _stationManager.StageRequests.StopAsync | resolved | System.Threading.Tasks.Task<bool> Drilling.Common.Station.CStageRequestSequence.StopAsync() · Drilling.Common/Station/CStationProcess.cs:5067 |
| 2662 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2665 | Stop | resolved | System.Threading.Tasks.Task Stop(System.Func<System.Threading.Tasks.Task>) · Drilling.UI/CRootView.cs:2645 |
| 2667 | failures.Add | resolved | void System.Collections.Generic.List<System.Exception>.Add(System.Exception) |
| 2667 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2669 | Stop | resolved | System.Threading.Tasks.Task Stop(System.Func<System.Threading.Tasks.Task>) · Drilling.UI/CRootView.cs:2645 |
| 2671 | _stationManager.Stop | resolved | Drilling.Common.Station.ST_STATION_PROCESS_STATUS Drilling.Common.Station.CStationManager.Stop(System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:104 |
| 2672 | cycle.Task.WaitAsync | resolved | System.Threading.Tasks.Task<bool> System.Threading.Tasks.Task<bool>.WaitAsync(System.TimeSpan) |
| 2672 | TimeSpan.FromSeconds | resolved | System.TimeSpan System.TimeSpan.FromSeconds(long) |
| 2674 | Stop | resolved | System.Threading.Tasks.Task Stop(System.Func<System.Threading.Tasks.Task>) · Drilling.UI/CRootView.cs:2645 |
| 2674 | Task.WhenAll | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.WhenAll(params System.Threading.Tasks.Task[]) |
| 2675 | _reviewManager.Stop | resolved | void Drilling.Common.Review.CReviewManager.Stop() · Drilling.Common/Review/CReviewManager.cs:441 |
| 2676 | Stop | resolved | System.Threading.Tasks.Task Stop(System.Func<System.Threading.Tasks.Task>) · Drilling.UI/CRootView.cs:2645 |
| 2678 | DateTimeOffset.UtcNow.AddSeconds | resolved | System.DateTimeOffset System.DateTimeOffset.AddSeconds(double) |
| 2682 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?) |
| 2683 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int) |
| 2687 | new AggregateException | resolved | System.AggregateException.AggregateException(string?, System.Collections.Generic.IEnumerable<System.Exception>) |
| 2688 | _interfaceManager.StageReviewSequences.RecoverIdleCleanup | resolved | System.Threading.Tasks.Task Drilling.Common.Station.CStageReviewSequences.RecoverIdleCleanup(System.Threading.CancellationToken) · Drilling.Common/Station/CStageReviewSequences.cs:64 |
| 2689 | CHandshakeOutputReset.Reset | resolved | System.Threading.Tasks.Task Drilling.Common.Station.CHandshakeOutputReset.Reset(Drilling.Common.Interface.CInterfaceManager, System.Threading.CancellationToken, string?) · Drilling.Common/Station/CStationProcess.cs:4288 |
| 2692 | _stationManager.Stop | resolved | Drilling.Common.Station.ST_STATION_PROCESS_STATUS Drilling.Common.Station.CStationManager.Stop(System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:104 |
| 2693 | DateTimeOffset.UtcNow.AddSeconds | resolved | System.DateTimeOffset System.DateTimeOffset.AddSeconds(double) |
| 2694 | _stationManager.GetStationStatus().All | resolved | bool System.Collections.Generic.IEnumerable<Drilling.Common.Station.ST_STATION_STATUS>.All<Drilling.Common.Station.ST_STATION_STATUS>(System.Func<Drilling.Common.Station.ST_STATION_STATUS, bool>) |
| 2694 | _stationManager.GetStationStatus | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Station.ST_STATION_STATUS> Drilling.Common.Station.CStationManager.GetStationStatus(System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:79 |
| 2697 | new TimeoutException | resolved | System.TimeoutException.TimeoutException(string?) |
| 2698 | Task.Delay | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Delay(int) |
| 2701 | SetAlarmRecoveryStatus | resolved | void Drilling.UI.CRootView.SetAlarmRecoveryStatus(string) · Drilling.UI/CRootView.cs:2627 |
| 2705 | SetAlarmRecoveryStatus | resolved | void Drilling.UI.CRootView.SetAlarmRecoveryStatus(string) · Drilling.UI/CRootView.cs:2627 |
| 2708 | _manager.Log().WriteStationState | unresolved | None |
| 2708 | _manager.Log | resolved | CLogManager Drilling.Common.Managers.CManager.Log() · Drilling.Common/Managers/CManager.cs:388 |
| 2712 | System.Diagnostics.Trace.TraceError | resolved | void System.Diagnostics.Trace.TraceError(string?) |
| 2712 | logError.ToString | resolved · 동적 구현 선택 가능 | string System.Exception.ToString() |
| 2722 | SetAutoCycleState | resolved | void Drilling.UI.CRootView.SetAutoCycleState(Drilling.UI.CRootView.EN_AUTO_CYCLE_STATE) · Drilling.UI/CRootView.cs:1836 |
| 2723 | RefreshOperationModeAccess | resolved | void Drilling.UI.CRootView.RefreshOperationModeAccess() · Drilling.UI/CRootView.cs:718 |
| 2724 | OnPropertyChanged | resolved | void Drilling.UI.Menu.CBindingBase.OnPropertyChanged(string?) · Drilling.UI/Menu/CBindingBase.cs:784 |
| 2724 | nameof | unresolved | None |
| 2725 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |
| 2726 | StopCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2635 | local-declaration | 지역 변수를 선언합니다: var stageRequest = _stationManager.StageRequests; |
| 2635 | variable-initializer | 변수의 초기값을 지정합니다: stageRequest = _stationManager.StageRequests |
| 2636 | conditional-expression | 조건에 따라 결과식을 선택합니다: _operationMode == EN_SYSTEM_MODE.Auto && (stageRequest.IsRunning &#124;&#124; stageRequest.NeedsCleanup &#124;&#124; stageRequest.Status.State == "ERROR") ? stageRequest.Status.Scenario : null |
| 2636 | local-declaration | 지역 변수를 선언합니다: var cleanupScenario = _operationMode == EN_SYSTEM_MODE.Auto && (stageRequest.IsRunning &#124;&#124; stageRequest.NeedsCleanup &#124;&#124; stageRequest.Status.State == "ERROR") ? stageRequest.Status.Scenario : null; |
| 2636 | variable-initializer | 변수의 초기값을 지정합니다: cleanupScenario = _operationMode == EN_SYSTEM_MODE.Auto && (stageRequest.IsRunning &#124;&#124; stageRequest.NeedsCleanup &#124;&#124; stageRequest.Status.State == "ERROR") ? stageRequest.Status.Scenario : null |
| 2639 | assignment | 값을 대상에 대입합니다: _heavyRecoveryBlocked = true |
| 2640 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAlarmRecoveryStatus("HEAVY · 진행 동작 정지 및 우리 측 Handshake OFF 확인 중") |
| 2641 | try | 예외 처리 범위입니다: try |
| 2643 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Cancel() |
| 2644 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<Exception>() |
| 2644 | local-declaration | 지역 변수를 선언합니다: var failures = new List<Exception>(); |
| 2644 | variable-initializer | 변수의 초기값을 지정합니다: failures = new List<Exception>() |
| 2658 | await | 비동기 완료를 기다립니다: await menu.StopForHeavyAlarm() |
| 2658 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.Values.Select(async menu => await menu.StopForHeavyAlarm()).ToArray() |
| 2658 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _menus.Values.Select(async menu => await menu.StopForHeavyAlarm()) |
| 2658 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: menu.StopForHeavyAlarm() |
| 2658 | local-declaration | 지역 변수를 선언합니다: var menuStops = _menus.Values.Select(async menu => await menu.StopForHeavyAlarm()).ToArray(); |
| 2658 | variable-initializer | 변수의 초기값을 지정합니다: menuStops = _menus.Values.Select(async menu => await menu.StopForHeavyAlarm()).ToArray() |
| 2659 | await | 비동기 완료를 기다립니다: await Stop(async () => { if (!await _stationManager.StageRequests.StopAsync()) throw new InvalidOperationException("Stage 시퀀스의 정지가 아직 확인되지 않았습니다."); }) |
| 2659 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stop(async () => { if (!await _stationManager.StageRequests.StopAsync()) throw new InvalidOperationException("Stage 시퀀스의 정지가 아직 확인되지 않았습니다."); }) |
| 2661 | await | 비동기 완료를 기다립니다: await _stationManager.StageRequests.StopAsync() |
| 2661 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.StageRequests.StopAsync() |
| 2661 | if | 조건에 따라 분기합니다: if (!await _stationManager.StageRequests.StopAsync()) |
| 2662 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Stage 시퀀스의 정지가 아직 확인되지 않았습니다.") |
| 2662 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Stage 시퀀스의 정지가 아직 확인되지 않았습니다."); |
| 2664 | if | 조건에 따라 분기합니다: if (_stationManager.ManualMofStatus is { IsRunning: true } or { RequiresStop: true }) |
| 2665 | await | 비동기 완료를 기다립니다: await Stop(_stationManager.StopManualMofAsync) |
| 2665 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stop(_stationManager.StopManualMofAsync) |
| 2666 | if | 조건에 따라 분기합니다: if (_stationManager.ManualMofStatus.RequiresStop) |
| 2667 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: failures.Add(new InvalidOperationException("Manual MOF 정지가 확인되지 않았습니다.")) |
| 2667 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Manual MOF 정지가 확인되지 않았습니다.") |
| 2668 | if | 조건에 따라 분기합니다: if (_autoCycleCompletion is { } cycle) |
| 2669 | await | 비동기 완료를 기다립니다: await Stop(async () => { _stationManager.Stop(); await cycle.Task.WaitAsync(TimeSpan.FromSeconds(15)); }) |
| 2669 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stop(async () => { _stationManager.Stop(); await cycle.Task.WaitAsync(TimeSpan.FromSeconds(15)); }) |
| 2671 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.Stop() |
| 2672 | await | 비동기 완료를 기다립니다: await cycle.Task.WaitAsync(TimeSpan.FromSeconds(15)) |
| 2672 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cycle.Task.WaitAsync(TimeSpan.FromSeconds(15)) |
| 2672 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromSeconds(15) |
| 2674 | await | 비동기 완료를 기다립니다: await Stop(() => Task.WhenAll(menuStops)) |
| 2674 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stop(() => Task.WhenAll(menuStops)) |
| 2674 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.WhenAll(menuStops) |
| 2675 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _reviewManager.Stop() |
| 2676 | await | 비동기 완료를 기다립니다: await Stop(async () => { var until = DateTimeOffset.UtcNow.AddSeconds(15); while (_reviewManager.SequenceState is EN_REVIEW_SEQUENCE_STATE.Running or EN_REVIEW_SEQUENCE_STATE.Stopping &#124;&#124; _interfaceManager.StageReviewSequences.HasR |
| 2676 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Stop(async () => { var until = DateTimeOffset.UtcNow.AddSeconds(15); while (_reviewManager.SequenceState is EN_REVIEW_SEQUENCE_STATE.Running or EN_REVIEW_SEQUENCE_STATE.Stopping &#124;&#124; _interfaceManager.StageReviewSequences.… |
| 2678 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DateTimeOffset.UtcNow.AddSeconds(15) |
| 2678 | local-declaration | 지역 변수를 선언합니다: var until = DateTimeOffset.UtcNow.AddSeconds(15); |
| 2678 | variable-initializer | 변수의 초기값을 지정합니다: until = DateTimeOffset.UtcNow.AddSeconds(15) |
| 2679 | while | 조건을 먼저 확인하며 반복합니다: while (_reviewManager.SequenceState is EN_REVIEW_SEQUENCE_STATE.Running or EN_REVIEW_SEQUENCE_STATE.Stopping &#124;&#124; _interfaceManager.StageReviewSequences.HasRunningSession) |
| 2681 | if | 조건에 따라 분기합니다: if (DateTimeOffset.UtcNow >= until) |
| 2682 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException("Review/Stage 공통 동작 정지 확인 시간 초과") |
| 2682 | throw | 예외를 발생/전달합니다: throw new TimeoutException("Review/Stage 공통 동작 정지 확인 시간 초과"); |
| 2683 | await | 비동기 완료를 기다립니다: await Task.Delay(50) |
| 2683 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(50) |
| 2686 | if | 조건에 따라 분기합니다: if (failures.Count > 0) |
| 2687 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new AggregateException("동작 정지 확인 실패", failures) |
| 2687 | throw | 예외를 발생/전달합니다: throw new AggregateException("동작 정지 확인 실패", failures); |
| 2688 | await | 비동기 완료를 기다립니다: await _interfaceManager.StageReviewSequences.RecoverIdleCleanup() |
| 2688 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.StageReviewSequences.RecoverIdleCleanup() |
| 2689 | await | 비동기 완료를 기다립니다: await CHandshakeOutputReset.Reset(_interfaceManager, scenario: cleanupScenario) |
| 2689 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CHandshakeOutputReset.Reset(_interfaceManager, scenario: cleanupScenario) |
| 2692 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.Stop() |
| 2693 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DateTimeOffset.UtcNow.AddSeconds(15) |
| 2693 | local-declaration | 지역 변수를 선언합니다: var stationStopDeadline = DateTimeOffset.UtcNow.AddSeconds(15); |
| 2693 | variable-initializer | 변수의 초기값을 지정합니다: stationStopDeadline = DateTimeOffset.UtcNow.AddSeconds(15) |
| 2694 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.GetStationStatus().All(station => station.State == EN_STATION_STATE.Stopped && station.SequenceState == EN_STATION_SEQUENCE.Ready) |
| 2694 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.GetStationStatus() |
| 2694 | while | 조건을 먼저 확인하며 반복합니다: while (!_stationManager.GetStationStatus().All(station => station.State == EN_STATION_STATE.Stopped && station.SequenceState == EN_STATION_SEQUENCE.Ready)) |
| 2696 | if | 조건에 따라 분기합니다: if (DateTimeOffset.UtcNow >= stationStopDeadline) |
| 2697 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TimeoutException("Station 정지 상태 복귀 확인 시간 초과") |
| 2697 | throw | 예외를 발생/전달합니다: throw new TimeoutException("Station 정지 상태 복귀 확인 시간 초과"); |
| 2698 | await | 비동기 완료를 기다립니다: await Task.Delay(20) |
| 2698 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Delay(20) |
| 2700 | assignment | 값을 대상에 대입합니다: _heavyRecoveryBlocked = false |
| 2701 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAlarmRecoveryStatus("HEAVY · 동작 정지 / Handshake OFF 확인 완료 · MANUAL") |
| 2703 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 2705 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAlarmRecoveryStatus("정지 또는 Handshake OFF 확인 실패 · 재시작 차단: " + error.Message) |
| 2706 | try | 예외 처리 범위입니다: try |
| 2708 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log().WriteStationState("PROCESS", "ALARM", "HEAVY_ALARM_RECOVERY", error.Message) |
| 2708 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log() |
| 2710 | catch | 지정 예외를 처리합니다: catch (Exception logError) |
| 2712 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.Diagnostics.Trace.TraceError(logError.ToString()) |
| 2712 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: logError.ToString() |
| 2715 | finally | 종료 정리 구간입니다: finally |
| 2717 | assignment | 값을 대상에 대입합니다: _operationMode = EN_SYSTEM_MODE.Manual |
| 2718 | assignment | 값을 대상에 대입합니다: _systemStatus = _systemStatus with { OperationMode = EN_SYSTEM_MODE.Manual } |
| 2720 | assignment | 값을 대상에 대입합니다: OperationMode = EN_SYSTEM_MODE.Manual |
| 2722 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetAutoCycleState(EN_AUTO_CYCLE_STATE.Ready) |
| 2723 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshOperationModeAccess() |
| 2724 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OnPropertyChanged(nameof(IsManualShiftOffsetVisible)) |
| 2724 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(IsManualShiftOffsetVisible) |
| 2725 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 2726 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StopCommand.NotifyCanExecuteChanged() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RecoverHeavyAlarm"]
 N0["L2641 try"]
 M -->|포함| N0
 N1["L2661 if"]
 N0 -->|포함| N1
 N2["L2664 if"]
 N0 -->|포함| N2
 N3["L2666 if"]
 N0 -->|포함| N3
 N4["L2668 if"]
 N0 -->|포함| N4
 N5["L2679 while"]
 N0 -->|포함| N5
 N6["L2681 if"]
 N5 -->|포함| N6
 N7["L2686 if"]
 N0 -->|포함| N7
 N8["L2694 while"]
 N0 -->|포함| N8
 N9["L2696 if"]
 N8 -->|포함| N9
 N10["L2703 catch"]
 N0 -->|포함| N10
 N11["L2706 try"]
 N10 -->|포함| N11
 N12["L2710 catch"]
 N11 -->|포함| N12
 N13["L2715 finally"]
 N0 -->|포함| N13
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Stop` · L2645–2655

[Drilling.UI/CRootView.cs:2645–2655](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2645-L2655)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Stop(System.Func<System.Threading.Tasks.Task>) |
| 접근/수식자 | Private / async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| action | System.Func<System.Threading.Tasks.Task> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2659–2663](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2659-L2663) | Stop | False |
| [Drilling.UI/CRootView.cs:2665–2665](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2665-L2665) | Stop | False |
| [Drilling.UI/CRootView.cs:2669–2673](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2669-L2673) | Stop | False |
| [Drilling.UI/CRootView.cs:2674–2674](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2674-L2674) | Stop | False |
| [Drilling.UI/CRootView.cs:2676–2685](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2676-L2685) | Stop | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2649 | action | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task System.Func<System.Threading.Tasks.Task>.Invoke() |
| 2653 | failures.Add | resolved | void System.Collections.Generic.List<System.Exception>.Add(System.Exception) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2647 | try | 예외 처리 범위입니다: try |
| 2649 | await | 비동기 완료를 기다립니다: await action() |
| 2649 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: action() |
| 2651 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 2653 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: failures.Add(error) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Stop"]
 N0["L2647 try"]
 M -->|포함| N0
 N1["L2651 catch"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OnCurrentAlarmsChanged` · L2730–2757

[Drilling.UI/CRootView.cs:2730–2757](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2730-L2757)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.OnCurrentAlarmsChanged() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:233–233](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L233-L233) | OnCurrentAlarmsChanged | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2732 | Interlocked.Exchange | resolved | int System.Threading.Interlocked.Exchange(ref int, int) |
| 2734 | _alarmDispatcher.BeginInvoke | unresolved | None |
| 2734 | new Action | unresolved | None |
| 2736 | Interlocked.Exchange | resolved | int System.Threading.Interlocked.Exchange(ref int, int) |
| 2737 | _alarmManager.GetCurrentSnapshot | resolved | Drilling.Common.Alarm.ST_CURRENT_ALARM_SNAPSHOT Drilling.Common.Alarm.CAlarmManager.GetCurrentSnapshot() · Drilling.Common/Alarm/CAlarmManager.cs:223 |
| 2742 | RefreshShellStatusItems | resolved | void Drilling.UI.CRootView.RefreshShellStatusItems() · Drilling.UI/CRootView.cs:736 |
| 2743 | snapshot.Rows.Where(row => row.Severity == EN_ALARM_LEVEL.Critical).Select(row => (row.Code, row.OccurredAt)).ToHashSet | resolved | System.Collections.Generic.HashSet<(int Code, System.DateTimeOffset OccurredAt)> System.Collections.Generic.IEnumerable<(int Code, System.DateTimeOffset OccurredAt)>.ToHashSet<(int Code, System.DateTimeOffset OccurredAt)>() |
| 2743 | snapshot.Rows.Where(row => row.Severity == EN_ALARM_LEVEL.Critical).Select | resolved | System.Collections.Generic.IEnumerable<(int Code, System.DateTimeOffset OccurredAt)> System.Collections.Generic.IEnumerable<Drilling.Common.Alarm.ST_ALARM_DATA>.Select<Drilling.Common.Alarm.ST_ALARM_DATA, (int Code, System.DateTimeOffset OccurredAt)>(System.Func<Drilling.Common.Alarm.ST_ALARM_DATA, (int Code, System.DateTimeOffset OccurredAt)>) |
| 2743 | snapshot.Rows.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Alarm.ST_ALARM_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Alarm.ST_ALARM_DATA>.Where<Drilling.Common.Alarm.ST_ALARM_DATA>(System.Func<Drilling.Common.Alarm.ST_ALARM_DATA, bool>) |
| 2744 | _heavyOccurrences.IntersectWith | resolved | void System.Collections.Generic.HashSet<(int Code, System.DateTimeOffset Time)>.IntersectWith(System.Collections.Generic.IEnumerable<(int Code, System.DateTimeOffset Time)>) |
| 2747 | _heavyOccurrences.Add | resolved | bool System.Collections.Generic.HashSet<(int Code, System.DateTimeOffset Time)>.Add((int Code, System.DateTimeOffset Time)) |
| 2749 | .Panel.Refresh | resolved | void Drilling.UI.Popup.CAlarmPopupPanel.Refresh() · Drilling.UI/Popup/CAlarmPopupDialog.xaml.cs:91 |
| 2750 | _alarmNavigation.ShouldNavigate | resolved | bool Drilling.UI.CAlarmNavigationTracker.ShouldNavigate(Drilling.Common.Alarm.ST_CURRENT_ALARM_SNAPSHOT) · Drilling.UI/CRootView.cs:2944 |
| 2751 | ShowAlarmPopup | resolved | void Drilling.UI.CRootView.ShowAlarmPopup() · Drilling.UI/CRootView.cs:2582 |
| 2753 | EnsureHeavyAlarmRecovery | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.EnsureHeavyAlarmRecovery() · Drilling.UI/CRootView.cs:2570 |
| 2755 | RefreshCurrentScreen | resolved | System.Threading.Tasks.Task Drilling.UI.CRootView.RefreshCurrentScreen() · Drilling.UI/CRootView.cs:481 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2732 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Exchange(ref _alarmRefreshQueued, 1) |
| 2732 | if | 조건에 따라 분기합니다: if (_alarmDispatcher.HasShutdownStarted &#124;&#124; Interlocked.Exchange(ref _alarmRefreshQueued, 1) != 0) |
| 2733 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2734 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _alarmDispatcher.BeginInvoke(DispatcherPriority.Normal, new Action(() => { Interlocked.Exchange(ref _alarmRefreshQueued, 0); var snapshot = _alarmManager.GetCurrentSnapshot(); _systemStatus = _systemStatus with { AlarmSt… |
| 2734 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Action(() => { Interlocked.Exchange(ref _alarmRefreshQueued, 0); var snapshot = _alarmManager.GetCurrentSnapshot(); _systemStatus = _systemStatus with { AlarmState = snapshot.Rows.Count > 0 ? EN_ALARM_STATE.Occur : E… |
| 2736 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Exchange(ref _alarmRefreshQueued, 0) |
| 2737 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _alarmManager.GetCurrentSnapshot() |
| 2737 | local-declaration | 지역 변수를 선언합니다: var snapshot = _alarmManager.GetCurrentSnapshot(); |
| 2737 | variable-initializer | 변수의 초기값을 지정합니다: snapshot = _alarmManager.GetCurrentSnapshot() |
| 2738 | assignment | 값을 대상에 대입합니다: _systemStatus = _systemStatus with { AlarmState = snapshot.Rows.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear } |
| 2740 | assignment | 값을 대상에 대입합니다: AlarmState = snapshot.Rows.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear |
| 2740 | conditional-expression | 조건에 따라 결과식을 선택합니다: snapshot.Rows.Count > 0 ? EN_ALARM_STATE.Occur : EN_ALARM_STATE.Clear |
| 2742 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshShellStatusItems() |
| 2743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: snapshot.Rows.Where(row => row.Severity == EN_ALARM_LEVEL.Critical).Select(row => (row.Code, row.OccurredAt)).ToHashSet() |
| 2743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: snapshot.Rows.Where(row => row.Severity == EN_ALARM_LEVEL.Critical).Select(row => (row.Code, row.OccurredAt)) |
| 2743 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: snapshot.Rows.Where(row => row.Severity == EN_ALARM_LEVEL.Critical) |
| 2743 | local-declaration | 지역 변수를 선언합니다: var currentHeavy = snapshot.Rows.Where(row => row.Severity == EN_ALARM_LEVEL.Critical).Select(row => (row.Code, row.OccurredAt)).ToHashSet(); |
| 2743 | variable-initializer | 변수의 초기값을 지정합니다: currentHeavy = snapshot.Rows.Where(row => row.Severity == EN_ALARM_LEVEL.Critical).Select(row => (row.Code, row.OccurredAt)).ToHashSet() |
| 2744 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _heavyOccurrences.IntersectWith(currentHeavy) |
| 2745 | local-declaration | 지역 변수를 선언합니다: var newHeavy = false; |
| 2745 | variable-initializer | 변수의 초기값을 지정합니다: newHeavy = false |
| 2746 | foreach | 컬렉션 요소를 순회합니다: foreach (var occurrence in currentHeavy) |
| 2747 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _heavyOccurrences.Add(occurrence) |
| 2747 | if | 조건에 따라 분기합니다: if (_heavyOccurrences.Add(occurrence)) |
| 2748 | assignment | 값을 대상에 대입합니다: newHeavy = true |
| 2749 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Panel.Refresh() |
| 2750 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _alarmNavigation.ShouldNavigate(snapshot) |
| 2750 | if | 조건에 따라 분기합니다: if (_alarmNavigation.ShouldNavigate(snapshot)) |
| 2751 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ShowAlarmPopup() |
| 2752 | if | 조건에 따라 분기합니다: if (newHeavy) |
| 2753 | assignment | 값을 대상에 대입합니다: _ = EnsureHeavyAlarmRecovery() |
| 2753 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EnsureHeavyAlarmRecovery() |
| 2754 | if | 조건에 따라 분기합니다: if (SelectedMenu.Menu == EN_MENU.Alarm) |
| 2755 | assignment | 값을 대상에 대입합니다: _ = RefreshCurrentScreen() |
| 2755 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshCurrentScreen() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OnCurrentAlarmsChanged"]
 N0["L2732 if"]
 M -->|포함| N0
 N1["L2746 foreach"]
 M -->|포함| N1
 N2["L2747 if"]
 N1 -->|포함| N2
 N3["L2750 if"]
 M -->|포함| N3
 N4["L2752 if"]
 M -->|포함| N4
 N5["L2754 if"]
 M -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StartProtectWindowRequestNotice` · L2761–2766

[Drilling.UI/CRootView.cs:2761–2766](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2761-L2766)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.StartProtectWindowRequestNotice(Window) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| owner | Window | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CApp.xaml.cs:36–36](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CApp.xaml.cs#L36-L36) | _rootView.StartProtectWindowRequestNotice | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2763 | .Dispose | resolved | void Drilling.UI.Popup.CProtectWindowRequestNotice.Dispose() · Drilling.UI/Popup/CProtectWindowRequestDialog.xaml.cs:110 |
| 2764 | new | resolved | Drilling.UI.Popup.CProtectWindowRequestNotice.CProtectWindowRequestNotice(Drilling.Common.Interface.CInterfaceManager, Window, System.Func<Drilling.UI.Menu.Menus.CMainProtectWindowPanel, Drilling.UI.Popup.CProtectWindowRequestDialog>?) · Drilling.UI/Popup/CProtectWindowRequestDialog.xaml.cs:37 |
| 2765 | _protectWindowNotice.Start | resolved | void Drilling.UI.Popup.CProtectWindowRequestNotice.Start() · Drilling.UI/Popup/CProtectWindowRequestDialog.xaml.cs:50 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2763 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Dispose() |
| 2764 | assignment | 값을 대상에 대입합니다: _protectWindowNotice = new(_interfaceManager, owner) |
| 2764 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_interfaceManager, owner) |
| 2765 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _protectWindowNotice.Start() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateAutoPowerActions` · L2770–2782

[Drilling.UI/CRootView.cs:2770–2782](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2770-L2782)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Station.ST_STAGE_TPM_ACTIONS Drilling.UI.CRootView.CreateAutoPowerActions() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Station.ST_STAGE_TPM_ACTIONS |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:616–616](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L616-L616) | CreateAutoPowerActions | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2773 | new | resolved | Drilling.Common.Station.ST_STAGE_TPM_ACTIONS.ST_STAGE_TPM_ACTIONS(System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>, System.Func<System.Threading.Tasks.Task>) · Drilling.Common/Station/CStationProcess.cs:5942 |
| 2775 | run.DisposeAsync().ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredValueTaskAwaitable System.Threading.Tasks.ValueTask.ConfigureAwait(bool) |
| 2775 | run.DisposeAsync | resolved | System.Threading.Tasks.ValueTask Drilling.Common.Interface.CPowerMeasureRun.DisposeAsync() · Drilling.Common/Interface/CPowerMeasureRun.cs:127 |
| 2776 | _recipeManager.RefreshRecipe(_selectedRecipeId, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 2776 | _recipeManager.RefreshRecipe | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.RefreshRecipe(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:159 |
| 2776 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2777 | Drilling.File.PowerTable.CPowerTableFile.CreateRun | resolved | Drilling.Common.Interface.CPowerMeasureRun Drilling.File.PowerTable.CPowerTableFile.CreateRun(Drilling.Common.Managers.CManager, Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_POWER_MEASURE_TARGET>, bool) · Drilling.File/PowerTable/CPowerTableFile.cs:32 |
| 2777 | CPowerMeasureRun.AutoTargets | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_POWER_MEASURE_TARGET> Drilling.Common.Interface.CPowerMeasureRun.AutoTargets(Drilling.Common.Managers.CSettingManager) · Drilling.Common/Interface/CPowerMeasureRun.cs:20 |
| 2777 | _manager.Setting | resolved | Drilling.Common.Managers.CSettingManager Drilling.Common.Managers.CManager.Setting() · Drilling.Common/Managers/CManager.cs:340 |
| 2778 | run.Prepare(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 2778 | run.Prepare | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CPowerMeasureRun.Prepare(System.Threading.CancellationToken) · Drilling.Common/Interface/CPowerMeasureRun.cs:47 |
| 2779 | (run ?? throw new InvalidOperationException("TPM 준비가 필요합니다.")).Measure | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CPowerMeasureRun.Measure(System.Threading.CancellationToken) · Drilling.Common/Interface/CPowerMeasureRun.cs:60 |
| 2779 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2780 | (run ?? throw new InvalidOperationException("TPM 측정이 필요합니다.")).Save | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CPowerMeasureRun.Save(System.Threading.CancellationToken) · Drilling.Common/Interface/CPowerMeasureRun.cs:109 |
| 2780 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2781 | run.DisposeAsync().ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredValueTaskAwaitable System.Threading.Tasks.ValueTask.ConfigureAwait(bool) |
| 2781 | run.DisposeAsync | resolved | System.Threading.Tasks.ValueTask Drilling.Common.Interface.CPowerMeasureRun.DisposeAsync() · Drilling.Common/Interface/CPowerMeasureRun.cs:127 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2772 | local-declaration | 지역 변수를 선언합니다: CPowerMeasureRun? run = null; |
| 2772 | variable-initializer | 변수의 초기값을 지정합니다: run = null |
| 2773 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(async token => { if (run is not null) await run.DisposeAsync().ConfigureAwait(false); var recipe = await _recipeManager.RefreshRecipe(_selectedRecipeId, token).ConfigureAwait(false) ?? throw new InvalidOperationExcep… |
| 2773 | return | 호출자에게 값 또는 제어를 반환합니다: return new(async token => { if (run is not null) await run.DisposeAsync().ConfigureAwait(false); var recipe = await _recipeManager.RefreshRecipe(_selectedRecipeId, token).ConfigureAwait(false) ?? throw new InvalidOperationExceptio |
| 2775 | await | 비동기 완료를 기다립니다: await run.DisposeAsync().ConfigureAwait(false) |
| 2775 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: run.DisposeAsync().ConfigureAwait(false) |
| 2775 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: run.DisposeAsync() |
| 2775 | if | 조건에 따라 분기합니다: if (run is not null) |
| 2776 | await | 비동기 완료를 기다립니다: await _recipeManager.RefreshRecipe(_selectedRecipeId, token).ConfigureAwait(false) |
| 2776 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.RefreshRecipe(_selectedRecipeId, token).ConfigureAwait(false) |
| 2776 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.RefreshRecipe(_selectedRecipeId, token) |
| 2776 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("선택된 Recipe가 없습니다.") |
| 2776 | local-declaration | 지역 변수를 선언합니다: var recipe = await _recipeManager.RefreshRecipe(_selectedRecipeId, token).ConfigureAwait(false) ?? throw new InvalidOperationException("선택된 Recipe가 없습니다."); |
| 2776 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("선택된 Recipe가 없습니다.") |
| 2776 | variable-initializer | 변수의 초기값을 지정합니다: recipe = await _recipeManager.RefreshRecipe(_selectedRecipeId, token).ConfigureAwait(false) ?? throw new InvalidOperationException("선택된 Recipe가 없습니다.") |
| 2777 | assignment | 값을 대상에 대입합니다: run = Drilling.File.PowerTable.CPowerTableFile.CreateRun(_manager, recipe, CPowerMeasureRun.AutoTargets(_manager.Setting()), automatic: true) |
| 2777 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Drilling.File.PowerTable.CPowerTableFile.CreateRun(_manager, recipe, CPowerMeasureRun.AutoTargets(_manager.Setting()), automatic: true) |
| 2777 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CPowerMeasureRun.AutoTargets(_manager.Setting()) |
| 2777 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting() |
| 2778 | await | 비동기 완료를 기다립니다: await run.Prepare(token).ConfigureAwait(false) |
| 2778 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: run.Prepare(token).ConfigureAwait(false) |
| 2778 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: run.Prepare(token) |
| 2779 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (run ?? throw new InvalidOperationException("TPM 준비가 필요합니다.")).Measure(token) |
| 2779 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("TPM 준비가 필요합니다.") |
| 2779 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("TPM 준비가 필요합니다.") |
| 2780 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (run ?? throw new InvalidOperationException("TPM 측정이 필요합니다.")).Save(token) |
| 2780 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("TPM 측정이 필요합니다.") |
| 2780 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("TPM 측정이 필요합니다.") |
| 2781 | await | 비동기 완료를 기다립니다: await run.DisposeAsync().ConfigureAwait(false) |
| 2781 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: run.DisposeAsync().ConfigureAwait(false) |
| 2781 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: run.DisposeAsync() |
| 2781 | if | 조건에 따라 분기합니다: if (run is not null) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateAutoPowerActions"]
 N0["L2775 if"]
 M -->|포함| N0
 N1["L2781 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_autoReviewZeroLineRunId` · L2784–2784

[Drilling.UI/CRootView.cs:2784–2784](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2784-L2784)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Guid? Drilling.UI.CRootView._autoReviewZeroLineRunId |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Guid? |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateAutoReviewActions` · L2785–2826

[Drilling.UI/CRootView.cs:2785–2826](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2785-L2826)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Station.ST_STAGE_REVIEW_ACTIONS Drilling.UI.CRootView.CreateAutoReviewActions() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Station.ST_STAGE_REVIEW_ACTIONS |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:616–616](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L616-L616) | CreateAutoReviewActions | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2797 | new | resolved | Drilling.Common.Review.CAutoFineReviewCoordinator.CAutoFineReviewCoordinator(Drilling.Common.Review.CReviewManager, Drilling.Common.Review.CReviewOffsetFileBase, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Review.ST_AUTO_REVIEW_INPUT>>, System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, System.Threading.CancellationToken, System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.Vision.ST_VISION_MARK_FIND>>>?, System.Action<Drilling.Common.Review.CReviewOffsetDuplicateSourceException>?) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:10 |
| 2799 | _manager.ReviewOffsetFile | resolved | Drilling.Common.Review.CReviewOffsetFileBase Drilling.Common.Managers.CManager.ReviewOffsetFile() · Drilling.Common/Managers/CManager.cs:438 |
| 2803 | new | resolved | Drilling.Common.Station.ST_STAGE_REVIEW_ACTIONS.ST_STAGE_REVIEW_ACTIONS(System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>) · Drilling.Common/Station/CStationProcess.cs:5943 |
| 2807 | _autoFineReview.Measure(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 2807 | _autoFineReview.Measure | resolved | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.Measure(System.Threading.CancellationToken) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:43 |
| 2813 | _stationManager.CompleteZeroLineFollowUp(_autoReviewZeroLineRunId.Value, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 2813 | _stationManager.CompleteZeroLineFollowUp | resolved | System.Threading.Tasks.Task Drilling.Common.Station.CStationManager.CompleteZeroLineFollowUp(System.Guid, System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:19 |
| 2819 | _autoFineReview.Save(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 2819 | _autoFineReview.Save | resolved | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.Save(System.Threading.CancellationToken) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:79 |
| 2822 | _stationManager.CompleteZeroLineFollowUp(runId, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 2822 | _stationManager.CompleteZeroLineFollowUp | resolved | System.Threading.Tasks.Task Drilling.Common.Station.CStationManager.CompleteZeroLineFollowUp(System.Guid, System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:19 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2797 | assignment | 값을 대상에 대입합니다: _autoFineReview ??= new( _reviewManager, _manager.ReviewOffsetFile(), CreateStageReviewInput, simulationMeasurement: null, duplicateSourceDetected: RaiseDuplicateSourceAlarm) |
| 2797 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new( _reviewManager, _manager.ReviewOffsetFile(), CreateStageReviewInput, simulationMeasurement: null, duplicateSourceDetected: RaiseDuplicateSourceAlarm) |
| 2799 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.ReviewOffsetFile() |
| 2803 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_autoFineReview.Prepare, async token => { try { await _autoFineReview.Measure(token).ConfigureAwait(false); } catch (InvalidDataException) when (_autoReviewZeroLineRunId is not null && _autoFineReview.FollowUpInspect… |
| 2803 | return | 호출자에게 값 또는 제어를 반환합니다: return new(_autoFineReview.Prepare, async token => { try { await _autoFineReview.Measure(token).ConfigureAwait(false); } catch (InvalidDataException) when (_autoReviewZeroLineRunId is not null && _autoFineReview.FollowUpInspection |
| 2805 | try | 예외 처리 범위입니다: try |
| 2807 | await | 비동기 완료를 기다립니다: await _autoFineReview.Measure(token).ConfigureAwait(false) |
| 2807 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _autoFineReview.Measure(token).ConfigureAwait(false) |
| 2807 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _autoFineReview.Measure(token) |
| 2809 | catch | 지정 예외를 처리합니다: catch (InvalidDataException) when (_autoReviewZeroLineRunId is not null && _autoFineReview.FollowUpInspectionCompleted) |
| 2813 | await | 비동기 완료를 기다립니다: await _stationManager.CompleteZeroLineFollowUp(_autoReviewZeroLineRunId.Value, token).ConfigureAwait(false) |
| 2813 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.CompleteZeroLineFollowUp(_autoReviewZeroLineRunId.Value, token).ConfigureAwait(false) |
| 2813 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.CompleteZeroLineFollowUp(_autoReviewZeroLineRunId.Value, token) |
| 2814 | assignment | 값을 대상에 대입합니다: _autoReviewZeroLineRunId = null |
| 2815 | throw | 예외를 발생/전달합니다: throw; |
| 2819 | await | 비동기 완료를 기다립니다: await _autoFineReview.Save(token).ConfigureAwait(false) |
| 2819 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _autoFineReview.Save(token).ConfigureAwait(false) |
| 2819 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _autoFineReview.Save(token) |
| 2820 | if | 조건에 따라 분기합니다: if (_autoReviewZeroLineRunId is { } runId) |
| 2822 | await | 비동기 완료를 기다립니다: await _stationManager.CompleteZeroLineFollowUp(runId, token).ConfigureAwait(false) |
| 2822 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.CompleteZeroLineFollowUp(runId, token).ConfigureAwait(false) |
| 2822 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.CompleteZeroLineFollowUp(runId, token) |
| 2823 | assignment | 값을 대상에 대입합니다: _autoReviewZeroLineRunId = null |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateAutoReviewActions"]
 N0["L2805 try"]
 M -->|포함| N0
 N1["L2809 catch"]
 N0 -->|포함| N1
 N2["L2820 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `RaiseDuplicateSourceAlarm` · L2787–2795

[Drilling.UI/CRootView.cs:2787–2795](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2787-L2795)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void RaiseDuplicateSourceAlarm(Drilling.Common.Review.CReviewOffsetDuplicateSourceException) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| duplicate | Drilling.Common.Review.CReviewOffsetDuplicateSourceException | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2789 | _alarmManager.SetAlarm | resolved | bool Drilling.Common.Alarm.CAlarmManager.SetAlarm(string) · Drilling.Common/Alarm/CAlarmManager.cs:239 |
| 2790 | _manager.Log().WriteStationState | unresolved | None |
| 2790 | _manager.Log | resolved | CLogManager Drilling.Common.Managers.CManager.Log() · Drilling.Common/Managers/CManager.cs:388 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2789 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _alarmManager.SetAlarm("AUTO_REVIEW_OFFSET_DUPLICATE_SOURCE") |
| 2790 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log() |
| 2790 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log().WriteStationState( "REVIEW", "ALARM", "AUTO_REVIEW_OFFSET_DUPLICATE_SOURCE", duplicate.Message) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateStageReviewInput` · L2828–2864

[Drilling.UI/CRootView.cs:2828–2864](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2828-L2864)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Review.ST_AUTO_REVIEW_INPUT> Drilling.UI.CRootView.CreateStageReviewInput(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Review.ST_AUTO_REVIEW_INPUT> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2832 | ((CMenuMain)_menus[EN_MENU.Main]).RunOptions.CaptureReviewOptions | resolved | Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS Drilling.UI.Menu.Menus.CMainRunOptionPanel.CaptureReviewOptions() · Drilling.UI/Menu/Menus/CMenuMain.cs:2776 |
| 2833 | _stationManager.GetStatus | resolved | Drilling.Common.Station.ST_STATION_PROCESS_STATUS Drilling.Common.Station.CStationManager.GetStatus(System.Threading.CancellationToken) · Drilling.Common/Station/CStationManager.cs:65 |
| 2836 | (await _recipeManager.LoadRecipes(token).ConfigureAwait(false)).SingleOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.SingleOrDefault<Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION, bool>) |
| 2836 | _recipeManager.LoadRecipes(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>>.ConfigureAwait(bool) |
| 2836 | _recipeManager.LoadRecipes | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeManager.LoadRecipes(System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:40 |
| 2836 | item.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 2836 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2840 | current.Parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToArray<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 2840 | current.Parameters.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>.Select<System.Collections.Generic.KeyValuePair<string, string>, Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<System.Collections.Generic.KeyValuePair<string, string>, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 2840 | new ST_RECIPE_PARAMETER | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER.ST_RECIPE_PARAMETER(string, string, string, string, string, string, string, string, string, bool, bool, int, Drilling.Common.Managers.EN_RECIPE_DATA_TYPE, double, double, double, System.Collections.Generic.IReadOnlyDictionary<string, string>?) · Drilling.Common/Managers/CRecipeManager.cs:355 |
| 2843 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 2844 | CreateStageProcessRequestCore(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST>.ConfigureAwait(bool) |
| 2844 | CreateStageProcessRequestCore | resolved | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> Drilling.UI.CRootView.CreateStageProcessRequestCore(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:2886 |
| 2851 | plan.RecipeId.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 2851 | plan.GlassId.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 2852 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2856 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2858 | new | resolved | Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ST_AUTO_REVIEW_INPUT(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:347 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2830 | assignment | 값을 대상에 대입합니다: _autoReviewZeroLineRunId = null |
| 2832 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ((CMenuMain)_menus[EN_MENU.Main]).RunOptions.CaptureReviewOptions() |
| 2832 | local-declaration | 지역 변수를 선언합니다: var options = ((CMenuMain)_menus[EN_MENU.Main]).RunOptions.CaptureReviewOptions(); |
| 2832 | variable-initializer | 변수의 초기값을 지정합니다: options = ((CMenuMain)_menus[EN_MENU.Main]).RunOptions.CaptureReviewOptions() |
| 2833 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stationManager.GetStatus(token) |
| 2833 | local-declaration | 지역 변수를 선언합니다: var station = _stationManager.GetStatus(token); |
| 2833 | variable-initializer | 변수의 초기값을 지정합니다: station = _stationManager.GetStatus(token) |
| 2834 | local-declaration | 지역 변수를 선언합니다: var current = station.ProcessModel; |
| 2834 | variable-initializer | 변수의 초기값을 지정합니다: current = station.ProcessModel |
| 2835 | local-declaration | 지역 변수를 선언합니다: var recipeId = current?.RecipeId ?? _selectedRecipeId; |
| 2835 | variable-initializer | 변수의 초기값을 지정합니다: recipeId = current?.RecipeId ?? _selectedRecipeId |
| 2836 | await | 비동기 완료를 기다립니다: await _recipeManager.LoadRecipes(token).ConfigureAwait(false) |
| 2836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (await _recipeManager.LoadRecipes(token).ConfigureAwait(false)).SingleOrDefault(item => item.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase)) |
| 2836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.LoadRecipes(token).ConfigureAwait(false) |
| 2836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.LoadRecipes(token) |
| 2836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) |
| 2836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Review Recipe를 찾을 수 없습니다: {recipeId}") |
| 2836 | local-declaration | 지역 변수를 선언합니다: var recipe = (await _recipeManager.LoadRecipes(token).ConfigureAwait(false)).SingleOrDefault(item => item.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase)) ?? throw new InvalidOperationException($"Review Recipe를 찾을 수 없습니다:  |
| 2836 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Review Recipe를 찾을 수 없습니다: {recipeId}") |
| 2836 | variable-initializer | 변수의 초기값을 지정합니다: recipe = (await _recipeManager.LoadRecipes(token).ConfigureAwait(false)).SingleOrDefault(item => item.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase)) ?? throw new InvalidOperationException($"Review Recipe를 찾을 수 없습니다: {rec |
| 2837 | if | 조건에 따라 분기합니다: if (current is not null) |
| 2838 | assignment | 값을 대상에 대입합니다: recipe = recipe with { Parameters = current.Parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray() } |
| 2840 | assignment | 값을 대상에 대입합니다: Parameters = current.Parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray() |
| 2840 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current.Parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray() |
| 2840 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current.Parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)) |
| 2840 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key) |
| 2842 | local-declaration | 지역 변수를 선언합니다: var glass = current?.GlassId; |
| 2842 | variable-initializer | 변수의 초기값을 지정합니다: glass = current?.GlassId |
| 2843 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(glass) |
| 2843 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(glass)) |
| 2844 | assignment | 값을 대상에 대입합니다: glass = (await CreateStageProcessRequestCore(token).ConfigureAwait(false)).GlassId |
| 2844 | await | 비동기 완료를 기다립니다: await CreateStageProcessRequestCore(token).ConfigureAwait(false) |
| 2844 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateStageProcessRequestCore(token).ConfigureAwait(false) |
| 2844 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateStageProcessRequestCore(token) |
| 2845 | local-declaration | 지역 변수를 선언합니다: var followUp = station.ZeroLine is { FollowUpRequested: true, Plan: not null }; |
| 2845 | variable-initializer | 변수의 초기값을 지정합니다: followUp = station.ZeroLine is { FollowUpRequested: true, Plan: not null } |
| 2846 | local-declaration | 지역 변수를 선언합니다: Guid? zeroLineRunId = null; |
| 2846 | variable-initializer | 변수의 초기값을 지정합니다: zeroLineRunId = null |
| 2847 | local-declaration | 지역 변수를 선언합니다: DateTimeOffset? zeroLineSavedAt = null; |
| 2847 | variable-initializer | 변수의 초기값을 지정합니다: zeroLineSavedAt = null |
| 2848 | if | 조건에 따라 분기합니다: if (followUp) |
| 2850 | local-declaration | 지역 변수를 선언합니다: var plan = station.ZeroLine!.Plan!; |
| 2850 | variable-initializer | 변수의 초기값을 지정합니다: plan = station.ZeroLine!.Plan! |
| 2851 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: plan.RecipeId.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase) |
| 2851 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: plan.GlassId.Equals(glass, StringComparison.Ordinal) |
| 2851 | if | 조건에 따라 분기합니다: if (!plan.RecipeId.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase) &#124;&#124; !plan.GlassId.Equals(glass, StringComparison.Ordinal)) |
| 2852 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("0선 후속 검사 대상의 Glass/Recipe가 현재 Review와 다릅니다.") |
| 2852 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("0선 후속 검사 대상의 Glass/Recipe가 현재 Review와 다릅니다."); |
| 2853 | assignment | 값을 대상에 대입합니다: _autoReviewZeroLineRunId = plan.RunId |
| 2854 | assignment | 값을 대상에 대입합니다: zeroLineRunId = plan.RunId |
| 2855 | assignment | 값을 대상에 대입합니다: zeroLineSavedAt = station.ZeroLine.ResultSavedAt ?? throw new InvalidOperationException("0선 후속 검사 대상의 최초 결과 저장 시각이 없습니다.") |
| 2856 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("0선 후속 검사 대상의 최초 결과 저장 시각이 없습니다.") |
| 2856 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("0선 후속 검사 대상의 최초 결과 저장 시각이 없습니다.") |
| 2858 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(recipe, glass, options) { ZeroLineFollowUp = followUp, ZeroLineRunId = zeroLineRunId, ZeroLineSavedAt = zeroLineSavedAt } |
| 2858 | return | 호출자에게 값 또는 제어를 반환합니다: return new(recipe, glass, options) { ZeroLineFollowUp = followUp, ZeroLineRunId = zeroLineRunId, ZeroLineSavedAt = zeroLineSavedAt }; |
| 2860 | assignment | 값을 대상에 대입합니다: ZeroLineFollowUp = followUp |
| 2861 | assignment | 값을 대상에 대입합니다: ZeroLineRunId = zeroLineRunId |
| 2862 | assignment | 값을 대상에 대입합니다: ZeroLineSavedAt = zeroLineSavedAt |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateStageReviewInput"]
 N0["L2837 if"]
 M -->|포함| N0
 N1["L2843 if"]
 M -->|포함| N1
 N2["L2848 if"]
 M -->|포함| N2
 N3["L2851 if"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateAutoDistortionActions` · L2866–2874

[Drilling.UI/CRootView.cs:2866–2874](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2866-L2874)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Station.ST_STAGE_DISTORTION_ACTIONS Drilling.UI.CRootView.CreateAutoDistortionActions() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Station.ST_STAGE_DISTORTION_ACTIONS |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:616–616](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L616-L616) | CreateAutoDistortionActions | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2868 | new | resolved | Drilling.Common.Correction.CAlignDistortionCycle.CAlignDistortionCycle(Drilling.Common.Interface.CInterfaceManager, Drilling.Common.Managers.CSettingManager, Drilling.Common.Managers.CRecipeManager, Drilling.Common.Correction.CAlignOffsetLogFileBase, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST>>, System.Action<string>?) · Drilling.Common/Correction/CAlignInterpolation.cs:220 |
| 2868 | _manager.Setting | resolved | Drilling.Common.Managers.CSettingManager Drilling.Common.Managers.CManager.Setting() · Drilling.Common/Managers/CManager.cs:340 |
| 2869 | new Drilling.File.Correction.CAlignOffsetLogFile | resolved | Drilling.File.Correction.CAlignOffsetLogFile.CAlignOffsetLogFile(string) · Drilling.File/Correction/CAlignOffsetLogFile.cs:40 |
| 2870 | _manager.Log().WriteSequence | unresolved | None |
| 2870 | _manager.Log | resolved | CLogManager Drilling.Common.Managers.CManager.Log() · Drilling.Common/Managers/CManager.cs:388 |
| 2872 | new | resolved | Drilling.Common.Station.ST_STAGE_DISTORTION_ACTIONS.ST_STAGE_DISTORTION_ACTIONS(System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task>) · Drilling.Common/Station/CStationProcess.cs:5937 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2868 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Setting() |
| 2868 | assignment | 값을 대상에 대입합니다: _autoDistortion = new(_interfaceManager, _manager.Setting(), _recipeManager, new Drilling.File.Correction.CAlignOffsetLogFile(_manager.ConfigRoot), CreateStageProcessRequestCore, text => _manager.Log().WriteSequence("INFO", "DISTO |
| 2868 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_interfaceManager, _manager.Setting(), _recipeManager, new Drilling.File.Correction.CAlignOffsetLogFile(_manager.ConfigRoot), CreateStageProcessRequestCore, text => _manager.Log().WriteSequence("INFO", "DISTORTION", … |
| 2869 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Drilling.File.Correction.CAlignOffsetLogFile(_manager.ConfigRoot) |
| 2870 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log() |
| 2870 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _manager.Log().WriteSequence("INFO", "DISTORTION", text, $"Cycle={_stationManager.StageRequests.LogCycleId}; Glass={_autoDistortion?.GlassId}; Recipe={_selectedRecipeId}") |
| 2872 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_autoDistortion.Prepare, _autoDistortion.LoadResults, _autoDistortion.Calculate, _autoDistortion.Save) { GlassId = () => _autoDistortion.GlassId, Snapshot = () => _autoDistortion.Snapshot } |
| 2872 | return | 호출자에게 값 또는 제어를 반환합니다: return new(_autoDistortion.Prepare, _autoDistortion.LoadResults, _autoDistortion.Calculate, _autoDistortion.Save) { GlassId = () => _autoDistortion.GlassId, Snapshot = () => _autoDistortion.Snapshot }; |
| 2873 | assignment | 값을 대상에 대입합니다: GlassId = () => _autoDistortion.GlassId |
| 2873 | assignment | 값을 대상에 대입합니다: Snapshot = () => _autoDistortion.Snapshot |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateStageProcessRequest` · L2877–2883

[Drilling.UI/CRootView.cs:2877–2883](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2877-L2883)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> Drilling.UI.CRootView.CreateStageProcessRequest(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2879 | .TakePreparedRequest | resolved | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? Drilling.Common.Correction.CAlignDistortionCycle.TakePreparedRequest(string) · Drilling.Common/Correction/CAlignInterpolation.cs:354 |
| 2880 | CreateStageProcessRequestCore(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST>.ConfigureAwait(bool) |
| 2880 | CreateStageProcessRequestCore | resolved | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> Drilling.UI.CRootView.CreateStageProcessRequestCore(System.Threading.CancellationToken) · Drilling.UI/CRootView.cs:2886 |
| 2881 | (await _recipeManager.LoadRecipes(token).ConfigureAwait(false)).Single | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Single<Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION, bool>) |
| 2881 | _recipeManager.LoadRecipes(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>>.ConfigureAwait(bool) |
| 2881 | _recipeManager.LoadRecipes | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeManager.LoadRecipes(System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:40 |
| 2881 | item.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 2882 | CreateProcessParameters | resolved | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.CRootView.CreateProcessParameters(Drilling.Common.Managers.ST_RECIPE_DEFINITION?, string, string, double, double) · Drilling.UI/CRootView.cs:1314 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2879 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .TakePreparedRequest(_selectedRecipeId) |
| 2879 | local-declaration | 지역 변수를 선언합니다: var prepared = _autoDistortion?.TakePreparedRequest(_selectedRecipeId); |
| 2879 | variable-initializer | 변수의 초기값을 지정합니다: prepared = _autoDistortion?.TakePreparedRequest(_selectedRecipeId) |
| 2880 | await | 비동기 완료를 기다립니다: await CreateStageProcessRequestCore(token).ConfigureAwait(false) |
| 2880 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateStageProcessRequestCore(token).ConfigureAwait(false) |
| 2880 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateStageProcessRequestCore(token) |
| 2880 | if | 조건에 따라 분기합니다: if (prepared is null) |
| 2880 | return | 호출자에게 값 또는 제어를 반환합니다: return await CreateStageProcessRequestCore(token).ConfigureAwait(false); |
| 2881 | await | 비동기 완료를 기다립니다: await _recipeManager.LoadRecipes(token).ConfigureAwait(false) |
| 2881 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (await _recipeManager.LoadRecipes(token).ConfigureAwait(false)).Single(item => item.Id.Equals(prepared.RecipeId, StringComparison.OrdinalIgnoreCase)) |
| 2881 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.LoadRecipes(token).ConfigureAwait(false) |
| 2881 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.LoadRecipes(token) |
| 2881 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Id.Equals(prepared.RecipeId, StringComparison.OrdinalIgnoreCase) |
| 2881 | local-declaration | 지역 변수를 선언합니다: var recipe = (await _recipeManager.LoadRecipes(token).ConfigureAwait(false)).Single(item => item.Id.Equals(prepared.RecipeId, StringComparison.OrdinalIgnoreCase)); |
| 2881 | variable-initializer | 변수의 초기값을 지정합니다: recipe = (await _recipeManager.LoadRecipes(token).ConfigureAwait(false)).Single(item => item.Id.Equals(prepared.RecipeId, StringComparison.OrdinalIgnoreCase)) |
| 2882 | assignment | 값을 대상에 대입합니다: Parameters = CreateProcessParameters(recipe, prepared.GlassId, prepared.LotId, 0, 0) |
| 2882 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateProcessParameters(recipe, prepared.GlassId, prepared.LotId, 0, 0) |
| 2882 | return | 호출자에게 값 또는 제어를 반환합니다: return prepared with { Parameters = CreateProcessParameters(recipe, prepared.GlassId, prepared.LotId, 0, 0) }; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateStageProcessRequest"]
 N0["L2880 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateStageProcessRequestCore` · L2886–2900

[Drilling.UI/CRootView.cs:2886–2900](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2886-L2900)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> Drilling.UI.CRootView.CreateStageProcessRequestCore(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2844–2844](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2844-L2844) | CreateStageProcessRequestCore | False |
| [Drilling.UI/CRootView.cs:2880–2880](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2880-L2880) | CreateStageProcessRequestCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2889 | _recipeManager.LoadRecipes(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>>.ConfigureAwait(bool) |
| 2889 | _recipeManager.LoadRecipes | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeManager.LoadRecipes(System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:40 |
| 2890 | recipes.SingleOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.SingleOrDefault<Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION, bool>) |
| 2890 | value.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 2890 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 2895 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 2896 | .Trim | resolved | string string.Trim() |
| 2897 | CreateProcessParameters | resolved | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.CRootView.CreateProcessParameters(Drilling.Common.Managers.ST_RECIPE_DEFINITION?, string, string, double, double) · Drilling.UI/CRootView.cs:1314 |
| 2899 | new | resolved | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST.ST_STAGE_PROCESS_REQUEST(string, string, string, string, System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Station/CStationProcess.cs:5955 |
| 2899 | Guid.NewGuid | resolved | System.Guid System.Guid.NewGuid() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2888 | local-declaration | 지역 변수를 선언합니다: var recipeId = _selectedRecipeId; |
| 2888 | variable-initializer | 변수의 초기값을 지정합니다: recipeId = _selectedRecipeId |
| 2889 | await | 비동기 완료를 기다립니다: await _recipeManager.LoadRecipes(token).ConfigureAwait(false) |
| 2889 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.LoadRecipes(token).ConfigureAwait(false) |
| 2889 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.LoadRecipes(token) |
| 2889 | local-declaration | 지역 변수를 선언합니다: var recipes = await _recipeManager.LoadRecipes(token).ConfigureAwait(false); |
| 2889 | variable-initializer | 변수의 초기값을 지정합니다: recipes = await _recipeManager.LoadRecipes(token).ConfigureAwait(false) |
| 2890 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.SingleOrDefault(value => value.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase)) |
| 2890 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) |
| 2890 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Selected recipe does not exist: {recipeId}.") |
| 2890 | local-declaration | 지역 변수를 선언합니다: var recipe = recipes.SingleOrDefault(value => value.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase)) ?? throw new InvalidOperationException($"Selected recipe does not exist: {recipeId}."); |
| 2890 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Selected recipe does not exist: {recipeId}.") |
| 2890 | variable-initializer | 변수의 초기값을 지정합니다: recipe = recipes.SingleOrDefault(value => value.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase)) ?? throw new InvalidOperationException($"Selected recipe does not exist: {recipeId}.") |
| 2891 | local-declaration | 지역 변수를 선언합니다: var now = DateTime.Now; |
| 2891 | variable-initializer | 변수의 초기값을 지정합니다: now = DateTime.Now |
| 2892 | local-declaration | 지역 변수를 선언합니다: var product = _productManager.Current; |
| 2892 | variable-initializer | 변수의 초기값을 지정합니다: product = _productManager.Current |
| 2893 | if | 조건에 따라 분기합니다: if (product?.State == EN_PRODUCT_STATE.Completed) |
| 2894 | assignment | 값을 대상에 대입합니다: product = null |
| 2895 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(product?.GlassId) |
| 2895 | conditional-expression | 조건에 따라 결과식을 선택합니다: string.IsNullOrWhiteSpace(product?.GlassId) ? $"{(IsSimulationEnvironment ? "SIM" : "DUMMY")}_{now:yyyyMMdd_HHmmssfff}" : product.GlassId |
| 2895 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsSimulationEnvironment ? "SIM" : "DUMMY" |
| 2895 | local-declaration | 지역 변수를 선언합니다: var glassId = string.IsNullOrWhiteSpace(product?.GlassId) ? $"{(IsSimulationEnvironment ? "SIM" : "DUMMY")}_{now:yyyyMMdd_HHmmssfff}" : product.GlassId; |
| 2895 | variable-initializer | 변수의 초기값을 지정합니다: glassId = string.IsNullOrWhiteSpace(product?.GlassId) ? $"{(IsSimulationEnvironment ? "SIM" : "DUMMY")}_{now:yyyyMMdd_HHmmssfff}" : product.GlassId |
| 2896 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Trim() |
| 2896 | local-declaration | 지역 변수를 선언합니다: var lotId = product?.LotId?.Trim() ?? ""; |
| 2896 | variable-initializer | 변수의 초기값을 지정합니다: lotId = product?.LotId?.Trim() ?? "" |
| 2897 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateProcessParameters(recipe, glassId, lotId, 0, 0) |
| 2897 | local-declaration | 지역 변수를 선언합니다: var parameters = CreateProcessParameters(recipe, glassId, lotId, 0, 0); |
| 2897 | variable-initializer | 변수의 초기값을 지정합니다: parameters = CreateProcessParameters(recipe, glassId, lotId, 0, 0) |
| 2899 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new($"AUTO-{now:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}", recipe.Id, glassId, lotId, parameters) |
| 2899 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid() |
| 2899 | return | 호출자에게 값 또는 제어를 반환합니다: return new($"AUTO-{now:yyyyMMddHHmmssfff}-{Guid.NewGuid():N}", recipe.Id, glassId, lotId, parameters); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateStageProcessRequestCore"]
 N0["L2893 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `OpenMelsecStageSimulationCommand` · L2904–2904

[Drilling.UI/CRootView.cs:2904–2904](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2904-L2904)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.OpenMelsecStageSimulationCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_OpenMelsecStageSimulationCommand` · L2904–2904

[Drilling.UI/CRootView.cs:2904–2904](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2904-L2904)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.CRootView.OpenMelsecStageSimulationCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshMelsecSimulatorVisibility` · L2906–2913

[Drilling.UI/CRootView.cs:2906–2913](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2906-L2913)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.RefreshMelsecSimulatorVisibility() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:738–738](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L738-L738) | RefreshMelsecSimulatorVisibility | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2912 | .Invoke | resolved · 동적 구현 선택 가능 | void System.EventHandler.Invoke(object?, System.EventArgs) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2908 | local-declaration | 지역 변수를 선언합니다: var value = MelsecSimulatorVisibility; |
| 2908 | variable-initializer | 변수의 초기값을 지정합니다: value = MelsecSimulatorVisibility |
| 2909 | if | 조건에 따라 분기합니다: if (_lastSimulatorVisibility == value) |
| 2910 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2911 | assignment | 값을 대상에 대입합니다: _lastSimulatorVisibility = value |
| 2912 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, EventArgs.Empty) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshMelsecSimulatorVisibility"]
 N0["L2909 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `MelsecSimulatorVisibility` · L2915–2915

[Drilling.UI/CRootView.cs:2915–2915](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2915-L2915)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Visibility Drilling.UI.CRootView.MelsecSimulatorVisibility |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Visibility |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2915 | _interfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE.Melsec).Any | resolved | bool System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.Any<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>(System.Func<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, bool>) |
| 2915 | _interfaceManager.GetInterfaceCommunicationList | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.Common.Interface.CInterfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE?) · Drilling.Common/Interface/CInterfaceManager.cs:472 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE.Melsec).Any(device => device.IsSimulation) |
| 2915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _interfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE.Melsec) |
| 2915 | conditional-expression | 조건에 따라 결과식을 선택합니다: _interfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE.Melsec).Any(device => device.IsSimulation) ? Visibility.Visible : Visibility.Collapsed |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OpenMelsecStageSimulation` · L2917–2936

[Drilling.UI/CRootView.cs:2917–2936](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2917-L2936)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.CRootView.OpenMelsecStageSimulation() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.CRootView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L212-L212) | OpenMelsecStageSimulation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 2925 | _stageSimulationDialog.Activate | unresolved | None |
| 2929 | new CMelsecStageSimulationDialog | resolved | Drilling.UI.Popup.CMelsecStageSimulationDialog.CMelsecStageSimulationDialog(Drilling.Common.Interface.CInterfaceManager, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>>?) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:20 |
| 2929 | _recipeManager.RefreshRecipe | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.RefreshRecipe(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:159 |
| 2935 | dialog.Show | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2919 | if | 조건에 따라 분기합니다: if (MelsecSimulatorVisibility != Visibility.Visible) |
| 2920 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2921 | if | 조건에 따라 분기합니다: if (_stageSimulationDialog is not null) |
| 2923 | if | 조건에 따라 분기합니다: if (_stageSimulationDialog.WindowState == WindowState.Minimized) |
| 2924 | assignment | 값을 대상에 대입합니다: _stageSimulationDialog.WindowState = WindowState.Normal |
| 2925 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _stageSimulationDialog.Activate() |
| 2926 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 2929 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeManager.RefreshRecipe(_selectedRecipeId, token) |
| 2929 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CMelsecStageSimulationDialog(_interfaceManager, token => _recipeManager.RefreshRecipe(_selectedRecipeId, token)) { Owner = Application.Current?.MainWindow } |
| 2929 | local-declaration | 지역 변수를 선언합니다: var dialog = new CMelsecStageSimulationDialog(_interfaceManager, token => _recipeManager.RefreshRecipe(_selectedRecipeId, token)) { Owner = Application.Current?.MainWindow }; |
| 2929 | variable-initializer | 변수의 초기값을 지정합니다: dialog = new CMelsecStageSimulationDialog(_interfaceManager, token => _recipeManager.RefreshRecipe(_selectedRecipeId, token)) { Owner = Application.Current?.MainWindow } |
| 2931 | assignment | 값을 대상에 대입합니다: Owner = Application.Current?.MainWindow |
| 2933 | assignment | 값을 대상에 대입합니다: _stageSimulationDialog = dialog |
| 2934 | assignment | 값을 대상에 대입합니다: _stageSimulationDialog = null |
| 2934 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: dialog.Closed += (_, _) => _stageSimulationDialog = null |
| 2935 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dialog.Show() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OpenMelsecStageSimulation"]
 N0["L2919 if"]
 M -->|포함| N0
 N1["L2921 if"]
 M -->|포함| N1
 N2["L2923 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_handledOccurrence` · L2943–2943

[Drilling.UI/CRootView.cs:2943–2943](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2943-L2943)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.UI.CAlarmNavigationTracker._handledOccurrence |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.UI.CAlarmNavigationTracker |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ShouldNavigate` · L2944–2950

[Drilling.UI/CRootView.cs:2944–2950](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2944-L2950)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.CAlarmNavigationTracker.ShouldNavigate(Drilling.Common.Alarm.ST_CURRENT_ALARM_SNAPSHOT) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.CAlarmNavigationTracker |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| snapshot | Drilling.Common.Alarm.ST_CURRENT_ALARM_SNAPSHOT | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2750–2750](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L2750-L2750) | _alarmNavigation.ShouldNavigate | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 2946 | if | 조건에 따라 분기합니다: if (snapshot.OccurrenceVersion <= _handledOccurrence) |
| 2947 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 2948 | assignment | 값을 대상에 대입합니다: _handledOccurrence = snapshot.OccurrenceVersion |
| 2949 | return | 호출자에게 값 또는 제어를 반환합니다: return snapshot.Rows.Count > 0; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ShouldNavigate"]
 N0["L2946 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../annotated/Drilling.UI/CRootView.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
