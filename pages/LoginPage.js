const config = require('../support/config');

class LoginPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.signInLink = page.getByRole('link', { name: 'Sign in' });
        this.username = page.locator('#username');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.password = page.locator('#password');
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
        this.concentButton = page.getByRole('link', { name: 'I understand, go to iPlayer' });
    }

    // Actions
    async open() {
        await this.page.goto(config.uiBaseUrl);
    }

    async clickOnSignInLink() {
        await this.signInLink.click();
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }

    async clickOnContinueButton() {
        await this.continueButton.click();
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickOnSignInButton() {
        await this.signInButton.click();
    }

    async clickOnconcentButton(){
        await this.concentButton.click();
    }
}

module.exports = LoginPage;