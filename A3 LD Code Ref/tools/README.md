# 코드 레퍼런스 재생성 도구

일반 사용자는 상위 `index.html`을 열어 검색하거나 `offline-studio/README.md`의 첨부 순서를 따릅니다. 이 폴더는 문서 유지보수 담당자를 위한 도구입니다. 장비 코드를 빌드하거나 실행하는 도구가 아닙니다.

## 필요한 환경

- Git, Python 3.10 이상, .NET SDK 10 이상. Roslyn은 SDK에 포함된 DLL을 참조합니다.
- 별도 읽기 전용 A3Drilling clone, 현재 Shared clone, 충분한 임시 저장 공간.
- 네트워크는 새 Git Commit을 가져오고 Shared에 게시할 때 필요합니다. 추출·그림·HTML·검증은 로컬에서 수행합니다. `SymbolExtractor/NuGet.config`는 원격 패키지 소스를 비웁니다.

## 읽기 전용 원본과 새 출력 폴더 준비

아래 `D:\A3RefWork`는 예시입니다. 자신의 경로로 바꿉니다. 기존 작업 중인 개발 폴더와 장비 실행 폴더를 원본 분석용으로 사용하지 않습니다. 공유 작업물은 보존하며 Git 인증정보는 명령이나 문서에 넣지 않습니다.

```powershell
git clone --branch master --single-branch https://github.com/kjuws10-rgb/A3Drilling.git D:\A3RefWork\source-readonly
git -C D:\A3RefWork\source-readonly remote set-url --push origin DISABLED
git -C D:\A3RefWork\source-readonly status --porcelain
git -C D:\A3RefWork\source-readonly rev-parse HEAD
```

Shared main을 먼저 최신화하고 현재 폴더의 `manual/`을 수동 해설 원본으로 사용합니다. 자동 추출 전에 변경된 코드와 관련 호출자·소비자를 읽고 해당 상세장을 고칩니다. 원본·수동 입력·출력은 서로 중첩되지 않는 경로를 사용합니다. 출력이 원본의 상위 폴더인 경우도 금지합니다. 생성 출력은 매번 비어 있는 새 staging으로 만들고, 게시 폴더에서 직접 재생성하지 않습니다. 출력 재사용 시 오래된 JSONL 조각이나 삭제된 파일 문서가 남을 수 있습니다. 원본이 변경되지 않았고 문서와 검증도 최신이면 재생성하지 않습니다.

## 추출 → 생성 → 검증

현재 디렉터리가 `A3 LD Code Ref`라고 가정합니다. `--output`은 원본 clone 및 현재 게시 폴더와 다른 새 staging 경로로 지정합니다. `manual/`은 읽는 입력이며 새 결과는 staging에 생성됩니다.

```powershell
dotnet run --project tools\SymbolExtractor -c Release -- --self-test
python tools\test_reference.py --report D:\A3RefWork\generator-regression.json
dotnet run --project tools\SymbolExtractor -c Release -- --source D:\A3RefWork\source-readonly --out D:\A3RefWork\metadata\source-model.json
python tools\build_reference.py --source D:\A3RefWork\source-readonly --model D:\A3RefWork\metadata\source-model.json --manual manual --output D:\A3RefWork\staging\A3Ref
python tools\validate_reference.py --source D:\A3RefWork\source-readonly --output D:\A3RefWork\staging\A3Ref --report D:\A3RefWork\validation.json
```

첫 추출은 코드 전체를 한 문서 분석용 부분 컴파일로 구성합니다. WPF·벤더 SDK·프로젝트별 정식 빌드를 재현하지 않습니다. 따라서 분석 진단 수를 장비 빌드 오류 수로 보고하면 안 됩니다. 로컬 함수는 원본 경로/선언 위치를 ID에 포함해 동명 함수가 섞이지 않게 합니다. 18개 추출기 합성 회귀검사에는 동명 로컬 함수, record·primary constructor·partial·init, enum/operator/indexer 및 다중 필드 초기화 호출·연산 소속 검사가 포함됩니다. Python 합성 회귀 11개는 XAML 이벤트/생성 필드 후보, 민감 셀 미복제, 원문 복원과 생성 출력의 선택 자료 분리, 물리 CRLF→LF 정규화와 EOL 마커 앞 원문 공백 보존, 추가 XAML 이벤트 5종과 PasswordChanged, 생성기 목록과 독립된 XML 검증, 코드 비하인드 EventArgs 핸들러 후보, 원본/수동 입력과 출력의 양방향 중첩 차단, backtick/tilde 코드 블록과 같은 문자로 된 닫기 경계를 임시 fixture에서 확인합니다.

현재 문서 생성기는 1.1.4, 검증기는 1.1.3, Roslyn 추출기는 1.0.3입니다. manifest의 `generatorVersion`과 `extractorVersion`을 따로 기록합니다. 기존 UTF-8/LF·경로 중첩 차단과 PasswordChanged 보존을 유지하며, 생성기 1.1.4는 backtick과 tilde 코드 블록을 모두 HTML pre/code로 렌더링합니다. 검증기 1.1.3도 같은 문자·충분한 길이로 닫힌 두 종류의 코드 블록을 인식해 내부 예제 링크를 문서 이동 링크로 오인하지 않습니다. 비밀번호 값이나 입력 내용을 추출하는 변경이 아닙니다. 검증기는 생성기에서 가져오지 않는 독립 이벤트 목록과 기존 XML/코드 비하인드 EventArgs 후보 검사를 유지합니다. 이 후보는 런타임 이벤트 연결 확정이 아닙니다. 멤버 수는 명시적인 C# 원문 선언 기준이며 컴파일러가 합성하는 record 속성·primary constructor 멤버와 WPF 생성 필드를 원문 멤버로 주장하지 않습니다. XAML의 이름 있는 요소·이벤트·Binding은 원본 줄 범위를 포함해 `metadata/xaml/`에 별도로 보존합니다. 이 목록은 런타임 바인딩 성공을 증명하지 않습니다.

## 검증과 게시

1. 모든 Git 추적 경로가 개별 문서·그림·목차에 있는지, 모든 멤버 ID가 고유한지 확인합니다.
2. annotation의 `L번호 | 원문 ⟦EOL⟧`에서 앞 번호와 뒤 경계표시만 제거하면 원본 행이 복원되는지 검사합니다. `⟦EOL⟧`은 끝 공백을 문서에서 보존하기 위한 표시로 실행용 소스 문자가 아닙니다. 원본 파일 SHA는 원래 바이트로 계산합니다.
3. RAG source Commit/SHA/줄/원문과 소스 링크, 내부 MD/HTML 링크, SVG XML, UTF-8, 코드 블록을 검증합니다. 큰 JSONL은 전송 단위로 나누며 내용의 임의 크기 제한으로 생략하지 않습니다.
4. `index.html`을 네트워크 차단 상태에서 열고 경로·함수명·한국어 키워드 검색, 종류 필터, 파일/해설 이동, 모든 핵심 그림을 확인합니다.
5. 실제 소스를 추적한 상세장과 자동 구문 설명을 독립 담당자가 교차검토합니다. 새 장비 동작의 검증은 별도 승인된 시뮬레이션·빌드·현장 평가 계획에 남깁니다.
6. 삭제/이름 변경된 경로는 이전 manifest와 비교해 **생성 영역에서만** 반영합니다. 기존 수동 해설·검증 기록·도구·타인의 파일을 통째로 삭제하지 않습니다. 검증된 새 결과와 수동 해설, 도구, CHANGELOG, manifest만 게시 폴더에 병합합니다.
7. Shared main을 다시 확인하고 이번 `A3 LD Code Ref/` 및 해당 실행의 신규 아키텍처 분석 폴더 밖의 파일이 섞이지 않았는지 검사합니다. `git diff --check` 후 정상 fast-forward 경로로 Commit·Push합니다. 강제 Push로 타인의 변경을 덮어쓰지 않습니다.

생성 도구만으로 SDK 내부 동작, 런타임 인터페이스 구현, UI 이벤트·Reflection의 모든 경로, 물리 좌표 부호나 단위, 장비 안정성을 확정할 수는 없습니다. 미해결 관계와 확인이 필요한 가정은 명시해서 남깁니다.

## 출력 구조

| 경로 | 목적 |
|---|---|
| `files/` | 전체 추적 파일별 Markdown, 타입/멤버·입력/반환·호출·연산·검증 항목 |
| `pages/`, `index.html` | 서버·CDN 없이 열리는 HTML 검색/설명 |
| `annotated/` | 모든 대상 소스 행과 분리된 행별 해설, 문서 사본 |
| `diagrams/`, `manual/**/diagrams/` | 파일 관계와 주요 흐름 SVG; 상세장에는 Mermaid 원문도 제공 |
| `metadata/` | 버전·파일 SHA·고유 심볼·정적 관계; 전체 대형 추출 JSON은 게시하지 않고 파일 단위로 나눔 |
| `manual/` | 소스를 별도 추적해 작성하고 교차검증한 핵심 상세장 |
| `offline-studio/` | 한 파일 기본 첨부 Markdown, 생성물 선택 자료, 구조화 JSONL |
| `validation/` | 정적 검증 결과, 에이전트 교차검증·한계 기록 |

SDK 바이너리를 문서 본문에 복제하거나 역컴파일하지 않습니다. 운영/측정 CSV의 데이터 본문은 생략하고 스키마만 제공합니다. 이 자료를 첨부하는 것은 검색 지식을 갱신하는 것이며 모델 가중치를 학습시키는 동작이 아닙니다.

CSV·bak 파일은 개별 문서/그림/목차에 포함하되 annotation 원문 사본을 만들지 않습니다. JHMI 정의 표는 앞 4개 정의 필드만 쓰고 인증 키가 있는 행은 제외하며 사설 IP가 있는 셀은 미복제로 표시합니다. 설정의 임의 텍스트 본문을 비밀값 탐지로 완전히 보호한다고 주장하지 않으므로 새 텍스트 설정은 게시 전에 별도 검토합니다. `Data/`에서 나온 검색 근거는 선택 Markdown으로 보내고 생성기 C# 원문은 기본 Markdown에 둡니다. JSONL에는 두 범위를 모두 보존합니다.
