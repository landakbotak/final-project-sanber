Feature: KasirAja Login and Register user

    Scenario: User register with valid credentials
        Given I am on the login page
        When I click register link "a[href='/register']"
        When I input nama toko "Toko CDE" and email "riskarisriska@gmail.com" and password "password"
        Then I should see the Login Page
    
    Scenario: User logs in with valid credentials
        Given I am on the login page
        When I login with email "caca.choco17@gmail.com" and password "password"
        Then I should see the dashboard