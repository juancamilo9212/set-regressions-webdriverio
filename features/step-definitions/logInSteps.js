const { Given, When, Then} = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const MainPage = require('../pageobjects/Main.page');

// -------------------Login Section -----------------------
Given(/^I am on the (\w+) page$/, (page) => {
    LoginPage.open();
});

When(/^I login as \"([^\"]*)\" with password \"([^\"]*)\"$/, (email, password) => {
    LoginPage.login(email, password);
});

Then(/^I should see the laws section$/, () => {
    expect(MainPage.isLogoDisplayed()).toBeTruthy();
});



