const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    // baseUrl: "https://www.saucedemo.com/v1/index.html",
    // supportFile: false,
    // specPattern: "C:\Cypress-automation",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
