# 코드 레퍼런스 변경 이력

## 2026-11-13 · 초안 1.0

- 기준: A3Drilling/master `5aee8e58439c9b455cae7c9593c9be986c3e682e`.
- Git 추적 571개 파일을 빠짐없이 분류해 개별 설명·그림·HTML 목차를 작성했습니다. C# 148개, 타입 876개, 멤버 15,282개, 호출 구문 39,483개를 추출했습니다.
- 14개 핵심 상세장으로 시작·Recipe/Setting/JHMI·좌표/Script/MOF·Product/Station·장치/통신·동시성/로그·변경 영향·Review/Vision/Masking/Offset/Revision/Default/Align을 연결했습니다.
- 원본 수정 없이 전체 대상 소스 행의 문서용 주석 해설본, 원본 Commit/SHA/줄 범위가 있는 Offline Studio 검색 자료를 제공합니다. SDK DLL은 메타데이터만, 운영 CSV는 스키마만 제공합니다.
- 교차검증 중 동명 로컬 함수 ID 충돌을 수정했고 모든 멤버를 고유하게 연결했습니다. AUTO Stage 요청과 MAIN START의 진입점/Shift 조건, IOF 입력 타입, Rollback history 복구의 근거 범위를 정정했습니다.
- 기존 최신 아키텍처 보고서와 원본 Commit이 같아 같은 내용의 날짜 폴더를 추가하지 않았습니다. [현재 아키텍처 기준 보고서](https://github.com/kjuws10-rgb/Shared/blob/beec14e81d6a6ce91381bbca776dcf589aadfc75/20261112_085708_SW아키텍쳐분석/README.md)를 함께 참고하세요.
- 기존 예약의 매일 오전 9시(Asia/Seoul) 확인을 유지하며 새 코드가 확인되면 아키텍처와 이 폴더를 함께 갱신합니다. 소스/산출물이 같으면 시각만 바꾸는 Commit은 만들지 않습니다.

이 초안은 자동 구문/부분 의미 추출과 별도 정적 소스 추적의 조합입니다. 모든 파일에 문서가 있다는 사실을 모든 런타임·물리 의미의 확정이나 설비 실가공 검증으로 확장하지 않습니다. 장비 프로그램의 빌드·실행·축 이동은 이번 문서 작성에서 수행하지 않았습니다.
