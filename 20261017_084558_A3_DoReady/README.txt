A3 DoReady 가공 SW 기능 시나리오와 평가 체크리스트
공유일: 2026-10-17

Excel 구성
1. DoReady 시나리오: 사용자 설명의1~8단계,Stage/Prc 동작,Script준비,Melsec데이터갱신,완료조건.
2. 평가 체크리스트:24개 평가항목과8개Task별 실제ID/상태/확인시각/로그기록. 모든32판정칸은미평가로시작합니다.

주요 흐름
Stage Ready이동과Prc의Script/A1·0선설정·MOF데이터준비를병행합니다.
Prc DoReady COMPLETE는해당준비완료입니다.
Stage는Prc COMPLETE확인과실제Ready도착후Stg DoReady COMPLETE를ON합니다.
그뒤Prc가MOFZeroSet·Task실행·8개실제동작·LaserON·관련Precheck전체준비를완료합니다.
Stg Process ABLE이먼저와도8단계전체완료후처리합니다.

Ready Y는현재설명의−120mm가기전위치이며−120mm로확정하지않았습니다. 실제주소/값/MOF목록/TaskID/Precheck세부목록은설비에서확인해기록합니다.

다운로드
Excel을직접받아열거나 A3_DoReady_20261017.zip을받아압축을풉니다. ZIP에는동일Excel과이안내문2개가들어있습니다.

검증범위
8단계·24평가항목의문장대조,2시트·32미평가칸·드롭다운·고정행열·XML구조·표시를확인했습니다. 실제장비의인터페이스평가/축/Task/레이저동작시험은수행하지않았습니다.
DoReady기능·데이터갱신흐름은이번Excel을기준으로확인합니다.
