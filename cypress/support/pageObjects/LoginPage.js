class LoginPage
{
    elements = {
        userName: () => cy.get("input[name='username']"),
        password: () => cy.get("input[type='password']"),
        signIn: () => cy.get("#signInBtn"),
        admin: () =>  cy.get(':nth-child(1) > .checkmark'),
        user: () => cy.get(':nth-child(2) > .checkmark'),
        modal: () =>  cy.get(".modal-body"),
        ok: () =>  cy.get(".btn-success"),
        cancel: () =>  cy.get(".btn-secondary"),
        dropdown: () =>  cy.get("select.form-control") ,
        checkbox: () => cy.get("#terms") 
    }
    
    getLogin(username, password) {
        this.elements.userName().should('have.attr','id','username').type(String(username))
        this.elements.password().should('have.attr','id','password').type(String(password))
    }

    getAccessibility(value, action){
        if(String(value) === "admin"){
            this.elements.admin().should('have.attr','class','checkmark').click()
            this.elements.modal().should("not.be.visible")
        }
        else if(String(value) === "user"){
            this.elements.user().should('have.attr','class','checkmark').click()
            this.elements.modal().should("be.visible")
            cy.wait(1000)
            if(String(action) === "proceed"){
                this.elements.ok().should("be.visible").click({force: true})
            }
            else{
                this.elements.cancel().should("be.visible").click({force: true})
                this.elements.user().should('have.attr','class','checkmark').click()
                this.elements.modal().should("be.visible")
                cy.wait(1000)
                this.elements.ok().should("be.visible").click({force: true})
            }
        } 
        else {
            cy.log("Not Valid!")
        }
    }

    getDropdownSelection(value) {
        this.elements.dropdown().select(value).should(selection=>{
            expect(selection.text().toLowerCase()).to.include(value)
        })
    }

    getCheckbox() {
        this.elements.checkbox().check().should('be.checked')
            
    }

    getSignIn() {
        this.elements.signIn().should('have.attr','value','Sign In').click().should('have.attr','value','Signing ..').wait(4000)
    }

    getAttempt(){
        cy.url().then(string=>{
            if(string.includes('login')){
                throw new Error("Invalid Login Error")
            }
            else{
                cy.log('Successful Login')
            }
        })
    }

}

export default LoginPage;