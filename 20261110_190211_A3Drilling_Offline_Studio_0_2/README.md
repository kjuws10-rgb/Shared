# A3Drilling Offline Studio 0.2

인터넷 없는 Windows x64 현장에서 내 A3Drilling 코드와 선택한 자료를 찾아 채팅으로 설명·작은 코드 변경을 돕는 로컬 도구입니다. 모델은 로컬에서 실행하며 수정은 미리보기 후 직접 적용합니다.

- [한글 안내 · 웹에서 미리보기](https://htmlpreview.github.io/?https://github.com/kjuws10-rgb/Shared/blob/main/20261110_190211_A3Drilling_Offline_Studio_0_2/A3Drilling_Offline_Studio_0_2_%EC%95%88%EB%82%B4.html)
- [한글 안내 HTML 다운로드](https://raw.githubusercontent.com/kjuws10-rgb/Shared/main/20261110_190211_A3Drilling_Offline_Studio_0_2/A3Drilling_Offline_Studio_0_2_%EC%95%88%EB%82%B4.html)
- [Windows x64 도구 ZIP 다운로드](https://raw.githubusercontent.com/kjuws10-rgb/Shared/main/20261110_190211_A3Drilling_Offline_Studio_0_2/A3Drilling_Offline_Studio_0_2_Windows_x64.zip)
- [도구 소스 ZIP 다운로드](https://raw.githubusercontent.com/kjuws10-rgb/Shared/main/20261110_190211_A3Drilling_Offline_Studio_0_2/A3Drilling_Offline_Studio_0_2_Source.zip)
- [배포 구성·크기·SHA256](https://raw.githubusercontent.com/kjuws10-rgb/Shared/main/20261110_190211_A3Drilling_Offline_Studio_0_2/release-manifest.json)

웹 미리보기는 외부 HTML 미리보기 서비스를 이용하므로 인터넷이 필요합니다. 현장에서는 안내 HTML을 내려받아 오프라인으로 열 수 있습니다. GitHub 파일 화면에서 ZIP을 미리보기하는 대신 위 다운로드 링크로 저장하세요.

## 처음 시작

1. 도구 ZIP을 폴더에 풀고 `시작하기.cmd`를 엽니다. Visual C++ v14 x64가 없으면 시작 도우미가 여는 Microsoft 설치 창을 완료합니다. 최초 설치에는 관리자 승인이 필요할 수 있습니다.
2. 지원 GGUF를 `Models`에 복사하거나 **모델 넣기**에서 선택합니다. 기준 모델의 공식 고정 버전은 아래 링크에서 받습니다.
3. **전체 `.git`을 포함한 A3Drilling Git 작업 사본**을 선택합니다. 온라인 PC에서는 Git for Windows 설치 후 **업데이트 → 새 코드 준비 → 새 사본 열기**로 만들 수 있습니다.
4. 원하는 일을 채팅으로 요청하고, 근거·변경 미리보기를 확인한 뒤 **이 변경 적용**을 누릅니다. 필요하면 되돌리기를 사용합니다.

다음 실행부터는 준비한 환경에서 바로 채팅할 수 있습니다. HTML은 안내·화면이며 추론은 로컬 실행 앱과 llama.cpp가 담당합니다.

## 공개 묶음의 범위

| 포함 | 별도 준비 |
|---|---|
| 로컬 실행 앱·HTML 화면·시작 도우미 | A3Drilling 장비 프로젝트 코드와 완전한 Git 메타데이터 |
| llama.cpp b11960 CPU 실행기·필요 DLL·라이선스 | GGUF 모델, 개인 문서·과거 Codex 대화·첨부 |
| Microsoft VC++ x64 선행 설치 파일·관련 안내 | 빌드용 .NET SDK·오프라인 패키지 |
| 도구 소스 ZIP | 실제 장비 실행·현장 검수 환경 |

장비 소스, 내부 Context 자료, 모델, SDK, QA 로그·세션은 이 공유 묶음에 넣지 않았습니다. 정확한 포함 파일·크기·해시는 `release-manifest.json`을 기준으로 확인하세요. 기존 비공개 현장용 완성 폴더와는 구성 범위가 다릅니다.

GitHub Download ZIP이나 `.git`을 빼고 복사한 폴더는 현재 도구에서 작업 사본으로 열 수 없습니다. 오프라인 채팅 자체는 git.exe를 요구하지 않지만 `.git/config`, HEAD와 index가 확인되는 정상 Clone이 필요합니다. 다른 위치의 `.git`을 가리키는 worktree만 현장으로 옮기지 마세요.

## 기준 GGUF 모델

- 모델: **Qwen2.5-Coder-7B-Instruct Q4_K_M**
- 크기: **4,683,073,536바이트** (약 4.68GB, 실행 시 문맥·OS 메모리는 별도 필요)
- 라이선스: **Apache-2.0** — [공식 모델 카드](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct-GGUF)
- [공식 고정 버전 GGUF 다운로드](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct-GGUF/resolve/13fb94bfda8c8cf22497dc57b78f391a9acb426a/qwen2.5-coder-7b-instruct-q4_k_m.gguf)
- SHA256: `509287f78cb4d4cf6b3843734733b914b2c158e43e22a7f4bf5e963800894d3c`

모델은 공개 도구 ZIP에 포함되지 않습니다. 모델과 코드·자료를 온라인 PC에서 미리 준비한 뒤 현장으로 반입하세요. 다른 GGUF는 실행기·채팅 형식·메모리 호환성 확인이 필요합니다. CPU를 기준으로 자동 설정하며 GPU 성능을 보장하지 않습니다.

## 지원 기능과 업데이트

현재 기능은 코드·지원 문서 검색, 근거 파일·줄 표시, 로컬 채팅, 코드 변경 미리보기, 직접 적용·백업·되돌리기, 별도 온라인 코드 사본 준비입니다. SDK·패키지를 사용자가 갖춘 경우 빌드 검사도 할 수 있습니다. 원격 Git 자동 Push는 하지 않습니다.

**코드·자료 색인 갱신**, **GGUF 모델 교체**, **가중치 재학습**은 서로 다릅니다. 앞의 두 가지를 제공하며 LoRA 등 가중치 재학습은 아직 구현하지 않았습니다. 기존 Codex 대화·모든 첨부를 자동으로 가져오지 않습니다. PDF·스캔 이미지는 필요한 내용을 텍스트/지원 문서로 준비해야 합니다.

A3Drilling 분석 기준은 `master`의 `a1162209220fd31caa68cbf82b5a98db9588af39`입니다. 기존 코드의 `Common.Log / CLogManager` 누락 19개 빌드 오류는 이번 작업에서 수정하지 않았습니다. 도구 검증과 실제 장비 앱·모션 검수는 별개입니다. 자세한 개발 검증 결과와 한계는 한글 안내를 참고하세요.

## 현장 사용 시

작은 코드 수정부터 요청하고 근거·미리보기를 확인한 뒤 빌드와 필요한 검사를 진행하세요. 모델 답변은 틀릴 수 있으며 여러 통신·시퀀스·좌표계가 동시에 바뀌는 요청은 나누어 검토하는 편이 적합합니다. 도구 EXE는 서명되지 않은 초안입니다. 현장 보안·실행 정책과 최초 VC++ 설치 가능 여부를 확인하세요.

사용 중 추가한 모델·설정은 로컬 앱 데이터에도 저장됩니다. 나중에 다른 PC로 옮길 때 활성 작업 사본·추가 자료·GGUF를 함께 준비해야 하며 사용자 변경을 자동으로 새 반입 폴더로 내보내지는 않습니다.

2026-11-10 · 원본 장비 저장소의 파일을 수정하지 않고 도구와 안내 자료만 공유합니다.
