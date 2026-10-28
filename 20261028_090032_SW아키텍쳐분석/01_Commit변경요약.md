# 1. Commit 변경 요약과 영향받은 연결

[처음으로](README.md) · [데이터](02_데이터구조와흐름.md) · [위험도](05_위험도별발견사항.md)

## 1-1. 변경량을 읽는 방법

`e6ff3c6fd8fb706adbff3ded070cca2502000b4d` → `223b905daf0d7421c187b727a65d180bfa7472d6`는 Commit 1개이며 2,027파일, 추가 2,503,223줄/삭제 48,559줄입니다. 자동 생성물과 CSV가 대부분이므로 줄 수가 그대로 신규 로직 규모는 아닙니다.

| 분류 | 파일 수 | 이번 분석 처리 |
| --- | ---: | --- |
| 소스(.cs/.xaml/프로젝트) | 171 | diff와 변경된 진입점·소비자·저장경로 추적 |
| Config | 25 | 전체 CSV 키·추가/삭제/수정 및 Offset 통계 계산 |
| Data/Log | 174 | 생성 위치·스키마·샘플로 사용, 성공/실측 증거로 간주하지 않음 |
| bin/obj/.vs 등 | 1,657 | 저장소 유입 사실만 분리; 구현·안전 판정에서 제외 |

분류는 경로 우선입니다. 예를 들어 obj의 .cs는 소스가 아닌 빌드 산출물입니다. 모든 경로와 변경 상태는 [changed-files.csv](changed-files.csv)에 있습니다.

## 1-2. 중요한 변경을 담당 파일로 연결

| 변경 묶음 | 입력·진입 | 담당 책임 | 다음 소비자 |
| --- | --- | --- | --- |
| Stage 요청 분리 | RootView의 요청 서비스 | CStageRequestSequence: 상호 신호·예외·해제 | Station의 DoReady/Process/Review callback |
| MOF 선준비 | DoReady Script 업로드 | CAutomationManager: AUX 0 확인, prepared task RUN, readiness | ProcessABLE 게시 전 준비 판정 |
| Auto Fine | ReviewABLE 순간 Recipe·옵션 캡처 | CAutoFineReviewCoordinator: 계획/결과/저장/보정 | Review COMPLETE와 다음 Recipe load |
| 수동 보정 분리 | Simple/Rough/Fine 각 전용 패널 | 각 방식의 덮어쓰기/누적 정책 | CReviewOffsetFile → 공통 좌표 생성 |
| 0선방어 | Recipe editor | 선택점·기하·시간 검증 | Recipe 저장; 실제 촬영 실행은 미연결 |
| Main 요약 | 공유 수신 cache·실행 snapshot | 대표 Interlock/Sequence 카드 | 작업자 표시·Auto 진입조건 |

근거: [CRootView.StageRequests.cs:8–48](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/CRootView.StageRequests.cs#L8-L48), [CStageRequestSequence.cs:37–95](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStageRequestSequence.cs#L37-L95), [CStationProcess.StageRequests.cs:20–81](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStationProcess.StageRequests.cs#L20-L81), [CAutoFineReviewCoordinator.cs:16–79](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L16-L79).

## 1-3. Stage master 방식의 시작·완료 경계

예전 단일 Auto 흐름과 새 Stage 요청 흐름을 구분해야 합니다. 새 요청 서비스는 시작 시 가공측 출력이 해제됐는지 읽어서 확인하고, 남아 있는 START/COMPLETE를 정상 새 요청으로 받아들이지 않습니다. ABLE 선대기는 허용합니다.

- DoReady: Stage 요청 → 가공측 ABLE → START 확인 → Recipe/Glass 캡처·Script 생성/업로드 → COMPLETE → 상대 COMPLETE → 상호 해제.
- Process: Stage ABLE → Stage 위치/Busy 검증 → AUX 0 → Task 초기화 RUN·같은 RunId 준비 확인 → 가공측 ABLE → Stage START → 가공 → 결과 저장 → COMPLETE → 상호 해제.
- Review: Stage ABLE → 변경되지 않을 계획 캡처 → 가공측 ABLE → START → 검사/결과파일 저장/필요시 보정파일 저장 → COMPLETE → 상호 해제.

일반 순서에서 Review와 다음 DoReady가 동시에 대기하면 Review를 먼저 처리합니다. 앞 기판의 보정 저장을 다음 기판 load보다 먼저 끝내기 위한 순서입니다. Review는 Process 완료에 자동 종속된 내부 한 단계가 아니라 별도 Stage 요청입니다.

신호 쓰기 ACK만으로 끝내지 않습니다. 쓰기 응답 이후 갱신된 cache를 최대 5초 기다려 요청값과 같은지 확인합니다. 일반 handshake 대기는 2분이며 동작별 내부 제한은 별도로 둡니다. 취소·오류 때는 소유한 Task/출력만 정리하며 STOP 확인 실패 시 다음 실행을 막습니다. 근거: [CStageRequestSequence.cs:96–176](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStageRequestSequence.cs#L96-L176), [CStageRequestSequence.cs:218–292](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStageRequestSequence.cs#L218-L292), [CStageRequestSequence.Process.cs:9–72](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStageRequestSequence.Process.cs#L9-L72), [CStageRequestSequence.Review.cs:8–51](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStageRequestSequence.Review.cs#L8-L51).

## 1-4. Task RUN과 가공 START는 같은 뜻이 아님

Process START 전에 Task를 RUN하는 이유는 초기화·중심 이동 후 encoder follow 대기 상태까지 준비하기 위해서입니다. Script가 controller-local `$iglobal[TaskNo−1]`에 현재 RunId를 게시해야 준비완료입니다. 예전 RunId나 이전 실행의 cache로 통과시키지 않습니다. Stage START 때 동일 Task를 두 번째 RUN하는 구조가 아닙니다.

이 global slot은 다른 controller 프로그램과 예약 계약이 필요합니다. RunId가 유일해도 다른 프로그램이 같은 slot을 덮어쓰면 안전한 준비 판정이 되지 않습니다. 근거: [CMofReadiness.cs:5–16](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Automation/CMofReadiness.cs#L5-L16), [CAutomationManager.MofReadiness.cs:10–48](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Automation/CAutomationManager.MofReadiness.cs#L10-L48), [CAutomation1Comm.MofReadiness.cs:16–29](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Interface/Automation1/CAutomation1Comm.MofReadiness.cs#L16-L29), [CStationProcess.StageRequests.cs:83–157](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStationProcess.StageRequests.cs#L83-L157).

## 1-5. 완료 판정과 Product 보고

Task Idle 하나로 가공 성공을 선언하지 않습니다. 일반 Task는 ProgramComplete, buffered Task는 feed 완료·queue empty·미실행 0·실행건수 양수 등 완료조건을 확인합니다. 실제 버퍼 starvation 이력만으로 성공시키던 경계가 강화됐습니다.

새 가공 결과는 Process/Recipe/Glass/Head/controller/Task/simulation/result/완료시각을 저장하고 Product 완료·결과 보고 후 가공 COMPLETE를 게시합니다. Product 데이터 클래스 자체의 형식이 바뀐 것은 아닙니다. Stage Glass/Lot 직접 수신 맵은 TODO가 남아 있어 현재 Product가 없으면 SIM_/DUMMY_ ID를 사용합니다. 근거: [CAutomation1Comm.cs:977–1017](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Interface/Automation1/CAutomation1Comm.cs#L977-L1017), [CStationProcess.StageProcess.cs:15–110](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStationProcess.StageProcess.cs#L15-L110).

## 1-6. 기존 경로를 신규 경로와 혼동하지 않기

기존 `RunReviewStep`/`RunPowerCheckStep`에는 reserved 로그가 남아 있습니다. 그렇다고 이번 새 Auto Review 전체가 로그뿐인 것은 아닙니다. 새 Stage Review callback은 실제 Auto Fine Coordinator에 연결됐습니다. 반대로 새 Review가 연결됐다고 자동 파워보정·보호윈도우 교체·0선방어까지 연결됐다고 확대해서도 안 됩니다. 근거: [CStationProcess.cs:1010–1020](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.Common/Station/CStationProcess.cs#L1010-L1020), [CRootView.StageRequests.cs:19–45](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/223b905daf0d7421c187b727a65d180bfa7472d6/Drilling.UI/CRootView.StageRequests.cs#L19-L45).
