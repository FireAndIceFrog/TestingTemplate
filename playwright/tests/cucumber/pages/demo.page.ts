import { Page } from "@playwright/test";

export class DemoPage {
    _page: Page;
    _url: string;
    constructor(private page: Page, url: string) {
        this._page = page;
        this._url = url;
    }

    // Selectors
    AddButton = () => this._page.locator('[data-testid="increment-button"]');

    // Actions
    async NavigateToPage() {
        await this._page.goto(this._url);
    }

    async ClickAddButton() {
        await this.AddButton().click();
    }

    async GetCount() {
        return await this.AddButton().textContent();
    }
}