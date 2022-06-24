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

// cy.get('.ant-page-header-back-button > svg') => Tombol back :)
const timeout = { timeout: 50000 };

/*-------LOGIN----------*/
Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get("#login_username", { timeout: 50000 })
    .type(username)
    .should("have.value", username);
  cy.get("#login_password", { timeout: 50000 })
    .type(password)
    .should("have.value", password);
  cy.get("#btn-login", { timeout: 50000 }).click();
});

/*-------LINI----------*/
Cypress.Commands.add("lini", () => {
  cy.contains("OEE").should("have.text", "OEE");
  cy.contains("TEEP").should("have.text", "TEEP");
  cy.contains("UTILISASI").should("have.text", "UTILISASI");
  cy.contains("AVA").should("have.text", "AVA");
  cy.contains("PER").should("have.text", "PER");
  cy.contains("QUA").should("have.text", "QUA");
});

Cypress.Commands.add("lini_persen", () => {
  cy.contains("OEE").should("have.text", "OEE");
  cy.contains("TEEP").should("have.text", "TEEP");
  cy.contains("UTILISASI").should("have.text", "UTILISASI");
  cy.contains("AVA").should("have.text", "AVA");
  cy.contains("PER").should("have.text", "PER");
  cy.contains("QUA").should("have.text", "QUA");
});

/*-------LOGOUT----------*/
Cypress.Commands.add("logout", () => {
  cy.get(".ant-avatar").click();
  cy.contains("Logout").click();
  cy.get("#login_username");
  cy.get("#login_password");
  cy.url().should("include", "/");
});

/*-------HMI----------*/

Cypress.Commands.add("lini_card_daily1", () => {
  cy.get(":nth-child(1) > .ant-card > .ant-card-body > .ant-btn", {
    timeout: 50000,
  }).click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .first()
    .click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(".ant-page-header-back-button > svg", { timeout: 50000 }).click();
});

Cypress.Commands.add("lini_card_shiftly1", () => {
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .first()
    .click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(".ant-page-header-back-button > svg > path", {
    timeout: 50000,
  }).click();
  // cy.get(".ant-page-header-back-button > svg", { timeout: 50000 }).click();
  // cy.wait(5000);
});

Cypress.Commands.add("lini_card_daily2", () => {
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .first()
    .click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(".ant-page-header-back-button > svg", { timeout: 50000 }).click();
});

Cypress.Commands.add("lini_card_shiftly2", () => {
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .first()
    .click();
  cy.wait(5000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(".ant-page-header-back-button > svg > path", {
    timeout: 50000,
  }).click();
});

//shiftly

Cypress.Commands.add("lini_shiftly_card_daily1", () => {
  cy.wait(3500);
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.wait(3500);
  cy.get(":nth-child(1) > .ant-card > .ant-card-body > .ant-btn", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .first()
    .click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(".ant-page-header-back-button > svg", { timeout: 50000 }).click();
});

Cypress.Commands.add("lini_shiftly_card_daily1_1", () => {
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .first()
    .click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(".ant-page-header-back-button > svg", { timeout: 50000 }).click();
});

Cypress.Commands.add("lini_shiftly_card_shiftly1", () => {
  cy.wait(2000);
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .first()
    .click();
  cy.wait(3000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(3000);
  cy.get(".ant-page-header-back-button > svg > path", {
    timeout: 50000,
  }).click();
  //cy.get(".ant-page-header-back-button > svg", { timeout: 50000 }).click();
});

Cypress.Commands.add("lini_shiftly_card_shiftly1_1", () => {
  cy.wait(2000);
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .last()
    .click();
  cy.wait(3000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(3000);
  cy.get(".ant-page-header-back-button > svg > path", {
    timeout: 50000,
  }).click();
  cy.get(".ant-page-header-back-button > svg > path").click();
});

Cypress.Commands.add("lini_shiftly_card_daily2", () => {
  cy.wait(2000);
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.get(":nth-child(2) > .ant-card > .ant-card-body > .ant-btn", {
    timeout: 50000,
  })
    .last()
    .click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .last()
    .click();
  cy.wait(3000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(3000);
  cy.get(".ant-page-header-back-button > svg", { timeout: 50000 }).click();
});

Cypress.Commands.add("lini_shiftly_card_daily2_2", () => {
  cy.wait(2000);
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .last()
    .click();
  cy.wait(3000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(3000);
  cy.get(".ant-page-header-back-button > svg", { timeout: 50000 }).click();
  //cy.get(".ant-page-header-back-button > svg > path").click();
  //cy.wait(2000);
});

Cypress.Commands.add("lini_shiftly_card_shiftly2", () => {
  cy.wait(2000);
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .first()
    .click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(".ant-page-header-back-button > svg > path", {
    timeout: 50000,
  }).click();
  // cy.get(".ant-page-header-back-button > svg").click();
  // cy.wait(2000);
});

Cypress.Commands.add("lini_shiftly_card_shiftly2_2", () => {
  cy.wait(2000);
  cy.get('[data-testid="shiftly-btn"]', { timeout: 50000 }).click();
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  })
    .last()
    .click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .Button__StyledButton-sc-1s4bp2x-0", {
    timeout: 50000,
  }).click();
  cy.wait(2000);
  cy.get(".ant-page-header-back-button > svg > path", {
    timeout: 50000,
  }).click();
  // cy.get(".ant-page-header-back-button > svg").click();
  // cy.wait(2000);
});

//PACKER

Cypress.Commands.add("packer_card_daily", () => {
  cy.get('[style=""] > .Button__StyledButton-sc-1s4bp2x-0', { timeout: 50000 })
    .first()
    .click();
  cy.wait(5000);
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "2 Jam"]', { timeout: 50000 }).click();
  cy.get('[data-testid="button-relatif"]', { timeout: 50000 }).click();
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "4 Jam"]', { timeout: 50000 }).click();
  cy.get('[data-testid="date-root"]').click();
  cy.get('[data-testid="1 Jam Terakhir"]', { timeout: 50000 }).click();
  cy.get(".ant-page-header-back-button > svg > path").click();
});

Cypress.Commands.add("packer_card_daily2", () => {
  cy.get('[style=""] > .Button__StyledButton-sc-1s4bp2x-0', { timeout: 50000 })
    .last()
    .click();
  cy.wait(5000);
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "2 Jam"]', { timeout: 50000 }).click();
  cy.get('[data-testid="button-relatif"]', { timeout: 50000 }).click();
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "4 Jam"]', { timeout: 50000 }).click();
  cy.get('[data-testid="date-root"]').click();
  cy.get('[data-testid="1 Jam Terakhir"]', { timeout: 50000 }).click();
  cy.get(".ant-page-header-back-button > svg > path").click();
});

Cypress.Commands.add("packer_card_shiftly", () => {
  cy.contains("SHIFTLY").click();
  cy.wait(2500);
  cy.get('[style=""] > .Button__StyledButton-sc-1s4bp2x-0').first().click();
  cy.get('[data-testid="button-kumulatif"]').click();
  cy.get('[data-testid="button-relatif"]', { timeout: 60000 }).click();
  cy.wait(5000);
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "4 Jam"]', { timeout: 60000 }).click();
  cy.get('[data-testid="date-root"]').click();
  cy.get('[data-testid="1 Jam Terakhir"]', { timeout: 60000 }).click();
  cy.get(".ant-page-header-back-button > svg > path").click();
});

Cypress.Commands.add("packer_card_shiftly2", () => {
  cy.contains("SHIFTLY").click();
  cy.wait(2500);
  cy.get('[style=""] > .Button__StyledButton-sc-1s4bp2x-0').last().click();
  cy.get('[data-testid="button-kumulatif"]').click();
  cy.get('[data-testid="button-relatif"]', { timeout: 60000 }).click();
  cy.wait(5000);
  cy.get(".ant-select-selection-item").click();
  cy.get('[title = "4 Jam"]', { timeout: 60000 }).click();
  cy.get('[data-testid="date-root"]').click();
  cy.get('[data-testid="1 Jam Terakhir"]', { timeout: 60000 }).click();
  cy.get(".ant-page-header-back-button > svg > path").click();
});

/*-------DASHBOARD----------*/

/*-------REASON----------*/
Cypress.Commands.add("reason", () => {
  cy.get('[style="overflow: auto;"] > :nth-child(2) > .ant-row', {
    timeout: 50000,
  }).click();

  cy.get(
    '.box-1 > .reason-container > [style="overflow: auto;"] > :nth-child(3)'
  ).click();

  cy.get(
    '.box-1 > .reason-container > [style="overflow: auto;"] > :nth-child(4) > .ant-row',
    { timeout: 50000 }
  ).click();

  cy.get(
    '.box-1 > .reason-container > [style="overflow: auto;"] > :nth-child(5) > .ant-row > :nth-child(1) > span',
    { timeout: 50000 }
  ).click();

  cy.get(
    '.box-1 > .reason-container > [style="overflow: auto;"] > :nth-child(6) > .ant-row > :nth-child(1) > span',
    { timeout: 50000 }
  ).click();

  cy.get(
    '.box-1 > .reason-container > [style="overflow: auto;"] > :nth-child(7) > .ant-row > :nth-child(1) > span',
    { timeout: 50000 }
  ).click();
});

Cypress.Commands.add("curd_reason", () => {
  cy.get(
    '.box-1 > .reason-container > [style="overflow: auto;"] > :nth-child(5) > .ant-row > :nth-child(2) > .color-group > .ant-dropdown-trigger > svg'
  ).click();
});

Cypress.Commands.add("add_reason_grup", () => {
  cy.get(".ant-row > :nth-child(1) > .ant-dropdown-trigger").click();
  cy.get(".ant-dropdown-menu > :nth-child(1)").click();
  cy.get("#reason_form_name").type("testing");
  cy.get("#reason_form_color").invoke("val", "1A4D2E").trigger("change");
  cy.get("#reason_form_tag").click();
  cy.contains("Performance").click();
  cy.contains("Submit").click();
  cy.contains("Success").should("be.visible");
});

Cypress.Commands.add("edit_reason_grup", () => {
  cy.get(":nth-child(5) > .ant-row > :nth-child(2)").first().click();
  cy.contains("Edit").click();
  cy.get("#reason_form_name").clear().type("testing-1");
  cy.get(
    ".ant-form-item-control-input-content > .Button__BaseButton-lb9z7q-0"
  ).click();
  cy.contains("Success").should("be.visible");
});

Cypress.Commands.add("delete_reason_grup", () => {
  cy.get(":nth-child(5) > .ant-row > :nth-child(2)").first().click();
  cy.contains("Delete").click();
  cy.get(".swal2-confirm").click();
});

Cypress.Commands.add("add_reason_name", () => {
  cy.get(".ant-row > :nth-child(1) > .ant-dropdown-trigger", {
    timeout: 50000,
  }).click();
  cy.get(".ant-dropdown-menu > :nth-child(2)").first().click();
  cy.get("#reason_form_name").type("testing-1");
  cy.get("#reason_form_reason_group_id").click();
  cy.get('[label="testing-1"] > .ant-select-item-option-content').click();
  cy.get(".ant-select-selection-overflow").click();
  cy.contains("Packer").click();
  cy.get(
    ".ant-form-item-control-input-content > .Button__BaseButton-lb9z7q-0"
  ).click();
});

Cypress.Commands.add("edit_reason_name", () => {
  cy.get(":nth-child(5) > .ant-row").click();
  cy.wait(2000);
  cy.get(
    '.box-3 > .reason-container > [style="overflow: auto;"] > .card-group > .ant-row > :nth-child(2) > .color-group > .ant-dropdown-trigger > svg > path'
  ).click();
  cy.contains("Edit").click();
  cy.get("#reason_form_name").clear().type("testing-1-1");
  cy.get(
    ".ant-form-item-control-input-content > .Button__BaseButton-lb9z7q-0"
  ).click();
});

Cypress.Commands.add("delete_reason_name", () => {
  cy.visit("/reason");
  cy.wait(2000);
  cy.get(":nth-child(5) > .ant-row").click();
  cy.wait(2000);
  cy.get(
    '.box-3 > .reason-container > [style="overflow: auto;"] > .card-group > .ant-row > :nth-child(2) > .color-group > .ant-dropdown-trigger > svg > path'
  ).click();
  cy.contains("Delete").click();
  cy.get(".swal2-confirm").click();
});

//cy.get(".ant-page-header-back-button > svg").click();
// cy.get('.ant-breadcrumb-link')

Cypress.Commands.add("masuk_line7", () => {
  cy.get(".ant-breadcrumb-link").click();
  cy.contains("Line 7 PT Mulia Boga Raya").click();
});
