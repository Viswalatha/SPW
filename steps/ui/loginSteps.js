const { Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const config = require('../../support/config');

Given('I am on the BBC iPlayer page', async function () {

    this.loginPage = new LoginPage(this.page);

    await this.loginPage.open();
});

When ('I click on the Sign in link', async function () {
   await this.loginPage.clickOnSignInLink();
});

When('I sign in with valid credentials', async function () {

    await this.loginPage.enterUsername(config.uiUsername);
    await this.loginPage.clickOnContinueButton();
    await this.loginPage.enterPassword(config.uiPassword);
    await this.loginPage.clickOnSignInButton();
    await this.loginPage.clickOnconcentButton();
});

 