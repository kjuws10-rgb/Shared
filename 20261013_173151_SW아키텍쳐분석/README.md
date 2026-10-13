# A3 LD 요구기능 검증 체크시트 코드 분석

첨부 원본의 서식을 유지한 복사본에서 295개 항목의 상세내용 열 I3:I297을 작성했습니다. 셀에는 핵심 판정과 설명을 넣고, 셀 링크를 누르면 해당 번호의 전체 설명·짧은 코드·최신 Commit 고정 소스·관련 화면·남은 검증을 볼 수 있습니다. 기존 진행현황 H열과 개발/검증 완료·날짜·검수자·비고는 바꾸지 않았습니다.

## 분석 기준

- 원본 저장소: https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS
- 원본 Commit: `0c501c104dec1cebab87bd909de29b1b1395a8b4`
- 분석 시각: 2026년 10월 13일 Asia/Seoul
- 참고 범위: 사용자 첨부 체크시트, 현재 Git main 스냅샷, ChatGPT 프로젝트 A3 Laser Driller 가공 SW 개발의 세부개발항목 정리 대화
- 현장 장비 검수 완료를 판정한 자료가 아니라 코드 대조 자료입니다.

## 파일 열기

- [엑셀 작성본](A3_LD_요구기능검증_코드분석작성본.xlsx)
- [검색 가능한 상세 자료](항목별_상세근거.html) — 내려받은 폴더 안에서 브라우저로 열면 번호·기능·소스 이름 검색과 화면 확대가 가능합니다. GitHub에서는 HTML을 다운로드해서 열어야 합니다.
- [프로그램 구조와 파일 연결](07_프로그램구조와파일연결.md)
- [자동 가공 1부터 56](01_자동가공_상세근거.md)
- [수동 기능 57부터 120](02_수동기능_상세근거.md)
- [레시피와 좌표 121부터 165](03_레시피좌표_상세근거.md)
- [리뷰와 보정 166부터 211](04_리뷰보정_상세근거.md)
- [제어권과 레시피 매칭 212부터 235](05_제어권매칭_상세근거.md)
- [설정과 모니터 236부터 295](06_설정모니터_상세근거.md)
- [검증 기록](08_검증기록.md)

## 현재 코드 대조 결과

| 구분 | 수 | 의미 |
|---|---:|---|
| 코드 구현 확인 | 90 | 요구 기능의 핵심 실행·계산·저장 경로를 확인함. 실물 통과 판정은 아님 |
| 부분 구현 또는 사양 차이 | 147 | 일부 코드가 있으나 하부 연결·세부 검수 조건이 남거나 구형 사양과 달라짐 |
| 현재 코드에서 미확인 | 58 | 전용 실행·저장·핸드셰이크 경로를 확인하지 못함. 외부 PLC/CIM 프로그램까지 없다고 단정한 것은 아님 |

모든 결과는 I열에서만 추가했고 기존 완료 표시를 코드 판정으로 덮어쓰지 않았습니다. 구형 A3200/PGM/INI/TEG/특수값 7777·8888·9999 용어와 현행 C# Automation1/AeroScript/CSV/Enum 구조를 일대일로 같다고 처리하지 않았습니다.

## 우선 확인해야 하는 안전 및 연결 항목

| 중요도 | 발견 사항 | 근거 |
|---|---|---|
| 높음 | Review 이동 함수가 실제 명령을 보내지 않는 TODO임. 검사 순서와 비전 요청이 있어도 도착 검증 완료가 아님 | [Drilling.Common/Review/CReviewManager.cs L1940–L1988](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.Common/Review/CReviewManager.cs#L1940-L1988) |
| 높음 | 자동 PowerCheck와 Inspection은 예약 로그. 수동 Monitor Tune·Review 화면과 구분 필요 | [Drilling.Common/Station/CStationProcess.cs L1622–L1636](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.Common/Station/CStationProcess.cs#L1622-L1636) |
| 높음 | RunProcessStep에서 MoveStageToScanStart 호출이 주석 처리됨. Scanner Script 동작과 Stage 동기 완료를 구분해야 함 | [Drilling.Common/Station/CStationProcess.cs L1059–L1070](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.Common/Station/CStationProcess.cs#L1059-L1070) |
| 높음 | NG 측정값도 보정 투영 및 계산 입력에 포함될 수 있고 Apply에는 NG 전부 차단/보정량 상한 전용 검사가 명확히 보이지 않음. 안전 기준 합의·시험 필요 | [Drilling.Common/Review/CReviewManager.cs L1613–L1689](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.Common/Review/CReviewManager.cs#L1613-L1689) · [Drilling.UI/Menu/Menus/CMenuCorrection.cs L1007–L1154](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1007-L1154) |
| 높음 | 수동 Stage 이동은 위치 WriteDouble까지. 속도 맵 미적용, Stage Stop/Home은 UI only 메시지임 | [Drilling.UI/Menu/Menus/CMenuManual.cs L1248–L1335](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.UI/Menu/Menus/CMenuManual.cs#L1248-L1335) |
| 높음 | Manual 출사·Monitor Tune의 모든 Door/MaintZ/Stage/Window 인터록 연결을 따로 검증해야 함. AutoRun 차단과 동일하지 않음 | [Drilling.UI/Menu/Menus/CMenuManual.cs L3433–L3460](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.UI/Menu/Menus/CMenuManual.cs#L3433-L3460) · [Drilling.UI/Menu/Menus/CMenuMonitor.cs L3497–L3646](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.UI/Menu/Menus/CMenuMonitor.cs#L3497-L3646) · [Drilling.Common/InterLock/CInterLockManager.cs L34–L85](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.Common/InterLock/CInterLockManager.cs#L34-L85) |
| 중간 | APC/ICR·ZeroDefense 탭의 고정 예시 자료를 실제 자동 기능으로 해석하면 안 됨 | [Drilling.UI/Menu/Menus/CMenuCorrection.cs L1958–L1972](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1958-L1972) |
| 중간 | Scanner 상태 폴링은 1초, 체크시트의 100 ms와 다름 | [Drilling.UI/Menu/Menus/CScannerStatusPollingService.cs L9–L56](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.UI/Menu/Menus/CScannerStatusPollingService.cs#L9-L56) |
| 중간 | 가공 통계에 고정 경과시간/진행 수치가 쓰이는 부분이 있음. 생산 Tact 실측 자료가 아님 | [Drilling.Common/Station/CStationProcess.cs L1634–L1664](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.Common/Station/CStationProcess.cs#L1634-L1664) |
| 중간 | 전체 솔루션에서 두 Regression 프로젝트 파일이 누락됨. UI 프로젝트 직접 빌드는 성공 | [Drilling.sln](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/0c501c104dec1cebab87bd909de29b1b1395a8b4/Drilling.sln) |

## 새로 확인된 구현

Manual Laser On의 Repeat Count/Delay가 최신 코드에 존재합니다. 체크시트의 이전 미완료 설명과 구분해 항목 254에 기록했습니다. ATT 이동은 Setting SW Limit 및 송신 3자리 목표까지 검사합니다. Review 결과와 선택 Recipe·Head·ShotKey가 맞는지 확인하고, Flip 변경 시 다시 계산하도록 하는 보정 안전 검사도 있습니다. 다만 이것들이 NG 보정 전부 차단이나 장비 전체 인터록 검증을 대신하지는 않습니다.

## 화면 자료의 해석

[screens 폴더](screens)에 16개 PNG가 있습니다. 최신 소스를 별도 검증 Clone에서 빌드하고 실제 WPF XAML 및 ViewModel을 simulationMode true로 렌더링했습니다. 일반 CAppStartup 실행은 피했고 Process Start·Laser·Move·Home·Power Tune 버튼은 실행하지 않았습니다. 화면에 보이는 상태·위치·파워는 Simulation 또는 원본 예시 자료로 실제 장비에서 검증된 숫자가 아닙니다. 기본 Main·Manual·Recipe·Review·Correction·Setting·Monitor·Alarm·PM과 Recipe Cell/Head·Review Sample·PowerMeter/ATT/MELSEC/좌표 Viewer를 포함합니다.

## 보존 범위

첨부 원본과 소스 저장소는 수정하지 않았습니다. Excel styles.xml, 열 너비, 행 높이, 병합, 시트명, 시트 수, 기존 셀 및 완료 상태는 원본과 비교합니다. 이미지나 추가 시트를 엑셀 안에 삽입하면 원본 레이아웃이 달라지므로 관련 이미지·긴 설명은 I열 링크로 연결했습니다. 이 폴더명은 코드 아키텍처 분석과 체크시트 검증에 맞춰 날짜시간 뒤에 SW아키텍쳐분석을 붙였습니다.
