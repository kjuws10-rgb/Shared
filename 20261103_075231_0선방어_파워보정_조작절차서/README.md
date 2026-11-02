# A3 LD 0선방어·파워보정 조작절차서

MELSEC 실제 연결판과 Simulator판을 별도 파일로 작성했습니다. 인터넷 없이 HTML을 열 수 있으며 인쇄/PDF 저장 버튼이 있습니다.

- [실제 MELSEC 연결판](MELSEC_REAL_조작절차서.html): 실통신 준비·수신 확인, 현재 0선 실행 제한, 가상 파워 조작·별도 실 센서 읽기.
- [MELSEC Simulator판](Simulator_조작절차서.html): Recipe/Run Option → 선대기 → DoReady/Process ON/OFF → 자동·수동구간 시험 → 결과 → 가상 파워 → 종료.
- [편집용 통합 Markdown](A3_LD_0선방어_파워보정_조작절차서.md).

기준 원본: [8872e4ed](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/commit/8872e4ed5176b5d8a39f1711af9501f6fac94deb) / 확인일 2026-11-03 KST.

주의: 해당 버전의 11/02 별도 Release 빌드는 로그 소스 누락으로 오류19·경고0이었고 이번에는 재빌드하지 않았습니다. 복구된 동일 버전 실행본 확보 후 평가용 절차안입니다. 실제 MELSEC 전체 0선은 촬영구간 완료 계약 미정으로 차단되며, 차단 이전 첫 Review X 실축 이동 경로는 존재합니다. Manual PowerMeasure는 두 모드 모두 가상 측정으로 실파워 보정/TPM 완료가 아닙니다. 실제 앱·장치·레이저 실행이나 코드 수정은 하지 않았습니다.

검증: 0선·파워·모드 3역할 소스 대조, 고정 Commit의 파일/줄 범위 확인, HTML 표시·링크·인쇄 검수. 화면 안내도는 소스 기반 재구성으로 실제 캡처가 아닙니다. 개인 지식 작업실·QA 파일은 공유하지 않습니다. 다운로드 후 manifest.json의 SHA256으로 파일 일치 여부를 확인할 수 있습니다.
