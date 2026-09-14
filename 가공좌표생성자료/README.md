# A3 LD 좌표 생성 · Masking 프로그램

기준 Excel의 Raw 16,742개 가공 중심 좌표를 생성하고, Edge·Hole 접촉에 따라 샷 전체의 Laser Gate를 제한합니다. Masking 전후 Head·좌표·순번·반복 레코드는 동일합니다.

## 실행

배포 폴더의 `가공좌표생성_Masking_실행프로그램.html`을 브라우저로 열면 됩니다. CSS·계산 코드·원본에서 추출한 비교 CSV가 포함되어 인터넷 없이 생성·전수 대조·내보내기를 수행합니다.

소스 폴더에서는 Node.js 18 이상으로 다음을 실행합니다. 앱 자체는 외부 패키지를 요구하지 않습니다.

```bash
npm run serve
```

표시되는 `http://127.0.0.1:4173/가공좌표생성자료/실행프로그램.html` 주소를 엽니다. `npm run build`는 `dist/`에 프로그램과 보고서를 생성합니다. `node build-standalone.js /절대경로/실행파일.html`로 출력 위치를 지정할 수 있습니다.

## Masking 기준

- 공통 원점: 상단 왼쪽 Align Key로 위치가 정해진 첫 Cell의 첫 DOE 가공 중심.
- X는 오른쪽, Y는 아래쪽이 양수이며 거리 단위는 mm입니다.
- `CELL_*_ROUND_X/Y`: 원점에서 라운드 처리 전 직선 Edge가 만나는 각 모서리까지의 거리.
- 상좌 라운드를 기준으로 상우는 좌우 반전, 하좌는 상하 반전, 하우는 상하·좌우 반전합니다. 상단은 `CELL_UP_ROUND_RADIUS`, 하단은 `CELL_DOWN_ROUND_RADIUS`를 사용합니다.
- `MASKING_HOLE_NUMBER`: 정수 0~5. 활성 Hole의 X/Y는 중심 거리이고 SIZE X/Y는 전체 폭·높이입니다. Hole 0개여도 Edge는 적용합니다.
- Hole은 축에 평행한 타원(폭과 높이가 같으면 원), 기판 외곽은 직선과 원호로 이루어진 라운드 사각형입니다.
- 16개 빔을 포함하는 샷 외곽이 금지영역에 닿거나 겹치면 샷 전체를 Off로 합니다. 접촉 거리 0도 Off입니다.

기준 레시피에서 중심 간격은 `0.09 × 10 = 0.9 mm`, DOE 분기 간격은 `0.9 ÷ 4 = 0.225 mm`, C26은 `0.225 × 1.5 = 0.3375 mm`입니다. UI와 Masking 엔진은 C26을 자동 계산합니다. 원래 좌표 엔진의 명시적 Offset 입력 API는 그대로 남아 있습니다.

## 사용 순서

1. 레시피를 입력합니다.
2. Masking 사용 여부와 31개 파라미터를 입력합니다. `설명용 예제 불러오기`는 생산값과 구분된 예제입니다.
3. 기존 Script와 일치하는 기본 발진 정책을 선택합니다. 일반 중심은 기본 On, Lane 반복 992개는 기본 미정입니다.
4. 좌표를 생성하고 전체 기판·Cell 확대도와 발진 상태 표를 확인합니다.
5. CSV 또는 좌표·Gate 명령표를 저장합니다. 입력은 JSON으로 저장·복원할 수 있습니다.

입력이 바뀌면 이전 결과의 내보내기는 비활성화됩니다. 발진 미정 레코드가 있으면 명령표 저장은 비활성화되고, CSV에는 미정 상태가 유지됩니다. Masking은 기존 Off를 On으로 바꾸지 않습니다.

## 출력

CSV는 기존 열에 `BaseLaserGate`, `MaskingEnabled`, `MaskXmm`, `MaskYmm`, `MaskOriginXmm`, `MaskOriginYmm`, `MaskFootprintHalfMm`, `MaskFootprintScope`, `MaskHit`, `MaskReason`, `MaskLaserGate`를 추가합니다. 기존 `LaserGate` 열은 Masking을 반영한 최종 상태입니다.

명령표는 다음과 같은 제어기 독립 데이터이며 장비 전용 Script 언어가 아닙니다.

```text
POINT H01 SEQ=1 GY=-29.1625 GX_STAGE=-500.3375 LASER=OFF
```

실제 장비 연동 시 좌표 이동·노광 구간을 유지하면서 Gate를 적용하고, 분기 실측 보정·기판 정렬 변환·MOF 노광 중 이동과 On/Off 응답 지연을 반영해야 합니다. 빔 반경과 위치 여유가 비어 있으면 명목 DOE 외곽 판정으로 표시됩니다. Masking 통과가 Scanner Field나 장비 인터록의 발진 허가를 대체하지 않습니다.

## CLI 및 검증

```bash
node cli.js --summary-only
node cli.js --recipe baseline-recipe.json --out generated-coordinates.csv
npm test
```

JSON 레시피의 `masking` 객체에 파라미터와 `enabled`를 넣고, `laserPolicy`에 `centerGate`와 `repeatGate`를 지정합니다. 레코드별 기존 Gate를 연결할 때는 `laserPolicy.baseGates`에 `"Head번호:순번"` 키로 `ON`/`OFF`/`UNRESOLVED`를 전달할 수 있습니다.

자동 시험 32개는 원본 CSV 16,742개 전수 비교, 네 모서리 반전·경계 접촉·포함된 Hole·활성 개수·기존 Off 보존·좌표 불변·CSV 및 명령표 출력을 검증합니다. `coordinate-engine.js`는 기준 좌표 생성, `masking-engine.js`는 순수 기하·Gate 판정, `masking-panel.js`는 입력 및 기판 표시를 담당합니다.
