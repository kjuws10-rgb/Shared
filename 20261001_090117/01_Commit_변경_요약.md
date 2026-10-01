# Commit 변경 요약

## 범위

```text
702fefcaff524ae29209dc5c8c3bcfa626101b9c
  └─ 8a07f068fc49ab2204a18bd19ddf33c8973c4bb6  auto commit
      └─ 6b19d7aaf0de81271468ab7dac0fa15493172f38  config: align H01 scan coordinates for test0929
```

전체 비교: [`702fefc...6b19d7a`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/compare/702fefcaff524ae29209dc5c8c3bcfa626101b9c...6b19d7aaf0de81271468ab7dac0fa15493172f38)

## Commit 1 — 8a07f06

[`8a07f068fc49ab2204a18bd19ddf33c8973c4bb6`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/8a07f068fc49ab2204a18bd19ddf33c8973c4bb6)은 기능 변경의 대부분을 담고 있습니다.

### 가공 쪽

- Shot 좌표 생성과 Head 배정 구조가 보강됨.
- Scanner 축 변환을 공용 구조로 만들고 Review/Correction과 같은 기준을 사용하도록 연결.
- CHESS로 제외된 Shot은 Automation1 스크립트 목록 자체에서 제거.
- Hole/Edge Masking 판정 기준을 “점 중심”에서 “Beam 면적이 닿는지”로 강화.
- 마스킹 Hole 최대 개수를 5개에서 3개로 줄임.
- `test0929` 등 Recipe CSV를 새 마스킹 형식에 맞춰 갱신.

Automation1은 [마스킹 계획을 만들고 CHESS 제외 Shot을 먼저 제거](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Drilling.File/Script/CAutomation1ScriptFile.cs#L49-L66)합니다. 주의할 점은 다음 두 종류의 “미가공”이 서로 다르다는 것입니다.

| 종류 | 스크립트에서의 모습 |
|---|---|
| CHESS 제외 | 해당 좌표 이동 줄 자체가 생성되지 않음 |
| Hole/Edge Masking | 좌표 이동은 하지만 Laser On/Off가 생성되지 않음 |

### Review 쪽

- `Config/ReviewSetting/<RecipeId>/*.review` 파일 로더·저장기 추가.
- `REVIEW_RULE_FILE`이 화면과 실제 Review Plan 작성에 연결됨.
- SIMPLE, ROUGH, FINE 규칙에 따라 측정 Shot을 고르는 빌더 추가.
- P2P와 IOF 실행 경로, Vision 단점/라인 측정 프로토콜 추가.
- Review 중간 진행 상황을 Product 파일에 저장하고 중단 후 이어가기 기능 추가.
- ReviewResult CSV에 Glass, 측정 방식, 규칙, Beam, 기준 Shot 등 메타데이터 추가.
- `HOLE_KEY` 명칭을 `SHOT_KEY`로 변경하면서 읽기 호환성은 유지.
- Correction 단계에서 SIMPLE/ROUGH/FINE 규칙대로 측정값을 전체 Shot Offset으로 펼치는 기능 추가.

### UI와 파일

- Review Setting 생성·저장·이름 변경·삭제 화면 흐름 추가.
- Review Result와 Correction 화면 정보 확대.
- `.vs`, `bin`, `obj` 등 생성 산출물이 대량 포함됨.

## Commit 2 — 6b19d7a

[`6b19d7aaf0de81271468ab7dac0fa15493172f38`](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/6b19d7aaf0de81271468ab7dac0fa15493172f38)은 H01 `test0929` 좌표를 목표 방향에 맞추는 설정 변경입니다.

### Setting.csv 최종값

| 설정 | 최종값 | 의미 |
|---|---:|---|
| `SELECT_RECIPE` | `test0929` | 시작 시 선택 Recipe |
| `H01_USE` | `ON` | H01만 사용 |
| `H02_USE`~`H08_USE` | `OFF` | 나머지 Head 비활성 |
| `H01_SCANNER_XY_FLIP` | `OFF` | X/Y 교환 안 함 |
| `H01_SCANNER_X_FLIP` | `OFF` | Scanner X 부호 유지 |
| `H01_SCANNER_Y_FLIP` | `ON` | Scanner Y 부호 반전 |
| `H01_ENCODER_AXIS` | `GY_1` | 스캔 진행·대기 기준 축 |

근거: [Setting.csv L9](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Config/Setting/Setting.csv#L9), [Head 사용 L52-L59](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Config/Setting/Setting.csv#L52-L59), [H01 Flip과 Encoder L69-L97](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Config/Setting/Setting.csv#L69-L97).

### test0929 최종값

| 설정 | 값 | 좌표에 미치는 영향 |
|---|---:|---|
| `MAX_CELL_NUMBER` | 45 | 9열 × 5행 Cell |
| `SCAN_START_DELAY_LENGTH_Y` | 500 | 첫 스캔 기준을 Y=501.0125 부근으로 이동 |
| `PIXEL_SIZE` | 0.09 | Pixel을 mm로 변환 |
| `PITCH` | 30 | Shot Group 간격 = 2.7 mm |
| `SPLITED_BEAM_COUNT` | 4 | Beam 간격 = 0.675 mm |
| `CHESS` | 1 | CHESS로 제거되는 Group 없음 |
| Model 1 Pixel | 864 × 512 | Cell 내부 Shot 격자 크기 결정 |

근거: [test0929 공통·형상 설정](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Config/RECIPE/test0929.csv#L1-L45), [Masking 값](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Config/RECIPE/test0929.csv#L46-L66), [Cell 1~45 배치](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/6b19d7aaf0de81271468ab7dac0fa15493172f38/Config/RECIPE/test0929.csv#L275-L455).

## 변경량을 읽을 때 주의할 점

424개 파일이라는 숫자가 모두 기능 코드 변경을 뜻하지는 않습니다.

- 의미 있는 소스·설정·화면 파일: 약 47개
- `.vs`, `bin`, `obj` 등 IDE/빌드 산출물: 약 377개

이 생성 파일들은 실행 기능보다 리뷰 노이즈, 저장소 크기, Merge 충돌 위험을 키웁니다. 기능 diff를 확인할 때는 소스·Config와 생성 파일을 분리해서 봐야 합니다.

## 이전 분석과 달라진 판단

| 이전 기준 판단 | 이번 최신 판단 |
|---|---|
| Review Rule CSV가 실행 코드에 연결되지 않음 | 새 `.review` 파일과 `REVIEW_RULE_FILE`이 실행 계획에 연결됨 |
| Vision 측정이 임시값 중심 | 실제 Vision 명령·응답 해석이 추가됨 |
| Stage/Vision 이동 명령이 연결된 것으로 보임 | 최신 코드는 이동 명령을 만들기만 하고 전송하지 않음 |
| 결과 CSV가 단순 측정값 중심 | 규칙·Glass·Beam·상태·총점 메타데이터 포함 |
| Hole 중심점이 Mask 안에 있으면 제외 | Beam 사각 면적이 Mask와 닿으면 제외 |
