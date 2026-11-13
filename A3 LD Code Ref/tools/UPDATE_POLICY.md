# 예약 갱신 정책

기존 자동화 a3, 매일 오전 9시 Asia/Seoul의 변경 확인을 유지합니다. 즉시 웹훅 실행이 아닌 정기 확인입니다. 아키텍처와 코드 레퍼런스는 각각 기준점을 확인합니다.

매 실행마다 https://github.com/kjuws10-rgb/A3Drilling.git 의 master 브랜치 최신 Commit을 확인한다. 게시 대상은 https://github.com/kjuws10-rgb/Shared.git 의 main이다. 기존 아키텍처 분석과 'A3 LD Code Ref' 코드 레퍼런스는 각각 별도 기준점을 확인한다.

아키텍처 기준점은 Shared의 A3 분석 폴더 중 README에 원본 저장소가 kjuws10-rgb/A3Drilling로 명시된 폴더만 대상으로 날짜·시간이 가장 최근인 README의 원본 Commit이다. YYYYMMDD_HHMMSS_SW아키텍쳐분석과 기존 YYYYMMDD_HHMMSS 형식을 모두 탐색하며 접미사 앞 날짜·시간으로 판단한다. A3_LD_Process_SW_IPS 등 다른 저장소의 분석은 제외한다. 유효한 A3Drilling 기준점이 없으면 전체 구조와 데이터 흐름을 최초 기준 보고서로 작성하고 비교 기준 없음으로 명시한다. 코드 레퍼런스 기준점은 'A3 LD Code Ref/manifest.json'의 sourceRepository/sourceBranch/sourceCommit 및 검증 완료 상태다. 아키텍처가 최신이어도 코드 레퍼런스가 없거나 오래됐거나 검증 불완전하면 레퍼런스만 복구·갱신할 수 있다. 두 기준점과 산출물이 모두 최신이면 새 폴더·파일·Commit을 만들지 않는다.

원본은 별도 임시 읽기 전용 Clone에서 분석한다. Push URL을 비활성화하고 원본의 파일 수정·추가·삭제·Commit·Push를 절대 하지 않는다. 분석 전후 HEAD, Git 상태, 추적 파일 SHA를 확인한다. 장비 프로그램·AeroScript·벤더 DLL을 실행/로드/역컴파일하지 않는다. 빌드가 필요하면 별도 검증 Clone에서만 수행하고 문서 추출용 부분 컴파일 진단과 설비 정식 빌드 결과를 구분한다. 인증정보·로컬 비공개 지식 작업실·측정/운영 CSV 실제 레코드는 Shared에 복제하지 않는다. DLL은 경로·크기·해시·호출 래퍼 근거만 제공한다.

Shared main을 먼저 최신화한다. 새 원본 Commit이 있으면 이전 아키텍처 기준부터 최신까지의 Git diff와 영향받은 호출자/소비자, 전체 구조·데이터 흐름·저장 형식 영향을 상세 추적하고 Asia/Seoul 실행 시각의 YYYYMMDD_HHMMSS_SW아키텍쳐분석 폴더에 README, Commit 변경 요약, 데이터 구조와 흐름, 가공·Review 영향, 통합 흐름도, 위험도별 발견사항, 근거와 검증 기록을 작성한다. README에는 원본 URL, 브랜치 master, 최신 Commit, 비교 기준 Commit(최초면 없음)을 기록한다. 가공/리뷰 레시피, JHMI, Recipe CSV, Cell/Model/Shot/Beam 좌표, Head 배정, Masking, Review Plan, Sampling Rule, Vision, ReviewResult, Correction Offset, Product 연결을 우선 검토한다.

추가로 'A3 LD Code Ref'를 최신 전체 코드의 대백과사전형 레퍼런스로 갱신한다. 폴더 안 tools/README.md와 UPDATE_POLICY.md를 읽고 기존 재생성 도구를 활용한다. Git 추적 모든 파일을 분류한 개별 문서, C# 모든 타입·멤버의 서명/매개변수/반환/원본 줄/호출자·호출대상/분기·예외·취소·공유상태 설명, XAML 이벤트·바인딩, AeroScript/scan 명령, CSV 정의·소비 코드, 파일별 SVG 관계도와 Mermaid, 전체 원문 행을 보존한 문서용 annotated 사본, HTML 오프라인 목차·파일 검색, source path/Commit/SHA/줄 범위를 포함한 Offline Studio Markdown·JSONL 검색 자료를 유지한다. 원본에 주석을 직접 넣지 않고 annotated 사본에서 매우 상세하게 해설한다. 자동 구문/부분 의미 분석과 사람이 소스를 추적한 manual 상세장을 구분하며 resolved를 런타임 확정으로, 추출 진단을 설비 빌드 결과로 과장하지 않는다. SDK 메타데이터와 운영 CSV 스키마 분류도 파일 누락으로 처리하지 않는다.

새 변경의 생산자/소비자/호출자에 영향을 받는 manual 상세장과 그림도 실제 소스를 읽고 갱신한다. 초보자가 이해하는 쉬운 한국어, 단위·좌표계·상태·저장/전송의 구분, 검증 시나리오를 제공한다. 삭제/이름 변경된 파일은 자동 생성 영역에서 안전하게 반영하되 사람의 기록·변경이력·다른 Shared 파일을 임의 삭제하지 않는다. 생성 스크립트 출력과 핵심 구현 코드는 검색 자료에서 구분해 질문과 무관한 대용량 자료가 검색을 압도하지 않게 한다. 이 자료 갱신이 모델 가중치 학습이나 Codex 동급 성능 검증을 의미하지 않음을 유지한다.

보조 에이전트로 독립 소스 추적·문서/링크·생성기 검증을 나누고 통합한다. 모든 소스 링크를 최신 원본 Commit에 고정하고 실제 파일과 줄 범위를 검증한다. 추적 파일/타입/멤버 누락·중복, annotation 원문 행 복원, RAG SHA/범위/원문, 내부 링크, SVG/HTML 오프라인 검색·이미지, 코드 블록·잘못된 문자, git diff --check를 확인한다. 검증 기록과 manifest를 갱신하고 완료 기준 Commit을 정확히 기록한다. 원격 main이 작업 중 바뀌면 안전하게 동기화하며 타인의 변경을 덮어쓰지 않는다. 이번 분석 폴더와 'A3 LD Code Ref' 안의 검증된 변경만 Shared main에 Commit·Push한다. 같은 소스/동일 산출물이면 시각만 바꾸는 Commit은 만들지 않는다.

마지막에는 Shared 폴더·Commit 링크, 원본 비교 범위 또는 최초 기준, 핵심 변경, 코드 레퍼런스 커버리지, 빌드/검증 결과, 원본 무변경을 보고한다. 인증·권한·네트워크·충돌 등으로 안전한 완료가 불가능하면 억지로 변경하지 말고 정확한 막힘과 필요한 사용자 조치만 보고한다.
