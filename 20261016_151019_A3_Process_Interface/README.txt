A3 가공 SW 인터페이스 시나리오 · MelsecMap Comment 보강
공유: 2026-10-16

빠른 시작
1. A3_가공SW_인터페이스_상세자료_20261016.zip을 다운로드하고 압축을 풉니다.
2. A3_가공SW_인터페이스_시나리오_상세서.html을 브라우저에서 엽니다. 인터넷 없이 동작합니다.
3. 전체 흐름 → 시나리오 → 원본 타이밍 → 변수·입력 데이터 순서로 확인합니다.
4. A3_LD_MelsecNetG_Spec_Ver0.04_가공Comment보강.xlsx에서 Config_Map Word Detail(가공) 탭 H열 Comment를 확인합니다.

포함 내용
- 18개 공정·검사·복귀 시나리오,120개 단계,204개 사용 신호
- 단계별 주체,통신,MELSEC주소/Word폭,입력값,쓰기시점,완료,복귀,예외,출처
- 원본4종 타이밍차트:35신호×T1~T13=455개 논리값 보존
- TCP8명령·71필드:Header/Body타입·offset·크기·넣는값·단위·근거
- 가공Map4,182행:빈Comment4,177개 보강·기존5개 보존
- 변수검색CSV,48개 출처별쟁점CSV,검증범위JSON

Excel 보존
원본22탭·변수명·주소·폭·기존수식·다른셀·도식11개를 보존했습니다. Comment셀의 줄바꿈·정렬과 직접영향행높이만 조정했습니다.

확정 수준
원문 기재,명칭 해석,현재 코드,권고,확정 필요를 구분합니다. 미정한 주소·형식·단위·배율·enum·타임아웃을 임의 확정하지 않았습니다.
주소중첩,IOF/이동완료타이밍,1001 고정/가변길이,1003의4012/3608byte불일치,카메라pixel/기구좌표대응은 검토 목록을 확인하세요.

기준과 검증 범위
첨부 Stage기능리스트·MelsecNetG Spec Ver0.04·Vision-Process PPT 및 A3_LD_Process_SW_IPS main 0c501c104dec1cebab87bd909de29b1b1395a8b4를 대조했습니다.
파일구조·주소연속성·파형·패킷크기산술·HTML화면을 검증했습니다. 실제 장비/PLC/Vision상대/축/레이저/가공정확도 검증은 수행하지 않았습니다.
검증JSON의 로컬절대경로2개와 localhost미리보기주소1개는 공유용 파일명/안내로 정리했습니다. 분석결과·HTML·Excel·CSV는 그대로입니다.

파일 확인
share-manifest.json에 파일별SHA256과 공유구성을 기록했습니다. ZIP에는 본문HTML,Excel,변수CSV,쟁점CSV,검증JSON,안내TXT 6개가 포함됩니다.
interface-preview.jpg는 HTML 첫화면입니다.
