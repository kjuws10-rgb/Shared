#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const engine = require("./src/masking-engine");

function printHelp() {
  process.stdout.write(`
A3 LD 좌표 생성 CLI

사용법:
  node cli.js [--recipe recipe.json] [--out generated.csv]
  node cli.js --summary-only

옵션:
  --recipe <파일>       기준값을 덮어쓸 JSON 레시피
  --out <파일>          생성한 Raw 좌표 CSV 저장 경로
  --no-lane-duplicates  Lane 시작 반복 레코드를 생성하지 않음
  --summary-only        요약과 기준 검증 결과만 출력
  --help                도움말 표시

예시:
  node cli.js --out A3_LD_coordinates.csv
  node cli.js --recipe custom-recipe.json --out custom.csv
`);
}

function parseArguments(argv) {
  const parsed = {
    recipePath: null,
    outputPath: null,
    summaryOnly: false,
    duplicateLaneStartOverride: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--help" || argument === "-h") {
      parsed.help = true;
    } else if (argument === "--summary-only") {
      parsed.summaryOnly = true;
    } else if (argument === "--no-lane-duplicates") {
      parsed.duplicateLaneStartOverride = false;
    } else if (argument === "--recipe") {
      index += 1;
      if (!argv[index]) {
        throw new Error("--recipe 뒤에 JSON 파일 경로가 필요합니다.");
      }
      parsed.recipePath = argv[index];
    } else if (argument === "--out") {
      index += 1;
      if (!argv[index]) {
        throw new Error("--out 뒤에 CSV 저장 경로가 필요합니다.");
      }
      parsed.outputPath = argv[index];
    } else {
      throw new Error(`알 수 없는 옵션: ${argument}`);
    }
  }

  return parsed;
}

function readRecipe(recipePath) {
  if (!recipePath) {
    return {};
  }
  const absolutePath = path.resolve(recipePath);
  const contents = fs.readFileSync(absolutePath, "utf8");
  return JSON.parse(contents);
}

function buildSummary(result) {
  return {
    commandSpacingMm: result.derived.commandSpacingMm,
    gridPerCell: `${result.derived.gridCountX}x${result.derived.gridCountY}`,
    cellCount: result.summary.cellCount,
    rawRecordCount: result.summary.rawRecordCount,
    uniqueCenterCount: result.summary.uniqueCenterCount,
    repeatedLaneStartCount: result.summary.repeatedLaneStartCount,
    nominalHoleCount: result.summary.nominalHoleCount,
    centerFieldViolationCount: result.summary.centerFieldViolationCount,
    centerNominalMinMarginMm: result.summary.centerNominalMinMarginMm,
    finalFootprintMinMarginMm: result.summary.finalFootprintMinMarginMm,
    finalFootprintViolationCount: result.summary.finalFootprintViolationCount,
    baselineApplicable: result.baseline.applicable,
    baselinePassed: result.baseline.passed,
    masking: result.masking.summary,
    headCounts: result.summary.headSummaries.map((head) => ({
      headId: head.headId,
      raw: head.rawRecordCount,
      unique: head.uniqueCenterCount,
      duplicates: head.repeatedLaneStartCount,
      localGYMinMm: head.localGYMinMm,
      localGYMaxMm: head.localGYMaxMm,
      minimumMarginMm: head.centerNominalMinMarginMm,
    })),
  };
}

function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }

  const recipe = readRecipe(options.recipePath);
  if (options.duplicateLaneStartOverride !== null) {
    recipe.duplicateLaneStart = options.duplicateLaneStartOverride;
  }
  const result = engine.generateCoordinates(recipe);
  process.stdout.write(`${JSON.stringify(buildSummary(result), null, 2)}\n`);

  if (!options.summaryOnly && options.outputPath) {
    const outputPath = path.resolve(options.outputPath);
    fs.writeFileSync(outputPath, `\uFEFF${engine.exportRowsToCsv(result.records)}`, "utf8");
    process.stdout.write(`CSV 저장 완료: ${outputPath}\n`);
  } else if (!options.summaryOnly && !options.outputPath) {
    process.stdout.write("CSV가 필요하면 --out <파일> 옵션을 사용하세요.\n");
  }

  if (result.baseline.applicable && result.baseline.passed === false) {
    process.exitCode = 2;
  }
}

try {
  main();
} catch (error) {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
}
