import "cypress-audit/commands"

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
//=============================================================================================



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
// -- This is a common method to generate performance report --
// Can call this method in any step.definition file to generate report with command - cy.performanceReport
Cypress.Commands.add('performanceReport', () => { 
  
  const thresholds = {
    performance: 80,
    'first-contentful-paint': 50000,
    'largest-contentful-paint': 50000,
    accessibility: 50,
    interactive: 50000,
    seo: 50,  
    pwa: 50,
      };

  const lighthouseConfig = {
    formFactor: 'desktop',
    screenEmulation: {
        disabled: true
    }
    };
  cy.lighthouse(thresholds,lighthouseConfig); 

 })