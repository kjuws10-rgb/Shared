# 가공과 Review에 미치는 영향

## 직접 영향과 간접 영향

| 소비자 | 영향 | 달라지지 않은 조건 |
| --- | --- | --- |
| Monitor MELSEC | 직접 영향: 활성 화면100ms 표시, 툴팁 진단 | 화면 전체/다른 메뉴 주기와 제어 동작 |
| Stage Request | 간접 영향: 공통 캐시에 새 값이 들어오는 시점 | 기존 신호·ACK·Timeout·유효성 판정 |
| Stage Ready 확인 | 간접 영향: Y현재값·Busy의 수신 간격 | 실제 Online 모드의 설정 목표·±0.03mm·Busy=0·유효 캐시 조건 |
| Manual Align 상태 | 간접 영향: 공통 캐시 상태가 반영되는 시점 | Align 요청 의미·완료 판정 |
| 상대 이동의 fresh read | 간접 영향: 수집 스케줄과 큐 대기 | 새 샘플을 기다리는 조건·범위 검사 |
| Align LastLoad | 간접 영향: 직접 ReadDouble 요청 대기 | 단위/부호·선택 Key·동일 Glass 계약은 별도 |
| Vision 측정·Review 결과 | SDK·저장 형식의 직접 변경 없음 | 실제 Review 이동 미연결과 기존 결과/보정 검수 |

Stage Request는 같은 Map·캐시 snapshot을 읽어 연결 상태와 값 유효성을 판단합니다. Stage Ready도 같은 snapshot을 읽으며 실제 이동 명령을 만들지 않습니다. 따라서 수집 시점의 개선은 공정 대기에 영향을 줄 수 있지만, 잘못된 주소·짧은 신호 유지·외부 Timeout 계약을 자동 수정하지 않습니다. [Stage 요청](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Station/CStationProcess.StageRequests.cs#L14-L27), [Ready](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Station/CStageReadyPositionCheck.cs#L19-L63).

MELSEC Simulation은 별도로 Ready OK를 반환하는 우회가 있습니다. 이를 실제 Online 모드의 위치·Busy 검사를 통과한 것으로 해석하지 않습니다.

## 수신과 표시를 구분하는 시간 흐름

~~~mermaid
sequenceDiagram
    participant P as PLC 또는 보드
    participant W as 공통 MELSEC worker
    participant C as 공통 캐시와 진단 메모리
    participant M as 활성 Monitor
    participant F as 공정 또는 Review 소비자
    P->>W: 같은 Map의 값 응답
    W->>C: 블록 단위 값과 UpdatedAt 게시
    C-->>M: 자기 호출의 캐시 projection
    C-->>M: 별도 로컬 블록 진단 조회 결과
    M->>M: 기존 행에 적용하고 Binding 알림
    C-->>F: 기존 소비자의 캐시 조회
    Note over M,F: Monitor 타이머가 공정이나 촬영을 실행하는 것은 아님
    Note over P,C: PC 수신 시각은 PLC 값 생성 시각과 다름
~~~

## 정상·실패·중단에서의 영향

| 상황 | 현행 동작과 검토 결과 |
| --- | --- |
| 정상 빠른 I/O | 여러 due 블록을 한 Run에서 수집해 worker 대기 누적을 줄임 |
| 한 호출이 느림 | SDK 동기 호출이 끝나야 다음 단계로 갈 수 있음. 묶음 제한만으로 해결되지 않음 |
| Write 응답을 기다림 | 다음 확인 전 선두 일반 Read를 처리하되 오래 걸리면 확인 시각이 늦어질 수 있음 |
| 앞에 제어 요청 존재 | 일반 큐의 Write/Open/Close를 뒤 Read가 추월하지 않음. 추가 Poll은 대기 요청에 양보 |
| 통신 실패·오프라인 | 기존 Error/Offline·실패 backoff·유효성 판단 유지 |
| 오래된 값 | 기존 Stale 판정은 유지. 새 진단이 오래된 값을 정상으로 바꾸지 않음 |
| Stop | 다음 Poll 사이에서 Stop을 확인. 이미 진행 중인 native 호출을 강제 취소하는 보장은 없음 |
| 메뉴 이탈·종료 | 다른 메뉴에는 fast 표시 적용 안 함. 종료 시 타이머 해제 |
| 입력 중 주기 갱신 | Read/State/진단만 변경하고 Write draft·행 참조는 유지 |

## 기존 Review·보정의 경계는 그대로입니다

실제 Stage Y/Review X 이동은 Review DeviceModes에서 아직 미연결로 차단됩니다. 이번 Commit이 새 PLC 이동 주소나 도착·Trigger 연계를 추가하지 않았기 때문입니다. Vision의 실제 통신 가능 여부와 Stage 이동의 Simulation 여부는 별개입니다. [실기 이동 경계](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Review/CReviewManager.DeviceModes.cs#L21-L26).

0선방어의 점·시간 계획과 실제 실행 Coordinator도 구분해야 합니다. Stage Ready 경로는 0선 사용 설정이 있으면 아직 연결되지 않았다는 예외를 내므로, 수행하지 않은 검사를 COMPLETE로 보고하는 구조로 바뀌지 않았습니다. [실행 차단](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Station/CStationProcess.StageRequests.cs#L28-L48).

Align LastLoad는 현재도 이미 존재하는 값을 읽는 수동 Load이며, 새 Vision 측정·기판별 Lagrange 계산을 시작하지 않습니다. Base−Load 보간·Shot별 저장·가공 시 방향 변환은 변경되지 않았습니다. Map의 LastLoad20항목도 여전히 USE=0/UNASSIGNED입니다. [Load](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/Menu/Menus/CAlignLastLoadService.cs#L14-L95), [맵](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Config/JHMI_MELSEC_MAP.csv#L84-L103).

이전 분석의 보정 누적 상한·측정 Revision·Simulation 출처 승인·가상축 공유 Stop 등의 확인사항은 이번 Commit에서 해결됐다고 처리하지 않았습니다. 이번 실행은 그 항목의 재현 시험을 반복한 것도 아닙니다.

## 현장에서 구별할 네 가지 원인

1. PLC/보드 값 자체가 늦게 바뀌는지: PLC 측 같은 주소·승인된 카운터와 비교합니다.
2. PC 수신이 늦는지: 블록 성공 간격과 처리 소요를 확인합니다.
3. 표시 모델 적용이 늦는지: 캐시 수집 시각과 UI 적용 시각을 비교합니다.
4. 실제 그리기가 늦는지: WPF Dispatcher/paint를 따로 계측합니다.

PC의 빠른 수신만으로 1번을 판정할 수 없고, UI 적용 시각만으로 4번을 판정할 수도 없습니다. 서로 다른 장치 시계를 비교할 때는 시계 동기화 또는 동일 기준 계측이 필요합니다.
