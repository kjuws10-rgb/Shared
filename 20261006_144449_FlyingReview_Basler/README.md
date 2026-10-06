# Basler 기준 0선 방어 Flying Review

`FlyingReview_8Head_Simulator.html`을 브라우저에서 열면 오프라인으로 실행됩니다. 같은 폴더의 `FlyingReview_Formula_Guide.html`과 함께 사용합니다. 고객 검토자료는 총 3장입니다.

기본 조건: Basler a2A2600-20gcBAS / Mitutoyo 378-810-3, 실효20배 가정, 노출2µs, 허용Blur2px(예시), Y100/X200mm/s. 입력은 노출·Blur와 X/Y 속도·가속·감속 8개만 노출합니다. 운영 선택은 2점 또는4점입니다. PPID의 Cell/Mask/광학 및 기타 기준은 고정했습니다. 이전 버전의 PPID 편집 기능은 이 간소화 버전에 포함하지 않으며, 이전 Shared 폴더는 유지됩니다.

8개의 서로 다른 Cell에서 Scanner당 실제 가공점1개를 선택합니다. 기본2점은4Glass,4점은2Glass로 대표점1사이클을 커버합니다. 모든 가공점 전수검사가 아닙니다. 지도 선택은 다른 Scanner의 Cell과 마스킹 Shot을 제외합니다. 취득 이력은 사이클 내 기판이 바뀌거나 되감아도 유지되고 새 사이클 시작 때 초기화됩니다. 조건·대표점 변경은 새 검토이므로 이력을 초기화합니다.

`node build.cjs`로 HTML과 계산근거 JSON을 재생성합니다. `node --test tests/*.test.cjs`로 수식·좌표·운영·이력 및 Mask를 검사합니다. 스크립트·원본PPID를 동봉하여 재현할 수 있습니다.

계산상 가능은 영상판정 합격이 아닙니다. 실효 노출(BslEffectiveExposureTime), tube lens와 실효 배율, 조명·초점·진동, 실제 Trigger/Input 지연·정착·Tact를 장비에서 확인해야 합니다. 기타60초 및 일부motion margin은 설계 가정입니다. 실제 장비 제어 또는 Recipe 변경 기능은 없습니다.
