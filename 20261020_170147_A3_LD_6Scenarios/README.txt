A3 LD 가공 SW 6개 시나리오와 간략 평가체크리스트
2026-10-20 사용자 첨부본 기준

구성: DoReady / Process / Review / Top Powermeter / Process Move / IOF / 평가 체크리스트.
DoReady와 Process는 첨부본의 내용·도형·서식·보기 설정을 보존했습니다.
Review, Top Powermeter, Process Move, IOF를 같은 편집형 시퀀스 방식으로 추가했습니다.
시나리오 그림은 이미지가 아닌 Excel 도형·선·텍스트 객체입니다. 틀고정·분할은 없습니다.

Process Move와 IOF는 기존 Process 안의0선방어 하위 동작을 분리한 설명입니다.
Process Move: 첫 Review X 준비 / 정상1002 ACK 후 다음 X 데이터·요청·이동·도착·복귀 / XReady 인계.
IOF: 측정 i=1~N마다 초기1900 한 번 /1001 Ready / 연속Trigger·Grab /1002 ACK / 다음 X와1003 독립 병행 / 결과 저장·반복.
다음 X는1003을 기다리지 않으며,1002 정상 ACK 수신이 선행합니다. 마지막 i=N의 다음 측정 X 요청은 생략합니다.
Review는 상위 Review 완료8214를 유지하며 LINE 촬영·소켓 핵심만 IOF 설명을 참조합니다.

평가 체크리스트의 기존 항목은 교체했습니다.6시나리오별6개,총36개이며 한 탭에서 점검합니다.
결과 선택: 미평가 / 적합 / 부적합 / 해당없음. 비고에 실제 관찰값·로그·미확정 사항을 기록합니다.

Top Powermeter의 Prc ABLE·COMPLETE는 Map상 중복 bank가 있어 후보를 표시했습니다.
원문에 없는 Stage START는 추가하지 않았습니다. 계측기 Serial은 현재 코드 근거이며 자동 TPM 연결·실제 출력/보정·판정 정책은 장비 계약을 확인합니다.
좌표·속도 단위/2 Word 형식·도착/정착/복귀 범위·Vision 패킷/완료 조건은 실기와 대조해야 합니다.
이 파일은 시나리오·평가 문서이며 생산 코드 변경이나 실장비 통신·축·레이저 시험 결과가 아닙니다.

ZIP에는 이 Excel과 README 두 파일만 있습니다.
