Feature: SST login

  Scenario: As a user, I can log into SST page

    Given I am on the login page
    When I login as "vivimejiaq@gmail.com" with password "123456"
    Then I should see the laws section
    
      
