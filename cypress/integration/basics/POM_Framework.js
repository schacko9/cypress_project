/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage.js'
import LoginPage from '../../support/pageObjects/LoginPage.js'
import ProductPage from '../../support/pageObjects/ProductPage.js'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'
const login = new LoginPage()
const home = new HomePage()
const product = new ProductPage()
const checkout = new CheckoutPage()
const homesData = require('../../fixtures/homes.json')
const loginsData = require('../../fixtures/logins.json')
const checkoutsData = require('../../fixtures/checkouts.json')


describe('My Framework', function() {
    
    beforeEach(function(){       
        cy.fixture('product').then(function(product){
                this.product=product    
        })
    })

    loginsData.forEach(logins => {
    it('Login Page',function(){
        cy.visit(Cypress.env("url") + "/loginpagePractise/")

        login.getLogin(logins.username,logins.password)
        login.getAccessibility(logins.accessibility)
        login.getDropdownSelection(logins.role)
        login.getCheckbox()
        login.getSignIn()
        login.getAttempt()
    })
    })
        
    homesData.forEach(homes => {
    it('Home Page',function(){
        cy.visit(Cypress.env("url") + "/angularpractice")
       
        home.getName(homes.name)
        home.getEmail(homes.email)
        home.getPassword(homes.password)
        home.getCheckbox()
        home.getGender(homes.gender)
        home.getEmployment(homes.employment)
        home.getDOB(homes.dob)

        home.getSubmit()
    })
    })

    it('Product Page',function(){
        cy.visit(Cypress.env("url") + "/angularpractice/shop")
    
        product.getHome()
        product.getShop()
        product.getCategory()
        product.getShop()
        cy.selectProduct(this.product.products)
    })

    checkoutsData.forEach(checkouts => {
    it('Checkout Process',function(){
        cy.visit(Cypress.env("url") + "/angularpractice/shop")

        cy.selectProduct(checkouts.products)
        product.getCheckout()
        
        checkout.getPriceCheck()
        checkout.getConfirm(checkouts.process, checkouts.products)
        checkout.getLocation(checkouts.location)
        checkout.getCheckbox()
        checkout.getPurhcase()
        checkout.getAlert()
    })
    })

})