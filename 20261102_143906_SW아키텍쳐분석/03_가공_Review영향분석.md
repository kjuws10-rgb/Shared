# 가공과 Review에 미치는 영향

## 레시피를 선택한 뒤 가공 자료를 준비하는 흐름

앱의 큰 구조는 UI가 사용자 선택을 받고 Common의 RecipeManager·Station·Review 관리자를 호출하며 File이 CSV를 저장하는 방식입니다. [CManager 구성](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Managers/CManager.cs#L65-L135)에 Product·Review·Recipe·Station 연결이 모입니다. File 객체는 앱 시작부에서 생성해 이 관리자에 전달합니다. 현재는 필요한 로그 객체의 소스가 없어 이 연결을 새 빌드로 확인할 수 없습니다.

레시피에는 Cell별 위치·회전·Shift와 Model의 Pixel/Pitch/DOE 조건이 있고, 이를 Shot 중심과 Beam 위치로 풀어 씁니다. Head 배정과 Scanner 변환·마스킹을 거쳐 가공 계획을 만들며 Review는 그 계획의 식별자를 유지해 측정 대상을 고릅니다. 보정값은 다음 계획을 준비할 때 다시 읽어 반영해야 합니다. **측정 결과를 파일에 저장한 사실과 이미 실행 중인 Script가 갱신된 사실은 다릅니다.**

## 가공 준비와 완료를 구분하기

[StageProcess 준비](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L3749-L3830)는 StageReady 검사·속도 보고·Script 준비 경계를 연결합니다. `W8034`는 실제 가공이 끝났다는 값이고, `W820C`는 필요한 결과·후속 요청까지 반영한 상위 Process 완료입니다. 하나를 보고 다른 하나가 끝났다고 판단하지 않아야 합니다.

최신은 [Task 정상 완료 확인 뒤](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L3652-L3687) 보호윈도우 가공 매수를 먼저 저장합니다. 그 뒤 PLC 완료 보고가 실패하더라도 실제로 가공한 사용 횟수가 사라지지 않도록 한 구성입니다. 한 cycle에서 중복 증가하지 않도록 보호하지만, 전원 차단·재시작·제품 재시도 경계는 실제 로그와 함께 검수해야 합니다.

## 보호윈도우 교체 요청과 완료 인계

이번에 구현한 핵심은 **매수 조건**입니다. [요청 코드](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L4144-L4174)는 `현재매수 >= MAX`이면W804E를 켭니다. ATT 예상 사용률에 따른 교체 조건, 교체 후 TPM 재측정·파워보정·평탄도 전체 절차가 모두 완성된 것은 아닙니다.

~~~mermaid
sequenceDiagram
  participant P as 가공SW
  participant R as Recipe 파일
  participant S as Stage
  P->>R: 정상 가공 후 현재 매수 증가 저장
  P->>S: W8052 현재 매수 보고
  alt 현재 매수가 MAX 이상
    P->>S: W804E 교체 요청 ON
    S-->>P: WF150 Section 완료
    P->>S: WC2B0 Stage Tray Count 새로 읽기
    P->>R: 인계 매수 저장
    P->>S: W8052 인계 매수 보고
    P->>S: W804E 교체 요청 OFF
  end
  Note over P,S: 이 완료와 TPM 완료는 별개
~~~

[완료 처리](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L4350-L4460)는 완료 신호와 연결·유효 상태를 보고 Stage의 공식 매수를 가져옵니다. 무조건0으로 초기화하지 않습니다. 저장에 성공한 뒤 보고가 실패하면 이미 저장한 값을 재사용해 복구하도록 구성됐습니다. 다만 재시작 첫 관측에서 요청과완료가 모두ON이면 복구 경로가 이를 받아들이는 예외가 있어, 항상 새로운OFF→ON을 본다고 단정하면 안 됩니다.

Main의 새 ProtectWindow 표시와 [modeless 요청 알림](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Popup/CProtectWindowRequestDialog.xaml.cs#L37-L91)은 사용자가 현재 상태를 볼 수 있게 합니다. 이 알림창 자체가 실제 보호윈도우 이동 버튼이나 전체 교체 시퀀스는 아닙니다.

## 자동 PtoP와 일반 실IOF의 차이

[CReviewManager의 AUTO 경로](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Review/CReviewManager.cs#L2307-L2405)는 공통 StageReviewSequences를 사용하도록 확장됐습니다. 일부 AUTO PtoP는 실제 Stage 이동 계약을 사용하도록 코드가 작성됐습니다. 반면 일반·수동 Review 및 다른 실장비 모드까지 자동으로 허용된 것은 아닙니다.

[실IOF 준비](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStageReviewSequences.cs#L513-L524)는 실제 배열 전송 계약이 미확정이라 NotSupportedException으로 차단합니다. IOF 맵의 배열 주소·개수가 추가돼도 실Flying 측정이 끝까지 동작하는 것은 아닙니다. 이동 허가·READY·Busy·위치/속도·정지·신호 복귀·타임아웃을 실Stage/Vision과 확인해야 합니다.

## 0선방어는 선대기와 전체 측정을 나누어 판단

새 [상주 선대기 감시](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5472-L5560)는 AUTO·0선ON·Align 상태·X 이동 허가 등을 보고 첫 Review X를 선대기시키는 경로입니다. 이 **X 이동은 실제 장비 경로를 사용할 수 있습니다.**

반면 [0선 전체 Prepare](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5620-L5647)는 실제 MELSEC이면 촬영 구간 완료 계약 미정으로 중단합니다. 따라서 “0선 전체가 시뮬레이션뿐이므로 실기 이동도 없다”와 “선대기가 있으므로0선 전체 실기 완료다”는 둘 다 틀립니다.

또한 현재 [포인트 반복](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L5660-L5704)과 [ZeroLineVisionSession](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Review/CReviewManager.cs#L3065-L3118)은1900을1회 수행한 뒤 각 포인트별1001·1002·ACK일 때1003을 처리합니다. 이번 분석 중 새로 첨부된 `A3_LD_가공SW_시나리오_평가체크리스트_new.xlsx`의 Process 도형 `Zero_Initial`·`Zero_Repeat`도 포인트별 반복을 명시하므로, **새 첨부와 현재 코드의 큰 주기는 일치합니다.** 반면 기존 [0선 Y Flying 단일 세션 자료](https://github.com/kjuws10-rgb/Shared/tree/main/20261025_161154_A3_Zero_YFlying_Patch)는 N개Grab/1001·1002·1003각1회입니다. 이를 새 첨부 대비 코드 결함으로 세지 않고 자료 버전 간 기준 충돌로 구분했습니다. 실제 Stage/Vision 계약의 최종 기준은 따로 확정해야 합니다.

Resolution 값은 결과에 보존하지만 Target−Hole을mm로 취급해 나누지 않는 임시 계약입니다. 픽셀·mm·Resolution·부호를 확정하기 전에는 측정값이 수치로 나온다는 이유만으로 보정 입력을 승인하면 안 됩니다.

## Simple Rough Fine 보정

Head와Head+Cell 범위, 첫 기준 Shot, 사용자 Key-in과 실제 측정의 차이를 유지해서 검수해야 합니다. 같은 범위 이름이라도 “조합별 독립 계산”과 “같은 값의 일괄 적용”은 다릅니다. 이번 변경은 보정 클래스의 큰 파일 통합 외에도 Shot별 값 적용·입력 검증·자동 Review 연결을 바꿉니다.

[Fine 전체 적용 Gate](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Review/CReviewManager.cs#L3134-L3150)는 NG·미완료가 있으면 전체 Offset 적용을 차단합니다. 그러나 허용 범위 안의 유효한 출처인지, 대상 전체를 덮는지, 적용 전에 최신 Recipe/측정 세대가 같은지까지 따로 확인해야 합니다. 전체 `REVIEW_OFFSET_X/Y` fallback 제거와 시뮬레이션 출처가 없는 보정 파일은 특히 이전 Recipe 호환성·생산 유입 검사에 영향을 줍니다.

Align/Distortion은 설계 키와검출값의 차이로 Shot별 보정 벡터를 만드는 기존 역할과, Scanner 축으로 변환하는 역할을 구분해야 합니다. 파일 통합을 H/Pose 교정 또는 미관측 내부 정확도 검증이 추가된 것으로 해석하지 않았습니다.

| 보정 | 입력과 적용 방식 | 주의할 구분 |
| --- | --- | --- |
| Simple | 사용자 X/Y Key-in으로 선택 범위를 덮어씀 | 측정 결과가 반드시 필요한 보정은 아님 |
| Rough | 복수 Head의 대표 Shot을 측정해 Head별 델타 누적 | Head와Head+Cell 범위를 반대로 연결한 변경은 없음 |
| Fine | 같은 Cell·설계X 열끼리 Y 보간해 증분 누적 | 측정1개는 상수, 여러Y는Lagrange이며 anchor없는 열은 유지 |

[Simple 적용](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2664-L2677), [Rough 범위별 누적](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2552-L2576), [Fine 계산](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Review/CReviewManager.cs#L3132-L3198)이 각각 근거입니다. 수신 편차는Target−Hole이며 Vision XY/부호를 변환한 DESIGN 델타를 저장한 뒤, 가공 준비에서 Stage방향·Head변환을 한 번 적용합니다. 임의로 음수를 한 번 더 붙이거나 Scanner 값에 같은 변환을 다시 적용하면 안 됩니다.

Align 값에는 [유한수와절대100000mm 검사](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L639-L660)가 추가됐지만 이는 수치 형식 방어일 뿐 승인된 공정 허용오차가 아닙니다. X선형/Y전역Lagrange의 핵심 수학은 이전과 같고, 영역밖 차단과 영역안 일부 행의X외삽·고차 overshoot 위험도 구분해 확인해야 합니다.

## Alarm과 정지 처리

[HEAVY 복구](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/CRootView.cs#L2595-L2674)는 메뉴 작업 취소·Stage 요청 정지·수동MOF 정지·공유 이동 소유자 정지·핸드셰이크 출력OFF·MANUAL 전환을 연결합니다. 실패하면 재시작 차단 상태를 유지합니다. [핸드셰이크 초기화](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L4083-L4117)는 가공SW가 소유한 HANDSHAKE_PRC_ 출력만 대상으로 합니다.

광학 안전 판정은 삭제되지 않고 [DOE Z와 Optic 메서드](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/InterLock/CInterLockManager.cs#L124-L249)로 옮겨졌습니다. 그렇다고 현재 빌드 차단·상주 모니터의 수명·실제 정지/복귀 타이밍까지 검증된 것은 아닙니다. 특히 PTW 완료 감시는 별도로 살아 있으므로 비상 상황 중 무엇을 계속 감시하고 무엇을 중단할지 확인해야 합니다.
