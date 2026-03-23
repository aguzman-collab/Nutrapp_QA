const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  const reportPath = `file://${path
    .resolve('cypress/reports/index.html')
    .replace(/\\/g, '/')}`;

  await page.goto(reportPath, {
    waitUntil: 'domcontentloaded'
  });

  // 🔥 CLAVE: esperar a que el contenido REAL exista
  await page.waitForFunction(() => {
    const report = document.querySelector('#report');
    return report && report.innerText.length > 500;
  }, { timeout: 60000 });

  // 🔥 Espera adicional para React render completo
  await new Promise(r => setTimeout(r, 3000));

  // 🔥 FORZAR repaint (esto mata la página en blanco)
  await page.evaluate(() => {
    window.scrollBy(0, 100);
    window.scrollBy(0, -100);
  });

  // DEBUG
  await page.screenshot({
    path: 'cypress/reports/debug.png',
    fullPage: true
  });

  // PDF
  await page.pdf({
  path: `cypress/reports/report-${Date.now()}.pdf`,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  pageRanges: '2-' // 👈 ESTA LÍNEA ES LA CLAVE
  });

  await browser.close();

  console.log('✅ PDF generado correctamente');
}

generatePDF();