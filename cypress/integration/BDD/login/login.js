/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../../support/pageObjects/LoginPage.js'
const login = new LoginPage()


Given('I open Login Page', ()=>{
    cy.visit(Cypress.env("url") + "/loginpagePractise/")
})

Given('I fill username and password with {string} {string}', (username, password)=>{
    login.getLogin(username,password)
})

And('I check accessibility with {string} with {string}', (accessibility, action)=>{
    login.getAccessibility(accessibility, action)
})

And('I select job status with {string}', (role)=>{
    login.getDropdownSelection(role)
})

When('I agree to the terms and conditions', ()=>{
    login.getCheckbox()
})

Then('I click Sign In', ()=>{
    login.getSignIn()
})

And('I get Login Attempt', ()=>{
    login.getAttempt()
})