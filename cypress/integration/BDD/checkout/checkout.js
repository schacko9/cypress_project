/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductPage from '../../../support/pageObjects/ProductPage.js'
import CheckoutPage from '../../../support/pageObjects/CheckoutPage.js'
const product = new ProductPage()
const checkout = new CheckoutPage()


Given('I open Product Page', ()=>{
    cy.visit(Cypress.env("url") + "/angularpractice/shop")
})

Given('I Add all Products to the cart with', (datatable)=>{
    cy.datatableFilter(datatable).then(products=>{
        cy.selectProduct(products)
    })
})

And('I click the Checkout button', ()=>{
    product.getCheckout()
})

When('I am in the cart i need to verify prices and totals', ()=>{
    checkout.getPriceCheck()
})

And('I click the Confirm button depending on the process {string}', (process, datatable)=>{
    cy.datatableFilter(datatable).then(products=>{
        checkout.getConfirm(process, products)
    })
})

Then('I enter my country location {string}', (location)=>{
    checkout.getLocation(location)
})

And('I check on the checkbox for terms and conditions', ()=>{
    checkout.getCheckbox()
})

And('I click on the Purchase button', ()=>{
    checkout.getPurhcase()
})

And('I need to verify the order was successful', ()=>{
    checkout.getAlert()
})

