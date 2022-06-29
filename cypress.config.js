const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  projectId: "25uvq9",
  reporter: "mochawesome",
  env: {
    "url": "https://rahulshettyacademy.com"
  },
  specPattern: 'cypress/integration/BDD/*.feature',
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 30000
  },
  db: {
    "userName": "slo",
    "password": "Ygtrece#13",
    "server": "ygt13.database.windows.net",
    "options": {
        "database": "Trece",
        "encrypt": true,
        "rowCollectionOnRequestCompletion" : true
    }
  }
});
