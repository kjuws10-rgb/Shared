# 01 · Commit 변경 요약

- 원본 저장소: https://github.com/kjuws10-rgb/A3Drilling.git
- 분석 브랜치: master
- 원본 최신 Commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
- 비교 기준 Commit: 334b3599651b2e8e0181fd4459bafaf3cddafff3

## 비교 기준의 선택

Shared main `02939095d93863f4a7686e9014eac1f7a01a4f6d`에서 날짜형 분석 폴더 9개를 확인했습니다. 기존 `YYYYMMDD_HHMMSS` 형식도 함께 탐색했으나 해당 형식 폴더는 없었습니다. 최신 `20261121_085657_SW아키텍쳐분석/README.md`가 원본을 정확히 A3Drilling/master로 명시하므로 그 원본 Commit을 기준으로 삼았습니다. 다른 저장소의 Commit이나 Manual 기능 브랜치는 비교에 사용하지 않았습니다.

## 이번 Commit

`0219666f9053b907d96d7e0aa7d0c6c1be3a73d4`의 메시지는 **Ver 11.23.0**, Commit 날짜는 2026-11-24입니다. 프로그램 프로젝트 버전도 **2026.11.19.0 → 2026.11.23.0**으로 바뀝니다. 보고서 작성 날짜와 프로그램 버전은 서로 다른 항목입니다. [프로젝트 버전](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Drilling.UI.csproj#L17-L24)

| 변경 파일 | 핵심 변경 | Git 추가/삭제 |
|---|---|---:|
| CStageGlassDataMap.cs | Stage 기판 43필드·44map 정의, 새로 읽기와 필수 ID 검사 | +157 / 0 |
| CMelsec.cs | SIM에서만 기판 문자열/WORD 입력 가능 | +37 / 0 |
| CProductManager.cs | productFields 분리, 필드 목록 공통화, PRODUCT_RESULT 분리 | +19 / −73 |
| CMelsecMapFile.cs | 기본 map 생성에 Stage Glass Data 추가 | +22 / −1 |
| CProductFile.cs | Product 필드 전체를 예약 필드로 처리 | +2 / −17 |
| CMenuMonitor.cs | Stage/Dummy/취소 선택, 기판정보 표시 확대, MELSEC 그룹 Refresh | +100 / −27 |
| StageSimulation XAML·CS | 문자열 입력 및 Glass Data 항목 추가 | +35 / −11 |
| CRecipeConfirmDialog.xaml.cs | 세 가지 기판 생성 선택 | +24 / 0 |
| CMonitorView.xaml | 기판정보 스크롤·폭, 그룹 선택/갱신 UI | +48 / −4 |
| UI.csproj | 버전 변경 | +1 / −1 |

전체 파일 범위와 코드 변경 경로는 [검증 기록](06_근거와검증.md)에 연결합니다.

## 기능별 전후

- **기판 생성:** 기존 로컬 Dummy 생성에서, Stage 정보 또는 Dummy를 사용자가 선택하도록 바뀝니다. Stage 읽기가 실패하면 Dummy로 조용히 대체하지 않고 생성 실패를 알립니다. [선택·읽기·실패 처리](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L4448-L4495)
- **제품 판정:** 예전 공정 결과도 쓰던 `JUDGEMENT`와 새 공정 결과 `PRODUCT_RESULT`를 구분합니다. 이전 Product 읽기는 새 필드가 비어 있으면 JUDGEMENT를 읽는 호환 분기가 있습니다. [공정 판정 호환](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Product/CProductManager.cs#L1049-L1057)
- **MELSEC 화면:** 선택한 그룹을 실제 조회 그룹에 반영하는 Refresh 버튼이 생깁니다. 그룹 선택만으로 PLC 값 쓰기를 수행하는 변경은 아닙니다. [그룹 갱신](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2911-L2941)
- **SIM 입력:** ASCII 문자열은 WORD 길이×2 이하, WORD는 0~65535를 검사하고 실제 장비 모드에서는 해당 SIM 설정 API를 거절합니다. [SIM 입력 가드](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Interface/Melsec/CMelsec.cs#L3060-L3095)

## 데이터 파일의 변경도 별도 평가

Recipe는 43,375행 중 42,826행의 값이 달랐습니다. 그중 CELL 항목은 모두 Align Offset X/Y 42,822개이며, 나머지는 Review 허용값 X/Y와 Process Count 2개입니다. 열·키의 신규 설계 변경과 저장값 갱신을 구분했습니다. Recipe 원문 값은 게시하지 않습니다.

Data 변경은 Align Offset 115, Review Auto 109, ZeroDefence 113, BufferedRun 생성 Script 1,140, ActiveProduct·Product 이력·Manual 작업 세션 각 1개입니다. 생성 Script는 **파일 존재·개수**만 분류했고 실행/업로드하지 않았습니다. Data의 세션 자료가 존재한다고 master에 별도 Manual Inspection UI가 통합됐다고 판단하지 않습니다.
