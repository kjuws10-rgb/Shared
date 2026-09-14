# Cell 모델별 Masking 좌표 시뮬레이션

`실행프로그램.html`에서 모델 5종의 형상과 Cell 1~50의 모델·배치·회전을 입력합니다. 최신 배포본은 `../20260914_191026/`의 단일 HTML 두 파일과 PPID.xlsm입니다.

- Common: `CELL_MODEL_TYPE_COUNT` (1~5)
- Model: `MODEL1_`~`MODEL5_` 접두어로 모델별 31개 Hole·Round 파라미터
- Cell: X 거리 → `CELLn_MODEL_TYPE` → Y 거리 → 회전각
- 원점: 각 Cell의 첫 명목 DOE 샷 중심. Head 경계에서도 같은 Cell 원점 유지.
- Hole: PPID의 좌상단 X/Y 및 전체 SIZE(Box). 각 Cell 내부 금지박스.
- Edge: 상좌 원호의 좌우·상하 반전, 해당 Cell 내부 형상.
- 접촉: DOE 외접 사각형이 금지영역에 조금이라도 접촉하면 샷 전체 OFF.
- Masking 토글과 모델 선택은 좌표·순서·Head를 바꾸지 않습니다. 배치·회전 입력 변경은 좌표를 재계산합니다.

기본 레시피는 45 Cell, Raw 16,742개, 고유 중심 15,750개, 반복 992개를 재현합니다. 모델 예제는 생산 치수가 아닌 기능 검증값입니다. 실제 PPID는 값이 아니라 파라미터 정의서입니다.

## 실행과 검증

```sh
node serve.js
node --test tests/*.test.js
node cli.js --summary-only
node build-standalone.js
```

의존성 설치 없이 Node 18 이상에서 동작합니다. 단일 HTML은 파일을 직접 열어 사용하며 기준 CSV가 내장됩니다. 레시피 JSON 저장·불러오기, 전체 좌표 CSV, 좌표/Gate 명령표, PPID 이름 기반 공학값 JSON 출력을 제공합니다. 명령표는 제어기 공통 데이터 표현이며 장비 고유 Script가 아닙니다.

## 연동 범위

새 PPID 탭은 `PP_LD_HYBRID`이며 원본 14개 탭과 VBA를 보존합니다. 모델 1은 기존 공통 주소를 연결하고 신규 175개 항목 주소는 미배정입니다. Factor, 부호 인코딩, Word 주소, 실제 모델 치수는 장비 측과 확정하여 적용해야 합니다. HTML 입력/JSON의 거리 단위는 mm, 회전은 도입니다.

Cell X/Y는 공통 얼라인에서 설계 첫 픽셀까지 거리, 회전 양수는 X 오른쪽·Y 아래쪽에서 시계방향입니다. 명목 첫 샷 중심에 회전된 C26을 반영합니다. DOE의 장비 좌표계 회전각과 Cell 회전각 차이로 외접 사각형 반폭을 계산합니다.

검증은 모델 영향 분리, Cell별 원점, 회전 변환, 접촉 경계, 기존 Gate 보존, 원본 CSV 전수대조를 포함합니다. 기존 Script의 반복 Gate가 미정이면 명령표 저장을 막습니다.
