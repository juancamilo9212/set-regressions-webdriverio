const { Given, When, Then} = require('@cucumber/cucumber');
const LawsPage = require('../pageobjects/lawsPage');
const MainPage = require('../pageobjects/Main.page');
let cardTitle;

//--------------------------Exam card ---------------------------

When(/^I click on laws button$/,() => {
LawsPage.clickOnLawsBtn();
});

Then(/^I should see the laws cards$/,() => {
expect(LawsPage.isCardDisplayed()).toBeTruthy();
});

//-----------------------Titles-------------------------

When(/^I see the card title$/, () => {
cardTitle = LawsPage.getCardTxt();
});

When(/^I click on detail button$/,() => {
LawsPage.clickOnDetailBtn();
});

Then(/^I should see the detail modal$/,() => {
browser.pause(5000);
expect(LawsPage.isDetailModalDisplayed()).toBeTruthy();
});

Then(/^I see the same card title in the modal header$/, () => {
expect(cardTitle).toEqual(LawsPage.getModalTxt());
});

//-------------------------Download page ------------------------------

When(/^I click on download button$/,() => {
MainPage.clickOnCloseModal();
LawsPage.clickOnDownloadBtn();

});

Then(/^I will be redirected to \"([^\"]*)\" page$/,(url) => {
browser.pause(5000);
expect(LawsPage.getUrl()).toContain(url);
});

//----------------------------------Click on different tabs--------------------

/*When(/^I go back to laws page$/,() => {
LawsPage.goBackToLaws();
});

When(/^I click on (.+)$/,(tab) => {
LawsPage.clickOnTab(tab);
});

Then(/^I will see the card title contains (.+)$/,(title) => {
expect(LawsPage.isCardDisplayed()).toBeTruthy();
cardTitle= LawsPage.getCardTxt();
expect(cardTitle).toContain(title);
});*/

