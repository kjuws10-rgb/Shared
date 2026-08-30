"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const engine = require("../src/coordinate-engine");

const groundTruthPath = path.resolve(
  __dirname,
  "..",
  "..",
  "20260830_105429",
  "가공좌표_스캔필드110mm_검증_16742건.csv",
);

test("기준 레시피가 14×25 중심 격자와 0.9 mm Pitch를 만든다", () => {
  const result = engine.generateCoordinates();

  assert.equal(result.derived.commandSpacingMm, 0.9);
  assert.equal(result.derived.gridCountX, 14);
  assert.equal(result.derived.gridCountY, 25);
  assert.equal(result.derived.cellCount, 45);
  assert.equal(result.derived.holeCountPerCenter, 16);
});

test("기준 레시피가 Raw 16,742건·고유 15,750건·반복 992건을 재현한다", () => {
  const result = engine.generateCoordinates();

  assert.equal(result.summary.rawRecordCount, 16742);
  assert.equal(result.summary.uniqueCenterCount, 15750);
  assert.equal(result.summary.repeatedLaneStartCount, 992);
  assert.equal(result.summary.nominalHoleCount, 252000);
  assert.equal(result.summary.duplicateExposureRiskHoleCount, 15872);
  assert.equal(result.summary.rawExposureHoleCount, 267872);
  assert.equal(result.baseline.applicable, true);
  assert.equal(result.baseline.passed, true);
});

test("Head별 Raw/고유/반복 개수가 기준값과 일치한다", () => {
  const result = engine.generateCoordinates();
  const actual = result.summary.headSummaries.map((head) => ({
    raw: head.rawRecordCount,
    unique: head.uniqueCenterCount,
    duplicates: head.repeatedLaneStartCount,
  }));
  const expected = engine.BASELINE_HEAD_COUNTS.map((head) => ({
    raw: head.raw,
    unique: head.unique,
    duplicates: head.duplicates,
  }));

  assert.deepEqual(actual, expected);
  assert.ok(result.summary.headSummaries.every((head) => head.laneCount === 125));
});

test("첫 좌표와 H3/H4 경계 좌표가 보고서 확정값과 일치한다", () => {
  const result = engine.generateCoordinates();
  const first = result.records[0];
  assert.equal(first.headId, "H01");
  assert.equal(first.cellId, 1);
  assert.equal(first.localGYmm, -29.1625);
  assert.equal(first.gxStageMm, -500.3375);

  const h3Last = result.uniqueCenters.find(
    (point) => point.headNumber === 3 && point.globalXmm === 329.4375,
  );
  const h4First = result.uniqueCenters.find(
    (point) => point.headNumber === 4 && point.globalXmm === 330.3375,
  );
  assert.ok(h3Last);
  assert.ok(h4First);
  assert.equal(h3Last.localGYmm, 54.4375);
  assert.equal(h4First.localGYmm, -54.6625);
  assert.equal(engine.round(h4First.globalXmm - h3Last.globalXmm, 4), 0.9);
});

test("첫 Lane 이후에는 반복 레코드 다음에 같은 가공 중심이 연속 기록된다", () => {
  const result = engine.generateCoordinates();

  for (let headNumber = 1; headNumber <= 8; headNumber += 1) {
    const headRecords = result.records.filter((record) => record.headNumber === headNumber);
    const repeats = headRecords.filter((record) => record.isRepeatedLaneStart);
    assert.equal(repeats.length, 124);

    for (const repeat of repeats) {
      const center = headRecords[repeat.sequenceNo];
      assert.equal(center.sequenceNo, repeat.sequenceNo + 1);
      assert.equal(center.expectedRole, "machining_center");
      assert.equal(center.consecutiveDuplicate, true);
      assert.equal(center.localGYmm, repeat.localGYmm);
      assert.equal(center.gxStageMm, repeat.gxStageMm);
      assert.equal(center.uniqueSequenceNo, repeat.uniqueSequenceNo);
    }
  }
});

test("전수 검증 CSV 16,742건과 좌표·순번·Metadata가 모두 일치한다", () => {
  const result = engine.generateCoordinates();
  const csv = fs.readFileSync(groundTruthPath, "utf8");
  const comparison = engine.compareGroundTruth(result.records, csv);

  assert.deepEqual(comparison, {
    passed: true,
    comparedRecordCount: 16742,
    generatedRecordCount: 16742,
    mismatchCount: 0,
    missingGroundTruthRecordCount: 0,
    maxDeltaGYmm: 0,
    maxDeltaGXmm: 0,
    mismatchSamples: [],
  });
});

test("Ground Truth 좌표가 바뀌면 전수 대조가 불일치를 검출한다", () => {
  const result = engine.generateCoordinates();
  const csv = fs
    .readFileSync(groundTruthPath, "utf8")
    .replace("-29.1625,-500.3375", "-29.0000,-500.3375");
  const comparison = engine.compareGroundTruth(result.records, csv);

  assert.equal(comparison.passed, false);
  assert.equal(comparison.mismatchCount, 1);
  assert.equal(comparison.mismatchSamples[0].headNumber, 1);
  assert.equal(comparison.mismatchSamples[0].sequenceNo, 1);
});

test("Lane 반복을 끄면 공간 고유 중심 15,750건만 출력한다", () => {
  const result = engine.generateCoordinates({ duplicateLaneStart: false });

  assert.equal(result.summary.rawRecordCount, 15750);
  assert.equal(result.summary.uniqueCenterCount, 15750);
  assert.equal(result.summary.repeatedLaneStartCount, 0);
  assert.equal(result.baseline.applicable, false);
});

test("Pitch 변경 시 중심 간격과 끝점 내림 정책을 다시 계산한다", () => {
  const result = engine.generateCoordinates({ commandPitchPx: 12 });

  assert.equal(result.derived.commandSpacingMm, 1.08);
  assert.equal(result.derived.gridCountX, 12);
  assert.equal(result.derived.gridCountY, 21);
  assert.equal(result.summary.uniqueCenterCount, 45 * 12 * 21);
  assert.equal(result.summary.repeatedLaneStartCount, 8 * (5 * 21 - 1));
  assert.equal(result.baseline.applicable, false);
});

test("전역 X 보정을 Head 선택 전에 적용해 H3/H4 분배를 바꾼다", () => {
  const baseline = engine.generateCoordinates();
  const corrected = engine.generateCoordinates({ globalCorrectionXmm: 0.6 });

  assert.equal(baseline.summary.headSummaries[2].uniqueCenterCount, 2375);
  assert.equal(baseline.summary.headSummaries[3].uniqueCenterCount, 2875);
  assert.equal(corrected.summary.headSummaries[2].uniqueCenterCount, 2250);
  assert.equal(corrected.summary.headSummaries[3].uniqueCenterCount, 3000);
});

test("Footprint 안전값 4개가 모두 있으면 최종 여유와 이탈을 판정한다", () => {
  const result = engine.generateCoordinates({
    correctionBudgetGyMm: 0.1,
    doeMaxGyOffsetMm: 0.1,
    beamRadiusMm: 0.1,
    mappingErrorMm: 0.1,
  });

  assert.equal(result.derived.safetyBudgetMm, 0.4);
  assert.equal(result.summary.finalFootprintMinMarginMm, -0.0625);
  assert.ok(result.summary.finalFootprintViolationCount > 0);
});

test("Footprint 안전값 일부만 입력하면 계산을 거부한다", () => {
  assert.throws(
    () => engine.generateCoordinates({ correctionBudgetGyMm: 0.1 }),
    /4개는 모두 입력하거나 모두 비워야/,
  );
});

test("생성 X 범위가 8 Head Coverage를 벗어나면 계산을 거부한다", () => {
  assert.throws(
    () => engine.generateCoordinates({ globalCorrectionXmm: 100 }),
    /Head Field 범위/,
  );
});

test("CSV 내보내기는 모든 Raw 레코드와 안전 상태를 포함한다", () => {
  const result = engine.generateCoordinates();
  const csv = engine.exportRowsToCsv(result.records);
  const lines = csv.split("\r\n");

  assert.equal(lines.length, 16743);
  assert.match(lines[0], /Head,SequenceNo,ExcelRow,GYmm,GXStageMm/);
  assert.match(lines[1], /UNVERIFIED/);
  assert.match(lines[1], /MACHINING_CENTER/);
});
