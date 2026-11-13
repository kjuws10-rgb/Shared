# A3 전체 구조·데이터 흐름 상세 안내

이 묶음은 프로그램 시작부터 조건 파일·좌표·Script·Product·장치·동시성까지 연결해서 읽는 상세 장입니다. 파일별 전체 레퍼런스와 함께 사용합니다. 원본 코드에 주석을 추가하거나 장비 프로그램을 변경한 산출물이 아닙니다.

> 기준: `A3Drilling/master` · `5aee8e58439c9b455cae7c9593c9be986c3e682e`. 본 장은 해당 Commit의 소스를 정적으로 읽어 설명합니다. 장비 연결·가공·컴파일을 실행한 결과가 아닙니다.


| 장 | 설명 |
|---|---|
| [01. 프로그램은 어떻게 시작되고 누가 무엇을 소유하는가](01-startup-and-composition.md) | 구성·초기화·화면 소유권 |
| [02. Recipe·Setting·JHMI·CSV를 함께 이해하기](02-recipe-settings-and-csv.md) | JHMI 정의·값·캐시·저장 순서 |
| [03. Recipe 좌표가 Head Script와 MOF 실행 입력이 되기까지](03-coordinate-script-and-mof.md) | Head·Offset·Encoder·Manifest |
| [04. Product와 Station: 기판 한 장을 끝까지 추적하기](04-product-and-station-lifecycle.md) | 기판 상태·결과·재시작·시퀀스 |
| [05. Device Interface·Automation1·Motion·MELSEC의 경계](05-device-interfaces-and-drivers.md) | 통신 등록·SDK 래퍼·Motion·MELSEC |
| [06. 스레드·스냅샷·취소·로그를 이용해 멈춤과 오동작 찾기](06-threading-snapshots-and-logs.md) | 잠금·취소·상태 취득·로그 |
| [07. 변경 영향 검토와 Offline Studio에서 이 문서를 쓰는 방법](07-change-impact-and-offline-reference.md) | 변경 영향·출처·검색·유지보수 |

모든 그림은 오프라인에서도 읽을 수 있는 로컬 SVG와 Mermaid 원문을 함께 제공합니다. SVG는 설명용 구조도이며 실장비 타이밍 도면이 아닙니다. `diagram-spec.json`은 노드/연결을 재사용하기 위한 데이터입니다.
