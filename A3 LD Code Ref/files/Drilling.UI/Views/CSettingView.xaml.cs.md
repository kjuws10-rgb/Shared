# Drilling.UI/Views/CSettingView.xaml.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4 |
| 원본 SHA256 | 41315a13e21fdd45679d75223bb422d2aff28a4eee55c2dfa7b21f617d5cbf91 |
| 파일 분류 | code |
| 원본 크기/행 | 4,594 bytes / 139 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/5741d428484254db7efe.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CSettingView | ClassDeclaration | 10–139 | CSettingView: UserControl |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| _isHistoryExpanded | FieldDeclaration | L12–12 | bool Drilling.UI.Views.CSettingView._isHistoryExpanded |
| .ctor | ConstructorDeclaration | L14–17 | Drilling.UI.Views.CSettingView.CSettingView() |
| ToggleHistory_Click | MethodDeclaration | L19–29 | void Drilling.UI.Views.CSettingView.ToggleHistory_Click(object, RoutedEventArgs) |
| CommitSettingGridEdits | MethodDeclaration | L31–41 | void Drilling.UI.Views.CSettingView.CommitSettingGridEdits(object, RoutedEventArgs) |
| CommitGridEdit | MethodDeclaration | L43–47 | void Drilling.UI.Views.CSettingView.CommitGridEdit(DataGrid) |
| OpenParameterValueInput | MethodDeclaration | L49–78 | void Drilling.UI.Views.CSettingView.OpenParameterValueInput(object, RoutedEventArgs) |
| OpenInterfaceValueInput | MethodDeclaration | L80–138 | void Drilling.UI.Views.CSettingView.OpenInterfaceValueInput(object, RoutedEventArgs) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `_isHistoryExpanded` · L12–12

[Drilling.UI/Views/CSettingView.xaml.cs:12–12](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs#L12-L12)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Views.CSettingView._isHistoryExpanded |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Views.CSettingView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L14–17

[Drilling.UI/Views/CSettingView.xaml.cs:14–17](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs#L14-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Views.CSettingView.CSettingView() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CSettingView |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 16 | InitializeComponent | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 16 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: InitializeComponent() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ToggleHistory_Click` · L19–29

[Drilling.UI/Views/CSettingView.xaml.cs:19–29](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs#L19-L29)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Views.CSettingView.ToggleHistory_Click(object, RoutedEventArgs) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CSettingView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sender | object | None | False /  |
| e | RoutedEventArgs | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 21 | CommitSettingGridEdits | resolved | void Drilling.UI.Views.CSettingView.CommitSettingGridEdits(object, RoutedEventArgs) · Drilling.UI/Views/CSettingView.xaml.cs:31 |
| 24 | Grid.SetRow | unresolved | None |
| 25 | Grid.SetRowSpan | unresolved | None |
| 26 | new Thickness | unresolved | None |
| 26 | new Thickness | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 21 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CommitSettingGridEdits(sender, e) |
| 22 | assignment | 값을 대상에 대입합니다: _isHistoryExpanded = !_isHistoryExpanded |
| 23 | assignment | 값을 대상에 대입합니다: SettingEditorPanel.Visibility = _isHistoryExpanded ? Visibility.Collapsed : Visibility.Visible |
| 23 | conditional-expression | 조건에 따라 결과식을 선택합니다: _isHistoryExpanded ? Visibility.Collapsed : Visibility.Visible |
| 24 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRow(HistoryPanel, _isHistoryExpanded ? 0 : 1) |
| 24 | conditional-expression | 조건에 따라 결과식을 선택합니다: _isHistoryExpanded ? 0 : 1 |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Grid.SetRowSpan(HistoryPanel, _isHistoryExpanded ? 2 : 1) |
| 25 | conditional-expression | 조건에 따라 결과식을 선택합니다: _isHistoryExpanded ? 2 : 1 |
| 26 | assignment | 값을 대상에 대입합니다: HistoryPanel.Margin = _isHistoryExpanded ? new Thickness(0) : new Thickness(0, 12, 0, 0) |
| 26 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0) |
| 26 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Thickness(0, 12, 0, 0) |
| 26 | conditional-expression | 조건에 따라 결과식을 선택합니다: _isHistoryExpanded ? new Thickness(0) : new Thickness(0, 12, 0, 0) |
| 27 | assignment | 값을 대상에 대입합니다: HistoryExpandButton.Content = _isHistoryExpanded ? "COLLAPSE" : "EXPAND" |
| 27 | conditional-expression | 조건에 따라 결과식을 선택합니다: _isHistoryExpanded ? "COLLAPSE" : "EXPAND" |
| 28 | assignment | 값을 대상에 대입합니다: e.Handled = true |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CommitSettingGridEdits` · L31–41

[Drilling.UI/Views/CSettingView.xaml.cs:31–41](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs#L31-L41)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Views.CSettingView.CommitSettingGridEdits(object, RoutedEventArgs) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CSettingView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sender | object | None | False /  |
| e | RoutedEventArgs | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Views/CSettingView.xaml.cs:21–21](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs#L21-L21) | CommitSettingGridEdits | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 35 | textBox.GetBindingExpression | unresolved | None |
| 35 | .UpdateSource | unresolved | None |
| 38 | Keyboard.ClearFocus | unresolved | None |
| 39 | CommitGridEdit | candidate | OverloadResolutionFailure |
| 40 | CommitGridEdit | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 33 | if | 조건에 따라 분기합니다: if (Keyboard.FocusedElement is TextBox textBox) |
| 35 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: textBox.GetBindingExpression(TextBox.TextProperty) |
| 35 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .UpdateSource() |
| 38 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Keyboard.ClearFocus() |
| 39 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CommitGridEdit(ParameterGrid) |
| 40 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CommitGridEdit(InterfaceGrid) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CommitSettingGridEdits"]
 N0["L33 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CommitGridEdit` · L43–47

[Drilling.UI/Views/CSettingView.xaml.cs:43–47](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs#L43-L47)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Views.CSettingView.CommitGridEdit(DataGrid) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CSettingView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| grid | DataGrid | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 45 | grid.CommitEdit | unresolved | None |
| 46 | grid.CommitEdit | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: grid.CommitEdit(DataGridEditingUnit.Cell, true) |
| 46 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: grid.CommitEdit(DataGridEditingUnit.Row, true) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OpenParameterValueInput` · L49–78

[Drilling.UI/Views/CSettingView.xaml.cs:49–78](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs#L49-L78)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Views.CSettingView.OpenParameterValueInput(object, RoutedEventArgs) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CSettingView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sender | object | None | False /  |
| e | RoutedEventArgs | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 56 | new CColorPickerDialog | resolved | Drilling.UI.Popup.CColorPickerDialog.CColorPickerDialog(string, string) · Drilling.UI/Popup/CColorPickerDialog.xaml.cs:11 |
| 58 | Window.GetWindow | unresolved | None |
| 60 | colorDialog.ShowDialog | unresolved | None |
| 63 | CommitGridEdit | candidate | OverloadResolutionFailure |
| 69 | new CValueInputDialog | resolved | Drilling.UI.Popup.CValueInputDialog.CValueInputDialog(string, string, Drilling.Common.Managers.EN_RECIPE_DATA_TYPE, double, double) · Drilling.UI/Popup/CValueInputDialog.xaml.cs:13 |
| 71 | Window.GetWindow | unresolved | None |
| 73 | dialog.ShowDialog | unresolved | None |
| 76 | CommitGridEdit | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 51 | if | 조건에 따라 분기합니다: if (sender is not FrameworkElement { DataContext: ST_SYSTEM_PARAMETER_ROW row }) |
| 52 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 53 | assignment | 값을 대상에 대입합니다: e.Handled = true |
| 54 | if | 조건에 따라 분기합니다: if (row.IsColorSetting) |
| 56 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CColorPickerDialog(row.Parameter, row.Value) { Owner = Window.GetWindow(this) } |
| 56 | local-declaration | 지역 변수를 선언합니다: var colorDialog = new CColorPickerDialog(row.Parameter, row.Value) { Owner = Window.GetWindow(this) }; |
| 56 | variable-initializer | 변수의 초기값을 지정합니다: colorDialog = new CColorPickerDialog(row.Parameter, row.Value) { Owner = Window.GetWindow(this) } |
| 58 | assignment | 값을 대상에 대입합니다: Owner = Window.GetWindow(this) |
| 58 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Window.GetWindow(this) |
| 60 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: colorDialog.ShowDialog() |
| 60 | if | 조건에 따라 분기합니다: if (colorDialog.ShowDialog() == true) |
| 62 | assignment | 값을 대상에 대입합니다: row.Value = colorDialog.ResultColor |
| 63 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CommitGridEdit(ParameterGrid) |
| 66 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CValueInputDialog(row.Parameter, row.Value, row.DataType, row.Min, row.Max) { Owner = Window.GetWindow(this) } |
| 69 | local-declaration | 지역 변수를 선언합니다: var dialog = new CValueInputDialog(row.Parameter, row.Value, row.DataType, row.Min, row.Max) { Owner = Window.GetWindow(this) }; |
| 69 | variable-initializer | 변수의 초기값을 지정합니다: dialog = new CValueInputDialog(row.Parameter, row.Value, row.DataType, row.Min, row.Max) { Owner = Window.GetWindow(this) } |
| 71 | assignment | 값을 대상에 대입합니다: Owner = Window.GetWindow(this) |
| 71 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Window.GetWindow(this) |
| 73 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dialog.ShowDialog() |
| 73 | if | 조건에 따라 분기합니다: if (dialog.ShowDialog() == true) |
| 75 | assignment | 값을 대상에 대입합니다: row.Value = dialog.ResultValue |
| 76 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CommitGridEdit(ParameterGrid) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OpenParameterValueInput"]
 N0["L51 if"]
 M -->|포함| N0
 N1["L54 if"]
 M -->|포함| N1
 N2["L60 if"]
 N1 -->|포함| N2
 N3["L73 if"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `OpenInterfaceValueInput` · L80–138

[Drilling.UI/Views/CSettingView.xaml.cs:80–138](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Views/CSettingView.xaml.cs#L80-L138)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Views.CSettingView.OpenInterfaceValueInput(object, RoutedEventArgs) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Views.CSettingView |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sender | object | None | False /  |
| e | RoutedEventArgs | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 99 | new CValueInputDialog | resolved | Drilling.UI.Popup.CValueInputDialog.CValueInputDialog(string, string, Drilling.Common.Managers.EN_RECIPE_DATA_TYPE, double, double) · Drilling.UI/Popup/CValueInputDialog.xaml.cs:13 |
| 101 | Window.GetWindow | unresolved | None |
| 103 | dialog.ShowDialog | unresolved | None |
| 137 | CommitGridEdit | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 82 | if | 조건에 따라 분기합니다: if (sender is not Button { DataContext: ST_SETTING_INTERFACE_ROW row, Tag: string field } button) |
| 83 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 84 | assignment | 값을 대상에 대입합니다: e.Handled = true |
| 85 | local-declaration | 지역 변수를 선언합니다: var currentValue = field switch { "DEVICE" => row.Device, "NUMBER" => row.Number, "NICKNAME" => row.NickName, "SYSTEM_SECTION" => row.SystemSection, "ARG1" => row.Arg1, "ARG2" => row.Arg2, "ARG3" => row.Arg3, "ARG4" => row.Arg4, " |
| 85 | switch-expression | 값별 결과식을 선택합니다: field switch { "DEVICE" => row.Device, "NUMBER" => row.Number, "NICKNAME" => row.NickName, "SYSTEM_SECTION" => row.SystemSection, "ARG1" => row.Arg1, "ARG2" => row.Arg2, "ARG3" => row.Arg3, "ARG4" => row.Arg4, "ARG5" => row.Arg5,  |
| 85 | variable-initializer | 변수의 초기값을 지정합니다: currentValue = field switch { "DEVICE" => row.Device, "NUMBER" => row.Number, "NICKNAME" => row.NickName, "SYSTEM_SECTION" => row.SystemSection, "ARG1" => row.Arg1, "ARG2" => row.Arg2, "ARG3" => row.Arg3, "ARG4" => row.Arg4, "ARG5 |
| 98 | conditional-expression | 조건에 따라 결과식을 선택합니다: field == "NUMBER" ? EN_RECIPE_DATA_TYPE.Int : EN_RECIPE_DATA_TYPE.String |
| 98 | local-declaration | 지역 변수를 선언합니다: var dataType = field == "NUMBER" ? EN_RECIPE_DATA_TYPE.Int : EN_RECIPE_DATA_TYPE.String; |
| 98 | variable-initializer | 변수의 초기값을 지정합니다: dataType = field == "NUMBER" ? EN_RECIPE_DATA_TYPE.Int : EN_RECIPE_DATA_TYPE.String |
| 99 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CValueInputDialog(field, currentValue, dataType, 0, int.MaxValue) { Owner = Window.GetWindow(this) } |
| 99 | local-declaration | 지역 변수를 선언합니다: var dialog = new CValueInputDialog(field, currentValue, dataType, 0, int.MaxValue) { Owner = Window.GetWindow(this) }; |
| 99 | variable-initializer | 변수의 초기값을 지정합니다: dialog = new CValueInputDialog(field, currentValue, dataType, 0, int.MaxValue) { Owner = Window.GetWindow(this) } |
| 101 | assignment | 값을 대상에 대입합니다: Owner = Window.GetWindow(this) |
| 101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Window.GetWindow(this) |
| 103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dialog.ShowDialog() |
| 103 | if | 조건에 따라 분기합니다: if (dialog.ShowDialog() != true) |
| 104 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 105 | switch | 값에 따라 분기합니다: switch (field) |
| 107 | case | 분기값/패턴의 구간입니다: case "DEVICE": |
| 108 | assignment | 값을 대상에 대입합니다: row.Device = dialog.ResultValue |
| 109 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 110 | case | 분기값/패턴의 구간입니다: case "NUMBER": |
| 111 | assignment | 값을 대상에 대입합니다: row.Number = dialog.ResultValue |
| 112 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 113 | case | 분기값/패턴의 구간입니다: case "NICKNAME": |
| 114 | assignment | 값을 대상에 대입합니다: row.NickName = dialog.ResultValue |
| 115 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 116 | case | 분기값/패턴의 구간입니다: case "SYSTEM_SECTION": |
| 117 | assignment | 값을 대상에 대입합니다: row.SystemSection = dialog.ResultValue |
| 118 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 119 | case | 분기값/패턴의 구간입니다: case "ARG1": |
| 120 | assignment | 값을 대상에 대입합니다: row.Arg1 = dialog.ResultValue |
| 121 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 122 | case | 분기값/패턴의 구간입니다: case "ARG2": |
| 123 | assignment | 값을 대상에 대입합니다: row.Arg2 = dialog.ResultValue |
| 124 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 125 | case | 분기값/패턴의 구간입니다: case "ARG3": |
| 126 | assignment | 값을 대상에 대입합니다: row.Arg3 = dialog.ResultValue |
| 127 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 128 | case | 분기값/패턴의 구간입니다: case "ARG4": |
| 129 | assignment | 값을 대상에 대입합니다: row.Arg4 = dialog.ResultValue |
| 130 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 131 | case | 분기값/패턴의 구간입니다: case "ARG5": |
| 132 | assignment | 값을 대상에 대입합니다: row.Arg5 = dialog.ResultValue |
| 133 | break | 해당 반복/분기 구간을 종료합니다: break; |
| 136 | assignment | 값을 대상에 대입합니다: button.Content = dialog.ResultValue |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CommitGridEdit(InterfaceGrid) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["OpenInterfaceValueInput"]
 N0["L82 if"]
 M -->|포함| N0
 N1["L85 switch-expression"]
 M -->|포함| N1
 N2["L103 if"]
 M -->|포함| N2
 N3["L105 switch"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Views/CSettingView.xaml.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
