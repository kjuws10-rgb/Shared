# Review Offset: 누적 보정·좌표계 태그·중복 방지·원복

![오프라인 흐름 그림](diagrams/review-04.svg)


원본: `kjuws10-rgb/A3Drilling` · `master` · `dfa5920e6301d9ec4b0eab1452ae59521aafc986`

이 장의 **코드 확인**은 해당 Commit의 실제 함수 본문을 정적으로 추적한 사실입니다. **해설**은 그 구조를 이해하기 위한 설명이며, **검증 과제**는 앞으로 실행할 시험입니다. 실장비의 부호·광학 상태·통신 타이밍·정밀도가 검증되었다는 뜻은 아닙니다. 예시 숫자는 설명용 가상값입니다.

## 1. 측정 결과와 적용된 Offset을 분리해서 이해하기

Review 측정 결과는 “지금 어떤 오차가 관찰되었는가”이고, Review Offset은 “다음 가공 좌표에 어떤 값을 더할 것인가”입니다. AUTO Fine은 측정·검증·저장을 별도 단계로 실행합니다. 저장 성공 시 outcome에도 **다음 Glass에 적용**한다고 남깁니다. 결과 CSV를 열었다고 보정값이 자동으로 적용된 것은 아닙니다. [CAutoFineReviewCoordinator.cs:29–76](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L29-L76) [CAutoFineReviewCoordinator.cs:165–168](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L165-L168)

```mermaid
flowchart TD
 R[완료된 측정 결과] --> V[Recipe와 검사점 식별자 검증]
 V --> G[전점 OK 확인]
 G --> I[같은 Cell과 X열의 Y방향 보간]
 I --> C[기존 Offset을 DESIGN으로 환산]
 C --> A[기존값과 이번 delta 합산]
 A --> N[새 Offset CSV와 적용이력 저장]
 N --> P[다음 가공 준비에서 최신값 병합]
 N --> B[Rollback으로 최신본 보관 이동]
 B --> O[이전 활성본 복원]
```

## 2. AUTO 저장은 어디서 차단되는가

`Save`는 semaphore를 얻은 뒤 `_saved`를 다시 확인합니다. 이는 동시에 들어온 저장 호출 중 먼저 기다리던 호출이 중복 파일을 만들지 못하게 하는 경계입니다. `SaveCore`는 Prepared/Result 존재, Completed 상태, 결과 파일 저장 성공, 점 식별자 정합성, 전체 OK를 다시 검사합니다. 측정 완료 때 한 번 검사했다는 이유로 저장 검증을 생략하지 않습니다. [CAutoFineReviewCoordinator.cs:79–122](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L79-L122)

ZeroLine Follow-up은 검사 이력만 남기고 현재 Review Offset을 load하지도 않는 분기가 있습니다. 따라서 “모든 Review 완료는 Offset을 갱신한다”는 설명은 틀립니다. 일반 AUTO Fine과 진단용 후속 검사는 목적이 다릅니다. [CAutoFineReviewCoordinator.cs:103–121](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L103-L121)

## 3. FINE 보간의 실제 차원

`CalculateFineOffsets`는 측정점이 비어 있거나 NG, 미완료, 중복 ShotKey, 비유한 좌표를 포함하면 전체 적용을 거부합니다. 측정점을 `(CellNo, Round(DesignX,6))`로 묶고 각 열에서 DesignY 순으로 anchor를 만듭니다. 대상 Shot도 같은 키로 묶습니다. **Cell을 넘어서 이웃 Head의 오차를 섞는 2차원 표면 보간이 아닙니다.** [CReviewManager.cs:3537–3576](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L3537-L3576)

| 경우 | 코드 동작 | 의미 |
|---|---|---|
| 한 열에 anchor 1개 | 해당 값을 반환 | 그 열 전체에 동일 delta를 준다. |
| anchor 여러 개 | Y를 정규화하고 Lagrange basis 계산 | 최대 7개 anchor라는 주석이 있다. |
| 대상 Y가 anchor Y와 사실상 같음 | 해당 anchor 값을 직접 반환 | 불필요한 수치 오차를 줄인다. |
| 같은 열에 같은 Y anchor 중복 | 예외 | 보간 분모가 0이 되는 모호한 입력을 차단한다. |
| 제외 때문에 anchor가 없는 열 | 그 열을 건너뜀 | 기존 저장값을 보존하려는 주석이 있다. |

표는 실제 함수 분기를 풀어쓴 것입니다. anchor 바깥 Y에 대한 계산식도 같은 다항식이므로, “언제나 보간 범위 안에서만 평가한다”는 보장은 함수 자체에 없습니다. 외삽의 물리적 적절성과 overshoot 제한은 별도 검토가 필요합니다. [CReviewManager.cs:3551–3602](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L3551-L3602)

## 4. 보정 방향과 누적식

AUTO는 raw 측정 오차를 Plan의 VisionFlip으로 변환해 delta를 구합니다. 기존 파일의 각 Shot 값을 `CReviewOffsetData.ToDesign`으로 변환한 뒤 **기존 design 값 + 이번 delta**를 계산하고 `IsDesignCoordinate=true`로 저장합니다. 기존값을 이번 delta로 단순 대체하지 않으며, Legacy scanner 좌표를 design이라고 가정하지 않습니다. [CAutoFineReviewCoordinator.cs:123–151](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L123-L151)

```text
currentDesign = ToDesign(parameters, HeadNo, oldX, oldY, old.IsDesignCoordinate)
finalDesignX  = Round(currentDesign.X + delta.X)
finalDesignY  = Round(currentDesign.Y + delta.Y)
savedSpace    = DESIGN
```

UI 수동 적용도 `Current / Delta / Final`을 구성하고 같은 누적식을 사용합니다. 적용 대상은 현재 Recipe에서 Head가 배정되어 있고 `Use`인 Shot입니다. ALL_SHOT/ONE_SHOT, ROUGH, FINE/AUTO는 각각 별도 delta builder를 사용합니다. FINE/AUTO 결과에 NG가 있으면 전체 적용을 거부합니다. [CMenuCorrection.ReviewData.Offset.cs:250–337](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L250-L337) [CMenuCorrection.ReviewData.Offset.cs:433–458](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L433-L458)

**해설:** “오차가 +X이므로 Offset에도 무조건 −X를 입력한다”는 구두 규칙으로 이 함수를 바꾸면 안 됩니다. raw 오차가 Target−Hole인지, VisionFlip이 어느 방향으로 변환하는지, 저장 좌표가 DESIGN인지 SCANNER인지, 최종 Scanner builder가 어떻게 적용하는지까지 연결해 시험해야 합니다. [CReviewManager.cs:2297–2307](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L2297-L2307) [CReviewManager.cs:3607–3633](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L3607-L3633) [CShotCoordinatePlanBuilder.cs:139–155](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L139-L155)

## 5. CSV 저장 구조와 Legacy 호환

| 열 | 자료 의미 | 파서 검증 |
|---|---|---|
| `CELLID` | 1 이상 Cell 식별자 | 정수, 유효 범위 |
| `SHOTID` | Cell 내 Shot 이름 | trim·대문자 및 구분자 정규화, 중복 금지 |
| `REVIEWOFFSETX` | 보정 X | 유한 double |
| `REVIEWOFFSETY` | 보정 Y | 유한 double |
| `COORDINATE_SPACE` | DESIGN 또는 SCANNER | 빈 값은 Legacy SCANNER, 그 외 알 수 없는 값은 오류 |

저장 파일은 Recipe별 `recipeId_reviewoffset` 폴더 아래 timestamp `_reviewoffset.csv`로 만들어집니다. 현재 loader는 required header와 실제 CSV 행 번호를 포함해 오류를 보고합니다. 새 값을 적용하기 전 **전체 행을 먼저 검증**한 다음 기존 parameter key를 제거합니다. 입력 중 한 행이 잘못되었다고 정상 기존값을 먼저 지우지 않도록 한 순서입니다. [CReviewOffsetFile.cs:636–709](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L636-L709) [CShotCoordinatePlanBuilder.cs:1140–1193](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L1140-L1193)

Parameter 병합 시에는 `CELL{cell}_{shot}_REVIEW_OFFSET_X/Y/SPACE`로 저장됩니다. 과거 공통 `REVIEW_OFFSET_X/Y`도 제거합니다. DESIGN이면 최종 Scanner 좌표를 만드는 시점에 Head와 Stage 방향으로 변환하고, SCANNER면 이미 변환된 값으로 취급합니다. [CShotCoordinatePlanBuilder.cs:1114–1138](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L1114-L1138) [CShotCoordinatePlanBuilder.cs:1167–1193](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L1167-L1193)

## 6. 새 파일과 적용 이력을 함께 남기는 순서

`SaveNewCore`는 검증된 행을 임시 파일에 쓴 후 고유 timestamp 파일명으로 이동합니다. 파일명이 겹치면 millisecond를 증가시킵니다. 기존 활성 파일을 덮어쓰는 저장 방식이 아닙니다. 임시 파일은 finally에서 정리합니다. [CReviewOffsetFile.cs:214–257](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L214-L257)

`SaveNewFromSource`는 source result 파일의 identity를 만들고 해당 시점의 history에서 기존 적용을 찾습니다. duplicate가 있고 allowDuplicate가 false면 예외입니다. 새 Offset을 만든 뒤 history append가 실패하면 방금 만든 Offset 파일을 제거하려고 합니다. 이 제거마저 실패하면 원래 오류와 cleanup 오류를 함께 올립니다. 파일 생성만 성공한 상태를 조용히 정상 처리하지 않으려는 보상 동작입니다. [CReviewOffsetFile.cs:145–211](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L145-L211)

### 중복 방지의 범위를 과장하지 않기

이 history 경로는 `appliedAt.ToLocalTime()`의 년/월/일 하위 파일입니다. source identity는 application root 내부라면 상대 경로, 외부라면 full path를 `/` 구분자로 정규화한 값입니다. **content hash 기반의 영구 전역 중복 제거가 아닙니다.** 날짜가 바뀌거나 같은 내용을 다른 경로로 복사한 경우도 포함해 정책을 시험해야 합니다. [CReviewOffsetFile.cs:565–609](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L565-L609)

| 보호 수단 | 막는 문제 | 단독으로 입증할 수 없는 것 |
|---|---|---|
| coordinator `_saved`와 gate | 같은 coordinator 저장의 동시·반복 실행 | 앱 재시작 이후 모든 중복 |
| source application history | 현재 조회 history 내 같은 source identity | 다른 날짜·경로·내용 복제의 완전 차단 |
| Recipe ID 검사 | 다른 Recipe Offset과 합산 | Recipe 내용 revision 전체 동일성 |
| UI 최신 파일 재확인 | dialog를 연 사이 최신 Offset이 바뀜 | 다른 프로세스와 모든 filesystem race 해소 |

UI는 확인 대화상자 후 latest 파일을 다시 읽고 `SameOffsetSource`를 비교한 뒤 저장합니다. 사용자에게 보인 Current와 실제 저장 대상이 달라지는 것을 막으려는 경계입니다. [CMenuCorrection.ReviewData.Offset.cs:74–114](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L74-L114)

## 7. Rollback은 무엇을 원복하는가

`RollbackLatest`는 현재 활성 파일 목록을 읽고 `expectedLatestFilePath`가 최신 파일과 다르면 중단합니다. 그 후 최신 파일을 `Rollback` 하위 보관 경로로 이동하고 이전 활성 파일을 현재값으로 삼습니다. 제거한 Offset 파일에 해당하는 적용 history도 조정합니다. 이 동작은 **최신 활성 snapshot 한 단계 원복**이며 임의 날짜의 모든 Recipe/Setting/측정 결과를 함께 되돌리는 전체 프로젝트 복원은 아닙니다. [CReviewOffsetFile.cs:260–348](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L260-L348)

원복 중 history 쓰기나 현재값 확인이 실패하면 이동한 파일과 history를 되살리는 cleanup 경로가 있습니다. 실제 실패 주입 테스트에서는 파일 이동 실패, history 쓰기 실패, 원복 cleanup 실패를 따로 검증해야 합니다. source 코드에 복구 분기가 있다는 사실만으로 파일시스템 장애에 대한 원복 성공을 보장하지 않습니다. [CReviewOffsetFile.cs:307–374](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L307-L374)

## 8. 다음 가공에서 값이 사용되는 경계

`CStationProcess.MergeLatestReviewOffsets`는 가공 준비 parameter를 구성하면서 해당 Recipe의 latest Offset을 load하고 파일 경로·저장 시각을 준비 상태에 보관한 뒤 parameter에 병합합니다. 최종 `CShotCoordinatePlanBuilder`는 이 값을 `ToScanner`로 옮겨 다른 offset 성분과 합칩니다. 따라서 지금 저장한 Offset이 이미 진행 중인 Glass의 명령을 소급 변경한다고 설명해서는 안 됩니다. [CStationProcess.cs:1543–1561](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Station/CStationProcess.cs#L1543-L1561) [CShotCoordinatePlanBuilder.cs:139–155](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L139-L155)

## 9. 개발자용 검증 과제

| 시험 | 준비 | 기대 결과 |
|---|---|---|
| 전체 NG 차단 | 한 anchor만 NG | 새 Offset 파일 없음, 기존 활성값 유지 |
| 한 anchor | 같은 Cell/X 열 여러 Y 대상 | 같은 delta를 받음 |
| 없는 anchor 열 | 해당 열 측정점 전부 제외 | 기존값 보존, 임의 0 보간 금지 |
| Legacy 변환 | SCANNER 이전 파일 + 비정상 Head flip 조합 | design으로 역변환 후 누적·재변환이 일관됨 |
| CSV 한 행 NaN | 나머지 행 정상 | 전체 적용 거부, 기존 parameter 제거 전 실패 |
| 동시 Save | 동일 coordinator 두 호출 | 정상 snapshot 한 번만 저장 |
| 날짜/경로 중복 | 같은 source를 다음 날짜 또는 다른 경로로 지정 | 현재 정책의 한계를 정확히 확인·명세화 |
| rollback stale UI | dialog 후 다른 snapshot 추가 | expectedLatest 불일치로 중단 |
| history failure | append 쓰기만 실패 주입 | 새 Offset cleanup 및 오류 확인 |
| rollback 후 재적용 | 최신본 보관 이동 뒤 같은 source 지정 | history 변경과 duplicate 정책이 일관됨 |

위 항목은 권장 자동시험이며 본 문서 작성 시 실행한 장비 시험 결과가 아닙니다.

## 10. 결과 COPY, 보정값 복사, 보정율을 구별한다

11.13.0의 COPY MODE가 직접 복제하는 것은 **Review 결과 X/Y 또는 JUDGE**입니다. 이미 적용된 ReviewOffset snapshot이나 Head Default를 다른 Shot에 복사하는 함수가 아닙니다. COPY X/Y·COPY JUDGE·COPY ALL은 메모리상의 편집 후보를 채우고, RESULT SAVE가 별도 _EDIT_ 파일을 만듭니다. OFFSET APPLY는 여전히 독립 동작입니다. [CMenuCorrection.ReviewData.Edit.cs:302–343](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs#L302-L343) [CMenuCorrection.ReviewData.Edit.cs:369–405](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs#L369-L405) [CReviewResultFile.cs:157–183](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L157-L183)

| 동작 | 바뀌는 자료 | 실측/가공에 대한 의미 |
|---|---|---|
| COPY X/Y | 대상 결과의 편집 X/Y 후보 | 대상 Shot을 새로 측정하지 않음 |
| COPY JUDGE / ALL | 대상 편집 판정, 또는 좌표+판정 | 복사된 OK는 새 측정 합격 증거가 아님 |
| RESULT SAVE | 새 EDIT Revision | 현재 Offset/Recipe/Product를 함께 적용하지 않음 |
| OFFSET APPLY | Current+Delta인 새 ReviewOffset와 적용 이력 | 다음 가공 준비에 사용하는 별도 저장 |
| REVIEW_OFFSET_SCALE / ALIGN_OFFSET_SCALE | 현재 가공 기여값에 곱하는 비율 | 원래 저장 Offset을 축소 저장하거나 반복 곱하지 않음 |
| Default APPLY | Recipe의 Head별 기본값 | Review 결과 수정·ReviewOffset 원복과 다른 수명 |

보정 레벨을 비율(%)이라는 뜻으로 쓸 때, ReadOffsetScale은 키가 없으면100%, 있으면0 이상 정수만 허용하고 percent/100을 반환합니다. 소스에 100% 상한은 없습니다. 두 비율은 각각 Align/Review의 Scanner 변환 후 기여값에 한 번 곱합니다. Default·FirstBeam·RecipeOffset에는 이 곱셈이 적용되지 않습니다. 0%도 저장 이력 삭제가 아니라 이번 가공 기여를0으로 만드는 선택입니다. [CShotCoordinatePlanBuilder.cs:31–35](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L31-L35) [CShotCoordinatePlanBuilder.cs:139–155](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L139-L155) [CShotCoordinatePlanBuilder.cs:203–209](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L203-L209)

### EDIT 결과가 Offset으로 들어가는지는 결과 형식에 따라 다르다

MeasuredRows는 RESULT_SOURCE가 한 행이라도 있으면 MEASURED만 사용합니다. EDITED는 direct·ROUGH·FINE/AUTO 계산에서 제외됩니다. 반면 RESULT_SOURCE가 전혀 없는 파일은 OK/NG 판정 행으로 fallback합니다. 새 ONE SHOT writer도 그 열을 만들지 않으므로, 그 파일을 EDIT해 OK로 저장하면 수정값이 fallback 적용 후보가 될 수 있습니다. “편집 결과는 언제나 보정에 적용된다” 또는 “언제나 적용에서 제외된다”는 설명은 둘 다 현재 코드와 맞지 않습니다. [CMenuCorrection.ReviewData.Offset.cs:375–405](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L375-L405) [CMenuCorrection.ReviewData.Offset.cs:433–466](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L433-L466) [CReviewResultFile.cs:396–400](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L396-L400) [CReviewResultFile.cs:1027–1036](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L1027-L1036)

FINE에서 EDITED anchor가 빠지면 남은 MEASURED anchor만으로 열별 보간합니다. NG를 EDITED/OK로 바꿨다고 그 행이 새 실측 anchor가 되는 것은 아니지만, 기존 NG가 선택 집합에서 빠져 나머지 anchor만으로 전체 적용이 진행될 수 있는지도 확인해야 합니다. 이 소비자 정책은 새 Edit UI에서 명확히 보여 주지 않으므로 형식별 시험이 필요합니다. 모든 anchor를 EDITED로 만들면 적용 가능한 delta가 없어 거부될 수 있습니다. [CMenuCorrection.ReviewData.Offset.cs:284–287](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L284-L287) [CMenuCorrection.ReviewData.Offset.cs:433–466](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L433-L466)

### 중복 적용과 원복 경계

EDIT/REINSP 파일은 BASE와 다른 경로입니다. source identity가 경로 기준인 history에서 새 Revision을 과거 BASE와 같은 측정 계보로 묶어 중복 차단한다는 근거는 없습니다. 먼저 BASE를 적용한 뒤 부분 EDIT 또는 REINSP Revision을 다시 적용하면, 아직 MEASURED로 남은 다른 행의 delta가 재누적되는 경로를 시험해야 합니다. 파일명에 Revision이 있다고 기준 OffsetRevision·부모 결과 해시·적용 소비 ID가 자동 기록되는 것은 아닙니다. [CReviewResultFile.cs:228–267](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L228-L267) [CReviewOffsetFile.cs:565–609](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L565-L609)

검증할 조합은 (1) BASE 적용 후 일부 EDIT, (2) BASE 적용 후 일부 REINSP, (3) 다음 날짜 같은 경로, (4) 다른 경로 복제, (5) Offset Rollback 후 같은 결과 재적용입니다. 기대 관찰값은 실제 후보 키·Current/Delta/Final·새 snapshot·history source identity입니다. ReviewOffset Rollback은 결과 EDIT/REINSP 파일이나 판정을 되돌리지 않으며, Default의 실패 쌍 복원과도 다릅니다.


## 11. 화면 색·산포도 축·보정율·품질 판정의 차이

REVIEW DATA의 산포도 색은 Judge 문자열을 사용합니다. OK/PASS는 초록, NG/FAIL/ERROR는 빨강, 나머지는 회색입니다. 현재 선택점은 노란 테두리로 강조하고 EDIT 선택은 주황색 원으로 표시합니다. 반면 ShotMap의 초록색은 IsResult(결과가 있는 Shot)의 뜻이며 OK판정과 같은 값이 아닙니다. 측정 NG가 있는 Shot도 결과존재를 뜻하는 초록 점으로 그려질 수 있어 지도색만으로 품질을 판정하면 안 됩니다. [CMenuCorrection.ReviewData.Display.cs:744–774](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L744-L774) [CMenuCorrection.ReviewData.Display.cs:887–910](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L887-L910) [CMenuCorrection.ReviewData.Display.cs:1128–1185](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L1128-L1185)

산포도 MIN/MAX/UNIT는 mm 단위의 그리기 범위이며, 각축 동일 범위 안 점만 표시합니다. 판정용 max(abs(X),abs(Y)) 등급이나 sqrt(X²+Y²) 반경 기준으로 JUDGE를 재평가하는 기능이 아닙니다. ApplyScatterPlotScale은 view model 필드와 표시문구를 바꾸고 RefreshScatterPlot을 부르며 Recipe/Setting 저장을 호출하지 않습니다. 다른 결과 LOAD에서도 이 범위 필드를 재설정하는 코드는 보이지 않지만 앱 재시작 후 영구 보존되는 설정으로 주장할 근거는 없습니다. [CMenuCorrection.ReviewData.Display.cs:672–715](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L672-L715) [CMenuCorrection.ReviewData.Display.cs:880–883](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L880-L883)

실제 품질 판정은 Vision found와 Flip 후 각축 tolerance 비교입니다. 보정율(%) 변경, 산포도 확대/축소, 점 선택색은 실측값·JUDGE·보정적격 상태를 자동 변경하지 않습니다. 본 dfa C#/XAML 검토에서는 별도의 Review Level1..N 임계색 설정·µm 등급 저장 기능을 확인하지 못했습니다. 그 요구가 있다면 단위·각축/최댓값/반경·경계 포함규칙·허용범위·저장수명부터 별도 사양으로 확정해야 합니다. [CReviewManager.cs:2235–2267](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L2235-L2267)
