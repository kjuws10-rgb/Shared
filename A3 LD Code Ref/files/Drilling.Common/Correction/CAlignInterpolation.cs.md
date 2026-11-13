# Drilling.Common/Correction/CAlignInterpolation.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 5aee8e58439c9b455cae7c9593c9be986c3e682e |
| 원본 SHA256 | a956a1513d4cb63fdb949e6879e356e4e4f4224aae2b644f38e5ea87c81c6431 |
| 파일 분류 | code |
| 원본 크기/행 | 35,008 bytes / 481 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs) |

## 파일의 역할과 읽는 순서

보정 계산·설정·원본/적용값의 관계를 다루는 계층입니다. 값의 좌표계와 단위는 호출부의 근거를 따릅니다.

![파일 관계도](../../../diagrams/files/fda2db8aa7d63988ab0b.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CAlignInterpolation | ClassDeclaration | 11–114 | CAlignInterpolation |
| ST_ALIGN_INTERPOLATION_KEY | RecordDeclaration | 116–116 | ST_ALIGN_INTERPOLATION_KEY |
| ST_ALIGN_INTERPOLATION_ROW | RecordDeclaration | 117–120 | ST_ALIGN_INTERPOLATION_ROW |
| ST_ALIGN_CORRECTION | RecordStructDeclaration | 122–122 | ST_ALIGN_CORRECTION |
| ST_ALIGN_OFFSET_KEY_LOG | RecordDeclaration | 123–134 | ST_ALIGN_OFFSET_KEY_LOG |
| ST_ALIGN_OFFSET_LOG | RecordDeclaration | 135–149 | ST_ALIGN_OFFSET_LOG |
| CAlignOffsetLogFileBase | ClassDeclaration | 151–154 | CAlignOffsetLogFileBase |
| ST_ALIGN_OFFSET_TOLERANCE_CHECK | RecordDeclaration | 156–161 | ST_ALIGN_OFFSET_TOLERANCE_CHECK |
| CAlignOffsetTolerance | ClassDeclaration | 163–177 | CAlignOffsetTolerance |
| CAlignKeyGeometry | ClassDeclaration | 180–208 | CAlignKeyGeometry |
| ST_WAPAGE_ALIGNBASE_POINT | RecordDeclaration | 210–210 | ST_WAPAGE_ALIGNBASE_POINT |
| ST_DISTORTION_MEASUREMENT_SNAPSHOT | RecordDeclaration | 213–217 | ST_DISTORTION_MEASUREMENT_SNAPSHOT |
| CAlignDistortionCycle | ClassDeclaration | 220–362 | CAlignDistortionCycle |
| CAlignWapageService | ClassDeclaration | 365–478 | CAlignWapageService |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| AlgorithmName | FieldDeclaration | L13–13 | string Drilling.Common.Correction.CAlignInterpolation.AlgorithmName |
| _normalizedY | FieldDeclaration | L14–14 | double[] Drilling.Common.Correction.CAlignInterpolation._normalizedY |
| _weights | FieldDeclaration | L15–15 | double[] Drilling.Common.Correction.CAlignInterpolation._weights |
| Rows | PropertyDeclaration | L16–16 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW> Drilling.Common.Correction.CAlignInterpolation.Rows |
| get_Rows | GetAccessorDeclaration | L16–16 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW> Drilling.Common.Correction.CAlignInterpolation.Rows.get |
| .ctor | ConstructorDeclaration | L18–53 | Drilling.Common.Correction.CAlignInterpolation.CAlignInterpolation(System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>, System.Collections.Generic.IReadOnlyCollection<string>) |
| Find | LocalFunctionStatement | L21–21 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY Find(string) |
| Contains | MethodDeclaration | L55–63 | bool Drilling.Common.Correction.CAlignInterpolation.Contains(double, double) |
| ValidateMeasurements | MethodDeclaration | L65–72 | void Drilling.Common.Correction.CAlignInterpolation.ValidateMeasurements() |
| Evaluate | MethodDeclaration | L74–94 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Evaluate(double, double) |
| FindInterval | MethodDeclaration | L96–102 | (Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW First, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW Second, double Fraction) Drilling.Common.Correction.CAlignInterpolation.FindInterval(double) |
| ValidateRow | MethodDeclaration | L104–108 | void Drilling.Common.Correction.CAlignInterpolation.ValidateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW) |
| ReadCorrection | MethodDeclaration | L110–110 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.ReadCorrection(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) |
| EvaluateRow | MethodDeclaration | L111–111 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.EvaluateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, double) |
| Blend | MethodDeclaration | L112–112 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Blend(Drilling.Common.Correction.ST_ALIGN_CORRECTION, Drilling.Common.Correction.ST_ALIGN_CORRECTION, double) |
| Finite | MethodDeclaration | L113–113 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Finite(Drilling.Common.Correction.ST_ALIGN_CORRECTION) |
| Y | PropertyDeclaration | L119–119 | double Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW.Y |
| Tolerance | PropertyDeclaration | L146–146 | double? Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.Tolerance |
| get_Tolerance | GetAccessorDeclaration | L146–146 | double? Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.Tolerance.get |
| set_Tolerance | InitAccessorDeclaration | L146–146 | void Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.Tolerance.init |
| CalculatedOffsets | PropertyDeclaration | L147–147 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.CalculatedOffsets |
| get_CalculatedOffsets | GetAccessorDeclaration | L147–147 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.CalculatedOffsets.get |
| set_CalculatedOffsets | InitAccessorDeclaration | L147–147 | void Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.CalculatedOffsets.init |
| ExcludedOffsets | PropertyDeclaration | L148–148 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.ExcludedOffsets |
| get_ExcludedOffsets | GetAccessorDeclaration | L148–148 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.ExcludedOffsets.get |
| set_ExcludedOffsets | InitAccessorDeclaration | L148–148 | void Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.ExcludedOffsets.init |
| Save | MethodDeclaration | L153–153 | System.Threading.Tasks.Task<string> Drilling.Common.Correction.CAlignOffsetLogFileBase.Save(Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG, System.Threading.CancellationToken) |
| ApplyCount | PropertyDeclaration | L158–158 | int Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK.ApplyCount |
| CanApplyRemaining | PropertyDeclaration | L159–159 | bool Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK.CanApplyRemaining |
| Summary | PropertyDeclaration | L160–160 | string Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK.Summary |
| SettingKey | FieldDeclaration | L165–165 | string Drilling.Common.Correction.CAlignOffsetTolerance.SettingKey |
| DefaultValue | FieldDeclaration | L166–166 | double Drilling.Common.Correction.CAlignOffsetTolerance.DefaultValue |
| Parse | MethodDeclaration | L167–172 | double Drilling.Common.Correction.CAlignOffsetTolerance.Parse(string) |
| Exceeds | MethodDeclaration | L175–175 | bool Drilling.Common.Correction.CAlignOffsetTolerance.Exceeds(Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET, double) |
| Check | MethodDeclaration | L176–176 | Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK Drilling.Common.Correction.CAlignOffsetTolerance.Check(double, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>) |
| StagePositionKey | MethodDeclaration | L182–182 | string Drilling.Common.Correction.CAlignKeyGeometry.StagePositionKey(int) |
| DesignY | MethodDeclaration | L183–183 | double Drilling.Common.Correction.CAlignKeyGeometry.DesignY(double, double, double) |
| ReadStagePositions | MethodDeclaration | L184–190 | double[] Drilling.Common.Correction.CAlignKeyGeometry.ReadStagePositions(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) |
| Create | MethodDeclaration | L191–207 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] Drilling.Common.Correction.CAlignKeyGeometry.Create(System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Collections.Generic.IReadOnlyList<double>) |
| Read | LocalFunctionStatement | L193–194 | double Read(string) |
| StageYPositions | PropertyDeclaration | L216–216 | System.Collections.Generic.IReadOnlyList<double> Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT.StageYPositions |
| get_StageYPositions | GetAccessorDeclaration | L216–216 | System.Collections.Generic.IReadOnlyList<double> Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT.StageYPositions.get |
| set_StageYPositions | InitAccessorDeclaration | L216–216 | void Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT.StageYPositions.init |
| _io | FieldDeclaration | L223–223 | Drilling.Common.Correction.CAlignWapageService Drilling.Common.Correction.CAlignDistortionCycle._io |
| _input | FieldDeclaration | L224–224 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? Drilling.Common.Correction.CAlignDistortionCycle._input |
| _pending | FieldDeclaration | L224–224 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? Drilling.Common.Correction.CAlignDistortionCycle._pending |
| _recipe | FieldDeclaration | L225–225 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.Common.Correction.CAlignDistortionCycle._recipe |
| _groups | FieldDeclaration | L226–226 | int[] Drilling.Common.Correction.CAlignDistortionCycle._groups |
| _stageYPositions | FieldDeclaration | L227–227 | System.Collections.Generic.IReadOnlyList<double> Drilling.Common.Correction.CAlignDistortionCycle._stageYPositions |
| _tolerance | FieldDeclaration | L228–228 | double Drilling.Common.Correction.CAlignDistortionCycle._tolerance |
| _results | FieldDeclaration | L229–229 | System.Collections.Generic.IReadOnlyDictionary<string, double>? Drilling.Common.Correction.CAlignDistortionCycle._results |
| _model | FieldDeclaration | L230–230 | Drilling.Common.Correction.CAlignInterpolation? Drilling.Common.Correction.CAlignDistortionCycle._model |
| _offsets | FieldDeclaration | L231–231 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>? Drilling.Common.Correction.CAlignDistortionCycle._offsets |
| _loadedAt | FieldDeclaration | L232–232 | System.DateTimeOffset? Drilling.Common.Correction.CAlignDistortionCycle._loadedAt |
| _saved | FieldDeclaration | L233–233 | bool Drilling.Common.Correction.CAlignDistortionCycle._saved |
| _snapshot | FieldDeclaration | L234–234 | Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT? Drilling.Common.Correction.CAlignDistortionCycle._snapshot |
| Snapshot | PropertyDeclaration | L235–235 | Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT? Drilling.Common.Correction.CAlignDistortionCycle.Snapshot |
| GlassId | PropertyDeclaration | L236–236 | string Drilling.Common.Correction.CAlignDistortionCycle.GlassId |
| ResultId | MethodDeclaration | L237–248 | string Drilling.Common.Correction.CAlignDistortionCycle.ResultId(string) |
| Names | MethodDeclaration | L249–250 | string[] Drilling.Common.Correction.CAlignDistortionCycle.Names(System.Collections.Generic.IReadOnlyCollection<int>) |
| ParameterKeys | MethodDeclaration | L251–251 | string[] Drilling.Common.Correction.CAlignDistortionCycle.ParameterKeys(System.Collections.Generic.IReadOnlyCollection<int>) |
| Read | MethodDeclaration | L252–257 | double Drilling.Common.Correction.CAlignDistortionCycle.Read(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) |
| Keys | MethodDeclaration | L258–264 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] Drilling.Common.Correction.CAlignDistortionCycle.Keys() |
| Delta | LocalFunctionStatement | L262–262 | double? Delta(string, string) |
| Prepare | MethodDeclaration | L266–305 | System.Threading.Tasks.Task Drilling.Common.Correction.CAlignDistortionCycle.Prepare(System.Threading.CancellationToken) |
| LoadResults | MethodDeclaration | L306–317 | System.Threading.Tasks.Task Drilling.Common.Correction.CAlignDistortionCycle.LoadResults(System.Threading.CancellationToken) |
| Calculate | MethodDeclaration | L318–328 | System.Threading.Tasks.Task Drilling.Common.Correction.CAlignDistortionCycle.Calculate(System.Threading.CancellationToken) |
| Save | MethodDeclaration | L329–353 | System.Threading.Tasks.Task Drilling.Common.Correction.CAlignDistortionCycle.Save(System.Threading.CancellationToken) |
| OptionalBase | LocalFunctionStatement | L337–337 | double? OptionalBase(string, string) |
| TakePreparedRequest | MethodDeclaration | L354–360 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? Drilling.Common.Correction.CAlignDistortionCycle.TakePreparedRequest(string) |
| Log | MethodDeclaration | L361–361 | void Drilling.Common.Correction.CAlignDistortionCycle.Log(string) |
| Points | PropertyDeclaration | L369–375 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT> Drilling.Common.Correction.CAlignWapageService.Points |
| get_Points | GetAccessorDeclaration | L369–369 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT> Drilling.Common.Correction.CAlignWapageService.Points.get |
| _map | FieldDeclaration | L376–376 | System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>> Drilling.Common.Correction.CAlignWapageService._map |
| _connections | FieldDeclaration | L377–377 | System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>> Drilling.Common.Correction.CAlignWapageService._connections |
| _read | FieldDeclaration | L378–378 | System.Func<string, System.Threading.CancellationToken, double> Drilling.Common.Correction.CAlignWapageService._read |
| _write | FieldDeclaration | L379–379 | System.Action<string, double, System.Threading.CancellationToken> Drilling.Common.Correction.CAlignWapageService._write |
| .ctor | ConstructorDeclaration | L380–383 | Drilling.Common.Correction.CAlignWapageService.CAlignWapageService(Drilling.Common.Interface.CInterfaceManager?) |
| .ctor | ConstructorDeclaration | L384–386 | Drilling.Common.Correction.CAlignWapageService.CAlignWapageService(System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>>, System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>>, System.Func<string, System.Threading.CancellationToken, double>, System.Action<string, double, System.Threading.CancellationToken>) |
| Validate | MethodDeclaration | L388–406 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Correction.CAlignWapageService.Validate(System.Collections.Generic.IReadOnlyCollection<string>, bool) |
| Load | MethodDeclaration | L408–414 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.Load(System.Threading.CancellationToken) |
| ReadValues | MethodDeclaration | L415–419 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.ReadValues(string[], System.Threading.CancellationToken) |
| WriteValues | MethodDeclaration | L420–420 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.WriteValues((string Id, double Value)[], System.Threading.CancellationToken) |
| Read | MethodDeclaration | L421–432 | System.Collections.Generic.Dictionary<string, double> Drilling.Common.Correction.CAlignWapageService.Read(System.Collections.Generic.IEnumerable<string>, System.Threading.CancellationToken) |
| SetBase | MethodDeclaration | L433–438 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.SetBase(System.Collections.Generic.IReadOnlyDictionary<string, double>, System.Threading.CancellationToken) |
| SetRange | MethodDeclaration | L439–443 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.SetRange(double, System.Threading.CancellationToken) |
| Write | MethodDeclaration | L444–477 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.Write((string Id, double Value)[], System.Threading.CancellationToken) |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `AlgorithmName` · L13–13

[Drilling.Common/Correction/CAlignInterpolation.cs:13–13](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L13-L13)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Correction.CAlignInterpolation.AlgorithmName |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 13 | variable-initializer | 변수의 초기값을 지정합니다: AlgorithmName = "Lagrange" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_normalizedY` · L14–14

[Drilling.Common/Correction/CAlignInterpolation.cs:14–14](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L14-L14)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double[] Drilling.Common.Correction.CAlignInterpolation._normalizedY |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | double[] |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_weights` · L15–15

[Drilling.Common/Correction/CAlignInterpolation.cs:15–15](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L15-L15)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double[] Drilling.Common.Correction.CAlignInterpolation._weights |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | double[] |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Rows` · L16–16

[Drilling.Common/Correction/CAlignInterpolation.cs:16–16](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L16-L16)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW> Drilling.Common.Correction.CAlignInterpolation.Rows |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Rows` · L16–16

[Drilling.Common/Correction/CAlignInterpolation.cs:16–16](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L16-L16)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW> Drilling.Common.Correction.CAlignInterpolation.Rows.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L18–53

[Drilling.Common/Correction/CAlignInterpolation.cs:18–53](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L18-L53)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.CAlignInterpolation.CAlignInterpolation(System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>, System.Collections.Generic.IReadOnlyCollection<string>) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| keys | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY> | None | False /  |
| selectedDkNames | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:282–282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L282-L282) | new CAlignInterpolation | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:322–322](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L322-L322) | new | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:5172–5172](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L5172-L5172) | new CAlignInterpolation | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 20 | keys.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.ToDictionary<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, string>(System.Func<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 22 | new ST_ALIGN_INTERPOLATION_ROW | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW.ST_ALIGN_INTERPOLATION_ROW(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) · Drilling.Common/Correction/CAlignInterpolation.cs:117 |
| 22 | Find | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY Find(string) · Drilling.Common/Correction/CAlignInterpolation.cs:21 |
| 22 | Find | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY Find(string) · Drilling.Common/Correction/CAlignInterpolation.cs:21 |
| 23 | new ST_ALIGN_INTERPOLATION_ROW | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW.ST_ALIGN_INTERPOLATION_ROW(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) · Drilling.Common/Correction/CAlignInterpolation.cs:117 |
| 23 | Find | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY Find(string) · Drilling.Common/Correction/CAlignInterpolation.cs:21 |
| 23 | Find | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY Find(string) · Drilling.Common/Correction/CAlignInterpolation.cs:21 |
| 24 | ValidateRow | resolved | void Drilling.Common.Correction.CAlignInterpolation.ValidateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW) · Drilling.Common/Correction/CAlignInterpolation.cs:104 |
| 25 | ValidateRow | resolved | void Drilling.Common.Correction.CAlignInterpolation.ValidateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW) · Drilling.Common/Correction/CAlignInterpolation.cs:104 |
| 27 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 28 | selectedDkNames.Distinct(StringComparer.Ordinal).Select(Find).ToArray | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.ToArray<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>() |
| 28 | selectedDkNames.Distinct(StringComparer.Ordinal).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY> System.Collections.Generic.IEnumerable<string>.Select<string, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>(System.Func<string, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>) |
| 28 | selectedDkNames.Distinct | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Distinct<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 29 | new List<ST_ALIGN_INTERPOLATION_ROW> | resolved | System.Collections.Generic.List<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>.List() |
| 33 | selected.GroupBy(key => key.Y).OrderBy | resolved | System.Linq.IOrderedEnumerable<System.Linq.IGrouping<double, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<double, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>>.OrderBy<System.Linq.IGrouping<double, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>, double>(System.Func<System.Linq.IGrouping<double, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>, double>) |
| 33 | selected.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<double, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.GroupBy<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, double>(System.Func<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, double>) |
| 35 | group.OrderBy(key => key.X).ToArray | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.ToArray<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>() |
| 35 | group.OrderBy | resolved | System.Linq.IOrderedEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.OrderBy<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, double>(System.Func<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, double>) |
| 37 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 38 | new ST_ALIGN_INTERPOLATION_ROW | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW.ST_ALIGN_INTERPOLATION_ROW(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) · Drilling.Common/Correction/CAlignInterpolation.cs:117 |
| 39 | ValidateRow | resolved | void Drilling.Common.Correction.CAlignInterpolation.ValidateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW) · Drilling.Common/Correction/CAlignInterpolation.cs:104 |
| 41 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 42 | rows.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>.Add(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW) |
| 45 | rows.Add | resolved | void System.Collections.Generic.List<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>.Add(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW) |
| 46 | rows.Zip(rows.Skip(1), (first, second) => second.Y - first.Y).Any | resolved | bool System.Collections.Generic.IEnumerable<double>.Any<double>(System.Func<double, bool>) |
| 46 | rows.Zip | resolved | System.Collections.Generic.IEnumerable<double> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>.Zip<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, double>(System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>, System.Func<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, double>) |
| 46 | rows.Skip | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>.Skip<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>(int) |
| 47 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 48 | rows.ToArray | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW[] System.Collections.Generic.List<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>.ToArray() |
| 49 | rows.Select(row => (row.Y - top.Y) / (bottom.Y - top.Y)).ToArray | resolved | double[] System.Collections.Generic.IEnumerable<double>.ToArray<double>() |
| 49 | rows.Select | resolved | System.Collections.Generic.IEnumerable<double> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW>.Select<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, double>(System.Func<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, double>) |
| 50 | _normalizedY.Select((value, index) => 1.0 / _normalizedY.Where((_, other) => other != index).Aggregate(1.0, (product, other) => product * (value - other))).ToArray | resolved | double[] System.Collections.Generic.IEnumerable<double>.ToArray<double>() |
| 50 | _normalizedY.Select | resolved | System.Collections.Generic.IEnumerable<double> System.Collections.Generic.IEnumerable<double>.Select<double, double>(System.Func<double, int, double>) |
| 50 | _normalizedY.Where((_, other) => other != index).Aggregate | resolved | double System.Collections.Generic.IEnumerable<double>.Aggregate<double, double>(double, System.Func<double, double, double>) |
| 50 | _normalizedY.Where | resolved | System.Collections.Generic.IEnumerable<double> System.Collections.Generic.IEnumerable<double>.Where<double>(System.Func<double, int, bool>) |
| 51 | _weights.Any | resolved | bool System.Collections.Generic.IEnumerable<double>.Any<double>(System.Func<double, bool>) |
| 51 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 52 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 20 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: keys.ToDictionary(key => key.Name, StringComparer.Ordinal) |
| 20 | local-declaration | 지역 변수를 선언합니다: var byName = keys.ToDictionary(key => key.Name, StringComparer.Ordinal); |
| 20 | variable-initializer | 변수의 초기값을 지정합니다: byName = keys.ToDictionary(key => key.Name, StringComparer.Ordinal) |
| 22 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_INTERPOLATION_ROW(Find("AK1"), Find("AK3")) |
| 22 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Find("AK1") |
| 22 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Find("AK3") |
| 22 | local-declaration | 지역 변수를 선언합니다: var top = new ST_ALIGN_INTERPOLATION_ROW(Find("AK1"), Find("AK3")); |
| 22 | variable-initializer | 변수의 초기값을 지정합니다: top = new ST_ALIGN_INTERPOLATION_ROW(Find("AK1"), Find("AK3")) |
| 23 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_INTERPOLATION_ROW(Find("AK2"), Find("AK4")) |
| 23 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Find("AK2") |
| 23 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Find("AK4") |
| 23 | local-declaration | 지역 변수를 선언합니다: var bottom = new ST_ALIGN_INTERPOLATION_ROW(Find("AK2"), Find("AK4")); |
| 23 | variable-initializer | 변수의 초기값을 지정합니다: bottom = new ST_ALIGN_INTERPOLATION_ROW(Find("AK2"), Find("AK4")) |
| 24 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateRow(top) |
| 25 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateRow(bottom) |
| 26 | if | 조건에 따라 분기합니다: if (bottom.Y - top.Y <= 1e-9) |
| 27 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("위쪽 AK와 아래쪽 AK의 Y 위치가 서로 달라야 합니다.") |
| 27 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("위쪽 AK와 아래쪽 AK의 Y 위치가 서로 달라야 합니다."); |
| 28 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selectedDkNames.Distinct(StringComparer.Ordinal).Select(Find).ToArray() |
| 28 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selectedDkNames.Distinct(StringComparer.Ordinal).Select(Find) |
| 28 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selectedDkNames.Distinct(StringComparer.Ordinal) |
| 28 | local-declaration | 지역 변수를 선언합니다: var selected = selectedDkNames.Distinct(StringComparer.Ordinal).Select(Find).ToArray(); |
| 28 | variable-initializer | 변수의 초기값을 지정합니다: selected = selectedDkNames.Distinct(StringComparer.Ordinal).Select(Find).ToArray() |
| 29 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_ALIGN_INTERPOLATION_ROW> { top } |
| 29 | local-declaration | 지역 변수를 선언합니다: var rows = new List<ST_ALIGN_INTERPOLATION_ROW> { top }; |
| 29 | variable-initializer | 변수의 초기값을 지정합니다: rows = new List<ST_ALIGN_INTERPOLATION_ROW> { top } |
| 33 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.GroupBy(key => key.Y).OrderBy(group => group.Key) |
| 33 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.GroupBy(key => key.Y) |
| 33 | foreach | 컬렉션 요소를 순회합니다: foreach (var group in selected.GroupBy(key => key.Y).OrderBy(group => group.Key)) |
| 35 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.OrderBy(key => key.X).ToArray() |
| 35 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.OrderBy(key => key.X) |
| 35 | local-declaration | 지역 변수를 선언합니다: var pair = group.OrderBy(key => key.X).ToArray(); |
| 35 | variable-initializer | 변수의 초기값을 지정합니다: pair = group.OrderBy(key => key.X).ToArray() |
| 36 | if | 조건에 따라 분기합니다: if (pair.Length != 2) |
| 37 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Y={group.Key:0.###} 행에는 DK가 {pair.Length}개 있습니다. 좌우 DK 두 개로 구성된 행을 선택해 주세요.") |
| 37 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Y={group.Key:0.###} 행에는 DK가 {pair.Length}개 있습니다. 좌우 DK 두 개로 구성된 행을 선택해 주세요."); |
| 38 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_INTERPOLATION_ROW(pair[0], pair[1]) |
| 38 | local-declaration | 지역 변수를 선언합니다: var row = new ST_ALIGN_INTERPOLATION_ROW(pair[0], pair[1]); |
| 38 | variable-initializer | 변수의 초기값을 지정합니다: row = new ST_ALIGN_INTERPOLATION_ROW(pair[0], pair[1]) |
| 39 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateRow(row) |
| 40 | if | 조건에 따라 분기합니다: if (row.Y <= top.Y &#124;&#124; row.Y >= bottom.Y) |
| 41 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{pair[0].Name} / {pair[1].Name}의 Y 위치가 위·아래 AK 사이에 있어야 합니다.") |
| 41 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{pair[0].Name} / {pair[1].Name}의 Y 위치가 위·아래 AK 사이에 있어야 합니다."); |
| 42 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Add(row) |
| 45 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Add(bottom) |
| 46 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Zip(rows.Skip(1), (first, second) => second.Y - first.Y).Any(span => span <= 1e-9) |
| 46 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Zip(rows.Skip(1), (first, second) => second.Y - first.Y) |
| 46 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Skip(1) |
| 46 | if | 조건에 따라 분기합니다: if (rows.Zip(rows.Skip(1), (first, second) => second.Y - first.Y).Any(span => span <= 1e-9)) |
| 47 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("선택한 키 행의 Y 간격이 너무 작습니다.") |
| 47 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("선택한 키 행의 Y 간격이 너무 작습니다."); |
| 48 | assignment | 값을 대상에 대입합니다: Rows = rows.ToArray() |
| 48 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.ToArray() |
| 49 | assignment | 값을 대상에 대입합니다: _normalizedY = rows.Select(row => (row.Y - top.Y) / (bottom.Y - top.Y)).ToArray() |
| 49 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Select(row => (row.Y - top.Y) / (bottom.Y - top.Y)).ToArray() |
| 49 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: rows.Select(row => (row.Y - top.Y) / (bottom.Y - top.Y)) |
| 50 | assignment | 값을 대상에 대입합니다: _weights = _normalizedY.Select((value, index) => 1.0 / _normalizedY.Where((_, other) => other != index).Aggregate(1.0, (product, other) => product * (value - other))).ToArray() |
| 50 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _normalizedY.Select((value, index) => 1.0 / _normalizedY.Where((_, other) => other != index).Aggregate(1.0, (product, other) => product * (value - other))).ToArray() |
| 50 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _normalizedY.Select((value, index) => 1.0 / _normalizedY.Where((_, other) => other != index).Aggregate(1.0, (product, other) => product * (value - other))) |
| 50 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _normalizedY.Where((_, other) => other != index).Aggregate(1.0, (product, other) => product * (value - other)) |
| 50 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _normalizedY.Where((_, other) => other != index) |
| 51 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _weights.Any(weight => !double.IsFinite(weight)) |
| 51 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(weight) |
| 51 | if | 조건에 따라 분기합니다: if (_weights.Any(weight => !double.IsFinite(weight))) |
| 52 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("선택한 키의 Y 간격으로 라그랑쥬 보간을 계산할 수 없습니다.") |
| 52 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("선택한 키의 Y 간격으로 라그랑쥬 보간을 계산할 수 없습니다."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M[".ctor"]
 N0["L26 if"]
 M -->|포함| N0
 N1["L33 foreach"]
 M -->|포함| N1
 N2["L36 if"]
 N1 -->|포함| N2
 N3["L40 if"]
 N1 -->|포함| N3
 N4["L46 if"]
 M -->|포함| N4
 N5["L51 if"]
 M -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Find` · L21–21

[Drilling.Common/Correction/CAlignInterpolation.cs:21–21](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L21-L21)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY Find(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| name | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L22-L22) | Find | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L22-L22) | Find | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:23–23](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L23-L23) | Find | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:23–23](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L23-L23) | Find | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 21 | byName.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.TryGetValue(string, out Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) |
| 21 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 21 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: byName.TryGetValue(name, out var key) |
| 21 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{name} 키 위치가 없습니다.") |
| 21 | conditional-expression | 조건에 따라 결과식을 선택합니다: byName.TryGetValue(name, out var key) ? key : throw new InvalidOperationException($"{name} 키 위치가 없습니다.") |
| 21 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{name} 키 위치가 없습니다.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Contains` · L55–63

[Drilling.Common/Correction/CAlignInterpolation.cs:55–63](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L55-L63)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Correction.CAlignInterpolation.Contains(double, double) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| x | double | None | False /  |
| y | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:76–76](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L76-L76) | Contains | False |
| [Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:689–689](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L689-L689) | model.Contains | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2794–2794](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2794-L2794) | model!.Contains | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 57 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 57 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 59 | FindInterval | resolved | (Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW First, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW Second, double Fraction) Drilling.Common.Correction.CAlignInterpolation.FindInterval(double) · Drilling.Common/Correction/CAlignInterpolation.cs:96 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 57 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(x) |
| 57 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(y) |
| 57 | if | 조건에 따라 분기합니다: if (!double.IsFinite(x) &#124;&#124; !double.IsFinite(y) &#124;&#124; y < Rows[0].Y &#124;&#124; y > Rows[^1].Y) |
| 58 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 59 | assignment | 값을 대상에 대입합니다: var(first, second, fraction) = FindInterval(y) |
| 59 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FindInterval(y) |
| 60 | local-declaration | 지역 변수를 선언합니다: var left = first.Left.X + fraction * (second.Left.X - first.Left.X); |
| 60 | variable-initializer | 변수의 초기값을 지정합니다: left = first.Left.X + fraction * (second.Left.X - first.Left.X) |
| 61 | local-declaration | 지역 변수를 선언합니다: var right = first.Right.X + fraction * (second.Right.X - first.Right.X); |
| 61 | variable-initializer | 변수의 초기값을 지정합니다: right = first.Right.X + fraction * (second.Right.X - first.Right.X) |
| 62 | return | 호출자에게 값 또는 제어를 반환합니다: return x >= left - 1e-9 && x <= right + 1e-9; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Contains"]
 N0["L57 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateMeasurements` · L65–72

[Drilling.Common/Correction/CAlignInterpolation.cs:65–72](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L65-L72)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Correction.CAlignInterpolation.ValidateMeasurements() |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:78–78](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L78-L78) | ValidateMeasurements | False |
| [Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:680–680](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L680-L680) | model.ValidateMeasurements | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:5190–5190](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L5190-L5190) | model.ValidateMeasurements | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 69 | ReadCorrection | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.ReadCorrection(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) · Drilling.Common/Correction/CAlignInterpolation.cs:110 |
| 70 | ReadCorrection | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.ReadCorrection(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) · Drilling.Common/Correction/CAlignInterpolation.cs:110 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 67 | foreach | 컬렉션 요소를 순회합니다: foreach (var row in Rows) |
| 69 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadCorrection(row.Left) |
| 70 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadCorrection(row.Right) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateMeasurements"]
 N0["L67 foreach"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Evaluate` · L74–94

[Drilling.Common/Correction/CAlignInterpolation.cs:74–94](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L74-L94)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Evaluate(double, double) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_CORRECTION |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| x | double | None | False /  |
| y | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:691–691](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L691-L691) | model.Evaluate | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2794–2794](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2794-L2794) | model.Evaluate | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 76 | Contains | resolved | bool Drilling.Common.Correction.CAlignInterpolation.Contains(double, double) · Drilling.Common/Correction/CAlignInterpolation.cs:55 |
| 77 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 78 | ValidateMeasurements | resolved | void Drilling.Common.Correction.CAlignInterpolation.ValidateMeasurements() · Drilling.Common/Correction/CAlignInterpolation.cs:65 |
| 81 | EvaluateRow | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.EvaluateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, double) · Drilling.Common/Correction/CAlignInterpolation.cs:111 |
| 87 | EvaluateRow | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.EvaluateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, double) · Drilling.Common/Correction/CAlignInterpolation.cs:111 |
| 93 | Finite | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Finite(Drilling.Common.Correction.ST_ALIGN_CORRECTION) · Drilling.Common/Correction/CAlignInterpolation.cs:113 |
| 93 | new ST_ALIGN_CORRECTION | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION.ST_ALIGN_CORRECTION(double, double) · Drilling.Common/Correction/CAlignInterpolation.cs:122 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 76 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Contains(x, y) |
| 76 | if | 조건에 따라 분기합니다: if (!Contains(x, y)) |
| 77 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("검증 위치가 선택한 키로 구성된 보간 범위를 벗어납니다.") |
| 77 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("검증 위치가 선택한 키로 구성된 보간 범위를 벗어납니다."); |
| 78 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ValidateMeasurements() |
| 79 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 79 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < Rows.Count; index++) |
| 80 | if | 조건에 따라 분기합니다: if (y == Rows[index].Y) |
| 81 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EvaluateRow(Rows[index], x) |
| 81 | return | 호출자에게 값 또는 제어를 반환합니다: return EvaluateRow(Rows[index], x); |
| 82 | local-declaration | 지역 변수를 선언합니다: var normalized = (y - Rows[0].Y) / (Rows[^1].Y - Rows[0].Y); |
| 82 | variable-initializer | 변수의 초기값을 지정합니다: normalized = (y - Rows[0].Y) / (Rows[^1].Y - Rows[0].Y) |
| 83 | local-declaration | 지역 변수를 선언합니다: double denominator = 0, numeratorX = 0, numeratorY = 0; |
| 83 | variable-initializer | 변수의 초기값을 지정합니다: denominator = 0 |
| 83 | variable-initializer | 변수의 초기값을 지정합니다: numeratorX = 0 |
| 83 | variable-initializer | 변수의 초기값을 지정합니다: numeratorY = 0 |
| 84 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 84 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < Rows.Count; index++) |
| 86 | local-declaration | 지역 변수를 선언합니다: var term = _weights[index] / (normalized - _normalizedY[index]); |
| 86 | variable-initializer | 변수의 초기값을 지정합니다: term = _weights[index] / (normalized - _normalizedY[index]) |
| 87 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: EvaluateRow(Rows[index], x) |
| 87 | local-declaration | 지역 변수를 선언합니다: var value = EvaluateRow(Rows[index], x); |
| 87 | variable-initializer | 변수의 초기값을 지정합니다: value = EvaluateRow(Rows[index], x) |
| 88 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: denominator += term |
| 89 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: numeratorX += term * value.X |
| 90 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: numeratorY += term * value.Y |
| 93 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Finite(new ST_ALIGN_CORRECTION(numeratorX / denominator, numeratorY / denominator)) |
| 93 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_CORRECTION(numeratorX / denominator, numeratorY / denominator) |
| 93 | return | 호출자에게 값 또는 제어를 반환합니다: return Finite(new ST_ALIGN_CORRECTION(numeratorX / denominator, numeratorY / denominator)); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Evaluate"]
 N0["L76 if"]
 M -->|포함| N0
 N1["L79 for"]
 M -->|포함| N1
 N2["L80 if"]
 N1 -->|포함| N2
 N3["L84 for"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FindInterval` · L96–102

[Drilling.Common/Correction/CAlignInterpolation.cs:96–102](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L96-L102)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | (Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW First, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW Second, double Fraction) Drilling.Common.Correction.CAlignInterpolation.FindInterval(double) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | (Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW First, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW Second, double Fraction) |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| y | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:59–59](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L59-L59) | FindInterval | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 101 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 98 | variable-initializer | 변수의 초기값을 지정합니다: index = 1 |
| 98 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 1; index < Rows.Count; index++) |
| 99 | if | 조건에 따라 분기합니다: if (y <= Rows[index].Y) |
| 100 | return | 호출자에게 값 또는 제어를 반환합니다: return (Rows[index - 1], Rows[index], (y - Rows[index - 1].Y) / (Rows[index].Y - Rows[index - 1].Y)); |
| 101 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("검증 위치의 Y 구간을 찾을 수 없습니다.") |
| 101 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("검증 위치의 Y 구간을 찾을 수 없습니다."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["FindInterval"]
 N0["L98 for"]
 M -->|포함| N0
 N1["L99 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ValidateRow` · L104–108

[Drilling.Common/Correction/CAlignInterpolation.cs:104–108](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L104-L108)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Correction.CAlignInterpolation.ValidateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:24–24](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L24-L24) | ValidateRow | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:25–25](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L25-L25) | ValidateRow | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:39–39](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L39-L39) | ValidateRow | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 106 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 106 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 106 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 106 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 107 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(row.Y) |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(row.Right.Y) |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(row.Left.X) |
| 106 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(row.Right.X) |
| 106 | if | 조건에 따라 분기합니다: if (!double.IsFinite(row.Y) &#124;&#124; !double.IsFinite(row.Right.Y) &#124;&#124; row.Y != row.Right.Y &#124;&#124; !double.IsFinite(row.Left.X) &#124;&#124; !double.IsFinite(row.Right.X) &#124;&#124; row.Right.X - row.Left.X <= 1e-9) |
| 107 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{row.Left.Name} / {row.Right.Name}는 같은 Y에서 서로 다른 X 위치에 있어야 합니다.") |
| 107 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{row.Left.Name} / {row.Right.Name}는 같은 Y에서 서로 다른 X 위치에 있어야 합니다."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ValidateRow"]
 N0["L106 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadCorrection` · L110–110

[Drilling.Common/Correction/CAlignInterpolation.cs:110–110](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L110-L110)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.ReadCorrection(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_CORRECTION |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:69–69](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L69-L69) | ReadCorrection | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:70–70](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L70-L70) | ReadCorrection | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:111–111](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L111-L111) | ReadCorrection | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:111–111](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L111-L111) | ReadCorrection | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 110 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 110 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 110 | new | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION.ST_ALIGN_CORRECTION(double, double) · Drilling.Common/Correction/CAlignInterpolation.cs:122 |
| 110 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(x) |
| 110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(y) |
| 110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(x, y) |
| 110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{key.Name}의 Base / LastLoad X/Y 값이 없습니다. Load 후 다시 확인해 주세요.") |
| 110 | conditional-expression | 조건에 따라 결과식을 선택합니다: key.CorrectionX is { } x && key.CorrectionY is { } y && double.IsFinite(x) && double.IsFinite(y) ? new(x, y) : throw new InvalidOperationException($"{key.Name}의 Base / LastLoad X/Y 값이 없습니다. Load 후 다시 확인해 주세요.") |
| 110 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{key.Name}의 Base / LastLoad X/Y 값이 없습니다. Load 후 다시 확인해 주세요.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `EvaluateRow` · L111–111

[Drilling.Common/Correction/CAlignInterpolation.cs:111–111](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L111-L111)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.EvaluateRow(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_CORRECTION |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| row | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW | None | False /  |
| x | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:81–81](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L81-L81) | EvaluateRow | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:87–87](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L87-L87) | EvaluateRow | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 111 | Blend | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Blend(Drilling.Common.Correction.ST_ALIGN_CORRECTION, Drilling.Common.Correction.ST_ALIGN_CORRECTION, double) · Drilling.Common/Correction/CAlignInterpolation.cs:112 |
| 111 | ReadCorrection | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.ReadCorrection(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) · Drilling.Common/Correction/CAlignInterpolation.cs:110 |
| 111 | ReadCorrection | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.ReadCorrection(Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY) · Drilling.Common/Correction/CAlignInterpolation.cs:110 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 111 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Blend(ReadCorrection(row.Left), ReadCorrection(row.Right), (x - row.Left.X) / (row.Right.X - row.Left.X)) |
| 111 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadCorrection(row.Left) |
| 111 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadCorrection(row.Right) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Blend` · L112–112

[Drilling.Common/Correction/CAlignInterpolation.cs:112–112](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L112-L112)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Blend(Drilling.Common.Correction.ST_ALIGN_CORRECTION, Drilling.Common.Correction.ST_ALIGN_CORRECTION, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_CORRECTION |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| first | Drilling.Common.Correction.ST_ALIGN_CORRECTION | None | False /  |
| second | Drilling.Common.Correction.ST_ALIGN_CORRECTION | None | False /  |
| fraction | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:111–111](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L111-L111) | Blend | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 112 | Finite | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Finite(Drilling.Common.Correction.ST_ALIGN_CORRECTION) · Drilling.Common/Correction/CAlignInterpolation.cs:113 |
| 112 | new | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION.ST_ALIGN_CORRECTION(double, double) · Drilling.Common/Correction/CAlignInterpolation.cs:122 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 112 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Finite(new(first.X + fraction * (second.X - first.X), first.Y + fraction * (second.Y - first.Y))) |
| 112 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(first.X + fraction * (second.X - first.X), first.Y + fraction * (second.Y - first.Y)) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Finite` · L113–113

[Drilling.Common/Correction/CAlignInterpolation.cs:113–113](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L113-L113)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_CORRECTION Drilling.Common.Correction.CAlignInterpolation.Finite(Drilling.Common.Correction.ST_ALIGN_CORRECTION) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_CORRECTION |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignInterpolation |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Drilling.Common.Correction.ST_ALIGN_CORRECTION | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:93–93](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L93-L93) | Finite | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:112–112](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L112-L112) | Finite | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 113 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 113 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 113 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value.X) |
| 113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value.Y) |
| 113 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("보간 계산 결과가 유한한 값이 아닙니다.") |
| 113 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.IsFinite(value.X) && double.IsFinite(value.Y) ? value : throw new InvalidOperationException("보간 계산 결과가 유한한 값이 아닙니다.") |
| 113 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("보간 계산 결과가 유한한 값이 아닙니다.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Y` · L119–119

[Drilling.Common/Correction/CAlignInterpolation.cs:119–119](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L119-L119)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW.Y |
| 접근/수식자 | Public / public |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_ROW |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Tolerance` · L146–146

[Drilling.Common/Correction/CAlignInterpolation.cs:146–146](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L146-L146)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double? Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.Tolerance |
| 접근/수식자 | Public / public |
| 반환/값 타입 | double? |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Tolerance` · L146–146

[Drilling.Common/Correction/CAlignInterpolation.cs:146–146](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L146-L146)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double? Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.Tolerance.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | double? |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_Tolerance` · L146–146

[Drilling.Common/Correction/CAlignInterpolation.cs:146–146](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L146-L146)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.Tolerance.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | double? | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CalculatedOffsets` · L147–147

[Drilling.Common/Correction/CAlignInterpolation.cs:147–147](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L147-L147)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.CalculatedOffsets |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CalculatedOffsets` · L147–147

[Drilling.Common/Correction/CAlignInterpolation.cs:147–147](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L147-L147)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.CalculatedOffsets.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_CalculatedOffsets` · L147–147

[Drilling.Common/Correction/CAlignInterpolation.cs:147–147](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L147-L147)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.CalculatedOffsets.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ExcludedOffsets` · L148–148

[Drilling.Common/Correction/CAlignInterpolation.cs:148–148](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L148-L148)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.ExcludedOffsets |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_ExcludedOffsets` · L148–148

[Drilling.Common/Correction/CAlignInterpolation.cs:148–148](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L148-L148)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.ExcludedOffsets.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_ExcludedOffsets` · L148–148

[Drilling.Common/Correction/CAlignInterpolation.cs:148–148](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L148-L148)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.ExcludedOffsets.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Save` · L153–153

[Drilling.Common/Correction/CAlignInterpolation.cs:153–153](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L153-L153)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<string> Drilling.Common.Correction.CAlignOffsetLogFileBase.Save(Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, abstract |
| 반환/값 타입 | System.Threading.Tasks.Task<string> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignOffsetLogFileBase |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| entry | Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG | None | False /  |
| cancellationToken | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:346–346](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L346-L346) | audit.Save | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2814–2814](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2814-L2814) | logFile.Save | False |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `ApplyCount` · L158–158

[Drilling.Common/Correction/CAlignInterpolation.cs:158–158](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L158-L158)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK.ApplyCount |
| 접근/수식자 | Public / public |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CanApplyRemaining` · L159–159

[Drilling.Common/Correction/CAlignInterpolation.cs:159–159](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L159-L159)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK.CanApplyRemaining |
| 접근/수식자 | Public / public |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Summary` · L160–160

[Drilling.Common/Correction/CAlignInterpolation.cs:160–160](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L160-L160)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK.Summary |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 160 | Tolerance.ToString | resolved | string double.ToString(string?, System.IFormatProvider?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 160 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Tolerance.ToString("0.000", CultureInfo.InvariantCulture) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `SettingKey` · L165–165

[Drilling.Common/Correction/CAlignInterpolation.cs:165–165](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L165-L165)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Correction.CAlignOffsetTolerance.SettingKey |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignOffsetTolerance |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 165 | variable-initializer | 변수의 초기값을 지정합니다: SettingKey = "ALIGN_OFFSET_TOLERANCE" |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `DefaultValue` · L166–166

[Drilling.Common/Correction/CAlignInterpolation.cs:166–166](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L166-L166)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Correction.CAlignOffsetTolerance.DefaultValue |
| 접근/수식자 | Public / public, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignOffsetTolerance |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 166 | variable-initializer | 변수의 초기값을 지정합니다: DefaultValue = 0.5 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Parse` · L167–172

[Drilling.Common/Correction/CAlignInterpolation.cs:167–172](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L167-L172)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Correction.CAlignOffsetTolerance.Parse(string) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignOffsetTolerance |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:276–276](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L276-L276) | CAlignOffsetTolerance.Parse | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2839–2839](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2839-L2839) | CAlignOffsetTolerance.Parse | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 169 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 169 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 170 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 171 | CAlignShotOffsetData.RoundValue | resolved | double Drilling.Common.Recipe.CAlignShotOffsetData.RoundValue(double) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:659 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var tolerance) |
| 169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(tolerance) |
| 169 | if | 조건에 따라 분기합니다: if (!double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var tolerance) &#124;&#124; !double.IsFinite(tolerance) &#124;&#124; tolerance < 0 &#124;&#124; tolerance > 100000) |
| 170 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Setting > COMMON > ALIGN의 Align Offset Tolerance를 0 ~ 100000 mm 범위로 설정해 주세요.") |
| 170 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Setting > COMMON > ALIGN의 Align Offset Tolerance를 0 ~ 100000 mm 범위로 설정해 주세요."); |
| 171 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignShotOffsetData.RoundValue(tolerance) |
| 171 | return | 호출자에게 값 또는 제어를 반환합니다: return CAlignShotOffsetData.RoundValue(tolerance); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Parse"]
 N0["L169 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Exceeds` · L175–175

[Drilling.Common/Correction/CAlignInterpolation.cs:175–175](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L175-L175)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Correction.CAlignOffsetTolerance.Exceeds(Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET, double) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignOffsetTolerance |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| shot | Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET | None | False /  |
| tolerance | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:176–176](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L176-L176) | Exceeds | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2780–2780](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2780-L2780) | CAlignOffsetTolerance.Exceeds | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 175 | Math.Abs | resolved | double System.Math.Abs(double) |
| 175 | Math.Abs | resolved | double System.Math.Abs(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 175 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(shot.X) |
| 175 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(shot.Y) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Check` · L176–176

[Drilling.Common/Correction/CAlignInterpolation.cs:176–176](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L176-L176)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK Drilling.Common.Correction.CAlignOffsetTolerance.Check(double, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignOffsetTolerance |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| tolerance | double | None | False /  |
| offsets | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:324–324](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L324-L324) | CAlignOffsetTolerance.Check | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2770–2770](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2770-L2770) | CAlignOffsetTolerance.Check | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 176 | new | resolved | Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK.ST_ALIGN_OFFSET_TOLERANCE_CHECK(double, int, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>) · Drilling.Common/Correction/CAlignInterpolation.cs:156 |
| 176 | offsets.Where(shot => Exceeds(shot, tolerance)).ToArray | resolved | Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET[] System.Collections.Generic.IEnumerable<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>.ToArray<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>() |
| 176 | offsets.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> System.Collections.Generic.IEnumerable<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>.Where<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>(System.Func<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET, bool>) |
| 176 | Exceeds | resolved | bool Drilling.Common.Correction.CAlignOffsetTolerance.Exceeds(Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET, double) · Drilling.Common/Correction/CAlignInterpolation.cs:175 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(tolerance, offsets.Count, offsets.Where(shot => Exceeds(shot, tolerance)).ToArray()) |
| 176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: offsets.Where(shot => Exceeds(shot, tolerance)).ToArray() |
| 176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: offsets.Where(shot => Exceeds(shot, tolerance)) |
| 176 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Exceeds(shot, tolerance) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `StagePositionKey` · L182–182

[Drilling.Common/Correction/CAlignInterpolation.cs:182–182](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L182-L182)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Correction.CAlignKeyGeometry.StagePositionKey(int) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignKeyGeometry |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| group | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:186–186](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L186-L186) | StagePositionKey | False |
| [Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs:67–67](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs#L67-L67) | Drilling.Common.Correction.CAlignKeyGeometry.StagePositionKey | False |
| [Drilling.UI/Menu/Menus/CMenuRecipe.cs:1973–1973](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuRecipe.cs#L1973-L1973) | CAlignKeyGeometry.StagePositionKey | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 182 | new ArgumentOutOfRangeException | resolved | System.ArgumentOutOfRangeException.ArgumentOutOfRangeException(string?) |
| 182 | nameof | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ArgumentOutOfRangeException(nameof(group)) |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: nameof(group) |
| 182 | conditional-expression | 조건에 따라 결과식을 선택합니다: group is >= 0 and <= 2 ? $"DK{group}_STAGE_Y_POSITION" : throw new ArgumentOutOfRangeException(nameof(group)) |
| 182 | throw | 예외를 발생/전달합니다: throw new ArgumentOutOfRangeException(nameof(group)) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DesignY` · L183–183

[Drilling.Common/Correction/CAlignInterpolation.cs:183–183](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L183-L183)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Correction.CAlignKeyGeometry.DesignY(double, double, double) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignKeyGeometry |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| height | double | None | False /  |
| marginY | double | None | False /  |
| stageY | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:204–204](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L204-L204) | DesignY | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:205–205](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L205-L205) | DesignY | False |
| [Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs:69–69](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs#L69-L69) | Drilling.Common.Correction.CAlignKeyGeometry.DesignY | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 183 | Math.Clamp | resolved | double System.Math.Clamp(double, double, double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(marginY, 0, height / 2) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadStagePositions` · L184–190

[Drilling.Common/Correction/CAlignInterpolation.cs:184–190](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L184-L190)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double[] Drilling.Common.Correction.CAlignKeyGeometry.ReadStagePositions(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | double[] |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignKeyGeometry |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| settings | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:273–273](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L273-L273) | CAlignKeyGeometry.ReadStagePositions | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2832–2832](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2832-L2832) | CAlignKeyGeometry.ReadStagePositions | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 184 | Enumerable.Range(0, 3).Select(group => { var key = StagePositionKey(group); var text = settings.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value; return double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) && double.IsFinite(value) ? value : throw new InvalidOperationException($"Set… | resolved | double[] System.Collections.Generic.IEnumerable<double>.ToArray<double>() |
| 184 | Enumerable.Range(0, 3).Select | resolved | System.Collections.Generic.IEnumerable<double> System.Collections.Generic.IEnumerable<int>.Select<int, double>(System.Func<int, double>) |
| 184 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 186 | StagePositionKey | resolved | string Drilling.Common.Correction.CAlignKeyGeometry.StagePositionKey(int) · Drilling.Common/Correction/CAlignInterpolation.cs:182 |
| 187 | settings.FirstOrDefault | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, bool>) |
| 187 | p.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 188 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 188 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 189 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 3) |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 3).Select(group => { var key = StagePositionKey(group); var text = settings.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value; return double.TryParse(text, NumberStyles… |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 3).Select(group => { var key = StagePositionKey(group); var text = settings.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value; return double.TryParse(text, NumberStyles… |
| 186 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: StagePositionKey(group) |
| 186 | local-declaration | 지역 변수를 선언합니다: var key = StagePositionKey(group); |
| 186 | variable-initializer | 변수의 초기값을 지정합니다: key = StagePositionKey(group) |
| 187 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settings.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase)) |
| 187 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: p.Key.Equals(key, StringComparison.OrdinalIgnoreCase) |
| 187 | local-declaration | 지역 변수를 선언합니다: var text = settings.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value; |
| 187 | variable-initializer | 변수의 초기값을 지정합니다: text = settings.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 188 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) && double.IsFinite(value) ? value : throw new InvalidOperationException($"Setting > Motor > ALIGN의 {key}에 유효한 mm 값이 필요합니다.") |
| 188 | return | 호출자에게 값 또는 제어를 반환합니다: return double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) && double.IsFinite(value) ? value : throw new InvalidOperationException($"Setting > Motor > ALIGN의 {key}에 유효한 mm 값이 필요합니다."); |
| 189 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Setting > Motor > ALIGN의 {key}에 유효한 mm 값이 필요합니다.") |
| 189 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Setting > Motor > ALIGN의 {key}에 유효한 mm 값이 필요합니다.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Create` · L191–207

[Drilling.Common/Correction/CAlignInterpolation.cs:191–207](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L191-L207)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] Drilling.Common.Correction.CAlignKeyGeometry.Create(System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Collections.Generic.IReadOnlyList<double>) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignKeyGeometry |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| stageY | System.Collections.Generic.IReadOnlyList<double> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:263–263](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L263-L263) | CAlignKeyGeometry.Create | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:4946–4946](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L4946-L4946) | CAlignKeyGeometry.Create | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 195 | Read | resolved | double Read(string) · Drilling.Common/Correction/CAlignInterpolation.cs:193 |
| 195 | Read | resolved | double Read(string) · Drilling.Common/Correction/CAlignInterpolation.cs:193 |
| 196 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 197 | stageY.Any | resolved | bool System.Collections.Generic.IEnumerable<double>.Any<double>(System.Func<double, bool>) |
| 197 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 198 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 199 | Math.Clamp | resolved | double System.Math.Clamp(double, double, double) |
| 199 | Read | resolved | double Read(string) · Drilling.Common/Correction/CAlignInterpolation.cs:193 |
| 200 | Math.Clamp | resolved | double System.Math.Clamp(double, double, double) |
| 200 | Read | resolved | double Read(string) · Drilling.Common/Correction/CAlignInterpolation.cs:193 |
| 201 | new[] { new ST_ALIGN_INTERPOLATION_KEY("AK1", mx, my), new("AK2", mx, height - my), new("AK3", width - mx, my), new("AK4", width - mx, height - my) } .Concat(Enumerable.Range(0, 3).SelectMany(group => new[] { new ST_ALIGN_INTERPOLATION_KEY($"DK{group * 2 + 1}", mx, DesignY(height, my, stageY[group])), new ST_ALIGN_INTERPOLATION_KEY($"DK{group * 2 +… | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.ToArray<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>() |
| 201 | new[] { new ST_ALIGN_INTERPOLATION_KEY("AK1", mx, my), new("AK2", mx, height - my), new("AK3", width - mx, my), new("AK4", width - mx, height - my) } .Concat | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.Concat<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>(System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>) |
| 201 | new ST_ALIGN_INTERPOLATION_KEY | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY.ST_ALIGN_INTERPOLATION_KEY(string, double, double, double?, double?) · Drilling.Common/Correction/CAlignInterpolation.cs:116 |
| 201 | new | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY.ST_ALIGN_INTERPOLATION_KEY(string, double, double, double?, double?) · Drilling.Common/Correction/CAlignInterpolation.cs:116 |
| 201 | new | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY.ST_ALIGN_INTERPOLATION_KEY(string, double, double, double?, double?) · Drilling.Common/Correction/CAlignInterpolation.cs:116 |
| 201 | new | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY.ST_ALIGN_INTERPOLATION_KEY(string, double, double, double?, double?) · Drilling.Common/Correction/CAlignInterpolation.cs:116 |
| 202 | Enumerable.Range(0, 3).SelectMany | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY> System.Collections.Generic.IEnumerable<int>.SelectMany<int, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>(System.Func<int, System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>>) |
| 202 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 204 | new ST_ALIGN_INTERPOLATION_KEY | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY.ST_ALIGN_INTERPOLATION_KEY(string, double, double, double?, double?) · Drilling.Common/Correction/CAlignInterpolation.cs:116 |
| 204 | DesignY | resolved | double Drilling.Common.Correction.CAlignKeyGeometry.DesignY(double, double, double) · Drilling.Common/Correction/CAlignInterpolation.cs:183 |
| 205 | new ST_ALIGN_INTERPOLATION_KEY | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY.ST_ALIGN_INTERPOLATION_KEY(string, double, double, double?, double?) · Drilling.Common/Correction/CAlignInterpolation.cs:116 |
| 205 | DesignY | resolved | double Drilling.Common.Correction.CAlignKeyGeometry.DesignY(double, double, double) · Drilling.Common/Correction/CAlignInterpolation.cs:183 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 195 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("GLASS_SIZE_X") |
| 195 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("GLASS_SIZE_Y") |
| 195 | local-declaration | 지역 변수를 선언합니다: var width = Read("GLASS_SIZE_X"); |
| 195 | local-declaration | 지역 변수를 선언합니다: var height = Read("GLASS_SIZE_Y"); |
| 195 | variable-initializer | 변수의 초기값을 지정합니다: width = Read("GLASS_SIZE_X") |
| 195 | variable-initializer | 변수의 초기값을 지정합니다: height = Read("GLASS_SIZE_Y") |
| 196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Glass Size는 0보다 커야 합니다.") |
| 196 | if | 조건에 따라 분기합니다: if (width <= 0 &#124;&#124; height <= 0) |
| 196 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Glass Size는 0보다 커야 합니다."); |
| 197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: stageY.Any(v => !double.IsFinite(v)) |
| 197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(v) |
| 197 | if | 조건에 따라 분기합니다: if (stageY.Count != 3 &#124;&#124; stageY.Any(v => !double.IsFinite(v))) |
| 198 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Setting > Motor > ALIGN의 DK0/1/2 Stage Y Position을 확인하세요.") |
| 198 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Setting > Motor > ALIGN의 DK0/1/2 Stage Y Position을 확인하세요."); |
| 199 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(Read("AK_MARGIN_X"), 0, width / 2) |
| 199 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("AK_MARGIN_X") |
| 199 | local-declaration | 지역 변수를 선언합니다: var mx = Math.Clamp(Read("AK_MARGIN_X"), 0, width / 2); |
| 199 | variable-initializer | 변수의 초기값을 지정합니다: mx = Math.Clamp(Read("AK_MARGIN_X"), 0, width / 2) |
| 200 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(Read("AK_MARGIN_Y"), 0, height / 2) |
| 200 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read("AK_MARGIN_Y") |
| 200 | local-declaration | 지역 변수를 선언합니다: var my = Math.Clamp(Read("AK_MARGIN_Y"), 0, height / 2); |
| 200 | variable-initializer | 변수의 초기값을 지정합니다: my = Math.Clamp(Read("AK_MARGIN_Y"), 0, height / 2) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_INTERPOLATION_KEY("AK1", mx, my) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("AK2", mx, height - my) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("AK3", width - mx, my) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new("AK4", width - mx, height - my) |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new[] { new ST_ALIGN_INTERPOLATION_KEY("AK1", mx, my), new("AK2", mx, height - my), new("AK3", width - mx, my), new("AK4", width - mx, height - my) } .Concat(Enumerable.Range(0, 3).SelectMany(group => new[] { new ST_ALIG… |
| 201 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new[] { new ST_ALIGN_INTERPOLATION_KEY("AK1", mx, my), new("AK2", mx, height - my), new("AK3", width - mx, my), new("AK4", width - mx, height - my) } .Concat(Enumerable.Range(0, 3).SelectMany(group => new[] { new ST_ALIG… |
| 201 | return | 호출자에게 값 또는 제어를 반환합니다: return new[] { new ST_ALIGN_INTERPOLATION_KEY("AK1", mx, my), new("AK2", mx, height - my), new("AK3", width - mx, my), new("AK4", width - mx, height - my) } .Concat(Enumerable.Range(0, 3).SelectMany(group => new[] { new ST_ALIGN_I |
| 202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 3) |
| 202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 3).SelectMany(group => new[] { new ST_ALIGN_INTERPOLATION_KEY($"DK{group * 2 + 1}", mx, DesignY(height, my, stageY[group])), new ST_ALIGN_INTERPOLATION_KEY($"DK{group * 2 + 2}", width - mx, DesignY(he… |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_INTERPOLATION_KEY($"DK{group * 2 + 1}", mx, DesignY(height, my, stageY[group])) |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DesignY(height, my, stageY[group]) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_INTERPOLATION_KEY($"DK{group * 2 + 2}", width - mx, DesignY(height, my, stageY[group])) |
| 205 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DesignY(height, my, stageY[group]) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Create"]
 N0["L196 if"]
 M -->|포함| N0
 N1["L197 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Read` · L193–194

[Drilling.Common/Correction/CAlignInterpolation.cs:193–194](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L193-L194)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Read(string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignKeyGeometry |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:195–195](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L195-L195) | Read | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:195–195](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L195-L195) | Read | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:199–199](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L199-L199) | Read | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:200–200](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L200-L200) | Read | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 193 | recipe.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 193 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 193 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 194 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.TryGetValue(key, out var text) |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var v) |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(v) |
| 193 | conditional-expression | 조건에 따라 결과식을 선택합니다: recipe.TryGetValue(key, out var text) && double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var v) && double.IsFinite(v) ? v : throw new InvalidOperationException($"{key}의 유효한 숫자 값이 필요합니다.") |
| 194 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{key}의 유효한 숫자 값이 필요합니다.") |
| 194 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{key}의 유효한 숫자 값이 필요합니다.") |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `StageYPositions` · L216–216

[Drilling.Common/Correction/CAlignInterpolation.cs:216–216](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L216-L216)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<double> Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT.StageYPositions |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<double> |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_StageYPositions` · L216–216

[Drilling.Common/Correction/CAlignInterpolation.cs:216–216](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L216-L216)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<double> Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT.StageYPositions.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<double> |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_StageYPositions` · L216–216

[Drilling.Common/Correction/CAlignInterpolation.cs:216–216](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L216-L216)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT.StageYPositions.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | System.Collections.Generic.IReadOnlyList<double> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_io` · L223–223

[Drilling.Common/Correction/CAlignInterpolation.cs:223–223](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L223-L223)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.CAlignWapageService Drilling.Common.Correction.CAlignDistortionCycle._io |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | Drilling.Common.Correction.CAlignWapageService |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 223 | new | resolved | Drilling.Common.Correction.CAlignWapageService.CAlignWapageService(Drilling.Common.Interface.CInterfaceManager?) · Drilling.Common/Correction/CAlignInterpolation.cs:380 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(interfaces) |
| 223 | variable-initializer | 변수의 초기값을 지정합니다: _io = new(interfaces) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_input` · L224–224

[Drilling.Common/Correction/CAlignInterpolation.cs:224–224](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L224-L224)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? Drilling.Common.Correction.CAlignDistortionCycle._input |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_pending` · L224–224

[Drilling.Common/Correction/CAlignInterpolation.cs:224–224](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L224-L224)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? Drilling.Common.Correction.CAlignDistortionCycle._pending |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_recipe` · L225–225

[Drilling.Common/Correction/CAlignInterpolation.cs:225–225](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L225-L225)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? Drilling.Common.Correction.CAlignDistortionCycle._recipe |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_DEFINITION? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_groups` · L226–226

[Drilling.Common/Correction/CAlignInterpolation.cs:226–226](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L226-L226)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int[] Drilling.Common.Correction.CAlignDistortionCycle._groups |
| 접근/수식자 | Private / private |
| 반환/값 타입 | int[] |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 226 | variable-initializer | 변수의 초기값을 지정합니다: _groups = [] |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_stageYPositions` · L227–227

[Drilling.Common/Correction/CAlignInterpolation.cs:227–227](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L227-L227)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<double> Drilling.Common.Correction.CAlignDistortionCycle._stageYPositions |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<double> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 227 | variable-initializer | 변수의 초기값을 지정합니다: _stageYPositions = [] |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_tolerance` · L228–228

[Drilling.Common/Correction/CAlignInterpolation.cs:228–228](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L228-L228)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Correction.CAlignDistortionCycle._tolerance |
| 접근/수식자 | Private / private |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_results` · L229–229

[Drilling.Common/Correction/CAlignInterpolation.cs:229–229](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L229-L229)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, double>? Drilling.Common.Correction.CAlignDistortionCycle._results |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, double>? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_model` · L230–230

[Drilling.Common/Correction/CAlignInterpolation.cs:230–230](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L230-L230)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.CAlignInterpolation? Drilling.Common.Correction.CAlignDistortionCycle._model |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Correction.CAlignInterpolation? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_offsets` · L231–231

[Drilling.Common/Correction/CAlignInterpolation.cs:231–231](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L231-L231)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>? Drilling.Common.Correction.CAlignDistortionCycle._offsets |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_loadedAt` · L232–232

[Drilling.Common/Correction/CAlignInterpolation.cs:232–232](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L232-L232)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.DateTimeOffset? Drilling.Common.Correction.CAlignDistortionCycle._loadedAt |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.DateTimeOffset? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_saved` · L233–233

[Drilling.Common/Correction/CAlignInterpolation.cs:233–233](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L233-L233)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.Common.Correction.CAlignDistortionCycle._saved |
| 접근/수식자 | Private / private |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_snapshot` · L234–234

[Drilling.Common/Correction/CAlignInterpolation.cs:234–234](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L234-L234)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT? Drilling.Common.Correction.CAlignDistortionCycle._snapshot |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Snapshot` · L235–235

[Drilling.Common/Correction/CAlignInterpolation.cs:235–235](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L235-L235)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT? Drilling.Common.Correction.CAlignDistortionCycle.Snapshot |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 235 | Volatile.Read | resolved | Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT? System.Threading.Volatile.Read<Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?>(ref readonly Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Volatile.Read(ref _snapshot) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `GlassId` · L236–236

[Drilling.Common/Correction/CAlignInterpolation.cs:236–236](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L236-L236)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Correction.CAlignDistortionCycle.GlassId |
| 접근/수식자 | Public / public |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ResultId` · L237–248

[Drilling.Common/Correction/CAlignInterpolation.cs:237–248](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L237-L248)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.Common.Correction.CAlignDistortionCycle.ResultId(string) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameterKey | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:311–311](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L311-L311) | ResultId | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:316–316](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L316-L316) | ResultId | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:5480–5480](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L5480-L5480) | CAlignDistortionCycle.ResultId | False |
| [Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs:77–77](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Popup/CMelsecStageSimulationDialog.xaml.cs#L77-L77) | CAlignDistortionCycle.ResultId | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 239 | parameterKey.Split | resolved | string[] string.Split(char, System.StringSplitOptions) |
| 241 | int.TryParse | resolved | bool int.TryParse(System.ReadOnlySpan<char>, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 241 | parts[1].AsSpan | resolved | System.ReadOnlySpan<char> string?.AsSpan(int) |
| 242 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 243 | parts[1].StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 245 | parts[1].StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 247 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 239 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameterKey.Split('_') |
| 239 | local-declaration | 지역 변수를 선언합니다: var parts = parameterKey.Split('_'); |
| 239 | variable-initializer | 변수의 초기값을 지정합니다: parts = parameterKey.Split('_') |
| 240 | if | 조건에 따라 분기합니다: if (parts.Length != 3 &#124;&#124; parts[0] != "ALIGNBASE" &#124;&#124; parts[2] is not ("X" or "Y") &#124;&#124; parts[1].Length < 3 &#124;&#124; !int.TryParse(parts[1].AsSpan(2), NumberStyles.None, CultureInfo.InvariantCulture, out var number)) |
| 241 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(parts[1].AsSpan(2), NumberStyles.None, CultureInfo.InvariantCulture, out var number) |
| 241 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parts[1].AsSpan(2) |
| 242 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"알 수 없는 Align LastLoad 항목: {parameterKey}") |
| 242 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"알 수 없는 Align LastLoad 항목: {parameterKey}"); |
| 243 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parts[1].StartsWith("AK", StringComparison.Ordinal) |
| 243 | if | 조건에 따라 분기합니다: if (parts[1].StartsWith("AK", StringComparison.Ordinal) && number is >= 1 and <= 4) |
| 244 | return | 호출자에게 값 또는 제어를 반환합니다: return $"DISTORTION_POS0_CAM{number}{parts[2]}"; |
| 245 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parts[1].StartsWith("DK", StringComparison.Ordinal) |
| 245 | if | 조건에 따라 분기합니다: if (parts[1].StartsWith("DK", StringComparison.Ordinal) && number is >= 1 and <= 6) |
| 246 | conditional-expression | 조건에 따라 결과식을 선택합니다: number % 2 == 1 ? 2 : 4 |
| 246 | return | 호출자에게 값 또는 제어를 반환합니다: return $"DISTORTION_POS{(number - 1) / 2 + 1}_CAM{(number % 2 == 1 ? 2 : 4)}{parts[2]}"; |
| 247 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"알 수 없는 Align LastLoad 항목: {parameterKey}") |
| 247 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"알 수 없는 Align LastLoad 항목: {parameterKey}"); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ResultId"]
 N0["L240 if"]
 M -->|포함| N0
 N1["L243 if"]
 M -->|포함| N1
 N2["L245 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Names` · L249–250

[Drilling.Common/Correction/CAlignInterpolation.cs:249–250](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L249-L250)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string[] Drilling.Common.Correction.CAlignDistortionCycle.Names(System.Collections.Generic.IReadOnlyCollection<int>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string[] |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| groups | System.Collections.Generic.IReadOnlyCollection<int> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:251–251](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L251-L251) | Names | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:282–282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L282-L282) | Names | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:322–322](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L322-L322) | Names | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:335–335](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L335-L335) | Names | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 249 | Enumerable.Range(1, 4).Select(n => $"AK{n}") .Concat(groups.Order().SelectMany(group => new[] { $"DK{group * 2 + 1}", $"DK{group * 2 + 2}" })).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 249 | Enumerable.Range(1, 4).Select(n => $"AK{n}") .Concat | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Concat<string>(System.Collections.Generic.IEnumerable<string>) |
| 249 | Enumerable.Range(1, 4).Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<int>.Select<int, string>(System.Func<int, string>) |
| 249 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 250 | groups.Order().SelectMany | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<int>.SelectMany<int, string>(System.Func<int, System.Collections.Generic.IEnumerable<string>>) |
| 250 | groups.Order | resolved | System.Linq.IOrderedEnumerable<int> System.Collections.Generic.IEnumerable<int>.Order<int>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4).Select(n => $"AK{n}") |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4) |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4).Select(n => $"AK{n}") .Concat(groups.Order().SelectMany(group => new[] { $"DK{group * 2 + 1}", $"DK{group * 2 + 2}" })).ToArray() |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4).Select(n => $"AK{n}") .Concat(groups.Order().SelectMany(group => new[] { $"DK{group * 2 + 1}", $"DK{group * 2 + 2}" })) |
| 250 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: groups.Order().SelectMany(group => new[] { $"DK{group * 2 + 1}", $"DK{group * 2 + 2}" }) |
| 250 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: groups.Order() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ParameterKeys` · L251–251

[Drilling.Common/Correction/CAlignInterpolation.cs:251–251](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L251-L251)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string[] Drilling.Common.Correction.CAlignDistortionCycle.ParameterKeys(System.Collections.Generic.IReadOnlyCollection<int>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string[] |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| groups | System.Collections.Generic.IReadOnlyCollection<int> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:284–284](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L284-L284) | ParameterKeys | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:286–286](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L286-L286) | ParameterKeys | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:297–297](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L297-L297) | ParameterKeys | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:309–309](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L309-L309) | ParameterKeys | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 251 | Names(groups).SelectMany(name => new[] { $"ALIGNBASE_{name}_X", $"ALIGNBASE_{name}_Y" }).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 251 | Names(groups).SelectMany | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.SelectMany<string, string>(System.Func<string, System.Collections.Generic.IEnumerable<string>>) |
| 251 | Names | resolved | string[] Drilling.Common.Correction.CAlignDistortionCycle.Names(System.Collections.Generic.IReadOnlyCollection<int>) · Drilling.Common/Correction/CAlignInterpolation.cs:249 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(groups).SelectMany(name => new[] { $"ALIGNBASE_{name}_X", $"ALIGNBASE_{name}_Y" }).ToArray() |
| 251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(groups).SelectMany(name => new[] { $"ALIGNBASE_{name}_X", $"ALIGNBASE_{name}_Y" }) |
| 251 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(groups) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Read` · L252–257

[Drilling.Common/Correction/CAlignInterpolation.cs:252–257](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L252-L257)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.Common.Correction.CAlignDistortionCycle.Read(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | System.Collections.Generic.IReadOnlyDictionary<string, string> | None | False /  |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:262–262](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L262-L262) | Read | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:277–277](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L277-L277) | Read | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:278–278](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L278-L278) | Read | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:284–284](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L284-L284) | Read | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 254 | values.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, string>.TryGetValue(string, out string) |
| 254 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 254 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 255 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.TryGetValue(key, out var text) |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 254 | if | 조건에 따라 분기합니다: if (!values.TryGetValue(key, out var text) &#124;&#124; !double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) &#124;&#124; !double.IsFinite(value)) |
| 255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{key}의 유효한 숫자 값이 필요합니다.") |
| 255 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{key}의 유효한 숫자 값이 필요합니다."); |
| 256 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Read"]
 N0["L254 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Keys` · L258–264

[Drilling.Common/Correction/CAlignInterpolation.cs:258–264](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L258-L264)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] Drilling.Common.Correction.CAlignDistortionCycle.Keys() |
| 접근/수식자 | Private / private |
| 반환/값 타입 | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:282–282](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L282-L282) | Keys | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:322–322](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L322-L322) | Keys | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:338–338](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L338-L338) | Keys | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 260 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 261 | recipe.Parameters.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 263 | CAlignKeyGeometry.Create(p, _stageYPositions).Select(key => key with { CorrectionX = Delta(key.Name, "X"), CorrectionY = Delta(key.Name, "Y") }).ToArray | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.ToArray<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>() |
| 263 | CAlignKeyGeometry.Create(p, _stageYPositions).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.Select<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>(System.Func<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>) |
| 263 | CAlignKeyGeometry.Create | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] Drilling.Common.Correction.CAlignKeyGeometry.Create(System.Collections.Generic.IReadOnlyDictionary<string, string>, System.Collections.Generic.IReadOnlyList<double>) · Drilling.Common/Correction/CAlignInterpolation.cs:191 |
| 263 | Delta | resolved | double? Delta(string, string) · Drilling.Common/Correction/CAlignInterpolation.cs:262 |
| 263 | Delta | resolved | double? Delta(string, string) · Drilling.Common/Correction/CAlignInterpolation.cs:262 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Distortion 레시피가 준비되지 않았습니다.") |
| 260 | local-declaration | 지역 변수를 선언합니다: var recipe = _recipe ?? throw new InvalidOperationException("Distortion 레시피가 준비되지 않았습니다."); |
| 260 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Distortion 레시피가 준비되지 않았습니다.") |
| 260 | variable-initializer | 변수의 초기값을 지정합니다: recipe = _recipe ?? throw new InvalidOperationException("Distortion 레시피가 준비되지 않았습니다.") |
| 261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.ToDictionary(item => item.Key, item => item.Value, StringComparer.OrdinalIgnoreCase) |
| 261 | local-declaration | 지역 변수를 선언합니다: var p = recipe.Parameters.ToDictionary(item => item.Key, item => item.Value, StringComparer.OrdinalIgnoreCase); |
| 261 | variable-initializer | 변수의 초기값을 지정합니다: p = recipe.Parameters.ToDictionary(item => item.Key, item => item.Value, StringComparer.OrdinalIgnoreCase) |
| 263 | assignment | 값을 대상에 대입합니다: CorrectionX = Delta(key.Name, "X") |
| 263 | assignment | 값을 대상에 대입합니다: CorrectionY = Delta(key.Name, "Y") |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignKeyGeometry.Create(p, _stageYPositions).Select(key => key with { CorrectionX = Delta(key.Name, "X"), CorrectionY = Delta(key.Name, "Y") }).ToArray() |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignKeyGeometry.Create(p, _stageYPositions).Select(key => key with { CorrectionX = Delta(key.Name, "X"), CorrectionY = Delta(key.Name, "Y") }) |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignKeyGeometry.Create(p, _stageYPositions) |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Delta(key.Name, "X") |
| 263 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Delta(key.Name, "Y") |
| 263 | return | 호출자에게 값 또는 제어를 반환합니다: return CAlignKeyGeometry.Create(p, _stageYPositions).Select(key => key with { CorrectionX = Delta(key.Name, "X"), CorrectionY = Delta(key.Name, "Y") }).ToArray(); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `Delta` · L262–262

[Drilling.Common/Correction/CAlignInterpolation.cs:262–262](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L262-L262)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double? Delta(string, string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | double? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| name | string | None | False /  |
| axis | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:263–263](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L263-L263) | Delta | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:263–263](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L263-L263) | Delta | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 262 | _results.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, double>.TryGetValue(string, out double) |
| 262 | Read | resolved | double Drilling.Common.Correction.CAlignDistortionCycle.Read(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Correction/CAlignInterpolation.cs:252 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _results.TryGetValue($"ALIGNBASE_{name}_{axis}", out var measured) |
| 262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(p, $"ALIGNBASE_{name}_{axis}") |
| 262 | conditional-expression | 조건에 따라 결과식을 선택합니다: _results is not null && _results.TryGetValue($"ALIGNBASE_{name}_{axis}", out var measured) ? Read(p, $"ALIGNBASE_{name}_{axis}") - measured : null |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Prepare` · L266–305

[Drilling.Common/Correction/CAlignInterpolation.cs:266–305](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L266-L305)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Correction.CAlignDistortionCycle.Prepare(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 268 | Volatile.Write | resolved | void System.Threading.Volatile.Write<Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?>(ref Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?, Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?) |
| 270 | capture(token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST>.ConfigureAwait(bool) |
| 270 | capture | resolved · 동적 구현 선택 가능 | System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST> System.Func<System.Threading.CancellationToken, System.Threading.Tasks.Task<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST>>.Invoke(System.Threading.CancellationToken) |
| 271 | recipes.RefreshRecipe(_input.RecipeId, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?>.ConfigureAwait(bool) |
| 271 | recipes.RefreshRecipe | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION?> Drilling.Common.Managers.CRecipeManager.RefreshRecipe(string, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:159 |
| 271 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 272 | settings.LoadSection(EN_SETTING_TAB.Option).ToArray | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.ToArray<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>() |
| 272 | settings.LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 273 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<double> System.Array.AsReadOnly<double>(double[]) |
| 273 | CAlignKeyGeometry.ReadStagePositions | resolved | double[] Drilling.Common.Correction.CAlignKeyGeometry.ReadStagePositions(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) · Drilling.Common/Correction/CAlignInterpolation.cs:184 |
| 273 | settings.LoadSection | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER> Drilling.Common.Managers.CSettingManager.LoadSection(Drilling.Common.Managers.EN_SETTING_TAB, System.Threading.CancellationToken) · Drilling.Common/Managers/CSettingManager.cs:26 |
| 274 | CRunOptionSettings.Read(option).DistortionGroups.ToArray | resolved | int[] System.Collections.Generic.IEnumerable<int>.ToArray<int>() |
| 274 | CRunOptionSettings.Read | resolved | Drilling.Common.Managers.ST_RUN_OPTION_SETTINGS Drilling.Common.Managers.CRunOptionSettings.Read(System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>) · Drilling.Common/Managers/CSettingManager.cs:198 |
| 275 | option.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 276 | CAlignOffsetTolerance.Parse | resolved | double Drilling.Common.Correction.CAlignOffsetTolerance.Parse(string) · Drilling.Common/Correction/CAlignInterpolation.cs:167 |
| 276 | op.GetValueOrDefault | resolved | string System.Collections.Generic.IReadOnlyDictionary<string, string>.GetValueOrDefault<string, string>(string, string) |
| 277 | Read | resolved | double Drilling.Common.Correction.CAlignDistortionCycle.Read(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Correction/CAlignInterpolation.cs:252 |
| 278 | Read | resolved | double Drilling.Common.Correction.CAlignDistortionCycle.Read(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Correction/CAlignInterpolation.cs:252 |
| 279 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 281 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 281 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 282 | new CAlignInterpolation | resolved | Drilling.Common.Correction.CAlignInterpolation.CAlignInterpolation(System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>, System.Collections.Generic.IReadOnlyCollection<string>) · Drilling.Common/Correction/CAlignInterpolation.cs:18 |
| 282 | Keys | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] Drilling.Common.Correction.CAlignDistortionCycle.Keys() · Drilling.Common/Correction/CAlignInterpolation.cs:258 |
| 282 | Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 282 | Names(_groups).Where | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Where<string>(System.Func<string, bool>) |
| 282 | Names | resolved | string[] Drilling.Common.Correction.CAlignDistortionCycle.Names(System.Collections.Generic.IReadOnlyCollection<int>) · Drilling.Common/Correction/CAlignInterpolation.cs:249 |
| 282 | name.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 283 | _recipe.Parameters.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 284 | ParameterKeys | resolved | string[] Drilling.Common.Correction.CAlignDistortionCycle.ParameterKeys(System.Collections.Generic.IReadOnlyCollection<int>) · Drilling.Common/Correction/CAlignInterpolation.cs:251 |
| 284 | Read | resolved | double Drilling.Common.Correction.CAlignDistortionCycle.Read(System.Collections.Generic.IReadOnlyDictionary<string, string>, string) · Drilling.Common/Correction/CAlignInterpolation.cs:252 |
| 286 | ParameterKeys([0, 1, 2]).ToHashSet | resolved | System.Collections.Generic.HashSet<string> System.Collections.Generic.IEnumerable<string>.ToHashSet<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 286 | ParameterKeys | resolved | string[] Drilling.Common.Correction.CAlignDistortionCycle.ParameterKeys(System.Collections.Generic.IReadOnlyCollection<int>) · Drilling.Common/Correction/CAlignInterpolation.cs:251 |
| 287 | displayKeys.UnionWith | resolved | void System.Collections.Generic.HashSet<string>.UnionWith(System.Collections.Generic.IEnumerable<string>) |
| 288 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Array.AsReadOnly<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(Drilling.Common.Managers.ST_RECIPE_PARAMETER[]) |
| 288 | _recipe.Parameters.Where(p => displayKeys.Contains(p.Key)).ToArray | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER[] System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToArray<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |
| 288 | _recipe.Parameters.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Where<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 288 | displayKeys.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |
| 289 | Volatile.Write | resolved | void System.Threading.Volatile.Write<Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?>(ref Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?, Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?) |
| 289 | new | resolved | Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT.ST_DISTORTION_MEASUREMENT_SNAPSHOT(System.Guid, Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, System.Collections.Generic.IReadOnlyList<int>, System.Collections.Generic.IReadOnlyDictionary<string, double>, System.DateTimeOffset?) · Drilling.Common/Correction/CAlignInterpolation.cs:213 |
| 289 | Guid.NewGuid | resolved | System.Guid System.Guid.NewGuid() |
| 289 | Array.AsReadOnly | resolved | System.Collections.ObjectModel.ReadOnlyCollection<int> System.Array.AsReadOnly<int>(int[]) |
| 289 | _groups.ToArray | resolved | int[] System.Collections.Generic.IEnumerable<int>.ToArray<int>() |
| 290 | new System.Collections.ObjectModel.ReadOnlyDictionary<string, double> | resolved | System.Collections.ObjectModel.ReadOnlyDictionary<string, double>.ReadOnlyDictionary(System.Collections.Generic.IDictionary<string, double>) |
| 290 | new Dictionary<string, double> | resolved | System.Collections.Generic.Dictionary<string, double>.Dictionary() |
| 291 | new List<(string Id, double Value)> | resolved | System.Collections.Generic.List<(string Id, double Value)>.List() |
| 292 | control.Add | resolved | void System.Collections.Generic.List<(string Id, double Value)>.Add((string Id, double Value)) |
| 292 | _groups.Contains | resolved | bool System.ReadOnlySpan<int>.Contains<int>(int) |
| 293 | control.Add | resolved | void System.Collections.Generic.List<(string Id, double Value)>.Add((string Id, double Value)) |
| 294 | Enumerable.Range(1, 4).SelectMany(camera => new[] { $"SVID_FINEALN_CAM{camera}_GLS_RESULT_X", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_Y" }).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 294 | Enumerable.Range(1, 4).SelectMany | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<int>.SelectMany<int, string>(System.Func<int, System.Collections.Generic.IEnumerable<string>>) |
| 294 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 296 | _io.Validate | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Correction.CAlignWapageService.Validate(System.Collections.Generic.IReadOnlyCollection<string>, bool) · Drilling.Common/Correction/CAlignInterpolation.cs:388 |
| 297 | _io.Validate | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Correction.CAlignWapageService.Validate(System.Collections.Generic.IReadOnlyCollection<string>, bool) · Drilling.Common/Correction/CAlignInterpolation.cs:388 |
| 297 | ParameterKeys(_groups).Select(ResultId).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 297 | ParameterKeys(_groups).Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Select<string, string>(System.Func<string, string>) |
| 297 | ParameterKeys | resolved | string[] Drilling.Common.Correction.CAlignDistortionCycle.ParameterKeys(System.Collections.Generic.IReadOnlyCollection<int>) · Drilling.Common/Correction/CAlignInterpolation.cs:251 |
| 298 | _io.Validate | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Correction.CAlignWapageService.Validate(System.Collections.Generic.IReadOnlyCollection<string>, bool) · Drilling.Common/Correction/CAlignInterpolation.cs:388 |
| 298 | CAlignWapageService.Points.SelectMany(point => new[] { point.BaseId, point.RangeId }).Concat(control.Select(item => item.Id)).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 298 | CAlignWapageService.Points.SelectMany(point => new[] { point.BaseId, point.RangeId }).Concat | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Concat<string>(System.Collections.Generic.IEnumerable<string>) |
| 298 | CAlignWapageService.Points.SelectMany | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>.SelectMany<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, string>(System.Func<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, System.Collections.Generic.IEnumerable<string>>) |
| 298 | control.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<(string Id, double Value)>.Select<(string Id, double Value), string>(System.Func<(string Id, double Value), string>) |
| 299 | Log | resolved | void Drilling.Common.Correction.CAlignDistortionCycle.Log(string) · Drilling.Common/Correction/CAlignInterpolation.cs:361 |
| 299 | string.Join | resolved | string string.Join<int>(string?, System.Collections.Generic.IEnumerable<int>) |
| 299 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |
| 299 | control.Where(item => item.Id.EndsWith("_POSITION")).Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<(string Id, double Value)>.Select<(string Id, double Value), string>(System.Func<(string Id, double Value), string>) |
| 299 | control.Where | resolved | System.Collections.Generic.IEnumerable<(string Id, double Value)> System.Collections.Generic.IEnumerable<(string Id, double Value)>.Where<(string Id, double Value)>(System.Func<(string Id, double Value), bool>) |
| 299 | item.Id.EndsWith | resolved | bool string.EndsWith(string) |
| 300 | _io.ReadValues(visionIds, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyDictionary<string, double>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>>.ConfigureAwait(bool) |
| 300 | _io.ReadValues | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.ReadValues(string[], System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:415 |
| 301 | _io.SetBase(vision, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyDictionary<string, double>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>>.ConfigureAwait(bool) |
| 301 | _io.SetBase | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.SetBase(System.Collections.Generic.IReadOnlyDictionary<string, double>, System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:433 |
| 302 | _io.SetRange(pixels, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyDictionary<string, double>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>>.ConfigureAwait(bool) |
| 302 | _io.SetRange | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.SetRange(double, System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:439 |
| 303 | _io.WriteValues(control.ToArray(), token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyDictionary<string, double>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>>.ConfigureAwait(bool) |
| 303 | _io.WriteValues | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.WriteValues((string Id, double Value)[], System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:420 |
| 303 | control.ToArray | resolved | (string Id, double Value)[] System.Collections.Generic.List<(string Id, double Value)>.ToArray() |
| 304 | Log | resolved | void Drilling.Common.Correction.CAlignDistortionCycle.Log(string) · Drilling.Common/Correction/CAlignInterpolation.cs:361 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 268 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Volatile.Write(ref _snapshot, null) |
| 269 | assignment | 값을 대상에 대입합니다: _pending = null |
| 269 | assignment | 값을 대상에 대입합니다: _results = null |
| 269 | assignment | 값을 대상에 대입합니다: _offsets = null |
| 269 | assignment | 값을 대상에 대입합니다: _model = null |
| 269 | assignment | 값을 대상에 대입합니다: _loadedAt = null |
| 269 | assignment | 값을 대상에 대입합니다: _saved = false |
| 270 | assignment | 값을 대상에 대입합니다: _input = await capture(token).ConfigureAwait(false) |
| 270 | await | 비동기 완료를 기다립니다: await capture(token).ConfigureAwait(false) |
| 270 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: capture(token).ConfigureAwait(false) |
| 270 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: capture(token) |
| 271 | assignment | 값을 대상에 대입합니다: _recipe = await recipes.RefreshRecipe(_input.RecipeId, token).ConfigureAwait(false) ?? throw new InvalidOperationException("Distortion 레시피를 찾을 수 없습니다.") |
| 271 | await | 비동기 완료를 기다립니다: await recipes.RefreshRecipe(_input.RecipeId, token).ConfigureAwait(false) |
| 271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.RefreshRecipe(_input.RecipeId, token).ConfigureAwait(false) |
| 271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.RefreshRecipe(_input.RecipeId, token) |
| 271 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Distortion 레시피를 찾을 수 없습니다.") |
| 271 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Distortion 레시피를 찾을 수 없습니다.") |
| 272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settings.LoadSection(EN_SETTING_TAB.Option).ToArray() |
| 272 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settings.LoadSection(EN_SETTING_TAB.Option) |
| 272 | local-declaration | 지역 변수를 선언합니다: var option = settings.LoadSection(EN_SETTING_TAB.Option).ToArray(); |
| 272 | variable-initializer | 변수의 초기값을 지정합니다: option = settings.LoadSection(EN_SETTING_TAB.Option).ToArray() |
| 273 | assignment | 값을 대상에 대입합니다: _stageYPositions = Array.AsReadOnly(CAlignKeyGeometry.ReadStagePositions(settings.LoadSection(EN_SETTING_TAB.Motor))) |
| 273 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(CAlignKeyGeometry.ReadStagePositions(settings.LoadSection(EN_SETTING_TAB.Motor))) |
| 273 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignKeyGeometry.ReadStagePositions(settings.LoadSection(EN_SETTING_TAB.Motor)) |
| 273 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: settings.LoadSection(EN_SETTING_TAB.Motor) |
| 274 | assignment | 값을 대상에 대입합니다: _groups = CRunOptionSettings.Read(option).DistortionGroups.ToArray() |
| 274 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRunOptionSettings.Read(option).DistortionGroups.ToArray() |
| 274 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRunOptionSettings.Read(option) |
| 275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: option.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 275 | local-declaration | 지역 변수를 선언합니다: var op = option.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase); |
| 275 | variable-initializer | 변수의 초기값을 지정합니다: op = option.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 276 | assignment | 값을 대상에 대입합니다: _tolerance = CAlignOffsetTolerance.Parse(op.GetValueOrDefault(CAlignOffsetTolerance.SettingKey, "0.5")) |
| 276 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignOffsetTolerance.Parse(op.GetValueOrDefault(CAlignOffsetTolerance.SettingKey, "0.5")) |
| 276 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: op.GetValueOrDefault(CAlignOffsetTolerance.SettingKey, "0.5") |
| 277 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(op, CSettingManager.AlignCameraResolutionKey) |
| 277 | local-declaration | 지역 변수를 선언합니다: var resolution = Read(op, CSettingManager.AlignCameraResolutionKey); |
| 277 | variable-initializer | 변수의 초기값을 지정합니다: resolution = Read(op, CSettingManager.AlignCameraResolutionKey) |
| 278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(op, CSettingManager.WapageAlignBaseToleranceKey) |
| 278 | local-declaration | 지역 변수를 선언합니다: var rangeMm = Read(op, CSettingManager.WapageAlignBaseToleranceKey); |
| 278 | variable-initializer | 변수의 초기값을 지정합니다: rangeMm = Read(op, CSettingManager.WapageAlignBaseToleranceKey) |
| 279 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Align 분해능은 양수, Wapage 허용범위는 0 이상이어야 합니다.") |
| 279 | if | 조건에 따라 분기합니다: if (resolution <= 0 &#124;&#124; rangeMm < 0) |
| 279 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Align 분해능은 양수, Wapage 허용범위는 0 이상이어야 합니다."); |
| 280 | local-declaration | 지역 변수를 선언합니다: var pixels = rangeMm / resolution; |
| 280 | variable-initializer | 변수의 초기값을 지정합니다: pixels = rangeMm / resolution |
| 281 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(pixels) |
| 281 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Wapage pixel 범위를 계산할 수 없습니다.") |
| 281 | if | 조건에 따라 분기합니다: if (!double.IsFinite(pixels)) |
| 281 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Wapage pixel 범위를 계산할 수 없습니다."); |
| 282 | assignment | 값을 대상에 대입합니다: _ = new CAlignInterpolation(Keys(), Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)).ToArray()) |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new CAlignInterpolation(Keys(), Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)).ToArray()) |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Keys() |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)).ToArray() |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)) |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(_groups) |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: name.StartsWith("DK", StringComparison.Ordinal) |
| 283 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipe.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 283 | local-declaration | 지역 변수를 선언합니다: var rp = _recipe.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase); |
| 283 | variable-initializer | 변수의 초기값을 지정합니다: rp = _recipe.Parameters.ToDictionary(p => p.Key, p => p.Value, StringComparer.OrdinalIgnoreCase) |
| 284 | assignment | 값을 대상에 대입합니다: _ = Read(rp, key) |
| 284 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParameterKeys(_groups) |
| 284 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(rp, key) |
| 284 | foreach | 컬렉션 요소를 순회합니다: foreach (var key in ParameterKeys(_groups)) |
| 286 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParameterKeys([0, 1, 2]).ToHashSet(StringComparer.OrdinalIgnoreCase) |
| 286 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParameterKeys([0, 1, 2]) |
| 286 | local-declaration | 지역 변수를 선언합니다: var displayKeys = ParameterKeys([0, 1, 2]).ToHashSet(StringComparer.OrdinalIgnoreCase); |
| 286 | variable-initializer | 변수의 초기값을 지정합니다: displayKeys = ParameterKeys([0, 1, 2]).ToHashSet(StringComparer.OrdinalIgnoreCase) |
| 287 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: displayKeys.UnionWith(new[] { "GLASS_SIZE_X", "GLASS_SIZE_Y", "AK_MARGIN_X", "AK_MARGIN_Y" }) |
| 288 | assignment | 값을 대상에 대입합니다: Parameters = Array.AsReadOnly(_recipe.Parameters.Where(p => displayKeys.Contains(p.Key)).ToArray()) |
| 288 | assignment | 값을 대상에 대입합니다: History = [] |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(_recipe.Parameters.Where(p => displayKeys.Contains(p.Key)).ToArray()) |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipe.Parameters.Where(p => displayKeys.Contains(p.Key)).ToArray() |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipe.Parameters.Where(p => displayKeys.Contains(p.Key)) |
| 288 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: displayKeys.Contains(p.Key) |
| 288 | local-declaration | 지역 변수를 선언합니다: var frozenRecipe = _recipe with { Parameters = Array.AsReadOnly(_recipe.Parameters.Where(p => displayKeys.Contains(p.Key)).ToArray()), History = [] }; |
| 288 | variable-initializer | 변수의 초기값을 지정합니다: frozenRecipe = _recipe with { Parameters = Array.AsReadOnly(_recipe.Parameters.Where(p => displayKeys.Contains(p.Key)).ToArray()), History = [] } |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Guid.NewGuid() |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Array.AsReadOnly(_groups.ToArray()) |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _groups.ToArray() |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Volatile.Write(ref _snapshot, new(Guid.NewGuid(), frozenRecipe, GlassId, Array.AsReadOnly(_groups.ToArray()), new System.Collections.ObjectModel.ReadOnlyDictionary<string, double>(new Dictionary<string, double>()), null)… |
| 289 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(Guid.NewGuid(), frozenRecipe, GlassId, Array.AsReadOnly(_groups.ToArray()), new System.Collections.ObjectModel.ReadOnlyDictionary<string, double>(new Dictionary<string, double>()), null) { StageYPositions = _stageYPo… |
| 290 | assignment | 값을 대상에 대입합니다: StageYPositions = _stageYPositions |
| 290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new System.Collections.ObjectModel.ReadOnlyDictionary<string, double>(new Dictionary<string, double>()) |
| 290 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, double>() |
| 291 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<(string Id, double Value)> { ("PROCESS_DISTORTION_COUNT", _groups.Length) } |
| 291 | local-declaration | 지역 변수를 선언합니다: var control = new List<(string Id, double Value)> { ("PROCESS_DISTORTION_COUNT", _groups.Length) }; |
| 291 | variable-initializer | 변수의 초기값을 지정합니다: control = new List<(string Id, double Value)> { ("PROCESS_DISTORTION_COUNT", _groups.Length) } |
| 292 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: control.Add(($"PROCESS_DISTORTION_INDEX_{index}", _groups.Contains(index) ? 1 : 0)) |
| 292 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _groups.Contains(index) |
| 292 | conditional-expression | 조건에 따라 결과식을 선택합니다: _groups.Contains(index) ? 1 : 0 |
| 292 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < 3; index++) |
| 292 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: control.Add(($"PROCESS_DISTORTION_INDEX_{index}_POSITION", _stageYPositions[index])) |
| 293 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < 3; index++) |
| 293 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 294 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4).SelectMany(camera => new[] { $"SVID_FINEALN_CAM{camera}_GLS_RESULT_X", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_Y" }).ToArray() |
| 294 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4).SelectMany(camera => new[] { $"SVID_FINEALN_CAM{camera}_GLS_RESULT_X", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_Y" }) |
| 294 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4) |
| 294 | local-declaration | 지역 변수를 선언합니다: var visionIds = Enumerable.Range(1, 4).SelectMany(camera => new[] { $"SVID_FINEALN_CAM{camera}_GLS_RESULT_X", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_Y" }).ToArray(); |
| 294 | variable-initializer | 변수의 초기값을 지정합니다: visionIds = Enumerable.Range(1, 4).SelectMany(camera => new[] { $"SVID_FINEALN_CAM{camera}_GLS_RESULT_X", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_Y" }).ToArray() |
| 296 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.Validate(visionIds, false) |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.Validate(ParameterKeys(_groups).Select(ResultId).ToArray(), false) |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParameterKeys(_groups).Select(ResultId).ToArray() |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParameterKeys(_groups).Select(ResultId) |
| 297 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParameterKeys(_groups) |
| 298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.Validate(CAlignWapageService.Points.SelectMany(point => new[] { point.BaseId, point.RangeId }).Concat(control.Select(item => item.Id)).ToArray(), true) |
| 298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignWapageService.Points.SelectMany(point => new[] { point.BaseId, point.RangeId }).Concat(control.Select(item => item.Id)).ToArray() |
| 298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignWapageService.Points.SelectMany(point => new[] { point.BaseId, point.RangeId }).Concat(control.Select(item => item.Id)) |
| 298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignWapageService.Points.SelectMany(point => new[] { point.BaseId, point.RangeId }) |
| 298 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: control.Select(item => item.Id) |
| 299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Log($"측정 조건 동결 · Recipe={_recipe.Name}; Groups={string.Join(",", _groups)}; Count={_groups.Length}; Range={pixels:0.####} pixel; " + string.Join(",", control.Where(item => item.Id.EndsWith("_POSITION")).Select(item => $"… |
| 299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(",", _groups) |
| 299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join(",", control.Where(item => item.Id.EndsWith("_POSITION")).Select(item => $"{item.Id}={item.Value:0.####} mm")) |
| 299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: control.Where(item => item.Id.EndsWith("_POSITION")).Select(item => $"{item.Id}={item.Value:0.####} mm") |
| 299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: control.Where(item => item.Id.EndsWith("_POSITION")) |
| 299 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Id.EndsWith("_POSITION") |
| 300 | await | 비동기 완료를 기다립니다: await _io.ReadValues(visionIds, token).ConfigureAwait(false) |
| 300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.ReadValues(visionIds, token).ConfigureAwait(false) |
| 300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.ReadValues(visionIds, token) |
| 300 | local-declaration | 지역 변수를 선언합니다: var vision = await _io.ReadValues(visionIds, token).ConfigureAwait(false); |
| 300 | variable-initializer | 변수의 초기값을 지정합니다: vision = await _io.ReadValues(visionIds, token).ConfigureAwait(false) |
| 301 | await | 비동기 완료를 기다립니다: await _io.SetBase(vision, token).ConfigureAwait(false) |
| 301 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.SetBase(vision, token).ConfigureAwait(false) |
| 301 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.SetBase(vision, token) |
| 302 | await | 비동기 완료를 기다립니다: await _io.SetRange(pixels, token).ConfigureAwait(false) |
| 302 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.SetRange(pixels, token).ConfigureAwait(false) |
| 302 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.SetRange(pixels, token) |
| 303 | await | 비동기 완료를 기다립니다: await _io.WriteValues(control.ToArray(), token).ConfigureAwait(false) |
| 303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.WriteValues(control.ToArray(), token).ConfigureAwait(false) |
| 303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.WriteValues(control.ToArray(), token) |
| 303 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: control.ToArray() |
| 304 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Log("Wapage Base/Range · Distortion Count/Index/Stage Y 기록 및 읽기 확인 완료") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Prepare"]
 N0["L279 if"]
 M -->|포함| N0
 N1["L281 if"]
 M -->|포함| N1
 N2["L284 foreach"]
 M -->|포함| N2
 N3["L292 for"]
 M -->|포함| N3
 N4["L293 for"]
 M -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `LoadResults` · L306–317

[Drilling.Common/Correction/CAlignInterpolation.cs:306–317](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L306-L317)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Correction.CAlignDistortionCycle.LoadResults(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 308 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 309 | ParameterKeys | resolved | string[] Drilling.Common.Correction.CAlignDistortionCycle.ParameterKeys(System.Collections.Generic.IReadOnlyCollection<int>) · Drilling.Common/Correction/CAlignInterpolation.cs:251 |
| 310 | _io.ReadValues(keys.Select(ResultId).ToArray(), token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<System.Collections.Generic.IReadOnlyDictionary<string, double>> System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>>.ConfigureAwait(bool) |
| 310 | _io.ReadValues | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.ReadValues(string[], System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:415 |
| 310 | keys.Select(ResultId).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 310 | keys.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Select<string, string>(System.Func<string, string>) |
| 311 | keys.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, double> System.Collections.Generic.IEnumerable<string>.ToDictionary<string, string, double>(System.Func<string, string>, System.Func<string, double>, System.Collections.Generic.IEqualityComparer<string>?) |
| 311 | ResultId | resolved | string Drilling.Common.Correction.CAlignDistortionCycle.ResultId(string) · Drilling.Common/Correction/CAlignInterpolation.cs:237 |
| 314 | Volatile.Write | resolved | void System.Threading.Volatile.Write<Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?>(ref Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?, Drilling.Common.Correction.ST_DISTORTION_MEASUREMENT_SNAPSHOT?) |
| 314 | new System.Collections.ObjectModel.ReadOnlyDictionary<string, double> | resolved | System.Collections.ObjectModel.ReadOnlyDictionary<string, double>.ReadOnlyDictionary(System.Collections.Generic.IDictionary<string, double>) |
| 315 | new Dictionary<string, double> | resolved | System.Collections.Generic.Dictionary<string, double>.Dictionary(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, double>>, System.Collections.Generic.IEqualityComparer<string>?) |
| 316 | Log | resolved | void Drilling.Common.Correction.CAlignDistortionCycle.Log(string) · Drilling.Common/Correction/CAlignInterpolation.cs:361 |
| 316 | ResultId | resolved | string Drilling.Common.Correction.CAlignDistortionCycle.ResultId(string) · Drilling.Common/Correction/CAlignInterpolation.cs:237 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 308 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Distortion 준비가 필요합니다.") |
| 308 | if | 조건에 따라 분기합니다: if (_recipe is null) |
| 308 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Distortion 준비가 필요합니다."); |
| 309 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ParameterKeys(_groups) |
| 309 | local-declaration | 지역 변수를 선언합니다: var keys = ParameterKeys(_groups); |
| 309 | variable-initializer | 변수의 초기값을 지정합니다: keys = ParameterKeys(_groups) |
| 310 | await | 비동기 완료를 기다립니다: await _io.ReadValues(keys.Select(ResultId).ToArray(), token).ConfigureAwait(false) |
| 310 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.ReadValues(keys.Select(ResultId).ToArray(), token).ConfigureAwait(false) |
| 310 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _io.ReadValues(keys.Select(ResultId).ToArray(), token) |
| 310 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: keys.Select(ResultId).ToArray() |
| 310 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: keys.Select(ResultId) |
| 310 | local-declaration | 지역 변수를 선언합니다: var values = await _io.ReadValues(keys.Select(ResultId).ToArray(), token).ConfigureAwait(false); |
| 310 | variable-initializer | 변수의 초기값을 지정합니다: values = await _io.ReadValues(keys.Select(ResultId).ToArray(), token).ConfigureAwait(false) |
| 311 | assignment | 값을 대상에 대입합니다: _results = keys.ToDictionary(key => key, key => values[ResultId(key)], StringComparer.OrdinalIgnoreCase) |
| 311 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: keys.ToDictionary(key => key, key => values[ResultId(key)], StringComparer.OrdinalIgnoreCase) |
| 311 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResultId(key) |
| 312 | assignment | 값을 대상에 대입합니다: _loadedAt = DateTimeOffset.Now |
| 313 | if | 조건에 따라 분기합니다: if (Snapshot is { } frame) |
| 314 | assignment | 값을 대상에 대입합니다: LastLoads = new System.Collections.ObjectModel.ReadOnlyDictionary<string, double>( new Dictionary<string, double>(_results, StringComparer.OrdinalIgnoreCase)) |
| 314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Volatile.Write(ref _snapshot, frame with { LastLoads = new System.Collections.ObjectModel.ReadOnlyDictionary<string, double>( new Dictionary<string, double>(_results, StringComparer.OrdinalIgnoreCase)), LoadedAt = _loade… |
| 314 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new System.Collections.ObjectModel.ReadOnlyDictionary<string, double>( new Dictionary<string, double>(_results, StringComparer.OrdinalIgnoreCase)) |
| 315 | assignment | 값을 대상에 대입합니다: LoadedAt = _loadedAt |
| 315 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, double>(_results, StringComparer.OrdinalIgnoreCase) |
| 316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Log($"측정값 취득 · {key}={_results[key]:0.####} mm ({ResultId(key)})") |
| 316 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ResultId(key) |
| 316 | foreach | 컬렉션 요소를 순회합니다: foreach (var key in keys) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["LoadResults"]
 N0["L308 if"]
 M -->|포함| N0
 N1["L313 if"]
 M -->|포함| N1
 N2["L316 foreach"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Calculate` · L318–328

[Drilling.Common/Correction/CAlignInterpolation.cs:318–328](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L318-L328)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Correction.CAlignDistortionCycle.Calculate(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 318 | Task.Run | resolved | System.Threading.Tasks.Task System.Threading.Tasks.Task.Run(System.Action, System.Threading.CancellationToken) |
| 320 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 321 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 322 | new | resolved | Drilling.Common.Correction.CAlignInterpolation.CAlignInterpolation(System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>, System.Collections.Generic.IReadOnlyCollection<string>) · Drilling.Common/Correction/CAlignInterpolation.cs:18 |
| 322 | Keys | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] Drilling.Common.Correction.CAlignDistortionCycle.Keys() · Drilling.Common/Correction/CAlignInterpolation.cs:258 |
| 322 | Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 322 | Names(_groups).Where | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Where<string>(System.Func<string, bool>) |
| 322 | Names | resolved | string[] Drilling.Common.Correction.CAlignDistortionCycle.Names(System.Collections.Generic.IReadOnlyCollection<int>) · Drilling.Common/Correction/CAlignInterpolation.cs:249 |
| 322 | name.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 323 | CAlignShotOffsetData.Calculate | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> Drilling.Common.Recipe.CAlignShotOffsetData.Calculate(Drilling.Common.Managers.ST_RECIPE_DEFINITION, Drilling.Common.Correction.CAlignInterpolation) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:678 |
| 324 | CAlignOffsetTolerance.Check | resolved | Drilling.Common.Correction.ST_ALIGN_OFFSET_TOLERANCE_CHECK Drilling.Common.Correction.CAlignOffsetTolerance.Check(double, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>) · Drilling.Common/Correction/CAlignInterpolation.cs:176 |
| 325 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 325 | string.Join | resolved | string string.Join(string?, System.Collections.Generic.IEnumerable<string?>) |
| 325 | exceeded.Take(8).Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>.Select<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET, string>(System.Func<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET, string>) |
| 325 | exceeded.Take | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET> System.Collections.Generic.IEnumerable<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>.Take<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>(int) |
| 327 | Log | resolved | void Drilling.Common.Correction.CAlignDistortionCycle.Log(string) · Drilling.Common/Correction/CAlignInterpolation.cs:361 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 318 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run(() => { token.ThrowIfCancellationRequested(); if (_results is null &#124;&#124; _recipe is null) throw new InvalidOperationException("Distortion 측정 결과가 없습니다."); _model = new(Keys(), Names(_groups).Where(name => name.Start… |
| 320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 321 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Distortion 측정 결과가 없습니다.") |
| 321 | if | 조건에 따라 분기합니다: if (_results is null &#124;&#124; _recipe is null) |
| 321 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Distortion 측정 결과가 없습니다."); |
| 322 | assignment | 값을 대상에 대입합니다: _model = new(Keys(), Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)).ToArray()) |
| 322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(Keys(), Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)).ToArray()) |
| 322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Keys() |
| 322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)).ToArray() |
| 322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(_groups).Where(name => name.StartsWith("DK", StringComparison.Ordinal)) |
| 322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(_groups) |
| 322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: name.StartsWith("DK", StringComparison.Ordinal) |
| 323 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignShotOffsetData.Calculate(_recipe, _model) |
| 323 | local-declaration | 지역 변수를 선언합니다: var offsets = CAlignShotOffsetData.Calculate(_recipe, _model); |
| 323 | variable-initializer | 변수의 초기값을 지정합니다: offsets = CAlignShotOffsetData.Calculate(_recipe, _model) |
| 324 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignOffsetTolerance.Check(_tolerance, offsets) |
| 324 | local-declaration | 지역 변수를 선언합니다: var exceeded = CAlignOffsetTolerance.Check(_tolerance, offsets).ExceededShots; |
| 324 | variable-initializer | 변수의 초기값을 지정합니다: exceeded = CAlignOffsetTolerance.Check(_tolerance, offsets).ExceededShots |
| 325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Align Offset Tolerance ±{_tolerance:0.000} mm 초과 {exceeded.Count} Shot. 전체 적용 취소. " + string.Join("; ", exceeded.Take(8).Select(shot => $"Cell{shot.CellNo}/{shot.ShotName}: X={shot.X:0.000… |
| 325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.Join("; ", exceeded.Take(8).Select(shot => $"Cell{shot.CellNo}/{shot.ShotName}: X={shot.X:0.000}, Y={shot.Y:0.000}")) |
| 325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: exceeded.Take(8).Select(shot => $"Cell{shot.CellNo}/{shot.ShotName}: X={shot.X:0.000}, Y={shot.Y:0.000}") |
| 325 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: exceeded.Take(8) |
| 325 | if | 조건에 따라 분기합니다: if (exceeded.Count > 0) |
| 325 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Align Offset Tolerance ±{_tolerance:0.000} mm 초과 {exceeded.Count} Shot. 전체 적용 취소. " + string.Join("; ", exceeded.Take(8).Select(shot => $"Cell{shot.CellNo}/{shot.ShotName}: X={shot.X:0.000}, Y |
| 326 | assignment | 값을 대상에 대입합니다: _offsets = offsets |
| 327 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Log($"Base−LastLoad 라그랑주 계산 완료 · {offsets.Count} Shot · Tolerance ±{_tolerance:0.000} mm · 설계 좌표 기준") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Calculate"]
 N0["L321 if"]
 M -->|포함| N0
 N1["L325 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Save` · L329–353

[Drilling.Common/Correction/CAlignInterpolation.cs:329–353](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L329-L353)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task Drilling.Common.Correction.CAlignDistortionCycle.Save(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public, async |
| 반환/값 타입 | System.Threading.Tasks.Task |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 333 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 334 | recipes.SaveAlignOffsetsIfUnchanged(_recipe, _offsets, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<Drilling.Common.Managers.ST_RECIPE_DEFINITION> System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION>.ConfigureAwait(bool) |
| 334 | recipes.SaveAlignOffsetsIfUnchanged | resolved | System.Threading.Tasks.Task<Drilling.Common.Managers.ST_RECIPE_DEFINITION> Drilling.Common.Managers.CRecipeManager.SaveAlignOffsetsIfUnchanged(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>, System.Threading.CancellationToken) · Drilling.Common/Managers/CRecipeManager.cs:94 |
| 335 | Names(_groups).ToHashSet | resolved | System.Collections.Generic.HashSet<string> System.Collections.Generic.IEnumerable<string>.ToHashSet<string>(System.Collections.Generic.IEqualityComparer<string>?) |
| 335 | Names | resolved | string[] Drilling.Common.Correction.CAlignDistortionCycle.Names(System.Collections.Generic.IReadOnlyCollection<int>) · Drilling.Common/Correction/CAlignInterpolation.cs:249 |
| 336 | _recipe.Parameters.ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.ToDictionary<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 338 | Keys().Select(key => { var delta = selected.Contains(key.Name) ? new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) : (ST_ALIGN_CORRECTION?)null; return new ST_ALIGN_OFFSET_KEY_LOG(key.Name, selected.Contains(key.Name), key.X, key.Y, OptionalBase(key.Name, "X"), OptionalBase(key.Name, "Y"), _results.GetValueOrDefault($"ALIGNBAS… | resolved | Drilling.Common.Correction.ST_ALIGN_OFFSET_KEY_LOG[] System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_OFFSET_KEY_LOG>.ToArray<Drilling.Common.Correction.ST_ALIGN_OFFSET_KEY_LOG>() |
| 338 | Keys().Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_OFFSET_KEY_LOG> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY>.Select<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, Drilling.Common.Correction.ST_ALIGN_OFFSET_KEY_LOG>(System.Func<Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY, Drilling.Common.Correction.ST_ALIGN_OFFSET_KEY_LOG>) |
| 338 | Keys | resolved | Drilling.Common.Correction.ST_ALIGN_INTERPOLATION_KEY[] Drilling.Common.Correction.CAlignDistortionCycle.Keys() · Drilling.Common/Correction/CAlignInterpolation.cs:258 |
| 340 | selected.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |
| 340 | new ST_ALIGN_CORRECTION | resolved | Drilling.Common.Correction.ST_ALIGN_CORRECTION.ST_ALIGN_CORRECTION(double, double) · Drilling.Common/Correction/CAlignInterpolation.cs:122 |
| 341 | new ST_ALIGN_OFFSET_KEY_LOG | resolved | Drilling.Common.Correction.ST_ALIGN_OFFSET_KEY_LOG.ST_ALIGN_OFFSET_KEY_LOG(string, bool, double, double, double?, double?, double?, double?, double?, double?) · Drilling.Common/Correction/CAlignInterpolation.cs:123 |
| 341 | selected.Contains | resolved | bool System.Collections.Generic.HashSet<string>.Contains(string) |
| 341 | OptionalBase | resolved | double? OptionalBase(string, string) · Drilling.Common/Correction/CAlignInterpolation.cs:337 |
| 341 | OptionalBase | resolved | double? OptionalBase(string, string) · Drilling.Common/Correction/CAlignInterpolation.cs:337 |
| 342 | _results.GetValueOrDefault | resolved | double System.Collections.Generic.IReadOnlyDictionary<string, double>.GetValueOrDefault<string, double>(string, double) |
| 342 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 343 | _results.GetValueOrDefault | resolved | double System.Collections.Generic.IReadOnlyDictionary<string, double>.GetValueOrDefault<string, double>(string, double) |
| 343 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 345 | interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec).Any | resolved | bool System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.Any<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>(System.Func<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, bool>) |
| 345 | interfaces.GetInterfaceCommunicationList | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.Common.Interface.CInterfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE?) · Drilling.Common/Interface/CInterfaceManager.cs:472 |
| 346 | audit.Save(new(_recipe.Id, _recipe.Name, false, DateTimeOffset.Now, _loadedAt, simulation, keyLog, _offsets) { Tolerance = _tolerance, CalculatedOffsets = _offsets }, token).ConfigureAwait | resolved | System.Runtime.CompilerServices.ConfiguredTaskAwaitable<string> System.Threading.Tasks.Task<string>.ConfigureAwait(bool) |
| 346 | audit.Save | resolved | System.Threading.Tasks.Task<string> Drilling.Common.Correction.CAlignOffsetLogFileBase.Save(Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG, System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:153 |
| 346 | new | resolved | Drilling.Common.Correction.ST_ALIGN_OFFSET_LOG.ST_ALIGN_OFFSET_LOG(string, string, bool, System.DateTimeOffset, System.DateTimeOffset?, bool, System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_ALIGN_OFFSET_KEY_LOG>, System.Collections.Generic.IReadOnlyList<Drilling.Common.Recipe.ST_ALIGN_SHOT_OFFSET>) · Drilling.Common/Correction/CAlignInterpolation.cs:135 |
| 347 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>, System.Collections.Generic.IEqualityComparer<string>?) |
| 348 | parameters.Keys.Where(CAlignShotOffsetData.IsParameterKey).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 348 | parameters.Keys.Where | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Where<string>(System.Func<string, bool>) |
| 348 | parameters.Remove | resolved | bool System.Collections.Generic.Dictionary<string, string>.Remove(string) |
| 349 | saved.Parameters.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Where<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 349 | CAlignShotOffsetData.IsParameterKey | resolved | bool Drilling.Common.Recipe.CAlignShotOffsetData.IsParameterKey(string) · Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs:657 |
| 350 | Interlocked.Exchange | resolved | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? System.Threading.Interlocked.Exchange<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?>(ref Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?, Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?) |
| 352 | Log | resolved | void Drilling.Common.Correction.CAlignDistortionCycle.Log(string) · Drilling.Common/Correction/CAlignInterpolation.cs:361 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 331 | if | 조건에 따라 분기합니다: if (_saved) |
| 331 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 332 | if | 조건에 따라 분기합니다: if (_recipe is null &#124;&#124; _input is null &#124;&#124; _model is null &#124;&#124; _offsets is null &#124;&#124; _results is null) |
| 333 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Distortion 보정 계산이 완료되지 않았습니다.") |
| 333 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Distortion 보정 계산이 완료되지 않았습니다."); |
| 334 | await | 비동기 완료를 기다립니다: await recipes.SaveAlignOffsetsIfUnchanged(_recipe, _offsets, token).ConfigureAwait(false) |
| 334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.SaveAlignOffsetsIfUnchanged(_recipe, _offsets, token).ConfigureAwait(false) |
| 334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipes.SaveAlignOffsetsIfUnchanged(_recipe, _offsets, token) |
| 334 | local-declaration | 지역 변수를 선언합니다: var saved = await recipes.SaveAlignOffsetsIfUnchanged(_recipe, _offsets, token).ConfigureAwait(false); |
| 334 | variable-initializer | 변수의 초기값을 지정합니다: saved = await recipes.SaveAlignOffsetsIfUnchanged(_recipe, _offsets, token).ConfigureAwait(false) |
| 335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(_groups).ToHashSet(StringComparer.Ordinal) |
| 335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Names(_groups) |
| 335 | local-declaration | 지역 변수를 선언합니다: var selected = Names(_groups).ToHashSet(StringComparer.Ordinal); |
| 335 | variable-initializer | 변수의 초기값을 지정합니다: selected = Names(_groups).ToHashSet(StringComparer.Ordinal) |
| 336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _recipe.Parameters.ToDictionary(item => item.Key, item => item.Value, StringComparer.OrdinalIgnoreCase) |
| 336 | local-declaration | 지역 변수를 선언합니다: var p = _recipe.Parameters.ToDictionary(item => item.Key, item => item.Value, StringComparer.OrdinalIgnoreCase); |
| 336 | variable-initializer | 변수의 초기값을 지정합니다: p = _recipe.Parameters.ToDictionary(item => item.Key, item => item.Value, StringComparer.OrdinalIgnoreCase) |
| 338 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Keys() |
| 338 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Keys().Select(key => { var delta = selected.Contains(key.Name) ? new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) : (ST_ALIGN_CORRECTION?)null; return new ST_ALIGN_OFFSET_KEY_LOG(key.Name, selected… |
| 338 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Keys().Select(key => { var delta = selected.Contains(key.Name) ? new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) : (ST_ALIGN_CORRECTION?)null; return new ST_ALIGN_OFFSET_KEY_LOG(key.Name, selected… |
| 338 | local-declaration | 지역 변수를 선언합니다: var keyLog = Keys().Select(key => { var delta = selected.Contains(key.Name) ? new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) : (ST_ALIGN_CORRECTION?)null; return new ST_ALIGN_OFFSET_KEY_LOG(key.Name, selec |
| 338 | variable-initializer | 변수의 초기값을 지정합니다: keyLog = Keys().Select(key => { var delta = selected.Contains(key.Name) ? new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) : (ST_ALIGN_CORRECTION?)null; return new ST_ALIGN_OFFSET_KEY_LOG(key.Name, selected. |
| 340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.Contains(key.Name) |
| 340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) |
| 340 | conditional-expression | 조건에 따라 결과식을 선택합니다: selected.Contains(key.Name) ? new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) : (ST_ALIGN_CORRECTION?)null |
| 340 | local-declaration | 지역 변수를 선언합니다: var delta = selected.Contains(key.Name) ? new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) : (ST_ALIGN_CORRECTION?)null; |
| 340 | variable-initializer | 변수의 초기값을 지정합니다: delta = selected.Contains(key.Name) ? new ST_ALIGN_CORRECTION(key.CorrectionX!.Value, key.CorrectionY!.Value) : (ST_ALIGN_CORRECTION?)null |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selected.Contains(key.Name) |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OptionalBase(key.Name, "X") |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: OptionalBase(key.Name, "Y") |
| 341 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_ALIGN_OFFSET_KEY_LOG(key.Name, selected.Contains(key.Name), key.X, key.Y, OptionalBase(key.Name, "X"), OptionalBase(key.Name, "Y"), _results.GetValueOrDefault($"ALIGNBASE_{key.Name}_X", double.NaN) is var x && dou… |
| 341 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_ALIGN_OFFSET_KEY_LOG(key.Name, selected.Contains(key.Name), key.X, key.Y, OptionalBase(key.Name, "X"), OptionalBase(key.Name, "Y"), _results.GetValueOrDefault($"ALIGNBASE_{key.Name}_X", double.NaN) is var x && double |
| 342 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _results.GetValueOrDefault($"ALIGNBASE_{key.Name}_X", double.NaN) |
| 342 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(x) |
| 342 | conditional-expression | 조건에 따라 결과식을 선택합니다: _results.GetValueOrDefault($"ALIGNBASE_{key.Name}_X", double.NaN) is var x && double.IsFinite(x) ? x : null |
| 343 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _results.GetValueOrDefault($"ALIGNBASE_{key.Name}_Y", double.NaN) |
| 343 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(y) |
| 343 | conditional-expression | 조건에 따라 결과식을 선택합니다: _results.GetValueOrDefault($"ALIGNBASE_{key.Name}_Y", double.NaN) is var y && double.IsFinite(y) ? y : null |
| 345 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec).Any(device => device.IsSimulation) |
| 345 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec) |
| 345 | local-declaration | 지역 변수를 선언합니다: var simulation = interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec).Any(device => device.IsSimulation); |
| 345 | variable-initializer | 변수의 초기값을 지정합니다: simulation = interfaces.GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec).Any(device => device.IsSimulation) |
| 346 | assignment | 값을 대상에 대입합니다: Tolerance = _tolerance |
| 346 | assignment | 값을 대상에 대입합니다: CalculatedOffsets = _offsets |
| 346 | await | 비동기 완료를 기다립니다: await audit.Save(new(_recipe.Id, _recipe.Name, false, DateTimeOffset.Now, _loadedAt, simulation, keyLog, _offsets) { Tolerance = _tolerance, CalculatedOffsets = _offsets }, token).ConfigureAwait(false) |
| 346 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: audit.Save(new(_recipe.Id, _recipe.Name, false, DateTimeOffset.Now, _loadedAt, simulation, keyLog, _offsets) { Tolerance = _tolerance, CalculatedOffsets = _offsets }, token).ConfigureAwait(false) |
| 346 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: audit.Save(new(_recipe.Id, _recipe.Name, false, DateTimeOffset.Now, _loadedAt, simulation, keyLog, _offsets) { Tolerance = _tolerance, CalculatedOffsets = _offsets }, token) |
| 346 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new(_recipe.Id, _recipe.Name, false, DateTimeOffset.Now, _loadedAt, simulation, keyLog, _offsets) { Tolerance = _tolerance, CalculatedOffsets = _offsets } |
| 346 | local-declaration | 지역 변수를 선언합니다: var path = await audit.Save(new(_recipe.Id, _recipe.Name, false, DateTimeOffset.Now, _loadedAt, simulation, keyLog, _offsets) { Tolerance = _tolerance, CalculatedOffsets = _offsets }, token).ConfigureAwait(false); |
| 346 | variable-initializer | 변수의 초기값을 지정합니다: path = await audit.Save(new(_recipe.Id, _recipe.Name, false, DateTimeOffset.Now, _loadedAt, simulation, keyLog, _offsets) { Tolerance = _tolerance, CalculatedOffsets = _offsets }, token).ConfigureAwait(false) |
| 347 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(_input.Parameters, StringComparer.OrdinalIgnoreCase) |
| 347 | local-declaration | 지역 변수를 선언합니다: var parameters = new Dictionary<string, string>(_input.Parameters, StringComparer.OrdinalIgnoreCase); |
| 347 | variable-initializer | 변수의 초기값을 지정합니다: parameters = new Dictionary<string, string>(_input.Parameters, StringComparer.OrdinalIgnoreCase) |
| 348 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Keys.Where(CAlignShotOffsetData.IsParameterKey).ToArray() |
| 348 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Keys.Where(CAlignShotOffsetData.IsParameterKey) |
| 348 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.Remove(key) |
| 348 | foreach | 컬렉션 요소를 순회합니다: foreach (var key in parameters.Keys.Where(CAlignShotOffsetData.IsParameterKey).ToArray()) |
| 349 | assignment | 값을 대상에 대입합니다: parameters[item.Key] = item.Value |
| 349 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: saved.Parameters.Where(item => CAlignShotOffsetData.IsParameterKey(item.Key)) |
| 349 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CAlignShotOffsetData.IsParameterKey(item.Key) |
| 349 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in saved.Parameters.Where(item => CAlignShotOffsetData.IsParameterKey(item.Key))) |
| 350 | assignment | 값을 대상에 대입합니다: Parameters = parameters |
| 350 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.Exchange(ref _pending, _input with { Parameters = parameters }) |
| 351 | assignment | 값을 대상에 대입합니다: _saved = true |
| 352 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Log($"이번 Glass Align Offset 갱신 완료 · {_offsets.Count} Shot · Audit={path}") |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Save"]
 N0["L331 if"]
 M -->|포함| N0
 N1["L332 if"]
 M -->|포함| N1
 N2["L348 foreach"]
 M -->|포함| N2
 N3["L349 foreach"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `OptionalBase` · L337–337

[Drilling.Common/Correction/CAlignInterpolation.cs:337–337](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L337-L337)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double? OptionalBase(string, string) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | double? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| name | string | None | False /  |
| axis | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:341–341](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L341-L341) | OptionalBase | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:341–341](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L341-L341) | OptionalBase | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 337 | p.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |
| 337 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 337 | double.IsFinite | resolved | bool double.IsFinite(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: p.TryGetValue($"ALIGNBASE_{name}_{axis}", out var text) |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 337 | conditional-expression | 조건에 따라 결과식을 선택합니다: p.TryGetValue($"ALIGNBASE_{name}_{axis}", out var text) && double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) && double.IsFinite(value) ? value : null |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TakePreparedRequest` · L354–360

[Drilling.Common/Correction/CAlignInterpolation.cs:354–360](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L354-L360)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? Drilling.Common.Correction.CAlignDistortionCycle.TakePreparedRequest(string) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipeId | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/CRootView.cs:2885–2885](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/CRootView.cs#L2885-L2885) | .TakePreparedRequest | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 356 | Volatile.Read | resolved | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? System.Threading.Volatile.Read<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?>(ref readonly Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?) |
| 358 | pending.RecipeId.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 358 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 359 | Interlocked.CompareExchange | resolved | Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST? System.Threading.Interlocked.CompareExchange<Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?>(ref Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?, Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?, Drilling.Common.Station.ST_STAGE_PROCESS_REQUEST?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 356 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Volatile.Read(ref _pending) |
| 356 | local-declaration | 지역 변수를 선언합니다: var pending = Volatile.Read(ref _pending); |
| 356 | variable-initializer | 변수의 초기값을 지정합니다: pending = Volatile.Read(ref _pending) |
| 357 | if | 조건에 따라 분기합니다: if (pending is null) |
| 357 | return | 호출자에게 값 또는 제어를 반환합니다: return null; |
| 358 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: pending.RecipeId.Equals(recipeId, StringComparison.OrdinalIgnoreCase) |
| 358 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Distortion과 DoReady의 레시피가 다릅니다.") |
| 358 | if | 조건에 따라 분기합니다: if (!pending.RecipeId.Equals(recipeId, StringComparison.OrdinalIgnoreCase)) |
| 358 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Distortion과 DoReady의 레시피가 다릅니다."); |
| 359 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Interlocked.CompareExchange(ref _pending, null, pending) |
| 359 | conditional-expression | 조건에 따라 결과식을 선택합니다: Interlocked.CompareExchange(ref _pending, null, pending) == pending ? pending : null |
| 359 | return | 호출자에게 값 또는 제어를 반환합니다: return Interlocked.CompareExchange(ref _pending, null, pending) == pending ? pending : null; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TakePreparedRequest"]
 N0["L357 if"]
 M -->|포함| N0
 N1["L358 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Log` · L361–361

[Drilling.Common/Correction/CAlignInterpolation.cs:361–361](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L361-L361)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.Common.Correction.CAlignDistortionCycle.Log(string) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignDistortionCycle |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| text | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:299–299](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L299-L299) | Log | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:304–304](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L304-L304) | Log | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:316–316](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L316-L316) | Log | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:327–327](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L327-L327) | Log | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:352–352](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L352-L352) | Log | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 361 | .Invoke | resolved · 동적 구현 선택 가능 | void System.Action<string>.Invoke(string) |
| 361 | System.Diagnostics.Trace.TraceError | resolved | void System.Diagnostics.Trace.TraceError(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Invoke(text) |
| 361 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: System.Diagnostics.Trace.TraceError("Distortion log failed: " + error) |
| 361 | catch | 지정 예외를 처리합니다: catch (Exception error) |
| 361 | try | 예외 처리 범위입니다: try |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Log"]
 N0["L361 catch"]
 M -->|포함| N0
 N1["L361 try"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `Points` · L369–375

[Drilling.Common/Correction/CAlignInterpolation.cs:369–375](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L369-L375)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT> Drilling.Common.Correction.CAlignWapageService.Points |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 369 | Enumerable.Range(0, 8).Select(index => { var axis = index < 4 ? "X" : "Y"; var camera = index % 4 + 1; return new ST_WAPAGE_ALIGNBASE_POINT($"CAM{camera} {axis} → {axis}{camera}", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_{axis}", $"PROCESS_WAPAGE_ALIGNBASE_{axis}{camera}", $"PROCESS_WAPAGE_ALIGNBASE_RAGNE_{axis}{camera}"); }).ToArray | resolved | Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT[] System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>.ToArray<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>() |
| 369 | Enumerable.Range(0, 8).Select | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT> System.Collections.Generic.IEnumerable<int>.Select<int, Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>(System.Func<int, Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>) |
| 369 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 373 | new ST_WAPAGE_ALIGNBASE_POINT | resolved | Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT.ST_WAPAGE_ALIGNBASE_POINT(string, string, string, string) · Drilling.Common/Correction/CAlignInterpolation.cs:210 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 369 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 8) |
| 369 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 8).Select(index => { var axis = index < 4 ? "X" : "Y"; var camera = index % 4 + 1; return new ST_WAPAGE_ALIGNBASE_POINT($"CAM{camera} {axis} → {axis}{camera}", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_{a… |
| 369 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(0, 8).Select(index => { var axis = index < 4 ? "X" : "Y"; var camera = index % 4 + 1; return new ST_WAPAGE_ALIGNBASE_POINT($"CAM{camera} {axis} → {axis}{camera}", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_{a… |
| 371 | conditional-expression | 조건에 따라 결과식을 선택합니다: index < 4 ? "X" : "Y" |
| 371 | local-declaration | 지역 변수를 선언합니다: var axis = index < 4 ? "X" : "Y"; |
| 371 | variable-initializer | 변수의 초기값을 지정합니다: axis = index < 4 ? "X" : "Y" |
| 372 | local-declaration | 지역 변수를 선언합니다: var camera = index % 4 + 1; |
| 372 | variable-initializer | 변수의 초기값을 지정합니다: camera = index % 4 + 1 |
| 373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_WAPAGE_ALIGNBASE_POINT($"CAM{camera} {axis} → {axis}{camera}", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_{axis}", $"PROCESS_WAPAGE_ALIGNBASE_{axis}{camera}", $"PROCESS_WAPAGE_ALIGNBASE_RAGNE_{axis}{camera}") |
| 373 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_WAPAGE_ALIGNBASE_POINT($"CAM{camera} {axis} → {axis}{camera}", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_{axis}", $"PROCESS_WAPAGE_ALIGNBASE_{axis}{camera}", $"PROCESS_WAPAGE_ALIGNBASE_RAGNE_{axis}{camera}"); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_Points` · L369–369

[Drilling.Common/Correction/CAlignInterpolation.cs:369–369](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L369-L369)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT> Drilling.Common.Correction.CAlignWapageService.Points.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_map` · L376–376

[Drilling.Common/Correction/CAlignInterpolation.cs:376–376](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L376-L376)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>> Drilling.Common.Correction.CAlignWapageService._map |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_connections` · L377–377

[Drilling.Common/Correction/CAlignInterpolation.cs:377–377](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L377-L377)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>> Drilling.Common.Correction.CAlignWapageService._connections |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_read` · L378–378

[Drilling.Common/Correction/CAlignInterpolation.cs:378–378](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L378-L378)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Func<string, System.Threading.CancellationToken, double> Drilling.Common.Correction.CAlignWapageService._read |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Func<string, System.Threading.CancellationToken, double> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `_write` · L379–379

[Drilling.Common/Correction/CAlignInterpolation.cs:379–379](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L379-L379)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Action<string, double, System.Threading.CancellationToken> Drilling.Common.Correction.CAlignWapageService._write |
| 접근/수식자 | Private / private, readonly |
| 반환/값 타입 | System.Action<string, double, System.Threading.CancellationToken> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L380–383

[Drilling.Common/Correction/CAlignInterpolation.cs:380–383](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L380-L383)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.CAlignWapageService.CAlignWapageService(Drilling.Common.Interface.CInterfaceManager?) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| manager | Drilling.Common.Interface.CInterfaceManager? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:223–223](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L223-L223) | new | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:134–134](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L134-L134) | new CAlignWapageService | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 380 | .Melsec.GetMapList | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Interface.CMelsec.GetMapList(string) · Drilling.Common/Interface/Melsec/CMelsec.cs:298 |
| 381 | .GetInterfaceCommunicationList | resolved | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> Drilling.Common.Interface.CInterfaceManager.GetInterfaceCommunicationList(Drilling.Common.Interface.EN_EQP_MODULE?) · Drilling.Common/Interface/CInterfaceManager.cs:472 |
| 382 | .Melsec.ReadDoubleNoLog | resolved | double Drilling.Common.Interface.CMelsec.ReadDoubleNoLog(string, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:384 |
| 382 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 383 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 383 | manager.Melsec.WriteDouble | resolved | void Drilling.Common.Interface.CMelsec.WriteDouble(string, double, System.Threading.CancellationToken) · Drilling.Common/Interface/Melsec/CMelsec.cs:391 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 380 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Melsec.GetMapList() |
| 381 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .GetInterfaceCommunicationList(EN_EQP_MODULE.Melsec) |
| 382 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Melsec.ReadDoubleNoLog(id, token) |
| 382 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC이 연결되어 있지 않습니다.") |
| 382 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC이 연결되어 있지 않습니다.") |
| 383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC이 연결되어 있지 않습니다.") |
| 383 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: manager.Melsec.WriteDouble(id, value, token) |
| 383 | if | 조건에 따라 분기합니다: if (manager is null) |
| 383 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC이 연결되어 있지 않습니다."); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M[".ctor"]
 N0["L383 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### ConstructorDeclaration `.ctor` · L384–386

[Drilling.Common/Correction/CAlignInterpolation.cs:384–386](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L384-L386)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Correction.CAlignWapageService.CAlignWapageService(System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>>, System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>>, System.Func<string, System.Threading.CancellationToken, double>, System.Action<string, double, System.Threading.CancellationToken>) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| map | System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>> | None | False /  |
| connections | System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>> | None | False /  |
| read | System.Func<string, System.Threading.CancellationToken, double> | None | False /  |
| write | System.Action<string, double, System.Threading.CancellationToken> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 386 | assignment | 값을 대상에 대입합니다: _map = map |
| 386 | assignment | 값을 대상에 대입합니다: _connections = connections |
| 386 | assignment | 값을 대상에 대입합니다: _read = read |
| 386 | assignment | 값을 대상에 대입합니다: _write = write |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Validate` · L388–406

[Drilling.Common/Correction/CAlignInterpolation.cs:388–406](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L388-L406)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Correction.CAlignWapageService.Validate(System.Collections.Generic.IReadOnlyCollection<string>, bool) |
| 접근/수식자 | Internal / internal |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| ids | System.Collections.Generic.IReadOnlyCollection<string> | None | False /  |
| write | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:296–296](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L296-L296) | _io.Validate | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:297–297](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L297-L297) | _io.Validate | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:298–298](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L298-L298) | _io.Validate | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:412–412](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L412-L412) | Validate | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:417–417](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L417-L417) | Validate | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:446–446](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L446-L446) | Validate | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 390 | _map().ToDictionary | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.ToDictionary<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>(System.Func<Drilling.Common.Interface.ST_MELSEC_MAP_DATA, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 390 | _map | resolved · 동적 구현 선택 가능 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA> System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_MELSEC_MAP_DATA>>.Invoke() |
| 391 | _connections | resolved · 동적 구현 선택 가능 | System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS> System.Func<System.Collections.Generic.IReadOnlyList<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>>.Invoke() |
| 394 | map.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA>.TryGetValue(string, out Drilling.Common.Interface.ST_MELSEC_MAP_DATA) |
| 394 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 394 | row.Address.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 395 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 397 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 398 | id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 398 | id.StartsWith | resolved | bool string.StartsWith(string, System.StringComparison) |
| 399 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 400 | CMelsec.ValidateMapData | resolved | void Drilling.Common.Interface.CMelsec.ValidateMapData(Drilling.Common.Interface.ST_MELSEC_MAP_DATA) · Drilling.Common/Interface/Melsec/CMelsec.cs:245 |
| 401 | connections.FirstOrDefault | resolved | Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS? System.Collections.Generic.IEnumerable<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>.FirstOrDefault<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS>(System.Func<Drilling.Common.Interface.ST_INTERFACE_COMM_STATUS, bool>) |
| 403 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 390 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _map().ToDictionary(row => row.Id, StringComparer.OrdinalIgnoreCase) |
| 390 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _map() |
| 390 | local-declaration | 지역 변수를 선언합니다: var map = _map().ToDictionary(row => row.Id, StringComparer.OrdinalIgnoreCase); |
| 390 | variable-initializer | 변수의 초기값을 지정합니다: map = _map().ToDictionary(row => row.Id, StringComparer.OrdinalIgnoreCase) |
| 391 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _connections() |
| 391 | local-declaration | 지역 변수를 선언합니다: var connections = _connections(); |
| 391 | variable-initializer | 변수의 초기값을 지정합니다: connections = _connections() |
| 392 | foreach | 컬렉션 요소를 순회합니다: foreach (var id in ids) |
| 394 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: map.TryGetValue(id, out var row) |
| 394 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(row.Address) |
| 394 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row.Address.Equals("UNASSIGNED", StringComparison.OrdinalIgnoreCase) |
| 394 | if | 조건에 따라 분기합니다: if (!map.TryGetValue(id, out var row) &#124;&#124; !row.Use &#124;&#124; string.IsNullOrWhiteSpace(row.Address) &#124;&#124; row.Address.Equals("UNASSIGNED", StringComparison.OrdinalIgnoreCase)) |
| 395 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{id}의 MELSEC 주소와 USE 설정을 확인하세요.") |
| 395 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{id}의 MELSEC 주소와 USE 설정을 확인하세요."); |
| 396 | if | 조건에 따라 분기합니다: if (row.DataType != EN_MELSEC_DATA_TYPE.Double &#124;&#124; row.Access == EN_MELSEC_ACCESS.Write &#124;&#124; write && row.Access != EN_MELSEC_ACCESS.ReadWrite) |
| 397 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{id}의 DOUBLE 형식과 {(write ? "읽기/쓰기" : "읽기")} 권한을 확인하세요.") |
| 397 | conditional-expression | 조건에 따라 결과식을 선택합니다: write ? "읽기/쓰기" : "읽기" |
| 397 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{id}의 DOUBLE 형식과 {(write ? "읽기/쓰기" : "읽기")} 권한을 확인하세요."); |
| 398 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.StartsWith("SVID_", StringComparison.Ordinal) |
| 398 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: id.StartsWith("DISTORTION_POS", StringComparison.Ordinal) |
| 398 | conditional-expression | 조건에 따라 결과식을 선택합니다: id.StartsWith("SVID_", StringComparison.Ordinal) &#124;&#124; id.StartsWith("DISTORTION_POS", StringComparison.Ordinal) ? row.Direction != EN_MELSEC_DIRECTION.In : row.Direction != EN_MELSEC_DIRECTION.Out |
| 398 | if | 조건에 따라 분기합니다: if (id.StartsWith("SVID_", StringComparison.Ordinal) &#124;&#124; id.StartsWith("DISTORTION_POS", StringComparison.Ordinal) ? row.Direction != EN_MELSEC_DIRECTION.In : row.Direction != EN_MELSEC_DIRECTION.Out) |
| 399 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{id}의 MELSEC 입출력 방향을 확인하세요.") |
| 399 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{id}의 MELSEC 입출력 방향을 확인하세요."); |
| 400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMelsec.ValidateMapData(row) |
| 401 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: connections.FirstOrDefault(item => item.Module == EN_EQP_MODULE.Melsec && item.Number == row.DeviceNo) |
| 401 | local-declaration | 지역 변수를 선언합니다: var connection = connections.FirstOrDefault(item => item.Module == EN_EQP_MODULE.Melsec && item.Number == row.DeviceNo); |
| 401 | variable-initializer | 변수의 초기값을 지정합니다: connection = connections.FirstOrDefault(item => item.Module == EN_EQP_MODULE.Melsec && item.Number == row.DeviceNo) |
| 402 | if | 조건에 따라 분기합니다: if (connection is null &#124;&#124; !(connection.IsSimulation &#124;&#124; connection.ConnectionState is EN_COMM_STATE.Online or EN_COMM_STATE.Simulation)) |
| 403 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("MELSEC이 연결되어 있지 않습니다.") |
| 403 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("MELSEC이 연결되어 있지 않습니다."); |
| 405 | return | 호출자에게 값 또는 제어를 반환합니다: return map; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Validate"]
 N0["L392 foreach"]
 M -->|포함| N0
 N1["L394 if"]
 N0 -->|포함| N1
 N2["L396 if"]
 N0 -->|포함| N2
 N3["L398 if"]
 N0 -->|포함| N3
 N4["L402 if"]
 N0 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Load` · L408–414

[Drilling.Common/Correction/CAlignInterpolation.cs:408–414](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L408-L414)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.Load(System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2645–2645](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2645-L2645) | _wapage.Load | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 410 | Enumerable.Range(1, 4).SelectMany | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<int>.SelectMany<int, string>(System.Func<int, System.Collections.Generic.IEnumerable<string>>) |
| 410 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 411 | visionOrder.Concat(Points.Select(point => point.BaseId)).Concat(Points.Select(point => point.RangeId)).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 411 | visionOrder.Concat(Points.Select(point => point.BaseId)).Concat | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Concat<string>(System.Collections.Generic.IEnumerable<string>) |
| 411 | visionOrder.Concat | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<string>.Concat<string>(System.Collections.Generic.IEnumerable<string>) |
| 411 | Points.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>.Select<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, string>(System.Func<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, string>) |
| 411 | Points.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>.Select<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, string>(System.Func<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, string>) |
| 412 | Validate | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Correction.CAlignWapageService.Validate(System.Collections.Generic.IReadOnlyCollection<string>, bool) · Drilling.Common/Correction/CAlignInterpolation.cs:388 |
| 413 | Task.Run<IReadOnlyDictionary<string, double>> | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> System.Threading.Tasks.Task.Run<System.Collections.Generic.IReadOnlyDictionary<string, double>>(System.Func<System.Collections.Generic.IReadOnlyDictionary<string, double>>, System.Threading.CancellationToken) |
| 413 | Read | resolved | System.Collections.Generic.Dictionary<string, double> Drilling.Common.Correction.CAlignWapageService.Read(System.Collections.Generic.IEnumerable<string>, System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:421 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 410 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4).SelectMany(camera => new[] { $"SVID_FINEALN_CAM{camera}_GLS_RESULT_X", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_Y" }) |
| 410 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, 4) |
| 410 | local-declaration | 지역 변수를 선언합니다: var visionOrder = Enumerable.Range(1, 4).SelectMany(camera => new[] { $"SVID_FINEALN_CAM{camera}_GLS_RESULT_X", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_Y" }); |
| 410 | variable-initializer | 변수의 초기값을 지정합니다: visionOrder = Enumerable.Range(1, 4).SelectMany(camera => new[] { $"SVID_FINEALN_CAM{camera}_GLS_RESULT_X", $"SVID_FINEALN_CAM{camera}_GLS_RESULT_Y" }) |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: visionOrder.Concat(Points.Select(point => point.BaseId)).Concat(Points.Select(point => point.RangeId)).ToArray() |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: visionOrder.Concat(Points.Select(point => point.BaseId)).Concat(Points.Select(point => point.RangeId)) |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: visionOrder.Concat(Points.Select(point => point.BaseId)) |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Points.Select(point => point.BaseId) |
| 411 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Points.Select(point => point.RangeId) |
| 411 | local-declaration | 지역 변수를 선언합니다: var ids = visionOrder.Concat(Points.Select(point => point.BaseId)).Concat(Points.Select(point => point.RangeId)).ToArray(); |
| 411 | variable-initializer | 변수의 초기값을 지정합니다: ids = visionOrder.Concat(Points.Select(point => point.BaseId)).Concat(Points.Select(point => point.RangeId)).ToArray() |
| 412 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Validate(ids, false) |
| 413 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run<IReadOnlyDictionary<string, double>>(() => Read(ids, token), token) |
| 413 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(ids, token) |
| 413 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.Run<IReadOnlyDictionary<string, double>>(() => Read(ids, token), token); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadValues` · L415–419

[Drilling.Common/Correction/CAlignInterpolation.cs:415–419](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L415-L419)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.ReadValues(string[], System.Threading.CancellationToken) |
| 접근/수식자 | Internal / internal |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| ids | string[] | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:300–300](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L300-L300) | _io.ReadValues | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:310–310](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L310-L310) | _io.ReadValues | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 417 | Validate | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Correction.CAlignWapageService.Validate(System.Collections.Generic.IReadOnlyCollection<string>, bool) · Drilling.Common/Correction/CAlignInterpolation.cs:388 |
| 418 | Task.Run<IReadOnlyDictionary<string, double>> | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> System.Threading.Tasks.Task.Run<System.Collections.Generic.IReadOnlyDictionary<string, double>>(System.Func<System.Collections.Generic.IReadOnlyDictionary<string, double>>, System.Threading.CancellationToken) |
| 418 | Read | resolved | System.Collections.Generic.Dictionary<string, double> Drilling.Common.Correction.CAlignWapageService.Read(System.Collections.Generic.IEnumerable<string>, System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:421 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 417 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Validate(ids, false) |
| 418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run<IReadOnlyDictionary<string, double>>(() => Read(ids, token), token) |
| 418 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(ids, token) |
| 418 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.Run<IReadOnlyDictionary<string, double>>(() => Read(ids, token), token); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `WriteValues` · L420–420

[Drilling.Common/Correction/CAlignInterpolation.cs:420–420](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L420-L420)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.WriteValues((string Id, double Value)[], System.Threading.CancellationToken) |
| 접근/수식자 | Internal / internal |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | (string Id, double Value)[] | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:303–303](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L303-L303) | _io.WriteValues | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 420 | Write | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.Write((string Id, double Value)[], System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:444 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 420 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Write(values, token) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Read` · L421–432

[Drilling.Common/Correction/CAlignInterpolation.cs:421–432](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L421-L432)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, double> Drilling.Common.Correction.CAlignWapageService.Read(System.Collections.Generic.IEnumerable<string>, System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, double> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| ids | System.Collections.Generic.IEnumerable<string> | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:413–413](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L413-L413) | Read | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:418–418](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L418-L418) | Read | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:466–466](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L466-L466) | Read | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 423 | new Dictionary<string, double> | resolved | System.Collections.Generic.Dictionary<string, double>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 426 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 427 | _read | resolved · 동적 구현 선택 가능 | double System.Func<string, System.Threading.CancellationToken, double>.Invoke(string, System.Threading.CancellationToken) |
| 428 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 428 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 429 | values.Add | resolved | void System.Collections.Generic.Dictionary<string, double>.Add(string, double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 423 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase) |
| 423 | local-declaration | 지역 변수를 선언합니다: var values = new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase); |
| 423 | variable-initializer | 변수의 초기값을 지정합니다: values = new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase) |
| 424 | foreach | 컬렉션 요소를 순회합니다: foreach (var id in ids) |
| 426 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 427 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _read(id, token) |
| 427 | local-declaration | 지역 변수를 선언합니다: var value = _read(id, token); |
| 427 | variable-initializer | 변수의 초기값을 지정합니다: value = _read(id, token) |
| 428 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 428 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{id}의 MELSEC 값이 유한한 숫자가 아닙니다.") |
| 428 | if | 조건에 따라 분기합니다: if (!double.IsFinite(value)) |
| 428 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{id}의 MELSEC 값이 유한한 숫자가 아닙니다."); |
| 429 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.Add(id, value) |
| 431 | return | 호출자에게 값 또는 제어를 반환합니다: return values; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Read"]
 N0["L424 foreach"]
 M -->|포함| N0
 N1["L428 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetBase` · L433–438

[Drilling.Common/Correction/CAlignInterpolation.cs:433–438](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L433-L438)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.SetBase(System.Collections.Generic.IReadOnlyDictionary<string, double>, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| vision | System.Collections.Generic.IReadOnlyDictionary<string, double> | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:301–301](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L301-L301) | _io.SetBase | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2660–2660](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2660-L2660) | _wapage.SetBase | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 435 | Points.Any | resolved | bool System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>.Any<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>(System.Func<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, bool>) |
| 435 | vision.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<string, double>.TryGetValue(string, out double) |
| 435 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 436 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 437 | Write | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.Write((string Id, double Value)[], System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:444 |
| 437 | Points.Select(point => (point.BaseId, vision[point.VisionId])).ToArray | resolved | (string BaseId, double)[] System.Collections.Generic.IEnumerable<(string BaseId, double)>.ToArray<(string BaseId, double)>() |
| 437 | Points.Select | resolved | System.Collections.Generic.IEnumerable<(string BaseId, double)> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>.Select<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, (string BaseId, double)>(System.Func<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, (string BaseId, double)>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 435 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Points.Any(point => !vision.TryGetValue(point.VisionId, out var value) &#124;&#124; !double.IsFinite(value)) |
| 435 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: vision.TryGetValue(point.VisionId, out var value) |
| 435 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 435 | if | 조건에 따라 분기합니다: if (vision.Count != 8 &#124;&#124; Points.Any(point => !vision.TryGetValue(point.VisionId, out var value) &#124;&#124; !double.IsFinite(value))) |
| 436 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Vision X/Y 8개 값을 먼저 정상적으로 Load해 주세요.") |
| 436 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Vision X/Y 8개 값을 먼저 정상적으로 Load해 주세요."); |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Write(Points.Select(point => (point.BaseId, vision[point.VisionId])).ToArray(), token) |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Points.Select(point => (point.BaseId, vision[point.VisionId])).ToArray() |
| 437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Points.Select(point => (point.BaseId, vision[point.VisionId])) |
| 437 | return | 호출자에게 값 또는 제어를 반환합니다: return Write(Points.Select(point => (point.BaseId, vision[point.VisionId])).ToArray(), token); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetBase"]
 N0["L435 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `SetRange` · L439–443

[Drilling.Common/Correction/CAlignInterpolation.cs:439–443](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L439-L443)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.SetRange(double, System.Threading.CancellationToken) |
| 접근/수식자 | Public / public |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| pixels | double | None | False /  |
| token | System.Threading.CancellationToken | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:302–302](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L302-L302) | _io.SetRange | False |
| [Drilling.UI/Menu/Menus/CMenuCorrection.cs:2671–2671](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2671-L2671) | _wapage.SetRange | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 441 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 441 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 442 | Write | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.Write((string Id, double Value)[], System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:444 |
| 442 | Points.Select(point => (point.RangeId, pixels)).ToArray | resolved | (string RangeId, double pixels)[] System.Collections.Generic.IEnumerable<(string RangeId, double pixels)>.ToArray<(string RangeId, double pixels)>() |
| 442 | Points.Select | resolved | System.Collections.Generic.IEnumerable<(string RangeId, double pixels)> System.Collections.Generic.IEnumerable<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT>.Select<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, (string RangeId, double pixels)>(System.Func<Drilling.Common.Correction.ST_WAPAGE_ALIGNBASE_POINT, (string RangeId, double pixels)>) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 441 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(pixels) |
| 441 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException("Wapage Range는 0 이상의 유한한 pixel 값이어야 합니다.") |
| 441 | if | 조건에 따라 분기합니다: if (!double.IsFinite(pixels) &#124;&#124; pixels < 0) |
| 441 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException("Wapage Range는 0 이상의 유한한 pixel 값이어야 합니다."); |
| 442 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Write(Points.Select(point => (point.RangeId, pixels)).ToArray(), token) |
| 442 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Points.Select(point => (point.RangeId, pixels)).ToArray() |
| 442 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Points.Select(point => (point.RangeId, pixels)) |
| 442 | return | 호출자에게 값 또는 제어를 반환합니다: return Write(Points.Select(point => (point.RangeId, pixels)).ToArray(), token); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["SetRange"]
 N0["L441 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Write` · L444–477

[Drilling.Common/Correction/CAlignInterpolation.cs:444–477](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L444-L477)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> Drilling.Common.Correction.CAlignWapageService.Write((string Id, double Value)[], System.Threading.CancellationToken) |
| 접근/수식자 | Private / private |
| 반환/값 타입 | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> |
| 소속 타입 | NamedType:Drilling.Common.Correction.CAlignWapageService |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| values | (string Id, double Value)[] | None | False /  |
| token | System.Threading.CancellationToken | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.Common/Correction/CAlignInterpolation.cs:420–420](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L420-L420) | Write | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:437–437](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L437-L437) | Write | False |
| [Drilling.Common/Correction/CAlignInterpolation.cs:442–442](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Correction/CAlignInterpolation.cs#L442-L442) | Write | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 446 | Validate | resolved | System.Collections.Generic.Dictionary<string, Drilling.Common.Interface.ST_MELSEC_MAP_DATA> Drilling.Common.Correction.CAlignWapageService.Validate(System.Collections.Generic.IReadOnlyCollection<string>, bool) · Drilling.Common/Correction/CAlignInterpolation.cs:388 |
| 446 | values.Select(item => item.Id).ToArray | resolved | string[] System.Collections.Generic.IEnumerable<string>.ToArray<string>() |
| 446 | values.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<(string Id, double Value)>.Select<(string Id, double Value), string>(System.Func<(string Id, double Value), string>) |
| 447 | new Dictionary<string, double> | resolved | System.Collections.Generic.Dictionary<string, double>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 450 | Math.Round | resolved | double System.Math.Round(double, System.MidpointRounding) |
| 451 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 452 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 453 | expected.Add | resolved | void System.Collections.Generic.Dictionary<string, double>.Add(string, double) |
| 455 | Task.Run<IReadOnlyDictionary<string, double>> | resolved | System.Threading.Tasks.Task<System.Collections.Generic.IReadOnlyDictionary<string, double>> System.Threading.Tasks.Task.Run<System.Collections.Generic.IReadOnlyDictionary<string, double>>(System.Func<System.Collections.Generic.IReadOnlyDictionary<string, double>>, System.Threading.CancellationToken) |
| 462 | token.ThrowIfCancellationRequested | resolved | void System.Threading.CancellationToken.ThrowIfCancellationRequested() |
| 463 | _write | resolved · 동적 구현 선택 가능 | void System.Action<string, double, System.Threading.CancellationToken>.Invoke(string, double, System.Threading.CancellationToken) |
| 466 | Read | resolved | System.Collections.Generic.Dictionary<string, double> Drilling.Common.Correction.CAlignWapageService.Read(System.Collections.Generic.IEnumerable<string>, System.Threading.CancellationToken) · Drilling.Common/Correction/CAlignInterpolation.cs:421 |
| 466 | values.Select | resolved | System.Collections.Generic.IEnumerable<string> System.Collections.Generic.IEnumerable<(string Id, double Value)>.Select<(string Id, double Value), string>(System.Func<(string Id, double Value), string>) |
| 468 | Math.Abs | resolved | double System.Math.Abs(double) |
| 469 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?) |
| 474 | new InvalidOperationException | resolved | System.InvalidOperationException.InvalidOperationException(string?, System.Exception?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 446 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Validate(values.Select(item => item.Id).ToArray(), true) |
| 446 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.Select(item => item.Id).ToArray() |
| 446 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.Select(item => item.Id) |
| 446 | local-declaration | 지역 변수를 선언합니다: var map = Validate(values.Select(item => item.Id).ToArray(), true); |
| 446 | variable-initializer | 변수의 초기값을 지정합니다: map = Validate(values.Select(item => item.Id).ToArray(), true) |
| 447 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase) |
| 447 | local-declaration | 지역 변수를 선언합니다: var expected = new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase); |
| 447 | variable-initializer | 변수의 초기값을 지정합니다: expected = new Dictionary<string, double>(StringComparer.OrdinalIgnoreCase) |
| 448 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in values) |
| 450 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(item.Value * map[item.Id].WriteScale, MidpointRounding.AwayFromZero) |
| 450 | local-declaration | 지역 변수를 선언합니다: var raw = Math.Round(item.Value * map[item.Id].WriteScale, MidpointRounding.AwayFromZero); |
| 450 | variable-initializer | 변수의 초기값을 지정합니다: raw = Math.Round(item.Value * map[item.Id].WriteScale, MidpointRounding.AwayFromZero) |
| 451 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(raw) |
| 451 | if | 조건에 따라 분기합니다: if (!double.IsFinite(raw) &#124;&#124; raw < int.MinValue &#124;&#124; raw > int.MaxValue) |
| 452 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{item.Id} 값이 MELSEC 저장 범위를 초과합니다.") |
| 452 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{item.Id} 값이 MELSEC 저장 범위를 초과합니다."); |
| 453 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: expected.Add(item.Id, raw * map[item.Id].ReadScale) |
| 455 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Task.Run<IReadOnlyDictionary<string, double>>(() => { var completed = 0; try { foreach (var item in values) { token.ThrowIfCancellationRequested(); _write(item.Id, item.Value, token); // WRITE_SCALE is applied once, insi… |
| 455 | return | 호출자에게 값 또는 제어를 반환합니다: return Task.Run<IReadOnlyDictionary<string, double>>(() => { var completed = 0; try { foreach (var item in values) { token.ThrowIfCancellationRequested(); _write(item.Id, item.Value, token); // WRITE_SCALE is applied once, inside  |
| 457 | local-declaration | 지역 변수를 선언합니다: var completed = 0; |
| 457 | variable-initializer | 변수의 초기값을 지정합니다: completed = 0 |
| 458 | try | 예외 처리 범위입니다: try |
| 460 | foreach | 컬렉션 요소를 순회합니다: foreach (var item in values) |
| 462 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: token.ThrowIfCancellationRequested() |
| 463 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: _write(item.Id, item.Value, token) |
| 466 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Read(values.Select(item => item.Id), token) |
| 466 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: values.Select(item => item.Id) |
| 466 | local-declaration | 지역 변수를 선언합니다: var readback = Read(values.Select(item => item.Id), token); |
| 466 | variable-initializer | 변수의 초기값을 지정합니다: readback = Read(values.Select(item => item.Id), token) |
| 467 | foreach | 컬렉션 요소를 순회합니다: foreach (var pair in expected) |
| 468 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(readback[pair.Key] - pair.Value) |
| 468 | if | 조건에 따라 분기합니다: if (Math.Abs(readback[pair.Key] - pair.Value) > 1e-7) |
| 469 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"{pair.Key} 기록값과 읽은 값이 다릅니다.") |
| 469 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"{pair.Key} 기록값과 읽은 값이 다릅니다."); |
| 470 | return | 호출자에게 값 또는 제어를 반환합니다: return readback; |
| 472 | catch | 지정 예외를 처리합니다: catch (Exception exception) |
| 474 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new InvalidOperationException($"Wapage Set 확인 실패 (쓰기 완료 {completed}/{values.Length}). 일부 값이 변경되었을 수 있으므로 Load로 현재값을 확인하세요.\n{exception.Message}", exception) |
| 474 | throw | 예외를 발생/전달합니다: throw new InvalidOperationException($"Wapage Set 확인 실패 (쓰기 완료 {completed}/{values.Length}). 일부 값이 변경되었을 수 있으므로 Load로 현재값을 확인하세요.\n{exception.Message}", exception); |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Write"]
 N0["L448 foreach"]
 M -->|포함| N0
 N1["L451 if"]
 N0 -->|포함| N1
 N2["L458 try"]
 M -->|포함| N2
 N3["L460 foreach"]
 N2 -->|포함| N3
 N4["L467 foreach"]
 N2 -->|포함| N4
 N5["L468 if"]
 N4 -->|포함| N5
 N6["L472 catch"]
 N2 -->|포함| N6
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../annotated/Drilling.Common/Correction/CAlignInterpolation.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
