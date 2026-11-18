# Drilling.Common/Managers/CSettingManager.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 96e22cd027c84bf302b23f2949b98985d7f301bb |
| 원본 SHA256 | bd511ffda485b9128bb4224e03a7ebd563271e3530dfdb9d1aac0fe58787605f |
| 파일 분류 | code |
| 원본 크기/행 | 15,312 bytes / 286 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs) |

## 파일의 역할과 읽는 순서

프로그램의 시작·구성·공유 타입 또는 빌드 연결에 사용됩니다. 아래 실제 선언·참조와 원본 근거를 확인합니다.

![파일 관계도](../../../diagrams/files/e30369e026b7725c2147.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CSettingManager | ClassDeclaration | 14–181 | CSettingManager |
| CRunOptionSettings | ClassDeclaration | 184–231 | CRunOptionSettings |
| ST_RUN_OPTION_SETTINGS | RecordDeclaration | 233–245 | ST_RUN_OPTION_SETTINGS |
| EN_SETTING_TAB | EnumDeclaration | 247–254 | EN_SETTING_TAB |
| ST_SYSTEM_PARAMETER | RecordDeclaration | 256–272 | ST_SYSTEM_PARAMETER |
| ST_SETTING_HISTORY | RecordDeclaration | 273–273 | ST_SETTING_HISTORY |
| CSettingFileBase | ClassDeclaration | 274–279 | CSettingFileBase |
| CInterfaceFileBase | ClassDeclaration | 281–285 | CInterfaceFileBase |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| ReviewCameraResolutionKey | FieldDeclaration | L16–16 | string Drilling.Common.Managers.CSettingManager.ReviewCameraResolutionKey |
| VisionCameraResolutionKey | FieldDeclaration | L17–17 | string Drilling.Common.Managers.CSettingManager.VisionCameraResolutionKey |
| DefaultVisionCameraResolution | FieldDeclaration | L18–18 | double Drilling.Common.Managers.CSettingManager.DefaultVisionCameraResolution |
| AlignCameraResolutionKey | FieldDeclaration | L19–19 | string Drilling.Common.Managers.CSettingManager.AlignCameraResolutionKey |
| DefaultAlignCameraResolution | FieldDeclaration | L20–20 | double Drilling.Common.Managers.CSettingManager.DefaultAlignCameraResolution |
| WapageAlignBaseToleranceKey | FieldDeclaration | L21–21 | string Drilling.Common.Managers.CSettingManager.WapageAlignBaseToleranceKey |
| DefaultWapageAlignBaseTolerance | FieldDeclaration | L22–22 | double Drilling.Common.Managers.CSettingManager.DefaultWapageAlignBaseTolerance |
| _cacheLock | FieldDeclaration | L23–23 | object Drilling.Common.Managers.CSettingManager._cacheLock |
| _saveLock | FieldDeclaration | L24–24 | object Drilling.Common.Managers.CSettingManager._saveLock |
| _sectionCache | FieldDeclaration | L25–25 | System.Collections.Generic.Dictionary<Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>> Drilling.Common.Managers.CSettingManager._sectionCache |
| LoadSection | MethodDeclaration | L26–38 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| ReloadSection | MethodDeclaration | L40–49 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.ReloadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| LoadAllSections | MethodDeclaration | L51–57 | void Drilling.Common.Managers.CSettingManager.LoadAllSections(System.Threading.CancellationToken) |
| GetValue | MethodDeclaration | L59–70 | string Drilling.Common.Managers.CSettingManager.GetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) |
| MatchesItem | LocalFunctionStatement | L63–66 | bool MatchesItem(Drilling.Common.Managers.ST_SYSTEM_PARAMETER) |
| SetValue | MethodDeclaration | L72–102 | void Drilling.Common.Managers.CSettingManager.SetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) |
| SelectParameter | LocalFunctionStatement | L79–92 | Drilling.Common.Managers.ST_SYSTEM_PARAMETER SelectParameter(Drilling.Common.Managers.ST_SYSTEM_PARAMETER) |
| GetVisionMaxHoleCountPerLine | MethodDeclaration | L104–111 | int Drilling.Common.Managers.CSettingManager.GetVisionMaxHoleCountPerLine() |
| GetVisionCameraResolution | MethodDeclaration | L113–113 | double Drilling.Common.Managers.CSettingManager.GetVisionCameraResolution() |
| ParseVisionCameraResolution | MethodDeclaration | L115–120 | double Drilling.Common.Managers.CSettingManager.ParseVisionCameraResolution(string) |
| SaveSection | MethodDeclaration | L122–149 | void Drilling.Common.Managers.CSettingManager.SaveSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>, System.Threading.CancellationToken) |
| LoadHistory | MethodDeclaration | L151–154 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SETTING_HISTORY> Drilling.Common.Managers.CSettingManager.LoadHistory(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| LoadInterfaceList | MethodDeclaration | L156–159 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> Drilling.Common.Managers.CSettingManager.LoadInterfaceList(System.Threading.CancellationToken) |
| SaveInterfaceList | MethodDeclaration | L161–165 | System.Threading.Tasks.Task Drilling.Common.Managers.CSettingManager.SaveInterfaceList(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA>, System.Threading.CancellationToken) |
| ConnectInterface | MethodDeclaration | L167–170 | System.Threading.Tasks.Task Drilling.Common.Managers.CSettingManager.ConnectInterface(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) |
| DisconnectInterface | MethodDeclaration | L172–175 | System.Threading.Tasks.Task Drilling.Common.Managers.CSettingManager.DisconnectInterface(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) |
| ReconnectInterface | MethodDeclaration | L177–180 | System.Threading.Tasks.Task Drilling.Common.Managers.CSettingManager.ReconnectInterface(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) |
| ZeroDefence | FieldDeclaration | L186–186 | string Drilling.Common.Managers.CRunOptionSettings.ZeroDefence |
| CurrentGroup | FieldDeclaration | L187–187 | string Drilling.Common.Managers.CRunOptionSettings.CurrentGroup |
| FollowUp | FieldDeclaration | L188–188 | string Drilling.Common.Managers.CRunOptionSettings.FollowUp |
| DistortionGroup0 | FieldDeclaration | L189–189 | string Drilling.Common.Managers.CRunOptionSettings.DistortionGroup0 |
| DistortionGroup1 | FieldDeclaration | L190–190 | string Drilling.Common.Managers.CRunOptionSettings.DistortionGroup1 |
| DistortionGroup2 | FieldDeclaration | L191–191 | string Drilling.Common.Managers.CRunOptionSettings.DistortionGroup2 |
| ReviewMethod | FieldDeclaration | L192–192 | string Drilling.Common.Managers.CRunOptionSettings.ReviewMethod |
| ReviewLine | FieldDeclaration | L193–193 | string Drilling.Common.Managers.CRunOptionSettings.ReviewLine |
| ImmediateRetry | FieldDeclaration | L194–194 | string Drilling.Common.Managers.CRunOptionSettings.ImmediateRetry |
| RetryCount | FieldDeclaration | L195–195 | string Drilling.Common.Managers.CRunOptionSettings.RetryCount |
| Keys | FieldDeclaration | L196–196 | System.Collections.Generic.HashSet<string> Drilling.Common.Managers.CRunOptionSettings.Keys |
| IsKey | MethodDeclaration | L197–197 | bool Drilling.Common.Managers.CRunOptionSettings.IsKey(string) |
| Read | MethodDeclaration | L198–198 | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS Drilling.Common.Managers.CRunOptionSettings.Read(Drilling.Common.Managers.CSettingManager) |
| Read | MethodDeclaration | L199–222 | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS Drilling.Common.Managers.CRunOptionSettings.Read(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) |
| Number | LocalFunctionStatement | L214–221 | int Number(string, int, int, int) |
| EncodeLine | MethodDeclaration | L224–230 | int Drilling.Common.Managers.CRunOptionSettings.EncodeLine(int) |
| DistortionGroupMask | PropertyDeclaration | L235–235 | int Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.DistortionGroupMask |
| get_DistortionGroupMask | GetAccessorDeclaration | L235–235 | int Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.DistortionGroupMask.get |
| set_DistortionGroupMask | InitAccessorDeclaration | L235–235 | void Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.DistortionGroupMask.init |
| DistortionGroups | PropertyDeclaration | L236–236 | System.Collections.Generic.IReadOnlyList<int> Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.DistortionGroups |
| ReviewLineCount | PropertyDeclaration | L237–243 | int Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.ReviewLineCount |
| ReviewOptions | PropertyDeclaration | L244–244 | Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.ReviewOptions |
| Option | EnumMemberDeclaration | L249–249 | Drilling.Common.Managers.EN_SETTING_TAB.Option |
| Interface | EnumMemberDeclaration | L250–250 | Drilling.Common.Managers.EN_SETTING_TAB.Interface |
| Io | EnumMemberDeclaration | L251–251 | Drilling.Common.Managers.EN_SETTING_TAB.Io |
| Motor | EnumMemberDeclaration | L252–252 | Drilling.Common.Managers.EN_SETTING_TAB.Motor |
| Alarm | EnumMemberDeclaration | L253–253 | Drilling.Common.Managers.EN_SETTING_TAB.Alarm |
| Load | MethodDeclaration | L276–276 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingFileBase.Load(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| Save | MethodDeclaration | L277–277 | void Drilling.Common.Managers.CSettingFileBase.Save(Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>, System.Threading.CancellationToken) |
| LoadHistory | MethodDeclaration | L278–278 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SETTING_HISTORY> Drilling.Common.Managers.CSettingFileBase.LoadHistory(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| LoadAll | MethodDeclaration | L283–283 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> Drilling.Common.Managers.CInterfaceFileBase.LoadAll(System.Threading.CancellationToken) |
| SaveAll | MethodDeclaration | L284–284 | void Drilling.Common.Managers.CInterfaceFileBase.SaveAll(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA>, System.Threading.CancellationToken) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `ReviewCameraResolutionKey` · L16–16

[Drilling.Common/Managers/CSettingManager.cs:16–16](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L16-L16)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CSettingManager.ReviewCameraResolutionKey |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 16 | variable-initializer | 변수의 초기값을 지정합니다: ReviewCameraResolutionKey = "Review_Camera_Resolution" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `VisionCameraResolutionKey` · L17–17

[Drilling.Common/Managers/CSettingManager.cs:17–17](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L17-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CSettingManager.VisionCameraResolutionKey |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 17 | variable-initializer | 변수의 초기값을 지정합니다: VisionCameraResolutionKey = ReviewCameraResolutionKey |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DefaultVisionCameraResolution` · L18–18

[Drilling.Common/Managers/CSettingManager.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Managers.CSettingManager.DefaultVisionCameraResolution |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 18 | variable-initializer | 변수의 초기값을 지정합니다: DefaultVisionCameraResolution = 0.0025 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `AlignCameraResolutionKey` · L19–19

[Drilling.Common/Managers/CSettingManager.cs:19–19](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L19-L19)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CSettingManager.AlignCameraResolutionKey |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 19 | variable-initializer | 변수의 초기값을 지정합니다: AlignCameraResolutionKey = "Align_Camera_Resolution" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DefaultAlignCameraResolution` · L20–20

[Drilling.Common/Managers/CSettingManager.cs:20–20](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L20-L20)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Managers.CSettingManager.DefaultAlignCameraResolution |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 20 | variable-initializer | 변수의 초기값을 지정합니다: DefaultAlignCameraResolution = 0.00345 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `WapageAlignBaseToleranceKey` · L21–21

[Drilling.Common/Managers/CSettingManager.cs:21–21](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L21-L21)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CSettingManager.WapageAlignBaseToleranceKey |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 21 | variable-initializer | 변수의 초기값을 지정합니다: WapageAlignBaseToleranceKey = "Wapage_AlignBase_Tolerance" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DefaultWapageAlignBaseTolerance` · L22–22

[Drilling.Common/Managers/CSettingManager.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L22-L22)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Managers.CSettingManager.DefaultWapageAlignBaseTolerance |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 22 | variable-initializer | 변수의 초기값을 지정합니다: DefaultWapageAlignBaseTolerance = 0.1 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_cacheLock` · L23–23

[Drilling.Common/Managers/CSettingManager.cs:23–23](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L23-L23)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Managers.CSettingManager._cacheLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 23 | new | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 23 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 23 | variable-initializer | 변수의 초기값을 지정합니다: _cacheLock = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_saveLock` · L24–24

[Drilling.Common/Managers/CSettingManager.cs:24–24](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L24-L24)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Managers.CSettingManager._saveLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 24 | new | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 24 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 24 | variable-initializer | 변수의 초기값을 지정합니다: _saveLock = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_sectionCache` · L25–25

[Drilling.Common/Managers/CSettingManager.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L25-L25)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>> Drilling.Common.Managers.CSettingManager._sectionCache |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Collections.Generic.Dictionary<Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 25 | new | resolved | System.Collections.Generic.Dictionary<Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>>.Dictionary() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 25 | variable-initializer | 변수의 초기값을 지정합니다: _sectionCache = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadSection` · L26–38

[Drilling.Common/Managers/CSettingManager.cs:26–38](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L26-L38)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Alarm/CAlarmManager.cs:577–577](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Alarm/CAlarmManager.cs#L577-L577) | settings.LoadSection | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:272–272](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Correction/CAlignInterpolation.cs#L272-L272) | settings.LoadSection | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:273–273](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Correction/CAlignInterpolation.cs#L273-L273) | settings.LoadSection | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:252–252](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Interface/CPowerMeasureRun.cs#L252-L252) | manager.Setting().LoadSection | False |
| [Drilling.Common/Managers/CManager.cs:100–100](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CManager.cs#L100-L100) | _settingManager.LoadSection | False |
| [Drilling.Common/Managers/CManager.cs:105–105](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CManager.cs#L105-L105) | _settingManager.LoadSection | False |
| [Drilling.Common/Managers/CSettingManager.cs:62–62](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L62-L62) | LoadSection | False |
| [Drilling.Common/Managers/CSettingManager.cs:77–77](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L77-L77) | LoadSection | False |
| [Drilling.Common/Managers/CSettingManager.cs:139–139](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L139-L139) | LoadSection | False |
| [Drilling.Common/Managers/CSettingManager.cs:198–198](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L198-L198) | settings.LoadSection | False |
| [Drilling.Common/Review/CReviewManager.cs:473–473](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L473-L473) | settingManager.LoadSection | False |
| [Drilling.Common/Review/CReviewManager.cs:582–582](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L582-L582) | settingManager.LoadSection | False |
| [Drilling.Common/Review/CReviewManager.cs:596–596](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L596-L596) | settingManager.LoadSection | False |
| [Drilling.Common/Review/CReviewManager.cs:2672–2672](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2672-L2672) | settingManager.LoadSection | False |
| [Drilling.Common/Review/CReviewManager.cs:2672–2672](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2672-L2672) | settingManager.LoadSection | False |
| [Drilling.Common/Review/CReviewManager.cs:4500–4500](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L4500-L4500) | settings.LoadSection | False |
| [Drilling.Common/Station/CStationProcess.cs:1531–1531](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L1531-L1531) | _settingManager.LoadSection | False |
| [Drilling.Common/Station/CStationProcess.cs:1532–1532](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L1532-L1532) | _settingManager.LoadSection | False |
| [Drilling.Common/Station/CStationProcess.cs:4238–4238](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L4238-L4238) | _settingManager.LoadSection | False |
| [Drilling.Common/Station/CStationProcess.cs:4238–4238](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L4238-L4238) | _settingManager.LoadSection | False |
| [Drilling.Common/Station/CStationProcess.cs:6188–6188](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6188-L6188) | settings.LoadSection | False |
| [Drilling.Common/Station/CStationProcess.cs:6188–6188](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6188-L6188) | settings.LoadSection | False |
| [Drilling.UI/CRootView.cs:559–559](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L559-L559) | _manager.Setting().LoadSection | False |
| [Drilling.UI/CRootView.cs:1400–1400](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1400-L1400) | _manager.Setting().LoadSection | False |
| [Drilling.UI/CRootView.cs:1408–1408](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1408-L1408) | _manager.Setting().LoadSection | False |
| [Drilling.UI/CRootView.cs:1904–1904](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L1904-L1904) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs:195–195](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L195-L195) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs:196–196](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L196-L196) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:413–413](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L413-L413) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:414–414](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L414-L414) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:426–426](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L426-L426) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:450–450](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L450-L450) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:450–450](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L450-L450) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:637–637](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L637-L637) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:638–638](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L638-L638) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2242–2242](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2242-L2242) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2690–2690](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2690-L2690) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2795–2795](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2795-L2795) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2795–2795](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2795-L2795) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2882–2882](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2882-L2882) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:4236–4236](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L4236-L4236) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:4236–4236](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L4236-L4236) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2185–2185](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2185-L2185) | settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2211–2211](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2211-L2211) | settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2886–2886](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2886-L2886) | _settings.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1079–1079](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1079-L1079) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1086–1086](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1086-L1086) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1440–1440](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1440-L1440) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1739–1739](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1739-L1739) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1784–1784](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1784-L1784) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1876–1876](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1876-L1876) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1981–1981](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1981-L1981) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1997–1997](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L1997-L1997) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2248–2248](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2248-L2248) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2582–2582](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2582-L2582) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:2769–2769](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L2769-L2769) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3347–3347](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L3347-L3347) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3458–3458](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L3458-L3458) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3600–3600](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L3600-L3600) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:3647–3647](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L3647-L3647) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4146–4146](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L4146-L4146) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4381–4381](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L4381-L4381) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4664–4664](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L4664-L4664) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:4788–4788](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L4788-L4788) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5289–5289](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L5289-L5289) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5358–5358](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L5358-L5358) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:5523–5523](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuManual.cs#L5523-L5523) | _manager.Setting().LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:2372–2372](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L2372-L2372) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:3081–3081](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L3081-L3081) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:3082–3082](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L3082-L3082) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:568–568](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L568-L568) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:568–568](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L568-L568) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:660–660](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L660-L660) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3091–3091](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3091-L3091) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:3091–3091](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L3091-L3091) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1167–1167](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L1167-L1167) | .LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3189–3189](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3189-L3189) | .LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3855–3855](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L3855-L3855) | .LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4348–4348](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4348-L4348) | .LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4369–4369](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4369-L4369) | .LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:4474–4474](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L4474-L4474) | _cameraSettings.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:5275–5275](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuReview.cs#L5275-L5275) | .LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:225–225](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L225-L225) | _settingManager.LoadSection | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:231–231](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L231-L231) | _settingManager.LoadSection | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 28 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 31 | _sectionCache.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>>.TryGetValue(Drilling.Common.Managers.EN_SETTING_TAB, out System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) |
| 37 | ReloadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.ReloadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:40 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 28 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 29 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 31 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _sectionCache.TryGetValue(section, out var cachedParameters) |
| 31 | if | 조건에 따라 분기합니다: if (_sectionCache.TryGetValue(section, out var cachedParameters)) |
| 33 | return | 호출자에게 값 또는 제어를 반환합니다: return cachedParameters; |
| 37 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReloadSection(section, cancellationToken) |
| 37 | return | 호출자에게 값 또는 제어를 반환합니다: return ReloadSection(section, cancellationToken); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["LoadSection"]
 N0["L29 lock"]
 M -->|포함| N0
 N1["L31 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReloadSection` · L40–49

[Drilling.Common/Managers/CSettingManager.cs:40–49](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L40-L49)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.ReloadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:37–37](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L37-L37) | ReloadSection | False |
| [Drilling.Common/Managers/CSettingManager.cs:55–55](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L55-L55) | ReloadSection | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:516–516](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L516-L516) | _settingManager.ReloadSection | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 44 | settingFile.Load(section, cancellationToken).ToArray | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.ToArray<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>() |
| 44 | settingFile.Load | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingFileBase.Load(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:276 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 42 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_saveLock) |
| 44 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settingFile.Load(section, cancellationToken).ToArray() |
| 44 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settingFile.Load(section, cancellationToken) |
| 44 | local-declaration | 지역 변수를 선언합니다: var loadedParameters = settingFile.Load(section, cancellationToken).ToArray(); |
| 44 | variable-initializer | 변수의 초기값을 지정합니다: loadedParameters = settingFile.Load(section, cancellationToken).ToArray() |
| 45 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 46 | assignment | 값을 대상에 대입합니다: _sectionCache[section] = loadedParameters |
| 47 | return | 호출자에게 값 또는 제어를 반환합니다: return loadedParameters; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReloadSection"]
 N0["L42 lock"]
 M -->|포함| N0
 N1["L45 lock"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadAllSections` · L51–57

[Drilling.Common/Managers/CSettingManager.cs:51–57](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L51-L57)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.CSettingManager.LoadAllSections(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CManager.cs:99–99](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CManager.cs#L99-L99) | _settingManager.LoadAllSections | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 53 | Enum.GetValues<EN_SETTING_TAB> | resolved | Drilling.Common.Managers.EN_SETTING_TAB[] System.Enum.GetValues<Drilling.Common.Managers.EN_SETTING_TAB>() |
| 55 | ReloadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.ReloadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:40 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 53 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enum.GetValues<EN_SETTING_TAB>() |
| 53 | foreach | 컬렉션 요소를 순회합니다: foreach (var section in Enum.GetValues<EN_SETTING_TAB>()) |
| 55 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReloadSection(section, cancellationToken) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["LoadAllSections"]
 N0["L53 foreach"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetValue` · L59–70

[Drilling.Common/Managers/CSettingManager.cs:59–70](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L59-L70)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CSettingManager.GetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| name | string | None | False /  |
| defaultValue | string | None | True / "" |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Automation/CAutomationManager.cs:1043–1043](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Automation/CAutomationManager.cs#L1043-L1043) | _settingManager.GetValue | False |
| [Drilling.Common/Automation/CAutomationManager.cs:1069–1069](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Automation/CAutomationManager.cs#L1069-L1069) | _settingManager.GetValue | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Interface/CPowerMeasureRun.cs#L25-L25) | settings.GetValue | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:27–27](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Interface/CPowerMeasureRun.cs#L27-L27) | settings.GetValue | False |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:38–38](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Interface/CPowerMeasureRun.cs#L38-L38) | settings.GetValue | False |
| [Drilling.Common/Managers/CManager.cs:269–269](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CManager.cs#L269-L269) | _settingManager.GetValue | False |
| [Drilling.Common/Managers/CManager.cs:270–270](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CManager.cs#L270-L270) | _settingManager.GetValue | False |
| [Drilling.Common/Managers/CSettingManager.cs:107–107](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L107-L107) | GetValue | False |
| [Drilling.Common/Managers/CSettingManager.cs:113–113](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L113-L113) | GetValue | False |
| [Drilling.Common/Station/CStationProcess.cs:4923–4923](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L4923-L4923) | settings.GetValue | False |
| [Drilling.UI/CRootView.cs:152–152](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/CRootView.cs#L152-L152) | settingManager.GetValue | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2217–2217](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2217-L2217) | _settingManager.GetValue | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2218–2218](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2218-L2218) | _settingManager.GetValue | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2219–2219](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2219-L2219) | _settingManager.GetValue | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2889–2889](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2889-L2889) | _settingManager.GetValue | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2912–2912](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2912-L2912) | _settings.GetValue | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:6455–6455](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L6455-L6455) | _settingManager.GetValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 61 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 62 | LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 68 | parameters.FirstOrDefault | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, bool>) |
| 69 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 61 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(name) |
| 62 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadSection(section, cancellationToken) |
| 62 | local-declaration | 지역 변수를 선언합니다: var parameters = LoadSection(section, cancellationToken); |
| 62 | variable-initializer | 변수의 초기값을 지정합니다: parameters = LoadSection(section, cancellationToken) |
| 68 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.FirstOrDefault(MatchesItem) |
| 68 | local-declaration | 지역 변수를 선언합니다: var parameter = parameters.FirstOrDefault(MatchesItem); |
| 68 | variable-initializer | 변수의 초기값을 지정합니다: parameter = parameters.FirstOrDefault(MatchesItem) |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(parameter.Value) |
| 69 | conditional-expression | 조건에 따라 결과식을 선택합니다: parameter is null &#124;&#124; string.IsNullOrWhiteSpace(parameter.Value) ? defaultValue : parameter.Value |
| 69 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter is null &#124;&#124; string.IsNullOrWhiteSpace(parameter.Value) ? defaultValue : parameter.Value; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `MatchesItem` · L63–66

[Drilling.Common/Managers/CSettingManager.cs:63–66](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L63-L66)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool MatchesItem(Drilling.Common.Managers.ST_SYSTEM_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| item | Drilling.Common.Managers.ST_SYSTEM_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 65 | item.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 65 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 65 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Key.Equals(name, StringComparison.OrdinalIgnoreCase) |
| 65 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals(name, StringComparison.OrdinalIgnoreCase) |
| 65 | return | 호출자에게 값 또는 제어를 반환합니다: return item.Key.Equals(name, StringComparison.OrdinalIgnoreCase) &#124;&#124; item.Name.Equals(name, StringComparison.OrdinalIgnoreCase); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetValue` · L72–102

[Drilling.Common/Managers/CSettingManager.cs:72–102](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L72-L102)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.CSettingManager.SetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| name | string | None | False /  |
| value | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4249–4249](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L4249-L4249) | _settingManager.SetValue | False |
| [Drilling.Common/Station/CStationProcess.cs:6228–6228](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6228-L6228) | settings.SetValue | False |
| [Drilling.Common/Station/CStationProcess.cs:6476–6476](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6476-L6476) | settings.SetValue | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2913–2913](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2913-L2913) | _settings.SetValue | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:768–768](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L768-L768) | _settingManager.SetValue | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1161–1161](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1161-L1161) | _settingManager.SetValue | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 76 | ArgumentException.ThrowIfNullOrWhiteSpace | resolved | void System.ArgumentException.ThrowIfNullOrWhiteSpace(string?, string?) |
| 77 | LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 94 | parameters.Select(SelectParameter).ToArray | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.ToArray<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>() |
| 94 | parameters.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.Select<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) |
| 97 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 100 | SaveSection | resolved | void Drilling.Common.Managers.CSettingManager.SaveSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:122 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 74 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_saveLock) |
| 76 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ArgumentException.ThrowIfNullOrWhiteSpace(name) |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadSection(section, cancellationToken) |
| 77 | local-declaration | 지역 변수를 선언합니다: var parameters = LoadSection(section, cancellationToken); |
| 77 | variable-initializer | 변수의 초기값을 지정합니다: parameters = LoadSection(section, cancellationToken) |
| 78 | local-declaration | 지역 변수를 선언합니다: var found = false; |
| 78 | variable-initializer | 변수의 초기값을 지정합니다: found = false |
| 94 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Select(SelectParameter).ToArray() |
| 94 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Select(SelectParameter) |
| 94 | local-declaration | 지역 변수를 선언합니다: var editedParameters = parameters.Select(SelectParameter).ToArray(); |
| 94 | variable-initializer | 변수의 초기값을 지정합니다: editedParameters = parameters.Select(SelectParameter).ToArray() |
| 95 | if | 조건에 따라 분기합니다: if (!found) |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"Setting parameter is not defined: {section}/{name}") |
| 97 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"Setting parameter is not defined: {section}/{name}"); |
| 100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveSection(section, editedParameters, cancellationToken) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetValue"]
 N0["L74 lock"]
 M -->|포함| N0
 N1["L95 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `SelectParameter` · L79–92

[Drilling.Common/Managers/CSettingManager.cs:79–92](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L79-L92)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_SYSTEM_PARAMETER SelectParameter(Drilling.Common.Managers.ST_SYSTEM_PARAMETER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.Common.Managers.ST_SYSTEM_PARAMETER |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_SYSTEM_PARAMETER | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 81 | parameter.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 81 | parameter.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameter.Key.Equals(name, StringComparison.OrdinalIgnoreCase) |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameter.Name.Equals(name, StringComparison.OrdinalIgnoreCase) |
| 81 | local-declaration | 지역 변수를 선언합니다: var isTarget = parameter.Key.Equals(name, StringComparison.OrdinalIgnoreCase) &#124;&#124; parameter.Name.Equals(name, StringComparison.OrdinalIgnoreCase); |
| 81 | variable-initializer | 변수의 초기값을 지정합니다: isTarget = parameter.Key.Equals(name, StringComparison.OrdinalIgnoreCase) &#124;&#124; parameter.Name.Equals(name, StringComparison.OrdinalIgnoreCase) |
| 82 | if | 조건에 따라 분기합니다: if (!isTarget) |
| 84 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter; |
| 87 | assignment | 값을 대상에 대입합니다: found = true |
| 88 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter with { Value = value }; |
| 90 | assignment | 값을 대상에 대입합니다: Value = value |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SelectParameter"]
 N0["L82 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetVisionMaxHoleCountPerLine` · L104–111

[Drilling.Common/Managers/CSettingManager.cs:104–111](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L104-L111)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Managers.CSettingManager.GetVisionMaxHoleCountPerLine() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CReviewManager.cs:2109–2109](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2109-L2109) | settingManager.GetVisionMaxHoleCountPerLine | False |
| [Drilling.Common/Review/CReviewManager.cs:2531–2531](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2531-L2531) | settingManager.GetVisionMaxHoleCountPerLine | False |
| [Drilling.Common/Review/CReviewManager.cs:2648–2648](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2648-L2648) | settingManager.GetVisionMaxHoleCountPerLine | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 107 | GetValue | resolved | string Drilling.Common.Managers.CSettingManager.GetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:59 |
| 107 | CVisionProtocol.DefaultMaxHoleCountPerLine.ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 108 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 109 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 110 | CVisionProtocol.ValidateLineCapacity | resolved | int Drilling.Common.Interface.Vision.CVisionProtocol.ValidateLineCapacity(int) · Drilling.Common/Interface/Vision/CVisionComm.cs:568 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(EN_SETTING_TAB.Option, CVisionProtocol.MaxHoleCountPerLineSettingKey, CVisionProtocol.DefaultMaxHoleCountPerLine.ToString(CultureInfo.InvariantCulture)) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CVisionProtocol.DefaultMaxHoleCountPerLine.ToString(CultureInfo.InvariantCulture) |
| 107 | local-declaration | 지역 변수를 선언합니다: var text = GetValue(EN_SETTING_TAB.Option, CVisionProtocol.MaxHoleCountPerLineSettingKey, CVisionProtocol.DefaultMaxHoleCountPerLine.ToString(CultureInfo.InvariantCulture)); |
| 107 | variable-initializer | 변수의 초기값을 지정합니다: text = GetValue(EN_SETTING_TAB.Option, CVisionProtocol.MaxHoleCountPerLineSettingKey, CVisionProtocol.DefaultMaxHoleCountPerLine.ToString(CultureInfo.InvariantCulture)) |
| 108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value) |
| 108 | if | 조건에 따라 분기합니다: if (!int.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value)) |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("Setting-Review MaxHoleCountPerLine은 정수여야 합니다.") |
| 109 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("Setting-Review MaxHoleCountPerLine은 정수여야 합니다."); |
| 110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CVisionProtocol.ValidateLineCapacity(value) |
| 110 | return | 호출자에게 값 또는 제어를 반환합니다: return CVisionProtocol.ValidateLineCapacity(value); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetVisionMaxHoleCountPerLine"]
 N0["L108 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetVisionCameraResolution` · L113–113

[Drilling.Common/Managers/CSettingManager.cs:113–113](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L113-L113)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Managers.CSettingManager.GetVisionCameraResolution() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CReviewManager.cs:48–48](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L48-L48) | settingManager.GetVisionCameraResolution | False |
| [Drilling.Common/Review/CReviewManager.cs:2169–2169](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2169-L2169) | settingManager.GetVisionCameraResolution | False |
| [Drilling.Common/Review/CReviewManager.cs:2268–2268](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2268-L2268) | settingManager.GetVisionCameraResolution | False |
| [Drilling.Common/Review/CReviewManager.cs:2344–2344](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CReviewManager.cs#L2344-L2344) | settingManager.GetVisionCameraResolution | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 113 | ParseVisionCameraResolution | resolved | double Drilling.Common.Managers.CSettingManager.ParseVisionCameraResolution(string) · Drilling.Common/Managers/CSettingManager.cs:115 |
| 113 | GetValue | resolved | string Drilling.Common.Managers.CSettingManager.GetValue(Drilling.Common.Managers.EN_SETTING_TAB, string, string, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:59 |
| 113 | DefaultVisionCameraResolution.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseVisionCameraResolution(GetValue(EN_SETTING_TAB.Option, VisionCameraResolutionKey, DefaultVisionCameraResolution.ToString("R", CultureInfo.InvariantCulture))) |
| 113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetValue(EN_SETTING_TAB.Option, VisionCameraResolutionKey, DefaultVisionCameraResolution.ToString("R", CultureInfo.InvariantCulture)) |
| 113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DefaultVisionCameraResolution.ToString("R", CultureInfo.InvariantCulture) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseVisionCameraResolution` · L115–120

[Drilling.Common/Managers/CSettingManager.cs:115–120](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L115-L120)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Managers.CSettingManager.ParseVisionCameraResolution(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| text | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:113–113](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L113-L113) | ParseVisionCameraResolution | False |
| [Drilling.Common/Managers/CSettingManager.cs:130–130](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L130-L130) | ParseVisionCameraResolution | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 117 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 117 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 118 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 117 | if | 조건에 따라 분기합니다: if (!double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) &#124;&#124; !double.IsFinite(value) &#124;&#124; value <= 0) |
| 118 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("Setting-Review Review_Camera_Resolution은 0보다 큰 유한한 mm/pixel 값이어야 합니다.") |
| 118 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("Setting-Review Review_Camera_Resolution은 0보다 큰 유한한 mm/pixel 값이어야 합니다."); |
| 119 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseVisionCameraResolution"]
 N0["L117 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveSection` · L122–149

[Drilling.Common/Managers/CSettingManager.cs:122–149](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L122-L149)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.CSettingManager.SaveSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| parameters | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:100–100](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L100-L100) | SaveSection | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:445–445](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L445-L445) | _settingManager.SaveSection | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 128 | parameters.FirstOrDefault | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, bool>) |
| 128 | p.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 130 | ParseVisionCameraResolution | resolved | double Drilling.Common.Managers.CSettingManager.ParseVisionCameraResolution(string) · Drilling.Common/Managers/CSettingManager.cs:115 |
| 131 | parameters.FirstOrDefault | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, bool>) |
| 131 | p.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 132 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 132 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 133 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 134 | parameters.FirstOrDefault | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, bool>) |
| 134 | p.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 135 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 135 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 136 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 137 | CReviewResultLevelSettings.Read | resolved | Drilling.Common.Review.ST_REVIEW_RESULT_LEVEL_SETTINGS Drilling.Common.Review.CReviewResultLevelSettings.Read(System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) · Drilling.Common/Review/CReviewResultLevelSettings.cs:94 |
| 138 | CRunOptionSettings.Read | resolved | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS Drilling.Common.Managers.CRunOptionSettings.Read(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) · Drilling.Common/Managers/CSettingManager.cs:199 |
| 139 | CRunOptionSettings.Read | resolved | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS Drilling.Common.Managers.CRunOptionSettings.Read(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) · Drilling.Common/Managers/CSettingManager.cs:199 |
| 139 | LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 140 | .Melsec.GetCachedValue | resolved | Drilling.Common.Interface.ST_MELSEC_CACHED_VALUE? Drilling.Common.Interface.CMelsec.GetCachedValue(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:2568 |
| 141 | Convert.ToDouble | resolved | double System.Convert.ToDouble(object?, System.IFormatProvider?) |
| 142 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 145 | settingFile.Save | resolved | void Drilling.Common.Managers.CSettingFileBase.Save(Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:277 |
| 147 | parameters.ToArray | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.ToArray<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 124 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_saveLock) |
| 126 | if | 조건에 따라 분기합니다: if (section == EN_SETTING_TAB.Option) |
| 128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.FirstOrDefault(p => p.Key.Equals(VisionCameraResolutionKey, StringComparison.OrdinalIgnoreCase)) |
| 128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: p.Key.Equals(VisionCameraResolutionKey, StringComparison.OrdinalIgnoreCase) |
| 128 | local-declaration | 지역 변수를 선언합니다: var resolution = parameters.FirstOrDefault(p => p.Key.Equals(VisionCameraResolutionKey, StringComparison.OrdinalIgnoreCase)); |
| 128 | variable-initializer | 변수의 초기값을 지정합니다: resolution = parameters.FirstOrDefault(p => p.Key.Equals(VisionCameraResolutionKey, StringComparison.OrdinalIgnoreCase)) |
| 129 | if | 조건에 따라 분기합니다: if (resolution is not null) |
| 130 | assignment | 값을 대상에 대입합니다: _ = ParseVisionCameraResolution(resolution.Value) |
| 130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseVisionCameraResolution(resolution.Value) |
| 131 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.FirstOrDefault(p => p.Key.Equals(AlignCameraResolutionKey, StringComparison.OrdinalIgnoreCase)) |
| 131 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: p.Key.Equals(AlignCameraResolutionKey, StringComparison.OrdinalIgnoreCase) |
| 131 | local-declaration | 지역 변수를 선언합니다: var alignResolution = parameters.FirstOrDefault(p => p.Key.Equals(AlignCameraResolutionKey, StringComparison.OrdinalIgnoreCase)); |
| 131 | variable-initializer | 변수의 초기값을 지정합니다: alignResolution = parameters.FirstOrDefault(p => p.Key.Equals(AlignCameraResolutionKey, StringComparison.OrdinalIgnoreCase)) |
| 132 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(alignResolution.Value, NumberStyles.Float, CultureInfo.InvariantCulture, out var alignValue) |
| 132 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(alignValue) |
| 132 | if | 조건에 따라 분기합니다: if (alignResolution is not null && (!double.TryParse(alignResolution.Value, NumberStyles.Float, CultureInfo.InvariantCulture, out var alignValue) &#124;&#124; !double.IsFinite(alignValue) &#124;&#124; alignValue <= 0)) |
| 133 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("Setting-Align Align_Camera_Resolution은 0보다 큰 유한한 mm/pixel 값이어야 합니다.") |
| 133 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("Setting-Align Align_Camera_Resolution은 0보다 큰 유한한 mm/pixel 값이어야 합니다."); |
| 134 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.FirstOrDefault(p => p.Key.Equals(WapageAlignBaseToleranceKey, StringComparison.OrdinalIgnoreCase)) |
| 134 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: p.Key.Equals(WapageAlignBaseToleranceKey, StringComparison.OrdinalIgnoreCase) |
| 134 | local-declaration | 지역 변수를 선언합니다: var tolerance = parameters.FirstOrDefault(p => p.Key.Equals(WapageAlignBaseToleranceKey, StringComparison.OrdinalIgnoreCase)); |
| 134 | variable-initializer | 변수의 초기값을 지정합니다: tolerance = parameters.FirstOrDefault(p => p.Key.Equals(WapageAlignBaseToleranceKey, StringComparison.OrdinalIgnoreCase)) |
| 135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(tolerance.Value, NumberStyles.Float, CultureInfo.InvariantCulture, out var toleranceValue) |
| 135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(toleranceValue) |
| 135 | if | 조건에 따라 분기합니다: if (tolerance is not null && (!double.TryParse(tolerance.Value, NumberStyles.Float, CultureInfo.InvariantCulture, out var toleranceValue) &#124;&#124; !double.IsFinite(toleranceValue) &#124;&#124; toleranceValue < 0)) |
| 136 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("Setting-Align Wapage_AlignBase_Tolerance는 0 이상의 유한한 mm 값이어야 합니다.") |
| 136 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("Setting-Align Wapage_AlignBase_Tolerance는 0 이상의 유한한 mm 값이어야 합니다."); |
| 137 | assignment | 값을 대상에 대입합니다: _ = CReviewResultLevelSettings.Read(parameters) |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewResultLevelSettings.Read(parameters) |
| 138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRunOptionSettings.Read(parameters) |
| 138 | local-declaration | 지역 변수를 선언합니다: var edited = CRunOptionSettings.Read(parameters); |
| 138 | variable-initializer | 변수의 초기값을 지정합니다: edited = CRunOptionSettings.Read(parameters) |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRunOptionSettings.Read(LoadSection(section, cancellationToken)) |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadSection(section, cancellationToken) |
| 139 | local-declaration | 지역 변수를 선언합니다: var current = CRunOptionSettings.Read(LoadSection(section, cancellationToken)); |
| 139 | variable-initializer | 변수의 초기값을 지정합니다: current = CRunOptionSettings.Read(LoadSection(section, cancellationToken)) |
| 140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Melsec.GetCachedValue("HANDSHAKE_PRC_REVIEW_ABLE") |
| 140 | local-declaration | 지역 변수를 선언합니다: var able = interfaceManager?.Melsec.GetCachedValue("HANDSHAKE_PRC_REVIEW_ABLE"); |
| 140 | variable-initializer | 변수의 초기값을 지정합니다: able = interfaceManager?.Melsec.GetCachedValue("HANDSHAKE_PRC_REVIEW_ABLE") |
| 141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Convert.ToDouble(able.Value, System.Globalization.CultureInfo.InvariantCulture) |
| 141 | if | 조건에 따라 분기합니다: if (edited.ReviewOptions != current.ReviewOptions && able?.IsValid == true && Convert.ToDouble(able.Value, System.Globalization.CultureInfo.InvariantCulture) == 1) |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("Review ABLE ON 상태에서는 리뷰 Run Option을 변경할 수 없습니다.") |
| 142 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("Review ABLE ON 상태에서는 리뷰 Run Option을 변경할 수 없습니다."); |
| 145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settingFile.Save(section, parameters, cancellationToken) |
| 146 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 147 | assignment | 값을 대상에 대입합니다: _sectionCache[section] = parameters.ToArray() |
| 147 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.ToArray() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SaveSection"]
 N0["L124 lock"]
 M -->|포함| N0
 N1["L126 if"]
 N0 -->|포함| N1
 N2["L129 if"]
 N1 -->|포함| N2
 N3["L132 if"]
 N1 -->|포함| N3
 N4["L135 if"]
 N1 -->|포함| N4
 N5["L141 if"]
 N1 -->|포함| N5
 N6["L146 lock"]
 N0 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadHistory` · L151–154

[Drilling.Common/Managers/CSettingManager.cs:151–154](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L151-L154)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SETTING_HISTORY> Drilling.Common.Managers.CSettingManager.LoadHistory(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SETTING_HISTORY> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:256–256](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L256-L256) | _settingManager.LoadHistory | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 153 | settingFile.LoadHistory | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SETTING_HISTORY> Drilling.Common.Managers.CSettingFileBase.LoadHistory(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:278 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settingFile.LoadHistory(section, cancellationToken) |
| 153 | return | 호출자에게 값 또는 제어를 반환합니다: return settingFile.LoadHistory(section, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadInterfaceList` · L156–159

[Drilling.Common/Managers/CSettingManager.cs:156–159](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L156-L159)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> Drilling.Common.Managers.CSettingManager.LoadInterfaceList(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:233–233](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L233-L233) | _settingManager.LoadInterfaceList | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 158 | interfaceFile.LoadAll | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> Drilling.Common.Managers.CInterfaceFileBase.LoadAll(System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:283 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 158 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaceFile.LoadAll(cancellationToken) |
| 158 | return | 호출자에게 값 또는 제어를 반환합니다: return interfaceFile.LoadAll(cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveInterfaceList` · L161–165

[Drilling.Common/Managers/CSettingManager.cs:161–165](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L161-L165)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CSettingManager.SaveInterfaceList(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| interfaces | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:415–415](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L415-L415) | _settingManager.SaveInterfaceList | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 163 | interfaceFile.SaveAll | resolved | void Drilling.Common.Managers.CInterfaceFileBase.SaveAll(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA>, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:284 |
| 164 | interfaceManager.Reload | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CInterfaceManager.Reload(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA>, bool, System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:2057 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaceFile.SaveAll(interfaces, cancellationToken) |
| 164 | await | 비동기 완료를 기다립니다: await interfaceManager.Reload(interfaces, reconnect: false, cancellationToken) |
| 164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaceManager.Reload(interfaces, reconnect: false, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ConnectInterface` · L167–170

[Drilling.Common/Managers/CSettingManager.cs:167–170](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L167-L170)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CSettingManager.ConnectInterface(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |
| number | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:347–349](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L347-L349) | _settingManager.ConnectInterface | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 169 | interfaceManager.Connect | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CInterfaceManager.Connect(Drilling.Common.Interface.EN_EQP_MODULE, int, bool, System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:262 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaceManager.Connect(module, number, cancellationToken: cancellationToken) |
| 169 | return | 호출자에게 값 또는 제어를 반환합니다: return interfaceManager.Connect(module, number, cancellationToken: cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DisconnectInterface` · L172–175

[Drilling.Common/Managers/CSettingManager.cs:172–175](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L172-L175)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CSettingManager.DisconnectInterface(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |
| number | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:389–391](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L389-L391) | _settingManager.DisconnectInterface | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 174 | interfaceManager.Disconnect | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CInterfaceManager.Disconnect(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:276 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 174 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaceManager.Disconnect(module, number, cancellationToken) |
| 174 | return | 호출자에게 값 또는 제어를 반환합니다: return interfaceManager.Disconnect(module, number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReconnectInterface` · L177–180

[Drilling.Common/Managers/CSettingManager.cs:177–180](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L177-L180)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CSettingManager.ReconnectInterface(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| module | Drilling.Common.Interface.EN_EQP_MODULE | None | False /  |
| number | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 179 | interfaceManager.Reconnect | resolved | System.Threading.Tasks.Task Drilling.Common.Interface.CInterfaceManager.Reconnect(Drilling.Common.Interface.EN_EQP_MODULE, int, System.Threading.CancellationToken) · Drilling.Common/Interface/CInterfaceManager.cs:292 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 179 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaceManager.Reconnect(module, number, cancellationToken) |
| 179 | return | 호출자에게 값 또는 제어를 반환합니다: return interfaceManager.Reconnect(module, number, cancellationToken); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `ZeroDefence` · L186–186

[Drilling.Common/Managers/CSettingManager.cs:186–186](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L186-L186)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.ZeroDefence |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 186 | variable-initializer | 변수의 초기값을 지정합니다: ZeroDefence = "RUNOPTION_ZERO_DEFENCE_USE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `CurrentGroup` · L187–187

[Drilling.Common/Managers/CSettingManager.cs:187–187](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L187-L187)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.CurrentGroup |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 187 | variable-initializer | 변수의 초기값을 지정합니다: CurrentGroup = "RUNOPTION_CURRENT_GROUP" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `FollowUp` · L188–188

[Drilling.Common/Managers/CSettingManager.cs:188–188](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L188-L188)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.FollowUp |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 188 | variable-initializer | 변수의 초기값을 지정합니다: FollowUp = "RUNOPTION_FOLLOWUP_USE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DistortionGroup0` · L189–189

[Drilling.Common/Managers/CSettingManager.cs:189–189](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L189-L189)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.DistortionGroup0 |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 189 | variable-initializer | 변수의 초기값을 지정합니다: DistortionGroup0 = "RUNOPTION_DISTORTION_GROUP0_USE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DistortionGroup1` · L190–190

[Drilling.Common/Managers/CSettingManager.cs:190–190](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L190-L190)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.DistortionGroup1 |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 190 | variable-initializer | 변수의 초기값을 지정합니다: DistortionGroup1 = "RUNOPTION_DISTORTION_GROUP1_USE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DistortionGroup2` · L191–191

[Drilling.Common/Managers/CSettingManager.cs:191–191](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L191-L191)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.DistortionGroup2 |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 191 | variable-initializer | 변수의 초기값을 지정합니다: DistortionGroup2 = "RUNOPTION_DISTORTION_GROUP2_USE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `ReviewMethod` · L192–192

[Drilling.Common/Managers/CSettingManager.cs:192–192](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L192-L192)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.ReviewMethod |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 192 | variable-initializer | 변수의 초기값을 지정합니다: ReviewMethod = "RUNOPTION_REVIEW_METHOD" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `ReviewLine` · L193–193

[Drilling.Common/Managers/CSettingManager.cs:193–193](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L193-L193)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.ReviewLine |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 193 | variable-initializer | 변수의 초기값을 지정합니다: ReviewLine = "RUNOPTION_REVIEW_LINE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `ImmediateRetry` · L194–194

[Drilling.Common/Managers/CSettingManager.cs:194–194](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L194-L194)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.ImmediateRetry |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 194 | variable-initializer | 변수의 초기값을 지정합니다: ImmediateRetry = "RUNOPTION_REVIEW_IMMEDIATE_RETRY" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `RetryCount` · L195–195

[Drilling.Common/Managers/CSettingManager.cs:195–195](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L195-L195)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Managers.CRunOptionSettings.RetryCount |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 195 | variable-initializer | 변수의 초기값을 지정합니다: RetryCount = "RUNOPTION_REVIEW_RETRY_COUNT" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `Keys` · L196–196

[Drilling.Common/Managers/CSettingManager.cs:196–196](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L196-L196)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.HashSet<string> Drilling.Common.Managers.CRunOptionSettings.Keys |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Collections.Generic.HashSet<string> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 196 | new | resolved | System.Collections.Generic.HashSet<string>.HashSet(System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEqualityComparer<string>?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new([ZeroDefence, CurrentGroup, FollowUp, DistortionGroup0, DistortionGroup1, DistortionGroup2, ReviewMethod, ReviewLine, ImmediateRetry, RetryCount], StringComparer.OrdinalIgnoreCase) |
| 196 | variable-initializer | 변수의 초기값을 지정합니다: Keys = new([ZeroDefence, CurrentGroup, FollowUp, DistortionGroup0, DistortionGroup1, DistortionGroup2, ReviewMethod, ReviewLine, ImmediateRetry, RetryCount], StringComparer.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IsKey` · L197–197

[Drilling.Common/Managers/CSettingManager.cs:197–197](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L197-L197)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Managers.CRunOptionSettings.IsKey(string) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:201–201](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L201-L201) | IsKey | False |
| [Drilling.UI/Menu/Menus/CMenuSetting.cs:1225–1225](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuSetting.cs#L1225-L1225) | CRunOptionSettings.IsKey | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 197 | Keys.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Keys.Contains(key) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Read` · L198–198

[Drilling.Common/Managers/CSettingManager.cs:198–198](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L198-L198)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS Drilling.Common.Managers.CRunOptionSettings.Read(Drilling.Common.Managers.CSettingManager) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| settings | Drilling.Common.Managers.CSettingManager | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:6030–6030](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6030-L6030) | CRunOptionSettings.Read | False |
| [Drilling.Common/Station/CStationProcess.cs:6138–6138](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6138-L6138) | CRunOptionSettings.Read | False |
| [Drilling.Common/Station/CStationProcess.cs:6233–6233](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6233-L6233) | CRunOptionSettings.Read | False |
| [Drilling.Common/Station/CStationProcess.cs:6468–6468](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6468-L6468) | CRunOptionSettings.Read | False |
| [Drilling.Common/Station/CStationProcess.cs:6474–6474](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L6474-L6474) | CRunOptionSettings.Read | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2776–2776](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2776-L2776) | CRunOptionSettings.Read | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2786–2786](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2786-L2786) | CRunOptionSettings.Read | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2885–2885](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2885-L2885) | CRunOptionSettings.Read | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 198 | Read | resolved | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS Drilling.Common.Managers.CRunOptionSettings.Read(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) · Drilling.Common/Managers/CSettingManager.cs:199 |
| 198 | settings.LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(settings.LoadSection(EN_SETTING_TAB.Option)) |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settings.LoadSection(EN_SETTING_TAB.Option) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Read` · L199–222

[Drilling.Common/Managers/CSettingManager.cs:199–222](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L199-L222)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS Drilling.Common.Managers.CRunOptionSettings.Read(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:274–274](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Correction/CAlignInterpolation.cs#L274-L274) | CRunOptionSettings.Read | False |
| [Drilling.Common/Managers/CSettingManager.cs:138–138](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L138-L138) | CRunOptionSettings.Read | False |
| [Drilling.Common/Managers/CSettingManager.cs:139–139](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L139-L139) | CRunOptionSettings.Read | False |
| [Drilling.Common/Managers/CSettingManager.cs:198–198](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L198-L198) | Read | False |
| [Drilling.Common/Review/CZeroDefenceRecipePlan.cs:266–266](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Review/CZeroDefenceRecipePlan.cs#L266-L266) | CRunOptionSettings.Read | False |
| [Drilling.Common/Station/CStationProcess.cs:4248–4248](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Station/CStationProcess.cs#L4248-L4248) | CRunOptionSettings.Read | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 201 | parameters.Where(p => IsKey(p.Key)).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 201 | parameters.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.Where<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, bool>) |
| 201 | IsKey | resolved | bool Drilling.Common.Managers.CRunOptionSettings.IsKey(string) · Drilling.Common/Managers/CSettingManager.cs:197 |
| 202 | new | resolved | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.ST_RUN_OPTION_SETTINGS(bool, int, bool, int, int, bool, int) · Drilling.Common/Managers/CSettingManager.cs:233 |
| 203 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 204 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 205 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 206 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 207 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 208 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 209 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 212 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 212 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |
| 212 | Number | resolved | int Number(string, int, int, int) · Drilling.Common/Managers/CSettingManager.cs:214 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Where(p => IsKey(p.Key)).ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Where(p => IsKey(p.Key)) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: IsKey(p.Key) |
| 201 | local-declaration | 지역 변수를 선언합니다: var values = parameters.Where(p => IsKey(p.Key)).ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase); |
| 201 | variable-initializer | 변수의 초기값을 지정합니다: values = parameters.Where(p => IsKey(p.Key)).ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new( Number(ZeroDefence, 0, 0, 1) == 1, Number(CurrentGroup, 1, 1, 4), Number(FollowUp, 0, 0, 1) == 1, Number(ReviewMethod, 1, 0, 1), Number(ReviewLine, 0, 0, 3), Number(ImmediateRetry, 0, 0, 1) == 1, Number(RetryCount, … |
| 202 | return | 호출자에게 값 또는 제어를 반환합니다: return new( Number(ZeroDefence, 0, 0, 1) == 1, Number(CurrentGroup, 1, 1, 4), Number(FollowUp, 0, 0, 1) == 1, Number(ReviewMethod, 1, 0, 1), Number(ReviewLine, 0, 0, 3), Number(ImmediateRetry, 0, 0, 1) == 1, Number(RetryCount, 1,  |
| 203 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(ZeroDefence, 0, 0, 1) |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(CurrentGroup, 1, 1, 4) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(FollowUp, 0, 0, 1) |
| 206 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(ReviewMethod, 1, 0, 1) |
| 207 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(ReviewLine, 0, 0, 3) |
| 208 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(ImmediateRetry, 0, 0, 1) |
| 209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(RetryCount, 1, 1, 3) |
| 212 | assignment | 값을 대상에 대입합니다: DistortionGroupMask = Number(DistortionGroup0, 0, 0, 1) &#124; Number(DistortionGroup1, 0, 0, 1) << 1 &#124; Number(DistortionGroup2, 0, 0, 1) << 2 |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(DistortionGroup0, 0, 0, 1) |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(DistortionGroup1, 0, 0, 1) |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Number(DistortionGroup2, 0, 0, 1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Number` · L214–221

[Drilling.Common/Managers/CSettingManager.cs:214–221](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L214-L221)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Number(string, int, int, int) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |
| fallback | int | None | False /  |
| min | int | None | False /  |
| max | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:203–203](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L203-L203) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:204–204](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L204-L204) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L205-L205) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:206–206](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L206-L206) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:207–207](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L207-L207) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:208–208](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L208-L208) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:209–209](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L209-L209) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L212-L212) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L212-L212) | Number | False |
| [Drilling.Common/Managers/CSettingManager.cs:212–212](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L212-L212) | Number | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 216 | values.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |
| 218 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 220 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue(key, out var text) |
| 216 | if | 조건에 따라 분기합니다: if (!values.TryGetValue(key, out var text)) |
| 217 | return | 호출자에게 값 또는 제어를 반환합니다: return fallback; |
| 218 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value) |
| 218 | if | 조건에 따라 분기합니다: if (int.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value) && value >= min && value <= max) |
| 219 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |
| 220 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"{key}: {min}~{max} 범위의 정수를 입력해 주세요.") |
| 220 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"{key}: {min}~{max} 범위의 정수를 입력해 주세요."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Number"]
 N0["L216 if"]
 M -->|포함| N0
 N1["L218 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EncodeLine` · L224–230

[Drilling.Common/Managers/CSettingManager.cs:224–230](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L224-L230)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Managers.CRunOptionSettings.EncodeLine(int) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRunOptionSettings |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| count | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2856–2856](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.UI/Menu/Menus/CMenuMain.cs#L2856-L2856) | CRunOptionSettings.EncodeLine | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 230 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 230 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 224 | switch-expression | 값별 결과식을 선택합니다: count switch { 1 => 0, 3 => 1, 5 => 2, 7 => 3, _ => throw new ArgumentOutOfRangeException(nameof(count))} |
| 230 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(count)) |
| 230 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(count) |
| 230 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(count)) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["EncodeLine"]
 N0["L224 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `DistortionGroupMask` · L235–235

[Drilling.Common/Managers/CSettingManager.cs:235–235](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L235-L235)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.DistortionGroupMask |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_DistortionGroupMask` · L235–235

[Drilling.Common/Managers/CSettingManager.cs:235–235](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L235-L235)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.DistortionGroupMask.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_DistortionGroupMask` · L235–235

[Drilling.Common/Managers/CSettingManager.cs:235–235](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L235-L235)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.DistortionGroupMask.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `DistortionGroups` · L236–236

[Drilling.Common/Managers/CSettingManager.cs:236–236](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L236-L236)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<int> Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.DistortionGroups |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<int> |
| 소속 타입 | NamedType:Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 236 | Enumerable.Range(0, 3).Where(index => (DistortionGroupMask & (1 << index)) != 0).ToArray | resolved | int[] System.Collections.Generic.IEnumerable<int>.ToArray<int>() |
| 236 | Enumerable.Range(0, 3).Where | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<int>.Where<int>(System.Func<int, bool>) |
| 236 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 3).Where(index => (DistortionGroupMask & (1 << index)) != 0).ToArray() |
| 236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 3).Where(index => (DistortionGroupMask & (1 << index)) != 0) |
| 236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 3) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ReviewLineCount` · L237–243

[Drilling.Common/Managers/CSettingManager.cs:237–243](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L237-L243)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.ReviewLineCount |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 243 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 237 | switch-expression | 값별 결과식을 선택합니다: ReviewLineIndex switch { 0 => 1, 1 => 3, 2 => 5, 3 => 7, _ => throw new InvalidDataException("Review Line 설정 오류")} |
| 243 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("Review Line 설정 오류") |
| 243 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("Review Line 설정 오류") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReviewLineCount"]
 N0["L237 switch-expression"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ReviewOptions` · L244–244

[Drilling.Common/Managers/CSettingManager.cs:244–244](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L244-L244)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS.ReviewOptions |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS |
| 소속 타입 | NamedType:Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 244 | new | resolved | Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS.ST_AUTO_REVIEW_OPTIONS(int, Drilling.Common.Review.EN_FINE_INSPECTION_METHOD, int, bool) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:342 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 244 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(ReviewLineCount, ReviewMethod == 0 ? EN_FINE_INSPECTION_METHOD.PtoP : EN_FINE_INSPECTION_METHOD.Flying, RetryCount, ImmediateRetry) |
| 244 | conditional-expression | 조건에 따라 결과식을 선택합니다: ReviewMethod == 0 ? EN_FINE_INSPECTION_METHOD.PtoP : EN_FINE_INSPECTION_METHOD.Flying |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Option` · L249–249

[Drilling.Common/Managers/CSettingManager.cs:249–249](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L249-L249)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_SETTING_TAB.Option |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_SETTING_TAB |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_SETTING_TAB |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Interface` · L250–250

[Drilling.Common/Managers/CSettingManager.cs:250–250](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L250-L250)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_SETTING_TAB.Interface |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_SETTING_TAB |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_SETTING_TAB |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Io` · L251–251

[Drilling.Common/Managers/CSettingManager.cs:251–251](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L251-L251)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_SETTING_TAB.Io |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_SETTING_TAB |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_SETTING_TAB |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Motor` · L252–252

[Drilling.Common/Managers/CSettingManager.cs:252–252](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L252-L252)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_SETTING_TAB.Motor |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_SETTING_TAB |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_SETTING_TAB |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Alarm` · L253–253

[Drilling.Common/Managers/CSettingManager.cs:253–253](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L253-L253)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_SETTING_TAB.Alarm |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_SETTING_TAB |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_SETTING_TAB |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Load` · L276–276

[Drilling.Common/Managers/CSettingManager.cs:276–276](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L276-L276)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingFileBase.Load(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CManager.cs:610–610](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CManager.cs#L610-L610) | _settingFile.Load | False |
| [Drilling.Common/Managers/CSettingManager.cs:44–44](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L44-L44) | settingFile.Load | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Save` · L277–277

[Drilling.Common/Managers/CSettingManager.cs:277–277](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L277-L277)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.CSettingFileBase.Save(Drilling.Common.Managers.EN_SETTING_TAB, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| parameters | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:145–145](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L145-L145) | settingFile.Save | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadHistory` · L278–278

[Drilling.Common/Managers/CSettingManager.cs:278–278](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L278-L278)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SETTING_HISTORY> Drilling.Common.Managers.CSettingFileBase.LoadHistory(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SETTING_HISTORY> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CSettingFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| section | Drilling.Common.Managers.EN_SETTING_TAB | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:153–153](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L153-L153) | settingFile.LoadHistory | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadAll` · L283–283

[Drilling.Common/Managers/CSettingManager.cs:283–283](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L283-L283)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> Drilling.Common.Managers.CInterfaceFileBase.LoadAll(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CInterfaceFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CManager.cs:480–480](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CManager.cs#L480-L480) | _interfaceFile.LoadAll | False |
| [Drilling.Common/Managers/CSettingManager.cs:158–158](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L158-L158) | interfaceFile.LoadAll | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveAll` · L284–284

[Drilling.Common/Managers/CSettingManager.cs:284–284](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L284-L284)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.CInterfaceFileBase.SaveAll(System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.CInterfaceFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| interfaces | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_DATA> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CSettingManager.cs:163–163](https://github.com/kjuws10-rgb/A3Drilling/blob/96e22cd027c84bf302b23f2949b98985d7f301bb/Drilling.Common/Managers/CSettingManager.cs#L163-L163) | interfaceFile.SaveAll | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.Common/Managers/CSettingManager.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
