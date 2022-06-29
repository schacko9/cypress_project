class HomePage
{

    elements = {
        Placeholder: () => cy.get("div.form-group"),
        Name: () => cy.get("input[name='name']:nth-child(2)"),
        Name2Way: () => cy.get("input[name='name']:nth-child(2)"),
        Name2WayContainer: () =>  cy.get("h4"),
        Email: () => cy.get("input[name='email']"),
        Password: () =>  cy.get("input[type='password']"),
        Checkbox: () =>  cy.get("input[type='checkbox']"),
        CheckboxText: () =>  cy.get("label[for='exampleCheck1']"),
        Gender: () =>  cy.get('select'),
        Student: () => cy.get('#inlineRadio1'), 
        Employee: () => cy.get('#inlineRadio2'), 
        Entreprener: () => cy.get('#inlineRadio3'), 
        DOB: () => cy.get("input[type='date']"), 
        submit: () => cy.contains("Submit"), 
        alertContainer: () => cy.get('div.container'), 
        alert: () => cy.get('div.alert'), 
        alertClose: () => cy.get('a.close')
    }

    getName(name){
        this.elements.Placeholder().should('contain','Name') 
        this.elements.Name().should('have.attr', 'minlength','2')
            .then(el=>{
                if(Number(name.length) <= 2){
                    throw new Error("Invalid Name: " + Number(name.length))
                }
                else{
                    cy.log("Valid Name: " + Number(name.length))
                }
            })
            .type(name) 
        this.elements.Name2WayContainer().should('contain','Two-way Data Binding example:')     
        this.elements.Name2Way().should('have.value', name) 
        

    }

    getEmail(email){
        expect(email).to.include("@")
        expect(email).to.include(".com")
        this.elements.Placeholder().should('contain','Email') 
        this.elements.Email().should('have.attr', 'name','email').type(email)
    }

    getPassword(password){
        this.elements.Placeholder().should('contain','Password') 
        this.elements.Password().should('have.attr', 'placeholder','Password').type(password)
    }

    getCheckbox(){
        this.elements.Checkbox().click()
        this.elements.CheckboxText().should(info=>{
            expect(info.text().toLowerCase()).to.include("check me out")
        })
    }

    getGender(gender){
        this.elements.Placeholder().should('contain','Gender') 
        this.elements.Gender().select(gender)
    }

    getEmployment(employment){
        this.elements.Placeholder().should('contain','Employment Status:') 
        if(employment.toLowerCase() === "student"){
            this.elements.Student().click()
        }
        else{
            this.elements.Employee().click()
        }

        this.elements.Entreprener().should('be.disabled')  
    }

    getDOB(dob){
        this.elements.Placeholder().should('contain','Date of Birth') 
        this.elements.DOB().should('have.attr', 'min','1000-01-01').and('have.attr', 'max','3000-12-31')
            .then(function(){
                let valid_MinYEAR = new Date("1000-1-1");
                let valid_MaxYEAR = new Date("3000-12-31");
                let inputDate = new Date(String(dob))
                
                expect(valid_MinYEAR < inputDate < valid_MaxYEAR).to.be.true
            })
            .type(dob)
    }

    getSubmit(){
        this.elements.submit().click()
            .then(el=> {
                this.elements.alertContainer()
                .then(div=>{
                    if(div.find(this.elements.alert().should('contain','Success'))){
                        this.elements.alertClose().click()
                        cy.log('Form Submitted Successfully!')
                    } else {
                        throw new Error("Form Submitted Unsuccessfully")
                    }
                })
            })        
    }
}

export default HomePage;