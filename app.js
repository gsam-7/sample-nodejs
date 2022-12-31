const puppeteer = require("puppeteer");

let val = 20000;
// enter the amount of fake votes you want on every run



(async () => {
  for (let i = 0; i < val; i++) {
    try {
    const browser = await puppeteer.launch({
     headless: false,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (
        req.resourceType() == 'sub_frame' ||
        req.resourceType() == 'stylesheet' ||
        req.resourceType() == 'font' ||
        req.resourceType() == 'image'
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });
    
    await page.goto(
      "https://ngx.me/4VNu6LV.h?ngxItemID=1980e0a5f5eacce9996483416dbdae7&s=RyJjIjoiZGpqeXU6QkJjdGUubGJtam1hcy56YnRCaWNCcj10RldTdDIxUFpCZGh3c3hxbXZqLnJ5ZSIsInoiOiJ1bXR0cW5sIlQ%3D", {waitUntil: 'load', timeout: 60000}
    );
    await page.evaluate(() => {
      $(".xDetailContainer .xButton")[3].click();
    });
    await setTimeout(async () => {
      await browser.close();
      console.log(`Positive ${i}/${val}`)
    }, 1000);
    } catch {
        console.log(`Negative ${i}/${val}`)
    }
  }
})();
