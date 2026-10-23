A3 가공SW 시나리오 평가 Flow 반영본
2026-10-23

첨부 시나리오 평가 Excel의 복사본입니다. 첨부 Flowchart와 Stage 기능리스트를 대조했습니다.

반영 내용
1. 0선 ON에서 Prc Process ABLE(W8208)과 Prc_IOF_StartRequest를 함께 ON.
   Buffer 실행 완료→Stg_IOF_Complete ON→Prc_IOF_CompleteReponse ON→Stg OFF→Prc 응답·요청 OFF.
2. 1002 Count 일치 ACK / 불일치 NCK. 0선 NCK는 실패 기록 후 다음 X,
   일반 Review NCK는 1003 없이 현재 끝점에서 동일 LINE 역방향 재측정.
   정상 0선은 사용자가 수정한 첨부 Process 기준인 1003 결과 후 다음 X를 유지.
3. 관련 Review / Process Move / IOF / Full Review IOF / 평가 항목 정합성 수정.
   첫 Buffer·Vision Ready는 MOF 출발 전, 후속 LINE은 가공과 병행.
4. Default Offset 탭 삭제. 해당 통합 평가 4항목은 탭 삭제 요청 범위에 따라 유지.
5. Process 완료 전 다음 기판 ATT Config 사용조건 도달 예상 OR 보호윈도 사용매수 도달이면 교체 요청 Flag ON.
   기존 수동 교체 요청과 가공 전 한계 확인은 유지. OFF이면 Stage가 TPM 측정 요청.
6. 0선 NG이면 완료 전에 1줄 Review Flag를 ON. Home 복귀 대신 후속 IOF Review 1줄 검사.
   1줄은 여러 X 측정점을 포함하며 기존 Fine 설명과 측정점 그림은 유지.

통합 평가63항목 / Full Review 평가25항목. 기존 평가 결과·증거 입력186셀과 도형 서식을 보존했습니다.
DoReady의 관련 조건1개, Top Powermeter의 교체 참조1개만 종속 수정했습니다.
원본3개·생산SW·과거 공유본은 변경하지 않았습니다. 틀고정이 없으며 모든 흐름은 편집 가능한 Excel 객체입니다.

검증: 구조·보존158검사PASS, 변경 문구 넘침0, 3개 보조 에이전트 내용 검토,
저장본 재읽기·평가표3범위 렌더·원본 OOXML 좌표 기반 도형 미리보기를 확인했습니다.
실제 Excel 데스크톱 표시와 PLC/Vision/축/가공 동작은 시험하지 않았습니다.

별도 확인할 사항: 두 Flag 동시 ON의 실행 우선순위, 신규 Flag 주소·복귀 계약,
ATT 예측식·Config 판정기준. Stage 원본 rawIofMove의 응답 선행 타이밍 모순은 원본에 남겨두었습니다.

ZIP에는 동일 Excel과 이 안내문만 포함됩니다.
