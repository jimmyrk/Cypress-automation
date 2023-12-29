/// <reference types="cypress" />

describe('My first test', () => {
    it('visit the kitchen sink', () => {
        cy.visit('https://example.cypress.io');

        cy.contains('get').click()
        cy.url().should('include', '/commands/querying');
    });
});