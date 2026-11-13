# A3 Pi Studio 0.5 · 자동 준비형 오프라인 채팅 개발

A3Drilling용 Git 준비·모델 연결/다운로드·코드와 자료 검색·기준 빌드 점검을 자동으로 진행합니다.

## 다운로드

- [전체 Windows x64 실행 ZIP · 약495MB](https://github.com/kjuws10-rgb/Shared/releases/download/a3-pi-studio-v0.5.0-20261113/A3_Pi_Studio_0_5_Windows_x64.zip)
- [설치·사용법 HTML](https://github.com/kjuws10-rgb/Shared/releases/download/a3-pi-studio-v0.5.0-20261113/Installation_Guide.html)
- [수정된 도구 소스 ZIP](https://github.com/kjuws10-rgb/Shared/releases/download/a3-pi-studio-v0.5.0-20261113/A3_Pi_Studio_0_5_Source.zip)
- [검증 요약](Verification_Summary.md) · [무결성 확인](SHA256SUMS.txt) · [전체 Release](https://github.com/kjuws10-rgb/Shared/releases/tag/a3-pi-studio-v0.5.0-20261113)

## 사용 순서

1. 전체 실행 ZIP을 압축 해제하고 인터넷이 되는 곳에서 `A3_Pi_Studio_0_5/App/Setup-A3.cmd`를 실행합니다.
2. 이후 같은 Windows 사용자·PC로 현장에 들어가 `App/시작하기.cmd`를 실행합니다. 다른 노트북도 반입 전에 이 준비를 완료하세요.
3. 원하는 기능을 자연어로 요청한 뒤 `적용해줘`, `적용하고 빌드해줘`, `되돌려줘`를 입력합니다.

모델이 없으면 기본 Qwen3-8B Q4_K_M 약5GB를 자동으로 받습니다. 기존 작업 폴더와 모델은 우선 재사용하고, 수정 전 전체 프로젝트 백업과 원본 충돌 검사를 수행합니다. 최초 VC++ 구성 요소가 없는 PC에서는 Windows 설치 승인 단계가 필요할 수 있습니다.

## 범위와 검증

- 에이전트3명 교차검증과 실제 A3·8B HTTP 흐름15/15, Pi41/41·통합52/52·UI45/45를 확인했습니다. 단일 파일 읽기의 값과 행번호 대조를 일반 코드 생성 정확도로 확대하지 않습니다.
- A3 원본의 기존 `Drilling.Common.Log`/`CLogManager` 관련 빌드19오류는 별도 경고로 표시합니다.
- 지식·스타일 갱신과 가중치 학습은 다릅니다. 실제 대형 A3 가중치 학습·Codex 동급·실장비·새 물리 노트북 전체 설치는 검증 범위 밖입니다.
- 원본 A3 Git을 변경하지 않았습니다. 실행 ZIP에는 장비 소스·내부 Context·모델 가중치·사용자 상태·QA 원문이 없습니다.

앱 소스 버전: `7e0cf70c5ae71d178d799d0a75ee407db2d13deb` / 제공 Source ZIP 안에 포함된 로컬 소스 Commit이며 앱 원격에 Push하지 않았습니다. 대상 입력: `A3Drilling/master`의 `5aee8e58439c9b455cae7c9593c9be986c3e682e`.

Shared README는 다운로드 안내이고 SHA256SUMS는 Release 첨부 파일의 ASCII 이름을 기준으로 합니다. ZIP 안의 한글 가이드와 Release의 Installation_Guide.html은 동일한 바이트입니다.

공유 시점의 외부 검증 요약만 저장소 범위 표현을 명확히 했으며, 실행 ZIP과 소스 ZIP은 제작 완료 당시와 같은 바이트다.
