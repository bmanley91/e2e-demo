import { faker } from '@faker-js/faker'

Cypress.Commands.add('getByTestId', (selector, ...args) => {
    return cy.get(`[data-testid=${selector}]`, ...args)
  })


function loginToPath({
    username = faker.name.firstName(),
    password = faker.word.noun(),
    path = '/'
}) {
    cy.visit(path);
    cy.getByTestId('username-field')
        .type(username);
    cy.getByTestId(`password-field`)
        .type(password);
    cy.get('button[type=submit]').click()
}
  
Cypress.Commands.add('loginToPath', loginToPath)
  