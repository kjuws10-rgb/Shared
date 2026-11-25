# Stage Glass Data·Product·전체 Code Ref 검증

원본 A3Drilling/master `0219666f9053b907d96d7e0aa7d0c6c1be3a73d4`, 비교 `334b3599651b2e8e0181fd4459bafaf3cddafff3`입니다.

- [전체 파일/타입/멤버·annotation 원문 복원·RAG·범위·링크·SVG](static-validation.json)
- [독립 생성물·자료 분류·원문 전수 검증](generator-independent-validation.json)
- [네트워크 차단 오프라인 HTML 검색·그림](browser-validation.json)
- [새 Stage·통합 그림의 실제 렌더와 열람](diagram-browser-validation.json)
- [Roslyn 추출기 18회귀](extractor-regression-validation.json) · [Python 도구 14회귀](python-regression-validation.json)
- [완전 생성→Markdown 분할→검증과 변조 거절](generator-transport-pipeline-validation.json)
- [독립 기준점](independent-baseline.json) · [C# 추출 전후](source-model-extraction.json) · [159파일/946타입/16,543멤버 독립 대조](source-model-validation.json)
- [원본 2,289파일 HEAD/상태/바이트 SHA 불변](source-preservation.json)
- [아키텍처 소스 추적](architecture-crosscheck.json) · [manual/그림/소스링크](manual-crosscheck.json) · [핵심 설명 독립 재검토](manual-independent-content-review.json)
- [최종 Process ID 연결 공백 설명 보완·변경 문서 재검증](manual-refresh-validation.json)
- [최종 설명의 독립 재검토](post-manual-independent-validation.json) · [변경 화면·절 번호 재검사](post-manual-browser-validation.json)
- [Stage 정의·실제 map·Product 경계 정적 58검사](stage-layout-static.json)

Data 운영 JSON은 CSV와 같이 실제 값·원문을 복제하지 않습니다. AeroScript/scan은 실행하지 않고 원문 행과 해설을 유지하며 생성 자료를 선택 RAG로 분리했습니다. 선택 Markdown은 전송 조각으로 나뉘며 원문·레코드를 생략하지 않습니다.

문서용 부분 컴파일 Error **4,361**은 WPF/벤더/프로젝트별 경계를 정식 빌드로 재현하지 않은 추출 진단입니다. **설비 정식 빌드·장비 App/PLC/Vision/모션/레이저·벤더 DLL·AeroScript 실행은 하지 않았습니다.** Stage58검사는 소스와 현재 정의의 일치이며 고객 Spec 원문·실통신·업무적 원자성 합격이 아닙니다.

이전 Log 정상/결함 재현 시험은 `history/`에 원래 바이트로 보존했습니다. 이번 결과에 합산하거나 제품 결함이 수정됐다고 주장하지 않습니다. 검색 자료 갱신은 모델 가중치 학습이나 Codex 동급 정확도 검증이 아닙니다.

## 검증 근거의 원본 SHA와 공개 사본 SHA

현재 검증 JSON은 개인 로컬 경로를 제거하고 UTF-8/LF로 다시 직렬화한 공개 사본입니다. 보고서 안의 SHA는 원본 검증 기록 바이트를 가리키며 공개 사본 자체의 SHA로 해석하지 않습니다. manifest의 `validation.evidenceSerialization.reports`에 원본 근거 SHA와 공개 사본 SHA를 구분하여 기록했습니다. 검사 결과·횟수·소스 범위는 경로 제거 이외에 변경하지 않습니다. 기존 history는 이 변환 없이 원래 Git 바이트로 보존했습니다.
