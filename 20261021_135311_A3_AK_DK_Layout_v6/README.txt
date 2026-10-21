A3 Masking / Distortion v6 · 첨부 이미지 기준 AK / DK 배치 정정

ZIP을 풀고 A3_Masking_Distortion_Easy_Studio.html을 브라우저에서 엽니다.
첫 탭: 측정점 확인 → 내부 연결 → 가공점 이동. 둘째 탭: 좌표 생성 / CSV 저장.

AK = Align key, DK = Distortion key.
AK1 좌상 / AK2 좌하 / AK3 우상 / AK4 우하입니다.
DK1·DK2·DK3은 왼쪽 위·중앙·아래, DK4·DK5·DK6은 오른쪽 위·중앙·아래입니다.
X+는 오른쪽, Y+는 아래입니다. 오른쪽 DK는 AK보다 안쪽인 배치를 허용합니다.
이전 v5의 ‘기판 내부 두 선’ 배치와 가공점 범위를 기판 외형으로 쓴 부분을 정정했습니다.
원래 가공 좌표 생성 / Masking 엔진은 바꾸지 않았습니다.

첨부 그림의 Glass 925×1500 표기값을 기본 외형으로 표시합니다.
공통 원점과 Key의 정확한 mm 간격은 아직 제공되지 않아 예시입니다.
‘AK / DK 설계 배치 확인·수정’에서 실제 Model 크기·원점·Key 설계 좌표로 교체하세요.
가공점이 없는 하단 영역까지 기판으로 표시하며 가공점 범위와 기판 외형은 분리합니다.
설계 배치를 수정하면 레시피 버전을 올리고 같은 배치로 그림과 계산을 갱신합니다.
Key번호와 Camera번호는 동일하지 않습니다. Camera / ScanPose 값도 실제 설비 대응으로 확인하세요.

보정: 사용 안 함 / 라그랑주 양측 연결 / TPS 면 연결(SVD 계산).
DK 6개는 전부, 4개는 DK1·DK3·DK4·DK6, 2개는 DK2·DK5를 사용하며 AK4개는 유지합니다.
라그랑주는 양측 Y 프로파일과 그 설계 X위치를 함께 연결하므로 AK / DK를 같은 X선으로 옮기지 않습니다.
모든 사용 측정점을 통과하지만 내부 실제 형상이 모두 측정됐다는 뜻은 아닙니다.
면 연결은 TPS 모델의 선택 차이이며 SVD 자체가 더 정확한 변형을 보장하지 않습니다.
프로파일 진동 / 교차와 미측정 내부 변형은 별도 검증합니다.

CSV에는 원본 / 보정 GY·GX_STAGE와 Head·순번·Gate, Model·Glass·레시피 버전을 저장합니다.
LayoutVersion / LayoutCoordinateStatus / KeyPositionStatus / CameraMappingStatus도 포함합니다.
GY'=GY+변위X, GX_STAGE'=GX_STAGE−변위Y이며 기존120mm / 홀수Head거리 / 샷offset을 중복 적용하지 않습니다.
기존 Masking OFF도 같은 순번으로 보존합니다. 자동 Head 재배정 / 재정렬은 하지 않습니다.
변형후 실제빔·Mask접촉과 MOF 동기는 NOT_VALIDATED이며 장비 실행코드가 아닙니다.

실측 양식 JSON에는 AK1~4 / DK1~6 설계 배치가 들어 있습니다.
현재 실측파일을 표시 중이면 양식에도 그 설계 배치만 유지하고 이전 측정값은 복사하지 않습니다.
원pixel·기준pixel·J·실행Align T는 null이라 양식을 실제측정값으로 즉시 계산할 수 없습니다.
실제 pixel을 공통 mm에 연결할 확인된 대응과 정렬 전/후 상태가 필요합니다.
Masking 설계 pixelPitch는 Camera mm/pixel 배율이 아닙니다.
V5 배치 / A·D ID 파일은 V6로 자동 변환하지 않습니다.

동봉 CSV는 SYNTHETIC_DEMO 20,740행 / 38열, ON19,525 / OFF1,215의 가상 예제입니다.
검증: 독립 수치27개, DOM27조합195항목과 최종UI경로 독립22개, 기본3단계/전후SVG 렌더 확인.
실제 브라우저 표시 / 저장창 / 장비 통신·축·실가공 검증은 미실시입니다.
이전 v5와 기존 시나리오 Excel은 이력으로 보존하며 이 ZIP은 새 배치 수정본입니다.
