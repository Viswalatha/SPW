const { expect } = require('@playwright/test');
class IPlayerHomePage {

    constructor(page) {
        this.page = page;

        // Locators
        this.forYouLink = page.getByRole('link', { name: 'For you', exact: true });
       
    }

    async assertHomePageDisplayed() {
        await expect(this.forYouLink).toBeVisible();
    }
}

module.exports = IPlayerHomePage;