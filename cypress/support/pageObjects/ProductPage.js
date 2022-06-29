class ProductPage
{
    elements = {
        home: () => cy.contains('Home'),
        shop: () =>  cy.contains('Shop'),
        category: () => cy.contains('Category 1'),
        checkout: () =>  cy.contains('Checkout')
    }

    getHome() {
        this.elements.home().should('have.attr', 'href','/angularpractice').click()
    }
    getShop() {
        this.elements.shop().should('have.attr', 'href','/angularpractice/shop').click()
    }

    getCategory() {
        this.elements.category().should('have.attr', 'href','#').click()
    }
    
    getCheckout() {
        this.elements.checkout().should('have.attr', 'class','nav-link btn btn-primary').click() 
    }
    
}

export default ProductPage;