Feature: Laws Feature

Scenario: Login to main page 
  Given I am on the login page
  When I login as "vivimejiaq@gmail.com" with password "123456"

Scenario: As a user I would like to see the laws cards
  When I click on laws button
  Then I should see the laws cards

#Scenario Outline: As a user I would like to see all laws subtabs
#When I go back to laws page
#When I click on <tab>
#Then I will see the card title contains <title>
#Examples:
#    | tab         |   title    |
#    | Leyes       |    Ley     |
#    | Decretos    |  Decreto   |
#    | Circulares  | Circular   |
#    | Legislacion | Resolución |
#    | Resoluciones|Lineamientos|
#    | Conceptos   | Concepto   |

Scenario: As a user I would like to see the detail modal
  When I see the card title
  When I click on detail button
  Then I should see the detail modal
  Then I see the same card title in the modal header

Scenario: As a user I would like to be redirected to the download url
When I click on download button
Then I will be redirected to "https://www.arlsura.com/index.php/" page







