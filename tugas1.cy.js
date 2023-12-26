
/// <reference types="cypress" />

// describe('Login using invalid account', () => {
//     it('visit the website with "invalid account"', () => {
//         cy.visit('https://www.saucedemo.com/v1/index.html', { timeout: 10000 });
//         // Verify if the URL includes 'login.html'
//         cy.url().should('include', 'v1/index.html');

//         cy.fixture('/user.json') // Get data from {fixturesFolder}

//         // Fill the username field
//         cy.get('[data-test="username"]').clear().type('username');
//         // Fill the password field
//         cy.get('[data-test="password"]').clear().type('password');

//         // Click login button
//         cy.get('#login-button').click();
//         // Check alert error
//         cy.get('[data-test="error"]').should('contains.text', 'Username and password do not match any user in this service');
//     });
// });


describe('Login using Accepted account', () => {
    it('visit the website with "standard_user"', () => {
        cy.visit('https://www.saucedemo.com/v1/index.html', { timeout: 10000 });
        // Verify if the URL includes 'login.html'
        cy.url().should('include', 'v1/index.html');

        cy.fixture('/user.json') // Get data from {fixturesFolder}???

        // Fill the username field
        cy.get('[data-test="username"]').clear().type('standard_user');
        // Fill the password field
        cy.get('[data-test="password"]').clear().type('secret_sauce');

        // Click login button
        cy.get('#login-button').click();

        cy.get(':nth-child(1) > div.inventory_item_img').then((logo) => {
        });  //.???

        // Click Add to cart button
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        // Check alert notify
        cy.get('.fa-layers-counter').should('contains.text', '1');

        // Click Remove cart button
        // cy.get(':nth-child(1) > .pricebar > .btn_secondary').click();
        // Check alert notify
        // cy.get('.fa-layers-counter').should('contains.text', '');

        // Click Cart button
        cy.get('#shopping_cart_container').click();
        // Verify if the URL go to'Cart'
        cy.url().should('include', '/v1/cart.html');

        // Checkout item
        cy.get('.btn_action').click();
        cy.url().should('include', '/v1/checkout-step-one.html');

        // Fill the Firstname field
        cy.get('[data-test="firstName"]').clear().type('ivan');
        // Fill the Lastname field
        cy.get('[data-test="lastName"]').clear().type('theo');
        // Fill the Postalcode field
        cy.get('[data-test="postalCode"]').clear().type('12345');

        cy.get('.btn_primary').click();
        // Verify if the URL step two checkout
        cy.url().should('include', 'v1/checkout-step-two.html');

        // Finish transaction
        cy.get('.btn_action').click();
        // Verify if checkout complete
        cy.url().should('include', 'v1/checkout-complete.html');
    });
});