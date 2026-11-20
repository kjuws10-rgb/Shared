# 가공·Review 영향 분석

## 공통 기준 이동의 영향

AK Margin은 단순 메뉴 이동이 아닙니다. 공통 기준이 달라지면 설계 Shot·AK/DK 배치·저장 보정의 기준 적합성을 다시 봐야 합니다. 같은 Margin으로 설계점과 변환을 함께 재생성하면 이동분이 상쇄될 수 있으므로 물리 이동을 무조건 예측하면 안 됩니다. 순수 회귀34개에서 Margin X+1/Y+2mm는20,740개 설계 Shot에 그대로 반영됐지만 현재 조건의 Head배정·Scanner/Encoder 명령·AK상대 Review 입력은 불변이었고 StageX 참조 필드는1mm 변했습니다. 예전 결과 좌표와 새 Setting을 섞는 경로는 별도 검증 대상입니다. 실물 이동을 수행한 검사가 아닙니다.

## 결과 적용과 정밀도

익일 같은 Source 경로를 다시 적용하는 기존 빈틈은 전체 날짜 이력 검사로 보강됐습니다. RETAINED를 파일 적용에서 버리던 차이와 Fine 원측정의 중간 F3 반올림도 바뀌었습니다. 별도 순수/파일 회귀23개를 실행했습니다. 같은 내용 다른 경로, 다른 writer 인스턴스의 외부 이력 갱신, 수동 EDIT의 품질/출처 정책까지 모두 해결된 것으로 보지 않습니다.

## 운전·초기화·정비 경계

AUTO INIT은 실행 소유권을 정리하고 PC 출력과 Action 상태를 맞춥니다. 상대 Stage 요청이 남아 있으면 감시 재시작 후 다시 동작할 수 있어 Home 복귀와 같은 기능으로 설명하면 안 됩니다. PM은 이력 저장 성공과 연결한 UI 잠금 흐름이며 표시 수명과 실제 수명 차단을 구분해야 합니다. 새 Log 호출의 구현 파일이 원본 Git에 포함되는지도 확인해야 합니다.

## 독립 소스 추적 상세

## A3 Ver11.19.0 구조·저장·실행 경계 분석

기준은 `A3Drilling/master`의 `28764c91d521777b8ee068dd7aaf2d3902ce9fe2`이며 비교 기준은 `96e22cd027c84bf302b23f2949b98985d7f301bb`입니다. 11.18/11.19 두 Commit의 실제 diff와 관련 호출자·소비자를 읽었습니다. 원본 수정, WPF 설비 앱 정식 빌드, 장비·vendor SDK·DLL·AeroScript 실행/로드·역컴파일은 하지 않았습니다. 운영 측정 CSV 원문이나 인증값을 복제하지 않았습니다.

가장 큰 구조 변화는 AK Margin X/Y가 Recipe별 값에서 공통 Setting의 필수값으로 옮겨졌다는 점입니다. CSettingFile은 구형 정의에 두 built-in 항목을 보충하고 값이 없으면 코드 기본값을 사용합니다. 옛 Recipe를 읽어 승인 공통값으로 자동 이관하는 경로는 찾지 못했습니다. 최신 Recipe 로더는 현재 정의의 항목과 CELL 확장만 살리므로 옛 AK 행이 남은 CSV도 일반 로드 모델에서 제외되고 다음 일반 저장 목록에서 빠집니다. Recipe 화면은 편집기 대신 공통값을 표시합니다. [공통 파싱](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Managers/CAlignKeyMarginSettings.cs#L6-L51), [built-in 정의](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CSettingFile.cs#L272-L287), [Recipe 로드](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L481-L529), [Recipe 저장](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/JHMI/CJhmiRecipeFile.cs#L148-L206).

누락·음수·비유한 Margin은 예외이며 정상 파일 저장에는 정의의 범위 검사도 적용됩니다. Station은 Recipe 위 Option/Motor를 합성하고, Review·ZeroDefence·Fine·미리보기는 공통 Margin을 명시적으로 받습니다. Distortion은 Prepare에서 Margin·StageY·Recipe를 동결합니다. 다만 저장 직전 동시변경 비교는 Recipe.Parameters뿐이므로 공통 Setting 변경까지 감지하지는 않습니다. 기존 Align/Review Offset과 과거 결과를 재사용할 때 당시 좌표기준이 같은지는 별도 검증 대상입니다. 이는 높은 검증 우선순위이며 실기 불량을 재현했다는 뜻이 아닙니다. [동결](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Correction/CAlignInterpolation.cs#L276-L308), [Recipe 비교](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Managers/CRecipeManager.cs#L94-L109).

Margin 변경을 모든 실제 목표 이동으로 해석하면 과장입니다. Review 식에는 `Design−Margin`이 있고 같은 공통값으로 설계점도 다시 만들면 이동분이 상쇄됩니다. Root의 별도 원문 복사 순수 회귀 34/34는 Margin 이동 후 설계점 변화와 AK 상대거리·Head 배정·Scanner·EncoderWait 불변을 해당 입력 조건에서 확인했습니다. 서로 다른 시점의 설계점·현재 Margin·과거 보정이 섞이는 문제는 이 상쇄 시험과 다른 경계입니다. [목표식](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewManager.cs#L177-L196).

`DISTORTION_PAIR0/1/2_Y`는 다시 표시·편집되는 AK1 기준 설계 Y입니다. 실제 촬영 StageY가 아니며 현재 보간·이동 계산에는 사용되지 않습니다. 실제 Key 기하는 Motor DK StageY와 공통 Margin을 사용하고 Margin은 반폭/반높이로 clamp합니다. 일반 Shot 원점은 같은 clamp를 하지 않으므로 작은 Glass·큰 Margin의 적합성을 따로 확인해야 합니다. [정의](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Config/JHMI_RCP.csv#L32-L36), [실제 기하](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Correction/CAlignInterpolation.cs#L181-L214).

새 AUTO INIT는 Worker 정지 확인→공통 cleanup→PC Handshake OFF readback→MachiningComplete 강제0→소유권 없음 확인→Action WAIT→AUTO 감시 재시작입니다. Stage 입력 초기화·Home·물리 비상정지를 대신하지 않습니다. UI는 상대 Stage ON이 남으면 재시작 후 새 요청을 자동 처리할 수 있음을 경고합니다. 15초는 앞의 정지 확인 루프 기준이고 이후 모든 통신을 합친 전체 제한시간으로 표현하지 않습니다. [INIT 구현](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Station/CStationProcess.cs#L3912-L3958), [사용자 확인·재시작](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/CRootView.cs#L758-L799).

PM은 Manual·진행 동작 없음·사유·시작 이력 성공 후 잠그고, 비밀번호와 완료 이력 성공 후 풉니다. ManualMotionSession의 IsActive는 gate 대기 요청과 미확인 JOG도 집계합니다. PM 수명 표는 Talon 캐시 ThgHour와 공통 제한값, 선택 Recipe 보호윈도우 매수를 보여 줄 뿐 수명 초과 자동 차단을 추가하지 않습니다. snapshot.Value가 남은 STALE/ERROR에서 캐시 숫자가 계속 보일 수 있다는 정적 최신성 후보가 있습니다. PM 활성 잠금/세션은 메모리 필드이며 열린 세션의 재시작 복원은 확인하지 못했습니다. [진입](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/CRootView.cs#L1272-L1390), [해제](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/CRootView.cs#L1445-L1499), [수명 표](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuPm.cs#L93-L140).

현재 tracked C#에는 CLogManager와 ST_PM_HISTORY_ENTRY 선언을 찾지 못했고 Common csproj에도 외부 로그 참조가 없습니다. 새 PM 로그 메서드 호출 순서는 확인했지만 실제 저장 형식·원자성·재시작 복원·정식 빌드 성공은 미확인입니다. 추출기의 타입/호출 처리 성공과 부분 진단 수치는 설비 앱 빌드 결과가 아닙니다. 이 미확인 의존성은 배포 전 높은 확인 우선순위입니다.

화면은 상위 SIMPLE0/INSPECTION1로 바뀌고 INSPECTION 안에 RUN/RESULT·6모드가 들어갑니다. InspectionReviewData는 기존 ReviewData와 같은 서비스들을 받는 별도 상태 객체입니다. RootView는 메뉴 전환 때 이전 Build CTS를 취소하고 캐시/Loading을 먼저 보여 준 뒤 새 Build의 취소·선택 메뉴를 확인하여 게시합니다. 캐시의 메뉴 참조는 불변 실행 스냅샷이 아니며 모든 동기 CPU 계산이 background로 옮겨졌다는 뜻도 아닙니다. AkMarginXText/YText의 Changed 이벤트 누락은 기존 ColorBrush와 같은 즉시 갱신 후보이며 WPF 재바인딩 우회는 미실행입니다. [구성](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L139-L166), [Build 경계](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/CRootView.cs#L549-L654).

AlarmManager·CMelsec·VisionComm·StageReviewSequences·Script 파일은 확인한 diff 범위에서 대부분 주석 보강입니다. Script Build는 가공 입력 파일 생성이며 문서 추출·정식 앱 빌드·Controller 컴파일·실제 실행은 별개입니다. Product compact의 NG 부가정보 손실, 보호윈도우 재시작 상태, Alarm 원인 후보·상관키·시간순 파일·대용량 I/O 한계는 새 기능으로 해결됐다고 승격하지 않았습니다. 반면 Review 담당이 확인한 RETAINED/EDITED 적용 후보·전일자 경로 이력·F6 저장은 해당 범위만 기존 설명을 대체합니다. Level 색은 실제 품질 JUDGE와 구분합니다.

회의의 RecipeSet/실제 Job Change·조건부 파워 보정·미확정 I/F 방향은 요구·정책입니다. AK 두 항목 이전, 화면 통합, PM/INIT 구현이 그 전체 정책을 완성했다는 결론은 내리지 않습니다. Recipe의 CIM NAME 열 삭제 영향과 Host 자동 전송 대체 계약도 구분합니다.

산출물은 architecture 8장+README+spec+SVG8개 총18개입니다. 고정 소스 인용352개 파일/줄 범위, 내부 링크, Mermaid fence를 정적으로 검사했습니다. 기존 인용254개 중 변경 함수와 겹친48개 범위는 현재 함수·호출자와 대조했습니다. 실제 source73파일의 pre-SHA와 현재SHA가 같고 git status가 깨끗합니다. 검토 파일/인용/단위/위험6개/검증 시나리오는 동명 JSON과 architecture-citations/review-files/source-unchanged 기록에 있습니다. 문서 범위가 전체 tracked 원문의 새 정독을 뜻하지는 않습니다. SVG XML8/8는 통과했으며 시각 QA는 Root 최종 통합 단계로 남겼습니다.

Root의 Margin 순수회귀34/34와 Review 담당의 별도 순수회귀23/23는 원문 복사 수치·파일 계약의 검증입니다. 정식 WPF·장비·통신·SDK·AeroScript·물리 좌표·장시간 성능은 실행하지 않았습니다. 후속 시험은 구형 이관, Setting 변경과 과거 보정, INIT의 상대 신호 잔류/cleanup 실패, PM 이력 실패/재시작/STALE, 빠른 메뉴 전환·취소·즉시 표시 갱신으로 구분했습니다.

## Review·보정 변경 분석

원본 `https://github.com/kjuws10-rgb/A3Drilling.git` / `master` / `96e22cd027c84bf302b23f2949b98985d7f301bb` → `28764c91d521777b8ee068dd7aaf2d3902ce9fe2`. 11.18/11.19 두 Commit. 원본은 읽기 전용이며 정식 설비 빌드·장비 실행은 하지 않았습니다.

### 핵심 결과

익일 중복 적용, 재개 결과의 RETAINED 앵커 누락, 결과 CSV의 불필요한 F3 반올림 반례가 현재 코드에서 개선됨을 독립 순수 회귀로 확인했습니다. ONE_LINE 보정, 검사 RUN/RESULT 통합, 축별 COPY도 추가됐습니다. EDITED를 실제 보정 후보로 받아들이는 정책은 작업 편의를 높이지만 새 실측과 수동 승인 구분이 중요합니다.

```mermaid
flowchart LR
 S[Setting AK Margin + Recipe] --> P[Head와 Masking 적용 Review 계획]
 P --> V[Stage 목표 + Vision 별도 요청]
 V --> R[판정과 F6 결과 저장]
 R --> U[INSPECTION RESULT]
 U --> E[선택 편집 또는 재검사]
 E --> A[출처와 판정으로 보정 후보 선택]
 A --> O[Current + Delta를 최종 반올림]
 O --> H[새 Offset과 전일자 경로 이력]
 H --> N[다음 DoReady에서 적용]
```

### 바뀐 생산자와 소비자

| 항목 | 생산·입력 | 소비·출력 | 경계 |
|---|---|---|---|
| AK Margin 출처 | CSettingManager.GetAlignKeyMargins / CAlignKeyMarginSettings.Read | 일반Review/CreateShotBeamPositionCalculator/AUTO Fine/ZeroDefence/Fine·Rough preview/Align 보간 | REVIEW_CAMERA_ALIGN_KEY_POS_X/Y는 여전히 Recipe. 기존 Offset·결과에 Setting geometry hash를 추가하는 변경은 아님 |
| 검사 화면 통합 | CMenuCorrection.AttachReview + CMenuReview workspace/mode | 별도 InspectionReviewData panel, 현재Recipe/모드 결과트리, 저장완료 자동OpenResult | BEAM_INSPECTION은Offset금지. UI 성능·동시성 정식실행 미검증 |
| 보정 입력 | ReviewResult 원측정/보존/편집 Revision | BuildDirectDeltas/BuildRoughDeltas/BuildFineDeltas | Direct·Rough는OK만; Fine/AUTO는후보중비OK전체차단; EDITED는새실측아님 |
| 결과 숫자 저장 | CReviewResultFile.Number | Fine/Auto 등 Number 호출부의 CSV와 재LOAD | UI COPY F3와 최종Offset0.001mm반올림유지; 무손실저장아님 |
| 중복 적용 이력 | SaveNewFromSource→AppendApplyHistory→Recipecache갱신 | FindSourceApplication 및 SaveLock내중복검사 | allowDuplicate명시허용·다른경로계보·외부수정cache는별도; Rollback무효화 |
| 대표값 복사 | OriginalXText/YText/OriginalJudge | 편집후보→새EDIT Revision→별도LOAD/APPLY | COPY ALL만좌표+판정함께. VisionResultCode삭제·NG_REASON=RESULT_EDIT,원대표상세NG전체복사아님 |

### 11월18일 셋업 검증 문제의 현재 상태

| 항목 | 현재 상태 | 검증한 범위 |
|---|---|---|
| 동일 source 익일 중복 | 해당 반례 해결: Recipe전일자검색으로기본차단 | 현재writer같은/새인스턴스로재현,명시allowDuplicate와Rollback포함 |
| RETAINED앵커live/file차이 | 해당 반례 해결: RETAINED포함 | 현재Lagrange함수:live/file7.5µm,과거필터15µm |
| 결과 F3 중간반올림 | 해당 반례 해결·최종1µm/COPY F3잔존: F6 0.000600mm | 기존0.000600+새0.000600의최종값현재/live1µm,과거2µm |
| ONE_LINE보정 | 기능추가·WPF실행검증남음: DIRECT_LINE로같은Shot의OK오차누적 | switch와적격타입/설명/명령바인딩정적추적 |
| Default/첫빔/θ/가공Q | 잔건 유지: 식동일,Setting Margin공급변경만간접영향 | 핵심diff/생산자소비자대조 |
| Fine 마스킹/0앵커열/Lagrange | 잔건 유지: 주요알고리즘동일 | 현재본문대조,1앵커/NG/3점순수회귀 |
| AUTO Shift | 잔건 유지: 0유지 | 활성준비경로본문대조 |
| 혼합 DOE | 잔건 유지: 일반Review선택Beam유지 | Default및일반계산기/BeamInspection소비자대조 |

이전 보고서 전체를 최신 소스에서 다시 실행한 것은 아닙니다. 이번에는 실제 writer/파서와 변경된 순수 필터·보간·숫자 포맷·반올림만 23개 회귀로 검증했습니다. 과거 셋업의 물리 조건·카메라 해상도·광학 설치·트리거/가감속·실기판 정밀도는 별도입니다.

### 위험도와 검증 방안

#### RV20-N1 · medium · 수동 EDITED/OK도 보정 앵커가 됨

**확인 수준:** 정적 확인·정책 검증 필요.

**조건:** NG를 COPY JUDGE 또는 KEY IN으로 OK로 바꾼 뒤 EDIT Revision을 LOAD/APPLY.

**영향:** 수정값이 실측과 같은 계산 후보가 되지만 SaveResultEdit는 tolerance 재판정을 하지 않음. Grid에는 출처·Vision원인표시가 충분하지 않음.

**검증:** EDITED OK/NG를 각 결과형식별로 시험하고 source·판정·사용자사유·Current/Delta/Final을 대조.

근거: [CMenuCorrection.ReviewData.Offset.cs:385–480](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L385-L480) · [CMenuCorrection.ReviewData.Edit.cs:422–459](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs#L422-L459) · [CReviewResultFile.cs:377–404](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/ReviewResult/CReviewResultFile.cs#L377-L404) · [CMenuCorrection.ReviewData.Display.cs:274–300](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L274-L300)

#### RV20-N2 · medium · 날짜 중복은 개선됐지만 새 Revision 계보까지 중복 제거하지 않음

**확인 수준:** 경로 한계 순수회귀 재현·Revision 영향 정적 추적.

**조건:** BASE를 이미 적용한 후 다른경로의 EDIT/REINSP 결과를 다시 적용.

**영향:** 경로identity가달라허용될수있고유지된앵커의오차도다시누적될수있음. 내용hash/부모결과/기준OffsetRevision연결없음.

**검증:** BASE→일부EDIT/REINSP 재적용의행별Current/Delta/Final과지속이력비교.

근거: [CReviewOffsetFile.cs:409–472](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L409-L472) · [CReviewOffsetFile.cs:633–677](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L633-L677) · [CMenuCorrection.ReviewData.Offset.cs:326–350](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L326-L350) · [CReviewResultFile.cs:228–267](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/ReviewResult/CReviewResultFile.cs#L228-L267)

#### RV20-N3 · low · 전일자 이력 cache는 외부 writer 변경을 자동 재색인하지 않음

**확인 수준:** 독립 두 writer 합성시험 재현·앱 운영조건 미확인.

**조건:** 한 writer가 Recipe history를 먼저색인한후다른writer/프로세스가새Source이력추가.

**영향:** 첫writer가외부이력을못볼수있음. 실제앱다중인스턴스운영이확인됐다는뜻은아님.

**검증:** 단일writer소유계약확인; 필요시외부변경감지/프로세스간Lock으로별도검증.

근거: [CReviewOffsetFile.cs:409–472](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L409-L472)

#### RV20-N4 · high · Setting Margin 변경과 기존 보정·과거 결과의 기준 일치

**확인 수준:** 정적 계약 경계·별도 Margin 회귀는 Root 담당.

**조건:** 같은RecipeID로Margin을변경하고기존Align/ReviewOffset을재사용하거나옛결과LOAD.

**영향:** 좌표는새Setting으로재계산되지만저장파일의동일기준검증/자동재기준화계약이추가되지않음.

**검증:** Migration시Setting값/기준hash/Offset재생성정책과freshDoReady를검증.

근거: [CReviewManager.cs:152–196](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewManager.cs#L152-L196) · [CMenuReview.cs:2732–2822](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuReview.cs#L2732-L2822) · [CShotCoordinatePlanBuilder.cs:704–730](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L704-L730)

#### RV20-L1 · medium · Fine는 전역 Lagrange와 외삽을 사용

**확인 수준:** 핵심 계산 동일·현재 순수함수 회귀.

**조건:** Cell/X열3개이상anchor또는anchor바깥대상.

**영향:** 중간/끝오차가단순선형예상과다를수있음. 1점상수·0점열유지도유지.

**검증:** 비균등3/5/7줄·끝마스킹·미검사중간행/격자에서독립새가공잔차확인.

근거: [CReviewManager.cs:3616–3683](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewManager.cs#L3616-L3683) · [CMenuCorrection.ReviewData.Offset.cs:443–468](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L443-L468)

#### RV20-L2 · high · Fine 기하학 행 선정 후 마스킹된 행 자동 대체 없음

**확인 수준:** Nov18 재현 결과의 코드불변 대조·현재 재실행 아님.

**조건:** 요청3줄중첫행전부Masking또는특정X열앵커부족.

**영향:** 명목LineCount와실제유효행/열별앵커수가다를수있음. 0앵커열은기존값유지.

**검증:** 모두마스킹된첫/끝행과열별0/1/2/3앵커를시험하고미보정열수를별도표시.

근거: [CReviewRulePlanBuilder.cs:282–296](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L282-L296) · [CReviewRulePlanBuilder.cs:434–447](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L434-L447) · [CAutoFineReviewCoordinator.cs:241–284](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L241-L284) · [CReviewManager.cs:3631–3657](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewManager.cs#L3631-L3657)

#### RV20-L3 · high · Default 최초마크와 기판밖 예상 가공은 현장확인 필요

**확인 수준:** 핵심 계산/호출 정적 대조.

**조건:** 초기Q/헤드티칭이기판/FOV범위밖이거나AK에Y기울기존재.

**영향:** 현재중앙은두X평균이고최초검색·2D회전피팅은없음. Preview경고를실행차단과동일시금지.

**검증:** 실제설비범위내Q·최초마크가시성·AK자세·가공점한계차단을분리검증.

근거: [CDefaultOffsetCalibration.cs:65–120](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Correction/CDefaultOffsetCalibration.cs#L65-L120) · [CDefaultOffsetCalibration.cs:241–269](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Correction/CDefaultOffsetCalibration.cs#L241-L269) · [CMenuCorrection.cs:4533–4538](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L4533-L4538) · [CMenuCorrection.cs:3279–3340](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3279-L3340)

#### RV20-L4 · high · AUTO Shift 유지 반복평가는 기존경로 그대로 지원되지 않음

**확인 수준:** 정적 확인.

**조건:** Shift를유지한AUTO가공10회및AUTO Fine을요구.

**영향:** 일반ManualReview는성공ManualMOF Shift선택가능하나AUTO가공/AUTOFine은명시적0.

**검증:** 수동MOF/일반Review/AUTO평가시퀀스를분리하고요청정책과확정.

근거: [CAutoFineReviewCoordinator.cs:202–230](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L202-L230) · [CStationProcess.cs:4039–4052](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Station/CStationProcess.cs#L4039-L4052) · [CMenuReview.cs:2536–2562](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.UI/Menu/Menus/CMenuReview.cs#L2536-L2562)

#### RV20-L5 · medium · 혼합 DOE/원빔 자동 대응은 Default에 한정

**확인 수준:** 정적 범위 확인.

**조건:** DOE_EXIST=OFF Head에서일반Review/BeamInspection Beam11사용.

**영향:** Default는중앙1점이나일반Review는전역SPLITED_BEAM_COUNT와선택Beam유지.

**검증:** 원빔zeroorder와평가Beam위치간FirstBeam세팅·실측좌표와광학위치일치검증.

근거: [CDefaultOffsetCalibration.cs:32–50](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Correction/CDefaultOffsetCalibration.cs#L32-L50) · [CReviewManager.cs:139–196](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewManager.cs#L139-L196) · [CReviewManager.cs:1381–1426](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewManager.cs#L1381-L1426)

#### RV20-L6 · medium · Product compact 저장은 Vision 원인 metadata와 수명이 다름

**확인 수준:** 정적 소비자 확인.

**조건:** NGmetadata를메모리에서표시한후ActiveProduct저장/재시작.

**영향:** CSV에는남아도Product compact6필드저장에서는VisionResultCode/NgReason가누락될수있음.

**검증:** NGCSV/메모리/재시작Product를각각대조하고조회와복원책임구분.

근거: [CProductFile.cs:168–175](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/Product/CProductFile.cs#L168-L175) · [CProductFile.cs:309–320](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.File/Product/CProductFile.cs#L309-L320) · [CReviewManager.cs:1667–1683](https://github.com/kjuws10-rgb/A3Drilling/blob/28764c91d521777b8ee068dd7aaf2d3902ce9fe2/Drilling.Common/Review/CReviewManager.cs#L1667-L1683)

### 회귀 결과와 실행 한계

- 현재 원문 19단위 추출·SHA/줄범위 기록, 별도 Console에서23/23 통과.
- 익일 동일경로(같은/새 writer), 명시 중복허용, rollback 이력삭제/복구, 다른경로·다른Recipe, NaN/취소를 확인했습니다.
- MEASURED/RETAINED/EDITED와legacy fallback, Fine NG전체차단·1앵커상수·3점 Lagrange를 확인했습니다.
- 과거와현재 F3/F6 누적 반례 및 최종0.001mm 반올림 유지를 분리했습니다.
- 외부 writer cache와다른경로허용은 제한을 재현한 검사도 PASS로 집계했습니다. 전체 제품 합격23건이라는 의미가 아닙니다.
- WPF·장비통신·설비정식빌드·벤더DLL·레이저·AeroScript 실행과운영CSV 복제는 없습니다.

### 문서와 검토 범위

Review manual7장·SVG7개·diagram-spec을 최신화하고 기존 이력과현재정책을 구분했습니다. 주요 변경은01좌표기준,02 ONE_LINE/Masking,03 숫자 단위·포맷,04 후보·중복·원복,05 UI·편집·Product,06 Default유지잔건,07 Distortion/ZeroLine동결입니다.

기계적 link이동은 함수 의미 검토를 대신하지 않습니다. 변경 함수와직접 호출자는 원문을 다시 읽었고, 연결된 과거 근거의파일·행범위도검사했습니다. 생성기·SDK·실운영레코드는실행/복제대상에서제외했습니다.
