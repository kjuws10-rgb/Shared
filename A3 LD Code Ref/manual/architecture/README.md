# A3 전체 구조·데이터 흐름 상세 안내

이 묶음은 프로그램 시작부터 조건 파일·좌표·Script·Product·장치·동시성까지 연결해서 읽는 상세 장입니다. 파일별 전체 레퍼런스와 함께 사용합니다. 원본 코드에 주석을 추가하거나 장비 프로그램을 변경한 산출물이 아닙니다.

> 기준: `A3Drilling/master` · `28764c91d521777b8ee068dd7aaf2d3902ce9fe2`. 본 장은 해당 Commit의 소스를 정적으로 읽어 설명합니다. 정식 설비 빌드·장비 연결·가공을 실행한 결과가 아닙니다.


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

이번 갱신은 `96e22cd` → `28764c9`(Ver11.19.0)의 두 Commit을 반영합니다. AK Margin을 Recipe에서 공통 Setting으로 옮긴 생산자·소비자, AUTO 시퀀스 INIT, PM 진입·해제·수명 표시, 화면 캐시·취소, INSPECTION RUN/RESULT 구성을 현재 소스에 맞췄습니다. 이전 11.13/11.17 설명은 이력과 기존 잔건으로 구분해 보존합니다.

가장 큰 영향은 **공통 AK Margin을 바꾸면 여러 Recipe의 좌표 기준이 함께 바뀐다**는 점입니다. 옛 Recipe 값 자동 이관이나 저장된 보정의 기준 일치 검증까지 완료된 기능은 아닙니다. AUTO INIT은 PC 출력·작업 소유권·Action 상태를 정리한 후 감시를 다시 시작하며, PM은 UI 조작 잠금과 이력 호출을 연결합니다. Home·실제 설비 정지·수명 초과 자동 차단을 검증한 결과가 아닙니다.

Level은 오차 크기의 표시 등급이고 측정 JUDGE와 다릅니다. 현장 좌표·장비 동작·성능·정식 빌드는 미검증입니다. 원본 코드는 수정하지 않았으며 운영 측정 CSV 실제 행과 인증값은 문서에 복제하지 않습니다. 회의의 RecipeSet/Job Change·조건부 파워 보정·미확정 I/F 방향도 구현 사실과 구분합니다.
