// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    // Fill the username field
    cy.get('[data-test="username"]').clear().type('standard_user');
    // Fill the password field
    cy.get('[data-test="password"]').clear().type('secret_sauce');
    // Click login button
    cy.get('#login-button').click();
    // Check alert error
    // cy.get('[data-test="error"]').should('contains.text', 'Username and password do not match any user in this service');
});

Cypress.Commands.add('checkout', (firstName, lastName) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    // Fill the Firstname field
    cy.get('[data-test="firstName"]').clear().type('ivan');
    // Fill the Lastname field
    cy.get('[data-test="lastName"]').clear().type('theo');
    // Fill the Postalcode field
    cy.get('[data-test="postalCode"]').clear().type('12345');
    // Click continue button checkbox
    cy.get('.btn_primary').click();
    // Verify if the URL step two checkout
    cy.url().should('include', 'v1/checkout-step-two.html');
});