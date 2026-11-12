# Commit 변경 요약

비교는 같은 A3Drilling 저장소의 **a116220 → 5aee8e5**입니다. 다른 IPS 저장소의 날짜가 더 최신이어도 기준으로 사용하지 않습니다.

| 항목 | 값 |
| --- | --- |
| Commit | [5aee8e58439c](https://github.com/kjuws10-rgb/A3Drilling/commit/5aee8e58439c9b455cae7c9593c9be986c3e682e) |
| 부모 | a1162209220fd31caa68cbf82b5a98db9588af39 |
| 제목 | A3_LD_11.10.0 버전 업데이트 |
| Commit 시각 | 2026-11-11 20:04:12 +09:00 |
| 실제 비교 | [원본 diff](https://github.com/kjuws10-rgb/A3Drilling/compare/a1162209220fd31caa68cbf82b5a98db9588af39...5aee8e58439c9b455cae7c9593c9be986c3e682e) |

## 변경량을 읽는 방법

총191경로 중 코드·XAML·프로젝트는23경로입니다. 나머지에는 큰 Recipe 값 변경, Review Offset·재검사 결과·Default 평가 CSV·생성 Script가 포함됩니다. +390,984줄을 새 로직의 양으로 해석하면 안 됩니다. 완전한 경로별 목록은 [changed-files.csv](changed-files.csv), 전체 현재 파일은 [source-inventory.csv](source-inventory.csv)입니다.

| 상위 폴더 | 변경 경로 수 |
| --- | --- |
| Config | 19 |
| Data | 149 |
| Drilling.Common | 4 |
| Drilling.File | 4 |
| Drilling.UI | 15 |

## 로직이 바뀐 파일

| 경로 | 추가·삭제 줄 |
| --- | --- |
| `Drilling.Common/Review/CAutoFineReviewCoordinator.cs` | +27 / −2 |
| `Drilling.Common/Review/CReviewManager.cs` | +179 / −17 |
| `Drilling.Common/Station/CStationManager.cs` | +1 / −0 |
| `Drilling.Common/Station/CStationProcess.cs` | +95 / −2 |
| `Drilling.File/JHMI/CJhmiRecipeFile.cs` | +28 / −3 |
| `Drilling.File/Parser/CCsvParser.cs` | +51 / −0 |
| `Drilling.File/ReviewOffset/CReviewOffsetFile.cs` | +429 / −14 |
| `Drilling.File/ReviewResult/CReviewResultFile.cs` | +291 / −9 |
| `Drilling.UI/CRootView.cs` | +16 / −1 |
| `Drilling.UI/Drilling.UI.csproj` | +1 / −1 |
| `Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Display.cs` | +114 / −25 |
| `Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Offset.cs` | +7 / −1 |
| `Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.Reinspection.cs` | +990 / −0 |
| `Drilling.UI/Menu/Menus/CMenuCorrection.ReviewData.cs` | +65 / −3 |
| `Drilling.UI/Menu/Menus/CMenuCorrection.cs` | +325 / −18 |
| `Drilling.UI/Menu/Menus/CMenuReview.cs` | +30 / −9 |
| `Drilling.UI/Menu/Menus/CMonitorLogViewerPanel.cs` | +19 / −2 |
| `Drilling.UI/Popup/CRecipeConfirmDialog.xaml.cs` | +20 / −0 |
| `Drilling.UI/Popup/CReviewShiftOffsetDialog.xaml` | +111 / −0 |
| `Drilling.UI/Popup/CReviewShiftOffsetDialog.xaml.cs` | +54 / −0 |
| `Drilling.UI/Views/CMonitorLogViewerView.xaml` | +31 / −0 |
| `Drilling.UI/Views/CReviewDataView.xaml` | +459 / −17 |
| `Drilling.UI/Views/CReviewDataView.xaml.cs` | +56 / −0 |

## 구조상 의미

- `Drilling.UI`는 재검사 목록과 카메라 피드백·Shift 선택창·로그 로딩 진행률을 제공합니다.
- `Drilling.Common`은 Review Plan의 Shift 값을 보유하고 수동 MOF 성공 이력을 노출합니다. 장치 인터페이스 자체의 전면 교체는 없습니다.
- `Drilling.File`은 결과 Revision 저장과 보정 적용 이력·엄격한 Offset 로드를 담당합니다.
- Recipe/JHMI 정의 전체가 교체된 것은 아닙니다. JHMI_RCP·Head 배정·Masking·Sampling builder의 핵심 구조는 그대로입니다. [영향 분석](03_가공Review영향분석.md)을 함께 봅니다.

표시 버전 근거: [Drilling.UI.csproj:17](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.UI/Drilling.UI.csproj#L17-L25). 기본 통신 파일 선택은 여전히 [CInterfaceFile.cs:95](https://github.com/kjuws10-rgb/A3Drilling/blob/5aee8e58439c9b455cae7c9593c9be986c3e682e/Drilling.File/JHMI/CInterfaceFile.cs#L95-L109)의 `JHMI_INTERFACE.csv`입니다. 새 `_SIMUL.csv` 파일이 있다는 사실만으로 자동 모드 선택이 된다고 볼 수 없습니다.
