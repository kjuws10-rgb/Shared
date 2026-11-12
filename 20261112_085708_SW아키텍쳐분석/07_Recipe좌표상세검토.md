# Recipe·좌표·Masking·Shift 변경 검토

- 비교 범위: `A3Drilling/master`의 `a1162209220fd31caa68cbf82b5a98db9588af39` → `5aee8e58439c9b455cae7c9593c9be986c3e682e`.
- 별도 읽기 전용 분석 clone의 최신 HEAD와 Push URL `DISABLED`를 확인했다.
- 검토 방식: Git diff, 현재 소스의 호출 관계, CSV의 구조·키·변경 개수, 독립 산술 재현. 원본 프로그램·장치 코드는 실행하지 않았고 원본 파일 수정·빌드·Commit·Push를 하지 않았다. 아래 개선은 정적 코드 확인이며 실기 합격을 뜻하지 않는다.

## 1. 핵심 판단

| 구분 | 이번 Commit에서 확인된 내용 | 해석과 남은 확인 |
|---|---|---|
| 수동 Review Shift | Review Plan 생성·Beam Inspection·수동 Rough/Fine에 Shift X/Y와 메타데이터를 전달하는 경로가 생겼다. 이미 만든 Plan에는 새 Shift의 **차이**만 더한다. | 같은 Shift를 반복 적용해 누적되는 산식은 아니다. 다만 모든 화면과 모드가 자동으로 Shift를 계승하는 것은 아니다. |
| 마지막 수동 MOF 값 | 성공한 Manual MOF의 완료 시각·Shift X/Y를 JSON으로 남기고 수동 Review 시작 시 선택하도록 연결했다. | Recipe/Glass/Head 식별자가 없는 전역 최근 값이다. 다른 Recipe를 선택한 뒤 이전 MOF Shift를 적용할 수 있는 문맥 위험이 남는다. |
| AUTO | DoReady 가공 파라미터 및 AUTO Fine/FollowUp에서 Shift를 명시적으로 0으로 만든다. | 사용자 과거 요구인 ‘Shift가 있으면 AUTO에서 확인 후 유지, 양산 옵션에서는 자동 초기화’와는 다르다. 최신 승인 정책 확인이 필요하다. |
| Masking·Head·Sampling | 핵심 Builder와 Rule Builder는 이번 비교에서 변경되지 않았다. 기존 디자인 기준 Head 배정·Masking·라인 선택을 재사용한다. | Shift나 보정 후 실제 위치로 Masking을 재분류하거나 이동 경로를 우회하는 기능이 추가된 것은 아니다. |
| 원빔 | 전체 Recipe의 분기 수 1 또는 4 계약은 유지된다. | AUTO는 Beam 11 고정이다. DOE 없는 원빔의 Beam 1 운전과 스캐너별 DOE 유무를 섞는 계약은 여전히 갖추지 못했다. 기존 제약이며 새 회귀라고 단정하지 않는다. |
| Recipe 복사 | `_reviewoffset`를 복사할 때 `_apply` 이력 디렉토리는 제외한다. | Offset CSV 자체를 전부 제외하는 것은 아니다. 복사된 Recipe에 이전 Recipe의 적용 이력을 그대로 붙이지 않도록 분리한다. |
| 실제 설정 | 카메라 배율, 0선/FollowUp 옵션, Head Default 및 대규모 Align Offset 값이 바뀌었다. | CSV 구조 변경과 값 변경을 구분해야 한다. 저장소에 들어 있는 평가·보정 값은 생산 검증 결과가 아니다. |

## 2. 데이터 흐름과 저장 형식

현재 전체 흐름 그림은 [통합 흐름도](04_통합흐름도.md)에서 확인합니다.

`JHMI_RCP.csv`는 화면 정의이며 현재 356행 중 첫 행은 헤더다. `JHMI_SETTING.csv`는 259행 중 첫 행이 헤더다. 실제 `Setting/Setting.csv`도 `TAB,NAME,VALUE` 헤더를 가진다. 반면 `RECIPE/test0929.csv`는 **헤더 없는 3열 데이터**이며 첫 행부터 `DEFAULT,RECIPE_NAME,...`이다. Recipe는 `[TAB, 키, 값]`을 읽어 타입·단위·기본값을 JHMI 정의와 결합한다. 따라서 Recipe CSV의 세 번째 열이 곧 좌표 단위 정의라는 뜻은 아니다. [Recipe 읽기](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/JHMI/CJhmiRecipeFile.cs#L847-L886), [헤더 없는 값 읽기](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/JHMI/CJhmiRecipeFile.cs#L889-L924), [저장 후 검증](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/JHMI/CJhmiRecipeFile.cs#L188-L228).

DoReady 준비는 Recipe 파라미터에 Option/Motor 설정을 합치고 최신 Review Offset을 병합한 뒤 가공 좌표를 만든다. 같은 키가 있으면 실행 설정이 덮는 경로가 있으므로, Recipe CSV 하나만 보고 최종 실행값을 확정하면 안 된다. [실행 파라미터 준비](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L1526-L1560).

| 파일 | 현재 구조와 비교 결과 |
|---|---|
| `Config/RECIPE/test0929.csv` | 이전·최신 모두 43,376행, 전 행 3열, `(TAB,NAME)` 중복 없음. 키 추가·삭제 없음. 42,840개 값 변경. |
| Recipe 변경 내역 | Align X 21,410개 + Align Y 21,413개 + 8개 Head의 Default X/Y 16개 + `CURRENT_PROCESS_COUNT` 1개. 합계 42,840개. |
| Recipe 현재 기준 | `MAX_CELL_NUMBER=45`, 모든 45개 Cell은 Model 1, `SPLITED_BEAM_COUNT=4`, `AK_MARGIN_X/Y=15.5`, Review AK X=0/Y=2460. 해당 기준·Masking·형상 키는 이번 비교에서 바뀌지 않았다. |
| Align 저장 값 | 변경된 Align 값의 범위는 X −1.991~0.443 mm, Y −0.578~3.494 mm. 숫자 범위만 기록하며 정상/이상 임계값으로 판정하지 않았다. |
| Head Default | 8개 Head의 X는 기존 0에서 약 22.49~22.51 mm로, Y도 소량 변경됐다. 보정용 현장 값과 배포 기본값을 분리해서 확인해야 한다. |
| `Setting.csv` | `RUNOPTION_ZERO_DEFENCE_USE` 0→1(55행), `RUNOPTION_FOLLOWUP_USE` 0→1(57행), `Review_Camera_Resolution` 1→0.05(95행), `Wapage_AlignBase_Tolerance` 0.1→0.2(99행). |

설정 근거: [Setting 55–99행](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Config/Setting/Setting.csv#L55-L99). 카메라 설정의 JHMI 단위는 `mm/pixel`이며 정의 기본값은 0.0025이다. 실제 저장값 0.05는 50 µm/pixel이고 정의 기본값의 20배다. 실행 변환은 `카메라 mm/pixel × Vision nResolution × (Target−Hole)`를 사용하므로, 동일한 Vision 원시 값에서 1→0.05 변경은 변환된 오차를 1/20로 만든다. ‘측정 정확도가 향상됐다’는 뜻이 아니다. Tolerance·보정량·Default 산출의 기준 배율을 재검증해야 한다. [JHMI 단위·기본값](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Config/JHMI_SETTING.csv#L95-L95), [실제 변환](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L2173-L2196).

`CJhmiRecipeFile`의 이번 실질 변경은 부가 폴더 복사 시 `_reviewoffset/_apply`를 제외하는 것이다. Recipe 핵심 3열 스키마를 바꾼 Commit으로 설명하면 안 된다. 선택한 Offset 데이터와 다른 부가 폴더는 복사되며, `_apply`만 재귀 복사에서 빠진다. [복사 옵션 결정](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1324-L1334), [제외·링크 차단](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/JHMI/CJhmiRecipeFile.cs#L1364-L1399).

`CCsvParser.Append`는 새 파일이면 헤더와 행을 만들고, 기존 파일이면 끝에 행을 추가한다. 쓰기 실패 시 원래 길이로 되돌리며 쓰기 공유는 허용하지 않는다. 이 함수 자체는 **기존 파일 헤더가 인자로 받은 헤더와 일치하는지 비교하지 않는다**. 실제 소비자인 Review Offset 적용 이력의 상위 검증과 함께 보아야 하며, 여기서는 이력 기능 전체의 결함이라고 단정하지 않았다. [Append 전체 계약](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/Parser/CCsvParser.cs#L96-L144).

## 3. Design에서 ReviewX·StageY까지

현재 Review 목표의 단위는 mm다. Cell 패턴이 만든 Shot 중심 `DesignX/Y`는 그대로 보존하고, 해당 Shot에 선택된 Beam의 위치를 계산한다. 다음은 현재 산식을 풀어 쓴 것이다.

```text
(bx, by) = 선택 Beam의 DOE 로컬 오프셋을 Cell 각도 θ로 회전한 값
ReviewX  = ReviewAK_X + DesignX − AK_MarginX + ShiftX + bx
StageY   = ReviewAK_Y + StageDirectionY × (DesignY − AK_MarginY + ShiftY + by)
```

Beam 오프셋은 `(열−중앙)×DOE pitch`, `(행−중앙)×DOE pitch`다. **Shift 자체를 Cell 각도로 회전하는 산식은 아니다.** 이미 회전이 반영된 Shot Design 중심에 Beam의 로컬 오프셋만 회전시켜 붙인다. [Beam 계산·유효 범위](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L911-L974), [Shift를 넣는 Plan 생성](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L647-L705).

`ApplyShiftOffset`는 `새 Shift−기존 Plan Shift`만 목표에 더하며, StageY에는 Stage 방향을 곱한다. CorrectionPlan.SourcePoints도 함께 바꾸고 Shift 메타데이터를 갱신한다. 따라서 회전각이 0이 아니어도 위 산식으로 새 Plan을 만드는 것과 동치다. [차분 적용](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L211-L235).

독립 산술 재현 `shift-formula-check.py`에서 각도 0/90/27.5/180/−90°, Stage 방향 ±1, 3종 Shift 변경을 조합한 30건이 일치했다. 최대 부동소수점 차이는 `4.55×10⁻¹³ mm`이며 같은 Shift를 10번 반복 적용한 추가 차이는 0이었다. 이는 **산식의 정합성만** 확인한 것이고 C# 원본 실행·GUI 조작·엔코더 실측 결과가 아니다.

Review의 AK 기계 기준 X/Y는 여전히 Recipe 항목이며 Setting으로 이관되지 않았다. [Recipe 정의](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Config/JHMI_RCP.csv#L34-L35). 또한 위 Review 목표 공식에는 가공용 Default/FirstBeam/Align/Review 보정값이 모두 같은 방식으로 더해지는 것이 아니다. 가공 좌표와 Review 목표를 동일한 수식이라고 설명하면 안 된다.

가공에서는 ShiftY가 `stageWaitDistance = baseWaitDistance − ShiftY`와 엔코더 대기 위치에 반영되고, Head의 Scanner 축 변환과 추종 방향도 적용된다. ShiftX는 Scanner 변환으로 더한다. Default/FirstBeam/Review/Align은 각자의 변환 후 최종 Scanner 오프셋에 합산된다. Head 배정 자체는 Shift·보정을 적용하기 전 Design 기준이다. [Head 배정과 입력](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L21-L70), [엔코더·Scanner 변환](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L119-L156).

## 4. 수동 Shift의 수명과 AUTO 경계

현재 전체 흐름 그림은 [통합 흐름도](04_통합흐름도.md)에서 확인합니다.

- Manual MOF는 요청을 고정한 파라미터에서 Shift를 읽으며, 성공한 COMPLETE 후에만 최근 완료 값을 갱신한다. 저장 파일 쓰기에 실패하면 경고를 남긴다. 이미 성공한 가공을 실패/무가공으로 바꾸는 처리는 아니다. [요청 고정](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3415-L3440), [완료 후 기록](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3576-L3589).
- 저장은 Script 디렉토리 상위의 `ManualMof/LastSuccessfulMof.json`이며 유효한 시각·유한 Shift만 읽는다. Record에는 완료시각/X/Y만 있다. [경로·읽기·쓰기](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3713-L3758), [기록 구조](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L5856-L5856).
- Review 화면의 시작 창은 이 최근 값이 있으면 현재 Recipe에서 적용 여부를 묻는다. Recipe가 같은지 비교하는 식별자는 없다. [수동 선택](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuReview.cs#L2027-L2056).
- 수동 Fine은 현재 Lines를 Plan으로 묶은 뒤 차분 Shift를 적용한다. 라인 수/Beam 등을 다시 구성하는 BuildLines는 Shift를 0으로 초기화하고 좌표를 다시 계산하며 실행 SourceVersion을 무효화한다. 이 경로를 ‘같은 Shift가 누적되는 문제’로 보고하지 않는다. [Fine 구성](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L6067-L6127), [요청·차분 적용](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L6178-L6230).
- AUTO는 수동 MOF 이력과 별개로 가공 준비 시 Shift 키를 0으로 덮고, AUTO Fine/FollowUp 역시 0으로 고정한다. [AUTO 가공](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Station/CStationProcess.cs#L3984-L3996), [AUTO Review](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L201-L234).

## 5. Masking·샘플링·원빔의 적용 범위

Masking 영역은 Cell 로컬의 **보정 전 디자인**으로 판정한다. 현재 코드 주석과 산식 모두 Recipe/Default/FirstBeam/Align/Review/Shift 및 Head flip으로 Masking 소속을 바꾸지 않는 계약이다. Beam 사각 영역이 Hole/Edge와 교차하면 해당 Beam 번호가 결과에 들어간다. `BeamNumbers.Count > 0`이면 `IsMasked`이고, `ShouldSkipLaser = IsMasked || IsChessSkipped`이다. 즉 **Beam 하나라도 마스킹된 Shot 전체**를 Review/0선 대상에서 제외하며, ‘모든 Beam이 마스킹돼야 제외’가 아니다. [판정 의미](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L767-L784), [고정 좌표계·교차 판정](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L853-L909).

Review Plan은 동일 가공 Builder에서 실제 Head 배정을 얻고 Masking/Chess의 ShouldSkipLaser 대상은 제외한다. 0선은 제외된 Shot을 지정하면 설명과 함께 막는 기존 계약을 유지한다. [Review 구성](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L456-L525), [0선 지정점 검증](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CZeroDefenceRecipePlan.cs#L17-L74). 좌표/Trigger 목록에서 Shot을 제외하는 것과 축이 마스킹된 물리 영역을 통과하지 않게 우회하는 것은 다른 요구다. 이번 변경에서 물리 경로 회피 기능이 추가됐다는 근거는 없다. Shift 후 실제 Hole이 고정 Masking 영역에 들어가는지 재판정하는 요구도 별도로 정의해야 한다.

Fine 샘플링은 Cell별 Shot Y 범위에서 1라인이면 중앙, 복수이면 범위 내 균등 위치에 가까운 행을 고르는 기존 규칙이다. UI 및 AUTO는 1/3/5/7라인을 사용한다. 마스킹 Shot을 먼저 검사 가능 여부로 구분한 후 실행 대상에 반영한다. ‘3라인 검사’는 모든 셀을 합쳐 단 3개 전체 라인이라는 뜻이 아니며 Cell별 선택 후 같은 Model/Y를 라인으로 묶는 구조다. [Cell별 선택](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L361-L400), [일반 리스트 선택](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L434-L451), [AUTO 라인 구성](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L250-L272).

원빔은 DOE가 없어 zero-order 위치에 실제 하나의 Beam이 출사되는 경우라는 사용자 정의로 평가했다. 현재 일반 좌표 계산은 전역 split=1일 때 Beam 1 오프셋이 0인 계약을 갖지만, AUTO는 `BeamNo=11` 상수다. split=1에서는 유효 Beam 범위가 1이므로 AUTO와 양립하지 않는다. Head별 DOE 유무·원빔 모드의 별도 파라미터도 이번 변경 범위에서는 추가되지 않았다. [Beam 범위](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L911-L944), [AUTO Beam 11](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CAutoFineReviewCoordinator.cs#L340-L342). 이 제약은 이전 Commit에도 존재한다.

## 6. 발견사항과 검증 계획

| 위험 | 현재 판단 | 재현·수용 기준 제안 |
|---|---|---|
| 높음·설정 | 실제 Camera Resolution이 1→0.05로 바뀌어 오차 환산/보정량이 크게 달라진다. 0선 및 FollowUp도 켜졌다. | 설정값·Vision nResolution·원시 Target/Hole·mm 변환값·Flip 후 오차·판정을 함께 기록. 알려진 변위의 기준 패턴으로 X/Y 방향과 배율을 확인. 하드웨어 임계값은 별도 합의. |
| 높음·기존 제약 | DOE 없는 원빔에서 AUTO Beam 11 계약 충돌. | split=1과4를 분리하고 Head별 물리 DOE 계약 확정 후, Beam 목록·제로오더·AUTO/Fine/0선·MOF가 동일한 Beam 위치를 선택하는지 확인. 현재 코드의 일반 원빔 지원을 생산 AUTO 지원으로 확대 해석하지 않는다. |
| 중간·신규 표시 불일치 | Beam Inspection은 Shift를 넣은 Plan을 만들지만 Beam Positions 창은 Shift를 넘기지 않아 0 기준 좌표를 보여줄 수 있다. | 비영 Shift로 Beam Inspection 후 같은 Shot의 Plan 목표, 실제 요청, Beam Positions 창 X/Y를 대조. 표시도 동일한 Plan Shift를 사용해야 한다. |
| 중간·문맥 | 최근 수동 MOF 이력에 Recipe/Glass/Head 식별자 없이 Shift만 남는다. | Recipe A 성공 후 B 전환, 프로그램 재시작, 이력 저장 실패·손상 각각에서 원본 문맥과 미적용/적용 선택이 분명해야 한다. 이력이 같다는 이유로 B에 자동 적용했다고 해석하지 않는다. |
| 요구 확인 | AUTO Shift 무조건 0 고정은 과거 사용자 요구의 확인창/양산 초기화 옵션과 다르다. | 비영 Shift의 AUTO 평가가 필요하면 승인 정책부터 확정. 현재 코드는 값 유지형 AUTO 평가를 수행하지 않는다는 점을 UI/로그와 일치시킬 것. |
| 기존 미구현 요구 | Masking Shot 제외는 물리 이동 경로 회피와 다르다. | 검사라인·가감속/재배치 구간·카메라 footprint·금지영역을 정의하고 경로를 확인. 단순 Trigger 개수 감소만으로 물리 회피 합격 판정 금지. |
| 기존 설계 경계 | AK 기계 기준은 여전히 Recipe이며 Setting 이관 요구가 해결되지 않았다. | Recipe 복사/교체 시 장비 기준값 소유권과 변경 이력을 검토. Recipe별 패턴값과 장비 고정값을 분리할지 사양 확정. |

Beam Positions 불일치의 정확한 연결은 `StartBeamInspectionSequence`가 2208행에서 Shift를 전달하고 2213행에 Plan을 저장하는 반면, `ShowShotBeamPositions`는 2348행에서 3개 인자만 넘겨 선택적 Shift 기본값 0을 사용한다는 것이다. 실제 Beam Inspection 이동은 Plan Shift를 전달하므로 우선 **표시·추적 정합성** 문제다. [Shift Plan 생성](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuReview.cs#L2193-L2217), [창의 Shift 누락](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Menu/Menus/CMenuReview.cs#L2332-L2353), [선택 인자 기본값](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L138-L155), [실행의 Shift 전달](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.Common/Review/CReviewManager.cs#L1294-L1303).

수동 Shift 추가 검증은 같은 값을 10회 적용, 0↔비영 값 왕복, Stage 방향 ±1, Cell 회전, 여러 Cell/Head, 3라인 Fine, 재시도·중단·재구성까지 포함해야 한다. 로그에는 원본 Design, AK margin/기계 기준, Beam 오프셋과 Cell 각도, Shift, Stage 방향, 최종 목표를 함께 남기는 것이 필요하다. 가공 ShiftY는 엔코더 시점과 연결되므로 Review 공식 산술 일치만으로 실물 가공/측정 일치까지 합격했다고 판단하지 않는다.

## 7. 검토 범위와 한계

직접 읽은 주요 파일: CJhmiRecipeFile, CCsvParser, CStationProcess, CStationManager 변경, CReviewManager, CAutoFineReviewCoordinator, CShotCoordinatePlanBuilder, CZeroDefenceRecipePlan, CReviewRulePlanBuilder, CMenuReview, CMenuCorrection, JHMI_RCP/JHMI_SETTING/Setting/test0929 CSV. CDefaultOffsetCalibration과 핵심 좌표/Masking/Rule Builder의 이번 Git diff가 없음을 확인했다. UI 전체·Review Result/Offset 파일의 중복 적용/저장·Rollback은 다른 담당 범위와 통합해야 한다.

Config의 실제 인터페이스 주소·SIMUL 상태와 별도 검증 Clone 빌드 결과는 주 담당 근거를 사용해야 한다. 이 문서 작성자가 원본 프로그램을 빌드·실행하거나 장비 통신을 확인한 것은 아니다. 추적된 Data JSON/CSV를 실제 측정 품질·양산 승인·실기 성공 증거로 간주하지 않았다. 전체 카테고리·과거 모든 원문을 다시 검토한 작업도 아니다.
