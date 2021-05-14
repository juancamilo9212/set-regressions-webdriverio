const { Given, When, Then} = require('@cucumber/cucumber');

const MainPage = require('../pageobjects/Main.page');
const CreateAccidentPage = require('../pageobjects/createAccidentPage');
const constants = require('../../constants');
const {NOMBRE,APELLIDO} = constants;

let numberOfResults;

// -----------------------Hover accident section --------------
When(/^I hover \"([^\"]*)\" menu option$/,(option) => {
    MainPage.hoverOverSiderOptions(option);
});

Then(/^I should see a tooltip with \"([^\"]*)\" as text$/,(text) => {
    expect(MainPage.getTooltipText()).toEqual(text);
});

//-------------------------Get accidents -----------------------

When(/^I click on accidents menu option$/,() => {
    MainPage.clickOnAccidentsBtn();
});

Then(/^I should see a table with the current user's accidents$/,() => {
    expect(MainPage.isTableDisplayed()).toBeTruthy();
});

//----------------------Create accidents -----------------------

When(/^I click on create accidents button$/,() => {
MainPage.clickOnCreateAccidentBtn();
expect(CreateAccidentPage.isFormDisplayed()).toBeTruthy();
});

When(/^Fill in the form$/,() => {
CreateAccidentPage.fillAccidentForm();
});

Then(/^I will see the record created in the table$/,() => {
expect(MainPage.isTableDisplayed()).toBeTruthy();
const tableName = MainPage.getTableNameText();
expect(tableName).toContain(NOMBRE);
numberOfResults = MainPage.getNumberOfResults();
});

//----------------Filter accidents --------------------------
When(/^I click on filter selector$/,() => {
MainPage.clickOnFilterSelector();
});

When(/^I choose (.+) and search by attribute$/, { wrapperOptions: { retry: 2 } },(filter) => {
MainPage.selectFilter(filter);
});

Then(/^I will see the (.+) in the table record$/, (attribute) => {
const tableName = MainPage.getTableNameText()
const filterValue = MainPage.getAttributeText(attribute);
expect(filterValue).toContain(tableName);
MainPage.clickOnLimpiarBtn();
});

//--------------------Accident View --------------------------

When(/^I click on accident view button$/,() => {
MainPage.clickOnAccidentViewBtn();
});

Then(/^I will see the accident view modal$/,() => {
const headerTxt = `Accidente de ${NOMBRE} ${APELLIDO}`
expect(MainPage.getHeaderText()).toEqual(headerTxt);
MainPage.clickOnCloseModal();
});

//-------------------Delete accident ----------------------

When(/^I click on delete button$/,() => {
MainPage.clickOnDeleteBtn();
});

Then(/^I see confirmation Modal$/,() => {
expect(MainPage.isDeleteModalDisplayed()).toBeTruthy();
});

When(/^I Confirm the accident deletion$/, () => {
MainPage.confirmDeletion();
});

Then(/^I see the record is not in the table anymore$/, () => {
const currentResults = MainPage.getNumberOfResults();
expect(currentResults).toBeLessThan(numberOfResults);
});