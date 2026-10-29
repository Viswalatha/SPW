const { Before, After, Status } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

let browser;
let context;
let page;

Before(async function () {

    browser = await chromium.launch({
        headless: false
    });

    context = await browser.newContext();

    page = await context.newPage();

    this.page = page;
});

After(async function (scenario) {

    // Take screenshot before closing the browser
    if (this.page) {

        const screenshot = await this.page.screenshot({
            fullPage: true
        });

        await this.attach(screenshot, 'image/png');

        if (scenario.result?.status === Status.PASSED) {
            console.log(`✅ Passed: ${scenario.pickle.name}`);
        } else if (scenario.result?.status === Status.FAILED) {
            console.log(`❌ Failed: ${scenario.pickle.name}`);
        }
    }

    // Close browser after screenshot
    await browser.close();
});