# 02. 변경된 데이터 구조와 저장 형식

## 1. 전체 가공 자료: 큰 상자 안에 작은 상자

`ST_PROCESS_MODEL`은 이번 가공 한 번의 자료입니다. ProcessId/RecipeId/GlassId/LotId, HeadPlans, Parameters, CreatedAt을 가집니다. HeadPlans에는 Head별 레이저 조건과 Shots 목록이 들어 있습니다. 한 Shot은 레이저를 한 번 켤 후보 위치이며, 분할 Beam 각각의 구멍과 같은 뜻이 아닙니다. Beam 수를 Shot 수에 단순 곱하면 이동 명령 수가 나오지 않습니다.

[가공/Head 모델 선언](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationManager.cs#L75-L83).

이번 변화는 큰 상자의 형태보다 **각 Shot의 보정 설명 필드와 준비 시 넣는 Parameters 내용**에 집중돼 있습니다.

| 자료 | 새/변경 필드 | 의미 |
| --- | --- | --- |
| ST_HEAD_SHOT_POINT | FirstBeamOffsetX/Y | Head의 첫 Beam 위치 기준 보정 입력값 |
| 같은 자료 | ShiftOffsetX/Y | 사용자가 입력한 임시 이동량 |
| 같은 자료 | ShiftScannerOffsetX/Y | 위 이동량이 축 교환/반전 후 Scanner에 미친 실제 변화 |
| 같은 자료 | FinalScannerOffsetX/Y | Recipe + 변환한 Head Default + 변환한 First Beam + Review 합계. Shift는 여기에 포함하지 않음 |
| Parameters | CELLn_그룹_REVIEW_OFFSET_X/Y | 전용 CSV 행을 계산기가 읽는 키로 변환 |
| Parameters | SHIFT_OFFSET_X/Y | MANUAL MAIN START 시 Root에서 넣는 값 |

기존 DesignX/Y, ScannerGx/Gy, StageX/Y, RecipeOffset, HeadDefaultOffset, ReviewOffset, EncoderWaitPosition도 유지합니다. `ST_HEAD_SHOT_POINT`은 24개→30개 위치 인자가 되었으므로 외부 코드가 직접 생성한다면 새 인자에 맞춰야 합니다. 내부 PREPARED 자료에도 기준 Y/첫 Beam 필드가 추가됐습니다. [Shot 선언·Shift 읽기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L1-L35).

## 2. 레시피 원본과 실행 Parameters는 서로 다른 자료

레시피 CSV는 설계 조건 원본입니다. JHMI는 “어떤 항목이 있고 어떤 이름/타입인지” 설명하는 사전입니다. 실행 Parameters는 이를 복사한 뒤 현재 Option/Motor와 새 Review Offset을 합친 값입니다. 같은 키가 있으면 Option/Motor가 앞선 값을 덮습니다.

가공 준비 순서:

1. 입력 Parameters 복사.
2. Option/Motor 설정 덮어쓰기.
3. 이름에 REVIEW_OFFSET이 들어간 기존 키 모두 제거.
4. 전용 폴더에서 CSV 하나 선택.
5. 각 행을 CELL/ShotGroup 키로 바꿔 추가.
6. 좌표 계산 후 Head별로 나누기.

[실행 자료 합치기·Chess 필터](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationProcess.cs#L1708-L1790).

레시피 편집의 동적 그룹 항목은 이제 RECIPE_OFFSET_X/Y만 남습니다. Config/JHMI 원본 파일은 이번 범위에서 바뀌지 않았습니다. FIRST_BEAM_OFFSET/SHIFT_OFFSET 키도 checked-in Config에 없습니다. 따라서 계산 코드가 키를 읽을 수 있다는 것과 현재 설정 화면에서 그 항목을 편집·저장할 수 있다는 것은 별개입니다. [동적 그룹 항목](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/JHMI/CJhmiRecipeFile.cs#L690-L708).

## 3. Review Offset CSV: 새 보정값 보관함

새 구조:

- ST_REVIEW_OFFSET_ROW: CellId, ShotId, ReviewOffsetX, ReviewOffsetY.
- ST_REVIEW_OFFSET_FILE_DATA: RecipeId, FilePath, FileName, SavedAt, Rows.
- CReviewOffsetFileBase: LoadLatest/SaveNew 계약. 실제 파일 담당은 CReviewOffsetFile.

[보정 행·파일 계약](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L324-L356).

```text
Config/
  RECIPE/
    test0929.csv                       # 설계 레시피
    test0929_reviewoffset/
      20261010_060000_123_reviewoffset.csv  # 예시 보정 이력
```

```csv
CELLID,SHOTID,REVIEWOFFSETX,REVIEWOFFSETY
1,A1,0.006000,-0.004000
1,A2,0.000000,0.000000
```

위 숫자/파일명은 설명용 예시이며 생산용 보정 지시가 아닙니다.

| 항목 | 실제 규칙 |
| --- | --- |
| 행 식별 | CellId + ShotId. Head/Beam 열 없음 |
| ShotId | 그룹 이름 예: A1. CELL001_SHOT0001 같은 숫자 ShotKey와 그대로 같다고 가정하면 안 됨 |
| 가공 키 변환 | CellId=1, ShotId=A1 → CELL1_A1_REVIEW_OFFSET_X/Y |
| 문자 정리 | 공정 키는 공백 제거, 소문자→대문자, '-'와 '.'→'_' |
| 숫자 출력 | 소수점 6자리, 문화권 영향 없는 '.' |
| 인코딩 | 공통 CSV 쓰기 UTF-8 BOM |
| 정렬 | CellId 순서 후 ShotId 문자열 순서 |
| 최신 선택 | 해당 폴더 모든 *.csv 중 **파일 이름 내림차순 첫 파일** |
| 파일 없음 | 빈 목록 반환. 가공 준비에서 예전 키가 제거되므로 기본값 0 |
| 최신 파일 오류 | 예외 발생. 이전 정상 파일 자동 선택 없음 |
| 시간 | DateTimeOffset.Now. 파일명에 시간대 문자열 없음; 시스템 로컬 시각에 의존 |
| 없는 정보 | 단위/축 정의, Head/Beam, Recipe Commit, ReviewResult 원본, 작업자, 이전 버전 번호 |

[경로·파일 선택·저장](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L7-L99), [행 읽기·숫자 형식](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/ReviewOffset/CReviewOffsetFile.cs#L101-L195).

파일명 규칙을 지켜 생성된 파일끼리는 시간순 문자열 선택이 가능하지만 `zz_manual.csv`처럼 외부 파일을 넣으면 그것이 최신으로 선택될 수 있습니다. ShotId 중복은 별도 오류로 막지 않으며 같은 키를 합칠 때 마지막 값이 이깁니다. CellId≤0인 행은 가공 합치기에서 건너뜁니다. 빈 보정 숫자는 0, NaN 같은 비정상 실수는 현재 공통 파서가 허용합니다. [검증 기록](06_evidence_validation.md) 참조.

## 4. 좌표 계산: 이동값의 축을 섞지 않기

T는 Scanner 변환입니다. **XY 교환 → X 반전 → Y 반전** 순서입니다. d는 Stage 스캔 방향(-1 또는 +1), E는 Head Encoder Scale입니다.

- D0: Shift 전의 Stage 대기 거리.
- D = D0 - ShiftY.
- Bx: Head 중심을 기준으로 한 가공 X.
- By = -D×d: Stage 따라가기 Scanner Y.
- RecipeOffset/ReviewOffset은 여기서 추가 T 변환 없이 Scanner 값에 더합니다.
- HeadDefault와 FirstBeam은 입력 Y에 마이너스를 적용한 뒤 T 변환합니다.

```text
HeadDefaultScanner = T(HeadDefaultX, -HeadDefaultY)
FirstBeamScanner   = T(FirstBeamX, -FirstBeamY)

FinalScannerOffset = RecipeOffset + HeadDefaultScanner
                   + FirstBeamScanner + ReviewOffset

Scanner            = T(Bx, -(D0 - ShiftY) × d)
                   + FinalScannerOffset + T(ShiftX, 0)

ShiftScannerOffset = T(ShiftX, ShiftY × d)
EncoderWait        = (D0 - ShiftY) × abs(E) × d
```

마지막 Shift 식은 극소 음수값을 0으로 맞추는 경계 처리를 제외한 일반 구간 식입니다. [실제 계산 코드](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L98-L131), [First Beam 키 읽기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L375-L381).

쉽게 말해 ShiftY는 Scanner 표시만 옮기는 값이 아니라 **Encoder를 얼마까지 기다릴지도 바꿉니다.** ShiftX만으로는 Encoder 대기가 바뀌지 않습니다. 둘 다 DesignX/Y와 StageX/Y 필드나 HeadNo를 다시 쓰지 않습니다. 따라서 DesignX/Y 필드만 보고 Shift가 적용 안 됐다고 판단하면 안 됩니다.

분할 Beam은 셀 회전/피치/분할 수로 구멍 위치를 계산하는 설계 규칙입니다. 새 FirstBeamOffset은 각 Beam에 별도 값을 주는 배열이 아니라 Head당 기준 보정 2개입니다.

## 5. Script 출력 형태

PROCESS_COORDINATES.csv에 FirstBeamOffsetX/Y, `ShiftOffset X`/`ShiftOffset Y`가 추가됩니다. **이 CSV의 Shift 열에는 원 입력값이 아니라 ShiftScannerOffsetX/Y가 들어갑니다.** PROCESS.txt에는 원 SHIFT_OFFSET_X/Y를 기록합니다. 서로 숫자가 달라도 축 변환 때문일 수 있습니다.

시뮬레이터의 Script Y는 FinalScannerOffsetY + ShiftScannerOffsetY, 실제 모드는 ScannerGy입니다. 시뮬레이터 Y가 전체 따라가기 좌표와 같지 않다는 기존 구분에 Shift가 더해졌습니다.

새 빌드 폴더는 Standard/BufferedRun 아래 `yyyyMMdd_HHmmss_<GlassId>`. 충돌 시 _002부터 _999까지 후보를 찾습니다. Glass ID '-'와 파일명 불가 문자는 '_'로 정리합니다. 파일명이 아닌 실행 ProcessId/RecipeId까지 변경됐다는 뜻은 아닙니다.

[좌표 CSV 열·값](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Script/CAutomation1ScriptFile.cs#L112-L183), [시뮬레이터 Y·폴더 규칙](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.File/Script/CAutomation1ScriptFile.cs#L572-L622).

## 6. Review/Result/Product 자료의 영향

ST_REVIEW_PLAN, ST_REVIEW_PLAN_POINT, 측정 결과와 ReviewResult CSV의 기존 필드 구조는 이번 변경에서 그대로입니다. Points는 전체 후보, ReviewPoints는 Use=true만 고른 목록입니다. 전부 선택이면 기존 목록을 재사용할 수 있고, 일부 선택이면 별도 배열을 만들어 캐시합니다. 같은 좌표를 항상 두 벌 계산한다는 뜻은 아닙니다.

[계획·선택 목록](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L143-L225).

Product는 GlassId로 현재 공정과 리뷰 결과를 연결합니다. 가공에 쓴 Parameters도 Product 준비/생성에 전달됩니다. 전용 보정 파일의 원본 파일명이 독립된 구조화된 버전 필드로 저장되는 것은 아닙니다. 이력을 정확히 재현하려면 실제 Parameters, 보정 CSV, 레시피/설정 버전과 결과를 함께 대조해야 합니다. [Product 연결](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationProcess.cs#L1521-L1579).
