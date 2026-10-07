Flying Review · Confluence 변환본

제공된 HTML 코드의 기본 입력값으로 만들었습니다.
노출 10μs / 허용 blur 8px / X 속도 200mm/s / X 가속·감속 150mm/s² /
Y 속도 100mm/s / Y 가속·감속 150mm/s² / Stroke 2700mm / Y Cell 간격 200mm.
현재 선택: 기판당 2점, 1번째 기판. 비교표에는 2점·4점 전체 기판을 함께 표시합니다.
계산 결과: 가공 27.666667초 / blur 8px / 30초 최대 Stroke 2933.333333mm /
8개 점 포함 최소 Stroke 2616.509333mm / H08→H01 선배치 5.119333초.

1. 일반 편집기에서 사용하는 방법
FlyingReview_Confluence_Copy.html을 브라우저에서 여세요.
화면에 표시된 제목·본문·표 전체를 선택해서 복사한 후 Confluence 페이지 편집기에 붙여넣으세요.
HTML 소스코드를 그대로 일반 편집기에 붙여넣는 방식이 아닙니다.
그림이 복사되지 않거나 저장 후 사라지면 attachments의 PNG 4개를 해당 위치에 드래그해서 넣으세요.
이 버전은 입력 조건의 고정 결과입니다. 숫자를 편집해도 계산은 자동 갱신되지 않습니다.
펼치기 내용은 일반 본문 제목으로 모두 펼쳐 두었습니다.

2. Confluence Storage Format 소스 편집기 / REST API로 사용하는 방법
페이지에 attachments의 PNG 4개를 같은 파일명 그대로 먼저 첨부하세요.
FlyingReview_Confluence_Storage.xhtml 전체 내용을 Storage Format 소스 편집기에 넣으세요.
지원되는 소스 편집기가 없는 환경에서는 REST API의 body representation=storage, value=파일 내용으로 사용합니다.
이 파일은 페이지 본문 XML 조각입니다. html/head/body 래퍼가 없습니다.
기존 details는 expand 매크로, 결과 안내는 info 매크로, 그림은 첨부 이미지 참조로 변환했습니다.
XML 소스를 일반 본문 편집기에 붙여넣으면 페이지로 렌더링되지 않습니다.

3. HTML·JavaScript 지원 매크로로 사용하는 방법
FlyingReview_Confluence_HTML_Macro.html의 전체 소스코드를 매크로 본문에 붙여넣으세요.
Confluence Data Center에서는 관리자에 의해 활성화된 HTML 매크로가 필요합니다.
Cloud에서는 HTML과 인라인 JavaScript 실행을 지원하는 설치 앱/매크로가 필요합니다.
JavaScript 또는 SVG를 제거하는 매크로에서는 자동 계산·동기화·도식 갱신이 보장되지 않습니다.
외부 라이브러리·웹폰트·파일 다운로드 없이 자체 계산합니다.
기본 계산 결과를 미리 채웠으므로 JavaScript가 실행되지 않아도 기본 표·수식은 HTML에 들어 있습니다.

자동 동기화: 원본 KEY flying-review-y-cell-pitch-v4를 유지합니다.
localStorage/BroadcastChannel은 시뮬레이터와 동일 출처 및 동일 저장소 파티션일 때만 공유됩니다.
외부 시뮬레이터와 Confluence 또는 서로 격리된 iframe은 자동 연결되지 않을 수 있습니다.
고정 입력이 필요하면 매크로 코드의 SAVED_REVIEW_STATE=null을 아래 형태의 객체로 교체하세요.
{version:1,params:{exposureUs:10,blurPx:8,vx:200,ax:150,dx:150,vy:100,ay:150,dy:150,strokeMm:2700,cellPitchY:200},mode:2,glass:0}
glass는 0부터 시작합니다. 2점 모드는 0~3, 4점 모드는 0~1입니다.
원본 링크 FlyingReview_8Head_Simulator.html은 제공되지 않은 상대경로이므로 자동으로 연결하지 않았습니다.
매크로 첫 div의 data-simulator-url=""에 실제 https 시뮬레이터 주소를 넣으면 현재 입력값을 URL로 전달합니다.
시뮬레이터 본체는 이 패키지에 포함되어 있지 않습니다.

변환 범위
원본 계산의 motion/calculate 및 단일 파라미터 복구 탐색 로직을 유지했습니다.
본문의 ?로 손상된 빼기 기호는 실제 계산식에 맞게 −로 복원했습니다.
CSS 선택자와 DOM 검색은 flying-review-cf 컨테이너 내부로 제한했습니다.
여러 매크로를 함께 넣어도 전역 변수 선언/고정 DOM id가 충돌하지 않도록 내부 스코프로 옮겼습니다.
카메라·렌즈·소유권 검증 주장은 원본 코드에서 가져온 전제입니다. 해당 하드웨어나 레시피를 재검증한 결과가 아닙니다.
선배치 180초는 ReviewDone 후 사용 가능 여유이며 장비 전체 Tact나 기판 시작 간격이 아닙니다.

검증
계산 기본값 및 2점·4점 결과, 데이터 오류 경로, Y 간격 변경 시의 결과 갱신을 로컬에서 확인했습니다.
Storage Format XML과 이미지 파일 참조를 검증했습니다. 실제 Confluence 페이지에는 게시하지 않았습니다.

형식 참고
https://confluence.atlassian.com/doc/confluence-storage-format-790796544.html
https://confluence.atlassian.com/doc/html-macro-38273085.html
https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/
