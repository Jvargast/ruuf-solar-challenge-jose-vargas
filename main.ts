import * as fs from "fs";

interface TestCase {
  panelW: number;
  panelH: number;
  roofW: number;
  roofH: number;
  expected: number;
}

interface TestData {
  testCases: TestCase[];
}

function calculatePanels(
  panelWidth: number,
  panelHeight: number,
  roofWidth: number,
  roofHeight: number,
): number {
  // Orientación inicial -> Panel Normal (panelWidth x panelHeight)
  const grid1 =
    Math.floor(roofWidth / panelWidth) * Math.floor(roofHeight / panelHeight);

  // Sobran espacios a la derecha y abajo
  const extRight1 =
    Math.floor((roofWidth % panelWidth) / panelHeight) *
    Math.floor(roofHeight / panelWidth);
  const extBottom1 =
    Math.floor((roofHeight % panelHeight) / panelWidth) *
    Math.floor(roofWidth / panelHeight);

  const total1 = grid1 + Math.max(extRight1, extBottom1);

  // Orientación 2 -> Panel Rotado (panelHeight x panelWidth)
  const grid2 =
    Math.floor(roofWidth / panelHeight) * Math.floor(roofHeight / panelWidth);

  const extRight2 =
    Math.floor((roofWidth % panelHeight) / panelWidth) *
    Math.floor(roofHeight / panelHeight);
  const extBottom2 =
    Math.floor((roofHeight % panelWidth) / panelHeight) *
    Math.floor(roofWidth / panelHeight);

  const total2 = grid2 + Math.max(extRight2, extBottom2);

  // Se retorna el valor máximo para ambas orientaciones
  return Math.max(total1, total2);
}

function main(): void {
  console.log("🐕 Wuuf wuuf wuuf 🐕");
  console.log("================================\n");

  runTests();
}

function runTests(): void {
  const data: TestData = JSON.parse(
    fs.readFileSync("test_cases.json", "utf-8"),
  );
  const testCases = data.testCases;

  console.log("Corriendo tests:");
  console.log("-------------------");

  testCases.forEach((test: TestCase, index: number) => {
    const result = calculatePanels(
      test.panelW,
      test.panelH,
      test.roofW,
      test.roofH,
    );
    const passed = result === test.expected;

    console.log(`Test ${index + 1}:`);
    console.log(
      `  Panels: ${test.panelW}x${test.panelH}, Roof: ${test.roofW}x${test.roofH}`,
    );
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log(`  Status: ${passed ? "✅ PASSED" : "❌ FAILED"}\n`);
  });
}

main();
