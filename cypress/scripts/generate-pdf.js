const puppeteer = require('puppeteer-core');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'  // Ruta de Chrome
  });
  const page = await browser.newPage();

  // Ruta al HTML generado
  const reportPath = `file://${path.resolve('cypress/reports/.jsons/index.html').replace(/\\/g, '/')}`;

  // Cargar la página HTML
  await page.goto(reportPath, { waitUntil: 'networkidle0' });

  // Esperar 30 segundos con setTimeout
  await new Promise(resolve => setTimeout(resolve, 30000));

  // Generar el PDF
  await page.pdf({
    path: 'cypress/reports/report.pdf',
    format: 'A4',
    printBackground: true
  });

  // Cerrar el navegador
  await browser.close();

  console.log('✅ PDF generado correctamente');
}

generatePDF();