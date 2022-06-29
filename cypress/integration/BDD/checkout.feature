Feature: Checkout Feature

    Background:
        Given I open Product Page

    @Smoke
    @Regression
    Scenario: Checkout Process - Uninterrupted
        Given I Add all Products to the cart with
            |products        |
            |Blackberry      |
            |Nokia Edge      |
        And I click the Checkout button
        When I am in the cart i need to verify prices and totals
        And I click the Confirm button depending on the process "checkout"
            |products        |
            |Blackberry      |
            |Nokia Edge      |
        Then I enter my country location "India"
        And I check on the checkbox for terms and conditions
        And I click on the Purchase button
        And I need to verify the order was successful



    @Regression
    Scenario: Checkout Process - Interrupted
         Given I Add all Products to the cart with
            |products            |
            |Samsung Note 8      |
            |iphone X            |
        And I click the Checkout button
        When I am in the cart i need to verify prices and totals
        And I click the Confirm button depending on the process "continue"
            |products            |
            |Samsung Note 8      |
            |iphone X            |
        Then I enter my country location "United States of America"
        And I check on the checkbox for terms and conditions
        And I click on the Purchase button
        And I need to verify the order was successful
