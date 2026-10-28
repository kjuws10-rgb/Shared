# 3. 가공·Review·UI 영향과 실행 경계

[처음으로](README.md) · [흐름 그림](04_통합흐름도.md) · [위험·검수](05_위험도별발견사항.md)

## 3-1. 가공 준비부터 결과 저장까지

| 단계 | 확인하는 것 | 실패하면 | 구현 경계 |
| --- | --- | --- | --- |
| 요청 시작 | 현재 신호 유효·연결, 이전 START/COMPLETE 해제 | 새 실행 거부 | 실제 cache/쓰기 확인 코드 |
| DoReady | 선택 Recipe·Head·Script 생성/업로드 | COMPLETE 불가·정리 | 장치별 simulation/online 경로 구분 |
| Stage 준비 | Y시작위치±0.03mm, Busy=0 | ProcessABLE 미게시 | Simulation에서는 위치·Busy·목표값 확인 전에 Ready OK를 반환 |
| Encoder 기준 | AUX값0, 필요시 새 version으로0확인 | timeout/오류 | 실제 SDK zero와 fresh snapshot |
| MOF 선준비 | 실행별 RunId와 global 준비표시 일치 | START 수신 전 준비 실패 | Task slot 예약 현장 계약 필요 |
| 가공 | 모든 Head의 program/queue 완료, stop/error/offline 감시 | 실패·정지·정리 | 실제 Task 상태 소비 |
| 결과 | ProcessResult 저장·Product 보고 | COMPLETE 미게시 | Simulation 결과는 SIMULATION으로 구분 |
| 상호 해제 | 상대 COMPLETE 및 ABLE/START/COMPLETE OFF | timeout·재시작 차단 가능 | 출력/Task 소유권 추적 |

정상 완료 시 이미 끝난 Task에 불필요한 STOP을 보내지 않고 소유권을 해제합니다. 비정상 STOP은 ACK만이 아니라 상태 확인까지 기다립니다. 근거: [CStageReadyPositionCheck.cs:9–64](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStageReadyPositionCheck.cs#L9-L64), [CAutomationManager.AuxiliaryFeedback.cs:18–104](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Automation/CAutomationManager.AuxiliaryFeedback.cs#L18-L104), [CStationProcess.StageProcess.cs:15–110](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStationProcess.StageProcess.cs#L15-L110).

## 3-2. Fine/Auto Review의 상세 동작

Auto 계획은 ReviewABLE 때 Recipe·Setting·Glass·운전옵션을 한 번 고정합니다. 현재 Beam은11 고정이며 검사줄은1/3/5/7, 방법은PtoP/Flying, 재시도 한도는1~3입니다. Mask/Chess/Head미배정은 제외하고 Model별 Cell수가 많은 순→Model번호→DesignY 순으로 라인을 구성합니다. 같은 Model/DesignY를 묶어 좌우 왕복 검사합니다. 근거: [CAutoFineReviewPlan.cs:8–80](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CAutoFineReviewPlan.cs#L8-L80).

### PtoP

각 점의 Stage/Review 목표 이동 → 도착 확인 →250ms 안정화 → 단일 측정 → frozen ShotKey에 결과 연결입니다. ImmediateRetry ON이면 NG점을 같은 위치에서 다시 측정합니다. Auto+실Vision이면 최초 KeepAlive를 수행합니다. 근거: [CReviewManager.FineCorrection.cs:120–157](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.FineCorrection.cs#L120-L157).

### Flying/IOF

라인 시작점 이동 →1001 Ready → 대상 Trigger 목록 준비 → 라인 끝점 이동 →1002 MoveDone →정상 ACK일 때1003 결과입니다. 여기의 Trigger 목록/축 이동은 **가상 Stage 버퍼**입니다. 실제 MELSEC 업로드 연결과 구분해야 합니다.

1002 NCK이면 방향을 뒤집어 끝점에서 재촬영하고 그 실패회차의1003은 요청하지 않습니다. Count NCK와 NG 즉시재시도는 같은 총 예산을 사용합니다. Auto+ImmediateRetry OFF는 현재라인1003 수신과 다음라인 시작 이동을 겹치되 다음 촬영 전 둘 다 끝났는지 확인합니다. 근거: [CReviewManager.FineCorrection.cs:160–262](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.FineCorrection.cs#L160-L262).

### 검증·Stop·저장

중복ShotKey/비유한 목표/음수공차/과도한 패킷수/한 Flying라인의 StageY차이>0.0005mm를 거부합니다. 가상 도착 허용오차0.0005mm·30초 timeout·20ms poll을 사용합니다. Stop/실패해도 측정된/미검사 대상을 종료 CSV에 남기며 저장 실패는 별도 ResultSaveError로 보존합니다. Auto는 결과 저장을 확인하지 못하면 정상 COMPLETE/보정으로 진행하지 않습니다. 근거: [CReviewManager.FineCorrection.cs:275–386](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.FineCorrection.cs#L275-L386), [CReviewManager.DeviceModes.cs:22–64](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.DeviceModes.cs#L22-L64).

**실제 이동은 아직 미연결입니다.** Fine/Rough는 MELSEC 비시뮬레이션 상태에서 이동형 검사를 시작 전에 명시적으로 차단합니다. 이는 실패를 숨기는 코드가 아니라 미구현 경로의 안전한 거부입니다. Vision 실제 통신은 별도 설정이라 가상 Stage+실Vision 조합은 가능합니다. 근거: [CReviewManager.FineCorrection.cs:45–78](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.FineCorrection.cs#L45-L78), [CReviewManager.RoughCorrection.cs:28–33](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.RoughCorrection.cs#L28-L33).

## 3-3. Vision 결과 해석과 통신 계약

새 보정용 Fine/Rough/OneShot은 TargetMark−Hole을 사용합니다. 기존 일반 Review/Beam의 Hole−Target과 부호가 반대입니다. 새 CSV 열 이름은 방향을 명시했으므로 서로 다른 결과파일을 같은 부호로 합치면 안 됩니다. 근거: [CReviewManager.RoughCorrection.cs:151–165](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.RoughCorrection.cs#L151-L165), [CReviewManager.cs:2422–2429](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.cs#L2422-L2429), [CReviewManager.cs:2601–2608](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CReviewManager.cs#L2601-L2608).

수신 double은 mm로 직접 사용합니다. Resolution 양수 검증은 있지만 pixel/정수 단위 환산으로 쓰지 않습니다. 실제 Vision의 단위·좌우반전·ErrorCode 표를 확인해야 합니다. 1002의 nonzero error는 Count NCK로 전달되므로 장치오류까지 동일 재촬영으로 취급해도 되는지 확인 대상입니다. 최대 mark수는1MiB/36byte구조 기준29,126개이며 본문길이/Count를 검사합니다. 근거: [CVisionProtocol.cs:61–68](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Interface/Vision/CVisionProtocol.cs#L61-L68), [CVisionProtocol.cs:298–338](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Interface/Vision/CVisionProtocol.cs#L298-L338), [CVisionComm.cs:325–329](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Interface/Vision/CVisionComm.cs#L325-L329), [CVisionComm.cs:473–476](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Interface/Vision/CVisionComm.cs#L473-L476).

## 3-4. 0선방어는 계획 검증과 실행을 따로 판정

신규 Recipe 화면은 Head별 Cell/Shot/Beam을 선택하고 가공가능·Beam경계·등속구간·가공완료이후촬영·Head간 ReviewX이동시간·노출/안정화/여유·frame주기를 검사합니다. Stage stroke2420mm, accel147.1mm/s², 안정화50ms, 여유20ms,20fps,노출10µs가 모델 기본값입니다. 실제 장비 수치와 대조가 필요합니다.

현재 이 계산기의 소비자는 Recipe UI입니다. 첫 촬영 전 ReviewX 초기 접근시간과 일부 Head만 사용하는 정책은 별도 검증이 남았습니다. 새 0선 선택값이 하나라도 있으면 Recipe 저장 검증에서 H01~H08 전체 지정을 요구합니다. 선택값이 전혀 없는 Recipe는 저장을 허용합니다. 근거: [CZeroDefenceRecipePlan.cs:15–98](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CZeroDefenceRecipePlan.cs#L15-L98), [CZeroDefenceTiming.cs:36–94](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CZeroDefenceTiming.cs#L36-L94), [CRecipeZeroDefencePanel.cs:95–170](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CRecipeZeroDefencePanel.cs#L95-L170).

Station은 구 ZERO_DEFENCE_REVIEW_POINT>0이면 coordinator 미연결 예외를 발생시킵니다. 현재 동봉Recipe의 구 키는0이므로 그 이유로 모두 막힌다고 할 수는 없습니다. 반대로 새 ZERO_DEFENCE_POINT_COUNT=2나 Main0선ON만으로 촬영이 실행되는 것도 아닙니다. 근거: [CStationProcess.StageRequests.cs:24–34](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStationProcess.StageRequests.cs#L24-L34).

## 3-5. Main·Manual 화면과 Interlock

Main의 DoReady/Process/Review/TPM/ProcessMove/IOF 카드는 공유 신호/실행 snapshot을 보여줍니다. 카드가 있다는 사실은 해당 Sequence가 전부 실행 연결됐다는 증거가 아닙니다. 대표 Device/Head Interlock을 집계하고 refresh 실패 때 이전 OK를 그대로 남기지 않고 READFAIL로 표시하는 점은 개선입니다. 근거: [CMainSequenceStatus.cs:110–180](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CMainSequenceStatus.cs#L110-L180), [CMainInterlockGroups.cs:7–35](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CMainInterlockGroups.cs#L7-L35), [CMainInterlockSnapshot.cs:13–33](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CMainInterlockSnapshot.cs#L13-L33).

RunOption7개 중 Method/Line/Retry/ImmediateRetry4개가 실제 AutoReview 입력에 전달됩니다. ZeroDefence/CurrentGroup/FollowUp3개는 저장·표시·범위clamp 이외의 실행 소비를 찾지 못했습니다. Review4개는 ReviewABLE중 잠기지만 나머지3개는 같지 않습니다. 근거: [CRunOptionSettings.cs:7–46](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Managers/CRunOptionSettings.cs#L7-L46), [CMainRunOptionPanel.cs:57–86](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CMainRunOptionPanel.cs#L57-L86), [CMainRunOptionPanel.cs:125–141](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CMainRunOptionPanel.cs#L125-L141), [CRootView.StageRequests.cs:19–35](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/CRootView.StageRequests.cs#L19-L35).

DOE/Optic 검사결과는 단순 표시가 아니라 CanAutoRun 준비조건에도 들어갑니다. DOE는 목표·Tolerance·snapshot5초freshness를 확인하고 ATT는2초freshness/정지·inposition/목표차0.01°를 검사합니다. 등록되지 않은 Optic은 생략되는 정책이며0.01은 하드코딩입니다. 기존 io=[] 경로는 Door/EMS 등 HW규칙이 생략될 수 있으므로 Main Safety 요약을 HW안전 검증완료로 해석하면 안 됩니다. 근거: [CDoeZInterlock.cs:11–54](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/InterLock/CDoeZInterlock.cs#L11-L54), [COpticInterlock.cs:20–70](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/InterLock/COpticInterlock.cs#L20-L70), [CStationProcess.cs:1172–1202](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStationProcess.cs#L1172-L1202).

Manual MOF는 선택Head·공통Station실행·STOP fencing에 연결됩니다. 반면 Stage Ready/Jog는 Simulation 전용이고 PowerMeasure도 SimulationSession입니다. Manual Align은 실제 request1/0쓰기에 연결됐지만 완료후자동OFF·timeout·이번 실행edge대응은 아직 없습니다. 근거: [CManualMofStagePanel.Commands.cs:31–101](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CManualMofStagePanel.Commands.cs#L31-L101), [CManualPowerMeasurePanel.cs:137–167](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CManualPowerMeasurePanel.cs#L137-L167), [CManualMofAlignPanel.cs:77–139](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/Menu/Menus/CManualMofAlignPanel.cs#L77-L139).

## 3-6. 이번 변경으로 완료 판정을 바꾸면 안 되는 항목

- 실장비 Review 이동·Trigger/BufferReady 및 실기 공차 검증.
- 0선방어 촬영 실행, 현재그룹 자동진행, 후속1줄 옵션 실행.
- 실제 파워미터 자동보정·TPM·보호윈도우 교체.
- Host/RMS 레시피 유효성 handshake와 Auto Job Change 전체 승인.
- Product/Glass/ReviewOffset revision의 영속 추적과 양산 승인.

이들은 관련 UI/키/카드가 존재하더라도 이번 diff와 선별 시험만으로 완료라고 올리지 않습니다.
