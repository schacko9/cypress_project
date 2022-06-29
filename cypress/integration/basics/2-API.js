/// <reference types="Cypress" />
const neatCSV = require('neat-csv')


describe('My First Test Suite', function() 
{

    it('Response Mock Test',function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept({
                method : 'GET',
                url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode : 200,
                body : [
                            {
                                "book_name": "RestAssured with Java",
                                "isbn": "RSU",
                                "aisle": "2301"    
                            }
                        ]
                
            }).as('bookretrievals')

        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').should(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1)
        })

        cy.get('p').should('have.text','Sorry we have only one book available')
    })


    it('Request Mock Test',function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req)=>{
                req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
                req.continue((res)=>{
                    // expect(res.statusCode).to.equal(403)
                })
            }
            ).as("dummyUrl")
        
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl') 
    })


    it('API Test',function() {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
                "name":"Learn Appium Automation with Java",
                "isbn":"bcggsss",
                "aisle":"22s7",
                "author":"John foe"
            })
            .then(function(response){
                expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.eq(200)
            })
    })


    it('Single Sign On Test', function () {

        cy.visit("http://localhost:7074/dashboard")
        cy.get('h3').should('contain',"You are not logged in and cannot access this page")

        const options = {
          method : 'POST',
          url : 'http://localhost:7075/login',
          qs : {
            redirectTo : 'http://localhost:7074/set_token'
  
          },
          body : {
            username: 'jane.lane',
            password : 'password123'
          },
          form : true
        }
  
        cy.request(options)

        cy.visit("http://localhost:7074/dashboard")
        cy.get('h1').should('contain',"Welcome to the Dashboard")
    })


    it('JWT Session Cookie Login Test', async function () {

        cy.LoginAPI("slomochacko", "chacko1").then(function(){
            cy.visit("https://rahulshettyacademy.com/client/auth/login", 
            {
               onBeforeLoad: function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
               } 
            })
        })


        cy.get(".card-body b").eq(1).then(el=>{
            productName = el.text()
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart]").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder=Country]").type("Ind")
        cy.get(".ta-results button").each(el,index,list=>{
            if(el.text()==='India'){
                cy.wrap(el).click()
            }
        })
        cy.get(".action_submit").click()
        cy.wait(2000)

        // Download CSV
        cy.get(".order-summary button").click()

        // Parse CSV
        cy.readFile(Cypress.config("fileServerFolder")+"cypress/downloads/order-summary.csv").then( async (text)=>{
            const csv = await neatCSV(text)
            const actualProduct = csv[0]["Product Name"]
            expect(productName).to.equal(actualProduct)
        })
        


        
    })
})
