# Commit 변경과 호출 관계

## 변경 범위

새 Commit은 PR7의 squash 1개입니다. 이전 개발 브랜치 head16e5574e와 병합 Commit99d78ddf는 전체 Git tree가 같지만, 이번 검증은 새 Clone의99d78ddf에서 다시 실행했습니다.

| 파일 | 추가 / 삭제 | 담당 변화 |
| --- | --- | --- |
| CMelsec.Polling.cs | 75 / 6 | 제한된 블록 묶음 수집, 블록 진단 record·시각·기간 |
| CMelsec.cs | 49 / 3 | Run 연결, Readback 대기 중 선두 Read, 추가 Poll 양보 조건 |
| CRootView.MelsecMonitor.cs | 51 / 0 | 활성 MELSEC 전용 100ms 표시 타이머 |
| CRootView.cs | 2 / 0 | 타이머 시작·종료 연결 |
| CMenuMonitor.cs | 94 / 8 | 캐시 직접 표시, 행·편집 보존, 시간·툴팁 속성 |
| CMonitorStatusPollingService.cs | 6 / 2 | 이번 호출이 만든 MELSEC projection을 직접 반환 |
| CMonitorView.xaml | 1 / 6 | 기존 설명에 확장 진단을 추가한 툴팁 |
| docs/MelsecDataFreshness.md | 72 / 0 | 지연 구분과 점검 안내 |
| tests 아래 7개 | 1,081 / 0 | 드라이버·UI 회귀 콘솔, 설명, 생성물 제외 규칙 |

실제 경로와 줄 수는 [changed-files.csv](changed-files.csv)를 기준으로 합니다. Config·Data·Drilling.File·Recipe/Review/Station/Vision/Product/Correction 계산 소스는 이번 diff에서 변경되지 않았습니다.

## 드라이버의 변경된 순서

~~~mermaid
flowchart TD
    A["CMelsec Run"] --> B{"진행 중 Write가 있는가"}
    B -->|있음| C["Write 상태 단계 진행"]
    C --> D{"다음 Readback 확인 전 대기인가"}
    D -->|예| E["요청 큐 선두가 Read일 때만 1개 처리"]
    D -->|아니오| H["주기 캐시 수집 기회"]
    E --> H
    B -->|없음| F["일반 요청 1개 처리 또는 Write 활성화"]
    F --> H
    H --> I["첫 Poll 기회 후 추가 Poll을 판단"]
    I --> J["최대 4블록 8ms 경과 대기 요청 Stop 확인"]
    J --> K["같은 worker에서 다음 Run"]
~~~

한 블록씩 Run을 끝내고 스레드 대기를 반복하던 경로를 줄였습니다. 블록을 임의의 큰 주소 구간으로 합치거나 여러 SDK 스레드로 병렬 호출하는 변경은 아닙니다. 기존 Map 기반 묶음·스케일·실패 후 device backoff·캐시 유효성은 유지합니다. [Run](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Interface/Melsec/CMelsec.cs#L275-L306), [수집 묶음](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Interface/Melsec/CMelsec.Polling.cs#L261-L277), [기존 worker](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Threading/CtrlThread.cs#L241-L277).

중요한 제한이 있습니다. 첫 Poll 기회에는 추가 묶음용 양보 검사를 하지 않으므로, 제어 요청이 있다고 모든 Poll을 0회로 만드는 구조가 아닙니다. 그 뒤의 추가 읽기만 시간·큐·Write 상태를 보고 양보합니다. [양보 조건](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Interface/Melsec/CMelsec.cs#L1402-L1425).

## 일반 Read가 Write 응답 대기와 함께 동작

현재 Write가 다음 Readback 시각을 기다릴 때, 일반 요청 큐의 맨 앞이 ReadBit/ReadWord/ReadDouble/ReadString이면 하나만 실행합니다. 앞에 Write·Open·Close가 있으면 뒤 Read를 꺼내지 않습니다. [선두 Read 선택](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.Common/Interface/Melsec/CMelsec.cs#L890-L900).

일반 Read도 동기 SDK 호출입니다. 이것이 오래 걸리면 예정된 Readback 시각을 넘을 수 있고 그 뒤의 Poll도 추가될 수 있습니다. 따라서 “모든 Write가 먼저 끝난다” 또는 “응답 대기시간이 고정된다”라고 설명하면 안 됩니다. 일반 요청 큐를 Write 큐보다 먼저 처리하는 기존 순서도 그대로입니다.

## 화면의 변경된 순서

| 구간 | 이전 | 현재 |
| --- | --- | --- |
| 공통 수집 | MELSEC worker → 공통 캐시 | 같은 경로, 스케줄만 개선 |
| 중간 표시 자료 | 250ms service의 공유 snapshot | 유지되지만 활성 fast path는 자기 호출 결과를 직접 사용 |
| Root 표시 | 1초 tick에서 Monitor 2초 제한 | 기존 주기는 유지, MELSEC에 별도100ms 타이머 추가 |
| fast path | 없음 | 활성 Monitor·MELSEC 확인 → 캐시 projection → 진단 → 기존 행 갱신 |
| WPF 표시 | Binding → 렌더링 | 같은 방식, 새 시간 속성 Changed 이벤트 추가 |

새 타이머는 ViewModel 표시만 갱신합니다. 장치 Read/Write, 파일 로드, Recipe 계산, 화면 전체 재생성을 하지 않습니다. 종료 시 타이머를 멈추고 이벤트를 해제합니다. [전용 타이머](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/CRootView.MelsecMonitor.cs#L1-L51), [종료 연결](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/CRootView.cs#L100-L106), [시작 연결](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/CRootView.cs#L1847-L1901).

100ms와 기존 2초 경로가 모두 활성 MELSEC 표시 함수를 사용하며, 함수는 이번 호출의 projection을 직접 받습니다. 중간 공유 snapshot을 다시 읽어 최신 화면을 이전 값으로 덮어쓰던 창을 제거했습니다. 공유 snapshot 저장 순서 자체의 세대 보장까지 새로 추가한 것은 아닙니다. [직접 반환](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/Menu/Menus/CMonitorStatusPollingService.cs#L60-L65), [화면 적용](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L1834-L1881).

## 편집과 Binding

기존 MelsecRows의 행 인스턴스를 유지하면서 ReadValue·State·시각·설명만 갱신합니다. 입력 중 WriteValue를 주기 갱신이 덮어쓰지 않습니다. 메뉴·그룹을 새로 만드는 경우는 기존의 입력값 저장·복원 경로를 사용합니다. [행 갱신](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L5231-L5251).

CBindingBase의 property별 Changed 이벤트 방식에 맞춰 새 시간 속성의 이벤트를 추가했습니다. XAML은 읽기·쓰기 행에 확장 툴팁을 연결합니다. WRITE 전용·비활성 항목은 주기 수신 대상이 아니라고 구분합니다. [속성과 이벤트](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L6092-L6146), [XAML](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.UI/Views/CMonitorView.xaml#L10-L26).
