A3 LD Distortion / Lagrange 현재 코드 상세 해설
작성: 2026-10-30 Asia/Seoul

열기
1. A3_LD_Distortion_Lagrange_현재코드_상세해설.html을 내려받아 Chrome/Edge에서 여세요.
2. ZIP을 받았다면 압축을 풀고 같은 HTML을 여세요.
3. 인터넷 없이 본문·그림·교육용 계산기가 동작합니다.
4. 소스 링크를 열 때는 인터넷과 GitHub 저장소 접근 권한이 필요합니다.

내용
- 현재 코드가 사용하는 AK/DK 설계 위치와 Base/LastLoad 차이
- X 선형 + Y 전역 Lagrange의 수식·키 수별 차수·수치 예제
- Load / Base / Apply / Init의 차이와 실제 저장·가공 반영 흐름
- 보간 범위·오버슈트·Tolerance·기존값 유지·자동화 경계
- Review/Fine/Masking과의 관계, 이전 컨셉과 현재 구현의 차이
- 후속 검증 항목과 최신 Commit 고정 소스 링크

버전
https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/99d78ddf0e680b55dbd9662764b71a1ffe93a457
사용자 요청 MELSEC PR7 병합 후 main 기준입니다.
Distortion 관련 파일은 이전223b905d와 동일함을 확인했습니다.

검증
- 원본 CAlignInterpolation.cs 분리 시험15/15통과
- HTML 교육 계산121점 독립식 대조
- 브라우저24검사통과, JS오류/외부실행요청0
- 5화면폭(1440/1000/768/390/320) 페이지넘침0
- 소스31링크 실제파일·줄범위 확인, 그림 육안 확인
- 조사/수학/호출경로 3역할 독립검토 및 개선 반영

주의
수학 계산 및 소스 연결을 검증한 설명자료입니다.
실제 PLC/Vision/축/레이저를 기동하지 않았고 정밀도나 양산 합격을 판정하지 않았습니다.
현재 LastLoad 맵20개는 USE=0/UNASSIGNED입니다.
코드기본Tolerance0.5mm/저장소예제12mm/실장비승인값미확인을 구분하세요.
수동 Apply의 저장값을 Auto/Manual이 소비하며 매기판 자동재계산 연결은 확인되지 않습니다.
기존 설계자료의 TPS/SVD/H·Pose 정규화가 현행코드에 모두 구현됐다는 의미가 아닙니다.

범위
HTML/안내/ZIP/해시manifest/파일속성만 공유합니다.
개인지식MD, 로컬QA와 임시파일, 원본 코드·측정원문은 포함하지 않습니다.
