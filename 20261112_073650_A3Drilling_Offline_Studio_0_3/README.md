# A3 Offline Studio 0.3 모델 포함 배포

[실행 묶음 다운로드](https://github.com/kjuws10-rgb/Shared/releases/tag/a3-offline-studio-v0.3.0-20261112) · [사용법 HTML](시작_안내.html) · [도구 소스 ZIP](https://github.com/kjuws10-rgb/Shared/releases/download/a3-offline-studio-v0.3.0-20261112/A3_Offline_Studio_0_3_Source.zip) · [합치기 도우미 ZIP](https://github.com/kjuws10-rgb/Shared/releases/download/a3-offline-studio-v0.3.0-20261112/A3_0_3_Join_Helper.zip)

1. Release에서 `Public_Ready.zip.part01`·`part02`·`part03`와 합치기 도우미 ZIP을 받습니다.
2. 도우미 ZIP을 푼 폴더에 조각3개를 함께 넣고 `합치기.cmd`를 실행합니다.
3. 검증 후 완성 ZIP을 압축 해제하고 `App/시작하기.cmd`를 실행합니다.
4. 실제 수정할 A3Drilling 전체 Git 프로젝트를 선택하고 자료 추가→A3 업데이트→채팅을 진행합니다.

Release에서 도우미는 **A3_0_3_Join_Helper.zip**, 안내 HTML은 **Start-Guide.html**이라는 영문 파일명으로 저장됩니다. 화면의 한글 표시명은 각각 합치기도우미·시작 안내입니다. ZIP 안의 `합치기.cmd`와 `App/시작하기.cmd`는 그대로 사용합니다.

약5.46GB의 모델 포함 묶음을3조각으로 제공하며, 약20GB 여유 공간과 NTFS/exFAT 저장장치를 권장합니다. 조각별/전체 SHA256이 다르거나 다른 기존 ZIP이 있으면 합치기를 중지합니다. 조각을 자동 삭제하거나 앱·설치를 자동 실행하지 않습니다.

기본 모델은 공식 Qwen3-8B Q4_K_M입니다. 수정 전 전체 프로젝트 검증 백업·같은 경로 적용/원복·자료 임의 상한 제거·코드/스타일/적용사례 갱신·LoRA 학습/평가/복원 경로를 포함합니다. 기존22개 검사는 단일 순수함수 생성 과제의 컴파일·경계/예외 확인이며 전체 설비 검수나 Codex 동급 정확도 보장이 아닙니다. 실제 A3 8B 가중치 학습은 수행하지 않았고 HF 원본/Python 환경은 별도입니다.

모델·실행기·SDK·VC++·라이선스/NOTICE 원문은 포함합니다. 실제 장비 코드와.git·내부 Context·개인 문서·대화·학습 데이터·세션은 공개 묶음에서 제외했습니다. 현장용 원본 묶음은 그대로 보존했습니다.

앱 소스 기준 `4bc8e6f539c8619844867a2e525aa9b79c71bd56`. 모델 SHA256 `d98cdcbd03e17ce47681435b5150e34c1417f50b5c0019dd560e4882c5745785`. 각 구성요소의 라이선스와 Microsoft 배포 조건은 묶음의 원문을 따릅니다.

GitHub 자동 `Source code (zip/tar.gz)`는 Shared 저장소 아카이브입니다. 도구 소스는 위의 별도 **A3_Offline_Studio_0_3_Source.zip**을 선택하세요.
