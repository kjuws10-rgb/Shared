A3 LD DoReady / Process / Review 시나리오·평가 체크리스트
2026-10-25

구성
DoReady / Process / Review / 평가체크리스트 4탭입니다.
편집 가능한 객체292개(DoReady73 / Process108 / Review111)와 평가47항목을 포함합니다.
평가는 Doready13 / Process18 / Review16이며 모두 미평가입니다.
모든 Melsec 필드는 시작 Word만 표시합니다. 필드 크기는 2 Word입니다.
신호 타이밍과 I_F 상세 탭을 삭제했습니다. 틀고정과 그림파일은 없습니다.

Process
첫 Review X 선대기는 DoReady와 독립된 병렬 동작입니다.
본문에 상세① 0선 IOF 설정과 상세② 가공 병행 0선 측정을 연결했습니다.
0선 모드는 W8230=10000, 개수는 W8236, W8300부터 [Y1..YN][X1..XN]입니다.
측정별 Review X 이동과 Y Trigger는 Stage Buffer가 담당합니다.
1900은 전체0선 시작에1회, 1001은 각 측정 준비입니다.
START 및 완료 인계 전 W804E 교체OR / W8050 교체후Power옵션 / W8052 매수를 갱신합니다.
실제가공 완료 W8034와 전체 Process 완료 W820C를 구분합니다.
가공완료 AND 필요한0선 처리종결 및 최종Flag갱신 후 Process COMPLETE를 보냅니다.
늦게 확정되는0선NG까지 W8218 요청을 최종반영하고 후속1줄 Review는 별도시퀀스로 실행합니다.

일반 Review
일반 X IOF는 W8230=0, 현재LINE 계측개수는 W8234, 좌표영역은 W8300입니다.
0선 W8236이나0선 packed배열 규칙을 일반X에 복제하지 않습니다. W8900은 미사용입니다.
모드·X/Y목표·속도를 먼저 갱신하고 C124/8029/C128/8021 SDC 인터페이스로 이동합니다.
8021은 이동 Busy가 아닌 완료 확인 응답입니다.
새LINE/재시도마다1900 1회→1001준비→X Flying/Trigger→1002→필요1003을 수행합니다.
1002 Count NCK는1003 대기 없이 같은LINE을 현재실제끝점에서 반대로 재측정합니다.
Count ACK 후 즉시재측정ON은1003 판정까지대기, OFF는다음LINE이동과결과수신을병행합니다.
늦은 측정실패로 재측정을 선택하면 원래LINE Y복귀를 확인합니다.
정상/A라인NG/B라인NG의3가지 지그재그예제로 재시도후 다음방향을 표시했습니다.
1줄=Cell중앙Y, 3줄=Cell처음·중앙·끝Y이며 각줄은각Cell의X다중Point검사입니다.
3줄은같은Cell·같은설계X/Point대응끼리Y선형보간합니다.

근거와 검증
MelsecNetG Spec0.05, Stage기능리스트, 가공프로그램Flowchart,
기존Full Review IOF·Vision인터페이스와 최신사용자정정을 대조했습니다.
주소·시퀀스·Vision·저장구조를 보조에이전트가 독립검토했습니다.
저장본재열기에서 oneCellAnchor292개 위치일치, 도형텍스트넘침0을 확인했습니다.
원본Excel과 첨부7개는 변경하지 않았습니다.

구현 전 확인할 항목
일반X좌표배열순서·단위·방향enum과Trigger Count전송값은 Stage/Vision계약확인이필요합니다.
2Word wire형식·스케일, 세부SDC OFF/C124반납, Buffer관측·후속준비동기도 확인대상입니다.
ATT예측식·매수확정이벤트·동시Flag우선순위와해제계약은 임의확정하지 않았습니다.
실제Excel앱·장비/축/레이저동작은 시험하지 않았습니다.
조건부서식은 저장구조를 확인했으며 실제Excel의 동적색상검증과 구분합니다.

완성Excel은 내용과바이트를 변경하지 않고 복사했습니다.
ZIP에는 동일Excel과 이안내문만 포함됩니다.
