Feature: Resources features

Scenario:Login to main page 
  Given I am on the login page
  When I login as "vivimejiaq@gmail.com" with password "123456"

Scenario: As a user I want to see a tooltip when hover menu options 
  When I hover "resources" menu option
  Then I should see a tooltip with "Recursos" as text

Scenario: As a user, I want to choose the different resources
  When I click on resources menu option
  Then I should see the resources dropdown
