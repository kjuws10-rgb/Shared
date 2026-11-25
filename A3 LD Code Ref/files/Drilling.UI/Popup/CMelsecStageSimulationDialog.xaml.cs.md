# Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4 |
| 원본 SHA256 | 4d63ccb44f16c33e57672fa63f88dd46a9ab26a9a27f490d41048f26bec8e712 |
| 파일 분류 | code |
| 원본 크기/행 | 22,116 bytes / 443 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../diagrams/files/bec50c285295630a9224.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CMelsecStageSimulationDialog | ClassDeclaration | 15–47 | CMelsecStageSimulationDialog: Window |
| CMelsecStageSimulationPanel | ClassDeclaration | 49–236 | CMelsecStageSimulationPanel: INotifyPropertyChanged |
| CMelsecStageSimulationRow | ClassDeclaration | 238–442 | CMelsecStageSimulationRow: INotifyPropertyChanged |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| _timer | FieldDeclaration | L17–17 | DispatcherTimer Drilling.UI.Popup.CMelsecStageSimulationDialog._timer |
| Panel | PropertyDeclaration | L18–18 | Drilling.UI.Popup.CMelsecStageSimulationPanel Drilling.UI.Popup.CMelsecStageSimulationDialog.Panel |
| get_Panel | GetAccessorDeclaration | L18–18 | Drilling.UI.Popup.CMelsecStageSimulationPanel Drilling.UI.Popup.CMelsecStageSimulationDialog.Panel.get |
| .ctor | ConstructorDeclaration | L20–42 | Drilling.UI.Popup.CMelsecStageSimulationDialog.CMelsecStageSimulationDialog(Drilling.Common.Interface.CInterfaceManager, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>>?) |
| RefreshSnapshot | MethodDeclaration | L45–45 | void Drilling.UI.Popup.CMelsecStageSimulationDialog.RefreshSnapshot(object?, System.EventArgs) |
| CloseClicked | MethodDeclaration | L46–46 | void Drilling.UI.Popup.CMelsecStageSimulationDialog.CloseClicked(object, RoutedEventArgs) |
| _map | FieldDeclaration | L51–51 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.UI.Popup.CMelsecStageSimulationPanel._map |
| _connectionText | FieldDeclaration | L52–52 | string Drilling.UI.Popup.CMelsecStageSimulationPanel._connectionText |
| _lastCanChangeReplies | FieldDeclaration | L53–53 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._lastCanChangeReplies |
| _lastAutomaticReplies | FieldDeclaration | L53–53 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._lastAutomaticReplies |
| _lastCanSetZeroSegments | FieldDeclaration | L53–53 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._lastCanSetZeroSegments |
| _zeroSegmentInput | FieldDeclaration | L54–54 | string Drilling.UI.Popup.CMelsecStageSimulationPanel._zeroSegmentInput |
| _lastZeroSegmentState | FieldDeclaration | L54–54 | string Drilling.UI.Popup.CMelsecStageSimulationPanel._lastZeroSegmentState |
| _setZeroSegments | FieldDeclaration | L55–55 | Drilling.UI.Menu.CButtonCommand? Drilling.UI.Popup.CMelsecStageSimulationPanel._setZeroSegments |
| _seedMeasurements | FieldDeclaration | L56–56 | Drilling.UI.Menu.CButtonCommand? Drilling.UI.Popup.CMelsecStageSimulationPanel._seedMeasurements |
| _seeding | FieldDeclaration | L57–57 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._seeding |
| _lastCanSeed | FieldDeclaration | L57–57 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._lastCanSeed |
| _measurementStatus | FieldDeclaration | L58–58 | string Drilling.UI.Popup.CMelsecStageSimulationPanel._measurementStatus |
| MeasurementStatus | PropertyDeclaration | L59–59 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.MeasurementStatus |
| CanSeedMeasurements | PropertyDeclaration | L60–61 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.CanSeedMeasurements |
| SeedMeasurementsCommand | PropertyDeclaration | L62–87 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationPanel.SeedMeasurementsCommand |
| ZeroSegmentInput | PropertyDeclaration | L89–99 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.ZeroSegmentInput |
| get_ZeroSegmentInput | GetAccessorDeclaration | L91–91 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.ZeroSegmentInput.get |
| set_ZeroSegmentInput | SetAccessorDeclaration | L92–98 | void Drilling.UI.Popup.CMelsecStageSimulationPanel.ZeroSegmentInput.set |
| ZeroSegmentState | PropertyDeclaration | L101–101 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.ZeroSegmentState |
| CanSetZeroSegments | PropertyDeclaration | L102–102 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.CanSetZeroSegments |
| SetZeroSegmentsCommand | PropertyDeclaration | L103–115 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationPanel.SetZeroSegmentsCommand |
| PropertyChanged | EventFieldDeclaration | L117–117 | System.ComponentModel.PropertyChangedEventHandler? Drilling.UI.Popup.CMelsecStageSimulationPanel.PropertyChanged |
| Rows | PropertyDeclaration | L118–118 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Popup.CMelsecStageSimulationRow> Drilling.UI.Popup.CMelsecStageSimulationPanel.Rows |
| get_Rows | GetAccessorDeclaration | L118–118 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Popup.CMelsecStageSimulationRow> Drilling.UI.Popup.CMelsecStageSimulationPanel.Rows.get |
| ConnectionText | PropertyDeclaration | L119–119 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.ConnectionText |
| CanChangeAutomaticReplies | PropertyDeclaration | L120–120 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.CanChangeAutomaticReplies |
| AutomaticReplies | PropertyDeclaration | L122–141 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.AutomaticReplies |
| get_AutomaticReplies | GetAccessorDeclaration | L124–124 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.AutomaticReplies.get |
| set_AutomaticReplies | SetAccessorDeclaration | L125–140 | void Drilling.UI.Popup.CMelsecStageSimulationPanel.AutomaticReplies.set |
| Refresh | MethodDeclaration | L143–218 | void Drilling.UI.Popup.CMelsecStageSimulationPanel.Refresh() |
| ScenarioOrder | MethodDeclaration | L220–234 | int Drilling.UI.Popup.CMelsecStageSimulationPanel.ScenarioOrder(string) |
| SignalOrder | MethodDeclaration | L235–235 | int Drilling.UI.Popup.CMelsecStageSimulationPanel.SignalOrder(string) |
| _canSet | FieldDeclaration | L240–240 | bool Drilling.UI.Popup.CMelsecStageSimulationRow._canSet |
| _currentValue | FieldDeclaration | L241–241 | string Drilling.UI.Popup.CMelsecStageSimulationRow._currentValue |
| _inputValue | FieldDeclaration | L242–242 | string Drilling.UI.Popup.CMelsecStageSimulationRow._inputValue |
| _readScale | FieldDeclaration | L243–243 | double Drilling.UI.Popup.CMelsecStageSimulationRow._readScale |
| _stateBrush | FieldDeclaration | L244–244 | Brush Drilling.UI.Popup.CMelsecStageSimulationRow._stateBrush |
| PropertyChanged | EventFieldDeclaration | L245–245 | System.ComponentModel.PropertyChangedEventHandler? Drilling.UI.Popup.CMelsecStageSimulationRow.PropertyChanged |
| Id | PropertyDeclaration | L246–246 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Id |
| get_Id | GetAccessorDeclaration | L246–246 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Id.get |
| DeviceNo | PropertyDeclaration | L247–247 | int Drilling.UI.Popup.CMelsecStageSimulationRow.DeviceNo |
| get_DeviceNo | GetAccessorDeclaration | L247–247 | int Drilling.UI.Popup.CMelsecStageSimulationRow.DeviceNo.get |
| Scenario | PropertyDeclaration | L248–248 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Scenario |
| get_Scenario | GetAccessorDeclaration | L248–248 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Scenario.get |
| Name | PropertyDeclaration | L249–249 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Name |
| get_Name | GetAccessorDeclaration | L249–249 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Name.get |
| Address | PropertyDeclaration | L250–250 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Address |
| get_Address | GetAccessorDeclaration | L250–250 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Address.get |
| Description | PropertyDeclaration | L251–251 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Description |
| get_Description | GetAccessorDeclaration | L251–251 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Description.get |
| CurrentValue | PropertyDeclaration | L252–252 | string Drilling.UI.Popup.CMelsecStageSimulationRow.CurrentValue |
| StateBrush | PropertyDeclaration | L253–253 | Brush Drilling.UI.Popup.CMelsecStageSimulationRow.StateBrush |
| CanSet | PropertyDeclaration | L254–254 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.CanSet |
| IsNumeric | PropertyDeclaration | L255–255 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsNumeric |
| get_IsNumeric | GetAccessorDeclaration | L255–255 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsNumeric.get |
| IsText | PropertyDeclaration | L256–256 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsText |
| get_IsText | GetAccessorDeclaration | L256–256 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsText.get |
| HasValueInput | PropertyDeclaration | L257–257 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.HasValueInput |
| IsCount | PropertyDeclaration | L258–258 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsCount |
| get_IsCount | GetAccessorDeclaration | L258–258 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsCount.get |
| IsMeasurement | PropertyDeclaration | L259–259 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsMeasurement |
| get_IsMeasurement | GetAccessorDeclaration | L259–259 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsMeasurement.get |
| InputHint | PropertyDeclaration | L260–260 | string Drilling.UI.Popup.CMelsecStageSimulationRow.InputHint |
| IsAlignBusyWord | PropertyDeclaration | L261–261 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsAlignBusyWord |
| get_IsAlignBusyWord | GetAccessorDeclaration | L261–261 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsAlignBusyWord.get |
| InputValue | PropertyDeclaration | L263–273 | string Drilling.UI.Popup.CMelsecStageSimulationRow.InputValue |
| get_InputValue | GetAccessorDeclaration | L265–265 | string Drilling.UI.Popup.CMelsecStageSimulationRow.InputValue.get |
| set_InputValue | SetAccessorDeclaration | L266–272 | void Drilling.UI.Popup.CMelsecStageSimulationRow.InputValue.set |
| SetOnCommand | PropertyDeclaration | L275–275 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetOnCommand |
| get_SetOnCommand | GetAccessorDeclaration | L275–275 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetOnCommand.get |
| SetOffCommand | PropertyDeclaration | L276–276 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetOffCommand |
| get_SetOffCommand | GetAccessorDeclaration | L276–276 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetOffCommand.get |
| SetValueCommand | PropertyDeclaration | L277–277 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetValueCommand |
| get_SetValueCommand | GetAccessorDeclaration | L277–277 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetValueCommand.get |
| .ctor | ConstructorDeclaration | L279–376 | Drilling.UI.Popup.CMelsecStageSimulationRow.CMelsecStageSimulationRow(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, System.Action<int>, System.Action<string>?, System.Action<double>?, System.Action<string>?) |
| Set | LocalFunctionStatement | L326–338 | void Set(int) |
| Refresh | MethodDeclaration | L378–439 | void Drilling.UI.Popup.CMelsecStageSimulationRow.Refresh(Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE?, bool) |
| Changed | MethodDeclaration | L441–441 | void Drilling.UI.Popup.CMelsecStageSimulationRow.Changed(string?) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `_timer` · L17–17

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:17–17](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L17-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | DispatcherTimer Drilling.UI.Popup.CMelsecStageSimulationDialog._timer |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | DispatcherTimer |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationDialog |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Panel` · L18–18

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Popup.CMelsecStageSimulationPanel Drilling.UI.Popup.CMelsecStageSimulationDialog.Panel |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Popup.CMelsecStageSimulationPanel |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationDialog |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Panel` · L18–18

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Popup.CMelsecStageSimulationPanel Drilling.UI.Popup.CMelsecStageSimulationDialog.Panel.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Popup.CMelsecStageSimulationPanel |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationDialog |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L20–42

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:20–42](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L20-L42)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Popup.CMelsecStageSimulationDialog.CMelsecStageSimulationDialog(Drilling.Common.Interface.CInterfaceManager, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>>?) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationDialog |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| interfaces | Drilling.Common.Interface.CInterfaceManager | None | False /  |
| readRecipe | System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:3323–3326](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L3323-L3326) | new CMelsecStageSimulationDialog | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 22 | InitializeComponent | unresolved | None |
| 23 | new | resolved | Drilling.UI.Popup.CMelsecStageSimulationPanel.CMelsecStageSimulationPanel(Drilling.Common.Interface.CInterfaceManager, System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>>?) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:49 |
| 25 | Math.Min | candidate | OverloadResolutionFailure |
| 26 | new | unresolved | None |
| 28 | TimeSpan.FromMilliseconds | resolved | System.TimeSpan System.TimeSpan.FromMilliseconds(long) |
| 33 | Panel.Refresh | resolved | void Drilling.UI.Popup.CMelsecStageSimulationPanel.Refresh() · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:143 |
| 34 | _timer.Start | unresolved | None |
| 38 | _timer.Stop | unresolved | None |
| 41 | Panel.Refresh | resolved | void Drilling.UI.Popup.CMelsecStageSimulationPanel.Refresh() · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:143 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 22 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: InitializeComponent() |
| 23 | assignment | 값을 대상에 대입합니다: Panel = new(interfaces, readRecipe) |
| 23 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(interfaces, readRecipe) |
| 24 | assignment | 값을 대상에 대입합니다: DataContext = Panel |
| 25 | assignment | 값을 대상에 대입합니다: Height = Math.Min(Height, SystemParameters.WorkArea.Height * 0.9) |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(Height, SystemParameters.WorkArea.Height * 0.9) |
| 26 | assignment | 값을 대상에 대입합니다: _timer = new(DispatcherPriority.Background, Dispatcher) { Interval = TimeSpan.FromMilliseconds(500) } |
| 26 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(DispatcherPriority.Background, Dispatcher) { Interval = TimeSpan.FromMilliseconds(500) } |
| 28 | assignment | 값을 대상에 대입합니다: Interval = TimeSpan.FromMilliseconds(500) |
| 28 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TimeSpan.FromMilliseconds(500) |
| 30 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: _timer.Tick += RefreshSnapshot |
| 31 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: Loaded += (_, _) => { Panel.Refresh(); _timer.Start(); } |
| 33 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Panel.Refresh() |
| 34 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _timer.Start() |
| 36 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: Closed += (_, _) => { _timer.Stop(); _timer.Tick -= RefreshSnapshot; } |
| 38 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _timer.Stop() |
| 39 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: _timer.Tick -= RefreshSnapshot |
| 41 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Panel.Refresh() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshSnapshot` · L45–45

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:45–45](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L45-L45)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Popup.CMelsecStageSimulationDialog.RefreshSnapshot(object?, System.EventArgs) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationDialog |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sender | object? | None | False /  |
| e | System.EventArgs | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 45 | Panel.Refresh | resolved | void Drilling.UI.Popup.CMelsecStageSimulationPanel.Refresh() · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:143 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Panel.Refresh() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CloseClicked` · L46–46

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:46–46](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L46-L46)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Popup.CMelsecStageSimulationDialog.CloseClicked(object, RoutedEventArgs) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationDialog |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sender | object | None | False /  |
| e | RoutedEventArgs | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 46 | Close | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 46 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Close() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_map` · L51–51

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:51–51](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L51-L51)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.UI.Popup.CMelsecStageSimulationPanel._map |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 51 | variable-initializer | 변수의 초기값을 지정합니다: _map = [] |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_connectionText` · L52–52

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:52–52](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L52-L52)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel._connectionText |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 52 | variable-initializer | 변수의 초기값을 지정합니다: _connectionText = "" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastCanChangeReplies` · L53–53

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:53–53](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L53-L53)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._lastCanChangeReplies |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 53 | variable-initializer | 변수의 초기값을 지정합니다: _lastCanChangeReplies = true |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastAutomaticReplies` · L53–53

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:53–53](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L53-L53)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._lastAutomaticReplies |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 53 | variable-initializer | 변수의 초기값을 지정합니다: _lastAutomaticReplies = true |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastCanSetZeroSegments` · L53–53

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:53–53](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L53-L53)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._lastCanSetZeroSegments |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_zeroSegmentInput` · L54–54

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:54–54](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L54-L54)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel._zeroSegmentInput |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 54 | variable-initializer | 변수의 초기값을 지정합니다: _zeroSegmentInput = "0" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastZeroSegmentState` · L54–54

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:54–54](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L54-L54)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel._lastZeroSegmentState |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 54 | variable-initializer | 변수의 초기값을 지정합니다: _lastZeroSegmentState = "" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_setZeroSegments` · L55–55

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:55–55](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L55-L55)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand? Drilling.UI.Popup.CMelsecStageSimulationPanel._setZeroSegments |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand? |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_seedMeasurements` · L56–56

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:56–56](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L56-L56)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand? Drilling.UI.Popup.CMelsecStageSimulationPanel._seedMeasurements |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand? |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_seeding` · L57–57

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:57–57](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L57-L57)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._seeding |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_lastCanSeed` · L57–57

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:57–57](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L57-L57)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel._lastCanSeed |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_measurementStatus` · L58–58

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:58–58](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L58-L58)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel._measurementStatus |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 58 | variable-initializer | 변수의 초기값을 지정합니다: _measurementStatus = "Distortion 측정값: mm 단위로 입력하세요. BASE 복사 후 일부 값만 바꿔서 시험할 수 있습니다." |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `MeasurementStatus` · L59–59

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:59–59](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L59-L59)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.MeasurementStatus |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CanSeedMeasurements` · L60–61

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:60–61](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L60-L61)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.CanSeedMeasurements |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 61 | Rows.Count | resolved | int System.Collections.Generic.IEnumerable<Drilling.UI.Popup.CMelsecStageSimulationRow>.Count<Drilling.UI.Popup.CMelsecStageSimulationRow>(System.Func<Drilling.UI.Popup.CMelsecStageSimulationRow, bool>) |
| 61 | Rows.Where(row => row.IsMeasurement).All | resolved | bool System.Collections.Generic.IEnumerable<Drilling.UI.Popup.CMelsecStageSimulationRow>.All<Drilling.UI.Popup.CMelsecStageSimulationRow>(System.Func<Drilling.UI.Popup.CMelsecStageSimulationRow, bool>) |
| 61 | Rows.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Popup.CMelsecStageSimulationRow> System.Collections.Generic.IEnumerable<Drilling.UI.Popup.CMelsecStageSimulationRow>.Where<Drilling.UI.Popup.CMelsecStageSimulationRow>(System.Func<Drilling.UI.Popup.CMelsecStageSimulationRow, bool>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 61 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Rows.Count(row => row.IsMeasurement) |
| 61 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Rows.Where(row => row.IsMeasurement).All(row => row.CanSet) |
| 61 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Rows.Where(row => row.IsMeasurement) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `SeedMeasurementsCommand` · L62–87

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:62–87](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L62-L87)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationPanel.SeedMeasurementsCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 62 | new | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 65 | .NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 68 | readRecipe! | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>>.Invoke(System.Threading.CancellationToken) |
| 68 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 69 | new Dictionary<string, double> | resolved | System.Collections.Generic.Dictionary<string, double>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 74 | recipe.Parameters.SingleOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.SingleOrDefault<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 74 | p.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 75 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 75 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 76 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 77 | CAlignDistortionCycle.ResultId | resolved | string Drilling.Common.Correction.CAlignDistortionCycle.ResultId(string) · Drilling.Common/Correction/CAlignInterpolation.cs:247 |
| 79 | interfaces.Melsec.SetDistortionMeasurementSimulationValues | resolved | void Drilling.Common.Interface.CMelsec.SetDistortionMeasurementSimulationValues(System.Collections.Generic.IReadOnlyDictionary<string, double>) · Drilling.Common/Interface/Melsec/CMelsec.cs:3098 |
| 80 | Rows.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Popup.CMelsecStageSimulationRow> System.Collections.Generic.IEnumerable<Drilling.UI.Popup.CMelsecStageSimulationRow>.Where<Drilling.UI.Popup.CMelsecStageSimulationRow>(System.Func<Drilling.UI.Popup.CMelsecStageSimulationRow, bool>) |
| 80 | values[row.Id].ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 82 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 82 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 82 | nameof | unresolved | None |
| 83 | Refresh | resolved | void Drilling.UI.Popup.CMelsecStageSimulationPanel.Refresh() · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:143 |
| 85 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:110 |
| 86 | .NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 62 | assignment | 값을 대상에 대입합니다: _seedMeasurements ??= new(async _ => { if (!CanSeedMeasurements) return; _seeding = true; _seedMeasurements?.NotifyCanExecuteChanged(); try { var recipe = await readRecipe!(CancellationToken.None) ?? throw new InvalidOperationExce |
| 62 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(async _ => { if (!CanSeedMeasurements) return; _seeding = true; _seedMeasurements?.NotifyCanExecuteChanged(); try { var recipe = await readRecipe!(CancellationToken.None) ?? throw new InvalidOperationException("선택된 R… |
| 64 | if | 조건에 따라 분기합니다: if (!CanSeedMeasurements) |
| 64 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 65 | assignment | 값을 대상에 대입합니다: _seeding = true |
| 65 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .NotifyCanExecuteChanged() |
| 66 | try | 예외 처리 범위입니다: try |
| 68 | await | 비동기 완료를 기다립니다: await readRecipe!(CancellationToken.None) |
| 68 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: readRecipe!(CancellationToken.None) |
| 68 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("선택된 Recipe가 없습니다.") |
| 68 | local-declaration | 지역 변수를 선언합니다: var recipe = await readRecipe!(CancellationToken.None) ?? throw new InvalidOperationException("선택된 Recipe가 없습니다."); |
| 68 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("선택된 Recipe가 없습니다.") |
| 68 | variable-initializer | 변수의 초기값을 지정합니다: recipe = await readRecipe!(CancellationToken.None) ?? throw new InvalidOperationException("선택된 Recipe가 없습니다.") |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase) |
| 69 | local-declaration | 지역 변수를 선언합니다: var values = new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase); |
| 69 | variable-initializer | 변수의 초기값을 지정합니다: values = new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase) |
| 70 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 70 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < 10; index++) |
| 71 | foreach | 컬렉션 요소를 순회합니다: foreach (var axis in new[] { "X", "Y" }) |
| 73 | conditional-expression | 조건에 따라 결과식을 선택합니다: index < 4 ? "AK" + (index + 1) : "DK" + (index - 3) |
| 73 | local-declaration | 지역 변수를 선언합니다: var key = $"ALIGNBASE_{(index < 4 ? "AK" + (index + 1) : "DK" + (index - 3))}_{axis}"; |
| 73 | variable-initializer | 변수의 초기값을 지정합니다: key = $"ALIGNBASE_{(index < 4 ? "AK" + (index + 1) : "DK" + (index - 3))}_{axis}" |
| 74 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.SingleOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase)) |
| 74 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: p.Key.Equals(key, StringComparison.OrdinalIgnoreCase) |
| 74 | local-declaration | 지역 변수를 선언합니다: var text = recipe.Parameters.SingleOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value; |
| 74 | variable-initializer | 변수의 초기값을 지정합니다: text = recipe.Parameters.SingleOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value |
| 75 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 75 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 75 | if | 조건에 따라 분기합니다: if (!double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) &#124;&#124; !double.IsFinite(value)) |
| 76 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Recipe {recipe.Name}의 {key} 값을 확인하세요.") |
| 76 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Recipe {recipe.Name}의 {key} 값을 확인하세요."); |
| 77 | assignment | 값을 대상에 대입합니다: values[CAlignDistortionCycle.ResultId(key)] = value |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignDistortionCycle.ResultId(key) |
| 79 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.SetDistortionMeasurementSimulationValues(values) |
| 80 | assignment | 값을 대상에 대입합니다: row.InputValue = values[row.Id].ToString("0.000", CultureInfo.InvariantCulture) |
| 80 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Rows.Where(row => row.IsMeasurement) |
| 80 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values[row.Id].ToString("0.000", CultureInfo.InvariantCulture) |
| 80 | foreach | 컬렉션 요소를 순회합니다: foreach (var row in Rows.Where(row => row.IsMeasurement)) |
| 81 | assignment | 값을 대상에 대입합니다: _measurementStatus = $"Recipe {recipe.Name} BASE → 시뮬레이션 측정값 20개 반영 완료 (mm)" |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(MeasurementStatus))) |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(MeasurementStatus)) |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(MeasurementStatus) |
| 83 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Refresh() |
| 85 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("Distortion 시뮬 측정값", error.Message) |
| 85 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 86 | assignment | 값을 대상에 대입합니다: _seeding = false |
| 86 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .NotifyCanExecuteChanged() |
| 86 | finally | 종료 정리 구간입니다: finally |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SeedMeasurementsCommand"]
 N0["L64 if"]
 M -->|포함| N0
 N1["L66 try"]
 M -->|포함| N1
 N2["L70 for"]
 N1 -->|포함| N2
 N3["L71 foreach"]
 N2 -->|포함| N3
 N4["L75 if"]
 N3 -->|포함| N4
 N5["L80 foreach"]
 N1 -->|포함| N5
 N6["L85 catch"]
 N1 -->|포함| N6
 N7["L86 finally"]
 N1 -->|포함| N7
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroSegmentInput` · L89–99

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:89–99](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L89-L99)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.ZeroSegmentInput |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ZeroSegmentInput` · L91–91

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:91–91](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L91-L91)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.ZeroSegmentInput.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_ZeroSegmentInput` · L92–98

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:92–98](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L92-L98)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Popup.CMelsecStageSimulationPanel.ZeroSegmentInput.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 97 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 97 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 97 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 94 | if | 조건에 따라 분기합니다: if (_zeroSegmentInput == value) |
| 95 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 96 | assignment | 값을 대상에 대입합니다: _zeroSegmentInput = value |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(ZeroSegmentInput))) |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(ZeroSegmentInput)) |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(ZeroSegmentInput) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["set_ZeroSegmentInput"]
 N0["L94 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroSegmentState` · L101–101

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:101–101](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L101-L101)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.ZeroSegmentState |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 101 | conditional-expression | 조건에 따라 결과식을 선택합니다: interfaces.StageReviewSequences.LastIofPlan is { ZeroLine: true } plan ? $"{interfaces.StageReviewSequences.SimulatedZeroLineCompletedSegments} / {plan.Points.Count} 구간 완료" : "0선 계획 없음" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CanSetZeroSegments` · L102–102

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:102–102](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L102-L102)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.CanSetZeroSegments |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 102 | interfaces.IsSimul | resolved | bool Drilling.Common.Interface.CInterfaceManager.IsSimul(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:343 |
| 102 | interfaces.Melsec.Map.Single | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Single<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.IsSimul(EN_EQP_MODULE.Melsec, interfaces.Melsec.Map.Single(row => row.Id == "IOF_SETTING").DeviceNo) |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.Map.Single(row => row.Id == "IOF_SETTING") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `SetZeroSegmentsCommand` · L103–115

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:103–115](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L103-L115)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationPanel.SetZeroSegmentsCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 103 | new | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 107 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 108 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 109 | interfaces.StageReviewSequences.SetSimulatedZeroLineCompletedSegments | resolved | void Drilling.Common.Station.CStageReviewSequences.SetSimulatedZeroLineCompletedSegments(int) · Drilling.Common/Station/CStageReviewSequences.cs:36 |
| 113 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:110 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 103 | assignment | 값을 대상에 대입합니다: _setZeroSegments ??= new(_ => { try { if (!int.TryParse(ZeroSegmentInput, NumberStyles.Integer, CultureInfo.InvariantCulture, out var number)) throw new InvalidOperationException("0~N의 정수를 입력해 주세요."); interfaces.StageReviewSequenc |
| 103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_ => { try { if (!int.TryParse(ZeroSegmentInput, NumberStyles.Integer, CultureInfo.InvariantCulture, out var number)) throw new InvalidOperationException("0~N의 정수를 입력해 주세요."); interfaces.StageReviewSequences.SetSimul… |
| 105 | try | 예외 처리 범위입니다: try |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(ZeroSegmentInput, NumberStyles.Integer, CultureInfo.InvariantCulture, out var number) |
| 107 | if | 조건에 따라 분기합니다: if (!int.TryParse(ZeroSegmentInput, NumberStyles.Integer, CultureInfo.InvariantCulture, out var number)) |
| 108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("0~N의 정수를 입력해 주세요.") |
| 108 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("0~N의 정수를 입력해 주세요."); |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.StageReviewSequences.SetSimulatedZeroLineCompletedSegments(number) |
| 111 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("0선 촬영구간", error.Message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetZeroSegmentsCommand"]
 N0["L105 try"]
 M -->|포함| N0
 N1["L107 if"]
 N0 -->|포함| N1
 N2["L111 catch"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PropertyChanged` · L117–117

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:117–117](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L117-L117)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.ComponentModel.PropertyChangedEventHandler? Drilling.UI.Popup.CMelsecStageSimulationPanel.PropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.ComponentModel.PropertyChangedEventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Rows` · L118–118

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:118–118](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L118-L118)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Popup.CMelsecStageSimulationRow> Drilling.UI.Popup.CMelsecStageSimulationPanel.Rows |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Popup.CMelsecStageSimulationRow> |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Rows` · L118–118

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:118–118](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L118-L118)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Popup.CMelsecStageSimulationRow> Drilling.UI.Popup.CMelsecStageSimulationPanel.Rows.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.ObjectModel.ObservableCollection<Drilling.UI.Popup.CMelsecStageSimulationRow> |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ConnectionText` · L119–119

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:119–119](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L119-L119)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationPanel.ConnectionText |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CanChangeAutomaticReplies` · L120–120

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:120–120](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L120-L120)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.CanChangeAutomaticReplies |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `AutomaticReplies` · L122–141

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:122–141](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L122-L141)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.AutomaticReplies |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_AutomaticReplies` · L124–124

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:124–124](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L124-L124)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationPanel.AutomaticReplies.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_AutomaticReplies` · L125–140

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:125–140](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L125-L140)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Popup.CMelsecStageSimulationPanel.AutomaticReplies.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 135 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:110 |
| 139 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 139 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 139 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 127 | if | 조건에 따라 분기합니다: if (value == AutomaticReplies) |
| 128 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 129 | try | 예외 처리 범위입니다: try |
| 131 | assignment | 값을 대상에 대입합니다: interfaces.StageReviewSequences.AutomaticSimulationReplies = value |
| 133 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("Stage 자동 응답", error.Message) |
| 138 | assignment | 값을 대상에 대입합니다: _lastAutomaticReplies = AutomaticReplies |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(AutomaticReplies))) |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(AutomaticReplies)) |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(AutomaticReplies) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["set_AutomaticReplies"]
 N0["L127 if"]
 M -->|포함| N0
 N1["L129 try"]
 M -->|포함| N1
 N2["L133 catch"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Refresh` · L143–218

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:143–218](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L143-L218)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Popup.CMelsecStageSimulationPanel.Refresh() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:33–33](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L33-L33) | Panel.Refresh | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:41–41](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L41-L41) | Panel.Refresh | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:45–45](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L45-L45) | Panel.Refresh | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:83–83](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L83-L83) | Refresh | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 148 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 148 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 148 | nameof | unresolved | None |
| 154 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 154 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 154 | nameof | unresolved | None |
| 155 | .NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 158 | interfaces.Melsec.GetCachedSnapshot | resolved | System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE> Drilling.Common.Interface.CMelsec.GetCachedSnapshot(out System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) · Drilling.Common/Interface/Melsec/CMelsec.cs:2539 |
| 159 | map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWindowSimulationSignal(row) &#124;&#124; CMelsec.IsDistortionMeasurementSimulationValue(row)).OrderBy(row => ScenarioOrder(row.Group)).ThenBy(ro… | resolved | Drilling.Common.Interface.ST_MELSEC_MAP_DATA[] System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ToArray<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>() |
| 159 | map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWindowSimulationSignal(row) &#124;&#124; CMelsec.IsDistortionMeasurementSimulationValue(row)).OrderBy(row => ScenarioOrder(row.Group)).ThenBy(ro… | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ThenBy<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>) |
| 159 | map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWindowSimulationSignal(row) &#124;&#124; CMelsec.IsDistortionMeasurementSimulationValue(row)).OrderBy(row => ScenarioOrder(row.Group)).ThenBy(ro… | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ThenBy<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>) |
| 159 | map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWindowSimulationSignal(row) &#124;&#124; CMelsec.IsDistortionMeasurementSimulationValue(row)).OrderBy(row => ScenarioOrder(row.Group)).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ThenBy<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>) |
| 159 | map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWindowSimulationSignal(row) &#124;&#124; CMelsec.IsDistortionMeasurementSimulationValue(row)).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.OrderBy<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>) |
| 159 | map.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Where<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, bool>) |
| 159 | CMelsec.IsStageGlassDataSimulationValue | resolved | bool Drilling.Common.Interface.CMelsec.IsStageGlassDataSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3060 |
| 159 | CMelsec.IsStageFlowSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageFlowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3127 |
| 159 | CMelsec.IsStageSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3164 |
| 159 | CMelsec.IsStageAlignSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageAlignSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3165 |
| 159 | CMelsec.IsStageProtectWindowSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageProtectWindowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3144 |
| 159 | CMelsec.IsDistortionMeasurementSimulationValue | resolved | bool Drilling.Common.Interface.CMelsec.IsDistortionMeasurementSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3058 |
| 159 | ScenarioOrder | resolved | int Drilling.UI.Popup.CMelsecStageSimulationPanel.ScenarioOrder(string) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:220 |
| 159 | SignalOrder | resolved | int Drilling.UI.Popup.CMelsecStageSimulationPanel.SignalOrder(string) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:235 |
| 160 | _map.SequenceEqual | resolved | bool System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.SequenceEqual<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>(System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>) |
| 163 | Rows.Clear | resolved | void System.Collections.ObjectModel.Collection<Drilling.UI.Popup.CMelsecStageSimulationRow>.Clear() |
| 165 | Rows.Add | resolved | void System.Collections.ObjectModel.Collection<Drilling.UI.Popup.CMelsecStageSimulationRow>.Add(Drilling.UI.Popup.CMelsecStageSimulationRow) |
| 165 | new | resolved | Drilling.UI.Popup.CMelsecStageSimulationRow.CMelsecStageSimulationRow(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, System.Action<int>, System.Action<string>?, System.Action<double>?, System.Action<string>?) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:279 |
| 167 | CMelsec.IsStageGlassDataSimulationValue | resolved | bool Drilling.Common.Interface.CMelsec.IsStageGlassDataSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3060 |
| 168 | interfaces.Melsec.SetStageGlassDataSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.SetStageGlassDataSimulationValue(string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3065 |
| 168 | value.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 169 | CMelsec.IsStageAlignSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageAlignSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3165 |
| 170 | interfaces.Melsec.SetStageAlignSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.SetStageAlignSimulationValue(string, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3167 |
| 171 | CMelsec.IsStageProtectWindowSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageProtectWindowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3144 |
| 172 | interfaces.Melsec.SetStageProtectWindowSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.SetStageProtectWindowSimulationValue(string, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3146 |
| 173 | CMelsec.IsStageFlowSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageFlowSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3127 |
| 174 | interfaces.Melsec.SetStageFlowSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.SetStageFlowSimulationValue(string, int) · Drilling.Common/Interface/Melsec/CMelsec.cs:3128 |
| 176 | interfaces.Melsec.SetStageSimulationSignal | resolved | void Drilling.Common.Interface.CMelsec.SetStageSimulationSignal(string, bool) · Drilling.Common/Interface/Melsec/CMelsec.cs:3185 |
| 177 | interfaces.Melsec.SetDistortionMeasurementSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.SetDistortionMeasurementSimulationValue(string, double) · Drilling.Common/Interface/Melsec/CMelsec.cs:3097 |
| 178 | interfaces.Melsec.SetStageGlassDataSimulationValue | resolved | void Drilling.Common.Interface.CMelsec.SetStageGlassDataSimulationValue(string, string) · Drilling.Common/Interface/Melsec/CMelsec.cs:3065 |
| 181 | interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec).ToDictionary | resolved | System.Collections.Generic.Dictionary<int, Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.ToDictionary<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, int>(System.Func<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, int>) |
| 181 | interfaces.GetInterfaceCommunicationList | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.Common.Interface.CInterfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE?) · Drilling.Common/Interface/CInterfaceManager.cs:472 |
| 182 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |
| 182 | signals.Select(row => row.DeviceNo).Distinct().Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<int>.Select<int, string>(System.Func<int, string>) |
| 182 | signals.Select(row => row.DeviceNo).Distinct | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<int>.Distinct<int>() |
| 182 | signals.Select | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.Select<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, int>) |
| 184 | connections.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.TryGetValue(int, out Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS) |
| 184 | status.ConnectionState.ToString().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 184 | status.ConnectionState.ToString | resolved · 동적 구현 선택 가능 | string System.Enum.ToString() |
| 192 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 192 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 192 | nameof | unresolved | None |
| 197 | values.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE) |
| 198 | row.Refresh | resolved | void Drilling.UI.Popup.CMelsecStageSimulationRow.Refresh(Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE?, bool) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:378 |
| 198 | interfaces.IsSimul | resolved | bool Drilling.Common.Interface.CInterfaceManager.IsSimul(Drilling.Common.Interface.EN_EQP_MODULE, int) · Drilling.Common/Interface/CInterfaceManager.cs:343 |
| 204 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 204 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 204 | nameof | unresolved | None |
| 205 | .NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 210 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 210 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 210 | nameof | unresolved | None |
| 216 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 216 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |
| 216 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 145 | if | 조건에 따라 분기합니다: if (_lastZeroSegmentState != ZeroSegmentState) |
| 147 | assignment | 값을 대상에 대입합니다: _lastZeroSegmentState = ZeroSegmentState |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(ZeroSegmentState))) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(ZeroSegmentState)) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(ZeroSegmentState) |
| 151 | if | 조건에 따라 분기합니다: if (_lastCanSetZeroSegments != CanSetZeroSegments) |
| 153 | assignment | 값을 대상에 대입합니다: _lastCanSetZeroSegments = CanSetZeroSegments |
| 154 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(CanSetZeroSegments))) |
| 154 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(CanSetZeroSegments)) |
| 154 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(CanSetZeroSegments) |
| 155 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .NotifyCanExecuteChanged() |
| 158 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.GetCachedSnapshot(out var map) |
| 158 | local-declaration | 지역 변수를 선언합니다: var values = interfaces.Melsec.GetCachedSnapshot(out var map); |
| 158 | variable-initializer | 변수의 초기값을 지정합니다: values = interfaces.Melsec.GetCachedSnapshot(out var map) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWind… |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWind… |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWind… |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWind… |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWind… |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWind… |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageGlassDataSimulationValue(row) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageFlowSimulationSignal(row) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageSimulationSignal(row) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageAlignSimulationSignal(row) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageProtectWindowSimulationSignal(row) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsDistortionMeasurementSimulationValue(row) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ScenarioOrder(row.Group) |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SignalOrder(row.Id) |
| 159 | local-declaration | 지역 변수를 선언합니다: var signals = map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtect |
| 159 | variable-initializer | 변수의 초기값을 지정합니다: signals = map.Where(row => CMelsec.IsStageGlassDataSimulationValue(row) &#124;&#124; CMelsec.IsStageFlowSimulationSignal(row) &#124;&#124; CMelsec.IsStageSimulationSignal(row) &#124;&#124; CMelsec.IsStageAlignSimulationSignal(row) &#124;&#124; CMelsec.IsStageProtectWind |
| 160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _map.SequenceEqual(signals) |
| 160 | if | 조건에 따라 분기합니다: if (!_map.SequenceEqual(signals)) |
| 162 | assignment | 값을 대상에 대입합니다: _map = signals |
| 163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Rows.Clear() |
| 164 | foreach | 컬렉션 요소를 순회합니다: foreach (var signal in signals) |
| 165 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Rows.Add(new(signal, value => { if (CMelsec.IsStageGlassDataSimulationValue(signal)) interfaces.Melsec.SetStageGlassDataSimulationValue(signal.Id, value.ToString(CultureInfo.InvariantCulture)); else if (CMelsec.IsStageAl… |
| 165 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(signal, value => { if (CMelsec.IsStageGlassDataSimulationValue(signal)) interfaces.Melsec.SetStageGlassDataSimulationValue(signal.Id, value.ToString(CultureInfo.InvariantCulture)); else if (CMelsec.IsStageAlignSimula… |
| 167 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageGlassDataSimulationValue(signal) |
| 167 | if | 조건에 따라 분기합니다: if (CMelsec.IsStageGlassDataSimulationValue(signal)) |
| 168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.SetStageGlassDataSimulationValue(signal.Id, value.ToString(CultureInfo.InvariantCulture)) |
| 168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: value.ToString(CultureInfo.InvariantCulture) |
| 169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageAlignSimulationSignal(signal) |
| 169 | else | 앞 조건이 거짓인 경로입니다: else |
| 169 | if | 조건에 따라 분기합니다: if (CMelsec.IsStageAlignSimulationSignal(signal)) |
| 170 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.SetStageAlignSimulationValue(signal.Id, value) |
| 171 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageProtectWindowSimulationSignal(signal) |
| 171 | else | 앞 조건이 거짓인 경로입니다: else |
| 171 | if | 조건에 따라 분기합니다: if (CMelsec.IsStageProtectWindowSimulationSignal(signal)) |
| 172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.SetStageProtectWindowSimulationValue(signal.Id, value) |
| 173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageFlowSimulationSignal(signal) |
| 173 | else | 앞 조건이 거짓인 경로입니다: else |
| 173 | if | 조건에 따라 분기합니다: if (CMelsec.IsStageFlowSimulationSignal(signal)) |
| 174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.SetStageFlowSimulationValue(signal.Id, value) |
| 175 | else | 앞 조건이 거짓인 경로입니다: else |
| 176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.SetStageSimulationSignal(signal.Id, value == 1) |
| 177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.SetDistortionMeasurementSimulationValue(signal.Id, value) |
| 178 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.Melsec.SetStageGlassDataSimulationValue(signal.Id, value) |
| 181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec).ToDictionary(row => row.Number) |
| 181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec) |
| 181 | local-declaration | 지역 변수를 선언합니다: var connections = interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec).ToDictionary(row => row.Number); |
| 181 | variable-initializer | 변수의 초기값을 지정합니다: connections = interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec).ToDictionary(row => row.Number) |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: signals.Select(row => row.DeviceNo).Distinct() |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: signals.Select(row => row.DeviceNo) |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(" &#124; ", signals.Select(row => row.DeviceNo).Distinct().Select(number => { var state = connections.TryGetValue(number, out var status) ? status.IsSimulation ? "SIMULATION" : status.ConnectionState.ToString().To… |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: signals.Select(row => row.DeviceNo).Distinct().Select(number => { var state = connections.TryGetValue(number, out var status) ? status.IsSimulation ? "SIMULATION" : status.ConnectionState.ToString().ToUpperInvariant() : … |
| 182 | local-declaration | 지역 변수를 선언합니다: var text = string.Join(" &#124; ", signals.Select(row => row.DeviceNo).Distinct().Select(number => { var state = connections.TryGetValue(number, out var status) ? status.IsSimulation ? "SIMULATION" : status.ConnectionState.ToString().T |
| 182 | variable-initializer | 변수의 초기값을 지정합니다: text = string.Join(" &#124; ", signals.Select(row => row.DeviceNo).Distinct().Select(number => { var state = connections.TryGetValue(number, out var status) ? status.IsSimulation ? "SIMULATION" : status.ConnectionState.ToString().ToUpp |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: connections.TryGetValue(number, out var status) |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: status.ConnectionState.ToString().ToUpperInvariant() |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: status.ConnectionState.ToString() |
| 184 | conditional-expression | 조건에 따라 결과식을 선택합니다: connections.TryGetValue(number, out var status) ? status.IsSimulation ? "SIMULATION" : status.ConnectionState.ToString().ToUpperInvariant() : "OFFLINE" |
| 184 | conditional-expression | 조건에 따라 결과식을 선택합니다: status.IsSimulation ? "SIMULATION" : status.ConnectionState.ToString().ToUpperInvariant() |
| 184 | local-declaration | 지역 변수를 선언합니다: var state = connections.TryGetValue(number, out var status) ? status.IsSimulation ? "SIMULATION" : status.ConnectionState.ToString().ToUpperInvariant() : "OFFLINE"; |
| 184 | variable-initializer | 변수의 초기값을 지정합니다: state = connections.TryGetValue(number, out var status) ? status.IsSimulation ? "SIMULATION" : status.ConnectionState.ToString().ToUpperInvariant() : "OFFLINE" |
| 185 | return | 호출자에게 값 또는 제어를 반환합니다: return $"MELSEC_{number} : {state}"; |
| 187 | if | 조건에 따라 분기합니다: if (text.Length == 0) |
| 188 | assignment | 값을 대상에 대입합니다: text = "등록된 Stage 수신 신호가 없습니다." |
| 189 | if | 조건에 따라 분기합니다: if (_connectionText != text) |
| 191 | assignment | 값을 대상에 대입합니다: _connectionText = text |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(ConnectionText))) |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(ConnectionText)) |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(ConnectionText) |
| 195 | foreach | 컬렉션 요소를 순회합니다: foreach (var row in Rows) |
| 197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue(row.Id, out var sample) |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row.Refresh(sample, interfaces.IsSimul(EN_EQP_MODULE.Melsec, row.DeviceNo)) |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.IsSimul(EN_EQP_MODULE.Melsec, row.DeviceNo) |
| 201 | if | 조건에 따라 분기합니다: if (_lastCanSeed != CanSeedMeasurements) |
| 203 | assignment | 값을 대상에 대입합니다: _lastCanSeed = CanSeedMeasurements |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(CanSeedMeasurements))) |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(CanSeedMeasurements)) |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(CanSeedMeasurements) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .NotifyCanExecuteChanged() |
| 207 | if | 조건에 따라 분기합니다: if (_lastCanChangeReplies != CanChangeAutomaticReplies) |
| 209 | assignment | 값을 대상에 대입합니다: _lastCanChangeReplies = CanChangeAutomaticReplies |
| 210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(CanChangeAutomaticReplies))) |
| 210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(CanChangeAutomaticReplies)) |
| 210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(CanChangeAutomaticReplies) |
| 213 | if | 조건에 따라 분기합니다: if (_lastAutomaticReplies != AutomaticReplies) |
| 215 | assignment | 값을 대상에 대입합니다: _lastAutomaticReplies = AutomaticReplies |
| 216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(nameof(AutomaticReplies))) |
| 216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(nameof(AutomaticReplies)) |
| 216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(AutomaticReplies) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Refresh"]
 N0["L145 if"]
 M -->|포함| N0
 N1["L151 if"]
 M -->|포함| N1
 N2["L160 if"]
 M -->|포함| N2
 N3["L164 foreach"]
 N2 -->|포함| N3
 N4["L167 if"]
 N3 -->|포함| N4
 N5["L169 else"]
 N4 -->|포함| N5
 N6["L169 if"]
 N4 -->|포함| N6
 N7["L171 else"]
 N5 -->|포함| N7
 N8["L171 if"]
 N5 -->|포함| N8
 N9["L173 else"]
 N7 -->|포함| N9
 N10["L173 if"]
 N7 -->|포함| N10
 N11["L175 else"]
 N9 -->|포함| N11
 N12["L187 if"]
 M -->|포함| N12
 N13["L189 if"]
 M -->|포함| N13
 N14["L195 foreach"]
 M -->|포함| N14
 N15["L201 if"]
 M -->|포함| N15
 N16["L207 if"]
 M -->|포함| N16
 N17["L213 if"]
 M -->|포함| N17
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ScenarioOrder` · L220–234

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:220–234](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L220-L234)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.Popup.CMelsecStageSimulationPanel.ScenarioOrder(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L159-L159) | ScenarioOrder | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 220 | group.ToUpperInvariant | resolved | string string.ToUpperInvariant() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 220 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.ToUpperInvariant() |
| 220 | switch-expression | 값별 결과식을 선택합니다: group.ToUpperInvariant() switch { "STAGE_GLASS_DATA" => -3, "DISTORTION" => -2, "VISION_DISTORTION_DATA" => -1, "IF_DOREADY" => 0, "IF_PROCESS" => 1, "IF_REVIEW" => 2, "IF_TOP_POWERMETER" => 3, "IF_PROCESS_MOVE" => 4, "IF_IOF" =>  |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ScenarioOrder"]
 N0["L220 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SignalOrder` · L235–235

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:235–235](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L235-L235)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.Popup.CMelsecStageSimulationPanel.SignalOrder(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationPanel |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| id | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L159-L159) | SignalOrder | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 235 | id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 235 | id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 235 | id.Contains | resolved | bool string.Contains(string, System.StringComparison) |
| 235 | id.Contains | resolved | bool string.Contains(string, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.Equals("SDC_DO_ALIGN_STATUS", StringComparison.OrdinalIgnoreCase) |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.Equals("SDC_DO_ALIGN_COMPLETE", StringComparison.OrdinalIgnoreCase) |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.Contains("_ABLE", StringComparison.OrdinalIgnoreCase) |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.Contains("_START", StringComparison.OrdinalIgnoreCase) |
| 235 | conditional-expression | 조건에 따라 결과식을 선택합니다: id.Equals("SDC_DO_ALIGN_STATUS", StringComparison.OrdinalIgnoreCase) ? 0 : id.Equals("SDC_DO_ALIGN_COMPLETE", StringComparison.OrdinalIgnoreCase) ? 1 : id.Contains("_ABLE", StringComparison.OrdinalIgnoreCase) ? 0 : id.Contains("_S |
| 235 | conditional-expression | 조건에 따라 결과식을 선택합니다: id.Equals("SDC_DO_ALIGN_COMPLETE", StringComparison.OrdinalIgnoreCase) ? 1 : id.Contains("_ABLE", StringComparison.OrdinalIgnoreCase) ? 0 : id.Contains("_START", StringComparison.OrdinalIgnoreCase) ? 1 : 2 |
| 235 | conditional-expression | 조건에 따라 결과식을 선택합니다: id.Contains("_ABLE", StringComparison.OrdinalIgnoreCase) ? 0 : id.Contains("_START", StringComparison.OrdinalIgnoreCase) ? 1 : 2 |
| 235 | conditional-expression | 조건에 따라 결과식을 선택합니다: id.Contains("_START", StringComparison.OrdinalIgnoreCase) ? 1 : 2 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_canSet` · L240–240

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:240–240](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L240-L240)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow._canSet |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_currentValue` · L241–241

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:241–241](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L241-L241)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow._currentValue |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 241 | variable-initializer | 변수의 초기값을 지정합니다: _currentValue = "—" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_inputValue` · L242–242

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:242–242](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L242-L242)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow._inputValue |
| 접근/수식자 | Private / private |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_readScale` · L243–243

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:243–243](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L243-L243)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Popup.CMelsecStageSimulationRow._readScale |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_stateBrush` · L244–244

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:244–244](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L244-L244)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Brush Drilling.UI.Popup.CMelsecStageSimulationRow._stateBrush |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Brush |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 244 | variable-initializer | 변수의 초기값을 지정합니다: _stateBrush = Brushes.Gray |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EventFieldDeclaration `PropertyChanged` · L245–245

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:245–245](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L245-L245)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.ComponentModel.PropertyChangedEventHandler? Drilling.UI.Popup.CMelsecStageSimulationRow.PropertyChanged |
| 접근/수식자 | Public / public, event |
| 반환/값 타입 | System.ComponentModel.PropertyChangedEventHandler? |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Id` · L246–246

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:246–246](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L246-L246)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Id |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Id` · L246–246

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:246–246](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L246-L246)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Id.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `DeviceNo` · L247–247

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:247–247](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L247-L247)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.Popup.CMelsecStageSimulationRow.DeviceNo |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_DeviceNo` · L247–247

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:247–247](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L247-L247)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.Popup.CMelsecStageSimulationRow.DeviceNo.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Scenario` · L248–248

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:248–248](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L248-L248)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Scenario |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Scenario` · L248–248

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:248–248](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L248-L248)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Scenario.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Name` · L249–249

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:249–249](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L249-L249)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Name |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Name` · L249–249

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:249–249](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L249-L249)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Name.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Address` · L250–250

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:250–250](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L250-L250)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Address |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Address` · L250–250

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:250–250](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L250-L250)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Address.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Description` · L251–251

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:251–251](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L251-L251)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Description |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Description` · L251–251

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:251–251](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L251-L251)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.Description.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CurrentValue` · L252–252

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:252–252](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L252-L252)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.CurrentValue |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `StateBrush` · L253–253

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:253–253](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L253-L253)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Brush Drilling.UI.Popup.CMelsecStageSimulationRow.StateBrush |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Brush |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CanSet` · L254–254

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:254–254](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L254-L254)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.CanSet |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsNumeric` · L255–255

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:255–255](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L255-L255)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsNumeric |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsNumeric` · L255–255

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:255–255](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L255-L255)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsNumeric.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsText` · L256–256

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:256–256](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L256-L256)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsText |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsText` · L256–256

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:256–256](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L256-L256)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsText.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `HasValueInput` · L257–257

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:257–257](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L257-L257)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.HasValueInput |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsCount` · L258–258

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:258–258](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L258-L258)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsCount |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsCount` · L258–258

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:258–258](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L258-L258)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsCount.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsMeasurement` · L259–259

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:259–259](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L259-L259)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsMeasurement |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsMeasurement` · L259–259

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:259–259](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L259-L259)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsMeasurement.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `InputHint` · L260–260

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:260–260](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L260-L260)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.InputHint |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 260 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsText ? "MELSEC ASCII 문자열" : IsMeasurement ? "mm 단위의 부호 포함 숫자 (소수 입력 가능)" : "원시 정수: 0~65535" |
| 260 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsMeasurement ? "mm 단위의 부호 포함 숫자 (소수 입력 가능)" : "원시 정수: 0~65535" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `IsAlignBusyWord` · L261–261

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:261–261](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L261-L261)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsAlignBusyWord |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_IsAlignBusyWord` · L261–261

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:261–261](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L261-L261)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Popup.CMelsecStageSimulationRow.IsAlignBusyWord.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `InputValue` · L263–273

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:263–273](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L263-L273)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.InputValue |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_InputValue` · L265–265

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:265–265](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L265-L265)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Popup.CMelsecStageSimulationRow.InputValue.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_InputValue` · L266–272

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:266–272](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L266-L272)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Popup.CMelsecStageSimulationRow.InputValue.set |
| 접근/수식자 | Public / set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 271 | Changed | resolved | void Drilling.UI.Popup.CMelsecStageSimulationRow.Changed(string?) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:441 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 268 | if | 조건에 따라 분기합니다: if (_inputValue == value) |
| 269 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 270 | assignment | 값을 대상에 대입합니다: _inputValue = value |
| 271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Changed() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["set_InputValue"]
 N0["L268 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `SetOnCommand` · L275–275

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:275–275](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L275-L275)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetOnCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_SetOnCommand` · L275–275

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:275–275](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L275-L275)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetOnCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `SetOffCommand` · L276–276

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:276–276](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L276-L276)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetOffCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_SetOffCommand` · L276–276

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:276–276](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L276-L276)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetOffCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `SetValueCommand` · L277–277

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:277–277](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L277-L277)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetValueCommand |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_SetValueCommand` · L277–277

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:277–277](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L277-L277)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.CButtonCommand Drilling.UI.Popup.CMelsecStageSimulationRow.SetValueCommand.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Drilling.UI.Menu.CButtonCommand |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L279–376

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:279–376](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L279-L376)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Popup.CMelsecStageSimulationRow.CMelsecStageSimulationRow(Drilling.Common.Interface.ST_MELSEC_MAP_DATA, System.Action<int>, System.Action<string>?, System.Action<double>?, System.Action<string>?) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| data | Drilling.Common.Interface.ST_MELSEC_MAP_DATA | None | False /  |
| set | System.Action<int> | None | False /  |
| showWarning | System.Action<string>? | None | True / null |
| setMeasurement | System.Action<double>? | None | True / null |
| setText | System.Action<string>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:165–178](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L165-L178) | new | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 282 | CMelsec.IsDistortionMeasurementSimulationValue | resolved | bool Drilling.Common.Interface.CMelsec.IsDistortionMeasurementSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3058 |
| 284 | data.Group.ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 299 | data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 300 | data.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 314 | data.Id.Split | resolved | string[] string.Split(char, System.StringSplitOptions) |
| 314 | int.Parse | resolved | int int.Parse(System.ReadOnlySpan<char>, System.IFormatProvider?) |
| 314 | parts[1].AsSpan | resolved | System.ReadOnlySpan<char> string?.AsSpan(int) |
| 315 | int.Parse | resolved | int int.Parse(System.ReadOnlySpan<char>, System.IFormatProvider?) |
| 315 | parts[2].AsSpan | resolved | System.ReadOnlySpan<char> string?.AsSpan(int, int) |
| 318 | CMelsec.IsSimulationOnlyRoute | resolved | bool Drilling.Common.Interface.CMelsec.IsSimulationOnlyRoute(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3054 |
| 320 | CMelsec.IsStageGlassDataSimulationValue | resolved | bool Drilling.Common.Interface.CMelsec.IsStageGlassDataSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3060 |
| 321 | CMelsec.IsStageAlignSimulationSignal | resolved | bool Drilling.Common.Interface.CMelsec.IsStageAlignSimulationSignal(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3165 |
| 322 | CMelsec.IsStageGlassDataSimulationValue | resolved | bool Drilling.Common.Interface.CMelsec.IsStageGlassDataSimulationValue(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:3060 |
| 325 | CRecipeConfirmDialog.ShowWarning | resolved | void Drilling.UI.Popup.CRecipeConfirmDialog.ShowWarning(string, string, Window?) · Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs:110 |
| 340 | new | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 340 | Set | resolved | void Set(int) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:326 |
| 341 | new | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 341 | Set | resolved | void Set(int) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:326 |
| 342 | new | resolved | Drilling.UI.Menu.CButtonCommand.CButtonCommand(System.Action<object?>, System.Predicate<object?>?) · Drilling.UI/Menu/CButtonCommand.cs:9 |
| 350 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 351 | setText | resolved · 동적 구현 선택 가능 | void System.Action<string>.Invoke(string) |
| 353 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string>.Invoke(string) |
| 360 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 360 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 361 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 362 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 363 | setMeasurement | resolved · 동적 구현 선택 가능 | void System.Action<double>.Invoke(double) |
| 365 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string>.Invoke(string) |
| 368 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 370 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string>.Invoke(string) |
| 374 | Set | resolved | void Set(int) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:326 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 281 | assignment | 값을 대상에 대입합니다: Id = data.Id |
| 282 | assignment | 값을 대상에 대입합니다: IsMeasurement = CMelsec.IsDistortionMeasurementSimulationValue(data) |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsDistortionMeasurementSimulationValue(data) |
| 283 | assignment | 값을 대상에 대입합니다: DeviceNo = data.DeviceNo |
| 284 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Group.ToUpperInvariant() |
| 284 | assignment | 값을 대상에 대입합니다: Scenario = data.Group.ToUpperInvariant() switch { "DISTORTION" => "Distortion", "VISION_DISTORTION_DATA" => "Distortion Data", "STAGE_GLASS_DATA" => "Glass Data", "IF_DOREADY" => "DoReady", "IF_PROCESS" => "Process", "IF_REVIEW" = |
| 284 | switch-expression | 값별 결과식을 선택합니다: data.Group.ToUpperInvariant() switch { "DISTORTION" => "Distortion", "VISION_DISTORTION_DATA" => "Distortion Data", "STAGE_GLASS_DATA" => "Glass Data", "IF_DOREADY" => "DoReady", "IF_PROCESS" => "Process", "IF_REVIEW" => "Review", |
| 299 | assignment | 값을 대상에 대입합니다: IsCount = data.Id.Equals(CMelsec.StageProtectWindowCountId, StringComparison.OrdinalIgnoreCase) |
| 299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Equals(CMelsec.StageProtectWindowCountId, StringComparison.OrdinalIgnoreCase) |
| 300 | assignment | 값을 대상에 대입합니다: IsAlignBusyWord = data.Id.Equals(CMelsec.StageAlignBusyWordId, StringComparison.OrdinalIgnoreCase) |
| 300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Equals(CMelsec.StageAlignBusyWordId, StringComparison.OrdinalIgnoreCase) |
| 301 | assignment | 값을 대상에 대입합니다: Name = data.Id switch { "IPS_REVIEW_CONTROL_MODE_X" => "Review X Permit", "IPS_REVIEW_CONTROL_MODE_Y" => "Stage Y Permit", "IPS_IOF_READ_COMPLETE" => "IOF Read Done", "IPS_IOF_BUFFER_RUN_COMPLETE" => "IOF Buffer Done", CMelsec.Sta |
| 301 | switch-expression | 값별 결과식을 선택합니다: data.Id switch { "IPS_REVIEW_CONTROL_MODE_X" => "Review X Permit", "IPS_REVIEW_CONTROL_MODE_Y" => "Stage Y Permit", "IPS_IOF_READ_COMPLETE" => "IOF Read Done", "IPS_IOF_BUFFER_RUN_COMPLETE" => "IOF Buffer Done", CMelsec.StageAlign |
| 312 | if | 조건에 따라 분기합니다: if (IsMeasurement) |
| 314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: data.Id.Split('_') |
| 314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.Parse(parts[1].AsSpan(3), CultureInfo.InvariantCulture) |
| 314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parts[1].AsSpan(3) |
| 314 | local-declaration | 지역 변수를 선언합니다: var parts = data.Id.Split('_'); |
| 314 | local-declaration | 지역 변수를 선언합니다: var position = int.Parse(parts[1].AsSpan(3), CultureInfo.InvariantCulture); |
| 314 | variable-initializer | 변수의 초기값을 지정합니다: parts = data.Id.Split('_') |
| 314 | variable-initializer | 변수의 초기값을 지정합니다: position = int.Parse(parts[1].AsSpan(3), CultureInfo.InvariantCulture) |
| 315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.Parse(parts[2].AsSpan(3, 1), CultureInfo.InvariantCulture) |
| 315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parts[2].AsSpan(3, 1) |
| 315 | local-declaration | 지역 변수를 선언합니다: var camera = int.Parse(parts[2].AsSpan(3, 1), CultureInfo.InvariantCulture); |
| 315 | local-declaration | 지역 변수를 선언합니다: var axis = data.Id[^1]; |
| 315 | variable-initializer | 변수의 초기값을 지정합니다: camera = int.Parse(parts[2].AsSpan(3, 1), CultureInfo.InvariantCulture) |
| 315 | variable-initializer | 변수의 초기값을 지정합니다: axis = data.Id[^1] |
| 316 | assignment | 값을 대상에 대입합니다: Name = position == 0 ? $"AK{camera} {axis} (mm)" : $"Group {position - 1} / DK{(position - 1) * 2 + (camera == 2 ? 1 : 2)} {axis} (mm)" |
| 316 | conditional-expression | 조건에 따라 결과식을 선택합니다: position == 0 ? $"AK{camera} {axis} (mm)" : $"Group {position - 1} / DK{(position - 1) * 2 + (camera == 2 ? 1 : 2)} {axis} (mm)" |
| 316 | conditional-expression | 조건에 따라 결과식을 선택합니다: camera == 2 ? 1 : 2 |
| 318 | assignment | 값을 대상에 대입합니다: Address = CMelsec.IsSimulationOnlyRoute(data) ? $"MELSEC_{data.DeviceNo} / SIM ONLY" : $"MELSEC_{data.DeviceNo} / {data.Address}" |
| 318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsSimulationOnlyRoute(data) |
| 318 | conditional-expression | 조건에 따라 결과식을 선택합니다: CMelsec.IsSimulationOnlyRoute(data) ? $"MELSEC_{data.DeviceNo} / SIM ONLY" : $"MELSEC_{data.DeviceNo} / {data.Address}" |
| 319 | assignment | 값을 대상에 대입합니다: Description = data.Description |
| 320 | assignment | 값을 대상에 대입합니다: IsText = CMelsec.IsStageGlassDataSimulationValue(data) && data.DataType == EN_MELSEC_DATA_TYPE.String |
| 320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageGlassDataSimulationValue(data) |
| 321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageAlignSimulationSignal(data) |
| 321 | assignment | 값을 대상에 대입합니다: IsNumeric = CMelsec.IsStageAlignSimulationSignal(data) &#124;&#124; IsCount &#124;&#124; IsMeasurement &#124;&#124; (CMelsec.IsStageGlassDataSimulationValue(data) && data.DataType == EN_MELSEC_DATA_TYPE.Word) |
| 322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.IsStageGlassDataSimulationValue(data) |
| 323 | assignment | 값을 대상에 대입합니다: _inputValue = IsText ? "" : IsMeasurement ? "0" : IsAlignBusyWord ? "2" : IsNumeric && !IsCount ? "10000" : "0" |
| 323 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsText ? "" : IsMeasurement ? "0" : IsAlignBusyWord ? "2" : IsNumeric && !IsCount ? "10000" : "0" |
| 323 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsMeasurement ? "0" : IsAlignBusyWord ? "2" : IsNumeric && !IsCount ? "10000" : "0" |
| 323 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsAlignBusyWord ? "2" : IsNumeric && !IsCount ? "10000" : "0" |
| 323 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsNumeric && !IsCount ? "10000" : "0" |
| 324 | assignment | 값을 대상에 대입합니다: _readScale = data.ReadScale |
| 325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeConfirmDialog.ShowWarning("Stage 신호 변경 실패", message) |
| 325 | local-declaration | 지역 변수를 선언합니다: var warn = showWarning ?? (message => CRecipeConfirmDialog.ShowWarning("Stage 신호 변경 실패", message)); |
| 325 | variable-initializer | 변수의 초기값을 지정합니다: warn = showWarning ?? (message => CRecipeConfirmDialog.ShowWarning("Stage 신호 변경 실패", message)) |
| 340 | assignment | 값을 대상에 대입합니다: SetOnCommand = new(_ => Set(1), _ => _canSet && !IsNumeric) |
| 340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_ => Set(1), _ => _canSet && !IsNumeric) |
| 340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Set(1) |
| 341 | assignment | 값을 대상에 대입합니다: SetOffCommand = new(_ => Set(0), _ => _canSet && !IsNumeric) |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_ => Set(0), _ => _canSet && !IsNumeric) |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Set(0) |
| 342 | assignment | 값을 대상에 대입합니다: SetValueCommand = new(_ => { if (!_canSet &#124;&#124; !HasValueInput) return; if (IsText) { try { if (setText is null) throw new InvalidOperationException("문자열 입력이 연결되어 있지 않습니다."); setText(InputValue); } catch (Exception error) { warn(erro |
| 342 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_ => { if (!_canSet &#124;&#124; !HasValueInput) return; if (IsText) { try { if (setText is null) throw new InvalidOperationException("문자열 입력이 연결되어 있지 않습니다."); setText(InputValue); } catch (Exception error) { warn(error.Messag… |
| 344 | if | 조건에 따라 분기합니다: if (!_canSet &#124;&#124; !HasValueInput) |
| 345 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 346 | if | 조건에 따라 분기합니다: if (IsText) |
| 348 | try | 예외 처리 범위입니다: try |
| 350 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("문자열 입력이 연결되어 있지 않습니다.") |
| 350 | if | 조건에 따라 분기합니다: if (setText is null) |
| 350 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("문자열 입력이 연결되어 있지 않습니다."); |
| 351 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: setText(InputValue) |
| 353 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn(error.Message) |
| 353 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 354 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 356 | if | 조건에 따라 분기합니다: if (IsMeasurement) |
| 358 | try | 예외 처리 범위입니다: try |
| 360 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(InputValue, NumberStyles.Float, CultureInfo.InvariantCulture, out var mm) |
| 360 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(mm) |
| 360 | if | 조건에 따라 분기합니다: if (!double.TryParse(InputValue, NumberStyles.Float, CultureInfo.InvariantCulture, out var mm) &#124;&#124; !double.IsFinite(mm)) |
| 361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("유효한 mm 숫자를 입력하세요. 음수와 소수 입력이 가능합니다.") |
| 361 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("유효한 mm 숫자를 입력하세요. 음수와 소수 입력이 가능합니다."); |
| 362 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("측정값 입력이 연결되어 있지 않습니다.") |
| 362 | if | 조건에 따라 분기합니다: if (setMeasurement is null) |
| 362 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("측정값 입력이 연결되어 있지 않습니다."); |
| 363 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: setMeasurement(mm) |
| 365 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn(error.Message) |
| 365 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 366 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 368 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(InputValue, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value) |
| 368 | if | 조건에 따라 분기합니다: if (!int.TryParse(InputValue, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value) &#124;&#124; value is < 0 or > ushort.MaxValue) |
| 370 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn("0~65535의 원시 정수를 입력하세요.") |
| 371 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 374 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Set(value) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M[".ctor"]
 N0["L284 switch-expression"]
 M -->|포함| N0
 N1["L301 switch-expression"]
 M -->|포함| N1
 N2["L312 if"]
 M -->|포함| N2
 N3["L344 if"]
 M -->|포함| N3
 N4["L346 if"]
 M -->|포함| N4
 N5["L348 try"]
 N4 -->|포함| N5
 N6["L350 if"]
 N5 -->|포함| N6
 N7["L353 catch"]
 N5 -->|포함| N7
 N8["L356 if"]
 M -->|포함| N8
 N9["L358 try"]
 N8 -->|포함| N9
 N10["L360 if"]
 N9 -->|포함| N10
 N11["L362 if"]
 N9 -->|포함| N11
 N12["L365 catch"]
 N9 -->|포함| N12
 N13["L368 if"]
 M -->|포함| N13
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Set` · L326–338

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:326–338](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L326-L338)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Set(int) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:340–340](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L340-L340) | Set | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:341–341](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L341-L341) | Set | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:374–374](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L374-L374) | Set | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 332 | set | resolved · 동적 구현 선택 가능 | void System.Action<int>.Invoke(int) |
| 336 | warn | resolved · 동적 구현 선택 가능 | void System.Action<string>.Invoke(string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 328 | if | 조건에 따라 분기합니다: if (!_canSet) |
| 329 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 330 | try | 예외 처리 범위입니다: try |
| 332 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: set(value) |
| 334 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: warn(exception.Message) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Set"]
 N0["L328 if"]
 M -->|포함| N0
 N1["L330 try"]
 M -->|포함| N1
 N2["L334 catch"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Refresh` · L378–439

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:378–439](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L378-L439)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Popup.CMelsecStageSimulationRow.Refresh(Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE?, bool) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sample | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE? | None | False /  |
| simulation | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:198–198](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L198-L198) | row.Refresh | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 383 | Changed | resolved | void Drilling.UI.Popup.CMelsecStageSimulationRow.Changed(string?) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:441 |
| 383 | nameof | unresolved | None |
| 384 | SetOnCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 385 | SetOffCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 386 | SetValueCommand.NotifyCanExecuteChanged | resolved | void Drilling.UI.Menu.CButtonCommand.NotifyCanExecuteChanged() · Drilling.UI/Menu/CButtonCommand.cs:24 |
| 389 | Convert.ToString | resolved | string? System.Convert.ToString(object?, System.IFormatProvider?) |
| 411 | Convert.ToDouble(sample!.Value, CultureInfo.InvariantCulture).ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 411 | Convert.ToDouble | resolved | double System.Convert.ToDouble(object?, System.IFormatProvider?) |
| 416 | Convert.ToDouble | resolved | double System.Convert.ToDouble(object?, System.IFormatProvider?) |
| 418 | scaled.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 418 | rawValue.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 418 | scaled.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 431 | Changed | resolved | void Drilling.UI.Popup.CMelsecStageSimulationRow.Changed(string?) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:441 |
| 431 | nameof | unresolved | None |
| 437 | Changed | resolved | void Drilling.UI.Popup.CMelsecStageSimulationRow.Changed(string?) · Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:441 |
| 437 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 380 | if | 조건에 따라 분기합니다: if (_canSet != simulation) |
| 382 | assignment | 값을 대상에 대입합니다: _canSet = simulation |
| 383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Changed(nameof(CanSet)) |
| 383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(CanSet) |
| 384 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetOnCommand.NotifyCanExecuteChanged() |
| 385 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetOffCommand.NotifyCanExecuteChanged() |
| 386 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SetValueCommand.NotifyCanExecuteChanged() |
| 389 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Convert.ToString(sample.Value, System.Globalization.CultureInfo.InvariantCulture) |
| 389 | conditional-expression | 조건에 따라 결과식을 선택합니다: sample is { IsValid: true } ? Convert.ToString(sample.Value, System.Globalization.CultureInfo.InvariantCulture) : null |
| 389 | local-declaration | 지역 변수를 선언합니다: var raw = sample is { IsValid: true } ? Convert.ToString(sample.Value, System.Globalization.CultureInfo.InvariantCulture) : null; |
| 389 | variable-initializer | 변수의 초기값을 지정합니다: raw = sample is { IsValid: true } ? Convert.ToString(sample.Value, System.Globalization.CultureInfo.InvariantCulture) : null |
| 390 | local-declaration | 지역 변수를 선언합니다: var text = raw switch { "1" => "ON (1)", "0" => "OFF (0)", null => "—", _ => raw }; |
| 390 | switch-expression | 값별 결과식을 선택합니다: raw switch { "1" => "ON (1)", "0" => "OFF (0)", null => "—", _ => raw } |
| 390 | variable-initializer | 변수의 초기값을 지정합니다: text = raw switch { "1" => "ON (1)", "0" => "OFF (0)", null => "—", _ => raw } |
| 397 | local-declaration | 지역 변수를 선언합니다: var brush = raw switch { "1" => Brushes.ForestGreen, "0" => Brushes.DarkGoldenrod, null => Brushes.Gray, _ => Brushes.Firebrick }; |
| 397 | switch-expression | 값별 결과식을 선택합니다: raw switch { "1" => Brushes.ForestGreen, "0" => Brushes.DarkGoldenrod, null => Brushes.Gray, _ => Brushes.Firebrick } |
| 397 | variable-initializer | 변수의 초기값을 지정합니다: brush = raw switch { "1" => Brushes.ForestGreen, "0" => Brushes.DarkGoldenrod, null => Brushes.Gray, _ => Brushes.Firebrick } |
| 404 | if | 조건에 따라 분기합니다: if (IsText && raw is not null) |
| 406 | assignment | 값을 대상에 대입합니다: text = raw.Length == 0 ? "(EMPTY)" : raw |
| 406 | conditional-expression | 조건에 따라 결과식을 선택합니다: raw.Length == 0 ? "(EMPTY)" : raw |
| 407 | assignment | 값을 대상에 대입합니다: brush = Brushes.SteelBlue |
| 409 | else | 앞 조건이 거짓인 경로입니다: else |
| 409 | if | 조건에 따라 분기합니다: if (IsMeasurement && raw is not null) |
| 411 | assignment | 값을 대상에 대입합니다: text = Convert.ToDouble(sample!.Value, CultureInfo.InvariantCulture).ToString("0.####", CultureInfo.InvariantCulture) + " mm" |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Convert.ToDouble(sample!.Value, CultureInfo.InvariantCulture).ToString("0.####", CultureInfo.InvariantCulture) |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Convert.ToDouble(sample!.Value, CultureInfo.InvariantCulture) |
| 412 | assignment | 값을 대상에 대입합니다: brush = Brushes.SteelBlue |
| 414 | else | 앞 조건이 거짓인 경로입니다: else |
| 414 | if | 조건에 따라 분기합니다: if (IsNumeric && raw is not null) |
| 416 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Convert.ToDouble(sample!.Value, CultureInfo.InvariantCulture) |
| 416 | local-declaration | 지역 변수를 선언합니다: var scaled = Convert.ToDouble(sample!.Value, CultureInfo.InvariantCulture); |
| 416 | variable-initializer | 변수의 초기값을 지정합니다: scaled = Convert.ToDouble(sample!.Value, CultureInfo.InvariantCulture) |
| 417 | local-declaration | 지역 변수를 선언합니다: var rawValue = scaled / _readScale; |
| 417 | variable-initializer | 변수의 초기값을 지정합니다: rawValue = scaled / _readScale |
| 418 | assignment | 값을 대상에 대입합니다: text = IsCount ? scaled.ToString("0.########", CultureInfo.InvariantCulture) : $"{rawValue.ToString("0", CultureInfo.InvariantCulture)} → {scaled.ToString("0.########", CultureInfo.InvariantCulture)}" |
| 418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scaled.ToString("0.########", CultureInfo.InvariantCulture) |
| 418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rawValue.ToString("0", CultureInfo.InvariantCulture) |
| 418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scaled.ToString("0.########", CultureInfo.InvariantCulture) |
| 418 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCount ? scaled.ToString("0.########", CultureInfo.InvariantCulture) : $"{rawValue.ToString("0", CultureInfo.InvariantCulture)} → {scaled.ToString("0.########", CultureInfo.InvariantCulture)}" |
| 419 | assignment | 값을 대상에 대입합니다: brush = IsCount ? Brushes.SteelBlue : scaled == 1 ? Brushes.ForestGreen : Brushes.Firebrick |
| 419 | conditional-expression | 조건에 따라 결과식을 선택합니다: IsCount ? Brushes.SteelBlue : scaled == 1 ? Brushes.ForestGreen : Brushes.Firebrick |
| 419 | conditional-expression | 조건에 따라 결과식을 선택합니다: scaled == 1 ? Brushes.ForestGreen : Brushes.Firebrick |
| 420 | if | 조건에 따라 분기합니다: if (IsAlignBusyWord) |
| 422 | local-declaration | 지역 변수를 선언합니다: var active = ((int)rawValue & 2) != 0; |
| 422 | variable-initializer | 변수의 초기값을 지정합니다: active = ((int)rawValue & 2) != 0 |
| 423 | assignment | 값을 대상에 대입합니다: text = $"{rawValue:0} · ALIGN {(active ? "ON" : "OFF")}" |
| 423 | conditional-expression | 조건에 따라 결과식을 선택합니다: active ? "ON" : "OFF" |
| 424 | assignment | 값을 대상에 대입합니다: brush = active ? Brushes.ForestGreen : Brushes.DarkGoldenrod |
| 424 | conditional-expression | 조건에 따라 결과식을 선택합니다: active ? Brushes.ForestGreen : Brushes.DarkGoldenrod |
| 428 | if | 조건에 따라 분기합니다: if (_currentValue != text) |
| 430 | assignment | 값을 대상에 대입합니다: _currentValue = text |
| 431 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Changed(nameof(CurrentValue)) |
| 431 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(CurrentValue) |
| 434 | if | 조건에 따라 분기합니다: if (_stateBrush != brush) |
| 436 | assignment | 값을 대상에 대입합니다: _stateBrush = brush |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Changed(nameof(StateBrush)) |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(StateBrush) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Refresh"]
 N0["L380 if"]
 M -->|포함| N0
 N1["L390 switch-expression"]
 M -->|포함| N1
 N2["L397 switch-expression"]
 M -->|포함| N2
 N3["L404 if"]
 M -->|포함| N3
 N4["L409 else"]
 N3 -->|포함| N4
 N5["L409 if"]
 N3 -->|포함| N5
 N6["L414 else"]
 N4 -->|포함| N6
 N7["L414 if"]
 N4 -->|포함| N7
 N8["L420 if"]
 N6 -->|포함| N8
 N9["L428 if"]
 M -->|포함| N9
 N10["L434 if"]
 M -->|포함| N10
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Changed` · L441–441

[Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:441–441](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L441-L441)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Popup.CMelsecStageSimulationRow.Changed(string?) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Popup.CMelsecStageSimulationRow |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| name | string? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:271–271](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L271-L271) | Changed | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:383–383](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L383-L383) | Changed | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:431–431](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L431-L431) | Changed | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:437–437](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L437-L437) | Changed | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 441 | .Invoke | resolved · 동적 구현 선택 가능 | void System.ComponentModel.PropertyChangedEventHandler.Invoke(object?, System.ComponentModel.PropertyChangedEventArgs) |
| 441 | new | resolved | System.ComponentModel.PropertyChangedEventArgs.PropertyChangedEventArgs(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 441 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(this, new(name)) |
| 441 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(name) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
