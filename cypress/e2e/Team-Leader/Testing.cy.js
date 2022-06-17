describe("E2e Testing Application production HMI", () => {
  context("Team Leader", () => {
    const username = "LDR PRD 4";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login (team leader)", () => {
      cy.login(username, password);
    });

    it("Check lini saat masuk", () => {
      cy.lini();
    });

    it("Check Shiftly dan line packer", () => {
      cy.shiftly();
    });

    it("Check parameter saat masuk", () => {
      cy.parameter();
    });

    it("Check logout", () => {
      cy.logout();
    });
  });

  context("Supervisor", () => {
    const username = "SPV PRD 1";
    const password = "password";

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("secret");
    });

    it("Check untuk user login (team leader)", () => {
      cy.login(username, password);
    });

    it("Check logout", () => {
      cy.logout();
    });
  });
});
