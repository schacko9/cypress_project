/// <reference types="Cypress" />


describe('My First Test Suite', function() 
{

    it('Database Interaction',function() {
        cy.sqlServer("select * from Persons").then(result=>{
            console.log(result)
        })
    })
})