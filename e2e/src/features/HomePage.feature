Feature: As a User I expect to be able to navigate to the Home Page

    @dev @smoke @regression
    Scenario: Navigate to the home page
        Given I am on the "Home" Page
        And the "header logo" should be displayed
        Then the "contacts header" should contains the text "Automation Practice"