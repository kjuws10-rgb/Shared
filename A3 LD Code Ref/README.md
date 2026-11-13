# A3 LD Code Ref

현재 A3Drilling 전체 코드의 파일·타입·멤버·호출·데이터 흐름을 찾아 읽는 코드 레퍼런스 초안입니다.

- [초안 전체 다운로드](https://github.com/kjuws10-rgb/Shared/releases/tag/a3-code-ref-draft-v1-20261113) · 압축 해제 후 `index.html` 실행
- [검증 결과](validation/README.md) · [변경 이력](CHANGELOG.md)
- [오프라인 HTML 목차](index.html) · [전체 파일 목차](FILE_INDEX.md)
- [전체 구조 그림](diagrams/architecture.svg) · [Offline Studio 첨부 방법](offline-studio/README.md)
- [원본 저장소](https://github.com/kjuws10-rgb/A3Drilling) · 기준 master Commit `5aee8e58439c9b455cae7c9593c9be986c3e682e`

|범위|수량|
|---|---:|
|Git 추적 파일/개별 문서|571 / 571|
|C#|148|
|타입/멤버|876 / 15282|
|호출 구문|39483|
|전체 행 주석 해설본|320파일|
|RAG 근거 레코드|27483|

## 읽는 순서

1. 아래 상세 해설장으로 시작·설정·가공·리뷰·통신·보정의 연결을 봅니다.
2. 전체 파일 목차에서 실제 원본 경로를 선택합니다. 파일별 그림, 타입·멤버, 입력·반환, 호출자·호출 대상, 분기·예외·취소 구문을 확인합니다.
3. `annotated/`의 문서용 전체 주석 해설본을 읽습니다. 모든 원본 행을 보존하며 원본 저장소는 변경하지 않습니다.
4. 줄/Commit/SHA를 실제 작업 폴더와 비교합니다. 다른 버전의 자료는 과거 근거로 취급합니다.

## 상세 해설장

- [01. 프로그램은 어떻게 시작되고 누가 무엇을 소유하는가](manual/architecture/01-startup-and-composition.md)
- [02. Recipe·Setting·JHMI·CSV를 함께 이해하기](manual/architecture/02-recipe-settings-and-csv.md)
- [03. Recipe 좌표가 Head Script와 MOF 실행 입력이 되기까지](manual/architecture/03-coordinate-script-and-mof.md)
- [04. Product와 Station: 기판 한 장을 끝까지 추적하기](manual/architecture/04-product-and-station-lifecycle.md)
- [05. Device Interface·Automation1·Motion·MELSEC의 경계](manual/architecture/05-device-interfaces-and-drivers.md)
- [06. 스레드·스냅샷·취소·로그를 이용해 멈춤과 오동작 찾기](manual/architecture/06-threading-snapshots-and-logs.md)
- [07. 변경 영향 검토와 Offline Studio에서 이 문서를 쓰는 방법](manual/architecture/07-change-impact-and-offline-reference.md)
- [A3 전체 구조·데이터 흐름 상세 안내](manual/architecture/README.md)
- [Review 계획과 좌표계: 설계 Shot이 카메라 측정점이 되는 과정](manual/review/01_Review_%EA%B3%84%ED%9A%8D%EA%B3%BC_%EC%A2%8C%ED%91%9C%EA%B3%84.md)
- [Masking·Sampling·IOF: 검사점 제외와 실제 이동을 구별하기](manual/review/02_Masking_Sampling_IOF.md)
- [Vision 통신: 1001 식별자 패킷, 1003 수신값, 픽셀→mm 오차](manual/review/03_Vision_%ED%8C%A8%ED%82%B7%EA%B3%BC_%EB%8B%A8%EC%9C%84.md)
- [Review Offset: 누적 보정·좌표계 태그·중복 방지·원복](manual/review/04_ReviewOffset_%EC%A0%81%EC%9A%A9%EA%B3%BC_%EB%A1%A4%EB%B0%B1.md)
- [ReviewResult·재검사 Revision·Product 이력의 결합](manual/review/05_%EA%B2%B0%EA%B3%BC_Revision_Product_%EC%97%B0%EA%B2%B0.md)
- [Default Offset·Zero Order·First Beam: 중심 기준과 보정값의 역할](manual/review/06_DefaultOffset_ZeroOrder_FirstBeam.md)
- [Align·Distortion·보호윈도우·복구: 자동 시퀀스의 데이터 경계](manual/review/07_Align_Distortion_%EC%9C%88%EB%8F%84%EC%9A%B0_%EB%B3%B5%EA%B5%AC.md)

## 근거 수준과 범위

파일/멤버/행별 문서는 Roslyn 구문 및 부분 의미 분석으로 생성했습니다. 별도 정적 추적 상세 해설장은 `manual/`에 따로 있습니다. 모든 줄에 설명이 있다는 것과 모든 줄의 물리 의미를 사람이 확정했다는 것은 다릅니다. 바인딩 `resolved`는 이 부분 컴파일의 연결이며 런타임 동적 구현을 보증하지 않습니다. `candidate/unresolved`, 비활성 전처리, WPF/SDK/설정 경계는 확인 대상으로 남깁니다.

DLL은 메타데이터만 기록하며 실행/역컴파일하지 않습니다. 측정·이력 CSV의 실제 레코드를 복제하지 않고 구조와 정의를 설명합니다. 장비 빌드/스크립트 실행/축 이동·가공은 수행하지 않았습니다. 기존 빌드 오류를 이 문서의 구문 분석 진단과 혼동하지 않습니다.

## 갱신

예약 분석은 A3Drilling/master 변경을 확인하고 구조 분석과 이 폴더의 파일 문서·호출 관계·그림·주석 해설·검색 자료를 함께 갱신합니다. 원본은 별도 읽기 전용 clone이며 Shared의 이 폴더와 해당 변경 분석 폴더만 게시합니다. 소스 Commit이 동일하고 문서도 최신이면 날짜만 바꿔 커밋하지 않습니다. 자세한 재생성 절차는 [도구 안내](tools/README.md)를 확인하세요.
