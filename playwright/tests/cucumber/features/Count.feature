Feature: Count Functionality
    In order to test the count functionality
    As a user
    I want to be able to add one to the count

    Background:
        Given I have a browser open
        And  I navigate to the demo page

    Scenario: Able to add one to the count
        Given the count is 0
        When I click the add button
        Then the count should be 1