Feature: Login Feature

    Background:
        Given I open Login Page
    
    @Regression
    Scenario: Correct Username, Wrong Password - Proceed
        Given I fill username and password with "rahulshettyacademy" "learnign123"
        And I check accessibility with "user" with "proceed"
        And I select job status with "teach"
        When I agree to the terms and conditions
        Then I click Sign In
        And I get Login Attempt

    @Regression
    Scenario: Wrong Username, Correct Password
        Given I fill username and password with "academy" "learnign"
        And I check accessibility with "admin" with "proceed"
        And I select job status with "consult"
        When I agree to the terms and conditions
        Then I click Sign In
        And I get Login Attempt

    @Regression
    Scenario: Wrong Username, Correct Password - Cancel
        Given I fill username and password with "academy" "learnign"
        And I check accessibility with "user" with "cancel"
        And I select job status with "consult"
        When I agree to the terms and conditions
        Then I click Sign In
        And I get Login Attempt

    @Smoke
    @Regression
    Scenario: Correct Username, Correct Password
        Given I fill username and password with "rahulshettyacademy" "learning"
        And I check accessibility with "user" with "proceed"
        And I select job status with "stud"
        When I agree to the terms and conditions
        Then I click Sign In
        And I get Login Attempt
