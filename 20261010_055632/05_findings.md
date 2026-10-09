# 05. 위험도별 발견사항

이 문서는 원본 수정 요청이나 수정 완료 보고가 아닙니다. “확인”은 코드를 읽거나 순수 소프트웨어 테스트로 재현한 사실, “가능성”은 운전 조건에 따라 생길 수 있는 위험입니다. 현장 제어기/PLC/안전 회로는 시험하지 않았습니다.

## 높음 — 생산 운전 전에 확인

| 번호 | 발견 / 근거 | 영향과 권장 확인 |
| --- | --- | --- |
| H1 | 기존 REVIEW_OFFSET 키를 삭제하고 최신 별도 CSV만 읽음. T09 재현 | 비영 기존 보정값 자동 이전 경로 없음. 사용자의 실제 이전 레시피/CSV 대응표 확인 후 승인된 이전 필요 |
| H2 | Manual Motion STOP/HOME은 UI only, Reset STOP은 다음 단계 중단 요청 | 표시만 보고 축이 멈췄다고 판단하면 위험. 실제 정지 경로와 독립 비상정지 확인. Motion UI 변경 범위에 있는 구현 한계이며 하드웨어 E-stop 부재를 단정하지 않음 |
| H3 | 새 Offset 파일에서 NaN 허용, 빈 숫자는 0. T12 재현 | 비정상 값이 Scanner 계산으로 전파될 수 있음. 유한값/허용범위 검사 필요. 런타임 Scanner 거부 여부는 미시험 |
| H4 | Shift 팝업 검사에는 최신 CSV 합치기 없음. 실제 Scanner 합계/이동 전부 검사 아님. START 때 동일 검사 재호출 없음 | 적용 후 레시피·설정·보정 파일 변경, 큰 Head/Recipe/Review 값 조합은 팝업 통과만으로 안전 보장 불가. 실행 직전 합쳐진 최종 좌표와 장비 한계 대조 필요 |
| H5 | ReviewTarget에 Root 임시 Shift 전달 없음. 별도 Recipe/설정 경로로 계획 재계산 | 가공을 크게 옮긴 뒤 검사 위치가 같은 만큼 이동할지 보장 안 됨. 가공 위치·Camera 시야·원점 기준 검증 필요 |
| H6 | 새 Reset 순서의 마지막 단계가 실제 DIO ON | 출력 주소/Head 활성 조건을 확인해야 함. 해당 DIO가 Shutter/Enable/기타 어떤 신호인지 현장 맵 없이는 단정 못 함. 생산 장비에서 임의 시험 금지 |

H1: [기존값 제거/파일 읽기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationProcess.cs#L1708-L1757).
H2: [Motion STOP/HOME](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1289-L1308), [Reset STOP](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Popup/CControllerResetSequenceDialog.xaml.cs#L284-L299), [단계 사이 요청 검사](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1448-L1485).
H3: [숫자 읽기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L129-L154), [유한값 검사 없는 파서](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Parser/CCsvParser.cs#L164-L173).
H4: [Apply 검사](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.cs#L1239-L1280), [검사 대상](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.cs#L1356-L1417), [START 경로](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.cs#L1534-L1558).
H5: [Review Parameters](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1330-L1357), [ReviewTarget](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1906-L1927).
H6: [Reset 명령 순서](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1432-L1485).

## 중간 — 운영/재현성 문제

| 번호 | 발견 | 영향/확인 |
| --- | --- | --- |
| M1 | 최신 선택은 파일명 내림차순, 모든 *.csv 대상. T10/T11 | 임의 파일이 선택되거나 손상된 최신 파일로 공정 준비 실패. 잘못된 파일을 추가하지 말고 선택 파일 로그 확인 |
| M2 | Save 직전 최신 파일을 읽지만 화면 누적값은 이전 Calculate 시점 값일 수 있음 | 다른 사용자/프로세스가 같은 그룹 보정을 저장하면 오래된 누적값으로 재덮어쓸 가능성. 버전 충돌 감지/동시 저장 정책 필요 |
| M3 | 파일명 밀리초 정밀도, CSV WriteAllLines. 고유 ID/원자적 교체/파일 잠금 없음 | 동일 ms 동시 저장 충돌 또는 읽기 중 부분 파일 가능성. 실제 충돌은 재현하지 않음 |
| M4 | ONEWAY Chess가 행+열 선택으로 바뀜 | Chess>1 작업의 발사/검사 수 감소. 기존 예상 개수 재검증. 기본 Chess=1은 유지 |
| M5 | Config에 FirstBeam 키 정의 없음 | 코드 지원만으로 설정 화면 지원이 완성되지 않음. 현재 기본0. raw CSV 추가만으로 적용된다고 가정 금지 |
| M6 | Manual Motion Speed는 PLC 맵 미적용 | 입력한 속도로 동작한다는 보장 없음. 주소 쓰기는 장비에서 동작/완료를 확인한 것과 다름 |
| M7 | Coordinate CSV의 Shift 열은 변환된 Scanner 값 | 원 입력과 비교해 잘못 수정하는 위험. PROCESS.txt의 원 입력 및 Flip 순서 함께 확인 |
| M8 | Monitor 쓰기 차단이 Pico JOG STOP에도 적용되는 경로 존재 | AUTO 전환 중 기존 Jog를 어떻게 중단하는지 운전 시나리오 확인. 다른 Stop/E-stop 기능까지 전부 차단된다고 단정하지 않음 |
| M9 | Script 폴더 충돌 후보 탐색은 Directory.Exists 후 생성 | 동시 생성 경쟁 가능성. Glass별 경로 자동 수집 프로그램의 이전 폴더명 규칙도 갱신 필요 |
| M10 | CSV에 단위/좌표축/원 결과·버전 없음 | Flip/Recipe 변경 후 과거 보정파일을 그대로 읽으면 잘못된 기준값일 수 있음. 이력 자료와 일치성 확인 |

M2: [Calculate 시점 값](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L961-L989), [저장 시 병합](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1224-L1238), [화면 행 덮어쓰기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1862-L1907).
M3: [시간 파일명](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L77-L89), [직접 CSV 쓰기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Parser/CCsvParser.cs#L93-L111).
M4: [Chess](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CRecipeShotMaskingPlan.cs#L163-L173).
M6: [수동 위치 쓰기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1231-L1276).
M8: [Pico Jog/Stop 조건](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2510-L2585).
M9: [폴더 후보 찾기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Script/CAutomation1ScriptFile.cs#L582-L622).

## 낮음 / 기존 구현 한계 — 새 회귀와 구분

- 인터페이스/모션/파일 파서/메뉴의 다수 변경은 지역 함수 이름 정리입니다. 이것만으로 장치 통신 규약이 바뀌었다고 보지 않았습니다.
- Solution에서 Regression 프로젝트 참조가 빠졌습니다. 솔루션 빌드 성공이 회귀 테스트 실행을 의미하지 않습니다.
- Station 자동 Review는 reserved, Review Stage/Vision 이동은 TODO입니다. **이번 Commit에서 새로 생긴 회귀가 아니라 기존 한계**입니다. 신규 Shift와 조합할 때 더욱 주의해야 합니다.
- Checked-in Data/Script/Log 삭제·변경은 과거 실행 흔적입니다. 소스 기능 삭제와 구분하며, 예전 결과를 찾는 운영자가 Git 이력으로 복구할 필요는 있을 수 있습니다.

## 권장 검증 순서(분석 제안, 이번에는 미수행)

1. 기존 비영 보정값 이전과 그룹/축 기준 확인.
2. 병합된 Parameters → 출력 좌표 CSV → 명령 좌표·Encoder 대기 비교.
3. 큰 Shift/Flip/FirstBeam/Review 값 조합의 장비 한계 검사.
4. Laser OFF로 실제 위치/PLC Handshake/속도/정지 확인.
5. Review Camera 시야·이동 연결 확인 후 실제 측정 비교.
6. 승인된 인터록과 DIO 맵 확인 후 생산 허용 여부 판단.

정상 빌드와 14개 확인만으로 4~6번이 완료됐다고 보고하지 않습니다.
