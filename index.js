const puppeteer = require('puppeteer');

async function getCourseTitles(website) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(website);
  const titles = await page.$$eval('.LessonListItem .heading h3', (elements) => { return elements.map((element) => { return element.textContent }) });

  console.log(titles);

  await browser.close();
}

getCourseTitles('https://frontendmasters.com/courses/complete-react-v7/');
