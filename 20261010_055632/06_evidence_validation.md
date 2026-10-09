# 06. 분석 근거와 검증 기록

## 분석 기준 / 변경하지 않은 범위

- Shared main을 먼저 ff-only 최신화: 기존 작업을 보존한 상태로 `cf96dd12a71217d7c010ac36f73d3c3939d17764` 확인.
- Shared 최신 정확한 날짜_시간 폴더 중 A3 README: 20261006_100139. 원본 Commit a25ba3cdfd70cff5d78172d13ec957318704b1e1.
- 원본 main: 05215afc0621fc38f7e29bcdf4d1b9d2bface72f. 분석 끝 무렵 ls-remote 재확인도 같은 값.
- 원본 분석 Clone의 origin fetch는 GitHub 원본, **push URL은 DISABLED**.
- 분석 Clone에는 파일 수정/추가/삭제/빌드 없음. git status --porcelain 빈 출력 확인.
- 별도 검증 Clone에서만 빌드와 AnalysisHarness 추가/테스트 수행. 검증 Clone도 push 비활성.
- 사용자 기존 checkout, 원본 Config/레시피/코드/원격에는 쓰기 없음. Shared에는 이번 폴더만 추가.
- 장비/GUI/레이저를 동작시키지 않았고 Controller Reset, DIO ON, MELSEC 쓰기를 시험하지 않음.

## 빌드

Windows / .NET SDK 10.0.400, net8.0 및 WPF net8.0-windows 대상. 검증 Clone에서:

```powershell
dotnet build Drilling.sln -c Debug --nologo -v minimal
```

성공. **경고 0 / 오류 0**. 최초 실행 36.51초. 마지막 재확인 출력은 [build.txt](evidence/build.txt). 솔루션에서 Regression 프로젝트 참조가 제거되어 있으므로 이것은 내장 회귀검증을 실행했다는 뜻이 아닙니다.

## 별도 소프트웨어 확인 14개

이전 DLL은 별도 20261002 검증 Clone의 Common DLL을 사용했습니다. 해당 checkout HEAD가 a25ba3cdfd70cff5d78172d13ec957318704b1e1임을 확인했으며, 분리된 AssemblyLoadContext로 구 버전 좌표 계산기를 호출했습니다. 최신 test0929+Option/Motor 설정을 구/신 계산기에 동일하게 넣어 비교했습니다. 이전 DLL 바이너리의 완전한 재빌드 재현성까지 검증한 것은 아닙니다.

| 번호 | 확인 | 결과 |
| --- | --- | --- |
| T01 | 새 Offset/Shift 기본0인 경우 모든 Scanner X/Y/Encoder값 구/신 비교 | 20,740개 동일 |
| T02 | Shift(2,3)+FirstBeam(0.4,0.5) 축 변환 | 검증 첫 Head H02: 변화 X=3.5, Y=2.4 |
| T03 | ShiftY=3 Encoder 대기 변화 | -121012.5 → -118012.5 |
| T04 | Shift/FirstBeam 이후 Design/Stage/Head 보존 | 동일 |
| T05 | Shift만 변경한 모든 샷의 Masking 판정 | 동일 |
| T06 | ONEWAY Chess2의 행+열 필터 | 기존 열조건 10,370 → 새 5,490 |
| T07 | 전용 파일 없을 때 | 빈 행 목록 반환 |
| T08 | CSV 저장/재읽기 | 0.1234567 → 0.123457, -0.75 유지 |
| T09 | 기존 inline Review Offset 제거 | 키 삭제 확인 |
| T10 | zz_manual.csv를 폴더에 추가 | 시간과 무관하게 파일명 기준으로 선택 |
| T11 | 더 뒤에 정렬되는 잘못된 헤더 파일 | 예외, 이전 정상파일 fallback 없음 |
| T12 | NaN과 빈 Offset 숫자 | NaN 허용, 빈 값0. 위험 동작 재현 |
| T13 | ShiftX=10000 영역 검사 | 적용 거부 메시지 반환 |
| T14 | A1만 새 값으로 병합, 기존 A2 보존 | A1 교체/A2 보존 |

“통과”는 위 관찰과 프로그램 결과가 일치한다는 뜻입니다. T12는 안전 검사를 통과했다는 뜻이 아닙니다. 결과 JSON: [verification_results.json](evidence/verification_results.json).

Fixture 입력/CSV는 검증 Clone 내부에만 생성했습니다. 테스트 작성 중 System.IO import 위치 및 잘못된 최신 파일명 정렬 가정을 고쳤고, 최종 실행은 14개 모두 성공했습니다. 원본 코드를 고쳐 통과시킨 것이 아닙니다.

검증 코드: [Program.cs](evidence/AnalysisHarness/Program.cs), [프로젝트](evidence/AnalysisHarness/AnalysisHarness.csproj). 재실행하려면 이 AnalysisHarness 폴더를 별도의 검증 checkout 최상위에 복사하고, 이전 버전 Common DLL 경로를 인자로 지정하십시오.

```powershell
dotnet run --project AnalysisHarness/AnalysisHarness.csproj -- "<검증 checkout 절대 경로>" "<이전 Common DLL 절대 경로>"
```

이 프로그램은 순수 계산/파일 테스트만 수행하지만 UI 프로젝트를 참조하므로 Windows WPF 개발 환경이 필요합니다. 생산 Config를 대상으로 실행하지 마십시오.

## 현재 저장소 test0929 결과 해석

전체 후보 20,740, 기본 Masking 제외 후 Laser ON 후보 19,525, Chess 제외0. H01 후보 2,380. 이 수는 Head 활성 필터와 Script 진입 보간 이동을 모두 합한 실제 발사 명령 수가 아닙니다.

| H01 | ScannerGx | ScannerGy | EncoderWait |
| --- | --- | --- | --- |
| 처음 | -501.0125 | -28.4875 | -501012.5 |
| 마지막 | -1344.2125 | 44.4125 | -1344212.5 |

현재 원본 설정으로 구/신 계산값은 같습니다. 이전 대화의 희망 축 순서와 다르다는 관찰만 남기고, 이 자동 분석에서 Config를 조정하지 않았습니다. 최신 Offset 파일로 가공 준비 전체를 시험한 숫자가 아니라 직접 Coordinate Builder의 현 checked-in 입력을 계산한 결과입니다.

## 소스 근거 지도

모든 아래 링크는 최신 원본 Commit에 고정하며 실제 파일 존재와 줄 범위를 검사했습니다.

| 담당 | 근거 |
| --- | --- |
| 시작과 담당자 연결 | [CAppStartup.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CAppStartup.cs#L15-L39) |
| 가공/Head 자료 | [CStationManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationManager.cs#L75-L83) |
| Shot 새 필드 | [CShotCoordinatePlanBuilder.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L1-L35) |
| Shift/FirstBeam 계산 | [CShotCoordinatePlanBuilder.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L98-L131) |
| 기존값 제거/CSV 합치기 | [CStationProcess.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationProcess.cs#L1708-L1768) |
| Mask/Chess | [CRecipeShotMaskingPlan.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CRecipeShotMaskingPlan.cs#L163-L173) |
| Offset 파일 구조 | [CReviewManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L324-L356) |
| Offset 파일 저장/선택 | [CReviewOffsetFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L7-L154) |
| 보정 합산/저장 | [CMenuCorrection.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1115-L1256) |
| 그룹 키/병합 | [CMenuCorrection.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1830-L1907) |
| 레시피 동적 항목 | [CJhmiRecipeFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CJhmiRecipeFile.cs#L690-L708) |
| Shift 팝업/검사 | [CRootView.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.cs#L1239-L1417) |
| MAIN START | [CRootView.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CRootView.cs#L1512-L1562) |
| Review 후보/선택 캐시 | [CReviewManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L143-L225) |
| Review 재계산 | [CReviewManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1240-L1357) |
| Review 이동 TODO | [CReviewManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1939-L2001) |
| Stage/CAMERA 수동 | [CMenuManual.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1231-L1308) |
| Reset 순서 | [CMenuManual.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuManual.cs#L1432-L1488) |
| Script 출력 | [CAutomation1ScriptFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Script/CAutomation1ScriptFile.cs#L112-L183) |
| Script 폴더/시뮬레이터 | [CAutomation1ScriptFile.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Script/CAutomation1ScriptFile.cs#L572-L622) |
| Product 연결 | [CStationProcess.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationProcess.cs#L1521-L1579) |

## 문서 검증과 공유 정책

- 7개 Markdown 문서의 내부 링크/파일 존재, 소스 Commit 고정/줄 범위, 코드 블록 짝, 잘못된 문자(U+FFFD/제어문자), Mermaid 노드/연결 형식 확인.
- Mermaid는 Markdown 소스 형태로 제공. 실제 렌더러의 화면 출력은 이번에 검증하지 않았습니다.
- [전체 변경 목록](evidence/all_changes.tsv) 1,208행, [소스 통계](evidence/source_changes.tsv) 68행, [Commit 기록](evidence/commit_log.txt).
- [문서 검증 결과](evidence/document_validation.json).
- git diff --check 및 git diff --cached --check 수행.
- Shared remote를 재확인하며 ff-only 또는 이번 Commit만 안전하게 재배치. 타인의 변경 덮어쓰기/force push 없음.
- 이번 날짜_시간 폴더만 Commit/Push. 최종 Shared Commit 링크는 대화에 보고.

아직 시험하지 않은 항목: 장비 안전 범위/인터록, 실제 Laser 발사, MELSEC 이동 Handshake, GUI 모드 전환 및 동시 조작, 동시 파일 저장 경쟁, Shift 후 Camera 시야, 생산 레시피 보정 이전. 이 한계들은 코드 변경을 하지 않은 분석 결과입니다.
