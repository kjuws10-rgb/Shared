# 가공·Review 영향 분석

구조 추적과 Review 추적을 나눠 읽을 수 있도록 통합했습니다. 아래의 위험과 시나리오는 실기 재현 결과가 아닌 정적 분석/후속 검증 계획입니다.

## Ver11.13.0 구조·저장형식 분석 파트

기준은 `A3Drilling/master`의 `dfa5920e6301d9ec4b0eab1452ae59521aafc986`이며 이전 기준은 `5aee8e58439c9b455cae7c9593c9be986c3e682e`입니다. 이 파트는 C#/XAML·정의 CSV·프로젝트 참조를 정적으로 검토했습니다. 운영 측정 CSV 실레코드·현장 IP·접속 옵션은 공개하지 않았고, 분석 대상 원본의 수정과 정식 설비 빌드, 설비 앱·AeroScript·벤더 DLL의 로드·실행·역컴파일은 하지 않았습니다. Shared에는 이 보고서와 코드 레퍼런스만 갱신했습니다. 문서 추출 도구의 실행·부분 컴파일 범위는 06 검증 기록을 따릅니다.

### 구현 변경과 영향

| 변경 묶음 | 생산자 → 호출자·소비자 | 구조·저장 영향 |
|---|---|---|
| 보호윈도우 재시도 | JHMI_RCP 새 `PROTECT_WINDOW_RETRY_COUNT` → Recipe 파싱 → `CProtectWindowUsageRequest` → MELSEC Request/Count·MAIN 표시·CManager LIGHT 알람 | 0~3은 최초 요청 뒤 추가 횟수, 누락 0. Stage 인계값 저장→보고→Request OFF 뒤 두 신호 OFF를 기다려 추가 요청. 소진은 AUTO 계속. 재시도 횟수·정책은 메모리라 재시작 전후 총횟수 보장과 구분. |
| Review 메뉴 이동 | RootView가 만든 CMenuReview → Correction.ConfigureReview | Manual fallback 제거·Correction 진입 초기화와 메뉴 이동 차단으로 소유권 이동. 새 Manager를 만드는 변경은 아님. |
| 좌표 미리보기 | 선택 Recipe·Option/Motor·최신 ReviewOffset → 좌표 계획 → Shot 표·Offset 그림 | Design/Scanner/Camera 기준 제공. Camera 검사점은 Shift만 적용, 가공점은 별도 합산. 현재 미리보기와 Station 준비 스냅샷·실행 Script는 다른 시점·다른 소비자. |
| Default 보정 | AK1/AK3 세션 옵션·DOE 격자 → Fit/WithHeadReference/Recommend·Correction UI·로그 | 중심=(AK1+AK3)/2. DOE 1×1 또는 4×4. 샷/십자 모두 슬롯 수만큼 검사. 로그에 AK1/AK3 열 추가, 열 번호 소비자 주의. |
| Product 결과 필드 | ReviewManager → ST_PRODUCT_REVIEW_RESULT의 VisionResultCode/NgReason | 메모리 전달은 추가됐으나 Active compact writer/reader에는 새 필드가 없음. ReviewResult CSV와 영속 범위 분리 필요. |
| Stage Distortion | 활성화한 IN DWord 맵 → 중앙 CMelsec Snapshot → Sequence | raw 0/10000·logical 0/1 Scale 정의. 실제 PLC 계약·타이밍은 미검증. Interface 현장 복사본은 존재하지만 CInterfaceFile은 고정 JHMI_INTERFACE.csv를 읽음. |
| AlarmCauseAnalysis | Alarm 이력 OccurredAt·LogDirectory → Task.Run 로컬 로그 reader → 4패널·이전 비교구간·후보/NG 요약/시간축 | 규칙 기반 조사 보조. 비교 기준은 무알람+10행, 최대 8구간. 최대 1200행은 표시 제한이며 후보도 선별된 패널에서 계산. 최신 NG_SUMMARY는 Run/Glass로 상관 결합하지 않음. |

### 문서 산출물

`manual/architecture/`의 기존 7장을 모두 현 Commit으로 고정하고 실제 영향 설명·Mermaid·검증 시나리오를 추가했습니다. `08-alarm-cause-analysis.md`를 새로 작성하고 README 목차를 갱신했습니다. `diagram-spec.json`과 SVG 8개도 현재 구조로 갱신했습니다.

기존 139개 인용은 Git diff 위치를 추적한 뒤 원래/현재 선택 구간을 비교했습니다. 삭제 hunk로 인한 MAIN START의 1줄 오프셋 2건을 발견해 고쳤습니다. 유지 구간 137건은 텍스트 동일이고, 변경과 겹친 2건(CManager 구성·Product CoreData)은 새 구현을 직접 검토했습니다. 새 인용도 파일 존재·현재 Commit·실제 줄 범위와 선택 구간 hash를 검증했습니다. 인용 범위 검사 결과는 [구조 교차 검토](../A3%20LD%20Code%20Ref/validation/architecture-crosscheck.json)에, 검토한 소스 경로는 [읽은 범위](evidence/source-review-scope.json)에 기록했습니다.

### 해석과 검증 상태

- **소스에서 확인**: 필드·함수·생성자 전달·조건·단위·호출 순서·파일 헤더와 serializer 범위.
- **정적 위험**: Product 새 NG 필드 영속 공백, Retry 재시작 횟수 초기화, 알람 후보 선별/NG 요약 상관키 공백, 시간순 로그 가정, 대용량 파일 전체 읽기.
- **조건부 위험**: CManager 경고 callback에서 로그 sink가 throw하면 SetAlarm에 도달하지 못할 수 있음. 실제 Shared 로그 sink 예외 정책은 이 담당 범위에서 확정하지 않음.
- **미수행**: 정식 설비 빌드·앱·Controller·PLC·물리 가공·성능·장비 기능의 합성 round-trip 테스트. 매뉴얼의 검증표는 후속 시나리오이며 통과 결과가 아님.

원본 변경은 요청되지 않았으며 이 파트는 문서만 변경했습니다. 자세한 검토 파일과 선택·제외 범위는 [읽은 범위](evidence/source-review-scope.json)를, 우선순위별 위험은 [발견사항](05_위험도별발견사항.md)을 따릅니다. 파일별 원본 해시는 코드 레퍼런스의 metadata/file-inventory.json에 있습니다.

## Review·Default 변경 영향 — 11.13.0

기준: dfa5920e6301d9ec4b0eab1452ae59521aafc986 / 이전5aee8e58439c9b455cae7c9593c9be986c3e682e. 실제git diff와영향호출자/소비자를정적으로대조했다. 원본수정·장비실행·실측CSV열람은하지않았다. 우선순위는추가검증의중요도이며실기불합격을관찰한결과가아니다.

### RV-01 · P1 · EDIT 출처가 기록되는 형식과 기록되지 않는 형식의 Offset 적용이 다름

**확인:** ApplyEditedResultUpdate는 기존 RESULT_SOURCE 열이 있을 때만 EDITED를 쓴다. ONE SHOT writer에는 RESULT_SOURCE 열이 없다. MeasuredRows는 출처가 하나라도 있으면 MEASURED만, 없으면 OK/NG fallback을 사용한다.

**영향:** ALL/FINE 등의 EDITED는 적용 anchor에서 빠지지만 ONE SHOT/Legacy 편집 OK는 적용 후보가 될 수 있다. FINE에서 NG를 EDITED로 바꾸면 원 NG가 집합에서 빠지고 남은 anchor로 적용 가능성이 생긴다.

**범위:** new EDIT producer meets unchanged consumer.

**다음검증:** ALL/FINE/ONE SHOT/Legacy 합성파일에 같은 EDIT를 수행해 후보 key·source·delta를 대조한다.

[CReviewResultFile.cs:376–400](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L376-L400) [CReviewResultFile.cs:1027–1036](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L1027-L1036) [CMenuCorrection.ReviewData.Offset.cs:375–405](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L375-L405) [CMenuCorrection.ReviewData.Offset.cs:433–466](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L433-L466)

### RV-02 · P1 · 새 Revision 경로가 BASE 계보 전체의 중복 적용을 차단하지 않음

**확인:** Revision은 source행을 복사하고 일부만 갱신해 새 경로에 저장한다. Offset source identity는 날짜별 history와 경로 정규화에 의존한다.

**영향:** BASE 적용 후 부분 EDIT/REINSP를 다른 source로 적용하면 남아 있는 MEASURED 행의 delta가 재누적될 수 있다. 경로 중복방지를 측정계보 중복방지로 해석하면 안 된다.

**범위:** existing risk expanded by EDIT revision.

**다음검증:** BASE 적용→부분 Revision→적용에서 Current/Delta/Final 및 history를 관찰한다. 다음 날짜·복제 경로·Rollback 뒤 재적용을 따로 시험한다.

[CReviewResultFile.cs:228–267](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L228-L267) [CMenuCorrection.ReviewData.Offset.cs:461–466](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L461-L466) [CReviewOffsetFile.cs:565–609](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L565-L609)

### RV-03 · P2 · 화면 초록과 OK만으로 실측·편집·결과존재를 구분할 수 없음

**확인:** Grid row 생성은 ResultSource/VisionResultCode/NgReason를 넘기지 않는다. 산포도는 Judge색, ShotMap는 IsResult를 초록으로 표시한다.

**영향:** 편집 OK를 실측 OK로 보거나 NG Shot의 결과존재 초록을 품질 OK로 해석할 가능성이다.

**범위:** new metadata not projected to result grid.

**다음검증:** 같은좌표의 MEASURED OK, EDITED OK, MEASURED NG, UNMEASURED를 표·지도·산포도에서 대조한다.

[CMenuCorrection.ReviewData.Display.cs:272–285](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L272-L285) [CMenuCorrection.ReviewData.Display.cs:887–910](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L887-L910) [CMenuCorrection.ReviewData.Display.cs:1128–1185](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L1128-L1185) [CMenuCorrection.ReviewData.Display.cs:1374–1396](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs#L1374-L1396)

### RV-04 · P2 · 수정후 raw와변환값의의미가다를수있음

**확인:** EDIT는 변환열 쌍이 있으면 그 쌍들을 수정하고 raw열은 그대로 둔다. 변환열이 전혀 없으면 raw열 이름으로 UI 결과값을 저장한다.

**영향:** raw를 다시 Flip해 새변환값을 재구성할 수 없거나 Legacy raw이름이 변환후값을 담을 수 있다. source별좌표계계약이 필요하다.

**범위:** new EDIT update policy.

**다음검증:** raw+converted와raw-only 두형식에서 Flip조합별 저장·재로드·Offsetdelta를 확인한다.

[CReviewResultFile.cs:376–425](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L376-L425) [CReviewResultFile.cs:503–521](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L503-L521)

### RV-05 · P2 · COPY는source의소수3자리표시문자열을사용

**확인:** OriginalXText/YText는 F3이고 COPY는 이문자열을target 후보로쓴다. Save의 무변경축은 원Source.Result값을 유지한다.

**영향:** source 원정밀도와 복사정밀도가 다르며 source/target이 같은F3면 변경으로 인식하지 않을 수 있다.

**범위:** new COPY UI.

**다음검증:** 0.01234 같은 가상고정밀수치와 같은F3 target으로 COPY/KEYIN/단일축/무변경저장을 확인한다.

[CMenuCorrection.ReviewData.Edit.cs:384–405](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs#L384-L405) [CMenuCorrection.ReviewData.Edit.cs:428–456](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs#L428-L456) [CMenuCorrection.ReviewData.Edit.cs:653–655](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs#L653-L655)

### RV-06 · P2 · ActiveProduct재시작복구에새NG메타데이터가빠짐

**확인:** ReviewManager는 Product Review result에 새코드/원인을 넣지만 CProductFile compact writer/reader는 기존6개필드만 처리한다.

**영향:** 메모리엔있던VisionResultCode/NgReason가 재시작후null/빈값으로복원될수있다. ReviewResultCSV에는별도로남을수있다.

**범위:** new product metadata with unchanged serializer.

**다음검증:** 가짜Product저장소에서저장·재로드한metadata와결과CSV로드를대조한다. UI로드가Product역주입을보장한다고가정하지않는다.

[CReviewManager.cs:1590–1606](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L1590-L1606) [CReviewManager.cs:1690–1713](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L1690-L1713) [CProductFile.cs:168–175](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/Product/CProductFile.cs#L168-L175) [CProductFile.cs:309–320](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/Product/CProductFile.cs#L309-L320)

### RV-07 · P2 · ONE LINE검사·저장과OFFSET APPLY지원은별개

**확인:** CMenuReview는실행가능한같은GlassY줄을선택하고ResultType=ONE_LINE로저장한다. Offset적용타입은ALL_SHOT/ONE_SHOT/ROUGH/FINE/AUTO뿐이다.

**영향:** 신규탭을단일라인보정적용완료로보고하면범위를과장한다.

**범위:** ONE LINE added; offset consumer unchanged.

**다음검증:** 교차Cell같은Y선택·제외점·결과분류·Apply차단을각각검증한다.

[CReviewManager.cs:211–246](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L211-L246) [CMenuReview.cs:3177–3195](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuReview.cs#L3177-L3195) [CMenuCorrection.ReviewData.Offset.cs:514–517](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs#L514-L517)

### RV-08 · P2 · AK1·AK3평균은입력평균이며자동새실측·2D회전피팅이아님

**확인:** AK1은Recipe읽기전용,AK3는설계fallback/수동입력이다. Options는입력출처플래그없이두X평균을사용한다.

**영향:** 조건창의실측중앙문구를새촬영합격또는글로벌4점Align연결로해석하면안된다.

**범위:** new AK3 session input.

**다음검증:** 설계fallback/실측encoder수동입력/조건재열기/Recipe전환을구분하고입력출처를기록한다.

[CDefaultOffsetCalibration.cs:29–55](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Correction/CDefaultOffsetCalibration.cs#L29-L55) [CDefaultOffsetCalibration.cs:265–285](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Correction/CDefaultOffsetCalibration.cs#L265-L285) [CDefaultOffsetView.xaml.cs:78–112](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L78-L112) [CDefaultOffsetView.xaml.cs:137–147](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Views/CDefaultOffsetView.xaml.cs#L137-L147)

### RV-09 · P2 · 전역1/4grid지원을Head별DOE3+원빔5지원으로확대하지않기

**확인:** SPLITED_BEAM_COUNT는전역1또는4로모든Head의슬롯수를정한다. Shot/Cross모두1/16Capture와Fit을사용한다.1빔Fit의pitch/residual은0이다.

**영향:** 물리DOE유무/Beam11대응정책이Head별로다르면전역설정과불일치할수있다.1빔의0pitch는실측pitch합격이아니다.

**범위:** new global 1x1 support and cross slot inspection.

**다음검증:** 실제광학Head구성별유효Beam·좌표·개수계약을확인하고혼합구성을별도평가한다.

[CDefaultOffsetCalibration.cs:129–173](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Correction/CDefaultOffsetCalibration.cs#L129-L173) [CMenuCorrection.cs:3790–3805](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L3790-L3805)

### RV-10 · P2 · 사용자가선택한OK를새측정tolerance통과로보면안됨

**확인:** SaveResultEdit는유한한X/Y와판정문자열을검증하며ApplyMeasurementError의tolerance를다시계산하지않는다.

**영향:** 큰오차여도사용자가OK로저장할수있으므로편집판정과측정판정의출처표시가필요하다.

**범위:** new KEY IN and COPY JUDGE.

**다음검증:** tolerance밖수치+OK를합성편집해표시·저장·소비자후보를확인한다.

[CMenuCorrection.ReviewData.Edit.cs:407–458](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs#L407-L458) [CReviewResultFile.cs:270–294](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L270-L294) [CReviewManager.cs:2235–2267](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Review/CReviewManager.cs#L2235-L2267)

### RV-11 · P2 · LOAD시점과저장시점BASE내용일치검사범위

**확인:** Edit후보는메모리Source를사용하지만SaveRevision은source.FilePath를다시읽는다.두내용해시를비교하는계약은확인되지않는다.

**영향:** 외부변경이있으면화면ORG와저장기준BASE가다를수있다.행식별검사는있으나내용동일성검사와다르다.

**범위:** new EDIT save reuses revision writer.

**다음검증:** 합성BASE를LOAD뒤동일경로에서바꾸고부분EDIT저장결과를관찰한다.

[CMenuCorrection.ReviewData.Edit.cs:407–456](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Edit.cs#L407-L456) [CReviewResultFile.cs:202–248](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.File/ReviewResult/CReviewResultFile.cs#L202-L248)

### RV-12 · P2 · 보호윈도우추가retry소진은경고요청후AUTO계속정책

**확인:** 추가횟수0~3을소진해도Count>=Max이면acknowledged/pending정리후경고callback을보낸다.재요청전Request와CompleteOFF를요구한다.

**영향:** 무한교체반복은줄이지만소진을자동HEAVY정지나보호합격으로보고하면안된다.

**범위:** new protective-window retry.

**다음검증:** retry0/1/3·Max0·Complete고착·재시작·실제Alarm정의를mock정책과현장계약으로분리평가한다.

[CStationProcess.cs:4603–4617](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Station/CStationProcess.cs#L4603-L4617) [CStationProcess.cs:4665–4697](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Station/CStationProcess.cs#L4665-L4697) [CManager.cs:146–151](https://github.com/kjuws10-rgb/A3Drilling/blob/dfa5920e6301d9ec4b0eab1452ae59521aafc986/Drilling.Common/Managers/CManager.cs#L146-L151)

### 요구대비확인범위

오차Level1..N의사용자임계범위편집·색상등급저장구현은이번고정소스에서발견하지못했다. 산포도MIN/MAX/UNIT는mm표시범위,Review/Align SCALE은가공기여율%,ReviewJUDGE는각축tolerance판정이다. 요구사항을현재완료기능으로승격하지않는다.

7장전체의소스링크를새Commit에고정하고기존170인용의행이동과변경교집합39개를검토했다. 06장은새구현으로전면재작성했고05Edit/04소비자/07retry등은본문과그림을함께수정했다. 최종 범위·인용 검증은 [Review 교차 검토](../A3%20LD%20Code%20Ref/validation/review-crosscheck.json), 읽은 파일 목록은 [읽은 범위](evidence/source-review-scope.json)에 있다. 이문서들과7SVG는공개가능한코드구조해설이며운영실측행·키·계좌·인증정보를포함하지않는다.
