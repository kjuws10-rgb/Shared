# Commit 변경과 호출 관계

## 이번에 추가된 두 Commit

| Commit | 시각 KST | 내용 |
| --- | --- | --- |
| [e92f193f](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/e92f193fdb0f503bad960b6f6292eb4ef5b13e6e) | 11-04 14:18:44 | 로컬 상태 동기화. 실이동·Vision·TPM·맵·UI 변경과 과거 생성/결과 데이터 정리 |
| [a966ebf5](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f) | 11-04 14:36:52 | 확정 가공 Plan으로 0선 첫 Review X 선이동, FAB Align 비트 의존 제거 |

`--no-renames` 기준 427경로, +3,218 / −4,675,305줄입니다. tracked 파일은769→404개입니다. 삭제 대부분은 생성 Script·결과 CSV 등 저장 데이터이며, 이를 4백만 줄 기능 삭제로 해석하면 안 됩니다.

| 영역 | 변경 파일 | 추가 줄 | 삭제 줄 |
| --- | ---: | ---: | ---: |
| Config | 16 | +882 | −20,863 |
| Data | 366 | +0 | −4,652,969 |
| Drilling.Common | 16 | +1,523 | −399 |
| Drilling.File | 4 | +274 | −133 |
| Drilling.UI | 24 | +539 | −941 |
| visiontestclient.zip.jpg | 1 | +0 | −0 |

## 계층별 변화

| 계층 | 바뀐 부분 | 영향받는 호출 |
| --- | --- | --- |
| UI | Manual 이동 소유권과 메뉴 취소, AUTO TPM 구성, Vision pixel 표시 | CRootView→StageRequests / Manual→공통 Stage Session |
| Common 실행 | TPM 공통 실행 추가, Process 단독 Script 재사용, 확정0선 Plan 선이동 | Station→Automation·StageReviewSequences·ReviewManager |
| Common 통신 | Vision capacity, IOF 배열 Count 접근, Map 메타데이터 캐시 | Review→Vision codec / Stage→MELSEC |
| File | TPM CSV·Recipe ATT 저장, 최근 Script 세트 읽기, 기본 맵 확장 | 결과·Recipe·Script·Map 파일 |
| Config | Setting55개·맵526행 추가·알람102개, Recipe ATT8개 값 변경 | 초기 로드·장치 및 실행 계약 |
| 저장 데이터 | Data366개 및 최신 Review Offset1개 삭제 | 복구·최근 결과·최근 Script·최신 보정 선택 |

## 호출 추적의 핵심

**AUTO 진입**은 CRootView가 중재자에 가공·Review·TPM actions를 전달하는 흐름입니다. 수동 이동이 접수되었거나 공통 Stage 소유권이 남아 있으면 AUTO/START를 차단합니다. [소유권 검사 640–670](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.UI/CRootView.cs#L640-L670) · [TPM actions 연결 2748–2762](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.UI/CRootView.cs#L2748-L2762).

**실제 이동**은 각 기능이 PLC를 따로 쓰는 구조로 추가하지 않고 공통 Session을 통과하도록 확장됐습니다. 다만 공통화가 모든 신호 의존 문제를 해결했다는 뜻은 아닙니다. [공통 Move 415–526](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStageReviewSequences.cs#L415-L526) · [DoReady 입력 검사 5161–5175](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L5161-L5175).

**실패 알람**은 가장 안쪽 Action/신호 이름을 CSequenceFailureException으로 유지하고 manager가 알람 정의에 연결합니다. 수동 STOP 취소와 timeout을 분리하는 코드가 추가됐습니다. [알람 정의 조회 224–233](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Alarm/CAlarmManager.cs#L224-L233) · [실패 정보 전파 612–661](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Alarm/CAlarmManager.cs#L612-L661).

**표시 변경**은 Monitor의 시나리오별 Stage/Process 신호 카드 제거, IOF 개별 행 표시·읽기 확인, Vision의 서버 열림/실제 client 접속 상태 구분입니다. 전체 수신값 및 동작 시퀀스가 삭제된 것은 아닙니다. [Monitor 읽기 2892–2905](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2892-L2905) · [접속 표시 모델 2890–2910](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Interface/CInterfaceManager.cs#L2890-L2910).

## 변경되지 않은 기반

CCellPatternCalculator, CShotCoordinatePlanBuilder, CReviewRulePlanBuilder, CZeroDefenceRecipePlan, JHMI_RCP, Product·ReviewResult·ReviewOffset serializer에는 이번 범위의 diff가 없습니다. Cell/Model/Shot/Beam 좌표식·Head 배정·Masking·Sampling Rule을 새로 구현한 변경으로 평가하지 않았습니다. 실행경로 및 입력/보정 파일 변화는 기반 코드가 같아도 실제 결과를 바꿀 수 있습니다.
