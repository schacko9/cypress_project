/// <reference types="Cypress" />
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../support/pageObjects/HomePage.js'
const home = new HomePage()


Given('I open Home Page', ()=>{
    cy.visit(Cypress.env("url") + "/angularpractice")
})

Given('I fill in Name with {string}', (name)=>{
    home.getName(name)
})

And('I fill in Email with {string}', (email)=>{
    home.getEmail(email)
})

And('I fill in Password with {string}', (password)=>{
    home.getPassword(password)
})

When('I check the checkbox', ()=>{
    home.getCheckbox()
})

And('I fill in Gender with {string}', (gender)=>{
    home.getGender(gender)
})

And('I fill in Employement Status with {string}', (employment)=>{
    home.getEmployment(employment)
})

And('I fill in Date of Birth with {string}', (dob)=>{
    home.getDOB(dob)
})

Then('I click on the Submit button', ()=>{
    home.getSubmit()
})
