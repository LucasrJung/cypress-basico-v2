Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Testando')
    cy.get('#lastName').type('Muito')
    cy.get('#email').type('teste@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button[type="submit"]').click()
})