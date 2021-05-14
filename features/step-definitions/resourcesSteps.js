const { Given, When, Then} = require('@cucumber/cucumber');

const ResourcePage = require('../pageobjects/resourcesPage');
const {
hoverOverResource,
clickOnResource
} = ResourcePage;

When(/^I hover \"([^\"]*)\" menu option$/,(option) => {
hoverOverResource();
});

Then(/^I should see a tooltip with \"([^\"]*)\" as text$/,(text) => {

});

When(/^I click on resources menu option$/,() => {
clickOnResource();
});

Then(/^I should see the resources dropdown$/,() => {
    
});
