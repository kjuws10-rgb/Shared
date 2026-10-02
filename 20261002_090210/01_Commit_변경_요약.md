# 01. Commit 변경 요약

## 1. 비교한 Commit

| 구분 | Commit | 시각 | 제목 |
|---|---|---|---|
| 이전 기준 | [`6b19d7a`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/tree/6b19d7aaf0de81271468ab7dac0fa15493172f38) | 이전 분석 기준 | Review/좌표 개선 기준점 |
| 최신 | [`a25ba3c`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/a25ba3cdfd70cff5d78172d13ec957318704b1e1) | 2026-10-01 18:56:39 KST | `auto commit` |

전체 비교: [`6b19d7a...a25ba3c`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/compare/6b19d7aaf0de81271468ab7dac0fa15493172f38...a25ba3cdfd70cff5d78172d13ec957318704b1e1)

## 2. 변경 규모를 해석하는 방법

Git은 341개 파일이 바뀌었다고 표시하지만, 실제 기능 판단에 필요한 파일은 34개입니다.

| 분류 | 수량 | 설명 |
|---|---:|---|
| Recipe/JHMI/Setting CSV | 10 | Model별 Pitch/Chess, Head, Vision/MELSEC 설정 |
| C# | 22 | 좌표·Masking·Review·Script·Monitor·화면 로직 |
| XAML | 2 | Recipe/Monitor 화면 |
| 생성물·IDE 캐시 | 307 | `.vs`, `bin`, `obj`, `BuildCheck`, `.buildcheck`; 소스 판단에서 분리 |

생성물 파일이 많기 때문에 “341개 변경”만 보고 큰 기능이 341개 바뀌었다고 해석하면 안 됩니다. 반대로 생성물에 묻힌 34개 실제 변경은 좌표와 레이저 ON/OFF에 직접 영향을 주므로 세밀하게 봐야 합니다.

## 3. 기능별 핵심 변경

### 3.1 가공 Recipe 구조

과거의 공통 `PITCH`, `CHESS` 두 값이 사라지고 Model 1~5 각각의 값으로 나뉘었습니다.

```text
과거
PITCH + CHESS
  └─ 모든 Model이 같은 규칙 사용

현재
MODEL1_PITCH / MODEL1_CHESS / MODEL1_CHESS_TYPE
...
MODEL5_PITCH / MODEL5_CHESS / MODEL5_CHESS_TYPE
  └─ Cell이 고른 Model의 규칙 사용
```

[JHMI_RCP.csv L41-L55](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Config/JHMI_RCP.csv#L41-L55)에서 새 입력 항목이 정의되고, [CRecipeModelPixelCountReader.cs L41-L49](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CRecipeModelPixelCountReader.cs#L41-L49)에서 실행 값으로 읽습니다.

Repository 안의 6개 Recipe CSV는 새 형식으로 이관됐습니다. 단, Repository 밖에서 보관 중인 구형 Recipe는 새 키가 없으면 코드 직접 읽기 기준으로 `Pitch=1`, `Chess=1`, `ChessType=1`이 됩니다. 일반 UI 로드는 JHMI 기본값을 합쳐 주지만, 외부 도구가 Recipe dictionary를 직접 만들거나 JHMI 정의가 맞지 않는 배포본은 위험합니다. 배포 전 모든 실제 Recipe의 `MODELn_*` 존재 여부를 확인해야 합니다.

### 3.2 test0929 좌표·Masking 설정

[test0929.csv L30-L79](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Config/RECIPE/test0929.csv#L30-L79)의 주요 차이는 다음과 같습니다.

| 항목 | 이전 | 현재 | 영향 |
|---|---:|---:|---|
| `SCAN_START_DELAY_LENGTH_Y` | 500 | 120 | 스캔 시작 좌표 기준 변화 |
| Model 2~5 Pixel | 144×256 | 864×512 | 해당 Model 사용 시 Shot 수 급증 가능 |
| Model 1 Hole 수 | 3 | 1 | 마지막 점을 끄던 작은 Hole 3 제거 |
| Hole 3 | `(72.9,43.2)`, `0.1×0.1` | 0 | 마지막 레이저 상태 변화 가능 |
| 네 Corner 값 | 모두 0 | 모두 `2×2` | 새 직사각형 Edge Mask 활성화 |
| Model 1~5 Pitch/Chess | 공통값 | Model별 값 | Cell별 선택 가능 |

`test0929`의 Cell 1~45는 여전히 모두 `MODEL_TYPE=1`입니다. 따라서 Model 2~5의 큰 Pixel/Chess 값은 지금 이 Recipe 가공에는 바로 쓰이지 않지만, Cell Model 배정을 바꾸는 순간 활성화됩니다.

### 3.3 Head 및 Scanner 설정

[Setting.csv L52-L97](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Config/Setting/Setting.csv#L52-L97)의 변화입니다.

| 항목 | 이전 | 현재 |
|---|---|---|
| 활성 Head | H01만 ON | H01~H08 모두 ON |
| H01 XY Flip | OFF | ON |
| H01 X Flip | OFF | ON |
| H01 Y Flip | ON | OFF |
| H01 Encoder 축 | `GY_1` | `GX_1` |

이 변경은 H01 출력 좌표를 서로 바꾸고 Encoder 대기 축까지 바꿉니다. 모든 Head 활성화는 단지 H02~H08 스크립트를 추가하는 데서 끝나지 않고, 전역 스캔 시작 위치를 통해 H01에도 영향을 줄 수 있습니다.

### 3.4 Masking 알고리즘

[CRecipeShotMaskingPlan.cs L51-L173](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CRecipeShotMaskingPlan.cs#L51-L173)에서 다음이 바뀌었습니다.

- Model별 Pitch/Chess/ChessType을 보관합니다.
- `CHESS_TYPE=0(ONEWAY)`: 열 번호가 Chess 간격에 맞는 그룹만 유지합니다.
- `CHESS_TYPE=1(NORMAL)`: `(열-행)` 패턴이 Chess 간격에 맞는 그룹만 유지합니다.
- 과거의 전체 테두리 범위 판정 대신, 왼쪽 위·오른쪽 위·왼쪽 아래·오른쪽 아래 네 개 직사각형을 Edge Mask로 판정합니다.
- 이름에는 `ROUND`가 남아 있지만 현재 계산 형상은 둥근 곡선이 아니라 직사각형입니다.
- Hole은 계속 Beam 사각형과 Hole 사각형의 겹침으로 판정합니다.

### 3.5 Script 및 CSV 출력

[CAutomation1ScriptFile.cs L108-L174](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/Script/CAutomation1ScriptFile.cs#L108-L174)와 [L250-L345](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/Script/CAutomation1ScriptFile.cs#L250-L345)의 변화입니다.

- 좌표 CSV 식별자 `ProductId`가 `GlassId`로 정리됐습니다.
- `가공여부` 열이 추가되어 `가공`/`미가공`을 기록합니다.
- Head별 X/Y/Z Ramp, Z Speed, Acceleration Limit가 계획 데이터에서 Script로 전달됩니다.
- 별도 `ShotTimeDelayMs` 덮어쓰기가 없어지고, Shot 수와 주파수로 발진 시간을 계산합니다.
- Chess에서 제외된 Shot 그룹은 Script/좌표 CSV에 아예 들어가지 않습니다. `미가공`은 “행은 남아 있지만 Laser만 OFF인 Hole/Edge Mask 점”을 뜻합니다.

### 3.6 Review 구조 정리

[CReviewManager.cs L82-L235](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewManager.cs#L82-L235)에서 데이터 이름과 책임이 정리됐습니다.

- `EN_VISION_AXIS_MODE` → `EN_VISION_FLIP_TYPE`: 이름 변경이며 좌표 수학 자체는 유지됩니다.
- Review Plan Point에서 중복 Offset/부호 필드가 제거됐습니다.
- `ResultProjection` → `CorrectionPlan`
- `ST_REVIEW_RESULT_PROJECTION` → `ST_REVIEW_CORRECTION_PLAN`
- `IReviewManager.ApplyReviewOffset` 제거: 현재 Plan을 메모리에서 즉시 바꾸던 경로가 없어졌습니다.
- 영구 보정은 Correction 화면이 Result를 계산하고 Recipe의 `*_REVIEW_OFFSET_X/Y`를 저장하는 기존 경로로 유지됩니다.

ReviewResult CSV의 저장 열 구조는 바뀌지 않았습니다. 표시용 Shot 이름과 내부 속성 이름만 정리됐습니다: [CReviewResultFile.cs L251-L338](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/ReviewResult/CReviewResultFile.cs#L251-L338).

### 3.7 Vision/MELSEC Monitor

- Vision `SIMUL`이 `0→1`로 바뀌었습니다.
- MELSEC 인터페이스가 `SIMUL=1`로 추가됐습니다: [JHMI_INTERFACE.csv L1-L9](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Config/JHMI_INTERFACE.csv#L1-L9).
- DoReady, Process, Review, Process Move, IOF, Top Powermeter용 29개 신호가 추가됐습니다.
- Monitor가 한 주기에 읽는 최대 항목은 4개에서 32개로 늘고, `IF_`/`HANDSHAKE_` 행을 우선 포함합니다: [CMonitorStatusPollingService.cs L12-L19](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMonitorStatusPollingService.cs#L12-L19), [L378-L387](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMonitorStatusPollingService.cs#L378-L387).
- Monitor는 여섯 개 시나리오 보드를 보여주지만, 실행 순서를 제어하는 상태 머신은 아닙니다: [CMenuMonitor.cs L5127-L5248](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L5127-L5248).

## 4. Product 연결 영향

이번 Commit은 Product Manager나 Product 저장 파일을 직접 수정하지 않았습니다. `ProductId`라는 출력 용어를 `GlassId`로 정리한 것이 주요 변경입니다. 공정 준비·진행·완료 상태를 Product에 기록하는 흐름은 유지됩니다. Review 역시 현재 Product의 진행 상태를 갱신합니다.

즉, **Product 영속 구조가 바뀐 Commit은 아니지만, 외부에서 과거 좌표 CSV의 `ProductId` 열을 읽던 프로그램은 `GlassId` 변경을 확인해야 합니다.**

## 5. 함께 발견된 저장 로직 불일치

Recipe 저장 시 Shot별 Offset이 유효 범위 안에 있는지 계산하는 [CJhmiRecipeFile.cs L537-L577](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.File/JHMI/CJhmiRecipeFile.cs#L537-L577)은 아직 제거된 공통 키 `PITCH`를 읽습니다. 새 Recipe에는 `MODELn_PITCH`만 있으므로 `processPitch=0`이 되고, 범위가 “정의되지 않음”으로 처리되어 오래된 범위 밖 Shot Override가 걸러지지 않을 수 있습니다. 실행 좌표 계산은 Model별 Pitch를 사용하지만 저장 정리 로직 한 곳이 구형 키에 남아 있는 상태입니다.

이 항목은 좌표 생성 자체보다 Recipe 파일에 불필요한 Shot Offset이 계속 남는 데이터 품질 문제에 가깝지만, Recipe 크기와 추후 보정 매칭에 영향을 줄 수 있어 수정 검토가 필요합니다.
