import { faker } from '@faker-js/faker';

describe ('Login to Dashboard', () => {
    it ('should greet the user with their username after logging in', () => {
        // Given a user exists
        const username = faker.name.firstName();

        // When the user logs in to the dashboard page
        cy.loginToPath({
            username,
            path: '/dashboard'
        });

        // Then the user arrives on the dashboard
        cy.url().should('include', '/dashboard')
        cy.findByRole('heading', {name: /Dashboard/i}).should('exist');

        // And the user's name is displayed in the greeting
        cy.contains(`Hello ${username}`);
    });
});
