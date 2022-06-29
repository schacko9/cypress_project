/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe('My Second Test Suite', function() 
{
    xit('Checkboxes',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })


    xit('Static/Dynamic Dropdowns',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Static Dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text()==="India")
            {
                cy.wrap($e1).click()
            }
        })
        //autocomplete
        cy.get('#autocomplete').should('have.value','India')
    })


    xit('Visbility of Elements',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })


    xit('Radio Buttons',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('[value="radio2"]').check().should('be.checked')
    })


    xit('Alerts',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    }) 


    xit('Child Tabs',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
    })


    xit('Child Windows',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        cy.get('#opentab').then((e1) =>{
            const url=e1.prop('href')
            cy.log(url)
            // Cannot visit new domain only sub domain
           
            // cy.visit(url)
            //rahulshettyacademy.com/seleniumpractise
        })
       
    })


    xit('Web Table',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("table[name='courses'] td:nth-child(2)").each(($e1, index, $list) => {

            const text = $e1.text()
            if(text.includes('Python')){
                cy.get("table[name='courses'] td:nth-child(2)").eq(index).next().then((price)=>{
                   const priceText = price.text()
                   expect(priceText).to.equal('25')
                })
            }
        })
    })


    xit('Mouse Hover',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
    })

    xit('Frames',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find(".carousel-item").should('have.length', 4)
    })
})