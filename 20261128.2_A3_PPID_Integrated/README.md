# PPID 파라미터 설명자료 · 11.28.2

[통합 SVG](A3_PPID_Integrated_11.28.2.svg) · [미리보기 PNG](A3_PPID_Integrated_11.28.2.png)

두 그림을 하나로 합쳤습니다. 위치 설명은 1·2·3으로 정리하고, 좌표 계산은 **설계 Shot → Head 선택 → 해당 Head 기준 Scanner / 선택 Beam의 Review** 네 단계로 줄였습니다.

예시에서 `D=(120.95,20.55)`는 Head #2 구간에 들어갑니다. 해당 Head의 환산 X=120, Y=380을 사용하면 Scanner=(0.95,20.55), Beam11의 Review 축 목표는 (221,179.40)입니다. Align Key 기준으로 환산한 예시이며, Shot 행·열은 0부터 시작합니다. Head Y는 개별 설정이 우선이고, 없으면 홀수/짝수 Head의 Y 기준과 HeadGapY를 사용합니다. 후보가 겹치면 중심 거리→배정 Shot 수→Head 번호 순이며, 범위 밖이면 미배정입니다. 그림의 Head는 모두 사용 ON입니다.

기준: A3Drilling/master `0219666f9053b907d96d7e0aa7d0c6c1be3a73d4`.

- [설계 좌표](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Recipe/CCellPatternCalculator.cs#L139-L189)
- [Head 선택·X/Y 기준](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L376-L474)
- [Scanner 계산](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Recipe/CShotCoordinatePlanBuilder.cs#L53-L158)
- [Review의 Head 연결](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L697-L756)
- [Beam·Review 목표 계산](https://github.com/kjuws10-rgb/A3Drilling/blob/0219666f9053b907d96d7e0aa7d0c6c1be3a73d4/Drilling.Common/Review/CReviewManager.cs#L958-L1021)

소스·그림·예시 산술을 교차검수했습니다. 원본 코드·설정 변경과 장비 실행은 없습니다.
