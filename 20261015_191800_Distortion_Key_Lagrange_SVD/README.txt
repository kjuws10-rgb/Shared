A3 LD Distortion Key — v2.0 (2026-10-15)

실행: A3_LD_Distortion_Key_Development_Scenario.html을 브라우저로 여세요.
외부 라이브러리·서버·인터넷 없이 시뮬레이션을 실행합니다.
reference_v1.html은 기존 상세 시나리오와 11개 도면을 보존한 원문입니다.

기능 A: Fine Align 후 원측정 편차로 척킹 판정과 Retry/Hold.
기능 B: PASS 기판의 변위장으로 가공좌표 보정 후보 계산.
판정값은 알고리즘·보정률·평활화로 변경하지 않습니다.

알고리즘:
- 좌우 각 5점의 barycentric 4차 Lagrange, 좌우 사이 선형 연결.
- 비교 기준은 구간 선형.
- 곡률 정규화는 min ||c-d||^2 + lambda^2 ||(L/sigma_max)c||^2.
- Fine 끝점 유지 옵션, 작은 곡률 특잇값 공간 투영 실험.
- A(관측), L(곡률), C(끝점 조건)의 SVD 방향을 화면에서 비교.
- 우측 특이벡터는 V의 열. 작은 sigma가 언제나 좋은 최적화 공간은 아닙니다.
  축소 공간은 동일 목적함수의 전체 공간 최솟값보다 좋아질 수 없습니다.
  잡음·계산·물리적 가정의 이점과 실제 형상 손실을 함께 검증합니다.

재현:
  python build.py
  python verify.py --node <Node 실행파일 경로>
검증 의존성: Python + NumPy, Node.js (브라우저 실행에는 필요 없음).
engine.js/ui.js/document.html이 편집 원본, 최종 HTML은 두 JS를 내장합니다.

검증 결과:
- JavaScript 조건 검사 1,758개 통과.
- 15개 점 배치 × lambda 4개 × 끝점 옵션 2개 = NumPy 독립 기준 120개 통과.
- SVD 재구성·좌우 직교성·특잇값·제약/무제약 해 검증.
- 브라우저 판정 분리·Retry·소진·결측·직접 입력·보정 제한·점 편중·SVD 비교 확인.
- 상세: validation.json / browser-qa.json / simulation-preview.jpg.

가상 결과의 해석:
기본 조건의 격자 RMS 12.72 -> 1.82 um는 특정 합성 사례입니다.
내부만 휘는 사례는 가장자리 10점 PASS여도 RMS 20.22 um가 남습니다.
불균일하게 편중된 점에서는 4차 보간 오버슈트가 커질 수 있습니다.
이는 가상 사례의 계산 결과이며 실제 정밀도·최적 lambda/k·속도의 증거가 아닙니다.
RMS는 17x31 가상 격자의 sqrt(mean(dx^2+dy^2)).
최대 보정량은 이 격자 검사이며 연속 영역 전체 극값을 보증하지 않습니다.
척킹 판정은 Distortion 6점의 축별 최대 절댓값(예제는 TolX=TolY).
Retry 개선 사례는 재척킹마다 변형 진폭을 절반으로 놓은 가정입니다.
직접 입력은 Align 후 BM 대비 10개 XY 편차만 받으며 내부 정답 RMS는 표시하지 않습니다.
예제 Permit은 측정·척킹·격자 한계의 논리 결과이며 실제 설비 승인이 아닙니다.
Z 평탄도, 내부 변형 관측성, 실측 기판, Stage/Vision 통신, DOE Field,
실가공 정밀도 및 생산 코드는 이번 검증 범위 밖입니다.

이전 원본:
https://github.com/kjuws10-rgb/Shared/blob/main/20261015_140541_Distortion_Key/A3_LD_Distortion_Key_Development_Scenario.html
reference_v1.html SHA256:
3c550934dc9571ddef64711d5763af6275d989d04ec89e7e5be02f791452eba2

수학 근거(HTML에 원문 링크 포함): Berrut & Trefethen barycentric 논문,
LAPACK SVD/DLALSD, MathWorks nullspace 문서.
곡률·관측 행렬과 시뮬레이션은 이번 개발 검토안입니다.
