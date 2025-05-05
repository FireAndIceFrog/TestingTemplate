import { Given } from '@cucumber/cucumber';
import { Browser,  Page } from '@playwright/test';
import { chromium } from '@playwright/test';
import { DemoPage } from '../pages/demo.page.ts';

export let browser: Browser;
export let page: Page;
export let demoPage: DemoPage;

// Hooks
Given("I have a browser open", async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    demoPage = new DemoPage(page, "http://localhost:5173/");
});
