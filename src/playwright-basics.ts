import { chromium } from "@playwright/test";

(async () => {
    // launch browser
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // navigate to a website
    await page.goto('https://example.com/');
    console.log('Page Title: ', await page.title());
    await page.click('a');
    console.log('Navaigated to: ', page.url());

    // close browser
    await browser.close();
})();