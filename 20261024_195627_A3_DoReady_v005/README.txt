A3 LD DoReady 인터페이스 시나리오·평가 체크리스트
2026-10-24

DoReady / I_F 상세 / 평가체크리스트 3탭입니다.
편집 가능한 native 객체144개, 6개 신호의 타이밍 차트, 평가12항목을 포함합니다.
틀고정과 그림파일은 없습니다. 평가 결과는 모두 미평가입니다.

흐름
0선 ON이면 Align 측정 시 첫 Review X1 선대기를 요청합니다. OFF이면 생략합니다.
DoReady ABLE/START 뒤 Main Y의 Process Ready 이동과 가공SW의 Script/A1 생성,
0선/N/X/MOF 준비·필요 Melsec 갱신을 병행합니다.
Prc 준비 완료와 Stage Ready 실제 도착을 모두 확인하면 Stg COMPLETE가 ON됩니다.
W C106~C107 수신 뒤 Prc 3점 OFF → Stg 3점 OFF로 복귀해 DoReady를 종료합니다.
IO 초기화는 상태 신호 복귀이며 준비한 N/X/MOF 데이터를 삭제하지 않습니다.

주소·확인 범위
MelsecNetG Spec v0.05의 물류/가공 영역과 Stage Flowchart를 대조했습니다.
6개 DoReady 신호는 각2 Word입니다. ON/OFF 수치·자료형·word 순서는 별도 계약 확인입니다.
가공측 0선 사용여부 게시주소, X1~XN 대기 목록주소, 속도 외 MOF 조건은 미확정으로 표시했습니다.
IOF 모드0은 일반X이며 0선 OFF 값이 아닙니다. PEG 배열 표기 상충도 별도로 표시했습니다.

검증
3개 에이전트의 주소21·시퀀스12·구조31검사를 통과했습니다.
최종 저장본 재열기에서 oneCellAnchor144개 위치가 계획과 일치하고 글자 넘침은0입니다.
원본7개는 보존했으며 실제 Excel 앱·설비 인터페이스·축/가공 시험은 하지 않았습니다.
NG 조건부서식은 저장 구조를 확인했으며 실제 Excel의 색 반응 검증과 구분합니다.

완성 Excel은 내용·바이트를 변경하지 않고 복사했습니다.
ZIP에는 동일 Excel과 이 안내문만 포함됩니다.
