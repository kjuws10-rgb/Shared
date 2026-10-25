A3 LD DoReady / Process 인터페이스 시나리오·평가 체크리스트
2026-10-25

구성
DoReady / Process / I_F 상세 / 평가체크리스트 4탭입니다.
편집 가능한 native 객체373개(DoReady173 / Process200), 두 시나리오의 신호 타이밍,
Stage-Process-Vision 흐름과 평가31항목(DoReady13 / Process18)을 포함합니다.
틀고정과 그림파일은 없습니다. 평가 결과는 모두 미평가입니다.

반영 내용
첫 Review X 선대기는 DoReady 완료 여부와 무관한 병렬 동작입니다.
이동 전 mode·X/Y 위치·속도를 갱신하고 C124/8029/C128/8021로 완료를 확인합니다.
8021은 이동 Busy가 아닌 완료 확인 응답으로 구분했습니다.
Process 준비는 AUX 초기화·대기→MOF 결합·대기→8Task RUN·대기/Laser/Precheck입니다.
0선 ON에서는 Ready 도착·정지 후 8230/8236과 8300 packed [Y1..YN][X1..XN]을 갱신하고,
8238→C13C→823A 및 OFF 복귀로 PEG Buffer 준비를 완료합니다. 8900 X배열은 미사용입니다.
측정별 Review X 이동과 Y Trigger는 Stage Buffer가 담당합니다.
1900은 전체0선 시작에1회, 첫1001은 Y출발전, 후속 측정은1001부터 반복합니다.
1002 Count ACK/NCK, 1003 측정결과, NG 1줄 Review 요청8218을 구분했습니다.
START의 속도8032·교체804E·교체후Power옵션8050·매수8052와 실제가공완료8034,
가공/필요0선 처리 완료를 합류한 Process COMPLETE820C를 각각 표시합니다.

근거와 검증
2026-10-25 사용자 주소표·설명·병렬 정정을 우선하고 기존 DoReady 형식을 보존했습니다.
3에이전트가 주소33·시퀀스15·Vision26·구조26검사를 수행했습니다.
저장본 재열기에서 oneCellAnchor373개 위치가 계획과 일치하고 도형 텍스트 넘침은0입니다.
기존 DoReady144개 객체의 기하·스타일과 원본·첨부7개 해시를 보존했습니다.

확인할 항목
2Word 전송형식/스케일·SDC 최종OFF edge/C124 반납·Buffer 관측/준비 동기 경로,
ATT 예측식·Count 확정 이벤트·후속Flag 우선순위/해제 계약은 I_F 상세에 표시했습니다.
실제 Excel 앱·장비/축/레이저 동작은 시험하지 않았습니다.
NG 조건부서식은 저장 구조를 확인했으며 실제 Excel의 동적 색상 검증과 구분합니다.

완성 Excel은 내용과 바이트를 변경하지 않고 복사했습니다.
ZIP에는 동일 Excel과 이 안내문만 포함됩니다.
