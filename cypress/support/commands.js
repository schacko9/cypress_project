// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


Cypress.Commands.add('selectProduct', (products) => {
    products.forEach(element => { 
        cy.get('.card').each((el, index, $list) => {
            if(el.text().includes(element)){
                 cy.get('button.btn').eq(index).click()
            }
         })
    })
    cy.contains("Checkout").should('contain',String(products.length)) 
})

Cypress.Commands.add('datatableFilter', (datatable) => {
    let products = [] 
    datatable.hashes().forEach((element) => { 
        products.push(element.products)
    })
    return products
})

Cypress.Commands.add('LoginAPI',(user, pass) => {
    cy.request("POST","https://rahulshettyacademy.com/client/auth/login",
        {
            "userEmail":String(user), 
            "userPassword":String(pass)
        }
        .then(response=>{
            expect(response.status).to.eq(200)
            Cypress.env("token",response.body.token)
        })
    )
})


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })