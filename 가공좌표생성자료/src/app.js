(function coordinateTesterApp() {
  "use strict";

  const engine = window.MaskingEngine;
  if (!engine) {
    throw new Error("좌표 생성 엔진을 불러오지 못했습니다.");
  }

  const state = {
    result: null,
    page: 1,
    pageSize: 60,
    filteredRecords: [],
    resizeTimer: null,
  };

  const elements = {
    recipeForm: document.querySelector("#recipeForm"),
    recipeInputs: [...document.querySelectorAll("[data-recipe-field]")],
    resetButton: document.querySelector("#resetButton"),
    exportCsvButton: document.querySelector("#exportCsvButton"),
    formError: document.querySelector("#formError"),
    baselineBadge: document.querySelector("#baselineBadge"),
    resultSubtitle: document.querySelector("#resultSubtitle"),
    formulaPixel: document.querySelector("#formulaPixel"),
    formulaPitch: document.querySelector("#formulaPitch"),
    formulaSpacing: document.querySelector("#formulaSpacing"),
    metricRaw: document.querySelector("#metricRaw"),
    metricUnique: document.querySelector("#metricUnique"),
    metricDuplicates: document.querySelector("#metricDuplicates"),
    metricHoles: document.querySelector("#metricHoles"),
    metricMargin: document.querySelector("#metricMargin"),
    metricFootprint: document.querySelector("#metricFootprint"),
    metricGrid: document.querySelector("#metricGrid"),
    metricDuplicateRisk: document.querySelector("#metricDuplicateRisk"),
    metricDoe: document.querySelector("#metricDoe"),
    metricField: document.querySelector("#metricField"),
    metricFootprintStatus: document.querySelector("#metricFootprintStatus"),
    fieldCanvas: document.querySelector("#fieldCanvas"),
    headSummaryBody: document.querySelector("#headSummaryBody"),
    validationList: document.querySelector("#validationList"),
    checkCount: document.querySelector("#checkCount"),
    headFilter: document.querySelector("#headFilter"),
    roleFilter: document.querySelector("#roleFilter"),
    coordinateSearch: document.querySelector("#coordinateSearch"),
    coordinateBody: document.querySelector("#coordinateBody"),
    tableCount: document.querySelector("#tableCount"),
    pageIndicator: document.querySelector("#pageIndicator"),
    previousPageButton: document.querySelector("#previousPageButton"),
    nextPageButton: document.querySelector("#nextPageButton"),
    compareBundledButton: document.querySelector("#compareBundledButton"),
    groundTruthFile: document.querySelector("#groundTruthFile"),
    comparisonResult: document.querySelector("#comparisonResult"),
    gateFilter: document.querySelector("#gateFilter"),
  };

  const maskPanel = window.createMaskingPanel(engine, {
    onDirty: markInputsChanged,
    onGenerate: generateFromForm,
    onError: showError,
    download: downloadFile,
  });

  function markInputsChanged() {
    state.result = null;
    elements.exportCsvButton.disabled = true;
    document.querySelector('#exportPlanButton').disabled = true;
    document.querySelector('.results').classList.add('results-stale');
    elements.resultSubtitle.textContent = '입력이 변경되었습니다. 좌표 생성 버튼을 눌러 결과를 갱신하세요.';
    setStatusBadge('neutral', '입력 변경 · 다시 생성');
  }

  function updateDoeCenterInput() {
    const field = key => elements.recipeInputs.find(input => input.dataset.recipeField === key);
    const spacing = Number(field('pixelSizeMmPerPx').value) * Number(field('commandPitchPx').value);
    const count = Number(field('doeBranchCountPerAxis').value);
    field('sharedOriginOffsetMm').value = count > 0 ? engine.round(spacing / count * (count - 1) / 2) : '';
  }

  function downloadFile(filename, text, mimeType) {
    const url = URL.createObjectURL(new Blob([text], {type:mimeType}));
    const link = document.createElement('a');link.href=url;link.download=filename;
    document.body.append(link);link.click();link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function createElement(tagName, className, textContent) {
    const node = document.createElement(tagName);
    if (className) {
      node.className = className;
    }
    if (textContent !== undefined && textContent !== null) {
      node.textContent = String(textContent);
    }
    return node;
  }

  function formatInteger(value) {
    return Number(value).toLocaleString("ko-KR");
  }

  function formatCoordinate(value) {
    if (value === null || value === undefined || !Number.isFinite(Number(value))) {
      return "—";
    }
    return Number(value).toFixed(4);
  }

  function applyRecipeToForm(recipe) {
    for (const input of elements.recipeInputs) {
      const fieldName = input.dataset.recipeField;
      if (input.type === "checkbox") {
        input.checked = Boolean(recipe[fieldName]);
      } else {
        input.value = recipe[fieldName] === null ? "" : String(recipe[fieldName]);
      }
    }
  }

  function readRecipeFromForm() {
    const recipe = {};
    for (const input of elements.recipeInputs) {
      const fieldName = input.dataset.recipeField;
      recipe[fieldName] = input.type === "checkbox" ? input.checked : input.value;
    }
    return {...recipe, autoDoeCenterOffset:true, ...maskPanel.read()};
  }

  function setStatusBadge(kind, text) {
    elements.baselineBadge.className = `status-badge status-${kind}`;
    elements.baselineBadge.textContent = text;
  }

  function clearError() {
    elements.formError.hidden = true;
    elements.formError.textContent = "";
  }

  function showError(error) {
    markInputsChanged();
    elements.formError.textContent = error instanceof Error ? error.message : String(error);
    elements.formError.hidden = false;
    setStatusBadge("fail", "입력 확인 필요");
  }

  function renderSummary(result) {
    const { recipe, derived, summary, baseline } = result;
    elements.formulaPixel.textContent = `${recipe.pixelSizeMmPerPx} mm/px`;
    elements.formulaPitch.textContent = `${recipe.commandPitchPx} px`;
    elements.formulaSpacing.textContent = `${derived.commandSpacingMm} mm`;

    elements.metricRaw.textContent = formatInteger(summary.rawRecordCount);
    elements.metricUnique.textContent = formatInteger(summary.uniqueCenterCount);
    elements.metricDuplicates.textContent = formatInteger(summary.repeatedLaneStartCount);
    elements.metricHoles.textContent = formatInteger(summary.nominalHoleCount);
    elements.metricMargin.textContent = `${formatCoordinate(summary.centerNominalMinMarginMm)} mm`;
    elements.metricGrid.textContent =
      `${derived.gridCountX} × ${derived.gridCountY} / Cell · ${derived.cellCount} Cell`;
    elements.metricDuplicateRisk.textContent = summary.repeatedLaneStartCount
      ? `전부 Laser-On 가정 시 +${formatInteger(summary.duplicateExposureRiskHoleCount)} Hole 위험`
      : "Lane 시작 반복 미생성";
    elements.metricDoe.textContent =
      `DOE ${recipe.doeBranchCountPerAxis} × ${recipe.doeBranchCountPerAxis} · 중심당 ${derived.holeCountPerCenter} Hole`;
    elements.metricField.textContent = summary.centerFieldViolationCount
      ? `명목 Field 이탈 ${formatInteger(summary.centerFieldViolationCount)}건`
      : "명목 중심 Field 이탈 0건";

    if (summary.finalFootprintMinMarginMm === null) {
      elements.metricFootprint.textContent = "미검증";
      elements.metricFootprintStatus.textContent = "안전 입력값 4개 미입력";
    } else {
      elements.metricFootprint.textContent = `${formatCoordinate(summary.finalFootprintMinMarginMm)} mm`;
      elements.metricFootprintStatus.textContent = summary.finalFootprintViolationCount
        ? `최종 Field 이탈 ${formatInteger(summary.finalFootprintViolationCount)}건`
        : "입력 시나리오 기준 이탈 0건";
    }

    if (baseline.applicable && baseline.passed) {
      setStatusBadge("pass", "Golden 기준 PASS");
      elements.resultSubtitle.textContent =
        "Pitch 10 px · Scan Field 110 mm 기준 핵심 검증을 모두 통과했습니다.";
    } else if (baseline.applicable) {
      setStatusBadge("fail", "Golden 기준 FAIL");
      elements.resultSubtitle.textContent = "기준 레시피 결과에서 불일치가 발견됐습니다.";
    } else {
      setStatusBadge("custom", "사용자 레시피");
      elements.resultSubtitle.textContent =
        `변경 조건으로 ${formatInteger(summary.rawRecordCount)}개 Raw 좌표를 생성했습니다. ` +
        "Golden 16,742건 비교는 적용되지 않습니다.";
    }
  }

  function renderHeadSummary(result) {
    const fragment = document.createDocumentFragment();
    for (const head of result.summary.headSummaries) {
      const row = document.createElement("tr");
      const headCell = createElement("td", null, head.headId);
      const rawCell = createElement("td", "numeric", formatInteger(head.rawRecordCount));
      const uniqueCell = createElement("td", "numeric", formatInteger(head.uniqueCenterCount));
      const duplicateCell = createElement(
        "td",
        "numeric",
        formatInteger(head.repeatedLaneStartCount),
      );
      const rangeCell = createElement(
        "td",
        "numeric",
        `${formatCoordinate(head.localGYMinMm)}…${formatCoordinate(head.localGYMaxMm)}`,
      );
      const marginCell = createElement(
        "td",
        `numeric${head.centerNominalMinMarginMm < 1 ? " margin-risk" : ""}`,
        formatCoordinate(head.centerNominalMinMarginMm),
      );
      row.append(headCell, rawCell, uniqueCell, duplicateCell, rangeCell, marginCell);
      fragment.append(row);
    }
    elements.headSummaryBody.replaceChildren(fragment);
  }

  function renderValidations(result) {
    const { baseline } = result;
    elements.validationList.replaceChildren();

    if (!baseline.applicable) {
      elements.checkCount.textContent = "CUSTOM";
      elements.validationList.append(
        createElement("div", "validation-empty", baseline.message),
      );
      return;
    }

    const passedCount = baseline.checks.filter((check) => check.passed).length;
    elements.checkCount.textContent = `${passedCount}/${baseline.checks.length} PASS`;
    const fragment = document.createDocumentFragment();

    for (const check of baseline.checks) {
      const item = createElement(
        "div",
        `validation-item ${check.passed ? "pass" : "fail"}`,
      );
      item.append(createElement("span", "validation-icon", check.passed ? "✓" : "×"));
      const copy = createElement("div", "validation-copy");
      copy.append(createElement("b", null, check.label));
      copy.append(
        createElement(
          "small",
          null,
          `기대 ${check.expected} · 생성 ${check.actual}`,
        ),
      );
      item.append(copy);
      fragment.append(item);
    }

    elements.validationList.append(fragment);
  }

  function populateHeadFilter(result) {
    const previousValue = elements.headFilter.value;
    const fragment = document.createDocumentFragment();
    fragment.append(createElement("option", null, "전체 Head"));
    fragment.firstChild.value = "all";

    for (const head of result.summary.headSummaries) {
      const option = createElement("option", null, head.headId);
      option.value = String(head.headNumber);
      fragment.append(option);
    }

    elements.headFilter.replaceChildren(fragment);
    elements.headFilter.value = [...elements.headFilter.options].some(
      (option) => option.value === previousValue,
    )
      ? previousValue
      : "all";
  }

  function getFilteredRecords() {
    if (!state.result) {
      return [];
    }

    const headValue = elements.headFilter.value;
    const roleValue = elements.roleFilter.value;
    const query = elements.coordinateSearch.value.trim().toUpperCase();
    return state.result.records.filter((record) => {
      if (headValue !== "all" && record.headNumber !== Number(headValue)) {
        return false;
      }
      if (roleValue !== "all" && record.expectedRole !== roleValue) {
        return false;
      }
      if (elements.gateFilter.value !== 'all' && record.laserGate !== elements.gateFilter.value) return false;
      if (!query) {
        return true;
      }

      const searchable = [
        record.headId,
        `H${record.headNumber}:${record.sequenceNo}`,
        `CELL${String(record.cellId).padStart(2, "0")}`,
        String(record.cellId),
        String(record.sequenceNo),
        record.maskReason,
      ]
        .join(" ")
        .toUpperCase();
      return searchable.includes(query);
    });
  }

  function renderCoordinateTable(resetPage = false) {
    if (resetPage) {
      state.page = 1;
    }
    state.filteredRecords = getFilteredRecords();
    const pageCount = Math.max(1, Math.ceil(state.filteredRecords.length / state.pageSize));
    state.page = Math.min(state.page, pageCount);
    const startIndex = (state.page - 1) * state.pageSize;
    const pageRecords = state.filteredRecords.slice(startIndex, startIndex + state.pageSize);
    const fragment = document.createDocumentFragment();

    for (const record of pageRecords) {
      const row = document.createElement("tr");
      if (record.isRepeatedLaneStart) {
        row.className = "duplicate-row";
      }
      row.append(createElement("td", null, record.headId));
      row.append(createElement("td", "numeric", record.sequenceNo));
      const roleCell = document.createElement("td");
      roleCell.append(
        createElement(
          "span",
          `role-pill ${record.isRepeatedLaneStart ? "role-repeat" : "role-center"}`,
          record.isRepeatedLaneStart ? "LANE 반복" : "가공 중심",
        ),
      );
      row.append(roleCell);
      row.append(createElement("td", "numeric", formatCoordinate(record.localGYmm)));
      row.append(createElement("td", "numeric", formatCoordinate(record.gxStageMm)));
      row.append(createElement('td', 'numeric', formatCoordinate(record.maskXmm)));
      row.append(createElement('td', 'numeric', formatCoordinate(record.maskYmm)));
      row.append(createElement('td', null, record.baseLaserGate));
      row.append(createElement('td', `gate-${record.laserGate.toLowerCase()}`, record.laserGate));
      row.append(createElement('td', null, record.maskReason || (record.maskingEnabled ? '통과' : '미사용')));
      row.append(createElement("td", null, `CELL${String(record.cellId).padStart(2, "0")}`));
      row.append(
        createElement(
          "td",
          "numeric",
          `${record.commandGridIndexX} / ${record.commandGridIndexY}`,
        ),
      );
      row.append(createElement("td", "numeric", formatCoordinate(record.globalXmm)));
      row.append(
        createElement(
          "td",
          `numeric${record.centerNominalMarginMm < 1 ? " margin-risk" : ""}`,
          formatCoordinate(record.centerNominalMarginMm),
        ),
      );
      fragment.append(row);
    }

    elements.coordinateBody.replaceChildren(fragment);
    const visibleStart = state.filteredRecords.length ? startIndex + 1 : 0;
    const visibleEnd = Math.min(startIndex + state.pageSize, state.filteredRecords.length);
    elements.tableCount.textContent =
      `${formatInteger(state.filteredRecords.length)}건 중 ` +
      `${formatInteger(visibleStart)}–${formatInteger(visibleEnd)}`;
    elements.pageIndicator.textContent = `${state.page} / ${pageCount}`;
    elements.previousPageButton.disabled = state.page <= 1;
    elements.nextPageButton.disabled = state.page >= pageCount;
  }

  function drawFieldMap(result) {
    const canvas = elements.fieldCanvas;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return;
    }

    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * devicePixelRatio);
    canvas.height = Math.round(rect.height * devicePixelRatio);
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 34, right: 22, bottom: 30, left: 42 };
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    const coverageMm = result.recipe.scanFieldWidthMm * result.recipe.headCount;
    const laneDenominator = Math.max(
      1,
      result.recipe.cellRowCount * result.derived.gridCountY - 1,
    );
    const colors = [
      "#4ed7e8",
      "#67dfa9",
      "#8fbcff",
      "#f6bd5c",
      "#d98eff",
      "#58a9ff",
      "#a9e36d",
      "#ff9a76",
    ];

    context.clearRect(0, 0, width, height);
    context.fillStyle = "#07131c";
    context.fillRect(0, 0, width, height);

    for (let headIndex = 0; headIndex < result.recipe.headCount; headIndex += 1) {
      const bandLeft =
        padding.left +
        (headIndex * result.recipe.scanFieldWidthMm * plotWidth) / coverageMm;
      const bandWidth = (result.recipe.scanFieldWidthMm * plotWidth) / coverageMm;
      context.fillStyle = headIndex % 2 === 0
        ? "rgba(78, 215, 232, 0.035)"
        : "rgba(255, 255, 255, 0.012)";
      context.fillRect(bandLeft, padding.top, bandWidth, plotHeight);

      context.fillStyle = "#91a7b5";
      context.font = "10px SFMono-Regular, Consolas, monospace";
      context.textAlign = "center";
      context.fillText(`H${headIndex + 1}`, bandLeft + bandWidth / 2, 19);

      if (headIndex > 0) {
        context.strokeStyle = "rgba(246, 189, 92, 0.56)";
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(bandLeft + 0.5, padding.top);
        context.lineTo(bandLeft + 0.5, padding.top + plotHeight);
        context.stroke();
      }
    }

    context.strokeStyle = "rgba(145, 167, 181, 0.2)";
    context.lineWidth = 1;
    for (let rowIndex = 0; rowIndex <= result.recipe.cellRowCount; rowIndex += 1) {
      const y = padding.top + (rowIndex / result.recipe.cellRowCount) * plotHeight;
      context.beginPath();
      context.moveTo(padding.left, y + 0.5);
      context.lineTo(padding.left + plotWidth, y + 0.5);
      context.stroke();
    }

    for (let headNumber = 1; headNumber <= result.recipe.headCount; headNumber += 1) {
      context.fillStyle = colors[(headNumber - 1) % colors.length];
      context.globalAlpha = 0.35;
      for (const point of result.uniqueCenters) {
        if (point.headNumber !== headNumber) {
          continue;
        }
        const laneIndex =
          (point.cellRow - 1) * result.derived.gridCountY + point.commandGridIndexY;
        const x = padding.left + (point.globalXmm / coverageMm) * plotWidth;
        const y = padding.top + (laneIndex / laneDenominator) * plotHeight;
        context.fillRect(x, y, 1.4, 1.4);
      }
    }
    context.globalAlpha = 1;

    context.strokeStyle = "rgba(145, 167, 181, 0.52)";
    context.strokeRect(padding.left + 0.5, padding.top + 0.5, plotWidth, plotHeight);
    context.fillStyle = "#91a7b5";
    context.font = "9px SFMono-Regular, Consolas, monospace";
    context.textAlign = "left";
    context.fillText("0 mm", padding.left, height - 10);
    context.textAlign = "right";
    context.fillText(`${coverageMm} mm`, padding.left + plotWidth, height - 10);

    for (const head of result.summary.headSummaries) {
      if (head.centerNominalMinMarginMm >= 1) {
        continue;
      }
      const riskPoint = result.uniqueCenters
        .filter((point) => point.headNumber === head.headNumber)
        .reduce((closest, point) =>
          !closest || point.centerNominalMarginMm < closest.centerNominalMarginMm
            ? point
            : closest,
        null);
      const boundaryGlobalX = riskPoint && riskPoint.localGYmm < 0
        ? (head.headNumber - 1) * result.recipe.scanFieldWidthMm
        : head.headNumber * result.recipe.scanFieldWidthMm;
      const markerX = padding.left + (boundaryGlobalX / coverageMm) * plotWidth;
      context.fillStyle = "#f6bd5c";
      context.beginPath();
      context.moveTo(markerX - 4, padding.top - 7);
      context.lineTo(markerX + 4, padding.top - 7);
      context.lineTo(markerX, padding.top - 1);
      context.closePath();
      context.fill();
    }
  }

  function renderResult(result) {
    document.querySelector('.results').classList.remove('results-stale');
    state.result = result;
    state.page = 1;
    renderSummary(result);
    renderHeadSummary(result);
    renderValidations(result);
    populateHeadFilter(result);
    renderCoordinateTable(true);
    drawFieldMap(result);
    maskPanel.render(result);
    elements.exportCsvButton.disabled = false;
    elements.comparisonResult.hidden = true;
  }

  function generateFromForm() {
    clearError();
    try {
      const result = engine.generateCoordinates(readRecipeFromForm());
      renderResult(result);
    } catch (error) {
      showError(error);
    }
  }

  function downloadGeneratedCsv() {
    if (!state.result) {
      return;
    }
    const csv = engine.exportRowsToCsv(state.result.records);
    const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const now = new Date();
    const stamp = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
      "_",
      String(now.getHours()).padStart(2, "0"),
      String(now.getMinutes()).padStart(2, "0"),
      String(now.getSeconds()).padStart(2, "0"),
    ].join("");
    link.href = objectUrl;
    link.download = `A3_LD_생성좌표_${stamp}.csv`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
  }

  function setComparisonMessage(kind, message) {
    elements.comparisonResult.hidden = false;
    elements.comparisonResult.className = `comparison-result ${kind}`;
    elements.comparisonResult.textContent = message;
  }

  function compareCsvText(csvText, sourceLabel) {
    if (!state.result) {
      return;
    }
    try {
      const comparison = engine.compareGroundTruth(state.result.records, csvText);
      if (comparison.passed) {
        setComparisonMessage(
          "pass",
          `${sourceLabel}: ${formatInteger(comparison.comparedRecordCount)}건 전수 일치 · ` +
            `GY 최대 차이 ${comparison.maxDeltaGYmm} mm · GX 최대 차이 ${comparison.maxDeltaGXmm} mm`,
        );
      } else {
        const sample = comparison.mismatchSamples[0];
        setComparisonMessage(
          "fail",
          `${sourceLabel}: 불일치 ${formatInteger(comparison.mismatchCount)}건 · ` +
            `기준에 없는 생성 레코드 ${formatInteger(comparison.missingGroundTruthRecordCount)}건` +
            (sample
              ? ` · 첫 불일치 H${sample.headNumber}:${sample.sequenceNo} ${sample.reason}`
              : ""),
        );
      }
    } catch (error) {
      setComparisonMessage(
        "fail",
        error instanceof Error ? error.message : String(error),
      );
    }
  }

  async function compareBundledGroundTruth() {
    if(window.A3_GROUND_TRUTH_CSV) {
      compareCsvText(window.A3_GROUND_TRUTH_CSV, '내장 기준 CSV');
      return;
    }
    setComparisonMessage("loading", "저장소 기준 CSV를 읽고 16,742건을 대조하고 있습니다…");
    try {
      const fixtureUrl = new URL(
        "../20260830_105429/가공좌표_스캔필드110mm_검증_16742건.csv",
        window.location.href,
      );
      const response = await fetch(fixtureUrl);
      if (!response.ok) {
        throw new Error(`기준 CSV 응답 오류 (${response.status})`);
      }
      compareCsvText(await response.text(), "저장소 기준 CSV");
    } catch (error) {
      setComparisonMessage(
        "fail",
        "기준 CSV를 자동으로 읽지 못했습니다. 로컬 서버로 열거나 ‘CSV 직접 선택’을 사용해 주세요. " +
          (error instanceof Error ? error.message : String(error)),
      );
    }
  }

  elements.recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    generateFromForm();
  });

  elements.resetButton.addEventListener("click", () => {
    applyRecipeToForm(engine.BASELINE_RECIPE);
    maskPanel.reset();
    generateFromForm();
  });

  elements.exportCsvButton.addEventListener("click", downloadGeneratedCsv);
  document.querySelector('#saveRecipeButton').addEventListener('click', () => {
    try {
      const recipe = readRecipeFromForm();
      engine.generateCoordinates(recipe);
      downloadFile('A3_LD_레시피_Masking.json', JSON.stringify(recipe, null, 2), 'application/json;charset=utf-8');
    } catch (error) { showError(error); }
  });
  document.querySelector('#loadRecipeFile').addEventListener('change', async event => {
    const [file] = event.target.files;
    if (!file) return;
    try {
      const recipe = JSON.parse(await file.text());
      engine.generateCoordinates(recipe);
      applyRecipeToForm({...engine.BASELINE_RECIPE, ...recipe});
      maskPanel.apply(recipe.masking, recipe.laserPolicy);
      updateDoeCenterInput();
      generateFromForm();
    } catch (error) { showError(error); }
    event.target.value = '';
  });
  elements.headFilter.addEventListener("change", () => renderCoordinateTable(true));
  elements.roleFilter.addEventListener("change", () => renderCoordinateTable(true));
  elements.gateFilter.addEventListener('change', () => renderCoordinateTable(true));
  for(const input of elements.recipeInputs) input.addEventListener('input', () => {
    updateDoeCenterInput();
    markInputsChanged();
  });
  elements.coordinateSearch.addEventListener("input", () => renderCoordinateTable(true));
  elements.previousPageButton.addEventListener("click", () => {
    if (state.page > 1) {
      state.page -= 1;
      renderCoordinateTable();
    }
  });
  elements.nextPageButton.addEventListener("click", () => {
    const pageCount = Math.max(1, Math.ceil(state.filteredRecords.length / state.pageSize));
    if (state.page < pageCount) {
      state.page += 1;
      renderCoordinateTable();
    }
  });
  elements.compareBundledButton.addEventListener("click", compareBundledGroundTruth);
  elements.groundTruthFile.addEventListener("change", async () => {
    const [file] = elements.groundTruthFile.files;
    if (!file) {
      return;
    }
    setComparisonMessage("loading", `${file.name} 파일을 읽고 있습니다…`);
    compareCsvText(await file.text(), file.name);
  });
  window.addEventListener("resize", () => {
    window.clearTimeout(state.resizeTimer);
    state.resizeTimer = window.setTimeout(() => {
      if (state.result) {
        drawFieldMap(state.result);
        maskPanel.draw(state.result);
      }
    }, 140);
  });

  applyRecipeToForm(engine.BASELINE_RECIPE);
  generateFromForm();
})();
