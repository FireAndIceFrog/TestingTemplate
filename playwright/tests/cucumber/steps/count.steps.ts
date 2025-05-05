import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { demoPage } from './browser.steps';

Given('I navigate to the demo page', async () => {
    await demoPage.NavigateToPage();
});

Given('the count is 0', async () => {
    const countText = await demoPage.GetCount();
    const actualCount = parseInt(countText.replace("count is ", "") || '0', 10);
    expect(actualCount).toBe(0);
});

When('I click the add button', async () => {
    await demoPage.ClickAddButton();
});

Then('the count should be {int}', async (expectedCount: number) => {
    const countText = await demoPage.GetCount();
    const actualCount = parseInt(countText.replace("count is ", "") || '0', 10);
    expect(actualCount).toBe(expectedCount);
});
