# Log 구현 추적 복원 · 검증 기록

원본 A3Drilling/master `334b3599651b2e8e0181fd4459bafaf3cddafff3`, 비교 `28764c91d521777b8ee068dd7aaf2d3902ce9fe2`입니다.

- [전체 파일·멤버·annotation 원문 복원·RAG·소스 줄·내부 링크·SVG·코드 블록 검사](static-validation.json)
- [독립 생성물·민감자료 정책·추출/원문 검사](generator-independent-validation.json)
- [네트워크 차단 HTML 파일 검색·그림·이동 검사](browser-validation.json)
- [Roslyn 추출기 18개 회귀](extractor-regression-validation.json) · [Python 생성기 11개 회귀](python-regression-validation.json)
- [독립 기준점 판정](independent-baseline.json) · [문서 추출 전후 보존](source-model-extraction.json) · [700파일 바이트 SHA 보존](source-preservation.json)
- [구조/호출자 독립 추적](architecture-crosscheck.json) · [수동 상세장/그림 교차검토](log-manual-crosscheck.json)
- [순수 Log 시험](log-pure-regression.json) · [원문 SHA/격리·DTO stub 근거](log-source-extraction.json)

순수 시험은 정상 회귀 **27/27**과 **결함 재현 5/5**를 분리합니다. 재현 성공은 프로그램 정상 합격이 아닙니다. Setting old 빈 값의 조회 행 소실 1건, Recipe 빈 Tab/Group 메타정보 오염 3건, 단순 5인자 Recipe 기록의 개행 2행 분리 1건입니다. Setting 마지막 new 값만 빈 경우는 정상으로 확인해 결함에서 제외합니다. 시험 항목군은3개이며 서로 독립한5개 제품결함으로 과장하지 않습니다.

소스에서 Setting 민감값 마스킹 부재, 로그 기록 실패 후 실제 설정 저장과 사용자 표시의 불일치 가능성, 큐 포화/파일 실패의 진단 유실·고정 오류, PM 이력 저장/메모리 LOCK/재시작 정책을 별도 추적했습니다. 실제 자격정보·운영 로그·측정 CSV 레코드는 자료에 복제하지 않았습니다.

문서용 부분 컴파일 Error4,348은 WPF·벤더·프로젝트 경계를 완전히 재현하지 않은 추출 진단입니다. **설비 정식 빌드·장비 App/SDK/AeroScript 실행은 하지 않았습니다.** 로그 순수 시험도 제어·가공 정밀도·I/F 합격이나 LLM 성능 검증을 뜻하지 않습니다. 과거 정식/순수 검사 수는 이번 검증 수로 합산하지 않습니다. 과거 검증은 `history/`에 보존합니다.
