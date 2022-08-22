describe("E2e Testing Application production Mesin", () => {
  context("Supervisor (Superuser) Line 1", () => {
    const username = "SPV PRD 1";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login (team leader)", () => {
      cy.login(username, password);
      cy.masuk_line1();
    });

    it("Check Parameter lini saat masuk", () => {
      cy.lini();
    });

    it("Check daily dan line packer Mesin", () => {
      cy.get(':nth-child(1) > .ant-card > .ant-card-body > .ant-btn').click()
      cy.packer_card_daily();
    });

    it("Check Shiftly dan line packer Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check logout", () => {
      cy.logout();
    });
  });

  context("Supervisor (Superuser) Line 2", () => {
    const username = "SPV PRD 1";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login (team leader)", () => {
      cy.login(username, password);
      cy.masuk_line2();
    });

    it("Check Parameter lini saat masuk", () => {
      cy.lini();
    });

    it("Check daily dan line packer Mesin", () => {
      cy.get(':nth-child(1) > .ant-card > .ant-card-body > .ant-btn').click()
      cy.packer_card_daily();
    });

    it("Check Shiftly dan line packer Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check logout", () => {
      cy.logout();
    });
  });

  context("Supervisor (Superuser) Line 7", () => {
    const username = "SPV PRD 1";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login (team leader)", () => {
      cy.login(username, password);
      cy.masuk_line7();
    });

    it("Check Parameter lini saat masuk", () => {
      cy.lini();
    });

    it("Check daily dan line packer Mesin", () => {
      cy.get(':nth-child(1) > .ant-card > .ant-card-body > .ant-btn').click()
      cy.packer_card_daily();
    });

    it("Check Shiftly dan line packer Mesin", () => {
      cy.packer_card_shiftly();
    });

    it("Check logout", () => {
      cy.logout();
    });
  });  
});
