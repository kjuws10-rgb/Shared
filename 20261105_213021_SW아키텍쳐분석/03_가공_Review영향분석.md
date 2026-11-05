# 가공과 Review에 미치는 영향

## 1. 같은 좌표 생성기, 확대된 실제 이동 경로

Cell/Model/Shot/Beam의 설계 좌표·Head 배정·Masking·Sampling 계산은 기존 구현을 유지합니다. 새 변경은 수동 MOF·OneShot·일반 Review·ROUGH가 실제 MELSEC의 공통 Move 경로를 사용하도록 연결한 부분입니다. Recipe STAGE_SPEED와 모드별 대상 축을 사용하며, 허가·도착·BUSY·응답 정리·소유권 검사도 거칩니다. [Manual MOF 3385–3453](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L3385-L3453) · [실제 Review 이동 2241–2297](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Review/CReviewManager.cs#L2241-L2297) · [ROUGH 이동 2937–3005](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Review/CReviewManager.cs#L2937-L3005).

AUTO/START는 수동 이동이 접수됐거나 공통 Stage Session이 살아 있으면 차단됩니다. 메뉴의 취소 토큰을 전파해 STOP/이탈을 처리하며, 취소 접수와 실제 장치 소유권 해제 시점은 다릅니다.

## 2. DoReady와 Process 단독

정상 DoReady는 현재 Recipe·최신 Offset으로 모델을 만든 뒤 Script를 생성하고 업로드합니다. Process 단독은 같은 준비를 수행하지만 Script를 다시 생성하지 않고 가장 최근 생성 세트를 읽어 업로드합니다. [Build와 LoadLatest 분기 3830–3855](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L3830-L3855) · [Process 단독 호출 4875–4888](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L4875-L4888).

LoadLatest는 RecipeId, Head/Controller/Task 집합, 파일 세트 완결성, MOF Ready RunId를 검사합니다. 가장 최근 세트가 불완전하면 이전 세트로 조용히 돌아가지 않습니다. 그러나 같은 RecipeId의 좌표·보정·출사 조건 내용 해시는 비교하지 않으므로 조건 변경 뒤 DoReady 재생성 여부를 구분해야 합니다. [최근 세트 검증 110–171](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.File/Script/CAutomation1ScriptFile.cs#L110-L171).

## 3. IOF 좌표 전송

일반 IOF는 촬영 순서의 X배열, 0선은 Y배열만 전송합니다. 0선에서 `[Y들][X들]`을 붙이는 과거 설명은 현재 소스와 다릅니다. 전체500칸이 아니라 실제 Count만 쓰고 같은 Count를 다시 읽어0.000051mm 범위로 확인한 후 START를 올립니다. [IOF 준비·정리 609–676](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStageReviewSequences.cs#L609-L676).

Stage 배열의 최대500점과 Vision capacity는 별도 제한입니다. 한 라인은 두 제한을 모두 만족해야 하며 기본 Vision capacity는300입니다.

MELSEC는 개별 IOF1~500 맵의2WORD·연속 주소·같은 장치/스케일을 검사합니다. 값1개 Double 읽기/쓰기는2WORD만 접근하며, 배열은 필요하면 native960WORD 제한으로 나눕니다. 따라서500점은960+40WORD 두 전송이 됩니다. Count 밖 이전 tail은 지우지 않으므로 상대도 Count를 기준으로 사용해야 합니다. [스칼라 범위 523–557](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Interface/Melsec/CMelsec.cs#L523-L557) · [배열 범위·분할 2394–2500](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Interface/Melsec/CMelsec.cs#L2394-L2500).

IOF 행은 주기 poll 대신 실제 명시적 읽기 결과를 마지막 readback으로 보여 줍니다. 이 예외를 Stage 위치·BUSY 등 실시간 안전 입력에도 적용한 것은 아닙니다. [IOF 수동 refresh 2550–2558](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Interface/Melsec/CMelsec.cs#L2550-L2558) · [freshness와 poll 구성 2602–2646](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Interface/Melsec/CMelsec.cs#L2602-L2646).

## 4. 0선 선대기와 본 검사

선대기 기동 근거는 FAB Align 비트에서 **이번 기판의 확정된 Plan/RunId**로 바뀌었습니다. 같은 RunId는 한 번만 시도하고, 현재 그룹 UI 값이 바뀌었다고 새 이동을 만들지 않습니다. WC124 이동 허가와 공통 소유권·정상 계획 검사는 유지합니다. [계획 확정·게시 4051–4094](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L4051-L4094) · [선대기 실행 5670–5729](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L5670-L5729).

이 저장소 본 검사는 여전히 각 Y위치를 통과할 때1002/1003을 한 점씩 받는 흐름입니다. Review X 도착·안정화가 Y통과 전에 끝나지 않으면 실패할 수 있습니다. Drilling2의 가공 종료 후 일괄 결과 수신 구현과 혼동하면 안 됩니다. [포인트별 취득 5833–5908](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L5833-L5908) · [위치 통과·안정화 698–777](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStageReviewSequences.cs#L698-L777).

Vision 예외가 나면 남은 점을 ERROR/NG로 종결하는 기존 정책이 있습니다. 후속 ON이면 결과 저장·W8218 확인·그룹 진행으로 넘어갈 수 있고, 후속 OFF의 NG는 저장 단계에서 실패합니다. 통신 미수신과 측정 NG를 같은 후속 검사로 처리할지 계약 확인이 필요합니다. [결과와 후속 요청 5934–5955](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L5934-L5955).

## 5. AUTO FINE와 보정 저장

결과 파일이 저장되고 검사 동작이 끝나도 NG가 남으면 REVIEW_MEASURE를 실패시킵니다. Save에서도 같은 조건을 재검사하므로 일부 OK만으로 기존 Offset 일부를 덮지 않습니다. 전체 OK인 경우만 보간→DESIGN 좌표 누적→새 파일→다음 Glass 계획 로드로 이어집니다. [NG 실패 35–58](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L35-L58) · [정상 보정 저장 78–119](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L78-L119).

이 변경은 통신 성공과 측정 품질 OK를 구분하지만, 실제 외부 Vision capacity·값 단위·Result 성공 규약까지 실기 검증한 것은 아닙니다.

## 6. TPM과 ATT 저장

AUTO 중재의 대기 우선순위는 TPM→Review→DoReady→Process 단독입니다. TPM은 공통 Manual/AUTO Run의 Prepare→Measure→Save를 사용합니다. [요청 선택 4846–4871](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L4846-L4871) · [TPM handshake 5312–5349](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L5312-L5349).

각 Head는 전용 PowerMeter·ATT·Automation Task/축을 가져야 합니다. Stage Y를 임의로0으로 움직이지 않고,0±허용오차 및BUSY0·연결·새 snapshot을 검사합니다. Scanner는 CENTER로 준비하고 주파수·출사 duty를 설정한 뒤 ATT 보정·측정 동안 ON/OFF와 냉각을 반복합니다.100ms 감시, 실패/취소 시OFF·ATT 정지·소유권 정리가 추가됐습니다. [준비 조건 159–225](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Interface/CPowerMeasureRun.cs#L159-L225) · [출사·읽기·정리 267–347](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Interface/CPowerMeasureRun.cs#L267-L347) · [출사 구성 564–585](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Automation/CAutomationManager.cs#L564-L585).

정상 측정된 ATT 각도는 Recipe에 저장하며, 시도별 측정 보고는 `Data/PowerMeasure/{Recipe}`에 남깁니다. simulation 표시는 센서/ATT/Automation 경로를 묶은 상태이며 실측 합격과 구분해야 합니다. Stage Y 입력을 능동 우선 수신하는 구현은 이 Run에서 확인되지 않았습니다.

## 7. Product의 연결 범위

Product·Review serializer와 기존 완료 결과 연결은 유지됩니다. 그러나 Stage Glass/Lot 매핑은 TODO이고 로컬 Product가 없으면 REAL 환경에서도 DUMMY Glass가 만들어질 수 있습니다. 이번 변경을 Stage 식별정보 연계 완료로 볼 수 없습니다. [Stage 요청 생성 2788–2802](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.UI/CRootView.cs#L2788-L2802) · [가공 완료 결과 3691–3715](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a966ebf527f9ff0f52b1d84a891fda6fc6fc3e6f/Drilling.Common/Station/CStationProcess.cs#L3691-L3715).
