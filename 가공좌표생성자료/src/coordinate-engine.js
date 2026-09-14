(function coordinateEngineModule(root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CoordinateEngine = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function createCoordinateEngine() {
  "use strict";

  const EPSILON = 1e-9;

  const BASELINE_RECIPE = Object.freeze({
    pixelSizeMmPerPx: 0.09,
    designPixelCountX: 144,
    designPixelCountY: 256,
    doeBranchCountPerAxis: 4,
    commandPitchPx: 10,
    cellColumnCount: 9,
    cellRowCount: 5,
    cellPitchXmm: 100,
    cellPitchYmm: 200,
    escEdgeToGlassEdgeMm: 5,
    glassEdgeToAlignKeyMm: 15.5,
    glassCenterToScannerCenterMm: 5,
    sharedOriginOffsetMm: 0.3375,
    scanFieldWidthMm: 110,
    headCount: 8,
    mofBufferOffsetMm: 120,
    oddHeadDistanceMm: 380,
    globalCorrectionXmm: 0,
    globalCorrectionYmm: 0,
    duplicateLaneStart: true,
    correctionBudgetGyMm: null,
    doeMaxGyOffsetMm: null,
    beamRadiusMm: null,
    mappingErrorMm: null,
  });

  const BASELINE_HEAD_COUNTS = Object.freeze([
    { headNumber: 1, raw: 1874, unique: 1750, duplicates: 124 },
    { headNumber: 2, raw: 1874, unique: 1750, duplicates: 124 },
    { headNumber: 3, raw: 2499, unique: 2375, duplicates: 124 },
    { headNumber: 4, raw: 2999, unique: 2875, duplicates: 124 },
    { headNumber: 5, raw: 1874, unique: 1750, duplicates: 124 },
    { headNumber: 6, raw: 1874, unique: 1750, duplicates: 124 },
    { headNumber: 7, raw: 1874, unique: 1750, duplicates: 124 },
    { headNumber: 8, raw: 1874, unique: 1750, duplicates: 124 },
  ]);

  const NUMERIC_FIELDS = [
    "pixelSizeMmPerPx",
    "designPixelCountX",
    "designPixelCountY",
    "doeBranchCountPerAxis",
    "commandPitchPx",
    "cellColumnCount",
    "cellRowCount",
    "cellPitchXmm",
    "cellPitchYmm",
    "escEdgeToGlassEdgeMm",
    "glassEdgeToAlignKeyMm",
    "glassCenterToScannerCenterMm",
    "sharedOriginOffsetMm",
    "scanFieldWidthMm",
    "headCount",
    "mofBufferOffsetMm",
    "oddHeadDistanceMm",
    "globalCorrectionXmm",
    "globalCorrectionYmm",
  ];

  const OPTIONAL_SAFETY_FIELDS = [
    "correctionBudgetGyMm",
    "doeMaxGyOffsetMm",
    "beamRadiusMm",
    "mappingErrorMm",
  ];

  function round(value, digits = 10) {
    if (!Number.isFinite(value)) {
      return value;
    }

    const factor = 10 ** digits;
    return Math.round((value + Number.EPSILON) * factor) / factor;
  }

  function nearlyEqual(left, right, tolerance = EPSILON) {
    return Math.abs(Number(left) - Number(right)) <= tolerance;
  }

  function asFiniteNumber(value, fieldName) {
    const numberValue = typeof value === "number" ? value : Number(String(value).trim());
    if (!Number.isFinite(numberValue)) {
      throw new Error(`${fieldName} 값은 유한한 숫자여야 합니다.`);
    }
    return numberValue;
  }

  function asOptionalNonNegativeNumber(value, fieldName) {
    if (value === null || value === undefined || String(value).trim() === "") {
      return null;
    }

    const numberValue = asFiniteNumber(value, fieldName);
    if (numberValue < 0) {
      throw new Error(`${fieldName} 값은 0 이상이어야 합니다.`);
    }
    return numberValue;
  }

  function normalizeRecipe(input = {}) {
    const normalized = {};

    for (const fieldName of NUMERIC_FIELDS) {
      const sourceValue = Object.prototype.hasOwnProperty.call(input, fieldName)
        ? input[fieldName]
        : BASELINE_RECIPE[fieldName];
      normalized[fieldName] = asFiniteNumber(sourceValue, fieldName);
    }

    for (const fieldName of OPTIONAL_SAFETY_FIELDS) {
      const sourceValue = Object.prototype.hasOwnProperty.call(input, fieldName)
        ? input[fieldName]
        : BASELINE_RECIPE[fieldName];
      normalized[fieldName] = asOptionalNonNegativeNumber(sourceValue, fieldName);
    }

    const duplicateValue = Object.prototype.hasOwnProperty.call(input, "duplicateLaneStart")
      ? input.duplicateLaneStart
      : BASELINE_RECIPE.duplicateLaneStart;
    normalized.duplicateLaneStart = !(
      duplicateValue === false ||
      duplicateValue === 0 ||
      String(duplicateValue).toLowerCase() === "false"
    );

    const activeCellCount=normalized.cellColumnCount*normalized.cellRowCount;
    if(Array.isArray(input.cellConfigurations)) for(const [i,c] of input.cellConfigurations.slice(0,activeCellCount).entries()) {
      for(const key of ['alignToFirstPixelXmm','alignToFirstPixelYmm']) if(c[key]===null || c[key]===undefined || String(c[key]).trim()==='') throw new Error(`Cell ${i+1}의 첫 픽셀 ${key.endsWith('Xmm')?'X':'Y'} 거리를 입력하세요.`);
    }
    normalized.cellConfigurations = Array.isArray(input.cellConfigurations) ? input.cellConfigurations.map((c,i)=>i>=activeCellCount?{...c}:({
      modelType: asFiniteNumber(c.modelType ?? 1, `Cell ${i+1} 모델`),
      alignToFirstPixelXmm: asFiniteNumber(c.alignToFirstPixelXmm, `Cell ${i+1} 첫 픽셀 X`),
      alignToFirstPixelYmm: asFiniteNumber(c.alignToFirstPixelYmm, `Cell ${i+1} 첫 픽셀 Y`),
      rotationDeg: asFiniteNumber(c.rotationDeg ?? 0, `Cell ${i+1} 회전각`)
    })) : [];
    if(normalized.cellConfigurations.length && normalized.cellConfigurations.length < normalized.cellColumnCount*normalized.cellRowCount) throw new Error('사용 Cell의 배치 정보가 부족합니다.');
    validateRecipe(normalized);
    return normalized;
  }

  function validateRecipe(recipe) {
    const positiveFields = [
      "pixelSizeMmPerPx",
      "designPixelCountX",
      "designPixelCountY",
      "doeBranchCountPerAxis",
      "commandPitchPx",
      "cellColumnCount",
      "cellRowCount",
      "cellPitchXmm",
      "cellPitchYmm",
      "scanFieldWidthMm",
      "headCount",
    ];

    for (const fieldName of positiveFields) {
      if (recipe[fieldName] <= 0) {
        throw new Error(`${fieldName} 값은 0보다 커야 합니다.`);
      }
    }

    const integerFields = [
      "designPixelCountX",
      "designPixelCountY",
      "doeBranchCountPerAxis",
      "cellColumnCount",
      "cellRowCount",
      "headCount",
    ];

    for (const fieldName of integerFields) {
      if (!Number.isInteger(recipe[fieldName])) {
        throw new Error(`${fieldName} 값은 정수여야 합니다.`);
      }
    }

    const gridCountX = Math.floor(recipe.designPixelCountX / recipe.commandPitchPx);
    const gridCountY = Math.floor(recipe.designPixelCountY / recipe.commandPitchPx);
    if (gridCountX < 1 || gridCountY < 1) {
      throw new Error("피치는 X/Y 설계 픽셀 수보다 작아 최소 한 개 이상의 중심을 만들어야 합니다.");
    }

    const suppliedSafetyValues = OPTIONAL_SAFETY_FIELDS.filter(
      (fieldName) => recipe[fieldName] !== null,
    ).length;
    if (suppliedSafetyValues !== 0 && suppliedSafetyValues !== OPTIONAL_SAFETY_FIELDS.length) {
      throw new Error("최종 Footprint 판정값 4개는 모두 입력하거나 모두 비워야 합니다.");
    }

    const commandSpacingMm = recipe.pixelSizeMmPerPx * recipe.commandPitchPx;
    const xReferenceDistanceMm =
      recipe.escEdgeToGlassEdgeMm +
      recipe.glassEdgeToAlignKeyMm +
      recipe.glassCenterToScannerCenterMm;
    const minGlobalX =
      xReferenceDistanceMm + recipe.sharedOriginOffsetMm + recipe.globalCorrectionXmm;
    const maxGlobalX =
      (recipe.cellColumnCount - 1) * recipe.cellPitchXmm +
      xReferenceDistanceMm +
      recipe.sharedOriginOffsetMm +
      (gridCountX - 1) * commandSpacingMm +
      recipe.globalCorrectionXmm;
    const fieldCoverageMax = recipe.scanFieldWidthMm * recipe.headCount;

    if (!recipe.cellConfigurations.length && (minGlobalX < 0 || maxGlobalX >= fieldCoverageMax)) {
      throw new Error(
        `생성 X 범위 ${round(minGlobalX, 4)}…${round(maxGlobalX, 4)} mm가 ` +
          `Head Field 범위 0…${round(fieldCoverageMax, 4)} mm를 벗어납니다.`,
      );
    }
  }

  function getDerivedRecipe(recipe) {
    const commandSpacingMm = round(recipe.pixelSizeMmPerPx * recipe.commandPitchPx);
    const gridCountX = Math.floor(recipe.designPixelCountX / recipe.commandPitchPx);
    const gridCountY = Math.floor(recipe.designPixelCountY / recipe.commandPitchPx);
    const cellCount = recipe.cellColumnCount * recipe.cellRowCount;
    const xReferenceDistanceMm = round(
      recipe.escEdgeToGlassEdgeMm +
        recipe.glassEdgeToAlignKeyMm +
        recipe.glassCenterToScannerCenterMm,
    );
    const holeCountPerCenter = recipe.doeBranchCountPerAxis ** 2;
    const scanFieldHalfWidthMm = recipe.scanFieldWidthMm / 2;
    const safetyValuesSupplied = OPTIONAL_SAFETY_FIELDS.every(
      (fieldName) => recipe[fieldName] !== null,
    );
    const safetyBudgetMm = safetyValuesSupplied
      ? round(
          recipe.correctionBudgetGyMm +
            recipe.doeMaxGyOffsetMm +
            recipe.beamRadiusMm +
            recipe.mappingErrorMm,
        )
      : null;

    return {
      commandSpacingMm,
      gridCountX,
      gridCountY,
      cellCount,
      xReferenceDistanceMm,
      holeCountPerCenter,
      scanFieldHalfWidthMm,
      safetyValuesSupplied,
      safetyBudgetMm,
    };
  }

  function makePoint(recipe, derived, cellRow, cellCol, gridIndexY, gridIndexX) {
    const cellId = (cellRow - 1) * recipe.cellColumnCount + cellCol;
    const conf = recipe.cellConfigurations[cellId-1] || {modelType:1,alignToFirstPixelXmm:(cellCol-1)*recipe.cellPitchXmm,alignToFirstPixelYmm:(cellRow-1)*recipe.cellPitchYmm,rotationDeg:0};
    const cellOriginXmm = conf.alignToFirstPixelXmm;
    const cellOriginYmm = conf.alignToFirstPixelYmm;
    const angle=conf.rotationDeg*Math.PI/180,cos=Math.cos(angle),sin=Math.sin(angle);
    const qx=recipe.sharedOriginOffsetMm+gridIndexX*derived.commandSpacingMm;
    const qy=recipe.sharedOriginOffsetMm+gridIndexY*derived.commandSpacingMm;
    const cellFirstCenterXmm=round(derived.xReferenceDistanceMm+cellOriginXmm+cos*recipe.sharedOriginOffsetMm-sin*recipe.sharedOriginOffsetMm);
    const cellFirstCenterYmm=round(cellOriginYmm+sin*recipe.sharedOriginOffsetMm+cos*recipe.sharedOriginOffsetMm);
    const nominalGlobalXmm=round(derived.xReferenceDistanceMm+cellOriginXmm+cos*qx-sin*qy);
    const nominalGlobalYmm=round(cellOriginYmm+sin*qx+cos*qy);
    const globalXmm = round(nominalGlobalXmm + recipe.globalCorrectionXmm);
    const globalYmm = round(nominalGlobalYmm + recipe.globalCorrectionYmm);
    const headNumber = Math.floor(globalXmm / recipe.scanFieldWidthMm) + 1;
    if(headNumber<1 || headNumber>recipe.headCount) throw new Error(`Cell ${cellId}의 X=${globalXmm} mm가 Head 범위를 벗어납니다.`);
    const headCenterGlobalXmm = round(
      derived.scanFieldHalfWidthMm + recipe.scanFieldWidthMm * (headNumber - 1),
    );
    const localGYmm = round(globalXmm - headCenterGlobalXmm);
    const gxStageMm = round(
      -(
        globalYmm +
        recipe.mofBufferOffsetMm +
        (headNumber % 2 === 1 ? recipe.oddHeadDistanceMm : 0)
      ),
    );
    const centerLeftMarginMm = round(localGYmm + derived.scanFieldHalfWidthMm);
    const centerRightMarginMm = round(derived.scanFieldHalfWidthMm - localGYmm);
    const centerNominalMarginMm = round(
      Math.min(centerLeftMarginMm, centerRightMarginMm),
    );
    const centerInNominalField =
      localGYmm >= -derived.scanFieldHalfWidthMm &&
      localGYmm < derived.scanFieldHalfWidthMm;
    const finalFootprintMarginMm = derived.safetyValuesSupplied
      ? round(derived.scanFieldHalfWidthMm - Math.abs(localGYmm) - derived.safetyBudgetMm)
      : null;
    const fieldValid = derived.safetyValuesSupplied
      ? finalFootprintMarginMm > 0
      : null;

    return {
      headNumber,
      headId: `H${String(headNumber).padStart(2, "0")}`,
      cellId,
      cellCol,
      cellRow,
      cellOriginXmm,
      cellOriginYmm,
      cellModelType:conf.modelType,
      cellRotationDeg:conf.rotationDeg,
      cellFirstCenterXmm,
      cellFirstCenterYmm,
      commandGridIndexX: gridIndexX,
      commandGridIndexY: gridIndexY,
      designPixelXpx: round(gridIndexX * recipe.commandPitchPx),
      designPixelYpx: round(gridIndexY * recipe.commandPitchPx),
      laneNo: (cellRow - 1) * derived.gridCountY + gridIndexY + 1,
      laneId: `Y${String((cellRow - 1) * derived.gridCountY + gridIndexY + 1).padStart(3, "0")}`,
      nominalGlobalXmm,
      nominalGlobalYmm,
      globalXmm,
      globalYmm,
      headCenterGlobalXmm,
      localGYmm,
      gxStageMm,
      centerLeftMarginMm,
      centerRightMarginMm,
      centerNominalMarginMm,
      centerInNominalField,
      finalFootprintMarginMm,
      fieldValid,
    };
  }

  function sameCoordinate(left, right) {
    return (
      left &&
      right &&
      nearlyEqual(left.localGYmm, right.localGYmm) &&
      nearlyEqual(left.gxStageMm, right.gxStageMm)
    );
  }

  function makeRawRecord(point, details) {
    return {
      ...point,
      sequenceNo: details.sequenceNo,
      excelRow: details.sequenceNo + 4,
      uniqueSequenceNo: details.uniqueSequenceNo,
      lanePointIndex: details.lanePointIndex,
      expectedRole: details.isRepeatedLaneStart
        ? "repeated_lane_start"
        : "machining_center",
      isRepeatedLaneStart: details.isRepeatedLaneStart,
      consecutiveDuplicate: details.consecutiveDuplicate,
      commandType: details.isRepeatedLaneStart
        ? "UNRESOLVED_LANE_START"
        : "MACHINING_CENTER",
      laserGate: "UNRESOLVED",
    };
  }

  function generateCoordinates(inputRecipe = {}) {
    const recipe = normalizeRecipe(inputRecipe);
    const derived = getDerivedRecipe(recipe);
    const lanesByHead = Array.from({ length: recipe.headCount }, () => new Map());

    for (let cellRow = 1; cellRow <= recipe.cellRowCount; cellRow += 1) {
      for (let gridIndexY = 0; gridIndexY < derived.gridCountY; gridIndexY += 1) {
        const laneNo = (cellRow - 1) * derived.gridCountY + gridIndexY + 1;

        for (let cellCol = 1; cellCol <= recipe.cellColumnCount; cellCol += 1) {
          for (let gridIndexX = 0; gridIndexX < derived.gridCountX; gridIndexX += 1) {
            const point = makePoint(
              recipe,
              derived,
              cellRow,
              cellCol,
              gridIndexY,
              gridIndexX,
            );
            const laneMap = lanesByHead[point.headNumber - 1];
            if (!laneMap.has(laneNo)) {
              laneMap.set(laneNo, []);
            }
            laneMap.get(laneNo).push(point);
          }
        }
      }
    }

    const records = [];
    const uniqueCenters = [];
    const headSummaries = [];

    for (let headIndex = 0; headIndex < lanesByHead.length; headIndex += 1) {
      const headNumber = headIndex + 1;
      const laneEntries = [...lanesByHead[headIndex].entries()].sort(
        ([leftLaneNo], [rightLaneNo]) => leftLaneNo - rightLaneNo,
      );
      let sequenceNo = 0;
      let uniqueSequenceNo = 0;
      let repeatedLaneStartCount = 0;
      let previousRawRecord = null;
      const headRecords = [];
      const headUniqueCenters = [];

      for (let activeLaneIndex = 0; activeLaneIndex < laneEntries.length; activeLaneIndex += 1) {
        const [, lanePoints] = laneEntries[activeLaneIndex];

        for (let lanePointIndex = 0; lanePointIndex < lanePoints.length; lanePointIndex += 1) {
          const point = lanePoints[lanePointIndex];
          uniqueSequenceNo += 1;
          const pointWithSequence = {
            ...point,
            uniqueSequenceNo,
            lanePointIndex: lanePointIndex + 1,
          };
          uniqueCenters.push(pointWithSequence);
          headUniqueCenters.push(pointWithSequence);

          if (
            recipe.duplicateLaneStart &&
            activeLaneIndex > 0 &&
            lanePointIndex === 0
          ) {
            sequenceNo += 1;
            const duplicateRecord = makeRawRecord(point, {
              sequenceNo,
              uniqueSequenceNo,
              lanePointIndex: lanePointIndex + 1,
              isRepeatedLaneStart: true,
              consecutiveDuplicate: sameCoordinate(previousRawRecord, point),
            });
            records.push(duplicateRecord);
            headRecords.push(duplicateRecord);
            previousRawRecord = duplicateRecord;
            repeatedLaneStartCount += 1;
          }

          sequenceNo += 1;
          const centerRecord = makeRawRecord(point, {
            sequenceNo,
            uniqueSequenceNo,
            lanePointIndex: lanePointIndex + 1,
            isRepeatedLaneStart: false,
            consecutiveDuplicate: sameCoordinate(previousRawRecord, point),
          });
          records.push(centerRecord);
          headRecords.push(centerRecord);
          previousRawRecord = centerRecord;
        }
      }

      const localValues = headUniqueCenters.map((point) => point.localGYmm);
      const marginValues = headUniqueCenters.map((point) => point.centerNominalMarginMm);
      const finalMarginValues = headUniqueCenters
        .map((point) => point.finalFootprintMarginMm)
        .filter((value) => value !== null);
      headSummaries.push({
        headNumber,
        headId: `H${String(headNumber).padStart(2, "0")}`,
        laneCount: laneEntries.length,
        rawRecordCount: headRecords.length,
        uniqueCenterCount: headUniqueCenters.length,
        repeatedLaneStartCount,
        nominalHoleCount: headUniqueCenters.length * derived.holeCountPerCenter,
        localGYMinMm: localValues.length ? Math.min(...localValues) : null,
        localGYMaxMm: localValues.length ? Math.max(...localValues) : null,
        centerNominalMinMarginMm: marginValues.length ? Math.min(...marginValues) : null,
        centerFieldViolationCount: headUniqueCenters.filter(
          (point) => !point.centerInNominalField,
        ).length,
        finalFootprintMinMarginMm: finalMarginValues.length
          ? Math.min(...finalMarginValues)
          : null,
        finalFootprintViolationCount: derived.safetyValuesSupplied
          ? headUniqueCenters.filter((point) => point.fieldValid === false).length
          : null,
      });
    }

    const repeatedLaneStartCount = records.filter(
      (record) => record.isRepeatedLaneStart,
    ).length;
    const centerFieldViolationCount = uniqueCenters.filter(
      (point) => !point.centerInNominalField,
    ).length;
    const summary = {
      rawRecordCount: records.length,
      uniqueCenterCount: uniqueCenters.length,
      repeatedLaneStartCount,
      cellCount: derived.cellCount,
      laneCountPerHead: recipe.cellRowCount * derived.gridCountY,
      nominalHoleCount: uniqueCenters.length * derived.holeCountPerCenter,
      duplicateExposureRiskHoleCount:
        repeatedLaneStartCount * derived.holeCountPerCenter,
      rawExposureHoleCount: records.length * derived.holeCountPerCenter,
      centerFieldViolationCount,
      rawCenterFieldViolationCount: records.filter(
        (record) => !record.centerInNominalField,
      ).length,
      centerNominalMinMarginMm: Math.min(
        ...uniqueCenters.map((point) => point.centerNominalMarginMm),
      ),
      finalFootprintMinMarginMm: derived.safetyValuesSupplied
        ? Math.min(...uniqueCenters.map((point) => point.finalFootprintMarginMm))
        : null,
      finalFootprintViolationCount: derived.safetyValuesSupplied
        ? uniqueCenters.filter((point) => point.fieldValid === false).length
        : null,
      headSummaries,
    };

    const result = {
      recipe,
      derived,
      records,
      uniqueCenters,
      summary,
    };
    result.baseline = runBaselineChecks(result);
    return result;
  }

  function isBaselineRecipe(recipe) {
    if(recipe.cellConfigurations?.slice(0,recipe.cellColumnCount*recipe.cellRowCount).some((c,i)=>c.rotationDeg!==0 || !nearlyEqual(c.alignToFirstPixelXmm,(i%recipe.cellColumnCount)*recipe.cellPitchXmm) || !nearlyEqual(c.alignToFirstPixelYmm,Math.floor(i/recipe.cellColumnCount)*recipe.cellPitchYmm))) return false;
    const comparedFields = [
      ...NUMERIC_FIELDS,
      "duplicateLaneStart",
    ];
    return comparedFields.every((fieldName) => {
      if (typeof BASELINE_RECIPE[fieldName] === "number") {
        return nearlyEqual(recipe[fieldName], BASELINE_RECIPE[fieldName]);
      }
      return recipe[fieldName] === BASELINE_RECIPE[fieldName];
    });
  }

  function makeCheck(id, label, expected, actual, passed) {
    return { id, label, expected, actual, passed: Boolean(passed) };
  }

  function runBaselineChecks(result) {
    const { recipe, derived, records, summary } = result;
    const applicable = isBaselineRecipe(recipe);

    if (!applicable) {
      return {
        applicable: false,
        passed: null,
        checks: [],
        message: "기준 레시피가 변경되어 16,742건 Golden 기준 비교를 건너뜁니다.",
      };
    }

    const first = records[0];
    const h3Boundary = records.find(
      (record) =>
        record.headNumber === 3 &&
        !record.isRepeatedLaneStart &&
        nearlyEqual(record.globalXmm, 329.4375),
    );
    const h4Boundary = records.find(
      (record) =>
        record.headNumber === 4 &&
        !record.isRepeatedLaneStart &&
        nearlyEqual(record.globalXmm, 330.3375),
    );
    const actualHeadCounts = summary.headSummaries
      .map(
        (head) =>
          `${head.headId}:${head.rawRecordCount}/${head.uniqueCenterCount}/${head.repeatedLaneStartCount}`,
      )
      .join(", ");
    const expectedHeadCounts = BASELINE_HEAD_COUNTS
      .map(
        (head) =>
          `H${String(head.headNumber).padStart(2, "0")}:${head.raw}/${head.unique}/${head.duplicates}`,
      )
      .join(", ");

    const checks = [
      makeCheck(
        "spacing",
        "가공 중심 간격",
        "0.9 mm",
        `${derived.commandSpacingMm} mm`,
        nearlyEqual(derived.commandSpacingMm, 0.9),
      ),
      makeCheck(
        "grid",
        "Cell당 중심 격자",
        "14 × 25",
        `${derived.gridCountX} × ${derived.gridCountY}`,
        derived.gridCountX === 14 && derived.gridCountY === 25,
      ),
      makeCheck(
        "unique",
        "공간 고유 중심",
        "15,750",
        summary.uniqueCenterCount.toLocaleString("ko-KR"),
        summary.uniqueCenterCount === 15750,
      ),
      makeCheck(
        "raw",
        "Raw 좌표 레코드",
        "16,742",
        summary.rawRecordCount.toLocaleString("ko-KR"),
        summary.rawRecordCount === 16742,
      ),
      makeCheck(
        "duplicates",
        "Lane 시작 반복",
        "992",
        summary.repeatedLaneStartCount.toLocaleString("ko-KR"),
        summary.repeatedLaneStartCount === 992,
      ),
      makeCheck(
        "head-counts",
        "Head별 Raw/고유/반복",
        expectedHeadCounts,
        actualHeadCounts,
        summary.headSummaries.every((head, index) => {
          const expected = BASELINE_HEAD_COUNTS[index];
          return (
            head.rawRecordCount === expected.raw &&
            head.uniqueCenterCount === expected.unique &&
            head.repeatedLaneStartCount === expected.duplicates
          );
        }),
      ),
      makeCheck(
        "first-coordinate",
        "Cell 1 첫 좌표",
        "GY −29.1625 / GX −500.3375 mm",
        first
          ? `GY ${first.localGYmm} / GX ${first.gxStageMm} mm`
          : "없음",
        first &&
          nearlyEqual(first.localGYmm, -29.1625) &&
          nearlyEqual(first.gxStageMm, -500.3375),
      ),
      makeCheck(
        "h3-h4-boundary",
        "H3/H4 경계 Pitch",
        "0.9 mm 연속",
        h3Boundary && h4Boundary
          ? `${round(h4Boundary.globalXmm - h3Boundary.globalXmm, 4)} mm`
          : "경계점 없음",
        h3Boundary &&
          h4Boundary &&
          nearlyEqual(h4Boundary.globalXmm - h3Boundary.globalXmm, 0.9),
      ),
      makeCheck(
        "field",
        "명목 110 mm Field 이탈",
        "0",
        String(summary.centerFieldViolationCount),
        summary.centerFieldViolationCount === 0,
      ),
      makeCheck(
        "minimum-margin",
        "최소 중심 여유",
        "0.3375 mm",
        `${summary.centerNominalMinMarginMm} mm`,
        nearlyEqual(summary.centerNominalMinMarginMm, 0.3375),
      ),
    ];

    return {
      applicable: true,
      passed: checks.every((check) => check.passed),
      checks,
      message: checks.every((check) => check.passed)
        ? "기준 레시피 핵심 검증을 모두 통과했습니다."
        : "기준 레시피 검증에서 불일치가 발견됐습니다.",
    };
  }

  function parseCsvLine(line) {
    const cells = [];
    let current = "";
    let quoted = false;

    for (let index = 0; index < line.length; index += 1) {
      const character = line[index];
      if (character === '"') {
        if (quoted && line[index + 1] === '"') {
          current += '"';
          index += 1;
        } else {
          quoted = !quoted;
        }
      } else if (character === "," && !quoted) {
        cells.push(current);
        current = "";
      } else {
        current += character;
      }
    }
    cells.push(current);
    return cells;
  }

  function compareGroundTruth(records, csvText, tolerance = EPSILON) {
    const lines = String(csvText)
      .replace(/^\uFEFF/, "")
      .split(/\r?\n/)
      .filter((line) => line.trim() !== "");

    if (lines.length < 2) {
      throw new Error("비교 CSV에 헤더와 데이터 행이 필요합니다.");
    }

    const headers = parseCsvLine(lines[0]);
    const requiredHeaders = ["Head", "SequenceNo", "ActualGYMm", "ActualGXMm"];
    for (const requiredHeader of requiredHeaders) {
      if (!headers.includes(requiredHeader)) {
        throw new Error(`비교 CSV에 ${requiredHeader} 열이 없습니다.`);
      }
    }

    const headerIndex = Object.fromEntries(
      headers.map((header, index) => [header, index]),
    );
    const generatedByKey = new Map(
      records.map((record) => [`${record.headNumber}:${record.sequenceNo}`, record]),
    );
    const numericMetadataColumns = [
      ["ExcelRow", "excelRow"],
      ["CellId", "cellId"],
      ["CellCol", "cellCol"],
      ["CellRow", "cellRow"],
      ["CommandGridIndexX", "commandGridIndexX"],
      ["CommandGridIndexY", "commandGridIndexY"],
      ["LaneNo", "laneNo"],
      ["UniqueSequence", "uniqueSequenceNo"],
      ["DesignPixelXpx", "designPixelXpx"],
      ["DesignPixelYpx", "designPixelYpx"],
      ["HeadCenterGlobalXMm", "headCenterGlobalXmm"],
      ["ReconstructedGlobalReviewXMm", "globalXmm"],
      ["RecipeGlobalReviewXMm", "nominalGlobalXmm"],
      ["CenterNominalLeftMarginMm", "centerLeftMarginMm"],
      ["CenterNominalRightMarginMm", "centerRightMarginMm"],
      ["CenterNominalMarginMm", "centerNominalMarginMm"],
      ["HeadBy110mmField", "headNumber"],
    ];
    let mismatchCount = 0;
    let maxDeltaGYmm = 0;
    let maxDeltaGXmm = 0;
    const mismatchSamples = [];

    for (let lineIndex = 1; lineIndex < lines.length; lineIndex += 1) {
      const cells = parseCsvLine(lines[lineIndex]);
      const headNumber = Number(cells[headerIndex.Head]);
      const sequenceNo = Number(cells[headerIndex.SequenceNo]);
      const actualGYmm = Number(cells[headerIndex.ActualGYMm]);
      const actualGXmm = Number(cells[headerIndex.ActualGXMm]);
      const key = `${headNumber}:${sequenceNo}`;
      const generated = generatedByKey.get(key);
      let reason = null;

      if (!generated) {
        reason = "생성 레코드 없음";
      } else {
        const deltaGYmm = Math.abs(generated.localGYmm - actualGYmm);
        const deltaGXmm = Math.abs(generated.gxStageMm - actualGXmm);
        maxDeltaGYmm = Math.max(maxDeltaGYmm, deltaGYmm);
        maxDeltaGXmm = Math.max(maxDeltaGXmm, deltaGXmm);

        if (deltaGYmm > tolerance || deltaGXmm > tolerance) {
          reason = `좌표 차이 GY=${deltaGYmm}, GX=${deltaGXmm}`;
        } else if (
          headerIndex.ExpectedRole !== undefined &&
          generated.expectedRole !== cells[headerIndex.ExpectedRole]
        ) {
          reason = "ExpectedRole 불일치";
        } else if (headerIndex.ConsecutiveDuplicate !== undefined) {
          const generatedFlag = generated.consecutiveDuplicate ? "Y" : "N";
          if (generatedFlag !== cells[headerIndex.ConsecutiveDuplicate]) {
            reason = "ConsecutiveDuplicate 불일치";
          }
        }

        if (!reason) {
          for (const [csvColumn, generatedField] of numericMetadataColumns) {
            if (headerIndex[csvColumn] === undefined) {
              continue;
            }
            const groundTruthValue = Number(cells[headerIndex[csvColumn]]);
            if (!nearlyEqual(generated[generatedField], groundTruthValue, tolerance)) {
              reason = `${csvColumn} 불일치`;
              break;
            }
          }
        }
      }

      if (reason) {
        mismatchCount += 1;
        if (mismatchSamples.length < 20) {
          mismatchSamples.push({ headNumber, sequenceNo, reason });
        }
      }
      generatedByKey.delete(key);
    }

    const missingGroundTruthRecordCount = generatedByKey.size;
    return {
      passed:
        mismatchCount === 0 &&
        missingGroundTruthRecordCount === 0 &&
        lines.length - 1 === records.length,
      comparedRecordCount: lines.length - 1,
      generatedRecordCount: records.length,
      mismatchCount,
      missingGroundTruthRecordCount,
      maxDeltaGYmm: round(maxDeltaGYmm, 12),
      maxDeltaGXmm: round(maxDeltaGXmm, 12),
      mismatchSamples,
    };
  }

  const CSV_COLUMNS = Object.freeze([
    ["Head", (record) => record.headNumber],
    ["SequenceNo", (record) => record.sequenceNo],
    ["ExcelRow", (record) => record.excelRow],
    ["GYmm", (record) => record.localGYmm],
    ["GXStageMm", (record) => record.gxStageMm],
    ["ExpectedRole", (record) => record.expectedRole],
    ["ConsecutiveDuplicate", (record) => (record.consecutiveDuplicate ? "Y" : "N")],
    ["CellId", (record) => record.cellId],
    ["CellCol", (record) => record.cellCol],
    ["CellRow", (record) => record.cellRow],
    ["CommandGridIndexX", (record) => record.commandGridIndexX],
    ["CommandGridIndexY", (record) => record.commandGridIndexY],
    ["DesignPixelXpx", (record) => record.designPixelXpx],
    ["DesignPixelYpx", (record) => record.designPixelYpx],
    ["LaneNo", (record) => record.laneNo],
    ["LanePointIndex", (record) => record.lanePointIndex],
    ["UniqueSequenceNo", (record) => record.uniqueSequenceNo],
    ["NominalGlobalXmm", (record) => record.nominalGlobalXmm],
    ["NominalGlobalYmm", (record) => record.nominalGlobalYmm],
    ["CorrectedGlobalXmm", (record) => record.globalXmm],
    ["CorrectedGlobalYmm", (record) => record.globalYmm],
    ["HeadCenterGlobalXmm", (record) => record.headCenterGlobalXmm],
    ["CenterNominalMarginMm", (record) => record.centerNominalMarginMm],
    ["CenterInNominalField", (record) => (record.centerInNominalField ? "Y" : "N")],
    [
      "FinalFootprintMarginMm",
      (record) =>
        record.finalFootprintMarginMm === null ? "UNVERIFIED" : record.finalFootprintMarginMm,
    ],
    [
      "FieldValid",
      (record) =>
        record.fieldValid === null ? "UNVERIFIED" : record.fieldValid ? "Y" : "N",
    ],
    ["CommandType", (record) => record.commandType],
    ["LaserGate", (record) => record.laserGate],
  ]);

  function escapeCsvValue(value) {
    const stringValue = value === null || value === undefined ? "" : String(value);
    if (/[",\r\n]/.test(stringValue)) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  }

  function exportRowsToCsv(records) {
    const header = CSV_COLUMNS.map(([columnName]) => escapeCsvValue(columnName)).join(",");
    const rows = records.map((record) =>
      CSV_COLUMNS.map(([, selector]) => escapeCsvValue(selector(record))).join(","),
    );
    return [header, ...rows].join("\r\n");
  }

  return Object.freeze({
    BASELINE_RECIPE,
    BASELINE_HEAD_COUNTS,
    normalizeRecipe,
    getDerivedRecipe,
    generateCoordinates,
    runBaselineChecks,
    compareGroundTruth,
    exportRowsToCsv,
    round,
    nearlyEqual,
  });
});
