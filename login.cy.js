/// <reference types="cypress" />

describe('Working with input', () => {
    it('visit the website', () => {
        cy.visit('https://dribbble.com/session/new', { timeout: 10000 });

        // // Verify if the URL includes 'login.html'
        cy.url().should('include', 'session/new');

        // Fill the username field
        cy.get('#login').clear().type('username');

        // Fill the password field
        cy.get('#password').clear().type('password');
    });
});

