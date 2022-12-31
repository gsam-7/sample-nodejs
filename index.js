npm i puppeteer mocha selenium-webdriver chai
const puppeteer = require('puppeteer');

let browser;

let val = 10;
// enter the amount of fake votes you want on every run

for (let i = 0; i < val; i++) {
  (async () => {
    if (!browser) {
      browser = await puppeteer.launch({ headless: false });
    }
    const page = await browser.newPage();
    await page.goto('https://ngx.me/4VNu6LV.h?ngxItemID=1980e0a5f5eacce9996483416dbdae7&s=RyJjIjoiZGpqeXU6QkJjdGUubGJtam1hcy56YnRCaWNCcj10RldTdDIxUFpCZGh3c3hxbXZqLnJ5ZSIsInoiOiJ1bXR0cW5sIlQ%3D');
    await page.evaluate(() => {
      $('.xDetailContainer .xButton')[3].click()
    });
    await setTimeout(async () => {
      await browser.close();
    }, 1000);
  })();
}
