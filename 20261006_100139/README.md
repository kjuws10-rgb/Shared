# A3 가공과 검사 구조체 코드 연결

[3장 PowerPoint 내려받기](./A3_LD_구조체와_코드연결_3장.pptx)

첨부한 「A3_LD 가공 및 검사시 구조체 변수 자료」의 내용을 초보자가 이해하기 쉽게 정리했습니다. 각 자료형의 역할, 포함 관계, 실제 코드 위치, 짧은 코드 예시를 함께 볼 수 있습니다.

## 슬라이드 구성

1. **가공 데이터 구조와 코드 위치**: 전체 가공 모델, 헤드별 계획, Shot 목록의 포함 관계
2. **리뷰 계획과 검사 결과**: 전체 검사 위치, 선택한 위치, 실측 결과와 CSV 저장의 관계
3. **보정값 저장과 추가 정리 항목**: 측정 오차의 방향 변환, 기존 보정값과 합산, 레시피 저장과 다음 가공의 연결

슬라이드의 코드 위치를 누르면 해당 원본 코드로 이동합니다. PowerPoint의 발표자 노트에는 전체 필드 목록, 생성·저장 함수, 추가 설명과 Commit에 고정한 근거 링크가 있습니다. 표와 흐름도는 편집할 수 있습니다.

## 첨부 자료에서 보완한 내용

`HeadPlans`, `Shots`, `Points`, `Results`는 여러 항목을 담는 목록입니다. 생성 시각 `CreatedAt`과 저장 시각 `SavedAt`도 포함했습니다. 가공 모델의 선언은 [CStationManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Station/CStationManager.cs#L75-L82), 리뷰 자료의 선언은 [CReviewManager.cs](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewManager.cs#L143-L248)에 있습니다.

리뷰 계획은 기존 `ST_PROCESS_MODEL`을 직접 받아 만드는 대신 레시피와 현재 설정으로 좌표 계획을 다시 계산합니다. `ReviewPoints`는 `Points`에서 `Use=true`인 항목을 고른 계산 속성입니다. [계획 생성 코드](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewManager.cs#L1207-L1271), [선택 목록 코드](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Review/CReviewManager.cs#L203-L225)

실제 보정 화면의 자료형 이름은 `ST_CORRECTION_REVIEW_OFFSET_ROW`입니다. **Apply는 기존 보정값에 이번 계산값을 더하고, Save는 합산값을 레시피에 저장합니다.** 다음 가공의 좌표 계산은 저장한 Review Offset을 읽습니다. [보정 자료 선언](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L2097-L2107), [Apply 합산](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1083-L1121), [Save 저장](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.UI/Menu/Menus/CMenuCorrection.cs#L1200-L1262), [다음 가공에서 읽기](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/a25ba3cdfd70cff5d78172d13ec957318704b1e1/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L156-L161)

추가 정리 항목은 좌표의 원점·단위, Shot 식별자와 순서, 검사 선택·판정 상태, 보정 적용 이력입니다. 구현 변경을 뜻하지 않습니다.

원본 Commit: `a25ba3cdfd70cff5d78172d13ec957318704b1e1` (main)

폴더 시각: 2026년 10월 6일 10시 01분 39초 (Asia/Seoul)

A3 원본 코드와 첨부 PPT는 수정하지 않았습니다. 이 폴더에는 정리 자료만 담았습니다.
