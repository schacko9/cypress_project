Feature: Product Feature

   
    @Smoke
    @Regression
    Scenario: Verify Product Page Links
        Given I open Product Page
        And I open Home Page
        And I open Product Page
        And I open Category Page
        And I open Product Page
        Then Add all Products to the cart with
            |products        |
            |Blackberry      |
            |Nokia Edge      | 
            |Samsung Note 8  |
            |iphone X        |

