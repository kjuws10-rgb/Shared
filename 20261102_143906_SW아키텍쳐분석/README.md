# A3 LD SW 아키텍처 변경 분석 2026년 11월 2일

이번 버전은 **여러 파일을 큰 클래스 파일로 합치고, Stage Review와 0선방어 준비, 보호윈도우 사용 매수 관리를 확장한 변경**입니다. 그러나 로그 소스가 빠져 최신 소스의 Release 빌드가 실패했습니다. 지난 MELSEC 지연 개선과 Review 설정 파일 연결도 일부 사라져, 현재 상태를 정상 배포 가능 버전으로 판단할 수 없습니다.

## 분석 기준

| 구분 | 값 |
| --- | --- |
| 분석 원본 Commit | 8872e4ed5176b5d8a39f1711af9501f6fac94deb |
| 이전 기준 Commit | 99d78ddf0e680b55dbd9662764b71a1ffe93a457 |
| 비교 범위 | [99d78ddf에서8872e4ed까지 새 Commit 1개](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/compare/99d78ddf0e680b55dbd9662764b71a1ffe93a457...8872e4ed5176b5d8a39f1711af9501f6fac94deb) |
| 기준 README | [20261031_090522_SW아키텍쳐분석](../20261031_090522_SW아키텍쳐분석/README.md) |
| 기준을 읽은 Shared main | d05d57e52ccac6388a7f872acfcf71a57e902341 |
| 이번 폴더 | 20261102_143906_SW아키텍쳐분석 |
| 새 Commit 제목 | sync local state 20261102_143008 |
| 원본 Commit 시각 | 2026년 11월 2일 14시 31분 46초 Asia/Seoul |

Shared의 전체 디렉터리에서 기존 `YYYYMMDD_HHMMSS`와 새 `YYYYMMDD_HHMMSS_SW아키텍쳐분석` 형식을 함께 확인했습니다. 적격 A3 분석 폴더 3개 중 최신 README의 원본 `99d78ddf`를 기준으로 사용했습니다. 더 최근의 일반 설명자료를 분석 기준으로 오인하지 않았습니다.

## 먼저 알아둘 결론

| 영역 | 현재 확인한 내용 | 운영 판단 |
| --- | --- | --- |
| 소스 빌드 | 기준 버전 오류 0 경고 0, 최신 버전 오류 19 경고 0 | 최신은 빌드 차단 상태 |
| 파일 구조 | 생성물을 제외한 코드 파일 351개에서192개로 감소, 다수 보조 클래스가 주파일로 이동 | 파일 삭제가 모두 기능 삭제는 아님 |
| MELSEC | 한 Run당 Poll 1개, 100ms 전용 화면 타이머와 진단 API 제거 | 지난 성능 개선의 유지 여부부터 복구 검토 필요 |
| Review 설정 | `.review` 저장 구현과 앱 주입 제거, 샘플링 일부는 코드에 존속 | 화면에서 규칙을 고르는 것과 설정을 저장하는 것은 다름 |
| 자동 Review | 일부 AUTO PtoP가 공통 Stage 이동 경로 사용 | 일반 실IOF와 0선 전체 실행은 계속 차단 |
| 보호윈도우 | 정상 가공 매수 저장, Stage 매수 인계와 요청 OFF 경로 추가 | 매수 조건 구현과 ATT 조건·교체 후 TPM 완료를 구분 |
| 실장비 검증 | 앱·PLC·Vision·축·레이저 미기동 | 코드 연결을 실제 운전 승인으로 해석하지 않음 |

빌드 오류는 [남아 있는 CLogManager 참조](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/Drilling.Common/Managers/CManager.cs#L1-L30)와 삭제된 로그 구현의 불일치입니다. 새 [gitignore의 Log 패턴](https://github.com/kjuws10-rgb/A3_LD_Process_SW_IPS/blob/8872e4ed5176b5d8a39f1711af9501f6fac94deb/.gitignore#L1-L6)은 `Drilling.Common/Log` 소스 경로에도 적용됩니다. 누락 경위를 단정하지는 않지만, 소스 예외와 실제 로그 데이터 제외 범위를 구분해야 합니다.

## 큰 흐름

~~~mermaid
flowchart LR
  A["JHMI와 Recipe CSV"] --> B["File 계층에서 읽기"]
  B --> C["Common에서 좌표와 실행 계획 준비"]
  C --> D["Stage 요청과 Scanner 가공"]
  D --> E["Review 결과와 보정 파일"]
  E --> C
  D --> F["보호윈도우 매수 저장과 Stage 인계"]
  G["로그 소스 누락"] -. "현재 빌드 차단" .-> C
~~~

이는 소스에 작성된 관계입니다. 빌드 차단을 우회해 위 흐름을 실제 실행하지 않았습니다.

## 읽는 순서

1. [Commit 변경과 호출 관계](01_Commit변경요약.md)
2. [데이터 구조와 저장 형식](02_데이터구조와흐름.md)
3. [가공과 Review 영향](03_가공_Review영향분석.md)
4. [통합 흐름도](04_통합흐름도.md)
5. [위험도별 발견사항과 수정 우선순위](05_위험도별발견사항.md)
6. [분석 근거와 검증 기록](06_분석근거_검증기록.md)

[변경 파일 전체 목록](changed-files.csv), [영역별 Git tree 비교](schema-diff.json), [빌드 검증 요약](validation.json), [검증한 고정 소스 링크](source-links.json)를 함께 제공합니다.

전체 변경은 rename을 적용하지 않은 경로 기준 **10,733개**, 추가 **1,698,719줄**, 삭제 **431,035줄**입니다. 생성물 경로 10,336개와 Data 경로 90개 등이 포함되므로 이 숫자를 개발 기능 수로 해석하면 안 됩니다. 상세 분류와 기본 Git 통계의 차이는 첫 문서에 설명했습니다.

원본 저장소의 소스 수정·추가·삭제·Commit·Push는 하지 않았습니다. 분석 Clone의 Push URL은 DISABLED이며 빌드는 별도 검증 Clone에서만 수행했습니다. Shared에는 이번 분석 폴더만 게시합니다.
