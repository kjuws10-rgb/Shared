# Drilling.UI/Popup/CAutoReviewMonitorDialog.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 96e22cd027c84bf302b23f2949b98985d7f301bb |
| 원본 SHA256 | ea238e600c4df8565426d421d437b815841e50aa6d9745fa19d5ae49c892808c |
| 파일 분류 | code |
| 원본 크기/행 | 8,460 bytes / 89 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Popup/CAutoReviewMonitorDialog.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/19e5f1c0f23ea057aea8.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Popup/CAutoReviewMonitorDialog.xaml.cs |
| 이름 있는 요소 | MonitorPreview, MonitorTabs, NgGrid, LineGrid, FinalGrid |
| 이벤트 개수 | 2 |
| Binding 표현 개수 | 42 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| MonitorPreview | L36–36 |
| MonitorTabs | L40–40 |
| NgGrid | L41–41 |
| LineGrid | L53–53 |
| FinalGrid | L66–66 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| Click | CloseClicked | L22–22 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| MouseDoubleClick | LineDoubleClicked | L53–53 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

| Binding 표현 | 원본 범위 |
| --- | --- |
| {Binding Header} | L23–23 |
| {Binding ProgressText} | L24–24 |
| {Binding Status} | L25–25 |
| {Binding Tolerance} | L27–27 |
| {Binding Preview} | L28–28 |
| {Binding StageY} | L29–29 |
| {Binding ReviewX} | L30–30 |
| {Binding Mode} | L30–30 |
| {Binding Preview} | L36–36 |
| {Binding FocusText} | L39–39 |
| {Binding NgResults} | L41–41 |
| {Binding SelectedNg} | L41–41 |
| {Binding LineNo} | L43–43 |
| {Binding Head} | L44–44 |
| {Binding Cell} | L45–45 |
| {Binding Shot} | L46–46 |
| {Binding Beam} | L47–47 |
| {Binding Received} | L48–48 |
| {Binding Converted} | L49–49 |
| {Binding Excess} | L50–50 |
| {Binding Preview.Lines} | L53–53 |
| {Binding OrderNo} | L55–55 |
| {Binding StateText} | L56–56 |
| {Binding ResultSummary} | L57–57 |
| {Binding Statistics[0].Minimum} | L58–58 |
| {Binding Statistics[0].Maximum} | L59–59 |
| {Binding Statistics[0].Average} | L60–60 |
| {Binding Statistics[1].Minimum} | L61–61 |
| {Binding Statistics[1].Maximum} | L62–62 |
| {Binding Statistics[1].Average} | L63–63 |
| {Binding FinalVisibility} | L66–66 |
| {Binding FinalResults} | L66–66 |
| {Binding LineNo} | L68–68 |
| {Binding Head} | L69–69 |
| {Binding Cell} | L70–70 |
| {Binding Shot} | L71–71 |
| {Binding Beam} | L72–72 |
| {Binding Received} | L73–73 |
| {Binding Converted} | L74–74 |
| {Binding Judge} | L75–75 |
| {Binding OffsetStatus} | L83–83 |
| {Binding ResultFile} | L84–84 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Popup/CAutoReviewMonitorDialog.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
