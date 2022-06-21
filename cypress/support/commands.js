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

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get("#login_username").type(username).should("have.value", username);
  cy.get("#login_password").type(password).should("have.value", password);
  cy.get("#btn-login").click();
});

Cypress.Commands.add("lini", () => {
  cy.contains("OEE").should("have.text", "OEE");
  cy.contains("TEEP").should("have.text", "TEEP");
  cy.contains("UTILISASI").should("have.text", "UTILISASI");
  cy.contains("AVA").should("have.text", "AVA");
  cy.contains("PER").should("have.text", "PER");
  cy.contains("QUA").should("have.text", "QUA");
});

Cypress.Commands.add("parameter", () => {
  cy.contains("PARAMETER").click();
});

Cypress.Commands.add("mesin", () => {
  cy.contains("MESIN").click();
});

Cypress.Commands.add("shiftly", () => {
  cy.contains("SHIFTLY").click();
  cy.get('[data-testid="machine"]').click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0").click();
  cy.get(".ant-page-header-back-button > svg > path").click();
});

Cypress.Commands.add("logout", () => {
  cy.get(".ant-avatar").click();
  cy.contains("Logout").click();
  cy.get("#login_username");
  cy.get("#login_password");
  cy.url().should("include", "/");
});

Cypress.Commands.add("packer_card_daily", () => {
  cy.get(":nth-child(2) > .ant-card > .ant-card-body > .ant-btn").click();
  cy.contains("DAILY").should("have.text", "DAILY").click();
  cy.get('[data-testid="machine"]').click();
  cy.wait(2500);
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "2 Jam"]').click();
  cy.wait(2500);
  cy.get('[data-testid="button-relatif"]').click();
  cy.wait(2500);
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "4 Jam"]').click();
  cy.wait(2500);
  cy.get('[data-testid="date-root"]').click();
  cy.get('[data-testid="1 Jam Terakhir"]').click();
  cy.wait(3500);
  cy.get(".ant-page-header-back-button > svg > path").click();
});

Cypress.Commands.add("packer_card_shiftly", () => {
  cy.contains("SHIFTLY").click();
  cy.get('[data-testid="machine"]').click();
  cy.wait(2500);
  /*
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "2 Jam"]').click();
  cy.wait(2500);
  cy.get('[data-testid="button-relatif"]').click();
  cy.wait(2500);
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "4 Jam"]').click();
  cy.wait(2500);
  cy.get('[data-testid="date-root"]').click();
  cy.get('[data-testid="1 Jam Terakhir"]').click();
  cy.wait(3500);
  cy.get(".ant-page-header-back-button > svg > path").click();
  */
});

//cy.get(':nth-child(2) > .ant-card > .ant-card-body > .ant-btn').click();
