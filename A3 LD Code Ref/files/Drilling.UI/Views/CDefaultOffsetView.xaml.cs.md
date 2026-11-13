# Drilling.UI/Views/CDefaultOffsetView.xaml.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 5aee8e58439c9b455cae7c9593c9be986c3e682e |
| 원본 SHA256 | 186c4435170fe13633b766d7443a742ce7085aecdc7637b322453ce1819b95de |
| 파일 분류 | code |
| 원본 크기/행 | 13,060 bytes / 148 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/545254ca379d4262e6c3.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CDefaultOffsetView | ClassDeclaration | 11–148 | CDefaultOffsetView: UserControl |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| IsCompactProperty | FieldDeclaration | L13–13 | DependencyProperty Drilling.UI.Views.CDefaultOffsetView.IsCompactProperty |
| IsCompact | PropertyDeclaration | L14–14 | bool Drilling.UI.Views.CDefaultOffsetView.IsCompact |
| get_IsCompact | GetAccessorDeclaration | L14–14 | bool Drilling.UI.Views.CDefaultOffsetView.IsCompact.get |
| set_IsCompact | SetAccessorDeclaration | L14–14 | void Drilling.UI.Views.CDefaultOffsetView.IsCompact.set |
| _display | FieldDeclaration | L17–17 | DispatcherTimer Drilling.UI.Views.CDefaultOffsetView._display |
| .ctor | ConstructorDeclaration | L18–50 | Drilling.UI.Views.CDefaultOffsetView.CDefaultOffsetView() |
| UpdateDisplay | MethodDeclaration | L51–55 | void Drilling.UI.Views.CDefaultOffsetView.UpdateDisplay() |
| RefreshFeedback | MethodDeclaration | L56–56 | void Drilling.UI.Views.CDefaultOffsetView.RefreshFeedback() |
| EditConditions | MethodDeclaration | L60–147 | (Drilling.Common.Correction.ST_DEFAULT_OFFSET_OPTIONS Options, int Model)? Drilling.UI.Views.CDefaultOffsetView.EditConditions(Drilling.Common.Correction.ST_DEFAULT_OFFSET_OPTIONS, System.Collections.Generic.IReadOnlyList<int>, int, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.Common.Correction.ST_DEFAULT_HEAD_GEOMETRY>) |
| UpdateMachiningMode | LocalFunctionStatement | L83–88 | void UpdateMachiningMode() |
| AddInputRow | LocalFunctionStatement | L90–96 | void AddInputRow(int, string, Control) |
| AddFieldRow | LocalFunctionStatement | L110–119 | void AddFieldRow(int, params string[]) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `IsCompactProperty` · L13–13

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:13–13](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L13-L13)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | DependencyProperty Drilling.UI.Views.CDefaultOffsetView.IsCompactProperty |
| 접근/수식자 | Public / public, static, readonly |
| 반환/값 타입 | DependencyProperty |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 13 | DependencyProperty.Register | unresolved | None |
| 13 | nameof | unresolved | None |
| 13 | new PropertyMetadata | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 13 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DependencyProperty.Register(nameof(IsCompact), typeof(bool), typeof(CDefaultOffsetView), new PropertyMetadata(false)) |
| 13 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(IsCompact) |
| 13 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new PropertyMetadata(false) |
| 13 | variable-initializer | 변수의 초기값을 지정합니다: IsCompactProperty = DependencyProperty.Register(nameof(IsCompact), typeof(bool), typeof(CDefaultOffsetView), new PropertyMetadata(false)) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsCompact` · L14–14

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:14–14](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L14-L14)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Views.CDefaultOffsetView.IsCompact |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsCompact` · L14–14

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:14–14](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L14-L14)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Views.CDefaultOffsetView.IsCompact.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 14 | GetValue | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 14 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(IsCompactProperty) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_IsCompact` · L14–14

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:14–14](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L14-L14)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Views.CDefaultOffsetView.IsCompact.set |
| 접근/수식자 | Private / private, set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 14 | SetValue | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 14 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetValue(IsCompactProperty, value) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_display` · L17–17

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:17–17](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L17-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | DispatcherTimer Drilling.UI.Views.CDefaultOffsetView._display |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | DispatcherTimer |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 17 | new | unresolved | None |
| 17 | TimeSpan.FromMilliseconds | resolved | System.TimeSpan System.TimeSpan.FromMilliseconds(long) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 17 | assignment | 값을 대상에 대입합니다: Interval = TimeSpan.FromMilliseconds(500) |
| 17 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(DispatcherPriority.Background) { Interval = TimeSpan.FromMilliseconds(500) } |
| 17 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromMilliseconds(500) |
| 17 | variable-initializer | 변수의 초기값을 지정합니다: _display = new(DispatcherPriority.Background) { Interval = TimeSpan.FromMilliseconds(500) } |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L18–50

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:18–50](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L18-L50)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Views.CDefaultOffsetView.CDefaultOffsetView() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 20 | InitializeComponent | unresolved | None |
| 21 | RefreshFeedback | resolved | void Drilling.UI.Views.CDefaultOffsetView.RefreshFeedback() · Drilling.UI/Views/CDefaultOffsetView.xaml.cs:56 |
| 22 | UpdateDisplay | resolved | void Drilling.UI.Views.CDefaultOffsetView.UpdateDisplay() · Drilling.UI/Views/CDefaultOffsetView.xaml.cs:51 |
| 23 | _display.Stop | unresolved | None |
| 24 | UpdateDisplay | resolved | void Drilling.UI.Views.CDefaultOffsetView.UpdateDisplay() · Drilling.UI/Views/CDefaultOffsetView.xaml.cs:51 |
| 25 | UpdateDisplay | resolved | void Drilling.UI.Views.CDefaultOffsetView.UpdateDisplay() · Drilling.UI/Views/CDefaultOffsetView.xaml.cs:51 |
| 29 | new GridLength | unresolved | None |
| 30 | new GridLength | unresolved | None |
| 31 | new GridLength | unresolved | None |
| 32 | new GridLength | unresolved | None |
| 33 | new GridLength | unresolved | None |
| 34 | new GridLength | unresolved | None |
| 39 | Math.Clamp | candidate | OverloadResolutionFailure |
| 40 | Math.Abs | candidate | OverloadResolutionFailure |
| 41 | Math.Max | candidate | OverloadResolutionFailure |
| 45 | Math.Floor | candidate | OverloadResolutionFailure |
| 45 | weights.Sum | resolved | double System.Collections.Generic.IEnumerable<double>.Sum() |
| 46 | Math.Abs | candidate | OverloadResolutionFailure |
| 47 | new DataGridLength | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 20 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: InitializeComponent() |
| 21 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshFeedback() |
| 21 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: _display.Tick += (_, _) => RefreshFeedback() |
| 22 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateDisplay() |
| 22 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: Loaded += (_, _) => UpdateDisplay() |
| 23 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _display.Stop() |
| 23 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: Unloaded += (_, _) => _display.Stop() |
| 24 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateDisplay() |
| 24 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: IsVisibleChanged += (_, _) => UpdateDisplay() |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateDisplay() |
| 25 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: DataContextChanged += (_, _) => UpdateDisplay() |
| 26 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: SizeChanged += (_, _) => { IsCompact = ActualHeight < 690; RecipeRow.Height = new GridLength(IsCompact ? 40 : 48); ProgressRow.Height = new GridLength(IsCompact ? 50 : 62); PositionRow.Height = new GridLength(IsCompact ? 92 : 94); |
| 28 | assignment | 값을 대상에 대입합니다: IsCompact = ActualHeight < 690 |
| 29 | assignment | 값을 대상에 대입합니다: RecipeRow.Height = new GridLength(IsCompact ? 40 : 48) |
| 29 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(IsCompact ? 40 : 48) |
| 29 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCompact ? 40 : 48 |
| 30 | assignment | 값을 대상에 대입합니다: ProgressRow.Height = new GridLength(IsCompact ? 50 : 62) |
| 30 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(IsCompact ? 50 : 62) |
| 30 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCompact ? 50 : 62 |
| 31 | assignment | 값을 대상에 대입합니다: PositionRow.Height = new GridLength(IsCompact ? 92 : 94) |
| 31 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(IsCompact ? 92 : 94) |
| 31 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCompact ? 92 : 94 |
| 32 | assignment | 값을 대상에 대입합니다: ActionRow.Height = new GridLength(IsCompact ? 104 : 118) |
| 32 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(IsCompact ? 104 : 118) |
| 32 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCompact ? 104 : 118 |
| 33 | assignment | 값을 대상에 대입합니다: ApplyRow.Height = new GridLength(IsCompact ? 52 : 62) |
| 33 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(IsCompact ? 52 : 62) |
| 33 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCompact ? 52 : 62 |
| 34 | assignment | 값을 대상에 대입합니다: ResultTitleRow.Height = new GridLength(IsCompact ? 24 : 34) |
| 34 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(IsCompact ? 24 : 34) |
| 34 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCompact ? 24 : 34 |
| 35 | assignment | 값을 대상에 대입합니다: DefaultHeadResults.ColumnHeaderHeight = IsCompact ? 28 : 38 |
| 35 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCompact ? 28 : 38 |
| 37 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: DefaultHeadResults.SizeChanged += (_, _) => { var height = Math.Clamp((DefaultHeadResults.ActualHeight - DefaultHeadResults.ColumnHeaderHeight - 2) / 8, 26, 52); if (Math.Abs(DefaultHeadResults.RowHeight - height) > .1) DefaultHea |
| 39 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp((DefaultHeadResults.ActualHeight - DefaultHeadResults.ColumnHeaderHeight - 2) / 8, 26, 52) |
| 39 | local-declaration | 지역 변수를 선언합니다: var height = Math.Clamp((DefaultHeadResults.ActualHeight - DefaultHeadResults.ColumnHeaderHeight - 2) / 8, 26, 52); |
| 39 | variable-initializer | 변수의 초기값을 지정합니다: height = Math.Clamp((DefaultHeadResults.ActualHeight - DefaultHeadResults.ColumnHeaderHeight - 2) / 8, 26, 52) |
| 40 | assignment | 값을 대상에 대입합니다: DefaultHeadResults.RowHeight = height |
| 40 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(DefaultHeadResults.RowHeight - height) |
| 40 | if | 조건에 따라 분기합니다: if (Math.Abs(DefaultHeadResults.RowHeight - height) > .1) |
| 41 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(0, DefaultHeadResults.ActualWidth - 2) |
| 41 | local-declaration | 지역 변수를 선언합니다: var width = Math.Max(0, DefaultHeadResults.ActualWidth - 2); |
| 41 | variable-initializer | 변수의 초기값을 지정합니다: width = Math.Max(0, DefaultHeadResults.ActualWidth - 2) |
| 42 | local-declaration | 지역 변수를 선언합니다: double[] weights = [.6, .8, 1.1, 1.1, 1.2, 1.2, 1.1]; |
| 42 | variable-initializer | 변수의 초기값을 지정합니다: weights = [.6, .8, 1.1, 1.1, 1.2, 1.2, 1.1] |
| 43 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 43 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < weights.Length; index++) |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Floor(width * weights[index] / weights.Sum()) |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: weights.Sum() |
| 45 | local-declaration | 지역 변수를 선언합니다: var pixels = Math.Floor(width * weights[index] / weights.Sum()); |
| 45 | variable-initializer | 변수의 초기값을 지정합니다: pixels = Math.Floor(width * weights[index] / weights.Sum()) |
| 46 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(DefaultHeadResults.Columns[index].ActualWidth - pixels) |
| 46 | if | 조건에 따라 분기합니다: if (Math.Abs(DefaultHeadResults.Columns[index].ActualWidth - pixels) > .5) |
| 47 | assignment | 값을 대상에 대입합니다: DefaultHeadResults.Columns[index].Width = new DataGridLength(pixels) |
| 47 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DataGridLength(pixels) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M[".ctor"]
 N0["L40 if"]
 M -->|포함| N0
 N1["L43 for"]
 M -->|포함| N1
 N2["L46 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `UpdateDisplay` · L51–55

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:51–55](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L51-L55)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Views.CDefaultOffsetView.UpdateDisplay() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Views/CDefaultOffsetView.xaml.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L22-L22) | UpdateDisplay | False |
| [Drilling.UI/Views/CDefaultOffsetView.xaml.cs:24–24](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L24-L24) | UpdateDisplay | False |
| [Drilling.UI/Views/CDefaultOffsetView.xaml.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L25-L25) | UpdateDisplay | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 53 | RefreshFeedback | resolved | void Drilling.UI.Views.CDefaultOffsetView.RefreshFeedback() · Drilling.UI/Views/CDefaultOffsetView.xaml.cs:56 |
| 53 | _display.Start | unresolved | None |
| 54 | _display.Stop | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 53 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshFeedback() |
| 53 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _display.Start() |
| 53 | if | 조건에 따라 분기합니다: if (IsLoaded && IsVisible) |
| 54 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _display.Stop() |
| 54 | else | 앞 조건이 거짓인 경로입니다: else |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["UpdateDisplay"]
 N0["L53 if"]
 M -->|포함| N0
 N1["L54 else"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshFeedback` · L56–56

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:56–56](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L56-L56)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Views.CDefaultOffsetView.RefreshFeedback() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Views/CDefaultOffsetView.xaml.cs:21–21](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L21-L21) | RefreshFeedback | False |
| [Drilling.UI/Views/CDefaultOffsetView.xaml.cs:53–53](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L53-L53) | RefreshFeedback | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 56 | .RefreshFeedback | resolved | void Drilling.UI.Menu.Menus.CDefaultOffsetPanel.RefreshFeedback() · Drilling.UI/Menu/Menus/CMenuCorrection.cs:4534 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 56 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .RefreshFeedback() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EditConditions` · L60–147

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:60–147](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L60-L147)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | (Drilling.Common.Correction.ST_DEFAULT_OFFSET_OPTIONS Options, int Model)? Drilling.UI.Views.CDefaultOffsetView.EditConditions(Drilling.Common.Correction.ST_DEFAULT_OFFSET_OPTIONS, System.Collections.Generic.IReadOnlyList<int>, int, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.Common.Correction.ST_DEFAULT_HEAD_GEOMETRY>) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | (Drilling.Common.Correction.ST_DEFAULT_OFFSET_OPTIONS Options, int Model)? |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| current | Drilling.Common.Correction.ST_DEFAULT_OFFSET_OPTIONS | None | False /  |
| models | System.Collections.Generic.IReadOnlyList<int> | None | False /  |
| currentModel | int | None | False /  |
| geometries | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.Common.Correction.ST_DEFAULT_HEAD_GEOMETRY> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3138–3138](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3138-L3138) | Drilling.UI.Views.CDefaultOffsetView.EditConditions | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 63 | new Window | unresolved | None |
| 63 | Math.Max | candidate | OverloadResolutionFailure |
| 64 | dialog.SetResourceReference | unresolved | None |
| 65 | dialog.SetResourceReference | unresolved | None |
| 66 | new Grid | unresolved | None |
| 66 | new Thickness | unresolved | None |
| 67 | layout.SetResourceReference | unresolved | None |
| 68 | layout.ColumnDefinitions.Add | unresolved | None |
| 68 | new | unresolved | None |
| 68 | new GridLength | unresolved | None |
| 69 | layout.ColumnDefinitions.Add | unresolved | None |
| 69 | new | unresolved | None |
| 69 | new GridLength | unresolved | None |
| 70 | layout.RowDefinitions.Add | unresolved | None |
| 70 | new | unresolved | None |
| 70 | new GridLength | unresolved | None |
| 71 | layout.Children.Add | unresolved | None |
| 71 | new TextBlock | unresolved | None |
| 72 | new ComboBox | unresolved | None |
| 72 | new Thickness | unresolved | None |
| 73 | Grid.SetColumn | unresolved | None |
| 73 | layout.Children.Add | unresolved | None |
| 74 | layout.RowDefinitions.Add | unresolved | None |
| 74 | new | unresolved | None |
| 74 | new GridLength | unresolved | None |
| 75 | new TextBlock | unresolved | None |
| 76 | Grid.SetRow | unresolved | None |
| 76 | layout.Children.Add | unresolved | None |
| 77 | new TextBox | unresolved | None |
| 77 | current.TestStageY.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 77 | new Thickness | unresolved | None |
| 77 | new Thickness | unresolved | None |
| 78 | Grid.SetRow | unresolved | None |
| 78 | Grid.SetColumn | unresolved | None |
| 78 | layout.Children.Add | unresolved | None |
| 80 | new ComboBox | unresolved | None |
| 80 | new Thickness | unresolved | None |
| 81 | new TextBox | unresolved | None |
| 81 | current.CrossSize.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 81 | new Thickness | unresolved | None |
| 81 | new Thickness | unresolved | None |
| 82 | new TextBox | unresolved | None |
| 82 | new Thickness | unresolved | None |
| 82 | new Thickness | unresolved | None |
| 89 | UpdateMachiningMode | resolved | void UpdateMachiningMode() · Drilling.UI/Views/CDefaultOffsetView.xaml.cs:83 |
| 98 | new GridLength | unresolved | None |
| 99 | AddInputRow | candidate | OverloadResolutionFailure |
| 100 | AddInputRow | candidate | OverloadResolutionFailure |
| 101 | AddInputRow | candidate | OverloadResolutionFailure |
| 102 | layout.RowDefinitions.Add | unresolved | None |
| 102 | new | unresolved | None |
| 102 | new GridLength | unresolved | None |
| 103 | new StackPanel | unresolved | None |
| 103 | new Thickness | unresolved | None |
| 104 | reference.Children.Add | unresolved | None |
| 104 | new TextBlock | unresolved | None |
| 104 | new Thickness | unresolved | None |
| 105 | reference.Children.Add | unresolved | None |
| 105 | new TextBlock | unresolved | None |
| 105 | new Thickness | unresolved | None |
| 106 | reference.Children.Add | unresolved | None |
| 106 | new TextBlock | unresolved | None |
| 106 | new Thickness | unresolved | None |
| 107 | reference.Children.Add | unresolved | None |
| 107 | new TextBlock | unresolved | None |
| 107 | new Thickness | unresolved | None |
| 108 | new Grid | unresolved | None |
| 109 | new GridLength | unresolved | None |
| 109 | new GridLength | unresolved | None |
| 109 | new GridLength | unresolved | None |
| 109 | new GridLength | unresolved | None |
| 109 | fields.ColumnDefinitions.Add | unresolved | None |
| 109 | new | unresolved | None |
| 120 | AddFieldRow | resolved | void AddFieldRow(int, params string[]) · Drilling.UI/Views/CDefaultOffsetView.xaml.cs:110 |
| 121 | geometries.OrderBy | resolved | System.Linq.IOrderedEnumerable<System.Collections.Generic.KeyValuePair<int, Drilling.Common.Correction.ST_DEFAULT_HEAD_GEOMETRY>> System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<int, Drilling.Common.Correction.ST_DEFAULT_HEAD_GEOMETRY>>.OrderBy<System.Collections.Generic.KeyValuePair<int, Drilling.Common.Correction.ST_DEFAULT_HEAD_GEOMETRY>, int>(System.Func<System.Collections.Generic.KeyValuePair<int, Drilling.Common.Correction.ST_DEFAULT_HEAD_GEOMETRY>, int>) |
| 122 | AddFieldRow | candidate | OverloadResolutionFailure |
| 122 | (item.Value.FieldHalfX * 2).ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 122 | (item.Value.FieldHalfY * 2).ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 122 | item.Value.DoeAngle.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 123 | reference.Children.Add | unresolved | None |
| 124 | reference.Children.Add | unresolved | None |
| 124 | new TextBlock | unresolved | None |
| 124 | new Thickness | unresolved | None |
| 125 | new ScrollViewer | unresolved | None |
| 126 | Grid.SetRow | unresolved | None |
| 126 | Grid.SetColumnSpan | unresolved | None |
| 126 | layout.Children.Add | unresolved | None |
| 127 | layout.RowDefinitions.Add | unresolved | None |
| 127 | new | unresolved | None |
| 127 | new GridLength | unresolved | None |
| 128 | new System.Windows.Controls.Primitives.UniformGrid | unresolved | None |
| 129 | .TryFindResource | unresolved | None |
| 130 | new Button | unresolved | None |
| 130 | new Thickness | unresolved | None |
| 130 | new Button | unresolved | None |
| 130 | new Thickness | unresolved | None |
| 131 | buttons.Children.Add | unresolved | None |
| 131 | buttons.Children.Add | unresolved | None |
| 131 | Grid.SetRow | unresolved | None |
| 131 | Grid.SetColumnSpan | unresolved | None |
| 131 | layout.Children.Add | unresolved | None |
| 135 | double.TryParse | candidate | OverloadResolutionFailure |
| 135 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 135 | Popup.CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 136 | models.Contains | resolved | bool System.Collections.Generic.IEnumerable<int>.Contains<int>(int) |
| 136 | Popup.CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 139 | double.TryParse | candidate | OverloadResolutionFailure |
| 139 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 139 | Popup.CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 141 | CDefaultOffsetCalibration.ValidateOptions | resolved | void Drilling.Common.Correction.CDefaultOffsetCalibration.ValidateOptions(Drilling.Common.Correction.ST_DEFAULT_OFFSET_OPTIONS) · Drilling.Common/Correction/CDefaultOffsetCalibration.cs:80 |
| 142 | Popup.CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:86 |
| 146 | dialog.ShowDialog | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 62 | local-declaration | 지역 변수를 선언합니다: var owner = Application.Current?.MainWindow; |
| 62 | variable-initializer | 변수의 초기값을 지정합니다: owner = Application.Current?.MainWindow |
| 63 | assignment | 값을 대상에 대입합니다: Title = "Default CENTER 측정 조건" |
| 63 | assignment | 값을 대상에 대입합니다: Width = 760 |
| 63 | assignment | 값을 대상에 대입합니다: Height = 790 |
| 63 | assignment | 값을 대상에 대입합니다: MaxHeight = Math.Max(400, SystemParameters.WorkArea.Height - 40) |
| 63 | assignment | 값을 대상에 대입합니다: ResizeMode = ResizeMode.NoResize |
| 63 | assignment | 값을 대상에 대입합니다: WindowStartupLocation = WindowStartupLocation.CenterOwner |
| 63 | assignment | 값을 대상에 대입합니다: Owner = owner |
| 63 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Window { Title = "Default CENTER 측정 조건", Width = 760, Height = 790, MaxHeight = Math.Max(400, SystemParameters.WorkArea.Height - 40), ResizeMode = ResizeMode.NoResize, WindowStartupLocation = WindowStartupLocation.Ce… |
| 63 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(400, SystemParameters.WorkArea.Height - 40) |
| 63 | local-declaration | 지역 변수를 선언합니다: var dialog = new Window { Title = "Default CENTER 측정 조건", Width = 760, Height = 790, MaxHeight = Math.Max(400, SystemParameters.WorkArea.Height - 40), ResizeMode = ResizeMode.NoResize, WindowStartupLocation = WindowStartupLocation |
| 63 | variable-initializer | 변수의 초기값을 지정합니다: dialog = new Window { Title = "Default CENTER 측정 조건", Width = 760, Height = 790, MaxHeight = Math.Max(400, SystemParameters.WorkArea.Height - 40), ResizeMode = ResizeMode.NoResize, WindowStartupLocation = WindowStartupLocation.Cen |
| 64 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dialog.SetResourceReference(BackgroundProperty, "GridBackgroundBrush") |
| 65 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dialog.SetResourceReference(ForegroundProperty, "TextPrimaryBrush") |
| 66 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(20) |
| 66 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Grid { Margin = new Thickness(20) } |
| 66 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(20) |
| 66 | local-declaration | 지역 변수를 선언합니다: var layout = new Grid { Margin = new Thickness(20) }; |
| 66 | variable-initializer | 변수의 초기값을 지정합니다: layout = new Grid { Margin = new Thickness(20) } |
| 67 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.SetResourceReference(BackgroundProperty, "GridBackgroundBrush") |
| 68 | assignment | 값을 대상에 대입합니다: Width = new GridLength(1, GridUnitType.Star) |
| 68 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.ColumnDefinitions.Add(new() { Width = new GridLength(1, GridUnitType.Star) }) |
| 68 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Width = new GridLength(1, GridUnitType.Star) } |
| 68 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(1, GridUnitType.Star) |
| 69 | assignment | 값을 대상에 대입합니다: Width = new GridLength(160) |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.ColumnDefinitions.Add(new() { Width = new GridLength(160) }) |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Width = new GridLength(160) } |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(160) |
| 70 | assignment | 값을 대상에 대입합니다: Height = new GridLength(43) |
| 70 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.RowDefinitions.Add(new() { Height = new GridLength(43) }) |
| 70 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Height = new GridLength(43) } |
| 70 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(43) |
| 71 | assignment | 값을 대상에 대입합니다: Text = "검사 기준 모델 (Recipe-Process-Cell)" |
| 71 | assignment | 값을 대상에 대입합니다: VerticalAlignment = VerticalAlignment.Center |
| 71 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 71 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.Children.Add(new TextBlock { Text = "검사 기준 모델 (Recipe-Process-Cell)", VerticalAlignment = VerticalAlignment.Center, FontSize = 15 }) |
| 71 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = "검사 기준 모델 (Recipe-Process-Cell)", VerticalAlignment = VerticalAlignment.Center, FontSize = 15 } |
| 72 | assignment | 값을 대상에 대입합니다: Name = "DefaultModel" |
| 72 | assignment | 값을 대상에 대입합니다: ItemsSource = models |
| 72 | assignment | 값을 대상에 대입합니다: SelectedItem = currentModel |
| 72 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 72 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,4,0,4) |
| 72 | assignment | 값을 대상에 대입합니다: VerticalContentAlignment = VerticalAlignment.Center |
| 72 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ComboBox { Name = "DefaultModel", ItemsSource = models, SelectedItem = currentModel, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center } |
| 72 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,4,0,4) |
| 72 | local-declaration | 지역 변수를 선언합니다: var model = new ComboBox { Name = "DefaultModel", ItemsSource = models, SelectedItem = currentModel, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center }; |
| 72 | variable-initializer | 변수의 초기값을 지정합니다: model = new ComboBox { Name = "DefaultModel", ItemsSource = models, SelectedItem = currentModel, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center } |
| 73 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetColumn(model, 1) |
| 73 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.Children.Add(model) |
| 74 | assignment | 값을 대상에 대입합니다: Height = new GridLength(43) |
| 74 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.RowDefinitions.Add(new() { Height = new GridLength(43) }) |
| 74 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Height = new GridLength(43) } |
| 74 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(43) |
| 75 | assignment | 값을 대상에 대입합니다: Text = "가공할 Stage Y 위치 (mm)" |
| 75 | assignment | 값을 대상에 대입합니다: VerticalAlignment = VerticalAlignment.Center |
| 75 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 75 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = "가공할 Stage Y 위치 (mm)", VerticalAlignment = VerticalAlignment.Center, FontSize = 15 } |
| 75 | local-declaration | 지역 변수를 선언합니다: var stageLabel = new TextBlock { Text = "가공할 Stage Y 위치 (mm)", VerticalAlignment = VerticalAlignment.Center, FontSize = 15 }; |
| 75 | variable-initializer | 변수의 초기값을 지정합니다: stageLabel = new TextBlock { Text = "가공할 Stage Y 위치 (mm)", VerticalAlignment = VerticalAlignment.Center, FontSize = 15 } |
| 76 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRow(stageLabel, 1) |
| 76 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.Children.Add(stageLabel) |
| 77 | assignment | 값을 대상에 대입합니다: Name = "DefaultStageY" |
| 77 | assignment | 값을 대상에 대입합니다: Text = current.TestStageY.ToString("0.#####", CultureInfo.InvariantCulture) |
| 77 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,4,0,4) |
| 77 | assignment | 값을 대상에 대입합니다: VerticalContentAlignment = VerticalAlignment.Center |
| 77 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 77 | assignment | 값을 대상에 대입합니다: Padding = new Thickness(6,0,6,0) |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBox { Name = "DefaultStageY", Text = current.TestStageY.ToString("0.#####", CultureInfo.InvariantCulture), Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center, FontSize = 15, Padd… |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current.TestStageY.ToString("0.#####", CultureInfo.InvariantCulture) |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,4,0,4) |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(6,0,6,0) |
| 77 | local-declaration | 지역 변수를 선언합니다: var input = new TextBox { Name = "DefaultStageY", Text = current.TestStageY.ToString("0.#####", CultureInfo.InvariantCulture), Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center, FontSize = 15, Pa |
| 77 | variable-initializer | 변수의 초기값을 지정합니다: input = new TextBox { Name = "DefaultStageY", Text = current.TestStageY.ToString("0.#####", CultureInfo.InvariantCulture), Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center, FontSize = 15, Paddin |
| 78 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRow(input, 1) |
| 78 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetColumn(input, 1) |
| 78 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.Children.Add(input) |
| 79 | local-declaration | 지역 변수를 선언합니다: var machiningModes = new[] { "샷 가공", "십자 가공" }; |
| 79 | variable-initializer | 변수의 초기값을 지정합니다: machiningModes = new[] { "샷 가공", "십자 가공" } |
| 80 | assignment | 값을 대상에 대입합니다: Name = "DefaultMachiningMode" |
| 80 | assignment | 값을 대상에 대입합니다: ItemsSource = machiningModes |
| 80 | assignment | 값을 대상에 대입합니다: SelectedIndex = (int)current.MachiningMode |
| 80 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 80 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,4,0,4) |
| 80 | assignment | 값을 대상에 대입합니다: VerticalContentAlignment = VerticalAlignment.Center |
| 80 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ComboBox { Name = "DefaultMachiningMode", ItemsSource = machiningModes, SelectedIndex = (int)current.MachiningMode, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center … |
| 80 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,4,0,4) |
| 80 | local-declaration | 지역 변수를 선언합니다: var machining = new ComboBox { Name = "DefaultMachiningMode", ItemsSource = machiningModes, SelectedIndex = (int)current.MachiningMode, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.C |
| 80 | variable-initializer | 변수의 초기값을 지정합니다: machining = new ComboBox { Name = "DefaultMachiningMode", ItemsSource = machiningModes, SelectedIndex = (int)current.MachiningMode, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Cente |
| 81 | assignment | 값을 대상에 대입합니다: Name = "DefaultCrossSize" |
| 81 | assignment | 값을 대상에 대입합니다: Text = current.CrossSize.ToString("0.#####", CultureInfo.InvariantCulture) |
| 81 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,4,0,4) |
| 81 | assignment | 값을 대상에 대입합니다: VerticalContentAlignment = VerticalAlignment.Center |
| 81 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 81 | assignment | 값을 대상에 대입합니다: Padding = new Thickness(6,0,6,0) |
| 81 | assignment | 값을 대상에 대입합니다: IsEnabled = current.MachiningMode == EN_DEFAULT_MACHINING_MODE.Cross |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBox { Name = "DefaultCrossSize", Text = current.CrossSize.ToString("0.#####", CultureInfo.InvariantCulture), Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center, FontSize = 15, Pa… |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current.CrossSize.ToString("0.#####", CultureInfo.InvariantCulture) |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,4,0,4) |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(6,0,6,0) |
| 81 | local-declaration | 지역 변수를 선언합니다: var crossSize = new TextBox { Name = "DefaultCrossSize", Text = current.CrossSize.ToString("0.#####", CultureInfo.InvariantCulture), Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center, FontSize =  |
| 81 | variable-initializer | 변수의 초기값을 지정합니다: crossSize = new TextBox { Name = "DefaultCrossSize", Text = current.CrossSize.ToString("0.#####", CultureInfo.InvariantCulture), Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center, FontSize = 15,  |
| 82 | assignment | 값을 대상에 대입합니다: Name = "DefaultVisionMethod" |
| 82 | assignment | 값을 대상에 대입합니다: Text = current.VisionDescription |
| 82 | assignment | 값을 대상에 대입합니다: IsReadOnly = true |
| 82 | assignment | 값을 대상에 대입합니다: Focusable = false |
| 82 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 82 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,4,0,4) |
| 82 | assignment | 값을 대상에 대입합니다: VerticalContentAlignment = VerticalAlignment.Center |
| 82 | assignment | 값을 대상에 대입합니다: Padding = new Thickness(6,0,6,0) |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBox { Name = "DefaultVisionMethod", Text = current.VisionDescription, IsReadOnly = true, Focusable = false, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center, Pad… |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,4,0,4) |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(6,0,6,0) |
| 82 | local-declaration | 지역 변수를 선언합니다: var vision = new TextBox { Name = "DefaultVisionMethod", Text = current.VisionDescription, IsReadOnly = true, Focusable = false, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center,  |
| 82 | variable-initializer | 변수의 초기값을 지정합니다: vision = new TextBox { Name = "DefaultVisionMethod", Text = current.VisionDescription, IsReadOnly = true, Focusable = false, FontSize = 15, Margin = new Thickness(0,4,0,4), VerticalContentAlignment = VerticalAlignment.Center, Padd |
| 89 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateMachiningMode() |
| 89 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: machining.SelectionChanged += (_, _) => UpdateMachiningMode() |
| 98 | assignment | 값을 대상에 대입합니다: layout.ColumnDefinitions[1].Width = new GridLength(230) |
| 98 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(230) |
| 99 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddInputRow(2, "가공 방식", machining) |
| 100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddInputRow(3, "십자 가로·세로 전체 길이 (mm)", crossSize) |
| 101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddInputRow(4, "비전 검사 방식 (자동)", vision) |
| 102 | assignment | 값을 대상에 대입합니다: Height = new GridLength(1, GridUnitType.Star) |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.RowDefinitions.Add(new() { Height = new GridLength(1, GridUnitType.Star) }) |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Height = new GridLength(1, GridUnitType.Star) } |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(1, GridUnitType.Star) |
| 103 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,14,0,12) |
| 103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new StackPanel { Margin = new Thickness(0,14,0,12) } |
| 103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,14,0,12) |
| 103 | local-declaration | 지역 변수를 선언합니다: var reference = new StackPanel { Margin = new Thickness(0,14,0,12) }; |
| 103 | variable-initializer | 변수의 초기값을 지정합니다: reference = new StackPanel { Margin = new Thickness(0,14,0,12) } |
| 104 | assignment | 값을 대상에 대입합니다: Text = "자동 계산 · 설정값 (읽기 전용)" |
| 104 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 104 | assignment | 값을 대상에 대입합니다: FontWeight = FontWeights.Bold |
| 104 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,0,0,8) |
| 104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reference.Children.Add(new TextBlock { Text = "자동 계산 · 설정값 (읽기 전용)", FontSize = 15, FontWeight = FontWeights.Bold, Margin = new Thickness(0,0,0,8) }) |
| 104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = "자동 계산 · 설정값 (읽기 전용)", FontSize = 15, FontWeight = FontWeights.Bold, Margin = new Thickness(0,0,0,8) } |
| 104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,0,0,8) |
| 105 | assignment | 값을 대상에 대입합니다: Text = $"기판 중앙 Review X {current.BoardCenterX:0.000} mm (Recipe-Process-Scan)" |
| 105 | assignment | 값을 대상에 대입합니다: FontSize = 14 |
| 105 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,0,0,6) |
| 105 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reference.Children.Add(new TextBlock { Text = $"기판 중앙 Review X {current.BoardCenterX:0.000} mm (Recipe-Process-Scan)", FontSize = 14, Margin = new Thickness(0,0,0,6) }) |
| 105 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = $"기판 중앙 Review X {current.BoardCenterX:0.000} mm (Recipe-Process-Scan)", FontSize = 14, Margin = new Thickness(0,0,0,6) } |
| 105 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,0,0,6) |
| 106 | assignment | 값을 대상에 대입합니다: Text = $"Beam간격 및 Beam중심 허용오차 {current.Tolerance:0.000} mm (Recipe-Common-Review)" |
| 106 | assignment | 값을 대상에 대입합니다: FontSize = 14 |
| 106 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,0,0,10) |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reference.Children.Add(new TextBlock { Text = $"Beam간격 및 Beam중심 허용오차 {current.Tolerance:0.000} mm (Recipe-Common-Review)", FontSize = 14, Margin = new Thickness(0,0,0,10) }) |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = $"Beam간격 및 Beam중심 허용오차 {current.Tolerance:0.000} mm (Recipe-Common-Review)", FontSize = 14, Margin = new Thickness(0,0,0,10) } |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,0,0,10) |
| 107 | assignment | 값을 대상에 대입합니다: Text = "헤드별 설정 (Setting-Common-Scanner)" |
| 107 | assignment | 값을 대상에 대입합니다: FontSize = 13 |
| 107 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,0,0,6) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reference.Children.Add(new TextBlock { Text = "헤드별 설정 (Setting-Common-Scanner)", FontSize = 13, Margin = new Thickness(0,0,0,6) }) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = "헤드별 설정 (Setting-Common-Scanner)", FontSize = 13, Margin = new Thickness(0,0,0,6) } |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,0,0,6) |
| 108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Grid() |
| 108 | local-declaration | 지역 변수를 선언합니다: var fields = new Grid(); |
| 108 | variable-initializer | 변수의 초기값을 지정합니다: fields = new Grid() |
| 109 | assignment | 값을 대상에 대입합니다: Width = width |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(70) |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(1, GridUnitType.Star) |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(1, GridUnitType.Star) |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(1, GridUnitType.Star) |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.ColumnDefinitions.Add(new() { Width = width }) |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Width = width } |
| 109 | foreach | 컬렉션 요소를 순회합니다: foreach (var width in new[] { new GridLength(70), new GridLength(1, GridUnitType.Star), new GridLength(1, GridUnitType.Star), new GridLength(1, GridUnitType.Star) }) |
| 120 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddFieldRow(0, "HEAD", "Scan Field X (mm)", "Scan Field Y (mm)", "DOE 회전 각도 (deg)") |
| 121 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: geometries.OrderBy(p => p.Key) |
| 121 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in geometries.OrderBy(p => p.Key)) |
| 122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddFieldRow(fields.RowDefinitions.Count, $"H{item.Key:00}", (item.Value.FieldHalfX * 2).ToString("0.###", CultureInfo.InvariantCulture), (item.Value.FieldHalfY * 2).ToString("0.###", CultureInfo.InvariantCulture), item.V… |
| 122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (item.Value.FieldHalfX * 2).ToString("0.###", CultureInfo.InvariantCulture) |
| 122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (item.Value.FieldHalfY * 2).ToString("0.###", CultureInfo.InvariantCulture) |
| 122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Value.DoeAngle.ToString("0.###", CultureInfo.InvariantCulture) |
| 123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reference.Children.Add(fields) |
| 124 | assignment | 값을 대상에 대입합니다: Text = "십자 길이 10 mm: 가로·세로 각각 중심 기준 −5~+5 mm를 1회 가공합니다.\n십자 가공은 Mark Find Setting Single로 중심을 1회 검사하고, 샷 가공은 Mark Find Single로 DOE 16빔을 검사합니다.\n십자 속도는 Head별 Recipe Jump Speed, 샷 가공은 Shot Count를 사용합니다.\nField는 전체 폭·높이입니다. Y=55 mm이면 |
| 124 | assignment | 값을 대상에 대입합니다: TextWrapping = TextWrapping.Wrap |
| 124 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,10,0,0) |
| 124 | assignment | 값을 대상에 대입합니다: FontSize = 13 |
| 124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reference.Children.Add(new TextBlock { Text = "십자 길이 10 mm: 가로·세로 각각 중심 기준 −5~+5 mm를 1회 가공합니다.\n십자 가공은 Mark Find Setting Single로 중심을 1회 검사하고, 샷 가공은 Mark Find Single로 DOE 16빔을 검사합니다.\n십자 속도는 Head별 Recipe Jump Speed, 샷 가공은… |
| 124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = "십자 길이 10 mm: 가로·세로 각각 중심 기준 −5~+5 mm를 1회 가공합니다.\n십자 가공은 Mark Find Setting Single로 중심을 1회 검사하고, 샷 가공은 Mark Find Single로 DOE 16빔을 검사합니다.\n십자 속도는 Head별 Recipe Jump Speed, 샷 가공은 Shot Count를 사용합니다.\nFi… |
| 124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,10,0,0) |
| 125 | assignment | 값을 대상에 대입합니다: Content = reference |
| 125 | assignment | 값을 대상에 대입합니다: VerticalScrollBarVisibility = ScrollBarVisibility.Auto |
| 125 | assignment | 값을 대상에 대입합니다: HorizontalScrollBarVisibility = ScrollBarVisibility.Disabled |
| 125 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ScrollViewer { Content = reference, VerticalScrollBarVisibility = ScrollBarVisibility.Auto, HorizontalScrollBarVisibility = ScrollBarVisibility.Disabled } |
| 125 | local-declaration | 지역 변수를 선언합니다: var referenceScroll = new ScrollViewer { Content = reference, VerticalScrollBarVisibility = ScrollBarVisibility.Auto, HorizontalScrollBarVisibility = ScrollBarVisibility.Disabled }; |
| 125 | variable-initializer | 변수의 초기값을 지정합니다: referenceScroll = new ScrollViewer { Content = reference, VerticalScrollBarVisibility = ScrollBarVisibility.Auto, HorizontalScrollBarVisibility = ScrollBarVisibility.Disabled } |
| 126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRow(referenceScroll, 5) |
| 126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetColumnSpan(referenceScroll, 2) |
| 126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.Children.Add(referenceScroll) |
| 127 | assignment | 값을 대상에 대입합니다: Height = new GridLength(44) |
| 127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.RowDefinitions.Add(new() { Height = new GridLength(44) }) |
| 127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Height = new GridLength(44) } |
| 127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(44) |
| 128 | assignment | 값을 대상에 대입합니다: Columns = 2 |
| 128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new System.Windows.Controls.Primitives.UniformGrid { Columns = 2 } |
| 128 | local-declaration | 지역 변수를 선언합니다: var buttons = new System.Windows.Controls.Primitives.UniformGrid { Columns = 2 }; |
| 128 | variable-initializer | 변수의 초기값을 지정합니다: buttons = new System.Windows.Controls.Primitives.UniformGrid { Columns = 2 } |
| 129 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .TryFindResource("SecondaryButton") |
| 129 | local-declaration | 지역 변수를 선언합니다: var buttonStyle = Application.Current?.TryFindResource("SecondaryButton") as Style; |
| 129 | variable-initializer | 변수의 초기값을 지정합니다: buttonStyle = Application.Current?.TryFindResource("SecondaryButton") as Style |
| 130 | assignment | 값을 대상에 대입합니다: Content = "조건 적용" |
| 130 | assignment | 값을 대상에 대입합니다: Style = buttonStyle |
| 130 | assignment | 값을 대상에 대입합니다: Height = double.NaN |
| 130 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 130 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(0,0,6,0) |
| 130 | assignment | 값을 대상에 대입합니다: Content = "취소" |
| 130 | assignment | 값을 대상에 대입합니다: Style = buttonStyle |
| 130 | assignment | 값을 대상에 대입합니다: Height = double.NaN |
| 130 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 130 | assignment | 값을 대상에 대입합니다: Margin = new Thickness(6,0,0,0) |
| 130 | assignment | 값을 대상에 대입합니다: IsCancel = true |
| 130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Button { Content = "조건 적용", Style = buttonStyle, Height = double.NaN, FontSize = 15, Margin = new Thickness(0,0,6,0) } |
| 130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,0,6,0) |
| 130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Button { Content = "취소", Style = buttonStyle, Height = double.NaN, FontSize = 15, Margin = new Thickness(6,0,0,0), IsCancel = true } |
| 130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(6,0,0,0) |
| 130 | local-declaration | 지역 변수를 선언합니다: var save = new Button { Content = "조건 적용", Style = buttonStyle, Height = double.NaN, FontSize = 15, Margin = new Thickness(0,0,6,0) }; |
| 130 | local-declaration | 지역 변수를 선언합니다: var cancel = new Button { Content = "취소", Style = buttonStyle, Height = double.NaN, FontSize = 15, Margin = new Thickness(6,0,0,0), IsCancel = true }; |
| 130 | variable-initializer | 변수의 초기값을 지정합니다: save = new Button { Content = "조건 적용", Style = buttonStyle, Height = double.NaN, FontSize = 15, Margin = new Thickness(0,0,6,0) } |
| 130 | variable-initializer | 변수의 초기값을 지정합니다: cancel = new Button { Content = "취소", Style = buttonStyle, Height = double.NaN, FontSize = 15, Margin = new Thickness(6,0,0,0), IsCancel = true } |
| 131 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: buttons.Children.Add(save) |
| 131 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: buttons.Children.Add(cancel) |
| 131 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRow(buttons, 6) |
| 131 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetColumnSpan(buttons, 2) |
| 131 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.Children.Add(buttons) |
| 132 | local-declaration | 지역 변수를 선언합니다: (ST_DEFAULT_OFFSET_OPTIONS Options, int Model)? result = null; |
| 132 | variable-initializer | 변수의 초기값을 지정합니다: result = null |
| 133 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: save.Click += (_, _) => { if (!double.TryParse(input.Text, NumberStyles.Float, CultureInfo.InvariantCulture, out var stageY) &#124;&#124; !double.IsFinite(stageY)) { Popup.CRecipeConfirmDialog.ShowWarning("입력 확인", "가공할 Stage Y 위치에 유한한 숫자를 입 |
| 135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(input.Text, NumberStyles.Float, CultureInfo.InvariantCulture, out var stageY) |
| 135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(stageY) |
| 135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Popup.CRecipeConfirmDialog.ShowWarning("입력 확인", "가공할 Stage Y 위치에 유한한 숫자를 입력해 주세요.") |
| 135 | if | 조건에 따라 분기합니다: if (!double.TryParse(input.Text, NumberStyles.Float, CultureInfo.InvariantCulture, out var stageY) &#124;&#124; !double.IsFinite(stageY)) |
| 135 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 136 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: models.Contains(selectedModel) |
| 136 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Popup.CRecipeConfirmDialog.ShowWarning("입력 확인", "검사 기준 모델을 선택해 주세요.") |
| 136 | if | 조건에 따라 분기합니다: if (model.SelectedItem is not int selectedModel &#124;&#124; !models.Contains(selectedModel)) |
| 136 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 137 | local-declaration | 지역 변수를 선언합니다: var shape = (EN_DEFAULT_MACHINING_MODE)machining.SelectedIndex; |
| 137 | variable-initializer | 변수의 초기값을 지정합니다: shape = (EN_DEFAULT_MACHINING_MODE)machining.SelectedIndex |
| 138 | local-declaration | 지역 변수를 선언합니다: var size = current.CrossSize; |
| 138 | variable-initializer | 변수의 초기값을 지정합니다: size = current.CrossSize |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(crossSize.Text, NumberStyles.Float, CultureInfo.InvariantCulture, out size) |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(size) |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Popup.CRecipeConfirmDialog.ShowWarning("입력 확인", "십자 전체 길이에 0보다 큰 유한한 mm 값을 입력해 주세요.") |
| 139 | if | 조건에 따라 분기합니다: if (shape == EN_DEFAULT_MACHINING_MODE.Cross && (!double.TryParse(crossSize.Text, NumberStyles.Float, CultureInfo.InvariantCulture, out size) &#124;&#124; !double.IsFinite(size) &#124;&#124; size <= 0)) |
| 139 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 140 | assignment | 값을 대상에 대입합니다: TestStageY = stageY |
| 140 | assignment | 값을 대상에 대입합니다: MachiningMode = shape |
| 140 | assignment | 값을 대상에 대입합니다: CrossSize = size |
| 140 | local-declaration | 지역 변수를 선언합니다: var options = current with { TestStageY = stageY, MachiningMode = shape, CrossSize = size }; |
| 140 | variable-initializer | 변수의 초기값을 지정합니다: options = current with { TestStageY = stageY, MachiningMode = shape, CrossSize = size } |
| 141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CDefaultOffsetCalibration.ValidateOptions(options) |
| 141 | try | 예외 처리 범위입니다: try |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Popup.CRecipeConfirmDialog.ShowWarning("입력 확인", error.Message) |
| 142 | catch | 지정 예외를 처리합니다: catch (InvalidOperationException error) |
| 142 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 143 | assignment | 값을 대상에 대입합니다: result = (options, selectedModel) |
| 143 | assignment | 값을 대상에 대입합니다: dialog.DialogResult = true |
| 145 | assignment | 값을 대상에 대입합니다: dialog.Content = layout |
| 146 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dialog.ShowDialog() |
| 146 | conditional-expression | 조건에 따라 결과식을 선택합니다: dialog.ShowDialog() == true ? result : null |
| 146 | return | 호출자에게 값 또는 제어를 반환합니다: return dialog.ShowDialog() == true ? result : null; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EditConditions"]
 N0["L109 foreach"]
 M -->|포함| N0
 N1["L121 foreach"]
 M -->|포함| N1
 N2["L135 if"]
 M -->|포함| N2
 N3["L136 if"]
 M -->|포함| N3
 N4["L139 if"]
 M -->|포함| N4
 N5["L141 try"]
 M -->|포함| N5
 N6["L142 catch"]
 N5 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `UpdateMachiningMode` · L83–88

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:83–88](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L83-L88)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void UpdateMachiningMode() |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Views/CDefaultOffsetView.xaml.cs:89–89](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L89-L89) | UpdateMachiningMode | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 85 | local-declaration | 지역 변수를 선언합니다: var cross = machining.SelectedIndex == (int)EN_DEFAULT_MACHINING_MODE.Cross; |
| 85 | variable-initializer | 변수의 초기값을 지정합니다: cross = machining.SelectedIndex == (int)EN_DEFAULT_MACHINING_MODE.Cross |
| 86 | assignment | 값을 대상에 대입합니다: crossSize.IsEnabled = cross |
| 87 | assignment | 값을 대상에 대입합니다: vision.Text = cross ? "Mark Find Setting Single" : "Mark Find Single" |
| 87 | conditional-expression | 조건에 따라 결과식을 선택합니다: cross ? "Mark Find Setting Single" : "Mark Find Single" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `AddInputRow` · L90–96

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:90–96](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L90-L96)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void AddInputRow(int, string, Control) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | int | None | False /  |
| label | string | None | False /  |
| control | Control | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 92 | layout.RowDefinitions.Add | unresolved | None |
| 92 | new | unresolved | None |
| 92 | new GridLength | unresolved | None |
| 93 | new TextBlock | unresolved | None |
| 94 | Grid.SetRow | unresolved | None |
| 94 | layout.Children.Add | unresolved | None |
| 95 | Grid.SetRow | unresolved | None |
| 95 | Grid.SetColumn | unresolved | None |
| 95 | layout.Children.Add | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 92 | assignment | 값을 대상에 대입합니다: Height = new GridLength(43) |
| 92 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.RowDefinitions.Add(new() { Height = new GridLength(43) }) |
| 92 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Height = new GridLength(43) } |
| 92 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(43) |
| 93 | assignment | 값을 대상에 대입합니다: Text = label |
| 93 | assignment | 값을 대상에 대입합니다: VerticalAlignment = VerticalAlignment.Center |
| 93 | assignment | 값을 대상에 대입합니다: FontSize = 15 |
| 93 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = label, VerticalAlignment = VerticalAlignment.Center, FontSize = 15 } |
| 93 | local-declaration | 지역 변수를 선언합니다: var title = new TextBlock { Text = label, VerticalAlignment = VerticalAlignment.Center, FontSize = 15 }; |
| 93 | variable-initializer | 변수의 초기값을 지정합니다: title = new TextBlock { Text = label, VerticalAlignment = VerticalAlignment.Center, FontSize = 15 } |
| 94 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRow(title, row) |
| 94 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.Children.Add(title) |
| 95 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRow(control, row) |
| 95 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetColumn(control, 1) |
| 95 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: layout.Children.Add(control) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `AddFieldRow` · L110–119

[Drilling.UI/Views/CDefaultOffsetView.xaml.cs:110–119](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L110-L119)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void AddFieldRow(int, params string[]) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CDefaultOffsetView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | int | None | False /  |
| values | string[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Views/CDefaultOffsetView.xaml.cs:120–120](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L120-L120) | AddFieldRow | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 112 | fields.RowDefinitions.Add | unresolved | None |
| 112 | new | unresolved | None |
| 112 | new GridLength | unresolved | None |
| 115 | new TextBlock | unresolved | None |
| 116 | new Border | unresolved | None |
| 116 | new Thickness | unresolved | None |
| 117 | Grid.SetRow | unresolved | None |
| 117 | Grid.SetColumn | unresolved | None |
| 117 | fields.Children.Add | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 112 | assignment | 값을 대상에 대입합니다: Height = new GridLength(27) |
| 112 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.RowDefinitions.Add(new() { Height = new GridLength(27) }) |
| 112 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() { Height = new GridLength(27) } |
| 112 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new GridLength(27) |
| 113 | variable-initializer | 변수의 초기값을 지정합니다: col = 0 |
| 113 | for | 초기화·조건·증감이 있는 반복입니다: for (var col = 0; col < values.Length; col++) |
| 115 | assignment | 값을 대상에 대입합니다: Text = values[col] |
| 115 | assignment | 값을 대상에 대입합니다: FontSize = 13 |
| 115 | assignment | 값을 대상에 대입합니다: FontWeight = row == 0 ? FontWeights.Bold : FontWeights.Normal |
| 115 | assignment | 값을 대상에 대입합니다: VerticalAlignment = VerticalAlignment.Center |
| 115 | assignment | 값을 대상에 대입합니다: TextAlignment = TextAlignment.Center |
| 115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TextBlock { Text = values[col], FontSize = 13, FontWeight = row == 0 ? FontWeights.Bold : FontWeights.Normal, VerticalAlignment = VerticalAlignment.Center, TextAlignment = TextAlignment.Center } |
| 115 | conditional-expression | 조건에 따라 결과식을 선택합니다: row == 0 ? FontWeights.Bold : FontWeights.Normal |
| 115 | local-declaration | 지역 변수를 선언합니다: var text = new TextBlock { Text = values[col], FontSize = 13, FontWeight = row == 0 ? FontWeights.Bold : FontWeights.Normal, VerticalAlignment = VerticalAlignment.Center, TextAlignment = TextAlignment.Center }; |
| 115 | variable-initializer | 변수의 초기값을 지정합니다: text = new TextBlock { Text = values[col], FontSize = 13, FontWeight = row == 0 ? FontWeights.Bold : FontWeights.Normal, VerticalAlignment = VerticalAlignment.Center, TextAlignment = TextAlignment.Center } |
| 116 | assignment | 값을 대상에 대입합니다: BorderBrush = System.Windows.Media.Brushes.LightSlateGray |
| 116 | assignment | 값을 대상에 대입합니다: BorderThickness = new Thickness(0,0,0,1) |
| 116 | assignment | 값을 대상에 대입합니다: Child = text |
| 116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Border { BorderBrush = System.Windows.Media.Brushes.LightSlateGray, BorderThickness = new Thickness(0,0,0,1), Child = text } |
| 116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0,0,0,1) |
| 116 | local-declaration | 지역 변수를 선언합니다: var cell = new Border { BorderBrush = System.Windows.Media.Brushes.LightSlateGray, BorderThickness = new Thickness(0,0,0,1), Child = text }; |
| 116 | variable-initializer | 변수의 초기값을 지정합니다: cell = new Border { BorderBrush = System.Windows.Media.Brushes.LightSlateGray, BorderThickness = new Thickness(0,0,0,1), Child = text } |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRow(cell, row) |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetColumn(cell, col) |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fields.Children.Add(cell) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["AddFieldRow"]
 N0["L113 for"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CDefaultOffsetView.xaml.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
