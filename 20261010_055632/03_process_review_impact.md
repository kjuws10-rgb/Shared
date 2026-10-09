# 03. 가공·리뷰 영향과 계산 시점

## 1. “선택하면 좌표가 보이는데, 그때 모두 준비된 건가?”

**미리보기용 계산은 그때 합니다. 하지만 실행용 모델은 별도로 준비하며 리뷰도 자기 계획을 별도로 만듭니다.** 레시피 객체 하나가 모든 최종 좌표를 영구히 갖고 있는 구조로 보면 틀리기 쉽습니다.

| 시점/화면 | 읽는 자료와 계산 | 보관/반영 범위 |
| --- | --- | --- |
| 레시피 선택·편집 화면 갱신 | 레시피 편집 항목, 셀 배치, Model 크기/피치·그룹·Head 조건 | 화면 미리보기. 편집 시 다시 갱신 |
| 초기 공정 모델 준비 | 선택 레시피 + 현재 Option/Motor + 최신 Review Offset CSV | Station의 ST_PROCESS_MODEL. 기본 Shift 0 |
| Shift 팝업 | 레시피 + Option/Motor로 Shift 전/후 비교 및 영역 검사 | UI 임시 입력. 최신 Review Offset CSV를 별도 합치지 않음 |
| MANUAL MAIN START | 레시피 다시 읽기, 임시 Shift 넣기, Station 준비에서 설정+최신 CSV 합치기 | 실행용 HeadPlans/Shots 생성 |
| Review 계획 생성 | 레시피 + Option/Motor 재계산, Rule/Beam/Mask/Chess 반영 | ST_REVIEW_PLAN. 공정 모델을 직접 받는 방식 아님 |
| Review 실행 | 선택한 ReviewPoints 순서대로 이동/측정 처리 | 각 결과의 실측값·오차·판정 갱신 |
| Correction Calculate/Apply | 선택 결과, 변환 규칙, 현재 보정 파일 값 | 보정 화면 자료/미리보기. 아직 파일 저장 아님 |
| Correction Save | 저장 직전 최신 CSV와 화면 적용 행 합치기 | 새 보정 CSV 이력. 이미 만든 가공 모델을 자동 다시 계산하는 의미 아님 |

[셀 미리보기 계산](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1991-L2114), [가공 모델 재준비](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.cs#L1138-L1198), [Shift 창 계산/검사](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.cs#L1239-L1280), [Review 계획 생성](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1240-L1299).

설계/가공 좌표는 요청 시 목록으로 만들어 Head별 보관합니다. Review의 후보 목록은 CLazyReviewPointList 경로도 사용해 접근 시 필요한 점을 계산합니다. 따라서 “선택 순간 모든 Beam/Review 실측 결과까지 완성돼 한꺼번에 들고 다닌다”는 설명은 맞지 않습니다. 검사 실측값은 실제 측정 이후 생깁니다.

## 2. Review 보정값: Calculate → Apply → Save → 다음 가공

1. ReviewResult를 읽어 어느 Cell/그룹인지 연결합니다. 숫자 ShotKey와 표시 그룹 이름을 대응시키는 과정이 있습니다.
2. Calculate는 측정 오차를 보정 축 기준으로 바꿔 이번 수정량을 계산하고 최신 CSV를 읽습니다.
3. Apply는 `새 누적값 = 현재 보정값 + 이번 계산값`으로 화면 목록을 만듭니다.
4. Save는 저장 직전 최신 파일을 다시 읽고 선택 적용 행을 덮어 합친 뒤 **새 파일**을 만듭니다. 미선택 행은 보존합니다.
5. 다음 PrepareProcess가 최신 파일을 읽어 좌표에 더합니다.

[Calculate](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L941-L993), [Apply 누적](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1115-L1134), [Save](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1156-L1256), [키/행 병합](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1830-L1907).

Save는 현재 실행 중인 프로그램을 즉시 바꾸는 동작이 아닙니다. “보정 저장 완료”와 “그 보정으로 가공 모델/스크립트 재생성 완료”는 별도로 확인해야 합니다.

## 3. 이전 레시피에서 넘어올 때

현재 가공 준비는 예전 REVIEW_OFFSET 키를 지운 뒤 전용 CSV만 합칩니다. 전용 파일이 없으면 기존 값으로 되돌아가지 않습니다. 과거 레시피에 0이 아닌 보정값이 있었다면 값이 빠질 가능성이 있습니다. 저장소 sample3의 예전 보정 항목은 0이므로 그 파일만으로 실제 손실 사례를 단정하지 않았습니다.

권장 확인 순서(이번에는 실행/변경하지 않음):

- 이전 Commit의 레시피에서 비영(0이 아닌) Review Offset 목록과 축/단위를 확보.
- CellId/그룹 ShotId로 대응되는지 확인. 숫자 ShotKey를 무조건 CSV의 ShotId로 복사하지 않기.
- 승인된 별도 CSV로 옮길 때 작업자·레시피 버전·원 결과 근거를 외부 이력에 남기기.
- 가공 준비 로그의 선택 파일명, 출력 좌표 CSV의 Review Offset과 합계를 대조.
- 초기값/누적값 중 무엇을 옮기는지 확인해 두 번 더하지 않기.
- 레이저 OFF 안전 검증과 장비 승인 후 생산 적용.

이는 변경 제안/체크리스트이며 이번 분석에서 원본 Config, 레시피, 보정 파일을 생성하거나 수정하지 않았습니다.

## 4. Shift가 미치는 곳 / 미치지 않는 곳

| 대상 | 영향 |
| --- | --- |
| 최종 Scanner 좌표 | X/Y 변환 뒤 이동값 추가 |
| Encoder 대기값 | ShiftY만 반영 |
| DesignX/Y·StageX/Y 필드 | 값 유지 |
| Head 배정 | 원 설계 위치 기준, 재배정하지 않음 |
| Masking | ShiftScannerOffset은 FinalScannerOffset 합계에 없으므로 Shift만 바꾸면 판정 유지 |
| MANUAL MAIN START | Shift 적용 |
| 초기 준비와 다른 준비 경로 | Root의 applyShiftOffset=false면 0. MANUAL 기능을 다른 경로로 일반화하면 안 됨 |
| ReviewTarget | 직접 Shift/최신 보정 CSV 연동 추가 없음 |
| Recipe 저장 | UI Shift를 Recipe CSV에 저장하는 경로 없음 |

Shift 영역 검사는 Laser ON 대상의 DesignX+ShiftX, DesignY-ShiftY와 Head X 영역을 검사합니다. 실제 Scanner 합계나 최신 Review Offset이 포함된 좌표를 모두 검사하는 장비 안전 한계 검사는 아닙니다. 팝업 Apply 검사 뒤 START 때 같은 검사를 다시 호출하지 않으므로 적용 후 레시피/설정 변경 시 재확인이 필요합니다.

ReviewTarget은 별도로 Camera AK + Shot의 AK기준 위치 + 회전한 Beam 위치, Y는 Stage 방향을 곱해 계산합니다. 이번 Shift 입력을 검사 이동에도 자동 추가하는 연결은 없습니다. 큰 Shift로 가공 위치를 옮긴 경우 검사 시야가 맞는지는 실제 정책/시야 크기로 검증해야 합니다. [Review 실행 설정](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1330-L1357), [ReviewTarget 계산](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1906-L1937).

## 5. Chess와 Masking은 다른 제외 이유

Masking은 “구멍/모서리 금지 영역이라 레이저를 켜지 않는다”이고 Chess는 “규칙대로 일부 위치만 고른다”입니다.

ONEWAY Chess=2의 4×4 후보 예(0부터 센 행/열):

```text
이전(열만):           현재(행+열):
● · ● ·             ● · ● ·
● · ● ·             · · · ·
● · ● ·             ● · ● ·
● · ● ·             · · · ·
8개 선택             4개 선택
```

현재 저장소 test0929 후보를 Chess2/Type0로 가정한 소프트웨어 비교는 열만 고르기 10,370개 → 행+열 고르기 5,490개입니다. 이 값은 **Chess 조건만 센 후보 수**로, Masking/활성 Head까지 반영한 생산 발사 횟수가 아닙니다. 실제 기본 Chess=1에서는 이 변화가 좌표 수에 영향을 주지 않습니다.

Station은 Chess 제외 샷을 목록에서 제거하고 SequenceNo를 다시 매깁니다. Masking 대상은 위치 목록에 남아 레이저 OFF 이동이 될 수 있습니다. Review 후보 제외에도 같은 판정 함수를 사용하므로 Chess/Mask에 의해 검사 선택 가능 영역도 달라집니다. Sampling Rule 파일 형식 자체는 그대로입니다.

## 6. 장비와 연결된 부분을 구분하기

- 새 Manual Motion ABS는 입력 위치를 MELSEC 지정 주소에 씁니다. REL은 현재 위치+입력값을 씁니다. Speed 입력은 확인창에 “현재 맵 미적용”이라 표시하며 실제 속도 주소에 쓰지 않습니다.
- STOP/HOME은 현재 UI 상태 메시지뿐입니다. 실제 장비 정지·홈 복귀가 구현됐다고 보면 안 됩니다.
- Reset 순서는 Automation1 Controller Reset → 활성 축 Enable → Home → 활성 Head의 DIO ON입니다. 실제 장비 명령입니다. 단순 화면 초기화가 아닙니다.
- Reset 창 STOP은 다음 단계를 건너뛰는 요청이며 현재 실행 중인 축 동작을 즉시 정지시키는 명령이 아닙니다.
- Station의 자동 Review 단계는 예약 로그뿐이며, CReviewManager의 Stage Y/Vision X 이동도 MELSEC 주소/Handshake 연결 TODO가 남아 있습니다. 측정 함수가 존재하는 것만으로 자동 이동까지 완성됐다고 볼 수 없습니다.

[Motion 쓰기·STOP/HOME](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1231-L1308), [Reset 단계](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1432-L1488), [다음 단계 중단 요청](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Popup/CControllerResetSequenceDialog.xaml.cs#L284-L299), [Station Review 예약](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationProcess.cs#L1353-L1358), [Review 이동 TODO](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1939-L2001).
