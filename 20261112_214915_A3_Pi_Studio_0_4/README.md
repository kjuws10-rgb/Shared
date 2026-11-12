# A3 Pi Studio 0.4 · Windows x64

[설치·사용법 HTML](A3_Pi_Studio_0_4_설치_사용법.html)을 먼저 여세요.

1. 도구 ZIP을 압축 해제합니다. App 전체 폴더를 보존합니다.
2. 기존 0.3의 GGUF를 App/Models에 복사하거나 인터넷 되는 PC에서 App/Prepare-FieldModel.cmd를 실행합니다.
3. App 전체와 승인된 A3Drilling Git 작업 사본·자료를 다른 노트북으로 옮깁니다.
4. 기존 앱은 트레이에서 종료하고 App/시작하기.cmd → 프로젝트 선택 → 자료 추가 → A3 업데이트 → 채팅 순서로 사용합니다.

도구 ZIP은 Pi SDK/Node, llama.cpp CPU 실행기, 자체포함 .NET 앱, 오프라인 SDK/feed, VC++ 준비파일과 라이선스를 포함합니다. 모델 가중치·A3 장비 소스·내부 자료·사용자 상태는 포함하지 않습니다. 일반 채팅에 Python·Node·npm 별도 설치나 온라인 API 키는 필요하지 않습니다.

- [실행 ZIP](https://github.com/kjuws10-rgb/Shared/releases/download/a3-pi-studio-v0.4.0-20261112/A3_Pi_Studio_0_4_Windows_x64.zip)
- [도구 소스 ZIP](https://github.com/kjuws10-rgb/Shared/releases/download/a3-pi-studio-v0.4.0-20261112/A3_Pi_Studio_0_4_Source.zip)
- [전체 배포 자료](https://github.com/kjuws10-rgb/Shared/releases/tag/a3-pi-studio-v0.4.0-20261112)
- [검증 요약](검증_요약.md) · [파일 해시](SHA256SUMS.txt) · [배포 manifest](https://github.com/kjuws10-rgb/Shared/releases/download/a3-pi-studio-v0.4.0-20261112/release-manifest.json)

기본 모델은 Qwen3-8B Q4_K_M입니다. 준비 도우미는 Hugging Face의 고정 revision·크기·SHA256으로 확인해 반입 가능한 Models 파일을 만듭니다. 앱의 다운로드 캐시는 PC별 사용자 폴더이므로 다른 노트북에는 GGUF를 별도로 포함해 옮겨야 합니다. 8B는 RAM16GB 이상(32GB 권장), 도구·모델용 여유25GB와 별도 프로젝트 백업 공간을 계획하세요. 다른 물리 노트북의 성능은 별도 확인 대상입니다.

공식 Pi 1.5.2의 실제 코딩 에이전트 루프를 사용하고, 앱이 검증하는 search/read/propose/review만 제공합니다. 변경은 SHA·미리보기·프로젝트 전체 백업 후 명시적 적용·충돌 원복 경로를 따릅니다. 기본 오프라인 잠금이며 모델 다운로드와 Git 준비는 명시적인 온라인 준비에서만 수행합니다. 채팅 추론은 로컬 loopback입니다.

A3 업데이트는 코드·자료·스타일·적용 사례와 학습용 데이터 갱신입니다. 실제 LoRA 학습은 별도 버튼과 별도 준비 환경을 사용합니다. 이번 배포는 대형 A3 모델을 새로 학습한 결과나 Codex 동급 정확도·전체 A3 빌드·실장비 검수 합격을 의미하지 않습니다.

앱 소스 기준: `f626747800386b8d5d0111a802f6a54f37769518` / 로컬 `codex/pi-offline-studio-04`. 이 배포에 해당 도구 소스 ZIP을 함께 제공합니다. 생산 A3Drilling 및 기존 0.3 폴더를 수정하거나 원격 Push하지 않았습니다.

출처: [공식 Pi](https://github.com/earendil-works/pi/tree/v1.5.2), [SDK 문서](https://github.com/earendil-works/pi/blob/v1.5.2/packages/coding-agent/docs/sdk.md), [기본 GGUF 고정 revision](https://huggingface.co/Qwen/Qwen3-8B-GGUF/tree/7c41481f57cb95916b40956ab2f0b139b296d974). 각 구성요소의 별도 라이선스는 App/licenses, App/PiRuntime 및 toolchain에 보존합니다.

실제 A3Drilling5aee 검증Clone에서4K Auto/8B로 코딩23검사와 독립경계2,518개를 통과했습니다. [실제 A3 검증](A3_실제프로젝트_검증.md)을 함께 확인하세요. 전체 A3 빌드는 기존 Log 누락19오류로 별도 해결이 필요하며, 현재 PC의 수정 요청은 약5분이었습니다.

이 Shared 폴더의 README는 링크 안내용이며, SHA256SUMS.txt는 Release 첨부 파일을 기준으로 합니다.
