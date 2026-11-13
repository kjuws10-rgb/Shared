# Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs

| 항목 | 내용 |
| --- | --- |
| 원본 저장소 | https://github.com/kjuws10-rgb/A3Drilling.git |
| 원본 Commit | 5aee8e58439c9b455cae7c9593c9be986c3e682e |
| 원본 SHA256 | feaadaf35d5c8073f7ceb3e9b063d4a90b0b23d2816d8c2d7cab41aef8a7573a |
| 파일 분류 | code |
| 원본 크기/행 | 66,238 bytes / 1,857 physical lines |
| 인코딩 | utf-8-sig |
| 검토 범위 | 구문/부분 의미 분석에서 추출한 사실. 동작·물리 단위·실장비 합격을 보증하지 않습니다. |
| 원본 링크 | [고정 Commit 원본](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs) |

## 파일의 역할과 읽는 순서

WPF 화면·사용자 명령·표시 상태를 구성합니다. XAML 이벤트와 코드 비하인드, RootView의 조립 경로를 함께 추적합니다.

![파일 관계도](../../../../diagrams/files/ea12fd2689433f66d8a1.svg)

## 네임스페이스·타입·상속

| 타입 | 구분 | 원본 범위 | 선언/상속 |
| --- | --- | --- | --- |
| CReviewGlassPreviewBuilder | ClassDeclaration | 11–1837 | CReviewGlassPreviewBuilder |
| ST_REVIEW_CELL_DISPLAY | RecordDeclaration | 28–28 | ST_REVIEW_CELL_DISPLAY |
| ST_REVIEW_GLASS_PREVIEW | RecordDeclaration | 1839–1847 | ST_REVIEW_GLASS_PREVIEW |
| ST_REVIEW_SCOPE_TARGET | RecordDeclaration | 1849–1849 | ST_REVIEW_SCOPE_TARGET |
| ST_REVIEW_GLASS_AXIS_INDICATOR | RecordDeclaration | 1851–1857 | ST_REVIEW_GLASS_AXIS_INDICATOR |

## 멤버 빠른 목록

| 이름 | 종류 | 범위 | 서명 |
| --- | --- | --- | --- |
| CanvasWidth | FieldDeclaration | L13–13 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CanvasWidth |
| CanvasHeight | FieldDeclaration | L14–14 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CanvasHeight |
| FrameLeft | FieldDeclaration | L15–15 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FrameLeft |
| FrameTop | FieldDeclaration | L16–16 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FrameTop |
| FrameMaxWidth | FieldDeclaration | L17–17 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FrameMaxWidth |
| FrameMaxHeight | FieldDeclaration | L18–18 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FrameMaxHeight |
| MinimumLayoutPatternWidth | FieldDeclaration | L22–22 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.MinimumLayoutPatternWidth |
| MinimumLayoutPatternHeight | FieldDeclaration | L23–23 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.MinimumLayoutPatternHeight |
| RecipeParameterIndexes | FieldDeclaration | L24–26 | System.Runtime.CompilerServices.ConditionalWeakTable<Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.Dictionary<string, string>> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.RecipeParameterIndexes |
| Build | MethodDeclaration | L30–865 | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.Build(Drilling.Common.Managers.ST_RECIPE_DEFINITION, int, int, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>?, bool, System.Collections.Generic.IReadOnlySet<int>?, Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR?, System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR>?, Drilling.Common.Review.EN_REVIEW_POINT_STATE, System.Collections.Generic.IReadOnlySet<string>?, bool, bool, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>?, Drilling.Common.Review.EN_REVIEW_CORRECTION_RULE?, System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_REVIEW_SCOPE_TARGET>?, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>?, int, int, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>?, Drilling.Common.Review.ST_REVIEW_PLAN_POINT?, bool, bool, System.Collections.Generic.IReadOnlySet<int>?, System.Collections.Generic.IReadOnlySet<int>?, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>?) |
| AddPreviewShot | LocalFunctionStatement | L487–540 | void AddPreviewShot(Drilling.Common.Recipe.ST_SHOT_GROUP_CENTER) |
| DrawInspectionPoints | MethodDeclaration | L867–925 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawInspectionPoints(DrawingContext, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.Common.Review.EN_REVIEW_CORRECTION_RULE?, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>) |
| DrawEdgeInspectionAreas | MethodDeclaration | L927–984 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawEdgeInspectionAreas(DrawingContext, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>) |
| DrawFineInspectionLines | MethodDeclaration | L986–1033 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawFineInspectionLines(DrawingContext, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double) |
| TryProjectCellPoint | MethodDeclaration | L1035–1066 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectCellPoint(Drilling.Common.Review.ST_REVIEW_PLAN_POINT, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out Point) |
| TryGetHeadScopeBounds | MethodDeclaration | L1068–1101 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryGetHeadScopeBounds(System.Collections.Generic.IReadOnlyDictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>, int, int, int, Rect, out Rect) |
| BuildHeadScopeColumnIndex | MethodDeclaration | L1103–1138 | System.Collections.Generic.IReadOnlyDictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.BuildHeadScopeColumnIndex(System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) |
| AddScopeCorners | MethodDeclaration | L1140–1151 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.AddScopeCorners(System.Collections.Generic.ICollection<Point>, Rect) |
| DrawHeadScope | MethodDeclaration | L1153–1170 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHeadScope(DrawingContext, int, Rect) |
| DrawHeadCellScope | MethodDeclaration | L1172–1185 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHeadCellScope(DrawingContext, int, Geometry) |
| DrawCurrentCellOutline | MethodDeclaration | L1187–1204 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawCurrentCellOutline(DrawingContext, Geometry) |
| DrawGlobalHeadScope | MethodDeclaration | L1206–1229 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawGlobalHeadScope(DrawingContext, int, System.Collections.Generic.IReadOnlyCollection<Point>) |
| DrawPhysicalHeadScope | MethodDeclaration | L1231–1301 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawPhysicalHeadScope(DrawingContext, int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, double, double, int) |
| TryBuildRecipeCellBoundary | MethodDeclaration | L1303–1382 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryBuildRecipeCellBoundary(Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION, double, int, int, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out StreamGeometry) |
| ShouldUseExpandedPreviewBounds | MethodDeclaration | L1384–1389 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ShouldUseExpandedPreviewBounds(Rect, Rect) |
| ExpandPreviewBounds | MethodDeclaration | L1391–1406 | Rect Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ExpandPreviewBounds(Rect, double, double, Rect) |
| TryProjectReviewPreviewPixel | MethodDeclaration | L1410–1458 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectReviewPreviewPixel(double, double, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out double, out double, out int, out int) |
| CreateErrorPreview | MethodDeclaration | L1460–1467 | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) |
| AddCircle | MethodDeclaration | L1469–1502 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.AddCircle(StreamGeometryContext, double, double, double) |
| DrawPreviewAxisIndicator | MethodDeclaration | L1504–1580 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawPreviewAxisIndicator(DrawingContext, Rect, Rect, Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR) |
| GetPreviewAxisTitlePoint | MethodDeclaration | L1582–1605 | Point Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetPreviewAxisTitlePoint(Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR, Point, Rect) |
| GetPreviewAxisOrigin | MethodDeclaration | L1607–1661 | Point Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetPreviewAxisOrigin(Rect, Rect, Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR) |
| ClampPreviewAxisCoordinate | MethodDeclaration | L1663–1670 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ClampPreviewAxisCoordinate(double, double, double) |
| DrawHorizontalArrowHead | MethodDeclaration | L1672–1681 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHorizontalArrowHead(DrawingContext, Pen, Point, bool) |
| DrawVerticalArrowHead | MethodDeclaration | L1683–1692 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawVerticalArrowHead(DrawingContext, Pen, Point, bool) |
| DrawPreviewAxisText | MethodDeclaration | L1694–1719 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawPreviewAxisText(DrawingContext, string, Point, Brush, double) |
| ReadInt | MethodDeclaration | L1721–1735 | int Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadInt(Drilling.Common.Managers.ST_RECIPE_DEFINITION, int, params string[]) |
| CreateParameterMap | MethodDeclaration | L1737–1742 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateParameterMap(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| ReadDouble | MethodDeclaration | L1744–1754 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) |
| ReadNullableDouble | MethodDeclaration | L1756–1765 | double? Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadNullableDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string) |
| ReadText | MethodDeclaration | L1767–1781 | string Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadText(Drilling.Common.Managers.ST_RECIPE_DEFINITION, params string[]) |
| TryReadParameterText | MethodDeclaration | L1783–1792 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryReadParameterText(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, out string) |
| CreateRecipeParameterIndex | MethodDeclaration | L1794–1813 | System.Collections.Generic.Dictionary<string, string> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateRecipeParameterIndex(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| FindParameter | MethodDeclaration | L1815–1822 | Drilling.Common.Managers.ST_RECIPE_PARAMETER? Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FindParameter(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string) |
| GetParameterMinimum | MethodDeclaration | L1824–1829 | int Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetParameterMinimum(Drilling.Common.Managers.ST_RECIPE_PARAMETER?) |
| GetParameterMaximum | MethodDeclaration | L1831–1836 | int? Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetParameterMaximum(Drilling.Common.Managers.ST_RECIPE_PARAMETER?, int) |
| GlassBounds | PropertyDeclaration | L1845–1845 | Rect Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.GlassBounds |
| get_GlassBounds | GetAccessorDeclaration | L1845–1845 | Rect Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.GlassBounds.get |
| set_GlassBounds | InitAccessorDeclaration | L1845–1845 | void Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.GlassBounds.init |
| CanvasSize | PropertyDeclaration | L1846–1846 | Size Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.CanvasSize |
| get_CanvasSize | GetAccessorDeclaration | L1846–1846 | Size Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.CanvasSize.get |
| set_CanvasSize | InitAccessorDeclaration | L1846–1846 | void Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.CanvasSize.init |

## 멤버별 상세 계약·호출·처리 해설

### FieldDeclaration `CanvasWidth` · L13–13

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:13–13](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L13-L13)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CanvasWidth |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 13 | variable-initializer | 변수의 초기값을 지정합니다: CanvasWidth = 860.0 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `CanvasHeight` · L14–14

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:14–14](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L14-L14)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CanvasHeight |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 14 | variable-initializer | 변수의 초기값을 지정합니다: CanvasHeight = 430.0 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `FrameLeft` · L15–15

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:15–15](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L15-L15)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FrameLeft |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 15 | variable-initializer | 변수의 초기값을 지정합니다: FrameLeft = 44.0 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `FrameTop` · L16–16

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:16–16](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L16-L16)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FrameTop |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 16 | variable-initializer | 변수의 초기값을 지정합니다: FrameTop = 50.0 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `FrameMaxWidth` · L17–17

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:17–17](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L17-L17)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FrameMaxWidth |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 17 | variable-initializer | 변수의 초기값을 지정합니다: FrameMaxWidth = 772.0 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `FrameMaxHeight` · L18–18

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:18–18](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L18-L18)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FrameMaxHeight |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 18 | variable-initializer | 변수의 초기값을 지정합니다: FrameMaxHeight = 340.0 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MinimumLayoutPatternWidth` · L22–22

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:22–22](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L22-L22)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.MinimumLayoutPatternWidth |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 22 | variable-initializer | 변수의 초기값을 지정합니다: MinimumLayoutPatternWidth = 18.0 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `MinimumLayoutPatternHeight` · L23–23

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:23–23](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L23-L23)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.MinimumLayoutPatternHeight |
| 접근/수식자 | Private / private, const |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 23 | variable-initializer | 변수의 초기값을 지정합니다: MinimumLayoutPatternHeight = 32.0 |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### FieldDeclaration `RecipeParameterIndexes` · L24–26

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:24–26](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L24-L26)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Runtime.CompilerServices.ConditionalWeakTable<Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.Dictionary<string, string>> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.RecipeParameterIndexes |
| 접근/수식자 | Private / private, static, readonly |
| 반환/값 타입 | System.Runtime.CompilerServices.ConditionalWeakTable<Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.Dictionary<string, string>> |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 26 | new | resolved | System.Runtime.CompilerServices.ConditionalWeakTable<Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.Dictionary<string, string>>.ConditionalWeakTable() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 26 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new() |
| 26 | variable-initializer | 변수의 초기값을 지정합니다: RecipeParameterIndexes = new() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `Build` · L30–865

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:30–865](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L30-L865)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.Build(Drilling.Common.Managers.ST_RECIPE_DEFINITION, int, int, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>?, bool, System.Collections.Generic.IReadOnlySet<int>?, Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR?, System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR>?, Drilling.Common.Review.EN_REVIEW_POINT_STATE, System.Collections.Generic.IReadOnlySet<string>?, bool, bool, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>?, Drilling.Common.Review.EN_REVIEW_CORRECTION_RULE?, System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_REVIEW_SCOPE_TARGET>?, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>?, int, int, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>?, Drilling.Common.Review.ST_REVIEW_PLAN_POINT?, bool, bool, System.Collections.Generic.IReadOnlySet<int>?, System.Collections.Generic.IReadOnlySet<int>?, System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>?) |
| 접근/수식자 | Public / public, static |
| 반환/값 타입 | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| defaultCellCount | int | None | False /  |
| currentCellNo | int | None | True / 0 |
| reviewPoints | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>? | None | True / null |
| useSampleSelectionColors | bool | None | True / false |
| visibleCellNos | System.Collections.Generic.IReadOnlySet<int>? | None | True / null |
| axisIndicator | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR? | None | True / null |
| axisIndicators | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR>? | None | True / null |
| defaultPointState | Drilling.Common.Review.EN_REVIEW_POINT_STATE | None | True / 0 |
| selectedShotKeys | System.Collections.Generic.IReadOnlySet<string>? | None | True / null |
| selectAllShots | bool | None | True / false |
| showShotPoints | bool | None | True / true |
| inspectionPoints | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>? | None | True / null |
| inspectionRule | Drilling.Common.Review.EN_REVIEW_CORRECTION_RULE? | None | True / null |
| scopeTargets | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_REVIEW_SCOPE_TARGET>? | None | True / null |
| scopePoints | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>? | None | True / null |
| scopeHeadNo | int | None | True / 0 |
| scopeCellNo | int | None | True / 0 |
| headScopes | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>? | None | True / null |
| currentHolePoint | Drilling.Common.Review.ST_REVIEW_PLAN_POINT? | None | True / null |
| expandSmallCellBounds | bool | None | True / true |
| emphasizeCurrentCell | bool | None | True / false |
| currentCellNos | System.Collections.Generic.IReadOnlySet<int>? | None | True / null |
| filledCellNos | System.Collections.Generic.IReadOnlySet<int>? | None | True / null |
| settings | System.Collections.Generic.IReadOnlyList<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>? | None | True / null |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CMenuMonitor.cs:3034–3034](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L3034-L3034) | CReviewGlassPreviewBuilder.Build | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:1034–1051](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuReview.cs#L1034-L1051) | CReviewGlassPreviewBuilder.Build | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2316–2316](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuReview.cs#L2316-L2316) | CReviewGlassPreviewBuilder.Build | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:2861–2871](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuReview.cs#L2861-L2871) | CReviewGlassPreviewBuilder.Build | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3303–3316](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuReview.cs#L3303-L3316) | CReviewGlassPreviewBuilder.Build | False |
| [Drilling.UI/Menu/Menus/CMenuReview.cs:3320–3337](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuReview.cs#L3320-L3337) | CReviewGlassPreviewBuilder.Build | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 82 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 83 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 84 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 85 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 90 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 91 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 92 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 93 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 97 | CreateErrorPreview | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460 |
| 102 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 102 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 104 | CreateErrorPreview | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460 |
| 108 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 110 | CreateErrorPreview | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460 |
| 114 | FindParameter | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER? Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FindParameter(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1815 |
| 115 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 116 | cellCountParameter.Value.Trim | resolved | string string.Trim() |
| 117 | Math.Max(1, defaultCellCount).ToString | resolved | string int.ToString(System.IFormatProvider?) |
| 117 | Math.Max | resolved | int System.Math.Max(int, int) |
| 118 | GetParameterMinimum | resolved | int Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetParameterMinimum(Drilling.Common.Managers.ST_RECIPE_PARAMETER?) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1824 |
| 119 | GetParameterMaximum | resolved | int? Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetParameterMaximum(Drilling.Common.Managers.ST_RECIPE_PARAMETER?, int) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1831 |
| 120 | CCellPatternCalculator.TryParseCellCount | resolved | bool Drilling.Common.Recipe.CCellPatternCalculator.TryParseCellCount(string?, int, int?, out int, out string) · Drilling.Common/Recipe/CCellPatternCalculator.cs:35 |
| 127 | CreateErrorPreview | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460 |
| 130 | CCellPreviewDrawing.CreateDistortionKeyPreviews | resolved | System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_DISTORTION_KEY_PREVIEW> Drilling.UI.Menu.Menus.CCellPreviewDrawing.CreateDistortionKeyPreviews(double, double, double, double, System.Func<string, double?>) · Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs:61 |
| 137 | .FirstOrDefault | resolved | Drilling.Common.Managers.ST_SYSTEM_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_SYSTEM_PARAMETER>(System.Func<Drilling.Common.Managers.ST_SYSTEM_PARAMETER, bool>) |
| 137 | p.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 138 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 138 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 140 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 141 | ReadInt | resolved | int Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadInt(Drilling.Common.Managers.ST_RECIPE_DEFINITION, int, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1721 |
| 142 | CreateParameterMap | resolved | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateParameterMap(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1737 |
| 143 | CRecipeModelPixelCountReader.ReadModelTypeCount | resolved | int Drilling.Common.Recipe.CRecipeModelPixelCountReader.ReadModelTypeCount(System.Collections.Generic.IReadOnlyDictionary<string, string>) · Drilling.Common/Recipe/CCellPatternCalculator.cs:428 |
| 145 | reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) .ToDictionary | resolved | System.Collections.Generic.Dictionary<(int CellNo, int ShotNo), Drilling.Common.Review.EN_REVIEW_POINT_STATE> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>.ToDictionary<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, (int CellNo, int ShotNo), Drilling.Common.Review.EN_REVIEW_POINT_STATE>(System.Func<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, (int CellNo, int ShotNo)>, System.Func<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.Common.Review.EN_REVIEW_POINT_STATE>) |
| 145 | reviewPointList .GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.GroupBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, (int CellNo, int ShotNo)>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, (int CellNo, int ShotNo)>) |
| 147 | group.Last | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Last<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 148 | reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) .ToDictionary | resolved | System.Collections.Generic.Dictionary<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>.ToDictionary<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, (int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, (int CellNo, int ShotNo)>, System.Func<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) |
| 148 | reviewPointList .GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<(int CellNo, int ShotNo), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.GroupBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, (int CellNo, int ShotNo)>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, (int CellNo, int ShotNo)>) |
| 150 | group.Last | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Last<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>() |
| 152 | Enumerable.Range(1, cellCount).ToArray | resolved | int[] System.Collections.Generic.IEnumerable<int>.ToArray<int>() |
| 152 | Enumerable.Range | resolved | System.Collections.Generic.IEnumerable<int> System.Linq.Enumerable.Range(int, int) |
| 153 | visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct() .OrderBy(cellNo => cellNo) .ToArray | resolved | int[] System.Collections.Generic.IEnumerable<int>.ToArray<int>() |
| 153 | visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct() .OrderBy | resolved | System.Linq.IOrderedEnumerable<int> System.Collections.Generic.IEnumerable<int>.OrderBy<int, int>(System.Func<int, int>) |
| 153 | visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<int>.Distinct<int>() |
| 153 | visibleCellNos .Where | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<int>.Where<int>(System.Func<int, bool>) |
| 159 | Math.Max | resolved | int System.Math.Max(int, int) |
| 161 | Math.Max | resolved | int System.Math.Max(int, int) |
| 163 | Math.Min | resolved | double System.Math.Min(double, double) |
| 168 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 170 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 171 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 172 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 173 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 177 | CreateErrorPreview | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460 |
| 181 | new ST_GLASS_PREVIEW_FRAME | resolved | Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME.ST_GLASS_PREVIEW_FRAME(double, double, double, double) · Drilling.UI/Menu/Menus/CMenuMain.cs:3462 |
| 182 | new DrawingGroup | unresolved | None |
| 183 | new DrawingGroup | unresolved | None |
| 184 | new List<ST_CELL_PREVIEW_LABEL> | resolved | System.Collections.Generic.List<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL>.List() |
| 187 | new Dictionary<int, ST_REVIEW_CELL_DISPLAY> | resolved | System.Collections.Generic.Dictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>.Dictionary() |
| 188 | new List<Point> | resolved | System.Collections.Generic.List<Point>.List() |
| 189 | new Dictionary<int, List<Point>> | resolved | System.Collections.Generic.Dictionary<int, System.Collections.Generic.List<Point>>.Dictionary() |
| 190 | new List<(int HeadNo, Rect Bounds)> | resolved | System.Collections.Generic.List<(int HeadNo, Rect Bounds)>.List() |
| 191 | new List<(int HeadNo, Geometry Boundary)> | resolved | System.Collections.Generic.List<(int HeadNo, Geometry Boundary)>.List() |
| 192 | new List<Geometry> | resolved | System.Collections.Generic.List<Geometry>.List() |
| 193 | new HashSet<int> | resolved | System.Collections.Generic.HashSet<int>.HashSet() |
| 194 | new HashSet<(int HeadNo, int CellNo)> | resolved | System.Collections.Generic.HashSet<(int HeadNo, int CellNo)>.HashSet() |
| 195 | new Dictionary<int, int> | resolved | System.Collections.Generic.Dictionary<int, int>.Dictionary() |
| 202 | roughInspectionHeadNosByCell.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<int, int>.ContainsKey(int) |
| 204 | roughInspectionHeadNosByCell.Add | resolved | void System.Collections.Generic.Dictionary<int, int>.Add(int, int) |
| 210 | requestedGlobalScopeHeads.Add | resolved | bool System.Collections.Generic.HashSet<int>.Add(int) |
| 214 | requestedLocalScopeTargets.Add | resolved | bool System.Collections.Generic.HashSet<(int HeadNo, int CellNo)>.Add((int HeadNo, int CellNo)) |
| 219 | scopeTargets.Where | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_REVIEW_SCOPE_TARGET> System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_REVIEW_SCOPE_TARGET>.Where<Drilling.UI.Menu.Menus.ST_REVIEW_SCOPE_TARGET>(System.Func<Drilling.UI.Menu.Menus.ST_REVIEW_SCOPE_TARGET, bool>) |
| 223 | requestedGlobalScopeHeads.Add | resolved | bool System.Collections.Generic.HashSet<int>.Add(int) |
| 227 | requestedLocalScopeTargets.Add | resolved | bool System.Collections.Generic.HashSet<(int HeadNo, int CellNo)>.Add((int HeadNo, int CellNo)) |
| 232 | (headScopes ?? []) .Where(scope => scope.HeadNo > 0 && double.IsFinite(scope.PositionX) && double.IsFinite(scope.ScanFieldWidthX) && scope.ScanFieldWidthX > 0.0) .GroupBy(scope => scope.HeadNo) .ToDictionary | resolved | System.Collections.Generic.Dictionary<int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>>.ToDictionary<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>, int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>(System.Func<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>, int>, System.Func<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>) |
| 232 | (headScopes ?? []) .Where(scope => scope.HeadNo > 0 && double.IsFinite(scope.PositionX) && double.IsFinite(scope.ScanFieldWidthX) && scope.ScanFieldWidthX > 0.0) .GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>.GroupBy<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE, int>(System.Func<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE, int>) |
| 232 | (headScopes ?? []) .Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>.Where<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>(System.Func<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE, bool>) |
| 235 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 236 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 239 | group.First | resolved | Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>.First<Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>() |
| 240 | requestedGlobalScopeHeads .Where(physicalHeadScopes.ContainsKey) .ToHashSet | resolved | System.Collections.Generic.HashSet<int> System.Collections.Generic.IEnumerable<int>.ToHashSet<int>() |
| 240 | requestedGlobalScopeHeads .Where | resolved | System.Collections.Generic.IEnumerable<int> System.Collections.Generic.IEnumerable<int>.Where<int>(System.Func<int, bool>) |
| 243 | requestedLocalScopeTargets .Where(target => physicalHeadScopes.ContainsKey(target.HeadNo)) .ToHashSet | resolved | System.Collections.Generic.HashSet<(int HeadNo, int CellNo)> System.Collections.Generic.IEnumerable<(int HeadNo, int CellNo)>.ToHashSet<(int HeadNo, int CellNo)>() |
| 243 | requestedLocalScopeTargets .Where | resolved | System.Collections.Generic.IEnumerable<(int HeadNo, int CellNo)> System.Collections.Generic.IEnumerable<(int HeadNo, int CellNo)>.Where<(int HeadNo, int CellNo)>(System.Func<(int HeadNo, int CellNo), bool>) |
| 244 | physicalHeadScopes.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE>.ContainsKey(int) |
| 246 | requestedGlobalScopeHeads.Any | resolved | bool System.Collections.Generic.IEnumerable<int>.Any<int>(System.Func<int, bool>) |
| 247 | physicalGlobalScopeHeads.Contains | resolved | bool System.Collections.Generic.HashSet<int>.Contains(int) |
| 248 | requestedLocalScopeTargets.Any | resolved | bool System.Collections.Generic.IEnumerable<(int HeadNo, int CellNo)>.Any<(int HeadNo, int CellNo)>(System.Func<(int HeadNo, int CellNo), bool>) |
| 249 | physicalLocalScopeTargets.Contains | resolved | bool System.Collections.Generic.HashSet<(int HeadNo, int CellNo)>.Contains((int HeadNo, int CellNo)) |
| 254 | BuildHeadScopeColumnIndex | resolved | System.Collections.Generic.IReadOnlyDictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.BuildHeadScopeColumnIndex(System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1105 |
| 255 | new Dictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)> | resolved | System.Collections.Generic.Dictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>.Dictionary() |
| 259 | drawing.Open | unresolved | None |
| 261 | context.DrawRectangle | unresolved | None |
| 262 | new SolidColorBrush | unresolved | None |
| 262 | Color.FromArgb | unresolved | None |
| 264 | new Rect | unresolved | None |
| 269 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 273 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 277 | ReadDouble | resolved | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744 |
| 281 | CRecipeModelPixelCountReader.ReadCellModelType | resolved | int Drilling.Common.Recipe.CRecipeModelPixelCountReader.ReadCellModelType(System.Collections.Generic.IReadOnlyDictionary<string, string>, int, int) · Drilling.Common/Recipe/CCellPatternCalculator.cs:433 |
| 282 | CRecipeModelPixelCountReader.ReadPatternForModel | resolved | Drilling.Common.Recipe.ST_RECIPE_MODEL_PATTERN Drilling.Common.Recipe.CRecipeModelPixelCountReader.ReadPatternForModel(System.Collections.Generic.IReadOnlyDictionary<string, string>, int) · Drilling.Common/Recipe/CCellPatternCalculator.cs:455 |
| 283 | new ST_CELL_PATTERN_DEFINITION | resolved | Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION.ST_CELL_PATTERN_DEFINITION(int, double, double, double, double, int, int, int, int, double, double) · Drilling.Common/Recipe/CCellPatternCalculator.cs:277 |
| 307 | CCellPatternCalculator.Calculate | resolved | Drilling.Common.Recipe.ST_CELL_PATTERN_LAYOUT Drilling.Common.Recipe.CCellPatternCalculator.Calculate(Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION, bool) · Drilling.Common/Recipe/CCellPatternCalculator.cs:66 |
| 310 | CreateErrorPreview | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460 |
| 319 | TryBuildRecipeCellBoundary | resolved | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryBuildRecipeCellBoundary(Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION, double, int, int, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out StreamGeometry) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1303 |
| 336 | CreateErrorPreview | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460 |
| 340 | ExpandPreviewBounds | candidate | OverloadResolutionFailure |
| 348 | new Rect | unresolved | None |
| 351 | ShouldUseExpandedPreviewBounds | candidate | OverloadResolutionFailure |
| 355 | new ST_REVIEW_CELL_DISPLAY | candidate | OverloadResolutionFailure |
| 366 | physicalGlobalScopeHeads.Contains | resolved | bool System.Collections.Generic.HashSet<int>.Contains(int) |
| 367 | physicalLocalScopeTargets.Contains | resolved | bool System.Collections.Generic.HashSet<(int HeadNo, int CellNo)>.Contains((int HeadNo, int CellNo)) |
| 370 | TryGetHeadScopeBounds | candidate | OverloadResolutionFailure |
| 387 | AddScopeCorners | resolved | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.AddScopeCorners(System.Collections.Generic.ICollection<Point>, Rect) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1140 |
| 391 | localScopeBounds.Add | resolved | void System.Collections.Generic.List<(int HeadNo, Rect Bounds)>.Add((int HeadNo, Rect Bounds)) |
| 406 | physicalGlobalScopeHeads.Contains | resolved | bool System.Collections.Generic.HashSet<int>.Contains(int) |
| 407 | physicalLocalScopeTargets.Contains | resolved | bool System.Collections.Generic.HashSet<(int HeadNo, int CellNo)>.Contains((int HeadNo, int CellNo)) |
| 413 | TryGetHeadScopeBounds | candidate | OverloadResolutionFailure |
| 432 | physicalGlobalScopeHeads.Contains | resolved | bool System.Collections.Generic.HashSet<int>.Contains(int) |
| 434 | globalRuleScopePoints.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, System.Collections.Generic.List<Point>>.TryGetValue(int, out System.Collections.Generic.List<Point>) |
| 443 | AddScopeCorners | resolved | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.AddScopeCorners(System.Collections.Generic.ICollection<Point>, Rect) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1140 |
| 447 | localScopeBounds.Add | resolved | void System.Collections.Generic.List<(int HeadNo, Rect Bounds)>.Add((int HeadNo, Rect Bounds)) |
| 452 | CCellPatternCalculator.CalculatePreviewPointSize | resolved | double Drilling.Common.Recipe.CCellPatternCalculator.CalculatePreviewPointSize(Drilling.Common.Recipe.ST_CELL_PATTERN_LAYOUT, double) · Drilling.Common/Recipe/CCellPatternCalculator.cs:20 |
| 453 | CCellPatternCalculator.CalculatePreviewBeamHalfSpan | resolved | double Drilling.Common.Recipe.CCellPatternCalculator.CalculatePreviewBeamHalfSpan(Drilling.Common.Recipe.ST_CELL_PATTERN_LAYOUT, int) · Drilling.Common/Recipe/CCellPatternCalculator.cs:29 |
| 454 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 456 | CreateErrorPreview | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460 |
| 461 | new HashSet<long> | resolved | System.Collections.Generic.HashSet<long>.HashSet() |
| 462 | new List<(double X, double Y, double Size, EN_REVIEW_POINT_STATE State)> | resolved | System.Collections.Generic.List<(double X, double Y, double Size, Drilling.Common.Review.EN_REVIEW_POINT_STATE State)>.List() |
| 470 | Math.Max | resolved | int System.Math.Max(int, int) |
| 471 | CCellPatternCalculator.CalculatePreviewSampleStep | resolved | int Drilling.Common.Recipe.CCellPatternCalculator.CalculatePreviewSampleStep(Drilling.Common.Recipe.ST_CELL_PATTERN_LAYOUT, double) · Drilling.Common/Recipe/CCellPatternCalculator.cs:21 |
| 472 | Math.Ceiling | resolved | double System.Math.Ceiling(double) |
| 472 | Math.Sqrt | resolved | double System.Math.Sqrt(double) |
| 478 | CCellPatternCalculator.CalculateShotCenter | resolved | Drilling.Common.Recipe.ST_SHOT_GROUP_CENTER Drilling.Common.Recipe.CCellPatternCalculator.CalculateShotCenter(Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION, int, int, Drilling.Common.Recipe.ST_CELL_PATTERN_LAYOUT) · Drilling.Common/Recipe/CCellPatternCalculator.cs:224 |
| 483 | AddPreviewShot | resolved | void AddPreviewShot(Drilling.Common.Recipe.ST_SHOT_GROUP_CENTER) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:487 |
| 543 | shotVisuals.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<Drilling.Common.Review.EN_REVIEW_POINT_STATE, (double X, double Y, double Size, Drilling.Common.Review.EN_REVIEW_POINT_STATE State)>> System.Collections.Generic.IEnumerable<(double X, double Y, double Size, Drilling.Common.Review.EN_REVIEW_POINT_STATE State)>.GroupBy<(double X, double Y, double Size, Drilling.Common.Review.EN_REVIEW_POINT_STATE State), Drilling.Common.Review.EN_REVIEW_POINT_STATE>(System.Func<(double X, double Y, double Size, Drilling.Common.Review.EN_REVIEW_POINT_STATE State), Drilling.Common.Review.EN_REVIEW_POINT_STATE>) |
| 546 | new StreamGeometry | unresolved | None |
| 547 | geometry.Open | unresolved | None |
| 551 | AddCircle | candidate | OverloadResolutionFailure |
| 555 | geometry.Freeze | unresolved | None |
| 556 | context.DrawGeometry | unresolved | None |
| 558 | CReviewStatusBrush.ForSampleSelection | resolved | Brush Drilling.UI.Menu.Menus.CReviewStatusBrush.ForSampleSelection(Drilling.Common.Review.EN_REVIEW_POINT_STATE) · Drilling.UI/Menu/Menus/CMenuReview.cs:3851 |
| 559 | CReviewStatusBrush.ForPreviewBaseState | resolved | Brush Drilling.UI.Menu.Menus.CReviewStatusBrush.ForPreviewBaseState(Drilling.Common.Review.EN_REVIEW_POINT_STATE) · Drilling.UI/Menu/Menus/CMenuReview.cs:3844 |
| 573 | roughInspectionHeadNosByCell.ContainsKey | resolved | bool System.Collections.Generic.Dictionary<int, int>.ContainsKey(int) |
| 581 | roughInspectionHeadNosByCell.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<int, int>.TryGetValue(int, out int) |
| 590 | requestedLocalScopeTargets.Contains | resolved | bool System.Collections.Generic.HashSet<(int HeadNo, int CellNo)>.Contains((int HeadNo, int CellNo)) |
| 596 | selectedCellOutlines.Add | candidate | OverloadResolutionFailure |
| 601 | currentCellNos.Contains | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlySet<int>.Contains(int) |
| 604 | currentCellOutlines.Add | candidate | OverloadResolutionFailure |
| 607 | CStatusBrush.Frozen | resolved | SolidColorBrush Drilling.UI.Menu.Menus.CStatusBrush.Frozen(byte, byte, byte) · Drilling.UI/Menu/Menus/CMenuBase.cs:330 |
| 608 | new Pen | unresolved | None |
| 611 | boundaryPen.Freeze | unresolved | None |
| 612 | .Contains | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlySet<int>.Contains(int) |
| 613 | CStatusBrush.Frozen | resolved | SolidColorBrush Drilling.UI.Menu.Menus.CStatusBrush.Frozen(byte, byte, byte) · Drilling.UI/Menu/Menus/CMenuBase.cs:330 |
| 614 | context.DrawGeometry | unresolved | None |
| 619 | PathGeometry.CreateFromGeometry(boundary).Clone | unresolved | None |
| 619 | PathGeometry.CreateFromGeometry | unresolved | None |
| 624 | fillGeometry.Freeze | unresolved | None |
| 625 | context.DrawGeometry | unresolved | None |
| 625 | CStatusBrush.Frozen | resolved | SolidColorBrush Drilling.UI.Menu.Menus.CStatusBrush.Frozen(byte, byte, byte) · Drilling.UI/Menu/Menus/CMenuBase.cs:330 |
| 627 | context.DrawGeometry | unresolved | None |
| 628 | CCellPreviewDrawing.CreateCellLabel | resolved | Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL? Drilling.UI.Menu.Menus.CCellPreviewDrawing.CreateCellLabel(int, Rect, double, double, bool) · Drilling.UI/Menu/Menus/CCellPreviewDrawing.cs:125 |
| 642 | labels.Add | resolved | void System.Collections.Generic.List<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL>.Add(Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL) |
| 647 | CCellPreviewDrawing.DrawAlignKeys | candidate | OverloadResolutionFailure |
| 654 | CCellPreviewDrawing.DrawDistortionKeys | candidate | OverloadResolutionFailure |
| 672 | globalRuleScopePoints.Any | resolved | bool System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<int, System.Collections.Generic.List<Point>>>.Any<System.Collections.Generic.KeyValuePair<int, System.Collections.Generic.List<Point>>>(System.Func<System.Collections.Generic.KeyValuePair<int, System.Collections.Generic.List<Point>>, bool>) |
| 676 | inspectionOverlayDrawing.Open | unresolved | None |
| 680 | DrawHeadCellScope | candidate | OverloadResolutionFailure |
| 680 | new RectangleGeometry | unresolved | None |
| 685 | physicalGlobalScopeHeads.OrderBy | resolved | System.Linq.IOrderedEnumerable<int> System.Collections.Generic.IEnumerable<int>.OrderBy<int, int>(System.Func<int, int>) |
| 687 | DrawPhysicalHeadScope | candidate | OverloadResolutionFailure |
| 709 | physicalLocalScopeTargets .OrderBy(target => target.HeadNo) .ThenBy | resolved | System.Linq.IOrderedEnumerable<(int HeadNo, int CellNo)> System.Linq.IOrderedEnumerable<(int HeadNo, int CellNo)>.ThenBy<(int HeadNo, int CellNo), int>(System.Func<(int HeadNo, int CellNo), int>) |
| 709 | physicalLocalScopeTargets .OrderBy | resolved | System.Linq.IOrderedEnumerable<(int HeadNo, int CellNo)> System.Collections.Generic.IEnumerable<(int HeadNo, int CellNo)>.OrderBy<(int HeadNo, int CellNo), int>(System.Func<(int HeadNo, int CellNo), int>) |
| 713 | DrawPhysicalHeadScope | candidate | OverloadResolutionFailure |
| 737 | DrawGlobalHeadScope | candidate | OverloadResolutionFailure |
| 740 | globalRuleScopePoints.Where | resolved | System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<int, System.Collections.Generic.List<Point>>> System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<int, System.Collections.Generic.List<Point>>>.Where<System.Collections.Generic.KeyValuePair<int, System.Collections.Generic.List<Point>>>(System.Func<System.Collections.Generic.KeyValuePair<int, System.Collections.Generic.List<Point>>, bool>) |
| 742 | DrawGlobalHeadScope | candidate | OverloadResolutionFailure |
| 747 | DrawInspectionPoints | candidate | OverloadResolutionFailure |
| 765 | DrawHeadCellScope | candidate | OverloadResolutionFailure |
| 770 | DrawCurrentCellOutline | candidate | OverloadResolutionFailure |
| 774 | drawing.Freeze | unresolved | None |
| 777 | Math.Max | resolved | double System.Math.Max(double, double) |
| 780 | Math.Max | resolved | double System.Math.Max(double, double) |
| 781 | Math.Max | resolved | double System.Math.Max(double, double) |
| 782 | new Rect | unresolved | None |
| 787 | new Rect | unresolved | None |
| 788 | labels .Select(label => label with { CanvasCenterX = label.CanvasCenterX - frameLeft + paddingX, CanvasCenterY = label.CanvasCenterY - frameTop + paddingY, DesignWidth = previewRect.Width, DesignHeight = previewRect.Height }) .ToArray | resolved | Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL[] System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL>.ToArray<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL>() |
| 788 | labels .Select | resolved | System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL> System.Collections.Generic.IEnumerable<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL>.Select<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL, Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL>(System.Func<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL, Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL>) |
| 797 | new DrawingGroup | unresolved | None |
| 799 | previewDrawing.Open | unresolved | None |
| 801 | context.DrawRectangle | unresolved | None |
| 802 | new SolidColorBrush | unresolved | None |
| 802 | Color.FromArgb | unresolved | None |
| 805 | new Pen | unresolved | None |
| 805 | new SolidColorBrush | unresolved | None |
| 805 | Color.FromRgb | unresolved | None |
| 806 | glassPen.Freeze | unresolved | None |
| 807 | context.DrawRectangle | unresolved | None |
| 808 | context.PushClip | unresolved | None |
| 808 | new RectangleGeometry | unresolved | None |
| 809 | context.PushTransform | unresolved | None |
| 809 | new TranslateTransform | unresolved | None |
| 812 | context.DrawDrawing | unresolved | None |
| 813 | context.Pop | unresolved | None |
| 814 | context.Pop | unresolved | None |
| 817 | DrawPreviewAxisIndicator | candidate | OverloadResolutionFailure |
| 821 | previewDrawing.Freeze | unresolved | None |
| 822 | new DrawingImage | unresolved | None |
| 823 | previewImage.Freeze | unresolved | None |
| 828 | inspectionOverlayDrawing.Freeze | unresolved | None |
| 829 | new DrawingGroup | unresolved | None |
| 830 | previewOverlayDrawing.Open | unresolved | None |
| 835 | context.DrawRectangle | unresolved | None |
| 836 | new SolidColorBrush | unresolved | None |
| 836 | Color.FromArgb | unresolved | None |
| 839 | context.PushClip | unresolved | None |
| 839 | new RectangleGeometry | unresolved | None |
| 840 | context.PushTransform | unresolved | None |
| 840 | new TranslateTransform | unresolved | None |
| 843 | context.DrawDrawing | unresolved | None |
| 844 | context.Pop | unresolved | None |
| 845 | context.Pop | unresolved | None |
| 848 | previewOverlayDrawing.Freeze | unresolved | None |
| 849 | new DrawingImage | unresolved | None |
| 850 | image.Freeze | unresolved | None |
| 854 | new ST_REVIEW_GLASS_PREVIEW | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 82 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(recipe, 500.0, "GLASS_SIZE_X") |
| 82 | local-declaration | 지역 변수를 선언합니다: var glassWidth = ReadDouble(recipe, 500.0, "GLASS_SIZE_X"); |
| 82 | variable-initializer | 변수의 초기값을 지정합니다: glassWidth = ReadDouble(recipe, 500.0, "GLASS_SIZE_X") |
| 83 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(recipe, 300.0, "GLASS_SIZE_Y") |
| 83 | local-declaration | 지역 변수를 선언합니다: var glassHeight = ReadDouble(recipe, 300.0, "GLASS_SIZE_Y"); |
| 83 | variable-initializer | 변수의 초기값을 지정합니다: glassHeight = ReadDouble(recipe, 300.0, "GLASS_SIZE_Y") |
| 84 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(recipe, 55.0, "AK_MARGIN_X") |
| 84 | local-declaration | 지역 변수를 선언합니다: var akMarginX = ReadDouble(recipe, 55.0, "AK_MARGIN_X"); |
| 84 | variable-initializer | 변수의 초기값을 지정합니다: akMarginX = ReadDouble(recipe, 55.0, "AK_MARGIN_X") |
| 85 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(recipe, 45.0, "AK_MARGIN_Y") |
| 85 | local-declaration | 지역 변수를 선언합니다: var akMarginY = ReadDouble(recipe, 45.0, "AK_MARGIN_Y"); |
| 85 | variable-initializer | 변수의 초기값을 지정합니다: akMarginY = ReadDouble(recipe, 45.0, "AK_MARGIN_Y") |
| 89 | local-declaration | 지역 변수를 선언합니다: var scannerReferenceOffsetX = ReadDouble(recipe, 0.0, "ESC_EDGE_TO_GLASS_EDGE", "ESC_EDGE_TO_GLASS_EDGE_X") + ReadDouble(recipe, 0.0, "GLASS_CENTER_TO_SCANNER_CENTER", "GLASS_CENTER_TO_SCANNER_CENTER_X"); |
| 89 | variable-initializer | 변수의 초기값을 지정합니다: scannerReferenceOffsetX = ReadDouble(recipe, 0.0, "ESC_EDGE_TO_GLASS_EDGE", "ESC_EDGE_TO_GLASS_EDGE_X") + ReadDouble(recipe, 0.0, "GLASS_CENTER_TO_SCANNER_CENTER", "GLASS_CENTER_TO_SCANNER_CENTER_X") |
| 90 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(recipe, 0.0, "ESC_EDGE_TO_GLASS_EDGE", "ESC_EDGE_TO_GLASS_EDGE_X") |
| 91 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(recipe, 0.0, "GLASS_CENTER_TO_SCANNER_CENTER", "GLASS_CENTER_TO_SCANNER_CENTER_X") |
| 92 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(glassWidth) |
| 92 | if | 조건에 따라 분기합니다: if (!double.IsFinite(glassWidth) &#124;&#124; !double.IsFinite(glassHeight) &#124;&#124; glassWidth <= 0.0 &#124;&#124; glassHeight <= 0.0) |
| 93 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(glassHeight) |
| 97 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorPreview( $"GLASS_SIZE_X/Y must be finite values greater than 0. " + $"Current value: {glassWidth} x {glassHeight}") |
| 97 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorPreview( $"GLASS_SIZE_X/Y must be finite values greater than 0. " + $"Current value: {glassWidth} x {glassHeight}"); |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(akMarginX) |
| 102 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(akMarginY) |
| 102 | if | 조건에 따라 분기합니다: if (!double.IsFinite(akMarginX) &#124;&#124; !double.IsFinite(akMarginY)) |
| 104 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorPreview( $"AK_MARGIN_X/Y must be finite values. Current value: {akMarginX} x {akMarginY}") |
| 104 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorPreview( $"AK_MARGIN_X/Y must be finite values. Current value: {akMarginX} x {akMarginY}"); |
| 108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(scannerReferenceOffsetX) |
| 108 | if | 조건에 따라 분기합니다: if (!double.IsFinite(scannerReferenceOffsetX)) |
| 110 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorPreview( $"Scanner reference offset must be finite. Current value: {scannerReferenceOffsetX}") |
| 110 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorPreview( $"Scanner reference offset must be finite. Current value: {scannerReferenceOffsetX}"); |
| 114 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: FindParameter(recipe, "MAX_CELL_NUMBER") |
| 114 | local-declaration | 지역 변수를 선언합니다: var cellCountParameter = FindParameter(recipe, "MAX_CELL_NUMBER"); |
| 114 | variable-initializer | 변수의 초기값을 지정합니다: cellCountParameter = FindParameter(recipe, "MAX_CELL_NUMBER") |
| 115 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(cellCountParameter?.Value) |
| 115 | conditional-expression | 조건에 따라 결과식을 선택합니다: !string.IsNullOrWhiteSpace(cellCountParameter?.Value) ? cellCountParameter.Value.Trim() : Math.Max(1, defaultCellCount).ToString(CultureInfo.InvariantCulture) |
| 115 | local-declaration | 지역 변수를 선언합니다: var cellCountText = !string.IsNullOrWhiteSpace(cellCountParameter?.Value) ? cellCountParameter.Value.Trim() : Math.Max(1, defaultCellCount).ToString(CultureInfo.InvariantCulture); |
| 115 | variable-initializer | 변수의 초기값을 지정합니다: cellCountText = !string.IsNullOrWhiteSpace(cellCountParameter?.Value) ? cellCountParameter.Value.Trim() : Math.Max(1, defaultCellCount).ToString(CultureInfo.InvariantCulture) |
| 116 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cellCountParameter.Value.Trim() |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(1, defaultCellCount).ToString(CultureInfo.InvariantCulture) |
| 117 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(1, defaultCellCount) |
| 118 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetParameterMinimum(cellCountParameter) |
| 118 | local-declaration | 지역 변수를 선언합니다: var cellCountMinimum = GetParameterMinimum(cellCountParameter); |
| 118 | variable-initializer | 변수의 초기값을 지정합니다: cellCountMinimum = GetParameterMinimum(cellCountParameter) |
| 119 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetParameterMaximum(cellCountParameter, cellCountMinimum) |
| 119 | local-declaration | 지역 변수를 선언합니다: var cellCountMaximum = GetParameterMaximum(cellCountParameter, cellCountMinimum); |
| 119 | variable-initializer | 변수의 초기값을 지정합니다: cellCountMaximum = GetParameterMaximum(cellCountParameter, cellCountMinimum) |
| 120 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.TryParseCellCount( cellCountText, cellCountMinimum, cellCountMaximum, out var cellCount, out var cellCountValidationMessage) |
| 120 | if | 조건에 따라 분기합니다: if (!CCellPatternCalculator.TryParseCellCount( cellCountText, cellCountMinimum, cellCountMaximum, out var cellCount, out var cellCountValidationMessage)) |
| 127 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorPreview(cellCountValidationMessage) |
| 127 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorPreview(cellCountValidationMessage); |
| 130 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPreviewDrawing.CreateDistortionKeyPreviews( glassWidth, glassHeight, akMarginX, akMarginY, key => { var text = settings?.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value; return doub… |
| 130 | local-declaration | 지역 변수를 선언합니다: var distortionKeys = CCellPreviewDrawing.CreateDistortionKeyPreviews( glassWidth, glassHeight, akMarginX, akMarginY, key => { var text = settings?.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value;  |
| 130 | variable-initializer | 변수의 초기값을 지정합니다: distortionKeys = CCellPreviewDrawing.CreateDistortionKeyPreviews( glassWidth, glassHeight, akMarginX, akMarginY, key => { var text = settings?.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value; retu |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase)) |
| 137 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: p.Key.Equals(key, StringComparison.OrdinalIgnoreCase) |
| 137 | local-declaration | 지역 변수를 선언합니다: var text = settings?.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value; |
| 137 | variable-initializer | 변수의 초기값을 지정합니다: text = settings?.FirstOrDefault(p => p.Key.Equals(key, StringComparison.OrdinalIgnoreCase))?.Value |
| 138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 138 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(value) |
| 138 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) && double.IsFinite(value) ? value : null |
| 138 | return | 호출자에게 값 또는 제어를 반환합니다: return double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) && double.IsFinite(value) ? value : null; |
| 140 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble(recipe, 0.0, "PIXEL_SIZE") |
| 140 | local-declaration | 지역 변수를 선언합니다: var pixelSize = ReadDouble(recipe, 0.0, "PIXEL_SIZE"); |
| 140 | variable-initializer | 변수의 초기값을 지정합니다: pixelSize = ReadDouble(recipe, 0.0, "PIXEL_SIZE") |
| 141 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadInt(recipe, 0, "SPLITED_BEAM_COUNT") |
| 141 | local-declaration | 지역 변수를 선언합니다: var splitBeamCount = ReadInt(recipe, 0, "SPLITED_BEAM_COUNT"); |
| 141 | variable-initializer | 변수의 초기값을 지정합니다: splitBeamCount = ReadInt(recipe, 0, "SPLITED_BEAM_COUNT") |
| 142 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateParameterMap(recipe) |
| 142 | local-declaration | 지역 변수를 선언합니다: var parameterMap = CreateParameterMap(recipe); |
| 142 | variable-initializer | 변수의 초기값을 지정합니다: parameterMap = CreateParameterMap(recipe) |
| 143 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeModelPixelCountReader.ReadModelTypeCount(parameterMap) |
| 143 | local-declaration | 지역 변수를 선언합니다: var modelTypeCount = CRecipeModelPixelCountReader.ReadModelTypeCount(parameterMap); |
| 143 | variable-initializer | 변수의 초기값을 지정합니다: modelTypeCount = CRecipeModelPixelCountReader.ReadModelTypeCount(parameterMap) |
| 144 | local-declaration | 지역 변수를 선언합니다: var reviewPointList = reviewPoints ?? []; |
| 144 | variable-initializer | 변수의 초기값을 지정합니다: reviewPointList = reviewPoints ?? [] |
| 145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) |
| 145 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) .ToDictionary(group => group.Key, group => group.Last().State) |
| 145 | local-declaration | 지역 변수를 선언합니다: var shotStates = reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) .ToDictionary(group => group.Key, group => group.Last().State); |
| 145 | variable-initializer | 변수의 초기값을 지정합니다: shotStates = reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) .ToDictionary(group => group.Key, group => group.Last().State) |
| 147 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) |
| 148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) .ToDictionary(group => group.Key, group => group.Last()) |
| 148 | local-declaration | 지역 변수를 선언합니다: var shotLocations = reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) .ToDictionary(group => group.Key, group => group.Last()); |
| 148 | variable-initializer | 변수의 초기값을 지정합니다: shotLocations = reviewPointList .GroupBy(point => (point.CellNo, point.ShotNo)) .ToDictionary(group => group.Key, group => group.Last()) |
| 150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |
| 151 | conditional-expression | 조건에 따라 결과식을 선택합니다: visibleCellNos is null ? Enumerable.Range(1, cellCount).ToArray() : visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct() .OrderBy(cellNo => cellNo) .ToArray() |
| 151 | local-declaration | 지역 변수를 선언합니다: var displayedCellNos = visibleCellNos is null ? Enumerable.Range(1, cellCount).ToArray() : visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct() .OrderBy(cellNo => cellNo) .ToArray(); |
| 151 | variable-initializer | 변수의 초기값을 지정합니다: displayedCellNos = visibleCellNos is null ? Enumerable.Range(1, cellCount).ToArray() : visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct() .OrderBy(cellNo => cellNo) .ToArray() |
| 152 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, cellCount).ToArray() |
| 152 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Enumerable.Range(1, cellCount) |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct() |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct() .OrderBy(cellNo => cellNo) |
| 153 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: visibleCellNos .Where(cellNo => cellNo >= 1 && cellNo <= cellCount) .Distinct() .OrderBy(cellNo => cellNo) .ToArray() |
| 158 | local-declaration | 지역 변수를 선언합니다: const int glassPreviewPointBudget = 8000; |
| 158 | variable-initializer | 변수의 초기값을 지정합니다: glassPreviewPointBudget = 8000 |
| 159 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max( 1, glassPreviewPointBudget / Math.Max(1, displayedCellNos.Length)) |
| 159 | local-declaration | 지역 변수를 선언합니다: var previewPointBudgetPerCell = Math.Max( 1, glassPreviewPointBudget / Math.Max(1, displayedCellNos.Length)); |
| 159 | variable-initializer | 변수의 초기값을 지정합니다: previewPointBudgetPerCell = Math.Max( 1, glassPreviewPointBudget / Math.Max(1, displayedCellNos.Length)) |
| 161 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(1, displayedCellNos.Length) |
| 163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(FrameMaxWidth / glassWidth, FrameMaxHeight / glassHeight) |
| 163 | local-declaration | 지역 변수를 선언합니다: var scale = Math.Min(FrameMaxWidth / glassWidth, FrameMaxHeight / glassHeight); |
| 163 | variable-initializer | 변수의 초기값을 지정합니다: scale = Math.Min(FrameMaxWidth / glassWidth, FrameMaxHeight / glassHeight) |
| 164 | local-declaration | 지역 변수를 선언합니다: var frameWidth = glassWidth * scale; |
| 164 | variable-initializer | 변수의 초기값을 지정합니다: frameWidth = glassWidth * scale |
| 165 | local-declaration | 지역 변수를 선언합니다: var frameHeight = glassHeight * scale; |
| 165 | variable-initializer | 변수의 초기값을 지정합니다: frameHeight = glassHeight * scale |
| 166 | local-declaration | 지역 변수를 선언합니다: var frameLeft = FrameLeft + ((FrameMaxWidth - frameWidth) / 2.0); |
| 166 | variable-initializer | 변수의 초기값을 지정합니다: frameLeft = FrameLeft + ((FrameMaxWidth - frameWidth) / 2.0) |
| 167 | local-declaration | 지역 변수를 선언합니다: var frameTop = FrameTop + ((FrameMaxHeight - frameHeight) / 2.0); |
| 167 | variable-initializer | 변수의 초기값을 지정합니다: frameTop = FrameTop + ((FrameMaxHeight - frameHeight) / 2.0) |
| 168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(scale) |
| 168 | if | 조건에 따라 분기합니다: if (!double.IsFinite(scale) &#124;&#124; scale <= 0.0 &#124;&#124; !double.IsFinite(frameWidth) &#124;&#124; !double.IsFinite(frameHeight) &#124;&#124; !double.IsFinite(frameLeft) &#124;&#124; !double.IsFinite(frameTop) &#124;&#124; frameWidth <= 0.0 &#124;&#124; frameHeight <= 0.0) |
| 170 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(frameWidth) |
| 171 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(frameHeight) |
| 172 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(frameLeft) |
| 173 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(frameTop) |
| 177 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorPreview( $"Preview scale and frame must be finite positive values. Current scale: {scale}") |
| 177 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorPreview( $"Preview scale and frame must be finite positive values. Current scale: {scale}"); |
| 181 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_GLASS_PREVIEW_FRAME(frameLeft, frameTop, frameWidth, frameHeight) |
| 181 | local-declaration | 지역 변수를 선언합니다: var frame = new ST_GLASS_PREVIEW_FRAME(frameLeft, frameTop, frameWidth, frameHeight); |
| 181 | variable-initializer | 변수의 초기값을 지정합니다: frame = new ST_GLASS_PREVIEW_FRAME(frameLeft, frameTop, frameWidth, frameHeight) |
| 182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DrawingGroup() |
| 182 | local-declaration | 지역 변수를 선언합니다: var drawing = new DrawingGroup(); |
| 182 | variable-initializer | 변수의 초기값을 지정합니다: drawing = new DrawingGroup() |
| 183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DrawingGroup() |
| 183 | local-declaration | 지역 변수를 선언합니다: var inspectionOverlayDrawing = new DrawingGroup(); |
| 183 | variable-initializer | 변수의 초기값을 지정합니다: inspectionOverlayDrawing = new DrawingGroup() |
| 184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<ST_CELL_PREVIEW_LABEL>() |
| 184 | local-declaration | 지역 변수를 선언합니다: var labels = new List<ST_CELL_PREVIEW_LABEL>(); |
| 184 | variable-initializer | 변수의 초기값을 지정합니다: labels = new List<ST_CELL_PREVIEW_LABEL>() |
| 185 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator is null ? [] : [axisIndicator] |
| 185 | local-declaration | 지역 변수를 선언합니다: var previewAxisIndicators = axisIndicators ?? (axisIndicator is null ? [] : [axisIndicator]); |
| 185 | variable-initializer | 변수의 초기값을 지정합니다: previewAxisIndicators = axisIndicators ?? (axisIndicator is null ? [] : [axisIndicator]) |
| 186 | local-declaration | 지역 변수를 선언합니다: long totalShotCount = 0; |
| 186 | variable-initializer | 변수의 초기값을 지정합니다: totalShotCount = 0 |
| 187 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<int, ST_REVIEW_CELL_DISPLAY>() |
| 187 | local-declaration | 지역 변수를 선언합니다: var cellDisplays = new Dictionary<int, ST_REVIEW_CELL_DISPLAY>(); |
| 187 | variable-initializer | 변수의 초기값을 지정합니다: cellDisplays = new Dictionary<int, ST_REVIEW_CELL_DISPLAY>() |
| 188 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<Point>() |
| 188 | local-declaration | 지역 변수를 선언합니다: var globalHeadScopePoints = new List<Point>(); |
| 188 | variable-initializer | 변수의 초기값을 지정합니다: globalHeadScopePoints = new List<Point>() |
| 189 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<int, List<Point>>() |
| 189 | local-declaration | 지역 변수를 선언합니다: var globalRuleScopePoints = new Dictionary<int, List<Point>>(); |
| 189 | variable-initializer | 변수의 초기값을 지정합니다: globalRuleScopePoints = new Dictionary<int, List<Point>>() |
| 190 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<(int HeadNo, Rect Bounds)>() |
| 190 | local-declaration | 지역 변수를 선언합니다: var localScopeBounds = new List<(int HeadNo, Rect Bounds)>(); |
| 190 | variable-initializer | 변수의 초기값을 지정합니다: localScopeBounds = new List<(int HeadNo, Rect Bounds)>() |
| 191 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<(int HeadNo, Geometry Boundary)>() |
| 191 | local-declaration | 지역 변수를 선언합니다: var selectedCellOutlines = new List<(int HeadNo, Geometry Boundary)>(); |
| 191 | variable-initializer | 변수의 초기값을 지정합니다: selectedCellOutlines = new List<(int HeadNo, Geometry Boundary)>() |
| 192 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<Geometry>() |
| 192 | local-declaration | 지역 변수를 선언합니다: var currentCellOutlines = new List<Geometry>(); |
| 192 | variable-initializer | 변수의 초기값을 지정합니다: currentCellOutlines = new List<Geometry>() |
| 193 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<int>() |
| 193 | local-declaration | 지역 변수를 선언합니다: var requestedGlobalScopeHeads = new HashSet<int>(); |
| 193 | variable-initializer | 변수의 초기값을 지정합니다: requestedGlobalScopeHeads = new HashSet<int>() |
| 194 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<(int HeadNo, int CellNo)>() |
| 194 | local-declaration | 지역 변수를 선언합니다: var requestedLocalScopeTargets = new HashSet<(int HeadNo, int CellNo)>(); |
| 194 | variable-initializer | 변수의 초기값을 지정합니다: requestedLocalScopeTargets = new HashSet<(int HeadNo, int CellNo)>() |
| 195 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<int, int>() |
| 195 | local-declaration | 지역 변수를 선언합니다: var roughInspectionHeadNosByCell = new Dictionary<int, int>(); |
| 195 | variable-initializer | 변수의 초기값을 지정합니다: roughInspectionHeadNosByCell = new Dictionary<int, int>() |
| 196 | if | 조건에 따라 분기합니다: if (inspectionRule == EN_REVIEW_CORRECTION_RULE.Rough && inspectionPoints is not null) |
| 198 | foreach | 컬렉션 요소를 순회합니다: foreach (var point in inspectionPoints) |
| 200 | if | 조건에 따라 분기합니다: if (point.CellNo > 0 && point.HeadNo > 0 && !roughInspectionHeadNosByCell.ContainsKey(point.CellNo)) |
| 202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: roughInspectionHeadNosByCell.ContainsKey(point.CellNo) |
| 204 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: roughInspectionHeadNosByCell.Add(point.CellNo, point.HeadNo) |
| 208 | if | 조건에 따라 분기합니다: if (scopeHeadNo > 0 && scopeCellNo <= 0) |
| 210 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedGlobalScopeHeads.Add(scopeHeadNo) |
| 212 | else | 앞 조건이 거짓인 경로입니다: else |
| 212 | if | 조건에 따라 분기합니다: if (scopeHeadNo > 0 && scopeCellNo > 0) |
| 214 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedLocalScopeTargets.Add((scopeHeadNo, scopeCellNo)) |
| 217 | if | 조건에 따라 분기합니다: if (scopeTargets is { Count: > 0 }) |
| 219 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scopeTargets.Where(target => target.HeadNo > 0) |
| 219 | foreach | 컬렉션 요소를 순회합니다: foreach (var target in scopeTargets.Where(target => target.HeadNo > 0)) |
| 221 | if | 조건에 따라 분기합니다: if (target.CellNo <= 0) |
| 223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedGlobalScopeHeads.Add(target.HeadNo) |
| 225 | else | 앞 조건이 거짓인 경로입니다: else |
| 227 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedLocalScopeTargets.Add((target.HeadNo, target.CellNo)) |
| 232 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (headScopes ?? []) .Where(scope => scope.HeadNo > 0 && double.IsFinite(scope.PositionX) && double.IsFinite(scope.ScanFieldWidthX) && scope.ScanFieldWidthX > 0.0) |
| 232 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (headScopes ?? []) .Where(scope => scope.HeadNo > 0 && double.IsFinite(scope.PositionX) && double.IsFinite(scope.ScanFieldWidthX) && scope.ScanFieldWidthX > 0.0) .GroupBy(scope => scope.HeadNo) |
| 232 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: (headScopes ?? []) .Where(scope => scope.HeadNo > 0 && double.IsFinite(scope.PositionX) && double.IsFinite(scope.ScanFieldWidthX) && scope.ScanFieldWidthX > 0.0) .GroupBy(scope => scope.HeadNo) .ToDictionary(group => gro… |
| 232 | local-declaration | 지역 변수를 선언합니다: var physicalHeadScopes = (headScopes ?? []) .Where(scope => scope.HeadNo > 0 && double.IsFinite(scope.PositionX) && double.IsFinite(scope.ScanFieldWidthX) && scope.ScanFieldWidthX > 0.0) .GroupBy(scope => scope.HeadNo) .ToDictiona |
| 232 | variable-initializer | 변수의 초기값을 지정합니다: physicalHeadScopes = (headScopes ?? []) .Where(scope => scope.HeadNo > 0 && double.IsFinite(scope.PositionX) && double.IsFinite(scope.ScanFieldWidthX) && scope.ScanFieldWidthX > 0.0) .GroupBy(scope => scope.HeadNo) .ToDictionary(g |
| 235 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(scope.PositionX) |
| 236 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(scope.ScanFieldWidthX) |
| 239 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.First() |
| 240 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedGlobalScopeHeads .Where(physicalHeadScopes.ContainsKey) |
| 240 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedGlobalScopeHeads .Where(physicalHeadScopes.ContainsKey) .ToHashSet() |
| 240 | local-declaration | 지역 변수를 선언합니다: var physicalGlobalScopeHeads = requestedGlobalScopeHeads .Where(physicalHeadScopes.ContainsKey) .ToHashSet(); |
| 240 | variable-initializer | 변수의 초기값을 지정합니다: physicalGlobalScopeHeads = requestedGlobalScopeHeads .Where(physicalHeadScopes.ContainsKey) .ToHashSet() |
| 243 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedLocalScopeTargets .Where(target => physicalHeadScopes.ContainsKey(target.HeadNo)) |
| 243 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedLocalScopeTargets .Where(target => physicalHeadScopes.ContainsKey(target.HeadNo)) .ToHashSet() |
| 243 | local-declaration | 지역 변수를 선언합니다: var physicalLocalScopeTargets = requestedLocalScopeTargets .Where(target => physicalHeadScopes.ContainsKey(target.HeadNo)) .ToHashSet(); |
| 243 | variable-initializer | 변수의 초기값을 지정합니다: physicalLocalScopeTargets = requestedLocalScopeTargets .Where(target => physicalHeadScopes.ContainsKey(target.HeadNo)) .ToHashSet() |
| 244 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalHeadScopes.ContainsKey(target.HeadNo) |
| 246 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedGlobalScopeHeads.Any(headNo => !physicalGlobalScopeHeads.Contains(headNo)) |
| 246 | local-declaration | 지역 변수를 선언합니다: var requiresPointScope = requestedGlobalScopeHeads.Any(headNo => !physicalGlobalScopeHeads.Contains(headNo)) &#124;&#124; requestedLocalScopeTargets.Any(target => !physicalLocalScopeTargets.Contains(target)); |
| 246 | variable-initializer | 변수의 초기값을 지정합니다: requiresPointScope = requestedGlobalScopeHeads.Any(headNo => !physicalGlobalScopeHeads.Contains(headNo)) &#124;&#124; requestedLocalScopeTargets.Any(target => !physicalLocalScopeTargets.Contains(target)) |
| 247 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalGlobalScopeHeads.Contains(headNo) |
| 248 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedLocalScopeTargets.Any(target => !physicalLocalScopeTargets.Contains(target)) |
| 249 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalLocalScopeTargets.Contains(target) |
| 250 | local-declaration | 지역 변수를 선언합니다: IReadOnlyDictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)> pointScopeColumns = requiresPointScope && scopePoints is not null ? BuildHeadScopeColumnIndex(scopePoints) : new Dictionary< (int CellNo, int HeadNo |
| 252 | variable-initializer | 변수의 초기값을 지정합니다: pointScopeColumns = requiresPointScope && scopePoints is not null ? BuildHeadScopeColumnIndex(scopePoints) : new Dictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>() |
| 253 | conditional-expression | 조건에 따라 결과식을 선택합니다: requiresPointScope && scopePoints is not null ? BuildHeadScopeColumnIndex(scopePoints) : new Dictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>() |
| 254 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: BuildHeadScopeColumnIndex(scopePoints) |
| 255 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>() |
| 259 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: drawing.Open() |
| 259 | variable-initializer | 변수의 초기값을 지정합니다: context = drawing.Open() |
| 259 | using | 자원 사용과 정리 범위를 지정합니다: using (var context = drawing.Open()) |
| 261 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawRectangle( new SolidColorBrush(Color.FromArgb(1, 0, 0, 0)), null, new Rect(0.0, 0.0, CanvasWidth, CanvasHeight)) |
| 262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new SolidColorBrush(Color.FromArgb(1, 0, 0, 0)) |
| 262 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Color.FromArgb(1, 0, 0, 0) |
| 264 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect(0.0, 0.0, CanvasWidth, CanvasHeight) |
| 266 | foreach | 컬렉션 요소를 순회합니다: foreach (var cellNo in displayedCellNos) |
| 268 | local-declaration | 지역 변수를 선언합니다: var prefix = $"CELL{cellNo}"; |
| 268 | variable-initializer | 변수의 초기값을 지정합니다: prefix = $"CELL{cellNo}" |
| 269 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble( recipe, 0.0, $"{prefix}_ALIGN_TO_1ST_PIXEL_X") |
| 269 | local-declaration | 지역 변수를 선언합니다: var firstX = ReadDouble( recipe, 0.0, $"{prefix}_ALIGN_TO_1ST_PIXEL_X"); |
| 269 | variable-initializer | 변수의 초기값을 지정합니다: firstX = ReadDouble( recipe, 0.0, $"{prefix}_ALIGN_TO_1ST_PIXEL_X") |
| 273 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble( recipe, 0.0, $"{prefix}_ALIGN_TO_1ST_PIXEL_Y") |
| 273 | local-declaration | 지역 변수를 선언합니다: var firstY = ReadDouble( recipe, 0.0, $"{prefix}_ALIGN_TO_1ST_PIXEL_Y"); |
| 273 | variable-initializer | 변수의 초기값을 지정합니다: firstY = ReadDouble( recipe, 0.0, $"{prefix}_ALIGN_TO_1ST_PIXEL_Y") |
| 277 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadDouble( recipe, 0.0, $"{prefix}_ROTATION") |
| 277 | local-declaration | 지역 변수를 선언합니다: var rotation = ReadDouble( recipe, 0.0, $"{prefix}_ROTATION"); |
| 277 | variable-initializer | 변수의 초기값을 지정합니다: rotation = ReadDouble( recipe, 0.0, $"{prefix}_ROTATION") |
| 281 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeModelPixelCountReader.ReadCellModelType(parameterMap, cellNo, modelTypeCount) |
| 281 | local-declaration | 지역 변수를 선언합니다: var modelType = CRecipeModelPixelCountReader.ReadCellModelType(parameterMap, cellNo, modelTypeCount); |
| 281 | variable-initializer | 변수의 초기값을 지정합니다: modelType = CRecipeModelPixelCountReader.ReadCellModelType(parameterMap, cellNo, modelTypeCount) |
| 282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CRecipeModelPixelCountReader.ReadPatternForModel(parameterMap, modelType) |
| 282 | local-declaration | 지역 변수를 선언합니다: var modelPattern = CRecipeModelPixelCountReader.ReadPatternForModel(parameterMap, modelType); |
| 282 | variable-initializer | 변수의 초기값을 지정합니다: modelPattern = CRecipeModelPixelCountReader.ReadPatternForModel(parameterMap, modelType) |
| 283 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_CELL_PATTERN_DEFINITION( cellNo, firstX, firstY, rotation, pixelSize, modelPattern.PixelCountX, modelPattern.PixelCountY, modelPattern.ProcessPitch, splitBeamCount, akMarginX, akMarginY ) |
| 283 | local-declaration | 지역 변수를 선언합니다: var patternDefinition = new ST_CELL_PATTERN_DEFINITION( cellNo, firstX, firstY, rotation, pixelSize, modelPattern.PixelCountX, modelPattern.PixelCountY, modelPattern.ProcessPitch, splitBeamCount, akMarginX, akMarginY ); |
| 283 | variable-initializer | 변수의 초기값을 지정합니다: patternDefinition = new ST_CELL_PATTERN_DEFINITION( cellNo, firstX, firstY, rotation, pixelSize, modelPattern.PixelCountX, modelPattern.PixelCountY, modelPattern.ProcessPitch, splitBeamCount, akMarginX, akMarginY ) |
| 307 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.Calculate(patternDefinition, includeShotCenters: false) |
| 307 | local-declaration | 지역 변수를 선언합니다: var result = CCellPatternCalculator.Calculate(patternDefinition, includeShotCenters: false); |
| 307 | variable-initializer | 변수의 초기값을 지정합니다: result = CCellPatternCalculator.Calculate(patternDefinition, includeShotCenters: false) |
| 308 | if | 조건에 따라 분기합니다: if (!result.IsValid) |
| 310 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorPreview(result.ValidationMessage) |
| 310 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorPreview(result.ValidationMessage); |
| 313 | local-declaration | 지역 변수를 선언합니다: var cellShotCount = (long)result.GroupCountX * result.GroupCountY; |
| 313 | variable-initializer | 변수의 초기값을 지정합니다: cellShotCount = (long)result.GroupCountX * result.GroupCountY |
| 314 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: totalShotCount += cellShotCount |
| 319 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryBuildRecipeCellBoundary( patternDefinition, pixelSize, modelPattern.PixelCountX, modelPattern.PixelCountY, frame, scale, out var boundary ) |
| 319 | if | 조건에 따라 분기합니다: if (!TryBuildRecipeCellBoundary( patternDefinition, pixelSize, modelPattern.PixelCountX, modelPattern.PixelCountY, frame, scale, out var boundary )) |
| 336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorPreview($"Cell{cellNo} boundary produces an invalid preview coordinate.") |
| 336 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorPreview($"Cell{cellNo} boundary produces an invalid preview coordinate."); |
| 339 | conditional-expression | 조건에 따라 결과식을 선택합니다: expandSmallCellBounds ? ExpandPreviewBounds( boundary.Bounds, MinimumLayoutPatternWidth, MinimumLayoutPatternHeight, new Rect(frameLeft, frameTop, frameWidth, frameHeight) ) : boundary.Bounds |
| 339 | local-declaration | 지역 변수를 선언합니다: var displayBounds = expandSmallCellBounds ? ExpandPreviewBounds( boundary.Bounds, MinimumLayoutPatternWidth, MinimumLayoutPatternHeight, new Rect(frameLeft, frameTop, frameWidth, frameHeight) ) : boundary.Bounds; |
| 339 | variable-initializer | 변수의 초기값을 지정합니다: displayBounds = expandSmallCellBounds ? ExpandPreviewBounds( boundary.Bounds, MinimumLayoutPatternWidth, MinimumLayoutPatternHeight, new Rect(frameLeft, frameTop, frameWidth, frameHeight) ) : boundary.Bounds |
| 340 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ExpandPreviewBounds( boundary.Bounds, MinimumLayoutPatternWidth, MinimumLayoutPatternHeight, new Rect(frameLeft, frameTop, frameWidth, frameHeight) ) |
| 348 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect(frameLeft, frameTop, frameWidth, frameHeight) |
| 351 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ShouldUseExpandedPreviewBounds( boundary.Bounds, displayBounds) |
| 351 | local-declaration | 지역 변수를 선언합니다: var useDisplayBounds = expandSmallCellBounds && ShouldUseExpandedPreviewBounds( boundary.Bounds, displayBounds); |
| 351 | variable-initializer | 변수의 초기값을 지정합니다: useDisplayBounds = expandSmallCellBounds && ShouldUseExpandedPreviewBounds( boundary.Bounds, displayBounds) |
| 354 | local-declaration | 지역 변수를 선언합니다: var scopeBounds = boundary.Bounds; |
| 354 | variable-initializer | 변수의 초기값을 지정합니다: scopeBounds = boundary.Bounds |
| 355 | assignment | 값을 대상에 대입합니다: cellDisplays[cellNo] = new ST_REVIEW_CELL_DISPLAY(boundary.Bounds, boundary) |
| 355 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_REVIEW_CELL_DISPLAY(boundary.Bounds, boundary) |
| 361 | local-declaration | 지역 변수를 선언합니다: var isCurrentSimpleScopeCell = scopePoints is not null && scopeHeadNo > 0 && (scopeCellNo <= 0 &#124;&#124; scopeCellNo == cellNo); |
| 361 | variable-initializer | 변수의 초기값을 지정합니다: isCurrentSimpleScopeCell = scopePoints is not null && scopeHeadNo > 0 && (scopeCellNo <= 0 &#124;&#124; scopeCellNo == cellNo) |
| 365 | conditional-expression | 조건에 따라 결과식을 선택합니다: scopeCellNo <= 0 ? physicalGlobalScopeHeads.Contains(scopeHeadNo) : physicalLocalScopeTargets.Contains((scopeHeadNo, scopeCellNo)) |
| 365 | local-declaration | 지역 변수를 선언합니다: var hasPhysicalSimpleScope = scopeCellNo <= 0 ? physicalGlobalScopeHeads.Contains(scopeHeadNo) : physicalLocalScopeTargets.Contains((scopeHeadNo, scopeCellNo)); |
| 365 | variable-initializer | 변수의 초기값을 지정합니다: hasPhysicalSimpleScope = scopeCellNo <= 0 ? physicalGlobalScopeHeads.Contains(scopeHeadNo) : physicalLocalScopeTargets.Contains((scopeHeadNo, scopeCellNo)) |
| 366 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalGlobalScopeHeads.Contains(scopeHeadNo) |
| 367 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalLocalScopeTargets.Contains((scopeHeadNo, scopeCellNo)) |
| 368 | if | 조건에 따라 분기합니다: if (isCurrentSimpleScopeCell && !hasPhysicalSimpleScope && TryGetHeadScopeBounds( pointScopeColumns, cellNo, result.GroupCountX, scopeHeadNo, scopeBounds, out var simpleScopeBounds )) |
| 370 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetHeadScopeBounds( pointScopeColumns, cellNo, result.GroupCountX, scopeHeadNo, scopeBounds, out var simpleScopeBounds ) |
| 385 | if | 조건에 따라 분기합니다: if (scopeCellNo <= 0) |
| 387 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddScopeCorners(globalHeadScopePoints, simpleScopeBounds) |
| 389 | else | 앞 조건이 거짓인 경로입니다: else |
| 391 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: localScopeBounds.Add((scopeHeadNo, simpleScopeBounds)) |
| 395 | if | 조건에 따라 분기합니다: if (scopePoints is not null && scopeTargets is { Count: > 0 }) |
| 397 | foreach | 컬렉션 요소를 순회합니다: foreach (var target in scopeTargets) |
| 399 | if | 조건에 따라 분기합니다: if (target.HeadNo <= 0 &#124;&#124; target.CellNo > 0 && target.CellNo != cellNo) |
| 402 | continue | 다음 반복으로 진행합니다: continue; |
| 405 | conditional-expression | 조건에 따라 결과식을 선택합니다: target.CellNo <= 0 ? physicalGlobalScopeHeads.Contains(target.HeadNo) : physicalLocalScopeTargets.Contains((target.HeadNo, target.CellNo)) |
| 405 | local-declaration | 지역 변수를 선언합니다: var hasPhysicalTargetScope = target.CellNo <= 0 ? physicalGlobalScopeHeads.Contains(target.HeadNo) : physicalLocalScopeTargets.Contains((target.HeadNo, target.CellNo)); |
| 405 | variable-initializer | 변수의 초기값을 지정합니다: hasPhysicalTargetScope = target.CellNo <= 0 ? physicalGlobalScopeHeads.Contains(target.HeadNo) : physicalLocalScopeTargets.Contains((target.HeadNo, target.CellNo)) |
| 406 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalGlobalScopeHeads.Contains(target.HeadNo) |
| 407 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalLocalScopeTargets.Contains((target.HeadNo, target.CellNo)) |
| 408 | if | 조건에 따라 분기합니다: if (hasPhysicalTargetScope) |
| 410 | continue | 다음 반복으로 진행합니다: continue; |
| 413 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryGetHeadScopeBounds( pointScopeColumns, cellNo, result.GroupCountX, target.HeadNo, scopeBounds, out var roughScopeBounds ) |
| 413 | if | 조건에 따라 분기합니다: if (!TryGetHeadScopeBounds( pointScopeColumns, cellNo, result.GroupCountX, target.HeadNo, scopeBounds, out var roughScopeBounds )) |
| 428 | continue | 다음 반복으로 진행합니다: continue; |
| 431 | local-declaration | 지역 변수를 선언합니다: List<Point>? collectedPoints = null; |
| 431 | variable-initializer | 변수의 초기값을 지정합니다: collectedPoints = null |
| 432 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalGlobalScopeHeads.Contains(target.HeadNo) |
| 432 | if | 조건에 따라 분기합니다: if (target.CellNo <= 0 && !physicalGlobalScopeHeads.Contains(target.HeadNo)) |
| 434 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: globalRuleScopePoints.TryGetValue(target.HeadNo, out collectedPoints) |
| 434 | if | 조건에 따라 분기합니다: if (!globalRuleScopePoints.TryGetValue(target.HeadNo, out collectedPoints)) |
| 436 | assignment | 값을 대상에 대입합니다: collectedPoints = [] |
| 437 | assignment | 값을 대상에 대입합니다: globalRuleScopePoints[target.HeadNo] = collectedPoints |
| 441 | if | 조건에 따라 분기합니다: if (collectedPoints is not null) |
| 443 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddScopeCorners(collectedPoints, roughScopeBounds) |
| 445 | else | 앞 조건이 거짓인 경로입니다: else |
| 447 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: localScopeBounds.Add((target.HeadNo, roughScopeBounds)) |
| 452 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.CalculatePreviewPointSize(result, scale) |
| 452 | local-declaration | 지역 변수를 선언합니다: var previewShotSize = CCellPatternCalculator.CalculatePreviewPointSize(result, scale); |
| 452 | variable-initializer | 변수의 초기값을 지정합니다: previewShotSize = CCellPatternCalculator.CalculatePreviewPointSize(result, scale) |
| 453 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.CalculatePreviewBeamHalfSpan(result, splitBeamCount) |
| 453 | local-declaration | 지역 변수를 선언합니다: var beamHalfSpan = CCellPatternCalculator.CalculatePreviewBeamHalfSpan(result, splitBeamCount); |
| 453 | variable-initializer | 변수의 초기값을 지정합니다: beamHalfSpan = CCellPatternCalculator.CalculatePreviewBeamHalfSpan(result, splitBeamCount) |
| 454 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(beamHalfSpan) |
| 454 | if | 조건에 따라 분기합니다: if (!double.IsFinite(beamHalfSpan) &#124;&#124; beamHalfSpan < 0.0) |
| 456 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateErrorPreview( $"Cell{cellNo} preview radius must be a finite value greater than or equal to 0. " + $"Current value: {beamHalfSpan}") |
| 456 | return | 호출자에게 값 또는 제어를 반환합니다: return CreateErrorPreview( $"Cell{cellNo} preview radius must be a finite value greater than or equal to 0. " + $"Current value: {beamHalfSpan}"); |
| 461 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new HashSet<long>() |
| 461 | local-declaration | 지역 변수를 선언합니다: var cellPixels = new HashSet<long>(); |
| 461 | variable-initializer | 변수의 초기값을 지정합니다: cellPixels = new HashSet<long>() |
| 462 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new List<(double X, double Y, double Size, EN_REVIEW_POINT_STATE State)>() |
| 462 | local-declaration | 지역 변수를 선언합니다: var shotVisuals = new List<(double X, double Y, double Size, EN_REVIEW_POINT_STATE State)>(); |
| 462 | variable-initializer | 변수의 초기값을 지정합니다: shotVisuals = new List<(double X, double Y, double Size, EN_REVIEW_POINT_STATE State)>() |
| 463 | local-declaration | 지역 변수를 선언합니다: var minCanvasX = double.MaxValue; |
| 463 | variable-initializer | 변수의 초기값을 지정합니다: minCanvasX = double.MaxValue |
| 464 | local-declaration | 지역 변수를 선언합니다: var minCanvasY = double.MaxValue; |
| 464 | variable-initializer | 변수의 초기값을 지정합니다: minCanvasY = double.MaxValue |
| 465 | local-declaration | 지역 변수를 선언합니다: var maxCanvasX = double.MinValue; |
| 465 | variable-initializer | 변수의 초기값을 지정합니다: maxCanvasX = double.MinValue |
| 466 | local-declaration | 지역 변수를 선언합니다: var maxCanvasY = double.MinValue; |
| 466 | variable-initializer | 변수의 초기값을 지정합니다: maxCanvasY = double.MinValue |
| 468 | if | 조건에 따라 분기합니다: if (showShotPoints) |
| 470 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max( CCellPatternCalculator.CalculatePreviewSampleStep(result, scale), (int)Math.Ceiling(Math.Sqrt( cellShotCount / (double)previewPointBudgetPerCell))) |
| 470 | local-declaration | 지역 변수를 선언합니다: var sampleStep = Math.Max( CCellPatternCalculator.CalculatePreviewSampleStep(result, scale), (int)Math.Ceiling(Math.Sqrt( cellShotCount / (double)previewPointBudgetPerCell))); |
| 470 | variable-initializer | 변수의 초기값을 지정합니다: sampleStep = Math.Max( CCellPatternCalculator.CalculatePreviewSampleStep(result, scale), (int)Math.Ceiling(Math.Sqrt( cellShotCount / (double)previewPointBudgetPerCell))) |
| 471 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.CalculatePreviewSampleStep(result, scale) |
| 472 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Ceiling(Math.Sqrt( cellShotCount / (double)previewPointBudgetPerCell)) |
| 472 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Sqrt( cellShotCount / (double)previewPointBudgetPerCell) |
| 474 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: row += sampleStep |
| 474 | variable-initializer | 변수의 초기값을 지정합니다: row = 0 |
| 474 | for | 초기화·조건·증감이 있는 반복입니다: for (var row = 0; row < result.GroupCountY; row += sampleStep) |
| 476 | compound-assignment-or-event-subscription | 복합 대입 또는 이벤트 구독/해지 표현입니다: column += sampleStep |
| 476 | variable-initializer | 변수의 초기값을 지정합니다: column = 0 |
| 476 | for | 초기화·조건·증감이 있는 반복입니다: for (var column = 0; column < result.GroupCountX; column += sampleStep) |
| 478 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPatternCalculator.CalculateShotCenter( patternDefinition, column, row, result) |
| 478 | local-declaration | 지역 변수를 선언합니다: var shotCenter = CCellPatternCalculator.CalculateShotCenter( patternDefinition, column, row, result); |
| 478 | variable-initializer | 변수의 초기값을 지정합니다: shotCenter = CCellPatternCalculator.CalculateShotCenter( patternDefinition, column, row, result) |
| 483 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddPreviewShot(shotCenter) |
| 542 | conditional-expression | 조건에 따라 결과식을 선택합니다: showShotPoints ? shotVisuals.GroupBy(shot => shot.State) : [] |
| 542 | foreach | 컬렉션 요소를 순회합니다: foreach (var stateGroup in showShotPoints ? shotVisuals.GroupBy(shot => shot.State) : []) |
| 543 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shotVisuals.GroupBy(shot => shot.State) |
| 546 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new StreamGeometry() |
| 546 | local-declaration | 지역 변수를 선언합니다: var geometry = new StreamGeometry(); |
| 546 | variable-initializer | 변수의 초기값을 지정합니다: geometry = new StreamGeometry() |
| 547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: geometry.Open() |
| 547 | variable-initializer | 변수의 초기값을 지정합니다: geometryContext = geometry.Open() |
| 547 | using | 자원 사용과 정리 범위를 지정합니다: using (var geometryContext = geometry.Open()) |
| 549 | foreach | 컬렉션 요소를 순회합니다: foreach (var shot in stateGroup) |
| 551 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddCircle(geometryContext, shot.X, shot.Y, shot.Size) |
| 555 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: geometry.Freeze() |
| 556 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawGeometry( useSampleSelectionColors ? CReviewStatusBrush.ForSampleSelection(stateGroup.Key) : CReviewStatusBrush.ForPreviewBaseState(stateGroup.Key), null, geometry) |
| 557 | conditional-expression | 조건에 따라 결과식을 선택합니다: useSampleSelectionColors ? CReviewStatusBrush.ForSampleSelection(stateGroup.Key) : CReviewStatusBrush.ForPreviewBaseState(stateGroup.Key) |
| 558 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewStatusBrush.ForSampleSelection(stateGroup.Key) |
| 559 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewStatusBrush.ForPreviewBaseState(stateGroup.Key) |
| 565 | if | 조건에 따라 분기합니다: if (!showShotPoints &#124;&#124; minCanvasX <= maxCanvasX && minCanvasY <= maxCanvasY) |
| 567 | conditional-expression | 조건에 따라 결과식을 선택합니다: useDisplayBounds ? displayBounds : boundary.Bounds |
| 567 | local-declaration | 지역 변수를 선언합니다: var labelBounds = useDisplayBounds ? displayBounds : boundary.Bounds; |
| 567 | variable-initializer | 변수의 초기값을 지정합니다: labelBounds = useDisplayBounds ? displayBounds : boundary.Bounds |
| 572 | local-declaration | 지역 변수를 선언합니다: var isSelectedCell = cellNo == currentCellNo &#124;&#124; roughInspectionHeadNosByCell.ContainsKey(cellNo); |
| 572 | variable-initializer | 변수의 초기값을 지정합니다: isSelectedCell = cellNo == currentCellNo &#124;&#124; roughInspectionHeadNosByCell.ContainsKey(cellNo) |
| 573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: roughInspectionHeadNosByCell.ContainsKey(cellNo) |
| 574 | local-declaration | 지역 변수를 선언합니다: var selectedHeadNo = 0; |
| 574 | variable-initializer | 변수의 초기값을 지정합니다: selectedHeadNo = 0 |
| 575 | if | 조건에 따라 분기합니다: if (cellNo == currentCellNo && scopeHeadNo > 0) |
| 577 | assignment | 값을 대상에 대입합니다: selectedHeadNo = scopeHeadNo |
| 579 | else | 앞 조건이 거짓인 경로입니다: else |
| 581 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: roughInspectionHeadNosByCell.TryGetValue(cellNo, out selectedHeadNo) |
| 588 | local-declaration | 지역 변수를 선언합니다: var hasCellClippedScope = selectedHeadNo > 0 && (scopeHeadNo == selectedHeadNo && scopeCellNo == cellNo &#124;&#124; requestedLocalScopeTargets.Contains((selectedHeadNo, cellNo))); |
| 588 | variable-initializer | 변수의 초기값을 지정합니다: hasCellClippedScope = selectedHeadNo > 0 && (scopeHeadNo == selectedHeadNo && scopeCellNo == cellNo &#124;&#124; requestedLocalScopeTargets.Contains((selectedHeadNo, cellNo))) |
| 590 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: requestedLocalScopeTargets.Contains((selectedHeadNo, cellNo)) |
| 591 | local-declaration | 지역 변수를 선언합니다: var emphasizeSelectedCell = isSelectedCell && selectedHeadNo > 0 && !hasCellClippedScope; |
| 591 | variable-initializer | 변수의 초기값을 지정합니다: emphasizeSelectedCell = isSelectedCell && selectedHeadNo > 0 && !hasCellClippedScope |
| 594 | if | 조건에 따라 분기합니다: if (emphasizeSelectedCell) |
| 596 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: selectedCellOutlines.Add((selectedHeadNo, boundary)) |
| 599 | conditional-expression | 조건에 따라 결과식을 선택합니다: currentCellNos is null ? cellNo == currentCellNo : currentCellNos.Contains(cellNo) |
| 599 | local-declaration | 지역 변수를 선언합니다: var isCurrentCell = currentCellNos is null ? cellNo == currentCellNo : currentCellNos.Contains(cellNo); |
| 599 | variable-initializer | 변수의 초기값을 지정합니다: isCurrentCell = currentCellNos is null ? cellNo == currentCellNo : currentCellNos.Contains(cellNo) |
| 601 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: currentCellNos.Contains(cellNo) |
| 602 | if | 조건에 따라 분기합니다: if (emphasizeCurrentCell && isCurrentCell) |
| 604 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: currentCellOutlines.Add(boundary) |
| 607 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CStatusBrush.Frozen(0x9C, 0xA8, 0xB5) |
| 607 | local-declaration | 지역 변수를 선언합니다: var boundaryBrush = CStatusBrush.Frozen(0x9C, 0xA8, 0xB5); |
| 607 | variable-initializer | 변수의 초기값을 지정합니다: boundaryBrush = CStatusBrush.Frozen(0x9C, 0xA8, 0xB5) |
| 608 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen( boundaryBrush, inspectionRule == EN_REVIEW_CORRECTION_RULE.Fine ? 0.7 : 1.0) |
| 608 | local-declaration | 지역 변수를 선언합니다: var boundaryPen = new Pen( boundaryBrush, inspectionRule == EN_REVIEW_CORRECTION_RULE.Fine ? 0.7 : 1.0); |
| 608 | variable-initializer | 변수의 초기값을 지정합니다: boundaryPen = new Pen( boundaryBrush, inspectionRule == EN_REVIEW_CORRECTION_RULE.Fine ? 0.7 : 1.0) |
| 610 | conditional-expression | 조건에 따라 결과식을 선택합니다: inspectionRule == EN_REVIEW_CORRECTION_RULE.Fine ? 0.7 : 1.0 |
| 611 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: boundaryPen.Freeze() |
| 612 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Contains(cellNo) |
| 612 | local-declaration | 지역 변수를 선언합니다: var hasSelectedShots = filledCellNos?.Contains(cellNo) == true; |
| 612 | variable-initializer | 변수의 초기값을 지정합니다: hasSelectedShots = filledCellNos?.Contains(cellNo) == true |
| 613 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CStatusBrush.Frozen(0x43, 0x4C, 0x57) |
| 613 | local-declaration | 지역 변수를 선언합니다: var cellBrush = CStatusBrush.Frozen(0x43, 0x4C, 0x57); |
| 613 | variable-initializer | 변수의 초기값을 지정합니다: cellBrush = CStatusBrush.Frozen(0x43, 0x4C, 0x57) |
| 614 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawGeometry(cellBrush, null, boundary) |
| 615 | if | 조건에 따라 분기합니다: if (hasSelectedShots) |
| 619 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PathGeometry.CreateFromGeometry(boundary).Clone() |
| 619 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: PathGeometry.CreateFromGeometry(boundary) |
| 619 | local-declaration | 지역 변수를 선언합니다: var fillGeometry = PathGeometry.CreateFromGeometry(boundary).Clone(); |
| 619 | variable-initializer | 변수의 초기값을 지정합니다: fillGeometry = PathGeometry.CreateFromGeometry(boundary).Clone() |
| 620 | foreach | 컬렉션 요소를 순회합니다: foreach (var figure in fillGeometry.Figures) |
| 622 | assignment | 값을 대상에 대입합니다: figure.IsFilled = true |
| 624 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: fillGeometry.Freeze() |
| 625 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawGeometry(CStatusBrush.Frozen(0x90, 0xB8, 0xD6), null, fillGeometry) |
| 625 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CStatusBrush.Frozen(0x90, 0xB8, 0xD6) |
| 627 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawGeometry(null, boundaryPen, boundary) |
| 628 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPreviewDrawing.CreateCellLabel( cellNo, labelBounds, CanvasWidth, CanvasHeight, filledCellNos is null ? isSelectedCell : hasSelectedShots ) |
| 628 | local-declaration | 지역 변수를 선언합니다: var label = CCellPreviewDrawing.CreateCellLabel( cellNo, labelBounds, CanvasWidth, CanvasHeight, filledCellNos is null ? isSelectedCell : hasSelectedShots ); |
| 628 | variable-initializer | 변수의 초기값을 지정합니다: label = CCellPreviewDrawing.CreateCellLabel( cellNo, labelBounds, CanvasWidth, CanvasHeight, filledCellNos is null ? isSelectedCell : hasSelectedShots ) |
| 638 | conditional-expression | 조건에 따라 결과식을 선택합니다: filledCellNos is null ? isSelectedCell : hasSelectedShots |
| 640 | if | 조건에 따라 분기합니다: if (label is not null) |
| 642 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: labels.Add(label) |
| 647 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPreviewDrawing.DrawAlignKeys( context, frame, glassWidth, glassHeight, akMarginX, akMarginY) |
| 654 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CCellPreviewDrawing.DrawDistortionKeys( context, frame, glassWidth, glassHeight, distortionKeys) |
| 665 | local-declaration | 지역 변수를 선언합니다: var hasInspectionOverlay = localScopeBounds.Count > 0 &#124;&#124; selectedCellOutlines.Count > 0 &#124;&#124; currentCellOutlines.Count > 0 &#124;&#124; physicalGlobalScopeHeads.Count > 0 &#124;&#124; physicalLocalScopeTargets.Count > 0 &#124;&#124; (globalHeadScopePoints.Count  |
| 665 | variable-initializer | 변수의 초기값을 지정합니다: hasInspectionOverlay = localScopeBounds.Count > 0 &#124;&#124; selectedCellOutlines.Count > 0 &#124;&#124; currentCellOutlines.Count > 0 &#124;&#124; physicalGlobalScopeHeads.Count > 0 &#124;&#124; physicalLocalScopeTargets.Count > 0 &#124;&#124; (globalHeadScopePoints.Count > 0  |
| 672 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: globalRuleScopePoints.Any(item => item.Value.Count > 0) |
| 674 | if | 조건에 따라 분기합니다: if (hasInspectionOverlay) |
| 676 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: inspectionOverlayDrawing.Open() |
| 676 | using-declaration | 정리할 자원을 선언합니다: using var overlayContext = inspectionOverlayDrawing.Open(); |
| 676 | variable-initializer | 변수의 초기값을 지정합니다: overlayContext = inspectionOverlayDrawing.Open() |
| 678 | foreach | 컬렉션 요소를 순회합니다: foreach (var (headNo, bounds) in localScopeBounds) { DrawHeadCellScope(overlayContext, headNo, new RectangleGeometry(bounds)); } |
| 680 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawHeadCellScope(overlayContext, headNo, new RectangleGeometry(bounds)) |
| 680 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new RectangleGeometry(bounds) |
| 685 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalGlobalScopeHeads.OrderBy(headNo => headNo) |
| 685 | foreach | 컬렉션 요소를 순회합니다: foreach (var headNo in physicalGlobalScopeHeads.OrderBy(headNo => headNo)) |
| 687 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawPhysicalHeadScope( overlayContext, headNo, physicalHeadScopes[headNo], cellDisplays, frame, scale, akMarginX, scannerReferenceOffsetX, targetCellNo: 0 ) |
| 709 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalLocalScopeTargets .OrderBy(target => target.HeadNo) |
| 709 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: physicalLocalScopeTargets .OrderBy(target => target.HeadNo) .ThenBy(target => target.CellNo) |
| 709 | foreach | 컬렉션 요소를 순회합니다: foreach (var (headNo, cellNo) in physicalLocalScopeTargets .OrderBy(target => target.HeadNo) .ThenBy(target => target.CellNo)) { DrawPhysicalHeadScope( overlayContext, headNo, physicalHeadScopes[headNo], cellDisplays, frame, scale |
| 713 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawPhysicalHeadScope( overlayContext, headNo, physicalHeadScopes[headNo], cellDisplays, frame, scale, akMarginX, scannerReferenceOffsetX, cellNo ) |
| 735 | if | 조건에 따라 분기합니다: if (globalHeadScopePoints.Count > 0 && scopeHeadNo > 0) |
| 737 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawGlobalHeadScope(overlayContext, scopeHeadNo, globalHeadScopePoints) |
| 740 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: globalRuleScopePoints.Where(item => item.Value.Count > 0) |
| 740 | foreach | 컬렉션 요소를 순회합니다: foreach (var (headNo, points) in globalRuleScopePoints.Where(item => item.Value.Count > 0)) { DrawGlobalHeadScope(overlayContext, headNo, points); } |
| 742 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawGlobalHeadScope(overlayContext, headNo, points) |
| 745 | if | 조건에 따라 분기합니다: if (inspectionPoints is { Count: > 0 }) |
| 747 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawInspectionPoints( overlayContext, inspectionPoints, inspectionRule, frame, scale, cellDisplays ) |
| 763 | foreach | 컬렉션 요소를 순회합니다: foreach (var (headNo, boundary) in selectedCellOutlines) { DrawHeadCellScope(overlayContext, headNo, boundary); } |
| 765 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawHeadCellScope(overlayContext, headNo, boundary) |
| 768 | foreach | 컬렉션 요소를 순회합니다: foreach (var currentCellOutline in currentCellOutlines) |
| 770 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawCurrentCellOutline(overlayContext, currentCellOutline) |
| 774 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: drawing.Freeze() |
| 775 | local-declaration | 지역 변수를 선언합니다: var hasAxisIndicators = previewAxisIndicators.Count > 0; |
| 775 | variable-initializer | 변수의 초기값을 지정합니다: hasAxisIndicators = previewAxisIndicators.Count > 0 |
| 776 | conditional-expression | 조건에 따라 결과식을 선택합니다: hasAxisIndicators ? Math.Max(96.0, frameWidth * 0.03) : frameWidth * 0.03 |
| 776 | local-declaration | 지역 변수를 선언합니다: var paddingX = hasAxisIndicators ? Math.Max(96.0, frameWidth * 0.03) : frameWidth * 0.03; |
| 776 | variable-initializer | 변수의 초기값을 지정합니다: paddingX = hasAxisIndicators ? Math.Max(96.0, frameWidth * 0.03) : frameWidth * 0.03 |
| 777 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(96.0, frameWidth * 0.03) |
| 779 | conditional-expression | 조건에 따라 결과식을 선택합니다: hasAxisIndicators ? Math.Max(68.0, frameHeight * 0.03) : Math.Max(22.0, frameHeight * 0.03) |
| 779 | local-declaration | 지역 변수를 선언합니다: var paddingY = hasAxisIndicators ? Math.Max(68.0, frameHeight * 0.03) : Math.Max(22.0, frameHeight * 0.03); |
| 779 | variable-initializer | 변수의 초기값을 지정합니다: paddingY = hasAxisIndicators ? Math.Max(68.0, frameHeight * 0.03) : Math.Max(22.0, frameHeight * 0.03) |
| 780 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(68.0, frameHeight * 0.03) |
| 781 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(22.0, frameHeight * 0.03) |
| 782 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect( 0.0, 0.0, frameWidth + (paddingX * 2.0), frameHeight + (paddingY * 2.0)) |
| 782 | local-declaration | 지역 변수를 선언합니다: var previewRect = new Rect( 0.0, 0.0, frameWidth + (paddingX * 2.0), frameHeight + (paddingY * 2.0)); |
| 782 | variable-initializer | 변수의 초기값을 지정합니다: previewRect = new Rect( 0.0, 0.0, frameWidth + (paddingX * 2.0), frameHeight + (paddingY * 2.0)) |
| 787 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect(paddingX, paddingY, frameWidth, frameHeight) |
| 787 | local-declaration | 지역 변수를 선언합니다: var glassRect = new Rect(paddingX, paddingY, frameWidth, frameHeight); |
| 787 | variable-initializer | 변수의 초기값을 지정합니다: glassRect = new Rect(paddingX, paddingY, frameWidth, frameHeight) |
| 788 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: labels .Select(label => label with { CanvasCenterX = label.CanvasCenterX - frameLeft + paddingX, CanvasCenterY = label.CanvasCenterY - frameTop + paddingY, DesignWidth = previewRect.Width, DesignHeight = previewRect.Heig… |
| 788 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: labels .Select(label => label with { CanvasCenterX = label.CanvasCenterX - frameLeft + paddingX, CanvasCenterY = label.CanvasCenterY - frameTop + paddingY, DesignWidth = previewRect.Width, DesignHeight = previewRect.Heig… |
| 788 | local-declaration | 지역 변수를 선언합니다: var translatedLabels = labels .Select(label => label with { CanvasCenterX = label.CanvasCenterX - frameLeft + paddingX, CanvasCenterY = label.CanvasCenterY - frameTop + paddingY, DesignWidth = previewRect.Width, DesignHeight = pre |
| 788 | variable-initializer | 변수의 초기값을 지정합니다: translatedLabels = labels .Select(label => label with { CanvasCenterX = label.CanvasCenterX - frameLeft + paddingX, CanvasCenterY = label.CanvasCenterY - frameTop + paddingY, DesignWidth = previewRect.Width, DesignHeight = preview |
| 791 | assignment | 값을 대상에 대입합니다: CanvasCenterX = label.CanvasCenterX - frameLeft + paddingX |
| 792 | assignment | 값을 대상에 대입합니다: CanvasCenterY = label.CanvasCenterY - frameTop + paddingY |
| 793 | assignment | 값을 대상에 대입합니다: DesignWidth = previewRect.Width |
| 794 | assignment | 값을 대상에 대입합니다: DesignHeight = previewRect.Height |
| 797 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DrawingGroup() |
| 797 | local-declaration | 지역 변수를 선언합니다: var previewDrawing = new DrawingGroup(); |
| 797 | variable-initializer | 변수의 초기값을 지정합니다: previewDrawing = new DrawingGroup() |
| 799 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: previewDrawing.Open() |
| 799 | variable-initializer | 변수의 초기값을 지정합니다: context = previewDrawing.Open() |
| 799 | using | 자원 사용과 정리 범위를 지정합니다: using (var context = previewDrawing.Open()) |
| 801 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawRectangle( new SolidColorBrush(Color.FromArgb(1, 0, 0, 0)), null, previewRect) |
| 802 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new SolidColorBrush(Color.FromArgb(1, 0, 0, 0)) |
| 802 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Color.FromArgb(1, 0, 0, 0) |
| 805 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen(new SolidColorBrush(Color.FromRgb(102, 136, 164)), 1.8) |
| 805 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new SolidColorBrush(Color.FromRgb(102, 136, 164)) |
| 805 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Color.FromRgb(102, 136, 164) |
| 805 | local-declaration | 지역 변수를 선언합니다: var glassPen = new Pen(new SolidColorBrush(Color.FromRgb(102, 136, 164)), 1.8); |
| 805 | variable-initializer | 변수의 초기값을 지정합니다: glassPen = new Pen(new SolidColorBrush(Color.FromRgb(102, 136, 164)), 1.8) |
| 806 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: glassPen.Freeze() |
| 807 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawRectangle(null, glassPen, glassRect) |
| 808 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.PushClip(new RectangleGeometry(previewRect)) |
| 808 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new RectangleGeometry(previewRect) |
| 809 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.PushTransform(new TranslateTransform( -(frameLeft - paddingX), -(frameTop - paddingY))) |
| 809 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TranslateTransform( -(frameLeft - paddingX), -(frameTop - paddingY)) |
| 812 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawDrawing(drawing) |
| 813 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.Pop() |
| 814 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.Pop() |
| 815 | foreach | 컬렉션 요소를 순회합니다: foreach (var previewAxisIndicator in previewAxisIndicators) |
| 817 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawPreviewAxisIndicator(context, previewRect, glassRect, previewAxisIndicator) |
| 821 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: previewDrawing.Freeze() |
| 822 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DrawingImage(previewDrawing) |
| 822 | local-declaration | 지역 변수를 선언합니다: var previewImage = new DrawingImage(previewDrawing); |
| 822 | variable-initializer | 변수의 초기값을 지정합니다: previewImage = new DrawingImage(previewDrawing) |
| 823 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: previewImage.Freeze() |
| 825 | local-declaration | 지역 변수를 선언합니다: ImageSource? inspectionOverlayImage = null; |
| 825 | variable-initializer | 변수의 초기값을 지정합니다: inspectionOverlayImage = null |
| 826 | if | 조건에 따라 분기합니다: if (hasInspectionOverlay) |
| 828 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: inspectionOverlayDrawing.Freeze() |
| 829 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DrawingGroup() |
| 829 | local-declaration | 지역 변수를 선언합니다: var previewOverlayDrawing = new DrawingGroup(); |
| 829 | variable-initializer | 변수의 초기값을 지정합니다: previewOverlayDrawing = new DrawingGroup() |
| 830 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: previewOverlayDrawing.Open() |
| 830 | variable-initializer | 변수의 초기값을 지정합니다: context = previewOverlayDrawing.Open() |
| 830 | using | 자원 사용과 정리 범위를 지정합니다: using (var context = previewOverlayDrawing.Open()) |
| 835 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawRectangle( new SolidColorBrush(Color.FromArgb(1, 0, 0, 0)), null, previewRect) |
| 836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new SolidColorBrush(Color.FromArgb(1, 0, 0, 0)) |
| 836 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Color.FromArgb(1, 0, 0, 0) |
| 839 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.PushClip(new RectangleGeometry(previewRect)) |
| 839 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new RectangleGeometry(previewRect) |
| 840 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.PushTransform(new TranslateTransform( -(frameLeft - paddingX), -(frameTop - paddingY))) |
| 840 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new TranslateTransform( -(frameLeft - paddingX), -(frameTop - paddingY)) |
| 843 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawDrawing(inspectionOverlayDrawing) |
| 844 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.Pop() |
| 845 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.Pop() |
| 848 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: previewOverlayDrawing.Freeze() |
| 849 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DrawingImage(previewOverlayDrawing) |
| 849 | local-declaration | 지역 변수를 선언합니다: var image = new DrawingImage(previewOverlayDrawing); |
| 849 | variable-initializer | 변수의 초기값을 지정합니다: image = new DrawingImage(previewOverlayDrawing) |
| 850 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: image.Freeze() |
| 851 | assignment | 값을 대상에 대입합니다: inspectionOverlayImage = image |
| 854 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_REVIEW_GLASS_PREVIEW( previewImage, inspectionOverlayImage, translatedLabels, $"{displayedCellNos.Length} Cells / {totalShotCount:N0} Shot Groups / Glass {glassWidth:0.#} x {glassHeight:0.#} mm" ) { GlassBounds = … |
| 854 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_REVIEW_GLASS_PREVIEW( previewImage, inspectionOverlayImage, translatedLabels, $"{displayedCellNos.Length} Cells / {totalShotCount:N0} Shot Groups / Glass {glassWidth:0.#} x {glassHeight:0.#} mm" ) { GlassBounds = gla |
| 864 | assignment | 값을 대상에 대입합니다: GlassBounds = glassRect |
| 864 | assignment | 값을 대상에 대입합니다: CanvasSize = previewRect.Size |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["Build"]
 N0["L92 if"]
 M -->|포함| N0
 N1["L102 if"]
 M -->|포함| N1
 N2["L108 if"]
 M -->|포함| N2
 N3["L120 if"]
 M -->|포함| N3
 N4["L168 if"]
 M -->|포함| N4
 N5["L196 if"]
 M -->|포함| N5
 N6["L198 foreach"]
 N5 -->|포함| N6
 N7["L200 if"]
 N6 -->|포함| N7
 N8["L208 if"]
 M -->|포함| N8
 N9["L212 else"]
 N8 -->|포함| N9
 N10["L212 if"]
 N8 -->|포함| N10
 N11["L217 if"]
 M -->|포함| N11
 N12["L219 foreach"]
 N11 -->|포함| N12
 N13["L221 if"]
 N12 -->|포함| N13
 N14["L225 else"]
 N13 -->|포함| N14
 N15["L259 using"]
 M -->|포함| N15
 N16["L266 foreach"]
 N15 -->|포함| N16
 N17["L308 if"]
 N16 -->|포함| N17
 N18["L319 if"]
 N16 -->|포함| N18
 N19["L368 if"]
 N16 -->|포함| N19
 N20["L385 if"]
 N19 -->|포함| N20
 N21["L389 else"]
 N20 -->|포함| N21
 N22["L395 if"]
 N16 -->|포함| N22
 N23["L397 foreach"]
 N22 -->|포함| N23
 N24["L399 if"]
 N23 -->|포함| N24
 N25["L408 if"]
 N23 -->|포함| N25
 N26["L413 if"]
 N23 -->|포함| N26
 N27["L432 if"]
 N23 -->|포함| N27
 N28["L434 if"]
 N27 -->|포함| N28
 N29["L441 if"]
 N23 -->|포함| N29
 N30["L445 else"]
 N29 -->|포함| N30
 N31["L454 if"]
 N16 -->|포함| N31
 N32["L468 if"]
 N16 -->|포함| N32
 N33["L474 for"]
 N32 -->|포함| N33
 N34["L476 for"]
 N33 -->|포함| N34
 N35["L542 foreach"]
 N32 -->|포함| N35
 N36["L547 using"]
 N35 -->|포함| N36
 N37["L549 foreach"]
 N36 -->|포함| N37
 N38["L565 if"]
 N16 -->|포함| N38
 N39["L575 if"]
 N38 -->|포함| N39
 N40["L579 else"]
 N39 -->|포함| N40
 N41["L594 if"]
 N38 -->|포함| N41
 N42["L602 if"]
 N38 -->|포함| N42
 N43["L615 if"]
 N38 -->|포함| N43
 N44["L620 foreach"]
 N43 -->|포함| N44
 N45["L640 if"]
 N38 -->|포함| N45
 N46["L674 if"]
 M -->|포함| N46
 N47["L678 foreach"]
 N46 -->|포함| N47
 N48["L685 foreach"]
 N46 -->|포함| N48
 N49["L709 foreach"]
 N46 -->|포함| N49
 N50["L735 if"]
 N46 -->|포함| N50
 N51["L740 foreach"]
 N46 -->|포함| N51
 N52["L745 if"]
 N46 -->|포함| N52
 N53["L763 foreach"]
 N46 -->|포함| N53
 N54["L768 foreach"]
 N46 -->|포함| N54
 N55["L799 using"]
 M -->|포함| N55
 N56["L815 foreach"]
 N55 -->|포함| N56
 N57["L826 if"]
 M -->|포함| N57
 N58["L830 using"]
 N57 -->|포함| N58
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### LocalFunctionStatement `AddPreviewShot` · L487–540

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:487–540](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L487-L540)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void AddPreviewShot(Drilling.Common.Recipe.ST_SHOT_GROUP_CENTER) |
| 접근/수식자 | Private /  |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| shotCenter | Drilling.Common.Recipe.ST_SHOT_GROUP_CENTER | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:483–483](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L483-L483) | AddPreviewShot | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 489 | shotLocations.GetValueOrDefault | resolved | Drilling.Common.Review.ST_REVIEW_PLAN_POINT? System.Collections.Generic.IReadOnlyDictionary<(int, int), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.GetValueOrDefault<(int, int), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>((int, int)) |
| 492 | TryProjectReviewPreviewPixel | resolved | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectReviewPreviewPixel(double, double, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out double, out double, out int, out int) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1410 |
| 514 | Math.Min | resolved | double System.Math.Min(double, double) |
| 515 | Math.Min | resolved | double System.Math.Min(double, double) |
| 516 | Math.Max | resolved | double System.Math.Max(double, double) |
| 517 | Math.Max | resolved | double System.Math.Max(double, double) |
| 524 | cellPixels.Add | resolved | bool System.Collections.Generic.HashSet<long>.Add(long) |
| 526 | .Contains | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlySet<string>.Contains(string) |
| 527 | CReviewManager.ToShotKey | resolved | string Drilling.Common.Review.CReviewManager.ToShotKey(int, int) · Drilling.Common/Review/CReviewManager.cs:1160 |
| 529 | shotStates.GetValueOrDefault | resolved | Drilling.Common.Review.EN_REVIEW_POINT_STATE System.Collections.Generic.IReadOnlyDictionary<(int, int), Drilling.Common.Review.EN_REVIEW_POINT_STATE>.GetValueOrDefault<(int, int), Drilling.Common.Review.EN_REVIEW_POINT_STATE>((int, int), Drilling.Common.Review.EN_REVIEW_POINT_STATE) |
| 534 | shotVisuals.Add | resolved | void System.Collections.Generic.List<(double X, double Y, double Size, Drilling.Common.Review.EN_REVIEW_POINT_STATE State)>.Add((double X, double Y, double Size, Drilling.Common.Review.EN_REVIEW_POINT_STATE State)) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 489 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shotLocations.GetValueOrDefault((cellNo, shotCenter.CellShotNo)) |
| 489 | local-declaration | 지역 변수를 선언합니다: var coordinatePoint = shotLocations.GetValueOrDefault((cellNo, shotCenter.CellShotNo)); |
| 489 | variable-initializer | 변수의 초기값을 지정합니다: coordinatePoint = shotLocations.GetValueOrDefault((cellNo, shotCenter.CellShotNo)) |
| 490 | local-declaration | 지역 변수를 선언합니다: var pointX = coordinatePoint?.DesignX ?? shotCenter.DesignX; |
| 490 | variable-initializer | 변수의 초기값을 지정합니다: pointX = coordinatePoint?.DesignX ?? shotCenter.DesignX |
| 491 | local-declaration | 지역 변수를 선언합니다: var pointY = coordinatePoint?.DesignY ?? shotCenter.DesignY; |
| 491 | variable-initializer | 변수의 초기값을 지정합니다: pointY = coordinatePoint?.DesignY ?? shotCenter.DesignY |
| 492 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryProjectReviewPreviewPixel( pointX, pointY, frame, scale, out var canvasX, out var canvasY, out var pixelX, out var pixelY ) |
| 492 | if | 조건에 따라 분기합니다: if (!TryProjectReviewPreviewPixel( pointX, pointY, frame, scale, out var canvasX, out var canvasY, out var pixelX, out var pixelY )) |
| 511 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 514 | assignment | 값을 대상에 대입합니다: minCanvasX = Math.Min(minCanvasX, canvasX) |
| 514 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(minCanvasX, canvasX) |
| 515 | assignment | 값을 대상에 대입합니다: minCanvasY = Math.Min(minCanvasY, canvasY) |
| 515 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(minCanvasY, canvasY) |
| 516 | assignment | 값을 대상에 대입합니다: maxCanvasX = Math.Max(maxCanvasX, canvasX) |
| 516 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(maxCanvasX, canvasX) |
| 517 | assignment | 값을 대상에 대입합니다: maxCanvasY = Math.Max(maxCanvasY, canvasY) |
| 517 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(maxCanvasY, canvasY) |
| 519 | local-declaration | 지역 변수를 선언합니다: var pixelKey = ((long)pixelX << 32) &#124; (uint)pixelY; |
| 519 | variable-initializer | 변수의 초기값을 지정합니다: pixelKey = ((long)pixelX << 32) &#124; (uint)pixelY |
| 520 | local-declaration | 지역 변수를 선언합니다: var isInside = pointX - beamHalfSpan >= 0.0 && pointX + beamHalfSpan <= glassWidth && pointY - beamHalfSpan >= 0.0 && pointY + beamHalfSpan <= glassHeight; |
| 520 | variable-initializer | 변수의 초기값을 지정합니다: isInside = pointX - beamHalfSpan >= 0.0 && pointX + beamHalfSpan <= glassWidth && pointY - beamHalfSpan >= 0.0 && pointY + beamHalfSpan <= glassHeight |
| 524 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cellPixels.Add(pixelKey) |
| 524 | if | 조건에 따라 분기합니다: if (cellPixels.Add(pixelKey)) |
| 526 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Contains( CReviewManager.ToShotKey(cellNo, shotCenter.CellShotNo)) |
| 526 | conditional-expression | 조건에 따라 결과식을 선택합니다: selectAllShots &#124;&#124; selectedShotKeys?.Contains( CReviewManager.ToShotKey(cellNo, shotCenter.CellShotNo)) == true ? EN_REVIEW_POINT_STATE.Ready : shotStates.GetValueOrDefault( (cellNo, shotCenter.CellShotNo), useSampleSelectionColors |
| 526 | local-declaration | 지역 변수를 선언합니다: var state = selectAllShots &#124;&#124; selectedShotKeys?.Contains( CReviewManager.ToShotKey(cellNo, shotCenter.CellShotNo)) == true ? EN_REVIEW_POINT_STATE.Ready : shotStates.GetValueOrDefault( (cellNo, shotCenter.CellShotNo), useSampleSel |
| 526 | variable-initializer | 변수의 초기값을 지정합니다: state = selectAllShots &#124;&#124; selectedShotKeys?.Contains( CReviewManager.ToShotKey(cellNo, shotCenter.CellShotNo)) == true ? EN_REVIEW_POINT_STATE.Ready : shotStates.GetValueOrDefault( (cellNo, shotCenter.CellShotNo), useSampleSelecti |
| 527 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewManager.ToShotKey(cellNo, shotCenter.CellShotNo) |
| 529 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shotStates.GetValueOrDefault( (cellNo, shotCenter.CellShotNo), useSampleSelectionColors ? EN_REVIEW_POINT_STATE.Skip : defaultPointState) |
| 531 | conditional-expression | 조건에 따라 결과식을 선택합니다: useSampleSelectionColors ? EN_REVIEW_POINT_STATE.Skip : defaultPointState |
| 534 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: shotVisuals.Add(( pixelX, pixelY, isInside ? previewShotSize : 4.0, state)) |
| 537 | conditional-expression | 조건에 따라 결과식을 선택합니다: isInside ? previewShotSize : 4.0 |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["AddPreviewShot"]
 N0["L492 if"]
 M -->|포함| N0
 N1["L524 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawInspectionPoints` · L867–925

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:867–925](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L867-L925)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawInspectionPoints(DrawingContext, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.Common.Review.EN_REVIEW_CORRECTION_RULE?, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| inspectionPoints | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> | None | False /  |
| inspectionRule | Drilling.Common.Review.EN_REVIEW_CORRECTION_RULE? | None | False /  |
| frame | Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME | None | False /  |
| scale | double | None | False /  |
| cellDisplays | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 884 | DrawFineInspectionLines | resolved | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawFineInspectionLines(DrawingContext, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:986 |
| 890 | DrawEdgeInspectionAreas | resolved | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawEdgeInspectionAreas(DrawingContext, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:927 |
| 901 | new StreamGeometry | unresolved | None |
| 902 | geometry.Open | unresolved | None |
| 906 | TryProjectCellPoint | resolved | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectCellPoint(Drilling.Common.Review.ST_REVIEW_PLAN_POINT, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out Point) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1035 |
| 915 | AddCircle | candidate | OverloadResolutionFailure |
| 923 | geometry.Freeze | unresolved | None |
| 924 | context.DrawGeometry | unresolved | None |
| 924 | CStatusBrush.Frozen | resolved | SolidColorBrush Drilling.UI.Menu.Menus.CStatusBrush.Frozen(byte, byte, byte) · Drilling.UI/Menu/Menus/CMenuBase.cs:330 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 882 | if | 조건에 따라 분기합니다: if (inspectionRule == EN_REVIEW_CORRECTION_RULE.Fine) |
| 884 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawFineInspectionLines(context, inspectionPoints, frame, scale) |
| 885 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 888 | if | 조건에 따라 분기합니다: if (inspectionRule == EN_REVIEW_CORRECTION_RULE.Edge) |
| 890 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawEdgeInspectionAreas(context, inspectionPoints, frame, scale, cellDisplays) |
| 891 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 896 | if | 조건에 따라 분기합니다: if (inspectionRule == EN_REVIEW_CORRECTION_RULE.Rough) |
| 898 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 901 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new StreamGeometry() |
| 901 | local-declaration | 지역 변수를 선언합니다: var geometry = new StreamGeometry(); |
| 901 | variable-initializer | 변수의 초기값을 지정합니다: geometry = new StreamGeometry() |
| 902 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: geometry.Open() |
| 902 | variable-initializer | 변수의 초기값을 지정합니다: geometryContext = geometry.Open() |
| 902 | using | 자원 사용과 정리 범위를 지정합니다: using (var geometryContext = geometry.Open()) |
| 904 | foreach | 컬렉션 요소를 순회합니다: foreach (var point in inspectionPoints) |
| 906 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryProjectCellPoint( point, frame, scale, out var canvasPoint) |
| 906 | if | 조건에 따라 분기합니다: if (!TryProjectCellPoint( point, frame, scale, out var canvasPoint)) |
| 912 | continue | 다음 반복으로 진행합니다: continue; |
| 915 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: AddCircle( geometryContext, canvasPoint.X, canvasPoint.Y, 1.4) |
| 923 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: geometry.Freeze() |
| 924 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawGeometry(CStatusBrush.Frozen(0xFF, 0xC6, 0x29), null, geometry) |
| 924 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CStatusBrush.Frozen(0xFF, 0xC6, 0x29) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawInspectionPoints"]
 N0["L882 if"]
 M -->|포함| N0
 N1["L888 if"]
 M -->|포함| N1
 N2["L896 if"]
 M -->|포함| N2
 N3["L902 using"]
 M -->|포함| N3
 N4["L904 foreach"]
 N3 -->|포함| N4
 N5["L906 if"]
 N4 -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawEdgeInspectionAreas` · L927–984

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:927–984](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L927-L984)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawEdgeInspectionAreas(DrawingContext, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| inspectionPoints | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> | None | False /  |
| frame | Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME | None | False /  |
| scale | double | None | False /  |
| cellDisplays | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:890–890](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L890-L890) | DrawEdgeInspectionAreas | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 940 | new DashStyle | unresolved | None |
| 941 | dashStyle.Freeze | unresolved | None |
| 942 | new Pen | unresolved | None |
| 942 | CStatusBrush.Frozen | resolved | SolidColorBrush Drilling.UI.Menu.Menus.CStatusBrush.Frozen(byte, byte, byte) · Drilling.UI/Menu/Menus/CMenuBase.cs:330 |
| 947 | edgePen.Freeze | unresolved | None |
| 948 | inspectionPoints.GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<int, Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.GroupBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, int>) |
| 950 | cellDisplays.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>.TryGetValue(int, out Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY) |
| 952 | context.DrawRectangle | unresolved | None |
| 956 | cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) .ToArray | unresolved | None |
| 956 | cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select | unresolved | None |
| 956 | cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where | unresolved | None |
| 956 | cell .Select | candidate | OverloadResolutionFailure |
| 957 | TryProjectCellPoint | resolved | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectCellPoint(Drilling.Common.Review.ST_REVIEW_PLAN_POINT, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out Point) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1035 |
| 962 | new Point? | resolved | Point?.Nullable(Point) |
| 972 | projected.Min | unresolved | None |
| 973 | projected.Max | unresolved | None |
| 974 | projected.Min | unresolved | None |
| 975 | projected.Max | unresolved | None |
| 978 | context.DrawRectangle | unresolved | None |
| 981 | new Rect | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 940 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new DashStyle([3.0, 3.0], 0.0) |
| 940 | local-declaration | 지역 변수를 선언합니다: var dashStyle = new DashStyle([3.0, 3.0], 0.0); |
| 940 | variable-initializer | 변수의 초기값을 지정합니다: dashStyle = new DashStyle([3.0, 3.0], 0.0) |
| 941 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: dashStyle.Freeze() |
| 942 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CStatusBrush.Frozen(0x4F, 0x91, 0xB8) |
| 942 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen(CStatusBrush.Frozen(0x4F, 0x91, 0xB8), 1.15) { DashStyle = dashStyle, DashCap = PenLineCap.Round } |
| 942 | local-declaration | 지역 변수를 선언합니다: var edgePen = new Pen(CStatusBrush.Frozen(0x4F, 0x91, 0xB8), 1.15) { DashStyle = dashStyle, DashCap = PenLineCap.Round }; |
| 942 | variable-initializer | 변수의 초기값을 지정합니다: edgePen = new Pen(CStatusBrush.Frozen(0x4F, 0x91, 0xB8), 1.15) { DashStyle = dashStyle, DashCap = PenLineCap.Round } |
| 944 | assignment | 값을 대상에 대입합니다: DashStyle = dashStyle |
| 945 | assignment | 값을 대상에 대입합니다: DashCap = PenLineCap.Round |
| 947 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: edgePen.Freeze() |
| 948 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: inspectionPoints.GroupBy(point => point.CellNo) |
| 948 | foreach | 컬렉션 요소를 순회합니다: foreach (var cell in inspectionPoints.GroupBy(point => point.CellNo)) |
| 950 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cellDisplays.TryGetValue(cell.Key, out var display) |
| 950 | if | 조건에 따라 분기합니다: if (cellDisplays.TryGetValue(cell.Key, out var display)) |
| 952 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawRectangle(null, edgePen, display.ActualBounds) |
| 953 | continue | 다음 반복으로 진행합니다: continue; |
| 956 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) |
| 956 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) |
| 956 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) |
| 956 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) .ToArray() |
| 956 | local-declaration | 지역 변수를 선언합니다: var projected = cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) .ToArray(); |
| 956 | variable-initializer | 변수의 초기값을 지정합니다: projected = cell .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) .ToArray() |
| 957 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryProjectCellPoint( point, frame, scale, out var canvasPoint) |
| 957 | conditional-expression | 조건에 따라 결과식을 선택합니다: TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null |
| 962 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point?(canvasPoint) |
| 967 | if | 조건에 따라 분기합니다: if (projected.Length == 0) |
| 969 | continue | 다음 반복으로 진행합니다: continue; |
| 972 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: projected.Min(point => point.X) |
| 972 | local-declaration | 지역 변수를 선언합니다: var minimumX = projected.Min(point => point.X); |
| 972 | variable-initializer | 변수의 초기값을 지정합니다: minimumX = projected.Min(point => point.X) |
| 973 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: projected.Max(point => point.X) |
| 973 | local-declaration | 지역 변수를 선언합니다: var maximumX = projected.Max(point => point.X); |
| 973 | variable-initializer | 변수의 초기값을 지정합니다: maximumX = projected.Max(point => point.X) |
| 974 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: projected.Min(point => point.Y) |
| 974 | local-declaration | 지역 변수를 선언합니다: var minimumY = projected.Min(point => point.Y); |
| 974 | variable-initializer | 변수의 초기값을 지정합니다: minimumY = projected.Min(point => point.Y) |
| 975 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: projected.Max(point => point.Y) |
| 975 | local-declaration | 지역 변수를 선언합니다: var maximumY = projected.Max(point => point.Y); |
| 975 | variable-initializer | 변수의 초기값을 지정합니다: maximumY = projected.Max(point => point.Y) |
| 976 | if | 조건에 따라 분기합니다: if (maximumX > minimumX && maximumY > minimumY) |
| 978 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawRectangle( null, edgePen, new Rect(minimumX, minimumY, maximumX - minimumX, maximumY - minimumY)) |
| 981 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect(minimumX, minimumY, maximumX - minimumX, maximumY - minimumY) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawEdgeInspectionAreas"]
 N0["L948 foreach"]
 M -->|포함| N0
 N1["L950 if"]
 N0 -->|포함| N1
 N2["L967 if"]
 N0 -->|포함| N2
 N3["L976 if"]
 N0 -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawFineInspectionLines` · L986–1033

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:986–1033](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L986-L1033)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawFineInspectionLines(DrawingContext, System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| inspectionPoints | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> | None | False /  |
| frame | Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME | None | False /  |
| scale | double | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:884–884](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L884-L884) | DrawFineInspectionLines | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 992 | new Pen | unresolved | None |
| 992 | CStatusBrush.Frozen | resolved | SolidColorBrush Drilling.UI.Menu.Menus.CStatusBrush.Frozen(byte, byte, byte) · Drilling.UI/Menu/Menus/CMenuBase.cs:330 |
| 997 | linePen.Freeze | unresolved | None |
| 998 | inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) .OrderBy(group => group.Key.CellNo) .ThenBy(group => group.Key.Y) .ToArray | resolved | System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>[] System.Collections.Generic.IEnumerable<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>.ToArray<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>() |
| 998 | inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) .OrderBy(group => group.Key.CellNo) .ThenBy | resolved | System.Linq.IOrderedEnumerable<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Linq.IOrderedEnumerable<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>.ThenBy<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, double>(System.Func<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, double>) |
| 998 | inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) .OrderBy | resolved | System.Linq.IOrderedEnumerable<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>>.OrderBy<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, int>(System.Func<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>, int>) |
| 998 | inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<(int CellNo, double Y), Drilling.Common.Review.ST_REVIEW_PLAN_POINT>> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.GroupBy<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, (int CellNo, double Y)>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, (int CellNo, double Y)>) |
| 998 | inspectionPoints .Where | resolved | System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> System.Collections.Generic.IEnumerable<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>.Where<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>(System.Func<Drilling.Common.Review.ST_REVIEW_PLAN_POINT, bool>) |
| 999 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1000 | Math.Round | resolved | double System.Math.Round(double, int) |
| 1007 | row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) .ToArray | unresolved | None |
| 1007 | row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select | unresolved | None |
| 1007 | row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where | unresolved | None |
| 1007 | row .Select | candidate | OverloadResolutionFailure |
| 1008 | TryProjectCellPoint | resolved | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectCellPoint(Drilling.Common.Review.ST_REVIEW_PLAN_POINT, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out Point) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1035 |
| 1013 | new Point? | resolved | Point?.Nullable(Point) |
| 1025 | projectedRow.Min | unresolved | None |
| 1026 | projectedRow.Max | unresolved | None |
| 1027 | projectedRow.Average | unresolved | None |
| 1028 | context.DrawLine | unresolved | None |
| 1030 | new Point | unresolved | None |
| 1031 | new Point | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 992 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CStatusBrush.Frozen(0x4F, 0x91, 0xB8) |
| 992 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen(CStatusBrush.Frozen(0x4F, 0x91, 0xB8), 1.6) { StartLineCap = PenLineCap.Round, EndLineCap = PenLineCap.Round } |
| 992 | local-declaration | 지역 변수를 선언합니다: var linePen = new Pen(CStatusBrush.Frozen(0x4F, 0x91, 0xB8), 1.6) { StartLineCap = PenLineCap.Round, EndLineCap = PenLineCap.Round }; |
| 992 | variable-initializer | 변수의 초기값을 지정합니다: linePen = new Pen(CStatusBrush.Frozen(0x4F, 0x91, 0xB8), 1.6) { StartLineCap = PenLineCap.Round, EndLineCap = PenLineCap.Round } |
| 994 | assignment | 값을 대상에 대입합니다: StartLineCap = PenLineCap.Round |
| 995 | assignment | 값을 대상에 대입합니다: EndLineCap = PenLineCap.Round |
| 997 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: linePen.Freeze() |
| 998 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) |
| 998 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) |
| 998 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) .OrderBy(group => group.Key.CellNo) |
| 998 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) .OrderBy(group => group.Key.CellNo) .ThenBy(grou… |
| 998 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) .OrderBy(group => group.Key.CellNo) .ThenBy(grou… |
| 998 | local-declaration | 지역 변수를 선언합니다: var rows = inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) .OrderBy(group => group.Key.CellNo) .ThenBy(gro |
| 998 | variable-initializer | 변수의 초기값을 지정합니다: rows = inspectionPoints .Where(point => point.CellNo > 0 && point.HeadNo > 0 && double.IsFinite(point.DesignY)) .GroupBy(point => (point.CellNo, Y: Math.Round(point.DesignY, 6))) .OrderBy(group => group.Key.CellNo) .ThenBy(group = |
| 999 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(point.DesignY) |
| 1000 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(point.DesignY, 6) |
| 1005 | foreach | 컬렉션 요소를 순회합니다: foreach (var row in rows) |
| 1007 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) |
| 1007 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) |
| 1007 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) |
| 1007 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) .ToArray() |
| 1007 | local-declaration | 지역 변수를 선언합니다: var projectedRow = row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) .ToArray(); |
| 1007 | variable-initializer | 변수의 초기값을 지정합니다: projectedRow = row .Select(point => TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null) .Where(point => point.HasValue) .Select(point => point!.Value) .ToArray() |
| 1008 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryProjectCellPoint( point, frame, scale, out var canvasPoint) |
| 1008 | conditional-expression | 조건에 따라 결과식을 선택합니다: TryProjectCellPoint( point, frame, scale, out var canvasPoint) ? new Point?(canvasPoint) : null |
| 1013 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point?(canvasPoint) |
| 1018 | if | 조건에 따라 분기합니다: if (projectedRow.Length == 0) |
| 1020 | continue | 다음 반복으로 진행합니다: continue; |
| 1025 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: projectedRow.Min(point => point.X) |
| 1025 | local-declaration | 지역 변수를 선언합니다: var left = projectedRow.Min(point => point.X); |
| 1025 | variable-initializer | 변수의 초기값을 지정합니다: left = projectedRow.Min(point => point.X) |
| 1026 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: projectedRow.Max(point => point.X) |
| 1026 | local-declaration | 지역 변수를 선언합니다: var right = projectedRow.Max(point => point.X); |
| 1026 | variable-initializer | 변수의 초기값을 지정합니다: right = projectedRow.Max(point => point.X) |
| 1027 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: projectedRow.Average(point => point.Y) |
| 1027 | local-declaration | 지역 변수를 선언합니다: var y = projectedRow.Average(point => point.Y); |
| 1027 | variable-initializer | 변수의 초기값을 지정합니다: y = projectedRow.Average(point => point.Y) |
| 1028 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawLine( linePen, new Point(left, y), new Point(right, y)) |
| 1030 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(left, y) |
| 1031 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(right, y) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawFineInspectionLines"]
 N0["L1005 foreach"]
 M -->|포함| N0
 N1["L1018 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryProjectCellPoint` · L1035–1066

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1035–1066](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1035-L1066)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectCellPoint(Drilling.Common.Review.ST_REVIEW_PLAN_POINT, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out Point) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| point | Drilling.Common.Review.ST_REVIEW_PLAN_POINT | None | False /  |
| frame | Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME | None | False /  |
| scale | double | None | False /  |
| canvasPoint | Point | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:906–910](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L906-L910) | TryProjectCellPoint | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:957–961](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L957-L961) | TryProjectCellPoint | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1008–1012](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1008-L1012) | TryProjectCellPoint | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1042 | TryProjectReviewPreviewPixel | resolved | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectReviewPreviewPixel(double, double, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out double, out double, out int, out int) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1410 |
| 1064 | new Point | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1041 | assignment | 값을 대상에 대입합니다: canvasPoint = default |
| 1042 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryProjectReviewPreviewPixel( point.DesignX, point.DesignY, frame, scale, out var canvasX, out var canvasY, out _, out _ ) |
| 1042 | if | 조건에 따라 분기합니다: if (!TryProjectReviewPreviewPixel( point.DesignX, point.DesignY, frame, scale, out var canvasX, out var canvasY, out _, out _ )) |
| 1061 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1064 | assignment | 값을 대상에 대입합니다: canvasPoint = new Point(canvasX, canvasY) |
| 1064 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(canvasX, canvasY) |
| 1065 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryProjectCellPoint"]
 N0["L1042 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryGetHeadScopeBounds` · L1068–1101

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1068–1101](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1068-L1101)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryGetHeadScopeBounds(System.Collections.Generic.IReadOnlyDictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>, int, int, int, Rect, out Rect) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| scopeColumns | System.Collections.Generic.IReadOnlyDictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)> | None | False /  |
| cellNo | int | None | False /  |
| groupCountX | int | None | False /  |
| headNo | int | None | False /  |
| cellBounds | Rect | None | False /  |
| scopeBounds | Rect | Out | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1089 | scopeColumns.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>.TryGetValue((int CellNo, int HeadNo), out (int FirstColumn, int LastColumn)) |
| 1099 | new Rect | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1083 | assignment | 값을 대상에 대입합니다: scopeBounds = Rect.Empty |
| 1084 | if | 조건에 따라 분기합니다: if (cellNo <= 0 &#124;&#124; groupCountX <= 0 &#124;&#124; headNo <= 0) |
| 1086 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1089 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scopeColumns.TryGetValue((cellNo, headNo), out var columns) |
| 1089 | if | 조건에 따라 분기합니다: if (!scopeColumns.TryGetValue((cellNo, headNo), out var columns) &#124;&#124; cellBounds.IsEmpty &#124;&#124; cellBounds.Width <= 0.0 &#124;&#124; cellBounds.Height <= 0.0) |
| 1094 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1097 | local-declaration | 지역 변수를 선언합니다: var left = cellBounds.Left + (cellBounds.Width * columns.FirstColumn / groupCountX); |
| 1097 | variable-initializer | 변수의 초기값을 지정합니다: left = cellBounds.Left + (cellBounds.Width * columns.FirstColumn / groupCountX) |
| 1098 | local-declaration | 지역 변수를 선언합니다: var right = cellBounds.Left + (cellBounds.Width * (columns.LastColumn + 1) / groupCountX); |
| 1098 | variable-initializer | 변수의 초기값을 지정합니다: right = cellBounds.Left + (cellBounds.Width * (columns.LastColumn + 1) / groupCountX) |
| 1099 | assignment | 값을 대상에 대입합니다: scopeBounds = new Rect(left, cellBounds.Top, right - left, cellBounds.Height) |
| 1099 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect(left, cellBounds.Top, right - left, cellBounds.Height) |
| 1100 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryGetHeadScopeBounds"]
 N0["L1084 if"]
 M -->|포함| N0
 N1["L1089 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `BuildHeadScopeColumnIndex` · L1103–1138

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1103–1138](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1103-L1138)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.BuildHeadScopeColumnIndex(System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)> |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| scopePoints | System.Collections.Generic.IReadOnlyList<Drilling.Common.Review.ST_REVIEW_PLAN_POINT> | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:254–254](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L254-L254) | BuildHeadScopeColumnIndex | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1108 | new Dictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)> | resolved | System.Collections.Generic.Dictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>.Dictionary() |
| 1125 | result.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>.TryGetValue((int CellNo, int HeadNo), out (int FirstColumn, int LastColumn)) |
| 1128 | Math.Min | resolved | int System.Math.Min(int, int) |
| 1129 | Math.Max | resolved | int System.Math.Max(int, int) |
| 1133 | result.Add | resolved | void System.Collections.Generic.Dictionary<(int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>.Add((int CellNo, int HeadNo), (int FirstColumn, int LastColumn)) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1108 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>() |
| 1108 | local-declaration | 지역 변수를 선언합니다: var result = new Dictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>(); |
| 1108 | variable-initializer | 변수의 초기값을 지정합니다: result = new Dictionary< (int CellNo, int HeadNo), (int FirstColumn, int LastColumn)>() |
| 1111 | foreach | 컬렉션 요소를 순회합니다: foreach (var point in scopePoints) |
| 1113 | if | 조건에 따라 분기합니다: if (point.CellNo <= 0 &#124;&#124; point.HeadNo <= 0 &#124;&#124; point.PixelCountX <= 0) |
| 1115 | continue | 다음 반복으로 진행합니다: continue; |
| 1118 | local-declaration | 지역 변수를 선언합니다: var column = (point.ShotNo - 1) % point.PixelCountX; |
| 1118 | variable-initializer | 변수의 초기값을 지정합니다: column = (point.ShotNo - 1) % point.PixelCountX |
| 1119 | if | 조건에 따라 분기합니다: if (column < 0) |
| 1121 | continue | 다음 반복으로 진행합니다: continue; |
| 1124 | local-declaration | 지역 변수를 선언합니다: var key = (point.CellNo, point.HeadNo); |
| 1124 | variable-initializer | 변수의 초기값을 지정합니다: key = (point.CellNo, point.HeadNo) |
| 1125 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: result.TryGetValue(key, out var columns) |
| 1125 | if | 조건에 따라 분기합니다: if (result.TryGetValue(key, out var columns)) |
| 1127 | assignment | 값을 대상에 대입합니다: result[key] = ( Math.Min(columns.FirstColumn, column), Math.Max(columns.LastColumn, column)) |
| 1128 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(columns.FirstColumn, column) |
| 1129 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(columns.LastColumn, column) |
| 1131 | else | 앞 조건이 거짓인 경로입니다: else |
| 1133 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: result.Add(key, (column, column)) |
| 1137 | return | 호출자에게 값 또는 제어를 반환합니다: return result; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["BuildHeadScopeColumnIndex"]
 N0["L1111 foreach"]
 M -->|포함| N0
 N1["L1113 if"]
 N0 -->|포함| N1
 N2["L1119 if"]
 N0 -->|포함| N2
 N3["L1125 if"]
 N0 -->|포함| N3
 N4["L1131 else"]
 N3 -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `AddScopeCorners` · L1140–1151

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1140–1151](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1140-L1151)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.AddScopeCorners(System.Collections.Generic.ICollection<Point>, Rect) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| points | System.Collections.Generic.ICollection<Point> | None | False /  |
| bounds | Rect | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:387–387](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L387-L387) | AddScopeCorners | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:443–443](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L443-L443) | AddScopeCorners | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1147 | points.Add | candidate | OverloadResolutionFailure |
| 1148 | points.Add | candidate | OverloadResolutionFailure |
| 1149 | points.Add | candidate | OverloadResolutionFailure |
| 1150 | points.Add | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1142 | if | 조건에 따라 분기합니다: if (bounds.IsEmpty &#124;&#124; bounds.Width <= 0.0 &#124;&#124; bounds.Height <= 0.0) |
| 1144 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1147 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: points.Add(bounds.TopLeft) |
| 1148 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: points.Add(bounds.TopRight) |
| 1149 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: points.Add(bounds.BottomRight) |
| 1150 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: points.Add(bounds.BottomLeft) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["AddScopeCorners"]
 N0["L1142 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawHeadScope` · L1153–1170

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1153–1170](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1153-L1170)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHeadScope(DrawingContext, int, Rect) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| headNo | int | None | False /  |
| scopeBounds | Rect | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1275–1278](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1275-L1278) | DrawHeadScope | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1163 | CMenuMain.CreateHeadBrush | resolved | Brush Drilling.UI.Menu.Menus.CMenuMain.CreateHeadBrush(int, byte) · Drilling.UI/Menu/Menus/CMenuMain.cs:2246 |
| 1164 | new Pen | unresolved | None |
| 1164 | CMenuMain.CreateHeadBrush | resolved | Brush Drilling.UI.Menu.Menus.CMenuMain.CreateHeadBrush(int, byte) · Drilling.UI/Menu/Menus/CMenuMain.cs:2246 |
| 1168 | stroke.Freeze | unresolved | None |
| 1169 | context.DrawRectangle | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1158 | if | 조건에 따라 분기합니다: if (headNo <= 0 &#124;&#124; scopeBounds.IsEmpty &#124;&#124; scopeBounds.Width <= 0.0 &#124;&#124; scopeBounds.Height <= 0.0) |
| 1160 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1163 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMenuMain.CreateHeadBrush(headNo, 0x58) |
| 1163 | local-declaration | 지역 변수를 선언합니다: var fill = CMenuMain.CreateHeadBrush(headNo, 0x58); |
| 1163 | variable-initializer | 변수의 초기값을 지정합니다: fill = CMenuMain.CreateHeadBrush(headNo, 0x58) |
| 1164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMenuMain.CreateHeadBrush(headNo, 0xE6) |
| 1164 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen(CMenuMain.CreateHeadBrush(headNo, 0xE6), 2.0) { DashStyle = DashStyles.Dash } |
| 1164 | local-declaration | 지역 변수를 선언합니다: var stroke = new Pen(CMenuMain.CreateHeadBrush(headNo, 0xE6), 2.0) { DashStyle = DashStyles.Dash }; |
| 1164 | variable-initializer | 변수의 초기값을 지정합니다: stroke = new Pen(CMenuMain.CreateHeadBrush(headNo, 0xE6), 2.0) { DashStyle = DashStyles.Dash } |
| 1166 | assignment | 값을 대상에 대입합니다: DashStyle = DashStyles.Dash |
| 1168 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: stroke.Freeze() |
| 1169 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawRectangle(fill, stroke, scopeBounds) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawHeadScope"]
 N0["L1158 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawHeadCellScope` · L1172–1185

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1172–1185](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1172-L1185)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHeadCellScope(DrawingContext, int, Geometry) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| headNo | int | None | False /  |
| cellBoundary | Geometry | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1300–1300](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1300-L1300) | DrawHeadCellScope | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1182 | new Pen | unresolved | None |
| 1182 | CMenuMain.CreateHeadBrush | resolved | Brush Drilling.UI.Menu.Menus.CMenuMain.CreateHeadBrush(int, byte) · Drilling.UI/Menu/Menus/CMenuMain.cs:2246 |
| 1183 | stroke.Freeze | unresolved | None |
| 1184 | context.DrawGeometry | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1177 | if | 조건에 따라 분기합니다: if (headNo <= 0 &#124;&#124; cellBoundary.Bounds.IsEmpty) |
| 1179 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen(CMenuMain.CreateHeadBrush(headNo, 0xF2), 1.0) |
| 1182 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMenuMain.CreateHeadBrush(headNo, 0xF2) |
| 1182 | local-declaration | 지역 변수를 선언합니다: var stroke = new Pen(CMenuMain.CreateHeadBrush(headNo, 0xF2), 1.0); |
| 1182 | variable-initializer | 변수의 초기값을 지정합니다: stroke = new Pen(CMenuMain.CreateHeadBrush(headNo, 0xF2), 1.0) |
| 1183 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: stroke.Freeze() |
| 1184 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawGeometry(null, stroke, cellBoundary) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawHeadCellScope"]
 N0["L1177 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawCurrentCellOutline` · L1187–1204

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1187–1204](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1187-L1204)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawCurrentCellOutline(DrawingContext, Geometry) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| cellBoundary | Geometry | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1196 | new Pen | unresolved | None |
| 1197 | CReviewStatusBrush.ForState | resolved | Brush Drilling.UI.Menu.Menus.CReviewStatusBrush.ForState(Drilling.Common.Review.EN_REVIEW_POINT_STATE) · Drilling.UI/Menu/Menus/CMenuReview.cs:3831 |
| 1202 | stroke.Freeze | unresolved | None |
| 1203 | context.DrawGeometry | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1191 | if | 조건에 따라 분기합니다: if (cellBoundary.Bounds.IsEmpty) |
| 1193 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1196 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen( CReviewStatusBrush.ForState(EN_REVIEW_POINT_STATE.Current), 2.4) { LineJoin = PenLineJoin.Round } |
| 1196 | local-declaration | 지역 변수를 선언합니다: var stroke = new Pen( CReviewStatusBrush.ForState(EN_REVIEW_POINT_STATE.Current), 2.4) { LineJoin = PenLineJoin.Round }; |
| 1196 | variable-initializer | 변수의 초기값을 지정합니다: stroke = new Pen( CReviewStatusBrush.ForState(EN_REVIEW_POINT_STATE.Current), 2.4) { LineJoin = PenLineJoin.Round } |
| 1197 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CReviewStatusBrush.ForState(EN_REVIEW_POINT_STATE.Current) |
| 1200 | assignment | 값을 대상에 대입합니다: LineJoin = PenLineJoin.Round |
| 1202 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: stroke.Freeze() |
| 1203 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawGeometry(null, stroke, cellBoundary) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawCurrentCellOutline"]
 N0["L1191 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawGlobalHeadScope` · L1206–1229

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1206–1229](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1206-L1229)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawGlobalHeadScope(DrawingContext, int, System.Collections.Generic.IReadOnlyCollection<Point>) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| headNo | int | None | False /  |
| scopePoints | System.Collections.Generic.IReadOnlyCollection<Point> | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1211 | scopePoints.Min | resolved | ? System.Collections.Generic.IEnumerable<Point>.Min<Point, >(System.Func<Point, >) |
| 1212 | scopePoints.Min | resolved | ? System.Collections.Generic.IEnumerable<Point>.Min<Point, >(System.Func<Point, >) |
| 1213 | scopePoints.Max | resolved | ? System.Collections.Generic.IEnumerable<Point>.Max<Point, >(System.Func<Point, >) |
| 1214 | scopePoints.Max | resolved | ? System.Collections.Generic.IEnumerable<Point>.Max<Point, >(System.Func<Point, >) |
| 1215 | double.IsFinite | candidate | OverloadResolutionFailure |
| 1215 | double.IsFinite | candidate | OverloadResolutionFailure |
| 1216 | double.IsFinite | candidate | OverloadResolutionFailure |
| 1216 | double.IsFinite | candidate | OverloadResolutionFailure |
| 1222 | CMenuMain.CreateHeadBrush | resolved | Brush Drilling.UI.Menu.Menus.CMenuMain.CreateHeadBrush(int, byte) · Drilling.UI/Menu/Menus/CMenuMain.cs:2246 |
| 1223 | new Pen | unresolved | None |
| 1223 | CMenuMain.CreateHeadBrush | resolved | Brush Drilling.UI.Menu.Menus.CMenuMain.CreateHeadBrush(int, byte) · Drilling.UI/Menu/Menus/CMenuMain.cs:2246 |
| 1227 | stroke.Freeze | unresolved | None |
| 1228 | context.DrawRectangle | unresolved | None |
| 1228 | new Rect | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1211 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scopePoints.Min(point => point.X) |
| 1211 | local-declaration | 지역 변수를 선언합니다: var minX = scopePoints.Min(point => point.X); |
| 1211 | variable-initializer | 변수의 초기값을 지정합니다: minX = scopePoints.Min(point => point.X) |
| 1212 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scopePoints.Min(point => point.Y) |
| 1212 | local-declaration | 지역 변수를 선언합니다: var minY = scopePoints.Min(point => point.Y); |
| 1212 | variable-initializer | 변수의 초기값을 지정합니다: minY = scopePoints.Min(point => point.Y) |
| 1213 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scopePoints.Max(point => point.X) |
| 1213 | local-declaration | 지역 변수를 선언합니다: var maxX = scopePoints.Max(point => point.X); |
| 1213 | variable-initializer | 변수의 초기값을 지정합니다: maxX = scopePoints.Max(point => point.X) |
| 1214 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: scopePoints.Max(point => point.Y) |
| 1214 | local-declaration | 지역 변수를 선언합니다: var maxY = scopePoints.Max(point => point.Y); |
| 1214 | variable-initializer | 변수의 초기값을 지정합니다: maxY = scopePoints.Max(point => point.Y) |
| 1215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(minX) |
| 1215 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(minY) |
| 1215 | if | 조건에 따라 분기합니다: if (!double.IsFinite(minX) &#124;&#124; !double.IsFinite(minY) &#124;&#124; !double.IsFinite(maxX) &#124;&#124; !double.IsFinite(maxY) &#124;&#124; maxX <= minX &#124;&#124; maxY <= minY) |
| 1216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(maxX) |
| 1216 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(maxY) |
| 1219 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1222 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMenuMain.CreateHeadBrush(headNo, 0x58) |
| 1222 | local-declaration | 지역 변수를 선언합니다: var fill = CMenuMain.CreateHeadBrush(headNo, 0x58); |
| 1222 | variable-initializer | 변수의 초기값을 지정합니다: fill = CMenuMain.CreateHeadBrush(headNo, 0x58) |
| 1223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CMenuMain.CreateHeadBrush(headNo, 0xE6) |
| 1223 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen(CMenuMain.CreateHeadBrush(headNo, 0xE6), 2.0) { DashStyle = DashStyles.Dash } |
| 1223 | local-declaration | 지역 변수를 선언합니다: var stroke = new Pen(CMenuMain.CreateHeadBrush(headNo, 0xE6), 2.0) { DashStyle = DashStyles.Dash }; |
| 1223 | variable-initializer | 변수의 초기값을 지정합니다: stroke = new Pen(CMenuMain.CreateHeadBrush(headNo, 0xE6), 2.0) { DashStyle = DashStyles.Dash } |
| 1225 | assignment | 값을 대상에 대입합니다: DashStyle = DashStyles.Dash |
| 1227 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: stroke.Freeze() |
| 1228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawRectangle(fill, stroke, new Rect(minX, minY, maxX - minX, maxY - minY)) |
| 1228 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect(minX, minY, maxX - minX, maxY - minY) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawGlobalHeadScope"]
 N0["L1215 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawPhysicalHeadScope` · L1231–1301

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1231–1301](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1231-L1301)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawPhysicalHeadScope(DrawingContext, int, Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE, System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, double, double, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| headNo | int | None | False /  |
| headScope | Drilling.Common.Review.ST_REVIEW_HEAD_SCOPE | None | False /  |
| cellDisplays | System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY> | None | False /  |
| frame | Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME | None | False /  |
| scale | double | None | False /  |
| akMarginX | double | None | False /  |
| scannerReferenceOffsetX | double | None | False /  |
| targetCellNo | int | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1260 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1260 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1266 | Math.Max | resolved | double System.Math.Max(double, double) |
| 1267 | Math.Min | resolved | double System.Math.Min(double, double) |
| 1275 | DrawHeadScope | resolved | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHeadScope(DrawingContext, int, Rect) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1153 |
| 1278 | new Rect | unresolved | None |
| 1282 | cellDisplays.TryGetValue | resolved · 동적 구현 선택 가능 | bool System.Collections.Generic.IReadOnlyDictionary<int, Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY>.TryGetValue(int, out Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ST_REVIEW_CELL_DISPLAY) |
| 1293 | Math.Max | candidate | OverloadResolutionFailure |
| 1294 | Math.Min | candidate | OverloadResolutionFailure |
| 1300 | DrawHeadCellScope | resolved | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHeadCellScope(DrawingContext, int, Geometry) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1172 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1256 | local-declaration | 지역 변수를 선언합니다: var centerX = akMarginX + headScope.PositionX - scannerReferenceOffsetX; |
| 1256 | variable-initializer | 변수의 초기값을 지정합니다: centerX = akMarginX + headScope.PositionX - scannerReferenceOffsetX |
| 1257 | local-declaration | 지역 변수를 선언합니다: var halfWidth = headScope.ScanFieldWidthX / 2.0; |
| 1257 | variable-initializer | 변수의 초기값을 지정합니다: halfWidth = headScope.ScanFieldWidthX / 2.0 |
| 1258 | local-declaration | 지역 변수를 선언합니다: var physicalLeft = frame.CanvasLeft + ((centerX - halfWidth) * scale); |
| 1258 | variable-initializer | 변수의 초기값을 지정합니다: physicalLeft = frame.CanvasLeft + ((centerX - halfWidth) * scale) |
| 1259 | local-declaration | 지역 변수를 선언합니다: var physicalRight = frame.CanvasLeft + ((centerX + halfWidth) * scale); |
| 1259 | variable-initializer | 변수의 초기값을 지정합니다: physicalRight = frame.CanvasLeft + ((centerX + halfWidth) * scale) |
| 1260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(physicalLeft) |
| 1260 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(physicalRight) |
| 1260 | if | 조건에 따라 분기합니다: if (!double.IsFinite(physicalLeft) &#124;&#124; !double.IsFinite(physicalRight) &#124;&#124; physicalRight <= physicalLeft) |
| 1263 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1266 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(frame.CanvasLeft, physicalLeft) |
| 1266 | local-declaration | 지역 변수를 선언합니다: var clippedLeft = Math.Max(frame.CanvasLeft, physicalLeft); |
| 1266 | variable-initializer | 변수의 초기값을 지정합니다: clippedLeft = Math.Max(frame.CanvasLeft, physicalLeft) |
| 1267 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(frame.CanvasLeft + frame.Width, physicalRight) |
| 1267 | local-declaration | 지역 변수를 선언합니다: var clippedRight = Math.Min(frame.CanvasLeft + frame.Width, physicalRight); |
| 1267 | variable-initializer | 변수의 초기값을 지정합니다: clippedRight = Math.Min(frame.CanvasLeft + frame.Width, physicalRight) |
| 1268 | if | 조건에 따라 분기합니다: if (clippedRight <= clippedLeft) |
| 1270 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1273 | if | 조건에 따라 분기합니다: if (targetCellNo <= 0) |
| 1275 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawHeadScope( context, headNo, new Rect(clippedLeft, frame.CanvasTop, clippedRight - clippedLeft, frame.Height)) |
| 1278 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect(clippedLeft, frame.CanvasTop, clippedRight - clippedLeft, frame.Height) |
| 1279 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1282 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: cellDisplays.TryGetValue(targetCellNo, out var display) |
| 1282 | if | 조건에 따라 분기합니다: if (!cellDisplays.TryGetValue(targetCellNo, out var display)) |
| 1284 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1287 | local-declaration | 지역 변수를 선언합니다: var actual = display.ActualBounds; |
| 1287 | variable-initializer | 변수의 초기값을 지정합니다: actual = display.ActualBounds |
| 1288 | if | 조건에 따라 분기합니다: if (actual.IsEmpty &#124;&#124; actual.Width <= 0.0 &#124;&#124; actual.Height <= 0.0) |
| 1290 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1293 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(physicalLeft, actual.Left) |
| 1293 | local-declaration | 지역 변수를 선언합니다: var overlapLeft = Math.Max(physicalLeft, actual.Left); |
| 1293 | variable-initializer | 변수의 초기값을 지정합니다: overlapLeft = Math.Max(physicalLeft, actual.Left) |
| 1294 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(physicalRight, actual.Right) |
| 1294 | local-declaration | 지역 변수를 선언합니다: var overlapRight = Math.Min(physicalRight, actual.Right); |
| 1294 | variable-initializer | 변수의 초기값을 지정합니다: overlapRight = Math.Min(physicalRight, actual.Right) |
| 1295 | if | 조건에 따라 분기합니다: if (overlapRight <= overlapLeft) |
| 1297 | return | 호출자에게 값 또는 제어를 반환합니다: return; |
| 1300 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawHeadCellScope(context, headNo, display.Boundary) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawPhysicalHeadScope"]
 N0["L1260 if"]
 M -->|포함| N0
 N1["L1268 if"]
 M -->|포함| N1
 N2["L1273 if"]
 M -->|포함| N2
 N3["L1282 if"]
 M -->|포함| N3
 N4["L1288 if"]
 M -->|포함| N4
 N5["L1295 if"]
 M -->|포함| N5
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryBuildRecipeCellBoundary` · L1303–1382

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1303–1382](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1303-L1382)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryBuildRecipeCellBoundary(Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION, double, int, int, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out StreamGeometry) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| definition | Drilling.Common.Recipe.ST_CELL_PATTERN_DEFINITION | None | False /  |
| pixelSize | double | None | False /  |
| pixelCountX | int | None | False /  |
| pixelCountY | int | None | False /  |
| frame | Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME | None | False /  |
| scale | double | None | False /  |
| geometry | StreamGeometry | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:319–334](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L319-L334) | TryBuildRecipeCellBoundary | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1320 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1322 | new StreamGeometry | unresolved | None |
| 1327 | Math.Cos | resolved | double System.Math.Cos(double) |
| 1328 | Math.Sin | resolved | double System.Math.Sin(double) |
| 1334 | new Point | unresolved | None |
| 1335 | new Point | unresolved | None |
| 1336 | new Point | unresolved | None |
| 1337 | new Point | unresolved | None |
| 1347 | TryProjectReviewPreviewPixel | candidate | OverloadResolutionFailure |
| 1366 | new StreamGeometry | unresolved | None |
| 1370 | new Point | unresolved | None |
| 1373 | new StreamGeometry | unresolved | None |
| 1374 | geometry.Open | unresolved | None |
| 1376 | context.BeginFigure | unresolved | None |
| 1377 | context.PolyLineTo | unresolved | None |
| 1377 | corners.Skip(1).ToArray | resolved | Point[] System.Collections.Generic.IEnumerable<Point>.ToArray<Point>() |
| 1377 | corners.Skip | resolved | System.Collections.Generic.IEnumerable<Point> System.Collections.Generic.IEnumerable<Point>.Skip<Point>(int) |
| 1380 | geometry.Freeze | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1320 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(pixelSize) |
| 1320 | if | 조건에 따라 분기합니다: if (pixelCountX <= 0 &#124;&#124; pixelCountY <= 0 &#124;&#124; !double.IsFinite(pixelSize) &#124;&#124; pixelSize <= 0.0) |
| 1322 | assignment | 값을 대상에 대입합니다: geometry = new StreamGeometry() |
| 1322 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new StreamGeometry() |
| 1323 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1326 | local-declaration | 지역 변수를 선언합니다: var radians = definition.RotationDegrees * Math.PI / 180.0; |
| 1326 | variable-initializer | 변수의 초기값을 지정합니다: radians = definition.RotationDegrees * Math.PI / 180.0 |
| 1327 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Cos(radians) |
| 1327 | local-declaration | 지역 변수를 선언합니다: var cos = Math.Cos(radians); |
| 1327 | variable-initializer | 변수의 초기값을 지정합니다: cos = Math.Cos(radians) |
| 1328 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Sin(radians) |
| 1328 | local-declaration | 지역 변수를 선언합니다: var sin = Math.Sin(radians); |
| 1328 | variable-initializer | 변수의 초기값을 지정합니다: sin = Math.Sin(radians) |
| 1329 | local-declaration | 지역 변수를 선언합니다: var halfPixel = pixelSize / 2.0; |
| 1329 | variable-initializer | 변수의 초기값을 지정합니다: halfPixel = pixelSize / 2.0 |
| 1330 | local-declaration | 지역 변수를 선언합니다: var localMaxX = ((pixelCountX - 1) * pixelSize) + halfPixel; |
| 1330 | variable-initializer | 변수의 초기값을 지정합니다: localMaxX = ((pixelCountX - 1) * pixelSize) + halfPixel |
| 1331 | local-declaration | 지역 변수를 선언합니다: var localMaxY = ((pixelCountY - 1) * pixelSize) + halfPixel; |
| 1331 | variable-initializer | 변수의 초기값을 지정합니다: localMaxY = ((pixelCountY - 1) * pixelSize) + halfPixel |
| 1332 | local-declaration | 지역 변수를 선언합니다: var localCorners = new[] { new Point(-halfPixel, -halfPixel), new Point(localMaxX, -halfPixel), new Point(localMaxX, localMaxY), new Point(-halfPixel, localMaxY) }; |
| 1332 | variable-initializer | 변수의 초기값을 지정합니다: localCorners = new[] { new Point(-halfPixel, -halfPixel), new Point(localMaxX, -halfPixel), new Point(localMaxX, localMaxY), new Point(-halfPixel, localMaxY) } |
| 1334 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(-halfPixel, -halfPixel) |
| 1335 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(localMaxX, -halfPixel) |
| 1336 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(localMaxX, localMaxY) |
| 1337 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(-halfPixel, localMaxY) |
| 1339 | local-declaration | 지역 변수를 선언합니다: var corners = new Point[localCorners.Length]; |
| 1339 | variable-initializer | 변수의 초기값을 지정합니다: corners = new Point[localCorners.Length] |
| 1340 | variable-initializer | 변수의 초기값을 지정합니다: index = 0 |
| 1340 | for | 초기화·조건·증감이 있는 반복입니다: for (var index = 0; index < localCorners.Length; index++) |
| 1342 | local-declaration | 지역 변수를 선언합니다: var local = localCorners[index]; |
| 1342 | variable-initializer | 변수의 초기값을 지정합니다: local = localCorners[index] |
| 1343 | local-declaration | 지역 변수를 선언합니다: var designX = definition.OriginX + definition.FirstTargetX + (local.X * cos) - (local.Y * sin); |
| 1343 | variable-initializer | 변수의 초기값을 지정합니다: designX = definition.OriginX + definition.FirstTargetX + (local.X * cos) - (local.Y * sin) |
| 1345 | local-declaration | 지역 변수를 선언합니다: var designY = definition.OriginY + definition.FirstTargetY + (local.X * sin) + (local.Y * cos); |
| 1345 | variable-initializer | 변수의 초기값을 지정합니다: designY = definition.OriginY + definition.FirstTargetY + (local.X * sin) + (local.Y * cos) |
| 1347 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryProjectReviewPreviewPixel( designX, designY, frame, scale, out var canvasX, out var canvasY, out _, out _ ) |
| 1347 | if | 조건에 따라 분기합니다: if (!TryProjectReviewPreviewPixel( designX, designY, frame, scale, out var canvasX, out var canvasY, out _, out _ )) |
| 1366 | assignment | 값을 대상에 대입합니다: geometry = new StreamGeometry() |
| 1366 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new StreamGeometry() |
| 1367 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1370 | assignment | 값을 대상에 대입합니다: corners[index] = new Point(canvasX, canvasY) |
| 1370 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(canvasX, canvasY) |
| 1373 | assignment | 값을 대상에 대입합니다: geometry = new StreamGeometry() |
| 1373 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new StreamGeometry() |
| 1374 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: geometry.Open() |
| 1374 | variable-initializer | 변수의 초기값을 지정합니다: context = geometry.Open() |
| 1374 | using | 자원 사용과 정리 범위를 지정합니다: using (var context = geometry.Open()) |
| 1376 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.BeginFigure(corners[0], false, true) |
| 1377 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.PolyLineTo(corners.Skip(1).ToArray(), true, false) |
| 1377 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: corners.Skip(1).ToArray() |
| 1377 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: corners.Skip(1) |
| 1380 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: geometry.Freeze() |
| 1381 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryBuildRecipeCellBoundary"]
 N0["L1320 if"]
 M -->|포함| N0
 N1["L1340 for"]
 M -->|포함| N1
 N2["L1347 if"]
 N1 -->|포함| N2
 N3["L1374 using"]
 M -->|포함| N3
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ShouldUseExpandedPreviewBounds` · L1384–1389

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1384–1389](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1384-L1389)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ShouldUseExpandedPreviewBounds(Rect, Rect) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| actualBounds | Rect | None | False /  |
| displayBounds | Rect | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1388 | Math.Abs | candidate | OverloadResolutionFailure |
| 1389 | Math.Abs | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1388 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(actualBounds.Width - displayBounds.Width) |
| 1389 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Abs(actualBounds.Height - displayBounds.Height) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ExpandPreviewBounds` · L1391–1406

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1391–1406](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1391-L1406)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Rect Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ExpandPreviewBounds(Rect, double, double, Rect) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Rect |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| bounds | Rect | None | False /  |
| minimumWidth | double | None | False /  |
| minimumHeight | double | None | False /  |
| limitBounds | Rect | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1397 | Math.Clamp | candidate | OverloadResolutionFailure |
| 1398 | Math.Clamp | candidate | OverloadResolutionFailure |
| 1399 | Math.Max | candidate | OverloadResolutionFailure |
| 1400 | Math.Max | candidate | OverloadResolutionFailure |
| 1401 | new Rect | unresolved | None |
| 1404 | Math.Min | candidate | OverloadResolutionFailure |
| 1404 | Math.Max | candidate | OverloadResolutionFailure |
| 1405 | Math.Min | candidate | OverloadResolutionFailure |
| 1405 | Math.Max | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1397 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(bounds.Left, limitBounds.Left, limitBounds.Right) |
| 1397 | local-declaration | 지역 변수를 선언합니다: var left = Math.Clamp(bounds.Left, limitBounds.Left, limitBounds.Right); |
| 1397 | variable-initializer | 변수의 초기값을 지정합니다: left = Math.Clamp(bounds.Left, limitBounds.Left, limitBounds.Right) |
| 1398 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(bounds.Top, limitBounds.Top, limitBounds.Bottom) |
| 1398 | local-declaration | 지역 변수를 선언합니다: var top = Math.Clamp(bounds.Top, limitBounds.Top, limitBounds.Bottom); |
| 1398 | variable-initializer | 변수의 초기값을 지정합니다: top = Math.Clamp(bounds.Top, limitBounds.Top, limitBounds.Bottom) |
| 1399 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(1.0, limitBounds.Right - left) |
| 1399 | local-declaration | 지역 변수를 선언합니다: var maximumWidth = Math.Max(1.0, limitBounds.Right - left); |
| 1399 | variable-initializer | 변수의 초기값을 지정합니다: maximumWidth = Math.Max(1.0, limitBounds.Right - left) |
| 1400 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(1.0, limitBounds.Bottom - top) |
| 1400 | local-declaration | 지역 변수를 선언합니다: var maximumHeight = Math.Max(1.0, limitBounds.Bottom - top); |
| 1400 | variable-initializer | 변수의 초기값을 지정합니다: maximumHeight = Math.Max(1.0, limitBounds.Bottom - top) |
| 1401 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Rect( left, top, Math.Min(Math.Max(bounds.Width, minimumWidth), maximumWidth), Math.Min(Math.Max(bounds.Height, minimumHeight), maximumHeight)) |
| 1401 | return | 호출자에게 값 또는 제어를 반환합니다: return new Rect( left, top, Math.Min(Math.Max(bounds.Width, minimumWidth), maximumWidth), Math.Min(Math.Max(bounds.Height, minimumHeight), maximumHeight)); |
| 1404 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(Math.Max(bounds.Width, minimumWidth), maximumWidth) |
| 1404 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(bounds.Width, minimumWidth) |
| 1405 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Min(Math.Max(bounds.Height, minimumHeight), maximumHeight) |
| 1405 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(bounds.Height, minimumHeight) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryProjectReviewPreviewPixel` · L1410–1458

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1410–1458](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1410-L1458)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryProjectReviewPreviewPixel(double, double, Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME, double, out double, out double, out int, out int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| designX | double | None | False /  |
| designY | double | None | False /  |
| frame | Drilling.UI.Menu.Menus.ST_GLASS_PREVIEW_FRAME | None | False /  |
| scale | double | None | False /  |
| canvasX | double | Out | False /  |
| canvasY | double | Out | False /  |
| pixelX | int | Out | False /  |
| pixelY | int | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:492–509](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L492-L509) | TryProjectReviewPreviewPixel | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1042–1059](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1042-L1059) | TryProjectReviewPreviewPixel | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1433 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1434 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1435 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1437 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1438 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1443 | Math.Round | resolved | double System.Math.Round(double) |
| 1444 | Math.Round | resolved | double System.Math.Round(double) |
| 1445 | double.IsFinite | resolved | bool double.IsFinite(double) |
| 1446 | double.IsFinite | resolved | bool double.IsFinite(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1429 | assignment | 값을 대상에 대입합니다: canvasX = frame.CanvasLeft + (designX * scale) |
| 1430 | assignment | 값을 대상에 대입합니다: canvasY = frame.CanvasTop + (designY * scale) |
| 1431 | assignment | 값을 대상에 대입합니다: pixelX = 0 |
| 1432 | assignment | 값을 대상에 대입합니다: pixelY = 0 |
| 1433 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(designX) |
| 1433 | if | 조건에 따라 분기합니다: if (!double.IsFinite(designX) &#124;&#124; !double.IsFinite(designY) &#124;&#124; !double.IsFinite(scale) &#124;&#124; scale <= 0.0 &#124;&#124; !double.IsFinite(canvasX) &#124;&#124; !double.IsFinite(canvasY)) |
| 1434 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(designY) |
| 1435 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(scale) |
| 1437 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(canvasX) |
| 1438 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(canvasY) |
| 1440 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1443 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(canvasX) |
| 1443 | local-declaration | 지역 변수를 선언합니다: var roundedX = Math.Round(canvasX); |
| 1443 | variable-initializer | 변수의 초기값을 지정합니다: roundedX = Math.Round(canvasX) |
| 1444 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(canvasY) |
| 1444 | local-declaration | 지역 변수를 선언합니다: var roundedY = Math.Round(canvasY); |
| 1444 | variable-initializer | 변수의 초기값을 지정합니다: roundedY = Math.Round(canvasY) |
| 1445 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(roundedX) |
| 1445 | if | 조건에 따라 분기합니다: if (!double.IsFinite(roundedX) &#124;&#124; !double.IsFinite(roundedY) &#124;&#124; roundedX < int.MinValue &#124;&#124; roundedX > int.MaxValue &#124;&#124; roundedY < int.MinValue &#124;&#124; roundedY > int.MaxValue) |
| 1446 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.IsFinite(roundedY) |
| 1452 | return | 호출자에게 값 또는 제어를 반환합니다: return false; |
| 1455 | assignment | 값을 대상에 대입합니다: pixelX = (int)roundedX |
| 1456 | assignment | 값을 대상에 대입합니다: pixelY = (int)roundedY |
| 1457 | return | 호출자에게 값 또는 제어를 반환합니다: return true; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["TryProjectReviewPreviewPixel"]
 N0["L1433 if"]
 M -->|포함| N0
 N1["L1445 if"]
 M -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateErrorPreview` · L1460–1467

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1460–1467](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1460-L1467)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateErrorPreview(string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| message | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:97–99](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L97-L99) | CreateErrorPreview | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:104–105](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L104-L105) | CreateErrorPreview | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:110–111](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L110-L111) | CreateErrorPreview | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:127–127](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L127-L127) | CreateErrorPreview | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:177–178](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L177-L178) | CreateErrorPreview | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:310–310](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L310-L310) | CreateErrorPreview | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:336–336](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L336-L336) | CreateErrorPreview | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:456–458](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L456-L458) | CreateErrorPreview | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1462 | new ST_REVIEW_GLASS_PREVIEW | resolved | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.ST_REVIEW_GLASS_PREVIEW(ImageSource?, ImageSource?, System.Collections.Generic.IReadOnlyList<Drilling.UI.Menu.Menus.ST_CELL_PREVIEW_LABEL>, string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1839 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1462 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new ST_REVIEW_GLASS_PREVIEW( null, null, [], $"Preview unavailable: {message}") |
| 1462 | return | 호출자에게 값 또는 제어를 반환합니다: return new ST_REVIEW_GLASS_PREVIEW( null, null, [], $"Preview unavailable: {message}"); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `AddCircle` · L1469–1502

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1469–1502](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1469-L1502)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.AddCircle(StreamGeometryContext, double, double, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | StreamGeometryContext | None | False /  |
| x | double | None | False /  |
| y | double | None | False /  |
| size | double | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1477 | context.BeginFigure | unresolved | None |
| 1477 | new Point | unresolved | None |
| 1478 | context.BezierTo | unresolved | None |
| 1479 | new Point | unresolved | None |
| 1480 | new Point | unresolved | None |
| 1481 | new Point | unresolved | None |
| 1484 | context.BezierTo | unresolved | None |
| 1485 | new Point | unresolved | None |
| 1486 | new Point | unresolved | None |
| 1487 | new Point | unresolved | None |
| 1490 | context.BezierTo | unresolved | None |
| 1491 | new Point | unresolved | None |
| 1492 | new Point | unresolved | None |
| 1493 | new Point | unresolved | None |
| 1496 | context.BezierTo | unresolved | None |
| 1497 | new Point | unresolved | None |
| 1498 | new Point | unresolved | None |
| 1499 | new Point | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1475 | local-declaration | 지역 변수를 선언합니다: var radius = size / 2.0; |
| 1475 | variable-initializer | 변수의 초기값을 지정합니다: radius = size / 2.0 |
| 1476 | local-declaration | 지역 변수를 선언합니다: var control = radius * 0.5522847498; |
| 1476 | variable-initializer | 변수의 초기값을 지정합니다: control = radius * 0.5522847498 |
| 1477 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.BeginFigure(new Point(x + radius, y), true, true) |
| 1477 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x + radius, y) |
| 1478 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.BezierTo( new Point(x + radius, y + control), new Point(x + control, y + radius), new Point(x, y + radius), true, false) |
| 1479 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x + radius, y + control) |
| 1480 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x + control, y + radius) |
| 1481 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x, y + radius) |
| 1484 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.BezierTo( new Point(x - control, y + radius), new Point(x - radius, y + control), new Point(x - radius, y), true, false) |
| 1485 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x - control, y + radius) |
| 1486 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x - radius, y + control) |
| 1487 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x - radius, y) |
| 1490 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.BezierTo( new Point(x - radius, y - control), new Point(x - control, y - radius), new Point(x, y - radius), true, false) |
| 1491 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x - radius, y - control) |
| 1492 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x - control, y - radius) |
| 1493 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x, y - radius) |
| 1496 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.BezierTo( new Point(x + control, y - radius), new Point(x + radius, y - control), new Point(x + radius, y), true, false) |
| 1497 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x + control, y - radius) |
| 1498 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x + radius, y - control) |
| 1499 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(x + radius, y) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawPreviewAxisIndicator` · L1504–1580

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1504–1580](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1504-L1580)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawPreviewAxisIndicator(DrawingContext, Rect, Rect, Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| previewRect | Rect | None | False /  |
| glassRect | Rect | None | False /  |
| axisIndicator | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1510 | new SolidColorBrush | unresolved | None |
| 1510 | Color.FromRgb | unresolved | None |
| 1511 | axisBrush.Freeze | unresolved | None |
| 1512 | new Pen | unresolved | None |
| 1517 | axisPen.Freeze | unresolved | None |
| 1519 | GetPreviewAxisOrigin | resolved | Point Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetPreviewAxisOrigin(Rect, Rect, Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1607 |
| 1521 | new Point | unresolved | None |
| 1522 | new Point | unresolved | None |
| 1524 | new Point | unresolved | None |
| 1525 | new Point | unresolved | None |
| 1527 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1529 | context.DrawLine | unresolved | None |
| 1530 | DrawHorizontalArrowHead | resolved | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHorizontalArrowHead(DrawingContext, Pen, Point, bool) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1672 |
| 1533 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1535 | context.DrawLine | unresolved | None |
| 1536 | DrawVerticalArrowHead | resolved | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawVerticalArrowHead(DrawingContext, Pen, Point, bool) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1683 |
| 1539 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1541 | DrawPreviewAxisText | candidate | OverloadResolutionFailure |
| 1547 | new Point | unresolved | None |
| 1548 | Math.Max | candidate | OverloadResolutionFailure |
| 1549 | Math.Max | candidate | OverloadResolutionFailure |
| 1555 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1557 | DrawPreviewAxisText | candidate | OverloadResolutionFailure |
| 1563 | new Point | unresolved | None |
| 1565 | Math.Max | candidate | OverloadResolutionFailure |
| 1571 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1573 | DrawPreviewAxisText | candidate | OverloadResolutionFailure |
| 1576 | GetPreviewAxisTitlePoint | resolved | Point Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetPreviewAxisTitlePoint(Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR, Point, Rect) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1582 |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1510 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new SolidColorBrush(Color.FromRgb(248, 250, 252)) |
| 1510 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Color.FromRgb(248, 250, 252) |
| 1510 | local-declaration | 지역 변수를 선언합니다: var axisBrush = new SolidColorBrush(Color.FromRgb(248, 250, 252)); |
| 1510 | variable-initializer | 변수의 초기값을 지정합니다: axisBrush = new SolidColorBrush(Color.FromRgb(248, 250, 252)) |
| 1511 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisBrush.Freeze() |
| 1512 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Pen(axisBrush, 2.0) { StartLineCap = PenLineCap.Round, EndLineCap = PenLineCap.Round } |
| 1512 | local-declaration | 지역 변수를 선언합니다: var axisPen = new Pen(axisBrush, 2.0) { StartLineCap = PenLineCap.Round, EndLineCap = PenLineCap.Round }; |
| 1512 | variable-initializer | 변수의 초기값을 지정합니다: axisPen = new Pen(axisBrush, 2.0) { StartLineCap = PenLineCap.Round, EndLineCap = PenLineCap.Round } |
| 1514 | assignment | 값을 대상에 대입합니다: StartLineCap = PenLineCap.Round |
| 1515 | assignment | 값을 대상에 대입합니다: EndLineCap = PenLineCap.Round |
| 1517 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisPen.Freeze() |
| 1519 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetPreviewAxisOrigin(previewRect, glassRect, axisIndicator) |
| 1519 | local-declaration | 지역 변수를 선언합니다: var origin = GetPreviewAxisOrigin(previewRect, glassRect, axisIndicator); |
| 1519 | variable-initializer | 변수의 초기값을 지정합니다: origin = GetPreviewAxisOrigin(previewRect, glassRect, axisIndicator) |
| 1520 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.XPositiveRight ? new Point(origin.X + 46.0, origin.Y) : new Point(origin.X - 46.0, origin.Y) |
| 1520 | local-declaration | 지역 변수를 선언합니다: var xEnd = axisIndicator.XPositiveRight ? new Point(origin.X + 46.0, origin.Y) : new Point(origin.X - 46.0, origin.Y); |
| 1520 | variable-initializer | 변수의 초기값을 지정합니다: xEnd = axisIndicator.XPositiveRight ? new Point(origin.X + 46.0, origin.Y) : new Point(origin.X - 46.0, origin.Y) |
| 1521 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(origin.X + 46.0, origin.Y) |
| 1522 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(origin.X - 46.0, origin.Y) |
| 1523 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.YPositiveDown ? new Point(origin.X, origin.Y + 42.0) : new Point(origin.X, origin.Y - 42.0) |
| 1523 | local-declaration | 지역 변수를 선언합니다: var yEnd = axisIndicator.YPositiveDown ? new Point(origin.X, origin.Y + 42.0) : new Point(origin.X, origin.Y - 42.0); |
| 1523 | variable-initializer | 변수의 초기값을 지정합니다: yEnd = axisIndicator.YPositiveDown ? new Point(origin.X, origin.Y + 42.0) : new Point(origin.X, origin.Y - 42.0) |
| 1524 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(origin.X, origin.Y + 42.0) |
| 1525 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(origin.X, origin.Y - 42.0) |
| 1527 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(axisIndicator.XLabel) |
| 1527 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(axisIndicator.XLabel)) |
| 1529 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawLine(axisPen, origin, xEnd) |
| 1530 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawHorizontalArrowHead(context, axisPen, xEnd, axisIndicator.XPositiveRight) |
| 1533 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(axisIndicator.YLabel) |
| 1533 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(axisIndicator.YLabel)) |
| 1535 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawLine(axisPen, origin, yEnd) |
| 1536 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawVerticalArrowHead(context, axisPen, yEnd, axisIndicator.YPositiveDown) |
| 1539 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(axisIndicator.XLabel) |
| 1539 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(axisIndicator.XLabel)) |
| 1541 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawPreviewAxisText( context, axisIndicator.XLabel, new Point( axisIndicator.XPositiveRight ? xEnd.X + 4.0 : Math.Max(2.0, xEnd.X - 24.0), Math.Max(2.0, xEnd.Y - 10.0)), axisBrush ) |
| 1547 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point( axisIndicator.XPositiveRight ? xEnd.X + 4.0 : Math.Max(2.0, xEnd.X - 24.0), Math.Max(2.0, xEnd.Y - 10.0)) |
| 1548 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2.0, xEnd.X - 24.0) |
| 1548 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.XPositiveRight ? xEnd.X + 4.0 : Math.Max(2.0, xEnd.X - 24.0) |
| 1549 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2.0, xEnd.Y - 10.0) |
| 1555 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(axisIndicator.YLabel) |
| 1555 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(axisIndicator.YLabel)) |
| 1557 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawPreviewAxisText( context, axisIndicator.YLabel, new Point( yEnd.X + 4.0, axisIndicator.YPositiveDown ? yEnd.Y - 4.0 : Math.Max(2.0, yEnd.Y - 10.0)), axisBrush ) |
| 1563 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point( yEnd.X + 4.0, axisIndicator.YPositiveDown ? yEnd.Y - 4.0 : Math.Max(2.0, yEnd.Y - 10.0)) |
| 1565 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(2.0, yEnd.Y - 10.0) |
| 1565 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.YPositiveDown ? yEnd.Y - 4.0 : Math.Max(2.0, yEnd.Y - 10.0) |
| 1571 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(axisIndicator.Title) |
| 1571 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(axisIndicator.Title)) |
| 1573 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: DrawPreviewAxisText( context, axisIndicator.Title, GetPreviewAxisTitlePoint(axisIndicator, origin, previewRect), axisBrush, 11.0) |
| 1576 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: GetPreviewAxisTitlePoint(axisIndicator, origin, previewRect) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["DrawPreviewAxisIndicator"]
 N0["L1527 if"]
 M -->|포함| N0
 N1["L1533 if"]
 M -->|포함| N1
 N2["L1539 if"]
 M -->|포함| N2
 N3["L1555 if"]
 M -->|포함| N3
 N4["L1571 if"]
 M -->|포함| N4
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetPreviewAxisTitlePoint` · L1582–1605

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1582–1605](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1582-L1605)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Point Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetPreviewAxisTitlePoint(Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR, Point, Rect) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Point |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| axisIndicator | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR | None | False /  |
| origin | Point | None | False /  |
| previewRect | Rect | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1576–1576](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1576-L1576) | GetPreviewAxisTitlePoint | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1587 | axisIndicator.Anchor.ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 1602 | new Point | unresolved | None |
| 1603 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |
| 1604 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1587 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisIndicator.Anchor.ToUpperInvariant() |
| 1587 | local-declaration | 지역 변수를 선언합니다: var anchor = axisIndicator.Anchor.ToUpperInvariant(); |
| 1587 | variable-initializer | 변수의 초기값을 지정합니다: anchor = axisIndicator.Anchor.ToUpperInvariant() |
| 1588 | local-declaration | 지역 변수를 선언합니다: var x = origin.X - 18.0; |
| 1588 | variable-initializer | 변수의 초기값을 지정합니다: x = origin.X - 18.0 |
| 1589 | local-declaration | 지역 변수를 선언합니다: var y = origin.Y - 24.0; |
| 1589 | variable-initializer | 변수의 초기값을 지정합니다: y = origin.Y - 24.0 |
| 1591 | if | 조건에 따라 분기합니다: if (anchor == "BOTTOM_LEFT") |
| 1593 | assignment | 값을 대상에 대입합니다: x = origin.X + 4.0 |
| 1594 | assignment | 값을 대상에 대입합니다: y = origin.Y + 12.0 |
| 1596 | else | 앞 조건이 거짓인 경로입니다: else |
| 1596 | if | 조건에 따라 분기합니다: if (anchor == "BOTTOM_RIGHT") |
| 1598 | assignment | 값을 대상에 대입합니다: x = origin.X - 92.0 |
| 1599 | assignment | 값을 대상에 대입합니다: y = origin.Y + 12.0 |
| 1602 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point( ClampPreviewAxisCoordinate(x, previewRect.Left + 4.0, previewRect.Right - 112.0), ClampPreviewAxisCoordinate(y, previewRect.Top + 4.0, previewRect.Bottom - 16.0)) |
| 1602 | return | 호출자에게 값 또는 제어를 반환합니다: return new Point( ClampPreviewAxisCoordinate(x, previewRect.Left + 4.0, previewRect.Right - 112.0), ClampPreviewAxisCoordinate(y, previewRect.Top + 4.0, previewRect.Bottom - 16.0)); |
| 1603 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(x, previewRect.Left + 4.0, previewRect.Right - 112.0) |
| 1604 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(y, previewRect.Top + 4.0, previewRect.Bottom - 16.0) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetPreviewAxisTitlePoint"]
 N0["L1591 if"]
 M -->|포함| N0
 N1["L1596 else"]
 N0 -->|포함| N1
 N2["L1596 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetPreviewAxisOrigin` · L1607–1661

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1607–1661](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1607-L1661)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Point Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetPreviewAxisOrigin(Rect, Rect, Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Point |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| previewRect | Rect | None | False /  |
| glassRect | Rect | None | False /  |
| axisIndicator | Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_AXIS_INDICATOR | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1519–1519](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1519-L1519) | GetPreviewAxisOrigin | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1612 | axisIndicator.Anchor.ToUpperInvariant | resolved | string string.ToUpperInvariant() |
| 1621 | new Point | unresolved | None |
| 1622 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |
| 1623 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |
| 1634 | new Point | unresolved | None |
| 1635 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |
| 1636 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |
| 1647 | new Point | unresolved | None |
| 1648 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |
| 1649 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |
| 1658 | new Point | unresolved | None |
| 1659 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |
| 1660 | ClampPreviewAxisCoordinate | candidate | OverloadResolutionFailure |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1612 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: axisIndicator.Anchor.ToUpperInvariant() |
| 1612 | local-declaration | 지역 변수를 선언합니다: var anchor = axisIndicator.Anchor.ToUpperInvariant(); |
| 1612 | variable-initializer | 변수의 초기값을 지정합니다: anchor = axisIndicator.Anchor.ToUpperInvariant() |
| 1613 | if | 조건에 따라 분기합니다: if (anchor == "TOP_RIGHT") |
| 1615 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.XPositiveRight ? glassRect.Right - 54.0 : glassRect.Right + 14.0 |
| 1615 | local-declaration | 지역 변수를 선언합니다: var x = axisIndicator.XPositiveRight ? glassRect.Right - 54.0 : glassRect.Right + 14.0; |
| 1615 | variable-initializer | 변수의 초기값을 지정합니다: x = axisIndicator.XPositiveRight ? glassRect.Right - 54.0 : glassRect.Right + 14.0 |
| 1618 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.YPositiveDown ? glassRect.Top - 42.0 : glassRect.Top - 8.0 |
| 1618 | local-declaration | 지역 변수를 선언합니다: var y = axisIndicator.YPositiveDown ? glassRect.Top - 42.0 : glassRect.Top - 8.0; |
| 1618 | variable-initializer | 변수의 초기값을 지정합니다: y = axisIndicator.YPositiveDown ? glassRect.Top - 42.0 : glassRect.Top - 8.0 |
| 1621 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point( ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0), ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0)) |
| 1621 | return | 호출자에게 값 또는 제어를 반환합니다: return new Point( ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0), ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0)); |
| 1622 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0) |
| 1623 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0) |
| 1626 | if | 조건에 따라 분기합니다: if (anchor == "BOTTOM_LEFT") |
| 1628 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.XPositiveRight ? glassRect.Left - 30.0 : glassRect.Left + 54.0 |
| 1628 | local-declaration | 지역 변수를 선언합니다: var x = axisIndicator.XPositiveRight ? glassRect.Left - 30.0 : glassRect.Left + 54.0; |
| 1628 | variable-initializer | 변수의 초기값을 지정합니다: x = axisIndicator.XPositiveRight ? glassRect.Left - 30.0 : glassRect.Left + 54.0 |
| 1631 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.YPositiveDown ? glassRect.Bottom + 14.0 : glassRect.Bottom + 42.0 |
| 1631 | local-declaration | 지역 변수를 선언합니다: var y = axisIndicator.YPositiveDown ? glassRect.Bottom + 14.0 : glassRect.Bottom + 42.0; |
| 1631 | variable-initializer | 변수의 초기값을 지정합니다: y = axisIndicator.YPositiveDown ? glassRect.Bottom + 14.0 : glassRect.Bottom + 42.0 |
| 1634 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point( ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0), ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0)) |
| 1634 | return | 호출자에게 값 또는 제어를 반환합니다: return new Point( ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0), ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0)); |
| 1635 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0) |
| 1636 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0) |
| 1639 | if | 조건에 따라 분기합니다: if (anchor == "BOTTOM_RIGHT") |
| 1641 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.XPositiveRight ? glassRect.Right - 54.0 : glassRect.Right + 14.0 |
| 1641 | local-declaration | 지역 변수를 선언합니다: var x = axisIndicator.XPositiveRight ? glassRect.Right - 54.0 : glassRect.Right + 14.0; |
| 1641 | variable-initializer | 변수의 초기값을 지정합니다: x = axisIndicator.XPositiveRight ? glassRect.Right - 54.0 : glassRect.Right + 14.0 |
| 1644 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.YPositiveDown ? glassRect.Bottom + 14.0 : glassRect.Bottom + 42.0 |
| 1644 | local-declaration | 지역 변수를 선언합니다: var y = axisIndicator.YPositiveDown ? glassRect.Bottom + 14.0 : glassRect.Bottom + 42.0; |
| 1644 | variable-initializer | 변수의 초기값을 지정합니다: y = axisIndicator.YPositiveDown ? glassRect.Bottom + 14.0 : glassRect.Bottom + 42.0 |
| 1647 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point( ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0), ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0)) |
| 1647 | return | 호출자에게 값 또는 제어를 반환합니다: return new Point( ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0), ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0)); |
| 1648 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(x, previewRect.Left + 8.0, previewRect.Right - 8.0) |
| 1649 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(y, previewRect.Top + 8.0, previewRect.Bottom - 8.0) |
| 1652 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.XPositiveRight ? glassRect.Left - 30.0 : glassRect.Left + 54.0 |
| 1652 | local-declaration | 지역 변수를 선언합니다: var topLeftX = axisIndicator.XPositiveRight ? glassRect.Left - 30.0 : glassRect.Left + 54.0; |
| 1652 | variable-initializer | 변수의 초기값을 지정합니다: topLeftX = axisIndicator.XPositiveRight ? glassRect.Left - 30.0 : glassRect.Left + 54.0 |
| 1655 | conditional-expression | 조건에 따라 결과식을 선택합니다: axisIndicator.YPositiveDown ? glassRect.Top - 42.0 : glassRect.Top - 8.0 |
| 1655 | local-declaration | 지역 변수를 선언합니다: var topLeftY = axisIndicator.YPositiveDown ? glassRect.Top - 42.0 : glassRect.Top - 8.0; |
| 1655 | variable-initializer | 변수의 초기값을 지정합니다: topLeftY = axisIndicator.YPositiveDown ? glassRect.Top - 42.0 : glassRect.Top - 8.0 |
| 1658 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point( ClampPreviewAxisCoordinate(topLeftX, previewRect.Left + 8.0, previewRect.Right - 8.0), ClampPreviewAxisCoordinate(topLeftY, previewRect.Top + 8.0, previewRect.Bottom - 8.0)) |
| 1658 | return | 호출자에게 값 또는 제어를 반환합니다: return new Point( ClampPreviewAxisCoordinate(topLeftX, previewRect.Left + 8.0, previewRect.Right - 8.0), ClampPreviewAxisCoordinate(topLeftY, previewRect.Top + 8.0, previewRect.Bottom - 8.0)); |
| 1659 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(topLeftX, previewRect.Left + 8.0, previewRect.Right - 8.0) |
| 1660 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ClampPreviewAxisCoordinate(topLeftY, previewRect.Top + 8.0, previewRect.Bottom - 8.0) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["GetPreviewAxisOrigin"]
 N0["L1613 if"]
 M -->|포함| N0
 N1["L1626 if"]
 M -->|포함| N1
 N2["L1639 if"]
 M -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ClampPreviewAxisCoordinate` · L1663–1670

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1663–1670](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1663-L1670)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ClampPreviewAxisCoordinate(double, double, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | double | None | False /  |
| min | double | None | False /  |
| max | double | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1668 | Math.Max | resolved | double System.Math.Max(double, double) |
| 1669 | Math.Clamp | resolved | double System.Math.Clamp(double, double, double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1668 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(min, max) |
| 1668 | local-declaration | 지역 변수를 선언합니다: var safeMax = Math.Max(min, max); |
| 1668 | variable-initializer | 변수의 초기값을 지정합니다: safeMax = Math.Max(min, max) |
| 1669 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Clamp(value, min, safeMax) |
| 1669 | return | 호출자에게 값 또는 제어를 반환합니다: return Math.Clamp(value, min, safeMax); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawHorizontalArrowHead` · L1672–1681

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1672–1681](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1672-L1681)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawHorizontalArrowHead(DrawingContext, Pen, Point, bool) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| axisPen | Pen | None | False /  |
| end | Point | None | False /  |
| positiveRight | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1530–1530](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1530-L1530) | DrawHorizontalArrowHead | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1679 | context.DrawLine | unresolved | None |
| 1679 | new Point | unresolved | None |
| 1680 | context.DrawLine | unresolved | None |
| 1680 | new Point | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1678 | conditional-expression | 조건에 따라 결과식을 선택합니다: positiveRight ? 1.0 : -1.0 |
| 1678 | local-declaration | 지역 변수를 선언합니다: var direction = positiveRight ? 1.0 : -1.0; |
| 1678 | variable-initializer | 변수의 초기값을 지정합니다: direction = positiveRight ? 1.0 : -1.0 |
| 1679 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawLine(axisPen, new Point(end.X - (direction * 8.0), end.Y - 4.0), end) |
| 1679 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(end.X - (direction * 8.0), end.Y - 4.0) |
| 1680 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawLine(axisPen, new Point(end.X - (direction * 8.0), end.Y + 4.0), end) |
| 1680 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(end.X - (direction * 8.0), end.Y + 4.0) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawVerticalArrowHead` · L1683–1692

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1683–1692](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1683-L1692)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawVerticalArrowHead(DrawingContext, Pen, Point, bool) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| axisPen | Pen | None | False /  |
| end | Point | None | False /  |
| positiveDown | bool | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1536–1536](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1536-L1536) | DrawVerticalArrowHead | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1690 | context.DrawLine | unresolved | None |
| 1690 | new Point | unresolved | None |
| 1691 | context.DrawLine | unresolved | None |
| 1691 | new Point | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1689 | conditional-expression | 조건에 따라 결과식을 선택합니다: positiveDown ? 1.0 : -1.0 |
| 1689 | local-declaration | 지역 변수를 선언합니다: var direction = positiveDown ? 1.0 : -1.0; |
| 1689 | variable-initializer | 변수의 초기값을 지정합니다: direction = positiveDown ? 1.0 : -1.0 |
| 1690 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawLine(axisPen, new Point(end.X - 4.0, end.Y - (direction * 8.0)), end) |
| 1690 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(end.X - 4.0, end.Y - (direction * 8.0)) |
| 1691 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawLine(axisPen, new Point(end.X + 4.0, end.Y - (direction * 8.0)), end) |
| 1691 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Point(end.X + 4.0, end.Y - (direction * 8.0)) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `DrawPreviewAxisText` · L1694–1719

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1694–1719](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1694-L1719)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.DrawPreviewAxisText(DrawingContext, string, Point, Brush, double) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| context | DrawingContext | None | False /  |
| text | string | None | False /  |
| point | Point | None | False /  |
| brush | Brush | None | False /  |
| fontSize | double | None | True / 13 |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1701 | new FormattedText | unresolved | None |
| 1709 | new Typeface | unresolved | None |
| 1718 | context.DrawText | unresolved | None |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1701 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new FormattedText( text, CultureInfo.InvariantCulture, FlowDirection.LeftToRight, new Typeface("Segoe UI Semibold"), fontSize, brush, 1.0 ) |
| 1701 | local-declaration | 지역 변수를 선언합니다: var label = new FormattedText( text, CultureInfo.InvariantCulture, FlowDirection.LeftToRight, new Typeface("Segoe UI Semibold"), fontSize, brush, 1.0 ); |
| 1701 | variable-initializer | 변수의 초기값을 지정합니다: label = new FormattedText( text, CultureInfo.InvariantCulture, FlowDirection.LeftToRight, new Typeface("Segoe UI Semibold"), fontSize, brush, 1.0 ) |
| 1709 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Typeface("Segoe UI Semibold") |
| 1718 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: context.DrawText(label, point) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadInt` · L1721–1735

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1721–1735](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1721-L1735)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadInt(Drilling.Common.Managers.ST_RECIPE_DEFINITION, int, params string[]) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| defaultValue | int | None | False /  |
| keys | string[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:141–141](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L141-L141) | ReadInt | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1726 | ReadText | resolved | string Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadText(Drilling.Common.Managers.ST_RECIPE_DEFINITION, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1767 |
| 1727 | int.TryParse | resolved | bool int.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out int) |
| 1732 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |
| 1733 | Math.Round | resolved | double System.Math.Round(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1726 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadText(recipe, keys) |
| 1726 | local-declaration | 지역 변수를 선언합니다: var text = ReadText(recipe, keys); |
| 1726 | variable-initializer | 변수의 초기값을 지정합니다: text = ReadText(recipe, keys) |
| 1727 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: int.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value) |
| 1727 | if | 조건에 따라 분기합니다: if (int.TryParse(text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var value)) |
| 1729 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |
| 1732 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var doubleValue) |
| 1732 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var doubleValue) ? (int)Math.Round(doubleValue) : defaultValue |
| 1732 | return | 호출자에게 값 또는 제어를 반환합니다: return double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var doubleValue) ? (int)Math.Round(doubleValue) : defaultValue; |
| 1733 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Round(doubleValue) |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadInt"]
 N0["L1727 if"]
 M -->|포함| N0
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateParameterMap` · L1737–1742

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1737–1742](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1737-L1742)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.IReadOnlyDictionary<string, string> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateParameterMap(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.IReadOnlyDictionary<string, string> |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:142–142](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L142-L142) | CreateParameterMap | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1739 | recipe.Parameters .GroupBy(parameter => parameter.Key, StringComparer.OrdinalIgnoreCase) .ToDictionary | resolved | System.Collections.Generic.Dictionary<string, string> System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>>.ToDictionary<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string, string>(System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string>, System.Func<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1739 | recipe.Parameters .GroupBy | resolved | System.Collections.Generic.IEnumerable<System.Linq.IGrouping<string, Drilling.Common.Managers.ST_RECIPE_PARAMETER>> System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.GroupBy<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, string>, System.Collections.Generic.IEqualityComparer<string>?) |
| 1741 | group.Last | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.Last<Drilling.Common.Managers.ST_RECIPE_PARAMETER>() |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1739 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters .GroupBy(parameter => parameter.Key, StringComparer.OrdinalIgnoreCase) |
| 1739 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters .GroupBy(parameter => parameter.Key, StringComparer.OrdinalIgnoreCase) .ToDictionary(group => group.Key, group => group.Last().Value, StringComparer.OrdinalIgnoreCase) |
| 1739 | return | 호출자에게 값 또는 제어를 반환합니다: return recipe.Parameters .GroupBy(parameter => parameter.Key, StringComparer.OrdinalIgnoreCase) .ToDictionary(group => group.Key, group => group.Last().Value, StringComparer.OrdinalIgnoreCase); |
| 1741 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: group.Last() |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadDouble` · L1744–1754

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1744–1754](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1744-L1754)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, double, params string[]) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| defaultValue | double | None | False /  |
| keys | string[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:82–82](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L82-L82) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:83–83](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L83-L83) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:84–84](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L84-L84) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:85–85](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L85-L85) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:90–90](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L90-L90) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:91–91](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L91-L91) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:140–140](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L140-L140) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:269–272](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L269-L272) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:273–276](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L273-L276) | ReadDouble | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:277–280](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L277-L280) | ReadDouble | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1749 | ReadText | resolved | string Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadText(Drilling.Common.Managers.ST_RECIPE_DEFINITION, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1767 |
| 1751 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1749 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadText(recipe, keys) |
| 1749 | local-declaration | 지역 변수를 선언합니다: var text = ReadText(recipe, keys); |
| 1749 | variable-initializer | 변수의 초기값을 지정합니다: text = ReadText(recipe, keys) |
| 1751 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 1751 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) ? value : defaultValue |
| 1751 | return | 호출자에게 값 또는 제어를 반환합니다: return double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) ? value : defaultValue; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadNullableDouble` · L1756–1765

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1756–1765](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1756-L1765)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | double? Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadNullableDouble(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | double? |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| key | string | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1760 | ReadText | resolved | string Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadText(Drilling.Common.Managers.ST_RECIPE_DEFINITION, params string[]) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1767 |
| 1762 | double.TryParse | resolved | bool double.TryParse(string?, System.Globalization.NumberStyles, System.IFormatProvider?, out double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1760 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: ReadText(recipe, key) |
| 1760 | local-declaration | 지역 변수를 선언합니다: var text = ReadText(recipe, key); |
| 1760 | variable-initializer | 변수의 초기값을 지정합니다: text = ReadText(recipe, key) |
| 1762 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) |
| 1762 | conditional-expression | 조건에 따라 결과식을 선택합니다: double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) ? value : null |
| 1762 | return | 호출자에게 값 또는 제어를 반환합니다: return double.TryParse(text, NumberStyles.Float, CultureInfo.InvariantCulture, out var value) ? value : null; |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `ReadText` · L1767–1781

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1767–1781](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1767-L1781)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | string Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.ReadText(Drilling.Common.Managers.ST_RECIPE_DEFINITION, params string[]) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | string |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| keys | string[] | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1726–1726](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1726-L1726) | ReadText | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1749–1749](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1749-L1749) | ReadText | False |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1760–1760](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1760-L1760) | ReadText | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1773 | TryReadParameterText | resolved | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryReadParameterText(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, out string) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1783 |
| 1774 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1771 | foreach | 컬렉션 요소를 순회합니다: foreach (var key in keys) |
| 1773 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: TryReadParameterText(recipe, key, out var value) |
| 1773 | if | 조건에 따라 분기합니다: if (TryReadParameterText(recipe, key, out var value) && !string.IsNullOrWhiteSpace(value)) |
| 1774 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(value) |
| 1776 | return | 호출자에게 값 또는 제어를 반환합니다: return value; |
| 1780 | return | 호출자에게 값 또는 제어를 반환합니다: return ""; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["ReadText"]
 N0["L1771 foreach"]
 M -->|포함| N0
 N1["L1773 if"]
 N0 -->|포함| N1
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `TryReadParameterText` · L1783–1792

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1783–1792](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1783-L1792)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | bool Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.TryReadParameterText(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string, out string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | bool |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| key | string | None | False /  |
| value | string | Out | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1773–1773](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1773-L1773) | TryReadParameterText | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1788 | RecipeParameterIndexes.GetValue | resolved | System.Collections.Generic.Dictionary<string, string> System.Runtime.CompilerServices.ConditionalWeakTable<Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.Dictionary<string, string>>.GetValue(Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Runtime.CompilerServices.ConditionalWeakTable<Drilling.Common.Managers.ST_RECIPE_DEFINITION, System.Collections.Generic.Dictionary<string, string>>.CreateValueCallback) |
| 1790 | CreateRecipeParameterIndex | resolved | System.Collections.Generic.Dictionary<string, string> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateRecipeParameterIndex(Drilling.Common.Managers.ST_RECIPE_DEFINITION) · Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1794 |
| 1791 | parameters.TryGetValue | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryGetValue(string, out string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1788 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: RecipeParameterIndexes.GetValue( recipe, static definition => CreateRecipeParameterIndex(definition)) |
| 1788 | local-declaration | 지역 변수를 선언합니다: var parameters = RecipeParameterIndexes.GetValue( recipe, static definition => CreateRecipeParameterIndex(definition)); |
| 1788 | variable-initializer | 변수의 초기값을 지정합니다: parameters = RecipeParameterIndexes.GetValue( recipe, static definition => CreateRecipeParameterIndex(definition)) |
| 1790 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: CreateRecipeParameterIndex(definition) |
| 1791 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.TryGetValue(key, out value!) |
| 1791 | return | 호출자에게 값 또는 제어를 반환합니다: return parameters.TryGetValue(key, out value!); |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `CreateRecipeParameterIndex` · L1794–1813

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1794–1813](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1794-L1813)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | System.Collections.Generic.Dictionary<string, string> Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.CreateRecipeParameterIndex(Drilling.Common.Managers.ST_RECIPE_DEFINITION) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | System.Collections.Generic.Dictionary<string, string> |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1790–1790](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1790-L1790) | CreateRecipeParameterIndex | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1797 | new Dictionary<string, string> | resolved | System.Collections.Generic.Dictionary<string, string>.Dictionary(System.Collections.Generic.IEqualityComparer<string>?) |
| 1800 | .Trim | resolved | string string.Trim() |
| 1801 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1803 | parameters.TryAdd | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryAdd(string, string) |
| 1806 | string.IsNullOrWhiteSpace | resolved | bool string.IsNullOrWhiteSpace(string?) |
| 1808 | parameters.TryAdd | resolved | bool System.Collections.Generic.Dictionary<string, string>.TryAdd(string, string) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1797 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 1797 | local-declaration | 지역 변수를 선언합니다: var parameters = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase); |
| 1797 | variable-initializer | 변수의 초기값을 지정합니다: parameters = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) |
| 1798 | foreach | 컬렉션 요소를 순회합니다: foreach (var parameter in recipe.Parameters) |
| 1800 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: .Trim() |
| 1800 | local-declaration | 지역 변수를 선언합니다: var value = parameter.Value?.Trim() ?? ""; |
| 1800 | variable-initializer | 변수의 초기값을 지정합니다: value = parameter.Value?.Trim() ?? "" |
| 1801 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(parameter.Key) |
| 1801 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(parameter.Key)) |
| 1803 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.TryAdd(parameter.Key, value) |
| 1806 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: string.IsNullOrWhiteSpace(parameter.Name) |
| 1806 | if | 조건에 따라 분기합니다: if (!string.IsNullOrWhiteSpace(parameter.Name)) |
| 1808 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: parameters.TryAdd(parameter.Name, value) |
| 1812 | return | 호출자에게 값 또는 제어를 반환합니다: return parameters; |

제어 구문의 포함 구조(실제 실행 순서/CFG가 아닌 구문 탐색 그림):

```mermaid
flowchart TD
 M["CreateRecipeParameterIndex"]
 N0["L1798 foreach"]
 M -->|포함| N0
 N1["L1801 if"]
 N0 -->|포함| N1
 N2["L1806 if"]
 N0 -->|포함| N2
```

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `FindParameter` · L1815–1822

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1815–1822](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1815-L1822)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Drilling.Common.Managers.ST_RECIPE_PARAMETER? Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.FindParameter(Drilling.Common.Managers.ST_RECIPE_DEFINITION, string) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | Drilling.Common.Managers.ST_RECIPE_PARAMETER? |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| recipe | Drilling.Common.Managers.ST_RECIPE_DEFINITION | None | False /  |
| key | string | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:114–114](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L114-L114) | FindParameter | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1819 | recipe.Parameters.FirstOrDefault | resolved | Drilling.Common.Managers.ST_RECIPE_PARAMETER? System.Collections.Generic.IEnumerable<Drilling.Common.Managers.ST_RECIPE_PARAMETER>.FirstOrDefault<Drilling.Common.Managers.ST_RECIPE_PARAMETER>(System.Func<Drilling.Common.Managers.ST_RECIPE_PARAMETER, bool>) |
| 1820 | item.Key.Equals | resolved | bool string.Equals(string?, System.StringComparison) |
| 1821 | item.Name.Equals | resolved | bool string.Equals(string?, System.StringComparison) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1819 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: recipe.Parameters.FirstOrDefault(item => item.Key.Equals(key, StringComparison.OrdinalIgnoreCase) &#124;&#124; item.Name.Equals(key, StringComparison.OrdinalIgnoreCase)) |
| 1819 | return | 호출자에게 값 또는 제어를 반환합니다: return recipe.Parameters.FirstOrDefault(item => item.Key.Equals(key, StringComparison.OrdinalIgnoreCase) &#124;&#124; item.Name.Equals(key, StringComparison.OrdinalIgnoreCase)); |
| 1820 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Key.Equals(key, StringComparison.OrdinalIgnoreCase) |
| 1821 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: item.Name.Equals(key, StringComparison.OrdinalIgnoreCase) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetParameterMinimum` · L1824–1829

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1824–1829](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1824-L1829)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetParameterMinimum(Drilling.Common.Managers.ST_RECIPE_PARAMETER?) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER? | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:118–118](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L118-L118) | GetParameterMinimum | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1827 | Math.Max | resolved | int System.Math.Max(int, int) |
| 1827 | Math.Ceiling | resolved | double System.Math.Ceiling(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1826 | conditional-expression | 조건에 따라 결과식을 선택합니다: parameter is not null && parameter.Max > parameter.Min ? Math.Max(CCellPatternCalculator.MinCellCount, (int)Math.Ceiling(parameter.Min)) : CCellPatternCalculator.MinCellCount |
| 1826 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter is not null && parameter.Max > parameter.Min ? Math.Max(CCellPatternCalculator.MinCellCount, (int)Math.Ceiling(parameter.Min)) : CCellPatternCalculator.MinCellCount; |
| 1827 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Max(CCellPatternCalculator.MinCellCount, (int)Math.Ceiling(parameter.Min)) |
| 1827 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Ceiling(parameter.Min) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### MethodDeclaration `GetParameterMaximum` · L1831–1836

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1831–1836](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1831-L1836)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | int? Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder.GetParameterMaximum(Drilling.Common.Managers.ST_RECIPE_PARAMETER?, int) |
| 접근/수식자 | Private / private, static |
| 반환/값 타입 | int? |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.CReviewGlassPreviewBuilder |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| parameter | Drilling.Common.Managers.ST_RECIPE_PARAMETER? | None | False /  |
| minimum | int | None | False /  |

정적 호출자로 확인된 위치:

| 호출 파일/행 | 호출 표현식 | 런타임 분기 가능 |
| --- | --- | --- |
| [Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:119–119](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L119-L119) | GetParameterMaximum | False |

호출하는 대상과 해석 범위:

| 원본 행 | 표현식 | 분석 상태 | 대상/소스 위치 |
| --- | --- | --- | --- |
| 1834 | Math.Floor | resolved | double System.Math.Floor(double) |

본문의 실제 연산·분기·예외·반환 순서(원문 위치 순):

| 원본 행 | 종류 | 주석 해설 |
| --- | --- | --- |
| 1833 | conditional-expression | 조건에 따라 결과식을 선택합니다: parameter is not null && parameter.Max >= minimum ? (int)Math.Floor(parameter.Max) : null |
| 1833 | return | 호출자에게 값 또는 제어를 반환합니다: return parameter is not null && parameter.Max >= minimum ? (int)Math.Floor(parameter.Max) : null; |
| 1834 | call | 함수·델리게이트 또는 객체 생성자를 호출합니다: Math.Floor(parameter.Max) |

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `GlassBounds` · L1845–1845

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1845–1845](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1845-L1845)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Rect Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.GlassBounds |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Rect |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_GlassBounds` · L1845–1845

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1845–1845](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1845-L1845)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Rect Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.GlassBounds.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Rect |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_GlassBounds` · L1845–1845

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1845–1845](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1845-L1845)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.GlassBounds.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Rect | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### PropertyDeclaration `CanvasSize` · L1846–1846

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1846–1846](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1846-L1846)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Size Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.CanvasSize |
| 접근/수식자 | Public / public |
| 반환/값 타입 | Size |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### GetAccessorDeclaration `get_CanvasSize` · L1846–1846

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1846–1846](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1846-L1846)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | Size Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.CanvasSize.get |
| 접근/수식자 | Public / get |
| 반환/값 타입 | Size |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

### InitAccessorDeclaration `set_CanvasSize` · L1846–1846

[Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs:1846–1846](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs#L1846-L1846)

| 항목 | 실제 추출 값 |
| --- | --- |
| 서명 | void Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW.CanvasSize.init |
| 접근/수식자 | Public / init |
| 반환/값 타입 | void |
| 소속 타입 | NamedType:Drilling.UI.Menu.Menus.ST_REVIEW_GLASS_PREVIEW |

입력 계약:

| 이름 | 타입 | 전달 | 선택/기본값 |
| --- | --- | --- | --- |
| value | Size | None | False /  |

현재 부분 분석에서 직접 연결된 호출자는 없습니다. XAML/이벤트/인터페이스·델리게이트·외부 진입을 추가 확인해야 하며, 미사용으로 판정한 것이 아닙니다.

변경 전 점검: 입력/반환 타입, 위 호출자, 예외/취소 경로, 공유 상태와 저장·전송 소비자를 함께 확인합니다. 값의 단위나 물리 방향을 이름만으로 확정하지 않습니다.

## 구문·바인딩 한계

전체 WPF/벤더 SDK/프로젝트별 빌드 조건을 로드한 정식 빌드가 아닙니다. `resolved`는 이 부분 컴파일에서의 심볼 연결이며 virtual/interface/delegate/이벤트/Reflection/XAML의 실제 런타임 구현을 확정하지 않습니다. `candidate`와 `unresolved`는 후속 확인 대상으로 남깁니다.

## 원문 전체 주석 해설본

[원본 모든 행과 행별 해설 보기](../../../../annotated/Drilling.UI/Menu/Menus/CReviewGlassPreviewBuilder.cs.annotated.txt)

원본을 빠뜨리거나 임의로 줄이지 않았습니다. `L000001 |` 표시는 원본 행 번호, `// 해설`은 별도 설명입니다. 실행용 소스가 아닌 문서입니다.

## 수정·재검증 체크

- 원본 Commit과 현재 작업 파일 SHA가 같은지 먼저 확인합니다. 다르면 이 문서를 과거 버전 자료로 취급합니다.
- 선언·직접 호출·이벤트/인터페이스 경계·설정 소비를 함께 확인합니다. 정적 연결의 빈 곳을 정상 경로로 추정하지 않습니다.
- 저장 형식/단위/식별자·재시도·취소·예외·롤백에 영향을 주는 변경은 상세 해설장과 호출자를 다시 검토합니다.
- 도구의 구문 추출과 별도 정적 추적 해설, 실제 빌드·시뮬레이션·실장비 검증 결과를 분리합니다.
