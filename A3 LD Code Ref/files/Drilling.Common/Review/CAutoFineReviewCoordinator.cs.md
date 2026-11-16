# Drilling.Common/Review/CAutoFineReviewCoordinator.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | dfa5920e6301d9ec4b0eab1452ae59521aafc986 |
| 원본 SHA256 | bb019c240da5f1f89e014c4521db55e5cbb2afbbcc38916d622bd1c344a057f5 |
| 파일 분류 | code |
| 원본 크기/행 | 29,088 bytes / 458 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs) |

## 파일의 역할과 읽는 순서

리뷰 계획·측정·결과 해석 계층입니다. 물리 이동 좌표와 Vision 식별 패킷, 측정 저장의 역할을 별도로 확인합니다.

![파일 관계도](../../../diagrams/files/e26456bc5f5b8d3d4e94.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CAutoFineReviewCoordinator | ClassDeclaration | 10–340 | CAutoFineReviewCoordinator |
| ST_AUTO_REVIEW_OPTIONS | RecordDeclaration | 342–345 | ST_AUTO_REVIEW_OPTIONS |
| ST_AUTO_REVIEW_INPUT | RecordDeclaration | 347–352 | ST_AUTO_REVIEW_INPUT |
| ST_AUTO_FINE_PLAN | RecordDeclaration | 353–356 | ST_AUTO_FINE_PLAN |
| ST_FINE_REVIEW_CONTEXT | RecordDeclaration | 358–363 | ST_FINE_REVIEW_CONTEXT |
| ST_FINE_REVIEW_MONITOR | RecordDeclaration | 364–372 | ST_FINE_REVIEW_MONITOR |
| CFineReviewMonitorStore | ClassDeclaration | 374–457 | CFineReviewMonitorStore |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| _prepared | FieldDeclaration | L18–18 | Drilling.Common.Review.ST_AUTO_FINE_PLAN? Drilling.Common.Review.CAutoFineReviewCoordinator._prepared |
| _result | FieldDeclaration | L19–19 | Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT? Drilling.Common.Review.CAutoFineReviewCoordinator._result |
| _saved | FieldDeclaration | L20–20 | bool Drilling.Common.Review.CAutoFineReviewCoordinator._saved |
| _saveGate | FieldDeclaration | L21–21 | System.Threading.SemaphoreSlim Drilling.Common.Review.CAutoFineReviewCoordinator._saveGate |
| Outcome | PropertyDeclaration | L22–22 | string Drilling.Common.Review.CAutoFineReviewCoordinator.Outcome |
| get_Outcome | GetAccessorDeclaration | L22–22 | string Drilling.Common.Review.CAutoFineReviewCoordinator.Outcome.get |
| set_Outcome | SetAccessorDeclaration | L22–22 | void Drilling.Common.Review.CAutoFineReviewCoordinator.Outcome.set |
| FollowUpInspectionCompleted | PropertyDeclaration | L25–27 | bool Drilling.Common.Review.CAutoFineReviewCoordinator.FollowUpInspectionCompleted |
| Prepare | MethodDeclaration | L29–41 | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.Prepare(System.Threading.CancellationToken) |
| Measure | MethodDeclaration | L43–77 | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.Measure(System.Threading.CancellationToken) |
| Save | MethodDeclaration | L79–93 | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.Save(System.Threading.CancellationToken) |
| SaveCore | MethodDeclaration | L95–169 | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.SaveCore(System.Threading.CancellationToken) |
| ValidateMeasurements | MethodDeclaration | L171–199 | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] Drilling.Common.Review.CAutoFineReviewCoordinator.ValidateMeasurements(Drilling.Common.Review.ST_AUTO_FINE_PLAN, Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT) |
| Identity | LocalFunctionStatement | L198–198 | (string Key, int Head, int Cell, int Shot, int Beam) Identity(Drilling.Common.Review.ST_REVIEW_PLAN_POINT) |
| Normalize | MethodDeclaration | L201–201 | string Drilling.Common.Review.CAutoFineReviewCoordinator.Normalize(string) |
| BuildPlan | MethodDeclaration | L203–314 | Drilling.Common.Review.ST_AUTO_FINE_PLAN Drilling.Common.Review.CAutoFineReviewCoordinator.BuildPlan(Drilling.Common.Review.ST_AUTO_REVIEW_INPUT, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) |
| Tolerance | LocalFunctionStatement | L313–313 | double Tolerance(string) |
| FindTopmostCells | MethodDeclaration | L316–338 | System.Collections.Generic.HashSet<int> Drilling.Common.Review.CAutoFineReviewCoordinator.FindTopmostCells(System.Collections.Generic.IReadOnlyDictionary<string, string>) |
| Read | LocalFunctionStatement | L318–318 | double Read(string, double) |
| BeamNo | FieldDeclaration | L344–344 | int Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS.BeamNo |
| ZeroLineFollowUp | PropertyDeclaration | L349–349 | bool Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineFollowUp |
| get_ZeroLineFollowUp | GetAccessorDeclaration | L349–349 | bool Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineFollowUp.get |
| set_ZeroLineFollowUp | InitAccessorDeclaration | L349–349 | void Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineFollowUp.init |
| ZeroLineRunId | PropertyDeclaration | L350–350 | System.Guid? Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineRunId |
| get_ZeroLineRunId | GetAccessorDeclaration | L350–350 | System.Guid? Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineRunId.get |
| set_ZeroLineRunId | InitAccessorDeclaration | L350–350 | void Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineRunId.init |
| ZeroLineSavedAt | PropertyDeclaration | L351–351 | System.DateTimeOffset? Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineSavedAt |
| get_ZeroLineSavedAt | GetAccessorDeclaration | L351–351 | System.DateTimeOffset? Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineSavedAt.get |
| set_ZeroLineSavedAt | InitAccessorDeclaration | L351–351 | void Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineSavedAt.init |
| ZeroLineFollowUp | PropertyDeclaration | L355–355 | bool Drilling.Common.Review.ST_AUTO_FINE_PLAN.ZeroLineFollowUp |
| get_ZeroLineFollowUp | GetAccessorDeclaration | L355–355 | bool Drilling.Common.Review.ST_AUTO_FINE_PLAN.ZeroLineFollowUp.get |
| set_ZeroLineFollowUp | InitAccessorDeclaration | L355–355 | void Drilling.Common.Review.ST_AUTO_FINE_PLAN.ZeroLineFollowUp.init |
| ZeroLineFollowUp | PropertyDeclaration | L360–360 | bool Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineFollowUp |
| get_ZeroLineFollowUp | GetAccessorDeclaration | L360–360 | bool Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineFollowUp.get |
| set_ZeroLineFollowUp | InitAccessorDeclaration | L360–360 | void Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineFollowUp.init |
| ZeroLineRunId | PropertyDeclaration | L361–361 | System.Guid? Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineRunId |
| get_ZeroLineRunId | GetAccessorDeclaration | L361–361 | System.Guid? Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineRunId.get |
| set_ZeroLineRunId | InitAccessorDeclaration | L361–361 | void Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineRunId.init |
| ZeroLineSavedAt | PropertyDeclaration | L362–362 | System.DateTimeOffset? Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineSavedAt |
| get_ZeroLineSavedAt | GetAccessorDeclaration | L362–362 | System.DateTimeOffset? Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineSavedAt.get |
| set_ZeroLineSavedAt | InitAccessorDeclaration | L362–362 | void Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineSavedAt.init |
| _gate | FieldDeclaration | L376–376 | object Drilling.Common.Review.CFineReviewMonitorStore._gate |
| _latest | FieldDeclaration | L377–377 | Drilling.Common.Review.ST_FINE_REVIEW_MONITOR? Drilling.Common.Review.CFineReviewMonitorStore._latest |
| _revision | FieldDeclaration | L378–378 | long Drilling.Common.Review.CFineReviewMonitorStore._revision |
| GetSnapshot | MethodDeclaration | L379–383 | Drilling.Common.Review.ST_FINE_REVIEW_MONITOR? Drilling.Common.Review.CFineReviewMonitorStore.GetSnapshot() |
| Begin | MethodDeclaration | L385–403 | System.Guid Drilling.Common.Review.CFineReviewMonitorStore.Begin(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, int) |
| Stage | MethodDeclaration | L405–405 | System.Guid Drilling.Common.Review.CFineReviewMonitorStore.Stage(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, int) |
| Replace | MethodDeclaration | L406–434 | System.Guid Drilling.Common.Review.CFineReviewMonitorStore.Replace(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, int, Drilling.Common.Review.EN_REVIEW_SEQUENCE_STATE, string) |
| Publish | MethodDeclaration | L436–445 | void Drilling.Common.Review.CFineReviewMonitorStore.Publish(Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT) |
| MarkOffsetSaved | MethodDeclaration | L447–456 | void Drilling.Common.Review.CFineReviewMonitorStore.MarkOffsetSaved(System.Guid, string) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `_prepared` · L18–18

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.ST_AUTO_FINE_PLAN? Drilling.Common.Review.CAutoFineReviewCoordinator._prepared |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Review.ST_AUTO_FINE_PLAN? |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_result` · L19–19

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:19–19](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L19-L19)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT? Drilling.Common.Review.CAutoFineReviewCoordinator._result |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT? |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_saved` · L20–20

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:20–20](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L20-L20)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Review.CAutoFineReviewCoordinator._saved |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_saveGate` · L21–21

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:21–21](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L21-L21)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.SemaphoreSlim Drilling.Common.Review.CAutoFineReviewCoordinator._saveGate |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Threading.SemaphoreSlim |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 21 | new | resolved | System.Threading.SemaphoreSlim.SemaphoreSlim(int, int) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 21 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(1, 1) |
| 21 | variable-initializer | 변수의 초기값을 지정합니다: _saveGate = new(1, 1) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Outcome` · L22–22

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L22-L22)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Review.CAutoFineReviewCoordinator.Outcome |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Outcome` · L22–22

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L22-L22)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Review.CAutoFineReviewCoordinator.Outcome.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### SetAccessorDeclaration `set_Outcome` · L22–22

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L22-L22)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.CAutoFineReviewCoordinator.Outcome.set |
| 접근/수식자 | Private / private, set |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `FollowUpInspectionCompleted` · L25–27

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:25–27](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L25-L27)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Review.CAutoFineReviewCoordinator.FollowUpInspectionCompleted |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 27 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 27 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(result.ResultFilePath) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Prepare` · L29–41

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:29–41](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L29-L41)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.Prepare(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 34 | capture(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Review.ST_AUTO_REVIEW_INPUT> System.Threading.Tasks.Task<Drilling.Common.Review.ST_AUTO_REVIEW_INPUT>.ConfigureAwait(bool) |
| 34 | capture | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<Drilling.Common.Review.ST_AUTO_REVIEW_INPUT> System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Review.ST_AUTO_REVIEW_INPUT>>.Invoke(System.Threading.CancellationToken) |
| 35 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 36 | review.CreateZeroLineFollowUpPlan | resolved | Drilling.Common.Review.ST_AUTO_FINE_PLAN Drilling.Common.Review.CReviewManager.CreateZeroLineFollowUpPlan(Drilling.Common.Review.ST_AUTO_REVIEW_INPUT, System.Threading.CancellationToken) · Drilling.Common/Review/CReviewManager.cs:2626 |
| 36 | review.CreateAutoFinePlan | resolved | Drilling.Common.Review.ST_AUTO_FINE_PLAN Drilling.Common.Review.CReviewManager.CreateAutoFinePlan(Drilling.Common.Review.ST_AUTO_REVIEW_INPUT, System.Threading.CancellationToken) · Drilling.Common/Review/CReviewManager.cs:2608 |
| 40 | review.RecordAutoFineLog | resolved | void Drilling.Common.Review.CReviewManager.RecordAutoFineLog(string, string) · Drilling.Common/Review/CReviewManager.cs:2581 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 31 | assignment | 값을 대상에 대입합니다: _prepared = null |
| 32 | assignment | 값을 대상에 대입합니다: _result = null |
| 33 | assignment | 값을 대상에 대입합니다: _saved = false |
| 34 | await | 비동기 완료를 기다립니다: await capture(token).ConfigureAwait(false) |
| 34 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: capture(token).ConfigureAwait(false) |
| 34 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: capture(token) |
| 34 | local-declaration | 지역 변수를 선언합니다: var input = await capture(token).ConfigureAwait(false); |
| 34 | variable-initializer | 변수의 초기값을 지정합니다: input = await capture(token).ConfigureAwait(false) |
| 35 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 36 | assignment | 값을 대상에 대입합니다: _prepared = input.ZeroLineFollowUp ? review.CreateZeroLineFollowUpPlan(input, token) : review.CreateAutoFinePlan(input, token) |
| 36 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.CreateZeroLineFollowUpPlan(input, token) |
| 36 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.CreateAutoFinePlan(input, token) |
| 36 | conditional-expression | 조건에 따라 결과식을 선택합니다: input.ZeroLineFollowUp ? review.CreateZeroLineFollowUpPlan(input, token) : review.CreateAutoFinePlan(input, token) |
| 37 | assignment | 값을 대상에 대입합니다: Outcome = input.ZeroLineFollowUp ? $"{input.GlassId} / {input.Recipe.Name} / 0선 FollowUp · 맨 위 Cell 가운데 행 · Beam 11 / IOF 1 Line · 재시도 없음 · 검사만 수행 / 보정 미적용 · 계획 확정" : $"{input.GlassId} / {input.Recipe.Name} / Beam 11 / {input.Opti |
| 37 | conditional-expression | 조건에 따라 결과식을 선택합니다: input.ZeroLineFollowUp ? $"{input.GlassId} / {input.Recipe.Name} / 0선 FollowUp · 맨 위 Cell 가운데 행 · Beam 11 / IOF 1 Line · 재시도 없음 · 검사만 수행 / 보정 미적용 · 계획 확정" : $"{input.GlassId} / {input.Recipe.Name} / Beam 11 / {input.Options.Method |
| 39 | conditional-expression | 조건에 따라 결과식을 선택합니다: input.Options.ImmediateRetry ? "ON" : "OFF" |
| 40 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.RecordAutoFineLog("AUTO_REVIEW_PLAN", Outcome) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Measure` · L43–77

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:43–77](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L43-L77)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.Measure(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2815–2815](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/CRootView.cs#L2815-L2815) | _autoFineReview.Measure | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 45 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 47 | review.StartFineCorrection(plan.Request, _ => { }, token, simulationMeasurement).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT> System.Threading.Tasks.Task<Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT>.ConfigureAwait(bool) |
| 47 | review.StartFineCorrection | resolved | System.Threading.Tasks.Task<Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT> Drilling.Common.Review.CReviewManager.StartFineCorrection(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, System.Action<Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT>, System.Threading.CancellationToken, System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, System.Threading.CancellationToken, System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.Vision.ST_VISION_MARK_FIND>>>?) · Drilling.Common/Review/CReviewManager.cs:2633 |
| 50 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 52 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 53 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 54 | new IOException | resolved | System.IO.IOException.IOException(string?) |
| 55 | ValidateMeasurements | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] Drilling.Common.Review.CAutoFineReviewCoordinator.ValidateMeasurements(Drilling.Common.Review.ST_AUTO_FINE_PLAN, Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:171 |
| 56 | measured.Count | resolved | int System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Count<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, bool>) |
| 57 | CReviewManager.SummarizeReviewResults | resolved | Drilling.Common.Review.ST_REVIEW_NG_SUMMARY Drilling.Common.Review.CReviewManager.SummarizeReviewResults(System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) · Drilling.Common/Review/CReviewManager.cs:1123 |
| 59 | review.RecordAutoFineLog | resolved | void Drilling.Common.Review.CReviewManager.RecordAutoFineLog(string, string) · Drilling.Common/Review/CReviewManager.cs:2581 |
| 59 | ngSummary.ToDisplayText | resolved | string Drilling.Common.Review.ST_REVIEW_NG_SUMMARY.ToDisplayText() · Drilling.Common/Review/CReviewManager.cs:4041 |
| 64 | review.FineMonitor.Publish | resolved | void Drilling.Common.Review.CFineReviewMonitorStore.Publish(Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:436 |
| 65 | review.RecordAutoFineLog | resolved | void Drilling.Common.Review.CReviewManager.RecordAutoFineLog(string, string) · Drilling.Common/Review/CReviewManager.cs:2581 |
| 71 | ngSummary.ToDisplayText | resolved | string Drilling.Common.Review.ST_REVIEW_NG_SUMMARY.ToDisplayText() · Drilling.Common/Review/CReviewManager.cs:4041 |
| 72 | review.RecordAutoFineLog | resolved | void Drilling.Common.Review.CReviewManager.RecordAutoFineLog(string, string) · Drilling.Common/Review/CReviewManager.cs:2581 |
| 75 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("AUTO Review 계획이 없습니다.") |
| 45 | local-declaration | 지역 변수를 선언합니다: var plan = _prepared ?? throw new InvalidOperationException("AUTO Review 계획이 없습니다."); |
| 45 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("AUTO Review 계획이 없습니다.") |
| 45 | variable-initializer | 변수의 초기값을 지정합니다: plan = _prepared ?? throw new InvalidOperationException("AUTO Review 계획이 없습니다.") |
| 46 | assignment | 값을 대상에 대입합니다: _result = null |
| 47 | await | 비동기 완료를 기다립니다: await review.StartFineCorrection(plan.Request, _ => { }, token, simulationMeasurement).ConfigureAwait(false) |
| 47 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.StartFineCorrection(plan.Request, _ => { }, token, simulationMeasurement).ConfigureAwait(false) |
| 47 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.StartFineCorrection(plan.Request, _ => { }, token, simulationMeasurement) |
| 47 | local-declaration | 지역 변수를 선언합니다: var result = await review.StartFineCorrection(plan.Request, _ => { }, token, simulationMeasurement).ConfigureAwait(false); |
| 47 | variable-initializer | 변수의 초기값을 지정합니다: result = await review.StartFineCorrection(plan.Request, _ => { }, token, simulationMeasurement).ConfigureAwait(false) |
| 50 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 51 | if | 조건에 따라 분기합니다: if (result.State != EN_REVIEW_SEQUENCE_STATE.Completed) |
| 52 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"AUTO Review가 정상 완료되지 않았습니다: {result.Message}") |
| 52 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"AUTO Review가 정상 완료되지 않았습니다: {result.Message}"); |
| 53 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(result.ResultFilePath) |
| 53 | if | 조건에 따라 분기합니다: if (result.ResultSaveError.Length > 0 &#124;&#124; string.IsNullOrWhiteSpace(result.ResultFilePath)) |
| 54 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new IOException($"AUTO Review 결과 저장을 확인할 수 없습니다: {result.ResultSaveError}") |
| 54 | throw | 예외를 발생/전달합니다: throw new IOException($"AUTO Review 결과 저장을 확인할 수 없습니다: {result.ResultSaveError}"); |
| 55 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMeasurements(plan, result) |
| 55 | local-declaration | 지역 변수를 선언합니다: var measured = ValidateMeasurements(plan, result); |
| 55 | variable-initializer | 변수의 초기값을 지정합니다: measured = ValidateMeasurements(plan, result) |
| 56 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: measured.Count(point => point.State == EN_REVIEW_POINT_STATE.Ng) |
| 56 | local-declaration | 지역 변수를 선언합니다: var ng = measured.Count(point => point.State == EN_REVIEW_POINT_STATE.Ng); |
| 56 | variable-initializer | 변수의 초기값을 지정합니다: ng = measured.Count(point => point.State == EN_REVIEW_POINT_STATE.Ng) |
| 57 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewManager.SummarizeReviewResults(measured) |
| 57 | local-declaration | 지역 변수를 선언합니다: var ngSummary = CReviewManager.SummarizeReviewResults(measured); |
| 57 | variable-initializer | 변수의 초기값을 지정합니다: ngSummary = CReviewManager.SummarizeReviewResults(measured) |
| 58 | conditional-expression | 조건에 따라 결과식을 선택합니다: plan.Request.Method == EN_FINE_INSPECTION_METHOD.Flying ? "IOF" : "PtoP" |
| 58 | local-declaration | 지역 변수를 선언합니다: var method = plan.Request.Method == EN_FINE_INSPECTION_METHOD.Flying ? "IOF" : "PtoP"; |
| 58 | variable-initializer | 변수의 초기값을 지정합니다: method = plan.Request.Method == EN_FINE_INSPECTION_METHOD.Flying ? "IOF" : "PtoP" |
| 59 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.RecordAutoFineLog("AUTO_REVIEW_RESULT", $"FINE {method} 검사 결과 · {measured.Length:N0}개 검사 / OK {measured.Length - ng:N0} / NG {ng:N0} · Beam {ST_AUTO_REVIEW_OPTIONS.BeamNo} · {ngSummary.ToDisplayText()} · Vision Re… |
| 59 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ngSummary.ToDisplayText() |
| 60 | if | 조건에 따라 분기합니다: if (plan.ZeroLineFollowUp) |
| 62 | assignment | 값을 대상에 대입합니다: Outcome = $"0선 FollowUp IOF 1 Line · 검사 {measured.Length:N0}개 완료 / OK {measured.Length - ng:N0} / NG {ng:N0}개 · 결과 저장 완료 / 보정 미적용" |
| 63 | assignment | 값을 대상에 대입합니다: result = result with { Message = Outcome } |
| 63 | assignment | 값을 대상에 대입합니다: Message = Outcome |
| 64 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.FineMonitor.Publish(result) |
| 65 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.RecordAutoFineLog("ZERO_LINE_FOLLOWUP_RESULT", Outcome) |
| 67 | assignment | 값을 대상에 대입합니다: _result = result |
| 68 | if | 조건에 따라 분기합니다: if (ng > 0) |
| 70 | if | 조건에 따라 분기합니다: if (!plan.ZeroLineFollowUp) |
| 71 | assignment | 값을 대상에 대입합니다: Outcome = $"검사 {measured.Length:N0}개 완료 / NG {ng:N0}개 · {ngSummary.ToDisplayText()} · Vision Result Code {ngSummary.ResultCodeText} · 보정 전체 미적용 · 기존 Review Offset 유지" |
| 71 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ngSummary.ToDisplayText() |
| 72 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.RecordAutoFineLog("AUTO_REVIEW_NG", Outcome) |
| 75 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException(Outcome) |
| 75 | throw | 예외를 발생/전달합니다: throw new InvalidDataException(Outcome); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Measure"]
 N0["L51 if"]
 M -->|포함| N0
 N1["L53 if"]
 M -->|포함| N1
 N2["L60 if"]
 M -->|포함| N2
 N3["L68 if"]
 M -->|포함| N3
 N4["L70 if"]
 N3 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Save` · L79–93

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:79–93](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L79-L93)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.Save(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2827–2827](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/CRootView.cs#L2827-L2827) | _autoFineReview.Save | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 81 | _saveGate.WaitAsync(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 81 | _saveGate.WaitAsync | resolved | System.Threading.Tasks.Task System.Threading.SemaphoreSlim.WaitAsync(System.Threading.CancellationToken) |
| 87 | SaveCore(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable System.Threading.Tasks.Task.ConfigureAwait(bool) |
| 87 | SaveCore | resolved | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.SaveCore(System.Threading.CancellationToken) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:95 |
| 91 | _saveGate.Release | resolved | int System.Threading.SemaphoreSlim.Release() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 81 | await | 비동기 완료를 기다립니다: await _saveGate.WaitAsync(token).ConfigureAwait(false) |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _saveGate.WaitAsync(token).ConfigureAwait(false) |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _saveGate.WaitAsync(token) |
| 82 | try | 예외 처리 범위입니다: try |
| 85 | if | 조건에 따라 분기합니다: if (_saved) |
| 86 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 87 | await | 비동기 완료를 기다립니다: await SaveCore(token).ConfigureAwait(false) |
| 87 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveCore(token).ConfigureAwait(false) |
| 87 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: SaveCore(token) |
| 89 | finally | 종료 정리 구간입니다: finally |
| 91 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _saveGate.Release() |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Save"]
 N0["L82 try"]
 M -->|포함| N0
 N1["L85 if"]
 N0 -->|포함| N1
 N2["L89 finally"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SaveCore` · L95–169

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:95–169](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L95-L169)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Review.CAutoFineReviewCoordinator.SaveCore(System.Threading.CancellationToken) |
| 접근/수식자 | Private / private, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:87–87](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L87-L87) | SaveCore | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 97 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 98 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 99 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 100 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 101 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 102 | ValidateMeasurements | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] Drilling.Common.Review.CAutoFineReviewCoordinator.ValidateMeasurements(Drilling.Common.Review.ST_AUTO_FINE_PLAN, Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:171 |
| 103 | measured.Count | resolved | int System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Count<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, bool>) |
| 107 | CReviewManager.SummarizeReviewResults | resolved | Drilling.Common.Review.ST_REVIEW_NG_SUMMARY Drilling.Common.Review.CReviewManager.SummarizeReviewResults(System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) · Drilling.Common/Review/CReviewManager.cs:1123 |
| 108 | ngSummary.ToDisplayText | resolved | string Drilling.Common.Review.ST_REVIEW_NG_SUMMARY.ToDisplayText() · Drilling.Common/Review/CReviewManager.cs:4041 |
| 109 | review.RecordAutoFineLog | resolved | void Drilling.Common.Review.CReviewManager.RecordAutoFineLog(string, string) · Drilling.Common/Review/CReviewManager.cs:2581 |
| 110 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 119 | review.RecordAutoFineLog | resolved | void Drilling.Common.Review.CReviewManager.RecordAutoFineLog(string, string) · Drilling.Common/Review/CReviewManager.cs:2581 |
| 123 | CReviewManager.CalculateFineOffsets | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_FINE_OFFSET_DELTA> Drilling.Common.Review.CReviewManager.CalculateFineOffsets(System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.Common.Review.EN_VISION_FLIP_TYPE) · Drilling.Common/Review/CReviewManager.cs:3537 |
| 124 | offsets.LoadLatest(plan.Request.Plan.RecipeId, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Review.ST_REVIEW_OFFSET_FILE_DATA> System.Threading.Tasks.Task<Drilling.Common.Review.ST_REVIEW_OFFSET_FILE_DATA>.ConfigureAwait(bool) |
| 124 | offsets.LoadLatest | resolved | System.Threading.Tasks.Task<Drilling.Common.Review.ST_REVIEW_OFFSET_FILE_DATA> Drilling.Common.Review.CReviewOffsetFileBase.LoadLatest(string, System.Threading.CancellationToken) · Drilling.Common/Review/CReviewManager.cs:4313 |
| 125 | latest.RecipeId.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 126 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 127 | latest.Rows.ToDictionary | resolved | System.Collections.Generic.Dictionary<(int CellId, string), Drilling.Common.Review.ST_REVIEW_OFFSET_ROW> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW>.ToDictionary<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW, (int CellId, string)>(System.Func<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW, (int CellId, string)>) |
| 127 | Normalize | resolved | string Drilling.Common.Review.CAutoFineReviewCoordinator.Normalize(string) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:201 |
| 130 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 132 | Normalize | resolved | string Drilling.Common.Review.CAutoFineReviewCoordinator.Normalize(string) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:201 |
| 132 | CReviewShotNameFormatter.ToMatrixName | resolved | string Drilling.Common.Review.CReviewShotNameFormatter.ToMatrixName(int, int) · Drilling.Common/Review/CReviewManager.cs:4057 |
| 133 | rows.GetValueOrDefault | resolved | Drilling.Common.Review.ST_REVIEW_OFFSET_ROW? System.Collections.Generic.IReadOnlyDictionary<(int, string), Drilling.Common.Review.ST_REVIEW_OFFSET_ROW>.GetValueOrDefault<(int, string), Drilling.Common.Review.ST_REVIEW_OFFSET_ROW>((int, string)) |
| 134 | CReviewOffsetData.ToDesign | resolved | (double X, double Y) Drilling.Common.Recipe.CReviewOffsetData.ToDesign(System.Collections.Generic.IReadOnlyDictionary<string, string>, int, double, double, bool) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:1193 |
| 135 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 135 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 136 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?) |
| 137 | new | resolved | Drilling.Common.Review.ST_REVIEW_OFFSET_ROW.ST_REVIEW_OFFSET_ROW(int, string, double, double) · Drilling.Common/Review/CReviewManager.cs:4273 |
| 137 | CAlignShotOffsetData.RoundValue | resolved | double Drilling.Common.Recipe.CAlignShotOffsetData.RoundValue(double) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:659 |
| 137 | CAlignShotOffsetData.RoundValue | resolved | double Drilling.Common.Recipe.CAlignShotOffsetData.RoundValue(double) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:659 |
| 146 | offsets.SaveNewFromSource( plan.Request.Plan.RecipeId, rows.Values.OrderBy(row => row.CellId).ThenBy(row => row.ShotId).ToArray(), result.ResultFilePath, allowDuplicate: false, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Review.ST_REVIEW_OFFSET_FILE_DATA> System.Threading.Tasks.Task<Drilling.Common.Review.ST_REVIEW_OFFSET_FILE_DATA>.ConfigureAwait(bool) |
| 146 | offsets.SaveNewFromSource | resolved | System.Threading.Tasks.Task<Drilling.Common.Review.ST_REVIEW_OFFSET_FILE_DATA> Drilling.Common.Review.CReviewOffsetFileBase.SaveNewFromSource(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW>, string, bool, System.Threading.CancellationToken) · Drilling.Common/Review/CReviewManager.cs:4319 |
| 148 | rows.Values.OrderBy(row => row.CellId).ThenBy(row => row.ShotId).ToArray | resolved | Drilling.Common.Review.ST_REVIEW_OFFSET_ROW[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW>.ToArray<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW>() |
| 148 | rows.Values.OrderBy(row => row.CellId).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW> System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW>.ThenBy<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW, string>(System.Func<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW, string>) |
| 148 | rows.Values.OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW>.OrderBy<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW, int>(System.Func<Drilling.Common.Review.ST_REVIEW_OFFSET_ROW, int>) |
| 156 | existing.AppliedAt.ToLocalTime | resolved | System.DateTimeOffset System.DateTimeOffset.ToLocalTime() |
| 160 | review.RecordAutoFineLog | resolved | void Drilling.Common.Review.CReviewManager.RecordAutoFineLog(string, string) · Drilling.Common/Review/CReviewManager.cs:2581 |
| 161 | .Invoke | resolved · 동적 구현 선택 가능 | void System.Action<Drilling.Common.Review.CReviewOffsetDuplicateSourceException>.Invoke(Drilling.Common.Review.CReviewOffsetDuplicateSourceException) |
| 162 | new InvalidDataException | resolved | System.IO.InvalidDataException.InvalidDataException(string?, System.Exception?) |
| 166 | review.FineMonitor.MarkOffsetSaved | resolved | void Drilling.Common.Review.CFineReviewMonitorStore.MarkOffsetSaved(System.Guid, string) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:447 |
| 168 | review.RecordAutoFineLog | resolved | void Drilling.Common.Review.CReviewManager.RecordAutoFineLog(string, string) · Drilling.Common/Review/CReviewManager.cs:2581 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("AUTO Review 계획이 없습니다.") |
| 97 | local-declaration | 지역 변수를 선언합니다: var plan = _prepared ?? throw new InvalidOperationException("AUTO Review 계획이 없습니다."); |
| 97 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("AUTO Review 계획이 없습니다.") |
| 97 | variable-initializer | 변수의 초기값을 지정합니다: plan = _prepared ?? throw new InvalidOperationException("AUTO Review 계획이 없습니다.") |
| 98 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("AUTO Review 검사 결과가 없습니다.") |
| 98 | local-declaration | 지역 변수를 선언합니다: var result = _result ?? throw new InvalidOperationException("AUTO Review 검사 결과가 없습니다."); |
| 98 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("AUTO Review 검사 결과가 없습니다.") |
| 98 | variable-initializer | 변수의 초기값을 지정합니다: result = _result ?? throw new InvalidOperationException("AUTO Review 검사 결과가 없습니다.") |
| 99 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 100 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(result.ResultFilePath) |
| 100 | if | 조건에 따라 분기합니다: if (result.State != EN_REVIEW_SEQUENCE_STATE.Completed &#124;&#124; result.ResultSaveError.Length > 0 &#124;&#124; string.IsNullOrWhiteSpace(result.ResultFilePath)) |
| 101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("정상 완료 및 결과 파일 저장이 확인된 검사만 보정에 사용할 수 있습니다.") |
| 101 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("정상 완료 및 결과 파일 저장이 확인된 검사만 보정에 사용할 수 있습니다."); |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMeasurements(plan, result) |
| 102 | local-declaration | 지역 변수를 선언합니다: var measured = ValidateMeasurements(plan, result); |
| 102 | variable-initializer | 변수의 초기값을 지정합니다: measured = ValidateMeasurements(plan, result) |
| 103 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: measured.Count(point => point.State == EN_REVIEW_POINT_STATE.Ng) |
| 103 | local-declaration | 지역 변수를 선언합니다: var ng = measured.Count(point => point.State == EN_REVIEW_POINT_STATE.Ng); |
| 103 | variable-initializer | 변수의 초기값을 지정합니다: ng = measured.Count(point => point.State == EN_REVIEW_POINT_STATE.Ng) |
| 104 | if | 조건에 따라 분기합니다: if (ng > 0) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewManager.SummarizeReviewResults(measured) |
| 107 | local-declaration | 지역 변수를 선언합니다: var ngSummary = CReviewManager.SummarizeReviewResults(measured); |
| 107 | variable-initializer | 변수의 초기값을 지정합니다: ngSummary = CReviewManager.SummarizeReviewResults(measured) |
| 108 | assignment | 값을 대상에 대입합니다: Outcome = $"검사 {measured.Length:N0}개 완료 / NG {ng:N0}개 · {ngSummary.ToDisplayText()} · Vision Result Code {ngSummary.ResultCodeText} · 보정 전체 미적용 · 기존 Review Offset 유지" |
| 108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ngSummary.ToDisplayText() |
| 109 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.RecordAutoFineLog("AUTO_REVIEW_NG", Outcome) |
| 110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException(Outcome) |
| 110 | throw | 예외를 발생/전달합니다: throw new InvalidDataException(Outcome); |
| 113 | if | 조건에 따라 분기합니다: if (plan.ZeroLineFollowUp) |
| 117 | assignment | 값을 대상에 대입합니다: _saved = true |
| 118 | assignment | 값을 대상에 대입합니다: Outcome = $"0선 FollowUp IOF 1 Line · 전체 OK / {measured.Length:N0}개 결과 저장 완료 · 검사만 수행 / 기존 Review Offset 유지" |
| 119 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.RecordAutoFineLog("ZERO_LINE_FOLLOWUP_COMPLETE", Outcome) |
| 120 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 123 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewManager.CalculateFineOffsets(plan.OffsetTargets, measured, plan.Request.Plan.VisionFlipType) |
| 123 | local-declaration | 지역 변수를 선언합니다: var deltas = CReviewManager.CalculateFineOffsets(plan.OffsetTargets, measured, plan.Request.Plan.VisionFlipType); |
| 123 | variable-initializer | 변수의 초기값을 지정합니다: deltas = CReviewManager.CalculateFineOffsets(plan.OffsetTargets, measured, plan.Request.Plan.VisionFlipType) |
| 124 | await | 비동기 완료를 기다립니다: await offsets.LoadLatest(plan.Request.Plan.RecipeId, token).ConfigureAwait(false) |
| 124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: offsets.LoadLatest(plan.Request.Plan.RecipeId, token).ConfigureAwait(false) |
| 124 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: offsets.LoadLatest(plan.Request.Plan.RecipeId, token) |
| 124 | local-declaration | 지역 변수를 선언합니다: var latest = await offsets.LoadLatest(plan.Request.Plan.RecipeId, token).ConfigureAwait(false); |
| 124 | variable-initializer | 변수의 초기값을 지정합니다: latest = await offsets.LoadLatest(plan.Request.Plan.RecipeId, token).ConfigureAwait(false) |
| 125 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: latest.RecipeId.Equals(plan.Request.Plan.RecipeId, StringComparison.OrdinalIgnoreCase) |
| 125 | if | 조건에 따라 분기합니다: if (!latest.RecipeId.Equals(plan.Request.Plan.RecipeId, StringComparison.OrdinalIgnoreCase)) |
| 126 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("기존 Review Offset의 Recipe ID가 일치하지 않습니다.") |
| 126 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("기존 Review Offset의 Recipe ID가 일치하지 않습니다."); |
| 127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: latest.Rows.ToDictionary(row => (row.CellId, Normalize(row.ShotId))) |
| 127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Normalize(row.ShotId) |
| 127 | local-declaration | 지역 변수를 선언합니다: var rows = latest.Rows.ToDictionary(row => (row.CellId, Normalize(row.ShotId))); |
| 127 | variable-initializer | 변수의 초기값을 지정합니다: rows = latest.Rows.ToDictionary(row => (row.CellId, Normalize(row.ShotId))) |
| 128 | foreach | 컬렉션 요소를 순회합니다: foreach (var delta in deltas) |
| 130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 131 | local-declaration | 지역 변수를 선언합니다: var shot = delta.Shot; |
| 131 | variable-initializer | 변수의 초기값을 지정합니다: shot = delta.Shot |
| 132 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Normalize(CReviewShotNameFormatter.ToMatrixName(shot.ShotNo, shot.PixelCountX)) |
| 132 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewShotNameFormatter.ToMatrixName(shot.ShotNo, shot.PixelCountX) |
| 132 | local-declaration | 지역 변수를 선언합니다: var key = (shot.CellNo, Normalize(CReviewShotNameFormatter.ToMatrixName(shot.ShotNo, shot.PixelCountX))); |
| 132 | variable-initializer | 변수의 초기값을 지정합니다: key = (shot.CellNo, Normalize(CReviewShotNameFormatter.ToMatrixName(shot.ShotNo, shot.PixelCountX))) |
| 133 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.GetValueOrDefault(key) |
| 133 | local-declaration | 지역 변수를 선언합니다: var previous = rows.GetValueOrDefault(key); |
| 133 | variable-initializer | 변수의 초기값을 지정합니다: previous = rows.GetValueOrDefault(key) |
| 134 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewOffsetData.ToDesign(plan.Parameters, shot.HeadNo, previous.ReviewOffsetX, previous.ReviewOffsetY, previous.IsDesignCoordinate) |
| 134 | conditional-expression | 조건에 따라 결과식을 선택합니다: previous is null ? (X: 0d, Y: 0d) : CReviewOffsetData.ToDesign(plan.Parameters, shot.HeadNo, previous.ReviewOffsetX, previous.ReviewOffsetY, previous.IsDesignCoordinate) |
| 134 | local-declaration | 지역 변수를 선언합니다: var design = previous is null ? (X: 0d, Y: 0d) : CReviewOffsetData.ToDesign(plan.Parameters, shot.HeadNo, previous.ReviewOffsetX, previous.ReviewOffsetY, previous.IsDesignCoordinate); |
| 134 | variable-initializer | 변수의 초기값을 지정합니다: design = previous is null ? (X: 0d, Y: 0d) : CReviewOffsetData.ToDesign(plan.Parameters, shot.HeadNo, previous.ReviewOffsetX, previous.ReviewOffsetY, previous.IsDesignCoordinate) |
| 135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(design.X) |
| 135 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(design.Y) |
| 135 | if | 조건에 따라 분기합니다: if (!double.IsFinite(design.X) &#124;&#124; !double.IsFinite(design.Y)) |
| 136 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException("기존 Review Offset 값이 유효하지 않습니다.") |
| 136 | throw | 예외를 발생/전달합니다: throw new InvalidDataException("기존 Review Offset 값이 유효하지 않습니다."); |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignShotOffsetData.RoundValue(design.X + delta.X) |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignShotOffsetData.RoundValue(design.Y + delta.Y) |
| 137 | assignment | 값을 대상에 대입합니다: rows[key] = new(shot.CellNo, key.Item2, CAlignShotOffsetData.RoundValue(design.X + delta.X), CAlignShotOffsetData.RoundValue(design.Y + delta.Y)) { IsDesignCoordinate = true } |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(shot.CellNo, key.Item2, CAlignShotOffsetData.RoundValue(design.X + delta.X), CAlignShotOffsetData.RoundValue(design.Y + delta.Y)) { IsDesignCoordinate = true } |
| 139 | assignment | 값을 대상에 대입합니다: IsDesignCoordinate = true |
| 143 | local-declaration | 지역 변수를 선언합니다: ST_REVIEW_OFFSET_FILE_DATA saved; |
| 144 | try | 예외 처리 범위입니다: try |
| 146 | assignment | 값을 대상에 대입합니다: saved = await offsets.SaveNewFromSource( plan.Request.Plan.RecipeId, rows.Values.OrderBy(row => row.CellId).ThenBy(row => row.ShotId).ToArray(), result.ResultFilePath, allowDuplicate: false, token).ConfigureAwait(false) |
| 146 | await | 비동기 완료를 기다립니다: await offsets.SaveNewFromSource( plan.Request.Plan.RecipeId, rows.Values.OrderBy(row => row.CellId).ThenBy(row => row.ShotId).ToArray(), result.ResultFilePath, allowDuplicate: false, token).ConfigureAwait(false) |
| 146 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: offsets.SaveNewFromSource( plan.Request.Plan.RecipeId, rows.Values.OrderBy(row => row.CellId).ThenBy(row => row.ShotId).ToArray(), result.ResultFilePath, allowDuplicate: false, token).ConfigureAwait(false) |
| 146 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: offsets.SaveNewFromSource( plan.Request.Plan.RecipeId, rows.Values.OrderBy(row => row.CellId).ThenBy(row => row.ShotId).ToArray(), result.ResultFilePath, allowDuplicate: false, token) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Values.OrderBy(row => row.CellId).ThenBy(row => row.ShotId).ToArray() |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Values.OrderBy(row => row.CellId).ThenBy(row => row.ShotId) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Values.OrderBy(row => row.CellId) |
| 153 | catch | 지정 예외를 처리합니다: catch (CReviewOffsetDuplicateSourceException duplicate) |
| 155 | local-declaration | 지역 변수를 선언합니다: var existing = duplicate.ExistingApplication; |
| 155 | variable-initializer | 변수의 초기값을 지정합니다: existing = duplicate.ExistingApplication |
| 156 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: existing.AppliedAt.ToLocalTime() |
| 156 | local-declaration | 지역 변수를 선언합니다: var appliedAt = existing.AppliedAt.ToLocalTime(); |
| 156 | variable-initializer | 변수의 초기값을 지정합니다: appliedAt = existing.AppliedAt.ToLocalTime() |
| 157 | assignment | 값을 대상에 대입합니다: Outcome = $"{appliedAt:yyyy년 MM월 dd일} 이력에 동일한 Review Result가 있어 " + $"자동 Review Offset 적용을 NG 처리했습니다. Source={existing.SourceResultFile} / " + $"기존 Offset={existing.OffsetFile}" |
| 160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.RecordAutoFineLog("AUTO_REVIEW_OFFSET_DUPLICATE_SOURCE", Outcome) |
| 161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(duplicate) |
| 162 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidDataException(Outcome, duplicate) |
| 162 | throw | 예외를 발생/전달합니다: throw new InvalidDataException(Outcome, duplicate); |
| 165 | assignment | 값을 대상에 대입합니다: _saved = true |
| 166 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.FineMonitor.MarkOffsetSaved(result.RunId, saved.FileName) |
| 167 | assignment | 값을 대상에 대입합니다: Outcome = $"전체 OK · {deltas.Count:N0} Shots FINE 누적 보정 저장 · 다음 Glass에 적용 / {saved.FileName}" |
| 168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: review.RecordAutoFineLog("AUTO_REVIEW_OFFSET_SAVED", Outcome) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SaveCore"]
 N0["L100 if"]
 M -->|포함| N0
 N1["L104 if"]
 M -->|포함| N1
 N2["L113 if"]
 M -->|포함| N2
 N3["L125 if"]
 M -->|포함| N3
 N4["L128 foreach"]
 M -->|포함| N4
 N5["L135 if"]
 N4 -->|포함| N5
 N6["L144 try"]
 M -->|포함| N6
 N7["L153 catch"]
 N6 -->|포함| N7
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateMeasurements` · L171–199

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:171–199](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L171-L199)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] Drilling.Common.Review.CAutoFineReviewCoordinator.ValidateMeasurements(Drilling.Common.Review.ST_AUTO_FINE_PLAN, Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| plan | Drilling.Common.Review.ST_AUTO_FINE_PLAN | None | False /  |
| result | Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:55–55](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L55-L55) | ValidateMeasurements | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:102–102](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L102-L102) | ValidateMeasurements | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 176 | result.Lines.SelectMany(line => line.Points).ToArray | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ToArray<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 176 | result.Lines.SelectMany | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.SelectMany<Drilling.Common.Review.ST_FINE_REVIEW_LINE, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_FINE_REVIEW_LINE, System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>) |
| 177 | string.Equals | resolved | bool string.Equals(string?, string?, System.StringComparison) |
| 178 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 180 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 181 | new HashSet<(string Key, int Head, int Cell, int Shot, int Beam)> | resolved | System.Collections.Generic.HashSet<(string Key, int Head, int Cell, int Shot, int Beam)>.HashSet() |
| 184 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 184 | pending.Add | resolved | bool System.Collections.Generic.HashSet<(string Key, int Head, int Cell, int Shot, int Beam)>.Add((string Key, int Head, int Cell, int Shot, int Beam)) |
| 184 | Identity | resolved | (string Key, int Head, int Cell, int Shot, int Beam) Identity(Drilling.Common.Review.ST_REVIEW_PLAN_POINT) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:198 |
| 185 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 191 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 191 | pending.Remove | resolved | bool System.Collections.Generic.HashSet<(string Key, int Head, int Cell, int Shot, int Beam)>.Remove((string Key, int Head, int Cell, int Shot, int Beam)) |
| 191 | Identity | resolved | (string Key, int Head, int Cell, int Shot, int Beam) Identity(Drilling.Common.Review.ST_REVIEW_PLAN_POINT) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:198 |
| 192 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 194 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 175 | local-declaration | 지역 변수를 선언합니다: var expected = plan.Request.Plan.Points; |
| 175 | variable-initializer | 변수의 초기값을 지정합니다: expected = plan.Request.Plan.Points |
| 176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: result.Lines.SelectMany(line => line.Points).ToArray() |
| 176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: result.Lines.SelectMany(line => line.Points) |
| 176 | local-declaration | 지역 변수를 선언합니다: var measured = result.Lines.SelectMany(line => line.Points).ToArray(); |
| 176 | variable-initializer | 변수의 초기값을 지정합니다: measured = result.Lines.SelectMany(line => line.Points).ToArray() |
| 177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Equals(result.RecipeId, plan.Request.Plan.RecipeId, StringComparison.OrdinalIgnoreCase) |
| 177 | if | 조건에 따라 분기합니다: if (!string.Equals(result.RecipeId, plan.Request.Plan.RecipeId, StringComparison.OrdinalIgnoreCase)) |
| 178 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("AUTO Review 결과의 Recipe ID가 검사 계획과 일치하지 않습니다.") |
| 178 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("AUTO Review 결과의 Recipe ID가 검사 계획과 일치하지 않습니다."); |
| 179 | if | 조건에 따라 분기합니다: if (expected.Count == 0 &#124;&#124; measured.Length != expected.Count) |
| 180 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"AUTO Review 검사점 개수가 일치하지 않습니다: 계획 {expected.Count:N0}개 / 결과 {measured.Length:N0}개.") |
| 180 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"AUTO Review 검사점 개수가 일치하지 않습니다: 계획 {expected.Count:N0}개 / 결과 {measured.Length:N0}개."); |
| 181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<(string Key, int Head, int Cell, int Shot, int Beam)>() |
| 181 | local-declaration | 지역 변수를 선언합니다: var pending = new HashSet<(string Key, int Head, int Cell, int Shot, int Beam)>(); |
| 181 | variable-initializer | 변수의 초기값을 지정합니다: pending = new HashSet<(string Key, int Head, int Cell, int Shot, int Beam)>() |
| 182 | foreach | 컬렉션 요소를 순회합니다: foreach (var point in expected) |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(point.ShotKey) |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: pending.Add(Identity(point)) |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Identity(point) |
| 184 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(point.ShotKey) &#124;&#124; !pending.Add(Identity(point))) |
| 185 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("AUTO Review 검사 계획에 비어 있거나 중복된 검사점이 있습니다.") |
| 185 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("AUTO Review 검사 계획에 비어 있거나 중복된 검사점이 있습니다."); |
| 188 | foreach | 컬렉션 요소를 순회합니다: foreach (var point in measured) |
| 191 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(point.ShotKey) |
| 191 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: pending.Remove(Identity(point)) |
| 191 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Identity(point) |
| 191 | if | 조건에 따라 분기합니다: if (string.IsNullOrWhiteSpace(point.ShotKey) &#124;&#124; !pending.Remove(Identity(point))) |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"AUTO Review 결과가 중복되었거나 검사 계획과 일치하지 않습니다: " + $"Head {point.HeadNo} / Cell {point.CellNo} / Shot {point.ShotNo} / {point.ShotKey} / Beam {point.BeamNo}.") |
| 192 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"AUTO Review 결과가 중복되었거나 검사 계획과 일치하지 않습니다: " + $"Head {point.HeadNo} / Cell {point.CellNo} / Shot {point.ShotNo} / {point.ShotKey} / Beam {point.BeamNo}."); |
| 193 | if | 조건에 따라 분기합니다: if (point.State is not (EN_REVIEW_POINT_STATE.Ok or EN_REVIEW_POINT_STATE.Ng)) |
| 194 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("미검사 또는 유효하지 않은 결과가 있어 Review COMPLETE 및 보정 저장을 진행할 수 없습니다.") |
| 194 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("미검사 또는 유효하지 않은 결과가 있어 Review COMPLETE 및 보정 저장을 진행할 수 없습니다."); |
| 197 | return | 호출자에게 값 또는 제어를 반환합니다: return measured; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateMeasurements"]
 N0["L177 if"]
 M -->|포함| N0
 N1["L179 if"]
 M -->|포함| N1
 N2["L182 foreach"]
 M -->|포함| N2
 N3["L184 if"]
 N2 -->|포함| N3
 N4["L188 foreach"]
 M -->|포함| N4
 N5["L191 if"]
 N4 -->|포함| N5
 N6["L193 if"]
 N4 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Identity` · L198–198

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:198–198](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L198-L198)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | (string Key, int Head, int Cell, int Shot, int Beam) Identity(Drilling.Common.Review.ST_REVIEW_PLAN_POINT) |
| 접근/수식자 | Private / static |
| 반환/값 타입 | (string Key, int Head, int Cell, int Shot, int Beam) |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| point | Drilling.Common.Review.ST_REVIEW_PLAN_POINT | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:184–184](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L184-L184) | Identity | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:191–191](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L191-L191) | Identity | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 198 | point.ShotKey.Trim().ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 198 | point.ShotKey.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: point.ShotKey.Trim().ToUpperInvariant() |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: point.ShotKey.Trim() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Normalize` · L201–201

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:201–201](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L201-L201)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Review.CAutoFineReviewCoordinator.Normalize(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| text | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:127–127](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L127-L127) | Normalize | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:132–132](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L132-L132) | Normalize | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 201 | text.Trim().Replace("-", "_", StringComparison.Ordinal).Replace(".", "_", StringComparison.Ordinal).ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 201 | text.Trim().Replace("-", "_", StringComparison.Ordinal).Replace | resolved | string string.Replace(string, string?, System.StringComparison) |
| 201 | text.Trim().Replace | resolved | string string.Replace(string, string?, System.StringComparison) |
| 201 | text.Trim | resolved | string string.Trim() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.Trim().Replace("-", "_", StringComparison.Ordinal).Replace(".", "_", StringComparison.Ordinal).ToUpperInvariant() |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.Trim().Replace("-", "_", StringComparison.Ordinal).Replace(".", "_", StringComparison.Ordinal) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.Trim().Replace("-", "_", StringComparison.Ordinal) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: text.Trim() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `BuildPlan` · L203–314

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:203–314](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L203-L314)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.ST_AUTO_FINE_PLAN Drilling.Common.Review.CAutoFineReviewCoordinator.BuildPlan(Drilling.Common.Review.ST_AUTO_REVIEW_INPUT, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | Drilling.Common.Review.ST_AUTO_FINE_PLAN |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| input | Drilling.Common.Review.ST_AUTO_REVIEW_INPUT | None | False /  |
| settings | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CReviewManager.cs:2612–2612](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L2612-L2612) | CAutoFineReviewCoordinator.BuildPlan | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 208 | new | resolved | Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS.ST_AUTO_REVIEW_OPTIONS(int, Drilling.Common.Review.EN_FINE_INSPECTION_METHOD, int, bool) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:342 |
| 210 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 211 | input.Recipe.Parameters.Where(item => item.Key.Length > 0).GroupBy(item => item.Key, StringComparer.OrdinalIgnoreCase).ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string, string>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 211 | input.Recipe.Parameters.Where(item => item.Key.Length > 0).GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.GroupBy<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 211 | input.Recipe.Parameters.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Where<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 211 | group.Last | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Last<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 212 | settings.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.Where<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, bool>) |
| 215 | parameters.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<string, string>.ContainsKey(string) |
| 220 | new ReadOnlyDictionary<string, string> | resolved | System.Collections.ObjectModel.ReadOnlyDictionary<string, string>.ReadOnlyDictionary(System.Collections.Generic.IDictionary<string, string>) |
| 223 | parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToArray<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 223 | parameters.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>.Select<System.Collections.Generic.KeyValuePair<string, string>, Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<System.Collections.Generic.KeyValuePair<string, string>, Drilling.Common.Managers.ST_RECIPE_PARAMETER>) |
| 223 | new ST_RECIPE_PARAMETER | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER.ST_RECIPE_PARAMETER(string, string, string, string, string, string, string, string, string, bool, bool, int, Drilling.Common.Managers.EN_RECIPE_DATA_TYPE, double, double, double, System.Collections.Generic.IReadOnlyDictionary<string, string>?) · Drilling.Common/Managers/CRecipeManager.cs:355 |
| 225 | CReviewManager.CreateShotBeamPositionCalculator | resolved | System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int, Drilling.Common.Review.ST_REVIEW_BEAM_POSITION> Drilling.Common.Review.CReviewManager.CreateShotBeamPositionCalculator(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, double, double) · Drilling.Common/Review/CReviewManager.cs:151 |
| 225 | CScannerAxisTransform.ReadStageDirection | resolved | double Drilling.Common.Recipe.CScannerAxisTransform.ReadStageDirection(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:1233 |
| 226 | CRecipeShotMaskingPlan.Build | resolved | Drilling.Common.Recipe.CRecipeShotMaskingPlan Drilling.Common.Recipe.CRecipeShotMaskingPlan.Build(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:813 |
| 227 | CShotCoordinatePlanBuilder.Build | resolved | Drilling.Common.Recipe.ST_SHOT_COORDINATE_PLAN Drilling.Common.Recipe.CShotCoordinatePlanBuilder.Build(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:11 |
| 228 | shots.Select(shot => new ST_REVIEW_PLAN_POINT( shot.SequenceNo, shot.ShotKey, shot.HeadNo, shot.CellNo, shot.CellShotNo, shot.GroupCountX, shot.GroupCountY, shot.HeadNo > 0 && !masking.EvaluateShot(shot).ShouldSkipLaser, shot.DesignX, shot.DesignY, 0, 0, 0, 0, EN_REVIEW_POINT_STATE.Ready, "WAIT" ) { BeamNo = ST_AUTO_REVIEW_OPTIONS.BeamNo }).ToArray | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ToArray<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 228 | shots.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Recipe.ST_HEAD_SHOT_POINT>.Select<Drilling.Common.Recipe.ST_HEAD_SHOT_POINT, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Recipe.ST_HEAD_SHOT_POINT, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) |
| 228 | new ST_REVIEW_PLAN_POINT | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT.ST_REVIEW_PLAN_POINT(int, string, int, int, int, int, int, bool, double, double, double, double, double, double, Drilling.Common.Review.EN_REVIEW_POINT_STATE, string) · Drilling.Common/Review/CReviewManager.cs:3983 |
| 236 | masking.EvaluateShot | resolved | Drilling.Common.Recipe.ST_RECIPE_SHOT_MASKING_RESULT Drilling.Common.Recipe.CRecipeShotMaskingPlan.EvaluateShot(Drilling.Common.Recipe.ST_HEAD_SHOT_POINT) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:853 |
| 246 | all.Where(point => point.Use).ToArray | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ToArray<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 246 | all.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Where<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, bool>) |
| 248 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 249 | new ST_REVIEW_PLAN | resolved | Drilling.Common.Review.ST_REVIEW_PLAN.ST_REVIEW_PLAN(string, int, double, double, Drilling.Common.Review.EN_VISION_FLIP_TYPE, System.DateTimeOffset, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) · Drilling.Common/Review/CReviewManager.cs:4081 |
| 251 | targets.Select(point => point.CellNo).Distinct().Count | resolved | int System.Collections.Generic.IEnumerable<int>.Count<int>() |
| 251 | targets.Select(point => point.CellNo).Distinct | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<int>.Distinct<int>() |
| 251 | targets.Select | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Select<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>) |
| 252 | Tolerance | resolved | double Tolerance(string) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:313 |
| 253 | Tolerance | resolved | double Tolerance(string) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:313 |
| 254 | CReviewManager.ParseVisionFlipType | resolved | Drilling.Common.Review.EN_VISION_FLIP_TYPE Drilling.Common.Review.CReviewManager.ParseVisionFlipType(string?, string?, string?) · Drilling.Common/Review/CReviewManager.cs:3664 |
| 254 | parameters.GetValueOrDefault | resolved | string? System.Collections.Generic.IReadOnlyDictionary<string, string>.GetValueOrDefault<string, string>(string) |
| 254 | parameters.GetValueOrDefault | resolved | string? System.Collections.Generic.IReadOnlyDictionary<string, string>.GetValueOrDefault<string, string>(string) |
| 254 | parameters.GetValueOrDefault | resolved | string? System.Collections.Generic.IReadOnlyDictionary<string, string>.GetValueOrDefault<string, string>(string) |
| 258 | CReviewRulePlanBuilder.Build(source, new(EN_REVIEW_CORRECTION_RULE.Fine, EN_REVIEW_CORRECTION_SCOPE.HeadCell, ST_AUTO_REVIEW_OPTIONS.BeamNo, "", EN_REVIEW_REFERENCE_LINE.First, input.Options.LineCount)).ShotKeys.ToHashSet | resolved | System.Collections.Generic.HashSet<string> System.Collections.Generic.IEnumerable<string>.ToHashSet<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 258 | CReviewRulePlanBuilder.Build | resolved | Drilling.Common.Review.ST_REVIEW_RULE_PLAN Drilling.Common.Review.CReviewRulePlanBuilder.Build(Drilling.Common.Review.ST_REVIEW_PLAN, Drilling.Common.Review.ST_REVIEW_RULE_CONFIGURATION) · Drilling.Common/Review/CReviewRulePlanBuilder.cs:5 |
| 258 | new | resolved | Drilling.Common.Review.ST_REVIEW_RULE_CONFIGURATION.ST_REVIEW_RULE_CONFIGURATION(Drilling.Common.Review.EN_REVIEW_CORRECTION_RULE, Drilling.Common.Review.EN_REVIEW_CORRECTION_SCOPE, int, string, Drilling.Common.Review.EN_REVIEW_REFERENCE_LINE, int) · Drilling.Common/Review/CReviewRulePlanBuilder.cs:524 |
| 259 | FindTopmostCells | resolved | System.Collections.Generic.HashSet<int> Drilling.Common.Review.CAutoFineReviewCoordinator.FindTopmostCells(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:316 |
| 260 | all.Select(point => point.CellNo).Distinct().ToDictionary | resolved | System.Collections.Generic.Dictionary<int, int> System.Collections.Generic.IEnumerable<int>.ToDictionary<int, int, int>(System.Func<int, int>, System.Func<int, int>) |
| 260 | all.Select(point => point.CellNo).Distinct | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<int>.Distinct<int>() |
| 260 | all.Select | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Select<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>) |
| 260 | CRecipeModelPixelCountReader.ReadCellModelType | resolved | int Drilling.Common.Recipe.CRecipeModelPixelCountReader.ReadCellModelType(System.Collections.Generic.IReadOnlyDictionary<string, string>, int, int) · Drilling.Common/Recipe/CCellPatternCalculator.cs:433 |
| 261 | models.Values.GroupBy(model => model).ToDictionary | resolved | System.Collections.Generic.Dictionary<int, int> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<int, int>>.ToDictionary<System.Linq.IGrouping<int, int>, int, int>(System.Func<System.Linq.IGrouping<int, int>, int>, System.Func<System.Linq.IGrouping<int, int>, int>) |
| 261 | models.Values.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<int, int>> System.Collections.Generic.IEnumerable<int>.GroupBy<int, int>(System.Func<int, int>) |
| 261 | group.Count | resolved | int System.Collections.Generic.IEnumerable<int>.Count<int>() |
| 262 | new List<ST_FINE_REVIEW_LINE> | resolved | System.Collections.Generic.List<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.List() |
| 263 | targets.Where(point => selected.Contains(point.ShotKey) && (topCells is null &#124;&#124; topCells.Contains(point.CellNo))).GroupBy(point => models[point.CellNo]).OrderByDescending(group => modelCounts[group.Key]).ThenBy | resolved | System.Linq.IOrderedEnumerable<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Linq.IOrderedEnumerable<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>.ThenBy<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, int>(System.Func<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, int>) |
| 263 | targets.Where(point => selected.Contains(point.ShotKey) && (topCells is null &#124;&#124; topCells.Contains(point.CellNo))).GroupBy(point => models[point.CellNo]).OrderByDescending | resolved | System.Linq.IOrderedEnumerable<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>.OrderByDescending<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, int>(System.Func<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, int>) |
| 263 | targets.Where(point => selected.Contains(point.ShotKey) && (topCells is null &#124;&#124; topCells.Contains(point.CellNo))).GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.GroupBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>) |
| 263 | targets.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Where<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, bool>) |
| 263 | selected.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |
| 263 | topCells.Contains | resolved | bool System.Collections.Generic.HashSet<int>.Contains(int) |
| 266 | model.GroupBy(point => Math.Round(point.DesignY, 6)).OrderBy | resolved | System.Linq.IOrderedEnumerable<System.Linq.IGrouping<double, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<double, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>.OrderBy<System.Linq.IGrouping<double, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, double>(System.Func<System.Linq.IGrouping<double, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, double>) |
| 266 | model.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<double, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.GroupBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>) |
| 266 | Math.Round | resolved | double System.Math.Round(double, int) |
| 269 | (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).Select(point => { var position = calculate(point, ST_AUTO_REVIEW_OPTIONS.BeamNo); return point with { ReviewTargetX = position.ReviewX, ReviewTargetY = position.StageY }; }).ToArray | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ToArray<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 269 | (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Select<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) |
| 269 | (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ThenBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>) |
| 269 | (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ThenBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>) |
| 269 | line.OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.OrderBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>) |
| 269 | line.OrderByDescending | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.OrderByDescending<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>) |
| 271 | calculate | resolved · 동적 구현 선택 가능 | Drilling.Common.Review.ST_REVIEW_BEAM_POSITION System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int, Drilling.Common.Review.ST_REVIEW_BEAM_POSITION>.Invoke(Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int) |
| 278 | lines.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.Add(Drilling.Common.Review.ST_FINE_REVIEW_LINE) |
| 278 | new | resolved | Drilling.Common.Review.ST_FINE_REVIEW_LINE.ST_FINE_REVIEW_LINE(string, int, int, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.Common.Review.EN_FINE_REVIEW_LINE_STATE) · Drilling.Common/Review/CReviewManager.cs:4366 |
| 278 | line.Key.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |
| 278 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Array.AsReadOnly<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(Drilling.Common.Review.ST_REVIEW_PLAN_POINT[]) |
| 283 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 286 | lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).ToArray | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ToArray<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 286 | lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX).ThenBy(point => point.CellNo).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ThenBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>) |
| 286 | lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX).ThenBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ThenBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>) |
| 286 | lines.SelectMany(line => line.Points).OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.OrderBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>) |
| 286 | lines.SelectMany | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.SelectMany<Drilling.Common.Review.ST_FINE_REVIEW_LINE, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_FINE_REVIEW_LINE, System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>) |
| 289 | points.Max | resolved | double System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Max<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>) |
| 289 | points.Min | resolved | double System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Min<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>) |
| 290 | points.Max | resolved | double System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Max<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>) |
| 290 | points.Min | resolved | double System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Min<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, double>) |
| 291 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 292 | lines.Select(line => line.ModelNo).Distinct().ToArray | resolved | int[] System.Collections.Generic.IEnumerable<int>.ToArray<int>() |
| 292 | lines.Select(line => line.ModelNo).Distinct | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<int>.Distinct<int>() |
| 292 | lines.Select | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.Select<Drilling.Common.Review.ST_FINE_REVIEW_LINE, int>(System.Func<Drilling.Common.Review.ST_FINE_REVIEW_LINE, int>) |
| 293 | new | resolved | Drilling.Common.Review.ST_FINE_REVIEW_LINE.ST_FINE_REVIEW_LINE(string, int, int, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.Common.Review.EN_FINE_REVIEW_LINE_STATE) · Drilling.Common/Review/CReviewManager.cs:4366 |
| 293 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Array.AsReadOnly<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(Drilling.Common.Review.ST_REVIEW_PLAN_POINT[]) |
| 297 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Array.AsReadOnly<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(Drilling.Common.Review.ST_REVIEW_PLAN_POINT[]) |
| 297 | lines.SelectMany(line => line.Points).ToArray | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ToArray<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 297 | lines.SelectMany | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.SelectMany<Drilling.Common.Review.ST_FINE_REVIEW_LINE, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_FINE_REVIEW_LINE, System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>) |
| 300 | new ST_FINE_REVIEW_REQUEST | resolved | Drilling.Common.Review.ST_FINE_REVIEW_REQUEST.ST_FINE_REVIEW_REQUEST(Drilling.Common.Review.ST_REVIEW_PLAN, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_FINE_REVIEW_LINE>, Drilling.Common.Review.EN_FINE_INSPECTION_METHOD, int, bool) · Drilling.Common/Review/CReviewManager.cs:4367 |
| 300 | lines.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Review.ST_FINE_REVIEW_LINE> System.Collections.Generic.List<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.AsReadOnly() |
| 305 | new | resolved | Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ST_FINE_REVIEW_CONTEXT(string, string, string, int, System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:358 |
| 312 | new | resolved | Drilling.Common.Review.ST_AUTO_FINE_PLAN.ST_AUTO_FINE_PLAN(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:353 |
| 312 | Array.Empty<ST_REVIEW_PLAN_POINT> | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Array.Empty<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 312 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Array.AsReadOnly<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(Drilling.Common.Review.ST_REVIEW_PLAN_POINT[]) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 207 | if | 조건에 따라 분기합니다: if (input.ZeroLineFollowUp) |
| 208 | assignment | 값을 대상에 대입합니다: input = input with { Options = new(1, EN_FINE_INSPECTION_METHOD.Flying, 1, false) } |
| 208 | assignment | 값을 대상에 대입합니다: Options = new(1, EN_FINE_INSPECTION_METHOD.Flying, 1, false) |
| 208 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(1, EN_FINE_INSPECTION_METHOD.Flying, 1, false) |
| 209 | if | 조건에 따라 분기합니다: if (input.Options.LineCount is not (1 or 3 or 5 or 7) &#124;&#124; input.Options.Method is not (EN_FINE_INSPECTION_METHOD.Flying or EN_FINE_INSPECTION_METHOD.PtoP) &#124;&#124; input.Options.CountMismatchRetries is < 1 or > 3) |
| 210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("AUTO Review 검사 방식 또는 라인 수가 올바르지 않습니다.") |
| 210 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("AUTO Review 검사 방식 또는 라인 수가 올바르지 않습니다."); |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: input.Recipe.Parameters.Where(item => item.Key.Length > 0).GroupBy(item => item.Key, StringComparer.OrdinalIgnoreCase).ToDictionary(group => group.Key, group => group.Last().Value, StringComparer.OrdinalIgnoreCase) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: input.Recipe.Parameters.Where(item => item.Key.Length > 0).GroupBy(item => item.Key, StringComparer.OrdinalIgnoreCase) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: input.Recipe.Parameters.Where(item => item.Key.Length > 0) |
| 211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 211 | local-declaration | 지역 변수를 선언합니다: var parameters = input.Recipe.Parameters.Where(item => item.Key.Length > 0).GroupBy(item => item.Key, StringComparer.OrdinalIgnoreCase).ToDictionary(group => group.Key, group => group.Last().Value, StringComparer.OrdinalIgnoreCase |
| 211 | variable-initializer | 변수의 초기값을 지정합니다: parameters = input.Recipe.Parameters.Where(item => item.Key.Length > 0).GroupBy(item => item.Key, StringComparer.OrdinalIgnoreCase).ToDictionary(group => group.Key, group => group.Last().Value, StringComparer.OrdinalIgnoreCase) |
| 212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settings.Where(item => item.Key.Length > 0) |
| 212 | foreach | 컬렉션 요소를 순회합니다: foreach (var setting in settings.Where(item => item.Key.Length > 0)) |
| 215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.ContainsKey(setting.Key) |
| 215 | if | 조건에 따라 분기합니다: if (!input.ZeroLineFollowUp &#124;&#124; !parameters.ContainsKey(setting.Key)) |
| 216 | assignment | 값을 대상에 대입합니다: parameters[setting.Key] = setting.Value |
| 218 | assignment | 값을 대상에 대입합니다: parameters["SHIFT_OFFSET_X"] = "0.000000" |
| 219 | assignment | 값을 대상에 대입합니다: parameters["SHIFT_OFFSET_Y"] = "0.000000" |
| 220 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ReadOnlyDictionary<string, string>(parameters) |
| 220 | local-declaration | 지역 변수를 선언합니다: var frozen = new ReadOnlyDictionary<string, string>(parameters); |
| 220 | variable-initializer | 변수의 초기값을 지정합니다: frozen = new ReadOnlyDictionary<string, string>(parameters) |
| 221 | local-declaration | 지역 변수를 선언합니다: var effectiveRecipe = input.Recipe with { Parameters = parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray() }; |
| 221 | variable-initializer | 변수의 초기값을 지정합니다: effectiveRecipe = input.Recipe with { Parameters = parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray() } |
| 223 | assignment | 값을 대상에 대입합니다: Parameters = parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray() |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)).ToArray() |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Select(pair => new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key)) |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_RECIPE_PARAMETER(pair.Key, pair.Value, "", "", pair.Value, Key: pair.Key) |
| 225 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewManager.CreateShotBeamPositionCalculator(effectiveRecipe, CScannerAxisTransform.ReadStageDirection(frozen)) |
| 225 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CScannerAxisTransform.ReadStageDirection(frozen) |
| 225 | local-declaration | 지역 변수를 선언합니다: var calculate = CReviewManager.CreateShotBeamPositionCalculator(effectiveRecipe, CScannerAxisTransform.ReadStageDirection(frozen)); |
| 225 | variable-initializer | 변수의 초기값을 지정합니다: calculate = CReviewManager.CreateShotBeamPositionCalculator(effectiveRecipe, CScannerAxisTransform.ReadStageDirection(frozen)) |
| 226 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeShotMaskingPlan.Build(frozen) |
| 226 | local-declaration | 지역 변수를 선언합니다: var masking = CRecipeShotMaskingPlan.Build(frozen); |
| 226 | variable-initializer | 변수의 초기값을 지정합니다: masking = CRecipeShotMaskingPlan.Build(frozen) |
| 227 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CShotCoordinatePlanBuilder.Build(frozen) |
| 227 | local-declaration | 지역 변수를 선언합니다: var shots = CShotCoordinatePlanBuilder.Build(frozen).Shots; |
| 227 | variable-initializer | 변수의 초기값을 지정합니다: shots = CShotCoordinatePlanBuilder.Build(frozen).Shots |
| 228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shots.Select(shot => new ST_REVIEW_PLAN_POINT( shot.SequenceNo, shot.ShotKey, shot.HeadNo, shot.CellNo, shot.CellShotNo, shot.GroupCountX, shot.GroupCountY, shot.HeadNo > 0 && !masking.EvaluateShot(shot).ShouldSkipLaser,… |
| 228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shots.Select(shot => new ST_REVIEW_PLAN_POINT( shot.SequenceNo, shot.ShotKey, shot.HeadNo, shot.CellNo, shot.CellShotNo, shot.GroupCountX, shot.GroupCountY, shot.HeadNo > 0 && !masking.EvaluateShot(shot).ShouldSkipLaser,… |
| 228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_REVIEW_PLAN_POINT( shot.SequenceNo, shot.ShotKey, shot.HeadNo, shot.CellNo, shot.CellShotNo, shot.GroupCountX, shot.GroupCountY, shot.HeadNo > 0 && !masking.EvaluateShot(shot).ShouldSkipLaser, shot.DesignX, shot.D… |
| 228 | local-declaration | 지역 변수를 선언합니다: var all = shots.Select(shot => new ST_REVIEW_PLAN_POINT( shot.SequenceNo, shot.ShotKey, shot.HeadNo, shot.CellNo, shot.CellShotNo, shot.GroupCountX, shot.GroupCountY, shot.HeadNo > 0 && !masking.EvaluateShot(shot).ShouldSkipLaser, |
| 228 | variable-initializer | 변수의 초기값을 지정합니다: all = shots.Select(shot => new ST_REVIEW_PLAN_POINT( shot.SequenceNo, shot.ShotKey, shot.HeadNo, shot.CellNo, shot.CellShotNo, shot.GroupCountX, shot.GroupCountY, shot.HeadNo > 0 && !masking.EvaluateShot(shot).ShouldSkipLaser, sho |
| 236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: masking.EvaluateShot(shot) |
| 245 | assignment | 값을 대상에 대입합니다: BeamNo = ST_AUTO_REVIEW_OPTIONS.BeamNo |
| 246 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: all.Where(point => point.Use).ToArray() |
| 246 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: all.Where(point => point.Use) |
| 246 | local-declaration | 지역 변수를 선언합니다: var targets = all.Where(point => point.Use).ToArray(); |
| 246 | variable-initializer | 변수의 초기값을 지정합니다: targets = all.Where(point => point.Use).ToArray() |
| 247 | if | 조건에 따라 분기합니다: if (targets.Length == 0) |
| 248 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("AUTO Review 검사 대상 Shot이 없습니다.") |
| 248 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("AUTO Review 검사 대상 Shot이 없습니다."); |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_REVIEW_PLAN( input.Recipe.Id, targets.Select(point => point.CellNo).Distinct().Count(), Tolerance("REVIEW_TOLERANCE_X"), Tolerance("REVIEW_TOLERANCE_Y"), CReviewManager.ParseVisionFlipType(parameters.GetValueOrDef… |
| 249 | local-declaration | 지역 변수를 선언합니다: var source = new ST_REVIEW_PLAN( input.Recipe.Id, targets.Select(point => point.CellNo).Distinct().Count(), Tolerance("REVIEW_TOLERANCE_X"), Tolerance("REVIEW_TOLERANCE_Y"), CReviewManager.ParseVisionFlipType(parameters.GetValueOr |
| 249 | variable-initializer | 변수의 초기값을 지정합니다: source = new ST_REVIEW_PLAN( input.Recipe.Id, targets.Select(point => point.CellNo).Distinct().Count(), Tolerance("REVIEW_TOLERANCE_X"), Tolerance("REVIEW_TOLERANCE_Y"), CReviewManager.ParseVisionFlipType(parameters.GetValueOrDefa |
| 251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Select(point => point.CellNo).Distinct().Count() |
| 251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Select(point => point.CellNo).Distinct() |
| 251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Select(point => point.CellNo) |
| 252 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Tolerance("REVIEW_TOLERANCE_X") |
| 253 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Tolerance("REVIEW_TOLERANCE_Y") |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewManager.ParseVisionFlipType(parameters.GetValueOrDefault("VisionXFlip"), parameters.GetValueOrDefault("VisionYFlip"), parameters.GetValueOrDefault("VisionXyFlip")) |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.GetValueOrDefault("VisionXFlip") |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.GetValueOrDefault("VisionYFlip") |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.GetValueOrDefault("VisionXyFlip") |
| 258 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewRulePlanBuilder.Build(source, new(EN_REVIEW_CORRECTION_RULE.Fine, EN_REVIEW_CORRECTION_SCOPE.HeadCell, ST_AUTO_REVIEW_OPTIONS.BeamNo, "", EN_REVIEW_REFERENCE_LINE.First, input.Options.LineCount)).ShotKeys.ToHashSe… |
| 258 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewRulePlanBuilder.Build(source, new(EN_REVIEW_CORRECTION_RULE.Fine, EN_REVIEW_CORRECTION_SCOPE.HeadCell, ST_AUTO_REVIEW_OPTIONS.BeamNo, "", EN_REVIEW_REFERENCE_LINE.First, input.Options.LineCount)) |
| 258 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(EN_REVIEW_CORRECTION_RULE.Fine, EN_REVIEW_CORRECTION_SCOPE.HeadCell, ST_AUTO_REVIEW_OPTIONS.BeamNo, "", EN_REVIEW_REFERENCE_LINE.First, input.Options.LineCount) |
| 258 | local-declaration | 지역 변수를 선언합니다: var selected = CReviewRulePlanBuilder.Build(source, new(EN_REVIEW_CORRECTION_RULE.Fine, EN_REVIEW_CORRECTION_SCOPE.HeadCell, ST_AUTO_REVIEW_OPTIONS.BeamNo, "", EN_REVIEW_REFERENCE_LINE.First, input.Options.LineCount)).ShotKeys.ToH |
| 258 | variable-initializer | 변수의 초기값을 지정합니다: selected = CReviewRulePlanBuilder.Build(source, new(EN_REVIEW_CORRECTION_RULE.Fine, EN_REVIEW_CORRECTION_SCOPE.HeadCell, ST_AUTO_REVIEW_OPTIONS.BeamNo, "", EN_REVIEW_REFERENCE_LINE.First, input.Options.LineCount)).ShotKeys.ToHashS |
| 259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FindTopmostCells(frozen) |
| 259 | conditional-expression | 조건에 따라 결과식을 선택합니다: input.ZeroLineFollowUp ? FindTopmostCells(frozen) : null |
| 259 | local-declaration | 지역 변수를 선언합니다: var topCells = input.ZeroLineFollowUp ? FindTopmostCells(frozen) : null; |
| 259 | variable-initializer | 변수의 초기값을 지정합니다: topCells = input.ZeroLineFollowUp ? FindTopmostCells(frozen) : null |
| 260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: all.Select(point => point.CellNo).Distinct().ToDictionary(cell => cell, cell => CRecipeModelPixelCountReader.ReadCellModelType(parameters, cell)) |
| 260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: all.Select(point => point.CellNo).Distinct() |
| 260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: all.Select(point => point.CellNo) |
| 260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeModelPixelCountReader.ReadCellModelType(parameters, cell) |
| 260 | local-declaration | 지역 변수를 선언합니다: var models = all.Select(point => point.CellNo).Distinct().ToDictionary(cell => cell, cell => CRecipeModelPixelCountReader.ReadCellModelType(parameters, cell)); |
| 260 | variable-initializer | 변수의 초기값을 지정합니다: models = all.Select(point => point.CellNo).Distinct().ToDictionary(cell => cell, cell => CRecipeModelPixelCountReader.ReadCellModelType(parameters, cell)) |
| 261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: models.Values.GroupBy(model => model).ToDictionary(group => group.Key, group => group.Count()) |
| 261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: models.Values.GroupBy(model => model) |
| 261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Count() |
| 261 | local-declaration | 지역 변수를 선언합니다: var modelCounts = models.Values.GroupBy(model => model).ToDictionary(group => group.Key, group => group.Count()); |
| 261 | variable-initializer | 변수의 초기값을 지정합니다: modelCounts = models.Values.GroupBy(model => model).ToDictionary(group => group.Key, group => group.Count()) |
| 262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_FINE_REVIEW_LINE>() |
| 262 | local-declaration | 지역 변수를 선언합니다: var lines = new List<ST_FINE_REVIEW_LINE>(); |
| 262 | variable-initializer | 변수의 초기값을 지정합니다: lines = new List<ST_FINE_REVIEW_LINE>() |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Where(point => selected.Contains(point.ShotKey) && (topCells is null &#124;&#124; topCells.Contains(point.CellNo))).GroupBy(point => models[point.CellNo]).OrderByDescending(group => modelCounts[group.Key]).ThenBy(group => … |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Where(point => selected.Contains(point.ShotKey) && (topCells is null &#124;&#124; topCells.Contains(point.CellNo))).GroupBy(point => models[point.CellNo]).OrderByDescending(group => modelCounts[group.Key]) |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Where(point => selected.Contains(point.ShotKey) && (topCells is null &#124;&#124; topCells.Contains(point.CellNo))).GroupBy(point => models[point.CellNo]) |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: targets.Where(point => selected.Contains(point.ShotKey) && (topCells is null &#124;&#124; topCells.Contains(point.CellNo))) |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.Contains(point.ShotKey) |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: topCells.Contains(point.CellNo) |
| 263 | foreach | 컬렉션 요소를 순회합니다: foreach (var model in targets.Where(point => selected.Contains(point.ShotKey) && (topCells is null &#124;&#124; topCells.Contains(point.CellNo))).GroupBy(point => models[point.CellNo]).OrderByDescending(group => modelCounts[group.Key]).Then |
| 265 | local-declaration | 지역 변수를 선언합니다: var row = 0; |
| 265 | variable-initializer | 변수의 초기값을 지정합니다: row = 0 |
| 266 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: model.GroupBy(point => Math.Round(point.DesignY, 6)).OrderBy(group => group.Key) |
| 266 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: model.GroupBy(point => Math.Round(point.DesignY, 6)) |
| 266 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(point.DesignY, 6) |
| 266 | foreach | 컬렉션 요소를 순회합니다: foreach (var line in model.GroupBy(point => Math.Round(point.DesignY, 6)).OrderBy(group => group.Key)) |
| 268 | local-declaration | 지역 변수를 선언합니다: var leftToRight = row++ % 2 == 0; |
| 268 | variable-initializer | 변수의 초기값을 지정합니다: leftToRight = row++ % 2 == 0 |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo) |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo) |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.OrderBy(point => point.DesignX) |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.OrderByDescending(point => point.DesignX) |
| 269 | conditional-expression | 조건에 따라 결과식을 선택합니다: leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX) |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).Select(point => { var position = calculate(point, ST_AUTO_… |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).Select(point => { var position = calculate(point, ST_AUTO_… |
| 269 | local-declaration | 지역 변수를 선언합니다: var points = (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).Select(point => { var position = calculate(point, ST_AU |
| 269 | variable-initializer | 변수의 초기값을 지정합니다: points = (leftToRight ? line.OrderBy(point => point.DesignX) : line.OrderByDescending(point => point.DesignX)).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).Select(point => { var position = calculate(point, ST_AUTO_R |
| 271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: calculate(point, ST_AUTO_REVIEW_OPTIONS.BeamNo) |
| 271 | local-declaration | 지역 변수를 선언합니다: var position = calculate(point, ST_AUTO_REVIEW_OPTIONS.BeamNo); |
| 271 | variable-initializer | 변수의 초기값을 지정합니다: position = calculate(point, ST_AUTO_REVIEW_OPTIONS.BeamNo) |
| 272 | return | 호출자에게 값 또는 제어를 반환합니다: return point with { ReviewTargetX = position.ReviewX, ReviewTargetY = position.StageY }; |
| 274 | assignment | 값을 대상에 대입합니다: ReviewTargetX = position.ReviewX |
| 275 | assignment | 값을 대상에 대입합니다: ReviewTargetY = position.StageY |
| 278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Add(new($"B11:{model.Key}:{line.Key.ToString("R", CultureInfo.InvariantCulture)}", lines.Count + 1, model.Key, Array.AsReadOnly(points))) |
| 278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new($"B11:{model.Key}:{line.Key.ToString("R", CultureInfo.InvariantCulture)}", lines.Count + 1, model.Key, Array.AsReadOnly(points)) |
| 278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.Key.ToString("R", CultureInfo.InvariantCulture) |
| 278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(points) |
| 282 | if | 조건에 따라 분기합니다: if (lines.Count == 0) |
| 283 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("AUTO FINE 검사 라인을 만들 수 없습니다.") |
| 283 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("AUTO FINE 검사 라인을 만들 수 없습니다."); |
| 284 | if | 조건에 따라 분기합니다: if (input.ZeroLineFollowUp) |
| 286 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).ToArray() |
| 286 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo) |
| 286 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX).ThenBy(point => point.CellNo) |
| 286 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX) |
| 286 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.SelectMany(line => line.Points) |
| 286 | local-declaration | 지역 변수를 선언합니다: var points = lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).ToArray(); |
| 286 | variable-initializer | 변수의 초기값을 지정합니다: points = lines.SelectMany(line => line.Points).OrderBy(point => point.DesignX).ThenBy(point => point.CellNo).ThenBy(point => point.ShotNo).ToArray() |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: points.Max(point => point.ReviewTargetY) |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: points.Min(point => point.ReviewTargetY) |
| 289 | if | 조건에 따라 분기합니다: if (points.Max(point => point.ReviewTargetY) - points.Min(point => point.ReviewTargetY) > .0005 &#124;&#124; points.Max(point => point.DesignY) - points.Min(point => point.DesignY) > .000001) |
| 290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: points.Max(point => point.DesignY) |
| 290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: points.Min(point => point.DesignY) |
| 291 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("맨 위 Cell들의 가운데 행이 서로 다른 Y 위치여서 0선 FollowUp IOF 한 줄을 만들 수 없습니다. Cell 배치와 Beam 좌표를 확인해 주세요.") |
| 291 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("맨 위 Cell들의 가운데 행이 서로 다른 Y 위치여서 0선 FollowUp IOF 한 줄을 만들 수 없습니다. Cell 배치와 Beam 좌표를 확인해 주세요."); |
| 292 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Select(line => line.ModelNo).Distinct().ToArray() |
| 292 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Select(line => line.ModelNo).Distinct() |
| 292 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.Select(line => line.ModelNo) |
| 292 | local-declaration | 지역 변수를 선언합니다: var modelNos = lines.Select(line => line.ModelNo).Distinct().ToArray(); |
| 292 | variable-initializer | 변수의 초기값을 지정합니다: modelNos = lines.Select(line => line.ModelNo).Distinct().ToArray() |
| 293 | assignment | 값을 대상에 대입합니다: lines = [new("ZERO_FOLLOWUP:TOP_MIDDLE:B11", 1, modelNos.Length == 1 ? modelNos[0] : 0, Array.AsReadOnly(points))] |
| 293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("ZERO_FOLLOWUP:TOP_MIDDLE:B11", 1, modelNos.Length == 1 ? modelNos[0] : 0, Array.AsReadOnly(points)) |
| 293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(points) |
| 293 | conditional-expression | 조건에 따라 결과식을 선택합니다: modelNos.Length == 1 ? modelNos[0] : 0 |
| 295 | local-declaration | 지역 변수를 선언합니다: var plan = source with { Points = Array.AsReadOnly(lines.SelectMany(line => line.Points).ToArray()), InspectionMethod = input.ZeroLineFollowUp ? "IOF" : source.InspectionMethod }; |
| 295 | variable-initializer | 변수의 초기값을 지정합니다: plan = source with { Points = Array.AsReadOnly(lines.SelectMany(line => line.Points).ToArray()), InspectionMethod = input.ZeroLineFollowUp ? "IOF" : source.InspectionMethod } |
| 297 | assignment | 값을 대상에 대입합니다: Points = Array.AsReadOnly(lines.SelectMany(line => line.Points).ToArray()) |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(lines.SelectMany(line => line.Points).ToArray()) |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.SelectMany(line => line.Points).ToArray() |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.SelectMany(line => line.Points) |
| 298 | assignment | 값을 대상에 대입합니다: InspectionMethod = input.ZeroLineFollowUp ? "IOF" : source.InspectionMethod |
| 298 | conditional-expression | 조건에 따라 결과식을 선택합니다: input.ZeroLineFollowUp ? "IOF" : source.InspectionMethod |
| 300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: lines.AsReadOnly() |
| 300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_FINE_REVIEW_REQUEST(plan, lines.AsReadOnly(), input.Options.Method) { StopOnNgLine = false, CountMismatchRetries = input.ZeroLineFollowUp ? 0 : input.Options.CountMismatchRetries, ImmediateRetry = input.Options.Im… |
| 300 | local-declaration | 지역 변수를 선언합니다: var request = new ST_FINE_REVIEW_REQUEST(plan, lines.AsReadOnly(), input.Options.Method) { StopOnNgLine = false, CountMismatchRetries = input.ZeroLineFollowUp ? 0 : input.Options.CountMismatchRetries, ImmediateRetry = input.Option |
| 300 | variable-initializer | 변수의 초기값을 지정합니다: request = new ST_FINE_REVIEW_REQUEST(plan, lines.AsReadOnly(), input.Options.Method) { StopOnNgLine = false, CountMismatchRetries = input.ZeroLineFollowUp ? 0 : input.Options.CountMismatchRetries, ImmediateRetry = input.Options.Im |
| 302 | assignment | 값을 대상에 대입합니다: StopOnNgLine = false |
| 303 | assignment | 값을 대상에 대입합니다: CountMismatchRetries = input.ZeroLineFollowUp ? 0 : input.Options.CountMismatchRetries |
| 303 | conditional-expression | 조건에 따라 결과식을 선택합니다: input.ZeroLineFollowUp ? 0 : input.Options.CountMismatchRetries |
| 304 | assignment | 값을 대상에 대입합니다: ImmediateRetry = input.Options.ImmediateRetry |
| 305 | assignment | 값을 대상에 대입합니다: Context = new(input.Recipe.Name, input.GlassId, "AUTO", input.Options.LineCount, frozen) { ZeroLineFollowUp = input.ZeroLineFollowUp, ZeroLineRunId = input.ZeroLineRunId, ZeroLineSavedAt = input.ZeroLineSavedAt } |
| 305 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(input.Recipe.Name, input.GlassId, "AUTO", input.Options.LineCount, frozen) { ZeroLineFollowUp = input.ZeroLineFollowUp, ZeroLineRunId = input.ZeroLineRunId, ZeroLineSavedAt = input.ZeroLineSavedAt } |
| 307 | assignment | 값을 대상에 대입합니다: ZeroLineFollowUp = input.ZeroLineFollowUp |
| 308 | assignment | 값을 대상에 대입합니다: ZeroLineRunId = input.ZeroLineRunId |
| 309 | assignment | 값을 대상에 대입합니다: ZeroLineSavedAt = input.ZeroLineSavedAt |
| 312 | assignment | 값을 대상에 대입합니다: ZeroLineFollowUp = input.ZeroLineFollowUp |
| 312 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(request, input.ZeroLineFollowUp ? Array.Empty<ST_REVIEW_PLAN_POINT>() : Array.AsReadOnly(targets), frozen) { ZeroLineFollowUp = input.ZeroLineFollowUp } |
| 312 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.Empty<ST_REVIEW_PLAN_POINT>() |
| 312 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(targets) |
| 312 | conditional-expression | 조건에 따라 결과식을 선택합니다: input.ZeroLineFollowUp ? Array.Empty<ST_REVIEW_PLAN_POINT>() : Array.AsReadOnly(targets) |
| 312 | return | 호출자에게 값 또는 제어를 반환합니다: return new(request, input.ZeroLineFollowUp ? Array.Empty<ST_REVIEW_PLAN_POINT>() : Array.AsReadOnly(targets), frozen) { ZeroLineFollowUp = input.ZeroLineFollowUp }; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["BuildPlan"]
 N0["L207 if"]
 M -->|포함| N0
 N1["L209 if"]
 M -->|포함| N1
 N2["L212 foreach"]
 M -->|포함| N2
 N3["L215 if"]
 N2 -->|포함| N3
 N4["L247 if"]
 M -->|포함| N4
 N5["L263 foreach"]
 M -->|포함| N5
 N6["L266 foreach"]
 N5 -->|포함| N6
 N7["L282 if"]
 M -->|포함| N7
 N8["L284 if"]
 M -->|포함| N8
 N9["L289 if"]
 N8 -->|포함| N9
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Tolerance` · L313–313

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:313–313](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L313-L313)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Tolerance(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:252–252](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L252-L252) | Tolerance | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:253–253](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L253-L253) | Tolerance | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 313 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 313 | parameters.GetValueOrDefault | resolved | string System.Collections.Generic.IReadOnlyDictionary<string, string>.GetValueOrDefault<string, string>(string, string) |
| 313 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 313 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 313 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(parameters.GetValueOrDefault(key, "0.03"), NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 313 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.GetValueOrDefault(key, "0.03") |
| 313 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 313 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{key} 설정을 확인해 주세요.") |
| 313 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(parameters.GetValueOrDefault(key, "0.03"), NumberStyles.Float, CultureInfo.InvariantCulture, out var value) && double.IsFinite(value) && value >= 0 ? value : throw new InvalidOperationException($"{key} 설정을 확인해 주세요. |
| 313 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{key} 설정을 확인해 주세요.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FindTopmostCells` · L316–338

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:316–338](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L316-L338)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.HashSet<int> Drilling.Common.Review.CAutoFineReviewCoordinator.FindTopmostCells(System.Collections.Generic.IReadOnlyDictionary<string, string>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.HashSet<int> |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameters | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:259–259](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L259-L259) | FindTopmostCells | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 319 | new List<(int Cell, double MinimumY)> | resolved | System.Collections.Generic.List<(int Cell, double MinimumY)>.List() |
| 320 | Read | resolved | double Read(string, double) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318 |
| 323 | CRecipeModelPixelCountReader.ReadPatternForCell | resolved | Drilling.Common.Recipe.ST_RECIPE_MODEL_PATTERN Drilling.Common.Recipe.CRecipeModelPixelCountReader.ReadPatternForCell(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) · Drilling.Common/Recipe/CCellPatternCalculator.cs:444 |
| 324 | new ST_CELL_PATTERN_DEFINITION | resolved | Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION.ST_CELL_PATTERN_DEFINITION(int, double, double, double, double, int, int, int, int, double, double) · Drilling.Common/Recipe/CCellPatternCalculator.cs:277 |
| 324 | Read | resolved | double Read(string, double) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318 |
| 324 | Read | resolved | double Read(string, double) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318 |
| 324 | Read | resolved | double Read(string, double) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318 |
| 324 | Read | resolved | double Read(string, double) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318 |
| 324 | Read | resolved | double Read(string, double) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318 |
| 324 | Read | resolved | double Read(string, double) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318 |
| 324 | Read | resolved | double Read(string, double) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318 |
| 325 | CCellPatternCalculator.Calculate | resolved | Drilling.Common.Recipe.ST_CELL_PATTERN_LAYOUT Drilling.Common.Recipe.CCellPatternCalculator.Calculate(Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION, bool) · Drilling.Common/Recipe/CCellPatternCalculator.cs:66 |
| 327 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 330 | new[] { (0, 0), (layout.GroupCountX - 1, 0), (0, layout.GroupCountY - 1), (layout.GroupCountX - 1, layout.GroupCountY - 1) } .Min | resolved | double System.Collections.Generic.IEnumerable<(int, int)>.Min<(int, int)>(System.Func<(int, int), double>) |
| 331 | CCellPatternCalculator.CalculateShotCenter | resolved | Drilling.Common.Recipe.ST_SHOT_GROUP_CENTER Drilling.Common.Recipe.CCellPatternCalculator.CalculateShotCenter(Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION, int, int, Drilling.Common.Recipe.ST_CELL_PATTERN_LAYOUT) · Drilling.Common/Recipe/CCellPatternCalculator.cs:224 |
| 332 | ranges.Add | resolved | void System.Collections.Generic.List<(int Cell, double MinimumY)>.Add((int Cell, double MinimumY)) |
| 335 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 336 | ranges.Min | resolved | double System.Collections.Generic.IEnumerable<(int Cell, double MinimumY)>.Min<(int Cell, double MinimumY)>(System.Func<(int Cell, double MinimumY), double>) |
| 337 | ranges.Where(range => Math.Abs(range.MinimumY - firstY) <= .000001).Select(range => range.Cell).ToHashSet | resolved | System.Collections.Generic.HashSet<int> System.Collections.Generic.IEnumerable<int>.ToHashSet<int>() |
| 337 | ranges.Where(range => Math.Abs(range.MinimumY - firstY) <= .000001).Select | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<(int Cell, double MinimumY)>.Select<(int Cell, double MinimumY), int>(System.Func<(int Cell, double MinimumY), int>) |
| 337 | ranges.Where | resolved | System.Collections.Generic.IEnumerable<(int Cell, double MinimumY)> System.Collections.Generic.IEnumerable<(int Cell, double MinimumY)>.Where<(int Cell, double MinimumY)>(System.Func<(int Cell, double MinimumY), bool>) |
| 337 | Math.Abs | resolved | double System.Math.Abs(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<(int Cell, double MinimumY)>() |
| 319 | local-declaration | 지역 변수를 선언합니다: var ranges = new List<(int Cell, double MinimumY)>(); |
| 319 | variable-initializer | 변수의 초기값을 지정합니다: ranges = new List<(int Cell, double MinimumY)>() |
| 320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("MAX_CELL_NUMBER") |
| 320 | local-declaration | 지역 변수를 선언합니다: var cellCount = (int)Read("MAX_CELL_NUMBER"); |
| 320 | variable-initializer | 변수의 초기값을 지정합니다: cellCount = (int)Read("MAX_CELL_NUMBER") |
| 321 | variable-initializer | 변수의 초기값을 지정합니다: cellNo = 1 |
| 321 | for | 초기화·조건·증감이 있는 반복입니다: for (var cellNo = 1; cellNo <= cellCount; cellNo++) |
| 323 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeModelPixelCountReader.ReadPatternForCell(parameters, cellNo) |
| 323 | local-declaration | 지역 변수를 선언합니다: var pattern = CRecipeModelPixelCountReader.ReadPatternForCell(parameters, cellNo); |
| 323 | variable-initializer | 변수의 초기값을 지정합니다: pattern = CRecipeModelPixelCountReader.ReadPatternForCell(parameters, cellNo) |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_CELL_PATTERN_DEFINITION(cellNo, Read($"CELL{cellNo}_ALIGN_TO_1ST_PIXEL_X"), Read($"CELL{cellNo}_ALIGN_TO_1ST_PIXEL_Y"), Read($"CELL{cellNo}_ROTATION"), Read("PIXEL_SIZE", .09), pattern.PixelCountX, pattern.PixelCo… |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read($"CELL{cellNo}_ALIGN_TO_1ST_PIXEL_X") |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read($"CELL{cellNo}_ALIGN_TO_1ST_PIXEL_Y") |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read($"CELL{cellNo}_ROTATION") |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("PIXEL_SIZE", .09) |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("SPLITED_BEAM_COUNT", 1) |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("AK_MARGIN_X") |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("AK_MARGIN_Y") |
| 324 | local-declaration | 지역 변수를 선언합니다: var definition = new ST_CELL_PATTERN_DEFINITION(cellNo, Read($"CELL{cellNo}_ALIGN_TO_1ST_PIXEL_X"), Read($"CELL{cellNo}_ALIGN_TO_1ST_PIXEL_Y"), Read($"CELL{cellNo}_ROTATION"), Read("PIXEL_SIZE", .09), pattern.PixelCountX, pattern. |
| 324 | variable-initializer | 변수의 초기값을 지정합니다: definition = new ST_CELL_PATTERN_DEFINITION(cellNo, Read($"CELL{cellNo}_ALIGN_TO_1ST_PIXEL_X"), Read($"CELL{cellNo}_ALIGN_TO_1ST_PIXEL_Y"), Read($"CELL{cellNo}_ROTATION"), Read("PIXEL_SIZE", .09), pattern.PixelCountX, pattern.Pixe |
| 325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.Calculate(definition, includeShotCenters: false) |
| 325 | local-declaration | 지역 변수를 선언합니다: var layout = CCellPatternCalculator.Calculate(definition, includeShotCenters: false); |
| 325 | variable-initializer | 변수의 초기값을 지정합니다: layout = CCellPatternCalculator.Calculate(definition, includeShotCenters: false) |
| 326 | if | 조건에 따라 분기합니다: if (!layout.IsValid) |
| 327 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException(layout.ValidationMessage) |
| 327 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException(layout.ValidationMessage); |
| 330 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new[] { (0, 0), (layout.GroupCountX - 1, 0), (0, layout.GroupCountY - 1), (layout.GroupCountX - 1, layout.GroupCountY - 1) } .Min(corner => CCellPatternCalculator.CalculateShotCenter(definition, corner.Item1, corner.Item… |
| 330 | local-declaration | 지역 변수를 선언합니다: var minimumY = new[] { (0, 0), (layout.GroupCountX - 1, 0), (0, layout.GroupCountY - 1), (layout.GroupCountX - 1, layout.GroupCountY - 1) } .Min(corner => CCellPatternCalculator.CalculateShotCenter(definition, corner.Item1, corner |
| 330 | variable-initializer | 변수의 초기값을 지정합니다: minimumY = new[] { (0, 0), (layout.GroupCountX - 1, 0), (0, layout.GroupCountY - 1), (layout.GroupCountX - 1, layout.GroupCountY - 1) } .Min(corner => CCellPatternCalculator.CalculateShotCenter(definition, corner.Item1, corner.Ite |
| 331 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.CalculateShotCenter(definition, corner.Item1, corner.Item2, layout) |
| 332 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ranges.Add((cellNo, minimumY)) |
| 334 | if | 조건에 따라 분기합니다: if (ranges.Count == 0) |
| 335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("0선 FollowUp의 Cell 배치를 확인할 수 없습니다.") |
| 335 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("0선 FollowUp의 Cell 배치를 확인할 수 없습니다."); |
| 336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ranges.Min(range => range.MinimumY) |
| 336 | local-declaration | 지역 변수를 선언합니다: var firstY = ranges.Min(range => range.MinimumY); |
| 336 | variable-initializer | 변수의 초기값을 지정합니다: firstY = ranges.Min(range => range.MinimumY) |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ranges.Where(range => Math.Abs(range.MinimumY - firstY) <= .000001).Select(range => range.Cell).ToHashSet() |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ranges.Where(range => Math.Abs(range.MinimumY - firstY) <= .000001).Select(range => range.Cell) |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ranges.Where(range => Math.Abs(range.MinimumY - firstY) <= .000001) |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(range.MinimumY - firstY) |
| 337 | return | 호출자에게 값 또는 제어를 반환합니다: return ranges.Where(range => Math.Abs(range.MinimumY - firstY) <= .000001).Select(range => range.Cell).ToHashSet(); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FindTopmostCells"]
 N0["L321 for"]
 M -->|포함| N0
 N1["L326 if"]
 N0 -->|포함| N1
 N2["L334 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Read` · L318–318

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:318–318](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L318-L318)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Read(string, double) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Review.CAutoFineReviewCoordinator |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |
| fallback | double | None | True / 0 |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:320–320](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L320-L320) | Read | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L324-L324) | Read | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L324-L324) | Read | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L324-L324) | Read | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L324-L324) | Read | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L324-L324) | Read | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L324-L324) | Read | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L324-L324) | Read | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 318 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 318 | parameters.GetValueOrDefault | resolved | string? System.Collections.Generic.IReadOnlyDictionary<string, string>.GetValueOrDefault<string, string>(string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(parameters.GetValueOrDefault(key), NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.GetValueOrDefault(key) |
| 318 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(parameters.GetValueOrDefault(key), NumberStyles.Float, CultureInfo.InvariantCulture, out var value) ? value : fallback |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `BeamNo` · L344–344

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:344–344](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L344-L344)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS.BeamNo |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_OPTIONS |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 344 | variable-initializer | 변수의 초기값을 지정합니다: BeamNo = 11 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroLineFollowUp` · L349–349

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:349–349](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L349-L349)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineFollowUp |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ZeroLineFollowUp` · L349–349

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:349–349](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L349-L349)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineFollowUp.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_ZeroLineFollowUp` · L349–349

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:349–349](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L349-L349)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineFollowUp.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroLineRunId` · L350–350

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:350–350](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L350-L350)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Guid? Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineRunId |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Guid? |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ZeroLineRunId` · L350–350

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:350–350](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L350-L350)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Guid? Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineRunId.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Guid? |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_ZeroLineRunId` · L350–350

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:350–350](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L350-L350)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineRunId.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.Guid? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroLineSavedAt` · L351–351

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:351–351](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L351-L351)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineSavedAt |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ZeroLineSavedAt` · L351–351

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:351–351](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L351-L351)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineSavedAt.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_ZeroLineSavedAt` · L351–351

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:351–351](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L351-L351)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.ST_AUTO_REVIEW_INPUT.ZeroLineSavedAt.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_REVIEW_INPUT |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.DateTimeOffset? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroLineFollowUp` · L355–355

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:355–355](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L355-L355)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Review.ST_AUTO_FINE_PLAN.ZeroLineFollowUp |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_FINE_PLAN |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ZeroLineFollowUp` · L355–355

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:355–355](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L355-L355)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Review.ST_AUTO_FINE_PLAN.ZeroLineFollowUp.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_FINE_PLAN |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_ZeroLineFollowUp` · L355–355

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:355–355](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L355-L355)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.ST_AUTO_FINE_PLAN.ZeroLineFollowUp.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_AUTO_FINE_PLAN |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroLineFollowUp` · L360–360

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:360–360](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L360-L360)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineFollowUp |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ZeroLineFollowUp` · L360–360

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:360–360](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L360-L360)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineFollowUp.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_ZeroLineFollowUp` · L360–360

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:360–360](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L360-L360)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineFollowUp.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | bool | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroLineRunId` · L361–361

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:361–361](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L361-L361)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Guid? Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineRunId |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Guid? |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ZeroLineRunId` · L361–361

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:361–361](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L361-L361)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Guid? Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineRunId.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Guid? |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_ZeroLineRunId` · L361–361

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:361–361](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L361-L361)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineRunId.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.Guid? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ZeroLineSavedAt` · L362–362

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:362–362](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L362-L362)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineSavedAt |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ZeroLineSavedAt` · L362–362

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:362–362](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L362-L362)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineSavedAt.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_ZeroLineSavedAt` · L362–362

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:362–362](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L362-L362)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT.ZeroLineSavedAt.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.ST_FINE_REVIEW_CONTEXT |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.DateTimeOffset? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_gate` · L376–376

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:376–376](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L376-L376)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | object Drilling.Common.Review.CFineReviewMonitorStore._gate |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | object |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 376 | new | resolved | object.Object() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 376 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 376 | variable-initializer | 변수의 초기값을 지정합니다: _gate = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_latest` · L377–377

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:377–377](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L377-L377)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.ST_FINE_REVIEW_MONITOR? Drilling.Common.Review.CFineReviewMonitorStore._latest |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Review.ST_FINE_REVIEW_MONITOR? |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_revision` · L378–378

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:378–378](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L378-L378)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | long Drilling.Common.Review.CFineReviewMonitorStore._revision |
| 접근/수식자 | Private / private |
| 반환/값 타입 | long |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetSnapshot` · L379–383

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:379–383](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L379-L383)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Review.ST_FINE_REVIEW_MONITOR? Drilling.Common.Review.CFineReviewMonitorStore.GetSnapshot() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Review.ST_FINE_REVIEW_MONITOR? |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:151–151](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuMain.cs#L151-L151) | .FineMonitor.GetSnapshot | False |
| [Drilling.UI/Menu/Menus/CMenuMain.cs:2440–2440](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuMain.cs#L2440-L2440) | _store.GetSnapshot | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 381 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_gate) |
| 382 | return | 호출자에게 값 또는 제어를 반환합니다: return _latest; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetSnapshot"]
 N0["L381 lock"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Begin` · L385–403

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:385–403](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L385-L403)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Guid Drilling.Common.Review.CFineReviewMonitorStore.Begin(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, int) |
| 접근/수식자 | Internal / internal |
| 반환/값 타입 | System.Guid |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| request | Drilling.Common.Review.ST_FINE_REVIEW_REQUEST | None | False /  |
| stageDeviceNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CReviewManager.cs:2678–2678](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L2678-L2678) | FineMonitor.Begin | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 402 | Replace | resolved | System.Guid Drilling.Common.Review.CFineReviewMonitorStore.Replace(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, int, Drilling.Common.Review.EN_REVIEW_SEQUENCE_STATE, string) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:406 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 387 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_gate) |
| 388 | if | 조건에 따라 분기합니다: if (_latest is { } staged && staged.RunId == request.PreparedMonitorRunId && staged.Progress.State == EN_REVIEW_SEQUENCE_STATE.Idle) |
| 390 | assignment | 값을 대상에 대입합니다: _latest = staged with { Revision = ++_revision, Progress = staged.Progress with { State = EN_REVIEW_SEQUENCE_STATE.Running, Message = "FINE 검사 시작" } } |
| 392 | assignment | 값을 대상에 대입합니다: Revision = ++_revision |
| 393 | assignment | 값을 대상에 대입합니다: Progress = staged.Progress with { State = EN_REVIEW_SEQUENCE_STATE.Running, Message = "FINE 검사 시작" } |
| 395 | assignment | 값을 대상에 대입합니다: State = EN_REVIEW_SEQUENCE_STATE.Running |
| 396 | assignment | 값을 대상에 대입합니다: Message = "FINE 검사 시작" |
| 399 | return | 호출자에게 값 또는 제어를 반환합니다: return staged.RunId; |
| 402 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Replace(request, stageDeviceNo, EN_REVIEW_SEQUENCE_STATE.Running, "검사 준비 중") |
| 402 | return | 호출자에게 값 또는 제어를 반환합니다: return Replace(request, stageDeviceNo, EN_REVIEW_SEQUENCE_STATE.Running, "검사 준비 중"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Begin"]
 N0["L387 lock"]
 M -->|포함| N0
 N1["L388 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Stage` · L405–405

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:405–405](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L405-L405)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Guid Drilling.Common.Review.CFineReviewMonitorStore.Stage(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, int) |
| 접근/수식자 | Internal / internal |
| 반환/값 타입 | System.Guid |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| request | Drilling.Common.Review.ST_FINE_REVIEW_REQUEST | None | False /  |
| stageDeviceNo | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CReviewManager.cs:2614–2614](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L2614-L2614) | FineMonitor.Stage | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 405 | Replace | resolved | System.Guid Drilling.Common.Review.CFineReviewMonitorStore.Replace(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, int, Drilling.Common.Review.EN_REVIEW_SEQUENCE_STATE, string) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:406 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 405 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Replace(request, stageDeviceNo, EN_REVIEW_SEQUENCE_STATE.Idle, "검사 계획 확정 · Stage Review START 대기") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Replace` · L406–434

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:406–434](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L406-L434)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Guid Drilling.Common.Review.CFineReviewMonitorStore.Replace(Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, int, Drilling.Common.Review.EN_REVIEW_SEQUENCE_STATE, string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Guid |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| request | Drilling.Common.Review.ST_FINE_REVIEW_REQUEST | None | False /  |
| stageDeviceNo | int | None | False /  |
| state | Drilling.Common.Review.EN_REVIEW_SEQUENCE_STATE | None | False /  |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:402–402](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L402-L402) | Replace | False |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:405–405](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L405-L405) | Replace | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 414 | new ReadOnlyDictionary<string, string> | resolved | System.Collections.ObjectModel.ReadOnlyDictionary<string, string>.ReadOnlyDictionary(System.Collections.Generic.IDictionary<string, string>) |
| 414 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>, System.Collections.Generic.IEqualityComparer<string>?) |
| 422 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Array.AsReadOnly<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(Drilling.Common.Review.ST_REVIEW_PLAN_POINT[]) |
| 422 | request.Plan.Points.ToArray | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ToArray<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 424 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Review.ST_FINE_REVIEW_LINE> System.Array.AsReadOnly<Drilling.Common.Review.ST_FINE_REVIEW_LINE>(Drilling.Common.Review.ST_FINE_REVIEW_LINE[]) |
| 424 | request.Lines.Select(line => line with { Points = Array.AsReadOnly(line.Points.ToArray()) }).ToArray | resolved | Drilling.Common.Review.ST_FINE_REVIEW_LINE[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.ToArray<Drilling.Common.Review.ST_FINE_REVIEW_LINE>() |
| 424 | request.Lines.Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_FINE_REVIEW_LINE> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_FINE_REVIEW_LINE>.Select<Drilling.Common.Review.ST_FINE_REVIEW_LINE, Drilling.Common.Review.ST_FINE_REVIEW_LINE>(System.Func<Drilling.Common.Review.ST_FINE_REVIEW_LINE, Drilling.Common.Review.ST_FINE_REVIEW_LINE>) |
| 424 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Array.AsReadOnly<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(Drilling.Common.Review.ST_REVIEW_PLAN_POINT[]) |
| 424 | line.Points.ToArray | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.ToArray<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 426 | Guid.NewGuid | resolved | System.Guid System.Guid.NewGuid() |
| 427 | new ST_FINE_REVIEW_SNAPSHOT | resolved | Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT.ST_FINE_REVIEW_SNAPSHOT(string, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_FINE_REVIEW_LINE>, Drilling.Common.Review.EN_REVIEW_SEQUENCE_STATE, string, bool) · Drilling.Common/Review/CReviewManager.cs:4377 |
| 432 | new | resolved | Drilling.Common.Review.ST_FINE_REVIEW_MONITOR.ST_FINE_REVIEW_MONITOR(System.Guid, long, Drilling.Common.Review.ST_FINE_REVIEW_REQUEST, Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT, int, System.DateTimeOffset, string) · Drilling.Common/Review/CAutoFineReviewCoordinator.cs:364 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 408 | local-declaration | 지역 변수를 선언합니다: var context = request.Context; |
| 408 | variable-initializer | 변수의 초기값을 지정합니다: context = request.Context |
| 409 | if | 조건에 따라 분기합니다: if (context is not null) |
| 410 | assignment | 값을 대상에 대입합니다: request = request with { Context = context with { Parameters = new ReadOnlyDictionary<string, string>(new Dictionary<string, string>(context.Parameters, StringComparer.OrdinalIgnoreCase)) } } |
| 412 | assignment | 값을 대상에 대입합니다: Context = context with { Parameters = new ReadOnlyDictionary<string, string>(new Dictionary<string, string>(context.Parameters, StringComparer.OrdinalIgnoreCase)) } |
| 414 | assignment | 값을 대상에 대입합니다: Parameters = new ReadOnlyDictionary<string, string>(new Dictionary<string, string>(context.Parameters, StringComparer.OrdinalIgnoreCase)) |
| 414 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ReadOnlyDictionary<string, string>(new Dictionary<string, string>(context.Parameters, StringComparer.OrdinalIgnoreCase)) |
| 414 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(context.Parameters, StringComparer.OrdinalIgnoreCase) |
| 418 | assignment | 값을 대상에 대입합니다: request = request with { Plan = request.Plan with { Points = Array.AsReadOnly(request.Plan.Points.ToArray()) }, Lines = Array.AsReadOnly(request.Lines.Select(line => line with { Points = Array.AsReadOnly(line.Points.ToArray()) }). |
| 420 | assignment | 값을 대상에 대입합니다: Plan = request.Plan with { Points = Array.AsReadOnly(request.Plan.Points.ToArray()) } |
| 422 | assignment | 값을 대상에 대입합니다: Points = Array.AsReadOnly(request.Plan.Points.ToArray()) |
| 422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(request.Plan.Points.ToArray()) |
| 422 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.Plan.Points.ToArray() |
| 424 | assignment | 값을 대상에 대입합니다: Lines = Array.AsReadOnly(request.Lines.Select(line => line with { Points = Array.AsReadOnly(line.Points.ToArray()) }).ToArray()) |
| 424 | assignment | 값을 대상에 대입합니다: Points = Array.AsReadOnly(line.Points.ToArray()) |
| 424 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(request.Lines.Select(line => line with { Points = Array.AsReadOnly(line.Points.ToArray()) }).ToArray()) |
| 424 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.Lines.Select(line => line with { Points = Array.AsReadOnly(line.Points.ToArray()) }).ToArray() |
| 424 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: request.Lines.Select(line => line with { Points = Array.AsReadOnly(line.Points.ToArray()) }) |
| 424 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(line.Points.ToArray()) |
| 424 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: line.Points.ToArray() |
| 426 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid() |
| 426 | local-declaration | 지역 변수를 선언합니다: var id = Guid.NewGuid(); |
| 426 | variable-initializer | 변수의 초기값을 지정합니다: id = Guid.NewGuid() |
| 427 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_FINE_REVIEW_SNAPSHOT(request.Plan.RecipeId, request.Lines, state, message) { RunId = id } |
| 427 | local-declaration | 지역 변수를 선언합니다: var initial = new ST_FINE_REVIEW_SNAPSHOT(request.Plan.RecipeId, request.Lines, state, message) { RunId = id }; |
| 427 | variable-initializer | 변수의 초기값을 지정합니다: initial = new ST_FINE_REVIEW_SNAPSHOT(request.Plan.RecipeId, request.Lines, state, message) { RunId = id } |
| 429 | assignment | 값을 대상에 대입합니다: RunId = id |
| 431 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_gate) |
| 432 | assignment | 값을 대상에 대입합니다: _latest = new(id, ++_revision, request, initial, stageDeviceNo, DateTimeOffset.Now) |
| 432 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(id, ++_revision, request, initial, stageDeviceNo, DateTimeOffset.Now) |
| 433 | return | 호출자에게 값 또는 제어를 반환합니다: return id; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Replace"]
 N0["L409 if"]
 M -->|포함| N0
 N1["L431 lock"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Publish` · L436–445

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:436–445](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L436-L445)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.CFineReviewMonitorStore.Publish(Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT) |
| 접근/수식자 | Internal / internal |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| snapshot | Drilling.Common.Review.ST_FINE_REVIEW_SNAPSHOT | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:64–64](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L64-L64) | review.FineMonitor.Publish | False |
| [Drilling.Common/Review/CReviewManager.cs:2667–2667](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L2667-L2667) | FineMonitor.Publish | False |
| [Drilling.Common/Review/CReviewManager.cs:3035–3035](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L3035-L3035) | FineMonitor.Publish | False |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 438 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_gate) |
| 439 | if | 조건에 따라 분기합니다: if (_latest is { } latest && latest.RunId == snapshot.RunId) |
| 440 | assignment | 값을 대상에 대입합니다: _latest = latest with { Revision = ++_revision, Progress = snapshot } |
| 442 | assignment | 값을 대상에 대입합니다: Revision = ++_revision |
| 443 | assignment | 값을 대상에 대입합니다: Progress = snapshot |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Publish"]
 N0["L438 lock"]
 M -->|포함| N0
 N1["L439 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `MarkOffsetSaved` · L447–456

[Drilling.Common/Review/CAutoFineReviewCoordinator.cs:447–456](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L447-L456)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Review.CFineReviewMonitorStore.MarkOffsetSaved(System.Guid, string) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Review.CFineReviewMonitorStore |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| runId | System.Guid | None | False /  |
| file | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Review/CAutoFineReviewCoordinator.cs:166–166](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L166-L166) | review.FineMonitor.MarkOffsetSaved | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:3121–3121](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3121-L3121) | .FineMonitor.MarkOffsetSaved | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 450 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 449 | lock | 공유 상태의 임계 구역에 진입합니다: lock (_gate) |
| 450 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(file) |
| 450 | if | 조건에 따라 분기합니다: if (_latest is { } latest && latest.RunId == runId && !string.IsNullOrWhiteSpace(file)) |
| 451 | assignment | 값을 대상에 대입합니다: _latest = latest with { Revision = ++_revision, OffsetFile = file } |
| 453 | assignment | 값을 대상에 대입합니다: Revision = ++_revision |
| 454 | assignment | 값을 대상에 대입합니다: OffsetFile = file |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["MarkOffsetSaved"]
 N0["L449 lock"]
 M -->|포함| N0
 N1["L450 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.Common/Review/CAutoFineReviewCoordinator.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
