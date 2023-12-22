/// <reference types="cypress" />

describe('browser action', () => {
    it('should load book website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 });
        cy.url().should('include', 'index.html');

        // should click on travel category
        cy.get('a').contains('Travel').click();
        cy.get('h1').should('have.text', 'Travel');

    });
});