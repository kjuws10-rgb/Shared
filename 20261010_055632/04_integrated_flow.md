# 04. 통합 흐름도 — 입력부터 가공·검사·보정까지

실선은 자료 전달 또는 호출, 점선은 별도 경로/주의 관계입니다. “계획”은 앞으로 사용할 위치표이고 “결과”는 측정 후 얻은 기록입니다. 장비 연결 TODO는 구현 완료로 표시하지 않았습니다.

## 1. 프로그램 전체와 자료 저장소

```mermaid
flowchart TD
    APP["CAppStartup: 프로그램 시작"] --> MAN["CManager: 담당 객체 연결"]
    JH["JHMI: 항목 이름과 타입 사전"] --> RF["CJhmiRecipeFile"]
    REC["Recipe CSV: 설계 숫자"] --> RF
    SET["Option / Motor 설정"] --> SF["CSettingFile / Manager"]
    MAN --> ROOT["CRootView: 화면과 시작 버튼"]
    RF --> RM["RecipeManager: 레시피 읽기"]
    ROOT --> UI["Recipe 화면: 셀·Head 미리보기"]
    RM --> UI
    SF --> UI
    ROOT --> PREP["Station.PrepareProcess"]
    RM --> PREP
    SF --> PREP
    OFF["레시피별 Review Offset CSV"] --> PREP
    SHIFT["MANUAL 임시 Shift"] --> PREP
    PREP --> COORD["좌표 계산: Design → Head → Stage → Scanner"]
    COORD --> MASK["Masking / Chess"]
    MASK --> MODEL["ProcessModel → HeadPlans → Shots"]
    MODEL --> SCRIPT["Script + 좌표 CSV + PROCESS.txt"]
    SCRIPT --> DEV["Automation1 실행 경로"]
    MODEL --> PROD["Product: Glass별 실행 자료"]
    ROOT --> REV["ReviewManager: 별도 리뷰 계획"]
    RM --> REV
    SF --> REV
    RULE["Review Plan / Sampling Rule"] --> REV
    MASK -. "같은 제외 규칙" .-> REV
    REV --> POINTS["Points: 전체 후보 / ReviewPoints: 선택 후보"]
    POINTS --> MOVE["Stage Y / Vision X 이동: TODO 연결"]
    MOVE --> VISION["Vision 측정 또는 시뮬레이션"]
    VISION --> RESULT["ReviewResult: 실측·오차·판정"]
    RESULT --> PROD
    RESULT --> CORR["Correction: 계산 → Apply → Save"]
    CORR --> OFF
    PROD --> HIST["Product CSV / History / Log"]
```

관찰할 점: Review는 ProcessModel을 그대로 검사 좌표로 변환하는 단일 파이프가 아니라 Recipe/설정을 다시 읽는 가지입니다. 자동 Station Review 단계도 위 ReviewManager 실동작과 같은 것으로 보면 안 됩니다.

## 2. 보정 저장 장소가 바뀐 흐름

```mermaid
flowchart LR
    OLD["예전 Recipe 내부 REVIEW_OFFSET"] --> DEL["가공 준비: 기존 키 제거"]
    RR["ReviewResult 파일"] --> CALC["이번 수정량 계산"]
    FILE["최신 전용 Offset CSV"] --> CUR["현재 누적값"]
    CUR --> APPLY["Apply: 현재값 + 수정량"]
    CALC --> APPLY
    APPLY --> PV["화면 ApplyPreviewRows"]
    PV --> SAVE["Save: 최신 파일 재읽기 / 행 병합"]
    FILE --> SAVE
    SAVE --> NEW["새 날짜시간 Offset CSV"]
    NEW --> NEXT["다음 PrepareProcess"]
    DEL --> NEXT
    NEXT --> KEYS["CELLn_그룹_REVIEW_OFFSET_X/Y"]
    KEYS --> SCAN["최종 Scanner 좌표에 더하기"]
```

주의: 예전 Recipe 값 → 새 CSV로 자동 이전하는 화살표는 없습니다. Apply만 누르면 저장 파일이 생기지 않습니다. Save 이후에도 이미 만든 Script에 값이 저절로 반영되는 것은 아닙니다.

## 3. 한 Shot의 좌표와 Head 배정

```mermaid
flowchart TD
    INPUT["Cell 위치 / Model / Pitch / Rotation / 분할 Beam"] --> DESIGN["Design: 설계 위치"]
    DESIGN --> HEAD["원 설계 X로 Head 배정"]
    HEAD --> BASE["Head 중심 / Stage 방향 / 기준 대기 거리 D0"]
    BASE --> SHIFTY["D = D0 - ShiftY"]
    SHIFTY --> ENC["EncoderWait = D × Scale × 방향"]
    SHIFTY --> XY["Scanner 따라가기 기본 좌표"]
    XY --> T["XY 교환 → X 반전 → Y 반전"]
    HDEF["Head Default X / -Y"] --> TH["같은 축 변환"]
    FB["First Beam X / -Y"] --> TH
    RO["Recipe Offset / Review Offset"] --> SUM["FinalScannerOffset"]
    TH --> SUM
    T --> FINAL["ScannerGx / ScannerGy"]
    SUM --> FINAL
    SX["ShiftX / 0"] --> TS["축 변환"]
    TS --> FINAL
    FINAL --> OUT["Head별 Script / 좌표 CSV"]
    DESIGN -. "필드값 유지" .-> KEEP["Design / Stage 값과 HeadNo"]
    SUM --> MASK["Mask 판정"]
    SX -. "Shift만으로 Mask 판정 유지" .-> MASK
```

First Beam을 Shift와 합쳐 같은 값으로 취급하면 안 됩니다. FinalScannerOffset 합계에 First Beam은 들어가고 ShiftScannerOffset은 들어가지 않습니다.

## 4. 운전 모드와 수동 기능

```mermaid
flowchart TD
    MODE{"운전 모드"} -->|MANUAL| CONF["MAIN START: 레시피/Shift 확인"]
    MODE -->|AUTO| WAIT["Stage PC 요청 대기 안내"]
    CONF --> PRE["레시피 다시 읽기 + Shift + 최신 보정 CSV"]
    PRE --> MODEL["실행 모델 / Script 준비"]
    MODEL --> RUN["Station 실행"]
    WAIT -. "MAIN START 사용 불가" .-> BLOCK["사용자 MAIN 시작 차단"]
    MODE --> ACCESS["메뉴 접근 / Monitor 쓰기 허용 조건"]
    MANUAL["수동 화면"] --> POS["Stage Y / Camera X POS 쓰기"]
    MANUAL --> STOP["Motion STOP / HOME: UI 메시지뿐"]
    MANUAL --> RESET["Controller Reset"]
    RESET --> ENABLE["활성 축 Enable"]
    ENABLE --> HOME["활성 축 Home"]
    HOME --> DIO["활성 Head DIO ON"]
    SOFT["Reset창 STOP 요청"] -. "단계 사이에서 확인" .-> RESET
    SOFT -. "즉시 축 정지 아님" .-> HOME
```

## 5. 구조체 포함 관계

```mermaid
flowchart LR
    PM["ST_PROCESS_MODEL"] --> HP["HeadPlans 목록"]
    PM --> PARAM["실행 Parameters"]
    HP --> HEAD["ST_HEAD_PROCESS_PLAN"]
    HEAD --> SHOTS["ST_HEAD_SHOT_POINT 목록"]
    SHOTS --> CS["설계 / Stage / Scanner / Encoder / 보정값"]
    RP["ST_REVIEW_PLAN"] --> ALL["Points: 전체 위치"]
    ALL --> USED["ReviewPoints: Use=true 필터 / 캐시"]
    USED --> MEAS["측정 결과"]
    MEAS --> RES["ReviewResult 저장"]
    RES --> OR["ST_REVIEW_OFFSET_ROW 목록"]
    OR --> OF["ST_REVIEW_OFFSET_FILE_DATA"]
    OF --> PARAM
```

흐름도 근거: [객체 연결](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/CAppStartup.cs#L15-L39), [실행 모델 생성](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Station/CStationProcess.cs#L1708-L1805), [Review 계획](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.Common/Review/CReviewManager.cs#L1240-L1357), [Offset 저장](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/05215afc0621fc38f7e29bcdf4d1b9d2bface72f/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1156-L1256).
