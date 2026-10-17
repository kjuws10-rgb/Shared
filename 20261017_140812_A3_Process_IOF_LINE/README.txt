A3 Process IOF LINE 시나리오와 통합 평가표
2026-10-17 사용자 문구 정정·최신 IOF 흐름 반영

Process ABLE 조건 성립 + Process Ready 실제 위치 도착 확인
→ PEG 정보 Melsec 게시 → Stage ACS 반영.
Process Ready 위치 도착·정지 확인 후 Melsec에 PEG 위치 쓰기.
이동 중에는 PEG 정보를 쓰지 않습니다.
0선 OFF면 Stage는0선 N/좌표를 읽거나 ACS에 적용하지 않으며 이전0선 Trigger를 사용하지 않습니다.

실제 MOF 가공이 먼저 시작되고 Y는 연속 주행합니다.
0선 IOF LINE r=1~L마다 다음 흐름을 반복합니다.
1. LINE 시작 위치·Review X 도착·정착 확인
2. 새1900 정상 응답 →1001 FlyingReady/ACK, IOF/TRG·조명·노출·LINE 대상 준비
3. LINE 시작→끝 구간 연속 이동 중 HW Trigger/Grab, Frame k 반복
4. LINE 끝·필요 Trigger·마지막 노출 종료 후 새1900→1002/ACK
5. Vision LINE 측정 완료·결과 응답 준비 확인
6. 새1900 정상 응답 →1003 LINE MARK FIND 결과 요청·회신·반영
7. 현재 LINE 결과 확인 뒤 다음 LINE의1001 준비부터 반복

다음 Review X 선배치는 현재 LINE 마지막 노출 종료·X 허가·이전 요청 복귀 후
현재 LINE TCP와 병행합니다.1002 ACK/1003 결과를 기다려 X 이동을 시작하지 않습니다.
다음 LINE 첫 Trigger 전에는 해당 LINE1001 Ready ACK가 확보돼야 합니다.
LINE 끝·1002 ACK·측정 완료·Y 전체 주행 종료는 각각 구분합니다.
L·Trigger 수·Frame 수·nHoleCnt·검출 Mark 수를 같은 값으로 가정하지 않습니다.

0선 ON: 가공Done AND0선Done 후 상위 Process COMPLETE.
0선 OFF: 실제 가공Done으로 완료.
가공 선완료 뒤에도 잔여0선 촬영·검사·결과를 처리합니다.
마지막 촬영까지 필요한 유한 Y 주행 후 계획대로 정지하며 TCP만 남았다고 무한 주행하지 않습니다.
일반 측정/TCP 오류로 현재 MOF를 중도 정지·재실행하지 않습니다.
미촬영/미수신을 OK/정상0선Done으로 바꾸지 않습니다.

DoReady / Process / 평가 체크리스트 3탭. 편집 가능한155개 객체, 이미지·틀고정·분할·잠금 없음.
평가 C01~C84와16기록행의100판정칸은 모두 미평가입니다.
상세177행 / IOF 반복188행 /1900공통203행 /완료조건211행.
실제 좌표 수치·피드백·주소·IOF enum·측정 완료/응답 준비·패킷/배열은 실제 계약과 대조합니다.
생산코드 구현·실장비 통신/축/레이저 평가·desktop 객체 편집 시험을 수행했다는 뜻은 아닙니다.
ZIP 구성: Excel과 이 README, 2개 파일.
