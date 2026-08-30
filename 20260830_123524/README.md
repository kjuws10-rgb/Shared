# A3 LD 좌표 생성 테스트 프로그램

레시피 조건으로 8개 Head의 가공 **중심 명령좌표**를 생성하고, 기존 `가공 좌표` Ground Truth의 Raw 16,742건을 순번까지 검증하는 로컬 도구입니다.

## 바로 실행

Node.js 18 이상에서 이 폴더로 이동한 뒤 실행합니다.

```bash
npm run serve
```

브라우저에서 `http://127.0.0.1:4173/20260830_123524/`를 엽니다. 별도 패키지 설치는 필요하지 않습니다.

UI에서 할 수 있는 작업:

- 레시피 조건 변경 후 좌표 재생성
- 8 Head 분배, Local GY 범위, 최소 Field 여유 확인
- Raw 16,742건 / 고유 중심 15,750건 / Lane 시작 반복 992건 자동 검증
- 저장소의 전수 검증 CSV 16,742건과 좌표·순번·Metadata 대조
- Head·역할·Sequence·Cell별 좌표 조회
- 생성 결과 CSV 저장
- 선택 입력값을 이용한 최종 DOE Footprint 안전여유 시나리오 판정

## 확정 계산 규칙

기준 레시피의 핵심값은 다음과 같습니다.

| 항목 | 기준값 |
| --- | ---: |
| 픽셀 크기 | 0.09 mm/px |
| 가공 중심 Pitch | 10 px |
| 가공 중심 간격 | 0.9 mm |
| Cell당 중심 격자 | 14 × 25 |
| Cell 배치 | 9 × 5 = 45 |
| Scan Field | Head당 110 mm, 중심 원점 기준 `[-55,+55)` |
| DOE | 4 × 4, 중심당 명목 16 Hole |

```text
가공 중심 간격 = 픽셀 크기 × 가공 중심 Pitch

전역 X = Cell 기준 X + X 기준거리 합계 25.5 + C26 0.3375
          + X 격자 번호 × 가공 중심 간격

전역 Y = Cell 기준 Y + C26 0.3375
          + Y 격자 번호 × 가공 중심 간격

Head 번호 = floor(전역 X / Scan Field 폭) + 1
Local GY = 전역 X - [55 + 110 × (Head 번호 - 1)]
GX(Stage) = -(전역 Y + MOF Buffer 120 + 홀수 Head이면 380)
```

Pitch는 DOE 4×4 내부 Hole 간격이 아니라 현재 중심 명령좌표에서 다음 중심 명령좌표까지의 원본 Pixel 수입니다. DOE 실제 Hole 좌표는 Branch별 Calibration Offset이 있어야 별도로 계산할 수 있습니다.

## CLI 사용

기준 레시피 요약:

```bash
npm run summary
```

Raw 좌표 CSV 생성:

```bash
node cli.js --out generated-coordinates.csv
```

사용자 레시피 적용:

```bash
node cli.js --recipe baseline-recipe.json --out generated-coordinates.csv
```

Lane 시작 반복을 제외한 고유 중심만 생성:

```bash
node cli.js --no-lane-duplicates --out unique-centers.csv
```

## 자동 테스트

```bash
npm test
```

테스트는 저장소의 `20260830_105429/가공좌표_스캔필드110mm_검증_16742건.csv`를 읽어 Head·SequenceNo·GY·GX·역할·Cell·격자 번호 전부를 대조합니다. 기준 결과는 16,742건 일치, 좌표 최대 차이 0 mm입니다.

## 파일 구조

```text
20260830_123524/
├── index.html                    # 브라우저 UI
├── styles.css                    # 반응형 화면 스타일
├── baseline-recipe.json          # 기준 레시피 예시
├── cli.js                        # CSV 생성 CLI
├── serve.js                      # 의존성 없는 로컬 서버
├── src/
│   ├── coordinate-engine.js      # 좌표 생성·검증 엔진
│   └── app.js                    # UI 상태·표·차트·CSV 대조
└── tests/
    └── coordinate-engine.test.js # 단위·경계·전수 대조 테스트
```

## 확인이 필요한 입력

- `C26=0.3375 mm`는 현재 좌표 재현에 사용하지만 원본에 항목명과 산출식이 없습니다.
- Lane 시작 반복 992건의 장비 실행 의미는 확정되지 않았습니다. 프로그램은 Raw 순서를 보존하지만 `CommandType`과 `LaserGate`를 `UNRESOLVED`로 출력합니다.
- DOE B01~B16 Offset, Beam 반경, Mapping 오차, Head 설치·수차보정 값이 없으면 최종 Footprint의 Field 안전성은 `UNVERIFIED`입니다.
- 현재 축과 부호는 Excel을 재현하는 규칙이며 장비 실축 검증을 대신하지 않습니다.

분석 근거는 상위 폴더의 [최종 분석보고서](../20260830_113543/가공좌표생성_최종분석보고서.html)와 [전수 검증 CSV](../20260830_105429/가공좌표_스캔필드110mm_검증_16742건.csv)입니다.
