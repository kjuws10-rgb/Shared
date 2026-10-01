# A3 변경 분석 — 2026-10-01 09:01:17 KST

이 폴더는 `A3_LD_Process_SW_IPS`의 이전 분석 기준 이후 변경분을 **읽기 전용으로 분석**한 결과입니다. 원본 저장소에는 파일 추가·수정·삭제·Commit·Push를 하지 않았습니다.

## 분석 기준

| 항목 | 값 |
|---|---|
| 이전 기준 Commit | [`702fefcaff524ae29209dc5c8c3bcfa626101b9c`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/tree/702fefcaff524ae29209dc5c8c3bcfa626101b9c) |
| 이번 최신 Commit | [`6b19d7aaf0de81271468ab7dac0fa15493172f38`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/tree/6b19d7aaf0de81271468ab7dac0fa15493172f38) |
| 비교 범위 | [`702fefc...6b19d7a`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/compare/702fefcaff524ae29209dc5c8c3bcfa626101b9c...6b19d7aaf0de81271468ab7dac0fa15493172f38) |
| 포함 Commit 수 | 2개 |
| 전체 Git 차이 | 424 files, +11,214 / -4,882 |
| 분석 방법 | Git diff, 호출 관계 추적, 설정 대조, 별도 검증 Clone 빌드, 좌표 계산 하네스 |
| 원본 변경 여부 | 없음 — 분석 Clone의 Push URL도 `DISABLED`로 설정 |

## 먼저 알아야 할 결론

### 1. 요청한 H01 가공 좌표는 현재 최신 설정에서 재현된다

별도 검증 Clone과 좌표 하네스로 `test0929`를 계산한 결과 H01에는 정확히 **2,380개** 후보 Shot이 생성되었습니다.

| 순번 | Scanner 좌표 | 레이저 |
|---:|---:|---|
| 1 | `(-28.4875, -501.0125)` | 미가공 |
| 2 | `(-25.7875, -501.0125)` | 가공 |
| 3 | `(-23.0875, -501.0125)` | 가공 |
| 4 | `(-20.3875, -501.0125)` | 가공 |
| 5 | `(-17.6875, -501.0125)` | 가공 |
| 6 | `(-14.9875, -501.0125)` | 가공 |
| 2,378 | `(39.0125, -1344.2125)` | 가공 |
| 2,379 | `(41.7125, -1344.2125)` | 가공 |
| 2,380 | `(44.4125, -1344.2125)` | 미가공 |

- 레이저 가공: 2,245개
- 이동만 하고 레이저를 켜지 않음: 135개
- 생성 스크립트의 Encoder 축: `GY_1`
- 생성 스크립트의 대기 조건도 `GY_1` 피드백을 사용

이 결과는 최신 [Setting.csv의 H01 축·Flip 설정](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Config/Setting/Setting.csv#L52-L97)과 [test0929 레시피](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Config/RECIPE/test0929.csv#L1-L58)를 함께 적용한 결과입니다.

### 2. Review Setting 파일이 이제 실제 실행 흐름에 연결됐다

이전 기준에서는 리뷰 규칙 파일이 실행 코드에 연결되지 않았지만, 이번 변경에서는 다음 흐름이 생겼습니다.

```mermaid
flowchart LR
    A[가공 Recipe의 REVIEW_RULE_FILE] --> B[Config/ReviewSetting/RecipeId/name.review]
    B --> C[ST_REVIEW_SETTING_PROFILE]
    C --> D[SIMPLE / ROUGH / FINE 대상 Shot 선정]
    D --> E[Review Plan]
    E --> F[P2P 또는 IOF 측정]
    F --> G[ReviewResult CSV]
    G --> H[Correction에서 Offset 계산]
    H --> I[Recipe의 Shot별 REVIEW_OFFSET_X/Y]
```

근거: [Review 설정 데이터 형식](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Drilling.Common/Review/CReviewSettingFileBase.cs#L3-L46), [파일 입출력 구현](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Drilling.File/Review/CReviewSettingFile.cs#L7-L176), [화면에서 Recipe 설정을 읽는 부분](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Drilling.UI/Menu/Menus/CMenuReview.cs#L1405-L1448).

### 3. 가장 중요한 안전 문제: Review 이동은 아직 실제 전송되지 않는다

`VISION` 통신은 실제 모드(`SIMUL=0`)로 바뀌었고 Vision 측정 요청도 구현됐습니다. 그러나 Review의 Stage Y와 Vision X 이동 함수는 명령 문자열만 만든 뒤 실제 MELSEC 전송을 하지 않습니다.

- Stage Y 이동 TODO: [CReviewManager.cs L2054-L2073](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Drilling.Common/Review/CReviewManager.cs#L2054-L2073)
- Vision X 이동 TODO: [CReviewManager.cs L2075-L2101](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Drilling.Common/Review/CReviewManager.cs#L2075-L2101)
- IOF도 같은 미연결 이동 함수를 사용: [CReviewManager.cs L2334-L2357](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Drilling.Common/Review/CReviewManager.cs#L2334-L2357)

따라서 현재 상태에서 실장비 Review를 정상 동작으로 판단하면 안 됩니다. **Stage/Camera 위치 확인과 Handshake가 연결되기 전에는 비 Simulation Review 시작을 차단하는 것이 안전합니다.**

## 문서 안내

| 문서 | 읽을 내용 |
|---|---|
| [01_Commit_변경_요약.md](./01_Commit_변경_요약.md) | 두 Commit이 무엇을 바꿨는지 |
| [02_변경된_데이터구조와_흐름.md](./02_변경된_데이터구조와_흐름.md) | 새 record, CSV 열, Product/Result 연결 |
| [03_가공_Review_영향_분석.md](./03_가공_Review_영향_분석.md) | 좌표·Head·Masking·Review·Correction 상세 |
| [04_갱신된_통합_흐름도.md](./04_갱신된_통합_흐름도.md) | 전체 흐름을 한눈에 보는 Mermaid 그림 |
| [05_위험도별_발견사항.md](./05_위험도별_발견사항.md) | 즉시 확인할 위험과 권장 조치 |
| [06_분석근거와_검증기록.md](./06_분석근거와_검증기록.md) | 빌드, 좌표, 링크, 원본 무변경 검증 |

## 빌드 판정

- `Drilling.UI/Drilling.UI.csproj -c Release`: **성공**, 오류 0, 경고 2
- 경고: `CRootView.cs`의 도달 불가 코드 `CS0162` 2건
- `Drilling.sln -c Release`: **실패** — 솔루션이 참조하는 `Drilling.Regression`과 `Drilling.UI.Regression` 프로젝트가 저장소에 없음
- 실제 Stage, Scanner, Laser, Vision 장비 시험: 수행하지 않음

> 이 폴더는 코드 변경물이 아니라 분석 결과입니다. 좌표 계산 성공은 “소프트웨어가 그 좌표를 만든다”는 뜻이며, 실제 장비의 안전한 이동·발진까지 보증하지 않습니다.
