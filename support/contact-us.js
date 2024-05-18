Cypress.Commands.add('username', () => {
    cy.get('[name="user-name"]')
})
Cypress.Commands.add('password', () => {
    cy.get('[name="password"]')
})
Cypress.Commands.add('Login', () => {
    cy.get('[name="login-button"]').click()
})
