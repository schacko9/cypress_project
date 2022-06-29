Feature: Home Feature

    Background:
        Given I open Home Page

    @Smoke
    @Regression
    Scenario Outline: Form Submission
        Given I fill in Name with "<name>"
        And I fill in Email with "<email>"
        And I fill in Password with "<password>"
        When I check the checkbox
        And I fill in Gender with "<gender>"
        And I fill in Employement Status with "<employment>"
        And I fill in Date of Birth with "<dob>"
        Then I click on the Submit button


    Examples: Form Data
    |name         |email                    |password   |gender |employment |dob         |
    |Slomo Chacko |slomochacko0@gmail.com   |chacko1    |Female |Student    |1998-06-10  |
    |Chacko Slomo |slomochacko@gmail.com    |chacko2    |Male   |Employed   |2008-06-10  |
