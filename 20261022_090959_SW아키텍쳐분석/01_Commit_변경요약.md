# Commit 변경 요약

## 한 개의 Commit 안에 여러 기능이 함께 들어왔습니다

최신 `e6ff3c6fd8fb706adbff3ded070cca2502000b4d`는 2026-10-21 18:54:19 +09:00, 메시지는 `auto commit`입니다. 이전 `0c501c104dec1cebab87bd909de29b1b1395a8b4` 이후 중간 Commit은 없습니다. Git 통계는 2,284파일, 추가679,413줄, 삭제7,449줄입니다. 대량 생성물과 Recipe 파생값이 포함돼 줄 수를 개발량으로 환산하면 안 됩니다.

| 분류 | 파일 수 | 분석 방법 |
| --- | ---: | --- |
| 실제 C#/XAML/솔루션 소스 | 166 | 변경 목록 전수 분류 후 핵심 데이터/호출 경로의 원문 대조 |
| Config | 44 | JHMI 스키마·Recipe 키·Review Rule·PowerTable 의미 비교 |
| Data/Log | 124 | 실행 데이터/로그의 종류·형식 확인. 실제 장비 합격의 증거로 쓰지 않음 |
| bin/obj 등 | 1,950 | 생성물 메타데이터 분리. DLL/캐시를 소스 변경으로 해석하지 않음 |

## 변경 묶음과 소유 계층

| 변경 묶음 | 담당 파일/계층 | 호출·영향 |
| --- | --- | --- |
| Align Base/LastLoad/보간 | CAlignBaseData, CAlignLastLoadService, CAlignInterpolation, CAlignAlgorithmComparison | Correction 화면 → MELSEC 1회 Load → Base−LastLoad → 행별 X 선형/Y 구간선형 또는 Lagrange |
| Shot Align Offset | CAlignShotOffsetData, CRecipeManager, CJhmiRecipeFile | 계산값을 CELL별 Shot 키로 저장. 일반 편집기가 숨김 키를 지우지 않게 보존 |
| 실행 좌표·Script | CShotCoordinatePlanBuilder, CScannerAxisTransform, CAutomation1ScriptFile | 설계 보정 벡터를 현재 Stage/Head 방향으로 변환하고 최종 GX/GY에 가산 |
| Review 계획 | CReviewRulePlanBuilder | 전체 Glass 공통 Y선정 → 각 Cell 안에서 Fine 라인 선정 |
| Beam 진단 | CReviewManager/ResultFile/UI의 BeamInspection partial | 여러 Shot×선택 Beam 생성 → 시뮬레이션 검사 → 52열 CSV → 최근 결과 표시 |
| 상태 수집 공통화 | CAutomationStatusSnapshotService, CSharedDeviceSnapshotService, ATT snapshot/positioning | 화면마다 통신하던 부분을 공유 수집·읽기 구조로 분리 |
| 실제 명령의 완료 판단 | CAutomationPositioningService, CAttenuatorPositioningService | 명령 ACK 이전 캐시가 도착 완료로 재사용되지 않게 세대/시각 경계 사용 |
| 설정 변경 연결 | CInterfaceManager.Reload, CMelsec.Connection | 바뀐 장치만 교체·재연결하고 같은 장치는 유지 |
| 알람 | CAlarmListFile, CAlarmManager partial, ScannerTemperatureAlarmMonitor | JHMI 201개 정의 → 현재/이력 → 화면과 독립된 1초 감시 |
| 수동 가공 | CMenuManual partial, CManualScanFile, CManualMotionSession | Head/축/형상/레이저 동작·Home 속도·모션 세션을 화면과 서비스로 분리 |
| 파워 측정 | CPowerMeasureService, ManualPowerMeasurePanel, CPowerTableFile | 센서별 직렬/센서 간 병렬 측정 상태·표 갱신. 현재 UI 실행은 Simulation Session |
| 메인·모니터 UI | CMenuMain, CMenuMonitor, 여러 전용 Panel/View | Main의 반복/분산 코드 축소, 로그·장치·Manual 화면 분리. 표시 기능이 실제 Auto 단계를 완성한 것은 아님 |

근거: [CRecipeManager.cs:82–114](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Managers/CRecipeManager.cs#L82-L114) · [CAlignShotOffsetData.cs:35–92](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Recipe/CAlignShotOffsetData.cs#L35-L92) · [CReviewRulePlanBuilder.cs:375–408](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewRulePlanBuilder.cs#L375-L408) · [CReviewManager.BeamInspection.cs:21–71](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Review/CReviewManager.BeamInspection.cs#L21-L71) · [CAutomationStatusSnapshotService.cs:21–84](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Automation/CAutomationStatusSnapshotService.cs#L21-L84) · [CInterfaceManager.Reload.cs:8–67](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.Common/Interface/CInterfaceManager.Reload.cs#L8-L67) · [CAppStartup.cs:18–44](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.UI/CAppStartup.cs#L18-L44).

## 파일과 실행 환경 변화도 따로 봅니다

JHMI_RCP는 기존303행에서323행으로 늘어 AK4/DK6의 X/Y Base 20개를 추가했습니다. JHMI_MANUAL_SCAN는13→18행, JHMI_INTERFACE는9→16행입니다. MELSEC_MAP은75→98행이며 READ_SCALE/WRITE_SCALE로 헤더도 바뀌었습니다. JHMI_ALARMLIST는201개 정의를 새로 추가했습니다.

`test0929.csv`는484→43,344행입니다. Shot Align X/Y 42,840개 키가 추가됐고 이 중42,828개가0이 아닙니다. 21,420개 Shot에 대응하는 파생 데이터를 작은 Recipe 본문과 함께 저장하게 된 것입니다. `sample3.csv`는 삭제됐습니다. 다른 Recipe에는 Align Base20개가 추가되지만 모두 같은 Shot Offset 파생값을 가진 것은 아닙니다.

솔루션은 UI/Common/File 3개 프로젝트만 참조하게 바뀌었습니다. 이전 솔루션에 있던 Regression 프로젝트 참조2개는 제거됐고, 해당 csproj는 두 분석 Commit의 추적 파일에서 확인되지 않습니다. 따라서 “실제 테스트 소스2개가 삭제됐다” 또는 “모든 회귀 시험이 성공했다”고 해석하지 않습니다. 근거: [Drilling.sln:1–16](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/e6ff3c6fd8fb706adbff3ded070cca2502000b4d/Drilling.sln#L1-L16).
