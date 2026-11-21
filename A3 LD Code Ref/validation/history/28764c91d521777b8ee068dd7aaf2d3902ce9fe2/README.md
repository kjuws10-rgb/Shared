# 11.19.0 검증 기록

원본 A3Drilling master `28764c91d521777b8ee068dd7aaf2d3902ce9fe2`, 비교 기준 `96e22cd027c84bf302b23f2949b98985d7f301bb`입니다. 자동 구문·부분 의미 추출, 수동 소스 추적, 별도 순수 코드 시험을 구분합니다.

| 검증 | 결과 | 근거 |
| --- | --- | --- |
| 전체 문서·SHA·범위·원문 복원·RAG·링크 | 통과 | [정적 검사](static-validation.json) |
| 독립 원문·추출/색인·단일/범위 인용 | 888,671 assertion 통과 | [독립 검사](generator-independent-validation.json) |
| HTML 오프라인 검색·필터·이동·730 SVG·모바일 | 56/56, 외부 요청/JS 오류 0 | [브라우저 검사](browser-validation.json) |
| Roslyn 문서 추출기 / Python 생성기 | 18/18 / 11/11 | [추출기](extractor-regression-validation.json) · [생성기](python-regression-validation.json) |
| C# 모델 / XAML 독립 후보 | 통과 | [모델](source-model-validation.json) · [XAML](xaml-independent-validation.json) |
| 민감 설정 행·값 비복제 | 통과 | [정책 검사](sensitive-settings-validation.json) |
| 수동 16 MD → HTML/기본 검색 Markdown·SVG | 통과 | [파생 자료](manual-derived-validation.json) |
| 구조 ↔ Review 소스 교차검토 | 통과, 런타임 인증 아님 | [구조](architecture-crosscheck.json) · [Review](review-crosscheck.json) |
| 공통 Margin + 전체 좌표 계획 별도 console | 34/34 · 20,740 Shot · 45 Cell | [결과](margin-pure-regression.json) · [원본 추출 근거](margin-source-extraction.json) |
| Review writer/후보·중복·정밀도 별도 console | 23/23 | [결과](review-pure-regression.json) · [원본 추출 근거](review-source-extraction.json) |
| 원본 HEAD/status/699개 바이트 SHA | 동일, Push DISABLED | [원본 보존](source-preservation.json) |

이번 생성기는 1.1.4, 검증기는 1.1.3, 추출기는 1.0.3입니다. 새 PM XAML의 PasswordChanged 이벤트 1건을 누락하던 문서 도구를 수정하고 독립 XML/코드 비하인드 후보 검사로 확인했습니다. 비밀번호 입력 내용·실제 값은 추출하지 않습니다. 일부 tilde 코드 블록의 HTML 표시도 보완했습니다. 앞의56개 광범위 브라우저 검사는 이 HTML1개의 수정 전 snapshot이며, 수정 후 해당 화면·코드 블록·링크를 [추가 브라우저 검사](html-fence-browser-validation.json)에서 확인했습니다. [수정 범위 검사](html-fence-fix-validation.json)는 원본 manual·Markdown·JSONL 등 보호77개 파일의 SHA 불변을 확인합니다.

문서용 단일 부분 컴파일 진단 Error 4,413은 WPF·벤더 참조·프로젝트별 정식 빌드를 제외한 추출 한계입니다. **설비 정식 빌드/장비·SDK·AeroScript 실행은 하지 않았습니다.** 물리 정밀도, PLC/Vision I/F, PM 파일 저장·재시작 복원, 전체 UI 동작 합격 결과가 아닙니다. 모델 가중치 학습이나 LLM 응답 정확도도 이번 검증 대상이 아닙니다.

같은 Recipe 이력이 날짜를 넘어 중복 적용을 막는 것은 별도 파일 시험에서 확인했습니다. 다른 파일 경로의 동일 내용과 다른 writer의 늦은 갱신은 완전히 차단되지 않음을 시험 결과와 상세장에 함께 남깁니다. 공통 Margin 변경도 일관된 좌표 재생성에서는 일부 명령 입력이 상쇄되므로 모든 실제 이동점이 변한다고 단정하지 않습니다.

과거 검증은 `history/` 아래 원래 Commit의 기록으로 보존합니다. 현재 원본과 섞어 새 시험 결과로 집계하지 않습니다. Git 최종 공백 검사는 manifest의 gitDiffCheck로 기록합니다.
