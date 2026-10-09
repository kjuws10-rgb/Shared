# 01. Commit 변경 요약과 파일 연결

## Commit별 구분

| Commit | 원본 기록 시각(KST) | 실제 의미 |
| --- | --- | --- |
| [2de35b6](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/2de35b6d6fbaaaf67b23da03671502ebec289b02) | 2026-10-07 17:31:11 | Review Offset 분리, Shift/First Beam, Chess, 운전 모드, 수동 화면 및 함수 이름 정리 |
| [05215af](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/05215afc0621fc38f7e29bcdf4d1b9d2bface72f) | 2026-10-07 19:20:32 | 빌드/IDE 산출물 갱신 및 Solution의 회귀검증 프로젝트 참조 정리. 추가 .cs/.xaml 변경 없음 |

[전체 비교](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/compare/a25ba3cdfd70cff5d78172d13ec957318704b1e1...05215afc0621fc38f7e29bcdf4d1b9d2bface72f).

전체 Git diff는 1,208개 파일, +1,668,897 / -10,686,688줄입니다. 실제 .cs/.xaml은 67개(+4,749/-1,876), Solution까지 포함하면 68개(+4,752/-1,892)입니다. 큰 줄 수는 예전 Script/BuildCheck 삭제, 현재 실행 산출물, bin/obj 및 IDE 파일 등이 포함된 수치입니다. “가공 코드가 천만 줄 바뀌었다”는 뜻이 아닙니다.

최상위별 변경 수: .vs 16 / Data 551 / Drilling.Common 47 / Drilling.File 33 / Drilling.UI 554 / Drilling.sln 1 / Log 6. Config/JHMI/Recipe/Review Rule 설정 파일의 변경은 없습니다. Data의 ActiveProduct·ProductHistory·ReviewResult·Script는 실행 결과물이며, 이번 분석에서 생산 품질이 정상이라는 증거로 취급하지 않았습니다.

## 전체 프로그램을 쉬운 말로 나누면

| 층 | 담당 | 핵심 연결 |
| --- | --- | --- |
| Drilling.UI | 사용자가 누르는 화면, 입력/미리보기/확인창 | Root → 각 Menu → Manager |
| Drilling.Common | 좌표 계산과 가공/검사 순서를 결정하는 본체 | Recipe → Coordinate/Mask → Station 또는 Review |
| Drilling.File | CSV/JHMI를 읽고 결과·스크립트를 저장 | UI/Common이 파일 읽기·쓰기를 요청 |
| Config | 숫자와 설정의 원본 | JHMI가 설명하는 항목 → Setting/Recipe 읽기 |
| Data/Log | 실행 결과와 흔적 | Product·ReviewResult·Script·로그 생성 |
| Drilling.sln | 함께 빌드할 프로젝트 목록 | UI/File/Common을 묶음 |

새 저장 기능은 [시작 구성](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CAppStartup.cs#L15-L39) → CManager → CStationManager/CStationProcess와 CMenuCorrection으로 주입됩니다. “주입”은 직접 새 파일 객체를 여기저기 만드는 대신 시작 때 만든 저장 담당 객체를 필요한 곳에 전달한다는 뜻입니다.

## 중요한 호출 관계

- 가공: CRootView.PrepareInitialProcess → Station.PrepareProcess → BuildRuntimeParameters → 최신 보정 CSV 합치기 → BuildProcessModel → CShotCoordinatePlanBuilder → HeadPlans → ScriptFile.Build.
- 보정: CMenuCorrection.Calculate → Apply(기존+이번 값) → SaveAppliedReviewOffsets → LoadLatest → MergeReviewOffsetRows → SaveNew.
- 리뷰: CReviewManager.CreatePlanCore → 레시피/설정 재계산 → Mask/Chess 제외 → Review Rule 선택 → 이동/측정 → ReviewResult → Product 연결.
- 수동: CMenuManual → MELSEC 위치 읽기/쓰기 또는 Automation1 Reset/Enable/Home/DIO. 화면의 STOP 표시가 실제 정지 명령인지 별도 구분해야 합니다.

## 변경된 소스/UI/Solution 전체 목록

아래 목록은 변경 파일 68개를 빠짐없이 다룹니다. “이름 정리”는 GeneratedCallback 계열 지역 함수 이름을 의미 있는 이름으로 바꾼 부분이며, 해당 파일이 연결되는 역할도 함께 적었습니다. 파일 전체가 새 기능으로 교체됐다는 뜻은 아닙니다.

| 파일 | 담당 / 이번 변화 |
| --- | --- |
| [Drilling.Common/Alarm/CAlarmManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Alarm/CAlarmManager.cs#L1-L1) | 상태/설정/이력 관리. 지역 함수 이름 정리 (+12/-12) |
| [Drilling.Common/Automation/CAutomationManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Automation/CAutomationManager.cs#L1-L1) | 상태/설정/이력 관리. 지역 함수 이름 정리 (+4/-4) |
| [Drilling.Common/InterLock/CInterLockManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/InterLock/CInterLockManager.cs#L1-L1) | 상태/설정/이력 관리. 지역 함수 이름 정리 (+13/-13) |
| [Drilling.Common/Interface/Automation1/CAutomation1Comm.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/Automation1/CAutomation1Comm.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+27/-27) |
| [Drilling.Common/Interface/CComm.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/CComm.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+8/-8) |
| [Drilling.Common/Interface/CInterfaceManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/CInterfaceManager.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+61/-61) |
| [Drilling.Common/Interface/PicoMotor/CPicoMotor.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/PicoMotor/CPicoMotor.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+30/-30) |
| [Drilling.Common/Interface/PicoMotor/CPicoMotorService.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/PicoMotor/CPicoMotorService.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+12/-12) |
| [Drilling.Common/Interface/Serial/CBeamExpander.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/Serial/CBeamExpander.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+4/-4) |
| [Drilling.Common/Interface/Serial/CConex_AGP.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/Serial/CConex_AGP.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+2/-2) |
| [Drilling.Common/Interface/Serial/CPowerMeter.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/Serial/CPowerMeter.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+2/-2) |
| [Drilling.Common/Interface/Serial/CSerialComm.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/Serial/CSerialComm.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+4/-4) |
| [Drilling.Common/Interface/Serial/CTalonLaser.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/Serial/CTalonLaser.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+2/-2) |
| [Drilling.Common/Interface/Socket/CSocketComm.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/Socket/CSocketComm.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+2/-2) |
| [Drilling.Common/Interface/Socket/CSocketServerComm.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Interface/Socket/CSocketServerComm.cs#L1-L1) | 장치 통신/상태 전달. 지역 함수 이름 정리(연결·Serial/Socket/Automation1/PicoMotor) (+6/-6) |
| [Drilling.Common/Log/CLogManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Log/CLogManager.cs#L1-L1) | 상태/설정/이력 관리. 지역 함수 이름 정리 (+15/-15) |
| [Drilling.Common/Managers/CManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Managers/CManager.cs#L1-L1) | 전체 담당 객체를 연결. ReviewOffset 파일 담당 추가 (+17/-10) |
| [Drilling.Common/Managers/CSettingManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Managers/CSettingManager.cs#L1-L1) | 상태/설정/이력 관리. 지역 함수 이름 정리 (+4/-4) |
| [Drilling.Common/Motion/CMotionController.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Motion/CMotionController.cs#L1-L1) | 축 제어/상태 조회. 지역 함수 이름 정리 (+8/-8) |
| [Drilling.Common/Motion/CMotionManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Motion/CMotionManager.cs#L1-L1) | 축 제어/상태 조회. 지역 함수 이름 정리 (+61/-61) |
| [Drilling.Common/Motion/XPS/CXpsComm.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Motion/XPS/CXpsComm.cs#L1-L1) | 축 제어/상태 조회. 지역 함수 이름 정리 (+6/-6) |
| [Drilling.Common/Motion/XPS/CXpsMotion.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Motion/XPS/CXpsMotion.cs#L1-L1) | 축 제어/상태 조회. 지역 함수 이름 정리 (+2/-2) |
| [Drilling.Common/Product/CProductManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Product/CProductManager.cs#L1-L1) | Glass별 공정/검사 자료 연결. 기본 Glass ID 구분자 정리 (+27/-25) |
| [Drilling.Common/Recipe/CRecipeShotMaskingPlan.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CRecipeShotMaskingPlan.cs#L1-L1) | Laser 금지 영역/Chess 판정. ONEWAY 행+열로 변경 (+2/-1) |
| [Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L1-L1) | 설계→Head/Stage/Scanner. First Beam과 Shift 필드/계산 추가 (+66/-46) |
| [Drilling.Common/Review/CReviewManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1-L1) | 리뷰 계획/측정/결과. Offset 파일 계약과 행 구조 추가; 기존 검사 본체 유지 (+33/-0) |
| [Drilling.Common/Review/CReviewSampleRuleSelector.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewSampleRuleSelector.cs#L1-L1) | 어느 리뷰 점을 고를지 결정. 지역 함수 이름 정리 (+4/-4) |
| [Drilling.Common/Station/CStationManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationManager.cs#L1-L1) | Station 구성과 가공 모델 선언. Offset 파일 담당 전달 (+3/-2) |
| [Drilling.Common/Station/CStationProcess.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationProcess.cs#L1-L1) | 가공 준비/실행. 최신 Offset 합치기, 예전 값 제거, Product ID/함수 정리 (+182/-128) |
| [Drilling.File/JHMI/CBETFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CBETFile.cs#L1-L1) | 설정/장치 CSV 읽기. 지역 함수 이름 정리 (+7/-7) |
| [Drilling.File/JHMI/CConfigStructureFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CConfigStructureFile.cs#L1-L1) | 설정/장치 CSV 읽기. 지역 함수 이름 정리 (+20/-20) |
| [Drilling.File/JHMI/CInterfaceFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CInterfaceFile.cs#L1-L1) | 설정/장치 CSV 읽기. 지역 함수 이름 정리 (+19/-19) |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1-L1) | JHMI 기반 레시피 읽기/편집. 동적 Review Offset 항목 제거 (+84/-86) |
| [Drilling.File/JHMI/CManualScanFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CManualScanFile.cs#L1-L1) | 설정/장치 CSV 읽기. 지역 함수 이름 정리 (+26/-26) |
| [Drilling.File/JHMI/CMelsecMapFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CMelsecMapFile.cs#L1-L1) | 설정/장치 CSV 읽기. 지역 함수 이름 정리 (+8/-8) |
| [Drilling.File/JHMI/CMotorFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CMotorFile.cs#L1-L1) | 설정/장치 CSV 읽기. 지역 함수 이름 정리 (+7/-7) |
| [Drilling.File/JHMI/CSettingFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CSettingFile.cs#L1-L1) | 설정/장치 CSV 읽기. 지역 함수 이름 정리 (+33/-33) |
| [Drilling.File/Parser/CCsvParser.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Parser/CCsvParser.cs#L1-L1) | CSV 공통 읽기/검증/쓰기. 지역 함수 이름 정리 (+28/-28) |
| [Drilling.File/Product/CProductFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Product/CProductFile.cs#L1-L1) | Product CSV 저장/읽기. 지역 함수 이름 정리 (+31/-31) |
| [Drilling.File/ReviewOffset/CReviewOffsetFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L1-L1) | 신규. 레시피별 Review Offset CSV 이력 읽기/저장 (+195/-0) |
| [Drilling.File/Script/CAutomation1ScriptFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Script/CAutomation1ScriptFile.cs#L1-L1) | 명령/좌표 CSV 생성. First Beam/Shift 출력, 시뮬레이터 Y, Glass별 폴더 (+93/-44) |
| [Drilling.UI/CApp.xaml.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CApp.xaml.cs#L1-L1) | WPF 시작/이벤트. 지역 함수 이름 정리 (+4/-4) |
| [Drilling.UI/CAppStartup.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CAppStartup.cs#L1-L1) | 시작 구성. CReviewOffsetFile 생성/전달 (+11/-10) |
| [Drilling.UI/CRootView.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.cs#L1-L1) | 화면 전환/MAIN 시작. Shift, MANUAL START 조건, 메뉴/Monitor 쓰기 제어 (+482/-145) |
| [Drilling.UI/CRootView.xaml](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.xaml#L1-L1) | 주 화면 레이아웃/연결 (+4/-1) |
| [Drilling.UI/Menu/CBindingBase.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/CBindingBase.cs#L1-L1) | 화면 속성 변경 알림. 콜백용 속성 변경 도우미 추가 (+12/-0) |
| [Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs#L1-L1) | 셀 그림 생성. 지역 함수 이름 정리 (+2/-2) |
| [Drilling.UI/Menu/Menus/CManualStageMotionPollingService.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CManualStageMotionPollingService.cs#L1-L1) | 신규. MELSEC Stage Y/Camera X 현재 위치 주기 조회 (+88/-0) |
| [Drilling.UI/Menu/Menus/CMenuAlarm.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuAlarm.cs#L1-L1) | 알람 표시. 지역 함수 이름 정리 (+12/-12) |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1-L1) | ReviewResult→보정. 전용 CSV 읽기/병합/저장 및 출력 뷰어 연결 (+191/-125) |
| [Drilling.UI/Menu/Menus/CMenuMain.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuMain.cs#L1-L1) | MAIN 미리보기/상태. 지역 함수 이름 정리 (+118/-118) |
| [Drilling.UI/Menu/Menus/CMenuManual.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1-L1) | 수동 조작. Stage/Camera POS, Reset 순서, 상태 조회 (+769/-124) |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L1-L1) | 장치 감시/명령. MANUAL 여부에 따른 쓰기 차단 및 함수 이름 정리 (+210/-160) |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1-L1) | 레시피 편집/미리보기. Review Offset 편집 제거, First Beam, Chess 반영 (+156/-153) |
| [Drilling.UI/Menu/Menus/CMenuReview.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuReview.cs#L1-L1) | 리뷰 메뉴. 지역 함수 이름 정리 (+10/-10) |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1-L1) | 설정 편집 메뉴. 지역 함수 이름 정리 (+60/-60) |
| [Drilling.UI/Menu/Menus/CMonitorStatusPollingService.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMonitorStatusPollingService.cs#L1-L1) | 장치 상태 주기 조회. 지역 함수 이름 정리 (+31/-31) |
| [Drilling.UI/Popup/CControllerResetSequenceDialog.xaml](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Popup/CControllerResetSequenceDialog.xaml#L1-L1) | 신규. Reset→Enable→Home→DIO 순서 화면 (+280/-0) |
| [Drilling.UI/Popup/CControllerResetSequenceDialog.xaml.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Popup/CControllerResetSequenceDialog.xaml.cs#L1-L1) | 신규. 단계 상태/시작/다음 단계 중단 요청 (+308/-0) |
| [Drilling.UI/Popup/CInterfaceStatusDialog.xaml.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Popup/CInterfaceStatusDialog.xaml.cs#L1-L1) | 연결 상태 창. 지역 함수 이름 정리 (+4/-4) |
| [Drilling.UI/Popup/CPasswordInputDialog.xaml.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Popup/CPasswordInputDialog.xaml.cs#L1-L1) | 암호 입력 창. 지역 함수 이름 정리 (+2/-2) |
| [Drilling.UI/Popup/CShiftOffsetDialog.xaml](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Popup/CShiftOffsetDialog.xaml#L1-L1) | 신규. Shift 입력과 Head별 좌표 변화 화면 (+237/-0) |
| [Drilling.UI/Popup/CShiftOffsetDialog.xaml.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Popup/CShiftOffsetDialog.xaml.cs#L1-L1) | 신규. 숫자 입력/적용 검증/미리보기 갱신 (+303/-0) |
| [Drilling.UI/Views/CMainView.xaml](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Views/CMainView.xaml#L1-L1) | MAIN Shift 버튼/표시와 배치 (+64/-2) |
| [Drilling.UI/Views/CMainView.xaml.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Views/CMainView.xaml.cs#L1-L1) | MAIN Shift 창 열기 이벤트 (+11/-0) |
| [Drilling.UI/Views/CManualView.xaml](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Views/CManualView.xaml#L1-L1) | 수동 Motion/Reset 화면 구성 (+196/-102) |
| [Drilling.UI/Views/CManualView.xaml.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Views/CManualView.xaml.cs#L1-L1) | 수동 화면 활성/선택/이벤트 (+14/-1) |
| [Drilling.sln](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.sln#L1-L1) | 빌드 대상 목록. Drilling.Regression/UI.Regression 참조 제거 (+3/-16) |

Solution 참조 제거는 해당 테스트를 자동으로 실행하도록 추가한 변화가 아닙니다. 이번 분석의 14개 확인 프로그램은 별도 검증 Clone에만 만들었으며 원본 프로젝트에는 추가하지 않았습니다. 모든 파일의 Git 상태 목록은 [전체 변경 목록](evidence/all_changes.tsv), 소스 통계는 [소스 통계](evidence/source_changes.tsv)에 있습니다.
