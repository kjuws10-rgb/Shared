# A3 LD 0선방어·파워보정 조작절차서

## 실제 MELSEC 연결판

## 1. 실제 연결판의 적용 범위

적용 기준과 실행 선행조건 / 2026-11-03 확인한 main `8872e4ed5176b5d8a39f1711af9501f6fac94deb`의 화면·소스 기준 절차안입니다. 11/02 별도 검증 Clone의 Release 빌드는 Common.Log/CLogManager 누락으로 오류 19개·경고 0개였으며 이번에는 재빌드하지 않았습니다. 이 문제를 복구하고 같은 버전의 검증된 실행본을 확보한 뒤 평가에 사용하세요. 본 작업은 앱·PLC·Vision·실축·레이저를 실행한 시험 성적서가 아닙니다.

| 구분 | 실제 연결판 | Simulator판 |
| --- | --- | --- |
| MELSEC 장치 SIMUL | OFF(저장값0) = 실제 MELSEC 통신 | ON(저장값1) = 내부 Stage 모형·가상 신호 |
| Vision 장치 SIMUL | 0 = 실 Ethernet. 카메라 없는 가상 촬영/1003은 외부 Vision이 제공 | 기본 1 = 내부 합성 정상값. 실제 TCP 시험은 하지 않음 |
| Stage Y / Review X | MELSEC에서 받은 실 엔코더/Busy 캐시 | 내부 이동 모형의 가상 위치·속도 |
| 0선 전체 Cycle | 현재 코드에서는 지원 안 됨. Process 준비에서 차단 | 코드상 실행 경로 있음. 아래 수동 요청으로 진행 |
| Manual PowerMeasure | 가상 측정 고정. 실제 MELSEC이어도 바뀌지 않음 | 동일한 가상 측정·목표 탐색 |
| AUTO 파워보정 / TPM | 현재 POWER_CHECK는 상태 조회·reserved 단계 | 통합 실측·보정·TPM 합격을 검증하는 경로가 아님 |

현재 전체 0선 실행을 진행하지 마세요. 실제 MELSEC에서는 “0선 촬영 구간 완료 신호가 미정”으로 Process 준비가 차단됩니다. 다만 차단 이전의 첫 Review X 선대기는 실축 이동 요청이 가능하므로, 연결 확인만 할 때는 0선 OFF·동작 허가 없음·승인된 정지 상태를 유지합니다. “차단되므로 어떤 축도 안 움직인다”는 뜻이 아닙니다.

실 MELSEC 연결SIMUL=0 / 실 엔코더

→

수신·화면 확인0선 OFF / 읽기 확인

→

0선 본 실행현재 지원 안 됨

## 2. 연결 준비와 읽기 확인

1. 정지 상태와 시험용 파일 위치를 확인한다MODE를 MANUAL로 두고 동작·예약·미해제 요청이 없는지 확인합니다. 생산용과 분리된 시험 Config·Recipe·Data·Offset 복사본을 사용합니다. SIM도 결과 파일·Run Option·정상완료 가공매수를 저장할 수 있습니다.

2. 실제로 사용 중인 ConfigRoot를 확인한다시작 로그의 ConfigRoot를 기록합니다. 실행파일 상위에서 Drilling.sln을 찾으면 그 저장소의 Config를, 찾지 못하면 현재 작업 디렉터리의 Config를 사용하므로 exe 옆 Config라고 단정하지 않습니다.

3. SETTING → INTERFACE에서 장치별 SIMUL을 지정한다DEVICE·NUMBER를 먼저 맞춘 뒤 SIMUL 콤보의 ON(저장값1)/OFF(저장값0)을 확인합니다. MELSEC·WONIK_VISION·AUTOMATION1·Laser·ATT·PowerMeter 등은 각각 독립 설정입니다. 적용 범위 판별표를 기준으로 해당 구성만 선택합니다.

4. SAVE 후 저장 완료·현재 통신 상태를 재확인한다SAVE는 JHMI_INTERFACE.csv 저장·검증·InterfaceManager 재로딩까지 수행합니다. 운전 중 전환하지 않습니다. REAL 행은 현장 승인 채널/주소 확인 후 CONNECT, SIM 행은 CONNECT/DISCONNECT 대상이 아닙니다.

5. 스크립트 전용 옵션을 통신 모드와 구별한다SETTING → COMMON → SCRIPT → AUTOMATION1_SIMULATOR_USE는 별개입니다. 이 옵션 ON만으로 실제 축·MELSEC·레이저가 모두 가상으로 바뀌지 않습니다. 오프라인 시험은 장치별 SIMUL도 전부 1인지 확인합니다.

| 대상 | 실제 연결판에서 확인할 내용 |
| --- | --- |
| MELSEC | SIMUL=0. 승인된 보드/채널/Map 사용. 저장소 샘플 통신 인자를 그대로 현장값으로 쓰지 않음 |
| Vision | SIMUL=0. 가공SW가 SOCKET_S 서버, 외부 Vision이 접속. 접속 성공과 가상 촬영/1003 발생 준비를 별도로 확인 |
| 카메라 없음 | Trigger를 받았다고 판단하고 랜덤 1003을 만드는 기능은 외부 Vision 담당. 가공SW 내부 SIM과 다름 |
| Stage/Review | 승인된 읽기 화면에서 엔코더·Busy·허가·갱신 여부를 상대 PC 표시와 시각을 맞춰 대조. 가상 값을 실입력으로 대체하지 않음 |
| 다른 장치 | MELSEC REAL만으로 Scanner/ATT/Laser/PowerMeter도 REAL이 되는 것은 아님. 시험별 장치 모드표를 별도 기록 |

읽기 확인을 위해 AUTO+0선 ON, WFAB4/허가 강제 입력, 실축 이동을 만들지 않습니다. 실제 이동 시험은 별도 안전 승인·Stage 담당 협의 대상으로 남깁니다.

## 3. 실제 0선: 현재 가능한 준비와 멈춰야 할 경계

1. Recipe 검사점 준비는 오프라인 시험 복사본에서 수행Simulator판 3절의 SELECT → 0선방어 → 그룹/Cell/Shot/Beam → 전체 8Head 유효 → SAVE 순서를 참고합니다. 실제 연결 상태에서는 Main 0선을 ON하거나 요청을 만들어 실행하지 않습니다.

2. Process 준비의 현재 제한을 확인현 코드는 Stage Process ABLE 요청을 받은 뒤 PRC ABLE을 응답하기 전에 0선 Prepare를 수행하며 여기서 REAL MELSEC를 차단합니다. 실 엔코더나 Vision 통신이 정상이더라도 해결되지 않습니다.

3. 현 버전에서 차단이 관찰되면 기록하고 중단기준 SHA·Recipe/Group·현재 Step·원문 오류·상대 요청/출력 상태를 남깁니다. SIMUL 전환, 가상 구간 SET, encoder 대체로 우회하지 않습니다. 이 문서는 오류 재현을 위해 실제 동작을 시작하라고 요구하지 않습니다.

4. 정식 연결 구현·검증 후 실제 Cycle 평가를 재개구간별 완료/Index 계약, IOF 좌표 배열, Buffer·PEG·Trigger 소유권, 무카메라 Vision 1003 순서/Point 귀속, Stop/Timeout/복구 계약 확정이 선행입니다. 이후 실제 Cycle 조작절차를 별도 승인해야 합니다.

기대 Vision 흐름은 최초 1900 1회 → 각 점 1001 → 해당 촬영구간 완료 → 1002 → ACK일 때 1003입니다. 현재 REAL MELSEC 전체 0선이 이 흐름을 끝까지 수행한다는 의미는 아닙니다. 0선 결과 저장과 Review Offset 적용도 같은 동작이 아닙니다.

## 4. 실제 연결에서도 사용할 수 있는 가상 파워 조작

이 절의 PowerMeasure는 두 MELSEC 모드 모두 가상입니다. 화면의 Target/Measured/Diff는 현재 코드상 W, ATT는 °, 시간은 ms입니다. 예를 들어 1.2 W는 1200 mW와 같은 크기지만 1200을 W 칸에 입력하면 안 됩니다. 아래 숫자는 코드 기본값 설명이며 실장비 권장 출력·각도가 아닙니다.

MANUAL → SCANNER → PowerMeasure · 소스 기반 화면 위치 안내

Head Select: H01 … H08PowerMeasureTolerance Mode: FINEPowerMeterTarget (W)Settle / Count / IntervalState / Measured / Diff / ATTGRAPH VIEW ↔ GRID VIEWSTARTSTOP

실제 실행 캡처가 아닌 XAML·버튼 연결을 근거로 재구성한 안내도입니다.

1. MANUAL → SCANNER에서 Head Select로 대상 선택Head별 선택 또는 ALL·홀수·짝수·CLEAR를 사용합니다. 현재 사용 가능한 선택 Head만 행에 표시되며 측정 중에는 선택 변경이 막힙니다.

2. PowerMeasure 탭을 선택하고 Head별 PowerMeter를 지정등록된 센서 하나면 최초 자동 선택될 수 있습니다. 여러 개면 각 행에서 지정합니다. 등록 확인이지 센서 Online·실측 준비 완료 판정이 아닙니다. 같은 센서에 연결된 Head는 순차 측정하며 상단 Queue를 확인합니다.

3. Tolerance Mode와 Head별 입력값을 설정ROUGH/FINE/DETAIL을 고릅니다. 숫자 칸 클릭 또는 Enter/Space로 입력창을 열어 Target(W), Settle Time(ms), Measure Count, Interval(ms)을 지정합니다. 일반 칸 직접 타이핑이나 Step 선택 기능으로 설명하지 않습니다.

4. START → 가상 측정 확인문을 읽고 승인“실제 센서 이동과 레이저 출력은 실행하지 않습니다”를 확인합니다. 이 측정을 위해 레이저 ON·실 센서 삽입·실 Stage 이동을 추가하지 않습니다. 실행 중 입력/모드 편집은 비활성입니다.

5. State·Measured·Diff·ATT와 Attempt 이력을 확인Stage Avoid → Head 준비 → ATT 탐색·측정 → Finish 순서가 가상으로 진행됩니다. Attempt는 자동 탐색 반복 번호이고 Measure Count는 한 Attempt에서 평균낼 샘플 수입니다. GRAPH VIEW/GRID VIEW는 표시 전환입니다.

6. Head마다 OK와 PowerTable 업데이트 완료를 각각 확인“n/n Heads 완료”에는 NG·ERROR·STOPPED도 포함됩니다. 각 행의 최종 State와 상세 메시지를 봅니다. 저장 실패 경고/ERROR가 있으면 성공으로 처리하지 않습니다.

7. 시험 저장 파일을 확인한다`<ConfigRoot>/PowerTable/Simulation/HEAD01.csv` … HEAD08.csv의 Attenuator_deg,Power_W를 확인합니다. 성공·Finish 완료·미취소 조건에서 마지막 가상 측정 W를 자동 저장하며 별도 SAVE는 없습니다. NG·STOP·측정/정리 오류는 정상 업데이트 대상이 아닙니다.

8. 중단은 측정 영역 STOP, 재시작은 종료 확인 후 STARTSTOPPING/실행 종료와 중단 대상 Head의 상태를 확인합니다. 이미 완료된 OK/NG Head는 유지될 수 있습니다. 원인을 해결하고 입력·대상을 재확인한 뒤 새 배치로 시작합니다. 별도 PowerMeasure RESET은 없으며 상단 RESET SEQUENCE를 측정 복구용으로 누르지 않습니다.

| 항목 | 코드 기본값/기준 | START 검증 범위·의미 |
| --- | --- | --- |
| Target | 1.2000 W | 유한한 실수, 0 초과 |
| Settle Time | 300 ms | 정수 0~60000 |
| Measure Count | 1 | 정수 1~1000 / Attempt당 샘플 수 |
| Interval | 100 ms | 정수 0~60000 |
| ROUGH | ±0.0500 W | 최대 8 Attempt |
| FINE(기본) | ±0.0100 W | 최대 12 Attempt |
| DETAIL | ±0.0030 W | 최대 18 Attempt |

Stage Avoid가상 400ms

→

Head 준비가상 150ms

→

ATT·측정가상각도·합성 W 반복

→

OK + FinishSimulation 표만 자동저장

Stage Avoid COMPLETE나 Head OK는 실 Stage 회피/실 파워 보정의 증거가 아닙니다. 최초 Simulation 파일이 없으면 시작각도 계산에 원본 PowerTable을 참고할 수 있지만 쓰기는 Simulation에만 합니다. 시험표를 실제 보정표로 복사하지 마세요. 입력 조건을 바꾸어 이전 결과가 화면에서 비어도 저장 파일 삭제나 Reset을 뜻하지 않습니다.

| 우측 Stage/Review 영역 | MELSEC REAL | MELSEC Simulator |
| --- | --- | --- |
| 위치·속도 | 실 MELSEC 공유 캐시. ERR/—·툴팁 원인 확인 | 공유 이동 모형의 가상 값 |
| ABS/REL/JOG | 현재 이 패널은 실축 이동 연결 대기·비활성 | 측정 중 아님·모델 미예약·조건 만족 시 가상 이동 |
| Stage STOP | 이 패널을 실축 비상정지 수단으로 쓰지 않음 | 로컬 가상 이동 모형 정지. 측정 STOP과 별개 |

RESET SEQUENCE 주의: Controller Reset → Axis Enable/Home → DIO ON → Recipe DOE Z 이동 기능입니다. 단순 파워 측정 결과 초기화가 아니며 실제 장치 동작이 될 수 있습니다. 이 절차에는 사용하지 않습니다.

## 5. 별도 실 센서 읽기와 미완성 자동보정 경계

1. 실 센서 읽기가 필요한 경우에만 MONITOR → LASER/POWERMETERManual 모드에서 우측 PowerMeter Device Command를 찾고 POWER METER 드롭다운에서 승인된 센서를 선택합니다. PowerMeter 자체의 SIMUL=0·장치 배치/광로/안전 준비가 별도 확인된 경우에만 실제 센서 진단으로 취급합니다.

2. GET MODEL / GET SERIAL / GET POWER로 장치 응답을 확인선택 센서의 값·단위·상태 메시지를 기록합니다. 이 버튼은 센서 삽입·레이저 ON·Stage 회피를 수행하지 않습니다. 실제 출력 발생은 이 절차 범위 밖이며, 통신 성공이 파워 정확도 검교정 합격을 뜻하지 않습니다.

3. 목표파워 자동 보정 완료로 기록하지 않는다Monitor 내부 ATT 목표 탐색 함수는 있으나 현 공개 UI에 정상 START/Target 조작 경로가 연결되지 않았습니다. 숨은 명령을 호출하지 않습니다. AUTO POWER_CHECK 역시 캐시 상태 조회·reserved 로그 수준으로 TPM 통합 완료가 아닙니다.

실 파워 보정의 정식 절차에는 Stage 회피·센서 위치·광로/출사 안전·새 측정값·ATT 한계·출사 정리·TPM 완료 거래 연결과 현장 검수가 먼저 필요합니다. 본 가상 절차서를 실측 보정 승인서로 사용할 수 없습니다.

## 6. 종료·기록 체크

노출이 확인된 AUTO 종료 경로는 상단 MODE → MANUAL → 확인입니다. StopAsync 확인 실패나 모드 전환 차단이 보이면 강행하지 말고 현재 동작/상대 상태를 점검합니다. 이는 장비 비상정지를 대체하지 않습니다. 팝업 CLOSE·결과 닫기·INIT은 정지가 아닙니다.

- [ ] 실행본 버전·ConfigRoot·MELSEC/Vision/광학 장치별 REAL/SIM을 기록했다.
- [ ] 연결/실 엔코더 수신 확인과 가상 결과를 구분했다.
- [ ] 실제 0선 전체 실행은 현 버전 미지원으로 남겼고 SIM으로 우회하지 않았다.
- [ ] PowerMeasure 결과는 가상·Simulation 파일로만 기록했다.
- [ ] 실 센서 GET POWER를 목표파워 자동보정/TPM 합격으로 기록하지 않았다.
- [ ] 요청·출력·Step·오류·정지 확인과 남은 구현 항목을 평가 기록에 남겼다.

체크는 문서를 읽으며 표시하는 용도이며 앱/장치 상태와 연결되거나 파일에 저장되지 않습니다.

## 7. 검증 범위와 소스 근거

3역할로 0선·파워·모드 경계를 독립 조사하고 주 담당이 UI 바인딩·핵심 가드를 대조했습니다. 파일/줄 범위는 아래 SHA의 실제 파일 길이와 대조했습니다. 절차서 레이아웃 검수는 장비 동작 검수가 아닙니다.

1. [설정 화면·저장](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L318-L431) / Drilling.UI/Menu/Menus/CMenuSetting.cs · 318–431

2. [장치별 SIMUL 정의](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Config/JHMI_INTERFACE.csv#L1-L17) / Config/JHMI_INTERFACE.csv · 1–17

3. [ConfigRoot 결정](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/CAppStartup.cs#L121-L135) / Drilling.UI/CAppStartup.cs · 121–135

4. [0선 Recipe 화면](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CRecipeZeroDefenceView.xaml#L16-L127) / Drilling.UI/Views/CRecipeZeroDefenceView.xaml · 16–127

5. [Recipe 선택·저장](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1047-L1078) / Drilling.UI/Menu/Menus/CMenuRecipe.cs · 1047–1078

6. [검사점 지정·전체 검증](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L4247-L4605) / Drilling.UI/Menu/Menus/CMenuRecipe.cs · 4247–4605

7. [Main Run Option](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CMainRunOptionView.xaml#L18-L40) / Drilling.UI/Views/CMainRunOptionView.xaml · 18–40

8. [MODE 전환·Stop 확인](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/CRootView.cs#L577-L635) / Drilling.UI/CRootView.cs · 577–635

9. [Simulator 입력 화면](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml#L16-L101) / Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml · 16–101

10. [Simulator 입력 제한](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L54-L160) / Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs · 54–160

11. [DoReady 신호 순서](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L4819-L4868) / Drilling.Common/Station/CStationProcess.cs · 4819–4868

12. [Process 신호 순서](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5131-L5212) / Drilling.Common/Station/CStationProcess.cs · 5131–5212

13. [실제 첫 Review X 선대기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5472-L5561) / Drilling.Common/Station/CStationProcess.cs · 5472–5561

14. [실제 0선 실행 제한](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5621-L5647) / Drilling.Common/Station/CStationProcess.cs · 5621–5647

15. [0선 측정·lateReady](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5651-L5712) / Drilling.Common/Station/CStationProcess.cs · 5651–5712

16. [0선 후속 요청·그룹 진행](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5755-L5791) / Drilling.Common/Station/CStationProcess.cs · 5755–5791

17. [SDC 이동](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStageReviewSequences.cs#L356-L429) / Drilling.Common/Station/CStageReviewSequences.cs · 356–429

18. [IOF 배열·가상 구간 완료](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStageReviewSequences.cs#L513-L628) / Drilling.Common/Station/CStageReviewSequences.cs · 513–628

19. [Vision point cycle](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Review/CReviewManager.cs#L3065-L3118) / Drilling.Common/Review/CReviewManager.cs · 3065–3118

20. [0선 결과 파일](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.File/ReviewResult/CReviewResultFile.cs#L701-L733) / Drilling.File/ReviewResult/CReviewResultFile.cs · 701–733

21. [PowerMeasure 입력·START/STOP](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CManualPowerMeasurePanel.cs#L24-L215) / Drilling.UI/Menu/Menus/CManualPowerMeasurePanel.cs · 24–215

22. [숫자 칸 입력 방식](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CManualPowerMeasureView.xaml.cs#L14-L44) / Drilling.UI/Views/CManualPowerMeasureView.xaml.cs · 14–44

23. [PowerMeasure 화면·단위](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CManualPowerMeasureView.xaml#L129-L258) / Drilling.UI/Views/CManualPowerMeasureView.xaml · 129–258

24. [가상 측정 서비스](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Interface/CPowerMeasureService.cs#L286-L321) / Drilling.Common/Interface/CPowerMeasureService.cs · 286–321

25. [가상 테이블 고정 연결](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6255-L6278) / Drilling.UI/Menu/Menus/CMenuManual.cs · 6255–6278

26. [PowerMeasure Stage 제한](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CManualPowerStagePanel.cs#L29-L165) / Drilling.UI/Menu/Menus/CManualPowerStagePanel.cs · 29–165

27. [PowerTable 경로](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.File/PowerTable/CPowerTableFile.cs#L19-L37) / Drilling.File/PowerTable/CPowerTableFile.cs · 19–37

28. [실측 테이블과 데모 안내](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Config/PowerTable/README.txt#L1-L34) / Config/PowerTable/README.txt · 1–34

29. [Monitor 센서 읽기 UI](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CMonitorView.xaml#L1389-L1467) / Drilling.UI/Views/CMonitorView.xaml · 1389–1467

30. [Monitor 공개 메뉴](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L80-L99) / Drilling.UI/Menu/Menus/CMenuMonitor.cs · 80–99

31. [AUTO 파워 reserved](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L1126-L1130) / Drilling.Common/Station/CStationProcess.cs · 1126–1130

32. [MELSEC 신호 맵](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Config/JHMI_MELSEC_MAP.csv#L5-L58) / Config/JHMI_MELSEC_MAP.csv · 5–58

33. [RESET SEQUENCE의 실제 역할](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2264-L2305) / Drilling.UI/Menu/Menus/CMenuManual.cs · 2264–2305

---

## MELSEC Simulator판

## 1. Simulator판의 적용 범위

적용 기준과 실행 선행조건 / 2026-11-03 확인한 main `8872e4ed5176b5d8a39f1711af9501f6fac94deb`의 화면·소스 기준 절차안입니다. 11/02 별도 검증 Clone의 Release 빌드는 Common.Log/CLogManager 누락으로 오류 19개·경고 0개였으며 이번에는 재빌드하지 않았습니다. 이 문제를 복구하고 같은 버전의 검증된 실행본을 확보한 뒤 평가에 사용하세요. 본 작업은 앱·PLC·Vision·실축·레이저를 실행한 시험 성적서가 아닙니다.

| 구분 | 실제 연결판 | Simulator판 |
| --- | --- | --- |
| MELSEC 장치 SIMUL | OFF(저장값0) = 실제 MELSEC 통신 | ON(저장값1) = 내부 Stage 모형·가상 신호 |
| Vision 장치 SIMUL | 0 = 실 Ethernet. 카메라 없는 가상 촬영/1003은 외부 Vision이 제공 | 기본 1 = 내부 합성 정상값. 실제 TCP 시험은 하지 않음 |
| Stage Y / Review X | MELSEC에서 받은 실 엔코더/Busy 캐시 | 내부 이동 모형의 가상 위치·속도 |
| 0선 전체 Cycle | 현재 코드에서는 지원 안 됨. Process 준비에서 차단 | 코드상 실행 경로 있음. 아래 수동 요청으로 진행 |
| Manual PowerMeasure | 가상 측정 고정. 실제 MELSEC이어도 바뀌지 않음 | 동일한 가상 측정·목표 탐색 |
| AUTO 파워보정 / TPM | 현재 POWER_CHECK는 상태 조회·reserved 단계 | 통합 실측·보정·TPM 합격을 검증하는 경로가 아님 |

완전 오프라인 시험 구성: MELSEC·Vision·Automation1·Laser·ATT·PowerMeter 등 사용 장치 각각 SIMUL=1을 확인합니다. MELSEC만 SIM이고 다른 장치가 REAL인 구성은 이 판의 무장치 시험과 다릅니다. 장치/생산 파일을 분리하고 광학·실축 동작을 시험 목적으로 우회하지 않습니다.

시험 Config·Recipe전 장치 SIM 확인

→

0선 Cycle가상 Stage·Vision

→

가상 PowerMeasure목표 탐색·시험표 저장

→

평가 기록실측/안전 PASS와 분리

## 2. 공통 준비와 모드 설정

1. 정지 상태와 시험용 파일 위치를 확인한다MODE를 MANUAL로 두고 동작·예약·미해제 요청이 없는지 확인합니다. 생산용과 분리된 시험 Config·Recipe·Data·Offset 복사본을 사용합니다. SIM도 결과 파일·Run Option·정상완료 가공매수를 저장할 수 있습니다.

2. 실제로 사용 중인 ConfigRoot를 확인한다시작 로그의 ConfigRoot를 기록합니다. 실행파일 상위에서 Drilling.sln을 찾으면 그 저장소의 Config를, 찾지 못하면 현재 작업 디렉터리의 Config를 사용하므로 exe 옆 Config라고 단정하지 않습니다.

3. SETTING → INTERFACE에서 장치별 SIMUL을 지정한다DEVICE·NUMBER를 먼저 맞춘 뒤 SIMUL 콤보의 ON(저장값1)/OFF(저장값0)을 확인합니다. MELSEC·WONIK_VISION·AUTOMATION1·Laser·ATT·PowerMeter 등은 각각 독립 설정입니다. 적용 범위 판별표를 기준으로 해당 구성만 선택합니다.

4. SAVE 후 저장 완료·현재 통신 상태를 재확인한다SAVE는 JHMI_INTERFACE.csv 저장·검증·InterfaceManager 재로딩까지 수행합니다. 운전 중 전환하지 않습니다. REAL 행은 현장 승인 채널/주소 확인 후 CONNECT, SIM 행은 CONNECT/DISCONNECT 대상이 아닙니다.

5. 스크립트 전용 옵션을 통신 모드와 구별한다SETTING → COMMON → SCRIPT → AUTOMATION1_SIMULATOR_USE는 별개입니다. 이 옵션 ON만으로 실제 축·MELSEC·레이저가 모두 가상으로 바뀌지 않습니다. 오프라인 시험은 장치별 SIMUL도 전부 1인지 확인합니다.

저장소 JHMI_INTERFACE.csv의 현재 장치들은 SIMUL=1 예제이며 현장 설정 승인값이 아닙니다. 실제 로드된 Stage 시작위치·속도·Flip·8Head 사용 여부를 화면에서 확인하고 기록하세요. 과거 샘플 숫자를 그대로 물리 설정값으로 사용하지 않습니다.

## 3. Recipe 검사점과 Main 옵션 설정

RECIPE → 0선방어 · 선택 순서 안내

SELECT → 2 또는 4 → GROUP → CELL → SHOT → BEAM → SAVE

실행 화면 캡처가 아닌 소스 기반 위치/순서 안내도. HEAD 표는 직접 선택 버튼이 아닙니다.

1. RECIPE 목록에서 시험 Recipe를 SELECT한다현재 선택된 Recipe만 편집할 수 있습니다. 선택 전후 Recipe ID를 기록합니다. 0선용 APPLY 버튼이 있다고 가정하지 않습니다.

2. 0선방어에서 한 글래스당 검사 개수 2 또는 4를 선택한다2개: H1·H2 / H3·H4 / H5·H6 / H7·H8의 4그룹. 4개: H1~H4 / H5~H8의 2그룹입니다. 한 번에 8점을 찍는 설정이 아닙니다.

3. 그룹 카드 → Cell → Shot → Beam 순서로 지정한다Shot 선택으로 담당 Head가 결정됩니다. 오른쪽 HEAD 표는 조회 전용입니다. MASKING·CHESS·타이밍 부적합 후보는 툴팁/상태에서 제외 사유를 확인하고 억지로 선택하지 않습니다.

4. 모든 그룹을 돌아 전체 8Head를 유효하게 채운다각 Head에 Cell·Shot·Beam 한 점씩 지정합니다. ALL 카드는 전체 조회용입니다. 전체 8개 Head의 MCC 이동·촬영 조건 유효 상태와 활성 Head 사용 조건을 확인합니다. 비활성 Head를 단순히 건너뛰는 시험은 현 경로와 다릅니다.

5. RECIPE의 SAVE를 누르고 저장 완료를 확인한다Beam 클릭만으로 저장 완료가 아닙니다. SAVE 시 전체 지정·타이밍을 재검증합니다. 선택 그룹 초기화는 검사점 초안을 지우는 편집이며, Main INIT이나 정지 버튼이 아닙니다.

### MAIN Run Option

1. MAIN → Run Option에서 0선방어 ON실행 전에 설정합니다. 클릭 시 즉시 Setting에 저장되며 별도 APPLY는 없습니다. REAL 연결 확인판에서는 이 단계를 실행하지 말고 OFF를 유지합니다.

2. 현재그룹 / 전체그룹을 확인하고 필요 시 INITINIT은 현재그룹을 1로 저장합니다. 진행 중 작업을 멈추거나 Recipe 검사점을 지우지 않습니다. 첫 그룹부터 평가할 때 정지 상태에서만 사용합니다.

3. 후속 1줄검사 ON/OFF를 기록처음 정상 흐름만 볼 때는 시험 계획에 따라 OFF/ON을 정하고 기록합니다. 최종 NG와 현재 옵션으로 후속 요청을 게시하며, 0선 결과 자체가 보정 Offset을 자동 저장하는 것은 아닙니다.

N=2/4는 Recipe의 ZERO_DEFENCE_POINT_COUNT입니다. PROCESS의 예전 ZERO_DEFENCE_REVIEW_POINT, Main Review의 1/3/5/7줄 옵션과 혼용하지 않습니다.

## 4. 정상 1 Cycle: 자동 응답 ON

1. 왼쪽 하단 Melsec Simulator를 연다해당 MELSEC Device가 SIM인지 확인합니다. Process Move / IOF Stage 자동 응답을 ON으로 선택합니다. 활성 세션 중에는 변경할 수 없습니다. 이 옵션은 DoReady/Process/Review 상위 요청을 생성하지 않습니다.

2. 초기 입력을 정리한다DoReady·Process·Review의 START/COMPLETE를 OFF로 둡니다. 이번에 시험하지 않는 Review ABLE도 OFF로 둡니다. 이전 PRC 출력과 요청 해제가 끝나지 않았으면 새 Cycle을 시작하지 않습니다.

3. 상단 MODE를 클릭하여 AUTO로 전환한다AUTO 전환 확인 메시지를 읽고 승인한 뒤 interlock 검사 통과·Stage 요청 대기 상태를 확인합니다. 차단 이유를 해결하지 않고 강제 통과하지 않습니다. AUTO는 MAIN START를 누르는 구조가 아닙니다.

4. 첫 Review X 선대기 허가를 준다Simulator의 Stg_ReviewAbleSDC(WC124) ON, Stage Review Control Mode X(WC122) ON을 설정합니다. MCC Busy Word(bit1 Align), WFAB4의 Raw 칸에 2를 넣고 SET합니다.

5. 선대기 DONE 후 ALIGN BUSY를 해제한다MAIN Process Move에서 “0선 첫 Review X 선대기·SDC 복귀 완료”/DONE을 기다린 뒤 WFAB4 Raw 0 → SET합니다. 2→0을 너무 빨리 바꾸지 않습니다. 다음 Cycle도 OFF 관찰 후 새 2 입력이 필요합니다.

### 4-A. DoReady 요청은 사용자가 직접 입력

| 단계 | Simulator Stage 입력 조작 | MAIN에서 볼 PRC 응답/상태 |
| --- | --- | --- |
| D0 | START(WC104)·COMPLETE(WC106) OFF | 이전 요청 해제 / WAIT_REQUEST |
| D1 | Stg DoReady ABLE(WC102) ON | Prc DoReady ABLE(W8200) ON |
| D2 | 위 응답 확인 후 Stg DoReady START(WC104) ON | Prc START(W8202) ON → 좌표 준비·스크립트 업로드 |
| D3 | Prc COMPLETE가 켜질 때까지 기다림 | Prc DoReady COMPLETE(W8204) ON. 아직 Task RUN 단계 아님 |
| D4 | Stg DoReady COMPLETE(WC106) ON | PRC COMPLETE·START·ABLE 모두 OFF 확인 |
| D5 | Stage COMPLETE OFF → START OFF → ABLE OFF | WAIT_PROCESS. 다음 Process 요청 허용 |

### 4-B. Process 요청도 직접 입력

| 단계 | Simulator Stage 입력 조작 | MAIN에서 볼 PRC 응답/상태 |
| --- | --- | --- |
| P0 | START(WC10C)·COMPLETE(WC10E) OFF | 잔류 요청 없음 |
| P1 | Stg Process ABLE(WC10A) ON | Ready 위치 확인 → 0선/IOF/Vision 준비 → 피드백 초기화 → Task RUN |
| P2 | Prc ABLE 응답을 기다림 | Prc Process ABLE(W8208) ON. 준비 실패면 START를 올리지 않음 |
| P3 | Stg Process START(WC10C) ON | Prc START(W820A) ON → 가상 가공·0선 측정 |
| P4 | 결과 처리와 PRC COMPLETE를 기다림 | 0선 파일·후속 요청·가공 결과 처리 후 W820C ON |
| P5 | Stg Process COMPLETE(WC10E) ON | PRC Process 3출력 OFF 확인 |
| P6 | Stage COMPLETE OFF → START OFF → ABLE OFF | 소유권 해제·다음 DoReady 요청 대기 |

응답을 확인한 뒤 다음 입력을 주세요. Stage ABLE·START를 처음부터 같이 ON하지 않습니다. ON/OFF는 Simulator의 해당 Stage 입력 행 버튼이며 일반 메모리에 raw=1을 쓰라는 뜻이 아닙니다. 이 맵의 논리1은 raw10000이며 WFAB4 bit1만 Raw2입니다. Task RUN은 Process START 뒤가 아니라 PRC Process ABLE 이전에 준비됩니다.

자동 ON에서는 가상 Stage Y 주행·Review X 도착을 따라 촬영구간 수가 증가하므로 수동 segment SET을 하지 않습니다. Vision SIM은 약80ms 후 허용오차의20% 합성 편차를 사용하며 랜덤/실 Ethernet/실 Trigger 시험이 아닙니다. 시간 관계상 Vision 준비 전에 구간이 지나면 SIM에서도 NG가 가능하므로 자동 ON=무조건 전체 OK 보장은 아닙니다.

## 5. 단계별 확인: 자동 응답 OFF

이 절은 고급 Simulator 시험입니다. 4절 자동 ON 절차와 섞지 마세요. OFF는 상대 자동 응답을 끄는 것이며 전역 PAUSE/정지가 아닙니다. 구간수만 수동 진행할 때도 상위 요청과 SDC·IOF 준비 응답은 모두 맞춰야 합니다.

1. 새 Cycle 전, 공통 Stage 세션이 없는 상태에서 자동 응답을 OFF전역 일시정지가 아닙니다. 상위 DoReady/Process 요청은 아래와 같이 직접 변경하며, SDC와 IOF 상대 응답도 직접 입력해야 합니다.

2. 선대기 SDC 응답을 직접 진행한다초기 WC128 OFF → WC124/WC122 ON → WFAB4 Raw2 SET. PRC MoveStart W8029 ON과 가상 X 도착을 확인한 뒤 WC128 ON → PRC GeneralRunning W8021 ON 확인 → WC128 OFF → W8021 OFF·선대기 DONE 확인 → WFAB4 Raw0 SET합니다. 자동 응답 OFF여도 이 일반 Move의 가상 X는 움직입니다.

3. DoReady 표 D0~D5를 수행한다자동 응답 ON 때와 같은 상위 요청 순서입니다. 이어 Process ABLE만 ON하고, 다음 IOF 준비 응답을 기다립니다.

4. IOF 준비의 상대 응답을 직접 준다WC138/WC13A/WC13C를 처음에는 OFF. W8238 ON 확인 → WC138 ON(ReadComplete) → WC13A ON(BufferRunComplete) → WC13C ON(IOF Complete). W823A ON 확인 후 WC13C OFF → W8238/W823A OFF 확인. 첫 Vision Ready까지 끝나야 PRC Process ABLE이 켜집니다.

5. Process START 후 첫 촬영 대기 상태를 확인한다Process 표 P2/P3 이후 MAIN의 “0선 1/N … 촬영 구간 완료 대기”를 확인합니다. 이때만 Simulator의 0선 촬영구간 완료(수동 시뮬)에 1 입력 → SET합니다.

6. 다음 점 준비를 보고 2 → SET, 필요 시 3·4 → SET매 점마다 다음 촬영 구간 완료 대기 표시를 보고 누적 수를 하나씩 올립니다. 처음부터 N을 입력하면 Vision READY 전에 구간 통과로 NG가 될 수 있습니다. 0~N 정수이며 이미 올린 수는 줄일 수 없습니다. 구간 대기는 최대 2분입니다.

7. 결과 처리 후 Process COMPLETE/해제 순서를 마친다표 P4~P6으로 복귀합니다. 자동 OFF의 0선은 가상 Y 자동 주행 없이 수동 완료 수를 기다리므로 엔코더·이동정밀도 평가로 기록하지 않습니다.

## 6. 결과·후속 요청·실 Ethernet 선택 시험

1. MAIN Process의 0선 결과 / 후속 요청 카드를 클릭Group·Recipe·Glass와 Head/Cell/Shot/Beam, State, RecvX/Y, FlipConvertX/Y, RESULT/사유를 대조합니다. 다른 준비 카드를 실행 버튼처럼 누르는 절차가 아닙니다. 결과창 닫기는 검사를 중단하지 않습니다.

2. 결과 파일의 상태와 SIM 표식을 확인`<ConfigRoot의 부모>`/Data/ZeroDefence/YYYYMMDD/ZeroDefence_시간_RunId.csv를 확인합니다. StageSimulation/VisionSimulation, 대상, 원시 Target/Hole, Recv/Converted, 허용오차/Flip을 대조합니다. 중단 부분결과도 저장될 수 있으므로 파일 존재만으로 정상 DONE이 아닙니다.

3. 후속 요청과 다음 그룹을 확인최종 NG가 있고 후속 1줄검사 ON이면 W8218=논리1(raw10000), 그 외0입니다. 결과 저장·게시 이후 그룹이 순환합니다. 이것은 후속검사 요청이며 즉시 Offset 보정 저장이나 TPM Complete가 아닙니다.

4. 0선 자체의 보정 범위를 구별0선은 결과·판정·후속 요청을 남깁니다. 가공좌표에 원하는 보정이 적용되는 평가는 별도 Review/보정 시퀀스와 저장값·후속 가공좌표 대조가 필요합니다.

최초 1900Vision REAL일 때 1회

→

점 i: 1001해당 점 준비

→

구간 i 완료SIM 자동 또는 수동 SET

→

1002 → 1003ACK일 때 결과 요청

→

다음 점 i+1N점까지 반복

선택 시험: MELSEC SIM + Vision REAL / 실 Ethernet 경로를 평가하려면 정지 상태에서 Vision SIMUL=0으로 저장하고 승인된 외부 Vision 클라이언트를 연결합니다. 내부 SIM과 달리 외부에서 무카메라 Grab 수신 판정·1003 정상/Spec-Out/Count 오류/무응답을 제공해야 합니다. 가공SW에 랜덤 결과 범위·NG 주입 버튼이 있다고 가정하지 않습니다. 이 혼합 시험은 실제 MELSEC/실 엔코더 평가가 아닙니다.

## 7. 가상 파워보정 조작

이 절의 PowerMeasure는 두 MELSEC 모드 모두 가상입니다. 화면의 Target/Measured/Diff는 현재 코드상 W, ATT는 °, 시간은 ms입니다. 예를 들어 1.2 W는 1200 mW와 같은 크기지만 1200을 W 칸에 입력하면 안 됩니다. 아래 숫자는 코드 기본값 설명이며 실장비 권장 출력·각도가 아닙니다.

MANUAL → SCANNER → PowerMeasure · 소스 기반 화면 위치 안내

Head Select: H01 … H08PowerMeasureTolerance Mode: FINEPowerMeterTarget (W)Settle / Count / IntervalState / Measured / Diff / ATTGRAPH VIEW ↔ GRID VIEWSTARTSTOP

실제 실행 캡처가 아닌 XAML·버튼 연결을 근거로 재구성한 안내도입니다.

1. MANUAL → SCANNER에서 Head Select로 대상 선택Head별 선택 또는 ALL·홀수·짝수·CLEAR를 사용합니다. 현재 사용 가능한 선택 Head만 행에 표시되며 측정 중에는 선택 변경이 막힙니다.

2. PowerMeasure 탭을 선택하고 Head별 PowerMeter를 지정등록된 센서 하나면 최초 자동 선택될 수 있습니다. 여러 개면 각 행에서 지정합니다. 등록 확인이지 센서 Online·실측 준비 완료 판정이 아닙니다. 같은 센서에 연결된 Head는 순차 측정하며 상단 Queue를 확인합니다.

3. Tolerance Mode와 Head별 입력값을 설정ROUGH/FINE/DETAIL을 고릅니다. 숫자 칸 클릭 또는 Enter/Space로 입력창을 열어 Target(W), Settle Time(ms), Measure Count, Interval(ms)을 지정합니다. 일반 칸 직접 타이핑이나 Step 선택 기능으로 설명하지 않습니다.

4. START → 가상 측정 확인문을 읽고 승인“실제 센서 이동과 레이저 출력은 실행하지 않습니다”를 확인합니다. 이 측정을 위해 레이저 ON·실 센서 삽입·실 Stage 이동을 추가하지 않습니다. 실행 중 입력/모드 편집은 비활성입니다.

5. State·Measured·Diff·ATT와 Attempt 이력을 확인Stage Avoid → Head 준비 → ATT 탐색·측정 → Finish 순서가 가상으로 진행됩니다. Attempt는 자동 탐색 반복 번호이고 Measure Count는 한 Attempt에서 평균낼 샘플 수입니다. GRAPH VIEW/GRID VIEW는 표시 전환입니다.

6. Head마다 OK와 PowerTable 업데이트 완료를 각각 확인“n/n Heads 완료”에는 NG·ERROR·STOPPED도 포함됩니다. 각 행의 최종 State와 상세 메시지를 봅니다. 저장 실패 경고/ERROR가 있으면 성공으로 처리하지 않습니다.

7. 시험 저장 파일을 확인한다`<ConfigRoot>/PowerTable/Simulation/HEAD01.csv` … HEAD08.csv의 Attenuator_deg,Power_W를 확인합니다. 성공·Finish 완료·미취소 조건에서 마지막 가상 측정 W를 자동 저장하며 별도 SAVE는 없습니다. NG·STOP·측정/정리 오류는 정상 업데이트 대상이 아닙니다.

8. 중단은 측정 영역 STOP, 재시작은 종료 확인 후 STARTSTOPPING/실행 종료와 중단 대상 Head의 상태를 확인합니다. 이미 완료된 OK/NG Head는 유지될 수 있습니다. 원인을 해결하고 입력·대상을 재확인한 뒤 새 배치로 시작합니다. 별도 PowerMeasure RESET은 없으며 상단 RESET SEQUENCE를 측정 복구용으로 누르지 않습니다.

| 항목 | 코드 기본값/기준 | START 검증 범위·의미 |
| --- | --- | --- |
| Target | 1.2000 W | 유한한 실수, 0 초과 |
| Settle Time | 300 ms | 정수 0~60000 |
| Measure Count | 1 | 정수 1~1000 / Attempt당 샘플 수 |
| Interval | 100 ms | 정수 0~60000 |
| ROUGH | ±0.0500 W | 최대 8 Attempt |
| FINE(기본) | ±0.0100 W | 최대 12 Attempt |
| DETAIL | ±0.0030 W | 최대 18 Attempt |

Stage Avoid가상 400ms

→

Head 준비가상 150ms

→

ATT·측정가상각도·합성 W 반복

→

OK + FinishSimulation 표만 자동저장

Stage Avoid COMPLETE나 Head OK는 실 Stage 회피/실 파워 보정의 증거가 아닙니다. 최초 Simulation 파일이 없으면 시작각도 계산에 원본 PowerTable을 참고할 수 있지만 쓰기는 Simulation에만 합니다. 시험표를 실제 보정표로 복사하지 마세요. 입력 조건을 바꾸어 이전 결과가 화면에서 비어도 저장 파일 삭제나 Reset을 뜻하지 않습니다.

| 우측 Stage/Review 영역 | MELSEC REAL | MELSEC Simulator |
| --- | --- | --- |
| 위치·속도 | 실 MELSEC 공유 캐시. ERR/—·툴팁 원인 확인 | 공유 이동 모형의 가상 값 |
| ABS/REL/JOG | 현재 이 패널은 실축 이동 연결 대기·비활성 | 측정 중 아님·모델 미예약·조건 만족 시 가상 이동 |
| Stage STOP | 이 패널을 실축 비상정지 수단으로 쓰지 않음 | 로컬 가상 이동 모형 정지. 측정 STOP과 별개 |

RESET SEQUENCE 주의: Controller Reset → Axis Enable/Home → DIO ON → Recipe DOE Z 이동 기능입니다. 단순 파워 측정 결과 초기화가 아니며 실제 장치 동작이 될 수 있습니다. 이 절차에는 사용하지 않습니다.

## 8. 중단·재시작·완료 체크

1. AUTO Cycle을 종료하려면 MODE → MANUAL → 확인StageRequests.StopAsync 완료 확인 뒤 모드가 바뀝니다. 막히거나 정리 실패면 원인을 확인하고 상대 신호/소유권을 점검합니다. 실제 안전회로의 비상정지가 아닙니다. 현 UI에서 Root MAIN START/STOP 버튼 연결은 확인되지 않아 문서에 그 버튼을 만들지 않았습니다.

2. 팝업 CLOSE·결과 닫기·INIT을 정지로 사용하지 않는다Simulator/결과창은 표시창입니다. INIT은 그룹 번호 초기화입니다. PowerMeasure STOP과 우측 가상 Stage STOP도 각각 다른 기능입니다.

3. 다시 시작하기 전 정리 확인Stage START/COMPLETE OFF, PRC 소유 출력 복귀, Stage/Review 모델 예약·정지 정리를 확인합니다. 원인 없는 timeout 재시작/요청 강제 반복을 하지 않습니다. AUTO 감시는 MANUAL → AUTO 전환으로 재개하고 새 선대기·DoReady부터 진행합니다.

| 문제 | 먼저 볼 부분 |
| --- | --- |
| AUTO 진입 불가 | 활성 Heavy/Interlock·Recipe 유효성·8Head 사용·장치 상태. 실제 안전 입력을 강제 조작하지 않음 |
| Process ABLE이 안 옴 | 첫 Review X 선대기 DONE, Stage Ready Y/Busy, 0선 계획/IOF/Vision 준비. 실패 상태에서 START를 먼저 켜지 않음 |
| 수동 segment SET 비활성 | MELSEC SIM·자동 응답 OFF·0선 IOF 계획 생성 여부. 세션 종료 전 옵션 전환 금지 |
| 촬영구간 대기 timeout/lateReady NG | 대기 표시를 보고 1씩 SET했는지, 사전 N 입력/다음 점 준비 지연 여부 |
| 파워 START 불가/ERROR | 사용 가능 Head·등록 PowerMeter·Target>0·시간/횟수 범위·공통 알람·파일 오류 |
| n/n 완료인데 실패 | Head별 OK/NG/ERROR/STOPPED·PowerTable 저장 메시지를 별도 확인 |

- [ ] 모든 사용 장치의 SIMUL과 시험 ConfigRoot를 확인했다.
- [ ] Recipe 전체 8Head 지정·SAVE와 0선 N/그룹/후속 옵션을 기록했다.
- [ ] 선대기 DONE → DoReady 요청/해제 → Process 요청/해제를 순서대로 확인했다.
- [ ] 자동 ON과 수동 OFF 구간 시험을 분리해서 기록했다.
- [ ] 0선 결과 CSV의 SIM 표식·대상·판정·후속 요청을 대조했다.
- [ ] 파워 Head별 OK·시험표 업데이트를 확인했으며 실보정 합격으로 기록하지 않았다.
- [ ] 모드·요청·출력·예약 정리 확인 후 종료했다.

체크는 문서를 읽으며 표시하는 용도이며 앱/장치 상태와 연결되거나 파일에 저장되지 않습니다.

## 9. 검증 범위와 소스 근거

이 문서는 UI/시퀀스/저장 코드를 정적으로 조사한 절차안입니다. 표시되는 화면 일부는 소스 기반 안내도로 실제 앱 실행 캡처가 아닙니다. 코드 복구·실행본 대조 후 실제 조작 결과는 별도 기록해야 합니다.

1. [설정 화면·저장](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L318-L431) / Drilling.UI/Menu/Menus/CMenuSetting.cs · 318–431

2. [장치별 SIMUL 정의](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Config/JHMI_INTERFACE.csv#L1-L17) / Config/JHMI_INTERFACE.csv · 1–17

3. [ConfigRoot 결정](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/CAppStartup.cs#L121-L135) / Drilling.UI/CAppStartup.cs · 121–135

4. [0선 Recipe 화면](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CRecipeZeroDefenceView.xaml#L16-L127) / Drilling.UI/Views/CRecipeZeroDefenceView.xaml · 16–127

5. [Recipe 선택·저장](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1047-L1078) / Drilling.UI/Menu/Menus/CMenuRecipe.cs · 1047–1078

6. [검사점 지정·전체 검증](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L4247-L4605) / Drilling.UI/Menu/Menus/CMenuRecipe.cs · 4247–4605

7. [Main Run Option](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CMainRunOptionView.xaml#L18-L40) / Drilling.UI/Views/CMainRunOptionView.xaml · 18–40

8. [MODE 전환·Stop 확인](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/CRootView.cs#L577-L635) / Drilling.UI/CRootView.cs · 577–635

9. [Simulator 입력 화면](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml#L16-L101) / Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml · 16–101

10. [Simulator 입력 제한](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L54-L160) / Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs · 54–160

11. [DoReady 신호 순서](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L4819-L4868) / Drilling.Common/Station/CStationProcess.cs · 4819–4868

12. [Process 신호 순서](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5131-L5212) / Drilling.Common/Station/CStationProcess.cs · 5131–5212

13. [실제 첫 Review X 선대기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5472-L5561) / Drilling.Common/Station/CStationProcess.cs · 5472–5561

14. [실제 0선 실행 제한](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5621-L5647) / Drilling.Common/Station/CStationProcess.cs · 5621–5647

15. [0선 측정·lateReady](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5651-L5712) / Drilling.Common/Station/CStationProcess.cs · 5651–5712

16. [0선 후속 요청·그룹 진행](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5755-L5791) / Drilling.Common/Station/CStationProcess.cs · 5755–5791

17. [SDC 이동](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStageReviewSequences.cs#L356-L429) / Drilling.Common/Station/CStageReviewSequences.cs · 356–429

18. [IOF 배열·가상 구간 완료](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStageReviewSequences.cs#L513-L628) / Drilling.Common/Station/CStageReviewSequences.cs · 513–628

19. [Vision point cycle](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Review/CReviewManager.cs#L3065-L3118) / Drilling.Common/Review/CReviewManager.cs · 3065–3118

20. [0선 결과 파일](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.File/ReviewResult/CReviewResultFile.cs#L701-L733) / Drilling.File/ReviewResult/CReviewResultFile.cs · 701–733

21. [PowerMeasure 입력·START/STOP](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CManualPowerMeasurePanel.cs#L24-L215) / Drilling.UI/Menu/Menus/CManualPowerMeasurePanel.cs · 24–215

22. [숫자 칸 입력 방식](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CManualPowerMeasureView.xaml.cs#L14-L44) / Drilling.UI/Views/CManualPowerMeasureView.xaml.cs · 14–44

23. [PowerMeasure 화면·단위](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CManualPowerMeasureView.xaml#L129-L258) / Drilling.UI/Views/CManualPowerMeasureView.xaml · 129–258

24. [가상 측정 서비스](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Interface/CPowerMeasureService.cs#L286-L321) / Drilling.Common/Interface/CPowerMeasureService.cs · 286–321

25. [가상 테이블 고정 연결](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuManual.cs#L6255-L6278) / Drilling.UI/Menu/Menus/CMenuManual.cs · 6255–6278

26. [PowerMeasure Stage 제한](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CManualPowerStagePanel.cs#L29-L165) / Drilling.UI/Menu/Menus/CManualPowerStagePanel.cs · 29–165

27. [PowerTable 경로](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.File/PowerTable/CPowerTableFile.cs#L19-L37) / Drilling.File/PowerTable/CPowerTableFile.cs · 19–37

28. [실측 테이블과 데모 안내](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Config/PowerTable/README.txt#L1-L34) / Config/PowerTable/README.txt · 1–34

29. [Monitor 센서 읽기 UI](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Views/CMonitorView.xaml#L1389-L1467) / Drilling.UI/Views/CMonitorView.xaml · 1389–1467

30. [Monitor 공개 메뉴](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L80-L99) / Drilling.UI/Menu/Menus/CMenuMonitor.cs · 80–99

31. [AUTO 파워 reserved](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L1126-L1130) / Drilling.Common/Station/CStationProcess.cs · 1126–1130

32. [MELSEC 신호 맵](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Config/JHMI_MELSEC_MAP.csv#L5-L58) / Config/JHMI_MELSEC_MAP.csv · 5–58

33. [RESET SEQUENCE의 실제 역할](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2264-L2305) / Drilling.UI/Menu/Menus/CMenuManual.cs · 2264–2305
