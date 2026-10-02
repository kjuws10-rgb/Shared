# 05. 저장 담당과 화면 담당: 모든 파일 사전

**File = 저장 형식을 아는 사람**, **UI = 사람에게 보여 주고 클릭을 받는 사람**으로 기억하면 쉽다. `.xaml`은 화면의 배치·색·컨트롤, 같은 이름의 `.xaml.cs`는 그 화면의 C# 연결 코드다. 실제 업무 판단은 대개 `CMenu...`나 Common 관리자로 넘어간다.

## Drilling.File — 파일 읽기/쓰기

| 파일 | 하는 일 | 연결 상대 |
| --- | --- | --- |
| [`CBETFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CBETFile.cs#L1) | JHMI_BET.csv의 배율·발산 값 읽기 | CInterfaceManager/빔 확대기 |
| [`CConfigStructureFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CConfigStructureFile.cs#L1) | 필수 Config 파일·열·중복키 검사 | CManager 시작 검사 |
| [`CInterfaceFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CInterfaceFile.cs#L1) | JHMI_INTERFACE.csv 장비 연결표 읽기·저장 | CManager → CInterfaceManager |
| [`CJhmiRecipeFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1) | JHMI_RCP.csv 폼과 RECIPE/*.csv 읽기·저장·이름변경 | CRecipeManager·CMenuRecipe |
| [`CManualScanFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CManualScanFile.cs#L1) | 수동 스캔 폼과 Manual/*.scan 읽기·저장 | CMenuManual |
| [`CMelsecMapFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CMelsecMapFile.cs#L1) | JHMI_MELSEC_MAP.csv PLC 주소 읽기 | CManager → CMelsec |
| [`CMotorFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CMotorFile.cs#L1) | JHMI_MOTOR.csv 축 정의 읽기 | CManager → CMotionManager |
| [`CSettingFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CSettingFile.cs#L1) | JHMI_SETTING.csv 정의와 Setting.csv 실제값 읽기·저장 | CSettingManager |
| [`CCsvParser.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/Parser/CCsvParser.cs#L1) | CSV 쉼표·따옴표 행 읽기/쓰기 공통 도구 | 여러 JHMI·Review·Product 파일 |
| [`CProductFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/Product/CProductFile.cs#L1) | ActiveProduct.csv와 날짜별 ProductHistory 저장 | CProductManager |
| [`CReviewSettingFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/Review/CReviewSettingFile.cs#L1) | 레시피별 .review 프로필 목록·읽기·저장 | CMenuReview |
| [`CReviewResultFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/ReviewResult/CReviewResultFile.cs#L1) | ReviewResult CSV 읽기·저장·경로 만들기 | CReviewManager·CMenuCorrection |
| [`CAutomation1ScriptFile.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/Script/CAutomation1ScriptFile.cs#L1) | Head별 .ascript와 PROCESS 좌표 CSV/텍스트 생성 | CStationProcess → Data/Script |

## Drilling.UI — 화면 및 화면 연결

| 파일 | 하는 일 | 연결 상대 |
| --- | --- | --- |
| [`App.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/App.xaml#L1) | WPF 앱 자원과 시작 클래스 선언 | CApp |
| [`AssemblyInfo.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/AssemblyInfo.cs#L1) | WPF 어셈블리 메타데이터 | 빌드 |
| [`CApp.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/CApp.xaml.cs#L1) | 프로그램 시작·메인 창 표시 | CAppStartup → CRootView |
| [`CAppStartup.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/CAppStartup.cs#L1) | Config 경로 확인·파일/관리자 조립 | CManager·CRootView |
| [`CPreviewCoordinateBehavior.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/CPreviewCoordinateBehavior.cs#L1) | 미리보기 좌표 표시 변환 보조 | 화면 미리보기 |
| [`CRootView.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/CRootView.cs#L1) | 전체 메뉴 생성·선택·상태 갱신·자동 작업 연결 | CMenu* ↔ CManager |
| [`CRootView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/CRootView.xaml#L1) | 전체 창 틀과 메뉴·화면 표시 위치 | CRootView.cs |
| [`CThemeManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/CThemeManager.cs#L1) | 밝은/어두운 테마 자원 적용 | ThemeLight/ThemeDark |
| [`CUiLogService.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/CUiLogService.cs#L1) | UI에서 로그를 전달하는 보조 | CLogManager/화면 |
| [`CBindingBase.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/CBindingBase.cs#L1) | 값이 바뀌면 화면에 알리는 기본 클래스 | CMenu*·화면 |
| [`CButtonCommand.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/CButtonCommand.cs#L1) | 버튼 클릭을 C# 동작으로 바꿔 주는 명령 | CMenu* → View |
| [`CButtonCommandBehavior.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/CButtonCommandBehavior.cs#L1) | 화면 버튼과 명령 연결 보조 | XAML → CButtonCommand |
| [`CCellPreviewDrawing.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs#L1) | Cell 위치/형상 미리보기 그림 데이터 | CMenuMain |
| [`CManualScannerStatusPollingService.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CManualScannerStatusPollingService.cs#L1) | 수동 화면용 스캐너 상태 주기 조회 | CMenuManual → CAutomationManager |
| [`CMenuAlarm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuAlarm.cs#L1) | 알람·인터록 표시 및 처리 버튼 | CAlarmManager·CInterLockManager |
| [`CMenuBase.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuBase.cs#L1) | 모든 메뉴의 공통 속성·진입/이탈 동작 | CMenu* 상속 |
| [`CMenuCorrection.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1) | 리뷰 결과 보기·Shot별 보정 계산/저장 | ReviewResult → Recipe |
| [`CMenuExit.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuExit.cs#L1) | 종료 화면 동작 | CExitView |
| [`CMenuMain.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuMain.cs#L1) | 메인 상태·레시피·가공 준비/시작 입력 | CStationManager·CRecipeManager |
| [`CMenuManual.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuManual.cs#L1) | 수동 조작/수동 스캔 명령 | CManager·CManualScanFile |
| [`CMenuMonitor.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L1) | 장비/축/제품 상태 모니터 | CInterfaceManager·CMotionManager·CProductManager |
| [`CMenuPm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuPm.cs#L1) | PM 잠금 진입·상태 표시 | CRootView |
| [`CMenuRecipe.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1) | 레시피 열기·편집·검증·저장 | CRecipeManager·CReviewSettingFile |
| [`CMenuReview.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuReview.cs#L1) | 리뷰 대상 선택·계획·실행·진행 표시 | CReviewManager·CReviewSettingFile |
| [`CMenuSetting.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1) | 시스템 설정·장비 목록 편집 | CSettingManager |
| [`CMonitorStatusPollingService.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMonitorStatusPollingService.cs#L1) | 모니터 화면 상태를 주기 조회 | CMenuMonitor → 인터페이스/모션 |
| [`CRecipeCellPatternPreviewDrawing.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CRecipeCellPatternPreviewDrawing.cs#L1) | 레시피 Cell 패턴 미리보기 그림 | CMenuRecipe |
| [`CReviewGlassPreviewBuilder.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1) | 리뷰 계획의 Glass·Cell·Shot 그림 데이터 | CMenuReview |
| [`CScannerStatusPollingService.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CScannerStatusPollingService.cs#L1) | 스캐너 상태 주기 조회 | CMenuMonitor → CAutomationManager |
| [`CCellPlacementWizardDialog.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CCellPlacementWizardDialog.xaml#L1) | Cell 배치 마법사 팝업 모양 | CMenuRecipe |
| [`CCellPlacementWizardDialog.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CCellPlacementWizardDialog.xaml.cs#L1) | Cell 배치 입력 검증·팝업 동작 | CMenuRecipe |
| [`CInterfaceStatusDialog.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CInterfaceStatusDialog.xaml#L1) | 장비 연결 상태 팝업 모양 | CRootView/모니터 |
| [`CInterfaceStatusDialog.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CInterfaceStatusDialog.xaml.cs#L1) | 장비 연결 상태 팝업 동작 | CInterfaceManager |
| [`CPasswordInputDialog.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CPasswordInputDialog.xaml#L1) | 비밀번호 입력 팝업 모양 | 권한 제한 화면 |
| [`CPasswordInputDialog.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CPasswordInputDialog.xaml.cs#L1) | 비밀번호 입력·확인 동작 | 권한 제한 화면 |
| [`CRecipeConfirmDialog.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CRecipeConfirmDialog.xaml#L1) | 레시피 변경 확인 팝업 모양 | CMenuRecipe |
| [`CRecipeConfirmDialog.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs#L1) | 레시피 변경 확인 동작 | CMenuRecipe |
| [`CRecipeNameDialog.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CRecipeNameDialog.xaml#L1) | 레시피 이름 입력 팝업 모양 | CMenuRecipe |
| [`CRecipeNameDialog.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CRecipeNameDialog.xaml.cs#L1) | 레시피 이름 입력·확인 동작 | CMenuRecipe |
| [`CValueInputDialog.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CValueInputDialog.xaml#L1) | 숫자/설정값 입력 팝업 모양 | CMenuRecipe·CMenuSetting |
| [`CValueInputDialog.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Popup/CValueInputDialog.xaml.cs#L1) | 입력값 확인·전달 동작 | CMenuRecipe·CMenuSetting |
| [`ThemeDark.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Themes/ThemeDark.xaml#L1) | 어두운 색/스타일 자원 | CThemeManager → 화면 |
| [`ThemeLight.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Themes/ThemeLight.xaml#L1) | 밝은 색/스타일 자원 | CThemeManager → 화면 |
| [`CAlarmView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CAlarmView.xaml#L1) | 알람 화면의 배치·표시 | CMenuAlarm |
| [`CAlarmView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CAlarmView.xaml.cs#L1) | 알람 화면 코드비하인드·입력 연결 | CMenuAlarm |
| [`CCorrectionView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CCorrectionView.xaml#L1) | 보정 화면의 배치·표시 | CMenuCorrection |
| [`CCorrectionView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CCorrectionView.xaml.cs#L1) | 보정 화면 코드비하인드·입력 연결 | CMenuCorrection |
| [`CExitView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CExitView.xaml#L1) | 종료 화면의 배치·표시 | CMenuExit |
| [`CExitView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CExitView.xaml.cs#L1) | 종료 화면 코드비하인드·입력 연결 | CMenuExit |
| [`CMainView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CMainView.xaml#L1) | 메인 화면의 배치·표시 | CMenuMain |
| [`CMainView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CMainView.xaml.cs#L1) | 메인 화면 코드비하인드·입력 연결 | CMenuMain |
| [`CManualView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CManualView.xaml#L1) | 수동 화면의 배치·표시 | CMenuManual |
| [`CManualView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CManualView.xaml.cs#L1) | 수동 화면 코드비하인드·입력 연결 | CMenuManual |
| [`CMonitorView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CMonitorView.xaml#L1) | 모니터 화면의 배치·표시 | CMenuMonitor |
| [`CMonitorView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CMonitorView.xaml.cs#L1) | 모니터 화면 코드비하인드·입력 연결 | CMenuMonitor |
| [`CPicoMotorMonitorView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CPicoMotorMonitorView.xaml#L1) | PicoMotor 상태 화면의 배치·표시 | CMenuMonitor/CPicoMotorService |
| [`CPicoMotorMonitorView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CPicoMotorMonitorView.xaml.cs#L1) | PicoMotor 화면 코드비하인드·입력 연결 | CMenuMonitor/CPicoMotorService |
| [`CPmView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CPmView.xaml#L1) | PM 잠금 화면의 배치·표시 | CMenuPm |
| [`CPmView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CPmView.xaml.cs#L1) | PM 화면 코드비하인드·입력 연결 | CMenuPm |
| [`CRecipeView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CRecipeView.xaml#L1) | 레시피 화면의 배치·표시 | CMenuRecipe |
| [`CRecipeView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CRecipeView.xaml.cs#L1) | 레시피 화면 코드비하인드·입력 연결 | CMenuRecipe |
| [`CReviewView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CReviewView.xaml#L1) | 리뷰 화면의 배치·표시 | CMenuReview |
| [`CReviewView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CReviewView.xaml.cs#L1) | 리뷰 화면 코드비하인드·입력 연결 | CMenuReview |
| [`CSettingView.xaml`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CSettingView.xaml#L1) | 설정 화면의 배치·표시 | CMenuSetting |
| [`CSettingView.xaml.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Views/CSettingView.xaml.cs#L1) | 설정 화면 코드비하인드·입력 연결 | CMenuSetting |

## 프로젝트를 묶는 세 파일

- [`Drilling.File.csproj`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/Drilling.File.csproj#L1): File 계층을 빌드하고 Common을 참조한다.
- [`Drilling.UI.csproj`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Drilling.UI.csproj#L1): 실행 화면을 빌드하고 Common·File을 참조한다.
- [`Drilling.sln`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.sln#L1): 프로젝트들을 개발 도구에서 한꺼번에 여는 목록. 현재 솔루션은 존재하지 않는 `Drilling.Regression`과 `Drilling.UI.Regression` 프로젝트 경로도 참조한다. 따라서 솔루션 전체 빌드는 별도 정리가 필요할 수 있다.

`Drilling.Common.csproj`은 [04번](04_Common_파일사전.md)에 설명했다. 이 사전은 모든 기능 소스 `.cs`와 수작업 XAML을 1개씩 열거한다. `obj`가 생성한 `.cs`는 기능 원본이 아니므로 99번 경로 색인과 [06번 범주 설명](06_설정과_운영파일.md)에서 다룬다.
