# 04. `Drilling.Common`: 기능의 핵심 파일 사전

`Common`은 화면·파일 저장 방식과 떨어진 **판단/계산/장비 제어** 층이다. 표의 `연결`은 대표적인 호출 방향이다. 모든 세부 메서드를 뜻하지 않는다. 실제 장비 사용 여부는 Config의 타입·사용·시뮬레이션 설정에 따라 달라진다.

## 안전·공통 관리자

| 파일 | 하는 일 (쉬운 말) | 주된 연결 |
| --- | --- | --- |
| [`CAlarmManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Alarm/CAlarmManager.cs#L1) | 알람의 발생·해제·상태 보관 | CManager·CMenuAlarm → 화면 |
| [`CAutomationManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Automation/CAutomationManager.cs#L1) | Automation1 스크립트 업로드·실행·정지·축 상태 요청 | CStationProcess·화면 → CInterfaceManager |
| [`CScannerStatusLiveSnapshotStore.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Automation/CScannerStatusLiveSnapshotStore.cs#L1) | 스캐너 축의 최근 상태를 공유하는 메모리 저장소 | 폴링 서비스 → 모니터 화면 |
| [`CInterLockManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/InterLock/CInterLockManager.cs#L1) | 비상정지·문 등 자동/수동/레이저 허용 조건 계산 | CStationProcess·CMenuAlarm ← IO 상태 |
| [`CLogManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Log/CLogManager.cs#L1) | 시스템·공정 로그 파일에 메시지 기록 | 관리자들 → Log |
| [`CProgramOpenLog.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Log/CProgramOpenLog.cs#L1) | 프로그램 시작 로그 기록 도움 | CApp/CManager → CLogManager |
| [`CManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Managers/CManager.cs#L1) | 시작 시 설정 검사·전체 관리자 생성·종료 조정 | CAppStartup → 거의 모든 관리자 |
| [`CRecipeManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Managers/CRecipeManager.cs#L1) | 레시피 목록·선택·저장·변경 이력을 제공 | CMenuRecipe·CStationProcess → CJhmiRecipeFile |
| [`CSettingManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Managers/CSettingManager.cs#L1) | 장비 설정의 읽기·저장·이력 제공 | CMenuSetting·공정 → CSettingFile |
| [`CtrlThread.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Threading/CtrlThread.cs#L1) | 주기적으로 반복 동작하는 작업 스레드 바탕 | CStationProcess·폴링 서비스 |

## 통신 장치

| 파일 | 하는 일 (쉬운 말) | 주된 연결 |
| --- | --- | --- |
| [`CAutomation1Comm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Automation1/CAutomation1Comm.cs#L1) | Aerotech Automation1 SDK에 실제 통신·스크립트 명령 전달 | CInterfaceManager/CComm → SDK |
| [`CComm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/CComm.cs#L1) | 장비 통신의 공통 규약과 종류별 구현 선택 | CInterfaceManager → 각 C*Comm |
| [`CInterfaceManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/CInterfaceManager.cs#L1) | 장비 등록·연결·명령·상태를 한곳에서 관리 | CManager·CAutomationManager·UI → 통신 구현 |
| [`CMelsec.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Melsec/CMelsec.cs#L1) | MELSEC 주소 맵으로 PLC 신호 읽기·쓰기·감시 | CManager·CMenuMonitor → CMelsecNetApi |
| [`CMelsecNetApi.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Melsec/CMelsecNetApi.cs#L1) | MELSEC 전용 네이티브 통신 호출 래퍼 | CMelsec → 외부 API |
| [`CPicoMotor.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/PicoMotor/CPicoMotor.cs#L1) | PicoMotor 명령/응답과 상태 형식 | CPicoMotorService → SDK |
| [`CPicoMotorService.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/PicoMotor/CPicoMotorService.cs#L1) | PicoMotor 연결·제어 서비스 | CInterfaceManager·모니터 화면 |
| [`CBeamExpander.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Serial/CBeamExpander.cs#L1) | 빔 확대기(BET) 시리얼 명령과 상태 | CInterfaceManager → CSerialComm |
| [`CConex_AGP.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Serial/CConex_AGP.cs#L1) | 감쇠기 위치 제어와 상태 | CInterfaceManager → CSerialComm |
| [`CPowerMeter.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Serial/CPowerMeter.cs#L1) | 광 출력 측정기 통신과 상태 | CInterfaceManager → CSerialComm |
| [`CSerialComm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Serial/CSerialComm.cs#L1) | 시리얼 통신 공통 연결·송수신 | 시리얼 장비 구현 → 포트 |
| [`CTalonLaser.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Serial/CTalonLaser.cs#L1) | Talon 레이저 전원·셔터 등 명령/상태 | CInterfaceManager → CSerialComm |
| [`CSocketComm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Socket/CSocketComm.cs#L1) | TCP 클라이언트 송수신 | CInterfaceManager → 네트워크 |
| [`CSocketServerComm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Socket/CSocketServerComm.cs#L1) | TCP 서버로 외부 접속 수신 | CInterfaceManager → 네트워크 |
| [`CVisionComm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Vision/CVisionComm.cs#L1) | Vision 장비용 통신 구현 | CInterfaceManager → CVisionProtocol |
| [`CVisionProtocol.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Interface/Vision/CVisionProtocol.cs#L1) | Vision 요청/응답 메시지 형식 해석 | CVisionComm·CReviewManager |

## 축·IO 제어

| 파일 | 하는 일 (쉬운 말) | 주된 연결 |
| --- | --- | --- |
| [`CA3200Motion.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/A3200/CA3200Motion.cs#L1) | A3200 모션 컨트롤러별 축 명령 구현 | CMotionManager → CInterfaceManager |
| [`CACSComm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/ACS/CACSComm.cs#L1) | ACS 전용 통신 구현 | CInterfaceManager/모션 → ACS SDK |
| [`CACSMotion.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/ACS/CACSMotion.cs#L1) | ACS 축 이동·서보·홈 명령 구현 | CMotionManager → CACSComm |
| [`CAjinMotion.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/AJIN/CAjinMotion.cs#L1) | AJIN 축 명령 구현 | CMotionManager → 통신 계층 |
| [`CMotionController.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/CMotionController.cs#L1) | 모션 컨트롤러 구현 공통 규약·등록 속성 | CMotionManager → 제조사별 Motion |
| [`CMotionManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/CMotionManager.cs#L1) | 축·IO 목록, 이동·정지·상태 및 시뮬레이션 통합 | CManager·CStationProcess·UI → Motion 구현 |
| [`CPmacMotion.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/PMAC/CPmacMotion.cs#L1) | PMAC 축 명령 구현 | CMotionManager → 통신 계층 |
| [`CUmacMotion.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/UMAC/CUmacMotion.cs#L1) | UMAC 축 명령 구현 | CMotionManager → 통신 계층 |
| [`CXpsComm.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/XPS/CXpsComm.cs#L1) | Newport XPS 전용 통신 | CInterfaceManager/모션 → XPS SDK |
| [`CXpsMotion.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Motion/XPS/CXpsMotion.cs#L1) | XPS 축 이동·서보·홈 명령 구현 | CMotionManager → CXpsComm |

## 제품·좌표·가공

| 파일 | 하는 일 (쉬운 말) | 주된 연결 |
| --- | --- | --- |
| [`CProductManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Product/CProductManager.cs#L1) | Glass/제품별 가공·정렬·리뷰 상태와 이력 보관 | CStationProcess·CReviewManager → CProductFile |
| [`CCellPatternCalculator.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CCellPatternCalculator.cs#L1) | Cell 배치·회전·픽셀 간격에서 Shot Group 중심 계산 | CShotCoordinatePlanBuilder·미리보기 |
| [`CRecipeCellPatternCatalog.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CRecipeCellPatternCatalog.cs#L1) | Cell별 패턴 계산 결과를 재사용하기 좋게 모음 | CReviewManager |
| [`CRecipeModelPixelCountReader.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CRecipeModelPixelCountReader.cs#L1) | Cell의 Model 번호와 Model별 픽셀·Pitch·Chess 읽기 | 좌표·마스킹·미리보기 |
| [`CRecipeShotMaskingPlan.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CRecipeShotMaskingPlan.cs#L1) | Chess 제외와 Hole/Corner 빔 가림 판정 | CAutomation1ScriptFile·미리보기 |
| [`CScannerAxisTransform.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CScannerAxisTransform.cs#L1) | Head별 X/Y 교환 및 부호 Flip 적용 | CShotCoordinatePlanBuilder·리뷰 좌표 |
| [`CShotCoordinatePlanBuilder.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L1) | Cell Shot을 Head·Stage·Scanner·Encoder 좌표로 변환 | CStationProcess·CReviewManager·미리보기 |
| [`CStationManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Station/CStationManager.cs#L1) | 공정 시작/중지/상태를 화면에 공개하는 입구 | CMenuMain·CRootView → CStationProcess |
| [`CStationProcess.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Station/CStationProcess.cs#L1) | 자동 가공 단계·스크립트 실행·제품 상태 관리 | CStationManager → 좌표/장비/Product |

## 리뷰

| 파일 | 하는 일 (쉬운 말) | 주된 연결 |
| --- | --- | --- |
| [`CReviewCoordinateTransformer.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewCoordinateTransformer.cs#L1) | 설계·Head·Vision용 리뷰 좌표 변환 | CReviewManager |
| [`CReviewFailureMessageBuilder.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewFailureMessageBuilder.cs#L1) | 리뷰 실패 이유를 화면 메시지로 조합 | CMenuReview |
| [`CReviewManager.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewManager.cs#L1) | 리뷰 계획·이동·측정·판정·결과 저장 순서 | CMenuReview → Vision·결과·Product |
| [`CReviewRulePlanBuilder.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L1) | 화면의 Simple/Rough/Fine/Edge 선택으로 검사 후보 선정 | CMenuReview |
| [`CReviewSampleRuleSelector.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewSampleRuleSelector.cs#L1) | Edge/Center 샘플 Shot 선택 보조 | CMenuReview |
| [`CReviewSettingFileBase.cs`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewSettingFileBase.cs#L1) | 리뷰 프로필과 파일 저장소의 공통 계약 | CMenuReview → CReviewSettingFile |

## 이 프로젝트 파일 자체

[`Drilling.Common.csproj`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Drilling.Common.csproj#L1)은 .NET 대상 프레임워크, 참조 패키지와 외부 장비 SDK 참조를 정의한다. 이는 실행 로직이 아니라 **무엇을 묶어 빌드할지 적은 목록**이다. 통신·축 구현은 여러 제조사 파일이 함께 들어 있지만, 어느 파일을 실제 쓰는지는 `JHMI_INTERFACE.csv`와 `JHMI_MOTOR.csv`의 장비 타입에 달렸다.

## 이 표를 읽는 예

`CMenuMain → CStationManager → CStationProcess → CShotCoordinatePlanBuilder → CAutomation1ScriptFile`이라고 적혀 있으면, 화면 파일이 직접 좌표 공식을 품는 것이 아니라 각 담당자에게 일을 넘긴다는 뜻이다. `CManager`는 보통 시작 시 객체를 조립하므로 공정 중 모든 메서드를 직접 수행하는 것은 아니다.
