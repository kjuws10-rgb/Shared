# Drilling.Common/Managers/CRecipeManager.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4 |
| 원본 SHA256 | b8d208d8945081e6a6d500f40d51e3f4fca414124329325c36c7fffedb86c9b9 |
| 파일 분류 | code |
| 원본 크기/행 | 25,688 bytes / 454 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs) |

## 파일의 역할과 읽는 순서

프로그램의 시작·구성·공유 타입 또는 빌드 연결에 사용됩니다. 아래 실제 선언·참조와 원본 근거를 확인합니다.

![파일 관계도](../../../diagrams/files/f884449d2a8c0ab3313f.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CRecipeManager | ClassDeclaration | 11–337 | CRecipeManager |
| ST_RECIPE_COMPANION_FOLDER | RecordDeclaration | 339–339 | ST_RECIPE_COMPANION_FOLDER |
| IRecipeCopyStore | InterfaceDeclaration | 341–347 | IRecipeCopyStore |
| EN_RECIPE_DATA_TYPE | EnumDeclaration | 349–355 | EN_RECIPE_DATA_TYPE |
| ST_RECIPE_PARAMETER | RecordDeclaration | 357–375 | ST_RECIPE_PARAMETER |
| ST_RECIPE_HISTORY | RecordDeclaration | 376–386 | ST_RECIPE_HISTORY |
| ST_RECIPE_DEFINITION | RecordDeclaration | 387–387 | ST_RECIPE_DEFINITION |
| ST_RECIPE_FORM_ITEM | RecordDeclaration | 388–406 | ST_RECIPE_FORM_ITEM |
| ST_RECIPE_VALUE | RecordDeclaration | 407–407 | ST_RECIPE_VALUE |
| CRecipeFileBase | ClassDeclaration | 408–420 | CRecipeFileBase |
| CProtectWindowRecipeData | ClassDeclaration | 427–451 | CProtectWindowRecipeData |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| _cacheLock | FieldDeclaration | L13–13 | object Drilling.Common.Managers.CRecipeManager._cacheLock |
| _recipeOperationGate | FieldDeclaration | L14–14 | System.Threading.SemaphoreSlim Drilling.Common.Managers.CRecipeManager._recipeOperationGate |
| _recipeCache | FieldDeclaration | L15–15 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>? Drilling.Common.Managers.CRecipeManager._recipeCache |
| _historyGate | FieldDeclaration | L16–16 | System.Threading.SemaphoreSlim Drilling.Common.Managers.CRecipeManager._historyGate |
| _historyCache | FieldDeclaration | L17–17 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>? Drilling.Common.Managers.CRecipeManager._historyCache |
| LoadHistory | MethodDeclaration | L18–18 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistory(System.Threading.CancellationToken) |
| LoadHistoryCore | MethodDeclaration | L19–32 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) |
| RecordSelection | MethodDeclaration | L34–38 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RecordSelection(string, string, System.Threading.CancellationToken) |
| LoadRecipes | MethodDeclaration | L40–71 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeManager.LoadRecipes(System.Threading.CancellationToken) |
| SaveRecipe | MethodDeclaration | L73–73 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.SaveRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) |
| SaveParametersIfUnchanged | MethodDeclaration | L74–93 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.Common.Managers.CRecipeManager.SaveParametersIfUnchanged(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Threading.CancellationToken) |
| SaveAlignOffsetsIfUnchanged | MethodDeclaration | L94–110 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.Common.Managers.CRecipeManager.SaveAlignOffsetsIfUnchanged(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>, System.Threading.CancellationToken) |
| SavePowerMeasureAngles | MethodDeclaration | L113–127 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.SavePowerMeasureAngles(string, System.Collections.Generic.IReadOnlyDictionary<int, double>, System.Threading.CancellationToken) |
| ListCompanionFolders | MethodDeclaration | L128–128 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> Drilling.Common.Managers.CRecipeManager.ListCompanionFolders(string, string, System.Threading.CancellationToken) |
| CreateRecipeCopy | MethodDeclaration | L129–145 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.CreateRecipeCopy(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| SaveRecipeCore | MethodDeclaration | L146–159 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.SaveRecipeCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) |
| RefreshRecipe | MethodDeclaration | L161–161 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.RefreshRecipe(string, System.Threading.CancellationToken) |
| RefreshRecipeCore | MethodDeclaration | L162–170 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.RefreshRecipeCore(string, System.Threading.CancellationToken) |
| RenameRecipe | MethodDeclaration | L172–172 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RenameRecipe(string, string, System.Threading.CancellationToken) |
| RenameRecipe | MethodDeclaration | L173–173 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RenameRecipe(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| RenameRecipeCore | MethodDeclaration | L174–190 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RenameRecipeCore(string, string, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyCollection<string>?) |
| DeleteRecipe | MethodDeclaration | L192–192 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.DeleteRecipe(string, System.Threading.CancellationToken) |
| DeleteRecipe | MethodDeclaration | L193–193 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.DeleteRecipe(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| DeleteRecipeCore | MethodDeclaration | L194–207 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.DeleteRecipeCore(string, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyCollection<string>?) |
| IncrementProtectWindowCount | MethodDeclaration | L209–209 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.IncrementProtectWindowCount(string, System.Threading.CancellationToken) |
| ResetProtectWindowCount | MethodDeclaration | L210–210 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.ResetProtectWindowCount(string, System.Threading.CancellationToken) |
| SetProtectWindowCount | MethodDeclaration | L211–211 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.SetProtectWindowCount(string, int, System.Threading.CancellationToken) |
| ChangeProtectWindowCount | MethodDeclaration | L212–223 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.ChangeProtectWindowCount(string, System.Func<System.Threading.Tasks.Task<int>>, System.Threading.CancellationToken) |
| WithRecipeOperation | MethodDeclaration | L224–235 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) |
| WithRecipeOperation | MethodDeclaration | L237–248 | System.Threading.Tasks.Task<T> Drilling.Common.Managers.CRecipeManager.WithRecipeOperation<T>(System.Func<System.Threading.Tasks.Task<T>>, System.Threading.CancellationToken) |
| UpdateCachedRecipe | MethodDeclaration | L250–280 | void Drilling.Common.Managers.CRecipeManager.UpdateCachedRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| RenameCachedRecipe | MethodDeclaration | L282–305 | void Drilling.Common.Managers.CRecipeManager.RenameCachedRecipe(string, string) |
| DeleteCachedRecipe | MethodDeclaration | L307–327 | void Drilling.Common.Managers.CRecipeManager.DeleteCachedRecipe(string) |
| CloneRecipe | MethodDeclaration | L329–336 | Drilling.Common.Managers.ST_RECIPE_DEFINITION Drilling.Common.Managers.CRecipeManager.CloneRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| ListCompanionFolders | MethodDeclaration | L343–343 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> Drilling.Common.Managers.IRecipeCopyStore.ListCompanionFolders(string, string, System.Threading.CancellationToken) |
| CreateCopy | MethodDeclaration | L344–344 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.CreateCopy(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| RenameWithCompanions | MethodDeclaration | L345–345 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.RenameWithCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| DeleteWithCompanions | MethodDeclaration | L346–346 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.DeleteWithCompanions(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| String | EnumMemberDeclaration | L351–351 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE.String |
| Int | EnumMemberDeclaration | L352–352 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE.Int |
| Double | EnumMemberDeclaration | L353–353 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE.Double |
| Bool | EnumMemberDeclaration | L354–354 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE.Bool |
| LoadAll | MethodDeclaration | L410–410 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeFileBase.LoadAll(System.Threading.CancellationToken) |
| Find | MethodDeclaration | L411–411 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) |
| Save | MethodDeclaration | L412–412 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Save(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) |
| Rename | MethodDeclaration | L413–413 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Rename(string, string, System.Threading.CancellationToken) |
| Delete | MethodDeclaration | L414–414 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Delete(string, System.Threading.CancellationToken) |
| LoadHistory | MethodDeclaration | L415–415 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeFileBase.LoadHistory(System.Threading.CancellationToken) |
| RecordSelection | MethodDeclaration | L416–416 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.RecordSelection(string, string, System.Threading.CancellationToken) |
| IncrementProtectWindowCount | MethodDeclaration | L417–417 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.IncrementProtectWindowCount(string, System.Threading.CancellationToken) |
| ResetProtectWindowCount | MethodDeclaration | L418–418 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.ResetProtectWindowCount(string, System.Threading.CancellationToken) |
| SetProtectWindowCount | MethodDeclaration | L419–419 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.SetProtectWindowCount(string, int, System.Threading.CancellationToken) |
| Tab | FieldDeclaration | L429–429 | string Drilling.Common.Recipe.CProtectWindowRecipeData.Tab |
| Group | FieldDeclaration | L430–430 | string Drilling.Common.Recipe.CProtectWindowRecipeData.Group |
| MaximumCountKey | FieldDeclaration | L431–431 | string Drilling.Common.Recipe.CProtectWindowRecipeData.MaximumCountKey |
| RetryCountKey | FieldDeclaration | L432–432 | string Drilling.Common.Recipe.CProtectWindowRecipeData.RetryCountKey |
| CurrentCountKey | FieldDeclaration | L433–433 | string Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey |
| MaximumRetryCount | FieldDeclaration | L434–434 | int Drilling.Common.Recipe.CProtectWindowRecipeData.MaximumRetryCount |
| ParseCount | MethodDeclaration | L435–440 | int Drilling.Common.Recipe.CProtectWindowRecipeData.ParseCount(string?, string) |
| ParseRetryCount | MethodDeclaration | L442–450 | int Drilling.Common.Recipe.CProtectWindowRecipeData.ParseRetryCount(string?) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `_cacheLock` · L13–13

[Drilling.Common/Managers/CRecipeManager.cs:13–13](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L13-L13)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Managers.CRecipeManager._cacheLock |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 13 | new | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 13 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 13 | variable-initializer | 변수의 초기값을 지정합니다: _cacheLock = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_recipeOperationGate` · L14–14

[Drilling.Common/Managers/CRecipeManager.cs:14–14](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L14-L14)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.SemaphoreSlim Drilling.Common.Managers.CRecipeManager._recipeOperationGate |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.SemaphoreSlim |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 14 | new | resolved | System.Threading.SemaphoreSlim.SemaphoreSlim(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 14 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(1, 1) |
| 14 | variable-initializer | 변수의 초기값을 지정합니다: _recipeOperationGate = new(1, 1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_recipeCache` · L15–15

[Drilling.Common/Managers/CRecipeManager.cs:15–15](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L15-L15)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>? Drilling.Common.Managers.CRecipeManager._recipeCache |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>? |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_historyGate` · L16–16

[Drilling.Common/Managers/CRecipeManager.cs:16–16](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L16-L16)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.SemaphoreSlim Drilling.Common.Managers.CRecipeManager._historyGate |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.SemaphoreSlim |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 16 | new | resolved | System.Threading.SemaphoreSlim.SemaphoreSlim(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 16 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(1, 1) |
| 16 | variable-initializer | 변수의 초기값을 지정합니다: _historyGate = new(1, 1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_historyCache` · L17–17

[Drilling.Common/Managers/CRecipeManager.cs:17–17](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L17-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>? Drilling.Common.Managers.CRecipeManager._historyCache |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>? |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadHistory` · L18–18

[Drilling.Common/Managers/CRecipeManager.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistory(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:571–571](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L571-L571) | _recipeManager.LoadHistory | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 18 | LoadHistoryCore | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:19 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 18 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(false, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadHistoryCore` · L19–32

[Drilling.Common/Managers/CRecipeManager.cs:19–32](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L19-L32)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| refresh | bool | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L18-L18) | LoadHistoryCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:37–37](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L37-L37) | LoadHistoryCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:90–90](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L90-L90) | LoadHistoryCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:107–107](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L107-L107) | LoadHistoryCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:144–144](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L144-L144) | LoadHistoryCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:158–158](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L158-L158) | LoadHistoryCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:189–189](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L189-L189) | LoadHistoryCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:206–206](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L206-L206) | LoadHistoryCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 21 | _historyGate.WaitAsync(cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 21 | _historyGate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync(System.Threading.CancellationToken) |
| 25 | (await recipeFile.LoadHistory(cancellationToken).ConfigureAwait(false)).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_HISTORY[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_HISTORY>.ToArray<Drilling.Common.Managers.ST_RECIPE_HISTORY>() |
| 25 | recipeFile.LoadHistory(cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>>.ConfigureAwait(bool) |
| 25 | recipeFile.LoadHistory | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeFileBase.LoadHistory(System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:415 |
| 30 | _historyGate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 21 | await | 비동기 완료를 기다립니다: await _historyGate.WaitAsync(cancellationToken).ConfigureAwait(false) |
| 21 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _historyGate.WaitAsync(cancellationToken).ConfigureAwait(false) |
| 21 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _historyGate.WaitAsync(cancellationToken) |
| 22 | try | 예외 처리 범위입니다: try |
| 24 | if | 조건에 따라 분기합니다: if (refresh &#124;&#124; _historyCache is null) |
| 25 | assignment | 값을 대상에 대입합니다: _historyCache = (await recipeFile.LoadHistory(cancellationToken).ConfigureAwait(false)).ToArray() |
| 25 | await | 비동기 완료를 기다립니다: await recipeFile.LoadHistory(cancellationToken).ConfigureAwait(false) |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (await recipeFile.LoadHistory(cancellationToken).ConfigureAwait(false)).ToArray() |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.LoadHistory(cancellationToken).ConfigureAwait(false) |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.LoadHistory(cancellationToken) |
| 26 | return | 호출자에게 값 또는 제어를 반환합니다: return _historyCache; |
| 28 | finally | 종료 정리 구간입니다: finally |
| 30 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _historyGate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["LoadHistoryCore"]
 N0["L22 try"]
 M -->|포함| N0
 N1["L24 if"]
 N0 -->|포함| N1
 N2["L28 finally"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RecordSelection` · L34–38

[Drilling.Common/Managers/CRecipeManager.cs:34–38](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L34-L38)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RecordSelection(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| previousRecipeId | string | None | False /  |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:775–775](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L775-L775) | _recipeManager.RecordSelection | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 36 | recipeFile.RecordSelection | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.RecordSelection(string, string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:416 |
| 37 | LoadHistoryCore | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:19 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 36 | await | 비동기 완료를 기다립니다: await recipeFile.RecordSelection(previousRecipeId, recipeId, cancellationToken) |
| 36 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.RecordSelection(previousRecipeId, recipeId, cancellationToken) |
| 37 | await | 비동기 완료를 기다립니다: await LoadHistoryCore(true, cancellationToken) |
| 37 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadRecipes` · L40–71

[Drilling.Common/Managers/CRecipeManager.cs:40–71](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L40-L71)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeManager.LoadRecipes(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4429–4429](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L4429-L4429) | recipes.LoadRecipes | False |
| [Drilling.Common/Station/CStationProcess.cs:4778–4778](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L4778-L4778) | recipes.LoadRecipes | False |
| [Drilling.Common/Station/CStationProcess.cs:6245–6245](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L6245-L6245) | recipes.LoadRecipes | False |
| [Drilling.UI/CRootView.cs:1632–1632](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L1632-L1632) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/CRootView.cs:1733–1733](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L1733-L1733) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/CRootView.cs:3230–3230](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L3230-L3230) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/CRootView.cs:3275–3275](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L3275-L3275) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/CRootView.cs:3283–3283](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L3283-L3283) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs:187–187](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L187-L187) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:853–853](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L853-L853) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:1945–1945](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1945-L1945) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2874–2874](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2874-L2874) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2161–2161](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMain.cs#L2161-L2161) | recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuManual.cs:1618–1618](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuManual.cs#L1618-L1618) | _manager.Recipe().LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:3329–3329](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L3329-L3329) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:4544–4544](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L4544-L4544) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuPm.cs:124–124](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuPm.cs#L124-L124) | recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:570–570](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L570-L570) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1098–1098](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1098-L1098) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1191–1191](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1191-L1191) | _recipeManager.LoadRecipes | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:583–583](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuReview.cs#L583-L583) | _recipeManager.LoadRecipes | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 42 | cancellationToken.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 51 | _recipeOperationGate.WaitAsync(cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 51 | _recipeOperationGate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync(System.Threading.CancellationToken) |
| 60 | (await recipeFile.LoadAll(cancellationToken).ConfigureAwait(false)).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.ToArray<Drilling.Common.Managers.ST_RECIPE_DEFINITION>() |
| 60 | recipeFile.LoadAll(cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>>.ConfigureAwait(bool) |
| 60 | recipeFile.LoadAll | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeFileBase.LoadAll(System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:410 |
| 69 | _recipeOperationGate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 42 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cancellationToken.ThrowIfCancellationRequested() |
| 43 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 45 | if | 조건에 따라 분기합니다: if (_recipeCache is not null) |
| 47 | return | 호출자에게 값 또는 제어를 반환합니다: return _recipeCache; |
| 51 | await | 비동기 완료를 기다립니다: await _recipeOperationGate.WaitAsync(cancellationToken).ConfigureAwait(false) |
| 51 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.WaitAsync(cancellationToken).ConfigureAwait(false) |
| 51 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.WaitAsync(cancellationToken) |
| 52 | try | 예외 처리 범위입니다: try |
| 54 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 56 | if | 조건에 따라 분기합니다: if (_recipeCache is not null) |
| 57 | return | 호출자에게 값 또는 제어를 반환합니다: return _recipeCache; |
| 60 | await | 비동기 완료를 기다립니다: await recipeFile.LoadAll(cancellationToken).ConfigureAwait(false) |
| 60 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (await recipeFile.LoadAll(cancellationToken).ConfigureAwait(false)).ToArray() |
| 60 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.LoadAll(cancellationToken).ConfigureAwait(false) |
| 60 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.LoadAll(cancellationToken) |
| 60 | local-declaration | 지역 변수를 선언합니다: var recipes = (await recipeFile.LoadAll(cancellationToken).ConfigureAwait(false)).ToArray(); |
| 60 | variable-initializer | 변수의 초기값을 지정합니다: recipes = (await recipeFile.LoadAll(cancellationToken).ConfigureAwait(false)).ToArray() |
| 61 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 63 | assignment | 값을 대상에 대입합니다: _recipeCache ??= recipes |
| 64 | return | 호출자에게 값 또는 제어를 반환합니다: return _recipeCache; |
| 67 | finally | 종료 정리 구간입니다: finally |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["LoadRecipes"]
 N0["L43 lock"]
 M -->|포함| N0
 N1["L45 if"]
 N0 -->|포함| N1
 N2["L52 try"]
 M -->|포함| N2
 N3["L54 lock"]
 N2 -->|포함| N3
 N4["L56 if"]
 N3 -->|포함| N4
 N5["L61 lock"]
 N2 -->|포함| N5
 N6["L67 finally"]
 N2 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveRecipe` · L73–73

[Drilling.Common/Managers/CRecipeManager.cs:73–73](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L73-L73)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.SaveRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2873–2873](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2873-L2873) | _recipeManager.SaveRecipe | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2968–2968](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2968-L2968) | _recipeManager.SaveRecipe | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1067–1067](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1067-L1067) | _recipeManager.SaveRecipe | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1155–1155](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1155-L1155) | _recipeManager.SaveRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 73 | WithRecipeOperation(() => SaveRecipeCore(recipe, cancellationToken), cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 73 | WithRecipeOperation | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:224 |
| 73 | SaveRecipeCore | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.SaveRecipeCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:146 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 73 | await | 비동기 완료를 기다립니다: await WithRecipeOperation(() => SaveRecipeCore(recipe, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 73 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => SaveRecipeCore(recipe, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 73 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => SaveRecipeCore(recipe, cancellationToken), cancellationToken) |
| 73 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveRecipeCore(recipe, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveParametersIfUnchanged` · L74–93

[Drilling.Common/Managers/CRecipeManager.cs:74–93](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L74-L93)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.Common.Managers.CRecipeManager.SaveParametersIfUnchanged(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| expected | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| changes | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3568–3568](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3568-L3568) | _recipeManager.SaveParametersIfUnchanged | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3934–3934](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3934-L3934) | _recipeManager.SaveParametersIfUnchanged | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 74 | WithRecipeOperation | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.Common.Managers.CRecipeManager.WithRecipeOperation<Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION>>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:237 |
| 77 | recipeFile.Find(expected.Id, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 77 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 77 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 78 | expected.Parameters.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 79 | current.Parameters.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 81 | before.Remove | resolved | bool System.Collections.Generic.Dictionary<string, string>.Remove(string) |
| 81 | now.Remove | resolved | bool System.Collections.Generic.Dictionary<string, string>.Remove(string) |
| 82 | before.Any | resolved | bool System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>.Any<System.Collections.Generic.KeyValuePair<string, string>>(System.Func<System.Collections.Generic.KeyValuePair<string, string>, bool>) |
| 82 | now.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |
| 83 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 84 | changes.Keys.Any | resolved | bool System.Collections.Generic.IEnumerable<string>.Any<string>(System.Func<string, bool>) |
| 84 | now.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<string, string>.ContainsKey(string) |
| 84 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 85 | current.Parameters.Select(p => changes.TryGetValue(p.Key, out var value) ? p with { Value = value } : p).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToArray<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 85 | current.Parameters.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Select<Drilling.Common.Managers.ST_RECIPE_PARAMETER, Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 85 | changes.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 87 | recipeFile.Save(updated, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 87 | recipeFile.Save | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Save(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:412 |
| 88 | recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 88 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 88 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 89 | UpdateCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.UpdateCachedRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:250 |
| 90 | LoadHistoryCore(true, CancellationToken.None).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>>.ConfigureAwait(bool) |
| 90 | LoadHistoryCore | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:19 |
| 91 | System.Diagnostics.Trace.TraceError | resolved | void System.Diagnostics.Trace.TraceError(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 74 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(async () => { // @보호 [레시피] 동시변경 - 측정 시작 후 Recipe가 바뀌었으면 보정값으로 최신 파일을 덮어쓰지 않는다. var current = await recipeFile.Find(expected.Id, token).ConfigureAwait(false) ?? throw new InvalidOperationException("현재 … |
| 77 | await | 비동기 완료를 기다립니다: await recipeFile.Find(expected.Id, token).ConfigureAwait(false) |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(expected.Id, token).ConfigureAwait(false) |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(expected.Id, token) |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("현재 레시피가 없습니다.") |
| 77 | local-declaration | 지역 변수를 선언합니다: var current = await recipeFile.Find(expected.Id, token).ConfigureAwait(false) ?? throw new InvalidOperationException("현재 레시피가 없습니다."); |
| 77 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("현재 레시피가 없습니다.") |
| 77 | variable-initializer | 변수의 초기값을 지정합니다: current = await recipeFile.Find(expected.Id, token).ConfigureAwait(false) ?? throw new InvalidOperationException("현재 레시피가 없습니다.") |
| 78 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: expected.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 78 | local-declaration | 지역 변수를 선언합니다: var before = expected.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase); |
| 78 | variable-initializer | 변수의 초기값을 지정합니다: before = expected.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 79 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 79 | local-declaration | 지역 변수를 선언합니다: var now = current.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase); |
| 79 | variable-initializer | 변수의 초기값을 지정합니다: now = current.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: before.Remove("CURRENT_PROCESS_COUNT") |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: now.Remove("CURRENT_PROCESS_COUNT") |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: before.Any(p => !now.TryGetValue(p.Key, out var value) &#124;&#124; value != p.Value) |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: now.TryGetValue(p.Key, out var value) |
| 82 | if | 조건에 따라 분기합니다: if (before.Count != now.Count &#124;&#124; before.Any(p => !now.TryGetValue(p.Key, out var value) &#124;&#124; value != p.Value)) |
| 83 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("측정 후 레시피가 변경되었습니다. 기준을 다시 설정해 주세요.") |
| 83 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("측정 후 레시피가 변경되었습니다. 기준을 다시 설정해 주세요."); |
| 84 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: changes.Keys.Any(key => !now.ContainsKey(key)) |
| 84 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: now.ContainsKey(key) |
| 84 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("저장할 레시피 파라미터가 없습니다.") |
| 84 | if | 조건에 따라 분기합니다: if (changes.Keys.Any(key => !now.ContainsKey(key))) |
| 84 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("저장할 레시피 파라미터가 없습니다."); |
| 85 | assignment | 값을 대상에 대입합니다: Parameters = current.Parameters.Select(p => changes.TryGetValue(p.Key, out var value) ? p with { Value = value } : p).ToArray() |
| 85 | assignment | 값을 대상에 대입합니다: Value = value |
| 85 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current.Parameters.Select(p => changes.TryGetValue(p.Key, out var value) ? p with { Value = value } : p).ToArray() |
| 85 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current.Parameters.Select(p => changes.TryGetValue(p.Key, out var value) ? p with { Value = value } : p) |
| 85 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: changes.TryGetValue(p.Key, out var value) |
| 85 | conditional-expression | 조건에 따라 결과식을 선택합니다: changes.TryGetValue(p.Key, out var value) ? p with { Value = value } : p |
| 85 | local-declaration | 지역 변수를 선언합니다: var updated = current with { Parameters = current.Parameters.Select(p => changes.TryGetValue(p.Key, out var value) ? p with { Value = value } : p).ToArray() }; |
| 85 | variable-initializer | 변수의 초기값을 지정합니다: updated = current with { Parameters = current.Parameters.Select(p => changes.TryGetValue(p.Key, out var value) ? p with { Value = value } : p).ToArray() } |
| 87 | await | 비동기 완료를 기다립니다: await recipeFile.Save(updated, token).ConfigureAwait(false) |
| 87 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Save(updated, token).ConfigureAwait(false) |
| 87 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Save(updated, token) |
| 88 | await | 비동기 완료를 기다립니다: await recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait(false) |
| 88 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait(false) |
| 88 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(expected.Id, CancellationToken.None) |
| 88 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("레시피 저장 명령은 완료됐지만 저장값을 다시 읽을 수 없습니다.") |
| 88 | local-declaration | 지역 변수를 선언합니다: var saved = await recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait(false) ?? throw new IOException("레시피 저장 명령은 완료됐지만 저장값을 다시 읽을 수 없습니다."); |
| 88 | throw | 예외를 발생/전달합니다: throw new IOException("레시피 저장 명령은 완료됐지만 저장값을 다시 읽을 수 없습니다.") |
| 88 | variable-initializer | 변수의 초기값을 지정합니다: saved = await recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait(false) ?? throw new IOException("레시피 저장 명령은 완료됐지만 저장값을 다시 읽을 수 없습니다.") |
| 89 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateCachedRecipe(saved) |
| 90 | await | 비동기 완료를 기다립니다: await LoadHistoryCore(true, CancellationToken.None).ConfigureAwait(false) |
| 90 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, CancellationToken.None).ConfigureAwait(false) |
| 90 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, CancellationToken.None) |
| 90 | try | 예외 처리 범위입니다: try |
| 91 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.Diagnostics.Trace.TraceError("Recipe parameter history refresh failed after commit: " + error) |
| 91 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 92 | return | 호출자에게 값 또는 제어를 반환합니다: return saved; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SaveParametersIfUnchanged"]
 N0["L82 if"]
 M -->|포함| N0
 N1["L84 if"]
 M -->|포함| N1
 N2["L90 try"]
 M -->|포함| N2
 N3["L91 catch"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveAlignOffsetsIfUnchanged` · L94–110

[Drilling.Common/Managers/CRecipeManager.cs:94–110](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L94-L110)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.Common.Managers.CRecipeManager.SaveAlignOffsetsIfUnchanged(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| expected | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| offsets | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:352–352](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Correction/CAlignInterpolation.cs#L352-L352) | recipes.SaveAlignOffsetsIfUnchanged | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 94 | WithRecipeOperation | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.Common.Managers.CRecipeManager.WithRecipeOperation<Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION>>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:237 |
| 97 | recipeFile.Find(expected.Id, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 97 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 97 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 98 | expected.Parameters.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 99 | current.Parameters.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 100 | before.Remove | resolved | bool System.Collections.Generic.Dictionary<string, string>.Remove(string) |
| 100 | now.Remove | resolved | bool System.Collections.Generic.Dictionary<string, string>.Remove(string) |
| 101 | before.Any | resolved | bool System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>.Any<System.Collections.Generic.KeyValuePair<string, string>>(System.Func<System.Collections.Generic.KeyValuePair<string, string>, bool>) |
| 101 | now.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |
| 102 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 103 | CAlignShotOffsetData.Apply | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION Drilling.Common.Recipe.CAlignShotOffsetData.Apply(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:730 |
| 104 | recipeFile.Save(updated, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 104 | recipeFile.Save | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Save(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:412 |
| 105 | recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 105 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 105 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 106 | UpdateCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.UpdateCachedRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:250 |
| 107 | LoadHistoryCore(true, CancellationToken.None).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>>.ConfigureAwait(bool) |
| 107 | LoadHistoryCore | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:19 |
| 108 | System.Diagnostics.Trace.TraceError | resolved | void System.Diagnostics.Trace.TraceError(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 94 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(async () => { // @보호 [레시피] Align동시변경 - Distortion 측정 중 Recipe가 바뀌면 오래된 기준으로 Align Offset을 저장하지 않는다. var current = await recipeFile.Find(expected.Id, token).ConfigureAwait(false) ?? throw new InvalidOp… |
| 97 | await | 비동기 완료를 기다립니다: await recipeFile.Find(expected.Id, token).ConfigureAwait(false) |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(expected.Id, token).ConfigureAwait(false) |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(expected.Id, token) |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("현재 레시피가 없습니다.") |
| 97 | local-declaration | 지역 변수를 선언합니다: var current = await recipeFile.Find(expected.Id, token).ConfigureAwait(false) ?? throw new InvalidOperationException("현재 레시피가 없습니다."); |
| 97 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("현재 레시피가 없습니다.") |
| 97 | variable-initializer | 변수의 초기값을 지정합니다: current = await recipeFile.Find(expected.Id, token).ConfigureAwait(false) ?? throw new InvalidOperationException("현재 레시피가 없습니다.") |
| 98 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: expected.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 98 | local-declaration | 지역 변수를 선언합니다: var before = expected.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase); |
| 98 | variable-initializer | 변수의 초기값을 지정합니다: before = expected.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 99 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: current.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 99 | local-declaration | 지역 변수를 선언합니다: var now = current.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase); |
| 99 | variable-initializer | 변수의 초기값을 지정합니다: now = current.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: before.Remove("CURRENT_PROCESS_COUNT") |
| 100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: now.Remove("CURRENT_PROCESS_COUNT") |
| 101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: before.Any(p => !now.TryGetValue(p.Key, out var value) &#124;&#124; value != p.Value) |
| 101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: now.TryGetValue(p.Key, out var value) |
| 101 | if | 조건에 따라 분기합니다: if (before.Count != now.Count &#124;&#124; before.Any(p => !now.TryGetValue(p.Key, out var value) &#124;&#124; value != p.Value)) |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Distortion 측정 중 레시피가 변경되었습니다. 기존 보정값을 유지합니다.") |
| 102 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Distortion 측정 중 레시피가 변경되었습니다. 기존 보정값을 유지합니다."); |
| 103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignShotOffsetData.Apply(current, offsets) |
| 103 | local-declaration | 지역 변수를 선언합니다: var updated = CAlignShotOffsetData.Apply(current, offsets); |
| 103 | variable-initializer | 변수의 초기값을 지정합니다: updated = CAlignShotOffsetData.Apply(current, offsets) |
| 104 | await | 비동기 완료를 기다립니다: await recipeFile.Save(updated, token).ConfigureAwait(false) |
| 104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Save(updated, token).ConfigureAwait(false) |
| 104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Save(updated, token) |
| 105 | await | 비동기 완료를 기다립니다: await recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait(false) |
| 105 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait(false) |
| 105 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(expected.Id, CancellationToken.None) |
| 105 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException("Align Offset 저장 후 레시피를 다시 읽지 못했습니다.") |
| 105 | local-declaration | 지역 변수를 선언합니다: var saved = await recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait(false) ?? throw new IOException("Align Offset 저장 후 레시피를 다시 읽지 못했습니다."); |
| 105 | throw | 예외를 발생/전달합니다: throw new IOException("Align Offset 저장 후 레시피를 다시 읽지 못했습니다.") |
| 105 | variable-initializer | 변수의 초기값을 지정합니다: saved = await recipeFile.Find(expected.Id, CancellationToken.None).ConfigureAwait(false) ?? throw new IOException("Align Offset 저장 후 레시피를 다시 읽지 못했습니다.") |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateCachedRecipe(saved) |
| 107 | await | 비동기 완료를 기다립니다: await LoadHistoryCore(true, CancellationToken.None).ConfigureAwait(false) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, CancellationToken.None).ConfigureAwait(false) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, CancellationToken.None) |
| 107 | try | 예외 처리 범위입니다: try |
| 108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.Diagnostics.Trace.TraceError("Align Offset history refresh failed after commit: " + error) |
| 108 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 109 | return | 호출자에게 값 또는 제어를 반환합니다: return saved; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SaveAlignOffsetsIfUnchanged"]
 N0["L101 if"]
 M -->|포함| N0
 N1["L107 try"]
 M -->|포함| N1
 N2["L108 catch"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SavePowerMeasureAngles` · L113–127

[Drilling.Common/Managers/CRecipeManager.cs:113–127](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L113-L127)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.SavePowerMeasureAngles(string, System.Collections.Generic.IReadOnlyDictionary<int, double>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| angles | System.Collections.Generic.IReadOnlyDictionary<int, double> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Interface/CPowerMeasureRun.cs:116–116](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Interface/CPowerMeasureRun.cs#L116-L116) | manager.Recipe().SavePowerMeasureAngles | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 113 | WithRecipeOperation | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:224 |
| 115 | angles.Any | resolved | bool System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<int, double>>.Any<System.Collections.Generic.KeyValuePair<int, double>>(System.Func<System.Collections.Generic.KeyValuePair<int, double>, bool>) |
| 115 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 116 | new ArgumentException | resolved | System.ArgumentException.ArgumentException(string?) |
| 117 | recipeFile.Find(recipeId, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 117 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 117 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 118 | recipe.Parameters.ToList | resolved | System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToList<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 122 | values.FindIndex | resolved | int System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.FindIndex(System.Predicate<Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 122 | p.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 123 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 124 | angle.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 126 | SaveRecipeCore(recipe with { Parameters = values }, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 126 | SaveRecipeCore | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.SaveRecipeCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:146 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(async () => { if (angles.Count == 0 &#124;&#124; angles.Any(pair => pair.Key is < 1 or > 8 &#124;&#124; !double.IsFinite(pair.Value) &#124;&#124; pair.Value is < 0 or > 360)) throw new ArgumentException("유효한 Head별 ATT 각도가 필요합니다.")… |
| 115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: angles.Any(pair => pair.Key is < 1 or > 8 &#124;&#124; !double.IsFinite(pair.Value) &#124;&#124; pair.Value is < 0 or > 360) |
| 115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(pair.Value) |
| 115 | if | 조건에 따라 분기합니다: if (angles.Count == 0 &#124;&#124; angles.Any(pair => pair.Key is < 1 or > 8 &#124;&#124; !double.IsFinite(pair.Value) &#124;&#124; pair.Value is < 0 or > 360)) |
| 116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentException("유효한 Head별 ATT 각도가 필요합니다.") |
| 116 | throw | 예외를 발생/전달합니다: throw new ArgumentException("유효한 Head별 ATT 각도가 필요합니다."); |
| 117 | await | 비동기 완료를 기다립니다: await recipeFile.Find(recipeId, token).ConfigureAwait(false) |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipeId, token).ConfigureAwait(false) |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipeId, token) |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("측정 대상 Recipe가 없습니다.") |
| 117 | local-declaration | 지역 변수를 선언합니다: var recipe = await recipeFile.Find(recipeId, token).ConfigureAwait(false) ?? throw new InvalidOperationException("측정 대상 Recipe가 없습니다."); |
| 117 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("측정 대상 Recipe가 없습니다.") |
| 117 | variable-initializer | 변수의 초기값을 지정합니다: recipe = await recipeFile.Find(recipeId, token).ConfigureAwait(false) ?? throw new InvalidOperationException("측정 대상 Recipe가 없습니다.") |
| 118 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.ToList() |
| 118 | local-declaration | 지역 변수를 선언합니다: var values = recipe.Parameters.ToList(); |
| 118 | variable-initializer | 변수의 초기값을 지정합니다: values = recipe.Parameters.ToList() |
| 119 | foreach | 컬렉션 요소를 순회합니다: foreach (var (head, angle) in angles) { var key = $"H{head:00}_ATTENUATOR_POSITION"; var index = values.FindIndex(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase)); if (index < 0) throw new InvalidOperationException($"Re |
| 121 | local-declaration | 지역 변수를 선언합니다: var key = $"H{head:00}_ATTENUATOR_POSITION"; |
| 121 | variable-initializer | 변수의 초기값을 지정합니다: key = $"H{head:00}_ATTENUATOR_POSITION" |
| 122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.FindIndex(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase)) |
| 122 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: p.Key.Equals(key, StringComparison.OrdinalIgnoreCase) |
| 122 | local-declaration | 지역 변수를 선언합니다: var index = values.FindIndex(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase)); |
| 122 | variable-initializer | 변수의 초기값을 지정합니다: index = values.FindIndex(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase)) |
| 123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Recipe ATT 항목이 없습니다: {key}") |
| 123 | if | 조건에 따라 분기합니다: if (index < 0) |
| 123 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Recipe ATT 항목이 없습니다: {key}"); |
| 124 | assignment | 값을 대상에 대입합니다: values[index] = values[index] with { Value = angle.ToString("0.####", System.Globalization.CultureInfo.InvariantCulture) } |
| 124 | assignment | 값을 대상에 대입합니다: Value = angle.ToString("0.####", System.Globalization.CultureInfo.InvariantCulture) |
| 124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: angle.ToString("0.####", System.Globalization.CultureInfo.InvariantCulture) |
| 126 | assignment | 값을 대상에 대입합니다: Parameters = values |
| 126 | await | 비동기 완료를 기다립니다: await SaveRecipeCore(recipe with { Parameters = values }, token).ConfigureAwait(false) |
| 126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveRecipeCore(recipe with { Parameters = values }, token).ConfigureAwait(false) |
| 126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveRecipeCore(recipe with { Parameters = values }, token) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SavePowerMeasureAngles"]
 N0["L115 if"]
 M -->|포함| N0
 N1["L119 foreach"]
 M -->|포함| N1
 N2["L123 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ListCompanionFolders` · L128–128

[Drilling.Common/Managers/CRecipeManager.cs:128–128](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L128-L128)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> Drilling.Common.Managers.CRecipeManager.ListCompanionFolders(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sourceRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1139–1139](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1139-L1139) | _recipeManager.ListCompanionFolders | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1222–1222](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1222-L1222) | _recipeManager.ListCompanionFolders | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1274–1274](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1274-L1274) | _recipeManager.ListCompanionFolders | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 128 | store.ListCompanionFolders | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> Drilling.Common.Managers.IRecipeCopyStore.ListCompanionFolders(string, string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:343 |
| 128 | Task.FromResult<IReadOnlyList<ST_RECIPE_COMPANION_FOLDER>> | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> System.Threading.Tasks.Task.FromResult<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>>(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: store.ListCompanionFolders(sourceRecipeId, newRecipeId, token) |
| 128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromResult<IReadOnlyList<ST_RECIPE_COMPANION_FOLDER>>([]) |
| 128 | conditional-expression | 조건에 따라 결과식을 선택합니다: recipeFile is IRecipeCopyStore store ? store.ListCompanionFolders(sourceRecipeId, newRecipeId, token) : Task.FromResult<IReadOnlyList<ST_RECIPE_COMPANION_FOLDER>>([]) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateRecipeCopy` · L129–145

[Drilling.Common/Managers/CRecipeManager.cs:129–145](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L129-L145)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.CreateRecipeCopy(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| sourceRecipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1224–1224](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1224-L1224) | _recipeManager.CreateRecipeCopy | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 129 | WithRecipeOperation | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:224 |
| 132 | store.CreateCopy(recipe, sourceRecipeId, selectedFolders, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 132 | store.CreateCopy | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.CreateCopy(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:344 |
| 136 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 137 | recipeFile.Find(recipe.Id, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 137 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 138 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 139 | recipeFile.Save(recipe, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 139 | recipeFile.Save | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Save(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:412 |
| 142 | recipeFile.Find(recipe.Id, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 142 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 143 | UpdateCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.UpdateCachedRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:250 |
| 144 | LoadHistoryCore(true, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>>.ConfigureAwait(bool) |
| 144 | LoadHistoryCore | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:19 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 129 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(async () => { if (recipeFile is IRecipeCopyStore store) await store.CreateCopy(recipe, sourceRecipeId, selectedFolders, token).ConfigureAwait(false); else { if (selectedFolders.Count != 0) throw new I… |
| 131 | if | 조건에 따라 분기합니다: if (recipeFile is IRecipeCopyStore store) |
| 132 | await | 비동기 완료를 기다립니다: await store.CreateCopy(recipe, sourceRecipeId, selectedFolders, token).ConfigureAwait(false) |
| 132 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: store.CreateCopy(recipe, sourceRecipeId, selectedFolders, token).ConfigureAwait(false) |
| 132 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: store.CreateCopy(recipe, sourceRecipeId, selectedFolders, token) |
| 133 | else | 앞 조건이 거짓인 경로입니다: else |
| 135 | if | 조건에 따라 분기합니다: if (selectedFolders.Count != 0) |
| 136 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("이 레시피 저장소는 부가 폴더 복사를 지원하지 않습니다.") |
| 136 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("이 레시피 저장소는 부가 폴더 복사를 지원하지 않습니다."); |
| 137 | await | 비동기 완료를 기다립니다: await recipeFile.Find(recipe.Id, token).ConfigureAwait(false) |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipe.Id, token).ConfigureAwait(false) |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipe.Id, token) |
| 137 | if | 조건에 따라 분기합니다: if (await recipeFile.Find(recipe.Id, token).ConfigureAwait(false)is not null) |
| 138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException($"Recipe already exists: {recipe.Id}") |
| 138 | throw | 예외를 발생/전달합니다: throw new IOException($"Recipe already exists: {recipe.Id}"); |
| 139 | await | 비동기 완료를 기다립니다: await recipeFile.Save(recipe, token).ConfigureAwait(false) |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Save(recipe, token).ConfigureAwait(false) |
| 139 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Save(recipe, token) |
| 142 | await | 비동기 완료를 기다립니다: await recipeFile.Find(recipe.Id, token).ConfigureAwait(false) |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipe.Id, token).ConfigureAwait(false) |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipe.Id, token) |
| 142 | local-declaration | 지역 변수를 선언합니다: var saved = await recipeFile.Find(recipe.Id, token).ConfigureAwait(false) ?? recipe; |
| 142 | variable-initializer | 변수의 초기값을 지정합니다: saved = await recipeFile.Find(recipe.Id, token).ConfigureAwait(false) ?? recipe |
| 143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateCachedRecipe(saved) |
| 144 | await | 비동기 완료를 기다립니다: await LoadHistoryCore(true, token).ConfigureAwait(false) |
| 144 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, token).ConfigureAwait(false) |
| 144 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, token) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateRecipeCopy"]
 N0["L131 if"]
 M -->|포함| N0
 N1["L133 else"]
 N0 -->|포함| N1
 N2["L135 if"]
 N1 -->|포함| N2
 N3["L137 if"]
 N1 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveRecipeCore` · L146–159

[Drilling.Common/Managers/CRecipeManager.cs:146–159](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L146-L159)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.SaveRecipeCore(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:73–73](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L73-L73) | SaveRecipeCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:126–126](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L126-L126) | SaveRecipeCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 150 | .FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION, bool>) |
| 150 | item.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 151 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 153 | global::Drilling.Common.Recipe.CAlignShotOffsetData.RetainUneditedOffsets | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION Drilling.Common.Recipe.CAlignShotOffsetData.RetainUneditedOffsets(Drilling.Common.Managers.ST_RECIPE_DEFINITION, Drilling.Common.Managers.ST_RECIPE_DEFINITION?) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:777 |
| 154 | recipeFile.Save | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Save(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:412 |
| 156 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 157 | UpdateCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.UpdateCachedRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:250 |
| 158 | LoadHistoryCore | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:19 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 148 | local-declaration | 지역 변수를 선언합니다: ST_RECIPE_DEFINITION? current; |
| 149 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 150 | assignment | 값을 대상에 대입합니다: current = _recipeCache?.FirstOrDefault(item => item.Id.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase)) |
| 150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .FirstOrDefault(item => item.Id.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase)) |
| 150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Id.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase) |
| 151 | assignment | 값을 대상에 대입합니다: current ??= await recipeFile.Find(recipe.Id, cancellationToken) |
| 151 | await | 비동기 완료를 기다립니다: await recipeFile.Find(recipe.Id, cancellationToken) |
| 151 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipe.Id, cancellationToken) |
| 153 | assignment | 값을 대상에 대입합니다: recipe = global::Drilling.Common.Recipe.CAlignShotOffsetData.RetainUneditedOffsets(recipe, current) |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: global::Drilling.Common.Recipe.CAlignShotOffsetData.RetainUneditedOffsets(recipe, current) |
| 154 | await | 비동기 완료를 기다립니다: await recipeFile.Save(recipe, cancellationToken) |
| 154 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Save(recipe, cancellationToken) |
| 156 | await | 비동기 완료를 기다립니다: await recipeFile.Find(recipe.Id, cancellationToken) |
| 156 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipe.Id, cancellationToken) |
| 156 | local-declaration | 지역 변수를 선언합니다: var savedRecipe = await recipeFile.Find(recipe.Id, cancellationToken) ?? recipe; |
| 156 | variable-initializer | 변수의 초기값을 지정합니다: savedRecipe = await recipeFile.Find(recipe.Id, cancellationToken) ?? recipe |
| 157 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateCachedRecipe(savedRecipe) |
| 158 | await | 비동기 완료를 기다립니다: await LoadHistoryCore(true, cancellationToken) |
| 158 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, cancellationToken) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SaveRecipeCore"]
 N0["L149 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshRecipe` · L161–161

[Drilling.Common/Managers/CRecipeManager.cs:161–161](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L161-L161)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.RefreshRecipe(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:282–282](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Correction/CAlignInterpolation.cs#L282-L282) | recipes.RefreshRecipe | False |
| [Drilling.UI/CRootView.cs:3170–3170](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L3170-L3170) | _recipeManager.RefreshRecipe | False |
| [Drilling.UI/CRootView.cs:3323–3323](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L3323-L3323) | _recipeManager.RefreshRecipe | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2726–2726](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2726-L2726) | _recipeManager.RefreshRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 161 | WithRecipeOperation(() => RefreshRecipeCore(recipeId, cancellationToken), cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 161 | WithRecipeOperation | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.WithRecipeOperation<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>(System.Func<System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:237 |
| 161 | RefreshRecipeCore | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.RefreshRecipeCore(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:162 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 161 | await | 비동기 완료를 기다립니다: await WithRecipeOperation(() => RefreshRecipeCore(recipeId, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => RefreshRecipeCore(recipeId, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => RefreshRecipeCore(recipeId, cancellationToken), cancellationToken) |
| 161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RefreshRecipeCore(recipeId, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RefreshRecipeCore` · L162–170

[Drilling.Common/Managers/CRecipeManager.cs:162–170](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L162-L170)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.RefreshRecipeCore(string, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:161–161](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L161-L161) | RefreshRecipeCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 164 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 166 | UpdateCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.UpdateCachedRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:250 |
| 168 | DeleteCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.DeleteCachedRecipe(string) · Drilling.Common/Managers/CRecipeManager.cs:307 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 164 | await | 비동기 완료를 기다립니다: await recipeFile.Find(recipeId, cancellationToken) |
| 164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(recipeId, cancellationToken) |
| 164 | local-declaration | 지역 변수를 선언합니다: var recipe = await recipeFile.Find(recipeId, cancellationToken); |
| 164 | variable-initializer | 변수의 초기값을 지정합니다: recipe = await recipeFile.Find(recipeId, cancellationToken) |
| 165 | if | 조건에 따라 분기합니다: if (recipe is not null) |
| 166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateCachedRecipe(recipe) |
| 167 | else | 앞 조건이 거짓인 경로입니다: else |
| 168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteCachedRecipe(recipeId) |
| 169 | return | 호출자에게 값 또는 제어를 반환합니다: return recipe; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RefreshRecipeCore"]
 N0["L165 if"]
 M -->|포함| N0
 N1["L167 else"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RenameRecipe` · L172–172

[Drilling.Common/Managers/CRecipeManager.cs:172–172](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L172-L172)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RenameRecipe(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 172 | WithRecipeOperation(() => RenameRecipeCore(oldRecipeId, newRecipeId, cancellationToken), cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 172 | WithRecipeOperation | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:224 |
| 172 | RenameRecipeCore | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RenameRecipeCore(string, string, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyCollection<string>?) · Drilling.Common/Managers/CRecipeManager.cs:174 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 172 | await | 비동기 완료를 기다립니다: await WithRecipeOperation(() => RenameRecipeCore(oldRecipeId, newRecipeId, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => RenameRecipeCore(oldRecipeId, newRecipeId, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => RenameRecipeCore(oldRecipeId, newRecipeId, cancellationToken), cancellationToken) |
| 172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RenameRecipeCore(oldRecipeId, newRecipeId, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RenameRecipe` · L173–173

[Drilling.Common/Managers/CRecipeManager.cs:173–173](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L173-L173)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RenameRecipe(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1156–1156](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1156-L1156) | _recipeManager.RenameRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 173 | WithRecipeOperation | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:224 |
| 173 | RenameRecipeCore | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RenameRecipeCore(string, string, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyCollection<string>?) · Drilling.Common/Managers/CRecipeManager.cs:174 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => RenameRecipeCore(oldRecipeId, newRecipeId, token, selectedFolders), token) |
| 173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RenameRecipeCore(oldRecipeId, newRecipeId, token, selectedFolders) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RenameRecipeCore` · L174–190

[Drilling.Common/Managers/CRecipeManager.cs:174–190](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L174-L190)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.RenameRecipeCore(string, string, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyCollection<string>?) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| folders | System.Collections.Generic.IReadOnlyCollection<string>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:172–172](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L172-L172) | RenameRecipeCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:173–173](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L173-L173) | RenameRecipeCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 177 | store.RenameWithCompanions | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.RenameWithCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:345 |
| 181 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 182 | recipeFile.Rename | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Rename(string, string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:413 |
| 185 | RenameCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.RenameCachedRecipe(string, string) · Drilling.Common/Managers/CRecipeManager.cs:282 |
| 186 | recipeFile.Find | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:411 |
| 188 | UpdateCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.UpdateCachedRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:250 |
| 189 | LoadHistoryCore | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:19 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 176 | if | 조건에 따라 분기합니다: if (folders is not null && recipeFile is IRecipeCopyStore store) |
| 177 | await | 비동기 완료를 기다립니다: await store.RenameWithCompanions(oldRecipeId, newRecipeId, folders, cancellationToken) |
| 177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: store.RenameWithCompanions(oldRecipeId, newRecipeId, folders, cancellationToken) |
| 178 | else | 앞 조건이 거짓인 경로입니다: else |
| 180 | if | 조건에 따라 분기합니다: if (folders?.Count > 0) |
| 181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("이 레시피 저장소는 부가 폴더 이름 변경을 지원하지 않습니다.") |
| 181 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("이 레시피 저장소는 부가 폴더 이름 변경을 지원하지 않습니다."); |
| 182 | await | 비동기 완료를 기다립니다: await recipeFile.Rename(oldRecipeId, newRecipeId, cancellationToken) |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Rename(oldRecipeId, newRecipeId, cancellationToken) |
| 185 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RenameCachedRecipe(oldRecipeId, newRecipeId) |
| 186 | await | 비동기 완료를 기다립니다: await recipeFile.Find(newRecipeId, cancellationToken) |
| 186 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Find(newRecipeId, cancellationToken) |
| 186 | local-declaration | 지역 변수를 선언합니다: var renamedRecipe = await recipeFile.Find(newRecipeId, cancellationToken); |
| 186 | variable-initializer | 변수의 초기값을 지정합니다: renamedRecipe = await recipeFile.Find(newRecipeId, cancellationToken) |
| 187 | if | 조건에 따라 분기합니다: if (renamedRecipe is not null) |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: UpdateCachedRecipe(renamedRecipe) |
| 189 | await | 비동기 완료를 기다립니다: await LoadHistoryCore(true, cancellationToken) |
| 189 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, cancellationToken) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RenameRecipeCore"]
 N0["L176 if"]
 M -->|포함| N0
 N1["L178 else"]
 N0 -->|포함| N1
 N2["L180 if"]
 N1 -->|포함| N2
 N3["L187 if"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteRecipe` · L192–192

[Drilling.Common/Managers/CRecipeManager.cs:192–192](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L192-L192)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.DeleteRecipe(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 192 | WithRecipeOperation(() => DeleteRecipeCore(recipeId, cancellationToken), cancellationToken).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 192 | WithRecipeOperation | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:224 |
| 192 | DeleteRecipeCore | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.DeleteRecipeCore(string, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyCollection<string>?) · Drilling.Common/Managers/CRecipeManager.cs:194 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 192 | await | 비동기 완료를 기다립니다: await WithRecipeOperation(() => DeleteRecipeCore(recipeId, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => DeleteRecipeCore(recipeId, cancellationToken), cancellationToken).ConfigureAwait(false) |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => DeleteRecipeCore(recipeId, cancellationToken), cancellationToken) |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteRecipeCore(recipeId, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteRecipe` · L193–193

[Drilling.Common/Managers/CRecipeManager.cs:193–193](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L193-L193)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.DeleteRecipe(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1276–1276](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1276-L1276) | _recipeManager.DeleteRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 193 | WithRecipeOperation | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:224 |
| 193 | DeleteRecipeCore | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.DeleteRecipeCore(string, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyCollection<string>?) · Drilling.Common/Managers/CRecipeManager.cs:194 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(() => DeleteRecipeCore(recipeId, token, selectedFolders), token) |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteRecipeCore(recipeId, token, selectedFolders) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteRecipeCore` · L194–207

[Drilling.Common/Managers/CRecipeManager.cs:194–207](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L194-L207)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.DeleteRecipeCore(string, System.Threading.CancellationToken, System.Collections.Generic.IReadOnlyCollection<string>?) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |
| folders | System.Collections.Generic.IReadOnlyCollection<string>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:192–192](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L192-L192) | DeleteRecipeCore | False |
| [Drilling.Common/Managers/CRecipeManager.cs:193–193](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L193-L193) | DeleteRecipeCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 197 | store.DeleteWithCompanions | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.DeleteWithCompanions(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:346 |
| 201 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 202 | recipeFile.Delete | resolved | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Delete(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:414 |
| 205 | DeleteCachedRecipe | resolved | void Drilling.Common.Managers.CRecipeManager.DeleteCachedRecipe(string) · Drilling.Common/Managers/CRecipeManager.cs:307 |
| 206 | LoadHistoryCore | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeManager.LoadHistoryCore(bool, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:19 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 196 | if | 조건에 따라 분기합니다: if (folders is not null && recipeFile is IRecipeCopyStore store) |
| 197 | await | 비동기 완료를 기다립니다: await store.DeleteWithCompanions(recipeId, folders, cancellationToken) |
| 197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: store.DeleteWithCompanions(recipeId, folders, cancellationToken) |
| 198 | else | 앞 조건이 거짓인 경로입니다: else |
| 200 | if | 조건에 따라 분기합니다: if (folders?.Count > 0) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("이 레시피 저장소는 부가 폴더 삭제를 지원하지 않습니다.") |
| 201 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("이 레시피 저장소는 부가 폴더 삭제를 지원하지 않습니다."); |
| 202 | await | 비동기 완료를 기다립니다: await recipeFile.Delete(recipeId, cancellationToken) |
| 202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.Delete(recipeId, cancellationToken) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DeleteCachedRecipe(recipeId) |
| 206 | await | 비동기 완료를 기다립니다: await LoadHistoryCore(true, cancellationToken) |
| 206 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: LoadHistoryCore(true, cancellationToken) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DeleteRecipeCore"]
 N0["L196 if"]
 M -->|포함| N0
 N1["L198 else"]
 N0 -->|포함| N1
 N2["L200 if"]
 N1 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IncrementProtectWindowCount` · L209–209

[Drilling.Common/Managers/CRecipeManager.cs:209–209](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L209-L209)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.IncrementProtectWindowCount(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:3784–3784](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L3784-L3784) | _recipeManager.IncrementProtectWindowCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 209 | ChangeProtectWindowCount | resolved | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.ChangeProtectWindowCount(string, System.Func<System.Threading.Tasks.Task<int>>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:212 |
| 209 | recipeFile.IncrementProtectWindowCount | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.IncrementProtectWindowCount(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:417 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ChangeProtectWindowCount(recipeId, () => recipeFile.IncrementProtectWindowCount(recipeId, cancellationToken), cancellationToken) |
| 209 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.IncrementProtectWindowCount(recipeId, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResetProtectWindowCount` · L210–210

[Drilling.Common/Managers/CRecipeManager.cs:210–210](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L210-L210)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.ResetProtectWindowCount(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 210 | ChangeProtectWindowCount | resolved | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.ChangeProtectWindowCount(string, System.Func<System.Threading.Tasks.Task<int>>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:212 |
| 210 | recipeFile.ResetProtectWindowCount | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.ResetProtectWindowCount(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:418 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ChangeProtectWindowCount(recipeId, () => recipeFile.ResetProtectWindowCount(recipeId, cancellationToken), cancellationToken) |
| 210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.ResetProtectWindowCount(recipeId, cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetProtectWindowCount` · L211–211

[Drilling.Common/Managers/CRecipeManager.cs:211–211](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L211-L211)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.SetProtectWindowCount(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| count | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4718–4718](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L4718-L4718) | recipes.SetProtectWindowCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 211 | Task.FromException<int> | resolved | System.Threading.Tasks.Task<int> System.Threading.Tasks.Task.FromException<int>(System.Exception) |
| 211 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 211 | nameof | unresolved | None |
| 211 | ChangeProtectWindowCount | resolved | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.ChangeProtectWindowCount(string, System.Func<System.Threading.Tasks.Task<int>>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:212 |
| 211 | recipeFile.SetProtectWindowCount | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.SetProtectWindowCount(string, int, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:419 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.FromException<int>(new ArgumentOutOfRangeException(nameof(count))) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(count)) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(count) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ChangeProtectWindowCount(recipeId, () => recipeFile.SetProtectWindowCount(recipeId, count, cancellationToken), cancellationToken) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipeFile.SetProtectWindowCount(recipeId, count, cancellationToken) |
| 211 | conditional-expression | 조건에 따라 결과식을 선택합니다: count < 0 ? Task.FromException<int>(new ArgumentOutOfRangeException(nameof(count))) : ChangeProtectWindowCount(recipeId, () => recipeFile.SetProtectWindowCount(recipeId, count, cancellationToken), cancellationToken) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ChangeProtectWindowCount` · L212–223

[Drilling.Common/Managers/CRecipeManager.cs:212–223](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L212-L223)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.ChangeProtectWindowCount(string, System.Func<System.Threading.Tasks.Task<int>>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| commit | System.Func<System.Threading.Tasks.Task<int>> | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:209–209](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L209-L209) | ChangeProtectWindowCount | False |
| [Drilling.Common/Managers/CRecipeManager.cs:210–210](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L210-L210) | ChangeProtectWindowCount | False |
| [Drilling.Common/Managers/CRecipeManager.cs:211–211](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L211-L211) | ChangeProtectWindowCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 212 | WithRecipeOperation | resolved | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeManager.WithRecipeOperation<int>(System.Func<System.Threading.Tasks.Task<int>>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:237 |
| 215 | commit().ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<int> System.Threading.Tasks.Task<int>.ConfigureAwait(bool) |
| 215 | commit | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<int> System.Func<System.Threading.Tasks.Task<int>>.Invoke() |
| 219 | _recipeCache.Select(recipe => recipe.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) ? recipe with { Parameters = recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) ? parameter with { Value = count.ToString(System.Globalizati… | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.ToArray<Drilling.Common.Managers.ST_RECIPE_DEFINITION>() |
| 219 | _recipeCache.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Select<Drilling.Common.Managers.ST_RECIPE_DEFINITION, Drilling.Common.Managers.ST_RECIPE_DEFINITION>(System.Func<Drilling.Common.Managers.ST_RECIPE_DEFINITION, Drilling.Common.Managers.ST_RECIPE_DEFINITION>) |
| 219 | recipe.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 219 | recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) ? parameter with { Value = count.ToString(System.Globalization.CultureInfo.InvariantCulture) } : parameter).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToArray<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 219 | recipe.Parameters.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Select<Drilling.Common.Managers.ST_RECIPE_PARAMETER, Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 219 | parameter.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 219 | count.ToString | resolved | string int.ToString(System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: WithRecipeOperation(async () => { // The file store commits before the new count is visible to any UI snapshot. var count = await commit().ConfigureAwait(false); lock (_cacheLock) { if (_recipeCache is not null) _recipeC… |
| 215 | await | 비동기 완료를 기다립니다: await commit().ConfigureAwait(false) |
| 215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: commit().ConfigureAwait(false) |
| 215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: commit() |
| 215 | local-declaration | 지역 변수를 선언합니다: var count = await commit().ConfigureAwait(false); |
| 215 | variable-initializer | 변수의 초기값을 지정합니다: count = await commit().ConfigureAwait(false) |
| 216 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 218 | if | 조건에 따라 분기합니다: if (_recipeCache is not null) |
| 219 | assignment | 값을 대상에 대입합니다: _recipeCache = _recipeCache.Select(recipe => recipe.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) ? recipe with { Parameters = recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CPr |
| 219 | assignment | 값을 대상에 대입합니다: Parameters = recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) ? parameter with { Value = count.ToString(System. |
| 219 | assignment | 값을 대상에 대입합니다: Value = count.ToString(System.Globalization.CultureInfo.InvariantCulture) |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeCache.Select(recipe => recipe.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) ? recipe with { Parameters = recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CProtect… |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeCache.Select(recipe => recipe.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) ? recipe with { Parameters = recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CProtect… |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) ? parameter with { Value = count.ToString(System.Glo… |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) ? parameter with { Value = count.ToString(System.Glo… |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameter.Key.Equals(global::Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: count.ToString(System.Globalization.CultureInfo.InvariantCulture) |
| 219 | conditional-expression | 조건에 따라 결과식을 선택합니다: recipe.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) ? recipe with { Parameters = recipe.Parameters.Select(parameter => parameter.Key.Equals(global::Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey, String |
| 219 | conditional-expression | 조건에 따라 결과식을 선택합니다: parameter.Key.Equals(global::Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey, StringComparison.OrdinalIgnoreCase) ? parameter with { Value = count.ToString(System.Globalization.CultureInfo.InvariantCulture) } : par |
| 222 | return | 호출자에게 값 또는 제어를 반환합니다: return count; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ChangeProtectWindowCount"]
 N0["L216 lock"]
 M -->|포함| N0
 N1["L218 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WithRecipeOperation` · L224–235

[Drilling.Common/Managers/CRecipeManager.cs:224–235](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L224-L235)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeManager.WithRecipeOperation(System.Func<System.Threading.Tasks.Task>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| operation | System.Func<System.Threading.Tasks.Task> | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:73–73](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L73-L73) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:113–127](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L113-L127) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:129–145](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L129-L145) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:172–172](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L172-L172) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:173–173](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L173-L173) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:192–192](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L192-L192) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:193–193](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L193-L193) | WithRecipeOperation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 226 | _recipeOperationGate.WaitAsync(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 226 | _recipeOperationGate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync(System.Threading.CancellationToken) |
| 229 | operation().ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 229 | operation | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task System.Func<System.Threading.Tasks.Task>.Invoke() |
| 233 | _recipeOperationGate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 226 | await | 비동기 완료를 기다립니다: await _recipeOperationGate.WaitAsync(token).ConfigureAwait(false) |
| 226 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.WaitAsync(token).ConfigureAwait(false) |
| 226 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.WaitAsync(token) |
| 227 | try | 예외 처리 범위입니다: try |
| 229 | await | 비동기 완료를 기다립니다: await operation().ConfigureAwait(false) |
| 229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: operation().ConfigureAwait(false) |
| 229 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: operation() |
| 231 | finally | 종료 정리 구간입니다: finally |
| 233 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WithRecipeOperation"]
 N0["L227 try"]
 M -->|포함| N0
 N1["L231 finally"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WithRecipeOperation` · L237–248

[Drilling.Common/Managers/CRecipeManager.cs:237–248](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L237-L248)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<T> Drilling.Common.Managers.CRecipeManager.WithRecipeOperation<T>(System.Func<System.Threading.Tasks.Task<T>>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task<T> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| operation | System.Func<System.Threading.Tasks.Task<T>> | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:74–93](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L74-L93) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:94–110](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L94-L110) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:161–161](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L161-L161) | WithRecipeOperation | False |
| [Drilling.Common/Managers/CRecipeManager.cs:212–223](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L212-L223) | WithRecipeOperation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 239 | _recipeOperationGate.WaitAsync(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 239 | _recipeOperationGate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync(System.Threading.CancellationToken) |
| 242 | operation().ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<T> System.Threading.Tasks.Task<T>.ConfigureAwait(bool) |
| 242 | operation | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<T> System.Func<System.Threading.Tasks.Task<T>>.Invoke() |
| 246 | _recipeOperationGate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 239 | await | 비동기 완료를 기다립니다: await _recipeOperationGate.WaitAsync(token).ConfigureAwait(false) |
| 239 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.WaitAsync(token).ConfigureAwait(false) |
| 239 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.WaitAsync(token) |
| 240 | try | 예외 처리 범위입니다: try |
| 242 | await | 비동기 완료를 기다립니다: await operation().ConfigureAwait(false) |
| 242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: operation().ConfigureAwait(false) |
| 242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: operation() |
| 242 | return | 호출자에게 값 또는 제어를 반환합니다: return await operation().ConfigureAwait(false); |
| 244 | finally | 종료 정리 구간입니다: finally |
| 246 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipeOperationGate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["WithRecipeOperation"]
 N0["L240 try"]
 M -->|포함| N0
 N1["L244 finally"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `UpdateCachedRecipe` · L250–280

[Drilling.Common/Managers/CRecipeManager.cs:250–280](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L250-L280)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.CRecipeManager.UpdateCachedRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:89–89](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L89-L89) | UpdateCachedRecipe | False |
| [Drilling.Common/Managers/CRecipeManager.cs:106–106](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L106-L106) | UpdateCachedRecipe | False |
| [Drilling.Common/Managers/CRecipeManager.cs:143–143](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L143-L143) | UpdateCachedRecipe | False |
| [Drilling.Common/Managers/CRecipeManager.cs:157–157](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L157-L157) | UpdateCachedRecipe | False |
| [Drilling.Common/Managers/CRecipeManager.cs:166–166](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L166-L166) | UpdateCachedRecipe | False |
| [Drilling.Common/Managers/CRecipeManager.cs:188–188](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L188-L188) | UpdateCachedRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 259 | new List<ST_RECIPE_DEFINITION> | resolved | System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.List(int) |
| 263 | cachedRecipe.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 265 | recipes.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Add(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 265 | CloneRecipe | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION Drilling.Common.Managers.CRecipeManager.CloneRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:329 |
| 270 | recipes.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Add(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 275 | recipes.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Add(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 275 | CloneRecipe | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION Drilling.Common.Managers.CRecipeManager.CloneRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:329 |
| 278 | recipes.ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION[] System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.ToArray() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 252 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 254 | if | 조건에 따라 분기합니다: if (_recipeCache is null) |
| 256 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_RECIPE_DEFINITION>(_recipeCache.Count + 1) |
| 259 | local-declaration | 지역 변수를 선언합니다: var recipes = new List<ST_RECIPE_DEFINITION>(_recipeCache.Count + 1); |
| 259 | variable-initializer | 변수의 초기값을 지정합니다: recipes = new List<ST_RECIPE_DEFINITION>(_recipeCache.Count + 1) |
| 260 | local-declaration | 지역 변수를 선언합니다: var updated = false; |
| 260 | variable-initializer | 변수의 초기값을 지정합니다: updated = false |
| 261 | foreach | 컬렉션 요소를 순회합니다: foreach (var cachedRecipe in _recipeCache) |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cachedRecipe.Id.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase) |
| 263 | if | 조건에 따라 분기합니다: if (cachedRecipe.Id.Equals(recipe.Id, StringComparison.OrdinalIgnoreCase)) |
| 265 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.Add(CloneRecipe(recipe)) |
| 265 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloneRecipe(recipe) |
| 266 | assignment | 값을 대상에 대입합니다: updated = true |
| 267 | continue | 다음 반복으로 진행합니다: continue; |
| 270 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.Add(cachedRecipe) |
| 273 | if | 조건에 따라 분기합니다: if (!updated) |
| 275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.Add(CloneRecipe(recipe)) |
| 275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloneRecipe(recipe) |
| 278 | assignment | 값을 대상에 대입합니다: _recipeCache = recipes.ToArray() |
| 278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.ToArray() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["UpdateCachedRecipe"]
 N0["L252 lock"]
 M -->|포함| N0
 N1["L254 if"]
 N0 -->|포함| N1
 N2["L261 foreach"]
 N0 -->|포함| N2
 N3["L263 if"]
 N2 -->|포함| N3
 N4["L273 if"]
 N0 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RenameCachedRecipe` · L282–305

[Drilling.Common/Managers/CRecipeManager.cs:282–305](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L282-L305)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.CRecipeManager.RenameCachedRecipe(string, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:185–185](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L185-L185) | RenameCachedRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 291 | new List<ST_RECIPE_DEFINITION> | resolved | System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.List(int) |
| 294 | cachedRecipe.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 296 | recipes.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Add(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 296 | CloneRecipe | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION Drilling.Common.Managers.CRecipeManager.CloneRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.Common/Managers/CRecipeManager.cs:329 |
| 300 | recipes.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Add(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 303 | recipes.ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION[] System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.ToArray() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 284 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 286 | if | 조건에 따라 분기합니다: if (_recipeCache is null) |
| 288 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 291 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_RECIPE_DEFINITION>(_recipeCache.Count) |
| 291 | local-declaration | 지역 변수를 선언합니다: var recipes = new List<ST_RECIPE_DEFINITION>(_recipeCache.Count); |
| 291 | variable-initializer | 변수의 초기값을 지정합니다: recipes = new List<ST_RECIPE_DEFINITION>(_recipeCache.Count) |
| 292 | foreach | 컬렉션 요소를 순회합니다: foreach (var cachedRecipe in _recipeCache) |
| 294 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cachedRecipe.Id.Equals(oldRecipeId, StringComparison.OrdinalIgnoreCase) |
| 294 | if | 조건에 따라 분기합니다: if (cachedRecipe.Id.Equals(oldRecipeId, StringComparison.OrdinalIgnoreCase)) |
| 296 | assignment | 값을 대상에 대입합니다: Id = newRecipeId |
| 296 | assignment | 값을 대상에 대입합니다: Name = newRecipeId |
| 296 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.Add(CloneRecipe(cachedRecipe with { Id = newRecipeId, Name = newRecipeId })) |
| 296 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CloneRecipe(cachedRecipe with { Id = newRecipeId, Name = newRecipeId }) |
| 297 | continue | 다음 반복으로 진행합니다: continue; |
| 300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.Add(cachedRecipe) |
| 303 | assignment | 값을 대상에 대입합니다: _recipeCache = recipes.ToArray() |
| 303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.ToArray() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["RenameCachedRecipe"]
 N0["L284 lock"]
 M -->|포함| N0
 N1["L286 if"]
 N0 -->|포함| N1
 N2["L292 foreach"]
 N0 -->|포함| N2
 N3["L294 if"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteCachedRecipe` · L307–327

[Drilling.Common/Managers/CRecipeManager.cs:307–327](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L307-L327)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Managers.CRecipeManager.DeleteCachedRecipe(string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:168–168](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L168-L168) | DeleteCachedRecipe | False |
| [Drilling.Common/Managers/CRecipeManager.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L205-L205) | DeleteCachedRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 316 | new List<ST_RECIPE_DEFINITION> | resolved | System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.List(int) |
| 319 | cachedRecipe.Id.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 321 | recipes.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.Add(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 325 | recipes.ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_DEFINITION[] System.Collections.Generic.List<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.ToArray() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 309 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_cacheLock) |
| 311 | if | 조건에 따라 분기합니다: if (_recipeCache is null) |
| 313 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_RECIPE_DEFINITION>(_recipeCache.Count) |
| 316 | local-declaration | 지역 변수를 선언합니다: var recipes = new List<ST_RECIPE_DEFINITION>(_recipeCache.Count); |
| 316 | variable-initializer | 변수의 초기값을 지정합니다: recipes = new List<ST_RECIPE_DEFINITION>(_recipeCache.Count) |
| 317 | foreach | 컬렉션 요소를 순회합니다: foreach (var cachedRecipe in _recipeCache) |
| 319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cachedRecipe.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase) |
| 319 | if | 조건에 따라 분기합니다: if (!cachedRecipe.Id.Equals(recipeId, StringComparison.OrdinalIgnoreCase)) |
| 321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.Add(cachedRecipe) |
| 325 | assignment | 값을 대상에 대입합니다: _recipeCache = recipes.ToArray() |
| 325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.ToArray() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DeleteCachedRecipe"]
 N0["L309 lock"]
 M -->|포함| N0
 N1["L311 if"]
 N0 -->|포함| N1
 N2["L317 foreach"]
 N0 -->|포함| N2
 N3["L319 if"]
 N2 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CloneRecipe` · L329–336

[Drilling.Common/Managers/CRecipeManager.cs:329–336](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L329-L336)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_DEFINITION Drilling.Common.Managers.CRecipeManager.CloneRecipe(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_DEFINITION |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeManager |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:265–265](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L265-L265) | CloneRecipe | False |
| [Drilling.Common/Managers/CRecipeManager.cs:275–275](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L275-L275) | CloneRecipe | False |
| [Drilling.Common/Managers/CRecipeManager.cs:296–296](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L296-L296) | CloneRecipe | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 333 | recipe.Parameters.ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToArray<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 334 | recipe.History.ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_HISTORY[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_HISTORY>.ToArray<Drilling.Common.Managers.ST_RECIPE_HISTORY>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 331 | return | 호출자에게 값 또는 제어를 반환합니다: return recipe with { Parameters = recipe.Parameters.ToArray(), History = recipe.History.ToArray() }; |
| 333 | assignment | 값을 대상에 대입합니다: Parameters = recipe.Parameters.ToArray() |
| 333 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.ToArray() |
| 334 | assignment | 값을 대상에 대입합니다: History = recipe.History.ToArray() |
| 334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.History.ToArray() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ListCompanionFolders` · L343–343

[Drilling.Common/Managers/CRecipeManager.cs:343–343](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L343-L343)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> Drilling.Common.Managers.IRecipeCopyStore.ListCompanionFolders(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public /  |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_COMPANION_FOLDER>> |
| 소속 타입 | NamedType:Drilling.Common.Managers.IRecipeCopyStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| sourceRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:128–128](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L128-L128) | store.ListCompanionFolders | True |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateCopy` · L344–344

[Drilling.Common/Managers/CRecipeManager.cs:344–344](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L344-L344)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.CreateCopy(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public /  |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.IRecipeCopyStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| sourceRecipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:132–132](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L132-L132) | store.CreateCopy | True |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RenameWithCompanions` · L345–345

[Drilling.Common/Managers/CRecipeManager.cs:345–345](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L345-L345)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.RenameWithCompanions(string, string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public /  |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.IRecipeCopyStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:177–177](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L177-L177) | store.RenameWithCompanions | True |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DeleteWithCompanions` · L346–346

[Drilling.Common/Managers/CRecipeManager.cs:346–346](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L346-L346)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.IRecipeCopyStore.DeleteWithCompanions(string, System.Collections.Generic.IReadOnlyCollection<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Public /  |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.IRecipeCopyStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| selectedFolders | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:197–197](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L197-L197) | store.DeleteWithCompanions | True |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `String` · L351–351

[Drilling.Common/Managers/CRecipeManager.cs:351–351](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L351-L351)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE.String |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Int` · L352–352

[Drilling.Common/Managers/CRecipeManager.cs:352–352](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L352-L352)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE.Int |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Double` · L353–353

[Drilling.Common/Managers/CRecipeManager.cs:353–353](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L353-L353)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE.Double |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### EnumMemberDeclaration `Bool` · L354–354

[Drilling.Common/Managers/CRecipeManager.cs:354–354](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L354-L354)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE.Bool |
| 접근/수식자 | Public /  |
| 반환/값 타입 | Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |
| 소속 타입 | NamedType:Drilling.Common.Managers.EN_RECIPE_DATA_TYPE |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadAll` · L410–410

[Drilling.Common/Managers/CRecipeManager.cs:410–410](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L410-L410)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> Drilling.Common.Managers.CRecipeFileBase.LoadAll(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_DEFINITION>> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:60–60](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L60-L60) | recipeFile.LoadAll | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Find` · L411–411

[Drilling.Common/Managers/CRecipeManager.cs:411–411](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L411-L411)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeFileBase.Find(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:77–77](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L77-L77) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:88–88](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L88-L88) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:97–97](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L97-L97) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:105–105](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L105-L105) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:117–117](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L117-L117) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:137–137](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L137-L137) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:142–142](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L142-L142) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:151–151](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L151-L151) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:156–156](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L156-L156) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:164–164](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L164-L164) | recipeFile.Find | False |
| [Drilling.Common/Managers/CRecipeManager.cs:186–186](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L186-L186) | recipeFile.Find | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Save` · L412–412

[Drilling.Common/Managers/CRecipeManager.cs:412–412](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L412-L412)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Save(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:87–87](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L87-L87) | recipeFile.Save | False |
| [Drilling.Common/Managers/CRecipeManager.cs:104–104](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L104-L104) | recipeFile.Save | False |
| [Drilling.Common/Managers/CRecipeManager.cs:139–139](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L139-L139) | recipeFile.Save | False |
| [Drilling.Common/Managers/CRecipeManager.cs:154–154](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L154-L154) | recipeFile.Save | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Rename` · L413–413

[Drilling.Common/Managers/CRecipeManager.cs:413–413](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L413-L413)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Rename(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| oldRecipeId | string | None | False /  |
| newRecipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:182–182](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L182-L182) | recipeFile.Rename | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Delete` · L414–414

[Drilling.Common/Managers/CRecipeManager.cs:414–414](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L414-L414)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.Delete(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:202–202](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L202-L202) | recipeFile.Delete | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadHistory` · L415–415

[Drilling.Common/Managers/CRecipeManager.cs:415–415](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L415-L415)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> Drilling.Common.Managers.CRecipeFileBase.LoadHistory(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_RECIPE_HISTORY>> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L25-L25) | recipeFile.LoadHistory | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `RecordSelection` · L416–416

[Drilling.Common/Managers/CRecipeManager.cs:416–416](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L416-L416)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Managers.CRecipeFileBase.RecordSelection(string, string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| previousRecipeId | string | None | False /  |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:36–36](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L36-L36) | recipeFile.RecordSelection | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `IncrementProtectWindowCount` · L417–417

[Drilling.Common/Managers/CRecipeManager.cs:417–417](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L417-L417)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.IncrementProtectWindowCount(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:209–209](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L209-L209) | recipeFile.IncrementProtectWindowCount | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 417 | new NotSupportedException | resolved | System.NotSupportedException.NotSupportedException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 417 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new NotSupportedException("This recipe store does not support persistent Protect Window counts.") |
| 417 | throw | 예외를 발생/전달합니다: throw new NotSupportedException("This recipe store does not support persistent Protect Window counts.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResetProtectWindowCount` · L418–418

[Drilling.Common/Managers/CRecipeManager.cs:418–418](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L418-L418)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.ResetProtectWindowCount(string, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:210–210](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L210-L210) | recipeFile.ResetProtectWindowCount | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 418 | new NotSupportedException | resolved | System.NotSupportedException.NotSupportedException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new NotSupportedException("This recipe store does not support resetting Protect Window counts.") |
| 418 | throw | 예외를 발생/전달합니다: throw new NotSupportedException("This recipe store does not support resetting Protect Window counts.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetProtectWindowCount` · L419–419

[Drilling.Common/Managers/CRecipeManager.cs:419–419](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L419-L419)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<int> Drilling.Common.Managers.CRecipeFileBase.SetProtectWindowCount(string, int, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, virtual |
| 반환/값 타입 | System.Threading.Tasks.Task<int> |
| 소속 타입 | NamedType:Drilling.Common.Managers.CRecipeFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |
| count | int | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:211–211](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L211-L211) | recipeFile.SetProtectWindowCount | True |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 419 | new NotSupportedException | resolved | System.NotSupportedException.NotSupportedException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 419 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new NotSupportedException("This recipe store does not support Protect Window count handover.") |
| 419 | throw | 예외를 발생/전달합니다: throw new NotSupportedException("This recipe store does not support Protect Window count handover.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `Tab` · L429–429

[Drilling.Common/Managers/CRecipeManager.cs:429–429](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L429-L429)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Recipe.CProtectWindowRecipeData.Tab |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Recipe.CProtectWindowRecipeData |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 429 | variable-initializer | 변수의 초기값을 지정합니다: Tab = "PROCESS" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `Group` · L430–430

[Drilling.Common/Managers/CRecipeManager.cs:430–430](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L430-L430)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Recipe.CProtectWindowRecipeData.Group |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Recipe.CProtectWindowRecipeData |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 430 | variable-initializer | 변수의 초기값을 지정합니다: Group = "ProtectWindow" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MaximumCountKey` · L431–431

[Drilling.Common/Managers/CRecipeManager.cs:431–431](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L431-L431)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Recipe.CProtectWindowRecipeData.MaximumCountKey |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Recipe.CProtectWindowRecipeData |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 431 | variable-initializer | 변수의 초기값을 지정합니다: MaximumCountKey = "MAX_PROCESS_COUNT" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `RetryCountKey` · L432–432

[Drilling.Common/Managers/CRecipeManager.cs:432–432](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L432-L432)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Recipe.CProtectWindowRecipeData.RetryCountKey |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Recipe.CProtectWindowRecipeData |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 432 | variable-initializer | 변수의 초기값을 지정합니다: RetryCountKey = "PROTECT_WINDOW_RETRY_COUNT" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `CurrentCountKey` · L433–433

[Drilling.Common/Managers/CRecipeManager.cs:433–433](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L433-L433)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Recipe.CProtectWindowRecipeData.CurrentCountKey |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Recipe.CProtectWindowRecipeData |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 433 | variable-initializer | 변수의 초기값을 지정합니다: CurrentCountKey = "CURRENT_PROCESS_COUNT" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MaximumRetryCount` · L434–434

[Drilling.Common/Managers/CRecipeManager.cs:434–434](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L434-L434)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Recipe.CProtectWindowRecipeData.MaximumRetryCount |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Recipe.CProtectWindowRecipeData |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 434 | variable-initializer | 변수의 초기값을 지정합니다: MaximumRetryCount = 3 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseCount` · L435–440

[Drilling.Common/Managers/CRecipeManager.cs:435–440](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L435-L440)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Recipe.CProtectWindowRecipeData.ParseCount(string?, string) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Recipe.CProtectWindowRecipeData |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| text | string? | None | False /  |
| key | string | None | True / "CURRENT_PROCESS_COUNT" |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Managers/CRecipeManager.cs:446–446](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L446-L446) | ParseCount | False |
| [Drilling.Common/Station/CStationProcess.cs:4431–4431](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L4431-L4431) | CProtectWindowRecipeData.ParseCount | False |
| [Drilling.Common/Station/CStationProcess.cs:4783–4783](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L4783-L4783) | CProtectWindowRecipeData.ParseCount | False |
| [Drilling.File/JHMI/CJhmiRecipeFile.cs:1423–1423](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1423-L1423) | CProtectWindowRecipeData.ParseCount | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2773–2773](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMain.cs#L2773-L2773) | CProtectWindowRecipeData.ParseCount | False |
| [Drilling.UI/Menu/Menus/CMenuPm.cs:141–141](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuPm.cs#L141-L141) | CProtectWindowRecipeData.ParseCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 437 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 437 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 437 | Math.Truncate | resolved | double System.Math.Truncate(double) |
| 438 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var count) |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(count) |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Truncate(count) |
| 437 | if | 조건에 따라 분기합니다: if (!double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var count) &#124;&#124; !double.IsFinite(count) &#124;&#124; count < 0 &#124;&#124; count > int.MaxValue &#124;&#124; count != Math.Truncate(count)) |
| 438 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"{key} must be a nonnegative integer: {text}") |
| 438 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"{key} must be a nonnegative integer: {text}"); |
| 439 | return | 호출자에게 값 또는 제어를 반환합니다: return (int)count; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseCount"]
 N0["L437 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParseRetryCount` · L442–450

[Drilling.Common/Managers/CRecipeManager.cs:442–450](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CRecipeManager.cs#L442-L450)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Recipe.CProtectWindowRecipeData.ParseRetryCount(string?) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Recipe.CProtectWindowRecipeData |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| text | string? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Station/CStationProcess.cs:4434–4434](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L4434-L4434) | CProtectWindowRecipeData.ParseRetryCount | False |
| [Drilling.Common/Station/CStationProcess.cs:4784–4784](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L4784-L4784) | CProtectWindowRecipeData.ParseRetryCount | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2764–2764](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMain.cs#L2764-L2764) | CProtectWindowRecipeData.ParseRetryCount | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 444 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 446 | ParseCount | resolved | int Drilling.Common.Recipe.CProtectWindowRecipeData.ParseCount(string?, string) · Drilling.Common/Managers/CRecipeManager.cs:435 |
| 448 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 444 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(text) |
| 444 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(text)) |
| 445 | return | 호출자에게 값 또는 제어를 반환합니다: return 0; |
| 446 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParseCount(text, RetryCountKey) |
| 446 | local-declaration | 지역 변수를 선언합니다: var count = ParseCount(text, RetryCountKey); |
| 446 | variable-initializer | 변수의 초기값을 지정합니다: count = ParseCount(text, RetryCountKey) |
| 447 | if | 조건에 따라 분기합니다: if (count > MaximumRetryCount) |
| 448 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException($"{RetryCountKey} must be between 0 and {MaximumRetryCount}: {text}") |
| 448 | throw | 예외를 발생/전달합니다: throw new InvalidDataException($"{RetryCountKey} must be between 0 and {MaximumRetryCount}: {text}"); |
| 449 | return | 호출자에게 값 또는 제어를 반환합니다: return count; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ParseRetryCount"]
 N0["L444 if"]
 M -->|포함| N0
 N1["L447 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.Common/Managers/CRecipeManager.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
