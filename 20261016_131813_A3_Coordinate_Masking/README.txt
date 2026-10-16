A3 LD 좌표 생성 · Cell 모델별 Masking · 시뮬레이션 재공유
공유일: 2026-10-16 / 원본 최종본: 2026-09-30

시작 방법
1. A3_Coordinate_Masking_20261016.zip을 받았다면 압축을 풉니다.
2. Cell모델별_Masking_전체최종보고서.html을 열어 좌표 생성·Masking 계산을 확인합니다.
3. Cell모델별_Masking_시뮬레이션.html을 열어 조건을 바꾸고 좌표와 Gate를 생성합니다.
4. 화면의 ‘평가 조건 864×512 · Pitch 30’을 누르면 첨부 레시피 조건을 불러올 수 있습니다.
   보고서와 시뮬레이션 HTML은 같은 폴더에 두면 서로 연결됩니다. 인터넷 없이 동작합니다.

포함 자료
- Cell모델별_Masking_전체최종보고서.html
  Align → 첫 Pixel B → 첫 샷 중심 A → Global/Head 좌표 → 마스킹 → MOF Gate 설명
- Cell모델별_Masking_시뮬레이션.html
  Cell 모델 1~5, Hole, 모서리 금지박스, Head 배정, 좌표 순서와 On/Off 시각화
- 평가조건_864x512_Pitch30_레시피.json
  864×512 Pixel / Pitch 30 / 9열×5행 / 8 Head 평가 입력
- 평가결과_배정좌표20740건.zip
  H01~H08 좌표·Gate 명령표, Head 1 좌표, 초기 71건 비교표, 평가결과 JSON
- origin-manifest.json: 원본 저장소·커밋·파일별 SHA256
- verification.json: 복원본의 CSV 20,740건을 기존 결과와 대조한 기록
- browser-qa.json / masking-preview.jpg: 복원 시뮬레이터의 동작·화면 확인

재현 확인
전체 생성 21,420개 중 미배정 680개를 제외한 20,740개를 출력합니다.
출력 좌표는 On 19,525개 / Off 1,215개입니다.
이번 복원 확인에서 Head, 순번, Cell, GY, GX_STAGE, Gate, MaskReason을 전수 대조했습니다.
Masking Off는 좌표 삭제가 아니라 원래 순서를 유지한 비발진 통과입니다.

원본 범위
Shared의 2026-09-30 최종 자료 4개를 원본 바이트 그대로 복원했습니다.
https://github.com/kjuws10-rgb/Shared/tree/cdc2c3a7685d325b3f9ff28b8b4465eb7d8a0a39/20260930_200349
원본 폴더는 후속 정리 이력으로 현재 main에서 빠져 있어 새 날짜 폴더로 다시 공유합니다.
9월 15일 원호(Round) 설명이나 9월 20일 이전판 대신 9월 30일 모서리 기준 최종본을 사용합니다.
파라미터 이름에 ROUND가 있어도 현재 기본 모드는 모서리 장변 사각형 금지박스입니다.

좌표와 Gate 명령표는 제어기 독립 데이터입니다. 실제 장비 전용 Script·축 매핑·Gate 응답은 별도 연동 대상입니다.
이번 확인은 기존 시뮬레이션 재현과 공유 파일 일치이며 실장비·실가공 성능 검증은 아닙니다.
