A3 · 쉽게 이해하는 기판 변형 보정 + Masking 가공좌표 생성 v5

1. ZIP을 풀고 A3_Masking_Distortion_Easy_Studio.html을 브라우저에서 여세요.
2. 첫 탭은 측정점 확인 → 안쪽 연결 → 가공점 이동의3단계 그림입니다.
3. 둘째 탭에서 보정방식(사용안함/라그랑주/면연결), 중앙 Key6/4/2, 기판 모양을 선택합니다.
4. 좌표 CSV 저장을 누르면 기존·보정 GY/GX_STAGE를 한 파일에 저장합니다.
   배정 Head만 저장 / 보정좌표 함께 저장을 각각 선택할 수 있습니다.
5. 기존 상세 Masking 옵션은 동봉 편집기에서 설정·레시피 JSON 저장 후 새 도구로 불러올 수 있습니다.

사용자 확인 배치: Align4 + 중앙 Distortion6. 기판 안쪽 두 세로선 주변이며 연속 테두리 측정이 아닙니다.
정상 측정값은 그대로 반영하고, 측정선 사이와 바깥 예측 구간을 구분합니다.
예제 Key 위치/계산 범위/변위는 합성값이며 실제 기판 설계치·카메라 측정값이 아닙니다.
보정은 DOE 샷 중심에 적용합니다. Masking OFF 좌표·Head·원순번은 그대로 보존합니다.

실제 pixel 파일:
A3_Real_Pixel_Input_TEMPLATE.json은 입력 양식입니다. 원측정/기준pixel/J/Align변환은 빈칸이라 바로계산되지 않습니다.
예제 설계 위치·범위는 실제 Model 설계치로 교체하고 동일 촬영 조건의 기준pixel과 확인된 pixel→공통mm 대응을 입력하세요.
Masking 레시피의 설계pixel 크기는 카메라의 mm/pixel 배율이 아닙니다.
Align정렬전4점에는 실제 실행된 정렬변환을 한 번 적용합니다. Distortion6점은 정렬후입니다.
이미 공통mm로 환산했다면 format=common-mm, phase=after-align-common, deltaMm를 사용할 수 있습니다.
Model ID/레시피 버전이 일치해야 합니다. 원입력은 별도originalInput에 보존됩니다.

좌표표의 의미:
GY'=GY+변위X, GX_STAGE'=GX_STAGE−변위Y. 기존120mm/홀짝Head거리/샷중심offset은 중복 적용하지 않습니다.
GY/GX_STAGE는 기존 좌표계의 개발용 후보이며 두 열이 native ScannerGX/GY나 공통StageY 실행명령이라는 뜻은 아닙니다.
Masking은 설계 재료 기준 판정을 유지합니다. 변형후 실제빔·금지영역 접촉은 NOT_VALIDATED로 기록합니다.
Head범위/DOE빔중심/원순서역전은 별도 열에 표시하며 자동 Head재배정·좌표삭제·안전승인은 하지 않습니다.
동시DOE빔 사이 보정차이는 DoeRigidResidualMm, 실제MOF 동기는 MofSyncStatus로 구분합니다.

동봉 DEMO_Masking_Distortion_GY_GX_STAGE.csv는 가상 예제20,740행·mm단위이며 보정 전후 좌표를 포함합니다.
DataClass=SYNTHETIC_DEMO입니다. 실제기판이나 장비실행용 데이터가 아닙니다.
검증: 기존평가20,740행 재현·독립계산16항목·27개DOM조합/187항목·CSV네저장옵션 확인.
현재 연결브라우저가 없어 실제브라우저 화면/저장대화상자·실장비 시험은 하지 못했습니다. 주요SVG그림은 별도렌더 확인했습니다.
인터넷/설치 없이 실행되며, 원문출처링크를 열 때만 인터넷이 필요합니다.
