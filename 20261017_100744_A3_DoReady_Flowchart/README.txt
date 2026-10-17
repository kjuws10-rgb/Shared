A3 DoReady 가공 SW 시나리오 · 타이밍 기반 흐름도
2026-10-17

Excel의 "DoReady 시나리오" 탭 상단에 흐름도를 추가했습니다.
위에서 아래로 흐름도를 보고, 이어지는 55행부터 기존 상세 1~8단계를 확인합니다.
별도 PNG로도 동일한 흐름도를 볼 수 있습니다.

주요 표시
1~4: Stg/Prc DoReady ABLE과 START의 확인·응답 순서
5: Stage의 Ready 이동과 Prc의 Script·0선방어·MOF 데이터 준비 병행
6: 가공 SW의 준비 완료 → Prc DoReady COMPLETE
7: Prc COMPLETE 확인 AND 실제 Ready 위치 도착 → Stg DoReady COMPLETE
8: Stg COMPLETE 이후 MOF Zero Set → Task 실행 → 8개 Task 모두 실제 동작 확인
   Laser ON과 관련 Precheck 전체 준비도 반드시 완료
다음 Process: 8단계 전체 완료 AND Stg Process ABLE 확인 후 처리
   ABLE이 먼저 오면 실행 준비 완료까지 대기하며, 준비가 먼저 끝나면 ABLE을 기다립니다.

하단 신호 차트는 논리적 ON 순서를 보여줍니다.
실제 시간 간격·OFF 복귀·유지시간·Ready 실제 좌표·Melsec 주소는 확정하지 않았습니다.
Ready는 -120 mm로 고정한 값이 아니라 사용자가 설명한 '-120 mm 가기 전 위치'입니다.
Laser/Precheck의 내부 세부 실행 순서는 설비 정의를 따릅니다.

기존 상세 표와 "평가 체크리스트"는 보존했습니다.
평가 24항목과 Task 8개 기록란의 판정 32칸은 모두 미평가 상태입니다.
실제 장비 시험은 수행하지 않았으며 본 자료의 검증은 문서·파일·표시 정합성 확인입니다.

ZIP 구성: Excel, 흐름도 PNG, 이 README 3개.
이전 버전은 기존 20261017_084558_A3_DoReady 폴더에 보존되어 있습니다.
