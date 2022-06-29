/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ProductPage from '../../../support/pageObjects/ProductPage.js'
const product = new ProductPage()


Given('I open Product Page', ()=>{
    cy.visit(Cypress.env("url") + "/angularpractice/shop")
})

And('I open Home Page', ()=>{
    product.getHome()
})

And('I open Product Page', ()=>{
    product.getShop()
})

And('I open Category Page', ()=>{
    product.getCategory()
})

Then('Add all Products to the cart with', (datatable)=>{
    cy.datatableFilter(datatable).then(products=>{
        cy.selectProduct(products)
    })
})


