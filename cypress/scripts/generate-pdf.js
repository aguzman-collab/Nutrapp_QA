const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  const reportPath = `file://${path
    .resolve('cypress/reports/index.html')
    .replace(/\\/g, '/')}`;

  const outputDir = 'C:\\Users\\cparra\\cypress\\reportes';
  const outputPDF = path.join(outputDir, 'Reporte_Nutrapp_QA.pdf');
  const debugImage = path.join(outputDir, 'Debug_Nutrapp.png');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  await page.goto(reportPath, {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForFunction(() => {
    const report = document.querySelector('#report');
    return report && report.innerText.length > 500;
  }, { timeout: 60000 });

  await new Promise(r => setTimeout(r, 3000));

  await page.evaluate(() => {
    window.scrollBy(0, 100);
    window.scrollBy(0, -100);
  });

  await page.screenshot({
    path: debugImage,
    fullPage: true
  });

  await page.pdf({
    path: outputPDF,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    pageRanges: '2-'
  });

  await browser.close();

  console.log(`✅ PDF generado correctamente en: ${outputPDF}`);
}

generatePDF();