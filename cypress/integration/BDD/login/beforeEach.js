
beforeEach(function(){       
    cy.fixture('product').then(function(product){
            this.product=product    
    })
})