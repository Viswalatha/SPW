const { Then, When } = require('@cucumber/cucumber');
const IPlayerHomePage = require('../../pages/IPlayerHomePage');

Then('I should see the BBC iPlayer home page', async function () {

    this.iPlayerHomePage = new IPlayerHomePage(this.page);
    await this.iPlayerHomePage.assertHomePageDisplayed();

});
