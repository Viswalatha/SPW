Feature: BBC iPlayer login

  @ui
  Scenario: Successful login with valid credentials
    Given I am on the BBC iPlayer page
    When I click on the Sign in link
    And I sign in with valid credentials
    Then I should see the BBC iPlayer home page