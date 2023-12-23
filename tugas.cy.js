
/// <reference types="cypress" />

describe('Working with input', () => {
    it('visit the website', () => {
        cy.visit('https://www.yola.com/login', { timeout: 10000 });

        // // Verify if the URL includes 'login.html'
        cy.url().should('include', 'login');

        // Fill the username field
        cy.get('#email').clear().type('username');

        // Fill the password field
        cy.get('#password').clear().type('password');

        // Check if the checkbox element is visible
        cy.get('.ws-ui-checkbox__checkmark').should('be.visible');

        // Check the "Remember me" checkbox
        cy.get('.ws-ui-checkbox__checkmark').click();


    });
});

// // Check the "Remember me" checkbox
// cy.get('input[name="remember_me"]').check();
// });

// cy.get('[type="checkbox"]').check() // Check checkbox element
// cy.get('[type="radio"]').first().check() // Check first radio element