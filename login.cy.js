/// <reference types="cypress" />

describe('Working with input', () => {
    it('visit the website', () => {
        cy.visit('https://dribbble.com/session/new', { timeout: 10000 });
        // Verify if the URL includes 'login.html'
        cy.url().should('include', 'session/new');
        cy.login('username', 'password')

        // // Fill the username field
        // cy.get('#login').clear().type('username');
        // // Fill the password field
        // cy.get('#password').clear().type('password');

        // // Click login button checkbox
        // cy.get('.auth-form > form > .btn2').click();
        // // Check alert error
        cy.get('.notice > h2').should('contains.text', 'We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.');
    });
});

