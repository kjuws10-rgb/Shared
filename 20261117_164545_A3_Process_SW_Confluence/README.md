# A3 LD Process SW 개발 · Confluence 페이지별 소스

외부 Git·코드 참조 페이지로 이동하는 안내를 제거하고, 13개 기술 페이지에 실제 코드 발췌 26개와 설명을 직접 넣은 수정본입니다.

신규 인원과 인수인계 담당자를 위한 장비·공정·코드·데이터·운영·장애 대응 문서입니다. 상위 1개, 주제 16개, 과거 기록 부록 3개로 구성했습니다.

- [전체 ZIP 다운로드](A3_Process_SW_Confluence_%ED%8E%98%EC%9D%B4%EC%A7%80%EB%B3%84%EC%86%8C%EC%8A%A4_20261117.zip)
- [전체 미리보기 HTML](index.html) — ZIP을 풀고 브라우저에서 여세요.
- [정확한 페이지 제목과 생성 순서](00_%ED%8E%98%EC%9D%B4%EC%A7%80%EC%83%9D%EC%84%B1_%EC%88%9C%EC%84%9C.txt)
- [붙여넣기 안내](README.txt) · [본문 코드 목록](sources.json)

## 사용 순서

1. 전체 ZIP을 내려받아 압축을 풉니다.
2. index.html에서 페이지를 선택하고 **소스 전체 선택 → Ctrl+C**로 복사합니다. pages 폴더의 각 .storage.xhtml.txt를 직접 열어 복사해도 됩니다.
3. Confluence에 정확한 제목으로 페이지를 만든 뒤 해당 페이지의 **소스 편집기**에 붙여넣습니다.
4. 01~16은 **Process SW 개발** 아래, 14-1~14-3은 **14. A3 LD 요구사항·WBS·개발현황** 아래에 만듭니다.
5. 그림이 있는 7페이지에는 아래 PNG를 같은 이름으로 첨부하고, 저장 후 페이지 링크·그림·표를 확인합니다. SVG는 그림 수정용 원본입니다.

## 페이지별 소스

| 페이지 제목 | 붙여넣을 소스 | 첨부 그림 |
|---|---|---|
| Process SW 개발 | [소스](pages/00_Process_SW_%EA%B0%9C%EB%B0%9C.storage.xhtml.txt) | [PNG](attachments/00_%ED%95%99%EC%8A%B5%EA%B3%BC%EB%8C%80%EC%9D%91%EA%B2%BD%EB%A1%9C.png) |
| 01. A3 LD 시작하기와 인수인계 | [소스](pages/01_A3_LD_%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0%EC%99%80_%EC%9D%B8%EC%88%98%EC%9D%B8%EA%B3%84.storage.xhtml.txt) | — |
| 02. A3 LD 장비·공정·물류 | [소스](pages/02_A3_LD_%EC%9E%A5%EB%B9%84%C2%B7%EA%B3%B5%EC%A0%95%C2%B7%EB%AC%BC%EB%A5%98.storage.xhtml.txt) | [PNG](attachments/02_%EC%9E%A5%EB%B9%84%EB%AC%BC%EB%A5%98%EA%B0%9C%EB%85%90.png) |
| 03. A3 LD SW 구조와 실행 데이터 | [소스](pages/03_A3_LD_SW_%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%8B%A4%ED%96%89_%EB%8D%B0%EC%9D%B4%ED%84%B0.storage.xhtml.txt) | [PNG](attachments/03_%EC%8B%A4%ED%96%89%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%9D%90%EB%A6%84.png) |
| 04. A3 LD 개발환경·코드 탐색·배포 | [소스](pages/04_A3_LD_%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD%C2%B7%EC%BD%94%EB%93%9C_%ED%83%90%EC%83%89%C2%B7%EB%B0%B0%ED%8F%AC.storage.xhtml.txt) | — |
| 05. A3 LD PPID·Recipe·OSS·Job Change | [소스](pages/05_A3_LD_PPID%C2%B7Recipe%C2%B7OSS%C2%B7Job_Change.storage.xhtml.txt) | — |
| 06. A3 LD 좌표계·Head 분담·Default | [소스](pages/06_A3_LD_%EC%A2%8C%ED%91%9C%EA%B3%84%C2%B7Head_%EB%B6%84%EB%8B%B4%C2%B7Default.storage.xhtml.txt) | [PNG](attachments/06_%EC%A2%8C%ED%91%9C%EC%99%80%EB%B3%B4%EC%A0%95%EA%B2%BD%EA%B3%84.png) |
| 07. A3 LD Scanner·MOF·Automation1 | [소스](pages/07_A3_LD_Scanner%C2%B7MOF%C2%B7Automation1.storage.xhtml.txt) | [PNG](attachments/07_%EC%8B%A4%ED%96%89%EB%AA%A8%EB%93%9C%EA%B2%BD%EA%B3%84.png) |
| 08. A3 LD Align·Review·검사·보정 | [소스](pages/08_A3_LD_Align%C2%B7Review%C2%B7%EA%B2%80%EC%82%AC%C2%B7%EB%B3%B4%EC%A0%95.storage.xhtml.txt) | [PNG](attachments/08_%EC%B8%A1%EC%A0%95%ED%9B%84%EB%B3%B4%EC%A0%81%EC%9A%A9%EA%B2%BD%EA%B3%84.png) |
| 09. A3 LD 통신과 장비 인터페이스 | [소스](pages/09_A3_LD_%ED%86%B5%EC%8B%A0%EA%B3%BC_%EC%9E%A5%EB%B9%84_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4.storage.xhtml.txt) | — |
| 10. A3 LD 광학 Component와 Power | [소스](pages/10_A3_LD_%EA%B4%91%ED%95%99_Component%EC%99%80_Power.storage.xhtml.txt) | — |
| 11. A3 LD 운전 화면과 Manual·Auto | [소스](pages/11_A3_LD_%EC%9A%B4%EC%A0%84_%ED%99%94%EB%A9%B4%EA%B3%BC_Manual%C2%B7Auto.storage.xhtml.txt) | — |
| 12. A3 LD Alarm·Interlock·정지·복구 | [소스](pages/12_A3_LD_Alarm%C2%B7Interlock%C2%B7%EC%A0%95%EC%A7%80%C2%B7%EB%B3%B5%EA%B5%AC.storage.xhtml.txt) | — |
| 13. A3 LD 검증·시험·Acceptance | [소스](pages/13_A3_LD_%EA%B2%80%EC%A6%9D%C2%B7%EC%8B%9C%ED%97%98%C2%B7Acceptance.storage.xhtml.txt) | [PNG](attachments/13_%EA%B2%80%EC%A6%9D%EB%8B%A8%EA%B3%84.png) |
| 14. A3 LD 요구사항·WBS·개발현황 | [소스](pages/14_A3_LD_%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD%C2%B7WBS%C2%B7%EA%B0%9C%EB%B0%9C%ED%98%84%ED%99%A9.storage.xhtml.txt) | — |
| 14-1. A3 LD 고객 요구 51개 · 2026-08 기준 | [소스](pages/14a_A3_LD_%EA%B3%A0%EA%B0%9D_%EC%9A%94%EA%B5%AC_51%EA%B0%9C_%C2%B7_2026-08_%EA%B8%B0%EC%A4%80.storage.xhtml.txt) | — |
| 14-2. A3 LD 협업 WBS 137개 · 2026-08 기준 | [소스](pages/14b_A3_LD_%ED%98%91%EC%97%85_WBS_137%EA%B0%9C_%C2%B7_2026-08_%EA%B8%B0%EC%A4%80.storage.xhtml.txt) | — |
| 14-3. A3 LD 개발일정 36개 · 과거 계획 | [소스](pages/14c_A3_LD_%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A0%95_36%EA%B0%9C_%C2%B7_%EA%B3%BC%EA%B1%B0_%EA%B3%84%ED%9A%8D.storage.xhtml.txt) | — |
| 15. A3 LD 장애대응과 미결사항 | [소스](pages/15_A3_LD_%EC%9E%A5%EC%95%A0%EB%8C%80%EC%9D%91%EA%B3%BC_%EB%AF%B8%EA%B2%B0%EC%82%AC%ED%95%AD.storage.xhtml.txt) | — |
| 16. A3 LD 자료·산출물·변경관리 | [소스](pages/16_A3_LD_%EC%9E%90%EB%A3%8C%C2%B7%EC%82%B0%EC%B6%9C%EB%AC%BC%C2%B7%EB%B3%80%EA%B2%BD%EA%B4%80%EB%A6%AC.storage.xhtml.txt) | — |

## 기준과 검증 범위

기준일은 2026-11-17입니다. Main 소스는 9a43c709(Git 메시지 Ver11.17.0), 기존 Code Ref는 dfa5920e 기준입니다. 실제 UI 프로젝트의 Version 2026.11.13.0과 Git 기준을 구별합니다. 2026-08-09의 고객 요구 51개·협업 WBS 137개·일정 36개는 당시 기록으로 보존하며 현재 완료율을 뜻하지 않습니다.

20개 소스 XML, 실제 코드 발췌 26개의 원문 일치, 페이지 링크·첨부·파일 해시와 전달 ZIP을 점검했습니다. 이번 수정본의 새 코드 블록은 브라우저 화면으로 재검증하지 않았습니다. 이 공유는 문서 배포이며 사내 Confluence 저장·렌더링, 정식 설비 빌드·장비/레이저 운전·고객 Acceptance를 수행한 결과는 아닙니다.

전체 ZIP: 995,230 bytes · SHA256 d3e24f6ec354f1ae35816d814206d6d1f97743c0565cceb11d4bcd52e6fda22e
