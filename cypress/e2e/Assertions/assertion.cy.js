/// <reference types="cypress" />

describe('browser action', () => {
    it('should load correct url and check the URL', () => {
        cy.visit('https://example.com/', { timeout: 10000 });

        // Check if the URL contains 'example.com'
        cy.url().should('include', 'example.com');

        // Check if the <h1> element is visible
        cy.get('h1').should('be.visible');
    });
});

// describe('browser action', () => {
//     it('should load correct url and check the URL', () => {
//         cy.visit('https://example.com/', { timeout: 10000 });

//         // Check if the <h1> element is visible
//         cy.get('h1').should('be.visible');
//     });
// });