Feature: Accident features

Scenario:Login to main page 
  Given I am on the login page
  When I login as "vivimejiaq@gmail.com" with password "123456"
  
  Scenario: As a user I want to see a tooltip when hover menu options 
  When I hover "accident" menu option
  Then I should see a tooltip with "Accidentes" as text

  Scenario: As a user, I want to get accidents created in the current user's account
  When I click on accidents menu option
  Then I should see a table with the current user's accidents

  Scenario: As a user, I want to be able to create an accident
  When I click on create accidents button
  When Fill in the form
  Then I will see the record created in the table

  Scenario Outline: As a user, I want to filter by different attributes
  When I click on filter selector 
  When I choose <filter> and search by attribute
  Then I will see the record created in the table
  Examples:
      | filter      | 
      | Nombre      |
      | Apellido    | 
      | PCA         | 
  
  Scenario: As a user, I want to see the exam viewer modal
  When I click on accident view button
  Then I will see the accident view modal

  Scenario: As a user, I want to be able to delete an accident
  When I click on delete button
  Then I see confirmation Modal
  When I Confirm the accident deletion
  Then I see the record is not in the table anymore