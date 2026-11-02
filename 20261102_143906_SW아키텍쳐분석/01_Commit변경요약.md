# Commit 변경과 코드 연결

## 파일 수와 실제 기능 변경을 구분하기

새 Commit `8872e4ed`는 기준 `99d78ddf`의 직접 자식입니다. 중간 Commit은 없습니다. Git에 등록된 전체 경로는 11,163개에서769개로 줄었습니다. 특히 bin·obj 등 생성물이 크게 삭제됐고, 나뉘어 있던 partial 파일과 보조 클래스를 주파일 안으로 합쳤습니다.

| 분류 | 변경 경로 수 | 해석 |
| --- | --- | --- |
| 생성물 경로 | 10,336 | bin obj buildcheck 등의 변경이며 기능 개수가 아님 |
| 일반 소스 | 264 | cs xaml csproj sln 중 생성물 제외 |
| Config | 24 | 맵·정의·레시피 값 및 보정 파일 |
| Data | 90 | 결과·생성 Script·좌표 목록 등 실행 흔적 |
| 시험 | 7 | 기존 MELSEC 회귀 프로젝트 및 관련 파일 삭제 |
| 안내 문서 | 1 | 기존 MELSEC 설명 문서 삭제 |
| 기타 | 11 | gitignore 및 나머지 파일 |

이 표는 `git diff --no-renames`로 전체 경로를 비교한 결과입니다. 추가120·삭제10,514·수정99개, 합계10,733개입니다. 기본 Git의 제한된 rename 탐지는 10,732개와 +1,698,700/−431,016을 표시하며 exhaustive rename detection 생략 경고를 냅니다. 두 집계 기준을 섞지 않았습니다. GitHub compare API의 파일 목록도 300개까지만 반환되므로 전체 목록 근거로 쓰지 않았습니다.

## 주요 코드가 옮겨간 위치

| 역할 | 이전 분산 위치의 예 | 최신 위치와 내용 |
| --- | --- | --- |
| MELSEC | CMelsec.Polling Connection NetApi 파일 | [CMelsec 주파일](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Interface/Melsec/CMelsec.cs#L2449-L2589)에 Poll과 DTO 통합 |
| Stage 요청 | CStageRequestSequence의 Process Review partial | [CStationProcess 주파일의 Stage 준비](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L3749-L3830)와 신규 공통 StageReviewSequences |
| Stage Review 이동 | 기존 개별 경로 | [CStageReviewSequences](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStageReviewSequences.cs#L10-L80)의 이동 소유권과 요청 세션 |
| Main 표시 | Interlock RunOption ReviewMonitor 보조 파일 | [CMenuMain 내부 클래스](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2285-L2320) 등으로 통합 |
| 광학 인터락 | CDoeZInterlock COpticInterlock | [CInterLockManager의 판정 메서드](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/InterLock/CInterLockManager.cs#L124-L249)로 이동 |
| Review 범위·결과 | ReviewManager의 여러 partial | [CReviewManager](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Review/CReviewManager.cs#L2307-L2405)에 실행 모드별 경로 통합 |
| 보정값 병합 | Recipe 보조 파일 | [CShotCoordinatePlanBuilder](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L1096-L1160)의 입력 검증·적용 |

생성물을 제외한 코드 파일은 351개에서192개입니다. 최신 `CMenuManual.cs`는8,715줄, `CMenuMonitor.cs`는7,621줄, `CStationProcess.cs`는5,828줄입니다. 찾을 파일 수는 줄었지만 각 파일의 책임은 커졌습니다. 같은 이름의 클래스가 이동했다는 사실만으로 동작이 완전히 같다고 판단하지 않았습니다.

## 실제로 사라진 연결

1. **로그 구현**: Common의 로그 소스 6개가 삭제됐는데 `CManager`·`CProductManager`·`CInterfaceManager`·`CMelsec`·`CReviewManager`·Station이 계속 참조합니다. [앱 초기 생성](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/CAppStartup.cs#L20-L36)도 로그 객체를 요구합니다. 최신 빌드의 19개 초기 오류가 이 문제입니다.
2. **지난 MELSEC 전용 개선**: `GetPollingDiagnostics`와 진단 record, 최대4블록/8ms 추가 Poll, Readback 대기 중 일반 Read 처리, UI100ms 전용 표시 경로가 현재 소스에는 없습니다. [현재 Run](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Interface/Melsec/CMelsec.cs#L191-L215)과 [현재 Poll](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Interface/Melsec/CMelsec.cs#L2664-L2735)이 이전 실행 방식으로 돌아갔습니다.
3. **Review 설정 파일 서비스**: CReviewSettingFile·Base·앱 주입이 제거됐습니다. 현재 [시작 구성](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.UI/CAppStartup.cs#L15-L70)에는 `.review` 저장 서비스를 만들고 전달하는 경로가 없습니다. 이전 버전의 [설정 파일 구현](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/99d78ddf0e680b55dbd9662764b71a1ffe93a457/Drilling.File/Review/CReviewSettingFile.cs#L1-L55)과 구분해 비교해야 합니다.
4. **회귀 보호 장치**: MELSEC 회귀 프로젝트2개가 삭제돼 이전19개·30개 시험을 최신에서 실행할 수 없습니다. 이전 성공 결과를 이번 성공 결과로 옮기지 않았습니다.

## 이번에 확장한 호출 관계

가공 완료를 확인하는 Station은 [정상 완료 매수 증가](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L3593-L3619)를 호출합니다. RecipeManager는 File 계층에 현재 매수 한 행만 저장하도록 요청하고, 이후 메모리의 레시피 캐시도 갱신합니다. [RecipeManager 매수 API](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Managers/CRecipeManager.cs#L153-L168) → [파일 갱신](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1395-L1452) → Stage 보고 순서입니다.

Stage 요청은 가공 속도와 실제 가공 완료값도 따로 게시합니다. [CStageProcessDataPublisher](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStationProcess.cs#L4462-L4490)의 `W8032`는 속도, `W8034`는 실제 가공 완료입니다. 전체 Process 핸드셰이크 완료 `W820C`와 같은 뜻이 아닙니다.

새 공통 StageReviewSequences를 통해 AUTO PtoP 이동을 준비하지만, [실IOF 배열 준비](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Station/CStageReviewSequences.cs#L513-L524)는 명시적으로 예외를 발생시킵니다. 인터페이스 이름이나 맵 주소 추가를 전체 시퀀스 구현 완료로 해석하지 않아야 합니다.

## 유지보수에 미치는 영향

WPF UI → Common 업무 관리자 → 장치 인터페이스, 그리고 File 저장 계층이라는 3개 프로젝트의 큰 방향은 유지합니다. 다만 큰 파일 안에 여러 클래스와 region이 있으므로 이후 검토는 파일명만이 아니라 클래스명·메서드명까지 찾아야 합니다. 신규 파일 삭제가 발견되면 대응 타입과 호출자가 살아 있는지 먼저 확인하고, 컴파일·순수 계산·시뮬레이션·실기 검증을 따로 수행하는 것이 안전합니다.
