# A3 Offline Agent · RTX 5050 · 0.8.0 Preview

RTX 5050 / 전용 VRAM 8GB / RAM 32GB에 맞춘 **VS Code·Cline 기반 오프라인 코딩 환경 평가판**입니다. Qwen3-Coder-30B-A3B Q4_K_M을 RAM과 GPU에 나누어 적재하는 후보 구성을 사용합니다.

**실제 RTX 5050의 추론 속도와 A3 코드 개발 정확도는 아직 검증하지 않았습니다.** 준비 PC의 파일·호스트 검사를 모델 개발 합격으로 표시하지 않습니다.

## 다운로드

- [실행 ZIP — 약 1.11GB](https://github.com/kjuws10-rgb/Shared/releases/download/a3-offline-agent-rtx5050-v0.8.0-preview-20261114/A3_Offline_Agent_RTX5050_0.8.0-preview.zip)
- [설치·사용법 HTML](https://github.com/kjuws10-rgb/Shared/releases/download/a3-offline-agent-rtx5050-v0.8.0-preview-20261114/Installation_Guide.html) — 내려받은 뒤 브라우저로 여세요.
- [수정된 도구 소스 ZIP](https://github.com/kjuws10-rgb/Shared/releases/download/a3-offline-agent-rtx5050-v0.8.0-preview-20261114/A3_Offline_Agent_Source_0.8.0-preview.zip)
- [공개 검증 요약](https://github.com/kjuws10-rgb/Shared/releases/download/a3-offline-agent-rtx5050-v0.8.0-preview-20261114/Validation_Summary.json) · [릴리스 목록](https://github.com/kjuws10-rgb/Shared/releases/download/a3-offline-agent-rtx5050-v0.8.0-preview-20261114/Release_Manifest.json) · [SHA256 체크섬](https://github.com/kjuws10-rgb/Shared/releases/download/a3-offline-agent-rtx5050-v0.8.0-preview-20261114/SHA256SUMS.txt)

## 시작하기

1. 실행 ZIP을 짧은 로컬 경로에 압축 해제하고, 인터넷이 되는 곳에서 `1_Initial_Setup_5050.cmd`를 실행합니다.
2. 모델·Editor·A3 작업 사본 준비가 끝나면 오프라인에서는 `Start_5050.cmd`로 전용 VS Code를 시작합니다.
3. **A3 개발 시작**에서 자연어로 기능을 요청하고 실제 변경 파일·빌드 결과를 확인합니다. 코드 수정 전 전체 프로젝트 백업을 검증하는 절차를 사용합니다.

모델 가중치는 ZIP에 포함하지 않습니다. 최초 명시적 온라인 준비에서 약 **18.6GB**를 별도로 다운로드합니다. 모델·실행 소프트웨어 준비용 여유 공간은 40GB 이상을 권장하며 프로젝트와 전체 백업 공간은 별도입니다. 비공개 저장소라면 최초 Git 접근 권한이 필요합니다. 필요한 Microsoft 실행 라이브러리의 설치 권한·설치 창은 사용자가 확인합니다.

다른 PC에서 파일만 준비할 때는 `Prepare_Only_5050.cmd`를 사용합니다. 개인 실행 상태·경로를 그대로 옮기지 않는 절차는 HTML 사용법을 따르세요. 세부 모델 주소·API key·GPU 수치를 직접 편집할 필요가 없도록 구성했습니다.

## 검증 범위

- 기존 준비/계획/런타임/다운로드 Node 검사 **164/164**, Windows PowerShell5.1 준비 wrapper **39/39** 통과. 이후 메시지 변경 부분14개 재검사는 중복 합산하지 않습니다.
- 실제 모델 파일 SHA·공식 실행기·별도 코드 사본 준비와 PrepareOnly 실행을 확인했습니다. 현재 준비 PC는 16GB RAM/920MX이며 현장 노트북과 다릅니다.
- ZIP 전체 CRC·내부 파일 SHA·공개 제외·소스 기준 대조와 독립 ZIP SHA 검사를 완료했습니다.
- 별도 generic 호스트 검사 라이브러리는 Cline UI의 자동 합격 판정에 연결되어 있지 않습니다. 수작업 C# fixture39 assertion을 실제 LLM 개발 합격으로 세지 않습니다.
- 실제 대상 GPU 기동·30B 추론·다중 파일 A3 개발·GUI 조작·전체 A3 빌드·설비 동작은 검증 완료 범위가 아닙니다. 전체 폴더 자동 복원 UI/CLI는 제공하지 않습니다. 가중치 재학습과 Codex 동급 정확도도 확인하지 않았습니다.

## 배포 기준

앱 소스 기준 Commit: `afe8bb449c1ae58f0d68e003b3672994e107c142` — 제공한 source ZIP의 기준입니다. A3 분석 입력 기준: `5aee8e58439c9b455cae7c9593c9be986c3e682e`. 이번 공유는 기존 제작 파일의 바이트를 유지한 게시 작업이며 새로운 모델 성능 시험이 아닙니다.

실행 ZIP은 모델·Microsoft Editor·장비 원본 코드·개인 자료·세션·백업·VC++ 설치 파일을 포함하지 않습니다. 공식 실행기/SDK와 라이선스 안내는 ZIP에 보존되어 있습니다. 최초 명시적 준비에서 필요한 공식 파일을 받습니다. 원본 A3 저장소와 기존 Pi/0.7 배포를 변경하지 않았습니다.
