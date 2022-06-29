class CheckoutPage
{

    elements = {
        rows: () =>  cy.get("tr td:nth-child(4) strong"),
        price: () => cy.get("h3 strong"),
        continueShopping: () => cy.get(".btn-default"),
        confirm: () =>  cy.get(".btn-success"),
        countryText: () => cy.get("label[for='country']"),
        country: () =>  cy.get("#country"),
        countrySelection: () =>  cy.get(".suggestions > ul > li > a"),
        checkboxText: () =>  cy.get("label[for='checkbox2']"),
        checkbox: () =>  cy.get("#checkbox2"),
        submit: () =>cy.get('input[type="submit"]'),
        alert: () => cy.get('.alert'),  
        alertClose: () => cy.get('a.close'),
        checkout: () => cy.contains('Checkout') 
    }


    getPriceCheck(){
    var sum = 0;
    this.elements.rows()
        .each((el, index, $list) => {
            const amount = el.text().split(" ")[1].trim()
            sum = Number(sum) + Number(amount)
        })
        .then(()=>{
            cy.log(sum)
        })
    this.elements.price().then((el)=>{
        const total = el.text().split(" ")[1].trim()
        expect(Number(total)).to.equal(sum)
    })
    }

    getConfirm(process, products){
        if(process.toLowerCase() === "checkout"){
            this.elements.confirm().should('have.attr', 'type','button').click()
        }
        else if(process.toLowerCase() === "continue"){
            this.elements.continueShopping().click()
            cy.selectProduct(products)
            this.elements.checkout().click()
            this.elements.confirm().should('have.attr', 'type','button').click()
        } 
        else {
            throw new Error("Checkout Process Error")
        }
    }

    getLocation(country){
        this.elements.countryText().should('contain','Please choose your delivery location.')
        this.elements.country().should('have.attr', 'type','text').type(country)
        this.elements.countrySelection().should('contain', String(country)).click()
    }

    getCheckbox(){
        this.elements.checkboxText().should('contain','I agree')
        this.elements.checkbox().click({ force: true });
    }

    getPurhcase(){
        this.elements.submit().should('have.attr', 'type','submit').click();
    }

    getAlert(){
        this.elements.alert()
            .then(element=>{
                const actualText = element.text();
                expect(actualText.includes("Success")).to.be.true;
             })
            .and(body=>{
                this.elements.alertClose().click()
            })
    }   
        

}
export default CheckoutPage;