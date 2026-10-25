A3 LD 시나리오 0선 Y Flying 수정본
2026-10-25

이번 사용자 첨부 패치파일을 기준으로 0선 관련 내용만 수정했습니다.
Process 도형 텍스트16개와 평가체크리스트10개 셀을 변경했습니다.
DoReady·일반 Review·Top Powermeter·보호윈도우, 나머지 문구와 사용자 수정,
객체 위치·서식·평가 결과는 첨부 패치 그대로 보존했습니다.

0선 동작
0선 N포인트는 Y Flying 한 번으로 측정합니다. N=4이면 총4개 이미지를 Grab합니다.
IOF_SETTING W8230=10000, IOF_TRIGGER_ZERO_POINT_COUNT W8236=N입니다.
Vision1001 Flying Count도 N입니다. W8300 배열은 [Y1…YN][X1…XN]입니다.
1900 Keep-Alive → 1001 FLYING READY → N개 Trigger/Grab → 1002 → ACK일 때1003.
각 소켓 인터페이스는 전체0선에서 한 번만 진행합니다.
Stage Buffer는 Main Y가 각 Trigger 위치를 통과하기 전에 Review X를 선대기시킵니다.
X선대기·Y Trigger·Grab만 포인트별 반복하며 X이동마다 소켓 시퀀스를 반복하지 않습니다.
1002는 전체 촬영 구간 종료 후 Count=N을 검사합니다. ACK는1003에서 N개 결과를 받습니다.
Count 불일치 NCK는 기존 정책대로 NG 종결하며1003을 기다리지 않습니다.
현재 MOF 가공은 끝까지 진행하고 가공·0선종결 AND 및 별도후속1줄Review는 유지합니다.
일반 Review LINE별 통신·재측정·지그재그는 변경하지 않았습니다.

확인
독립 내용검토와 저장본 재열기·변경화면을 확인했습니다.
XLSX 패키지25개 중23개 part는 원본과 동일 바이트입니다.
변경2개 part에서도 지정 텍스트 외 값·도형·서식·앵커를 대조했습니다.
실제 장비·PLC·Vision 통신 동작시험은 수행하지 않았습니다.
ZIP에는 이 안내와 완성 Excel 두 파일만 들어 있습니다.
