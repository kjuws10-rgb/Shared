# Drilling.UI/Popup/CControllerResetSequenceDialog.xaml

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 334b3599651b2e8e0181fd4459bafaf3cddafff3 |
| 원본 SHA256 | 4400d0f6c4eb8d59ea35d09db817ce8e7e5e79d1600615c78056f4d8ca11cfa5 |
| 파일 분류 | code |
| 원본 크기/행 | 17,518 bytes / 287 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/334b3599651b2e8e0181fd4459bafaf3cddafff3/Drilling.UI/Popup/CControllerResetSequenceDialog.xaml) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/bd8c9feaed45a1538f31.svg)

## 화면 구성과 코드 비하인드 연결

| 항목 | 추출 값 |
| --- | --- |
| 코드 비하인드 후보 | Drilling.UI/Popup/CControllerResetSequenceDialog.xaml.cs |
| 이름 있는 요소 | ItemBorder, ToggleButton, Shell, SelectedText, PART_Popup, TargetComboBox, SequenceBlocksControl, StatusText, StartButton, StopButton, CloseButton |
| 이벤트 개수 | 5 |
| Binding 표현 개수 | 8 |

이름 있는 요소는 WPF가 필드를 생성할 수 있는 XAML 선언입니다. 문서 추출기는 WPF 생성 코드를 만들거나 로드하지 않으므로 C# 원문 멤버 수에 합산하지 않습니다.

| 요소 이름 | 원본 범위 |
| --- | --- |
| ItemBorder | L47–47 |
| ToggleButton | L85–85 |
| Shell | L91–91 |
| SelectedText | L97–97 |
| PART_Popup | L130–130 |
| TargetComboBox | L192–192 |
| SequenceBlocksControl | L203–203 |
| StatusText | L244–244 |
| StartButton | L261–261 |
| StopButton | L268–268 |
| CloseButton | L277–277 |

| 이벤트 | 핸들러 이름 | 원본 범위 | 해석 |
| --- | --- | --- | --- |
| Closing | OnWindowClosing | L14–14 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| SelectionChanged | OnTargetSelectionChanged | L195–195 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OnStartClicked | L267–267 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OnStopClicked | L276–276 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |
| Click | OnCloseClicked | L283–283 | 코드 비하인드/이벤트 라우팅에서 실제 연결 확인 필요 |

| Binding 표현 | 원본 범위 |
| --- | --- |
| {Binding IsDropDownOpen, Mode=TwoWay, RelativeSource={RelativeSource TemplatedParent}} | L88–88 |
| {Binding SelectedItem.DisplayName, RelativeSource={RelativeSource AncestorType=ComboBox}} | L101–101 |
| {Binding ActualWidth, ElementName=ToggleButton} | L138–138 |
| {Binding Title} | L212–212 |
| {Binding Steps} | L216–216 |
| {Binding No} | L226–226 |
| {Binding Name} | L227–227 |
| {Binding State} | L229–229 |

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Popup/CControllerResetSequenceDialog.xaml.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
