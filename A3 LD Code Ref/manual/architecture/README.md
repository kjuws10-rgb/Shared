# A3 전체 구조·데이터 흐름 상세 안내

이 묶음은 프로그램 시작부터 조건 파일·좌표·Script·Product·장치·동시성까지 연결해서 읽는 상세 장입니다. 파일별 전체 레퍼런스와 함께 사용합니다. 원본 코드에 주석을 추가하거나 장비 프로그램을 변경한 산출물이 아닙니다.

> 기준: `A3Drilling/master` · `96e22cd027c84bf302b23f2949b98985d7f301bb`. 본 장은 해당 Commit의 소스를 정적으로 읽어 설명합니다. 정식 설비 빌드·장비 연결·가공을 실행한 결과가 아닙니다.


| 장 | 설명 |
|---|---|
| [01. 프로그램은 어떻게 시작되고 누가 무엇을 소유하는가](01-startup-and-composition.md) | 구성·초기화·화면 소유권 |
| [02. Recipe·Setting·JHMI·CSV를 함께 이해하기](02-recipe-settings-and-csv.md) | JHMI 정의·값·캐시·저장 순서 |
| [03. Recipe 좌표가 Head Script와 MOF 실행 입력이 되기까지](03-coordinate-script-and-mof.md) | Head·Offset·Encoder·Manifest |
| [04. Product와 Station: 기판 한 장을 끝까지 추적하기](04-product-and-station-lifecycle.md) | 기판 상태·결과·재시작·시퀀스 |
| [05. Device Interface·Automation1·Motion·MELSEC의 경계](05-device-interfaces-and-drivers.md) | 통신 등록·SDK 래퍼·Motion·MELSEC |
| [06. 스레드·스냅샷·취소·로그를 이용해 멈춤과 오동작 찾기](06-threading-snapshots-and-logs.md) | 잠금·취소·상태 취득·로그 |
| [07. 변경 영향 검토와 Offline Studio에서 이 문서를 쓰는 방법](07-change-impact-and-offline-reference.md) | 변경 영향·출처·검색·유지보수 |
| [08. 알람 원인 분석: 전후 로그에서 무엇을 알 수 있는가](08-alarm-cause-analysis.md) | 기준시각·비교구간·후보 규칙·NG 요약·표시 한계 |

모든 그림은 오프라인에서도 읽을 수 있는 로컬 SVG와 Mermaid 원문을 함께 제공합니다. SVG는 설명용 구조도이며 실장비 타이밍 도면이 아닙니다. `diagram-spec.json`은 노드/연결을 재사용하기 위한 데이터입니다.

이번 갱신은 Ver11.17.0의 `dfa5920` → `96e22cd` 두 Commit을 기준으로 Head별 DOE 장착 설정, Default 검사점 분기·로그 열, Review 등급·색상 Setting, INSPECTION 화면 통합, Shot 지도 그리기와 Shift 미리보기를 반영했습니다. 11.13.0에서 도입된 보호윈도우·알람 분석·Product 저장 경계도 현재 소스에 맞춰 유지했으며, 이번에 고친 기능과 기존 잔건을 구분합니다.

핵심은 **Head별 DOE OFF는 Default에서 중앙 1점 검사로 바꾸고, 새 Level은 오차 크기의 표시 등급을 바꾼다**는 점입니다. DOE OFF가 일반 가공·다른 Review의 선택 Beam을 자동 변경하거나, Level 색상이 측정 JUDGE를 바꾸는 기능으로 해석하면 안 됩니다. 코드 단위·수식·분기는 정적으로 확인했으며 장비 동작·물리 좌표·성능 수치는 실행 검증하지 않았습니다. 운영 측정 CSV의 실제 행과 현장 접속값은 싣지 않습니다.
