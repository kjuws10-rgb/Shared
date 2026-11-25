# 03 · 가공·Review 영향

- 원본 저장소: https://github.com/kjuws10-rgb/A3Drilling.git
- 분석 브랜치: master
- 원본 최신 Commit: 0219666f9053b907d96d7e0aa7d0c6c1be3a73d4
- 비교 기준 Commit: 334b3599651b2e8e0181fd4459bafaf3cddafff3

## 바뀐 것과 그대로인 것

| 경로 | 이번 diff | 평가 |
|---|---|---|
| 기판 식별 입력 | Stage/Dummy 선택, Stage 필드 보관 추가 | Glass/Lot/PPID 원천이 달라짐 |
| Recipe 좌표·Cell/Model/Shot/Beam 계산 | 관련 계산 소스 변경 없음 | 입력 Recipe의 Align 값 변경은 실제 결과를 바꿈 |
| Head 배정·Masking | 알고리즘 변경 없음 | 선택 Recipe·설정이 같은지 먼저 확인 |
| Review Plan·Sampling Rule·Vision 변환 | 관련 소스 변경 없음 | 허용값·실행 옵션·기판 연결은 영향 가능 |
| ReviewResult·Correction Offset | 저장 알고리즘 변경 없음 | 새 결과·최신 Offset 파일이 추가됨 |
| Product 공정 판정 | PRODUCT_RESULT로 분리 | Stage JUDGEMENT와 혼동 방지, 외부 소비자 호환 확인 |

## 공정 준비와 PPID의 경계

Stage 선택은 **기판 정보를 만드는 동작**입니다. 프로그램은 수신 PPID로 Recipe를 검색하거나 선택하지 않습니다. 현재 공정 준비는 UI의 선택 Recipe에서 파라미터를 만들고, 재사용할 Product의 Glass/Lot 식별자를 가져옵니다. 따라서 수신 PPID와 선택 Recipe가 다른 경우를 운영 절차에서 확인해야 합니다. [수신 Product 생성](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L4448-L4488), [선택 Recipe 기반 준비](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L1627-L1653)

Review는 Product를 연결할 때 Glass ID를 확인하고, Product의 PPID가 비어 있지 않으며 Review Recipe와 다르면 거절합니다. 이런 기존 보호가 있다는 사실은 Auto Job Change가 완성됐다는 뜻이 아닙니다. [Review Product 일치 확인](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L1593-L1610)

`PrepareProductForProcess`는 PPID와 Recipe 사본을 새 공정에 맞춰 갱신하는 API이지만, 이번 master 소스의 검색에서는 외부 호출자를 찾지 못했습니다. API 정의만 보고 실제 준비 경로에서 반드시 실행된다고 설명하지 않았습니다. [공정 할당 API](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Product/CProductManager.cs#L203-L232)

### 기판 생성과 공정 상태 연결 사이의 실제 공백

Monitor의 Stage/Dummy 생성은 `processId=""`, 빈 Recipe Parameters·Head 점수로 Product를 만듭니다. 이후 Root의 공정 준비는 별도의 `SCAN-...-GUID` ProcessId를 만들고 기존 Product에서 Glass/Lot만 재사용합니다. Station의 `GetCurrentProcessProductId`는 **Current Product.ProcessId와 ProcessModel.ProcessId가 같을 때만** Product의 Glass ID를 반환합니다. 이 값이 없으면 Align 결과 기록·공정 완료·정지·오류의 Product 갱신 helper는 바로 반환합니다. 따라서 같은 Glass ID가 화면에 보여도 Product의 공정 상태/결과까지 자동 연결됐다고 해석하면 안 됩니다. [생성 시 빈 ProcessId](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L4480-L4488), [새 공정 ID 생성](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.UI/CRootView.cs#L1642-L1651), [Product 일치 조건](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L1508-L1516), [미연결이면 완료 기록 생략](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Station/CStationProcess.cs#L1415-L1459)

정적 직접 호출 검색에서 `PrepareProductForProcess`와 `StartProduct`는 각각 선언 외 호출자가 없었습니다. **기판 정보 수신/저장은 연결되지만, 새 Process로 할당·시작시키는 연결이 확인되지 않은 공백**입니다. 기준 Commit에도 Dummy 생성의 빈 ProcessId 경로가 있으므로, 이번 변경이 새로 만든 회귀라고 단정하지 않습니다. Stage 입력이 기존 생성 경로를 확장하면서 함께 확인해야 할 생명주기 연결 공백입니다. 실제 운전에서 항상 상태 갱신이 실패했다고 재현한 결과는 아닙니다. 반사 호출·외부 런타임 주입·이미 일치하는 과거 Product가 존재하는 경로는 이번 직접 호출 검색만으로 부정하지 않습니다. 검증 시 Stage/Dummy 생성 → 공정 준비 → 실행/중지/완료 후 Product의 ProcessId·PRODUCT_STATE·PRODUCT_RESULT와 Station 상태를 함께 대조해야 합니다.

## 저장값 변경이 만드는 실제 영향

1. Recipe의 Align Offset 42,822축 항목이 달라졌습니다. 기존 계산기는 이 값을 읽어 Scanner 기여분에 더합니다. 코드가 동일해도 가공 좌표가 달라질 수 있습니다.
2. Review 허용값 X/Y 항목 변경은 동일 측정값의 OK/NG 경계를 바꿀 수 있습니다.
3. Process Count 항목 변경은 반복/사용량 관련 실행 조건의 입력입니다.
4. Setting의 Zero Defence·현재 그룹·Follow-up·Distortion Group1·Review Line·즉시 재측정·Retry Count 입력이 바뀌었습니다. 기존 decoder가 이를 실행 옵션으로 해석합니다.
5. Review Offset CSV 109개가 추가되어 최신 파일 선택 결과가 기준 Commit과 달라집니다.

실제 값·방향·크기는 게시하지 않습니다. 위 내용은 **키와 소비 코드의 연결로 확인한 영향 범위**이며, 물리 가공의 개선·악화나 Tact를 측정한 결과가 아닙니다. [보정 기여분 합산](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L141-L156), [실행 옵션 decoder](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Managers/CSettingManager.cs#L190-L219)

## 좌표와 단위를 구분한 검토

기존 흐름은 설계 Cell/Shot을 만들고 Head·Scanner 축 방향을 적용한 뒤 Recipe/Default/First Beam/Review/Align을 합산합니다. Review 파일은 명시한 좌표계에 따라 변환되고 Scale은 가공 기여분에 적용됩니다. Review Camera/Stage 이동 좌표와 Scanner 가공 좌표를 같은 값으로 비교하지 않아야 합니다. [좌표 변환과 합산](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L135-L156)

이번에 새로 들어온 Stage GLASS_SIZE·THICKNESS는 원시 정수 문자열입니다. 이것이 기존 Recipe의 기판 치수, Cell 배치, Scanner Field를 자동 수정하는 코드로 연결되지는 않습니다.

## 권장 검증 순서

| 순서 | 합성/현장 확인 | 기대 확인 |
|---|---|---|
| 1 | Stage/Dummy/취소 각각 생성 | 취소·읽기 실패는 Product를 새로 만들지 않음 |
| 2 | Stage PPID와 선택 Recipe 동일/다름/없음 | 자동 전환으로 오해하지 않으며 불일치 처리 절차가 명확함 |
| 3 | 같은 Recipe/설정·다른 Align/Offset 파일 | 전체 Head와 Cell의 좌표 차이를 단위별 비교 |
| 4 | 저장 PRODUCT_RESULT와 JUDGEMENT를 서로 다른 값으로 구성 | 화면·CSV·재시작에서 두 의미를 섞지 않음 |
| 5 | Stage map 1개 누락·주기 변경·갱신 중 PLC | 값 누락/불일치가 정상 Product로 채택되지 않는지 확인 |
| 6 | 운용 데이터 제외한 깨끗한 설치 | 과거 Product·세션·Script를 현장 현재 상태로 오인하지 않음 |

이 표는 **계획**입니다. 이번 분석에서 실행한 설비 시험 결과가 아닙니다.
